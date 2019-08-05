package chela.kotlinJS.sql
import chela.kotlinJS.core.ChJS.obj

class Select(it:MatchResult): Query(){
    private val fields = it.groupValues[1].trim().split(",").map{it.trim()}.filter{!rAggregate.matches(it)}
    @Suppress("UnsafeCastFromDynamic")
    override val query = JSON.stringify(obj{
        if(rAggregate.containsMatchIn(it.groupValues[1])){
            aggregate = obj{
                rAggregate.findAll(it.groupValues[1]).forEach{
                    this[it.groupValues[1]] = it.groupValues[2]
                }
            }
        }
        from = it.groupValues[2]
        .replace(rLimit){
            limit = value(it.groupValues[1])
            ""
        }
        .replace(rSkip){
            skip = value(it.groupValues[1])
            ""
        }
        .replace(rOrder){
            order = obj {
                by = it.groupValues[1]
                type = if(it.groupValues[2] == "desc") "desc" else "asc"
            }
            ""
        }
        .replace(rGroup){
            groupBy = it.groupValues[1]
            ""
        }.replace(rWhere){
            where = parseWhere(it.groupValues[1])
            ""
        }.trim()
    })
    override fun exec(db:DataBase, r:dynamic) = db.select(r, fields as MutableList<String>)
}
/*
{
    from:"Table_Name",
    aggregate:{min:Column_Name}, //count|sum|avg|max|min
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
    },
    order: {
        by: column_name,
        type:asc //asc|desc
    },
    groupBy:Column_Name,
    skip: number,
    limit: number
}
 */