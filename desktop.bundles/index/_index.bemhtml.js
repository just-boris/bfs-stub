(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "image") {
            if (!$$elem) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (!$$mods.type && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b2(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            if ($$elem === "control") {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$1() {
                        var __$r__$2;
                        var __$l0__$3 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$2 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$3;
                        return __$r__$2;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "form") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b36(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$63() {
                    var __$r__$64;
                    var __$l0__$65 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$64 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$65;
                    return __$r__$64;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$66() {
                    var __$r__$67;
                    var __$l0__$68 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$67 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$68;
                    return __$r__$67;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        if ($$block === "button" && !$$elem) {
            return [ {
                elem: "control"
            } ];
        }
        return undefined;
    } else if (__$t === "default") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b63(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b64(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_input__control"] = undefined;
        ctx["_input"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx;
    return {
        src: ctx__$0.url,
        width: ctx__$0.width,
        height: ctx__$0.height,
        alt: ctx__$0.alt,
        title: ctx__$0.title
    };
}

function __$b2(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx, attrs__$7 = {};
    ctx__$6.tag || (attrs__$7.type = ctx__$6.type || "button");
    ctx__$6.name && (attrs__$7.name = ctx__$6.name);
    ctx__$6.val && (attrs__$7.value = ctx__$6.val);
    $$mods.disabled && (attrs__$7.disabled = "disabled");
    return __$ctx._.extend(function __$lb__$8() {
        var __$r__$9;
        var __$l0__$10 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$9 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$10;
        return __$r__$9;
    }(), attrs__$7);
}

function __$b3(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx, attrs__$12 = {
        role: "button"
    };
    ctx__$11.tabIndex && (attrs__$12.tabindex = ctx__$11.tabIndex);
    return attrs__$12;
}

function __$b4(__$ctx, __$ref) {
    var input__$36 = __$ctx._input, attrs__$37 = {
        id: input__$36.id,
        name: input__$36.name,
        value: input__$36.val,
        maxlength: input__$36.maxLength,
        tabindex: input__$36.tabIndex,
        placeholder: input__$36.placeholder
    };
    input__$36.autocomplete === false && (attrs__$37.autocomplete = "off");
    $$mods.disabled && (attrs__$37.disabled = "disabled");
    return attrs__$37;
}

function __$b34(__$ctx, __$ref) {
    var ctx__$4 = __$ctx.ctx, content__$5 = [ __$ctx.ctx.icon ];
    ctx__$4.text && content__$5.push({
        elem: "text",
        content: ctx__$4.text
    });
    return content__$5;
}

function __$b36(__$ctx, __$ref) {
    var ctx__$38 = __$ctx.ctx, content__$39 = [ {
        elem: "control"
    } ];
    ctx__$38.label && content__$39.unshift({
        elem: "label",
        content: ctx__$38.label
    });
    return content__$39;
}

function __$b43(__$ctx, __$ref) {
    var mods__$13 = $$mods;
    var __$r__$15;
    var __$l0__$16 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$18;
    var __$l1__$19 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$18 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$19;
    __$r__$15 = __$r__$18;
    __$ctx._button = __$l0__$16;
    return;
}

function __$b44(__$ctx, __$ref) {
    var __$r__$21;
    var __$l0__$22 = $$mode;
    $$mode = "";
    var __$l1__$23 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: [ __$ctx.ctx, {
            elem: "clear"
        } ]
    };
    var __$l2__$24 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$26;
    var __$l3__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$27;
    __$r__$21 = __$r__$26;
    $$mode = __$l0__$22;
    __$ctx.ctx = __$l1__$23;
    __$ctx._input__control = __$l2__$24;
    return;
}

function __$b45(__$ctx, __$ref) {
    var __$r__$29;
    var __$l0__$30 = $$mode;
    $$mode = "";
    var __$l1__$31 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: __$ctx.ctx
    };
    var __$l2__$32 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$34;
    var __$l3__$35 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$34 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$35;
    __$r__$29 = __$r__$34;
    $$mode = __$l0__$30;
    __$ctx.ctx = __$l1__$31;
    __$ctx._input__control = __$l2__$32;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ctx__$40 = __$ctx.ctx;
    ctx__$40.id = ctx__$40.id || __$ctx.generateId();
    var __$r__$42;
    var __$l0__$43 = __$ctx._input;
    __$ctx._input = ctx__$40;
    var __$r__$45;
    var __$l1__$46 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$45 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$46;
    __$r__$42 = __$r__$45;
    __$ctx._input = __$l0__$43;
    return;
}

function __$b47(__$ctx, __$ref) {
    var url__$47 = __$ctx.ctx.url;
    var __$r__$49;
    var __$l0__$50 = $$mode;
    $$mode = "";
    var __$l1__$51 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$47 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$53;
    var __$l2__$54 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$53 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$54;
    __$r__$49 = __$r__$53;
    $$mode = __$l0__$50;
    __$ctx.ctx = __$l1__$51;
    return;
}

function __$b48(__$ctx, __$ref) {
    var ie__$55 = __$ctx.ctx.ie, hideRule__$56 = !ie__$55 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$55 === "!IE" ? [ ie__$55, "<!-->", "<!--" ] : [ ie__$55, "", "" ];
    var __$r__$58;
    var __$l0__$59 = $$mode;
    $$mode = "";
    var __$l3__$60 = __$ctx.ctx;
    var __$l1__$61 = __$l3__$60._ieCommented;
    __$l3__$60._ieCommented = true;
    var __$l2__$62 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$56[0] + "]>" + hideRule__$56[1], __$ctx.ctx, hideRule__$56[2] + "<![endif]-->" ];
    __$r__$58 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$59;
    __$l3__$60._ieCommented = __$l1__$61;
    __$ctx.ctx = __$l2__$62;
    return;
}

function __$b49(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$69 = __$ctx.ctx;
    var __$r__$71;
    var __$l0__$72 = $$mode;
    $$mode = "";
    var __$l1__$73 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$69.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$69.title
            }, {
                block: "ua"
            }, ctx__$69.head, ctx__$69.styles, ctx__$69.favicon ? {
                elem: "favicon",
                url: ctx__$69.favicon
            } : "" ]
        }, ctx__$69 ]
    } ];
    var __$r__$75;
    var __$l2__$76 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$75 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$76;
    __$r__$71 = __$r__$75;
    $$mode = __$l0__$72;
    __$ctx.ctx = __$l1__$73;
    __$ctx._defPageApplied = false;
    return;
}

function __$b50(__$ctx, __$ref) {
    var BEM_INTERNAL__$77 = __$ctx.BEM.INTERNAL, ctx__$78 = __$ctx.ctx, isBEM__$79, tag__$80, res__$81;
    var __$r__$83;
    var __$l0__$84 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$85 = $$block;
    var __$r__$87;
    var __$l1__$88 = $$mode;
    $$mode = "tag";
    __$r__$87 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$88;
    tag__$80 = __$r__$87;
    typeof tag__$80 !== "undefined" || (tag__$80 = ctx__$78.tag);
    typeof tag__$80 !== "undefined" || (tag__$80 = "div");
    if (tag__$80) {
        var jsParams__$89, js__$90;
        if (vBlock__$85 && ctx__$78.js !== false) {
            var __$r__$91;
            var __$l2__$92 = $$mode;
            $$mode = "js";
            __$r__$91 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$92;
            js__$90 = __$r__$91;
            js__$90 = js__$90 ? __$ctx.extend(ctx__$78.js, js__$90 === true ? {} : js__$90) : ctx__$78.js === true ? {} : ctx__$78.js;
            js__$90 && ((jsParams__$89 = {})[BEM_INTERNAL__$77.buildClass(vBlock__$85, ctx__$78.elem)] = js__$90);
        }
        __$ctx._str += "<" + tag__$80;
        var __$r__$93;
        var __$l3__$94 = $$mode;
        $$mode = "bem";
        __$r__$93 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$94;
        isBEM__$79 = __$r__$93;
        typeof isBEM__$79 !== "undefined" || (isBEM__$79 = typeof ctx__$78.bem !== "undefined" ? ctx__$78.bem : ctx__$78.block || ctx__$78.elem);
        var __$r__$96;
        var __$l4__$97 = $$mode;
        $$mode = "cls";
        __$r__$96 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$97;
        var cls__$95 = __$r__$96;
        cls__$95 || (cls__$95 = ctx__$78.cls);
        var addJSInitClass__$98 = ctx__$78.block && jsParams__$89;
        if (isBEM__$79 || cls__$95) {
            __$ctx._str += ' class="';
            if (isBEM__$79) {
                __$ctx._str += BEM_INTERNAL__$77.buildClasses(vBlock__$85, ctx__$78.elem, ctx__$78.elemMods || ctx__$78.mods);
                var __$r__$100;
                var __$l5__$101 = $$mode;
                $$mode = "mix";
                __$r__$100 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$101;
                var mix__$99 = __$r__$100;
                ctx__$78.mix && (mix__$99 = mix__$99 ? [].concat(mix__$99, ctx__$78.mix) : ctx__$78.mix);
                if (mix__$99) {
                    var visited__$102 = {}, visitedKey__$103 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$102[visitedKey__$103(vBlock__$85, $$elem)] = true;
                    __$ctx.isArray(mix__$99) || (mix__$99 = [ mix__$99 ]);
                    for (var i__$104 = 0; i__$104 < mix__$99.length; i__$104++) {
                        var mixItem__$105 = mix__$99[i__$104], hasItem__$106 = mixItem__$105.block || mixItem__$105.elem, mixBlock__$107 = mixItem__$105.block || mixItem__$105._block || $$block, mixElem__$108 = mixItem__$105.elem || mixItem__$105._elem || $$elem;
                        hasItem__$106 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$77[hasItem__$106 ? "buildClasses" : "buildModsClasses"](mixBlock__$107, mixItem__$105.elem || mixItem__$105._elem || (mixItem__$105.block ? undefined : $$elem), mixItem__$105.elemMods || mixItem__$105.mods);
                        if (mixItem__$105.js) {
                            (jsParams__$89 || (jsParams__$89 = {}))[BEM_INTERNAL__$77.buildClass(mixBlock__$107, mixItem__$105.elem)] = mixItem__$105.js === true ? {} : mixItem__$105.js;
                            addJSInitClass__$98 || (addJSInitClass__$98 = mixBlock__$107 && !mixItem__$105.elem);
                        }
                        if (hasItem__$106 && !visited__$102[visitedKey__$103(mixBlock__$107, mixElem__$108)]) {
                            visited__$102[visitedKey__$103(mixBlock__$107, mixElem__$108)] = true;
                            var __$r__$110;
                            var __$l6__$111 = $$mode;
                            $$mode = "mix";
                            var __$l7__$112 = $$block;
                            $$block = mixBlock__$107;
                            var __$l8__$113 = $$elem;
                            $$elem = mixElem__$108;
                            __$r__$110 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$111;
                            $$block = __$l7__$112;
                            $$elem = __$l8__$113;
                            var nestedMix__$109 = __$r__$110;
                            if (nestedMix__$109) {
                                for (var j__$114 = 0; j__$114 < nestedMix__$109.length; j__$114++) {
                                    var nestedItem__$115 = nestedMix__$109[j__$114];
                                    if (!nestedItem__$115.block && !nestedItem__$115.elem || !visited__$102[visitedKey__$103(nestedItem__$115.block, nestedItem__$115.elem)]) {
                                        nestedItem__$115._block = mixBlock__$107;
                                        nestedItem__$115._elem = mixElem__$108;
                                        mix__$99.splice(i__$104 + 1, 0, nestedItem__$115);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$95 && (__$ctx._str += isBEM__$79 ? " " + cls__$95 : cls__$95);
            __$ctx._str += addJSInitClass__$98 ? ' i-bem"' : '"';
        }
        if (isBEM__$79 && jsParams__$89) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$89)) + '"';
        }
        var __$r__$117;
        var __$l9__$118 = $$mode;
        $$mode = "attrs";
        __$r__$117 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$118;
        var attrs__$116 = __$r__$117;
        attrs__$116 = __$ctx.extend(attrs__$116, ctx__$78.attrs);
        if (attrs__$116) {
            var name__$119, attr__$120;
            for (name__$119 in attrs__$116) {
                attr__$120 = attrs__$116[name__$119];
                if (typeof attr__$120 === "undefined") continue;
                __$ctx._str += " " + name__$119 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$120) ? attr__$120 : __$ctx.reapply(attr__$120)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$80)) {
        __$ctx._str += "/>";
    } else {
        tag__$80 && (__$ctx._str += ">");
        var __$r__$122;
        var __$l10__$123 = $$mode;
        $$mode = "content";
        __$r__$122 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$123;
        var content__$121 = __$r__$122;
        if (content__$121 || content__$121 === 0) {
            isBEM__$79 = vBlock__$85 || $$elem;
            var __$r__$124;
            var __$l11__$125 = $$mode;
            $$mode = "";
            var __$l12__$126 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$127 = __$ctx.position;
            __$ctx.position = isBEM__$79 ? 1 : __$ctx.position;
            var __$l14__$128 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$79 ? 1 : __$ctx._listLength;
            var __$l15__$129 = __$ctx.ctx;
            __$ctx.ctx = content__$121;
            __$r__$124 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$125;
            __$ctx._notNewList = __$l12__$126;
            __$ctx.position = __$l13__$127;
            __$ctx._listLength = __$l14__$128;
            __$ctx.ctx = __$l15__$129;
        }
        tag__$80 && (__$ctx._str += "</" + tag__$80 + ">");
    }
    res__$81 = __$ctx._str;
    __$r__$83 = undefined;
    __$ctx._str = __$l0__$84;
    __$ctx._buf.push(res__$81);
    return;
}

function __$b60(__$ctx, __$ref) {
    var __$r__$131;
    var __$l0__$132 = $$mode;
    $$mode = "";
    var __$l1__$133 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$135;
    var __$l2__$136 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$135 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$136;
    __$r__$131 = __$r__$135;
    $$mode = __$l0__$132;
    __$ctx.ctx = __$l1__$133;
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$137 = __$ctx.ctx;
    if (ctx__$137 && ctx__$137 !== true || ctx__$137 === 0) {
        __$ctx._str += ctx__$137 + "";
    }
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b63(__$ctx, __$ref) {
    var ctx__$138 = __$ctx.ctx, len__$139 = ctx__$138.length, i__$140 = 0, prevPos__$141 = __$ctx.position, prevNotNewList__$142 = __$ctx._notNewList;
    if (prevNotNewList__$142) {
        __$ctx._listLength += len__$139 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$139;
    }
    __$ctx._notNewList = true;
    while (i__$140 < len__$139) (function __$lb__$143() {
        var __$r__$144;
        var __$l0__$145 = __$ctx.ctx;
        __$ctx.ctx = ctx__$138[i__$140++];
        __$r__$144 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$145;
        return __$r__$144;
    })();
    prevNotNewList__$142 || (__$ctx.position = prevPos__$141);
    return;
}

function __$b64(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$146 = __$ctx.ctx.block, vElem__$147 = __$ctx.ctx.elem, block__$148 = __$ctx._currBlock || $$block;
    var __$r__$150;
    var __$l0__$151 = $$mode;
    $$mode = "default";
    var __$l1__$152 = $$block;
    $$block = vBlock__$146 || (vElem__$147 ? block__$148 : undefined);
    var __$l2__$153 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$146 || vElem__$147 ? undefined : block__$148;
    var __$l3__$154 = $$elem;
    $$elem = vElem__$147;
    var __$l4__$155 = $$mods;
    $$mods = vBlock__$146 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$156 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$150 = undefined;
    $$mode = __$l0__$151;
    $$block = __$l1__$152;
    __$ctx._currBlock = __$l2__$153;
    $$elem = __$l3__$154;
    $$mods = __$l4__$155;
    $$elemMods = __$l5__$156;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "image") {
        if (!$$elem) {
            return "img";
        }
    } else if (__$t === "spin") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "clear") {
            return "i";
        } else if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "form") {
        if (!$$elem) {
            return "form";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        }
        if (!$$elem) {
            return "body";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b43(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            var __$t = !__$ctx._input__control;
            if (__$t) {
                if ($$mods && $$mods["has-clear"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$b44(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if ((__$ctx.__$a0 & 16) === 0) {
                    var __$r = __$b45(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 64) === 0) {
                        var __$r = __$b47(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b48(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b50(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);