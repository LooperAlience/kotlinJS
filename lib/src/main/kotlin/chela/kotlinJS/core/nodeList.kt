package chela.kotlinJS.core

import org.w3c.dom.HTMLElement
import org.w3c.dom.NodeList
import org.w3c.dom.get

inline fun NodeList.toList() = run{
    val r = mutableListOf<HTMLElement>()
    var i = 0
    while(i < length) r += this[i++] as HTMLElement
    r
}