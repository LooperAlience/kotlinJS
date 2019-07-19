package chela.kotlinJS.resource

import chela.kotlinJS.cdata.Cdata
import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.keys
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.validation.ChRuleSet
import chela.kotlinJS.validation.ChValidation
import kotlin.browser.window
import kotlin.js.Promise

object ChRes{
    var inited = false
    fun res(v:dynamic){
        if(v.api != null){
            val base = if(v.api.base != undefined) v.api.base else ""
            ChJS.objForEach(v.api) {k, v->Api(v, base).set(k)}
        }
        if(v.ruleset != null) ChJS.objForEach(v.ruleset){k, v->ChRuleSet.add(k, v)}
        if(v.query != null) ChJS.objForEach(v.query){k, v->ChSql.addQuery(k,"${if (v is String) v else v.join(" ")}")}
        if(v.db != null) ChJS.objForEach(v.db){k, v->Db(v).set(k)}
        if(v.cdata != null){
            ChJS.objForEach(v.cdata){k, v ->
                if(k.startsWith("@@")) ChCdata.catDefault[k.substring(1)] = v
                else if(k[0] == '@') ChCdata(k, v)
                else Cdata(k, v)
            }
        }
        if(v.validation != null) ChJS.objForEach(v.validation){k, v->
            if(k == "@default") ChValidation.defaultMsg(v) else ChValidation[k] = v
        }
    }
    fun load(v:dynamic) = Promise<dynamic>{ r, _->
        ChSql.db("ch").then {db->
            keys(v){ k->
                @Suppress("UnsafeCastFromDynamic")
                if(k == "remove") v[k].forEach{ v->db.query("removeRes", "id" to v)}
                else{
                    res(v[k])
                    db.query("isRes", "id" to k).then {
                        if(it.isNullOrEmpty()) db.query("addRes", "id" to k, "contents" to JSON.stringify(v[k]))
                    }
                }
            }
            r(0)
        }
    }
    fun init(base:dynamic = null) = Promise<dynamic>{r, _->
        inited = true
        ChSql.addDb("ch", """
            create table if not exists ch_res(
                res_rowid integer primary key autoincrement,
                id varchar(255) not null,
                contents text not null
            )
        """)
        ChSql.db("ch").then{
            ChSql.addQuery("getRes", "select id,contents from ch_res")
            ChSql.addQuery("isRes", "select id from ch_res where id=@id@")
            ChSql.addQuery("addRes", "insert into ch_res(id, contents)values(@id@, @contents@)")
            ChSql.addQuery("getCdata", "select contents from ch_res where id like '%@id@%' order by res_rowid desc limit 1")
            ChSql.addQuery("removeRes", "delete from ch_res where id=@id@")
            it.query("getRes").then{
                if(!it.isNullOrEmpty()){
                    val r = js("{}")
                    it.forEach{r[it.id] = JSON.parse(it.contents)}
                    load(r).then{v:Int->r(0)}
                }else if(base != null)load(base).then{v:Int->r(0)}
                else r(0)
            }
        }.catch{
            if(base != null) keys(base){ k -> res(base[k]) }
            r(0)
        }
    }
    fun clear(end:()->Unit){
        try{
            ChSql.db("ch").then{
                ChSql.addQuery("dropRes", "delete from ch_res")
                it.query("dropRes")
                end()
            }
        }catch (e:Throwable){
            console.log("ChRes clear fail $e")
            end()
        }
    }
}