package chela.kotlinJS.view.scanner.template

import org.w3c.dom.HTMLElement

class RenderData(private val tmpl: List<ChTemplate>) {
    val old = mutableListOf<String>()
    fun check(t: List<ChTemplate>):Boolean{
        tmpl.forEachIndexed {i, tmpl ->
            if(t[i] !== tmpl) return false
        }
        return true
    }
    fun render(el: HTMLElement, data:Array<dynamic>?){
        if(data == null) return
        val oSize = old.size
        val dSize = data.size
        val j = if(oSize > dSize) dSize else oSize
        var target = el.firstElementChild
        var i = 0
        while(i < j){
            (target as? HTMLElement)?.let { el->
                val curr = data[i]
                val v = JSON.stringify(curr)
                val isSkip = v == old[i]
                if(!isSkip) old[i] = v
                tmpl.forEach {target = it.rerender(el, i, dSize, curr, isSkip)}
            } ?: break
            i++
        }
        while(i < dSize){
            val curr = data[i]
            @Suppress("UnsafeCastFromDynamic")
            old.add(JSON.stringify(curr))
            tmpl.forEach {it.render(el, i, dSize, curr)}
            i++
        }
        while(i < oSize){
            (target as? HTMLElement)?.let { el->
                old.removeAt(old.size - 1)
                tmpl.forEach {target = it.drain(el, i, dSize)}
            } ?: break
            i++
        }
    }
}