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
            c[m][0].call(w.exports, function (y) {
                var z = c[m][1][y];
                return h(z ? z : y)
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
                    offset: 75,
                    collapse: 992,
                    duration: 0.3,
                    touch: !0,
                    visibilityThreshold: 0.5,
                    slideable: !1,
                    overlay: !1,
                    affectContent: !0,
                    slideContent: !1,
                    debug: !1
                }, g.sidebar = function (m) {
                    this.settings = g.extend({}, k), this.sidebar = g(m), this.sidebar_id = this.sidebar.attr("id"), this.sidebar_menu = g(".sidebar-menu", this.sidebar), this.sidebar_toggle = g(".sidebar-toggle[data-target=\"#" + this.sidebar_id + "\"]"), this.sidebar_tabs = g(".sidebar-tab", this.sidebar), this.sidebar_tab_contents = g(".sidebar-tab-content", this.sidebar), this.animate = TweenLite, this.body = g("body"), this.content = g(".content"), this.window = g(h), this.is_visible = !0, this.on_resize = function (q) {
                        return function () {
                            q.is_collapsible && (q.window.width() < q.collapse_threshold || 0 === q.collapse_threshold) ? (q.is_collapsed = !0, q.sidebar.addClass("-collapsed -responsive"), q.is_slideable && q.slide_toggle(!1), q.log("Resize toggle"), q.affects_content && q.is_slideable && q.content.removeClass("-with-" + q.position + "-sidebar")) : (q.is_collapsed = !1, q.sidebar.removeClass("-collapsed -responsive"), q.affects_content && q.content.addClass("-with-" + q.position + "-sidebar")), q.width = q.sidebar.width()
                        }
                    }(this), this.bind_resize = function (q) {
                        return function () {
                            q.window.on("resize", q.on_resize)
                        }
                    }(this), this.initialize_scrollbar = function (q) {
                        return function () {
                            g(".nano-content", q.sidebar).perfectScrollbar()
                        }
                    }(this), this.initialize_menu = function (q) {
                        return function () {
                            q.sidebar_menu.metisMenu()
                        }
                    }(this), this.initialize_attributes = function (q) {
                        return function () {
                            q.collapse_threshold = q.sidebar.attr("data-collapse") ? parseInt(q.sidebar.attr("data-collapse"), 10) : q.settings.collapse, q.offset = q.sidebar.attr("data-offset") ? parseInt(q.sidebar.attr("data-offset"), 10) : q.settings.offset, q.is_collapsible = !isNaN(q.collapse_threshold), q.is_slideable = q.sidebar.hasClass("-slideable") || q.settings.slideable, q.is_overlay = q.sidebar.attr("data-overlay") || q.settings.overlay, q.affects_content = q.sidebar.attr("data-affect-content") || q.settings.affectContent, q.slides_content = q.sidebar.attr("data-slide-content") || q.settings.slideContent, "false" === q.slides_content && (q.slides_content = !1), q.slides_content && q.sidebar.addClass("-slides-content"), q.sidebar.hasClass("-right") ? (q.position = "right", q.sign = -1) : (q.position = "left", q.sign = 1)
                        }
                    }(this), this.bind_menu = function (q) {
                        return function () {
                            var v;
                            v = !1, q.sidebar_menu.on("show.metisMenu", function () {
                                q.sidebar.addClass("-open"), v = !0
                            }), q.sidebar_menu.on("hidden.metisMenu", function () {
                                v || q.sidebar.removeClass("-open"), v = !1
                            })
                        }
                    }(this), this.slide_toggle = function (q) {
                        return function (v, w) {
                            var y;
                            null == v && (v = !q.is_visible), null == w && (w = q.settings.duration), q.is_sliding = !0, y = function () {
                                setTimeout(function () {
                                    q.is_sliding = !1, q.is_toggling = !1, v || (g.sidebar.active = null)
                                }, 250)
                            }, v ? (g.sidebar.active = q.sidebar, q.animate.to(q.sidebar, w, {
                                onComplete: y,
                                x: q.width * q.sign
                            }), q.slides_content && q.animate.to(q.content, w, {
                                x: q.width * q.sign
                            })) : (q.animate.to(q.sidebar, w, {
                                onComplete: y,
                                x: 0
                            }), q.slides_content && q.animate.to(q.content, w, {
                                x: 0
                            })), q.is_visible = v
                        }
                    }(this), this.bind_body_click = function (q) {
                        return function () {
                            q.body.on("mouseup", function (v) {
                                q.is_collapsed && q.sidebar.hasClass("-open") && 0 === g(g(v.target).closest(".sidebar-menu"), q.sidebar).length && (g(".active a", q.sidebar).trigger("click"), q.log("Sidebar toggle button click")), q.is_slideable && q.is_visible && !q.is_sliding && g(v.target) !== q.sidebar_toggle && 0 === g(v.target).closest(q.sidebar_toggle).length && 0 === g(v.target).closest(".-slideable").length && (q.slide_toggle(!1), q.log("Body click"))
                            })
                        }
                    }(this), this.bind_slideable = function (q) {
                        return function () {
                            var v;
                            return v = new Hammer(q.body[0]), v.get("pan").set({
                                direction: Hammer.DIRECTION_HORIZONTAL
                            }), v.on("panstart panleft panright panend", function (w) {
                                var y, z, A, B, C, D, E;
                                if ("panstart" === w.type && (q.first_touch = w), C = null === g.sidebar.active || q.sidebar === g.sidebar.active, D = !0, !!(q.is_collapsed && C)) return (A = Math.abs(w.deltaX) - q.offset, y = 0 < A && A < q.width, q.is_visible ? (E = q.width - A, z = 0 > w.deltaX) : (E = A, z = 0 < w.deltaX, D = q.first_touch.center.x < q.window.width() / 3), "right" === q.position && (E = -E, z = !z, !q.is_visible && (D = q.first_touch.center.x > 2 * q.window.width() / 3)), !!(q.is_slideable && y && z && D)) ? (q.is_sliding = !0, "panend" === w.type && ("panleft" === q.previous_event || "panright" === q.previous_event) ? (B = q.settings.duration * w.distance / q.width, void(w.distance > 0.5 * q.width ? q.is_visible ? (q.slide_toggle(!1, B), q.log("Slide out")) : (q.slide_toggle(!0, B), q.log("Slide in")) : (q.log("Slide back"), q.slide_toggle(q.is_visible, B)))) : void(q.animate.set(q.sidebar, {
                                    x: E
                                }), q.slides_content && q.animate.set(q.content, {
                                    x: E
                                }), q.previous_event = w.type)) : void 0
                            })
                        }
                    }(this), this.initialize_tabs = function (q) {
                        return function () {
                            q.sidebar_tabs.each(function (v, w) {
                                var y;
                                w = g(w), y = g(w.attr("data-target")), w.on("click", function () {
                                    q.sidebar_tabs.removeClass("-active"), q.sidebar_tab_contents.removeClass("-active"), w.addClass("-active"), y.addClass("-active"), y.triggerHandler("tab.show", [y])
                                })
                            })
                        }
                    }(this), this.initialize_chat = function (q) {
                        return function () {
                            var v, w, y, z, A, B;
                            A = g(".chat-view-tab", q.sidebar), B = g(".chat", A), y = g(".chat-items", A), v = g(".chat-form", A), z = g(".chat-user", A), w = g("input[name=\"message\"]", A), 0 < A.length && v.on("submit", function (C) {
                                var D;
                                return D = w.val(), w.val(""), y.append(g("<div>", {
                                    class: "chat-item -to",
                                    text: D
                                })), C.preventDefault(), !1
                            })
                        }
                    }(this), this.initialize_toggle = function (q) {
                        return function () {
                            q.sidebar_toggle.on("click", function () {
                                q.slide_toggle()
                            })
                        }
                    }(this), this.log = function (q) {
                        return function () {
                            q.settings.debug && console.log(q.sidebar_id, arguments)
                        }
                    }(this), this.initialize = function (q) {
                        return function () {
                            q.initialize_attributes(), q.initialize_scrollbar(), q.initialize_menu(), q.initialize_toggle(), q.initialize_tabs(), q.initialize_chat(), q.bind_menu(), q.bind_resize(), q.bind_body_click(), q.settings.touch && q.bind_slideable(), q.on_resize()
                        }
                    }(this), this.initialize()
                }, g.sidebar.active = null, g.fn.sidebar = function (m) {
                    return this.each(function (p, q) {
                        if (!g.data(q, "sidebar")) return g.data(q, "sidebar", new g.sidebar(q, m))
                    })
                }
            })(window.jQuery, window, document)
        }).call(void 0)
    }, {}]
}, {}, [1]);
