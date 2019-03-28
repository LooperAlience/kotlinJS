package chela.kotlinJS.view

import chela.kotlinJS.view.ChStyle.items

/**
 * This object cached style property on [items].
 */
object ChStyle{
    val items = mutableMapOf<String, Map<String, String>>()
    fun add(k:String, map:Map<String, String>){items[k] = map}
    fun remove(k:String) = items.remove(k)
    operator fun get(k:String):Map<String, String>? = items[k]
}