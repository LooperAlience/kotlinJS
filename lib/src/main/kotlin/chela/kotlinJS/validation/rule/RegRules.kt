package chela.kotlinJS.validation.rule

import chela.kotlinJS.validation.ChRule

object RegRules: ChRule(){
    private val ip =
        """^(?:(?:[0-9]|(?:1\d{1,2})|(?:2[0-4]\d)|(?:25[0-5]))[.]){3}(?:[0-9]|[1-9][0-9]{1,2}|2[0-4]\d|25[0-5])$""".toRegex()
    private val url = """^https?://[a-zA-Z0-9.-]+(?:[.]+[A-Za-z]{2,4})+(?:[:]\d{2,4})?""".toRegex()
    private val email = """^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-]+(?:[.]+[A-Za-z]{2,4})+$""".toRegex()
    private val korean = """^[ㄱ-힣]+$""".toRegex()
    private val japanese = """^[ぁ-んァ-ヶー一-龠！-ﾟ・～「」“”‘’｛｝〜−]+$""".toRegex()
    private val lower = """^[a-z]+$""".toRegex()
    private val upper = """^[A-Z]+$""".toRegex()
    private val num = """^(?:-?(?:0|[1-9]\d*)(?:\.\d+)(?:[eE][-+]?\d+)?)|(?:-?(?:0|[1-9]\d*))$""".toRegex()
    private val intnum = """^(?:-?(?:0|[1-9]\d*))$""".toRegex()
    private val doublenum = """^(?:-?(?:0|[1-9]\d*)(?:\.\d+)(?:[eE][-+]?\d+)?)$""".toRegex()
    private val lowernum = """^[a-z0-9]+$""".toRegex()
    private val uppernum = """^[A-Z0-9]+$""".toRegex()
    private val alphanum = """^[a-zA-Z0-9]+$""".toRegex()
    private val firstlower = """^[a-z]""".toRegex()
    private val firstUpper = """^[A-Z]""".toRegex()
    private val noblank = """\s""".toRegex()
    init {
        ChRule["ip"] = {{ v->if (v is String && ip.find(v) != null) v else this}}
        ChRule["url"] = {{ v->if (v is String && url.find(v) != null) v else this}}
        ChRule["email"] = {{ v->if (v is String && email.find(v) != null) v else this}}
        ChRule["korean"] = {{ v->if (v is String && korean.find(v) != null) v else this}}
        ChRule["japanese"] = {{ v->if (v is String && japanese.find(v) != null) v else this}}
        ChRule["lower"] = {{ v->if (v is String && lower.find(v) != null) v else this}}
        ChRule["upper"] = {{ v->if (v is String && upper.find(v) != null) v else this}}
        ChRule["num"] = {{ v->if (v is String && num.find(v) != null) v else this}}
        ChRule["intnum"] = {{ v->if (v is String && intnum.find(v) != null) v else this}}
        ChRule["doublenum"] = {{ v->if (v is String && doublenum.find(v) != null) v else this}}
        ChRule["lowernum"] = {{ v->if (v is String && lowernum.find(v) != null) v else this}}
        ChRule["uppernum"] = {{ v->if (v is String && uppernum.find(v) != null) v else this}}
        ChRule["alphanum"] = {{ v->if (v is String && alphanum.find(v) != null) v else this}}
        ChRule["firstlower"] = {{ v->if (v is String && firstlower.find(v) != null) v else this}}
        ChRule["firstUpper"] = {{ v->if (v is String && firstUpper.find(v) != null) v else this}}
        ChRule["noblank"] = {{ v->if (v is String && noblank.find(v) == null) v else this}}
    }
}