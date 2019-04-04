package chela.kotlinJS.view.scanner.template

import chela.kotlinJS.model.Model
import chela.kotlinJS.view.scanner.ChScanner
import org.w3c.dom.HTMLElement
import kotlin.browser.document

class ChTemplate(val el:HTMLElement):Model(){
    companion object{
        private val tmpls = mutableMapOf<String, ChTemplate>()
        operator fun plusAssign(el:HTMLElement){
            val t = ChTemplate(el)
            t.fromJson("{" + (el.getAttribute("data-cht") ?: "") + "}")
            el.removeAttribute("data-cht")
            tmpls[t.key] = t

        }
        fun render(el:HTMLElement, data:Array<dynamic>?, tmpl:Array<out String>){
            val templates = tmpl.map{tmpls[it] ?: throw Throwable("invalid tmpl $it")}
            val d = el.asDynamic()
            @Suppress("UnsafeCastFromDynamic")
            var prev = d.__ch__ as? RenderData
            if(prev == null || !prev.check(templates)){
                prev = RenderData(templates)
                d.__ch__ = prev
                el.innerHTML = ""
            }
            prev.render(el, data)
        }
    }
    private lateinit var key:String
    private val scanned by lazy{ChScanner.scan(el)}
    override operator fun set(k:String, v:Any):Boolean{
        when(k){
            "key"->key = "$v"
        }
        return true
    }
    override fun viewmodel(k:String, v: List<String>) = true
    internal fun isNTH(i: Int, dSize: Int) = true
    internal fun rerender(target: HTMLElement?, i: Int, dSize: Int, curr: dynamic, isSkip: Boolean) = if(isNTH(i, dSize)){
        if (!isSkip) scanned.render(target, curr, i, dSize, this)
        target?.nextElementSibling
    }else target
    internal fun render(target: HTMLElement, i: Int, dSize: Int, curr: dynamic) = run {
        if (isNTH(i, dSize)) {
            val el = el.cloneNode(true)
            target.appendChild(el)
            scanned.render(el as HTMLElement, curr, i, dSize, this)
        }
    }
    internal fun drain(target:HTMLElement, i: Int, dSize: Int) = run{
        val r = target.nextElementSibling
        target.parentNode?.removeChild(target)
        r
    }
}