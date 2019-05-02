package chela.kotlinJS.resource

import chela.kotlinJS.cdata.Cdata
import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.keys
import chela.kotlinJS.i18n.ChI18n
import chela.kotlinJS.sql.ChSql
import kotlin.js.Promise

object ChRes{
    var inited = false
    fun res(v:dynamic){
        if(v.api != null){
            val base = if(v.api.base != undefined) v.api.base else ""
            ChJS.objForEach(v.api) {k, v->Api(v, base).set(k)}
        }
        if(v.query != null) ChJS.objForEach(v.query){k, v->ChSql.addQuery(k,"${if (v is String) v else v.join(" ")}")}
        if(v.db != null) ChJS.objForEach(v.db){k, v->Db(v).set(k)}
        if(v.cdata != null){
            ChJS.objForEach(v.cdata){k, v ->
                if(k.startsWith("@@")) ChCdata.catDefault[k.substring(1)] = v
                else if(k[0] == '@') ChCdata(k, v)
                else Cdata(k, v)
            }
        }
    }
    fun load(res:dynamic) {
        ChSql.db("ch").then {db->
            keys(res){k->
                @Suppress("UnsafeCastFromDynamic")
                if(k == "remove") res[k].forEach{v->db.query("removeRes", "id" to v)}
                else{
                    res(res[k])
                    db.query("isRes", "id" to k).then {
                        if(it.isNullOrEmpty()) db.query("addRes", "id" to k, "contents" to JSON.stringify(res[k]))
                    }
                }
            }
        }
    }
    fun init(base:dynamic = null) = Promise<dynamic>{res, _->
        ChSql.addDb("ch", """
            create table if not exists ch_res(
                res_rowid integer primary key autoincrement,
                id varchar(255) not null,
                contents text not null
            )
        """.trimIndent())
        ChSql.addQuery("getRes", "select id, contents from ch_res")
        ChSql.addQuery("isRes", "select id from ch_res where id=@id@")
        ChSql.addQuery("addRes", "insert into ch_res(id, contents)values(@id@, @contents@)")
        ChSql.addQuery("getCdata", "select contents from ch_res where id like '%@id@%' order by res_rowid desc limit 1")
        ChSql.addQuery("removeRes", "delete from ch_res where id=@id@")
        ChSql.db("ch").then{
            it.query("getRes").then{
                if(!it.isNullOrEmpty()){
                    val r = js("{}")
                    it.forEach{r[it.id] = JSON.parse(it.contents)}
                    load(r)
                }else if(base != null) load(base)
                inited = true
                res(0)
            }
        }
    }
}