(function b(c, d, g) {
    function h(m, p) {
        if (!d[m]) {
            if (!c[m]) {
                var q = "function" == typeof require && require;
                if (!p && q) return q(m, !0);
                if (j) return j(m, !0);
                var v = new Error("Cannot find module '" + m + "'");
                throw v.code = "MODULE_NOT_FOUND", v
            }
            var w = d[m] = {
                exports: {}
            };
            c[m][0].call(w.exports, function (x) {
                var y = c[m][1][x];
                return h(y ? y : x)
            }, w, w.exports, b, c, d, g)
        }
        return d[m].exports
    }
    for (var j = "function" == typeof require && require, k = 0; k < g.length; k++) h(g[k]);
    return h
})({
    1: [function () {
        "use strict";
        (function () {
            (function (g, h) {
                var k;
                return k = {
                    opaque: !0
                }, g.navbar = function (m) {
                    this.settings = g.extend({}, k), this.element = g(m), g(h).scroll(function (q) {
                        return function () {
                            var v;
                            v = g(h).scrollTop(), q.settings.opaque && (25 < v ? q.element.addClass("-opaque") : q.element.removeClass("-opaque"))
                        }
                    }(this)).trigger("scroll"), g("body").on("click", function (q) {
                        return function (v) {
                            q.element.hasClass("navbar-collapsed") && (!g(v.target).is(q.element) && 0 < !q.element.has(g(v.target)).length && q.element.removeClass("navbar-collapsed"), v.stopPropagation())
                        }
                    }(this))
                }, g.fn.navbar = function (m) {
                    return this.each(function (p, q) {
                        if (!g.data(q, "navbar")) return g.data(q, "navbar", new g.navbar(q, m))
                    })
                }
            })(window.jQuery, window, document)
        }).call(void 0)
    }, {}]
}, {}, [1]);
