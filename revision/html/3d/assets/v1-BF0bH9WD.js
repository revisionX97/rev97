import { B as qi, C as za, D as $a, G as Na, E as ja, L as Hi, H as Fa, I as Ua, J as Ss, K as qa, M as mn, V as ue, O as Cs, N as He, P as Ha, Q as Lt, W as rt, R as Va, S as pi, U as Ga, X as Vi, Y as _i, Z as Wa, $ as xt, a0 as Ja, a1 as Xa, a2 as ks, a3 as _s, a4 as Za, a5 as Ka, a6 as Ya, a7 as Qa, a8 as eo, a9 as to, aa as no, ab as io, ac as gn, ad as dt, ae as ro, af as Es, ag as Ct, ah as tt, ai as so, aj as ao, ak as oo, al as uo, am as lo, an as co, ao as Gi, ap as hi, aq as wt, ar as fo, as as Ei, at as Ts, au as Zt, av as Kt, aw as zt, ax as po, ay as ho, az as mo, aA as go, aB as vo, aC as Wi, aD as bo, aE as yo, e as V, c as z, o as D, a as _, x as de, y as fe, t as H, u as A, j as he, g as ie, F as ce, h as ke, d as J, m as Y, b as me, aF as Ps, aG as mi, w as Et, aH as gi, aI as vi, T as Tt, aJ as Ti, f as ut, _ as $t, n as cn, i as We, v as xo, l as Ls, aK as wo, z as Ye, q as So, A as Co } from "./SkeletonUtils-Bl7JM-Sp.js";
import { u as xe, i as ko } from "./i18n-C5xLlbDi.js";
import { G as Ms, E as _o, T as Os, a as Eo, O as To } from "./OrbitControls-6ASvaWSN.js";
function Po(f, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n) if (r !== "default" && !(r in f)) {
        const i = Object.getOwnPropertyDescriptor(n, r);
        i && Object.defineProperty(f, r, i.get ? i : { enumerable: true, get: () => n[r] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function As(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
function Lo(f) {
  if (Object.prototype.hasOwnProperty.call(f, "__esModule")) return f;
  var e = f.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(f).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(f, n);
    Object.defineProperty(t, n, r.get ? r : { enumerable: true, get: function() {
      return f[n];
    } });
  }), t;
}
var Yt = { exports: {} };
/*!
* matter-js 0.19.0 by @liabru
* http://brm.io/matter-js/
* License MIT
* 
* The MIT License (MIT)
* 
* Copyright (c) Liam Brummitt and contributors.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var Mo = Yt.exports, Ji;
function Oo() {
  return Ji || (Ji = 1, function(f, e) {
    (function(n, r) {
      f.exports = r();
    })(Mo, function() {
      return function(t) {
        var n = {};
        function r(i) {
          if (n[i]) return n[i].exports;
          var o = n[i] = { i, l: false, exports: {} };
          return t[i].call(o.exports, o, o.exports, r), o.l = true, o.exports;
        }
        return r.m = t, r.c = n, r.d = function(i, o, l) {
          r.o(i, o) || Object.defineProperty(i, o, { enumerable: true, get: l });
        }, r.r = function(i) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: true });
        }, r.t = function(i, o) {
          if (o & 1 && (i = r(i)), o & 8 || o & 4 && typeof i == "object" && i && i.__esModule) return i;
          var l = /* @__PURE__ */ Object.create(null);
          if (r.r(l), Object.defineProperty(l, "default", { enumerable: true, value: i }), o & 2 && typeof i != "string") for (var d in i) r.d(l, d, function(c) {
            return i[c];
          }.bind(null, d));
          return l;
        }, r.n = function(i) {
          var o = i && i.__esModule ? function() {
            return i.default;
          } : function() {
            return i;
          };
          return r.d(o, "a", o), o;
        }, r.o = function(i, o) {
          return Object.prototype.hasOwnProperty.call(i, o);
        }, r.p = "", r(r.s = 20);
      }([function(t, n) {
        var r = {};
        t.exports = r, function() {
          r._baseDelta = 1e3 / 60, r._nextId = 0, r._seed = 0, r._nowStartTime = +/* @__PURE__ */ new Date(), r._warnedOnce = {}, r._decomp = null, r.extend = function(o, l) {
            var d, c;
            typeof l == "boolean" ? (d = 2, c = l) : (d = 1, c = true);
            for (var u = d; u < arguments.length; u++) {
              var p = arguments[u];
              if (p) for (var a in p) c && p[a] && p[a].constructor === Object && (!o[a] || o[a].constructor === Object) ? (o[a] = o[a] || {}, r.extend(o[a], c, p[a])) : o[a] = p[a];
            }
            return o;
          }, r.clone = function(o, l) {
            return r.extend({}, l, o);
          }, r.keys = function(o) {
            if (Object.keys) return Object.keys(o);
            var l = [];
            for (var d in o) l.push(d);
            return l;
          }, r.values = function(o) {
            var l = [];
            if (Object.keys) {
              for (var d = Object.keys(o), c = 0; c < d.length; c++) l.push(o[d[c]]);
              return l;
            }
            for (var u in o) l.push(o[u]);
            return l;
          }, r.get = function(o, l, d, c) {
            l = l.split(".").slice(d, c);
            for (var u = 0; u < l.length; u += 1) o = o[l[u]];
            return o;
          }, r.set = function(o, l, d, c, u) {
            var p = l.split(".").slice(c, u);
            return r.get(o, l, 0, -1)[p[p.length - 1]] = d, d;
          }, r.shuffle = function(o) {
            for (var l = o.length - 1; l > 0; l--) {
              var d = Math.floor(r.random() * (l + 1)), c = o[l];
              o[l] = o[d], o[d] = c;
            }
            return o;
          }, r.choose = function(o) {
            return o[Math.floor(r.random() * o.length)];
          }, r.isElement = function(o) {
            return typeof HTMLElement < "u" ? o instanceof HTMLElement : !!(o && o.nodeType && o.nodeName);
          }, r.isArray = function(o) {
            return Object.prototype.toString.call(o) === "[object Array]";
          }, r.isFunction = function(o) {
            return typeof o == "function";
          }, r.isPlainObject = function(o) {
            return typeof o == "object" && o.constructor === Object;
          }, r.isString = function(o) {
            return toString.call(o) === "[object String]";
          }, r.clamp = function(o, l, d) {
            return o < l ? l : o > d ? d : o;
          }, r.sign = function(o) {
            return o < 0 ? -1 : 1;
          }, r.now = function() {
            if (typeof window < "u" && window.performance) {
              if (window.performance.now) return window.performance.now();
              if (window.performance.webkitNow) return window.performance.webkitNow();
            }
            return Date.now ? Date.now() : /* @__PURE__ */ new Date() - r._nowStartTime;
          }, r.random = function(o, l) {
            return o = typeof o < "u" ? o : 0, l = typeof l < "u" ? l : 1, o + i() * (l - o);
          };
          var i = function() {
            return r._seed = (r._seed * 9301 + 49297) % 233280, r._seed / 233280;
          };
          r.colorToNumber = function(o) {
            return o = o.replace("#", ""), o.length == 3 && (o = o.charAt(0) + o.charAt(0) + o.charAt(1) + o.charAt(1) + o.charAt(2) + o.charAt(2)), parseInt(o, 16);
          }, r.logLevel = 1, r.log = function() {
            console && r.logLevel > 0 && r.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, r.info = function() {
            console && r.logLevel > 0 && r.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, r.warn = function() {
            console && r.logLevel > 0 && r.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, r.warnOnce = function() {
            var o = Array.prototype.slice.call(arguments).join(" ");
            r._warnedOnce[o] || (r.warn(o), r._warnedOnce[o] = true);
          }, r.deprecated = function(o, l, d) {
            o[l] = r.chain(function() {
              r.warnOnce("\u{1F505} deprecated \u{1F505}", d);
            }, o[l]);
          }, r.nextId = function() {
            return r._nextId++;
          }, r.indexOf = function(o, l) {
            if (o.indexOf) return o.indexOf(l);
            for (var d = 0; d < o.length; d++) if (o[d] === l) return d;
            return -1;
          }, r.map = function(o, l) {
            if (o.map) return o.map(l);
            for (var d = [], c = 0; c < o.length; c += 1) d.push(l(o[c]));
            return d;
          }, r.topologicalSort = function(o) {
            var l = [], d = [], c = [];
            for (var u in o) !d[u] && !c[u] && r._topologicalSort(u, d, c, o, l);
            return l;
          }, r._topologicalSort = function(o, l, d, c, u) {
            var p = c[o] || [];
            d[o] = true;
            for (var a = 0; a < p.length; a += 1) {
              var s = p[a];
              d[s] || l[s] || r._topologicalSort(s, l, d, c, u);
            }
            d[o] = false, l[o] = true, u.push(o);
          }, r.chain = function() {
            for (var o = [], l = 0; l < arguments.length; l += 1) {
              var d = arguments[l];
              d._chained ? o.push.apply(o, d._chained) : o.push(d);
            }
            var c = function() {
              for (var u, p = new Array(arguments.length), a = 0, s = arguments.length; a < s; a++) p[a] = arguments[a];
              for (a = 0; a < o.length; a += 1) {
                var m = o[a].apply(u, p);
                typeof m < "u" && (u = m);
              }
              return u;
            };
            return c._chained = o, c;
          }, r.chainPathBefore = function(o, l, d) {
            return r.set(o, l, r.chain(d, r.get(o, l)));
          }, r.chainPathAfter = function(o, l, d) {
            return r.set(o, l, r.chain(r.get(o, l), d));
          }, r.setDecomp = function(o) {
            r._decomp = o;
          }, r.getDecomp = function() {
            var o = r._decomp;
            try {
              !o && typeof window < "u" && (o = window.decomp), !o && typeof St < "u" && (o = St.decomp);
            } catch {
              o = null;
            }
            return o;
          };
        }();
      }, function(t, n) {
        var r = {};
        t.exports = r, function() {
          r.create = function(i) {
            var o = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
            return i && r.update(o, i), o;
          }, r.update = function(i, o, l) {
            i.min.x = 1 / 0, i.max.x = -1 / 0, i.min.y = 1 / 0, i.max.y = -1 / 0;
            for (var d = 0; d < o.length; d++) {
              var c = o[d];
              c.x > i.max.x && (i.max.x = c.x), c.x < i.min.x && (i.min.x = c.x), c.y > i.max.y && (i.max.y = c.y), c.y < i.min.y && (i.min.y = c.y);
            }
            l && (l.x > 0 ? i.max.x += l.x : i.min.x += l.x, l.y > 0 ? i.max.y += l.y : i.min.y += l.y);
          }, r.contains = function(i, o) {
            return o.x >= i.min.x && o.x <= i.max.x && o.y >= i.min.y && o.y <= i.max.y;
          }, r.overlaps = function(i, o) {
            return i.min.x <= o.max.x && i.max.x >= o.min.x && i.max.y >= o.min.y && i.min.y <= o.max.y;
          }, r.translate = function(i, o) {
            i.min.x += o.x, i.max.x += o.x, i.min.y += o.y, i.max.y += o.y;
          }, r.shift = function(i, o) {
            var l = i.max.x - i.min.x, d = i.max.y - i.min.y;
            i.min.x = o.x, i.max.x = o.x + l, i.min.y = o.y, i.max.y = o.y + d;
          };
        }();
      }, function(t, n) {
        var r = {};
        t.exports = r, function() {
          r.create = function(i, o) {
            return { x: i || 0, y: o || 0 };
          }, r.clone = function(i) {
            return { x: i.x, y: i.y };
          }, r.magnitude = function(i) {
            return Math.sqrt(i.x * i.x + i.y * i.y);
          }, r.magnitudeSquared = function(i) {
            return i.x * i.x + i.y * i.y;
          }, r.rotate = function(i, o, l) {
            var d = Math.cos(o), c = Math.sin(o);
            l || (l = {});
            var u = i.x * d - i.y * c;
            return l.y = i.x * c + i.y * d, l.x = u, l;
          }, r.rotateAbout = function(i, o, l, d) {
            var c = Math.cos(o), u = Math.sin(o);
            d || (d = {});
            var p = l.x + ((i.x - l.x) * c - (i.y - l.y) * u);
            return d.y = l.y + ((i.x - l.x) * u + (i.y - l.y) * c), d.x = p, d;
          }, r.normalise = function(i) {
            var o = r.magnitude(i);
            return o === 0 ? { x: 0, y: 0 } : { x: i.x / o, y: i.y / o };
          }, r.dot = function(i, o) {
            return i.x * o.x + i.y * o.y;
          }, r.cross = function(i, o) {
            return i.x * o.y - i.y * o.x;
          }, r.cross3 = function(i, o, l) {
            return (o.x - i.x) * (l.y - i.y) - (o.y - i.y) * (l.x - i.x);
          }, r.add = function(i, o, l) {
            return l || (l = {}), l.x = i.x + o.x, l.y = i.y + o.y, l;
          }, r.sub = function(i, o, l) {
            return l || (l = {}), l.x = i.x - o.x, l.y = i.y - o.y, l;
          }, r.mult = function(i, o) {
            return { x: i.x * o, y: i.y * o };
          }, r.div = function(i, o) {
            return { x: i.x / o, y: i.y / o };
          }, r.perp = function(i, o) {
            return o = o === true ? -1 : 1, { x: o * -i.y, y: o * i.x };
          }, r.neg = function(i) {
            return { x: -i.x, y: -i.y };
          }, r.angle = function(i, o) {
            return Math.atan2(o.y - i.y, o.x - i.x);
          }, r._temp = [r.create(), r.create(), r.create(), r.create(), r.create(), r.create()];
        }();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(2), l = r(0);
        (function() {
          i.create = function(d, c) {
            for (var u = [], p = 0; p < d.length; p++) {
              var a = d[p], s = { x: a.x, y: a.y, index: p, body: c, isInternal: false };
              u.push(s);
            }
            return u;
          }, i.fromPath = function(d, c) {
            var u = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, p = [];
            return d.replace(u, function(a, s, m) {
              p.push({ x: parseFloat(s), y: parseFloat(m) });
            }), i.create(p, c);
          }, i.centre = function(d) {
            for (var c = i.area(d, true), u = { x: 0, y: 0 }, p, a, s, m = 0; m < d.length; m++) s = (m + 1) % d.length, p = o.cross(d[m], d[s]), a = o.mult(o.add(d[m], d[s]), p), u = o.add(u, a);
            return o.div(u, 6 * c);
          }, i.mean = function(d) {
            for (var c = { x: 0, y: 0 }, u = 0; u < d.length; u++) c.x += d[u].x, c.y += d[u].y;
            return o.div(c, d.length);
          }, i.area = function(d, c) {
            for (var u = 0, p = d.length - 1, a = 0; a < d.length; a++) u += (d[p].x - d[a].x) * (d[p].y + d[a].y), p = a;
            return c ? u / 2 : Math.abs(u) / 2;
          }, i.inertia = function(d, c) {
            for (var u = 0, p = 0, a = d, s, m, h = 0; h < a.length; h++) m = (h + 1) % a.length, s = Math.abs(o.cross(a[m], a[h])), u += s * (o.dot(a[m], a[m]) + o.dot(a[m], a[h]) + o.dot(a[h], a[h])), p += s;
            return c / 6 * (u / p);
          }, i.translate = function(d, c, u) {
            u = typeof u < "u" ? u : 1;
            var p = d.length, a = c.x * u, s = c.y * u, m;
            for (m = 0; m < p; m++) d[m].x += a, d[m].y += s;
            return d;
          }, i.rotate = function(d, c, u) {
            if (c !== 0) {
              var p = Math.cos(c), a = Math.sin(c), s = u.x, m = u.y, h = d.length, g, v, x, w;
              for (w = 0; w < h; w++) g = d[w], v = g.x - s, x = g.y - m, g.x = s + (v * p - x * a), g.y = m + (v * a + x * p);
              return d;
            }
          }, i.contains = function(d, c) {
            for (var u = c.x, p = c.y, a = d.length, s = d[a - 1], m, h = 0; h < a; h++) {
              if (m = d[h], (u - s.x) * (m.y - s.y) + (p - s.y) * (s.x - m.x) > 0) return false;
              s = m;
            }
            return true;
          }, i.scale = function(d, c, u, p) {
            if (c === 1 && u === 1) return d;
            p = p || i.centre(d);
            for (var a, s, m = 0; m < d.length; m++) a = d[m], s = o.sub(a, p), d[m].x = p.x + s.x * c, d[m].y = p.y + s.y * u;
            return d;
          }, i.chamfer = function(d, c, u, p, a) {
            typeof c == "number" ? c = [c] : c = c || [8], u = typeof u < "u" ? u : -1, p = p || 2, a = a || 14;
            for (var s = [], m = 0; m < d.length; m++) {
              var h = d[m - 1 >= 0 ? m - 1 : d.length - 1], g = d[m], v = d[(m + 1) % d.length], x = c[m < c.length ? m : c.length - 1];
              if (x === 0) {
                s.push(g);
                continue;
              }
              var w = o.normalise({ x: g.y - h.y, y: h.x - g.x }), y = o.normalise({ x: v.y - g.y, y: g.x - v.x }), b = Math.sqrt(2 * Math.pow(x, 2)), S = o.mult(l.clone(w), x), C = o.normalise(o.mult(o.add(w, y), 0.5)), k = o.sub(g, o.mult(C, b)), P = u;
              u === -1 && (P = Math.pow(x, 0.32) * 1.75), P = l.clamp(P, p, a), P % 2 === 1 && (P += 1);
              for (var L = Math.acos(o.dot(w, y)), E = L / P, T = 0; T < P; T++) s.push(o.add(o.rotate(S, E * T), k));
            }
            return s;
          }, i.clockwiseSort = function(d) {
            var c = i.mean(d);
            return d.sort(function(u, p) {
              return o.angle(c, u) - o.angle(c, p);
            }), d;
          }, i.isConvex = function(d) {
            var c = 0, u = d.length, p, a, s, m;
            if (u < 3) return null;
            for (p = 0; p < u; p++) if (a = (p + 1) % u, s = (p + 2) % u, m = (d[a].x - d[p].x) * (d[s].y - d[a].y), m -= (d[a].y - d[p].y) * (d[s].x - d[a].x), m < 0 ? c |= 1 : m > 0 && (c |= 2), c === 3) return false;
            return c !== 0 ? true : null;
          }, i.hull = function(d) {
            var c = [], u = [], p, a;
            for (d = d.slice(0), d.sort(function(s, m) {
              var h = s.x - m.x;
              return h !== 0 ? h : s.y - m.y;
            }), a = 0; a < d.length; a += 1) {
              for (p = d[a]; u.length >= 2 && o.cross3(u[u.length - 2], u[u.length - 1], p) <= 0; ) u.pop();
              u.push(p);
            }
            for (a = d.length - 1; a >= 0; a -= 1) {
              for (p = d[a]; c.length >= 2 && o.cross3(c[c.length - 2], c[c.length - 1], p) <= 0; ) c.pop();
              c.push(p);
            }
            return c.pop(), u.pop(), c.concat(u);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(2), d = r(7), c = r(0), u = r(1), p = r(11);
        (function() {
          i._timeCorrection = true, i._inertiaScale = 4, i._nextCollidingGroupId = 1, i._nextNonCollidingGroupId = -1, i._nextCategory = 1, i._baseDelta = 1e3 / 60, i.create = function(s) {
            var m = { id: c.nextId(), type: "body", label: "Body", parts: [], plugin: {}, angle: 0, vertices: o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"), position: { x: 0, y: 0 }, force: { x: 0, y: 0 }, torque: 0, positionImpulse: { x: 0, y: 0 }, constraintImpulse: { x: 0, y: 0, angle: 0 }, totalContacts: 0, speed: 0, angularSpeed: 0, velocity: { x: 0, y: 0 }, angularVelocity: 0, isSensor: false, isStatic: false, isSleeping: false, motion: 0, sleepThreshold: 60, density: 1e-3, restitution: 0, friction: 0.1, frictionStatic: 0.5, frictionAir: 0.01, collisionFilter: { category: 1, mask: 4294967295, group: 0 }, slop: 0.05, timeScale: 1, render: { visible: true, opacity: 1, strokeStyle: null, fillStyle: null, lineWidth: null, sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 } }, events: null, bounds: null, chamfer: null, circleRadius: 0, positionPrev: null, anglePrev: 0, parent: null, axes: null, area: 0, mass: 0, inertia: 0, deltaTime: 16.666666666666668, _original: null }, h = c.extend(m, s);
            return a(h, s), h;
          }, i.nextGroup = function(s) {
            return s ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
          }, i.nextCategory = function() {
            return i._nextCategory = i._nextCategory << 1, i._nextCategory;
          };
          var a = function(s, m) {
            m = m || {}, i.set(s, { bounds: s.bounds || u.create(s.vertices), positionPrev: s.positionPrev || l.clone(s.position), anglePrev: s.anglePrev || s.angle, vertices: s.vertices, parts: s.parts || [s], isStatic: s.isStatic, isSleeping: s.isSleeping, parent: s.parent || s }), o.rotate(s.vertices, s.angle, s.position), p.rotate(s.axes, s.angle), u.update(s.bounds, s.vertices, s.velocity), i.set(s, { axes: m.axes || s.axes, area: m.area || s.area, mass: m.mass || s.mass, inertia: m.inertia || s.inertia });
            var h = s.isStatic ? "#14151f" : c.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), g = s.isStatic ? "#555" : "#ccc", v = s.isStatic && s.render.fillStyle === null ? 1 : 0;
            s.render.fillStyle = s.render.fillStyle || h, s.render.strokeStyle = s.render.strokeStyle || g, s.render.lineWidth = s.render.lineWidth || v, s.render.sprite.xOffset += -(s.bounds.min.x - s.position.x) / (s.bounds.max.x - s.bounds.min.x), s.render.sprite.yOffset += -(s.bounds.min.y - s.position.y) / (s.bounds.max.y - s.bounds.min.y);
          };
          i.set = function(s, m, h) {
            var g;
            typeof m == "string" && (g = m, m = {}, m[g] = h);
            for (g in m) if (Object.prototype.hasOwnProperty.call(m, g)) switch (h = m[g], g) {
              case "isStatic":
                i.setStatic(s, h);
                break;
              case "isSleeping":
                d.set(s, h);
                break;
              case "mass":
                i.setMass(s, h);
                break;
              case "density":
                i.setDensity(s, h);
                break;
              case "inertia":
                i.setInertia(s, h);
                break;
              case "vertices":
                i.setVertices(s, h);
                break;
              case "position":
                i.setPosition(s, h);
                break;
              case "angle":
                i.setAngle(s, h);
                break;
              case "velocity":
                i.setVelocity(s, h);
                break;
              case "angularVelocity":
                i.setAngularVelocity(s, h);
                break;
              case "speed":
                i.setSpeed(s, h);
                break;
              case "angularSpeed":
                i.setAngularSpeed(s, h);
                break;
              case "parts":
                i.setParts(s, h);
                break;
              case "centre":
                i.setCentre(s, h);
                break;
              default:
                s[g] = h;
            }
          }, i.setStatic = function(s, m) {
            for (var h = 0; h < s.parts.length; h++) {
              var g = s.parts[h];
              g.isStatic = m, m ? (g._original = { restitution: g.restitution, friction: g.friction, mass: g.mass, inertia: g.inertia, density: g.density, inverseMass: g.inverseMass, inverseInertia: g.inverseInertia }, g.restitution = 0, g.friction = 1, g.mass = g.inertia = g.density = 1 / 0, g.inverseMass = g.inverseInertia = 0, g.positionPrev.x = g.position.x, g.positionPrev.y = g.position.y, g.anglePrev = g.angle, g.angularVelocity = 0, g.speed = 0, g.angularSpeed = 0, g.motion = 0) : g._original && (g.restitution = g._original.restitution, g.friction = g._original.friction, g.mass = g._original.mass, g.inertia = g._original.inertia, g.density = g._original.density, g.inverseMass = g._original.inverseMass, g.inverseInertia = g._original.inverseInertia, g._original = null);
            }
          }, i.setMass = function(s, m) {
            var h = s.inertia / (s.mass / 6);
            s.inertia = h * (m / 6), s.inverseInertia = 1 / s.inertia, s.mass = m, s.inverseMass = 1 / s.mass, s.density = s.mass / s.area;
          }, i.setDensity = function(s, m) {
            i.setMass(s, m * s.area), s.density = m;
          }, i.setInertia = function(s, m) {
            s.inertia = m, s.inverseInertia = 1 / s.inertia;
          }, i.setVertices = function(s, m) {
            m[0].body === s ? s.vertices = m : s.vertices = o.create(m, s), s.axes = p.fromVertices(s.vertices), s.area = o.area(s.vertices), i.setMass(s, s.density * s.area);
            var h = o.centre(s.vertices);
            o.translate(s.vertices, h, -1), i.setInertia(s, i._inertiaScale * o.inertia(s.vertices, s.mass)), o.translate(s.vertices, s.position), u.update(s.bounds, s.vertices, s.velocity);
          }, i.setParts = function(s, m, h) {
            var g;
            for (m = m.slice(0), s.parts.length = 0, s.parts.push(s), s.parent = s, g = 0; g < m.length; g++) {
              var v = m[g];
              v !== s && (v.parent = s, s.parts.push(v));
            }
            if (s.parts.length !== 1) {
              if (h = typeof h < "u" ? h : true, h) {
                var x = [];
                for (g = 0; g < m.length; g++) x = x.concat(m[g].vertices);
                o.clockwiseSort(x);
                var w = o.hull(x), y = o.centre(w);
                i.setVertices(s, w), o.translate(s.vertices, y);
              }
              var b = i._totalProperties(s);
              s.area = b.area, s.parent = s, s.position.x = b.centre.x, s.position.y = b.centre.y, s.positionPrev.x = b.centre.x, s.positionPrev.y = b.centre.y, i.setMass(s, b.mass), i.setInertia(s, b.inertia), i.setPosition(s, b.centre);
            }
          }, i.setCentre = function(s, m, h) {
            h ? (s.positionPrev.x += m.x, s.positionPrev.y += m.y, s.position.x += m.x, s.position.y += m.y) : (s.positionPrev.x = m.x - (s.position.x - s.positionPrev.x), s.positionPrev.y = m.y - (s.position.y - s.positionPrev.y), s.position.x = m.x, s.position.y = m.y);
          }, i.setPosition = function(s, m, h) {
            var g = l.sub(m, s.position);
            h ? (s.positionPrev.x = s.position.x, s.positionPrev.y = s.position.y, s.velocity.x = g.x, s.velocity.y = g.y, s.speed = l.magnitude(g)) : (s.positionPrev.x += g.x, s.positionPrev.y += g.y);
            for (var v = 0; v < s.parts.length; v++) {
              var x = s.parts[v];
              x.position.x += g.x, x.position.y += g.y, o.translate(x.vertices, g), u.update(x.bounds, x.vertices, s.velocity);
            }
          }, i.setAngle = function(s, m, h) {
            var g = m - s.angle;
            h ? (s.anglePrev = s.angle, s.angularVelocity = g, s.angularSpeed = Math.abs(g)) : s.anglePrev += g;
            for (var v = 0; v < s.parts.length; v++) {
              var x = s.parts[v];
              x.angle += g, o.rotate(x.vertices, g, s.position), p.rotate(x.axes, g), u.update(x.bounds, x.vertices, s.velocity), v > 0 && l.rotateAbout(x.position, g, s.position, x.position);
            }
          }, i.setVelocity = function(s, m) {
            var h = s.deltaTime / i._baseDelta;
            s.positionPrev.x = s.position.x - m.x * h, s.positionPrev.y = s.position.y - m.y * h, s.velocity.x = (s.position.x - s.positionPrev.x) / h, s.velocity.y = (s.position.y - s.positionPrev.y) / h, s.speed = l.magnitude(s.velocity);
          }, i.getVelocity = function(s) {
            var m = i._baseDelta / s.deltaTime;
            return { x: (s.position.x - s.positionPrev.x) * m, y: (s.position.y - s.positionPrev.y) * m };
          }, i.getSpeed = function(s) {
            return l.magnitude(i.getVelocity(s));
          }, i.setSpeed = function(s, m) {
            i.setVelocity(s, l.mult(l.normalise(i.getVelocity(s)), m));
          }, i.setAngularVelocity = function(s, m) {
            var h = s.deltaTime / i._baseDelta;
            s.anglePrev = s.angle - m * h, s.angularVelocity = (s.angle - s.anglePrev) / h, s.angularSpeed = Math.abs(s.angularVelocity);
          }, i.getAngularVelocity = function(s) {
            return (s.angle - s.anglePrev) * i._baseDelta / s.deltaTime;
          }, i.getAngularSpeed = function(s) {
            return Math.abs(i.getAngularVelocity(s));
          }, i.setAngularSpeed = function(s, m) {
            i.setAngularVelocity(s, c.sign(i.getAngularVelocity(s)) * m);
          }, i.translate = function(s, m, h) {
            i.setPosition(s, l.add(s.position, m), h);
          }, i.rotate = function(s, m, h, g) {
            if (!h) i.setAngle(s, s.angle + m, g);
            else {
              var v = Math.cos(m), x = Math.sin(m), w = s.position.x - h.x, y = s.position.y - h.y;
              i.setPosition(s, { x: h.x + (w * v - y * x), y: h.y + (w * x + y * v) }, g), i.setAngle(s, s.angle + m, g);
            }
          }, i.scale = function(s, m, h, g) {
            var v = 0, x = 0;
            g = g || s.position;
            for (var w = 0; w < s.parts.length; w++) {
              var y = s.parts[w];
              o.scale(y.vertices, m, h, g), y.axes = p.fromVertices(y.vertices), y.area = o.area(y.vertices), i.setMass(y, s.density * y.area), o.translate(y.vertices, { x: -y.position.x, y: -y.position.y }), i.setInertia(y, i._inertiaScale * o.inertia(y.vertices, y.mass)), o.translate(y.vertices, { x: y.position.x, y: y.position.y }), w > 0 && (v += y.area, x += y.inertia), y.position.x = g.x + (y.position.x - g.x) * m, y.position.y = g.y + (y.position.y - g.y) * h, u.update(y.bounds, y.vertices, s.velocity);
            }
            s.parts.length > 1 && (s.area = v, s.isStatic || (i.setMass(s, s.density * v), i.setInertia(s, x))), s.circleRadius && (m === h ? s.circleRadius *= m : s.circleRadius = null);
          }, i.update = function(s, m) {
            m = (typeof m < "u" ? m : 1e3 / 60) * s.timeScale;
            var h = m * m, g = i._timeCorrection ? m / (s.deltaTime || m) : 1, v = 1 - s.frictionAir * (m / c._baseDelta), x = (s.position.x - s.positionPrev.x) * g, w = (s.position.y - s.positionPrev.y) * g;
            s.velocity.x = x * v + s.force.x / s.mass * h, s.velocity.y = w * v + s.force.y / s.mass * h, s.positionPrev.x = s.position.x, s.positionPrev.y = s.position.y, s.position.x += s.velocity.x, s.position.y += s.velocity.y, s.deltaTime = m, s.angularVelocity = (s.angle - s.anglePrev) * v * g + s.torque / s.inertia * h, s.anglePrev = s.angle, s.angle += s.angularVelocity;
            for (var y = 0; y < s.parts.length; y++) {
              var b = s.parts[y];
              o.translate(b.vertices, s.velocity), y > 0 && (b.position.x += s.velocity.x, b.position.y += s.velocity.y), s.angularVelocity !== 0 && (o.rotate(b.vertices, s.angularVelocity, s.position), p.rotate(b.axes, s.angularVelocity), y > 0 && l.rotateAbout(b.position, s.angularVelocity, s.position, b.position)), u.update(b.bounds, b.vertices, s.velocity);
            }
          }, i.updateVelocities = function(s) {
            var m = i._baseDelta / s.deltaTime, h = s.velocity;
            h.x = (s.position.x - s.positionPrev.x) * m, h.y = (s.position.y - s.positionPrev.y) * m, s.speed = Math.sqrt(h.x * h.x + h.y * h.y), s.angularVelocity = (s.angle - s.anglePrev) * m, s.angularSpeed = Math.abs(s.angularVelocity);
          }, i.applyForce = function(s, m, h) {
            var g = { x: m.x - s.position.x, y: m.y - s.position.y };
            s.force.x += h.x, s.force.y += h.y, s.torque += g.x * h.y - g.y * h.x;
          }, i._totalProperties = function(s) {
            for (var m = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } }, h = s.parts.length === 1 ? 0 : 1; h < s.parts.length; h++) {
              var g = s.parts[h], v = g.mass !== 1 / 0 ? g.mass : 1;
              m.mass += v, m.area += g.area, m.inertia += g.inertia, m.centre = l.add(m.centre, l.mult(g.position, v));
            }
            return m.centre = l.div(m.centre, m.mass), m;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(0);
        (function() {
          i.on = function(l, d, c) {
            for (var u = d.split(" "), p, a = 0; a < u.length; a++) p = u[a], l.events = l.events || {}, l.events[p] = l.events[p] || [], l.events[p].push(c);
            return c;
          }, i.off = function(l, d, c) {
            if (!d) {
              l.events = {};
              return;
            }
            typeof d == "function" && (c = d, d = o.keys(l.events).join(" "));
            for (var u = d.split(" "), p = 0; p < u.length; p++) {
              var a = l.events[u[p]], s = [];
              if (c && a) for (var m = 0; m < a.length; m++) a[m] !== c && s.push(a[m]);
              l.events[u[p]] = s;
            }
          }, i.trigger = function(l, d, c) {
            var u, p, a, s, m = l.events;
            if (m && o.keys(m).length > 0) {
              c || (c = {}), u = d.split(" ");
              for (var h = 0; h < u.length; h++) if (p = u[h], a = m[p], a) {
                s = o.clone(c, false), s.name = p, s.source = l;
                for (var g = 0; g < a.length; g++) a[g].apply(l, [s]);
              }
            }
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(5), l = r(0), d = r(1), c = r(4);
        (function() {
          i.create = function(u) {
            return l.extend({ id: l.nextId(), type: "composite", parent: null, isModified: false, bodies: [], constraints: [], composites: [], label: "Composite", plugin: {}, cache: { allBodies: null, allConstraints: null, allComposites: null } }, u);
          }, i.setModified = function(u, p, a, s) {
            if (u.isModified = p, p && u.cache && (u.cache.allBodies = null, u.cache.allConstraints = null, u.cache.allComposites = null), a && u.parent && i.setModified(u.parent, p, a, s), s) for (var m = 0; m < u.composites.length; m++) {
              var h = u.composites[m];
              i.setModified(h, p, a, s);
            }
          }, i.add = function(u, p) {
            var a = [].concat(p);
            o.trigger(u, "beforeAdd", { object: p });
            for (var s = 0; s < a.length; s++) {
              var m = a[s];
              switch (m.type) {
                case "body":
                  if (m.parent !== m) {
                    l.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                    break;
                  }
                  i.addBody(u, m);
                  break;
                case "constraint":
                  i.addConstraint(u, m);
                  break;
                case "composite":
                  i.addComposite(u, m);
                  break;
                case "mouseConstraint":
                  i.addConstraint(u, m.constraint);
                  break;
              }
            }
            return o.trigger(u, "afterAdd", { object: p }), u;
          }, i.remove = function(u, p, a) {
            var s = [].concat(p);
            o.trigger(u, "beforeRemove", { object: p });
            for (var m = 0; m < s.length; m++) {
              var h = s[m];
              switch (h.type) {
                case "body":
                  i.removeBody(u, h, a);
                  break;
                case "constraint":
                  i.removeConstraint(u, h, a);
                  break;
                case "composite":
                  i.removeComposite(u, h, a);
                  break;
                case "mouseConstraint":
                  i.removeConstraint(u, h.constraint);
                  break;
              }
            }
            return o.trigger(u, "afterRemove", { object: p }), u;
          }, i.addComposite = function(u, p) {
            return u.composites.push(p), p.parent = u, i.setModified(u, true, true, false), u;
          }, i.removeComposite = function(u, p, a) {
            var s = l.indexOf(u.composites, p);
            if (s !== -1 && i.removeCompositeAt(u, s), a) for (var m = 0; m < u.composites.length; m++) i.removeComposite(u.composites[m], p, true);
            return u;
          }, i.removeCompositeAt = function(u, p) {
            return u.composites.splice(p, 1), i.setModified(u, true, true, false), u;
          }, i.addBody = function(u, p) {
            return u.bodies.push(p), i.setModified(u, true, true, false), u;
          }, i.removeBody = function(u, p, a) {
            var s = l.indexOf(u.bodies, p);
            if (s !== -1 && i.removeBodyAt(u, s), a) for (var m = 0; m < u.composites.length; m++) i.removeBody(u.composites[m], p, true);
            return u;
          }, i.removeBodyAt = function(u, p) {
            return u.bodies.splice(p, 1), i.setModified(u, true, true, false), u;
          }, i.addConstraint = function(u, p) {
            return u.constraints.push(p), i.setModified(u, true, true, false), u;
          }, i.removeConstraint = function(u, p, a) {
            var s = l.indexOf(u.constraints, p);
            if (s !== -1 && i.removeConstraintAt(u, s), a) for (var m = 0; m < u.composites.length; m++) i.removeConstraint(u.composites[m], p, true);
            return u;
          }, i.removeConstraintAt = function(u, p) {
            return u.constraints.splice(p, 1), i.setModified(u, true, true, false), u;
          }, i.clear = function(u, p, a) {
            if (a) for (var s = 0; s < u.composites.length; s++) i.clear(u.composites[s], p, true);
            return p ? u.bodies = u.bodies.filter(function(m) {
              return m.isStatic;
            }) : u.bodies.length = 0, u.constraints.length = 0, u.composites.length = 0, i.setModified(u, true, true, false), u;
          }, i.allBodies = function(u) {
            if (u.cache && u.cache.allBodies) return u.cache.allBodies;
            for (var p = [].concat(u.bodies), a = 0; a < u.composites.length; a++) p = p.concat(i.allBodies(u.composites[a]));
            return u.cache && (u.cache.allBodies = p), p;
          }, i.allConstraints = function(u) {
            if (u.cache && u.cache.allConstraints) return u.cache.allConstraints;
            for (var p = [].concat(u.constraints), a = 0; a < u.composites.length; a++) p = p.concat(i.allConstraints(u.composites[a]));
            return u.cache && (u.cache.allConstraints = p), p;
          }, i.allComposites = function(u) {
            if (u.cache && u.cache.allComposites) return u.cache.allComposites;
            for (var p = [].concat(u.composites), a = 0; a < u.composites.length; a++) p = p.concat(i.allComposites(u.composites[a]));
            return u.cache && (u.cache.allComposites = p), p;
          }, i.get = function(u, p, a) {
            var s, m;
            switch (a) {
              case "body":
                s = i.allBodies(u);
                break;
              case "constraint":
                s = i.allConstraints(u);
                break;
              case "composite":
                s = i.allComposites(u).concat(u);
                break;
            }
            return s ? (m = s.filter(function(h) {
              return h.id.toString() === p.toString();
            }), m.length === 0 ? null : m[0]) : null;
          }, i.move = function(u, p, a) {
            return i.remove(u, p), i.add(a, p), u;
          }, i.rebase = function(u) {
            for (var p = i.allBodies(u).concat(i.allConstraints(u)).concat(i.allComposites(u)), a = 0; a < p.length; a++) p[a].id = l.nextId();
            return u;
          }, i.translate = function(u, p, a) {
            for (var s = a ? i.allBodies(u) : u.bodies, m = 0; m < s.length; m++) c.translate(s[m], p);
            return u;
          }, i.rotate = function(u, p, a, s) {
            for (var m = Math.cos(p), h = Math.sin(p), g = s ? i.allBodies(u) : u.bodies, v = 0; v < g.length; v++) {
              var x = g[v], w = x.position.x - a.x, y = x.position.y - a.y;
              c.setPosition(x, { x: a.x + (w * m - y * h), y: a.y + (w * h + y * m) }), c.rotate(x, p);
            }
            return u;
          }, i.scale = function(u, p, a, s, m) {
            for (var h = m ? i.allBodies(u) : u.bodies, g = 0; g < h.length; g++) {
              var v = h[g], x = v.position.x - s.x, w = v.position.y - s.y;
              c.setPosition(v, { x: s.x + x * p, y: s.y + w * a }), c.scale(v, p, a);
            }
            return u;
          }, i.bounds = function(u) {
            for (var p = i.allBodies(u), a = [], s = 0; s < p.length; s += 1) {
              var m = p[s];
              a.push(m.bounds.min, m.bounds.max);
            }
            return d.create(a);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(4), l = r(5), d = r(0);
        (function() {
          i._motionWakeThreshold = 0.18, i._motionSleepThreshold = 0.08, i._minBias = 0.9, i.update = function(c, u) {
            for (var p = u / d._baseDelta, a = i._motionSleepThreshold, s = 0; s < c.length; s++) {
              var m = c[s], h = o.getSpeed(m), g = o.getAngularSpeed(m), v = h * h + g * g;
              if (m.force.x !== 0 || m.force.y !== 0) {
                i.set(m, false);
                continue;
              }
              var x = Math.min(m.motion, v), w = Math.max(m.motion, v);
              m.motion = i._minBias * x + (1 - i._minBias) * w, m.sleepThreshold > 0 && m.motion < a ? (m.sleepCounter += 1, m.sleepCounter >= m.sleepThreshold / p && i.set(m, true)) : m.sleepCounter > 0 && (m.sleepCounter -= 1);
            }
          }, i.afterCollisions = function(c) {
            for (var u = i._motionSleepThreshold, p = 0; p < c.length; p++) {
              var a = c[p];
              if (a.isActive) {
                var s = a.collision, m = s.bodyA.parent, h = s.bodyB.parent;
                if (!(m.isSleeping && h.isSleeping || m.isStatic || h.isStatic) && (m.isSleeping || h.isSleeping)) {
                  var g = m.isSleeping && !m.isStatic ? m : h, v = g === m ? h : m;
                  !g.isStatic && v.motion > u && i.set(g, false);
                }
              }
            }
          }, i.set = function(c, u) {
            var p = c.isSleeping;
            u ? (c.isSleeping = true, c.sleepCounter = c.sleepThreshold, c.positionImpulse.x = 0, c.positionImpulse.y = 0, c.positionPrev.x = c.position.x, c.positionPrev.y = c.position.y, c.anglePrev = c.angle, c.speed = 0, c.angularSpeed = 0, c.motion = 0, p || l.trigger(c, "sleepStart")) : (c.isSleeping = false, c.sleepCounter = 0, p && l.trigger(c, "sleepEnd"));
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(9);
        (function() {
          var d = [], c = { overlap: 0, axis: null }, u = { overlap: 0, axis: null };
          i.create = function(p, a) {
            return { pair: null, collided: false, bodyA: p, bodyB: a, parentA: p.parent, parentB: a.parent, depth: 0, normal: { x: 0, y: 0 }, tangent: { x: 0, y: 0 }, penetration: { x: 0, y: 0 }, supports: [] };
          }, i.collides = function(p, a, s) {
            if (i._overlapAxes(c, p.vertices, a.vertices, p.axes), c.overlap <= 0 || (i._overlapAxes(u, a.vertices, p.vertices, a.axes), u.overlap <= 0)) return null;
            var m = s && s.table[l.id(p, a)], h;
            m ? h = m.collision : (h = i.create(p, a), h.collided = true, h.bodyA = p.id < a.id ? p : a, h.bodyB = p.id < a.id ? a : p, h.parentA = h.bodyA.parent, h.parentB = h.bodyB.parent), p = h.bodyA, a = h.bodyB;
            var g;
            c.overlap < u.overlap ? g = c : g = u;
            var v = h.normal, x = h.supports, w = g.axis, y = w.x, b = w.y;
            y * (a.position.x - p.position.x) + b * (a.position.y - p.position.y) < 0 ? (v.x = y, v.y = b) : (v.x = -y, v.y = -b), h.tangent.x = -v.y, h.tangent.y = v.x, h.depth = g.overlap, h.penetration.x = v.x * h.depth, h.penetration.y = v.y * h.depth;
            var S = i._findSupports(p, a, v, 1), C = 0;
            if (o.contains(p.vertices, S[0]) && (x[C++] = S[0]), o.contains(p.vertices, S[1]) && (x[C++] = S[1]), C < 2) {
              var k = i._findSupports(a, p, v, -1);
              o.contains(a.vertices, k[0]) && (x[C++] = k[0]), C < 2 && o.contains(a.vertices, k[1]) && (x[C++] = k[1]);
            }
            return C === 0 && (x[C++] = S[0]), x.length = C, h;
          }, i._overlapAxes = function(p, a, s, m) {
            var h = a.length, g = s.length, v = a[0].x, x = a[0].y, w = s[0].x, y = s[0].y, b = m.length, S = Number.MAX_VALUE, C = 0, k, P, L, E, T, M;
            for (T = 0; T < b; T++) {
              var R = m[T], O = R.x, U = R.y, N = v * O + x * U, $ = w * O + y * U, F = N, B = $;
              for (M = 1; M < h; M += 1) E = a[M].x * O + a[M].y * U, E > F ? F = E : E < N && (N = E);
              for (M = 1; M < g; M += 1) E = s[M].x * O + s[M].y * U, E > B ? B = E : E < $ && ($ = E);
              if (P = F - $, L = B - N, k = P < L ? P : L, k < S && (S = k, C = T, k <= 0)) break;
            }
            p.axis = m[C], p.overlap = S;
          }, i._projectToAxis = function(p, a, s) {
            for (var m = a[0].x * s.x + a[0].y * s.y, h = m, g = 1; g < a.length; g += 1) {
              var v = a[g].x * s.x + a[g].y * s.y;
              v > h ? h = v : v < m && (m = v);
            }
            p.min = m, p.max = h;
          }, i._findSupports = function(p, a, s, m) {
            var h = a.vertices, g = h.length, v = p.position.x, x = p.position.y, w = s.x * m, y = s.y * m, b = Number.MAX_VALUE, S, C, k, P, L;
            for (L = 0; L < g; L += 1) C = h[L], P = w * (v - C.x) + y * (x - C.y), P < b && (b = P, S = C);
            return k = h[(g + S.index - 1) % g], b = w * (v - k.x) + y * (x - k.y), C = h[(S.index + 1) % g], w * (v - C.x) + y * (x - C.y) < b ? (d[0] = S, d[1] = C, d) : (d[0] = S, d[1] = k, d);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(16);
        (function() {
          i.create = function(l, d) {
            var c = l.bodyA, u = l.bodyB, p = { id: i.id(c, u), bodyA: c, bodyB: u, collision: l, contacts: [], activeContacts: [], separation: 0, isActive: true, confirmedActive: true, isSensor: c.isSensor || u.isSensor, timeCreated: d, timeUpdated: d, inverseMass: 0, friction: 0, frictionStatic: 0, restitution: 0, slop: 0 };
            return i.update(p, l, d), p;
          }, i.update = function(l, d, c) {
            var u = l.contacts, p = d.supports, a = l.activeContacts, s = d.parentA, m = d.parentB, h = s.vertices.length;
            l.isActive = true, l.timeUpdated = c, l.collision = d, l.separation = d.depth, l.inverseMass = s.inverseMass + m.inverseMass, l.friction = s.friction < m.friction ? s.friction : m.friction, l.frictionStatic = s.frictionStatic > m.frictionStatic ? s.frictionStatic : m.frictionStatic, l.restitution = s.restitution > m.restitution ? s.restitution : m.restitution, l.slop = s.slop > m.slop ? s.slop : m.slop, d.pair = l, a.length = 0;
            for (var g = 0; g < p.length; g++) {
              var v = p[g], x = v.body === s ? v.index : h + v.index, w = u[x];
              w ? a.push(w) : a.push(u[x] = o.create(v));
            }
          }, i.setActive = function(l, d, c) {
            d ? (l.isActive = true, l.timeUpdated = c) : (l.isActive = false, l.activeContacts.length = 0);
          }, i.id = function(l, d) {
            return l.id < d.id ? "A" + l.id + "B" + d.id : "A" + d.id + "B" + l.id;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(2), d = r(7), c = r(1), u = r(11), p = r(0);
        (function() {
          i._warming = 0.4, i._torqueDampen = 1, i._minLength = 1e-6, i.create = function(a) {
            var s = a;
            s.bodyA && !s.pointA && (s.pointA = { x: 0, y: 0 }), s.bodyB && !s.pointB && (s.pointB = { x: 0, y: 0 });
            var m = s.bodyA ? l.add(s.bodyA.position, s.pointA) : s.pointA, h = s.bodyB ? l.add(s.bodyB.position, s.pointB) : s.pointB, g = l.magnitude(l.sub(m, h));
            s.length = typeof s.length < "u" ? s.length : g, s.id = s.id || p.nextId(), s.label = s.label || "Constraint", s.type = "constraint", s.stiffness = s.stiffness || (s.length > 0 ? 1 : 0.7), s.damping = s.damping || 0, s.angularStiffness = s.angularStiffness || 0, s.angleA = s.bodyA ? s.bodyA.angle : s.angleA, s.angleB = s.bodyB ? s.bodyB.angle : s.angleB, s.plugin = {};
            var v = { visible: true, lineWidth: 2, strokeStyle: "#ffffff", type: "line", anchors: true };
            return s.length === 0 && s.stiffness > 0.1 ? (v.type = "pin", v.anchors = false) : s.stiffness < 0.9 && (v.type = "spring"), s.render = p.extend(v, s.render), s;
          }, i.preSolveAll = function(a) {
            for (var s = 0; s < a.length; s += 1) {
              var m = a[s], h = m.constraintImpulse;
              m.isStatic || h.x === 0 && h.y === 0 && h.angle === 0 || (m.position.x += h.x, m.position.y += h.y, m.angle += h.angle);
            }
          }, i.solveAll = function(a, s) {
            for (var m = p.clamp(s / p._baseDelta, 0, 1), h = 0; h < a.length; h += 1) {
              var g = a[h], v = !g.bodyA || g.bodyA && g.bodyA.isStatic, x = !g.bodyB || g.bodyB && g.bodyB.isStatic;
              (v || x) && i.solve(a[h], m);
            }
            for (h = 0; h < a.length; h += 1) g = a[h], v = !g.bodyA || g.bodyA && g.bodyA.isStatic, x = !g.bodyB || g.bodyB && g.bodyB.isStatic, !v && !x && i.solve(a[h], m);
          }, i.solve = function(a, s) {
            var m = a.bodyA, h = a.bodyB, g = a.pointA, v = a.pointB;
            if (!(!m && !h)) {
              m && !m.isStatic && (l.rotate(g, m.angle - a.angleA, g), a.angleA = m.angle), h && !h.isStatic && (l.rotate(v, h.angle - a.angleB, v), a.angleB = h.angle);
              var x = g, w = v;
              if (m && (x = l.add(m.position, g)), h && (w = l.add(h.position, v)), !(!x || !w)) {
                var y = l.sub(x, w), b = l.magnitude(y);
                b < i._minLength && (b = i._minLength);
                var S = (b - a.length) / b, C = a.stiffness >= 1 || a.length === 0, k = C ? a.stiffness * s : a.stiffness * s * s, P = a.damping * s, L = l.mult(y, S * k), E = (m ? m.inverseMass : 0) + (h ? h.inverseMass : 0), T = (m ? m.inverseInertia : 0) + (h ? h.inverseInertia : 0), M = E + T, R, O, U, N, $;
                if (P > 0) {
                  var F = l.create();
                  U = l.div(y, b), $ = l.sub(h && l.sub(h.position, h.positionPrev) || F, m && l.sub(m.position, m.positionPrev) || F), N = l.dot(U, $);
                }
                m && !m.isStatic && (O = m.inverseMass / E, m.constraintImpulse.x -= L.x * O, m.constraintImpulse.y -= L.y * O, m.position.x -= L.x * O, m.position.y -= L.y * O, P > 0 && (m.positionPrev.x -= P * U.x * N * O, m.positionPrev.y -= P * U.y * N * O), R = l.cross(g, L) / M * i._torqueDampen * m.inverseInertia * (1 - a.angularStiffness), m.constraintImpulse.angle -= R, m.angle -= R), h && !h.isStatic && (O = h.inverseMass / E, h.constraintImpulse.x += L.x * O, h.constraintImpulse.y += L.y * O, h.position.x += L.x * O, h.position.y += L.y * O, P > 0 && (h.positionPrev.x += P * U.x * N * O, h.positionPrev.y += P * U.y * N * O), R = l.cross(v, L) / M * i._torqueDampen * h.inverseInertia * (1 - a.angularStiffness), h.constraintImpulse.angle += R, h.angle += R);
              }
            }
          }, i.postSolveAll = function(a) {
            for (var s = 0; s < a.length; s++) {
              var m = a[s], h = m.constraintImpulse;
              if (!(m.isStatic || h.x === 0 && h.y === 0 && h.angle === 0)) {
                d.set(m, false);
                for (var g = 0; g < m.parts.length; g++) {
                  var v = m.parts[g];
                  o.translate(v.vertices, h), g > 0 && (v.position.x += h.x, v.position.y += h.y), h.angle !== 0 && (o.rotate(v.vertices, h.angle, m.position), u.rotate(v.axes, h.angle), g > 0 && l.rotateAbout(v.position, h.angle, m.position, v.position)), c.update(v.bounds, v.vertices, m.velocity);
                }
                h.angle *= i._warming, h.x *= i._warming, h.y *= i._warming;
              }
            }
          }, i.pointAWorld = function(a) {
            return { x: (a.bodyA ? a.bodyA.position.x : 0) + (a.pointA ? a.pointA.x : 0), y: (a.bodyA ? a.bodyA.position.y : 0) + (a.pointA ? a.pointA.y : 0) };
          }, i.pointBWorld = function(a) {
            return { x: (a.bodyB ? a.bodyB.position.x : 0) + (a.pointB ? a.pointB.x : 0), y: (a.bodyB ? a.bodyB.position.y : 0) + (a.pointB ? a.pointB.y : 0) };
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(2), l = r(0);
        (function() {
          i.fromVertices = function(d) {
            for (var c = {}, u = 0; u < d.length; u++) {
              var p = (u + 1) % d.length, a = o.normalise({ x: d[p].y - d[u].y, y: d[u].x - d[p].x }), s = a.y === 0 ? 1 / 0 : a.x / a.y;
              s = s.toFixed(3).toString(), c[s] = a;
            }
            return l.values(c);
          }, i.rotate = function(d, c) {
            if (c !== 0) for (var u = Math.cos(c), p = Math.sin(c), a = 0; a < d.length; a++) {
              var s = d[a], m;
              m = s.x * u - s.y * p, s.y = s.x * p + s.y * u, s.x = m;
            }
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(0), d = r(4), c = r(1), u = r(2);
        (function() {
          i.rectangle = function(p, a, s, m, h) {
            h = h || {};
            var g = { label: "Rectangle Body", position: { x: p, y: a }, vertices: o.fromPath("L 0 0 L " + s + " 0 L " + s + " " + m + " L 0 " + m) };
            if (h.chamfer) {
              var v = h.chamfer;
              g.vertices = o.chamfer(g.vertices, v.radius, v.quality, v.qualityMin, v.qualityMax), delete h.chamfer;
            }
            return d.create(l.extend({}, g, h));
          }, i.trapezoid = function(p, a, s, m, h, g) {
            g = g || {}, h *= 0.5;
            var v = (1 - h * 2) * s, x = s * h, w = x + v, y = w + x, b;
            h < 0.5 ? b = "L 0 0 L " + x + " " + -m + " L " + w + " " + -m + " L " + y + " 0" : b = "L 0 0 L " + w + " " + -m + " L " + y + " 0";
            var S = { label: "Trapezoid Body", position: { x: p, y: a }, vertices: o.fromPath(b) };
            if (g.chamfer) {
              var C = g.chamfer;
              S.vertices = o.chamfer(S.vertices, C.radius, C.quality, C.qualityMin, C.qualityMax), delete g.chamfer;
            }
            return d.create(l.extend({}, S, g));
          }, i.circle = function(p, a, s, m, h) {
            m = m || {};
            var g = { label: "Circle Body", circleRadius: s };
            h = h || 25;
            var v = Math.ceil(Math.max(10, Math.min(h, s)));
            return v % 2 === 1 && (v += 1), i.polygon(p, a, v, s, l.extend({}, g, m));
          }, i.polygon = function(p, a, s, m, h) {
            if (h = h || {}, s < 3) return i.circle(p, a, m, h);
            for (var g = 2 * Math.PI / s, v = "", x = g * 0.5, w = 0; w < s; w += 1) {
              var y = x + w * g, b = Math.cos(y) * m, S = Math.sin(y) * m;
              v += "L " + b.toFixed(3) + " " + S.toFixed(3) + " ";
            }
            var C = { label: "Polygon Body", position: { x: p, y: a }, vertices: o.fromPath(v) };
            if (h.chamfer) {
              var k = h.chamfer;
              C.vertices = o.chamfer(C.vertices, k.radius, k.quality, k.qualityMin, k.qualityMax), delete h.chamfer;
            }
            return d.create(l.extend({}, C, h));
          }, i.fromVertices = function(p, a, s, m, h, g, v, x) {
            var w = l.getDecomp(), y, b, S, C, k, P, L, E, T, M, R;
            for (y = !!(w && w.quickDecomp), m = m || {}, S = [], h = typeof h < "u" ? h : false, g = typeof g < "u" ? g : 0.01, v = typeof v < "u" ? v : 10, x = typeof x < "u" ? x : 0.01, l.isArray(s[0]) || (s = [s]), M = 0; M < s.length; M += 1) if (P = s[M], C = o.isConvex(P), k = !C, k && !y && l.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."), C || !y) C ? P = o.clockwiseSort(P) : P = o.hull(P), S.push({ position: { x: p, y: a }, vertices: P });
            else {
              var O = P.map(function(le) {
                return [le.x, le.y];
              });
              w.makeCCW(O), g !== false && w.removeCollinearPoints(O, g), x !== false && w.removeDuplicatePoints && w.removeDuplicatePoints(O, x);
              var U = w.quickDecomp(O);
              for (L = 0; L < U.length; L++) {
                var N = U[L], $ = N.map(function(le) {
                  return { x: le[0], y: le[1] };
                });
                v > 0 && o.area($) < v || S.push({ position: o.centre($), vertices: $ });
              }
            }
            for (L = 0; L < S.length; L++) S[L] = d.create(l.extend(S[L], m));
            if (h) {
              var F = 5;
              for (L = 0; L < S.length; L++) {
                var B = S[L];
                for (E = L + 1; E < S.length; E++) {
                  var I = S[E];
                  if (c.overlaps(B.bounds, I.bounds)) {
                    var X = B.vertices, W = I.vertices;
                    for (T = 0; T < B.vertices.length; T++) for (R = 0; R < I.vertices.length; R++) {
                      var re = u.magnitudeSquared(u.sub(X[(T + 1) % X.length], W[R])), ge = u.magnitudeSquared(u.sub(X[T], W[(R + 1) % W.length]));
                      re < F && ge < F && (X[T].isInternal = true, W[R].isInternal = true);
                    }
                  }
                }
              }
            }
            return S.length > 1 ? (b = d.create(l.extend({ parts: S.slice(0) }, m)), d.setPosition(b, { x: p, y: a }), b) : S[0];
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(0), l = r(8);
        (function() {
          i.create = function(d) {
            var c = { bodies: [], pairs: null };
            return o.extend(c, d);
          }, i.setBodies = function(d, c) {
            d.bodies = c.slice(0);
          }, i.clear = function(d) {
            d.bodies = [];
          }, i.collisions = function(d) {
            var c = [], u = d.pairs, p = d.bodies, a = p.length, s = i.canCollide, m = l.collides, h, g;
            for (p.sort(i._compareBoundsX), h = 0; h < a; h++) {
              var v = p[h], x = v.bounds, w = v.bounds.max.x, y = v.bounds.max.y, b = v.bounds.min.y, S = v.isStatic || v.isSleeping, C = v.parts.length, k = C === 1;
              for (g = h + 1; g < a; g++) {
                var P = p[g], L = P.bounds;
                if (L.min.x > w) break;
                if (!(y < L.min.y || b > L.max.y) && !(S && (P.isStatic || P.isSleeping)) && s(v.collisionFilter, P.collisionFilter)) {
                  var E = P.parts.length;
                  if (k && E === 1) {
                    var T = m(v, P, u);
                    T && c.push(T);
                  } else for (var M = C > 1 ? 1 : 0, R = E > 1 ? 1 : 0, O = M; O < C; O++) for (var U = v.parts[O], x = U.bounds, N = R; N < E; N++) {
                    var $ = P.parts[N], L = $.bounds;
                    if (!(x.min.x > L.max.x || x.max.x < L.min.x || x.max.y < L.min.y || x.min.y > L.max.y)) {
                      var T = m(U, $, u);
                      T && c.push(T);
                    }
                  }
                }
              }
            }
            return c;
          }, i.canCollide = function(d, c) {
            return d.group === c.group && d.group !== 0 ? d.group > 0 : (d.mask & c.category) !== 0 && (c.mask & d.category) !== 0;
          }, i._compareBoundsX = function(d, c) {
            return d.bounds.min.x - c.bounds.min.x;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(0);
        (function() {
          i.create = function(l) {
            var d = {};
            return l || o.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), d.element = l || document.body, d.absolute = { x: 0, y: 0 }, d.position = { x: 0, y: 0 }, d.mousedownPosition = { x: 0, y: 0 }, d.mouseupPosition = { x: 0, y: 0 }, d.offset = { x: 0, y: 0 }, d.scale = { x: 1, y: 1 }, d.wheelDelta = 0, d.button = -1, d.pixelRatio = parseInt(d.element.getAttribute("data-pixel-ratio"), 10) || 1, d.sourceEvents = { mousemove: null, mousedown: null, mouseup: null, mousewheel: null }, d.mousemove = function(c) {
              var u = i._getRelativeMousePosition(c, d.element, d.pixelRatio), p = c.changedTouches;
              p && (d.button = 0, c.preventDefault()), d.absolute.x = u.x, d.absolute.y = u.y, d.position.x = d.absolute.x * d.scale.x + d.offset.x, d.position.y = d.absolute.y * d.scale.y + d.offset.y, d.sourceEvents.mousemove = c;
            }, d.mousedown = function(c) {
              var u = i._getRelativeMousePosition(c, d.element, d.pixelRatio), p = c.changedTouches;
              p ? (d.button = 0, c.preventDefault()) : d.button = c.button, d.absolute.x = u.x, d.absolute.y = u.y, d.position.x = d.absolute.x * d.scale.x + d.offset.x, d.position.y = d.absolute.y * d.scale.y + d.offset.y, d.mousedownPosition.x = d.position.x, d.mousedownPosition.y = d.position.y, d.sourceEvents.mousedown = c;
            }, d.mouseup = function(c) {
              var u = i._getRelativeMousePosition(c, d.element, d.pixelRatio), p = c.changedTouches;
              p && c.preventDefault(), d.button = -1, d.absolute.x = u.x, d.absolute.y = u.y, d.position.x = d.absolute.x * d.scale.x + d.offset.x, d.position.y = d.absolute.y * d.scale.y + d.offset.y, d.mouseupPosition.x = d.position.x, d.mouseupPosition.y = d.position.y, d.sourceEvents.mouseup = c;
            }, d.mousewheel = function(c) {
              d.wheelDelta = Math.max(-1, Math.min(1, c.wheelDelta || -c.detail)), c.preventDefault();
            }, i.setElement(d, d.element), d;
          }, i.setElement = function(l, d) {
            l.element = d, d.addEventListener("mousemove", l.mousemove), d.addEventListener("mousedown", l.mousedown), d.addEventListener("mouseup", l.mouseup), d.addEventListener("mousewheel", l.mousewheel), d.addEventListener("DOMMouseScroll", l.mousewheel), d.addEventListener("touchmove", l.mousemove), d.addEventListener("touchstart", l.mousedown), d.addEventListener("touchend", l.mouseup);
          }, i.clearSourceEvents = function(l) {
            l.sourceEvents.mousemove = null, l.sourceEvents.mousedown = null, l.sourceEvents.mouseup = null, l.sourceEvents.mousewheel = null, l.wheelDelta = 0;
          }, i.setOffset = function(l, d) {
            l.offset.x = d.x, l.offset.y = d.y, l.position.x = l.absolute.x * l.scale.x + l.offset.x, l.position.y = l.absolute.y * l.scale.y + l.offset.y;
          }, i.setScale = function(l, d) {
            l.scale.x = d.x, l.scale.y = d.y, l.position.x = l.absolute.x * l.scale.x + l.offset.x, l.position.y = l.absolute.y * l.scale.y + l.offset.y;
          }, i._getRelativeMousePosition = function(l, d, c) {
            var u = d.getBoundingClientRect(), p = document.documentElement || document.body.parentNode || document.body, a = window.pageXOffset !== void 0 ? window.pageXOffset : p.scrollLeft, s = window.pageYOffset !== void 0 ? window.pageYOffset : p.scrollTop, m = l.changedTouches, h, g;
            return m ? (h = m[0].pageX - u.left - a, g = m[0].pageY - u.top - s) : (h = l.pageX - u.left - a, g = l.pageY - u.top - s), { x: h / (d.clientWidth / (d.width || d.clientWidth) * c), y: g / (d.clientHeight / (d.height || d.clientHeight) * c) };
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(0);
        (function() {
          i._registry = {}, i.register = function(l) {
            if (i.isPlugin(l) || o.warn("Plugin.register:", i.toString(l), "does not implement all required fields."), l.name in i._registry) {
              var d = i._registry[l.name], c = i.versionParse(l.version).number, u = i.versionParse(d.version).number;
              c > u ? (o.warn("Plugin.register:", i.toString(d), "was upgraded to", i.toString(l)), i._registry[l.name] = l) : c < u ? o.warn("Plugin.register:", i.toString(d), "can not be downgraded to", i.toString(l)) : l !== d && o.warn("Plugin.register:", i.toString(l), "is already registered to different plugin object");
            } else i._registry[l.name] = l;
            return l;
          }, i.resolve = function(l) {
            return i._registry[i.dependencyParse(l).name];
          }, i.toString = function(l) {
            return typeof l == "string" ? l : (l.name || "anonymous") + "@" + (l.version || l.range || "0.0.0");
          }, i.isPlugin = function(l) {
            return l && l.name && l.version && l.install;
          }, i.isUsed = function(l, d) {
            return l.used.indexOf(d) > -1;
          }, i.isFor = function(l, d) {
            var c = l.for && i.dependencyParse(l.for);
            return !l.for || d.name === c.name && i.versionSatisfies(d.version, c.range);
          }, i.use = function(l, d) {
            if (l.uses = (l.uses || []).concat(d || []), l.uses.length === 0) {
              o.warn("Plugin.use:", i.toString(l), "does not specify any dependencies to install.");
              return;
            }
            for (var c = i.dependencies(l), u = o.topologicalSort(c), p = [], a = 0; a < u.length; a += 1) if (u[a] !== l.name) {
              var s = i.resolve(u[a]);
              if (!s) {
                p.push("\u274C " + u[a]);
                continue;
              }
              i.isUsed(l, s.name) || (i.isFor(s, l) || (o.warn("Plugin.use:", i.toString(s), "is for", s.for, "but installed on", i.toString(l) + "."), s._warned = true), s.install ? s.install(l) : (o.warn("Plugin.use:", i.toString(s), "does not specify an install function."), s._warned = true), s._warned ? (p.push("\u{1F536} " + i.toString(s)), delete s._warned) : p.push("\u2705 " + i.toString(s)), l.used.push(s.name));
            }
            p.length > 0 && o.info(p.join("  "));
          }, i.dependencies = function(l, d) {
            var c = i.dependencyParse(l), u = c.name;
            if (d = d || {}, !(u in d)) {
              l = i.resolve(l) || l, d[u] = o.map(l.uses || [], function(a) {
                i.isPlugin(a) && i.register(a);
                var s = i.dependencyParse(a), m = i.resolve(a);
                return m && !i.versionSatisfies(m.version, s.range) ? (o.warn("Plugin.dependencies:", i.toString(m), "does not satisfy", i.toString(s), "used by", i.toString(c) + "."), m._warned = true, l._warned = true) : m || (o.warn("Plugin.dependencies:", i.toString(a), "used by", i.toString(c), "could not be resolved."), l._warned = true), s.name;
              });
              for (var p = 0; p < d[u].length; p += 1) i.dependencies(d[u][p], d);
              return d;
            }
          }, i.dependencyParse = function(l) {
            if (o.isString(l)) {
              var d = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
              return d.test(l) || o.warn("Plugin.dependencyParse:", l, "is not a valid dependency string."), { name: l.split("@")[0], range: l.split("@")[1] || "*" };
            }
            return { name: l.name, range: l.range || l.version };
          }, i.versionParse = function(l) {
            var d = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
            d.test(l) || o.warn("Plugin.versionParse:", l, "is not a valid version or range.");
            var c = d.exec(l), u = Number(c[4]), p = Number(c[5]), a = Number(c[6]);
            return { isRange: !!(c[1] || c[2]), version: c[3], range: l, operator: c[1] || c[2] || "", major: u, minor: p, patch: a, parts: [u, p, a], prerelease: c[7], number: u * 1e8 + p * 1e4 + a };
          }, i.versionSatisfies = function(l, d) {
            d = d || "*";
            var c = i.versionParse(d), u = i.versionParse(l);
            if (c.isRange) {
              if (c.operator === "*" || l === "*") return true;
              if (c.operator === ">") return u.number > c.number;
              if (c.operator === ">=") return u.number >= c.number;
              if (c.operator === "~") return u.major === c.major && u.minor === c.minor && u.patch >= c.patch;
              if (c.operator === "^") return c.major > 0 ? u.major === c.major && u.number >= c.number : c.minor > 0 ? u.minor === c.minor && u.patch >= c.patch : u.patch === c.patch;
            }
            return l === d || l === "*";
          };
        })();
      }, function(t, n) {
        var r = {};
        t.exports = r, function() {
          r.create = function(i) {
            return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
          };
        }();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(7), l = r(18), d = r(13), c = r(19), u = r(5), p = r(6), a = r(10), s = r(0), m = r(4);
        (function() {
          i.create = function(h) {
            h = h || {};
            var g = { positionIterations: 6, velocityIterations: 4, constraintIterations: 2, enableSleeping: false, events: [], plugin: {}, gravity: { x: 0, y: 1, scale: 1e-3 }, timing: { timestamp: 0, timeScale: 1, lastDelta: 0, lastElapsed: 0 } }, v = s.extend(g, h);
            return v.world = h.world || p.create({ label: "World" }), v.pairs = h.pairs || c.create(), v.detector = h.detector || d.create(), v.grid = { buckets: [] }, v.world.gravity = v.gravity, v.broadphase = v.grid, v.metrics = {}, v;
          }, i.update = function(h, g) {
            var v = s.now(), x = h.world, w = h.detector, y = h.pairs, b = h.timing, S = b.timestamp, C;
            g = typeof g < "u" ? g : s._baseDelta, g *= b.timeScale, b.timestamp += g, b.lastDelta = g;
            var k = { timestamp: b.timestamp, delta: g };
            u.trigger(h, "beforeUpdate", k);
            var P = p.allBodies(x), L = p.allConstraints(x);
            for (x.isModified && (d.setBodies(w, P), p.setModified(x, false, false, true)), h.enableSleeping && o.update(P, g), i._bodiesApplyGravity(P, h.gravity), g > 0 && i._bodiesUpdate(P, g), a.preSolveAll(P), C = 0; C < h.constraintIterations; C++) a.solveAll(L, g);
            a.postSolveAll(P), w.pairs = h.pairs;
            var E = d.collisions(w);
            c.update(y, E, S), h.enableSleeping && o.afterCollisions(y.list), y.collisionStart.length > 0 && u.trigger(h, "collisionStart", { pairs: y.collisionStart });
            var T = s.clamp(20 / h.positionIterations, 0, 1);
            for (l.preSolvePosition(y.list), C = 0; C < h.positionIterations; C++) l.solvePosition(y.list, g, T);
            for (l.postSolvePosition(P), a.preSolveAll(P), C = 0; C < h.constraintIterations; C++) a.solveAll(L, g);
            for (a.postSolveAll(P), l.preSolveVelocity(y.list), C = 0; C < h.velocityIterations; C++) l.solveVelocity(y.list, g);
            return i._bodiesUpdateVelocities(P), y.collisionActive.length > 0 && u.trigger(h, "collisionActive", { pairs: y.collisionActive }), y.collisionEnd.length > 0 && u.trigger(h, "collisionEnd", { pairs: y.collisionEnd }), i._bodiesClearForces(P), u.trigger(h, "afterUpdate", k), h.timing.lastElapsed = s.now() - v, h;
          }, i.merge = function(h, g) {
            if (s.extend(h, g), g.world) {
              h.world = g.world, i.clear(h);
              for (var v = p.allBodies(h.world), x = 0; x < v.length; x++) {
                var w = v[x];
                o.set(w, false), w.id = s.nextId();
              }
            }
          }, i.clear = function(h) {
            c.clear(h.pairs), d.clear(h.detector);
          }, i._bodiesClearForces = function(h) {
            for (var g = h.length, v = 0; v < g; v++) {
              var x = h[v];
              x.force.x = 0, x.force.y = 0, x.torque = 0;
            }
          }, i._bodiesApplyGravity = function(h, g) {
            var v = typeof g.scale < "u" ? g.scale : 1e-3, x = h.length;
            if (!(g.x === 0 && g.y === 0 || v === 0)) for (var w = 0; w < x; w++) {
              var y = h[w];
              y.isStatic || y.isSleeping || (y.force.y += y.mass * g.y * v, y.force.x += y.mass * g.x * v);
            }
          }, i._bodiesUpdate = function(h, g) {
            for (var v = h.length, x = 0; x < v; x++) {
              var w = h[x];
              w.isStatic || w.isSleeping || m.update(w, g);
            }
          }, i._bodiesUpdateVelocities = function(h) {
            for (var g = h.length, v = 0; v < g; v++) m.updateVelocities(h[v]);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(0), d = r(1);
        (function() {
          i._restingThresh = 2, i._restingThreshTangent = Math.sqrt(6), i._positionDampen = 0.9, i._positionWarming = 0.8, i._frictionNormalMultiplier = 5, i._frictionMaxStatic = Number.MAX_VALUE, i.preSolvePosition = function(c) {
            var u, p, a, s = c.length;
            for (u = 0; u < s; u++) p = c[u], p.isActive && (a = p.activeContacts.length, p.collision.parentA.totalContacts += a, p.collision.parentB.totalContacts += a);
          }, i.solvePosition = function(c, u, p) {
            var a, s, m, h, g, v, x, w, y = i._positionDampen * (p || 1), b = l.clamp(u / l._baseDelta, 0, 1), S = c.length;
            for (a = 0; a < S; a++) s = c[a], !(!s.isActive || s.isSensor) && (m = s.collision, h = m.parentA, g = m.parentB, v = m.normal, s.separation = v.x * (g.positionImpulse.x + m.penetration.x - h.positionImpulse.x) + v.y * (g.positionImpulse.y + m.penetration.y - h.positionImpulse.y));
            for (a = 0; a < S; a++) s = c[a], !(!s.isActive || s.isSensor) && (m = s.collision, h = m.parentA, g = m.parentB, v = m.normal, w = s.separation - s.slop * b, (h.isStatic || g.isStatic) && (w *= 2), h.isStatic || h.isSleeping || (x = y / h.totalContacts, h.positionImpulse.x += v.x * w * x, h.positionImpulse.y += v.y * w * x), g.isStatic || g.isSleeping || (x = y / g.totalContacts, g.positionImpulse.x -= v.x * w * x, g.positionImpulse.y -= v.y * w * x));
          }, i.postSolvePosition = function(c) {
            for (var u = i._positionWarming, p = c.length, a = o.translate, s = d.update, m = 0; m < p; m++) {
              var h = c[m], g = h.positionImpulse, v = g.x, x = g.y, w = h.velocity;
              if (h.totalContacts = 0, v !== 0 || x !== 0) {
                for (var y = 0; y < h.parts.length; y++) {
                  var b = h.parts[y];
                  a(b.vertices, g), s(b.bounds, b.vertices, w), b.position.x += v, b.position.y += x;
                }
                h.positionPrev.x += v, h.positionPrev.y += x, v * w.x + x * w.y < 0 ? (g.x = 0, g.y = 0) : (g.x *= u, g.y *= u);
              }
            }
          }, i.preSolveVelocity = function(c) {
            var u = c.length, p, a;
            for (p = 0; p < u; p++) {
              var s = c[p];
              if (!(!s.isActive || s.isSensor)) {
                var m = s.activeContacts, h = m.length, g = s.collision, v = g.parentA, x = g.parentB, w = g.normal, y = g.tangent;
                for (a = 0; a < h; a++) {
                  var b = m[a], S = b.vertex, C = b.normalImpulse, k = b.tangentImpulse;
                  if (C !== 0 || k !== 0) {
                    var P = w.x * C + y.x * k, L = w.y * C + y.y * k;
                    v.isStatic || v.isSleeping || (v.positionPrev.x += P * v.inverseMass, v.positionPrev.y += L * v.inverseMass, v.anglePrev += v.inverseInertia * ((S.x - v.position.x) * L - (S.y - v.position.y) * P)), x.isStatic || x.isSleeping || (x.positionPrev.x -= P * x.inverseMass, x.positionPrev.y -= L * x.inverseMass, x.anglePrev -= x.inverseInertia * ((S.x - x.position.x) * L - (S.y - x.position.y) * P));
                  }
                }
              }
            }
          }, i.solveVelocity = function(c, u) {
            var p = u / l._baseDelta, a = p * p, s = a * p, m = -i._restingThresh * p, h = i._restingThreshTangent, g = i._frictionNormalMultiplier * p, v = i._frictionMaxStatic, x = c.length, w, y, b, S;
            for (b = 0; b < x; b++) {
              var C = c[b];
              if (!(!C.isActive || C.isSensor)) {
                var k = C.collision, P = k.parentA, L = k.parentB, E = P.velocity, T = L.velocity, M = k.normal.x, R = k.normal.y, O = k.tangent.x, U = k.tangent.y, N = C.activeContacts, $ = N.length, F = 1 / $, B = P.inverseMass + L.inverseMass, I = C.friction * C.frictionStatic * g;
                for (E.x = P.position.x - P.positionPrev.x, E.y = P.position.y - P.positionPrev.y, T.x = L.position.x - L.positionPrev.x, T.y = L.position.y - L.positionPrev.y, P.angularVelocity = P.angle - P.anglePrev, L.angularVelocity = L.angle - L.anglePrev, S = 0; S < $; S++) {
                  var X = N[S], W = X.vertex, re = W.x - P.position.x, ge = W.y - P.position.y, le = W.x - L.position.x, Te = W.y - L.position.y, _e = E.x - ge * P.angularVelocity, Pt = E.y + re * P.angularVelocity, gt = T.x - Te * L.angularVelocity, j = T.y + le * L.angularVelocity, G = _e - gt, q = Pt - j, Q = M * G + R * q, oe = O * G + U * q, be = C.separation + Q, ae = Math.min(be, 1);
                  ae = be < 0 ? 0 : ae;
                  var se = ae * I;
                  oe < -se || oe > se ? (y = oe > 0 ? oe : -oe, w = C.friction * (oe > 0 ? 1 : -1) * s, w < -y ? w = -y : w > y && (w = y)) : (w = oe, y = v);
                  var vt = re * R - ge * M, te = le * R - Te * M, ne = F / (B + P.inverseInertia * vt * vt + L.inverseInertia * te * te), ze = (1 + C.restitution) * Q * ne;
                  if (w *= ne, Q < m) X.normalImpulse = 0;
                  else {
                    var je = X.normalImpulse;
                    X.normalImpulse += ze, X.normalImpulse > 0 && (X.normalImpulse = 0), ze = X.normalImpulse - je;
                  }
                  if (oe < -h || oe > h) X.tangentImpulse = 0;
                  else {
                    var Ie = X.tangentImpulse;
                    X.tangentImpulse += w, X.tangentImpulse < -y && (X.tangentImpulse = -y), X.tangentImpulse > y && (X.tangentImpulse = y), w = X.tangentImpulse - Ie;
                  }
                  var bt = M * ze + O * w, it = R * ze + U * w;
                  P.isStatic || P.isSleeping || (P.positionPrev.x += bt * P.inverseMass, P.positionPrev.y += it * P.inverseMass, P.anglePrev += (re * it - ge * bt) * P.inverseInertia), L.isStatic || L.isSleeping || (L.positionPrev.x -= bt * L.inverseMass, L.positionPrev.y -= it * L.inverseMass, L.anglePrev -= (le * it - Te * bt) * L.inverseInertia);
                }
              }
            }
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(9), l = r(0);
        (function() {
          i.create = function(d) {
            return l.extend({ table: {}, list: [], collisionStart: [], collisionActive: [], collisionEnd: [] }, d);
          }, i.update = function(d, c, u) {
            var p = d.list, a = p.length, s = d.table, m = c.length, h = d.collisionStart, g = d.collisionEnd, v = d.collisionActive, x, w, y, b;
            for (h.length = 0, g.length = 0, v.length = 0, b = 0; b < a; b++) p[b].confirmedActive = false;
            for (b = 0; b < m; b++) x = c[b], y = x.pair, y ? (y.isActive ? v.push(y) : h.push(y), o.update(y, x, u), y.confirmedActive = true) : (y = o.create(x, u), s[y.id] = y, h.push(y), p.push(y));
            var S = [];
            for (a = p.length, b = 0; b < a; b++) y = p[b], y.confirmedActive || (o.setActive(y, false, u), g.push(y), !y.collision.bodyA.isSleeping && !y.collision.bodyB.isSleeping && S.push(b));
            for (b = 0; b < S.length; b++) w = S[b] - b, y = p[w], p.splice(w, 1), delete s[y.id];
          }, i.clear = function(d) {
            return d.table = {}, d.list.length = 0, d.collisionStart.length = 0, d.collisionActive.length = 0, d.collisionEnd.length = 0, d;
          };
        })();
      }, function(t, n, r) {
        var i = t.exports = r(21);
        i.Axes = r(11), i.Bodies = r(12), i.Body = r(4), i.Bounds = r(1), i.Collision = r(8), i.Common = r(0), i.Composite = r(6), i.Composites = r(22), i.Constraint = r(10), i.Contact = r(16), i.Detector = r(13), i.Engine = r(17), i.Events = r(5), i.Grid = r(23), i.Mouse = r(14), i.MouseConstraint = r(24), i.Pair = r(9), i.Pairs = r(19), i.Plugin = r(15), i.Query = r(25), i.Render = r(26), i.Resolver = r(18), i.Runner = r(27), i.SAT = r(28), i.Sleeping = r(7), i.Svg = r(29), i.Vector = r(2), i.Vertices = r(3), i.World = r(30), i.Engine.run = i.Runner.run, i.Common.deprecated(i.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(15), l = r(0);
        (function() {
          i.name = "matter-js", i.version = "0.19.0", i.uses = [], i.used = [], i.use = function() {
            o.use(i, Array.prototype.slice.call(arguments));
          }, i.before = function(d, c) {
            return d = d.replace(/^Matter./, ""), l.chainPathBefore(i, d, c);
          }, i.after = function(d, c) {
            return d = d.replace(/^Matter./, ""), l.chainPathAfter(i, d, c);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(6), l = r(10), d = r(0), c = r(4), u = r(12), p = d.deprecated;
        (function() {
          i.stack = function(a, s, m, h, g, v, x) {
            for (var w = o.create({ label: "Stack" }), y = a, b = s, S, C = 0, k = 0; k < h; k++) {
              for (var P = 0, L = 0; L < m; L++) {
                var E = x(y, b, L, k, S, C);
                if (E) {
                  var T = E.bounds.max.y - E.bounds.min.y, M = E.bounds.max.x - E.bounds.min.x;
                  T > P && (P = T), c.translate(E, { x: M * 0.5, y: T * 0.5 }), y = E.bounds.max.x + g, o.addBody(w, E), S = E, C += 1;
                } else y += g;
              }
              b += P + v, y = a;
            }
            return w;
          }, i.chain = function(a, s, m, h, g, v) {
            for (var x = a.bodies, w = 1; w < x.length; w++) {
              var y = x[w - 1], b = x[w], S = y.bounds.max.y - y.bounds.min.y, C = y.bounds.max.x - y.bounds.min.x, k = b.bounds.max.y - b.bounds.min.y, P = b.bounds.max.x - b.bounds.min.x, L = { bodyA: y, pointA: { x: C * s, y: S * m }, bodyB: b, pointB: { x: P * h, y: k * g } }, E = d.extend(L, v);
              o.addConstraint(a, l.create(E));
            }
            return a.label += " Chain", a;
          }, i.mesh = function(a, s, m, h, g) {
            var v = a.bodies, x, w, y, b, S;
            for (x = 0; x < m; x++) {
              for (w = 1; w < s; w++) y = v[w - 1 + x * s], b = v[w + x * s], o.addConstraint(a, l.create(d.extend({ bodyA: y, bodyB: b }, g)));
              if (x > 0) for (w = 0; w < s; w++) y = v[w + (x - 1) * s], b = v[w + x * s], o.addConstraint(a, l.create(d.extend({ bodyA: y, bodyB: b }, g))), h && w > 0 && (S = v[w - 1 + (x - 1) * s], o.addConstraint(a, l.create(d.extend({ bodyA: S, bodyB: b }, g)))), h && w < s - 1 && (S = v[w + 1 + (x - 1) * s], o.addConstraint(a, l.create(d.extend({ bodyA: S, bodyB: b }, g))));
            }
            return a.label += " Mesh", a;
          }, i.pyramid = function(a, s, m, h, g, v, x) {
            return i.stack(a, s, m, h, g, v, function(w, y, b, S, C, k) {
              var P = Math.min(h, Math.ceil(m / 2)), L = C ? C.bounds.max.x - C.bounds.min.x : 0;
              if (!(S > P)) {
                S = P - S;
                var E = S, T = m - 1 - S;
                if (!(b < E || b > T)) {
                  k === 1 && c.translate(C, { x: (b + (m % 2 === 1 ? 1 : -1)) * L, y: 0 });
                  var M = C ? b * L : 0;
                  return x(a + M + b * g, y, b, S, C, k);
                }
              }
            });
          }, i.newtonsCradle = function(a, s, m, h, g) {
            for (var v = o.create({ label: "Newtons Cradle" }), x = 0; x < m; x++) {
              var w = 1.9, y = u.circle(a + x * (h * w), s + g, h, { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }), b = l.create({ pointA: { x: a + x * (h * w), y: s }, bodyB: y });
              o.addBody(v, y), o.addConstraint(v, b);
            }
            return v;
          }, p(i, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example"), i.car = function(a, s, m, h, g) {
            var v = c.nextGroup(true), x = 20, w = -m * 0.5 + x, y = m * 0.5 - x, b = 0, S = o.create({ label: "Car" }), C = u.rectangle(a, s, m, h, { collisionFilter: { group: v }, chamfer: { radius: h * 0.5 }, density: 2e-4 }), k = u.circle(a + w, s + b, g, { collisionFilter: { group: v }, friction: 0.8 }), P = u.circle(a + y, s + b, g, { collisionFilter: { group: v }, friction: 0.8 }), L = l.create({ bodyB: C, pointB: { x: w, y: b }, bodyA: k, stiffness: 1, length: 0 }), E = l.create({ bodyB: C, pointB: { x: y, y: b }, bodyA: P, stiffness: 1, length: 0 });
            return o.addBody(S, C), o.addBody(S, k), o.addBody(S, P), o.addConstraint(S, L), o.addConstraint(S, E), S;
          }, p(i, "car", "Composites.car \u27A4 moved to car example"), i.softBody = function(a, s, m, h, g, v, x, w, y, b) {
            y = d.extend({ inertia: 1 / 0 }, y), b = d.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, b);
            var S = i.stack(a, s, m, h, g, v, function(C, k) {
              return u.circle(C, k, w, y);
            });
            return i.mesh(S, m, h, x, b), S.label = "Soft Body", S;
          }, p(i, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(9), l = r(0), d = l.deprecated;
        (function() {
          i.create = function(c) {
            var u = { buckets: {}, pairs: {}, pairsList: [], bucketWidth: 48, bucketHeight: 48 };
            return l.extend(u, c);
          }, i.update = function(c, u, p, a) {
            var s, m, h, g = p.world, v = c.buckets, x, w, y = false;
            for (s = 0; s < u.length; s++) {
              var b = u[s];
              if (!(b.isSleeping && !a) && !(g.bounds && (b.bounds.max.x < g.bounds.min.x || b.bounds.min.x > g.bounds.max.x || b.bounds.max.y < g.bounds.min.y || b.bounds.min.y > g.bounds.max.y))) {
                var S = i._getRegion(c, b);
                if (!b.region || S.id !== b.region.id || a) {
                  (!b.region || a) && (b.region = S);
                  var C = i._regionUnion(S, b.region);
                  for (m = C.startCol; m <= C.endCol; m++) for (h = C.startRow; h <= C.endRow; h++) {
                    w = i._getBucketId(m, h), x = v[w];
                    var k = m >= S.startCol && m <= S.endCol && h >= S.startRow && h <= S.endRow, P = m >= b.region.startCol && m <= b.region.endCol && h >= b.region.startRow && h <= b.region.endRow;
                    !k && P && P && x && i._bucketRemoveBody(c, x, b), (b.region === S || k && !P || a) && (x || (x = i._createBucket(v, w)), i._bucketAddBody(c, x, b));
                  }
                  b.region = S, y = true;
                }
              }
            }
            y && (c.pairsList = i._createActivePairsList(c));
          }, d(i, "update", "Grid.update \u27A4 replaced by Matter.Detector"), i.clear = function(c) {
            c.buckets = {}, c.pairs = {}, c.pairsList = [];
          }, d(i, "clear", "Grid.clear \u27A4 replaced by Matter.Detector"), i._regionUnion = function(c, u) {
            var p = Math.min(c.startCol, u.startCol), a = Math.max(c.endCol, u.endCol), s = Math.min(c.startRow, u.startRow), m = Math.max(c.endRow, u.endRow);
            return i._createRegion(p, a, s, m);
          }, i._getRegion = function(c, u) {
            var p = u.bounds, a = Math.floor(p.min.x / c.bucketWidth), s = Math.floor(p.max.x / c.bucketWidth), m = Math.floor(p.min.y / c.bucketHeight), h = Math.floor(p.max.y / c.bucketHeight);
            return i._createRegion(a, s, m, h);
          }, i._createRegion = function(c, u, p, a) {
            return { id: c + "," + u + "," + p + "," + a, startCol: c, endCol: u, startRow: p, endRow: a };
          }, i._getBucketId = function(c, u) {
            return "C" + c + "R" + u;
          }, i._createBucket = function(c, u) {
            var p = c[u] = [];
            return p;
          }, i._bucketAddBody = function(c, u, p) {
            var a = c.pairs, s = o.id, m = u.length, h;
            for (h = 0; h < m; h++) {
              var g = u[h];
              if (!(p.id === g.id || p.isStatic && g.isStatic)) {
                var v = s(p, g), x = a[v];
                x ? x[2] += 1 : a[v] = [p, g, 1];
              }
            }
            u.push(p);
          }, i._bucketRemoveBody = function(c, u, p) {
            var a = c.pairs, s = o.id, m;
            u.splice(l.indexOf(u, p), 1);
            var h = u.length;
            for (m = 0; m < h; m++) {
              var g = a[s(p, u[m])];
              g && (g[2] -= 1);
            }
          }, i._createActivePairsList = function(c) {
            var u, p = c.pairs, a = l.keys(p), s = a.length, m = [], h;
            for (h = 0; h < s; h++) u = p[a[h]], u[2] > 0 ? m.push(u) : delete p[a[h]];
            return m;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(3), l = r(7), d = r(14), c = r(5), u = r(13), p = r(10), a = r(6), s = r(0), m = r(1);
        (function() {
          i.create = function(h, g) {
            var v = (h ? h.mouse : null) || (g ? g.mouse : null);
            v || (h && h.render && h.render.canvas ? v = d.create(h.render.canvas) : g && g.element ? v = d.create(g.element) : (v = d.create(), s.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
            var x = p.create({ label: "Mouse Constraint", pointA: v.position, pointB: { x: 0, y: 0 }, length: 0.01, stiffness: 0.1, angularStiffness: 1, render: { strokeStyle: "#90EE90", lineWidth: 3 } }), w = { type: "mouseConstraint", mouse: v, element: null, body: null, constraint: x, collisionFilter: { category: 1, mask: 4294967295, group: 0 } }, y = s.extend(w, g);
            return c.on(h, "beforeUpdate", function() {
              var b = a.allBodies(h.world);
              i.update(y, b), i._triggerEvents(y);
            }), y;
          }, i.update = function(h, g) {
            var v = h.mouse, x = h.constraint, w = h.body;
            if (v.button === 0) {
              if (x.bodyB) l.set(x.bodyB, false), x.pointA = v.position;
              else for (var y = 0; y < g.length; y++) if (w = g[y], m.contains(w.bounds, v.position) && u.canCollide(w.collisionFilter, h.collisionFilter)) for (var b = w.parts.length > 1 ? 1 : 0; b < w.parts.length; b++) {
                var S = w.parts[b];
                if (o.contains(S.vertices, v.position)) {
                  x.pointA = v.position, x.bodyB = h.body = w, x.pointB = { x: v.position.x - w.position.x, y: v.position.y - w.position.y }, x.angleB = w.angle, l.set(w, false), c.trigger(h, "startdrag", { mouse: v, body: w });
                  break;
                }
              }
            } else x.bodyB = h.body = null, x.pointB = null, w && c.trigger(h, "enddrag", { mouse: v, body: w });
          }, i._triggerEvents = function(h) {
            var g = h.mouse, v = g.sourceEvents;
            v.mousemove && c.trigger(h, "mousemove", { mouse: g }), v.mousedown && c.trigger(h, "mousedown", { mouse: g }), v.mouseup && c.trigger(h, "mouseup", { mouse: g }), d.clearSourceEvents(g);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(2), l = r(8), d = r(1), c = r(12), u = r(3);
        (function() {
          i.collides = function(p, a) {
            for (var s = [], m = a.length, h = p.bounds, g = l.collides, v = d.overlaps, x = 0; x < m; x++) {
              var w = a[x], y = w.parts.length, b = y === 1 ? 0 : 1;
              if (v(w.bounds, h)) for (var S = b; S < y; S++) {
                var C = w.parts[S];
                if (v(C.bounds, h)) {
                  var k = g(C, p);
                  if (k) {
                    s.push(k);
                    break;
                  }
                }
              }
            }
            return s;
          }, i.ray = function(p, a, s, m) {
            m = m || 1e-100;
            for (var h = o.angle(a, s), g = o.magnitude(o.sub(a, s)), v = (s.x + a.x) * 0.5, x = (s.y + a.y) * 0.5, w = c.rectangle(v, x, g, m, { angle: h }), y = i.collides(w, p), b = 0; b < y.length; b += 1) {
              var S = y[b];
              S.body = S.bodyB = S.bodyA;
            }
            return y;
          }, i.region = function(p, a, s) {
            for (var m = [], h = 0; h < p.length; h++) {
              var g = p[h], v = d.overlaps(g.bounds, a);
              (v && !s || !v && s) && m.push(g);
            }
            return m;
          }, i.point = function(p, a) {
            for (var s = [], m = 0; m < p.length; m++) {
              var h = p[m];
              if (d.contains(h.bounds, a)) for (var g = h.parts.length === 1 ? 0 : 1; g < h.parts.length; g++) {
                var v = h.parts[g];
                if (d.contains(v.bounds, a) && u.contains(v.vertices, a)) {
                  s.push(h);
                  break;
                }
              }
            }
            return s;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(4), l = r(0), d = r(6), c = r(1), u = r(5), p = r(2), a = r(14);
        (function() {
          var s, m;
          typeof window < "u" && (s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
            window.setTimeout(function() {
              b(l.now());
            }, 1e3 / 60);
          }, m = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), i._goodFps = 30, i._goodDelta = 1e3 / 60, i.create = function(b) {
            var S = { engine: null, element: null, canvas: null, mouse: null, frameRequestId: null, timing: { historySize: 60, delta: 0, deltaHistory: [], lastTime: 0, lastTimestamp: 0, lastElapsed: 0, timestampElapsed: 0, timestampElapsedHistory: [], engineDeltaHistory: [], engineElapsedHistory: [], elapsedHistory: [] }, options: { width: 800, height: 600, pixelRatio: 1, background: "#14151f", wireframeBackground: "#14151f", hasBounds: !!b.bounds, enabled: true, wireframes: true, showSleeping: true, showDebug: false, showStats: false, showPerformance: false, showBounds: false, showVelocity: false, showCollisions: false, showSeparations: false, showAxes: false, showPositions: false, showAngleIndicator: false, showIds: false, showVertexNumbers: false, showConvexHulls: false, showInternalEdges: false, showMousePosition: false } }, C = l.extend(S, b);
            return C.canvas && (C.canvas.width = C.options.width || C.canvas.width, C.canvas.height = C.options.height || C.canvas.height), C.mouse = b.mouse, C.engine = b.engine, C.canvas = C.canvas || v(C.options.width, C.options.height), C.context = C.canvas.getContext("2d"), C.textures = {}, C.bounds = C.bounds || { min: { x: 0, y: 0 }, max: { x: C.canvas.width, y: C.canvas.height } }, C.controller = i, C.options.showBroadphase = false, C.options.pixelRatio !== 1 && i.setPixelRatio(C, C.options.pixelRatio), l.isElement(C.element) && C.element.appendChild(C.canvas), C;
          }, i.run = function(b) {
            (function S(C) {
              b.frameRequestId = s(S), h(b, C), i.world(b, C), (b.options.showStats || b.options.showDebug) && i.stats(b, b.context, C), (b.options.showPerformance || b.options.showDebug) && i.performance(b, b.context, C);
            })();
          }, i.stop = function(b) {
            m(b.frameRequestId);
          }, i.setPixelRatio = function(b, S) {
            var C = b.options, k = b.canvas;
            S === "auto" && (S = x(k)), C.pixelRatio = S, k.setAttribute("data-pixel-ratio", S), k.width = C.width * S, k.height = C.height * S, k.style.width = C.width + "px", k.style.height = C.height + "px";
          }, i.lookAt = function(b, S, C, k) {
            k = typeof k < "u" ? k : true, S = l.isArray(S) ? S : [S], C = C || { x: 0, y: 0 };
            for (var P = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, L = 0; L < S.length; L += 1) {
              var E = S[L], T = E.bounds ? E.bounds.min : E.min || E.position || E, M = E.bounds ? E.bounds.max : E.max || E.position || E;
              T && M && (T.x < P.min.x && (P.min.x = T.x), M.x > P.max.x && (P.max.x = M.x), T.y < P.min.y && (P.min.y = T.y), M.y > P.max.y && (P.max.y = M.y));
            }
            var R = P.max.x - P.min.x + 2 * C.x, O = P.max.y - P.min.y + 2 * C.y, U = b.canvas.height, N = b.canvas.width, $ = N / U, F = R / O, B = 1, I = 1;
            F > $ ? I = F / $ : B = $ / F, b.options.hasBounds = true, b.bounds.min.x = P.min.x, b.bounds.max.x = P.min.x + R * B, b.bounds.min.y = P.min.y, b.bounds.max.y = P.min.y + O * I, k && (b.bounds.min.x += R * 0.5 - R * B * 0.5, b.bounds.max.x += R * 0.5 - R * B * 0.5, b.bounds.min.y += O * 0.5 - O * I * 0.5, b.bounds.max.y += O * 0.5 - O * I * 0.5), b.bounds.min.x -= C.x, b.bounds.max.x -= C.x, b.bounds.min.y -= C.y, b.bounds.max.y -= C.y, b.mouse && (a.setScale(b.mouse, { x: (b.bounds.max.x - b.bounds.min.x) / b.canvas.width, y: (b.bounds.max.y - b.bounds.min.y) / b.canvas.height }), a.setOffset(b.mouse, b.bounds.min));
          }, i.startViewTransform = function(b) {
            var S = b.bounds.max.x - b.bounds.min.x, C = b.bounds.max.y - b.bounds.min.y, k = S / b.options.width, P = C / b.options.height;
            b.context.setTransform(b.options.pixelRatio / k, 0, 0, b.options.pixelRatio / P, 0, 0), b.context.translate(-b.bounds.min.x, -b.bounds.min.y);
          }, i.endViewTransform = function(b) {
            b.context.setTransform(b.options.pixelRatio, 0, 0, b.options.pixelRatio, 0, 0);
          }, i.world = function(b, S) {
            var C = l.now(), k = b.engine, P = k.world, L = b.canvas, E = b.context, T = b.options, M = b.timing, R = d.allBodies(P), O = d.allConstraints(P), U = T.wireframes ? T.wireframeBackground : T.background, N = [], $ = [], F, B = { timestamp: k.timing.timestamp };
            if (u.trigger(b, "beforeRender", B), b.currentBackground !== U && y(b, U), E.globalCompositeOperation = "source-in", E.fillStyle = "transparent", E.fillRect(0, 0, L.width, L.height), E.globalCompositeOperation = "source-over", T.hasBounds) {
              for (F = 0; F < R.length; F++) {
                var I = R[F];
                c.overlaps(I.bounds, b.bounds) && N.push(I);
              }
              for (F = 0; F < O.length; F++) {
                var X = O[F], W = X.bodyA, re = X.bodyB, ge = X.pointA, le = X.pointB;
                W && (ge = p.add(W.position, X.pointA)), re && (le = p.add(re.position, X.pointB)), !(!ge || !le) && (c.contains(b.bounds, ge) || c.contains(b.bounds, le)) && $.push(X);
              }
              i.startViewTransform(b), b.mouse && (a.setScale(b.mouse, { x: (b.bounds.max.x - b.bounds.min.x) / b.options.width, y: (b.bounds.max.y - b.bounds.min.y) / b.options.height }), a.setOffset(b.mouse, b.bounds.min));
            } else $ = O, N = R, b.options.pixelRatio !== 1 && b.context.setTransform(b.options.pixelRatio, 0, 0, b.options.pixelRatio, 0, 0);
            !T.wireframes || k.enableSleeping && T.showSleeping ? i.bodies(b, N, E) : (T.showConvexHulls && i.bodyConvexHulls(b, N, E), i.bodyWireframes(b, N, E)), T.showBounds && i.bodyBounds(b, N, E), (T.showAxes || T.showAngleIndicator) && i.bodyAxes(b, N, E), T.showPositions && i.bodyPositions(b, N, E), T.showVelocity && i.bodyVelocity(b, N, E), T.showIds && i.bodyIds(b, N, E), T.showSeparations && i.separations(b, k.pairs.list, E), T.showCollisions && i.collisions(b, k.pairs.list, E), T.showVertexNumbers && i.vertexNumbers(b, N, E), T.showMousePosition && i.mousePosition(b, b.mouse, E), i.constraints($, E), T.hasBounds && i.endViewTransform(b), u.trigger(b, "afterRender", B), M.lastElapsed = l.now() - C;
          }, i.stats = function(b, S, C) {
            for (var k = b.engine, P = k.world, L = d.allBodies(P), E = 0, T = 55, M = 44, R = 0, O = 0, U = 0; U < L.length; U += 1) E += L[U].parts.length;
            var N = { Part: E, Body: L.length, Cons: d.allConstraints(P).length, Comp: d.allComposites(P).length, Pair: k.pairs.list.length };
            S.fillStyle = "#0e0f19", S.fillRect(R, O, T * 5.5, M), S.font = "12px Arial", S.textBaseline = "top", S.textAlign = "right";
            for (var $ in N) {
              var F = N[$];
              S.fillStyle = "#aaa", S.fillText($, R + T, O + 8), S.fillStyle = "#eee", S.fillText(F, R + T, O + 26), R += T;
            }
          }, i.performance = function(b, S) {
            var C = b.engine, k = b.timing, P = k.deltaHistory, L = k.elapsedHistory, E = k.timestampElapsedHistory, T = k.engineDeltaHistory, M = k.engineElapsedHistory, R = C.timing.lastDelta, O = g(P), U = g(L), N = g(T), $ = g(M), F = g(E), B = F / O || 0, I = 1e3 / O || 0, X = 4, W = 12, re = 60, ge = 34, le = 10, Te = 69;
            S.fillStyle = "#0e0f19", S.fillRect(0, 50, W * 4 + re * 5 + 22, ge), i.status(S, le, Te, re, X, P.length, Math.round(I) + " fps", I / i._goodFps, function(_e) {
              return P[_e] / O - 1;
            }), i.status(S, le + W + re, Te, re, X, T.length, R.toFixed(2) + " dt", i._goodDelta / R, function(_e) {
              return T[_e] / N - 1;
            }), i.status(S, le + (W + re) * 2, Te, re, X, M.length, $.toFixed(2) + " ut", 1 - $ / i._goodFps, function(_e) {
              return M[_e] / $ - 1;
            }), i.status(S, le + (W + re) * 3, Te, re, X, L.length, U.toFixed(2) + " rt", 1 - U / i._goodFps, function(_e) {
              return L[_e] / U - 1;
            }), i.status(S, le + (W + re) * 4, Te, re, X, E.length, B.toFixed(2) + " x", B * B * B, function(_e) {
              return (E[_e] / P[_e] / B || 0) - 1;
            });
          }, i.status = function(b, S, C, k, P, L, E, T, M) {
            b.strokeStyle = "#888", b.fillStyle = "#444", b.lineWidth = 1, b.fillRect(S, C + 7, k, 1), b.beginPath(), b.moveTo(S, C + 7 - P * l.clamp(0.4 * M(0), -2, 2));
            for (var R = 0; R < k; R += 1) b.lineTo(S + R, C + 7 - (R < L ? P * l.clamp(0.4 * M(R), -2, 2) : 0));
            b.stroke(), b.fillStyle = "hsl(" + l.clamp(25 + 95 * T, 0, 120) + ",100%,60%)", b.fillRect(S, C - 7, 4, 4), b.font = "12px Arial", b.textBaseline = "middle", b.textAlign = "right", b.fillStyle = "#eee", b.fillText(E, S + k, C - 5);
          }, i.constraints = function(b, S) {
            for (var C = S, k = 0; k < b.length; k++) {
              var P = b[k];
              if (!(!P.render.visible || !P.pointA || !P.pointB)) {
                var L = P.bodyA, E = P.bodyB, T, M;
                if (L ? T = p.add(L.position, P.pointA) : T = P.pointA, P.render.type === "pin") C.beginPath(), C.arc(T.x, T.y, 3, 0, 2 * Math.PI), C.closePath();
                else {
                  if (E ? M = p.add(E.position, P.pointB) : M = P.pointB, C.beginPath(), C.moveTo(T.x, T.y), P.render.type === "spring") for (var R = p.sub(M, T), O = p.perp(p.normalise(R)), U = Math.ceil(l.clamp(P.length / 5, 12, 20)), N, $ = 1; $ < U; $ += 1) N = $ % 2 === 0 ? 1 : -1, C.lineTo(T.x + R.x * ($ / U) + O.x * N * 4, T.y + R.y * ($ / U) + O.y * N * 4);
                  C.lineTo(M.x, M.y);
                }
                P.render.lineWidth && (C.lineWidth = P.render.lineWidth, C.strokeStyle = P.render.strokeStyle, C.stroke()), P.render.anchors && (C.fillStyle = P.render.strokeStyle, C.beginPath(), C.arc(T.x, T.y, 3, 0, 2 * Math.PI), C.arc(M.x, M.y, 3, 0, 2 * Math.PI), C.closePath(), C.fill());
              }
            }
          }, i.bodies = function(b, S, C) {
            var k = C;
            b.engine;
            var P = b.options, L = P.showInternalEdges || !P.wireframes, E, T, M, R;
            for (M = 0; M < S.length; M++) if (E = S[M], !!E.render.visible) {
              for (R = E.parts.length > 1 ? 1 : 0; R < E.parts.length; R++) if (T = E.parts[R], !!T.render.visible) {
                if (P.showSleeping && E.isSleeping ? k.globalAlpha = 0.5 * T.render.opacity : T.render.opacity !== 1 && (k.globalAlpha = T.render.opacity), T.render.sprite && T.render.sprite.texture && !P.wireframes) {
                  var O = T.render.sprite, U = w(b, O.texture);
                  k.translate(T.position.x, T.position.y), k.rotate(T.angle), k.drawImage(U, U.width * -O.xOffset * O.xScale, U.height * -O.yOffset * O.yScale, U.width * O.xScale, U.height * O.yScale), k.rotate(-T.angle), k.translate(-T.position.x, -T.position.y);
                } else {
                  if (T.circleRadius) k.beginPath(), k.arc(T.position.x, T.position.y, T.circleRadius, 0, 2 * Math.PI);
                  else {
                    k.beginPath(), k.moveTo(T.vertices[0].x, T.vertices[0].y);
                    for (var N = 1; N < T.vertices.length; N++) !T.vertices[N - 1].isInternal || L ? k.lineTo(T.vertices[N].x, T.vertices[N].y) : k.moveTo(T.vertices[N].x, T.vertices[N].y), T.vertices[N].isInternal && !L && k.moveTo(T.vertices[(N + 1) % T.vertices.length].x, T.vertices[(N + 1) % T.vertices.length].y);
                    k.lineTo(T.vertices[0].x, T.vertices[0].y), k.closePath();
                  }
                  P.wireframes ? (k.lineWidth = 1, k.strokeStyle = "#bbb", k.stroke()) : (k.fillStyle = T.render.fillStyle, T.render.lineWidth && (k.lineWidth = T.render.lineWidth, k.strokeStyle = T.render.strokeStyle, k.stroke()), k.fill());
                }
                k.globalAlpha = 1;
              }
            }
          }, i.bodyWireframes = function(b, S, C) {
            var k = C, P = b.options.showInternalEdges, L, E, T, M, R;
            for (k.beginPath(), T = 0; T < S.length; T++) if (L = S[T], !!L.render.visible) for (R = L.parts.length > 1 ? 1 : 0; R < L.parts.length; R++) {
              for (E = L.parts[R], k.moveTo(E.vertices[0].x, E.vertices[0].y), M = 1; M < E.vertices.length; M++) !E.vertices[M - 1].isInternal || P ? k.lineTo(E.vertices[M].x, E.vertices[M].y) : k.moveTo(E.vertices[M].x, E.vertices[M].y), E.vertices[M].isInternal && !P && k.moveTo(E.vertices[(M + 1) % E.vertices.length].x, E.vertices[(M + 1) % E.vertices.length].y);
              k.lineTo(E.vertices[0].x, E.vertices[0].y);
            }
            k.lineWidth = 1, k.strokeStyle = "#bbb", k.stroke();
          }, i.bodyConvexHulls = function(b, S, C) {
            var k = C, P, L, E;
            for (k.beginPath(), L = 0; L < S.length; L++) if (P = S[L], !(!P.render.visible || P.parts.length === 1)) {
              for (k.moveTo(P.vertices[0].x, P.vertices[0].y), E = 1; E < P.vertices.length; E++) k.lineTo(P.vertices[E].x, P.vertices[E].y);
              k.lineTo(P.vertices[0].x, P.vertices[0].y);
            }
            k.lineWidth = 1, k.strokeStyle = "rgba(255,255,255,0.2)", k.stroke();
          }, i.vertexNumbers = function(b, S, C) {
            var k = C, P, L, E;
            for (P = 0; P < S.length; P++) {
              var T = S[P].parts;
              for (E = T.length > 1 ? 1 : 0; E < T.length; E++) {
                var M = T[E];
                for (L = 0; L < M.vertices.length; L++) k.fillStyle = "rgba(255,255,255,0.2)", k.fillText(P + "_" + L, M.position.x + (M.vertices[L].x - M.position.x) * 0.8, M.position.y + (M.vertices[L].y - M.position.y) * 0.8);
              }
            }
          }, i.mousePosition = function(b, S, C) {
            var k = C;
            k.fillStyle = "rgba(255,255,255,0.8)", k.fillText(S.position.x + "  " + S.position.y, S.position.x + 5, S.position.y - 5);
          }, i.bodyBounds = function(b, S, C) {
            var k = C;
            b.engine;
            var P = b.options;
            k.beginPath();
            for (var L = 0; L < S.length; L++) {
              var E = S[L];
              if (E.render.visible) for (var T = S[L].parts, M = T.length > 1 ? 1 : 0; M < T.length; M++) {
                var R = T[M];
                k.rect(R.bounds.min.x, R.bounds.min.y, R.bounds.max.x - R.bounds.min.x, R.bounds.max.y - R.bounds.min.y);
              }
            }
            P.wireframes ? k.strokeStyle = "rgba(255,255,255,0.08)" : k.strokeStyle = "rgba(0,0,0,0.1)", k.lineWidth = 1, k.stroke();
          }, i.bodyAxes = function(b, S, C) {
            var k = C;
            b.engine;
            var P = b.options, L, E, T, M;
            for (k.beginPath(), E = 0; E < S.length; E++) {
              var R = S[E], O = R.parts;
              if (R.render.visible) if (P.showAxes) for (T = O.length > 1 ? 1 : 0; T < O.length; T++) for (L = O[T], M = 0; M < L.axes.length; M++) {
                var U = L.axes[M];
                k.moveTo(L.position.x, L.position.y), k.lineTo(L.position.x + U.x * 20, L.position.y + U.y * 20);
              }
              else for (T = O.length > 1 ? 1 : 0; T < O.length; T++) for (L = O[T], M = 0; M < L.axes.length; M++) k.moveTo(L.position.x, L.position.y), k.lineTo((L.vertices[0].x + L.vertices[L.vertices.length - 1].x) / 2, (L.vertices[0].y + L.vertices[L.vertices.length - 1].y) / 2);
            }
            P.wireframes ? (k.strokeStyle = "indianred", k.lineWidth = 1) : (k.strokeStyle = "rgba(255, 255, 255, 0.4)", k.globalCompositeOperation = "overlay", k.lineWidth = 2), k.stroke(), k.globalCompositeOperation = "source-over";
          }, i.bodyPositions = function(b, S, C) {
            var k = C;
            b.engine;
            var P = b.options, L, E, T, M;
            for (k.beginPath(), T = 0; T < S.length; T++) if (L = S[T], !!L.render.visible) for (M = 0; M < L.parts.length; M++) E = L.parts[M], k.arc(E.position.x, E.position.y, 3, 0, 2 * Math.PI, false), k.closePath();
            for (P.wireframes ? k.fillStyle = "indianred" : k.fillStyle = "rgba(0,0,0,0.5)", k.fill(), k.beginPath(), T = 0; T < S.length; T++) L = S[T], L.render.visible && (k.arc(L.positionPrev.x, L.positionPrev.y, 2, 0, 2 * Math.PI, false), k.closePath());
            k.fillStyle = "rgba(255,165,0,0.8)", k.fill();
          }, i.bodyVelocity = function(b, S, C) {
            var k = C;
            k.beginPath();
            for (var P = 0; P < S.length; P++) {
              var L = S[P];
              if (L.render.visible) {
                var E = o.getVelocity(L);
                k.moveTo(L.position.x, L.position.y), k.lineTo(L.position.x + E.x, L.position.y + E.y);
              }
            }
            k.lineWidth = 3, k.strokeStyle = "cornflowerblue", k.stroke();
          }, i.bodyIds = function(b, S, C) {
            var k = C, P, L;
            for (P = 0; P < S.length; P++) if (S[P].render.visible) {
              var E = S[P].parts;
              for (L = E.length > 1 ? 1 : 0; L < E.length; L++) {
                var T = E[L];
                k.font = "12px Arial", k.fillStyle = "rgba(255,255,255,0.5)", k.fillText(T.id, T.position.x + 10, T.position.y - 10);
              }
            }
          }, i.collisions = function(b, S, C) {
            var k = C, P = b.options, L, E, T, M;
            for (k.beginPath(), T = 0; T < S.length; T++) if (L = S[T], !!L.isActive) for (E = L.collision, M = 0; M < L.activeContacts.length; M++) {
              var R = L.activeContacts[M], O = R.vertex;
              k.rect(O.x - 1.5, O.y - 1.5, 3.5, 3.5);
            }
            for (P.wireframes ? k.fillStyle = "rgba(255,255,255,0.7)" : k.fillStyle = "orange", k.fill(), k.beginPath(), T = 0; T < S.length; T++) if (L = S[T], !!L.isActive && (E = L.collision, L.activeContacts.length > 0)) {
              var U = L.activeContacts[0].vertex.x, N = L.activeContacts[0].vertex.y;
              L.activeContacts.length === 2 && (U = (L.activeContacts[0].vertex.x + L.activeContacts[1].vertex.x) / 2, N = (L.activeContacts[0].vertex.y + L.activeContacts[1].vertex.y) / 2), E.bodyB === E.supports[0].body || E.bodyA.isStatic === true ? k.moveTo(U - E.normal.x * 8, N - E.normal.y * 8) : k.moveTo(U + E.normal.x * 8, N + E.normal.y * 8), k.lineTo(U, N);
            }
            P.wireframes ? k.strokeStyle = "rgba(255,165,0,0.7)" : k.strokeStyle = "orange", k.lineWidth = 1, k.stroke();
          }, i.separations = function(b, S, C) {
            var k = C, P = b.options, L, E, T, M, R;
            for (k.beginPath(), R = 0; R < S.length; R++) if (L = S[R], !!L.isActive) {
              E = L.collision, T = E.bodyA, M = E.bodyB;
              var O = 1;
              !M.isStatic && !T.isStatic && (O = 0.5), M.isStatic && (O = 0), k.moveTo(M.position.x, M.position.y), k.lineTo(M.position.x - E.penetration.x * O, M.position.y - E.penetration.y * O), O = 1, !M.isStatic && !T.isStatic && (O = 0.5), T.isStatic && (O = 0), k.moveTo(T.position.x, T.position.y), k.lineTo(T.position.x + E.penetration.x * O, T.position.y + E.penetration.y * O);
            }
            P.wireframes ? k.strokeStyle = "rgba(255,165,0,0.5)" : k.strokeStyle = "orange", k.stroke();
          }, i.inspector = function(b, S) {
            b.engine;
            var C = b.selected, k = b.render, P = k.options, L;
            if (P.hasBounds) {
              var E = k.bounds.max.x - k.bounds.min.x, T = k.bounds.max.y - k.bounds.min.y, M = E / k.options.width, R = T / k.options.height;
              S.scale(1 / M, 1 / R), S.translate(-k.bounds.min.x, -k.bounds.min.y);
            }
            for (var O = 0; O < C.length; O++) {
              var U = C[O].data;
              switch (S.translate(0.5, 0.5), S.lineWidth = 1, S.strokeStyle = "rgba(255,165,0,0.9)", S.setLineDash([1, 2]), U.type) {
                case "body":
                  L = U.bounds, S.beginPath(), S.rect(Math.floor(L.min.x - 3), Math.floor(L.min.y - 3), Math.floor(L.max.x - L.min.x + 6), Math.floor(L.max.y - L.min.y + 6)), S.closePath(), S.stroke();
                  break;
                case "constraint":
                  var N = U.pointA;
                  U.bodyA && (N = U.pointB), S.beginPath(), S.arc(N.x, N.y, 10, 0, 2 * Math.PI), S.closePath(), S.stroke();
                  break;
              }
              S.setLineDash([]), S.translate(-0.5, -0.5);
            }
            b.selectStart !== null && (S.translate(0.5, 0.5), S.lineWidth = 1, S.strokeStyle = "rgba(255,165,0,0.6)", S.fillStyle = "rgba(255,165,0,0.1)", L = b.selectBounds, S.beginPath(), S.rect(Math.floor(L.min.x), Math.floor(L.min.y), Math.floor(L.max.x - L.min.x), Math.floor(L.max.y - L.min.y)), S.closePath(), S.stroke(), S.fill(), S.translate(-0.5, -0.5)), P.hasBounds && S.setTransform(1, 0, 0, 1, 0, 0);
          };
          var h = function(b, S) {
            var C = b.engine, k = b.timing, P = k.historySize, L = C.timing.timestamp;
            k.delta = S - k.lastTime || i._goodDelta, k.lastTime = S, k.timestampElapsed = L - k.lastTimestamp || 0, k.lastTimestamp = L, k.deltaHistory.unshift(k.delta), k.deltaHistory.length = Math.min(k.deltaHistory.length, P), k.engineDeltaHistory.unshift(C.timing.lastDelta), k.engineDeltaHistory.length = Math.min(k.engineDeltaHistory.length, P), k.timestampElapsedHistory.unshift(k.timestampElapsed), k.timestampElapsedHistory.length = Math.min(k.timestampElapsedHistory.length, P), k.engineElapsedHistory.unshift(C.timing.lastElapsed), k.engineElapsedHistory.length = Math.min(k.engineElapsedHistory.length, P), k.elapsedHistory.unshift(k.lastElapsed), k.elapsedHistory.length = Math.min(k.elapsedHistory.length, P);
          }, g = function(b) {
            for (var S = 0, C = 0; C < b.length; C += 1) S += b[C];
            return S / b.length || 0;
          }, v = function(b, S) {
            var C = document.createElement("canvas");
            return C.width = b, C.height = S, C.oncontextmenu = function() {
              return false;
            }, C.onselectstart = function() {
              return false;
            }, C;
          }, x = function(b) {
            var S = b.getContext("2d"), C = window.devicePixelRatio || 1, k = S.webkitBackingStorePixelRatio || S.mozBackingStorePixelRatio || S.msBackingStorePixelRatio || S.oBackingStorePixelRatio || S.backingStorePixelRatio || 1;
            return C / k;
          }, w = function(b, S) {
            var C = b.textures[S];
            return C || (C = b.textures[S] = new Image(), C.src = S, C);
          }, y = function(b, S) {
            var C = S;
            /(jpg|gif|png)$/.test(S) && (C = "url(" + S + ")"), b.canvas.style.background = C, b.canvas.style.backgroundSize = "contain", b.currentBackground = S;
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(5), l = r(17), d = r(0);
        (function() {
          var c, u;
          if (typeof window < "u" && (c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, u = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), !c) {
            var p;
            c = function(a) {
              p = setTimeout(function() {
                a(d.now());
              }, 1e3 / 60);
            }, u = function() {
              clearTimeout(p);
            };
          }
          i.create = function(a) {
            var s = { fps: 60, deltaSampleSize: 60, counterTimestamp: 0, frameCounter: 0, deltaHistory: [], timePrev: null, frameRequestId: null, isFixed: false, enabled: true }, m = d.extend(s, a);
            return m.delta = m.delta || 1e3 / m.fps, m.deltaMin = m.deltaMin || 1e3 / m.fps, m.deltaMax = m.deltaMax || 1e3 / (m.fps * 0.5), m.fps = 1e3 / m.delta, m;
          }, i.run = function(a, s) {
            return typeof a.positionIterations < "u" && (s = a, a = i.create()), function m(h) {
              a.frameRequestId = c(m), h && a.enabled && i.tick(a, s, h);
            }(), a;
          }, i.tick = function(a, s, m) {
            var h = s.timing, g;
            a.isFixed ? g = a.delta : (g = m - a.timePrev || a.delta, a.timePrev = m, a.deltaHistory.push(g), a.deltaHistory = a.deltaHistory.slice(-a.deltaSampleSize), g = Math.min.apply(null, a.deltaHistory), g = g < a.deltaMin ? a.deltaMin : g, g = g > a.deltaMax ? a.deltaMax : g, a.delta = g);
            var v = { timestamp: h.timestamp };
            o.trigger(a, "beforeTick", v), a.frameCounter += 1, m - a.counterTimestamp >= 1e3 && (a.fps = a.frameCounter * ((m - a.counterTimestamp) / 1e3), a.counterTimestamp = m, a.frameCounter = 0), o.trigger(a, "tick", v), o.trigger(a, "beforeUpdate", v), l.update(s, g), o.trigger(a, "afterUpdate", v), o.trigger(a, "afterTick", v);
          }, i.stop = function(a) {
            u(a.frameRequestId);
          }, i.start = function(a, s) {
            i.run(a, s);
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(8), l = r(0), d = l.deprecated;
        (function() {
          i.collides = function(c, u) {
            return o.collides(c, u);
          }, d(i, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i, r(1);
        var o = r(0);
        (function() {
          i.pathToVertices = function(l, d) {
            typeof window < "u" && !("SVGPathSeg" in window) && o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
            var c, u, p, a, s, m, h, g, v, x, w = [], y, b, S = 0, C = 0, k = 0;
            d = d || 15;
            var P = function(E, T, M) {
              var R = M % 2 === 1 && M > 1;
              if (!v || E != v.x || T != v.y) {
                v && R ? (y = v.x, b = v.y) : (y = 0, b = 0);
                var O = { x: y + E, y: b + T };
                (R || !v) && (v = O), w.push(O), C = y + E, k = b + T;
              }
            }, L = function(E) {
              var T = E.pathSegTypeAsLetter.toUpperCase();
              if (T !== "Z") {
                switch (T) {
                  case "M":
                  case "L":
                  case "T":
                  case "C":
                  case "S":
                  case "Q":
                    C = E.x, k = E.y;
                    break;
                  case "H":
                    C = E.x;
                    break;
                  case "V":
                    k = E.y;
                    break;
                }
                P(C, k, E.pathSegType);
              }
            };
            for (i._svgPathToAbsolute(l), p = l.getTotalLength(), m = [], c = 0; c < l.pathSegList.numberOfItems; c += 1) m.push(l.pathSegList.getItem(c));
            for (h = m.concat(); S < p; ) {
              if (x = l.getPathSegAtLength(S), s = m[x], s != g) {
                for (; h.length && h[0] != s; ) L(h.shift());
                g = s;
              }
              switch (s.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  a = l.getPointAtLength(S), P(a.x, a.y, 0);
                  break;
              }
              S += d;
            }
            for (c = 0, u = h.length; c < u; ++c) L(h[c]);
            return w;
          }, i._svgPathToAbsolute = function(l) {
            for (var d, c, u, p, a, s, m = l.pathSegList, h = 0, g = 0, v = m.numberOfItems, x = 0; x < v; ++x) {
              var w = m.getItem(x), y = w.pathSegTypeAsLetter;
              if (/[MLHVCSQTA]/.test(y)) "x" in w && (h = w.x), "y" in w && (g = w.y);
              else switch ("x1" in w && (u = h + w.x1), "x2" in w && (a = h + w.x2), "y1" in w && (p = g + w.y1), "y2" in w && (s = g + w.y2), "x" in w && (h += w.x), "y" in w && (g += w.y), y) {
                case "m":
                  m.replaceItem(l.createSVGPathSegMovetoAbs(h, g), x);
                  break;
                case "l":
                  m.replaceItem(l.createSVGPathSegLinetoAbs(h, g), x);
                  break;
                case "h":
                  m.replaceItem(l.createSVGPathSegLinetoHorizontalAbs(h), x);
                  break;
                case "v":
                  m.replaceItem(l.createSVGPathSegLinetoVerticalAbs(g), x);
                  break;
                case "c":
                  m.replaceItem(l.createSVGPathSegCurvetoCubicAbs(h, g, u, p, a, s), x);
                  break;
                case "s":
                  m.replaceItem(l.createSVGPathSegCurvetoCubicSmoothAbs(h, g, a, s), x);
                  break;
                case "q":
                  m.replaceItem(l.createSVGPathSegCurvetoQuadraticAbs(h, g, u, p), x);
                  break;
                case "t":
                  m.replaceItem(l.createSVGPathSegCurvetoQuadraticSmoothAbs(h, g), x);
                  break;
                case "a":
                  m.replaceItem(l.createSVGPathSegArcAbs(h, g, w.r1, w.r2, w.angle, w.largeArcFlag, w.sweepFlag), x);
                  break;
                case "z":
                case "Z":
                  h = d, g = c;
                  break;
              }
              (y == "M" || y == "m") && (d = h, c = g);
            }
          };
        })();
      }, function(t, n, r) {
        var i = {};
        t.exports = i;
        var o = r(6);
        r(0), function() {
          i.create = o.create, i.add = o.add, i.remove = o.remove, i.clear = o.clear, i.addComposite = o.addComposite, i.addBody = o.addBody, i.addConstraint = o.addConstraint;
        }();
      }]);
    });
  }(Yt)), Yt.exports;
}
var K = Oo();
class Ao {
  constructor() {
    this.tweens = new Ms();
  }
  update(e, t) {
    this.tweens.update();
  }
  tween(e) {
    e = Object.assign({ duration: 1e3, easing: _o.Quadratic.InOut }, e);
    var t = new Os(e.object, this.tweens).to(e.to, e.duration).dynamic(e.dynamic).easing(e.easing).interpolation(e.interpolation).onStart(e.onStart).onUpdate(e.onUpdate).onComplete(e.onComplete);
    return t;
  }
}
class Rs {
  constructor() {
  }
  randomNumber(e, t) {
    return Math.random() * (t - e) + e;
  }
  getVectorFromAngle(e = 0, r = 1) {
    var n = Math.PI, r = 1e3, i = -e * (180 / n), o = Math.round(Math.cos((90 - i) * (n / 180)) * r) / r, l = Math.round(Math.sin((90 - i) * (n / 180)) * r) / r;
    return { x: o, y: l };
  }
  getAngleFromVector(e) {
    var t = Math.atan2(e.y, e.x), n = 180 * t / Math.PI;
    return this.degreesToRadians((360 + Math.round(n)) % 360);
  }
  radiansToDegrees(e) {
    return e * (180 / Math.PI);
  }
  degreesToRadians(e) {
    return e * (Math.PI / 180);
  }
  isJSON(e) {
    try {
      JSON.parse(e);
    } catch {
      return false;
    }
    return true;
  }
}
class Ro {
  constructor() {
    this.reset();
  }
  start() {
    this.pauseTime <= this.startTime && this.reset(), this.resume();
  }
  pause() {
    this.pauseTime = Date.now();
  }
  reset() {
    var e = Date.now();
    this.startTime = e, this.pauseTime = e, this.playTime = 0;
  }
  resume() {
    this.playTime += Date.now() - this.pauseTime;
  }
  getPlayTime() {
    var e = Date.now() - this.startTime - this.playTime;
    return e;
  }
  toString() {
    var e = this.getPlayTime(), t = (e / 1e3 % 1).toFixed(3).slice(-3), n = Math.floor(e / 1e3);
    return n + "." + t;
  }
  toHTML(e) {
    return "<span>" + e.split("").join("</span><span>") + "</span>";
  }
  render(e) {
    e == null && (e = app.timer.toString());
    var t = app.document.getElementById("timer");
    t && (t.innerHTML = app.timer.toHTML(e));
  }
}
const Do = { url: "../ogg/bounce.ogg", userData: { type: "effect", volume: 1 } }, Io = { url: "../ogg/clap.ogg", userData: { type: "effect", volume: 2 } }, Bo = { url: "../ogg/click.ogg", userData: { type: "effect", volume: 1 } }, zo = { url: "../ogg/glass.ogg", userData: { type: "effect", volume: 0.5 } }, $o = { url: "../ogg/ice.ogg", userData: { type: "effect", volume: 1 } }, No = { url: "../ogg/impact1.ogg", userData: { type: "effect", volume: 2 } }, jo = { url: "../ogg/impact2.ogg", userData: { type: "effect", volume: 1 } }, Fo = { url: "../ogg/jump.ogg", userData: { type: "effect", volume: 1 } }, Uo = { url: "../ogg/kill.ogg", userData: { type: "effect", volume: 1 } }, qo = { url: "../ogg/pop1.ogg", userData: { type: "effect", volume: 0.25 } }, Ho = { url: "../ogg/pop2.ogg", userData: { type: "effect", volume: 0.5 } }, Vo = { url: "../ogg/resize.ogg", userData: { type: "effect", volume: 2 } }, Go = { url: "../ogg/success.ogg", userData: { type: "effect", volume: 1 } }, Wo = { url: "../ogg/teleport.ogg", userData: { type: "effect", volume: 0.5 } }, Jo = { url: "../ogg/tip.ogg", userData: { type: "effect", volume: 1 } }, Xo = { url: "../ogg/wood.ogg", userData: { type: "effect", volume: 0.5 } }, Qt = { bounce: Do, "boxel-1": { url: "../ogg/boxel-1.ogg", userData: { loop: true, name: "Boxel 1", type: "music", volume: 1 } }, "boxel-rebound": { url: "../ogg/boxel-rebound.ogg", userData: { loop: true, name: "Boxel Rebound", type: "music", volume: 1 } }, "boxel-golf": { url: "../ogg/boxel-golf.ogg", userData: { loop: true, name: "Boxel Golf", type: "music", volume: 1 } }, "boxel-3d-classic": { url: "../ogg/boxel-3d-classic.ogg", userData: { loop: true, name: "Boxel 3D Classic", type: "music", volume: 1 } }, "boxel-3d-pro": { url: "../ogg/boxel-3d-pro.ogg", userData: { loop: true, name: "Boxel 3D Pro", type: "music", volume: 1 } }, clap: Io, click: Bo, glass: zo, ice: $o, impact1: No, impact2: jo, jump: Fo, kill: Uo, pop1: qo, pop2: Ho, resize: Vo, success: Go, teleport: Wo, tip: Jo, wood: Xo };
class Zo {
  constructor(e) {
    this.cache = {}, this.muted = false, this.listenerEffects = new qi(), this.listenerEffects.name = "effects", this.listenerMusic = new qi(), this.listenerMusic.name = "music", this.loader = new za(e), this.volume = 1, this.volumeMin = 1e-6, this.queue = [];
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(Qt)) this.loader.load(n.url, function(r) {
      var i, o;
      n?.userData?.type == "music" ? i = e.listenerMusic : n?.userData?.type == "effect" && (i = e.listenerEffects);
      var o = new $a(i);
      o.name = t, o.setBuffer(r), n.userData && (o.userData = n.userData, o.userData.loop && o.setLoop(o.userData.loop), o.userData.volume && o.setVolume(o.userData.volume)), e.cache[t] = o;
    });
    window.addEventListener("playAudio", function(t) {
      e.play(t.detail.name, t.detail.queue);
    }), window.addEventListener("setVolume", function(t) {
      e.setMasterVolume(t.detail);
    }), window.addEventListener("pointerup", function(t) {
      e.playQueue(t.detail);
    });
  }
  play(e, t = {}) {
    if (t = Object.assign({ detune: 0, queue: false }, t), t.queue == true) this.enqueue(e);
    else {
      const n = this.cache[e];
      n && (this.volume > this.volumeMin || n.userData.loop == true) && n.isPlaying == false && (n.setDetune(t.detune), n.play());
    }
  }
  enqueue(e) {
    this.queue.push(e);
  }
  playQueue() {
    for (var e = 0; e < this.queue.length; e++) this.play(this.queue[e]);
    this.queue = [];
  }
  setMasterVolume(e = 1, t = "master") {
    let n;
    if (e == 0 && (e = this.volumeMin), t == "effects" ? n = this.listenerEffects : t == "music" ? n = this.listenerMusic : t == "master" && (this.volume = e), n) {
      const r = n.context.currentTime;
      n.gain.gain.setTargetAtTime(e * this.volume, r, 0);
    }
  }
  getMasterVolume() {
    return this.volume;
  }
}
const Ko = { "background-blue": { url: "../glb/background-blue.glb" }, "background-pink": { url: "../glb/background-pink.glb" }, "background-purple": { url: "../glb/background-purple.glb" }, "background-city": { url: "../glb/background-city.glb" }, "background-classic": { url: "../glb/background-classic.glb" }, "background-desert": { url: "../glb/background-desert.glb" }, "background-forest": { url: "../glb/background-forest.glb" }, "background-hell": { url: "../glb/background-hell.glb" }, "background-kargoh": { url: "../glb/background-kargoh.glb" }, "background-tokyo": { url: "../glb/background-tokyo.glb" }, "background-tropic": { url: "../glb/background-tropic.glb" }, "cube-control": { url: "../glb/cube-control.glb" } };
class Yo {
  constructor(e) {
    this.cache = {}, this.loader = new Na(e);
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(Ko)) this.loader.load(n.url, function(r) {
      var i = r.scene;
      i.name = t, i.animations = r.animations, i.userData = { ...n.userData }, e.setShadows(i), e.applyUserData(i), e.cache[t] = i;
    });
  }
  clone(e) {
    var t;
    if (typeof e == "string") {
      if (this.cache[e]) return this.clone(this.cache[e]);
    } else e && e && (t = ja(e), t.animations = [...e.animations], this.applyUserData(t));
    return t;
  }
  setShadows(e) {
    e.traverse(function(t) {
      t.isMesh && (t.castShadow = true);
    });
  }
  applyUserData(e) {
    if (e.userData.position && e.position.set(e.userData.position.x, e.userData.position.y, e.userData.position.z), e.userData.rotation && e.rotation.set(e.userData.rotation.x, e.userData.rotation.y, e.userData.rotation.z), e.userData.scale && e.scale.set(e.userData.scale.x, e.userData.scale.y, e.userData.scale.z), e.animations.length > 0) {
      var t = e.userData?.animation?.loop == true ? Hi : Fa;
      e.traverse(function(r) {
        r.frustumCulled = false;
      }), e.mixer = new Ua(e), e.clips = [];
      for (var n = 0; n < e.animations.length; n++) e.clips.push(e.mixer.clipAction(e.animations[n])), e.clips[n].setLoop(t), e.clips[n].reset();
      e.animation = { play: function() {
        for (var r = 0; r < e.clips.length; r++) e.clips[r].play();
      }, reset: function() {
        for (var r = 0; r < e.clips.length; r++) e.clips[r].reset();
      }, update: function(r = 1 / 60) {
        e.mixer.update(r);
      } }, t == Hi && e.animation.play();
    }
  }
}
const Qo = {};
class eu {
  constructor(e) {
    this.cache = {}, this.loader = new Ss(e);
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(Qo)) this.loader.load(n.url, function(r) {
      e.cache[t] = r, e.cache[t].name = t, e.cache[t].magFilter = n.magFilter || 1006;
    });
  }
  generateCheckered() {
    var e = document.createElement("canvas"), t = e.getContext("2d"), n = new Texture(e);
    e.width = 16, e.height = 16, t.fillColor = "rgba(0, 0, 0, 0.5)";
    for (var r = 0; r < 2; r++) for (var i = 0; i < e.height / 2; i++) for (var o = 0; o < e.width / 2; o++) t.rect(o * 2 + r, i * 2 + r, 1, 1);
    return t.fill(), n.needsUpdate = true, n.wrapS = RepeatWrapping, n.wrapT = RepeatWrapping, n;
  }
}
class tu {
  constructor() {
    this.manager = new qa(), this.models = new Yo(this.manager), this.textures = new eu(this.manager), this.audio = new Zo(this.manager);
  }
  update(e) {
  }
  load(e = function() {
  }) {
    this.manager.onLoad = e, this.manager.onProgress = this.loadProgress, this.audio.load(), this.models.load(), this.textures.load();
  }
  loadProgress(e, t, n) {
    var r = Math.ceil(t / n * 100);
    window.dispatchEvent(new CustomEvent("updateLoading", { detail: { urls: e, index: t, max: n, percent: r } }));
  }
}
class nu {
  constructor() {
    this.actions = [], this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.speed = 1, this.running = false;
  }
  add(e = () => {
  }, t = -1) {
    this.actions.push({ rate: 1 / t, sum: 1 / t, alpha: 0, callback: e });
  }
  update(e) {
    if (this.running == true && (requestAnimationFrame(e), this.actions.length > 0)) for (var t = this.getDelta(), n = this.actions[0].sum / this.actions[0].rate, r = this.actions.length - 1; r >= 0; r--) this.actions[r].sum += t, (this.actions[r].sum >= this.actions[r].rate || this.actions[r].rate == -1) && (this.actions[r].sum %= this.actions[r].rate, this.actions[r].callback({ delta: this.actions[r].rate == -1 ? t : this.actions[r].rate, alpha: r == 0 ? 0 : n }));
  }
  start() {
    this.startTime = this.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    var e = function() {
      this.update(e);
    }.bind(this);
    e();
  }
  stop() {
    this.getElapsedTime(), this.running = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.running) {
      const t = this.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e * this.speed;
  }
  now() {
    return (typeof performance > "u" ? Date : performance).now();
  }
}
class iu extends Cs {
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = true, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", false), this.center = new He(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(true), this.center = e.center, this;
  }
}
const yt = new ue(), Xi = new mn(), Zi = new mn(), Ki = new ue(), Yi = new ue();
class ru {
  constructor(e = {}) {
    const t = this;
    let n, r, i, o;
    const l = { objects: /* @__PURE__ */ new WeakMap() }, d = e.element !== void 0 ? e.element : document.createElement("div");
    d.style.overflow = "hidden", this.domElement = d, this.getSize = function() {
      return { width: n, height: r };
    }, this.render = function(m, h) {
      m.matrixWorldAutoUpdate === true && m.updateMatrixWorld(), h.parent === null && h.matrixWorldAutoUpdate === true && h.updateMatrixWorld(), Xi.copy(h.matrixWorldInverse), Zi.multiplyMatrices(h.projectionMatrix, Xi), u(m, m, h), s(m);
    }, this.setSize = function(m, h) {
      n = m, r = h, i = n / 2, o = r / 2, d.style.width = m + "px", d.style.height = h + "px";
    };
    function c(m) {
      m.isCSS2DObject && (m.element.style.display = "none");
      for (let h = 0, g = m.children.length; h < g; h++) c(m.children[h]);
    }
    function u(m, h, g) {
      if (m.visible === false) {
        c(m);
        return;
      }
      if (m.isCSS2DObject) {
        yt.setFromMatrixPosition(m.matrixWorld), yt.applyMatrix4(Zi);
        const v = yt.z >= -1 && yt.z <= 1 && m.layers.test(g.layers) === true, x = m.element;
        x.style.display = v === true ? "" : "none", v === true && (m.onBeforeRender(t, h, g), x.style.transform = "translate(" + -100 * m.center.x + "%," + -100 * m.center.y + "%)translate(" + (yt.x * i + i) + "px," + (-yt.y * o + o) + "px)", x.parentNode !== d && d.appendChild(x), m.onAfterRender(t, h, g));
        const w = { distanceToCameraSquared: p(g, m) };
        l.objects.set(m, w);
      }
      for (let v = 0, x = m.children.length; v < x; v++) u(m.children[v], h, g);
    }
    function p(m, h) {
      return Ki.setFromMatrixPosition(m.matrixWorld), Yi.setFromMatrixPosition(h.matrixWorld), Ki.distanceToSquared(Yi);
    }
    function a(m) {
      const h = [];
      return m.traverseVisible(function(g) {
        g.isCSS2DObject && h.push(g);
      }), h;
    }
    function s(m) {
      const h = a(m).sort(function(v, x) {
        if (v.renderOrder !== x.renderOrder) return x.renderOrder - v.renderOrder;
        const w = l.objects.get(v).distanceToCameraSquared, y = l.objects.get(x).distanceToCameraSquared;
        return w - y;
      }), g = h.length;
      for (let v = 0, x = h.length; v < x; v++) h[v].element.style.zIndex = g - v;
    }
  }
}
class et extends Ha {
  constructor(e, t, n, r) {
    super(), this.renderScene = t, this.renderCamera = n, this.selectedObjects = r !== void 0 ? r : [], this.visibleEdgeColor = new Lt(1, 1, 1), this.hiddenEdgeColor = new Lt(0.1, 0.04, 0.02), this.edgeGlow = 0, this.usePatternTexture = false, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, this._visibilityCache = /* @__PURE__ */ new Map(), this.resolution = e !== void 0 ? new He(e.x, e.y) : new He(256, 256);
    const i = Math.round(this.resolution.x / this.downSampleRatio), o = Math.round(this.resolution.y / this.downSampleRatio);
    this.renderTargetMaskBuffer = new rt(this.resolution.x, this.resolution.y), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = false, this.depthMaterial = new Va(), this.depthMaterial.side = pi, this.depthMaterial.depthPacking = Ga, this.depthMaterial.blending = Vi, this.prepareMaskMaterial = this.getPrepareMaskMaterial(), this.prepareMaskMaterial.side = pi, this.prepareMaskMaterial.fragmentShader = u(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new rt(this.resolution.x, this.resolution.y), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = false, this.renderTargetMaskDownSampleBuffer = new rt(i, o), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = false, this.renderTargetBlurBuffer1 = new rt(i, o), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = false, this.renderTargetBlurBuffer2 = new rt(Math.round(i / 2), Math.round(o / 2)), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = false, this.edgeDetectionMaterial = this.getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new rt(i, o), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = false, this.renderTargetEdgeBuffer2 = new rt(Math.round(i / 2), Math.round(o / 2)), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = false;
    const l = 4, d = 4;
    this.separableBlurMaterial1 = this.getSeperableBlurMaterial(l), this.separableBlurMaterial1.uniforms.texSize.value.set(i, o), this.separableBlurMaterial1.uniforms.kernelRadius.value = 1, this.separableBlurMaterial2 = this.getSeperableBlurMaterial(d), this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i / 2), Math.round(o / 2)), this.separableBlurMaterial2.uniforms.kernelRadius.value = d, this.overlayMaterial = this.getOverlayMaterial();
    const c = Wa;
    this.copyUniforms = _i.clone(c.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new xt({ uniforms: this.copyUniforms, vertexShader: c.vertexShader, fragmentShader: c.fragmentShader, blending: Vi, depthTest: false, depthWrite: false, transparent: true }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new Lt(), this.oldClearAlpha = 1, this.fsQuad = new Ja(null), this.tempPulseColor1 = new Lt(), this.tempPulseColor2 = new Lt(), this.textureMatrix = new mn();
    function u(p, a) {
      const s = a.isPerspectiveCamera ? "perspective" : "orthographic";
      return p.replace(/DEPTH_TO_VIEW_Z/g, s + "DepthToViewZ");
    }
  }
  dispose() {
    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose(), this.depthMaterial.dispose(), this.prepareMaskMaterial.dispose(), this.edgeDetectionMaterial.dispose(), this.separableBlurMaterial1.dispose(), this.separableBlurMaterial2.dispose(), this.overlayMaterial.dispose(), this.materialCopy.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    this.renderTargetMaskBuffer.setSize(e, t), this.renderTargetDepthBuffer.setSize(e, t);
    let n = Math.round(e / this.downSampleRatio), r = Math.round(t / this.downSampleRatio);
    this.renderTargetMaskDownSampleBuffer.setSize(n, r), this.renderTargetBlurBuffer1.setSize(n, r), this.renderTargetEdgeBuffer1.setSize(n, r), this.separableBlurMaterial1.uniforms.texSize.value.set(n, r), n = Math.round(n / 2), r = Math.round(r / 2), this.renderTargetBlurBuffer2.setSize(n, r), this.renderTargetEdgeBuffer2.setSize(n, r), this.separableBlurMaterial2.uniforms.texSize.value.set(n, r);
  }
  changeVisibilityOfSelectedObjects(e) {
    const t = this._visibilityCache;
    function n(r) {
      r.isMesh && (e === true ? r.visible = t.get(r) : (t.set(r, r.visible), r.visible = e));
    }
    for (let r = 0; r < this.selectedObjects.length; r++) this.selectedObjects[r].traverse(n);
  }
  changeVisibilityOfNonSelectedObjects(e) {
    const t = this._visibilityCache, n = [];
    function r(o) {
      o.isMesh && n.push(o);
    }
    for (let o = 0; o < this.selectedObjects.length; o++) this.selectedObjects[o].traverse(r);
    function i(o) {
      if (o.isMesh || o.isSprite || o.isTransformControls) {
        let l = false;
        for (let d = 0; d < n.length; d++) if (n[d].id === o.id) {
          l = true;
          break;
        }
        if (l === false) {
          const d = o.visible;
          (e === false || t.get(o) === true) && (o.visible = e), t.set(o, d);
        }
      } else (o.isPoints || o.isLine) && (e === true ? o.visible = t.get(o) : (t.set(o, o.visible), o.visible = e));
    }
    this.renderScene.traverse(i);
  }
  updateTextureMatrix() {
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse);
  }
  render(e, t, n, r, i) {
    if (this.selectedObjects.length > 0) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const o = e.autoClear;
      e.autoClear = false, i && e.state.buffers.stencil.setTest(false), e.setClearColor(16777215, 1), this.changeVisibilityOfSelectedObjects(false);
      const l = this.renderScene.background;
      if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, e.setRenderTarget(this.renderTargetDepthBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.changeVisibilityOfSelectedObjects(true), this._visibilityCache.clear(), this.updateTextureMatrix(), this.changeVisibilityOfNonSelectedObjects(false), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms.depthTexture.value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms.textureMatrix.value = this.textureMatrix, e.setRenderTarget(this.renderTargetMaskBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.renderScene.overrideMaterial = null, this.changeVisibilityOfNonSelectedObjects(true), this._visibilityCache.clear(), this.renderScene.background = l, this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetMaskBuffer.texture, e.setRenderTarget(this.renderTargetMaskDownSampleBuffer), e.clear(), this.fsQuad.render(e), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
        const d = 0.625 + Math.cos(performance.now() * 0.01 / this.pulsePeriod) * 0.75 / 2;
        this.tempPulseColor1.multiplyScalar(d), this.tempPulseColor2.multiplyScalar(d);
      }
      this.fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms.maskTexture.value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value = this.tempPulseColor2, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = et.BlurDirectionX, this.separableBlurMaterial1.uniforms.kernelRadius.value = this.edgeThickness, e.setRenderTarget(this.renderTargetBlurBuffer1), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = et.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms.direction.value = et.BlurDirectionX, e.setRenderTarget(this.renderTargetBlurBuffer2), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms.direction.value = et.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer2), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms.maskTexture.value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms.edgeTexture1.value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms.edgeTexture2.value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms.patternTexture.value = this.patternTexture, this.overlayMaterial.uniforms.edgeStrength.value = this.edgeStrength, this.overlayMaterial.uniforms.edgeGlow.value = this.edgeGlow, this.overlayMaterial.uniforms.usePatternTexture.value = this.usePatternTexture, i && e.state.buffers.stencil.setTest(true), e.setRenderTarget(n), this.fsQuad.render(e), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
    }
    this.renderToScreen && (this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = n.texture, e.setRenderTarget(null), this.fsQuad.render(e));
  }
  getPrepareMaskMaterial() {
    return new xt({ uniforms: { depthTexture: { value: null }, cameraNearFar: { value: new He(0.5, 0.5) }, textureMatrix: { value: null } }, vertexShader: `#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`, fragmentShader: `#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}` });
  }
  getEdgeDetectionMaterial() {
    return new xt({ uniforms: { maskTexture: { value: null }, texSize: { value: new He(0.5, 0.5) }, visibleEdgeColor: { value: new ue(1, 1, 1) }, hiddenEdgeColor: { value: new ue(1, 1, 1) } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}` });
  }
  getSeperableBlurMaterial(e) {
    return new xt({ defines: { MAX_RADIUS: e }, uniforms: { colorTexture: { value: null }, texSize: { value: new He(0.5, 0.5) }, direction: { value: new He(0.5, 0.5) }, kernelRadius: { value: 1 } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}` });
  }
  getOverlayMaterial() {
    return new xt({ uniforms: { maskTexture: { value: null }, edgeTexture1: { value: null }, edgeTexture2: { value: null }, patternTexture: { value: null }, edgeStrength: { value: 1 }, edgeGlow: { value: 1 }, usePatternTexture: { value: 0 } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`, blending: Xa, depthTest: false, depthWrite: false, transparent: true });
  }
}
et.BlurDirectionX = new He(1, 0);
et.BlurDirectionY = new He(0, 1);
class su {
  constructor(e) {
    this.camera = new ks(75, window.innerWidth / window.innerHeight, 0.01, 100), this.scene = new _s(), this.canvas = e, this.fog = new Za("#ffffff", 180, 480), this.renderer = new Ka({ alpha: true, canvas: e }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = false, this.renderer.shadowMap.type = Ya, this.rendererCSS = new ru(), this.rendererCSS.domElement.className = "rendererCSS", this.rendererCSS.domElement.style.position = "absolute", this.rendererCSS.domElement.style.pointerEvents = "none", this.rendererCSS.domElement.style.top = "0px", this.rendererCSS.domElement.style.left = "0px", this.canvas.after(this.rendererCSS.domElement), this.renderPass = new Qa(this.scene, this.camera), this.outputPass = new eo(), this.outlinePass = new et({ x: window.innerWidth, y: window.innerHeight }, this.scene, this.camera), this.outlinePass.edgeStrength = 5, this.outlinePass.edgeGlow = 0, this.outlinePass.edgeThickness = 0.1, this.outlinePass.enabled = true, this.outlinePass.visibleEdgeColor.set("#ffffff"), this.outlinePass.hiddenEdgeColor.set("#000000"), this.outlinePass.overlayMaterial.blending = to, this.smaaPass = new no(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio), this.outlinePass.enabled = false, this.smaaPass.enabled = false, this.composer = new io(this.renderer), this.composer.addPass(this.renderPass), this.composer.addPass(this.outlinePass), this.composer.addPass(this.smaaPass), this.composer.addPass(this.outputPass), window.addEventListener("resize", function(t) {
      this.resize(t);
    }.bind(this)), this.resize();
  }
  update(e) {
    this.render();
  }
  render() {
    this.composer.render(), this.rendererCSS.render(this.scene, this.camera);
  }
  resize() {
    var e = window.innerWidth, t = window.innerHeight;
    this.setSize(e, t);
  }
  setSize(e, t) {
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.rendererCSS.setSize(e, t), this.composer.setSize(e, t);
  }
  setCamera(e) {
    this.camera = e, this.renderPass.camera = e, this.outlinePass.renderCamera = e;
  }
  setScene(e) {
    this.scene = e, this.renderPass.scene = e, this.outlinePass.renderScene = e;
  }
  setShadows(e = true) {
    this.renderer.shadowMap.enabled = e, this.scene.traverse(function(t) {
      t.material && (t.castShadow = e, t.receiveShadow = e, t.material.needsUpdate = true);
    });
  }
  setPixelRatio(e = 1) {
    this.renderer.setPixelRatio(e);
  }
  setSelectedObjects(e = []) {
    this.outlinePass.selectedObjects = e;
  }
}
var en = { exports: {} }, au = en.exports, Qi;
function ou() {
  return Qi || (Qi = 1, function(f, e) {
    (function(t, n) {
      n();
    })(au, function() {
      function t(c, u) {
        return typeof u > "u" ? u = { autoBom: false } : typeof u != "object" && (console.warn("Deprecated: Expected third argument to be a object"), u = { autoBom: !u }), u.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type) ? new Blob(["\uFEFF", c], { type: c.type }) : c;
      }
      function n(c, u, p) {
        var a = new XMLHttpRequest();
        a.open("GET", c), a.responseType = "blob", a.onload = function() {
          d(a.response, u, p);
        }, a.onerror = function() {
          console.error("could not download file");
        }, a.send();
      }
      function r(c) {
        var u = new XMLHttpRequest();
        u.open("HEAD", c, false);
        try {
          u.send();
        } catch {
        }
        return 200 <= u.status && 299 >= u.status;
      }
      function i(c) {
        try {
          c.dispatchEvent(new MouseEvent("click"));
        } catch {
          var u = document.createEvent("MouseEvents");
          u.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), c.dispatchEvent(u);
        }
      }
      var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof St == "object" && St.global === St ? St : void 0, l = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), d = o.saveAs || (typeof window != "object" || window !== o ? function() {
      } : "download" in HTMLAnchorElement.prototype && !l ? function(c, u, p) {
        var a = o.URL || o.webkitURL, s = document.createElement("a");
        u = u || c.name || "download", s.download = u, s.rel = "noopener", typeof c == "string" ? (s.href = c, s.origin === location.origin ? i(s) : r(s.href) ? n(c, u, p) : i(s, s.target = "_blank")) : (s.href = a.createObjectURL(c), setTimeout(function() {
          a.revokeObjectURL(s.href);
        }, 4e4), setTimeout(function() {
          i(s);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(c, u, p) {
        if (u = u || c.name || "download", typeof c != "string") navigator.msSaveOrOpenBlob(t(c, p), u);
        else if (r(c)) n(c, u, p);
        else {
          var a = document.createElement("a");
          a.href = c, a.target = "_blank", setTimeout(function() {
            i(a);
          });
        }
      } : function(c, u, p, a) {
        if (a = a || open("", "_blank"), a && (a.document.title = a.document.body.innerText = "downloading..."), typeof c == "string") return n(c, u, p);
        var s = c.type === "application/octet-stream", m = /constructor/i.test(o.HTMLElement) || o.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((h || s && m || l) && typeof FileReader < "u") {
          var g = new FileReader();
          g.onloadend = function() {
            var w = g.result;
            w = h ? w : w.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = w : location = w, a = null;
          }, g.readAsDataURL(c);
        } else {
          var v = o.URL || o.webkitURL, x = v.createObjectURL(c);
          a ? a.location = x : location.href = x, a = null, setTimeout(function() {
            v.revokeObjectURL(x);
          }, 4e4);
        }
      });
      o.saveAs = d.saveAs = d, f.exports = d;
    });
  }(en)), en.exports;
}
var kn = ou();
class uu {
  constructor() {
    this.levelPrefix = "level_";
  }
  getAllLocalStorage() {
    for (var e = {}, t = 0; t < localStorage.length; t++) {
      var n = localStorage.key(t), r = localStorage.getItem(n);
      e[n] = r;
    }
    return e;
  }
  setAllLocalStorage(e) {
    localStorage.clear(), Object.keys(e).forEach(function(t) {
      localStorage.setItem(t, e[t]);
    });
  }
  getListOfLevels() {
    for (var e = [], t = localStorage.length, n = 0; n < t; n++) {
      var r = localStorage.key(n);
      r.indexOf(this.levelPrefix) >= 0 && e.push({ key: r, level: JSON.parse(localStorage.getItem(r)) });
    }
    return e.sort((i, o) => i.level.name > o.level.name ? 1 : o.level.name > i.level.name ? -1 : 0), e;
  }
  getLevelData(e) {
    return JSON.parse(localStorage.getItem(e));
  }
  setLevelData(e, t) {
    var n = 1;
    if (e == null) {
      for (; localStorage.getItem(this.levelPrefix + n) != null; ) n++;
      e = "level_" + n;
    }
    return localStorage.setItem(e, JSON.stringify(t)), e;
  }
  removeLevelData(e) {
    localStorage.removeItem(e);
  }
  updateLevelDataName(e, t) {
    var n = this.getLevelData(e);
    n.name = t, this.setLevelData(e, n);
  }
  saveScore(e, t) {
    var n = this.getScores(), r = 999999999, i = parseInt(t.replace(/[^\d]/g, "")), o = false, l = n[e];
    return l != null && (l.indexOf(":") >= 0 && (l += "0"), r = parseInt(l.replace(/[^\d]/g, ""))), i < r && (o = true, n[e] = t, localStorage.setItem("scores", JSON.stringify(n)), this.saveThumbnailAfterPopupOpened(e)), this.getThumbnail(e) == null && this.saveThumbnailAfterPopupOpened(e), o;
  }
  getScores() {
    var e = localStorage.getItem("scores");
    return e == null && (e = "{}", localStorage.setItem("scores", e)), JSON.parse(e);
  }
  saveThumbnail(e) {
    var t = app.storage.screenshot({ width: 200, height: 200, zoom: 1 });
    localStorage.setItem("thumbnail_" + e, t);
  }
  saveThumbnailAfterPopupOpened(e) {
    const t = () => {
      app.storage.saveThumbnail(e), window.removeEventListener("popupOpened", t);
    };
    window.addEventListener("popupOpened", t);
  }
  getThumbnail(e) {
    return localStorage.getItem("thumbnail_" + e);
  }
  isExtension() {
    return window.chrome?.extension;
  }
  setSettings(e) {
    localStorage.setItem("settings", JSON.stringify(e));
  }
  getSettings(e = app) {
    var t = localStorage.getItem("settings"), n = { buffer: 100, connection: "", debug: false, language: "en", motion: true, music: "boxel-3d-pro", name: "Player", peer: this.generateHex(""), progress: 1, quality: 10, skin: { id: 466, title: "Smile", url: "../png/smile.png" }, snap: 8, stats: false, theme: "bubble", volume: this.isExtension() ? 0 : 0.5, volumeMusic: 0.5, volumeEffects: 1 }, r = n;
    t != null && (r = JSON.parse(t));
    for (var i in n) r[i] == null && (r[i] = n[i]);
    return r.peer.length > 6 && (r.peer = this.generateHex("")), r;
  }
  saveLevelToFile() {
    app.levelEditor.saveLevel();
    var e = app.level.exportToJSON(app), t = new Blob([JSON.stringify(e)], { type: "application/json" });
    kn.saveAs(t, e.name);
  }
  screenshot(e) {
    e = Object.assign({ width: 640, height: 360, zoom: 1, save: false }, e);
    var t = "", n = window.innerWidth, r = window.innerHeight, i = app.graphics.camera.zoom, o = app.graphics.renderer.getPixelRatio();
    return app.graphics.camera.zoom = e.zoom, app.graphics.camera.aspect = e.width / e.height, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(1), app.graphics.renderer.setSize(e.width, e.height), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), t = app.graphics.renderer.domElement.toDataURL("image/png"), e.save == true && app.graphics.renderer.domElement.toBlob((l) => kn.saveAs(l, "screenshot.png")), app.graphics.camera.zoom = i, app.graphics.camera.aspect = n / r, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(o), app.graphics.renderer.setSize(n, r), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), t;
  }
  loadLevelFromFile() {
    var e = document.createElement("input");
    e.setAttribute("type", "file"), e.setAttribute("id", "theFile"), e.addEventListener("change", n, false);
    function t() {
      var r = document.createEvent("MouseEvents");
      r.initEvent("click", true, false), e.dispatchEvent(r);
    }
    function n(r) {
      var i = r.target.files, o = i[0], l = new FileReader();
      l.onload = /* @__PURE__ */ function(d) {
        return function(c) {
          var u = d.name.split(".").slice(0, -1).join("."), p = JSON.parse(c.target.result);
          p.name = u, app.level.clearLevel(app), app.level.importFromJSON(p, app);
        };
      }(o), l.readAsText(o);
    }
    t();
  }
  backupToFile() {
    var e = app.storage.getAllLocalStorage(), t = new Blob([JSON.stringify(e)], { type: "application/json" });
    kn.saveAs(t, "boxel_3d_backup");
  }
  restoreFromFile() {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.restore_file_data", inputs: [{ value: "popup.button.restore", type: "button", callback: function() {
      var e = document.createElement("input");
      e.setAttribute("type", "file"), e.setAttribute("id", "theFile"), e.addEventListener("change", n, false);
      function t() {
        var r = document.createEvent("MouseEvents");
        r.initEvent("click", true, false), e.dispatchEvent(r);
      }
      function n(r) {
        var i = r.target.files, o = i[0], l = new FileReader();
        l.onload = /* @__PURE__ */ function() {
          return function(d) {
            var c = JSON.parse(d.target.result);
            app.storage.setAllLocalStorage(c), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.file_data_restored", inputs: [{ value: "popup.button.continue", type: "button" }] } }));
          };
        }(), l.readAsText(o);
      }
      t();
    } }, { value: "popup.button.cancel", type: "button" }] } }));
  }
  backupToChrome(e = false) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.save_data_to_cloud", inputs: [{ value: "popup.button.backup", type: "button", callback: function() {
      var t = 0;
      e == true && window.chrome?.storage.sync.clear();
      for (var n = 0; n < localStorage.length; n++) {
        var r = localStorage.key(n), i = localStorage.getItem(r), o = {};
        o[r] = i, window.chrome?.storage.sync.set(o, function() {
          t++, t == localStorage.length && window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.cloud_data_saved", inputs: [{ value: "popup.button.continue", type: "button" }] } }));
        });
      }
    } }, { value: "popup.button.cancel", type: "button" }] } }));
  }
  restoreFromChrome(e = false) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.restore_cloud_data", inputs: [{ value: "popup.button.restore", type: "button", callback: function() {
      chrome?.storage.sync.get(null, function(t) {
        e == true && localStorage.clear();
        for (var n = Object.keys(t), r = 0; r < n.length; r++) {
          var i = n[r], o = t[i];
          localStorage.setItem(i, o);
        }
        window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.cloud_data_restored", inputs: [{ value: "popup.button.continue", type: "button" }] } }));
      });
    } }, { value: "popup.button.cancel", type: "button" }] } }));
  }
  generateHex(e = "#") {
    return e + (Math.random() * 16777215 << 0).toString(16).padStart(6, "0");
  }
  generateUUID() {
    return gn.generateUUID();
  }
}
class lu {
  constructor() {
  }
  checkPlayerCollision(e, t) {
    for (var n = e.pairs, r = 0; r < n.length; r++) for (var i = n[r], o = [i.bodyA, i.bodyB], l = 0; l < o.length; l++) {
      var d = o[(l + 0) % 2], c = o[(l + 1) % 2], u = t.level.getObjectByName(d.parent.name), p = t.level.getObjectByName(c.parent.name);
      if (u != null && p != null && (u.body.class == "player" && (t.player.allowJump = true), c.class != "sensor")) {
        if (d.class == "sensor") if (u.body.class == "tip") p.body.class == "player" && (app.level.showTip(u.text), u.hide(true));
        else if (u.body.class == "bounce") {
          var a = u.scale.y / 2;
          u.body.isStatic == false && u.setForce(a, p, true), p.body.isStatic == false && p.setForce(a, u), p.body.class == "player" && app.assets.audio.play("bounce");
        } else if (u.body.class == "checkpoint") p.body.class == "player" && (app.player.saveCheckpoint(u.position), app.assets.audio.play("success"));
        else if (u.body.class == "spike") p.body.class == "player" && app.player.kill();
        else if (u.body.class == "shrink") p.body.class == "player" && (app.player.shrink(), u.hide(true));
        else if (u.body.class == "grow") p.body.class == "player" && (app.player.grow(), u.hide(true));
        else if (u.body.class == "resize") p.isStatic() == false && (p.setScale(u.scale, false), p.body.class == "player" && app.assets.audio.play("resize"));
        else if (u.body.class == "direction") {
          var a = p.calculateForceDirection(u.body, p.body);
          p.setForceDirection(a, false), p.body.class == "player" && app.assets.audio.play("teleport");
        } else u.body.class == "gravity" ? p.body.class == "player" && (app.updateGravity(u.body.angle), app.assets.audio.play("teleport")) : u.body.class == "grapple" ? p.body.class == "player" && (app.player.setMode("grapple", false), app.assets.audio.play("teleport")) : u.body.class == "finish" ? p.body.class == "player" && app.player.finish() : u.body.class == "reset" ? p.body.class == "player" && app.player.reset() : u.body.class == "control" && p.body.class == "player" && (app.player.setMode("control", false), app.assets.audio.play("teleport"));
        else if (u.body.class == "cube" && p.body.class == "player") {
          const s = gn.randInt(-1200, 1200);
          app.assets.audio.play("pop1", { detune: s });
        }
      }
    }
  }
}
class cu extends dt {
  constructor() {
    super();
  }
  init() {
    this.setTheme("background-city");
  }
  update(e, t, n = false) {
    this.target && (n == true ? this.position.copy(this.target.position) : (this.position.y = this.target.position.y, this.position.x = this.target.position.x - this.target.position.x % this.scale.x));
  }
  setTarget(e) {
    this.target = e;
  }
  setTheme(e) {
    if (this.theme != e) {
      var t = app.assets.models.clone(e);
      if (t) {
        this.clear(), this.theme = e, this.scale.set(1280, 1280, 1280);
        var n = 4, r = new Cs();
        t.traverse(function(i) {
          if (i.isMesh) {
            for (var o = new ro(i.geometry, i.material, n), l = 0; l < n; l++) r.position.set(l - n * 0.5 + 0.5, 0, 0), r.updateMatrix(), o.setMatrixAt(l, r.matrix);
            this.add(o);
          }
        }.bind(this));
      }
    }
  }
  animateScale(e) {
    app.animation.tween({ object: this.scale, to: { x: 1280 * e, y: 1280 * e }, duration: 250 }).start();
  }
}
const Mt = new ue();
function $e(f, e, t, n, r, i) {
  const o = 2 * Math.PI * r / 4, l = Math.max(i - 2 * r, 0), d = Math.PI / 4;
  Mt.copy(e), Mt[n] = 0, Mt.normalize();
  const c = 0.5 * o / (o + l), u = 1 - Mt.angleTo(f) / d;
  return Math.sign(Mt[t]) === 1 ? u * c : l / (o + l) + c + c * (1 - u);
}
class Ds extends Es {
  constructor(e = 1, t = 1, n = 1, r = 2, i = 0.1) {
    if (r = r * 2 + 1, i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, r, r, r), r === 1) return;
    const o = this.toNonIndexed();
    this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
    const l = new ue(), d = new ue(), c = new ue(e, t, n).divideScalar(2).subScalar(i), u = this.attributes.position.array, p = this.attributes.normal.array, a = this.attributes.uv.array, s = u.length / 6, m = new ue(), h = 0.5 / r;
    for (let g = 0, v = 0; g < u.length; g += 3, v += 2) switch (l.fromArray(u, g), d.copy(l), d.x -= Math.sign(d.x) * h, d.y -= Math.sign(d.y) * h, d.z -= Math.sign(d.z) * h, d.normalize(), u[g + 0] = c.x * Math.sign(l.x) + d.x * i, u[g + 1] = c.y * Math.sign(l.y) + d.y * i, u[g + 2] = c.z * Math.sign(l.z) + d.z * i, p[g + 0] = d.x, p[g + 1] = d.y, p[g + 2] = d.z, Math.floor(g / s)) {
      case 0:
        m.set(1, 0, 0), a[v + 0] = $e(m, d, "z", "y", i, n), a[v + 1] = 1 - $e(m, d, "y", "z", i, t);
        break;
      case 1:
        m.set(-1, 0, 0), a[v + 0] = 1 - $e(m, d, "z", "y", i, n), a[v + 1] = 1 - $e(m, d, "y", "z", i, t);
        break;
      case 2:
        m.set(0, 1, 0), a[v + 0] = 1 - $e(m, d, "x", "z", i, e), a[v + 1] = $e(m, d, "z", "x", i, n);
        break;
      case 3:
        m.set(0, -1, 0), a[v + 0] = 1 - $e(m, d, "x", "z", i, e), a[v + 1] = 1 - $e(m, d, "z", "x", i, n);
        break;
      case 4:
        m.set(0, 0, 1), a[v + 0] = 1 - $e(m, d, "x", "y", i, e), a[v + 1] = 1 - $e(m, d, "y", "x", i, t);
        break;
      case 5:
        m.set(0, 0, -1), a[v + 0] = $e(m, d, "x", "y", i, e), a[v + 1] = 1 - $e(m, d, "y", "x", i, t);
        break;
    }
  }
}
class du extends dt {
  constructor() {
    super();
  }
  addCube(e = {}) {
    e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.segments = e.segments == null ? 1 : e.segments, e.radius = e.radius == null ? 0 : e.radius, e.color = e.color == null ? "#620460" : e.color, e.opacity = e.opacity == null ? 1 : e.opacity;
    var t = new Ds(e.scaleX, e.scaleY, e.scaleZ, e.segments, e.radius), n = new Ct({ color: e.color, transparent: true }), r = new tt(t, n);
    r.castShadow = true, r.receiveShadow = true, r.position.set(e.x, e.y, e.z), r.material.colorOrigin = e.color, r.material.opacity = e.opacity, this.add(r);
  }
  addCone(e = {}) {
    e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.rotationX = e.rotationX == null ? 0 : e.rotationX, e.rotationY = e.rotationY == null ? 0 : e.rotationY, e.rotationZ = e.rotationZ == null ? 0 : e.rotationZ, e.segments = e.segments == null ? 4 : e.segments, e.color = e.color == null ? "#620460" : e.color, e.opacity = e.opacity == null ? 1 : e.opacity;
    var t = new so(e.scaleX / 2 * 1.5, e.scaleY, e.segments), n = new Ct({ color: e.color, flatShading: true }), r = new tt(t, n);
    r.castShadow = true, r.receiveShadow = true, r.position.set(e.x, e.y, e.z), r.material.colorOrigin = e.color, r.material.opacity = e.opacity, r.rotation.x = e.rotationX, r.rotation.y = e.rotationY + 45 * Math.PI / 180, r.rotation.z = e.rotationZ, this.add(r);
  }
  addExtrusion(e = {}) {
    e.position = e.position == null ? { x: 0, y: 0, z: 0 } : e.position, e.scale = e.scale == null ? { x: 1, y: 1, z: 1 } : e.scale, e.rotation = e.rotation == null ? { x: 0, y: 0, z: 0 } : e.rotation, e.points = e.points == null ? [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }] : e.points, e.depth = e.depth == null ? 1 : e.depth, e.color = e.color == null ? "#620460" : e.color;
    for (var t = new ao(), n = 0; n < e.points.length; n++) {
      var r = e.points[n];
      n == 0 ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
    }
    var i = { steps: 1, depth: e.depth, bevelEnabled: true, bevelSize: 0, bevelSegments: 1, bevelThickness: 0 }, o = new oo(t, i), l = new Ct({ color: e.color }), d = new tt(o, l);
    d.position.set(e.position.x, e.position.y, e.position.z), d.scale.set(e.scale.x, e.scale.y, e.scale.z), d.rotation.set(e.rotation.x, e.rotation.y, e.rotation.z), d.castShadow = true, d.receiveShadow = true, this.add(d);
  }
  setColors(e, t = true) {
    for (var n = this.children.length, r = 0; r < n; r++) {
      var i = this.children[r];
      i.material.color.set(e), t == true && (i.material.colorOrigin = e);
    }
  }
  setOpacities(e) {
    for (var t = this.children.length, n = 0; n < t; n++) {
      var r = this.children[n];
      r.material.opacity = e;
    }
  }
  resetColors() {
    for (var e = this.children.length, t = 0; t < e; t++) {
      var n = this.children[t], r = n.material.colorOrigin;
      n.material.color.set(r);
    }
  }
  removeAllShapes() {
    for (var e = this.children.length, t = 0; t < e; t++) {
      var n = this.children[0];
      this.remove(n);
    }
  }
}
class Ae extends tt {
  constructor(e = {}) {
    super(), e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.segments = e.segments == null ? 1 : e.segments, e.radius = e.radius == null ? 0 : e.radius, e.angle = e.angle == null ? 0 : e.angle, e.color = e.color == null ? "#620460" : e.color, e.debug = e.debug != null, this.shapes = new du(), this.shapes.addCube(e), this.setColors(e.color), this.add(this.shapes), this.hitbox = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { class: "hitbox" }), this.body = K.Body.create({ parts: [this.hitbox], friction: 0, frictionAir: 0, frictionStatic: 0, restitution: 0, slop: 0, timeScale: 1, name: this.uuid, class: "cube" }), this.helper = new dt(), this.helper.visible = e.debug, this.addHelper(this.hitbox), this.name = this.uuid, this.isCube = true, this.setPosition({ x: e.x, y: e.y, z: e.z }), this.setRotation(e.angle), this.setScale({ x: e.scaleX, y: e.scaleY, z: e.scaleZ }), this.setMode(), this.setForceDirection();
  }
  update(e, t) {
    t && (this.position.x = this.body.positionPrev.x + (this.body.position.x - this.body.positionPrev.x) * t, this.position.y = -(this.body.positionPrev.y + (this.body.position.y - this.body.positionPrev.y) * t), this.rotation.z = -(this.body.anglePrev + (this.body.angle - this.body.anglePrev) * t)), this.position.y < -1e3 && (this.getClass() == "player" && this.isStatic() == false ? this.kill() : app.level.removeObject(this, app)), this.updateHelper();
  }
  updateHelper() {
    this.helper && this.helper.visible == true && (this.helper.position.x = this.body.position.x, this.helper.position.y = -this.body.position.y, this.helper.position.z = this.position.z, this.helper.rotation.z = -this.body.anglePrev, this.helper.scale.copy(this.scale).multiplyScalar(1));
  }
  addHelper(e, t) {
    t == null && (t = {}), t.position == null && (t.position = { x: 0, y: 0 }), t.color == null && (t.color = "#00ff00");
    var n = e.bounds.max.x - e.bounds.min.x, r = e.bounds.max.y - e.bounds.min.y, i = n, o = new Es(n, r, i), l = new uo(o, new Ct({ color: t.color, wireframe: true }));
    this.helper.add(l), o.translate(t.position.x, t.position.y, 0);
  }
  setColors(e) {
    this.color = e, this.shapes.setColors(e);
  }
  setPosition(e = {}, t = true) {
    e.x = e.x == null ? this.position.x : e.x, e.y = e.y == null ? this.position.y : e.y, e.z = e.z == null ? this.position.z : e.z, this.position.set(e.x, e.y, e.z), K.Body.setPosition(this.body, { x: e.x, y: -e.y }), t == true && this.setPositionOrigin(e);
  }
  setPositionOrigin(e) {
    this.positionOrigin == null && (this.positionOrigin = {}), this.positionOrigin.x = e.x, this.positionOrigin.y = e.y, this.positionOrigin.z = e.z;
  }
  getPosition() {
    return this.position;
  }
  setRotation(e, t = true) {
    typeof e == "object" ? (this.rotation.x = e.x, this.rotation.y = e.y, this.rotation.z = e.z, K.Body.setAngle(this.body, -e.z), t == true && this.setRotationOrigin(e.z)) : (this.rotation.z = e, K.Body.setAngle(this.body, -e), t == true && this.setRotationOrigin(e));
  }
  setRotationOrigin(e) {
    this.rotationOrigin = e;
  }
  getRotation(e = "radians") {
    var t = this.rotation.z;
    return e == "degrees" && (t = Math.round(this.rotation.z * (180 / Math.PI))), t;
  }
  getRotationOrigin() {
    return this.rotationOrigin;
  }
  setScale(e = {}, t = true) {
    e.x = e.x == null ? this.scale.x : e.x, e.y = e.y == null ? this.scale.y : e.y, e.z = e.z == null ? this.scale.z : e.z;
    var n = this.rotation.z;
    this.setRotation(0, false), this.setBodyScale(e.x / this.scale.x, e.y / this.scale.y), this.scale.x = e.x, this.scale.y = e.y, this.scale.z = e.z, this.setRotation(n, false), t == true && this.setScaleOrigin({ x: e.x, y: e.y, z: e.z });
  }
  setBodyScale(e, t) {
    K.Body.scale(this.body, e, t);
  }
  getScale() {
    return this.scale;
  }
  getScaleOrigin() {
    return this.scaleOrigin;
  }
  setScaleOrigin(e) {
    this.scaleOrigin == null && (this.scaleOrigin = {}), this.scaleOrigin.x = e.x, this.scaleOrigin.y = e.y, this.scaleOrigin.z = e.z;
  }
  setForceDirection(e = { x: 0, y: 0 }, t = true) {
    this.force = e, t == true && this.setForceDirectionOrigin(e);
  }
  setForceDirectionOrigin(e) {
    this.forceOrigin = e;
  }
  getForce() {
    return this.force;
  }
  calculateForceDirection(e, t) {
    var n = { x: 25e-5 * t.mass, y: 0 };
    return n = K.Vector.rotate(n, e.angle), n;
  }
  resetToOrigin() {
    this.hide(false), this.setPosition(this.positionOrigin, false), this.setRotation(this.rotationOrigin, false), this.setScale({ x: this.scaleOrigin.x, y: this.scaleOrigin.y, z: this.scaleOrigin.z }, false), this.setForceDirection(this.forceOrigin, false), this.setStatic(this.isStaticOrigin, false), this.setFriction(this.frictionOrigin, false), this.setMode(this.modeOrigin, false), K.Body.setVelocity(this.body, { x: 0, y: 0 }), K.Body.setAngularVelocity(this.body, 0);
  }
  setStatic(e = true, t = true) {
    K.Body.setStatic(this.body, e), t == true && this.setStaticOrigin(e);
  }
  setStaticOrigin(e) {
    this.isStaticOrigin = e;
  }
  toggleStatic() {
    var e = !this.body.isStatic;
    return this.setStatic(e), e;
  }
  isStatic() {
    return this.body.isStatic;
  }
  setFriction(e = 0.1, t = true) {
    this.body.friction = parseFloat(e), t == true && this.setFrictionOrigin(e);
  }
  setFrictionOrigin(e) {
    this.frictionOrigin = parseFloat(e);
  }
  getFriction() {
    return this.body.friction;
  }
  setMode(e, t = true) {
    e = e ?? "default", this.mode = e, t == true && this.setModeOrigin(e), window.dispatchEvent(new CustomEvent("setMode", { detail: e }));
  }
  setModeOrigin(e) {
    this.modeOrigin = e;
  }
  getClass() {
    return this.body.class;
  }
  setText(e) {
    e != null && (this.text = e);
  }
  getText() {
    return this.text;
  }
  select(e = true) {
    this.selected = e, e == true ? (this.shapes.setColors("#ffffff", false), this.shapes.setOpacities(0.9), K.Body.setVelocity(this.body, { x: 0, y: 0 }), K.Body.setAngularVelocity(this.body, 0)) : (this.shapes.resetColors(), this.shapes.setOpacities(1));
  }
  isSelected() {
    return this.selected;
  }
  setForce(e, t, n = false) {
    var r = this.body.positionPrev.x, i = this.body.position.x, o = this.body.positionPrev.y, l = this.body.position.y, d = t.body.angle, c = Math.atan2(l - o, i - r);
    n == true && (d = this.body.angle, c = this.body.angle + Math.PI / 2, e *= -1 * app.loop.speed);
    var u = Math.cos(c), p = Math.sin(c), a = -Math.sin(d), s = Math.cos(d), m = u * a + p * s, h = u - 2 * m * a, g = p - 2 * m * s;
    return m < 0 && (Math.abs(h) == 1 || Math.abs(g) == 1) && (e *= -1), K.Body.setVelocity(this.body, { x: h * e, y: g * e }), e;
  }
  getVelocity(e = this) {
    return { x: e.body.position.x - e.body.positionPrev.x, y: e.body.position.y - e.body.positionPrev.y };
  }
  freeze(e = true) {
    this.body.collisionFilter.category = e == true ? 0 : 1, K.Sleeping.set(this.body, e);
  }
  hide(e = true) {
    this.visible = !e, this.freeze(e);
  }
  isFrozen() {
    return this.body.collisionFilter.category == 0;
  }
  addLight(e, t, n, r = false) {
    this.light == null && (this.light = new lo(e, t, n), this.light.position.set(0, 0, 0), this.light.castShadow = r, this.add(this.light));
  }
  toJSON() {
    var e = { class: this.body.class, position: { x: this.position.x, y: this.position.y, z: this.position.z }, rotation: { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z }, scale: { x: this.scale.x, y: this.scale.y, z: this.scale.z } };
    return this.body.isStatic == false && (e.isStatic = false, e.friction = this.body.friction), this.body.class == "tip" && this.text != null && (e.text = this.text), e;
  }
}
const er = new Ei(), Ft = new ue();
class Is extends co {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Gi(e, 3)), this.setAttribute("uv", new Gi(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new hi(t, 6, 1);
    return this.setAttribute("instanceStart", new wt(n, 3, 0)), this.setAttribute("instanceEnd", new wt(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new hi(t, 6, 1);
    return this.setAttribute("instanceColorStart", new wt(n, 3, 0)), this.setAttribute("instanceColorEnd", new wt(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new fo(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ei());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), er.setFromBufferAttribute(t), this.boundingBox.union(er));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ts()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let r = 0;
      for (let i = 0, o = e.count; i < o; i++) Ft.fromBufferAttribute(e, i), r = Math.max(r, n.distanceToSquared(Ft)), Ft.fromBufferAttribute(t, i), r = Math.max(r, n.distanceToSquared(Ft));
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
}
Kt.line = { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new He(1, 1) }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } };
Zt.line = { uniforms: _i.merge([Kt.common, Kt.fog, Kt.line]), vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`, fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		` };
class Pi extends xt {
  constructor(e) {
    super({ type: "LineMaterial", uniforms: _i.clone(Zt.line.uniforms), vertexShader: Zt.line.vertexShader, fragmentShader: Zt.line.fragmentShader, clipping: true }), this.isLineMaterial = true, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === true !== this.dashed && (this.needsUpdate = true), e === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === true !== this.alphaToCoverage && (this.needsUpdate = true), e === true ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const _n = new zt(), tr = new ue(), nr = new ue(), we = new zt(), Se = new zt(), Ve = new zt(), En = new ue(), Tn = new mn(), Ce = new po(), ir = new ue(), Ut = new Ei(), qt = new Ts(), Ge = new zt();
let Je, lt;
function rr(f, e, t) {
  return Ge.set(0, 0, -e, 1).applyMatrix4(f.projectionMatrix), Ge.multiplyScalar(1 / Ge.w), Ge.x = lt / t.width, Ge.y = lt / t.height, Ge.applyMatrix4(f.projectionMatrixInverse), Ge.multiplyScalar(1 / Ge.w), Math.abs(Math.max(Ge.x, Ge.y));
}
function fu(f, e) {
  const t = f.matrixWorld, n = f.geometry, r = n.attributes.instanceStart, i = n.attributes.instanceEnd, o = Math.min(n.instanceCount, r.count);
  for (let l = 0, d = o; l < d; l++) {
    Ce.start.fromBufferAttribute(r, l), Ce.end.fromBufferAttribute(i, l), Ce.applyMatrix4(t);
    const c = new ue(), u = new ue();
    Je.distanceSqToSegment(Ce.start, Ce.end, u, c), u.distanceTo(c) < lt * 0.5 && e.push({ point: u, pointOnLine: c, distance: Je.origin.distanceTo(u), object: f, face: null, faceIndex: l, uv: null, uv1: null });
  }
}
function pu(f, e, t) {
  const n = e.projectionMatrix, i = f.material.resolution, o = f.matrixWorld, l = f.geometry, d = l.attributes.instanceStart, c = l.attributes.instanceEnd, u = Math.min(l.instanceCount, d.count), p = -e.near;
  Je.at(1, Ve), Ve.w = 1, Ve.applyMatrix4(e.matrixWorldInverse), Ve.applyMatrix4(n), Ve.multiplyScalar(1 / Ve.w), Ve.x *= i.x / 2, Ve.y *= i.y / 2, Ve.z = 0, En.copy(Ve), Tn.multiplyMatrices(e.matrixWorldInverse, o);
  for (let a = 0, s = u; a < s; a++) {
    if (we.fromBufferAttribute(d, a), Se.fromBufferAttribute(c, a), we.w = 1, Se.w = 1, we.applyMatrix4(Tn), Se.applyMatrix4(Tn), we.z > p && Se.z > p) continue;
    if (we.z > p) {
      const w = we.z - Se.z, y = (we.z - p) / w;
      we.lerp(Se, y);
    } else if (Se.z > p) {
      const w = Se.z - we.z, y = (Se.z - p) / w;
      Se.lerp(we, y);
    }
    we.applyMatrix4(n), Se.applyMatrix4(n), we.multiplyScalar(1 / we.w), Se.multiplyScalar(1 / Se.w), we.x *= i.x / 2, we.y *= i.y / 2, Se.x *= i.x / 2, Se.y *= i.y / 2, Ce.start.copy(we), Ce.start.z = 0, Ce.end.copy(Se), Ce.end.z = 0;
    const h = Ce.closestPointToPointParameter(En, true);
    Ce.at(h, ir);
    const g = gn.lerp(we.z, Se.z, h), v = g >= -1 && g <= 1, x = En.distanceTo(ir) < lt * 0.5;
    if (v && x) {
      Ce.start.fromBufferAttribute(d, a), Ce.end.fromBufferAttribute(c, a), Ce.start.applyMatrix4(o), Ce.end.applyMatrix4(o);
      const w = new ue(), y = new ue();
      Je.distanceSqToSegment(Ce.start, Ce.end, y, w), t.push({ point: y, pointOnLine: w, distance: Je.origin.distanceTo(y), object: f, face: null, faceIndex: a, uv: null, uv1: null });
    }
  }
}
class hu extends tt {
  constructor(e = new Is(), t = new Pi({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = true, this.type = "LineSegments2";
  }
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
    for (let o = 0, l = 0, d = t.count; o < d; o++, l += 2) tr.fromBufferAttribute(t, o), nr.fromBufferAttribute(n, o), r[l] = l === 0 ? 0 : r[l - 1], r[l + 1] = r[l] + tr.distanceTo(nr);
    const i = new hi(r, 2, 1);
    return e.setAttribute("instanceDistanceStart", new wt(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new wt(i, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, r = e.camera;
    r === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const i = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    Je = e.ray;
    const o = this.matrixWorld, l = this.geometry, d = this.material;
    lt = d.linewidth + i, l.boundingSphere === null && l.computeBoundingSphere(), qt.copy(l.boundingSphere).applyMatrix4(o);
    let c;
    if (n) c = lt * 0.5;
    else {
      const p = Math.max(r.near, qt.distanceToPoint(Je.origin));
      c = rr(r, p, d.resolution);
    }
    if (qt.radius += c, Je.intersectsSphere(qt) === false) return;
    l.boundingBox === null && l.computeBoundingBox(), Ut.copy(l.boundingBox).applyMatrix4(o);
    let u;
    if (n) u = lt * 0.5;
    else {
      const p = Math.max(r.near, Ut.distanceToPoint(Je.origin));
      u = rr(r, p, d.resolution);
    }
    Ut.expandByScalar(u), Je.intersectsBox(Ut) !== false && (n ? fu(this, t) : pu(this, r, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(_n), this.material.uniforms.resolution.value.set(_n.z, _n.w));
  }
}
class Bs extends Is {
  constructor() {
    super(), this.isLineGeometry = true, this.type = "LineGeometry";
  }
  setPositions(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let r = 0; r < t; r += 3) n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5];
    return super.setPositions(n), this;
  }
  setColors(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let r = 0; r < t; r += 3) n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5];
    return super.setColors(n), this;
  }
  setFromPoints(e) {
    const t = e.length - 1, n = new Float32Array(6 * t);
    for (let r = 0; r < t; r++) n[6 * r] = e[r].x, n[6 * r + 1] = e[r].y, n[6 * r + 2] = e[r].z || 0, n[6 * r + 3] = e[r + 1].x, n[6 * r + 4] = e[r + 1].y, n[6 * r + 5] = e[r + 1].z || 0;
    return super.setPositions(n), this;
  }
  fromLine(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
}
class mu extends hu {
  constructor(e = new Bs(), t = new Pi({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = true, this.type = "Line2";
  }
}
class gu extends dt {
  constructor() {
    super(), this.radius = 4;
  }
  addJoints(e, t, n) {
    for (var r = e.position, i = n, o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)), l = 4, d = Math.ceil(o / (this.radius * 2) / l), c = 16 / l, u = 1 / l, p = 1; p <= l; p++) {
      var a = p == l, s = p / l, m = { x: r.x + (i.x - r.x) * s, y: r.y + (i.y - r.y) * s };
      p > 1 && (e = this.children[this.children.length - 1].body);
      var h = { bodyA: e, bodyB: t, isLastJoint: a, minLength: c, position: m, radius: this.radius, spacing: d, speed: u, texture: this.texture }, g = new vu(h);
      this.add(g);
    }
  }
  removeJoints() {
    for (var e = this.children.length, t = e - 1; t >= 0; ) {
      var n = this.children[t];
      n.removeConstraint(), n.removeBody(), this.remove(n), t--;
    }
  }
  resetToOrigin() {
    this.removeJoints();
  }
  updateJoints() {
    for (var e = 0; e < this.children.length; e++) {
      var t = [], n = this.children[e], r = n.constraint.bodyA.position, i = n.constraint.bodyB.position;
      n.shrink(), n.line2 != null && (t.push(r.x, -r.y, 0), t.push(i.x + n.offset.x, -(i.y + n.offset.y), 0), n.line2Geometry.setPositions(t), n.line2.computeLineDistances()), n.circleMesh != null && n.circleMesh.position.set(i.x, -i.y, 0);
    }
  }
}
class vu extends dt {
  constructor(e) {
    super(), this.addLineMesh(e), this.addBody(e), this.addConstraint(e);
  }
  addLineMesh(e) {
    this.speed = e.speed, this.minLength = e.minLength, this.line2Geometry = new Bs(), this.line2Material = new Pi({ color: "#ffffff", dashed: false, linewidth: 4, dashScale: 1, dashSize: 8, gapSize: 2, worldUnits: true }), this.line2 = new mu(this.line2Geometry, this.line2Material), this.add(this.line2);
  }
  addCircleMesh(e) {
    this.circle = new ho(e.radius, 12), this.circleMaterial = new mo({ color: "#ffffff", opacity: 1, transparent: true }), this.circleMesh = new tt(this.circle, this.circleMaterial), this.add(this.circleMesh);
  }
  removeCircleMesh() {
    this.remove(this.circleMesh);
  }
  addBody(e) {
    this.part = K.Bodies.circle(e.position.x, e.position.y, e.radius, { isSensor: true }), this.body = K.Body.create({ parts: [this.part], friction: 0, frictionAir: 0, frictionStatic: 0, restitution: 0 }), K.World.add(app.engine.world, this.body);
  }
  removeBody() {
    K.World.remove(app.engine.world, this.body);
  }
  addConstraint(e) {
    var t = this.body, n = { x: 0, y: 0 };
    e.isLastJoint == true && (this.removeBody(), this.removeCircleMesh(), t = e.bodyB, n = { x: -(t.position.x - e.position.x), y: -(t.position.y - e.position.y) }), this.offset = n, this.constraint = K.Constraint.create({ bodyA: e.bodyA, bodyB: t, mass: 0, pointB: n, stiffness: 1.5, shrink: true }), K.World.add(app.engine.world, this.constraint);
  }
  removeConstraint() {
    K.World.remove(app.engine.world, this.constraint);
  }
  shrink() {
    this.constraint.shrink == true && (this.constraint.length > this.minLength ? this.constraint.length -= this.speed : (this.constraint.length = this.minLength, this.constraint.shrink = false));
  }
}
class Li extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "player", this.setScale({ x: 16, y: 16, z: 16 }), this.setStatic(false), this.setColors("#dc265a"), this.setMode("jump"), this.util = new Rs(), this.mass = 5, this.allowJump = false, this.jumpBuffer = 0, this.inputBuffer = 0, this.addLight("#dc265a", 16e3, 500, false), this.controls = { left: 0, right: 0, acceleration: 0.5, speed: 4 }, this.rope = new gu(), this.skin = { url: "" }, this.plane = new tt(new go(1e3, 1e3), new Ct({ visible: false, side: pi })), this.add(this.plane);
  }
  setScale(e = {}, t = true) {
    super.setScale(e, t);
  }
  update(e, t) {
    this.jumpBuffer > 0 && (this.jumpBuffer -= e * 1e3, this.allowJump == true && (this.jumpBuffer = 0, this.jump())), super.update(e, t);
  }
  jump() {
    if (this.mode == "jump" || this.mode == "control") if (this.allowJump == true) {
      this.allowJump = false;
      var e = app.engine.world.gravity, t = Math.PI / 2 - K.Vector.angle({ x: 0, y: 0 }, e), n = this.body.velocity, r = 1, i = Math.PI / 20, o = 0.025, l = { x: -(e.x * o * this.body.mass), y: -(e.y * o * this.body.mass) };
      n = K.Vector.rotate(n, t), n.y = 0, r = n.x >= 0 ? 1 : -1, i *= r, n = K.Vector.rotate(n, -t), this.body.speed < this.controls.speed * 0.25 && (i = 0), K.Body.setVelocity(this.body, n), K.Body.setAngularVelocity(this.body, i), K.Body.applyForce(this.body, this.body.position, l), app.assets.audio.play("pop2");
    } else this.jumpBuffer = this.inputBuffer;
  }
  setControls(e, t) {
    this.controls[e] = t;
  }
  setInputBuffer(e) {
    this.inputBuffer = e;
  }
  updateControls() {
    if (this.mode == "control") {
      var e = app.engine.world.gravity, t = this.controls.left + this.controls.right, n = { x: e.y * t, y: -e.x * t }, r = this.body.velocity, i = K.Vector.dot(r, n), o = 4, l = i + this.controls.acceleration, d = Math.max(i, Math.min(l, o)), c = d - i;
      r.x += n.x * c, r.y += n.y * c, K.Body.setVelocity(this.body, r);
    }
  }
  addRope(e) {
    if (this.mode == "grapple" && this.isFrozen() == false) {
      var t = 4, n = 400, r = e.x - this.position.x, i = e.y - this.position.y, o = Math.sqrt(r * r + i * i), l = { x: this.position.x, y: -this.position.y }, d = { x: this.position.x + (e.x - this.position.x) * n / o, y: -(this.position.y + (e.y - this.position.y) * n / o) };
      this.removeRope();
      for (var c = 0; c < n; c += t) {
        var u = c / n, p = { x: l.x + (d.x - l.x) * u, y: l.y + (d.y - l.y) * u }, a = K.Query.point(app.engine.world.bodies, p);
        if (a.length > 0 && a[0].class != "player") {
          var s = app.level.getObjectByName(a[0].name);
          if (s.visible == true && s.position.z == 0) {
            app.level.add(this.rope), this.rope.addJoints(this.body, a[0], p), this.updateRope();
            break;
          }
        }
      }
      app.assets.audio.play("ice");
    }
  }
  updateForce() {
    this.body.speed < this.controls.speed && K.Body.applyForce(this.body, this.body.position, { x: this.force.x * app.loop.speed, y: this.force.y * app.loop.speed });
  }
  updateRope() {
    this.rope.updateJoints();
  }
  removeRope() {
    this.rope.removeJoints(), app.level.remove(this.rope);
  }
  kill() {
    if (this.isFrozen() == false) {
      this.freeze(true), this.visible = false, this.killTimeout = setTimeout(function() {
        this.restart();
      }.bind(this), 1e3);
      for (var e = 4, t = 4, n = 4, r = { x: this.scale.x / t, y: this.scale.y / e, z: this.scale.z / n }, i = -e / 2; i < e / 2; i++) for (var o = -t / 2; o < t / 2; o++) {
        var l = this.util.randomNumber(0, 360 * (Math.PI / 180)), d = { color: this.color, position: { x: this.position.x + o * r.x + r.x / 2, y: this.position.y + i * r.y + r.y / 2, z: 0 }, rotation: { x: 0, y: 0, z: l }, scale: { x: r.x, y: r.y, z: r.z }, isStatic: false, friction: 0 }, c = app.level.entityFactory.createObject("cube");
        app.level.setObjectProperties(c, d), app.level.addObject(c, app), c.isParticle = true, c.setColors(this.color), K.Body.setVelocity(c.body, this.body.velocity);
      }
    }
    window.dispatchEvent(new CustomEvent("playerKill", { detail: { player: this } })), app.assets.audio.play("glass");
  }
  cancelRestart() {
    clearTimeout(this.killTimeout);
  }
  saveCheckpoint(e) {
    this.checkpoint == null && (this.checkpoint = {}), this.checkpoint.x = e.x, this.checkpoint.y = e.y, this.checkpoint.z = e.z;
  }
  removeCheckpoint() {
    this.checkpoint = null;
  }
  setPositionToCheckpoint() {
    this.checkpoint != null && this.setPosition({ x: this.position.x = this.checkpoint.x, y: this.position.y = this.checkpoint.y, z: this.position.z = this.checkpoint.z }, false);
  }
  respawn(e = false) {
    (this.isFrozen() == true || e == true) && (app.level.removeParticles(app), this.resetToOrigin(), this.setPositionToCheckpoint(), window.dispatchEvent(new CustomEvent("playerRespawn", { detail: { player: this } })));
  }
  restart() {
    app.level.retryLevel(app, true), window.dispatchEvent(new CustomEvent("playerRestart", { detail: { player: this } }));
  }
  finish() {
    if (app.play == true) {
      var e = app.level.publishedFileId || app.level.name, t = app.timer.toString(), n = app.storage.saveScore(e, t), r = app.storage.getSettings(app);
      app.timer.render(t), app.play = false, window.dispatchEvent(new CustomEvent("levelFinish", { detail: { time: t, level: e } })), r.buffer == 0 && r.debug == false && (t = '<span class="material-symbols-rounded">verified</span><br>' + t), window.dispatchEvent(new CustomEvent("openPopup", { detail: { title: t, text: "popup.text.seconds", description: n ? "popup.description.new_record" : null, inputs: [{ value: "popup.button.retry", type: "button", callback: function() {
        app.level.retryLevel(app), window.dispatchEvent(new CustomEvent("closePopup"));
      } }, { value: "popup.button.continue", type: "button", callback: function() {
        app.level.exitLevel(app), window.dispatchEvent(new CustomEvent("closePopup"));
      } }] } })), app.assets.audio.play("clap"), app.assets.audio.play("success");
    }
  }
  shrink() {
    this.setScale({ x: this.scale.x / 2, y: this.scale.y / 2, z: this.scale.z / 2 }, false);
  }
  grow() {
    this.setScale({ x: this.scale.x * 2, y: this.scale.y * 2, z: this.scale.z * 2 }, false);
  }
  renderSpeed(e) {
    var t = this.body.speed, n = 10, r = 0, i = r + "%;";
    t > n && (t = n), r = t / n * 100, i = "width: calc(" + r + "% - 8px)", e.document.getElementById("speed") && e.document.getElementById("speed").setAttribute("style", i);
  }
  setSkin(e = {}, t = app) {
    this.addTexture(e);
  }
  reset() {
    app.updateGravity(), this.setForceDirection(), this.setScale({ x: this.scaleOrigin.x, y: this.scaleOrigin.y, z: this.scaleOrigin.z }, false), this.setMode(this.modeOrigin, false), this.controls.left = this.controls.right = 0, this.jumpBuffer = 0, app.assets.audio.play("teleport");
  }
  addTexture(e) {
    if (e.url) {
      e.url = e.url.replace("img/png/skins/", "../png/");
      var t = new Ss();
      t.load(e.url, function(n) {
        n.colorSpace = vo, this.remove(this.skin), this.shapes.visible = false;
        var r = new Ds(1, 1, 1, 1, 0.1), i = new Ct({ map: n, transparent: true, opacity: 1 });
        this.shapes.setOpacities(0), this.skin = new tt(r, i), this.skin.url = e.url, this.add(this.skin);
      }.bind(this), void 0, function(n) {
        console.error("An error happened: ", n);
      }.bind(this));
    }
  }
}
new He();
class bu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "tip", this.text = "Do not touch the spikes!", this.hitbox.isSensor = true, this.hitbox.class = "sensor", this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.shapes.setOpacities(0.5), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ color: "#0287ef", z: -(t * 0.5), scaleZ: t * 4 }), this.shapes.addCube({ y: t * 1, z: t * 2, scaleX: t, scaleY: t * 2, scaleZ: t, color: "#fff" }), this.shapes.addCube({ y: -(t * 1.5), z: t * 2, scaleX: t, scaleY: t, scaleZ: t, color: "#fff" });
  }
}
class yu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "bounce";
    var t = { x: 0, y: 0.6 }, n = { x: e.scaleX * 0.6, y: e.scaleY * 0.2 };
    this.sensor = K.Bodies.rectangle(t.x, -t.y, n.x, n.y, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.addHelper(this.sensor, { position: t, color: "#ffff00" }), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ y: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ y: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ y: -(t * 1), scaleY: t * 3, scaleZ: t * 5, color: "#0287ef" });
  }
}
class xu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "checkpoint", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t, scaleY: t, scaleZ: t, color: "#fff" }), this.shapes.addCube({ x: t * 0, y: -(t * 2), z: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: -(t * 2), z: -(t * 2), scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: t * 2, z: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: t * 2, z: -(t * 2), scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: 0, z: t * 2, scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: 0, z: -(t * 2), scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: 0, z: t * 2, scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: 0, z: -(t * 2), scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" });
  }
}
class wu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "spike";
    var t = { x: 0, y: 0.6 }, n = { x: e.scaleX * 0.6, y: e.scaleY * 0.2 };
    this.sensor = K.Bodies.rectangle(t.x, -t.y, n.x, n.y, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.addHelper(this.sensor, { position: t, color: "#ff0000" }), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e), this.setColors(e.color);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.25;
    this.shapes.addCone({ x: -(t * 1), y: t * 0, z: t * 1, scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: -(t * 1), y: t * 0, z: -(t * 1), scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: t * 1, y: t * 0, z: t * 1, scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: t * 1, y: t * 0, z: -(t * 1), scaleX: t * 2, scaleY: t * 4 });
  }
}
class Su extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "shrink", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ x: -(t * 1), y: t * 1, z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: t * 1, z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: -(t * 1), z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: -(t * 1), z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: t * 1, z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: t * 1, z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: -(t * 1), z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: -(t * 1), z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" });
  }
}
class Cu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "grow", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t * 3, scaleY: t * 3, scaleZ: t * 3, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" });
  }
}
class ku extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "resize", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t * 3, scaleY: t * 3, scaleZ: t * 3, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" });
  }
}
class _u extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "direction", this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ x: 0, y: 0, z: -(t * 0.5), scaleX: 1, scaleY: 1, scaleZ: t * 4, color: "#0287ef" }), this.shapes.addExtrusion({ position: { x: -0.5, y: -0.5, z: t * 1.5 }, points: [{ x: t, y: t }, { x: t * 4, y: 0.5 }, { x: t, y: t * 4 }, { x: 0.4, y: 0.5 }], depth: t, color: "#fff" });
  }
}
class Eu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "gravity", this.hitbox.isSensor = true, this.hitbox.class = "sensor", this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.shapes.setOpacities(0.5), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ / 9;
    this.shapes.addCube({ x: 0, y: 0, z: -(t * 0.5), scaleX: 1, scaleY: 1, scaleZ: t * 6, color: "#0287ef" }), this.shapes.addCube({ x: 0, y: -(t * 3), z: t * 3, scaleX: t * 7, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: 0, y: t * 3, z: t * 3, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: 0, y: -(t * 1), z: t * 3, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: -(t * 2), y: t * 1, z: t * 3, scaleX: t * 1, scaleY: t * 3, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: t * 2, y: t * 1, z: t * 3, scaleX: t * 1, scaleY: t * 3, scaleZ: t * 1, color: "#fff" });
  }
}
class Tu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "grapple", this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ / 8;
    this.shapes.addCube({ x: 0, y: 0, z: -t, scaleX: 1, scaleY: 1, scaleZ: t * 7, color: "#0287ef" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: 0, y: 0 }, { x: 0, y: -(t * 3) }, { x: -(t * 3), y: -(t * 3) }, { x: -(t * 3), y: 0 }], depth: t, color: "#fff" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: -(t * 1), y: 0 }, { x: 0, y: -(t * 1) }, { x: t * 2, y: t * 1 }, { x: t * 1, y: t * 2 }], depth: t, color: "#fff" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: 0, y: t * 3 }, { x: t * 3, y: t * 3 }, { x: t * 3, y: 0 }], depth: t, color: "#fff" });
  }
}
class Pu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "finish", this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    for (var t = 3, n = e.scaleZ * (1 / t), r = -Math.floor(t / 2), i = Math.ceil(t / 2), o = 0, l = "#ffffff", d = r; d < i; d++) for (var c = r; c < i; c++) for (var u = r; u < i; u++) l = o % 2 == 0 ? null : "#ffffff", this.shapes.addCube({ x: n * u, y: n * c, z: n * d, scaleX: n * 1, scaleY: n * 1, scaleZ: n * 1, color: l }), o++;
  }
}
class Lu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "reset", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  addShapes(e) {
    for (var t = 3, n = e.scaleZ * (1 / t), r = -Math.floor(t / 2), i = Math.ceil(t / 2), o = 0, l = "#0287ef", d = r; d < i; d++) for (var c = r; c < i; c++) for (var u = r; u < i; u++) o % 2 != 0 && (d == 0 && c == 0 ? l = "#ffffff" : l = "#0287ef", this.shapes.addCube({ x: n * u, y: n * c, z: n * d, scaleX: n * 1, scaleY: n * 1, scaleZ: n * 1, color: l })), o++;
  }
}
class Mu extends Ae {
  constructor(e = {}) {
    super(e), this.body.class = "control", this.hitbox.isSensor = true, this.sensor = K.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), K.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.add(e.model);
  }
}
class Ou {
  constructor() {
    this.color = "#620460";
  }
  createObject(e, t) {
    var n;
    switch (t == null && (t = { color: this.color }), e) {
      case "player":
        n = new Li(t);
        break;
      case "tip":
        n = new bu(t);
        break;
      case "bounce":
        n = new yu(t);
        break;
      case "checkpoint":
        n = new xu(t);
        break;
      case "spike":
        n = new wu(t);
        break;
      case "shrink":
        n = new Su(t);
        break;
      case "grow":
        n = new Cu(t);
        break;
      case "resize":
        n = new ku(t);
        break;
      case "direction":
        n = new _u(t);
        break;
      case "gravity":
        n = new Eu(t);
        break;
      case "grapple":
        n = new Tu(t);
        break;
      case "finish":
        n = new Pu(t);
        break;
      case "reset":
        n = new Lu(t);
        break;
      case "control":
        t.model = app.assets.models.clone("cube-control"), n = new Mu(t);
        break;
      default:
        n = new Ae(t);
    }
    return n;
  }
}
const Au = JSON.parse(`[{"title":"Easy Peasy","theme":"blue-mountains","levels":[{"title":"Campaign Level 1","description":"Slip & Slide","links":["https://www.speedrun.com/boxel_3d?h=Level_1-Glitchless&x=l_5d7p1gvd-jdzlv7v2"]},{"title":"Campaign Level 2","description":"Olympic Ramp","links":["https://www.speedrun.com/boxel_3d?h=Level_2-Glitchless&x=l_kwj0g2zd-jdzlv7v2"]},{"title":"Campaign Level 3","description":"Easy Hop","links":["https://www.speedrun.com/boxel_3d?h=Level_3-Glitchless&x=l_owo8jryd-jdzlv7v2"]},{"title":"Campaign Level 4","description":"Spike Hurdles","links":["https://www.speedrun.com/boxel_3d?h=Level_4-Glitchless&x=l_xd1pmn6d-jdzlv7v2"]},{"title":"Campaign Level 5","description":"Air Jump","links":["https://www.speedrun.com/boxel_3d?h=Level_5-Glitchless&x=l_ewpn3lz9-jdzlv7v2"]}]},{"title":"Lemon Difficult","theme":"orange","levels":[{"title":"Campaign Level 6","description":"Secret Agent","links":["https://www.speedrun.com/boxel_3d?h=Level_6-Glitchless&x=l_y9m06n1w-jdzlv7v2"]},{"title":"Campaign Level 7","description":"Long Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_7-Glitchless&x=l_5wk0x3q9-jdzlv7v2"]},{"title":"Campaign Level 8","description":"Bigger Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_8-Glitchless&x=l_592mkyrw-jdzlv7v2"]},{"title":"Campaign Level 9","description":"Spider Box","links":["https://www.speedrun.com/boxel_3d?h=Level_9-Glitchless&x=l_29vg6qn9-jdzlv7v2"]},{"title":"Campaign Level 10","description":"Rock Climber","links":["https://www.speedrun.com/boxel_3d?h=Level_10-Glitchless&x=l_xd4p1lpd-jdzlv7v2"]}]},{"title":"Zack's Pack","theme":"green","levels":[{"title":"Campaign Level 11","description":"Tippy Tap","links":["https://www.speedrun.com/boxel_3d?h=Level_11-Glitchless&x=l_xd0p181w-jdzlv7v2"]},{"title":"Campaign Level 12","description":"Agility Jumps","links":["https://www.speedrun.com/boxel_3d?h=Level_12-Glitchless&x=l_rw621z7d-jdzlv7v2"]},{"title":"Campaign Level 13","description":"Zack's Coaster","links":["https://www.speedrun.com/boxel_3d?h=Level_13-Glitchless&x=l_n93k1rew-jdzlv7v2"]},{"title":"Campaign Level 14","description":"Simon Says","links":["https://www.speedrun.com/boxel_3d?h=Level_14-Glitchless&x=l_z98p3xlw-jdzlv7v2"]},{"title":"Campaign Level 15","description":"Wall of Finish","links":["https://www.speedrun.com/boxel_3d?h=Level_15-Glitchless&x=l_rdn37yvw-jdzlv7v2"]}]},{"title":"Kargoh's Pack","theme":"purple","levels":[{"title":"Campaign Level 16","description":"Kargoh's World","links":["https://www.speedrun.com/boxel_3d?h=Level_16-Glitchless&x=l_ldyqxozw-jdzlv7v2"]},{"title":"Campaign Level 17","description":"Kargoh's Bobsled","links":["https://www.speedrun.com/boxel_3d?h=Level_17-Glitchless&x=l_gdrrnzzd-jdzlv7v2"]},{"title":"Campaign Level 18","description":"Kargoh's Plinko","links":["https://www.speedrun.com/boxel_3d?h=Level_18-Glitchless&x=l_nwl058rw-jdzlv7v2"]},{"title":"Campaign Level 19","description":"Kargoh's Obstacles","links":["https://www.speedrun.com/boxel_3d?h=Level_19-Glitchless&x=l_ywe0yor9-jdzlv7v2"]},{"title":"Campaign Level 20","description":"Kargoh's Ramp","links":["https://www.speedrun.com/boxel_3d?h=Level_20-Glitchless&x=l_69z751ow-jdzlv7v2"]}]},{"title":"Gravity Hell","theme":"red","levels":[{"title":"Campaign Level 21","description":"Gravity Loop","links":["https://www.speedrun.com/boxel_3d?h=Level_21-Glitchless&x=l_r9g6lvkw-jdzlv7v2"]},{"title":"Campaign Level 22","description":"Gravity Sewer","links":["https://www.speedrun.com/boxel_3d?h=Level_22-Glitchless&x=l_o9x6gp19-jdzlv7v2"]},{"title":"Campaign Level 23","description":"Gravity Twist","links":["https://www.speedrun.com/boxel_3d?h=Level_23-Glitchless&x=l_495p27jw-jdzlv7v2"]},{"title":"Campaign Level 24","description":"Gravity Ramps","links":["https://www.speedrun.com/boxel_3d?h=Level_24-Glitchless&x=l_rdqy8x19-jdzlv7v2"]},{"title":"Campaign Level 25","description":"Gravity Spikes","links":["https://www.speedrun.com/boxel_3d?h=Level_25-Glitchless&x=l_5d7p1ovd-jdzlv7v2"]}]},{"title":"Boxel Classics","theme":"classic","levels":[{"title":"Campaign Level 26","description":"Stairway to Stairs","links":["https://www.speedrun.com/boxel_3d?h=Level_26-Glitchless&x=l_kwj0gnzd-jdzlv7v2"]},{"title":"Campaign Level 27","description":"Extra Hops","links":["https://www.speedrun.com/boxel_3d?h=Level_27-Glitchless&x=l_owo8jzyd-jdzlv7v2"]},{"title":"Campaign Level 28","description":"Butterfly Knot","links":["https://www.speedrun.com/boxel_3d?h=Level_28-Glitchless&x=l_xd1pmg6d-jdzlv7v2"]},{"title":"Campaign Level 29","description":"Jericho","links":["https://www.speedrun.com/boxel_3d?h=Level_29-Glitchless&x=l_ewpn3gz9-jdzlv7v2"]},{"title":"Campaign Level 30","description":"Rock Climber 2","links":["https://www.speedrun.com/boxel_3d?h=Level_30-Glitchless&x=l_y9m06l1w-jdzlv7v2"]}]},{"title":"Spider Cube","theme":"pink","levels":[{"title":"Campaign Level 31","description":"Escape Room","links":["https://www.speedrun.com/boxel_3d?h=Level_31-Glitchless&x=l_5wk0xyq9-jdzlv7v2"]},{"title":"Campaign Level 32","description":"Spider Room","links":["https://www.speedrun.com/boxel_3d?h=Level_32-Glitchless&x=l_592mkxrw-jdzlv7v2"]},{"title":"Campaign Level 33","description":"Kargoh's Spider","links":["https://www.speedrun.com/boxel_3d?h=Level_33-Glitchless&x=l_29vg6on9-jdzlv7v2"]},{"title":"Campaign Level 34","description":"Spider Tower","links":["https://www.speedrun.com/boxel_3d?h=Level_34-Glitchless&x=l_xd4p1qpd-jdzlv7v2"]},{"title":"Campaign Level 35","description":"Spider Cave","links":["https://www.speedrun.com/boxel_3d?h=Level_35-Glitchless&x=l_z983617d-jdzlv7v2"]}]},{"title":"Blue City","theme":"city","levels":[{"title":"Campaign Level 36","description":"Small Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_36-Glitchless&x=l_ldyrvkk9-jdzlv7v2"]},{"title":"Campaign Level 37","description":"Doppler's Plinko","links":["https://www.speedrun.com/boxel_3d?h=level-37-Glitchless&x=l_rdnj8qv9-jdzlv7v2"]},{"title":"Campaign Level 38","description":"Ping Pong","links":["https://www.speedrun.com/boxel_3d?h=level-38-ping-pong-Glitchless&x=l_dy14z5rd-jdzlv7v2"]},{"title":"Campaign Level 39","description":"Boxel Nomad","links":["https://www.speedrun.com/boxel_3d?h=boxel-nomad-level-39-Glitchless&x=l_dqzz66od-jdzlv7v2"]},{"title":"Campaign Level 40","description":"Homework","links":["https://www.speedrun.com/boxel_3d?h=level-40-homework-Glitchless&x=l_wkk27lxw-jdzlv7v2"]}]},{"title":"Community Pack","theme":"classic","description":"Levels are made by the Boxel Community and are picked by the developer.","levels":[{"title":"Junsie","description":"Junsie","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_37-Glitchless&x=l_xd0y241w-jdzlv7v2"]},{"title":"Junsie 2","description":"Junsie 2","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_38-Glitchless&x=l_rw6xlm7w-jdzlv7v2"]},{"title":"Metal Machine","description":"Metal Machine","author":"Metal Machine","links":["https://www.speedrun.com/boxel_3d?h=Level_39-Glitchless&x=l_n93enmew-jdzlv7v2"]},{"title":"0123xrulez","description":"0123xrulez","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_40-Glitchless&x=l_z98qzml9-jdzlv7v2"]},{"title":"Jack TVYT","description":"Jack TVYT","author":"Jack TVYT","links":["https://www.speedrun.com/boxel_3d?h=Level_41-Glitchless&x=l_rdn8lqvd-jdzlv7v2"]},{"title":"16BitPlayer","description":"16BitPlayer","author":"16BitPlayer","links":["https://www.speedrun.com/boxel_3d?h=Level_42-Glitchless&x=l_xd0y6g0w-jdzlv7v2"]},{"title":"uncoho3","description":"uncoho3","author":"uncoho3","links":["https://www.speedrun.com/boxel_3d?h=Level_43-Glitchless&x=l_rw6x54nw-jdzlv7v2"]},{"title":"Metal Machine 2","description":"Metal Machine 2","author":"Metal Machine","links":["https://www.speedrun.com/boxel_3d?h=Level_44-Glitchless&x=l_n93ez77w-jdzlv7v2"]},{"title":"Vyom","description":"Vyom","author":"Vyom","links":["https://www.speedrun.com/boxel_3d?h=Level_45-Glitchless&x=l_rw6x12gw-jdzlv7v2"]},{"title":"0123xrulez 2","description":"0123xrulez 2","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_46-Glitchless&x=l_n93e1kzw-jdzlv7v2"]},{"title":"16BitPlayer 2","description":"16BitPlayer 2","author":"16BitPlayer","links":["https://www.speedrun.com/boxel_3d?h=Level_47-Glitchless&x=l_z98qvo79-jdzlv7v2"]},{"title":"0123xrulez 3","description":"0123xrulez 3","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_48-Glitchless&x=l_rdn8jmnd-jdzlv7v2"]},{"title":"Zozo","description":"Zozo","author":"Zozo","links":["https://www.speedrun.com/boxel_3d?h=Level_49-Glitchless&x=l_ldy67rj9-jdzlv7v2"]},{"title":"Junsie 3","description":"Junsie 3","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_50-Glitchless&x=l_n93e5xnw-jdzlv7v2"]},{"title":"! __kf","description":"! __kf","author":"! __kf","links":["https://www.speedrun.com/boxel_3d?h=Level_51-Glitchless&x=l_rdqkl8od-jdzlv7v2"]},{"title":"Ice Dodo","description":"Ice Dodo","author":"Winderthedrone","links":["https://www.speedrun.com/boxel_3d?h=level-53-ice-dodo-Glitchless&x=l_9zpm2ggw-jdzlv7v2"]},{"title":"Kllixto","description":"Kllixto","author":"Kllixto","links":["https://www.speedrun.com/boxel_3d?h=kllixto-Glitchless&x=l_dqz6kqgd-jdzlv7v2"]},{"title":"Mountain Climb","description":"Mountain Climb","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=mountain-climb-Glitchless&x=l_92003z6d-jdzlv7v2"]},{"title":"The Arcadium","description":"The Arcadium","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=the-arcadium-Glitchless&x=l_9vmmj3x9-jdzlv7v2"]},{"title":"The Box Escape","description":"The Box Escape","author":"DonW15","links":["https://www.speedrun.com/boxel_3d?h=the-box-escape-Glitchless&x=l_d400nj89-jdzlv7v2"]},{"title":"Average level attempt","description":"Average level attempt","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-average-level-attempt-Glitchless&x=l_dno5m85w-jdzlv7v2"]},{"title":"Speed Spider","description":"Speed Spider","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-speed-spider-Glitchless&x=l_dy1er6pd-jdzlv7v2"]},{"title":"Dancing on nothing","description":"Dancing on nothing","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-dancing-on-nothing-Glitchless&x=l_drpj0lew-jdzlv7v2"]},{"title":"Strawberry Jam","description":"Strawberry Jam","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-strawberry-jam-Glitchless&x=l_wlg6m1o9-jdzlv7v2"]},{"title":"Up, Down, and Through","description":"Up, Down, and Through","author":"Ember","links":["https://www.speedrun.com/boxel_3d?h=community-level-up-down-and-through-Glitchless&x=l_we24vglw-jdzlv7v2"]},{"title":"The Bonce House","description":"The Bonce House","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=community-level-the-bonce-house-Glitchless&x=l_dy1p36kd-jdzlv7v2"]},{"title":"Wallclimb Ascension","description":"Wallclimb Ascension","author":"noobus","links":["https://www.speedrun.com/boxel_3d?h=community-level-wallclimb-ascension-Glitchless&x=l_drpqyl6w-jdzlv7v2"]},{"title":"Spider Number 1","description":"Spider Number 1","author":"Potato Man","links":["https://www.speedrun.com/boxel_3d?h=community-level-spider-number-1-Glitchless&x=l_wlg72109-jdzlv7v2"]},{"title":"Roller Coaster","description":"Roller Coaster","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=community-level-roller-coaster-Glitchless&x=l_we28qgyw-jdzlv7v2"]},{"title":"Creation Roulette","description":"Creation Roulette","author":"Fisher, Ember, & Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-creation-roulette-Glitchless&x=l_9zp48jlw-jdzlv7v2"]},{"title":"The Escape","description":"The Escape","author":"AMiner","links":[]},{"title":"Boxelling Over It","description":"Boxelling Over It","author":"Charlieee1","links":[]},{"title":"Dungeon Escape","description":"Dungeon Escape","author":"BoxelBug","links":[]},{"title":"Pizza Time!","description":"Pizza Time!","author":"Poktoshi","links":[]},{"title":"Boxel Summit","description":"Boxel Summit","author":"Green","links":[]}]}]`), Ne = { packs: Au }, Ru = { background_color: "#4c7dff", color: "#ffffff", model: "background-blue", thumbnail: "../svg/button-level-editor.svg" }, Du = { background_color: "#4c7dff", color: "#ffffff", model: "background-city", thumbnail: "../svg/button-pack-city.svg" }, Iu = { background_color: "#5503A8", color: "#ffffff", model: "background-kargoh", thumbnail: "../svg/button-pack-kargohs-levels.svg" }, Bu = { background_color: "#990799", color: "#620460", model: "background-classic", thumbnail: "../svg/button-pack-boxel-classics.svg" }, zu = { background_color: "#de004a", color: "#620460", model: "background-hell", thumbnail: "../svg/button-pack-gravity-hell.svg" }, $u = { background_color: "#c40c4b", color: "#c40c4b", model: "background-desert", thumbnail: "../svg/button-pack-lemon-difficult.svg" }, Nu = { background_color: "#EB2B6D", color: "#C40C4B", model: "background-tokyo", thumbnail: "../svg/button-pack-spider-cube.svg" }, ju = { background_color: "#9F00FF", color: "#5503A8", model: "background-forest", thumbnail: "../svg/button-pack-zacks-levels.svg" }, ct = { "blue-mountains": { background_color: "#4c7dff", color: "#ffffff", model: "background-blue", thumbnail: "../svg/button-pack-easy-peasy.svg" }, workshop: Ru, city: Du, "purple-mountains": { background_color: "#5503A8", color: "#5503A8", model: "background-purple", thumbnail: "../svg/button-pack-community.svg" }, purple: Iu, classic: Bu, red: zu, orange: $u, pink: Nu, "pink-mountains": { background_color: "#9F00FF", color: "#5503A8", model: "background-pink", thumbnail: "../svg/button-pack-pink.svg" }, green: ju }, Rt = [{ id: 1, title: "Pink", url: "../png/pink.png" }, { id: 2, title: "Blue", url: "../png/blue.png" }, { id: 377, title: "Kargoh Krate", url: "../png/krate.png" }, { id: 680, title: "Custom Skin", url: "../png/custom.png" }, { id: 563, title: "Monkey", url: "../png/monkey.png" }, { id: 668, title: "Puppy", url: "../png/puppy.png" }, { id: 565, title: "Kitty", url: "../png/kitty.png" }, { id: 466, title: "Smile", url: "../png/smile.png" }, { id: 476, title: "Love", url: "../png/love.png" }, { id: 486, title: "Grin", url: "../png/grin.png" }, { id: 488, title: "Sad Boi", url: "../png/sad.png" }, { id: 666, title: "Sick", url: "../png/sick.png" }, { id: 681, title: "Boxel", url: "../png/boxel.png" }, { id: 667, title: "Angry", url: "../png/mad.png" }, { id: 661, title: "Skull", url: "../png/skull.png" }, { id: 562, title: "Doppler", url: "../png/doppler.png" }, { id: 557, title: "Kargoh", url: "../png/kargoh.png" }, { id: 458, title: "USA", url: "../png/usa.png" }, { id: 462, title: "Australia", url: "../png/au.png" }, { id: 460, title: "UK", url: "../png/uk.png" }, { id: 490, title: "Canada", url: "../png/canada.png" }, { id: 465, title: "Japan", url: "../png/jp.png" }, { id: 152, title: "Golden Skin", url: "../png/gold.png" }, { id: 407, title: "Lucky Die", url: "../png/lucky.png" }, { id: 484, title: "Prism", url: "../png/prism.png" }, { id: 500, title: "Boxel Golf", url: "../png/boxel-golf.png" }], dn = [], Fu = window.electron?.client != null;
Ne.packs.forEach(function(f, e) {
  f.levels.forEach(function(t, n) {
    t.label = t.label || `${e + 1}-${n + 1}`, t.overlay = true;
  });
});
Rt.forEach((f) => {
  f.overlay = true, f.tag = f.title;
});
function Uu(f, e) {
  return localStorage.getItem(`item_${f.publishedFileId}_${e}`);
}
if (Fu) {
  const f = { title: "Workshop", theme: "workshop", description: "Your Steam Workshop subscriptions.", levels: [] };
  Ne.packs.push(f);
  try {
    const e = window.electron.client.workshop.getSubscribedItems();
    if (e.length > 0) try {
      window.electron.client.workshop.getItems(e).then((t) => {
        const n = t.items.filter((r) => r !== null);
        n.sort((r, i) => i.timeUpdated - r.timeUpdated), n.forEach((r) => {
          let i = Uu(r, "enabled");
          i === null ? i = true : i = i === "true";
          const o = window.electron.client.workshop.installInfo(r.publishedFileId);
          o && i === true && window.electron.getFileNames(o.folder).then((l) => {
            l.forEach((d) => {
              Object.assign(r, { title: r.title, description: r.description, thumbnail: r.previewUrl, path: `${o.folder}\\${d}`, overlay: true, links: [`https://steamcommunity.com/sharedfiles/filedetails/?id=${r.publishedFileId.toString()}`] }), [".json"].some((c) => d.includes(c)) ? (Object.assign(r, { description: r.title }), f.levels.push(r)) : [".js"].some((c) => d.includes(c)) ? dn.push(r) : [".png", ".jpg"].some((c) => d.includes(c)) && (Object.assign(r, { id: r.publishedFileId.toString(), url: r.path, title: r.title, tag: r.title }), Rt.push(r));
            });
          });
        });
      });
    } catch (t) {
      console.error(t);
    }
  } catch (e) {
    console.error(e);
  }
}
class qu extends dt {
  constructor() {
    super(), this.name = this.defaultName = "My Level", this.theme = this.defaultTheme = "classic", this.entityFactory = new Ou(), this.publishedFileId = null;
  }
  addObject(e, t) {
    e.position.z == 0 && (K.World.add(t.engine.world, e.body), this.parent.add(e.helper)), this.add(e);
  }
  removeObject(e, t, n = false) {
    (t.selectedObject != null && t.selectedObject.getClass() != "player" || n == true) && e != null && (K.World.remove(t.engine.world, e.body), this.parent.remove(e.helper), this.remove(e), t.level.deselectLevel(t));
  }
  clearLevel(e) {
    var t = e.level.children.length;
    this.name = this.defaultName, this.theme = this.defaultTheme, e.player.removeRope();
    for (var n = 0; n < t; n++) {
      var r = e.level.children[0];
      this.removeObject(r, e, true);
    }
  }
  removeParticles(e) {
    for (var t = e.level.children.length, n = t - 1; n >= 0; ) {
      var r = e.level.children[n];
      r.isParticle != null && this.removeObject(r, e, true), n--;
    }
  }
  refreshLevel(e) {
    var t = this.exportToJSON(e);
    this.clearLevel(e), this.importFromJSON(t, e);
  }
  refreshObject(e, t) {
    this.removeObject(e, t);
    var n = this.duplicateObject(e, t);
    return n;
  }
  changeObjectType(e, t, n) {
    var r = e;
    return e.getClass() != "player" && (e.body.class = t, r = this.refreshObject(e, n)), r;
  }
  duplicateObject(e, t) {
    var n = e.toJSON(), r = this.entityFactory.createObject(n.class);
    return this.setObjectProperties(r, n), this.addObject(r, t), r;
  }
  createNewLevel(e) {
    e.player.setPosition({ x: 0, y: 0, z: 0 }), e.player.setScale({ x: 16, y: 16, z: 16 }), e.player.setRotation(0), e.player.setFriction(0), this.clearLevel(e), this.add(e.player);
    var t = this.entityFactory.createObject("cube", { x: 0, y: -64, z: 0 });
    t.setScale({ x: 64, y: 16, z: 16 }), t.setStatic(true), this.add(t);
  }
  deselectLevel(e) {
    e.selectedObject = null;
    for (var t = 0; t < e.level.children.length; t++) {
      var n = e.level.children[t];
      n.body != null && n.select(false);
    }
  }
  exportToJSON(e) {
    var t = {};
    t.name = this.name, t.theme = this.theme, t.description = this.description, t.children = [];
    for (var n = 0; n < e.level.children.length; n++) {
      var r = e.level.children[n];
      if (r.type == "Mesh") {
        var i = r.toJSON();
        t.children.push(i);
      }
    }
    return t;
  }
  saveLevelData(e) {
    e.storage.setLevelData(this.key, this.exportToJSON(e));
  }
  importFromJSON(e, t) {
    this.name = e.name, this.theme = e.theme, this.description = e.description;
    for (var n = 0; n < e.children.length; n++) {
      var r = t.storage.getSettings(t), i = e.children[n], o = this.entityFactory.createObject(i.class);
      i.class == "player" && (o = t.player), o.helper.visible = r.debug, this.setObjectProperties(o, i), this.addObject(o, t);
    }
  }
  resetLevel() {
    for (var e = 0; e < this.children.length; e++) {
      var t = this.children[e];
      t.resetToOrigin();
    }
  }
  retryLevel(e = app, t = false) {
    e.updateGravity(), e.play = true, e.level.removeParticles(e), e.player.cancelRestart(), e.resetScene(e), window.dispatchEvent(new CustomEvent("closePopup")), t == false || e.player.checkpoint == null ? (e.timer.reset(), e.player.removeCheckpoint()) : e.player.respawn(true);
  }
  exitLevel(e) {
    if (e.timer.reset(), e.player.removeCheckpoint(), e.state == "campaign") {
      var t = e.storage.getSettings(e), n = parseInt(t.progress);
      n++, t.progress = n, e.updateSettings(t, e), window.dispatchEvent(new CustomEvent("setPage", { detail: "level-picker" }));
    } else e.state == "level-editor" && (e.updateGravity(), e.resetScene(e), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.background.visible = false);
    window.dispatchEvent(new CustomEvent("exitLevel", { detail: e.state }));
  }
  setObjectProperties(e, t) {
    e.setPosition({ x: t.position.x, y: t.position.y, z: t.position.z }), e.setScale({ x: t.scale.x, y: t.scale.y, z: t.scale.z }), e.setRotation({ x: t.rotation.x, y: t.rotation.y, z: t.rotation.z }), e.setStatic(t.isStatic), e.setText(t.text), e.setFriction(t.friction);
  }
  showTip(e) {
    app.play = false, app.timer.pause(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: e, inputs: [{ type: "button", value: "popup.button.continue", callback: function() {
      app.startLevel(), window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } })), app.assets.audio.play("tip");
  }
  showHelpers(e = true) {
    this.traverse(function(t) {
      t.helper && (t.helper.visible = e);
    });
  }
  updateHelpers() {
    this.children.forEach(function(e) {
      e.helper && e.updateHelper();
    });
  }
  getTheme(e) {
    return ct[e];
  }
  getPackTheme(e) {
    var t;
    return Ne.packs.forEach(function(n) {
      n.levels.forEach(function(r) {
        e == r.title && (t = ct[n.theme]);
      });
    }), t;
  }
  getDescriptionByTitle(e) {
    var t;
    return Ne.packs.forEach(function(n) {
      n.levels.forEach(function(r) {
        e == r.title && (t = r.description);
      });
    }), t;
  }
  getAuthorByTitle(e) {
    var t;
    return Ne.packs.forEach(function(n) {
      n.levels.forEach(function(r) {
        e == r.title && (t = r.author);
      });
    }), t;
  }
  getLevelIndex(e) {
    var t = 0, n = -1;
    return Ne.packs.forEach(function(r) {
      r.levels.forEach(function(i) {
        e == i.title && (n = t), t++;
      });
    }), n;
  }
}
class Hu {
  constructor() {
    this.clear();
  }
  save(e = "Edited level", t) {
    this.history.length = this.historyIndex + 1, this.history.push({ data: t.level.exportToJSON(t), description: e }), this.historyIndex++;
  }
  clear() {
    this.history = [], this.historyIndex = 0;
  }
  undo(e) {
    this.historyIndex > 1 && (this.historyIndex--, e.level.clearLevel(e), e.level.importFromJSON(this.history[this.historyIndex].data, e));
  }
  redo(e) {
    this.historyIndex < this.history.length - 1 && (this.historyIndex++, e.level.clearLevel(e), e.level.importFromJSON(this.history[this.historyIndex].data, e));
  }
}
class Vu {
  constructor() {
    this.down = new ue(), this.move = new ue(), this.offset = new ue(), this.up = new ue(), this.drag = false, this.mode = "draw", this.snap = 1, this.prevMode = this.mode;
  }
  mouseDown(e, t) {
    if (this.setTolerance(), t.play == false) t.levelEditor.mouseDown(e, t);
    else {
      var n = t.mouse.getPosition(e, t);
      t.player.jump(n), t.player.addRope(n);
    }
  }
  mouseMove(e, t) {
    t.play == false && t.levelEditor.mouseMove(e, t);
  }
  mouseUp(e, t) {
    t.play == false && app.state == "level-editor" && t.levelEditor.mouseUp(e, t), t.player.removeRope();
  }
  getPosition(e, t) {
    var n = new Wi(), r = new ue(), i = [];
    return n.setFromCamera(t.mouse.getMouse(e, t), t.camera), i = n.intersectObject(t.player, true), i.length > 0 && r.copy(i[0].point), r;
  }
  clickObject(e, t) {
    var n = new Wi(), r = new ue(), i, o = e.clientX / t.window.innerWidth * 2 - 1, l = -(e.clientY / t.window.innerHeight) * 2 + 1;
    r.set(o, l, 0), n.setFromCamera(r, t.camera);
    for (var d = n.intersectObjects(t.scene.children, true), c = 0; c < d.length; c++) {
      var u = d[c].object;
      if (u.isMesh && u.material.visible && u.traverseAncestors(function(p) {
        i == null && p.isCube && (i = p);
      }), i) break;
    }
    return i;
  }
  wheel(e, t) {
    e.preventDefault();
  }
  setTolerance(e = 0.05) {
    this.tolerance = app.camera.position.z * e;
  }
  setPosition(e, t) {
    e == "down" ? (this.down = t, this.move = t, this.drag = true) : e == "move" ? this.drag == true && (this.move = t) : e == "up" && (this.up = t, this.drag = false);
  }
  setOffset(e) {
    this.offset.x = e.x - this.down.x, this.offset.y = e.y - this.down.y, this.offset.z = e.z - this.down.z;
  }
  getDragDifference() {
    return { x: Math.round(this.down.x - this.move.x - this.offset.x), y: Math.round(this.down.y - this.move.y - this.offset.y), z: Math.round(this.down.z - this.move.z - this.offset.z) };
  }
  getTolerance() {
    var e = this.getDragDifference();
    return Math.abs(e.x + this.offset.x) + Math.abs(e.y + this.offset.y) > this.tolerance;
  }
  snapToValue(e, t) {
    return Math.round(e / t) * t;
  }
  setSnap(e) {
    this.snap = e;
  }
  setMode(e) {
    this.mode = this.prevMode = e;
  }
  getMode() {
    return this.mode;
  }
  getMouse(e, t) {
    return { x: e.clientX / t.window.innerWidth * 2 - 1, y: -(e.clientY / t.window.innerHeight) * 2 + 1, z: 0.5 };
  }
}
class Gu {
  constructor(e, t) {
    this.selectedObjectType = "cube", this.controlsTransform = new Eo(e, t), this.controlsTransform.showZ = true, this.controlsTransform.space = "world", this.controlsTransform.showAll = false, this.controlsOrbit = new To(e, t), this.controlsOrbit.enabled = false, this.controlsOrbit.mouseButtons = { LEFT: 2, MIDDLE: 2, RIGHT: 0 }, this.controlsOrbit.zoomSpeed = 3, this.controlsOrbit.minDistance = 10, this.controlsOrbit.maxDistance = 1e3;
    var n = this;
    this.controlsTransform.addEventListener("mouseDown", function() {
      n.controlsOrbit.enabled = false, n.saveSelectedObject();
    }), this.controlsTransform.addEventListener("mouseUp", function() {
      n.controlsOrbit.enabled = true, n.updateSelectedObject();
    }), this.controlsTransform.addEventListener("objectChange", function() {
      n.controlsTransform.moved = true;
    }), this.controlsOrbit.addEventListener("start", function() {
      n.controlsOrbit.moved = false;
    }), this.controlsOrbit.addEventListener("change", function() {
      n.controlsOrbit.moved = true;
    }), t.addEventListener("pointerdown", this.updateRender), t.addEventListener("pointermove", this.updateRender), t.addEventListener("pointerup", this.updateRender), t.addEventListener("wheel", this.updateRender), window.addEventListener("resize", this.updateRender), window.addEventListener("setSelectedObject", this.updateRender), window.addEventListener("setSelectedMode", this.updateRender), window.addEventListener("themeSelected", this.updateRender), window.addEventListener("keyup", this.updateRender);
  }
  updateRender() {
    app.state == "level-editor" && app.play == false && app.graphics.render();
  }
  mouseDown(e, t) {
    t.mouse.setPosition("down", t.mouse.getPosition(e, t)), this.controlsTransform.moved = false, this.controlsTransform.setTranslationSnap(t.mouse.snap), this.controlsTransform.setScaleSnap(t.mouse.snap), this.controlsTransform.setRotationSnap(t.mouse.snap > 1 ? Math.PI / 12 : null);
  }
  mouseMove(e, t) {
    t.mouse.setPosition("move", t.mouse.getPosition(e, t));
  }
  mouseUp(e, t) {
    var n = t.mouse.clickObject(e, t);
    if (t.mouse.setPosition("up", t.mouse.getPosition(e, t)), e.button == 2 && (t.mouse.mode = "erase"), t.mouse.mode == "draw") if (t.selectedObject == null || n) {
      if (n) this.controlsTransform.moved == false && this.controlsOrbit.moved == false && (t.level.deselectLevel(t), t.selectedObject = n, t.selectedObject.select(true), this.controlsTransform.attach(n), t.selectedObject.getClass() != "player" && window.dispatchEvent(new CustomEvent("selectObjectType", { detail: { type: t.selectedObject.getClass(), checkNull: false } })), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: t.selectedObject })));
      else if (this.controlsOrbit.moved == false) {
        var r = app.levelEditor.selectedObjectType, i = { class: r, isStatic: true, position: { x: t.mouse.snapToValue(t.mouse.down.x, t.mouse.snap), y: t.mouse.snapToValue(t.mouse.down.y, t.mouse.snap), z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: t.BOX_SIZE, y: t.BOX_SIZE, z: t.BOX_SIZE } };
        t.level.deselectLevel(t), t.selectedObject = t.level.entityFactory.createObject(r), t.level.setObjectProperties(t.selectedObject, i), t.level.addObject(t.selectedObject, t), t.levelHistory.save("Added " + r, t), t.selectedObject.select(true), this.controlsTransform.attach(t.selectedObject), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: t.selectedObject }));
      }
    } else this.controlsTransform.moved == false && this.controlsOrbit.moved == false && (t.level.deselectLevel(app), this.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject")));
    else t.mouse.mode == "erase" && (this.controlsOrbit.moved == false && (t.levelEditor.eraseTarget(e, t), t.level.deselectLevel(t), t.levelHistory.save("Erased object", t), this.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject"))), t.mouse.mode = t.mouse.prevMode);
  }
  eraseTarget(e, t) {
    var n = t.mouse.clickObject(e, t);
    n != null && n.getClass() != "player" && (n.select(true), t.level.removeObject(n, t, true));
  }
  duplicateSelectedObject() {
    app.selectedObject && (app.selectedObject.select(false), app.selectedObject = app.level.duplicateObject(app.selectedObject, app), app.selectedObject.position.y += 16, app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelEditor.setMode("translate"), app.levelHistory.save("Duplicated object", app));
  }
  deleteSelectedObject() {
    app.selectedObject && (app.level.removeObject(app.selectedObject, app), app.levelEditor.controlsTransform.detach(), app.levelHistory.save("Deleted object", app), window.dispatchEvent(new CustomEvent("setSelectedObject")));
  }
  saveLevel() {
    app.levelEditor.controlsTransform.detach(), app.resetScene(app), app.level.deselectLevel(app), app.level.saveLevelData(app);
  }
  exitLevel() {
    app.levelHistory.history.length > 2 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.save_level", inputs: [{ value: "popup.button.no", type: "button", callback: function() {
      app.levelEditor.saveAndExitLevelEditor(false), window.dispatchEvent(new CustomEvent("closePopup"));
    } }, { value: "popup.button.yes", type: "button", callback: function() {
      app.levelEditor.saveAndExitLevelEditor(true), window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } })) : app.levelEditor.saveAndExitLevelEditor(false);
  }
  saveAndExitLevelEditor(e) {
    app.levelEditor.controlsOrbit.enabled = false, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsTransform.detach(), app.play = false, e == true && app.levelEditor.saveLevel(), app.level.clearLevel(app), app.levelHistory.clear(), app.player.removeCheckpoint(), app.player.setPosition({ x: 0, y: 0, z: 0 }), app.levelEditor.controlsOrbit.enabled = false, window.dispatchEvent(new CustomEvent("setPage", { detail: "level-manager" }));
  }
  undo() {
    app.levelEditor.controlsTransform.detach(), app.levelHistory.undo(app), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  redo() {
    app.levelHistory.redo(app), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  rewind() {
    app.level.retryLevel(app), app.level.deselectLevel(app), app.pauseLevel(), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  saveSelectedObject() {
    var e = app.selectedObject;
    e && (e.position0 = e.position.clone(), e.scale0 = e.scale.clone(), e.rotation0 = e.rotation.clone());
  }
  resetZAxis() {
    app.selectedObject && (app.selectedObject.position.z = 0, this.updateSelectedObject());
  }
  updateSelectedObject() {
    var e = app.selectedObject;
    e.position.z == 0 ? e.body.collisionFilter.mask = -1 : e.body.collisionFilter.mask = 0, e.setPosition(e.getPosition());
    var t = e.rotation.z;
    e.setRotation(0, false), e.setBodyScale(e.scale.x / e.scale0.x, e.scale.y / e.scale0.y), e.setRotation(t, false), e.setScale(e.getScale()), e.setRotation(e.getRotation()), app.levelHistory.save("Object updated", app);
  }
  setMode(e) {
    this.controlsTransform.setMode(e), e == "translate" ? (this.controlsTransform.showX = true, this.controlsTransform.showY = true, this.controlsTransform.showZ = true) : e == "scale" ? (this.controlsTransform.showX = true, this.controlsTransform.showY = true, this.controlsTransform.showZ = true) : e == "rotate" && (this.controlsTransform.showX = this.controlsTransform.showAll, this.controlsTransform.showY = this.controlsTransform.showAll, this.controlsTransform.showZ = true), window.dispatchEvent(new CustomEvent("setSelectedMode", { detail: e }));
  }
  selectObjectType(e, t = true) {
    app.selectedObject != null && t == true && (app.selectedObject = app.level.changeObjectType(app.selectedObject, e, app), app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelHistory.save("Changed object to " + e, app), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }))), app.levelEditor.selectedObjectType = e;
  }
  toggleSelectedObjectStaticState() {
    app.selectedObject.toggleStatic(), app.selectedObject = app.level.refreshObject(app.selectedObject, app), app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelHistory.save("Updated object state", app), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }));
  }
}
class Wu extends iu {
  constructor(e) {
    super(), e = Object.assign({ type: "div", class: "CSS2DObject", text: "Hello, World!" }, e), this.element = document.createElement(e.type), this.element.className = e.class, this.setText(e.text), this.addEventListener("added", function(t) {
      t.target.parent.addEventListener("removed", this.removeFromParent.bind(this));
    }.bind(this));
  }
  setText(e) {
    this.element.innerHTML = e;
  }
  hideText() {
    this.visible = false;
  }
  showText() {
    this.visible = true;
  }
}
class Ju {
  constructor(e) {
    this.network = e, this.players = new dt(), this.tweens = new Ms(), this.smooth = true, this.tick = 10, this.network.on("peer_open", this.onPeerOpen.bind(this)), this.network.on("peer_close", this.onPeerClose.bind(this)), this.network.on("peer_disconnected", this.onPeerDisconnected.bind(this)), this.network.on("connection_open", this.onConnectionOpen.bind(this)), this.network.on("connection_close", this.onConnectionClose.bind(this)), this.network.on("connection_data", this.onConnectionData.bind(this));
  }
  update(e, t) {
    this.isHost() && this.sendHostDataToGuests(), this.checkHeartbeat();
  }
  render(e, t) {
    this.tweens.update();
  }
  onPeerOpen(e) {
    if (this.isHost()) {
      var t = app.storage.getSettings();
      app.player.setText(t.name);
    }
  }
  onPeerClose(e) {
    this.players.clear();
  }
  onPeerDisconnected(e) {
  }
  onConnectionOpen(e) {
    this.isHost() && this.addPlayerFromConnection(e.connection);
  }
  onConnectionClose(e) {
    this.isHost() ? this.removePlayerFromConnection(e.connection) : this.players.clear();
  }
  onConnectionData(e) {
    e.connection.metadata.time = e.data.time, e.data.type == "players" && (this.isHost() ? this.updatePlayerFromGuest(e.data) : this.updatePlayersFromHost(e.data));
  }
  checkHeartbeat() {
    this.network.connections.forEach(function(e) {
      var t = this.getTime() - e.metadata.time;
      t > 5e3 && e.close();
    }.bind(this));
  }
  updatePlayerFromGuest(e) {
    var t = this.getPlayer(e.players[0]);
    this.updatePlayer(t, e.players[0]);
  }
  updatePlayersFromHost(e) {
    if (e.players.length - 1 != this.players.children.length) {
      var t = this.players.children.filter(function(i) {
        return !e.players.some(function(o) {
          return i.uuid === o.uuid;
        });
      });
      t.forEach(function(i) {
        i.removeFromParent();
      });
    }
    for (var n = e.players.length - 1; n >= 0; n--) if (e.players[n].uuid != app.player.uuid) {
      var r = this.getPlayer(e.players[n]);
      r == null && (r = this.addPlayer(e.players[n])), this.updatePlayer(r, e.players[n]), this.sendGuestDataToHost();
    }
  }
  setHost(e) {
    this.host = e;
  }
  isHost() {
    return this.host != null;
  }
  sendHostDataToGuests() {
    this.updateLocalPlayer();
    for (var e = { type: "players", players: [this.playerToJSON(app.player)], time: this.getTime() }, t = this.players.children.length - 1; t >= 0; t--) {
      var n = this.players.children[t];
      e.players.push(this.playerToJSON(n));
    }
    this.network.connections.forEach(function(r) {
      r.send(e);
    });
  }
  sendGuestDataToHost() {
    this.updateLocalPlayer();
    var e = { type: "players", players: [this.playerToJSON(app.player)], time: this.getTime() };
    this.network.connections.forEach(function(t) {
      t.send(e);
    });
  }
  addPlayerFromConnection(e) {
    return this.addPlayer(e.metadata);
  }
  removePlayerFromConnection(e) {
    return this.removePlayer(e.metadata.uuid);
  }
  getPlayer(e) {
    var t = this.players.getObjectByProperty("uuid", e.uuid);
    return t;
  }
  addPlayer(e) {
    var t = this.getPlayer(e);
    return t == null && (t = new Li(), t.visible = false, t.setText(e.name), t.add(new Wu({ text: t.text })), t.positionPrev = t.position.clone(), t.positionNext = t.position.clone(), t.rotationPrev = t.rotation.clone(), t.rotationNext = t.rotation.clone(), t.uuid = e.uuid, t.light.removeFromParent(), this.players.add(t)), t;
  }
  updatePlayer(e, t) {
    e && (e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.rotationPrev.z = e.rotation.z, e.positionNext.x = t.position.x, e.positionNext.y = t.position.y, e.rotationNext.z = t.rotation.z, e.scale.x = t.scale.x, e.scale.y = t.scale.y, e.scale.z = t.scale.z, e.level = t.level, e.skin.url != t.skin && e.addTexture({ url: t.skin }), e.visible = app.level.name == e.level, this.tween({ object: { alpha: 0 }, to: { alpha: 1 }, duration: 1e3 / this.tick, onUpdate: function(n) {
      e.position.x = e.positionPrev.x + (e.positionNext.x - e.positionPrev.x) * (this.smooth == true ? n.alpha : 1), e.position.y = e.positionPrev.y + (e.positionNext.y - e.positionPrev.y) * (this.smooth == true ? n.alpha : 1), e.rotation.z = e.rotationPrev.z + (e.rotationNext.z - e.rotationPrev.z) * (this.smooth == true ? n.alpha : 1);
    }.bind(this) }).start());
  }
  tween(e) {
    var t = new Os(e.object, this.tweens).to(e.to, e.duration).dynamic(e.dynamic).easing(e.easing).interpolation(e.interpolation).onStart(e.onStart).onUpdate(e.onUpdate).onComplete(e.onComplete);
    return t;
  }
  updateLocalPlayer() {
    app.player.level = app.level.name, app.player.skin.url.startsWith("data:") && (app.player.skin.url = "png/custom.png");
  }
  removePlayer(e) {
    var t = this.players.getObjectByProperty("uuid", e);
    return t && t.removeFromParent(), t;
  }
  setTick(e) {
    this.tick = e;
  }
  playerToJSON(e) {
    return { uuid: e.uuid, position: { x: e.position.x, y: e.position.y, z: 0 }, rotation: { x: 0, y: 0, z: e.rotation.z }, scale: { x: e.scale.x, y: e.scale.y, z: e.scale.z }, name: e.text, skin: e.skin.url, level: e.level };
  }
  getConnectionByUUID(e) {
    var t;
    return app.network.connections.forEach(function(n) {
      e == n.metadata.uuid && (t = n);
    }), t;
  }
  closeConnectionByUUID(e) {
    if (this.isHost()) {
      var t = this.getConnectionByUUID(e);
      t.close();
    }
  }
  getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}
class Xu {
  constructor() {
    this.encoder = new TextEncoder(), this._pieces = [], this._parts = [];
  }
  append_buffer(e) {
    this.flush(), this._parts.push(e);
  }
  append(e) {
    this._pieces.push(e);
  }
  flush() {
    if (this._pieces.length > 0) {
      const e = new Uint8Array(this._pieces);
      this._parts.push(e), this._pieces = [];
    }
  }
  toArrayBuffer() {
    const e = [];
    for (const t of this._parts) e.push(t);
    return Zu(e).buffer;
  }
}
function Zu(f) {
  let e = 0;
  for (const r of f) e += r.byteLength;
  const t = new Uint8Array(e);
  let n = 0;
  for (const r of f) {
    const i = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    t.set(i, n), n += r.byteLength;
  }
  return t;
}
function zs(f) {
  return new Ku(f).unpack();
}
function $s(f) {
  const e = new Yu(), t = e.pack(f);
  return t instanceof Promise ? t.then(() => e.getBuffer()) : e.getBuffer();
}
class Ku {
  constructor(e) {
    this.index = 0, this.dataBuffer = e, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
  }
  unpack() {
    const e = this.unpack_uint8();
    if (e < 128) return e;
    if ((e ^ 224) < 32) return (e ^ 224) - 32;
    let t;
    if ((t = e ^ 160) <= 15) return this.unpack_raw(t);
    if ((t = e ^ 176) <= 15) return this.unpack_string(t);
    if ((t = e ^ 144) <= 15) return this.unpack_array(t);
    if ((t = e ^ 128) <= 15) return this.unpack_map(t);
    switch (e) {
      case 192:
        return null;
      case 193:
        return;
      case 194:
        return false;
      case 195:
        return true;
      case 202:
        return this.unpack_float();
      case 203:
        return this.unpack_double();
      case 204:
        return this.unpack_uint8();
      case 205:
        return this.unpack_uint16();
      case 206:
        return this.unpack_uint32();
      case 207:
        return this.unpack_uint64();
      case 208:
        return this.unpack_int8();
      case 209:
        return this.unpack_int16();
      case 210:
        return this.unpack_int32();
      case 211:
        return this.unpack_int64();
      case 212:
        return;
      case 213:
        return;
      case 214:
        return;
      case 215:
        return;
      case 216:
        return t = this.unpack_uint16(), this.unpack_string(t);
      case 217:
        return t = this.unpack_uint32(), this.unpack_string(t);
      case 218:
        return t = this.unpack_uint16(), this.unpack_raw(t);
      case 219:
        return t = this.unpack_uint32(), this.unpack_raw(t);
      case 220:
        return t = this.unpack_uint16(), this.unpack_array(t);
      case 221:
        return t = this.unpack_uint32(), this.unpack_array(t);
      case 222:
        return t = this.unpack_uint16(), this.unpack_map(t);
      case 223:
        return t = this.unpack_uint32(), this.unpack_map(t);
    }
  }
  unpack_uint8() {
    const e = this.dataView[this.index] & 255;
    return this.index++, e;
  }
  unpack_uint16() {
    const e = this.read(2), t = (e[0] & 255) * 256 + (e[1] & 255);
    return this.index += 2, t;
  }
  unpack_uint32() {
    const e = this.read(4), t = ((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3];
    return this.index += 4, t;
  }
  unpack_uint64() {
    const e = this.read(8), t = ((((((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3]) * 256 + e[4]) * 256 + e[5]) * 256 + e[6]) * 256 + e[7];
    return this.index += 8, t;
  }
  unpack_int8() {
    const e = this.unpack_uint8();
    return e < 128 ? e : e - 256;
  }
  unpack_int16() {
    const e = this.unpack_uint16();
    return e < 32768 ? e : e - 65536;
  }
  unpack_int32() {
    const e = this.unpack_uint32();
    return e < 2 ** 31 ? e : e - 2 ** 32;
  }
  unpack_int64() {
    const e = this.unpack_uint64();
    return e < 2 ** 63 ? e : e - 2 ** 64;
  }
  unpack_raw(e) {
    if (this.length < this.index + e) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);
    const t = this.dataBuffer.slice(this.index, this.index + e);
    return this.index += e, t;
  }
  unpack_string(e) {
    const t = this.read(e);
    let n = 0, r = "", i, o;
    for (; n < e; ) i = t[n], i < 160 ? (o = i, n++) : (i ^ 192) < 32 ? (o = (i & 31) << 6 | t[n + 1] & 63, n += 2) : (i ^ 224) < 16 ? (o = (i & 15) << 12 | (t[n + 1] & 63) << 6 | t[n + 2] & 63, n += 3) : (o = (i & 7) << 18 | (t[n + 1] & 63) << 12 | (t[n + 2] & 63) << 6 | t[n + 3] & 63, n += 4), r += String.fromCodePoint(o);
    return this.index += e, r;
  }
  unpack_array(e) {
    const t = new Array(e);
    for (let n = 0; n < e; n++) t[n] = this.unpack();
    return t;
  }
  unpack_map(e) {
    const t = {};
    for (let n = 0; n < e; n++) {
      const r = this.unpack();
      t[r] = this.unpack();
    }
    return t;
  }
  unpack_float() {
    const e = this.unpack_uint32(), t = e >> 31, n = (e >> 23 & 255) - 127, r = e & 8388607 | 8388608;
    return (t === 0 ? 1 : -1) * r * 2 ** (n - 23);
  }
  unpack_double() {
    const e = this.unpack_uint32(), t = this.unpack_uint32(), n = e >> 31, r = (e >> 20 & 2047) - 1023, o = (e & 1048575 | 1048576) * 2 ** (r - 20) + t * 2 ** (r - 52);
    return (n === 0 ? 1 : -1) * o;
  }
  read(e) {
    const t = this.index;
    if (t + e <= this.length) return this.dataView.subarray(t, t + e);
    throw new Error("BinaryPackFailure: read index out of range");
  }
}
class Yu {
  getBuffer() {
    return this._bufferBuilder.toArrayBuffer();
  }
  pack(e) {
    if (typeof e == "string") this.pack_string(e);
    else if (typeof e == "number") Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
    else if (typeof e == "boolean") e === true ? this._bufferBuilder.append(195) : e === false && this._bufferBuilder.append(194);
    else if (e === void 0) this._bufferBuilder.append(192);
    else if (typeof e == "object") if (e === null) this._bufferBuilder.append(192);
    else {
      const t = e.constructor;
      if (e instanceof Array) {
        const n = this.pack_array(e);
        if (n instanceof Promise) return n.then(() => this._bufferBuilder.flush());
      } else if (e instanceof ArrayBuffer) this.pack_bin(new Uint8Array(e));
      else if ("BYTES_PER_ELEMENT" in e) {
        const n = e;
        this.pack_bin(new Uint8Array(n.buffer, n.byteOffset, n.byteLength));
      } else if (e instanceof Date) this.pack_string(e.toString());
      else {
        if (e instanceof Blob) return e.arrayBuffer().then((n) => {
          this.pack_bin(new Uint8Array(n)), this._bufferBuilder.flush();
        });
        if (t == Object || t.toString().startsWith("class")) {
          const n = this.pack_object(e);
          if (n instanceof Promise) return n.then(() => this._bufferBuilder.flush());
        } else throw new Error(`Type "${t.toString()}" not yet supported`);
      }
    }
    else throw new Error(`Type "${typeof e}" not yet supported`);
    this._bufferBuilder.flush();
  }
  pack_bin(e) {
    const t = e.length;
    if (t <= 15) this.pack_uint8(160 + t);
    else if (t <= 65535) this._bufferBuilder.append(218), this.pack_uint16(t);
    else if (t <= 4294967295) this._bufferBuilder.append(219), this.pack_uint32(t);
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(e);
  }
  pack_string(e) {
    const t = this._textEncoder.encode(e), n = t.length;
    if (n <= 15) this.pack_uint8(176 + n);
    else if (n <= 65535) this._bufferBuilder.append(216), this.pack_uint16(n);
    else if (n <= 4294967295) this._bufferBuilder.append(217), this.pack_uint32(n);
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(t);
  }
  pack_array(e) {
    const t = e.length;
    if (t <= 15) this.pack_uint8(144 + t);
    else if (t <= 65535) this._bufferBuilder.append(220), this.pack_uint16(t);
    else if (t <= 4294967295) this._bufferBuilder.append(221), this.pack_uint32(t);
    else throw new Error("Invalid length");
    const n = (r) => {
      if (r < t) {
        const i = this.pack(e[r]);
        return i instanceof Promise ? i.then(() => n(r + 1)) : n(r + 1);
      }
    };
    return n(0);
  }
  pack_integer(e) {
    if (e >= -32 && e <= 127) this._bufferBuilder.append(e & 255);
    else if (e >= 0 && e <= 255) this._bufferBuilder.append(204), this.pack_uint8(e);
    else if (e >= -128 && e <= 127) this._bufferBuilder.append(208), this.pack_int8(e);
    else if (e >= 0 && e <= 65535) this._bufferBuilder.append(205), this.pack_uint16(e);
    else if (e >= -32768 && e <= 32767) this._bufferBuilder.append(209), this.pack_int16(e);
    else if (e >= 0 && e <= 4294967295) this._bufferBuilder.append(206), this.pack_uint32(e);
    else if (e >= -2147483648 && e <= 2147483647) this._bufferBuilder.append(210), this.pack_int32(e);
    else if (e >= -9223372036854776e3 && e <= 9223372036854776e3) this._bufferBuilder.append(211), this.pack_int64(e);
    else if (e >= 0 && e <= 18446744073709552e3) this._bufferBuilder.append(207), this.pack_uint64(e);
    else throw new Error("Invalid integer");
  }
  pack_double(e) {
    let t = 0;
    e < 0 && (t = 1, e = -e);
    const n = Math.floor(Math.log(e) / Math.LN2), r = e / 2 ** n - 1, i = Math.floor(r * 2 ** 52), o = 2 ** 32, l = t << 31 | n + 1023 << 20 | i / o & 1048575, d = i % o;
    this._bufferBuilder.append(203), this.pack_int32(l), this.pack_int32(d);
  }
  pack_object(e) {
    const t = Object.keys(e), n = t.length;
    if (n <= 15) this.pack_uint8(128 + n);
    else if (n <= 65535) this._bufferBuilder.append(222), this.pack_uint16(n);
    else if (n <= 4294967295) this._bufferBuilder.append(223), this.pack_uint32(n);
    else throw new Error("Invalid length");
    const r = (i) => {
      if (i < t.length) {
        const o = t[i];
        if (e.hasOwnProperty(o)) {
          this.pack(o);
          const l = this.pack(e[o]);
          if (l instanceof Promise) return l.then(() => r(i + 1));
        }
        return r(i + 1);
      }
    };
    return r(0);
  }
  pack_uint8(e) {
    this._bufferBuilder.append(e);
  }
  pack_uint16(e) {
    this._bufferBuilder.append(e >> 8), this._bufferBuilder.append(e & 255);
  }
  pack_uint32(e) {
    const t = e & 4294967295;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255);
  }
  pack_uint64(e) {
    const t = e / 4294967296, n = e % 2 ** 32;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255), this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
  }
  pack_int8(e) {
    this._bufferBuilder.append(e & 255);
  }
  pack_int16(e) {
    this._bufferBuilder.append((e & 65280) >> 8), this._bufferBuilder.append(e & 255);
  }
  pack_int32(e) {
    this._bufferBuilder.append(e >>> 24 & 255), this._bufferBuilder.append((e & 16711680) >>> 16), this._bufferBuilder.append((e & 65280) >>> 8), this._bufferBuilder.append(e & 255);
  }
  pack_int64(e) {
    const t = Math.floor(e / 4294967296), n = e % 2 ** 32;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255), this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
  }
  constructor() {
    this._bufferBuilder = new Xu(), this._textEncoder = new TextEncoder();
  }
}
let Ns = true, js = true;
function tn(f, e, t) {
  const n = f.match(e);
  return n && n.length >= t && parseInt(n[t], 10);
}
function ft(f, e, t) {
  if (!f.RTCPeerConnection) return;
  const n = f.RTCPeerConnection.prototype, r = n.addEventListener;
  n.addEventListener = function(o, l) {
    if (o !== e) return r.apply(this, arguments);
    const d = (c) => {
      const u = t(c);
      u && (l.handleEvent ? l.handleEvent(u) : l(u));
    };
    return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = /* @__PURE__ */ new Map()), this._eventMap[e].set(l, d), r.apply(this, [o, d]);
  };
  const i = n.removeEventListener;
  n.removeEventListener = function(o, l) {
    if (o !== e || !this._eventMap || !this._eventMap[e]) return i.apply(this, arguments);
    if (!this._eventMap[e].has(l)) return i.apply(this, arguments);
    const d = this._eventMap[e].get(l);
    return this._eventMap[e].delete(l), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, i.apply(this, [o, d]);
  }, Object.defineProperty(n, "on" + e, { get() {
    return this["_on" + e];
  }, set(o) {
    this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), o && this.addEventListener(e, this["_on" + e] = o);
  }, enumerable: true, configurable: true });
}
function Qu(f) {
  return typeof f != "boolean" ? new Error("Argument type: " + typeof f + ". Please use a boolean.") : (Ns = f, f ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function el(f) {
  return typeof f != "boolean" ? new Error("Argument type: " + typeof f + ". Please use a boolean.") : (js = !f, "adapter.js deprecation warnings " + (f ? "disabled" : "enabled"));
}
function Fs() {
  if (typeof window == "object") {
    if (Ns) return;
    typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
  }
}
function Mi(f, e) {
  js && console.warn(f + " is deprecated, please use " + e + " instead.");
}
function tl(f) {
  const e = { browser: null, version: null };
  if (typeof f > "u" || !f.navigator || !f.navigator.userAgent) return e.browser = "Not a browser.", e;
  const { navigator: t } = f;
  if (t.userAgentData && t.userAgentData.brands) {
    const n = t.userAgentData.brands.find((r) => r.brand === "Chromium");
    if (n) return { browser: "chrome", version: parseInt(n.version, 10) };
  }
  if (t.mozGetUserMedia) e.browser = "firefox", e.version = tn(t.userAgent, /Firefox\/(\d+)\./, 1);
  else if (t.webkitGetUserMedia || f.isSecureContext === false && f.webkitRTCPeerConnection) e.browser = "chrome", e.version = tn(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  else if (f.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = tn(t.userAgent, /AppleWebKit\/(\d+)\./, 1), e.supportsUnifiedPlan = f.RTCRtpTransceiver && "currentDirection" in f.RTCRtpTransceiver.prototype;
  else return e.browser = "Not a supported browser.", e;
  return e;
}
function sr(f) {
  return Object.prototype.toString.call(f) === "[object Object]";
}
function Us(f) {
  return sr(f) ? Object.keys(f).reduce(function(e, t) {
    const n = sr(f[t]), r = n ? Us(f[t]) : f[t], i = n && !Object.keys(r).length;
    return r === void 0 || i ? e : Object.assign(e, { [t]: r });
  }, {}) : f;
}
function bi(f, e, t) {
  !e || t.has(e.id) || (t.set(e.id, e), Object.keys(e).forEach((n) => {
    n.endsWith("Id") ? bi(f, f.get(e[n]), t) : n.endsWith("Ids") && e[n].forEach((r) => {
      bi(f, f.get(r), t);
    });
  }));
}
function ar(f, e, t) {
  const n = t ? "outbound-rtp" : "inbound-rtp", r = /* @__PURE__ */ new Map();
  if (e === null) return r;
  const i = [];
  return f.forEach((o) => {
    o.type === "track" && o.trackIdentifier === e.id && i.push(o);
  }), i.forEach((o) => {
    f.forEach((l) => {
      l.type === n && l.trackId === o.id && bi(f, l, r);
    });
  }), r;
}
const or = Fs;
function qs(f, e) {
  const t = f && f.navigator;
  if (!t.mediaDevices) return;
  const n = function(l) {
    if (typeof l != "object" || l.mandatory || l.optional) return l;
    const d = {};
    return Object.keys(l).forEach((c) => {
      if (c === "require" || c === "advanced" || c === "mediaSource") return;
      const u = typeof l[c] == "object" ? l[c] : { ideal: l[c] };
      u.exact !== void 0 && typeof u.exact == "number" && (u.min = u.max = u.exact);
      const p = function(a, s) {
        return a ? a + s.charAt(0).toUpperCase() + s.slice(1) : s === "deviceId" ? "sourceId" : s;
      };
      if (u.ideal !== void 0) {
        d.optional = d.optional || [];
        let a = {};
        typeof u.ideal == "number" ? (a[p("min", c)] = u.ideal, d.optional.push(a), a = {}, a[p("max", c)] = u.ideal, d.optional.push(a)) : (a[p("", c)] = u.ideal, d.optional.push(a));
      }
      u.exact !== void 0 && typeof u.exact != "number" ? (d.mandatory = d.mandatory || {}, d.mandatory[p("", c)] = u.exact) : ["min", "max"].forEach((a) => {
        u[a] !== void 0 && (d.mandatory = d.mandatory || {}, d.mandatory[p(a, c)] = u[a]);
      });
    }), l.advanced && (d.optional = (d.optional || []).concat(l.advanced)), d;
  }, r = function(l, d) {
    if (e.version >= 61) return d(l);
    if (l = JSON.parse(JSON.stringify(l)), l && typeof l.audio == "object") {
      const c = function(u, p, a) {
        p in u && !(a in u) && (u[a] = u[p], delete u[p]);
      };
      l = JSON.parse(JSON.stringify(l)), c(l.audio, "autoGainControl", "googAutoGainControl"), c(l.audio, "noiseSuppression", "googNoiseSuppression"), l.audio = n(l.audio);
    }
    if (l && typeof l.video == "object") {
      let c = l.video.facingMode;
      c = c && (typeof c == "object" ? c : { ideal: c });
      const u = e.version < 66;
      if (c && (c.exact === "user" || c.exact === "environment" || c.ideal === "user" || c.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !u)) {
        delete l.video.facingMode;
        let p;
        if (c.exact === "environment" || c.ideal === "environment" ? p = ["back", "rear"] : (c.exact === "user" || c.ideal === "user") && (p = ["front"]), p) return t.mediaDevices.enumerateDevices().then((a) => {
          a = a.filter((m) => m.kind === "videoinput");
          let s = a.find((m) => p.some((h) => m.label.toLowerCase().includes(h)));
          return !s && a.length && p.includes("back") && (s = a[a.length - 1]), s && (l.video.deviceId = c.exact ? { exact: s.deviceId } : { ideal: s.deviceId }), l.video = n(l.video), or("chrome: " + JSON.stringify(l)), d(l);
        });
      }
      l.video = n(l.video);
    }
    return or("chrome: " + JSON.stringify(l)), d(l);
  }, i = function(l) {
    return e.version >= 64 ? l : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[l.name] || l.name, message: l.message, constraint: l.constraint || l.constraintName, toString() {
      return this.name + (this.message && ": ") + this.message;
    } };
  }, o = function(l, d, c) {
    r(l, (u) => {
      t.webkitGetUserMedia(u, d, (p) => {
        c && c(i(p));
      });
    });
  };
  if (t.getUserMedia = o.bind(t), t.mediaDevices.getUserMedia) {
    const l = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function(d) {
      return r(d, (c) => l(c).then((u) => {
        if (c.audio && !u.getAudioTracks().length || c.video && !u.getVideoTracks().length) throw u.getTracks().forEach((p) => {
          p.stop();
        }), new DOMException("", "NotFoundError");
        return u;
      }, (u) => Promise.reject(i(u))));
    };
  }
}
function Hs(f) {
  f.MediaStream = f.MediaStream || f.webkitMediaStream;
}
function Vs(f) {
  if (typeof f == "object" && f.RTCPeerConnection && !("ontrack" in f.RTCPeerConnection.prototype)) {
    Object.defineProperty(f.RTCPeerConnection.prototype, "ontrack", { get() {
      return this._ontrack;
    }, set(t) {
      this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t);
    }, enumerable: true, configurable: true });
    const e = f.RTCPeerConnection.prototype.setRemoteDescription;
    f.RTCPeerConnection.prototype.setRemoteDescription = function() {
      return this._ontrackpoly || (this._ontrackpoly = (n) => {
        n.stream.addEventListener("addtrack", (r) => {
          let i;
          f.RTCPeerConnection.prototype.getReceivers ? i = this.getReceivers().find((l) => l.track && l.track.id === r.track.id) : i = { track: r.track };
          const o = new Event("track");
          o.track = r.track, o.receiver = i, o.transceiver = { receiver: i }, o.streams = [n.stream], this.dispatchEvent(o);
        }), n.stream.getTracks().forEach((r) => {
          let i;
          f.RTCPeerConnection.prototype.getReceivers ? i = this.getReceivers().find((l) => l.track && l.track.id === r.id) : i = { track: r };
          const o = new Event("track");
          o.track = r, o.receiver = i, o.transceiver = { receiver: i }, o.streams = [n.stream], this.dispatchEvent(o);
        });
      }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments);
    };
  } else ft(f, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e));
}
function Gs(f) {
  if (typeof f == "object" && f.RTCPeerConnection && !("getSenders" in f.RTCPeerConnection.prototype) && "createDTMFSender" in f.RTCPeerConnection.prototype) {
    const e = function(r, i) {
      return { track: i, get dtmf() {
        return this._dtmf === void 0 && (i.kind === "audio" ? this._dtmf = r.createDTMFSender(i) : this._dtmf = null), this._dtmf;
      }, _pc: r };
    };
    if (!f.RTCPeerConnection.prototype.getSenders) {
      f.RTCPeerConnection.prototype.getSenders = function() {
        return this._senders = this._senders || [], this._senders.slice();
      };
      const r = f.RTCPeerConnection.prototype.addTrack;
      f.RTCPeerConnection.prototype.addTrack = function(l, d) {
        let c = r.apply(this, arguments);
        return c || (c = e(this, l), this._senders.push(c)), c;
      };
      const i = f.RTCPeerConnection.prototype.removeTrack;
      f.RTCPeerConnection.prototype.removeTrack = function(l) {
        i.apply(this, arguments);
        const d = this._senders.indexOf(l);
        d !== -1 && this._senders.splice(d, 1);
      };
    }
    const t = f.RTCPeerConnection.prototype.addStream;
    f.RTCPeerConnection.prototype.addStream = function(i) {
      this._senders = this._senders || [], t.apply(this, [i]), i.getTracks().forEach((o) => {
        this._senders.push(e(this, o));
      });
    };
    const n = f.RTCPeerConnection.prototype.removeStream;
    f.RTCPeerConnection.prototype.removeStream = function(i) {
      this._senders = this._senders || [], n.apply(this, [i]), i.getTracks().forEach((o) => {
        const l = this._senders.find((d) => d.track === o);
        l && this._senders.splice(this._senders.indexOf(l), 1);
      });
    };
  } else if (typeof f == "object" && f.RTCPeerConnection && "getSenders" in f.RTCPeerConnection.prototype && "createDTMFSender" in f.RTCPeerConnection.prototype && f.RTCRtpSender && !("dtmf" in f.RTCRtpSender.prototype)) {
    const e = f.RTCPeerConnection.prototype.getSenders;
    f.RTCPeerConnection.prototype.getSenders = function() {
      const n = e.apply(this, []);
      return n.forEach((r) => r._pc = this), n;
    }, Object.defineProperty(f.RTCRtpSender.prototype, "dtmf", { get() {
      return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
    } });
  }
}
function Ws(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender && f.RTCRtpReceiver)) return;
  if (!("getStats" in f.RTCRtpSender.prototype)) {
    const t = f.RTCPeerConnection.prototype.getSenders;
    t && (f.RTCPeerConnection.prototype.getSenders = function() {
      const i = t.apply(this, []);
      return i.forEach((o) => o._pc = this), i;
    });
    const n = f.RTCPeerConnection.prototype.addTrack;
    n && (f.RTCPeerConnection.prototype.addTrack = function() {
      const i = n.apply(this, arguments);
      return i._pc = this, i;
    }), f.RTCRtpSender.prototype.getStats = function() {
      const i = this;
      return this._pc.getStats().then((o) => ar(o, i.track, true));
    };
  }
  if (!("getStats" in f.RTCRtpReceiver.prototype)) {
    const t = f.RTCPeerConnection.prototype.getReceivers;
    t && (f.RTCPeerConnection.prototype.getReceivers = function() {
      const r = t.apply(this, []);
      return r.forEach((i) => i._pc = this), r;
    }), ft(f, "track", (n) => (n.receiver._pc = n.srcElement, n)), f.RTCRtpReceiver.prototype.getStats = function() {
      const r = this;
      return this._pc.getStats().then((i) => ar(i, r.track, false));
    };
  }
  if (!("getStats" in f.RTCRtpSender.prototype && "getStats" in f.RTCRtpReceiver.prototype)) return;
  const e = f.RTCPeerConnection.prototype.getStats;
  f.RTCPeerConnection.prototype.getStats = function() {
    if (arguments.length > 0 && arguments[0] instanceof f.MediaStreamTrack) {
      const n = arguments[0];
      let r, i, o;
      return this.getSenders().forEach((l) => {
        l.track === n && (r ? o = true : r = l);
      }), this.getReceivers().forEach((l) => (l.track === n && (i ? o = true : i = l), l.track === n)), o || r && i ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : i ? i.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
    }
    return e.apply(this, arguments);
  };
}
function Js(f) {
  f.RTCPeerConnection.prototype.getLocalStreams = function() {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((o) => this._shimmedLocalStreams[o][0]);
  };
  const e = f.RTCPeerConnection.prototype.addTrack;
  f.RTCPeerConnection.prototype.addTrack = function(o, l) {
    if (!l) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const d = e.apply(this, arguments);
    return this._shimmedLocalStreams[l.id] ? this._shimmedLocalStreams[l.id].indexOf(d) === -1 && this._shimmedLocalStreams[l.id].push(d) : this._shimmedLocalStreams[l.id] = [l, d], d;
  };
  const t = f.RTCPeerConnection.prototype.addStream;
  f.RTCPeerConnection.prototype.addStream = function(o) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, o.getTracks().forEach((c) => {
      if (this.getSenders().find((p) => p.track === c)) throw new DOMException("Track already exists.", "InvalidAccessError");
    });
    const l = this.getSenders();
    t.apply(this, arguments);
    const d = this.getSenders().filter((c) => l.indexOf(c) === -1);
    this._shimmedLocalStreams[o.id] = [o].concat(d);
  };
  const n = f.RTCPeerConnection.prototype.removeStream;
  f.RTCPeerConnection.prototype.removeStream = function(o) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[o.id], n.apply(this, arguments);
  };
  const r = f.RTCPeerConnection.prototype.removeTrack;
  f.RTCPeerConnection.prototype.removeTrack = function(o) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, o && Object.keys(this._shimmedLocalStreams).forEach((l) => {
      const d = this._shimmedLocalStreams[l].indexOf(o);
      d !== -1 && this._shimmedLocalStreams[l].splice(d, 1), this._shimmedLocalStreams[l].length === 1 && delete this._shimmedLocalStreams[l];
    }), r.apply(this, arguments);
  };
}
function Xs(f, e) {
  if (!f.RTCPeerConnection) return;
  if (f.RTCPeerConnection.prototype.addTrack && e.version >= 65) return Js(f);
  const t = f.RTCPeerConnection.prototype.getLocalStreams;
  f.RTCPeerConnection.prototype.getLocalStreams = function() {
    const u = t.apply(this);
    return this._reverseStreams = this._reverseStreams || {}, u.map((p) => this._reverseStreams[p.id]);
  };
  const n = f.RTCPeerConnection.prototype.addStream;
  f.RTCPeerConnection.prototype.addStream = function(u) {
    if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, u.getTracks().forEach((p) => {
      if (this.getSenders().find((s) => s.track === p)) throw new DOMException("Track already exists.", "InvalidAccessError");
    }), !this._reverseStreams[u.id]) {
      const p = new f.MediaStream(u.getTracks());
      this._streams[u.id] = p, this._reverseStreams[p.id] = u, u = p;
    }
    n.apply(this, [u]);
  };
  const r = f.RTCPeerConnection.prototype.removeStream;
  f.RTCPeerConnection.prototype.removeStream = function(u) {
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, r.apply(this, [this._streams[u.id] || u]), delete this._reverseStreams[this._streams[u.id] ? this._streams[u.id].id : u.id], delete this._streams[u.id];
  }, f.RTCPeerConnection.prototype.addTrack = function(u, p) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    const a = [].slice.call(arguments, 1);
    if (a.length !== 1 || !a[0].getTracks().find((h) => h === u)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
    if (this.getSenders().find((h) => h.track === u)) throw new DOMException("Track already exists.", "InvalidAccessError");
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
    const m = this._streams[p.id];
    if (m) m.addTrack(u), Promise.resolve().then(() => {
      this.dispatchEvent(new Event("negotiationneeded"));
    });
    else {
      const h = new f.MediaStream([u]);
      this._streams[p.id] = h, this._reverseStreams[h.id] = p, this.addStream(h);
    }
    return this.getSenders().find((h) => h.track === u);
  };
  function i(c, u) {
    let p = u.sdp;
    return Object.keys(c._reverseStreams || []).forEach((a) => {
      const s = c._reverseStreams[a], m = c._streams[s.id];
      p = p.replace(new RegExp(m.id, "g"), s.id);
    }), new RTCSessionDescription({ type: u.type, sdp: p });
  }
  function o(c, u) {
    let p = u.sdp;
    return Object.keys(c._reverseStreams || []).forEach((a) => {
      const s = c._reverseStreams[a], m = c._streams[s.id];
      p = p.replace(new RegExp(s.id, "g"), m.id);
    }), new RTCSessionDescription({ type: u.type, sdp: p });
  }
  ["createOffer", "createAnswer"].forEach(function(c) {
    const u = f.RTCPeerConnection.prototype[c], p = { [c]() {
      const a = arguments;
      return arguments.length && typeof arguments[0] == "function" ? u.apply(this, [(m) => {
        const h = i(this, m);
        a[0].apply(null, [h]);
      }, (m) => {
        a[1] && a[1].apply(null, m);
      }, arguments[2]]) : u.apply(this, arguments).then((m) => i(this, m));
    } };
    f.RTCPeerConnection.prototype[c] = p[c];
  });
  const l = f.RTCPeerConnection.prototype.setLocalDescription;
  f.RTCPeerConnection.prototype.setLocalDescription = function() {
    return !arguments.length || !arguments[0].type ? l.apply(this, arguments) : (arguments[0] = o(this, arguments[0]), l.apply(this, arguments));
  };
  const d = Object.getOwnPropertyDescriptor(f.RTCPeerConnection.prototype, "localDescription");
  Object.defineProperty(f.RTCPeerConnection.prototype, "localDescription", { get() {
    const c = d.get.apply(this);
    return c.type === "" ? c : i(this, c);
  } }), f.RTCPeerConnection.prototype.removeTrack = function(u) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    if (!u._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
    if (!(u._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
    this._streams = this._streams || {};
    let a;
    Object.keys(this._streams).forEach((s) => {
      this._streams[s].getTracks().find((h) => u.track === h) && (a = this._streams[s]);
    }), a && (a.getTracks().length === 1 ? this.removeStream(this._reverseStreams[a.id]) : a.removeTrack(u.track), this.dispatchEvent(new Event("negotiationneeded")));
  };
}
function yi(f, e) {
  !f.RTCPeerConnection && f.webkitRTCPeerConnection && (f.RTCPeerConnection = f.webkitRTCPeerConnection), f.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
    const n = f.RTCPeerConnection.prototype[t], r = { [t]() {
      return arguments[0] = new (t === "addIceCandidate" ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
    } };
    f.RTCPeerConnection.prototype[t] = r[t];
  });
}
function Zs(f, e) {
  ft(f, "negotiationneeded", (t) => {
    const n = t.target;
    if (!((e.version < 72 || n.getConfiguration && n.getConfiguration().sdpSemantics === "plan-b") && n.signalingState !== "stable")) return t;
  });
}
const ur = Object.freeze(Object.defineProperty({ __proto__: null, fixNegotiationNeeded: Zs, shimAddTrackRemoveTrack: Xs, shimAddTrackRemoveTrackWithNative: Js, shimGetSendersWithDtmf: Gs, shimGetUserMedia: qs, shimMediaStream: Hs, shimOnTrack: Vs, shimPeerConnection: yi, shimSenderReceiverGetStats: Ws }, Symbol.toStringTag, { value: "Module" }));
function Ks(f, e) {
  const t = f && f.navigator, n = f && f.MediaStreamTrack;
  if (t.getUserMedia = function(r, i, o) {
    Mi("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(r).then(i, o);
  }, !(e.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
    const r = function(o, l, d) {
      l in o && !(d in o) && (o[d] = o[l], delete o[l]);
    }, i = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (t.mediaDevices.getUserMedia = function(o) {
      return typeof o == "object" && typeof o.audio == "object" && (o = JSON.parse(JSON.stringify(o)), r(o.audio, "autoGainControl", "mozAutoGainControl"), r(o.audio, "noiseSuppression", "mozNoiseSuppression")), i(o);
    }, n && n.prototype.getSettings) {
      const o = n.prototype.getSettings;
      n.prototype.getSettings = function() {
        const l = o.apply(this, arguments);
        return r(l, "mozAutoGainControl", "autoGainControl"), r(l, "mozNoiseSuppression", "noiseSuppression"), l;
      };
    }
    if (n && n.prototype.applyConstraints) {
      const o = n.prototype.applyConstraints;
      n.prototype.applyConstraints = function(l) {
        return this.kind === "audio" && typeof l == "object" && (l = JSON.parse(JSON.stringify(l)), r(l, "autoGainControl", "mozAutoGainControl"), r(l, "noiseSuppression", "mozNoiseSuppression")), o.apply(this, [l]);
      };
    }
  }
}
function nl(f, e) {
  f.navigator.mediaDevices && "getDisplayMedia" in f.navigator.mediaDevices || f.navigator.mediaDevices && (f.navigator.mediaDevices.getDisplayMedia = function(n) {
    if (!(n && n.video)) {
      const r = new DOMException("getDisplayMedia without video constraints is undefined");
      return r.name = "NotFoundError", r.code = 8, Promise.reject(r);
    }
    return n.video === true ? n.video = { mediaSource: e } : n.video.mediaSource = e, f.navigator.mediaDevices.getUserMedia(n);
  });
}
function Ys(f) {
  typeof f == "object" && f.RTCTrackEvent && "receiver" in f.RTCTrackEvent.prototype && !("transceiver" in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function xi(f, e) {
  if (typeof f != "object" || !(f.RTCPeerConnection || f.mozRTCPeerConnection)) return;
  !f.RTCPeerConnection && f.mozRTCPeerConnection && (f.RTCPeerConnection = f.mozRTCPeerConnection), e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(r) {
    const i = f.RTCPeerConnection.prototype[r], o = { [r]() {
      return arguments[0] = new (r === "addIceCandidate" ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
    } };
    f.RTCPeerConnection.prototype[r] = o[r];
  });
  const t = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, n = f.RTCPeerConnection.prototype.getStats;
  f.RTCPeerConnection.prototype.getStats = function() {
    const [i, o, l] = arguments;
    return n.apply(this, [i || null]).then((d) => {
      if (e.version < 53 && !o) try {
        d.forEach((c) => {
          c.type = t[c.type] || c.type;
        });
      } catch (c) {
        if (c.name !== "TypeError") throw c;
        d.forEach((u, p) => {
          d.set(p, Object.assign({}, u, { type: t[u.type] || u.type }));
        });
      }
      return d;
    }).then(o, l);
  };
}
function Qs(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender) || f.RTCRtpSender && "getStats" in f.RTCRtpSender.prototype) return;
  const e = f.RTCPeerConnection.prototype.getSenders;
  e && (f.RTCPeerConnection.prototype.getSenders = function() {
    const r = e.apply(this, []);
    return r.forEach((i) => i._pc = this), r;
  });
  const t = f.RTCPeerConnection.prototype.addTrack;
  t && (f.RTCPeerConnection.prototype.addTrack = function() {
    const r = t.apply(this, arguments);
    return r._pc = this, r;
  }), f.RTCRtpSender.prototype.getStats = function() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
  };
}
function ea(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender) || f.RTCRtpSender && "getStats" in f.RTCRtpReceiver.prototype) return;
  const e = f.RTCPeerConnection.prototype.getReceivers;
  e && (f.RTCPeerConnection.prototype.getReceivers = function() {
    const n = e.apply(this, []);
    return n.forEach((r) => r._pc = this), n;
  }), ft(f, "track", (t) => (t.receiver._pc = t.srcElement, t)), f.RTCRtpReceiver.prototype.getStats = function() {
    return this._pc.getStats(this.track);
  };
}
function ta(f) {
  !f.RTCPeerConnection || "removeStream" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.removeStream = function(t) {
    Mi("removeStream", "removeTrack"), this.getSenders().forEach((n) => {
      n.track && t.getTracks().includes(n.track) && this.removeTrack(n);
    });
  });
}
function na(f) {
  f.DataChannel && !f.RTCDataChannel && (f.RTCDataChannel = f.DataChannel);
}
function ia(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.addTransceiver;
  e && (f.RTCPeerConnection.prototype.addTransceiver = function() {
    this.setParametersPromises = [];
    let n = arguments[1] && arguments[1].sendEncodings;
    n === void 0 && (n = []), n = [...n];
    const r = n.length > 0;
    r && n.forEach((o) => {
      if ("rid" in o && !/^[a-z0-9]{0,16}$/i.test(o.rid)) throw new TypeError("Invalid RID value provided.");
      if ("scaleResolutionDownBy" in o && !(parseFloat(o.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
      if ("maxFramerate" in o && !(parseFloat(o.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
    });
    const i = e.apply(this, arguments);
    if (r) {
      const { sender: o } = i, l = o.getParameters();
      (!("encodings" in l) || l.encodings.length === 1 && Object.keys(l.encodings[0]).length === 0) && (l.encodings = n, o.sendEncodings = n, this.setParametersPromises.push(o.setParameters(l).then(() => {
        delete o.sendEncodings;
      }).catch(() => {
        delete o.sendEncodings;
      })));
    }
    return i;
  });
}
function ra(f) {
  if (!(typeof f == "object" && f.RTCRtpSender)) return;
  const e = f.RTCRtpSender.prototype.getParameters;
  e && (f.RTCRtpSender.prototype.getParameters = function() {
    const n = e.apply(this, arguments);
    return "encodings" in n || (n.encodings = [].concat(this.sendEncodings || [{}])), n;
  });
}
function sa(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.createOffer;
  f.RTCPeerConnection.prototype.createOffer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
function aa(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.createAnswer;
  f.RTCPeerConnection.prototype.createAnswer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
const lr = Object.freeze(Object.defineProperty({ __proto__: null, shimAddTransceiver: ia, shimCreateAnswer: aa, shimCreateOffer: sa, shimGetDisplayMedia: nl, shimGetParameters: ra, shimGetUserMedia: Ks, shimOnTrack: Ys, shimPeerConnection: xi, shimRTCDataChannel: na, shimReceiverGetStats: ea, shimRemoveStream: ta, shimSenderGetStats: Qs }, Symbol.toStringTag, { value: "Module" }));
function oa(f) {
  if (!(typeof f != "object" || !f.RTCPeerConnection)) {
    if ("getLocalStreams" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getLocalStreams = function() {
      return this._localStreams || (this._localStreams = []), this._localStreams;
    }), !("addStream" in f.RTCPeerConnection.prototype)) {
      const e = f.RTCPeerConnection.prototype.addTrack;
      f.RTCPeerConnection.prototype.addStream = function(n) {
        this._localStreams || (this._localStreams = []), this._localStreams.includes(n) || this._localStreams.push(n), n.getAudioTracks().forEach((r) => e.call(this, r, n)), n.getVideoTracks().forEach((r) => e.call(this, r, n));
      }, f.RTCPeerConnection.prototype.addTrack = function(n, ...r) {
        return r && r.forEach((i) => {
          this._localStreams ? this._localStreams.includes(i) || this._localStreams.push(i) : this._localStreams = [i];
        }), e.apply(this, arguments);
      };
    }
    "removeStream" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.removeStream = function(t) {
      this._localStreams || (this._localStreams = []);
      const n = this._localStreams.indexOf(t);
      if (n === -1) return;
      this._localStreams.splice(n, 1);
      const r = t.getTracks();
      this.getSenders().forEach((i) => {
        r.includes(i.track) && this.removeTrack(i);
      });
    });
  }
}
function ua(f) {
  if (!(typeof f != "object" || !f.RTCPeerConnection) && ("getRemoteStreams" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this._remoteStreams ? this._remoteStreams : [];
  }), !("onaddstream" in f.RTCPeerConnection.prototype))) {
    Object.defineProperty(f.RTCPeerConnection.prototype, "onaddstream", { get() {
      return this._onaddstream;
    }, set(t) {
      this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = (n) => {
        n.streams.forEach((r) => {
          if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(r)) return;
          this._remoteStreams.push(r);
          const i = new Event("addstream");
          i.stream = r, this.dispatchEvent(i);
        });
      });
    } });
    const e = f.RTCPeerConnection.prototype.setRemoteDescription;
    f.RTCPeerConnection.prototype.setRemoteDescription = function() {
      const n = this;
      return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(r) {
        r.streams.forEach((i) => {
          if (n._remoteStreams || (n._remoteStreams = []), n._remoteStreams.indexOf(i) >= 0) return;
          n._remoteStreams.push(i);
          const o = new Event("addstream");
          o.stream = i, n.dispatchEvent(o);
        });
      }), e.apply(n, arguments);
    };
  }
}
function la(f) {
  if (typeof f != "object" || !f.RTCPeerConnection) return;
  const e = f.RTCPeerConnection.prototype, t = e.createOffer, n = e.createAnswer, r = e.setLocalDescription, i = e.setRemoteDescription, o = e.addIceCandidate;
  e.createOffer = function(c, u) {
    const p = arguments.length >= 2 ? arguments[2] : arguments[0], a = t.apply(this, [p]);
    return u ? (a.then(c, u), Promise.resolve()) : a;
  }, e.createAnswer = function(c, u) {
    const p = arguments.length >= 2 ? arguments[2] : arguments[0], a = n.apply(this, [p]);
    return u ? (a.then(c, u), Promise.resolve()) : a;
  };
  let l = function(d, c, u) {
    const p = r.apply(this, [d]);
    return u ? (p.then(c, u), Promise.resolve()) : p;
  };
  e.setLocalDescription = l, l = function(d, c, u) {
    const p = i.apply(this, [d]);
    return u ? (p.then(c, u), Promise.resolve()) : p;
  }, e.setRemoteDescription = l, l = function(d, c, u) {
    const p = o.apply(this, [d]);
    return u ? (p.then(c, u), Promise.resolve()) : p;
  }, e.addIceCandidate = l;
}
function ca(f) {
  const e = f && f.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices, n = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = (r) => n(da(r));
  }
  !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = function(n, r, i) {
    e.mediaDevices.getUserMedia(n).then(r, i);
  }.bind(e));
}
function da(f) {
  return f && f.video !== void 0 ? Object.assign({}, f, { video: Us(f.video) }) : f;
}
function fa(f) {
  if (!f.RTCPeerConnection) return;
  const e = f.RTCPeerConnection;
  f.RTCPeerConnection = function(n, r) {
    if (n && n.iceServers) {
      const i = [];
      for (let o = 0; o < n.iceServers.length; o++) {
        let l = n.iceServers[o];
        l.urls === void 0 && l.url ? (Mi("RTCIceServer.url", "RTCIceServer.urls"), l = JSON.parse(JSON.stringify(l)), l.urls = l.url, delete l.url, i.push(l)) : i.push(n.iceServers[o]);
      }
      n.iceServers = i;
    }
    return new e(n, r);
  }, f.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(f.RTCPeerConnection, "generateCertificate", { get() {
    return e.generateCertificate;
  } });
}
function pa(f) {
  typeof f == "object" && f.RTCTrackEvent && "receiver" in f.RTCTrackEvent.prototype && !("transceiver" in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function ha(f) {
  const e = f.RTCPeerConnection.prototype.createOffer;
  f.RTCPeerConnection.prototype.createOffer = function(n) {
    if (n) {
      typeof n.offerToReceiveAudio < "u" && (n.offerToReceiveAudio = !!n.offerToReceiveAudio);
      const r = this.getTransceivers().find((o) => o.receiver.track.kind === "audio");
      n.offerToReceiveAudio === false && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : n.offerToReceiveAudio === true && !r && this.addTransceiver("audio", { direction: "recvonly" }), typeof n.offerToReceiveVideo < "u" && (n.offerToReceiveVideo = !!n.offerToReceiveVideo);
      const i = this.getTransceivers().find((o) => o.receiver.track.kind === "video");
      n.offerToReceiveVideo === false && i ? i.direction === "sendrecv" ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : i.direction === "recvonly" && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : n.offerToReceiveVideo === true && !i && this.addTransceiver("video", { direction: "recvonly" });
    }
    return e.apply(this, arguments);
  };
}
function ma(f) {
  typeof f != "object" || f.AudioContext || (f.AudioContext = f.webkitAudioContext);
}
const cr = Object.freeze(Object.defineProperty({ __proto__: null, shimAudioContext: ma, shimCallbacksAPI: la, shimConstraints: da, shimCreateOfferLegacy: ha, shimGetUserMedia: ca, shimLocalStreamsAPI: oa, shimRTCIceServerUrls: fa, shimRemoteStreamsAPI: ua, shimTrackEventTransceiver: pa }, Symbol.toStringTag, { value: "Module" }));
var Pn = { exports: {} }, dr;
function il() {
  return dr || (dr = 1, function(f) {
    const e = {};
    e.generateIdentifier = function() {
      return Math.random().toString(36).substring(2, 12);
    }, e.localCName = e.generateIdentifier(), e.splitLines = function(t) {
      return t.trim().split(`
`).map((n) => n.trim());
    }, e.splitSections = function(t) {
      return t.split(`
m=`).map((r, i) => (i > 0 ? "m=" + r : r).trim() + `\r
`);
    }, e.getDescription = function(t) {
      const n = e.splitSections(t);
      return n && n[0];
    }, e.getMediaSections = function(t) {
      const n = e.splitSections(t);
      return n.shift(), n;
    }, e.matchPrefix = function(t, n) {
      return e.splitLines(t).filter((r) => r.indexOf(n) === 0);
    }, e.parseCandidate = function(t) {
      let n;
      t.indexOf("a=candidate:") === 0 ? n = t.substring(12).split(" ") : n = t.substring(10).split(" ");
      const r = { foundation: n[0], component: { 1: "rtp", 2: "rtcp" }[n[1]] || n[1], protocol: n[2].toLowerCase(), priority: parseInt(n[3], 10), ip: n[4], address: n[4], port: parseInt(n[5], 10), type: n[7] };
      for (let i = 8; i < n.length; i += 2) switch (n[i]) {
        case "raddr":
          r.relatedAddress = n[i + 1];
          break;
        case "rport":
          r.relatedPort = parseInt(n[i + 1], 10);
          break;
        case "tcptype":
          r.tcpType = n[i + 1];
          break;
        case "ufrag":
          r.ufrag = n[i + 1], r.usernameFragment = n[i + 1];
          break;
        default:
          r[n[i]] === void 0 && (r[n[i]] = n[i + 1]);
          break;
      }
      return r;
    }, e.writeCandidate = function(t) {
      const n = [];
      n.push(t.foundation);
      const r = t.component;
      r === "rtp" ? n.push(1) : r === "rtcp" ? n.push(2) : n.push(r), n.push(t.protocol.toUpperCase()), n.push(t.priority), n.push(t.address || t.ip), n.push(t.port);
      const i = t.type;
      return n.push("typ"), n.push(i), i !== "host" && t.relatedAddress && t.relatedPort && (n.push("raddr"), n.push(t.relatedAddress), n.push("rport"), n.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (n.push("tcptype"), n.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (n.push("ufrag"), n.push(t.usernameFragment || t.ufrag)), "candidate:" + n.join(" ");
    }, e.parseIceOptions = function(t) {
      return t.substring(14).split(" ");
    }, e.parseRtpMap = function(t) {
      let n = t.substring(9).split(" ");
      const r = { payloadType: parseInt(n.shift(), 10) };
      return n = n[0].split("/"), r.name = n[0], r.clockRate = parseInt(n[1], 10), r.channels = n.length === 3 ? parseInt(n[2], 10) : 1, r.numChannels = r.channels, r;
    }, e.writeRtpMap = function(t) {
      let n = t.payloadType;
      t.preferredPayloadType !== void 0 && (n = t.preferredPayloadType);
      const r = t.channels || t.numChannels || 1;
      return "a=rtpmap:" + n + " " + t.name + "/" + t.clockRate + (r !== 1 ? "/" + r : "") + `\r
`;
    }, e.parseExtmap = function(t) {
      const n = t.substring(9).split(" ");
      return { id: parseInt(n[0], 10), direction: n[0].indexOf("/") > 0 ? n[0].split("/")[1] : "sendrecv", uri: n[1], attributes: n.slice(2).join(" ") };
    }, e.writeExtmap = function(t) {
      return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`;
    }, e.parseFmtp = function(t) {
      const n = {};
      let r;
      const i = t.substring(t.indexOf(" ") + 1).split(";");
      for (let o = 0; o < i.length; o++) r = i[o].trim().split("="), n[r[0].trim()] = r[1];
      return n;
    }, e.writeFmtp = function(t) {
      let n = "", r = t.payloadType;
      if (t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
        const i = [];
        Object.keys(t.parameters).forEach((o) => {
          t.parameters[o] !== void 0 ? i.push(o + "=" + t.parameters[o]) : i.push(o);
        }), n += "a=fmtp:" + r + " " + i.join(";") + `\r
`;
      }
      return n;
    }, e.parseRtcpFb = function(t) {
      const n = t.substring(t.indexOf(" ") + 1).split(" ");
      return { type: n.shift(), parameter: n.join(" ") };
    }, e.writeRtcpFb = function(t) {
      let n = "", r = t.payloadType;
      return t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((i) => {
        n += "a=rtcp-fb:" + r + " " + i.type + (i.parameter && i.parameter.length ? " " + i.parameter : "") + `\r
`;
      }), n;
    }, e.parseSsrcMedia = function(t) {
      const n = t.indexOf(" "), r = { ssrc: parseInt(t.substring(7, n), 10) }, i = t.indexOf(":", n);
      return i > -1 ? (r.attribute = t.substring(n + 1, i), r.value = t.substring(i + 1)) : r.attribute = t.substring(n + 1), r;
    }, e.parseSsrcGroup = function(t) {
      const n = t.substring(13).split(" ");
      return { semantics: n.shift(), ssrcs: n.map((r) => parseInt(r, 10)) };
    }, e.getMid = function(t) {
      const n = e.matchPrefix(t, "a=mid:")[0];
      if (n) return n.substring(6);
    }, e.parseFingerprint = function(t) {
      const n = t.substring(14).split(" ");
      return { algorithm: n[0].toLowerCase(), value: n[1].toUpperCase() };
    }, e.getDtlsParameters = function(t, n) {
      return { role: "auto", fingerprints: e.matchPrefix(t + n, "a=fingerprint:").map(e.parseFingerprint) };
    }, e.writeDtlsParameters = function(t, n) {
      let r = "a=setup:" + n + `\r
`;
      return t.fingerprints.forEach((i) => {
        r += "a=fingerprint:" + i.algorithm + " " + i.value + `\r
`;
      }), r;
    }, e.parseCryptoLine = function(t) {
      const n = t.substring(9).split(" ");
      return { tag: parseInt(n[0], 10), cryptoSuite: n[1], keyParams: n[2], sessionParams: n.slice(3) };
    }, e.writeCryptoLine = function(t) {
      return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`;
    }, e.parseCryptoKeyParams = function(t) {
      if (t.indexOf("inline:") !== 0) return null;
      const n = t.substring(7).split("|");
      return { keyMethod: "inline", keySalt: n[0], lifeTime: n[1], mkiValue: n[2] ? n[2].split(":")[0] : void 0, mkiLength: n[2] ? n[2].split(":")[1] : void 0 };
    }, e.writeCryptoKeyParams = function(t) {
      return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "");
    }, e.getCryptoParameters = function(t, n) {
      return e.matchPrefix(t + n, "a=crypto:").map(e.parseCryptoLine);
    }, e.getIceParameters = function(t, n) {
      const r = e.matchPrefix(t + n, "a=ice-ufrag:")[0], i = e.matchPrefix(t + n, "a=ice-pwd:")[0];
      return r && i ? { usernameFragment: r.substring(12), password: i.substring(10) } : null;
    }, e.writeIceParameters = function(t) {
      let n = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
      return t.iceLite && (n += `a=ice-lite\r
`), n;
    }, e.parseRtpParameters = function(t) {
      const n = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, i = e.splitLines(t)[0].split(" ");
      n.profile = i[2];
      for (let l = 3; l < i.length; l++) {
        const d = i[l], c = e.matchPrefix(t, "a=rtpmap:" + d + " ")[0];
        if (c) {
          const u = e.parseRtpMap(c), p = e.matchPrefix(t, "a=fmtp:" + d + " ");
          switch (u.parameters = p.length ? e.parseFmtp(p[0]) : {}, u.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + d + " ").map(e.parseRtcpFb), n.codecs.push(u), u.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              n.fecMechanisms.push(u.name.toUpperCase());
              break;
          }
        }
      }
      e.matchPrefix(t, "a=extmap:").forEach((l) => {
        n.headerExtensions.push(e.parseExtmap(l));
      });
      const o = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
      return n.codecs.forEach((l) => {
        o.forEach((d) => {
          l.rtcpFeedback.find((u) => u.type === d.type && u.parameter === d.parameter) || l.rtcpFeedback.push(d);
        });
      }), n;
    }, e.writeRtpDescription = function(t, n) {
      let r = "";
      r += "m=" + t + " ", r += n.codecs.length > 0 ? "9" : "0", r += " " + (n.profile || "UDP/TLS/RTP/SAVPF") + " ", r += n.codecs.map((o) => o.preferredPayloadType !== void 0 ? o.preferredPayloadType : o.payloadType).join(" ") + `\r
`, r += `c=IN IP4 0.0.0.0\r
`, r += `a=rtcp:9 IN IP4 0.0.0.0\r
`, n.codecs.forEach((o) => {
        r += e.writeRtpMap(o), r += e.writeFmtp(o), r += e.writeRtcpFb(o);
      });
      let i = 0;
      return n.codecs.forEach((o) => {
        o.maxptime > i && (i = o.maxptime);
      }), i > 0 && (r += "a=maxptime:" + i + `\r
`), n.headerExtensions && n.headerExtensions.forEach((o) => {
        r += e.writeExtmap(o);
      }), r;
    }, e.parseRtpEncodingParameters = function(t) {
      const n = [], r = e.parseRtpParameters(t), i = r.fecMechanisms.indexOf("RED") !== -1, o = r.fecMechanisms.indexOf("ULPFEC") !== -1, l = e.matchPrefix(t, "a=ssrc:").map((a) => e.parseSsrcMedia(a)).filter((a) => a.attribute === "cname"), d = l.length > 0 && l[0].ssrc;
      let c;
      const u = e.matchPrefix(t, "a=ssrc-group:FID").map((a) => a.substring(17).split(" ").map((m) => parseInt(m, 10)));
      u.length > 0 && u[0].length > 1 && u[0][0] === d && (c = u[0][1]), r.codecs.forEach((a) => {
        if (a.name.toUpperCase() === "RTX" && a.parameters.apt) {
          let s = { ssrc: d, codecPayloadType: parseInt(a.parameters.apt, 10) };
          d && c && (s.rtx = { ssrc: c }), n.push(s), i && (s = JSON.parse(JSON.stringify(s)), s.fec = { ssrc: d, mechanism: o ? "red+ulpfec" : "red" }, n.push(s));
        }
      }), n.length === 0 && d && n.push({ ssrc: d });
      let p = e.matchPrefix(t, "b=");
      return p.length && (p[0].indexOf("b=TIAS:") === 0 ? p = parseInt(p[0].substring(7), 10) : p[0].indexOf("b=AS:") === 0 ? p = parseInt(p[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8 : p = void 0, n.forEach((a) => {
        a.maxBitrate = p;
      })), n;
    }, e.parseRtcpParameters = function(t) {
      const n = {}, r = e.matchPrefix(t, "a=ssrc:").map((l) => e.parseSsrcMedia(l)).filter((l) => l.attribute === "cname")[0];
      r && (n.cname = r.value, n.ssrc = r.ssrc);
      const i = e.matchPrefix(t, "a=rtcp-rsize");
      n.reducedSize = i.length > 0, n.compound = i.length === 0;
      const o = e.matchPrefix(t, "a=rtcp-mux");
      return n.mux = o.length > 0, n;
    }, e.writeRtcpParameters = function(t) {
      let n = "";
      return t.reducedSize && (n += `a=rtcp-rsize\r
`), t.mux && (n += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (n += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), n;
    }, e.parseMsid = function(t) {
      let n;
      const r = e.matchPrefix(t, "a=msid:");
      if (r.length === 1) return n = r[0].substring(7).split(" "), { stream: n[0], track: n[1] };
      const i = e.matchPrefix(t, "a=ssrc:").map((o) => e.parseSsrcMedia(o)).filter((o) => o.attribute === "msid");
      if (i.length > 0) return n = i[0].value.split(" "), { stream: n[0], track: n[1] };
    }, e.parseSctpDescription = function(t) {
      const n = e.parseMLine(t), r = e.matchPrefix(t, "a=max-message-size:");
      let i;
      r.length > 0 && (i = parseInt(r[0].substring(19), 10)), isNaN(i) && (i = 65536);
      const o = e.matchPrefix(t, "a=sctp-port:");
      if (o.length > 0) return { port: parseInt(o[0].substring(12), 10), protocol: n.fmt, maxMessageSize: i };
      const l = e.matchPrefix(t, "a=sctpmap:");
      if (l.length > 0) {
        const d = l[0].substring(10).split(" ");
        return { port: parseInt(d[0], 10), protocol: d[1], maxMessageSize: i };
      }
    }, e.writeSctpDescription = function(t, n) {
      let r = [];
      return t.protocol !== "DTLS/SCTP" ? r = ["m=" + t.kind + " 9 " + t.protocol + " " + n.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + n.port + `\r
`] : r = ["m=" + t.kind + " 9 " + t.protocol + " " + n.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + n.port + " " + n.protocol + ` 65535\r
`], n.maxMessageSize !== void 0 && r.push("a=max-message-size:" + n.maxMessageSize + `\r
`), r.join("");
    }, e.generateSessionId = function() {
      return Math.random().toString().substr(2, 22);
    }, e.writeSessionBoilerplate = function(t, n, r) {
      let i;
      const o = n !== void 0 ? n : 2;
      return t ? i = t : i = e.generateSessionId(), `v=0\r
o=` + (r || "thisisadapterortc") + " " + i + " " + o + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    }, e.getDirection = function(t, n) {
      const r = e.splitLines(t);
      for (let i = 0; i < r.length; i++) switch (r[i]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return r[i].substring(2);
      }
      return n ? e.getDirection(n) : "sendrecv";
    }, e.getKind = function(t) {
      return e.splitLines(t)[0].split(" ")[0].substring(2);
    }, e.isRejected = function(t) {
      return t.split(" ", 2)[1] === "0";
    }, e.parseMLine = function(t) {
      const r = e.splitLines(t)[0].substring(2).split(" ");
      return { kind: r[0], port: parseInt(r[1], 10), protocol: r[2], fmt: r.slice(3).join(" ") };
    }, e.parseOLine = function(t) {
      const r = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
      return { username: r[0], sessionId: r[1], sessionVersion: parseInt(r[2], 10), netType: r[3], addressType: r[4], address: r[5] };
    }, e.isValidSDP = function(t) {
      if (typeof t != "string" || t.length === 0) return false;
      const n = e.splitLines(t);
      for (let r = 0; r < n.length; r++) if (n[r].length < 2 || n[r].charAt(1) !== "=") return false;
      return true;
    }, f.exports = e;
  }(Pn)), Pn.exports;
}
var ga = il();
const kt = As(ga), rl = Po({ __proto__: null, default: kt }, [ga]);
function nn(f) {
  if (!f.RTCIceCandidate || f.RTCIceCandidate && "foundation" in f.RTCIceCandidate.prototype) return;
  const e = f.RTCIceCandidate;
  f.RTCIceCandidate = function(n) {
    if (typeof n == "object" && n.candidate && n.candidate.indexOf("a=") === 0 && (n = JSON.parse(JSON.stringify(n)), n.candidate = n.candidate.substring(2)), n.candidate && n.candidate.length) {
      const r = new e(n), i = kt.parseCandidate(n.candidate);
      for (const o in i) o in r || Object.defineProperty(r, o, { value: i[o] });
      return r.toJSON = function() {
        return { candidate: r.candidate, sdpMid: r.sdpMid, sdpMLineIndex: r.sdpMLineIndex, usernameFragment: r.usernameFragment };
      }, r;
    }
    return new e(n);
  }, f.RTCIceCandidate.prototype = e.prototype, ft(f, "icecandidate", (t) => (t.candidate && Object.defineProperty(t, "candidate", { value: new f.RTCIceCandidate(t.candidate), writable: "false" }), t));
}
function wi(f) {
  !f.RTCIceCandidate || f.RTCIceCandidate && "relayProtocol" in f.RTCIceCandidate.prototype || ft(f, "icecandidate", (e) => {
    if (e.candidate) {
      const t = kt.parseCandidate(e.candidate.candidate);
      t.type === "relay" && (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t.priority >> 24]);
    }
    return e;
  });
}
function rn(f, e) {
  if (!f.RTCPeerConnection) return;
  "sctp" in f.RTCPeerConnection.prototype || Object.defineProperty(f.RTCPeerConnection.prototype, "sctp", { get() {
    return typeof this._sctp > "u" ? null : this._sctp;
  } });
  const t = function(l) {
    if (!l || !l.sdp) return false;
    const d = kt.splitSections(l.sdp);
    return d.shift(), d.some((c) => {
      const u = kt.parseMLine(c);
      return u && u.kind === "application" && u.protocol.indexOf("SCTP") !== -1;
    });
  }, n = function(l) {
    const d = l.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (d === null || d.length < 2) return -1;
    const c = parseInt(d[1], 10);
    return c !== c ? -1 : c;
  }, r = function(l) {
    let d = 65536;
    return e.browser === "firefox" && (e.version < 57 ? l === -1 ? d = 16384 : d = 2147483637 : e.version < 60 ? d = e.version === 57 ? 65535 : 65536 : d = 2147483637), d;
  }, i = function(l, d) {
    let c = 65536;
    e.browser === "firefox" && e.version === 57 && (c = 65535);
    const u = kt.matchPrefix(l.sdp, "a=max-message-size:");
    return u.length > 0 ? c = parseInt(u[0].substring(19), 10) : e.browser === "firefox" && d !== -1 && (c = 2147483637), c;
  }, o = f.RTCPeerConnection.prototype.setRemoteDescription;
  f.RTCPeerConnection.prototype.setRemoteDescription = function() {
    if (this._sctp = null, e.browser === "chrome" && e.version >= 76) {
      const { sdpSemantics: d } = this.getConfiguration();
      d === "plan-b" && Object.defineProperty(this, "sctp", { get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      }, enumerable: true, configurable: true });
    }
    if (t(arguments[0])) {
      const d = n(arguments[0]), c = r(d), u = i(arguments[0], d);
      let p;
      c === 0 && u === 0 ? p = Number.POSITIVE_INFINITY : c === 0 || u === 0 ? p = Math.max(c, u) : p = Math.min(c, u);
      const a = {};
      Object.defineProperty(a, "maxMessageSize", { get() {
        return p;
      } }), this._sctp = a;
    }
    return o.apply(this, arguments);
  };
}
function sn(f) {
  if (!(f.RTCPeerConnection && "createDataChannel" in f.RTCPeerConnection.prototype)) return;
  function e(n, r) {
    const i = n.send;
    n.send = function() {
      const l = arguments[0], d = l.length || l.size || l.byteLength;
      if (n.readyState === "open" && r.sctp && d > r.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + r.sctp.maxMessageSize + " bytes)");
      return i.apply(n, arguments);
    };
  }
  const t = f.RTCPeerConnection.prototype.createDataChannel;
  f.RTCPeerConnection.prototype.createDataChannel = function() {
    const r = t.apply(this, arguments);
    return e(r, this), r;
  }, ft(f, "datachannel", (n) => (e(n.channel, n.target), n));
}
function Si(f) {
  if (!f.RTCPeerConnection || "connectionState" in f.RTCPeerConnection.prototype) return;
  const e = f.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", { get() {
    return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
  }, enumerable: true, configurable: true }), Object.defineProperty(e, "onconnectionstatechange", { get() {
    return this._onconnectionstatechange || null;
  }, set(t) {
    this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t);
  }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((t) => {
    const n = e[t];
    e[t] = function() {
      return this._connectionstatechangepoly || (this._connectionstatechangepoly = (r) => {
        const i = r.target;
        if (i._lastConnectionState !== i.connectionState) {
          i._lastConnectionState = i.connectionState;
          const o = new Event("connectionstatechange", r);
          i.dispatchEvent(o);
        }
        return r;
      }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n.apply(this, arguments);
    };
  });
}
function Ci(f, e) {
  if (!f.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e.version >= 605) return;
  const t = f.RTCPeerConnection.prototype.setRemoteDescription;
  f.RTCPeerConnection.prototype.setRemoteDescription = function(r) {
    if (r && r.sdp && r.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
      const i = r.sdp.split(`
`).filter((o) => o.trim() !== "a=extmap-allow-mixed").join(`
`);
      f.RTCSessionDescription && r instanceof f.RTCSessionDescription ? arguments[0] = new f.RTCSessionDescription({ type: r.type, sdp: i }) : r.sdp = i;
    }
    return t.apply(this, arguments);
  };
}
function an(f, e) {
  if (!(f.RTCPeerConnection && f.RTCPeerConnection.prototype)) return;
  const t = f.RTCPeerConnection.prototype.addIceCandidate;
  !t || t.length === 0 || (f.RTCPeerConnection.prototype.addIceCandidate = function() {
    return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
  });
}
function on(f, e) {
  if (!(f.RTCPeerConnection && f.RTCPeerConnection.prototype)) return;
  const t = f.RTCPeerConnection.prototype.setLocalDescription;
  !t || t.length === 0 || (f.RTCPeerConnection.prototype.setLocalDescription = function() {
    let r = arguments[0] || {};
    if (typeof r != "object" || r.type && r.sdp) return t.apply(this, arguments);
    if (r = { type: r.type, sdp: r.sdp }, !r.type) switch (this.signalingState) {
      case "stable":
      case "have-local-offer":
      case "have-remote-pranswer":
        r.type = "offer";
        break;
      default:
        r.type = "answer";
        break;
    }
    return r.sdp || r.type !== "offer" && r.type !== "answer" ? t.apply(this, [r]) : (r.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((o) => t.apply(this, [o]));
  });
}
const sl = Object.freeze(Object.defineProperty({ __proto__: null, removeExtmapAllowMixed: Ci, shimAddIceCandidateNullOrEmpty: an, shimConnectionState: Si, shimMaxMessageSize: rn, shimParameterlessSetLocalDescription: on, shimRTCIceCandidate: nn, shimRTCIceCandidateRelayProtocol: wi, shimSendThrowTypeError: sn }, Symbol.toStringTag, { value: "Module" }));
function al({ window: f } = {}, e = { shimChrome: true, shimFirefox: true, shimSafari: true }) {
  const t = Fs, n = tl(f), r = { browserDetails: n, commonShim: sl, extractVersion: tn, disableLog: Qu, disableWarnings: el, sdp: rl };
  switch (n.browser) {
    case "chrome":
      if (!ur || !yi || !e.shimChrome) return t("Chrome shim is not included in this adapter release."), r;
      if (n.version === null) return t("Chrome shim can not determine version, not shimming."), r;
      t("adapter.js shimming chrome."), r.browserShim = ur, an(f, n), on(f), qs(f, n), Hs(f), yi(f, n), Vs(f), Xs(f, n), Gs(f), Ws(f), Zs(f, n), nn(f), wi(f), Si(f), rn(f, n), sn(f), Ci(f, n);
      break;
    case "firefox":
      if (!lr || !xi || !e.shimFirefox) return t("Firefox shim is not included in this adapter release."), r;
      t("adapter.js shimming firefox."), r.browserShim = lr, an(f, n), on(f), Ks(f, n), xi(f, n), Ys(f), ta(f), Qs(f), ea(f), na(f), ia(f), ra(f), sa(f), aa(f), nn(f), Si(f), rn(f, n), sn(f);
      break;
    case "safari":
      if (!cr || !e.shimSafari) return t("Safari shim is not included in this adapter release."), r;
      t("adapter.js shimming safari."), r.browserShim = cr, an(f, n), on(f), fa(f), ha(f), la(f), oa(f), ua(f), pa(f), ca(f), ma(f), nn(f), wi(f), rn(f, n), sn(f), Ci(f, n);
      break;
    default:
      t("Unsupported browser!");
      break;
  }
  return r;
}
const fr = al({ window: typeof window > "u" ? void 0 : window });
function pt(f, e, t, n) {
  Object.defineProperty(f, e, { get: t, set: n, enumerable: true, configurable: true });
}
class va {
  constructor() {
    this.chunkedMTU = 16300, this._dataCount = 1, this.chunk = (e) => {
      const t = [], n = e.byteLength, r = Math.ceil(n / this.chunkedMTU);
      let i = 0, o = 0;
      for (; o < n; ) {
        const l = Math.min(n, o + this.chunkedMTU), d = e.slice(o, l), c = { __peerData: this._dataCount, n: i, data: d, total: r };
        t.push(c), o = l, i++;
      }
      return this._dataCount++, t;
    };
  }
}
function ol(f) {
  let e = 0;
  for (const r of f) e += r.byteLength;
  const t = new Uint8Array(e);
  let n = 0;
  for (const r of f) t.set(r, n), n += r.byteLength;
  return t;
}
const Ln = fr.default || fr, Ot = new class {
  isWebRTCSupported() {
    return typeof RTCPeerConnection < "u";
  }
  isBrowserSupported() {
    const f = this.getBrowser(), e = this.getVersion();
    return this.supportedBrowsers.includes(f) ? f === "chrome" ? e >= this.minChromeVersion : f === "firefox" ? e >= this.minFirefoxVersion : f === "safari" ? !this.isIOS && e >= this.minSafariVersion : false : false;
  }
  getBrowser() {
    return Ln.browserDetails.browser;
  }
  getVersion() {
    return Ln.browserDetails.version || 0;
  }
  isUnifiedPlanSupported() {
    const f = this.getBrowser(), e = Ln.browserDetails.version || 0;
    if (f === "chrome" && e < this.minChromeVersion) return false;
    if (f === "firefox" && e >= this.minFirefoxVersion) return true;
    if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
    let t, n = false;
    try {
      t = new RTCPeerConnection(), t.addTransceiver("audio"), n = true;
    } catch {
    } finally {
      t && t.close();
    }
    return n;
  }
  toString() {
    return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
  }
  constructor() {
    this.isIOS = typeof navigator < "u" ? ["iPad", "iPhone", "iPod"].includes(navigator.platform) : false, this.supportedBrowsers = ["firefox", "chrome", "safari"], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
  }
}(), ul = (f) => !f || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(f), ba = () => Math.random().toString(36).slice(2), pr = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"], username: "peerjs", credential: "peerjsp" }], sdpSemantics: "unified-plan" };
class ll extends va {
  noop() {
  }
  blobToArrayBuffer(e, t) {
    const n = new FileReader();
    return n.onload = function(r) {
      r.target && t(r.target.result);
    }, n.readAsArrayBuffer(e), n;
  }
  binaryStringToArrayBuffer(e) {
    const t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n) & 255;
    return t.buffer;
  }
  isSecure() {
    return location.protocol === "https:";
  }
  constructor(...e) {
    super(...e), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = { Chrome: 1, chrome: 1 }, this.defaultConfig = pr, this.browser = Ot.getBrowser(), this.browserVersion = Ot.getVersion(), this.pack = $s, this.unpack = zs, this.supports = function() {
      const t = { browser: Ot.isBrowserSupported(), webRTC: Ot.isWebRTCSupported(), audioVideo: false, data: false, binaryBlob: false, reliable: false };
      if (!t.webRTC) return t;
      let n;
      try {
        n = new RTCPeerConnection(pr), t.audioVideo = true;
        let r;
        try {
          r = n.createDataChannel("_PEERJSTEST", { ordered: true }), t.data = true, t.reliable = !!r.ordered;
          try {
            r.binaryType = "blob", t.binaryBlob = !Ot.isIOS;
          } catch {
          }
        } catch {
        } finally {
          r && r.close();
        }
      } catch {
      } finally {
        n && n.close();
      }
      return t;
    }(), this.validateId = ul, this.randomToken = ba;
  }
}
const De = new ll(), cl = "PeerJS: ";
var hr;
(function(f) {
  f[f.Disabled = 0] = "Disabled", f[f.Errors = 1] = "Errors", f[f.Warnings = 2] = "Warnings", f[f.All = 3] = "All";
})(hr || (hr = {}));
class dl {
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    this._logLevel = e;
  }
  log(...e) {
    this._logLevel >= 3 && this._print(3, ...e);
  }
  warn(...e) {
    this._logLevel >= 2 && this._print(2, ...e);
  }
  error(...e) {
    this._logLevel >= 1 && this._print(1, ...e);
  }
  setLogFunction(e) {
    this._print = e;
  }
  _print(e, ...t) {
    const n = [cl, ...t];
    for (const r in n) n[r] instanceof Error && (n[r] = "(" + n[r].name + ") " + n[r].message);
    e >= 3 ? console.log(...n) : e >= 2 ? console.warn("WARNING", ...n) : e >= 1 && console.error("ERROR", ...n);
  }
  constructor() {
    this._logLevel = 0;
  }
}
var Z = new dl(), Oi = {}, fl = Object.prototype.hasOwnProperty, Oe = "~";
function Dt() {
}
Object.create && (Dt.prototype = /* @__PURE__ */ Object.create(null), new Dt().__proto__ || (Oe = false));
function pl(f, e, t) {
  this.fn = f, this.context = e, this.once = t || false;
}
function ya(f, e, t, n, r) {
  if (typeof t != "function") throw new TypeError("The listener must be a function");
  var i = new pl(t, n || f, r), o = Oe ? Oe + e : e;
  return f._events[o] ? f._events[o].fn ? f._events[o] = [f._events[o], i] : f._events[o].push(i) : (f._events[o] = i, f._eventsCount++), f;
}
function un(f, e) {
  --f._eventsCount === 0 ? f._events = new Dt() : delete f._events[e];
}
function Ee() {
  this._events = new Dt(), this._eventsCount = 0;
}
Ee.prototype.eventNames = function() {
  var e = [], t, n;
  if (this._eventsCount === 0) return e;
  for (n in t = this._events) fl.call(t, n) && e.push(Oe ? n.slice(1) : n);
  return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
};
Ee.prototype.listeners = function(e) {
  var t = Oe ? Oe + e : e, n = this._events[t];
  if (!n) return [];
  if (n.fn) return [n.fn];
  for (var r = 0, i = n.length, o = new Array(i); r < i; r++) o[r] = n[r].fn;
  return o;
};
Ee.prototype.listenerCount = function(e) {
  var t = Oe ? Oe + e : e, n = this._events[t];
  return n ? n.fn ? 1 : n.length : 0;
};
Ee.prototype.emit = function(e, t, n, r, i, o) {
  var l = Oe ? Oe + e : e;
  if (!this._events[l]) return false;
  var d = this._events[l], c = arguments.length, u, p;
  if (d.fn) {
    switch (d.once && this.removeListener(e, d.fn, void 0, true), c) {
      case 1:
        return d.fn.call(d.context), true;
      case 2:
        return d.fn.call(d.context, t), true;
      case 3:
        return d.fn.call(d.context, t, n), true;
      case 4:
        return d.fn.call(d.context, t, n, r), true;
      case 5:
        return d.fn.call(d.context, t, n, r, i), true;
      case 6:
        return d.fn.call(d.context, t, n, r, i, o), true;
    }
    for (p = 1, u = new Array(c - 1); p < c; p++) u[p - 1] = arguments[p];
    d.fn.apply(d.context, u);
  } else {
    var a = d.length, s;
    for (p = 0; p < a; p++) switch (d[p].once && this.removeListener(e, d[p].fn, void 0, true), c) {
      case 1:
        d[p].fn.call(d[p].context);
        break;
      case 2:
        d[p].fn.call(d[p].context, t);
        break;
      case 3:
        d[p].fn.call(d[p].context, t, n);
        break;
      case 4:
        d[p].fn.call(d[p].context, t, n, r);
        break;
      default:
        if (!u) for (s = 1, u = new Array(c - 1); s < c; s++) u[s - 1] = arguments[s];
        d[p].fn.apply(d[p].context, u);
    }
  }
  return true;
};
Ee.prototype.on = function(e, t, n) {
  return ya(this, e, t, n, false);
};
Ee.prototype.once = function(e, t, n) {
  return ya(this, e, t, n, true);
};
Ee.prototype.removeListener = function(e, t, n, r) {
  var i = Oe ? Oe + e : e;
  if (!this._events[i]) return this;
  if (!t) return un(this, i), this;
  var o = this._events[i];
  if (o.fn) o.fn === t && (!r || o.once) && (!n || o.context === n) && un(this, i);
  else {
    for (var l = 0, d = [], c = o.length; l < c; l++) (o[l].fn !== t || r && !o[l].once || n && o[l].context !== n) && d.push(o[l]);
    d.length ? this._events[i] = d.length === 1 ? d[0] : d : un(this, i);
  }
  return this;
};
Ee.prototype.removeAllListeners = function(e) {
  var t;
  return e ? (t = Oe ? Oe + e : e, this._events[t] && un(this, t)) : (this._events = new Dt(), this._eventsCount = 0), this;
};
Ee.prototype.off = Ee.prototype.removeListener;
Ee.prototype.addListener = Ee.prototype.on;
Ee.prefixed = Oe;
Ee.EventEmitter = Ee;
Oi = Ee;
var ht = {};
pt(ht, "ConnectionType", () => Ze);
pt(ht, "PeerErrorType", () => pe);
pt(ht, "BaseConnectionErrorType", () => It);
pt(ht, "DataConnectionErrorType", () => Bt);
pt(ht, "SerializationType", () => _t);
pt(ht, "SocketEventType", () => Xe);
pt(ht, "ServerMessageType", () => ye);
var Ze;
(function(f) {
  f.Data = "data", f.Media = "media";
})(Ze || (Ze = {}));
var pe;
(function(f) {
  f.BrowserIncompatible = "browser-incompatible", f.Disconnected = "disconnected", f.InvalidID = "invalid-id", f.InvalidKey = "invalid-key", f.Network = "network", f.PeerUnavailable = "peer-unavailable", f.SslUnavailable = "ssl-unavailable", f.ServerError = "server-error", f.SocketError = "socket-error", f.SocketClosed = "socket-closed", f.UnavailableID = "unavailable-id", f.WebRTC = "webrtc";
})(pe || (pe = {}));
var It;
(function(f) {
  f.NegotiationFailed = "negotiation-failed", f.ConnectionClosed = "connection-closed";
})(It || (It = {}));
var Bt;
(function(f) {
  f.NotOpenYet = "not-open-yet", f.MessageToBig = "message-too-big";
})(Bt || (Bt = {}));
var _t;
(function(f) {
  f.Binary = "binary", f.BinaryUTF8 = "binary-utf8", f.JSON = "json", f.None = "raw";
})(_t || (_t = {}));
var Xe;
(function(f) {
  f.Message = "message", f.Disconnected = "disconnected", f.Error = "error", f.Close = "close";
})(Xe || (Xe = {}));
var ye;
(function(f) {
  f.Heartbeat = "HEARTBEAT", f.Candidate = "CANDIDATE", f.Offer = "OFFER", f.Answer = "ANSWER", f.Open = "OPEN", f.Error = "ERROR", f.IdTaken = "ID-TAKEN", f.InvalidKey = "INVALID-KEY", f.Leave = "LEAVE", f.Expire = "EXPIRE";
})(ye || (ye = {}));
var Ai = {};
Ai = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
class hl extends Oi.EventEmitter {
  constructor(e, t, n, r, i, o = 5e3) {
    super(), this.pingInterval = o, this._disconnected = true, this._messagesQueue = [];
    const l = e ? "wss://" : "ws://";
    this._baseUrl = l + t + ":" + n + r + "peerjs?key=" + i;
  }
  start(e, t) {
    this._id = e;
    const n = `${this._baseUrl}&id=${e}&token=${t}`;
    this._socket || !this._disconnected || (this._socket = new WebSocket(n + "&version=" + Ai.version), this._disconnected = false, this._socket.onmessage = (r) => {
      let i;
      try {
        i = JSON.parse(r.data), Z.log("Server message received:", i);
      } catch {
        Z.log("Invalid server message", r.data);
        return;
      }
      this.emit(Xe.Message, i);
    }, this._socket.onclose = (r) => {
      this._disconnected || (Z.log("Socket closed.", r), this._cleanup(), this._disconnected = true, this.emit(Xe.Disconnected));
    }, this._socket.onopen = () => {
      this._disconnected || (this._sendQueuedMessages(), Z.log("Socket open"), this._scheduleHeartbeat());
    });
  }
  _scheduleHeartbeat() {
    this._wsPingTimer = setTimeout(() => {
      this._sendHeartbeat();
    }, this.pingInterval);
  }
  _sendHeartbeat() {
    if (!this._wsOpen()) {
      Z.log("Cannot send heartbeat, because socket closed");
      return;
    }
    const e = JSON.stringify({ type: ye.Heartbeat });
    this._socket.send(e), this._scheduleHeartbeat();
  }
  _wsOpen() {
    return !!this._socket && this._socket.readyState === 1;
  }
  _sendQueuedMessages() {
    const e = [...this._messagesQueue];
    this._messagesQueue = [];
    for (const t of e) this.send(t);
  }
  send(e) {
    if (this._disconnected) return;
    if (!this._id) {
      this._messagesQueue.push(e);
      return;
    }
    if (!e.type) {
      this.emit(Xe.Error, "Invalid message");
      return;
    }
    if (!this._wsOpen()) return;
    const t = JSON.stringify(e);
    this._socket.send(t);
  }
  close() {
    this._disconnected || (this._cleanup(), this._disconnected = true);
  }
  _cleanup() {
    this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
  }
}
class xa {
  constructor(e) {
    this.connection = e;
  }
  startConnection(e) {
    const t = this._startPeerConnection();
    if (this.connection.peerConnection = t, this.connection.type === Ze.Media && e._stream && this._addTracksToConnection(e._stream, t), e.originator) {
      const n = this.connection, r = { ordered: !!e.reliable }, i = t.createDataChannel(n.label, r);
      n._initializeDataChannel(i), this._makeOffer();
    } else this.handleSDP("OFFER", e.sdp);
  }
  _startPeerConnection() {
    Z.log("Creating RTCPeerConnection.");
    const e = new RTCPeerConnection(this.connection.provider.options.config);
    return this._setupListeners(e), e;
  }
  _setupListeners(e) {
    const t = this.connection.peer, n = this.connection.connectionId, r = this.connection.type, i = this.connection.provider;
    Z.log("Listening for ICE candidates."), e.onicecandidate = (o) => {
      !o.candidate || !o.candidate.candidate || (Z.log(`Received ICE candidates for ${t}:`, o.candidate), i.socket.send({ type: ye.Candidate, payload: { candidate: o.candidate, type: r, connectionId: n }, dst: t }));
    }, e.oniceconnectionstatechange = () => {
      switch (e.iceConnectionState) {
        case "failed":
          Z.log("iceConnectionState is failed, closing connections to " + t), this.connection.emitError(It.NegotiationFailed, "Negotiation of connection to " + t + " failed."), this.connection.close();
          break;
        case "closed":
          Z.log("iceConnectionState is closed, closing connections to " + t), this.connection.emitError(It.ConnectionClosed, "Connection to " + t + " closed."), this.connection.close();
          break;
        case "disconnected":
          Z.log("iceConnectionState changed to disconnected on the connection with " + t);
          break;
        case "completed":
          e.onicecandidate = () => {
          };
          break;
      }
      this.connection.emit("iceStateChanged", e.iceConnectionState);
    }, Z.log("Listening for data channel"), e.ondatachannel = (o) => {
      Z.log("Received data channel");
      const l = o.channel;
      i.getConnection(t, n)._initializeDataChannel(l);
    }, Z.log("Listening for remote stream"), e.ontrack = (o) => {
      Z.log("Received remote stream");
      const l = o.streams[0], d = i.getConnection(t, n);
      if (d.type === Ze.Media) {
        const c = d;
        this._addStreamToMediaConnection(l, c);
      }
    };
  }
  cleanup() {
    Z.log("Cleaning up PeerConnection to " + this.connection.peer);
    const e = this.connection.peerConnection;
    if (!e) return;
    this.connection.peerConnection = null, e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = () => {
    };
    const t = e.signalingState !== "closed";
    let n = false;
    const r = this.connection.dataChannel;
    r && (n = !!r.readyState && r.readyState !== "closed"), (t || n) && e.close();
  }
  async _makeOffer() {
    const e = this.connection.peerConnection, t = this.connection.provider;
    try {
      const n = await e.createOffer(this.connection.options.constraints);
      Z.log("Created offer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (n.sdp = this.connection.options.sdpTransform(n.sdp) || n.sdp);
      try {
        await e.setLocalDescription(n), Z.log("Set localDescription:", n, `for:${this.connection.peer}`);
        let r = { sdp: n, type: this.connection.type, connectionId: this.connection.connectionId, metadata: this.connection.metadata };
        if (this.connection.type === Ze.Data) {
          const i = this.connection;
          r = { ...r, label: i.label, reliable: i.reliable, serialization: i.serialization };
        }
        t.socket.send({ type: ye.Offer, payload: r, dst: this.connection.peer });
      } catch (r) {
        r != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" && (t.emitError(pe.WebRTC, r), Z.log("Failed to setLocalDescription, ", r));
      }
    } catch (n) {
      t.emitError(pe.WebRTC, n), Z.log("Failed to createOffer, ", n);
    }
  }
  async _makeAnswer() {
    const e = this.connection.peerConnection, t = this.connection.provider;
    try {
      const n = await e.createAnswer();
      Z.log("Created answer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (n.sdp = this.connection.options.sdpTransform(n.sdp) || n.sdp);
      try {
        await e.setLocalDescription(n), Z.log("Set localDescription:", n, `for:${this.connection.peer}`), t.socket.send({ type: ye.Answer, payload: { sdp: n, type: this.connection.type, connectionId: this.connection.connectionId }, dst: this.connection.peer });
      } catch (r) {
        t.emitError(pe.WebRTC, r), Z.log("Failed to setLocalDescription, ", r);
      }
    } catch (n) {
      t.emitError(pe.WebRTC, n), Z.log("Failed to create answer, ", n);
    }
  }
  async handleSDP(e, t) {
    t = new RTCSessionDescription(t);
    const n = this.connection.peerConnection, r = this.connection.provider;
    Z.log("Setting remote description", t);
    const i = this;
    try {
      await n.setRemoteDescription(t), Z.log(`Set remoteDescription:${e} for:${this.connection.peer}`), e === "OFFER" && await i._makeAnswer();
    } catch (o) {
      r.emitError(pe.WebRTC, o), Z.log("Failed to setRemoteDescription, ", o);
    }
  }
  async handleCandidate(e) {
    Z.log("handleCandidate:", e);
    try {
      await this.connection.peerConnection.addIceCandidate(e), Z.log(`Added ICE candidate for:${this.connection.peer}`);
    } catch (t) {
      this.connection.provider.emitError(pe.WebRTC, t), Z.log("Failed to handleCandidate, ", t);
    }
  }
  _addTracksToConnection(e, t) {
    if (Z.log(`add tracks from stream ${e.id} to peer connection`), !t.addTrack) return Z.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
    e.getTracks().forEach((n) => {
      t.addTrack(n, e);
    });
  }
  _addStreamToMediaConnection(e, t) {
    Z.log(`add stream ${e.id} to media connection ${t.connectionId}`), t.addStream(e);
  }
}
class wa extends Oi.EventEmitter {
  emitError(e, t) {
    Z.error("Error:", t), this.emit("error", new ml(`${e}`, t));
  }
}
class ml extends Error {
  constructor(e, t) {
    typeof t == "string" ? super(t) : (super(), Object.assign(this, t)), this.type = e;
  }
}
class Sa extends wa {
  get open() {
    return this._open;
  }
  constructor(e, t, n) {
    super(), this.peer = e, this.provider = t, this.options = n, this._open = false, this.metadata = n.metadata;
  }
}
class fn extends Sa {
  static #e = this.ID_PREFIX = "mc_";
  get type() {
    return Ze.Media;
  }
  get localStream() {
    return this._localStream;
  }
  get remoteStream() {
    return this._remoteStream;
  }
  constructor(e, t, n) {
    super(e, t, n), this._localStream = this.options._stream, this.connectionId = this.options.connectionId || fn.ID_PREFIX + De.randomToken(), this._negotiator = new xa(this), this._localStream && this._negotiator.startConnection({ _stream: this._localStream, originator: true });
  }
  _initializeDataChannel(e) {
    this.dataChannel = e, this.dataChannel.onopen = () => {
      Z.log(`DC#${this.connectionId} dc connection success`), this.emit("willCloseOnRemote");
    }, this.dataChannel.onclose = () => {
      Z.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
    };
  }
  addStream(e) {
    Z.log("Receiving stream", e), this._remoteStream = e, super.emit("stream", e);
  }
  handleMessage(e) {
    const t = e.type, n = e.payload;
    switch (e.type) {
      case ye.Answer:
        this._negotiator.handleSDP(t, n.sdp), this._open = true;
        break;
      case ye.Candidate:
        this._negotiator.handleCandidate(n.candidate);
        break;
      default:
        Z.warn(`Unrecognized message type:${t} from peer:${this.peer}`);
        break;
    }
  }
  answer(e, t = {}) {
    if (this._localStream) {
      Z.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
      return;
    }
    this._localStream = e, t && t.sdpTransform && (this.options.sdpTransform = t.sdpTransform), this._negotiator.startConnection({ ...this.options._payload, _stream: e });
    const n = this.provider._getMessages(this.connectionId);
    for (const r of n) this.handleMessage(r);
    this._open = true;
  }
  close() {
    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = false, super.emit("close"));
  }
}
class gl {
  constructor(e) {
    this._options = e;
  }
  _buildRequest(e) {
    const t = this._options.secure ? "https" : "http", { host: n, port: r, path: i, key: o } = this._options, l = new URL(`${t}://${n}:${r}${i}${o}/${e}`);
    return l.searchParams.set("ts", `${Date.now()}${Math.random()}`), l.searchParams.set("version", Ai.version), fetch(l.href, { referrerPolicy: this._options.referrerPolicy });
  }
  async retrieveId() {
    try {
      const e = await this._buildRequest("id");
      if (e.status !== 200) throw new Error(`Error. Status:${e.status}`);
      return e.text();
    } catch (e) {
      Z.error("Error retrieving ID", e);
      let t = "";
      throw this._options.path === "/" && this._options.host !== De.CLOUD_HOST && (t = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + t);
    }
  }
  async listAllPeers() {
    try {
      const e = await this._buildRequest("peers");
      if (e.status !== 200) {
        if (e.status === 401) {
          let t = "";
          throw this._options.host === De.CLOUD_HOST ? t = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : t = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + t);
        }
        throw new Error(`Error. Status:${e.status}`);
      }
      return e.json();
    } catch (e) {
      throw Z.error("Error retrieving list peers", e), new Error("Could not get list peers from the server." + e);
    }
  }
}
class pn extends Sa {
  static #e = this.ID_PREFIX = "dc_";
  static #t = this.MAX_BUFFERED_AMOUNT = 8388608;
  get type() {
    return Ze.Data;
  }
  constructor(e, t, n) {
    super(e, t, n), this.connectionId = this.options.connectionId || pn.ID_PREFIX + ba(), this.label = this.options.label || this.connectionId, this.reliable = !!this.options.reliable, this._negotiator = new xa(this), this._negotiator.startConnection(this.options._payload || { originator: true, reliable: this.reliable });
  }
  _initializeDataChannel(e) {
    this.dataChannel = e, this.dataChannel.onopen = () => {
      Z.log(`DC#${this.connectionId} dc connection success`), this._open = true, this.emit("open");
    }, this.dataChannel.onmessage = (t) => {
      Z.log(`DC#${this.connectionId} dc onmessage:`, t.data);
    }, this.dataChannel.onclose = () => {
      Z.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
    };
  }
  close(e) {
    if (e?.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this.dataChannel = null), this.open && (this._open = false, super.emit("close"));
  }
  send(e, t = false) {
    if (!this.open) {
      this.emitError(Bt.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
      return;
    }
    return this._send(e, t);
  }
  async handleMessage(e) {
    const t = e.payload;
    switch (e.type) {
      case ye.Answer:
        await this._negotiator.handleSDP(e.type, t.sdp);
        break;
      case ye.Candidate:
        await this._negotiator.handleCandidate(t.candidate);
        break;
      default:
        Z.warn("Unrecognized message type:", e.type, "from peer:", this.peer);
        break;
    }
  }
}
class Ri extends pn {
  get bufferSize() {
    return this._bufferSize;
  }
  _initializeDataChannel(e) {
    super._initializeDataChannel(e), this.dataChannel.binaryType = "arraybuffer", this.dataChannel.addEventListener("message", (t) => this._handleDataMessage(t));
  }
  _bufferedSend(e) {
    (this._buffering || !this._trySend(e)) && (this._buffer.push(e), this._bufferSize = this._buffer.length);
  }
  _trySend(e) {
    if (!this.open) return false;
    if (this.dataChannel.bufferedAmount > pn.MAX_BUFFERED_AMOUNT) return this._buffering = true, setTimeout(() => {
      this._buffering = false, this._tryBuffer();
    }, 50), false;
    try {
      this.dataChannel.send(e);
    } catch (t) {
      return Z.error(`DC#:${this.connectionId} Error when sending:`, t), this._buffering = true, this.close(), false;
    }
    return true;
  }
  _tryBuffer() {
    if (!this.open || this._buffer.length === 0) return;
    const e = this._buffer[0];
    this._trySend(e) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
  }
  close(e) {
    if (e?.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    this._buffer = [], this._bufferSize = 0, super.close();
  }
  constructor(...e) {
    super(...e), this._buffer = [], this._bufferSize = 0, this._buffering = false;
  }
}
class Mn extends Ri {
  close(e) {
    super.close(e), this._chunkedData = {};
  }
  constructor(e, t, n) {
    super(e, t, n), this.chunker = new va(), this.serialization = _t.Binary, this._chunkedData = {};
  }
  _handleDataMessage({ data: e }) {
    const t = zs(e), n = t.__peerData;
    if (n) {
      if (n.type === "close") {
        this.close();
        return;
      }
      this._handleChunk(t);
      return;
    }
    this.emit("data", t);
  }
  _handleChunk(e) {
    const t = e.__peerData, n = this._chunkedData[t] || { data: [], count: 0, total: e.total };
    if (n.data[e.n] = new Uint8Array(e.data), n.count++, this._chunkedData[t] = n, n.total === n.count) {
      delete this._chunkedData[t];
      const r = ol(n.data);
      this._handleDataMessage({ data: r });
    }
  }
  _send(e, t) {
    const n = $s(e);
    if (n instanceof Promise) return this._send_blob(n);
    if (!t && n.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(n);
      return;
    }
    this._bufferedSend(n);
  }
  async _send_blob(e) {
    const t = await e;
    if (t.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(t);
      return;
    }
    this._bufferedSend(t);
  }
  _sendChunks(e) {
    const t = this.chunker.chunk(e);
    Z.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);
    for (const n of t) this.send(n, true);
  }
}
class vl extends Ri {
  _handleDataMessage({ data: e }) {
    super.emit("data", e);
  }
  _send(e, t) {
    this._bufferedSend(e);
  }
  constructor(...e) {
    super(...e), this.serialization = _t.None;
  }
}
class bl extends Ri {
  _handleDataMessage({ data: e }) {
    const t = this.parse(this.decoder.decode(e)), n = t.__peerData;
    if (n && n.type === "close") {
      this.close();
      return;
    }
    this.emit("data", t);
  }
  _send(e, t) {
    const n = this.encoder.encode(this.stringify(e));
    if (n.byteLength >= De.chunkedMTU) {
      this.emitError(Bt.MessageToBig, "Message too big for JSON channel");
      return;
    }
    this._bufferedSend(n);
  }
  constructor(...e) {
    super(...e), this.serialization = _t.JSON, this.encoder = new TextEncoder(), this.decoder = new TextDecoder(), this.stringify = JSON.stringify, this.parse = JSON.parse;
  }
}
class Di extends wa {
  static #e = this.DEFAULT_KEY = "peerjs";
  get id() {
    return this._id;
  }
  get options() {
    return this._options;
  }
  get open() {
    return this._open;
  }
  get socket() {
    return this._socket;
  }
  get connections() {
    const e = /* @__PURE__ */ Object.create(null);
    for (const [t, n] of this._connections) e[t] = n;
    return e;
  }
  get destroyed() {
    return this._destroyed;
  }
  get disconnected() {
    return this._disconnected;
  }
  constructor(e, t) {
    super(), this._serializers = { raw: vl, json: bl, binary: Mn, "binary-utf8": Mn, default: Mn }, this._id = null, this._lastServerId = null, this._destroyed = false, this._disconnected = false, this._open = false, this._connections = /* @__PURE__ */ new Map(), this._lostMessages = /* @__PURE__ */ new Map();
    let n;
    if (e && e.constructor == Object ? t = e : e && (n = e.toString()), t = { debug: 0, host: De.CLOUD_HOST, port: De.CLOUD_PORT, path: "/", key: Di.DEFAULT_KEY, token: De.randomToken(), config: De.defaultConfig, referrerPolicy: "strict-origin-when-cross-origin", serializers: {}, ...t }, this._options = t, this._serializers = { ...this._serializers, ...this.options.serializers }, this._options.host === "/" && (this._options.host = window.location.hostname), this._options.path && (this._options.path[0] !== "/" && (this._options.path = "/" + this._options.path), this._options.path[this._options.path.length - 1] !== "/" && (this._options.path += "/")), this._options.secure === void 0 && this._options.host !== De.CLOUD_HOST ? this._options.secure = De.isSecure() : this._options.host == De.CLOUD_HOST && (this._options.secure = true), this._options.logFunction && Z.setLogFunction(this._options.logFunction), Z.logLevel = this._options.debug || 0, this._api = new gl(t), this._socket = this._createServerConnection(), !De.supports.audioVideo && !De.supports.data) {
      this._delayedAbort(pe.BrowserIncompatible, "The current browser does not support WebRTC");
      return;
    }
    if (n && !De.validateId(n)) {
      this._delayedAbort(pe.InvalidID, `ID "${n}" is invalid`);
      return;
    }
    n ? this._initialize(n) : this._api.retrieveId().then((r) => this._initialize(r)).catch((r) => this._abort(pe.ServerError, r));
  }
  _createServerConnection() {
    const e = new hl(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
    return e.on(Xe.Message, (t) => {
      this._handleMessage(t);
    }), e.on(Xe.Error, (t) => {
      this._abort(pe.SocketError, t);
    }), e.on(Xe.Disconnected, () => {
      this.disconnected || (this.emitError(pe.Network, "Lost connection to server."), this.disconnect());
    }), e.on(Xe.Close, () => {
      this.disconnected || this._abort(pe.SocketClosed, "Underlying socket is already closed.");
    }), e;
  }
  _initialize(e) {
    this._id = e, this.socket.start(e, this._options.token);
  }
  _handleMessage(e) {
    const t = e.type, n = e.payload, r = e.src;
    switch (t) {
      case ye.Open:
        this._lastServerId = this.id, this._open = true, this.emit("open", this.id);
        break;
      case ye.Error:
        this._abort(pe.ServerError, n.msg);
        break;
      case ye.IdTaken:
        this._abort(pe.UnavailableID, `ID "${this.id}" is taken`);
        break;
      case ye.InvalidKey:
        this._abort(pe.InvalidKey, `API KEY "${this._options.key}" is invalid`);
        break;
      case ye.Leave:
        Z.log(`Received leave message from ${r}`), this._cleanupPeer(r), this._connections.delete(r);
        break;
      case ye.Expire:
        this.emitError(pe.PeerUnavailable, `Could not connect to peer ${r}`);
        break;
      case ye.Offer: {
        const i = n.connectionId;
        let o = this.getConnection(r, i);
        if (o && (o.close(), Z.warn(`Offer received for existing Connection ID:${i}`)), n.type === Ze.Media) {
          const d = new fn(r, this, { connectionId: i, _payload: n, metadata: n.metadata });
          o = d, this._addConnection(r, o), this.emit("call", d);
        } else if (n.type === Ze.Data) {
          const d = new this._serializers[n.serialization](r, this, { connectionId: i, _payload: n, metadata: n.metadata, label: n.label, serialization: n.serialization, reliable: n.reliable });
          o = d, this._addConnection(r, o), this.emit("connection", d);
        } else {
          Z.warn(`Received malformed connection type:${n.type}`);
          return;
        }
        const l = this._getMessages(i);
        for (const d of l) o.handleMessage(d);
        break;
      }
      default: {
        if (!n) {
          Z.warn(`You received a malformed message from ${r} of type ${t}`);
          return;
        }
        const i = n.connectionId, o = this.getConnection(r, i);
        o && o.peerConnection ? o.handleMessage(e) : i ? this._storeMessage(i, e) : Z.warn("You received an unrecognized message:", e);
        break;
      }
    }
  }
  _storeMessage(e, t) {
    this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(t);
  }
  _getMessages(e) {
    const t = this._lostMessages.get(e);
    return t ? (this._lostMessages.delete(e), t) : [];
  }
  connect(e, t = {}) {
    if (t = { serialization: "default", ...t }, this.disconnected) {
      Z.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), this.emitError(pe.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    const n = new this._serializers[t.serialization](e, this, t);
    return this._addConnection(e, n), n;
  }
  call(e, t, n = {}) {
    if (this.disconnected) {
      Z.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), this.emitError(pe.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    if (!t) {
      Z.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
      return;
    }
    const r = new fn(e, this, { ...n, _stream: t });
    return this._addConnection(e, r), r;
  }
  _addConnection(e, t) {
    Z.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`), this._connections.has(e) || this._connections.set(e, []), this._connections.get(e).push(t);
  }
  _removeConnection(e) {
    const t = this._connections.get(e.peer);
    if (t) {
      const n = t.indexOf(e);
      n !== -1 && t.splice(n, 1);
    }
    this._lostMessages.delete(e.connectionId);
  }
  getConnection(e, t) {
    const n = this._connections.get(e);
    if (!n) return null;
    for (const r of n) if (r.connectionId === t) return r;
    return null;
  }
  _delayedAbort(e, t) {
    setTimeout(() => {
      this._abort(e, t);
    }, 0);
  }
  _abort(e, t) {
    Z.error("Aborting!"), this.emitError(e, t), this._lastServerId ? this.disconnect() : this.destroy();
  }
  destroy() {
    this.destroyed || (Z.log(`Destroy peer with ID:${this.id}`), this.disconnect(), this._cleanup(), this._destroyed = true, this.emit("close"));
  }
  _cleanup() {
    for (const e of this._connections.keys()) this._cleanupPeer(e), this._connections.delete(e);
    this.socket.removeAllListeners();
  }
  _cleanupPeer(e) {
    const t = this._connections.get(e);
    if (t) for (const n of t) n.close();
  }
  disconnect() {
    if (this.disconnected) return;
    const e = this.id;
    Z.log(`Disconnect peer with ID:${e}`), this._disconnected = true, this._open = false, this.socket.close(), this._lastServerId = e, this._id = null, this.emit("disconnected", e);
  }
  reconnect() {
    if (this.disconnected && !this.destroyed) Z.log(`Attempting reconnection to server with ID ${this._lastServerId}`), this._disconnected = false, this._initialize(this._lastServerId);
    else {
      if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
      if (!this.disconnected && !this.open) Z.error("In a hurry? We're still trying to make the initial connection!");
      else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
    }
  }
  listAllPeers(e = (t) => {
  }) {
    this._api.listAllPeers().then((t) => e(t)).catch((t) => this._abort(pe.ServerError, t));
  }
}
class yl extends bo {
  constructor() {
    super(), this.connections = /* @__PURE__ */ new Map(), this.prefix = "boxel-3d";
  }
  open(e) {
    e == null && (e = gn.generateUUID()), e = (this.prefix + "-" + e).toLowerCase(), this.peer && this.peer.destroy(), this.peer = new Di(e), this.addPeerListeners(this.peer);
  }
  connect(e, t) {
    e = (this.prefix + "-" + e).toLowerCase();
    var n = this.peer.connect(e, t);
    this.addConnectionListeners(n), this.dispatchEvent({ type: "connection_start", connection: n }), this.connections.clear();
  }
  disconnect() {
    this.peer.disconnect();
  }
  destroy() {
    this.peer.destroy();
  }
  addPeerListeners(e) {
    e.on("open", function(t) {
      this.dispatchEvent({ type: "peer_open", id: t });
    }.bind(this)), e.on("connection", function(t) {
      this.addConnectionListeners(t), this.dispatchEvent({ type: "peer_connection", connection: t });
    }.bind(this)), e.on("close", function() {
      this.connections.clear(), this.dispatchEvent({ type: "peer_close", target: this });
    }.bind(this)), e.on("disconnected", function() {
      this.dispatchEvent({ type: "peer_disconnected" });
    }.bind(this)), e.on("error", function(t) {
      this.dispatchEvent({ type: "peer_error", error: t });
    }.bind(this));
  }
  addConnectionListeners(e) {
    e.on("open", function() {
      this.connections.set(e.peer, e), this.dispatchEvent({ type: "connection_open", connection: e });
    }.bind(this)), e.on("close", function() {
      this.connections.delete(e.peer), this.dispatchEvent({ type: "connection_close", connection: e });
    }.bind(this)), e.on("data", function(t) {
      this.dispatchEvent({ type: "connection_data", connection: e, data: t });
    }.bind(this)), e.on("error", function(t) {
      this.dispatchEvent({ type: "connection_error", connection: e, error: t });
    });
  }
  on(e, t) {
    this.addEventListener(e, t);
  }
  off(e, t) {
    this.removeEventListener(e, t);
  }
  isOnline() {
    return this.peer != null && this.peer.open == true;
  }
}
class xl {
  constructor() {
    this.window = window, this.document = document, this.BOX_SIZE = 16, this.screenWidth = this.window.innerWidth, this.screenHeight = this.window.innerHeight, this.engine = K.Engine.create(), this.util = new Rs(), this.state = "home", this.animation = new Ao(), this.storage = new uu(), this.collision = new lu(), this.player = new Li({ x: 0, y: 0, z: 0 }), this.play = false, this.fov = 75, this.scene = new _s(), this.mouse = new Vu(), this.window.Matter = { Composite: K.Composite, Bodies: K.Bodies, Body: K.Body }, this.timer = new Ro(), this.loop = new nu(), this.then = (/* @__PURE__ */ new Date()).getTime(), this.now = this.then, this.delta = 0, this.assets = new tu(), this.level = new qu(), this.levelHistory = new Hu(), this.scene.add(this.level), this.camera = new ks(this.fov, this.screenWidth / this.screenHeight, 1, 2e3), this.camera.tilt = 0, this.camera.position.x = 0, this.camera.position.y = 0, this.camera.position.zDefault = 180, this.camera.position.z = this.camera.position.zDefault, this.light = new yo("#ffffff", "#000000", 1 * Math.PI), this.light.position.set(0.25, 0.5, 1), this.scene.add(this.light), this.background = new cu(), this.scene.add(this.background), this.network = new yl(), this.multiplayer = new Ju(this.network), this.scene.add(this.multiplayer.players);
  }
  init(e, t = function() {
  }) {
    this.graphics = new su(e), this.graphics.setCamera(this.camera), this.graphics.setScene(this.scene), this.graphics.setSelectedObjects([this.level]), this.levelEditor = new Gu(this.camera, e), this.scene.add(this.levelEditor.controlsTransform.getHelper()), this.canvas = e, this.canvas.classList.add("hidden"), this.canvas.addEventListener("contextmenu", function(n) {
      n.preventDefault();
    }, false), this.canvas.addEventListener("pointerdown", function(n) {
      this.mouse.mouseDown(n, this);
    }.bind(this), false), this.canvas.addEventListener("pointermove", function(n) {
      this.mouse.mouseMove(n, this);
    }.bind(this), false), this.canvas.addEventListener("pointerup", function(n) {
      this.mouse.mouseUp(n, this);
    }.bind(this), false), this.canvas.addEventListener("wheel", function(n) {
      this.mouse.wheel(n, this);
    }.bind(this), false), this.window.addEventListener("resize", function(n) {
      this.resizeWindow(n, this);
    }.bind(this)), K.Events.on(this.engine, "collisionStart", function(n) {
      this.collision.checkPlayerCollision(n, this);
    }.bind(this)), this.assets.load(function() {
      this.load(t), this.updateSettings(null, this);
    }.bind(this));
  }
  load(e = function() {
  }) {
    var t = app.storage.getSettings(app);
    this.assets.audio.play(t.music, { queue: true }), this.background.setTarget(this.player), this.background.init(), this.resizeWindow(null, this), this.loop.add(function(n) {
      this.updateEngine(n.delta, n.alpha);
    }.bind(this), 60), this.loop.add(function(n) {
      this.updateRender(n.delta, n.alpha);
    }.bind(this), -1), this.multiplayer.setTick(8), this.loop.add(function(n) {
      this.updateNetwork(n.delta, n.alpha);
    }.bind(this), 8), this.loop.start(), e();
  }
  updateEngine(e) {
    this.play == true && (this.player.updateControls(), this.player.updateForce(), this.player.renderSpeed(this), this.player.updateRope(), K.Engine.update(this.engine, e * 1e3));
  }
  updateRender(e, t) {
    this.play == true && (this.updateChildren(e, t), this.updateCamera(this), this.timer.render(), this.background.update(e, t, app.motion == false), this.animation.update(e, t), this.graphics.update(e)), this.multiplayer.render(e, t);
  }
  updateChildren(e, t) {
    for (var n = this.level.children.length - 1; n >= 0; ) {
      var r = this.level.children[n];
      r.body != null && r.isFrozen() == false && r.update(e, t), n--;
    }
  }
  updateNetwork(e, t) {
    this.multiplayer.update(e, t);
  }
  resizeWindow(e, t = app) {
    var n = t.window.innerWidth, r = t.window.innerHeight;
    t.camera.aspect = n / r, t.camera.updateProjectionMatrix(), t.graphics.setSize(n, r);
  }
  resetScene(e = app) {
    app.camera.position.z = app.camera.position.zDefault, e.level.removeParticles(e), e.level.resetLevel(), e.updateRender(null, 0), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  updateCamera(e) {
    e.camera.position.x = e.player.position.x, e.camera.position.y = e.player.position.y + e.camera.tilt;
  }
  updateSettings(e, t = app) {
    var n = t.storage.getSettings(t);
    e == null && (e = n), Object.keys(n).forEach(function(r) {
      e[r] == null && (e[r] = n[r]);
    }), t.assets.audio.setMasterVolume(e.volume, "master"), t.assets.audio.setMasterVolume(e.volumeEffects, "effects"), t.assets.audio.setMasterVolume(e.volumeMusic, "music"), t.updateQuality(e.quality, t), t.mouse.setSnap(e.snap), t.player.setSkin(e.skin, t), t.player.setInputBuffer(e.buffer, t), t.storage.setSettings(e), t.updateCameraMotion(e.motion, t), window.dispatchEvent(new CustomEvent("updateStatsVisibility"));
  }
  updateGravity(e) {
    var t = this.util.getVectorFromAngle(e), n = app.engine.world.gravity, r = 1;
    n.x = t.x, n.y = t.y, e != null && app.motion == true ? (e *= -1, e < 0 && (app.camera.rotation.z = (app.camera.rotation.z - Math.PI * 2) % (Math.PI * 2)), r = Math.abs((e + Math.PI) % Math.PI) / (Math.PI / 2) + 1, app.animation.tween({ object: app.camera.rotation, to: { z: e }, duration: 250 }).start(), app.background.animateScale(r)) : (app.camera.rotation.z = 0, app.background.animateScale(1));
  }
  updateQuality(e, t = app) {
    e <= 0 && (e = 1), t.graphics.setPixelRatio(t.window.devicePixelRatio / (10 / e));
  }
  updateCameraMotion(e, t = app) {
    t.motion = e;
  }
  exitCampaign() {
    app.play = false, app.resetScene(app), app.level.clearLevel(app), app.player.removeCheckpoint(), app.player.setPosition({ x: 0, y: 0, z: 0 }), window.dispatchEvent(new CustomEvent("setPage", { detail: "level-picker" })), window.dispatchEvent(new CustomEvent("closePopup"));
  }
  startLevel() {
    app.play = true, app.timer.start(), this.assets.audio.play("jump");
  }
  async playLevel(e) {
    if (e.json == null) {
      e.path == null && (e.path = "../json/levels/" + e.title + ".json");
      try {
        const l = await fetch(e.path);
        e.json = await l.json();
      } catch (l) {
        console.error(l);
      }
    }
    if (e.json) {
      var t = app.storage.getSettings(app), n = e.json.name, r = app.level.getDescriptionByTitle(n), i = app.level.getAuthorByTitle(n), o = app.level.getTheme(e.json.theme);
      o == null && (o = app.level.getPackTheme(n)), (t.theme == "origin" || o == null) && (o = app.level.getTheme("classic")), app.level.entityFactory.color = o.color, o.fog ? (app.graphics.fog.color.set(o.fog.color), app.graphics.fog.near = o.fog.near || 0.01, app.graphics.fog.far = o.fog.far || 240) : (app.graphics.fog.color.set("#ffffff"), app.graphics.fog.near = app.graphics.fog.far = 9999), app.background.setTheme(o.model), app.updateGravity(), app.play = true, app.timer.reset(), app.level.clearLevel(app), app.level.importFromJSON(e.json, app), app.level.publishedFileId = e.publishedFileId, app.background.visible = true, app.startLevel(), app.resetScene(), window.dispatchEvent(new CustomEvent("levelStart", { detail: { title: n, description: r } })), setTimeout(function() {
        i && window.dispatchEvent(new CustomEvent("setCredit", { detail: { text: "Level by " + i } }));
      }, 500);
    }
    return e.json;
  }
  pauseLevel() {
    app.timer.pause(), app.play = false;
  }
  resumeLevel() {
    app.timer.start(), app.play = true, window.dispatchEvent(new CustomEvent("closePopup"));
  }
  showCanvas() {
    app.canvas.classList.remove("hidden");
  }
  hideCanvas() {
    app.canvas.classList.add("hidden");
  }
}
const wl = { key: 0, src: "../svg/grow.svg" }, Sl = { key: 1, src: "../svg/shrink.svg" }, Cl = { __name: "OriginButtonFullscreen", setup(f) {
  const e = V(false);
  document.addEventListener("fullscreenchange", function() {
    e.value = n();
  });
  function t() {
    return window.chrome?.extension;
  }
  function n() {
    return document.fullscreenElement != null;
  }
  function r(o) {
    chrome.tabs ? chrome.tabs.create({ url: o }) : window.open(o, "_blank");
  }
  function i() {
    if (t() && window.location.href.includes("?tab=true") == false) {
      r(window.location.href + "?tab=true");
      return;
    }
    n() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (o, l) => (D(), z("a", { class: "button top-right four", onClick: i, title: "Fullscreen (F11)" }, [e.value == false ? (D(), z("img", wl)) : (D(), z("img", Sl))]));
} }, vn = { __name: "OriginButtonSettings", setup(f) {
  function e() {
    var n = app.storage.getSettings(app), r = [{ label: "Master Volume", name: "volume", type: "range", min: 0, max: 1, step: 0.1, value: n.volume, callback: function(i) {
      t("volume", i.target.value);
    } }, { label: "Graphic Quality", name: "quality", type: "range", min: 2, max: 10, value: n.quality, callback: function(i) {
      t("quality", parseInt(i.target.value));
    } }, { label: "Camera Motion", name: "motion", type: "range", min: 0, max: 1, value: n.motion == true ? 1 : 0, callback: function(i) {
      t("motion", i.target.value == "1");
    } }, { label: "Show FPS", name: "stats", type: "range", min: 0, max: 1, value: n.stats == true ? 1 : 0, callback: function(i) {
      t("stats", i.target.value == "1");
    } }, { label: "New UI", name: "theme", type: "range", min: 0, max: 1, value: n.theme == "bubble" ? 1 : 0, callback: function(i) {
      t("theme", i.target.value == "1" ? "bubble" : "origin"), window.dispatchEvent(new CustomEvent("setTheme"));
    } }];
    app.state == "level-manager" || app.state == "level-editor" ? r.push({ label: "Editor Snap", name: "snap", type: "range", min: 0, max: 16, step: 4, value: n.snap, callback: function(i) {
      var o = Number(i.target.value);
      o == 0 && (o = 1), i.target.title = o, t("snap", o);
    } }) : app.state == "campaign" && (app.timer.pause(), app.play = false), r.push({ type: "button", value: "Close", callback: function(i) {
      app.state == "campaign" && app.resumeLevel(), window.dispatchEvent(new CustomEvent("closePopup"));
    } }), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<img src="../svg/gear.svg">', inputs: r } }));
  }
  function t(n, r) {
    var i = app.storage.getSettings(app);
    i[n] = r, app.updateSettings(i);
  }
  return (n, r) => (D(), z("a", { onClick: e, title: "Settings" }, r[0] || (r[0] = [_("img", { src: "../svg/gear.svg" }, null, -1)])));
} }, kl = { class: "home dashboard" }, _l = { class: "wrapper fade-in" }, El = { class: "message-bar" }, Tl = { class: "message" }, Pl = ["innerHTML"], Ll = { class: "buttons" }, Ml = { __name: "OriginPageHome", setup(f) {
  var e = V(), t = V(), n = V("You are currently using the old UI");
  async function r() {
    var a = await fetch("../manifest.json"), s = await a.json();
    e.value = s, t.value = s.version;
  }
  function i() {
    window.location.href = "../index.html";
  }
  function o() {
    var a = [{ value: "Backup to file", type: "button", style: "width: 100%", callback: app.storage.backupToFile }, { value: "Restore from file", type: "button", style: "width: 100%", callback: app.storage.restoreFromFile }, { value: "Close", type: "button" }];
    window.chrome?.storage && a.unshift({ value: "Backup to Google", type: "button", style: "width: 100%", callback: app.storage.backupToChrome }, { value: "Restore from Google", type: "button", style: "width: 100%", callback: app.storage.restoreFromChrome }), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<img src="../svg/cloud-check.svg">', inputs: a } }));
  }
  async function l() {
    const a = await fetch("../json/changelog.json").then(function(g) {
      if (g.ok) return g.json();
      throw new Error("Something went wrong");
    }).then(function(g) {
      return g;
    }.bind(this)).catch(function(g) {
      console.error(g);
    });
    for (var s = "", m = a.length - 1; m >= 0; m--) {
      var h = a[m];
      s += "v" + h.version + `
`, h.revisions.forEach(function(g) {
        s += "- " + g + `
`;
      }), s += `
`;
    }
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<div style="text-align: left;">' + s + "</div>", inputs: [{ type: "button", value: "Close" }] } }));
  }
  function d(a) {
    var s = document.querySelector(a);
    s.focus();
  }
  function c() {
    window.addEventListener("keydown", p);
  }
  function u() {
    window.removeEventListener("keydown", p);
  }
  function p(a) {
  }
  return de(function() {
    r(), d(".focus"), c(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "home" }));
  }), fe(function() {
    u();
  }), (a, s) => (D(), z("div", kl, [s[11] || (s[11] = _("div", { class: "background-cubes" }, null, -1)), _("a", { class: "version fade-in", onClick: l }, "v" + H(A(t)), 1), _("div", _l, [s[10] || (s[10] = _("img", { src: "../svg/logo-white.svg", class: "logo" }, null, -1)), _("div", El, [_("div", Tl, [s[3] || (s[3] = _("img", { class: "google-icon", src: "../svg/light.svg" }, null, -1)), s[4] || (s[4] = he()), _("span", { class: "message-text", innerHTML: A(n) }, null, 8, Pl)])]), _("div", Ll, [ie(Cl, { class: "button top-right" }), _("a", { class: "button top-right three", onClick: i, title: "Go back" }, s[5] || (s[5] = [_("img", { src: "../svg/back.svg" }, null, -1)])), _("a", { class: "button top-right two", onClick: o, title: "Account" }, s[6] || (s[6] = [_("img", { src: "../svg/cloud-check.svg" }, null, -1)])), ie(vn, { class: "button top-right" }), _("a", { class: "button", onClick: s[0] || (s[0] = (m) => a.$emit("setPage", "level-manager")), tabindex: "0" }, s[7] || (s[7] = [_("span", null, "Level Maker", -1), he(), _("img", { src: "../svg/pencil.svg" }, null, -1)])), _("a", { class: "button", onClick: s[1] || (s[1] = (m) => a.$emit("setPage", "skins")), tabindex: "0" }, s[8] || (s[8] = [_("span", null, "Skins", -1), he(), _("img", { src: "../svg/smile.svg" }, null, -1)])), _("a", { class: "button focus", onClick: s[2] || (s[2] = (m) => a.$emit("setPage", "level-picker")), tabindex: "0" }, s[9] || (s[9] = [_("span", null, "Play", -1), he(), _("img", { src: "../svg/play.svg" }, null, -1)]))])])]));
} }, Ol = { class: "level-picker dashboard" }, Al = { class: "wrapper fade-in" }, Rl = { class: "levels" }, Dl = { class: "list" }, Il = { key: 0 }, Bl = { key: 1, class: "buttons" }, zl = ["href", "target"], $l = ["src"], Nl = ["title", "onClick"], jl = { key: 0, class: "index" }, Fl = { key: 1, class: "score" }, Ul = { class: "title" }, ql = { __name: "OriginPageLevelPicker", emits: ["setPage"], setup(f, { emit: e }) {
  var t = app.storage.getScores(), n = app.storage.getSettings(), r = parseInt(n.progress), i = p(r - 1), o = e;
  function l() {
    window.addEventListener("keydown", h);
  }
  function d() {
    window.removeEventListener("keydown", h);
  }
  async function c(g) {
    await app.playLevel({ ...g }), o("setPage", "campaign"), n.progress = app.level.getLevelIndex(g.title) + 1, app.updateSettings(n);
  }
  function u(g) {
    return t[g];
  }
  function p(g) {
    var v, x = 0, w = {};
    return Ne.packs.forEach(function(y) {
      y.levels.forEach(function(b) {
        w = b, g == x && (v = b.title), x++;
      });
    }), v == null && (v = w.title), v;
  }
  function a() {
    var g = document.querySelector("[title='" + i + "']");
    g && (g.focus(), g.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
  function s() {
    o("setPage", "home");
  }
  function m(g) {
    i = g.target.getAttribute("title");
  }
  function h(g) {
    var v = ["Space", "Enter", "ArrowUp", "KeyW"];
    if (v.indexOf(g.code) > -1) {
      g.preventDefault();
      var x = document.querySelector("[title='" + i + "']");
      x == document.activeElement && x.click();
    }
    (g.code == "Escape" || g.code == "KeyE") && (g.preventDefault(), s());
  }
  return de(function() {
    a(), l(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-picker" }));
  }), fe(function() {
    d();
  }), (g, v) => (D(), z("div", Ol, [v[4] || (v[4] = _("div", { class: "background-cubes" }, null, -1)), _("div", Al, [v[3] || (v[3] = _("h1", null, [he("Level"), _("strong", null, "Packs")], -1)), _("div", { class: "buttons" }, [_("a", { class: "button top-left", onClick: s, title: "Exit to home (ESC)" }, v[1] || (v[1] = [_("img", { src: "../svg/home.svg" }, null, -1)]))]), _("div", Rl, [_("div", Dl, [(D(true), z(ce, null, ke(A(Ne).packs, (x, w) => (D(), z(ce, null, [_("h2", null, H(x.title), 1), x.description ? (D(), z("p", Il, H(x.description), 1)) : J("", true), x.links ? (D(), z("div", Bl, [(D(true), z(ce, null, ke(x.links, (y) => (D(), z("a", { class: Y(["button", y.class]), href: y.url, target: y.target }, [_("span", null, H(y.text), 1), v[2] || (v[2] = he()), y.icon ? (D(), z("img", { key: 0, src: "./" + y.icon }, null, 8, $l)) : J("", true)], 10, zl))), 256))])) : J("", true), (D(true), z(ce, null, ke(x.levels, (y, b) => (D(), z("div", { class: Y(["level", { completed: u(y.publishedFileId || y.title) }]), title: y.title, onClick: (S) => c(y), tabindex: "0", onFocus: v[0] || (v[0] = (S) => m(S)) }, [y.label ? (D(), z("span", jl, H(y.label), 1)) : J("", true), u(y.publishedFileId || y.title) ? (D(), z("span", Fl, H(u(y.publishedFileId || y.title)), 1)) : J("", true), _("span", Ul, H(y.description), 1)], 42, Nl))), 256))], 64))), 256))])])])]));
} }, Hl = { key: 0, class: "controls" }, Vl = { class: "wasd" }, Gl = { class: "row" }, Ca = { __name: "OriginControls", setup(f) {
  var e = V({}), t = V(false);
  function n() {
    window.addEventListener("keydown", i), window.addEventListener("keyup", o), window.addEventListener("setMode", d);
  }
  function r() {
    window.removeEventListener("keydown", i), window.removeEventListener("keyup", o), window.removeEventListener("setMode", d);
  }
  function i(c) {
    e.value[c.code] = true;
  }
  function o(c) {
    e.value[c.code] = false;
  }
  function l(c, u) {
    window.dispatchEvent(new KeyboardEvent(c, { code: u })), e.value[u] = c == "keydown";
  }
  function d(c) {
    var u = c.detail;
    u == "control" ? t.value = true : t.value = false;
  }
  return de(function() {
    n();
  }), fe(function() {
    r();
  }), (c, u) => A(t) ? (D(), z("div", Hl, [_("div", Vl, [_("div", Gl, [_("div", { class: Y(["key fade-in", { active: A(e).KeyA || A(e).ArrowLeft }]), onPointerdown: u[0] || (u[0] = (p) => l("keydown", "KeyA")), onPointerup: u[1] || (u[1] = (p) => l("keyup", "KeyA")), onPointerout: u[2] || (u[2] = (p) => l("keyup", "KeyA")) }, u[9] || (u[9] = [_("span", { class: "material-symbols-rounded" }, "arrow_back", -1)]), 34), _("div", { class: Y(["key fade-in", { active: A(e).KeyW || A(e).ArrowUp || A(e).Space }]), onPointerdown: u[3] || (u[3] = (p) => l("keydown", "KeyW")), onPointerup: u[4] || (u[4] = (p) => l("keyup", "KeyW")), onPointerout: u[5] || (u[5] = (p) => l("keyup", "KeyW")) }, u[10] || (u[10] = [_("span", { class: "material-symbols-rounded" }, "arrow_upward", -1)]), 34), _("div", { class: Y(["key fade-in", { active: A(e).KeyD || A(e).ArrowRight }]), onPointerdown: u[6] || (u[6] = (p) => l("keydown", "KeyD")), onPointerup: u[7] || (u[7] = (p) => l("keyup", "KeyD")), onPointerout: u[8] || (u[8] = (p) => l("keyup", "KeyD")) }, u[11] || (u[11] = [_("span", { class: "material-symbols-rounded" }, "arrow_forward", -1)]), 34)])])])) : J("", true);
} }, Wl = { key: 0, class: "stats" }, Jl = { class: "fps" }, Xl = { __name: "OriginStats", setup(f) {
  var e = V(false), t = Date.now(), n = false, r = 0, i = V(0);
  function o() {
    window.addEventListener("updateStatsVisibility", p);
  }
  function l() {
    window.removeEventListener("updateStatsVisibility", p);
  }
  function d() {
    if (n == true) {
      requestAnimationFrame(function() {
        d();
      });
      var a = Date.now();
      r++, a > t + 1e3 && (i.value = Math.round(r * 1e3 / (a - t)), t = a, r = 0);
    }
  }
  function c() {
    n = true, d();
  }
  function u() {
    n = false;
  }
  function p() {
    var a = app.storage.getSettings(app);
    e.value = a.stats;
  }
  return de(function() {
    c(), p(), o();
  }), fe(function() {
    u(), l();
  }), (a, s) => A(e) ? (D(), z("div", Wl, [_("span", Jl, H(A(i)) + " FPS", 1)])) : J("", true);
} }, Zl = { class: "campaign dashboard" }, Kl = ["innerHTML"], Yl = { class: "buttons" }, Ql = { __name: "OriginPageCampaign", setup(f) {
  var e = V(""), t = V(true);
  function n() {
    window.addEventListener("setCredit", i), window.addEventListener("popupOpened", l), window.addEventListener("popupClosed", d), window.addEventListener("keydown", c), window.addEventListener("keyup", u);
  }
  function r() {
    window.removeEventListener("setCredit", i), window.removeEventListener("popupOpened", l), window.removeEventListener("popupClosed", d), window.removeEventListener("keydown", c), window.removeEventListener("keyup", u);
  }
  function i(p) {
    p.detail.text && (e.value = p.detail.text);
  }
  function o() {
    app.pauseLevel(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Paused", inputs: [{ value: "Exit (E)", type: "button", callback: function(p) {
      app.exitCampaign();
    } }, { value: "Retry (R)", type: "button", callback: function(p) {
      app.level.retryLevel();
    } }, { value: "Play", type: "button", callback: function(p) {
      setTimeout(function() {
        app.resumeLevel();
      }, 100);
    } }] } }));
  }
  function l() {
    t.value = false;
  }
  function d() {
    t.value = true;
  }
  function c(p) {
    if (t.value == true) if (p.code == "Escape") p.preventDefault(), o();
    else if (p.code == "KeyE") app.exitCampaign();
    else if (p.code == "KeyR") app.level.retryLevel();
    else if (p.code == "KeyC") app.player.restart();
    else if (p.code == "KeyA" || p.code == "ArrowLeft") app.play == true && app.player.setControls("left", -1);
    else if (p.code == "KeyD" || p.code == "ArrowRight") app.play == true && app.player.setControls("right", 1);
    else {
      var a = ["Space", "Enter", "ArrowUp", "KeyW"];
      a.indexOf(p.code) > -1 && app.player.jump();
    }
  }
  function u(p) {
    p.code == "KeyA" || p.code == "ArrowLeft" ? app.player.setControls("left", 0) : (p.code == "KeyD" || p.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  return de(function() {
    app.showCanvas(), n(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "campaign" }));
  }), fe(function() {
    app.hideCanvas(), r();
  }), (p, a) => (D(), z("div", Zl, [(D(), me(Ps, { to: "body" }, [a[0] || (a[0] = _("div", { class: "background-cubes" }, null, -1))])), a[2] || (a[2] = _("div", { id: "timer" }, null, -1)), A(e) ? (D(), z("div", { key: 0, id: "credit", class: "fade-in", innerHTML: A(e) }, null, 8, Kl)) : J("", true), a[3] || (a[3] = _("div", { id: "speedometer" }, [_("span", { id: "speed" })], -1)), _("div", Yl, [_("a", { class: "button top-left", onClick: o, title: "Pause (ESC)" }, a[1] || (a[1] = [_("img", { src: "../svg/pause.svg" }, null, -1)])), ie(vn, { class: "button top-right" })]), ie(Xl), ie(Ca)]));
} }, ec = { class: "level-manager" }, tc = { class: "row top" }, nc = { class: "col" }, ic = { class: "item", title: "Download level" }, rc = { class: "row left" }, sc = { class: "col" }, ac = { class: "list-item" }, oc = ["value", "onInput"], uc = ["onClick"], lc = ["onClick"], cc = ["onClick"], dc = { __name: "OriginPageLevelManager", emits: ["setPage"], setup(f, { emit: e }) {
  var t = V([]), n = e;
  function r() {
    window.addEventListener("keydown", m);
  }
  function i() {
    window.removeEventListener("keydown", m);
  }
  function o() {
    t.value = app.storage.getListOfLevels(), t.value.length < 1 && l();
  }
  function l() {
    var h = {}, g = null;
    app.level.createNewLevel(app), h = app.level.exportToJSON(app), g = app.storage.setLevelData(null, h), t.value.push({ key: g, level: h });
  }
  function d(h) {
    var g = h.target.files[0];
    if (g) {
      var v = new FileReader();
      v.onload = function() {
        var x = JSON.parse(v.result), w = app.level.getTheme(x.theme) || {};
        app.level.clearLevel(app), app.level.key = null, app.background.visible = false, app.level.entityFactory.color = w.color || "#620460", app.background.setTheme(w.model || "background-classic"), app.level.clearLevel(app), app.level.importFromJSON(x, app), app.levelHistory.save("Downloaded level", app), app.levelHistory.save("Loaded level", app), app.resetScene(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.graphics.render(), n("setPage", "level-editor");
      }, v.readAsText(g);
    }
  }
  function c(h) {
    var g = app.storage.getLevelData(h.key), v = app.level.getTheme(g.theme) || {}, x = app.storage.getSettings(app);
    g.name = h.level.name, app.level.entityFactory.color = v.color || "#620460", app.background.setTheme(v.model || "background-classic"), app.level.clearLevel(app), app.level.importFromJSON(g, app), app.level.key = h.key, app.level.updateHelpers(), app.updateSettings(x, app), app.background.visible = false, app.levelHistory.save("Edited level", app), app.resetScene(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.graphics.render(), n("setPage", "level-editor");
  }
  function u(h, g) {
    h.level.name = g.target.value, app.storage.updateLevelDataName(h.key, h.level.name);
  }
  function p(h) {
    c(h), app.resetScene(app), app.storage.saveLevelToFile(), n("setPage", "level-manager");
  }
  function a(h) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Are you sure you want to <em>delete</em> this level?", inputs: [{ value: "Yes", type: "button", callback: function() {
      var g = t.value.indexOf(h);
      t.value.splice(g, 1), app.storage.removeLevelData(h.key), window.dispatchEvent(new CustomEvent("closePopup"));
    } }, { value: "No", type: "button" }] } }));
  }
  function s() {
    n("setPage", "home"), window.dispatchEvent(new CustomEvent("setTheme"));
  }
  function m(h) {
    if (h.code == "Escape" || h.code == "KeyE") {
      if (h.target.value) return;
      h.preventDefault(), s();
    }
  }
  return de(function() {
    o(), r(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-manager" }));
  }), fe(function() {
    i();
  }), (h, g) => (D(), z("div", ec, [_("div", tc, [_("div", nc, [_("a", { class: "item", onClick: l, title: "Add level" }, g[0] || (g[0] = [_("img", { src: "../svg/add.svg" }, null, -1)])), _("label", ic, [_("input", { onChange: d, class: "hidden", type: "file", accept: "application/JSON" }, null, 32), g[1] || (g[1] = _("img", { src: "../svg/download.svg" }, null, -1))]), _("a", { class: "item", onClick: s, title: "Exit level manager (ESC)" }, g[2] || (g[2] = [_("img", { src: "../svg/home.svg" }, null, -1)])), ie(vn, { class: "item last" })])]), _("div", rc, [_("div", sc, [(D(true), z(ce, null, ke(A(t), (v, x) => (D(), z("div", ac, [_("input", { type: "text", value: v.level.name, onInput: (w) => u(v, w) }, null, 40, oc), _("a", { onClick: (w) => c(v), class: "item", title: "Edit level" }, g[3] || (g[3] = [_("img", { src: "../svg/pencil.svg" }, null, -1)]), 8, uc), _("a", { onClick: (w) => p(v), class: "item", title: "Share level" }, g[4] || (g[4] = [_("img", { src: "../svg/upload.svg" }, null, -1)]), 8, lc), _("a", { onClick: (w) => a(v), class: "item", title: "Delete level" }, g[5] || (g[5] = [_("img", { src: "../svg/trash.svg" }, null, -1)]), 8, cc)]))), 256))])])]));
} }, fc = { class: "skins dashboard" }, pc = { class: "wrapper fade-in" }, hc = { class: "skin-group" }, mc = ["id", "onClick"], gc = ["src"], vc = { class: "title" }, bc = { __name: "OriginPageSkins", emits: ["setPage"], setup(f, { emit: e }) {
  var t = e;
  function n() {
    window.addEventListener("keydown", p);
  }
  function r() {
    window.removeEventListener("keydown", p);
  }
  var i = V(app.storage.getSettings());
  function o(a, s) {
    i.value.skin = { id: a.id, title: a.title, url: a.url }, a.id == 680 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Custom Skin", inputs: [{ class: "button", type: "file", style: "width: 100%", accept: "image/png, image/jpeg", callback: l }, { type: "button", value: "Close" }] } })) : (app.player.setSkin({ id: a.id, url: a.url }), app.updateSettings(i.value)), c(s.target);
  }
  function l(a) {
    var s = a.target.files[0];
    if (s) {
      var m = new FileReader();
      m.onloadend = function() {
        var h = { id: 680, title: s.name, url: m.result };
        i.value.skin = h, app.player.setSkin(h, app), app.updateSettings(i.value), window.dispatchEvent(new CustomEvent("closePopup"));
      }, m.readAsDataURL(s);
    }
  }
  function d(a) {
    return a.id == i.value.skin.id;
  }
  function c(a) {
    a == null && (a = document.querySelector("[class*='selected']")), a.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function u() {
    t("setPage", "home");
  }
  function p(a) {
    (a.code == "Escape" || a.code == "KeyE") && (a.preventDefault(), u());
  }
  return de(function() {
    c(), n(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "skins" }));
  }), fe(function() {
    r();
  }), (a, s) => (D(), z("div", fc, [s[2] || (s[2] = _("div", { class: "background-cubes" }, null, -1)), _("div", pc, [s[1] || (s[1] = _("h1", null, [he("My"), _("strong", null, "Skins")], -1)), _("div", hc, [(D(true), z(ce, null, ke(A(Rt), (m, h) => (D(), z("div", { class: Y(["skin", { selected: d(m) }]), id: m.id, key: h, onClick: (g) => o(m, g) }, [_("img", { src: m.url, class: "image" }, null, 8, gc), _("div", vc, H(m.title), 1)], 10, mc))), 128))]), _("div", { class: "buttons" }, [_("a", { class: "button top-left", onClick: u, title: "Exit to home (ESC)" }, s[0] || (s[0] = [_("img", { src: "../svg/home.svg" }, null, -1)]))])])]));
} }, yc = { key: 0, class: "background-cubes" }, xc = { class: "level-editor" }, wc = { class: "row top" }, Sc = { class: "col options-level" }, Cc = { key: 0 }, kc = ["title", "onClick"], _c = ["src"], Ec = { key: 0, class: "row left" }, Tc = { class: "col object-type" }, Pc = { key: 0, class: "col object-options" }, Lc = { class: "slider" }, Mc = ["value"], Oc = { __name: "OriginPageLevelEditor", emits: ["setPage"], setup(f, { emit: e }) {
  var t = V("draw"), n = V(app.levelEditor.selectedObjectType || "cube"), r = V(true), i = V(), o = V(app.level.theme), l = V(false), d = V(app.levelEditor.controlsTransform), c = V(true);
  function u() {
    window.addEventListener("exitLevel", k), window.addEventListener("setSelectedObject", L), window.addEventListener("selectObjectType", P), window.addEventListener("setTransformMode", T), window.addEventListener("popupOpened", a), window.addEventListener("popupClosed", s), window.addEventListener("keydown", $), window.addEventListener("keyup", F);
  }
  function p() {
    window.removeEventListener("exitLevel", k), window.removeEventListener("setSelectedObject", L), window.removeEventListener("selectObjectType", P), window.removeEventListener("setTransformMode", T), window.removeEventListener("popupOpened", a), window.removeEventListener("popupClosed", s), window.removeEventListener("keydown", $), window.removeEventListener("keyup", F);
  }
  function a() {
    c.value = false;
  }
  function s() {
    c.value = true;
  }
  function m(B) {
    t.value = B, app.mouse.setMode(B);
  }
  function h() {
    app.levelEditor.exitLevel();
  }
  function g() {
    app.levelEditor.saveLevel();
  }
  function v() {
    app.pauseLevel(), app.storage.screenshot({ width: 1280, height: 720, save: true });
  }
  function x(B) {
    b(), app.level.deselectLevel(app), app.levelEditor.controlsTransform.detach();
    const I = app.level.getTheme(B);
    o.value = B, app.background.setTheme(I.model), app.level.entityFactory.color = I.color, app.level.theme = B;
    const X = app.level.exportToJSON(app);
    app.level.clearLevel(app), app.level.importFromJSON(X, app), app.levelHistory.save("Updated level theme", app), window.dispatchEvent(new CustomEvent("themeSelected", { detail: I }));
  }
  function w() {
    app.levelEditor.undo();
  }
  function y() {
    app.levelEditor.redo();
  }
  function b() {
    S(), app.levelEditor.rewind(), app.levelEditor.controlsOrbit.target.copy(app.player.position);
  }
  function S() {
    r.value = true, app.pauseLevel(), app.level.deselectLevel(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsOrbit.target.copy(app.player.position), app.updateCamera(app), app.background.visible = false, window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  function C() {
    r.value = false, app.background.visible = true, app.level.deselectLevel(app), app.levelEditor.controlsOrbit.enabled = false, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject")), app.startLevel();
  }
  function k() {
    r.value = true;
  }
  function P(B) {
    n.value = B.detail.type, app.levelEditor.selectObjectType(B.detail.type, B.detail.checkNull);
  }
  function L(B) {
    i.value = B.detail;
  }
  function E() {
    app.levelEditor.toggleSelectedObjectStaticState();
  }
  function T(B) {
    d.value.mode = B.detail, app.levelEditor.setMode(B.detail);
  }
  function M(B) {
    i.value.setFriction(B.target.value), app.levelHistory.save("Updated object properties", app);
  }
  function R() {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Share a tip!", inputs: [{ value: app.selectedObject.text, type: "text", callback: N }, { value: "Cancel", type: "button" }, { value: "Close", type: "button" }] } }));
  }
  function O() {
    app.levelEditor.duplicateSelectedObject(), L({ detail: app.selectedObject }), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }));
  }
  function U() {
    app.levelEditor.deleteSelectedObject();
  }
  function N(B) {
    app.selectedObject.text = B.target.value, app.levelHistory.save("Updated tip", app);
  }
  function $(B) {
    if (c.value == true) {
      var I = ["Space", "Enter", "ArrowUp", "KeyW"];
      if (app.play == true) if (B.code == "Escape" || B.code == "KeyE") B.preventDefault(), S();
      else if (B.code == "KeyA" || B.code == "ArrowLeft") app.player.setControls("left", -1);
      else if (B.code == "KeyD" || B.code == "ArrowRight") app.player.setControls("right", 1);
      else if (B.code == "KeyR") app.level.retryLevel();
      else if (B.code == "KeyC") app.player.restart();
      else {
        var I = ["Space", "Enter", "ArrowUp", "KeyW"];
        I.indexOf(B.code) > -1 && app.player.jump();
      }
      else B.code == "Digit0" ? app.levelEditor.resetZAxis() : B.code == "Escape" || B.code == "KeyE" ? (B.preventDefault(), h()) : B.code == "KeyD" ? O() : B.code == "KeyG" ? T({ detail: "translate" }) : B.code == "KeyR" ? (app.levelEditor.controlsTransform.mode == "rotate" && (app.levelEditor.controlsTransform.showAll = !app.levelEditor.controlsTransform.showAll), T({ detail: "rotate" })) : B.code == "KeyS" ? B.ctrlKey == true ? (B.preventDefault(), app.levelEditor.saveLevel()) : T({ detail: "scale" }) : B.code == "KeyT" ? T({ detail: "translate" }) : B.code == "KeyX" ? app.levelEditor.deleteSelectedObject() : B.code == "KeyZ" && (B.ctrlKey == true && B.shiftKey == false && app.levelEditor.undo(), B.ctrlKey == true && B.shiftKey == true && app.levelEditor.redo());
    }
  }
  function F(B) {
    B.code == "KeyA" || B.code == "ArrowLeft" ? app.player.setControls("left", 0) : (B.code == "KeyD" || B.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  return de(function() {
    app.canvas.classList.remove("hidden"), u(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-editor" }));
  }), fe(function() {
    app.canvas.classList.add("hidden"), p();
  }), (B, I) => (D(), z(ce, null, [(D(), me(Ps, { to: "body" }, [A(r) == false ? (D(), z("div", yc)) : J("", true)])), _("div", xc, [_("div", wc, [_("div", Sc, [_("a", { class: Y(["item", { selected: A(t) == "draw" }]), onClick: I[0] || (I[0] = (X) => m("draw")), action: "draw", title: "Draw cubes" }, I[19] || (I[19] = [_("img", { src: "../svg/pencil.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(t) == "erase" }]), onClick: I[1] || (I[1] = (X) => m("erase")), action: "erase", title: "Erase cubes" }, I[20] || (I[20] = [_("img", { src: "../svg/eraser.svg" }, null, -1)]), 2), _("a", { class: "item", onClick: h, title: "Exit level editor (ESC)" }, I[21] || (I[21] = [_("img", { src: "../svg/home.svg" }, null, -1)])), _("a", { class: "item", onClick: g, title: "Save level (Ctrl + S)" }, I[22] || (I[22] = [_("img", { src: "../svg/save.svg" }, null, -1)])), _("a", { class: "item", onClick: v, title: "Save Screenshot" }, I[23] || (I[23] = [_("img", { src: "../svg/eye.svg" }, null, -1)])), _("a", { class: Y(["item", { selected: A(l) == true }]), onClick: I[2] || (I[2] = (X) => mi(l) ? l.value = !A(l) : l = !A(l)) }, [I[24] || (I[24] = _("img", { src: "../svg/color.svg" }, null, -1)), A(l) == true ? (D(), z("ul", Cc, [(D(true), z(ce, null, ke(A(ct), (X, W) => (D(), z("li", null, [_("a", { class: Y(["item", { selected: A(o) == W }]), title: W, onClick: (re) => x(W) }, [_("img", { src: X.thumbnail }, null, 8, _c)], 10, kc)]))), 256))])) : J("", true)], 2), _("a", { class: "item", onClick: w, title: "Undo edit (Ctrl + Z)" }, I[25] || (I[25] = [_("img", { src: "../svg/undo.svg" }, null, -1)])), _("a", { class: "item", onClick: y, title: "Redo edit (Ctrl + Shift + Z)" }, I[26] || (I[26] = [_("img", { src: "../svg/redo.svg" }, null, -1)])), _("a", { class: "item", onClick: b, title: "Restart level" }, I[27] || (I[27] = [_("img", { src: "../svg/rewind.svg" }, null, -1)])), _("a", { class: "item", onClick: S, title: "Pause level" }, I[28] || (I[28] = [_("img", { src: "../svg/pause.svg" }, null, -1)])), _("a", { class: "item", onClick: C, title: "Play level" }, I[29] || (I[29] = [_("img", { src: "../svg/play.svg" }, null, -1)])), ie(vn, { class: "item last" })])]), A(t) == "draw" && A(r) == true ? (D(), z("div", Ec, [_("div", Tc, [_("a", { class: Y(["item", { selected: A(n) == "cube" }]), onClick: I[3] || (I[3] = (X) => P({ detail: { type: "cube" } })), title: "Basic cube" }, I[30] || (I[30] = [_("img", { src: "../svg/cube.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "tip" }]), onClick: I[4] || (I[4] = (X) => P({ detail: { type: "tip" } })), title: "Tip cube" }, I[31] || (I[31] = [_("img", { src: "../svg/tip.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "bounce" }]), onClick: I[5] || (I[5] = (X) => P({ detail: { type: "bounce" } })), title: "Bounce cube" }, I[32] || (I[32] = [_("img", { src: "../svg/bounce.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "checkpoint" }]), onClick: I[6] || (I[6] = (X) => P({ detail: { type: "checkpoint" } })), title: "Checkpoint cube" }, I[33] || (I[33] = [_("img", { src: "../svg/checkpoint.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "spike" }]), onClick: I[7] || (I[7] = (X) => P({ detail: { type: "spike" } })), title: "Spike cube" }, I[34] || (I[34] = [_("img", { src: "../svg/spike.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "resize" }]), onClick: I[8] || (I[8] = (X) => P({ detail: { type: "resize" } })), title: "Resize cube" }, I[35] || (I[35] = [_("img", { src: "../svg/grow.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "direction" }]), onClick: I[9] || (I[9] = (X) => P({ detail: { type: "direction" } })), title: "Direction cube" }, I[36] || (I[36] = [_("img", { src: "../svg/direction.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "gravity" }]), onClick: I[10] || (I[10] = (X) => P({ detail: { type: "gravity" } })), title: "Gravity cube" }, I[37] || (I[37] = [_("img", { src: "../svg/gravity.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "grapple" }]), onClick: I[11] || (I[11] = (X) => P({ detail: { type: "grapple" } })), title: "Grapple cube" }, I[38] || (I[38] = [_("img", { src: "../svg/grapple.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "finish" }]), onClick: I[12] || (I[12] = (X) => P({ detail: { type: "finish" } })), title: "Finish cube" }, I[39] || (I[39] = [_("img", { src: "../svg/finish.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "reset" }]), onClick: I[13] || (I[13] = (X) => P({ detail: { type: "reset" } })), title: "Reset cube" }, I[40] || (I[40] = [_("img", { src: "../svg/reset.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(n) == "control" }]), onClick: I[14] || (I[14] = (X) => P({ detail: { type: "control" } })), title: "Control cube" }, I[41] || (I[41] = [_("img", { src: "../svg/control.svg" }, null, -1)]), 2)]), A(i) != null ? (D(), z("div", Pc, [_("a", { class: Y(["item", { selected: A(d).mode == "translate" }]), onClick: I[15] || (I[15] = (X) => T({ detail: "translate" })), title: "Move (T or G)" }, I[42] || (I[42] = [_("img", { src: "../svg/move.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(d).mode == "scale" }]), onClick: I[16] || (I[16] = (X) => T({ detail: "scale" })), title: "Scale (S)" }, I[43] || (I[43] = [_("img", { src: "../svg/scale-out-x.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(d).mode == "rotate" }]), onClick: I[17] || (I[17] = (X) => {
    $({ code: "KeyR" });
  }), title: "Rotate (R)" }, I[44] || (I[44] = [_("img", { src: "../svg/rotate-clockwise.svg" }, null, -1)]), 2), _("a", { class: Y(["item", { selected: A(i).isStatic() }]), onClick: E, title: "Pin" }, I[45] || (I[45] = [_("img", { src: "../svg/pin.svg" }, null, -1)]), 2), _("div", { class: Y(["item", { disabled: A(i).isStatic() }]) }, [I[46] || (I[46] = _("a", { action: "friction", title: "Friction" }, [_("img", { src: "../svg/friction.svg" })], -1)), _("div", Lc, [_("input", { name: "friction", type: "range", min: "0", max: "1", step: "0.25", value: A(i).body.friction, onChange: I[18] || (I[18] = (X) => M(X)) }, null, 40, Mc)])], 2), _("a", { class: Y(["item", { disabled: A(i).text == null }]), onClick: R, title: "Text" }, I[47] || (I[47] = [_("img", { src: "../svg/type.svg" }, null, -1)]), 2), _("a", { class: "item", onClick: O, title: "Duplicate (D)" }, I[48] || (I[48] = [_("img", { src: "../svg/duplicate.svg" }, null, -1)])), _("a", { class: "item", onClick: U, title: "Delete (X)" }, I[49] || (I[49] = [_("img", { src: "../svg/trash.svg" }, null, -1)]))])) : J("", true)])) : J("", true), ie(Ca)])], 64));
} }, Ac = { key: 0, class: "dialog" }, Rc = { class: "wrapper" }, Dc = ["innerHTML"], Ic = ["innerHTML"], Bc = ["innerHTML"], zc = { class: "inputs" }, $c = ["for"], Nc = ["id", "type", "value", "min", "max", "step", "accept", "title"], jc = { __name: "OriginPopup", setup(f) {
  const e = xe({ useScope: "global" });
  var t = V(""), n = V(""), r = V(""), i = V([]), o = V(false);
  function l() {
    window.addEventListener("openPopup", c), window.addEventListener("closePopup", u), window.addEventListener("keydown", m);
  }
  function d() {
    window.removeEventListener("openPopup", c), window.removeEventListener("closePopup", u), window.removeEventListener("keydown", m);
  }
  function c(h) {
    o.value = true, h.detail && (h.detail.text && (e.te(h.detail.title, e.fallbackLocale.value) ? t.value = e.t(h.detail.title) : t.value = h.detail.title, e.te(h.detail.text, e.fallbackLocale.value) ? n.value = e.t(h.detail.text) : n.value = h.detail.text, e.te(h.detail.description, e.fallbackLocale.value) ? r.value = e.t(h.detail.description) : r.value = h.detail.description), h.detail.inputs && (i.value = h.detail.inputs, i.value.forEach(function(g) {
      g.type == "file" || g.type == "range" || g.type == "text" ? g.event = "change" : g.event = "click", g.value && e.te(g.value, e.fallbackLocale.value) && (g.value = e.t(g.value));
    }))), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupOpened"));
    }, 100);
  }
  function u() {
    o.value = false, setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupClosed"));
    }, 100);
  }
  function p(h, g) {
    h == null && (h = u), h(g);
  }
  function a(h) {
    var g = i.value[0];
    g && p(g.callback, h);
  }
  function s(h) {
    var g = i.value[i.value.length - 1];
    g && p(g.callback, h);
  }
  function m(h) {
    if (o.value == true && h.target.type != "text") {
      var g = ["Space", "Enter", "Escape"];
      g.indexOf(h.code) > -1 && (h.preventDefault(), s(h)), h.code == "KeyR" && (h.preventDefault(), a(h));
    }
  }
  return de(function() {
    l();
  }), fe(function() {
    d();
  }), (h, g) => (D(), me(Tt, { name: "fade-origin-popup" }, { default: Et(() => [A(o) == true ? (D(), z("div", Ac, [_("div", { class: "background", onClick: s }), _("div", Rc, [A(t) ? (D(), z("h1", { key: 0, class: "title", innerHTML: A(t) }, null, 8, Dc)) : J("", true), A(n) ? (D(), z("p", { key: 1, class: "text", innerHTML: A(n) }, null, 8, Ic)) : J("", true), A(r) ? (D(), z("p", { key: 2, class: "description", innerHTML: A(r) }, null, 8, Bc)) : J("", true), _("div", zc, [(D(true), z(ce, null, ke(A(i), (v, x) => (D(), z(ce, null, [v.label ? (D(), z("label", { key: 0, for: "popup-" + v.type + "-" + x }, H(v.label), 9, $c)) : J("", true), _("input", gi({ class: v.class, id: "popup-" + v.type + "-" + x, type: v.type, value: v.value, min: v.min, max: v.max, step: v.step, accept: v.accept, style: v.style, title: v.title || v.value }, { [vi(v.event)]: (w) => p(v.callback, w) }), null, 16, Nc)], 64))), 256))])])])) : J("", true)]), _: 1 }));
} }, Fc = { class: "ui-origin" }, Uc = { __name: "Origin", setup(f) {
  var e = V("home");
  function t() {
    window.addEventListener("setPage", r);
  }
  function n() {
    window.removeEventListener("setPage", r);
  }
  function r(o) {
    o.detail && i(o.detail);
  }
  function i(o) {
    e.value = o, app.state = o;
  }
  return de(function() {
    t();
  }), fe(function() {
    n();
  }), (o, l) => (D(), z("div", Fc, [A(e) == "home" ? (D(), me(Ml, { key: 0, onSetPage: i })) : J("", true), A(e) == "level-picker" ? (D(), me(ql, { key: 1, onSetPage: i })) : J("", true), A(e) == "campaign" ? (D(), me(Ql, { key: 2, onSetPage: i })) : J("", true), A(e) == "level-manager" ? (D(), me(dc, { key: 3, onSetPage: i })) : J("", true), A(e) == "skins" ? (D(), me(bc, { key: 4, onSetPage: i })) : J("", true), A(e) == "level-editor" ? (D(), me(Oc, { key: 5, onSetPage: i })) : J("", true), ie(jc)]));
} }, qc = ["onClick"], Hc = { class: "thumbnail" }, Vc = ["src"], Gc = { key: 0, class: "overlay" }, Wc = ["innerHTML"], Jc = ["innerHTML"], Xc = { key: 3, class: "tag" }, Zc = ["innerHTML"], Kc = { key: 0, class: "subtitle" }, Yc = ["innerHTML"], Ii = { __name: "BubbleCarousel", props: { hideLabel: Boolean, hideTag: Boolean, hideTitle: Boolean, hideSubtitle: Boolean, items: Object, selected: Object }, setup(f) {
  const e = f;
  var t = V();
  function n() {
    window.addEventListener("keydown", m);
  }
  function r() {
    window.removeEventListener("keydown", m);
  }
  function i(h, g) {
    var v = d(g.target), x = g.isTrusted ? "smooth" : "instant";
    p(v, x), t.value = h, window.dispatchEvent(new CustomEvent("itemSelected", { detail: h })), app.assets.audio.play("click");
  }
  function o() {
    var h = document.querySelector(".item[class*='selected']");
    h && h.nextElementSibling && h.nextElementSibling.click();
  }
  function l() {
    var h = document.querySelector(".item[class*='selected']");
    h && h.previousElementSibling && h.previousElementSibling.click();
  }
  function d(h) {
    return h == null ? null : h.classList.contains("item") ? h : d(h.parentNode);
  }
  function c(h) {
    var g = u(h.target);
    g && (g.scrollLeft += h.deltaX + h.deltaY);
  }
  function u(h) {
    return h == null ? null : h.scrollWidth > h.clientWidth ? h : u(h.parentNode);
  }
  function p(h, g = "smooth") {
    h == null && (h = document.querySelector("[class*='selected']")), h && h.scrollIntoView({ behavior: g, block: "nearest", inline: "center" });
  }
  function a(h) {
    return h.title == null || t.value == null ? false : t.value.title == h.title;
  }
  function s() {
    e.selected && (t.value = e.selected);
  }
  function m(h) {
    h.target.value == null && (h.code == "KeyA" || h.code == "ArrowLeft" ? l() : (h.code == "KeyD" || h.code == "ArrowRight") && o());
  }
  return Ti(function() {
    s();
  }), de(function() {
    p(null, "instant"), n();
  }), fe(function() {
    r();
  }), (h, g) => (D(), z("div", { class: "carousel", onWheelPassive: g[0] || (g[0] = (v) => c(v)) }, [(D(true), z(ce, null, ke(f.items, (v, x) => (D(), z("div", { class: Y(["item", { selected: a(v) }]), onClick: (w) => i(v, w) }, [_("div", Hc, [_("img", { src: v.url }, null, 8, Vc), v.overlay ? (D(), z("div", Gc)) : J("", true), f.hideLabel != true && v.label ? (D(), z("div", { key: 1, class: "label", innerHTML: v.label }, null, 8, Wc)) : J("", true), f.hideTitle != true ? (D(), z("div", { key: 2, class: "title", innerHTML: v.description || v.title }, null, 8, Jc)) : J("", true), f.hideTag != true && v.tag ? (D(), z("div", Xc, [_("div", { innerHTML: v.tag }, null, 8, Zc)])) : J("", true)]), f.hideSubtitle != true ? (D(), z("div", Kc, [_("span", { innerHTML: v.subtitle }, null, 8, Yc)])) : J("", true)], 10, qc))), 256))], 32));
} }, Qc = ["title"], bn = { __name: "BubbleButtonSettings", setup(f) {
  const e = xe({ useScope: "global" });
  function t() {
    window.dispatchEvent(new CustomEvent("openSettings"));
  }
  return (n, r) => (D(), z("a", { onClick: t, title: A(e).t("popup.button.settings") }, r[0] || (r[0] = [_("span", { class: "material-symbols-rounded" }, "settings", -1)]), 8, Qc));
} }, ed = { key: 0, class: "material-symbols-rounded" }, td = { key: 1, class: "material-symbols-rounded" }, nd = { __name: "BubbleButtonFullscreen", setup(f) {
  const e = V(false);
  document.addEventListener("fullscreenchange", function() {
    e.value = r();
  });
  const t = V(window.electron != null);
  function n() {
    return window.chrome?.extension;
  }
  function r() {
    return document.fullscreenElement != null;
  }
  function i(l) {
    chrome.tabs ? chrome.tabs.create({ url: l }) : window.open(l, "_blank");
  }
  function o() {
    if (n() && window.location.href.includes("?tab=true") == false) {
      i(window.location.href + "?tab=true");
      return;
    }
    t.value ? window.electron.toggleFullScreen() : r() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (l, d) => (D(), z("a", { onClick: o }, [e.value == true ? (D(), z("span", ed, "fullscreen_exit")) : (D(), z("span", td, "fullscreen"))]));
} }, id = { class: "nav" }, rd = ["title"], sd = { class: "content fade-in" }, ad = ["innerHTML"], od = { class: "footer" }, ud = ["title"], ld = { __name: "BubblePageHome", emits: ["setPage"], setup(f, { emit: e }) {
  const t = xe({ useScope: "global" });
  var n = e, r = V(), i = V(), o = V(app.network.isOnline() == false), l = x(), d = ut(() => w(l)), c = V(0), u = ut(() => [{ title: t.t("home.button.skins"), url: "../svg/button-skins.svg", callback: function() {
    n("setPage", "skins");
  } }, { title: t.t("home.button.level_editor"), url: "../svg/button-level-editor.svg", callback: function() {
    window.dispatchEvent(new CustomEvent("setTheme", { detail: "origin" })), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("setPage", { detail: "level-manager" }));
    }, 0);
  } }, { title: t.t("home.button.multi_player"), url: "../svg/button-multiplayer.svg", callback: function() {
    window.dispatchEvent(new CustomEvent("openSettings", { detail: "multiplayer" }));
  } }, { title: t.t("home.button.play"), url: "../svg/button-play.svg", callback: function() {
    n("setPage", "level-picker");
  } }]);
  function p() {
    window.addEventListener("itemSelected", m), document.addEventListener("keydown", s), app.network.on("peer_open", g), app.network.on("peer_close", v);
  }
  function a() {
    window.removeEventListener("itemSelected", m), document.removeEventListener("keydown", s), app.network.off("peer_open", g), app.network.off("peer_close", v);
  }
  function s(k) {
  }
  function m(k) {
    var P = k.detail;
    P.callback && P.callback();
  }
  async function h() {
    var k = await fetch("../manifest.json"), P = await k.json();
    r.value = P, i.value = "v" + P.version;
  }
  function g() {
    o.value = false;
  }
  function v() {
    o.value = true;
  }
  function x() {
    const k = Object.keys(t.messages.value.en.home.messages);
    return Math.floor(Math.random() * k.length);
  }
  function w(k) {
    return t.t("home.messages." + k);
  }
  async function y() {
    const k = await fetch("../json/changelog.json").then(function(T) {
      if (T.ok) return T.json();
      throw new Error("Something went wrong");
    }).then(function(T) {
      return T;
    }.bind(this)).catch(function(T) {
      console.error(T);
    });
    for (var P = "", L = k.length - 1; L >= 0; L--) {
      var E = k[L];
      P += "v" + E.version + `
`, E.revisions.forEach(function(T) {
        P += "- " + T + `
`;
      }), P += `
`;
    }
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<div style="font-size: 0.75em; padding-right: 1em; text-align: left;">' + P + "</div>", inputs: [{ type: "button", value: "popup.button.close" }] } }));
  }
  function b(k) {
    k.preventDefault(k), k.target.href && S(k.target.href);
  }
  function S(k, P = "_blank") {
    chrome.tabs ? chrome.tabs.create({ url: k }) : window.open(k, P);
  }
  function C() {
    window.location.href = "../index.html";
  }
  return de(function() {
    h(), p(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "home" }));
  }), fe(function() {
    a();
  }), (k, P) => (D(), z("div", { class: "page", key: A(c) }, [P[4] || (P[4] = _("div", { class: "background" }, [_("img", { src: "../svg/background-purple.svg" })], -1)), _("div", id, [_("a", { class: "button left fade-in", onClick: C, title: A(t).t("home.button.back") }, P[1] || (P[1] = [_("span", { class: "material-symbols-rounded" }, "undo", -1)]), 8, rd), ie(nd, { class: "button fade-in", title: A(t).t("home.button.fullscreen") }, null, 8, ["title"]), ie(bn, { class: "button fade-in" })]), _("div", sd, [P[2] || (P[2] = _("h1", null, "BOXEL3D", -1)), _("p", { innerHTML: A(d), onClick: P[0] || (P[0] = (L) => b(L)) }, null, 8, ad), ie(Ii, { items: A(u), scrolling: "no" }, null, 8, ["items"])]), _("div", od, [A(o) ? (D(), z("a", { key: 0, class: Y(["button fade-in", { hidden: A(i) == "" }]), onClick: y, title: A(t).t("home.button.changelog") }, [P[3] || (P[3] = _("span", { class: "material-symbols-rounded" }, "ink_pen", -1)), he(" " + H(A(i)), 1)], 10, ud)) : J("", true)])]));
} }, cd = { class: "page" }, dd = { class: "nav" }, fd = ["title"], pd = { class: "content fade-in" }, hd = { class: "footer" }, md = { __name: "BubblePageSkins", emits: ["setPage"], setup(f, { emit: e }) {
  const t = xe({ useScope: "global" });
  var n = e, r = V();
  function i() {
    window.addEventListener("keydown", p), window.addEventListener("itemSelected", d);
  }
  function o() {
    window.removeEventListener("keydown", p), window.removeEventListener("itemSelected", d);
  }
  var l = V(app.storage.getSettings());
  function d(s) {
    var m = s.detail;
    l.value.skin = { id: m.id, title: m.title, url: m.url }, m.id == 680 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: t.t("popup.text.custom_skin"), inputs: [{ type: "file", label: t.t("popup.button.upload"), class: "button", style: "width: 100%", accept: "image/png, image/jpeg", callback: c }, { type: "button", value: t.t("popup.button.close") }] } })) : (app.player.setSkin({ id: m.id, url: m.url }), app.updateSettings(l.value));
  }
  function c(s) {
    var m = s.target.files[0];
    if (m) {
      var h = new FileReader();
      h.onloadend = function() {
        var g = { id: 680, title: m.name, url: h.result };
        l.value.skin = g, app.player.setSkin(g, app), app.updateSettings(l.value), window.dispatchEvent(new CustomEvent("closePopup"));
      }, h.readAsDataURL(m);
    }
  }
  function u() {
    n("setPage", "home");
  }
  function p(s) {
    if (s.target.value == null) {
      var m = ["Space", "Enter", "ArrowUp", "KeyW"];
      m.indexOf(s.code) > -1 && (s.preventDefault(), u()), (s.code == "Escape" || s.code == "KeyE") && (s.preventDefault(), u());
    }
  }
  function a() {
    var s = l.value.skin.id;
    Rt.forEach(function(m) {
      m.id == s && (r.value = m);
    });
  }
  return Ti(function() {
    a();
  }), de(function() {
    i(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "skins" }));
  }), fe(function() {
    o();
  }), (s, m) => (D(), z("div", cd, [m[3] || (m[3] = _("div", { class: "background" }, [_("img", { src: "../svg/background-purple.svg" })], -1)), _("div", dd, [_("a", { class: "button fade-in", onClick: u, title: "Exit to home (ESC)" }, m[0] || (m[0] = [_("span", { class: "material-symbols-rounded" }, "undo", -1)])), _("a", { class: "button fade-in right", href: "../index.html?workshop=true", title: A(t).t("workshop.text.workshop") }, m[1] || (m[1] = [_("img", { src: "../svg/steam.svg" }, null, -1)]), 8, fd), ie(bn, { class: "button fade-in" })]), _("div", pd, [_("h1", null, H(A(t).t("skins.title")), 1), _("p", null, H(A(t).t("skins.description")), 1), ie(Ii, { items: A(Rt), selected: A(r), class: "hide-titles" }, null, 8, ["items", "selected"]), _("div", hd, [_("a", { class: "button center fade-in", onClick: u }, [m[2] || (m[2] = _("span", { class: "material-symbols-rounded" }, "check_box", -1)), he(" " + H(A(t).t("skins.button.select")), 1)])])])]));
} }, gd = $t(md, [["__scopeId", "data-v-96e9822a"]]), vd = { key: 0, class: "level-selector" }, bd = { class: "level-selector__packs" }, yd = { class: "level-selector__packs-header" }, xd = ["onClick"], wd = ["src", "alt"], Sd = { class: "level-selector__levels" }, Cd = { class: "level-selector__levels-header" }, kd = ["placeholder"], _d = ["onClick"], Ed = ["src", "alt"], Td = { key: 1, class: "score" }, Pd = { class: "level-selector__info" }, Ld = { class: "level-selector__info-header" }, Md = { class: "level-selector__info-content" }, Od = ["src", "alt"], Ad = { key: 0 }, Rd = { class: "level-selector__info-details" }, Dd = { class: "author" }, Id = { key: 0 }, Bd = { key: 1 }, zd = { class: "links" }, $d = ["href", "title"], Nd = { key: 0, src: "../svg/speedrun.svg" }, jd = { key: 1, class: "material-symbols-rounded" }, Fd = ["title"], Ud = { __name: "BubblePopupLevelSelector", setup(f) {
  const e = V(false), t = xe({ useScope: "global" }), n = V(), r = ut(() => {
    const E = [...Ne.packs];
    return E.unshift({ title: t.t("popup.text.all"), levels: [] }), E;
  }), i = V(), o = ut(() => {
    const E = [];
    return r.value.forEach((T) => {
      T.levels.forEach((M) => {
        let R = M.publishedFileId || M.title, O = ct[T.theme].thumbnail, U = k(R);
        U != null && (O = U), M.thumbnail && (O = M.thumbnail), E.push({ ...M, background_color: ct[T.theme].background_color, pack: T.title, theme: T.theme, thumbnail: O });
      });
    }), E;
  });
  let l = app.storage.getScores();
  const d = V({}), c = V({}), u = V(""), p = ut(() => o.value.filter((E) => x(E) && Object.values(E).some((T) => T?.toString().toLowerCase().includes(u.value.toLowerCase()))));
  function a() {
    window.addEventListener("openLevelSelectorPopup", m), window.addEventListener("closeLevelSelectorPopup", h), window.addEventListener("keydown", g);
  }
  function s() {
    window.removeEventListener("openLevelSelectorPopup", m), window.removeEventListener("closeLevelSelectorPopup", h), window.removeEventListener("keydown", g);
  }
  function m(E) {
    e.value = true;
    const T = app.storage.getSettings(), M = v(T);
    d.value = o.value[M - 1], c.value = r.value.find((R) => R.title == d.value.pack), L();
  }
  function h() {
    e.value = false, app.assets.audio.play("click");
  }
  function g(E) {
    if (e.value == true && E.target.tagName != "INPUT") {
      var T = ["Space", "Enter"];
      T.indexOf(E.code) > -1 && (E.preventDefault(), S()), E.code == "Escape" && h();
    }
  }
  function v(E) {
    let T = Number(E.progress || 1);
    for (; o.value[T - 1] == null && T > 1; ) T--;
    return T;
  }
  function x(E) {
    const T = c.value.title == E.pack, M = c.value.title == t.t("popup.text.all");
    return T || M;
  }
  function w(E) {
    c.value = E, p.value[0] && (d.value = p.value[0]), u.value = "", app.assets.audio.play("click");
  }
  function y(E) {
    E.title == d.value.title && S(E.title), d.value = E, app.assets.audio.play("click");
  }
  function b() {
    u.value = "";
  }
  async function S() {
    await app.playLevel({ ...d.value }), window.dispatchEvent(new CustomEvent("setPage", { detail: "campaign" }));
    const E = o.value.findIndex((M) => M.title == d.value.title) + 1, T = app.storage.getSettings();
    T.progress = E, app.updateSettings(T);
  }
  function C(E) {
    return l[E];
  }
  function k(E) {
    return app.storage.getThumbnail(E);
  }
  function P(E, T, M, R) {
    const O = T.value.findIndex((U) => U[R] == E.value[R]);
    M.value.children[O].scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function L() {
    Ls(() => {
      P(c, r, n, "title"), P(d, p, i, "title");
    });
  }
  return de(function() {
    a();
  }), fe(function() {
    s();
  }), (E, T) => (D(), me(Tt, { name: "fade" }, { default: Et(() => [e.value == true ? (D(), z("div", vd, [_("div", { class: "level-selector__background", onClick: T[0] || (T[0] = (M) => h()) }), _("div", { class: "level-selector__container", style: cn({ "background-color": d.value.background_color }) }, [_("div", bd, [_("div", yd, H(A(t).t("popup.text.level_packs")), 1), _("ul", { class: "level-selector__packs-list", ref_key: "packsRef", ref: n }, [(D(true), z(ce, null, ke(r.value, (M) => (D(), z("li", { key: M.title }, [_("button", { class: Y({ selected: c.value.title == M.title }), onClick: (R) => w(M) }, [M.theme ? (D(), z("img", { key: 0, src: A(ct)[M.theme].thumbnail, alt: M.title }, null, 8, wd)) : J("", true), _("span", null, H(M.title), 1)], 10, xd)]))), 128))], 512)]), _("div", Sd, [_("div", Cd, [We(_("input", { class: "level-selector__search", "onUpdate:modelValue": T[1] || (T[1] = (M) => u.value = M), placeholder: `${A(t).t("popup.text.search")}...`, type: "text", onFocus: T[2] || (T[2] = (M) => w(r.value[0])) }, null, 40, kd), [[xo, u.value]]), T[7] || (T[7] = _("button", { class: "search-icon", tabindex: "-1" }, [_("span", { class: "material-symbols-rounded" }, "search")], -1)), u.value.length > 0 ? (D(), z("button", { key: 0, class: "clear-icon", onClick: T[3] || (T[3] = (M) => b()) }, T[6] || (T[6] = [_("span", { class: "material-symbols-rounded" }, "close", -1)]))) : J("", true)]), _("ul", { class: "level-selector__levels-list", ref_key: "levelsRef", ref: i }, [(D(true), z(ce, null, ke(p.value, (M) => (D(), z("li", { key: M.title }, [_("button", { class: Y({ selected: d.value.title == M.title }), onClick: (R) => y(M) }, [M.thumbnail ? (D(), z("img", { key: 0, src: M.thumbnail, alt: M.title }, null, 8, Ed)) : J("", true), _("span", null, H(M.description), 1), C(M.publishedFileId || M.title) ? (D(), z("div", Td, [T[8] || (T[8] = _("span", { class: "material-symbols-rounded" }, "star", -1)), _("span", null, H(C(M.publishedFileId || M.title)), 1)])) : J("", true)], 10, _d)]))), 128))], 512)]), _("div", Pd, [_("div", Ld, H(A(t).t("popup.text.info")), 1), _("div", Md, [(D(), z("div", { class: "level-selector__info-thumbnail", key: c.value.title }, [_("img", { src: d.value.thumbnail, alt: d.value.description }, null, 8, Od), d.value.label ? (D(), z("label", Ad, [_("span", null, H(d.value.label), 1)])) : J("", true)])), _("div", Rd, [_("ul", null, [_("li", Dd, [d.value.author ? (D(), z("span", Id, "Level by " + H(d.value.author || "Doppler"), 1)) : (D(), z("span", Bd, H(d.value.description), 1))]), (D(true), z(ce, null, ke(d.value.links, (M) => (D(), z("li", zd, [_("a", { href: M, target: "_blank", title: M }, [M.includes("speedrun") ? (D(), z("img", Nd)) : (D(), z("span", jd, "link"))], 8, $d)]))), 256))])]), _("button", { onClick: T[4] || (T[4] = (M) => S()) }, [T[9] || (T[9] = _("span", { class: "material-symbols-rounded" }, "play_arrow", -1)), _("span", null, H(A(t).t("popup.button.play")), 1)])])]), _("a", { class: "level-selector__close", onClick: T[5] || (T[5] = (M) => h()), title: A(t).t("popup.button.close") }, T[10] || (T[10] = [_("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, Fd)], 4)])) : J("", true)]), _: 1 }));
} }, qd = $t(Ud, [["__scopeId", "data-v-4fbf0e4d"]]), Hd = { class: "page" }, Vd = { class: "nav" }, Gd = ["title"], Wd = ["title"], Jd = ["title"], Xd = { class: "content fade-in" }, Zd = ["innerHTML"], Kd = { class: "footer" }, Yd = { class: "center" }, Qd = { __name: "BubblePageLevelPicker", emits: ["setPage"], setup(f, { emit: e }) {
  const t = xe({ useScope: "global" });
  var n = V("Select a level"), r = V([]), i = V(), o = app.storage.getScores(), l = app.storage.getSettings(), d = parseInt(l.progress), c = e;
  function u() {
    window.addEventListener("keydown", b), window.addEventListener("itemSelected", h);
  }
  function p() {
    window.removeEventListener("keydown", b), window.removeEventListener("itemSelected", h);
  }
  async function a() {
    await app.playLevel({ ...i.value }), c("setPage", "campaign");
  }
  function s(S) {
    return o[S];
  }
  function m(S) {
    return app.storage.getThumbnail(S);
  }
  function h(S) {
    i.value == S.detail && a(), i.value = S.detail, l = app.storage.getSettings(), l.progress = app.level.getLevelIndex(i.value.title) + 1, app.updateSettings(l), g();
  }
  function g() {
    var S = app.level.getLevelIndex(i.value.title), C = 0;
    Ne.packs.forEach(function(k) {
      k.levels.forEach(function(P) {
        S == C && (n.value = `${k.title} - <em>${i.value.description || i.value.title}</em>`), C++;
      });
    });
  }
  function v() {
    var S = d - 1, C = 0, k = {};
    Ne.packs.forEach(function(P) {
      P.levels.forEach(function(L) {
        k = L, (S == C || S == C + 1) && (i.value = L), C++;
      });
    }), i.value == null && (d = C, i.value = k);
  }
  function x() {
    c("setPage", "home");
  }
  function w() {
    r.value = [], Ne.packs.forEach(function(S, C) {
      S.levels.forEach(function(k, P) {
        let L = k.publishedFileId || k.title, E = ct[S.theme].thumbnail, T = m(L);
        T != null && (E = T), k.thumbnail && (E = k.thumbnail);
        let M = s(L);
        M ? k.tag = '<span class="material-symbols-rounded">star</span><span>' + M + "</span>" : k.tag = '<span class="material-symbols-rounded">more_horiz</span>', k.url = E, k.subtitle = k.description || k.title, k.theme = S.theme, r.value.push(k);
      });
    });
  }
  function y() {
    window.dispatchEvent(new CustomEvent("openLevelSelectorPopup"));
  }
  function b(S) {
    if (S.target.value == null) {
      var C = ["Space", "Enter", "ArrowUp", "KeyW"];
      C.indexOf(S.code) > -1 && (S.preventDefault(), a()), (S.code == "Escape" || S.code == "KeyE") && (S.preventDefault(), x());
    }
  }
  return Ti(function() {
    w(), v(), g();
  }), de(function() {
    u(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-picker" }));
  }), fe(function() {
    p();
  }), (S, C) => (D(), z("div", Hd, [C[4] || (C[4] = _("div", { class: "background" }, [_("img", { src: "../svg/background-purple.svg" })], -1)), _("div", Vd, [_("a", { class: "button fade-in", onClick: x, title: A(t).t("level_picker.button.exit") }, C[0] || (C[0] = [_("span", { class: "material-symbols-rounded" }, "undo", -1)]), 8, Gd), _("a", { class: "button fade-in right", onClick: y, title: A(t).t("popup.text.search") }, C[1] || (C[1] = [_("span", { class: "material-symbols-rounded" }, "view_list", -1)]), 8, Wd), _("a", { class: "button fade-in", href: "../index.html?workshop=true", title: A(t).t("workshop.text.workshop") }, C[2] || (C[2] = [_("img", { src: "../svg/steam.svg" }, null, -1)]), 8, Jd), ie(bn, { class: "button fade-in" })]), _("div", Xd, [_("h1", null, H(A(t).t("level_picker.title")), 1), _("p", { innerHTML: A(n) }, null, 8, Zd), ie(Ii, { items: A(r), selected: A(i), hideTitle: true }, null, 8, ["items", "selected"]), _("div", Kd, [_("div", Yd, [_("a", { class: "button fade-in", onClick: a }, [C[3] || (C[3] = _("span", { class: "material-symbols-rounded" }, "slideshow", -1)), he(" " + H(A(t).t("level_picker.button.play")), 1)])])])]), ie(qd)]));
} }, ef = $t(Qd, [["__scopeId", "data-v-cb280935"]]), tf = { key: 0, class: "controls" }, nf = { class: "wasd" }, rf = { class: "row" }, sf = { __name: "BubbleControls", setup(f) {
  var e = V({}), t = V(false);
  function n() {
    window.addEventListener("keydown", i), window.addEventListener("keyup", o), window.addEventListener("setMode", d);
  }
  function r() {
    window.removeEventListener("keydown", i), window.removeEventListener("keyup", o), window.removeEventListener("setMode", d);
  }
  function i(c) {
    c.target.value == null && (e.value[c.code] = true);
  }
  function o(c) {
    e.value[c.code] = false;
  }
  function l(c, u) {
    window.dispatchEvent(new KeyboardEvent(c, { code: u })), e.value[u] = c == "keydown";
  }
  function d(c) {
    var u = c.detail;
    u == "control" ? t.value = true : t.value = false;
  }
  return de(function() {
    n();
  }), fe(function() {
    r();
  }), (c, u) => A(t) ? (D(), z("div", tf, [_("div", nf, [_("div", rf, [_("div", { class: Y(["key fade-in", { active: A(e).KeyA || A(e).ArrowLeft }]), onPointerdown: u[0] || (u[0] = (p) => l("keydown", "KeyA")), onPointerup: u[1] || (u[1] = (p) => l("keyup", "KeyA")), onPointerout: u[2] || (u[2] = (p) => l("keyup", "KeyA")) }, u[9] || (u[9] = [_("span", { class: "material-symbols-rounded" }, "arrow_back", -1)]), 34), _("div", { class: Y(["key fade-in", { active: A(e).KeyW || A(e).ArrowUp || A(e).Space }]), onPointerdown: u[3] || (u[3] = (p) => l("keydown", "KeyW")), onPointerup: u[4] || (u[4] = (p) => l("keyup", "KeyW")), onPointerout: u[5] || (u[5] = (p) => l("keyup", "KeyW")) }, u[10] || (u[10] = [_("span", { class: "material-symbols-rounded" }, "arrow_upward", -1)]), 34), _("div", { class: Y(["key fade-in", { active: A(e).KeyD || A(e).ArrowRight }]), onPointerdown: u[6] || (u[6] = (p) => l("keydown", "KeyD")), onPointerup: u[7] || (u[7] = (p) => l("keyup", "KeyD")), onPointerout: u[8] || (u[8] = (p) => l("keyup", "KeyD")) }, u[11] || (u[11] = [_("span", { class: "material-symbols-rounded" }, "arrow_forward", -1)]), 34)])])])) : J("", true);
} }, af = { key: 0, class: "material-symbols-rounded" }, of = { key: 1, class: "material-symbols-rounded" }, uf = { key: 2, class: "fps" }, lf = ["innerHTML"], cf = { __name: "BubbleStats", setup(f) {
  var e = V(false), t = Date.now(), n = false, r = 0, i = V(app?.stats?.mode || "fps"), o = V(0), l = V(""), d = ut(() => "<span>" + l.value.split("").join("</span><span>") + "</span>");
  function c() {
    window.addEventListener("updateStatsVisibility", m);
  }
  function u() {
    window.removeEventListener("updateStatsVisibility", m);
  }
  function p() {
    if (n == true) if (requestAnimationFrame(function() {
      p();
    }), i.value == "fps") {
      var g = Date.now();
      r++, g > t + 1e3 && (o.value = Math.round(r * 1e3 / (g - t)), t = g, r = 0);
    } else l.value = `x:${Math.floor(app.player.position.x)}, y:${Math.floor(app.player.position.y)}, z:${Math.floor(app.player.position.z)}`;
  }
  function a() {
    n = true, p();
  }
  function s() {
    n = false;
  }
  function m() {
    var g = app.storage.getSettings(app);
    e.value = g.stats;
  }
  function h() {
    i.value == "fps" ? i.value = "position" : i.value = "fps", app.stats = Object.assign(app.stats || {}, { mode: i.value });
  }
  return de(function() {
    a(), m(), c();
  }), fe(function() {
    s(), u();
  }), (g, v) => A(e) ? (D(), z("a", { key: 0, class: Y(["stats button left fade-in", A(i)]), onClick: h }, [A(i) == "fps" ? (D(), z("span", af, "speed")) : J("", true), A(i) == "position" ? (D(), z("span", of, "my_location")) : J("", true), A(i) == "fps" ? (D(), z("span", uf, H(A(o)) + " FPS", 1)) : J("", true), A(i) == "position" ? (D(), z("div", { key: 3, class: "position", innerHTML: A(d) }, null, 8, lf)) : J("", true)], 2)) : J("", true);
} }, df = $t(cf, [["__scopeId", "data-v-ad0accaf"]]), ff = { class: "page" }, pf = { class: "nav" }, hf = ["title"], mf = { key: 0, class: "record" }, gf = ["innerHTML"], vf = { class: "footer" }, bf = ["innerHTML"], yf = { __name: "BubblePageCampaign", setup(f) {
  const e = xe({ useScope: "global" });
  var t = V(""), n = V(true), r = V();
  function i() {
    window.addEventListener("setCredit", l), window.addEventListener("popupOpened", c), window.addEventListener("popupClosed", u), window.addEventListener("beforeSettingsOpened", p), window.addEventListener("beforeSettingsClosed", a), window.addEventListener("keydown", s), window.addEventListener("keyup", m);
  }
  function o() {
    window.removeEventListener("setCredit", l), window.removeEventListener("popupOpened", c), window.removeEventListener("popupClosed", u), window.removeEventListener("beforeSettingsOpened", p), window.removeEventListener("beforeSettingsClosed", a), window.removeEventListener("keydown", s), window.removeEventListener("keyup", m);
  }
  function l(g) {
    g.detail.text && (t.value = g.detail.text);
  }
  function d() {
    app.pauseLevel(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: e.t("popup.text.paused"), inputs: [{ value: e.t("popup.button.exit"), type: "button", callback: function(g) {
      app.exitCampaign();
    } }, { value: e.t("popup.button.retry"), type: "button", callback: function(g) {
      app.level.retryLevel();
    } }, { value: e.t("popup.button.play"), type: "button", callback: function(g) {
      setTimeout(function() {
        app.resumeLevel();
      }, 100);
    } }] } }));
  }
  function c() {
    n.value = false;
  }
  function u() {
    n.value = true, h();
  }
  function p() {
    app.pauseLevel();
  }
  function a() {
    app.resumeLevel();
  }
  function s(g) {
    if (n.value == true && g.target.value == null) if (g.code == "Escape") g.preventDefault(), d();
    else if (g.code == "KeyE") app.exitCampaign();
    else if (g.code == "KeyR") app.level.retryLevel();
    else if (g.code == "KeyC") app.player.restart();
    else if (g.code == "KeyA" || g.code == "ArrowLeft") app.play == true && app.player.setControls("left", -1);
    else if (g.code == "KeyD" || g.code == "ArrowRight") app.play == true && app.player.setControls("right", 1);
    else {
      var v = ["Space", "Enter", "ArrowUp", "KeyW"];
      v.indexOf(g.code) > -1 && app.player.jump();
    }
  }
  function m(g) {
    g.code == "KeyA" || g.code == "ArrowLeft" ? app.player.setControls("left", 0) : (g.code == "KeyD" || g.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  function h() {
    var g = app.storage.getScores(), v = g[app.level.publishedFileId || app.level.name];
    v && (r.value = app.timer.toHTML(v));
  }
  return de(function() {
    app.showCanvas(), h(), i(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "campaign" }));
  }), fe(function() {
    app.hideCanvas(), o();
  }), (g, v) => (D(), z("div", ff, [_("div", pf, [_("div", { class: "score fade-in", onClick: v[0] || (v[0] = (x) => d()), title: A(e).t("campaign.button.pause") }, [v[2] || (v[2] = _("div", { class: "current" }, [_("span", { class: "material-symbols-rounded" }, "pause_circle"), _("div", { id: "timer" })], -1)), A(r) ? (D(), z("div", mf, [v[1] || (v[1] = _("span", { class: "material-symbols-rounded" }, "star", -1)), _("div", { innerHTML: A(r) }, null, 8, gf)])) : J("", true)], 8, hf), ie(bn, { class: "button right fade-in" })]), _("div", vf, [ie(df), A(t) ? (D(), z("div", { key: 0, id: "credit", class: "credit button fade-in disabled", innerHTML: A(t) }, null, 8, bf)) : J("", true), ie(sf)])]));
} };
var Fe = {}, Ue = {}, On = {}, qe = {}, Ht = {}, mr;
function xf() {
  return mr || (mr = 1, Object.defineProperty(Ht, "__esModule", { value: true }), Ht.default = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(f) {
    return f.charCodeAt(0);
  }))), Ht;
}
var Vt = {}, gr;
function wf() {
  return gr || (gr = 1, Object.defineProperty(Vt, "__esModule", { value: true }), Vt.default = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(f) {
    return f.charCodeAt(0);
  }))), Vt;
}
var An = {}, vr;
function br() {
  return vr || (vr = 1, function(f) {
    var e;
    Object.defineProperty(f, "__esModule", { value: true }), f.replaceCodePoint = f.fromCodePoint = void 0;
    var t = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
    f.fromCodePoint = (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(i) {
      var o = "";
      return i > 65535 && (i -= 65536, o += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), o += String.fromCharCode(i), o;
    };
    function n(i) {
      var o;
      return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (o = t.get(i)) !== null && o !== void 0 ? o : i;
    }
    f.replaceCodePoint = n;
    function r(i) {
      return (0, f.fromCodePoint)(n(i));
    }
    f.default = r;
  }(An)), An;
}
var yr;
function hn() {
  return yr || (yr = 1, function(f) {
    var e = qe && qe.__createBinding || (Object.create ? function(E, T, M, R) {
      R === void 0 && (R = M);
      var O = Object.getOwnPropertyDescriptor(T, M);
      (!O || ("get" in O ? !T.__esModule : O.writable || O.configurable)) && (O = { enumerable: true, get: function() {
        return T[M];
      } }), Object.defineProperty(E, R, O);
    } : function(E, T, M, R) {
      R === void 0 && (R = M), E[R] = T[M];
    }), t = qe && qe.__setModuleDefault || (Object.create ? function(E, T) {
      Object.defineProperty(E, "default", { enumerable: true, value: T });
    } : function(E, T) {
      E.default = T;
    }), n = qe && qe.__importStar || function(E) {
      if (E && E.__esModule) return E;
      var T = {};
      if (E != null) for (var M in E) M !== "default" && Object.prototype.hasOwnProperty.call(E, M) && e(T, E, M);
      return t(T, E), T;
    }, r = qe && qe.__importDefault || function(E) {
      return E && E.__esModule ? E : { default: E };
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.decodeXML = f.decodeHTMLStrict = f.decodeHTMLAttribute = f.decodeHTML = f.determineBranch = f.EntityDecoder = f.DecodingMode = f.BinTrieFlags = f.fromCodePoint = f.replaceCodePoint = f.decodeCodePoint = f.xmlDecodeTree = f.htmlDecodeTree = void 0;
    var i = r(xf());
    f.htmlDecodeTree = i.default;
    var o = r(wf());
    f.xmlDecodeTree = o.default;
    var l = n(br());
    f.decodeCodePoint = l.default;
    var d = br();
    Object.defineProperty(f, "replaceCodePoint", { enumerable: true, get: function() {
      return d.replaceCodePoint;
    } }), Object.defineProperty(f, "fromCodePoint", { enumerable: true, get: function() {
      return d.fromCodePoint;
    } });
    var c;
    (function(E) {
      E[E.NUM = 35] = "NUM", E[E.SEMI = 59] = "SEMI", E[E.EQUALS = 61] = "EQUALS", E[E.ZERO = 48] = "ZERO", E[E.NINE = 57] = "NINE", E[E.LOWER_A = 97] = "LOWER_A", E[E.LOWER_F = 102] = "LOWER_F", E[E.LOWER_X = 120] = "LOWER_X", E[E.LOWER_Z = 122] = "LOWER_Z", E[E.UPPER_A = 65] = "UPPER_A", E[E.UPPER_F = 70] = "UPPER_F", E[E.UPPER_Z = 90] = "UPPER_Z";
    })(c || (c = {}));
    var u = 32, p;
    (function(E) {
      E[E.VALUE_LENGTH = 49152] = "VALUE_LENGTH", E[E.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", E[E.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(p = f.BinTrieFlags || (f.BinTrieFlags = {}));
    function a(E) {
      return E >= c.ZERO && E <= c.NINE;
    }
    function s(E) {
      return E >= c.UPPER_A && E <= c.UPPER_F || E >= c.LOWER_A && E <= c.LOWER_F;
    }
    function m(E) {
      return E >= c.UPPER_A && E <= c.UPPER_Z || E >= c.LOWER_A && E <= c.LOWER_Z || a(E);
    }
    function h(E) {
      return E === c.EQUALS || m(E);
    }
    var g;
    (function(E) {
      E[E.EntityStart = 0] = "EntityStart", E[E.NumericStart = 1] = "NumericStart", E[E.NumericDecimal = 2] = "NumericDecimal", E[E.NumericHex = 3] = "NumericHex", E[E.NamedEntity = 4] = "NamedEntity";
    })(g || (g = {}));
    var v;
    (function(E) {
      E[E.Legacy = 0] = "Legacy", E[E.Strict = 1] = "Strict", E[E.Attribute = 2] = "Attribute";
    })(v = f.DecodingMode || (f.DecodingMode = {}));
    var x = function() {
      function E(T, M, R) {
        this.decodeTree = T, this.emitCodePoint = M, this.errors = R, this.state = g.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = v.Strict;
      }
      return E.prototype.startEntity = function(T) {
        this.decodeMode = T, this.state = g.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, E.prototype.write = function(T, M) {
        switch (this.state) {
          case g.EntityStart:
            return T.charCodeAt(M) === c.NUM ? (this.state = g.NumericStart, this.consumed += 1, this.stateNumericStart(T, M + 1)) : (this.state = g.NamedEntity, this.stateNamedEntity(T, M));
          case g.NumericStart:
            return this.stateNumericStart(T, M);
          case g.NumericDecimal:
            return this.stateNumericDecimal(T, M);
          case g.NumericHex:
            return this.stateNumericHex(T, M);
          case g.NamedEntity:
            return this.stateNamedEntity(T, M);
        }
      }, E.prototype.stateNumericStart = function(T, M) {
        return M >= T.length ? -1 : (T.charCodeAt(M) | u) === c.LOWER_X ? (this.state = g.NumericHex, this.consumed += 1, this.stateNumericHex(T, M + 1)) : (this.state = g.NumericDecimal, this.stateNumericDecimal(T, M));
      }, E.prototype.addToNumericResult = function(T, M, R, O) {
        if (M !== R) {
          var U = R - M;
          this.result = this.result * Math.pow(O, U) + parseInt(T.substr(M, U), O), this.consumed += U;
        }
      }, E.prototype.stateNumericHex = function(T, M) {
        for (var R = M; M < T.length; ) {
          var O = T.charCodeAt(M);
          if (a(O) || s(O)) M += 1;
          else return this.addToNumericResult(T, R, M, 16), this.emitNumericEntity(O, 3);
        }
        return this.addToNumericResult(T, R, M, 16), -1;
      }, E.prototype.stateNumericDecimal = function(T, M) {
        for (var R = M; M < T.length; ) {
          var O = T.charCodeAt(M);
          if (a(O)) M += 1;
          else return this.addToNumericResult(T, R, M, 10), this.emitNumericEntity(O, 2);
        }
        return this.addToNumericResult(T, R, M, 10), -1;
      }, E.prototype.emitNumericEntity = function(T, M) {
        var R;
        if (this.consumed <= M) return (R = this.errors) === null || R === void 0 || R.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (T === c.SEMI) this.consumed += 1;
        else if (this.decodeMode === v.Strict) return 0;
        return this.emitCodePoint((0, l.replaceCodePoint)(this.result), this.consumed), this.errors && (T !== c.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, E.prototype.stateNamedEntity = function(T, M) {
        for (var R = this.decodeTree, O = R[this.treeIndex], U = (O & p.VALUE_LENGTH) >> 14; M < T.length; M++, this.excess++) {
          var N = T.charCodeAt(M);
          if (this.treeIndex = y(R, O, this.treeIndex + Math.max(1, U), N), this.treeIndex < 0) return this.result === 0 || this.decodeMode === v.Attribute && (U === 0 || h(N)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (O = R[this.treeIndex], U = (O & p.VALUE_LENGTH) >> 14, U !== 0) {
            if (N === c.SEMI) return this.emitNamedEntityData(this.treeIndex, U, this.consumed + this.excess);
            this.decodeMode !== v.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, E.prototype.emitNotTerminatedNamedEntity = function() {
        var T, M = this, R = M.result, O = M.decodeTree, U = (O[R] & p.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(R, U, this.consumed), (T = this.errors) === null || T === void 0 || T.missingSemicolonAfterCharacterReference(), this.consumed;
      }, E.prototype.emitNamedEntityData = function(T, M, R) {
        var O = this.decodeTree;
        return this.emitCodePoint(M === 1 ? O[T] & ~p.VALUE_LENGTH : O[T + 1], R), M === 3 && this.emitCodePoint(O[T + 2], R), R;
      }, E.prototype.end = function() {
        var T;
        switch (this.state) {
          case g.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== v.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case g.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case g.NumericHex:
            return this.emitNumericEntity(0, 3);
          case g.NumericStart:
            return (T = this.errors) === null || T === void 0 || T.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case g.EntityStart:
            return 0;
        }
      }, E;
    }();
    f.EntityDecoder = x;
    function w(E) {
      var T = "", M = new x(E, function(R) {
        return T += (0, l.fromCodePoint)(R);
      });
      return function(O, U) {
        for (var N = 0, $ = 0; ($ = O.indexOf("&", $)) >= 0; ) {
          T += O.slice(N, $), M.startEntity(U);
          var F = M.write(O, $ + 1);
          if (F < 0) {
            N = $ + M.end();
            break;
          }
          N = $ + F, $ = F === 0 ? N + 1 : N;
        }
        var B = T + O.slice(N);
        return T = "", B;
      };
    }
    function y(E, T, M, R) {
      var O = (T & p.BRANCH_LENGTH) >> 7, U = T & p.JUMP_TABLE;
      if (O === 0) return U !== 0 && R === U ? M : -1;
      if (U) {
        var N = R - U;
        return N < 0 || N >= O ? -1 : E[M + N] - 1;
      }
      for (var $ = M, F = $ + O - 1; $ <= F; ) {
        var B = $ + F >>> 1, I = E[B];
        if (I < R) $ = B + 1;
        else if (I > R) F = B - 1;
        else return E[B + O];
      }
      return -1;
    }
    f.determineBranch = y;
    var b = w(i.default), S = w(o.default);
    function C(E, T) {
      return T === void 0 && (T = v.Legacy), b(E, T);
    }
    f.decodeHTML = C;
    function k(E) {
      return b(E, v.Attribute);
    }
    f.decodeHTMLAttribute = k;
    function P(E) {
      return b(E, v.Strict);
    }
    f.decodeHTMLStrict = P;
    function L(E) {
      return S(E, v.Strict);
    }
    f.decodeXML = L;
  }(qe)), qe;
}
var xr;
function ka() {
  return xr || (xr = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.QuoteType = void 0;
    var e = hn(), t;
    (function(a) {
      a[a.Tab = 9] = "Tab", a[a.NewLine = 10] = "NewLine", a[a.FormFeed = 12] = "FormFeed", a[a.CarriageReturn = 13] = "CarriageReturn", a[a.Space = 32] = "Space", a[a.ExclamationMark = 33] = "ExclamationMark", a[a.Number = 35] = "Number", a[a.Amp = 38] = "Amp", a[a.SingleQuote = 39] = "SingleQuote", a[a.DoubleQuote = 34] = "DoubleQuote", a[a.Dash = 45] = "Dash", a[a.Slash = 47] = "Slash", a[a.Zero = 48] = "Zero", a[a.Nine = 57] = "Nine", a[a.Semi = 59] = "Semi", a[a.Lt = 60] = "Lt", a[a.Eq = 61] = "Eq", a[a.Gt = 62] = "Gt", a[a.Questionmark = 63] = "Questionmark", a[a.UpperA = 65] = "UpperA", a[a.LowerA = 97] = "LowerA", a[a.UpperF = 70] = "UpperF", a[a.LowerF = 102] = "LowerF", a[a.UpperZ = 90] = "UpperZ", a[a.LowerZ = 122] = "LowerZ", a[a.LowerX = 120] = "LowerX", a[a.OpeningSquareBracket = 91] = "OpeningSquareBracket";
    })(t || (t = {}));
    var n;
    (function(a) {
      a[a.Text = 1] = "Text", a[a.BeforeTagName = 2] = "BeforeTagName", a[a.InTagName = 3] = "InTagName", a[a.InSelfClosingTag = 4] = "InSelfClosingTag", a[a.BeforeClosingTagName = 5] = "BeforeClosingTagName", a[a.InClosingTagName = 6] = "InClosingTagName", a[a.AfterClosingTagName = 7] = "AfterClosingTagName", a[a.BeforeAttributeName = 8] = "BeforeAttributeName", a[a.InAttributeName = 9] = "InAttributeName", a[a.AfterAttributeName = 10] = "AfterAttributeName", a[a.BeforeAttributeValue = 11] = "BeforeAttributeValue", a[a.InAttributeValueDq = 12] = "InAttributeValueDq", a[a.InAttributeValueSq = 13] = "InAttributeValueSq", a[a.InAttributeValueNq = 14] = "InAttributeValueNq", a[a.BeforeDeclaration = 15] = "BeforeDeclaration", a[a.InDeclaration = 16] = "InDeclaration", a[a.InProcessingInstruction = 17] = "InProcessingInstruction", a[a.BeforeComment = 18] = "BeforeComment", a[a.CDATASequence = 19] = "CDATASequence", a[a.InSpecialComment = 20] = "InSpecialComment", a[a.InCommentLike = 21] = "InCommentLike", a[a.BeforeSpecialS = 22] = "BeforeSpecialS", a[a.SpecialStartSequence = 23] = "SpecialStartSequence", a[a.InSpecialTag = 24] = "InSpecialTag", a[a.BeforeEntity = 25] = "BeforeEntity", a[a.BeforeNumericEntity = 26] = "BeforeNumericEntity", a[a.InNamedEntity = 27] = "InNamedEntity", a[a.InNumericEntity = 28] = "InNumericEntity", a[a.InHexEntity = 29] = "InHexEntity";
    })(n || (n = {}));
    function r(a) {
      return a === t.Space || a === t.NewLine || a === t.Tab || a === t.FormFeed || a === t.CarriageReturn;
    }
    function i(a) {
      return a === t.Slash || a === t.Gt || r(a);
    }
    function o(a) {
      return a >= t.Zero && a <= t.Nine;
    }
    function l(a) {
      return a >= t.LowerA && a <= t.LowerZ || a >= t.UpperA && a <= t.UpperZ;
    }
    function d(a) {
      return a >= t.UpperA && a <= t.UpperF || a >= t.LowerA && a <= t.LowerF;
    }
    var c;
    (function(a) {
      a[a.NoValue = 0] = "NoValue", a[a.Unquoted = 1] = "Unquoted", a[a.Single = 2] = "Single", a[a.Double = 3] = "Double";
    })(c = f.QuoteType || (f.QuoteType = {}));
    var u = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]) }, p = function() {
      function a(s, m) {
        var h = s.xmlMode, g = h === void 0 ? false : h, v = s.decodeEntities, x = v === void 0 ? true : v;
        this.cbs = m, this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.isSpecial = false, this.running = true, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = g, this.decodeEntities = x, this.entityTrie = g ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return a.prototype.reset = function() {
        this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.currentSequence = void 0, this.running = true, this.offset = 0;
      }, a.prototype.write = function(s) {
        this.offset += this.buffer.length, this.buffer = s, this.parse();
      }, a.prototype.end = function() {
        this.running && this.finish();
      }, a.prototype.pause = function() {
        this.running = false;
      }, a.prototype.resume = function() {
        this.running = true, this.index < this.buffer.length + this.offset && this.parse();
      }, a.prototype.getIndex = function() {
        return this.index;
      }, a.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, a.prototype.stateText = function(s) {
        s === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = n.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && s === t.Amp && (this.state = n.BeforeEntity);
      }, a.prototype.stateSpecialStartSequence = function(s) {
        var m = this.sequenceIndex === this.currentSequence.length, h = m ? i(s) : (s | 32) === this.currentSequence[this.sequenceIndex];
        if (!h) this.isSpecial = false;
        else if (!m) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = n.InTagName, this.stateInTagName(s);
      }, a.prototype.stateInSpecialTag = function(s) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (s === t.Gt || r(s)) {
            var m = this.index - this.currentSequence.length;
            if (this.sectionStart < m) {
              var h = this.index;
              this.index = m, this.cbs.ontext(this.sectionStart, m), this.index = h;
            }
            this.isSpecial = false, this.sectionStart = m + 2, this.stateInClosingTagName(s);
            return;
          }
          this.sequenceIndex = 0;
        }
        (s | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === u.TitleEnd ? this.decodeEntities && s === t.Amp && (this.state = n.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(s === t.Lt);
      }, a.prototype.stateCDATASequence = function(s) {
        s === u.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === u.Cdata.length && (this.state = n.InCommentLike, this.currentSequence = u.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = n.InDeclaration, this.stateInDeclaration(s));
      }, a.prototype.fastForwardTo = function(s) {
        for (; ++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === s) return true;
        return this.index = this.buffer.length + this.offset - 1, false;
      }, a.prototype.stateInCommentLike = function(s) {
        s === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === u.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = n.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : s !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, a.prototype.isTagStartChar = function(s) {
        return this.xmlMode ? !i(s) : l(s);
      }, a.prototype.startSpecial = function(s, m) {
        this.isSpecial = true, this.currentSequence = s, this.sequenceIndex = m, this.state = n.SpecialStartSequence;
      }, a.prototype.stateBeforeTagName = function(s) {
        if (s === t.ExclamationMark) this.state = n.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (s === t.Questionmark) this.state = n.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(s)) {
          var m = s | 32;
          this.sectionStart = this.index, !this.xmlMode && m === u.TitleEnd[2] ? this.startSpecial(u.TitleEnd, 3) : this.state = !this.xmlMode && m === u.ScriptEnd[2] ? n.BeforeSpecialS : n.InTagName;
        } else s === t.Slash ? this.state = n.BeforeClosingTagName : (this.state = n.Text, this.stateText(s));
      }, a.prototype.stateInTagName = function(s) {
        i(s) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(s));
      }, a.prototype.stateBeforeClosingTagName = function(s) {
        r(s) || (s === t.Gt ? this.state = n.Text : (this.state = this.isTagStartChar(s) ? n.InClosingTagName : n.InSpecialComment, this.sectionStart = this.index));
      }, a.prototype.stateInClosingTagName = function(s) {
        (s === t.Gt || r(s)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterClosingTagName, this.stateAfterClosingTagName(s));
      }, a.prototype.stateAfterClosingTagName = function(s) {
        (s === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1);
      }, a.prototype.stateBeforeAttributeName = function(s) {
        s === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = n.InSpecialTag, this.sequenceIndex = 0) : this.state = n.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : s === t.Slash ? this.state = n.InSelfClosingTag : r(s) || (this.state = n.InAttributeName, this.sectionStart = this.index);
      }, a.prototype.stateInSelfClosingTag = function(s) {
        s === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1, this.isSpecial = false) : r(s) || (this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(s));
      }, a.prototype.stateInAttributeName = function(s) {
        (s === t.Eq || i(s)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterAttributeName, this.stateAfterAttributeName(s));
      }, a.prototype.stateAfterAttributeName = function(s) {
        s === t.Eq ? this.state = n.BeforeAttributeValue : s === t.Slash || s === t.Gt ? (this.cbs.onattribend(c.NoValue, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(s)) : r(s) || (this.cbs.onattribend(c.NoValue, this.index), this.state = n.InAttributeName, this.sectionStart = this.index);
      }, a.prototype.stateBeforeAttributeValue = function(s) {
        s === t.DoubleQuote ? (this.state = n.InAttributeValueDq, this.sectionStart = this.index + 1) : s === t.SingleQuote ? (this.state = n.InAttributeValueSq, this.sectionStart = this.index + 1) : r(s) || (this.sectionStart = this.index, this.state = n.InAttributeValueNq, this.stateInAttributeValueNoQuotes(s));
      }, a.prototype.handleInAttributeValue = function(s, m) {
        s === m || !this.decodeEntities && this.fastForwardTo(m) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(m === t.DoubleQuote ? c.Double : c.Single, this.index), this.state = n.BeforeAttributeName) : this.decodeEntities && s === t.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
      }, a.prototype.stateInAttributeValueDoubleQuotes = function(s) {
        this.handleInAttributeValue(s, t.DoubleQuote);
      }, a.prototype.stateInAttributeValueSingleQuotes = function(s) {
        this.handleInAttributeValue(s, t.SingleQuote);
      }, a.prototype.stateInAttributeValueNoQuotes = function(s) {
        r(s) || s === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(c.Unquoted, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(s)) : this.decodeEntities && s === t.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
      }, a.prototype.stateBeforeDeclaration = function(s) {
        s === t.OpeningSquareBracket ? (this.state = n.CDATASequence, this.sequenceIndex = 0) : this.state = s === t.Dash ? n.BeforeComment : n.InDeclaration;
      }, a.prototype.stateInDeclaration = function(s) {
        (s === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
      }, a.prototype.stateInProcessingInstruction = function(s) {
        (s === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
      }, a.prototype.stateBeforeComment = function(s) {
        s === t.Dash ? (this.state = n.InCommentLike, this.currentSequence = u.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = n.InDeclaration;
      }, a.prototype.stateInSpecialComment = function(s) {
        (s === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = n.Text, this.sectionStart = this.index + 1);
      }, a.prototype.stateBeforeSpecialS = function(s) {
        var m = s | 32;
        m === u.ScriptEnd[3] ? this.startSpecial(u.ScriptEnd, 4) : m === u.StyleEnd[3] ? this.startSpecial(u.StyleEnd, 4) : (this.state = n.InTagName, this.stateInTagName(s));
      }, a.prototype.stateBeforeEntity = function(s) {
        this.entityExcess = 1, this.entityResult = 0, s === t.Number ? this.state = n.BeforeNumericEntity : s === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = n.InNamedEntity, this.stateInNamedEntity(s));
      }, a.prototype.stateInNamedEntity = function(s) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, s), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var m = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (m) {
          var h = (m >> 14) - 1;
          if (!this.allowLegacyEntity() && s !== t.Semi) this.trieIndex += h;
          else {
            var g = this.index - this.entityExcess + 1;
            g > this.sectionStart && this.emitPartial(this.sectionStart, g), this.entityResult = this.trieIndex, this.trieIndex += h, this.entityExcess = 0, this.sectionStart = this.index + 1, h === 0 && this.emitNamedEntity();
          }
        }
      }, a.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var s = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (s) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, a.prototype.stateBeforeNumericEntity = function(s) {
        (s | 32) === t.LowerX ? (this.entityExcess++, this.state = n.InHexEntity) : (this.state = n.InNumericEntity, this.stateInNumericEntity(s));
      }, a.prototype.emitNumericEntity = function(s) {
        var m = this.index - this.entityExcess - 1, h = m + 2 + +(this.state === n.InHexEntity);
        h !== this.index && (m > this.sectionStart && this.emitPartial(this.sectionStart, m), this.sectionStart = this.index + Number(s), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, a.prototype.stateInNumericEntity = function(s) {
        s === t.Semi ? this.emitNumericEntity(true) : o(s) ? (this.entityResult = this.entityResult * 10 + (s - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state = this.baseState, this.index--);
      }, a.prototype.stateInHexEntity = function(s) {
        s === t.Semi ? this.emitNumericEntity(true) : o(s) ? (this.entityResult = this.entityResult * 16 + (s - t.Zero), this.entityExcess++) : d(s) ? (this.entityResult = this.entityResult * 16 + ((s | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state = this.baseState, this.index--);
      }, a.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === n.Text || this.baseState === n.InSpecialTag);
      }, a.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === n.Text || this.state === n.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === n.InAttributeValueDq || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, a.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, a.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var s = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case n.Text: {
              this.stateText(s);
              break;
            }
            case n.SpecialStartSequence: {
              this.stateSpecialStartSequence(s);
              break;
            }
            case n.InSpecialTag: {
              this.stateInSpecialTag(s);
              break;
            }
            case n.CDATASequence: {
              this.stateCDATASequence(s);
              break;
            }
            case n.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(s);
              break;
            }
            case n.InAttributeName: {
              this.stateInAttributeName(s);
              break;
            }
            case n.InCommentLike: {
              this.stateInCommentLike(s);
              break;
            }
            case n.InSpecialComment: {
              this.stateInSpecialComment(s);
              break;
            }
            case n.BeforeAttributeName: {
              this.stateBeforeAttributeName(s);
              break;
            }
            case n.InTagName: {
              this.stateInTagName(s);
              break;
            }
            case n.InClosingTagName: {
              this.stateInClosingTagName(s);
              break;
            }
            case n.BeforeTagName: {
              this.stateBeforeTagName(s);
              break;
            }
            case n.AfterAttributeName: {
              this.stateAfterAttributeName(s);
              break;
            }
            case n.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(s);
              break;
            }
            case n.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(s);
              break;
            }
            case n.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(s);
              break;
            }
            case n.AfterClosingTagName: {
              this.stateAfterClosingTagName(s);
              break;
            }
            case n.BeforeSpecialS: {
              this.stateBeforeSpecialS(s);
              break;
            }
            case n.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(s);
              break;
            }
            case n.InSelfClosingTag: {
              this.stateInSelfClosingTag(s);
              break;
            }
            case n.InDeclaration: {
              this.stateInDeclaration(s);
              break;
            }
            case n.BeforeDeclaration: {
              this.stateBeforeDeclaration(s);
              break;
            }
            case n.BeforeComment: {
              this.stateBeforeComment(s);
              break;
            }
            case n.InProcessingInstruction: {
              this.stateInProcessingInstruction(s);
              break;
            }
            case n.InNamedEntity: {
              this.stateInNamedEntity(s);
              break;
            }
            case n.BeforeEntity: {
              this.stateBeforeEntity(s);
              break;
            }
            case n.InHexEntity: {
              this.stateInHexEntity(s);
              break;
            }
            case n.InNumericEntity: {
              this.stateInNumericEntity(s);
              break;
            }
            default:
              this.stateBeforeNumericEntity(s);
          }
          this.index++;
        }
        this.cleanup();
      }, a.prototype.finish = function() {
        this.state === n.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, a.prototype.handleTrailingData = function() {
        var s = this.buffer.length + this.offset;
        this.state === n.InCommentLike ? this.currentSequence === u.CdataEnd ? this.cbs.oncdata(this.sectionStart, s, 0) : this.cbs.oncomment(this.sectionStart, s, 0) : this.state === n.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state === n.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state === n.InTagName || this.state === n.BeforeAttributeName || this.state === n.BeforeAttributeValue || this.state === n.AfterAttributeName || this.state === n.InAttributeName || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueDq || this.state === n.InAttributeValueNq || this.state === n.InClosingTagName || this.cbs.ontext(this.sectionStart, s);
      }, a.prototype.emitPartial = function(s, m) {
        this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribdata(s, m) : this.cbs.ontext(s, m);
      }, a.prototype.emitCodePoint = function(s) {
        this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribentity(s) : this.cbs.ontextentity(s);
      }, a;
    }();
    f.default = p;
  }(On)), On;
}
var wr;
function Sr() {
  if (wr) return Ue;
  wr = 1;
  var f = Ue && Ue.__createBinding || (Object.create ? function(g, v, x, w) {
    w === void 0 && (w = x);
    var y = Object.getOwnPropertyDescriptor(v, x);
    (!y || ("get" in y ? !v.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
      return v[x];
    } }), Object.defineProperty(g, w, y);
  } : function(g, v, x, w) {
    w === void 0 && (w = x), g[w] = v[x];
  }), e = Ue && Ue.__setModuleDefault || (Object.create ? function(g, v) {
    Object.defineProperty(g, "default", { enumerable: true, value: v });
  } : function(g, v) {
    g.default = v;
  }), t = Ue && Ue.__importStar || function(g) {
    if (g && g.__esModule) return g;
    var v = {};
    if (g != null) for (var x in g) x !== "default" && Object.prototype.hasOwnProperty.call(g, x) && f(v, g, x);
    return e(v, g), v;
  };
  Object.defineProperty(Ue, "__esModule", { value: true }), Ue.Parser = void 0;
  var n = t(ka()), r = hn(), i = /* @__PURE__ */ new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), o = /* @__PURE__ */ new Set(["p"]), l = /* @__PURE__ */ new Set(["thead", "tbody"]), d = /* @__PURE__ */ new Set(["dd", "dt"]), c = /* @__PURE__ */ new Set(["rt", "rp"]), u = /* @__PURE__ */ new Map([["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])], ["th", /* @__PURE__ */ new Set(["th"])], ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])], ["body", /* @__PURE__ */ new Set(["head", "link", "script"])], ["li", /* @__PURE__ */ new Set(["li"])], ["p", o], ["h1", o], ["h2", o], ["h3", o], ["h4", o], ["h5", o], ["h6", o], ["select", i], ["input", i], ["output", i], ["button", i], ["datalist", i], ["textarea", i], ["option", /* @__PURE__ */ new Set(["option"])], ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])], ["dd", d], ["dt", d], ["address", o], ["article", o], ["aside", o], ["blockquote", o], ["details", o], ["div", o], ["dl", o], ["fieldset", o], ["figcaption", o], ["figure", o], ["footer", o], ["form", o], ["header", o], ["hr", o], ["main", o], ["nav", o], ["ol", o], ["pre", o], ["section", o], ["table", o], ["ul", o], ["rt", c], ["rp", c], ["tbody", l], ["tfoot", l]]), p = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), a = /* @__PURE__ */ new Set(["math", "svg"]), s = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), m = /\s|\//, h = function() {
    function g(v, x) {
      x === void 0 && (x = {});
      var w, y, b, S, C;
      this.options = x, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = false, this.cbs = v ?? {}, this.lowerCaseTagNames = (w = x.lowerCaseTags) !== null && w !== void 0 ? w : !x.xmlMode, this.lowerCaseAttributeNames = (y = x.lowerCaseAttributeNames) !== null && y !== void 0 ? y : !x.xmlMode, this.tokenizer = new ((b = x.Tokenizer) !== null && b !== void 0 ? b : n.default)(this.options, this), (C = (S = this.cbs).onparserinit) === null || C === void 0 || C.call(S, this);
    }
    return g.prototype.ontext = function(v, x) {
      var w, y, b = this.getSlice(v, x);
      this.endIndex = x - 1, (y = (w = this.cbs).ontext) === null || y === void 0 || y.call(w, b), this.startIndex = x;
    }, g.prototype.ontextentity = function(v) {
      var x, w, y = this.tokenizer.getSectionStart();
      this.endIndex = y - 1, (w = (x = this.cbs).ontext) === null || w === void 0 || w.call(x, (0, r.fromCodePoint)(v)), this.startIndex = y;
    }, g.prototype.isVoidElement = function(v) {
      return !this.options.xmlMode && p.has(v);
    }, g.prototype.onopentagname = function(v, x) {
      this.endIndex = x;
      var w = this.getSlice(v, x);
      this.lowerCaseTagNames && (w = w.toLowerCase()), this.emitOpenTag(w);
    }, g.prototype.emitOpenTag = function(v) {
      var x, w, y, b;
      this.openTagStart = this.startIndex, this.tagname = v;
      var S = !this.options.xmlMode && u.get(v);
      if (S) for (; this.stack.length > 0 && S.has(this.stack[this.stack.length - 1]); ) {
        var C = this.stack.pop();
        (w = (x = this.cbs).onclosetag) === null || w === void 0 || w.call(x, C, true);
      }
      this.isVoidElement(v) || (this.stack.push(v), a.has(v) ? this.foreignContext.push(true) : s.has(v) && this.foreignContext.push(false)), (b = (y = this.cbs).onopentagname) === null || b === void 0 || b.call(y, v), this.cbs.onopentag && (this.attribs = {});
    }, g.prototype.endOpenTag = function(v) {
      var x, w;
      this.startIndex = this.openTagStart, this.attribs && ((w = (x = this.cbs).onopentag) === null || w === void 0 || w.call(x, this.tagname, this.attribs, v), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, true), this.tagname = "";
    }, g.prototype.onopentagend = function(v) {
      this.endIndex = v, this.endOpenTag(false), this.startIndex = v + 1;
    }, g.prototype.onclosetag = function(v, x) {
      var w, y, b, S, C, k;
      this.endIndex = x;
      var P = this.getSlice(v, x);
      if (this.lowerCaseTagNames && (P = P.toLowerCase()), (a.has(P) || s.has(P)) && this.foreignContext.pop(), this.isVoidElement(P)) !this.options.xmlMode && P === "br" && ((y = (w = this.cbs).onopentagname) === null || y === void 0 || y.call(w, "br"), (S = (b = this.cbs).onopentag) === null || S === void 0 || S.call(b, "br", {}, true), (k = (C = this.cbs).onclosetag) === null || k === void 0 || k.call(C, "br", false));
      else {
        var L = this.stack.lastIndexOf(P);
        if (L !== -1) if (this.cbs.onclosetag) for (var E = this.stack.length - L; E--; ) this.cbs.onclosetag(this.stack.pop(), E !== 0);
        else this.stack.length = L;
        else !this.options.xmlMode && P === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(true));
      }
      this.startIndex = x + 1;
    }, g.prototype.onselfclosingtag = function(v) {
      this.endIndex = v, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(false), this.startIndex = v + 1) : this.onopentagend(v);
    }, g.prototype.closeCurrentTag = function(v) {
      var x, w, y = this.tagname;
      this.endOpenTag(v), this.stack[this.stack.length - 1] === y && ((w = (x = this.cbs).onclosetag) === null || w === void 0 || w.call(x, y, !v), this.stack.pop());
    }, g.prototype.onattribname = function(v, x) {
      this.startIndex = v;
      var w = this.getSlice(v, x);
      this.attribname = this.lowerCaseAttributeNames ? w.toLowerCase() : w;
    }, g.prototype.onattribdata = function(v, x) {
      this.attribvalue += this.getSlice(v, x);
    }, g.prototype.onattribentity = function(v) {
      this.attribvalue += (0, r.fromCodePoint)(v);
    }, g.prototype.onattribend = function(v, x) {
      var w, y;
      this.endIndex = x, (y = (w = this.cbs).onattribute) === null || y === void 0 || y.call(w, this.attribname, this.attribvalue, v === n.QuoteType.Double ? '"' : v === n.QuoteType.Single ? "'" : v === n.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, g.prototype.getInstructionName = function(v) {
      var x = v.search(m), w = x < 0 ? v : v.substr(0, x);
      return this.lowerCaseTagNames && (w = w.toLowerCase()), w;
    }, g.prototype.ondeclaration = function(v, x) {
      this.endIndex = x;
      var w = this.getSlice(v, x);
      if (this.cbs.onprocessinginstruction) {
        var y = this.getInstructionName(w);
        this.cbs.onprocessinginstruction("!".concat(y), "!".concat(w));
      }
      this.startIndex = x + 1;
    }, g.prototype.onprocessinginstruction = function(v, x) {
      this.endIndex = x;
      var w = this.getSlice(v, x);
      if (this.cbs.onprocessinginstruction) {
        var y = this.getInstructionName(w);
        this.cbs.onprocessinginstruction("?".concat(y), "?".concat(w));
      }
      this.startIndex = x + 1;
    }, g.prototype.oncomment = function(v, x, w) {
      var y, b, S, C;
      this.endIndex = x, (b = (y = this.cbs).oncomment) === null || b === void 0 || b.call(y, this.getSlice(v, x - w)), (C = (S = this.cbs).oncommentend) === null || C === void 0 || C.call(S), this.startIndex = x + 1;
    }, g.prototype.oncdata = function(v, x, w) {
      var y, b, S, C, k, P, L, E, T, M;
      this.endIndex = x;
      var R = this.getSlice(v, x - w);
      this.options.xmlMode || this.options.recognizeCDATA ? ((b = (y = this.cbs).oncdatastart) === null || b === void 0 || b.call(y), (C = (S = this.cbs).ontext) === null || C === void 0 || C.call(S, R), (P = (k = this.cbs).oncdataend) === null || P === void 0 || P.call(k)) : ((E = (L = this.cbs).oncomment) === null || E === void 0 || E.call(L, "[CDATA[".concat(R, "]]")), (M = (T = this.cbs).oncommentend) === null || M === void 0 || M.call(T)), this.startIndex = x + 1;
    }, g.prototype.onend = function() {
      var v, x;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var w = this.stack.length; w > 0; this.cbs.onclosetag(this.stack[--w], true)) ;
      }
      (x = (v = this.cbs).onend) === null || x === void 0 || x.call(v);
    }, g.prototype.reset = function() {
      var v, x, w, y;
      (x = (v = this.cbs).onreset) === null || x === void 0 || x.call(v), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (y = (w = this.cbs).onparserinit) === null || y === void 0 || y.call(w, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = false;
    }, g.prototype.parseComplete = function(v) {
      this.reset(), this.end(v);
    }, g.prototype.getSlice = function(v, x) {
      for (; v - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
      for (var w = this.buffers[0].slice(v - this.bufferOffset, x - this.bufferOffset); x - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), w += this.buffers[0].slice(0, x - this.bufferOffset);
      return w;
    }, g.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, g.prototype.write = function(v) {
      var x, w;
      if (this.ended) {
        (w = (x = this.cbs).onerror) === null || w === void 0 || w.call(x, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(v), this.tokenizer.running && (this.tokenizer.write(v), this.writeIndex++);
    }, g.prototype.end = function(v) {
      var x, w;
      if (this.ended) {
        (w = (x = this.cbs).onerror) === null || w === void 0 || w.call(x, new Error(".end() after done!"));
        return;
      }
      v && this.write(v), this.ended = true, this.tokenizer.end();
    }, g.prototype.pause = function() {
      this.tokenizer.pause();
    }, g.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, g.prototype.parseChunk = function(v) {
      this.write(v);
    }, g.prototype.done = function(v) {
      this.end(v);
    }, g;
  }();
  return Ue.Parser = h, Ue;
}
var st = {}, Rn = {}, Cr;
function Nt() {
  return Cr || (Cr = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.Doctype = f.CDATA = f.Tag = f.Style = f.Script = f.Comment = f.Directive = f.Text = f.Root = f.isTag = f.ElementType = void 0;
    var e;
    (function(n) {
      n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
    })(e = f.ElementType || (f.ElementType = {}));
    function t(n) {
      return n.type === e.Tag || n.type === e.Script || n.type === e.Style;
    }
    f.isTag = t, f.Root = e.Root, f.Text = e.Text, f.Directive = e.Directive, f.Comment = e.Comment, f.Script = e.Script, f.Style = e.Style, f.Tag = e.Tag, f.CDATA = e.CDATA, f.Doctype = e.Doctype;
  }(Rn)), Rn;
}
var ee = {}, kr;
function _r() {
  if (kr) return ee;
  kr = 1;
  var f = ee && ee.__extends || /* @__PURE__ */ function() {
    var b = function(S, C) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, P) {
        k.__proto__ = P;
      } || function(k, P) {
        for (var L in P) Object.prototype.hasOwnProperty.call(P, L) && (k[L] = P[L]);
      }, b(S, C);
    };
    return function(S, C) {
      if (typeof C != "function" && C !== null) throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
      b(S, C);
      function k() {
        this.constructor = S;
      }
      S.prototype = C === null ? Object.create(C) : (k.prototype = C.prototype, new k());
    };
  }(), e = ee && ee.__assign || function() {
    return e = Object.assign || function(b) {
      for (var S, C = 1, k = arguments.length; C < k; C++) {
        S = arguments[C];
        for (var P in S) Object.prototype.hasOwnProperty.call(S, P) && (b[P] = S[P]);
      }
      return b;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(ee, "__esModule", { value: true }), ee.cloneNode = ee.hasChildren = ee.isDocument = ee.isDirective = ee.isComment = ee.isText = ee.isCDATA = ee.isTag = ee.Element = ee.Document = ee.CDATA = ee.NodeWithChildren = ee.ProcessingInstruction = ee.Comment = ee.Text = ee.DataNode = ee.Node = void 0;
  var t = Nt(), n = function() {
    function b() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(b.prototype, "parentNode", { get: function() {
      return this.parent;
    }, set: function(S) {
      this.parent = S;
    }, enumerable: false, configurable: true }), Object.defineProperty(b.prototype, "previousSibling", { get: function() {
      return this.prev;
    }, set: function(S) {
      this.prev = S;
    }, enumerable: false, configurable: true }), Object.defineProperty(b.prototype, "nextSibling", { get: function() {
      return this.next;
    }, set: function(S) {
      this.next = S;
    }, enumerable: false, configurable: true }), b.prototype.cloneNode = function(S) {
      return S === void 0 && (S = false), w(this, S);
    }, b;
  }();
  ee.Node = n;
  var r = function(b) {
    f(S, b);
    function S(C) {
      var k = b.call(this) || this;
      return k.data = C, k;
    }
    return Object.defineProperty(S.prototype, "nodeValue", { get: function() {
      return this.data;
    }, set: function(C) {
      this.data = C;
    }, enumerable: false, configurable: true }), S;
  }(n);
  ee.DataNode = r;
  var i = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Text, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 3;
    }, enumerable: false, configurable: true }), S;
  }(r);
  ee.Text = i;
  var o = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Comment, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 8;
    }, enumerable: false, configurable: true }), S;
  }(r);
  ee.Comment = o;
  var l = function(b) {
    f(S, b);
    function S(C, k) {
      var P = b.call(this, k) || this;
      return P.name = C, P.type = t.ElementType.Directive, P;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 1;
    }, enumerable: false, configurable: true }), S;
  }(r);
  ee.ProcessingInstruction = l;
  var d = function(b) {
    f(S, b);
    function S(C) {
      var k = b.call(this) || this;
      return k.children = C, k;
    }
    return Object.defineProperty(S.prototype, "firstChild", { get: function() {
      var C;
      return (C = this.children[0]) !== null && C !== void 0 ? C : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "lastChild", { get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "childNodes", { get: function() {
      return this.children;
    }, set: function(C) {
      this.children = C;
    }, enumerable: false, configurable: true }), S;
  }(n);
  ee.NodeWithChildren = d;
  var c = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.CDATA, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 4;
    }, enumerable: false, configurable: true }), S;
  }(d);
  ee.CDATA = c;
  var u = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Root, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 9;
    }, enumerable: false, configurable: true }), S;
  }(d);
  ee.Document = u;
  var p = function(b) {
    f(S, b);
    function S(C, k, P, L) {
      P === void 0 && (P = []), L === void 0 && (L = C === "script" ? t.ElementType.Script : C === "style" ? t.ElementType.Style : t.ElementType.Tag);
      var E = b.call(this, P) || this;
      return E.name = C, E.attribs = k, E.type = L, E;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 1;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "tagName", { get: function() {
      return this.name;
    }, set: function(C) {
      this.name = C;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "attributes", { get: function() {
      var C = this;
      return Object.keys(this.attribs).map(function(k) {
        var P, L;
        return { name: k, value: C.attribs[k], namespace: (P = C["x-attribsNamespace"]) === null || P === void 0 ? void 0 : P[k], prefix: (L = C["x-attribsPrefix"]) === null || L === void 0 ? void 0 : L[k] };
      });
    }, enumerable: false, configurable: true }), S;
  }(d);
  ee.Element = p;
  function a(b) {
    return (0, t.isTag)(b);
  }
  ee.isTag = a;
  function s(b) {
    return b.type === t.ElementType.CDATA;
  }
  ee.isCDATA = s;
  function m(b) {
    return b.type === t.ElementType.Text;
  }
  ee.isText = m;
  function h(b) {
    return b.type === t.ElementType.Comment;
  }
  ee.isComment = h;
  function g(b) {
    return b.type === t.ElementType.Directive;
  }
  ee.isDirective = g;
  function v(b) {
    return b.type === t.ElementType.Root;
  }
  ee.isDocument = v;
  function x(b) {
    return Object.prototype.hasOwnProperty.call(b, "children");
  }
  ee.hasChildren = x;
  function w(b, S) {
    S === void 0 && (S = false);
    var C;
    if (m(b)) C = new i(b.data);
    else if (h(b)) C = new o(b.data);
    else if (a(b)) {
      var k = S ? y(b.children) : [], P = new p(b.name, e({}, b.attribs), k);
      k.forEach(function(M) {
        return M.parent = P;
      }), b.namespace != null && (P.namespace = b.namespace), b["x-attribsNamespace"] && (P["x-attribsNamespace"] = e({}, b["x-attribsNamespace"])), b["x-attribsPrefix"] && (P["x-attribsPrefix"] = e({}, b["x-attribsPrefix"])), C = P;
    } else if (s(b)) {
      var k = S ? y(b.children) : [], L = new c(k);
      k.forEach(function(R) {
        return R.parent = L;
      }), C = L;
    } else if (v(b)) {
      var k = S ? y(b.children) : [], E = new u(k);
      k.forEach(function(R) {
        return R.parent = E;
      }), b["x-mode"] && (E["x-mode"] = b["x-mode"]), C = E;
    } else if (g(b)) {
      var T = new l(b.name, b.data);
      b["x-name"] != null && (T["x-name"] = b["x-name"], T["x-publicId"] = b["x-publicId"], T["x-systemId"] = b["x-systemId"]), C = T;
    } else throw new Error("Not implemented yet: ".concat(b.type));
    return C.startIndex = b.startIndex, C.endIndex = b.endIndex, b.sourceCodeLocation != null && (C.sourceCodeLocation = b.sourceCodeLocation), C;
  }
  ee.cloneNode = w;
  function y(b) {
    for (var S = b.map(function(k) {
      return w(k, true);
    }), C = 1; C < S.length; C++) S[C].prev = S[C - 1], S[C - 1].next = S[C];
    return S;
  }
  return ee;
}
var Er;
function nt() {
  return Er || (Er = 1, function(f) {
    var e = st && st.__createBinding || (Object.create ? function(l, d, c, u) {
      u === void 0 && (u = c);
      var p = Object.getOwnPropertyDescriptor(d, c);
      (!p || ("get" in p ? !d.__esModule : p.writable || p.configurable)) && (p = { enumerable: true, get: function() {
        return d[c];
      } }), Object.defineProperty(l, u, p);
    } : function(l, d, c, u) {
      u === void 0 && (u = c), l[u] = d[c];
    }), t = st && st.__exportStar || function(l, d) {
      for (var c in l) c !== "default" && !Object.prototype.hasOwnProperty.call(d, c) && e(d, l, c);
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.DomHandler = void 0;
    var n = Nt(), r = _r();
    t(_r(), f);
    var i = { withStartIndices: false, withEndIndices: false, xmlMode: false }, o = function() {
      function l(d, c, u) {
        this.dom = [], this.root = new r.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof c == "function" && (u = c, c = i), typeof d == "object" && (c = d, d = void 0), this.callback = d ?? null, this.options = c ?? i, this.elementCB = u ?? null;
      }
      return l.prototype.onparserinit = function(d) {
        this.parser = d;
      }, l.prototype.onreset = function() {
        this.dom = [], this.root = new r.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, l.prototype.onend = function() {
        this.done || (this.done = true, this.parser = null, this.handleCallback(null));
      }, l.prototype.onerror = function(d) {
        this.handleCallback(d);
      }, l.prototype.onclosetag = function() {
        this.lastNode = null;
        var d = this.tagStack.pop();
        this.options.withEndIndices && (d.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(d);
      }, l.prototype.onopentag = function(d, c) {
        var u = this.options.xmlMode ? n.ElementType.Tag : void 0, p = new r.Element(d, c, void 0, u);
        this.addNode(p), this.tagStack.push(p);
      }, l.prototype.ontext = function(d) {
        var c = this.lastNode;
        if (c && c.type === n.ElementType.Text) c.data += d, this.options.withEndIndices && (c.endIndex = this.parser.endIndex);
        else {
          var u = new r.Text(d);
          this.addNode(u), this.lastNode = u;
        }
      }, l.prototype.oncomment = function(d) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += d;
          return;
        }
        var c = new r.Comment(d);
        this.addNode(c), this.lastNode = c;
      }, l.prototype.oncommentend = function() {
        this.lastNode = null;
      }, l.prototype.oncdatastart = function() {
        var d = new r.Text(""), c = new r.CDATA([d]);
        this.addNode(c), d.parent = c, this.lastNode = d;
      }, l.prototype.oncdataend = function() {
        this.lastNode = null;
      }, l.prototype.onprocessinginstruction = function(d, c) {
        var u = new r.ProcessingInstruction(d, c);
        this.addNode(u);
      }, l.prototype.handleCallback = function(d) {
        if (typeof this.callback == "function") this.callback(d, this.dom);
        else if (d) throw d;
      }, l.prototype.addNode = function(d) {
        var c = this.tagStack[this.tagStack.length - 1], u = c.children[c.children.length - 1];
        this.options.withStartIndices && (d.startIndex = this.parser.startIndex), this.options.withEndIndices && (d.endIndex = this.parser.endIndex), c.children.push(d), u && (d.prev = u, u.next = d), d.parent = c, this.lastNode = null;
      }, l;
    }();
    f.DomHandler = o, f.default = o;
  }(st)), st;
}
var at = {}, Pe = {}, Re = {}, Dn = {}, Ke = {}, Gt = {}, Tr;
function Sf() {
  if (Tr) return Gt;
  Tr = 1, Object.defineProperty(Gt, "__esModule", { value: true });
  function f(e) {
    for (var t = 1; t < e.length; t++) e[t][0] += e[t - 1][0] + 1;
    return e;
  }
  return Gt.default = new Map(f([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(f([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(f([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(f([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])), Gt;
}
var In = {}, Pr;
function ki() {
  return Pr || (Pr = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.escapeText = f.escapeAttribute = f.escapeUTF8 = f.escape = f.encodeXML = f.getCodePoint = f.xmlReplacer = void 0, f.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var e = /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
    f.getCodePoint = String.prototype.codePointAt != null ? function(r, i) {
      return r.codePointAt(i);
    } : function(r, i) {
      return (r.charCodeAt(i) & 64512) === 55296 ? (r.charCodeAt(i) - 55296) * 1024 + r.charCodeAt(i + 1) - 56320 + 65536 : r.charCodeAt(i);
    };
    function t(r) {
      for (var i = "", o = 0, l; (l = f.xmlReplacer.exec(r)) !== null; ) {
        var d = l.index, c = r.charCodeAt(d), u = e.get(c);
        u !== void 0 ? (i += r.substring(o, d) + u, o = d + 1) : (i += "".concat(r.substring(o, d), "&#x").concat((0, f.getCodePoint)(r, d).toString(16), ";"), o = f.xmlReplacer.lastIndex += +((c & 64512) === 55296));
      }
      return i + r.substr(o);
    }
    f.encodeXML = t, f.escape = t;
    function n(r, i) {
      return function(l) {
        for (var d, c = 0, u = ""; d = r.exec(l); ) c !== d.index && (u += l.substring(c, d.index)), u += i.get(d[0].charCodeAt(0)), c = d.index + 1;
        return u + l.substring(c);
      };
    }
    f.escapeUTF8 = n(/[&<>'"]/g, e), f.escapeAttribute = n(/["&\u00A0]/g, /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), f.escapeText = n(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
  }(In)), In;
}
var Lr;
function Mr() {
  if (Lr) return Ke;
  Lr = 1;
  var f = Ke && Ke.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Ke, "__esModule", { value: true }), Ke.encodeNonAsciiHTML = Ke.encodeHTML = void 0;
  var e = f(Sf()), t = ki(), n = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
  function r(l) {
    return o(n, l);
  }
  Ke.encodeHTML = r;
  function i(l) {
    return o(t.xmlReplacer, l);
  }
  Ke.encodeNonAsciiHTML = i;
  function o(l, d) {
    for (var c = "", u = 0, p; (p = l.exec(d)) !== null; ) {
      var a = p.index;
      c += d.substring(u, a);
      var s = d.charCodeAt(a), m = e.default.get(s);
      if (typeof m == "object") {
        if (a + 1 < d.length) {
          var h = d.charCodeAt(a + 1), g = typeof m.n == "number" ? m.n === h ? m.o : void 0 : m.n.get(h);
          if (g !== void 0) {
            c += g, u = l.lastIndex += 1;
            continue;
          }
        }
        m = m.v;
      }
      if (m !== void 0) c += m, u = a + 1;
      else {
        var v = (0, t.getCodePoint)(d, a);
        c += "&#x".concat(v.toString(16), ";"), u = l.lastIndex += +(v !== s);
      }
    }
    return c + d.substr(u);
  }
  return Ke;
}
var Or;
function Cf() {
  return Or || (Or = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.decodeXMLStrict = f.decodeHTML5Strict = f.decodeHTML4Strict = f.decodeHTML5 = f.decodeHTML4 = f.decodeHTMLAttribute = f.decodeHTMLStrict = f.decodeHTML = f.decodeXML = f.DecodingMode = f.EntityDecoder = f.encodeHTML5 = f.encodeHTML4 = f.encodeNonAsciiHTML = f.encodeHTML = f.escapeText = f.escapeAttribute = f.escapeUTF8 = f.escape = f.encodeXML = f.encode = f.decodeStrict = f.decode = f.EncodingMode = f.EntityLevel = void 0;
    var e = hn(), t = Mr(), n = ki(), r;
    (function(a) {
      a[a.XML = 0] = "XML", a[a.HTML = 1] = "HTML";
    })(r = f.EntityLevel || (f.EntityLevel = {}));
    var i;
    (function(a) {
      a[a.UTF8 = 0] = "UTF8", a[a.ASCII = 1] = "ASCII", a[a.Extensive = 2] = "Extensive", a[a.Attribute = 3] = "Attribute", a[a.Text = 4] = "Text";
    })(i = f.EncodingMode || (f.EncodingMode = {}));
    function o(a, s) {
      s === void 0 && (s = r.XML);
      var m = typeof s == "number" ? s : s.level;
      if (m === r.HTML) {
        var h = typeof s == "object" ? s.mode : void 0;
        return (0, e.decodeHTML)(a, h);
      }
      return (0, e.decodeXML)(a);
    }
    f.decode = o;
    function l(a, s) {
      var m;
      s === void 0 && (s = r.XML);
      var h = typeof s == "number" ? { level: s } : s;
      return (m = h.mode) !== null && m !== void 0 || (h.mode = e.DecodingMode.Strict), o(a, h);
    }
    f.decodeStrict = l;
    function d(a, s) {
      s === void 0 && (s = r.XML);
      var m = typeof s == "number" ? { level: s } : s;
      return m.mode === i.UTF8 ? (0, n.escapeUTF8)(a) : m.mode === i.Attribute ? (0, n.escapeAttribute)(a) : m.mode === i.Text ? (0, n.escapeText)(a) : m.level === r.HTML ? m.mode === i.ASCII ? (0, t.encodeNonAsciiHTML)(a) : (0, t.encodeHTML)(a) : (0, n.encodeXML)(a);
    }
    f.encode = d;
    var c = ki();
    Object.defineProperty(f, "encodeXML", { enumerable: true, get: function() {
      return c.encodeXML;
    } }), Object.defineProperty(f, "escape", { enumerable: true, get: function() {
      return c.escape;
    } }), Object.defineProperty(f, "escapeUTF8", { enumerable: true, get: function() {
      return c.escapeUTF8;
    } }), Object.defineProperty(f, "escapeAttribute", { enumerable: true, get: function() {
      return c.escapeAttribute;
    } }), Object.defineProperty(f, "escapeText", { enumerable: true, get: function() {
      return c.escapeText;
    } });
    var u = Mr();
    Object.defineProperty(f, "encodeHTML", { enumerable: true, get: function() {
      return u.encodeHTML;
    } }), Object.defineProperty(f, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return u.encodeNonAsciiHTML;
    } }), Object.defineProperty(f, "encodeHTML4", { enumerable: true, get: function() {
      return u.encodeHTML;
    } }), Object.defineProperty(f, "encodeHTML5", { enumerable: true, get: function() {
      return u.encodeHTML;
    } });
    var p = hn();
    Object.defineProperty(f, "EntityDecoder", { enumerable: true, get: function() {
      return p.EntityDecoder;
    } }), Object.defineProperty(f, "DecodingMode", { enumerable: true, get: function() {
      return p.DecodingMode;
    } }), Object.defineProperty(f, "decodeXML", { enumerable: true, get: function() {
      return p.decodeXML;
    } }), Object.defineProperty(f, "decodeHTML", { enumerable: true, get: function() {
      return p.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTMLStrict", { enumerable: true, get: function() {
      return p.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeHTMLAttribute", { enumerable: true, get: function() {
      return p.decodeHTMLAttribute;
    } }), Object.defineProperty(f, "decodeHTML4", { enumerable: true, get: function() {
      return p.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTML5", { enumerable: true, get: function() {
      return p.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTML4Strict", { enumerable: true, get: function() {
      return p.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeHTML5Strict", { enumerable: true, get: function() {
      return p.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeXMLStrict", { enumerable: true, get: function() {
      return p.decodeXML;
    } });
  }(Dn)), Dn;
}
var ot = {}, Ar;
function kf() {
  return Ar || (Ar = 1, Object.defineProperty(ot, "__esModule", { value: true }), ot.attributeNames = ot.elementNames = void 0, ot.elementNames = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function(f) {
    return [f.toLowerCase(), f];
  })), ot.attributeNames = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function(f) {
    return [f.toLowerCase(), f];
  }))), ot;
}
var Rr;
function _f() {
  if (Rr) return Re;
  Rr = 1;
  var f = Re && Re.__assign || function() {
    return f = Object.assign || function(y) {
      for (var b, S = 1, C = arguments.length; S < C; S++) {
        b = arguments[S];
        for (var k in b) Object.prototype.hasOwnProperty.call(b, k) && (y[k] = b[k]);
      }
      return y;
    }, f.apply(this, arguments);
  }, e = Re && Re.__createBinding || (Object.create ? function(y, b, S, C) {
    C === void 0 && (C = S);
    var k = Object.getOwnPropertyDescriptor(b, S);
    (!k || ("get" in k ? !b.__esModule : k.writable || k.configurable)) && (k = { enumerable: true, get: function() {
      return b[S];
    } }), Object.defineProperty(y, C, k);
  } : function(y, b, S, C) {
    C === void 0 && (C = S), y[C] = b[S];
  }), t = Re && Re.__setModuleDefault || (Object.create ? function(y, b) {
    Object.defineProperty(y, "default", { enumerable: true, value: b });
  } : function(y, b) {
    y.default = b;
  }), n = Re && Re.__importStar || function(y) {
    if (y && y.__esModule) return y;
    var b = {};
    if (y != null) for (var S in y) S !== "default" && Object.prototype.hasOwnProperty.call(y, S) && e(b, y, S);
    return t(b, y), b;
  };
  Object.defineProperty(Re, "__esModule", { value: true }), Re.render = void 0;
  var r = n(Nt()), i = Cf(), o = kf(), l = /* @__PURE__ */ new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
  function d(y) {
    return y.replace(/"/g, "&quot;");
  }
  function c(y, b) {
    var S;
    if (y) {
      var C = ((S = b.encodeEntities) !== null && S !== void 0 ? S : b.decodeEntities) === false ? d : b.xmlMode || b.encodeEntities !== "utf8" ? i.encodeXML : i.escapeAttribute;
      return Object.keys(y).map(function(k) {
        var P, L, E = (P = y[k]) !== null && P !== void 0 ? P : "";
        return b.xmlMode === "foreign" && (k = (L = o.attributeNames.get(k)) !== null && L !== void 0 ? L : k), !b.emptyAttrs && !b.xmlMode && E === "" ? k : "".concat(k, '="').concat(C(E), '"');
      }).join(" ");
    }
  }
  var u = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  function p(y, b) {
    b === void 0 && (b = {});
    for (var S = ("length" in y) ? y : [y], C = "", k = 0; k < S.length; k++) C += a(S[k], b);
    return C;
  }
  Re.render = p, Re.default = p;
  function a(y, b) {
    switch (y.type) {
      case r.Root:
        return p(y.children, b);
      case r.Doctype:
      case r.Directive:
        return g(y);
      case r.Comment:
        return w(y);
      case r.CDATA:
        return x(y);
      case r.Script:
      case r.Style:
      case r.Tag:
        return h(y, b);
      case r.Text:
        return v(y, b);
    }
  }
  var s = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), m = /* @__PURE__ */ new Set(["svg", "math"]);
  function h(y, b) {
    var S;
    b.xmlMode === "foreign" && (y.name = (S = o.elementNames.get(y.name)) !== null && S !== void 0 ? S : y.name, y.parent && s.has(y.parent.name) && (b = f(f({}, b), { xmlMode: false }))), !b.xmlMode && m.has(y.name) && (b = f(f({}, b), { xmlMode: "foreign" }));
    var C = "<".concat(y.name), k = c(y.attribs, b);
    return k && (C += " ".concat(k)), y.children.length === 0 && (b.xmlMode ? b.selfClosingTags !== false : b.selfClosingTags && u.has(y.name)) ? (b.xmlMode || (C += " "), C += "/>") : (C += ">", y.children.length > 0 && (C += p(y.children, b)), (b.xmlMode || !u.has(y.name)) && (C += "</".concat(y.name, ">"))), C;
  }
  function g(y) {
    return "<".concat(y.data, ">");
  }
  function v(y, b) {
    var S, C = y.data || "";
    return ((S = b.encodeEntities) !== null && S !== void 0 ? S : b.decodeEntities) !== false && !(!b.xmlMode && y.parent && l.has(y.parent.name)) && (C = b.xmlMode || b.encodeEntities !== "utf8" ? (0, i.encodeXML)(C) : (0, i.escapeText)(C)), C;
  }
  function x(y) {
    return "<![CDATA[".concat(y.children[0].data, "]]>");
  }
  function w(y) {
    return "<!--".concat(y.data, "-->");
  }
  return Re;
}
var Dr;
function _a() {
  if (Dr) return Pe;
  Dr = 1;
  var f = Pe && Pe.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(Pe, "__esModule", { value: true }), Pe.innerText = Pe.textContent = Pe.getText = Pe.getInnerHTML = Pe.getOuterHTML = void 0;
  var e = nt(), t = f(_f()), n = Nt();
  function r(c, u) {
    return (0, t.default)(c, u);
  }
  Pe.getOuterHTML = r;
  function i(c, u) {
    return (0, e.hasChildren)(c) ? c.children.map(function(p) {
      return r(p, u);
    }).join("") : "";
  }
  Pe.getInnerHTML = i;
  function o(c) {
    return Array.isArray(c) ? c.map(o).join("") : (0, e.isTag)(c) ? c.name === "br" ? `
` : o(c.children) : (0, e.isCDATA)(c) ? o(c.children) : (0, e.isText)(c) ? c.data : "";
  }
  Pe.getText = o;
  function l(c) {
    return Array.isArray(c) ? c.map(l).join("") : (0, e.hasChildren)(c) && !(0, e.isComment)(c) ? l(c.children) : (0, e.isText)(c) ? c.data : "";
  }
  Pe.textContent = l;
  function d(c) {
    return Array.isArray(c) ? c.map(d).join("") : (0, e.hasChildren)(c) && (c.type === n.ElementType.Tag || (0, e.isCDATA)(c)) ? d(c.children) : (0, e.isText)(c) ? c.data : "";
  }
  return Pe.innerText = d, Pe;
}
var ve = {}, Ir;
function Ef() {
  if (Ir) return ve;
  Ir = 1, Object.defineProperty(ve, "__esModule", { value: true }), ve.prevElementSibling = ve.nextElementSibling = ve.getName = ve.hasAttrib = ve.getAttributeValue = ve.getSiblings = ve.getParent = ve.getChildren = void 0;
  var f = nt();
  function e(c) {
    return (0, f.hasChildren)(c) ? c.children : [];
  }
  ve.getChildren = e;
  function t(c) {
    return c.parent || null;
  }
  ve.getParent = t;
  function n(c) {
    var u, p, a = t(c);
    if (a != null) return e(a);
    for (var s = [c], m = c.prev, h = c.next; m != null; ) s.unshift(m), u = m, m = u.prev;
    for (; h != null; ) s.push(h), p = h, h = p.next;
    return s;
  }
  ve.getSiblings = n;
  function r(c, u) {
    var p;
    return (p = c.attribs) === null || p === void 0 ? void 0 : p[u];
  }
  ve.getAttributeValue = r;
  function i(c, u) {
    return c.attribs != null && Object.prototype.hasOwnProperty.call(c.attribs, u) && c.attribs[u] != null;
  }
  ve.hasAttrib = i;
  function o(c) {
    return c.name;
  }
  ve.getName = o;
  function l(c) {
    for (var u, p = c.next; p !== null && !(0, f.isTag)(p); ) u = p, p = u.next;
    return p;
  }
  ve.nextElementSibling = l;
  function d(c) {
    for (var u, p = c.prev; p !== null && !(0, f.isTag)(p); ) u = p, p = u.prev;
    return p;
  }
  return ve.prevElementSibling = d, ve;
}
var Le = {}, Br;
function Tf() {
  if (Br) return Le;
  Br = 1, Object.defineProperty(Le, "__esModule", { value: true }), Le.prepend = Le.prependChild = Le.append = Le.appendChild = Le.replaceElement = Le.removeElement = void 0;
  function f(o) {
    if (o.prev && (o.prev.next = o.next), o.next && (o.next.prev = o.prev), o.parent) {
      var l = o.parent.children, d = l.lastIndexOf(o);
      d >= 0 && l.splice(d, 1);
    }
    o.next = null, o.prev = null, o.parent = null;
  }
  Le.removeElement = f;
  function e(o, l) {
    var d = l.prev = o.prev;
    d && (d.next = l);
    var c = l.next = o.next;
    c && (c.prev = l);
    var u = l.parent = o.parent;
    if (u) {
      var p = u.children;
      p[p.lastIndexOf(o)] = l, o.parent = null;
    }
  }
  Le.replaceElement = e;
  function t(o, l) {
    if (f(l), l.next = null, l.parent = o, o.children.push(l) > 1) {
      var d = o.children[o.children.length - 2];
      d.next = l, l.prev = d;
    } else l.prev = null;
  }
  Le.appendChild = t;
  function n(o, l) {
    f(l);
    var d = o.parent, c = o.next;
    if (l.next = c, l.prev = o, o.next = l, l.parent = d, c) {
      if (c.prev = l, d) {
        var u = d.children;
        u.splice(u.lastIndexOf(c), 0, l);
      }
    } else d && d.children.push(l);
  }
  Le.append = n;
  function r(o, l) {
    if (f(l), l.parent = o, l.prev = null, o.children.unshift(l) !== 1) {
      var d = o.children[1];
      d.prev = l, l.next = d;
    } else l.next = null;
  }
  Le.prependChild = r;
  function i(o, l) {
    f(l);
    var d = o.parent;
    if (d) {
      var c = d.children;
      c.splice(c.indexOf(o), 0, l);
    }
    o.prev && (o.prev.next = l), l.parent = d, l.prev = o.prev, l.next = o, o.prev = l;
  }
  return Le.prepend = i, Le;
}
var Me = {}, zr;
function Ea() {
  if (zr) return Me;
  zr = 1, Object.defineProperty(Me, "__esModule", { value: true }), Me.findAll = Me.existsOne = Me.findOne = Me.findOneChild = Me.find = Me.filter = void 0;
  var f = nt();
  function e(l, d, c, u) {
    return c === void 0 && (c = true), u === void 0 && (u = 1 / 0), t(l, Array.isArray(d) ? d : [d], c, u);
  }
  Me.filter = e;
  function t(l, d, c, u) {
    for (var p = [], a = [d], s = [0]; ; ) {
      if (s[0] >= a[0].length) {
        if (s.length === 1) return p;
        a.shift(), s.shift();
        continue;
      }
      var m = a[0][s[0]++];
      if (l(m) && (p.push(m), --u <= 0)) return p;
      c && (0, f.hasChildren)(m) && m.children.length > 0 && (s.unshift(0), a.unshift(m.children));
    }
  }
  Me.find = t;
  function n(l, d) {
    return d.find(l);
  }
  Me.findOneChild = n;
  function r(l, d, c) {
    c === void 0 && (c = true);
    for (var u = null, p = 0; p < d.length && !u; p++) {
      var a = d[p];
      if ((0, f.isTag)(a)) l(a) ? u = a : c && a.children.length > 0 && (u = r(l, a.children, true));
      else continue;
    }
    return u;
  }
  Me.findOne = r;
  function i(l, d) {
    return d.some(function(c) {
      return (0, f.isTag)(c) && (l(c) || i(l, c.children));
    });
  }
  Me.existsOne = i;
  function o(l, d) {
    for (var c = [], u = [d], p = [0]; ; ) {
      if (p[0] >= u[0].length) {
        if (u.length === 1) return c;
        u.shift(), p.shift();
        continue;
      }
      var a = u[0][p[0]++];
      (0, f.isTag)(a) && (l(a) && c.push(a), a.children.length > 0 && (p.unshift(0), u.unshift(a.children)));
    }
  }
  return Me.findAll = o, Me;
}
var Be = {}, $r;
function Ta() {
  if ($r) return Be;
  $r = 1, Object.defineProperty(Be, "__esModule", { value: true }), Be.getElementsByTagType = Be.getElementsByTagName = Be.getElementById = Be.getElements = Be.testElement = void 0;
  var f = nt(), e = Ea(), t = { tag_name: function(p) {
    return typeof p == "function" ? function(a) {
      return (0, f.isTag)(a) && p(a.name);
    } : p === "*" ? f.isTag : function(a) {
      return (0, f.isTag)(a) && a.name === p;
    };
  }, tag_type: function(p) {
    return typeof p == "function" ? function(a) {
      return p(a.type);
    } : function(a) {
      return a.type === p;
    };
  }, tag_contains: function(p) {
    return typeof p == "function" ? function(a) {
      return (0, f.isText)(a) && p(a.data);
    } : function(a) {
      return (0, f.isText)(a) && a.data === p;
    };
  } };
  function n(p, a) {
    return typeof a == "function" ? function(s) {
      return (0, f.isTag)(s) && a(s.attribs[p]);
    } : function(s) {
      return (0, f.isTag)(s) && s.attribs[p] === a;
    };
  }
  function r(p, a) {
    return function(s) {
      return p(s) || a(s);
    };
  }
  function i(p) {
    var a = Object.keys(p).map(function(s) {
      var m = p[s];
      return Object.prototype.hasOwnProperty.call(t, s) ? t[s](m) : n(s, m);
    });
    return a.length === 0 ? null : a.reduce(r);
  }
  function o(p, a) {
    var s = i(p);
    return s ? s(a) : true;
  }
  Be.testElement = o;
  function l(p, a, s, m) {
    m === void 0 && (m = 1 / 0);
    var h = i(p);
    return h ? (0, e.filter)(h, a, s, m) : [];
  }
  Be.getElements = l;
  function d(p, a, s) {
    return s === void 0 && (s = true), Array.isArray(a) || (a = [a]), (0, e.findOne)(n("id", p), a, s);
  }
  Be.getElementById = d;
  function c(p, a, s, m) {
    return s === void 0 && (s = true), m === void 0 && (m = 1 / 0), (0, e.filter)(t.tag_name(p), a, s, m);
  }
  Be.getElementsByTagName = c;
  function u(p, a, s, m) {
    return s === void 0 && (s = true), m === void 0 && (m = 1 / 0), (0, e.filter)(t.tag_type(p), a, s, m);
  }
  return Be.getElementsByTagType = u, Be;
}
var Bn = {}, Nr;
function Pf() {
  return Nr || (Nr = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.uniqueSort = f.compareDocumentPosition = f.DocumentPosition = f.removeSubsets = void 0;
    var e = nt();
    function t(o) {
      for (var l = o.length; --l >= 0; ) {
        var d = o[l];
        if (l > 0 && o.lastIndexOf(d, l - 1) >= 0) {
          o.splice(l, 1);
          continue;
        }
        for (var c = d.parent; c; c = c.parent) if (o.includes(c)) {
          o.splice(l, 1);
          break;
        }
      }
      return o;
    }
    f.removeSubsets = t;
    var n;
    (function(o) {
      o[o.DISCONNECTED = 1] = "DISCONNECTED", o[o.PRECEDING = 2] = "PRECEDING", o[o.FOLLOWING = 4] = "FOLLOWING", o[o.CONTAINS = 8] = "CONTAINS", o[o.CONTAINED_BY = 16] = "CONTAINED_BY";
    })(n = f.DocumentPosition || (f.DocumentPosition = {}));
    function r(o, l) {
      var d = [], c = [];
      if (o === l) return 0;
      for (var u = (0, e.hasChildren)(o) ? o : o.parent; u; ) d.unshift(u), u = u.parent;
      for (u = (0, e.hasChildren)(l) ? l : l.parent; u; ) c.unshift(u), u = u.parent;
      for (var p = Math.min(d.length, c.length), a = 0; a < p && d[a] === c[a]; ) a++;
      if (a === 0) return n.DISCONNECTED;
      var s = d[a - 1], m = s.children, h = d[a], g = c[a];
      return m.indexOf(h) > m.indexOf(g) ? s === l ? n.FOLLOWING | n.CONTAINED_BY : n.FOLLOWING : s === o ? n.PRECEDING | n.CONTAINS : n.PRECEDING;
    }
    f.compareDocumentPosition = r;
    function i(o) {
      return o = o.filter(function(l, d, c) {
        return !c.includes(l, d + 1);
      }), o.sort(function(l, d) {
        var c = r(l, d);
        return c & n.PRECEDING ? -1 : c & n.FOLLOWING ? 1 : 0;
      }), o;
    }
    f.uniqueSort = i;
  }(Bn)), Bn;
}
var At = {}, jr;
function Lf() {
  if (jr) return At;
  jr = 1, Object.defineProperty(At, "__esModule", { value: true }), At.getFeed = void 0;
  var f = _a(), e = Ta();
  function t(a) {
    var s = d(p, a);
    return s ? s.name === "feed" ? n(s) : r(s) : null;
  }
  At.getFeed = t;
  function n(a) {
    var s, m = a.children, h = { type: "atom", items: (0, e.getElementsByTagName)("entry", m).map(function(x) {
      var w, y = x.children, b = { media: l(y) };
      u(b, "id", "id", y), u(b, "title", "title", y);
      var S = (w = d("link", y)) === null || w === void 0 ? void 0 : w.attribs.href;
      S && (b.link = S);
      var C = c("summary", y) || c("content", y);
      C && (b.description = C);
      var k = c("updated", y);
      return k && (b.pubDate = new Date(k)), b;
    }) };
    u(h, "id", "id", m), u(h, "title", "title", m);
    var g = (s = d("link", m)) === null || s === void 0 ? void 0 : s.attribs.href;
    g && (h.link = g), u(h, "description", "subtitle", m);
    var v = c("updated", m);
    return v && (h.updated = new Date(v)), u(h, "author", "email", m, true), h;
  }
  function r(a) {
    var s, m, h = (m = (s = d("channel", a.children)) === null || s === void 0 ? void 0 : s.children) !== null && m !== void 0 ? m : [], g = { type: a.name.substr(0, 3), id: "", items: (0, e.getElementsByTagName)("item", a.children).map(function(x) {
      var w = x.children, y = { media: l(w) };
      u(y, "id", "guid", w), u(y, "title", "title", w), u(y, "link", "link", w), u(y, "description", "description", w);
      var b = c("pubDate", w) || c("dc:date", w);
      return b && (y.pubDate = new Date(b)), y;
    }) };
    u(g, "title", "title", h), u(g, "link", "link", h), u(g, "description", "description", h);
    var v = c("lastBuildDate", h);
    return v && (g.updated = new Date(v)), u(g, "author", "managingEditor", h, true), g;
  }
  var i = ["url", "type", "lang"], o = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
  function l(a) {
    return (0, e.getElementsByTagName)("media:content", a).map(function(s) {
      for (var m = s.attribs, h = { medium: m.medium, isDefault: !!m.isDefault }, g = 0, v = i; g < v.length; g++) {
        var x = v[g];
        m[x] && (h[x] = m[x]);
      }
      for (var w = 0, y = o; w < y.length; w++) {
        var x = y[w];
        m[x] && (h[x] = parseInt(m[x], 10));
      }
      return m.expression && (h.expression = m.expression), h;
    });
  }
  function d(a, s) {
    return (0, e.getElementsByTagName)(a, s, true, 1)[0];
  }
  function c(a, s, m) {
    return m === void 0 && (m = false), (0, f.textContent)((0, e.getElementsByTagName)(a, s, m, 1)).trim();
  }
  function u(a, s, m, h, g) {
    g === void 0 && (g = false);
    var v = c(m, h, g);
    v && (a[s] = v);
  }
  function p(a) {
    return a === "rss" || a === "feed" || a === "rdf:RDF";
  }
  return At;
}
var Fr;
function zn() {
  return Fr || (Fr = 1, function(f) {
    var e = at && at.__createBinding || (Object.create ? function(r, i, o, l) {
      l === void 0 && (l = o);
      var d = Object.getOwnPropertyDescriptor(i, o);
      (!d || ("get" in d ? !i.__esModule : d.writable || d.configurable)) && (d = { enumerable: true, get: function() {
        return i[o];
      } }), Object.defineProperty(r, l, d);
    } : function(r, i, o, l) {
      l === void 0 && (l = o), r[l] = i[o];
    }), t = at && at.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && e(i, r, o);
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.hasChildren = f.isDocument = f.isComment = f.isText = f.isCDATA = f.isTag = void 0, t(_a(), f), t(Ef(), f), t(Tf(), f), t(Ea(), f), t(Ta(), f), t(Pf(), f), t(Lf(), f);
    var n = nt();
    Object.defineProperty(f, "isTag", { enumerable: true, get: function() {
      return n.isTag;
    } }), Object.defineProperty(f, "isCDATA", { enumerable: true, get: function() {
      return n.isCDATA;
    } }), Object.defineProperty(f, "isText", { enumerable: true, get: function() {
      return n.isText;
    } }), Object.defineProperty(f, "isComment", { enumerable: true, get: function() {
      return n.isComment;
    } }), Object.defineProperty(f, "isDocument", { enumerable: true, get: function() {
      return n.isDocument;
    } }), Object.defineProperty(f, "hasChildren", { enumerable: true, get: function() {
      return n.hasChildren;
    } });
  }(at)), at;
}
var Ur;
function Mf() {
  return Ur || (Ur = 1, function(f) {
    var e = Fe && Fe.__createBinding || (Object.create ? function(v, x, w, y) {
      y === void 0 && (y = w);
      var b = Object.getOwnPropertyDescriptor(x, w);
      (!b || ("get" in b ? !x.__esModule : b.writable || b.configurable)) && (b = { enumerable: true, get: function() {
        return x[w];
      } }), Object.defineProperty(v, y, b);
    } : function(v, x, w, y) {
      y === void 0 && (y = w), v[y] = x[w];
    }), t = Fe && Fe.__setModuleDefault || (Object.create ? function(v, x) {
      Object.defineProperty(v, "default", { enumerable: true, value: x });
    } : function(v, x) {
      v.default = x;
    }), n = Fe && Fe.__importStar || function(v) {
      if (v && v.__esModule) return v;
      var x = {};
      if (v != null) for (var w in v) w !== "default" && Object.prototype.hasOwnProperty.call(v, w) && e(x, v, w);
      return t(x, v), x;
    }, r = Fe && Fe.__importDefault || function(v) {
      return v && v.__esModule ? v : { default: v };
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.DomUtils = f.parseFeed = f.getFeed = f.ElementType = f.Tokenizer = f.createDomStream = f.parseDOM = f.parseDocument = f.DefaultHandler = f.DomHandler = f.Parser = void 0;
    var i = Sr(), o = Sr();
    Object.defineProperty(f, "Parser", { enumerable: true, get: function() {
      return o.Parser;
    } });
    var l = nt(), d = nt();
    Object.defineProperty(f, "DomHandler", { enumerable: true, get: function() {
      return d.DomHandler;
    } }), Object.defineProperty(f, "DefaultHandler", { enumerable: true, get: function() {
      return d.DomHandler;
    } });
    function c(v, x) {
      var w = new l.DomHandler(void 0, x);
      return new i.Parser(w, x).end(v), w.root;
    }
    f.parseDocument = c;
    function u(v, x) {
      return c(v, x).children;
    }
    f.parseDOM = u;
    function p(v, x, w) {
      var y = new l.DomHandler(v, x, w);
      return new i.Parser(y, x);
    }
    f.createDomStream = p;
    var a = ka();
    Object.defineProperty(f, "Tokenizer", { enumerable: true, get: function() {
      return r(a).default;
    } }), f.ElementType = n(Nt());
    var s = zn(), m = zn();
    Object.defineProperty(f, "getFeed", { enumerable: true, get: function() {
      return m.getFeed;
    } });
    var h = { xmlMode: true };
    function g(v, x) {
      return x === void 0 && (x = h), (0, s.getFeed)(u(v, x));
    }
    f.parseFeed = g, f.DomUtils = n(zn());
  }(Fe)), Fe;
}
var $n, qr;
function Of() {
  return qr || (qr = 1, $n = (f) => {
    if (typeof f != "string") throw new TypeError("Expected a string");
    return f.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }), $n;
}
var Wt = {}, Hr;
function Af() {
  if (Hr) return Wt;
  Hr = 1, Object.defineProperty(Wt, "__esModule", { value: true });
  /*!
  * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
  *
  * Copyright (c) 2014-2017, Jon Schlinkert.
  * Released under the MIT License.
  */
  function f(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function e(t) {
    var n, r;
    return f(t) === false ? false : (n = t.constructor, n === void 0 ? true : (r = n.prototype, !(f(r) === false || r.hasOwnProperty("isPrototypeOf") === false)));
  }
  return Wt.isPlainObject = e, Wt;
}
var Nn, Vr;
function Rf() {
  if (Vr) return Nn;
  Vr = 1;
  var f = function(x) {
    return e(x) && !t(x);
  };
  function e(v) {
    return !!v && typeof v == "object";
  }
  function t(v) {
    var x = Object.prototype.toString.call(v);
    return x === "[object RegExp]" || x === "[object Date]" || i(v);
  }
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103;
  function i(v) {
    return v.$$typeof === r;
  }
  function o(v) {
    return Array.isArray(v) ? [] : {};
  }
  function l(v, x) {
    return x.clone !== false && x.isMergeableObject(v) ? h(o(v), v, x) : v;
  }
  function d(v, x, w) {
    return v.concat(x).map(function(y) {
      return l(y, w);
    });
  }
  function c(v, x) {
    if (!x.customMerge) return h;
    var w = x.customMerge(v);
    return typeof w == "function" ? w : h;
  }
  function u(v) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(v).filter(function(x) {
      return Object.propertyIsEnumerable.call(v, x);
    }) : [];
  }
  function p(v) {
    return Object.keys(v).concat(u(v));
  }
  function a(v, x) {
    try {
      return x in v;
    } catch {
      return false;
    }
  }
  function s(v, x) {
    return a(v, x) && !(Object.hasOwnProperty.call(v, x) && Object.propertyIsEnumerable.call(v, x));
  }
  function m(v, x, w) {
    var y = {};
    return w.isMergeableObject(v) && p(v).forEach(function(b) {
      y[b] = l(v[b], w);
    }), p(x).forEach(function(b) {
      s(v, b) || (a(v, b) && w.isMergeableObject(x[b]) ? y[b] = c(b, w)(v[b], x[b], w) : y[b] = l(x[b], w));
    }), y;
  }
  function h(v, x, w) {
    w = w || {}, w.arrayMerge = w.arrayMerge || d, w.isMergeableObject = w.isMergeableObject || f, w.cloneUnlessOtherwiseSpecified = l;
    var y = Array.isArray(x), b = Array.isArray(v), S = y === b;
    return S ? y ? w.arrayMerge(v, x, w) : m(v, x, w) : l(x, w);
  }
  h.all = function(x, w) {
    if (!Array.isArray(x)) throw new Error("first argument should be an array");
    return x.reduce(function(y, b) {
      return h(y, b, w);
    }, {});
  };
  var g = h;
  return Nn = g, Nn;
}
var ln = { exports: {} }, Df = ln.exports, Gr;
function If() {
  return Gr || (Gr = 1, function(f) {
    (function(e, t) {
      f.exports ? f.exports = t() : e.parseSrcset = t();
    })(Df, function() {
      return function(e) {
        function t(y) {
          return y === " " || y === "	" || y === `
` || y === "\f" || y === "\r";
        }
        function n(y) {
          var b, S = y.exec(e.substring(g));
          if (S) return b = S[0], g += b.length, b;
        }
        for (var r = e.length, i = /^[ \t\n\r\u000c]+/, o = /^[, \t\n\r\u000c]+/, l = /^[^ \t\n\r\u000c]+/, d = /[,]+$/, c = /^\d+$/, u = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, p, a, s, m, h, g = 0, v = []; ; ) {
          if (n(o), g >= r) return v;
          p = n(l), a = [], p.slice(-1) === "," ? (p = p.replace(d, ""), w()) : x();
        }
        function x() {
          for (n(i), s = "", m = "in descriptor"; ; ) {
            if (h = e.charAt(g), m === "in descriptor") if (t(h)) s && (a.push(s), s = "", m = "after descriptor");
            else if (h === ",") {
              g += 1, s && a.push(s), w();
              return;
            } else if (h === "(") s = s + h, m = "in parens";
            else if (h === "") {
              s && a.push(s), w();
              return;
            } else s = s + h;
            else if (m === "in parens") if (h === ")") s = s + h, m = "in descriptor";
            else if (h === "") {
              a.push(s), w();
              return;
            } else s = s + h;
            else if (m === "after descriptor" && !t(h)) if (h === "") {
              w();
              return;
            } else m = "in descriptor", g -= 1;
            g += 1;
          }
        }
        function w() {
          var y = false, b, S, C, k, P = {}, L, E, T, M, R;
          for (k = 0; k < a.length; k++) L = a[k], E = L[L.length - 1], T = L.substring(0, L.length - 1), M = parseInt(T, 10), R = parseFloat(T), c.test(T) && E === "w" ? ((b || S) && (y = true), M === 0 ? y = true : b = M) : u.test(T) && E === "x" ? ((b || S || C) && (y = true), R < 0 ? y = true : S = R) : c.test(T) && E === "h" ? ((C || S) && (y = true), M === 0 ? y = true : C = M) : y = true;
          y ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + L + "'.") : (P.url = p, b && (P.w = b), S && (P.d = S), C && (P.h = C), v.push(P));
        }
      };
    });
  }(ln)), ln.exports;
}
var Jt = { exports: {} }, Wr;
function Bf() {
  if (Wr) return Jt.exports;
  Wr = 1;
  var f = String, e = function() {
    return { isColorSupported: false, reset: f, bold: f, dim: f, italic: f, underline: f, inverse: f, hidden: f, strikethrough: f, black: f, red: f, green: f, yellow: f, blue: f, magenta: f, cyan: f, white: f, gray: f, bgBlack: f, bgRed: f, bgGreen: f, bgYellow: f, bgBlue: f, bgMagenta: f, bgCyan: f, bgWhite: f, blackBright: f, redBright: f, greenBright: f, yellowBright: f, blueBright: f, magentaBright: f, cyanBright: f, whiteBright: f, bgBlackBright: f, bgRedBright: f, bgGreenBright: f, bgYellowBright: f, bgBlueBright: f, bgMagentaBright: f, bgCyanBright: f, bgWhiteBright: f };
  };
  return Jt.exports = e(), Jt.exports.createColors = e, Jt.exports;
}
const zf = {}, $f = Object.freeze(Object.defineProperty({ __proto__: null, default: zf }, Symbol.toStringTag, { value: "Module" })), Pa = Lo($f);
var jn, Jr;
function Bi() {
  if (Jr) return jn;
  Jr = 1;
  let f = Bf(), e = Pa;
  class t extends Error {
    constructor(r, i, o, l, d, c) {
      super(r), this.name = "CssSyntaxError", this.reason = r, d && (this.file = d), l && (this.source = l), c && (this.plugin = c), typeof i < "u" && typeof o < "u" && (typeof i == "number" ? (this.line = i, this.column = o) : (this.line = i.line, this.column = i.column, this.endLine = o.line, this.endColumn = o.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, t);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(r) {
      if (!this.source) return "";
      let i = this.source;
      r == null && (r = f.isColorSupported);
      let o = (s) => s, l = (s) => s, d = (s) => s;
      if (r) {
        let { bold: s, gray: m, red: h } = f.createColors(true);
        l = (g) => s(h(g)), o = (g) => m(g), e && (d = (g) => e(g));
      }
      let c = i.split(/\r?\n/), u = Math.max(this.line - 3, 0), p = Math.min(this.line + 2, c.length), a = String(p).length;
      return c.slice(u, p).map((s, m) => {
        let h = u + 1 + m, g = " " + (" " + h).slice(-a) + " | ";
        if (h === this.line) {
          if (s.length > 160) {
            let x = 20, w = Math.max(0, this.column - x), y = Math.max(this.column + x, this.endColumn + x), b = s.slice(w, y), S = o(g.replace(/\d/g, " ")) + s.slice(0, Math.min(this.column - 1, x - 1)).replace(/[^\t]/g, " ");
            return l(">") + o(g) + d(b) + `
 ` + S + l("^");
          }
          let v = o(g.replace(/\d/g, " ")) + s.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return l(">") + o(g) + d(s) + `
 ` + v + l("^");
        }
        return " " + o(g) + d(s);
      }).join(`
`);
    }
    toString() {
      let r = this.showSourceCode();
      return r && (r = `

` + r + `
`), this.name + ": " + this.message + r;
    }
  }
  return jn = t, t.default = t, jn;
}
var Fn, Xr;
function La() {
  if (Xr) return Fn;
  Xr = 1;
  const f = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false };
  function e(n) {
    return n[0].toUpperCase() + n.slice(1);
  }
  class t {
    constructor(r) {
      this.builder = r;
    }
    atrule(r, i) {
      let o = "@" + r.name, l = r.params ? this.rawValue(r, "params") : "";
      if (typeof r.raws.afterName < "u" ? o += r.raws.afterName : l && (o += " "), r.nodes) this.block(r, o + l);
      else {
        let d = (r.raws.between || "") + (i ? ";" : "");
        this.builder(o + l + d, r);
      }
    }
    beforeAfter(r, i) {
      let o;
      r.type === "decl" ? o = this.raw(r, null, "beforeDecl") : r.type === "comment" ? o = this.raw(r, null, "beforeComment") : i === "before" ? o = this.raw(r, null, "beforeRule") : o = this.raw(r, null, "beforeClose");
      let l = r.parent, d = 0;
      for (; l && l.type !== "root"; ) d += 1, l = l.parent;
      if (o.includes(`
`)) {
        let c = this.raw(r, null, "indent");
        if (c.length) for (let u = 0; u < d; u++) o += c;
      }
      return o;
    }
    block(r, i) {
      let o = this.raw(r, "between", "beforeOpen");
      this.builder(i + o + "{", r, "start");
      let l;
      r.nodes && r.nodes.length ? (this.body(r), l = this.raw(r, "after")) : l = this.raw(r, "after", "emptyBody"), l && this.builder(l), this.builder("}", r, "end");
    }
    body(r) {
      let i = r.nodes.length - 1;
      for (; i > 0 && r.nodes[i].type === "comment"; ) i -= 1;
      let o = this.raw(r, "semicolon");
      for (let l = 0; l < r.nodes.length; l++) {
        let d = r.nodes[l], c = this.raw(d, "before");
        c && this.builder(c), this.stringify(d, i !== l || o);
      }
    }
    comment(r) {
      let i = this.raw(r, "left", "commentLeft"), o = this.raw(r, "right", "commentRight");
      this.builder("/*" + i + r.text + o + "*/", r);
    }
    decl(r, i) {
      let o = this.raw(r, "between", "colon"), l = r.prop + o + this.rawValue(r, "value");
      r.important && (l += r.raws.important || " !important"), i && (l += ";"), this.builder(l, r);
    }
    document(r) {
      this.body(r);
    }
    raw(r, i, o) {
      let l;
      if (o || (o = i), i && (l = r.raws[i], typeof l < "u")) return l;
      let d = r.parent;
      if (o === "before" && (!d || d.type === "root" && d.first === r || d && d.type === "document")) return "";
      if (!d) return f[o];
      let c = r.root();
      if (c.rawCache || (c.rawCache = {}), typeof c.rawCache[o] < "u") return c.rawCache[o];
      if (o === "before" || o === "after") return this.beforeAfter(r, o);
      {
        let u = "raw" + e(o);
        this[u] ? l = this[u](c, r) : c.walk((p) => {
          if (l = p.raws[i], typeof l < "u") return false;
        });
      }
      return typeof l > "u" && (l = f[o]), c.rawCache[o] = l, l;
    }
    rawBeforeClose(r) {
      let i;
      return r.walk((o) => {
        if (o.nodes && o.nodes.length > 0 && typeof o.raws.after < "u") return i = o.raws.after, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawBeforeComment(r, i) {
      let o;
      return r.walkComments((l) => {
        if (typeof l.raws.before < "u") return o = l.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), false;
      }), typeof o > "u" ? o = this.raw(i, null, "beforeDecl") : o && (o = o.replace(/\S/g, "")), o;
    }
    rawBeforeDecl(r, i) {
      let o;
      return r.walkDecls((l) => {
        if (typeof l.raws.before < "u") return o = l.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), false;
      }), typeof o > "u" ? o = this.raw(i, null, "beforeRule") : o && (o = o.replace(/\S/g, "")), o;
    }
    rawBeforeOpen(r) {
      let i;
      return r.walk((o) => {
        if (o.type !== "decl" && (i = o.raws.between, typeof i < "u")) return false;
      }), i;
    }
    rawBeforeRule(r) {
      let i;
      return r.walk((o) => {
        if (o.nodes && (o.parent !== r || r.first !== o) && typeof o.raws.before < "u") return i = o.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawColon(r) {
      let i;
      return r.walkDecls((o) => {
        if (typeof o.raws.between < "u") return i = o.raws.between.replace(/[^\s:]/g, ""), false;
      }), i;
    }
    rawEmptyBody(r) {
      let i;
      return r.walk((o) => {
        if (o.nodes && o.nodes.length === 0 && (i = o.raws.after, typeof i < "u")) return false;
      }), i;
    }
    rawIndent(r) {
      if (r.raws.indent) return r.raws.indent;
      let i;
      return r.walk((o) => {
        let l = o.parent;
        if (l && l !== r && l.parent && l.parent === r && typeof o.raws.before < "u") {
          let d = o.raws.before.split(`
`);
          return i = d[d.length - 1], i = i.replace(/\S/g, ""), false;
        }
      }), i;
    }
    rawSemicolon(r) {
      let i;
      return r.walk((o) => {
        if (o.nodes && o.nodes.length && o.last.type === "decl" && (i = o.raws.semicolon, typeof i < "u")) return false;
      }), i;
    }
    rawValue(r, i) {
      let o = r[i], l = r.raws[i];
      return l && l.value === o ? l.raw : o;
    }
    root(r) {
      this.body(r), r.raws.after && this.builder(r.raws.after);
    }
    rule(r) {
      this.block(r, this.rawValue(r, "selector")), r.raws.ownSemicolon && this.builder(r.raws.ownSemicolon, r, "end");
    }
    stringify(r, i) {
      if (!this[r.type]) throw new Error("Unknown AST node type " + r.type + ". Maybe you need to change PostCSS stringifier.");
      this[r.type](r, i);
    }
  }
  return Fn = t, t.default = t, Fn;
}
var Un, Zr;
function yn() {
  if (Zr) return Un;
  Zr = 1;
  let f = La();
  function e(t, n) {
    new f(n).stringify(t);
  }
  return Un = e, e.default = e, Un;
}
var Xt = {}, Kr;
function zi() {
  return Kr || (Kr = 1, Xt.isClean = Symbol("isClean"), Xt.my = Symbol("my")), Xt;
}
var qn, Yr;
function xn() {
  if (Yr) return qn;
  Yr = 1;
  let f = Bi(), e = La(), t = yn(), { isClean: n, my: r } = zi();
  function i(d, c) {
    let u = new d.constructor();
    for (let p in d) {
      if (!Object.prototype.hasOwnProperty.call(d, p) || p === "proxyCache") continue;
      let a = d[p], s = typeof a;
      p === "parent" && s === "object" ? c && (u[p] = c) : p === "source" ? u[p] = a : Array.isArray(a) ? u[p] = a.map((m) => i(m, u)) : (s === "object" && a !== null && (a = i(a)), u[p] = a);
    }
    return u;
  }
  function o(d, c) {
    if (c && typeof c.offset < "u") return c.offset;
    let u = 1, p = 1, a = 0;
    for (let s = 0; s < d.length; s++) {
      if (p === c.line && u === c.column) {
        a = s;
        break;
      }
      d[s] === `
` ? (u = 1, p += 1) : u += 1;
    }
    return a;
  }
  class l {
    get proxyOf() {
      return this;
    }
    constructor(c = {}) {
      this.raws = {}, this[n] = false, this[r] = true;
      for (let u in c) if (u === "nodes") {
        this.nodes = [];
        for (let p of c[u]) typeof p.clone == "function" ? this.append(p.clone()) : this.append(p);
      } else this[u] = c[u];
    }
    addToError(c) {
      if (c.postcssNode = this, c.stack && this.source && /\n\s{4}at /.test(c.stack)) {
        let u = this.source;
        c.stack = c.stack.replace(/\n\s{4}at /, `$&${u.input.from}:${u.start.line}:${u.start.column}$&`);
      }
      return c;
    }
    after(c) {
      return this.parent.insertAfter(this, c), this;
    }
    assign(c = {}) {
      for (let u in c) this[u] = c[u];
      return this;
    }
    before(c) {
      return this.parent.insertBefore(this, c), this;
    }
    cleanRaws(c) {
      delete this.raws.before, delete this.raws.after, c || delete this.raws.between;
    }
    clone(c = {}) {
      let u = i(this);
      for (let p in c) u[p] = c[p];
      return u;
    }
    cloneAfter(c = {}) {
      let u = this.clone(c);
      return this.parent.insertAfter(this, u), u;
    }
    cloneBefore(c = {}) {
      let u = this.clone(c);
      return this.parent.insertBefore(this, u), u;
    }
    error(c, u = {}) {
      if (this.source) {
        let { end: p, start: a } = this.rangeBy(u);
        return this.source.input.error(c, { column: a.column, line: a.line }, { column: p.column, line: p.line }, u);
      }
      return new f(c);
    }
    getProxyProcessor() {
      return { get(c, u) {
        return u === "proxyOf" ? c : u === "root" ? () => c.root().toProxy() : c[u];
      }, set(c, u, p) {
        return c[u] === p || (c[u] = p, (u === "prop" || u === "value" || u === "name" || u === "params" || u === "important" || u === "text") && c.markDirty()), true;
      } };
    }
    markClean() {
      this[n] = true;
    }
    markDirty() {
      if (this[n]) {
        this[n] = false;
        let c = this;
        for (; c = c.parent; ) c[n] = false;
      }
    }
    next() {
      if (!this.parent) return;
      let c = this.parent.index(this);
      return this.parent.nodes[c + 1];
    }
    positionBy(c) {
      let u = this.source.start;
      if (c.index) u = this.positionInside(c.index);
      else if (c.word) {
        let p = "document" in this.source.input ? this.source.input.document : this.source.input.css, s = p.slice(o(p, this.source.start), o(p, this.source.end)).indexOf(c.word);
        s !== -1 && (u = this.positionInside(s));
      }
      return u;
    }
    positionInside(c) {
      let u = this.source.start.column, p = this.source.start.line, a = "document" in this.source.input ? this.source.input.document : this.source.input.css, s = o(a, this.source.start), m = s + c;
      for (let h = s; h < m; h++) a[h] === `
` ? (u = 1, p += 1) : u += 1;
      return { column: u, line: p };
    }
    prev() {
      if (!this.parent) return;
      let c = this.parent.index(this);
      return this.parent.nodes[c - 1];
    }
    rangeBy(c) {
      let u = { column: this.source.start.column, line: this.source.start.line }, p = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: u.column + 1, line: u.line };
      if (c.word) {
        let a = "document" in this.source.input ? this.source.input.document : this.source.input.css, m = a.slice(o(a, this.source.start), o(a, this.source.end)).indexOf(c.word);
        m !== -1 && (u = this.positionInside(m), p = this.positionInside(m + c.word.length));
      } else c.start ? u = { column: c.start.column, line: c.start.line } : c.index && (u = this.positionInside(c.index)), c.end ? p = { column: c.end.column, line: c.end.line } : typeof c.endIndex == "number" ? p = this.positionInside(c.endIndex) : c.index && (p = this.positionInside(c.index + 1));
      return (p.line < u.line || p.line === u.line && p.column <= u.column) && (p = { column: u.column + 1, line: u.line }), { end: p, start: u };
    }
    raw(c, u) {
      return new e().raw(this, c, u);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...c) {
      if (this.parent) {
        let u = this, p = false;
        for (let a of c) a === this ? p = true : p ? (this.parent.insertAfter(u, a), u = a) : this.parent.insertBefore(u, a);
        p || this.remove();
      }
      return this;
    }
    root() {
      let c = this;
      for (; c.parent && c.parent.type !== "document"; ) c = c.parent;
      return c;
    }
    toJSON(c, u) {
      let p = {}, a = u == null;
      u = u || /* @__PURE__ */ new Map();
      let s = 0;
      for (let m in this) {
        if (!Object.prototype.hasOwnProperty.call(this, m) || m === "parent" || m === "proxyCache") continue;
        let h = this[m];
        if (Array.isArray(h)) p[m] = h.map((g) => typeof g == "object" && g.toJSON ? g.toJSON(null, u) : g);
        else if (typeof h == "object" && h.toJSON) p[m] = h.toJSON(null, u);
        else if (m === "source") {
          let g = u.get(h.input);
          g == null && (g = s, u.set(h.input, s), s++), p[m] = { end: h.end, inputId: g, start: h.start };
        } else p[m] = h;
      }
      return a && (p.inputs = [...u.keys()].map((m) => m.toJSON())), p;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(c = t) {
      c.stringify && (c = c.stringify);
      let u = "";
      return c(this, (p) => {
        u += p;
      }), u;
    }
    warn(c, u, p) {
      let a = { node: this };
      for (let s in p) a[s] = p[s];
      return c.warn(u, a);
    }
  }
  return qn = l, l.default = l, qn;
}
var Hn, Qr;
function wn() {
  if (Qr) return Hn;
  Qr = 1;
  let f = xn();
  class e extends f {
    constructor(n) {
      super(n), this.type = "comment";
    }
  }
  return Hn = e, e.default = e, Hn;
}
var Vn, es;
function Sn() {
  if (es) return Vn;
  es = 1;
  let f = xn();
  class e extends f {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(n) {
      n && typeof n.value < "u" && typeof n.value != "string" && (n = { ...n, value: String(n.value) }), super(n), this.type = "decl";
    }
  }
  return Vn = e, e.default = e, Vn;
}
var Gn, ts;
function mt() {
  if (ts) return Gn;
  ts = 1;
  let f = wn(), e = Sn(), t = xn(), { isClean: n, my: r } = zi(), i, o, l, d;
  function c(a) {
    return a.map((s) => (s.nodes && (s.nodes = c(s.nodes)), delete s.source, s));
  }
  function u(a) {
    if (a[n] = false, a.proxyOf.nodes) for (let s of a.proxyOf.nodes) u(s);
  }
  class p extends t {
    get first() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...s) {
      for (let m of s) {
        let h = this.normalize(m, this.last);
        for (let g of h) this.proxyOf.nodes.push(g);
      }
      return this.markDirty(), this;
    }
    cleanRaws(s) {
      if (super.cleanRaws(s), this.nodes) for (let m of this.nodes) m.cleanRaws(s);
    }
    each(s) {
      if (!this.proxyOf.nodes) return;
      let m = this.getIterator(), h, g;
      for (; this.indexes[m] < this.proxyOf.nodes.length && (h = this.indexes[m], g = s(this.proxyOf.nodes[h], h), g !== false); ) this.indexes[m] += 1;
      return delete this.indexes[m], g;
    }
    every(s) {
      return this.nodes.every(s);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let s = this.lastEach;
      return this.indexes[s] = 0, s;
    }
    getProxyProcessor() {
      return { get(s, m) {
        return m === "proxyOf" ? s : s[m] ? m === "each" || typeof m == "string" && m.startsWith("walk") ? (...h) => s[m](...h.map((g) => typeof g == "function" ? (v, x) => g(v.toProxy(), x) : g)) : m === "every" || m === "some" ? (h) => s[m]((g, ...v) => h(g.toProxy(), ...v)) : m === "root" ? () => s.root().toProxy() : m === "nodes" ? s.nodes.map((h) => h.toProxy()) : m === "first" || m === "last" ? s[m].toProxy() : s[m] : s[m];
      }, set(s, m, h) {
        return s[m] === h || (s[m] = h, (m === "name" || m === "params" || m === "selector") && s.markDirty()), true;
      } };
    }
    index(s) {
      return typeof s == "number" ? s : (s.proxyOf && (s = s.proxyOf), this.proxyOf.nodes.indexOf(s));
    }
    insertAfter(s, m) {
      let h = this.index(s), g = this.normalize(m, this.proxyOf.nodes[h]).reverse();
      h = this.index(s);
      for (let x of g) this.proxyOf.nodes.splice(h + 1, 0, x);
      let v;
      for (let x in this.indexes) v = this.indexes[x], h < v && (this.indexes[x] = v + g.length);
      return this.markDirty(), this;
    }
    insertBefore(s, m) {
      let h = this.index(s), g = h === 0 ? "prepend" : false, v = this.normalize(m, this.proxyOf.nodes[h], g).reverse();
      h = this.index(s);
      for (let w of v) this.proxyOf.nodes.splice(h, 0, w);
      let x;
      for (let w in this.indexes) x = this.indexes[w], h <= x && (this.indexes[w] = x + v.length);
      return this.markDirty(), this;
    }
    normalize(s, m) {
      if (typeof s == "string") s = c(o(s).nodes);
      else if (typeof s > "u") s = [];
      else if (Array.isArray(s)) {
        s = s.slice(0);
        for (let g of s) g.parent && g.parent.removeChild(g, "ignore");
      } else if (s.type === "root" && this.type !== "document") {
        s = s.nodes.slice(0);
        for (let g of s) g.parent && g.parent.removeChild(g, "ignore");
      } else if (s.type) s = [s];
      else if (s.prop) {
        if (typeof s.value > "u") throw new Error("Value field is missed in node creation");
        typeof s.value != "string" && (s.value = String(s.value)), s = [new e(s)];
      } else if (s.selector || s.selectors) s = [new d(s)];
      else if (s.name) s = [new i(s)];
      else if (s.text) s = [new f(s)];
      else throw new Error("Unknown node type in node creation");
      return s.map((g) => (g[r] || p.rebuild(g), g = g.proxyOf, g.parent && g.parent.removeChild(g), g[n] && u(g), g.raws || (g.raws = {}), typeof g.raws.before > "u" && m && typeof m.raws.before < "u" && (g.raws.before = m.raws.before.replace(/\S/g, "")), g.parent = this.proxyOf, g));
    }
    prepend(...s) {
      s = s.reverse();
      for (let m of s) {
        let h = this.normalize(m, this.first, "prepend").reverse();
        for (let g of h) this.proxyOf.nodes.unshift(g);
        for (let g in this.indexes) this.indexes[g] = this.indexes[g] + h.length;
      }
      return this.markDirty(), this;
    }
    push(s) {
      return s.parent = this, this.proxyOf.nodes.push(s), this;
    }
    removeAll() {
      for (let s of this.proxyOf.nodes) s.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(s) {
      s = this.index(s), this.proxyOf.nodes[s].parent = void 0, this.proxyOf.nodes.splice(s, 1);
      let m;
      for (let h in this.indexes) m = this.indexes[h], m >= s && (this.indexes[h] = m - 1);
      return this.markDirty(), this;
    }
    replaceValues(s, m, h) {
      return h || (h = m, m = {}), this.walkDecls((g) => {
        m.props && !m.props.includes(g.prop) || m.fast && !g.value.includes(m.fast) || (g.value = g.value.replace(s, h));
      }), this.markDirty(), this;
    }
    some(s) {
      return this.nodes.some(s);
    }
    walk(s) {
      return this.each((m, h) => {
        let g;
        try {
          g = s(m, h);
        } catch (v) {
          throw m.addToError(v);
        }
        return g !== false && m.walk && (g = m.walk(s)), g;
      });
    }
    walkAtRules(s, m) {
      return m ? s instanceof RegExp ? this.walk((h, g) => {
        if (h.type === "atrule" && s.test(h.name)) return m(h, g);
      }) : this.walk((h, g) => {
        if (h.type === "atrule" && h.name === s) return m(h, g);
      }) : (m = s, this.walk((h, g) => {
        if (h.type === "atrule") return m(h, g);
      }));
    }
    walkComments(s) {
      return this.walk((m, h) => {
        if (m.type === "comment") return s(m, h);
      });
    }
    walkDecls(s, m) {
      return m ? s instanceof RegExp ? this.walk((h, g) => {
        if (h.type === "decl" && s.test(h.prop)) return m(h, g);
      }) : this.walk((h, g) => {
        if (h.type === "decl" && h.prop === s) return m(h, g);
      }) : (m = s, this.walk((h, g) => {
        if (h.type === "decl") return m(h, g);
      }));
    }
    walkRules(s, m) {
      return m ? s instanceof RegExp ? this.walk((h, g) => {
        if (h.type === "rule" && s.test(h.selector)) return m(h, g);
      }) : this.walk((h, g) => {
        if (h.type === "rule" && h.selector === s) return m(h, g);
      }) : (m = s, this.walk((h, g) => {
        if (h.type === "rule") return m(h, g);
      }));
    }
  }
  return p.registerParse = (a) => {
    o = a;
  }, p.registerRule = (a) => {
    d = a;
  }, p.registerAtRule = (a) => {
    i = a;
  }, p.registerRoot = (a) => {
    l = a;
  }, Gn = p, p.default = p, p.rebuild = (a) => {
    a.type === "atrule" ? Object.setPrototypeOf(a, i.prototype) : a.type === "rule" ? Object.setPrototypeOf(a, d.prototype) : a.type === "decl" ? Object.setPrototypeOf(a, e.prototype) : a.type === "comment" ? Object.setPrototypeOf(a, f.prototype) : a.type === "root" && Object.setPrototypeOf(a, l.prototype), a[r] = true, a.nodes && a.nodes.forEach((s) => {
      p.rebuild(s);
    });
  }, Gn;
}
var Wn, ns;
function $i() {
  if (ns) return Wn;
  ns = 1;
  let f = mt();
  class e extends f {
    constructor(n) {
      super(n), this.type = "atrule";
    }
    append(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...n);
    }
    prepend(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...n);
    }
  }
  return Wn = e, e.default = e, f.registerAtRule(e), Wn;
}
var Jn, is;
function Ni() {
  if (is) return Jn;
  is = 1;
  let f = mt(), e, t;
  class n extends f {
    constructor(i) {
      super({ type: "document", ...i }), this.nodes || (this.nodes = []);
    }
    toResult(i = {}) {
      return new e(new t(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (r) => {
    e = r;
  }, n.registerProcessor = (r) => {
    t = r;
  }, Jn = n, n.default = n, Jn;
}
var Xn, rs;
function Nf() {
  if (rs) return Xn;
  rs = 1;
  let f = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return Xn = { nanoid: (n = 21) => {
    let r = "", i = n | 0;
    for (; i--; ) r += f[Math.random() * 64 | 0];
    return r;
  }, customAlphabet: (n, r = 21) => (i = r) => {
    let o = "", l = i | 0;
    for (; l--; ) o += n[Math.random() * n.length | 0];
    return o;
  } }, Xn;
}
const Qe = {};
var Zn, ss;
function Ma() {
  if (ss) return Zn;
  ss = 1;
  let { existsSync: f, readFileSync: e } = Qe, { dirname: t, join: n } = Qe, { SourceMapConsumer: r, SourceMapGenerator: i } = Qe;
  function o(d) {
    return Buffer ? Buffer.from(d, "base64").toString() : window.atob(d);
  }
  class l {
    constructor(c, u) {
      if (u.map === false) return;
      this.loadAnnotation(c), this.inline = this.startWith(this.annotation, "data:");
      let p = u.map ? u.map.prev : void 0, a = this.loadMap(u.from, p);
      !this.mapFile && u.from && (this.mapFile = u.from), this.mapFile && (this.root = t(this.mapFile)), a && (this.text = a);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new r(this.text)), this.consumerCache;
    }
    decodeInline(c) {
      let u = /^data:application\/json;charset=utf-?8;base64,/, p = /^data:application\/json;base64,/, a = /^data:application\/json;charset=utf-?8,/, s = /^data:application\/json,/, m = c.match(a) || c.match(s);
      if (m) return decodeURIComponent(c.substr(m[0].length));
      let h = c.match(u) || c.match(p);
      if (h) return o(c.substr(h[0].length));
      let g = c.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + g);
    }
    getAnnotationURL(c) {
      return c.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(c) {
      return typeof c != "object" ? false : typeof c.mappings == "string" || typeof c._mappings == "string" || Array.isArray(c.sections);
    }
    loadAnnotation(c) {
      let u = c.match(/\/\*\s*# sourceMappingURL=/g);
      if (!u) return;
      let p = c.lastIndexOf(u.pop()), a = c.indexOf("*/", p);
      p > -1 && a > -1 && (this.annotation = this.getAnnotationURL(c.substring(p, a)));
    }
    loadFile(c) {
      if (this.root = t(c), f(c)) return this.mapFile = c, e(c, "utf-8").toString().trim();
    }
    loadMap(c, u) {
      if (u === false) return false;
      if (u) {
        if (typeof u == "string") return u;
        if (typeof u == "function") {
          let p = u(c);
          if (p) {
            let a = this.loadFile(p);
            if (!a) throw new Error("Unable to load previous source map: " + p.toString());
            return a;
          }
        } else {
          if (u instanceof r) return i.fromSourceMap(u).toString();
          if (u instanceof i) return u.toString();
          if (this.isMap(u)) return JSON.stringify(u);
          throw new Error("Unsupported previous source map format: " + u.toString());
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let p = this.annotation;
          return c && (p = n(t(c), p)), this.loadFile(p);
        }
      }
    }
    startWith(c, u) {
      return c ? c.substr(0, u.length) === u : false;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return Zn = l, l.default = l, Zn;
}
var Kn, as;
function Cn() {
  if (as) return Kn;
  as = 1;
  let { nanoid: f } = Nf(), { isAbsolute: e, resolve: t } = Qe, { SourceMapConsumer: n, SourceMapGenerator: r } = Qe, { fileURLToPath: i, pathToFileURL: o } = Qe, l = Bi(), d = Ma(), c = Pa, u = Symbol("fromOffsetCache"), p = !!(n && r), a = !!(t && e);
  class s {
    get from() {
      return this.file || this.id;
    }
    constructor(h, g = {}) {
      if (h === null || typeof h > "u" || typeof h == "object" && !h.toString) throw new Error(`PostCSS received ${h} instead of CSS string`);
      if (this.css = h.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, g.document && (this.document = g.document.toString()), g.from && (!a || /^\w+:\/\//.test(g.from) || e(g.from) ? this.file = g.from : this.file = t(g.from)), a && p) {
        let v = new d(this.css, g);
        if (v.text) {
          this.map = v;
          let x = v.consumer().file;
          !this.file && x && (this.file = this.mapResolve(x));
        }
      }
      this.file || (this.id = "<input css " + f(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(h, g, v, x = {}) {
      let w, y, b;
      if (g && typeof g == "object") {
        let C = g, k = v;
        if (typeof C.offset == "number") {
          let P = this.fromOffset(C.offset);
          g = P.line, v = P.col;
        } else g = C.line, v = C.column;
        if (typeof k.offset == "number") {
          let P = this.fromOffset(k.offset);
          y = P.line, w = P.col;
        } else y = k.line, w = k.column;
      } else if (!v) {
        let C = this.fromOffset(g);
        g = C.line, v = C.col;
      }
      let S = this.origin(g, v, y, w);
      return S ? b = new l(h, S.endLine === void 0 ? S.line : { column: S.column, line: S.line }, S.endLine === void 0 ? S.column : { column: S.endColumn, line: S.endLine }, S.source, S.file, x.plugin) : b = new l(h, y === void 0 ? g : { column: v, line: g }, y === void 0 ? v : { column: w, line: y }, this.css, this.file, x.plugin), b.input = { column: v, endColumn: w, endLine: y, line: g, source: this.css }, this.file && (o && (b.input.url = o(this.file).toString()), b.input.file = this.file), b;
    }
    fromOffset(h) {
      let g, v;
      if (this[u]) v = this[u];
      else {
        let w = this.css.split(`
`);
        v = new Array(w.length);
        let y = 0;
        for (let b = 0, S = w.length; b < S; b++) v[b] = y, y += w[b].length + 1;
        this[u] = v;
      }
      g = v[v.length - 1];
      let x = 0;
      if (h >= g) x = v.length - 1;
      else {
        let w = v.length - 2, y;
        for (; x < w; ) if (y = x + (w - x >> 1), h < v[y]) w = y - 1;
        else if (h >= v[y + 1]) x = y + 1;
        else {
          x = y;
          break;
        }
      }
      return { col: h - v[x] + 1, line: x + 1 };
    }
    mapResolve(h) {
      return /^\w+:\/\//.test(h) ? h : t(this.map.consumer().sourceRoot || this.map.root || ".", h);
    }
    origin(h, g, v, x) {
      if (!this.map) return false;
      let w = this.map.consumer(), y = w.originalPositionFor({ column: g, line: h });
      if (!y.source) return false;
      let b;
      typeof v == "number" && (b = w.originalPositionFor({ column: x, line: v }));
      let S;
      e(y.source) ? S = o(y.source) : S = new URL(y.source, this.map.consumer().sourceRoot || o(this.map.mapFile));
      let C = { column: y.column, endColumn: b && b.column, endLine: b && b.line, line: y.line, url: S.toString() };
      if (S.protocol === "file:") if (i) C.file = i(S);
      else throw new Error("file: protocol is not available in this PostCSS build");
      let k = w.sourceContentFor(y.source);
      return k && (C.source = k), C;
    }
    toJSON() {
      let h = {};
      for (let g of ["hasBOM", "css", "file", "id"]) this[g] != null && (h[g] = this[g]);
      return this.map && (h.map = { ...this.map }, h.map.consumerCache && (h.map.consumerCache = void 0)), h;
    }
  }
  return Kn = s, s.default = s, c && c.registerInput && c.registerInput(s), Kn;
}
var Yn, os;
function jt() {
  if (os) return Yn;
  os = 1;
  let f = mt(), e, t;
  class n extends f {
    constructor(i) {
      super(i), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(i, o, l) {
      let d = super.normalize(i);
      if (o) {
        if (l === "prepend") this.nodes.length > 1 ? o.raws.before = this.nodes[1].raws.before : delete o.raws.before;
        else if (this.first !== o) for (let c of d) c.raws.before = o.raws.before;
      }
      return d;
    }
    removeChild(i, o) {
      let l = this.index(i);
      return !o && l === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[l].raws.before), super.removeChild(i);
    }
    toResult(i = {}) {
      return new e(new t(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (r) => {
    e = r;
  }, n.registerProcessor = (r) => {
    t = r;
  }, Yn = n, n.default = n, f.registerRoot(n), Yn;
}
var Qn, us;
function Oa() {
  if (us) return Qn;
  us = 1;
  let f = { comma(e) {
    return f.split(e, [","], true);
  }, space(e) {
    let t = [" ", `
`, "	"];
    return f.split(e, t);
  }, split(e, t, n) {
    let r = [], i = "", o = false, l = 0, d = false, c = "", u = false;
    for (let p of e) u ? u = false : p === "\\" ? u = true : d ? p === c && (d = false) : p === '"' || p === "'" ? (d = true, c = p) : p === "(" ? l += 1 : p === ")" ? l > 0 && (l -= 1) : l === 0 && t.includes(p) && (o = true), o ? (i !== "" && r.push(i.trim()), i = "", o = false) : i += p;
    return (n || i !== "") && r.push(i.trim()), r;
  } };
  return Qn = f, f.default = f, Qn;
}
var ei, ls;
function ji() {
  if (ls) return ei;
  ls = 1;
  let f = mt(), e = Oa();
  class t extends f {
    get selectors() {
      return e.comma(this.selector);
    }
    set selectors(r) {
      let i = this.selector ? this.selector.match(/,\s*/) : null, o = i ? i[0] : "," + this.raw("between", "beforeOpen");
      this.selector = r.join(o);
    }
    constructor(r) {
      super(r), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return ei = t, t.default = t, f.registerRule(t), ei;
}
var ti, cs;
function jf() {
  if (cs) return ti;
  cs = 1;
  let f = $i(), e = wn(), t = Sn(), n = Cn(), r = Ma(), i = jt(), o = ji();
  function l(d, c) {
    if (Array.isArray(d)) return d.map((a) => l(a));
    let { inputs: u, ...p } = d;
    if (u) {
      c = [];
      for (let a of u) {
        let s = { ...a, __proto__: n.prototype };
        s.map && (s.map = { ...s.map, __proto__: r.prototype }), c.push(s);
      }
    }
    if (p.nodes && (p.nodes = d.nodes.map((a) => l(a, c))), p.source) {
      let { inputId: a, ...s } = p.source;
      p.source = s, a != null && (p.source.input = c[a]);
    }
    if (p.type === "root") return new i(p);
    if (p.type === "decl") return new t(p);
    if (p.type === "rule") return new o(p);
    if (p.type === "comment") return new e(p);
    if (p.type === "atrule") return new f(p);
    throw new Error("Unknown node type: " + d.type);
  }
  return ti = l, l.default = l, ti;
}
var ni, ds;
function Aa() {
  if (ds) return ni;
  ds = 1;
  let { dirname: f, relative: e, resolve: t, sep: n } = Qe, { SourceMapConsumer: r, SourceMapGenerator: i } = Qe, { pathToFileURL: o } = Qe, l = Cn(), d = !!(r && i), c = !!(f && t && e && n);
  class u {
    constructor(a, s, m, h) {
      this.stringify = a, this.mapOpts = m.map || {}, this.root = s, this.opts = m, this.css = h, this.originalCSS = h, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let a;
      this.isInline() ? a = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? a = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? a = this.mapOpts.annotation(this.opts.to, this.root) : a = this.outputFile() + ".map";
      let s = `
`;
      this.css.includes(`\r
`) && (s = `\r
`), this.css += s + "/*# sourceMappingURL=" + a + " */";
    }
    applyPrevMaps() {
      for (let a of this.previous()) {
        let s = this.toUrl(this.path(a.file)), m = a.root || f(a.file), h;
        this.mapOpts.sourcesContent === false ? (h = new r(a.text), h.sourcesContent && (h.sourcesContent = null)) : h = a.consumer(), this.map.applySourceMap(h, s, this.toUrl(this.path(m)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== false) if (this.root) {
        let a;
        for (let s = this.root.nodes.length - 1; s >= 0; s--) a = this.root.nodes[s], a.type === "comment" && a.text.startsWith("# sourceMappingURL=") && this.root.removeChild(s);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), c && d && this.isMap()) return this.generateMap();
      {
        let a = "";
        return this.stringify(this.root, (s) => {
          a += s;
        }), [a];
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let a = this.previous()[0].consumer();
        a.file = this.outputFile(), this.map = i.fromSourceMap(a, { ignoreInvalidMapping: true });
      } else this.map = new i({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new i({ file: this.outputFile(), ignoreInvalidMapping: true });
      let a = 1, s = 1, m = "<no source>", h = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" }, g, v;
      this.stringify(this.root, (x, w, y) => {
        if (this.css += x, w && y !== "end" && (h.generated.line = a, h.generated.column = s - 1, w.source && w.source.start ? (h.source = this.sourcePath(w), h.original.line = w.source.start.line, h.original.column = w.source.start.column - 1, this.map.addMapping(h)) : (h.source = m, h.original.line = 1, h.original.column = 0, this.map.addMapping(h))), v = x.match(/\n/g), v ? (a += v.length, g = x.lastIndexOf(`
`), s = x.length - g) : s += x.length, w && y !== "start") {
          let b = w.parent || { raws: {} };
          (!(w.type === "decl" || w.type === "atrule" && !w.nodes) || w !== b.last || b.raws.semicolon) && (w.source && w.source.end ? (h.source = this.sourcePath(w), h.original.line = w.source.end.line, h.original.column = w.source.end.column - 1, h.generated.line = a, h.generated.column = s - 2, this.map.addMapping(h)) : (h.source = m, h.original.line = 1, h.original.column = 0, h.generated.line = a, h.generated.column = s - 1, this.map.addMapping(h)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? true : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((a) => a.annotation) : true;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let a = this.mapOpts.annotation;
      return typeof a < "u" && a !== true ? false : this.previous().length ? this.previous().some((s) => s.inline) : true;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((a) => a.withContent()) : true;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(a) {
      if (this.mapOpts.absolute || a.charCodeAt(0) === 60 || /^\w+:\/\//.test(a)) return a;
      let s = this.memoizedPaths.get(a);
      if (s) return s;
      let m = this.opts.to ? f(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (m = f(t(m, this.mapOpts.annotation)));
      let h = e(m, a);
      return this.memoizedPaths.set(a, h), h;
    }
    previous() {
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((a) => {
        if (a.source && a.source.input.map) {
          let s = a.source.input.map;
          this.previousMaps.includes(s) || this.previousMaps.push(s);
        }
      });
      else {
        let a = new l(this.originalCSS, this.opts);
        a.map && this.previousMaps.push(a.map);
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let a = {};
      if (this.root) this.root.walk((s) => {
        if (s.source) {
          let m = s.source.input.from;
          if (m && !a[m]) {
            a[m] = true;
            let h = this.usesFileUrls ? this.toFileUrl(m) : this.toUrl(this.path(m));
            this.map.setSourceContent(h, s.source.input.css);
          }
        }
      });
      else if (this.css) {
        let s = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(s, this.css);
      }
    }
    sourcePath(a) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(a.source.input.from) : this.toUrl(this.path(a.source.input.from));
    }
    toBase64(a) {
      return Buffer ? Buffer.from(a).toString("base64") : window.btoa(unescape(encodeURIComponent(a)));
    }
    toFileUrl(a) {
      let s = this.memoizedFileURLs.get(a);
      if (s) return s;
      if (o) {
        let m = o(a).toString();
        return this.memoizedFileURLs.set(a, m), m;
      } else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(a) {
      let s = this.memoizedURLs.get(a);
      if (s) return s;
      n === "\\" && (a = a.replace(/\\/g, "/"));
      let m = encodeURI(a).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(a, m), m;
    }
  }
  return ni = u, ni;
}
var ii, fs;
function Ff() {
  if (fs) return ii;
  fs = 1;
  const f = 39, e = 34, t = 92, n = 47, r = 10, i = 32, o = 12, l = 9, d = 13, c = 91, u = 93, p = 40, a = 41, s = 123, m = 125, h = 59, g = 42, v = 58, x = 64, w = /[\t\n\f\r "#'()/;[\\\]{}]/g, y = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, b = /.[\r\n"'(/\\]/, S = /[\da-f]/i;
  return ii = function(k, P = {}) {
    let L = k.css.valueOf(), E = P.ignoreErrors, T, M, R, O, U, N, $, F, B, I, X = L.length, W = 0, re = [], ge = [];
    function le() {
      return W;
    }
    function Te(j) {
      throw k.error("Unclosed " + j, W);
    }
    function _e() {
      return ge.length === 0 && W >= X;
    }
    function Pt(j) {
      if (ge.length) return ge.pop();
      if (W >= X) return;
      let G = j ? j.ignoreUnclosed : false;
      switch (T = L.charCodeAt(W), T) {
        case r:
        case i:
        case l:
        case d:
        case o: {
          O = W;
          do
            O += 1, T = L.charCodeAt(O);
          while (T === i || T === r || T === l || T === d || T === o);
          N = ["space", L.slice(W, O)], W = O - 1;
          break;
        }
        case c:
        case u:
        case s:
        case m:
        case v:
        case h:
        case a: {
          let q = String.fromCharCode(T);
          N = [q, q, W];
          break;
        }
        case p: {
          if (I = re.length ? re.pop()[1] : "", B = L.charCodeAt(W + 1), I === "url" && B !== f && B !== e && B !== i && B !== r && B !== l && B !== o && B !== d) {
            O = W;
            do {
              if ($ = false, O = L.indexOf(")", O + 1), O === -1) if (E || G) {
                O = W;
                break;
              } else Te("bracket");
              for (F = O; L.charCodeAt(F - 1) === t; ) F -= 1, $ = !$;
            } while ($);
            N = ["brackets", L.slice(W, O + 1), W, O], W = O;
          } else O = L.indexOf(")", W + 1), M = L.slice(W, O + 1), O === -1 || b.test(M) ? N = ["(", "(", W] : (N = ["brackets", M, W, O], W = O);
          break;
        }
        case f:
        case e: {
          U = T === f ? "'" : '"', O = W;
          do {
            if ($ = false, O = L.indexOf(U, O + 1), O === -1) if (E || G) {
              O = W + 1;
              break;
            } else Te("string");
            for (F = O; L.charCodeAt(F - 1) === t; ) F -= 1, $ = !$;
          } while ($);
          N = ["string", L.slice(W, O + 1), W, O], W = O;
          break;
        }
        case x: {
          w.lastIndex = W + 1, w.test(L), w.lastIndex === 0 ? O = L.length - 1 : O = w.lastIndex - 2, N = ["at-word", L.slice(W, O + 1), W, O], W = O;
          break;
        }
        case t: {
          for (O = W, R = true; L.charCodeAt(O + 1) === t; ) O += 1, R = !R;
          if (T = L.charCodeAt(O + 1), R && T !== n && T !== i && T !== r && T !== l && T !== d && T !== o && (O += 1, S.test(L.charAt(O)))) {
            for (; S.test(L.charAt(O + 1)); ) O += 1;
            L.charCodeAt(O + 1) === i && (O += 1);
          }
          N = ["word", L.slice(W, O + 1), W, O], W = O;
          break;
        }
        default: {
          T === n && L.charCodeAt(W + 1) === g ? (O = L.indexOf("*/", W + 2) + 1, O === 0 && (E || G ? O = L.length : Te("comment")), N = ["comment", L.slice(W, O + 1), W, O], W = O) : (y.lastIndex = W + 1, y.test(L), y.lastIndex === 0 ? O = L.length - 1 : O = y.lastIndex - 2, N = ["word", L.slice(W, O + 1), W, O], re.push(N), W = O);
          break;
        }
      }
      return W++, N;
    }
    function gt(j) {
      ge.push(j);
    }
    return { back: gt, endOfFile: _e, nextToken: Pt, position: le };
  }, ii;
}
var ri, ps;
function Uf() {
  if (ps) return ri;
  ps = 1;
  let f = $i(), e = wn(), t = Sn(), n = jt(), r = ji(), i = Ff();
  const o = { empty: true, space: true };
  function l(c) {
    for (let u = c.length - 1; u >= 0; u--) {
      let p = c[u], a = p[3] || p[2];
      if (a) return a;
    }
  }
  class d {
    constructor(u) {
      this.input = u, this.root = new n(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: u, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(u) {
      let p = new f();
      p.name = u[1].slice(1), p.name === "" && this.unnamedAtrule(p, u), this.init(p, u[2]);
      let a, s, m, h = false, g = false, v = [], x = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (u = this.tokenizer.nextToken(), a = u[0], a === "(" || a === "[" ? x.push(a === "(" ? ")" : "]") : a === "{" && x.length > 0 ? x.push("}") : a === x[x.length - 1] && x.pop(), x.length === 0) if (a === ";") {
          p.source.end = this.getPosition(u[2]), p.source.end.offset++, this.semicolon = true;
          break;
        } else if (a === "{") {
          g = true;
          break;
        } else if (a === "}") {
          if (v.length > 0) {
            for (m = v.length - 1, s = v[m]; s && s[0] === "space"; ) s = v[--m];
            s && (p.source.end = this.getPosition(s[3] || s[2]), p.source.end.offset++);
          }
          this.end(u);
          break;
        } else v.push(u);
        else v.push(u);
        if (this.tokenizer.endOfFile()) {
          h = true;
          break;
        }
      }
      p.raws.between = this.spacesAndCommentsFromEnd(v), v.length ? (p.raws.afterName = this.spacesAndCommentsFromStart(v), this.raw(p, "params", v), h && (u = v[v.length - 1], p.source.end = this.getPosition(u[3] || u[2]), p.source.end.offset++, this.spaces = p.raws.between, p.raws.between = "")) : (p.raws.afterName = "", p.params = ""), g && (p.nodes = [], this.current = p);
    }
    checkMissedSemicolon(u) {
      let p = this.colon(u);
      if (p === false) return;
      let a = 0, s;
      for (let m = p - 1; m >= 0 && (s = u[m], !(s[0] !== "space" && (a += 1, a === 2))); m--) ;
      throw this.input.error("Missed semicolon", s[0] === "word" ? s[3] + 1 : s[2]);
    }
    colon(u) {
      let p = 0, a, s, m;
      for (let [h, g] of u.entries()) {
        if (s = g, m = s[0], m === "(" && (p += 1), m === ")" && (p -= 1), p === 0 && m === ":") if (!a) this.doubleColon(s);
        else {
          if (a[0] === "word" && a[1] === "progid") continue;
          return h;
        }
        a = s;
      }
      return false;
    }
    comment(u) {
      let p = new e();
      this.init(p, u[2]), p.source.end = this.getPosition(u[3] || u[2]), p.source.end.offset++;
      let a = u[1].slice(2, -2);
      if (/^\s*$/.test(a)) p.text = "", p.raws.left = a, p.raws.right = "";
      else {
        let s = a.match(/^(\s*)([^]*\S)(\s*)$/);
        p.text = s[2], p.raws.left = s[1], p.raws.right = s[3];
      }
    }
    createTokenizer() {
      this.tokenizer = i(this.input);
    }
    decl(u, p) {
      let a = new t();
      this.init(a, u[0][2]);
      let s = u[u.length - 1];
      for (s[0] === ";" && (this.semicolon = true, u.pop()), a.source.end = this.getPosition(s[3] || s[2] || l(u)), a.source.end.offset++; u[0][0] !== "word"; ) u.length === 1 && this.unknownWord(u), a.raws.before += u.shift()[1];
      for (a.source.start = this.getPosition(u[0][2]), a.prop = ""; u.length; ) {
        let x = u[0][0];
        if (x === ":" || x === "space" || x === "comment") break;
        a.prop += u.shift()[1];
      }
      a.raws.between = "";
      let m;
      for (; u.length; ) if (m = u.shift(), m[0] === ":") {
        a.raws.between += m[1];
        break;
      } else m[0] === "word" && /\w/.test(m[1]) && this.unknownWord([m]), a.raws.between += m[1];
      (a.prop[0] === "_" || a.prop[0] === "*") && (a.raws.before += a.prop[0], a.prop = a.prop.slice(1));
      let h = [], g;
      for (; u.length && (g = u[0][0], !(g !== "space" && g !== "comment")); ) h.push(u.shift());
      this.precheckMissedSemicolon(u);
      for (let x = u.length - 1; x >= 0; x--) {
        if (m = u[x], m[1].toLowerCase() === "!important") {
          a.important = true;
          let w = this.stringFrom(u, x);
          w = this.spacesFromEnd(u) + w, w !== " !important" && (a.raws.important = w);
          break;
        } else if (m[1].toLowerCase() === "important") {
          let w = u.slice(0), y = "";
          for (let b = x; b > 0; b--) {
            let S = w[b][0];
            if (y.trim().startsWith("!") && S !== "space") break;
            y = w.pop()[1] + y;
          }
          y.trim().startsWith("!") && (a.important = true, a.raws.important = y, u = w);
        }
        if (m[0] !== "space" && m[0] !== "comment") break;
      }
      u.some((x) => x[0] !== "space" && x[0] !== "comment") && (a.raws.between += h.map((x) => x[1]).join(""), h = []), this.raw(a, "value", h.concat(u), p), a.value.includes(":") && !p && this.checkMissedSemicolon(u);
    }
    doubleColon(u) {
      throw this.input.error("Double colon", { offset: u[2] }, { offset: u[2] + u[1].length });
    }
    emptyRule(u) {
      let p = new r();
      this.init(p, u[2]), p.selector = "", p.raws.between = "", this.current = p;
    }
    end(u) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(u[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(u);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(u) {
      if (this.spaces += u[1], this.current.nodes) {
        let p = this.current.nodes[this.current.nodes.length - 1];
        p && p.type === "rule" && !p.raws.ownSemicolon && (p.raws.ownSemicolon = this.spaces, this.spaces = "", p.source.end = this.getPosition(u[2]), p.source.end.offset += p.raws.ownSemicolon.length);
      }
    }
    getPosition(u) {
      let p = this.input.fromOffset(u);
      return { column: p.col, line: p.line, offset: u };
    }
    init(u, p) {
      this.current.push(u), u.source = { input: this.input, start: this.getPosition(p) }, u.raws.before = this.spaces, this.spaces = "", u.type !== "comment" && (this.semicolon = false);
    }
    other(u) {
      let p = false, a = null, s = false, m = null, h = [], g = u[1].startsWith("--"), v = [], x = u;
      for (; x; ) {
        if (a = x[0], v.push(x), a === "(" || a === "[") m || (m = x), h.push(a === "(" ? ")" : "]");
        else if (g && s && a === "{") m || (m = x), h.push("}");
        else if (h.length === 0) if (a === ";") if (s) {
          this.decl(v, g);
          return;
        } else break;
        else if (a === "{") {
          this.rule(v);
          return;
        } else if (a === "}") {
          this.tokenizer.back(v.pop()), p = true;
          break;
        } else a === ":" && (s = true);
        else a === h[h.length - 1] && (h.pop(), h.length === 0 && (m = null));
        x = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (p = true), h.length > 0 && this.unclosedBracket(m), p && s) {
        if (!g) for (; v.length && (x = v[v.length - 1][0], !(x !== "space" && x !== "comment")); ) this.tokenizer.back(v.pop());
        this.decl(v, g);
      } else this.unknownWord(v);
    }
    parse() {
      let u;
      for (; !this.tokenizer.endOfFile(); ) switch (u = this.tokenizer.nextToken(), u[0]) {
        case "space":
          this.spaces += u[1];
          break;
        case ";":
          this.freeSemicolon(u);
          break;
        case "}":
          this.end(u);
          break;
        case "comment":
          this.comment(u);
          break;
        case "at-word":
          this.atrule(u);
          break;
        case "{":
          this.emptyRule(u);
          break;
        default:
          this.other(u);
          break;
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(u, p, a, s) {
      let m, h, g = a.length, v = "", x = true, w, y;
      for (let b = 0; b < g; b += 1) m = a[b], h = m[0], h === "space" && b === g - 1 && !s ? x = false : h === "comment" ? (y = a[b - 1] ? a[b - 1][0] : "empty", w = a[b + 1] ? a[b + 1][0] : "empty", !o[y] && !o[w] ? v.slice(-1) === "," ? x = false : v += m[1] : x = false) : v += m[1];
      if (!x) {
        let b = a.reduce((S, C) => S + C[1], "");
        u.raws[p] = { raw: b, value: v };
      }
      u[p] = v;
    }
    rule(u) {
      u.pop();
      let p = new r();
      this.init(p, u[0][2]), p.raws.between = this.spacesAndCommentsFromEnd(u), this.raw(p, "selector", u), this.current = p;
    }
    spacesAndCommentsFromEnd(u) {
      let p, a = "";
      for (; u.length && (p = u[u.length - 1][0], !(p !== "space" && p !== "comment")); ) a = u.pop()[1] + a;
      return a;
    }
    spacesAndCommentsFromStart(u) {
      let p, a = "";
      for (; u.length && (p = u[0][0], !(p !== "space" && p !== "comment")); ) a += u.shift()[1];
      return a;
    }
    spacesFromEnd(u) {
      let p, a = "";
      for (; u.length && (p = u[u.length - 1][0], p === "space"); ) a = u.pop()[1] + a;
      return a;
    }
    stringFrom(u, p) {
      let a = "";
      for (let s = p; s < u.length; s++) a += u[s][1];
      return u.splice(p, u.length - p), a;
    }
    unclosedBlock() {
      let u = this.current.source.start;
      throw this.input.error("Unclosed block", u.line, u.column);
    }
    unclosedBracket(u) {
      throw this.input.error("Unclosed bracket", { offset: u[2] }, { offset: u[2] + 1 });
    }
    unexpectedClose(u) {
      throw this.input.error("Unexpected }", { offset: u[2] }, { offset: u[2] + 1 });
    }
    unknownWord(u) {
      throw this.input.error("Unknown word " + u[0][1], { offset: u[0][2] }, { offset: u[0][2] + u[0][1].length });
    }
    unnamedAtrule(u, p) {
      throw this.input.error("At-rule without name", { offset: p[2] }, { offset: p[2] + p[1].length });
    }
  }
  return ri = d, ri;
}
var si, hs;
function Fi() {
  if (hs) return si;
  hs = 1;
  let f = mt(), e = Cn(), t = Uf();
  function n(r, i) {
    let o = new e(r, i), l = new t(o);
    try {
      l.parse();
    } catch (d) {
      throw d;
    }
    return l.root;
  }
  return si = n, n.default = n, f.registerParse(n), si;
}
var ai, ms;
function Ra() {
  if (ms) return ai;
  ms = 1;
  class f {
    constructor(t, n = {}) {
      if (this.type = "warning", this.text = t, n.node && n.node.source) {
        let r = n.node.rangeBy(n);
        this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
      }
      for (let r in n) this[r] = n[r];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return ai = f, f.default = f, ai;
}
var oi, gs;
function Ui() {
  if (gs) return oi;
  gs = 1;
  let f = Ra();
  class e {
    get content() {
      return this.css;
    }
    constructor(n, r, i) {
      this.processor = n, this.messages = [], this.root = r, this.opts = i, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(n, r = {}) {
      r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
      let i = new f(n, r);
      return this.messages.push(i), i;
    }
    warnings() {
      return this.messages.filter((n) => n.type === "warning");
    }
  }
  return oi = e, e.default = e, oi;
}
var ui, vs;
function Da() {
  if (vs) return ui;
  vs = 1;
  let f = mt(), e = Ni(), t = Aa(), n = Fi(), r = Ui(), i = jt(), o = yn(), { isClean: l, my: d } = zi();
  const c = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, u = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, p = { Once: true, postcssPlugin: true, prepare: true }, a = 0;
  function s(w) {
    return typeof w == "object" && typeof w.then == "function";
  }
  function m(w) {
    let y = false, b = c[w.type];
    return w.type === "decl" ? y = w.prop.toLowerCase() : w.type === "atrule" && (y = w.name.toLowerCase()), y && w.append ? [b, b + "-" + y, a, b + "Exit", b + "Exit-" + y] : y ? [b, b + "-" + y, b + "Exit", b + "Exit-" + y] : w.append ? [b, a, b + "Exit"] : [b, b + "Exit"];
  }
  function h(w) {
    let y;
    return w.type === "document" ? y = ["Document", a, "DocumentExit"] : w.type === "root" ? y = ["Root", a, "RootExit"] : y = m(w), { eventIndex: 0, events: y, iterator: 0, node: w, visitorIndex: 0, visitors: [] };
  }
  function g(w) {
    return w[l] = false, w.nodes && w.nodes.forEach((y) => g(y)), w;
  }
  let v = {};
  class x {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(y, b, S) {
      this.stringified = false, this.processed = false;
      let C;
      if (typeof b == "object" && b !== null && (b.type === "root" || b.type === "document")) C = g(b);
      else if (b instanceof x || b instanceof r) C = g(b.root), b.map && (typeof S.map > "u" && (S.map = {}), S.map.inline || (S.map.inline = false), S.map.prev = b.map);
      else {
        let k = n;
        S.syntax && (k = S.syntax.parse), S.parser && (k = S.parser), k.parse && (k = k.parse);
        try {
          C = k(b, S);
        } catch (P) {
          this.processed = true, this.error = P;
        }
        C && !C[d] && f.rebuild(C);
      }
      this.result = new r(y, C, S), this.helpers = { ...v, postcss: v, result: this.result }, this.plugins = this.processor.plugins.map((k) => typeof k == "object" && k.prepare ? { ...k, ...k.prepare(this.result) } : k);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(y) {
      return this.async().catch(y);
    }
    finally(y) {
      return this.async().then(y, y);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(y, b) {
      let S = this.result.lastPlugin;
      try {
        b && b.addToError(y), this.error = y, y.name === "CssSyntaxError" && !y.plugin ? (y.plugin = S.postcssPlugin, y.setMessage()) : S.postcssVersion;
      } catch (C) {
        console && console.error && console.error(C);
      }
      return y;
    }
    prepareVisitors() {
      this.listeners = {};
      let y = (b, S, C) => {
        this.listeners[S] || (this.listeners[S] = []), this.listeners[S].push([b, C]);
      };
      for (let b of this.plugins) if (typeof b == "object") for (let S in b) {
        if (!u[S] && /^[A-Z]/.test(S)) throw new Error(`Unknown event ${S} in ${b.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!p[S]) if (typeof b[S] == "object") for (let C in b[S]) C === "*" ? y(b, S, b[S][C]) : y(b, S + "-" + C.toLowerCase(), b[S][C]);
        else typeof b[S] == "function" && y(b, S, b[S]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let y = 0; y < this.plugins.length; y++) {
        let b = this.plugins[y], S = this.runOnRoot(b);
        if (s(S)) try {
          await S;
        } catch (C) {
          throw this.handleError(C);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let y = this.result.root;
        for (; !y[l]; ) {
          y[l] = true;
          let b = [h(y)];
          for (; b.length > 0; ) {
            let S = this.visitTick(b);
            if (s(S)) try {
              await S;
            } catch (C) {
              let k = b[b.length - 1].node;
              throw this.handleError(C, k);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [b, S] of this.listeners.OnceExit) {
          this.result.lastPlugin = b;
          try {
            if (y.type === "document") {
              let C = y.nodes.map((k) => S(k, this.helpers));
              await Promise.all(C);
            } else await S(y, this.helpers);
          } catch (C) {
            throw this.handleError(C);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    runOnRoot(y) {
      this.result.lastPlugin = y;
      try {
        if (typeof y == "object" && y.Once) {
          if (this.result.root.type === "document") {
            let b = this.result.root.nodes.map((S) => y.Once(S, this.helpers));
            return s(b[0]) ? Promise.all(b) : b;
          }
          return y.Once(this.result.root, this.helpers);
        } else if (typeof y == "function") return y(this.result.root, this.result);
      } catch (b) {
        throw this.handleError(b);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let y = this.result.opts, b = o;
      y.syntax && (b = y.syntax.stringify), y.stringifier && (b = y.stringifier), b.stringify && (b = b.stringify);
      let C = new t(b, this.result.root, this.result.opts).generate();
      return this.result.css = C[0], this.result.map = C[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let y of this.plugins) {
        let b = this.runOnRoot(y);
        if (s(b)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let y = this.result.root;
        for (; !y[l]; ) y[l] = true, this.walkSync(y);
        if (this.listeners.OnceExit) if (y.type === "document") for (let b of y.nodes) this.visitSync(this.listeners.OnceExit, b);
        else this.visitSync(this.listeners.OnceExit, y);
      }
      return this.result;
    }
    then(y, b) {
      return this.async().then(y, b);
    }
    toString() {
      return this.css;
    }
    visitSync(y, b) {
      for (let [S, C] of y) {
        this.result.lastPlugin = S;
        let k;
        try {
          k = C(b, this.helpers);
        } catch (P) {
          throw this.handleError(P, b.proxyOf);
        }
        if (b.type !== "root" && b.type !== "document" && !b.parent) return true;
        if (s(k)) throw this.getAsyncError();
      }
    }
    visitTick(y) {
      let b = y[y.length - 1], { node: S, visitors: C } = b;
      if (S.type !== "root" && S.type !== "document" && !S.parent) {
        y.pop();
        return;
      }
      if (C.length > 0 && b.visitorIndex < C.length) {
        let [P, L] = C[b.visitorIndex];
        b.visitorIndex += 1, b.visitorIndex === C.length && (b.visitors = [], b.visitorIndex = 0), this.result.lastPlugin = P;
        try {
          return L(S.toProxy(), this.helpers);
        } catch (E) {
          throw this.handleError(E, S);
        }
      }
      if (b.iterator !== 0) {
        let P = b.iterator, L;
        for (; L = S.nodes[S.indexes[P]]; ) if (S.indexes[P] += 1, !L[l]) {
          L[l] = true, y.push(h(L));
          return;
        }
        b.iterator = 0, delete S.indexes[P];
      }
      let k = b.events;
      for (; b.eventIndex < k.length; ) {
        let P = k[b.eventIndex];
        if (b.eventIndex += 1, P === a) {
          S.nodes && S.nodes.length && (S[l] = true, b.iterator = S.getIterator());
          return;
        } else if (this.listeners[P]) {
          b.visitors = this.listeners[P];
          return;
        }
      }
      y.pop();
    }
    walkSync(y) {
      y[l] = true;
      let b = m(y);
      for (let S of b) if (S === a) y.nodes && y.each((C) => {
        C[l] || this.walkSync(C);
      });
      else {
        let C = this.listeners[S];
        if (C && this.visitSync(C, y.toProxy())) return;
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return x.registerPostcss = (w) => {
    v = w;
  }, ui = x, x.default = x, i.registerLazyResult(x), e.registerLazyResult(x), ui;
}
var li, bs;
function qf() {
  if (bs) return li;
  bs = 1;
  let f = Aa(), e = Fi();
  const t = Ui();
  let n = yn();
  class r {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) return this._root;
      let o, l = e;
      try {
        o = l(this._css, this._opts);
      } catch (d) {
        this.error = d;
      }
      if (this.error) throw this.error;
      return this._root = o, o;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(o, l, d) {
      l = l.toString(), this.stringified = false, this._processor = o, this._css = l, this._opts = d, this._map = void 0;
      let c, u = n;
      this.result = new t(this._processor, c, this._opts), this.result.css = l;
      let p = this;
      Object.defineProperty(this.result, "root", { get() {
        return p.root;
      } });
      let a = new f(u, c, this._opts, l);
      if (a.isMap()) {
        let [s, m] = a.generate();
        s && (this.result.css = s), m && (this.result.map = m);
      } else a.clearAnnotation(), this.result.css = a.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(o) {
      return this.async().catch(o);
    }
    finally(o) {
      return this.async().then(o, o);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(o, l) {
      return this.async().then(o, l);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return li = r, r.default = r, li;
}
var ci, ys;
function Hf() {
  if (ys) return ci;
  ys = 1;
  let f = Ni(), e = Da(), t = qf(), n = jt();
  class r {
    constructor(o = []) {
      this.version = "8.5.3", this.plugins = this.normalize(o);
    }
    normalize(o) {
      let l = [];
      for (let d of o) if (d.postcss === true ? d = d() : d.postcss && (d = d.postcss), typeof d == "object" && Array.isArray(d.plugins)) l = l.concat(d.plugins);
      else if (typeof d == "object" && d.postcssPlugin) l.push(d);
      else if (typeof d == "function") l.push(d);
      else if (!(typeof d == "object" && (d.parse || d.stringify))) throw new Error(d + " is not a PostCSS plugin");
      return l;
    }
    process(o, l = {}) {
      return !this.plugins.length && !l.parser && !l.stringifier && !l.syntax ? new t(this, o, l) : new e(this, o, l);
    }
    use(o) {
      return this.plugins = this.plugins.concat(this.normalize([o])), this;
    }
  }
  return ci = r, r.default = r, n.registerProcessor(r), f.registerProcessor(r), ci;
}
var di, xs;
function Vf() {
  if (xs) return di;
  xs = 1;
  var f = {};
  let e = $i(), t = wn(), n = mt(), r = Bi(), i = Sn(), o = Ni(), l = jf(), d = Cn(), c = Da(), u = Oa(), p = xn(), a = Fi(), s = Hf(), m = Ui(), h = jt(), g = ji(), v = yn(), x = Ra();
  function w(...y) {
    return y.length === 1 && Array.isArray(y[0]) && (y = y[0]), new s(y);
  }
  return w.plugin = function(b, S) {
    let C = false;
    function k(...L) {
      console && console.warn && !C && (C = true, console.warn(b + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), f.LANG && f.LANG.startsWith("cn") && console.warn(b + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
      let E = S(...L);
      return E.postcssPlugin = b, E.postcssVersion = new s().version, E;
    }
    let P;
    return Object.defineProperty(k, "postcss", { get() {
      return P || (P = k()), P;
    } }), k.process = function(L, E, T) {
      return w([k(T)]).process(L, E);
    }, k;
  }, w.stringify = v, w.parse = a, w.fromJSON = l, w.list = u, w.comment = (y) => new t(y), w.atRule = (y) => new e(y), w.decl = (y) => new i(y), w.rule = (y) => new g(y), w.root = (y) => new h(y), w.document = (y) => new o(y), w.CssSyntaxError = r, w.Declaration = i, w.Container = n, w.Processor = s, w.Document = o, w.Comment = t, w.Warning = x, w.AtRule = e, w.Result = m, w.Input = d, w.Rule = g, w.Root = h, w.Node = p, c.registerPostcss(w), di = w, w.default = w, di;
}
var fi, ws;
function Gf() {
  if (ws) return fi;
  ws = 1;
  const f = Mf(), e = Of(), { isPlainObject: t } = Af(), n = Rf(), r = If(), { parse: i } = Vf(), o = ["img", "audio", "video", "picture", "svg", "object", "map", "iframe", "embed"], l = ["script", "style"];
  function d(g, v) {
    g && Object.keys(g).forEach(function(x) {
      v(g[x], x);
    });
  }
  function c(g, v) {
    return {}.hasOwnProperty.call(g, v);
  }
  function u(g, v) {
    const x = [];
    return d(g, function(w) {
      v(w) && x.push(w);
    }), x;
  }
  function p(g) {
    for (const v in g) if (c(g, v)) return false;
    return true;
  }
  function a(g) {
    return g.map(function(v) {
      if (!v.url) throw new Error("URL missing");
      return v.url + (v.w ? ` ${v.w}w` : "") + (v.h ? ` ${v.h}h` : "") + (v.d ? ` ${v.d}x` : "");
    }).join(", ");
  }
  fi = m;
  const s = /^[^\0\t\n\f\r /<=>]+$/;
  function m(g, v, x) {
    if (g == null) return "";
    typeof g == "number" && (g = g.toString());
    let w = "", y = "";
    function b(j, G) {
      const q = this;
      this.tag = j, this.attribs = G || {}, this.tagPosition = w.length, this.text = "", this.openingTagLength = 0, this.mediaChildren = [], this.updateParentNodeText = function() {
        if (U.length) {
          const Q = U[U.length - 1];
          Q.text += q.text;
        }
      }, this.updateParentNodeMediaChildren = function() {
        U.length && o.includes(this.tag) && U[U.length - 1].mediaChildren.push(this.tag);
      };
    }
    v = Object.assign({}, m.defaults, v), v.parser = Object.assign({}, h, v.parser);
    const S = function(j) {
      return v.allowedTags === false || (v.allowedTags || []).indexOf(j) > -1;
    };
    l.forEach(function(j) {
      S(j) && !v.allowVulnerableTags && console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${j}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
    });
    const C = v.nonTextTags || ["script", "style", "textarea", "option"];
    let k, P;
    v.allowedAttributes && (k = {}, P = {}, d(v.allowedAttributes, function(j, G) {
      k[G] = [];
      const q = [];
      j.forEach(function(Q) {
        typeof Q == "string" && Q.indexOf("*") >= 0 ? q.push(e(Q).replace(/\\\*/g, ".*")) : k[G].push(Q);
      }), q.length && (P[G] = new RegExp("^(" + q.join("|") + ")$"));
    }));
    const L = {}, E = {}, T = {};
    d(v.allowedClasses, function(j, G) {
      if (k && (c(k, G) || (k[G] = []), k[G].push("class")), L[G] = j, Array.isArray(j)) {
        const q = [];
        L[G] = [], T[G] = [], j.forEach(function(Q) {
          typeof Q == "string" && Q.indexOf("*") >= 0 ? q.push(e(Q).replace(/\\\*/g, ".*")) : Q instanceof RegExp ? T[G].push(Q) : L[G].push(Q);
        }), q.length && (E[G] = new RegExp("^(" + q.join("|") + ")$"));
      }
    });
    const M = {};
    let R;
    d(v.transformTags, function(j, G) {
      let q;
      typeof j == "function" ? q = j : typeof j == "string" && (q = m.simpleTransform(j)), G === "*" ? R = q : M[G] = q;
    });
    let O, U, N, $, F, B, I = false;
    W();
    const X = new f.Parser({ onopentag: function(j, G) {
      if (v.enforceHtmlBoundary && j === "html" && W(), F) {
        B++;
        return;
      }
      const q = new b(j, G);
      U.push(q);
      let Q = false;
      const oe = !!q.text;
      let be;
      if (c(M, j) && (be = M[j](j, G), q.attribs = G = be.attribs, be.text !== void 0 && (q.innerText = be.text), j !== be.tagName && (q.name = j = be.tagName, $[O] = be.tagName)), R && (be = R(j, G), q.attribs = G = be.attribs, j !== be.tagName && (q.name = j = be.tagName, $[O] = be.tagName)), (!S(j) || v.disallowedTagsMode === "recursiveEscape" && !p(N) || v.nestingLimit != null && O >= v.nestingLimit) && (Q = true, N[O] = true, (v.disallowedTagsMode === "discard" || v.disallowedTagsMode === "completelyDiscard") && C.indexOf(j) !== -1 && (F = true, B = 1)), O++, Q) {
        if (v.disallowedTagsMode === "discard" || v.disallowedTagsMode === "completelyDiscard") {
          if (q.innerText && !oe) {
            const ae = re(q.innerText);
            v.textFilter ? w += v.textFilter(ae, j) : w += ae, I = true;
          }
          return;
        }
        y = w, w = "";
      }
      w += "<" + j, j === "script" && (v.allowedScriptHostnames || v.allowedScriptDomains) && (q.innerText = ""), (!k || c(k, j) || k["*"]) && d(G, function(ae, se) {
        if (!s.test(se)) {
          delete q.attribs[se];
          return;
        }
        if (ae === "" && !v.allowedEmptyAttributes.includes(se) && (v.nonBooleanAttributes.includes(se) || v.nonBooleanAttributes.includes("*"))) {
          delete q.attribs[se];
          return;
        }
        let vt = false;
        if (!k || c(k, j) && k[j].indexOf(se) !== -1 || k["*"] && k["*"].indexOf(se) !== -1 || c(P, j) && P[j].test(se) || P["*"] && P["*"].test(se)) vt = true;
        else if (k && k[j]) {
          for (const te of k[j]) if (t(te) && te.name && te.name === se) {
            vt = true;
            let ne = "";
            if (te.multiple === true) {
              const ze = ae.split(" ");
              for (const je of ze) te.values.indexOf(je) !== -1 && (ne === "" ? ne = je : ne += " " + je);
            } else te.values.indexOf(ae) >= 0 && (ne = ae);
            ae = ne;
          }
        }
        if (vt) {
          if (v.allowedSchemesAppliedToAttributes.indexOf(se) !== -1 && ge(j, ae)) {
            delete q.attribs[se];
            return;
          }
          if (j === "script" && se === "src") {
            let te = true;
            try {
              const ne = le(ae);
              if (v.allowedScriptHostnames || v.allowedScriptDomains) {
                const ze = (v.allowedScriptHostnames || []).find(function(Ie) {
                  return Ie === ne.url.hostname;
                }), je = (v.allowedScriptDomains || []).find(function(Ie) {
                  return ne.url.hostname === Ie || ne.url.hostname.endsWith(`.${Ie}`);
                });
                te = ze || je;
              }
            } catch {
              te = false;
            }
            if (!te) {
              delete q.attribs[se];
              return;
            }
          }
          if (j === "iframe" && se === "src") {
            let te = true;
            try {
              const ne = le(ae);
              if (ne.isRelativeUrl) te = c(v, "allowIframeRelativeUrls") ? v.allowIframeRelativeUrls : !v.allowedIframeHostnames && !v.allowedIframeDomains;
              else if (v.allowedIframeHostnames || v.allowedIframeDomains) {
                const ze = (v.allowedIframeHostnames || []).find(function(Ie) {
                  return Ie === ne.url.hostname;
                }), je = (v.allowedIframeDomains || []).find(function(Ie) {
                  return ne.url.hostname === Ie || ne.url.hostname.endsWith(`.${Ie}`);
                });
                te = ze || je;
              }
            } catch {
              te = false;
            }
            if (!te) {
              delete q.attribs[se];
              return;
            }
          }
          if (se === "srcset") try {
            let te = r(ae);
            if (te.forEach(function(ne) {
              ge("srcset", ne.url) && (ne.evil = true);
            }), te = u(te, function(ne) {
              return !ne.evil;
            }), te.length) ae = a(u(te, function(ne) {
              return !ne.evil;
            })), q.attribs[se] = ae;
            else {
              delete q.attribs[se];
              return;
            }
          } catch {
            delete q.attribs[se];
            return;
          }
          if (se === "class") {
            const te = L[j], ne = L["*"], ze = E[j], je = T[j], Ie = T["*"], bt = E["*"], it = [ze, bt].concat(je, Ie).filter(function(Ba) {
              return Ba;
            });
            if (te && ne ? ae = gt(ae, n(te, ne), it) : ae = gt(ae, te || ne, it), !ae.length) {
              delete q.attribs[se];
              return;
            }
          }
          if (se === "style") {
            if (v.parseStyleAttributes) try {
              const te = i(j + " {" + ae + "}", { map: false }), ne = Te(te, v.allowedStyles);
              if (ae = _e(ne), ae.length === 0) {
                delete q.attribs[se];
                return;
              }
            } catch {
              typeof window < "u" && console.warn('Failed to parse "' + j + " {" + ae + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete q.attribs[se];
              return;
            }
            else if (v.allowedStyles) throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          w += " " + se, ae && ae.length ? w += '="' + re(ae, true) + '"' : v.allowedEmptyAttributes.includes(se) && (w += '=""');
        } else delete q.attribs[se];
      }), v.selfClosing.indexOf(j) !== -1 ? w += " />" : (w += ">", q.innerText && !oe && !v.textFilter && (w += re(q.innerText), I = true)), Q && (w = y + re(w), y = ""), q.openingTagLength = w.length - q.tagPosition;
    }, ontext: function(j) {
      if (F) return;
      const G = U[U.length - 1];
      let q;
      if (G && (q = G.tag, j = G.innerText !== void 0 ? G.innerText : j), v.disallowedTagsMode === "completelyDiscard" && !S(q)) j = "";
      else if ((v.disallowedTagsMode === "discard" || v.disallowedTagsMode === "completelyDiscard") && (q === "script" || q === "style")) w += j;
      else if (!I) {
        const Q = re(j, false);
        v.textFilter ? w += v.textFilter(Q, q) : w += Q;
      }
      if (U.length) {
        const Q = U[U.length - 1];
        Q.text += j;
      }
    }, onclosetag: function(j, G) {
      if (F) if (B--, !B) F = false;
      else return;
      const q = U.pop();
      if (!q) return;
      if (q.tag !== j) {
        U.push(q);
        return;
      }
      F = v.enforceHtmlBoundary ? j === "html" : false, O--;
      const Q = N[O];
      if (Q) {
        if (delete N[O], v.disallowedTagsMode === "discard" || v.disallowedTagsMode === "completelyDiscard") {
          q.updateParentNodeText();
          return;
        }
        y = w, w = "";
      }
      if ($[O] && (j = $[O], delete $[O]), v.exclusiveFilter) {
        const oe = v.exclusiveFilter(q);
        if (oe === "excludeTag") {
          Q && (w = y, y = ""), w = w.substring(0, q.tagPosition) + w.substring(q.tagPosition + q.openingTagLength);
          return;
        } else if (oe) {
          w = w.substring(0, q.tagPosition);
          return;
        }
      }
      if (q.updateParentNodeMediaChildren(), q.updateParentNodeText(), v.selfClosing.indexOf(j) !== -1 || G && !S(j) && ["escape", "recursiveEscape"].indexOf(v.disallowedTagsMode) >= 0) {
        Q && (w = y, y = "");
        return;
      }
      w += "</" + j + ">", Q && (w = y + re(w), y = ""), I = false;
    } }, v.parser);
    return X.write(g), X.end(), w;
    function W() {
      w = "", O = 0, U = [], N = {}, $ = {}, F = false, B = 0;
    }
    function re(j, G) {
      return typeof j != "string" && (j = j + ""), v.parser.decodeEntities && (j = j.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), G && (j = j.replace(/"/g, "&quot;"))), j = j.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), G && (j = j.replace(/"/g, "&quot;")), j;
    }
    function ge(j, G) {
      for (G = G.replace(/[\x00-\x20]+/g, ""); ; ) {
        const oe = G.indexOf("<!--");
        if (oe === -1) break;
        const be = G.indexOf("-->", oe + 4);
        if (be === -1) break;
        G = G.substring(0, oe) + G.substring(be + 3);
      }
      const q = G.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
      if (!q) return G.match(/^[/\\]{2}/) ? !v.allowProtocolRelative : false;
      const Q = q[1].toLowerCase();
      return c(v.allowedSchemesByTag, j) ? v.allowedSchemesByTag[j].indexOf(Q) === -1 : !v.allowedSchemes || v.allowedSchemes.indexOf(Q) === -1;
    }
    function le(j) {
      if (j = j.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), j.startsWith("relative:")) throw new Error("relative: exploit attempt");
      let G = "relative://relative-site";
      for (let oe = 0; oe < 100; oe++) G += `/${oe}`;
      const q = new URL(j, G);
      return { isRelativeUrl: q && q.hostname === "relative-site" && q.protocol === "relative:", url: q };
    }
    function Te(j, G) {
      if (!G) return j;
      const q = j.nodes[0];
      let Q;
      return G[q.selector] && G["*"] ? Q = n(G[q.selector], G["*"]) : Q = G[q.selector] || G["*"], Q && (j.nodes[0].nodes = q.nodes.reduce(Pt(Q), [])), j;
    }
    function _e(j) {
      return j.nodes[0].nodes.reduce(function(G, q) {
        return G.push(`${q.prop}:${q.value}${q.important ? " !important" : ""}`), G;
      }, []).join(";");
    }
    function Pt(j) {
      return function(G, q) {
        return c(j, q.prop) && j[q.prop].some(function(oe) {
          return oe.test(q.value);
        }) && G.push(q), G;
      };
    }
    function gt(j, G, q) {
      return G ? (j = j.split(/\s+/), j.filter(function(Q) {
        return G.indexOf(Q) !== -1 || q.some(function(oe) {
          return oe.test(Q);
        });
      }).join(" ")) : j;
    }
  }
  const h = { decodeEntities: true };
  return m.defaults = { allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "menu", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"], nonBooleanAttributes: ["abbr", "accept", "accept-charset", "accesskey", "action", "allow", "alt", "as", "autocapitalize", "autocomplete", "blocking", "charset", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", "coords", "crossorigin", "data", "datetime", "decoding", "dir", "dirname", "download", "draggable", "enctype", "enterkeyhint", "fetchpriority", "for", "form", "formaction", "formenctype", "formmethod", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "id", "imagesizes", "imagesrcset", "inputmode", "integrity", "is", "itemid", "itemprop", "itemref", "itemtype", "kind", "label", "lang", "list", "loading", "low", "max", "maxlength", "media", "method", "min", "minlength", "name", "nonce", "optimum", "pattern", "ping", "placeholder", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "referrerpolicy", "rel", "rows", "rowspan", "sandbox", "scope", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap", "onauxclick", "onafterprint", "onbeforematch", "onbeforeprint", "onbeforeunload", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpageshow", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onreset", "onresize", "onrejectionhandled", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"], disallowedTagsMode: "discard", allowedAttributes: { a: ["href", "name", "target"], img: ["src", "srcset", "alt", "title", "width", "height", "loading"] }, allowedEmptyAttributes: ["alt"], selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"], allowedSchemes: ["http", "https", "ftp", "mailto", "tel"], allowedSchemesByTag: {}, allowedSchemesAppliedToAttributes: ["href", "src", "cite"], allowProtocolRelative: true, enforceHtmlBoundary: false, parseStyleAttributes: true }, m.simpleTransform = function(g, v, x) {
    return x = x === void 0 ? true : x, v = v || {}, function(w, y) {
      let b;
      if (x) for (b in v) y[b] = v[b];
      else y = v;
      return { tagName: g, attribs: y };
    };
  }, fi;
}
var Wf = Gf();
const Jf = As(Wf), Xf = { key: 0, class: "multiplayer" }, Zf = { class: "container" }, Kf = { class: "tabs" }, Yf = { key: 0, class: "notifications" }, Qf = { class: "panel" }, ep = ["title"], tp = ["innerHTML"], np = { key: 1, class: "text" }, ip = { class: "message-input" }, rp = { class: "panel" }, sp = { class: "lobby" }, ap = { class: "player" }, op = { class: "name" }, up = ["onDblclick", "title"], lp = ["onClick", "title"], cp = { __name: "BubbleMultiplayer", setup(f) {
  xe({ useScope: "global" });
  var e = V("chat"), t = V(false), n = V(false), r = V(0), i = V(""), o = V([]), l = V(), d = V([]), c = app.storage.getSettings(), u;
  function p() {
    app.network.on("peer_open", s), app.network.on("peer_close", m), app.network.on("peer_disconnected", h), app.network.on("connection_start", g), app.network.on("connection_open", v), app.network.on("connection_close", x), app.network.on("connection_data", w), window.addEventListener("levelStart", y), window.addEventListener("levelFinish", b);
  }
  function a() {
    app.network.off("peer_open", s), app.network.off("peer_close", m), app.network.off("peer_disconnected", h), app.network.off("connection_start", g), app.network.off("connection_open", v), app.network.off("connection_close", x), app.network.off("connection_data", w), window.removeEventListener("levelStart", y), window.removeEventListener("levelFinish", b);
  }
  function s($) {
    t.value = true, P() && C({ name: "Server", text: "Server is ready! \u{1F60A}", time: N(), color: "#4ca9ff" });
  }
  function m($) {
    t.value = false, P() && C({ name: "Server", text: "Server closed! \u{1F614}", time: N(), color: "#ff674c" });
  }
  function h($) {
    C({ name: "Server", text: "Weak connection... \u{1F6DC}", time: N(), color: "#4ca9ff" });
  }
  function g($) {
    P() || (C({ name: "Server", text: "Searching... \u{1F50D}", time: N(), color: "#4ca9ff" }), u = setTimeout(function() {
      C({ name: "Error", text: "Host not found. Your connection may be blocked on this network. \u{1F614}", time: N(), color: "#ff674c" });
    }, 5e3));
  }
  function v($) {
    if (clearTimeout(u), P()) {
      var F = { type: "message", name: "Server", text: $.connection.metadata.name + " has connected! \u{1F44B}", time: N(), color: "#4ca9ff" };
      S(F);
    }
  }
  function x($) {
    var F = { type: "message", name: "Server", text: $.connection.metadata.name + " has disconnected! \u{1F44B}", time: N(), color: "#4ca9ff" };
    P() ? S(F) : (F.name = "Server", F.text = "The host has disconnected! \u{1F614}", F.color = "#4ca9ff", C(F)), d.value = app.multiplayer.players.children.slice(0);
  }
  function w($) {
    $.data.type == "message" ? (C($.data), P() && ($.data.name = $.connection.metadata.name, app.network.connections.forEach(function(F) {
      F.send($.data);
    }))) : $.data.type == "players" && d.value.length != app.multiplayer.players.children.length && (d.value = app.multiplayer.players.children.slice(0));
  }
  function y($) {
    var F = app.storage.getSettings(), B = $.detail.title, I = $.detail.description, X = { type: "message", name: F.name, text: 'Is now playing <a href="' + B + '">' + I + "</a> \u25B6\uFE0F", time: N(), color: "#4cff64", raw: true };
    app.network.isOnline() && S(X);
  }
  function b($) {
    var F = $.detail.time, B = $.detail.level, I = app.level.getDescriptionByTitle(B), X = app.storage.getSettings(), W = { type: "message", name: X.name, text: 'Finished <a href="' + B + '">' + I + "</a> in \u{1F552}<strong>" + F + "s</strong>", time: N(), color: "#4cff64", raw: true };
    app.network.isOnline() && S(W);
  }
  function S($) {
    var F = app.storage.getSettings();
    if ($ == null) {
      if (i.value.value == "") return;
      $ = { type: "message", name: F.name + (P() ? " [host]" : ""), text: i.value.value, time: N(), color: "#ffcc4d", raw: true }, i.value.value = "";
    }
    P() ? C($) : app.network.connections.size == 0 && ($.name = "Error", $.text = "Host not found! \u{1F614}", $.color = "#ff674c", C($)), app.network.connections.forEach(function(B) {
      B.send($);
    });
  }
  function C($) {
    var F = Jf($.text, { allowedTags: ["a", "em", "h1", "h2", "h3", "h4", "h5", "h6", "img"], allowedAttributes: { a: ["href"], img: ["src", "width", "height"] } });
    $.text = F, o.value.push($), (e.value != "chat" || E()) && r.value++, k();
  }
  async function k($ = false) {
    if (l.value) {
      var F = l.value, B = F.scrollTop + 1 > F.scrollHeight - F.clientHeight;
      await Ls(), (B || $ == true) && (F.scrollTop = F.scrollHeight + 1);
    }
  }
  function P() {
    return app.multiplayer.isHost();
  }
  function L() {
    return t.value;
  }
  function E() {
    return n.value;
  }
  function T($) {
    app.multiplayer.closeConnectionByUUID($.uuid);
  }
  async function M($, F, B) {
    var I = await app.playLevel($);
    I ? (window.dispatchEvent(new CustomEvent("setPage", { detail: "campaign" })), c = app.storage.getSettings(), c.progress = app.level.getLevelIndex(title) + 1, app.updateSettings(c), typeof F == "function" && F()) : typeof B == "function" && B();
  }
  function R($) {
    M({ title: $.level }, () => {
      var F = app.multiplayer.getPlayer({ uuid: $.uuid });
      F && app.player.setPosition(F.position, false);
    }, () => {
      C({ name: "Server", text: $.text + " is currently picking a level... \u23F3", time: N(), color: "#4ca9ff" });
    });
  }
  async function O($) {
    $.preventDefault();
    var F = $.target;
    if (F.nodeName == "A") {
      var B = F.getAttribute("href");
      M({ title: B }, () => {
      }, () => {
        C({ name: "Server", text: B + " is not an official level... \u{1F614}", time: N(), color: "#4ca9ff" });
      });
    }
  }
  function U($) {
    $ == e.value ? n.value = !n.value : n.value = false, $ == "chat" && (r.value = 0), e.value = $;
  }
  function N() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  return de(function() {
    p();
  }), fe(function() {
    a();
  }), ($, F) => (D(), me(Tt, { name: "fade-multiplayer" }, { default: Et(() => [L() ? (D(), z("div", Xf, [_("div", Zf, [_("div", Kf, [_("div", { class: Y(["tab", { selected: A(e) == "chat" }]), onClick: F[0] || (F[0] = (B) => U("chat")), title: "Chat" }, [F[5] || (F[5] = _("span", { class: "material-symbols-rounded" }, "chat", -1)), A(r) > 0 ? (D(), z("span", Yf, H(A(r)), 1)) : J("", true)], 2), _("div", { class: Y(["tab", { selected: A(e) == "lobby" }]), onClick: F[1] || (F[1] = (B) => U("lobby")), title: "Lobby" }, F[6] || (F[6] = [_("span", { class: "material-symbols-rounded" }, "group", -1)]), 2)]), _("div", { class: Y(["content", { collapsed: E() }]) }, [We(_("div", Qf, [_("ul", { class: "messages", ref_key: "messageBox", ref: l, onClick: O }, [(D(true), z(ce, null, ke(A(o), (B) => (D(), z("li", { class: "message", title: B.name }, [_("span", { class: "name", style: cn({ color: B.color || "#ffffff" }) }, H(B.name), 5), F[7] || (F[7] = _("span", null, ": ", -1)), B.raw ? (D(), z("span", { key: 0, class: "text", innerHTML: B.text }, null, 8, tp)) : (D(), z("span", np, H(B.text), 1))], 8, ep))), 256))], 512), _("div", ip, [_("input", { type: "text", ref_key: "message", ref: i, placeholder: "Message", onKeydown: F[2] || (F[2] = wo((B) => {
    S(null);
  }, ["enter"])), onFocus: F[3] || (F[3] = (B) => {
    mi(n) ? n.value = false : n = false, mi(r) ? r.value = 0 : r = 0;
  }), maxlength: "128" }, null, 544), _("button", { onClick: F[4] || (F[4] = (B) => S(null)) }, F[8] || (F[8] = [_("span", { class: "material-symbols-rounded" }, "send", -1)]))])], 512), [[Ye, A(e) == "chat"]]), We(_("div", rp, [_("ul", sp, [(D(true), z(ce, null, ke(A(d), (B) => (D(), z("li", ap, [_("span", op, H(B.text), 1), P() ? (D(), z("span", { key: 0, class: "action material-symbols-rounded", onDblclick: (I) => T(B), title: "Double-click to kick " + B.text }, "close", 40, up)) : J("", true), _("span", { class: "action material-symbols-rounded", onClick: (I) => R(B), title: "Teleport to " + B.text }, "play_arrow", 8, lp)]))), 256))])], 512), [[Ye, A(e) == "lobby"]])], 2)])])) : J("", true)]), _: 1 }));
} }, dp = { class: "tabs" }, fp = { __name: "BubbleSettingsTabs", props: ["tab"], setup(f) {
  const e = xe({ useScope: "global" });
  return (t, n) => (D(), z("div", dp, [_("div", { class: Y(["tab", { selected: f.tab == "audio" }]), onClick: n[0] || (n[0] = (r) => {
    t.$emit("changeTab", "audio");
  }) }, [_("label", null, H(A(e).t("settings.audio.title")), 1), n[6] || (n[6] = _("span", { class: "material-symbols-rounded" }, "volume_up", -1))], 2), _("div", { class: Y(["tab", { selected: f.tab == "graphics" }]), onClick: n[1] || (n[1] = (r) => {
    t.$emit("changeTab", "graphics");
  }) }, [_("label", null, H(A(e).t("settings.graphics.title")), 1), n[7] || (n[7] = _("span", { class: "material-symbols-rounded" }, "visibility", -1))], 2), _("div", { class: Y(["tab", { selected: f.tab == "multiplayer" }]), onClick: n[2] || (n[2] = (r) => {
    t.$emit("changeTab", "multiplayer");
  }) }, [_("label", null, H(A(e).t("settings.multiplayer.title")), 1), n[8] || (n[8] = _("span", { class: "material-symbols-rounded" }, "group", -1))], 2), _("div", { class: Y(["tab", { selected: f.tab == "language" }]), onClick: n[3] || (n[3] = (r) => {
    t.$emit("changeTab", "language");
  }) }, [_("label", null, H(A(e).t("settings.language.title")), 1), n[9] || (n[9] = _("span", { class: "material-symbols-rounded" }, "translate", -1))], 2), _("div", { class: Y(["tab", { selected: f.tab == "mods" }]), onClick: n[4] || (n[4] = (r) => {
    t.$emit("changeTab", "mods");
  }) }, [_("label", null, H(A(e).t("settings.mods.title")), 1), n[10] || (n[10] = _("span", { class: "material-symbols-rounded" }, "power", -1))], 2), _("div", { class: Y(["tab", { selected: f.tab == "data" }]), onClick: n[5] || (n[5] = (r) => {
    t.$emit("changeTab", "data");
  }) }, [_("label", null, H(A(e).t("settings.data.title")), 1), n[11] || (n[11] = _("span", { class: "material-symbols-rounded" }, "save", -1))], 2)]));
} }, pp = { class: "panel" }, hp = { class: "group" }, mp = { class: "option" }, gp = { for: "quality" }, vp = { class: "option" }, bp = ["value"], yp = { for: "quality" }, xp = { class: "group" }, wp = { class: "option" }, Sp = { for: "buffer" }, Cp = { class: "option" }, kp = ["value"], _p = { for: "buffer" }, Ep = { class: "group" }, Tp = { class: "option" }, Pp = { for: "motion" }, Lp = { class: "option" }, Mp = ["checked"], Op = { for: "motion" }, Ap = { class: "group" }, Rp = { class: "option" }, Dp = { class: "option" }, Ip = ["checked"], Bp = { for: "theme" }, zp = { class: "option" }, $p = ["checked"], Np = { for: "stats" }, jp = { class: "option" }, Fp = ["checked"], Up = { for: "debug" }, qp = { __name: "BubbleSettingsPanelGraphics", props: ["settings"], setup(f) {
  const e = xe({ useScope: "global" });
  var t = f;
  function n() {
    window.dispatchEvent(new CustomEvent("setTheme"));
  }
  function r() {
    app.level.showHelpers(t.settings.debug);
  }
  return (i, o) => (D(), z("div", pp, [_("p", null, H(A(e).t("settings.graphics.title")), 1), _("div", hp, [_("div", mp, [_("label", gp, H(A(e).t("settings.graphics.quality")), 1)]), _("div", vp, [_("input", { type: "range", id: "quality", min: "1", max: "10", step: "1", value: f.settings.quality, onChange: o[0] || (o[0] = (l) => i.$emit("updateSettings", l)) }, null, 40, bp), _("label", yp, H(f.settings.quality * 10) + "%", 1)])]), _("div", xp, [_("div", wp, [_("label", Sp, H(A(e).t("settings.graphics.buffer")), 1)]), _("div", Cp, [_("input", { type: "range", id: "buffer", min: "0", max: "100", step: "10", value: f.settings.buffer, onChange: o[1] || (o[1] = (l) => i.$emit("updateSettings", l)) }, null, 40, kp), _("label", _p, H(f.settings.buffer) + "ms", 1)])]), _("div", Ep, [_("div", Tp, [_("label", Pp, H(A(e).t("settings.graphics.camera")), 1)]), _("div", Lp, [_("input", { type: "checkbox", id: "motion", checked: f.settings.motion == true, onChange: o[2] || (o[2] = (l) => i.$emit("updateSettings", l)) }, null, 40, Mp), _("label", Op, H(A(e).t("settings.graphics.auto_rotate")), 1)])]), _("div", Ap, [_("div", Rp, [_("label", null, H(A(e).t("settings.graphics.developer_tools")), 1)]), _("div", Dp, [_("input", { type: "checkbox", id: "theme", checked: f.settings.theme == "origin", onChange: o[3] || (o[3] = (l) => i.$emit("updateSettings", l, { true: "origin", false: "bubble" }, n)) }, null, 40, Ip), _("label", Bp, H(A(e).t("settings.graphics.old_ui")), 1)]), _("div", zp, [_("input", { type: "checkbox", id: "stats", checked: f.settings.stats == true, onChange: o[4] || (o[4] = (l) => i.$emit("updateSettings", l)) }, null, 40, $p), _("label", Np, H(A(e).t("settings.graphics.show_fps")), 1)]), _("div", jp, [_("input", { type: "checkbox", id: "debug", checked: f.settings.debug == true, onChange: o[5] || (o[5] = (l) => i.$emit("updateSettings", l, null, r)) }, null, 40, Fp), _("label", Up, H(A(e).t("settings.graphics.debug_mode")), 1)])])]));
} }, Hp = { class: "panel" }, Vp = { class: "group gap" }, Gp = { class: "option wrap" }, Wp = { for: "name" }, Jp = ["value"], Xp = { class: "option gap" }, Zp = { key: 0, class: "option wrap" }, Kp = { for: "connection" }, Yp = { class: "flex gap" }, Qp = ["value"], e0 = { key: 0, class: "option flex-basis-50" }, t0 = ["checked"], n0 = { for: "join-multiplayer" }, i0 = { key: 1, class: "option wrap" }, r0 = { for: "peer" }, s0 = { class: "flex gap" }, a0 = ["value"], o0 = { key: 0, class: "option flex-basis-50" }, u0 = ["checked"], l0 = { for: "host-multiplayer" }, c0 = { __name: "BubbleSettingsPanelMultiplayer", props: ["settings"], setup(f) {
  const e = xe({ useScope: "global" }), t = f, n = V("");
  function r(u) {
    if (app.network.off("peer_open", r), app.network.off("peer_error", i), app.multiplayer.setHost(null), u.target.checked == false) {
      app.network.destroy();
      return;
    }
    o() ? app.network.connect(t.settings.connection, { metadata: { name: t.settings.name, uuid: app.player.uuid, time: app.multiplayer.getTime() } }) : (app.network.on("peer_open", r), app.network.on("peer_error", i), app.network.open(t.settings.peer));
  }
  function i(u) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: u.error.message, inputs: [{ type: "button", value: "popup.button.continue", callback: function() {
      window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } }));
  }
  function o() {
    return app.network.isOnline();
  }
  function l() {
    return app.multiplayer.isHost();
  }
  function d() {
    l() ? (app.network.off("peer_error", i), app.network.destroy(), app.multiplayer.setHost(null)) : (app.network.on("peer_error", i), app.network.open(t.settings.peer), app.multiplayer.setHost(t.settings.peer));
  }
  function c(u) {
    var p = u.target, a = p.value;
    p.value = "Copied!", p.disabled = true, navigator.clipboard.writeText(a), setTimeout(function() {
      p.value = a, p.disabled = false;
    }, 1e3);
  }
  return (u, p) => (D(), z("div", Hp, [_("p", null, H(A(e).t("settings.multiplayer.title")), 1), _("div", Vp, [_("div", Gp, [_("label", Wp, H(A(e).t("settings.multiplayer.your_name")), 1), _("input", { type: "text", id: "name", autocomplete: "off", value: f.settings.name, onChange: p[0] || (p[0] = (a) => u.$emit("updateSettings", a)) }, null, 40, Jp)]), _("div", Xp, [_("button", { class: Y([{ selected: n.value == "guest" }, "center flex-basis-50"]), onClick: p[1] || (p[1] = (a) => n.value = "guest") }, [p[7] || (p[7] = _("span", { class: "material-symbols-rounded" }, "login", -1)), he(" " + H(A(e).t("settings.multiplayer.join")), 1)], 2), _("button", { class: Y([{ selected: n.value == "host" }, "center flex-basis-50"]), onClick: p[2] || (p[2] = (a) => n.value = "host") }, [p[8] || (p[8] = _("span", { class: "material-symbols-rounded" }, "home", -1)), he(" " + H(A(e).t("settings.multiplayer.host")), 1)], 2)]), n.value != "" ? (D(), z(ce, { key: 0 }, [n.value == "guest" ? (D(), z("div", Zp, [_("label", Kp, H(A(e).t("settings.multiplayer.paste_friend_code")), 1), _("div", Yp, [_("input", { type: "text", id: "connection", autocomplete: "off", maxlength: "6", class: "flex-basis-50", value: f.settings.connection, placeholder: "ex: DC265A", onChange: p[3] || (p[3] = (a) => u.$emit("updateSettings", a)) }, null, 40, Qp), n.value == "guest" ? (D(), z("div", e0, [_("input", { type: "checkbox", id: "join-multiplayer", checked: o() && l() == false, onChange: p[4] || (p[4] = (a) => r(a)) }, null, 40, t0), _("label", n0, H(A(e).t("settings.multiplayer.join")), 1)])) : J("", true)])])) : J("", true), n.value == "host" ? (D(), z("div", i0, [_("label", r0, H(A(e).t("settings.multiplayer.share_friend_code")), 1), _("div", s0, [_("input", { type: "text", id: "peer", autocomplete: "off", maxlength: "6", class: Y(["flex-basis-50", { hex: f.settings.peer.length <= 6 }]), readonly: "", value: f.settings.peer, onClick: p[5] || (p[5] = (a) => c(a)) }, null, 10, a0), n.value == "host" ? (D(), z("div", o0, [_("input", { type: "checkbox", id: "host-multiplayer", checked: l(), onChange: p[6] || (p[6] = (a) => d()) }, null, 40, u0), _("label", l0, H(A(e).t("settings.multiplayer.host")), 1)])) : J("", true)])])) : J("", true)], 64)) : J("", true)])]));
} }, d0 = $t(c0, [["__scopeId", "data-v-b2a17d79"]]), f0 = { class: "panel" }, p0 = { class: "group" }, h0 = { class: "option wrap" }, m0 = { class: "flex gap align-items-center" }, g0 = { href: "https://steamcommunity.com/workshop/browse/?appid=3208440&requiredtags%5B%5D=Mod", target: "_blank" }, v0 = { key: 0, class: "group" }, b0 = { class: "option" }, y0 = { key: 1, class: "group" }, x0 = { class: "option wrap" }, w0 = { for: "mods" }, S0 = ["value"], C0 = { key: 2, class: "group" }, k0 = { class: "option" }, _0 = { key: 3, class: "group" }, E0 = { class: "option" }, T0 = { key: 4, class: "group" }, P0 = { class: "option" }, L0 = { __name: "BubbleSettingsPanelMods", props: ["settings"], setup(f) {
  const e = xe({ useScope: "global" }), t = V(window.electron != null), n = V(false);
  function r() {
    var o = localStorage.getItem("mods");
    return (o == null || o == "") && (o = "app.loop.speed = 2;"), o;
  }
  function i(o) {
    var l = o.target.value;
    localStorage.setItem("mods", l);
  }
  return (o, l) => (D(), z("div", f0, [_("p", { onClick: l[0] || (l[0] = (d) => n.value = true) }, H(A(e).t("settings.mods.title")), 1), _("div", p0, [_("div", h0, [_("label", m0, [l[1] || (l[1] = _("span", { class: "material-symbols-rounded" }, "link", -1)), l[2] || (l[2] = he()), _("a", g0, H(A(e).t("popup.text.browse")) + " " + H(A(e).t("home.button.steam")) + " " + H(A(e).t("home.button.workshop")), 1)])])]), t.value && A(dn).length > 0 ? (D(), z("div", v0, [_("div", b0, [_("ul", null, [(D(true), z(ce, null, ke(A(dn), (d) => (D(), z("li", null, H(d.title), 1))), 256))])])])) : J("", true), n.value ? (D(), z("div", y0, [_("div", x0, [_("label", w0, [l[3] || (l[3] = _("span", { class: "material-symbols-rounded" }, "assignment", -1)), he(" " + H(A(e).t("settings.mods.clipboard")), 1)]), _("textarea", { value: r(), id: "mods", onChange: i, spellcheck: "false" }, null, 40, S0)])])) : J("", true), n.value ? (D(), z("div", C0, [_("div", k0, [_("label", null, [l[4] || (l[4] = _("span", { class: "material-symbols-rounded" }, "security", -1)), he(" " + H(A(e).t("settings.mods.security")) + " ", 1), l[5] || (l[5] = _("br", null, null, -1)), l[6] || (l[6] = _("br", null, null, -1)), he(" " + H(A(e).t("settings.mods.trusted_mods")) + ": ", 1), l[7] || (l[7] = _("a", { href: "https://github.com/Charlieee1/Boxel-3d-Mods/", target: "_blank" }, "github.com/Charlieee1", -1))])])])) : J("", true), n.value ? (D(), z("div", _0, [_("div", E0, [_("label", null, [l[8] || (l[8] = _("span", { class: "material-symbols-rounded" }, "arrow_selector_tool", -1)), he(" " + H(A(e).t("settings.mods.inspect_instructions")), 1)])])])) : J("", true), n.value ? (D(), z("div", T0, [_("div", P0, [_("label", null, [l[9] || (l[9] = _("span", { class: "material-symbols-rounded" }, "slideshow", -1)), he(" " + H(A(e).t("settings.mods.paste_instructions")), 1)])])])) : J("", true)]));
} }, M0 = { class: "panel" }, O0 = { class: "group" }, A0 = { class: "option" }, R0 = { for: "music" }, D0 = { class: "option" }, I0 = ["value"], B0 = ["value", "selected"], z0 = { class: "group" }, $0 = { class: "option" }, N0 = { for: "volume" }, j0 = { class: "option" }, F0 = ["value"], U0 = { for: "volume" }, q0 = { class: "option" }, H0 = { for: "volumeMusic" }, V0 = { class: "option" }, G0 = ["value"], W0 = { for: "volumeMusic" }, J0 = { class: "option" }, X0 = { for: "volumeEffects" }, Z0 = { class: "option" }, K0 = ["value"], Y0 = { for: "volumeEffects" }, Q0 = { __name: "BubbleSettingsPanelAudio", props: ["settings"], emits: ["updateSettings"], setup(f, { emit: e }) {
  const t = xe({ useScope: "global" }), n = e;
  var r = Object.keys(Qt).filter((o) => Qt[o].userData.type == "music").map((o) => ({ text: Qt[o].userData.name, value: o }));
  function i(o) {
    r.forEach((l) => {
      app.assets.audio.cache[l.value].stop();
    }), app.assets.audio.cache[o.target.value].play(), n("updateSettings", o);
  }
  return (o, l) => (D(), z("div", M0, [_("p", null, H(A(t).t("settings.audio.title")), 1), _("div", O0, [_("div", A0, [_("label", R0, H(A(t).t("settings.audio.music")), 1)]), _("div", D0, [_("select", { id: "music", value: f.settings.music, onChange: l[0] || (l[0] = (d) => i(d)) }, [(D(true), z(ce, null, ke(A(r), (d, c) => (D(), z("option", { value: d.value, key: d.value, selected: f.settings.music == d.value }, H(d.text), 9, B0))), 128))], 40, I0)])]), _("div", z0, [_("div", $0, [_("label", N0, H(A(t).t("settings.audio.volume_main")), 1)]), _("div", j0, [_("input", { type: "range", id: "volume", min: "0", max: "1", step: "0.1", value: f.settings.volume, onChange: l[1] || (l[1] = (d) => o.$emit("updateSettings", d)) }, null, 40, F0), _("label", U0, H(f.settings.volume * 100) + "%", 1)]), _("div", q0, [_("label", H0, H(A(t).t("settings.audio.volume_music")), 1)]), _("div", V0, [_("input", { type: "range", id: "volumeMusic", min: "0", max: "1", step: "0.1", value: f.settings.volumeMusic, onChange: l[2] || (l[2] = (d) => o.$emit("updateSettings", d)) }, null, 40, G0), _("label", W0, H(f.settings.volumeMusic * 100) + "%", 1)]), _("div", J0, [_("label", X0, H(A(t).t("settings.audio.volume_effects")), 1)]), _("div", Z0, [_("input", { type: "range", id: "volumeEffects", min: "0", max: "1", step: "0.1", value: f.settings.volumeEffects, onChange: l[3] || (l[3] = (d) => o.$emit("updateSettings", d)) }, null, 40, K0), _("label", Y0, H(f.settings.volumeEffects * 100) + "%", 1)])])]));
} }, eh = { class: "panel" }, th = { class: "group" }, nh = { class: "option" }, ih = { class: "option gap" }, rh = { class: "group" }, sh = { class: "option" }, ah = { class: "option gap" }, oh = { __name: "BubbleSettingsPanelData", props: ["settings"], setup(f) {
  const e = xe({ useScope: "global" });
  function t() {
    return window.chrome?.storage != null;
  }
  function n() {
    app.storage.backupToFile();
  }
  function r() {
    app.storage.backupToChrome();
  }
  function i() {
    app.storage.restoreFromFile();
  }
  function o() {
    app.storage.restoreFromChrome();
  }
  return (l, d) => (D(), z("div", eh, [_("p", null, H(A(e).t("settings.data.title")), 1), _("div", th, [_("div", nh, [_("label", null, H(A(e).t("settings.data.backup_to")), 1)]), _("div", ih, [_("button", { onClick: n }, [d[0] || (d[0] = _("span", { class: "material-symbols-rounded" }, "folder", -1)), he(" " + H(A(e).t("settings.data.file")), 1)]), t() ? (D(), z("button", { key: 0, onClick: r }, [d[1] || (d[1] = _("span", { class: "material-symbols-rounded" }, "cloud_done", -1)), he(" " + H(A(e).t("settings.data.google")), 1)])) : J("", true)])]), _("div", rh, [_("div", sh, [_("label", null, H(A(e).t("settings.data.restore_from")), 1)]), _("div", ah, [_("button", { onClick: i }, [d[2] || (d[2] = _("span", { class: "material-symbols-rounded" }, "folder", -1)), he(" " + H(A(e).t("settings.data.file")), 1)]), t() ? (D(), z("button", { key: 0, onClick: o }, [d[3] || (d[3] = _("span", { class: "material-symbols-rounded" }, "cloud_done", -1)), he(" " + H(A(e).t("settings.data.google")), 1)])) : J("", true)])])]));
} }, uh = { class: "panel" }, lh = { class: "group" }, ch = { class: "option" }, dh = { class: "option" }, fh = ["value"], ph = ["value", "selected"], hh = { class: "group" }, mh = { class: "option" }, gh = { __name: "BubbleSettingsPanelLanguage", props: ["settings"], emits: ["updateSettings"], setup(f, { emit: e }) {
  const t = xe({ useScope: "global" }), n = e;
  var r = ut(() => {
    const o = t.availableLocales.map((d) => [d, t.t(`locales.${d}`)]);
    return Object.fromEntries(o);
  });
  function i(o) {
    t.locale.value = o.target.value, n("updateSettings", o);
  }
  return (o, l) => (D(), z("div", uh, [_("p", null, H(A(t).t("settings.language.title")), 1), _("div", lh, [_("div", ch, [_("label", null, H(A(t).t("settings.language.select_language")), 1)]), _("div", dh, [_("select", { id: "language", value: f.settings.language, onChange: l[0] || (l[0] = (d) => i(d)) }, [(D(true), z(ce, null, ke(A(r), (d, c) => (D(), z("option", { value: c, key: c, selected: f.settings.language == c }, H(d), 9, ph))), 128))], 40, fh)])]), _("div", hh, [_("div", mh, [_("label", null, H(A(t).t("settings.language.credit")), 1)]), l[1] || (l[1] = _("div", { class: "option" }, [_("ul", null, [_("li", null, "outerbound (Spanish)"), _("li", null, "Zeta (Persian/Farsi)"), _("li", null, "SangSang2 (Korean)")])], -1))])]));
} }, vh = { class: "popup settings" }, bh = { class: "container" }, yh = { class: "content compact" }, xh = ["title"], wh = { __name: "BubbleSettings", setup(f) {
  const e = xe({ useScope: "global" });
  var t = V("audio"), n = V([]), r = V(false), i = V({});
  function o() {
    window.addEventListener("openSettings", d), window.addEventListener("closeSettings", c), window.addEventListener("keydown", s);
  }
  function l() {
    window.removeEventListener("openSettings", d), window.removeEventListener("closeSettings", c), window.removeEventListener("keydown", s);
  }
  function d(h) {
    r.value = true, i.value = app.storage.getSettings(), h.detail && (t.value = h.detail), window.dispatchEvent(new CustomEvent("beforeSettingsOpened")), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("settingsOpened"));
    }, 100);
  }
  function c() {
    r.value = false, window.dispatchEvent(new CustomEvent("beforeSettingsClosed")), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("settingsClosed"));
    }, 100);
  }
  function u(h) {
    t.value = h;
  }
  function p(h, g) {
    h == null && (h = c), h(g);
  }
  function a(h) {
    var g = n.value[n.value.length - 1];
    g ? p(g.callback, h) : c();
  }
  function s(h) {
    if (r.value == true && h.target.tagName != "INPUT" && h.target.tagName != "TEXTAREA") {
      var g = ["Escape", "KeyE"];
      g.indexOf(h.code) > -1 && (h.preventDefault(), a(h));
    }
  }
  function m(h, g, v = function() {
  }) {
    var x = h.target, w = x.id, y = x.value, b = h.target.type;
    b == "range" && (y = parseFloat(y)), b == "checkbox" && (y = x.checked), g && (y = g[y]), i.value[w] = y, app.updateSettings(i.value), v();
  }
  return de(function() {
    o();
  }), fe(function() {
    l();
  }), (h, g) => (D(), me(Tt, { name: "fade-settings" }, { default: Et(() => [We(_("div", vh, [_("div", { class: "background", onClick: a }), _("div", bh, [ie(fp, { tab: A(t), onChangeTab: u }, null, 8, ["tab"]), _("div", yh, [We(ie(Q0, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "audio"]]), We(ie(qp, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "graphics"]]), We(ie(d0, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "multiplayer"]]), We(ie(L0, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "mods"]]), We(ie(oh, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "data"]]), We(ie(gh, { settings: A(i), onUpdateSettings: m }, null, 8, ["settings"]), [[Ye, A(t) == "language"]]), _("a", { class: "close", onClick: a, title: A(e).t("popup.button.close") }, g[0] || (g[0] = [_("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, xh)])])], 512), [[Ye, A(r) == true]])]), _: 1 }));
} }, Sh = { key: 0, class: "popup" }, Ch = { class: "container" }, kh = { class: "content" }, _h = ["innerHTML"], Eh = ["innerHTML"], Th = ["innerHTML"], Ph = { class: "inputs" }, Lh = ["for"], Mh = ["id"], Oh = ["id", "type", "value", "min", "max", "step", "accept"], Ah = ["title"], Rh = { __name: "BubblePopup", setup(f) {
  const e = xe({ useScope: "global" });
  var t = V(""), n = V(""), r = V(""), i = V([]), o = V(false);
  function l() {
    window.addEventListener("openPopup", c), window.addEventListener("closePopup", u), window.addEventListener("keydown", m);
  }
  function d() {
    window.removeEventListener("openPopup", c), window.removeEventListener("closePopup", u), window.removeEventListener("keydown", m);
  }
  function c(h) {
    o.value = true, h.detail && (h.detail.text && (e.te(h.detail.title, e.fallbackLocale.value) ? t.value = e.t(h.detail.title) : t.value = h.detail.title, e.te(h.detail.text, e.fallbackLocale.value) ? n.value = e.t(h.detail.text) : n.value = h.detail.text, e.te(h.detail.description, e.fallbackLocale.value) ? r.value = e.t(h.detail.description) : r.value = h.detail.description), h.detail.inputs && (i.value = h.detail.inputs, i.value.forEach(function(g) {
      g.type == "file" || g.type == "range" || g.type == "text" ? g.event = "change" : g.event = "click", g.value && e.te(g.value, e.fallbackLocale.value) && (g.value = e.t(g.value));
    }))), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupOpened"));
    }, 100);
  }
  function u() {
    o.value = false, setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupClosed"));
    }, 100);
  }
  function p(h, g) {
    h == null && (h = u), h(g);
  }
  function a(h) {
    var g = i.value[0];
    g && p(g.callback, h);
  }
  function s(h) {
    var g = i.value[i.value.length - 1];
    g && p(g.callback, h);
  }
  function m(h) {
    if (o.value == true) {
      var g = ["Space", "Enter", "Escape"];
      g.indexOf(h.code) > -1 && (h.preventDefault(), s(h)), h.code == "KeyR" && (h.preventDefault(), a(h));
    }
  }
  return de(function() {
    l();
  }), fe(function() {
    d();
  }), (h, g) => (D(), me(Tt, { name: "fade-bubble-popup" }, { default: Et(() => [A(o) == true ? (D(), z("div", Sh, [_("div", { class: "background", onClick: s }), _("div", Ch, [_("div", kh, [A(t) ? (D(), z("h1", { key: 0, class: "title", innerHTML: A(t) }, null, 8, _h)) : J("", true), A(n) ? (D(), z("p", { key: 1, class: "text", innerHTML: A(n) }, null, 8, Eh)) : J("", true), A(r) ? (D(), z("p", { key: 2, class: "description", innerHTML: A(r) }, null, 8, Th)) : J("", true), _("div", Ph, [(D(true), z(ce, null, ke(A(i), (v, x) => (D(), z(ce, null, [v.label ? (D(), z("label", { key: 0, for: "popup-" + v.type + "-" + x }, H(v.label), 9, Lh)) : J("", true), v.type == "button" ? (D(), z("button", gi({ key: 1, class: { [v.class]: v.class, selected: x == A(i).length - 1 }, id: "popup-" + v.type + "-" + x, style: v.style }, { [vi(v.event)]: (w) => p(v.callback, w) }), H(v.value), 17, Mh)) : (D(), z("input", gi({ key: 2, class: v.class, id: "popup-" + v.type + "-" + x, type: v.type, value: v.value, min: v.min, max: v.max, step: v.step, accept: v.accept, style: v.style }, { [vi(v.event)]: (w) => p(v.callback, w) }), null, 16, Oh))], 64))), 256))]), _("a", { class: "close", onClick: s, title: A(e).t("popup.button.close") }, g[0] || (g[0] = [_("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, Ah)])])])) : J("", true)]), _: 1 }));
} }, Dh = { class: "ui-bubble" }, Ih = { __name: "Bubble", setup(f) {
  var e = V("home");
  function t() {
    window.addEventListener("setPage", r);
  }
  function n() {
    window.removeEventListener("setPage", r);
  }
  function r(o) {
    o.detail && i(o.detail);
  }
  function i(o) {
    e.value = o, app.state = o;
  }
  return de(function() {
    t();
  }), fe(function() {
    n();
  }), (o, l) => (D(), z("div", Dh, [A(e) == "home" ? (D(), me(ld, { key: 0, onSetPage: i })) : J("", true), A(e) == "skins" ? (D(), me(gd, { key: 1, onSetPage: i })) : J("", true), A(e) == "level-picker" ? (D(), me(ef, { key: 2, onSetPage: i })) : J("", true), A(e) == "campaign" ? (D(), me(yf, { key: 3, onSetPage: i })) : J("", true), ie(cp), ie(wh), ie(Rh)]));
} }, Bh = { key: 0, class: "loading" }, zh = { class: "bar" }, $h = { __name: "Loading", setup(f) {
  var e = V({ urls: "", index: 0, max: 1, percent: 0 });
  function t(r) {
    e.value = r;
  }
  function n() {
    return e.value.percent == 100;
  }
  return window.addEventListener("updateLoading", function(r) {
    t(r.detail);
  }), (r, i) => (D(), me(Tt, { name: "fade-loading" }, { default: Et(() => [n() == false ? (D(), z("div", Bh, [_("div", zh, [_("div", { class: "boxel", style: cn({ left: `calc(${A(e).percent}% - 1em)` }) }, null, 4), _("div", { class: "progress", style: cn({ width: A(e).percent + "%" }) }, null, 4)]), _("label", null, "Loading: " + H(A(e).percent) + "%", 1)])) : J("", true)]), _: 1 }));
} }, Nh = { __name: "UI", setup(f) {
  var e = V("bubble"), t = ["origin", "bubble"];
  function n() {
    window.addEventListener("setTheme", i);
  }
  function r() {
    window.removeEventListener("setTheme", i);
  }
  function i(l) {
    if (l && l.detail) o(l.detail);
    else {
      var d = JSON.parse(localStorage.getItem("settings"));
      d && d.theme != null && (t.includes(d.theme) ? o(d.theme) : (d.theme = e.value, localStorage.setItem("settings", JSON.stringify(d))));
    }
  }
  function o(l) {
    e.value = l;
  }
  return de(function() {
    i(), n();
  }), fe(function() {
    r();
  }), (l, d) => (D(), z(ce, null, [A(e) == "origin" ? (D(), me(Uc, { key: 0 })) : J("", true), A(e) == "bubble" ? (D(), me(Ih, { key: 1 })) : J("", true), ie($h)], 64));
} }, jh = { __name: "App", setup(f) {
  const e = xe({ useScope: "global" });
  var t = V(), n = window.app = new xl();
  const r = window.electron?.client != null;
  function i() {
    document.documentElement.lang = e.locale.value;
  }
  function o() {
    r && dn.forEach((p) => {
      window.electron.loadScript(p.path);
    });
  }
  function l() {
    document.addEventListener("keydown", c);
  }
  function d() {
    document.removeEventListener("keydown", c);
  }
  function c(p) {
    u() && (p.code === "KeyI" && (p.ctrlKey && p.shiftKey || p.metaKey && p.shiftKey) ? window.electron.openDevTools() : p.code === "F11" && window.electron.toggleFullScreen());
  }
  function u() {
    return window.electron != null;
  }
  return So(e.locale, () => {
    i();
  }), de(function() {
    n.init(t.value, o), l(), i();
  }), fe(function() {
    d();
  }), (p, a) => (D(), z(ce, null, [_("canvas", { ref_key: "canvas", ref: t }, null, 512), ie(Nh)], 64));
} }, Ia = Co(jh);
Ia.use(ko);
Ia.mount("#app");
