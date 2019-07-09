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
    abstract fun timeout(ms:Int): ChHttp
    abstract fun file(key: String, filename: String, mine: String, file: dynamic): ChHttp
    abstract fun send(block: httpCallBack)
}
class ChFetch internal constructor(m:String, private var url:String): ChHttp(){
    companion object{
        init {
            js("""if(!window.fetch) !function(t){"use strict";function e(e){var r=e&&e.Promise||t.Promise,o=e&&e.XMLHttpRequest||t.XMLHttpRequest,n=t;return function(){var t=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=function(t){return t&&DataView.prototype.isPrototypeOf(t)},s=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};y.prototype.append=function(t,e){t=u(t),e=h(e);var r=this.map[t];this.map[t]=r?r+","+e:e},y.prototype.delete=function(t){delete this.map[u(t)]},y.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},y.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},y.prototype.set=function(t,e){this.map[u(t)]=h(e)},y.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},y.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),d(t)},y.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),d(t)},y.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),d(t)},e.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},m.call(w.prototype),m.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},B.error=function(){var t=new B(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];B.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new B(null,{status:e,headers:{location:t}})},t.Headers=y,t.Request=w,t.Response=B,t.fetch=function(t,n){return new r(function(r,i){var s=new w(t,n),a=new o;a.onload=function(){var t,e,o={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new y,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;r(new B(n,o))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===s._bodyInit?null:s._bodyInit)})},t.fetch.polyfill=!0}function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function y(t){this.map={},t instanceof y?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return r.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new r(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function p(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&i(t))this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!s(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=b(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return r.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return r.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return r.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||r.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,o,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,o=c(e),e.readAsText(t),o;if(this._bodyArrayBuffer)return r.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return r.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,o,n=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new y(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new y(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),a.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function B(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new y(e.headers),this.url=e.url||"",this._initBody(t)}}(void 0!==t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof exports?module.exports=e:t.fetchPonyfill=e}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this);//# sourceMappingURL=/sm/97737226873c215d8e6f1a918999841f39d968c98d4269a68b3fe3d6482bbbc2.map""")
        }
    }
    private val init = obj{
        method = m
        headers = js("{}")
        headers["Cache-Control"] = "no-cache"
        body = null
    }
    private var form:MutableMap<String,String>? = null
    private var isLock = ""
    private var retry = 5
    private var timeout = 15000
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
    override fun timeout(ms: Int) = apply {
        timeout = ms
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
        js("alert(window.fetch)")
        Promise.race(arrayOf(
                window.fetch(Request(url, init)),
                Promise { _, r ->
                    id = window.setTimeout({ r(Throwable("timeout")) }, timeout)
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