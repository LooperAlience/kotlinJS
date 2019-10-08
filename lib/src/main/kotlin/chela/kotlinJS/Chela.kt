package chela.kotlinJS

import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.resource.ChRes
import chela.kotlinJS.dom.domEvent
import chela.kotlinJS.looper.ChLooper
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.net.ChNet
import chela.kotlinJS.net.ChResponse
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.view.router.ChRouter
import chela.kotlinJS.view.router.holder.ChGroupBase
import chela.kotlinJS.view.router.holder.ChHolderBase
import chela.kotlinJS.view.scanner.ChScanner
import chela.kotlinJS.view.scanner.template.ChTemplate
import chela.kotlinJS.view.scanner.template.NTH
import chela.kotlinJS.view.scanner.template.TemplateData
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import kotlin.browser.window
import kotlin.js.Promise

typealias throttleF = (Double, Array<out Any>)->Unit
typealias debounceF = (Any)->Unit
object Ch{
    enum class Values{INVALID, NONE}
    var debugLevel = 0
    val NONE = Values.NONE
    val INVALID = Values.INVALID
    val ruleset = ChRuleSet
    val sql = ChSql
    val net = ChNet
    val resource = ChRes
    val model = ChModel
    val scanner = ChScanner
    val cdata = ChCdata

    class Update(val v:Any)
    class Once(val v:Any){var isRun = false}
    class ChEvent(val event: Event, val el:HTMLElement){
        companion object{
            val posCat = mapOf(
                "touchstart" to 1, "touchmove" to 2, "touchend" to 3, "mousedown" to 4, "mousemove" to 5,
                "mouseup" to 6, "click" to 6, "mouseover" to 6, "mouseout" to 6
            )
        }
        class Pos{
            var event:dynamic = null
            val touches = mutableListOf<dynamic>()
            var pageX = 0.0
            var pageY = 0.0
            var distanceX = 0.0
            var distanceY = 0.0
            var moveX = 0.0
            var moveY = 0.0
            var localX = 0.0
            var localY = 0.0
            var startX = 0.0
            var startY = 0.0
            var oldX = 0.0
            var oldY = 0.0
        }
        private val eld = el.asDynamic()
        private val _data = eld.__chel__.data
        val data:dynamic get() = _data.data
        @Suppress("UnsafeCastFromDynamic")
        val index:Int get() = _data.index
        @Suppress("UnsafeCastFromDynamic")
        val length:Int get() = _data.length
        @Suppress("UnsafeCastFromDynamic")
        val ref:Map<String, dynamic>? get() = _data.ref
        fun render() = (_data.tmpl as? ChTemplate)?.let{
            it.rerender(_data.view, index, length, data, false, ref)
        }
        var _pos:Pos? = null
        fun pos():Pos?{
            val type = posCat[event.type] ?: return null
            if(_pos == null) _pos = Pos()
            val p = _pos!!
            p.event = event
            val ev = p.event
            var lx = 0.0
            var ly = 0.0
            (event.target as? HTMLElement)?.let{
                val rect = it.getBoundingClientRect()
                lx = rect.left + window.pageXOffset
                ly = rect.top - window.pageYOffset
            }
            if(type < 4){
                val t0 = p.touches
                var t1 = ""
                var i = 2
                while(i-- > 0){
                    val t2 = if(i > 0) ev.changedTouches else ev.touches
                    var j = t2.length as Int
                    while(j-- > 0){
                        val id = t2[j].identifier
                        t1 += id + " "
                        var m = t0.size
                        var k = true
                        while(m-- > 0) if(t0[m].identifier == id){
                            k = false
                            break
                        }
                        if(k) t0.add(t2[j])
                    }
                }
                i = t0.size
                while(i-- > 0){
                    if(!t1.contains("${t0[0].identifier}")) t0.removeAt(i)
                    else{
                        val e = t0[i]
                        val X = e.pageX
                        val Y = e.pageY
                        e.localX = e.clientX - lx
                        e.localY = e.clientY - ly
                        if(type == 1){
                            e.startX = X
                            e.startY = Y
                        }else{
                            e.distanceX = X - e.startX
                            e.distanceY = Y - e.startY
                            e.moveX = X - e.oldX
                            e.moveY = Y - e.oldY
                        }
                        e.oldX = X
                        e.oldX = Y
                    }
                }
                if(t0.size > 0){
                    val t1 = t0[0]
                    p.pageX = t1.pageX
                    p.pageY = t1.pageY
                    p.distanceX = t1.distanceX
                    p.distanceY = t1.distanceY
                    p.moveX = t1.moveX
                    p.moveY = t1.moveY
                    p.localX = t1.localX
                    p.localY = t1.localY
                }
            }else{
                val X = ev.pageX
                val Y = ev.pageY
                p.pageX = X
                p.pageY = Y
                p.localX = ev.clientX - lx
                p.localY = ev.clientY - ly
                if(type == 4){
                    p.startX = X
                    p.startY = Y
                }else{
                    p.distanceX = X - p.startX
                    p.distanceY = Y - p.startY
                    p.moveX = X - p.oldX
                    p.moveY = Y - p.oldY
                }
                p.oldX = X
                p.oldY = Y
            }
            return _pos
        }
    }
    abstract class Data(val key:Any, database:String){
        companion object{
            private val cache = mutableMapOf<Any, dynamic>()
        }
        private var flag:dynamic = INVALID
        protected val db by lazy{ChSql.getDb(database)}
        protected abstract fun net():Promise<ChResponse>
        protected abstract fun data(v:dynamic)
        protected open fun get() = flag
        protected open fun set(res:ChResponse):Boolean{
            flag = res.result
            return true
        }
        protected open fun isValidCache(v:dynamic) = flag != INVALID
        protected open fun renew(v:dynamic) = ChRes.invoke(v)
        protected open fun error(){}
        open fun isChanged(){
            flag = INVALID
        }
        open fun reload(){
            net().then{
                if(!set(it) || !isValid()) error()
            }
        }
        open operator fun invoke(){
            if(cache.containsKey(key) && isValidCache(cache[key])){
                data(cache[key])
            }else{
                cache.remove(key)
                if(!isValid()) net().then{
                    if(!set(it) || !isValid()){
                        error()
                    }
                }
            }
        }
        private fun isValid(v:dynamic = get()) = if(v != INVALID){
            renew(v)
            cache[key] = v
            data(v)
            true
        }else false
    }
    sealed class ApiResult(val msg:String){
        fun isFail() = this is fail
        object ok:ApiResult("")
        class fail(msg:String):ApiResult(msg){
            init{
                //console.log("ApiResult.fail $msg")
            }
        }
    }
    class Value(val kv:Array<out Pair<String, String>>, val block:(Map<String, Any>)->Any){
        val map = mutableMapOf<String, Any>()
    }
    fun valueOf(vararg kv:Pair<String, String>, block:(Map<String, Any>)->Any) = Value(kv, block)
    fun value(_v: Any, i: Int = 0, size: Int = 0, record: dynamic = null):Any{
        var v = _v
        while(v is String && v.isNotBlank()){
            v = when(v[0]){
                '@'->ChModel[v.substring(2, v.length - 1)]
                '$'->if(record != null) ChModel.record(v.substring(2, v.length - 1).split("."), record, i, size)
                else throw Throwable("record but no record $v")
                else-> return v
            }
        }
        return v
    }
    fun nth(key:String, f:NTH){ChTemplate.nthF[key] = f}
    fun templateData(data:Array<dynamic>?, vararg template: String) = TemplateData(data, template)
    fun domEvent(block:domEvent):domEvent = block
    fun event(e: Event, el:HTMLElement) = ChEvent(e, el)
    fun looper() = ChLooper()
    fun <T> router(base: ChHolderBase<T>) = ChRouter(base)
    fun router(el:HTMLElement) = ChRouter(ChGroupBase(el))

    class ChannelEvent(val channel: String, private val v:Any?){
        internal var isStop = false
        internal var isRemove = false
        @Suppress("UNCHECKED_CAST")
        fun <T>value():T? = v as? T
        fun stop(){isStop = true}
        fun remove(){isRemove = true}
    }
    private val channels = mutableMapOf<String, MutableSet<(ChannelEvent)->Unit>>()
    fun addListener(channel:String, listener:(ChannelEvent)->Unit){
        if(channels[channel] == null) channels[channel] = mutableSetOf()
        channels[channel]?.let{it += listener}
    }
    fun addListenerOnce(channel:String, listener:(ChannelEvent)->Unit){
        if(channels[channel] == null) channels[channel] = mutableSetOf()
        channels[channel]?.let{ch->
            ch += {
                ch -= listener
                listener(it)
            }
        }
    }
    fun addListener(channel:String, remover:(ChannelEvent)->Boolean, listener:(ChannelEvent)->Unit){
        if(channels[channel] == null) channels[channel] = mutableSetOf()
        channels[channel]?.let{ch->
            ch += {if(remover(it)) ch -= listener else listener(it)}
        }
    }
    fun removeListener(channel: String, listener:(ChannelEvent) -> Unit) = channels[channel]?.let{it -= listener}
    fun notify(channel: String, value:Any? = null) = channels[channel]?.let{c->
        val e = ChannelEvent(channel, value)
        c.all{
            if(e.isStop) false
            else{
                it(e)
                if(e.isRemove){
                    c-= it
                    e.isRemove = false
                }
                true
            }
        }
    }
    fun throttle(rate:Double, vararg arg:Any, block:throttleF):()->Unit{
        var timeOutId = -1
        var next = 0.0
        var curr = 0.0
        val delay = {
            block(curr, arg)
            timeOutId = -1
        }
        return {
            curr = window.performance.now()
            if(next > curr){
                if(timeOutId == -1) timeOutId = window.setTimeout(delay, (next - curr).toInt())
            }else{
                if(timeOutId != -1) window.clearTimeout(timeOutId)
                delay()
            }
            next = curr + rate
        }
    }
    fun throttle(vararg arg:Any, block:throttleF):()->Unit{
        var ticking = false
        return {
            if(!ticking){
                ticking = true
                window.requestAnimationFrame{
                    block(it, arg)
                    ticking = false
                }
            }
        }
    }
    fun debounce(rate:Double, block:debounceF):(Any)->Unit{
        var timeOutId = -1
        return {v->
            if(timeOutId != -1) window.clearTimeout(timeOutId)
            timeOutId = window.setTimeout({
                block(v)
                timeOutId = -1
            }, rate.toInt())
        }
    }
}