package chela.kotlinJS.view.router.holder

import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import kotlin.browser.window

class ChGroupBase(group:HTMLElement): ChHolderBase<HTMLElement>(){
    private var group:HTMLElement = group
    var display = "block"
    fun group(it:HTMLElement, d:String = "block"){
        display = d
        group = it
        group.innerHTML = ""
    }
    override fun push(holder: ChHolder<HTMLElement>){
        val v= holder.create(this)
        group.appendChild(v)
        group.style.display = display
    }
    var removeTarget: Element? = null
    override fun popBefore(holder: ChHolder<HTMLElement>) {
        removeTarget = group.lastElementChild
    }
    override fun pop(holder: ChHolder<HTMLElement>){
        removeTarget?.let{
            group.removeChild(it)
            if(group.childElementCount == 0) group.style.display = "none"
        }
    }
    override fun take(index:Int, holder: ChHolder<HTMLElement>){
        var el = group.firstElementChild
        var i = 0
        while(i < 10000 && el != null){
            if(i++ == index){
                group.removeChild(el)
            }else el = el.nextElementSibling
        }
    }
    override fun clear() {
        group.innerHTML = ""
    }
}