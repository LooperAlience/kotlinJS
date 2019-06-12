package chela.kotlinJS.view.scanner

import chela.kotlinJS.Ch
import chela.kotlinJS.dom.El
import chela.kotlinJS.view.scanner.template.ChTemplate
import org.w3c.dom.HTMLElement

class ChScanned internal constructor(var view: HTMLElement, private val items:MutableSet<ChScanItem> = mutableSetOf()):MutableSet<ChScanItem> by items{
    private val keyItem = mutableMapOf<String, ChScanItem>()
    fun render(view: HTMLElement? = null, record: dynamic = null, i: Int = 0, size: Int = 0, template:ChTemplate? = null, ref:Map<String, dynamic>? = null): HTMLElement {
        val isNew = view != null && view !== this.view
        if(isNew) this.view = view!!
        items.forEach{item->
            if(isNew) item.view(this.view)
            val r = item.render(record, i, size)
            r?.let{
                val vi = item.view
                var v = vi.asDynamic()
                if(v.__chel__ == undefined) v.__chel__ = js("{data:{}}")
                v = v.__chel__.data
                v.index = i
                v.length = size
                v.data = record
                v.ref = ref
                v.tmpl = template
                v.view = this.view
                val el = El(vi)
                it.forEach{(k, value)->
                    el[k] = if(value !is Ch.Value) value
                        else value.block(value.kv.run {
                            forEach { (k, mk) ->value.map[k] = Ch.value(mk, i, size, record)}
                            value.map
                        })
                }
            }
        }
        return this.view
    }
    fun subView(key:String):HTMLElement? = keyItem[key]?.view
    override fun add(it: ChScanItem): Boolean {
        if(it.key.isNotBlank()) keyItem[it.key] = it
        return items.add(it)
    }
}