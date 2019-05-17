package chela.kotlinJS.view.scanner

import chela.kotlinJS.Ch
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.dom.getChildAt
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.model.Model
import chela.kotlinJS.regex.reV
import chela.kotlinJS.view.ChStyle
import chela.kotlinJS.view.ChViewModel
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
            if(v is String && v[0] == '@') viewmodel(k, v.substring(2, v.length - 1).split("."))
            else set(k, v)
        }
    }
    override operator fun set(k:String, v:Any):Boolean{
        if(v === OBJECT ||v === ARRAY) return true
        val V = "$v"
        when (k) {
            "key" -> key = V
            "style" -> V.split(",").map{it.trim()}.forEach{ ChStyle[it]?.let{style(it)}}
            else -> {
                if(once == null) once = mutableMapOf()
                once?.put(k, v)
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
                        if (it[0] != '_'){
                            m[it] = if(it == "style") model[it] else "$key.$it}"
                        }
                    }
                }
                if (m.isNotEmpty()) style(m)
            }
            "template" -> template = target as TemplateData
            else ->{
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
        if (record == null) record = mutableMapOf()
        record?.put(k, v)
        return true
    }
    fun render(data:dynamic? = null):Map<String, Any>?{
        val r = mutableMapOf<String, Any>()
        if(!isOnce){
            isOnce = true
            once?.let{
                r.putAll(it)
                once = null
            }
        }
        prop?.let{
            it.forEach {(k, _v) ->
                when(val v = Ch.value(ChModel[_v], data)){
                    is Ch.Once->{
                        r[k] = Ch.value(v.v)
                        v.isRun = true
                        prop?.remove(k)
                    }
                    is Ch.Update->r[k] = Ch.value(v.v)
                    else->propVal?.let{
                        val pv = it[k]
                        if(pv == null || pv != v){
                            r[k] = v
                            it[k] = v
                        }
                    }
                }
            }
        }

        template?.let{
            r["template"] = it
        }
        record?.forEach {(k, _v)->
            if(data == null) throw Throwable("no data for record")
            val v = Ch.value(ChModel.record(_v, data))
            when{
                k == "style" -> objForEach(v){k, v->
                    when(val sv = Ch.value(v ?: Ch.NONE)){
                        is Ch.Once -> if (!sv.isRun) {
                            r[k] = Ch.value(sv.v)
                            sv.isRun = true
                        }
                        is Ch.Update -> r[k] = Ch.value(sv.v)
                        else -> r[k] = sv
                    }
                }
                v is Ch.Once -> {
                    r[k] = Ch.value(v.v)
                    v.isRun = true
                    record?.remove(k)
                }
                v is Ch.Update -> r[k] = Ch.value(v.v)
                else -> r[k] = v
            }
        }
        if(r.isNotEmpty()) r.forEach{(k, v)->
            r[k] = if(v is String && v.indexOf(' ') == -1) reV.num(v) ?: v
            else v
        }
        return r
    }
}