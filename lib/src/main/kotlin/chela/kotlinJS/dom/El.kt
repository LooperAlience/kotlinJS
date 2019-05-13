package chela.kotlinJS.dom

import chela.kotlinJS.Ch
import chela.kotlinJS.core.ChJS.isIn
import chela.kotlinJS.core.delete
import chela.kotlinJS.core.uuid
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.regex.reStyle
import chela.kotlinJS.throttleF
import chela.kotlinJS.view.scanner.template.ChTemplate
import chela.kotlinJS.view.scanner.template.TemplateData
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

typealias domEvent = (Event, HTMLElement)->Unit
class El(val el:HTMLElement, val record:dynamic = null){
    companion object {
        private val event = run{
            val win = window.asDynamic()
            win.__ch__ = js("{e:{}}")
            win.__ch__.e
        }
        private val body = document.body
        private val bodyStyle = document.body?.style

        private val prefix = "webkit,Moz,chrome,ms".split(',')
        private val evKey = mutableMapOf<String, String?>()
        private val keys = mutableMapOf<String, String>()

        private val scroll = mutableListOf<(Double, Double)->Boolean>()
        private fun scrollAdd(f:(Double, Double)->Boolean){
            if(scroll.isEmpty()){
                val f = Ch.throttle{_, _->
                    val x = window.scrollX
                    val y = window.scrollY
                    var i = scroll.size
                    while(i-- > 0){
                        if(!scroll[i](x, y)) scroll.removeAt(i)
                    }
                }
                window.addEventListener("scroll", {f()})
            }
            scroll += f
        }

        @Suppress("UnsafeCastFromDynamic")
        private val prop = mutableMapOf<String, (El, HTMLElement, String, dynamic)->Unit>(
            "className" to {self, el, _, v-> el.className = v},
            "+className" to {self, el, _, v-> el.className = v + " " + el.className},
            "html" to {self, el, _, v-> el.innerHTML = v},
            "+html" to {self, el, _, v-> el.innerHTML = v + el.innerHTML},
            "html+" to {self, el, _, v-> el.innerHTML += v},
            "name" to {self, el, _, v->
                when(el){
                    is HTMLFormElement -> el.name = v
                    is HTMLInputElement -> el.name = v
                }
            },
            "submit" to {self, el, _, _->(el as? HTMLFormElement)?.let{it.submit()}},
            "focus" to {self, el, _, v-> if(v == "true") el.focus()},
            "blur" to {self, el, _, _-> el.blur()},
            "checked" to {self, el, _, v->(el as? HTMLInputElement)?.let{it.checked = v == "true"}},
            "selected" to {self, el, _, v->(el as? HTMLOptionElement)?.let{it.selected = v == "true"}},
            "selectedIndex" to {self, el, _, v->(el as? HTMLSelectElement)?.let{it.selectedIndex = v.toInt()}},
            "unselect" to {self, el, _, v->
                if(v == "true"){
                    self["user-select"] = "none"
                    self["touch-callout"] = "none"
                    el.setAttribute("unselectable", "on")
                    el.setAttribute("onselectstart", "return false")
                }else{
                    self["user-select"] = "null"
                    self["touch-callout"] = "null"
                    el.removeAttribute("unselectable")
                    el.removeAttribute("onselectstart")
                }
            },
            "value" to {self, el, _, v->
                if(v != null){
                    el.setAttribute("value", v)
                    (el as? HTMLSelectElement)?.let{it.value = v } ?:
                    (el as? HTMLInputElement)?.let{it.value = v }
                }else{
                    el.removeAttribute("value")
                    (el as? HTMLSelectElement)?.let{it.value = ""} ?:
                    (el as? HTMLInputElement)?.let{it.value = ""}
                }
            },
            "A" to {self, el, k, v-> el.setAttribute(k, v)},
            "lazySrc" to {self, el, k, v->
                val src = v.split(" ")
                if(window.innerHeight + 100 > el.getBoundingClientRect().top){
                    el.setAttribute("src", src[1])
                }else{
                    el.setAttribute("src", src[0])
                    scrollAdd{ x, y ->
                        val r = window.innerHeight + 50 < el.getBoundingClientRect().top
                        if (!r) el.setAttribute("src", src[1])
                        r
                    }
                }
            },
            "topViewPort" to {self, el, k, v->
                if(window.innerHeight > el.getBoundingClientRect().top) v()
                else scrollAdd{ x, y ->
                    val r = window.innerHeight < el.getBoundingClientRect().top
                    if(!r) v()
                    r
                }
            }
        )
    }
    private var elStyle = el.style.asDynamic()
    operator fun set(k:String, _v:Any){
        if(_v == undefined) return
        if(k == "template"){
            (_v as? TemplateData)?.let{ChTemplate.render(el, it.data, it.templates)}
            return
        }
        val v = if(_v == "null") null
            else if(_v !is String) _v
            else when(_v[0]){
                '@'->ChModel[_v.substring(2, _v.length - 1)]
                '$'->record?.let{
                    val k = "$_v".substring(2, _v.length - 1)
                    if(k.isBlank()) record
                    else{
                        var t = record
                        k.split(".").forEach {t = t[it]}
                        t
                    }
                } ?: throw Throwable("no record")
                else-> _v
            }
        prop["${k[0]}"]?.let {it(this, el, k.substring(1), v)} ?: prop[k]?.let{it(this, el, k, v)} ?:
        run{
            val kk = keys[k] ?: key(k)
            if(kk != "") elStyle[kk] = v
            else eventKey(k)?.let{k->
                @Suppress("UNCHECKED_CAST")
                if(v == "null"){
                    el.getAttribute(k)?.let{
                        if(it.isNotBlank()) delete(event[it.substring(it.indexOf('[') + 1, it.indexOf(']'))])
                    }
                    el.removeAttribute(k)
                }else (v as? domEvent)?.let {
                    val id = uuid()
                    event[id] = it
                    el.setAttribute(k, "__ch__.e['$id'](event, this)")
                }
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
    private fun eventKey(k:String) = run {
        if(!evKey.containsKey(k)) evKey[k] = if(isIn("on$k", body)) "on$k" else null
        evKey[k]
    }
    var className:String
        get()= el.className
        set(v){
            el.className = v}

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
        get() = el.innerHTML
        set(v){
            el.innerHTML = v}
    fun beforeHtml(v:String){
        el.innerHTML = "$v${el.innerHTML}"}
    fun afterHtml(v:String){
        el.innerHTML += v}
    fun submit() = (el as? HTMLFormElement)?.let{it.submit()}
    fun focus() = el.focus()
    fun blur() = el.blur()
    var checked:Boolean
        get() = (el as? HTMLInputElement)?.let{it.checked} ?: false
        set(v){(el as? HTMLInputElement)?.let{it.checked = v}}
    var selected:Boolean
        get() = (el as? HTMLOptionElement)?.let{it.selected} ?: false
        set(v){
            if(!v) (el as? HTMLOptionElement)?.let{it.selected = v}
        }
    var selectedIndex:Int
        get() = (el as? HTMLSelectElement)?.let{it.selectedIndex} ?: -1
        set(v){
            (el as? HTMLSelectElement)?.let{it.selectedIndex = v}
        }
    var style:String
        get() = el.style.cssText
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
                el.setAttribute("unselectable", "on")
                el.setAttribute("onselectstart", "return false")
            }else{
                set("user-select", "null")
                set("touch-callout", "null")
                el.removeAttribute("unselectable")
                el.removeAttribute("onselectstart")
            }
        }
    var value:String?
        get() = (el as? HTMLSelectElement)?.let{it.value} ?:
            (el as? HTMLInputElement)?.let{it.value} ?: ""
        set(v){
            v?.let{
                el.setAttribute("value", v)
                (el as? HTMLSelectElement)?.let{it.value = v} ?:
                (el as? HTMLInputElement)?.let{it.value = v}
            } ?: run{
                el.removeAttribute("value")
                (el as? HTMLSelectElement)?.let{it.value = ""} ?:
                (el as? HTMLInputElement)?.let{it.value = ""}
            }
        }
}