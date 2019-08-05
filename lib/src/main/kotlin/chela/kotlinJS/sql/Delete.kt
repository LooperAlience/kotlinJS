package chela.kotlinJS.sql
import chela.kotlinJS.core.ChJS.obj

class Delete(it:MatchResult): Query(){
    @Suppress("UnsafeCastFromDynamic")
    override val query = JSON.stringify(obj{
        from = it.groupValues[1]
        .replace(rWhere){
            where = parseWhere(it.groupValues[1])
            ""
        }.trim()
    })
    override fun exec(db: DataBase, r:dynamic) = db.delete(r)
}
/*
{
    from:"Table_Name",
    where:{
        column1:{like:"a%"}, //%a|%a%|a%
        column1:{in:[value1, value2, ...]},
        column1:{'>':some_value}, //> | < | >= | <= | = | !=
        column1:some_value,
        or:{
            Column2: some_another_value,
             or:{
                Column2: some_another_value
            }
        }
    }
}
 */