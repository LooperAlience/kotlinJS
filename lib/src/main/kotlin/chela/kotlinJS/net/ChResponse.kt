package chela.kotlinJS.net

import org.khronos.webgl.ArrayBuffer
import org.w3c.fetch.Response
import org.w3c.files.Blob
import kotlin.js.Promise

class ChResponse(private val response: Response?, var err:String? = null){
    var key:String = ""
    var arg:List<Pair<String, Any>>? = null
    val extra = mutableMapOf<String, Any>()
    var result:Any = ""
    val state:Int by lazy{(response?.status ?: 0).toInt()}
    private var text:String? = null
    private var bl:Blob? = null
    private var arr:ArrayBuffer? = null
    private var js:Any? = null
    private var isOpened = response == null
    fun header(k:String) = response?.headers?.get(k)
    val body:Promise<String>? get() = if(isOpened) null
        else{
            isOpened = true
            text?.let{Promise.resolve(it)} ?: response?.text()
        }
    val json:Promise<Any?>? get() = if(isOpened) null
        else{
            isOpened = true
            js?.let{Promise.resolve(it)} ?: response?.json()
        }
    val blob:Promise<Blob>? get() = if(isOpened) null
        else{
            isOpened = true
            bl?.let{Promise.resolve(it)} ?: response?.blob()
        }
    val array:Promise<ArrayBuffer>? get() = if(isOpened) null
        else{
            isOpened = true
            arr?.let{Promise.resolve(it)} ?: response?.arrayBuffer()
        }
}