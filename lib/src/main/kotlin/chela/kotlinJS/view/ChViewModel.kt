package chela.kotlinJS.view

import chela.kotlinJS.looper.ChItem
import chela.kotlinJS.model.Model


/**
 * This class represent viewmodel lifecycle event.
 */

abstract class ChViewModel(isRegister:Boolean = false): Model(isRegister){
    open fun start(){}
    open fun end(){}
    open fun paused(){}
    open fun resumeAnimation(it: ChItem){}
    open fun pauseAnimation(it: ChItem){}
}