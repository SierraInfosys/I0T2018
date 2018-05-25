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
                    duration: 0.5,
                    animate: "TweenLite",
                    selectors: {
                        link: ".has-morph-dropdown",
                        dropdown_target: ".morph-dropdown",
                        dropdown_list: ".morph-dropdown-list",
                        dropdown_wrapper: ".morph-dropdown-wrapper",
                        content: ".morph-content"
                    },
                    events: {
                        link_create: "morph.linkCreate"
                    },
                    threshold: {
                        xl: 32,
                        lg: 32,
                        md: 32,
                        sm: 16,
                        xs: 8
                    },
                    screen: {
                        xs: 0,
                        sm: 768,
                        md: 992,
                        lg: 1200,
                        xl: 1560
                    }
                }, g.morphDropdown = function (m) {
                    this.settings = g.extend({}, k), this.element = g(m), this.links = g(this.settings.selectors.link, this.element), this.dropdown_targets = g(this.settings.selectors.dropdown_target, this.element), this.dropdown_list = g(this.settings.selectors.dropdown_list, this.element), this.dropdown_wrapper = g(this.settings.selectors.dropdown_wrapper, this.element), this.from = this.dropdown_wrapper.hasClass("-left") ? "left" : "right", this.initialize = function (q) {
                        return function () {
                            q.link_create_bindings(), q.dropdown_bindings(), q.resize_bindings(), q.touch_bindings(), q.set_responsive_context(), q.set_threshold(), q.init_animator(), q.init_link_bindings()
                        }
                    }(this), this.touch_bindings = function (q) {
                        return function () {
                            q.dropdown_wrapper.on("touchstart", function () {}), q.links.on("touchstart", function () {})
                        }
                    }(this), this.dropdown_bindings = function (q) {
                        return function () {
                            q.dropdown_wrapper.on("mouseenter", function () {
                                q.cancel_hide_dropdown()
                            }), q.dropdown_wrapper.on("mouseleave", function () {
                                q.hide_dropdown()
                            })
                        }
                    }(this), this.link_create_bindings = function (q) {
                        return function () {
                            q.element.on(q.settings.events.link_create, function (v, w) {
                                var y, z;
                                z = g(w.attr("href")), y = g(q.settings.selectors.content, z), w.on("mouseenter", function () {
                                    q.show_dropdown(w, z, y)
                                }).on("mouseleave", function () {
                                    q.link_hovered = !1, q.hide_dropdown()
                                }).on("click", function (A) {
                                    A.preventDefault()
                                })
                            })
                        }
                    }(this), this.cancel_hide_dropdown = function (q) {
                        return function () {
                            q.show_dropdown(q.current_link, q.current_target, q.current_content)
                        }
                    }(this), this.hide_dropdown = function (q) {
                        return function () {
                            q.dropdown_targets.removeClass("-active"), q.animate.to(q.dropdown_list, q.settings.duration, {
                                width: 0,
                                height: 0,
                                x: 0
                            })
                        }
                    }(this), this.show_dropdown = function (q) {
                        return function (v, w, y) {
                            var z, A, B;
                            q.current_link = v, q.current_target = w, q.current_content = y, q.link_hovered = !0, 767 > q.window_width ? y.width(q.window_width - 50) : y.attr("style", ""), A = y.outerWidth(!0), z = y.outerHeight(!0), A + q.threshold > q.window_width && (A = q.window_width - 2 * q.threshold), "right" === q.from ? (B = q.element.width() - v.width() / 2 - (v.offset().left - q.element.offset().left) - A / 2, B < q.threshold && (B = q.threshold), B + A + q.threshold > q.window_width && (B = q.window_width - A - q.threshold), B = -B) : (B = v.offset().left - q.element.offset().left - (A / 2 - v.width() / 2), B < q.threshold && (B = q.threshold), B + A + q.threshold > q.window_width && (B = q.window_width - A - q.threshold)), q.dropdown_targets.removeClass("-active"), 767 > q.window_width && (A = q.window_width - 20, B = -8), clearTimeout(q.link_timeout), q.link_timeout = setTimeout(function () {
                                w.addClass("-active")
                            }, q.settings.duration), q.animate.to(q.dropdown_list, q.settings.duration, {
                                width: A,
                                height: z,
                                "margin-right": -B
                            })
                        }
                    }(this), this.set_threshold = function (q) {
                        return function () {
                            q.threshold = q.settings.threshold[q.current_responsive_size]
                        }
                    }(this), this.resize_bindings = function (q) {
                        return function () {
                            q.set_window_size = function () {
                                q.window_width = g(h).width(), q.window_height = g(h).height()
                            }, g(h).on("resize", function () {
                                q.set_window_size(), q.set_threshold()
                            }), q.set_window_size()
                        }
                    }(this), this.init_link_bindings = function (q) {
                        return function () {
                            return q.links.each(function (v, w) {
                                q.element.triggerHandler(q.settings.events.link_create, [g(w)])
                            })
                        }
                    }(this), this.init_animator = function (q) {
                        return function () {
                            q.animate = h[q.settings.animate]
                        }
                    }(this), this.set_responsive_context = function (q) {
                        return function () {
                            q.current_responsive_size = q.window_width >= q.settings.screen.xl ? "xl" : q.window_width >= q.settings.screen.lg ? "lg" : q.window_width >= q.settings.screen.md ? "md" : q.window_width >= q.settings.screen.sm ? "sm" : "xs"
                        }
                    }(this), this.initialize()
                }, g.fn.morphDropdown = function (m) {
                    return this.each(function (p, q) {
                        if (!g.data(q, "morphDropdown")) return g.data(q, "morphDropdown", new g.morphDropdown(q, m))
                    })
                }
            })(window.jQuery, window, document)
        }).call(void 0)
    }, {}]
}, {}, [1]);
