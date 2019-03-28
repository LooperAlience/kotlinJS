package chela.kotlinJS.model

import chela.kotlinJS.Ch
import chela.kotlinJS.core._allStack
import chela.kotlinJS.core._notBlank
import chela.kotlinJS.core._shift
import chela.kotlinJS.regex.reK
import chela.kotlinJS.regex.reV

abstract class Model(val _isRegister:Boolean = false){
    private class St(val p: St?, val t:Char, v:String, val k: String = "", val i:Int = 0){
        internal val v:String = v.trim()
        internal val key:String
            get(){
                var key = if(t == 'o') k else i.toString()
                var P = p
                while(P != null){
                    key = "${if(P.t == 'o') P.k else P.i.toString()}.$key"
                    P = P.p
                }
                return key._shift()
            }
        fun clone(p: St? = null, t:Char? = null, v:String? = null, k:String? = null, i:Int? = null): St =
            St(p ?: this.p, t ?: this.t, v ?: this.v, k ?: this.k, i ?: this.i)
    }
    companion object {
        val OBJECT = object{}
        val ARRAY = object{}
    }
    init{
        if(_isRegister){
            val cls = this::class
            println("aaa")
            cls.simpleName?.let {
                println("aaa:$it")
                if (ChModel.repo.containsKey(it)) throw Exception("exist key:$it")
                ChModel.repo[it] = this
            }
        }
    }
    @Suppress("LeakingThis")
    var _isSet = false
    @Suppress("UnsafeCastFromDynamic")
    open operator fun get(k:String):Any = asDynamic()[k]  ?: Ch.NONE
    open operator fun set(k:String, v:Any):Boolean {
        val obj = asDynamic()
        return obj[k]?.let {
            obj[k] = v
            true
        } as? Boolean ?: false
    }
    open fun viewmodel(k:String, v:List<String>):Boolean{throw Exception("override")}
    open fun record(k:String, v:List<String>):Boolean{throw Exception("override")}
    fun fromJson(v:String){
        _isSet = true
        if(v.isBlank()) return
        mutableListOf(St(null, 'o', v.trim()))._allStack ch@{ c, st ->
            when(c.v[0]){
                ',' -> st += c.clone(v=c.v._shift(), k="", i=c.i + 1)
                '{' -> {
                    st += St(c, 'o', c.v._shift())
                    set(if(c.t == 'o') c.k else c.i.toString(), OBJECT)
                }
                '[' -> {
                    st += St(c, 'a', c.v._shift())
                    set(if(c.t == 'o') c.k else c.i.toString(), ARRAY)
                }
                '}', ']' -> c.v._shift()._notBlank{if(c.p != null) st += c.p.clone(v=it)}
                else ->
                    reK.match(c.v)?.let{
                        st += c.clone(v= reK.cut(c.v), k=it.groupValues[1]+it.groupValues[2]+it.groupValues[3])
                    }?:
                    reV.match(c.v)?.let{
                        val key = c.key
                        val isOk = it.groups[1]?.let{set(key, it.value)} ?:
                            it.groups[2]?.let{set(key, it.value)} ?:
                            it.groups[3]?.let{set(key, reV.group3(it))} ?:
                            it.groups[4]?.let{set(key, reV.group4(it))} ?:
                            it.groups[5]?.let{set(key, it.value.toBoolean())} ?:
                            it.groups[6]?.let{viewmodel(key, it.value.split("."))} ?:
                            it.groups[7]?.let{record(key, it.value.split("."))} ?: true
                        reV.cut(c.v)._notBlank{ v->st += c.clone(v=v)}
                        if(!isOk) return@ch false
                    }
            }
            return@ch true
        }
    }
}