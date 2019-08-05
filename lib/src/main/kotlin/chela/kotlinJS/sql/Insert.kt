package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.then

class Insert(it:MatchResult): Query(){
    @Suppress("UnsafeCastFromDynamic")
    override val query = JSON.stringify(obj{
        val gv = it.groupValues
        into = gv[1]
        values = arrayOf(obj{
            val v = rArrayItem.findAll(gv[3]).map{value(it.groupValues[1])}.toList()
            rArrayItem.findAll(gv[2]).forEachIndexed{idx, it->
                this[it.groupValues[1]] = v[idx]
            }
        })
    })
    override fun exec(db:DataBase, r:dynamic) = db.insert(r)
}
/*
{
    into: "TABLE_NAME",
    values: [{
        column1:value,
        column2:value
    },{
        column1:value,
        column2:value
    }]
}
*/