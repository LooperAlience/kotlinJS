package chela.kotlinJS.dom

import chela.kotlinJS.view.scanner.template.ChTemplate
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event

class ChEvent(val event:Event, val el:HTMLElement){
    private val eld = el.asDynamic()
    private val _data = eld.__chel__.data
    val data:dynamic get() = _data.data
    @Suppress("UnsafeCastFromDynamic")
    val index:Int get() = _data.index
    @Suppress("UnsafeCastFromDynamic")
    val length:Int get() = _data.length
    fun render() = (_data.tmpl as? ChTemplate)?.let{
        it.rerender(_data.view, index, length, data, false)
    }
}