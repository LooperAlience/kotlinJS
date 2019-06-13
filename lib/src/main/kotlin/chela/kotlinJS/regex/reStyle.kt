package chela.kotlinJS.regex

object reStyle: ChRegex("""-[a-z]"""){
    fun key(v:String):String = re.replace(v){it.groupValues[0].substring(1).toUpperCase()}
}