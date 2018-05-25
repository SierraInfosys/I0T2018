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
            c[m][0].call(w.exports, function (z) {
                var A = c[m][1][z];
                return h(A ? A : z)
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
                var g, h, j, k;
                0 < $(".chart").length && ($("<div id='flot-tooltip'></div>").appendTo("body"), j = function (p, q, v) {
                    var w, z;
                    v ? (w = v.datapoint[0].toFixed(2), z = v.datapoint[1].toFixed(2), $("#flot-tooltip").html(v.series.label + " " + w + "% = " + z).css({
                        top: v.pageY + 5,
                        left: v.pageX + 5
                    }).fadeIn(200)) : $("#flot-tooltip").hide()
                }), 0 < $("#flot-chart-primary").length && (h = [{
                    label: "Progress",
                    data: [[0, 20], [12.5, 20], [25, 25], [37.5, 20], [50, 35], [62.5, 30], [75, 45], [87.5, 40], [100, 50]],
                    color: hexToRGBA(colors.primary, 0.75)
                }], g = {
                    color: colors.light.lighter
                }, k = {
                    legend: {
                        labelBoxBorderColor: colors.light.light,
                        backgroundColor: colors.dark.light,
                        color: "#ffffff"
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 1,
                        borderColor: colors.light.light
                    },
                    series: {
                        lines: {
                            show: !0,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: 0
                                }, {
                                    opacity: 0.5
                                }]
                            }
                        },
                        points: {
                            show: !0,
                            fillColor: colors.white
                        },
                        grow: {
                            active: !0,
                            duration: 1e3
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-primary"), h, k), $("#flot-chart-primary").on("plothover", j)), 0 < $("#flot-chart-dark").length && (h = [{
                    label: "Progress",
                    data: [[0, 50], [12.5, 60], [25, 30], [37.5, 40], [50, 30], [62.5, 50], [75, 40], [87.5, 50], [100, 40]],
                    color: colors.dark.medium
                }], g = {
                    color: colors.light.lighter
                }, k = {
                    legend: {
                        labelBoxBorderColor: colors.light.light,
                        backgroundColor: colors.dark.light,
                        color: "#ffffff"
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 1,
                        borderColor: colors.dark.light
                    },
                    series: {
                        lines: {
                            show: !0,
                            fill: !0,
                            color: colors.white,
                            fillColor: {
                                colors: [{
                                    opacity: 0.25
                                }, {
                                    opacity: 0.75
                                }]
                            }
                        },
                        points: {
                            show: !0,
                            fillColor: colors.black
                        },
                        grow: {
                            active: !0,
                            duration: 1e3
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-dark"), h, k), $("#flot-chart-dark").on("plothover", j)), 0 < $("#flot-chart-combined").length && (h = [{
                    label: "Progress",
                    data: [[0, 50], [12.5, 60], [25, 30], [37.5, 40], [50, 30], [62.5, 50], [75, 40], [87.5, 50], [100, 40]],
                    color: colors.dark.medium
                }, {
                    label: "Expected",
                    data: [[0, 50], [12.5, 40], [25, 0], [37.5, 20], [50, 60], [62.5, 40], [75, 30], [87.5, 40], [100, 20]],
                    color: hexToRGBA(colors.primary, 0.5)
                }, {
                    label: "Issues",
                    data: [[0, 10], [12.5, 10], [25, 0], [37.5, 6], [50, 8], [62.5, 25], [75, 15], [87.5, 5], [100, 2]],
                    color: hexToRGBA(hexShade(colors.primary, -0.1), 0.75)
                }], g = {
                    color: colors.light.lighter
                }, k = {
                    legend: {
                        labelBoxBorderColor: colors.light.light,
                        backgroundColor: colors.dark.light,
                        color: "#ffffff"
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 1,
                        borderColor: colors.light.light
                    },
                    series: {
                        lines: {
                            show: !0,
                            fill: !0,
                            color: colors.white,
                            fillColor: {
                                colors: [{
                                    opacity: 0.25
                                }, {
                                    opacity: 0.75
                                }]
                            }
                        },
                        points: {
                            show: !0,
                            fillColor: colors.black
                        },
                        grow: {
                            active: !0,
                            duration: 1e3
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-combined"), h, k), $("#flot-chart-combined").on("plothover", j)), 0 < $("#flot-chart-line").length && (h = [{
                    label: "Progress",
                    data: [[0, 55], [20, 50], [40, 30], [60, 40], [80, 50], [100, 50]],
                    color: hexToRGBA(colors.blue, 0.5)
                }], g = {
                    show: !1,
                    reserveSpace: !1
                }, k = {
                    legend: {
                        show: !1
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 0,
                        margin: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        borderColor: colors.light.light
                    },
                    series: {
                        lines: {
                            show: !0,
                            fill: !0,
                            color: colors.white,
                            fillColor: {
                                colors: [{
                                    opacity: 0.25
                                }, {
                                    opacity: 0.75
                                }]
                            }
                        },
                        points: {
                            show: !0,
                            fillColor: colors.red
                        },
                        grow: {
                            active: !0,
                            duration: 1e3
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-line"), h, k), $("#flot-chart-line").on("plothover", j)), 0 < $("#flot-chart-pie").length && (h = [{
                    label: "Advertising",
                    data: 60,
                    color: hexToRGBA(colors.primary, 0.75)
                }, {
                    label: "Referral",
                    data: 20,
                    color: hexToRGBA(colors.primary, 0.5)
                }, {
                    label: "Organic",
                    data: 20,
                    color: hexToRGBA(colors.primary, 0.25)
                }], g = {
                    show: !1,
                    reserveSpace: !1
                }, k = {
                    legend: {
                        show: !1
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 0,
                        margin: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        borderColor: colors.light.light
                    },
                    series: {
                        pie: {
                            innerRadius: 0.33,
                            stroke: {
                                width: 0,
                                color: hexToRGBA(colors.primary, 1)
                            },
                            borderWidth: 0,
                            label: {
                                formatter: function (p, q) {
                                    return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + p + "<br/>" + q.data[0][1] + "%</div>"
                                }
                            },
                            highlight: {
                                opacity: 0.1
                            },
                            show: !0,
                            color: colors.white
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-pie"), h, k)), 0 < $("#flot-chart-bar").length && (h = [{
                    label: "Price",
                    data: [[0, 30], [10, 40], [20, 30], [30, 40], [40, 50], [50, 30], [60, 40], [70, 50], [80, 60], [90, 40], [100, 45]],
                    color: hexToRGBA(colors.green, 0.5)
                }], g = {
                    show: !1,
                    reserveSpace: !1
                }, k = {
                    legend: {
                        show: !1
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderWidth: 0,
                        margin: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        borderColor: colors.light.light
                    },
                    series: {
                        bars: {
                            show: !0,
                            fill: !0,
                            stroke: {
                                width: 1
                            },
                            color: colors.white,
                            barWidth: 7,
                            align: "center",
                            fillColor: {
                                colors: [{
                                    opacity: 0.25
                                }, {
                                    opacity: 0.75
                                }]
                            }
                        },
                        grow: {
                            active: !0,
                            duration: 1e3
                        }
                    },
                    xaxis: g,
                    yaxis: g
                }, $.plot($("#flot-chart-bar"), h, k), $("#flot-chart-bar").on("plothover", j))
            })
        }).call(void 0)
    }, {}]
}, {}, [1]);
