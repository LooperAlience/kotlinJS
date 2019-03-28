package chela.kotlinJS.sql
import kotlin.js.Promise

internal abstract class Query{
    internal abstract fun exec(db: DataBase, arg: Array<out Pair<String, Any>>): Promise<Array<dynamic>?>
}