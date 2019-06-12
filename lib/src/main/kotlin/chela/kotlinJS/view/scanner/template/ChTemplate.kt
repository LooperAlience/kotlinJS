package chela.kotlinJS.view.scanner.template

import chela.kotlinJS.model.Model
import chela.kotlinJS.view.scanner.ChScanner
import org.w3c.dom.HTMLElement

typealias NTH = (Int, Int)->Boolean
class ChTemplate(val el:HTMLElement):Model(){
    companion object{
        private val tmpls = mutableMapOf<String, ChTemplate>()
        operator fun plusAssign(el:HTMLElement){
            val t = ChTemplate(el)
            t.fromJson("{" + (el.getAttribute("data-cht") ?: "") + "}")
            el.removeAttribute("data-cht")
            tmpls[t.key] = t

        }
        fun render(el: HTMLElement, data: Array<dynamic>?, tmpl: Array<out String>, ref: Map<String, dynamic>?){
            val templates = tmpl.map{tmpls[it] ?: throw Throwable("invalid tmpl $it")}
            val d = el.asDynamic()
            @Suppress("UnsafeCastFromDynamic")
            var prev = d.__chRd__ as? RenderData
            if(prev == null || !prev.check(templates)){
                prev = RenderData(templates)
                d.__chRd__ = prev
                el.innerHTML = ""
            }
            prev.render(el, data, ref)
        }
        val nthF = mutableMapOf<String, NTH>(
            "all" to {_, _->true},
            "even" to {i, _->i % 2 == 0},
            "odd" to {i, _->i % 2 == 1},
            "first" to {i, _->i == 0},
            "last" to {i, j->i == j - 1},
            "inner" to {i, j->i != 0 && i != j - 1},
            "outer" to {i, j->i == 0 || i == j - 1}
        )
    }
    private var key = ""
    private var nth = nthF["all"] ?: throw Throwable("no all")
    private val scanned by lazy{ChScanner.scan(el)}
    override operator fun set(k:String, v:Any):Boolean{
        when(k){
            "key"->key = "$v"
            "nth"->nth = nthF["$v"] ?: throw Throwable("invalid nth:$v")
        }
        return true
    }
    override fun viewmodel(k:String, v: List<String>) = true
    internal fun rerender(target: HTMLElement?, i: Int, dSize: Int, curr: dynamic, isSkip: Boolean,  r:Map<String, dynamic>?) = if(nth(i, dSize)){
        if (!isSkip) scanned.render(target, curr, i, dSize, this, r)
        target?.nextElementSibling
    }else target
    internal fun render(target: HTMLElement, i: Int, dSize: Int, curr: dynamic,  r:Map<String, dynamic>?) = run {
        if(nth(i, dSize)){
            val el = el.cloneNode(true)
            (el as HTMLElement).removeAttribute("data-ch")
            target.appendChild(el)
            scanned.render(el as HTMLElement, curr, i, dSize, this, r)
        }
    }
    internal fun drain(target:HTMLElement, i: Int, dSize: Int) = run{
        val r = target.nextElementSibling
        if(nth(i, dSize)) target.parentNode?.removeChild(target)
        r
    }
}