package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.addJs

object ChSql{
    private val queries = mutableMapOf<String, ChQuery>()
    private val Dbs = mutableMapOf<String, DataBase>()
    fun init(path:String = "sql.js") = addJs(path)
    fun db(k:String) = Dbs[k]?.connect() ?: throw Throwable("invalid db $k")
    fun addDb(k:String, vararg create:String){
        println("addDB $k")
        if(Dbs[k] != null) throw Throwable("exist db:$k")
        Dbs[k] = DataBase(k, 1, create, "")
    }
    fun removeDb(k:String) = Dbs[k]?.remove()
    fun getQuery(key:String) = queries[key]
    fun addQuery(k:String, body:String){if(k.isNotBlank()) queries[k] = ChQuery(k, body)}
    fun removeQuery(k:String) = queries.remove(k)
}