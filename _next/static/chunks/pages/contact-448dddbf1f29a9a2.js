(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9335],
  {
    2711: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          function t(o) {
            if (a[o]) return a[o].exports;
            var n = (a[o] = { exports: {}, id: o, loaded: !1 });
            return (
              e[o].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports
            );
          }
          var a = {};
          return (t.m = e), (t.c = a), (t.p = "dist/"), t(0);
        })([
          function (e, t, a) {
            "use strict";
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var n =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var o in a)
                      Object.prototype.hasOwnProperty.call(a, o) &&
                        (e[o] = a[o]);
                  }
                  return e;
                },
              s = (o(a(1)), a(6)),
              r = o(s),
              i = o(a(7)),
              c = o(a(8)),
              l = o(a(9)),
              d = o(a(10)),
              u = o(a(11)),
              m = o(a(14)),
              h = [],
              p = !1,
              f = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              b = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if ((e && (p = !0), p))
                  return (
                    (h = (0, u.default)(h, f)), (0, d.default)(h, f.once), h
                  );
              },
              g = function () {
                (h = (0, m.default)()), b();
              },
              w = function () {
                h.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                });
              };
            e.exports = {
              init: function (e) {
                (f = n(f, e)), (h = (0, m.default)());
                var t,
                  a = document.all && !window.atob;
                return !0 === (t = f.disable) ||
                  ("mobile" === t && l.default.mobile()) ||
                  ("phone" === t && l.default.phone()) ||
                  ("tablet" === t && l.default.tablet()) ||
                  ("function" == typeof t && !0 === t()) ||
                  a
                  ? w()
                  : (f.disableMutationObserver ||
                      c.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (f.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", f.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", f.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", f.delay),
                    "DOMContentLoaded" === f.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? b(!0)
                      : "load" === f.startEvent
                      ? window.addEventListener(f.startEvent, function () {
                          b(!0);
                        })
                      : document.addEventListener(f.startEvent, function () {
                          b(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, i.default)(b, f.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, i.default)(b, f.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, r.default)(function () {
                        (0, d.default)(h, f.once);
                      }, f.throttleDelay)
                    ),
                    f.disableMutationObserver ||
                      c.default.ready("[data-aos]", g),
                    h);
              },
              refresh: b,
              refreshHard: g,
            };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function a(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t);
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : n(t)) ||
                  (t &&
                    "object" == (void 0 === t ? "undefined" : n(t)) &&
                    b.call(t) == i)
                )
                  return r;
                if (a(e)) {
                  var t,
                    o = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = a(o) ? o + "" : o;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var s = d.test((e = e.replace(c, "")));
                return s || u.test(e)
                  ? m(e.slice(2), s ? 2 : 8)
                  : l.test(e)
                  ? r
                  : +e;
              }
              var n =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                s = "Expected a function",
                r = NaN,
                i = "[object Symbol]",
                c = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                m = parseInt,
                h =
                  "object" == (void 0 === t ? "undefined" : n(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                p =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : n(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                f = h || p || Function("return this")(),
                b = Object.prototype.toString,
                g = Math.max,
                w = Math.min,
                x = function () {
                  return f.Date.now();
                };
              e.exports = function (e, t, n) {
                var r = !0,
                  i = !0;
                if ("function" != typeof e) throw TypeError(s);
                return (
                  a(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (i = "trailing" in n ? !!n.trailing : i)),
                  (function (e, t, n) {
                    function r(t) {
                      var a = u,
                        o = m;
                      return (u = m = void 0), (v = t), (p = e.apply(o, a));
                    }
                    function i(e) {
                      var a = e - b,
                        o = e - v;
                      return void 0 === b || a >= t || a < 0 || (j && o >= h);
                    }
                    function c() {
                      var e,
                        a,
                        o,
                        n = x();
                      return i(n)
                        ? l(n)
                        : void (f = setTimeout(
                            c,
                            ((e = n - b),
                            (a = n - v),
                            (o = t - e),
                            j ? w(o, h - a) : o)
                          ));
                    }
                    function l(e) {
                      return (
                        (f = void 0), N && u ? r(e) : ((u = m = void 0), p)
                      );
                    }
                    function d() {
                      var e,
                        a = x(),
                        o = i(a);
                      if (((u = arguments), (m = this), (b = a), o)) {
                        if (void 0 === f)
                          return (
                            (v = e = b), (f = setTimeout(c, t)), y ? r(e) : p
                          );
                        if (j) return (f = setTimeout(c, t)), r(b);
                      }
                      return void 0 === f && (f = setTimeout(c, t)), p;
                    }
                    var u,
                      m,
                      h,
                      p,
                      f,
                      b,
                      v = 0,
                      y = !1,
                      j = !1,
                      N = !0;
                    if ("function" != typeof e) throw TypeError(s);
                    return (
                      (t = o(t) || 0),
                      a(n) &&
                        ((y = !!n.leading),
                        (h = (j = "maxWait" in n)
                          ? g(o(n.maxWait) || 0, t)
                          : h),
                        (N = "trailing" in n ? !!n.trailing : N)),
                      (d.cancel = function () {
                        void 0 !== f && clearTimeout(f),
                          (v = 0),
                          (u = b = m = f = void 0);
                      }),
                      (d.flush = function () {
                        return void 0 === f ? p : l(x());
                      }),
                      d
                    );
                  })(e, t, { leading: r, maxWait: t, trailing: i })
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function a(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t);
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : n(t)) ||
                  (t &&
                    "object" == (void 0 === t ? "undefined" : n(t)) &&
                    f.call(t) == r)
                )
                  return s;
                if (a(e)) {
                  var t,
                    o = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = a(o) ? o + "" : o;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var m = l.test((e = e.replace(i, "")));
                return m || d.test(e)
                  ? u(e.slice(2), m ? 2 : 8)
                  : c.test(e)
                  ? s
                  : +e;
              }
              var n =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                s = NaN,
                r = "[object Symbol]",
                i = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                u = parseInt,
                m =
                  "object" == (void 0 === t ? "undefined" : n(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                h =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : n(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                p = m || h || Function("return this")(),
                f = Object.prototype.toString,
                b = Math.max,
                g = Math.min,
                w = function () {
                  return p.Date.now();
                };
              e.exports = function (e, t, n) {
                function s(t) {
                  var a = d,
                    o = u;
                  return (d = u = void 0), (x = t), (h = e.apply(o, a));
                }
                function r(e) {
                  var a = e - f,
                    o = e - x;
                  return void 0 === f || a >= t || a < 0 || (y && o >= m);
                }
                function i() {
                  var e,
                    a,
                    o,
                    n = w();
                  return r(n)
                    ? c(n)
                    : void (p = setTimeout(
                        i,
                        ((e = n - f),
                        (a = n - x),
                        (o = t - e),
                        y ? g(o, m - a) : o)
                      ));
                }
                function c(e) {
                  return (p = void 0), j && d ? s(e) : ((d = u = void 0), h);
                }
                function l() {
                  var e,
                    a = w(),
                    o = r(a);
                  if (((d = arguments), (u = this), (f = a), o)) {
                    if (void 0 === p)
                      return (x = e = f), (p = setTimeout(i, t)), v ? s(e) : h;
                    if (y) return (p = setTimeout(i, t)), s(f);
                  }
                  return void 0 === p && (p = setTimeout(i, t)), h;
                }
                var d,
                  u,
                  m,
                  h,
                  p,
                  f,
                  x = 0,
                  v = !1,
                  y = !1,
                  j = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  (t = o(t) || 0),
                  a(n) &&
                    ((v = !!n.leading),
                    (m = (y = "maxWait" in n) ? b(o(n.maxWait) || 0, t) : m),
                    (j = "trailing" in n ? !!n.trailing : j)),
                  (l.cancel = function () {
                    void 0 !== p && clearTimeout(p),
                      (x = 0),
                      (d = f = u = p = void 0);
                  }),
                  (l.flush = function () {
                    return void 0 === p ? h : c(w());
                  }),
                  l
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            "use strict";
            function a() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function o(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    a = Array.prototype.slice.call(e.removedNodes);
                  if (
                    (function e(t) {
                      var a = void 0,
                        o = void 0;
                      for (a = 0; a < t.length; a += 1)
                        if (
                          ((o = t[a]).dataset && o.dataset.aos) ||
                          (o.children && e(o.children))
                        )
                          return !0;
                      return !1;
                    })(t.concat(a))
                  )
                    return n();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function () {};
            t.default = {
              isSupported: function () {
                return !!a();
              },
              ready: function (e, t) {
                var s = window.document,
                  r = new (a())(o);
                (n = t),
                  r.observe(s.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            "use strict";
            function a() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = (function () {
                function e(e, t) {
                  for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                return function (t, a, o) {
                  return a && e(t.prototype, a), o && e(t, o), t;
                };
              })(),
              n =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              s =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              i =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              c = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  o(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = a();
                        return !(!n.test(e) && !s.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = a();
                        return !(!r.test(e) && !i.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new c();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = function (e, t, a) {
              var o = e.node.getAttribute("data-aos-once");
              t > e.position
                ? e.node.classList.add("aos-animate")
                : void 0 === o ||
                  ("false" !== o && (a || "true" === o)) ||
                  e.node.classList.remove("aos-animate");
            };
            t.default = function (e, t) {
              var o = window.pageYOffset,
                n = window.innerHeight;
              e.forEach(function (e, s) {
                a(e, n + o, t);
              });
            };
          },
          function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
              n = (o = a(12)) && o.__esModule ? o : { default: o };
            t.default = function (e, t) {
              return (
                e.forEach(function (e, a) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, n.default)(e.node, t.offset));
                }),
                e
              );
            };
          },
          function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
              n = (o = a(13)) && o.__esModule ? o : { default: o };
            t.default = function (e, t) {
              var a = 0,
                o = 0,
                s = window.innerHeight,
                r = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)),
                r.anchor &&
                  document.querySelectorAll(r.anchor) &&
                  (e = document.querySelectorAll(r.anchor)[0]),
                (a = (0, n.default)(e).top),
                r.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  a += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  a += e.offsetHeight;
                  break;
                case "top-center":
                  a += s / 2;
                  break;
                case "bottom-center":
                  a += s / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  a += s / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  a += s;
                  break;
                case "bottom-top":
                  a += e.offsetHeight + s;
                  break;
                case "center-top":
                  a += e.offsetHeight / 2 + s;
              }
              return (
                r.anchorPlacement || r.offset || isNaN(t) || (o = t), a + o
              );
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                for (
                  var t = 0, a = 0;
                  e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

                )
                  (t +=
                    e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                    (a +=
                      e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                    (e = e.offsetParent);
                return { top: a, left: t };
              });
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                return (
                  (e = e || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(e, function (e) {
                    return { node: e };
                  })
                );
              });
          },
        ]);
      }),
        (e.exports = t());
    },
    66405: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return a(51229);
        },
      ]);
    },
    29017: function (e, t, a) {
      "use strict";
      a.d(t, {
        l: function () {
          return s;
        },
      });
      var o = a(81354),
        n = a.n(o);
      let s = (e) => n().AES.encrypt(e, "ATLTEST123").toString();
    },
    51229: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = a(85893),
        n = a(2711),
        s = a.n(n);
      a(37611);
      var r = a(67294),
        i = a(93962);
      a(36501);
      var c = a(84769),
        l = a(25675),
        d = a.n(l);
      a(13104);
      var u = a(55678);
      a(79422);
      var m = a(41664),
        h = a.n(m),
        p = a(4298),
        f = a.n(p),
        b = a(29017);
      t.default = () => {
        let e = [
            { name: "name", message: "Please enter name" },
            { name: "email", message: "Please enter email" },
            {
              name: "reason_for_contact",
              message: "Please enter reason for contact",
            },
            { name: "message", message: "Please enter message" },
          ],
          [t, a] = (0, r.useState)(!1),
          [n, l] = (0, r.useState)(!1),
          [m, p] = (0, r.useState)(!1),
          [g, w] = (0, r.useState)({
            name: "",
            email: "",
            reason_for_contact: "",
            reason_for_contact_other: "",
            message: "",
            html: "",
            subject: "",
          }),
          [x, v] = (0, r.useState)({
            name: "",
            email: "",
            reason_for_contact: "",
            reason_for_contact_other: "",
            message: "",
          });
        (0, r.useEffect)(() => {
          s().init({ duration: 400 }),
            a("true" === localStorage.getItem("darkMode"));
          let e = (e) => {
            a(e.detail);
          };
          return (
            window.addEventListener("darkModeChange", e),
            () => {
              window.removeEventListener("darkModeChange", e);
            }
          );
        }, []);
        let y = (e, t) => {
            switch (e) {
              case "email":
                if (!t) return "Please enter email";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))
                  return "Invalid email address";
                return "";
              case "name":
                if (!t) return "Please enter name";
                return "";
              case "reason_for_contact":
                if (!t) return "Please enter reason for contact";
                return "";
              case "reason_for_contact_other":
                if (!t) return "Please enter other reason for contact";
                return "";
              case "message":
                if (!t) return "Please enter message";
                return "";
              default:
                return "";
            }
          },
          j = (e) => {
            e.preventDefault();
            let { name: t, value: a } = e.target;
            w({ ...g, [t]: a });
            let o = y(t, a);
            v({ ...x, [t]: o });
          },
          N = async (t) => {
            t.preventDefault(),
              await window.grecaptcha.ready(() => {
                window.grecaptcha
                  .execute("6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm", {
                    action: "submit",
                  })
                  .then(async (e) => {
                    if (!e) {
                      u.Am.error(
                        "The Google reCaptcha Token is missing, Something went wrong"
                      ),
                        l(!1);
                      return;
                    }
                  })
                  .catch((e) => {
                    l(!1), console.log(e.message);
                  });
              });
            let a = y("email", g.email),
              n = y("name", g.name),
              s = y("reason_for_contact", g.reason_for_contact),
              r = y("reason_for_contact_other", g.reason_for_contact_other),
              i = y("message", g.message);
            var c =
              "Other" == g.reason_for_contact
                ? "<br/>Reason for Contact : " +
                  g.reason_for_contact +
                  "<br/> Other Reason : " +
                  g.reason_for_contact_other
                : "<br/>Reason for Contact : " + g.reason_for_contact;
            if (
              ((g.html =
                "Name : " +
                g.name +
                "<br/>Email : " +
                g.email +
                c +
                "<br/>Message : " +
                g.message),
              (g.subject = "Hex AI : Contact us"),
              w(g),
              a || n || i || s)
            ) {
              v({ email: a, name: n, reason_for_contact: s, message: i });
              return;
            }
            if (!0 == m && r) {
              v({ reason_for_contact_other: r });
              return;
            }
            "Other" == g.reason_for_contact &&
              e.push({
                name: "reason_for_contact_other",
                message: "Please enter other reason for contact",
              }),
              l(!0);
            try {
              let t = (0, b.l)(JSON.stringify(g)),
                a = (0, b.l)(JSON.stringify(e)),
                n = "https://hashai.co.uk/api";
              window.location.hostname.includes("www") &&
                !n.includes("www") &&
                (n = "https://hashai.co.uk/api".replace(
                  /^https:\/\//,
                  "https://www."
                ));
              let s = await fetch("".concat(n, "/sendemail"), {
                  method: "POST",
                  body: JSON.stringify({ data: t, value: a }),
                  headers: { "Content-Type": "application/json" },
                }),
                r = await s.json();
              r && (null == r ? void 0 : r.message)
                ? (u.Am.success("Appreciate you connecting with us!"),
                  w({
                    email: "",
                    name: "",
                    reason_for_contact: "",
                    reason_for_contact_other: "",
                    message: "",
                    html: "",
                    subject: "",
                  }))
                : u.Am.error(
                    (0, o.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: r.error },
                    })
                  );
            } catch (e) {
              console.error("Error submitting form:", e);
            } finally {
              l(!1);
            }
          },
          _ = (e) => {
            if ("twiter" == e)
              window.open("https://x.com/OfficialHashAI", "_blank");
            else if ("telegram" == e)
              window.open("https://t.me/", "_blank");
            else if ("uniswap" == e)
              window.open(
                "https://app.uniswap.org/explore/tokens/ethereum/0xttttttttttttttttttttt",
                "_blank"
              );
            else {
              let e = Date.now();
              window.open(
                "https://www.dextools.io/app/en/ether/pair-explorer/0xpppppppppppppppppppppppppp?t=".concat(
                  e
                ),
                "_blank",
                "noopener,noreferrer"
              );
            }
          },
          k = [
            {
              question: "How can I participate in the compounding pool?",
              answer:
                "All the information regarding the current pool can be found on our DApp. (hyperlink DApp to the DApp)",
            },
            {
              question: " Is the Hex AI team doxxed?",
              answer:
                "The project HEX AI has successfully passed a <a href='https://nft.assuredefi.com/?token=218' target='_blank'>KYC by Assure DeFi</a>, you can find our KYC status here. ",
            },
            {
              question: " Is liquidity locked?",
              answer:
                "100% locked for 12 months from launch, will continue to lock 100% when it expires.",
            },
            { question: "Is the contract renounced?", answer: "No." },
            {
              question: "When will tax be 0%?",
              answer:
                "Hex AI tax is inline with other high end utilities and is necessary for the upkeep of our infrastructure and further developments/operations. We will make a public announcement if/when this changes.",
            },
            {
              question: "Where can I find the tokenomics?",
              answer:
                "You can explore our Tokenomics on our <a href='/about'>Learn page</a>.",
            },
            {
              question: "Why do you compound and not stake?",
              answer:
                "Compounding enables users to earn significantly higher returns over time compared to simple interest-staking models.",
            },
            {
              question: "How much are the rewards and how are they calculated?",
              answer:
                "The rewards are calculated to be proportionate to user holdings deposited into our community pool.",
            },
            {
              question: " Do you have a White Paper?",
              answer:
                "Our White Paper is currently under development. In the meantime, you can view our <a href='https://hashai.s3.eu-west-2.amazonaws.com/storage/pdf/hashai_litepaper_pro.pdf' target='_blank'>Litepaper Pro</a>.",
            },
            {
              question: "How often do pool funds update?",
              answer: "Every 24hrs to 48hrs.",
            },
            {
              question: "How much was raised for private sale?",
              answer: "There was a small selective private sale only.",
            },
            {
              question: "What do you mine?",
              answer:
                "A wide range of L1 and L2 coins are mined including raven, conflux, neox, zna, evr to name a few. Our asic facility mines exclusively BTC.",
            },
          ];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, { title: "Contact Us" }),
            (0, o.jsxs)(c.Z, {
              children: [
                (0, o.jsx)(f(), {
                  src: "https://www.google.com/recaptcha/api.js?render=".concat(
                    "6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm"
                  ),
                }),
                (0, o.jsxs)("div", {
                  className: "contact-sec bg-"
                    .concat(!0 == t ? "white" : "black", " text-")
                    .concat(!0 == t ? "black" : "white"),
                  children: [
                    (0, o.jsxs)("div", {
                      className: "container-fluid px-3 px-lg-5 py-5",
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "row d-flex justify-content-center border-color m-0 p-0 z-1",
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "col-lg-4 col-md-12 col-sm-12 p-5 text-left border-right-contact-sec",
                              "data-aos": "fade-up",
                              children: [
                                (0, o.jsx)("h1", {
                                  className: "react-out-txt orbitron-txt",
                                  children: "Reach Out",
                                }),
                                (0, o.jsx)("p", {
                                  className: "metrophobic-txt",
                                  children:
                                    "Have a question or need assistance? Reach out to our dedicated support team. We're here to help with any inquiries you may have.",
                                }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "d-flex justify-content-start align-items-center",
                                  children: [
                                    (0, o.jsx)("img", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/email-img.svg"
                                      ),
                                      alt: "logo-email",
                                      className: "my-3",
                                      height: "32px",
                                      width: "32px",
                                      unoptimized: !0,
                                    }),
                                    (0, o.jsx)("p", {
                                      className: "m-0 px-2",
                                      children: "Email",
                                    }),
                                  ],
                                })
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "col-lg-8 col-md-12 col-sm-12 p-5 text-".concat(
                                  !0 == t ? "black" : "white",
                                  " px-5"
                                ),
                              children: [
                                (0, o.jsxs)("div", {
                                  className:
                                    "lable-contact d-flex justify-content-start flex-column my-2",
                                  "data-aos": "fade-up",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Full Name",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      required: !0,
                                      value: g.name,
                                      onChange: (e) => j(e),
                                      className: "".concat(
                                        !0 == t
                                          ? "contact-input-light"
                                          : "contact-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your full name..",
                                    }),
                                  ],
                                }),
                                x.name &&
                                  (0, o.jsx)("span", {
                                    className: "text-danger",
                                    children: x.name,
                                  }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "lable-contact d-flex justify-content-start flex-column my-2",
                                  "data-aos": "fade-up",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Email",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "email",
                                      name: "email",
                                      required: !0,
                                      value: g.email,
                                      onChange: (e) => j(e),
                                      className: "".concat(
                                        !0 == t
                                          ? "contact-input-light"
                                          : "contact-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your email address..",
                                    }),
                                  ],
                                }),
                                x.email &&
                                  (0, o.jsx)("span", {
                                    className: "text-danger",
                                    children: x.email,
                                  }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "lable-contact d-flex justify-content-start flex-column my-2",
                                  "data-aos": "fade-up",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Reason for contact",
                                    }),
                                    (0, o.jsxs)("select", {
                                      name: "reason_for_contact",
                                      id: "reason_for_contact",
                                      onChange: (e) => {
                                        let { name: t, value: a } = e.target,
                                          o = y(t, a);
                                        v({ ...x, [t]: o }),
                                          "Other" === e.target.value
                                            ? p(!0)
                                            : p(!1),
                                          (g.reason_for_contact =
                                            e.target.value),
                                          w(g);
                                      },
                                      className: "".concat(
                                        !0 == t
                                          ? "contact-text-area-light"
                                          : "contact-text-area",
                                        " my-2 p-3 metrophobic-txt"
                                      ),
                                      value: g.reason_for_contact,
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "Choose",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Become a Partner",
                                          children: "Become a Partner",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Buy $HEXAI",
                                          children: "Buy $HEXAI",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "General Enquiry",
                                          children: "General Enquiry",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Media and Press",
                                          children: "Media and Press",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Node Rental",
                                          children: "Node Rental",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Other",
                                          children: "Other",
                                        }),
                                      ],
                                    }),
                                    x.reason_for_contact &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: x.reason_for_contact,
                                      }),
                                  ],
                                }),
                                m &&
                                  (0, o.jsx)(o.Fragment, {
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "lable-contact d-flex justify-content-start flex-column",
                                      "data-aos": "fade-up",
                                      children: [
                                        (0, o.jsx)("label", {
                                          className: "orbitron-txt",
                                          children: "Other",
                                        }),
                                        (0, o.jsx)("input", {
                                          type: "text",
                                          name: "reason_for_contact_other",
                                          required: !0,
                                          value: g.reason_for_contact_other,
                                          onChange: (e) => j(e),
                                          className: "".concat(
                                            !0 == t
                                              ? "contact-input-light"
                                              : "contact-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder:
                                            "Enter your other reason..",
                                        }),
                                        x.reason_for_contact_other &&
                                          (0, o.jsx)("span", {
                                            className: "text-danger",
                                            children:
                                              x.reason_for_contact_other,
                                          }),
                                      ],
                                    }),
                                  }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "lable-contact d-flex justify-content-start flex-column my-2",
                                  "data-aos": "fade-up",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Message",
                                    }),
                                    (0, o.jsx)("textarea", {
                                      name: "message",
                                      required: !0,
                                      value: g.message,
                                      onChange: (e) => j(e),
                                      placeholder: "Write your message..",
                                      className: "".concat(
                                        !0 == t
                                          ? "contact-text-area-light"
                                          : "contact-text-area",
                                        " my-2 p-3 metrophobic-txt"
                                      ),
                                      rows: 7,
                                    }),
                                  ],
                                }),
                                x.message &&
                                  (0, o.jsx)("span", {
                                    className: "text-danger",
                                    children: x.message,
                                  }),
                                (0, o.jsx)("div", {
                                  className: "my-3",
                                  "data-aos": "fade-down",
                                  children: (0, o.jsx)("button", {
                                    className: "text-".concat(
                                      t ? "white" : "black",
                                      " custom-btn orbitron-txt my-4"
                                    ),
                                    onClick: (e) => N(e),
                                    disabled: n,
                                    children: n
                                      ? (0, o.jsx)("div", {
                                          className:
                                            "spinner-border spinner-border-sm",
                                          role: "status",
                                          children: (0, o.jsx)("span", {
                                            className: "visually-hidden",
                                            children: "Loading...",
                                          }),
                                        })
                                      : "Submit",
                                  }),
                                }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "col-12 m-0 p-0 ",
                              children: (0, o.jsxs)("div", {
                                className:
                                  "row p-5 row-cols-4 g-4 d-none d-lg-flex border-top m-0 follow",
                                children: [
                                  (0, o.jsx)("div", {
                                    "data-aos": "fade-up",
                                    className: "col mt-0",
                                    onClick: () => _("twiter"),
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                      children: [
                                        (0, o.jsxs)("div", {
                                          className:
                                            "d-flex justify-content-between text-center align-items-center",
                                          children: [
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/twiter-img.svg"
                                              ),
                                              alt: "img",
                                              height: 50,
                                              width: 50,
                                              unoptimized: !0,
                                            }),
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                              ),
                                              className: "arrow",
                                              alt: "img",
                                              height: 20,
                                              width: 20,
                                              unoptimized: !0,
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "contact-social-name orbitron-txt h5 py-4 mb-0",
                                          children: "X",
                                        })
                                      ],
                                    }),
                                  }),
                                  (0, o.jsx)("div", {
                                    "data-aos": "fade-up",
                                    className: "col mt-0",
                                    onClick: () => _("telegram"),
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                      children: [
                                        (0, o.jsxs)("div", {
                                          className:
                                            "d-flex justify-content-between text-center align-items-center",
                                          children: [
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/telegram-img.svg"
                                              ),
                                              alt: "img",
                                              height: 50,
                                              width: 50,
                                              unoptimized: !0,
                                            }),
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                              ),
                                              className: "arrow",
                                              alt: "img",
                                              height: 20,
                                              width: 20,
                                              unoptimized: !0,
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "contact-social-name orbitron-txt h5 py-4 mb-0",
                                          children: "Telegram",
                                        })
                                      ],
                                    }),
                                  }),
                                  (0, o.jsx)("div", {
                                    "data-aos": "fade-up",
                                    className: "col mt-0",
                                    onClick: () => _("uniswap"),
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                      children: [
                                        (0, o.jsxs)("div", {
                                          className:
                                            "d-flex justify-content-between text-center align-items-center",
                                          children: [
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/uniswap.svg"
                                              ),
                                              alt: "img",
                                              height: 50,
                                              width: 50,
                                              unoptimized: !0,
                                            }),
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                              ),
                                              className: "arrow",
                                              alt: "img",
                                              height: 20,
                                              width: 20,
                                              unoptimized: !0,
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "contact-social-name orbitron-txt h5 py-4 mb-0",
                                          children: "Uniswap",
                                        }),
                                        (0, o.jsxs)("p", {
                                          className:
                                            "metrophobic-txt m-0 uniswap",
                                          children: [
                                            " ",
                                            "https://app.uniswap.org/explore/tokens/ethereum/0xttttttttttttttttttttttttttttttt",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, o.jsx)("div", {
                                    "data-aos": "fade-up",
                                    className: "col mt-0",
                                    onClick: () => _("daxtool"),
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                      children: [
                                        (0, o.jsxs)("div", {
                                          className:
                                            "d-flex justify-content-between text-center align-items-center",
                                          children: [
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/dex-tool-img.svg"
                                              ),
                                              alt: "img",
                                              height: 50,
                                              width: 50,
                                              unoptimized: !0,
                                            }),
                                            (0, o.jsx)(d(), {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                              ),
                                              className: "arrow",
                                              alt: "img",
                                              height: 20,
                                              width: 20,
                                              unoptimized: !0,
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "contact-social-name orbitron-txt h5 py-4 mb-0",
                                          children: "DEXTools",
                                        })
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "mobile-dwon-section mt-5 d-lg-none ",
                          children: (0, o.jsxs)("div", {
                            className: "row p-0 row-cols-2 g-4 follow",
                            children: [
                              (0, o.jsx)("div", {
                                "data-aos": "fade-up",
                                className: "col",
                                onClick: () => _("twiter"),
                                children: (0, o.jsxs)("div", {
                                  className:
                                    "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-between text-center align-items-center",
                                      children: [
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/twiter-img.svg"
                                          ),
                                          alt: "img",
                                          height: 50,
                                          width: 50,
                                          unoptimized: !0,
                                        }),
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                          ),
                                          className: "arrow",
                                          alt: "img",
                                          height: 20,
                                          width: 20,
                                          unoptimized: !0,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "contact-social-name orbitron-txt h5 py-4 mb-0",
                                      children: "X",
                                    })
                                  ],
                                }),
                              }),
                              (0, o.jsx)("div", {
                                "data-aos": "fade-up",
                                className: "col",
                                onClick: () => _("telegram"),
                                children: (0, o.jsxs)("div", {
                                  className:
                                    "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-between text-center align-items-center",
                                      children: [
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/telegram-img.svg"
                                          ),
                                          alt: "img",
                                          height: 50,
                                          width: 50,
                                          unoptimized: !0,
                                        }),
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                          ),
                                          className: "arrow",
                                          alt: "img",
                                          height: 20,
                                          width: 20,
                                          unoptimized: !0,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "contact-social-name orbitron-txt h5 py-4 mb-0",
                                      children: "Telegram",
                                    })
                                  ],
                                }),
                              }),
                              (0, o.jsx)("div", {
                                "data-aos": "fade-up",
                                className: "col",
                                onClick: () => _("uniswap"),
                                children: (0, o.jsxs)("div", {
                                  className:
                                    "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-between text-center align-items-center",
                                      children: [
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/uniswap.svg"
                                          ),
                                          alt: "img",
                                          height: 50,
                                          width: 50,
                                          unoptimized: !0,
                                        }),
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                          ),
                                          className: "arrow",
                                          alt: "img",
                                          height: 20,
                                          width: 20,
                                          unoptimized: !0,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "contact-social-name orbitron-txt h5 py-4 mb-0",
                                      children: "Uniswap",
                                    }),
                                    (0, o.jsx)("p", {
                                      className: "metrophobic-txt m-0 uniswap",
                                      children:
                                        "https://app.uniswap.org/explore/tokens/ethereum/0xtttttttttttttttttttttttttttt",
                                    }),
                                  ],
                                }),
                              }),
                              (0, o.jsx)("div", {
                                "data-aos": "fade-up",
                                className: "col",
                                onClick: () => _("daxtool"),
                                children: (0, o.jsxs)("div", {
                                  className:
                                    "card border-color z-0 p-4 cursor-pointer h-100 text-white",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-between text-center align-items-center",
                                      children: [
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/dex-tool-img.svg"
                                          ),
                                          alt: "img",
                                          height: 50,
                                          width: 50,
                                          unoptimized: !0,
                                        }),
                                        (0, o.jsx)(d(), {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/arrow.svg"
                                          ),
                                          className: "arrow",
                                          alt: "img",
                                          height: 20,
                                          width: 20,
                                          unoptimized: !0,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "contact-social-name orbitron-txt h5 py-4 mb-0",
                                      children: "DEXTools",
                                    })
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "faq-sec",
                      children: [
                        (0, o.jsx)("video", {
                          muted: !0,
                          loop: !0,
                          autoPlay: !0,
                          id: "compunityPoolSectionBG",
                          playsInline: !0,
                          children: (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsx)("source", {
                              src: "".concat(
                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/contact/secondary_bg_website.mp4"
                              ),
                              type: "video/mp4",
                            }),
                          }),
                        }),
                        (0, o.jsx)("div", {
                          className: "content",
                          children: (0, o.jsx)("div", {
                            className:
                              "container-fluid w-100 h-100 py-0 py-lg-5",
                            children: (0, o.jsx)("div", {
                              className:
                                "row d-flex justify-content-center m-0 p-0 w-100 pb-5",
                              children: (0, o.jsxs)("div", {
                                className:
                                  "col-lg-8 col-md-12 col-sm-12 col-12 p-0 p-0",
                                children: [
                                  (0, o.jsx)("h2", {
                                    className: "my-3 orbitron-txt h1",
                                    "data-aos": "fade-up",
                                    children: "FAQ",
                                  }),
                                  (0, o.jsx)("div", {
                                    className: "accordion",
                                    id: "accordionFAQ",
                                    children:
                                      null == k
                                        ? void 0
                                        : k.map((e, t) =>
                                            (0, o.jsx)(o.Fragment, {
                                              children: (0, o.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "accordion-item my-3",
                                                  "data-aos": "fade-up",
                                                  children: [
                                                    (0, o.jsx)("h2", {
                                                      className:
                                                        "accordion-header",
                                                      id: "heading-".concat(t),
                                                      children: (0, o.jsxs)(
                                                        "button",
                                                        {
                                                          className:
                                                            "accordion-button faq-sec-bg text-white",
                                                          type: "button",
                                                          "data-bs-toggle":
                                                            "collapse",
                                                          "data-bs-target":
                                                            "#collapse-".concat(
                                                              t
                                                            ),
                                                          "aria-expanded":
                                                            "true",
                                                          "aria-controls":
                                                            "collapse-".concat(
                                                              t
                                                            ),
                                                          children: [
                                                            null == e
                                                              ? void 0
                                                              : e.question,
                                                            (0, o.jsx)("span", {
                                                              className:
                                                                "icon-bar",
                                                            }),
                                                            (0, o.jsx)("span", {
                                                              className:
                                                                "icon-bar",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, o.jsx)("div", {
                                                      id: "collapse-".concat(t),
                                                      className:
                                                        "accordion-collapse collapse ".concat(
                                                          0 == t ? "show" : ""
                                                        ),
                                                      "aria-labelledby":
                                                        "heading1",
                                                      children: (0, o.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "accordion-body faq-sec-bg text-white metrophobic-txt",
                                                          children: (0, o.jsx)(
                                                            "div",
                                                            {
                                                              dangerouslySetInnerHTML:
                                                                {
                                                                  __html:
                                                                    null == e
                                                                      ? void 0
                                                                      : e.answer,
                                                                },
                                                            },
                                                            t
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                "".concat(t)
                                              ),
                                            })
                                          ),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(u.Ix, {
              position: "bottom-left",
              autoClose: 5e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              draggable: !0,
              pauseOnHover: !0,
              theme: t ? "dark" : "light",
              style: { zIndex: 9999 },
            }),
          ],
        });
      };
    },
    37611: function () {},
    13104: function () {},
    42480: function () {},
  },
  function (e) {
    e.O(0, [1664, 1110, 5675, 1250, 9123, 2116, 2888, 9774, 179], function () {
      return e((e.s = 66405));
    }),
      (_N_E = e.O());
  },
]);
