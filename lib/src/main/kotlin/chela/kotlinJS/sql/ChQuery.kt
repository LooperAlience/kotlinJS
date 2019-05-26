package chela.kotlinJS.sql

class ChQuery(key:String, body:String){
    internal var msg = ""
    internal val query = run {
        val query = body.trim()
        when{
            query.startsWith("select") -> Select.parse(query)
            query.startsWith("insert") -> Insert.parse(query)
            query.startsWith("delete") -> Delete.parse(query)
            query.startsWith("update") -> Update.parse(query)
            else-> Select.parse(query)
        } ?: throw Throwable("invalid query:$query")
    }
    internal fun query(db: DataBase, arg: Array<out Pair<String, Any>>) = query.exec(db, arg)
}