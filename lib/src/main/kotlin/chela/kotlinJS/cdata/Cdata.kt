package chela.kotlinJS.cdata

import chela.kotlinJS.core.ChJS

class Cdata(val cat:String):LinkedHashMap<String, Any?>(){
    var default:String? = null
    companion object{
        operator fun invoke(k:String, v:dynamic, parent: Cdata = ChCdata.root){
            val i = k.indexOf('@')
            val data = (parent[k.substring(0, i)] as? Cdata) ?: run {
                val r = Cdata(k.substring(i))
                parent[k.substring(0, i)] = r
                r
            }
            ChJS.objForEach(v){k, v->
                if(k == "@default" && v is String) data.default = v
                else if(k.contains('@')) invoke(k, v, data)
                else data[k] = v
            }
        }
    }
}