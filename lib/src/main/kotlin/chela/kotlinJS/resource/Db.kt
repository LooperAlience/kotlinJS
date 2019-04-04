package chela.kotlinJS.resource

import chela.kotlinJS.sql.ChSql

class Db(v:dynamic){
    private val create = v.unsafeCast<Array<dynamic>>().map{
        "${if (it is String) it else it.join(" ")}"
    }.toTypedArray()
    fun set(k:String) = ChSql.addDb(k, *create)
    fun remove(k:String) = ChSql.removeDb(k)
}