package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.then

internal class Update(private val table:String):Query(){
    private var data = mutableMapOf<String, String>()
    private var value = mutableMapOf<String, Any>()

    private var wSep:List<String>? = null
    private var wData: Map<String, String>? = null
    private var wItem: Map<String, Pair<String, Any>>? = null

    companion object {
        private val rUpdate = """^\s*update\s+([a-zA-Z0-9_]+)\s+set\s+(.+)\s*$""".toRegex()
        private val rWhere = """\swhere\s+([\s\S]+?)\s*$""".toRegex()
        private val rAndOr = """\s(and|or)\s""".toRegex()
        private val rWhereItem = """^\s*([0-9a-zA-Z_.]+)\s*(?:(?:(=|!=|[<>]=?)\s*(.+))|like +'(%)?(\S)+(%)?'|in\s*\(([^)]|\s)+\))\s*$""".toRegex()

        internal fun parse(q:String):Query? = rUpdate.find(q)?.let{
            val up = Update(it.groupValues[1])
            var remain = it.groupValues[2]
            val where = rWhere.find(remain)?.let {
                remain = remain.replace(rWhere, "")
                it.groupValues[1]
            }
            remain.split(',').map{
                val (k, v) = it.split('=').map{it.trim()}
                if(v.contains('@')) up.data[k] = v.replace("@", "")
                up.value[k] = v
            }
            if(where != null) {
                up.wSep = rAndOr.findAll(where).map{it.groupValues[1]}.toList()
                val data = mutableMapOf<String, String>()
                up.wData = data
                val wItem = mutableMapOf<String, Pair<String, Any>>()
                up.wItem = wItem
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
            up
        }
    }
    override fun exec(db: DataBase, arg:Array<out Pair<String, Any>>) = run{
        val o = obj{
            `in` = table
            val vo = js("{}")
            val args = arg.toMap()
            value?.forEach {(k, v)->vo[k] = data?.get(k)?.let{args[it] ?: throw Throwable("error")} ?: v}
            set = vo
            where = wItem?.let {map->
                val where = js("{}")
                val or = if(wSep?.contains("or") == true) js("{}") else null
                if(or != null) where.or = or
                var i = 0
                map.forEach{(k, t)->
                    val target = if(i > 0 && wSep?.get(i - 1) == "or") or else where
                    val tv = t.second
                    val v = wData?.get(k)?.let { args[it] ?: throw Throwable("no arg $k") }
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
                where
            }
        }
        then(db.connection.update(o)){
            null
        }!!
    }
}