package chela.kotlinJS.resource

import chela.kotlinJS.core.ChJS.keys
import chela.kotlinJS.core.ChJS.obj2map
import chela.kotlinJS.i18n.ChI18n

class I18n(v:dynamic){
    var isOne = ""
    val data = mutableMapOf<String, Map<String, String>>()
    init{
        if(v.isOne != undefined) isOne = v.isOne
        if(v.data != undefined) keys(v.data){data[it] = obj2map(v.data[it]){_, v->v}}
        println()
    }
    fun set(k:String) = data.let{ChI18n.add(k, this)}
    fun remove(k:String) = ChI18n.remove(k)
}