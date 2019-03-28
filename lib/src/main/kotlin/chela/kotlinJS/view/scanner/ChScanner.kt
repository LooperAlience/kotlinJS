package chela.kotlinJS.view.scanner

import org.w3c.dom.HTMLElement
import org.w3c.dom.get

/**
 * This object scans the HTMLElement's items. Here, items refers to ChScanItem.
 * If the view in layout.xml has the value of android:tag,
 * then add it to the items of ChScanned.
 */
object ChScanner{
    private val scanned = mutableMapOf<Any, ChScanned>()
    operator fun get(k:Any): ChScanned? = scanned[k]
    fun scan(id:Any, view: HTMLElement): ChScanned {
        val prev = scanned[id]
        if(prev != null && prev.view == view) return prev
        val result = ChScanned(view)
        scanned[id] = result
        val st = view.querySelectorAll("[data-ch]")
        val j = if(view.getAttribute("data-ch").isNullOrBlank()) {
            st.length
        }else{
            st.asDynamic()[st.length] = view
            st.length + 1
        }
        var i = 0
        while(i < j){
            val el = st[i] as HTMLElement
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
                        kt = kt?.nextElementSibling
                    }
                    pos += k
                    t = p
                }
            }
            val target = ChScanItem(el, pos)
            target.fromJson("{${el.getAttribute("data-ch")}}")
            result += target
            i++
        }
        return result
    }
}
