package chela.kotlinJS.view.scanner

import chela.kotlinJS.dom.El
import org.w3c.dom.HTMLElement

/**
 * This class stores the [items] scanned by the ChScanner.
 * The [collector] create ChScanItem field with the [items]'s key and value.
 */
class ChScanned internal constructor(var view: HTMLElement, private val items:MutableSet<ChScanItem> = mutableSetOf()):MutableSet<ChScanItem> by items{
    private val collector = mutableSetOf<ChScanItem>()
    private val keyItem = mutableMapOf<String, ChScanItem>()
    private fun f(it: Any){
        if(it !is Set<*>) return
        it.forEach {
            if(it !is ChScanItem) return
            El.el = it.view
            it.collector.forEach{(k, v)-> El[k] = v }
        }
    }
    /**
     * Restore the view.
     */
    fun render(v: HTMLElement? = null): HTMLElement {
        val isNew = v != null && v !== view
        if(isNew) view = v!!
        collector.clear()
        items.forEach{
            if(isNew) it.view(view)
            if(it.render()){
                El.el = it.view
                it.collector.forEach{(k, v)-> El[k] = v }
            }
        }
        return view
    }
    fun subView(key:String):HTMLElement? = keyItem[key]?.view

    /**
     * Plus assign [it] to ChScanned's item in the ChScanner object.
     */
    override fun add(it: ChScanItem): Boolean {
        if(it.key.isNotBlank()) keyItem[it.key] = it
        return items.add(it)
    }
}