package chela.kotlinJS.sql

import chela.kotlinJS.core.ChJS.obj
import chela.kotlinJS.core.ChJS.then

class Update(it:MatchResult):Query(){
    @Suppress("UnsafeCastFromDynamic")
    override val query = JSON.stringify(obj{
        `in` = it.groupValues[1]
        val s = it.groupValues[2].replace(rWhere){
            where = parseWhere(it.groupValues[1])
            ""
        }.trim()
        set = obj {
            rArrayItem.findAll(s).forEach {
                val (k, v) = it.groupValues[1].split('=').map{it.trim()}
                this[k] = v
            }
        }
    })
    override fun exec(db: DataBase, r:dynamic) = db.update(r)
}
/*
{
    in: "Table_Name",
    set: {
        column1: value1,
        column2: value2
    },
    where: {
        column3: some_value,
        column4: some_another_value
    }
}
 */