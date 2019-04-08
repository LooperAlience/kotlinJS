package chela.kotlinJS.view.scanner

import chela.kotlinJS.Ch
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.objForEach
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
    private var update:MutableMap<String, Any>? = null
    private var isOnce = false
    internal fun view(v: HTMLElement){
        view = if(pos.isNotEmpty()) {
            var t = v
            var i = pos.size
            while(i-- > 0) t = t.getChildAt(pos[i])!!
            t
        }else v
        propVal?.clear()
        isOnce = false
    }
    private fun style(it:Map<String, Any>){
        it.forEach {(k, v) ->
            when {
                v is String && v[0] == '@' -> viewmodel(k, v.substring(2, v.length - 1).split("."))
                else -> set(k, v)
            }
        }
    }
    override operator fun set(k:String, v:Any):Boolean{
        if(v === OBJECT ||v === ARRAY) return true
        val V = "$v"
        if(k == "focus") println("update0 $k, $V, ${V.substring(7)}")
        when {
            k == "key"->key = V
            k == "style" ->V.split(",").map{it.trim()}.forEach{ ChStyle[it]?.let{style(it)}}
            v is Ch.Update->{
                if(update == null) update = mutableMapOf()
                update?.put(k, v.v)
            }
            else -> {
                if(once == null) once = mutableMapOf()
                once?.put(k, if(v is Ch.Once) v.v else v)
            }
        }
        return true
    }
    override fun viewmodel(k:String, v: List<String>):Boolean{
        val target = ChModel[v]
        when(k) {
            "style" -> {
                val m = mutableMapOf<String, Any>()
                val key = "@{" + v.joinToString(".")
                (target as? ChViewModel)?.let {
                    val model = it.asDynamic()
                    @Suppress("UnsafeCastFromDynamic")
                    ChJS.keys(model) {
                        if (it[0] != '_') m[it] = if (it == "style") model[it] else "$key.$it}"
                    }
                }
                if (m.isNotEmpty()) style(m)
            }
            "template" -> template = target as TemplateData
            else ->{
                if(target is Ch.Once || target is Ch.Update) set(k, target)
                else {
                    if (prop == null) {
                        prop = mutableMapOf()
                        propVal = mutableMapOf()
                    }
                    prop?.put(k, v)
                }
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
        update?.let{
            isRender = true
            col.putAll(it)
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
                when(k){
                    "style"->{objForEach(v){k, v->col[k] = v}}
                    else->col[k] = v
                }
            }
        }
        return col
    }
}