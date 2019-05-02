package chela.kotlinJS.regex

object reV: ChRegex(
    """^\s*""" +
    //1,2-string
    """(?:"((?:[^\\"]+|\\["\\bfnrt]|\\u[0-9a-fA-invoke]{4})*)"|`((?:[^`]+|\\[`\\bfnrt]|\\u[0-9a-fA-invoke]{4})*)`|""" +
    //3-double
    """(-?(?:0|[1-9]\d*)(?:\.\d+)(?:[eE][-+]?\d+)?(?:dp|%w|%h)?)|"""+
    //4-long
    """(-?(?:0|[1-9]\d*)(?:dp|sp|%w|%h)?)|""" +
    //5-bool
    """(true|false)|""" +
    //6-ChModel
    """(?:\@\{([^}]+)\})|"""+
    //7-record
    """(?:\$\{([^}]*)\}))\s*"""
){
    fun group3(it:MatchGroup):Double{
        val v = it.value
        return when {
            v.endsWith("dp") -> v.substring(0, v.length - 2).toDouble()
            v.endsWith("sp") -> v.substring(0, v.length - 2).toDouble()
            v.endsWith("%w") -> v.substring(0, v.length - 2).toDouble()
            v.endsWith("%h") -> v.substring(0, v.length - 2).toDouble()
            else -> v.toDouble()
        }
    }
    fun group4(it:MatchGroup):Long{
        val v = it.value
        return when {
            v.endsWith("dp")->(v.substring(0, v.length - 2).toDouble()).toLong()
            v.endsWith("sp")->(v.substring(0, v.length - 2).toDouble()).toLong()
            v.endsWith("%w")->(v.substring(0, v.length - 2).toDouble()).toLong()
            v.endsWith("%h")->(v.substring(0, v.length - 2).toDouble()).toLong()
            else->v.toLong()
        }
    }
    fun num(it:String):Number? = if(re.matches(it)) reV.match(it)?.let{
        it.groups[3]?.let{ group3(it) } ?: it.groups[4]?.let{ group4(it) }
    } as Number? else null
}