package chela.kotlinJS.core

fun <T> MutableList<T>._pop():T = this.removeAt(this.size - 1)
fun <T> MutableList<T>._shift():T? = if(this.isNotEmpty()) this.removeAt(0) else null
inline fun <T> MutableList<T>._allStack(block:(T, MutableList<T>)->Boolean){
    while(this.isNotEmpty()) if(!block(this.removeAt(this.size - 1), this)) break
}
interface toJSON{fun toJSON():String}
fun <K, V> Map<K, V>._toJSON():String{
    val r = mutableListOf<String>()
    this.forEach{(k, v)->
        r += "\"$k\":" + when(v) {
            is toJSON ->v.toJSON()
            is Map<*, *>->v._toJSON()
            is String->"\"" + v.replace("\"", "¤^%^£").replace("\\","\\\\").replace("¤^%^£", "\\\"") + "\""
            else->"$v"
        }
    }
    return "{" + r.joinToString(",") + "}"
}
fun <K, V> Map<K, V>._JSON():dynamic{
    val r = js("{}")
    forEach{(k, v)->r[k] = v}
    return r
}
fun String._shift():String  = this.substring(1)
fun String._pop():String  = this.substring(0, this.length - 1)
fun String._firstUpper():String  = this[0].toUpperCase() + this.substring(1)
fun String._firstLower():String  = this[0].toLowerCase() + this.substring(1)
inline fun String._notBlank(block:(String)->Unit){
    val v = this.trim()
    if(v.isNotBlank()) block(v)
}
fun String._split(s:String):List<String> = this.split(s).map{it.trim()}