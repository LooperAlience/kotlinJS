package chela.kotlinJS.sql
import chela.kotlinJS.core.ChJS

abstract class Query{
    companion object{

        private var rColumn = """\s*([a-zA-Z_]+)\s+([a-z0-9()]+)(?:\s+(.*)\s*)?""".toRegex(RegexOption.IGNORE_CASE)
        private val rProp = """(not null)|(primary key)|(autoincrement)|(unique)|(default += +[a-zA-Z0-9])""".toRegex(RegexOption.IGNORE_CASE)
        private val rNumType = """^(?:num|int|float|double)""".toRegex(RegexOption.IGNORE_CASE)
        private val rBoolType = """^bool""".toRegex(RegexOption.IGNORE_CASE)
        @Suppress("UnsafeCastFromDynamic")
        internal fun create(q:String):dynamic = rCreate.find(q)?.let{
            ChJS.obj {
                ine = it.groupValues[1].isNotEmpty()
                name = it.groupValues[2]
                columns = js("{}")
                it.groupValues[3].split(",").forEach{s ->
                    rColumn.find(s)?.let {
                        val v = it.groupValues
                        columns[v[1]] = ChJS.obj {
                            //String, Object, Number, Boolean, Array, DateTime
                            dataType = when{
                                rNumType.matches(v[2]) -> "number"
                                rBoolType.matches(v[2]) -> "boolean"
                                else -> "string"
                            }
                            if(v[3] != "") rProp.findAll(v[3]).forEach {
                                val v = it.groupValues
                                if(v[1] != "") notNull = true
                                if(v[2] != "") primaryKey = true
                                if(v[3] != "") autoIncrement = true
                                if(v[4] != "") unique = true
                                if(v[5] != "") default = when(dataType){
                                    "number" -> v[5].toInt(10)
                                    "boolean" -> v[5] == "true"
                                    else -> v[5]
                                }
                            }
                        }
                    }
                }
            }
        } ?: null

        internal val rLimit = """\s+limit\s+(.+)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        internal val rSkip = """\s+skip\s+(.+)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        internal val rOrder = """\sorder\s+by\s+([\S]+)(?:\s+(desc|asc))?\s*$""".toRegex(RegexOption.IGNORE_CASE)
        internal val rGroup = """\sgroup\s+by\s+(.+?)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        internal val rAggregate = """\s*(count|sum|avg|max|min)\s*\(([^)]+)\)\s*""".toRegex(RegexOption.IGNORE_CASE)
        internal val rWhere = """\swhere\s+([\s\S]+?)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        internal val rArrayItem = """\s*((?:'[^']*')|(?:[^,]+))\s*(?:,|\s*$)""".toRegex()

        private val rSelect = """^\s*select\s+([\s\S]+?)\s+from([\s\S]+?)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        private val rDelete = """^\s*delete\s+from([\s\S]+?)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        private val rInsert = """^\s*insert\s+into\s+([a-zA-Z0-9_]+)\s*\(\s*([\sa-zA-Z0-9_,]+)\s*\)\s*values\s*\(\s*([^)]+)\s*\)$""".toRegex(RegexOption.IGNORE_CASE)
        private val rUpdate = """^\s*update\s+([a-zA-Z0-9_]+)\s+set\s+(.+)\s*$""".toRegex(RegexOption.IGNORE_CASE)
        private val rCreate = """^\s*create\s+table(\s+if\s+not\s+exists)?\s+([a-zA-Z0-9_]+)\s*\(\s*((?:\s|\S)+)\)\s*$""".toRegex(RegexOption.IGNORE_CASE)

        private val rItem = """@([^@]+)@""".toRegex()

        private val rOr = """\s+or\s+""".toRegex(RegexOption.IGNORE_CASE)
        private val rAnd = """\s+and\s+""".toRegex(RegexOption.IGNORE_CASE)
        private val rWhereItem = """^\s*([0-9a-zA-Z_.]+)\s*(?:(?:(=|!=|[<>]=?)\s*(.+))|like\s+'(%?[^%]+%?)'|in\s*\(([^)]|\s)+\))\s*$""".toRegex()


        fun parse(v:String) = rSelect.find(v)?.let{Select(it)} ?:
            rInsert.find(v)?.let{Insert(it)} ?:
            rUpdate.find(v)?.let{Update(it)} ?:
            rDelete.find(v)?.let{Delete(it)} ?:
            throw Throwable("invalid query:$v")
        protected fun value(v:String) = when(v){
            "true"->true
            "false"->false
            "null"->null
            else->when(v[0]) {
                '@' -> v
                '\'' -> v.substring(1, v.length - 1)
                else -> v.toDouble()
            }
        }
        protected fun parseWhere(v:String?) = v?.let{
            var obj:dynamic = null
            var prev:dynamic = null
            it.split(rOr).forEach {
                val target = js("{}")
                if(obj == null) obj = target
                else prev.or = target
                prev = target
                it.split(rAnd).forEach {
                    rWhereItem.findAll(it).forEach{
                        val gv = it.groupValues
                        target[gv[1]] = if(gv[2] != "") ChJS.obj{this[gv[2]] = value(gv[3])}
                        else if(gv[4] != "") ChJS.obj{like = gv[4]}
                        else if(gv[5] != "") ChJS.obj{
                            `in` = mutableListOf<Any?>().apply{
                                rArrayItem.findAll(gv[5]).forEach{this += value(it.groupValues[1])}
                            }.toTypedArray()
                        }
                        else throw Throwable("invalid value:$gv")
                    }
                }
            }
            obj
        }
    }
    protected abstract val query:String
    internal fun query(db:DataBase, arg: Array<out Pair<String, Any>>) = run{
        val args = arg.toMap()
        val r = JSON.parse<dynamic>(query.replace(rItem){
            val k = it.groupValues[1]
            args[k]?.let{"$it"} ?: throw Throwable("invalid key: $k")
        })
        exec(db, r)
    }
    internal abstract fun exec(db:DataBase, r:dynamic):Array<dynamic>?
}