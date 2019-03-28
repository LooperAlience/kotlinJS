package chela.kotlinJS.validation.rule

import chela.kotlinJS.validation.ChRule

/**
 * Child class of ChRule.
 * All _defined are stored as MutableMap in Abstract class.
 */
object TypeRules: ChRule(){
    init {
        ChRule["int"] = {{ v->if (v is Int) v else this}}
        ChRule["long"] = {{ v->if (v is Long) v else this}}
        ChRule["float"] = {{ v->if (v is Float) v else this}}
        ChRule["double"] = {{ v->if (v is Double) v else this}}
        ChRule["string"] = {{ v->if (v is String) v else this}}
        ChRule["char"] = {{ v->if (v is Char) v else this}}
    }
}