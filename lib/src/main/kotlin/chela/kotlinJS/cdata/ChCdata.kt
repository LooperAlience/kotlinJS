package chela.kotlinJS.cdata

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.core._try
import chela.kotlinJS.sql.ChSql
import kotlin.js.Promise

object ChCdata{
    private var cat = mutableMapOf<String, String>()
    var catDefault = mutableMapOf<String, String>()
    private val cats:String get(){
        var r = ""
        cat.forEach { (k, v)->r += "&$k=$v"}
        return if(r.isEmpty()) r else r.substring(1)
    }
    private val db by lazy{
        _try{ChSql.getDb("ChCdata")} ?: run{
            ChSql.addDb("ChCdata", "create table if not exists cache(rowid int primary key autoIncrement, key text, contents text)")
            ChSql.addQuery("cdataGet", "select key,contents from cache where key like '@key@@%'")
            ChSql.addQuery("cdataAdd", "insert into cache(key, contents)values(@key@, @contents@)")
            ChSql.addQuery("cdataExist", "select count(*) from cache where key='@key@' and contents='@contents@'")
            ChSql.addQuery("cdataClear", "delete from cache")
            ChSql.addQuery("cdataClearKey", "delete from cache where key='@key@'")
            ChSql.getDb("ChCdata")
        }
    }
    private val cache = mutableMapOf<String, Any>()
    operator fun invoke(c:String, v:String){cat[c] = v}
    operator fun invoke(c:String) = cat[c] ?: ""
    operator fun invoke() = cats

    internal val root = Cdata("root")
    private val req = mutableMapOf<String, MutableSet<String>>()
    var api:((String)->Promise<Boolean>)? = null
    val state get() = req.map { (k, v) ->
        "$k=[${v.joinToString("&")}]"
    }.joinToString("&")
    @Suppress("UnsafeCastFromDynamic")
    fun request(block:((String)->Promise<Boolean>)? = api):Promise<Boolean>{
        block?.let{
            if(req.isNotEmpty()){
                val k = state
                req.clear()
                return it(k)
            }
        }
        return Promise.resolve(false)
    }
    fun remove(k:String){root.remove(k)}
    @Suppress("UnsafeCastFromDynamic")
    fun saveCache(res:dynamic){
        if(res != null && ChJS.isObj(res.cdata)) objForEach(res.cdata){ k, v->
            if(k.startsWith("@@")) catDefault[k.substring(1)] = v
            else if(k[0] == '@') ChCdata(k, v)
            else{
                Cdata(k, v)
                val contents= JSON.stringify(v).replace("\"", "\\\"")
                val rs = db.query("cdataExist", "key" to k, "contents" to contents)
                if(rs == null || rs[0].count == 0) db.query("cdataAdd", "key" to k, "contents" to contents)
            }
        }
    }
    fun clearCache(key:String){
        cache.remove(key)
        db.query("cdataClearKey", "key" to key)
    }
    fun clearCache() = db.query("cdataClear")
    private fun <T> loadDB(k:String):T?{
        db.query("cdataGet", "key" to k)?.forEach{Cdata(it.key, JSON.parse(it.contents))}
        return get(k, true)
    }
    @Suppress("UNCHECKED_CAST")
    operator fun <T> get(k:String, isDBLoaded:Boolean = false):T?{
        val key = "$k:$cats"
        cache[key]?.let{return it as T}
        var target:dynamic
        if(root[k] != null) target = root[k]
        else if(!isDBLoaded) return loadDB(k)
        else{
            if(req[k] == null) req[k] = mutableSetOf()
            req[k]?.add("*")
            return null
        }
        var i = 50
        var r = ""
        while(i-- > 0) (target as? Cdata)?.let{
            val c = it.cat
            val curr = cat[c]
            r += ",$c=$curr"
            val v = it[curr] ?: it[it.default] ?: it[catDefault[c]]
            if(v != null){
                if(v is Cdata) target = v
                else{
                    if(k[0] != '@') cache[key] = v
                    return v as T
                }
            }else if(!isDBLoaded) return loadDB(k)
            else{
                if(req[k] == null) req[k] = mutableSetOf()
                req[k]?.add(r.substring(1))
                return null
            }
        }
        return null
    }
}