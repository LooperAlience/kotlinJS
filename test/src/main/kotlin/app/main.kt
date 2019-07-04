package app

import chela.kotlinJS.Ch
import chela.kotlinJS.cdata.Cdata
import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.core.ChJS.isMobile
import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.model.Model
import chela.kotlinJS.sql.ChSql
import chela.kotlinJS.view.ChViewModel
import kotlin.browser.document

object vm:Model(true){
    val a = "@{cdata.test}"
    val b = "@{cdata.test2}"
    val c = "@{cdata.test3}"
    val d = object:ChViewModel(true){
        val down = Ch.domEvent{e, el->
            val ev = Ch.event(e, el)
            println("down")
            ev.pos()?.let{
                println("down ${it.localX}, ${it.localY}")
            }
            Ch.sql.db("test").then { db ->
                db.query("insert1").then {
                    db.query("select1")
                }.then {
                    it?.forEach {println(JSON.stringify(it))}
                    db.query("update1")
                }.then {
                    println("select2")
                    db.query("select1")
                }.then{
                    it?.forEach {println(JSON.stringify(it))}
                }
            }
        }
        val up = Ch.domEvent{e, el->
            println("up")
        }
        val move = Ch.domEvent{e, el->
            println("move")
        }
        val html = "test"
        val background = "#0ff"
    }
    val tmpl = Ch.templateData(arrayOf(obj{
        html = Ch.valueOf("i" to "\${:index}", "j" to "\${:size}"){
            "title2 ${it["i"]}, ${it["j"]}"
        }
        click = Ch.domEvent{e, el->
            val ev = Ch.event(e, el)
            println("a:${ev.ref?.get("a")} - b:${ev.ref?.get("b")}")
            Ch.ruleset["string"]?.check("aaa")?.let{
                if(it != Ch.INVALID){
                    println("checked $it")
                }
            }
            Ch.ruleset["email"]?.let{
                val a = it.check("aaa")
                if(a != Ch.INVALID){
                    println("eamil checked $a")
                }else{
                    println("eamil invalid")
                }
                val b = it.check("hika@gmail.com")
                if(b != Ch.INVALID){
                    println("eamil checked $b")
                }else{
                    println("eamil invalid")
                }
            }
        }
    },obj{html = Ch.valueOf("i" to "\${:index}", "j" to "\${:size}"){
        "title3 ${it["i"]}, ${it["j"]}"
    }},obj{html = Ch.valueOf("i" to "\${:index}", "j" to "\${:size}"){
        "title4 ${it["i"]}, ${it["j"]}"
    }}
            ), "a", "b").ref(
            "a" to 3, "b" to "abc"
    )
}

@Suppress("MoveLambdaOutsideParentheses")
fun main(args: Array<String>){

    println("isMobile - ${isMobile()}")

    val v = vm
    Ch.ruleset.add("email", "string|email|minLength[4]|maxLength[255]")

    Ch.sql.init("js/sql.js")
    .then{_:dynamic->Ch.resource.init()}
    .then{
        val data = """{
                "test@ln":{
                    "ko":"안녕하세요.",
                    "en@a":{
                        "b":"hello test"
                    }
                },
                "test2@ln":{
                    "ko":"안녕하세요."
                }
            }"""
        objForEach(JSON.parse<dynamic>(data)) { k, v ->
            Cdata(k, v)
        }
        ChCdata.invoke("@ln", "en")
        ChCdata.invoke("@a", "b")

        val scanned = Ch.scanner.scan(document.body!!)
        scanned.render()
        Ch.cdata.requestKey.then {
            it?.let { k ->
                println("-------------------------------$k")
                Ch.net.http("get", "json/cdata.json").send {
                    it.body?.then {
                        Ch.cdata.save(k, it).then{
                            it?.let {
                                println("error - $it")
                            } ?: run{
                                println("rerender")
                               scanned.render()
                            }
                        }
                    }
                }
            }
        }
        Ch.sql.addQuery("select1", "select id, contents from ch_res where id = 'hika'")
        Ch.sql.addQuery("insert1", "insert into ch_res(id, contents)values('hika', 'test')")
        Ch.sql.addQuery("update1", "update ch_res set contents='test2' where id='hika'")
        ChSql.addDb("test", """
            create table if not exists ch_res(
                res_rowid integer primary key autoincrement,
                id varchar(255) not null,
                contents text not null
            )
        """)
    }

    /*
    println(Chcrypto.generateRandomKey(32))
    println(Chcrypto.generateRandomKey(32))
    val key = Chcrypto.generateRandomKey(32)
    val s = Chcrypto.aesEncryptByte("hello 안녕", key)
    println(s)
    println(Chcrypto.aesDecryptByte(s, key))

    println("----" + "select * from ch_res".startsWith("select"))
    Ch.sql.addQuery("select1", "select * from ch_res")
    Ch.sql.addQuery("select2", "select id from ch_res where contents='test'")
    Ch.sql.addQuery("insert1", "insert into ch_res(id, contents)values('hika', 'test')")
    Ch.sql.addQuery("insert2", "insert into ch_res(id, contents)values('summer', 'real')")
    Ch.sql.addQuery("insert3", "insert into ch_res(id, contents)values(@id@, @contents@)")

    Ch.sql.db("test").then { db ->
        Promise.all(arrayOf(
                db.query("insert1"),
                db.query("insert2"),
                db.query("insert3", "id" to "jidolstar", "contents" to "debug")
        )).then {
            println("-----------------")
            db.query("select1")
        }.then {
            println("select1 - select * from ch_res")
            it?.forEach {println(JSON.stringify(it))}
            db.query("select2")
        }.then {
            println("select2 - select id from ch_res where contents='test'-$it")
            it?.forEach {println(JSON.stringify(it))}
        }
    }

    Ch.net.http("get", "testJSON.json").send {
        it.json?.then {
            println(JSON.stringify(it!!))
        }
    }
*/
}