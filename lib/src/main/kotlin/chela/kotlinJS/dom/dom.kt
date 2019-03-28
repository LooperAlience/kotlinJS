package chela.kotlinJS.dom

import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import kotlin.browser.document

typealias elInit = El.()->Unit

object ChDom{
    private val doc = document
    private val docel = doc.documentElement
    private val table = doc.createElement("table")
    private val body = doc.createElement("body")
    private val select = doc.createElement("select")
    fun el(tagName:String, block: elInit? = null):HTMLElement{
        val el = doc.createElement(tagName) as HTMLElement
        block?.let{
            El.el = el
            El.it()}
        return el
    }
    fun el(element:HTMLElement, block: elInit):HTMLElement{
        El.el = element
        El.block()
        return element
    }
    fun tag2html(txt:String):HTMLElement{
        val tag = txt.substring(1, txt.indexOf('>')).split(' ')[0].toUpperCase()
        inline fun t2h(el:Element, depth:Boolean):Element?{
            el.innerHTML = txt
            var v = el
            var limit = 20
            while(v.firstElementChild?.let{
                v = it
                if(v.tagName == tag) return v
                depth
            } == true && limit-- > 0){}
            return null
        }
        t2h(body, false)
        t2h(table, true)
        t2h(select, true)
        throw Throwable("invalid Tag:$txt")
    }
}