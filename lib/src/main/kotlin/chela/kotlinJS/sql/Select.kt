package chela.kotlinJS.sql
import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core.ChJS.obj
import kotlin.js.Promise

internal class Select: Query(){


    companion object {
        private val rSelect = """^\s*select([\s\S]+?)\s+from([\s\S]+?)\s*$""".toRegex()
        private val rLimit = """\slimit\s+([0-9]+)$""".toRegex()
        private val rOrder = """\sorder\s+oby\s+([\S]+)(?:\s+(desc|asc))?$""".toRegex()
        private val rGroup = """\sgroup\s+oby\s+(.+?)\s*$""".toRegex()
        private val rWhere = """\swhere\s+([\s\S]+?)\s*$""".toRegex()
        private val rJoin = """\s+(?:inner\s+join\s+.+\s+on\s+.+\s*)+""".toRegex()
        private val rAndOr = """\s(and|or)\s""".toRegex()
        private val rWhereItem = """^\s*([0-9a-zA-Z_.]+)\s*(?:(?:(=|!=|[<>]=?)\s*(.+))|like +'(%)?(\S)+(%)?'|in\s*\(([^)]|\s)+\))\s*$""".toRegex()
        private val rAggregate = """(count|sum|avg|max|min)\(([^)]+)\)""".toRegex()
        private val join = """\sinner\s+join\s+([a-zA-Z0-9_]+)(?:\s+([a-zA-Z0-9_]+))?\s+on\s+([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\s*=\s*([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)""".toRegex()

        internal fun parse(q:String):Query? = rSelect.find(q)?.let {
            val fields = it.groupValues[1].trim().split(",").map{it.trim()}
            var remain = it.groupValues[2]
            val limitNum = rLimit.find(remain)?.let {
                remain = remain.replace(rLimit, "")
                it.groupValues[1].toInt()
            } ?: -1
            val orderby = rOrder.find(remain)?.let {
                remain = remain.replace(rOrder, "")
                listOf(it.groupValues[1], if(it.groupValues[2] == "desc") "desc" else "asc")
            }
            val group = rGroup.find(remain)?.let {
                remain = remain.replace(rGroup, "")
                it.groupValues[1]//.split(",").map{it.trim()}
            }
            val where = rWhere.find(remain)?.let {
                remain = remain.replace(rWhere, "")
                it.groupValues[1]
            }
            val join = rJoin.find(remain)?.let{
                remain = remain.replace(rJoin, "")
                it.groupValues[1]
            }
            val table = remain.trim()
            val sel = Select()
            join?.let{
                println("join1-$join")
            } ?: run{
                sel.table = table
                if (limitNum != -1) sel.limitNum = limitNum
                if (orderby != null){
                    sel.oby = orderby[0]
                    sel.obyType = orderby[1]
                }
                if (group != null) sel.group = group
                if(where != null) {
                    sel.wSep = rAndOr.findAll(where).map{it.groupValues[1]}.toList()
                    val data = mutableMapOf<String, String>()
                    sel.wData = data
                    val wItem = mutableMapOf<String, Pair<String, Any>>()
                    sel.wItem = wItem
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
                if(!fields.any {
                    rAggregate.find(it)?.let{
                        sel.aggre = it.groupValues[1] to it.groupValues[2]
                        true
                    } == true
                }) sel.fields = fields
            }
            sel
        }
    }
    private var table:String = ""
    private var fields:List<String>? = null
    private var aggre:Pair<String, String>? = null

    private var wSep:List<String>? = null
    private var wData: Map<String, String>? = null
    private var wItem: Map<String, Pair<String, Any>>? = null

    private var oby:String = ""
    private var obyType:String = "asc"

    private var group:String = ""
    private var limitNum:Int = -1

    override fun exec(db: DataBase, arg:Array<out Pair<String, Any>>): Promise<Array<dynamic>?>{
        val args = arg.toMap()
        val r = obj{
            from = table
            if (limitNum != -1) limit = limitNum
            if (oby != "") order = obj{
                by = oby
                type = obyType
            }
            if(group.isNotBlank()) groupBy = group
            aggre?.let{(k,v)->
                aggregate = js("{}")
                aggregate[k] = v
            }
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
        println("select query")
        println(JSON.stringify(r))
        return ChJS.then(DataBase.connection.select(r)) {
            val r = it as Array<dynamic>
            fields?.let {f->
                if(f[0] != "*") r.map{o->
                    val r = js("{}")
                    f.forEach{r[it] = o[it]}
                    r
                }.toTypedArray() else null
            } ?: r
        }!!
    }
}