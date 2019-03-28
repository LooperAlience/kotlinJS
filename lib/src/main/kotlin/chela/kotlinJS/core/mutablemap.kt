package chela.kotlinJS.core

interface toJSON{fun toJSON():String}
fun <K, V> Map<K, V>._toJSON():String{
    val r = mutableListOf<String>()
    this.forEach{(k, v)->
        r += "\"$k\":" + when(v) {
            is toJSON ->v.toJSON()
            is Map<*, *>->v._toJSON()
            is String->"\"" + v.replace("\"", "\\\"") + "\""
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