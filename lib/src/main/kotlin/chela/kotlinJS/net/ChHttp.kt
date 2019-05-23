package chela.kotlinJS.net

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.obj
import org.w3c.fetch.Request
import kotlin.browser.window
import kotlin.js.Promise

abstract class ChHttp{
    companion object {
        val EXTRA_JSON = "json"
        val EXTRA_REQUEST = "request"
    }
    val extra = mutableMapOf<String, Any>()
    abstract fun header(key:String, value:String): ChHttp
    abstract fun form(key:String, value:String): ChHttp
    abstract fun json(json:String): ChHttp
    abstract fun body(body:String): ChHttp
    abstract fun blobBody(body:dynamic): ChHttp
    abstract fun file(key: String, filename: String, mine: String, file: dynamic): ChHttp
    abstract fun send(block: httpCallBack)
}
class ChFetch internal constructor(m:String, private var url:String): ChHttp(){
    private val init = obj{
        method = m
        headers = js("{}")
        headers["Cache-Control"] = "no-cache"
        body = null
    }
    private var form:MutableMap<String,String>? = null
    private var isLock = ""
    private var retry = 5
    override fun header(key:String, value:String) = apply{init.headers[key] = value}
    private fun _form(){
        if(isLock != "" || isLock != "form") throw Throwable("err")
        isLock = "form"
        if(form == null){
            form = mutableMapOf()
            init.body = form
        }

    }
    override fun form(key:String, value:String) = apply{
        _form()
        @Suppress("UnsafeCastFromDynamic")
        init.body.set(key, value)
        form?.set(key, value)
    }
    override fun file(key:String, filename:String, mine:String, file:dynamic) = apply{
        _form()
        @Suppress("UnsafeCastFromDynamic")
        init.body.set(key, file, filename)
    }
    override fun json(json:String) = apply{
        if(isLock != "") throw Throwable("err")
        isLock = "json"
        init.body = json
    }
    override fun body(body:String) = apply{
        if(isLock != "") throw Throwable("err")
        isLock = "body"
        init.body = body
    }
    override fun blobBody(body:dynamic) = apply{
        if(isLock != "") throw Throwable("err")
        isLock = "blob"
        init.body = body
    }

    override fun send(block: httpCallBack){
        val i = url.lastIndexOf('#')
        if(i != -1) url = url.substring(0, i)
        if(init.method == "GET" && isLock == "form") form?.let {
            url += (if (url.lastIndexOf('?') == -1) "?" else "&") +
                    it.map { (k, v) -> ChJS.encodeURIComponent(k) + "=" + ChJS.encodeURIComponent(v) }.joinToString("&")
        }
        when{
            init.method == "GET"->init.headers["Content-Type"] = "text/plain; charset=utf-8"
            form == null->when(isLock){
                "json"->init.headers["Content-Type"] = "application/json; charset=utf-8"
                "body"->init.headers["Content-Type"] = "application/text; charset=utf-8"
                "blob"->init.headers["Content-Type"] = "application/octet-stream; charset=utf-8"
            }
        }
        run(block)
    }
    private fun run(block: httpCallBack){
        var id = -1
        Promise.race(arrayOf(
                window.fetch(Request(url, init)),
                Promise { _, r ->
                    id = window.setTimeout({ r(Throwable("timeout")) }, 5000)
                }
        )).then {
            window.clearTimeout(id)
            if (!it.ok) throw Throwable("not ok")
            block(ChResponse(it))
        }.catch {
            if (retry-- > 1) run(block)
            else block(ChResponse(null, it.message))
        }
    }
}