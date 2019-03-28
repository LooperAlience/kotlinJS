package chela.kotlinJS.view.router.holder

import org.w3c.dom.HTMLElement

class ChGroupBase(group:HTMLElement): ChHolderBase<HTMLElement>(){
    private var group:HTMLElement = group
    var display = "block"
    fun group(it:HTMLElement, d:String = "block"){
        display = d
        group = it
        group.innerHTML = ""
        restore()
    }
    override fun push(holder: ChHolder<HTMLElement>){
        group.appendChild(holder.create(this))
        group.style.display = display
    }
    override fun pop(holder: ChHolder<HTMLElement>){
        group.lastElementChild?.let{
            group.removeChild(it)
            if(group.childElementCount == 0) group.style.display = "none"
        }
    }
}