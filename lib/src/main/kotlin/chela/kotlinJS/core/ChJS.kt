package chela.kotlinJS.core

import kotlin.js.Promise


object ChJS {
    val obj = js("Object")
    inline fun keys(v:dynamic, block:(String)->Unit) = obj.keys(v).unsafeCast<Array<String>>().forEach(block)
    inline fun obj(block:dynamic.()->Unit):dynamic{
        val o = js("{}")
        block(o)
        return o
    }
    fun <R> then(p:dynamic, block:(dynamic)->R) = (p as? Promise<dynamic>)?.then(block)
    val enc = js("encodeURIComponent")
    @Suppress("UnsafeCastFromDynamic")
    fun encodeURIComponent(v:String):String = enc(v)
}