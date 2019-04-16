package chela.kotlinJS.view.router

import chela.kotlinJS.core._pop
import chela.kotlinJS.view.router.holder.ChHolder
import chela.kotlinJS.view.router.holder.ChHolderBase

class ChRouter<T>(private val base: ChHolderBase<T>){
    init{base.router = this}
    private val stack = mutableListOf<ChHolder<T>>()
    private val keys = mutableListOf<String>()
    val isFinal:Boolean get() = stack.size < 2
    fun restore(){stack.forEach{base._push(it, true)}}
    fun push(holder: ChHolder<T>, key:String? = null){
        if(stack.isNotEmpty()) base._pause(stack.last(), false)
        base._push(holder, false)
        stack += holder
        keys += key ?: ""
    }
    fun pop():Int{
        if(stack.isEmpty()) return 0
        val h = stack.last()
        base._pop(h, false)
        stack._pop()
        keys._pop()
        if (stack.isNotEmpty()) base._resume(stack.last(), true)
        return stack.size
    }
    fun take(holder: ChHolder<T>){
        val i = stack.lastIndexOf(holder)
        if(i != -1) take(i)
    }
    fun take(index:Int){
        if(stack.size > index){
            base._take(index, stack.removeAt(index))
            keys.removeAt(index)
        }
    }
    fun key(key:String) = when {
        keys.size == 0 -> false
        keys.last() == key -> true
        keys.size > 1 && keys[keys.size - 2] == key -> {
            pop()
            true
        }
        else -> false
    }
    fun clear(){
        stack.clear()
        keys.clear()
        base.clear()
    }
    fun action(key:String, vararg arg:Any) = if(stack.isNotEmpty()) stack.last().action(key, arg) else false
}