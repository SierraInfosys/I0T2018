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
            (function (g) {
                return g.form = function (k) {
                    this.form = g(k), this.groups = g(".form-group", this.form), this.inputs = g("input, textarea, select", this.form), this.check = {}, this.action = this.form.attr("action"), this.method = this.form.attr("method"), null == this.method && (this.method = "POST"), this.groups.each(function (p, q) {
                        var v, w;
                        q = g(q), v = g("input, textarea, select", q), w = g("label", q), q.on("click", function () {
                            v.focus()
                        }), "" !== v.val() && w.addClass("active"), v.on("focusin", function () {
                            q.removeClass("has-error"), w.addClass("active")
                        }), v.on("focusout", function () {
                            "" === v.val() && w.removeClass("active")
                        })
                    })
                }, g.fn.form = function (k) {
                    return this.each(function (m, p) {
                        if (!g.data(p, "form")) return g.data(p, "form", new g.form(p, k))
                    })
                }
            })(window.jQuery, window, document)
        }).call(void 0)
    }, {}]
}, {}, [1]);
