package chela.kotlinJS.view.router

abstract class ChTableRouter<T>{
    private val table = mutableMapOf<String, (List<String>)->T>()
}