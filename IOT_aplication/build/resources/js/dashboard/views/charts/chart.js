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
                var g, h, j, k, m, p, q, v, w, x;
                Chart.defaults.global.defaultFontColor = colors.light.dark, Chart.defaults.global.maintainAspectRatio = !0, g = $("#chartjs-chart-line")[0].getContext("2d"), j = g.createLinearGradient(0, 0, 0, 400), j.addColorStop(0, hexToRGBA(colors.primary, 0.125)), j.addColorStop(1, hexToRGBA(colors.primary, 0.5)), h = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "Sales",
                        fill: !0,
                        lineTension: 0.33,
                        backgroundColor: j,
                        borderColor: hexToRGBA(colors.primary, 0.5),
                        borderWidth: 1,
                        pointRadius: 5,
                        pointBorderWidth: 1,
                        pointBorderColor: hexToRGBA(colors.primary, 0.25),
                        pointBackgroundColor: hexToRGBA(colors.primary, 1),
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 3,
                        pointHoverBackgroundColor: hexToRGBA(colors.white, 1),
                        pointHoverBorderColor: hexToRGBA(colors.primary, 1),
                        data: [50, 40, 60, 81, 95, 100, 100]
                    }]
                }, x = {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            }
                        }]
                    }
                }, w = new Chart(g, {
                    type: "line",
                    data: h,
                    options: x
                }), g = $("#chartjs-chart-bar")[0].getContext("2d"), j = g.createLinearGradient(0, 0, 0, 400), j.addColorStop(0, hexToRGBA(colors.primary, 0.125)), j.addColorStop(1, hexToRGBA(colors.primary, 0.5)), v = g.createLinearGradient(0, 0, 0, 400), v.addColorStop(0, hexToRGBA(colors.primary, 0.25)), v.addColorStop(1, hexToRGBA(colors.primary, 0.625)), h = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "Sales",
                        fill: !0,
                        lineTension: 0.33,
                        backgroundColor: j,
                        hoverBackgroundColor: v,
                        borderColor: hexToRGBA(colors.primary, 0.5),
                        borderWidth: 1,
                        data: [50, 40, 60, 81, 95, 100, 100]
                    }]
                }, x = {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            }
                        }]
                    }
                }, w = new Chart(g, {
                    type: "bar",
                    data: h,
                    options: x
                }), g = $("#chartjs-chart-radar")[0].getContext("2d"), j = g.createLinearGradient(0, 0, 0, 400), j.addColorStop(0, hexToRGBA(colors.primary, 0.125)), j.addColorStop(1, hexToRGBA(colors.primary, 0.5)), h = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [{
                        label: "Activities",
                        fill: !0,
                        backgroundColor: j,
                        borderColor: hexToRGBA(colors.primary, 0.5),
                        borderWidth: 1,
                        pointRadius: 5,
                        pointBorderWidth: 1,
                        pointBorderColor: hexToRGBA(colors.primary, 0.25),
                        pointBackgroundColor: hexToRGBA(colors.primary, 1),
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 3,
                        pointHoverBackgroundColor: hexToRGBA(colors.white, 1),
                        pointHoverBorderColor: hexToRGBA(colors.primary, 1),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    }]
                }, x = {
                    scale: {
                        ticks: {
                            fontColor: colors.light.light,
                            beginAtZero: !0,
                            backdropColor: "transparent",
                            showLabelBackdrop: !0
                        }
                    }
                }, w = new Chart(g, {
                    type: "radar",
                    data: h,
                    options: x
                }), g = $("#chartjs-chart-polar")[0].getContext("2d"), k = g.createLinearGradient(0, 0, 0, 400), k.addColorStop(0, hexToRGBA(colors.primary, 0.125)), k.addColorStop(1, hexToRGBA(colors.primary, 0.25)), m = g.createLinearGradient(0, 0, 0, 400), m.addColorStop(0, hexToRGBA(colors.primary, 0.25)), m.addColorStop(1, hexToRGBA(colors.primary, 0.375)), p = g.createLinearGradient(0, 0, 0, 400), p.addColorStop(0, hexToRGBA(colors.primary, 0.375)), p.addColorStop(1, hexToRGBA(colors.primary, 0.5)), q = g.createLinearGradient(0, 0, 0, 400), q.addColorStop(0, hexToRGBA(colors.primary, 0.5)), q.addColorStop(1, hexToRGBA(colors.primary, 0.625)), v = g.createLinearGradient(0, 0, 0, 400), v.addColorStop(0, hexToRGBA(colors.primary, 0.625)), v.addColorStop(1, hexToRGBA(colors.primary, 0.75)), h = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing"],
                    datasets: [{
                        label: "Activities",
                        fill: !0,
                        backgroundColor: [k, m, p, q],
                        hoverBackgroundColor: v,
                        borderColor: [hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5)],
                        borderWidth: 1,
                        data: [65, 59, 90, 81]
                    }]
                }, x = {
                    scale: {
                        ticks: {
                            fontColor: colors.light.light,
                            beginAtZero: !0,
                            backdropColor: "transparent",
                            showLabelBackdrop: !0
                        }
                    }
                }, w = new Chart(g, {
                    type: "polarArea",
                    data: h,
                    options: x
                }), g = $("#chartjs-chart-pie")[0].getContext("2d"), k = g.createLinearGradient(0, 0, 0, 400), k.addColorStop(0, hexToRGBA(colors.primary, 0.125)), k.addColorStop(1, hexToRGBA(colors.primary, 0.25)), m = g.createLinearGradient(0, 0, 0, 400), m.addColorStop(0, hexToRGBA(colors.primary, 0.25)), m.addColorStop(1, hexToRGBA(colors.primary, 0.375)), p = g.createLinearGradient(0, 0, 0, 400), p.addColorStop(0, hexToRGBA(colors.primary, 0.375)), p.addColorStop(1, hexToRGBA(colors.primary, 0.5)), v = g.createLinearGradient(0, 0, 0, 400), v.addColorStop(0, hexToRGBA(colors.primary, 0.5)), v.addColorStop(1, hexToRGBA(colors.primary, 0.625)), h = {
                    labels: ["Eating", "Drinking", "Sleeping"],
                    datasets: [{
                        label: "Activities",
                        fill: !0,
                        backgroundColor: [k, m, p],
                        hoverBackgroundColor: v,
                        borderColor: [hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5)],
                        borderWidth: 1,
                        data: [6, 4, 4]
                    }]
                }, w = new Chart(g, {
                    type: "pie",
                    data: h
                }), g = $("#chartjs-chart-doughnut")[0].getContext("2d"), k = g.createLinearGradient(0, 0, 0, 400), k.addColorStop(0, hexToRGBA(colors.primary, 0.125)), k.addColorStop(1, hexToRGBA(colors.primary, 0.25)), m = g.createLinearGradient(0, 0, 0, 400), m.addColorStop(0, hexToRGBA(colors.primary, 0.25)), m.addColorStop(1, hexToRGBA(colors.primary, 0.375)), p = g.createLinearGradient(0, 0, 0, 400), p.addColorStop(0, hexToRGBA(colors.primary, 0.375)), p.addColorStop(1, hexToRGBA(colors.primary, 0.5)), v = g.createLinearGradient(0, 0, 0, 400), v.addColorStop(0, hexToRGBA(colors.primary, 0.5)), v.addColorStop(1, hexToRGBA(colors.primary, 0.625)), h = {
                    labels: ["Eating", "Drinking", "Sleeping"],
                    datasets: [{
                        label: "Activities",
                        fill: !0,
                        backgroundColor: [k, m, p],
                        hoverBackgroundColor: v,
                        borderColor: [hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5), hexToRGBA(colors.primary, 0.5)],
                        borderWidth: 1,
                        data: [6, 4, 4]
                    }]
                }, w = new Chart(g, {
                    type: "doughnut",
                    data: h
                })
            })
        }).call(void 0)
    }, {}]
}, {}, [1]);
