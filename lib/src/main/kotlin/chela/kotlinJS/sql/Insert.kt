package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.then

internal class Insert(private val table:String):Query(){
    private var data:Map<String, String>? = null
    private var value:Map<String, Any>? = null
    companion object {
        private val rInsert = """^\s*insert\s+into\s+([a-zA-Z0-9_]+)\s*\(\s*([\sa-zA-Z0-9_,]+)\s*\)\s*values\s*\(\s*([^)]+)\s*\)$""".toRegex()

        internal fun parse(q:String):Query? = rInsert.find(q)?.let{
            val gv = it.groupValues
            val r = Insert(gv[1])
            val data = mutableMapOf<String, String>()
            val value = mutableMapOf<String, Any>()
            r.data = data
            r.value = value
            val v = gv[3].split(",").map{
                val v = it.trim()
                when(v[0]){
                    '@' ->v
                    '\'' -> v.substring(1, v.length - 1)
                    't' -> true
                    'f' -> false
                    else -> v.toDouble()
                }
            }
            gv[2].split(",").forEachIndexed{index, s ->
                val k = s.trim()
                value[k] = v[index]
                if("${v[index]}".contains('@')) data[k] = "${v[index]}".replace("@", "")
            }
            r
        }
    }
    override fun exec(db: DataBase, arg:Array<out Pair<String, Any>>) = run{
        val o = obj{
            into = table
            val vo = js("{}")
            val args = arg.toMap()
            value?.forEach {(k, v)->vo[k] = data?.get(k)?.let{args[it] ?: throw Throwable("error")} ?: v}
            values = js("[]")
            values[0] = vo
        }
        println("insert query")
        println(JSON.stringify(o))
        then(DataBase.connection.insert(o)){
            println("inserted!!")
            null
        }!!
    }
}