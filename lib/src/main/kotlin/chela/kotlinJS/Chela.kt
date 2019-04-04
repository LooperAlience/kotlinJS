package chela.kotlinJS

import chela.kotlin.resource.ChRes
import chela.kotlinJS.dom.ChEvent
import chela.kotlinJS.looper.ChLooper
import chela.kotlinJS.model.ChModel
import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.net.ChNet
import chela.kotlinJS.net.ChResponse
import chela.kotlinJS.sql.DataBase
import chela.kotlinJS.view.router.ChRouter
import chela.kotlinJS.view.router.holder.ChGroupBase
import chela.kotlinJS.view.router.holder.ChHolderBase
import chela.kotlinJS.view.scanner.ChScanner
import chela.kotlinJS.view.scanner.template.TemplateData
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.js.Date
import kotlin.js.Promise

typealias getDB = (DataBase)->Promise<dynamic>
typealias setDB = (DataBase, ChResponse)->Promise<dynamic>
typealias getData = (dynamic, Array<dynamic>?)->Unit
object Ch{
    var debugLevel = 0
    val NONE = object{}

    val ruleset = ChRuleSet
    val sql = ChSql
    val net = ChNet
    val resource = ChRes
    val model = ChModel
    val scanner = ChScanner

    private val data = mutableMapOf<Any, dynamic>()

    fun data(key:Any, api:String, db:String, getDB:getDB, setDB:setDB, arg:Array<dynamic>? = null, block:getData){
        if(data.containsKey(key)) block(data[key], arg)
        else ChSql.db(db).then{d->
            getDB(d).then{v:dynamic->
                if(v != null && v.timestamp + v.limit < Date.now()){
                    ChRes.res(v)
                    data[key] = v
                    block(v, arg)
                }else{
                    Ch.net.api(api){res ->
                        setDB(d, res).then{it:dynamic->data(key, api, db, getDB, setDB, arg, block)}
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
    fun event(e: Event, el:HTMLElement) = ChEvent(e, el)
    fun looper() = ChLooper()
    fun <T> router(base: ChHolderBase<T>) = ChRouter(base)
    fun router(el:HTMLElement) = ChRouter(ChGroupBase(el))
    fun router(el:String) = ChRouter(ChGroupBase(document.querySelector(el) as HTMLElement))

}