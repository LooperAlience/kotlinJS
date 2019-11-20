package chela.kotlinJS.core

import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Promise
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLScriptElement
import org.w3c.dom.NodeList
import org.w3c.dom.get

inline fun NodeList.toList() = run{
    val r = mutableListOf<HTMLElement>()
    var i = 0
    while(i < length) r += this[i++] as HTMLElement
    r
}

@Suppress("UnsafeCastFromDynamic")
object ChJS {
    val obj = js("Object")
    inline fun keys(v:dynamic, block:(String)->Unit) = obj.keys(v).unsafeCast<Array<String>>().forEach(block)
    inline fun <T> obj2map(v:dynamic, block:(String, dynamic)->T = {_,v->v}) = mutableMapOf<String, T>().apply {
        if(isObj(v)) obj.keys(v).unsafeCast<Array<String>>().forEach{this[it] = block(it, v[it])}
    }
    inline fun objForEach(v:dynamic, block:(String, dynamic)->Unit){
        if(isObj(v)) obj.keys(v).unsafeCast<Array<String>>().forEach{block(it, v[it])}
    }
    inline fun objAny(v:dynamic, block:(String, dynamic)->Boolean){
        if(isObj(v)) obj.keys(v).unsafeCast<Array<String>>().any{block(it, v[it])}
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
    fun <R> then(p:dynamic, reject:(dynamic)->R, resolve:(dynamic)->R) = (p as? Promise<dynamic>)?.catch(reject)?.then(resolve)
    fun <R> then(p:dynamic, block:(dynamic)->R) = (p as? Promise<dynamic>)?.then(block)
    private val enc = js("encodeURIComponent")
    @Suppress("UnsafeCastFromDynamic")
    fun encodeURIComponent(v:String):String = enc(v)
    private val dec = js("decodeURIComponent")
    @Suppress("UnsafeCastFromDynamic")
    fun decodeURIComponent(v:String):String = dec(v)
    private val inF = js("function(k, t){return k in t;}")
    fun isIn(key:String, target:dynamic) = inF(key, target) as Boolean
    fun addJs(path:String) = Promise<Unit>{res,_->
        val script = document.createElement("script") as HTMLScriptElement
        script.setAttribute("src", path)
        script.onload = {
            script.onload = null
            res(Unit)
        }
        document.head?.appendChild(script)
    }
    val isObj:(dynamic)->Boolean = js("function(v){var a=typeof v;return a&&a=='function'||a=='object';}")
    val isFun:(dynamic)->Boolean = js("function(v){return typeof v=='function';}")
    private val rMobile = """android|webos|iphone|ipad|ipod|blackberry|windows phone""".toRegex()
    fun isMobile() = rMobile.containsMatchIn(window.navigator.userAgent.toLowerCase())
    private val rIOS = """iphone|ipad|ipod""".toRegex()
    fun isIOS() = rIOS.containsMatchIn(window.navigator.userAgent.toLowerCase())
    var _stringify = js("function(o){var c=[];return JSON.stringify(o,function(k,v){if(v&&typeof v==='object'){if(c.indexOf(v)!==-1)return;c.push(v);}return v;});}")
    fun stringify(o:dynamic):String = _stringify(o)
    fun safeDynamic(target:dynamic, key:String, block:(dynamic)->Unit):Unit{
        val v = key.split(".").fold(target){ acc, v ->
            if(acc == null  || acc == undefined) acc
            else{
                if(acc[v] == null || acc[v] == undefined) null
                else acc[v]
            }
        }
        if(v != null) block(v)
    }
    fun isFalsy(v:dynamic) = v == null || v == undefined || v == "" || v == 0 || v == "false" || v == false
    fun isTruthy(v:dynamic, block:((dynamic) -> Unit)?= null):Boolean{
        val r = !isFalsy(v)
        if(r) block?.let{ it(v) }
        return r
    }
}
external fun delete(p: dynamic): Boolean = definedExternally