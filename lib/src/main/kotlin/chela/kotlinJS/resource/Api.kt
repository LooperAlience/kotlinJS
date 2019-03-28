package chela.kotlinJS.resource

import chela.kotlinJS.core.ChJS.keys
import chela.kotlinJS.net.ChNet

class Api(v:dynamic, base:String){
    class ApiRequest(val name: String?, val rules: String?, val task: List<String>?)
    val url = if(v.url != undefined) "$base${v.url}" else ""
    val method = if(v.method != undefined) v.method.toUpperCase() else "POST"
    val requestTask = run{
        val r = if(v.requesttask != undefined) v.requesttask else if (v.requestTask != undefined) v.requestTask else null
        if(r != null) "$r".split("|").map{it.trim()} else null
    }
    val responseTask = run{
        val r = if(v.responsetask != undefined) v.requesttask else if (v.responseTask != undefined) v.requestTask else null
        if(r != null) "$r".split("|").map{it.trim()} else null
    }
    val request = if(v.request != undefined){
        val d = v.request
        val r = mutableMapOf<String, ApiRequest>()
        keys(d) { k ->
            val v = d[k]
            r[k] = ApiRequest(
                    (if (v.name == undefined) null else v.name) as? String,
                    (if (v.rules == undefined) null else v.rules) as? String,
                    if (v.task == undefined) null else "${v.task}".split("|").map { it.trim() }
            )
        }
        r
    }else null
    fun set(k:String) = ChNet.add(k, this)
    fun remove(k:String) = ChNet.remove(k)
}