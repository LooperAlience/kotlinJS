package chela.kotlinJS.net

import chela.kotlinJS.Ch
import chela.kotlinJS.core._JSON
import chela.kotlinJS.core._toJSON
import chela.kotlinJS.core._toString
import chela.kotlinJS.core._try
import chela.kotlinJS.net.ChHttp.Companion.EXTRA_JSON
import chela.kotlinJS.net.ChHttp.Companion.EXTRA_REQUEST
import chela.kotlinJS.net.ChNet.apis
import chela.kotlinJS.regex.reParam
import chela.kotlinJS.resource.Api
import chela.kotlinJS.validation.ChRuleSet

typealias httpCallBack = (response: ChResponse)->Unit
typealias requestTaskF = (http: ChHttp, arg:MutableList<Pair<String, Any>>, taskArg:List<String>)->Boolean
typealias responseTaskF = (response: ChResponse, taskArg:List<String>)-> Boolean

/**
 * This object handles send HTTP request and read response.
 * It cached Api information on [apis].
 */
object ChNet {
    private val apis = mutableMapOf<String, Api>()
    private val requestItemTask = mutableMapOf<String, (Any) -> Any?>()
    private val requestTask = mutableMapOf<String, requestTaskF>(
        "header" to {http, arg, taskArg->
            var cnt = 0
            arg.filter{taskArg.contains(it.first)}.forEach {
                http.header(it.first, "${it.second}")
                cnt++
            }
            cnt == taskArg.size
        },
        "json" to { http, arg, _->
            @Suppress("UnsafeCastFromDynamic")
            http.extra[EXTRA_JSON] = arg.toMap()._JSON()
            true
        },
        "jsonbody" to { http, arg, _->
            http.json(http.extra[EXTRA_JSON]?.let{JSON.stringify(it)} ?: arg.toMap()._toJSON())
            true
        },
        "body" to { http, arg, taskArg->
            http.body(
                if(taskArg.size == 1) "${arg.find{it.first == taskArg[0]}?.second ?: ""}"
                else http.extra[EXTRA_REQUEST]?.toString() ?: http.extra[EXTRA_JSON]?.let{JSON.stringify(it)} ?: ""
            )
            true
        }
    )
    val timestamp = mutableMapOf<String, Long>()
    private val responseTask = mutableMapOf<String, responseTaskF>(
        "json" to {res, _->
            (res.extra[EXTRA_JSON] ?: res.body)?.let{v->
                var r:dynamic = null
                _try{r = JSON.parse("$v")}
                @Suppress("UnsafeCastFromDynamic")
                if(r != null){
                    res.extra[EXTRA_JSON] = r
                    res.result = r
                    true
                }else false
            } ?: false
        },
        "timestamp" to { res, arg->
            res.extra[EXTRA_JSON]?.let{
                var r:dynamic = it
                if(r[arg[0]] != undefined){
                    val v = r[arg[0]] as Long
                    val k = "${res.key}:${res.arg._toString()}"
                    timestamp[k]?.let{ t -> if(v > t) timestamp[k] = v else false} ?:
                    run{ timestamp[k] = v}
                }
            }
        true
        }
    )
    fun apiRequestTask(key: String, block: requestTaskF) {
        requestTask[key] = block}
    fun apiRequestItemTask(key: String, block: (Any) -> Any?){ requestItemTask[key] = block}
    fun apiResponseTask(key: String, block: responseTaskF){
        responseTask[key] = block}
    fun get(k: String): Api? = apis[k]
    fun add(k:String, api: Api){apis[k] = api}
    fun remove(k:String) = apis.remove(k)
    /**
     * @key json object key on Api
     * @arg Pair you want to validate and send HTTP request.
     * <pre>
     *     Ch.net.api(jsonObjectKey, key to value...) { response ->
     *        App.data = response.result
     *     }
     * </pre>
     */
    fun api(key:String, vararg arg:Pair<String, Any>, block:(ChResponse)->Unit):Ch.ApiResult {
        val api = get(key) ?: return Ch.ApiResult.fail("invalid api:$key")
        val reqItem = mutableListOf<Pair<String, Any>>()
        api.request?.let{
            if(arg.size != it.size) return Ch.ApiResult.fail("invalid arg count:arg ${arg.size}, api ${it.size}")
            arg.forEach{(k, v)->
                val req = it[k] ?: return Ch.ApiResult.fail("invalid request param:$k")
                var r = v
                req.rules?.let {
                    if (it.isNotBlank()) {
                        r = Ch.ruleset.check(req.rules, r)
                        if (r is ChRuleSet) return Ch.ApiResult.fail("rule check fail $k:$v")
                    }
                }
                req.task?.forEach ch@{
                    if(it.isBlank()) return@ch
                    val task = requestItemTask[it] ?: return Ch.ApiResult.fail("invalid request item task:$it for $k")
                    r = task(r) ?: return Ch.ApiResult.fail("request item task stop:$it for $k")
                }
                reqItem += (req.name ?: k) to r
            }
        }
        val net = http(api.method, api.url)
        var msg = ""
        if(false == api.requestTask?.all{
            val (k, arg) = reParam.parse(it)
            return@all requestTask[k]?.let{
                if(!it(net, reqItem, arg)){
                    msg = "request task stop:$k for $key"
                    false
                }else true
            } ?: run{
                msg = "invalid request task:$k for $key"
                false
            }
        }) return Ch.ApiResult.fail(msg)
        if(Ch.debugLevel > 0){
            println("method-" + api.method + ", url-" + api.url)
            if(Ch.debugLevel > 1) println("requestArg-${arg.joinToString(", "){"${it.first}:${it.second}"}}")
            println("requestItem-$reqItem")
        }
        net.send{res->
            res.key = key
            res.arg = reqItem
            api.responseTask?.all {
                val (k, arg) = reParam.parse(it)
                responseTask[k]?.let {it(res, arg)} ?: run{
                    res.err = "invalid response task:$it for $key"
                    false
                }
            }
            block(res)
        }
        return Ch.ApiResult.ok
    }
    fun http(method:String, url:String): ChHttp = ChFetch(method, url)
}