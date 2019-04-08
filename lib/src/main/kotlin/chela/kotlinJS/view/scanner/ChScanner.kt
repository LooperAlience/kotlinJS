package chela.kotlinJS.view.scanner

import chela.kotlinJS.core.toList
import chela.kotlinJS.view.scanner.template.ChTemplate
import org.w3c.dom.HTMLElement
import kotlin.collections.set

/**
 * This object scans the HTMLElement's items. Here, items refers to ChScanItem.
 * If the view in layout.xml has the value of android:tag,
 * then add it to the items of ChScanned.
 */
object ChScanner{
    private val scanned = mutableMapOf<Any, ChScanned>()
    operator fun get(k:Any): ChScanned? = scanned[k]
    fun scan(view:HTMLElement, id:Any? = null): ChScanned {
        if(id != null) {
            val prev = scanned[id]
            if (prev != null && prev.view == view) return prev
        }
        template(view)
        val result = ChScanned(view)
        val st = view.querySelectorAll("[data-ch]").toList()
        if(!view.getAttribute("data-ch").isNullOrBlank()) st += view
        st.forEach {el->
            val pos = mutableListOf<Int>()
            var t = el
            var limit = 30
            while(t !== view && limit-- > 0){
                t.parentElement?.let {
                    val p = it as HTMLElement
                    var k = 0
                    var kt = p.firstElementChild
                    while(k < 100 && kt != null && kt !== t){
                        k++
                        kt = kt.nextElementSibling
                    }
                    pos += k
                    t = p
                }
            }
            val target = ChScanItem(el, pos)
            val v = el.getAttribute("data-ch") ?: ""
            target.fromJson( if(v[0] == '@' || v[0] == '$') "{style:$v}" else "{$v}")
            result += target
            el.removeAttribute("data-ch")
        }
        id?.let{scanned[id] = result}
        return result
    }
    fun template(view:HTMLElement){
        val st = view.querySelectorAll("[data-cht]").toList()
        if(!view.getAttribute("data-cht").isNullOrBlank()) st += view
        st.forEach{it.parentElement?.removeChild(it)}
        st.forEach{ChTemplate += it}
    }
}
