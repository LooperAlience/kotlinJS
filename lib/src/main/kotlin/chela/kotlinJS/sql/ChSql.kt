package chela.kotlinJS.sql

import chela.kotlinJS.sql.DBType.localStorage

object ChSql{
    private val queries = mutableMapOf<String, Query>()
    private val Dbs = mutableMapOf<String, DataBase>()
    val mode = localStorage
    fun getDb(k:String) = Dbs[k] ?: throw Throwable("invalid getDb $k")
    fun addDb(k:String, vararg create:String){
        if(Dbs.containsKey(k)) throw Throwable("exist getDb:$k")
        Dbs[k] = when(mode){
            localStorage -> LocalDataBase(k, 1, create)
        }
    }
    fun removeDb(k:String) = Dbs[k]?.remove()
    fun getQuery(key:String) = queries[key]
    fun addQuery(k:String, body:String){if(k.isNotBlank()) queries[k] = Query.parse(body)}
    fun removeQuery(k:String) = queries.remove(k)
}