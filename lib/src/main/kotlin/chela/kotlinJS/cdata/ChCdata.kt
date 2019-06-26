package chela.kotlinJS.cdata

import chela.kotlinJS.core.ChJS.encodeURIComponent
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.core._try
import chela.kotlinJS.regex.reCdata
import chela.kotlinJS.sql.ChSql
import kotlin.js.Promise

object ChCdata{
    var cat = mutableMapOf<String, String>()
    var catDefault = mutableMapOf<String, String>()
    val cats:String get(){
        var r = ""
        cat.forEach { (k, v)->r += "&$k=$v"}
        return if(r.isEmpty()) r else r.substring(1)
    }
    private val memo = mutableMapOf<String, Any>()
    operator fun invoke(c:String, v:String){cat[c] = v}
    operator fun invoke(c:String) = cat[c] ?: ""
    operator fun invoke() = cats

    val root = Cdata("root")
    val req = mutableMapOf<String, MutableSet<String>>()
    private val rex = """\{|\}| """.toRegex()
    @Suppress("UnsafeCastFromDynamic")
    val requestKey:Promise<String?> get() = if(req.isEmpty()) Promise.resolve<String?>(null) else Promise{res, _ ->
        ChSql.db("ch").then {db->
            val r = req.map{(k, v) ->
                db.query("getCdata", "id" to "$k=${"$v".replace(rex, "")}").then { arr ->
                    //println("arr ${JSON.stringify(arr)}")
                    arr?.let {
                        _try { JSON.parse<dynamic>(it[0][0]) }?.let { json ->
                            objForEach(json) { k, v ->
                                Cdata(k, v)
                                req.remove(k)
                            }
                        }
                    }
                    1
                }
            }.toTypedArray()
            Promise.all(r).then {
                val r = "$req".replace(rex, "")
                req.clear()
                res(r)
            }
        }
    }
    fun remove(k:String){root.remove(k)}
    @Suppress("UnsafeCastFromDynamic")
    fun save(k:String, v:String):Promise<String?> = Promise{res, _->
        //정규식이 set에 여러개의 키가 있는 것을 아직 커버하지 않음
        if(!reCdata.isValidKey(k)) res("invalid key - $k")
        else{
            val json = JSON.parse<dynamic>(v)
            var isError = false
            objForEach(json){k, v->
                if(!reCdata.isValidJSONKey(k)) isError = true
                if(!isError) Cdata(k, v)
            }
            if(isError) res("invalid json key - $k")
            else ChSql.db("ch").then{db ->
                db.query("addRes", "id" to k, "contents" to v)
            }.then{res(null)}
        }
    }
    operator fun <T> get(k:String, request:MutableMap<String, MutableSet<String>> = req, retry:Int = 3):T?{
        if(retry == 0) return null
        val memoKey = "$k:$cats"
        memo[memoKey]?.let{
            @Suppress("UNCHECKED_CAST")
            return it as T
        }
        var target:Any? = root[k]
        if(target == null){
            if (request[k] == null) request[k] = mutableSetOf()
            request[k]?.add("*")
        }else if(request[k] != null){
            request[k]?.remove("*")
            if(request[k]?.isEmpty() == true) request.remove(k)
        }
        var i = 50
        var r = ""
        while(target != null && i-- > 0) (target as? Cdata)?.let {c->
            r += "${c.cat}=${cat[c.cat]}&"
            (c[cat[c.cat]] ?: c[c.default] ?: c[catDefault[if(c.default == null) c.cat else ""]])?.let{
                if(it is Cdata) target = it else{
                    if(k[0] != '@') memo[memoKey] = it
                    @Suppress("UNCHECKED_CAST")
                    return it as T
                }
            } ?: run {
                val id = r.substring(0, r.length - 1)
                if(request[k] == null) request[k] = mutableSetOf()
                request[k]?.add(id)
                target = null
            }
        }
        return null
    }
}