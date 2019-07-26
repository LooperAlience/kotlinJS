package chela.kotlinJS.looper

import chela.kotlinJS.core._shift
import kotlin.browser.window

typealias ItemBlock = (ChItem)->Unit

class ChLooper{
    private val f:(Double)->Unit = ::loop
    init{window.requestAnimationFrame(f)}
    private val sequence = Sequence(this)
    private var fps = 0.0
    private var previus = 0.0
    private var pauseStart = 0.0
    private var pausedTime = 0.0
    private val items = mutableListOf<ChItem>()
    private val remove = mutableListOf<ChItem>()
    private val add = mutableListOf<ChItem>()
    private val itemPool = mutableListOf<ChItem>()

    operator fun invoke(block: ItemDSL.()->Unit): Sequence {
        val item = getItem(ItemDSL().apply{block()})
        item.start += window.performance.now()
        item.end = if(item.term == -1.0) -1.0 else item.start + item.term
        items += item
        sequence.item = item
        return sequence
    }
    internal fun getItem(i: ItemDSL): ChItem = (itemPool._shift() ?: ChItem()).also{ item->
        with(i){
            item.term = time.toDouble()
            item.start = delay.toDouble()
            item.loop = loop
            item.block = block
            item.ended = ended
            item.isInfinity = isInfinity
            item.next = null
        }
    }
    fun loop(c:Double){
        val gap = c - previus
        if(gap > 0.0) fps = 1000.0 / gap
        previus = c
        if(items.isEmpty()){
            window.requestAnimationFrame(f)
            return
        }
        remove.clear()
        add.clear()
        var i = 0
        while(i < items.size) {
            val item = items[i++]
            if (item.isPaused || item.start > c) continue
            item.isTurn = false
            var isEnd = false
            item.rate = if(!item.isInfinity && item.end <= c){
                item.loop--
                if (item.loop <= 0) {
                    isEnd = true
                    1.0
                } else {
                    item.isTurn = true
                    item.start = c
                    item.end = c + item.term
                    0.0
                }
            }else if (item.term == 0.0) 0.0
            else (c - item.start) / item.term
            item.current = c
            item.isStop = false
            item.block(item)
            if (item.isStop || isEnd) {
                item.ended(item)
                item.next?.let {
                    it.start += c
                    it.end = it.start + it.term
                    add += it
                }
                remove += item
            }
        }
        if(remove.isNotEmpty() || add.isNotEmpty()){
            if(remove.isNotEmpty()){
                items -= remove
                itemPool += remove
            }
            if(add.isNotEmpty()) items += add
        }
        window.requestAnimationFrame(f)
    }
    fun pause(){
        if(pauseStart != 0.0) pauseStart = window.performance.now()
    }
    fun resume(){
        if(pauseStart != 0.0){
            pausedTime += window.performance.now() - pauseStart
            pauseStart = 0.0
        }
    }
}