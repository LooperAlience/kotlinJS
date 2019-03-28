package chela.kotlinJS.dom

import org.w3c.dom.HTMLElement

inline fun HTMLElement.getChildAt(idx:Int):HTMLElement?{
    var t = firstElementChild
    var i = 0
    while(t != null){
        if(i == idx) return t as HTMLElement
        t = t.nextElementSibling
        i++
    }
    return null
}