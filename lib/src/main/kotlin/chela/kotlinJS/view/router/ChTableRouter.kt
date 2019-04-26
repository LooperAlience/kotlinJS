package chela.kotlinJS.view.router

abstract class ChTableRouter<T:ChRouter<*>>(vararg router:Pair<String, T>){
    protected val routers:Map<String, T> = router.toMap()
    protected val table = mutableMapOf<String, (T, List<String>)->Unit>()

    fun action(action:String){

    }
}