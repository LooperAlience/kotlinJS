package chela.kotlinJS.view.scanner

import chela.kotlinJS.dom.El
import chela.kotlinJS.view.scanner.template.ChTemplate
import org.w3c.dom.HTMLElement

class ChScanned internal constructor(var view: HTMLElement, private val items:MutableSet<ChScanItem> = mutableSetOf()):MutableSet<ChScanItem> by items{
    private val keyItem = mutableMapOf<String, ChScanItem>()
    fun render(v: HTMLElement? = null, m: dynamic = null, i: Int = 0, size: Int = 0, tmpl:ChTemplate? = null): HTMLElement {
        val isNew = v != null && v !== view
        if(isNew) view = v!!
        items.forEach{item->
            if(isNew) item.view(view)
            val r = item.render(m)
            r?.let{
                val vi = item.view
                val v = vi.asDynamic()
                if(v.__chel__ == undefined) v.__chel__ = js("{data:{}}")
                v.__chel__.data.index = i
                v.__chel__.data.length = size
                v.__chel__.data.data = m
                v.__chel__.data.tmpl = tmpl
                v.__chel__.data.view = view
                val el = El(vi)
                it.forEach{(k, v)->el[k] = v}
            }
        }
        return view
    }
    fun subView(key:String):HTMLElement? = keyItem[key]?.view
    override fun add(it: ChScanItem): Boolean {
        if(it.key.isNotBlank()) keyItem[it.key] = it
        return items.add(it)
    }
}