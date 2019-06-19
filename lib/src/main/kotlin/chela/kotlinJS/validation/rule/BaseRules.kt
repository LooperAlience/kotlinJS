package chela.kotlinJS.validation.rule

import chela.kotlinJS.validation.ChRule


object BaseRules: ChRule(){
    init{
        ChRule["NoRule"] = { arg->{ v->v}}
        ChRule["MinLength"] = { arg->{ v->if(v is String && arg.size == 1 && v.length >= arg[0].toInt()) v else this}}
        ChRule["MaxLength"] = { arg->{ v->if(v is String && arg.size == 1 && v.length <= arg[0].toInt()) v else this}}
        ChRule["LessThan"] = { arg->{ v->if(v is Number && arg.size == 1 && v.toDouble() < arg[0].toDouble()) v else this}}
        ChRule["GreaterThan"] = { arg->{ v->if(v is Number && arg.size == 1 && v.toDouble() > arg[0].toDouble()) v else this}}
        ChRule["Range"] = { arg->{ v->if(v is Number && arg.size == 2 && arg[0].toDouble() <= v.toDouble() && v.toDouble() <= arg[1].toDouble()) v else this}}
        ChRule["Equal"] = { arg->{ v->when{
            arg.size != 1 -> this
            v is Number -> if (v.toDouble() == arg[0].toDouble()) v else this
            v is String -> if (v == arg[0]) v else this
            v is Boolean -> if (v == arg[0].toBoolean()) v else this
            else -> this
        }}}
        ChRule["In"] = { arg->{ v->when(v){
            is String->if(arg.contains(v)) v else this
            is Int->if(arg.map{it.toInt()}.contains(v)) v else this
            is Long->if(arg.map{it.toLong()}.contains(v)) v else this
            is Float->if(arg.map{it.toFloat()}.contains(v)) v else this
            is Double->if(arg.map{it.toDouble()}.contains(v)) v else this
            else->this
        }}}
        ChRule["NotIn"] = { arg->{ v->{
            val r = ChRule["In"](arg)(v)
            if(r == v) this else v
        }}}
        ChRule["NotBlank"] = { arg->{v-> if(v is String && v.isNotBlank()) v else this }}
    }









}