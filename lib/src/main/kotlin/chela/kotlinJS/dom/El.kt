package chela.kotlinJS.dom

import chela.kotlinJS.regex.reStyle
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.events.Event
import kotlin.browser.document

typealias domEvent = (Event, HTMLElement)->Unit
object El{
    private val event = run{
        val doc = document.asDynamic()
        doc.ch = js("{e:{}}")
        doc.ch.e
    }
    private var _el:HTMLElement = document.body!!
    internal var el:HTMLElement
        get() = _el
        set(v){
            _el = v
            elStyle = v.style.asDynamic()
        }
    private var elStyle:dynamic? = null
    private val bodyStyle = document.body?.style
    private val prefix = "webkit,Moz,chrome,ms".split(',')
    private val keys = mutableMapOf<String, String>()
    private val prop = mutableMapOf<String, (String, String)->Unit>(
        "className" to {_, v-> _el.className = v},
        "html" to {_, v-> _el.innerHTML = v},
        "+html" to {_, v-> _el.innerHTML = v + _el.innerHTML},
        "html+" to {_, v-> _el.innerHTML += v},
        "submit" to {_, _->(_el as? HTMLFormElement)?.let{it.submit()}},
        "focus" to {_, _-> _el.focus()},
        "blur" to {_, _-> _el.blur()},
        "checked" to {_, v->(_el as? HTMLInputElement)?.let{it.checked = v == "true"}},
        "selected" to {_, v->if(v == "false") (_el as? HTMLSelectElement)?.let{it.selectedIndex = -1}},
        "unselect" to {_, v->
            if(v == "true"){
                set("user-select", "none")
                set("touch-callout", "none")
                _el.setAttribute("unselectable", "on")
                _el.setAttribute("onselectstart", "return false")
            }else{
                set("user-select", "null")
                set("touch-callout", "null")
                _el.removeAttribute("unselectable")
                _el.removeAttribute("onselectstart")
            }
        },
        "value" to {_, v->v?.let{
                _el.setAttribute("value", v)
                (_el as? HTMLSelectElement)?.let{it.value = v } ?:
                (_el as? HTMLInputElement)?.let{it.value = v }
            } ?: run{
                _el.removeAttribute("value")
                (_el as? HTMLSelectElement)?.let{it.value = ""} ?:
                (_el as? HTMLInputElement)?.let{it.value = ""}
            }
        },
        "A" to {k, v-> _el.setAttribute(k, v)}
    )
    operator fun set(k:String, v:Any){
        println("elSet:$k-$v")
        if(k[0] == 'E'){
            println("E-" + )
            _el.setAttribute("on" + k.substring(1), "document.ch.e.a(event, this)")
            @Suppress("UNCHECKED_CAST")
            (v as? domEvent)?.let{
                event.a = it
            }
        }else {
            val s = "$v"
            prop["${k[0]}"]?.let { it(k.substring(1), s) } ?: prop[k]?.let { it(k, s) } ?: run {
                val kk = keys[k] ?: key(k)
                if (kk != "") elStyle[kk] = if (s == "null") null else s
            }
        }
    }
    private fun key(k:String):String{
        val v = reStyle.key(k)
        var r = ""
        bodyStyle?.let{
            val bs = it.asDynamic()
            if(bs[v] != null){
                r = v
            }else{
                val vk = v[0].toUpperCase() + v.substring(1)
                prefix.any{
                    if(bs[it + vk] != null){
                        r = it + vk
                        true
                    }else false
                }
            }
        }
        keys[k] = r
        return r
    }
    var className:String
        get()= _el.className
        set(v){
            _el.className = v}

    fun addClass(vararg v:String){
        val cls = className.trim().split(" ")
        v.forEach {
            val v = it.trim()
            if(cls.indexOf(v) == -1) className = "$cls $v"
        }
    }
    fun removeClass(vararg v:String){
        val cls = className.trim().split(" ") as MutableList
        cls.removeAll(v)
        className = cls.joinToString(" ")
    }
    var html:String
        get() = _el.innerHTML
        set(v){
            _el.innerHTML = v}
    fun beforeHtml(v:String){
        _el.innerHTML = "$v${_el.innerHTML}"}
    fun afterHtml(v:String){
        _el.innerHTML += v}
    fun submit() = (_el as? HTMLFormElement)?.let{it.submit()}
    fun focus() = _el.focus()
    fun blur() = _el.blur()
    var checked:Boolean
        get() = (_el as? HTMLInputElement)?.let{it.checked} ?: false
        set(v){(_el as? HTMLInputElement)?.let{it.checked = v}}
    var selected:Boolean
        get() = (_el as? HTMLSelectElement)?.let{it.selectedIndex != -1} ?: false
        set(v){
            if(!v) (_el as? HTMLSelectElement)?.let{it.selectedIndex = -1}
        }
    var style:String
        get() = _el.style.cssText
        set(v) = v.split(";").forEach {
            val v = it.split(":").map{it.trim()}
            set(v[0], v[1])
        }
    var unselect:Boolean
        get() = false
        set(v) {
            if(v){
                set("user-select", "none")
                set("touch-callout", "none")
                _el.setAttribute("unselectable", "on")
                _el.setAttribute("onselectstart", "return false")
            }else{
                set("user-select", "null")
                set("touch-callout", "null")
                _el.removeAttribute("unselectable")
                _el.removeAttribute("onselectstart")
            }
        }
    var value:String?
        get() = (_el as? HTMLSelectElement)?.let{it.value} ?:
            (_el as? HTMLInputElement)?.let{it.value} ?: ""
        set(v){
            v?.let{
                _el.setAttribute("value", v)
                (_el as? HTMLSelectElement)?.let{it.value = v} ?:
                (_el as? HTMLInputElement)?.let{it.value = v}
            } ?: run{
                _el.removeAttribute("value")
                (_el as? HTMLSelectElement)?.let{it.value = ""} ?:
                (_el as? HTMLInputElement)?.let{it.value = ""}
            }
        }
}