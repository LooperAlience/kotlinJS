package app

import chela.kotlinJS.Ch
import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.uuid
import chela.kotlinJS.model.Model
import chela.kotlinJS.view.ChViewModel
import kotlin.browser.document
import kotlin.js.Promise
import kotlin.random.Random

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
    //app0()
    appDB()
    appCdata()
}
fun appDB(){
    Ch.sql.apply {
        addDb("test", "create table test(rowid int primary key autoincrement, id text, contents text)")
        addQuery("testGet", "select rowid, id, contents from test order by rowid desc skip @skip@ limit @limit@")
        addQuery("testCount", "select count(*), max(rowid), min(rowid), avg(rowid) from test")
        addQuery("testAdd", "insert into test(id, contents)values('@id@', '@contents@')")
        addQuery("testUpdate", "update test set contents='@contents@' where rowid=@rowid@")
        addQuery("testGetId", "select rowid, id, contents from test where rowid=@rowid@")
        addQuery("testLikeL", "select rowid, id, contents from test where contents like '%@v@'")
        addQuery("testLikeR", "select rowid, id, contents from test where contents like '@v@%'")
        addQuery("testLikeLR", "select rowid, id, contents from test where contents like '%@v@%'")
        addQuery("testDelete", "delete from test where rowid=@rowid@")
        addQuery("testGroup", "select rowid, id, contents from test group by id order by rowid desc")
        addQuery("testGroupAgg", "select count(rowid), max(rowid), min(rowid), avg(rowid) from test group by id order by count desc")
        getDb("test").apply{
            query("testAdd", "id" to if(Random.nextBoolean()) "hika" else "boeun", "contents" to uuid())
            console.log("select", query("testGet", "skip" to 0, "limit" to 100))
            console.log("select", query("testGet", "skip" to 5, "limit" to 10))
            val count = query("testCount")?.get(0)?.count ?: 0
            console.log("aggregate no group", query("testCount"))
            console.log("count", count)
            query("testUpdate", "rowid" to Random.nextInt(count), "contents" to "contentsUpdated")
            console.log("update select", query("testGetId", "rowid" to count))
            val delId = Random.nextInt(count)
            query("testDelete", "rowid" to delId)
            console.log("testDelete", delId, query("testGetId", "rowid" to delId))
            val rs = query("testGet", "skip" to 0, "limit" to 10)
            rs?.let {
                val s = "${it[0].contents}"
                val f = s.first()
                val l = s.last()
                val c = s.substring(3, 8)
                console.log("likeL %$l", query("testLikeL", "v" to l))
                console.log("likeR $f%", query("testLikeR", "v" to f))
                console.log("likeLR %$c%", query("testLikeLR", "v" to c))
            }
            console.log("testGroup", query("testGroup"))
            console.log("aggregate group", query("testGroupAgg"))
        }
    }
}
fun appCdata(){
    Ch.resource("""{
        "cdata":{
            "@ln":"ko",
            "@a":"b",
            "test@ln":{
                "ko":"안녕하세요.",
                "en@a":{
                    "b":"hello test"
                }
            },
            "test2@ln":{
                "ko":"안녕하세요."
            }
        }
    }""")
    console.log(Ch.cdata("ln"), Ch.cdata("a"),"test", Ch.value("@{cdata.test}"))
    Ch.cdata("ln", "en")
    console.log(Ch.cdata("ln"), Ch.cdata("a"),"test", Ch.value("@{cdata.test}"))
    Ch.cdata("a", "a")
    console.log(Ch.cdata("ln"), Ch.cdata("a"), "test", Ch.value("@{cdata.test}"))
    console.log("state", Ch.cdata.state)
    console.log(Ch.cdata("ln"), Ch.cdata("a"), "test3", Ch.value("@{cdata.test3}"))
    console.log("state", Ch.cdata.state)
    console.log(Ch.cdata("ln"), Ch.cdata("a"), "test2", Ch.value("@{cdata.test2}"))
    console.log("state", Ch.cdata.state)
    Ch.cdata.request{
        val v = JSON.parse<dynamic>("""{
            "cdata":{
                "test3@ln":{
                    "ko":"안녕하세요3.",
                    "en":"hello test3"
                }
            }
        }""")
        Ch.cdata.saveCache(v)
        Promise.resolve(true)
    }.then {
        console.log("state clear", Ch.cdata.state)
        console.log(Ch.cdata("ln"), Ch.cdata("a"), "test3", Ch.value("@{cdata.test3}"))
    }
}
fun app0(){
    val v = vm
    Ch.resource("""{
        "cdata":{
            "@ln":"ko",
            "test@ln":{
                "ko":"안녕하세요.",
                "en@a":{
                    "b":"hello test"
                }
            },
            "test2@ln":{
                "ko":"안녕하세요."
            }
        }
    }""")
    val scanned = Ch.scanner.scan(document.body!!)
    scanned.render()
    Ch.cdata.api = {
        Promise{r, _ ->
            Ch.net.http("GET", "json/cdata.json").send {
                it.body?.then {
                    val v = JSON.parse<dynamic>(it).cdata
                    r(
                        if(v != undefined) {
                            //Ch.cdata.save(v)
                            true
                        }else false
                    )
                }
            }
        }
    }
    Ch.cdata.request().then{
        if(it) scanned.render()
    }
}
    /*
    val o = ChJS.obj {
        islogin = true
        email = "aaa"
    }
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
                Ch.net.http("select", "json/cdata.json").send {
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
        Ch.sql.addQuery("update1", "update ch_res insert contents='test2' where id='hika'")
        ChSql.addDb("test", """
            create table if not exists ch_res(
                res_rowid integer primary key autoincrement,
                id varchar(255) not null,
                contents text not null
            )
        """)
        Ch.sql.getDb("test").then {
            it.query("insert1")
        }
    }
*/
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

    Ch.sql.getDb("test").then { getDb ->
        Promise.all(arrayOf(
                getDb.query("insert1"),
                getDb.query("insert2"),
                getDb.query("insert3", "id" to "jidolstar", "contents" to "debug")
        )).then {
            println("-----------------")
            getDb.query("select1")
        }.then {
            println("select1 - select * from ch_res")
            it?.forEach {println(JSON.stringify(it))}
            getDb.query("select2")
        }.then {
            println("select2 - select id from ch_res where contents='test'-$it")
            it?.forEach {println(JSON.stringify(it))}
        }
    }

    Ch.net.http("select", "testJSON.json").send {
        it.json?.then {
            println(JSON.stringify(it!!))
        }
    }
*/
