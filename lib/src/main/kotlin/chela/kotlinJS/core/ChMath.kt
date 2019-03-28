package chela.kotlinJS.core

import kotlin.random.Random

object ChMath {
    fun rand(start:Int, end:Int) = Random.nextInt(start, end + 1)
    fun rand(start:Double, end:Double):Double = Random.nextDouble(start, end)
}
