package chela.kotlinJS.view.scanner.template

class TemplateData(var data:Array<dynamic>?, var templates:Array<out String>){
    var ref:Map<String, dynamic>? = null
    fun ref(vararg arg:Pair<String, dynamic>):TemplateData{
        ref = arg.toMap()
        return this
    }
}