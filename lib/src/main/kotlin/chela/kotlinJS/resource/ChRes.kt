package chela.kotlinJS.resource

import chela.kotlinJS.cdata.Cdata
import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.validation.ChValidation

object ChRes{
    operator fun invoke(res:dynamic){
        val v = if(jsTypeOf(res) == "string") JSON.parse(res) else res
        if(v.api != undefined){
            val base = if(v.api.base != undefined) v.api.base else ""
            objForEach(v.api){k, v->Api(v, base).set(k)}
        }
        objForEach(v.ruleset){k, v->ChRuleSet.add(k, v)}
        objForEach(v.validation){k, v->
            if(k == "@default") ChValidation.defaultMsg(v) else ChValidation[k] = v
        }
        objForEach(v.query){k, v->ChSql.addQuery(k,"${if (v is String) v else v.join(" ")}")}
        objForEach(v.db){k, v->Db(v).set(k)}
        objForEach(v.cdata){k, v ->
            if(k.startsWith("@@")) ChCdata.catDefault[k.substring(1)] = v
            else if(k[0] == '@')ChCdata(k.substring(1), v)
            else{
                ChCdata.clearCache(k)
                Cdata(k, v)
            }
        }
    }
}