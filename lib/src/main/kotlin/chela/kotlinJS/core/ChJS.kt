package chela.kotlinJS.core

import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Promise


object ChJS {
    val obj = js("Object")
    inline fun keys(v:dynamic, block:(String)->Unit) = obj.keys(v).unsafeCast<Array<String>>().forEach(block)
    inline fun <T> obj2map(v:dynamic, block:(String, dynamic)->T = {_,v->v}) = mutableMapOf<String, T>().apply {
        if(v != undefined) obj.keys(v).unsafeCast<Array<String>>().forEach{this[it] = block(it, v[it])}
    }
    inline fun objForEach(v:dynamic, block:(String, dynamic)->Unit){
        obj.keys(v).unsafeCast<Array<String>>().forEach{block(it, v[it])}
    }
    inline fun obj(block:dynamic.()->Unit):dynamic{
        val o = js("{}")
        block(o)
        return o
    }
    inline fun obj(target:dynamic, block:dynamic.()->Unit):dynamic{
        block(target)
        return target
    }
    fun <T> hasOwnKey(target:dynamic, key:String):T? = if(target.hasOwnProperty(key)) target[key] as? T else null
    fun <R> then(p:dynamic, block:(dynamic)->R) = (p as? Promise<dynamic>)?.then(block)
    val enc = js("encodeURIComponent")
    @Suppress("UnsafeCastFromDynamic")
    fun encodeURIComponent(v:String):String = enc(v)
    val dec = js("decodeURIComponent")
    @Suppress("UnsafeCastFromDynamic")
    fun decodeURIComponent(v:String):String = dec(v)
    val inF = js("function(k, t){return k in t;}")
    fun isIn(key:String, target:dynamic) = inF(key, target) as Boolean
    fun addJs(path:String) = Promise<dynamic>{res,_->
        val script = document.createElement("script")
        script.setAttribute("src", path)
        script.addEventListener("load", res)
        document.head?.appendChild(script)
    }
    val isObj = js("function(v){var a = typeof v; return a == 'function' || a == 'object'}")
    val isFun = js("function(v){return typeof v == 'function';}")
    fun isFunction(v:dynamic) = isFun(v)
    private val rMobile = """android|webos|iphone|ipad|ipod|blackberry|windows phone""".toRegex()
    fun isMobile() = rMobile.containsMatchIn(window.navigator.userAgent.toLowerCase())
    var _stringify = js("function(o){var c=[];return JSON.stringify(o,function(k,v){if(v&&typeof v==='object'){if(c.indexOf(v)!==-1)return;c.push(v);}return v;});}")
    fun stringify(o:dynamic):String = _stringify(o)
}
external fun delete(p: dynamic): Boolean = definedExternally
