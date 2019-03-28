package chela.kotlinJS

import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.net.ChNet

object Ch{
    var debugLevel = 0
    val NONE = object{}

    val ruleset = ChRuleSet
    val sql = ChSql
    val net = ChNet

    sealed class ApiResult(val msg:String){
        fun isFail() = this is fail
        object ok:ApiResult("")
        class fail(msg:String):ApiResult(msg)
    }
}