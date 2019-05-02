package chela.kotlinJS.view.router.holder

import chela.kotlinJS.view.router.ChRouter
import kotlin.browser.window

abstract class ChHolderBase<T>{
    internal fun _push(holder: ChHolder<T>, isRestore:Boolean){
        push(holder)
        holder.push(isRestore)
        _resume(holder, isRestore)
    }
    internal fun _pop(holder: ChHolder<T>, isJump:Boolean){
        _pause(holder, isJump)
        val delay = holder.pop(isJump)
        if(delay == 0) pop(holder)
        else window.setTimeout({pop(holder)}, delay)
    }
    internal fun _pause(holder: ChHolder<T>, isJump:Boolean){
        pause(holder)
        holder.pause(isJump)
    }
    internal fun _resume(holder: ChHolder<T>, isRestore:Boolean){
        resume(holder)
        holder.resume(isRestore)
    }
    internal fun _take(index:Int, holder: ChHolder<T>){
        take(index, holder)
        holder.take()
    }
    protected open fun push(holder: ChHolder<T>){}
    open fun pop(holder: ChHolder<T>){}
    protected open fun pause(holder: ChHolder<T>){}
    protected open fun resume(holder: ChHolder<T>){}
    open fun take(index:Int, holder: ChHolder<T>){}
    open fun clear(){}
}
abstract class ChHolder<T>(val isJumpPoint:Boolean = false){
    abstract fun create(base: ChHolderBase<T>):T
    open fun push(isRestore:Boolean){}
    open fun pop(isJump:Boolean) = 0
    open fun resume(isRestore:Boolean){}
    open fun pause(isJump:Boolean){}
    open fun take(){}
    open fun action(key: String, arg: Array<out Any>) = false
}