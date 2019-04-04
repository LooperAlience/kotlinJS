package chela.kotlinJS.view.scanner

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core._shift
import chela.kotlinJS.dom.getChildAt
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.model.Model
import chela.kotlinJS.view.ChStyle
import chela.kotlinJS.view.ChViewModel
import chela.kotlinJS.view.scanner.template.ChTemplate
import chela.kotlinJS.view.scanner.template.TemplateData
import org.w3c.dom.HTMLElement

class ChScanItem internal constructor(var view: HTMLElement, private val pos:List<Int>): Model(){
    internal lateinit var collector:Map<String, Any>
    internal var key = ""
    private var prop:MutableMap<String, List<String>>? = null
    private var propVal:MutableMap<String, Any>? = null
    private var template:TemplateData? = null
    private var record:MutableMap<String, List<String>>? = null
    private var once:MutableMap<String, Any>? = null
    private var isOnce = false
    internal fun view(v: HTMLElement){
        view = if(pos.isNotEmpty()) {
            var t = v
            for (i in pos) t = t.getChildAt(i)!!
            t
        }else v
        propVal?.clear()
        isOnce = false
    }
    private fun style(it:Map<String, Any>){
        it.forEach {(k, v) ->
            when {
                v is String && v[0] == '@' -> viewmodel(k, v.substring(2, v.length - 1).split("."))
                else -> set(k.toLowerCase(), v)
            }
        }
    }
    override operator fun set(k:String, v:Any):Boolean{
        if(v === OBJECT ||v === ARRAY) return true
        val V = "$v"
        when {
            k == "key"->key = V
            k == "style" ->V.split(",").map{it.trim()}.forEach{ ChStyle[it]?.let{style(it)}}
            else -> {
                if(once == null) once = mutableMapOf()
                once?.put(k, V)
            }
        }
        return true
    }
    override fun viewmodel(k:String, v: List<String>):Boolean{
        when(k) {
            "style" -> {
                val m = mutableMapOf<String, Any>()
                val key = "@{" + v.joinToString(".")
                val target = ChModel[v]
                (target as? ChViewModel)?.let {
                    val model = it.asDynamic()
                    @Suppress("UnsafeCastFromDynamic")
                    ChJS.keys(model) {
                        if (it[0] != '_') m[it] = if (it == "style") model[it] else "$key.$it}"
                    }
                }
                if (m.isNotEmpty()) style(m)
            }
            "template" -> template = ChModel[v] as TemplateData
            else -> {
                if (prop == null) {
                    prop = mutableMapOf()
                    propVal = mutableMapOf()
                }
                prop?.put(k, v)
            }
        }
        return true
    }
    override fun record(k:String, v: List<String>):Boolean{
        if(record == null) record = mutableMapOf()
        record?.put(k, v)
        return true
    }
    fun render(data:dynamic = null):Map<String, Any>?{
        var isRender = false
        val col = mutableMapOf<String, Any>()
        if(!isOnce){
            isOnce = true
            once?.let{
                isRender = true
                col.putAll(it)
            }
        }
        prop?.let{
            it.forEach {(k, _v) ->
                val v = ChModel[_v]
                if(_v[0][0] == '@'){
                    col[k] = v
                    isRender = true
                }else propVal?.let{
                    if(it[k] == null || it[k] != v) col[k] = v
                    it[k] = v
                    isRender = true
                }
            }
        }
        template?.let{
            col["template"] = it
            isRender = true
        }
        if(data != null && record != null){
            isRender = true
            record?.forEach {(k, keys)->
                var v = data
                keys.forEach{v = v[it]}
                col[k] = v
            }
        }
        return col
    }
}