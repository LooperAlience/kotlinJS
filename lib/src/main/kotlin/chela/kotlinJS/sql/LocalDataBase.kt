package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.objForEach
import kotlin.browser.localStorage

class LocalDataBase internal constructor(db:String, ver:Int, create:Array<out String>):DataBase(db, ver, create){
    companion object{
        internal val isLocal by lazy{
            js("(function(){return window['localStorage']?true:false})()") as Boolean
        }
    }
    internal val key = "CHDB@$db.$ver"
    private val tables = mutableMapOf<String, LocalTable>()
    private val info by lazy{
        mutableMapOf<String, dynamic>().apply{
            if(isLocal) localStorage.getItem(key)?.let{
                ChJS.objForEach(JSON.parse(it)){k, v->this[k] = v}
            }
        }
    }
    init{
        if(!isLocal || localStorage.getItem(key) == null) create.forEach{
            val r = Query.create(it.trim())
            if(r != null) createTable(r) else throw Throwable("invalid query:$it")
        }
    }
    private fun getTable(tname:String) = tables[tname] ?: run {
        if(!info.containsKey(tname)) throw Throwable("invalid table:$tname")
        val t = LocalTable(this, info[tname])
        tables[tname] = t
        t
    }
    @Suppress("UnsafeCastFromDynamic")
    override fun createTable(r:dynamic){
        val tname = "${r.name}"
        if(r.ine && info.containsKey(tname)) return
        info[tname] = r
        if(isLocal) localStorage.setItem(key, JSON.stringify(obj{
            info.forEach {(k, v)->this[k] = v}
        }))
    }
    override fun remove() {
        localStorage.getItem(key)?.let{
            objForEach(JSON.parse(it)){k, v->
                (tables[k] ?: LocalTable(this, v)).remove()
            }
        }
    }
    override fun insert(r:dynamic) = run{
        getTable("${r.into}").insert(r.values[0])
        null
    }
    override fun delete(r:dynamic) = run{
        getTable("${r.from}").removeRecord(r.where)
        null
    }
    override fun update(r:dynamic)= run{
        val table = getTable("${r.`in`}")
        table.select(r.where).forEach {
            objForEach(r.set){k, v->it[k] = v}
            table.update(it)
        }
        null
    }
    override fun select(r:dynamic, fields:MutableList<String>):Array<dynamic>?{
        val table = getTable("${r.from}")
        val sel = table.select(r.where)
        if(sel.isEmpty()) return null
        var rs = selectGroup(r, fields, table, sel) ?: selectNoGroup(r, fields, sel)
        if(r.skip != undefined) rs = rs.drop(r.skip).toTypedArray()
        if(r.limit != undefined) rs = rs.take(r.limit).toTypedArray()
        return fieldZip(rs, fields)
    }
    private fun selectNoGroup(r: dynamic, fields: MutableList<String>, rs: Array<dynamic>) =
        if(r.aggregate == undefined) orderby(r, rs)
        else{
            val obj = js("{}")
            objForEach(r.aggregate){k, v->
                obj[k] = when(k){
                    "min","max"-> rs.copyOf().run{
                        sort{a, b->
                            if(a[v] > b[v]) 1
                            else if(a[v] < b[v]) -1
                            else 0
                        }
                        (if(k == "min") first() else last())[v]
                    }
                    "count"->if(v == "*") rs.size else rs.distinctBy{it[v]}.size
                    "sum"->rs.sumBy{it[v]}
                    "avg"->rs.sumBy{it[v]}.toDouble() / rs.size.toDouble()
                    else->throw Throwable("invalid aggregate:$k")
                }
                fields.add(k)
            }
            arrayOf(obj)
        }

    private fun selectGroup(r:dynamic, fields:MutableList<String>, table:LocalTable, rs:Array<dynamic>) =
        if(r.groupBy == undefined) null
        else{
            val group = rs.groupBy{it[r.groupBy]}
            if(r.aggregate == undefined){
                val isAsc = if(r.order == undefined) true else r.order.type == "asc"
                val by = if(r.order == undefined) table.pk else r.order.by
                group.map{(_, v)->
                    (if(isAsc) v.sortedBy{it[by]} else v.sortedByDescending{it[by]}).first()
                }.toTypedArray()
            }else{
                val result = group.mapValues{js("{}")}
                objForEach(r.aggregate){k, v->
                    group.forEach{(key, list)->
                        result[key][k] = when(k) {
                            "min", "max" -> list.sortedBy{it[v]}.run {
                                if(k == "min") first() else last()
                            }[v]
                            "count" -> if (v == "*") list.size else list.distinctBy { it[v] }.size
                            "sum"->list.sumBy{it[v]}
                            "avg"->list.sumBy{it[v]}.toDouble() / list.size.toDouble()
                            else->throw Throwable("invalid aggregate:$k")
                        }
                    }
                    fields.add(k)
                }
                orderby(r, result.map{it.value}.toTypedArray())
            }
        }
    private fun orderby(r:dynamic, rs:Array<dynamic>) = run{
        if(r.order != undefined){
            val order = if (r.order.type == "asc") 1 else -1
            val by = "${r.order.by}"
            rs.sort { a, b ->
                val av = a[by]
                val bv = b[by]
                when {
                    av > bv -> 1
                    av < bv -> -1
                    else -> 0
                } * order
            }
        }
        rs
    }
}