package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.then
import kotlin.js.Promise

class DataBase internal constructor(private val db:String, ver:Int, private val create: Array<out String>, private val upgrade:String = ""){
    internal var connection:dynamic = js("new JsStore.Instance()")
    companion object {

        private val rCreate = """^create +table(?: +if +not +exists)? +([a-zA-Z0-9_]+) *\(\s*((?:\s|\S)+)\)$""".toRegex()
        private var rColumn = """ *([a-zA-Z_]+) +([a-z0-9()]+)(?: +(?:(not null)|(primary key)|(autoincrement)|(unique)|(default += +[a-zA-Z0-9])))*""".toRegex()
        @Suppress("UnsafeCastFromDynamic")
        private fun create(q:String):dynamic = rCreate.find(q)?.let{
            obj{
                name = it.groupValues[1]
                columns = js("[]")
                it.groupValues[2].split(",").forEachIndexed { index, s ->
                    rColumn.find(s)?.let{
                        val v = it.groupValues
                        columns[index] = obj{
                            var type = "string"
                            name = v[1]
                            //String, Object, Number, Boolean, Array, DateTime
                            dataType = when{
                                v[2].startsWith("num") || v[2].startsWith("int") -> {
                                    type = "number"
                                    js("JsStore.DATA_TYPE.Number")
                                }
                                v[2].startsWith("bool") -> {
                                    type = "boolean"
                                    js("JsStore.DATA_TYPE.Boolean")
                                }
                                else->js("JsStore.DATA_TYPE.String")
                            }
                            if(v[3] != "") notNull = true
                            if(v[4] != "") primaryKey = true
                            if(v[5] != "") autoIncrement = true
                            if(v[6] != "") unique = true
                            if(v[7] != "") default = when(type) {
                                "number"->v[7].toInt(10)
                                "boolean"->v[7] == "true"
                                else->v[7]
                            }
                            /*
                                multiEntry: boolean, // Provides support to search inside array values (optional)
                                enableSearch: boolean - default value is true // Turn on/off search for this column (optional)
                                keyPath : string[] - allows you to use multiple indexing // optional
                            */
                        }
                    }
                }
            }
        } ?: null
    }
    internal var isCreate = false
    internal fun connect() = Promise<DataBase>{res, rej->
        if(isCreate) res(this) //then(connection.openDb(db)){res(this)}
        else then(connection.isDbExist(db)){
            if(it == true) then(connection.openDb(db), rej){
                isCreate = true
                res(this)
            }else then(connection.createDb(obj{
                name = db
                if(create.isNotEmpty()){
                    tables = js("[]")
                    create.forEachIndexed {index, it->
                        val r = create(it.trim())
                        if(r != null) tables[index] = r
                    }
                }
            }), rej){
                isCreate = true
                res(this)
            }
        }
    }
    fun remove(){
        isCreate = false
        connection.dropDb(db)
    }
    fun query(k:String, vararg arg:Pair<String, Any>) = ChSql.getQuery(k)?.query(this, arg) ?: throw Throwable("err")
    /*
    fun exec(k: String, vararg arg:Pair<String, Any>):Int{
        runQuery(k, *arg)
        val c = reader.rawQuery("SELECT changes()", null)
        val r = if (c != null && c.count > 0 && c.moveToFirst()) c.getInt(0) else 0
        c.close()
        return r
    }

    fun <T:Model> select(k:String, vararg arg:Pair<String, Any>, block:()->T) = runQuery(k, *arg)?.let {c->
        c.moveToFirst()
        val r = (0 until c.count).map {
            val v = block()
            c.columnNames.forEachIndexed { i, s ->
                v[s] = when (c.getType(i)) {
                    Cursor.FIELD_TYPE_INTEGER -> c.getInt(i)
                    Cursor.FIELD_TYPE_FLOAT -> c.getFloat(i)
                    Cursor.FIELD_TYPE_BLOB -> c.getBlob(i)
                    else -> c.getString(i)
                }
            }
            c.moveToNext()
            v
        }
        c.close()
        r
    } ?: listOf()
    fun lastId():Int{
        val c = reader.rawQuery("select last_insert_rowid()", null)
        val r = if(c.count > 0 && c.moveToFirst()) c.getInt(0) else -1
        c.close()
        return r
    }
    fun i(k: String, vararg arg:Pair<String, Any>): Int =
            runQuery(k, *arg)?.let { c ->
                val r = if (c.count > 0 && c.moveToFirst()) c.getInt(0) else -1
                c.close()
                return r
            } ?: -1
    fun l(k: String, vararg arg:Pair<String, Any>): Long =
            runQuery(k, *arg)?.let { c ->
                val r = if (c.count > 0 && c.moveToFirst()) c.getLong(0) else -1L
                c.close()
                return r
            } ?: -1L
    fun d(k: String, vararg arg:Pair<String, Any>): Double =
            runQuery(k, *arg)?.let { c ->
                val r = if (c.count > 0 && c.moveToFirst()) c.getDouble(0) else -1.0
                c.close()
                return r
            } ?: -1.0
    fun f(k: String, vararg arg: Pair<String, Any>): Float =
            runQuery(k, *arg)?.let{c->
                val r = if(c.count > 0 && c.moveToFirst()) c.getFloat(0) else -1F
                c.close()
                return r
            } ?: -1F
    fun s(k: String, vararg arg: Pair<String, Any>): String =
            runQuery(k, *arg)?.let { c ->
                val r = if (c.count > 0 && c.moveToFirst()) c.getString(0) else ""
                c.close()
                return r
            } ?: ""
    /**
     * @param key
     * @param db
     * @param param With param, check whether getQuery values follow the {@link ChRuleSet}.
     */
    @SuppressLint("Recycle")
    private fun runQuery(key:String, vararg param:Pair<String, Any>): Cursor?{
        val it = ChSql.getQuery(key) ?: run {
            msg = "invalid query:$key"
            return null
        }
        val arg = it.param(param) ?: run{
            msg = it.msg
            return null
        }
        var c:Cursor? = null
        if(arg.size > 1) writer.beginTransaction()
        arg.forEach{(query, a)->
            val q = query.substring(1)
            if(Ch.debugLevel > 1){
                Log.i("ch", "query:$q")
                Log.i("ch", "arg:${a.joinToString(", ")}, ${a.isEmpty()}")
            }
            try {
                when (query[0]) {
                    'r' -> {
                        c?.let{it.close()}
                        c = reader.rawQuery(q, if (a.isEmpty()) null else a) ?: run {
                            msg = "no result - $key"
                            null
                        }
                    }
                    'w'->if(a.isEmpty()) writer.execSQL(q) else writer.execSQL(q, a)
                }
            }catch(e:Throwable){msg = "error - $e"}
        }
        if(it.query.size > 1) writer.endTransaction()
        if(Ch.debugLevel > 1) Log.i("ch", "cursor:$c")
        return c
    }
    */
}