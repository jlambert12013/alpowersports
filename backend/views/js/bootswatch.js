"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
            ? define(e)
            : ((t =
                "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
                e());
})(this, function () {
    "use strict";
    var t = "transitionend", e = function (t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            var i_1 = t.getAttribute("href");
            if (!i_1 || (!i_1.includes("#") && !i_1.startsWith(".")))
                return null;
            i_1.includes("#") && !i_1.startsWith("#") && (i_1 = "#".concat(i_1.split("#")[1])),
                (e = i_1 && "#" !== i_1 ? i_1.trim() : null);
        }
        return e;
    }, i = function (t) {
        var i = e(t);
        return i && document.querySelector(i) ? i : null;
    }, n = function (t) {
        var i = e(t);
        return i ? document.querySelector(i) : null;
    }, s = function (e) {
        e.dispatchEvent(new Event(t));
    }, o = function (t) {
        return !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    }, r = function (t) {
        return o(t)
            ? t.jquery
                ? t[0]
                : t
            : "string" == typeof t && t.length > 0
                ? document.querySelector(t)
                : null;
    }, a = function (t, e, i) {
        Object.keys(i).forEach(function (n) {
            var s = i[n], r = e[n], a = r && o(r)
                ? "element"
                : null == (l = r)
                    ? "".concat(l)
                    : {}.toString
                        .call(l)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
            var l;
            if (!new RegExp(s).test(a))
                throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
        });
    }, l = function (t) {
        return !(!o(t) || 0 === t.getClientRects().length) &&
            "visible" === getComputedStyle(t).getPropertyValue("visibility");
    }, c = function (t) {
        return !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    }, h = function (t) {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            var e_1 = t.getRootNode();
            return e_1 instanceof ShadowRoot ? e_1 : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
    }, d = function () { }, u = function (t) {
        t.offsetHeight;
    }, f = function () {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, p = [], m = function () { return "rtl" === document.documentElement.dir; }, g = function (t) {
        var e;
        (e = function () {
            var e = f();
            if (e) {
                var i_2 = t.NAME, n_1 = e.fn[i_2];
                (e.fn[i_2] = t.jQueryInterface),
                    (e.fn[i_2].Constructor = t),
                    (e.fn[i_2].noConflict = function () { return ((e.fn[i_2] = n_1), t.jQueryInterface); });
            }
        }),
            "loading" === document.readyState
                ? (p.length ||
                    document.addEventListener("DOMContentLoaded", function () {
                        p.forEach(function (t) { return t(); });
                    }),
                    p.push(e))
                : e();
    }, _ = function (t) {
        "function" == typeof t && t();
    }, b = function (e, i, n) {
        if (n === void 0) { n = !0; }
        if (!n)
            return void _(e);
        var o = (function (t) {
            if (!t)
                return 0;
            var _a = window.getComputedStyle(t), e = _a.transitionDuration, i = _a.transitionDelay;
            var n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s
                ? ((e = e.split(",")[0]),
                    (i = i.split(",")[0]),
                    1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                : 0;
        })(i) + 5;
        var r = !1;
        var a = function (_a) {
            var n = _a.target;
            n === i && ((r = !0), i.removeEventListener(t, a), _(e));
        };
        i.addEventListener(t, a),
            setTimeout(function () {
                r || s(i);
            }, o);
    }, v = function (t, e, i, n) {
        var s = t.indexOf(e);
        if (-1 === s)
            return t[!i && n ? t.length - 1 : 0];
        var o = t.length;
        return ((s += i ? 1 : -1),
            n && (s = (s + o) % o),
            t[Math.max(0, Math.min(s, o - 1))]);
    }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, E = /::\d+$/, A = {};
    var T = 1;
    var O = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /^(mouseenter|mouseleave)/i, k = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
    ]);
    function L(t, e) {
        return (e && "".concat(e, "::").concat(T++)) || t.uidEvent || T++;
    }
    function x(t) {
        var e = L(t);
        return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
    }
    function D(t, e, i) {
        if (i === void 0) { i = null; }
        var n = Object.keys(t);
        for (var s_1 = 0, o_1 = n.length; s_1 < o_1; s_1++) {
            var o_2 = t[n[s_1]];
            if (o_2.originalHandler === e && o_2.delegationSelector === i)
                return o_2;
        }
        return null;
    }
    function S(t, e, i) {
        var n = "string" == typeof e, s = n ? i : e;
        var o = P(t);
        return k.has(o) || (o = t), [n, s, o];
    }
    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t)
            return;
        if ((i || ((i = n), (n = null)), C.test(e))) {
            var t_1 = function (t) {
                return function (e) {
                    if (!e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget)))
                        return t.call(this, e);
                };
            };
            n ? (n = t_1(n)) : (i = t_1(i));
        }
        var _a = S(e, i, n), o = _a[0], r = _a[1], a = _a[2], l = x(t), c = l[a] || (l[a] = {}), h = D(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && s);
        var d = L(r, e.replace(y, "")), u = o
            ? (function (t, e, i) {
                return function n(s) {
                    var o = t.querySelectorAll(e);
                    for (var r_1 = s.target; r_1 && r_1 !== this; r_1 = r_1.parentNode)
                        for (var a_1 = o.length; a_1--;)
                            if (o[a_1] === r_1)
                                return ((s.delegateTarget = r_1),
                                    n.oneOff && j.off(t, s.type, e, i),
                                    i.apply(r_1, [s]));
                    return null;
                };
            })(t, i, n)
            : (function (t, e) {
                return function i(n) {
                    return ((n.delegateTarget = t),
                        i.oneOff && j.off(t, n.type, e),
                        e.apply(t, [n]));
                };
            })(t, i);
        (u.delegationSelector = o ? i : null),
            (u.originalHandler = r),
            (u.oneOff = s),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function I(t, e, i, n, s) {
        var o = D(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function P(t) {
        return (t = t.replace(w, "")), O[t] || t;
    }
    var j = {
        on: function (t, e, i, n) {
            N(t, e, i, n, !1);
        },
        one: function (t, e, i, n) {
            N(t, e, i, n, !0);
        },
        off: function (t, e, i, n) {
            if ("string" != typeof e || !t)
                return;
            var _a = S(e, i, n), s = _a[0], o = _a[1], r = _a[2], a = r !== e, l = x(t), c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void I(t, l, r, o, s ? i : null);
            }
            c &&
                Object.keys(l).forEach(function (i) {
                    !(function (t, e, i, n) {
                        var s = e[i] || {};
                        Object.keys(s).forEach(function (o) {
                            if (o.includes(n)) {
                                var n_2 = s[o];
                                I(t, e, i, n_2.originalHandler, n_2.delegationSelector);
                            }
                        });
                    })(t, l, i, e.slice(1));
                });
            var h = l[r] || {};
            Object.keys(h).forEach(function (i) {
                var n = i.replace(E, "");
                if (!a || e.includes(n)) {
                    var e_2 = h[i];
                    I(t, l, r, e_2.originalHandler, e_2.delegationSelector);
                }
            });
        },
        trigger: function (t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            var n = f(), s = P(e), o = e !== s, r = k.has(s);
            var a, l = !0, c = !0, h = !1, d = null;
            return (o &&
                n &&
                ((a = n.Event(e, i)),
                    n(t).trigger(a),
                    (l = !a.isPropagationStopped()),
                    (c = !a.isImmediatePropagationStopped()),
                    (h = a.isDefaultPrevented())),
                r
                    ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
                    : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
                void 0 !== i &&
                    Object.keys(i).forEach(function (t) {
                        Object.defineProperty(d, t, { get: function () { return i[t]; } });
                    }),
                h && d.preventDefault(),
                c && t.dispatchEvent(d),
                d.defaultPrevented && void 0 !== a && a.preventDefault(),
                d);
        },
    }, M = new Map(), H = {
        set: function (t, e, i) {
            M.has(t) || M.set(t, new Map());
            var n = M.get(t);
            n.has(e) || 0 === n.size
                ? n.set(e, i)
                : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
        },
        get: function (t, e) { return (M.has(t) && M.get(t).get(e)) || null; },
        remove: function (t, e) {
            if (!M.has(t))
                return;
            var i = M.get(t);
            i.delete(e), 0 === i.size && M.delete(t);
        },
    };
    var B = /** @class */ (function () {
        function B(t) {
            ;
            (t = r(t)) &&
                ((this._element = t),
                    H.set(this._element, this.constructor.DATA_KEY, this));
        }
        B.prototype.dispose = function () {
            var _this = this;
            H.remove(this._element, this.constructor.DATA_KEY),
                j.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach(function (t) {
                    _this[t] = null;
                });
        };
        B.prototype._queueCallback = function (t, e, i) {
            if (i === void 0) { i = !0; }
            b(t, e, i);
        };
        B.getInstance = function (t) {
            return H.get(r(t), this.DATA_KEY);
        };
        B.getOrCreateInstance = function (t, e) {
            if (e === void 0) { e = {}; }
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        };
        Object.defineProperty(B, "VERSION", {
            get: function () {
                return "5.1.3";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(B, "NAME", {
            get: function () {
                throw new Error('You have to implement the static method "NAME", for each component!');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(B, "DATA_KEY", {
            get: function () {
                return "bs.".concat(this.NAME);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(B, "EVENT_KEY", {
            get: function () {
                return ".".concat(this.DATA_KEY);
            },
            enumerable: false,
            configurable: true
        });
        return B;
    }());
    var R = function (t, e) {
        if (e === void 0) { e = "hide"; }
        var i = "click.dismiss".concat(t.EVENT_KEY), s = t.NAME;
        j.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
            if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)))
                return;
            var o = n(this) || this.closest(".".concat(s));
            t.getOrCreateInstance(o)[e]();
        });
    };
    var W = /** @class */ (function (_super) {
        __extends(W, _super);
        function W() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(W, "NAME", {
            get: function () {
                return "alert";
            },
            enumerable: false,
            configurable: true
        });
        W.prototype.close = function () {
            var _this = this;
            if (j.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            var t = this._element.classList.contains("fade");
            this._queueCallback(function () { return _this._destroyElement(); }, this._element, t);
        };
        W.prototype._destroyElement = function () {
            this._element.remove(),
                j.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        };
        W.jQueryInterface = function (t) {
            return this.each(function () {
                var e = W.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t](this);
                }
            });
        };
        return W;
    }(B));
    R(W, "close"), g(W);
    var $ = '[data-bs-toggle="button"]';
    var z = /** @class */ (function (_super) {
        __extends(z, _super);
        function z() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(z, "NAME", {
            get: function () {
                return "button";
            },
            enumerable: false,
            configurable: true
        });
        z.prototype.toggle = function () {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        };
        z.jQueryInterface = function (t) {
            return this.each(function () {
                var e = z.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        };
        return z;
    }(B));
    function q(t) {
        return ("true" === t ||
            ("false" !== t &&
                (t === Number(t).toString()
                    ? Number(t)
                    : "" === t || "null" === t
                        ? null
                        : t)));
    }
    function F(t) {
        return t.replace(/[A-Z]/g, function (t) { return "-".concat(t.toLowerCase()); });
    }
    j.on(document, "click.bs.button.data-api", $, function (t) {
        t.preventDefault();
        var e = t.target.closest($);
        z.getOrCreateInstance(e).toggle();
    }),
        g(z);
    var U = {
        setDataAttribute: function (t, e, i) {
            t.setAttribute("data-bs-".concat(F(e)), i);
        },
        removeDataAttribute: function (t, e) {
            t.removeAttribute("data-bs-".concat(F(e)));
        },
        getDataAttributes: function (t) {
            if (!t)
                return {};
            var e = {};
            return (Object.keys(t.dataset)
                .filter(function (t) { return t.startsWith("bs"); })
                .forEach(function (i) {
                var n = i.replace(/^bs/, "");
                (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                    (e[n] = q(t.dataset[i]));
            }),
                e);
        },
        getDataAttribute: function (t, e) { return q(t.getAttribute("data-bs-".concat(F(e)))); },
        offset: function (t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset,
            };
        },
        position: function (t) { return ({ top: t.offsetTop, left: t.offsetLeft }); },
    }, V = {
        find: function (t, e) {
            if (e === void 0) { e = document.documentElement; }
            return [].concat.apply([], Element.prototype.querySelectorAll.call(e, t));
        },
        findOne: function (t, e) {
            if (e === void 0) { e = document.documentElement; }
            return Element.prototype.querySelector.call(e, t);
        },
        children: function (t, e) { return [].concat.apply([], t.children).filter(function (t) { return t.matches(e); }); },
        parents: function (t, e) {
            var i = [];
            var n = t.parentNode;
            for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)
                n.matches(e) && i.push(n), (n = n.parentNode);
            return i;
        },
        prev: function (t, e) {
            var i = t.previousElementSibling;
            for (; i;) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling;
            }
            return [];
        },
        next: function (t, e) {
            var i = t.nextElementSibling;
            for (; i;) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren: function (t) {
            var e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
            ]
                .map(function (t) { return "".concat(t, ":not([tabindex^=\"-\"])"); })
                .join(", ");
            return this.find(e, t).filter(function (t) { return !c(t) && l(t); });
        },
    }, K = "carousel", X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
    }, Y = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
    }, Q = "next", G = "prev", Z = "left", J = "right", tt = { ArrowLeft: J, ArrowRight: Z }, et = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
    var st = /** @class */ (function (_super) {
        __extends(st, _super);
        function st(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._items = null),
                (_this._interval = null),
                (_this._activeElement = null),
                (_this._isPaused = !1),
                (_this._isSliding = !1),
                (_this.touchTimeout = null),
                (_this.touchStartX = 0),
                (_this.touchDeltaX = 0),
                (_this._config = _this._getConfig(e)),
                (_this._indicatorsElement = V.findOne(".carousel-indicators", _this._element)),
                (_this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0),
                (_this._pointerEvent = Boolean(window.PointerEvent)),
                _this._addEventListeners();
            return _this;
        }
        Object.defineProperty(st, "Default", {
            get: function () {
                return X;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(st, "NAME", {
            get: function () {
                return K;
            },
            enumerable: false,
            configurable: true
        });
        st.prototype.next = function () {
            this._slide(Q);
        };
        st.prototype.nextWhenVisible = function () {
            !document.hidden && l(this._element) && this.next();
        };
        st.prototype.prev = function () {
            this._slide(G);
        };
        st.prototype.pause = function (t) {
            t || (this._isPaused = !0),
                V.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
                    (s(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        };
        st.prototype.cycle = function (t) {
            t || (this._isPaused = !1),
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                    this._config.interval &&
                    !this._isPaused &&
                    (this._updateInterval(),
                        (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
        };
        st.prototype.to = function (t) {
            var _this = this;
            this._activeElement = V.findOne(nt, this._element);
            var e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void j.one(this._element, et, function () { return _this.to(t); });
            if (e === t)
                return this.pause(), void this.cycle();
            var i = t > e ? Q : G;
            this._slide(i, this._items[t]);
        };
        st.prototype._getConfig = function (t) {
            return ((t = __assign(__assign(__assign({}, X), U.getDataAttributes(this._element)), ("object" == typeof t ? t : {}))),
                a(K, t, Y),
                t);
        };
        st.prototype._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
        };
        st.prototype._addEventListeners = function () {
            var _this = this;
            this._config.keyboard &&
                j.on(this._element, "keydown.bs.carousel", function (t) { return _this._keydown(t); }),
                "hover" === this._config.pause &&
                    (j.on(this._element, "mouseenter.bs.carousel", function (t) { return _this.pause(t); }),
                        j.on(this._element, "mouseleave.bs.carousel", function (t) { return _this.cycle(t); })),
                this._config.touch &&
                    this._touchSupported &&
                    this._addTouchEventListeners();
        };
        st.prototype._addTouchEventListeners = function () {
            var _this = this;
            var t = function (t) {
                return _this._pointerEvent &&
                    ("pen" === t.pointerType || "touch" === t.pointerType);
            }, e = function (e) {
                t(e)
                    ? (_this.touchStartX = e.clientX)
                    : _this._pointerEvent || (_this.touchStartX = e.touches[0].clientX);
            }, i = function (t) {
                _this.touchDeltaX =
                    t.touches && t.touches.length > 1
                        ? 0
                        : t.touches[0].clientX - _this.touchStartX;
            }, n = function (e) {
                t(e) && (_this.touchDeltaX = e.clientX - _this.touchStartX),
                    _this._handleSwipe(),
                    "hover" === _this._config.pause &&
                        (_this.pause(),
                            _this.touchTimeout && clearTimeout(_this.touchTimeout),
                            (_this.touchTimeout = setTimeout(function (t) { return _this.cycle(t); }, 500 + _this._config.interval)));
            };
            V.find(".carousel-item img", this._element).forEach(function (t) {
                j.on(t, "dragstart.bs.carousel", function (t) { return t.preventDefault(); });
            }),
                this._pointerEvent
                    ? (j.on(this._element, "pointerdown.bs.carousel", function (t) { return e(t); }),
                        j.on(this._element, "pointerup.bs.carousel", function (t) { return n(t); }),
                        this._element.classList.add("pointer-event"))
                    : (j.on(this._element, "touchstart.bs.carousel", function (t) { return e(t); }),
                        j.on(this._element, "touchmove.bs.carousel", function (t) { return i(t); }),
                        j.on(this._element, "touchend.bs.carousel", function (t) { return n(t); }));
        };
        st.prototype._keydown = function (t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            var e = tt[t.key];
            e && (t.preventDefault(), this._slide(e));
        };
        st.prototype._getItemIndex = function (t) {
            return ((this._items =
                t && t.parentNode ? V.find(".carousel-item", t.parentNode) : []),
                this._items.indexOf(t));
        };
        st.prototype._getItemByOrder = function (t, e) {
            var i = t === Q;
            return v(this._items, e, i, this._config.wrap);
        };
        st.prototype._triggerSlideEvent = function (t, e) {
            var i = this._getItemIndex(t), n = this._getItemIndex(V.findOne(nt, this._element));
            return j.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i,
            });
        };
        st.prototype._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
                var e_3 = V.findOne(".active", this._indicatorsElement);
                e_3.classList.remove(it), e_3.removeAttribute("aria-current");
                var i_3 = V.find("[data-bs-target]", this._indicatorsElement);
                for (var e_4 = 0; e_4 < i_3.length; e_4++)
                    if (Number.parseInt(i_3[e_4].getAttribute("data-bs-slide-to"), 10) ===
                        this._getItemIndex(t)) {
                        i_3[e_4].classList.add(it), i_3[e_4].setAttribute("aria-current", "true");
                        break;
                    }
            }
        };
        st.prototype._updateInterval = function () {
            var t = this._activeElement || V.findOne(nt, this._element);
            if (!t)
                return;
            var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                    (this._config.interval = e))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
        };
        st.prototype._slide = function (t, e) {
            var _this = this;
            var i = this._directionToOrder(t), n = V.findOne(nt, this._element), s = this._getItemIndex(n), o = e || this._getItemByOrder(i, n), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === Q, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i);
            if (o && o.classList.contains(it))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(o, d).defaultPrevented)
                return;
            if (!n || !o)
                return;
            (this._isSliding = !0),
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                (this._activeElement = o);
            var f = function () {
                j.trigger(_this._element, et, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r,
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
                var t_2 = function () {
                    o.classList.remove(c, h),
                        o.classList.add(it),
                        n.classList.remove(it, h, c),
                        (_this._isSliding = !1),
                        setTimeout(f, 0);
                };
                this._queueCallback(t_2, n, !0);
            }
            else
                n.classList.remove(it), o.classList.add(it), (this._isSliding = !1), f();
            a && this.cycle();
        };
        st.prototype._directionToOrder = function (t) {
            return [J, Z].includes(t)
                ? m()
                    ? t === Z
                        ? G
                        : Q
                    : t === Z
                        ? Q
                        : G
                : t;
        };
        st.prototype._orderToDirection = function (t) {
            return [Q, G].includes(t)
                ? m()
                    ? t === G
                        ? Z
                        : J
                    : t === G
                        ? J
                        : Z
                : t;
        };
        st.carouselInterface = function (t, e) {
            var i = st.getOrCreateInstance(t, e);
            var n = i._config;
            "object" == typeof e && (n = __assign(__assign({}, n), e));
            var s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e)
                i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError("No method named \"".concat(s, "\""));
                i[s]();
            }
            else
                n.interval && n.ride && (i.pause(), i.cycle());
        };
        st.jQueryInterface = function (t) {
            return this.each(function () {
                st.carouselInterface(this, t);
            });
        };
        st.dataApiClickHandler = function (t) {
            var e = n(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            var i = __assign(__assign({}, U.getDataAttributes(e)), U.getDataAttributes(this)), s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1),
                st.carouselInterface(e, i),
                s && st.getInstance(e).to(s),
                t.preventDefault();
        };
        return st;
    }(B));
    j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler),
        j.on(window, "load.bs.carousel.data-api", function () {
            var t = V.find('[data-bs-ride="carousel"]');
            for (var e_5 = 0, i_4 = t.length; e_5 < i_4; e_5++)
                st.carouselInterface(t[e_5], st.getInstance(t[e_5]));
        }),
        g(st);
    var ot = "collapse", rt = { toggle: !0, parent: null }, at = { toggle: "boolean", parent: "(null|element)" }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
    var pt = /** @class */ (function (_super) {
        __extends(pt, _super);
        function pt(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._isTransitioning = !1),
                (_this._config = _this._getConfig(e)),
                (_this._triggerArray = []);
            var n = V.find(ft);
            for (var t_3 = 0, e_6 = n.length; t_3 < e_6; t_3++) {
                var e_7 = n[t_3], s_2 = i(e_7), o_3 = V.find(s_2).filter(function (t) { return t === _this._element; });
                null !== s_2 &&
                    o_3.length &&
                    ((_this._selector = s_2), _this._triggerArray.push(e_7));
            }
            _this._initializeChildren(),
                _this._config.parent ||
                    _this._addAriaAndCollapsedClass(_this._triggerArray, _this._isShown()),
                _this._config.toggle && _this.toggle();
            return _this;
        }
        Object.defineProperty(pt, "Default", {
            get: function () {
                return rt;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(pt, "NAME", {
            get: function () {
                return ot;
            },
            enumerable: false,
            configurable: true
        });
        pt.prototype.toggle = function () {
            this._isShown() ? this.hide() : this.show();
        };
        pt.prototype.show = function () {
            var _this = this;
            if (this._isTransitioning || this._isShown())
                return;
            var t, e = [];
            if (this._config.parent) {
                var t_4 = V.find(ut, this._config.parent);
                e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) { return !t_4.includes(e); });
            }
            var i = V.findOne(this._selector);
            if (e.length) {
                var n_3 = e.find(function (t) { return i !== t; });
                if (((t = n_3 ? pt.getInstance(n_3) : null), t && t._isTransitioning))
                    return;
            }
            if (j.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach(function (e) {
                i !== e && pt.getOrCreateInstance(e, { toggle: !1 }).hide(),
                    t || H.set(e, "bs.collapse", null);
            });
            var n = this._getDimension();
            this._element.classList.remove(ct),
                this._element.classList.add(ht),
                (this._element.style[n] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            var s = "scroll".concat(n[0].toUpperCase() + n.slice(1));
            this._queueCallback(function () {
                ;
                (_this._isTransitioning = !1),
                    _this._element.classList.remove(ht),
                    _this._element.classList.add(ct, lt),
                    (_this._element.style[n] = ""),
                    j.trigger(_this._element, "shown.bs.collapse");
            }, this._element, !0),
                (this._element.style[n] = "".concat(this._element[s], "px"));
        };
        pt.prototype.hide = function () {
            var _this = this;
            if (this._isTransitioning || !this._isShown())
                return;
            if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            var t = this._getDimension();
            (this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px")),
                u(this._element),
                this._element.classList.add(ht),
                this._element.classList.remove(ct, lt);
            var e = this._triggerArray.length;
            for (var t_5 = 0; t_5 < e; t_5++) {
                var e_8 = this._triggerArray[t_5], i_5 = n(e_8);
                i_5 && !this._isShown(i_5) && this._addAriaAndCollapsedClass([e_8], !1);
            }
            ;
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(function () {
                    ;
                    (_this._isTransitioning = !1),
                        _this._element.classList.remove(ht),
                        _this._element.classList.add(ct),
                        j.trigger(_this._element, "hidden.bs.collapse");
                }, this._element, !0);
        };
        pt.prototype._isShown = function (t) {
            if (t === void 0) { t = this._element; }
            return t.classList.contains(lt);
        };
        pt.prototype._getConfig = function (t) {
            return (((t = __assign(__assign(__assign({}, rt), U.getDataAttributes(this._element)), t)).toggle =
                Boolean(t.toggle)),
                (t.parent = r(t.parent)),
                a(ot, t, at),
                t);
        };
        pt.prototype._getDimension = function () {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        };
        pt.prototype._initializeChildren = function () {
            var _this = this;
            if (!this._config.parent)
                return;
            var t = V.find(ut, this._config.parent);
            V.find(ft, this._config.parent)
                .filter(function (e) { return !t.includes(e); })
                .forEach(function (t) {
                var e = n(t);
                e && _this._addAriaAndCollapsedClass([t], _this._isShown(e));
            });
        };
        pt.prototype._addAriaAndCollapsedClass = function (t, e) {
            t.length &&
                t.forEach(function (t) {
                    e ? t.classList.remove(dt) : t.classList.add(dt),
                        t.setAttribute("aria-expanded", e);
                });
        };
        pt.jQueryInterface = function (t) {
            return this.each(function () {
                var e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                var i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    i[t]();
                }
            });
        };
        return pt;
    }(B));
    j.on(document, "click.bs.collapse.data-api", ft, function (t) {
        ;
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
            t.preventDefault();
        var e = i(this);
        V.find(e).forEach(function (t) {
            pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
        });
    }),
        g(pt);
    var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [mt, gt, _t, bt], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce(function (t, e) {
        return t.concat([e + "-" + wt, e + "-" + Et]);
    }, []), Lt = [].concat(yt, [vt]).reduce(function (t, e) {
        return t.concat([e, e + "-" + wt, e + "-" + Et]);
    }, []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Wt(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return ("undefined" != typeof ShadowRoot &&
            (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot));
    }
    var Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                zt(s) &&
                    Rt(s) &&
                    (Object.assign(s.style, i),
                        Object.keys(n).forEach(function (t) {
                            var e = n[t];
                            !1 === e
                                ? s.removeAttribute(t)
                                : s.setAttribute(t, !0 === e ? "" : e);
                        }));
            });
        },
        effect: function (t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
            };
            return (Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                            return (t[e] = ""), t;
                        }, {});
                        zt(n) &&
                            Rt(n) &&
                            (Object.assign(n.style, o),
                                Object.keys(s).forEach(function (t) {
                                    n.removeAttribute(t);
                                }));
                    });
                });
        },
        requires: ["computeStyles"],
    };
    function Ut(t) {
        return t.split("-")[0];
    }
    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1,
        };
    }
    function Kt(t) {
        var e = Vt(t), i = t.offsetWidth, n = t.offsetHeight;
        return (Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: i, height: n });
    }
    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n))
                    return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function Yt(t) {
        return Wt(t).getComputedStyle(t);
    }
    function Qt(t) {
        return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
    }
    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Zt(t) {
        return "html" === Rt(t)
            ? t
            : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
    }
    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
    }
    function te(t) {
        for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;)
            i = Jt(i);
        return i &&
            ("html" === Rt(i) || ("body" === Rt(i) && "static" === Yt(i).position))
            ? e
            : i ||
                (function (t) {
                    var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") &&
                        zt(t) &&
                        "fixed" === Yt(t).position)
                        return null;
                    for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
                        var n = Yt(i);
                        if ("none" !== n.transform ||
                            "none" !== n.perspective ||
                            "paint" === n.contain ||
                            -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                            (e && "filter" === n.willChange) ||
                            (e && n.filter && "none" !== n.filter))
                            return i;
                        i = i.parentNode;
                    }
                    return null;
                })(t) ||
                e;
    }
    function ee(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    var ie = Math.max, ne = Math.min, se = Math.round;
    function oe(t, e, i) {
        return ie(t, ne(e, i));
    }
    function re(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function ae(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    var le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Ut(i.placement), l = ee(a), c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = (function (t, e) {
                    return re("number" !=
                        typeof (t =
                            "function" == typeof t
                                ? t(Object.assign({}, e.rects, { placement: e.placement }))
                                : t)
                        ? t
                        : ae(t, yt));
                })(s.padding, i), d = Kt(o), u = "y" === l ? mt : bt, f = "y" === l ? gt : _t, p = i.rects.reference[c] +
                    i.rects.reference[l] -
                    r[l] -
                    i.rects.popper[c], m = r[l] - i.rects.reference[l], g = te(o), _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, E = oe(v, w, y), A = l;
                i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
            }
        },
        effect: function (t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
                ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
                Xt(e.elements.popper, n) &&
                (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function ce(t) {
        return t.split("-")[1];
    }
    var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function de(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = !0 === h
            ? (function (t) {
                var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
                return { x: se(se(e * n) / n) || 0, y: se(se(i * n) / n) || 0 };
            })(r)
            : "function" == typeof h
                ? h(r)
                : r, u = d.x, f = void 0 === u ? 0 : u, p = d.y, m = void 0 === p ? 0 : p, g = r.hasOwnProperty("x"), _ = r.hasOwnProperty("y"), b = bt, v = mt, y = window;
        if (c) {
            var w = te(i), E = "clientHeight", A = "clientWidth";
            w === Wt(i) &&
                "static" !== Yt((w = Gt(i))).position &&
                "absolute" === a &&
                ((E = "scrollHeight"), (A = "scrollWidth")),
                (w = w),
                (s !== mt && ((s !== bt && s !== _t) || o !== Et)) ||
                    ((v = gt), (m -= w[E] - n.height), (m *= l ? 1 : -1)),
                (s !== bt && ((s !== mt && s !== gt) || o !== Et)) ||
                    ((b = _t), (f -= w[A] - n.width), (f *= l ? 1 : -1));
        }
        var T, O = Object.assign({ position: a }, c && he);
        return l
            ? Object.assign({}, O, (((T = {})[v] = _ ? "0" : ""),
                (T[b] = g ? "0" : ""),
                (T.transform =
                    (y.devicePixelRatio || 1) <= 1
                        ? "translate(" + f + "px, " + m + "px)"
                        : "translate3d(" + f + "px, " + m + "px, 0)"),
                T))
            : Object.assign({}, O, (((e = {})[v] = _ ? m + "px" : ""),
                (e[b] = g ? f + "px" : ""),
                (e.transform = ""),
                e));
    }
    var ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: Ut(e.placement),
                variation: ce(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
            };
            null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l,
                })))),
                null != e.modifiersData.arrow &&
                    (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                    })))),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement,
                }));
        },
        data: {},
    };
    var fe = { passive: !0 };
    var pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (o &&
                c.forEach(function (t) {
                    t.addEventListener("scroll", i.update, fe);
                }),
                a && l.addEventListener("resize", i.update, fe),
                function () {
                    o &&
                        c.forEach(function (t) {
                            t.removeEventListener("scroll", i.update, fe);
                        }),
                        a && l.removeEventListener("resize", i.update, fe);
                });
        },
        data: {},
    };
    var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function ge(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return me[t];
        });
    }
    var _e = { start: "end", end: "start" };
    function be(t) {
        return t.replace(/start|end/g, function (t) {
            return _e[t];
        });
    }
    function ve(t) {
        var e = Wt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft;
    }
    function we(t) {
        var e = Yt(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ee(t) {
        return ["html", "body", "#document"].indexOf(Rt(t)) >= 0
            ? t.ownerDocument.body
            : zt(t) && we(t)
                ? t
                : Ee(Zt(t));
    }
    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Wt(n), r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)));
    }
    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function Oe(t, e) {
        return e === Tt
            ? Te((function (t) {
                var e = Wt(t), i = Gt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
                return (n &&
                    ((s = n.width),
                        (o = n.height),
                        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                            ((r = n.offsetLeft), (a = n.offsetTop))),
                    { width: s, height: o, x: r + ye(t), y: a });
            })(t))
            : zt(e)
                ? (function (t) {
                    var e = Vt(t);
                    return ((e.top = e.top + t.clientTop),
                        (e.left = e.left + t.clientLeft),
                        (e.bottom = e.top + t.clientHeight),
                        (e.right = e.left + t.clientWidth),
                        (e.width = t.clientWidth),
                        (e.height = t.clientHeight),
                        (e.x = e.left),
                        (e.y = e.top),
                        e);
                })(e)
                : Te((function (t) {
                    var e, i = Gt(t), n = ve(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + ye(t), l = -n.scrollTop;
                    return ("rtl" === Yt(s || i).direction &&
                        (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o),
                        { width: o, height: r, x: a, y: l });
                })(Gt(t)));
    }
    function Ce(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Ut(s) : null, r = s ? ce(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case mt:
                e = { x: a, y: i.y - n.height };
                break;
            case gt:
                e = { x: a, y: i.y + i.height };
                break;
            case _t:
                e = { x: i.x + i.width, y: l };
                break;
            case bt:
                e = { x: i.x - n.width, y: l };
                break;
            default:
                e = { x: i.x, y: i.y };
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ke(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.boundary, r = void 0 === o ? At : o, a = i.rootBoundary, l = void 0 === a ? Tt : a, c = i.elementContext, h = void 0 === c ? Ot : c, d = i.altBoundary, u = void 0 !== d && d, f = i.padding, p = void 0 === f ? 0 : f, m = re("number" != typeof p ? p : ae(p, yt)), g = h === Ot ? Ct : Ot, _ = t.rects.popper, b = t.elements[u ? g : h], v = (function (t, e, i) {
            var n = "clippingParents" === e
                ? (function (t) {
                    var e = Ae(Zt(t)), i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 &&
                        zt(t)
                        ? te(t)
                        : t;
                    return $t(i)
                        ? e.filter(function (t) {
                            return $t(t) && Xt(t, i) && "body" !== Rt(t);
                        })
                        : [];
                })(t)
                : [].concat(e), s = [].concat(n, [i]), o = s[0], r = s.reduce(function (e, i) {
                var n = Oe(t, i);
                return ((e.top = ie(n.top, e.top)),
                    (e.right = ne(n.right, e.right)),
                    (e.bottom = ne(n.bottom, e.bottom)),
                    (e.left = ie(n.left, e.left)),
                    e);
            }, Oe(t, o));
            return ((r.width = r.right - r.left),
                (r.height = r.bottom - r.top),
                (r.x = r.left),
                (r.y = r.top),
                r);
        })($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l), y = Vt(t.elements.reference), w = Ce({ reference: y, element: _, strategy: "absolute", placement: s }), E = Te(Object.assign({}, _, w)), A = h === Ot ? E : y, T = {
            top: v.top - A.top + m.top,
            bottom: A.bottom - v.bottom + m.bottom,
            left: v.left - A.left + m.left,
            right: A.right - v.right + m.right,
        }, O = t.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s];
            Object.keys(T).forEach(function (t) {
                var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1, i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e;
            });
        }
        return T;
    }
    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? Lt : l, h = ce(n), d = h
            ? a
                ? kt
                : kt.filter(function (t) {
                    return ce(t) === h;
                })
            : yt, u = d.filter(function (t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return ((e[i] = ke(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r,
            })[Ut(i)]),
                e);
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    var xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l ||
                    (_ !== g && p
                        ? (function (t) {
                            if (Ut(t) === vt)
                                return [];
                            var e = ge(t);
                            return [be(t), e, be(e)];
                        })(g)
                        : [ge(g)]), v = [g].concat(b).reduce(function (t, i) {
                    return t.concat(Ut(i) === vt
                        ? Le(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m,
                        })
                        : i);
                }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
                    var C = v[O], k = Ut(C), L = ce(C) === wt, x = [mt, gt].indexOf(k) >= 0, D = x ? "width" : "height", S = ke(e, {
                        placement: C,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c,
                    }), N = x ? (L ? _t : bt) : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N), P = [];
                    if ((o && P.push(S[k] <= 0),
                        a && P.push(S[N] <= 0, S[I] <= 0),
                        P.every(function (t) {
                            return t;
                        }))) {
                        ;
                        (T = C), (A = !1);
                        break;
                    }
                    E.set(C, P);
                }
                if (A)
                    for (var j = function (t) {
                        var e = v.find(function (e) {
                            var i = E.get(e);
                            if (i)
                                return i.slice(0, t).every(function (t) {
                                    return t;
                                });
                        });
                        if (e)
                            return (T = e), "break";
                    }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--)
                        ;
                e.placement !== T &&
                    ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function De(t, e, i) {
        return (void 0 === i && (i = { x: 0, y: 0 }),
            {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
            });
    }
    function Se(t) {
        return [mt, _t, gt, bt].some(function (e) {
            return t[e] >= 0;
        });
    }
    var Ne = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ke(e, { elementContext: "reference" }), a = ke(e, { altBoundary: !0 }), l = De(r, n), c = De(a, s, o), h = Se(l), d = Se(c);
            (e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d,
            }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d,
                }));
        },
    }, Ie = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [0, 0] : s, r = Lt.reduce(function (t, i) {
                return ((t[i] = (function (t, e, i) {
                    var n = Ut(t), s = [bt, mt].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i
                        ? i(Object.assign({}, e, { placement: t }))
                        : i, r = o[0], a = o[1];
                    return ((r = r || 0),
                        (a = (a || 0) * s),
                        [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a });
                })(i, e.rects, o)),
                    t);
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += l),
                    (e.modifiersData.popperOffsets.y += c)),
                (e.modifiersData[n] = r);
        },
    }, Pe = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = Ce({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement,
            });
        },
        data: {},
    }, je = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ke(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h,
            }), _ = Ut(e.placement), b = ce(e.placement), v = !b, y = ee(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, A = e.rects.reference, T = e.rects.popper, O = "function" == typeof m
                ? m(Object.assign({}, e.rects, { placement: e.placement }))
                : m, C = { x: 0, y: 0 };
            if (E) {
                if (o || a) {
                    var k = "y" === y ? mt : bt, L = "y" === y ? gt : _t, x = "y" === y ? "height" : "width", D = E[y], S = E[y] + g[k], N = E[y] - g[L], I = f ? -T[x] / 2 : 0, P = b === wt ? A[x] : T[x], j = b === wt ? -T[x] : -A[x], M = e.elements.arrow, H = f && M ? Kt(M) : { width: 0, height: 0 }, B = e.modifiersData["arrow#persistent"]
                        ? e.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 }, R = B[k], W = B[L], $ = oe(0, A[x], H[x]), z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O, q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O, F = e.elements.arrow && te(e.elements.arrow), U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0, V = e.modifiersData.offset
                        ? e.modifiersData.offset[e.placement][y]
                        : 0, K = E[y] + z - V - U, X = E[y] + q - V;
                    if (o) {
                        var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                        (E[y] = Y), (C[y] = Y - D);
                    }
                    if (a) {
                        var Q = "x" === y ? mt : bt, G = "x" === y ? gt : _t, Z = E[w], J = Z + g[Q], tt = Z - g[G], et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                        (E[w] = et), (C[w] = et - Z);
                    }
                }
                e.modifiersData[n] = C;
            }
        },
        requiresIfExists: ["offset"],
    };
    function Me(t, e, i) {
        void 0 === i && (i = !1);
        var n = zt(e);
        zt(e) &&
            (function (t) {
                var e = t.getBoundingClientRect();
                e.width, t.offsetWidth, e.height, t.offsetHeight;
            })(e);
        var s, o, r = Gt(e), a = Vt(t), l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
        return ((n || (!n && !i)) &&
            (("body" !== Rt(e) || we(r)) &&
                (l =
                    (s = e) !== Wt(s) && zt(s)
                        ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
                        : ve(s)),
                zt(e)
                    ? (((c = Vt(e)).x += e.clientLeft), (c.y += e.clientTop))
                    : r && (c.x = ye(r))),
            {
                x: a.left + l.scrollLeft - c.x,
                y: a.top + l.scrollTop - c.y,
                width: a.width,
                height: a.height,
            });
    }
    function He(t) {
        var e = new Map(), i = new Set(), n = [];
        function s(t) {
            i.add(t.name),
                []
                    .concat(t.requires || [], t.requiresIfExists || [])
                    .forEach(function (t) {
                    if (!i.has(t)) {
                        var n = e.get(t);
                        n && s(n);
                    }
                }),
                n.push(t);
        }
        return (t.forEach(function (t) {
            e.set(t.name, t);
        }),
            t.forEach(function (t) {
                i.has(t.name) || s(t);
            }),
            n);
    }
    var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function We(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? Be : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Be, o),
                modifiersData: {},
                elements: { reference: t, popper: e },
                attributes: {},
                styles: {},
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function (i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(),
                        (a.options = Object.assign({}, o, a.options, s)),
                        (a.scrollParents = {
                            reference: $t(t)
                                ? Ae(t)
                                : t.contextElement
                                    ? Ae(t.contextElement)
                                    : [],
                            popper: Ae(e),
                        });
                    var r, c, u = (function (t) {
                        var e = He(t);
                        return Bt.reduce(function (t, i) {
                            return t.concat(e.filter(function (t) {
                                return t.phase === i;
                            }));
                        }, []);
                    })(((r = [].concat(n, a.options.modifiers)),
                        (c = r.reduce(function (t, e) {
                            var i = t[e.name];
                            return ((t[e.name] = i
                                ? Object.assign({}, i, e, {
                                    options: Object.assign({}, i.options, e.options),
                                    data: Object.assign({}, i.data, e.data),
                                })
                                : e),
                                t);
                        }, {})),
                        Object.keys(c).map(function (t) {
                            return c[t];
                        })));
                    return ((a.orderedModifiers = u.filter(function (t) {
                        return t.enabled;
                    })),
                        a.orderedModifiers.forEach(function (t) {
                            var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({ state: a, name: e, instance: h, options: n });
                                l.push(o || function () { });
                            }
                        }),
                        h.update());
                },
                forceUpdate: function () {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (Re(e, i)) {
                            ;
                            (a.rects = {
                                reference: Me(e, te(i), "fixed" === a.options.strategy),
                                popper: Kt(i),
                            }),
                                (a.reset = !1),
                                (a.placement = a.options.placement),
                                a.orderedModifiers.forEach(function (t) {
                                    return (a.modifiersData[t.name] = Object.assign({}, t.data));
                                });
                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                    "function" == typeof o &&
                                        (a =
                                            o({ state: a, options: l, name: d, instance: h }) || a);
                                }
                                else
                                    (a.reset = !1), (n = -1);
                        }
                    }
                },
                update: ((s = function () {
                    return new Promise(function (t) {
                        h.forceUpdate(), t(a);
                    });
                }),
                    function () {
                        return (r ||
                            (r = new Promise(function (t) {
                                Promise.resolve().then(function () {
                                    ;
                                    (r = void 0), t(s());
                                });
                            })),
                            r);
                    }),
                destroy: function () {
                    d(), (c = !0);
                },
            };
            if (!Re(t, e))
                return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (h.setOptions(i).then(function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }),
                h);
        };
    }
    var $e = We(), ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }), qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
    var Fe = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: ke,
        createPopperBase: $e,
        createPopper: qe,
        createPopperLite: ze,
        top: mt,
        bottom: gt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: Et,
        clippingParents: At,
        viewport: Tt,
        popper: Ot,
        reference: Ct,
        variationPlacements: kt,
        placements: Lt,
        beforeRead: xt,
        read: Dt,
        afterRead: St,
        beforeMain: Nt,
        main: It,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: Bt,
        applyStyles: Ft,
        arrow: le,
        computeStyles: ue,
        eventListeners: pe,
        flip: xe,
        hide: Ne,
        offset: Ie,
        popperOffsets: Pe,
        preventOverflow: je,
    }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m() ? "top-end" : "top-start", ni = m() ? "top-start" : "top-end", si = m() ? "bottom-end" : "bottom-start", oi = m() ? "bottom-start" : "bottom-end", ri = m() ? "left-start" : "right-start", ai = m() ? "right-start" : "left-start", li = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
    }, ci = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
    };
    var hi = /** @class */ (function (_super) {
        __extends(hi, _super);
        function hi(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._popper = null),
                (_this._config = _this._getConfig(e)),
                (_this._menu = _this._getMenuElement()),
                (_this._inNavbar = _this._detectNavbar());
            return _this;
        }
        Object.defineProperty(hi, "Default", {
            get: function () {
                return li;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(hi, "DefaultType", {
            get: function () {
                return ci;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(hi, "NAME", {
            get: function () {
                return Ue;
            },
            enumerable: false,
            configurable: true
        });
        hi.prototype.toggle = function () {
            return this._isShown() ? this.hide() : this.show();
        };
        hi.prototype.show = function () {
            if (c(this._element) || this._isShown(this._menu))
                return;
            var t = { relatedTarget: this._element };
            if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            var e = hi.getParentFromElement(this._element);
            this._inNavbar
                ? U.setDataAttribute(this._menu, "popper", "none")
                : this._createPopper(e),
                "ontouchstart" in document.documentElement &&
                    !e.closest(".navbar-nav") &&
                    []
                        .concat.apply([], document.body.children).forEach(function (t) { return j.on(t, "mouseover", d); }),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Je),
                this._element.classList.add(Je),
                j.trigger(this._element, "shown.bs.dropdown", t);
        };
        hi.prototype.hide = function () {
            if (c(this._element) || !this._isShown(this._menu))
                return;
            var t = { relatedTarget: this._element };
            this._completeHide(t);
        };
        hi.prototype.dispose = function () {
            this._popper && this._popper.destroy(), _super.prototype.dispose.call(this);
        };
        hi.prototype.update = function () {
            ;
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        };
        hi.prototype._completeHide = function (t) {
            j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
                ("ontouchstart" in document.documentElement &&
                    []
                        .concat.apply([], document.body.children).forEach(function (t) { return j.off(t, "mouseover", d); }),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Je),
                    this._element.classList.remove(Je),
                    this._element.setAttribute("aria-expanded", "false"),
                    U.removeDataAttribute(this._menu, "popper"),
                    j.trigger(this._element, "hidden.bs.dropdown", t));
        };
        hi.prototype._getConfig = function (t) {
            if (((t = __assign(__assign(__assign({}, this.constructor.Default), U.getDataAttributes(this._element)), t)),
                a(Ue, t, this.constructor.DefaultType),
                "object" == typeof t.reference &&
                    !o(t.reference) &&
                    "function" != typeof t.reference.getBoundingClientRect))
                throw new TypeError("".concat(Ue.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
            return t;
        };
        hi.prototype._createPopper = function (t) {
            if (void 0 === Fe)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var e = this._element;
            "parent" === this._config.reference
                ? (e = t)
                : o(this._config.reference)
                    ? (e = r(this._config.reference))
                    : "object" == typeof this._config.reference &&
                        (e = this._config.reference);
            var i = this._getPopperConfig(), n = i.modifiers.find(function (t) { return "applyStyles" === t.name && !1 === t.enabled; });
            (this._popper = qe(e, this._menu, i)),
                n && U.setDataAttribute(this._menu, "popper", "static");
        };
        hi.prototype._isShown = function (t) {
            if (t === void 0) { t = this._element; }
            return t.classList.contains(Je);
        };
        hi.prototype._getMenuElement = function () {
            return V.next(this._element, ei)[0];
        };
        hi.prototype._getPlacement = function () {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return ri;
            if (t.classList.contains("dropstart"))
                return ai;
            var e = "end" ===
                getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
        };
        hi.prototype._detectNavbar = function () {
            return null !== this._element.closest(".navbar");
        };
        hi.prototype._getOffset = function () {
            var _this = this;
            var t = this._config.offset;
            return "string" == typeof t
                ? t.split(",").map(function (t) { return Number.parseInt(t, 10); })
                : "function" == typeof t
                    ? function (e) { return t(e, _this._element); }
                    : t;
        };
        hi.prototype._getPopperConfig = function () {
            var t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return ("static" === this._config.display &&
                (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), __assign(__assign({}, t), ("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(t)
                : this._config.popperConfig)));
        };
        hi.prototype._selectMenuItem = function (_a) {
            var t = _a.key, e = _a.target;
            var i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
            i.length && v(i, e, t === Ye, !i.includes(e)).focus();
        };
        hi.jQueryInterface = function (t) {
            return this.each(function () {
                var e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                }
            });
        };
        hi.clearMenus = function (t) {
            if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
                return;
            var e = V.find(ti);
            for (var i_6 = 0, n_4 = e.length; i_6 < n_4; i_6++) {
                var n_5 = hi.getInstance(e[i_6]);
                if (!n_5 || !1 === n_5._config.autoClose)
                    continue;
                if (!n_5._isShown())
                    continue;
                var s_3 = { relatedTarget: n_5._element };
                if (t) {
                    var e_9 = t.composedPath(), i_7 = e_9.includes(n_5._menu);
                    if (e_9.includes(n_5._element) ||
                        ("inside" === n_5._config.autoClose && !i_7) ||
                        ("outside" === n_5._config.autoClose && i_7))
                        continue;
                    if (n_5._menu.contains(t.target) &&
                        (("keyup" === t.type && "Tab" === t.key) ||
                            /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (s_3.clickEvent = t);
                }
                n_5._completeHide(s_3);
            }
        };
        hi.getParentFromElement = function (t) {
            return n(t) || t.parentNode;
        };
        hi.dataApiKeydownHandler = function (t) {
            if (/input|textarea/i.test(t.target.tagName)
                ? t.key === Ke ||
                    (t.key !== Ve &&
                        ((t.key !== Ye && t.key !== Xe) || t.target.closest(ei)))
                : !Qe.test(t.key))
                return;
            var e = this.classList.contains(Je);
            if (!e && t.key === Ve)
                return;
            if ((t.preventDefault(), t.stopPropagation(), c(this)))
                return;
            var i = this.matches(ti) ? this : V.prev(this, ti)[0], n = hi.getOrCreateInstance(i);
            if (t.key !== Ve)
                return t.key === Xe || t.key === Ye
                    ? (e || n.show(), void n._selectMenuItem(t))
                    : void ((e && t.key !== Ke) || hi.clearMenus());
            n.hide();
        };
        return hi;
    }(B));
    j.on(document, Ze, ti, hi.dataApiKeydownHandler),
        j.on(document, Ze, ei, hi.dataApiKeydownHandler),
        j.on(document, Ge, hi.clearMenus),
        j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
        j.on(document, Ge, ti, function (t) {
            t.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }),
        g(hi);
    var di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
    var fi = /** @class */ (function () {
        function fi() {
            this._element = document.body;
        }
        fi.prototype.getWidth = function () {
            var t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        };
        fi.prototype.hide = function () {
            var t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, "paddingRight", function (e) { return e + t; }),
                this._setElementAttributes(di, "paddingRight", function (e) { return e + t; }),
                this._setElementAttributes(ui, "marginRight", function (e) { return e - t; });
        };
        fi.prototype._disableOverFlow = function () {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        };
        fi.prototype._setElementAttributes = function (t, e, i) {
            var _this = this;
            var n = this.getWidth();
            this._applyManipulationCallback(t, function (t) {
                if (t !== _this._element && window.innerWidth > t.clientWidth + n)
                    return;
                _this._saveInitialAttribute(t, e);
                var s = window.getComputedStyle(t)[e];
                t.style[e] = "".concat(i(Number.parseFloat(s)), "px");
            });
        };
        fi.prototype.reset = function () {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(di, "paddingRight"),
                this._resetElementAttributes(ui, "marginRight");
        };
        fi.prototype._saveInitialAttribute = function (t, e) {
            var i = t.style[e];
            i && U.setDataAttribute(t, e, i);
        };
        fi.prototype._resetElementAttributes = function (t, e) {
            this._applyManipulationCallback(t, function (t) {
                var i = U.getDataAttribute(t, e);
                void 0 === i
                    ? t.style.removeProperty(e)
                    : (U.removeDataAttribute(t, e), (t.style[e] = i));
            });
        };
        fi.prototype._applyManipulationCallback = function (t, e) {
            o(t) ? e(t) : V.find(t, this._element).forEach(e);
        };
        fi.prototype.isOverflowing = function () {
            return this.getWidth() > 0;
        };
        return fi;
    }());
    var pi = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
    }, mi = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
    }, gi = "show", _i = "mousedown.bs.backdrop";
    var bi = /** @class */ (function () {
        function bi(t) {
            ;
            (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        bi.prototype.show = function (t) {
            this._config.isVisible
                ? (this._append(),
                    this._config.isAnimated && u(this._getElement()),
                    this._getElement().classList.add(gi),
                    this._emulateAnimation(function () {
                        _(t);
                    }))
                : _(t);
        };
        bi.prototype.hide = function (t) {
            var _this = this;
            this._config.isVisible
                ? (this._getElement().classList.remove(gi),
                    this._emulateAnimation(function () {
                        _this.dispose(), _(t);
                    }))
                : _(t);
        };
        bi.prototype._getElement = function () {
            if (!this._element) {
                var t_6 = document.createElement("div");
                (t_6.className = this._config.className),
                    this._config.isAnimated && t_6.classList.add("fade"),
                    (this._element = t_6);
            }
            return this._element;
        };
        bi.prototype._getConfig = function (t) {
            return (((t = __assign(__assign({}, pi), ("object" == typeof t ? t : {}))).rootElement = r(t.rootElement)),
                a("backdrop", t, mi),
                t);
        };
        bi.prototype._append = function () {
            var _this = this;
            this._isAppended ||
                (this._config.rootElement.append(this._getElement()),
                    j.on(this._getElement(), _i, function () {
                        _(_this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
        };
        bi.prototype.dispose = function () {
            this._isAppended &&
                (j.off(this._element, _i),
                    this._element.remove(),
                    (this._isAppended = !1));
        };
        bi.prototype._emulateAnimation = function (t) {
            b(t, this._getElement(), this._config.isAnimated);
        };
        return bi;
    }());
    var vi = { trapElement: null, autofocus: !0 }, yi = { trapElement: "element", autofocus: "boolean" }, wi = ".bs.focustrap", Ei = "backward";
    var Ai = /** @class */ (function () {
        function Ai(t) {
            ;
            (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        Ai.prototype.activate = function () {
            var _this = this;
            var _a = this._config, t = _a.trapElement, e = _a.autofocus;
            this._isActive ||
                (e && t.focus(),
                    j.off(document, wi),
                    j.on(document, "focusin.bs.focustrap", function (t) { return _this._handleFocusin(t); }),
                    j.on(document, "keydown.tab.bs.focustrap", function (t) {
                        return _this._handleKeydown(t);
                    }),
                    (this._isActive = !0));
        };
        Ai.prototype.deactivate = function () {
            this._isActive && ((this._isActive = !1), j.off(document, wi));
        };
        Ai.prototype._handleFocusin = function (t) {
            var e = t.target, i = this._config.trapElement;
            if (e === document || e === i || i.contains(e))
                return;
            var n = V.focusableChildren(i);
            0 === n.length
                ? i.focus()
                : this._lastTabNavDirection === Ei
                    ? n[n.length - 1].focus()
                    : n[0].focus();
        };
        Ai.prototype._handleKeydown = function (t) {
            "Tab" === t.key &&
                (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
        };
        Ai.prototype._getConfig = function (t) {
            return ((t = __assign(__assign({}, vi), ("object" == typeof t ? t : {}))),
                a("focustrap", t, yi),
                t);
        };
        return Ai;
    }());
    var Ti = "modal", Oi = "Escape", Ci = { backdrop: !0, keyboard: !0, focus: !0 }, ki = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
    }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
    var Hi = /** @class */ (function (_super) {
        __extends(Hi, _super);
        function Hi(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._config = _this._getConfig(e)),
                (_this._dialog = V.findOne(".modal-dialog", _this._element)),
                (_this._backdrop = _this._initializeBackDrop()),
                (_this._focustrap = _this._initializeFocusTrap()),
                (_this._isShown = !1),
                (_this._ignoreBackdropClick = !1),
                (_this._isTransitioning = !1),
                (_this._scrollBar = new fi());
            return _this;
        }
        Object.defineProperty(Hi, "Default", {
            get: function () {
                return Ci;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Hi, "NAME", {
            get: function () {
                return Ti;
            },
            enumerable: false,
            configurable: true
        });
        Hi.prototype.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
        };
        Hi.prototype.show = function (t) {
            var _this = this;
            this._isShown ||
                this._isTransitioning ||
                j.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
                ((this._isShown = !0),
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(Pi),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    j.on(this._dialog, Ii, function () {
                        j.one(_this._element, "mouseup.dismiss.bs.modal", function (t) {
                            t.target === _this._element && (_this._ignoreBackdropClick = !0);
                        });
                    }),
                    this._showBackdrop(function () { return _this._showElement(t); }));
        };
        Hi.prototype.hide = function () {
            var _this = this;
            if (!this._isShown || this._isTransitioning)
                return;
            if (j.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            var t = this._isAnimated();
            t && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                this._focustrap.deactivate(),
                this._element.classList.remove(ji),
                j.off(this._element, Si),
                j.off(this._dialog, Ii),
                this._queueCallback(function () { return _this._hideModal(); }, this._element, t);
        };
        Hi.prototype.dispose = function () {
            ;
            [window, this._dialog].forEach(function (t) { return j.off(t, ".bs.modal"); }),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                _super.prototype.dispose.call(this);
        };
        Hi.prototype.handleUpdate = function () {
            this._adjustDialog();
        };
        Hi.prototype._initializeBackDrop = function () {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        };
        Hi.prototype._initializeFocusTrap = function () {
            return new Ai({ trapElement: this._element });
        };
        Hi.prototype._getConfig = function (t) {
            return ((t = __assign(__assign(__assign({}, Ci), U.getDataAttributes(this._element)), ("object" == typeof t ? t : {}))),
                a(Ti, t, ki),
                t);
        };
        Hi.prototype._showElement = function (t) {
            var _this = this;
            var e = this._isAnimated(), i = V.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                i && (i.scrollTop = 0),
                e && u(this._element),
                this._element.classList.add(ji),
                this._queueCallback(function () {
                    _this._config.focus && _this._focustrap.activate(),
                        (_this._isTransitioning = !1),
                        j.trigger(_this._element, "shown.bs.modal", { relatedTarget: t });
                }, this._dialog, e);
        };
        Hi.prototype._setEscapeEvent = function () {
            var _this = this;
            this._isShown
                ? j.on(this._element, Ni, function (t) {
                    _this._config.keyboard && t.key === Oi
                        ? (t.preventDefault(), _this.hide())
                        : _this._config.keyboard ||
                            t.key !== Oi ||
                            _this._triggerBackdropTransition();
                })
                : j.off(this._element, Ni);
        };
        Hi.prototype._setResizeEvent = function () {
            var _this = this;
            this._isShown
                ? j.on(window, Di, function () { return _this._adjustDialog(); })
                : j.off(window, Di);
        };
        Hi.prototype._hideModal = function () {
            var _this = this;
            ;
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(function () {
                    document.body.classList.remove(Pi),
                        _this._resetAdjustments(),
                        _this._scrollBar.reset(),
                        j.trigger(_this._element, Li);
                });
        };
        Hi.prototype._showBackdrop = function (t) {
            var _this = this;
            j.on(this._element, Si, function (t) {
                _this._ignoreBackdropClick
                    ? (_this._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                        (!0 === _this._config.backdrop
                            ? _this.hide()
                            : "static" === _this._config.backdrop &&
                                _this._triggerBackdropTransition());
            }),
                this._backdrop.show(t);
        };
        Hi.prototype._isAnimated = function () {
            return this._element.classList.contains("fade");
        };
        Hi.prototype._triggerBackdropTransition = function () {
            var _this = this;
            if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            var _a = this._element, t = _a.classList, e = _a.scrollHeight, i = _a.style, n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
                t.contains(Mi) ||
                (n || (i.overflowY = "hidden"),
                    t.add(Mi),
                    this._queueCallback(function () {
                        t.remove(Mi),
                            n ||
                                _this._queueCallback(function () {
                                    i.overflowY = "";
                                }, _this._dialog);
                    }, this._dialog),
                    this._element.focus());
        };
        Hi.prototype._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            ((!i && t && !m()) || (i && !t && m())) &&
                (this._element.style.paddingLeft = "".concat(e, "px")),
                ((i && !t && !m()) || (!i && t && m())) &&
                    (this._element.style.paddingRight = "".concat(e, "px"));
        };
        Hi.prototype._resetAdjustments = function () {
            ;
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        };
        Hi.jQueryInterface = function (t, e) {
            return this.each(function () {
                var i = Hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    i[t](e);
                }
            });
        };
        return Hi;
    }(B));
    j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        var _this = this;
        var e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            j.one(e, xi, function (t) {
                t.defaultPrevented ||
                    j.one(e, Li, function () {
                        l(_this) && _this.focus();
                    });
            });
        var i = V.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }),
        R(Hi),
        g(Hi);
    var Bi = "offcanvas", Ri = { backdrop: !0, keyboard: !0, scroll: !1 }, Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
    var Fi = /** @class */ (function (_super) {
        __extends(Fi, _super);
        function Fi(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._config = _this._getConfig(e)),
                (_this._isShown = !1),
                (_this._backdrop = _this._initializeBackDrop()),
                (_this._focustrap = _this._initializeFocusTrap()),
                _this._addEventListeners();
            return _this;
        }
        Object.defineProperty(Fi, "NAME", {
            get: function () {
                return Bi;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Fi, "Default", {
            get: function () {
                return Ri;
            },
            enumerable: false,
            configurable: true
        });
        Fi.prototype.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
        };
        Fi.prototype.show = function (t) {
            var _this = this;
            this._isShown ||
                j.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                    (this._element.style.visibility = "visible"),
                    this._backdrop.show(),
                    this._config.scroll || new fi().hide(),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add($i),
                    this._queueCallback(function () {
                        _this._config.scroll || _this._focustrap.activate(),
                            j.trigger(_this._element, "shown.bs.offcanvas", {
                                relatedTarget: t,
                            });
                    }, this._element, !0));
        };
        Fi.prototype.hide = function () {
            var _this = this;
            this._isShown &&
                (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                    (this._focustrap.deactivate(),
                        this._element.blur(),
                        (this._isShown = !1),
                        this._element.classList.remove($i),
                        this._backdrop.hide(),
                        this._queueCallback(function () {
                            _this._element.setAttribute("aria-hidden", !0),
                                _this._element.removeAttribute("aria-modal"),
                                _this._element.removeAttribute("role"),
                                (_this._element.style.visibility = "hidden"),
                                _this._config.scroll || new fi().reset(),
                                j.trigger(_this._element, qi);
                        }, this._element, !0)));
        };
        Fi.prototype.dispose = function () {
            this._backdrop.dispose(), this._focustrap.deactivate(), _super.prototype.dispose.call(this);
        };
        Fi.prototype._getConfig = function (t) {
            return ((t = __assign(__assign(__assign({}, Ri), U.getDataAttributes(this._element)), ("object" == typeof t ? t : {}))),
                a(Bi, t, Wi),
                t);
        };
        Fi.prototype._initializeBackDrop = function () {
            var _this = this;
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: function () { return _this.hide(); },
            });
        };
        Fi.prototype._initializeFocusTrap = function () {
            return new Ai({ trapElement: this._element });
        };
        Fi.prototype._addEventListeners = function () {
            var _this = this;
            j.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
                _this._config.keyboard && "Escape" === t.key && _this.hide();
            });
        };
        Fi.jQueryInterface = function (t) {
            return this.each(function () {
                var e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t](this);
                }
            });
        };
        return Fi;
    }(B));
    j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
        var _this = this;
        var e = n(this);
        if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
            return;
        j.one(e, qi, function () {
            l(_this) && _this.focus();
        });
        var i = V.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(),
            Fi.getOrCreateInstance(e).toggle(this);
    }),
        j.on(window, "load.bs.offcanvas.data-api", function () {
            return V.find(zi).forEach(function (t) { return Fi.getOrCreateInstance(t).show(); });
        }),
        R(Fi),
        g(Fi);
    var Ui = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
    ]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = function (t, e) {
        var i = t.nodeName.toLowerCase();
        if (e.includes(i))
            return (!Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue)));
        var n = e.filter(function (t) { return t instanceof RegExp; });
        for (var t_7 = 0, e_10 = n.length; t_7 < e_10; t_7++)
            if (n[t_7].test(i))
                return !0;
        return !1;
    };
    function Yi(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        var n = new window.DOMParser().parseFromString(t, "text/html"), s = [].concat.apply([], n.body.querySelectorAll("*"));
        var _loop_1 = function (t_8, i_8) {
            var i_9 = s[t_8], n_6 = i_9.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n_6)) {
                i_9.remove();
                return "continue";
            }
            var o_4 = [].concat.apply([], i_9.attributes), r_2 = [].concat(e["*"] || [], e[n_6] || []);
            o_4.forEach(function (t) {
                Xi(t, r_2) || i_9.removeAttribute(t.nodeName);
            });
        };
        for (var t_8 = 0, i_8 = s.length; t_8 < i_8; t_8++) {
            _loop_1(t_8, i_8);
        }
        return n.body.innerHTML;
    }
    var Qi = "tooltip", Gi = new Set(["sanitize", "allowList", "sanitizeFn"]), Zi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
    }, Ji = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m() ? "right" : "left",
    }, tn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        popperConfig: null,
    }, en = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
    }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
    var un = /** @class */ (function (_super) {
        __extends(un, _super);
        function un(t, e) {
            var _this = this;
            if (void 0 === Fe)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            _this = _super.call(this, t) || this,
                (_this._isEnabled = !0),
                (_this._timeout = 0),
                (_this._hoverState = ""),
                (_this._activeTrigger = {}),
                (_this._popper = null),
                (_this._config = _this._getConfig(e)),
                (_this.tip = null),
                _this._setListeners();
            return _this;
        }
        Object.defineProperty(un, "Default", {
            get: function () {
                return tn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(un, "NAME", {
            get: function () {
                return Qi;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(un, "Event", {
            get: function () {
                return en;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(un, "DefaultType", {
            get: function () {
                return Zi;
            },
            enumerable: false,
            configurable: true
        });
        un.prototype.enable = function () {
            this._isEnabled = !0;
        };
        un.prototype.disable = function () {
            this._isEnabled = !1;
        };
        un.prototype.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
        };
        un.prototype.toggle = function (t) {
            if (this._isEnabled)
                if (t) {
                    var e_11 = this._initializeOnDelegatedTarget(t);
                    (e_11._activeTrigger.click = !e_11._activeTrigger.click),
                        e_11._isWithActiveTrigger() ? e_11._enter(null, e_11) : e_11._leave(null, e_11);
                }
                else {
                    if (this.getTipElement().classList.contains(sn))
                        return void this._leave(null, this);
                    this._enter(null, this);
                }
        };
        un.prototype.dispose = function () {
            clearTimeout(this._timeout),
                j.off(this._element.closest(ln), cn, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                _super.prototype.dispose.call(this);
        };
        un.prototype.show = function () {
            var _a;
            var _this = this;
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            var t = j.trigger(this._element, this.constructor.Event.SHOW), e = h(this._element), i = null === e
                ? this._element.ownerDocument.documentElement.contains(this._element)
                : e.contains(this._element);
            if (t.defaultPrevented || !i)
                return;
            "tooltip" === this.constructor.NAME &&
                this.tip &&
                this.getTitle() !== this.tip.querySelector(an).innerHTML &&
                (this._disposePopper(), this.tip.remove(), (this.tip = null));
            var n = this.getTipElement(), s = (function (t) {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME);
            n.setAttribute("id", s),
                this._element.setAttribute("aria-describedby", s),
                this._config.animation && n.classList.add(nn);
            var o = "function" == typeof this._config.placement
                ? this._config.placement.call(this, n, this._element)
                : this._config.placement, r = this._getAttachment(o);
            this._addAttachmentClass(r);
            var a = this._config.container;
            H.set(n, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) ||
                    (a.append(n),
                        j.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper
                    ? this._popper.update()
                    : (this._popper = qe(this._element, n, this._getPopperConfig(r))),
                n.classList.add(sn);
            var l = this._resolvePossibleFunction(this._config.customClass);
            l && (_a = n.classList).add.apply(_a, l.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat.apply([], document.body.children).forEach(function (t) {
                        j.on(t, "mouseover", d);
                    });
            var c = this.tip.classList.contains(nn);
            this._queueCallback(function () {
                var t = _this._hoverState;
                (_this._hoverState = null),
                    j.trigger(_this._element, _this.constructor.Event.SHOWN),
                    t === rn && _this._leave(null, _this);
            }, this.tip, c);
        };
        un.prototype.hide = function () {
            var _this = this;
            if (!this._popper)
                return;
            var t = this.getTipElement();
            if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(sn),
                "ontouchstart" in document.documentElement &&
                    []
                        .concat.apply([], document.body.children).forEach(function (t) { return j.off(t, "mouseover", d); }),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            var e = this.tip.classList.contains(nn);
            this._queueCallback(function () {
                _this._isWithActiveTrigger() ||
                    (_this._hoverState !== on && t.remove(),
                        _this._cleanTipClass(),
                        _this._element.removeAttribute("aria-describedby"),
                        j.trigger(_this._element, _this.constructor.Event.HIDDEN),
                        _this._disposePopper());
            }, this.tip, e),
                (this._hoverState = "");
        };
        un.prototype.update = function () {
            null !== this._popper && this._popper.update();
        };
        un.prototype.isWithContent = function () {
            return Boolean(this.getTitle());
        };
        un.prototype.getTipElement = function () {
            if (this.tip)
                return this.tip;
            var t = document.createElement("div");
            t.innerHTML = this._config.template;
            var e = t.children[0];
            return (this.setContent(e), e.classList.remove(nn, sn), (this.tip = e), this.tip);
        };
        un.prototype.setContent = function (t) {
            this._sanitizeAndSetContent(t, this.getTitle(), an);
        };
        un.prototype._sanitizeAndSetContent = function (t, e, i) {
            var n = V.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove();
        };
        un.prototype.setElementContent = function (t, e) {
            if (null !== t)
                return o(e)
                    ? ((e = r(e)),
                        void (this._config.html
                            ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
                            : (t.textContent = e.textContent)))
                    : void (this._config.html
                        ? (this._config.sanitize &&
                            (e = Yi(e, this._config.allowList, this._config.sanitizeFn)),
                            (t.innerHTML = e))
                        : (t.textContent = e));
        };
        un.prototype.getTitle = function () {
            var t = this._element.getAttribute("data-bs-original-title") ||
                this._config.title;
            return this._resolvePossibleFunction(t);
        };
        un.prototype.updateAttachment = function (t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        };
        un.prototype._initializeOnDelegatedTarget = function (t, e) {
            return (e ||
                this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()));
        };
        un.prototype._getOffset = function () {
            var _this = this;
            var t = this._config.offset;
            return "string" == typeof t
                ? t.split(",").map(function (t) { return Number.parseInt(t, 10); })
                : "function" == typeof t
                    ? function (e) { return t(e, _this._element); }
                    : t;
        };
        un.prototype._resolvePossibleFunction = function (t) {
            return "function" == typeof t ? t.call(this._element) : t;
        };
        un.prototype._getPopperConfig = function (t) {
            var _this = this;
            var e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: { fallbackPlacements: this._config.fallbackPlacements },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: ".".concat(this.constructor.NAME, "-arrow") },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: function (t) { return _this._handlePopperPlacementChange(t); },
                    },
                ],
                onFirstUpdate: function (t) {
                    t.options.placement !== t.placement &&
                        _this._handlePopperPlacementChange(t);
                },
            };
            return __assign(__assign({}, e), ("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(e)
                : this._config.popperConfig));
        };
        un.prototype._addAttachmentClass = function (t) {
            this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
        };
        un.prototype._getAttachment = function (t) {
            return Ji[t.toUpperCase()];
        };
        un.prototype._setListeners = function () {
            var _this = this;
            this._config.trigger.split(" ").forEach(function (t) {
                if ("click" === t)
                    j.on(_this._element, _this.constructor.Event.CLICK, _this._config.selector, function (t) { return _this.toggle(t); });
                else if ("manual" !== t) {
                    var e_12 = t === hn
                        ? _this.constructor.Event.MOUSEENTER
                        : _this.constructor.Event.FOCUSIN, i_10 = t === hn
                        ? _this.constructor.Event.MOUSELEAVE
                        : _this.constructor.Event.FOCUSOUT;
                    j.on(_this._element, e_12, _this._config.selector, function (t) { return _this._enter(t); }),
                        j.on(_this._element, i_10, _this._config.selector, function (t) { return _this._leave(t); });
                }
            }),
                (this._hideModalHandler = function () {
                    _this._element && _this.hide();
                }),
                j.on(this._element.closest(ln), cn, this._hideModalHandler),
                this._config.selector
                    ? (this._config = __assign(__assign({}, this._config), { trigger: "manual", selector: "" }))
                    : this._fixTitle();
        };
        un.prototype._fixTitle = function () {
            var t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
                (this._element.setAttribute("data-bs-original-title", t || ""),
                    !t ||
                        this._element.getAttribute("aria-label") ||
                        this._element.textContent ||
                        this._element.setAttribute("aria-label", t),
                    this._element.setAttribute("title", ""));
        };
        un.prototype._enter = function (t, e) {
            ;
            (e = this._initializeOnDelegatedTarget(t, e)),
                t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0),
                e.getTipElement().classList.contains(sn) || e._hoverState === on
                    ? (e._hoverState = on)
                    : (clearTimeout(e._timeout),
                        (e._hoverState = on),
                        e._config.delay && e._config.delay.show
                            ? (e._timeout = setTimeout(function () {
                                e._hoverState === on && e.show();
                            }, e._config.delay.show))
                            : e.show());
        };
        un.prototype._leave = function (t, e) {
            ;
            (e = this._initializeOnDelegatedTarget(t, e)),
                t &&
                    (e._activeTrigger["focusout" === t.type ? dn : hn] =
                        e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                        (e._hoverState = rn),
                        e._config.delay && e._config.delay.hide
                            ? (e._timeout = setTimeout(function () {
                                e._hoverState === rn && e.hide();
                            }, e._config.delay.hide))
                            : e.hide());
        };
        un.prototype._isWithActiveTrigger = function () {
            for (var t_9 in this._activeTrigger)
                if (this._activeTrigger[t_9])
                    return !0;
            return !1;
        };
        un.prototype._getConfig = function (t) {
            var e = U.getDataAttributes(this._element);
            return (Object.keys(e).forEach(function (t) {
                Gi.has(t) && delete e[t];
            }),
                ((t = __assign(__assign(__assign({}, this.constructor.Default), e), ("object" == typeof t && t ? t : {}))).container = !1 === t.container ? document.body : r(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                a(Qi, t, this.constructor.DefaultType),
                t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)),
                t);
        };
        un.prototype._getDelegateConfig = function () {
            var t = {};
            for (var e_13 in this._config)
                this.constructor.Default[e_13] !== this._config[e_13] &&
                    (t[e_13] = this._config[e_13]);
            return t;
        };
        un.prototype._cleanTipClass = function () {
            var t = this.getTipElement(), e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"), i = t.getAttribute("class").match(e);
            null !== i &&
                i.length > 0 &&
                i.map(function (t) { return t.trim(); }).forEach(function (e) { return t.classList.remove(e); });
        };
        un.prototype._getBasicClassPrefix = function () {
            return "bs-tooltip";
        };
        un.prototype._handlePopperPlacementChange = function (t) {
            var e = t.state;
            e &&
                ((this.tip = e.elements.popper),
                    this._cleanTipClass(),
                    this._addAttachmentClass(this._getAttachment(e.placement)));
        };
        un.prototype._disposePopper = function () {
            this._popper && (this._popper.destroy(), (this._popper = null));
        };
        un.jQueryInterface = function (t) {
            return this.each(function () {
                var e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                }
            });
        };
        return un;
    }(B));
    g(un);
    var fn = __assign(__assign({}, un.Default), { placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), pn = __assign(__assign({}, un.DefaultType), { content: "(string|element|function)" }), mn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
    };
    var gn = /** @class */ (function (_super) {
        __extends(gn, _super);
        function gn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(gn, "Default", {
            get: function () {
                return fn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(gn, "NAME", {
            get: function () {
                return "popover";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(gn, "Event", {
            get: function () {
                return mn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(gn, "DefaultType", {
            get: function () {
                return pn;
            },
            enumerable: false,
            configurable: true
        });
        gn.prototype.isWithContent = function () {
            return this.getTitle() || this._getContent();
        };
        gn.prototype.setContent = function (t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
        };
        gn.prototype._getContent = function () {
            return this._resolvePossibleFunction(this._config.content);
        };
        gn.prototype._getBasicClassPrefix = function () {
            return "bs-popover";
        };
        gn.jQueryInterface = function (t) {
            return this.each(function () {
                var e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                }
            });
        };
        return gn;
    }(un));
    g(gn);
    var _n = "scrollspy", bn = { offset: 10, method: "auto", target: "" }, vn = { offset: "number", method: "string", target: "(string|element)" }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
    var An = /** @class */ (function (_super) {
        __extends(An, _super);
        function An(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._scrollElement =
                    "BODY" === _this._element.tagName ? window : _this._element),
                (_this._config = _this._getConfig(e)),
                (_this._offsets = []),
                (_this._targets = []),
                (_this._activeTarget = null),
                (_this._scrollHeight = 0),
                j.on(_this._scrollElement, "scroll.bs.scrollspy", function () { return _this._process(); }),
                _this.refresh(),
                _this._process();
            return _this;
        }
        Object.defineProperty(An, "Default", {
            get: function () {
                return bn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(An, "NAME", {
            get: function () {
                return _n;
            },
            enumerable: false,
            configurable: true
        });
        An.prototype.refresh = function () {
            var _this = this;
            var t = this._scrollElement === this._scrollElement.window ? "offset" : En, e = "auto" === this._config.method ? t : this._config.method, n = e === En ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                V.find(wn, this._config.target)
                    .map(function (t) {
                    var s = i(t), o = s ? V.findOne(s) : null;
                    if (o) {
                        var t_10 = o.getBoundingClientRect();
                        if (t_10.width || t_10.height)
                            return [U[e](o).top + n, s];
                    }
                    return null;
                })
                    .filter(function (t) { return t; })
                    .sort(function (t, e) { return t[0] - e[0]; })
                    .forEach(function (t) {
                    _this._offsets.push(t[0]), _this._targets.push(t[1]);
                });
        };
        An.prototype.dispose = function () {
            j.off(this._scrollElement, ".bs.scrollspy"), _super.prototype.dispose.call(this);
        };
        An.prototype._getConfig = function (t) {
            return (((t = __assign(__assign(__assign({}, bn), U.getDataAttributes(this._element)), ("object" == typeof t && t ? t : {}))).target = r(t.target) || document.documentElement),
                a(_n, t, vn),
                t);
        };
        An.prototype._getScrollTop = function () {
            return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
        };
        An.prototype._getScrollHeight = function () {
            return (this._scrollElement.scrollHeight ||
                Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
        };
        An.prototype._getOffsetHeight = function () {
            return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
        };
        An.prototype._process = function () {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                var t_11 = this._targets[this._targets.length - 1];
                this._activeTarget !== t_11 && this._activate(t_11);
            }
            else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return (this._activeTarget = null), void this._clear();
                for (var e_14 = this._offsets.length; e_14--;)
                    this._activeTarget !== this._targets[e_14] &&
                        t >= this._offsets[e_14] &&
                        (void 0 === this._offsets[e_14 + 1] || t < this._offsets[e_14 + 1]) &&
                        this._activate(this._targets[e_14]);
            }
        };
        An.prototype._activate = function (t) {
            ;
            (this._activeTarget = t), this._clear();
            var e = wn
                .split(",")
                .map(function (e) { return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]"); }), i = V.findOne(e.join(","), this._config.target);
            i.classList.add(yn),
                i.classList.contains("dropdown-item")
                    ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn)
                    : V.parents(i, ".nav, .list-group").forEach(function (t) {
                        V.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
                            return t.classList.add(yn);
                        }),
                            V.prev(t, ".nav-item").forEach(function (t) {
                                V.children(t, ".nav-link").forEach(function (t) { return t.classList.add(yn); });
                            });
                    }),
                j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t,
                });
        };
        An.prototype._clear = function () {
            V.find(wn, this._config.target)
                .filter(function (t) { return t.classList.contains(yn); })
                .forEach(function (t) { return t.classList.remove(yn); });
        };
        An.jQueryInterface = function (t) {
            return this.each(function () {
                var e = An.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                }
            });
        };
        return An;
    }(B));
    j.on(window, "load.bs.scrollspy.data-api", function () {
        V.find('[data-bs-spy="scroll"]').forEach(function (t) { return new An(t); });
    }),
        g(An);
    var Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
    var xn = /** @class */ (function (_super) {
        __extends(xn, _super);
        function xn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(xn, "NAME", {
            get: function () {
                return "tab";
            },
            enumerable: false,
            configurable: true
        });
        xn.prototype.show = function () {
            var _this = this;
            if (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains(Tn))
                return;
            var t;
            var e = n(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                var e_15 = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                (t = V.find(e_15, i)), (t = t[t.length - 1]);
            }
            var s = t
                ? j.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
                : null;
            if (j.trigger(this._element, "show.bs.tab", { relatedTarget: t })
                .defaultPrevented ||
                (null !== s && s.defaultPrevented))
                return;
            this._activate(this._element, i);
            var o = function () {
                j.trigger(t, "hidden.bs.tab", { relatedTarget: _this._element }),
                    j.trigger(_this._element, "shown.bs.tab", { relatedTarget: t });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        };
        xn.prototype._activate = function (t, e, i) {
            var _this = this;
            var n = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? V.children(e, kn)
                : V.find(Ln, e))[0], s = i && n && n.classList.contains(On), o = function () { return _this._transitionComplete(t, n, i); };
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
        };
        xn.prototype._transitionComplete = function (t, e, i) {
            if (e) {
                e.classList.remove(Tn);
                var t_12 = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t_12 && t_12.classList.remove(Tn),
                    "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !1);
            }
            t.classList.add(Tn),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                u(t),
                t.classList.contains(On) && t.classList.add(Cn);
            var n = t.parentNode;
            if ((n && "LI" === n.nodeName && (n = n.parentNode),
                n && n.classList.contains("dropdown-menu"))) {
                var e_16 = t.closest(".dropdown");
                e_16 && V.find(".dropdown-toggle", e_16).forEach(function (t) { return t.classList.add(Tn); }),
                    t.setAttribute("aria-expanded", !0);
            }
            i && i();
        };
        xn.jQueryInterface = function (t) {
            return this.each(function () {
                var e = xn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                }
            });
        };
        return xn;
    }(B));
    j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        ;
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            c(this) || xn.getOrCreateInstance(this).show();
    }),
        g(xn);
    var Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = { animation: "boolean", autohide: "boolean", delay: "number" }, jn = { animation: !0, autohide: !0, delay: 5e3 };
    var Mn = /** @class */ (function (_super) {
        __extends(Mn, _super);
        function Mn(t, e) {
            var _this = this;
            _this = _super.call(this, t) || this,
                (_this._config = _this._getConfig(e)),
                (_this._timeout = null),
                (_this._hasMouseInteraction = !1),
                (_this._hasKeyboardInteraction = !1),
                _this._setListeners();
            return _this;
        }
        Object.defineProperty(Mn, "DefaultType", {
            get: function () {
                return Pn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mn, "Default", {
            get: function () {
                return jn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mn, "NAME", {
            get: function () {
                return Dn;
            },
            enumerable: false,
            configurable: true
        });
        Mn.prototype.show = function () {
            var _this = this;
            j.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove(Sn),
                    u(this._element),
                    this._element.classList.add(Nn),
                    this._element.classList.add(In),
                    this._queueCallback(function () {
                        _this._element.classList.remove(In),
                            j.trigger(_this._element, "shown.bs.toast"),
                            _this._maybeScheduleHide();
                    }, this._element, this._config.animation));
        };
        Mn.prototype.hide = function () {
            var _this = this;
            this._element.classList.contains(Nn) &&
                (j.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.add(In),
                        this._queueCallback(function () {
                            _this._element.classList.add(Sn),
                                _this._element.classList.remove(In),
                                _this._element.classList.remove(Nn),
                                j.trigger(_this._element, "hidden.bs.toast");
                        }, this._element, this._config.animation)));
        };
        Mn.prototype.dispose = function () {
            this._clearTimeout(),
                this._element.classList.contains(Nn) &&
                    this._element.classList.remove(Nn),
                _super.prototype.dispose.call(this);
        };
        Mn.prototype._getConfig = function (t) {
            return ((t = __assign(__assign(__assign({}, jn), U.getDataAttributes(this._element)), ("object" == typeof t && t ? t : {}))),
                a(Dn, t, this.constructor.DefaultType),
                t);
        };
        Mn.prototype._maybeScheduleHide = function () {
            var _this = this;
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(function () {
                        _this.hide();
                    }, this._config.delay)));
        };
        Mn.prototype._onInteraction = function (t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e)
                return void this._clearTimeout();
            var i = t.relatedTarget;
            this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
        };
        Mn.prototype._setListeners = function () {
            var _this = this;
            j.on(this._element, "mouseover.bs.toast", function (t) {
                return _this._onInteraction(t, !0);
            }),
                j.on(this._element, "mouseout.bs.toast", function (t) {
                    return _this._onInteraction(t, !1);
                }),
                j.on(this._element, "focusin.bs.toast", function (t) {
                    return _this._onInteraction(t, !0);
                }),
                j.on(this._element, "focusout.bs.toast", function (t) {
                    return _this._onInteraction(t, !1);
                });
        };
        Mn.prototype._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
        };
        Mn.jQueryInterface = function (t) {
            return this.each(function () {
                var e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError("No method named \"".concat(t, "\""));
                    e[t](this);
                }
            });
        };
        return Mn;
    }(B));
    return (R(Mn),
        g(Mn),
        {
            Alert: W,
            Button: z,
            Carousel: st,
            Collapse: pt,
            Dropdown: hi,
            Modal: Hi,
            Offcanvas: Fi,
            Popover: gn,
            ScrollSpy: An,
            Tab: xn,
            Toast: Mn,
            Tooltip: un,
        });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
