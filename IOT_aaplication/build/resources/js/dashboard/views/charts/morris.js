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
                Morris.Line({
                    element: "morris-chart-line",
                    data: [{
                        y: "2011",
                        a: 100,
                        b: 0
                    }, {
                        y: "2012",
                        a: 75,
                        b: 50
                    }, {
                        y: "2013",
                        a: 50,
                        b: 75
                    }, {
                        y: "2014",
                        a: 75,
                        b: 50
                    }, {
                        y: "2015",
                        a: 50,
                        b: 75
                    }, {
                        y: "2016",
                        a: 75,
                        b: 50
                    }, {
                        y: "2017",
                        a: 100,
                        b: 0
                    }],
                    xkey: "y",
                    ykeys: ["a", "b"],
                    labels: ["Series A", "Series B"],
                    grid: !1,
                    gridTextColor: colors.light.dark,
                    fillOpacity: 0.1,
                    behaveLikeLine: !0,
                    resize: !0,
                    pointFillColors: [colors.primary, colors.secondary],
                    pointStrokeColors: [colors.primary, colors.secondary],
                    lineColors: [colors.primary, colors.secondary]
                }), Morris.Bar({
                    element: "morris-chart-bar",
                    data: [{
                        y: "2011",
                        a: 100,
                        b: 50
                    }, {
                        y: "2012",
                        a: 75,
                        b: 50
                    }, {
                        y: "2013",
                        a: 50,
                        b: 75
                    }, {
                        y: "2014",
                        a: 75,
                        b: 50
                    }, {
                        y: "2015",
                        a: 50,
                        b: 75
                    }, {
                        y: "2016",
                        a: 75,
                        b: 50
                    }, {
                        y: "2017",
                        a: 90,
                        b: 100
                    }],
                    xkey: "y",
                    ykeys: ["a", "b"],
                    labels: ["Series A", "Series B"],
                    grid: !1,
                    gridTextColor: colors.light.dark,
                    resize: !0,
                    barColors: [colors.primary, colors.secondary]
                }), Morris.Area({
                    element: "morris-chart-area",
                    data: [{
                        x: "2010 Q4",
                        y: 3,
                        z: 7
                    }, {
                        x: "2011 Q1",
                        y: 3,
                        z: 4
                    }, {
                        x: "2011 Q2",
                        y: 5,
                        z: 1
                    }, {
                        x: "2011 Q3",
                        y: 2,
                        z: 5
                    }, {
                        x: "2011 Q4",
                        y: 8,
                        z: 2
                    }, {
                        x: "2012 Q1",
                        y: 4,
                        z: 4
                    }],
                    xkey: "x",
                    ykeys: ["y", "z"],
                    labels: ["Series A", "Series B"],
                    grid: !1,
                    gridTextColor: colors.light.dark,
                    fillOpacity: 0.1,
                    behaveLikeLine: !0,
                    resize: !0,
                    pointFillColors: [colors.primary, colors.secondary],
                    pointStrokeColors: [colors.primary, colors.secondary],
                    lineColors: [colors.primary, colors.secondary]
                }), Morris.Donut({
                    element: "morris-chart-donut",
                    data: [{
                        label: "Download Sales",
                        value: 12
                    }, {
                        label: "In-Store Sales",
                        value: 30
                    }, {
                        label: "Mail-Order Sales",
                        value: 20
                    }],
                    grid: !1,
                    backgroundColor: "transparent",
                    gridTextColor: colors.light.dark,
                    labelColor: colors.light.dark,
                    resize: !0,
                    colors: [colors.primary, colors.secondary, colors.red]
                })
            })
        }).call(void 0)
    }, {}]
}, {}, [1]);
