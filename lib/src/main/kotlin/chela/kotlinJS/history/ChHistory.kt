package chela.kotlinJS.history

import chela.kotlinJS.core.ChJS
import chela.kotlinJS.core._pop
import kotlin.browser.window

abstract class ChHistory(private val default:String){
    private val history = mutableListOf<String>()
    protected var hash:String = ""
    operator fun invoke(){
        val f:()->Unit = {
            val v = ChJS.decodeURIComponent(window.location.hash)
            hash = if(v.isBlank() || hash == "#") default else v
            println("hash$hash")
            when{
                history.isNotEmpty() && last() == hash->same()
                history.size > 1 && history[history.size - 2] == hash->{
                    back()
                }
                else->{
                    val idx = history.lastIndexOf(hash)
                    if(idx != -1) inHistory(idx, history.size)
                    history += hash
                    add(hash, history.size - 1)
                }
            }
            changed()
        }
        window.onhashchange = {f()}
        f()
    }
    fun pop() = history._pop()
    fun isEmpty() = history.isEmpty()
    fun size() = history.size
    fun last() = if(!isEmpty()) history.last() else ""
    fun lastprev() = history[history.size - 2]
    fun get() = if(!isEmpty()) history.last()?.substring(1).split(":")[0] else ""
    protected open fun same(){}
    protected open fun back(){}
    protected open fun inHistory(idx: Int, size: Int){}
    protected abstract fun add(hash:String, idx: Int)
    protected open fun changed(){}
}
