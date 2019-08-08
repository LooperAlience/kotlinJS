package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.delete
import chela.kotlinJS.sql.LocalDataBase.Companion.isLocal
import kotlin.browser.localStorage

/*
v = {
  name:"tableName",
  columns:[
    {name:'name', dataType:'int', primaryKey:true, autoIncrement: true, notNull: true}
  ],
}
 */
class LocalTable(val db:LocalDataBase, v:dynamic){
    private val key = "${db.key}/${v.name}"
    internal val pk:String
    private val isAuto:Boolean
    private val columns = v.columns
    init{
        var pkv = ""
        var auto = false
        ChJS.objAny(v.columns){k, v->
            if(v.primaryKey == true){
                pkv = v.name
                auto = v.autoIncrement == true
                true
            }else false
        }
        pk = pkv
        isAuto = auto
    }
    private var seed = 1
    private val records = mutableMapOf<Any,dynamic>()
    private var isInited = false
    private fun init(){
        if(isInited) return
        isInited = true
        if(isLocal) localStorage.getItem(key)?.let{
            var max = 1
            JSON.parse<dynamic>(it).unsafeCast<Array<dynamic>>().forEach{
                if(isAuto && it[pk] > max) max = it[pk]
                records[it[pk]] = it
            }
            if(isAuto) seed = max + 1
        }
    }
    private fun save(){
        if(isLocal) localStorage.setItem(key, "[" + records.values.joinToString(","){
            JSON.stringify(it)
        } + "]")
    }
    fun remove(){
        records.clear()
        if(isLocal) localStorage.removeItem(key)
    }
    fun select(where:dynamic):Array<dynamic>{
        init()
        var rs = records.values.toTypedArray()
        if(where != undefined) rs = rs.filter{
            var isOk = true
            var target = where
            var i = 10
            do{
                var or:dynamic = null
                ChJS.objForEach(target) { k, v ->
                    if(ChJS.isObj(v)) when {
                        k == "or"-> or = v
                        v["="] != undefined->isOk = it[k] == v["="]
                        v[">"] != undefined->isOk = it[k] > v[">"]
                        v["<"] != undefined->isOk = it[k] > v["<"]
                        v["!="] != undefined->isOk = it[k] > v["!="]
                        v[">="] != undefined->isOk = it[k] > v[">="]
                        v["<="] != undefined->isOk = it[k] > v["<="]
                        v["like"] != undefined->{
                            var s = "${v["like"]}"
                            val l = s.first() == '%'
                            val r = s.last() == '%'
                            s = s.substring(if(l) 1 else 0, s.length - if(r) 1 else 0)
                            val t = "${it[k]}"
                            isOk = if(l && r) t.contains(s)
                            else if(l) t.endsWith(s)
                            else if(r) t.startsWith(s)
                            else throw Throwable("invalid like:${v["like"]}")
                        }
                    }else isOk = it[k] == v
                }
                if(or == null) break else target = or
            }while(i-- > 0)
            isOk
        }.toTypedArray()
        return rs
    }
    fun insert(v:dynamic){
        init()
        if(isAuto) v[pk] = seed++
        validFieldAdd(v)
    }
    fun update(v:dynamic){
        init()
        validFieldAdd(v)
    }
    private fun validFieldAdd(v:dynamic){
        ChJS.objForEach(v){k, _->if(columns[k] == undefined) delete(v[k])}
        records[v[pk]] = v
        save()
    }
    fun removeRecord(where:dynamic){
        select(where).forEach {records.remove(it[pk])}
        save()
    }
}