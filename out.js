(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // js/popper.js
  var require_popper = __commonJS({
    "js/popper.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis != "undefined" ? globalThis : e || self).Popper = {});
      }(exports, function(e) {
        "use strict";
        function t(e2) {
          if (e2 == null)
            return window;
          if (e2.toString() !== "[object Window]") {
            var t2 = e2.ownerDocument;
            return t2 && t2.defaultView || window;
          }
          return e2;
        }
        function n(e2) {
          return e2 instanceof t(e2).Element || e2 instanceof Element;
        }
        function r(e2) {
          return e2 instanceof t(e2).HTMLElement || e2 instanceof HTMLElement;
        }
        function o(e2) {
          return typeof ShadowRoot != "undefined" && (e2 instanceof t(e2).ShadowRoot || e2 instanceof ShadowRoot);
        }
        var i = Math.max, a = Math.min, s = Math.round;
        function f(e2, t2) {
          t2 === void 0 && (t2 = false);
          var n2 = e2.getBoundingClientRect(), o2 = 1, i2 = 1;
          if (r(e2) && t2) {
            var a2 = e2.offsetHeight, f2 = e2.offsetWidth;
            f2 > 0 && (o2 = s(n2.width) / f2 || 1), a2 > 0 && (i2 = s(n2.height) / a2 || 1);
          }
          return { width: n2.width / o2, height: n2.height / i2, top: n2.top / i2, right: n2.right / o2, bottom: n2.bottom / i2, left: n2.left / o2, x: n2.left / o2, y: n2.top / i2 };
        }
        function c(e2) {
          var n2 = t(e2);
          return { scrollLeft: n2.pageXOffset, scrollTop: n2.pageYOffset };
        }
        function p(e2) {
          return e2 ? (e2.nodeName || "").toLowerCase() : null;
        }
        function u(e2) {
          return ((n(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
        }
        function l(e2) {
          return f(u(e2)).left + c(e2).scrollLeft;
        }
        function d(e2) {
          return t(e2).getComputedStyle(e2);
        }
        function h(e2) {
          var t2 = d(e2), n2 = t2.overflow, r2 = t2.overflowX, o2 = t2.overflowY;
          return /auto|scroll|overlay|hidden/.test(n2 + o2 + r2);
        }
        function m(e2, n2, o2) {
          o2 === void 0 && (o2 = false);
          var i2, a2, d2 = r(n2), m2 = r(n2) && function(e3) {
            var t2 = e3.getBoundingClientRect(), n3 = s(t2.width) / e3.offsetWidth || 1, r2 = s(t2.height) / e3.offsetHeight || 1;
            return n3 !== 1 || r2 !== 1;
          }(n2), v2 = u(n2), g2 = f(e2, m2), y3 = { scrollLeft: 0, scrollTop: 0 }, b2 = { x: 0, y: 0 };
          return (d2 || !d2 && !o2) && ((p(n2) !== "body" || h(v2)) && (y3 = (i2 = n2) !== t(i2) && r(i2) ? { scrollLeft: (a2 = i2).scrollLeft, scrollTop: a2.scrollTop } : c(i2)), r(n2) ? ((b2 = f(n2, true)).x += n2.clientLeft, b2.y += n2.clientTop) : v2 && (b2.x = l(v2))), { x: g2.left + y3.scrollLeft - b2.x, y: g2.top + y3.scrollTop - b2.y, width: g2.width, height: g2.height };
        }
        function v(e2) {
          var t2 = f(e2), n2 = e2.offsetWidth, r2 = e2.offsetHeight;
          return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), { x: e2.offsetLeft, y: e2.offsetTop, width: n2, height: r2 };
        }
        function g(e2) {
          return p(e2) === "html" ? e2 : e2.assignedSlot || e2.parentNode || (o(e2) ? e2.host : null) || u(e2);
        }
        function y2(e2) {
          return ["html", "body", "#document"].indexOf(p(e2)) >= 0 ? e2.ownerDocument.body : r(e2) && h(e2) ? e2 : y2(g(e2));
        }
        function b(e2, n2) {
          var r2;
          n2 === void 0 && (n2 = []);
          var o2 = y2(e2), i2 = o2 === ((r2 = e2.ownerDocument) == null ? void 0 : r2.body), a2 = t(o2), s2 = i2 ? [a2].concat(a2.visualViewport || [], h(o2) ? o2 : []) : o2, f2 = n2.concat(s2);
          return i2 ? f2 : f2.concat(b(g(s2)));
        }
        function x(e2) {
          return ["table", "td", "th"].indexOf(p(e2)) >= 0;
        }
        function w(e2) {
          return r(e2) && d(e2).position !== "fixed" ? e2.offsetParent : null;
        }
        function O2(e2) {
          for (var n2 = t(e2), o2 = w(e2); o2 && x(o2) && d(o2).position === "static"; )
            o2 = w(o2);
          return o2 && (p(o2) === "html" || p(o2) === "body" && d(o2).position === "static") ? n2 : o2 || function(e3) {
            var t2 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
            if (navigator.userAgent.indexOf("Trident") !== -1 && r(e3) && d(e3).position === "fixed")
              return null;
            for (var n3 = g(e3); r(n3) && ["html", "body"].indexOf(p(n3)) < 0; ) {
              var o3 = d(n3);
              if (o3.transform !== "none" || o3.perspective !== "none" || o3.contain === "paint" || ["transform", "perspective"].indexOf(o3.willChange) !== -1 || t2 && o3.willChange === "filter" || t2 && o3.filter && o3.filter !== "none")
                return n3;
              n3 = n3.parentNode;
            }
            return null;
          }(e2) || n2;
        }
        var j2 = "top", E = "bottom", D2 = "right", A2 = "left", L = "auto", P = [j2, E, D2, A2], M = "start", k2 = "end", W2 = "viewport", B2 = "popper", H2 = P.reduce(function(e2, t2) {
          return e2.concat([t2 + "-" + M, t2 + "-" + k2]);
        }, []), T2 = [].concat(P, [L]).reduce(function(e2, t2) {
          return e2.concat([t2, t2 + "-" + M, t2 + "-" + k2]);
        }, []), R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function S2(e2) {
          var t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
          function o2(e3) {
            n2.add(e3.name), [].concat(e3.requires || [], e3.requiresIfExists || []).forEach(function(e4) {
              if (!n2.has(e4)) {
                var r3 = t2.get(e4);
                r3 && o2(r3);
              }
            }), r2.push(e3);
          }
          return e2.forEach(function(e3) {
            t2.set(e3.name, e3);
          }), e2.forEach(function(e3) {
            n2.has(e3.name) || o2(e3);
          }), r2;
        }
        function C2(e2) {
          return e2.split("-")[0];
        }
        function q2(e2, t2) {
          var n2 = t2.getRootNode && t2.getRootNode();
          if (e2.contains(t2))
            return true;
          if (n2 && o(n2)) {
            var r2 = t2;
            do {
              if (r2 && e2.isSameNode(r2))
                return true;
              r2 = r2.parentNode || r2.host;
            } while (r2);
          }
          return false;
        }
        function V2(e2) {
          return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
        }
        function N2(e2, r2) {
          return r2 === W2 ? V2(function(e3) {
            var n2 = t(e3), r3 = u(e3), o2 = n2.visualViewport, i2 = r3.clientWidth, a2 = r3.clientHeight, s2 = 0, f2 = 0;
            return o2 && (i2 = o2.width, a2 = o2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s2 = o2.offsetLeft, f2 = o2.offsetTop)), { width: i2, height: a2, x: s2 + l(e3), y: f2 };
          }(e2)) : n(r2) ? function(e3) {
            var t2 = f(e3);
            return t2.top = t2.top + e3.clientTop, t2.left = t2.left + e3.clientLeft, t2.bottom = t2.top + e3.clientHeight, t2.right = t2.left + e3.clientWidth, t2.width = e3.clientWidth, t2.height = e3.clientHeight, t2.x = t2.left, t2.y = t2.top, t2;
          }(r2) : V2(function(e3) {
            var t2, n2 = u(e3), r3 = c(e3), o2 = (t2 = e3.ownerDocument) == null ? void 0 : t2.body, a2 = i(n2.scrollWidth, n2.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), s2 = i(n2.scrollHeight, n2.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0), f2 = -r3.scrollLeft + l(e3), p2 = -r3.scrollTop;
            return d(o2 || n2).direction === "rtl" && (f2 += i(n2.clientWidth, o2 ? o2.clientWidth : 0) - a2), { width: a2, height: s2, x: f2, y: p2 };
          }(u(e2)));
        }
        function I2(e2, t2, o2) {
          var s2 = t2 === "clippingParents" ? function(e3) {
            var t3 = b(g(e3)), o3 = ["absolute", "fixed"].indexOf(d(e3).position) >= 0 && r(e3) ? O2(e3) : e3;
            return n(o3) ? t3.filter(function(e4) {
              return n(e4) && q2(e4, o3) && p(e4) !== "body";
            }) : [];
          }(e2) : [].concat(t2), f2 = [].concat(s2, [o2]), c2 = f2[0], u2 = f2.reduce(function(t3, n2) {
            var r2 = N2(e2, n2);
            return t3.top = i(r2.top, t3.top), t3.right = a(r2.right, t3.right), t3.bottom = a(r2.bottom, t3.bottom), t3.left = i(r2.left, t3.left), t3;
          }, N2(e2, c2));
          return u2.width = u2.right - u2.left, u2.height = u2.bottom - u2.top, u2.x = u2.left, u2.y = u2.top, u2;
        }
        function _(e2) {
          return e2.split("-")[1];
        }
        function F2(e2) {
          return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
        }
        function U2(e2) {
          var t2, n2 = e2.reference, r2 = e2.element, o2 = e2.placement, i2 = o2 ? C2(o2) : null, a2 = o2 ? _(o2) : null, s2 = n2.x + n2.width / 2 - r2.width / 2, f2 = n2.y + n2.height / 2 - r2.height / 2;
          switch (i2) {
            case j2:
              t2 = { x: s2, y: n2.y - r2.height };
              break;
            case E:
              t2 = { x: s2, y: n2.y + n2.height };
              break;
            case D2:
              t2 = { x: n2.x + n2.width, y: f2 };
              break;
            case A2:
              t2 = { x: n2.x - r2.width, y: f2 };
              break;
            default:
              t2 = { x: n2.x, y: n2.y };
          }
          var c2 = i2 ? F2(i2) : null;
          if (c2 != null) {
            var p2 = c2 === "y" ? "height" : "width";
            switch (a2) {
              case M:
                t2[c2] = t2[c2] - (n2[p2] / 2 - r2[p2] / 2);
                break;
              case k2:
                t2[c2] = t2[c2] + (n2[p2] / 2 - r2[p2] / 2);
            }
          }
          return t2;
        }
        function z2(e2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e2);
        }
        function X2(e2, t2) {
          return t2.reduce(function(t3, n2) {
            return t3[n2] = e2, t3;
          }, {});
        }
        function Y2(e2, t2) {
          t2 === void 0 && (t2 = {});
          var r2 = t2, o2 = r2.placement, i2 = o2 === void 0 ? e2.placement : o2, a2 = r2.boundary, s2 = a2 === void 0 ? "clippingParents" : a2, c2 = r2.rootBoundary, p2 = c2 === void 0 ? W2 : c2, l2 = r2.elementContext, d2 = l2 === void 0 ? B2 : l2, h2 = r2.altBoundary, m2 = h2 !== void 0 && h2, v2 = r2.padding, g2 = v2 === void 0 ? 0 : v2, y3 = z2(typeof g2 != "number" ? g2 : X2(g2, P)), b2 = d2 === B2 ? "reference" : B2, x2 = e2.rects.popper, w2 = e2.elements[m2 ? b2 : d2], O3 = I2(n(w2) ? w2 : w2.contextElement || u(e2.elements.popper), s2, p2), A3 = f(e2.elements.reference), L2 = U2({ reference: A3, element: x2, strategy: "absolute", placement: i2 }), M2 = V2(Object.assign({}, x2, L2)), k3 = d2 === B2 ? M2 : A3, H3 = { top: O3.top - k3.top + y3.top, bottom: k3.bottom - O3.bottom + y3.bottom, left: O3.left - k3.left + y3.left, right: k3.right - O3.right + y3.right }, T3 = e2.modifiersData.offset;
          if (d2 === B2 && T3) {
            var R2 = T3[i2];
            Object.keys(H3).forEach(function(e3) {
              var t3 = [D2, E].indexOf(e3) >= 0 ? 1 : -1, n2 = [j2, E].indexOf(e3) >= 0 ? "y" : "x";
              H3[e3] += R2[n2] * t3;
            });
          }
          return H3;
        }
        var G2 = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function J() {
          for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
            t2[n2] = arguments[n2];
          return !t2.some(function(e3) {
            return !(e3 && typeof e3.getBoundingClientRect == "function");
          });
        }
        function K2(e2) {
          e2 === void 0 && (e2 = {});
          var t2 = e2, r2 = t2.defaultModifiers, o2 = r2 === void 0 ? [] : r2, i2 = t2.defaultOptions, a2 = i2 === void 0 ? G2 : i2;
          return function(e3, t3, r3) {
            r3 === void 0 && (r3 = a2);
            var i3, s2, f2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, G2, a2), modifiersData: {}, elements: { reference: e3, popper: t3 }, attributes: {}, styles: {} }, c2 = [], p2 = false, u2 = { state: f2, setOptions: function(r4) {
              var i4 = typeof r4 == "function" ? r4(f2.options) : r4;
              l2(), f2.options = Object.assign({}, a2, f2.options, i4), f2.scrollParents = { reference: n(e3) ? b(e3) : e3.contextElement ? b(e3.contextElement) : [], popper: b(t3) };
              var s3, p3, d2 = function(e4) {
                var t4 = S2(e4);
                return R.reduce(function(e5, n2) {
                  return e5.concat(t4.filter(function(e6) {
                    return e6.phase === n2;
                  }));
                }, []);
              }((s3 = [].concat(o2, f2.options.modifiers), p3 = s3.reduce(function(e4, t4) {
                var n2 = e4[t4.name];
                return e4[t4.name] = n2 ? Object.assign({}, n2, t4, { options: Object.assign({}, n2.options, t4.options), data: Object.assign({}, n2.data, t4.data) }) : t4, e4;
              }, {}), Object.keys(p3).map(function(e4) {
                return p3[e4];
              })));
              return f2.orderedModifiers = d2.filter(function(e4) {
                return e4.enabled;
              }), f2.orderedModifiers.forEach(function(e4) {
                var t4 = e4.name, n2 = e4.options, r5 = n2 === void 0 ? {} : n2, o3 = e4.effect;
                if (typeof o3 == "function") {
                  var i5 = o3({ state: f2, name: t4, instance: u2, options: r5 }), a3 = function() {
                  };
                  c2.push(i5 || a3);
                }
              }), u2.update();
            }, forceUpdate: function() {
              if (!p2) {
                var e4 = f2.elements, t4 = e4.reference, n2 = e4.popper;
                if (J(t4, n2)) {
                  f2.rects = { reference: m(t4, O2(n2), f2.options.strategy === "fixed"), popper: v(n2) }, f2.reset = false, f2.placement = f2.options.placement, f2.orderedModifiers.forEach(function(e5) {
                    return f2.modifiersData[e5.name] = Object.assign({}, e5.data);
                  });
                  for (var r4 = 0; r4 < f2.orderedModifiers.length; r4++)
                    if (f2.reset !== true) {
                      var o3 = f2.orderedModifiers[r4], i4 = o3.fn, a3 = o3.options, s3 = a3 === void 0 ? {} : a3, c3 = o3.name;
                      typeof i4 == "function" && (f2 = i4({ state: f2, options: s3, name: c3, instance: u2 }) || f2);
                    } else
                      f2.reset = false, r4 = -1;
                }
              }
            }, update: (i3 = function() {
              return new Promise(function(e4) {
                u2.forceUpdate(), e4(f2);
              });
            }, function() {
              return s2 || (s2 = new Promise(function(e4) {
                Promise.resolve().then(function() {
                  s2 = void 0, e4(i3());
                });
              })), s2;
            }), destroy: function() {
              l2(), p2 = true;
            } };
            if (!J(e3, t3))
              return u2;
            function l2() {
              c2.forEach(function(e4) {
                return e4();
              }), c2 = [];
            }
            return u2.setOptions(r3).then(function(e4) {
              !p2 && r3.onFirstUpdate && r3.onFirstUpdate(e4);
            }), u2;
          };
        }
        var Q2 = { passive: true };
        var Z = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(e2) {
          var n2 = e2.state, r2 = e2.instance, o2 = e2.options, i2 = o2.scroll, a2 = i2 === void 0 || i2, s2 = o2.resize, f2 = s2 === void 0 || s2, c2 = t(n2.elements.popper), p2 = [].concat(n2.scrollParents.reference, n2.scrollParents.popper);
          return a2 && p2.forEach(function(e3) {
            e3.addEventListener("scroll", r2.update, Q2);
          }), f2 && c2.addEventListener("resize", r2.update, Q2), function() {
            a2 && p2.forEach(function(e3) {
              e3.removeEventListener("scroll", r2.update, Q2);
            }), f2 && c2.removeEventListener("resize", r2.update, Q2);
          };
        }, data: {} };
        var $2 = { name: "popperOffsets", enabled: true, phase: "read", fn: function(e2) {
          var t2 = e2.state, n2 = e2.name;
          t2.modifiersData[n2] = U2({ reference: t2.rects.reference, element: t2.rects.popper, strategy: "absolute", placement: t2.placement });
        }, data: {} }, ee2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function te2(e2) {
          var n2, r2 = e2.popper, o2 = e2.popperRect, i2 = e2.placement, a2 = e2.variation, f2 = e2.offsets, c2 = e2.position, p2 = e2.gpuAcceleration, l2 = e2.adaptive, h2 = e2.roundOffsets, m2 = e2.isFixed, v2 = f2.x, g2 = v2 === void 0 ? 0 : v2, y3 = f2.y, b2 = y3 === void 0 ? 0 : y3, x2 = typeof h2 == "function" ? h2({ x: g2, y: b2 }) : { x: g2, y: b2 };
          g2 = x2.x, b2 = x2.y;
          var w2 = f2.hasOwnProperty("x"), L2 = f2.hasOwnProperty("y"), P2 = A2, M2 = j2, W3 = window;
          if (l2) {
            var B3 = O2(r2), H3 = "clientHeight", T3 = "clientWidth";
            if (B3 === t(r2) && d(B3 = u(r2)).position !== "static" && c2 === "absolute" && (H3 = "scrollHeight", T3 = "scrollWidth"), B3 = B3, i2 === j2 || (i2 === A2 || i2 === D2) && a2 === k2)
              M2 = E, b2 -= (m2 && W3.visualViewport ? W3.visualViewport.height : B3[H3]) - o2.height, b2 *= p2 ? 1 : -1;
            if (i2 === A2 || (i2 === j2 || i2 === E) && a2 === k2)
              P2 = D2, g2 -= (m2 && W3.visualViewport ? W3.visualViewport.width : B3[T3]) - o2.width, g2 *= p2 ? 1 : -1;
          }
          var R2, S3 = Object.assign({ position: c2 }, l2 && ee2), C3 = h2 === true ? function(e3) {
            var t2 = e3.x, n3 = e3.y, r3 = window.devicePixelRatio || 1;
            return { x: s(t2 * r3) / r3 || 0, y: s(n3 * r3) / r3 || 0 };
          }({ x: g2, y: b2 }) : { x: g2, y: b2 };
          return g2 = C3.x, b2 = C3.y, p2 ? Object.assign({}, S3, ((R2 = {})[M2] = L2 ? "0" : "", R2[P2] = w2 ? "0" : "", R2.transform = (W3.devicePixelRatio || 1) <= 1 ? "translate(" + g2 + "px, " + b2 + "px)" : "translate3d(" + g2 + "px, " + b2 + "px, 0)", R2)) : Object.assign({}, S3, ((n2 = {})[M2] = L2 ? b2 + "px" : "", n2[P2] = w2 ? g2 + "px" : "", n2.transform = "", n2));
        }
        var ne2 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e2) {
          var t2 = e2.state, n2 = e2.options, r2 = n2.gpuAcceleration, o2 = r2 === void 0 || r2, i2 = n2.adaptive, a2 = i2 === void 0 || i2, s2 = n2.roundOffsets, f2 = s2 === void 0 || s2, c2 = { placement: C2(t2.placement), variation: _(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: o2, isFixed: t2.options.strategy === "fixed" };
          t2.modifiersData.popperOffsets != null && (t2.styles.popper = Object.assign({}, t2.styles.popper, te2(Object.assign({}, c2, { offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: a2, roundOffsets: f2 })))), t2.modifiersData.arrow != null && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, te2(Object.assign({}, c2, { offsets: t2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-placement": t2.placement });
        }, data: {} };
        var re2 = { name: "applyStyles", enabled: true, phase: "write", fn: function(e2) {
          var t2 = e2.state;
          Object.keys(t2.elements).forEach(function(e3) {
            var n2 = t2.styles[e3] || {}, o2 = t2.attributes[e3] || {}, i2 = t2.elements[e3];
            r(i2) && p(i2) && (Object.assign(i2.style, n2), Object.keys(o2).forEach(function(e4) {
              var t3 = o2[e4];
              t3 === false ? i2.removeAttribute(e4) : i2.setAttribute(e4, t3 === true ? "" : t3);
            }));
          });
        }, effect: function(e2) {
          var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
            Object.keys(t2.elements).forEach(function(e3) {
              var o2 = t2.elements[e3], i2 = t2.attributes[e3] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e3) ? t2.styles[e3] : n2[e3]).reduce(function(e4, t3) {
                return e4[t3] = "", e4;
              }, {});
              r(o2) && p(o2) && (Object.assign(o2.style, a2), Object.keys(i2).forEach(function(e4) {
                o2.removeAttribute(e4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        var oe2 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(e2) {
          var t2 = e2.state, n2 = e2.options, r2 = e2.name, o2 = n2.offset, i2 = o2 === void 0 ? [0, 0] : o2, a2 = T2.reduce(function(e3, n3) {
            return e3[n3] = function(e4, t3, n4) {
              var r3 = C2(e4), o3 = [A2, j2].indexOf(r3) >= 0 ? -1 : 1, i3 = typeof n4 == "function" ? n4(Object.assign({}, t3, { placement: e4 })) : n4, a3 = i3[0], s3 = i3[1];
              return a3 = a3 || 0, s3 = (s3 || 0) * o3, [A2, D2].indexOf(r3) >= 0 ? { x: s3, y: a3 } : { x: a3, y: s3 };
            }(n3, t2.rects, i2), e3;
          }, {}), s2 = a2[t2.placement], f2 = s2.x, c2 = s2.y;
          t2.modifiersData.popperOffsets != null && (t2.modifiersData.popperOffsets.x += f2, t2.modifiersData.popperOffsets.y += c2), t2.modifiersData[r2] = a2;
        } }, ie2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ae2(e2) {
          return e2.replace(/left|right|bottom|top/g, function(e3) {
            return ie2[e3];
          });
        }
        var se2 = { start: "end", end: "start" };
        function fe2(e2) {
          return e2.replace(/start|end/g, function(e3) {
            return se2[e3];
          });
        }
        function ce2(e2, t2) {
          t2 === void 0 && (t2 = {});
          var n2 = t2, r2 = n2.placement, o2 = n2.boundary, i2 = n2.rootBoundary, a2 = n2.padding, s2 = n2.flipVariations, f2 = n2.allowedAutoPlacements, c2 = f2 === void 0 ? T2 : f2, p2 = _(r2), u2 = p2 ? s2 ? H2 : H2.filter(function(e3) {
            return _(e3) === p2;
          }) : P, l2 = u2.filter(function(e3) {
            return c2.indexOf(e3) >= 0;
          });
          l2.length === 0 && (l2 = u2);
          var d2 = l2.reduce(function(t3, n3) {
            return t3[n3] = Y2(e2, { placement: n3, boundary: o2, rootBoundary: i2, padding: a2 })[C2(n3)], t3;
          }, {});
          return Object.keys(d2).sort(function(e3, t3) {
            return d2[e3] - d2[t3];
          });
        }
        var pe = { name: "flip", enabled: true, phase: "main", fn: function(e2) {
          var t2 = e2.state, n2 = e2.options, r2 = e2.name;
          if (!t2.modifiersData[r2]._skip) {
            for (var o2 = n2.mainAxis, i2 = o2 === void 0 || o2, a2 = n2.altAxis, s2 = a2 === void 0 || a2, f2 = n2.fallbackPlacements, c2 = n2.padding, p2 = n2.boundary, u2 = n2.rootBoundary, l2 = n2.altBoundary, d2 = n2.flipVariations, h2 = d2 === void 0 || d2, m2 = n2.allowedAutoPlacements, v2 = t2.options.placement, g2 = C2(v2), y3 = f2 || (g2 === v2 || !h2 ? [ae2(v2)] : function(e3) {
              if (C2(e3) === L)
                return [];
              var t3 = ae2(e3);
              return [fe2(e3), t3, fe2(t3)];
            }(v2)), b2 = [v2].concat(y3).reduce(function(e3, n3) {
              return e3.concat(C2(n3) === L ? ce2(t2, { placement: n3, boundary: p2, rootBoundary: u2, padding: c2, flipVariations: h2, allowedAutoPlacements: m2 }) : n3);
            }, []), x2 = t2.rects.reference, w2 = t2.rects.popper, O3 = /* @__PURE__ */ new Map(), P2 = true, k3 = b2[0], W3 = 0; W3 < b2.length; W3++) {
              var B3 = b2[W3], H3 = C2(B3), T3 = _(B3) === M, R2 = [j2, E].indexOf(H3) >= 0, S3 = R2 ? "width" : "height", q3 = Y2(t2, { placement: B3, boundary: p2, rootBoundary: u2, altBoundary: l2, padding: c2 }), V3 = R2 ? T3 ? D2 : A2 : T3 ? E : j2;
              x2[S3] > w2[S3] && (V3 = ae2(V3));
              var N3 = ae2(V3), I3 = [];
              if (i2 && I3.push(q3[H3] <= 0), s2 && I3.push(q3[V3] <= 0, q3[N3] <= 0), I3.every(function(e3) {
                return e3;
              })) {
                k3 = B3, P2 = false;
                break;
              }
              O3.set(B3, I3);
            }
            if (P2)
              for (var F3 = function(e3) {
                var t3 = b2.find(function(t4) {
                  var n3 = O3.get(t4);
                  if (n3)
                    return n3.slice(0, e3).every(function(e4) {
                      return e4;
                    });
                });
                if (t3)
                  return k3 = t3, "break";
              }, U3 = h2 ? 3 : 1; U3 > 0; U3--) {
                if (F3(U3) === "break")
                  break;
              }
            t2.placement !== k3 && (t2.modifiersData[r2]._skip = true, t2.placement = k3, t2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function ue2(e2, t2, n2) {
          return i(e2, a(t2, n2));
        }
        var le2 = { name: "preventOverflow", enabled: true, phase: "main", fn: function(e2) {
          var t2 = e2.state, n2 = e2.options, r2 = e2.name, o2 = n2.mainAxis, s2 = o2 === void 0 || o2, f2 = n2.altAxis, c2 = f2 !== void 0 && f2, p2 = n2.boundary, u2 = n2.rootBoundary, l2 = n2.altBoundary, d2 = n2.padding, h2 = n2.tether, m2 = h2 === void 0 || h2, g2 = n2.tetherOffset, y3 = g2 === void 0 ? 0 : g2, b2 = Y2(t2, { boundary: p2, rootBoundary: u2, padding: d2, altBoundary: l2 }), x2 = C2(t2.placement), w2 = _(t2.placement), L2 = !w2, P2 = F2(x2), k3 = P2 === "x" ? "y" : "x", W3 = t2.modifiersData.popperOffsets, B3 = t2.rects.reference, H3 = t2.rects.popper, T3 = typeof y3 == "function" ? y3(Object.assign({}, t2.rects, { placement: t2.placement })) : y3, R2 = typeof T3 == "number" ? { mainAxis: T3, altAxis: T3 } : Object.assign({ mainAxis: 0, altAxis: 0 }, T3), S3 = t2.modifiersData.offset ? t2.modifiersData.offset[t2.placement] : null, q3 = { x: 0, y: 0 };
          if (W3) {
            if (s2) {
              var V3, N3 = P2 === "y" ? j2 : A2, I3 = P2 === "y" ? E : D2, U3 = P2 === "y" ? "height" : "width", z3 = W3[P2], X3 = z3 + b2[N3], G3 = z3 - b2[I3], J2 = m2 ? -H3[U3] / 2 : 0, K3 = w2 === M ? B3[U3] : H3[U3], Q3 = w2 === M ? -H3[U3] : -B3[U3], Z2 = t2.elements.arrow, $3 = m2 && Z2 ? v(Z2) : { width: 0, height: 0 }, ee3 = t2.modifiersData["arrow#persistent"] ? t2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, te3 = ee3[N3], ne3 = ee3[I3], re3 = ue2(0, B3[U3], $3[U3]), oe3 = L2 ? B3[U3] / 2 - J2 - re3 - te3 - R2.mainAxis : K3 - re3 - te3 - R2.mainAxis, ie3 = L2 ? -B3[U3] / 2 + J2 + re3 + ne3 + R2.mainAxis : Q3 + re3 + ne3 + R2.mainAxis, ae3 = t2.elements.arrow && O2(t2.elements.arrow), se3 = ae3 ? P2 === "y" ? ae3.clientTop || 0 : ae3.clientLeft || 0 : 0, fe3 = (V3 = S3 == null ? void 0 : S3[P2]) != null ? V3 : 0, ce3 = z3 + ie3 - fe3, pe2 = ue2(m2 ? a(X3, z3 + oe3 - fe3 - se3) : X3, z3, m2 ? i(G3, ce3) : G3);
              W3[P2] = pe2, q3[P2] = pe2 - z3;
            }
            if (c2) {
              var le3, de3 = P2 === "x" ? j2 : A2, he2 = P2 === "x" ? E : D2, me3 = W3[k3], ve3 = k3 === "y" ? "height" : "width", ge3 = me3 + b2[de3], ye3 = me3 - b2[he2], be3 = [j2, A2].indexOf(x2) !== -1, xe2 = (le3 = S3 == null ? void 0 : S3[k3]) != null ? le3 : 0, we2 = be3 ? ge3 : me3 - B3[ve3] - H3[ve3] - xe2 + R2.altAxis, Oe2 = be3 ? me3 + B3[ve3] + H3[ve3] - xe2 - R2.altAxis : ye3, je2 = m2 && be3 ? function(e3, t3, n3) {
                var r3 = ue2(e3, t3, n3);
                return r3 > n3 ? n3 : r3;
              }(we2, me3, Oe2) : ue2(m2 ? we2 : ge3, me3, m2 ? Oe2 : ye3);
              W3[k3] = je2, q3[k3] = je2 - me3;
            }
            t2.modifiersData[r2] = q3;
          }
        }, requiresIfExists: ["offset"] };
        var de2 = { name: "arrow", enabled: true, phase: "main", fn: function(e2) {
          var t2, n2 = e2.state, r2 = e2.name, o2 = e2.options, i2 = n2.elements.arrow, a2 = n2.modifiersData.popperOffsets, s2 = C2(n2.placement), f2 = F2(s2), c2 = [A2, D2].indexOf(s2) >= 0 ? "height" : "width";
          if (i2 && a2) {
            var p2 = function(e3, t3) {
              return z2(typeof (e3 = typeof e3 == "function" ? e3(Object.assign({}, t3.rects, { placement: t3.placement })) : e3) != "number" ? e3 : X2(e3, P));
            }(o2.padding, n2), u2 = v(i2), l2 = f2 === "y" ? j2 : A2, d2 = f2 === "y" ? E : D2, h2 = n2.rects.reference[c2] + n2.rects.reference[f2] - a2[f2] - n2.rects.popper[c2], m2 = a2[f2] - n2.rects.reference[f2], g2 = O2(i2), y3 = g2 ? f2 === "y" ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = h2 / 2 - m2 / 2, x2 = p2[l2], w2 = y3 - u2[c2] - p2[d2], L2 = y3 / 2 - u2[c2] / 2 + b2, M2 = ue2(x2, L2, w2), k3 = f2;
            n2.modifiersData[r2] = ((t2 = {})[k3] = M2, t2.centerOffset = M2 - L2, t2);
          }
        }, effect: function(e2) {
          var t2 = e2.state, n2 = e2.options.element, r2 = n2 === void 0 ? "[data-popper-arrow]" : n2;
          r2 != null && (typeof r2 != "string" || (r2 = t2.elements.popper.querySelector(r2))) && q2(t2.elements.popper, r2) && (t2.elements.arrow = r2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function he(e2, t2, n2) {
          return n2 === void 0 && (n2 = { x: 0, y: 0 }), { top: e2.top - t2.height - n2.y, right: e2.right - t2.width + n2.x, bottom: e2.bottom - t2.height + n2.y, left: e2.left - t2.width - n2.x };
        }
        function me2(e2) {
          return [j2, D2, E, A2].some(function(t2) {
            return e2[t2] >= 0;
          });
        }
        var ve2 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(e2) {
          var t2 = e2.state, n2 = e2.name, r2 = t2.rects.reference, o2 = t2.rects.popper, i2 = t2.modifiersData.preventOverflow, a2 = Y2(t2, { elementContext: "reference" }), s2 = Y2(t2, { altBoundary: true }), f2 = he(a2, r2), c2 = he(s2, o2, i2), p2 = me2(f2), u2 = me2(c2);
          t2.modifiersData[n2] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: p2, hasPopperEscaped: u2 }, t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-reference-hidden": p2, "data-popper-escaped": u2 });
        } }, ge2 = K2({ defaultModifiers: [Z, $2, ne2, re2] }), ye2 = [Z, $2, ne2, re2, oe2, pe, le2, de2, ve2], be2 = K2({ defaultModifiers: ye2 });
        e.applyStyles = re2, e.arrow = de2, e.computeStyles = ne2, e.createPopper = be2, e.createPopperLite = ge2, e.defaultModifiers = ye2, e.detectOverflow = Y2, e.eventListeners = Z, e.flip = pe, e.hide = ve2, e.offset = oe2, e.popperGenerator = K2, e.popperOffsets = $2, e.preventOverflow = le2, Object.defineProperty(e, "__esModule", { value: true });
      });
    }
  });

  // js/petite-vue.js
  var tt = Object.defineProperty;
  var nt = (e, t, n) => t in e ? tt(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
  var $ = (e, t, n) => (nt(e, typeof t != "symbol" ? t + "" : t, n), n);
  function st(e, t) {
    const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
    for (let r = 0; r < s.length; r++)
      n[s[r]] = true;
    return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
  }
  function de(e) {
    if (y(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n], r = N(s) ? it(s) : de(s);
        if (r)
          for (const i in r)
            t[i] = r[i];
      }
      return t;
    } else {
      if (N(e))
        return e;
      if (S(e))
        return e;
    }
  }
  var rt = /;(?![^(]*\))/g;
  var ot = /:(.+)/;
  function it(e) {
    const t = {};
    return e.split(rt).forEach((n) => {
      if (n) {
        const s = n.split(ot);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }), t;
  }
  function me(e) {
    let t = "";
    if (N(e))
      t = e;
    else if (y(e))
      for (let n = 0; n < e.length; n++) {
        const s = me(e[n]);
        s && (t += s + " ");
      }
    else if (S(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  function ct(e, t) {
    if (e.length !== t.length)
      return false;
    let n = true;
    for (let s = 0; n && s < e.length; s++)
      n = I(e[s], t[s]);
    return n;
  }
  function I(e, t) {
    if (e === t)
      return true;
    let n = ge(e), s = ge(t);
    if (n || s)
      return n && s ? e.getTime() === t.getTime() : false;
    if (n = y(e), s = y(t), n || s)
      return n && s ? ct(e, t) : false;
    if (n = S(e), s = S(t), n || s) {
      if (!n || !s)
        return false;
      const r = Object.keys(e).length, i = Object.keys(t).length;
      if (r !== i)
        return false;
      for (const c in e) {
        const o = e.hasOwnProperty(c), l = t.hasOwnProperty(c);
        if (o && !l || !o && l || !I(e[c], t[c]))
          return false;
      }
    }
    return String(e) === String(t);
  }
  function G(e, t) {
    return e.findIndex((n) => I(n, t));
  }
  var lt = Object.assign;
  var ft = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  var at = Object.prototype.hasOwnProperty;
  var U = (e, t) => at.call(e, t);
  var y = Array.isArray;
  var Y = (e) => ye(e) === "[object Map]";
  var ge = (e) => e instanceof Date;
  var N = (e) => typeof e == "string";
  var Q = (e) => typeof e == "symbol";
  var S = (e) => e !== null && typeof e == "object";
  var ut = Object.prototype.toString;
  var ye = (e) => ut.call(e);
  var pt = (e) => ye(e).slice(8, -1);
  var X = (e) => N(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var be = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  var ht = /-(\w)/g;
  var dt = be((e) => e.replace(ht, (t, n) => n ? n.toUpperCase() : ""));
  var mt = /\B([A-Z])/g;
  var xe = be((e) => e.replace(mt, "-$1").toLowerCase());
  var gt = (e, t) => !Object.is(e, t);
  var ve = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  var yt;
  function we(e, t) {
    t = t || yt, t && t.active && t.effects.push(e);
  }
  var _e = (e) => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  };
  var Ee = (e) => (e.w & O) > 0;
  var $e = (e) => (e.n & O) > 0;
  var bt = ({ deps: e }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++)
        e[t].w |= O;
  };
  var xt = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Ee(r) && !$e(r) ? r.delete(e) : t[n++] = r, r.w &= ~O, r.n &= ~O;
      }
      t.length = n;
    }
  };
  var ee = /* @__PURE__ */ new WeakMap();
  var B = 0;
  var O = 1;
  var te = 30;
  var z = [];
  var C;
  var W = Symbol("");
  var Se = Symbol("");
  var vt = class {
    constructor(t, n = null, s) {
      this.fn = t, this.scheduler = n, this.active = true, this.deps = [], we(this, s);
    }
    run() {
      if (!this.active)
        return this.fn();
      if (!z.includes(this))
        try {
          return z.push(C = this), $t(), O = 1 << ++B, B <= te ? bt(this) : Oe(this), this.fn();
        } finally {
          B <= te && xt(this), O = 1 << --B, ke(), z.pop();
          const t = z.length;
          C = t > 0 ? z[t - 1] : void 0;
        }
    }
    stop() {
      this.active && (Oe(this), this.onStop && this.onStop(), this.active = false);
    }
  };
  function Oe(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++)
        t[n].delete(e);
      t.length = 0;
    }
  }
  function wt(e, t) {
    e.effect && (e = e.effect.fn);
    const n = new vt(e);
    t && (lt(n, t), t.scope && we(n, t.scope)), (!t || !t.lazy) && n.run();
    const s = n.run.bind(n);
    return s.effect = n, s;
  }
  function _t(e) {
    e.effect.stop();
  }
  var K = true;
  var ne = [];
  function Et() {
    ne.push(K), K = false;
  }
  function $t() {
    ne.push(K), K = true;
  }
  function ke() {
    const e = ne.pop();
    K = e === void 0 ? true : e;
  }
  function F(e, t, n) {
    if (!St())
      return;
    let s = ee.get(e);
    s || ee.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = _e()), Ot(r);
  }
  function St() {
    return K && C !== void 0;
  }
  function Ot(e, t) {
    let n = false;
    B <= te ? $e(e) || (e.n |= O, n = !Ee(e)) : n = !e.has(C), n && (e.add(C), C.deps.push(e));
  }
  function se(e, t, n, s, r, i) {
    const c = ee.get(e);
    if (!c)
      return;
    let o = [];
    if (t === "clear")
      o = [...c.values()];
    else if (n === "length" && y(e))
      c.forEach((l, f) => {
        (f === "length" || f >= s) && o.push(l);
      });
    else
      switch (n !== void 0 && o.push(c.get(n)), t) {
        case "add":
          y(e) ? X(n) && o.push(c.get("length")) : (o.push(c.get(W)), Y(e) && o.push(c.get(Se)));
          break;
        case "delete":
          y(e) || (o.push(c.get(W)), Y(e) && o.push(c.get(Se)));
          break;
        case "set":
          Y(e) && o.push(c.get(W));
          break;
      }
    if (o.length === 1)
      o[0] && Te(o[0]);
    else {
      const l = [];
      for (const f of o)
        f && l.push(...f);
      Te(_e(l));
    }
  }
  function Te(e, t) {
    for (const n of y(e) ? e : [...e])
      (n !== C || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
  }
  var kt = st("__proto__,__v_isRef,__isVue");
  var Ae = new Set(Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(Q));
  var Tt = Me();
  var At = Me(true);
  var Re = Rt();
  function Rt() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const s = j(this);
        for (let i = 0, c = this.length; i < c; i++)
          F(s, "get", i + "");
        const r = s[t](...n);
        return r === -1 || r === false ? s[t](...n.map(j)) : r;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        Et();
        const s = j(this)[t].apply(this, n);
        return ke(), s;
      };
    }), e;
  }
  function Me(e = false, t = false) {
    return function(s, r, i) {
      if (r === "__v_isReactive")
        return !e;
      if (r === "__v_isReadonly")
        return e;
      if (r === "__v_raw" && i === (e ? t ? zt : je : t ? Bt : Ce).get(s))
        return s;
      const c = y(s);
      if (!e && c && U(Re, r))
        return Reflect.get(Re, r, i);
      const o = Reflect.get(s, r, i);
      return (Q(r) ? Ae.has(r) : kt(r)) || (e || F(s, "get", r), t) ? o : re(o) ? !c || !X(r) ? o.value : o : S(o) ? e ? Ht(o) : D(o) : o;
    };
  }
  var Mt = Ct();
  function Ct(e = false) {
    return function(n, s, r, i) {
      let c = n[s];
      if (!e && !Lt(r) && (r = j(r), c = j(c), !y(n) && re(c) && !re(r)))
        return c.value = r, true;
      const o = y(n) && X(s) ? Number(s) < n.length : U(n, s), l = Reflect.set(n, s, r, i);
      return n === j(i) && (o ? gt(r, c) && se(n, "set", s, r) : se(n, "add", s, r)), l;
    };
  }
  function jt(e, t) {
    const n = U(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && se(e, "delete", t, void 0), s;
  }
  function Pt(e, t) {
    const n = Reflect.has(e, t);
    return (!Q(t) || !Ae.has(t)) && F(e, "has", t), n;
  }
  function It(e) {
    return F(e, "iterate", y(e) ? "length" : W), Reflect.ownKeys(e);
  }
  var Nt = { get: Tt, set: Mt, deleteProperty: jt, has: Pt, ownKeys: It };
  var Kt = { get: At, set(e, t) {
    return true;
  }, deleteProperty(e, t) {
    return true;
  } };
  var Ce = /* @__PURE__ */ new WeakMap();
  var Bt = /* @__PURE__ */ new WeakMap();
  var je = /* @__PURE__ */ new WeakMap();
  var zt = /* @__PURE__ */ new WeakMap();
  function Dt(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Vt(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Dt(pt(e));
  }
  function D(e) {
    return e && e.__v_isReadonly ? e : Pe(e, false, Nt, null, Ce);
  }
  function Ht(e) {
    return Pe(e, true, Kt, null, je);
  }
  function Pe(e, t, n, s, r) {
    if (!S(e) || e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const i = r.get(e);
    if (i)
      return i;
    const c = Vt(e);
    if (c === 0)
      return e;
    const o = new Proxy(e, c === 2 ? s : n);
    return r.set(e, o), o;
  }
  function Lt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function j(e) {
    const t = e && e.__v_raw;
    return t ? j(t) : e;
  }
  function re(e) {
    return Boolean(e && e.__v_isRef === true);
  }
  Promise.resolve();
  var oe = false;
  var q = [];
  var Wt = Promise.resolve();
  var V = (e) => Wt.then(e);
  var Ie = (e) => {
    q.includes(e) || q.push(e), oe || (oe = true, V(Ft));
  };
  var Ft = () => {
    for (const e of q)
      e();
    q.length = 0, oe = false;
  };
  var qt = /^(spellcheck|draggable|form|list|type)$/;
  var ie = ({ el: e, get: t, effect: n, arg: s, modifiers: r }) => {
    let i;
    s === "class" && (e._class = e.className), n(() => {
      let c = t();
      if (s)
        (r == null ? void 0 : r.camel) && (s = dt(s)), ce(e, s, c, i);
      else {
        for (const o in c)
          ce(e, o, c[o], i && i[o]);
        for (const o in i)
          (!c || !(o in c)) && ce(e, o, null);
      }
      i = c;
    });
  };
  var ce = (e, t, n, s) => {
    if (t === "class")
      e.setAttribute("class", me(e._class ? [e._class, n] : n) || "");
    else if (t === "style") {
      n = de(n);
      const { style: r } = e;
      if (!n)
        e.removeAttribute("style");
      else if (N(n))
        n !== s && (r.cssText = n);
      else {
        for (const i in n)
          le(r, i, n[i]);
        if (s && !N(s))
          for (const i in s)
            n[i] == null && le(r, i, "");
      }
    } else
      !(e instanceof SVGElement) && t in e && !qt.test(t) ? (e[t] = n, t === "value" && (e._value = n)) : t === "true-value" ? e._trueValue = n : t === "false-value" ? e._falseValue = n : n != null ? e.setAttribute(t, n) : e.removeAttribute(t);
  };
  var Ne = /\s*!important$/;
  var le = (e, t, n) => {
    y(n) ? n.forEach((s) => le(e, t, s)) : t.startsWith("--") ? e.setProperty(t, n) : Ne.test(n) ? e.setProperty(xe(t), n.replace(Ne, ""), "important") : e[t] = n;
  };
  var k = (e, t) => {
    const n = e.getAttribute(t);
    return n != null && e.removeAttribute(t), n;
  };
  var T = (e, t, n, s) => {
    e.addEventListener(t, n, s);
  };
  var Jt = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
  var Zt = ["ctrl", "shift", "alt", "meta"];
  var Gt = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Zt.some((n) => e[`${n}Key`] && !t[n]) };
  var Ke = ({ el: e, get: t, exp: n, arg: s, modifiers: r }) => {
    if (!s)
      return;
    let i = Jt.test(n) ? t(`(e => ${n}(e))`) : t(`($event => { ${n} })`);
    if (s === "vue:mounted") {
      V(i);
      return;
    } else if (s === "vue:unmounted")
      return () => i();
    if (r) {
      s === "click" && (r.right && (s = "contextmenu"), r.middle && (s = "mouseup"));
      const c = i;
      i = (o) => {
        if (!("key" in o && !(xe(o.key) in r))) {
          for (const l in r) {
            const f = Gt[l];
            if (f && f(o, r))
              return;
          }
          return c(o);
        }
      };
    }
    T(e, s, i, r);
  };
  var Ut = ({ el: e, get: t, effect: n }) => {
    const s = e.style.display;
    n(() => {
      e.style.display = t() ? s : "none";
    });
  };
  var Be = ({ el: e, get: t, effect: n }) => {
    n(() => {
      e.textContent = ze(t());
    });
  };
  var ze = (e) => e == null ? "" : S(e) ? JSON.stringify(e, null, 2) : String(e);
  var Yt = ({ el: e, get: t, effect: n }) => {
    n(() => {
      e.innerHTML = t();
    });
  };
  var Qt = ({ el: e, exp: t, get: n, effect: s, modifiers: r }) => {
    const i = e.type, c = n(`(val) => { ${t} = val }`), { trim: o, number: l = i === "number" } = r || {};
    if (e.tagName === "SELECT") {
      const f = e;
      T(e, "change", () => {
        const a = Array.prototype.filter.call(f.options, (u) => u.selected).map((u) => l ? ve(A(u)) : A(u));
        c(f.multiple ? a : a[0]);
      }), s(() => {
        const a = n(), u = f.multiple;
        for (let p = 0, x = f.options.length; p < x; p++) {
          const b = f.options[p], v = A(b);
          if (u)
            y(a) ? b.selected = G(a, v) > -1 : b.selected = a.has(v);
          else if (I(A(b), a)) {
            f.selectedIndex !== p && (f.selectedIndex = p);
            return;
          }
        }
        !u && f.selectedIndex !== -1 && (f.selectedIndex = -1);
      });
    } else if (i === "checkbox") {
      T(e, "change", () => {
        const a = n(), u = e.checked;
        if (y(a)) {
          const p = A(e), x = G(a, p), b = x !== -1;
          if (u && !b)
            c(a.concat(p));
          else if (!u && b) {
            const v = [...a];
            v.splice(x, 1), c(v);
          }
        } else
          c(De(e, u));
      });
      let f;
      s(() => {
        const a = n();
        y(a) ? e.checked = G(a, A(e)) > -1 : a !== f && (e.checked = I(a, De(e, true))), f = a;
      });
    } else if (i === "radio") {
      T(e, "change", () => {
        c(A(e));
      });
      let f;
      s(() => {
        const a = n();
        a !== f && (e.checked = I(a, A(e)));
      });
    } else {
      const f = (a) => o ? a.trim() : l ? ve(a) : a;
      T(e, "compositionstart", Xt), T(e, "compositionend", en), T(e, (r == null ? void 0 : r.lazy) ? "change" : "input", () => {
        e.composing || c(f(e.value));
      }), o && T(e, "change", () => {
        e.value = e.value.trim();
      }), s(() => {
        if (e.composing)
          return;
        const a = e.value, u = n();
        document.activeElement === e && f(a) === u || a !== u && (e.value = u);
      });
    }
  };
  var A = (e) => "_value" in e ? e._value : e.value;
  var De = (e, t) => {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  };
  var Xt = (e) => {
    e.target.composing = true;
  };
  var en = (e) => {
    const t = e.target;
    t.composing && (t.composing = false, tn(t, "input"));
  };
  var tn = (e, t) => {
    const n = document.createEvent("HTMLEvents");
    n.initEvent(t, true, true), e.dispatchEvent(n);
  };
  var Ve = /* @__PURE__ */ Object.create(null);
  var H = (e, t, n) => He(e, `return(${t})`, n);
  var He = (e, t, n) => {
    const s = Ve[t] || (Ve[t] = nn(t));
    try {
      return s(e, n);
    } catch (r) {
      console.error(r);
    }
  };
  var nn = (e) => {
    try {
      return new Function("$data", "$el", `with($data){${e}}`);
    } catch (t) {
      return console.error(`${t.message} in expression: ${e}`), () => {
      };
    }
  };
  var sn = ({ el: e, ctx: t, exp: n, effect: s }) => {
    V(() => s(() => He(t.scope, n, e)));
  };
  var rn = { bind: ie, on: Ke, show: Ut, text: Be, html: Yt, model: Qt, effect: sn };
  var on = (e, t, n) => {
    const s = e.parentElement, r = new Comment("v-if");
    s.insertBefore(r, e);
    const i = [{ exp: t, el: e }];
    let c, o;
    for (; (c = e.nextElementSibling) && (o = null, k(c, "v-else") === "" || (o = k(c, "v-else-if"))); )
      s.removeChild(c), i.push({ exp: o, el: c });
    const l = e.nextSibling;
    s.removeChild(e);
    let f, a = -1;
    const u = () => {
      f && (s.insertBefore(r, f.el), f.remove(), f = void 0);
    };
    return n.effect(() => {
      for (let p = 0; p < i.length; p++) {
        const { exp: x, el: b } = i[p];
        if (!x || H(n.scope, x)) {
          p !== a && (u(), f = new ue(b, n), f.insert(s, r), s.removeChild(r), a = p);
          return;
        }
      }
      a = -1, u();
    }), l;
  };
  var cn = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var Le = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var ln = /^\(|\)$/g;
  var fn = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/;
  var an = (e, t, n) => {
    const s = t.match(cn);
    if (!s)
      return;
    const r = e.nextSibling, i = e.parentElement, c = new Text("");
    i.insertBefore(c, e), i.removeChild(e);
    const o = s[2].trim();
    let l = s[1].trim().replace(ln, "").trim(), f, a = false, u, p, x = "key", b = e.getAttribute(x) || e.getAttribute(x = ":key") || e.getAttribute(x = "v-bind:key");
    b && (e.removeAttribute(x), x === "key" && (b = JSON.stringify(b)));
    let v;
    (v = l.match(Le)) && (l = l.replace(Le, "").trim(), u = v[1].trim(), v[2] && (p = v[2].trim())), (v = l.match(fn)) && (f = v[1].split(",").map((m) => m.trim()), a = l[0] === "[");
    let pe = false, R, L, J;
    const et = (m) => {
      const w = /* @__PURE__ */ new Map(), h = [];
      if (y(m))
        for (let d = 0; d < m.length; d++)
          h.push(Z(w, m[d], d));
      else if (typeof m == "number")
        for (let d = 0; d < m; d++)
          h.push(Z(w, d + 1, d));
      else if (S(m)) {
        let d = 0;
        for (const g in m)
          h.push(Z(w, m[g], d++, g));
      }
      return [h, w];
    }, Z = (m, w, h, d) => {
      const g = {};
      f ? f.forEach((M, E) => g[M] = w[a ? E : M]) : g[l] = w, d ? (u && (g[u] = d), p && (g[p] = h)) : u && (g[u] = h);
      const P = Ge(n, g), _ = b ? H(P.scope, b) : h;
      return m.set(_, h), P.key = _, P;
    }, he = (m, w) => {
      const h = new ue(e, m);
      return h.key = m.key, h.insert(i, w), h;
    };
    return n.effect(() => {
      const m = H(n.scope, o), w = J;
      if ([L, J] = et(m), !pe)
        R = L.map((h) => he(h, c)), pe = true;
      else {
        for (let _ = 0; _ < R.length; _++)
          J.has(R[_].key) || R[_].remove();
        const h = [];
        let d = L.length, g, P;
        for (; d--; ) {
          const _ = L[d], M = w.get(_.key);
          let E;
          M == null ? E = he(_, g ? g.el : c) : (E = R[M], Object.assign(E.ctx.scope, _.scope), M !== d && (R[M + 1] !== g || P === g) && (P = E, E.insert(i, g ? g.el : c))), h.unshift(g = E);
        }
        R = h;
      }
    }), r;
  };
  var We = ({ el: e, ctx: { scope: { $refs: t } }, get: n, effect: s }) => {
    let r;
    return s(() => {
      const i = n();
      t[i] = e, r && i !== r && delete t[r], r = i;
    }), () => {
      r && delete t[r];
    };
  };
  var un = /^(?:v-|:|@)/;
  var pn = /\.([\w-]+)/g;
  var fe = false;
  var Fe = (e, t) => {
    const n = e.nodeType;
    if (n === 1) {
      const s = e;
      if (s.hasAttribute("v-pre"))
        return;
      k(s, "v-cloak");
      let r;
      if (r = k(s, "v-if"))
        return on(s, r, t);
      if (r = k(s, "v-for"))
        return an(s, r, t);
      if ((r = k(s, "v-scope")) || r === "") {
        const o = r ? H(t.scope, r) : {};
        t = Ge(t, o), o.$template && hn(s, o.$template);
      }
      const i = k(s, "v-once") != null;
      i && (fe = true), (r = k(s, "ref")) && ae(s, We, `"${r}"`, t), qe(s, t);
      const c = [];
      for (const { name: o, value: l } of [...s.attributes])
        un.test(o) && o !== "v-cloak" && (o === "v-model" ? c.unshift([o, l]) : o[0] === "@" || /^v-on\b/.test(o) ? c.push([o, l]) : Je(s, o, l, t));
      for (const [o, l] of c)
        Je(s, o, l, t);
      i && (fe = false);
    } else if (n === 3) {
      const s = e.data;
      if (s.includes(t.delimiters[0])) {
        let r = [], i = 0, c;
        for (; c = t.delimitersRE.exec(s); ) {
          const o = s.slice(i, c.index);
          o && r.push(JSON.stringify(o)), r.push(`$s(${c[1]})`), i = c.index + c[0].length;
        }
        i < s.length && r.push(JSON.stringify(s.slice(i))), ae(e, Be, r.join("+"), t);
      }
    } else
      n === 11 && qe(e, t);
  };
  var qe = (e, t) => {
    let n = e.firstChild;
    for (; n; )
      n = Fe(n, t) || n.nextSibling;
  };
  var Je = (e, t, n, s) => {
    let r, i, c;
    if (t = t.replace(pn, (o, l) => ((c || (c = {}))[l] = true, "")), t[0] === ":")
      r = ie, i = t.slice(1);
    else if (t[0] === "@")
      r = Ke, i = t.slice(1);
    else {
      const o = t.indexOf(":"), l = o > 0 ? t.slice(2, o) : t.slice(2);
      r = rn[l] || s.dirs[l], i = o > 0 ? t.slice(o + 1) : void 0;
    }
    r && (r === ie && i === "ref" && (r = We), ae(e, r, n, s, i, c), e.removeAttribute(t));
  };
  var ae = (e, t, n, s, r, i) => {
    const c = t({ el: e, get: (o = n) => H(s.scope, o, e), effect: s.effect, ctx: s, exp: n, arg: r, modifiers: i });
    c && s.cleanups.push(c);
  };
  var hn = (e, t) => {
    if (t[0] === "#") {
      const n = document.querySelector(t);
      e.appendChild(n.content.cloneNode(true));
      return;
    }
    e.innerHTML = t;
  };
  var Ze = (e) => {
    const t = { delimiters: ["{{", "}}"], delimitersRE: /\{\{([^]+?)\}\}/g, ...e, scope: e ? e.scope : D({}), dirs: e ? e.dirs : {}, effects: [], blocks: [], cleanups: [], effect: (n) => {
      if (fe)
        return Ie(n), n;
      const s = wt(n, { scheduler: () => Ie(s) });
      return t.effects.push(s), s;
    } };
    return t;
  };
  var Ge = (e, t = {}) => {
    const n = e.scope, s = Object.create(n);
    Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)), s.$refs = Object.create(n.$refs);
    const r = D(new Proxy(s, { set(i, c, o, l) {
      return l === r && !i.hasOwnProperty(c) ? Reflect.set(n, c, o) : Reflect.set(i, c, o, l);
    } }));
    return Ue(r), { ...e, scope: r };
  };
  var Ue = (e) => {
    for (const t of Object.keys(e))
      typeof e[t] == "function" && (e[t] = e[t].bind(e));
  };
  var ue = class {
    constructor(t, n, s = false) {
      $(this, "template");
      $(this, "ctx");
      $(this, "key");
      $(this, "parentCtx");
      $(this, "isFragment");
      $(this, "start");
      $(this, "end");
      this.isFragment = t instanceof HTMLTemplateElement, s ? this.template = t : this.isFragment ? this.template = t.content.cloneNode(true) : this.template = t.cloneNode(true), s ? this.ctx = n : (this.parentCtx = n, n.blocks.push(this), this.ctx = Ze(n)), Fe(this.template, this.ctx);
    }
    get el() {
      return this.start || this.template;
    }
    insert(t, n = null) {
      if (this.isFragment) {
        if (this.start) {
          let s = this.start, r;
          for (; s && (r = s.nextSibling, t.insertBefore(s, n), s !== this.end); )
            s = r;
        } else
          this.start = new Text(""), this.end = new Text(""), t.insertBefore(this.end, n), t.insertBefore(this.start, this.end), t.insertBefore(this.template, this.end);
      } else
        t.insertBefore(this.template, n);
    }
    remove() {
      if (this.parentCtx && ft(this.parentCtx.blocks, this), this.start) {
        const t = this.start.parentNode;
        let n = this.start, s;
        for (; n && (s = n.nextSibling, t.removeChild(n), n !== this.end); )
          n = s;
      } else
        this.template.parentNode.removeChild(this.template);
      this.teardown();
    }
    teardown() {
      this.ctx.blocks.forEach((t) => {
        t.teardown();
      }), this.ctx.effects.forEach(_t), this.ctx.cleanups.forEach((t) => t());
    }
  };
  var Ye = (e) => e.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
  var Qe = (e) => {
    const t = Ze();
    if (e && (t.scope = D(e), Ue(t.scope), e.$delimiters)) {
      const [s, r] = t.delimiters = e.$delimiters;
      t.delimitersRE = new RegExp(Ye(s) + "([^]+?)" + Ye(r), "g");
    }
    t.scope.$s = ze, t.scope.$nextTick = V, t.scope.$refs = /* @__PURE__ */ Object.create(null);
    let n;
    return { directive(s, r) {
      return r ? (t.dirs[s] = r, this) : t.dirs[s];
    }, mount(s) {
      if (typeof s == "string" && (s = document.querySelector(s), !s))
        return;
      s = s || document.documentElement;
      let r;
      return s.hasAttribute("v-scope") ? r = [s] : r = [...s.querySelectorAll("[v-scope]")].filter((i) => !i.matches("[v-scope] [v-scope]")), r.length || (r = [s]), n = r.map((i) => new ue(i, t, true)), this;
    }, unmount() {
      n.forEach((s) => s.teardown());
    } };
  };
  var Xe = document.currentScript;
  Xe && Xe.hasAttribute("init") && Qe().mount();

  // js/bs-esm-min.js
  var Popper = __toESM(require_popper());
  var TRANSITION_END = "transitionend";
  var getUID = (e) => {
    do {
      e += Math.floor(1e6 * Math.random());
    } while (document.getElementById(e));
    return e;
  };
  var getSelector = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let i = e.getAttribute("href");
      if (!i || !i.includes("#") && !i.startsWith("."))
        return null;
      i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), t = i && i !== "#" ? i.trim() : null;
    }
    return t;
  };
  var getSelectorFromElement = (e) => {
    const t = getSelector(e);
    return t && document.querySelector(t) ? t : null;
  };
  var getElementFromSelector = (e) => {
    const t = getSelector(e);
    return t ? document.querySelector(t) : null;
  };
  var getTransitionDurationFromElement = (e) => {
    if (!e)
      return 0;
    let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e);
    const n = Number.parseFloat(t), s = Number.parseFloat(i);
    return n || s ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
  };
  var triggerTransitionEnd = (e) => {
    e.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (e) => !(!e || typeof e != "object") && (e.jquery !== void 0 && (e = e[0]), e.nodeType !== void 0);
  var getElement = (e) => isElement(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null;
  var typeCheckConfig = (e, t, i) => {
    Object.keys(i).forEach((n) => {
      const s = i[n], o = t[n], r = o && isElement(o) ? "element" : (a = o) == null ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(s).test(r))
        throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
    });
  };
  var isVisible = (e) => !(!isElement(e) || e.getClientRects().length === 0) && getComputedStyle(e).getPropertyValue("visibility") === "visible";
  var isDisabled = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (e.disabled !== void 0 ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false");
  var findShadowRoot = (e) => {
    if (!document.documentElement.attachShadow)
      return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
  };
  var noop = () => {
  };
  var reflow = (e) => {
    e.offsetHeight;
  };
  var getjQuery = () => {
    const { jQuery: e } = window;
    return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
  };
  var DOMContentLoadedCallbacks = [];
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (e) => {
    var t;
    t = () => {
      const t2 = getjQuery();
      if (t2) {
        const i = e.NAME, n = t2.fn[i];
        t2.fn[i] = e.jQueryInterface, t2.fn[i].Constructor = e, t2.fn[i].noConflict = () => (t2.fn[i] = n, e.jQueryInterface);
      }
    }, document.readyState === "loading" ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", () => {
      DOMContentLoadedCallbacks.forEach((e2) => e2());
    }), DOMContentLoadedCallbacks.push(t)) : t();
  };
  var execute = (e) => {
    typeof e == "function" && e();
  };
  var executeAfterTransition = (e, t, i = true) => {
    if (!i)
      return void execute(e);
    const n = getTransitionDurationFromElement(t) + 5;
    let s = false;
    const o = ({ target: i2 }) => {
      i2 === t && (s = true, t.removeEventListener(TRANSITION_END, o), execute(e));
    };
    t.addEventListener(TRANSITION_END, o), setTimeout(() => {
      s || triggerTransitionEnd(t);
    }, n);
  };
  var getNextActiveElement = (e, t, i, n) => {
    let s = e.indexOf(t);
    if (s === -1)
      return e[!i && n ? e.length - 1 : 0];
    const o = e.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), e[Math.max(0, Math.min(s, o - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function getUidEvent(e, t) {
    return t && `${t}::${uidEvent++}` || e.uidEvent || uidEvent++;
  }
  function getEvent(e) {
    const t = getUidEvent(e);
    return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
  }
  function bootstrapHandler(e, t) {
    return function i(n) {
      return n.delegateTarget = e, i.oneOff && EventHandler.off(e, n.type, t), t.apply(e, [n]);
    };
  }
  function bootstrapDelegationHandler(e, t, i) {
    return function n(s) {
      const o = e.querySelectorAll(t);
      for (let { target: r } = s; r && r !== this; r = r.parentNode)
        for (let a = o.length; a--; )
          if (o[a] === r)
            return s.delegateTarget = r, n.oneOff && EventHandler.off(e, s.type, t, i), i.apply(r, [s]);
      return null;
    };
  }
  function findHandler(e, t, i = null) {
    const n = Object.keys(e);
    for (let s = 0, o = n.length; s < o; s++) {
      const o2 = e[n[s]];
      if (o2.originalHandler === t && o2.delegationSelector === i)
        return o2;
    }
    return null;
  }
  function normalizeParams(e, t, i) {
    const n = typeof t == "string", s = n ? i : t;
    let o = getTypeEvent(e);
    return nativeEvents.has(o) || (o = e), [n, s, o];
  }
  function addHandler(e, t, i, n, s) {
    if (typeof t != "string" || !e)
      return;
    if (i || (i = n, n = null), customEventsRegex.test(t)) {
      const e2 = (e3) => function(t2) {
        if (!t2.relatedTarget || t2.relatedTarget !== t2.delegateTarget && !t2.delegateTarget.contains(t2.relatedTarget))
          return e3.call(this, t2);
      };
      n ? n = e2(n) : i = e2(i);
    }
    const [o, r, a] = normalizeParams(t, i, n), l = getEvent(e), c = l[a] || (l[a] = {}), E = findHandler(c, r, o ? i : null);
    if (E)
      return void (E.oneOff = E.oneOff && s);
    const _ = getUidEvent(r, t.replace(namespaceRegex, "")), h = o ? bootstrapDelegationHandler(e, i, n) : bootstrapHandler(e, i);
    h.delegationSelector = o ? i : null, h.originalHandler = r, h.oneOff = s, h.uidEvent = _, c[_] = h, e.addEventListener(a, h, o);
  }
  function removeHandler(e, t, i, n, s) {
    const o = findHandler(t[i], n, s);
    o && (e.removeEventListener(i, o, Boolean(s)), delete t[i][o.uidEvent]);
  }
  function removeNamespacedHandlers(e, t, i, n) {
    const s = t[i] || {};
    Object.keys(s).forEach((o) => {
      if (o.includes(n)) {
        const n2 = s[o];
        removeHandler(e, t, i, n2.originalHandler, n2.delegationSelector);
      }
    });
  }
  function getTypeEvent(e) {
    return e = e.replace(stripNameRegex, ""), customEvents[e] || e;
  }
  var EventHandler = { on(e, t, i, n) {
    addHandler(e, t, i, n, false);
  }, one(e, t, i, n) {
    addHandler(e, t, i, n, true);
  }, off(e, t, i, n) {
    if (typeof t != "string" || !e)
      return;
    const [s, o, r] = normalizeParams(t, i, n), a = r !== t, l = getEvent(e), c = t.startsWith(".");
    if (o !== void 0) {
      if (!l || !l[r])
        return;
      return void removeHandler(e, l, r, o, s ? i : null);
    }
    c && Object.keys(l).forEach((i2) => {
      removeNamespacedHandlers(e, l, i2, t.slice(1));
    });
    const E = l[r] || {};
    Object.keys(E).forEach((i2) => {
      const n2 = i2.replace(stripUidRegex, "");
      if (!a || t.includes(n2)) {
        const t2 = E[i2];
        removeHandler(e, l, r, t2.originalHandler, t2.delegationSelector);
      }
    });
  }, trigger(e, t, i) {
    if (typeof t != "string" || !e)
      return null;
    const n = getjQuery(), s = getTypeEvent(t), o = t !== s, r = nativeEvents.has(s);
    let a, l = true, c = true, E = false, _ = null;
    return o && n && (a = n.Event(t, i), n(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), E = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(s, l, true)) : _ = new CustomEvent(t, { bubbles: l, cancelable: true }), i !== void 0 && Object.keys(i).forEach((e2) => {
      Object.defineProperty(_, e2, { get: () => i[e2] });
    }), E && _.preventDefault(), c && e.dispatchEvent(_), _.defaultPrevented && a !== void 0 && a.preventDefault(), _;
  } };
  var elementMap = /* @__PURE__ */ new Map();
  var Data = { set(e, t, i) {
    elementMap.has(e) || elementMap.set(e, /* @__PURE__ */ new Map());
    const n = elementMap.get(e);
    n.has(t) || n.size === 0 ? n.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
  }, get: (e, t) => elementMap.has(e) && elementMap.get(e).get(t) || null, remove(e, t) {
    if (!elementMap.has(e))
      return;
    const i = elementMap.get(e);
    i.delete(t), i.size === 0 && elementMap.delete(e);
  } };
  var BaseComponent = class {
    constructor(e) {
      (e = getElement(e)) && (this._element = e, Data.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY), EventHandler.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
        this[e] = null;
      });
    }
    _queueCallback(e, t, i = true) {
      executeAfterTransition(e, t, i);
    }
    static getInstance(e) {
      return Data.get(getElement(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  };
  var enableDismissTrigger = (e, t = "hide") => {
    const i = `click.dismiss${e.EVENT_KEY}`, n = e.NAME;
    EventHandler.on(document, i, `[data-bs-dismiss="${n}"]`, function(i2) {
      if (["A", "AREA"].includes(this.tagName) && i2.preventDefault(), isDisabled(this))
        return;
      const s = getElementFromSelector(this) || this.closest(`.${n}`);
      e.getOrCreateInstance(s)[t]();
    });
  };
  var NAME$d = "alert";
  var EVENT_CLOSE = "close.bs.alert";
  var EVENT_CLOSED = "closed.bs.alert";
  var Alert = class extends BaseComponent {
    static get NAME() {
      return NAME$d;
    }
    close() {
      if (EventHandler.trigger(this._element, EVENT_CLOSE).defaultPrevented)
        return;
      this._element.classList.remove("show");
      const e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), EventHandler.trigger(this._element, EVENT_CLOSED), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Alert.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  };
  enableDismissTrigger(Alert, "close"), defineJQueryPlugin(Alert);
  var NAME$c = "button";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click.bs.button.data-api";
  var Button = class extends BaseComponent {
    static get NAME() {
      return NAME$c;
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Button.getOrCreateInstance(this);
        e === "toggle" && t[e]();
      });
    }
  };
  function normalizeData(e) {
    return e === "true" || e !== "false" && (e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e);
  }
  function normalizeDataKey(e) {
    return e.replace(/[A-Z]/g, (e2) => `-${e2.toLowerCase()}`);
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (e) => {
    e.preventDefault();
    const t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
    Button.getOrCreateInstance(t).toggle();
  }), defineJQueryPlugin(Button);
  var Manipulator = { setDataAttribute(e, t, i) {
    e.setAttribute(`data-bs-${normalizeDataKey(t)}`, i);
  }, removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${normalizeDataKey(t)}`);
  }, getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((e2) => e2.startsWith("bs")).forEach((i) => {
      let n = i.replace(/^bs/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = normalizeData(e.dataset[i]);
    }), t;
  }, getDataAttribute: (e, t) => normalizeData(e.getAttribute(`data-bs-${normalizeDataKey(t)}`)), offset(e) {
    const t = e.getBoundingClientRect();
    return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
  }, position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }) };
  var SelectorEngine = { find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)), findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e), children: (e, t) => [].concat(...e.children).filter((e2) => e2.matches(t)), parents(e, t) {
    const i = [];
    let n = e.parentNode;
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== 3; )
      n.matches(t) && i.push(n), n = n.parentNode;
    return i;
  }, prev(e, t) {
    let i = e.previousElementSibling;
    for (; i; ) {
      if (i.matches(t))
        return [i];
      i = i.previousElementSibling;
    }
    return [];
  }, next(e, t) {
    let i = e.nextElementSibling;
    for (; i; ) {
      if (i.matches(t))
        return [i];
      i = i.nextElementSibling;
    }
    return [];
  }, focusableChildren(e) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e2) => `${e2}:not([tabindex^="-"])`).join(", ");
    return this.find(t, e).filter((e2) => !isDisabled(e2) && isVisible(e2));
  } };
  var NAME$b = "carousel";
  var Default$a = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true };
  var DefaultType$a = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" };
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var KEY_TO_DIRECTION = { ArrowLeft: DIRECTION_RIGHT, ArrowRight: DIRECTION_LEFT };
  var EVENT_SLIDE = "slide.bs.carousel";
  var EVENT_SLID = "slid.bs.carousel";
  var EVENT_KEYDOWN = "keydown.bs.carousel";
  var EVENT_MOUSEENTER = "mouseenter.bs.carousel";
  var EVENT_MOUSELEAVE = "mouseleave.bs.carousel";
  var EVENT_TOUCHSTART = "touchstart.bs.carousel";
  var EVENT_TOUCHMOVE = "touchmove.bs.carousel";
  var EVENT_TOUCHEND = "touchend.bs.carousel";
  var EVENT_POINTERDOWN = "pointerdown.bs.carousel";
  var EVENT_POINTERUP = "pointerup.bs.carousel";
  var EVENT_DRAG_START = "dragstart.bs.carousel";
  var EVENT_LOAD_DATA_API$2 = "load.bs.carousel.data-api";
  var EVENT_CLICK_DATA_API$5 = "click.bs.carousel.data-api";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var Carousel = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }
    static get Default() {
      return Default$a;
    }
    static get NAME() {
      return NAME$b;
    }
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause(e) {
      e || (this._isPaused = true), SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element) && (triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }
    cycle(e) {
      e || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
    to(e) {
      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      const t = this._getItemIndex(this._activeElement);
      if (e > this._items.length - 1 || e < 0)
        return;
      if (this._isSliding)
        return void EventHandler.one(this._element, EVENT_SLID, () => this.to(e));
      if (t === e)
        return this.pause(), void this.cycle();
      const i = e > t ? ORDER_NEXT : ORDER_PREV;
      this._slide(i, this._items[e]);
    }
    _getConfig(e) {
      return e = { ...Default$a, ...Manipulator.getDataAttributes(this._element), ...typeof e == "object" ? e : {} }, typeCheckConfig(NAME$b, e, DefaultType$a), e;
    }
    _handleSwipe() {
      const e = Math.abs(this.touchDeltaX);
      if (e <= 40)
        return;
      const t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
    _addEventListeners() {
      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN, (e) => this._keydown(e)), this._config.pause === "hover" && (EventHandler.on(this._element, EVENT_MOUSEENTER, (e) => this.pause(e)), EventHandler.on(this._element, EVENT_MOUSELEAVE, (e) => this.cycle(e))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const e = (e2) => this._pointerEvent && (e2.pointerType === "pen" || e2.pointerType === "touch"), t = (t2) => {
        e(t2) ? this.touchStartX = t2.clientX : this._pointerEvent || (this.touchStartX = t2.touches[0].clientX);
      }, i = (e2) => {
        this.touchDeltaX = e2.touches && e2.touches.length > 1 ? 0 : e2.touches[0].clientX - this.touchStartX;
      }, n = (t2) => {
        e(t2) && (this.touchDeltaX = t2.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e2) => this.cycle(e2), 500 + this._config.interval));
      };
      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach((e2) => {
        EventHandler.on(e2, EVENT_DRAG_START, (e3) => e3.preventDefault());
      }), this._pointerEvent ? (EventHandler.on(this._element, EVENT_POINTERDOWN, (e2) => t(e2)), EventHandler.on(this._element, EVENT_POINTERUP, (e2) => n(e2)), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, (e2) => t(e2)), EventHandler.on(this._element, EVENT_TOUCHMOVE, (e2) => i(e2)), EventHandler.on(this._element, EVENT_TOUCHEND, (e2) => n(e2)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName))
        return;
      const t = KEY_TO_DIRECTION[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return this._items = e && e.parentNode ? SelectorEngine.find(SELECTOR_ITEM, e.parentNode) : [], this._items.indexOf(e);
    }
    _getItemByOrder(e, t) {
      const i = e === ORDER_NEXT;
      return getNextActiveElement(this._items, t, i, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      const i = this._getItemIndex(e), n = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
      return EventHandler.trigger(this._element, EVENT_SLIDE, { relatedTarget: e, direction: t, from: n, to: i });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        const t = SelectorEngine.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        const i = SelectorEngine.find("[data-bs-target]", this._indicatorsElement);
        for (let t2 = 0; t2 < i.length; t2++)
          if (Number.parseInt(i[t2].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            i[t2].classList.add("active"), i[t2].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const e = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!e)
        return;
      const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(e, t) {
      const i = this._directionToOrder(e), n = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element), s = this._getItemIndex(n), o = t || this._getItemByOrder(i, n), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === ORDER_NEXT, c = l ? CLASS_NAME_START : CLASS_NAME_END, E = l ? CLASS_NAME_NEXT : CLASS_NAME_PREV, _ = this._orderToDirection(i);
      if (o && o.classList.contains("active"))
        return void (this._isSliding = false);
      if (this._isSliding)
        return;
      if (this._triggerSlideEvent(o, _).defaultPrevented)
        return;
      if (!n || !o)
        return;
      this._isSliding = true, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
      const h = () => {
        EventHandler.trigger(this._element, EVENT_SLID, { relatedTarget: o, direction: _, from: s, to: r });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(E), reflow(o), n.classList.add(c), o.classList.add(c);
        const e2 = () => {
          o.classList.remove(c, E), o.classList.add("active"), n.classList.remove("active", E, c), this._isSliding = false, setTimeout(h, 0);
        };
        this._queueCallback(e2, n, true);
      } else
        n.classList.remove("active"), o.classList.add("active"), this._isSliding = false, h();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [DIRECTION_RIGHT, DIRECTION_LEFT].includes(e) ? isRTL() ? e === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT : e === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV : e;
    }
    _orderToDirection(e) {
      return [ORDER_NEXT, ORDER_PREV].includes(e) ? isRTL() ? e === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT : e === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT : e;
    }
    static carouselInterface(e, t) {
      const i = Carousel.getOrCreateInstance(e, t);
      let { _config: n } = i;
      typeof t == "object" && (n = { ...n, ...t });
      const s = typeof t == "string" ? t : n.slide;
      if (typeof t == "number")
        i.to(t);
      else if (typeof s == "string") {
        if (i[s] === void 0)
          throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else
        n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function() {
        Carousel.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      const t = getElementFromSelector(this);
      if (!t || !t.classList.contains("carousel"))
        return;
      const i = { ...Manipulator.getDataAttributes(t), ...Manipulator.getDataAttributes(this) }, n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = false), Carousel.carouselInterface(t, i), n && Carousel.getInstance(t).to(n), e.preventDefault();
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler), EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const e = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (let t = 0, i = e.length; t < i; t++)
      Carousel.carouselInterface(e[t], Carousel.getInstance(e[t]));
  }), defineJQueryPlugin(Carousel);
  var NAME$a = "collapse";
  var DATA_KEY$9 = "bs.collapse";
  var Default$9 = { toggle: true, parent: null };
  var DefaultType$9 = { toggle: "boolean", parent: "(null|element)" };
  var EVENT_SHOW$5 = "show.bs.collapse";
  var EVENT_SHOWN$5 = "shown.bs.collapse";
  var EVENT_HIDE$5 = "hide.bs.collapse";
  var EVENT_HIDDEN$5 = "hidden.bs.collapse";
  var EVENT_CLICK_DATA_API$4 = "click.bs.collapse.data-api";
  var CLASS_NAME_DEEPER_CHILDREN = ":scope .collapse .collapse";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Collapse = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._isTransitioning = false, this._config = this._getConfig(t), this._triggerArray = [];
      const i = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (let e2 = 0, t2 = i.length; e2 < t2; e2++) {
        const t3 = i[e2], n = getSelectorFromElement(t3), s = SelectorEngine.find(n).filter((e3) => e3 === this._element);
        n !== null && s.length && (this._selector = n, this._triggerArray.push(t3));
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return Default$9;
    }
    static get NAME() {
      return NAME$a;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let e, t = [];
      if (this._config.parent) {
        const e2 = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        t = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter((t2) => !e2.includes(t2));
      }
      const i = SelectorEngine.findOne(this._selector);
      if (t.length) {
        const n2 = t.find((e2) => i !== e2);
        if (e = n2 ? Collapse.getInstance(n2) : null, e && e._isTransitioning)
          return;
      }
      if (EventHandler.trigger(this._element, EVENT_SHOW$5).defaultPrevented)
        return;
      t.forEach((t2) => {
        i !== t2 && Collapse.getOrCreateInstance(t2, { toggle: false }).hide(), e || Data.set(t2, DATA_KEY$9, null);
      });
      const n = this._getDimension();
      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", EventHandler.trigger(this._element, EVENT_SHOWN$5);
      }, this._element, true), this._element.style[n] = `${this._element[s]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$5).defaultPrevented)
        return;
      const e = this._getDimension();
      this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      const t = this._triggerArray.length;
      for (let e2 = 0; e2 < t; e2++) {
        const t2 = this._triggerArray[e2], i = getElementFromSelector(t2);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([t2], false);
      }
      this._isTransitioning = true, this._element.style[e] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), EventHandler.trigger(this._element, EVENT_HIDDEN$5);
      }, this._element, true);
    }
    _isShown(e = this._element) {
      return e.classList.contains("show");
    }
    _getConfig(e) {
      return (e = { ...Default$9, ...Manipulator.getDataAttributes(this._element), ...e }).toggle = Boolean(e.toggle), e.parent = getElement(e.parent), typeCheckConfig(NAME$a, e, DefaultType$9), e;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const e = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter((t) => !e.includes(t)).forEach((e2) => {
        const t = getElementFromSelector(e2);
        t && this._addAriaAndCollapsedClass([e2], this._isShown(t));
      });
    }
    _addAriaAndCollapsedClass(e, t) {
      e.length && e.forEach((e2) => {
        t ? e2.classList.remove("collapsed") : e2.classList.add("collapsed"), e2.setAttribute("aria-expanded", t);
      });
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = {};
        typeof e == "string" && /show|hide/.test(e) && (t.toggle = false);
        const i = Collapse.getOrCreateInstance(this, t);
        if (typeof e == "string") {
          if (i[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(e) {
    (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
    const t = getSelectorFromElement(this);
    SelectorEngine.find(t).forEach((e2) => {
      Collapse.getOrCreateInstance(e2, { toggle: false }).toggle();
    });
  }), defineJQueryPlugin(Collapse);
  var NAME$9 = "dropdown";
  var REGEXP_KEYDOWN = new RegExp("ArrowUp|ArrowDown|Escape");
  var EVENT_HIDE$4 = "hide.bs.dropdown";
  var EVENT_HIDDEN$4 = "hidden.bs.dropdown";
  var EVENT_SHOW$4 = "show.bs.dropdown";
  var EVENT_SHOWN$4 = "shown.bs.dropdown";
  var EVENT_CLICK_DATA_API$3 = "click.bs.dropdown.data-api";
  var EVENT_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api";
  var EVENT_KEYUP_DATA_API = "keyup.bs.dropdown.data-api";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var Default$8 = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true };
  var DefaultType$8 = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
  var Dropdown = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown(this._menu))
        return;
      const e = { relatedTarget: this._element };
      if (EventHandler.trigger(this._element, EVENT_SHOW$4, e).defaultPrevented)
        return;
      const t = Dropdown.getParentFromElement(this._element);
      this._inNavbar ? Manipulator.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e2) => EventHandler.on(e2, "mouseover", noop)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add("show"), this._element.classList.add("show"), EventHandler.trigger(this._element, EVENT_SHOWN$4, e);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu))
        return;
      const e = { relatedTarget: this._element };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(e) {
      EventHandler.trigger(this._element, EVENT_HIDE$4, e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e2) => EventHandler.off(e2, "mouseover", noop)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$4, e));
    }
    _getConfig(e) {
      if (e = { ...this.constructor.Default, ...Manipulator.getDataAttributes(this._element), ...e }, typeCheckConfig(NAME$9, e, this.constructor.DefaultType), typeof e.reference == "object" && !isElement(e.reference) && typeof e.reference.getBoundingClientRect != "function")
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return e;
    }
    _createPopper(e) {
      if (Popper === void 0)
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      this._config.reference === "parent" ? t = e : isElement(this._config.reference) ? t = getElement(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
      const i = this._getPopperConfig(), n = i.modifiers.find((e2) => e2.name === "applyStyles" && e2.enabled === false);
      this._popper = Popper.createPopper(t, this._menu, i), n && Manipulator.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(e = this._element) {
      return e.classList.contains("show");
    }
    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
    _getPlacement() {
      const e = this._element.parentNode;
      if (e.classList.contains("dropend"))
        return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart"))
        return PLACEMENT_LEFT;
      const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(".navbar") !== null;
    }
    _getOffset() {
      const { offset: e } = this._config;
      return typeof e == "string" ? e.split(",").map((e2) => Number.parseInt(e2, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
    }
    _getPopperConfig() {
      const e = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return this._config.display === "static" && (e.modifiers = [{ name: "applyStyles", enabled: false }]), { ...e, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig };
    }
    _selectMenuItem({ key: e, target: t }) {
      const i = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
      i.length && getNextActiveElement(i, t, e === "ArrowDown", !i.includes(t)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Dropdown.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e && (e.button === 2 || e.type === "keyup" && e.key !== "Tab"))
        return;
      const t = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
      for (let i = 0, n = t.length; i < n; i++) {
        const n2 = Dropdown.getInstance(t[i]);
        if (!n2 || n2._config.autoClose === false)
          continue;
        if (!n2._isShown())
          continue;
        const s = { relatedTarget: n2._element };
        if (e) {
          const t2 = e.composedPath(), i2 = t2.includes(n2._menu);
          if (t2.includes(n2._element) || n2._config.autoClose === "inside" && !i2 || n2._config.autoClose === "outside" && i2)
            continue;
          if (n2._menu.contains(e.target) && (e.type === "keyup" && e.key === "Tab" || /input|select|option|textarea|form/i.test(e.target.tagName)))
            continue;
          e.type === "click" && (s.clickEvent = e);
        }
        n2._completeHide(s);
      }
    }
    static getParentFromElement(e) {
      return getElementFromSelector(e) || e.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (/input|textarea/i.test(e.target.tagName) ? e.key === "Space" || e.key !== "Escape" && (e.key !== "ArrowDown" && e.key !== "ArrowUp" || e.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(e.key))
        return;
      const t = this.classList.contains("show");
      if (!t && e.key === "Escape")
        return;
      if (e.preventDefault(), e.stopPropagation(), isDisabled(this))
        return;
      const i = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0], n = Dropdown.getOrCreateInstance(i);
      if (e.key !== "Escape")
        return e.key === "ArrowUp" || e.key === "ArrowDown" ? (t || n.show(), void n._selectMenuItem(e)) : void (t && e.key !== "Space" || Dropdown.clearMenus());
      n.hide();
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(e) {
    e.preventDefault(), Dropdown.getOrCreateInstance(this).toggle();
  }), defineJQueryPlugin(Dropdown);
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      const e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t) => t + e), this._setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", (t) => t + e), this._setElementAttributes(".sticky-top", "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(e, t, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(e, (e2) => {
        if (e2 !== this._element && window.innerWidth > e2.clientWidth + n)
          return;
        this._saveInitialAttribute(e2, t);
        const s = window.getComputedStyle(e2)[t];
        e2.style[t] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(e, t) {
      const i = e.style[t];
      i && Manipulator.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, (e2) => {
        const i = Manipulator.getDataAttribute(e2, t);
        i === void 0 ? e2.style.removeProperty(t) : (Manipulator.removeDataAttribute(e2, t), e2.style[t] = i);
      });
    }
    _applyManipulationCallback(e, t) {
      isElement(e) ? t(e) : SelectorEngine.find(e, this._element).forEach(t);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  };
  var Default$7 = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null };
  var DefaultType$7 = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
  var NAME$8 = "backdrop";
  var EVENT_MOUSEDOWN = "mousedown.bs.backdrop";
  var Backdrop = class {
    constructor(e) {
      this._config = this._getConfig(e), this._isAppended = false, this._element = null;
    }
    show(e) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && reflow(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
        execute(e);
      })) : execute(e);
    }
    hide(e) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        this.dispose(), execute(e);
      })) : execute(e);
    }
    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
      }
      return this._element;
    }
    _getConfig(e) {
      return (e = { ...Default$7, ...typeof e == "object" ? e : {} }).rootElement = getElement(e.rootElement), typeCheckConfig(NAME$8, e, DefaultType$7), e;
    }
    _append() {
      this._isAppended || (this._config.rootElement.append(this._getElement()), EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      }), this._isAppended = true);
    }
    dispose() {
      this._isAppended && (EventHandler.off(this._element, EVENT_MOUSEDOWN), this._element.remove(), this._isAppended = false);
    }
    _emulateAnimation(e) {
      executeAfterTransition(e, this._getElement(), this._config.isAnimated);
    }
  };
  var Default$6 = { trapElement: null, autofocus: true };
  var DefaultType$6 = { trapElement: "element", autofocus: "boolean" };
  var NAME$7 = "focustrap";
  var EVENT_KEY$7 = ".bs.focustrap";
  var EVENT_FOCUSIN$1 = "focusin.bs.focustrap";
  var EVENT_KEYDOWN_TAB = "keydown.tab.bs.focustrap";
  var FocusTrap = class {
    constructor(e) {
      this._config = this._getConfig(e), this._isActive = false, this._lastTabNavDirection = null;
    }
    activate() {
      const { trapElement: e, autofocus: t } = this._config;
      this._isActive || (t && e.focus(), EventHandler.off(document, EVENT_KEY$7), EventHandler.on(document, EVENT_FOCUSIN$1, (e2) => this._handleFocusin(e2)), EventHandler.on(document, EVENT_KEYDOWN_TAB, (e2) => this._handleKeydown(e2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, EventHandler.off(document, EVENT_KEY$7));
    }
    _handleFocusin(e) {
      const { target: t } = e, { trapElement: i } = this._config;
      if (t === document || t === i || i.contains(t))
        return;
      const n = SelectorEngine.focusableChildren(i);
      n.length === 0 ? i.focus() : this._lastTabNavDirection === "backward" ? n[n.length - 1].focus() : n[0].focus();
    }
    _handleKeydown(e) {
      e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
    }
    _getConfig(e) {
      return e = { ...Default$6, ...typeof e == "object" ? e : {} }, typeCheckConfig(NAME$7, e, DefaultType$6), e;
    }
  };
  var NAME$6 = "modal";
  var Default$5 = { backdrop: true, keyboard: true, focus: true };
  var DefaultType$5 = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
  var EVENT_HIDE$3 = "hide.bs.modal";
  var EVENT_HIDE_PREVENTED = "hidePrevented.bs.modal";
  var EVENT_HIDDEN$3 = "hidden.bs.modal";
  var EVENT_SHOW$3 = "show.bs.modal";
  var EVENT_SHOWN$3 = "shown.bs.modal";
  var EVENT_RESIZE = "resize.bs.modal";
  var EVENT_CLICK_DISMISS = "click.dismiss.bs.modal";
  var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss.bs.modal";
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal";
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal";
  var EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Modal = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._dialog = SelectorEngine.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new ScrollBarHelper();
    }
    static get Default() {
      return Default$5;
    }
    static get NAME() {
      return NAME$6;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown || this._isTransitioning || EventHandler.trigger(this._element, EVENT_SHOW$3, { relatedTarget: e }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, (e2) => {
          e2.target === this._element && (this._ignoreBackdropClick = true);
        });
      }), this._showBackdrop(() => this._showElement(e)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning)
        return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented)
        return;
      this._isShown = false;
      const e = this._isAnimated();
      e && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS), EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS), this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((e) => EventHandler.off(e, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Backdrop({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new FocusTrap({ trapElement: this._element });
    }
    _getConfig(e) {
      return e = { ...Default$5, ...Manipulator.getDataAttributes(this._element), ...typeof e == "object" ? e : {} }, typeCheckConfig(NAME$6, e, DefaultType$5), e;
    }
    _showElement(e) {
      const t = this._isAnimated(), i = SelectorEngine.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && reflow(this._element), this._element.classList.add("show"), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, EventHandler.trigger(this._element, EVENT_SHOWN$3, { relatedTarget: e });
      }, this._dialog, t);
    }
    _setEscapeEvent() {
      this._isShown ? EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (e) => {
        this._config.keyboard && e.key === "Escape" ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== "Escape" || this._triggerBackdropTransition();
      }) : EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
    _setResizeEvent() {
      this._isShown ? EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog()) : EventHandler.off(window, EVENT_RESIZE);
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }
    _showBackdrop(e) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, (e2) => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = false : e2.target === e2.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
      }), this._backdrop.show(e);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED).defaultPrevented)
        return;
      const { classList: e, scrollHeight: t, style: i } = this._element, n = t > document.documentElement.clientHeight;
      !n && i.overflowY === "hidden" || e.contains("modal-static") || (n || (i.overflowY = "hidden"), e.add("modal-static"), this._queueCallback(() => {
        e.remove("modal-static"), n || this._queueCallback(() => {
          i.overflowY = "";
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), i = t > 0;
      (!i && e && !isRTL() || i && !e && isRTL()) && (this._element.style.paddingLeft = `${t}px`), (i && !e && !isRTL() || !i && e && isRTL()) && (this._element.style.paddingRight = `${t}px`);
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(e, t) {
      return this.each(function() {
        const i = Modal.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (i[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(e) {
    const t = getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), EventHandler.one(t, EVENT_SHOW$3, (e2) => {
      e2.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$3, () => {
        isVisible(this) && this.focus();
      });
    });
    const i = SelectorEngine.findOne(".modal.show");
    i && Modal.getInstance(i).hide(), Modal.getOrCreateInstance(t).toggle(this);
  }), enableDismissTrigger(Modal), defineJQueryPlugin(Modal);
  var NAME$5 = "offcanvas";
  var EVENT_LOAD_DATA_API$1 = "load.bs.offcanvas.data-api";
  var Default$4 = { backdrop: true, keyboard: true, scroll: false };
  var DefaultType$4 = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$2 = "show.bs.offcanvas";
  var EVENT_SHOWN$2 = "shown.bs.offcanvas";
  var EVENT_HIDE$2 = "hide.bs.offcanvas";
  var EVENT_HIDDEN$2 = "hidden.bs.offcanvas";
  var EVENT_CLICK_DATA_API$1 = "click.bs.offcanvas.data-api";
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss.bs.offcanvas";
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Offcanvas = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get NAME() {
      return NAME$5;
    }
    static get Default() {
      return Default$4;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$2, { relatedTarget: e }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ScrollBarHelper().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
        this._config.scroll || this._focustrap.activate(), EventHandler.trigger(this._element, EVENT_SHOWN$2, { relatedTarget: e });
      }, this._element, true));
    }
    hide() {
      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$2).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
        this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ScrollBarHelper().reset(), EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(e) {
      return e = { ...Default$4, ...Manipulator.getDataAttributes(this._element), ...typeof e == "object" ? e : {} }, typeCheckConfig(NAME$5, e, DefaultType$4), e;
    }
    _initializeBackDrop() {
      return new Backdrop({ className: CLASS_NAME_BACKDROP, isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
    }
    _initializeFocusTrap() {
      return new FocusTrap({ trapElement: this._element });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (e) => {
        this._config.keyboard && e.key === "Escape" && this.hide();
      });
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Offcanvas.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(e) {
    const t = getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this))
      return;
    EventHandler.one(t, EVENT_HIDDEN$2, () => {
      isVisible(this) && this.focus();
    });
    const i = SelectorEngine.findOne(OPEN_SELECTOR);
    i && i !== t && Offcanvas.getInstance(i).hide(), Offcanvas.getOrCreateInstance(t).toggle(this);
  }), EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach((e) => Offcanvas.getOrCreateInstance(e).show())), enableDismissTrigger(Offcanvas), defineJQueryPlugin(Offcanvas);
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  var allowedAttribute = (e, t) => {
    const i = e.nodeName.toLowerCase();
    if (t.includes(i))
      return !uriAttributes.has(i) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue) || DATA_URL_PATTERN.test(e.nodeValue));
    const n = t.filter((e2) => e2 instanceof RegExp);
    for (let e2 = 0, t2 = n.length; e2 < t2; e2++)
      if (n[e2].test(i))
        return true;
    return false;
  };
  var DefaultAllowlist = { "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] };
  function sanitizeHtml(e, t, i) {
    if (!e.length)
      return e;
    if (i && typeof i == "function")
      return i(e);
    const n = new window.DOMParser().parseFromString(e, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
    for (let e2 = 0, i2 = s.length; e2 < i2; e2++) {
      const i3 = s[e2], n2 = i3.nodeName.toLowerCase();
      if (!Object.keys(t).includes(n2)) {
        i3.remove();
        continue;
      }
      const o = [].concat(...i3.attributes), r = [].concat(t["*"] || [], t[n2] || []);
      o.forEach((e3) => {
        allowedAttribute(e3, r) || i3.removeAttribute(e3.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var DefaultType$3 = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" };
  var AttachmentMap = { AUTO: "auto", TOP: "top", RIGHT: isRTL() ? "left" : "right", BOTTOM: "bottom", LEFT: isRTL() ? "right" : "left" };
  var Default$3 = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: DefaultAllowlist, popperConfig: null };
  var Event$2 = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
  var Tooltip = class extends BaseComponent {
    constructor(e, t) {
      if (Popper === void 0)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(e), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners();
    }
    static get Default() {
      return Default$3;
    }
    static get NAME() {
      return NAME$4;
    }
    static get Event() {
      return Event$2;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(e) {
      if (this._isEnabled)
        if (e) {
          const t = this._initializeOnDelegatedTarget(e);
          t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }
    show() {
      if (this._element.style.display === "none")
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled)
        return;
      const e = EventHandler.trigger(this._element, this.constructor.Event.SHOW), t = findShadowRoot(this._element), i = t === null ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
      if (e.defaultPrevented || !i)
        return;
      this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      const n = this.getTipElement(), s = getUID(this.constructor.NAME);
      n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add("fade");
      const o = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, r = this._getAttachment(o);
      this._addAttachmentClass(r);
      const { container: a } = this._config;
      Data.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), EventHandler.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Popper.createPopper(this._element, n, this._getPopperConfig(r)), n.classList.add("show");
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e2) => {
        EventHandler.on(e2, "mouseover", noop);
      });
      const c = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        const e2 = this._hoverState;
        this._hoverState = null, EventHandler.trigger(this._element, this.constructor.Event.SHOWN), e2 === "out" && this._leave(null, this);
      }, this.tip, c);
    }
    hide() {
      if (!this._popper)
        return;
      const e = this.getTipElement();
      if (EventHandler.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
        return;
      e.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e2) => EventHandler.off(e2, "mouseover", noop)), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
      const t = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        this._isWithActiveTrigger() || (this._hoverState !== "show" && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), EventHandler.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
      }, this.tip, t), this._hoverState = "";
    }
    update() {
      this._popper !== null && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip)
        return this.tip;
      const e = document.createElement("div");
      e.innerHTML = this._config.template;
      const t = e.children[0];
      return this.setContent(t), t.classList.remove("fade", "show"), this.tip = t, this.tip;
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner");
    }
    _sanitizeAndSetContent(e, t, i) {
      const n = SelectorEngine.findOne(i, e);
      t || !n ? this.setElementContent(n, t) : n.remove();
    }
    setElementContent(e, t) {
      if (e !== null)
        return isElement(t) ? (t = getElement(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = sanitizeHtml(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
    }
    getTitle() {
      const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(e);
    }
    updateAttachment(e) {
      return e === "right" ? "end" : e === "left" ? "start" : e;
    }
    _initializeOnDelegatedTarget(e, t) {
      return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
    _getOffset() {
      const { offset: e } = this._config;
      return typeof e == "string" ? e.split(",").map((e2) => Number.parseInt(e2, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
    }
    _resolvePossibleFunction(e) {
      return typeof e == "function" ? e.call(this._element) : e;
    }
    _getPopperConfig(e) {
      const t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (e2) => this._handlePopperPlacementChange(e2) }], onFirstUpdate: (e2) => {
        e2.options.placement !== e2.placement && this._handlePopperPlacementChange(e2);
      } };
      return { ...t, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig };
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`);
    }
    _getAttachment(e) {
      return AttachmentMap[e.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e) => {
        if (e === "click")
          EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e2) => this.toggle(e2));
        else if (e !== "manual") {
          const t = e === "hover" ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = e === "hover" ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler.on(this._element, t, this._config.selector, (e2) => this._enter(e2)), EventHandler.on(this._element, i, this._config.selector, (e2) => this._leave(e2));
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
    }
    _fixTitle() {
      const e = this._element.getAttribute("title"), t = typeof this._element.getAttribute("data-bs-original-title");
      (e || t !== "string") && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
    }
    _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger[e.type === "focusin" ? "focus" : "hover"] = true), t.getTipElement().classList.contains("show") || t._hoverState === "show" ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout(() => {
        t._hoverState === "show" && t.show();
      }, t._config.delay.show) : t.show());
    }
    _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger[e.type === "focusout" ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(() => {
        t._hoverState === "out" && t.hide();
      }, t._config.delay.hide) : t.hide());
    }
    _isWithActiveTrigger() {
      for (const e in this._activeTrigger)
        if (this._activeTrigger[e])
          return true;
      return false;
    }
    _getConfig(e) {
      const t = Manipulator.getDataAttributes(this._element);
      return Object.keys(t).forEach((e2) => {
        DISALLOWED_ATTRIBUTES.has(e2) && delete t[e2];
      }), (e = { ...this.constructor.Default, ...t, ...typeof e == "object" && e ? e : {} }).container = e.container === false ? document.body : getElement(e.container), typeof e.delay == "number" && (e.delay = { show: e.delay, hide: e.delay }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), typeCheckConfig(NAME$4, e, this.constructor.DefaultType), e.sanitize && (e.template = sanitizeHtml(e.template, e.allowList, e.sanitizeFn)), e;
    }
    _getDelegateConfig() {
      const e = {};
      for (const t in this._config)
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      return e;
    }
    _cleanTipClass() {
      const e = this.getTipElement(), t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = e.getAttribute("class").match(t);
      i !== null && i.length > 0 && i.map((e2) => e2.trim()).forEach((t2) => e.classList.remove(t2));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(e) {
      const { state: t } = e;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Tooltip.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var Default$2 = { ...Tooltip.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' };
  var DefaultType$2 = { ...Tooltip.DefaultType, content: "(string|element|function)" };
  var Event$1 = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
  var SELECTOR_TITLE = ".popover-header";
  var Popover = class extends Tooltip {
    static get Default() {
      return Default$2;
    }
    static get NAME() {
      return NAME$3;
    }
    static get Event() {
      return Event$1;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), SELECTOR_TITLE), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Popover.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var EVENT_KEY$2 = ".bs.scrollspy";
  var Default$1 = { offset: 10, method: "auto", target: "" };
  var DefaultType$1 = { offset: "number", method: "string", target: "(string|element)" };
  var EVENT_ACTIVATE = "activate.bs.scrollspy";
  var EVENT_SCROLL = "scroll.bs.scrollspy";
  var EVENT_LOAD_DATA_API = "load.bs.scrollspy.data-api";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_LINK_ITEMS = ".nav-link, .list-group-item, .dropdown-item";
  var ScrollSpy = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process()), this.refresh(), this._process();
    }
    static get Default() {
      return Default$1;
    }
    static get NAME() {
      return NAME$2;
    }
    refresh() {
      const e = this._scrollElement === this._scrollElement.window ? "offset" : "position", t = this._config.method === "auto" ? e : this._config.method, i = t === "position" ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).map((e2) => {
        const n = getSelectorFromElement(e2), s = n ? SelectorEngine.findOne(n) : null;
        if (s) {
          const e3 = s.getBoundingClientRect();
          if (e3.width || e3.height)
            return [Manipulator[t](s).top + i, n];
        }
        return null;
      }).filter((e2) => e2).sort((e2, t2) => e2[0] - t2[0]).forEach((e2) => {
        this._offsets.push(e2[0]), this._targets.push(e2[1]);
      });
    }
    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2), super.dispose();
    }
    _getConfig(e) {
      return (e = { ...Default$1, ...Manipulator.getDataAttributes(this._element), ...typeof e == "object" && e ? e : {} }).target = getElement(e.target) || document.documentElement, typeCheckConfig(NAME$2, e, DefaultType$1), e;
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(), i = this._config.offset + t - this._getOffsetHeight();
      if (this._scrollHeight !== t && this.refresh(), e >= i) {
        const e2 = this._targets[this._targets.length - 1];
        this._activeTarget !== e2 && this._activate(e2);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
          return this._activeTarget = null, void this._clear();
        for (let t2 = this._offsets.length; t2--; )
          this._activeTarget !== this._targets[t2] && e >= this._offsets[t2] && (this._offsets[t2 + 1] === void 0 || e < this._offsets[t2 + 1]) && this._activate(this._targets[t2]);
      }
    }
    _activate(e) {
      this._activeTarget = e, this._clear();
      const t = SELECTOR_LINK_ITEMS.split(",").map((t2) => `${t2}[data-bs-target="${e}"],${t2}[href="${e}"]`), i = SelectorEngine.findOne(t.join(","), this._config.target);
      i.classList.add("active"), i.classList.contains("dropdown-item") ? SelectorEngine.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : SelectorEngine.parents(i, ".nav, .list-group").forEach((e2) => {
        SelectorEngine.prev(e2, ".nav-link, .list-group-item").forEach((e3) => e3.classList.add("active")), SelectorEngine.prev(e2, ".nav-item").forEach((e3) => {
          SelectorEngine.children(e3, ".nav-link").forEach((e4) => e4.classList.add("active"));
        });
      }), EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, { relatedTarget: e });
    }
    _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter((e) => e.classList.contains("active")).forEach((e) => e.classList.remove("active"));
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = ScrollSpy.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach((e) => new ScrollSpy(e));
  }), defineJQueryPlugin(ScrollSpy);
  var EVENT_HIDE$1 = "hide.bs.tab";
  var EVENT_HIDDEN$1 = "hidden.bs.tab";
  var EVENT_SHOW$1 = "show.bs.tab";
  var EVENT_SHOWN$1 = "shown.bs.tab";
  var EVENT_CLICK_DATA_API = "click.bs.tab.data-api";
  var SELECTOR_ACTIVE_UL = ":scope > li > .active";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";
  var Tab = class extends BaseComponent {
    static get NAME() {
      return "tab";
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active"))
        return;
      let e;
      const t = getElementFromSelector(this._element), i = this._element.closest(".nav, .list-group");
      if (i) {
        const t2 = i.nodeName === "UL" || i.nodeName === "OL" ? SELECTOR_ACTIVE_UL : ".active";
        e = SelectorEngine.find(t2, i), e = e[e.length - 1];
      }
      const n = e ? EventHandler.trigger(e, EVENT_HIDE$1, { relatedTarget: this._element }) : null;
      if (EventHandler.trigger(this._element, EVENT_SHOW$1, { relatedTarget: e }).defaultPrevented || n !== null && n.defaultPrevented)
        return;
      this._activate(this._element, i);
      const s = () => {
        EventHandler.trigger(e, EVENT_HIDDEN$1, { relatedTarget: this._element }), EventHandler.trigger(this._element, EVENT_SHOWN$1, { relatedTarget: e });
      };
      t ? this._activate(t, t.parentNode, s) : s();
    }
    _activate(e, t, i) {
      const n = (!t || t.nodeName !== "UL" && t.nodeName !== "OL" ? SelectorEngine.children(t, ".active") : SelectorEngine.find(SELECTOR_ACTIVE_UL, t))[0], s = i && n && n.classList.contains("fade"), o = () => this._transitionComplete(e, n, i);
      n && s ? (n.classList.remove("show"), this._queueCallback(o, e, true)) : o();
    }
    _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove("active");
        const e2 = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, t.parentNode);
        e2 && e2.classList.remove("active"), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", false);
      }
      e.classList.add("active"), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", true), reflow(e), e.classList.contains("fade") && e.classList.add("show");
      let n = e.parentNode;
      if (n && n.nodeName === "LI" && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
        const t2 = e.closest(".dropdown");
        t2 && SelectorEngine.find(".dropdown-toggle", t2).forEach((e2) => e2.classList.add("active")), e.setAttribute("aria-expanded", true);
      }
      i && i();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Tab.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this) || Tab.getOrCreateInstance(this).show();
  }), defineJQueryPlugin(Tab);
  var NAME = "toast";
  var EVENT_MOUSEOVER = "mouseover.bs.toast";
  var EVENT_MOUSEOUT = "mouseout.bs.toast";
  var EVENT_FOCUSIN = "focusin.bs.toast";
  var EVENT_FOCUSOUT = "focusout.bs.toast";
  var EVENT_HIDE = "hide.bs.toast";
  var EVENT_HIDDEN = "hidden.bs.toast";
  var EVENT_SHOW = "show.bs.toast";
  var EVENT_SHOWN = "shown.bs.toast";
  var DefaultType = { animation: "boolean", autohide: "boolean", delay: "number" };
  var Default = { animation: true, autohide: true, delay: 5e3 };
  var Toast = class extends BaseComponent {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get Default() {
      return Default;
    }
    static get NAME() {
      return NAME;
    }
    show() {
      EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(() => {
        this._element.classList.remove("showing"), EventHandler.trigger(this._element, EVENT_SHOWN), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this._element.classList.contains("show") && (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(() => {
        this._element.classList.add("hide"), this._element.classList.remove("showing"), this._element.classList.remove("show"), EventHandler.trigger(this._element, EVENT_HIDDEN);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
    }
    _getConfig(e) {
      return e = { ...Default, ...Manipulator.getDataAttributes(this._element), ...typeof e == "object" && e ? e : {} }, typeCheckConfig(NAME, e, this.constructor.DefaultType), e;
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t)
        return void this._clearTimeout();
      const i = e.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (e) => this._onInteraction(e, true)), EventHandler.on(this._element, EVENT_MOUSEOUT, (e) => this._onInteraction(e, false)), EventHandler.on(this._element, EVENT_FOCUSIN, (e) => this._onInteraction(e, true)), EventHandler.on(this._element, EVENT_FOCUSOUT, (e) => this._onInteraction(e, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const t = Toast.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (t[e] === void 0)
            throw new TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast), defineJQueryPlugin(Toast);

  // js/loan-list.js
  var loanListTemplate = `
<div v-for="item in lendItems">
    <div v-bind:class="[!isDisabled(item.status) ? 'available' : 'loaned', 'd-flex']" >
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        <p>{{item.url}}</p>
        <button class="btn btn-primary"  :disabled='isDisabled(item.status)' 
        @click="makeModal(item)"
        >{{item.btnText}}</button>
    </div>
</div>
`;
  function LoanList(props) {
    return {
      $template: loanListTemplate,
      lendItems: props.dataPassed,
      isDisabled(status) {
        return status === "Request" ? false : true;
      },
      formForm(item) {
        item.status = "Requested";
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfxOEOVuiuAWuz2ItL08MyeFDXUGBWHCWOj8My8isYBX0ilGQ/formResponse?entry.664743125=${item.title}&entry.1206457380=${item.description}&entry.430716838=Another%20Url%20Example1`, { mode: "no-cors" }).then(console.log(item.title)).then(() => {
        });
      },
      makeModal(item) {
        var myModal = new Modal(document.getElementById("exampleModal"));
        document.getElementById("exampleModal").setAttribute("data-loan", JSON.stringify(item));
        myModal.show();
      }
    };
  }

  // js/modal.js
  var modalTemplate = `
    <div v-scope class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="formForm(item)">Save changes</button>
        </div>
      </div>
    </div>
    </div>
    `;
  function Modal2() {
    return {
      $template: modalTemplate
    };
  }

  // js/index.js
  function fetchAndRender() {
    fetch("./data/lend.json").then((res) => res.json()).then((data) => {
      for (let items of data) {
        Object.assign(items, {
          btnText: "Request"
        });
      }
      Qe({
        data,
        LoanList,
        Modal: Modal2
      }).mount();
    });
  }
  fetchAndRender();
})();
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
