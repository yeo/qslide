/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
function contentLoaded(e, t) {
    var n = !1,
        r = !0,
        i = e.document,
        s = i.documentElement,
        o = i.addEventListener ? "addEventListener" : "attachEvent",
        u = i.addEventListener ? "removeEventListener" : "detachEvent",
        a = i.addEventListener ? "" : "on",
        f = function (r) {
            if (r.type == "readystatechange" && i.readyState != "complete") return;
            (r.type == "load" ? e : i)[u](a + r.type, f, !1), !n && (n = !0) && t.call(e, r.type || r)
        }, l = function () {
            try {
                s.doScroll("left")
            } catch (e) {
                setTimeout(l, 50);
                return
            }
            f("poll")
        };
    if (i.readyState == "complete") t.call(e, "lazy");
    else {
        if (i.createEventObject && s.doScroll) {
            try {
                r = !e.frameElement
            } catch (c) {}
            r && l()
        }
        i[o](a + "DOMContentLoaded", f, !1), i[o](a + "readystatechange", f, !1), e[o](a + "load", f, !1)
    }
}(function (e, t) {
    function u(e) {
        var t = o[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t
    }

    function c(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(l, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : s.isNumeric(r) ? +r : f.test(r) ? s.parseJSON(r) : r
                } catch (o) {}
                s.data(e, n, r)
            } else r = t
        }
        return r
    }

    function h(e) {
        for (var t in e) {
            if (t === "data" && s.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function p(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            o = t + "mark",
            u = s._data(e, r);
        u && (n === "queue" || !s._data(e, i)) && (n === "mark" || !s._data(e, o)) && setTimeout(function () {
            !s._data(e, i) && !s._data(e, o) && (s.removeData(e, r, !0), u.fire())
        }, 0)
    }

    function H() {
        return !1
    }

    function B() {
        return !0
    }

    function W(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function X(e, t, n) {
        t = t || 0;
        if (s.isFunction(t)) return s.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return s.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = s.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (q.test(t)) return s.filter(t, r, !n);
            t = s.filter(t, r)
        }
        return s.grep(e, function (e, r) {
            return s.inArray(e, t) >= 0 === n
        })
    }

    function V(e) {
        var t = $.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function at(e, t) {
        return s.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ft(e, t) {
        if (t.nodeType !== 1 || !s.hasData(e)) return;
        var n, r, i, o = s._data(e),
            u = s._data(t, o),
            a = o.events;
        if (a) {
            delete u.handle, u.events = {};
            for (n in a)
                for (r = 0, i = a[n].length; r < i; r++) s.event.add(t, n, a[n][r])
        }
        u.data && (u.data = s.extend({}, u.data))
    }

    function lt(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? t.outerHTML = e.outerHTML : n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(s.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached")
    }

    function ct(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function ht(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
    }

    function pt(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? ht(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && s.grep(e.getElementsByTagName("input"), ht)
    }

    function dt(e) {
        var t = n.createElement("div");
        return ut.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function kt(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = t === "width" ? 1 : 0,
            o = 4;
        if (r > 0) {
            if (n !== "border")
                for (; i < o; i += 2) n || (r -= parseFloat(s.css(e, "padding" + xt[i])) || 0), n === "margin" ? r += parseFloat(s.css(e, n + xt[i])) || 0 : r -= parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0;
            return r + "px"
        }
        r = Tt(e, t);
        if (r < 0 || r == null) r = e.style[t];
        if (bt.test(r)) return r;
        r = parseFloat(r) || 0;
        if (n)
            for (; i < o; i += 2) r += parseFloat(s.css(e, "padding" + xt[i])) || 0, n !== "padding" && (r += parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0), n === "margin" && (r += parseFloat(s.css(e, n + xt[i])) || 0);
        return r + "px"
    }

    function Qt(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (s.isFunction(n)) {
                var r = t.toLowerCase().split(qt),
                    i = 0,
                    o = r.length,
                    u, a, f;
                for (; i < o; i++) u = r[i], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), a = e[u] = e[u] || [], a[f ? "unshift" : "push"](n)
            }
        }
    }

    function Gt(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === Wt,
            c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = Gt(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = Gt(e, n, r, i, "*", o)), c
    }

    function Yt(e, n) {
        var r, i, o = s.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && s.extend(!0, e, i)
    }

    function Zt(e, t, n, r) {
        if (s.isArray(t)) s.each(t, function (t, i) {
            n || At.test(e) ? r(e, i) : Zt(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && s.type(t) === "object")
            for (var i in t) Zt(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function en(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u)
            for (a in i)
                if (i[a] && i[a].test(u)) {
                    s.unshift(a);
                    break
                }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        } if (f) return f !== s[0] && s.unshift(f), r[f]
    }

    function tn(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {}, o, u, a = r.length,
            f, l = r[0],
            c, h, p, d, v;
        for (o = 1; o < a; o++) {
            if (o === 1)
                for (u in e.converters) typeof u == "string" && (i[u.toLowerCase()] = e.converters[u]);
            c = l, l = r[o];
            if (l === "*") l = c;
            else if (c !== "*" && c !== l) {
                h = c + " " + l, p = i[h] || i["* " + l];
                if (!p) {
                    v = t;
                    for (d in i) {
                        f = d.split(" ");
                        if (f[0] === c || f[0] === "*") {
                            v = i[f[1] + " " + l];
                            if (v) {
                                d = i[d], d === !0 ? p = v : v === !0 && (p = d);
                                break
                            }
                        }
                    }
                }!p && !v && s.error("No conversion from " + h.replace(" ", " to ")), p !== !0 && (n = p ? p(n) : v(d(n)))
            }
        }
        return n
    }

    function an() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function fn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function yn() {
        return setTimeout(bn, 0), gn = s.now()
    }

    function bn() {
        gn = t
    }

    function wn(e, t) {
        var n = {};
        return s.each(mn.concat.apply([], mn.slice(0, t)), function () {
            n[this] = e
        }), n
    }

    function En(e) {
        if (!ln[e]) {
            var t = n.body,
                r = s("<" + e + ">").appendTo(t),
                i = r.css("display");
            r.remove();
            if (i === "none" || i === "") {
                cn || (cn = n.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), t.appendChild(cn);
                if (!hn || !cn.createElement) hn = (cn.contentWindow || cn.contentDocument).document, hn.write((s.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), hn.close();
                r = hn.createElement(e), hn.body.appendChild(r), i = s.css(r, "display"), t.removeChild(cn)
            }
            ln[e] = i
        }
        return ln[e]
    }

    function Nn(e) {
        return s.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n = e.document,
        r = e.navigator,
        i = e.location,
        s = function () {
            function H() {
                if (i.isReady) return;
                try {
                    n.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(H, 1);
                    return
                }
                i.ready()
            }
            var i = function (e, t) {
                return new i.fn.init(e, t, u)
            }, s = e.jQuery,
                o = e.$,
                u, a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                f = /\S/,
                l = /^\s+/,
                c = /\s+$/,
                h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                m = /(?:^|:|,)(?:\s*\[)+/g,
                g = /(webkit)[ \/]([\w.]+)/,
                y = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                b = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                E = /-([a-z]|[0-9])/ig,
                S = /^-ms-/,
                x = function (e, t) {
                    return (t + "").toUpperCase()
                }, T = r.userAgent,
                N, C, k, L = Object.prototype.toString,
                A = Object.prototype.hasOwnProperty,
                O = Array.prototype.push,
                M = Array.prototype.slice,
                _ = String.prototype.trim,
                D = Array.prototype.indexOf,
                P = {};
            return i.fn = i.prototype = {
                constructor: i,
                init: function (e, r, s) {
                    var o, u, f, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if (e === "body" && !r && n.body) return this.context = n, this[0] = n.body, this.selector = e, this.length = 1, this;
                    if (typeof e == "string") {
                        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? o = [null, e, null] : o = a.exec(e);
                        if (o && (o[1] || !r)) {
                            if (o[1]) return r = r instanceof i ? r[0] : r, l = r ? r.ownerDocument || r : n, f = h.exec(e), f ? i.isPlainObject(r) ? (e = [n.createElement(f[1])], i.fn.attr.call(e, r, !0)) : e = [l.createElement(f[1])] : (f = i.buildFragment([o[1]], [l]), e = (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes), i.merge(this, e);
                            u = n.getElementById(o[2]);
                            if (u && u.parentNode) {
                                if (u.id !== o[2]) return s.find(e);
                                this.length = 1, this[0] = u
                            }
                            return this.context = n, this.selector = e, this
                        }
                        return !r || r.jquery ? (r || s).find(e) : this.constructor(r).find(e)
                    }
                    return i.isFunction(e) ? s.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), i.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return M.call(this, 0)
                },
                get: function (e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n) {
                    var r = this.constructor();
                    return i.isArray(e) ? O.apply(r, e) : i.merge(r, e), r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                },
                each: function (e, t) {
                    return i.each(this, e, t)
                },
                ready: function (e) {
                    return i.bindReady(), C.add(e), this
                },
                eq: function (e) {
                    return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(M.apply(this, arguments), "slice", M.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(i.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: O,
                sort: [].sort,
                splice: [].splice
            }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
                var e, n, r, s, o, u, a = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    c = !1;
                typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !i.isFunction(a) && (a = {}), l === f && (a = this, --f);
                for (; f < l; f++)
                    if ((e = arguments[f]) != null)
                        for (n in e) {
                            r = a[n], s = e[n];
                            if (a === s) continue;
                            c && s && (i.isPlainObject(s) || (o = i.isArray(s))) ? (o ? (o = !1, u = r && i.isArray(r) ? r : []) : u = r && i.isPlainObject(r) ? r : {}, a[n] = i.extend(c, u, s)) : s !== t && (a[n] = s)
                        }
                return a
            }, i.extend({
                noConflict: function (t) {
                    return e.$ === i && (e.$ = o), t && e.jQuery === i && (e.jQuery = s), i
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? i.readyWait++ : i.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 && !--i.readyWait || e !== !0 && !i.isReady) {
                        if (!n.body) return setTimeout(i.ready, 1);
                        i.isReady = !0;
                        if (e !== !0 && --i.readyWait > 0) return;
                        C.fireWith(n, [i]), i.fn.trigger && i(n).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (C) return;
                    C = i.Callbacks("once memory");
                    if (n.readyState === "complete") return setTimeout(i.ready, 1);
                    if (n.addEventListener) n.addEventListener("DOMContentLoaded", k, !1), e.addEventListener("load", i.ready, !1);
                    else if (n.attachEvent) {
                        n.attachEvent("onreadystatechange", k), e.attachEvent("onload", i.ready);
                        var t = !1;
                        try {
                            t = e.frameElement == null
                        } catch (r) {}
                        n.documentElement.doScroll && t && H()
                    }
                },
                isFunction: function (e) {
                    return i.type(e) === "function"
                },
                isArray: Array.isArray || function (e) {
                    return i.type(e) === "array"
                },
                isWindow: function (e) {
                    return e != null && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return e == null ? String(e) : P[L.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var r;
                    for (r in e);
                    return r === t || A.call(e, r)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    t = i.trim(t);
                    if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                    if (p.test(t.replace(d, "@").replace(v, "]").replace(m, ""))) return (new Function("return " + t))();
                    i.error("Invalid JSON: " + t)
                },
                parseXML: function (n) {
                    if (typeof n != "string" || !n) return null;
                    var r, s;
                    try {
                        e.DOMParser ? (s = new DOMParser, r = s.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), r
                },
                noop: function () {},
                globalEval: function (t) {
                    t && f.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(S, "ms-").replace(E, x)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, n, r) {
                    var s, o = 0,
                        u = e.length,
                        a = u === t || i.isFunction(e);
                    if (r) {
                        if (a) {
                            for (s in e)
                                if (n.apply(e[s], r) === !1) break
                        } else
                            for (; o < u;)
                                if (n.apply(e[o++], r) === !1) break
                    } else if (a) {
                        for (s in e)
                            if (n.call(e[s], s, e[s]) === !1) break
                    } else
                        for (; o < u;)
                            if (n.call(e[o], o, e[o++]) === !1) break; return e
                },
                trim: _ ? function (e) {
                    return e == null ? "" : _.call(e)
                } : function (e) {
                    return e == null ? "" : e.toString().replace(l, "").replace(c, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    if (e != null) {
                        var r = i.type(e);
                        e.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(e) ? O.call(n, e) : i.merge(n, e)
                    }
                    return n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (D) return D.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var r = e.length,
                        i = 0;
                    if (typeof n.length == "number")
                        for (var s = n.length; i < s; i++) e[r++] = n[i];
                    else
                        while (n[i] !== t) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i;
                    n = !! n;
                    for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function (e, n, r) {
                    var s, o, u = [],
                        a = 0,
                        f = e.length,
                        l = e instanceof i || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || i.isArray(e));
                    if (l)
                        for (; a < f; a++) s = n(e[a], a, r), s != null && (u[u.length] = s);
                    else
                        for (o in e) s = n(e[o], o, r), s != null && (u[u.length] = s);
                    return u.concat.apply([], u)
                },
                guid: 1,
                proxy: function (e, n) {
                    if (typeof n == "string") {
                        var r = e[n];
                        n = e, e = r
                    }
                    if (!i.isFunction(e)) return t;
                    var s = M.call(arguments, 2),
                        o = function () {
                            return e.apply(n, s.concat(M.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || i.guid++, o
                },
                access: function (e, n, r, s, o, u, a) {
                    var f, l = r == null,
                        c = 0,
                        h = e.length;
                    if (r && typeof r == "object") {
                        for (c in r) i.access(e, n, c, r[c], 1, u, s);
                        o = 1
                    } else if (s !== t) {
                        f = a === t && i.isFunction(s), l && (f ? (f = n, n = function (e, t, n) {
                            return f.call(i(e), n)
                        }) : (n.call(e, s), n = null));
                        if (n)
                            for (; c < h; c++) n(e[c], r, f ? s.call(e[c], c, n(e[c], r)) : s, a);
                        o = 1
                    }
                    return o ? e : l ? n.call(e) : h ? n(e[0], r) : u
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = g.exec(e) || y.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    i.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, s) {
                        return s && s instanceof i && !(s instanceof e) && (s = e(s)), i.fn.init.call(this, r, s, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(n);
                    return e
                },
                browser: {}
            }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                P["[object " + t + "]"] = t.toLowerCase()
            }), N = i.uaMatch(T), N.browser && (i.browser[N.browser] = !0, i.browser.version = N.version), i.browser.webkit && (i.browser.safari = !0), f.test("Â ") && (l = /^[\s\xA0]+/, c = /[\s\xA0]+$/), u = i(n), n.addEventListener ? k = function () {
                n.removeEventListener("DOMContentLoaded", k, !1), i.ready()
            } : n.attachEvent && (k = function () {
                n.readyState === "complete" && (n.detachEvent("onreadystatechange", k), i.ready())
            }), i
        }(),
        o = {};
    s.Callbacks = function (e) {
        e = e ? o[e] || u(e) : {};
        var n = [],
            r = [],
            i, a, f, l, c, h, p = function (t) {
                var r, i, o, u, a;
                for (r = 0, i = t.length; r < i; r++) o = t[r], u = s.type(o), u === "array" ? p(o) : u === "function" && (!e.unique || !v.has(o)) && n.push(o)
            }, d = function (t, s) {
                s = s || [], i = !e.memory || [t, s], a = !0, f = !0, h = l || 0, l = 0, c = n.length;
                for (; n && h < c; h++)
                    if (n[h].apply(t, s) === !1 && e.stopOnFalse) {
                        i = !0;
                        break
                    }
                f = !1, n && (e.once ? i === !0 ? v.disable() : n = [] : r && r.length && (i = r.shift(), v.fireWith(i[0], i[1])))
            }, v = {
                add: function () {
                    if (n) {
                        var e = n.length;
                        p(arguments), f ? c = n.length : i && i !== !0 && (l = e, d(i[0], i[1]))
                    }
                    return this
                },
                remove: function () {
                    if (n) {
                        var t = arguments,
                            r = 0,
                            i = t.length;
                        for (; r < i; r++)
                            for (var s = 0; s < n.length; s++)
                                if (t[r] === n[s]) {
                                    f && s <= c && (c--, s <= h && h--), n.splice(s--, 1);
                                    if (e.unique) break
                                }
                    }
                    return this
                },
                has: function (e) {
                    if (n) {
                        var t = 0,
                            r = n.length;
                        for (; t < r; t++)
                            if (e === n[t]) return !0
                    }
                    return !1
                },
                empty: function () {
                    return n = [], this
                },
                disable: function () {
                    return n = r = i = t, this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return r = t, (!i || i === !0) && v.disable(), this
                },
                locked: function () {
                    return !r
                },
                fireWith: function (t, n) {
                    return r && (f ? e.once || r.push([t, n]) : (!e.once || !i) && d(t, n)), this
                },
                fire: function () {
                    return v.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!a
                }
            };
        return v
    };
    var a = [].slice;
    s.extend({
        Deferred: function (e) {
            var t = s.Callbacks("once memory"),
                n = s.Callbacks("once memory"),
                r = s.Callbacks("memory"),
                i = "pending",
                o = {
                    resolve: t,
                    reject: n,
                    notify: r
                }, u = {
                    done: t.add,
                    fail: n.add,
                    progress: r.add,
                    state: function () {
                        return i
                    },
                    isResolved: t.fired,
                    isRejected: n.fired,
                    then: function (e, t, n) {
                        return a.done(e).fail(t).progress(n), this
                    },
                    always: function () {
                        return a.done.apply(a, arguments).fail.apply(a, arguments), this
                    },
                    pipe: function (e, t, n) {
                        return s.Deferred(function (r) {
                            s.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function (e, t) {
                                var n = t[0],
                                    i = t[1],
                                    o;
                                s.isFunction(n) ? a[e](function () {
                                    o = n.apply(this, arguments), o && s.isFunction(o.promise) ? o.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === a ? r : this, [o])
                                }) : a[e](r[i])
                            })
                        }).promise()
                    },
                    promise: function (e) {
                        if (e == null) e = u;
                        else
                            for (var t in u) e[t] = u[t];
                        return e
                    }
                }, a = u.promise({}),
                f;
            for (f in o) a[f] = o[f].fire, a[f + "With"] = o[f].fireWith;
            return a.done(function () {
                i = "resolved"
            }, n.disable, r.lock).fail(function () {
                i = "rejected"
            }, t.disable, r.lock), e && e.call(a, a), a
        },
        when: function (e) {
            function c(e) {
                return function (n) {
                    t[e] = arguments.length > 1 ? a.call(arguments, 0) : n, --o || f.resolveWith(f, t)
                }
            }

            function h(e) {
                return function (t) {
                    i[e] = arguments.length > 1 ? a.call(arguments, 0) : t, f.notifyWith(l, i)
                }
            }
            var t = a.call(arguments, 0),
                n = 0,
                r = t.length,
                i = new Array(r),
                o = r,
                u = r,
                f = r <= 1 && e && s.isFunction(e.promise) ? e : s.Deferred(),
                l = f.promise();
            if (r > 1) {
                for (; n < r; n++) t[n] && t[n].promise && s.isFunction(t[n].promise) ? t[n].promise().then(c(n), f.reject, h(n)) : --o;
                o || f.resolveWith(f, t)
            } else f !== e && f.resolveWith(f, r ? [e] : []);
            return l
        }
    }), s.support = function () {
        var t, r, i, o, u, a, f, l, c, h, p, d, v = n.createElement("div"),
            m = n.documentElement;
        v.setAttribute("className", "t"), v.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", r = v.getElementsByTagName("*"), i = v.getElementsByTagName("a")[0];
        if (!r || !r.length || !i) return {};
        o = n.createElement("select"), u = o.appendChild(n.createElement("option")), a = v.getElementsByTagName("input")[0], t = {
            leadingWhitespace: v.firstChild.nodeType === 3,
            tbody: !v.getElementsByTagName("tbody").length,
            htmlSerialize: !! v.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: i.getAttribute("href") === "/a",
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !! i.style.cssFloat,
            checkOn: a.value === "on",
            optSelected: u.selected,
            getSetAttribute: v.className !== "t",
            enctype: !! n.createElement("form").enctype,
            html5Clone: n.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, s.boxModel = t.boxModel = n.compatMode === "CSS1Compat", a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete v.test
        } catch (g) {
            t.deleteExpando = !1
        }!v.addEventListener && v.attachEvent && v.fireEvent && (v.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), v.cloneNode(!0).fireEvent("onclick")), a = n.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = a.value === "t", a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), v.appendChild(a), f = n.createDocumentFragment(), f.appendChild(v.lastChild), t.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, f.removeChild(a), f.appendChild(v);
        if (v.attachEvent)
            for (p in {
                submit: 1,
                change: 1,
                focusin: 1
            }) h = "on" + p, d = h in v, d || (v.setAttribute(h, "return;"), d = typeof v[h] == "function"), t[p + "Bubbles"] = d;
        return f.removeChild(v), f = o = u = v = a = null, s(function () {
            var r, i, o, u, a, f, c, h, p, m, g, y, b, w = n.getElementsByTagName("body")[0];
            if (!w) return;
            h = 1, b = "padding:0;margin:0;border:", g = "position:absolute;top:0;left:0;width:1px;height:1px;", y = b + "0;visibility:hidden;", p = "style='" + g + b + "5px solid #000;", m = "<div " + p + "display:block;'><div style='" + b + "0;display:block;overflow:hidden;'></div></div>" + "<table " + p + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", r = n.createElement("div"), r.style.cssText = y + "width:0;height:0;position:static;top:0;margin-top:" + h + "px", w.insertBefore(r, w.firstChild), v = n.createElement("div"), r.appendChild(v), v.innerHTML = "<table><tr><td style='" + b + "0;display:none'></td><td>t</td></tr></table>", l = v.getElementsByTagName("td"), d = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = d && l[0].offsetHeight === 0, e.getComputedStyle && (v.innerHTML = "", c = n.createElement("div"), c.style.width = "0", c.style.marginRight = "0", v.style.width = "2px", v.appendChild(c), t.reliableMarginRight = (parseInt((e.getComputedStyle(c, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof v.style.zoom != "undefined" && (v.innerHTML = "", v.style.width = v.style.padding = "1px", v.style.border = 0, v.style.overflow = "hidden", v.style.display = "inline", v.style.zoom = 1, t.inlineBlockNeedsLayout = v.offsetWidth === 3, v.style.display = "block", v.style.overflow = "visible", v.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = v.offsetWidth !== 3), v.style.cssText = g + y, v.innerHTML = m, i = v.firstChild, o = i.firstChild, a = i.nextSibling.firstChild.firstChild, f = {
                doesNotAddBorder: o.offsetTop !== 5,
                doesAddBorderForTableAndCells: a.offsetTop === 5
            }, o.style.position = "fixed", o.style.top = "20px", f.fixedPosition = o.offsetTop === 20 || o.offsetTop === 15, o.style.position = o.style.top = "", i.style.overflow = "hidden", i.style.position = "relative", f.subtractsBorderForOverflowNotVisible = o.offsetTop === -5, f.doesNotIncludeMarginInBodyOffset = w.offsetTop !== h, e.getComputedStyle && (v.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(v, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof r.style.zoom != "undefined" && (r.style.zoom = 1), w.removeChild(r), c = v = r = null, s.extend(t, f)
        }), t
    }();
    var f = /^(?:\{.*\}|\[.*\])$/,
        l = /([A-Z])/g;
    s.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (s.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? s.cache[e[s.expando]] : e[s.expando], !! e && !h(e)
        },
        data: function (e, n, r, i) {
            if (!s.acceptData(e)) return;
            var o, u, a, f = s.expando,
                l = typeof n == "string",
                c = e.nodeType,
                h = c ? s.cache : e,
                p = c ? e[f] : e[f] && f,
                d = n === "events";
            if ((!p || !h[p] || !d && !i && !h[p].data) && l && r === t) return;
            p || (c ? e[f] = p = ++s.uuid : p = f), h[p] || (h[p] = {}, c || (h[p].toJSON = s.noop));
            if (typeof n == "object" || typeof n == "function") i ? h[p] = s.extend(h[p], n) : h[p].data = s.extend(h[p].data, n);
            return o = u = h[p], i || (u.data || (u.data = {}), u = u.data), r !== t && (u[s.camelCase(n)] = r), d && !u[n] ? o.events : (l ? (a = u[n], a == null && (a = u[s.camelCase(n)])) : a = u, a)
        },
        removeData: function (e, t, n) {
            if (!s.acceptData(e)) return;
            var r, i, o, u = s.expando,
                a = e.nodeType,
                f = a ? s.cache : e,
                l = a ? e[u] : u;
            if (!f[l]) return;
            if (t) {
                r = n ? f[l] : f[l].data;
                if (r) {
                    s.isArray(t) || (t in r ? t = [t] : (t = s.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (!(n ? h : s.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete f[l].data;
                if (!h(f[l])) return
            }
            s.support.deleteExpando || !f.setInterval ? delete f[l] : f[l] = null, a && (s.support.deleteExpando ? delete e[u] : e.removeAttribute ? e.removeAttribute(u) : e[u] = null)
        },
        _data: function (e, t, n) {
            return s.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = s.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), s.fn.extend({
        data: function (e, n) {
            var r, i, o, u, a, f = this[0],
                l = 0,
                h = null;
            if (e === t) {
                if (this.length) {
                    h = s.data(f);
                    if (f.nodeType === 1 && !s._data(f, "parsedAttrs")) {
                        o = f.attributes;
                        for (a = o.length; l < a; l++) u = o[l].name, u.indexOf("data-") === 0 && (u = s.camelCase(u.substring(5)), c(f, u, h[u]));
                        s._data(f, "parsedAttrs", !0)
                    }
                }
                return h
            }
            return typeof e == "object" ? this.each(function () {
                s.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", s.access(this, function (n) {
                if (n === t) return h = this.triggerHandler("getData" + i, [r[0]]), h === t && f && (h = s.data(f, e), h = c(f, e, h)), h === t && r[1] ? this.data(r[0]) : h;
                r[1] = n, this.each(function () {
                    var t = s(this);
                    t.triggerHandler("setData" + i, r), s.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                s.removeData(this, e)
            })
        }
    }), s.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", s._data(e, t, (s._data(e, t) || 0) + 1))
        },
        _unmark: function (e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark",
                    i = e ? 0 : (s._data(t, r) || 1) - 1;
                i ? s._data(t, r, i) : (s.removeData(t, r, !0), p(t, n, "mark"))
            }
        },
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = s._data(e, t), n && (!r || s.isArray(n) ? r = s._data(e, t, s.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = s.queue(e, t),
                r = n.shift(),
                i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), s._data(e, t + ".run", i), r.call(e, function () {
                s.dequeue(e, t)
            }, i)), n.length || (s.removeData(e, t + "queue " + t + ".run", !0), p(e, t, "queue"))
        }
    }), s.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? s.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = s.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && s.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                s.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = s.fx ? s.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            function h() {
                --u || r.resolveWith(i, [i])
            }
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var r = s.Deferred(),
                i = this,
                o = i.length,
                u = 1,
                a = e + "defer",
                f = e + "queue",
                l = e + "mark",
                c;
            while (o--)
                if (c = s.data(i[o], a, t, !0) || (s.data(i[o], f, t, !0) || s.data(i[o], l, t, !0)) && s.data(i[o], a, s.Callbacks("once memory"), !0)) u++, c.add(h);
            return h(), r.promise(n)
        }
    });
    var d = /[\n\t\r]/g,
        v = /\s+/,
        m = /\r/g,
        g = /^(?:button|input)$/i,
        y = /^(?:button|input|object|select|textarea)$/i,
        b = /^a(?:rea)?$/i,
        w = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        E = s.support.getSetAttribute,
        S, x, T;
    s.fn.extend({
        attr: function (e, t) {
            return s.access(this, s.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                s.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return s.access(this, s.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = s.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, u, a;
            if (s.isFunction(e)) return this.each(function (t) {
                s(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(v);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            o = " " + i.className + " ";
                            for (u = 0, a = t.length; u < a; u++)~ o.indexOf(" " + t[u] + " ") || (o += t[u] + " ");
                            i.className = s.trim(o)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, o, u, a, f;
            if (s.isFunction(e)) return this.each(function (t) {
                s(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(v);
                for (r = 0, i = this.length; r < i; r++) {
                    o = this[r];
                    if (o.nodeType === 1 && o.className)
                        if (e) {
                            u = (" " + o.className + " ").replace(d, " ");
                            for (a = 0, f = n.length; a < f; a++) u = u.replace(" " + n[a] + " ", " ");
                            o.className = s.trim(u)
                        } else o.className = ""
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return s.isFunction(e) ? this.each(function (n) {
                s(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, o = 0,
                        u = s(this),
                        a = t,
                        f = e.split(v);
                    while (i = f[o++]) a = r ? a : !u.hasClass(i), u[a ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && s._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : s._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(d, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0];
            if (!arguments.length) {
                if (o) return n = s.valHooks[o.type] || s.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, typeof r == "string" ? r.replace(m, "") : r == null ? "" : r);
                return
            }
            return i = s.isFunction(e), this.each(function (r) {
                var o = s(this),
                    u;
                if (this.nodeType !== 1) return;
                i ? u = e.call(this, r, o.val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : s.isArray(u) && (u = s.map(u, function (e) {
                    return e == null ? "" : e + ""
                })), n = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, u, "value") === t) this.value = u
            })
        }
    }), s.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, o = e.selectedIndex,
                        u = [],
                        a = e.options,
                        f = e.type === "select-one";
                    if (o < 0) return null;
                    n = f ? o : 0, r = f ? o + 1 : a.length;
                    for (; n < r; n++) {
                        i = a[n];
                        if (i.selected && (s.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !s.nodeName(i.parentNode, "optgroup"))) {
                            t = s(i).val();
                            if (f) return t;
                            u.push(t)
                        }
                    }
                    return f && !u.length && a.length ? s(a[o]).val() : u
                },
                set: function (e, t) {
                    var n = s.makeArray(t);
                    return s(e).find("option").each(function () {
                        this.selected = s.inArray(s(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, n, r, i) {
            var o, u, a, f = e.nodeType;
            if (!e || f === 3 || f === 8 || f === 2) return;
            if (i && n in s.attrFn) return s(e)[n](r);
            if (typeof e.getAttribute == "undefined") return s.prop(e, n, r);
            a = f !== 1 || !s.isXMLDoc(e), a && (n = n.toLowerCase(), u = s.attrHooks[n] || (w.test(n) ? x : S));
            if (r !== t) {
                if (r === null) {
                    s.removeAttr(e, n);
                    return
                }
                return u && "set" in u && a && (o = u.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r)
            }
            return u && "get" in u && a && (o = u.get(e, n)) !== null ? o : (o = e.getAttribute(n), o === null ? t : o)
        },
        removeAttr: function (e, t) {
            var n, r, i, o, u, a = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(v), o = r.length;
                for (; a < o; a++) i = r[a], i && (n = s.propFix[i] || i, u = w.test(i), u || s.attr(e, i, ""), e.removeAttribute(E ? i : n), u && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (g.test(e.nodeName) && e.parentNode) s.error("type property can't be changed");
                    else if (!s.support.radioValue && t === "radio" && s.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return S && s.nodeName(e, "button") ? S.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (S && s.nodeName(e, "button")) return S.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            return u = a !== 1 || !s.isXMLDoc(e), u && (n = s.propFix[n] || n, o = s.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && (i = o.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : y.test(e.nodeName) || b.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), s.attrHooks.tabindex = s.propHooks.tabIndex, x = {
        get: function (e, n) {
            var r, i = s.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? s.removeAttr(e, n) : (r = s.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, E || (T = {
        name: !0,
        id: !0,
        coords: !0
    }, S = s.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (T[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (e, t, r) {
            var i = e.getAttributeNode(r);
            return i || (i = n.createAttribute(r), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, s.attrHooks.tabindex.set = S.set, s.each(["width", "height"], function (e, t) {
        s.attrHooks[t] = s.extend(s.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), s.attrHooks.contenteditable = {
        get: S.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), S.set(e, t, n)
        }
    }), s.support.hrefNormalized || s.each(["href", "src", "width", "height"], function (e, n) {
        s.attrHooks[n] = s.extend(s.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), s.support.style || (s.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), s.support.optSelected || (s.propHooks.selected = s.extend(s.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode &&
                t.parentNode.selectedIndex), null
        }
    })), s.support.enctype || (s.propFix.enctype = "encoding"), s.support.checkOn || s.each(["radio", "checkbox"], function () {
        s.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), s.each(["radio", "checkbox"], function () {
        s.valHooks[this] = s.extend(s.valHooks[this], {
            set: function (e, t) {
                if (s.isArray(t)) return e.checked = s.inArray(s(e).val(), t) >= 0
            }
        })
    });
    var N = /^(?:textarea|input|select)$/i,
        C = /^([^\.]*)?(?:\.(.+))?$/,
        k = /(?:^|\s)hover(\.\S+)?\b/,
        L = /^key/,
        A = /^(?:mouse|contextmenu)|click/,
        O = /^(?:focusinfocus|focusoutblur)$/,
        M = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        _ = function (e) {
            var t = M.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, D = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        }, P = function (e) {
            return s.event.special.hover ? e : e.replace(k, "mouseenter$1 mouseleave$1")
        };
    s.event = {
        add: function (e, n, r, i, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(u = s._data(e))) return;
            r.handler && (v = r, r = v.handler, o = v.selector), r.guid || (r.guid = s.guid++), f = u.events, f || (u.events = f = {}), a = u.handle, a || (u.handle = a = function (e) {
                return typeof s == "undefined" || !! e && s.event.triggered === e.type ? t : s.event.dispatch.apply(a.elem, arguments)
            }, a.elem = e), n = s.trim(P(n)).split(" ");
            for (l = 0; l < n.length; l++) {
                c = C.exec(n[l]) || [], h = c[1], p = (c[2] || "").split(".").sort(), y = s.event.special[h] || {}, h = (o ? y.delegateType : y.bindType) || h, y = s.event.special[h] || {}, d = s.extend({
                    type: h,
                    origType: c[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    quick: o && _(o),
                    namespace: p.join(".")
                }, v), g = f[h];
                if (!g) {
                    g = f[h] = [], g.delegateCount = 0;
                    if (!y.setup || y.setup.call(e, i, p, a) === !1) e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a)
                }
                y.add && (y.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), s.event.global[h] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var o = s.hasData(e) && s._data(e),
                u, a, f, l, c, h, p, d, v, m, g, y;
            if (!o || !(d = o.events)) return;
            t = s.trim(P(t || "")).split(" ");
            for (u = 0; u < t.length; u++) {
                a = C.exec(t[u]) || [], f = l = a[1], c = a[2];
                if (!f) {
                    for (f in d) s.event.remove(e, f + t[u], n, r, !0);
                    continue
                }
                v = s.event.special[f] || {}, f = (r ? v.delegateType : v.bindType) || f, g = d[f] || [], h = g.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (p = 0; p < g.length; p++) y = g[p], (i || l === y.origType) && (!n || n.guid === y.guid) && (!c || c.test(y.namespace)) && (!r || r === y.selector || r === "**" && y.selector) && (g.splice(p--, 1), y.selector && g.delegateCount--, v.remove && v.remove.call(e, y));
                g.length === 0 && h !== g.length && ((!v.teardown || v.teardown.call(e, c) === !1) && s.removeEvent(e, f, o.handle), delete d[f])
            }
            s.isEmptyObject(d) && (m = o.handle, m && (m.elem = null), s.removeData(e, ["events", "handle"], !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, i, o) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var u = n.type || n,
                    a = [],
                    f, l, c, h, p, d, v, m, g, y;
                if (O.test(u + s.event.triggered)) return;
                u.indexOf("!") >= 0 && (u = u.slice(0, -1), l = !0), u.indexOf(".") >= 0 && (a = u.split("."), u = a.shift(), a.sort());
                if ((!i || s.event.customEvent[u]) && !s.event.global[u]) return;
                n = typeof n == "object" ? n[s.expando] ? n : new s.Event(u, n) : new s.Event(u), n.type = u, n.isTrigger = !0, n.exclusive = l, n.namespace = a.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, d = u.indexOf(":") < 0 ? "on" + u : "";
                if (!i) {
                    f = s.cache;
                    for (c in f) f[c].events && f[c].events[u] && s.event.trigger(n, r, f[c].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = i), r = r != null ? s.makeArray(r) : [], r.unshift(n), v = s.event.special[u] || {};
                if (v.trigger && v.trigger.apply(i, r) === !1) return;
                g = [
                    [i, v.bindType || u]
                ];
                if (!o && !v.noBubble && !s.isWindow(i)) {
                    y = v.delegateType || u, h = O.test(y + u) ? i : i.parentNode, p = null;
                    for (; h; h = h.parentNode) g.push([h, y]), p = h;
                    p && p === i.ownerDocument && g.push([p.defaultView || p.parentWindow || e, y])
                }
                for (c = 0; c < g.length && !n.isPropagationStopped(); c++) h = g[c][0], n.type = g[c][1], m = (s._data(h, "events") || {})[n.type] && s._data(h, "handle"), m && m.apply(h, r), m = d && h[d], m && s.acceptData(h) && m.apply(h, r) === !1 && n.preventDefault();
                return n.type = u, !o && !n.isDefaultPrevented() && (!v._default || v._default.apply(i.ownerDocument, r) === !1) && (u !== "click" || !s.nodeName(i, "a")) && s.acceptData(i) && d && i[u] && (u !== "focus" && u !== "blur" || n.target.offsetWidth !== 0) && !s.isWindow(i) && (p = i[d], p && (i[d] = null), s.event.triggered = u, i[u](), s.event.triggered = t, p && (i[d] = p)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = s.event.fix(n || e.event);
            var r = (s._data(this, "events") || {})[n.type] || [],
                i = r.delegateCount,
                o = [].slice.call(arguments, 0),
                u = !n.exclusive && !n.namespace,
                a = s.event.special[n.type] || {}, f = [],
                l, c, h, p, d, v, m, g, y, b, w;
            o[0] = n, n.delegateTarget = this;
            if (a.preDispatch && a.preDispatch.call(this, n) === !1) return;
            if (i && (!n.button || n.type !== "click")) {
                p = s(this), p.context = this.ownerDocument || this;
                for (h = n.target; h != this; h = h.parentNode || this)
                    if (h.disabled !== !0) {
                        v = {}, g = [], p[0] = h;
                        for (l = 0; l < i; l++) y = r[l], b = y.selector, v[b] === t && (v[b] = y.quick ? D(h, y.quick) : p.is(b)), v[b] && g.push(y);
                        g.length && f.push({
                            elem: h,
                            matches: g
                        })
                    }
            }
            r.length > i && f.push({
                elem: this,
                matches: r.slice(i)
            });
            for (l = 0; l < f.length && !n.isPropagationStopped(); l++) {
                m = f[l], n.currentTarget = m.elem;
                for (c = 0; c < m.matches.length && !n.isImmediatePropagationStopped(); c++) {
                    y = m.matches[c];
                    if (u || !n.namespace && !y.namespace || n.namespace_re && n.namespace_re.test(y.namespace)) n.data = y.data, n.handleObj = y, d = ((s.event.special[y.origType] || {}).handle || y.handler).apply(m.elem, o), d !== t && (n.result = d, d === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return a.postDispatch && a.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, r) {
                var i, s, o, u = r.button,
                    a = r.fromElement;
                return e.pageX == null && r.clientX != null && (i = e.target.ownerDocument || n, s = i.documentElement, o = i.body, e.pageX = r.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = r.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? r.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[s.expando]) return e;
            var r, i, o = e,
                u = s.event.fixHooks[e.type] || {}, a = u.props ? this.props.concat(u.props) : this.props;
            e = s.Event(o);
            for (r = a.length; r;) i = a[--r], e[i] = o[i];
            return e.target || (e.target = o.srcElement || n), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), u.filter ? u.filter(e, o) : e
        },
        special: {
            ready: {
                setup: s.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    s.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = s.extend(new s.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? s.event.trigger(i, null, t) : s.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, s.event.handle = s.event.dispatch, s.removeEvent = n.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, s.Event = function (e, t) {
        if (!(this instanceof s.Event)) return new s.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? B : H) : this.type = e, t && s.extend(this, t), this.timeStamp = e && e.timeStamp || s.now(), this[s.expando] = !0
    }, s.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = B;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = B;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = B, this.stopPropagation()
        },
        isDefaultPrevented: H,
        isPropagationStopped: H,
        isImmediatePropagationStopped: H
    }, s.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        s.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n = this,
                    r = e.relatedTarget,
                    i = e.handleObj,
                    o = i.selector,
                    u;
                if (!r || r !== n && !s.contains(n, r)) e.type = i.origType, u = i.handler.apply(this, arguments), e.type = t;
                return u
            }
        }
    }), s.support.submitBubbles || (s.event.special.submit = {
        setup: function () {
            if (s.nodeName(this, "form")) return !1;
            s.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = s.nodeName(n, "input") || s.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (s.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && s.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (s.nodeName(this, "form")) return !1;
            s.event.remove(this, "._submit")
        }
    }), s.support.changeBubbles || (s.event.special.change = {
        setup: function () {
            if (N.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") s.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), s.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, s.event.simulate("change", this, e, !0))
                });
                return !1
            }
            s.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                N.test(t.nodeName) && !t._change_attached && (s.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && s.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return s.event.remove(this, "._change"), N.test(this.nodeName)
        }
    }), s.support.focusinBubbles || s.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var r = 0,
            i = function (e) {
                s.event.simulate(t, e.target, s.event.fix(e), !0)
            };
        s.event.special[t] = {
            setup: function () {
                r++ === 0 && n.addEventListener(e, i, !0)
            },
            teardown: function () {
                --r === 0 && n.removeEventListener(e, i, !0)
            }
        }
    }), s.fn.extend({
        on: function (e, n, r, i, o) {
            var u, a;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = H;
            else if (!i) return this;
            return o === 1 && (u = i, i = function (e) {
                return s().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = s.guid++)), this.each(function () {
                s.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return s(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if (typeof e == "object") {
                for (var o in e) this.off(o, n, e[o]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = H), this.each(function () {
                s.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return s(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return s(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                s.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return s.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || s.guid++,
                r = 0,
                i = function (n) {
                    var i = (s._data(this, "lastToggle" + e.guid) || 0) % r;
                    return s._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), s.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        s.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, s.attrFn && (s.attrFn[t] = !0), L.test(t) && (s.event.fixHooks[t] = s.event.keyHooks), A.test(t) && (s.event.fixHooks[t] = s.event.mouseHooks)
    }),
    function () {
        function S(e, t, n, i, s, o) {
            for (var u = 0, a = i.length; u < a; u++) {
                var f = i[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[r] === n) {
                            l = i[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[r] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    i[u] = l
                }
            }
        }

        function x(e, t, n, i, s, o) {
            for (var u = 0, a = i.length; u < a; u++) {
                var f = i[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[r] === n) {
                            l = i[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[r] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    i[u] = l
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            r = "sizcache" + (Math.random() + "").replace(".", ""),
            i = 0,
            o = Object.prototype.toString,
            u = !1,
            a = !0,
            f = /\\/g,
            l = /\r\n/g,
            c = /\W/;
        [0, 0].sort(function () {
                return a = !1, 0
            });
        var h = function (t, r, i, s) {
            i = i || [], r = r || n;
            var u = r;
            if (r.nodeType !== 1 && r.nodeType !== 9) return [];
            if (!t || typeof t != "string") return i;
            var a, f, l, c, p, m, g, b, w = !0,
                E = h.isXML(r),
                S = [],
                x = t;
            do {
                e.exec(""), a = e.exec(x);
                if (a) {
                    x = a[3], S.push(a[1]);
                    if (a[2]) {
                        c = a[3];
                        break
                    }
                }
            } while (a);
            if (S.length > 1 && v.exec(t))
                if (S.length === 2 && d.relative[S[0]]) f = T(S[0] + S[1], r, s);
                else {
                    f = d.relative[S[0]] ? [r] : h(S.shift(), r);
                    while (S.length) t = S.shift(), d.relative[t] && (t += S.shift()), f = T(t, f, s)
                } else {
                    !s && S.length > 1 && r.nodeType === 9 && !E && d.match.ID.test(S[0]) && !d.match.ID.test(S[S.length - 1]) && (p = h.find(S.shift(), r, E), r = p.expr ? h.filter(p.expr, p.set)[0] : p.set[0]);
                    if (r) {
                        p = s ? {
                            expr: S.pop(),
                            set: y(s)
                        } : h.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !r.parentNode ? r : r.parentNode, E), f = p.expr ? h.filter(p.expr, p.set) : p.set, S.length > 0 ? l = y(f) : w = !1;
                        while (S.length) m = S.pop(), g = m, d.relative[m] ? g = S.pop() : m = "", g == null && (g = r), d.relative[m](l, g, E)
                    } else l = S = []
                }
            l || (l = f), l || h.error(m || t);
            if (o.call(l) === "[object Array]")
                if (!w) i.push.apply(i, l);
                else if (r && r.nodeType === 1)
                for (b = 0; l[b] != null; b++) l[b] && (l[b] === !0 || l[b].nodeType === 1 && h.contains(r, l[b])) && i.push(f[b]);
            else
                for (b = 0; l[b] != null; b++) l[b] && l[b].nodeType === 1 && i.push(f[b]);
            else y(l, i);
            return c && (h(c, u, i, s), h.uniqueSort(i)), i
        };
        h.uniqueSort = function (e) {
            if (w) {
                u = a, e.sort(w);
                if (u)
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, h.matches = function (e, t) {
            return h(e, null, null, t)
        }, h.matchesSelector = function (e, t) {
            return h(t, null, null, [e]).length > 0
        }, h.find = function (e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, h.filter = function (e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e,
                g = [],
                y = n,
                b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter)
                    if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                        l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                        if (c.substr(c.length - 1) === "\\") continue;
                        y === g && (g = []);
                        if (d.preFilter[u]) {
                            s = d.preFilter[u](s, y, r, g, i, b);
                            if (!s) o = a = !0;
                            else if (s === !0) continue
                        }
                        if (s)
                            for (p = 0;
                                (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                        if (a !== t) {
                            r || (y = g), e = e.replace(d.match[u], "");
                            if (!o) return [];
                            break
                        }
                    }
                if (e === m) {
                    if (o != null) break;
                    h.error(e)
                }
                m = e
            }
            return y
        }, h.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function (e) {
            var t, n, r = e.nodeType,
                i = "";
            if (r) {
                if (r === 1 || r === 9 || r === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                } else if (r === 3 || r === 4) return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i
        }, d = h.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var n = typeof t == "string",
                            r = n && !c.test(t),
                            i = n && !r;
                        r && (t = t.toLowerCase());
                        for (var s = 0, o = e.length, u; s < o; s++)
                            if (u = e[s]) {
                                while ((u = u.previousSibling) && u.nodeType !== 1);
                                e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                            }
                        i && h.filter(t, e, !0)
                    },
                    ">": function (e, t) {
                        var n, r = typeof t == "string",
                            i = 0,
                            s = e.length;
                        if (r && !c.test(t)) {
                            t = t.toLowerCase();
                            for (; i < s; i++) {
                                n = e[i];
                                if (n) {
                                    var o = n.parentNode;
                                    e[i] = o.nodeName.toLowerCase() === t ? o : !1
                                }
                            }
                        } else {
                            for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                            r && h.filter(t, e, !0)
                        }
                    },
                    "": function (e, t, n) {
                        var r, s = i++,
                            o = x;
                        typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S), o("parentNode", t, s, e, r, n)
                    },
                    "~": function (e, t, n) {
                        var r, s = i++,
                            o = x;
                        typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S), o("previousSibling", t, s, e, r, n)
                    }
                },
                find: {
                    ID: function (e, t, n) {
                        if (typeof t.getElementById != "undefined" && !n) {
                            var r = t.getElementById(e[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    },
                    NAME: function (e, t) {
                        if (typeof t.getElementsByName != "undefined") {
                            var n = [],
                                r = t.getElementsByName(e[1]);
                            for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                            return n.length === 0 ? null : n
                        }
                    },
                    TAG: function (e, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                    }
                },
                preFilter: {
                    CLASS: function (e, t, n, r, i, s) {
                        e = " " + e[1].replace(f, "") + " ";
                        if (s) return e;
                        for (var o = 0, u;
                            (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                        return !1
                    },
                    ID: function (e) {
                        return e[1].replace(f, "")
                    },
                    TAG: function (e, t) {
                        return e[1].replace(f, "").toLowerCase()
                    },
                    CHILD: function (e) {
                        if (e[1] === "nth") {
                            e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && h.error(e[0]);
                        return e[0] = i++, e
                    },
                    ATTR: function (e, t, n, r, i, s) {
                        var o = e[1] = e[1].replace(f, "");
                        return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                    },
                    PSEUDO: function (t, n, r, i, s) {
                        if (t[1] === "not") {
                            if (!((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                                var o = h.filter(t[3], n, r, !0 ^ s);
                                return r || i.push.apply(i, o), !1
                            }
                            t[3] = h(t[3], null, null, n)
                        } else if (d.match.POS.test(t[0]) || d.match.CHILD.test(t[0])) return !0;
                        return t
                    },
                    POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return e.disabled === !1 && e.type !== "hidden"
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        return e.checked === !0
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !!e.firstChild
                    },
                    empty: function (e) {
                        return !e.firstChild
                    },
                    has: function (e, t, n) {
                        return !!h(n[3], e).length
                    },
                    header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    },
                    text: function (e) {
                        var t = e.getAttribute("type"),
                            n = e.type;
                        return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                    },
                    radio: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                    },
                    checkbox: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                    },
                    file: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "file" === e.type
                    },
                    password: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "password" === e.type
                    },
                    submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "submit" === e.type
                    },
                    image: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "image" === e.type
                    },
                    reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "reset" === e.type
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && "button" === e.type || t === "button"
                    },
                    input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    },
                    focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return t === 0
                    },
                    last: function (e, t, n, r) {
                        return t === r.length - 1
                    },
                    even: function (e, t) {
                        return t % 2 === 0
                    },
                    odd: function (e, t) {
                        return t % 2 === 1
                    },
                    lt: function (e, t, n) {
                        return t < n[3] - 0
                    },
                    gt: function (e, t, n) {
                        return t > n[3] - 0
                    },
                    nth: function (e, t, n) {
                        return n[3] - 0 === t
                    },
                    eq: function (e, t, n) {
                        return n[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, n, r) {
                        var i = t[1],
                            s = d.filters[i];
                        if (s) return s(e, n, t, r);
                        if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if (i === "not") {
                            var o = t[3];
                            for (var u = 0, a = o.length; u < a; u++)
                                if (o[u] === e) return !1;
                            return !0
                        }
                        h.error(i)
                    },
                    CHILD: function (e, t) {
                        var n, i, s, o, u, a, f, l = t[1],
                            c = e;
                        switch (l) {
                        case "only":
                        case "first":
                            while (c = c.previousSibling)
                                if (c.nodeType === 1) return !1;
                            if (l === "first") return !0;
                            c = e;
                        case "last":
                            while (c = c.nextSibling)
                                if (c.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            n = t[2], i = t[3];
                            if (n === 1 && i === 0) return !0;
                            s = t[0], o = e.parentNode;
                            if (o && (o[r] !== s || !e.nodeIndex)) {
                                a = 0;
                                for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                o[r] = s
                            }
                            return f = e.nodeIndex - i, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                        }
                    },
                    ID: function (e, t) {
                        return e.nodeType === 1 && e.getAttribute("id") === t
                    },
                    TAG: function (e, t) {
                        return t === "*" && e.nodeType === 1 || !! e.nodeName && e.nodeName.toLowerCase() === t
                    },
                    CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function (e, t) {
                        var n = t[1],
                            r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                            i = r + "",
                            s = t[2],
                            o = t[4];
                        return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                    },
                    POS: function (e, t, n, r) {
                        var i = t[2],
                            s = d.setFilters[i];
                        if (s) return s(e, n, t, r)
                    }
                }
            }, v = d.match.POS,
            m = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        d.match.globalPOS = v;
        var y = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(n.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function (e, t) {
                var n = 0,
                    r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number")
                    for (var i = e.length; n < i; n++) r.push(e[n]);
                else
                    for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var w, E;
        n.documentElement.compareDocumentPosition ? w = function (e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (w = function (e, t) {
            if (e === t) return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                a = t.parentNode,
                f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++)
                if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        }, E = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
        function () {
            var e = n.createElement("div"),
                r = "script" + (new Date).getTime(),
                i = n.documentElement;
            e.innerHTML = "<a name='" + r + "'/>", i.insertBefore(e, i.firstChild), n.getElementById(r) && (d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, d.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), i.removeChild(e), i = e = null
        }(),
        function () {
            var e = n.createElement("div");
            e.appendChild(n.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), n.querySelectorAll && function () {
            var e = h,
                t = n.createElement("div"),
                r = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) return;
            h = function (t, i, s, o) {
                i = i || n;
                if (!o && !h.isXML(i)) {
                    var u = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                    if (u && (i.nodeType === 1 || i.nodeType === 9)) {
                        if (u[1]) return y(i.getElementsByTagName(t), s);
                        if (u[2] && d.find.CLASS && i.getElementsByClassName) return y(i.getElementsByClassName(u[2]), s)
                    }
                    if (i.nodeType === 9) {
                        if (t === "body" && i.body) return y([i.body], s);
                        if (u && u[3]) {
                            var a = i.getElementById(u[3]);
                            if (!a || !a.parentNode) return y([], s);
                            if (a.id === u[3]) return y([a], s)
                        }
                        try {
                            return y(i.querySelectorAll(t), s)
                        } catch (f) {}
                    } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                        var l = i,
                            c = i.getAttribute("id"),
                            p = c || r,
                            v = i.parentNode,
                            m = /^\s*[+~]/.test(t);
                        c ? p = p.replace(/'/g, "\\$&") : i.setAttribute("id", p), m && v && (i = i.parentNode);
                        try {
                            if (!m || v) return y(i.querySelectorAll("[id='" + p + "'] " + t), s)
                        } catch (g) {} finally {
                            c || l.removeAttribute("id")
                        }
                    }
                }
                return e(t, i, s, o)
            };
            for (var i in e) h[i] = e[i];
            t = null
        }(),
        function () {
            var e = n.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var r = !t.call(n.createElement("div"), "div"),
                    i = !1;
                try {
                    t.call(n.documentElement, "[test!='']:sizzle")
                } catch (s) {
                    i = !0
                }
                h.matchesSelector = function (e, n) {
                    n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                        if (i || !d.match.PSEUDO.test(n) && !/!=/.test(n)) {
                            var s = t.call(e, n);
                            if (s || !r || e.document && e.document.nodeType !== 11) return s
                        }
                    } catch (o) {}
                    return h(n, null, null, [e]).length > 0
                }
            }
        }(),
        function () {
            var e = n.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) return;
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) return;
            d.order.splice(1, 0, "CLASS"), d.find.CLASS = function (e, t, n) {
                if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
            }, e = null
        }(), n.documentElement.contains ? h.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : n.documentElement.compareDocumentPosition ? h.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : h.contains = function () {
            return !1
        }, h.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var T = function (e, t, n) {
            var r, i = [],
                s = "",
                o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = s.attr, h.selectors.attrMap = {}, s.find = h, s.expr = h.selectors, s.expr[":"] = s.expr.filters, s.unique = h.uniqueSort, s.text = h.getText, s.isXMLDoc = h.isXML, s.contains = h.contains
    }();
    var j = /Until$/,
        F = /^(?:parents|prevUntil|prevAll)/,
        I = /,/,
        q = /^.[^:#\[\.,]*$/,
        R = Array.prototype.slice,
        U = s.expr.match.globalPOS,
        z = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    s.fn.extend({
        find: function (e) {
            var t = this,
                n, r;
            if (typeof e != "string") return s(e).filter(function () {
                for (n = 0, r = t.length; n < r; n++)
                    if (s.contains(t[n], this)) return !0
            });
            var i = this.pushStack("", "find", e),
                o, u, a;
            for (n = 0, r = this.length; n < r; n++) {
                o = i.length, s.find(e, this[n], i);
                if (n > 0)
                    for (u = o; u < i.length; u++)
                        for (a = 0; a < o; a++)
                            if (i[a] === i[u]) {
                                i.splice(u--, 1);
                                break
                            }
            }
            return i
        },
        has: function (e) {
            var t = s(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++)
                    if (s.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(X(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(X(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? U.test(e) ? s(e, this.context).index(this[0]) >= 0 : s.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n = [],
                r, i, o = this[0];
            if (s.isArray(e)) {
                var u = 1;
                while (o && o.ownerDocument && o !== t) {
                    for (r = 0; r < e.length; r++) s(o).is(e[r]) && n.push({
                        selector: e[r],
                        elem: o,
                        level: u
                    });
                    o = o.parentNode, u++
                }
                return n
            }
            var a = U.test(e) || typeof e != "string" ? s(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                o = this[r];
                while (o) {
                    if (a ? a.index(o) > -1 : s.find.matchesSelector(o, e)) {
                        n.push(o);
                        break
                    }
                    o = o.parentNode;
                    if (!o || !o.ownerDocument || o === t || o.nodeType === 11) break
                }
            }
            return n = n.length > 1 ? s.unique(n) : n, this.pushStack(n, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? s.inArray(this[0], s(e)) : s.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? s(e, t) : s.makeArray(e && e.nodeType ? [e] : e),
                r = s.merge(this.get(), n);
            return this.pushStack(W(n[0]) || W(r[0]) ? r : s.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), s.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return s.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return s.dir(e, "parentNode", n)
        },
        next: function (e) {
            return s.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return s.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return s.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return s.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return s.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return s.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return s.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return s.sibling(e.firstChild)
        },
        contents: function (e) {
            return s.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : s.makeArray(e.childNodes)
        }
    }, function (e, t) {
        s.fn[e] = function (n, r) {
            var i = s.map(this, t, n);
            return j.test(e) || (r = n), r && typeof r == "string" && (i = s.filter(r, i)), i = this.length > 1 && !z[e] ? s.unique(i) : i, (this.length > 1 || I.test(r)) && F.test(e) && (i = i.reverse()), this.pushStack(i, e, R.call(arguments).join(","))
        }
    }), s.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? s.find.matchesSelector(t[0], e) ? [t[0]] : [] : s.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                o = e[n];
            while (o && o.nodeType !== 9 && (r === t || o.nodeType !== 1 || !s(o).is(r))) o.nodeType === 1 && i.push(o), o = o[n];
            return i
        },
        nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n])
                if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var $ = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        J = / jQuery\d+="(?:\d+|null)"/g,
        K = /^\s+/,
        Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        G = /<([\w:]+)/,
        Y = /<tbody/i,
        Z = /<|&#?\w+;/,
        et = /<(?:script|style)/i,
        tt = /<(?:script|object|embed|option|style)/i,
        nt = new RegExp("<(?:" + $ + ")[\\s/>]", "i"),
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /\/(java|ecma)script/i,
        st = /^\s*<!(?:\[CDATA\[|\-\-)/,
        ot = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, ut = V(n);
    ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, s.support.htmlSerialize || (ot._default = [1, "div<div>", "</div>"]), s.fn.extend({
        text: function (e) {
            return s.access(this, function (e) {
                return e === t ? s.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (s.isFunction(e)) return this.each(function (t) {
                s(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = s(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return s.isFunction(e) ? this.each(function (t) {
                s(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = s(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = s.isFunction(e);
            return this.each(function (n) {
                s(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                s.nodeName(this, "body") || s(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = s.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, s.clean(arguments)), e
            }
        },
        remove: function (e, t) {
            for (var n = 0, r;
                (r = this[n]) != null; n++)
                if (!e || s.filter(e, [r]).length)!t && r.nodeType === 1 && (s.cleanData(r.getElementsByTagName("*")), s.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function () {
            for (var e = 0, t;
                (t = this[e]) != null; e++) {
                t.nodeType === 1 && s.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return s.clone(this, e, t)
            })
        },
        html: function (e) {
            return s.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(J, "") : null;
                if (typeof e == "string" && !et.test(e) && (s.support.leadingWhitespace || !K.test(e)) && !ot[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Q, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (s.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? s.isFunction(e) ? this.each(function (t) {
                var n = s(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = s(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                s(this).remove(), t ? s(t).before(e) : s(n).append(e)
            })) : this.length ? this.pushStack(s(s.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            var i, o, u, a, f = e[0],
                l = [];
            if (!s.support.checkClone && arguments.length === 3 && typeof f == "string" && rt.test(f)) return this.each(function () {
                s(this).domManip(e, n, r, !0)
            });
            if (s.isFunction(f)) return this.each(function (i) {
                var o = s(this);
                e[0] = f.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
            });
            if (this[0]) {
                a = f && f.parentNode, s.support.parentNode && a && a.nodeType === 11 && a.childNodes.length === this.length ? i = {
                    fragment: a
                } : i = s.buildFragment(e, this, l), u = i.fragment, u.childNodes.length === 1 ? o = u = u.firstChild : o = u.firstChild;
                if (o) {
                    n = n && s.nodeName(o, "tr");
                    for (var c = 0, h = this.length, p = h - 1; c < h; c++) r.call(n ? at(this[c], o) : this[c], i.cacheable || h > 1 && c < p ? s.clone(u, !0, !0) : u)
                }
                l.length && s.each(l, function (e, t) {
                    t.src ? s.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : s.globalEval((t.text || t.textContent || t.innerHTML || "").replace(st, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), s.buildFragment = function (e, t, r) {
        var i, o, u, a, f = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = n), e.length === 1 && typeof f == "string" && f.length < 512 && a === n && f.charAt(0) === "<" && !tt.test(f) && (s.support.checkClone || !rt.test(f)) && (s.support.html5Clone || !nt.test(f)) && (o = !0, u = s.fragments[f], u && u !== 1 && (i = u)), i || (i = a.createDocumentFragment(), s.clean(e, a, i, r)), o && (s.fragments[f] = u ? i : 1), {
            fragment: i,
            cacheable: o
        }
    }, s.fragments = {}, s.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        s.fn[e] = function (n) {
            var r = [],
                i = s(n),
                o = this.length === 1 && this[0].parentNode;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var u = 0, a = i.length; u < a; u++) {
                var f = (u > 0 ? this.clone(!0) : this).get();
                s(i[u])[t](f), r = r.concat(f)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), s.extend({
        clone: function (e, t, n) {
            var r, i, o, u = s.support.html5Clone || s.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : dt(e);
            if ((!s.support.noCloneEvent || !s.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !s.isXMLDoc(e)) {
                lt(e, u), r = ct(e), i = ct(u);
                for (o = 0; r[o]; ++o) i[o] && lt(r[o], i[o])
            }
            if (t) {
                ft(e, u);
                if (n) {
                    r = ct(e), i = ct(u);
                    for (o = 0; r[o]; ++o) ft(r[o], i[o])
                }
            }
            return r = i = null, u
        },
        clean: function (e, t, r, i) {
            var o, u, a, f = [];
            t = t || n, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || n);
            for (var l = 0, c;
                (c = e[l]) != null; l++) {
                typeof c == "number" && (c += "");
                if (!c) continue;
                if (typeof c == "string")
                    if (!Z.test(c)) c = t.createTextNode(c);
                    else {
                        c = c.replace(Q, "<$1></$2>");
                        var h = (G.exec(c) || ["", ""])[1].toLowerCase(),
                            p = ot[h] || ot._default,
                            d = p[0],
                            v = t.createElement("div"),
                            m = ut.childNodes,
                            g;
                        t === n ? ut.appendChild(v) : V(t).appendChild(v), v.innerHTML = p[1] + c + p[2];
                        while (d--) v = v.lastChild;
                        if (!s.support.tbody) {
                            var y = Y.test(c),
                                b = h === "table" && !y ? v.firstChild && v.firstChild.childNodes : p[1] === "<table>" && !y ? v.childNodes : [];
                            for (a = b.length - 1; a >= 0; --a) s.nodeName(b[a], "tbody") && !b[a].childNodes.length && b[a].parentNode.removeChild(b[a])
                        }!s.support.leadingWhitespace && K.test(c) && v.insertBefore(t.createTextNode(K.exec(c)[0]), v.firstChild), c = v.childNodes, v && (v.parentNode.removeChild(v), m.length > 0 && (g = m[m.length - 1], g && g.parentNode && g.parentNode.removeChild(g)))
                    }
                var w;
                if (!s.support.appendChecked)
                    if (c[0] && typeof (w = c.length) == "number")
                        for (a = 0; a < w; a++) pt(c[a]);
                    else pt(c);
                c.nodeType ? f.push(c) : f = s.merge(f, c)
            }
            if (r) {
                o = function (e) {
                    return !e.type || it.test(e.type)
                };
                for (l = 0; f[l]; l++) {
                    u = f[l];
                    if (i && s.nodeName(u, "script") && (!u.type || it.test(u.type))) i.push(u.parentNode ? u.parentNode.removeChild(u) : u);
                    else {
                        if (u.nodeType === 1) {
                            var E = s.grep(u.getElementsByTagName("script"), o);
                            f.splice.apply(f, [l + 1, 0].concat(E))
                        }
                        r.appendChild(u)
                    }
                }
            }
            return f
        },
        cleanData: function (e) {
            var t, n, r = s.cache,
                i = s.event.special,
                o = s.support.deleteExpando;
            for (var u = 0, a;
                (a = e[u]) != null; u++) {
                if (a.nodeName && s.noData[a.nodeName.toLowerCase()]) continue;
                n = a[s.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var f in t.events) i[f] ? s.event.remove(a, f) : s.removeEvent(a, f, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete a[s.expando] : a.removeAttribute && a.removeAttribute(s.expando), delete r[n]
                }
            }
        }
    });
    var vt = /alpha\([^)]*\)/i,
        mt = /opacity=([^)]*)/,
        gt = /([A-Z]|^ms)/g,
        yt = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        wt = /^([\-+])=([\-+.\de]+)/,
        Et = /^margin/,
        St = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, xt = ["Top", "Right", "Bottom", "Left"],
        Tt, Nt, Ct;
    s.fn.css = function (e, n) {
        return s.access(this, function (e, n, r) {
            return r !== t ? s.style(e, n, r) : s.css(e, n)
        }, e, n, arguments.length > 1)
    }, s.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Tt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": s.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var o, u, a = s.camelCase(n),
                f = e.style,
                l = s.cssHooks[a];
            n = s.cssProps[a] || a;
            if (r === t) return l && "get" in l && (o = l.get(e, !1, i)) !== t ? o : f[n];
            u = typeof r, u === "string" && (o = wt.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(s.css(e, n)), u = "number");
            if (r == null || u === "number" && isNaN(r)) return;
            u === "number" && !s.cssNumber[a] && (r += "px");
            if (!l || !("set" in l) || (r = l.set(e, r)) !== t) try {
                f[n] = r
            } catch (c) {}
        },
        css: function (e, n, r) {
            var i, o;
            n = s.camelCase(n), o = s.cssHooks[n], n = s.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (o && "get" in o && (i = o.get(e, !0, r)) !== t) return i;
            if (Tt) return Tt(e, n)
        },
        swap: function (e, t, n) {
            var r = {}, i, s;
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            i = n.call(e);
            for (s in t) e.style[s] = r[s];
            return i
        }
    }), s.curCSS = s.css, n.defaultView && n.defaultView.getComputedStyle && (Nt = function (e, t) {
        var n, r, i, o, u = e.style;
        return t = t.replace(gt, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !s.contains(e.ownerDocument.documentElement, e) && (n = s.style(e, t))), !s.support.pixelMargin && i && Et.test(t) && bt.test(n) && (o = u.width, u.width = n, n = i.width, u.width = o), n
    }), n.documentElement.currentStyle && (Ct = function (e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return s == null && o && (i = o[t]) && (s = i), bt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
    }), Tt = Nt || Ct, s.each(["height", "width"], function (e, t) {
        s.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth !== 0 ? kt(e, t, r) : s.swap(e, St, function () {
                    return kt(e, t, r)
                })
            },
            set: function (e, t) {
                return yt.test(t) ? t + "px" : t
            }
        }
    }), s.support.opacity || (s.cssHooks.opacity = {
        get: function (e, t) {
            return mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = s.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && s.trim(o.replace(vt, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i
        }
    }), s(function () {
        s.support.reliableMarginRight || (s.cssHooks.marginRight = {
            get: function (e, t) {
                return s.swap(e, {
                    display: "inline-block"
                }, function () {
                    return t ? Tt(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }), s.expr && s.expr.filters && (s.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return t === 0 && n === 0 || !s.support.reliableHiddenOffsets && (e.style && e.style.display || s.css(e, "display")) === "none"
    }, s.expr.filters.visible = function (e) {
        return !s.expr.filters.hidden(e)
    }), s.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        s.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + xt[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }
    });
    var Lt = /%20/g,
        At = /\[\]$/,
        Ot = /\r?\n/g,
        Mt = /#.*$/,
        _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Dt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Pt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Ht = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        jt = /\?/,
        Ft = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        It = /^(?:select|textarea)/i,
        qt = /\s+/,
        Rt = /([?&])_=[^&]*/,
        Ut = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        zt = s.fn.load,
        Wt = {}, Xt = {}, Vt, $t, Jt = ["*/"] + ["*"];
    try {
        Vt = i.href
    } catch (Kt) {
        Vt = n.createElement("a"), Vt.href = "", Vt = Vt.href
    }
    $t = Ut.exec(Vt.toLowerCase()) || [], s.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && zt) return zt.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var u = "GET";
            n && (s.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = s.param(n, s.ajaxSettings.traditional), u = "POST"));
            var a = this;
            return s.ajax({
                url: e,
                type: u,
                dataType: "html",
                data: n,
                complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), a.html(o ? s("<div>").append(n.replace(Ft, "")).find(o) : n)), r && a.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function () {
            return s.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? s.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || It.test(this.nodeName) || Dt.test(this.type))
            }).map(function (e, t) {
                var n = s(this).val();
                return n == null ? null : s.isArray(n) ? s.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    }), s.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        s.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), s.each(["get", "post"], function (e, n) {
        s[n] = function (e, r, i, o) {
            return s.isFunction(r) && (o = o || i, i = r, r = t), s.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }), s.extend({
        getScript: function (e, n) {
            return s.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return s.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Yt(e, s.ajaxSettings) : (t = e, e = s.ajaxSettings), Yt(e, t), e
        },
        ajaxSettings: {
            url: Vt,
            isLocal: Pt.test($t[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Jt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": s.parseJSON,
                "text xml": s.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Qt(Wt),
        ajaxTransport: Qt(Xt),
        ajax: function (e, n) {
            function S(e, n, c, h) {
                if (y === 2) return;
                y = 2, m && clearTimeout(m), v = t, p = h || "", E.readyState = e > 0 ? 4 : 0;
                var d, g, w, S = n,
                    x = c ? en(r, E, c) : t,
                    T, N;
                if (e >= 200 && e < 300 || e === 304) {
                    if (r.ifModified) {
                        if (T = E.getResponseHeader("Last-Modified")) s.lastModified[l] = T;
                        if (N = E.getResponseHeader("Etag")) s.etag[l] = N
                    }
                    if (e === 304) S = "notmodified", d = !0;
                    else try {
                        g = tn(r, x), S = "success", d = !0
                    } catch (C) {
                        S = "parsererror", w = C
                    }
                } else {
                    w = S;
                    if (!S || e) S = "error", e < 0 && (e = 0)
                }
                E.status = e, E.statusText = "" + (n || S), d ? u.resolveWith(i, [g, S, E]) : u.rejectWith(i, [E, S, w]), E.statusCode(f), f = t, b && o.trigger("ajax" + (d ? "Success" : "Error"), [E, r, d ? g : w]), a.fireWith(i, [E, S]), b && (o.trigger("ajaxComplete", [E, r]), --s.active || s.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r = s.ajaxSetup({}, n),
                i = r.context || r,
                o = i !== r && (i.nodeType || i instanceof s) ? s(i) : s.event,
                u = s.Deferred(),
                a = s.Callbacks("once memory"),
                f = r.statusCode || {}, l, c = {}, h = {}, p, d, v, m, g, y = 0,
                b, w, E = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!y) {
                            var n = e.toLowerCase();
                            e = h[n] = h[n] || e, c[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return y === 2 ? p : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (y === 2) {
                            if (!d) {
                                d = {};
                                while (n = _t.exec(p)) d[n[1].toLowerCase()] = n[2]
                            }
                            n = d[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return y || (r.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", v && v.abort(e), S(0, e), this
                    }
                };
            u.promise(E), E.success = E.done, E.error = E.fail, E.complete = a.add, E.statusCode = function (e) {
                if (e) {
                    var t;
                    if (y < 2)
                        for (t in e) f[t] = [f[t], e[t]];
                    else t = e[E.status], E.then(t, t)
                }
                return this
            }, r.url = ((e || r.url) + "").replace(Mt, "").replace(Bt, $t[1] + "//"), r.dataTypes = s.trim(r.dataType || "*").toLowerCase().split(qt), r.crossDomain == null && (g = Ut.exec(r.url.toLowerCase()), r.crossDomain = !(!g || g[1] == $t[1] && g[2] == $t[2] && (g[3] || (g[1] === "http:" ? 80 : 443)) == ($t[3] || ($t[1] === "http:" ? 80 : 443)))), r.data && r.processData && typeof r.data != "string" && (r.data = s.param(r.data, r.traditional)), Gt(Wt, r, n, E);
            if (y === 2) return !1;
            b = r.global, r.type = r.type.toUpperCase(), r.hasContent = !Ht.test(r.type), b && s.active++ === 0 && s.event.trigger("ajaxStart");
            if (!r.hasContent) {
                r.data && (r.url += (jt.test(r.url) ? "&" : "?") + r.data, delete r.data), l = r.url;
                if (r.cache === !1) {
                    var x = s.now(),
                        T = r.url.replace(Rt, "$1_=" + x);
                    r.url = T + (T === r.url ? (jt.test(r.url) ? "&" : "?") + "_=" + x : "")
                }
            }(r.data && r.hasContent && r.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", r.contentType), r.ifModified && (l = l || r.url, s.lastModified[l] && E.setRequestHeader("If-Modified-Since", s.lastModified[l]), s.etag[l] && E.setRequestHeader("If-None-Match", s.etag[l])), E.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + Jt + "; q=0.01" : "") : r.accepts["*"]);
            for (w in r.headers) E.setRequestHeader(w, r.headers[w]);
            if (!r.beforeSend || r.beforeSend.call(i, E, r) !== !1 && y !== 2) {
                for (w in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[w](r[w]);
                v = Gt(Xt, r, n, E);
                if (!v) S(-1, "No Transport");
                else {
                    E.readyState = 1, b && o.trigger("ajaxSend", [E, r]), r.async && r.timeout > 0 && (m = setTimeout(function () {
                        E.abort("timeout")
                    }, r.timeout));
                    try {
                        y = 1, v.send(c, S)
                    } catch (N) {
                        if (!(y < 2)) throw N;
                        S(-1, N)
                    }
                }
                return E
            }
            return E.abort(), !1
        },
        param: function (e, n) {
            var r = [],
                i = function (e, t) {
                    t = s.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = s.ajaxSettings.traditional);
            if (s.isArray(e) || e.jquery && !s.isPlainObject(e)) s.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (var o in e) Zt(o, e[o], n, i);
            return r.join("&").replace(Lt, "+")
        }
    }), s.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var nn = s.now(),
        rn = /(\=)\?(&|$)|\?\?/i;
    s.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return s.expando + "_" + nn++
        }
    }), s.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (rn.test(t.url) || i && rn.test(t.data))) {
            var o, u = t.jsonpCallback = s.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a = e[u],
                f = t.url,
                l = t.data,
                c = "$1" + u + "$2";
            return t.jsonp !== !1 && (f = f.replace(rn, c), t.url === f && (i && (l = l.replace(rn, c)), t.data === l && (f += (/\?/.test(f) ? "&" : "?") + t.jsonp + "=" + u))), t.url = f, t.data = l, e[u] = function (e) {
                o = [e]
            }, r.always(function () {
                e[u] = a, o && s.isFunction(a) && e[u](o[0])
            }), t.converters["script json"] = function () {
                return o || s.error(u + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), s.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return s.globalEval(e), e
            }
        }
    }), s.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), s.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var r, i = n.head || n.getElementsByTagName("head")[0] || n.documentElement;
            return {
                send: function (s, o) {
                    r = n.createElement("script"), r.async = "async", e.scriptCharset && (r.charset = e.scriptCharset), r.src = e.url, r.onload = r.onreadystatechange = function (e, n) {
                        if (n || !r.readyState || /loaded|complete/.test(r.readyState)) r.onload = r.onreadystatechange = null, i && r.parentNode && i.removeChild(r), r = t, n || o(200, "success")
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function () {
                    r && r.onload(0, 1)
                }
            }
        }
    });
    var sn = e.ActiveXObject ? function () {
            for (var e in un) un[e](0, 1)
        } : !1,
        on = 0,
        un;
    s.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && an() || fn()
    } : an,
    function (e) {
        s.extend(s.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(s.ajaxSettings.xhr()), s.support.ajax && s.ajaxTransport(function (n) {
        if (!n.crossDomain || s.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var u = n.xhr(),
                        a, f;
                    n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (f in n.xhrFields) u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (f in i) u.setRequestHeader(f, i[f])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var f, l, c, h, p;
                        try {
                            if (r && (i || u.readyState === 4)) {
                                r = t, a && (u.onreadystatechange = s.noop, sn && delete un[a]);
                                if (i) u.readyState !== 4 && u.abort();
                                else {
                                    f = u.status, c = u.getAllResponseHeaders(), h = {}, p = u.responseXML, p && p.documentElement && (h.xml = p);
                                    try {
                                        h.text = u.responseText
                                    } catch (e) {}
                                    try {
                                        l = u.statusText
                                    } catch (d) {
                                        l = ""
                                    }!f && n.isLocal && !n.crossDomain ? f = h.text ? 200 : 404 : f === 1223 && (f = 204)
                                }
                            }
                        } catch (v) {
                            i || o(-1, v)
                        }
                        h && o(f, l, h, c)
                    }, !n.async || u.readyState === 4 ? r() : (a = ++on, sn && (un || (un = {}, s(e).unload(sn)), un[a] = r), u.onreadystatechange = r)
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var ln = {}, cn, hn, pn = /^(?:toggle|show|hide)$/,
        dn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        vn, mn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        gn;
    s.fn.extend({
        show: function (e, t, n) {
            var r, i;
            if (e || e === 0) return this.animate(wn("show", 3), e, t, n);
            for (var o = 0, u = this.length; o < u; o++) r = this[o], r.style && (i = r.style.display, !s._data(r, "olddisplay") && i === "none" && (i = r.style.display = ""), (i === "" && s.css(r, "display") === "none" || !s.contains(r.ownerDocument.documentElement, r)) && s._data(r, "olddisplay", En(r.nodeName)));
            for (o = 0; o < u; o++) {
                r = this[o];
                if (r.style) {
                    i = r.style.display;
                    if (i === "" || i === "none") r.style.display = s._data(r, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(wn("hide", 3), e, t, n);
            var r, i, o = 0,
                u = this.length;
            for (; o < u; o++) r = this[o], r.style && (i = s.css(r, "display"), i !== "none" && !s._data(r, "olddisplay") && s._data(r, "olddisplay", i));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: s.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return s.isFunction(e) && s.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : s(this).is(":hidden");
                s(this)[t ? "show" : "hide"]()
            }) : this.animate(wn("toggle", 3), e, t, n), this
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            function o() {
                i.queue === !1 && s._mark(this);
                var t = s.extend({}, i),
                    n = this.nodeType === 1,
                    r = n && s(this).is(":hidden"),
                    o, u, a, f, l, c, h, p, d, v, m;
                t.animatedProperties = {};
                for (a in e) {
                    o = s.camelCase(a), a !== o && (e[o] = e[a], delete e[a]);
                    if ((l = s.cssHooks[o]) && "expand" in l) {
                        c = l.expand(e[o]), delete e[o];
                        for (a in c) a in e || (e[a] = c[a])
                    }
                }
                for (o in e) {
                    u = e[o], s.isArray(u) ? (t.animatedProperties[o] = u[1], u = e[o] = u[0]) : t.animatedProperties[o] = t.specialEasing && t.specialEasing[o] || t.easing || "swing";
                    if (u === "hide" && r || u === "show" && !r) return t.complete.call(this);
                    n && (o === "height" || o === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], s.css(this, "display") === "inline" && s.css(this, "float") === "none" && (!s.support.inlineBlockNeedsLayout || En(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new s.fx(this, t, a), u = e[a], pn.test(u) ? (m = s._data(this, "toggle" + a) || (u === "toggle" ? r ? "show" : "hide" : 0), m ? (s._data(this, "toggle" + a, m === "show" ? "hide" : "show"), f[m]()) : f[u]()) : (h = dn.exec(u), p = f.cur(), h ? (d = parseFloat(h[2]), v = h[3] || (s.cssNumber[a] ? "" : "px"), v !== "px" && (s.style(this, a, (d || 1) + v), p = (d || 1) / f.cur() * p, s.style(this, a, p + v)), h[1] && (d = (h[1] === "-=" ? -1 : 1) * d + p), f.custom(p, d, v)) : f.custom(p, u, ""));
                return !0
            }
            var i = s.speed(t, n, r);
            return s.isEmptyObject(e) ? this.each(i.complete, [!1]) : (e = s.extend({}, e), i.queue === !1 ? this.each(o) : this.queue(i.queue, o))
        },
        stop: function (e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function u(e, t, n) {
                    var i = t[n];
                    s.removeData(e, n, !0), i.stop(r)
                }
                var t, n = !1,
                    i = s.timers,
                    o = s._data(this);
                r || s._unmark(!0, this);
                if (e == null)
                    for (t in o) o[t] && o[t].stop && t.indexOf(".run") === t.length - 4 && u(this, o, t);
                else o[t = e + ".run"] && o[t].stop && u(this, o, t);
                for (t = i.length; t--;) i[t].elem === this && (e == null || i[t].queue === e) && (r ? i[t](!0) : i[t].saveState(), n = !0, i.splice(t, 1));
                (!r || !n) && s.dequeue(this, e)
            })
        }
    }), s.each({
        slideDown: wn("show", 1),
        slideUp: wn("hide", 1),
        slideToggle: wn("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        s.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), s.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? s.extend({}, e) : {
                complete: n || !n && t || s.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !s.isFunction(t) && t
            };
            r.duration = s.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in s.fx.speeds ? s.fx.speeds[r.duration] : s.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function (e) {
                s.isFunction(r.old) && r.old.call(this), r.queue ? s.dequeue(this, r.queue) : e !== !1 && s._unmark(this)
            }, r
        },
        easing: {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), s.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (s.fx.step[this.prop] || s.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = s.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        },
        custom: function (e, n, r) {
            function u(e) {
                return i.step(e)
            }
            var i = this,
                o = s.fx;
            this.startTime = gn || yn(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (s.cssNumber[this.prop] ? "" : "px"), u.queue = this.options.queue, u.elem = this.elem, u.saveState = function () {
                s._data(i.elem, "fxshow" + i.prop) === t && (i.options.hide ? s._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && s._data(i.elem, "fxshow" + i.prop, i.end))
            }, u() && s.timers.push(u) && !vn && (vn = setInterval(o.tick, o.interval))
        },
        show: function () {
            var e = s._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || s.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), s(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = s._data(this.elem, "fxshow" + this.prop) || s.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t, n, r, i = gn || yn(),
                o = !0,
                u = this.elem,
                a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    a.overflow != null && !s.support.shrinkWrapBlocks && s.each(["", "X", "Y"], function (e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }), a.hide && s(u).hide();
                    if (a.hide || a.show)
                        for (t in a.animatedProperties) s.style(u, t, a.orig[t]), s.removeData(u, "fxshow" + t, !0), s.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = s.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, s.extend(s.fx, {
        tick: function () {
            var e, t = s.timers,
                n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || s.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(vn), vn = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                s.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), s.each(mn.concat.apply([], mn), function (e, t) {
        t.indexOf("margin") && (s.fx.step[t] = function (e) {
            s.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), s.expr && s.expr.filters && (s.expr.filters.animated = function (e) {
        return s.grep(s.timers, function (t) {
            return e === t.elem
        }).length
    });
    var Sn, xn = /^t(?:able|d|h)$/i,
        Tn = /^(?:body|html)$/i;
    "getBoundingClientRect" in n.documentElement ? Sn = function (e, t, n, r) {
        try {
            r = e.getBoundingClientRect()
        } catch (i) {}
        if (!r || !s.contains(n, e)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var o = t.body,
            u = Nn(t),
            a = n.clientTop || o.clientTop || 0,
            f = n.clientLeft || o.clientLeft || 0,
            l = u.pageYOffset || s.support.boxModel && n.scrollTop || o.scrollTop,
            c = u.pageXOffset || s.support.boxModel && n.scrollLeft || o.scrollLeft,
            h = r.top + l - a,
            p = r.left + c - f;
        return {
            top: h,
            left: p
        }
    } : Sn = function (e, t, n) {
        var r, i = e.offsetParent,
            o = e,
            u = t.body,
            a = t.defaultView,
            f = a ? a.getComputedStyle(e, null) : e.currentStyle,
            l = e.offsetTop,
            c = e.offsetLeft;
        while ((e = e.parentNode) && e !== u && e !== n) {
            if (s.support.fixedPosition && f.position === "fixed") break;
            r = a ? a.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, c -= e.scrollLeft, e === i && (l += e.offsetTop, c += e.offsetLeft, s.support.doesNotAddBorder && (!s.support.doesAddBorderForTableAndCells || !xn.test(e.nodeName)) && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o = i, i = e.offsetParent), s.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), f = r
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
        return s.support.fixedPosition && f.position === "fixed" && (l += Math.max(n.scrollTop, u.scrollTop), c += Math.max(n.scrollLeft, u.scrollLeft)), {
            top: l,
            left: c
        }
    }, s.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            s.offset.setOffset(this, e, t)
        });
        var n = this[0],
            r = n && n.ownerDocument;
        return r ? n === r.body ? s.offset.bodyOffset(n) : Sn(n, r, r.documentElement) : null
    }, s.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return s.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(s.css(e, "marginTop")) || 0, n += parseFloat(s.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = s.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = s(e),
                o = i.offset(),
                u = s.css(e, "top"),
                a = s.css(e, "left"),
                f = (r === "absolute" || r === "fixed") && s.inArray("auto", [u, a]) > -1,
                l = {}, c = {}, h, p;
            f ? (c = i.position(), h = c.top, p = c.left) : (h = parseFloat(u) || 0, p = parseFloat(a) || 0), s.isFunction(t) && (t = t.call(e, n, o)), t.top != null && (l.top = t.top - o.top + h), t.left != null && (l.left = t.left - o.left + p), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, s.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Tn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(s.css(e, "marginTop")) || 0, n.left -= parseFloat(s.css(e, "marginLeft")) || 0, r.top += parseFloat(s.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(s.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || n.body;
                while (e && !Tn.test(e.nodeName) && s.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }), s.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        s.fn[e] = function (i) {
            return s.access(this, function (e, i, o) {
                var u = Nn(e);
                if (o === t) return u ? n in u ? u[n] : s.support.boxModel && u.document.documentElement[i] || u.document.body[i] : e[i];
                u ? u.scrollTo(r ? s(u).scrollLeft() : o, r ? o : s(u).scrollTop()) : e[i] = o
            }, e, i, arguments.length, null)
        }
    }), s.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        var r = "client" + e,
            i = "scroll" + e,
            o = "offset" + e;
        s.fn["inner" + e] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(s.css(e, n, "padding")) : this[n]() : null
        }, s.fn["outer" + e] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(s.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, s.fn[n] = function (e) {
            return s.access(this, function (e, n, u) {
                var a, f, l, c;
                if (s.isWindow(e)) return a = e.document, f = a.documentElement[r], s.support.boxModel && f || a.body && a.body[r] || f;
                if (e.nodeType === 9) return a = e.documentElement, a[r] >= a[i] ? a[r] : Math.max(e.body[i], a[i], e.body[o], a[o]);
                if (u === t) return l = s.css(e, n), c = parseFloat(l), s.isNumeric(c) ? c : l;
                s(e).css(n, u)
            }, n, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = s, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return s
    })
})(window),
function (e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !! o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var n = e.attr(t, "tabindex"),
                r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e("<a>").outerWidth(1).jquery || e.each(
        ["Width", "Height"], function (n, r) {
            function u(t, n, r, s) {
                return e.each(i, function () {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function (n) {
                return n === t ? o["inner" + r].call(this) : this.each(function () {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function (t, n) {
                return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)),
    function () {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function (e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}(jQuery),
function (e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function (t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function (t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) {
            return !!e.data(t, i)
        }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function (e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, i) {
            e.isFunction(i) && (r[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, r = function (e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function () {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }())
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function (t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function (n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function (n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function (o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function (r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, n) {
        e.Widget.prototype["_" + t] = function (r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery),
function (e, t) {
    var n = !1;
    e(document).mouseup(function (e) {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function (t) {
            return !e.ui.ie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function (e) {
            return this.mouseDelayMet
        },
        _mouseStart: function (e) {},
        _mouseDrag: function (e) {},
        _mouseStop: function (e) {},
        _mouseCapture: function (e) {
            return !0
        }
    })
}(jQuery),
function (e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            var r = this.element[0],
                i = !1;
            while (r && (r = r.parentNode)) r == document && (i = !0);
            if (!i && this.options.helper === "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var s = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    s._trigger("stop", t) !== !1 && s._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment),
                    r = n[0];
                if (!r) return;
                var i = n.offset(),
                    s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function (e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = this,
                s = function (t) {
                    var n = this.offset.click.top,
                        r = this.offset.click.left,
                        i = this.positionAbs.top,
                        s = this.positionAbs.left,
                        o = t.height,
                        u = t.width,
                        a = t.top,
                        f = t.left;
                    return e.ui.isOver(i + n, s + r, a, f, o, u)
                };
            e.each(r.sortables, function (s) {
                var o = !1,
                    u = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(r.sortables, function () {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, n) {
            var r = e("body"),
                i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options;
            r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var t = e(this),
                    n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = i.snapTolerance,
                o = n.offset.left,
                u = o + r.helperProportions.width,
                a = n.offset.top,
                f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s,
                        m = Math.abs(d - a) <= s,
                        g = Math.abs(c - u) <= s,
                        y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s,
                        m = Math.abs(d - f) <= s,
                        g = Math.abs(c - o) <= s,
                        y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })), r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, n) {
            var r = e(this).data("draggable").options,
                i = e.makeArray(e(r.stack)).sort(function (t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!i.length) return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function (e) {
                this.style.zIndex = s + e
            }), this[0].style.zIndex = s + i.length
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function (e, t) {
    e.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function (t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function (t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            a = n.offset.left,
            f = a + n.proportions.width,
            l = n.offset.top,
            c = l + n.proportions.height;
        switch (r) {
        case "fit":
            return a <= i && s <= f && l <= o && u <= c;
        case "intersect":
            return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 &&
                u - t.helperProportions.height / 2 < c;
        case "pointer":
            var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                d = e.ui.isOver(p, h, l, a, n.proportions.height, n.proportions.width);
            return d;
        case "touch":
            return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
        default:
            return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var o = 0; o < r.length; o++) {
                if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
                for (var u = 0; u < s.length; u++)
                    if (s[u] == r[o].element[0]) {
                        r[o].proportions.height = 0;
                        continue e
                    }
                r[o].visible = r[o].element.css("display") != "none";
                if (!r[o].visible) continue;
                i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                    width: r[o].element[0].offsetWidth,
                    height: r[o].element[0].offsetHeight
                }
            }
        },
        drop: function (t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options) return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
            }), r
        },
        dragStart: function (t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function (t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r = e.ui.intersect(t, this, this.options.tolerance),
                    i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
                if (!i) return;
                var s;
                if (this.options.greedy) {
                    var o = this.options.scope,
                        u = this.element.parents(":data(droppable)").filter(function () {
                            return e.data(this, "droppable").options.scope === o
                        });
                    u.length && (s = e.data(u[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
                }
                s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
            })
        },
        dragStop: function (t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery),
function (e, t) {
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = "ui-resizable-" + s,
                        u = e('<div class="ui-resizable-handle ' + o + '"></div>');
                    u.css({
                        zIndex: n.zIndex
                    }), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
                        var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                        t.css(s, i), this._proportionallyResize()
                    }
                    if (!e(this.handles[n]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                if (n.disabled) return;
                e(this).removeClass("ui-resizable-autohide"), t._handles.show()
            }).mouseleave(function () {
                if (n.disabled) return;
                t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                }).insertAfter(n), n.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), this._renderProxy();
            var o = n(this.helper.css("left")),
                u = n(this.helper.css("top"));
            r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: o,
                top: u
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: o,
                top: u
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var a = e(".ui-resizable-" + this.axis).css("cursor");
            return e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (e) {
            var t = this.helper,
                n = this.options,
                r = {}, i = this,
                s = this.originalMousePosition,
                o = this.axis,
                u = e.pageX - s.left || 0,
                a = e.pageY - s.top || 0,
                f = this._change[o];
            if (!f) return !1;
            var l = f.apply(this, [e, u, a]);
            this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) l = this._updateRatio(l, e);
            return l = this._respectSize(l, e), this._propagate("resize", e), t.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
                    u = s ? 0 : r.sizeDiff.width,
                    a = {
                        width: r.helper.width() - u,
                        height: r.helper.height() - o
                    }, f = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                    l = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(a, {
                    top: l,
                    left: f
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t = this.options,
                n, i, s, o, u;
            u = {
                minWidth: r(t.minWidth) ? t.minWidth : 0,
                maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
                minHeight: r(t.minHeight) ? t.minHeight : 0,
                maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
            };
            if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
            this._vBoundaries = u
        },
        _updateCache: function (e) {
            var t = this.options;
            this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e, t) {
            var n = this.options,
                i = this.position,
                s = this.size,
                o = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
        },
        _respectSize: function (e, t) {
            var n = this.helper,
                i = this._vBoundaries,
                s = this._aspectRatio || t.shiftKey,
                o = this.axis,
                u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
                a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
                f = r(e.width) && i.minWidth && i.minWidth > e.width,
                l = r(e.height) && i.minHeight && i.minHeight > e.height;
            f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                p = /sw|nw|w/.test(o),
                d = /nw|ne|n/.test(o);
            f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && d && (e.top = h - i.minHeight), a && d && (e.top = h - i.maxHeight);
            var v = !e.width && !e.height;
            return v && !e.left && e.top ? e.top = null : v && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            var t = this.options;
            if (!this._proportionallyResizeElements.length) return;
            var n = this.helper || this.element;
            for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
                var i = this._proportionallyResizeElements[r];
                if (!this.borderDif) {
                    var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                        o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    this.borderDif = e.map(s, function (e, t) {
                        var n = parseInt(e, 10) || 0,
                            r = parseInt(o[t], 10) || 0;
                        return n + r
                    })
                }
                i.css({
                    height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var r = e.ui.ie6 ? 1 : 0,
                    i = e.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + i,
                    height: this.element.outerHeight() + i,
                    position: "absolute",
                    left: this.elementOffset.left - r + "px",
                    top: this.elementOffset.top - r + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t, n) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + n,
                    height: i.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                s(e)
            }) : s(i.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.originalSize,
                o = r.originalPosition,
                u = {
                    height: r.size.height - s.height || 0,
                    width: r.size.width - s.width || 0,
                    top: r.position.top - o.top || 0,
                    left: r.position.left - o.left || 0
                }, a = function (t, r) {
                    e(t).each(function () {
                        var t = e(this),
                            i = e(this).data("resizable-alsoresize"),
                            s = {}, o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function (e, t) {
                            var n = (i[t] || 0) + (u[t] || 0);
                            n && n >= 0 && (s[t] = n || null)
                        }), t.css(s)
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function (t, n) {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
                a = o ? 0 : r.sizeDiff.width,
                f = {
                    width: r.size.width - a,
                    height: r.size.height - u
                }, l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
            r.element.animate(e.extend(f, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function () {
                    var n = {
                        width: parseInt(r.element.css("width"), 10),
                        height: parseInt(r.element.css("height"), 10),
                        top: parseInt(r.element.css("top"), 10),
                        left: parseInt(r.element.css("left"), 10)
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), r._updateCache(n), r._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function (t, r) {
            var i = e(this).data("resizable"),
                s = i.options,
                o = i.element,
                u = s.containment,
                a = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
            if (!a) return;
            i.containerElement = e(a);
            if (/document/.test(u) || u == document) i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                var f = e(a),
                    l = [];
                e(["Top", "Right", "Left", "Bottom"]).each(function (e, t) {
                    l[e] = n(f.css("padding" + t))
                }), i.containerOffset = f.offset(), i.containerPosition = f.position(), i.containerSize = {
                    height: f.innerHeight() - l[3],
                    width: f.innerWidth() - l[1]
                };
                var c = i.containerOffset,
                    h = i.containerSize.height,
                    p = i.containerSize.width,
                    d = e.ui.hasScroll(a, "left") ? a.scrollWidth : p,
                    v = e.ui.hasScroll(a) ? a.scrollHeight : h;
                i.parentData = {
                    element: a,
                    left: c.left,
                    top: c.top,
                    width: d,
                    height: v
                }
            }
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.containerSize,
                o = r.containerOffset,
                u = r.size,
                a = r.position,
                f = r._aspectRatio || t.shiftKey,
                l = {
                    top: 0,
                    left: 0
                }, c = r.containerElement;
            c[0] != document && /static/.test(c.css("position")) && (l = o), a.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - l.left), f && (r.size.height = r.size.width / r.aspectRatio), r.position.left = i.helper ? o.left : 0), a.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), f && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
            var h = Math.abs((r._helper ? r.offset.left - l.left : r.offset.left - l.left) + r.sizeDiff.width),
                p = Math.abs((r._helper ? r.offset.top - l.top : r.offset.top - o.top) + r.sizeDiff.height),
                d = r.containerElement.get(0) == r.element.parent().get(0),
                v = /relative|absolute/.test(r.containerElement.css("position"));
            d && v && (h -= r.parentData.left), h + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - h, f && (r.size.height = r.size.width / r.aspectRatio)), p + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - p, f && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.position,
                o = r.containerOffset,
                u = r.containerPosition,
                a = r.containerElement,
                f = e(r.helper),
                l = f.offset(),
                c = f.outerWidth() - r.sizeDiff.width,
                h = f.outerHeight() - r.sizeDiff.height;
            r._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            }), r._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size;
            r.ghost = r.originalElement.clone(), r.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.ghost.css({
                position: "relative",
                height: r.size.height,
                width: r.size.width
            })
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size,
                o = r.originalSize,
                u = r.originalPosition,
                a = r.axis,
                f = i._aspectRatio || t.shiftKey;
            i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
            var l = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                c = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c) : /^(ne)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c) : /^(sw)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.left = u.left - l) : (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c, r.position.left = u.left - l)
        }
    });
    var n = function (e) {
        return parseInt(e, 10) || 0
    }, r = function (e) {
            return !isNaN(parseInt(e, 10))
        }
}(jQuery),
function (e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.9.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function () {
                n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function () {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (this.options.disabled) return;
            var r = this.options;
            this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var r = e.data(this, "selectable-item");
                r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), e(t.target).parents().andSelf().each(function () {
                var r = e.data(this, "selectable-item");
                if (r) {
                    var i = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected");
                    return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
                        selecting: r.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1
                }
            })
        },
        _mouseDrag: function (t) {
            var n = this;
            this.dragged = !0;
            if (this.options.disabled) return;
            var r = this.options,
                i = this.opos[0],
                s = this.opos[1],
                o = t.pageX,
                u = t.pageY;
            if (i > o) {
                var a = o;
                o = i, i = a
            }
            if (s > u) {
                var a = u;
                u = s, s = a
            }
            return this.helper.css({
                left: i,
                top: s,
                width: o - i,
                height: u - s
            }), this.selectees.each(function () {
                var a = e.data(this, "selectable-item");
                if (!a || a.element == n.element[0]) return;
                var f = !1;
                r.tolerance == "touch" ? f = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (f = a.left > i && a.right < o && a.top > s && a.bottom < u), f ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                    selecting: a.element
                }))) : (a.selecting && ((t.metaKey || t.ctrlKey) && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                    unselecting: a.element
                }))), a.selected && !t.metaKey && !t.ctrlKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: a.element
                })))
            }), !1
        },
        _mouseStop: function (t) {
            var n = this;
            this.dragged = !1;
            var r = this.options;
            return e(".ui-unselecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
}(jQuery),
function (e, t) {
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            var r = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var i = null,
                s = e(t.target).parents().each(function () {
                    if (e.data(this, r.widgetName + "-item") == r) return i = e(this), !1
                });
            e.data(t.target, r.widgetName + "-item") == r && (i = e(t.target));
            if (!i) return !1;
            if (this.options.handle && !n) {
                var o = !1;
                e(this.options.handle, i).find("*").andSelf().each(function () {
                    this == t.target && (o = !0)
                });
                if (!o) return !1
            }
            return this.currentItem = i, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            var i = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r)
                for (var s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i],
                    o = s.item[0],
                    u = this._intersectsWithPointer(s);
                if (!u) continue;
                if (s.instance !== this.currentContainer) continue;
                if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.contains(this.element[0], o) : !0)) {
                    this.direction = u == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = this.placeholder.offset();
                this.reverting = !0, e(this.helper).animate({
                    left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                i = n && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = [],
                r = [],
                i = this._connectWith();
            if (i && t)
                for (var s = i.length - 1; s >= 0; s--) {
                    var o = e(i[s]);
                    for (var u = o.length - 1; u >= 0; u--) {
                        var a = e.data(o[u], this.widgetName);
                        a && a != this && !a.options.disabled && r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
                    }
                }
            r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var s = r.length - 1; s >= 0; s--) r[s][0].each(function () {
                n.push(this)
            });
            return e(n)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function (e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] == e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                i = this._connectWith();
            if (i && this.ready)
                for (var s = i.length - 1; s >= 0; s--) {
                    var o = e(i[s]);
                    for (var u = o.length - 1; u >= 0; u--) {
                        var a = e.data(o[u], this.widgetName);
                        a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                            item: this.currentItem
                        }) : e(a.options.items, a.element), a]), this.containers.push(a))
                    }
                }
            for (var s = r.length - 1; s >= 0; s--) {
                var f = r[s][1],
                    l = r[s][0];
                for (var u = 0, c = l.length; u < c; u++) {
                    var h = e(l[u]);
                    h.data(this.widgetName + "-item", f), n.push({
                        item: h,
                        instance: f,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
                var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                t || (r.width = i.outerWidth(), r.height = i.outerHeight());
                var s = i.offset();
                r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (var n = this.containers.length - 1; n >= 0; n--) {
                    var s = this.containers[n].element.offset();
                    this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var n = t.options;
            if (!n.placeholder || n.placeholder.constructor == String) {
                var r = n.placeholder;
                n.placeholder = {
                    element: function () {
                        var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return r || (n.style.visibility = "hidden"), n
                    },
                    update: function (e, i) {
                        if (r && !n.forcePlaceholderSize) return;
                        i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function (t) {
            var n = null,
                r = null;
            for (var i = this.containers.length - 1; i >= 0; i--) {
                if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (n && e.contains(this.containers[i].element[0], n.element[0])) continue;
                    n = this.containers[i], r = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            if (!n) return;
            if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else {
                var s = 1e4,
                    o = null,
                    u = this.containers[r].floating ? "left" : "top",
                    a = this.containers[r].floating ? "width" : "height",
                    f = this.positionAbs[u] + this.offset.click[u];
                for (var l = this.items.length - 1; l >= 0; l--) {
                    if (!e.contains(this.containers[r].element[0], this.items[l].item[0])) continue;
                    if (this.items[l].item[0] == this.currentItem[0]) continue;
                    var c = this.items[l].item.offset()[u],
                        h = !1;
                    Math.abs(c - f) > Math.abs(c + this.items[l][a] - f) && (h = !0, c += this.items[l][a]), Math.abs(c - f) < s && (s = Math.abs(c - f), o = this.items[l], this.direction = h ? "up" : "down")
                }
                if (!o && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0],
                    r = e(t.containment).offset(),
                    i = e(n).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
                if (n.grid) {
                    var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
                    o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                    var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
                    s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this.counter;
            this._delay(function () {
                i == this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var i in this._storedCSS)
                    if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (n || (r.push(function (e) {
                this._trigger("remove", e, this._uiHash())
            }), r.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), r.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var i = this.containers.length - 1; i >= 0; i--) n || r.push(function (e) {
                return function (t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function (e) {
                return function (t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var i = 0; i < r.length; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (var i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery), jQuery.effects || function (e, t) {
    var n = e.uiBackCompat !== !1,
        r = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function (t, n) {
        function p(e, t, n) {
            var r = a[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }

        function d(e) {
            var n = o(),
                r = n._rgba = [];
            return e = e.toLowerCase(), h(s, function (t, i) {
                var s, o = i.re.exec(e),
                    a = o && i.parse(o),
                    f = i.space || "rgba";
                if (a) return s = n[f](a), n[u[f].cache] = s[u[f].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent), n) : c[e]
        }

        function v(e, t, n) {
            return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            i = /^([\-+])=\s*(\d+\.?\d*)/,
            s = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }],
            o = t.Color = function (e, n, r, i) {
                return new t.Color.fn.parse(e, n, r, i)
            }, u = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, a = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, f = o.support = {}, l = t("<p>")[0],
            c, h = t.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = l.style.backgroundColor.indexOf("rgba") > -1, h(u, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), o.fn = t.extend(o.prototype, {
            parse: function (r, i, s, a) {
                if (r === n) return this._rgba = [null, null, null, null], this;
                if (r.jquery || r.nodeType) r = t(r).css(i), i = n;
                var f = this,
                    l = t.type(r),
                    v = this._rgba = [];
                i !== n && (r = [r, i, s, a], l = "array");
                if (l === "string") return this.parse(d(r) || c._default);
                if (l === "array") return h(u.rgba.props, function (e, t) {
                    v[t.idx] = p(r[t.idx], t)
                }), this;
                if (l === "object") return r instanceof o ? h(u, function (e, t) {
                    r[t.cache] && (f[t.cache] = r[t.cache].slice())
                }) : h(u, function (t, n) {
                    var i = n.cache;
                    h(n.props, function (e, t) {
                        if (!f[i] && n.to) {
                            if (e === "alpha" || r[e] == null) return;
                            f[i] = n.to(f._rgba)
                        }
                        f[i][t.idx] = p(r[e], t, !0)
                    }), f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1, n.from && (f._rgba = n.from(f[i])))
                }), this
            },
            is: function (e) {
                var t = o(e),
                    n = !0,
                    r = this;
                return h(u, function (e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], h(i.props, function (e, t) {
                        if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                    })), n
                }), n
            },
            _space: function () {
                var e = [],
                    t = this;
                return h(u, function (n, r) {
                    t[r.cache] && e.push(n)
                }), e.pop()
            },
            transition: function (e, t) {
                var n = o(e),
                    r = n._space(),
                    i = u[r],
                    s = this.alpha() === 0 ? o("transparent") : this,
                    f = s[i.cache] || i.to(s._rgba),
                    l = f.slice();
                return n = n[i.cache], h(i.props, function (e, r) {
                    var i = r.idx,
                        s = f[i],
                        o = n[i],
                        u = a[r.type] || {};
                    if (o === null) return;
                    s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)), l[i] = p((o - s) * t + s, r))
                }), this[r](l)
            },
            blend: function (e) {
                if (this._rgba[3] === 1) return this;
                var n = this._rgba.slice(),
                    r = n.pop(),
                    i = o(e)._rgba;
                return o(t.map(n, function (e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function () {
                var e = "rgba(",
                    n = t.map(this._rgba, function (e, t) {
                        return e == null ? t > 2 ? 1 : 0 : e
                    });
                return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
            },
            toHslaString: function () {
                var e = "hsla(",
                    n = t.map(this.hsla(), function (e, t) {
                        return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                    });
                return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
            },
            toHexString: function (e) {
                var n = this._rgba.slice(),
                    r = n.pop();
                return e && n.push(~~(r * 255)), "#" + t.map(n, function (e) {
                    return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function () {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), o.fn.parse.prototype = o.fn, u.hsla.to = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255,
                i = e[3],
                s = Math.max(t, n, r),
                o = Math.min(t, n, r),
                u = s - o,
                a = s + o,
                f = a * .5,
                l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }, u.hsla.from = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 360,
                n = e[1],
                r = e[2],
                i = e[3],
                s = r <= .5 ? r * (1 + n) : r + n - r * n,
                o = 2 * r - s;
            return [Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
        }, h(u, function (e, r) {
            var s = r.props,
                u = r.cache,
                a = r.to,
                f = r.from;
            o.fn[e] = function (e) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (e === n) return this[u].slice();
                var r, i = t.type(e),
                    l = i === "array" || i === "object" ? e : arguments,
                    c = this[u].slice();
                return h(s, function (e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = c[t.idx]), c[t.idx] = p(n, t)
                }), f ? (r = o(f(c)), r[u] = c, r) : o(c)
            }, h(s, function (n, r) {
                if (o.fn[n]) return;
                o.fn[n] = function (s) {
                    var o = t.type(s),
                        u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e,
                        a = this[u](),
                        f = a[r.idx],
                        l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = t.type(s)), s == null && r.empty ? this : (o === "string" && (l = i.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = s, this[u](a)))
                }
            })
        }), h(r, function (e, n) {
            t.cssHooks[n] = {
                set: function (e, r) {
                    var i, s, u = "";
                    if (t.type(r) !== "string" || (i = d(r))) {
                        r = o(i || r);
                        if (!f.rgba && r._rgba[3] !== 1) {
                            s = n === "backgroundColor" ? e.parentNode : e;
                            while ((u === "" || u === "transparent") && s && s.style) try {
                                u = t.css(s, "backgroundColor"), s = s.parentNode
                            } catch (a) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        e.style[n] = r
                    } catch (l) {}
                }
            }, t.fx.step[n] = function (e) {
                e.colorInit || (e.start = o(e.elem, n), e.end = o(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }), t.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return h(["Top", "Right", "Bottom", "Left"], function (n, r) {
                    t["border" + r + "Color"] = e
                }), t
            }
        }, c = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function () {
        function i() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                n = {}, r, i;
            if (t && t.length && t[0] && t[t[0]]) {
                i = t.length;
                while (i--) r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
            } else
                for (r in t) typeof t[r] == "string" && (n[r] = t[r]);
            return n
        }

        function s(t, n) {
            var i = {}, s, o;
            for (s in n) o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"],
            r = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
            e.fx.step[n] = function (e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
            }
        }), e.effects.animateClass = function (t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function () {
                var r = e(this),
                    o = r.attr("class") || "",
                    u, f = a.children ? r.find("*").andSelf() : r;
                f = f.map(function () {
                    var t = e(this);
                    return {
                        el: t,
                        start: i.call(this)
                    }
                }), u = function () {
                    e.each(n, function (e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }, u(), f = f.map(function () {
                    return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
                }), r.attr("class", o), f = f.map(function () {
                    var t = this,
                        n = e.Deferred(),
                        r = jQuery.extend({}, a, {
                            queue: !1,
                            complete: function () {
                                n.resolve(t)
                            }
                        });
                    return this.el.animate(this.diff, r), n.promise()
                }), e.when.apply(e, f.get()).done(function () {
                    u(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), a.complete.call(r[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function (t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function (t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function (n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function (t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function () {
        function i(t, n, r, i) {
            e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
            if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
            return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
        }

        function s(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
        }
        e.extend(e.effects, {
            version: "1.9.2",
            save: function (e, t) {
                for (var n = 0; n < t.length; n++) t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
            },
            restore: function (e, n) {
                var i, s;
                for (s = 0; s < n.length; s++) n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
            },
            setMode: function (e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function (e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    i = {
                        width: t.width(),
                        height: t.height()
                    }, s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                    n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(i), r.css(n).show()
            },
            removeWrapper: function (t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
            },
            setTransition: function (t, n, r, i) {
                return i = i || {}, e.each(n, function (e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }), i
            }
        }), e.fn.extend({
            effect: function () {
                function a(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
                    }
                    var r = e(this),
                        i = t.complete,
                        s = t.mode;
                    (r.is(":hidden") ? s === "hide" : s === "show") ? u() : o.call(r[0], t, u)
                }
                var t = i.apply(this, arguments),
                    r = t.mode,
                    s = t.queue,
                    o = e.effects.effect[t.effect],
                    u = !o && n && e.effects[t.effect];
                return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function () {
                    t.complete && t.complete.call(this)
                }) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {
                    options: t,
                    duration: t.duration,
                    callback: t.complete,
                    mode: t.mode
                })
            },
            _show: e.fn.show,
            show: function (e) {
                if (s(e)) return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function (e) {
                if (s(e)) return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function (t) {
                if (s(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var n = i.apply(this, arguments);
                return n.mode = "toggle", this.effect.call(this, n)
            },
            cssUnit: function (t) {
                var n = this.css(t),
                    r = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }), r
            }
        })
    }(),
    function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
            t[n] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function (e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function (e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function (e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery),
function (e, t) {
    var n = 0,
        r = {}, i = {};
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "1.9.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var t = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n),
                r = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !r.collapsible && (r.active === !1 || r.active == null) && (r.active = 0), r.active < 0 && (r.active += this.headers.length), this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (n) {
                var r = e(this),
                    i = r.attr("id"),
                    s = r.next(),
                    o = s.attr("id");
                i || (i = t + "-header-" + n, r.attr("id", i)), o || (o = t + "-panel-" + n, s.attr("id", o)), r.attr("aria-controls", o), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                keydown: "_keydown"
            }), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._setupEvents(r.event)
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this.options.heightStyle !== "content" && e.css("height", "")
        },
        _setOption: function (e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! t)
        },
        _keydown: function (t) {
            if (t.altKey || t.ctrlKey) return;
            var n = e.ui.keyCode,
                r = this.headers.length,
                i = this.headers.index(t.target),
                s = !1;
            switch (t.keyCode) {
            case n.RIGHT:
            case n.DOWN:
                s = this.headers[(i + 1) % r];
                break;
            case n.LEFT:
            case n.UP:
                s = this.headers[(i - 1 + r) % r];
                break;
            case n.SPACE:
            case n.ENTER:
                this._eventHandler(t);
                break;
            case n.HOME:
                s = this.headers[0];
                break;
            case n.END:
                s = this.headers[r - 1]
            }
            s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
        },
        _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t, n, r = this.options.heightStyle,
                i = this.element.parent();
            r === "fill" ? (e.support.minHeight || (n = i.css("overflow"), i.css("overflow", "hidden")), t = i.height(), this.element.siblings(":visible").each(function () {
                var n = e(this),
                    r = n.css("position");
                if (r === "absolute" || r === "fixed") return;
                t -= n.outerHeight(!0)
            }), n && i.css("overflow", n), this.headers.each(function () {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function () {
                t = Math.max(t, e(this).css("height", "").height())
            }).height(t))
        },
        _activate: function (t) {
            var n = this._findActive(t)[0];
            if (n === this.active[0]) return;
            n = n || this.active[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function (t) {
            return typeof t == "number" ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
            var n = {};
            if (!t) return;
            e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }), this._on(this.headers, n)
        },
        _eventHandler: function (t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i[0] === r[0],
                o = s && n.collapsible,
                u = o ? e() : i.next(),
                a = r.next(),
                f = {
                    oldHeader: r,
                    oldPanel: a,
                    newHeader: o ? e() : i,
                    newPanel: u
                };
            t.preventDefault();
            if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;
            n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"))
        },
        _toggle: function (t) {
            var n = t.newPanel,
                r = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function () {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), n.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function (e, t, n) {
            var s, o, u, a = this,
                f = 0,
                l = e.length && (!t.length || e.index() < t.index()),
                c = this.options.animate || {}, h = l && c.down || c,
                p = function () {
                    a._toggleComplete(n)
                };
            typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;
            if (!t.length) return e.animate(i, u, o, p);
            if (!e.length) return t.animate(r, u, o, p);
            s = e.show().outerHeight(), t.animate(r, {
                duration: u,
                easing: o,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(i, {
                duration: u,
                easing: o,
                complete: p,
                step: function (e, n) {
                    n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
                }
            })
        },
        _toggleComplete: function (e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    }), e.uiBackCompat !== !1 && (function (e, t) {
        e.extend(t.options, {
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        });
        var n = t._create;
        t._create = function () {
            if (this.options.navigation) {
                var t = this,
                    r = this.element.find(this.options.header),
                    i = r.next(),
                    s = r.add(i).find("a").filter(this.options.navigationFilter)[0];
                s && r.add(i).each(function (n) {
                    if (e.contains(this, s)) return t.options.active = Math.floor(n / 2), !1
                })
            }
            n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {
            heightStyle: null,
            autoHeight: !0,
            clearStyle: !1,
            fillSpace: !1
        });
        var n = t._create,
            r = t._setOption;
        e.extend(t, {
            _create: function () {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n.call(this)
            },
            _setOption: function (e) {
                if (e === "autoHeight" || e === "clearStyle" || e === "fillSpace") this.options.heightStyle = this._mergeHeightStyle();
                r.apply(this, arguments)
            },
            _mergeHeightStyle: function () {
                var e = this.options;
                if (e.fillSpace) return "fill";
                if (e.clearStyle) return "content";
                if (e.autoHeight) return "auto"
            }
        })
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options.icons, {
            activeHeader: null,
            headerSelected: "ui-icon-triangle-1-s"
        });
        var n = t._createIcons;
        t._createIcons = function () {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        t.activate = t._activate;
        var n = t._findActive;
        t._findActive = function (e) {
            return e === -1 && (e = !1), e && typeof e != "number" && (e = this.headers.index(this.headers.filter(e)), e === -1 && (e = !1)), n.call(this, e)
        }
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (e, t) {
        e.extend(t.options, {
            change: null,
            changestart: null
        });
        var n = t._trigger;
        t._trigger = function (e, t, r) {
            var i = n.apply(this, arguments);
            return i ? (e === "beforeActivate" ? i = n.call(this, "changestart", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            }) : e === "activate" && (i = n.call(this, "change", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            })), i) : !1
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {
            animate: null,
            animated: "slide"
        });
        var n = t._create;
        t._create = function () {
            var e = this.options;
            e.animate === null && (e.animated ? e.animated === "slide" ? e.animate = 300 : e.animated === "bounceslide" ? e.animate = {
                duration: 200,
                down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                }
            } : e.animate = e.animated : e.animate = !1), n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype))
}(jQuery),
function (e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var t, n, r;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (i) {
                    if (this.element.prop("readOnly")) {
                        t = !0, r = !0, n = !0;
                        return
                    }
                    t = !1, r = !1, n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                    case s.PAGE_UP:
                        t = !0, this._move("previousPage", i);
                        break;
                    case s.PAGE_DOWN:
                        t = !0, this._move("nextPage", i);
                        break;
                    case s.UP:
                        t = !0, this._keyEvent("previous", i);
                        break;
                    case s.DOWN:
                        t = !0, this._keyEvent("next", i);
                        break;
                    case s.ENTER:
                    case s.NUMPAD_ENTER:
                        this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                        break;
                    case s.TAB:
                        this.menu.active && this.menu.select(i);
                        break;
                    case s.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                        break;
                    default:
                        n = !0, this._searchTimeout(i)
                    }
                },
                keypress: function (r) {
                    if (t) {
                        t = !1, r.preventDefault();
                        return
                    }
                    if (n) return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                    case i.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                    case i.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                    case i.UP:
                        this._keyEvent("previous", r);
                        break;
                    case i.DOWN:
                        this._keyEvent("next", r)
                    }
                },
                input: function (e) {
                    if (r) {
                        r = !1, e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: e(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function (t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function () {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function (e, t) {
                    var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                        this.previous = r, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]), e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function () {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function () {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function (t, i) {
                r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function (e) {
                        i(e)
                    },
                    error: function () {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            e = e != null ? e : this._value(), this.term = this._value();
            if (e.length < this.options.minLength) return this.close(t);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function () {
            var e = this,
                t = ++n;
            return function (r) {
                t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term), this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
        }
    })
}(jQuery),
function (e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        u = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = e(this).find(":ui-button");
            setTimeout(function () {
                t.button("refresh")
            }, 1)
        }, l = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var t = this,
                u = this.options,
                a = this.type === "checkbox" || this.type === "radio",
                c = a ? "" : "ui-state-active",
                h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                if (u.disabled) return;
                this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                if (u.disabled) return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function (e) {
                u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function () {
                t.buttonElement.removeClass(h)
            }), a && (this.element.bind("change" + this.eventNamespace, function () {
                if (s) return;
                t.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                s = !1, r = e.pageX, i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                if (r !== e.pageX || i !== e.pageY) s = !0
            })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1;
                e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function () {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", u.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.9.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout", function () {
            $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover", function () {
            $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t)
            if (t[n] == null || t[n] == undefined) e[n] = t[n];
        return e
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.9.2"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (e, t) {
            var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var n = $(e);
            t.append = $([]), t.trigger = $([]);
            if (n.hasClass(this.markerClassName)) return;
            this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
            var i = this._get(t, "showOn");
            (i == "focus" || i == "both") && e.focus(this._showDatepicker);
            if (i == "button" || i == "both") {
                var s = this._get(t, "buttonText"),
                    o = this._get(t, "buttonImage");
                t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function (e) {
                        var t = 0,
                            n = 0;
                        for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                        return n
                    };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var n = $(e);
            if (n.hasClass(this.markerClassName)) return;
            n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (e, t, n, r, i) {
            var s = this._dialogInst;
            if (!s) {
                this.uuid += 1;
                var o = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
            }
            extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
            if (!this._pos) {
                var u = document.documentElement.clientWidth,
                    a = document.documentElement.clientHeight,
                    f = document.documentElement.scrollLeft || document.body.scrollLeft,
                    l = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
        },
        _destroyDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
        },
        _enableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            })
        },
        _disableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(r, "min"),
                    u = this._getMinMaxDate(r, "max");
                extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function (e) {
            var t = $.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if ($.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), n = !1;
                break;
            case 13:
                var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
                var s = $.datepicker._get(t, "onSelect");
                if (s) {
                    var o = $.datepicker._formatDate(t);
                    s.apply(t.input ? t.input[0] : null, [o, t])
                } else $.datepicker._hideDatepicker();
                return !1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            default:
                n = !1
            } else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = $.datepicker._getInst(e.target);
            if ($.datepicker._get(t, "constrainInput")) {
                var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
            }
        },
        _doKeyUp: function (e) {
            var t = $.datepicker._getInst(e.target);
            if (t.input.val() != t.lastVal) try {
                var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (r) {
                $.datepicker.log(r)
            }
            return !0
        },
        _showDatepicker: function (e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
            if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
            var t = $.datepicker._getInst(e);
            $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker
                ._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
            var n = $.datepicker._get(t, "beforeShow"),
                r = n ? n.apply(e, [e, t]) : {};
            if (r === !1) return;
            extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
            var i = !1;
            $(e).parents().each(function () {
                return i |= $(this).css("position") == "fixed", !i
            });
            var s = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px"
            });
            if (!t.inline) {
                var o = $.datepicker._get(t, "showAnim"),
                    u = $.datepicker._get(t, "duration"),
                    a = function () {
                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                        if ( !! e.length) {
                            var n = $.datepicker._getBorders(t.dpDiv);
                            e.css({
                                left: -n[0],
                                top: -n[1],
                                width: t.dpDiv.outerWidth(),
                                height: t.dpDiv.outerHeight()
                            })
                        }
                    };
                t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4;
            var t = $.datepicker._getBorders(e.dpDiv);
            instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var n = e.dpDiv.find("iframe.ui-datepicker-cover");
            !n.length || n.css({
                left: -t[0],
                top: -t[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var r = this._getNumberOfMonths(e),
                i = r[1],
                s = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), e.dpDiv[(r[0] != 1 || r[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
            if (e.yearshtml) {
                var o = e.yearshtml;
                setTimeout(function () {
                    o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
                a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            var t = this._getInst(e),
                n = this._get(t, "isRTL");
            while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
            var r = $(e).offset();
            return [r.left, r.top]
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (!t || e && t != $.data(e, PROP_NAME)) return;
            if (this._datepickerShowing) {
                var n = this._get(t, "showAnim"),
                    r = this._get(t, "duration"),
                    i = function () {
                        $.datepicker._tidyDialog(t)
                    };
                $.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
                var s = this._get(t, "onClose");
                s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (!$.datepicker._curInst) return;
            var t = $(e.target),
                n = $.datepicker._getInst(t[0]);
            (t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
        },
        _adjustDate: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            if (this._isDisabledDatepicker(r[0])) return;
            this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
        },
        _gotoToday: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
            else {
                var r = new Date;
                n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
            }
            this._notifyChange(n), this._adjustDate(t)
        },
        _selectMonthYear: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
        },
        _selectDay: function (e, t, n, r) {
            var i = $(e);
            if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
            var s = this._getInst(i[0]);
            s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        },
        _clearDate: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            this._selectDate(t, "")
        },
        _selectDate: function (e, t) {
            var n = $(e),
                r = this._getInst(n[0]);
            t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
            var i = this._get(r, "onSelect");
            i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                $(t).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function (e) {
            var t = new Date(e.getTime());
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var n = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
            var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = -1,
                f = -1,
                l = -1,
                c = -1,
                h = !1,
                p = function (t) {
                    var n = y + 1 < e.length && e.charAt(y + 1) == t;
                    return n && y++, n
                }, d = function (e) {
                    var n = p(e),
                        r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
                        i = new RegExp("^\\d{1," + r + "}"),
                        s = t.substring(g).match(i);
                    if (!s) throw "Missing number at position " + g;
                    return g += s[0].length, parseInt(s[0], 10)
                }, v = function (e, n, r) {
                    var i = $.map(p(e) ? r : n, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    }),
                        s = -1;
                    $.each(i, function (e, n) {
                        var r = n[1];
                        if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
                    });
                    if (s != -1) return s + 1;
                    throw "Unknown name at position " + g
                }, m = function () {
                    if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                    g++
                }, g = 0;
            for (var y = 0; y < e.length; y++)
                if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
                else switch (e.charAt(y)) {
                case "d":
                    l = d("d");
                    break;
                case "D":
                    v("D", i, s);
                    break;
                case "o":
                    c = d("o");
                    break;
                case "m":
                    f = d("m");
                    break;
                case "M":
                    f = v("M", o, u);
                    break;
                case "y":
                    a = d("y");
                    break;
                case "@":
                    var b = new Date(d("@"));
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "!":
                    var b = new Date((d("!") - this._ticksTo1970) / 1e4);
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "'":
                    p("'") ? m() : h = !0;
                    break;
                default:
                    m()
                }
            if (g < t.length) {
                var w = t.substr(g);
                if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
            }
            a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
            if (c > -1) {
                f = 1, l = c;
                do {
                    var E = this._getDaysInMonth(a, f - 1);
                    if (l <= E) break;
                    f++, l -= E
                } while (!0)
            }
            var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
            if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function (e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (n ? n.monthNames : null) || this._defaults.monthNames,
                u = function (t) {
                    var n = h + 1 < e.length && e.charAt(h + 1) == t;
                    return n && h++, n
                }, a = function (e, t, n) {
                    var r = "" + t;
                    if (u(e))
                        while (r.length < n) r = "0" + r;
                    return r
                }, f = function (e, t, n, r) {
                    return u(e) ? r[t] : n[t]
                }, l = "",
                c = !1;
            if (t)
                for (var h = 0; h < e.length; h++)
                    if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
                    else switch (e.charAt(h)) {
                    case "d":
                        l += a("d", t.getDate(), 2);
                        break;
                    case "D":
                        l += f("D", t.getDay(), r, i);
                        break;
                    case "o":
                        l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        l += a("m", t.getMonth() + 1, 2);
                        break;
                    case "M":
                        l += f("M", t.getMonth(), s, o);
                        break;
                    case "y":
                        l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                        break;
                    case "@":
                        l += t.getTime();
                        break;
                    case "!":
                        l += t.getTime() * 1e4 + this._ticksTo1970;
                        break;
                    case "'":
                        u("'") ? l += "'" : c = !0;
                        break;
                    default:
                        l += e.charAt(h)
                    }
            return l
        },
        _possibleChars: function (e) {
            var t = "",
                n = !1,
                r = function (t) {
                    var n = i + 1 < e.length && e.charAt(i + 1) == t;
                    return n && i++, n
                };
            for (var i = 0; i < e.length; i++)
                if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
                else switch (e.charAt(i)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    t += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r("'") ? t += "'" : n = !0;
                    break;
                default:
                    t += e.charAt(i)
                }
            return t
        },
        _get: function (e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() == e.lastVal) return;
            var n = this._get(e, "dateFormat"),
                r = e.lastVal = e.input ? e.input.val() : null,
                i, s;
            i = s = this._getDefaultDate(e);
            var o = this._getFormatConfig(e);
            try {
                i = this.parseDate(n, r, o) || s
            } catch (u) {
                this.log(u), r = t ? "" : r
            }
            e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, n) {
            var r = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, i = function (t) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
                        i = r.getFullYear(),
                        s = r.getMonth(),
                        o = r.getDate(),
                        u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        a = u.exec(t);
                    while (a) {
                        switch (a[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(a[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += parseInt(a[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                            break;
                        case "y":
                        case "Y":
                            i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
                        }
                        a = u.exec(t)
                    }
                    return new Date(i, s, o)
                }, s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
            return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (e) {
            var t = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
                    },
                    next: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
                    },
                    hide: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                    },
                    today: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
                    },
                    selectDay: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                a = this._get(e, "stepMonths"),
                f = o[0] != 1 || o[1] != 1,
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                c = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max"),
                p = e.drawMonth - u,
                d = e.drawYear;
            p < 0 && (p += 12, d--);
            if (h) {
                var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                v = c && v < c ? c : v;
                while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
            }
            e.drawMonth = p, e.drawYear = d;
            var m = this._get(e, "prevText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
            var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                y = this._get(e, "nextText");
            y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
            var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
                w = this._get(e, "currentText"),
                E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
            w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
            var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
                T = parseInt(this._get(e, "firstDay"), 10);
            T = isNaN(T) ? 0 : T;
            var N = this._get(e, "showWeek"),
                C = this._get(e, "dayNames"),
                k = this._get(e, "dayNamesShort"),
                L = this._get(e, "dayNamesMin"),
                A = this._get(e, "monthNames"),
                O = this._get(e, "monthNamesShort"),
                M = this._get(e, "beforeShowDay"),
                _ = this._get(e, "showOtherMonths"),
                D = this._get(e, "selectOtherMonths"),
                P = this._get(e, "calculateWeek") || this.iso8601Week,
                H = this._getDefaultDate(e),
                B = "";
            for (var j = 0; j < o[0]; j++) {
                var F = "";
                this.maxRows = 4;
                for (var I = 0; I < o[1]; I++) {
                    var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
                        R = " ui-corner-all",
                        U = "";
                    if (f) {
                        U += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (I) {
                        case 0:
                            U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                            break;
                        case o[1] - 1:
                            U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                            break;
                        default:
                            U += " ui-datepicker-group-middle", R = ""
                        }
                        U += '">'
                    }
                    U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (var W = 0; W < 7; W++) {
                        var X = (W + T) % 7;
                        z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
                    }
                    U += z + "</tr></thead><tbody>";
                    var V = this._getDaysInMonth(d, p);
                    d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
                    var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
                        K = Math.ceil((J + V) / 7),
                        Q = f ? this.maxRows > K ? this.maxRows : K : K;
                    this.maxRows = Q;
                    var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
                    for (var Y = 0; Y < Q; Y++) {
                        U += "<tr>";
                        var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
                        for (var W = 0; W < 7; W++) {
                            var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
                                tt = G.getMonth() != p,
                                nt = tt && !D || !et[0] || c && G < c || h && G > h;
                            Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
                        }
                        U += Z + "</tr>"
                    }
                    p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
                }
                B += F
            }
            return B += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                var p = r && r.getFullYear() == n,
                    d = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                else {
                    var m = this._get(e, "yearRange").split(":"),
                        g = (new Date).getFullYear(),
                        y = function (e) {
                            var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? g : t
                        }, b = y(m[0]),
                        w = Math.max(b, y(m[1] || ""));
                    b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                    for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
                    e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                }
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && t < n ? n : t;
            return i = r && i > r ? r : i, i
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max");
            return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), $.fn.datepicker = function (e) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
}(jQuery),
function (e, t) {
    var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        r = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        }, i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var t = this,
                r = this.options,
                i = r.title || "&#160;",
                s, o, u, a, f;
            s = (this.uiDialog = e("<div>")).addClass(n + r.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: r.zIndex
            }).attr("tabIndex", -1).keydown(function (n) {
                r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }).mousedown(function (e) {
                t.moveToTop(!1, e)
            }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), o = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                s.focus()
            }).prependTo(s), u = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (e) {
                e.preventDefault(), t.close(e)
            }).appendTo(o), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u), a = e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o), f = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(f), s.attr({
                role: "dialog",
                "aria-labelledby": a.attr("id")
            }), o.find("*").add(o).disableSelection(), this._hoverable(u), this._focusable(u), r.draggable && e.fn.draggable && this._makeDraggable(), r.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(r.buttons), this._isOpen = !1, e.fn.bgiframe && s.bgiframe(), this._on(s, {
                keydown: function (t) {
                    if (!r.modal || t.keyCode !== e.ui.keyCode.TAB) return;
                    var n = e(":tabbable", s),
                        i = n.filter(":first"),
                        o = n.filter(":last");
                    if (t.target === o[0] && !t.shiftKey) return i.focus(1), !1;
                    if (t.target === i[0] && t.shiftKey) return o.focus(1), !1
                }
            })
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _destroy: function () {
            var e, t = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var n = this,
                r, i;
            if (!this._isOpen) return;
            if (!1 === this._trigger("beforeClose", t)) return;
            return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
                n._trigger("close", t)
            }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (r = 0, e(".ui-dialog").each(function () {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
            }), e.ui.dialog.maxZ = r), this
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, n) {
            var r = this.options,
                i;
            return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), i = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", n), this)
        },
        open: function () {
            if (this._isOpen) return;
            var t, n = this.options,
                r = this.uiDialog;
            return this._size(), this._position(n.position), r.show(n.show), this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = r)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
        },
        _createButtons: function (t) {
            var n = this,
                r = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof t == "object" && t !== null && e.each(t, function () {
                return !(r = !0)
            }), r ? (e.each(t, function (t, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r, r = e.extend({
                    type: "button"
                }, r), s = r.click, r.click = function () {
                    s.apply(n.element[0], arguments)
                }, i = e("<button></button>", r).appendTo(n.uiButtonSet), e.fn.button && i.button()
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function () {
            function r(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (n, i) {
                    e(this).addClass("ui-dialog-dragging"), t._trigger("dragStart", n, r(i))
                },
                drag: function (e, n) {
                    t._trigger("drag", e, r(n))
                },
                stop: function (i, s) {
                    n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._trigger("dragStop", i, r(s)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (n) {
            function u(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var r = this,
                i = this.options,
                s = this.uiDialog.css("position"),
                o = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (t, n) {
                    e(this).addClass("ui-dialog-resizing"), r._trigger("resizeStart", t, u(n))
                },
                resize: function (e, t) {
                    r._trigger("resize", e, u(t))
                },
                stop: function (t, n) {
                    e(this).removeClass("ui-dialog-resizing"), i.height = e(this).height(), i.width = e(this).width(), r._trigger("resizeStop", t, u(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                    at: n.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var n = this,
                s = {}, o = !1;
            e.each(t, function (e, t) {
                n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, r) {
            var i, s, o = this.uiDialog;
            switch (t) {
            case "buttons":
                this._createButtons(r);
                break;
            case "closeText":
                this.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                o.removeClass(this.options.dialogClass).addClass(n + r);
                break;
            case "disabled":
                r ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                i = o.is(":data(draggable)"), i && !r && o.draggable("destroy"), !i && r && this._makeDraggable();
                break;
            case "position":
                this._position(r);
                break;
            case "resizable":
                s = o.is(":data(resizable)"), s && !r && o.resizable("destroy"), s && typeof r == "string" && o.resizable("option", "handles", r), !s && r !== !1 && this._makeResizable(r);
                break;
            case "title":
                e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            this._super(t, r)
        },
        _size: function () {
            var t, n, r, i = this.options,
                s = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), i.minWidth > i.width && (i.width = i.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight(), n = Math.max(0, i.minHeight - t), i.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: n,
                height: "auto"
            }) : (this.uiDialog.show(), r = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(r, n))) : this.element.height(Math.max(i.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            var t = e.attr("id");
            return t ||
                (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            this.instances.length === 0 && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
            return e(document).bind("keydown.dialog-overlay", function (r) {
                var i = e.ui.dialog.overlay.instances;
                i.length !== 0 && i[i.length - 1] === n && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
            }), n.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function (t) {
            var n = e.inArray(t, this.instances),
                r = 0;
            n !== -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function () {
                r = Math.max(r, this.css("z-index"))
            }), this.maxZ = r
        },
        height: function () {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function (e, t) {
    var n = /up|down|vertical/,
        r = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function (t, i) {
        var s = e(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = e.effects.setMode(s, t.mode || "hide"),
            a = t.direction || "up",
            f = n.test(a),
            l = f ? "height" : "width",
            c = f ? "top" : "left",
            h = r.test(a),
            p = {}, d = u === "show",
            v, m, g;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function () {
                u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.bounce = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = s === "hide",
            u = s === "show",
            a = t.direction || "up",
            f = t.distance,
            l = t.times || 5,
            c = l * 2 + (u || o ? 1 : 0),
            h = t.duration / c,
            p = t.easing,
            d = a === "up" || a === "down" ? "top" : "left",
            v = a === "up" || a === "left",
            m, g, y, b = r.queue(),
            w = b.length;
        (u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = {
                opacity: 1
            }, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;
        for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;
        o && (g = {
            opacity: 0
        }, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function () {
            o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue()
    }
}(jQuery),
function (e, t) {
    e.effects.effect.clip = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "vertical",
            a = u === "vertical",
            f = a ? "height" : "width",
            l = a ? "top" : "left",
            c = {}, h, p, d;
        e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.drop = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left" ? "pos" : "neg",
            l = {
                opacity: o ? 1 : 0
            }, c;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.explode = function (t, n) {
        function y() {
            c.push(this), c.length === r * i && b()
        }

        function b() {
            s.css({
                visibility: "visible"
            }), e(c).remove(), u || s.hide(), n()
        }
        var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            i = r,
            s = e(this),
            o = e.effects.setMode(s, t.mode || "hide"),
            u = o === "show",
            a = s.show().css("visibility", "hidden").offset(),
            f = Math.ceil(s.outerWidth() / i),
            l = Math.ceil(s.outerHeight() / r),
            c = [],
            h, p, d, v, m, g;
        for (h = 0; h < r; h++) {
            v = a.top + h * l, g = h - (r - 1) / 2;
            for (p = 0; p < i; p++) d = a.left + p * f, m = p - (i - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -p * f,
                top: -h * l
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: f,
                height: l,
                left: d + (u ? m * f : 0),
                top: v + (u ? g * l : 0),
                opacity: u ? 0 : 1
            }).animate({
                left: d + (u ? 0 : m * f),
                top: v + (u ? 0 : g * l),
                opacity: u ? 1 : 0
            }, t.duration || 500, t.easing, y)
        }
    }
}(jQuery),
function (e, t) {
    e.effects.effect.fade = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: i
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.fold = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = s === "hide",
            a = t.size || 15,
            f = /([0-9]+)%/.exec(a),
            l = !! t.horizFirst,
            c = o !== l,
            h = c ? ["width", "height"] : ["height", "width"],
            p = t.duration / 2,
            d, v, m = {}, g = {};
        e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? {
            height: 0,
            width: a
        } : {
            height: a,
            width: 0
        }), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
            u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.highlight = function (t, n) {
        var r = e(this),
            i = ["backgroundImage", "backgroundColor", "opacity"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = {
                backgroundColor: r.css("backgroundColor")
            };
        s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), n()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.pulsate = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "show"),
            s = i === "show",
            o = i === "hide",
            u = s || i === "hide",
            a = (t.times || 5) * 2 + (u ? 1 : 0),
            f = t.duration / a,
            l = 0,
            c = r.queue(),
            h = c.length,
            p;
        if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;
        for (p = 1; p < a; p++) r.animate({
            opacity: l
        }, f, t.easing), l = 1 - l;
        r.animate({
            opacity: l
        }, f, t.easing), r.queue(function () {
            o && r.hide(), n()
        }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue()
    }
}(jQuery),
function (e, t) {
    e.effects.effect.puff = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "hide"),
            s = i === "hide",
            o = parseInt(t.percent, 10) || 150,
            u = o / 100,
            a = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: i,
            complete: n,
            percent: s ? o : 100,
            from: s ? a : {
                height: a.height * u,
                width: a.width * u,
                outerHeight: a.outerHeight * u,
                outerWidth: a.outerWidth * u
            }
        }), r.effect(t)
    }, e.effects.effect.scale = function (t, n) {
        var r = e(this),
            i = e.extend(!0, {}, t),
            s = e.effects.setMode(r, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
            u = t.direction || "both",
            a = t.origin,
            f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            }, l = {
                y: u !== "horizontal" ? o / 100 : 1,
                x: u !== "vertical" ? o / 100 : 1
            };
        i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f), i.to = {
            height: f.height * l.y,
            width: f.width * l.x,
            outerHeight: f.outerHeight * l.y,
            outerWidth: f.outerWidth * l.x
        }, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
    }, e.effects.effect.size = function (t, n) {
        var r, i, s, o = e(this),
            u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            f = ["width", "height", "overflow"],
            l = ["fontSize"],
            c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(o, t.mode || "effect"),
            d = t.restore || p !== "effect",
            v = t.scale || "both",
            m = t.origin || ["middle", "center"],
            g = o.css("position"),
            y = d ? u : a,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        p === "show" && o.show(), r = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = {
            from: {
                y: o.from.height / r.height,
                x: o.from.width / r.width
            },
            to: {
                y: o.to.height / r.height,
                x: o.to.width / r.width
            }
        };
        if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));
        (v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);
        if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function () {
            var n = e(this),
                r = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                };
            d && e.effects.save(n, f), n.from = {
                height: r.height * s.from.y,
                width: r.width * s.from.x,
                outerHeight: r.outerHeight * s.from.y,
                outerWidth: r.outerWidth * s.from.x
            }, n.to = {
                height: r.height * s.to.y,
                width: r.width * s.to.x,
                outerHeight: r.height * s.to.y,
                outerWidth: r.width * s.to.x
            }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function () {
                d && e.effects.restore(n, f)
            })
        });
        o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, n) {
                        var r = parseInt(n, 10),
                            i = e ? o.to.left : o.to.top;
                        return n === "auto" ? i + "px" : r + i + "px"
                    })
                })), e.effects.removeWrapper(o), n()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.shake = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = t.direction || "left",
            u = t.distance || 20,
            a = t.times || 3,
            f = a * 2 + 1,
            l = Math.round(t.duration / f),
            c = o === "up" || o === "down" ? "top" : "left",
            h = o === "up" || o === "left",
            p = {}, d = {}, v = {}, m, g = r.queue(),
            y = g.length;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);
        for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
        r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function () {
            s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue()
    }
}(jQuery),
function (e, t) {
    e.effects.effect.slide = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "width", "height"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left",
            l, c = {};
        e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
}(jQuery),
function (e, t) {
    e.effects.effect.transfer = function (t, n) {
        var r = e(this),
            i = e(t.to),
            s = i.css("position") === "fixed",
            o = e("body"),
            u = s ? o.scrollTop() : 0,
            a = s ? o.scrollLeft() : 0,
            f = i.offset(),
            l = {
                top: f.top - u,
                left: f.left - a,
                height: i.innerHeight(),
                width: i.innerWidth()
            }, c = r.offset(),
            h = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
                top: c.top - u,
                left: c.left - a,
                height: r.innerHeight(),
                width: r.innerWidth(),
                position: s ? "fixed" : "absolute"
            }).animate(l, t.duration, t.easing, function () {
                h.remove(), n()
            })
    }
}(jQuery),
function (e, t) {
    var n = !1;
    e.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function (e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function (e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (t) {
                    var r = e(t.target).closest(".ui-menu-item");
                    !n && r.not(".ui-state-disabled").length && (n = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), n = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            function a(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, r, i, s, o, u = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return o.test(e(this).children("a").text())
                }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return o.test(e(this).children("a").text())
                })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, n = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = e(this),
                    r = t.prev("a"),
                    i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
            }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function () {
                var t = e(this);
                /[^\-â€”â€“\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function (e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function (t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function (e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay)
        },
        _open: function (t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function (t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function (t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return n = e(this), n.offset().top - r - i < 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function (t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return n = e(this), n.offset().top - r + i > 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
        }
    })
}(jQuery),
function (e, t) {
    function h(e, t, n) {
        return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
    }

    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    e.ui = e.ui || {};
    var n, r = Math.max,
        i = Math.abs,
        s = Math.round,
        o = /left|center|right/,
        u = /top|center|bottom/,
        a = /[\+\-]\d+%?/,
        f = /^\w+/,
        l = /%$/,
        c = e.fn.position;
    e.position = {
        scrollbarWidth: function () {
            if (n !== t) return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = s.children()[0];
            return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
        },
        getScrollInfo: function (t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x"),
                r = t.isWindow ? "" : t.element.css("overflow-y"),
                i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (t) {
            var n = e(t || window),
                r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    }, e.fn.position = function (t) {
        if (!t || !t.of) return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, d, v, m, g = e(t.of),
            y = e.position.getWithinInfo(t.within),
            b = e.position.getScrollInfo(y),
            w = g[0],
            E = (t.collision || "flip").split(" "),
            S = {};
        return w.nodeType === 9 ? (l = g.width(), d = g.height(), v = {
            top: 0,
            left: 0
        }) : e.isWindow(w) ? (l = g.width(), d = g.height(), v = {
            top: g.scrollTop(),
            left: g.scrollLeft()
        }) : w.preventDefault ? (t.at = "left top", l = d = 0, v = {
            top: w.pageY,
            left: w.pageX
        }) : (l = g.outerWidth(), d = g.outerHeight(), v = g.offset()), m = e.extend({}, v), e.each(["my", "at"], function () {
            var e = (t[this] || "").split(" "),
                n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), S[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }), E.length === 1 && (E[1] = E[0]), t.at[0] === "right" ? m.left += l : t.at[0] === "center" && (m.left += l / 2), t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2), n = h(S.at, l, d), m.left += n[0], m.top += n[1], this.each(function () {
            var o, u, a = e(this),
                f = a.outerWidth(),
                c = a.outerHeight(),
                w = p(this, "marginLeft"),
                x = p(this, "marginTop"),
                T = f + w + p(this, "marginRight") + b.width,
                N = c + x + p(this, "marginBottom") + b.height,
                C = e.extend({}, m),
                k = h(S.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                marginLeft: w,
                marginTop: x
            }, e.each(["left", "top"], function (r, i) {
                e.ui.position[E[r]] && e.ui.position[E[r]][i](C, {
                    targetWidth: l,
                    targetHeight: d,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: y,
                    elem: a
                })
            }), e.fn.bgiframe && a.bgiframe(), t.using && (u = function (e) {
                var n = v.left - C.left,
                    s = n + l - f,
                    o = v.top - C.top,
                    u = o + d - c,
                    h = {
                        target: {
                            element: g,
                            left: v.left,
                            top: v.top,
                            width: l,
                            height: d
                        },
                        element: {
                            element: a,
                            left: C.left,
                            top: C.top,
                            width: f,
                            height: c
                        },
                        horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                        vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                    };
                l < f && i(n + s) < l && (h.horizontal = "center"), d < c && i(o + u) < d && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
            }), a.offset(e.extend(C, {
                using: u
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollLeft : n.offset.left,
                    s = n.width,
                    o = e.left - t.collisionPosition.marginLeft,
                    u = i - o,
                    a = o + t.collisionWidth - s - i,
                    f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function (e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollTop : n.offset.top,
                    s = t.within.height,
                    o = e.top - t.collisionPosition.marginTop,
                    u = i - o,
                    a = o + t.collisionHeight - s - i,
                    f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function (e, t) {
                var n = t.within,
                    r = n.offset.left + n.scrollLeft,
                    s = n.width,
                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                    u = e.left - t.collisionPosition.marginLeft,
                    a = u - o,
                    f = u + t.collisionWidth - s - o,
                    l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                    c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                    h = -2 * t.offset[0],
                    p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a)) e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f) e.left += l + c + h
                }
            },
            top: function (e, t) {
                var n = t.within,
                    r = n.offset.top + n.scrollTop,
                    s = n.height,
                    o = n.isWindow ? n.scrollTop : n.offset.top,
                    u = e.top - t.collisionPosition.marginTop,
                    a = u - o,
                    f = u + t.collisionHeight - s - o,
                    l = t.my[1] === "top",
                    c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    p = -2 * t.offset[1],
                    d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function () {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
            u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r) t.style[s] = r[s];
        t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
    }(), e.uiBackCompat !== !1 && function (e) {
        var n = e.fn.position;
        e.fn.position = function (r) {
            if (!r || !r.offset) return n.call(this, r);
            var i = r.offset.split(" "),
                s = r.at.split(" ");
            return i.length === 1 && (i[1] = i[0]), /^\d/.test(i[0]) && (i[0] = "+" + i[0]), /^\d/.test(i[1]) && (i[1] = "+" + i[1]), s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0], s[0] = "center")), n.call(this, e.extend(r, {
                at: s[0] + i[0] + " " + s[1] + i[1],
                offset: t
            }))
        }
    }(jQuery)
}(jQuery),
function (e, t) {
    e.widget("ui.progressbar", {
        version: "1.9.2",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (e, t) {
            e === "value" && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
        },
        _value: function () {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    })
}(jQuery),
function (e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var t, r, i = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                u = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
            for (t = s.length; t < r; t++) u.push(o);
            this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).mouseenter(function () {
                i.disabled || e(this).addClass("ui-state-hover")
            }).mouseleave(function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            }), this._on(this.handles, {
                keydown: function (t) {
                    var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        t.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                            if (r === !1) return
                        }
                    }
                    o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                    switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + o);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - o)
                    }
                    this._slide(t, u, s)
                },
                keyup: function (t) {
                    var n = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var n = Math.abs(r - l.values(t));
                i > n && (i = n, s = e(this), o = t)
            }), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0, this._refreshValue();
                for (r = 0; r < i; r += 1) this._change(null, r);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function (e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
            n = this.options.values.slice();
            for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
            return n
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function (r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        }
    })
}(jQuery),
function (e) {
    function t(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
        version: "1.9.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}, n = this.element;
            return e.each(["min", "max", "step"], function (e, r) {
                var i = n.attr(r);
                i !== undefined && i.length && (t[r] = i)
            }), t
        },
        _events: {
            keydown: function (e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (e) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh(), this.previous !== this.element.val() && this._trigger("change", e)
            },
            mousewheel: function (e, t) {
                if (!t) return;
                if (!this.spinning && !this._start(e)) return !1;
                this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                    this.spinning && this._stop(e)
                }, 100), e.preventDefault()
            },
            "mousedown .ui-spinner-button": function (t) {
                function r() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = n, this._delay(function () {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, r.call(this)
                });
                if (this._start(t) === !1) return;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (t) {
                if (!e(t.currentTarget).hasClass("ui-state-active")) return;
                if (this._start(t) === !1) return !1;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var n = this.options,
                r = e.ui.keyCode;
            switch (t.keyCode) {
            case r.UP:
                return this._repeat(null, 1, t), !0;
            case r.DOWN:
                return this._repeat(null, -1, t), !0;
            case r.PAGE_UP:
                return this._repeat(null, n.page, t), !0;
            case r.PAGE_DOWN:
                return this._repeat(null, -n.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (e) {
            return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, t, n)
            }, e), this._spin(t * this.options.step, n)
        },
        _spin: function (e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", t, {
                value: n
            }) !== !1) this._value(n), this.counter++
        },
        _increment: function (t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = e.toString(),
                n = t.indexOf(".");
            return n === -1 ? 0 : t.length - n - 1
        },
        _adjustValue: function (e) {
            var t, n, r = this.options;
            return t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
        },
        _stop: function (e) {
            if (!this.spinning) return;
            clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)
        },
        _setOption: function (e, t) {
            if (e === "culture" || e === "numberFormat") {
                var n = this._parse(this.element.val());
                this.options[e] = t, this.element.val(this._format(n));
                return
            }(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function (e) {
            this._super(e), this._value(this.element.val())
        }),
        _parse: function (e) {
            return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e
        },
        _format: function (e) {
            return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (e, t) {
            var n;
            e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function (e) {
            this._stepUp(e)
        }),
        _stepUp: function (e) {
            this._spin((e || 1) * this.options.step)
        },
        stepDown: t(function (e) {
            this._stepDown(e)
        }),
        _stepDown: function (e) {
            this._spin((e || 1) * -this.options.step)
        },
        pageUp: t(function (e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function (e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function (e) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, e)
        },
        widget: function () {
            return this.uiSpinner
        }
    })
}(jQuery),
function (e, t) {
    function i() {
        return ++n
    }

    function s(e) {
        return e.hash.length > 1 && e.href.replace(r, "") === location.href.replace(r, "").replace(/\s/g, "%20")
    }
    var n = 0,
        r = /#.*$/;
    e.widget("ui.tabs", {
        version: "1.9.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var t = this,
                n = this.options,
                r = n.active,
                i = location.hash.substring(1);
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs();
            if (r === null) {
                i && this.tabs.each(function (t, n) {
                    if (e(n).attr("aria-controls") === i) return r = t, !1
                }), r === null && (r = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                if (r === null || r === -1) r = this.tabs.length ? 0 : !1
            }
            r !== !1 && (r = this.tabs.index(this.tabs.eq(r)), r === -1 && (r = n.collapsible ? !1 : 0)), n.active = r, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function (t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (this._handlePageNav(t)) return;
            switch (t.keyCode) {
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
                r++;
                break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.LEFT:
                i = !1, r--;
                break;
            case e.ui.keyCode.END:
                r = this.anchors.length - 1;
                break;
            case e.ui.keyCode.HOME:
                r = 0;
                break;
            case e.ui.keyCode.SPACE:
                t.preventDefault(), clearTimeout(this.activating), this._activate(r);
                return;
            case e.ui.keyCode.ENTER:
                t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
                return;
            default:
                return
            }
            t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", r)
            }, this.delay))
        },
        _panelKeydown: function (t) {
            if (this._handlePageNav(t)) return;
            t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (t) {
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function (t, n) {
            function i() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }
            var r = this.tabs.length - 1;
            while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function (e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            if (e === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function (e) {
            return e.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
                return n.index(e)
            }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function (n, r) {
                var i, o, u, a = e(r).uniqueId().attr("id"),
                    f = e(r).closest("li"),
                    l = f.attr("aria-controls");
                s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f), i = "#" + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({
                    "aria-controls": i.substring(1),
                    "aria-labelledby": a
                }), o.attr("aria-labelledby", a)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function (t) {
            var n = {
                click: function (e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var n, r, i = this.element.parent();
            t === "fill" ? (e.support.minHeight || (r = i.css("overflow"), i.css("overflow", "hidden")), n = i.height(), this.element.siblings(":visible").each(function () {
                var t = e(this),
                    r = t.css("position");
                if (r === "absolute" || r === "fixed") return;
                n -= t.outerHeight(!0)
            }), r && i.css("overflow", r), this.element.children().not(this.panels).each(function () {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function () {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function (t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault();
            if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
            n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
        },
        _toggle: function (t, n) {
            function o() {
                r.running = !1, r._trigger("activate", t, n)
            }

            function u() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o())
            }
            var r = this,
                i = n.newPanel,
                s = n.oldPanel;
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function () {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n.oldTab.attr("aria-selected", "false"), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function () {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), n.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var n, r = this._findActive(t);
            if (r[0] === this.active[0]) return;
            r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function (e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n) : t.removeAttr("aria-controls")
            }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function (n) {
            var r = this.options.disabled;
            if (r === !1) return;
            n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function (e) {
                return e !== n ? e : null
            }) : r = e.map(this.tabs, function (e, t) {
                return t !== n ? t : null
            })), this._setupDisabled(r)
        },
        disable: function (n) {
            var r = this.options.disabled;
            if (r === !0) return;
            if (n === t) r = !0;
            else {
                n = this._getIndex(n);
                if (e.inArray(n, r) !== -1) return;
                e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
            }
            this._setupDisabled(r)
        },
        load: function (t, n) {
            t = this._getIndex(t);
            var r = this,
                i = this.tabs.eq(t),
                o = i.find(".ui-tabs-anchor"),
                u = this._getPanelForTab(i),
                a = {
                    tab: i,
                    panel: u
                };
            if (s(o[0])) return;
            this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function (e) {
                setTimeout(function () {
                    u.html(e), r._trigger("load", n, a)
                }, 1)
            }).complete(function (e, t) {
                setTimeout(function () {
                    t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                }, 1)
            }))
        },
        _ajaxSettings: function (t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function (t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function (t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    }), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function (e, t) {
        return {
            tab: e,
            panel: t,
            index: this.anchors.index(e)
        }
    }, e.widget("ui.tabs", e.ui.tabs, {
        url: function (e, t) {
            this.anchors.eq(e).attr("href", t)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            ajaxOptions: null,
            cache: !1
        },
        _create: function () {
            this._super();
            var t = this;
            this._on({
                tabsbeforeload: function (n, r) {
                    if (e.data(r.tab[0], "cache.tabs")) {
                        n.preventDefault();
                        return
                    }
                    r.jqXHR.success(function () {
                        t.options.cache && e.data(r.tab[0], "cache.tabs", !0)
                    })
                }
            })
        },
        _ajaxSettings: function (t, n, r) {
            var i = this.options.ajaxOptions;
            return e.extend({}, i, {
                error: function (e, t) {
                    try {
                        i.error(e, t, r.tab.closest("li").index(), r.tab[0])
                    } catch (n) {}
                }
            }, this._superApply(arguments))
        },
        _setOption: function (e, t) {
            e === "cache" && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
        },
        _destroy: function () {
            this.anchors.removeData("cache.tabs"), this._super()
        },
        url: function (e) {
            this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        abort: function () {
            this.xhr && this.xhr.abort()
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            spinner: "<em>Loading&#8230;</em>"
        },
        _create: function () {
            this._super(), this._on({
                tabsbeforeload: function (e, t) {
                    if (e.target !== this.element[0] || !this.options.spinner) return;
                    var n = t.tab.find("span"),
                        r = n.html();
                    n.html(this.options.spinner), t.jqXHR.complete(function () {
                        n.html(r)
                    })
                }
            })
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            enable: null,
            disable: null
        },
        enable: function (t) {
            var n = this.options,
                r;
            if (t && n.disabled === !0 || e.isArray(n.disabled) && e.inArray(t, n.disabled) !== -1) r = !0;
            this._superApply(arguments), r && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
        },
        disable: function (t) {
            var n = this.options,
                r;
            if (t && n.disabled === !1 || e.isArray(n.disabled) && e.inArray(t, n.disabled) === -1) r = !0;
            this._superApply(arguments), r && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        add: function (n, r, i) {
            i === t && (i = this.anchors.length);
            var s, o, u = this.options,
                a = e(u.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, r)),
                f = n.indexOf("#") ? this._tabId(a) : n.replace("#", "");
            return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), a.attr("aria-controls", f), s = i >= this.tabs.length, o = this.element.find("#" + f), o.length || (o = this._createPanel(f), s ? i > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[i])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), s ? a.appendTo(this.tablist) : a.insertBefore(this.tabs[i]), u.disabled = e.map(u.disabled, function (e) {
                return e >= i ? ++e : e
            }), this.refresh(), this.tabs.length === 1 && u.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.tabs.eq(t).remove(),
                i = this._getPanelForTab(r).remove();
            return r.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function (e) {
                return e !== t
            }), function (e) {
                return e >= t ? --e : e
            }), this.refresh(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        length: function () {
            return this.anchors.length
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            idPrefix: "ui-tabs-"
        },
        _tabId: function (t) {
            var n = t.is("li") ? t.find("a[href]") : t;
            return n = n[0], e(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            panelTemplate: "<div></div>"
        },
        _createPanel: function (t) {
            return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        _create: function () {
            var e = this.options;
            e.active === null && e.selected !== t && (e.active = e.selected === -1 ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
        },
        _setOption: function (e, t) {
            if (e !== "selected") return this._super(e, t);
            var n = this.options;
            this._super("active", t === -1 ? !1 : t), n.selected = n.active, n.selected === !1 && (n.selected = -1)
        },
        _eventHandler: function () {
            this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            show: null,
            select: null
        },
        _create: function () {
            this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
        },
        _trigger: function (e, t, n) {
            var r, i, s = this._superApply(arguments);
            return s ? (e === "beforeActivate" ? (r = n.newTab.length ? n.newTab : n.oldTab, i = n.newPanel.length ? n.newPanel : n.oldPanel, s = this._super("select", t, {
                tab: r.find(".ui-tabs-anchor")[0],
                panel: i[0],
                index: r.closest("li").index()
            })) : e === "activate" && n.newTab.length && (s = this._super("show", t, {
                tab: n.newTab.find(".ui-tabs-anchor")[0],
                panel: n.newPanel[0],
                index: n.newTab.closest("li").index()
            })), s) : !1
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        select: function (e) {
            e = this._getIndex(e);
            if (e === -1) {
                if (!this.options.collapsible || this.options.selected === -1) return;
                e = this.options.selected
            }
            this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
        }
    }), function () {
        var t = 0;
        e.widget("ui.tabs", e.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function () {
                var e = this.options,
                    t;
                e.active == null && e.cookie && (t = parseInt(this._cookie(), 10), t === -1 && (t = !1), e.active = t), this._super()
            },
            _cookie: function (n) {
                var r = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
                return arguments.length && (r.push(n === !1 ? -1 : n), r.push(this.options.cookie)), e.cookie.apply(null, r)
            },
            _refresh: function () {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _eventHandler: function () {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _destroy: function () {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
            }
        })
    }(), e.widget("ui.tabs", e.ui.tabs, {
        _trigger: function (t, n, r) {
            var i = e.extend({}, r);
            return t === "load" && (i.panel = i.panel[0], i.tab = i.tab.find(".ui-tabs-anchor")[0]), this._super(t, n, i)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            fx: null
        },
        _getFx: function () {
            var t, n, r = this.options.fx;
            return r && (e.isArray(r) ? (t = r[0], n = r[1]) : t = n = r), r ? {
                show: n,
                hide: t
            } : null
        },
        _toggle: function (e, t) {
            function o() {
                n.running = !1, n._trigger("activate", e, t)
            }

            function u() {
                t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && s.show ? r.animate(s.show, s.show.duration, function () {
                    o()
                }) : (r.show(), o())
            }
            var n = this,
                r = t.newPanel,
                i = t.oldPanel,
                s = this._getFx();
            if (!s) return this._super(e, t);
            n.running = !0, i.length && s.hide ? i.animate(s.hide, s.hide.duration, function () {
                t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
            }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i.hide(), u())
        }
    }))
}(jQuery),
function (e) {
    function n(t, n) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
    }

    function r(t) {
        var n = t.data("ui-tooltip-id"),
            r = (t.attr("aria-describedby") || "").split(/\s+/),
            i = e.inArray(n, r);
        i !== -1 && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
    }
    var t = 0;
    e.widget("ui.tooltip", {
        version: "1.9.2",
        options: {
            content: function () {
                return e(this).attr("title")
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function (t, n) {
            var r = this;
            if (t === "disabled") {
                this[n ? "_disable" : "_enable"](), this.options[t] = n;
                return
            }
            this._super(t, n), t === "content" && e.each(this.tooltips, function (e, t) {
                r._updateContent(t)
            })
        },
        _disable: function () {
            var t = this;
            e.each(this.tooltips, function (n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0)
            }), this.element.find(this.options.items).andSelf().each(function () {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).andSelf().each(function () {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function (t) {
            var n = this,
                r = e(t ? t.target : this.element).closest(this.options.items);
            if (!r.length || r.data("ui-tooltip-id")) return;
            r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && t.type === "mouseover" && r.parents().each(function () {
                var t = e(this),
                    r;
                t.data("ui-tooltip-open") && (r = e.Event("blur"), r.target = r.currentTarget = this, n.close(r, !0)), t.attr("title") && (t.uniqueId(), n.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._updateContent(r, t)
        },
        _updateContent: function (e, t) {
            var n, r = this.options.content,
                i = this,
                s = t ? t.type : null;
            if (typeof r == "string") return this._open(t, e, r);
            n = r.call(e[0], function (n) {
                if (!e.data("ui-tooltip-open")) return;
                i._delay(function () {
                    t && (t.type = s), this._open(t, e, n)
                })
            }), n && this._open(t, e, n)
        },
        _open: function (t, r, i) {
            function f(e) {
                a.of = e;
                if (s.is(":hidden")) return;
                s.position(a)
            }
            var s, o, u, a = e.extend({}, this.options.position);
            if (!i) return;
            s = this._find(r);
            if (s.length) {
                s.find(".ui-tooltip-content").html(i);
                return
            }
            r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")), s = this._tooltip(r), n(r, s.attr("id")), s.find(".ui-tooltip-content").html(i), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: f
            }), f(t)) : s.position(e.extend({
                of: r
            }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = setInterval(function () {
                s.is(":visible") && (f(a.of), clearInterval(u))
            }, e.fx.interval)), this._trigger("open", t, {
                tooltip: s
            }), o = {
                keyup: function (t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var n = e.Event(t);
                        n.currentTarget = r[0], this.close(n, !0)
                    }
                },
                remove: function () {
                    this._removeTooltip(s)
                }
            };
            if (!t || t.type === "mouseover") o.mouseleave = "close";
            if (!t || t.type === "focusin") o.focusout = "close";
            this._on(!0, r, o)
        },
        close: function (t) {
            var n = this,
                i = e(t ? t.currentTarget : this.element),
                s = this._find(i);
            if (this.closing) return;
            i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), s.stop(!0), this._hide(s, this.options.hide, function () {
                n._removeTooltip(e(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && e.each(this.parents, function (t, r) {
                e(r.element).attr("title", r.title), delete n.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: s
            }), this.closing = !1
        },
        _tooltip: function (n) {
            var r = "ui-tooltip-" + t++,
                i = e("<div>").attr({
                    id: r,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), e.fn.bgiframe && i.bgiframe(), this.tooltips[r] = n, i
        },
        _find: function (t) {
            var n = t.data("ui-tooltip-id");
            return n ? e("#" + n) : e()
        },
        _removeTooltip: function (e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function () {
            var t = this;
            e.each(this.tooltips, function (n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery),
function (e) {
    function t() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    e.fn.ajaxSubmit = function (n) {
        function g() {
            function m() {
                var t = c.attr("target"),
                    n = c.attr("action");
                r.setAttribute("target", s), r.getAttribute("method") != "POST" && r.setAttribute("method", "POST"), r.getAttribute("action") != i.url && r.setAttribute("action", i.url), i.skipEncodingOverride || c.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), i.timeout && setTimeout(function () {
                    p = !0, w()
                }, i.timeout);
                var o = [];
                try {
                    if (i.extraData)
                        for (var a in i.extraData) o.push(e('<input type="hidden" name="' + a + '" value="' + i.extraData[a] + '" />').appendTo(r)[0]);
                    u.appendTo("body"), u.data("form-plugin-onload", w), r.submit()
                } finally {
                    r.setAttribute("action", n), t ? r.setAttribute("target", t) : c.removeAttr("target"), e(o).remove()
                }
            }

            function w() {
                if (h) return;
                u.removeData("form-plugin-onload");
                var n = !0;
                try {
                    if (p) throw "timeout";
                    y = a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document;
                    var r = i.dataType == "xml" || y.XMLDocument || e.isXMLDoc(y);
                    t("isXml=" + r);
                    if (!r && window.opera && (y.body == null || y.body.innerHTML == "") && --b) {
                        t("requeing onLoad callback, DOM not available"), setTimeout(w, 250);
                        return
                    }
                    h = !0, f.responseText = y.documentElement ? y.documentElement.innerHTML : null, f.responseXML = y.XMLDocument ? y.XMLDocument : y, f.getResponseHeader = function (e) {
                        var t = {
                            "content-type": i.dataType
                        };
                        return t[e]
                    };
                    var s = /(json|script)/.test(i.dataType);
                    if (s || i.textarea) {
                        var o = y.getElementsByTagName("textarea")[0];
                        if (o) f.responseText = o.value;
                        else if (s) {
                            var c = y.getElementsByTagName("pre")[0],
                                d = y.getElementsByTagName("body")[0];
                            c ? f.responseText = c.textContent : d && (f.responseText = d.innerHTML)
                        }
                    } else i.dataType == "xml" && !f.responseXML && f.responseText != null && (f.responseXML = E(f.responseText));
                    g = e.httpData(f, i.dataType)
                } catch (v) {
                    t("error caught:", v), n = !1, f.error = v, e.handleError(i, f, "error", v)
                }
                f.aborted && (t("upload aborted"), n = !1), n && (i.success.call(i.context, g, "success", f), l && e.event.trigger("ajaxSuccess", [f, i])), l && e.event.trigger("ajaxComplete", [f, i]), l && !--e.active && e.event.trigger("ajaxStop"), i.complete && i.complete.call(i.context, f, n ? "success" : "error"), setTimeout(function () {
                    u.removeData("form-plugin-onload"), u.remove(), f.responseXML = null
                }, 100)
            }

            function E(e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && t.documentElement.tagName != "parsererror" ? t : null
            }
            var r = c[0];
            if (e(":input[name=submit],:input[id=submit]", r).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            var i = e.extend(!0, {}, e.ajaxSettings, n);
            i.context = i.context || i;
            var s = "jqFormIO" + (new Date).getTime(),
                o = "_" + s;
            window[o] = function () {
                var e = u.data("form-plugin-onload");
                if (e) {
                    e(), window[o] = undefined;
                    try {
                        delete window[o]
                    } catch (t) {}
                }
            };
            var u = e('<iframe id="' + s + '" name="' + s + '" src="' + i.iframeSrc + '" onload="window[\'_\'+this.id]()" />'),
                a = u[0];
            u.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            });
            var f = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {},
                getResponseHeader: function () {},
                setRequestHeader: function () {},
                abort: function () {
                    this.aborted = 1, u.attr("src", i.iframeSrc)
                }
            }, l = i.global;
            l && !(e.active++) && e.event.trigger("ajaxStart"), l && e.event.trigger("ajaxSend", [f, i]);
            if (i.beforeSend && i.beforeSend.call(i.context, f, i) === !1) {
                i.global && e.active--;
                return
            }
            if (f.aborted) return;
            var h = !1,
                p = 0,
                d = r.clk;
            if (d) {
                var v = d.name;
                v && !d.disabled && (i.extraData = i.extraData || {}, i.extraData[v] = d.value, d.type == "image" && (i.extraData[v + ".x"] = r.clk_x, i.extraData[v + ".y"] = r.clk_y))
            }
            i.forceSync ? m() : setTimeout(m, 10);
            var g, y, b = 50
        }
        if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
        typeof n == "function" && (n = {
            success: n
        });
        var r = this.attr("action"),
            i = typeof r == "string" ? e.trim(r) : "";
        i && (i = (i.match(/^([^#]+)/) || [])[1]), i = i || window.location.href || "", n = e.extend(!0, {
            url: i,
            type: this.attr("method") || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, n);
        var s = {};
        this.trigger("form-pre-serialize", [this, n, s]);
        if (s.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (n.beforeSerialize && n.beforeSerialize(this, n) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var o, u, a = this.formToArray(n.semantic);
        if (n.data) {
            n.extraData = n.data;
            for (o in n.data)
                if (n.data[o] instanceof Array)
                    for (var f in n.data[o]) a.push({
                        name: o,
                        value: n.data[o][f]
                    });
                else u = n.data[o], u = e.isFunction(u) ? u() : u, a.push({
                    name: o,
                    value: u
                })
        }
        if (n.beforeSubmit && n.beforeSubmit(a, this, n) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        this.trigger("form-submit-validate", [a, this, n, s]);
        if (s.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var l = e.param(a);
        n.type.toUpperCase() == "GET" ? (n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + l, n.data = null) : n.data = l;
        var c = this,
            h = [];
        n.resetForm && h.push(function () {
            c.resetForm()
        }), n.clearForm && h.push(function () {
            c.clearForm()
        });
        if (!n.dataType && n.target) {
            var p = n.success || function () {};
            h.push(function (t) {
                var r = n.replaceTarget ? "replaceWith" : "html";
                e(n.target)[r](t).each(p, arguments)
            })
        } else n.success && h.push(n.success);
        n.success = function (e, t, r) {
            var i = n.context || n;
            for (var s = 0, o = h.length; s < o; s++) h[s].apply(i, [e, t, r || c, c])
        };
        var d = e("input:file", this).length > 0,
            v = "multipart/form-data",
            m = c.attr("enctype") == v || c.attr("encoding") == v;
        return n.iframe !== !1 && (d || n.iframe || m) ? n.closeKeepAlive ? e.get(n.closeKeepAlive, g) : g() : e.ajax(n), this.trigger("form-submit-notify", [this, n]), this
    }, e.fn.ajaxForm = function (n) {
        if (this.length === 0) {
            var r = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), e(function () {
                e(r.s, r.c).ajaxForm(n)
            }), this) : (t("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function (t) {
            t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(n))
        }).bind("click.form-plugin", function (t) {
            var n = t.target,
                r = e(n);
            if (!r.is(":submit,input:image")) {
                var i = r.closest(":submit");
                if (i.length == 0) return;
                n = i[0]
            }
            var s = this;
            s.clk = n;
            if (n.type == "image")
                if (t.offsetX != undefined) s.clk_x = t.offsetX, s.clk_y = t.offsetY;
                else if (typeof e.fn.offset == "function") {
                var o = r.offset();
                s.clk_x = t.pageX - o.left, s.clk_y = t.pageY - o.top
            } else s.clk_x = t.pageX - n.offsetLeft, s.clk_y = t.pageY - n.offsetTop;
            setTimeout(function () {
                s.clk = s.clk_x = s.clk_y = null
            }, 100)
        })
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t) {
        var n = [];
        if (this.length === 0) return n;
        var r = this[0],
            i = t ? r.getElementsByTagName("*") : r.elements;
        if (!i) return n;
        var s, o, u, a, f, l, c;
        for (s = 0, l = i.length; s < l; s++) {
            f = i[s], u = f.name;
            if (!u) continue;
            if (t && r.clk && f.type == "image") {
                !f.disabled && r.clk == f && (n.push({
                    name: u,
                    value: e(f).val()
                }), n.push({
                    name: u + ".x",
                    value: r.clk_x
                }, {
                    name: u + ".y",
                    value: r.clk_y
                }));
                continue
            }
            a = e.fieldValue(f, !0);
            if (a && a.constructor == Array)
                for (o = 0, c = a.length; o < c; o++) n.push({
                    name: u,
                    value: a[o]
                });
            else a !== null && typeof a != "undefined" && n.push({
                name: u,
                value: a
            })
        }
        if (!t && r.clk) {
            var h = e(r.clk),
                p = h[0];
            u = p.name, u && !p.disabled && p.type == "image" && (n.push({
                name: u,
                value: h.val()
            }), n.push({
                name: u + ".x",
                value: r.clk_x
            }, {
                name: u + ".y",
                value: r.clk_y
            }))
        }
        return n
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var r = this.name;
            if (!r) return;
            var i = e.fieldValue(this, t);
            if (i && i.constructor == Array)
                for (var s = 0, o = i.length; s < o; s++) n.push({
                    name: r,
                    value: i[s]
                });
            else i !== null && typeof i != "undefined" && n.push({
                name: this.name,
                value: i
            })
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], r = 0, i = this.length; r < i; r++) {
            var s = this[r],
                o = e.fieldValue(s, t);
            if (o === null || typeof o == "undefined" || o.constructor == Array && !o.length) continue;
            o.constructor == Array ? e.merge(n, o) : n.push(o)
        }
        return n
    }, e.fieldValue = function (t, n) {
        var r = t.name,
            i = t.type,
            s = t.tagName.toLowerCase();
        n === undefined && (n = !0);
        if (n && (!r || t.disabled || i == "reset" || i == "button" || (i == "checkbox" || i == "radio") && !t.checked || (i == "submit" || i == "image") && t.form && t.form.clk != t || s == "select" && t.selectedIndex == -1)) return null;
        if (s == "select") {
            var o = t.selectedIndex;
            if (o < 0) return null;
            var u = [],
                a = t.options,
                f = i == "select-one",
                l = f ? o + 1 : a.length;
            for (var c = f ? o : 0; c < l; c++) {
                var h = a[c];
                if (h.selected) {
                    var p = h.value;
                    p || (p = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value);
                    if (f) return p;
                    u.push(p)
                }
            }
            return u
        }
        return e(t).val()
    }, e.fn.clearForm = function () {
        return this.each(function () {
            e("input,select,textarea", this).clearFields()
        })
    }, e.fn.clearFields = e.fn.clearInputs = function () {
        return this.each(function () {
            var e = this.type,
                t = this.tagName.toLowerCase();
            e == "text" || e == "password" || t == "textarea" ? this.value = "" : e == "checkbox" || e == "radio" ? this.checked = !1 : t == "select" && (this.selectedIndex = -1)
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return e === undefined && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return t === undefined && (t = !0), this.each(function () {
            var n = this.type;
            if (n == "checkbox" || n == "radio") this.checked = t;
            else if (this.tagName.toLowerCase() == "option") {
                var r = e(this).parent("select");
                t && r[0] && r[0].type == "select-one" && r.find("option").selected(!1), this.selected = t
            }
        })
    }
}(jQuery),
function (e) {
    e.fn.pjax = function (t, n) {
        n ? n.container = t : n = e.isPlainObject(t) ? t : {
            container: t
        };
        if (n.container && typeof n.container != "string") throw "pjax container must be a string selector!";
        return this.live("click", function (t) {
            if (t.which > 1 || t.metaKey) return !0;
            var r = {
                url: this.href,
                container: e(this).attr("data-pjax"),
                clickedElement: e(this),
                fragment: null
            };
            e.pjax(e.extend({}, r, n)), t.preventDefault()
        })
    };
    var t = e.pjax = function (n) {
        var r = e(n.container),
            i = n.success || e.noop;
        delete n.success;
        if (typeof n.container != "string") throw "pjax container must be a string selector!";
        n = e.extend(!0, {}, t.defaults, n), e.isFunction(n.url) && (n.url = n.url()), n.context = r, n.success = function (r) {
            if (n.fragment) {
                var s = e(r).find(n.fragment);
                if (!s.length) return window.location = n.url;
                r = s.children()
            } else if (!e.trim(r) || /<html/i.test(r)) return window.location = n.url;
            this.html(r);
            var o = document.title,
                u = e.trim(this.find("title").remove().text());
            u && (document.title = u), !u && n.fragment && (u = s.attr("title") || s.data("title"));
            var a = {
                pjax: n.container,
                fragment: n.fragment,
                timeout: n.timeout
            }, f = e.param(n.data);
            f != "_pjax=true" && (a.url = n.url + (/\?/.test(n.url) ? "&" : "?") + f), n.replace ? window.history.replaceState(a, document.title, n.url) : n.push && (t.active || (window.history.replaceState(e.extend({}, a, {
                url: null
            }), o), t.active = !0), window.history.pushState(a, document.title, n.url)), (n.replace || n.push) && window._gaq && _gaq.push(["_trackPageview"]);
            var l = window.location.hash.toString();
            l !== "" && (window.location.href = l), i.apply(this, arguments)
        };
        var s = t.xhr;
        return s && s.readyState < 4 && (s.onreadystatechange = e.noop, s.abort()), t.options = n, t.xhr = e.ajax(n), e(document).trigger("pjax", [t.xhr, n]), t.xhr
    };
    t.defaults = {
        timeout: 650,
        push: !0,
        replace: !1,
        data: {
            _pjax: !0
        },
        type: "GET",
        dataType: "html",
        beforeSend: function (e) {
            this.trigger("pjax:start", [e, t.options]), this.trigger("start.pjax", [e, t.options]), e.setRequestHeader("X-PJAX", "true")
        },
        error: function (e, n, r) {
            n !== "abort" && (window.location = t.options.url)
        },
        complete: function (e) {
            this.trigger("pjax:end", [e, t.options]), this.trigger("end.pjax", [e, t.options])
        }
    };
    var n = "state" in window.history,
        r = location.href;
    e(window).bind("popstate", function (t) {
        var i = !n && location.href == r;
        n = !0;
        if (i) return;
        var s = t.state;
        if (s && s.pjax) {
            var o = s.pjax;
            e(o + "").length ? e.pjax({
                url: s.url || location.href,
                fragment: s.fragment,
                container: o,
                push: !1,
                timeout: s.timeout
            }) : window.location = location.href
        }
    }), e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/(iPod|iPhone|iPad|WebApps\/.+CFNetwork)/), e.support.pjax || (e.pjax = function (t) {
        window.location = e.isFunction(t.url) ? t.url() : t.url
    }, e.fn.pjax = function () {
        return this
    })
}(jQuery),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery), window.Modernizr = function (e, t, n) {
    function r(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function i(e, t) {
        return typeof e === t
    }

    function s(e, t) {
        return o(g.join(e + ";") + (t || ""))
    }

    function o(e) {
        d.cssText = e
    }
    var u = "2.0.6",
        a = {}, f = !0,
        l = t.documentElement,
        c = t.head || t.getElementsByTagName("head")[0],
        h = "modernizr",
        p = t.createElement(h),
        d = p.style,
        v, m = Object.prototype.toString,
        g = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        y = {}, b = {}, w = {}, E = [],
        S = function (e, n, r, i) {
            var s, o, u, a = t.createElement("div");
            if (parseInt(r, 10))
                while (r--) u = t.createElement("div"), u.id = i ? i[r] : h + (r + 1), a.appendChild(u);
            return s = ["&shy;", "<style>", e, "</style>"].join(""), a.id = h, a.innerHTML += s, l.appendChild(a), o = n(a, e), a.parentNode.removeChild(a), !! o
        }, x = function (t) {
            if (e.matchMedia) return matchMedia(t).matches;
            var n;
            return S("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
                n = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute"
            }), n
        }, T, N = {}.hasOwnProperty,
        C;
    !i(N, n) && !i(N.call, n) ? C = function (e, t) {
        return N.call(e, t)
    } : C = function (e, t) {
        return t in e && i(e.constructor.prototype[t], n)
    };
    var k = function (n, r) {
        var i = n.join(""),
            s = r.length;
        S(i, function (n, r) {
            var i = t.styleSheets[t.styleSheets.length - 1],
                o = i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "",
                u = n.childNodes,
                f = {};
            while (s--) f[u[s].id] = u[s];
            a.touch = "ontouchstart" in e || f.touch.offsetTop === 9
        }, s, r)
    }([, ["@media (", g.join("touch-enabled),("), h, ")", "{#touch{top:9px;position:absolute}}"].join("")], [, "touch"]);
    y.touch = function () {
        return a.touch
    };
    for (var L in y) C(y, L) && (T = L.toLowerCase(), a[T] = y[L](), E.push((a[T] ? "" : "no-") + T));
    return o(""), p = v = null, e.attachEvent && function () {
        var e = t.createElement("div");
        return e.innerHTML = "<elem></elem>", e.childNodes.length !== 1
    }() && function (e, t) {
        function r(e) {
            var t = -1;
            while (++t < u) e.createElement(o[t])
        }
        e.iepp = e.iepp || {};
        var i = e.iepp,
            s = i.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            o = s.split("|"),
            u = o.length,
            a = new RegExp("(^|\\s)(" + s + ")", "gi"),
            f = new RegExp("<(/*)(" + s + ")", "gi"),
            l = /^\s*[\{\}]\s*$/,
            c = new RegExp("(^|[^\\n]*?\\s)(" + s + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
            h = t.createDocumentFragment(),
            p = t.documentElement,
            d = p.firstChild,
            v = t.createElement("body"),
            m = t.createElement("style"),
            g = /print|all/,
            y;
        i.getCSS = function (e, t) {
            if (e + "" === n) return "";
            var r = -1,
                s = e.length,
                o, u = [];
            while (++r < s) {
                o = e[r];
                if (o.disabled) continue;
                t = o.media || t, g.test(t) && u.push(i.getCSS(o.imports, t), o.cssText), t = "all"
            }
            return u.join("")
        }, i.parseCSS = function (e) {
            var t = [],
                n;
            while ((n = c.exec(e)) != null) t.push(((l.exec(n[1]) ? "\n" : n[1]) + n[2] + n[3]).replace(a, "$1.iepp_$2") + n[4]);
            return t.join("\n")
        }, i.writeHTML = function () {
            var e = -1;
            y = y || t.body;
            while (++e < u) {
                var n = t.getElementsByTagName(o[e]),
                    r = n.length,
                    i = -1;
                while (++i < r) n[i].className.indexOf("iepp_") < 0 && (n[i].className += " iepp_" + o[e])
            }
            h.appendChild(y), p.appendChild(v), v.className = y.className, v.id = y.id, v.innerHTML = y.innerHTML.replace(f, "<$1font")
        }, i._beforePrint = function () {
            m.styleSheet.cssText = i.parseCSS(i.getCSS(t.styleSheets, "all")), i.writeHTML()
        }, i.restoreHTML = function () {
            v.innerHTML = "", p.removeChild(v), p.appendChild(y)
        }, i._afterPrint = function () {
            i.restoreHTML(), m.styleSheet.cssText = ""
        }, r(t), r(h), i.disablePP || (d.insertBefore(m, d.firstChild), m.media = "print", m.className = "iepp-printshim", e.attachEvent("onbeforeprint", i._beforePrint), e.attachEvent("onafterprint", i._afterPrint))
    }(e, t), a._version = u, a._prefixes = g, a.mq = x, a.testStyles = S, l.className = l.className.replace(/\bno-js\b/, "") + (f ? " js " + E.join(" ") : ""), a
}(this, this.document),
function () {
    function k(e, t, n) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if (e.isEqual && x.isFunction(e.isEqual)) return e.isEqual(t);
        if (t.isEqual && x.isFunction(t.isEqual)) return t.isEqual(e);
        var r = f.call(e);
        if (r != f.call(t)) return !1;
        switch (r) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var i = n.length;
        while (i--)
            if (n[i] == e) return !0;
        n.push(e);
        var s = 0,
            o = !0;
        if (r == "[object Array]") {
            s = e.length, o = s == t.length;
            if (o)
                while (s--)
                    if (!(o = s in e == s in t && k(e[s], t[s], n))) break
        } else {
            if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for (var u in e)
                if (l.call(e, u)) {
                    s++;
                    if (!(o = l.call(t, u) && k(e[u], t[u], n))) break
                }
            if (o) {
                for (u in t)
                    if (l.call(t, u) && !(s--)) break;
                o = !s
            }
        }
        return n.pop(), o
    }
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.slice,
        u = r.concat,
        a = r.unshift,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            return new A(e)
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : typeof define == "function" && define.amd ? define("underscore", function () {
        return x
    }) : e._ = x, x.VERSION = "1.2.3";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (i in e && t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (l.call(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = x.toArray(e).reverse();
        return r && !i && (t = x.bind(t, r)), i ? x.reduce(s, t, n, r) : x.reduce(s, t)
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return N(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (T(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, x.every = x.all = function (e, t, r) {
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), i)
    };
    var N = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    x.include = x.contains = function (e, t) {
        var n = !1;
        return e == null ? n : y && e.indexOf === y ? e.indexOf(t) != -1 : (n = N(e, function (e) {
            return e === t
        }), n)
    }, x.invoke = function (e, t) {
        var n = o.call(arguments, 2);
        return x.map(e, function (e) {
            return (t.call ? t || e : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e)) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e)) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t = [],
            n;
        return T(e, function (e, r, i) {
            r == 0 ? t[0] = e : (n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e)
        }), t
    }, x.sortBy = function (e, t, n) {
        return x.pluck(x.map(e, function (e, r, i) {
            return {
                value: e,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            return n < r ? -1 : n > r ? 1 : 0
        }), "value")
    }, x.groupBy = function (e, t) {
        var n = {}, r = x.isFunction(t) ? t : function (e) {
                return e[t]
            };
        return T(e, function (e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }, x.sortedIndex = function (e, t, n) {
        n || (n = x.identity);
        var r = 0,
            i = e.length;
        while (r < i) {
            var s = r + i >> 1;
            n(e[s]) < n(t) ? r = s + 1 : i = s
        }
        return r
    }, x.toArray = function (e) {
        return e ? e.toArray ? e.toArray() : x.isArray(e) ? o.call(e) : x.isArguments(e) ? o.call(e) : x.values(e) : []
    }, x.size = function (e) {
        return x.toArray(e).length
    }, x.first = x.head = function (e, t, n) {
        return t != null && !n ? o.call(e, 0, t) : e[0]
    }, x.initial = function (e, t, n) {
        return o.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, x.rest = x.tail = function (e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, function (e) {
            return !!e
        })
    }, x.flatten = function (e, t) {
        return x.reduce(e, function (e, n) {
            return x.isArray(n) ? e.concat(t ? n : x.flatten(n)) : (e[e.length] = n, e)
        }, [])
    }, x.without = function (e) {
        return x.difference(e, o.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n) {
        var r = n ? x.map(e, n) : e,
            i = [];
        return x.reduce(r, function (n, r, s) {
            if (0 == s || (t === !0 ? x.last(n) != r : !x.include(n, r))) n[n.length] = r, i[i.length] = e[s];
            return n
        }, []), i
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = x.intersect = function (e) {
        var t = o.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = x.flatten(o.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.include(t, e)
        })
    }, x.zip = function () {
        var e = o.call(arguments),
            t = x.max(x.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r, i;
        if (n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
        if (y && e.indexOf === y) return e.indexOf(t);
        for (r = 0, i = e.length; r < i; r++)
            if (r in e && e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t) {
        if (e == null) return -1;
        if (b && e.lastIndexOf === b) return e.lastIndexOf(t);
        var n = e.length;
        while (n--)
            if (n in e && e[n] === t) return n;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var C = function () {};
    x.bind = function (t, n) {
        var r, i;
        if (t.bind === S && S) return S.apply(t, o.call(arguments, 1));
        if (!x.isFunction(t)) throw new TypeError;
        return i = o.call(arguments, 2), r = function () {
            if (this instanceof r) {
                C.prototype = t.prototype;
                var e = new C,
                    s = t.apply(e, i.concat(o.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(o.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = o.call(arguments, 1);
        return t.length == 0 && (t = x.functions(e)), T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
        function () {
            var r = t.apply(this, arguments);
            return l.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(e, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(o.call(arguments, 1)))
    }, x.throttle = function (e, t) {
        var n, r, i, s, o, u = x.debounce(function () {
                o = s = !1
            }, t);
        return function () {
            n = this, r = arguments;
            var a = function () {
                i = null, o && e.apply(n, r), u()
            };
            i || (i = setTimeout(a, t)), s ? o = !0 : e.apply(n, r), u(), s = !0
        }
    }, x.debounce = function (e, t) {
        var n;
        return function () {
            var r = this,
                i = arguments,
                s = function () {
                    n = null, e.apply(r, i)
                };
            clearTimeout(n), n = setTimeout(s, t)
        }
    }, x.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments))
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = u.apply([e], arguments);
            return t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) l.call(e, n) && (t[t.length] = n);
        return t
    }, x.values = function (e) {
        return x.map(e, x.identity)
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(o.call(arguments, 1), function (t) {
            for (var n in t) t[n] !== void 0 && (e[n] = t[n])
        }), e
    }, x.defaults = function (e) {
        return T(o.call(arguments, 1), function (t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    }, x.isEqual = function (e, t) {
        return k(e, t, [])
    }, x.isEmpty = function (e) {
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (l.call(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType == 1
    }, x.isArray = w || function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, x.isArguments = function (e) {
        return f.call(e) == "[object Arguments]"
    }, x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !! l.call(e, "callee")
    }), x.isFunction = function (e) {
        return f.call(e) == "[object Function]"
    }, x.isString = function (e) {
        return f.call(e) == "[object String]"
    }, x.isNumber = function (e) {
        return f.call(e) == "[object Number]"
    }, x.isNaN = function (e) {
        return e !== e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isDate = function (e) {
        return f.call(e) == "[object Date]"
    }, x.isRegExp = function (e) {
        return f.call(e) == "[object RegExp]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    }, x.escape = function (e) {
        return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            M(t, x[t] = e[t])
        })
    };
    var L = 0;
    x.uniqueId = function (e) {
        var t = L++;
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }, x.template = function (e, t) {
        var n = x.templateSettings,
            r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape, function (e, t) {
                return "',_.escape(" + t.replace(/\\'/g, "'") + "),'"
            }).replace(n.interpolate, function (e, t) {
                return "'," + t.replace(/\\'/g, "'") + ",'"
            }).replace(n.evaluate || null, function (e, t) {
                return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            i = new Function("obj", "_", r);
        return t ? i(t, x) : function (e) {
            return i.call(this, e, x)
        }
    };
    var A = function (e) {
        this._wrapped = e
    };
    x.prototype = A.prototype;
    var O = function (e, t) {
        return t ? x(e).chain() : e
    }, M = function (e, t) {
            A.prototype[e] = function () {
                var e = o.call(arguments);
                return a.call(e, this._wrapped), O(t.apply(x, e), this._chain)
            }
        };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        A.prototype[e] = function () {
            return t.apply(this._wrapped, arguments), O(this._wrapped, this._chain)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        A.prototype[e] = function () {
            return O(t.apply(this._wrapped, arguments), this._chain)
        }
    }), A.prototype.chain = function () {
        return this._chain = !0, this
    }, A.prototype.value = function () {
        return this._wrapped
    }
}.call(this),
function (e) {
    function t(e, t) {
        return typeof e == "function" ? e.call(t) : e
    }

    function n(e) {
        while (e = e.parentNode)
            if (e == document) return !0;
        return !1
    }

    function r(t, n) {
        this.$element = e(t), this.options = n, this.enabled = !0, this.fixTitle()
    }
    r.prototype = {
        show: function () {
            var n = this.getTitle();
            if (n && this.enabled) {
                var r = this.tip();
                r.find(".tipsy-inner")[this.options.html ? "html" : "text"](n), r[0].className = "tipsy", r.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var i = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    s = r[0].offsetWidth,
                    o = r[0].offsetHeight,
                    u = t(this.options.gravity, this.$element[0]),
                    a;
                switch (u.charAt(0)) {
                case "n":
                    a = {
                        top: i.top + i.height + this.options.offset,
                        left: i.left + i.width / 2 - s / 2
                    };
                    break;
                case "s":
                    a = {
                        top: i.top - o - this.options.offset,
                        left: i.left + i.width / 2 - s / 2
                    };
                    break;
                case "e":
                    a = {
                        top: i.top + i.height / 2 - o / 2,
                        left: i.left - s - this.options.offset
                    };
                    break;
                case "w":
                    a = {
                        top: i.top + i.height / 2 - o / 2,
                        left: i.left + i.width + this.options.offset
                    }
                }
                u.length == 2 && (u.charAt(1) == "w" ? a.left = i.left + i.width / 2 - 15 : a.left = i.left + i.width / 2 - s + 15), r.css(a).addClass("tipsy-" + u), r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + u.charAt(0), this.options.className && r.addClass(t(this.options.className, this.$element[0])), this.options.fade ? r.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : r.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                e(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("original-title") != "string") && e.attr("original-title", e.attr("title") || "").removeAttr("title")
        },
        getTitle: function () {
            var e, t = this.$element,
                n = this.options;
            this.fixTitle();
            var e, n = this.options;
            return typeof n.title == "string" ? e = t.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (e = n.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || n.fallback
        },
        tip: function () {
            return this.$tip || (this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    }, e.fn.tipsy = function (t) {
        function i(n) {
            var i = e.data(n, "tipsy");
            return i || (i = new r(n, e.fn.tipsy.elementOptions(n, t)), e.data(n, "tipsy", i)), i
        }

        function s() {
            var e = i(this);
            e.hoverState = "in", t.delayIn == 0 ? e.show() : (e.fixTitle(), setTimeout(function () {
                e.hoverState == "in" && e.show()
            }, t.delayIn))
        }

        function o() {
            var e = i(this);
            e.hoverState = "out", t.delayOut == 0 ? e.hide() : setTimeout(function () {
                e.hoverState == "out" && e.hide()
            }, t.delayOut)
        }
        if (t === !0) return this.data("tipsy");
        if (typeof t == "string") {
            var n = this.data("tipsy");
            return n && n[t](), this
        }
        t = e.extend({}, e.fn.tipsy.defaults, t), t.live || this.each(function () {
            i(this)
        });
        if (t.trigger != "manual") {
            var u = t.live ? "live" : "bind",
                a = t.trigger == "hover" ? "mouseenter" : "focus",
                f = t.trigger == "hover" ? "mouseleave" : "blur";
            this[u](a, s)[u](f, o)
        }
        return this
    }, e.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, e.fn.tipsy.revalidate = function () {
        e(".tipsy").each(function () {
            var t = e.data(this, "tipsy-pointee");
            (!t || !n(t)) && e(this).remove()
        })
    }, e.fn.tipsy.elementOptions = function (t, n) {
        return e.metadata ? e.extend({}, n, e(t).metadata()) : n
    }, e.fn.tipsy.autoNS = function () {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    }, e.fn.tipsy.autoWE = function () {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }, e.fn.tipsy.autoBounds = function (t, n) {
        return function () {
            var r = {
                ns: n[0],
                ew: n.length > 1 ? n[1] : !1
            }, i = e(document).scrollTop() + t,
                s = e(document).scrollLeft() + t,
                o = e(this);
            return o.offset().top < i && (r.ns = "n"), o.offset().left < s && (r.ew = "w"), e(window).width() + e(document).scrollLeft() - o.offset().left < t && (r.ew = "e"), e(window).height() + e(document).scrollTop() - o.offset().top < t && (r.ns = "s"), r.ns + (r.ew ? r.ew : "")
        }
    }
}(jQuery),
function () {
    var e, t, n, r, i, s;
    r = null, t = function () {
        return r != null ? r : $("#peek").data("request-id")
    }, s = function (e) {
        var n, r, i;
        i = $("#peek-results");
        for (n in e.data)
            for (r in e.data[n]) $("[data-defer-to=" + n + "-" + r + "]").text(e.data[n][r]);
        return $(document).trigger("peek:render", [t(), e])
    }, n = function () {
        return $("#peek .peek-tooltip, #peek .tooltip").each(function () {
            var e, t;
            return e = $(this), t = e.hasClass("rightwards") || e.hasClass("leftwards") ? $.fn.tipsy.autoWE : $.fn.tipsy.autoNS, e.tipsy({
                gravity: t
            })
        })
    }, i = function (e) {
        var t;
        if ($(e.target).is(":input")) return;
        if (e.keyCode === 96 && !e.metaKey) return t = $("#peek"), t.hasClass("disabled") ? (t.removeClass("disabled"), document.cookie = "peek=true; path=/") : (t.addClass("disabled"), document.cookie = "peek=false; path=/")
    }, e = function () {
        return $.ajax("/peek/results", {
            data: {
                request_id: t()
            },
            success: function (e, t, n) {
                return s(e)
            },
            error: function (e, t, n) {}
        })
    }, $(document).on("keypress", i), $(document).on("peek:update", n), $(document).on("peek:update", e), $(document).on("pjax:end", function (e, t, n) {
        return t != null && (r = t.getResponseHeader("X-Request-Id")), $(this).trigger("peek:update")
    }), $(document).on("page:change", function () {
        return $(this).trigger("peek:update")
    }), $(function () {
        return $(this).trigger("peek:update")
    })
}.call(this),
function () {
    var e, t, n, r;
    e = function () {
        function e(e) {
            var t, n, r, i;
            e == null && (e = {}), this.el = $("#peek-view-performance-bar .performance-bar");
            for (t in e) n = e[t], this[t] = n;
            (r = this.width) == null && (this.width = this.el.width()), (i = this.timing) == null && (this.timing = window.performance.timing)
        }
        return e.prototype.appInfo = null, e.prototype.width = null, e.formatTime = function (e) {
            return e >= 1e3 ? "" + (e / 1e3).toFixed(3) + "s" : "" + e.toFixed(0) + "ms"
        }, e.prototype.render = function (e) {
            var t, n;
            return e == null && (e = 0), this.el.empty(), this.addBar("frontend", "#90d35b", "domLoading", "domInteractive"), n = this.timing.responseEnd - this.timing.requestStart, e && e <= n ? (t = n - e, this.addBar("latency / receiving", "#f1faff", this.timing.requestStart + e, this.timing.requestStart + e + t), this.addBar("app", "#90afcf", this.timing.requestStart, this.timing.requestStart + e, this.appInfo)) : this.addBar("backend", "#c1d7ee", "requestStart", "responseEnd"), this.addBar("tcp / ssl", "#45688e", "connectStart", "connectEnd"), this.addBar("redirect", "#0c365e", "redirectStart", "redirectEnd"), this.addBar("dns", "#082541", "domainLookupStart", "domainLookupEnd"), this.el
        }, e.prototype.isLoaded = function () {
            return this.timing.domInteractive
        }, e.prototype.start = function () {
            return this.timing.navigationStart
        }, e.prototype.end = function () {
            return this.timing.domInteractive
        }, e.prototype.total = function () {
            return this.end() - this.start()
        }, e.prototype.addBar = function (t, n, r, i, s) {
            var o, u, a, f, l, c;
            typeof r == "string" && (r = this.timing[r]), typeof i == "string" && (i = this.timing[i]);
            if (r == null || i == null) return;
            return f = i - r, a = r - this.start(), u = this.mapH(a), c = this.mapH(f), l = "" + t + ": " + e.formatTime(f), o = $("<li></li>", {
                title: l,
                "class": "peek-tooltip"
            }), o.css({
                width: "" + c + "px",
                left: "" + u + "px",
                background: n
            }), o.tipsy({
                gravity: $.fn.tipsy.autoNS
            }), this.el.append(o)
        }, e.prototype.mapH = function (e) {
            return e * (this.width / this.total())
        }, e
    }(), n = function () {
        var t, n, i, s;
        return n = $("#peek-server_response_time"), s = Math.round(n.data("time") * 1e3), t = new e, t.render(s), i = $("<span>", {
            "class": "peek-tooltip",
            title: "Total navigation time for this page."
        }).text(e.formatTime(t.total())), i.tipsy({
            gravity: $.fn.tipsy.autoNS
        }), r(i)
    }, r = function (e) {
        return $("#serverstats").html(e)
    }, t = null, $(document).on("pjax:start page:fetch", function (e) {
        return t = e.timeStamp
    }), $(document).on("pjax:end page:change", function (n, i) {
        var s, o, u;
        return s = n.timeStamp, u = s - t, o = i ? parseInt(i.getResponseHeader("X-Runtime")) : 0, setTimeout(function () {
            var n, i, a, f;
            return i = (new Date).getTime(), n = new e({
                timing: {
                    requestStart: t,
                    responseEnd: s,
                    domLoading: s,
                    domInteractive: i
                },
                isLoaded: function () {
                    return !0
                },
                start: function () {
                    return t
                },
                end: function () {
                    return i
                }
            }), n.render(o), $.fn.pjax != null ? f = "PJAX" : f = "Turbolinks", a = $("<span>", {
                "class": "peek-tooltip",
                title: "" + f + " navigation time"
            }).text(e.formatTime(u)), a.tipsy({
                gravity: $.fn.tipsy.autoNS
            }), r(a), t = null
        }, 0)
    }), $(function () {
        return window.performance ? n() : $("#peek-view-performance-bar").remove()
    })
}.call(this),
function (e) {
    e.fn.editable = function () {
        this.each(function () {
            e(this).click(function () {
                var t = e(this),
                    n = t.parent().find("form"),
                    r = n.find("input[type=text]:first");
                t.hide(), n.show(), r.focus(), r.blur(function () {
                    n.hide(), t.show()
                })
            })
        })
    }
}(jQuery),
function () {
    var e = [].slice;
    this.Events = {
        on: function (e, t) {
            var n, r, i, s, o;
            r = e.split(" "), n = this.hasOwnProperty("_callbacks") && this._callbacks || (this._callbacks = {});
            for (s = 0, o = r.length; s < o; s++) i = r[s], n[i] || (n[i] = []), n[i].push(t);
            return this
        },
        one: function (e, t) {
            return this.on(e, function () {
                return this.off(e, arguments.callee), t.apply(this, arguments)
            })
        },
        trigger: function () {
            var t, n, r, i, s, o, u;
            t = 1 <= arguments.length ? e.call(arguments, 0) : [], r = t.shift(), i = this.hasOwnProperty("_callbacks") && ((u = this._callbacks) != null ? u[r] : void 0);
            if (!i) return !0;
            for (s = 0, o = i.length; s < o; s++) {
                n = i[s];
                if (n.apply(this, t) === !1) return !1
            }
            return !0
        },
        off: function (e, t) {
            var n, r, i, s, o, u;
            if (!e) return this._callbacks = {}, this;
            i = (u = this._callbacks) != null ? u[e] : void 0;
            if (!i) return this;
            if (!t) return delete this._callbacks[e], this;
            for (r = s = 0, o = i.length; s < o; r = ++s) {
                n = i[r];
                if (n !== t) continue;
                i = i.slice(), i.splice(r, 1), this._callbacks[e] = i;
                break
            }
            return this
        },
        extend: function (e) {
            var t, n;
            for (n in this) t = this[n], n !== "extend" && (e[n] = t);
            return e
        }
    }
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, t = [].slice;
    this.FrameChannel = function () {
        function n(t, n) {
            this.origin = t != null ? t : "*", this.target = n != null ? n : null, this.receive = e(this.receive, this);
            if (!this.supported) return;
            window.addEventListener("message", this.receive), this.pending = []
        }
        return Events.extend(n.prototype), n.prototype.supported = (window.postMessage && window.addEventListener) != null, n.prototype.receive = function (e) {
            var t;
            if (this.origin !== "*" && this.origin !== e.origin) return;
            return this.target || (this.target = e.source, this.sendPending()), t = JSON.parse(e.data), this.trigger.apply(this, t)
        }, n.prototype.send = function () {
            var e;
            e = 1 <= arguments.length ? t.call(arguments, 0) : [];
            if (!this.supported) return;
            return this.target ? this.target.postMessage(JSON.stringify(e), this.origin) : this.pending.push(e)
        }, n.prototype.sendPending = function () {
            var e, t;
            t = [];
            while (e = this.pending.shift()) t.push(this.send.apply(this, e));
            return t
        }, n.prototype.close = function () {
            if (!this.supported) return;
            return window.removeEventListener("message", this.receive)
        }, n
    }()
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            this.urls = e, this.cache = {}
        }
        return e.prototype.preload = function (e, t) {
            var n, r, i, s, o, u;
            e || (e = 0), t || (t = this.urls.length), o = this.urls.slice(e, e + t), u = [];
            for (i = 0, s = o.length; i < s; i++) n = o[i], u.push((r = this.cache)[n] || (r[n] = this.load(n)));
            return u
        }, e.prototype.load = function (e) {
            var t;
            return t = new Image, t.src = e, t
        }, e
    }(), this.ImagePreloader = e
}.call(this),
function (e) {
    function t(t) {
        if (e.facebox.settings.inited) return !0;
        e.facebox.settings.inited = !0, e(document).trigger("init.facebox"), i();
        var n = e.facebox.settings.imageTypes.join("|");
        e.facebox.settings.imageTypesRegexp = new RegExp(".(" + n + ")$", "i"), t && e.extend(e.facebox.settings, t), e("body").append(e.facebox.settings.faceboxHtml);
        var r = [new Image, new Image];
        r[0].src = e.facebox.settings.closeImage, r[1].src = e.facebox.settings.loadingImage, e("#facebox").find(".b:first, .bl").each(function () {
            r.push(new Image), r.slice(-1).src = e(this).css("background-image").replace(/url\((.+)\)/, "$1")
        }), e("#facebox .close").click(e.facebox.close).append(e.facebox.settings.closeHTML || '<img src="' + e.facebox.settings.closeImage + '" class="close_image" title="close">')
    }

    function n() {
        var e, t;
        return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), new Array(e, t)
    }

    function r() {
        var e;
        return self.innerHeight ? e = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight : document.body && (e = document.body.clientHeight), e
    }

    function i() {
        var t = e.facebox.settings;
        t.loadingImage = t.loading_image || t.loadingImage, t.closeImage = t.close_image || t.closeImage, t.imageTypes = t.image_types || t.imageTypes, t.faceboxHtml = t.facebox_html || t.faceboxHtml
    }

    function s(t, n) {
        if (t.match(/#/)) {
            var r = window.location.href.split("#")[0],
                i = t.replace(r, "");
            if (i == "#") return;
            e.facebox.reveal(e(i).html(), n)
        } else t.match(e.facebox.settings.imageTypesRegexp) ? o(t, n) : u(t, n)
    }

    function o(t, n) {
        var r = new Image;
        r.onload = function () {
            e.facebox.reveal('<div class="image"><img src="' + r.src + '" /></div>', n)
        }, r.src = t
    }

    function u(t, n) {
        e.get(t, function (t) {
            e.facebox.reveal(t, n)
        })
    }

    function a() {
        return e.facebox.settings.overlay == 0 || e.facebox.settings.opacity === null
    }

    function f() {
        if (a()) return;
        return e("#facebox_overlay").length == 0 && e("body").append('<div id="facebox_overlay" class="facebox_hide"></div>'), e("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity", e.facebox.settings.opacity).click(function () {
            e(document).trigger("close.facebox")
        }).fadeIn(200), !1
    }

    function l() {
        if (a()) return;
        return e("#facebox_overlay").fadeOut(200, function () {
            e("#facebox_overlay").removeClass("facebox_overlayBG"), e("#facebox_overlay").addClass("facebox_hide"), e("#facebox_overlay").remove()
        }), !1
    }
    e.facebox = function (t, n) {
        e.facebox.loading(), t.ajax ? u(t.ajax, n) : t.image ? o(t.image, n) : t.div ? s(t.div, n) : e.isFunction(t) ? t.call(e) : e.facebox.reveal(t, n)
    }, e.extend(e.facebox, {
        settings: {
            opacity: .2,
            overlay: !0,
            loadingImage: "/facebox/loading.gif",
            closeImage: "/facebox/closelabel.png",
            imageTypes: ["png", "jpg", "jpeg", "gif"],
            faceboxHtml: '    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"></a>       </div>     </div>'
        },
        loading: function () {
            t();
            if (e("#facebox .loading").length == 1) return !0;
            f(), e("#facebox .content").empty().append('<div class="loading"><img src="' + e.facebox.settings.loadingImage + '"/></div>'), e("#facebox").show().css({
                top: n()[1] + r() / 10,
                left: e(window).width() / 2 - e("#facebox .popup").outerWidth() / 2
            }), e(document).bind("keydown.facebox", function (t) {
                return t.keyCode == 27 && e.facebox.close(), !0
            }), e(document).trigger("loading.facebox")
        },
        reveal: function (t, n) {
            e(document).trigger("beforeReveal.facebox"), n && e("#facebox .content").addClass(n), e("#facebox .content").append(t), e("#facebox .loading").remove(), e("#facebox .popup").children().fadeIn("normal"), e("#facebox").css("left", e(window).width() / 2 - e("#facebox .popup").outerWidth() / 2), e(document).trigger("reveal.facebox").trigger("afterReveal.facebox")
        },
        close: function () {
            return e(document).trigger("close.facebox"), !1
        }
    }), e.fn.facebox = function (n) {
        function r() {
            e.facebox.loading(!0);
            var t = this.rel.match(/facebox\[?\.(\w+)\]?/);
            return t && (t = t[1]), s(this.href, t), !1
        }
        if (e(this).length == 0) return;
        return t(n), this.bind("click.facebox", r)
    }, e(document).bind("close.facebox", function () {
        e(document).unbind("keydown.facebox"), e("#facebox").fadeOut(function () {
            e("#facebox .content").removeClass().addClass("content"), e("#facebox .loading").remove(), e(document).trigger("afterClose.facebox")
        }), l()
    })
}(jQuery), $(".signed-out a[data-auth-required]").live("click", function (e) {
    return $("#sign_in").click(), $.rails.stopEverything(e)
}),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            var n = this;
            this.el = e, this.toggle = t(this.toggle, this), this.click = t(this.click, this), this.close = t(this.close, this), this.open = t(this.open, this), this.select = t(this.select, this), this.previous = t(this.previous, this), this.next = t(this.next, this), this.el.width(this.el.find(".menu-select-options").outerWidth()), this.el.attr("tabindex", 0), this.el.find("li").attr("tabindex", 0), this.el.find("input[type=radio]").attr("tabindex", -1), this.el.on("click", ".menu-select-target", this.open), this.el.on("keydown.space", this.toggle), this.el.on("keydown.down", this.next), this.el.on("keydown.up", this.previous), this.el.on("keydown.return", this.close), this.el.on("keydown.esc", this.close), this.el.on("click", "li", this.close), this.el.on("focus", "li", function (e) {
                return n.select(n.$(e.target))
            }), this.$(document).on("click", this.click), this.selected = this.el.find("input[type=radio]:checked").closest("li"), this.el.addClass("ready")
        }
        return e.prototype.$ = jQuery, e.prototype.next = function (e) {
            var t;
            return e.preventDefault(), t = this.selected.next("li"), t.length || (t = this.el.find("li:first")), this.select(t)
        }, e.prototype.previous = function (e) {
            var t;
            return e.preventDefault(), t = this.selected.prev("li"), t.length || (t = this.el.find("li:last")), this.select(t)
        }, e.prototype.select = function (e) {
            if (e[0] !== this.selected[0]) return this.selected = e, this.selected.find("input[type=radio]").attr("checked", !0), this.el.find(".menu-select-target").html(this.selected.html()), this.selected[0].focus()
        }, e.prototype.open = function (e) {
            if (this.isOpen) return;
            e && e.preventDefault(), this.el[0].focus(), this.el.addClass("active"), this.isOpen = !0;
            if (this.selected.length) return this.selected[0].focus(), this.el.find(".menu-select-options").css({
                top: -this.selected.position().top
            })
        }, e.prototype.close = function (e) {
            if (!this.isOpen) return;
            return e && e.preventDefault(), this.el[0].focus(), this.el.removeClass("active"), this.isOpen = !1
        }, e.prototype.click = function (e) {
            if (this.isOpen && this.clickedOutside(e)) return this.close(e)
        }, e.prototype.toggle = function (e) {
            return e.preventDefault(), this.isOpen ? this.close() : this.open()
        }, e.prototype.clickedOutside = function (e) {
            return this.$(e.target).closest(".menu-select")[0] !== this.el[0]
        }, e
    }(), jQuery(function (t) {
        return t(".menu-select").each(function () {
            return new e(t(this))
        })
    })
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.el = e, this.change = t(this.change, this), this.setupElements(), this.bindEvents(), this.change()
        }
        return e.prototype.setupElements = function () {
            return this.checkbox = this.el.find("input[type=checkbox]"), this.details = this.el.find(".details")
        }, e.prototype.bindEvents = function () {
            return this.checkbox.bind("change", this.change)
        }, e.prototype.change = function (e) {
            return this.checkbox[0].checked ? this.details.show() : this.details.hide()
        }, e
    }(), this.PublishDate = e
}.call(this),
function () {
    $(function () {
        var e;
        e = "form#upload_talk";
        if ($(e).length > 0) return window.talkForm = new TalkForm(e)
    })
}.call(this), $(function () {
    $("#change_password").hide(), $("#change_password_link").click(function () {
        return $(this).closest("li").hide(), $("#change_password").show(), !1
    }), $("#change_username .warning").hide(), $("#change_username input").bind("keyup", function () {
        $("#change_username .warning").show()
    })
}),
function () {
    $(document).on("click", ".ctab-label a", function (e) {
        var t, n, r;
        return r = $(e.target), t = r.attr("href"), n = r.closest(".chevron-tabs-container"), n.find(".ctab-label").removeClass("active"), r.closest(".ctab-label").addClass("active"), n.find(".ctab-content").removeClass("active"), n.find("#" + t).addClass("active"), e.preventDefault()
    })
}.call(this),
function () {
    jQuery(function (e) {
        return e(".datepicker").datepicker()
    })
}.call(this),
function () {
    $.extend($.facebox.settings, {
        loadingImage: "https://d2dfho4r6t7asi.cloudfront.net/assets/spinner-2f1b21f05d31a5f9d3c26bccc49c0295.gif",
        closeImage: "https://d2dfho4r6t7asi.cloudfront.net/assets/facebox/closelabel-3dfa4b40a4aa7871f4c21fdacd9c94ae.png"
    }), $(document).on("click", "a[rel*=facebox]", function (e) {
        return $.facebox({
            div: this.hash
        }), e.preventDefault()
    })
}.call(this),
function () {
    $(document).on("ajax:success", "a.feature", function () {
        return $("li.feature").hide(), $("li.unfeature").show()
    }), $(document).on("ajax:success", "a.unfeature", function () {
        return $("li.unfeature").hide(), $("li.feature").show()
    })
}.call(this),
function () {
    $(document).on("ajax:success", "form#feedback", function () {
        return $(document).trigger("close.facebox"), $("body header").after('<p class="flash notice">Thanks for your feedback!</p>')
    }), $(document).on("reveal.facebox", function (e) {
        var t;
        t = $("#facebox #feedback");
        if (t.is(":visible")) return $("input[name=subject]", t).focus()
    }), $(document).on("ajax:error", "form#feedback", function () {
        var e;
        return e = $("form#feedback textarea"), e.attr("placeholder", "Woops! You must have a message to send mail"), e.addClass("error")
    }), $(document).on("focus", "form#feedback textarea", function () {
        var e;
        return e = $("form#feedback textarea").removeClass("error")
    })
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.input = e, this.update = t(this.update, this), this.input.on("keyup", this.update), this.maxlength = +this.input.attr("maxlength"), this.create()
        }
        return e.setup = function (t) {
            return t("input[maxlength]").each(function () {
                return new e(t(this))
            })
        }, e.prototype.threshold = 100, e.prototype.create = function () {
            return this.input.wrap('<div class="countdown-wrapper" />'), this.counter = $('<span class="countdown" />'), this.input.after(this.counter)
        }, e.prototype.update = function () {
            var e;
            return e = this.maxlength - this.input.val().length, e <= this.threshold ? (this.counter.text(e), this.counter.addClass("final")) : this.counter.removeClass("final")
        }, e
    }(), jQuery(e.setup)
}.call(this), $(function () {
    $("div.preview").hover(function () {
        $(this).addClass("preview_hover")
    }, function () {
        $(this).removeClass("preview_hover")
    }), $("div.preview").click(function () {
        window.location.href = $(this).children("a").attr("href")
    }), $("#new_talk").live("submit", function () {
        if ($(this).closest(".uploaded").length == 0) return !1
    }), $("[data-processing-talk]").each(function () {
        var e = $(this),
            t = e.data("processing-talk"),
            n = e.data("status-url");
        (new ProcessingTalk(t, n)).poll()
    })
}),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    this.ProcessingTalk = function () {
        function t(t, n) {
            this.uuid = t, this.url = n, this.progress = e(this.progress, this), this.check = e(this.check, this), this.poll = e(this.poll, this)
        }
        return t.prototype.poll = function () {
            return setTimeout(this.check, 2e3)
        }, t.prototype.check = function () {
            return $.ajax({
                url: this.url,
                dataType: "json",
                success: this.progress
            })
        }, t.prototype.progress = function (e) {
            var t;
            e.html && $("[data-processing-talk=" + this.uuid + "]").html(e.html);
            if (e.state === "pending" || e.state === "processing") return this.poll();
            if (e.state === "processed" || e.state === "published") return t = $("#talk_" + this.uuid), $("#upload h1").text("The Slides"), $("#reupload").hide(), t.html('<div class="speakerdeck-embed" data-id="' + this.uuid + '" data-ratio="' + e.ratio + '"></div>').parent().addClass("slide_frame"), $(".slide_frame.processing").removeClass("processing"), SpeakerDeck.Embed.init()
        }, t
    }()
}.call(this),
function () {
    $(document).on("mousemove", "html:not(.touch) a.scrub", function (e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
        t = $(e.target).closest("a"), m = t.closest(".talk"), c = t.find(".scrubbed"), r = parseInt(m.attr("data-slide-count"), 10);
        if (!t.hasClass("setup")) {
            t.addClass("setup"), o = m.attr("data-id"), p = t.find("img").attr("src").replace(/0\.jpg/, ""), a = "class='timeline'", v = "'display:none;'";
            for (s = g = 1, y = r - 1; 1 <= y ? g <= y : g >= y; s = 1 <= y ? ++g : --g) n = "alt='Slide " + (s + 1) + "'", d = "src='" + p + s + ".jpg'", i = "data-slide='" + s + "'", u = "<img " + a + " " + i + " " + d + " " + n + " " + v + "/>", t.prepend($(u))
        }
        return f = e.pageX - t.offset().left, l = f / t.width(), h = Math.floor(l * r), h = Math.min(h, r), h = Math.max(h, 0), t.find("img[data-slide]:visible").hide(), t.find("img[data-slide=" + h + "]").show(), t.find(".scrubbed").width(Math.round((h + 1) * 100 / r) + "%")
    }), $(document).on("mouseleave", "html:not(.touch) a.scrub", function (e) {
        return $(e.target).closest("a").find("img[data-slide]:visible").hide()
    })
}.call(this),
function () {
    jQuery(function (e) {
        var t, n, r, i;
        if (!e.support.pjax) return;
        return t = e("#search_form"), n = e("#q"), r = n.val(), t.bind("submit", function () {
            return !1
        }), i = function (i) {
            var s;
            s = n.val();
            if (s.length > 1 && s !== r) return r = s, t.addClass("searching"), e.pjax({
                url: "/search?" + e.param({
                    q: n.val()
                }),
                container: "#content",
                timeout: 3e3,
                success: function () {
                    return t.removeClass("searching")
                }
            })
        }, n.bind("keyup", _.debounce(i, 350))
    })
}.call(this), $(function () {
    $("#share_social").click(function () {
        return window.frames[0].window.$("#player").addClass("share"), window.frames[0].window.$('a[href="#social"]').click(), !1
    }), $("#share_embed").click(function () {
        return window.frames[0].window.$("#player").addClass("share"), window.frames[0].window.$('a[href="#embed"]').click(), !1
    }), $("#share_link").click(function () {
        return window.frames[0].window.$("#player").addClass("share"), window.frames[0].window.$('a[href="#link"]').click(), !1
    })
}), $(function () {
    if ($("#talk")) {
        var e = $("#talk");
        $("a.star").live("ajax:success", function (e, t) {
            $("a.stargazers").text(t.stars_count + " Star" + (t.stars_count != 1 ? "s" : "")), $(".star").hide(), $(".unstar").show()
        }), $("a.unstar").live("ajax:success", function (e, t) {
            $("a.stargazers").text(t.stars_count + " Star" + (t.stars_count != 1 ? "s" : "")), $(".unstar").hide(), $(".star").show()
        }), $("#stargazers").hide(), $("ul.delimited a.stargazers").click(function () {
            $('#tabs a[href="#stargazers"]').click()
        })
    }
}),
function () {
    $(function () {
        var e, t, n;
        if (!(e = $("meta[name=octolytics-script-host]")[0])) return;
        return (n = window._octo) == null && (window._octo = []), _octo.push(["enablePerformance"]), _octo.push(["recordPageView"]), t = document.createElement("script"), t.type = "text/javascript", t.async = !0, t.src = "//" + e.content + "/assets/api.js", document.getElementsByTagName("head")[0].appendChild(t)
    })
}.call(this), $(function () {
    if ($("#tabs")) {
        var e = $("#tabs");
        e.find("a").click(function () {
            return $(".tab-content").hide(), $($(this).attr("href")).show(), $(this).closest("ul").find("li.current").removeClass("current"), $(this).closest("li").addClass("current"), !1
        }).first().click(), e.find('a[href="#stargazers"]').click(function (e) {
            e.preventDefault(), $.ajax({
                url: $(this).data("remote-url"),
                success: function (e) {
                    var t = $("#stargazers table");
                    return t.empty(), t.append(e), !1
                }
            })
        })
    }
}),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    window.TalkForm = function () {
        function t(t) {
            this.validate = e(this.validate, this), this.valid = e(this.valid, this), this.screenValid = e(this.screenValid, this), this.screenExists = e(this.screenExists, this), this.presenterValid = e(this.presenterValid, this), this.presenterExists = e(this.presenterExists, this), this.hasMedia = e(this.hasMedia, this), this.hasName = e(this.hasName, this), this.syncFromForm = e(this.syncFromForm, this), this.form = $(t), this.form.on("change keyup changeData", this.syncFromForm), $(document).on("change", ".js-video-input", this.syncFromForm), this.syncFromForm()
        }
        return t.prototype.syncFromForm = function () {
            return this.name = this.form.find("#talk_name").val(), this.presenter = $("input#presenter_url"), this.presenterUrl = this.presenter.val(), this.screen = $("input#screen_url"), this.screenUrl = this.screen.val(), this.pdf = !! this.form.data("uploaded"), this.validate()
        }, t.prototype.hasName = function () {
            return this.name != null && this.nameValid()
        }, t.prototype.nameValid = function () {
            return !!this.name.length && this.name.match(/^\s+$/) == null
        }, t.prototype.hasMedia = function () {
            var e;
            return e = this.presenterExists() && this.presenterValid() || this.screenExists() && this.screenValid() || this.pdf, e && (e = this.presenterValid() &&
                this.screenValid())
        }, t.prototype.presenterExists = function () {
            return !!this.presenterUrl
        }, t.prototype.presenterValid = function () {
            return this.form.find("input[name=presenter_url]").val(this.presenter.val()), this.checkVideoElement(this.presenter)
        }, t.prototype.screenExists = function () {
            return !!this.screenUrl
        }, t.prototype.screenValid = function () {
            return this.form.find("input[name=screen_url]").val(this.screen.val()), this.checkVideoElement(this.screen)
        }, t.prototype.checkVideoElement = function (e) {
            var t;
            return e.length > 0 ? (t = this.validUrl(e.val()), this.setVideoErrorContainer(e, t)) : t = !0, t
        }, t.prototype.setVideoErrorContainer = function (e, t) {
            var n;
            return n = e.closest(".error_container"), n.length > 0 || (e.wrap('<div class="error_container">'), n = e.closest(".error_container")), t ? this.setVideoNoError(n) : this.setVideoError(n, e)
        }, t.prototype.setVideoNoError = function (e) {
            return e.removeClass("field_with_errors"), e.find("label.error").remove()
        }, t.prototype.setVideoError = function (e, t) {
            e.addClass("field_with_errors");
            if (!(e.find("label.error").length > 0)) return e.append("<label class='error' for='" + t.attr("name") + "'>Please enter the URL of a movie, like https://example.com/movie.mov.</label>")
        }, t.prototype.validUrl = function (e) {
            return e === "" || !! e.match(/http(s)?:\/\/.*/)
        }, t.prototype.valid = function () {
            return this.hasMedia() && this.hasName()
        }, t.prototype.validate = function () {
            return this.valid() ? this.form.removeClass("needs-media").removeClass("needs-name").addClass("valid") : this.hasMedia() ? this.form.removeClass("needs-media").removeClass("valid").addClass("needs-name") : this.form.removeClass("needs-name").removeClass("valid").addClass("needs-media")
        }, t
    }()
}.call(this),
function (e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function (e) {
    "use strict";
    var t = 0;
    e.ajaxTransport("iframe", function (n) {
        if (n.async && (n.type === "POST" || n.type === "GET")) {
            var r, i;
            return {
                send: function (s, o) {
                    r = e('<form style="display:none;"></form>'), r.attr("accept-charset", n.formAcceptCharset), i = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function () {
                        var t, s = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                        i.unbind("load").bind("load", function () {
                            var t;
                            try {
                                t = i.contents();
                                if (!t.length || !t[0].firstChild) throw new Error
                            } catch (n) {
                                t = undefined
                            }
                            o(200, "success", {
                                iframe: t
                            }), e('<iframe src="javascript:false;"></iframe>').appendTo(r), r.remove()
                        }), r.prop("target", i.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function (t, n) {
                            e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(r)
                        }), n.fileInput && n.fileInput.length && n.type === "POST" && (t = n.fileInput.clone(), n.fileInput.after(function (e) {
                            return t[e]
                        }), n.paramName && n.fileInput.each(function (t) {
                            e(this).prop("name", s[t] || n.paramName)
                        }), r.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), r.submit(), t && t.length && n.fileInput.each(function (n, r) {
                            var i = e(t[n]);
                            e(r).prop("name", i.prop("name")), i.replaceWith(r)
                        })
                    }), r.append(i).appendTo(document.body)
                },
                abort: function () {
                    i && i.unbind("load").prop("src", "javascript".concat(":false;")), r && r.remove()
                }
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function (t) {
                return e(t[0].body).text()
            },
            "iframe json": function (t) {
                return e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function (t) {
                return e(t[0].body).html()
            },
            "iframe script": function (t) {
                return e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function (e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
}(function (e) {
    "use strict";
    e.support.xhrFileUpload = !! window.XMLHttpRequestUpload && !! window.FileReader, e.support.xhrFormDataFileUpload = !! window.FormData, e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: e(document),
            fileInput: undefined,
            replaceFileInput: !0,
            paramName: undefined,
            singleFileUploads: !0,
            limitMultiFileUploads: undefined,
            sequentialUploads: !1,
            limitConcurrentUploads: undefined,
            forceIframeTransport: !1,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: !0,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function (e) {
                return e.serializeArray()
            },
            add: function (e, t) {
                t.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _BitrateTimer: function () {
            this.timestamp = +(new Date), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, n) {
                var r = e - this.timestamp;
                if (!this.bitrate || !n || r > n) this.bitrate = (t - this.loaded) * (1e3 / r) * 8, this.loaded = t, this.timestamp = e;
                return this.bitrate
            }
        },
        _isXHRUpload: function (t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function (t) {
            var n;
            return typeof t.formData == "function" ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : t.formData ? (n = [], e.each(t.formData, function (e, t) {
                n.push({
                    name: e,
                    value: t
                })
            }), n) : []
        },
        _getTotal: function (t) {
            var n = 0;
            return e.each(t, function (e, t) {
                n += t.size || 1
            }), n
        },
        _onProgress: function (e, t) {
            if (e.lengthComputable) {
                var n = +(new Date),
                    r, i;
                if (t._time && t.progressInterval && n - t._time < t.progressInterval && e.loaded !== e.total) return;
                t._time = n, r = t.total || this._getTotal(t.files), i = parseInt(e.loaded / e.total * (t.chunkSize || r), 10) + (t.uploadedBytes || 0), this._loaded += i - (t.loaded || t.uploadedBytes || 0), t.lengthComputable = !0, t.loaded = i, t.total = r, t.bitrate = t._bitrateTimer.getBitrate(n, i, t.bitrateInterval), this._trigger("progress", e, t), this._trigger("progressall", e, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(n, this._loaded, t.bitrateInterval)
                })
            }
        },
        _initProgressListener: function (t) {
            var n = this,
                r = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            r.upload && (e(r.upload).bind("progress", function (e) {
                var r = e.originalEvent;
                e.lengthComputable = r.lengthComputable, e.loaded = r.loaded, e.total = r.total, n._onProgress(e, t)
            }), t.xhr = function () {
                return r
            })
        },
        _initXHRData: function (t) {
            var n, r = t.files[0],
                i = t.multipart || !e.support.xhrFileUpload,
                s = t.paramName[0];
            t.headers = t.headers || {}, t.contentRange && (t.headers["Content-Range"] = t.contentRange), i ? e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                name: s,
                value: t.blob
            }) : e.each(t.files, function (e, r) {
                n.push({
                    name: t.paramName[e] || s,
                    value: r
                })
            })) : (t.formData instanceof FormData ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function (e, t) {
                n.append(t.name, t.value)
            })), t.blob ? (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(r.name) + '"', t.headers["Content-Description"] = encodeURI(r.type), n.append(s, t.blob, r.name)) : e.each(t.files, function (e, r) {
                r instanceof Blob && n.append(t.paramName[e] || s, r, r.name)
            })), t.data = n) : (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(r.name) + '"', t.contentType = r.type, t.data = t.blob || r), t.blob = null
        },
        _initIframeSettings: function (t) {
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && e("<a></a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function (e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e, "iframe")
        },
        _getParamName: function (t) {
            var n = e(t.fileInput),
                r = t.paramName;
            return r ? e.isArray(r) || (r = [r]) : (r = [], n.each(function () {
                var t = e(this),
                    n = t.prop("name") || "files[]",
                    i = (t.prop("files") || [1]).length;
                while (i) r.push(n), i -= 1
            }), r.length || (r = [n.prop("name") || "files[]"])), r
        },
        _initFormSettings: function (t) {
            if (!t.form || !t.form.length) t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")));
            t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || t.form.prop("method") || "").toUpperCase(), t.type !== "POST" && t.type !== "PUT" && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function (t) {
            var n = e.extend({}, this.options, t);
            return this._initFormSettings(n), this._initDataSettings(n), n
        },
        _enhancePromise: function (e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function (t, n, r) {
            var i = e.Deferred(),
                s = i.promise();
            return n = n || this.options.context || s, t === !0 ? i.resolveWith(n, r) : t === !1 && i.rejectWith(n, r), s.abort = i.promise, this._enhancePromise(s)
        },
        _getUploadedBytes: function (e) {
            var t = e.getResponseHeader("Range"),
                n = t && t.split("-"),
                r = n && n.length > 1 && parseInt(n[1], 10);
            return r && r + 1
        },
        _chunkedUpload: function (t, n) {
            var r = this,
                i = t.files[0],
                s = i.size,
                o = t.uploadedBytes = t.uploadedBytes || 0,
                u = t.maxChunkSize || s,
                a = i.slice || i.webkitSlice || i.mozSlice,
                f = e.Deferred(),
                l = f.promise(),
                c, h;
            return !(this._isXHRUpload(t) && a && (o || u < s)) || t.data ? !1 : n ? !0 : o >= s ? (i.error = "Uploaded bytes exceed file size", this._getXHRPromise(!1, t.context, [null, "error", i.error])) : (h = function (n) {
                var l = e.extend({}, t);
                l.blob = a.call(i, o, o + u), l.chunkSize = l.blob.size, l.contentRange = "bytes " + o + "-" + (o + l.chunkSize - 1) + "/" + s, r._initXHRData(l), r._initProgressListener(l), c = (e.ajax(l) || r._getXHRPromise(!1, l.context)).done(function (n, i, u) {
                    o = r._getUploadedBytes(u) || o + l.chunkSize, l.loaded || r._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: o - l.uploadedBytes,
                        total: o - l.uploadedBytes
                    }), l), t.uploadedBytes = l.uploadedBytes = o, o < s ? h() : f.resolveWith(l.context, [n, i, u])
                }).fail(function (e, t, n) {
                    f.rejectWith(l.context, [e, t, n])
                })
            }, this._enhancePromise(l), l.abort = function () {
                return c.abort()
            }, h(), l)
        },
        _beforeSend: function (e, t) {
            this._active === 0 && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer), this._active += 1, this._loaded += t.uploadedBytes || 0, this._total += this._getTotal(t.files)
        },
        _onDone: function (t, n, r, i) {
            this._isXHRUpload(i) || this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), i), i.result = t, i.textStatus = n, i.jqXHR = r, this._trigger("done", null, i)
        },
        _onFail: function (e, t, n, r) {
            r.jqXHR = e, r.textStatus = t, r.errorThrown = n, this._trigger("fail", null, r), r.recalculateProgress && (this._loaded -= r.loaded || r.uploadedBytes || 0, this._total -= r.total || this._getTotal(r.files))
        },
        _onAlways: function (e, t, n, r) {
            this._active -= 1, r.textStatus = t, n && n.always ? (r.jqXHR = n, r.result = e) : (r.jqXHR = e, r.errorThrown = n), this._trigger("always", null, r), this._active === 0 && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null)
        },
        _onSend: function (t, n) {
            var r = this,
                i, s, o, u, a = r._getAJAXSettings(n),
                f = function () {
                    return r._sending += 1, a._bitrateTimer = new r._BitrateTimer, i = i || ((s || r._trigger("send", t, a) === !1) && r._getXHRPromise(!1, a.context, s) || r._chunkedUpload(a) || e.ajax(a)).done(function (e, t, n) {
                        r._onDone(e, t, n, a)
                    }).fail(function (e, t, n) {
                        r._onFail(e, t, n, a)
                    }).always(function (e, t, n) {
                        r._sending -= 1, r._onAlways(e, t, n, a);
                        if (a.limitConcurrentUploads && a.limitConcurrentUploads > r._sending) {
                            var i = r._slots.shift(),
                                s;
                            while (i) {
                                s = i.state ? i.state() === "pending" : !i.isRejected();
                                if (s) {
                                    i.resolve();
                                    break
                                }
                                i = r._slots.shift()
                            }
                        }
                    }), i
                };
            return this._beforeSend(t, a), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), this._slots.push(o), u = o.pipe(f)) : u = this._sequence = this._sequence.pipe(f, f), u.abort = function () {
                return s = [undefined, "abort", "abort"], i ? i.abort() : (o && o.rejectWith(a.context, s), f())
            }, this._enhancePromise(u)) : f()
        },
        _onAdd: function (t, n) {
            var r = this,
                i = !0,
                s = e.extend({}, this.options, n),
                o = s.limitMultiFileUploads,
                u = this._getParamName(s),
                a, f, l, c;
            if (!s.singleFileUploads && !o || !this._isXHRUpload(s)) l = [n.files], a = [u];
            else if (!s.singleFileUploads && o) {
                l = [], a = [];
                for (c = 0; c < n.files.length; c += o) l.push(n.files.slice(c, c + o)), f = u.slice(c, c + o), f.length || (f = u), a.push(f)
            } else a = u;
            return n.originalFiles = n.files, e.each(l || n.files, function (s, o) {
                var u = e.extend({}, n);
                return u.files = l ? o : [o], u.paramName = a[s], u.submit = function () {
                    return u.jqXHR = this.jqXHR = r._trigger("submit", t, this) !== !1 && r._onSend(t, this), this.jqXHR
                }, i = r._trigger("add", t, u)
            }), i
        },
        _replaceFileInput: function (t) {
            var n = t.clone(!0);
            e("<form></form>").append(n)[0].reset(), t.after(n).detach(), e.cleanData(t.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, r) {
                return r === t[0] ? n[0] : r
            }), t[0] === this.element[0] && (this.element = n)
        },
        _handleFileTreeEntry: function (t, n) {
            var r = this,
                i = e.Deferred(),
                s = function (e) {
                    e && !e.entry && (e.entry = t), i.resolve([e])
                }, o;
            return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, i.resolve(t._file)) : t.file(function (e) {
                e.relativePath = n, i.resolve(e)
            }, s) : t.isDirectory ? (o = t.createReader(), o.readEntries(function (e) {
                r._handleFileTreeEntries(e, n + t.name + "/").done(function (e) {
                    i.resolve(e)
                }).fail(s)
            }, s)) : i.resolve([]), i.promise()
        },
        _handleFileTreeEntries: function (t, n) {
            var r = this;
            return e.when.apply(e, e.map(t, function (e) {
                return r._handleFileTreeEntry(e, n)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function (t) {
            t = t || {};
            var n = t.items;
            return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(e.map(n, function (e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function (t) {
            t = e(t);
            var n = t.prop("webkitEntries") || t.prop("entries"),
                r, i;
            if (n && n.length) return this._handleFileTreeEntries(n);
            r = e.makeArray(t.prop("files"));
            if (!r.length) {
                i = t.prop("value");
                if (!i) return e.Deferred().resolve([]).promise();
                r = [{
                    name: i.replace(/^.*\\/, "")
                }]
            } else r[0].name === undefined && r[0].fileName && e.each(r, function (e, t) {
                t.name = t.fileName, t.size = t.fileSize
            });
            return e.Deferred().resolve(r).promise()
        },
        _getFileInputFiles: function (t) {
            return t instanceof e && t.length !== 1 ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function (t) {
            var n = this,
                r = {
                    fileInput: e(t.target),
                    form: e(t.target.form)
                };
            this._getFileInputFiles(r.fileInput).always(function (e) {
                r.files = e, n.options.replaceFileInput && n._replaceFileInput(r.fileInput), n._trigger("change", t, r) !== !1 && n._onAdd(t, r)
            })
        },
        _onPaste: function (t) {
            var n = t.originalEvent.clipboardData,
                r = n && n.items || [],
                i = {
                    files: []
                };
            e.each(r, function (e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && i.files.push(n)
            });
            if (this._trigger("paste", t, i) === !1 || this._onAdd(t, i) === !1) return !1
        },
        _onDrop: function (e) {
            e.preventDefault();
            var t = this,
                n = e.dataTransfer = e.originalEvent.dataTransfer,
                r = {};
            this._getDroppedFiles(n).always(function (n) {
                r.files = n, t._trigger("drop", e, r) !== !1 && t._onAdd(e, r)
            })
        },
        _onDragOver: function (e) {
            var t = e.dataTransfer = e.originalEvent.dataTransfer;
            if (this._trigger("dragover", e) === !1) return !1;
            t && (t.dropEffect = "copy"), e.preventDefault()
        },
        _initEventHandlers: function () {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })), this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        },
        _setOption: function (t, n) {
            var r = e.inArray(t, this._refreshOptionsList) !== -1;
            r && this._destroyEventHandlers(), this._super(t, n), r && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var t = this.options;
            t.fileInput === undefined ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _create: function () {
            var t = this.options;
            e.extend(t, e(this.element[0].cloneNode(!1)).data()), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = this._loaded = this._total = 0, this._initEventHandlers()
        },
        _destroy: function () {
            this._destroyEventHandlers()
        },
        add: function (t) {
            var n = this;
            if (!t || this.options.disabled) return;
            t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
                t.files = e, n._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t))
        },
        send: function (t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var n = this,
                        r = e.Deferred(),
                        i = r.promise(),
                        s, o;
                    return i.abort = function () {
                        return o = !0, s ? s.abort() : (r.reject(null, "abort", "abort"), i)
                    }, this._getFileInputFiles(t.fileInput).always(function (e) {
                        if (o) return;
                        t.files = e, s = n._onSend(null, t).then(function (e, t, n) {
                            r.resolve(e, t, n)
                        }, function (e, t, n) {
                            r.reject(e, t, n)
                        })
                    }), this._enhancePromise(i)
                }
                t.files = e.makeArray(t.files);
                if (t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.form = e, this.onComplete = t(this.onComplete, this), this.onDone = t(this.onDone, this), this.onProgress = t(this.onProgress, this), this.onAdd = t(this.onAdd, this), this.form.fileupload({
                formData: this.onFormData(),
                add: this.onAdd,
                progress: this.onProgress,
                done: this.onDone
            })
        }
        return e.prototype.acceptedFileTypes = /.+\.pdf$/i, e.prototype.progressSupported = function () {
            var e;
            return e = new XMLHttpRequest, e && "upload" in e && "onprogress" in e.upload
        }(), e.prototype.onFormData = function () {
            var e;
            return e = this,
            function (t) {
                var n;
                return n = t.serializeArray(), n.push({
                    name: "Content-Type",
                    value: e.fileContentType(this.files[0])
                }), n
            }
        }, e.prototype.fileContentType = function (e) {
            return "type" in e ? e.type : ""
        }, e.prototype.onAdd = function (e, t) {
            var n;
            return n = t.files[0], this.form.removeClass("error"), this.filenameFromFileupload = n.name, this.acceptedFileTypes.test(n.type) || this.acceptedFileTypes.test(n.name) ? (this.form.addClass("selected"), this.progressSupported || $("#upload_progress").addClass("noprogress"), $("#upload_progress").addClass("active"), $("#upload_progress .progress_title").text("Uploading " + n.name), this.xhr = t.submit()) : this.form.addClass("error")
        }, e.prototype.onProgress = function (e, t) {
            var n, r;
            if (!this.progressSupported) return;
            return n = "Uploaded " + this.formatSize(t.loaded), t.loaded !== t.total && (n += " of " + this.formatSize(t.total)), r = parseInt(t.loaded / t.total * 100, 10), this.setProgress(r, n)
        }, e.prototype.setProgress = function (e, t) {
            return $("#upload_progress .progress_meter").width(e + "%"), $("#upload_progress .progress_title").text(t)
        }, e.prototype.onDone = function (e, t) {
            return this.setProgress(100, "Uploaded " + this.filenameFromFileupload), $("#upload_talk").ajaxSubmit({
                url: $("#upload_talk").attr("action") + ".json",
                data: {
                    "talk[pdf_filename]": this.filenameFromResult(t.result) || this.filenameFromFileupload
                },
                dataType: "json",
                success: this.onComplete
            })
        }, e.prototype.onComplete = function (e, t, n) {
            var r, i;
            return r = n.getResponseHeader("Location"), i = r.replace(/\/edit$/, "/status"), $("#the_slides").remove(), $("form#upload_talk").data("uploaded", !0).attr("action", r.replace(/\/edit$/, "")).append('<input type="hidden" name="_method" value="PUT" />'), "pushState" in history && history.pushState({}, e.name, r), this.showProgress(e.uuid, i)
        }, e.prototype.showProgress = function (e, t) {
            return $(".talk_wrapper").attr("id", "talk_" + e), $("#process_progress").addClass("active").closest(".step").attr("data-processing-talk", e), (new ProcessingTalk(e, t)).poll()
        }, e.prototype.formatSize = function (e) {
            var t;
            t = -1;
            while (e > 99) e /= 1024, t++;
            return Math.max(e, .1).toFixed(1) + ["KB", "MB", "GB", "TB", "PB", "EB"][t]
        }, e.prototype.filenameFromResult = function (e) {
            var t, n;
            if (!e) return;
            return t = $(e).find("Key").text(), n = t.split("/"), n[n.length - 1]
        }, e
    }(), jQuery(function () {
        if ($("#s3-uploader").length > 0) return window.s3Uploader = new e($("#s3-uploader"))
    })
}.call(this);
var getElementsByClassName = function (e, t, n) {
    return document.getElementsByClassName ? getElementsByClassName = function (e, t, n) {
        n = n || document;
        var r = n.getElementsByClassName(e),
            i = t ? new RegExp("\\b" + t + "\\b", "i") : null,
            s = [],
            o;
        for (var u = 0, a = r.length; u < a; u += 1) o = r[u], (!i || i.test(o.nodeName)) && s.push(o);
        return s
    } : document.evaluate ? getElementsByClassName = function (e, t, n) {
        t = t || "*", n = n || document;
        var r = e.split(" "),
            i = "",
            s = "http://www.w3.org/1999/xhtml",
            o = document.documentElement.namespaceURI === s ? s : null,
            u = [],
            a, f;
        for (var l = 0, c = r.length; l < c; l += 1) i += "[contains(concat(' ', @class, ' '), ' " + r[l] + " ')]";
        try {
            a = document.evaluate(".//" + t + i, n, o, 0, null)
        } catch (h) {
            a = document.evaluate(".//" + t + i, n, null, 0, null)
        }
        while (f = a.iterateNext()) u.push(f);
        return u
    } : getElementsByClassName = function (e, t, n) {
        t = t || "*", n = n || document;
        var r = e.split(" "),
            i = [],
            s = t === "*" && n.all ? n.all : n.getElementsByTagName(t),
            o, u = [],
            a;
        for (var f = 0, l = r.length; f < l; f += 1) i.push(new RegExp("(^|\\s)" + r[f] + "(\\s|$)"));
        for (var c = 0, h = s.length; c < h; c += 1) {
            o = s[c], a = !1;
            for (var p = 0, d = i.length; p < d; p += 1) {
                a = i[p].test(o.className);
                if (!a) break
            }
            a && u.push(o)
        }
        return u
    }, getElementsByClassName(e, t, n)
}, JSON;
JSON || (JSON = {}),
function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, t = [].slice;
    this.SpeakerDeck || (this.SpeakerDeck = {}), SpeakerDeck.API = function () {
        function n(t) {
            var n = this;
            this.iframe = t, this.preventDefault = e(this.preventDefault, this), this.sendEvent = e(this.sendEvent, this), this.channel = new FrameChannel("" + this.protocol + "://" + this.host, this.iframe.contentWindow);
            if (!this.supported) return;
            document.addEventListener("keydown", this.sendEvent, !1), document.addEventListener("keypress", this.preventDefault), this.on("change", function (e) {
                return n.currentSlide = e
            }), this.channel.send("ready")
        }
        return n.prototype.host = "speakerdeck.com", n.prototype.protocol = "https", n.prototype.supported = document.addEventListener, n.prototype.on = function () {
            var e, n;
            return e = 1 <= arguments.length ? t.call(arguments, 0) : [], (n = this.channel).on.apply(n, e)
        }, n.prototype.nextSlide = function () {
            return this.channel.send("nextSlide")
        }, n.prototype.previousSlide = function () {
            return this.channel.send("previousSlide")
        }, n.prototype.goToSlide = function (e) {
            return this.channel.send("goToSlide", e)
        }, n.prototype.sendEvent = function (e) {
            var t, n, r, i;
            if (!this.shouldSendKeyboard()) return;
            n = {};
            for (t in e) {
                r = e[t];
                if ((i = typeof r) === "string" || i === "number" || i === "boolean") n[t] = r
            }
            return this.channel.send(n.type, n)
        }, n.prototype.preventDefault = function (e) {
            if (this.shouldSendKeyboard() && e.keyCode === 32) return e.preventDefault()
        }, n.prototype.shouldSendKeyboard = function () {
            return document.activeElement === document.body && window.location.host === this.host
        }, n.prototype.release = function () {
            return this.channel.close(), document.removeEventListener("keydown", this.sendEvent, !1)
        }, n
    }()
}.call(this),
function () {
    var e, t, n, r = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e, t) {
            var n;
            this.element = e, this.params = t, this.ready = r(this.ready, this), this.resize = r(this.resize, this), this.container = this.element.parentNode, this.id = this.element.getAttribute("data-id"), this.ratio = this.element.getAttribute("data-ratio") || 4 / 3, (n = this.params) == null && (this.params = {}), this.params.slide = this.element.getAttribute("data-slide") || this.slideFromHash(), this.params.type = this.element.getAttribute("data-type"), this.redesign = document.body.className.match(/\bredesign\b/) != null
        }
        return e.init = function () {
            var t, n, r, i, s;
            n = getElementsByClassName("speakerdeck-embed"), s = [];
            for (r = 0, i = n.length; r < i; r++) t = n[r], s.push((new e(t)).setup());
            return s
        }, e.prototype.url = function () {
            return "//speakerdeck.com/player/" + this.id + "?" + this.toParam()
        }, e.prototype.toParam = function () {
            var e, t;
            return function () {
                var n, r;
                n = this.params, r = [];
                for (e in n) t = n[e], t && r.push("" + e + "=" + encodeURIComponent(t));
                return r
            }.call(this).join("&")
        }, e.prototype.setup = function () {
            return this.createFrame(), this.bindEvents(), this.insert(), this.resize()
        }, e.prototype.createFrame = function () {
            return this.iframe = document.createElement("iframe"), this.iframe.className = "speakerdeck-iframe", this.iframe.style.border = "0", this.iframe.style.background = "transparent", this.iframe.style.margin = "0", this.iframe.style.padding = "0", this.iframe.border = 0, this.iframe.frameBorder = 0, this.iframe.allowTransparency = !0, this.iframe.src = this.url(), this.iframe.setAttribute("allowfullscreen", !0), this.iframe.setAttribute("mozallowfullscreen", !0), this.iframe.setAttribute("webkitallowfullscreen", !0), this.redesign || (this.iframe.style["-webkit-border-radius"] = "5px", this.iframe.style["-moz-border-radius"] = "5px", this.iframe.style["border-radius"] = "5px"), this.wrapper = document.createElement("div"), this.wrapper.appendChild(this.iframe)
        }, e.prototype.insert = function () {
            return this.container.replaceChild(this.wrapper, this.element)
        }, e.prototype.resize = function () {
            return this.iframe.style.width = this.width() + "px", this.iframe.style.height = this.height() + "px"
        }, e.prototype.width = function () {
            return this.wrapper.offsetWidth
        }, e.prototype.height = function () {
            return this.redesign ? this.width() / this.ratio : this.width() / this.ratio + 62
        }, e.prototype.bindEvents = function () {
            return t(window, "resize", n(this.resize, 100)), t(this.iframe, "load", this.ready)
        }, e.prototype.ready = function () {
            return this.api = new SpeakerDeck.API(this.iframe), typeof window.onSpeakerDeckPlayerReady == "function" ? window.onSpeakerDeckPlayerReady(this.api) : void 0
        }, e.prototype.slideFromHash = function () {
            var e;
            if (e = window.location.hash.match(/^#(\d+)$/)) return Number(e[1])
        }, e
    }.call(this), t = function (e, t, n) {
        return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    }, n = function (e, t) {
        var n;
        return n = null,
        function () {
            var r, i;
            return i = this, r = arguments, clearTimeout(n), n = setTimeout(function () {
                return e.apply(i, r)
            }, t)
        }
    }, this.SpeakerDeck && (this.SpeakerDeck.Embed = e), contentLoaded(window, e.init), t(window, "popstate", e.init), t(document, "speakerdeck", e.init)
}.call(this),
function () {}.call(this);
