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
            $(document).ready(function () {
                var g, h;
                if (g = $(".panel.-collapsible"), 0 < g.length && g.each(function (j, k) {
                        var m, p;
                        k = $(k), m = $(".panel-body", k), p = $("[data-action=\"collapse\"]", k), p.on("click", function (q) {
                            q.preventDefault(), $("i", p).toggleClass("fa-chevron-right fa-chevron-down"), m.stop().slideToggle()
                        })
                    }), h = $(".panel.-dismissible"), 0 < h.length) return h.each(function (j, k) {
                    var m, p;
                    k = $(k), m = $(".panel-body", k), p = $("[data-action=\"dismiss\"]", k), p.on("click", function (q) {
                        q.preventDefault(), k.slideToggle(function () {
                            k.remove()
                        })
                    })
                })
            })
        }).call(void 0)
    }, {}]
}, {}, [1]);
