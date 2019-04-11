package chela.kotlinJS

import chela.kotlin.resource.ChRes
import chela.kotlinJS.dom.domEvent
import chela.kotlinJS.looper.ChLooper
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.net.ChNet
import chela.kotlinJS.net.ChResponse
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.sql.DataBase
import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.view.router.ChRouter
import chela.kotlinJS.view.router.holder.ChGroupBase
import chela.kotlinJS.view.router.holder.ChHolderBase
import chela.kotlinJS.view.scanner.ChScanner
import chela.kotlinJS.view.scanner.template.ChTemplate
import chela.kotlinJS.view.scanner.template.TemplateData
import org.w3c.dom.HTMLElement
import org.w3c.dom.Window
import org.w3c.dom.events.Event
import kotlin.browser.window
import kotlin.js.Date
import kotlin.js.Promise

typealias throttleF = (Double, Array<out Any>)->Unit
typealias debounceF = (Array<out Any>)->Unit
object Ch{
    var debugLevel = 0
    val NONE = object{}

    val ruleset = ChRuleSet
    val sql = ChSql
    val net = ChNet
    val resource = ChRes
    val model = ChModel
    val scanner = ChScanner

    class Update(val v:Any)
    class Once(val v:Any)
    class ChEvent(val event: Event, val el:HTMLElement){
        private val eld = el.asDynamic()
        private val _data = eld.__chel__.data
        val data:dynamic get() = _data.data
        @Suppress("UnsafeCastFromDynamic")
        val index:Int get() = _data.index
        @Suppress("UnsafeCastFromDynamic")
        val length:Int get() = _data.length
        fun render() = (_data.tmpl as? ChTemplate)?.let{
            it.rerender(_data.view, index, length, data, false)
        }
    }
    abstract class Data(val key:Any, val db:String, val api:String, val arg:Array<Pair<String, Any>> = arrayOf()){
        companion object {
            private val data = mutableMapOf<Any, dynamic>()
        }
        protected abstract fun getDB(db:DataBase):Promise<dynamic>
        protected abstract fun isValid(v:dynamic):Boolean
        protected abstract fun setDB(db:DataBase, res:ChResponse):Promise<dynamic>
        protected abstract fun getData(v:dynamic)
        fun data(){
            if(data.containsKey(key) && isValid(data[key])) getData(data[key])
            else{
                data.remove(key)
                ChSql.db(db).then{db->
                    getDB(db).then{v:dynamic->
                        if(isValid(v)){
                            ChRes.res(v)
                            data[key] = v
                            data()
                        }else Ch.net.api(api, *arg){res ->setDB(db, res).then{it:dynamic->data()}}
                    }
                }
            }
        }
    }
    sealed class ApiResult(val msg:String){
        fun isFail() = this is fail
        object ok:ApiResult("")
        class fail(msg:String):ApiResult(msg)
    }
    fun templateData(data:Array<dynamic>?, vararg template: String) = TemplateData(data, template)
    fun domEvent(block:domEvent):domEvent = block
    fun event(e: Event, el:HTMLElement) = ChEvent(e, el)
    fun looper() = ChLooper()
    fun <T> router(base: ChHolderBase<T>) = ChRouter(base)
    fun router(el:HTMLElement) = ChRouter(ChGroupBase(el))

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
    fun debounce(rate:Double, vararg arg:Any, block:debounceF):()->Unit{
        var timeOutId = -1
        val delay = {
            block(arg)
            timeOutId = -1
        }
        return {
            if(timeOutId != -1){
                window.clearTimeout(timeOutId)
                timeOutId = -1
            }
            timeOutId = window.setTimeout(delay, rate.toInt())
        }
    }
}