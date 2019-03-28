package chela.kotlinJS.validation

typealias F = (v:Any)->Any
typealias ruleF = (arg:List<String>)-> F

abstract class ChRule{
    companion object {
        internal val _defined = mutableMapOf<String, ruleF>()
        operator fun get(k: String): ruleF = _defined[k] ?: throw Exception("invalid rule:$k")
        operator fun set(k: String, rule: ruleF){
            val key = k.toLowerCase()
            _defined[key] = rule
            ChRuleSet.add(key, key)
        }
    }
}