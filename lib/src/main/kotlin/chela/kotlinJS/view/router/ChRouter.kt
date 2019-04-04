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
        if(stack.isNotEmpty()) base._pause(stack.last(), false)
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
        return stack.size
    }
    fun jump(){
        var isJump = false
        stack._allStack{v, _->
            if(v.isJumpPoint){
                base._pop(v, true)
                base._resume(stack[stack.size - 1], false)
                false
            }else{
                base._pop(v, isJump)
                if(!isJump) isJump = true
                true
            }
        }
    }
    fun jump(holder: ChHolder<T>, isIncluded:Boolean = true){
        var isJump = false
        stack._allStack{v, _->
            if(holder === v){
                if(!isIncluded) base._resume(v, false)
                else{
                    base._pop(v, true)
                    base._resume(stack[stack.size - 1], false)
                }
                false
            }else{
                base._pop(v, isJump)
                if(!isJump) isJump = true
                true
            }
        }
    }
    fun take(holder: ChHolder<T>){
        val i = stack.lastIndexOf(holder)
        if(i != -1) take(i)
    }
    fun take(index:Int){
        if(stack.size > index) base.take(index, stack.removeAt(index), true)
    }
    fun clear() = stack.clear()
    fun action(key:String, vararg arg:Any) = if(stack.isNotEmpty()) stack.last().action(key, arg) else false
}