if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'lib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'lib'.");
}
var lib = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Random = Kotlin.kotlin.random.Random;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Map = Kotlin.kotlin.collections.Map;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var L1099511627776 = new Kotlin.Long(0, 256);
  var L17592186044415 = new Kotlin.Long(-1, 4095);
  var toString = Kotlin.kotlin.text.toString_if0zpk$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var equals = Kotlin.equals;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var removeAll = Kotlin.kotlin.collections.removeAll_ye1y7v$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var math = Kotlin.kotlin.math;
  var getCallableRef = Kotlin.getCallableRef;
  var throwUPAE = Kotlin.throwUPAE;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var List = Kotlin.kotlin.collections.List;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_8eortd$;
  var toString_0 = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var println_0 = Kotlin.kotlin.io.println;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_v2dak7$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var numberToDouble = Kotlin.numberToDouble;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  Ch$ApiResult$ok.prototype = Object.create(Ch$ApiResult.prototype);
  Ch$ApiResult$ok.prototype.constructor = Ch$ApiResult$ok;
  Ch$ApiResult$fail.prototype = Object.create(Ch$ApiResult.prototype);
  Ch$ApiResult$fail.prototype.constructor = Ch$ApiResult$fail;
  ChFetch.prototype = Object.create(ChHttp.prototype);
  ChFetch.prototype.constructor = ChFetch;
  reK.prototype = Object.create(ChRegex.prototype);
  reK.prototype.constructor = reK;
  reParam.prototype = Object.create(ChRegex.prototype);
  reParam.prototype.constructor = reParam;
  reQueryParam.prototype = Object.create(ChRegex.prototype);
  reQueryParam.prototype.constructor = reQueryParam;
  reStyle.prototype = Object.create(ChRegex.prototype);
  reStyle.prototype.constructor = reStyle;
  reTrimLine.prototype = Object.create(ChRegex.prototype);
  reTrimLine.prototype.constructor = reTrimLine;
  reV.prototype = Object.create(ChRegex.prototype);
  reV.prototype.constructor = reV;
  Delete.prototype = Object.create(Query.prototype);
  Delete.prototype.constructor = Delete;
  Insert.prototype = Object.create(Query.prototype);
  Insert.prototype.constructor = Insert;
  Select.prototype = Object.create(Query.prototype);
  Select.prototype.constructor = Select;
  BaseRules.prototype = Object.create(ChRule.prototype);
  BaseRules.prototype.constructor = BaseRules;
  RegRules.prototype = Object.create(ChRule.prototype);
  RegRules.prototype.constructor = RegRules;
  TypeRules.prototype = Object.create(ChRule.prototype);
  TypeRules.prototype.constructor = TypeRules;
  ChViewModel.prototype = Object.create(Model.prototype);
  ChViewModel.prototype.constructor = ChViewModel;
  ChGroupBase.prototype = Object.create(ChHolderBase.prototype);
  ChGroupBase.prototype.constructor = ChGroupBase;
  ChScanItem.prototype = Object.create(Model.prototype);
  ChScanItem.prototype.constructor = ChScanItem;
  ChTemplate.prototype = Object.create(Model.prototype);
  ChTemplate.prototype.constructor = ChTemplate;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Ch() {
    Ch_instance = this;
    this.debugLevel = 0;
    this.NONE = new Ch$NONE$ObjectLiteral();
    this.ruleset = ChRuleSet$Companion_getInstance();
    this.sql = ChSql_getInstance();
    this.net = ChNet_getInstance();
    this.resource = ChRes_getInstance();
    this.model = ChModel_getInstance();
    this.scanner = ChScanner_getInstance();
    this.data_0 = LinkedHashMap_init();
  }
  function Ch$data$lambda$lambda$lambda$lambda(closure$key, closure$api, closure$db, closure$getDB, closure$setDB, closure$arg, closure$block, this$Ch) {
    return function (it) {
      this$Ch.data_79t8p7$(closure$key, closure$api, closure$db, closure$getDB, closure$setDB, closure$arg, closure$block);
      return Unit;
    };
  }
  function Ch$data$lambda$lambda$lambda(closure$setDB, closure$d, closure$key, closure$api, closure$db, closure$getDB, closure$arg, closure$block, this$Ch) {
    return function (res) {
      var $receiver = closure$setDB(closure$d, res);
      var onFulfilled = Ch$data$lambda$lambda$lambda$lambda(closure$key, closure$api, closure$db, closure$getDB, closure$setDB, closure$arg, closure$block, this$Ch);
      $receiver.then(onFulfilled);
      return Unit;
    };
  }
  function Ch$data$lambda$lambda(this$Ch, closure$key, closure$block, closure$arg, closure$api, closure$setDB, closure$d, closure$db, closure$getDB) {
    return function (v) {
      if (v != null && v.timestamp + v.limit < Date.now()) {
        ChRes_getInstance().res_za3rmp$(v);
        var $receiver = this$Ch.data_0;
        var key = closure$key;
        $receiver.put_xwzc9p$(key, v);
        return closure$block(v, closure$arg);
      }
       else {
        return Ch_getInstance().net.api_cx78i$(closure$api, [], Ch$data$lambda$lambda$lambda(closure$setDB, closure$d, closure$key, closure$api, closure$db, closure$getDB, closure$arg, closure$block, this$Ch));
      }
    };
  }
  function Ch$data$lambda(closure$getDB, this$Ch, closure$key, closure$block, closure$arg, closure$api, closure$setDB, closure$db) {
    return function (d) {
      var $receiver = closure$getDB(d);
      var onFulfilled = Ch$data$lambda$lambda(this$Ch, closure$key, closure$block, closure$arg, closure$api, closure$setDB, d, closure$db, closure$getDB);
      return $receiver.then(onFulfilled);
    };
  }
  Ch.prototype.data_79t8p7$ = function (key, api, db, getDB, setDB, arg, block) {
    if (arg === void 0)
      arg = null;
    if (this.data_0.containsKey_11rb$(key))
      block(this.data_0.get_11rb$(key), arg);
    else
      ChSql_getInstance().db_61zpoe$(db).then(Ch$data$lambda(getDB, this, key, block, arg, api, setDB, db));
  };
  function Ch$ApiResult(msg) {
    this.msg = msg;
  }
  Ch$ApiResult.prototype.isFail = function () {
    return Kotlin.isType(this, Ch$ApiResult$fail);
  };
  function Ch$ApiResult$ok() {
    Ch$ApiResult$ok_instance = this;
    Ch$ApiResult.call(this, '');
  }
  Ch$ApiResult$ok.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ok',
    interfaces: [Ch$ApiResult]
  };
  var Ch$ApiResult$ok_instance = null;
  function Ch$ApiResult$ok_getInstance() {
    if (Ch$ApiResult$ok_instance === null) {
      new Ch$ApiResult$ok();
    }
    return Ch$ApiResult$ok_instance;
  }
  function Ch$ApiResult$fail(msg) {
    Ch$ApiResult.call(this, msg);
  }
  Ch$ApiResult$fail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'fail',
    interfaces: [Ch$ApiResult]
  };
  Ch$ApiResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApiResult',
    interfaces: []
  };
  Ch.prototype.templateData_v64fsn$ = function (data, template) {
    return new TemplateData(data, template);
  };
  Ch.prototype.event_xjb5d6$ = function (e, el) {
    return new ChEvent(e, el);
  };
  Ch.prototype.looper = function () {
    return new ChLooper();
  };
  Ch.prototype.router_h4smyp$ = function (base) {
    return new ChRouter(base);
  };
  Ch.prototype.router_lt8gi4$ = function (el) {
    return new ChRouter(new ChGroupBase(el));
  };
  Ch.prototype.router_61zpoe$ = function (el) {
    var tmp$;
    return new ChRouter(new ChGroupBase(Kotlin.isType(tmp$ = document.querySelector(el), HTMLElement) ? tmp$ : throwCCE()));
  };
  function Ch$NONE$ObjectLiteral() {
  }
  Ch$NONE$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Ch.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Ch',
    interfaces: []
  };
  var Ch_instance = null;
  function Ch_getInstance() {
    if (Ch_instance === null) {
      new Ch();
    }
    return Ch_instance;
  }
  var _true = defineInlineFunction('lib.chela.kotlinJS.core._true_jpqn4r$', function ($receiver, block) {
    if ($receiver)
      block();
  });
  var _false = defineInlineFunction('lib.chela.kotlinJS.core._false_jpqn4r$', function ($receiver, block) {
    if (!$receiver)
      block();
  });
  function ChDate() {
    ChDate_instance = this;
  }
  ChDate.prototype.offset = function () {
    return 1;
  };
  ChDate.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChDate',
    interfaces: []
  };
  var ChDate_instance = null;
  function ChDate_getInstance() {
    if (ChDate_instance === null) {
      new ChDate();
    }
    return ChDate_instance;
  }
  function ChJS() {
    ChJS_instance = this;
    this.obj = Object;
    this.enc = encodeURIComponent;
    this.inF = function (k, t) {
      return k in t;
    };
  }
  ChJS.prototype.keys_td8qyo$ = defineInlineFunction('lib.chela.kotlinJS.core.ChJS.keys_td8qyo$', function (v, block) {
    var $receiver = this.obj.keys(v);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      block(element);
    }
  });
  ChJS.prototype.obj2map_7ean9w$ = defineInlineFunction('lib.chela.kotlinJS.core.ChJS.obj2map_7ean9w$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var ChJS$obj2map$lambda = wrapFunction(function () {
      var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
      return function (closure$v, closure$block) {
        return function ($receiver) {
          var r = LinkedHashMap_init();
          var $receiver_0 = $receiver.obj.keys(closure$v);
          var tmp$;
          for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
            var element = $receiver_0[tmp$];
            var value = closure$block(element, closure$v[element]);
            r.put_xwzc9p$(element, value);
          }
          return r;
        };
      };
    });
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    return function (v, block) {
      var r = LinkedHashMap_init();
      var $receiver = this.obj.keys(v);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var value = block(element, v[element]);
        r.put_xwzc9p$(element, value);
      }
      return r;
    };
  }));
  ChJS.prototype.objForEach_5e4ts1$ = defineInlineFunction('lib.chela.kotlinJS.core.ChJS.objForEach_5e4ts1$', wrapFunction(function () {
    return function (v, block) {
      var $receiver = this.obj.keys(v);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        block(element, v[element]);
      }
    };
  }));
  ChJS.prototype.obj_5ij4lk$ = defineInlineFunction('lib.chela.kotlinJS.core.ChJS.obj_5ij4lk$', function (block) {
    var o = {};
    block(o);
    return o;
  });
  ChJS.prototype.obj_pr14l1$ = defineInlineFunction('lib.chela.kotlinJS.core.ChJS.obj_pr14l1$', function (target, block) {
    block(target);
    return target;
  });
  ChJS.prototype.then_xaus8m$ = function (p, block) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = p, Promise) ? tmp$ : null) != null ? tmp$_0.then(block) : null;
  };
  ChJS.prototype.encodeURIComponent_61zpoe$ = function (v) {
    return this.enc(v);
  };
  ChJS.prototype.isIn_bm4g0d$ = function (key, target) {
    var tmp$;
    return typeof (tmp$ = this.inF(key, target)) === 'boolean' ? tmp$ : throwCCE();
  };
  function ChJS$addJs$lambda(closure$path) {
    return function (res, f) {
      var tmp$;
      var script = document.createElement('script');
      script.setAttribute('src', closure$path);
      script.addEventListener('load', res);
      (tmp$ = document.head) != null ? tmp$.appendChild(script) : null;
      return Unit;
    };
  }
  ChJS.prototype.addJs_61zpoe$ = function (path) {
    return new Promise(ChJS$addJs$lambda(path));
  };
  ChJS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChJS',
    interfaces: []
  };
  var ChJS_instance = null;
  function ChJS_getInstance() {
    if (ChJS_instance === null) {
      new ChJS();
    }
    return ChJS_instance;
  }
  function ChMath() {
    ChMath_instance = this;
  }
  ChMath.prototype.rand_vux9f0$ = function (start, end) {
    return Random.Default.nextInt_vux9f0$(start, end + 1 | 0);
  };
  ChMath.prototype.rand_lu1900$ = function (start, end) {
    return Random.Default.nextDouble_lu1900$(start, end);
  };
  ChMath.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChMath',
    interfaces: []
  };
  var ChMath_instance = null;
  function ChMath_getInstance() {
    if (ChMath_instance === null) {
      new ChMath();
    }
    return ChMath_instance;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function _toString($receiver) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ($receiver != null) {
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3 = destination.add_11rb$;
        var k = item.component1()
        , v = item.component2();
        tmp$_3.call(destination, k + ':' + v.toString());
      }
      tmp$_1 = destination;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = (tmp$ = tmp$_1) != null ? joinToString(tmp$, ',') : null) != null ? tmp$_0 : '';
  }
  function _stringify$lambda(f) {
    var k = f.component1()
    , v = f.component2();
    return ' ' + '"' + k + '"' + ' : ' + (typeof v === 'string' ? '"' + replace(v, '"', '\\"') + '"' : v).toString();
  }
  function _stringify($receiver) {
    return '{' + '\n' + '    ' + joinToString($receiver, ',', void 0, void 0, void 0, void 0, _stringify$lambda) + '\n' + '}';
  }
  function _shift($receiver) {
    return !$receiver.isEmpty() ? $receiver.removeAt_za3lpa$(0) : null;
  }
  function _pop($receiver) {
    return $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
  }
  var _notEmpty = defineInlineFunction('lib.chela.kotlinJS.core._notEmpty_pz0c7t$', function ($receiver, block) {
    if (!$receiver.isEmpty())
      block($receiver);
  });
  var _allStack = defineInlineFunction('lib.chela.kotlinJS.core._allStack_gnw1bc$', function ($receiver, block) {
    while (!$receiver.isEmpty() && block($receiver.removeAt_za3lpa$($receiver.size - 1 | 0), $receiver)) {
    }
  });
  var _cutStack = defineInlineFunction('lib.chela.kotlinJS.core._cutStack_gnw1bc$', function ($receiver, block) {
    var tmp$;
    var i = $receiver.size - 1 | 0;
    while ((tmp$ = i, i = tmp$ - 1 | 0, tmp$) > 0) {
      if (!block($receiver.get_za3lpa$(i), $receiver))
        $receiver.removeAt_za3lpa$(i);
    }
  });
  function toJSON() {
  }
  toJSON.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'toJSON',
    interfaces: []
  };
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function _toJSON($receiver) {
    var r = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      var tmp$_0;
      if (Kotlin.isType(v, toJSON))
        tmp$_0 = v.toJSON();
      else if (Kotlin.isType(v, Map))
        tmp$_0 = _toJSON(v);
      else if (typeof v === 'string')
        tmp$_0 = '"' + replace(v, '"', '\\"') + '"';
      else
        tmp$_0 = v.toString();
      var element_0 = '"' + k + '"' + ':' + tmp$_0;
      r.add_11rb$(element_0);
    }
    return '{' + joinToString(r, ',') + '}';
  }
  function _JSON($receiver) {
    var r = {};
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      r[k] = v;
    }
    return r;
  }
  var toList_0 = defineInlineFunction('lib.chela.kotlinJS.core.toList_d3eamm$', wrapFunction(function () {
    var HTMLElement_0 = HTMLElement;
    var throwCCE = Kotlin.throwCCE;
    var wrapFunction = Kotlin.wrapFunction;
    var toList$lambda = wrapFunction(function () {
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
      return function ($receiver) {
        var r = ArrayList_init();
        var i = 0;
        while (i < $receiver.length) {
          var tmp$, tmp$_0;
          var element = Kotlin.isType(tmp$_0 = $receiver[tmp$ = i, i = tmp$ + 1 | 0, tmp$], HTMLElement_0) ? tmp$_0 : throwCCE();
          r.add_11rb$(element);
        }
        return r;
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver) {
      var r = ArrayList_init();
      var i = 0;
      while (i < $receiver.length) {
        var tmp$, tmp$_0;
        var element = Kotlin.isType(tmp$_0 = $receiver[tmp$ = i, i = tmp$ + 1 | 0, tmp$], HTMLElement_0) ? tmp$_0 : throwCCE();
        r.add_11rb$(element);
      }
      return r;
    };
  }));
  var _try = defineInlineFunction('lib.chela.kotlinJS.core._try_klfg04$', wrapFunction(function () {
    var Throwable = Error;
    return function (block) {
      try {
        return block();
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          return null;
        }
         else
          throw e;
      }
    };
  }));
  var _requiredNotNull = defineInlineFunction('lib.chela.kotlinJS.core._requiredNotNull_mprak0$', wrapFunction(function () {
    return function (v, block) {
      var all$result;
      all$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== v.length; ++tmp$) {
          var element = v[tmp$];
          if (!(element != null)) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      if (all$result)
        block();
    };
  }));
  function _shift_0($receiver) {
    return $receiver.substring(1);
  }
  function _pop_0($receiver) {
    var endIndex = $receiver.length - 1 | 0;
    return $receiver.substring(0, endIndex);
  }
  var toChar = Kotlin.toChar;
  function _firstUpper($receiver) {
    var $receiver_0 = $receiver.charCodeAt(0);
    var tmp$ = toChar(String.fromCharCode($receiver_0 | 0).toUpperCase().charCodeAt(0));
    var other = $receiver.substring(1);
    return String.fromCharCode(tmp$) + other;
  }
  function _firstLower($receiver) {
    var $receiver_0 = $receiver.charCodeAt(0);
    var tmp$ = toChar(String.fromCharCode($receiver_0 | 0).toLowerCase().charCodeAt(0));
    var other = $receiver.substring(1);
    return String.fromCharCode(tmp$) + other;
  }
  var _notBlank = defineInlineFunction('lib.chela.kotlinJS.core._notBlank_u9ujr0$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    return function ($receiver, block) {
      var tmp$;
      var v = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
      if (!isBlank(v))
        block(v);
    };
  }));
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function _split($receiver, s) {
    var $receiver_0 = split($receiver, [s]);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    return destination;
  }
  var uuid;
  function uuid$lambda(it) {
    return toString(Random.Default.nextLong_3pjtqy$(L1099511627776, L17592186044415), 16).substring(0, it);
  }
  function uuid_0() {
    return joinToString(uuid, '-', void 0, void 0, void 0, void 0, uuid$lambda);
  }
  function Chcrypto() {
    Chcrypto_instance = this;
    this.textEncoder_0 = new TextEncoder();
    this.textDecoder_0 = new TextDecoder('utf-8');
  }
  Chcrypto.prototype.aesKey = function () {
    return this.generateRandomKey_za3lpa$(32);
  };
  Chcrypto.prototype.aesEncryptByte_1zj90t$ = function (v, secretKey) {
    return AES256_getInstance().encryptByte_1zj90t$(v, secretKey);
  };
  Chcrypto.prototype.aesDecryptByte_5cv3q$ = function (v, secretKey) {
    return AES256_getInstance().decryptByte_5cv3q$(v, secretKey);
  };
  Chcrypto.prototype.generateRandomKey_za3lpa$ = function (lengthBits) {
    var $receiver = new Int8Array(lengthBits);
    $receiver.set(toTypedArray(Random.Default.nextBytes_za3lpa$(lengthBits)));
    return $receiver;
  };
  Chcrypto.prototype.textEncode_61zpoe$ = function (v) {
    return this.textEncoder_0.encode(v);
  };
  Chcrypto.prototype.textDecode_ybr97f$ = function (v) {
    return this.textDecoder_0.decode(v);
  };
  Chcrypto.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Chcrypto',
    interfaces: []
  };
  var Chcrypto_instance = null;
  function Chcrypto_getInstance() {
    if (Chcrypto_instance === null) {
      new Chcrypto();
    }
    return Chcrypto_instance;
  }
  function AES256() {
    AES256_instance = this;
  }
  AES256.prototype.encryptByte_1zj90t$ = function (v, secretKey) {
    return this.encryptByte_5cv3q$(Chcrypto_getInstance().textEncode_61zpoe$(v), secretKey);
  };
  AES256.prototype.encryptByte_5cv3q$ = function (v, secretKey) {
    if (secretKey.length !== 32)
      throw Kotlin.newThrowable('invalid keyLength 32 != ' + secretKey.length);
    return asmCrypto.AES_CBC.encrypt(v, secretKey, true, secretKey.subarray(0, 16));
  };
  AES256.prototype.decryptByte_5cv3q$ = function (v, secretKey) {
    if (secretKey.length !== 32)
      throw Kotlin.newThrowable('invalid keyLength 32 != ' + secretKey.length);
    return Chcrypto_getInstance().textDecode_ybr97f$(asmCrypto.AES_CBC.decrypt(v, secretKey, true, secretKey.subarray(0, 16)));
  };
  AES256.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AES256',
    interfaces: []
  };
  var AES256_instance = null;
  function AES256_getInstance() {
    if (AES256_instance === null) {
      new AES256();
    }
    return AES256_instance;
  }
  function ChEvent(event, el) {
    this.event = event;
    this.el = el;
    this.eld_0 = this.el;
    this._data_0 = this.eld_0.__chel__.data;
  }
  Object.defineProperty(ChEvent.prototype, 'data', {
    get: function () {
      return this._data_0.data;
    }
  });
  Object.defineProperty(ChEvent.prototype, 'index', {
    get: function () {
      return this._data_0.index;
    }
  });
  Object.defineProperty(ChEvent.prototype, 'length', {
    get: function () {
      return this._data_0.length;
    }
  });
  ChEvent.prototype.render = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this._data_0.tmpl, ChTemplate) ? tmp$ : null) != null ? tmp$_0.rerender_hdhptw$(this._data_0.view, this.index, this.length, this.data, false) : null;
  };
  ChEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChEvent',
    interfaces: []
  };
  function ChDom() {
    ChDom_instance = this;
    this.doc_0 = document;
    this.docel_0 = this.doc_0.documentElement;
    this.table_0 = this.doc_0.createElement('table');
    this.body_0 = this.doc_0.createElement('body');
    this.select_0 = this.doc_0.createElement('select');
  }
  ChDom.prototype.el_tp33y8$ = function (tagName, block) {
    if (block === void 0)
      block = null;
    var tmp$;
    var el = Kotlin.isType(tmp$ = this.doc_0.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    if (block != null) {
      block(new El(el));
    }
    return el;
  };
  ChDom.prototype.el_ba1bpx$ = function (element, block) {
    block(new El(element));
    return element;
  };
  ChDom.prototype.tag2html_61zpoe$ = function (txt) {
    var endIndex = indexOf(txt, 62);
    var tag = split_0(txt.substring(1, endIndex), Kotlin.charArrayOf(32)).get_za3lpa$(0).toUpperCase();
    var el = this.body_0;
    t2h$break: do {
      var tmp$, tmp$_0;
      el.innerHTML = txt;
      var v = {v: el};
      var limit = 20;
      while (true) {
        var tmp$_1;
        if ((tmp$ = v.v.firstElementChild) != null) {
          v.v = tmp$;
          if (equals(v.v.tagName, tag)) {
            v.v;
            break t2h$break;
          }
          tmp$_1 = false;
        }
         else
          tmp$_1 = null;
        if (!(tmp$_1 === true && (tmp$_0 = limit, limit = tmp$_0 - 1 | 0, tmp$_0) > 0))
          break;
      }
      null;
    }
     while (false);
    var el_0 = this.table_0;
    t2h$break: do {
      var tmp$_2, tmp$_3;
      el_0.innerHTML = txt;
      var v_0 = {v: el_0};
      var limit_0 = 20;
      while (true) {
        var tmp$_4;
        if ((tmp$_2 = v_0.v.firstElementChild) != null) {
          v_0.v = tmp$_2;
          if (equals(v_0.v.tagName, tag)) {
            v_0.v;
            break t2h$break;
          }
          tmp$_4 = true;
        }
         else
          tmp$_4 = null;
        if (!(tmp$_4 === true && (tmp$_3 = limit_0, limit_0 = tmp$_3 - 1 | 0, tmp$_3) > 0))
          break;
      }
      null;
    }
     while (false);
    var el_1 = this.select_0;
    t2h$break: do {
      var tmp$_5, tmp$_6;
      el_1.innerHTML = txt;
      var v_1 = {v: el_1};
      var limit_1 = 20;
      while (true) {
        var tmp$_7;
        if ((tmp$_5 = v_1.v.firstElementChild) != null) {
          v_1.v = tmp$_5;
          if (equals(v_1.v.tagName, tag)) {
            v_1.v;
            break t2h$break;
          }
          tmp$_7 = true;
        }
         else
          tmp$_7 = null;
        if (!(tmp$_7 === true && (tmp$_6 = limit_1, limit_1 = tmp$_6 - 1 | 0, tmp$_6) > 0))
          break;
      }
      null;
    }
     while (false);
    throw Kotlin.newThrowable('invalid Tag:' + txt);
  };
  ChDom.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChDom',
    interfaces: []
  };
  var ChDom_instance = null;
  function ChDom_getInstance() {
    if (ChDom_instance === null) {
      new ChDom();
    }
    return ChDom_instance;
  }
  function El(el) {
    El$Companion_getInstance();
    this.el = el;
    this.elStyle_0 = this.el.style;
  }
  function El$Companion() {
    El$Companion_instance = this;
    var win = window;
    win.__ch__ = {e: {}};
    this.event_0 = win.__ch__.e;
    this.body_0 = document.body;
    var tmp$;
    this.bodyStyle_0 = (tmp$ = document.body) != null ? tmp$.style : null;
    this.prefix_0 = split_0('webkit,Moz,chrome,ms', Kotlin.charArrayOf(44));
    this.evKey_0 = LinkedHashMap_init();
    this.keys_0 = LinkedHashMap_init();
    this.prop_0 = mutableMapOf([to('className', El$Companion$prop$lambda), to('html', El$Companion$prop$lambda_0), to('+html', El$Companion$prop$lambda_1), to('html+', El$Companion$prop$lambda_2), to('submit', El$Companion$prop$lambda_3), to('focus', El$Companion$prop$lambda_4), to('blur', El$Companion$prop$lambda_5), to('checked', El$Companion$prop$lambda_6), to('selected', El$Companion$prop$lambda_7), to('unselect', El$Companion$prop$lambda_8), to('value', El$Companion$prop$lambda_9(this)), to('A', El$Companion$prop$lambda_10)]);
  }
  function El$Companion$prop$lambda(self_0, el, f, v) {
    el.className = v;
    return Unit;
  }
  function El$Companion$prop$lambda_0(self_0, el, f, v) {
    el.innerHTML = v;
    return Unit;
  }
  function El$Companion$prop$lambda_1(self_0, el, f, v) {
    el.innerHTML = v + el.innerHTML;
    return Unit;
  }
  function El$Companion$prop$lambda_2(self_0, el, f, v) {
    el.innerHTML = el.innerHTML + v;
    return Unit;
  }
  function El$Companion$prop$lambda_3(self_0, el, f, f_0) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = Kotlin.isType(tmp$ = el, HTMLFormElement) ? tmp$ : null) != null) {
      tmp$_0.submit();
    }
    return Unit;
  }
  function El$Companion$prop$lambda_4(self_0, el, f, f_0) {
    el.focus();
    return Unit;
  }
  function El$Companion$prop$lambda_5(self_0, el, f, f_0) {
    el.blur();
    return Unit;
  }
  function El$Companion$prop$lambda_6(self_0, el, f, v) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = Kotlin.isType(tmp$ = el, HTMLInputElement) ? tmp$ : null) != null) {
      tmp$_0.checked = equals(v, 'true');
    }
    return Unit;
  }
  function El$Companion$prop$lambda_7(self_0, el, f, v) {
    var tmp$, tmp$_0;
    if (equals(v, 'false')) {
      if ((tmp$_0 = Kotlin.isType(tmp$ = el, HTMLSelectElement) ? tmp$ : null) != null) {
        tmp$_0.selectedIndex = -1;
      }
    }
    return Unit;
  }
  function El$Companion$prop$lambda_8(self_0, el, f, v) {
    if (equals(v, 'true')) {
      self_0.set_bm4g0d$('user-select', 'none');
      self_0.set_bm4g0d$('touch-callout', 'none');
      el.setAttribute('unselectable', 'on');
      el.setAttribute('onselectstart', 'return false');
    }
     else {
      self_0.set_bm4g0d$('user-select', 'null');
      self_0.set_bm4g0d$('touch-callout', 'null');
      el.removeAttribute('unselectable');
      el.removeAttribute('onselectstart');
    }
    return Unit;
  }
  function El$Companion$prop$lambda_9(this$El$) {
    return function (self_0, el, f, v) {
      var tmp$;
      if (v != null) {
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        el.setAttribute('value', v);
        var tmp$_5;
        if ((tmp$_1 = Kotlin.isType(tmp$_0 = el, HTMLSelectElement) ? tmp$_0 : null) != null) {
          tmp$_1.value = v;
          tmp$_5 = Unit;
        }
         else
          tmp$_5 = null;
        var tmp$_6;
        if ((tmp$_4 = tmp$_5) != null)
          tmp$_6 = tmp$_4;
        else {
          var tmp$_7;
          if ((tmp$_3 = Kotlin.isType(tmp$_2 = el, HTMLInputElement) ? tmp$_2 : null) != null) {
            tmp$_3.value = v;
            tmp$_7 = Unit;
          }
           else
            tmp$_7 = null;
          tmp$_6 = tmp$_7;
        }
        tmp$ = tmp$_6;
      }
       else
        tmp$ = null;
      if (tmp$ == null) {
        var tmp$_8, tmp$_9, tmp$_10, tmp$_11;
        el.removeAttribute('value');
        var tmp$_12;
        if ((tmp$_9 = Kotlin.isType(tmp$_8 = el, HTMLSelectElement) ? tmp$_8 : null) != null) {
          tmp$_9.value = '';
          tmp$_12 = Unit;
        }
         else
          tmp$_12 = null;
        if (tmp$_12 == null) {
          if ((tmp$_11 = Kotlin.isType(tmp$_10 = el, HTMLInputElement) ? tmp$_10 : null) != null) {
            tmp$_11.value = '';
          }
        }
      }
      return Unit;
    };
  }
  function El$Companion$prop$lambda_10(self_0, el, k, v) {
    el.setAttribute(k, v);
    return Unit;
  }
  El$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var El$Companion_instance = null;
  function El$Companion_getInstance() {
    if (El$Companion_instance === null) {
      new El$Companion();
    }
    return El$Companion_instance;
  }
  El.prototype.set_bm4g0d$ = function (k, _v) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (equals(k, 'template')) {
      if ((tmp$_0 = Kotlin.isType(tmp$ = _v, TemplateData) ? tmp$ : null) != null) {
        ChTemplate$Companion_getInstance().render_x66gnj$(this.el, tmp$_0.data, tmp$_0.templates);
      }
      return;
    }
    var tmp$_4;
    if (typeof _v === 'string' && _v.charCodeAt(0) === 64) {
      var tmp$_5 = ChModel_getInstance();
      var endIndex = _v.length - 1 | 0;
      tmp$_4 = tmp$_5.get_61zpoe$(_v.substring(2, endIndex));
    }
     else
      tmp$_4 = _v;
    var v = tmp$_4;
    var s = v.toString();
    var tmp$_6;
    if ((tmp$_1 = El$Companion_getInstance().prop_0.get_11rb$(String.fromCharCode(k.charCodeAt(0)))) != null) {
      tmp$_1(this, this.el, k.substring(1), s);
      tmp$_6 = Unit;
    }
     else
      tmp$_6 = null;
    var tmp$_7;
    if ((tmp$_3 = tmp$_6) != null)
      tmp$_7 = tmp$_3;
    else {
      var tmp$_8;
      if ((tmp$_2 = El$Companion_getInstance().prop_0.get_11rb$(k)) != null) {
        tmp$_2(this, this.el, k, s);
        tmp$_8 = Unit;
      }
       else
        tmp$_8 = null;
      tmp$_7 = tmp$_8;
    }
    if (tmp$_7 == null) {
      var tmp$_9, tmp$_10;
      var kk = (tmp$_9 = El$Companion_getInstance().keys_0.get_11rb$(k)) != null ? tmp$_9 : this.key_0(k);
      if (!equals(kk, ''))
        this.elStyle_0[kk] = equals(s, 'null') ? null : s;
      else {
        if ((tmp$_10 = this.eventKey_0(k)) != null) {
          var tmp$_11, tmp$_12, tmp$_13;
          if (equals(v, 'null')) {
            if ((tmp$_11 = this.el.getAttribute(tmp$_10)) != null) {
              if (!isBlank(tmp$_11)) {
                var tmp$_14 = El$Companion_getInstance().event_0;
                var startIndex = indexOf(tmp$_11, 91) + 1 | 0;
                var endIndex_0 = indexOf(tmp$_11, 93);
                delete(tmp$_14[tmp$_11.substring(startIndex, endIndex_0)]);
              }
            }
            this.el.removeAttribute(tmp$_10);
          }
           else {
            if ((tmp$_13 = typeof (tmp$_12 = v) === 'function' ? tmp$_12 : null) != null) {
              var id = uuid_0();
              El$Companion_getInstance().event_0[id] = tmp$_13;
              this.el.setAttribute(tmp$_10, "__ch__.e['" + id + "'](event, this)");
            }
          }
        }
      }
    }
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  El.prototype.key_0 = function (k) {
    var tmp$;
    var v = reStyle_getInstance().key_61zpoe$(k);
    var r = {v: ''};
    if ((tmp$ = El$Companion_getInstance().bodyStyle_0) != null) {
      var bs = tmp$;
      if (bs[v] != null) {
        r.v = v;
      }
       else {
        var $receiver = v.charCodeAt(0);
        var tmp$_0 = toChar(String.fromCharCode($receiver | 0).toUpperCase().charCodeAt(0));
        var other = v.substring(1);
        var vk = String.fromCharCode(tmp$_0) + other;
        var $receiver_0 = El$Companion_getInstance().prefix_0;
        any$break: do {
          var tmp$_1;
          if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
            break any$break;
          }
          tmp$_1 = $receiver_0.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            var predicate$result;
            if (bs[element + vk] != null) {
              r.v = element + vk;
              predicate$result = true;
            }
             else {
              predicate$result = false;
            }
            if (predicate$result) {
              break any$break;
            }
          }
        }
         while (false);
      }
    }
    var $receiver_1 = El$Companion_getInstance().keys_0;
    var value = r.v;
    $receiver_1.put_xwzc9p$(k, value);
    return r.v;
  };
  El.prototype.eventKey_0 = function (k) {
    if (!El$Companion_getInstance().evKey_0.containsKey_11rb$(k)) {
      var $receiver = El$Companion_getInstance().evKey_0;
      var value = ChJS_getInstance().isIn_bm4g0d$('on' + k, El$Companion_getInstance().body_0) ? 'on' + k : null;
      $receiver.put_xwzc9p$(k, value);
    }
    return El$Companion_getInstance().evKey_0.get_11rb$(k);
  };
  Object.defineProperty(El.prototype, 'className', {
    get: function () {
      return this.el.className;
    },
    set: function (v) {
      this.el.className = v;
    }
  });
  El.prototype.addClass_vqirvp$ = function (v) {
    var $receiver = this.className;
    var tmp$;
    var cls = split(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString(), [' ']);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== v.length; ++tmp$_0) {
      var element = v[tmp$_0];
      var tmp$_1;
      var v_0 = trim(Kotlin.isCharSequence(tmp$_1 = element) ? tmp$_1 : throwCCE()).toString();
      if (cls.indexOf_11rb$(v_0) === -1)
        this.className = cls.toString() + ' ' + v_0;
    }
  };
  El.prototype.removeClass_vqirvp$ = function (v) {
    var tmp$;
    var $receiver = this.className;
    var tmp$_0;
    var cls = Kotlin.isType(tmp$ = split(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString(), [' ']), MutableList) ? tmp$ : throwCCE();
    removeAll(cls, v);
    this.className = joinToString(cls, ' ');
  };
  Object.defineProperty(El.prototype, 'html', {
    get: function () {
      return this.el.innerHTML;
    },
    set: function (v) {
      this.el.innerHTML = v;
    }
  });
  El.prototype.beforeHtml_61zpoe$ = function (v) {
    this.el.innerHTML = v + this.el.innerHTML;
  };
  El.prototype.afterHtml_61zpoe$ = function (v) {
    this.el.innerHTML = this.el.innerHTML + v;
  };
  El.prototype.submit = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLFormElement) ? tmp$ : null) != null) {
      tmp$_0.submit();
      tmp$_1 = Unit;
    }
     else
      tmp$_1 = null;
    return tmp$_1;
  };
  El.prototype.focus = function () {
    this.el.focus();
  };
  El.prototype.blur = function () {
    this.el.blur();
  };
  Object.defineProperty(El.prototype, 'checked', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.checked : null) != null ? tmp$_1 : false;
    },
    set: function (v) {
      var tmp$, tmp$_0;
      if ((tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLInputElement) ? tmp$ : null) != null) {
        tmp$_0.checked = v;
      }
    }
  });
  Object.defineProperty(El.prototype, 'selected', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLSelectElement) ? tmp$ : null) != null ? tmp$_0.selectedIndex !== -1 : null) != null ? tmp$_1 : false;
    },
    set: function (v) {
      var tmp$, tmp$_0;
      if (!v) {
        if ((tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLSelectElement) ? tmp$ : null) != null) {
          tmp$_0.selectedIndex = -1;
        }
      }
    }
  });
  Object.defineProperty(El.prototype, 'style', {
    get: function () {
      return this.el.style.cssText;
    },
    set: function (v) {
      var tmp$;
      tmp$ = split(v, [';']).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver = split(element, [':']);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1;
          destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : throwCCE()).toString());
        }
        var v_0 = destination;
        this.set_bm4g0d$(v_0.get_za3lpa$(0), v_0.get_za3lpa$(1));
      }
    }
  });
  Object.defineProperty(El.prototype, 'unselect', {
    get: function () {
      return false;
    },
    set: function (v) {
      if (v) {
        this.set_bm4g0d$('user-select', 'none');
        this.set_bm4g0d$('touch-callout', 'none');
        this.el.setAttribute('unselectable', 'on');
        this.el.setAttribute('onselectstart', 'return false');
      }
       else {
        this.set_bm4g0d$('user-select', 'null');
        this.set_bm4g0d$('touch-callout', 'null');
        this.el.removeAttribute('unselectable');
        this.el.removeAttribute('onselectstart');
      }
    }
  });
  Object.defineProperty(El.prototype, 'value', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      return (tmp$_4 = (tmp$_3 = (tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLSelectElement) ? tmp$ : null) != null ? tmp$_0.value : null) != null ? tmp$_3 : (tmp$_2 = Kotlin.isType(tmp$_1 = this.el, HTMLInputElement) ? tmp$_1 : null) != null ? tmp$_2.value : null) != null ? tmp$_4 : '';
    },
    set: function (v) {
      var tmp$;
      if (v != null) {
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        this.el.setAttribute('value', v);
        var tmp$_5;
        if ((tmp$_1 = Kotlin.isType(tmp$_0 = this.el, HTMLSelectElement) ? tmp$_0 : null) != null) {
          tmp$_1.value = v;
          tmp$_5 = Unit;
        }
         else
          tmp$_5 = null;
        var tmp$_6;
        if ((tmp$_4 = tmp$_5) != null)
          tmp$_6 = tmp$_4;
        else {
          var tmp$_7;
          if ((tmp$_3 = Kotlin.isType(tmp$_2 = this.el, HTMLInputElement) ? tmp$_2 : null) != null) {
            tmp$_3.value = v;
            tmp$_7 = Unit;
          }
           else
            tmp$_7 = null;
          tmp$_6 = tmp$_7;
        }
        tmp$ = tmp$_6;
      }
       else
        tmp$ = null;
      if (tmp$ == null) {
        var tmp$_8, tmp$_9, tmp$_10, tmp$_11;
        this.el.removeAttribute('value');
        var tmp$_12;
        if ((tmp$_9 = Kotlin.isType(tmp$_8 = this.el, HTMLSelectElement) ? tmp$_8 : null) != null) {
          tmp$_9.value = '';
          tmp$_12 = Unit;
        }
         else
          tmp$_12 = null;
        if (tmp$_12 == null) {
          if ((tmp$_11 = Kotlin.isType(tmp$_10 = this.el, HTMLInputElement) ? tmp$_10 : null) != null) {
            tmp$_11.value = '';
          }
        }
      }
    }
  });
  El.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'El',
    interfaces: []
  };
  var getChildAt = defineInlineFunction('lib.chela.kotlinJS.dom.getChildAt_r4ncir$', wrapFunction(function () {
    var HTMLElement_0 = HTMLElement;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver, idx) {
      var tmp$;
      var t = $receiver.firstElementChild;
      var i = 0;
      while (t != null) {
        if (i === idx)
          return Kotlin.isType(tmp$ = t, HTMLElement_0) ? tmp$ : throwCCE();
        t = t.nextElementSibling;
        i = i + 1 | 0;
      }
      return null;
    };
  }));
  function ChI18n() {
    ChI18n_instance = this;
    this.lang_0 = '';
    this.items_0 = LinkedHashMap_init();
  }
  ChI18n.prototype.invoke_61zpoe$ = function (ln) {
    this.lang_0 = ln;
  };
  ChI18n.prototype.invoke = function () {
    return this.lang_0;
  };
  ChI18n.prototype.add_vz5sv5$ = function (k, res) {
    this.items_0.put_xwzc9p$(k, res);
  };
  ChI18n.prototype.remove_61zpoe$ = function (k) {
    this.items_0.remove_11rb$(k);
  };
  ChI18n.prototype.get_61zpoe$ = function (k) {
    var $receiver = split('i18n.' + k, ['.']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    return this.get_mhpeer$(destination);
  };
  ChI18n.prototype.get_mhpeer$ = function (k) {
    var tmp$, tmp$_0, tmp$_1;
    if (k.size < 3)
      return 'no data:' + k;
    var key = k.get_za3lpa$(1);
    var subKey = k.get_za3lpa$(2);
    tmp$ = this.items_0.get_11rb$(key);
    if (tmp$ == null) {
      return 'no data:' + key;
    }
    var i = tmp$;
    var ln = !isBlank(i.isOne) ? i.isOne : k.size === 4 ? k.get_za3lpa$(3) : this.lang_0;
    if (isBlank(ln))
      return 'no language';
    return (tmp$_1 = (tmp$_0 = i.data.get_11rb$(ln)) != null ? tmp$_0.get_11rb$(subKey) : null) != null ? tmp$_1 : 'no data:' + k;
  };
  ChI18n.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChI18n',
    interfaces: []
  };
  var ChI18n_instance = null;
  function ChI18n_getInstance() {
    if (ChI18n_instance === null) {
      new ChI18n();
    }
    return ChI18n_instance;
  }
  var PI;
  var HPI;
  function ChItem() {
    this.rate = 0.0;
    this.current = 0.0;
    this.start_8be2vx$ = 0.0;
    this.end_8be2vx$ = 0.0;
    this.term_8be2vx$ = 0.0;
    this.isTurn_8be2vx$ = false;
    this.loop_8be2vx$ = 1;
    this.isPaused_8be2vx$ = false;
    this.isInfinity_8be2vx$ = false;
    this.block_8be2vx$ = ItemDSL$Companion_getInstance().empty;
    this.ended_8be2vx$ = ItemDSL$Companion_getInstance().empty;
    this.next_8be2vx$ = null;
    this.isStop_8be2vx$ = false;
    this.pauseStart_0 = 0.0;
  }
  ChItem.prototype.stop = function () {
    this.isStop_8be2vx$ = true;
  };
  ChItem.prototype.pause = function () {
    if (this.isPaused_8be2vx$)
      return;
    this.isPaused_8be2vx$ = true;
    this.pauseStart_0 = window.performance.now();
  };
  ChItem.prototype.resume = function () {
    if (!this.isPaused_8be2vx$)
      return;
    this.isPaused_8be2vx$ = false;
    this.pauseStart_0 = window.performance.now() - this.pauseStart_0;
    this.start_8be2vx$ += this.pauseStart_0;
    this.end_8be2vx$ += this.pauseStart_0;
    this.pauseStart_0 = 0.0;
  };
  ChItem.prototype.linear_lu1900$ = function (from, to) {
    return from + this.rate * (to - from);
  };
  ChItem.prototype.backIn_lu1900$ = function (from, to) {
    var b = to - from;
    return b * this.rate * this.rate * (2.70158 * this.rate - 1.70158) + from;
  };
  ChItem.prototype.backOut_lu1900$ = function (from, to) {
    var a = this.rate - 1;
    var b = to - from;
    return b * (a * a * (2.70158 * a + 1.70158) + 1) + from;
  };
  ChItem.prototype.backInOut_lu1900$ = function (from, to) {
    var a = this.rate * 2;
    var b = to - from;
    if (1 > a)
      return 0.5 * b * a * a * (3.5949095 * a - 2.5949095) + from;
    else {
      a -= 2.0;
      return 0.5 * b * (a * a * (3.70158 * a + 2.70158) + 2) + from;
    }
  };
  var Math_0 = Math;
  ChItem.prototype.sineIn_lu1900$ = function (from, to) {
    var b = to - from;
    var tmp$ = -b;
    var x = this.rate * HPI;
    return tmp$ * Math_0.cos(x) + b + from;
  };
  ChItem.prototype.sineOut_lu1900$ = function (from, to) {
    var tmp$ = to - from;
    var x = this.rate * HPI;
    return tmp$ * Math_0.sin(x) + from;
  };
  ChItem.prototype.sineInOut_lu1900$ = function (from, to) {
    var tmp$ = 0.5 * -(to - from);
    var x = PI * this.rate;
    return tmp$ * (Math_0.cos(x) - 1) + from;
  };
  ChItem.prototype.circleIn_lu1900$ = function (from, to) {
    var tmp$ = -(to - from);
    var x = 1 - this.rate * this.rate;
    return tmp$ * (Math_0.sqrt(x) - 1) + from;
  };
  ChItem.prototype.circleOut_lu1900$ = function (from, to) {
    var a = this.rate - 1;
    var tmp$ = to - from;
    var x = 1 - a * a;
    return tmp$ * Math_0.sqrt(x) + from;
  };
  ChItem.prototype.circleInOut_lu1900$ = function (from, to) {
    var a = this.rate * 2;
    var b = to - from;
    if (1 > a) {
      var tmp$ = 0.5 * -b;
      var x = 1 - a * a;
      return tmp$ * (Math_0.sqrt(x) - 1) + from;
    }
     else {
      a -= 2.0;
      var tmp$_0 = 0.5 * b;
      var x_0 = 1 - a * a;
      return tmp$_0 * (Math_0.sqrt(x_0) + 1) + from;
    }
  };
  ChItem.prototype.quadraticIn_lu1900$ = function (from, to) {
    return (to - from) * this.rate * this.rate + from;
  };
  ChItem.prototype.quadraticOut_lu1900$ = function (from, to) {
    return -(to - from) * this.rate * (this.rate - 2) + from;
  };
  ChItem.prototype.bounceOut_lu1900$ = function (from, to) {
    var a = this.rate;
    var b = to - from;
    if (0.363636 > a)
      return 7.5625 * b * a * a + from;
    else if (0.727272 > a) {
      a -= 0.545454;
      return b * (7.5625 * a * a + 0.75) + from;
    }
     else if (0.90909 > a) {
      a -= 0.818181;
      return b * (7.5625 * a * a + 0.9375) + from;
    }
     else {
      a -= 0.95454;
      return b * (7.5625 * a * a + 0.984375) + from;
    }
  };
  ChItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChItem',
    interfaces: []
  };
  function ChLooper() {
    this.f_0 = getCallableRef('loop', function ($receiver, c) {
      return $receiver.loop_14dthe$(c), Unit;
    }.bind(null, this));
    window.requestAnimationFrame(this.f_0);
    this.sequence_0 = new Sequence(this);
    this.fps_0 = 0.0;
    this.previus_0 = 0.0;
    this.pauseStart_0 = 0.0;
    this.pausedTime_0 = 0.0;
    this.items_0 = ArrayList_init_0();
    this.remove_0 = ArrayList_init_0();
    this.add_0 = ArrayList_init_0();
    this.itemPool_0 = ArrayList_init_0();
  }
  ChLooper.prototype.invoke_uxs1ix$ = function (block) {
    var $receiver = new ItemDSL();
    block($receiver);
    var item = this.getItem_q3shh7$($receiver);
    item.start_8be2vx$ = item.start_8be2vx$ + window.performance.now();
    item.end_8be2vx$ = item.term_8be2vx$ === -1.0 ? -1.0 : item.start_8be2vx$ + item.term_8be2vx$;
    this.items_0.add_11rb$(item);
    this.sequence_0.item_8be2vx$ = item;
    return this.sequence_0;
  };
  ChLooper.prototype.getItem_q3shh7$ = function (i) {
    var tmp$;
    var $receiver = (tmp$ = _shift(this.itemPool_0)) != null ? tmp$ : new ChItem();
    $receiver.term_8be2vx$ = i.time;
    $receiver.start_8be2vx$ = i.delay;
    $receiver.loop_8be2vx$ = i.loop;
    $receiver.block_8be2vx$ = i.block;
    $receiver.ended_8be2vx$ = i.ended;
    $receiver.isInfinity_8be2vx$ = i.isInfinity;
    $receiver.next_8be2vx$ = null;
    return $receiver;
  };
  var removeAll_0 = Kotlin.kotlin.collections.removeAll_ipc267$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  ChLooper.prototype.loop_14dthe$ = function (c) {
    var tmp$, tmp$_0, tmp$_1;
    var gap = c - this.previus_0;
    if (gap > 0.0)
      this.fps_0 = 1000.0 / gap;
    this.previus_0 = c;
    if (this.items_0.isEmpty()) {
      window.requestAnimationFrame(this.f_0);
      return;
    }
    this.remove_0.clear();
    this.add_0.clear();
    var i = 0;
    while (i < this.items_0.size) {
      var item = this.items_0.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$));
      if (item.isPaused_8be2vx$ || item.start_8be2vx$ > c)
        break;
      item.isTurn_8be2vx$ = false;
      var isEnd = false;
      if (!item.isInfinity_8be2vx$ && item.end_8be2vx$ <= c) {
        item.loop_8be2vx$ = item.loop_8be2vx$ - 1 | 0;
        if (item.loop_8be2vx$ === 0) {
          isEnd = true;
          tmp$_0 = 1.0;
        }
         else {
          item.isTurn_8be2vx$ = true;
          item.start_8be2vx$ = c;
          item.end_8be2vx$ = c + item.term_8be2vx$;
          tmp$_0 = 0.0;
        }
      }
       else
        tmp$_0 = item.term_8be2vx$ === 0.0 ? 0.0 : (c - item.start_8be2vx$) / item.term_8be2vx$;
      item.rate = tmp$_0;
      item.current = c;
      item.isStop_8be2vx$ = false;
      item.block_8be2vx$(item);
      if (item.isStop_8be2vx$ || isEnd) {
        item.ended_8be2vx$(item);
        if ((tmp$_1 = item.next_8be2vx$) != null) {
          tmp$_1.start_8be2vx$ = tmp$_1.start_8be2vx$ + c;
          tmp$_1.end_8be2vx$ = tmp$_1.start_8be2vx$ + tmp$_1.term_8be2vx$;
          this.add_0.add_11rb$(tmp$_1);
        }
        this.remove_0.add_11rb$(item);
      }
    }
    var tmp$_2 = !this.remove_0.isEmpty();
    if (!tmp$_2) {
      tmp$_2 = !this.add_0.isEmpty();
    }
    if (tmp$_2) {
      if (!this.remove_0.isEmpty()) {
        removeAll_0(this.items_0, this.remove_0);
        addAll(this.itemPool_0, this.remove_0);
      }
      if (!this.add_0.isEmpty()) {
        addAll(this.items_0, this.add_0);
      }
    }
    window.requestAnimationFrame(this.f_0);
  };
  ChLooper.prototype.pause = function () {
    if (this.pauseStart_0 !== 0.0)
      this.pauseStart_0 = window.performance.now();
  };
  ChLooper.prototype.resume = function () {
    if (this.pauseStart_0 !== 0.0) {
      this.pausedTime_0 += window.performance.now() - this.pauseStart_0;
      this.pauseStart_0 = 0.0;
    }
  };
  ChLooper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChLooper',
    interfaces: []
  };
  function ItemDSL() {
    ItemDSL$Companion_getInstance();
    this.time = -1;
    this.delay = 0;
    this.loop = 1;
    this.block = ItemDSL$Companion_getInstance().empty;
    this.ended = ItemDSL$Companion_getInstance().empty;
    this.isInfinity = false;
  }
  function ItemDSL$Companion() {
    ItemDSL$Companion_instance = this;
    this.empty = ItemDSL$Companion$empty$lambda;
  }
  function ItemDSL$Companion$empty$lambda(it) {
    return Unit;
  }
  ItemDSL$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ItemDSL$Companion_instance = null;
  function ItemDSL$Companion_getInstance() {
    if (ItemDSL$Companion_instance === null) {
      new ItemDSL$Companion();
    }
    return ItemDSL$Companion_instance;
  }
  ItemDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemDSL',
    interfaces: []
  };
  function Sequence(looper) {
    this.looper_0 = looper;
    this.item_8be2vx$_c7415s$_0 = this.item_8be2vx$_c7415s$_0;
  }
  Object.defineProperty(Sequence.prototype, 'item_8be2vx$', {
    get: function () {
      if (this.item_8be2vx$_c7415s$_0 == null)
        return throwUPAE('item');
      return this.item_8be2vx$_c7415s$_0;
    },
    set: function (item) {
      this.item_8be2vx$_c7415s$_0 = item;
    }
  });
  Sequence.prototype.next_uxs1ix$ = function (block) {
    var tmp$ = this.looper_0;
    var $receiver = new ItemDSL();
    block($receiver);
    var i = tmp$.getItem_q3shh7$($receiver);
    this.item_8be2vx$.next_8be2vx$ = i;
    this.item_8be2vx$ = i;
    return this;
  };
  Sequence.prototype.plus_uxs1ix$ = function (block) {
    var tmp$ = this.looper_0;
    var $receiver = new ItemDSL();
    block($receiver);
    var i = tmp$.getItem_q3shh7$($receiver);
    this.item_8be2vx$.next_8be2vx$ = i;
    this.item_8be2vx$ = i;
    return this;
  };
  Sequence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sequence',
    interfaces: []
  };
  function ChModel() {
    ChModel_instance = this;
    this.repo_8be2vx$ = HashMap_init();
  }
  ChModel.prototype.get_61zpoe$ = function (v) {
    var $receiver = split(v, ['.']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    return this.get_mhpeer$(destination);
  };
  ChModel.prototype.get_mhpeer$ = function (v) {
    var tmp$;
    if (v.isEmpty())
      throw Exception_init('invalid list size == 0');
    if (equals(v.get_za3lpa$(0), 'i18n'))
      return ChI18n_getInstance().get_mhpeer$(v);
    var tmp$_0;
    if ((tmp$ = this.repo_8be2vx$.get_11rb$(v.get_za3lpa$(0))) != null) {
      return this.find_0(v, tmp$);
    }
     else
      tmp$_0 = null;
    if (tmp$_0 == null) {
      throw Exception_init('invalid key:' + v.get_za3lpa$(0));
    }
  };
  ChModel.prototype.record_2yg0aa$ = function (v, record) {
    if (v.isEmpty())
      throw Exception_init('invalid list size == 0');
    return this.find_0(v, record);
  };
  ChModel.prototype.find_0 = function (v, it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var model = it;
    var list = null;
    var r = 0;
    tmp$ = v.size;
    for (var idx = 1; idx < tmp$; idx++) {
      var k = v.get_za3lpa$(idx);
      if (k.charCodeAt(0) === 64) {
        k = k.substring(1);
      }
      tmp$_1 = (tmp$_0 = model != null ? model.get_61zpoe$(k) : null) != null ? tmp$_0 : list != null ? list.get_za3lpa$(toInt(k)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('invalid key:' + k + ' in ' + v);
      }
      r = tmp$_1;
      tmp$_2 = r;
      if (Kotlin.isType(tmp$_2, Model)) {
        model = r;
        list = null;
      }
       else if (Kotlin.isType(tmp$_2, List)) {
        model = null;
        list = Kotlin.isType(tmp$_3 = r, MutableList) ? tmp$_3 : throwCCE();
      }
    }
    return r;
  };
  ChModel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChModel',
    interfaces: []
  };
  var ChModel_instance = null;
  function ChModel_getInstance() {
    if (ChModel_instance === null) {
      new ChModel();
    }
    return ChModel_instance;
  }
  function Model(_isRegister) {
    Model$Companion_getInstance();
    if (_isRegister === void 0)
      _isRegister = false;
    this._isRegister = _isRegister;
    var tmp$;
    if (this._isRegister) {
      var cls = Kotlin.getKClassFromExpression(this);
      if ((tmp$ = cls.simpleName) != null) {
        if (ChModel_getInstance().repo_8be2vx$.containsKey_11rb$(tmp$))
          throw Exception_init('exist key:' + tmp$);
        ChModel_getInstance().repo_8be2vx$.put_xwzc9p$(tmp$, this);
      }
    }
    this._isSet = false;
  }
  function Model$St(p, t, v, k, i) {
    if (k === void 0)
      k = '';
    if (i === void 0)
      i = 0;
    this.p = p;
    this.t = toBoxedChar(t);
    this.k = k;
    this.i = i;
    var tmp$;
    this.v_8be2vx$ = trim(Kotlin.isCharSequence(tmp$ = v) ? tmp$ : throwCCE()).toString();
  }
  Object.defineProperty(Model$St.prototype, 'key_8be2vx$', {
    get: function () {
      var key = unboxChar(this.t) === 111 ? this.k : this.i.toString();
      var P = this.p;
      while (P != null) {
        key = (unboxChar(P.t) === 111 ? P.k : P.i.toString()) + '.' + key;
        P = P.p;
      }
      return _shift_0(key);
    }
  });
  Model$St.prototype.clone_hcnr0w$ = function (p, t, v, k, i) {
    if (p === void 0)
      p = null;
    if (t === void 0)
      t = null;
    if (v === void 0)
      v = null;
    if (k === void 0)
      k = null;
    if (i === void 0)
      i = null;
    return new Model$St(p != null ? p : this.p, t != null ? t : unboxChar(this.t), v != null ? v : this.v_8be2vx$, k != null ? k : this.k, i != null ? i : this.i);
  };
  Model$St.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'St',
    interfaces: []
  };
  function Model$Companion() {
    Model$Companion_instance = this;
    this.OBJECT = new Model$Companion$OBJECT$ObjectLiteral();
    this.ARRAY = new Model$Companion$ARRAY$ObjectLiteral();
  }
  function Model$Companion$OBJECT$ObjectLiteral() {
  }
  Model$Companion$OBJECT$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Model$Companion$ARRAY$ObjectLiteral() {
  }
  Model$Companion$ARRAY$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Model$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Model$Companion_instance = null;
  function Model$Companion_getInstance() {
    if (Model$Companion_instance === null) {
      new Model$Companion();
    }
    return Model$Companion_instance;
  }
  Model.prototype.get_61zpoe$ = function (k) {
    var tmp$;
    return (tmp$ = this[k]) != null ? tmp$ : Ch_getInstance().NONE;
  };
  function Model$set$lambda(closure$v, closure$obj, closure$k) {
    return function () {
      closure$obj[closure$k] = closure$v;
      return true;
    };
  }
  Model.prototype.set_bm4g0d$ = function (k, v) {
    var tmp$, tmp$_0, tmp$_1;
    var obj = this;
    return (tmp$_1 = typeof (tmp$_0 = (tmp$ = obj[k]) != null ? tmp$.let(Model$set$lambda(v, obj, k)) : null) === 'boolean' ? tmp$_0 : null) != null ? tmp$_1 : false;
  };
  Model.prototype.viewmodel_kwv3np$ = function (k, v) {
    throw Exception_init('override');
  };
  Model.prototype.record_kwv3np$ = function (k, v) {
    throw Exception_init('override');
  };
  Model.prototype.fromJson_61zpoe$ = function (v) {
    this._isSet = true;
    if (isBlank(v))
      return;
    var tmp$;
    var $receiver = mutableListOf([new Model$St(null, 111, trim(Kotlin.isCharSequence(tmp$ = v) ? tmp$ : throwCCE()).toString())]);
    loop_label: while (true) {
      var tmp$_0 = !$receiver.isEmpty();
      if (tmp$_0) {
        var c = $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
        var block$result;
        block$break: do {
          var tmp$_1, tmp$_2;
          switch (c.v_8be2vx$.charCodeAt(0)) {
            case 44:
              var element = c.clone_hcnr0w$(void 0, void 0, _shift_0(c.v_8be2vx$), '', c.i + 1 | 0);
              $receiver.add_11rb$(element);
              break;
            case 123:
              var element_0 = new Model$St(c, 111, _shift_0(c.v_8be2vx$));
              $receiver.add_11rb$(element_0);
              this.set_bm4g0d$(unboxChar(c.t) === 111 ? c.k : c.i.toString(), Model$Companion_getInstance().OBJECT);
              break;
            case 91:
              var element_1 = new Model$St(c, 97, _shift_0(c.v_8be2vx$));
              $receiver.add_11rb$(element_1);
              this.set_bm4g0d$(unboxChar(c.t) === 111 ? c.k : c.i.toString(), Model$Companion_getInstance().ARRAY);
              break;
            case 125:
            case 93:
              var $receiver_0 = _shift_0(c.v_8be2vx$);
              var tmp$_3;
              var v_0 = trim(Kotlin.isCharSequence(tmp$_3 = $receiver_0) ? tmp$_3 : throwCCE()).toString();
              if (!isBlank(v_0)) {
                if (c.p != null) {
                  var element_2 = c.p.clone_hcnr0w$(void 0, void 0, v_0);
                  $receiver.add_11rb$(element_2);
                }
              }

              break;
            default:var tmp$_4;
              if ((tmp$_1 = reK_getInstance().match_y4putb$(c.v_8be2vx$)) != null) {
                var element_3 = c.clone_hcnr0w$(void 0, void 0, reK_getInstance().cut_y4putb$(c.v_8be2vx$), tmp$_1.groupValues.get_za3lpa$(1) + tmp$_1.groupValues.get_za3lpa$(2) + tmp$_1.groupValues.get_za3lpa$(3));
                $receiver.add_11rb$(element_3);
                tmp$_4 = Unit;
              }
               else
                tmp$_4 = null;
              if (tmp$_4 == null) {
                if ((tmp$_2 = reV_getInstance().match_y4putb$(c.v_8be2vx$)) != null) {
                  var tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18;
                  var key = c.key_8be2vx$;
                  var isOk = (tmp$_18 = (tmp$_17 = (tmp$_15 = (tmp$_13 = (tmp$_11 = (tmp$_9 = (tmp$_7 = (tmp$_5 = tmp$_2.groups.get_za3lpa$(1)) != null ? this.set_bm4g0d$(key, tmp$_5.value) : null) != null ? tmp$_7 : (tmp$_6 = tmp$_2.groups.get_za3lpa$(2)) != null ? this.set_bm4g0d$(key, tmp$_6.value) : null) != null ? tmp$_9 : (tmp$_8 = tmp$_2.groups.get_za3lpa$(3)) != null ? this.set_bm4g0d$(key, reV_getInstance().group3_j9x9u$(tmp$_8)) : null) != null ? tmp$_11 : (tmp$_10 = tmp$_2.groups.get_za3lpa$(4)) != null ? this.set_bm4g0d$(key, reV_getInstance().group4_j9x9u$(tmp$_10)) : null) != null ? tmp$_13 : (tmp$_12 = tmp$_2.groups.get_za3lpa$(5)) != null ? this.set_bm4g0d$(key, toBoolean(tmp$_12.value)) : null) != null ? tmp$_15 : (tmp$_14 = tmp$_2.groups.get_za3lpa$(6)) != null ? this.viewmodel_kwv3np$(key, split(tmp$_14.value, ['.'])) : null) != null ? tmp$_17 : (tmp$_16 = tmp$_2.groups.get_za3lpa$(7)) != null ? this.record_kwv3np$(key, split(tmp$_16.value, ['.'])) : null) != null ? tmp$_18 : true;
                  var $receiver_1 = reV_getInstance().cut_y4putb$(c.v_8be2vx$);
                  var tmp$_19;
                  var v_1 = trim(Kotlin.isCharSequence(tmp$_19 = $receiver_1) ? tmp$_19 : throwCCE()).toString();
                  if (!isBlank(v_1)) {
                    var element_4 = c.clone_hcnr0w$(void 0, void 0, v_1);
                    $receiver.add_11rb$(element_4);
                  }
                  if (!isOk) {
                    block$result = false;
                    break block$break;
                  }
                }
              }

              break;
          }
          block$result = true;
        }
         while (false);
        tmp$_0 = block$result;
      }
      if (!tmp$_0)
        break loop_label;
    }
  };
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function ChHttp() {
    ChHttp$Companion_getInstance();
    this.extra = LinkedHashMap_init();
  }
  function ChHttp$Companion() {
    ChHttp$Companion_instance = this;
    this.EXTRA_JSON = 'json';
    this.EXTRA_REQUEST = 'request';
  }
  ChHttp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChHttp$Companion_instance = null;
  function ChHttp$Companion_getInstance() {
    if (ChHttp$Companion_instance === null) {
      new ChHttp$Companion();
    }
    return ChHttp$Companion_instance;
  }
  ChHttp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChHttp',
    interfaces: []
  };
  function ChFetch(m, url) {
    ChHttp.call(this);
    this.url_0 = url;
    var o = {};
    o.method = m;
    o.header = {};
    o.header['Cache-Control'] = 'no-cache';
    o.body = null;
    this.init_0 = o;
    this.form_0 = null;
    this.isLock_0 = '';
    this.retry_0 = 5;
  }
  ChFetch.prototype.header_puj7f4$ = function (key, value) {
    this.init_0.header[key] = value;
    return this;
  };
  ChFetch.prototype._form_0 = function () {
    if (!equals(this.isLock_0, '') || !equals(this.isLock_0, 'form'))
      throw Kotlin.newThrowable('err');
    this.isLock_0 = 'form';
    if (this.form_0 == null) {
      this.form_0 = LinkedHashMap_init();
      this.init_0.body = this.form_0;
    }
  };
  ChFetch.prototype.form_puj7f4$ = function (key, value) {
    var tmp$;
    this._form_0();
    this.init_0.body.set(key, value);
    if ((tmp$ = this.form_0) != null) {
      tmp$.put_xwzc9p$(key, value);
    }
    return this;
  };
  ChFetch.prototype.file_ibi9k9$ = function (key, filename, mine, file) {
    this._form_0();
    this.init_0.body.set(key, file, filename);
    return this;
  };
  ChFetch.prototype.json_61zpoe$ = function (json) {
    if (!equals(this.isLock_0, ''))
      throw Kotlin.newThrowable('err');
    this.isLock_0 = 'json';
    this.init_0.body = json;
    return this;
  };
  ChFetch.prototype.body_61zpoe$ = function (body) {
    if (!equals(this.isLock_0, ''))
      throw Kotlin.newThrowable('err');
    this.isLock_0 = 'body';
    this.init_0.body = body;
    return this;
  };
  ChFetch.prototype.blobBody_za3rmp$ = function (body) {
    if (!equals(this.isLock_0, ''))
      throw Kotlin.newThrowable('err');
    this.isLock_0 = 'blob';
    this.init_0.body = body;
    return this;
  };
  ChFetch.prototype.send_gs9zdb$ = function (block) {
    var tmp$;
    var i = lastIndexOf(this.url_0, 35);
    if (i !== -1) {
      this.url_0 = this.url_0.substring(0, i);
    }
    if (this.init_0.method == 'GET' && equals(this.isLock_0, 'form')) {
      if ((tmp$ = this.form_0) != null) {
        var tmp$_0 = lastIndexOf(this.url_0, 63) === -1 ? '?' : '&';
        var destination = ArrayList_init(tmp$.size);
        var tmp$_1;
        tmp$_1 = tmp$.entries.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          var tmp$_2 = destination.add_11rb$;
          var k = item.key;
          var v = item.value;
          tmp$_2.call(destination, ChJS_getInstance().encodeURIComponent_61zpoe$(k) + '=' + ChJS_getInstance().encodeURIComponent_61zpoe$(v));
        }
        this.url_0 += tmp$_0 + joinToString(destination, '&');
      }
    }
    if (this.init_0.method == 'GET')
      this.init_0.header['Content-Type'] = 'text/plain; charset=utf-8';
    else if (this.form_0 == null) {
      switch (this.isLock_0) {
        case 'json':
          this.init_0.header['Content-Type'] = 'application/json; charset=utf-8';
          break;
        case 'body':
          this.init_0.header['Content-Type'] = 'application/text; charset=utf-8';
          break;
        case 'blob':
          this.init_0.header['Content-Type'] = 'application/octet-stream; charset=utf-8';
          break;
      }
    }
    this.run_0(block);
  };
  function ChFetch$run$lambda$lambda(closure$r) {
    return function () {
      closure$r(Kotlin.newThrowable('timeout'));
      return Unit;
    };
  }
  function ChFetch$run$lambda(closure$id) {
    return function (f, r) {
      closure$id.v = window.setTimeout(ChFetch$run$lambda$lambda(r), 5000);
      return Unit;
    };
  }
  function ChFetch$run$lambda_0(closure$id, closure$block) {
    return function (it) {
      window.clearTimeout(closure$id.v);
      if (!it.ok)
        throw Kotlin.newThrowable('not ok');
      closure$block(new ChResponse(it));
      return Unit;
    };
  }
  function ChFetch$run$lambda_1(this$ChFetch, closure$block) {
    return function (it) {
      var tmp$;
      if ((tmp$ = this$ChFetch.retry_0, this$ChFetch.retry_0 = tmp$ - 1 | 0, tmp$) > 1)
        this$ChFetch.run_0(closure$block);
      else
        closure$block(new ChResponse(null, it.message));
      return Unit;
    };
  }
  ChFetch.prototype.run_0 = function (block) {
    var id = {v: -1};
    Promise.race([window.fetch(new Request(this.url_0, this.init_0)), new Promise(ChFetch$run$lambda(id))]).then(ChFetch$run$lambda_0(id, block)).catch(ChFetch$run$lambda_1(this, block));
  };
  ChFetch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChFetch',
    interfaces: [ChHttp]
  };
  function ChNet() {
    ChNet_instance = this;
    this.apis_0 = LinkedHashMap_init();
    this.requestItemTask_0 = LinkedHashMap_init();
    this.requestTask_0 = mutableMapOf([to('header', ChNet$requestTask$lambda), to('json', ChNet$requestTask$lambda_0), to('jsonbody', ChNet$requestTask$lambda_1), to('body', ChNet$requestTask$lambda_2)]);
    this.timestamp = LinkedHashMap_init();
    this.responseTask_0 = mutableMapOf([to('json', ChNet$responseTask$lambda), to('body', ChNet$responseTask$lambda_0)]);
  }
  ChNet.prototype.apiRequestTask_i65jrb$ = function (key, block) {
    this.requestTask_0.put_xwzc9p$(key, block);
  };
  ChNet.prototype.apiRequestItemTask_acvc8p$ = function (key, block) {
    this.requestItemTask_0.put_xwzc9p$(key, block);
  };
  ChNet.prototype.apiResponseTask_g0dwxe$ = function (key, block) {
    this.responseTask_0.put_xwzc9p$(key, block);
  };
  ChNet.prototype.get_61zpoe$ = function (k) {
    return this.apis_0.get_11rb$(k);
  };
  ChNet.prototype.add_114pkn$ = function (k, api) {
    this.apis_0.put_xwzc9p$(k, api);
  };
  ChNet.prototype.remove_61zpoe$ = function (k) {
    return this.apis_0.remove_11rb$(k);
  };
  function ChNet$api$lambda(it) {
    return it.first + ':' + it.second.toString();
  }
  function ChNet$api$lambda$lambda$loop$lambda(closure$i, closure$j, closure$loop, closure$block, closure$res) {
    return function (it) {
      if (it && closure$i.v < closure$j)
        closure$loop();
      else
        closure$block(closure$res);
      return Unit;
    };
  }
  function ChNet$api$lambda$lambda$loop(closure$list, closure$i, this$ChNet, closure$res, closure$j, closure$block, closure$key) {
    return function closure$loop() {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_1 = reParam_getInstance();
      tmp$_0 = (tmp$ = closure$i.v, closure$i.v = tmp$ + 1 | 0, tmp$);
      var tmp$_4 = tmp$_1.parse_61zpoe$(closure$list.get_za3lpa$(tmp$_0));
      var k = tmp$_4.component1()
      , arg = tmp$_4.component2();
      if (((tmp$_3 = (tmp$_2 = this$ChNet.responseTask_0.get_11rb$(k)) != null ? tmp$_2(closure$res, arg) : null) != null ? tmp$_3.then(ChNet$api$lambda$lambda$loop$lambda(closure$i, closure$j, closure$loop, closure$block, closure$res)) : null) == null) {
        var closure$key_0 = closure$key;
        var closure$res_0 = closure$res;
        var closure$block_0 = closure$block;
        closure$res_0.err = 'invalid response task:' + k + ' for ' + closure$key_0;
        closure$block_0(closure$res_0);
      }
    };
  }
  function ChNet$api$lambda_0(closure$key, closure$reqItem, closure$api, this$ChNet, closure$block) {
    return function (res) {
      var tmp$;
      res.key = closure$key;
      res.arg = closure$reqItem;
      if ((tmp$ = closure$api.responseTask) != null) {
        var this$ChNet_0 = this$ChNet;
        var closure$block_0 = closure$block;
        var closure$key_0 = closure$key;
        var i = {v: 0};
        var j = tmp$.size;
        var loop = ChNet$api$lambda$lambda$loop(tmp$, i, this$ChNet_0, res, j, closure$block_0, closure$key_0);
        loop();
      }
      return Unit;
    };
  }
  ChNet.prototype.api_cx78i$ = function (key, arg, block) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.get_61zpoe$(key);
    if (tmp$ == null) {
      return new Ch$ApiResult$fail('invalid api:' + key);
    }
    var api = tmp$;
    var reqItem = ArrayList_init_0();
    if ((tmp$_0 = api.request) != null) {
      if (arg.length !== tmp$_0.size)
        return new Ch$ApiResult$fail('invalid arg count:arg ' + arg.length + ', api ' + tmp$_0.size);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== arg.length; ++tmp$_2) {
        var element = arg[tmp$_2];
        var k = element.component1()
        , v = element.component2();
        var tmp$_3, tmp$_4, tmp$_5;
        tmp$_3 = tmp$_0.get_11rb$(k);
        if (tmp$_3 == null) {
          return new Ch$ApiResult$fail('invalid request param:' + k);
        }
        var req = tmp$_3;
        var r = {v: v};
        if ((tmp$_4 = req.rules) != null) {
          if (!isBlank(tmp$_4)) {
            r.v = Ch_getInstance().ruleset.check_bm4g0d$(req.rules, r.v);
            if (Kotlin.isType(r.v, ChRuleSet))
              return new Ch$ApiResult$fail('rule check fail ' + k + ':' + v.toString());
          }
        }
        if ((tmp$_5 = req.task) != null) {
          var tmp$_6;
          tmp$_6 = tmp$_5.iterator();
          loop_label: while (tmp$_6.hasNext()) {
            var element_0 = tmp$_6.next();
            action$break: do {
              var tmp$_7, tmp$_8;
              if (isBlank(element_0))
                break action$break;
              tmp$_7 = this.requestItemTask_0.get_11rb$(element_0);
              if (tmp$_7 == null) {
                return new Ch$ApiResult$fail('invalid request item task:' + element_0 + ' for ' + k);
              }
              var task = tmp$_7;
              tmp$_8 = task(r.v);
              if (tmp$_8 == null) {
                return new Ch$ApiResult$fail('request item task stop:' + element_0 + ' for ' + k);
              }
              r.v = tmp$_8;
            }
             while (false);
          }
        }
        var tmp$_9;
        var element_1 = to((tmp$_9 = req.name) != null ? tmp$_9 : k, r.v);
        reqItem.add_11rb$(element_1);
      }
    }
    var net = this.http_puj7f4$(api.method, api.url);
    var msg = {v: ''};
    var tmp$_10;
    if ((tmp$_1 = api.requestTask) != null) {
      var all$result;
      all$break: do {
        var tmp$_11;
        if (Kotlin.isType(tmp$_1, Collection) && tmp$_1.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_11 = tmp$_1.iterator();
        while (tmp$_11.hasNext()) {
          var element_2 = tmp$_11.next();
          var tmp$_12, tmp$_13;
          var tmp$_14 = reParam_getInstance().parse_61zpoe$(element_2);
          var k_0 = tmp$_14.component1()
          , arg_0 = tmp$_14.component2();
          var tmp$_15;
          if ((tmp$_12 = this.requestTask_0.get_11rb$(k_0)) != null) {
            var block$result;
            if (!tmp$_12(net, reqItem, arg_0)) {
              msg.v = 'request task stop:' + k_0 + ' for ' + key;
              block$result = false;
            }
             else {
              block$result = true;
            }
            tmp$_15 = block$result;
          }
           else
            tmp$_15 = null;
          var tmp$_16;
          if ((tmp$_13 = tmp$_15) != null)
            tmp$_16 = tmp$_13;
          else {
            msg.v = 'invalid request task:' + k_0 + ' for ' + key;
            tmp$_16 = false;
          }
          if (!tmp$_16) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$_10 = all$result;
    }
     else
      tmp$_10 = null;
    if (false === tmp$_10)
      return new Ch$ApiResult$fail(msg.v);
    if (Ch_getInstance().debugLevel > 0) {
      println('method-' + toString_0(api.method) + ', url-' + api.url);
      if (Ch_getInstance().debugLevel > 1)
        println('requestArg-' + joinToString_0(arg, ', ', void 0, void 0, void 0, void 0, ChNet$api$lambda));
      println('requestItem-' + reqItem);
    }
    net.send_gs9zdb$(ChNet$api$lambda_0(key, reqItem, api, this, block));
    return Ch$ApiResult$ok_getInstance();
  };
  ChNet.prototype.http_puj7f4$ = function (method, url) {
    return new ChFetch(method, url);
  };
  function ChNet$requestTask$lambda(http, arg, taskArg) {
    var cnt = {v: 0};
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = arg.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (taskArg.contains_11rb$(element.first))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      http.header_puj7f4$(element_0.first, element_0.second.toString());
      cnt.v = cnt.v + 1 | 0;
    }
    return cnt.v === taskArg.size;
  }
  function ChNet$requestTask$lambda_0(http, arg, f) {
    var $receiver = http.extra;
    var key = ChHttp$Companion_getInstance().EXTRA_JSON;
    var value = _JSON(toMap(arg));
    $receiver.put_xwzc9p$(key, value);
    return true;
  }
  function ChNet$requestTask$lambda_1(http, arg, f) {
    var tmp$, tmp$_0;
    http.json_61zpoe$((tmp$_0 = (tmp$ = http.extra.get_11rb$(ChHttp$Companion_getInstance().EXTRA_JSON)) != null ? JSON.stringify(tmp$) : null) != null ? tmp$_0 : _toJSON(toMap(arg)));
    return true;
  }
  function ChNet$requestTask$lambda_2(http, arg, taskArg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5;
    if (taskArg.size === 1) {
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_6;
        tmp$_6 = arg.iterator();
        while (tmp$_6.hasNext()) {
          var element = tmp$_6.next();
          if (equals(element.first, taskArg.get_za3lpa$(0))) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$_5 = ((tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.second : null) != null ? tmp$_0 : '').toString();
    }
     else {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_1 = http.extra.get_11rb$(ChHttp$Companion_getInstance().EXTRA_REQUEST)) != null ? tmp$_1.toString() : null) != null ? tmp$_3 : (tmp$_2 = http.extra.get_11rb$(ChHttp$Companion_getInstance().EXTRA_JSON)) != null ? JSON.stringify(tmp$_2) : null) != null ? tmp$_4 : '';
    }
    http.body_61zpoe$(tmp$_5);
    return true;
  }
  function ChNet$responseTask$lambda$lambda(closure$res) {
    return function (it) {
      if (it != null) {
        var $receiver = closure$res.extra;
        var key = ChHttp$Companion_getInstance().EXTRA_JSON;
        $receiver.put_xwzc9p$(key, it);
        closure$res.result = it;
        return true;
      }
       else
        return false;
    };
  }
  function ChNet$responseTask$lambda(res, f) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = res.json) != null ? tmp$.then(ChNet$responseTask$lambda$lambda(res)) : null) != null ? tmp$_0 : Promise.resolve(false);
  }
  function ChNet$responseTask$lambda$lambda_0(closure$res) {
    return function (it) {
      closure$res.result = it;
      return true;
    };
  }
  function ChNet$responseTask$lambda_0(res, f) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = res.body) != null ? tmp$.then(ChNet$responseTask$lambda$lambda_0(res)) : null) != null ? tmp$_0 : Promise.resolve(false);
  }
  ChNet.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChNet',
    interfaces: []
  };
  var ChNet_instance = null;
  function ChNet_getInstance() {
    if (ChNet_instance === null) {
      new ChNet();
    }
    return ChNet_instance;
  }
  function ChResponse(response, err) {
    if (err === void 0)
      err = null;
    this.response_0 = response;
    this.err = err;
    this.key = '';
    this.arg = null;
    this.extra = LinkedHashMap_init();
    this.result = '';
    this.state_llxryt$_0 = lazy(ChResponse$state$lambda(this));
    this.text_0 = null;
    this.bl_0 = null;
    this.arr_0 = null;
    this.js_0 = null;
    this.isOpened_0 = this.response_0 == null;
  }
  Object.defineProperty(ChResponse.prototype, 'state', {
    get: function () {
      return this.state_llxryt$_0.value;
    }
  });
  ChResponse.prototype.header_61zpoe$ = function (k) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.response_0) != null ? tmp$.headers : null) != null ? tmp$_0.get(k) : null;
  };
  Object.defineProperty(ChResponse.prototype, 'body', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      if (this.isOpened_0)
        return null;
      else {
        this.isOpened_0 = true;
        return (tmp$_1 = (tmp$ = this.text_0) != null ? Promise.resolve(tmp$) : null) != null ? tmp$_1 : (tmp$_0 = this.response_0) != null ? tmp$_0.text() : null;
      }
    }
  });
  Object.defineProperty(ChResponse.prototype, 'json', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      if (this.isOpened_0)
        return null;
      else {
        this.isOpened_0 = true;
        return (tmp$_1 = (tmp$ = this.js_0) != null ? Promise.resolve(tmp$) : null) != null ? tmp$_1 : (tmp$_0 = this.response_0) != null ? tmp$_0.json() : null;
      }
    }
  });
  Object.defineProperty(ChResponse.prototype, 'blob', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      if (this.isOpened_0)
        return null;
      else {
        this.isOpened_0 = true;
        return (tmp$_1 = (tmp$ = this.bl_0) != null ? Promise.resolve(tmp$) : null) != null ? tmp$_1 : (tmp$_0 = this.response_0) != null ? tmp$_0.blob() : null;
      }
    }
  });
  Object.defineProperty(ChResponse.prototype, 'array', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      if (this.isOpened_0)
        return null;
      else {
        this.isOpened_0 = true;
        return (tmp$_1 = (tmp$ = this.arr_0) != null ? Promise.resolve(tmp$) : null) != null ? tmp$_1 : (tmp$_0 = this.response_0) != null ? tmp$_0.arrayBuffer() : null;
      }
    }
  });
  function ChResponse$state$lambda(this$ChResponse) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$ChResponse.response_0) != null ? tmp$.status : null) != null ? tmp$_0 : 0;
    };
  }
  ChResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChResponse',
    interfaces: []
  };
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function ChRegex(r) {
    this.re = Regex_init(r);
  }
  ChRegex.prototype.match_y4putb$ = function (it) {
    return this.re.find_905azu$(it);
  };
  ChRegex.prototype.cut_y4putb$ = function (it) {
    return this.re.replaceFirst_x2uqeu$(it, '');
  };
  ChRegex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChRegex',
    interfaces: []
  };
  function reK() {
    reK_instance = this;
    ChRegex.call(this, '^\\s*(?:"([^":]*)"|([^:,\\s"`]+)|`([^`:]*)`)\\s*:\\s*');
  }
  reK.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reK',
    interfaces: [ChRegex]
  };
  var reK_instance = null;
  function reK_getInstance() {
    if (reK_instance === null) {
      new reK();
    }
    return reK_instance;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function reParam() {
    reParam_instance = this;
    ChRegex.call(this, '\\[(.+)\\]');
    this.emptyArg = emptyList();
  }
  reParam.prototype.parse_61zpoe$ = function (v) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.re.find_905azu$(v)) != null) {
      var $receiver = split(tmp$.groupValues.get_za3lpa$(1), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3;
        destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString());
      }
      tmp$_1 = destination;
    }
     else
      tmp$_1 = null;
    var arg = (tmp$_0 = tmp$_1) != null ? tmp$_0 : this.emptyArg;
    var $receiver_0 = this.re.replace_x2uqeu$(v, '');
    var tmp$_4;
    var k = trim(Kotlin.isCharSequence(tmp$_4 = $receiver_0) ? tmp$_4 : throwCCE()).toString().toLowerCase();
    return to(k, arg);
  };
  reParam.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reParam',
    interfaces: [ChRegex]
  };
  var reParam_instance = null;
  function reParam_getInstance() {
    if (reParam_instance === null) {
      new reParam();
    }
    return reParam_instance;
  }
  function reQueryParam() {
    reQueryParam_instance = this;
    ChRegex.call(this, '@(?:([^@:]+)(?::([^@:]+))?)@');
  }
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  reQueryParam.prototype.setItem_we18qx$ = function (v, block) {
    var $this = this.re;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = $this.find_905azu$(v);
      if (match == null) {
        replace_20wsma$result = v.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = v.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(v, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var a = foundMatch.groupValues.get_za3lpa$(2);
        block(foundMatch.groupValues.get_za3lpa$(1), a);
        tmp$.call(sb, isBlank(a) ? foundMatch.groupValues.get_za3lpa$(0) : '?');
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(v, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  };
  reQueryParam.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reQueryParam',
    interfaces: [ChRegex]
  };
  var reQueryParam_instance = null;
  function reQueryParam_getInstance() {
    if (reQueryParam_instance === null) {
      new reQueryParam();
    }
    return reQueryParam_instance;
  }
  function reStyle() {
    reStyle_instance = this;
    ChRegex.call(this, '-[a-z]');
  }
  reStyle.prototype.key_61zpoe$ = function (v) {
    var $this = this.re;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = $this.find_905azu$(v);
      if (match == null) {
        replace_20wsma$result = v.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = v.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(v, lastStart, foundMatch.range.start);
        sb.append_gw00v9$(foundMatch.groupValues.get_za3lpa$(0).toUpperCase());
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(v, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  };
  reStyle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reStyle',
    interfaces: [ChRegex]
  };
  var reStyle_instance = null;
  function reStyle_getInstance() {
    if (reStyle_instance === null) {
      new reStyle();
    }
    return reStyle_instance;
  }
  function reTrimLine() {
    reTrimLine_instance = this;
    ChRegex.call(this, '[\\n\\r]');
  }
  reTrimLine.prototype.trim_61zpoe$ = function (v) {
    var $receiver = this.re.replace_x2uqeu$(v, ' ');
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
  };
  reTrimLine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reTrimLine',
    interfaces: [ChRegex]
  };
  var reTrimLine_instance = null;
  function reTrimLine_getInstance() {
    if (reTrimLine_instance === null) {
      new reTrimLine();
    }
    return reTrimLine_instance;
  }
  function reV() {
    reV_instance = this;
    ChRegex.call(this, '^\\s*' + '(?:"((?:[^\\\\"]+|\\\\["\\\\bfnrt]|\\\\u[0-9a-fA-invoke]{4})*)"|`((?:[^`]+|\\\\[`\\\\bfnrt]|\\\\u[0-9a-fA-invoke]{4})*)`|' + '(-?(?:0|[1-9]\\d*)(?:\\.\\d+)(?:[eE][-+]?\\d+)?(?:dp|%w|%h)?)|' + '(-?(?:0|[1-9]\\d*)(?:dp|sp|%w|%h)?)|' + '(true|false)|' + '(?:\\@\\{([^}]+)\\})|' + '(?:\\$\\{([^}]+)\\}))\\s*');
  }
  reV.prototype.group3_j9x9u$ = function (it) {
    var tmp$;
    var v = it.value;
    if (endsWith(v, 'dp')) {
      var endIndex = v.length - 2 | 0;
      tmp$ = toDouble(v.substring(0, endIndex));
    }
     else if (endsWith(v, 'sp')) {
      var endIndex_0 = v.length - 2 | 0;
      tmp$ = toDouble(v.substring(0, endIndex_0));
    }
     else if (endsWith(v, '%w')) {
      var endIndex_1 = v.length - 2 | 0;
      tmp$ = toDouble(v.substring(0, endIndex_1));
    }
     else if (endsWith(v, '%h')) {
      var endIndex_2 = v.length - 2 | 0;
      tmp$ = toDouble(v.substring(0, endIndex_2));
    }
     else
      tmp$ = toDouble(v);
    return tmp$;
  };
  reV.prototype.group4_j9x9u$ = function (it) {
    var tmp$;
    var v = it.value;
    if (endsWith(v, 'dp')) {
      var endIndex = v.length - 2 | 0;
      tmp$ = Kotlin.Long.fromNumber(toDouble(v.substring(0, endIndex)));
    }
     else if (endsWith(v, 'sp')) {
      var endIndex_0 = v.length - 2 | 0;
      tmp$ = Kotlin.Long.fromNumber(toDouble(v.substring(0, endIndex_0)));
    }
     else if (endsWith(v, '%w')) {
      var endIndex_1 = v.length - 2 | 0;
      tmp$ = Kotlin.Long.fromNumber(toDouble(v.substring(0, endIndex_1)));
    }
     else if (endsWith(v, '%h')) {
      var endIndex_2 = v.length - 2 | 0;
      tmp$ = Kotlin.Long.fromNumber(toDouble(v.substring(0, endIndex_2)));
    }
     else
      tmp$ = toLong(v);
    return tmp$;
  };
  reV.prototype.num_61zpoe$ = function (it) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = reV_getInstance().match_y4putb$(it)) != null) {
      var tmp$_1, tmp$_2, tmp$_3;
      tmp$_0 = (tmp$_3 = (tmp$_1 = tmp$.groups.get_za3lpa$(3)) != null ? this.group3_j9x9u$(tmp$_1) : null) != null ? tmp$_3 : (tmp$_2 = tmp$.groups.get_za3lpa$(4)) != null ? this.group4_j9x9u$(tmp$_2) : null;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  reV.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'reV',
    interfaces: [ChRegex]
  };
  var reV_instance = null;
  function reV_getInstance() {
    if (reV_instance === null) {
      new reV();
    }
    return reV_instance;
  }
  function Api(v, base) {
    this.url = v.url != undefined ? base + v.url.toString() : '';
    this.method = v.method != undefined ? v.method.toUpperCase() : 'POST';
    var r = v.requesttask != undefined ? v.requesttask : v.requestTask != undefined ? v.requestTask : null;
    var tmp$;
    if (r != null) {
      var $receiver = split(r.toString(), ['|']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1;
        destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : throwCCE()).toString());
      }
      tmp$ = destination;
    }
     else
      tmp$ = null;
    this.requestTask = tmp$;
    var r_0 = v.responsetask != undefined ? v.responsetask : v.responseTask != undefined ? v.responseTask : null;
    var tmp$_2;
    if (r_0 != null) {
      var $receiver_0 = split(r_0.toString(), ['|']);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        var tmp$_4;
        destination_0.add_11rb$(trim(Kotlin.isCharSequence(tmp$_4 = item_0) ? tmp$_4 : throwCCE()).toString());
      }
      tmp$_2 = destination_0;
    }
     else
      tmp$_2 = null;
    this.responseTask = tmp$_2;
    var tmp$_5;
    if (v.request != undefined) {
      var d = v.request;
      var r_1 = LinkedHashMap_init();
      var $receiver_1 = ChJS_getInstance().obj.keys(d);
      var tmp$_6;
      for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
        var element = $receiver_1[tmp$_6];
        var tmp$_7, tmp$_8, tmp$_9, tmp$_10;
        var v_0 = d[element];
        tmp$_8 = typeof (tmp$_7 = v_0.name == undefined ? null : v_0.name) === 'string' ? tmp$_7 : null;
        tmp$_10 = typeof (tmp$_9 = v_0.rules == undefined ? null : v_0.rules) === 'string' ? tmp$_9 : null;
        var tmp$_11;
        if (v_0.task == undefined)
          tmp$_11 = null;
        else {
          var $receiver_2 = split(v_0.task.toString(), ['|']);
          var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
          var tmp$_12;
          tmp$_12 = $receiver_2.iterator();
          while (tmp$_12.hasNext()) {
            var item_1 = tmp$_12.next();
            var tmp$_13;
            destination_1.add_11rb$(trim(Kotlin.isCharSequence(tmp$_13 = item_1) ? tmp$_13 : throwCCE()).toString());
          }
          tmp$_11 = destination_1;
        }
        var value = new Api$ApiRequest(tmp$_8, tmp$_10, tmp$_11);
        r_1.put_xwzc9p$(element, value);
      }
      tmp$_5 = r_1;
    }
     else
      tmp$_5 = null;
    this.request = tmp$_5;
  }
  function Api$ApiRequest(name, rules, task) {
    this.name = name;
    this.rules = rules;
    this.task = task;
  }
  Api$ApiRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApiRequest',
    interfaces: []
  };
  Api.prototype.set_61zpoe$ = function (k) {
    ChNet_getInstance().add_114pkn$(k, this);
  };
  Api.prototype.remove_61zpoe$ = function (k) {
    return ChNet_getInstance().remove_61zpoe$(k);
  };
  Api.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Api',
    interfaces: []
  };
  function ChRes() {
    ChRes_instance = this;
    this.inited = false;
  }
  ChRes.prototype.res_za3rmp$ = function (v) {
    if (v.api != null) {
      var base = v.api.base != undefined ? v.api.base : '';
      var $this = ChJS_getInstance();
      var v_0 = v.api;
      var $receiver = $this.obj.keys(v_0);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        (new Api(v_0[element], base)).set_61zpoe$(element);
      }
    }
    if (v.i18n != null) {
      if (v.i18n.language != undefined)
        ChI18n_getInstance().invoke_61zpoe$(v.i18n.language);
      var $this_0 = ChJS_getInstance();
      var v_1 = v.i18n;
      var $receiver_0 = $this_0.obj.keys(v_1);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element_0 = $receiver_0[tmp$_0];
        (new I18n(v_1[element_0])).set_61zpoe$(element_0);
      }
    }
    if (v.query != null) {
      var $this_1 = ChJS_getInstance();
      var v_2 = v.query;
      var $receiver_1 = $this_1.obj.keys(v_2);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
        var element_1 = $receiver_1[tmp$_1];
        var v_3 = v_2[element_1];
        ChSql_getInstance().addQuery_puj7f4$(element_1, (typeof v_3 === 'string' ? v_3 : v_3.join(' ')).toString());
      }
    }
    if (v.db != null) {
      var $this_2 = ChJS_getInstance();
      var v_4 = v.db;
      var $receiver_2 = $this_2.obj.keys(v_4);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
        var element_2 = $receiver_2[tmp$_2];
        (new Db(v_4[element_2])).set_61zpoe$(element_2);
      }
    }
  };
  function ChRes$load$lambda$lambda$lambda(closure$db) {
    return function (v) {
      return closure$db.query_7imwf1$('removeRes', [to('id', v)]);
    };
  }
  function ChRes$load$lambda$lambda$lambda_0(closure$db, closure$k, closure$res) {
    return function (it) {
      var tmp$ = it == null;
      if (!tmp$) {
        tmp$ = it.length === 0;
      }
      if (tmp$)
        closure$db.query_7imwf1$('addRes', [to('id', closure$k), to('contents', JSON.stringify(closure$res[closure$k]))]);
      return Unit;
    };
  }
  function ChRes$load$lambda(closure$res, this$ChRes) {
    return function (db) {
      var $this = ChJS_getInstance();
      var v = closure$res;
      var $receiver = $this.obj.keys(v);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$res_0 = closure$res;
        var this$ChRes_0 = this$ChRes;
        if (equals(element, 'remove'))
          closure$res_0[element].forEach(ChRes$load$lambda$lambda$lambda(db));
        else {
          this$ChRes_0.res_za3rmp$(closure$res_0[element]);
          db.query_7imwf1$('isRes', [to('id', element)]).then(ChRes$load$lambda$lambda$lambda_0(db, element, closure$res_0));
        }
      }
      return Unit;
    };
  }
  ChRes.prototype.load_za3rmp$ = function (res) {
    ChSql_getInstance().db_61zpoe$('ch').then(ChRes$load$lambda(res, this));
  };
  function ChRes$init$lambda$lambda$lambda(this$ChRes, closure$base, closure$res) {
    return function (it) {
      var tmp$ = it == null;
      if (!tmp$) {
        tmp$ = it.length === 0;
      }
      if (!tmp$) {
        var r = {};
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== it.length; ++tmp$_0) {
          var element = it[tmp$_0];
          r[element.id] = JSON.parse(element.contents);
        }
        this$ChRes.load_za3rmp$(r);
      }
       else if (closure$base != null)
        this$ChRes.load_za3rmp$(closure$base);
      this$ChRes.inited = true;
      closure$res(0);
      return Unit;
    };
  }
  function ChRes$init$lambda$lambda(this$ChRes, closure$base, closure$res) {
    return function (it) {
      return it.query_7imwf1$('getRes', []).then(ChRes$init$lambda$lambda$lambda(this$ChRes, closure$base, closure$res));
    };
  }
  function ChRes$init$lambda(this$ChRes, closure$base) {
    return function (res, f) {
      ChSql_getInstance().addDb_60y5e1$('ch', [trimIndent('\n            create table if not exists ch_res(\n                res_rowid integer primary key autoincrement,\n                id varchar(255) not null,\n                contents text not null\n            )\n        ')]);
      ChSql_getInstance().addQuery_puj7f4$('getRes', 'select id, contents from ch_res');
      ChSql_getInstance().addQuery_puj7f4$('isRes', 'select id from ch_res where id=@id@');
      ChSql_getInstance().addQuery_puj7f4$('addRes', 'insert into ch_res(id, contents)values(@id@, @contents@)');
      ChSql_getInstance().addQuery_puj7f4$('removeRes', 'delete from ch_res where id=@id@');
      ChSql_getInstance().db_61zpoe$('ch').then(ChRes$init$lambda$lambda(this$ChRes, closure$base, res));
      return Unit;
    };
  }
  ChRes.prototype.init_za3rmp$ = function (base) {
    if (base === void 0)
      base = null;
    return new Promise(ChRes$init$lambda(this, base));
  };
  ChRes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChRes',
    interfaces: []
  };
  var ChRes_instance = null;
  function ChRes_getInstance() {
    if (ChRes_instance === null) {
      new ChRes();
    }
    return ChRes_instance;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function Db(v) {
    var destination = ArrayList_init(v.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== v.length; ++tmp$) {
      var item = v[tmp$];
      destination.add_11rb$((typeof item === 'string' ? item : item.join(' ')).toString());
    }
    this.create_0 = copyToArray(destination);
  }
  Db.prototype.set_61zpoe$ = function (k) {
    ChSql_getInstance().addDb_60y5e1$(k, this.create_0.slice());
  };
  Db.prototype.remove_61zpoe$ = function (k) {
    return ChSql_getInstance().removeDb_61zpoe$(k);
  };
  Db.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Db',
    interfaces: []
  };
  var ChJS$obj2map$lambda = wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    return function (closure$v, closure$block) {
      return function ($receiver) {
        var r = LinkedHashMap_init();
        var $receiver_0 = $receiver.obj.keys(closure$v);
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          var value = closure$block(element, closure$v[element]);
          r.put_xwzc9p$(element, value);
        }
        return r;
      };
    };
  });
  function I18n(v) {
    this.isOne = '';
    this.data = LinkedHashMap_init();
    if (v.isOne != undefined)
      this.isOne = v.isOne;
    if (v.data != undefined) {
      var $this = ChJS_getInstance();
      var v_0 = v.data;
      var $receiver = $this.obj.keys(v_0);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var tmp$_0 = this.data;
        var $this_0 = ChJS_getInstance();
        var v_1 = v.data[element];
        var r = LinkedHashMap_init();
        var $receiver_0 = $this_0.obj.keys(v_1);
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
          var element_0 = $receiver_0[tmp$_1];
          var value = v_1[element_0];
          r.put_xwzc9p$(element_0, value);
        }
        tmp$_0.put_xwzc9p$(element, r);
      }
    }
    println_0();
  }
  I18n.prototype.set_61zpoe$ = function (k) {
    ChI18n_getInstance().add_vz5sv5$(k, this);
  };
  I18n.prototype.remove_61zpoe$ = function (k) {
    ChI18n_getInstance().remove_61zpoe$(k);
  };
  I18n.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'I18n',
    interfaces: []
  };
  function ChQuery(key, body) {
    this.msg_8be2vx$ = '';
    var tmp$;
    var tmp$_0;
    var query = trim(Kotlin.isCharSequence(tmp$_0 = body) ? tmp$_0 : throwCCE()).toString();
    if (startsWith(query, 'select'))
      tmp$ = Select$Companion_getInstance().parse_y4putb$(query);
    else if (startsWith(query, 'insert'))
      tmp$ = Insert$Companion_getInstance().parse_y4putb$(query);
    else if (startsWith(query, 'delete'))
      tmp$ = Delete$Companion_getInstance().parse_y4putb$(query);
    else
      tmp$ = Select$Companion_getInstance().parse_y4putb$(query);
    if (tmp$ == null) {
      throw Kotlin.newThrowable('invalid query:' + query);
    }
    this.query_8be2vx$ = tmp$;
  }
  ChQuery.prototype.query_r56hvo$ = function (db, arg) {
    return this.query_8be2vx$.exec_xygpg9$(db, arg);
  };
  ChQuery.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChQuery',
    interfaces: []
  };
  function ChSql() {
    ChSql_instance = this;
    this.queries_0 = LinkedHashMap_init();
    this.Dbs_0 = LinkedHashMap_init();
  }
  ChSql.prototype.init_61zpoe$ = function (path) {
    if (path === void 0)
      path = 'sql.js';
    return ChJS_getInstance().addJs_61zpoe$(path);
  };
  ChSql.prototype.db_61zpoe$ = function (k) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.Dbs_0.get_11rb$(k)) != null ? tmp$.connect_8be2vx$() : null;
    if (tmp$_0 == null) {
      throw Kotlin.newThrowable('invalid db ' + k);
    }
    return tmp$_0;
  };
  ChSql.prototype.addDb_60y5e1$ = function (k, create) {
    if (this.Dbs_0.get_11rb$(k) != null)
      throw Kotlin.newThrowable('exist db:' + k);
    var $receiver = this.Dbs_0;
    var value = new DataBase(k, 1, create, '');
    $receiver.put_xwzc9p$(k, value);
  };
  ChSql.prototype.removeDb_61zpoe$ = function (k) {
    var tmp$;
    return (tmp$ = this.Dbs_0.get_11rb$(k)) != null ? (tmp$.remove(), Unit) : null;
  };
  ChSql.prototype.getQuery_61zpoe$ = function (key) {
    return this.queries_0.get_11rb$(key);
  };
  ChSql.prototype.addQuery_puj7f4$ = function (k, body) {
    if (!isBlank(k)) {
      var $receiver = this.queries_0;
      var value = new ChQuery(k, body);
      $receiver.put_xwzc9p$(k, value);
    }
  };
  ChSql.prototype.removeQuery_61zpoe$ = function (k) {
    return this.queries_0.remove_11rb$(k);
  };
  ChSql.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChSql',
    interfaces: []
  };
  var ChSql_instance = null;
  function ChSql_getInstance() {
    if (ChSql_instance === null) {
      new ChSql();
    }
    return ChSql_instance;
  }
  function DataBase(db, ver, create, upgrade) {
    DataBase$Companion_getInstance();
    if (upgrade === void 0)
      upgrade = '';
    this.db_0 = db;
    this.create_0 = create;
    this.upgrade_0 = upgrade;
    this.isCreate_8be2vx$ = false;
  }
  function DataBase$Companion() {
    DataBase$Companion_instance = this;
    this.connection_8be2vx$ = new JsStore.Instance(new Worker('js/sqlworker.js'));
    this.rCreate_0 = Regex_init('^create +table(?: +if +not +exists)? +([a-zA-Z0-9_]+) *\\(\\s*((?:\\s|\\S)+)\\)$');
    this.rColumn_0 = Regex_init(' *([a-zA-Z_]+) +([a-z0-9()]+)(?: +(?:(not null)|(primary key)|(autoincrement)|(unique)|(default += +[a-zA-Z0-9])))*');
  }
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  DataBase$Companion.prototype.create_0 = function (q) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.rCreate_0.find_905azu$(q)) != null) {
      println('create');
      var o = {};
      o.name = tmp$.groupValues.get_za3lpa$(1);
      o.columns = [];
      println('name ' + o.name.toString());
      var tmp$_2, tmp$_0_0;
      var index = 0;
      tmp$_2 = split(tmp$.groupValues.get_za3lpa$(2), [',']).iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var tmp$_3;
        if ((tmp$_3 = this.rColumn_0.find_905azu$(item)) != null) {
          var v = tmp$_3.groupValues;
          var tmp$_4 = o.columns;
          var o_0 = {};
          var tmp$_5, tmp$_6;
          var type = 'string';
          o_0.name = v.get_za3lpa$(1);
          if (startsWith(v.get_za3lpa$(2), 'num') || startsWith(v.get_za3lpa$(2), 'int')) {
            type = 'number';
            tmp$_5 = JsStore.DATA_TYPE.Number;
          }
           else if (startsWith(v.get_za3lpa$(2), 'bool')) {
            type = 'boolean';
            tmp$_5 = JsStore.DATA_TYPE.Boolean;
          }
           else
            tmp$_5 = JsStore.DATA_TYPE.String;
          o_0.dataType = tmp$_5;
          if (!equals(v.get_za3lpa$(3), ''))
            o_0.notNull = true;
          if (!equals(v.get_za3lpa$(4), ''))
            o_0.primaryKey = true;
          if (!equals(v.get_za3lpa$(5), ''))
            o_0.autoIncrement = true;
          if (!equals(v.get_za3lpa$(6), ''))
            o_0.unique = true;
          if (!equals(v.get_za3lpa$(7), '')) {
            switch (type) {
              case 'number':
                tmp$_6 = toInt_0(v.get_za3lpa$(7), 10);
                break;
              case 'boolean':
                tmp$_6 = equals(v.get_za3lpa$(7), 'true');
                break;
              default:tmp$_6 = v.get_za3lpa$(7);
                break;
            }
            o_0.default = tmp$_6;
          }
          tmp$_4[index_0] = o_0;
        }
      }
      tmp$_1 = o;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : null;
  };
  DataBase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DataBase$Companion_instance = null;
  function DataBase$Companion_getInstance() {
    if (DataBase$Companion_instance === null) {
      new DataBase$Companion();
    }
    return DataBase$Companion_instance;
  }
  function DataBase$connect$lambda$lambda$lambda(this$DataBase, closure$res) {
    return function (it) {
      println('open db');
      this$DataBase.isCreate_8be2vx$ = true;
      closure$res(this$DataBase);
      return Unit;
    };
  }
  function DataBase$connect$lambda$lambda$lambda_0(this$DataBase, closure$res) {
    return function (it) {
      println('define db - ' + it.toString());
      this$DataBase.isCreate_8be2vx$ = true;
      closure$res(this$DataBase);
      return Unit;
    };
  }
  function DataBase$connect$lambda$lambda(this$DataBase, closure$res) {
    return function (it) {
      var tmp$;
      if (it == true)
        tmp$ = ChJS_getInstance().then_xaus8m$(DataBase$Companion_getInstance().connection_8be2vx$.openDb(this$DataBase.db_0), DataBase$connect$lambda$lambda$lambda(this$DataBase, closure$res));
      else {
        var tmp$_0 = ChJS_getInstance();
        var tmp$_1 = DataBase$Companion_getInstance().connection_8be2vx$;
        var o = {};
        var this$DataBase_0 = this$DataBase;
        o.name = this$DataBase_0.db_0;
        if (!(this$DataBase_0.create_0.length === 0)) {
          o.tables = [];
          var $receiver = this$DataBase_0.create_0;
          var tmp$_2, tmp$_0_0;
          var index = 0;
          for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
            var item = $receiver[tmp$_2];
            var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
            var tmp$_3;
            var r = DataBase$Companion_getInstance().create_0(trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString());
            if (r != null)
              o.tables[index_0] = r;
          }
        }
        tmp$ = tmp$_0.then_xaus8m$(tmp$_1.createDb(o), DataBase$connect$lambda$lambda$lambda_0(this$DataBase, closure$res));
      }
      return tmp$;
    };
  }
  function DataBase$connect$lambda(this$DataBase) {
    return function (res, f) {
      if (this$DataBase.isCreate_8be2vx$)
        res(this$DataBase);
      else
        ChJS_getInstance().then_xaus8m$(DataBase$Companion_getInstance().connection_8be2vx$.isDbExist(this$DataBase.db_0), DataBase$connect$lambda$lambda(this$DataBase, res));
      return Unit;
    };
  }
  DataBase.prototype.connect_8be2vx$ = function () {
    return new Promise(DataBase$connect$lambda(this));
  };
  DataBase.prototype.remove = function () {
    this.isCreate_8be2vx$ = false;
    DataBase$Companion_getInstance().connection_8be2vx$.dropDb(this.db_0);
  };
  DataBase.prototype.query_7imwf1$ = function (k, arg) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = ChSql_getInstance().getQuery_61zpoe$(k)) != null ? tmp$.query_r56hvo$(this, arg) : null;
    if (tmp$_0 == null) {
      throw Kotlin.newThrowable('err');
    }
    return tmp$_0;
  };
  DataBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataBase',
    interfaces: []
  };
  function Delete() {
    Delete$Companion_getInstance();
    Query.call(this);
    this.table_0 = '';
    this.wSep_0 = null;
    this.wData_0 = null;
    this.wItem_0 = null;
  }
  function Delete$Companion() {
    Delete$Companion_instance = this;
    this.rDelete_0 = Regex_init('^\\s*delete\\s+from([\\s\\S]+?)\\s*$');
    this.rWhere_0 = Regex_init('\\swhere\\s+([\\s\\S]+?)\\s*$');
    this.rAndOr_0 = Regex_init('\\s(and|or)\\s');
    this.rWhereItem_0 = Regex_init("^\\s*([0-9a-zA-Z_.]+)\\s*(?:(?:(=|!=|[<>]=?)\\s*(.+))|like +'(%)?(\\S)+(%)?'|in\\s*\\(([^)]|\\s)+\\))\\s*$");
  }
  function Delete$Companion$parse$lambda$lambda(it) {
    return it.groupValues.get_za3lpa$(1);
  }
  Delete$Companion.prototype.parse_y4putb$ = function (q) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.rDelete_0.find_905azu$(q)) != null) {
      var tmp$_1;
      var remain = {v: tmp$.groupValues.get_za3lpa$(1)};
      var tmp$_2;
      if ((tmp$_1 = this.rWhere_0.find_905azu$(remain.v)) != null) {
        var $receiver = remain.v;
        remain.v = this.rWhere_0.replace_x2uqeu$($receiver, '');
        tmp$_2 = tmp$_1.groupValues.get_za3lpa$(1);
      }
       else
        tmp$_2 = null;
      var where = tmp$_2;
      var $receiver_0 = remain.v;
      var tmp$_3;
      var table = trim(Kotlin.isCharSequence(tmp$_3 = $receiver_0) ? tmp$_3 : throwCCE()).toString();
      var del = new Delete();
      del.table_0 = table;
      if (where != null) {
        del.wSep_0 = toList(map(this.rAndOr_0.findAll_905azu$(where), Delete$Companion$parse$lambda$lambda));
        var data = LinkedHashMap_init();
        del.wData_0 = data;
        var wItem = LinkedHashMap_init();
        del.wItem_0 = wItem;
        var tmp$_4;
        tmp$_4 = this.rAndOr_0.split_905azu$(where, 0).iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          var tmp$_5;
          if ((tmp$_5 = this.rWhereItem_0.find_905azu$(element)) != null) {
            var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
            var gv = tmp$_5.groupValues;
            var k = gv.get_za3lpa$(1);
            if (!equals(gv.get_za3lpa$(2), '')) {
              tmp$_7 = gv.get_za3lpa$(2);
              switch (gv.get_za3lpa$(3).charCodeAt(0)) {
                case 64:
                  var value = replace(gv.get_za3lpa$(3), '@', '');
                  data.put_xwzc9p$(k, value);
                  tmp$_6 = gv.get_za3lpa$(3);
                  break;
                case 39:
                  var $receiver_1 = gv.get_za3lpa$(3);
                  var endIndex = gv.get_za3lpa$(3).length - 1 | 0;
                  tmp$_6 = $receiver_1.substring(1, endIndex);
                  break;
                case 116:
                  tmp$_6 = true;
                  break;
                case 102:
                  tmp$_6 = false;
                  break;
                default:tmp$_6 = toDouble(gv.get_za3lpa$(3));
                  break;
              }
              tmp$_9 = to(tmp$_7, tmp$_6);
            }
             else if (!equals(gv.get_za3lpa$(5), '')) {
              if (contains(gv.get_za3lpa$(5), 64)) {
                var value_0 = replace(replace(gv.get_za3lpa$(3), '@', ''), '%', '');
                data.put_xwzc9p$(k, value_0);
              }
              var t = equals(gv.get_za3lpa$(4), '%') && equals(gv.get_za3lpa$(6), '%') ? '%like%' : equals(gv.get_za3lpa$(4), '%') ? '%like' : 'like%';
              tmp$_9 = to(t, gv.get_za3lpa$(4) + gv.get_za3lpa$(5) + gv.get_za3lpa$(6));
            }
             else {
              if (gv.get_za3lpa$(7).charCodeAt(0) === 64) {
                var value_1 = replace(gv.get_za3lpa$(7), '@', '');
                data.put_xwzc9p$(k, value_1);
                tmp$_8 = gv.get_za3lpa$(7);
              }
               else {
                var $receiver_2 = split(gv.get_za3lpa$(7), [',']);
                var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
                var tmp$_10;
                tmp$_10 = $receiver_2.iterator();
                loop_label: while (tmp$_10.hasNext()) {
                  var item = tmp$_10.next();
                  var tmp$_11 = destination.add_11rb$;
                  var transform$result;
                  transform$break: do {
                    var tmp$_12;
                    var v = trim(Kotlin.isCharSequence(tmp$_12 = item) ? tmp$_12 : throwCCE()).toString();
                    switch (v.charCodeAt(0)) {
                      case 39:
                        var endIndex_0 = v.length - 1 | 0;
                        transform$result = v.substring(1, endIndex_0);
                        break transform$break;
                      case 116:
                        transform$result = true;
                        break transform$break;
                      case 102:
                        transform$result = false;
                        break transform$break;
                      default:transform$result = toDouble(v);
                        break transform$break;
                    }
                  }
                   while (false);
                  tmp$_11.call(destination, transform$result);
                }
                tmp$_8 = destination;
              }
              tmp$_9 = to('in', tmp$_8);
            }
            var value_2 = tmp$_9;
            wItem.put_xwzc9p$(k, value_2);
          }
        }
      }
      tmp$_0 = del;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  Delete$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Delete$Companion_instance = null;
  function Delete$Companion_getInstance() {
    if (Delete$Companion_instance === null) {
      new Delete$Companion();
    }
    return Delete$Companion_instance;
  }
  function Delete$exec$lambda(it) {
    println('deleted!!');
    return null;
  }
  Delete.prototype.exec_xygpg9$ = function (db, arg) {
    var tmp$;
    var args = toMap_0(arg);
    var o = {};
    o.from = this.table_0;
    var r = o;
    if ((tmp$ = this.wItem_0) != null) {
      var tmp$_0;
      var where = {};
      r.where = where;
      var or = ((tmp$_0 = this.wSep_0) != null ? tmp$_0.contains_11rb$('or') : null) === true ? {} : null;
      if (or != null)
        where.or = or;
      var i = {v: 0};
      var tmp$_1;
      tmp$_1 = tmp$.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var k = element.key;
        var t = element.value;
        var tmp$_2, tmp$_3, tmp$_4, tmp$_5;
        var target = i.v > 0 && equals((tmp$_2 = this.wSep_0) != null ? tmp$_2.get_za3lpa$(i.v - 1 | 0) : null, 'or') ? or : where;
        var tv = t.second;
        var tmp$_6;
        if ((tmp$_4 = (tmp$_3 = this.wData_0) != null ? tmp$_3.get_11rb$(k) : null) != null) {
          var tmp$_7;
          tmp$_7 = args.get_11rb$(tmp$_4);
          if (tmp$_7 == null) {
            throw Kotlin.newThrowable('error');
          }
          tmp$_6 = tmp$_7;
        }
         else
          tmp$_6 = null;
        var v = tmp$_6;
        switch (t.first) {
          case '=':
          case 'in':
            tmp$_5 = v;
            break;
          case '>':
          case '<':
          case '!=':
          case '>=':
          case '<=':
            var o_0 = {};
            var o_1 = o_0;
            o_1[t.first] = v != null ? v : tv;
            tmp$_5 = o_1;
            break;
          case '%like%':
            tmp$_5 = v != null ? '%' + toString_0(v) + '%' : null;
            break;
          case '%like':
            tmp$_5 = v != null ? '%' + toString_0(v) : null;
            break;
          case 'like%':
            tmp$_5 = v != null ? toString_0(v) + '%' : null;
            break;
          default:tmp$_5 = null;
            break;
        }
        target[k] = tmp$_5 != null ? tmp$_5 : tv;
        i.v = i.v + 1 | 0;
      }
    }
    println('delete query');
    println(JSON.stringify(r));
    return ensureNotNull(ChJS_getInstance().then_xaus8m$(DataBase$Companion_getInstance().connection_8be2vx$.remove(r), Delete$exec$lambda));
  };
  Delete.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Delete',
    interfaces: [Query]
  };
  function Insert(table) {
    Insert$Companion_getInstance();
    Query.call(this);
    this.table_0 = table;
    this.data_0 = null;
    this.value_0 = null;
  }
  function Insert$Companion() {
    Insert$Companion_instance = this;
    this.rInsert_0 = Regex_init('^\\s*insert\\s+into\\s+([a-zA-Z0-9_]+)\\s*\\(\\s*([\\sa-zA-Z0-9_,]+)\\s*\\)\\s*values\\s*\\(\\s*([^)]+)\\s*\\)$');
  }
  Insert$Companion.prototype.parse_y4putb$ = function (q) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.rInsert_0.find_905azu$(q)) != null) {
      var gv = tmp$.groupValues;
      var r = new Insert(gv.get_za3lpa$(1));
      var data = LinkedHashMap_init();
      var value = LinkedHashMap_init();
      r.data_0 = data;
      r.value_0 = value;
      var $receiver = split(gv.get_za3lpa$(3), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      loop_label: while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination.add_11rb$;
        var transform$result;
        transform$break: do {
          var tmp$_3;
          var v = trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString();
          switch (v.charCodeAt(0)) {
            case 64:
              transform$result = v;
              break transform$break;
            case 39:
              var endIndex = v.length - 1 | 0;
              transform$result = v.substring(1, endIndex);
              break transform$break;
            case 116:
              transform$result = true;
              break transform$break;
            case 102:
              transform$result = false;
              break transform$break;
            default:transform$result = toDouble(v);
              break transform$break;
          }
        }
         while (false);
        tmp$_2.call(destination, transform$result);
      }
      var v_0 = destination;
      var tmp$_4, tmp$_0_0;
      var index = 0;
      tmp$_4 = split(gv.get_za3lpa$(2), [',']).iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var tmp$_5;
        var k = trim(Kotlin.isCharSequence(tmp$_5 = item_0) ? tmp$_5 : throwCCE()).toString();
        var value_0 = v_0.get_za3lpa$(index_0);
        value.put_xwzc9p$(k, value_0);
        if (contains(v_0.get_za3lpa$(index_0).toString(), 64)) {
          var value_1 = replace(v_0.get_za3lpa$(index_0).toString(), '@', '');
          data.put_xwzc9p$(k, value_1);
        }
      }
      tmp$_0 = r;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  Insert$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Insert$Companion_instance = null;
  function Insert$Companion_getInstance() {
    if (Insert$Companion_instance === null) {
      new Insert$Companion();
    }
    return Insert$Companion_instance;
  }
  function Insert$exec$lambda$lambda(it) {
    println('inserted!!');
    return null;
  }
  Insert.prototype.exec_xygpg9$ = function (db, arg) {
    var o = {};
    var tmp$;
    o.into = this.table_0;
    var vo = {};
    var args = toMap_0(arg);
    if ((tmp$ = this.value_0) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var k = element.key;
        var v = element.value;
        var tmp$_1, tmp$_2, tmp$_3;
        var tmp$_4;
        if ((tmp$_2 = (tmp$_1 = this.data_0) != null ? tmp$_1.get_11rb$(k) : null) != null) {
          var tmp$_5;
          tmp$_5 = args.get_11rb$(tmp$_2);
          if (tmp$_5 == null) {
            throw Kotlin.newThrowable('error');
          }
          tmp$_4 = tmp$_5;
        }
         else
          tmp$_4 = null;
        vo[k] = (tmp$_3 = tmp$_4) != null ? tmp$_3 : v;
      }
    }
    o.values = [];
    o.values[0] = vo;
    var o_0 = o;
    println('insert query');
    println(JSON.stringify(o_0));
    return ensureNotNull(ChJS_getInstance().then_xaus8m$(DataBase$Companion_getInstance().connection_8be2vx$.insert(o_0), Insert$exec$lambda$lambda));
  };
  Insert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Insert',
    interfaces: [Query]
  };
  function Query() {
  }
  Query.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Query',
    interfaces: []
  };
  function Select() {
    Select$Companion_getInstance();
    Query.call(this);
    this.table_0 = '';
    this.fields_0 = null;
    this.aggre_0 = null;
    this.wSep_0 = null;
    this.wData_0 = null;
    this.wItem_0 = null;
    this.oby_0 = '';
    this.obyType_0 = 'asc';
    this.group_0 = '';
    this.limitNum_0 = -1;
  }
  function Select$Companion() {
    Select$Companion_instance = this;
    this.rSelect_0 = Regex_init('^\\s*select([\\s\\S]+?)\\s+from([\\s\\S]+?)\\s*$');
    this.rLimit_0 = Regex_init('\\slimit\\s+([0-9]+)$');
    this.rOrder_0 = Regex_init('\\sorder\\s+oby\\s+([\\S]+)(?:\\s+(desc|asc))?$');
    this.rGroup_0 = Regex_init('\\sgroup\\s+oby\\s+(.+?)\\s*$');
    this.rWhere_0 = Regex_init('\\swhere\\s+([\\s\\S]+?)\\s*$');
    this.rJoin_0 = Regex_init('\\s+(?:inner\\s+join\\s+.+\\s+on\\s+.+\\s*)+');
    this.rAndOr_0 = Regex_init('\\s(and|or)\\s');
    this.rWhereItem_0 = Regex_init("^\\s*([0-9a-zA-Z_.]+)\\s*(?:(?:(=|!=|[<>]=?)\\s*(.+))|like +'(%)?(\\S)+(%)?'|in\\s*\\(([^)]|\\s)+\\))\\s*$");
    this.rAggregate_0 = Regex_init('(count|sum|avg|max|min)\\(([^)]+)\\)');
    this.join_0 = Regex_init('\\sinner\\s+join\\s+([a-zA-Z0-9_]+)(?:\\s+([a-zA-Z0-9_]+))?\\s+on\\s+([a-zA-Z0-9_]+\\.[a-zA-Z0-9_]+)\\s*=\\s*([a-zA-Z0-9_]+\\.[a-zA-Z0-9_]+)');
  }
  function Select$Companion$parse$lambda$lambda$lambda(it) {
    return it.groupValues.get_za3lpa$(1);
  }
  Select$Companion.prototype.parse_y4putb$ = function (q) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.rSelect_0.find_905azu$(q)) != null) {
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      var $receiver = tmp$.groupValues.get_za3lpa$(1);
      var tmp$_7;
      var $receiver_0 = split(trim(Kotlin.isCharSequence(tmp$_7 = $receiver) ? tmp$_7 : throwCCE()).toString(), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_8;
      tmp$_8 = $receiver_0.iterator();
      while (tmp$_8.hasNext()) {
        var item = tmp$_8.next();
        var tmp$_9;
        destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_9 = item) ? tmp$_9 : throwCCE()).toString());
      }
      var fields = destination;
      var remain = {v: tmp$.groupValues.get_za3lpa$(2)};
      var tmp$_10;
      if ((tmp$_1 = this.rLimit_0.find_905azu$(remain.v)) != null) {
        var $receiver_1 = remain.v;
        remain.v = this.rLimit_0.replace_x2uqeu$($receiver_1, '');
        tmp$_10 = toInt(tmp$_1.groupValues.get_za3lpa$(1));
      }
       else
        tmp$_10 = null;
      var limitNum = (tmp$_2 = tmp$_10) != null ? tmp$_2 : -1;
      var tmp$_11;
      if ((tmp$_3 = this.rOrder_0.find_905azu$(remain.v)) != null) {
        var $receiver_2 = remain.v;
        remain.v = this.rOrder_0.replace_x2uqeu$($receiver_2, '');
        tmp$_11 = listOf([tmp$_3.groupValues.get_za3lpa$(1), equals(tmp$_3.groupValues.get_za3lpa$(2), 'desc') ? 'desc' : 'asc']);
      }
       else
        tmp$_11 = null;
      var orderby = tmp$_11;
      var tmp$_12;
      if ((tmp$_4 = this.rGroup_0.find_905azu$(remain.v)) != null) {
        var $receiver_3 = remain.v;
        remain.v = this.rGroup_0.replace_x2uqeu$($receiver_3, '');
        tmp$_12 = tmp$_4.groupValues.get_za3lpa$(1);
      }
       else
        tmp$_12 = null;
      var group = tmp$_12;
      var tmp$_13;
      if ((tmp$_5 = this.rWhere_0.find_905azu$(remain.v)) != null) {
        var $receiver_4 = remain.v;
        remain.v = this.rWhere_0.replace_x2uqeu$($receiver_4, '');
        tmp$_13 = tmp$_5.groupValues.get_za3lpa$(1);
      }
       else
        tmp$_13 = null;
      var where = tmp$_13;
      var tmp$_14;
      if ((tmp$_6 = this.rJoin_0.find_905azu$(remain.v)) != null) {
        var $receiver_5 = remain.v;
        remain.v = this.rJoin_0.replace_x2uqeu$($receiver_5, '');
        tmp$_14 = tmp$_6.groupValues.get_za3lpa$(1);
      }
       else
        tmp$_14 = null;
      var join = tmp$_14;
      var $receiver_6 = remain.v;
      var tmp$_15;
      var table = trim(Kotlin.isCharSequence(tmp$_15 = $receiver_6) ? tmp$_15 : throwCCE()).toString();
      var sel = new Select();
      var tmp$_16;
      if (join != null) {
        println('join1-' + toString_0(join));
        tmp$_16 = Unit;
      }
       else
        tmp$_16 = null;
      if (tmp$_16 == null) {
        sel.table_0 = table;
        if (limitNum !== -1)
          sel.limitNum_0 = limitNum;
        if (orderby != null) {
          sel.oby_0 = orderby.get_za3lpa$(0);
          sel.obyType_0 = orderby.get_za3lpa$(1);
        }
        if (group != null)
          sel.group_0 = group;
        if (where != null) {
          sel.wSep_0 = toList(map(this.rAndOr_0.findAll_905azu$(where), Select$Companion$parse$lambda$lambda$lambda));
          var data = LinkedHashMap_init();
          sel.wData_0 = data;
          var wItem = LinkedHashMap_init();
          sel.wItem_0 = wItem;
          var tmp$_17;
          tmp$_17 = this.rAndOr_0.split_905azu$(where, 0).iterator();
          while (tmp$_17.hasNext()) {
            var element = tmp$_17.next();
            var tmp$_18;
            if ((tmp$_18 = this.rWhereItem_0.find_905azu$(element)) != null) {
              var tmp$_19, tmp$_20, tmp$_21, tmp$_22;
              var gv = tmp$_18.groupValues;
              var k = gv.get_za3lpa$(1);
              if (!equals(gv.get_za3lpa$(2), '')) {
                tmp$_20 = gv.get_za3lpa$(2);
                switch (gv.get_za3lpa$(3).charCodeAt(0)) {
                  case 64:
                    var value = replace(gv.get_za3lpa$(3), '@', '');
                    data.put_xwzc9p$(k, value);
                    tmp$_19 = gv.get_za3lpa$(3);
                    break;
                  case 39:
                    var $receiver_7 = gv.get_za3lpa$(3);
                    var endIndex = gv.get_za3lpa$(3).length - 1 | 0;
                    tmp$_19 = $receiver_7.substring(1, endIndex);
                    break;
                  case 116:
                    tmp$_19 = true;
                    break;
                  case 102:
                    tmp$_19 = false;
                    break;
                  default:tmp$_19 = toDouble(gv.get_za3lpa$(3));
                    break;
                }
                tmp$_22 = to(tmp$_20, tmp$_19);
              }
               else if (!equals(gv.get_za3lpa$(5), '')) {
                if (contains(gv.get_za3lpa$(5), 64)) {
                  var value_0 = replace(replace(gv.get_za3lpa$(3), '@', ''), '%', '');
                  data.put_xwzc9p$(k, value_0);
                }
                var t = equals(gv.get_za3lpa$(4), '%') && equals(gv.get_za3lpa$(6), '%') ? '%like%' : equals(gv.get_za3lpa$(4), '%') ? '%like' : 'like%';
                tmp$_22 = to(t, gv.get_za3lpa$(4) + gv.get_za3lpa$(5) + gv.get_za3lpa$(6));
              }
               else {
                if (gv.get_za3lpa$(7).charCodeAt(0) === 64) {
                  var value_1 = replace(gv.get_za3lpa$(7), '@', '');
                  data.put_xwzc9p$(k, value_1);
                  tmp$_21 = gv.get_za3lpa$(7);
                }
                 else {
                  var $receiver_8 = split(gv.get_za3lpa$(7), [',']);
                  var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_8, 10));
                  var tmp$_23;
                  tmp$_23 = $receiver_8.iterator();
                  loop_label: while (tmp$_23.hasNext()) {
                    var item_0 = tmp$_23.next();
                    var tmp$_24 = destination_0.add_11rb$;
                    var transform$result;
                    transform$break: do {
                      var tmp$_25;
                      var v = trim(Kotlin.isCharSequence(tmp$_25 = item_0) ? tmp$_25 : throwCCE()).toString();
                      switch (v.charCodeAt(0)) {
                        case 39:
                          var endIndex_0 = v.length - 1 | 0;
                          transform$result = v.substring(1, endIndex_0);
                          break transform$break;
                        case 116:
                          transform$result = true;
                          break transform$break;
                        case 102:
                          transform$result = false;
                          break transform$break;
                        default:transform$result = toDouble(v);
                          break transform$break;
                      }
                    }
                     while (false);
                    tmp$_24.call(destination_0, transform$result);
                  }
                  tmp$_21 = destination_0;
                }
                tmp$_22 = to('in', tmp$_21);
              }
              var value_2 = tmp$_22;
              wItem.put_xwzc9p$(k, value_2);
            }
          }
        }
        var any$result;
        any$break: do {
          var tmp$_26;
          if (Kotlin.isType(fields, Collection) && fields.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_26 = fields.iterator();
          while (tmp$_26.hasNext()) {
            var element_0 = tmp$_26.next();
            var tmp$_27;
            var tmp$_28;
            if ((tmp$_27 = this.rAggregate_0.find_905azu$(element_0)) != null) {
              sel.aggre_0 = to(tmp$_27.groupValues.get_za3lpa$(1), tmp$_27.groupValues.get_za3lpa$(2));
              tmp$_28 = true;
            }
             else
              tmp$_28 = null;
            if (tmp$_28 === true) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        if (!any$result)
          sel.fields_0 = fields;
      }
      tmp$_0 = sel;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  Select$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Select$Companion_instance = null;
  function Select$Companion_getInstance() {
    if (Select$Companion_instance === null) {
      new Select$Companion();
    }
    return Select$Companion_instance;
  }
  function Select$exec$lambda(this$Select) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var r = Kotlin.isArray(tmp$ = it) ? tmp$ : throwCCE();
      var tmp$_2;
      if ((tmp$_0 = this$Select.fields_0) != null) {
        var tmp$_3;
        if (!equals(tmp$_0.get_za3lpa$(0), '*')) {
          var destination = ArrayList_init(r.length);
          var tmp$_4;
          for (tmp$_4 = 0; tmp$_4 !== r.length; ++tmp$_4) {
            var item = r[tmp$_4];
            var tmp$_5 = destination.add_11rb$;
            var r_0 = {};
            var tmp$_6;
            tmp$_6 = tmp$_0.iterator();
            while (tmp$_6.hasNext()) {
              var element = tmp$_6.next();
              r_0[element] = item[element];
            }
            tmp$_5.call(destination, r_0);
          }
          tmp$_3 = copyToArray(destination);
        }
         else
          tmp$_3 = null;
        tmp$_2 = tmp$_3;
      }
       else
        tmp$_2 = null;
      return (tmp$_1 = tmp$_2) != null ? tmp$_1 : r;
    };
  }
  Select.prototype.exec_xygpg9$ = function (db, arg) {
    var tmp$;
    var args = toMap_0(arg);
    var o = {};
    var tmp$_0;
    o.from = this.table_0;
    if (this.limitNum_0 !== -1)
      o.limit = this.limitNum_0;
    if (!equals(this.oby_0, '')) {
      var o_0 = {};
      o_0.by = this.oby_0;
      o_0.type = this.obyType_0;
      o.order = o_0;
    }
    if (!isBlank(this.group_0))
      o.groupBy = this.group_0;
    if ((tmp$_0 = this.aggre_0) != null) {
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      o.aggregate = {};
      o.aggregate[k] = v;
    }
    var r = o;
    if ((tmp$ = this.wItem_0) != null) {
      var tmp$_1;
      var where = {};
      r.where = where;
      var or = ((tmp$_1 = this.wSep_0) != null ? tmp$_1.contains_11rb$('or') : null) === true ? {} : null;
      if (or != null)
        where.or = or;
      var i = {v: 0};
      var tmp$_2;
      tmp$_2 = tmp$.entries.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        var k_0 = element.key;
        var t = element.value;
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6;
        var target = i.v > 0 && equals((tmp$_3 = this.wSep_0) != null ? tmp$_3.get_za3lpa$(i.v - 1 | 0) : null, 'or') ? or : where;
        var tv = t.second;
        var tmp$_7;
        if ((tmp$_5 = (tmp$_4 = this.wData_0) != null ? tmp$_4.get_11rb$(k_0) : null) != null) {
          var tmp$_8;
          tmp$_8 = args.get_11rb$(tmp$_5);
          if (tmp$_8 == null) {
            throw Kotlin.newThrowable('error');
          }
          tmp$_7 = tmp$_8;
        }
         else
          tmp$_7 = null;
        var v_0 = tmp$_7;
        switch (t.first) {
          case '=':
          case 'in':
            tmp$_6 = v_0;
            break;
          case '>':
          case '<':
          case '!=':
          case '>=':
          case '<=':
            var o_1 = {};
            var o_2 = o_1;
            o_2[t.first] = v_0 != null ? v_0 : tv;
            tmp$_6 = o_2;
            break;
          case '%like%':
            tmp$_6 = v_0 != null ? '%' + toString_0(v_0) + '%' : null;
            break;
          case '%like':
            tmp$_6 = v_0 != null ? '%' + toString_0(v_0) : null;
            break;
          case 'like%':
            tmp$_6 = v_0 != null ? toString_0(v_0) + '%' : null;
            break;
          default:tmp$_6 = null;
            break;
        }
        target[k_0] = tmp$_6 != null ? tmp$_6 : tv;
        i.v = i.v + 1 | 0;
      }
    }
    println('select query');
    println(JSON.stringify(r));
    return ensureNotNull(ChJS_getInstance().then_xaus8m$(DataBase$Companion_getInstance().connection_8be2vx$.select(r), Select$exec$lambda(this)));
  };
  Select.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Select',
    interfaces: [Query]
  };
  function ChRule() {
    ChRule$Companion_getInstance();
  }
  function ChRule$Companion() {
    ChRule$Companion_instance = this;
    this._defined_8be2vx$ = LinkedHashMap_init();
  }
  ChRule$Companion.prototype.get_61zpoe$ = function (k) {
    var tmp$;
    tmp$ = this._defined_8be2vx$.get_11rb$(k);
    if (tmp$ == null) {
      throw Exception_init('invalid rule:' + k);
    }
    return tmp$;
  };
  ChRule$Companion.prototype.set_9najdr$ = function (k, rule) {
    var key = k.toLowerCase();
    this._defined_8be2vx$.put_xwzc9p$(key, rule);
    ChRuleSet$Companion_getInstance().add_puj7f4$(key, key);
  };
  ChRule$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChRule$Companion_instance = null;
  function ChRule$Companion_getInstance() {
    if (ChRule$Companion_instance === null) {
      new ChRule$Companion();
    }
    return ChRule$Companion_instance;
  }
  ChRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChRule',
    interfaces: []
  };
  function ChRuleSet(rule) {
    ChRuleSet$Companion_getInstance();
    var $receiver = split(rule, ['-or-']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = split(item, ['|']);
      var destination_0 = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!isBlank(element))
          destination_0.add_11rb$(element);
      }
      var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
      var tmp$_2;
      tmp$_2 = destination_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        var tmp$_3 = destination_1.add_11rb$;
        var tmp$_4 = reParam_getInstance().parse_61zpoe$(item_0);
        var k = tmp$_4.component1()
        , arg = tmp$_4.component2();
        tmp$_3.call(destination_1, ChRule$Companion_getInstance().get_61zpoe$(k)(arg));
      }
      tmp$_0.call(destination, destination_1);
    }
    this.rules_0 = destination;
  }
  function ChRuleSet$Companion() {
    ChRuleSet$Companion_instance = this;
    this._defined_0 = LinkedHashMap_init();
    this.baseRule_0 = listOf([BaseRules_getInstance(), TypeRules_getInstance(), RegRules_getInstance()]);
  }
  Object.defineProperty(ChRuleSet$Companion.prototype, 'string', {
    get: function () {
      return ensureNotNull(ChRuleSet$Companion_getInstance().get_61zpoe$('string'));
    }
  });
  ChRuleSet$Companion.prototype.add_puj7f4$ = function (k, rule) {
    if (isBlank(k) || isBlank(rule))
      return;
    var tmp$;
    var key = trim(Kotlin.isCharSequence(tmp$ = k) ? tmp$ : throwCCE()).toString().toLowerCase();
    var $receiver = this._defined_0;
    var value = new ChRuleSet(rule);
    $receiver.put_xwzc9p$(key, value);
  };
  ChRuleSet$Companion.prototype.remove_61zpoe$ = function (k) {
    return this._defined_0.remove_11rb$(k);
  };
  ChRuleSet$Companion.prototype.get_61zpoe$ = function (k) {
    return this._defined_0.get_11rb$(k.toLowerCase());
  };
  ChRuleSet$Companion.prototype.check_bm4g0d$ = function (k, v) {
    var tmp$;
    return ((tmp$ = this.get_61zpoe$(k)) != null ? tmp$ : this.string).check_za3rmp$(v);
  };
  ChRuleSet$Companion.prototype.isOk_8bsfpn$ = function (kv) {
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== kv.length; ++tmp$) {
        var element = kv[tmp$];
        var k = element.component1()
        , v = element.component2();
        if (!!Kotlin.isType(this.check_bm4g0d$(k, v), ChRuleSet)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ChRuleSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChRuleSet$Companion_instance = null;
  function ChRuleSet$Companion_getInstance() {
    if (ChRuleSet$Companion_instance === null) {
      new ChRuleSet$Companion();
    }
    return ChRuleSet$Companion_instance;
  }
  ChRuleSet.prototype.check_za3rmp$ = function (v) {
    var r = {v: v};
    var $receiver = this.rules_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      loop_label: while (tmp$.hasNext()) {
        var element = tmp$.next();
        var all$result;
        all$break: do {
          var tmp$_0;
          if (Kotlin.isType(element, Collection) && element.isEmpty()) {
            all$result = true;
            break all$break;
          }
          tmp$_0 = element.iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            r.v = element_0(r.v);
            if (!!Kotlin.isType(r.v, ChRule)) {
              all$result = false;
              break all$break;
            }
          }
          all$result = true;
        }
         while (false);
        if (all$result) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result ? r.v : this;
  };
  ChRuleSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChRuleSet',
    interfaces: []
  };
  function BaseRules() {
    BaseRules_instance = this;
    ChRule.call(this);
    ChRule$Companion_getInstance().set_9najdr$('NoRule', BaseRules_init$lambda);
    ChRule$Companion_getInstance().set_9najdr$('MinLength', BaseRules_init$lambda_0(this));
    ChRule$Companion_getInstance().set_9najdr$('MaxLength', BaseRules_init$lambda_1(this));
    ChRule$Companion_getInstance().set_9najdr$('LessThan', BaseRules_init$lambda_2(this));
    ChRule$Companion_getInstance().set_9najdr$('GreaterThan', BaseRules_init$lambda_3(this));
    ChRule$Companion_getInstance().set_9najdr$('Range', BaseRules_init$lambda_4(this));
    ChRule$Companion_getInstance().set_9najdr$('Equal', BaseRules_init$lambda_5(this));
    ChRule$Companion_getInstance().set_9najdr$('In', BaseRules_init$lambda_6(this));
    ChRule$Companion_getInstance().set_9najdr$('NotIn', BaseRules_init$lambda_7(this));
  }
  function BaseRules_init$lambda$lambda(v) {
    return v;
  }
  function BaseRules_init$lambda(arg) {
    return BaseRules_init$lambda$lambda;
  }
  function BaseRules_init$lambda$lambda_0(closure$arg, this$BaseRules) {
    return function (v) {
      return typeof v === 'string' && closure$arg.size === 1 && v.length >= toInt(closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
    };
  }
  function BaseRules_init$lambda_0(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_0(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda_1(closure$arg, this$BaseRules) {
    return function (v) {
      return typeof v === 'string' && closure$arg.size === 1 && v.length <= toInt(closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
    };
  }
  function BaseRules_init$lambda_1(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_1(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda_2(closure$arg, this$BaseRules) {
    return function (v) {
      return Kotlin.isNumber(v) && closure$arg.size === 1 && numberToDouble(v) < toDouble(closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
    };
  }
  function BaseRules_init$lambda_2(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_2(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda_3(closure$arg, this$BaseRules) {
    return function (v) {
      return Kotlin.isNumber(v) && closure$arg.size === 1 && numberToDouble(v) > toDouble(closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
    };
  }
  function BaseRules_init$lambda_3(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_3(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda_4(closure$arg, this$BaseRules) {
    return function (v) {
      return Kotlin.isNumber(v) && closure$arg.size === 2 && toDouble(closure$arg.get_za3lpa$(0)) <= numberToDouble(v) && numberToDouble(v) <= toDouble(closure$arg.get_za3lpa$(1)) ? v : this$BaseRules;
    };
  }
  function BaseRules_init$lambda_4(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_4(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda_5(this$BaseRules, closure$arg) {
    return function (v) {
      if (closure$arg.size !== 1)
        return this$BaseRules;
      else if (Kotlin.isNumber(v))
        return numberToDouble(v) === toDouble(closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
      else if (typeof v === 'string')
        return equals(v, closure$arg.get_za3lpa$(0)) ? v : this$BaseRules;
      else if (typeof v === 'boolean')
        return equals(v, toBoolean(closure$arg.get_za3lpa$(0))) ? v : this$BaseRules;
      else
        return this$BaseRules;
    };
  }
  function BaseRules_init$lambda_5(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_5(this$BaseRules, arg);
    };
  }
  function BaseRules_init$lambda$lambda_6(closure$arg, this$BaseRules) {
    return function (v) {
      if (typeof v === 'string')
        return closure$arg.contains_11rb$(v) ? v : this$BaseRules;
      else if (typeof v === 'number') {
        var $receiver = closure$arg;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(toInt(item));
        }
        return destination.contains_11rb$(v) ? v : this$BaseRules;
      }
       else if (Kotlin.isType(v, Kotlin.Long)) {
        var $receiver_0 = closure$arg;
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item_0 = tmp$_0.next();
          destination_0.add_11rb$(toLong(item_0));
        }
        return destination_0.contains_11rb$(v) ? v : this$BaseRules;
      }
       else if (typeof v === 'number') {
        var $receiver_1 = closure$arg;
        var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
        var tmp$_1;
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var item_1 = tmp$_1.next();
          destination_1.add_11rb$(toDouble(item_1));
        }
        return destination_1.contains_11rb$(v) ? v : this$BaseRules;
      }
       else if (typeof v === 'number') {
        var $receiver_2 = closure$arg;
        var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
        var tmp$_2;
        tmp$_2 = $receiver_2.iterator();
        while (tmp$_2.hasNext()) {
          var item_2 = tmp$_2.next();
          destination_2.add_11rb$(toDouble(item_2));
        }
        return destination_2.contains_11rb$(v) ? v : this$BaseRules;
      }
       else
        return this$BaseRules;
    };
  }
  function BaseRules_init$lambda_6(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_6(arg, this$BaseRules);
    };
  }
  function BaseRules_init$lambda$lambda$lambda(closure$arg, closure$v, this$BaseRules) {
    return function () {
      var r = ChRule$Companion_getInstance().get_61zpoe$('In')(closure$arg)(closure$v);
      return equals(r, closure$v) ? this$BaseRules : closure$v;
    };
  }
  function BaseRules_init$lambda$lambda_7(closure$arg, this$BaseRules) {
    return function (v) {
      return BaseRules_init$lambda$lambda$lambda(closure$arg, v, this$BaseRules);
    };
  }
  function BaseRules_init$lambda_7(this$BaseRules) {
    return function (arg) {
      return BaseRules_init$lambda$lambda_7(arg, this$BaseRules);
    };
  }
  BaseRules.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BaseRules',
    interfaces: [ChRule]
  };
  var BaseRules_instance = null;
  function BaseRules_getInstance() {
    if (BaseRules_instance === null) {
      new BaseRules();
    }
    return BaseRules_instance;
  }
  function RegRules() {
    RegRules_instance = this;
    ChRule.call(this);
    this.ip_0 = Regex_init('^(?:(?:[0-9]|(?:1\\d{1,2})|(?:2[0-4]\\d)|(?:25[0-5]))[.]){3}(?:[0-9]|[1-9][0-9]{1,2}|2[0-4]\\d|25[0-5])$');
    this.url_0 = Regex_init('^https?://[a-zA-Z0-9.-]+(?:[.]+[A-Za-z]{2,4})+(?:[:]\\d{2,4})?');
    this.email_0 = Regex_init('^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-]+(?:[.]+[A-Za-z]{2,4})+$');
    this.korean_0 = Regex_init('^[\u3131-\uD7A3]+$');
    this.japanese_0 = Regex_init('^[\u3041-\u3093\u30A1-\u30F6\u30FC\u4E00-\u9FA0\uFF01-\uFF9F\u30FB\uFF5E\u300C\u300D\u201C\u201D\u2018\u2019\uFF5B\uFF5D\u301C\u2212]+$');
    this.lower_0 = Regex_init('^[a-z]+$');
    this.upper_0 = Regex_init('^[A-Z]+$');
    this.num_0 = Regex_init('^(?:-?(?:0|[1-9]\\d*)(?:\\.\\d+)(?:[eE][-+]?\\d+)?)|(?:-?(?:0|[1-9]\\d*))$');
    this.intnum_0 = Regex_init('^(?:-?(?:0|[1-9]\\d*))$');
    this.doublenum_0 = Regex_init('^(?:-?(?:0|[1-9]\\d*)(?:\\.\\d+)(?:[eE][-+]?\\d+)?)$');
    this.lowernum_0 = Regex_init('^[a-z0-9]+$');
    this.uppernum_0 = Regex_init('^[A-Z0-9]+$');
    this.alphanum_0 = Regex_init('^[a-zA-Z0-9]+$');
    this.firstlower_0 = Regex_init('^[a-z]');
    this.firstUpper_0 = Regex_init('^[A-Z]');
    this.noblank_0 = Regex_init('\\s');
    ChRule$Companion_getInstance().set_9najdr$('ip', RegRules_init$lambda(this));
    ChRule$Companion_getInstance().set_9najdr$('url', RegRules_init$lambda_0(this));
    ChRule$Companion_getInstance().set_9najdr$('email', RegRules_init$lambda_1(this));
    ChRule$Companion_getInstance().set_9najdr$('korean', RegRules_init$lambda_2(this));
    ChRule$Companion_getInstance().set_9najdr$('japanese', RegRules_init$lambda_3(this));
    ChRule$Companion_getInstance().set_9najdr$('lower', RegRules_init$lambda_4(this));
    ChRule$Companion_getInstance().set_9najdr$('upper', RegRules_init$lambda_5(this));
    ChRule$Companion_getInstance().set_9najdr$('num', RegRules_init$lambda_6(this));
    ChRule$Companion_getInstance().set_9najdr$('intnum', RegRules_init$lambda_7(this));
    ChRule$Companion_getInstance().set_9najdr$('doublenum', RegRules_init$lambda_8(this));
    ChRule$Companion_getInstance().set_9najdr$('lowernum', RegRules_init$lambda_9(this));
    ChRule$Companion_getInstance().set_9najdr$('uppernum', RegRules_init$lambda_10(this));
    ChRule$Companion_getInstance().set_9najdr$('alphanum', RegRules_init$lambda_11(this));
    ChRule$Companion_getInstance().set_9najdr$('firstlower', RegRules_init$lambda_12(this));
    ChRule$Companion_getInstance().set_9najdr$('firstUpper', RegRules_init$lambda_13(this));
    ChRule$Companion_getInstance().set_9najdr$('noblank', RegRules_init$lambda_14(this));
  }
  function RegRules_init$lambda$lambda(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.ip_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_0(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.url_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_0(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_0(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_1(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.email_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_1(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_1(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_2(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.korean_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_2(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_2(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_3(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.japanese_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_3(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_3(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_4(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.lower_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_4(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_4(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_5(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.upper_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_5(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_5(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_6(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.num_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_6(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_6(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_7(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.intnum_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_7(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_7(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_8(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.doublenum_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_8(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_8(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_9(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.lowernum_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_9(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_9(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_10(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.uppernum_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_10(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_10(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_11(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.alphanum_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_11(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_11(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_12(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.firstlower_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_12(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_12(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_13(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.firstUpper_0.find_905azu$(v) != null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_13(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_13(this$RegRules);
    };
  }
  function RegRules_init$lambda$lambda_14(this$RegRules) {
    return function (v) {
      return typeof v === 'string' && this$RegRules.noblank_0.find_905azu$(v) == null ? v : this$RegRules;
    };
  }
  function RegRules_init$lambda_14(this$RegRules) {
    return function (it) {
      return RegRules_init$lambda$lambda_14(this$RegRules);
    };
  }
  RegRules.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RegRules',
    interfaces: [ChRule]
  };
  var RegRules_instance = null;
  function RegRules_getInstance() {
    if (RegRules_instance === null) {
      new RegRules();
    }
    return RegRules_instance;
  }
  function TypeRules() {
    TypeRules_instance = this;
    ChRule.call(this);
    ChRule$Companion_getInstance().set_9najdr$('int', TypeRules_init$lambda(this));
    ChRule$Companion_getInstance().set_9najdr$('long', TypeRules_init$lambda_0(this));
    ChRule$Companion_getInstance().set_9najdr$('float', TypeRules_init$lambda_1(this));
    ChRule$Companion_getInstance().set_9najdr$('double', TypeRules_init$lambda_2(this));
    ChRule$Companion_getInstance().set_9najdr$('string', TypeRules_init$lambda_3(this));
    ChRule$Companion_getInstance().set_9najdr$('char', TypeRules_init$lambda_4(this));
  }
  function TypeRules_init$lambda$lambda(this$TypeRules) {
    return function (v) {
      return typeof v === 'number' ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda(this$TypeRules);
    };
  }
  function TypeRules_init$lambda$lambda_0(this$TypeRules) {
    return function (v) {
      return Kotlin.isType(v, Kotlin.Long) ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda_0(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda_0(this$TypeRules);
    };
  }
  function TypeRules_init$lambda$lambda_1(this$TypeRules) {
    return function (v) {
      return typeof v === 'number' ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda_1(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda_1(this$TypeRules);
    };
  }
  function TypeRules_init$lambda$lambda_2(this$TypeRules) {
    return function (v) {
      return typeof v === 'number' ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda_2(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda_2(this$TypeRules);
    };
  }
  function TypeRules_init$lambda$lambda_3(this$TypeRules) {
    return function (v) {
      return typeof v === 'string' ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda_3(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda_3(this$TypeRules);
    };
  }
  function TypeRules_init$lambda$lambda_4(this$TypeRules) {
    return function (v) {
      return Kotlin.isChar(v) ? v : this$TypeRules;
    };
  }
  function TypeRules_init$lambda_4(this$TypeRules) {
    return function (it) {
      return TypeRules_init$lambda$lambda_4(this$TypeRules);
    };
  }
  TypeRules.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TypeRules',
    interfaces: [ChRule]
  };
  var TypeRules_instance = null;
  function TypeRules_getInstance() {
    if (TypeRules_instance === null) {
      new TypeRules();
    }
    return TypeRules_instance;
  }
  function ChStyle() {
    ChStyle_instance = this;
    this.items = LinkedHashMap_init();
  }
  ChStyle.prototype.add_mvjluj$ = function (k, map) {
    this.items.put_xwzc9p$(k, map);
  };
  ChStyle.prototype.remove_61zpoe$ = function (k) {
    return this.items.remove_11rb$(k);
  };
  ChStyle.prototype.get_61zpoe$ = function (k) {
    return this.items.get_11rb$(k);
  };
  ChStyle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChStyle',
    interfaces: []
  };
  var ChStyle_instance = null;
  function ChStyle_getInstance() {
    if (ChStyle_instance === null) {
      new ChStyle();
    }
    return ChStyle_instance;
  }
  function ChViewModel(isRegister) {
    if (isRegister === void 0)
      isRegister = false;
    Model.call(this, isRegister);
  }
  ChViewModel.prototype.start = function () {
  };
  ChViewModel.prototype.end = function () {
  };
  ChViewModel.prototype.paused = function () {
  };
  ChViewModel.prototype.resumeAnimation_xcxcp6$ = function (it) {
  };
  ChViewModel.prototype.pauseAnimation_xcxcp6$ = function (it) {
  };
  ChViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChViewModel',
    interfaces: [Model]
  };
  function ChRouter(base) {
    this.base_0 = base;
    this.stack_0 = ArrayList_init_0();
    this.pushLock_0 = false;
    this.popLock_0 = false;
    this.base_0.router_8be2vx$ = this;
  }
  ChRouter.prototype.restore = function () {
    var tmp$;
    tmp$ = this.stack_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.base_0._push_623qkj$(element, true);
    }
  };
  ChRouter.prototype.unlockPush = function () {
    if (this.pushLock_0)
      this.pushLock_0 = false;
  };
  ChRouter.prototype.unlockPop = function () {
    if (this.popLock_0)
      this.popLock_0 = false;
  };
  ChRouter.prototype.push_eqdokg$ = function (holder, isAutoUnlock) {
    if (isAutoUnlock === void 0)
      isAutoUnlock = true;
    if (this.pushLock_0)
      return;
    if (!isAutoUnlock)
      this.pushLock_0 = true;
    if (!this.stack_0.isEmpty())
      this.base_0._pause_623qkj$(last(this.stack_0), false);
    this.base_0._push_623qkj$(holder, false);
    this.stack_0.add_11rb$(holder);
  };
  ChRouter.prototype.pop_6taknv$ = function (isAutoUnlock) {
    if (isAutoUnlock === void 0)
      isAutoUnlock = true;
    if (this.stack_0.isEmpty())
      return 0;
    if (this.popLock_0)
      return -1;
    if (!isAutoUnlock)
      this.popLock_0 = true;
    var h = last(this.stack_0);
    this.base_0._pop_623qkj$(h, false);
    _pop(this.stack_0);
    if (!this.stack_0.isEmpty())
      this.base_0._resume_623qkj$(last(this.stack_0), true);
    return this.stack_0.size;
  };
  ChRouter.prototype.jump = function () {
    var isJump = {v: false};
    var $receiver = this.stack_0;
    while (true) {
      var tmp$ = !$receiver.isEmpty();
      if (tmp$) {
        var v = $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
        var block$result;
        if (v.isJumpPoint) {
          this.base_0._pop_623qkj$(v, true);
          this.base_0._resume_623qkj$(this.stack_0.get_za3lpa$(this.stack_0.size - 1 | 0), false);
          block$result = false;
        }
         else {
          this.base_0._pop_623qkj$(v, isJump.v);
          if (!isJump.v)
            isJump.v = true;
          block$result = true;
        }
        tmp$ = block$result;
      }
      if (!tmp$)
        break;
    }
  };
  ChRouter.prototype.jump_eqdokg$ = function (holder, isIncluded) {
    if (isIncluded === void 0)
      isIncluded = true;
    var isJump = {v: false};
    var $receiver = this.stack_0;
    while (true) {
      var tmp$ = !$receiver.isEmpty();
      if (tmp$) {
        var v = $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
        var block$result;
        if (holder === v) {
          if (!isIncluded)
            this.base_0._resume_623qkj$(v, false);
          else {
            this.base_0._pop_623qkj$(v, true);
            this.base_0._resume_623qkj$(this.stack_0.get_za3lpa$(this.stack_0.size - 1 | 0), false);
          }
          block$result = false;
        }
         else {
          this.base_0._pop_623qkj$(v, isJump.v);
          if (!isJump.v)
            isJump.v = true;
          block$result = true;
        }
        tmp$ = block$result;
      }
      if (!tmp$)
        break;
    }
  };
  ChRouter.prototype.take_322k1l$ = function (holder) {
    var i = this.stack_0.lastIndexOf_11rb$(holder);
    if (i !== -1)
      this.take_za3lpa$(i);
  };
  ChRouter.prototype.take_za3lpa$ = function (index) {
    if (this.stack_0.size > index)
      this.base_0.take_6h4fti$(index, this.stack_0.removeAt_za3lpa$(index), true);
  };
  ChRouter.prototype.clear = function () {
    this.stack_0.clear();
  };
  ChRouter.prototype.action_98gap4$ = function (key, arg) {
    return !this.stack_0.isEmpty() ? last(this.stack_0).action_qbikmu$(key, arg) : false;
  };
  ChRouter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChRouter',
    interfaces: []
  };
  function ChGroupBase(group) {
    ChHolderBase.call(this);
    this.group_0 = group;
    this.display = 'block';
  }
  ChGroupBase.prototype.group_frdjly$ = function (it, d) {
    if (d === void 0)
      d = 'block';
    this.display = d;
    this.group_0 = it;
    this.group_0.innerHTML = '';
    this.restore();
  };
  ChGroupBase.prototype.push_322k1l$ = function (holder) {
    this.group_0.appendChild(holder.create_5xhuie$(this));
    this.group_0.style.display = this.display;
  };
  ChGroupBase.prototype.pop_322k1l$ = function (holder) {
    var tmp$;
    if ((tmp$ = this.group_0.lastElementChild) != null) {
      this.group_0.removeChild(tmp$);
      if (this.group_0.childElementCount === 0)
        this.group_0.style.display = 'none';
    }
  };
  ChGroupBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChGroupBase',
    interfaces: [ChHolderBase]
  };
  function ChHolderBase() {
    this.router_8be2vx$_in7tqs$_0 = this.router_8be2vx$_in7tqs$_0;
  }
  Object.defineProperty(ChHolderBase.prototype, 'router_8be2vx$', {
    get: function () {
      if (this.router_8be2vx$_in7tqs$_0 == null)
        return throwUPAE('router');
      return this.router_8be2vx$_in7tqs$_0;
    },
    set: function (router) {
      this.router_8be2vx$_in7tqs$_0 = router;
    }
  });
  ChHolderBase.prototype._push_623qkj$ = function (holder, isRestore) {
    this.push_322k1l$(holder);
    holder.push_c5k5db$(this, isRestore);
    this._resume_623qkj$(holder, isRestore);
  };
  function ChHolderBase$_pop$lambda(closure$holder, this$ChHolderBase) {
    return function () {
      this$ChHolderBase.pop_322k1l$(closure$holder);
      return Unit;
    };
  }
  ChHolderBase.prototype._pop_623qkj$ = function (holder, isJump) {
    this._pause_623qkj$(holder, isJump);
    var delay = holder.pop_c5k5db$(this, isJump);
    if (delay === 0)
      this.pop_322k1l$(holder);
    else
      window.setTimeout(ChHolderBase$_pop$lambda(holder, this), delay);
  };
  ChHolderBase.prototype._pause_623qkj$ = function (holder, isJump) {
    this.pause_322k1l$(holder);
    holder.pause_c5k5db$(this, isJump);
  };
  ChHolderBase.prototype._resume_623qkj$ = function (holder, isRestore) {
    this.resume_322k1l$(holder);
    holder.resume_c5k5db$(this, isRestore);
  };
  ChHolderBase.prototype.restore = function () {
    this.router_8be2vx$.restore();
  };
  ChHolderBase.prototype.push_322k1l$ = function (holder) {
  };
  ChHolderBase.prototype.pop_322k1l$ = function (holder) {
  };
  ChHolderBase.prototype.pause_322k1l$ = function (holder) {
  };
  ChHolderBase.prototype.resume_322k1l$ = function (holder) {
  };
  ChHolderBase.prototype.take_6h4fti$ = function (index, holder, isRestore) {
  };
  ChHolderBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChHolderBase',
    interfaces: []
  };
  function ChHolder(isJumpPoint) {
    if (isJumpPoint === void 0)
      isJumpPoint = false;
    this.isJumpPoint = isJumpPoint;
  }
  ChHolder.prototype.push_c5k5db$ = function (base, isRestore) {
  };
  ChHolder.prototype.pop_c5k5db$ = function (base, isJump) {
    return 0;
  };
  ChHolder.prototype.resume_c5k5db$ = function (base, isRestore) {
  };
  ChHolder.prototype.pause_c5k5db$ = function (base, isJump) {
  };
  ChHolder.prototype.action_qbikmu$ = function (key, arg) {
    return false;
  };
  ChHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChHolder',
    interfaces: []
  };
  function ChScanItem(view, pos) {
    Model.call(this);
    this.view = view;
    this.pos_0 = pos;
    this.collector_8be2vx$_fqn2s4$_0 = this.collector_8be2vx$_fqn2s4$_0;
    this.key_8be2vx$ = '';
    this.prop_0 = null;
    this.propVal_0 = null;
    this.template_0 = null;
    this.record_0 = null;
    this.once_0 = null;
    this.isOnce_0 = false;
  }
  Object.defineProperty(ChScanItem.prototype, 'collector_8be2vx$', {
    get: function () {
      if (this.collector_8be2vx$_fqn2s4$_0 == null)
        return throwUPAE('collector');
      return this.collector_8be2vx$_fqn2s4$_0;
    },
    set: function (collector) {
      this.collector_8be2vx$_fqn2s4$_0 = collector;
    }
  });
  var HTMLElement_0 = HTMLElement;
  ChScanItem.prototype.view_uj7sqx$ = function (v) {
    var tmp$, tmp$_0, tmp$_1;
    if (!this.pos_0.isEmpty()) {
      var t = v;
      tmp$ = this.pos_0.iterator();
      loop_label: while (tmp$.hasNext()) {
        var i = tmp$.next();
        var $receiver = t;
        var getChildAt$result;
        getChildAt$break: do {
          var tmp$_2;
          var t_0 = $receiver.firstElementChild;
          var i_0 = 0;
          while (t_0 != null) {
            if (i_0 === i) {
              getChildAt$result = Kotlin.isType(tmp$_2 = t_0, HTMLElement_0) ? tmp$_2 : throwCCE();
              break getChildAt$break;
            }
            t_0 = t_0.nextElementSibling;
            i_0 = i_0 + 1 | 0;
          }
          getChildAt$result = null;
        }
         while (false);
        t = ensureNotNull(getChildAt$result);
      }
      tmp$_0 = t;
    }
     else
      tmp$_0 = v;
    this.view = tmp$_0;
    (tmp$_1 = this.propVal_0) != null ? (tmp$_1.clear(), Unit) : null;
    this.isOnce_0 = false;
  };
  ChScanItem.prototype.style_0 = function (it) {
    var tmp$;
    tmp$ = it.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      if (typeof v === 'string' && v.charCodeAt(0) === 64) {
        var endIndex = v.length - 1 | 0;
        this.viewmodel_kwv3np$(k, split(v.substring(2, endIndex), ['.']));
      }
       else {
        this.set_bm4g0d$(k.toLowerCase(), v);
      }
    }
  };
  ChScanItem.prototype.set_bm4g0d$ = function (k, v) {
    var tmp$;
    if (v === Model$Companion_getInstance().OBJECT || v === Model$Companion_getInstance().ARRAY)
      return true;
    var V = v.toString();
    if (equals(k, 'key'))
      this.key_8be2vx$ = V;
    else if (equals(k, 'style')) {
      var $receiver = split(V, [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1;
        destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : throwCCE()).toString());
      }
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        var tmp$_3;
        if ((tmp$_3 = ChStyle_getInstance().get_61zpoe$(element)) != null) {
          this.style_0(tmp$_3);
        }
      }
    }
     else {
      if (this.once_0 == null) {
        this.once_0 = LinkedHashMap_init();
      }
      (tmp$ = this.once_0) != null ? tmp$.put_xwzc9p$(k, V) : null;
    }
    return true;
  };
  ChScanItem.prototype.viewmodel_kwv3np$ = function (k, v) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    switch (k) {
      case 'style':
        var m = LinkedHashMap_init();
        var key = '@{' + joinToString(v, '.');
        var target = ChModel_getInstance().get_mhpeer$(v);
        if ((tmp$_0 = Kotlin.isType(tmp$ = target, ChViewModel) ? tmp$ : null) != null) {
          var model = tmp$_0;
          var $receiver = ChJS_getInstance().obj.keys(model);
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
            var element = $receiver[tmp$_3];
            if (element.charCodeAt(0) !== 95) {
              var value = equals(element, 'style') ? model[element] : key + '.' + element + '}';
              m.put_xwzc9p$(element, value);
            }
          }
        }

        if (!m.isEmpty())
          this.style_0(m);
        break;
      case 'template':
        this.template_0 = Kotlin.isType(tmp$_1 = ChModel_getInstance().get_mhpeer$(v), TemplateData) ? tmp$_1 : throwCCE();
        break;
      default:if (this.prop_0 == null) {
          this.prop_0 = LinkedHashMap_init();
          this.propVal_0 = LinkedHashMap_init();
        }

        (tmp$_2 = this.prop_0) != null ? tmp$_2.put_xwzc9p$(k, v) : null;
        break;
    }
    return true;
  };
  ChScanItem.prototype.record_kwv3np$ = function (k, v) {
    var tmp$;
    if (this.record_0 == null) {
      this.record_0 = LinkedHashMap_init();
    }
    (tmp$ = this.record_0) != null ? tmp$.put_xwzc9p$(k, v) : null;
    return true;
  };
  ChScanItem.prototype.render_za3rmp$ = function (data) {
    if (data === void 0)
      data = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var isRender = {v: false};
    var col = LinkedHashMap_init();
    if (!this.isOnce_0) {
      this.isOnce_0 = true;
      if ((tmp$ = this.once_0) != null) {
        isRender.v = true;
        col.putAll_a2k3zr$(tmp$);
      }
    }
    if ((tmp$_0 = this.prop_0) != null) {
      var tmp$_3;
      tmp$_3 = tmp$_0.entries.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        var k = element.key;
        var _v = element.value;
        var tmp$_4;
        var v = {v: ChModel_getInstance().get_mhpeer$(_v)};
        if (_v.get_za3lpa$(0).charCodeAt(0) === 64) {
          var value = v.v;
          col.put_xwzc9p$(k, value);
          isRender.v = true;
        }
         else {
          if ((tmp$_4 = this.propVal_0) != null) {
            if (tmp$_4.get_11rb$(k) == null || !equals(tmp$_4.get_11rb$(k), v.v)) {
              var value_0 = v.v;
              col.put_xwzc9p$(k, value_0);
            }
            var value_1 = v.v;
            tmp$_4.put_xwzc9p$(k, value_1);
            isRender.v = true;
          }
        }
      }
    }
    if ((tmp$_1 = this.template_0) != null) {
      var key = 'template';
      col.put_xwzc9p$(key, tmp$_1);
      isRender.v = true;
    }
    if (data != null && this.record_0 != null) {
      isRender.v = true;
      if ((tmp$_2 = this.record_0) != null) {
        var tmp$_5;
        tmp$_5 = tmp$_2.entries.iterator();
        while (tmp$_5.hasNext()) {
          var element_0 = tmp$_5.next();
          var k_0 = element_0.key;
          var keys = element_0.value;
          var v_0 = {v: data};
          var tmp$_6;
          tmp$_6 = keys.iterator();
          while (tmp$_6.hasNext()) {
            var element_1 = tmp$_6.next();
            v_0.v = v_0.v[element_1];
          }
          var value_2 = v_0.v;
          col.put_xwzc9p$(k_0, value_2);
        }
      }
    }
    return col;
  };
  ChScanItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChScanItem',
    interfaces: [Model]
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function ChScanned(view, items) {
    if (items === void 0) {
      items = LinkedHashSet_init();
    }
    this.view = view;
    this.items_0 = items;
    this.keyItem_0 = LinkedHashMap_init();
  }
  ChScanned.prototype.render_ygd0zq$ = function (v, m, i, size, tmpl) {
    if (v === void 0)
      v = null;
    if (m === void 0)
      m = null;
    if (i === void 0)
      i = 0;
    if (size === void 0)
      size = 0;
    if (tmpl === void 0)
      tmpl = null;
    var isNew = v != null && v !== this.view;
    if (isNew)
      this.view = ensureNotNull(v);
    var tmp$;
    tmp$ = this.items_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (isNew)
        element.view_uj7sqx$(this.view);
      var r = element.render_za3rmp$(m);
      if (r != null) {
        var vi = element.view;
        var v_0 = vi;
        if (v_0.__chel__ == undefined)
          v_0.__chel__ = {data: {}};
        v_0.__chel__.data.index = i;
        v_0.__chel__.data.length = size;
        v_0.__chel__.data.data = m;
        v_0.__chel__.data.tmpl = tmpl;
        v_0.__chel__.data.view = this.view;
        var el = new El(vi);
        var tmp$_0;
        tmp$_0 = r.entries.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var k = element_0.key;
          var v_1 = element_0.value;
          el.set_bm4g0d$(k, v_1);
        }
      }
    }
    return this.view;
  };
  ChScanned.prototype.subView_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.keyItem_0.get_11rb$(key)) != null ? tmp$.view : null;
  };
  ChScanned.prototype.add_11rb$ = function (it) {
    if (!isBlank(it.key_8be2vx$)) {
      var $receiver = this.keyItem_0;
      var key = it.key_8be2vx$;
      $receiver.put_xwzc9p$(key, it);
    }
    return this.items_0.add_11rb$(it);
  };
  Object.defineProperty(ChScanned.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  ChScanned.prototype.addAll_brywnq$ = function (elements) {
    return this.items_0.addAll_brywnq$(elements);
  };
  ChScanned.prototype.clear = function () {
    return this.items_0.clear();
  };
  ChScanned.prototype.contains_11rb$ = function (element) {
    return this.items_0.contains_11rb$(element);
  };
  ChScanned.prototype.containsAll_brywnq$ = function (elements) {
    return this.items_0.containsAll_brywnq$(elements);
  };
  ChScanned.prototype.isEmpty = function () {
    return this.items_0.isEmpty();
  };
  ChScanned.prototype.iterator = function () {
    return this.items_0.iterator();
  };
  ChScanned.prototype.remove_11rb$ = function (element) {
    return this.items_0.remove_11rb$(element);
  };
  ChScanned.prototype.removeAll_brywnq$ = function (elements) {
    return this.items_0.removeAll_brywnq$(elements);
  };
  ChScanned.prototype.retainAll_brywnq$ = function (elements) {
    return this.items_0.retainAll_brywnq$(elements);
  };
  ChScanned.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChScanned',
    interfaces: [MutableSet]
  };
  function ChScanner() {
    ChScanner_instance = this;
    this.scanned_0 = LinkedHashMap_init();
  }
  ChScanner.prototype.get_za3rmp$ = function (k) {
    return this.scanned_0.get_11rb$(k);
  };
  var toList$lambda = wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver) {
      var r = ArrayList_init();
      var i = 0;
      while (i < $receiver.length) {
        var tmp$, tmp$_0;
        var element = Kotlin.isType(tmp$_0 = $receiver[tmp$ = i, i = tmp$ + 1 | 0, tmp$], HTMLElement_0) ? tmp$_0 : throwCCE();
        r.add_11rb$(element);
      }
      return r;
    };
  });
  ChScanner.prototype.scan_4yjp8o$ = function (view, id) {
    if (id === void 0)
      id = null;
    var $receiver = this.scanned_0;
    var tmp$;
    var prev = (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(id);
    if (prev != null && equals(prev.view, view))
      return prev;
    this.template_lt8gi4$(view);
    var result = new ChScanned(view);
    var $receiver_0 = view.querySelectorAll('[data-ch]');
    var r = ArrayList_init_0();
    var i = 0;
    while (i < $receiver_0.length) {
      var tmp$_0, tmp$_1;
      var element = Kotlin.isType(tmp$_1 = $receiver_0[tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0], HTMLElement_0) ? tmp$_1 : throwCCE();
      r.add_11rb$(element);
    }
    var st = r;
    var $receiver_1 = view.getAttribute('data-ch');
    if (!($receiver_1 == null || isBlank($receiver_1))) {
      st.add_11rb$(view);
    }
    var tmp$_2;
    tmp$_2 = st.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var tmp$_3, tmp$_4;
      var pos = ArrayList_init_0();
      var t = {v: element_0};
      var limit = 30;
      while (t.v !== view && (tmp$_3 = limit, limit = tmp$_3 - 1 | 0, tmp$_3) > 0) {
        if ((tmp$_4 = t.v.parentElement) != null) {
          var tmp$_5;
          var p = Kotlin.isType(tmp$_5 = tmp$_4, HTMLElement) ? tmp$_5 : throwCCE();
          var k = 0;
          var kt = p.firstElementChild;
          while (k < 100 && kt != null && kt !== t.v) {
            k = k + 1 | 0;
            kt = kt.nextElementSibling;
          }
          var element_1 = k;
          pos.add_11rb$(element_1);
          t.v = p;
        }
      }
      var target = new ChScanItem(element_0, pos);
      target.fromJson_61zpoe$('{' + toString_0(element_0.getAttribute('data-ch')) + '}');
      result.add_11rb$(target);
      element_0.removeAttribute('data-ch');
    }
    if (id != null) {
      this.scanned_0.put_xwzc9p$(id, result);
    }
    return result;
  };
  ChScanner.prototype.template_lt8gi4$ = function (view) {
    var $receiver = view.querySelectorAll('[data-cht]');
    var r = ArrayList_init_0();
    var i = 0;
    while (i < $receiver.length) {
      var tmp$, tmp$_0;
      var element = Kotlin.isType(tmp$_0 = $receiver[tmp$ = i, i = tmp$ + 1 | 0, tmp$], HTMLElement_0) ? tmp$_0 : throwCCE();
      r.add_11rb$(element);
    }
    var st = r;
    var $receiver_0 = view.getAttribute('data-cht');
    if (!($receiver_0 == null || isBlank($receiver_0))) {
      st.add_11rb$(view);
    }
    var tmp$_1;
    tmp$_1 = st.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2;
      (tmp$_2 = element_0.parentElement) != null ? tmp$_2.removeChild(element_0) : null;
    }
    var tmp$_3;
    tmp$_3 = st.iterator();
    while (tmp$_3.hasNext()) {
      var element_1 = tmp$_3.next();
      ChTemplate$Companion_getInstance().plusAssign_lt8gi4$(element_1);
    }
  };
  ChScanner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChScanner',
    interfaces: []
  };
  var ChScanner_instance = null;
  function ChScanner_getInstance() {
    if (ChScanner_instance === null) {
      new ChScanner();
    }
    return ChScanner_instance;
  }
  function ChTemplate(el) {
    ChTemplate$Companion_getInstance();
    Model.call(this);
    this.el = el;
    this.key_h33ylg$_0 = this.key_h33ylg$_0;
    this.scanned_ud2woj$_0 = lazy(ChTemplate$scanned$lambda(this));
  }
  function ChTemplate$Companion() {
    ChTemplate$Companion_instance = this;
    this.tmpls_0 = LinkedHashMap_init();
  }
  ChTemplate$Companion.prototype.plusAssign_lt8gi4$ = function (el) {
    var tmp$;
    var t = new ChTemplate(el);
    t.fromJson_61zpoe$('{' + toString_0((tmp$ = el.getAttribute('data-cht')) != null ? tmp$ : '') + '}');
    el.removeAttribute('data-cht');
    var $receiver = this.tmpls_0;
    var key = t.key_0;
    $receiver.put_xwzc9p$(key, t);
  };
  ChTemplate$Companion.prototype.render_x66gnj$ = function (el, data, tmpl) {
    var tmp$;
    var destination = ArrayList_init(tmpl.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== tmpl.length; ++tmp$_0) {
      var item = tmpl[tmp$_0];
      var tmp$_1 = destination.add_11rb$;
      var tmp$_2;
      tmp$_2 = this.tmpls_0.get_11rb$(item);
      if (tmp$_2 == null) {
        throw Kotlin.newThrowable('invalid tmpl ' + item);
      }
      tmp$_1.call(destination, tmp$_2);
    }
    var templates = destination;
    var d = el;
    var prev = Kotlin.isType(tmp$ = d.__ch__, RenderData) ? tmp$ : null;
    if (prev == null || !prev.check_cb6kno$(templates)) {
      prev = new RenderData(templates);
      d.__ch__ = prev;
      el.innerHTML = '';
    }
    prev.render_xes4ko$(el, data);
  };
  ChTemplate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChTemplate$Companion_instance = null;
  function ChTemplate$Companion_getInstance() {
    if (ChTemplate$Companion_instance === null) {
      new ChTemplate$Companion();
    }
    return ChTemplate$Companion_instance;
  }
  Object.defineProperty(ChTemplate.prototype, 'key_0', {
    get: function () {
      if (this.key_h33ylg$_0 == null)
        return throwUPAE('key');
      return this.key_h33ylg$_0;
    },
    set: function (key) {
      this.key_h33ylg$_0 = key;
    }
  });
  Object.defineProperty(ChTemplate.prototype, 'scanned_0', {
    get: function () {
      return this.scanned_ud2woj$_0.value;
    }
  });
  ChTemplate.prototype.set_bm4g0d$ = function (k, v) {
    if (equals(k, 'key'))
      this.key_0 = v.toString();
    return true;
  };
  ChTemplate.prototype.viewmodel_kwv3np$ = function (k, v) {
    return true;
  };
  ChTemplate.prototype.isNTH_6xvm5r$ = function (i, dSize) {
    return true;
  };
  ChTemplate.prototype.rerender_hdhptw$ = function (target, i, dSize, curr, isSkip) {
    if (this.isNTH_6xvm5r$(i, dSize)) {
      if (!isSkip)
        this.scanned_0.render_ygd0zq$(target, curr, i, dSize, this);
      return target != null ? target.nextElementSibling : null;
    }
     else
      return target;
  };
  ChTemplate.prototype.render_h8fptg$ = function (target, i, dSize, curr) {
    var tmp$;
    if (this.isNTH_6xvm5r$(i, dSize)) {
      var el = this.el.cloneNode(true);
      target.appendChild(el);
      this.scanned_0.render_ygd0zq$(Kotlin.isType(tmp$ = el, HTMLElement) ? tmp$ : throwCCE(), curr, i, dSize, this);
    }
  };
  ChTemplate.prototype.drain_hogypj$ = function (target, i, dSize) {
    var tmp$;
    var r = target.nextElementSibling;
    (tmp$ = target.parentNode) != null ? tmp$.removeChild(target) : null;
    return r;
  };
  function ChTemplate$scanned$lambda(this$ChTemplate) {
    return function () {
      return ChScanner_getInstance().scan_4yjp8o$(this$ChTemplate.el);
    };
  }
  ChTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChTemplate',
    interfaces: [Model]
  };
  function RenderData(tmpl) {
    this.tmpl_0 = tmpl;
    this.old = ArrayList_init_0();
  }
  RenderData.prototype.check_cb6kno$ = function (t) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.tmpl_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (t.get_za3lpa$(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0))) !== item)
        return false;
    }
    return true;
  };
  RenderData.prototype.render_xes4ko$ = function (el, data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (data == null)
      return;
    var oSize = this.old.size;
    var dSize = data.length;
    var j = oSize > dSize ? dSize : oSize;
    var target = {v: el.firstElementChild};
    var i = {v: 0};
    while (i.v < j) {
      var tmp$_3;
      if ((tmp$_0 = Kotlin.isType(tmp$ = target.v, HTMLElement) ? tmp$ : null) != null) {
        var curr = data[i.v];
        var v = JSON.stringify(curr);
        var isSkip = equals(v, this.old.get_za3lpa$(i.v));
        if (!isSkip)
          this.old.set_wxm5ur$(i.v, v);
        var tmp$_4;
        tmp$_4 = this.tmpl_0.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          target.v = element.rerender_hdhptw$(tmp$_0, i.v, dSize, curr, isSkip);
        }
        tmp$_3 = Unit;
      }
       else
        tmp$_3 = null;
      if (tmp$_3 == null)
        break;
      i.v = i.v + 1 | 0;
    }
    while (i.v < dSize) {
      var curr_0 = data[i.v];
      this.old.add_11rb$(JSON.stringify(curr_0));
      var tmp$_5;
      tmp$_5 = this.tmpl_0.iterator();
      while (tmp$_5.hasNext()) {
        var element_0 = tmp$_5.next();
        element_0.render_h8fptg$(el, i.v, dSize, curr_0);
      }
      i.v = i.v + 1 | 0;
    }
    while (i.v < oSize) {
      var tmp$_6;
      if ((tmp$_2 = Kotlin.isType(tmp$_1 = target.v, HTMLElement) ? tmp$_1 : null) != null) {
        this.old.removeAt_za3lpa$(this.old.size - 1 | 0);
        var tmp$_7;
        tmp$_7 = this.tmpl_0.iterator();
        while (tmp$_7.hasNext()) {
          var element_1 = tmp$_7.next();
          target.v = element_1.drain_hogypj$(tmp$_2, i.v, dSize);
        }
        tmp$_6 = Unit;
      }
       else
        tmp$_6 = null;
      if (tmp$_6 == null)
        break;
      i.v = i.v + 1 | 0;
    }
  };
  RenderData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderData',
    interfaces: []
  };
  function TemplateData(data, templates) {
    this.data = data;
    this.templates = templates;
  }
  TemplateData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TemplateData',
    interfaces: []
  };
  function Hello() {
    Hello_instance = this;
  }
  Hello.prototype.hello = function () {
    return 'asdfg';
  };
  Hello.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Hello',
    interfaces: []
  };
  var Hello_instance = null;
  function Hello_getInstance() {
    if (Hello_instance === null) {
      new Hello();
    }
    return Hello_instance;
  }
  Object.defineProperty(Ch$ApiResult, 'ok', {
    get: Ch$ApiResult$ok_getInstance
  });
  Ch$ApiResult.fail = Ch$ApiResult$fail;
  Ch.prototype.ApiResult = Ch$ApiResult;
  var package$chela = _.chela || (_.chela = {});
  var package$kotlinJS = package$chela.kotlinJS || (package$chela.kotlinJS = {});
  Object.defineProperty(package$kotlinJS, 'Ch', {
    get: Ch_getInstance
  });
  $$importsForInline$$.lib = _;
  var package$core = package$kotlinJS.core || (package$kotlinJS.core = {});
  package$core._true_jpqn4r$ = _true;
  package$core._false_jpqn4r$ = _false;
  Object.defineProperty(package$core, 'ChDate', {
    get: ChDate_getInstance
  });
  Object.defineProperty(package$core, 'ChJS', {
    get: ChJS_getInstance
  });
  Object.defineProperty(package$core, 'ChMath', {
    get: ChMath_getInstance
  });
  package$core._toString_afpb6f$ = _toString;
  package$core._stringify_1yd8za$ = _stringify;
  package$core._shift_32wrs0$ = _shift;
  package$core._pop_32wrs0$ = _pop;
  package$core._notEmpty_pz0c7t$ = _notEmpty;
  package$core._allStack_gnw1bc$ = _allStack;
  package$core._cutStack_gnw1bc$ = _cutStack;
  package$core.toJSON = toJSON;
  package$core._toJSON_go3l1a$ = _toJSON;
  package$core._JSON_go3l1a$ = _JSON;
  package$core.toList_d3eamm$ = toList_0;
  package$core._try_klfg04$ = _try;
  package$core._requiredNotNull_mprak0$ = _requiredNotNull;
  package$core._shift_pdl1vz$ = _shift_0;
  package$core._pop_pdl1vz$ = _pop_0;
  package$core._firstUpper_pdl1vz$ = _firstUpper;
  package$core._firstLower_pdl1vz$ = _firstLower;
  package$core._notBlank_u9ujr0$ = _notBlank;
  package$core._split_rjktp$ = _split;
  package$core.uuid = uuid_0;
  var package$crypto = package$kotlinJS.crypto || (package$kotlinJS.crypto = {});
  Object.defineProperty(package$crypto, 'Chcrypto', {
    get: Chcrypto_getInstance
  });
  Object.defineProperty(package$crypto, 'AES256', {
    get: AES256_getInstance
  });
  var package$dom = package$kotlinJS.dom || (package$kotlinJS.dom = {});
  package$dom.ChEvent = ChEvent;
  Object.defineProperty(package$dom, 'ChDom', {
    get: ChDom_getInstance
  });
  Object.defineProperty(El, 'Companion', {
    get: El$Companion_getInstance
  });
  package$dom.El = El;
  package$dom.getChildAt_r4ncir$ = getChildAt;
  var package$i18n = package$kotlinJS.i18n || (package$kotlinJS.i18n = {});
  Object.defineProperty(package$i18n, 'ChI18n', {
    get: ChI18n_getInstance
  });
  var package$looper = package$kotlinJS.looper || (package$kotlinJS.looper = {});
  package$looper.ChItem = ChItem;
  package$looper.ChLooper = ChLooper;
  Object.defineProperty(ItemDSL, 'Companion', {
    get: ItemDSL$Companion_getInstance
  });
  package$looper.ItemDSL = ItemDSL;
  package$looper.Sequence = Sequence;
  var package$model = package$kotlinJS.model || (package$kotlinJS.model = {});
  Object.defineProperty(package$model, 'ChModel', {
    get: ChModel_getInstance
  });
  Object.defineProperty(Model, 'Companion', {
    get: Model$Companion_getInstance
  });
  package$model.Model = Model;
  Object.defineProperty(ChHttp, 'Companion', {
    get: ChHttp$Companion_getInstance
  });
  var package$net = package$kotlinJS.net || (package$kotlinJS.net = {});
  package$net.ChHttp = ChHttp;
  package$net.ChFetch = ChFetch;
  Object.defineProperty(package$net, 'ChNet', {
    get: ChNet_getInstance
  });
  package$net.ChResponse = ChResponse;
  var package$regex = package$kotlinJS.regex || (package$kotlinJS.regex = {});
  package$regex.ChRegex = ChRegex;
  Object.defineProperty(package$regex, 'reK', {
    get: reK_getInstance
  });
  Object.defineProperty(package$regex, 'reParam', {
    get: reParam_getInstance
  });
  Object.defineProperty(package$regex, 'reQueryParam', {
    get: reQueryParam_getInstance
  });
  Object.defineProperty(package$regex, 'reStyle', {
    get: reStyle_getInstance
  });
  Object.defineProperty(package$regex, 'reTrimLine', {
    get: reTrimLine_getInstance
  });
  Object.defineProperty(package$regex, 'reV', {
    get: reV_getInstance
  });
  Api.ApiRequest = Api$ApiRequest;
  var package$resource = package$kotlinJS.resource || (package$kotlinJS.resource = {});
  package$resource.Api = Api;
  var package$kotlin = package$chela.kotlin || (package$chela.kotlin = {});
  var package$resource_0 = package$kotlin.resource || (package$kotlin.resource = {});
  Object.defineProperty(package$resource_0, 'ChRes', {
    get: ChRes_getInstance
  });
  package$resource.Db = Db;
  package$resource.I18n = I18n;
  var package$sql = package$kotlinJS.sql || (package$kotlinJS.sql = {});
  package$sql.ChQuery = ChQuery;
  Object.defineProperty(package$sql, 'ChSql', {
    get: ChSql_getInstance
  });
  Object.defineProperty(DataBase, 'Companion', {
    get: DataBase$Companion_getInstance
  });
  package$sql.DataBase = DataBase;
  Object.defineProperty(Delete, 'Companion', {
    get: Delete$Companion_getInstance
  });
  package$sql.Delete = Delete;
  Object.defineProperty(Insert, 'Companion', {
    get: Insert$Companion_getInstance
  });
  package$sql.Insert = Insert;
  package$sql.Query = Query;
  Object.defineProperty(Select, 'Companion', {
    get: Select$Companion_getInstance
  });
  package$sql.Select = Select;
  Object.defineProperty(ChRule, 'Companion', {
    get: ChRule$Companion_getInstance
  });
  var package$validation = package$kotlinJS.validation || (package$kotlinJS.validation = {});
  package$validation.ChRule = ChRule;
  Object.defineProperty(ChRuleSet, 'Companion', {
    get: ChRuleSet$Companion_getInstance
  });
  package$validation.ChRuleSet = ChRuleSet;
  var package$rule = package$validation.rule || (package$validation.rule = {});
  Object.defineProperty(package$rule, 'BaseRules', {
    get: BaseRules_getInstance
  });
  Object.defineProperty(package$rule, 'RegRules', {
    get: RegRules_getInstance
  });
  Object.defineProperty(package$rule, 'TypeRules', {
    get: TypeRules_getInstance
  });
  var package$view = package$kotlinJS.view || (package$kotlinJS.view = {});
  Object.defineProperty(package$view, 'ChStyle', {
    get: ChStyle_getInstance
  });
  package$view.ChViewModel = ChViewModel;
  var package$router = package$view.router || (package$view.router = {});
  package$router.ChRouter = ChRouter;
  var package$holder = package$router.holder || (package$router.holder = {});
  package$holder.ChGroupBase = ChGroupBase;
  package$holder.ChHolderBase = ChHolderBase;
  package$holder.ChHolder = ChHolder;
  var package$scanner = package$view.scanner || (package$view.scanner = {});
  package$scanner.ChScanItem = ChScanItem;
  package$scanner.ChScanned = ChScanned;
  Object.defineProperty(package$scanner, 'ChScanner', {
    get: ChScanner_getInstance
  });
  Object.defineProperty(ChTemplate, 'Companion', {
    get: ChTemplate$Companion_getInstance
  });
  var package$template = package$scanner.template || (package$scanner.template = {});
  package$template.ChTemplate = ChTemplate;
  package$template.RenderData = RenderData;
  package$template.TemplateData = TemplateData;
  Object.defineProperty(_, 'Hello', {
    get: Hello_getInstance
  });
  var $receiver = split_0('3b99e3e0-7598-11e8-90be-95472fb3ecbd', Kotlin.charArrayOf(45));
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(item.length);
  }
  uuid = destination;
  PI = math.PI;
  HPI = PI / 2;
  Kotlin.defineModule('lib', _);
  return _;
}(typeof lib === 'undefined' ? {} : lib, kotlin);
