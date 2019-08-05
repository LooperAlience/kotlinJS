package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS

abstract class DataBase(protected val db:String, protected val ver:Int, protected val create: Array<out String>){
    internal abstract fun remove()
    internal abstract fun select(r:dynamic, fields:MutableList<String>):Array<dynamic>?
    internal abstract fun insert(r:dynamic):Array<dynamic>?
    internal abstract fun delete(r:dynamic):Array<dynamic>?
    internal abstract fun update(r:dynamic):Array<dynamic>?
    internal abstract fun createTable(r:dynamic)
    fun query(k:String, vararg arg:Pair<String, Any>) = ChSql.getQuery(k)?.query(this, arg)
    fun create(r:String){
        val v = Query.create(r)
        if(v != null) createTable(v)
    }
    protected fun fieldZip(r:Array<dynamic>, fields:List<String>?) = fields?.let {f->
        if(f[0] != "*") r.map{o->ChJS.obj{f.forEach{this[it] = o[it]}}}.toTypedArray() else null
    } ?: r
}
