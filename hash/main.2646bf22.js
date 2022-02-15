this.wordle = this.wordle || {}, this.wordle.bundle = function (e) {
    "use strict";

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, s) {
        if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, s) {
        for (var a = 0; a < s.length; a++) {
            var t = s[a];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function o(e, s, a) {
        return s && t(e.prototype, s), a && t(e, a), e
    }

    function r(e, s, a) {
        return s in e ? Object.defineProperty(e, s, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[s] = a, e
    }

    function n(e, s) {
        if ("function" != typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(s && s.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), s && l(e, s)
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, s) {
        return (l = Object.setPrototypeOf || function (e, s) {
            return e.__proto__ = s, e
        })(e, s)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, s, a) {
        return (u = d() ? Reflect.construct : function (e, s, a) {
            var t = [null];
            t.push.apply(t, s);
            var o = new(Function.bind.apply(e, t));
            return a && l(o, a.prototype), o
        }).apply(null, arguments)
    }

    function c(e) {
        var s = "function" == typeof Map ? new Map : void 0;
        return (c = function (e) {
            if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
            var a;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== s) {
                if (s.has(e)) return s.get(e);
                s.set(e, t)
            }

            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }

    function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, s) {
        return !s || "object" != typeof s && "function" != typeof s ? p(e) : s
    }

    function h(e) {
        var s = d();
        return function () {
            var a, t = i(e);
            if (s) {
                var o = i(this).constructor;
                a = Reflect.construct(t, arguments, o)
            } else a = t.apply(this, arguments);
            return m(this, a)
        }
    }

    function y(e, s) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, s) {
            var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == a) return;
            var t, o, r = [],
                n = !0,
                i = !1;
            try {
                for (a = a.call(e); !(n = (t = a.next()).done) && (r.push(t.value), !s || r.length !== s); n = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(e, s) || b(e, s) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function (e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, s) {
        if (e) {
            if ("string" == typeof e) return f(e, s);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? f(e, s) : void 0
        }
    }

    function f(e, s) {
        (null == s || s > e.length) && (s = e.length);
        for (var a = 0, t = new Array(s); a < s; a++) t[a] = e[a];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), r(p(e = s.call(this)), "_letter", ""), r(p(e), "_state", "empty"), r(p(e), "_animation", "idle"), r(p(e), "_last", !1), r(p(e), "_reveal", !1), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "last",
            set: function (e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function (s) {
                    "PopIn" === s.animationName && (e._animation = "idle"), "FlipIn" === s.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === s.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))), e._render()
                })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function (e, s, a) {
                switch (e) {
                    case "letter":
                        if (a === s) break;
                        var t = "null" === a ? "" : a;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case "evaluation":
                        if (!a) break;
                        this._state = a;
                        break;
                    case "reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function () {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function () {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e._letters = "", e._evaluation = [], e._length, e
        }
        return o(t, [{
            key: "evaluation",
            get: function () {
                return this._evaluation
            },
            set: function (e) {
                var s = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function (e, a) {
                    e.setAttribute("evaluation", s._evaluation[a]), setTimeout((function () {
                        e.setAttribute("reveal", "")
                    }), 300 * a)
                }))
            }
        }, {
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var s = function (s) {
                        var a = document.createElement("game-tile"),
                            t = e._letters[s];
                        (t && a.setAttribute("letter", t), e._evaluation[s]) && (a.setAttribute("evaluation", e._evaluation[s]), setTimeout((function () {
                            a.setAttribute("reveal", "")
                        }), 100 * s));
                        s === e._length - 1 && (a.last = !0), e.$row.appendChild(a)
                    }, a = 0; a < this._length; a++) s(a);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function (s) {
                    "Shake" === s.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function (e, s, a) {
                switch (e) {
                    case "letters":
                        this._letters = a || "";
                        break;
                    case "length":
                        this._length = parseInt(a, 10);
                        break;
                    case "win":
                        if (null === a) {
                            this.$tiles.forEach((function (e) {
                                e.classList.remove("win")
                            }));
                            break
                        }
                        this.$tiles.forEach((function (e, s) {
                            e.classList.add("win"), e.style.animationDelay = "".concat(100 * s, "ms")
                        }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function () {
                var e = this;
                this.$row && this.$tiles.forEach((function (s, a) {
                    var t = e._letters[a];
                    t ? s.setAttribute("letter", t) : s.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function () {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
        S = "colorBlindTheme",
        _ = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                a(this, t), r(p(e = s.call(this)), "isDarkTheme", !1), r(p(e), "isColorBlindTheme", !1), e.attachShadow({
                    mode: "open"
                });
                var o = JSON.parse(window.localStorage.getItem(j)),
                    n = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === o || !1 === o ? e.setDarkTheme(o) : n && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
            }
            return o(t, [{
                key: "setDarkTheme",
                value: function (e) {
                    var s = document.querySelector("body");
                    e && !s.classList.contains("nightmode") ? s.classList.add("nightmode") : s.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function (e) {
                    var s = document.querySelector("body");
                    e && !s.classList.contains("colorblind") ? s.classList.add("colorblind") : s.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function (s) {
                        var a = s.detail,
                            t = a.name,
                            o = a.checked;
                        switch (t) {
                            case "dark-theme":
                                return void e.setDarkTheme(o);
                            case "color-blind-theme":
                                return void e.setColorBlindTheme(o)
                        }
                    }))
                }
            }]), t
        }(c(HTMLElement));

    function q(e, s) {
        return e === s || e != e && s != s
    }

    function E(e, s) {
        for (var a = e.length; a--;)
            if (q(e[a][0], s)) return a;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var L = Array.prototype.splice;

    function A(e) {
        var s = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++s < a;) {
            var t = e[s];
            this.set(t[0], t[1])
        }
    }
    A.prototype.clear = function () {
        this.__data__ = [], this.size = 0
    }, A.prototype.delete = function (e) {
        var s = this.__data__,
            a = E(s, e);
        return !(a < 0) && (a == s.length - 1 ? s.pop() : L.call(s, a, 1), --this.size, !0)
    }, A.prototype.get = function (e) {
        var s = this.__data__,
            a = E(s, e);
        return a < 0 ? void 0 : s[a][1]
    }, A.prototype.has = function (e) {
        return E(this.__data__, e) > -1
    }, A.prototype.set = function (e, s) {
        var a = this.__data__,
            t = E(a, e);
        return t < 0 ? (++this.size, a.push([e, s])) : a[t][1] = s, this
    };
    var T = "object" == ("undefined" == typeof global ? "undefined" : s(global)) && global && global.Object === Object && global,
        C = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
        I = T || C || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        $ = O.toString,
        P = M ? M.toStringTag : void 0;
    var N = Object.prototype.toString;
    var H = M ? M.toStringTag : void 0;

    function G(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : H && H in Object(e) ? function (e) {
            var s = R.call(e, P),
                a = e[P];
            try {
                e[P] = void 0;
                var t = !0
            } catch (e) {}
            var o = $.call(e);
            return t && (s ? e[P] = a : delete e[P]), o
        }(e) : function (e) {
            return N.call(e)
        }(e)
    }

    function B(e) {
        var a = s(e);
        return null != e && ("object" == a || "function" == a)
    }

    function D(e) {
        if (!B(e)) return !1;
        var s = G(e);
        return "[object Function]" == s || "[object GeneratorFunction]" == s || "[object AsyncFunction]" == s || "[object Proxy]" == s
    }
    var F, W = I["__core-js_shared__"],
        Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var U = Function.prototype.toString;
    var J = /^\[object .+?Constructor\]$/,
        X = Function.prototype,
        K = Object.prototype,
        V = X.toString,
        Q = K.hasOwnProperty,
        Z = RegExp("^" + V.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) {
        return !(!B(e) || (s = e, Y && Y in s)) && (D(e) ? Z : J).test(function (e) {
            if (null != e) {
                try {
                    return U.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var s
    }

    function se(e, s) {
        var a = function (e, s) {
            return null == e ? void 0 : e[s]
        }(e, s);
        return ee(a) ? a : void 0
    }
    var ae = se(I, "Map"),
        te = se(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var re = Object.prototype.hasOwnProperty;

    function ne(e) {
        var s = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++s < a;) {
            var t = e[s];
            this.set(t[0], t[1])
        }
    }

    function ie(e, a) {
        var t, o, r = e.__data__;
        return ("string" == (o = s(t = a)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? r["string" == typeof a ? "string" : "hash"] : r.map
    }

    function le(e) {
        var s = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++s < a;) {
            var t = e[s];
            this.set(t[0], t[1])
        }
    }
    ne.prototype.clear = function () {
        this.__data__ = te ? te(null) : {}, this.size = 0
    }, ne.prototype.delete = function (e) {
        var s = this.has(e) && delete this.__data__[e];
        return this.size -= s ? 1 : 0, s
    }, ne.prototype.get = function (e) {
        var s = this.__data__;
        if (te) {
            var a = s[e];
            return "__lodash_hash_undefined__" === a ? void 0 : a
        }
        return oe.call(s, e) ? s[e] : void 0
    }, ne.prototype.has = function (e) {
        var s = this.__data__;
        return te ? void 0 !== s[e] : re.call(s, e)
    }, ne.prototype.set = function (e, s) {
        var a = this.__data__;
        return this.size += this.has(e) ? 0 : 1, a[e] = te && void 0 === s ? "__lodash_hash_undefined__" : s, this
    }, le.prototype.clear = function () {
        this.size = 0, this.__data__ = {
            hash: new ne,
            map: new(ae || A),
            string: new ne
        }
    }, le.prototype.delete = function (e) {
        var s = ie(this, e).delete(e);
        return this.size -= s ? 1 : 0, s
    }, le.prototype.get = function (e) {
        return ie(this, e).get(e)
    }, le.prototype.has = function (e) {
        return ie(this, e).has(e)
    }, le.prototype.set = function (e, s) {
        var a = ie(this, e),
            t = a.size;
        return a.set(e, s), this.size += a.size == t ? 0 : 1, this
    };

    function de(e) {
        var s = this.__data__ = new A(e);
        this.size = s.size
    }
    de.prototype.clear = function () {
        this.__data__ = new A, this.size = 0
    }, de.prototype.delete = function (e) {
        var s = this.__data__,
            a = s.delete(e);
        return this.size = s.size, a
    }, de.prototype.get = function (e) {
        return this.__data__.get(e)
    }, de.prototype.has = function (e) {
        return this.__data__.has(e)
    }, de.prototype.set = function (e, s) {
        var a = this.__data__;
        if (a instanceof A) {
            var t = a.__data__;
            if (!ae || t.length < 199) return t.push([e, s]), this.size = ++a.size, this;
            a = this.__data__ = new le(t)
        }
        return a.set(e, s), this.size = a.size, this
    };
    var ue = function () {
        try {
            var e = se(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();

    function ce(e, s, a) {
        "__proto__" == s && ue ? ue(e, s, {
            configurable: !0,
            enumerable: !0,
            value: a,
            writable: !0
        }) : e[s] = a
    }

    function pe(e, s, a) {
        (void 0 !== a && !q(e[s], a) || void 0 === a && !(s in e)) && ce(e, s, a)
    }
    var me, he = function (e, s, a) {
            for (var t = -1, o = Object(e), r = a(e), n = r.length; n--;) {
                var i = r[me ? n : ++t];
                if (!1 === s(o[i], i, o)) break
            }
            return e
        },
        ye = "object" == (void 0 === e ? "undefined" : s(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : s(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, s) {
        var a, t, o = s ? (a = e.buffer, t = new a.constructor(a.byteLength), new ke(t).set(new ke(a)), t) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length)
    }
    var we = Object.create,
        xe = function () {
            function e() {}
            return function (s) {
                if (!B(s)) return {};
                if (we) return we(s);
                e.prototype = s;
                var a = new e;
                return e.prototype = void 0, a
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function (e) {
            return ze(je(e))
        }),
        _e = Object.prototype;

    function qe(e) {
        var s = e && e.constructor;
        return e === ("function" == typeof s && s.prototype || _e)
    }

    function Ee(e) {
        return null != e && "object" == s(e)
    }

    function Le(e) {
        return Ee(e) && "[object Arguments]" == G(e)
    }
    var Ae = Object.prototype,
        Te = Ae.hasOwnProperty,
        Ce = Ae.propertyIsEnumerable,
        Ie = Le(function () {
            return arguments
        }()) ? Le : function (e) {
            return Ee(e) && Te.call(e, "callee") && !Ce.call(e, "callee")
        },
        Me = Array.isArray;

    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function Re(e) {
        return null != e && Oe(e.length) && !D(e)
    }
    var $e = "object" == (void 0 === e ? "undefined" : s(e)) && e && !e.nodeType && e,
        Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : s(module)) && module && !module.nodeType && module,
        Ne = Pe && Pe.exports === $e ? I.Buffer : void 0,
        He = (Ne ? Ne.isBuffer : void 0) || function () {
            return !1
        },
        Ge = Function.prototype,
        Be = Object.prototype,
        De = Ge.toString,
        Fe = Be.hasOwnProperty,
        We = De.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Ue = "object" == (void 0 === e ? "undefined" : s(e)) && e && !e.nodeType && e,
        Je = Ue && "object" == ("undefined" == typeof module ? "undefined" : s(module)) && module && !module.nodeType && module,
        Xe = Je && Je.exports === Ue && T.process,
        Ke = function () {
            try {
                var e = Je && Je.require && Je.require("util").types;
                return e || Xe && Xe.binding && Xe.binding("util")
            } catch (e) {}
        }(),
        Ve = Ke && Ke.isTypedArray,
        Qe = Ve ? function (e) {
            return function (s) {
                return e(s)
            }
        }(Ve) : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[G(e)]
        };

    function Ze(e, s) {
        if (("constructor" !== s || "function" != typeof e[s]) && "__proto__" != s) return e[s]
    }
    var es = Object.prototype.hasOwnProperty;

    function ss(e, s, a) {
        var t = e[s];
        es.call(e, s) && q(t, a) && (void 0 !== a || s in e) || ce(e, s, a)
    }
    var as = /^(?:0|[1-9]\d*)$/;

    function ts(e, a) {
        var t = s(e);
        return !!(a = null == a ? 9007199254740991 : a) && ("number" == t || "symbol" != t && as.test(e)) && e > -1 && e % 1 == 0 && e < a
    }
    var os = Object.prototype.hasOwnProperty;

    function rs(e, s) {
        var a = Me(e),
            t = !a && Ie(e),
            o = !a && !t && He(e),
            r = !a && !t && !o && Qe(e),
            n = a || t || o || r,
            i = n ? function (e, s) {
                for (var a = -1, t = Array(e); ++a < e;) t[a] = s(a);
                return t
            }(e.length, String) : [],
            l = i.length;
        for (var d in e) !s && !os.call(e, d) || n && ("length" == d || o && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ts(d, l)) || i.push(d);
        return i
    }
    var ns = Object.prototype.hasOwnProperty;

    function is(e) {
        if (!B(e)) return function (e) {
            var s = [];
            if (null != e)
                for (var a in Object(e)) s.push(a);
            return s
        }(e);
        var s = qe(e),
            a = [];
        for (var t in e)("constructor" != t || !s && ns.call(e, t)) && a.push(t);
        return a
    }

    function ls(e) {
        return Re(e) ? rs(e, !0) : is(e)
    }

    function ds(e) {
        return function (e, s, a, t) {
            var o = !a;
            a || (a = {});
            for (var r = -1, n = s.length; ++r < n;) {
                var i = s[r],
                    l = t ? t(a[i], e[i], i, a, e) : void 0;
                void 0 === l && (l = e[i]), o ? ce(a, i, l) : ss(a, i, l)
            }
            return a
        }(e, ls(e))
    }

    function us(e, s, a, t, o, r, n) {
        var i = Ze(e, a),
            l = Ze(s, a),
            d = n.get(l);
        if (d) pe(e, a, d);
        else {
            var u, c = r ? r(i, l, a + "", e, s, n) : void 0,
                p = void 0 === c;
            if (p) {
                var m = Me(l),
                    h = !m && He(l),
                    y = !m && !h && Qe(l);
                c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, s) {
                    var a = -1,
                        t = e.length;
                    for (s || (s = Array(t)); ++a < t;) s[a] = e[a];
                    return s
                }(i) : h ? (p = !1, c = function (e, s) {
                    if (s) return e.slice();
                    var a = e.length,
                        t = fe ? fe(a) : new e.constructor(a);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function (e) {
                    if (!Ee(e) || "[object Object]" != G(e)) return !1;
                    var s = Se(e);
                    if (null === s) return !0;
                    var a = Fe.call(s, "constructor") && s.constructor;
                    return "function" == typeof a && a instanceof a && De.call(a) == We
                }(l) || Ie(l) ? (c = i, Ie(i) ? c = ds(i) : B(i) && !D(i) || (c = function (e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (n.set(l, c), o(c, l, t, r, n), n.delete(l)), pe(e, a, c)
        }
    }

    function cs(e, s, a, t, o) {
        e !== s && he(s, (function (r, n) {
            if (o || (o = new de), B(r)) us(e, s, n, a, cs, t, o);
            else {
                var i = t ? t(Ze(e, n), r, n + "", e, s, o) : void 0;
                void 0 === i && (i = r), pe(e, n, i)
            }
        }), ls)
    }

    function ps(e) {
        return e
    }

    function ms(e, s, a) {
        switch (a.length) {
            case 0:
                return e.call(s);
            case 1:
                return e.call(s, a[0]);
            case 2:
                return e.call(s, a[0], a[1]);
            case 3:
                return e.call(s, a[0], a[1], a[2])
        }
        return e.apply(s, a)
    }
    var hs = Math.max;
    var ys = ue ? function (e, s) {
            return ue(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: (a = s, function () {
                    return a
                }),
                writable: !0
            });
            var a
        } : ps,
        gs = Date.now;
    var bs = function (e) {
        var s = 0,
            a = 0;
        return function () {
            var t = gs(),
                o = 16 - (t - a);
            if (a = t, o > 0) {
                if (++s >= 800) return arguments[0]
            } else s = 0;
            return e.apply(void 0, arguments)
        }
    }(ys);

    function fs(e, s) {
        return bs(function (e, s, a) {
            return s = hs(void 0 === s ? e.length - 1 : s, 0),
                function () {
                    for (var t = arguments, o = -1, r = hs(t.length - s, 0), n = Array(r); ++o < r;) n[o] = t[s + o];
                    o = -1;
                    for (var i = Array(s + 1); ++o < s;) i[o] = t[o];
                    return i[s] = a(n), ms(e, this, i)
                }
        }(e, s, ps), e + "")
    }
    var ks, vs = (ks = function (e, s, a) {
            cs(e, s, a)
        }, fs((function (e, a) {
            var t = -1,
                o = a.length,
                r = o > 1 ? a[o - 1] : void 0,
                n = o > 2 ? a[2] : void 0;
            for (r = ks.length > 3 && "function" == typeof r ? (o--, r) : void 0, n && function (e, a, t) {
                    if (!B(t)) return !1;
                    var o = s(a);
                    return !!("number" == o ? Re(t) && ts(a, t.length) : "string" == o && a in t) && q(t[a], e)
                }(a[0], a[1], n) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++t < o;) {
                var i = a[t];
                i && ks(e, i, t, r)
            }
            return e
        }))),
        ws = "gameState",
        xs = {
            boardState: null,
            evaluations: null,
            rowIndex: null,
            solution: null,
            gameStatus: null,
            lastPlayedTs: null,
            lastCompletedTs: null,
            restoringFromLocalStorage: null,
            hardMode: !1
        };

    function zs() {
        var e = window.localStorage.getItem(ws) || JSON.stringify(xs);
        return JSON.parse(e)
    }

    function js(e) {
        var s = zs();
        ! function (e) {
            window.localStorage.setItem(ws, JSON.stringify(e))
        }(vs(s, e))
    }
    var Ss = document.createElement("template");
    Ss.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #hash {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-4);\n    font-size: 10px;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <section>\n    <div class="setting">\n      <div class="text">\n        <div class="title">Hard Mode</div>\n        <div class="description">Any revealed hints must be used in subsequent guesses</div>\n      </div>\n      <div class="control">\n        <game-switch id="hard-mode" name="hard-mode"></game-switch>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class="setting">\n      <div class="text">\n        <div class="title">Dark Theme</div>\n      </div>\n      <div class="control">\n        <game-switch id="dark-theme" name="dark-theme"></game-switch>\n      </div>\n    </div>\n    <div class="setting">\n      <div class="text">\n        <div class="title">Color Blind Mode</div>\n        <div class="description">High contrast colors</div>\n      </div>\n      <div class="control">\n        <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n      </div>\n    </div>\n  </section>\n  \n  <div id="hash"></div>\n';
    var _s = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e, s = this;
                this.shadowRoot.appendChild(Ss.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.addEventListener("game-switch-change", (function (e) {
                    e.stopPropagation();
                    var a = e.detail,
                        t = a.name,
                        o = a.checked,
                        r = a.disabled;
                    s.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: r
                        }
                    })), s.render()
                })), this.render()
            }
        }, {
            key: "render",
            value: function () {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var s = zs();
                s.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), s.hardMode || "IN_PROGRESS" !== s.gameStatus || 0 === s.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-settings", _s);
    var qs = document.createElement("template");
    qs.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Es = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), r(p(e = s.call(this)), "_duration", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(qs.content.cloneNode(!0));
                var s = this.shadowRoot.querySelector(".toast");
                s.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function () {
                    s.classList.add("fade")
                }), this._duration), s.addEventListener("transitionend", (function (s) {
                    e.parentNode.removeChild(e)
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-toast", Es);
    var Ls = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "mined", "whelp", "idled", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "torah", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "squaw", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "agone", "lapel", "start", "greet", "kelly", "moped", "lusty", "aimer", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "bated", "spicy", "spray", "essay", "fjord", "spend", "dived", "guild", "dozed", "motor", "alone", "hatch", "solum", "thumb", "dowry", "ought", "baked", "dutch", "pilot", "tweed", "comet", "jaunt", "blest", "steed", "abyss", "growl", "fling", "dozen", "lived", "gaped", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "passe", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "vowed", "posed", "conic", "masse", "ached", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "morse", "acute", "ferry", "aside", "raced", "troll", "franc", "raved", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "dared", "panic", "solar", "shire", "proxy", "point", "towed", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "owned", "could", "oozed", "light", "those", "moist", "glace", "bazar", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "fired", "shake", "typed", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "unsay", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew", "their", "bitch", "purge", "chest", "depot", "dinge", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "acted", "fewer", "shawl", "natal", "filed", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "timed", "shown", "deary", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "pared", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "jambe", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "cured", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "taxed", "pinto", "gaily", "hated", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "ruled", "flock", "angry", "bobby", "trite", "riled", "tryst", "erred", "power", "elope", "cinch", "motto", "moved", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "doted", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "tired", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "ebbed", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "pawed", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "natty", "floor", "catch", "spade", "stein", "exist", "wired", "sized", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "poked", "sewed", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "chink", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "liker", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "roved", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "toyed", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "waved", "quick", "paste", "given", "ceded", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "edged", "slick", "derby", "wharf", "spelt", "coach", "molly", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "dixit", "handy", "grace", "ditto", "stank", "cream", "usual", "marly", "valor", "angle", "mated", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "motte", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "jaded", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "pilar", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "glued", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "pussy", "laced", "tunic", "pried", "doled", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "fined", "cupid", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "oiled", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "loved", "muted", "fumed", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "naked", "raked", "sigma", "spout", "verve", "cared", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "robed", "score", "muley", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "piled", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "raged", "rover", "gazed", "ocean", "bloom", "irate", "later", "galop", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "sawed", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "bowed", "delay", "gored", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "piped", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "dazed", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "sowed", "queen", "trout", "hired", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "baste", "pored", "quest", "willy", "eject", "grope", "butte", "reedy", "agent", "weird", "spasm", "booth", "clash", "truth", "sixty", "guppy", "clout", "leapt", "array", "crime", "began", "tumor", "spree", "rural", "balmy", "cocoa", "junta", "conch", "mammy", "burly", "frond", "waist", "cheap", "teach", "blank", "scarf", "usage", "slice", "plait", "forty", "cheer", "sandy", "clang", "faint", "joyed", "pinch", "mango", "uncut", "tench", "video", "guest", "stern", "erect", "volta", "biddy", "tulle", "curse", "olden", "bulky", "knife", "early", "umbra", "roost", "chess", "steal", "nosey", "grant", "serum", "sinew", "drone", "trone", "talon", "nobly", "mayor", "skulk", "crawl", "elbow", "stump", "shalt", "mogul", "grunt", "debut", "chide", "stint", "sheep", "forte", "green", "grass", "roach", "polka", "waver", "yeast", "wring", "lunge", "flank", "dizzy", "clank", "curve", "vying", "widen", "waxen", "verge", "gypsy", "avoid", "grain", "alloy", "myrrh", "comic", "route", "cooed", "weigh", "crown", "sheik", "graft", "mower", "adult", "finch", "tasty", "quite", "mouse", "cease", "prune", "envoy", "staid", "lasso", "tower", "alter", "crisp", "frock", "agile", "spire", "idiom", "cache", "tidal", "squat", "bleak", "style", "scowl", "diced", "slept", "known", "sweat", "lyric", "terse", "smote", "bared", "small", "caged", "dined", "hoped", "empty", "poise", "slash", "havoc", "tamed", "mouth", "defer", "along", "elfin", "joked", "amass", "deity", "seven", "icily", "exact", "rapid", "lemon", "creme", "right", "debit", "viper", "frill", "sniff", "fifty", "prank", "stiff", "hippo", "worse", "named", "fugue", "hotel", "phone", "torso", "snipe", "teeth", "lumpy", "aisle", "allay", "court", "swoon", "build", "dogma", "shirt", "gleam", "heady", "fraud", "owner", "ovate", "refit", "gazer", "width", "apply", "erase", "ethic", "ditty", "shady", "music", "tiled", "fleck", "large", "spank", "cloak", "flute", "skirt", "bided", "elegy", "roast", "pedal", "toddy", "which", "swept", "fried", "fruit", "prior", "ripen", "stock", "fancy", "arena", "rebel", "truly", "fight", "pence", "adore", "flake", "resin", "mewed", "lorry", "truck", "crack", "shore", "brace", "audio", "borne", "cruel", "shack", "trump", "puppy", "devil", "creep", "swell", "clump", "repel", "oddly", "going", "crony", "giver", "tight", "droit", "lured", "whine", "diary", "joint", "grimy", "slang", "horse", "third", "amiss", "pivot", "bacon", "viola", "brief", "tally", "broom", "think", "brunt", "niche", "dosed", "fared", "cable", "sober", "crepe", "kappa", "curly", "tepee", "rowed", "blare", "scrub", "caste", "cabby", "gloss", "level", "broad", "bully", "bride", "savoy", "curry", "slyly", "clack", "regal", "shear", "thick", "thong", "ninth", "shale", "leper", "probe", "speak", "radii", "swarm", "verso", "tenor", "paved", "sulky", "thief", "surge", "obese", "papal", "clear", "rider", "tubal", "spice", "razed", "drape", "ditch", "flask", "leger", "stark", "felon", "plank", "maker", "cubic", "tonga", "above", "hewed", "rugby", "circa", "holly", "wiser", "dilly", "shoot", "abode", "leant", "quack", "puffy", "wooed", "these", "aware", "grown", "cased", "glade", "amble", "quail", "bulge", "ounce", "wrack", "giant", "smock", "token", "blaze", "liner", "blind", "milky", "infer", "aimed", "color", "sally", "nosed", "saner", "dryly", "draft", "fated", "otter", "endow", "adorn", "hoist", "chirp", "issue", "bugle", "piper", "wager", "local", "cleft", "merry", "strip", "opera", "wiped", "guise", "close", "brawl", "deign", "mused", "crude", "swiss", "blunt", "taffy", "steam", "nomad", "pasty", "affix", "shyly", "lever", "lithe", "raise", "vizor", "hound", "fiord", "clerk", "plane", "south", "twixt", "angel", "three", "shark", "burst", "waxed", "weedy", "wordy", "beget", "waked", "racer", "spurn", "agony", "swung", "frank", "snake", "petal", "mealy", "greed", "vapid", "poesy", "screw", "sleek", "feast", "allot", "flora", "habit", "remit", "overt", "throw", "welsh", "entry", "bigot", "judge", "worry", "sheet", "semen", "penal", "oaken", "ready", "demon", "party", "pigmy", "fluke", "grill", "adage", "trend", "salve", "relic", "brown", "anger", "patsy", "cited", "neigh", "whale", "whiff", "trial", "brook", "vicar", "dimly", "scene", "tutor", "bible", "bound", "silly", "share", "crypt", "topaz", "sully", "scout", "elate", "mamma", "flour", "fishy", "paint", "voila", "domed", "clamp", "credo", "shine", "halve", "lingo", "mangy", "quoth", "steer", "livid", "twist", "blood", "trunk", "noble", "armor", "coral", "under", "toxic", "craft", "shrew", "smith", "ralph", "soapy", "towel", "sauce", "decry", "axiom", "snoop", "drier", "caper", "dusky", "fuzzy", "bison", "dirge", "terra", "eying", "filer", "arose", "blase", "realm", "pearl", "annoy", "strap", "visor", "table", "polar", "posse", "swish", "cross", "giddy", "riser", "cameo", "quake", "harsh", "union", "shone", "lease", "omega", "fumer", "urban", "grasp", "canal", "glare", "hedge", "porch", "heard", "tried", "juice", "slimy", "pulse", "plied", "venge", "duped", "blend", "daunt", "stoke", "crush", "stone", "dealt", "tooth", "maize", "bushy", "speck", "wheel", "spear", "fully", "hyena", "baron", "jerky", "snaky", "shove", "puree", "flush", "fable", "dicky", "aglow", "among", "titan", "shank", "harpy", "miner", "brood", "dairy", "toast", "acrid", "guilt", "irked", "trail", "folio", "noted", "hitch", "jelly", "slope", "broil", "baggy", "sight", "peace", "latch", "golly", "never", "opine", "tommy", "knack", "carol", "covey", "suave", "anvil", "quill", "sated", "rough", "shell", "belie", "horde", "sling", "salsa", "young", "knelt", "friar", "mercy", "asked", "brand", "limbo", "glide", "mixed", "patch", "white", "sewer", "crane", "refer", "stoop", "aloof", "fused", "roger", "yacht", "voter", "dummy", "drunk", "trade", "optic", "jumbo", "suite", "skunk", "pesky", "shift", "groom", "every", "scoff", "false", "amber", "occur", "nasal", "abuse", "tread", "armed", "batch", "water", "punch", "scent", "odder", "welch", "where", "pinky", "worth", "annex", "chalk", "shelf", "blitz", "coupe", "churl", "cause", "feral", "rumor", "fatal", "boded", "leash", "dirty", "frost", "modem", "media", "recur", "madly", "pined", "gummy", "grief", "lousy", "drift", "uncle", "cadet", "sided", "saucy", "wreak", "would", "plaza", "split", "briny", "idler", "slunk", "pouch", "adept", "sperm", "skull", "camel", "junto", "limit", "plead", "crumb", "wafer", "women", "dress", "loyal", "gamut", "shaky", "mauve", "rinse", "waded", "medal", "whose", "grail", "caved", "swash", "touch", "actor", "paddy", "plate", "brick", "ashen", "tract", "troop", "droop", "parka", "femme", "whirl", "savor", "crash", "heavy", "waned", "noisy", "wheat", "afoot", "meted", "plain", "breed", "ether", "mural", "banjo", "sense", "tying", "lathe", "snore", "scold", "while", "gauge", "mover", "caked", "dingy", "fixed", "plaid", "yoked", "voted", "vexed", "alibi", "riper", "board", "vaunt", "cobra", "taboo", "hymen", "aided", "booty", "canon", "dated", "throb", "untie", "faced", "undid", "prism", "scant", "angst", "timid", "randy", "gravy", "chair", "witty", "famed", "dense", "least", "chain", "short", "lumen", "roped", "steep", "bored", "mossy", "alarm", "thing", "waged", "proud", "smoky", "peril", "gaunt", "ranch", "birth", "mange", "chili", "fiend", "billy", "extol", "skiff", "drive", "venue", "expel", "rowdy", "squib", "stall", "ankle", "woman", "hobby", "organ", "rocky", "spine", "liken", "swoop", "vogue", "easel", "paled", "flash", "lined", "plumb", "ledge", "begin", "keyed", "reach", "tempo", "topic", "graph", "fetch", "glaze", "quote", "blade", "antic", "shave", "amend", "churn", "boned", "sharp", "jewel", "teddy", "abide", "hilly", "prude", "spunk", "urged", "gross", "egged", "basal", "amuse", "older", "moody", "maybe", "steak", "slant", "scalp", "apart", "alert", "filth", "stave", "piece", "spick", "datum", "joust", "taken", "cedar", "space", "rival", "wield", "drove", "bunch", "woody", "syrup", "force", "gland", "sneer", "email", "tuned", "wound", "spent", "enact", "piano", "snowy", "spare", "ascot", "rated", "avail", "fauna", "dread", "gnash", "theft", "tepid", "tabby", "broke", "guard", "maple", "boxed", "befit", "manly", "speed", "chuck", "guide", "state", "freak", "added", "crone", "meter", "witch", "press", "flare", "igloo", "cloud", "etude", "berry", "revue", "penny", "bread", "merge", "boxer", "fussy", "tense", "novel", "spark", "spurt", "enemy", "daily", "murky", "taint", "again", "trick", "dusty", "drake", "learn", "bevel", "smirk", "below", "fifth", "wrong", "adapt", "rayon", "foamy", "unity", "extra", "logic", "scoop", "swede", "fiery", "drank", "knave", "impel", "juror", "heave", "ninny", "rigid", "shape", "parse", "sixth", "leech", "north", "dwell", "raven", "surly", "snuff", "filly", "slain", "drama", "whore", "shred", "snort", "attic", "fence", "match", "pansy", "revel", "legal", "druid", "satin", "dried", "offer", "wider", "hover", "based", "taste", "basil", "graze", "lough", "munch", "guess", "knock", "haute", "caput", "steel", "honor", "shout", "suing", "lucid", "haste", "hence", "proof", "ladle", "decoy", "super", "buxom", "drill", "prate", "chick", "spoon", "hurry", "forum", "chasm", "skate", "spook", "drawn", "deuce", "stunt", "tramp", "drown", "purer", "mecca", "cower", "quilt", "tithe", "bingo", "notch", "aired", "lower", "happy", "buyer", "spore", "stole", "inner", "liked", "urine", "relay", "beach", "froze", "broth", "fudge", "value", "hello", "psalm", "toned", "lurid", "sooty", "salty", "after", "scamp", "truer", "image", "upper", "fever", "shorn", "biped", "beard", "spied", "arrow", "ebony", "stake", "mirth", "swing", "abhor", "rarer", "smell", "crier", "moose", "owing", "knead", "stuff", "trust", "sware", "tribe", "motif", "straw", "miser", "flung", "moral", "tenth", "lager", "bunny", "scale", "eased", "freed", "eager", "reign", "shirk", "abbot", "boast", "grand", "noise", "tardy", "blame", "hussy", "sprig", "imbue", "clove", "chime", "swamp", "brush", "ended", "sheer", "gruff", "torch", "vague", "utter", "geese", "smash", "foist", "cried", "climb", "stoic", "newly", "thigh", "scaly", "belle", "boney", "whole", "chafe", "dance", "beast", "missy", "lodge", "tripe", "testy", "frail", "prowl", "villa", "flame", "spool", "login", "navel", "snack", "rabbi", "petty", "await", "slink", "gayer", "slush", "wrath", "rally", "cider", "flirt", "hunch", "bleat", "gourd", "order", "tawny", "faith", "flaky", "faded", "inlet", "orbit", "cairn", "mowed", "saved", "ratio", "windy", "chart", "tonic", "melon", "brute", "newer", "shiny", "flail", "sword", "exert", "downy"],
        As = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "aback", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abled", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abort", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admin", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "afire", "aflaj", "afore", "afoul", "afrit", "afros", "agama", "agami", "agars", "agast", "agate", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "ainee", "ainga", "aioli", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algae", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "align", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amity", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "anoas", "anode", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "aorta", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphid", "aphis", "apian", "apiol", "apish", "apism", "apnea", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "artsy", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "assay", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avian", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awash", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axial", "axile", "axils", "axing", "axion", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "bagel", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "baler", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "basen", "baser", "bases", "basho", "basij", "basis", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawdy", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begat", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belch", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "beret", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezel", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bicep", "bices", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilge", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "binge", "bings", "bingy", "binit", "binks", "bints", "biogs", "biome", "biont", "biota", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bitty", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blech", "bleep", "blees", "blent", "blert", "blets", "bleys", "blimp", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "bloat", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurb", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boner", "bones", "bongo", "bongs", "bonie", "bonks", "bonne", "bonny", "bonus", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boozy", "boppy", "borak", "boral", "boras", "borde", "bords", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bossy", "bosun", "botas", "botch", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boule", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brash", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "bused", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "bylaw", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabal", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cacti", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "cager", "cages", "cagey", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carat", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cases", "casks", "casky", "casts", "casus", "cates", "catty", "cauda", "cauks", "cauld", "caulk", "cauls", "caums", "caups", "cauri", "causa", "cavas", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cello", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaff", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chaos", "chape", "chaps", "chapt", "chara", "chard", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "chock", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chore", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleat", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clone", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clued", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comfy", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "condo", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copse", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "corer", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coven", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crest", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cumin", "cundy", "cunei", "cunit", "cunts", "cupel", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "curer", "cures", "curet", "curfs", "curia", "curie", "curio", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "curvy", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutie", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cyber", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deash", "deave", "deaws", "deawy", "debag", "debar", "debby", "debel", "debes", "debts", "debud", "debug", "debur", "debus", "debye", "decad", "decaf", "decal", "decan", "decko", "decks", "decor", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denim", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "deter", "detox", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "dicer", "dices", "dicey", "dicht", "dicks", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dines", "dingo", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diode", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "disco", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodgy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "donut", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dopey", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "doseh", "doser", "doses", "dosha", "dotal", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dowel", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drool", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dryer", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dully", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duvet", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egger", "egmas", "egret", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "eking", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elide", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embed", "ember", "embog", "embow", "embox", "embus", "emcee", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ender", "endew", "endue", "enema", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epoxy", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erode", "erose", "erses", "eruct", "erugo", "erupt", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "ester", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethos", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evict", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "facer", "faces", "facet", "facia", "facta", "facts", "faddy", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "fecal", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "femur", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetal", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetus", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibre", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "ficus", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fines", "finis", "finks", "finny", "finos", "fiqhs", "fique", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixes", "fixit", "fizzy", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "flunk", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "focus", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "funky", "fural", "furan", "furca", "furls", "furol", "furrs", "furth", "furze", "furzy", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffe", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "gamer", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gassy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecko", "gecks", "geeks", "geeky", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghoul", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "gipsy", "girds", "girls", "girly", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "gloze", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "glyph", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "golem", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonad", "gonch", "gonef", "goner", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "gooey", "goofs", "goofy", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots", "grouf", "grout", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "guava", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumbo", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "haunt", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "hefty", "heids", "heigh", "heils", "heirs", "heist", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "humus", "hunks", "hunky", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutch", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hyper", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliac", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbox", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "ingot", "inion", "inked", "inker", "inkle", "inlay", "inned", "innit", "inorb", "input", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "intro", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "itchy", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jazzy", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joist", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "jumpy", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayak", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebab", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinky", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "kneed", "knees", "knell", "knish", "knits", "knive", "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koala", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krill", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latte", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leach", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leery", "leese", "leets", "leeze", "lefte", "lefts", "lefty", "leges", "legge", "leggo", "leggy", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lemur", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipid", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loamy", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "locus", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loopy", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lupus", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "macaw", "maced", "macer", "maces", "mache", "machi", "macho", "machs", "macks", "macle", "macon", "macro", "madge", "madid", "madre", "maerl", "mafia", "mafic", "mages", "maggs", "magma", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mambo", "mamee", "mamey", "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manic", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus", "matai", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "meaty", "mebos", "mechs", "mecks", "medic", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "metro", "meuse", "meved", "meves", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "micro", "middy", "midge", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mines", "minge", "mings", "mingy", "minim", "minis", "minke", "minks", "minny", "minos", "mints", "minty", "minus", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "modal", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "moron", "morph", "morra", "morro", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "motel", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moves", "mowas", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucky", "mucor", "mucro", "mucus", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulch", "mulct", "muled", "mules", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "muser", "muses", "muset", "musha", "mushy", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "nadir", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naker", "nakfa", "nalas", "naled", "nalla", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerdy", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninja", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "noser", "noses", "notal", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nutty", "nyaff", "nyala", "nying", "nylon", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octal", "octan", "octas", "octet", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offal", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outgo", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovine", "ovist", "ovoid", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "pasta", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payee", "payor", "paysd", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pecan", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penne", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perky", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pesto", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phono", "phons", "phony", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picky", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "piggy", "pight", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilau", "pilaw", "pilch", "pilea", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixel", "pixes", "pixie", "pized", "pizes", "pizza", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plays", "pleas", "pleat", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plump", "plums", "plumy", "plunk", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "pokal", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polyp", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "pooch", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy", "porae", "poral", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "poses", "posey", "posho", "posit", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "pouty", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "praos", "prase", "prats", "pratt", "praty", "praus", "prawn", "prays", "predy", "preed", "preen", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "prong", "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubic", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupal", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pushy", "pusle", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pygmy", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quark", "quash", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirk", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "qursh", "quyte", "rabat", "rabic", "rabis", "races", "rache", "racks", "racon", "radar", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajah", "rajas", "rajes", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "ramal", "ramee", "ramen", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "raspy", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratty", "ratus", "rauns", "raupo", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rearm", "rears", "reast", "reata", "reate", "reave", "rebar", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebus", "rebuy", "recal", "recap", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehab", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renal", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "rerun", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retch", "retem", "retia", "retie", "retox", "retry", "reuse", "revet", "revie", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhino", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robes", "roble", "robot", "rocks", "roded", "rodeo", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotor", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roven", "roves", "rowan", "rowel", "rowen", "rower", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "ruddy", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "rules", "rumal", "rumba", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "salvo", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "sappy", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "sassy", "satai", "satay", "satem", "sates", "satis", "satyr", "sauba", "sauch", "saugh", "sauls", "sault", "sauna", "saunt", "saury", "sauts", "saver", "saves", "savey", "savin", "savvy", "sawah", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scary", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scone", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scram", "scran", "scrat", "scraw", "scray", "scree", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scrum", "scuba", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "segue", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepia", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serif", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "setup", "sewan", "sewar", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "shard", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shris", "shrow", "shtik", "shtum", "shtup", "shuck", "shule", "shuln", "shuls", "shuns", "shunt", "shura", "shush", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skier", "skies", "skiey", "skimo", "skimp", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloop", "sloot", "slops", "slopy", "slorm", "slosh", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurp", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snide", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snuck", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solus", "soman", "somas", "sonar", "sonce", "sonde", "sones", "songs", "sonic", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spiky", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splat", "splay", "splog", "spode", "spods", "spoof", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stash", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stilt", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stomp", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stunk", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulph", "sulus", "sumac", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "sushi", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swami", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "swarf", "swart", "swath", "swats", "swayl", "sways", "sweal", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synod", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacky", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "taker", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tango", "tangs", "tangy", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapir", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarot", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatty", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teary", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "theta", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thrum", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timer", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tomos", "tonal", "tondi", "tondo", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "torus", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toxin", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trawl", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "tronk", "trons", "trooz", "trope", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tuber", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turbo", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweak", "tweel", "tween", "tweep", "tweer", "tweet", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfed", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "unify", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmet", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsee", "unset", "unsew", "unsex", "unsod", "untax", "untin", "unwed", "unwet", "unwit", "unwon", "unzip", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "utile", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegan", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venin", "vents", "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "vinyl", "viold", "viols", "viral", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "virus", "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volte", "volti", "volts", "volva", "volve", "vomer", "votes", "vouge", "voulu", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wacky", "wadds", "waddy", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "warty", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waves", "wavey", "wawas", "wawes", "wawls", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whiny", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wight", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "wimpy", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiper", "wipes", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wispy", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woken", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "woofs", "woofy", "woold", "wools", "wooly", "woons", "woops", "woopy", "woose", "woosh", "wootz", "woozy", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wrung", "wryer", "wryly", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zesty", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonal", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"],
        Ts = "present",
        Cs = "correct";
    var Is = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };

    function Ms(e, s) {
        var a = {};
        return e.forEach((function (e, t) {
            if (s[t])
                for (var o = 0; o < e.length; o++) {
                    var r = e[o],
                        n = s[t][o],
                        i = a[r] || "unknown";
                    Is[n] > Is[i] && (a[r] = n)
                }
        })), a
    }
    var Os = new Date("2021-06-19T00:00:00");

    function Rs(e, s) {
        var a = new Date(e);
        return (new Date(s).setHours(0, 0, 0, 0) - a.setHours(0, 0, 0, 0)) / 864e5
    }
    var $s = "abcdefghijklmnopqrstuvwxyz",
        Ps = "statistics",
        Ns = "fail",
        Hs = {
            currentStreak: 0,
            maxStreak: 0,
            guesses: r({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, Ns, 0),
            winPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            averageGuesses: 0
        };

    function Gs() {
        var e = window.localStorage.getItem(Ps) || JSON.stringify(Hs);
        return JSON.parse(e)
    }

    function Bs(e) {
        var s = e.isWin,
            a = e.isStreak,
            t = e.numGuesses,
            o = Gs();
        s ? (o.guesses[t] += 1, a ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += s ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, s) {
                var a = y(s, 2),
                    t = a[0],
                    o = a[1];
                return t !== Ns ? e += t * o : e
            }), 0) / o.gamesWon),
            function (e) {
                window.localStorage.setItem(Ps, JSON.stringify(e))
            }(o)
    }
    var Ds = document.createElement("template");
    Ds.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help" class="icon">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE\n        </div>\n        <div class="menu">\n          <button id="settings" class="icon">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Fs = document.createElement("template");
    Fs.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Ws = "IN_PROGRESS",
        Ys = "WIN",
        Us = "FAIL",
        Js = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Nice"],
        Xs = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                a(this, t), r(p(e = s.call(this)), "tileIndex", 0), r(p(e), "rowIndex", 0), r(p(e), "solution", void 0), r(p(e), "boardState", void 0), r(p(e), "evaluations", void 0), r(p(e), "canInput", !0), r(p(e), "gameStatus", Ws), r(p(e), "letterEvaluations", {}), r(p(e), "$board", void 0), r(p(e), "$keyboard", void 0), r(p(e), "$game", void 0), r(p(e), "today", void 0), r(p(e), "lastPlayedTs", void 0), r(p(e), "lastCompletedTs", void 0), r(p(e), "hardMode", void 0), e.attachShadow({
                    mode: "open"
                }), e.today = new Date;
                var o, n, i = zs();
                return e.lastPlayedTs = i.lastPlayedTs, !e.lastPlayedTs || Rs(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = (o = e.today, n = Rs(Os, o) % Ls.length, Ls[n]), e.lastCompletedTs = i.lastCompletedTs, e.hardMode = i.hardMode, e.restoringFromLocalStorage = !1, js({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                })) : (e.boardState = i.boardState, e.evaluations = i.evaluations, e.rowIndex = i.rowIndex, e.solution = i.solution, e.letterEvaluations = Ms(e.boardState, e.evaluations), e.gameStatus = i.gameStatus, e.lastCompletedTs = i.lastCompletedTs, e.hardMode = i.hardMode, e.gameStatus !== Ws && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return o(t, [{
                key: "evaluateRow",
                value: function () {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, s = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            a = this.boardState[this.rowIndex];
                        if (e = a, !As.includes(e) && !Ls.includes(e)) return s.setAttribute("invalid", ""), void this.addToast("Not in word list");
                        if (this.hardMode) {
                            var t = function (e, s, a) {
                                    if (!e || !s || !a) return {
                                        validGuess: !0
                                    };
                                    for (var t = 0; t < a.length; t++)
                                        if (a[t] === Cs && e[t] !== s[t]) return {
                                            validGuess: !1,
                                            errorMessage: "".concat((o = t + 1, r = void 0, n = void 0, r = ["th", "st", "nd", "rd"], n = o % 100, o + (r[(n - 20) % 10] || r[n] || r[0])), " letter must be ").concat(s[t].toUpperCase())
                                        };
                                    for (var o, r, n, i = {}, l = 0; l < a.length; l++)[Cs, Ts].includes(a[l]) && (i[s[l]] ? i[s[l]] += 1 : i[s[l]] = 1);
                                    var d = e.split("").reduce((function (e, s) {
                                        return e[s] ? e[s] += 1 : e[s] = 1, e
                                    }), {});
                                    for (var u in i)
                                        if ((d[u] || 0) < i[u]) return {
                                            validGuess: !1,
                                            errorMessage: "Guess must contain ".concat(u.toUpperCase())
                                        };
                                    return {
                                        validGuess: !0
                                    }
                                }(a, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                o = t.validGuess,
                                r = t.errorMessage;
                            if (!o) return s.setAttribute("invalid", ""), void this.addToast(r || "Not valid in hard mode")
                        }
                        var n = function (e, s) {
                            for (var a = Array(s.length).fill("absent"), t = Array(s.length).fill(!0), o = Array(s.length).fill(!0), r = 0; r < e.length; r++) e[r] === s[r] && o[r] && (a[r] = Cs, t[r] = !1, o[r] = !1);
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                if (t[n])
                                    for (var l = 0; l < s.length; l++) {
                                        var d = s[l];
                                        if (o[l] && i === d) {
                                            a[n] = Ts, o[l] = !1;
                                            break
                                        }
                                    }
                            }
                            return a
                        }(a, this.solution);
                        this.evaluations[this.rowIndex] = n, this.letterEvaluations = Ms(this.boardState, this.evaluations), s.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = n.every((function (e) {
                                return "correct" === e
                            }));
                        if (i || l) Bs({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Rs(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }), js({
                            lastCompletedTs: Date.now()
                        }), this.gameStatus = l ? Ys : Us;
                        this.tileIndex = 0, this.canInput = !1, js({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter",
                value: function (e) {
                    this.gameStatus === Ws && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
                }
            }, {
                key: "removeLetter",
                value: function () {
                    if (this.gameStatus === Ws && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function () {
                    if (this.gameStatus === Ws && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function (e, s) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), s && t.setAttribute("duration", s), a ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function () {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        s = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        a = 6 * Math.floor(s / 5);
                    this.$board.style.width = "".concat(s, "px"), this.$board.style.height = "".concat(a, "px")
                }
            }, {
                key: "showStatsModal",
                value: function () {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-stats")), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function () {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Ds.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function () {
                        return e.showHelpModal()
                    }), 1e3);
                    for (var s = 0; s < 6; s++) {
                        var a = document.createElement("game-row");
                        a.setAttribute("letters", this.boardState[s]), a.setAttribute("length", 5), this.evaluations[s] && (a.evaluation = this.evaluations[s]), this.$board.appendChild(a)
                    }
                    this.$game.addEventListener("game-key-press", (function (s) {
                        var a = s.detail.key;
                        "←" === a || "Backspace" === a ? e.removeLetter() : "↵" === a || "Enter" === a ? e.submitGuess() : $s.includes(a.toLowerCase()) && e.addLetter(a.toLowerCase())
                    })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function (s) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (s.path || s.composedPath && s.composedPath()).includes(a) && ([Ys, Us].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === Ys && (a.setAttribute("win", ""), e.addToast(Js[e.rowIndex - 1], 2e3)), e.gameStatus === Us && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function () {
                            e.showStatsModal()
                        }), 2500))), e.restoringFromLocalStorage = !1)
                    })), this.shadowRoot.addEventListener("game-setting-change", (function (s) {
                        var a = s.detail,
                            t = a.name,
                            o = a.checked,
                            r = a.disabled;
                        switch (t) {
                            case "hard-mode":
                                return void(r ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, js({
                                    hardMode: o
                                })))
                        }
                    })), this.shadowRoot.getElementById("settings").addEventListener("click", (function (s) {
                        var a = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Settings");
                        a.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"), a.appendChild(o), a.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("help").addEventListener("click", (function (s) {
                        var a = e.$game.querySelector("game-page"),
                            t = document.createTextNode("How to play");
                        a.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), a.appendChild(o), a.setAttribute("open", "")
                    })), window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, {
                key: "disconnectedCallback",
                value: function () {}
            }, {
                key: "debugTools",
                value: function () {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Fs.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function (s) {
                        e.addToast("hello world")
                    })), this.shadowRoot.getElementById("modal").addEventListener("click", (function (s) {
                        var a = e.$game.querySelector("game-modal");
                        a.textContent = "hello plz", a.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function () {
                        e.evaluateRow()
                    })), this.shadowRoot.getElementById("shake").addEventListener("click", (function () {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function () {
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === s.getAttribute("win") ? s.removeAttribute("win") : s.setAttribute("win", "")
                    }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", Xs);
    var Ks = document.createElement("template");
    Ks.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: scroll;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var Vs = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ks.content.cloneNode(!0)), this.addEventListener("click", (function (s) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function (s) {
                    "SlideOut" === s.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-modal", Vs);
    var Qs = document.createElement("template");
    Qs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var Zs = document.createElement("template");
    Zs.innerHTML = "\n  <button>key</button>\n";
    var ea = document.createElement("template");
    ea.innerHTML = '\n  <div class="spacer"></div>\n';
    var sa = [
            ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
            ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
        ],
        aa = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                return a(this, t), r(p(e = s.call(this)), "_letterEvaluations", {}), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "letterEvaluations",
                set: function (e) {
                    this._letterEvaluations = e, this._render()
                }
            }, {
                key: "dispatchKeyPressEvent",
                value: function (e) {
                    this.dispatchEvent(new CustomEvent("game-key-press", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            key: e
                        }
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Qs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function (s) {
                        var a = s.target.closest("button");
                        a && e.$keyboard.contains(a) && e.dispatchKeyPressEvent(a.dataset.key)
                    })), window.addEventListener("keydown", (function (s) {
                        if (!0 !== s.repeat) {
                            var a = s.key,
                                t = s.metaKey,
                                o = s.ctrlKey;
                            t || o || ($s.includes(a.toLowerCase()) || "Backspace" === a || "Enter" === a) && e.dispatchKeyPressEvent(a)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function (s) {
                        var a = s.target.closest("button");
                        a && e.$keyboard.contains(a) && a.classList.remove("fade")
                    })), sa.forEach((function (s) {
                        var a = document.createElement("div");
                        a.classList.add("row"), s.forEach((function (e) {
                            var s;
                            if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                                if ((s = Zs.content.cloneNode(!0).firstElementChild).dataset.key = e, s.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), s.textContent = "", s.appendChild(t), s.classList.add("one-and-a-half")
                                }
                                "↵" == e && (s.textContent = "enter", s.classList.add("one-and-a-half"))
                            } else(s = ea.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            a.appendChild(s)
                        })), e.$keyboard.appendChild(a)
                    })), this._render()
                }
            }, {
                key: "_render",
                value: function () {
                    for (var e in this._letterEvaluations) {
                        var s = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        s.dataset.state = this._letterEvaluations[e], s.classList.add("fade")
                    }
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-keyboard", aa);
    var ta = document.createElement("template");
    ta.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-correct);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n';
    var oa = document.createElement("template");
    oa.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var ra = document.createElement("template");
    ra.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var na = {
            currentStreak: "Current Streak",
            maxStreak: "Max Streak",
            winPercentage: "Win %",
            gamesPlayed: "Played",
            gamesWon: "Won",
            averageGuesses: "Av. Guesses"
        },
        ia = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                return a(this, t), r(p(e = s.call(this)), "stats", {}), e.attachShadow({
                    mode: "open"
                }), e.stats = Gs(), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(ta.content.cloneNode(!0));
                    for (var s = this.shadowRoot.getElementById("statistics"), a = this.shadowRoot.getElementById("guess-distribution"), t = Math.max.apply(Math, g(Object.values(this.stats.guesses))), o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                        var r = o,
                            n = this.stats.guesses[o],
                            i = ra.content.cloneNode(!0),
                            l = Math.max(7, Math.round(n / t * 100));
                        i.querySelector(".guess").textContent = r, i.querySelector(".graph-bar").style.width = "".concat(l, "%"), "number" == typeof n && (i.querySelector(".num-guesses").textContent = n, n > 0 && i.querySelector(".graph-bar").classList.add("align-right")), a.appendChild(i)
                    } ["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (a) {
                        var t = na[a],
                            o = e.stats[a],
                            r = oa.content.cloneNode(!0);
                        r.querySelector(".label").textContent = t, r.querySelector(".statistic").textContent = o, s.appendChild(r)
                    }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-stats", ia);
    var la = document.createElement("template");
    la.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var da = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(la.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function (s) {
                    s.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function () {
                return ["checked"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", da);
    var ua = document.createElement("template");
    ua.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l" evaluation="present" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>The letter <strong>L</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new word will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var ca = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                this.shadowRoot.appendChild(ua.content.cloneNode(!0))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-help", ca);
    var pa = document.createElement("template");
    pa.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n  <div class="content">\n    <header>\n      <h1><slot></slot></h1>\n      <game-icon icon="close"></game-icon>\n    </header>\n      <slot name="content"></slot>\n    </div>\n  </div>\n');
    var ma = function (e) {
        n(t, e);
        var s = h(t);

        function t() {
            var e;
            return a(this, t), (e = s.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(pa.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (s) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function (s) {
                    "SlideOut" === s.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function (s) {
                        e.removeChild(s)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", ma);
    var ha = document.createElement("template");
    ha.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var ya = {
            help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
            settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
            backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
            close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        },
        ga = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                return a(this, t), (e = s.call(this)).attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function () {
                    this.shadowRoot.appendChild(ha.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", ya[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)")
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-icon", ga);
    var ba = document.createElement("template");
    ba.innerHTML = '\n  <div id="timer"></div>\n';
    var fa = 6e4,
        ka = 36e5,
        va = function (e) {
            n(t, e);
            var s = h(t);

            function t() {
                var e;
                a(this, t), r(p(e = s.call(this)), "targetEpochMS", void 0), r(p(e), "intervalId", void 0), r(p(e), "$timer", void 0), e.attachShadow({
                    mode: "open"
                });
                var o = new Date;
                return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
            }
            return o(t, [{
                key: "padDigit",
                value: function (e) {
                    return e.toString().padStart(2, "0")
                }
            }, {
                key: "updateTimer",
                value: function () {
                    var e = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - e),
                        a = Math.floor(s % 864e5 / ka),
                        t = Math.floor(s % ka / fa),
                        o = Math.floor(s % fa / 1e3),
                        r = "".concat(this.padDigit(a), ":").concat(this.padDigit(t), ":").concat(this.padDigit(o));
                    this.$timer.textContent = r
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(ba.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function () {
                        e.updateTimer()
                    }), 200)
                }
            }]), t
        }(c(HTMLElement));
    return customElements.define("countdown-timer", va),
        function () {
            var e;

            function s() {
                dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [], s("js", new Date), s("config", "G-2SSGMHY3NP", {
                app_version: null === (e = window.wordle) || void 0 === e ? void 0 : e.hash
            })
        }(), e.CountdownTimer = va, e.GameApp = Xs, e.GameHelp = ca, e.GameIcon = ga, e.GameKeyboard = aa, e.GameModal = Vs, e.GamePage = ma, e.GameRow = x, e.GameSettings = _s, e.GameStats = ia, e.GameSwitch = da, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Es, Object.defineProperty(e, "__esModule", {
            value: !0
        }), e
}({});
//# sourceMappingURL=main.2646bf22.js.map