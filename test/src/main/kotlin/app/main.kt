package app

import chela.kotlinJS.Ch
import chela.kotlinJS.cdata.Cdata
import chela.kotlinJS.cdata.ChCdata
import chela.kotlinJS.core.ChJS.objForEach
import chela.kotlinJS.model.Model
import chela.kotlinJS.view.ChViewModel
import kotlin.browser.document

object vm:Model(true){
    val a = "@{cdata.test}"
    val b = "@{cdata.test2}"
    val c = "@{cdata.test3}"
}

@Suppress("MoveLambdaOutsideParentheses")
fun main(args: Array<String>){
    val v = vm
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
                println(k)
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

    Ch.net.http("get", "test.json").send {
        it.json?.then {
            println(JSON.stringify(it!!))
        }
    }
*/
}