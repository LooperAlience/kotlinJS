package chela.kotlinJS.validation

import chela.kotlinJS.Ch
import chela.kotlinJS.regex.reParam
import chela.kotlinJS.validation.rule.BaseRules
import chela.kotlinJS.validation.rule.RegRules
import chela.kotlinJS.validation.rule.TypeRules

class ChRuleSet(rule:String){
    companion object{
        private val _defined = mutableMapOf<String, ChRuleSet>()
        private val baseRule = listOf(BaseRules, TypeRules, RegRules)
        val string get() = ChRuleSet["string"]!!
        fun add(k:String, rule:String){
            if(k.isBlank() || rule.isBlank()) return
            val key = k.trim().toLowerCase()
            _defined[key] = ChRuleSet(rule)
        }
        fun remove(k:String) = _defined.remove(k)
        operator fun get(k:String): ChRuleSet? = _defined[k.toLowerCase()]
        fun check(k:String, v:Any) = (get(k) ?: string).check(v)
        fun isOk(vararg kv:Pair<String, Any>) = kv.all {(k, v)-> check(k, v) !is ChRuleSet }
    }
    var msgKey = mutableMapOf<F, String>()
    private val rules = rule.split("-or-").map{
        it.split("|").filter{it.isNotBlank()}.map{v->
            val (k, arg) = reParam.parse(v)
            if(k.contains('@')){
                val ks = k.split('@')
                val r = ChRule[ks[1]](arg)
                msgKey[r] = ks[0]
                r
            }else ChRule[k](arg)
        }
    }
    fun checkVali(v: Any):Pair<Boolean, Any>{
        var r = v
        var key = "@default"
        return if(rules.any{
            r = v
            it.all{
                msgKey[it]?.let{key = it}
                r = it(r)
                r !is ChRule
            }
        }) true to r else false to key
    }
    fun check(v: Any):Any{
        var r = v
        return if(rules.any{
            r = v
            it.all{
                r = it(r)
                r !is ChRule
            }
        }) r else Ch.INVALID
    }
}