package chela.kotlinJS.view.scanner

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core._shift
import chela.kotlinJS.dom.getChildAt
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.model.Model
import chela.kotlinJS.view.ChStyle
import chela.kotlinJS.view.ChViewModel
import org.w3c.dom.HTMLElement

/**
 * Scans the view component.
 * @param view has android tag value.
 * @param pos has the index of the child view.
 */
class ChScanItem internal constructor(var view: HTMLElement, private val pos:List<Int>): Model(){

    internal val collector = mutableMapOf<String, String>()
    internal var key = ""
    private var prop:MutableMap<String, List<String>>? = null
    private var propVal:MutableMap<String, String>? = null
    private var record:MutableMap<String, List<String>>? = null
    private var recordVal:MutableMap<String, String>? = null
    private var updater:MutableMap<String, String>? = null
    private var once:MutableMap<String, String>? = null
    private var isOnce = false
    internal fun view(v: HTMLElement){
        var t = v
        for(i in pos) t = t.getChildAt(i)!!
        view = t
        propVal?.clear()
        recordVal?.clear()
        isOnce = false
    }
    private fun style(it:Map<String,Any>){
        it.forEach {(k, v) ->
            when {
                v is String && v[0] == '@' -> viewmodel(k, v.substring(2, v.length - 1).split("."))
                else -> set(k.toLowerCase(), v)
            }
        }
    }

    /**
     * Store style attributes on [updater] or [once].
     * @param k If [k] is style or 0 index is @, then key of JSONObject or JSONArray.
     * Otherwise, [k] is key of style attribute. For example, "textcolor".
     * @param v String format with JSONObject, JSONArray or value of style attribute. For example, "#999999".
     */
    override operator fun set(k:String, v:Any):Boolean{
        if(v === OBJECT ||v === ARRAY) return true
        val V = "$v"
        when {
            k == "style" ->V.split(",").map{it.trim()}.forEach{ ChStyle[it]?.let{style(it)}}
            k[0] == '@' -> {
                if(updater == null) updater = mutableMapOf()
                updater?.put(k._shift(), V)
            }
            else -> {
                if(once == null) once = mutableMapOf()
                once?.put(k, V)
            }
        }
        return true
    }

    /**
     * Get the style key and instance of the view component
     * @param k style key. For example, "style", "alpha", etc.
     * @param v Chela style identifier. For example, [SplashVM, holder], [SplashVM, holder, alpha], etc.
     * If k is a style, [v] join with style attributes by point separator.  For example, @{SplashVM.holder.alpha}, @{SplashVM.holder.visibility}, etc.
     * This process is repeated until the attribute is stored in [prop], [once], or [updater].
     */
    override fun viewmodel(k:String, v: List<String>):Boolean{
        if(k[0] == '-') {
            if (once == null) once = mutableMapOf()
            once?.put(k._shift(), "${ChModel[v]}")
        }else if(k == "style"){
            val m = mutableMapOf<String, Any>()
            val key = "@{" + v.joinToString(".")
            val target = ChModel[v]
            (target as? ChViewModel)?.let{
                val model = it.asDynamic()
                @Suppress("UnsafeCastFromDynamic")
                ChJS.keys(model){
                    if(it[0] != '_') m[it] = if(it == "style") model[it] else "$key.$it}"
                }
            }
            if(m.isNotEmpty()) style(m)
        }else{
            if(prop == null){
                prop = mutableMapOf()
                propVal = mutableMapOf()
            }
            prop?.put(k, v)
        }
        return true
    }
    override fun record(k:String, v: List<String>):Boolean{
        if(record == null){
            record = mutableMapOf()
            recordVal = mutableMapOf()
        }
        record?.put(k, v)
        return true
    }
    fun render(model: Model? = null):Boolean{
        var isRender = false
        collector.clear()
        if(!isOnce){
            isOnce = true
            once?.let{
                isRender = true
                collector.putAll(it)
            }
        }
        updater?.let{
            isRender = true
            collector.putAll(it)
        }
        prop?.let{
            it.forEach {(k, _v) ->
                val v = "${ChModel[_v]}"
                if(k[0] == '@'){
                    collector[k._shift()] = v
                    isRender = true
                }else propVal?.let{
                    if(it[k] == null || it[k] != v) collector[k] = v
                    it[k] = v
                    isRender = true
                }
            }
        }
        record?.let{record->
            model?.let{collector.putAll(record.mapValues{ (_, v)->"${ChModel.record(v, it)}"}.filter ch@{ (k, v)->
                recordVal?.let{
                    it[k]?.let{if(it == v) return@ch false}
                    it.put(k, v)
                    isRender = true
                }
                return@ch true
            }
            )}}
        return isRender
    }
}