package chela.kotlinJS.view.router

import chela.kotlinJS.core._allStack
import chela.kotlinJS.core._pop
import chela.kotlinJS.view.router.holder.ChHolder
import chela.kotlinJS.view.router.holder.ChHolderBase

class ChRouter<T>(private val base: ChHolderBase<T>){
    private val stack = mutableListOf<ChHolder<T>>()
    private var pushLock = false
    private var popLock = false
    init{base.router = this}
    fun restore(){stack.forEach{base._push(it, true)}}
    fun unlockPush(){if(pushLock) pushLock = false}
    fun unlockPop(){if(popLock) popLock = false}
    fun push(holder: ChHolder<T>, isAutoUnlock:Boolean = true){
        if(pushLock) return
        if(!isAutoUnlock) pushLock = true
        if(stack.isNotEmpty()) base._pause(stack.last(), true)
        base._push(holder, false)
        stack += holder
    }
    fun pop(isAutoUnlock:Boolean = true):Int{
        if(stack.isEmpty()) return 0
        if(popLock) return -1
        if(!isAutoUnlock) popLock = true
        val h = stack.last()
        base._pop(h, false)
        stack._pop()
        if (stack.isNotEmpty()) base._resume(stack.last(), true)
        return stack.size - 1
    }
    fun jump(holder: ChHolder<T>) = stack._allStack{ v, _->
        if (holder === v) {
            base._resume(holder, false)
            false
        } else {
            base._pop(holder, true)
            true
        }
    }
    fun url(url:String){}
}