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
    if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
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
                var __$r = __$b25(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b27(__$ctx, __$ref);
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
                }, function __$lb__$62() {
                    var __$r__$63;
                    var __$l0__$64 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$63 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$64;
                    return __$r__$63;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$65() {
                    var __$r__$66;
                    var __$l0__$67 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$66 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$67;
                    return __$r__$66;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (!$$mods.type && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b32(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            if ($$elem === "control") {
                var __$r = __$b34(__$ctx, __$ref);
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
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b62(__$ctx, __$ref);
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

function __$b25(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ __$ctx.ctx.icon ];
    ctx__$3.text && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$37 = __$ctx.ctx, content__$38 = [ {
        elem: "control"
    } ];
    ctx__$37.label && content__$38.unshift({
        elem: "label",
        content: ctx__$37.label
    });
    return content__$38;
}

function __$b32(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, attrs__$6 = {};
    ctx__$5.tag || (attrs__$6.type = ctx__$5.type || "button");
    ctx__$5.name && (attrs__$6.name = ctx__$5.name);
    ctx__$5.val && (attrs__$6.value = ctx__$5.val);
    $$mods.disabled && (attrs__$6.disabled = "disabled");
    return __$ctx._.extend(function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), attrs__$6);
}

function __$b33(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx, attrs__$11 = {
        role: "button"
    };
    ctx__$10.tabIndex && (attrs__$11.tabindex = ctx__$10.tabIndex);
    return attrs__$11;
}

function __$b34(__$ctx, __$ref) {
    var input__$35 = __$ctx._input, attrs__$36 = {
        id: input__$35.id,
        name: input__$35.name,
        value: input__$35.val,
        maxlength: input__$35.maxLength,
        tabindex: input__$35.tabIndex,
        placeholder: input__$35.placeholder
    };
    input__$35.autocomplete === false && (attrs__$36.autocomplete = "off");
    $$mods.disabled && (attrs__$36.disabled = "disabled");
    return attrs__$36;
}

function __$b41(__$ctx, __$ref) {
    var mods__$12 = $$mods;
    var __$r__$14;
    var __$l0__$15 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._button = __$l0__$15;
    return;
}

function __$b42(__$ctx, __$ref) {
    var __$r__$20;
    var __$l0__$21 = $$mode;
    $$mode = "";
    var __$l1__$22 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: [ __$ctx.ctx, {
            elem: "clear"
        } ]
    };
    var __$l2__$23 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$25;
    var __$l3__$26 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$25 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$26;
    __$r__$20 = __$r__$25;
    $$mode = __$l0__$21;
    __$ctx.ctx = __$l1__$22;
    __$ctx._input__control = __$l2__$23;
    return;
}

function __$b43(__$ctx, __$ref) {
    var __$r__$28;
    var __$l0__$29 = $$mode;
    $$mode = "";
    var __$l1__$30 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: __$ctx.ctx
    };
    var __$l2__$31 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$33;
    var __$l3__$34 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$33 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$34;
    __$r__$28 = __$r__$33;
    $$mode = __$l0__$29;
    __$ctx.ctx = __$l1__$30;
    __$ctx._input__control = __$l2__$31;
    return;
}

function __$b44(__$ctx, __$ref) {
    var ctx__$39 = __$ctx.ctx;
    ctx__$39.id = ctx__$39.id || __$ctx.generateId();
    var __$r__$41;
    var __$l0__$42 = __$ctx._input;
    __$ctx._input = ctx__$39;
    var __$r__$44;
    var __$l1__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$45;
    __$r__$41 = __$r__$44;
    __$ctx._input = __$l0__$42;
    return;
}

function __$b45(__$ctx, __$ref) {
    var url__$46 = __$ctx.ctx.url;
    var __$r__$48;
    var __$l0__$49 = $$mode;
    $$mode = "";
    var __$l1__$50 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$46 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$52;
    var __$l2__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$53;
    __$r__$48 = __$r__$52;
    $$mode = __$l0__$49;
    __$ctx.ctx = __$l1__$50;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ie__$54 = __$ctx.ctx.ie, hideRule__$55 = !ie__$54 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$54 === "!IE" ? [ ie__$54, "<!-->", "<!--" ] : [ ie__$54, "", "" ];
    var __$r__$57;
    var __$l0__$58 = $$mode;
    $$mode = "";
    var __$l3__$59 = __$ctx.ctx;
    var __$l1__$60 = __$l3__$59._ieCommented;
    __$l3__$59._ieCommented = true;
    var __$l2__$61 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$55[0] + "]>" + hideRule__$55[1], __$ctx.ctx, hideRule__$55[2] + "<![endif]-->" ];
    __$r__$57 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$58;
    __$l3__$59._ieCommented = __$l1__$60;
    __$ctx.ctx = __$l2__$61;
    return;
}

function __$b47(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$68 = __$ctx.ctx;
    var __$r__$70;
    var __$l0__$71 = $$mode;
    $$mode = "";
    var __$l1__$72 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$68.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$68.title
            }, {
                block: "ua"
            }, ctx__$68.head, ctx__$68.styles, ctx__$68.favicon ? {
                elem: "favicon",
                url: ctx__$68.favicon
            } : "" ]
        }, ctx__$68 ]
    } ];
    var __$r__$74;
    var __$l2__$75 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$74 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$75;
    __$r__$70 = __$r__$74;
    $$mode = __$l0__$71;
    __$ctx.ctx = __$l1__$72;
    __$ctx._defPageApplied = false;
    return;
}

function __$b48(__$ctx, __$ref) {
    var BEM_INTERNAL__$76 = __$ctx.BEM.INTERNAL, ctx__$77 = __$ctx.ctx, isBEM__$78, tag__$79, res__$80;
    var __$r__$82;
    var __$l0__$83 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$84 = $$block;
    var __$r__$86;
    var __$l1__$87 = $$mode;
    $$mode = "tag";
    __$r__$86 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$87;
    tag__$79 = __$r__$86;
    typeof tag__$79 !== "undefined" || (tag__$79 = ctx__$77.tag);
    typeof tag__$79 !== "undefined" || (tag__$79 = "div");
    if (tag__$79) {
        var jsParams__$88, js__$89;
        if (vBlock__$84 && ctx__$77.js !== false) {
            var __$r__$90;
            var __$l2__$91 = $$mode;
            $$mode = "js";
            __$r__$90 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$91;
            js__$89 = __$r__$90;
            js__$89 = js__$89 ? __$ctx.extend(ctx__$77.js, js__$89 === true ? {} : js__$89) : ctx__$77.js === true ? {} : ctx__$77.js;
            js__$89 && ((jsParams__$88 = {})[BEM_INTERNAL__$76.buildClass(vBlock__$84, ctx__$77.elem)] = js__$89);
        }
        __$ctx._str += "<" + tag__$79;
        var __$r__$92;
        var __$l3__$93 = $$mode;
        $$mode = "bem";
        __$r__$92 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$93;
        isBEM__$78 = __$r__$92;
        typeof isBEM__$78 !== "undefined" || (isBEM__$78 = typeof ctx__$77.bem !== "undefined" ? ctx__$77.bem : ctx__$77.block || ctx__$77.elem);
        var __$r__$95;
        var __$l4__$96 = $$mode;
        $$mode = "cls";
        __$r__$95 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$96;
        var cls__$94 = __$r__$95;
        cls__$94 || (cls__$94 = ctx__$77.cls);
        var addJSInitClass__$97 = ctx__$77.block && jsParams__$88;
        if (isBEM__$78 || cls__$94) {
            __$ctx._str += ' class="';
            if (isBEM__$78) {
                __$ctx._str += BEM_INTERNAL__$76.buildClasses(vBlock__$84, ctx__$77.elem, ctx__$77.elemMods || ctx__$77.mods);
                var __$r__$99;
                var __$l5__$100 = $$mode;
                $$mode = "mix";
                __$r__$99 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$100;
                var mix__$98 = __$r__$99;
                ctx__$77.mix && (mix__$98 = mix__$98 ? [].concat(mix__$98, ctx__$77.mix) : ctx__$77.mix);
                if (mix__$98) {
                    var visited__$101 = {}, visitedKey__$102 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$101[visitedKey__$102(vBlock__$84, $$elem)] = true;
                    __$ctx.isArray(mix__$98) || (mix__$98 = [ mix__$98 ]);
                    for (var i__$103 = 0; i__$103 < mix__$98.length; i__$103++) {
                        var mixItem__$104 = mix__$98[i__$103], hasItem__$105 = mixItem__$104.block || mixItem__$104.elem, mixBlock__$106 = mixItem__$104.block || mixItem__$104._block || $$block, mixElem__$107 = mixItem__$104.elem || mixItem__$104._elem || $$elem;
                        hasItem__$105 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$76[hasItem__$105 ? "buildClasses" : "buildModsClasses"](mixBlock__$106, mixItem__$104.elem || mixItem__$104._elem || (mixItem__$104.block ? undefined : $$elem), mixItem__$104.elemMods || mixItem__$104.mods);
                        if (mixItem__$104.js) {
                            (jsParams__$88 || (jsParams__$88 = {}))[BEM_INTERNAL__$76.buildClass(mixBlock__$106, mixItem__$104.elem)] = mixItem__$104.js === true ? {} : mixItem__$104.js;
                            addJSInitClass__$97 || (addJSInitClass__$97 = mixBlock__$106 && !mixItem__$104.elem);
                        }
                        if (hasItem__$105 && !visited__$101[visitedKey__$102(mixBlock__$106, mixElem__$107)]) {
                            visited__$101[visitedKey__$102(mixBlock__$106, mixElem__$107)] = true;
                            var __$r__$109;
                            var __$l6__$110 = $$mode;
                            $$mode = "mix";
                            var __$l7__$111 = $$block;
                            $$block = mixBlock__$106;
                            var __$l8__$112 = $$elem;
                            $$elem = mixElem__$107;
                            __$r__$109 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$110;
                            $$block = __$l7__$111;
                            $$elem = __$l8__$112;
                            var nestedMix__$108 = __$r__$109;
                            if (nestedMix__$108) {
                                for (var j__$113 = 0; j__$113 < nestedMix__$108.length; j__$113++) {
                                    var nestedItem__$114 = nestedMix__$108[j__$113];
                                    if (!nestedItem__$114.block && !nestedItem__$114.elem || !visited__$101[visitedKey__$102(nestedItem__$114.block, nestedItem__$114.elem)]) {
                                        nestedItem__$114._block = mixBlock__$106;
                                        nestedItem__$114._elem = mixElem__$107;
                                        mix__$98.splice(i__$103 + 1, 0, nestedItem__$114);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$94 && (__$ctx._str += isBEM__$78 ? " " + cls__$94 : cls__$94);
            __$ctx._str += addJSInitClass__$97 ? ' i-bem"' : '"';
        }
        if (isBEM__$78 && jsParams__$88) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$88)) + '"';
        }
        var __$r__$116;
        var __$l9__$117 = $$mode;
        $$mode = "attrs";
        __$r__$116 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$117;
        var attrs__$115 = __$r__$116;
        attrs__$115 = __$ctx.extend(attrs__$115, ctx__$77.attrs);
        if (attrs__$115) {
            var name__$118, attr__$119;
            for (name__$118 in attrs__$115) {
                attr__$119 = attrs__$115[name__$118];
                if (typeof attr__$119 === "undefined") continue;
                __$ctx._str += " " + name__$118 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$119) ? attr__$119 : __$ctx.reapply(attr__$119)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$79)) {
        __$ctx._str += "/>";
    } else {
        tag__$79 && (__$ctx._str += ">");
        var __$r__$121;
        var __$l10__$122 = $$mode;
        $$mode = "content";
        __$r__$121 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$122;
        var content__$120 = __$r__$121;
        if (content__$120 || content__$120 === 0) {
            isBEM__$78 = vBlock__$84 || $$elem;
            var __$r__$123;
            var __$l11__$124 = $$mode;
            $$mode = "";
            var __$l12__$125 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$126 = __$ctx.position;
            __$ctx.position = isBEM__$78 ? 1 : __$ctx.position;
            var __$l14__$127 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$78 ? 1 : __$ctx._listLength;
            var __$l15__$128 = __$ctx.ctx;
            __$ctx.ctx = content__$120;
            __$r__$123 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$124;
            __$ctx._notNewList = __$l12__$125;
            __$ctx.position = __$l13__$126;
            __$ctx._listLength = __$l14__$127;
            __$ctx.ctx = __$l15__$128;
        }
        tag__$79 && (__$ctx._str += "</" + tag__$79 + ">");
    }
    res__$80 = __$ctx._str;
    __$r__$82 = undefined;
    __$ctx._str = __$l0__$83;
    __$ctx._buf.push(res__$80);
    return;
}

function __$b58(__$ctx, __$ref) {
    var __$r__$130;
    var __$l0__$131 = $$mode;
    $$mode = "";
    var __$l1__$132 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$134;
    var __$l2__$135 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$134 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$135;
    __$r__$130 = __$r__$134;
    $$mode = __$l0__$131;
    __$ctx.ctx = __$l1__$132;
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$136 = __$ctx.ctx;
    if (ctx__$136 && ctx__$136 !== true || ctx__$136 === 0) {
        __$ctx._str += ctx__$136 + "";
    }
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b61(__$ctx, __$ref) {
    var ctx__$137 = __$ctx.ctx, len__$138 = ctx__$137.length, i__$139 = 0, prevPos__$140 = __$ctx.position, prevNotNewList__$141 = __$ctx._notNewList;
    if (prevNotNewList__$141) {
        __$ctx._listLength += len__$138 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$138;
    }
    __$ctx._notNewList = true;
    while (i__$139 < len__$138) (function __$lb__$142() {
        var __$r__$143;
        var __$l0__$144 = __$ctx.ctx;
        __$ctx.ctx = ctx__$137[i__$139++];
        __$r__$143 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$144;
        return __$r__$143;
    })();
    prevNotNewList__$141 || (__$ctx.position = prevPos__$140);
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$145 = __$ctx.ctx.block, vElem__$146 = __$ctx.ctx.elem, block__$147 = __$ctx._currBlock || $$block;
    var __$r__$149;
    var __$l0__$150 = $$mode;
    $$mode = "default";
    var __$l1__$151 = $$block;
    $$block = vBlock__$145 || (vElem__$146 ? block__$147 : undefined);
    var __$l2__$152 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$145 || vElem__$146 ? undefined : block__$147;
    var __$l3__$153 = $$elem;
    $$elem = vElem__$146;
    var __$l4__$154 = $$mods;
    $$mods = vBlock__$145 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$155 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$149 = undefined;
    $$mode = __$l0__$150;
    $$block = __$l1__$151;
    __$ctx._currBlock = __$l2__$152;
    $$elem = __$l3__$153;
    $$mods = __$l4__$154;
    $$elemMods = __$l5__$155;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "spin") {
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
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            var __$t = !__$ctx._input__control;
            if (__$t) {
                if ($$mods && $$mods["has-clear"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$b42(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if ((__$ctx.__$a0 & 16) === 0) {
                    var __$r = __$b43(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b44(__$ctx, __$ref);
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
                        var __$r = __$b45(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b46(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b48(__$ctx, __$ref);
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