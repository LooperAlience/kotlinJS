package chela.kotlinJS.sql
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.obj
import kotlin.js.Promise

internal class Delete: Query(){
    companion object {
        private val rDelete = """^\s*delete\s+from([\s\S]+?)\s*$""".toRegex()
        private val rWhere = """\swhere\s+([\s\S]+?)\s*$""".toRegex()
        private val rAndOr = """\s(and|or)\s""".toRegex()
        private val rWhereItem = """^\s*([0-9a-zA-Z_.]+)\s*(?:(?:(=|!=|[<>]=?)\s*(.+))|like +'(%)?(\S)+(%)?'|in\s*\(([^)]|\s)+\))\s*$""".toRegex()

        internal fun parse(q:String):Query? = rDelete.find(q)?.let {
            var remain = it.groupValues[1]
            val where = rWhere.find(remain)?.let {
                remain = remain.replace(rWhere, "")
                it.groupValues[1]
            }
            val table = remain.trim()
            val del = Delete()
            del.table = table
            if(where != null) {
                del.wSep = rAndOr.findAll(where).map{it.groupValues[1]}.toList()
                val data = mutableMapOf<String, String>()
                del.wData = data
                val wItem = mutableMapOf<String, Pair<String, Any>>()
                del.wItem = wItem
                where.split(rAndOr).forEach {
                    rWhereItem.find(it)?.let {
                        val gv = it.groupValues
                        val k = gv[1]
                        wItem[k] = if (gv[2] != "") gv[2] to when (gv[3][0]) {//2(=<=>=><) 3(value)
                            '@' -> {
                                data[k] = gv[3].replace("@", "")
                                gv[3]
                            }
                            '\'' -> gv[3].substring(1, gv[3].length - 1)
                            't' -> true
                            'f' -> false
                            else -> gv[3].toDouble()
                        }
                        else if (gv[5] != "") {
                            if (gv[5].contains('@')) data[k] = gv[3].replace("@", "").replace("%", "")
                            val t = if (gv[4] == "%" && gv[6] == "%") "%like%"
                            else if (gv[4] == "%") "%like"
                            else "like%"
                            t to gv[4] + gv[5] + gv[6]
                        } else {
                            "in" to if (gv[7][0] == '@') {
                                data[k] = gv[7].replace("@", "")
                                gv[7]
                            } else {
                                gv[7].split(",").map {
                                    val v = it.trim()
                                    when (v[0]) {
                                        '\'' -> v.substring(1, v.length - 1)
                                        't' -> true
                                        'f' -> false
                                        else -> v.toDouble()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            del
        }
    }
    private var table:String = ""

    private var wSep:List<String>? = null
    private var wData: Map<String, String>? = null
    private var wItem: Map<String, Pair<String, Any>>? = null

    override fun exec(db: DataBase, arg:Array<out Pair<String, Any>>): Promise<Array<dynamic>?>{
        val args = arg.toMap()
        val r = obj{
            from = table
        }
        wItem?.let {map->
            val where = js("{}")
            r.where = where
            val or = if(wSep?.contains("or") == true) js("{}") else null
            if(or != null) where.or = or
            var i = 0
            map.forEach{(k, t)->
                val target = if(i > 0 && wSep?.get(i - 1) == "or") or else where
                val tv = t.second
                val v = wData?.get(k)?.let { args[it] ?: throw Throwable("error") }
                target[k] = when (t.first) {
                    "=", "in" -> v
                    ">", "<", "!=", ">=", "<=" ->{
                        val o = obj{}
                        o[t.first] = v ?: tv
                        o
                    }
                    "%like%" -> v?.let { "%$v%" }
                    "%like" -> v?.let { "%$v" }
                    "like%" -> v?.let { "$v%" }
                    else -> null
                } ?: tv
                i++
            }
        }
        println("delete query")
        println(JSON.stringify(r))
        return ChJS.then(DataBase.connection.remove(r)) {
            println("deleted!!")
            null
        }!!
    }
}