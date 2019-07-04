package chela.kotlinJS.validation

import chela.kotlinJS.core.ChJS

/*
{
    "validation":{
        "@default":"@{cdata.error}",
        "rating":{
            "type":"base", //optional, default "base"
            "ruleset":"trim|string|a@range[1,5]-or-b@first[a]|c@range[1,4]",
            "msg":{
                "@default":"@{cdata.error/rating}",
                "a":"범위가 다름",
                "b":"첫글자가 a가 아님",
                "c":"범위가 다름"
            },
            "arg":{
                "relatedField":"confirmPw"
            }
        }
    }
}
 */
open class ChValidation(val ruleset:ChRuleSet, val msg:Map<String, String>, val arg:Map<String, String>){
    companion object{
        private var defaultMsg = "invalid"
        private val types = mutableMapOf<String, (ChRuleSet, Map<String, String>, Map<String, String>)->ChValidation>(
            "base" to {r, m, a-> ChValidation(r, m, a) }
        )
        private val map = mutableMapOf<String, ChValidation>()
        fun defaultMsg(v:String){defaultMsg = v}
        operator fun set(k:String, v:dynamic) = types[ChJS.hasOwnKey(v, "type") ?: "base"]?.let {
            map[k] = it(
                ChRuleSet(if (v.ruleset == null) "${v.ruleset}" else throw Throwable("invalid ruleset")),
                ChJS.obj2map(v.msg),
                ChJS.obj2map(v.arg)
            )
        } ?: throw Throwable("invalid type:${v.type}")
        operator fun get(k:String) = map[k]
    }
    open fun check(v:Any):Pair<Boolean, Any> = ruleset.checkVali(v).run{
        if(first) this else false to (msg[second] ?: defaultMsg)
    }
}
