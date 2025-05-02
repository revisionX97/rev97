import { aM as Tn, aN as Gi, u as ut, s as dr, aQ as Qt, p as Dn, f as lt, aO as Wi, aS as $e, e as Y, q as qi, l as Ui, al as kn, aT as Mn, aU as Fn, aV as Lr, V as _t, aW as Gt, _ as Jt, x as Nt, y as vr, b as Sr, o as W, w as te, c as V, d as Wt, a as j, t as ee, F as re, h as ue, aH as Ln, aI as Bn, T as Me, aX as Nn, g as Rt, m as Lt, aY as On, aD as Hn, ac as Gn, O as Br, af as Wn, aZ as Vi, ah as Ji, a_ as qn, a$ as Un, b0 as Rr, a2 as Vn, b1 as Jn, b2 as Kn, i as Ki, z as Xi, b3 as hr, aK as Xn, b4 as $n, n as Yn, j as Zn, A as Qn } from "./SkeletonUtils-Bl7JM-Sp.js";
import { T as ts, A as es, G as rs, a as is, L as $i } from "./AssetLoader-EUCdTZkb.js";
import { G as ns, E as ss, T as as, a as os, O as cs } from "./OrbitControls-6ASvaWSN.js";
(async () => {
  const Yt = typeof document < "u";
  function Yi(i) {
    return typeof i == "object" || "displayName" in i || "props" in i || "__vccOpts" in i;
  }
  function ls(i) {
    return i.__esModule || i[Symbol.toStringTag] === "Module" || i.default && Yi(i.default);
  }
  const H = Object.assign;
  function Ye(i, t) {
    const e = {};
    for (const r in t) {
      const n = t[r];
      e[r] = yt(n) ? n.map(i) : i(n);
    }
    return e;
  }
  const de = () => {
  }, yt = Array.isArray, Zi = /#/g, _s = /&/g, ds = /\//g, hs = /=/g, ws = /\?/g, Qi = /\+/g, us = /%5B/g, ps = /%5D/g, tn = /%5E/g, gs = /%60/g, en = /%7B/g, bs = /%7C/g, rn = /%7D/g, ms = /%20/g;
  function Cr(i) {
    return encodeURI("" + i).replace(bs, "|").replace(us, "[").replace(ps, "]");
  }
  function fs(i) {
    return Cr(i).replace(en, "{").replace(rn, "}").replace(tn, "^");
  }
  function wr(i) {
    return Cr(i).replace(Qi, "%2B").replace(ms, "+").replace(Zi, "%23").replace(_s, "%26").replace(gs, "`").replace(en, "{").replace(rn, "}").replace(tn, "^");
  }
  function ys(i) {
    return wr(i).replace(hs, "%3D");
  }
  function vs(i) {
    return Cr(i).replace(Zi, "%23").replace(ws, "%3F");
  }
  function Ss(i) {
    return i == null ? "" : vs(i).replace(ds, "%2F");
  }
  function pe(i) {
    try {
      return decodeURIComponent("" + i);
    } catch {
    }
    return "" + i;
  }
  const Rs = /\/$/, Cs = (i) => i.replace(Rs, "");
  function Ze(i, t, e = "/") {
    let r, n = {}, o = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return l < _ && l >= 0 && (_ = -1), _ > -1 && (r = t.slice(0, _), o = t.slice(_ + 1, l > -1 ? l : t.length), n = i(o)), l > -1 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = As(r ?? t, e), {
      fullPath: r + (o && "?") + o + c,
      path: r,
      query: n,
      hash: pe(c)
    };
  }
  function Es(i, t) {
    const e = t.query ? i(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Nr(i, t) {
    return !t || !i.toLowerCase().startsWith(t.toLowerCase()) ? i : i.slice(t.length) || "/";
  }
  function xs(i, t, e) {
    const r = t.matched.length - 1, n = e.matched.length - 1;
    return r > -1 && r === n && ie(t.matched[r], e.matched[n]) && nn(t.params, e.params) && i(t.query) === i(e.query) && t.hash === e.hash;
  }
  function ie(i, t) {
    return (i.aliasOf || i) === (t.aliasOf || t);
  }
  function nn(i, t) {
    if (Object.keys(i).length !== Object.keys(t).length) return false;
    for (const e in i) if (!js(i[e], t[e])) return false;
    return true;
  }
  function js(i, t) {
    return yt(i) ? Or(i, t) : yt(t) ? Or(t, i) : i === t;
  }
  function Or(i, t) {
    return yt(t) ? i.length === t.length && i.every((e, r) => e === t[r]) : i.length === 1 && i[0] === t;
  }
  function As(i, t) {
    if (i.startsWith("/")) return i;
    if (!i) return t;
    const e = t.split("/"), r = i.split("/"), n = r[r.length - 1];
    (n === ".." || n === ".") && r.push("");
    let o = e.length - 1, c, l;
    for (c = 0; c < r.length; c++) if (l = r[c], l !== ".") if (l === "..") o > 1 && o--;
    else break;
    return e.slice(0, o).join("/") + "/" + r.slice(c).join("/");
  }
  const Mt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var ge;
  (function(i) {
    i.pop = "pop", i.push = "push";
  })(ge || (ge = {}));
  var he;
  (function(i) {
    i.back = "back", i.forward = "forward", i.unknown = "";
  })(he || (he = {}));
  function Ps(i) {
    if (!i) if (Yt) {
      const t = document.querySelector("base");
      i = t && t.getAttribute("href") || "/", i = i.replace(/^\w+:\/\/[^\/]+/, "");
    } else i = "/";
    return i[0] !== "/" && i[0] !== "#" && (i = "/" + i), Cs(i);
  }
  const Is = /^[^#]+#/;
  function zs(i, t) {
    return i.replace(Is, "#") + t;
  }
  function Ts(i, t) {
    const e = document.documentElement.getBoundingClientRect(), r = i.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - e.left - (t.left || 0),
      top: r.top - e.top - (t.top || 0)
    };
  }
  const Fe = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Ds(i) {
    let t;
    if ("el" in i) {
      const e = i.el, r = typeof e == "string" && e.startsWith("#"), n = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!n) return;
      t = Ts(n, i);
    } else t = i;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Hr(i, t) {
    return (history.state ? history.state.position - t : -1) + i;
  }
  const ur = /* @__PURE__ */ new Map();
  function ks(i, t) {
    ur.set(i, t);
  }
  function Ms(i) {
    const t = ur.get(i);
    return ur.delete(i), t;
  }
  let Fs = () => location.protocol + "//" + location.host;
  function sn(i, t) {
    const { pathname: e, search: r, hash: n } = t, o = i.indexOf("#");
    if (o > -1) {
      let l = n.includes(i.slice(o)) ? i.slice(o).length : 1, _ = n.slice(l);
      return _[0] !== "/" && (_ = "/" + _), Nr(_, "");
    }
    return Nr(e, i) + r + n;
  }
  function Ls(i, t, e, r) {
    let n = [], o = [], c = null;
    const l = ({ state: b }) => {
      const f = sn(i, location), C = e.value, T = t.value;
      let z = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === C) {
          c = null;
          return;
        }
        z = T ? b.position - T.position : 0;
      } else r(f);
      n.forEach((I) => {
        I(e.value, C, {
          delta: z,
          type: ge.pop,
          direction: z ? z > 0 ? he.forward : he.back : he.unknown
        });
      });
    };
    function _() {
      c = e.value;
    }
    function h(b) {
      n.push(b);
      const f = () => {
        const C = n.indexOf(b);
        C > -1 && n.splice(C, 1);
      };
      return o.push(f), f;
    }
    function u() {
      const { history: b } = window;
      b.state && b.replaceState(H({}, b.state, {
        scroll: Fe()
      }), "");
    }
    function w() {
      for (const b of o) b();
      o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
      passive: true
    }), {
      pauseListeners: _,
      listen: h,
      destroy: w
    };
  }
  function Gr(i, t, e, r = false, n = false) {
    return {
      back: i,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: n ? Fe() : null
    };
  }
  function Bs(i) {
    const { history: t, location: e } = window, r = {
      value: sn(i, e)
    }, n = {
      value: t.state
    };
    n.value || o(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function o(_, h, u) {
      const w = i.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? i : i.slice(w)) + _ : Fs() + i + _;
      try {
        t[u ? "replaceState" : "pushState"](h, "", b), n.value = h;
      } catch (f) {
        console.error(f), e[u ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      const u = H({}, t.state, Gr(n.value.back, _, n.value.forward, true), h, {
        position: n.value.position
      });
      o(_, u, true), r.value = _;
    }
    function l(_, h) {
      const u = H({}, n.value, t.state, {
        forward: _,
        scroll: Fe()
      });
      o(u.current, u, true);
      const w = H({}, Gr(r.value, _, null), {
        position: u.position + 1
      }, h);
      o(_, w, false), r.value = _;
    }
    return {
      location: r,
      state: n,
      push: l,
      replace: c
    };
  }
  function Ns(i) {
    i = Ps(i);
    const t = Bs(i), e = Ls(i, t.state, t.location, t.replace);
    function r(o, c = true) {
      c || e.pauseListeners(), history.go(o);
    }
    const n = H({
      location: "",
      base: i,
      go: r,
      createHref: zs.bind(null, i)
    }, t, e);
    return Object.defineProperty(n, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(n, "state", {
      enumerable: true,
      get: () => t.state.value
    }), n;
  }
  function Os(i) {
    return i = location.host ? i || location.pathname + location.search : "", i.includes("#") || (i += "#"), Ns(i);
  }
  function Hs(i) {
    return typeof i == "string" || i && typeof i == "object";
  }
  function an(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  const on = Symbol("");
  var Wr;
  (function(i) {
    i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
  })(Wr || (Wr = {}));
  function ne(i, t) {
    return H(new Error(), {
      type: i,
      [on]: true
    }, t);
  }
  function jt(i, t) {
    return i instanceof Error && on in i && (t == null || !!(i.type & t));
  }
  const qr = "[^/]+?", Gs = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Ws = /[.+*?^${}()[\]/\\]/g;
  function qs(i, t) {
    const e = H({}, Gs, t), r = [];
    let n = e.start ? "^" : "";
    const o = [];
    for (const h of i) {
      const u = h.length ? [] : [
        90
      ];
      e.strict && !h.length && (n += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = 40 + (e.sensitive ? 0.25 : 0);
        if (b.type === 0) w || (n += "/"), n += b.value.replace(Ws, "\\$&"), f += 40;
        else if (b.type === 1) {
          const { value: C, repeatable: T, optional: z, regexp: I } = b;
          o.push({
            name: C,
            repeatable: T,
            optional: z
          });
          const v = I || qr;
          if (v !== qr) {
            f += 10;
            try {
              new RegExp(`(${v})`);
            } catch (x) {
              throw new Error(`Invalid custom RegExp for param "${C}" (${v}): ` + x.message);
            }
          }
          let S = T ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (S = z && h.length < 2 ? `(?:/${S})` : "/" + S), z && (S += "?"), n += S, f += 20, z && (f += -8), T && (f += -20), v === ".*" && (f += -50);
        }
        u.push(f);
      }
      r.push(u);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    e.strict || (n += "/?"), e.end ? n += "$" : e.strict && !n.endsWith("/") && (n += "(?:/|$)");
    const c = new RegExp(n, e.sensitive ? "" : "i");
    function l(h) {
      const u = h.match(c), w = {};
      if (!u) return null;
      for (let b = 1; b < u.length; b++) {
        const f = u[b] || "", C = o[b - 1];
        w[C.name] = f && C.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let u = "", w = false;
      for (const b of i) {
        (!w || !u.endsWith("/")) && (u += "/"), w = false;
        for (const f of b) if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: C, repeatable: T, optional: z } = f, I = C in h ? h[C] : "";
          if (yt(I) && !T) throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);
          const v = yt(I) ? I.join("/") : I;
          if (!v) if (z) b.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${C}"`);
          u += v;
        }
      }
      return u || "/";
    }
    return {
      re: c,
      score: r,
      keys: o,
      parse: l,
      stringify: _
    };
  }
  function Us(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
      const r = t[e] - i[e];
      if (r) return r;
      e++;
    }
    return i.length < t.length ? i.length === 1 && i[0] === 80 ? -1 : 1 : i.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function cn(i, t) {
    let e = 0;
    const r = i.score, n = t.score;
    for (; e < r.length && e < n.length; ) {
      const o = Us(r[e], n[e]);
      if (o) return o;
      e++;
    }
    if (Math.abs(n.length - r.length) === 1) {
      if (Ur(r)) return 1;
      if (Ur(n)) return -1;
    }
    return n.length - r.length;
  }
  function Ur(i) {
    const t = i[i.length - 1];
    return i.length > 0 && t[t.length - 1] < 0;
  }
  const Vs = {
    type: 0,
    value: ""
  }, Js = /[a-zA-Z0-9_]/;
  function Ks(i) {
    if (!i) return [
      []
    ];
    if (i === "/") return [
      [
        Vs
      ]
    ];
    if (!i.startsWith("/")) throw new Error(`Invalid path "${i}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = 0, r = e;
    const n = [];
    let o;
    function c() {
      o && n.push(o), o = [];
    }
    let l = 0, _, h = "", u = "";
    function w() {
      h && (e === 0 ? o.push({
        type: 0,
        value: h
      }) : e === 1 || e === 2 || e === 3 ? (o.length > 1 && (_ === "*" || _ === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), o.push({
        type: 1,
        value: h,
        regexp: u,
        repeatable: _ === "*" || _ === "+",
        optional: _ === "*" || _ === "?"
      })) : t("Invalid state to consume buffer"), h = "");
    }
    function b() {
      h += _;
    }
    for (; l < i.length; ) {
      if (_ = i[l++], _ === "\\" && e !== 2) {
        r = e, e = 4;
        continue;
      }
      switch (e) {
        case 0:
          _ === "/" ? (h && w(), c()) : _ === ":" ? (w(), e = 1) : b();
          break;
        case 4:
          b(), e = r;
          break;
        case 1:
          _ === "(" ? e = 2 : Js.test(_) ? b() : (w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--);
          break;
        case 2:
          _ === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + _ : e = 3 : u += _;
          break;
        case 3:
          w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--, u = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return e === 2 && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), n;
  }
  function Xs(i, t, e) {
    const r = qs(Ks(i.path), e), n = H(r, {
      record: i,
      parent: t,
      children: [],
      alias: []
    });
    return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
  }
  function $s(i, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = Xr({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function n(w) {
      return r.get(w);
    }
    function o(w, b, f) {
      const C = !f, T = Jr(w);
      T.aliasOf = f && f.record;
      const z = Xr(t, w), I = [
        T
      ];
      if ("alias" in w) {
        const x = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const pt of x) I.push(Jr(H({}, T, {
          components: f ? f.record.components : T.components,
          path: pt,
          aliasOf: f ? f.record : T
        })));
      }
      let v, S;
      for (const x of I) {
        const { path: pt } = x;
        if (b && pt[0] !== "/") {
          const ht = b.record.path, Z = ht[ht.length - 1] === "/" ? "" : "/";
          x.path = b.record.path + (pt && Z + pt);
        }
        if (v = Xs(x, b, z), f ? f.alias.push(v) : (S = S || v, S !== v && S.alias.push(v), C && w.name && !Kr(v) && c(w.name)), ln(v) && _(v), T.children) {
          const ht = T.children;
          for (let Z = 0; Z < ht.length; Z++) o(ht[Z], v, f && f.children[Z]);
        }
        f = f || v;
      }
      return S ? () => {
        c(S);
      } : de;
    }
    function c(w) {
      if (an(w)) {
        const b = r.get(w);
        b && (r.delete(w), e.splice(e.indexOf(b), 1), b.children.forEach(c), b.alias.forEach(c));
      } else {
        const b = e.indexOf(w);
        b > -1 && (e.splice(b, 1), w.record.name && r.delete(w.record.name), w.children.forEach(c), w.alias.forEach(c));
      }
    }
    function l() {
      return e;
    }
    function _(w) {
      const b = Qs(w, e);
      e.splice(b, 0, w), w.record.name && !Kr(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, C = {}, T, z;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ne(1, {
          location: w
        });
        z = f.record.name, C = H(Vr(b.params, f.keys.filter((S) => !S.optional).concat(f.parent ? f.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), w.params && Vr(w.params, f.keys.map((S) => S.name))), T = f.stringify(C);
      } else if (w.path != null) T = w.path, f = e.find((S) => S.re.test(T)), f && (C = f.parse(T), z = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((S) => S.re.test(b.path)), !f) throw ne(1, {
          location: w,
          currentLocation: b
        });
        z = f.record.name, C = H({}, b.params, w.params), T = f.stringify(C);
      }
      const I = [];
      let v = f;
      for (; v; ) I.unshift(v.record), v = v.parent;
      return {
        name: z,
        path: T,
        params: C,
        matched: I,
        meta: Zs(I)
      };
    }
    i.forEach((w) => o(w));
    function u() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: o,
      resolve: h,
      removeRoute: c,
      clearRoutes: u,
      getRoutes: l,
      getRecordMatcher: n
    };
  }
  function Vr(i, t) {
    const e = {};
    for (const r of t) r in i && (e[r] = i[r]);
    return e;
  }
  function Jr(i) {
    const t = {
      path: i.path,
      redirect: i.redirect,
      name: i.name,
      meta: i.meta || {},
      aliasOf: i.aliasOf,
      beforeEnter: i.beforeEnter,
      props: Ys(i),
      children: i.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in i ? i.components || null : i.component && {
        default: i.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function Ys(i) {
    const t = {}, e = i.props || false;
    if ("component" in i) t.default = e;
    else for (const r in i.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function Kr(i) {
    for (; i; ) {
      if (i.record.aliasOf) return true;
      i = i.parent;
    }
    return false;
  }
  function Zs(i) {
    return i.reduce((t, e) => H(t, e.meta), {});
  }
  function Xr(i, t) {
    const e = {};
    for (const r in i) e[r] = r in t ? t[r] : i[r];
    return e;
  }
  function Qs(i, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const o = e + r >> 1;
      cn(i, t[o]) < 0 ? r = o : e = o + 1;
    }
    const n = ta(i);
    return n && (r = t.lastIndexOf(n, r - 1)), r;
  }
  function ta(i) {
    let t = i;
    for (; t = t.parent; ) if (ln(t) && cn(i, t) === 0) return t;
  }
  function ln({ record: i }) {
    return !!(i.name || i.components && Object.keys(i.components).length || i.redirect);
  }
  function ea(i) {
    const t = {};
    if (i === "" || i === "?") return t;
    const r = (i[0] === "?" ? i.slice(1) : i).split("&");
    for (let n = 0; n < r.length; ++n) {
      const o = r[n].replace(Qi, " "), c = o.indexOf("="), l = pe(c < 0 ? o : o.slice(0, c)), _ = c < 0 ? null : pe(o.slice(c + 1));
      if (l in t) {
        let h = t[l];
        yt(h) || (h = t[l] = [
          h
        ]), h.push(_);
      } else t[l] = _;
    }
    return t;
  }
  function $r(i) {
    let t = "";
    for (let e in i) {
      const r = i[e];
      if (e = ys(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (yt(r) ? r.map((o) => o && wr(o)) : [
        r && wr(r)
      ]).forEach((o) => {
        o !== void 0 && (t += (t.length ? "&" : "") + e, o != null && (t += "=" + o));
      });
    }
    return t;
  }
  function ra(i) {
    const t = {};
    for (const e in i) {
      const r = i[e];
      r !== void 0 && (t[e] = yt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
    }
    return t;
  }
  const ia = Symbol(""), Yr = Symbol(""), Er = Symbol(""), xr = Symbol(""), pr = Symbol("");
  function _e() {
    let i = [];
    function t(r) {
      return i.push(r), () => {
        const n = i.indexOf(r);
        n > -1 && i.splice(n, 1);
      };
    }
    function e() {
      i = [];
    }
    return {
      add: t,
      list: () => i.slice(),
      reset: e
    };
  }
  function Ft(i, t, e, r, n, o = (c) => c()) {
    const c = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ne(4, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Hs(b) ? _(ne(2, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[n] === c && typeof b == "function" && c.push(b), l());
      }, u = o(() => i.call(r && r.instances[n], t, e, h));
      let w = Promise.resolve(u);
      i.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function Qe(i, t, e, r, n = (o) => o()) {
    const o = [];
    for (const c of i) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if (Yi(_)) {
        const u = (_.__vccOpts || _)[t];
        u && o.push(Ft(u, e, r, c, l, n));
      } else {
        let h = _();
        o.push(() => h.then((u) => {
          if (!u) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = ls(u) ? u.default : u;
          c.mods[l] = u, c.components[l] = w;
          const f = (w.__vccOpts || w)[t];
          return f && Ft(f, e, r, c, l, n)();
        }));
      }
    }
    return o;
  }
  function Zr(i) {
    const t = Qt(Er), e = Qt(xr), r = lt(() => {
      const _ = ut(i.to);
      return t.resolve(_);
    }), n = lt(() => {
      const { matched: _ } = r.value, { length: h } = _, u = _[h - 1], w = e.matched;
      if (!u || !w.length) return -1;
      const b = w.findIndex(ie.bind(null, u));
      if (b > -1) return b;
      const f = Qr(_[h - 2]);
      return h > 1 && Qr(u) === f && w[w.length - 1].path !== f ? w.findIndex(ie.bind(null, _[h - 2])) : b;
    }), o = lt(() => n.value > -1 && ca(e.params, r.value.params)), c = lt(() => n.value > -1 && n.value === e.matched.length - 1 && nn(e.params, r.value.params));
    function l(_ = {}) {
      if (oa(_)) {
        const h = t[ut(i.replace) ? "replace" : "push"](ut(i.to)).catch(de);
        return i.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: lt(() => r.value.href),
      isActive: o,
      isExactActive: c,
      navigate: l
    };
  }
  function na(i) {
    return i.length === 1 ? i[0] : i;
  }
  const sa = Gi({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: Zr,
    setup(i, { slots: t }) {
      const e = Dn(Zr(i)), { options: r } = Qt(Er), n = lt(() => ({
        [ti(i.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [ti(i.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const o = t.default && na(t.default(e));
        return i.custom ? o : Wi("a", {
          "aria-current": e.isExactActive ? i.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: n.value
        }, o);
      };
    }
  }), aa = sa;
  function oa(i) {
    if (!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) && !i.defaultPrevented && !(i.button !== void 0 && i.button !== 0)) {
      if (i.currentTarget && i.currentTarget.getAttribute) {
        const t = i.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return i.preventDefault && i.preventDefault(), true;
    }
  }
  function ca(i, t) {
    for (const e in t) {
      const r = t[e], n = i[e];
      if (typeof r == "string") {
        if (r !== n) return false;
      } else if (!yt(n) || n.length !== r.length || r.some((o, c) => o !== n[c])) return false;
    }
    return true;
  }
  function Qr(i) {
    return i ? i.aliasOf ? i.aliasOf.path : i.path : "";
  }
  const ti = (i, t, e) => i ?? t ?? e, la = Gi({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(i, { attrs: t, slots: e }) {
      const r = Qt(pr), n = lt(() => i.route || r.value), o = Qt(Yr, 0), c = lt(() => {
        let h = ut(o);
        const { matched: u } = n.value;
        let w;
        for (; (w = u[h]) && !w.components; ) h++;
        return h;
      }), l = lt(() => n.value.matched[c.value]);
      $e(Yr, lt(() => c.value + 1)), $e(ia, l), $e(pr, n);
      const _ = Y();
      return qi(() => [
        _.value,
        l.value,
        i.name
      ], ([h, u, w], [b, f, C]) => {
        u && (u.instances[w] = h, f && f !== u && h && h === b && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), h && u && (!f || !ie(u, f) || !b) && (u.enterCallbacks[w] || []).forEach((T) => T(h));
      }, {
        flush: "post"
      }), () => {
        const h = n.value, u = i.name, w = l.value, b = w && w.components[u];
        if (!b) return ei(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[u], C = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, z = Wi(b, H({}, C, t, {
          onVnodeUnmounted: (I) => {
            I.component.isUnmounted && (w.instances[u] = null);
          },
          ref: _
        }));
        return ei(e.default, {
          Component: z,
          route: h
        }) || z;
      };
    }
  });
  function ei(i, t) {
    if (!i) return null;
    const e = i(t);
    return e.length === 1 ? e[0] : e;
  }
  const _a = la;
  function da(i) {
    const t = $s(i.routes, i), e = i.parseQuery || ea, r = i.stringifyQuery || $r, n = i.history, o = _e(), c = _e(), l = _e(), _ = Tn(Mt);
    let h = Mt;
    Yt && i.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Ye.bind(null, (m) => "" + m), w = Ye.bind(null, Ss), b = Ye.bind(null, pe);
    function f(m, y) {
      let R, P;
      return an(m) ? (R = t.getRecordMatcher(m), P = y) : P = m, t.addRoute(P, R);
    }
    function C(m) {
      const y = t.getRecordMatcher(m);
      y && t.removeRoute(y);
    }
    function T() {
      return t.getRoutes().map((m) => m.record);
    }
    function z(m) {
      return !!t.getRecordMatcher(m);
    }
    function I(m, y) {
      if (y = H({}, y || _.value), typeof m == "string") {
        const B = Ze(e, m, y.path), et = t.resolve({
          path: B.path
        }, y), le = n.createHref(B.fullPath);
        return H(B, et, {
          params: b(et.params),
          hash: pe(B.hash),
          redirectedFrom: void 0,
          href: le
        });
      }
      let R;
      if (m.path != null) R = H({}, m, {
        path: Ze(e, m.path, y.path).path
      });
      else {
        const B = H({}, m.params);
        for (const et in B) B[et] == null && delete B[et];
        R = H({}, m, {
          params: w(B)
        }), y.params = w(y.params);
      }
      const P = t.resolve(R, y), q = m.hash || "";
      P.params = u(b(P.params));
      const K = Es(r, H({}, m, {
        hash: fs(q),
        path: P.path
      })), N = n.createHref(K);
      return H({
        fullPath: K,
        hash: q,
        query: r === $r ? ra(m.query) : m.query || {}
      }, P, {
        redirectedFrom: void 0,
        href: N
      });
    }
    function v(m) {
      return typeof m == "string" ? Ze(e, m, _.value.path) : H({}, m);
    }
    function S(m, y) {
      if (h !== m) return ne(8, {
        from: y,
        to: m
      });
    }
    function x(m) {
      return Z(m);
    }
    function pt(m) {
      return x(H(v(m), {
        replace: true
      }));
    }
    function ht(m) {
      const y = m.matched[m.matched.length - 1];
      if (y && y.redirect) {
        const { redirect: R } = y;
        let P = typeof R == "function" ? R(m) : R;
        return typeof P == "string" && (P = P.includes("?") || P.includes("#") ? P = v(P) : {
          path: P
        }, P.params = {}), H({
          query: m.query,
          hash: m.hash,
          params: P.path != null ? {} : m.params
        }, P);
      }
    }
    function Z(m, y) {
      const R = h = I(m), P = _.value, q = m.state, K = m.force, N = m.replace === true, B = ht(R);
      if (B) return Z(H(v(B), {
        state: typeof B == "object" ? H({}, q, B.state) : q,
        force: K,
        replace: N
      }), y || R);
      const et = R;
      et.redirectedFrom = y;
      let le;
      return !K && xs(r, P, R) && (le = ne(16, {
        to: et,
        from: P
      }), ce(P, P, true, false)), (le ? Promise.resolve(le) : Et(et, P)).catch((wt) => jt(wt) ? jt(wt, 2) ? wt : bt(wt) : oe(wt, et, P)).then((wt) => {
        if (wt) {
          if (jt(wt, 2)) return Z(H({
            replace: N
          }, v(wt.to), {
            state: typeof wt.to == "object" ? H({}, q, wt.to.state) : q,
            force: K
          }), y || et);
        } else wt = xt(et, P, true, N, q);
        return Dt(et, P, wt), wt;
      });
    }
    function Tt(m, y) {
      const R = S(m, y);
      return R ? Promise.reject(R) : Promise.resolve();
    }
    function vt(m) {
      const y = E.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function Et(m, y) {
      let R;
      const [P, q, K] = ha(m, y);
      R = Qe(P.reverse(), "beforeRouteLeave", m, y);
      for (const B of P) B.leaveGuards.forEach((et) => {
        R.push(Ft(et, m, y));
      });
      const N = Tt.bind(null, m, y);
      return R.push(N), A(R).then(() => {
        R = [];
        for (const B of o.list()) R.push(Ft(B, m, y));
        return R.push(N), A(R);
      }).then(() => {
        R = Qe(q, "beforeRouteUpdate", m, y);
        for (const B of q) B.updateGuards.forEach((et) => {
          R.push(Ft(et, m, y));
        });
        return R.push(N), A(R);
      }).then(() => {
        R = [];
        for (const B of K) if (B.beforeEnter) if (yt(B.beforeEnter)) for (const et of B.beforeEnter) R.push(Ft(et, m, y));
        else R.push(Ft(B.beforeEnter, m, y));
        return R.push(N), A(R);
      }).then(() => (m.matched.forEach((B) => B.enterCallbacks = {}), R = Qe(K, "beforeRouteEnter", m, y, vt), R.push(N), A(R))).then(() => {
        R = [];
        for (const B of c.list()) R.push(Ft(B, m, y));
        return R.push(N), A(R);
      }).catch((B) => jt(B, 8) ? B : Promise.reject(B));
    }
    function Dt(m, y, R) {
      l.list().forEach((P) => vt(() => P(m, y, R)));
    }
    function xt(m, y, R, P, q) {
      const K = S(m, y);
      if (K) return K;
      const N = y === Mt, B = Yt ? history.state : {};
      R && (P || N ? n.replace(m.fullPath, H({
        scroll: N && B && B.scroll
      }, q)) : n.push(m.fullPath, q)), _.value = m, ce(m, y, R, N), bt();
    }
    let kt;
    function Re() {
      kt || (kt = n.listen((m, y, R) => {
        if (!M.listening) return;
        const P = I(m), q = ht(P);
        if (q) {
          Z(H(q, {
            replace: true,
            force: true
          }), P).catch(de);
          return;
        }
        h = P;
        const K = _.value;
        Yt && ks(Hr(K.fullPath, R.delta), Fe()), Et(P, K).catch((N) => jt(N, 12) ? N : jt(N, 2) ? (Z(H(v(N.to), {
          force: true
        }), P).then((B) => {
          jt(B, 20) && !R.delta && R.type === ge.pop && n.go(-1, false);
        }).catch(de), Promise.reject()) : (R.delta && n.go(-R.delta, false), oe(N, P, K))).then((N) => {
          N = N || xt(P, K, false), N && (R.delta && !jt(N, 8) ? n.go(-R.delta, false) : R.type === ge.pop && jt(N, 20) && n.go(-1, false)), Dt(P, K, N);
        }).catch(de);
      }));
    }
    let se = _e(), ae = _e(), Kt;
    function oe(m, y, R) {
      bt(m);
      const P = ae.list();
      return P.length ? P.forEach((q) => q(m, y, R)) : console.error(m), Promise.reject(m);
    }
    function Xe() {
      return Kt && _.value !== Mt ? Promise.resolve() : new Promise((m, y) => {
        se.add([
          m,
          y
        ]);
      });
    }
    function bt(m) {
      return Kt || (Kt = !m, Re(), se.list().forEach(([y, R]) => m ? R(m) : y()), se.reset()), m;
    }
    function ce(m, y, R, P) {
      const { scrollBehavior: q } = i;
      if (!Yt || !q) return Promise.resolve();
      const K = !R && Ms(Hr(m.fullPath, 0)) || (P || !R) && history.state && history.state.scroll || null;
      return Ui().then(() => q(m, y, K)).then((N) => N && Ds(N)).catch((N) => oe(N, m, y));
    }
    const Xt = (m) => n.go(m);
    let Ot;
    const E = /* @__PURE__ */ new Set(), M = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: z,
      getRoutes: T,
      resolve: I,
      options: i,
      push: x,
      replace: pt,
      go: Xt,
      back: () => Xt(-1),
      forward: () => Xt(1),
      beforeEach: o.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Xe,
      install(m) {
        const y = this;
        m.component("RouterLink", aa), m.component("RouterView", _a), m.config.globalProperties.$router = y, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ut(_)
        }), Yt && !Ot && _.value === Mt && (Ot = true, x(n.location).catch((q) => {
        }));
        const R = {};
        for (const q in Mt) Object.defineProperty(R, q, {
          get: () => _.value[q],
          enumerable: true
        });
        m.provide(Er, y), m.provide(xr, dr(R)), m.provide(pr, _);
        const P = m.unmount;
        E.add(m), m.unmount = function() {
          E.delete(m), E.size < 1 && (h = Mt, kt && kt(), kt = null, _.value = Mt, Ot = false, Kt = false), P();
        };
      }
    };
    function A(m) {
      return m.reduce((y, R) => y.then(() => vt(R)), Promise.resolve());
    }
    return M;
  }
  function ha(i, t) {
    const e = [], r = [], n = [], o = Math.max(t.matched.length, i.matched.length);
    for (let c = 0; c < o; c++) {
      const l = t.matched[c];
      l && (i.matched.find((h) => ie(h, l)) ? r.push(l) : e.push(l));
      const _ = i.matched[c];
      _ && (t.matched.find((h) => ie(h, _)) || n.push(_));
    }
    return [
      e,
      r,
      n
    ];
  }
  function wa(i) {
    return Qt(xr);
  }
  const ua = "" + new URL("rapier_wasm3d_bg-C9SRa0kS.wasm", import.meta.url).href, pa = async (i = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const o = atob(r);
        n = new Uint8Array(o.length);
        for (let c = 0; c < o.length; c++) n[c] = o.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(n, i);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, i);
      else {
        const o = await r.arrayBuffer();
        e = await WebAssembly.instantiate(o, i);
      }
    }
    return e.instance.exports;
  };
  let s;
  function ga(i) {
    s = i;
  }
  const O = new Array(128).fill(void 0);
  O.push(void 0, null, true, false);
  function G(i) {
    return O[i];
  }
  let we = O.length;
  function tt(i) {
    we === O.length && O.push(O.length + 1);
    const t = we;
    return we = O[t], O[t] = i, t;
  }
  function jr(i, t) {
    try {
      return i.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(tt(e));
    }
  }
  function k(i) {
    return i == null;
  }
  let $t = null;
  function ot() {
    return ($t === null || $t.buffer.detached === true || $t.buffer.detached === void 0 && $t.buffer !== s.memory.buffer) && ($t = new DataView(s.memory.buffer)), $t;
  }
  function ba(i) {
    i < 132 || (O[i] = we, we = i);
  }
  function be(i) {
    const t = G(i);
    return ba(i), t;
  }
  const ma = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let _n = new ma("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  _n.decode();
  let Ce = null;
  function fa() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Uint8Array(s.memory.buffer)), Ce;
  }
  function ya(i, t) {
    return i = i >>> 0, _n.decode(fa().subarray(i, i + t));
  }
  function d(i, t) {
    if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let U = 128;
  function X(i) {
    if (U == 1) throw new Error("out of js stack");
    return O[--U] = i, U;
  }
  let Ee = null;
  function dn() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(s.memory.buffer)), Ee;
  }
  function ri(i, t) {
    return i = i >>> 0, dn().subarray(i / 4, i / 4 + t);
  }
  let xe = null;
  function hn() {
    return (xe === null || xe.byteLength === 0) && (xe = new Uint32Array(s.memory.buffer)), xe;
  }
  function va(i, t) {
    return i = i >>> 0, hn().subarray(i / 4, i / 4 + t);
  }
  let gt = 0;
  function Ht(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return dn().set(i, e / 4), gt = i.length, e;
  }
  function je(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return hn().set(i, e / 4), gt = i.length, e;
  }
  const Le = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    LinZ: 2,
    2: "LinZ",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
  }), ft = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Spherical: 5,
    5: "Spherical",
    Generic: 6,
    6: "Generic"
  }), st = Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolyhedron: 9,
    9: "ConvexPolyhedron",
    Cylinder: 10,
    10: "Cylinder",
    Cone: 11,
    11: "Cone",
    RoundCuboid: 12,
    12: "RoundCuboid",
    RoundTriangle: 13,
    13: "RoundTriangle",
    RoundCylinder: 14,
    14: "RoundCylinder",
    RoundCone: 15,
    15: "RoundCone",
    RoundConvexPolyhedron: 16,
    16: "RoundConvexPolyhedron",
    HalfSpace: 17,
    17: "HalfSpace"
  }), tr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawbroadphase_free(i >>> 0, 1));
  class qt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qt.prototype);
      return e.__wbg_ptr = t, tr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, tr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, tr.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ii = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawccdsolver_free(i >>> 0, 1));
  class gr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ii.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, ii.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ni = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcharactercollision_free(i >>> 0, 1));
  class wn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ni.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, ni.register(this, this.__wbg_ptr, this), this;
    }
    handle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    translationDeltaRemaining() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
    toi() {
      return s.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
      const t = s.rawcharactercollision_worldWitness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldWitness2() {
      const t = s.rawcharactercollision_worldWitness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal1() {
      const t = s.rawcharactercollision_worldNormal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal2() {
      const t = s.rawcharactercollision_worldNormal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const er = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcolliderset_free(i >>> 0, 1));
  class $ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($.prototype);
      return e.__wbg_ptr = t, er.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, er.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcolliderset_free(t, 0);
    }
    coTranslation(t) {
      const e = s.rawcolliderset_coTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    coRotation(t) {
      const e = s.rawcolliderset_coRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    coSetTranslation(t, e, r, n) {
      s.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, n);
    }
    coSetTranslationWrtParent(t, e, r, n) {
      s.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, n);
    }
    coSetRotation(t, e, r, n, o) {
      s.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, n, o);
    }
    coSetRotationWrtParent(t, e, r, n, o) {
      s.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, n, o);
    }
    coIsSensor(t) {
      return s.rawcolliderset_coIsSensor(this.__wbg_ptr, t) !== 0;
    }
    coShapeType(t) {
      return s.rawcolliderset_coShapeType(this.__wbg_ptr, t);
    }
    coHalfspaceNormal(t) {
      const e = s.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coHalfExtents(t) {
      const e = s.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coSetHalfExtents(t, e) {
      d(e, p), s.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coRadius(t) {
      const e = s.rawcolliderset_coRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRadius(t, e) {
      s.rawcolliderset_coSetRadius(this.__wbg_ptr, t, e);
    }
    coHalfHeight(t) {
      const e = s.rawcolliderset_coHalfHeight(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetHalfHeight(t, e) {
      s.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, t, e);
    }
    coRoundRadius(t) {
      const e = s.rawcolliderset_coRoundRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRoundRadius(t, e) {
      s.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, t, e);
    }
    coVertices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVertices(n, this.__wbg_ptr, t);
        var e = ot().getInt32(n + 4 * 0, true), r = ot().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
        var e = ot().getInt32(n + 4 * 0, true), r = ot().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = va(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coTriMeshFlags(t) {
      const e = s.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightFieldFlags(t) {
      const e = s.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldHeights(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coHeightfieldHeights(n, this.__wbg_ptr, t);
        var e = ot().getInt32(n + 4 * 0, true), r = ot().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coHeightfieldScale(t) {
      const e = s.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coHeightfieldNRows(t) {
      const e = s.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldNCols(t) {
      const e = s.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coParent(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coParent(n, this.__wbg_ptr, t);
        var e = ot().getInt32(n + 4 * 0, true), r = ot().getFloat64(n + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coSetEnabled(t, e) {
      s.rawcolliderset_coSetEnabled(this.__wbg_ptr, t, e);
    }
    coIsEnabled(t) {
      return s.rawcolliderset_coIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    coSetContactSkin(t, e) {
      s.rawcolliderset_coSetContactSkin(this.__wbg_ptr, t, e);
    }
    coContactSkin(t) {
      return s.rawcolliderset_coContactSkin(this.__wbg_ptr, t);
    }
    coFriction(t) {
      return s.rawcolliderset_coFriction(this.__wbg_ptr, t);
    }
    coRestitution(t) {
      return s.rawcolliderset_coRestitution(this.__wbg_ptr, t);
    }
    coDensity(t) {
      return s.rawcolliderset_coDensity(this.__wbg_ptr, t);
    }
    coMass(t) {
      return s.rawcolliderset_coMass(this.__wbg_ptr, t);
    }
    coVolume(t) {
      return s.rawcolliderset_coVolume(this.__wbg_ptr, t);
    }
    coCollisionGroups(t) {
      return s.rawcolliderset_coCollisionGroups(this.__wbg_ptr, t) >>> 0;
    }
    coSolverGroups(t) {
      return s.rawcolliderset_coSolverGroups(this.__wbg_ptr, t) >>> 0;
    }
    coActiveHooks(t) {
      return s.rawcolliderset_coActiveHooks(this.__wbg_ptr, t) >>> 0;
    }
    coActiveCollisionTypes(t) {
      return s.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, t);
    }
    coActiveEvents(t) {
      return s.rawcolliderset_coActiveEvents(this.__wbg_ptr, t) >>> 0;
    }
    coContactForceEventThreshold(t) {
      return s.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, t);
    }
    coContainsPoint(t, e) {
      return d(e, p), s.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
    coCastShape(t, e, r, n, o, c, l, _, h) {
      d(e, p), d(r, D), d(n, p), d(o, L), d(c, p);
      const u = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return u === 0 ? void 0 : Ge.__wrap(u);
    }
    coCastCollider(t, e, r, n, o, c, l) {
      d(e, p), d(n, p);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o, c, l);
      return _ === 0 ? void 0 : Be.__wrap(_);
    }
    coIntersectsShape(t, e, r, n) {
      return d(e, D), d(r, p), d(n, L), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, n, o) {
      d(e, D), d(r, p), d(n, L);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o);
      return c === 0 ? void 0 : me.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const n = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return n === 0 ? void 0 : me.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      d(e, p);
      const n = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return Ne.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return d(e, p), d(r, p), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, o) {
      return d(e, p), d(r, p), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    coCastRayAndGetNormal(t, e, r, n, o) {
      d(e, p), d(r, p);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
      return c === 0 ? void 0 : He.__wrap(c);
    }
    coSetSensor(t, e) {
      s.rawcolliderset_coSetSensor(this.__wbg_ptr, t, e);
    }
    coSetRestitution(t, e) {
      s.rawcolliderset_coSetRestitution(this.__wbg_ptr, t, e);
    }
    coSetFriction(t, e) {
      s.rawcolliderset_coSetFriction(this.__wbg_ptr, t, e);
    }
    coFrictionCombineRule(t) {
      return s.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetFrictionCombineRule(t, e) {
      s.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, t, e);
    }
    coRestitutionCombineRule(t) {
      return s.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetRestitutionCombineRule(t, e) {
      s.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, t, e);
    }
    coSetCollisionGroups(t, e) {
      s.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, t, e);
    }
    coSetSolverGroups(t, e) {
      s.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, t, e);
    }
    coSetActiveHooks(t, e) {
      s.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, t, e);
    }
    coSetActiveEvents(t, e) {
      s.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, t, e);
    }
    coSetActiveCollisionTypes(t, e) {
      s.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, t, e);
    }
    coSetShape(t, e) {
      d(e, D), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coSetContactForceEventThreshold(t, e) {
      s.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, t, e);
    }
    coSetDensity(t, e) {
      s.rawcolliderset_coSetDensity(this.__wbg_ptr, t, e);
    }
    coSetMass(t, e) {
      s.rawcolliderset_coSetMass(this.__wbg_ptr, t, e);
    }
    coSetMassProperties(t, e, r, n, o) {
      d(r, p), d(n, p), d(o, L), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, er.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, n, o, c, l, _, h, u, w, b, f, C, T, z, I, v, S, x, pt, ht, Z, Tt, vt) {
      try {
        const xt = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, D), d(r, p), d(n, L), d(l, p), d(_, p), d(h, L), d(vt, J), s.rawcolliderset_createCollider(xt, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u, w, b, f, C, T, z, I, v, S, x, pt, ht, Z, Tt, vt.__wbg_ptr);
        var Et = ot().getInt32(xt + 4 * 0, true), Dt = ot().getFloat64(xt + 8 * 1, true);
        return Et === 0 ? void 0 : Dt;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, n) {
      d(e, It), d(r, J), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
  }
  const si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
  class Be {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Be.prototype);
      return e.__wbg_ptr = t, si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, si.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcollidershapecasthit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactforceevent_free(i >>> 0, 1));
  class Ar {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ar.prototype);
      return e.__wbg_ptr = t, ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ai.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactforceevent_free(t, 0);
    }
    collider1() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactforceevent_collider2(this.__wbg_ptr);
    }
    total_force() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return p.__wrap(t);
    }
    total_force_magnitude() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
      const t = s.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
      return p.__wrap(t);
    }
    max_force_magnitude() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
  }
  const oi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactmanifold_free(i >>> 0, 1));
  class Pr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pr.prototype);
      return e.__wbg_ptr = t, oi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, oi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactmanifold_free(t, 0);
    }
    normal() {
      const t = s.rawcontactmanifold_normal(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n1() {
      const t = s.rawcontactmanifold_local_n1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n2() {
      const t = s.rawcontactmanifold_local_n2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    subshape1() {
      return s.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
    }
    subshape2() {
      return s.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
    }
    num_contacts() {
      return s.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
    }
    contact_local_p1(t) {
      const e = s.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    contact_local_p2(t) {
      const e = s.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    contact_dist(t) {
      return s.rawcontactmanifold_contact_dist(this.__wbg_ptr, t);
    }
    contact_fid1(t) {
      return s.rawcontactmanifold_contact_fid1(this.__wbg_ptr, t) >>> 0;
    }
    contact_fid2(t) {
      return s.rawcontactmanifold_contact_fid2(this.__wbg_ptr, t) >>> 0;
    }
    contact_impulse(t) {
      return s.rawcontactmanifold_contact_impulse(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_x(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_y(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, t);
    }
    num_solver_contacts() {
      return s.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(t) {
      const e = s.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    solver_contact_dist(t) {
      return s.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, t);
    }
    solver_contact_friction(t) {
      return s.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, t);
    }
    solver_contact_restitution(t) {
      return s.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, t);
    }
    solver_contact_tangent_velocity(t) {
      const e = s.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
  }
  const ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactpair_free(i >>> 0, 1));
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
      return e.__wbg_ptr = t, ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactpair_free(t, 0);
    }
    collider1() {
      return s.rawcontactpair_collider1(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactpair_collider2(this.__wbg_ptr);
    }
    numContactManifolds() {
      return s.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
    }
    contactManifold(t) {
      const e = s.rawcontactpair_contactManifold(this.__wbg_ptr, t);
      return e === 0 ? void 0 : Pr.__wrap(e);
    }
  }
  const li = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
  class Sa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, li.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, li.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return be(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return be(t);
    }
    render(t, e, r, n, o) {
      d(t, J), d(e, $), d(r, Pt), d(n, zt), d(o, Bt), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
  }
  const _i = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdeserializedworld_free(i >>> 0, 1));
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, _i.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _i.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdeserializedworld_free(t, 0);
    }
    takeGravity() {
      const t = s.rawdeserializedworld_takeGravity(this.__wbg_ptr);
      return t === 0 ? void 0 : p.__wrap(t);
    }
    takeIntegrationParameters() {
      const t = s.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
      return t === 0 ? void 0 : Ut.__wrap(t);
    }
    takeIslandManager() {
      const t = s.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    takeBroadPhase() {
      const t = s.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
    }
    takeNarrowPhase() {
      const t = s.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : Bt.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : J.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : $.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Pt.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
  }
  const di = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
  class Ra {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, di.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, di.register(this, this.__wbg_ptr, this), this;
    }
    current_vehicle_speed() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    chassis() {
      return s.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
    }
    index_up_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_up_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    index_forward_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_forward_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
    }
    add_wheel(t, e, r, n, o) {
      d(t, p), d(e, p), d(r, p), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, n, o, c, l) {
      try {
        d(e, J), d(r, $), d(n, Tr), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, k(c) ? 4294967297 : c >>> 0, X(l));
      } finally {
        O[U++] = void 0;
      }
    }
    wheel_chassis_connection_point_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_chassis_connection_point_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_suspension_rest_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_rest_length(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_travel(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_travel(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, t, e);
    }
    wheel_radius(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_radius(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, t, e);
    }
    wheel_suspension_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_suspension_compression(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_compression(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, t, e);
    }
    wheel_suspension_relaxation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_relaxation(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, t, e);
    }
    wheel_brake(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_brake(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, t, e);
    }
    wheel_steering(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_steering(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, t, e);
    }
    wheel_engine_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_engine_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, t, e);
    }
    wheel_direction_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_direction_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_axle_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_axle_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_friction_slip(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_friction_slip(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, t, e);
    }
    wheel_side_friction_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_side_friction_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_rotation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_forward_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_side_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_contact_normal_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_contact_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_suspension_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_hard_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_is_in_contact(t) {
      return s.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
    }
    wheel_ground_object(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawdynamicraycastvehiclecontroller_wheel_ground_object(n, this.__wbg_ptr, t);
        var e = ot().getInt32(n + 4 * 0, true), r = ot().getFloat64(n + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const hi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_raweventqueue_free(i >>> 0, 1));
  class un {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, hi.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const wi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawgenericjoint_free(i >>> 0, 1));
  class it {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(it.prototype);
      return e.__wbg_ptr = t, wi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const o = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return o === 0 ? void 0 : it.__wrap(o);
    }
    static spring(t, e, r, n, o) {
      d(n, p), d(o, p);
      const c = s.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, o.__wbg_ptr);
      return it.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, p), d(r, p);
      const n = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return it.__wrap(n);
    }
    static spherical(t, e) {
      d(t, p), d(e, p);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return it.__wrap(r);
    }
    static prismatic(t, e, r, n, o, c) {
      d(t, p), d(e, p), d(r, p);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o, c);
      return l === 0 ? void 0 : it.__wrap(l);
    }
    static fixed(t, e, r, n) {
      d(t, p), d(e, L), d(r, p), d(n, L);
      const o = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
      return it.__wrap(o);
    }
    static revolute(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return n === 0 ? void 0 : it.__wrap(n);
    }
  }
  const rr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawimpulsejointset_free(i >>> 0, 1));
  class Pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pt.prototype);
      return e.__wbg_ptr = t, rr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, rr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawimpulsejointset_free(t, 0);
    }
    jointType(t) {
      return s.rawimpulsejointset_jointType(this.__wbg_ptr, t);
    }
    jointBodyHandle1(t) {
      return s.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, t);
    }
    jointBodyHandle2(t) {
      return s.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointSetAnchor1(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointSetAnchor2(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointContactsEnabled(t) {
      return s.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    jointSetLimits(t, e, r, n) {
      s.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorModel(t, e, r) {
      s.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, r);
    }
    jointConfigureMotorVelocity(t, e, r, n) {
      s.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorPosition(t, e, r, n, o) {
      s.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, n, o);
    }
    jointConfigureMotor(t, e, r, n, o, c) {
      s.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, n, o, c);
    }
    constructor() {
      const t = s.rawimpulsejointset_new();
      return this.__wbg_ptr = t >>> 0, rr.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, it), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawimpulsejointset_remove(this.__wbg_ptr, t, e);
    }
    len() {
      return s.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawimpulsejointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, X(e));
      } finally {
        O[U++] = void 0;
      }
    }
  }
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawintegrationparameters_free(i >>> 0, 1));
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return s.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return s.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numAdditionalFrictionIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return s.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return s.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return s.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
    }
    set dt(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    set contact_natural_frequency(t) {
      s.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, t);
    }
    set normalizedAllowedLinearError(t) {
      s.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, t);
    }
    set normalizedPredictionDistance(t) {
      s.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, t);
    }
    set numSolverIterations(t) {
      s.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, t);
    }
    set numAdditionalFrictionIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    set numInternalPgsIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
    }
    set minIslandSize(t) {
      s.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, t);
    }
    set maxCcdSubsteps(t) {
      s.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, t);
    }
    set lengthUnit(t) {
      s.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, t);
    }
    switchToStandardPgsSolver() {
      s.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolver() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
    }
  }
  const nr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawislandmanager_free(i >>> 0, 1));
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, nr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, nr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, nr.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
  }
  const ui = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
  class Ca {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ui.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, ui.register(this, this.__wbg_ptr, this), this;
    }
    up() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    setUp(t) {
      d(t, p), s.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
    }
    normalNudgeFactor() {
      return s.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    }
    setNormalNudgeFactor(t) {
      s.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, t);
    }
    offset() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    setOffset(t) {
      s.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, t);
    }
    slideEnabled() {
      return s.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
    }
    setSlideEnabled(t) {
      s.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, t);
    }
    autostepMaxHeight() {
      const t = s.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepMinWidth() {
      const t = s.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepIncludesDynamicBodies() {
      const t = s.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t !== 0;
    }
    autostepEnabled() {
      return s.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
    }
    enableAutostep(t, e, r) {
      s.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, t, e, r);
    }
    disableAutostep() {
      s.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    setMaxSlopeClimbAngle(t) {
      s.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, t);
    }
    minSlopeSlideAngle() {
      return s.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    }
    setMinSlopeSlideAngle(t) {
      s.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, t);
    }
    snapToGroundDistance() {
      const t = s.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    enableSnapToGround(t) {
      s.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, t);
    }
    disableSnapToGround() {
      s.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
      return s.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
    }
    computeColliderMovement(t, e, r, n, o, c, l, _, h, u, w) {
      try {
        d(e, J), d(r, $), d(n, Tr), d(c, p), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c.__wbg_ptr, l, k(_) ? 4294967297 : Math.fround(_), h, k(u) ? 4294967297 : u >>> 0, X(w));
      } finally {
        O[U++] = void 0;
      }
    }
    computedMovement() {
      const t = s.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
      return p.__wrap(t);
    }
    computedGrounded() {
      return s.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
    }
    numComputedCollisions() {
      return s.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(t, e) {
      return d(e, wn), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawmultibodyjointset_free(t, 0);
    }
    jointType(t) {
      return s.rawmultibodyjointset_jointType(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointContactsEnabled(t) {
      return s.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    constructor() {
      const t = s.rawmultibodyjointset_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, it), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, X(e));
      } finally {
        O[U++] = void 0;
      }
    }
  }
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawnarrowphase_free(i >>> 0, 1));
  class Bt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Bt.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, tt(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : Ir.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, tt(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawphysicspipeline_free(i >>> 0, 1));
  class Ea {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, pi.register(this, this.__wbg_ptr, this), this;
    }
    step(t, e, r, n, o, c, l, _, h, u) {
      d(t, p), d(e, Ut), d(r, It), d(n, qt), d(o, Bt), d(c, J), d(l, $), d(_, Pt), d(h, zt), d(u, gr), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr);
    }
    stepWithEvents(t, e, r, n, o, c, l, _, h, u, w, b, f, C) {
      d(t, p), d(e, Ut), d(r, It), d(n, qt), d(o, Bt), d(c, J), d(l, $), d(_, Pt), d(h, zt), d(u, gr), d(w, un), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, tt(b), tt(f), tt(C));
    }
  }
  const gi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpidcontroller_free(i >>> 0, 1));
  class xa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawpidcontroller_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, gi.register(this, this.__wbg_ptr, this), this;
    }
    set_kp(t, e) {
      s.rawpidcontroller_set_kp(this.__wbg_ptr, t, e);
    }
    set_ki(t, e) {
      s.rawpidcontroller_set_ki(this.__wbg_ptr, t, e);
    }
    set_kd(t, e) {
      s.rawpidcontroller_set_kd(this.__wbg_ptr, t, e);
    }
    set_axes_mask(t) {
      s.rawpidcontroller_set_axes_mask(this.__wbg_ptr, t);
    }
    reset_integrals() {
      s.rawpidcontroller_reset_integrals(this.__wbg_ptr);
    }
    apply_linear_correction(t, e, r, n, o) {
      d(e, J), d(n, p), d(o, p), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, n, o) {
      d(e, J), d(n, L), d(o, p), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    linear_correction(t, e, r, n, o) {
      d(e, J), d(n, p), d(o, p);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return p.__wrap(c);
    }
    angular_correction(t, e, r, n, o) {
      d(e, J), d(n, L), d(o, p);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return p.__wrap(c);
    }
  }
  const bi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
      return e.__wbg_ptr = t, bi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointcolliderprojection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    point() {
      const t = s.rawpointcolliderprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    isInside() {
      return s.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const mi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointprojection_free(i >>> 0, 1));
  class Ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ne.prototype);
      return e.__wbg_ptr = t, mi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointprojection_free(t, 0);
    }
    point() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    isInside() {
      return s.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
  }
  const fi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawquerypipeline_free(i >>> 0, 1));
  class Tr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawquerypipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawquerypipeline_new();
      return this.__wbg_ptr = t >>> 0, fi.register(this, this.__wbg_ptr, this), this;
    }
    update(t) {
      d(t, $), s.rawquerypipeline_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    castRay(t, e, r, n, o, c, l, _, h, u, w) {
      try {
        d(t, J), d(e, $), d(r, p), d(n, p);
        const b = s.rawquerypipeline_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(u), k(u) ? 0 : u, X(w));
        return b === 0 ? void 0 : Dr.__wrap(b);
      } finally {
        O[U++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, u, w) {
      try {
        d(t, J), d(e, $), d(r, p), d(n, p);
        const b = s.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(u), k(u) ? 0 : u, X(w));
        return b === 0 ? void 0 : Oe.__wrap(b);
      } finally {
        O[U++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, u, w, b) {
      try {
        d(t, J), d(e, $), d(r, p), d(n, p), s.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, X(l), _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, X(b));
      } finally {
        O[U++] = void 0, O[U++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, u) {
      try {
        const f = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, J), d(e, $), d(r, p), d(n, L), d(o, D), s.rawquerypipeline_intersectionWithShape(f, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, X(u));
        var w = ot().getInt32(f + 4 * 0, true), b = ot().getFloat64(f + 8 * 1, true);
        return w === 0 ? void 0 : b;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), O[U++] = void 0;
      }
    }
    projectPoint(t, e, r, n, o, c, l, _, h) {
      try {
        d(t, J), d(e, $), d(r, p);
        const u = s.rawquerypipeline_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, X(h));
        return u === 0 ? void 0 : Ae.__wrap(u);
      } finally {
        O[U++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _) {
      try {
        d(t, J), d(e, $), d(r, p);
        const h = s.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, k(o) ? 4294967297 : o >>> 0, !k(c), k(c) ? 0 : c, !k(l), k(l) ? 0 : l, X(_));
        return h === 0 ? void 0 : Ae.__wrap(h);
      } finally {
        O[U++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h) {
      try {
        d(t, J), d(e, $), d(r, p), s.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, X(n), o, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, X(h));
      } finally {
        O[U++] = void 0, O[U++] = void 0;
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, u, w, b, f, C) {
      try {
        d(t, J), d(e, $), d(r, p), d(n, L), d(o, p), d(c, D);
        const T = s.rawquerypipeline_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, _, h, u, k(w) ? 4294967297 : w >>> 0, !k(b), k(b) ? 0 : b, !k(f), k(f) ? 0 : f, X(C));
        return T === 0 ? void 0 : Be.__wrap(T);
      } finally {
        O[U++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, u, w) {
      try {
        d(t, J), d(e, $), d(r, p), d(n, L), d(o, D), s.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, X(c), l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(u), k(u) ? 0 : u, X(w));
      } finally {
        O[U++] = void 0, O[U++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      try {
        d(t, p), d(e, p), s.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, X(r));
      } finally {
        O[U++] = void 0;
      }
    }
  }
  const yi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderhit_free(i >>> 0, 1));
  class Dr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Dr.prototype);
      return e.__wbg_ptr = t, yi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderhit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    timeOfImpact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
  }
  const vi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderintersection_free(i >>> 0, 1));
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, vi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderintersection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const Si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrayintersection_free(i >>> 0, 1));
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, Si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Si.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrayintersection_free(t, 0);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrigidbodyset_free(i >>> 0, 1));
  class J {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J.prototype);
      return e.__wbg_ptr = t, or.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, or.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrigidbodyset_free(t, 0);
    }
    rbTranslation(t) {
      const e = s.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbRotation(t) {
      const e = s.rawrigidbodyset_rbRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbSleep(t) {
      s.rawrigidbodyset_rbSleep(this.__wbg_ptr, t);
    }
    rbIsSleeping(t) {
      return s.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, t) !== 0;
    }
    rbIsMoving(t) {
      return s.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, t) !== 0;
    }
    rbNextTranslation(t) {
      const e = s.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbNextRotation(t) {
      const e = s.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbSetTranslation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbSetRotation(t, e, r, n, o, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, o, c);
    }
    rbSetLinvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetAngvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, n) {
      s.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, n);
    }
    rbSetNextKinematicRotation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, $), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, o, c) {
      d(r, p), d(n, p), d(o, L), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
    }
    rbLinvel(t) {
      const e = s.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbAngvel(t) {
      const e = s.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbVelocityAtPoint(t, e) {
      d(e, p);
      const r = s.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, t, e.__wbg_ptr);
      return p.__wrap(r);
    }
    rbLockTranslations(t, e, r) {
      s.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledTranslations(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, n, o);
    }
    rbLockRotations(t, e, r) {
      s.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, n, o);
    }
    rbDominanceGroup(t) {
      return s.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, t);
    }
    rbSetDominanceGroup(t, e) {
      s.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, t, e);
    }
    rbEnableCcd(t, e) {
      s.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, t, e);
    }
    rbSetSoftCcdPrediction(t, e) {
      s.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, t, e);
    }
    rbMass(t) {
      return s.rawrigidbodyset_rbMass(this.__wbg_ptr, t);
    }
    rbInvMass(t) {
      return s.rawrigidbodyset_rbInvMass(this.__wbg_ptr, t);
    }
    rbEffectiveInvMass(t) {
      const e = s.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbLocalCom(t) {
      const e = s.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbWorldCom(t) {
      const e = s.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbInvPrincipalInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbPrincipalInertiaLocalFrame(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbEffectiveWorldInvInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, t);
      return Pe.__wrap(e);
    }
    rbEffectiveAngularInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
      return Pe.__wrap(e);
    }
    rbWakeUp(t) {
      s.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, t);
    }
    rbIsCcdEnabled(t) {
      return s.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbSoftCcdPrediction(t) {
      return s.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, t);
    }
    rbNumColliders(t) {
      return s.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, t) >>> 0;
    }
    rbCollider(t, e) {
      return s.rawrigidbodyset_rbCollider(this.__wbg_ptr, t, e);
    }
    rbBodyType(t) {
      return s.rawrigidbodyset_rbBodyType(this.__wbg_ptr, t);
    }
    rbSetBodyType(t, e, r) {
      s.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, t, e, r);
    }
    rbIsFixed(t) {
      return s.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, t) !== 0;
    }
    rbIsKinematic(t) {
      return s.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, t) !== 0;
    }
    rbIsDynamic(t) {
      return s.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, t) !== 0;
    }
    rbLinearDamping(t) {
      return s.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, t);
    }
    rbAngularDamping(t) {
      return s.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, t);
    }
    rbSetLinearDamping(t, e) {
      s.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, t, e);
    }
    rbSetAngularDamping(t, e) {
      s.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, t, e);
    }
    rbSetEnabled(t, e) {
      s.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, t, e);
    }
    rbIsEnabled(t) {
      return s.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbGravityScale(t) {
      return s.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, t);
    }
    rbSetGravityScale(t, e, r) {
      s.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, t, e, r);
    }
    rbResetForces(t, e) {
      s.rawrigidbodyset_rbResetForces(this.__wbg_ptr, t, e);
    }
    rbResetTorques(t, e) {
      s.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, t, e);
    }
    rbAddForce(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddTorque(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyTorqueImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddForceAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbApplyImpulseAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbAdditionalSolverIterations(t) {
      return s.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, t) >>> 0;
    }
    rbSetAdditionalSolverIterations(t, e) {
      s.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, t, e);
    }
    rbUserData(t) {
      return s.rawrigidbodyset_rbUserData(this.__wbg_ptr, t) >>> 0;
    }
    rbSetUserData(t, e) {
      s.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, t, e);
    }
    rbUserForce(t) {
      const e = s.rawrigidbodyset_rbUserForce(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbUserTorque(t) {
      const e = s.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    constructor() {
      const t = s.rawrigidbodyset_new();
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, n, o, c, l, _, h, u, w, b, f, C, T, z, I, v, S, x, pt, ht, Z, Tt, vt, Et) {
      return d(e, p), d(r, L), d(l, p), d(_, p), d(h, p), d(u, p), d(w, L), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, b, f, C, T, z, I, v, S, x, pt, ht, Z, Tt, vt, Et);
    }
    remove(t, e, r, n, o) {
      d(e, It), d(r, $), d(n, Pt), d(o, zt), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, X(t));
      } finally {
        O[U++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, $), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrotation_free(i >>> 0, 1));
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawrotation_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    static identity() {
      const t = s.rawrotation_identity();
      return L.__wrap(t);
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
      return s.rawrotation_w(this.__wbg_ptr);
    }
  }
  const Ri = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
  class Pe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pe.prototype);
      return e.__wbg_ptr = t, Ri.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ri.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawsdpmatrix3_free(t, 0);
    }
    elements() {
      const t = s.rawsdpmatrix3_elements(this.__wbg_ptr);
      return be(t);
    }
  }
  const Ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawserializationpipeline_free(i >>> 0, 1));
  class ja {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawserializationpipeline_new();
      return this.__wbg_ptr = t >>> 0, Ci.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      d(t, p), d(e, Ut), d(r, It), d(n, qt), d(o, Bt), d(c, J), d(l, $), d(_, Pt), d(h, zt);
      const u = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return be(u);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, tt(t));
      return e === 0 ? void 0 : zr.__wrap(e);
    }
  }
  const Ei = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshape_free(i >>> 0, 1));
  class D {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(D.prototype);
      return e.__wbg_ptr = t, Ei.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ei.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const n = s.rawshape_cuboid(t, e, r);
      return D.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = s.rawshape_roundCuboid(t, e, r, n);
      return D.__wrap(o);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return D.__wrap(e);
    }
    static halfspace(t) {
      d(t, p);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return D.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return D.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return D.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = s.rawshape_roundCylinder(t, e, r);
      return D.__wrap(n);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return D.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = s.rawshape_roundCone(t, e, r);
      return D.__wrap(n);
    }
    static polyline(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = gt, o = je(e, s.__wbindgen_export_2), c = gt, l = s.rawshape_polyline(r, n, o, c);
      return D.__wrap(l);
    }
    static trimesh(t, e, r) {
      const n = Ht(t, s.__wbindgen_export_2), o = gt, c = je(e, s.__wbindgen_export_2), l = gt, _ = s.rawshape_trimesh(n, o, c, l, r);
      return _ === 0 ? void 0 : D.__wrap(_);
    }
    static heightfield(t, e, r, n, o) {
      const c = Ht(r, s.__wbindgen_export_2), l = gt;
      d(n, p);
      const _ = s.rawshape_heightfield(t, e, c, l, n.__wbg_ptr, o);
      return D.__wrap(_);
    }
    static segment(t, e) {
      d(t, p), d(e, p);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return D.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return D.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const o = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return D.__wrap(o);
    }
    static convexHull(t) {
      const e = Ht(t, s.__wbindgen_export_2), r = gt, n = s.rawshape_convexHull(e, r);
      return n === 0 ? void 0 : D.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = gt, o = s.rawshape_roundConvexHull(r, n, e);
      return o === 0 ? void 0 : D.__wrap(o);
    }
    static convexMesh(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = gt, o = je(e, s.__wbindgen_export_2), c = gt, l = s.rawshape_convexMesh(r, n, o, c);
      return l === 0 ? void 0 : D.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = Ht(t, s.__wbindgen_export_2), o = gt, c = je(e, s.__wbindgen_export_2), l = gt, _ = s.rawshape_roundConvexMesh(n, o, c, l, r);
      return _ === 0 ? void 0 : D.__wrap(_);
    }
    castShape(t, e, r, n, o, c, l, _, h, u) {
      d(t, p), d(e, L), d(r, p), d(n, D), d(o, p), d(c, L), d(l, p);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u);
      return w === 0 ? void 0 : Ge.__wrap(w);
    }
    intersectsShape(t, e, r, n, o) {
      return d(t, p), d(e, L), d(r, D), d(n, p), d(o, L), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, n, o, c) {
      d(t, p), d(e, L), d(r, D), d(n, p), d(o, L);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
      return l === 0 ? void 0 : me.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, p), d(e, L), d(r, p), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      d(t, p), d(e, L), d(r, p);
      const o = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return Ne.__wrap(o);
    }
    intersectsRay(t, e, r, n, o) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o) !== 0;
    }
    castRay(t, e, r, n, o, c) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
    }
    castRayAndGetNormal(t, e, r, n, o, c) {
      d(t, p), d(e, L), d(r, p), d(n, p);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
      return l === 0 ? void 0 : He.__wrap(l);
    }
  }
  const xi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecasthit_free(i >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, xi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecasthit_free(t, 0);
    }
    time_of_impact() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawshapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawshapecasthit_normal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawshapecasthit_normal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const ji = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecontact_free(i >>> 0, 1));
  class me {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(me.prototype);
      return e.__wbg_ptr = t, ji.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ji.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecontact_free(t, 0);
    }
    distance() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    point1() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    point2() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawvector_free(i >>> 0, 1));
  class p {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawvector_free(t, 0);
    }
    static zero() {
      const t = s.rawvector_zero();
      return p.__wrap(t);
    }
    constructor(t, e, r) {
      const n = s.rawvector_new(t, e, r);
      return this.__wbg_ptr = n >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    set x(t) {
      s.rawvector_set_x(this.__wbg_ptr, t);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set y(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    set z(t) {
      s.rawvector_set_z(this.__wbg_ptr, t);
    }
    xyz() {
      const t = s.rawvector_xyz(this.__wbg_ptr);
      return p.__wrap(t);
    }
    yxz() {
      const t = s.rawvector_yxz(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zxy() {
      const t = s.rawvector_zxy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    xzy() {
      const t = s.rawvector_xzy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    yzx() {
      const t = s.rawvector_yzx(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zyx() {
      const t = s.rawvector_zyx(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  function Aa(i, t, e, r) {
    const n = G(i).bind(G(t), G(e), G(r));
    return tt(n);
  }
  function Pa(i) {
    const t = G(i).buffer;
    return tt(t);
  }
  function Ia() {
    return jr(function(i, t, e) {
      const r = G(i).call(G(t), G(e));
      return tt(r);
    }, arguments);
  }
  function za() {
    return jr(function(i, t, e, r) {
      const n = G(i).call(G(t), G(e), G(r));
      return tt(n);
    }, arguments);
  }
  function Ta() {
    return jr(function(i, t, e, r, n) {
      const o = G(i).call(G(t), G(e), G(r), G(n));
      return tt(o);
    }, arguments);
  }
  function Da(i) {
    return G(i).length;
  }
  function ka(i) {
    return G(i).length;
  }
  function Ma(i) {
    const t = new Uint8Array(G(i));
    return tt(t);
  }
  function Fa(i, t, e) {
    const r = new Uint8Array(G(i), t >>> 0, e >>> 0);
    return tt(r);
  }
  function La(i, t, e) {
    const r = new Float32Array(G(i), t >>> 0, e >>> 0);
    return tt(r);
  }
  function Ba(i) {
    const t = new Float32Array(i >>> 0);
    return tt(t);
  }
  function Na(i) {
    const t = Ar.__wrap(i);
    return tt(t);
  }
  function Oa(i) {
    const t = Oe.__wrap(i);
    return tt(t);
  }
  function Ha(i, t, e) {
    G(i).set(G(t), e >>> 0);
  }
  function Ga(i, t, e) {
    G(i).set(G(t), e >>> 0);
  }
  function Wa(i) {
    const t = G(i);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function qa(i) {
    return typeof G(i) == "function";
  }
  function Ua() {
    const i = s.memory;
    return tt(i);
  }
  function Va(i, t) {
    const e = G(t), r = typeof e == "number" ? e : void 0;
    ot().setFloat64(i + 8 * 1, k(r) ? 0 : r, true), ot().setInt32(i + 4 * 0, !k(r), true);
  }
  function Ja(i) {
    return tt(i);
  }
  function Ka(i) {
    be(i);
  }
  function Xa(i, t) {
    throw new Error(ya(i, t));
  }
  URL = globalThis.URL;
  const a = await pa({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: Ja,
      __wbindgen_boolean_get: Wa,
      __wbindgen_object_drop_ref: Ka,
      __wbindgen_number_get: Va,
      __wbindgen_is_function: qa,
      __wbg_rawraycolliderintersection_new: Oa,
      __wbg_rawcontactforceevent_new: Na,
      __wbg_call_7cccdd69e0791ae2: Ia,
      __wbg_call_833bed5770ea2041: za,
      __wbg_call_b8adc8b1d0a0d8eb: Ta,
      __wbg_bind_c8359b1cba058168: Aa,
      __wbg_buffer_609cc3eee51ed158: Pa,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Fa,
      __wbg_new_a12002a7f91c75be: Ma,
      __wbg_set_65595bdd868b3009: Ga,
      __wbg_length_a446193dc22c12f8: ka,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: La,
      __wbg_set_10bad9bee0e9c58b: Ha,
      __wbg_length_3b4f022188ae8db6: Da,
      __wbg_newwithlength_5a5efe313cfd59f1: Ba,
      __wbindgen_throw: Xa,
      __wbindgen_memory: Ua
    }
  }, ua), $a = a.memory, Ya = a.version, Za = a.__wbg_rawkinematiccharactercontroller_free, Qa = a.rawkinematiccharactercontroller_new, to = a.rawkinematiccharactercontroller_setUp, eo = a.rawkinematiccharactercontroller_normalNudgeFactor, ro = a.rawkinematiccharactercontroller_setNormalNudgeFactor, io = a.rawkinematiccharactercontroller_setOffset, no = a.rawkinematiccharactercontroller_slideEnabled, so = a.rawkinematiccharactercontroller_setSlideEnabled, ao = a.rawkinematiccharactercontroller_autostepMaxHeight, oo = a.rawkinematiccharactercontroller_autostepMinWidth, co = a.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, lo = a.rawkinematiccharactercontroller_autostepEnabled, _o = a.rawkinematiccharactercontroller_enableAutostep, ho = a.rawkinematiccharactercontroller_disableAutostep, wo = a.rawkinematiccharactercontroller_maxSlopeClimbAngle, uo = a.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, po = a.rawkinematiccharactercontroller_minSlopeSlideAngle, go = a.rawkinematiccharactercontroller_setMinSlopeSlideAngle, bo = a.rawkinematiccharactercontroller_snapToGroundDistance, mo = a.rawkinematiccharactercontroller_enableSnapToGround, fo = a.rawkinematiccharactercontroller_disableSnapToGround, yo = a.rawkinematiccharactercontroller_snapToGroundEnabled, vo = a.rawkinematiccharactercontroller_computeColliderMovement, So = a.rawkinematiccharactercontroller_computedMovement, Ro = a.rawkinematiccharactercontroller_computedGrounded, Co = a.rawkinematiccharactercontroller_numComputedCollisions, Eo = a.rawkinematiccharactercontroller_computedCollision, xo = a.__wbg_rawcharactercollision_free, jo = a.rawcharactercollision_new, Ao = a.rawcharactercollision_handle, Po = a.rawcharactercollision_translationDeltaApplied, Io = a.rawcharactercollision_translationDeltaRemaining, zo = a.rawcharactercollision_toi, To = a.rawcharactercollision_worldWitness1, Do = a.rawcharactercollision_worldWitness2, ko = a.rawcharactercollision_worldNormal1, Mo = a.rawcharactercollision_worldNormal2, Fo = a.__wbg_rawpidcontroller_free, Lo = a.rawpidcontroller_new, Bo = a.rawpidcontroller_set_kp, No = a.rawpidcontroller_set_ki, Oo = a.rawpidcontroller_set_kd, Ho = a.rawpidcontroller_set_axes_mask, Go = a.rawpidcontroller_reset_integrals, Wo = a.rawpidcontroller_apply_linear_correction, qo = a.rawpidcontroller_apply_angular_correction, Uo = a.rawpidcontroller_linear_correction, Vo = a.rawpidcontroller_angular_correction, Jo = a.__wbg_rawdynamicraycastvehiclecontroller_free, Ko = a.rawdynamicraycastvehiclecontroller_new, Xo = a.rawdynamicraycastvehiclecontroller_current_vehicle_speed, $o = a.rawdynamicraycastvehiclecontroller_chassis, Yo = a.rawdynamicraycastvehiclecontroller_index_up_axis, Zo = a.rawdynamicraycastvehiclecontroller_set_index_up_axis, Qo = a.rawdynamicraycastvehiclecontroller_index_forward_axis, tc = a.rawdynamicraycastvehiclecontroller_set_index_forward_axis, ec = a.rawdynamicraycastvehiclecontroller_add_wheel, rc = a.rawdynamicraycastvehiclecontroller_num_wheels, ic = a.rawdynamicraycastvehiclecontroller_update_vehicle, nc = a.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, sc = a.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, ac = a.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, oc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, cc = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, lc = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, _c = a.rawdynamicraycastvehiclecontroller_wheel_radius, dc = a.rawdynamicraycastvehiclecontroller_set_wheel_radius, hc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, wc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, uc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, pc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, gc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, bc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, mc = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, fc = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, yc = a.rawdynamicraycastvehiclecontroller_wheel_brake, vc = a.rawdynamicraycastvehiclecontroller_set_wheel_brake, Sc = a.rawdynamicraycastvehiclecontroller_wheel_steering, Rc = a.rawdynamicraycastvehiclecontroller_set_wheel_steering, Cc = a.rawdynamicraycastvehiclecontroller_wheel_engine_force, Ec = a.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, xc = a.rawdynamicraycastvehiclecontroller_wheel_direction_cs, jc = a.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, Ac = a.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Pc = a.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Ic = a.rawdynamicraycastvehiclecontroller_wheel_friction_slip, zc = a.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Tc = a.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Dc = a.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, kc = a.rawdynamicraycastvehiclecontroller_wheel_rotation, Mc = a.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Fc = a.rawdynamicraycastvehiclecontroller_wheel_side_impulse, Lc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_force, Bc = a.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, Nc = a.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Oc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Hc = a.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, Gc = a.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, Wc = a.rawdynamicraycastvehiclecontroller_wheel_ground_object, qc = a.__wbg_rawccdsolver_free, Uc = a.rawccdsolver_new, Vc = a.rawimpulsejointset_jointType, Jc = a.rawimpulsejointset_jointBodyHandle1, Kc = a.rawimpulsejointset_jointBodyHandle2, Xc = a.rawimpulsejointset_jointFrameX1, $c = a.rawimpulsejointset_jointFrameX2, Yc = a.rawimpulsejointset_jointAnchor1, Zc = a.rawimpulsejointset_jointAnchor2, Qc = a.rawimpulsejointset_jointSetAnchor1, tl = a.rawimpulsejointset_jointSetAnchor2, el = a.rawimpulsejointset_jointContactsEnabled, rl = a.rawimpulsejointset_jointSetContactsEnabled, il = a.rawimpulsejointset_jointLimitsEnabled, nl = a.rawimpulsejointset_jointLimitsMin, sl = a.rawimpulsejointset_jointLimitsMax, al = a.rawimpulsejointset_jointSetLimits, ol = a.rawimpulsejointset_jointConfigureMotorModel, cl = a.rawimpulsejointset_jointConfigureMotorVelocity, ll = a.rawimpulsejointset_jointConfigureMotorPosition, _l = a.rawimpulsejointset_jointConfigureMotor, dl = a.__wbg_rawimpulsejointset_free, hl = a.rawimpulsejointset_new, wl = a.rawimpulsejointset_createJoint, ul = a.rawimpulsejointset_remove, pl = a.rawimpulsejointset_len, gl = a.rawimpulsejointset_contains, bl = a.rawimpulsejointset_forEachJointHandle, ml = a.rawimpulsejointset_forEachJointAttachedToRigidBody, fl = a.__wbg_rawintegrationparameters_free, yl = a.rawintegrationparameters_new, vl = a.rawintegrationparameters_dt, Sl = a.rawintegrationparameters_contact_erp, Rl = a.rawintegrationparameters_numSolverIterations, Cl = a.rawintegrationparameters_minIslandSize, El = a.rawintegrationparameters_maxCcdSubsteps, xl = a.rawintegrationparameters_lengthUnit, jl = a.rawintegrationparameters_set_dt, Al = a.rawintegrationparameters_set_contact_natural_frequency, Pl = a.rawintegrationparameters_set_normalizedAllowedLinearError, Il = a.rawintegrationparameters_set_normalizedPredictionDistance, zl = a.rawintegrationparameters_set_numSolverIterations, Tl = a.rawintegrationparameters_set_minIslandSize, Dl = a.rawintegrationparameters_set_maxCcdSubsteps, kl = a.rawintegrationparameters_set_lengthUnit, Ml = a.rawintegrationparameters_switchToStandardPgsSolver, Fl = a.rawintegrationparameters_switchToSmallStepsPgsSolver, Ll = a.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, Bl = a.__wbg_rawislandmanager_free, Nl = a.rawislandmanager_new, Ol = a.rawislandmanager_forEachActiveRigidBodyHandle, Hl = a.__wbg_rawgenericjoint_free, Gl = a.rawgenericjoint_generic, Wl = a.rawgenericjoint_spring, ql = a.rawgenericjoint_rope, Ul = a.rawgenericjoint_spherical, Vl = a.rawgenericjoint_prismatic, Jl = a.rawgenericjoint_fixed, Kl = a.rawgenericjoint_revolute, Xl = a.rawmultibodyjointset_jointType, $l = a.rawmultibodyjointset_jointFrameX1, Yl = a.rawmultibodyjointset_jointFrameX2, Zl = a.rawmultibodyjointset_jointAnchor1, Ql = a.rawmultibodyjointset_jointAnchor2, t_ = a.rawmultibodyjointset_jointContactsEnabled, e_ = a.rawmultibodyjointset_jointSetContactsEnabled, r_ = a.rawmultibodyjointset_jointLimitsEnabled, i_ = a.rawmultibodyjointset_jointLimitsMin, n_ = a.rawmultibodyjointset_jointLimitsMax, s_ = a.__wbg_rawmultibodyjointset_free, a_ = a.rawmultibodyjointset_new, o_ = a.rawmultibodyjointset_createJoint, c_ = a.rawmultibodyjointset_remove, l_ = a.rawmultibodyjointset_contains, __ = a.rawmultibodyjointset_forEachJointHandle, d_ = a.rawmultibodyjointset_forEachJointAttachedToRigidBody, h_ = a.rawrigidbodyset_rbTranslation, w_ = a.rawrigidbodyset_rbRotation, u_ = a.rawrigidbodyset_rbSleep, p_ = a.rawrigidbodyset_rbIsSleeping, g_ = a.rawrigidbodyset_rbIsMoving, b_ = a.rawrigidbodyset_rbNextTranslation, m_ = a.rawrigidbodyset_rbNextRotation, f_ = a.rawrigidbodyset_rbSetTranslation, y_ = a.rawrigidbodyset_rbSetRotation, v_ = a.rawrigidbodyset_rbSetLinvel, S_ = a.rawrigidbodyset_rbSetAngvel, R_ = a.rawrigidbodyset_rbSetNextKinematicTranslation, C_ = a.rawrigidbodyset_rbSetNextKinematicRotation, E_ = a.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, x_ = a.rawrigidbodyset_rbSetAdditionalMass, j_ = a.rawrigidbodyset_rbSetAdditionalMassProperties, A_ = a.rawrigidbodyset_rbLinvel, P_ = a.rawrigidbodyset_rbAngvel, I_ = a.rawrigidbodyset_rbVelocityAtPoint, z_ = a.rawrigidbodyset_rbLockTranslations, T_ = a.rawrigidbodyset_rbSetEnabledTranslations, D_ = a.rawrigidbodyset_rbLockRotations, k_ = a.rawrigidbodyset_rbSetEnabledRotations, M_ = a.rawrigidbodyset_rbDominanceGroup, F_ = a.rawrigidbodyset_rbSetDominanceGroup, L_ = a.rawrigidbodyset_rbEnableCcd, B_ = a.rawrigidbodyset_rbSetSoftCcdPrediction, N_ = a.rawrigidbodyset_rbMass, O_ = a.rawrigidbodyset_rbInvMass, H_ = a.rawrigidbodyset_rbEffectiveInvMass, G_ = a.rawrigidbodyset_rbLocalCom, W_ = a.rawrigidbodyset_rbWorldCom, q_ = a.rawrigidbodyset_rbInvPrincipalInertiaSqrt, U_ = a.rawrigidbodyset_rbPrincipalInertiaLocalFrame, V_ = a.rawrigidbodyset_rbPrincipalInertia, J_ = a.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, K_ = a.rawrigidbodyset_rbEffectiveAngularInertia, X_ = a.rawrigidbodyset_rbWakeUp, $_ = a.rawrigidbodyset_rbIsCcdEnabled, Y_ = a.rawrigidbodyset_rbSoftCcdPrediction, Z_ = a.rawrigidbodyset_rbNumColliders, Q_ = a.rawrigidbodyset_rbCollider, td = a.rawrigidbodyset_rbBodyType, ed = a.rawrigidbodyset_rbSetBodyType, rd = a.rawrigidbodyset_rbIsFixed, id = a.rawrigidbodyset_rbIsKinematic, nd = a.rawrigidbodyset_rbIsDynamic, sd = a.rawrigidbodyset_rbLinearDamping, ad = a.rawrigidbodyset_rbAngularDamping, od = a.rawrigidbodyset_rbSetLinearDamping, cd = a.rawrigidbodyset_rbSetAngularDamping, ld = a.rawrigidbodyset_rbSetEnabled, _d = a.rawrigidbodyset_rbIsEnabled, dd = a.rawrigidbodyset_rbGravityScale, hd = a.rawrigidbodyset_rbSetGravityScale, wd = a.rawrigidbodyset_rbResetForces, ud = a.rawrigidbodyset_rbResetTorques, pd = a.rawrigidbodyset_rbAddForce, gd = a.rawrigidbodyset_rbApplyImpulse, bd = a.rawrigidbodyset_rbAddTorque, md = a.rawrigidbodyset_rbApplyTorqueImpulse, fd = a.rawrigidbodyset_rbAddForceAtPoint, yd = a.rawrigidbodyset_rbApplyImpulseAtPoint, vd = a.rawrigidbodyset_rbAdditionalSolverIterations, Sd = a.rawrigidbodyset_rbSetAdditionalSolverIterations, Rd = a.rawrigidbodyset_rbUserData, Cd = a.rawrigidbodyset_rbSetUserData, Ed = a.rawrigidbodyset_rbUserForce, xd = a.rawrigidbodyset_rbUserTorque, jd = a.__wbg_rawrigidbodyset_free, Ad = a.rawrigidbodyset_new, Pd = a.rawrigidbodyset_createRigidBody, Id = a.rawrigidbodyset_remove, zd = a.rawrigidbodyset_contains, Td = a.rawrigidbodyset_forEachRigidBodyHandle, Dd = a.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, kd = a.__wbg_rawbroadphase_free, Md = a.rawbroadphase_new, Fd = a.rawcolliderset_coTranslation, Ld = a.rawcolliderset_coRotation, Bd = a.rawcolliderset_coSetTranslation, Nd = a.rawcolliderset_coSetTranslationWrtParent, Od = a.rawcolliderset_coSetRotation, Hd = a.rawcolliderset_coSetRotationWrtParent, Gd = a.rawcolliderset_coIsSensor, Wd = a.rawcolliderset_coShapeType, qd = a.rawcolliderset_coHalfspaceNormal, Ud = a.rawcolliderset_coHalfExtents, Vd = a.rawcolliderset_coSetHalfExtents, Jd = a.rawcolliderset_coRadius, Kd = a.rawcolliderset_coSetRadius, Xd = a.rawcolliderset_coHalfHeight, $d = a.rawcolliderset_coSetHalfHeight, Yd = a.rawcolliderset_coRoundRadius, Zd = a.rawcolliderset_coSetRoundRadius, Qd = a.rawcolliderset_coVertices, th = a.rawcolliderset_coIndices, eh = a.rawcolliderset_coTriMeshFlags, rh = a.rawcolliderset_coHeightFieldFlags, ih = a.rawcolliderset_coHeightfieldHeights, nh = a.rawcolliderset_coHeightfieldScale, sh = a.rawcolliderset_coHeightfieldNRows, ah = a.rawcolliderset_coHeightfieldNCols, oh = a.rawcolliderset_coParent, ch = a.rawcolliderset_coSetEnabled, lh = a.rawcolliderset_coIsEnabled, _h = a.rawcolliderset_coSetContactSkin, dh = a.rawcolliderset_coContactSkin, hh = a.rawcolliderset_coFriction, wh = a.rawcolliderset_coRestitution, uh = a.rawcolliderset_coDensity, ph = a.rawcolliderset_coMass, gh = a.rawcolliderset_coVolume, bh = a.rawcolliderset_coCollisionGroups, mh = a.rawcolliderset_coSolverGroups, fh = a.rawcolliderset_coActiveHooks, yh = a.rawcolliderset_coActiveCollisionTypes, vh = a.rawcolliderset_coActiveEvents, Sh = a.rawcolliderset_coContactForceEventThreshold, Rh = a.rawcolliderset_coContainsPoint, Ch = a.rawcolliderset_coCastShape, Eh = a.rawcolliderset_coCastCollider, xh = a.rawcolliderset_coIntersectsShape, jh = a.rawcolliderset_coContactShape, Ah = a.rawcolliderset_coContactCollider, Ph = a.rawcolliderset_coProjectPoint, Ih = a.rawcolliderset_coIntersectsRay, zh = a.rawcolliderset_coCastRay, Th = a.rawcolliderset_coCastRayAndGetNormal, Dh = a.rawcolliderset_coSetSensor, kh = a.rawcolliderset_coSetRestitution, Mh = a.rawcolliderset_coSetFriction, Fh = a.rawcolliderset_coFrictionCombineRule, Lh = a.rawcolliderset_coSetFrictionCombineRule, Bh = a.rawcolliderset_coRestitutionCombineRule, Nh = a.rawcolliderset_coSetRestitutionCombineRule, Oh = a.rawcolliderset_coSetCollisionGroups, Hh = a.rawcolliderset_coSetSolverGroups, Gh = a.rawcolliderset_coSetActiveHooks, Wh = a.rawcolliderset_coSetActiveEvents, qh = a.rawcolliderset_coSetActiveCollisionTypes, Uh = a.rawcolliderset_coSetShape, Vh = a.rawcolliderset_coSetContactForceEventThreshold, Jh = a.rawcolliderset_coSetDensity, Kh = a.rawcolliderset_coSetMass, Xh = a.rawcolliderset_coSetMassProperties, $h = a.__wbg_rawcolliderset_free, Yh = a.rawcolliderset_new, Zh = a.rawcolliderset_len, Qh = a.rawcolliderset_contains, tw = a.rawcolliderset_createCollider, ew = a.rawcolliderset_remove, rw = a.rawcolliderset_forEachColliderHandle, iw = a.__wbg_rawshapecontact_free, nw = a.__wbg_rawnarrowphase_free, sw = a.rawnarrowphase_new, aw = a.rawnarrowphase_contact_pairs_with, ow = a.rawnarrowphase_contact_pair, cw = a.rawnarrowphase_intersection_pairs_with, lw = a.rawnarrowphase_intersection_pair, _w = a.__wbg_rawcontactmanifold_free, dw = a.rawcontactpair_collider1, hw = a.rawcontactpair_collider2, ww = a.rawcontactpair_numContactManifolds, uw = a.rawcontactpair_contactManifold, pw = a.rawcontactmanifold_normal, gw = a.rawcontactmanifold_local_n1, bw = a.rawcontactmanifold_local_n2, mw = a.rawcontactmanifold_subshape1, fw = a.rawcontactmanifold_subshape2, yw = a.rawcontactmanifold_num_contacts, vw = a.rawcontactmanifold_contact_local_p1, Sw = a.rawcontactmanifold_contact_local_p2, Rw = a.rawcontactmanifold_contact_dist, Cw = a.rawcontactmanifold_contact_fid1, Ew = a.rawcontactmanifold_contact_fid2, xw = a.rawcontactmanifold_contact_impulse, jw = a.rawcontactmanifold_contact_tangent_impulse_x, Aw = a.rawcontactmanifold_contact_tangent_impulse_y, Pw = a.rawcontactmanifold_num_solver_contacts, Iw = a.rawcontactmanifold_solver_contact_point, zw = a.rawcontactmanifold_solver_contact_dist, Tw = a.rawcontactmanifold_solver_contact_friction, Dw = a.rawcontactmanifold_solver_contact_restitution, kw = a.rawcontactmanifold_solver_contact_tangent_velocity, Mw = a.__wbg_rawpointprojection_free, Fw = a.rawpointprojection_point, Lw = a.rawpointprojection_isInside, Bw = a.__wbg_rawpointcolliderprojection_free, Nw = a.rawpointcolliderprojection_colliderHandle, Ow = a.rawpointcolliderprojection_point, Hw = a.rawpointcolliderprojection_isInside, Gw = a.rawpointcolliderprojection_featureType, Ww = a.rawpointcolliderprojection_featureId, qw = a.__wbg_rawrayintersection_free, Uw = a.__wbg_rawraycolliderhit_free, Vw = a.__wbg_rawshape_free, Jw = a.rawshape_cuboid, Kw = a.rawshape_roundCuboid, Xw = a.rawshape_ball, $w = a.rawshape_halfspace, Yw = a.rawshape_capsule, Zw = a.rawshape_cylinder, Qw = a.rawshape_roundCylinder, tu = a.rawshape_cone, eu = a.rawshape_roundCone, ru = a.rawshape_polyline, iu = a.rawshape_trimesh, nu = a.rawshape_heightfield, su = a.rawshape_segment, au = a.rawshape_triangle, ou = a.rawshape_roundTriangle, cu = a.rawshape_convexHull, lu = a.rawshape_roundConvexHull, _u = a.rawshape_convexMesh, du = a.rawshape_roundConvexMesh, hu = a.rawshape_castShape, wu = a.rawshape_intersectsShape, uu = a.rawshape_contactShape, pu = a.rawshape_containsPoint, gu = a.rawshape_projectPoint, bu = a.rawshape_intersectsRay, mu = a.rawshape_castRay, fu = a.rawshape_castRayAndGetNormal, yu = a.__wbg_rawshapecasthit_free, vu = a.rawshapecasthit_witness1, Su = a.rawshapecasthit_normal1, Ru = a.rawshapecasthit_normal2, Cu = a.__wbg_rawcollidershapecasthit_free, Eu = a.rawcollidershapecasthit_time_of_impact, xu = a.rawcollidershapecasthit_witness1, ju = a.rawcollidershapecasthit_witness2, Au = a.rawrotation_new, Pu = a.rawrotation_identity, Iu = a.rawrotation_x, zu = a.rawrotation_w, Tu = a.rawvector_zero, Du = a.rawvector_new, ku = a.rawvector_set_x, Mu = a.rawvector_set_z, Fu = a.rawvector_xyz, Lu = a.rawvector_yxz, Bu = a.rawvector_zxy, Nu = a.rawvector_xzy, Ou = a.rawvector_yzx, Hu = a.rawvector_zyx, Gu = a.rawsdpmatrix3_elements, Wu = a.__wbg_rawdebugrenderpipeline_free, qu = a.rawdebugrenderpipeline_new, Uu = a.rawdebugrenderpipeline_vertices, Vu = a.rawdebugrenderpipeline_colors, Ju = a.rawdebugrenderpipeline_render, Ku = a.__wbg_raweventqueue_free, Xu = a.__wbg_rawcontactforceevent_free, $u = a.rawcontactforceevent_collider2, Yu = a.rawcontactforceevent_total_force, Zu = a.rawcontactforceevent_total_force_magnitude, Qu = a.rawcontactforceevent_max_force_direction, tp = a.rawcontactforceevent_max_force_magnitude, ep = a.raweventqueue_new, rp = a.raweventqueue_drainCollisionEvents, ip = a.raweventqueue_drainContactForceEvents, np = a.raweventqueue_clear, sp = a.__wbg_rawphysicspipeline_free, ap = a.rawphysicspipeline_new, op = a.rawphysicspipeline_step, cp = a.rawphysicspipeline_stepWithEvents, lp = a.rawquerypipeline_new, _p = a.rawquerypipeline_update, dp = a.rawquerypipeline_castRay, hp = a.rawquerypipeline_castRayAndGetNormal, wp = a.rawquerypipeline_intersectionsWithRay, up = a.rawquerypipeline_intersectionWithShape, pp = a.rawquerypipeline_projectPoint, gp = a.rawquerypipeline_projectPointAndGetFeature, bp = a.rawquerypipeline_intersectionsWithPoint, mp = a.rawquerypipeline_castShape, fp = a.rawquerypipeline_intersectionsWithShape, yp = a.rawquerypipeline_collidersWithAabbIntersectingAabb, vp = a.__wbg_rawdeserializedworld_free, Sp = a.rawdeserializedworld_takeGravity, Rp = a.rawdeserializedworld_takeIntegrationParameters, Cp = a.rawdeserializedworld_takeIslandManager, Ep = a.rawdeserializedworld_takeBroadPhase, xp = a.rawdeserializedworld_takeNarrowPhase, jp = a.rawdeserializedworld_takeBodies, Ap = a.rawdeserializedworld_takeColliders, Pp = a.rawdeserializedworld_takeImpulseJoints, Ip = a.rawdeserializedworld_takeMultibodyJoints, zp = a.__wbg_rawserializationpipeline_free, Tp = a.rawserializationpipeline_new, Dp = a.rawserializationpipeline_serializeAll, kp = a.rawserializationpipeline_deserializeAll, Mp = a.rawcolliderset_isHandleValid, Fp = a.rawkinematiccharactercontroller_offset, Lp = a.rawintegrationparameters_normalizedAllowedLinearError, Bp = a.rawintegrationparameters_numAdditionalFrictionIterations, Np = a.rawintegrationparameters_numInternalPgsIterations, Op = a.rawrigidbodyset_len, Hp = a.rawshapecontact_distance, Gp = a.rawrayintersection_featureType, Wp = a.rawraycolliderintersection_colliderHandle, qp = a.rawrayintersection_time_of_impact, Up = a.rawraycolliderintersection_featureType, Vp = a.rawraycolliderhit_colliderHandle, Jp = a.rawraycolliderintersection_time_of_impact, Kp = a.rawcollidershapecasthit_colliderHandle, Xp = a.rawraycolliderhit_timeOfImpact, $p = a.rawshapecasthit_time_of_impact, Yp = a.rawrotation_y, Zp = a.rawrotation_z, Qp = a.rawvector_x, tg = a.rawvector_y, eg = a.rawvector_z, rg = a.rawcontactforceevent_collider1, ig = a.rawintegrationparameters_normalizedPredictionDistance, ng = a.__wbg_rawquerypipeline_free, sg = a.rawrayintersection_featureId, ag = a.rawraycolliderintersection_featureId, og = a.rawkinematiccharactercontroller_up, cg = a.rawshapecontact_normal2, lg = a.rawshapecontact_point1, _g = a.rawshapecontact_point2, dg = a.rawrayintersection_normal, hg = a.rawraycolliderintersection_normal, wg = a.rawshapecontact_normal1, ug = a.rawcollidershapecasthit_normal1, pg = a.rawcollidershapecasthit_normal2, gg = a.rawshapecasthit_witness2, bg = a.rawintegrationparameters_set_numAdditionalFrictionIterations, mg = a.rawintegrationparameters_set_numInternalPgsIterations, fg = a.rawvector_set_y, yg = a.__wbg_rawrotation_free, vg = a.__wbg_rawcontactpair_free, Sg = a.__wbg_rawvector_free, Rg = a.__wbg_rawraycolliderintersection_free, Cg = a.__wbg_rawsdpmatrix3_free, Eg = a.__wbindgen_export_0, xg = a.__wbindgen_add_to_stack_pointer, jg = a.__wbindgen_export_1, Ag = a.__wbindgen_export_2, Pg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: kd,
    __wbg_rawccdsolver_free: qc,
    __wbg_rawcharactercollision_free: xo,
    __wbg_rawcolliderset_free: $h,
    __wbg_rawcollidershapecasthit_free: Cu,
    __wbg_rawcontactforceevent_free: Xu,
    __wbg_rawcontactmanifold_free: _w,
    __wbg_rawcontactpair_free: vg,
    __wbg_rawdebugrenderpipeline_free: Wu,
    __wbg_rawdeserializedworld_free: vp,
    __wbg_rawdynamicraycastvehiclecontroller_free: Jo,
    __wbg_raweventqueue_free: Ku,
    __wbg_rawgenericjoint_free: Hl,
    __wbg_rawimpulsejointset_free: dl,
    __wbg_rawintegrationparameters_free: fl,
    __wbg_rawislandmanager_free: Bl,
    __wbg_rawkinematiccharactercontroller_free: Za,
    __wbg_rawmultibodyjointset_free: s_,
    __wbg_rawnarrowphase_free: nw,
    __wbg_rawphysicspipeline_free: sp,
    __wbg_rawpidcontroller_free: Fo,
    __wbg_rawpointcolliderprojection_free: Bw,
    __wbg_rawpointprojection_free: Mw,
    __wbg_rawquerypipeline_free: ng,
    __wbg_rawraycolliderhit_free: Uw,
    __wbg_rawraycolliderintersection_free: Rg,
    __wbg_rawrayintersection_free: qw,
    __wbg_rawrigidbodyset_free: jd,
    __wbg_rawrotation_free: yg,
    __wbg_rawsdpmatrix3_free: Cg,
    __wbg_rawserializationpipeline_free: zp,
    __wbg_rawshape_free: Vw,
    __wbg_rawshapecasthit_free: yu,
    __wbg_rawshapecontact_free: iw,
    __wbg_rawvector_free: Sg,
    __wbindgen_add_to_stack_pointer: xg,
    __wbindgen_export_0: Eg,
    __wbindgen_export_1: jg,
    __wbindgen_export_2: Ag,
    memory: $a,
    rawbroadphase_new: Md,
    rawccdsolver_new: Uc,
    rawcharactercollision_handle: Ao,
    rawcharactercollision_new: jo,
    rawcharactercollision_toi: zo,
    rawcharactercollision_translationDeltaApplied: Po,
    rawcharactercollision_translationDeltaRemaining: Io,
    rawcharactercollision_worldNormal1: ko,
    rawcharactercollision_worldNormal2: Mo,
    rawcharactercollision_worldWitness1: To,
    rawcharactercollision_worldWitness2: Do,
    rawcolliderset_coActiveCollisionTypes: yh,
    rawcolliderset_coActiveEvents: vh,
    rawcolliderset_coActiveHooks: fh,
    rawcolliderset_coCastCollider: Eh,
    rawcolliderset_coCastRay: zh,
    rawcolliderset_coCastRayAndGetNormal: Th,
    rawcolliderset_coCastShape: Ch,
    rawcolliderset_coCollisionGroups: bh,
    rawcolliderset_coContactCollider: Ah,
    rawcolliderset_coContactForceEventThreshold: Sh,
    rawcolliderset_coContactShape: jh,
    rawcolliderset_coContactSkin: dh,
    rawcolliderset_coContainsPoint: Rh,
    rawcolliderset_coDensity: uh,
    rawcolliderset_coFriction: hh,
    rawcolliderset_coFrictionCombineRule: Fh,
    rawcolliderset_coHalfExtents: Ud,
    rawcolliderset_coHalfHeight: Xd,
    rawcolliderset_coHalfspaceNormal: qd,
    rawcolliderset_coHeightFieldFlags: rh,
    rawcolliderset_coHeightfieldHeights: ih,
    rawcolliderset_coHeightfieldNCols: ah,
    rawcolliderset_coHeightfieldNRows: sh,
    rawcolliderset_coHeightfieldScale: nh,
    rawcolliderset_coIndices: th,
    rawcolliderset_coIntersectsRay: Ih,
    rawcolliderset_coIntersectsShape: xh,
    rawcolliderset_coIsEnabled: lh,
    rawcolliderset_coIsSensor: Gd,
    rawcolliderset_coMass: ph,
    rawcolliderset_coParent: oh,
    rawcolliderset_coProjectPoint: Ph,
    rawcolliderset_coRadius: Jd,
    rawcolliderset_coRestitution: wh,
    rawcolliderset_coRestitutionCombineRule: Bh,
    rawcolliderset_coRotation: Ld,
    rawcolliderset_coRoundRadius: Yd,
    rawcolliderset_coSetActiveCollisionTypes: qh,
    rawcolliderset_coSetActiveEvents: Wh,
    rawcolliderset_coSetActiveHooks: Gh,
    rawcolliderset_coSetCollisionGroups: Oh,
    rawcolliderset_coSetContactForceEventThreshold: Vh,
    rawcolliderset_coSetContactSkin: _h,
    rawcolliderset_coSetDensity: Jh,
    rawcolliderset_coSetEnabled: ch,
    rawcolliderset_coSetFriction: Mh,
    rawcolliderset_coSetFrictionCombineRule: Lh,
    rawcolliderset_coSetHalfExtents: Vd,
    rawcolliderset_coSetHalfHeight: $d,
    rawcolliderset_coSetMass: Kh,
    rawcolliderset_coSetMassProperties: Xh,
    rawcolliderset_coSetRadius: Kd,
    rawcolliderset_coSetRestitution: kh,
    rawcolliderset_coSetRestitutionCombineRule: Nh,
    rawcolliderset_coSetRotation: Od,
    rawcolliderset_coSetRotationWrtParent: Hd,
    rawcolliderset_coSetRoundRadius: Zd,
    rawcolliderset_coSetSensor: Dh,
    rawcolliderset_coSetShape: Uh,
    rawcolliderset_coSetSolverGroups: Hh,
    rawcolliderset_coSetTranslation: Bd,
    rawcolliderset_coSetTranslationWrtParent: Nd,
    rawcolliderset_coShapeType: Wd,
    rawcolliderset_coSolverGroups: mh,
    rawcolliderset_coTranslation: Fd,
    rawcolliderset_coTriMeshFlags: eh,
    rawcolliderset_coVertices: Qd,
    rawcolliderset_coVolume: gh,
    rawcolliderset_contains: Qh,
    rawcolliderset_createCollider: tw,
    rawcolliderset_forEachColliderHandle: rw,
    rawcolliderset_isHandleValid: Mp,
    rawcolliderset_len: Zh,
    rawcolliderset_new: Yh,
    rawcolliderset_remove: ew,
    rawcollidershapecasthit_colliderHandle: Kp,
    rawcollidershapecasthit_normal1: ug,
    rawcollidershapecasthit_normal2: pg,
    rawcollidershapecasthit_time_of_impact: Eu,
    rawcollidershapecasthit_witness1: xu,
    rawcollidershapecasthit_witness2: ju,
    rawcontactforceevent_collider1: rg,
    rawcontactforceevent_collider2: $u,
    rawcontactforceevent_max_force_direction: Qu,
    rawcontactforceevent_max_force_magnitude: tp,
    rawcontactforceevent_total_force: Yu,
    rawcontactforceevent_total_force_magnitude: Zu,
    rawcontactmanifold_contact_dist: Rw,
    rawcontactmanifold_contact_fid1: Cw,
    rawcontactmanifold_contact_fid2: Ew,
    rawcontactmanifold_contact_impulse: xw,
    rawcontactmanifold_contact_local_p1: vw,
    rawcontactmanifold_contact_local_p2: Sw,
    rawcontactmanifold_contact_tangent_impulse_x: jw,
    rawcontactmanifold_contact_tangent_impulse_y: Aw,
    rawcontactmanifold_local_n1: gw,
    rawcontactmanifold_local_n2: bw,
    rawcontactmanifold_normal: pw,
    rawcontactmanifold_num_contacts: yw,
    rawcontactmanifold_num_solver_contacts: Pw,
    rawcontactmanifold_solver_contact_dist: zw,
    rawcontactmanifold_solver_contact_friction: Tw,
    rawcontactmanifold_solver_contact_point: Iw,
    rawcontactmanifold_solver_contact_restitution: Dw,
    rawcontactmanifold_solver_contact_tangent_velocity: kw,
    rawcontactmanifold_subshape1: mw,
    rawcontactmanifold_subshape2: fw,
    rawcontactpair_collider1: dw,
    rawcontactpair_collider2: hw,
    rawcontactpair_contactManifold: uw,
    rawcontactpair_numContactManifolds: ww,
    rawdebugrenderpipeline_colors: Vu,
    rawdebugrenderpipeline_new: qu,
    rawdebugrenderpipeline_render: Ju,
    rawdebugrenderpipeline_vertices: Uu,
    rawdeserializedworld_takeBodies: jp,
    rawdeserializedworld_takeBroadPhase: Ep,
    rawdeserializedworld_takeColliders: Ap,
    rawdeserializedworld_takeGravity: Sp,
    rawdeserializedworld_takeImpulseJoints: Pp,
    rawdeserializedworld_takeIntegrationParameters: Rp,
    rawdeserializedworld_takeIslandManager: Cp,
    rawdeserializedworld_takeMultibodyJoints: Ip,
    rawdeserializedworld_takeNarrowPhase: xp,
    rawdynamicraycastvehiclecontroller_add_wheel: ec,
    rawdynamicraycastvehiclecontroller_chassis: $o,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: Xo,
    rawdynamicraycastvehiclecontroller_index_forward_axis: Qo,
    rawdynamicraycastvehiclecontroller_index_up_axis: Yo,
    rawdynamicraycastvehiclecontroller_new: Ko,
    rawdynamicraycastvehiclecontroller_num_wheels: rc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: tc,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: Zo,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Pc,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: vc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: sc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: jc,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Ec,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: zc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: fc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: lc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: dc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Dc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: Rc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: pc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: bc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: oc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: wc,
    rawdynamicraycastvehiclecontroller_update_vehicle: ic,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: Ac,
    rawdynamicraycastvehiclecontroller_wheel_brake: yc,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: nc,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: Bc,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: Nc,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: xc,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: Cc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Mc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Ic,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: Wc,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Hc,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: Gc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: mc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: cc,
    rawdynamicraycastvehiclecontroller_wheel_radius: _c,
    rawdynamicraycastvehiclecontroller_wheel_rotation: kc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Tc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: Fc,
    rawdynamicraycastvehiclecontroller_wheel_steering: Sc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: uc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: Lc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: Oc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: gc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: ac,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: hc,
    raweventqueue_clear: np,
    raweventqueue_drainCollisionEvents: rp,
    raweventqueue_drainContactForceEvents: ip,
    raweventqueue_new: ep,
    rawgenericjoint_fixed: Jl,
    rawgenericjoint_generic: Gl,
    rawgenericjoint_prismatic: Vl,
    rawgenericjoint_revolute: Kl,
    rawgenericjoint_rope: ql,
    rawgenericjoint_spherical: Ul,
    rawgenericjoint_spring: Wl,
    rawimpulsejointset_contains: gl,
    rawimpulsejointset_createJoint: wl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: ml,
    rawimpulsejointset_forEachJointHandle: bl,
    rawimpulsejointset_jointAnchor1: Yc,
    rawimpulsejointset_jointAnchor2: Zc,
    rawimpulsejointset_jointBodyHandle1: Jc,
    rawimpulsejointset_jointBodyHandle2: Kc,
    rawimpulsejointset_jointConfigureMotor: _l,
    rawimpulsejointset_jointConfigureMotorModel: ol,
    rawimpulsejointset_jointConfigureMotorPosition: ll,
    rawimpulsejointset_jointConfigureMotorVelocity: cl,
    rawimpulsejointset_jointContactsEnabled: el,
    rawimpulsejointset_jointFrameX1: Xc,
    rawimpulsejointset_jointFrameX2: $c,
    rawimpulsejointset_jointLimitsEnabled: il,
    rawimpulsejointset_jointLimitsMax: sl,
    rawimpulsejointset_jointLimitsMin: nl,
    rawimpulsejointset_jointSetAnchor1: Qc,
    rawimpulsejointset_jointSetAnchor2: tl,
    rawimpulsejointset_jointSetContactsEnabled: rl,
    rawimpulsejointset_jointSetLimits: al,
    rawimpulsejointset_jointType: Vc,
    rawimpulsejointset_len: pl,
    rawimpulsejointset_new: hl,
    rawimpulsejointset_remove: ul,
    rawintegrationparameters_contact_erp: Sl,
    rawintegrationparameters_dt: vl,
    rawintegrationparameters_lengthUnit: xl,
    rawintegrationparameters_maxCcdSubsteps: El,
    rawintegrationparameters_minIslandSize: Cl,
    rawintegrationparameters_new: yl,
    rawintegrationparameters_normalizedAllowedLinearError: Lp,
    rawintegrationparameters_normalizedPredictionDistance: ig,
    rawintegrationparameters_numAdditionalFrictionIterations: Bp,
    rawintegrationparameters_numInternalPgsIterations: Np,
    rawintegrationparameters_numSolverIterations: Rl,
    rawintegrationparameters_set_contact_natural_frequency: Al,
    rawintegrationparameters_set_dt: jl,
    rawintegrationparameters_set_lengthUnit: kl,
    rawintegrationparameters_set_maxCcdSubsteps: Dl,
    rawintegrationparameters_set_minIslandSize: Tl,
    rawintegrationparameters_set_normalizedAllowedLinearError: Pl,
    rawintegrationparameters_set_normalizedPredictionDistance: Il,
    rawintegrationparameters_set_numAdditionalFrictionIterations: bg,
    rawintegrationparameters_set_numInternalPgsIterations: mg,
    rawintegrationparameters_set_numSolverIterations: zl,
    rawintegrationparameters_switchToSmallStepsPgsSolver: Fl,
    rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: Ll,
    rawintegrationparameters_switchToStandardPgsSolver: Ml,
    rawislandmanager_forEachActiveRigidBodyHandle: Ol,
    rawislandmanager_new: Nl,
    rawkinematiccharactercontroller_autostepEnabled: lo,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: co,
    rawkinematiccharactercontroller_autostepMaxHeight: ao,
    rawkinematiccharactercontroller_autostepMinWidth: oo,
    rawkinematiccharactercontroller_computeColliderMovement: vo,
    rawkinematiccharactercontroller_computedCollision: Eo,
    rawkinematiccharactercontroller_computedGrounded: Ro,
    rawkinematiccharactercontroller_computedMovement: So,
    rawkinematiccharactercontroller_disableAutostep: ho,
    rawkinematiccharactercontroller_disableSnapToGround: fo,
    rawkinematiccharactercontroller_enableAutostep: _o,
    rawkinematiccharactercontroller_enableSnapToGround: mo,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: wo,
    rawkinematiccharactercontroller_minSlopeSlideAngle: po,
    rawkinematiccharactercontroller_new: Qa,
    rawkinematiccharactercontroller_normalNudgeFactor: eo,
    rawkinematiccharactercontroller_numComputedCollisions: Co,
    rawkinematiccharactercontroller_offset: Fp,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: uo,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: go,
    rawkinematiccharactercontroller_setNormalNudgeFactor: ro,
    rawkinematiccharactercontroller_setOffset: io,
    rawkinematiccharactercontroller_setSlideEnabled: so,
    rawkinematiccharactercontroller_setUp: to,
    rawkinematiccharactercontroller_slideEnabled: no,
    rawkinematiccharactercontroller_snapToGroundDistance: bo,
    rawkinematiccharactercontroller_snapToGroundEnabled: yo,
    rawkinematiccharactercontroller_up: og,
    rawmultibodyjointset_contains: l_,
    rawmultibodyjointset_createJoint: o_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: d_,
    rawmultibodyjointset_forEachJointHandle: __,
    rawmultibodyjointset_jointAnchor1: Zl,
    rawmultibodyjointset_jointAnchor2: Ql,
    rawmultibodyjointset_jointContactsEnabled: t_,
    rawmultibodyjointset_jointFrameX1: $l,
    rawmultibodyjointset_jointFrameX2: Yl,
    rawmultibodyjointset_jointLimitsEnabled: r_,
    rawmultibodyjointset_jointLimitsMax: n_,
    rawmultibodyjointset_jointLimitsMin: i_,
    rawmultibodyjointset_jointSetContactsEnabled: e_,
    rawmultibodyjointset_jointType: Xl,
    rawmultibodyjointset_new: a_,
    rawmultibodyjointset_remove: c_,
    rawnarrowphase_contact_pair: ow,
    rawnarrowphase_contact_pairs_with: aw,
    rawnarrowphase_intersection_pair: lw,
    rawnarrowphase_intersection_pairs_with: cw,
    rawnarrowphase_new: sw,
    rawphysicspipeline_new: ap,
    rawphysicspipeline_step: op,
    rawphysicspipeline_stepWithEvents: cp,
    rawpidcontroller_angular_correction: Vo,
    rawpidcontroller_apply_angular_correction: qo,
    rawpidcontroller_apply_linear_correction: Wo,
    rawpidcontroller_linear_correction: Uo,
    rawpidcontroller_new: Lo,
    rawpidcontroller_reset_integrals: Go,
    rawpidcontroller_set_axes_mask: Ho,
    rawpidcontroller_set_kd: Oo,
    rawpidcontroller_set_ki: No,
    rawpidcontroller_set_kp: Bo,
    rawpointcolliderprojection_colliderHandle: Nw,
    rawpointcolliderprojection_featureId: Ww,
    rawpointcolliderprojection_featureType: Gw,
    rawpointcolliderprojection_isInside: Hw,
    rawpointcolliderprojection_point: Ow,
    rawpointprojection_isInside: Lw,
    rawpointprojection_point: Fw,
    rawquerypipeline_castRay: dp,
    rawquerypipeline_castRayAndGetNormal: hp,
    rawquerypipeline_castShape: mp,
    rawquerypipeline_collidersWithAabbIntersectingAabb: yp,
    rawquerypipeline_intersectionWithShape: up,
    rawquerypipeline_intersectionsWithPoint: bp,
    rawquerypipeline_intersectionsWithRay: wp,
    rawquerypipeline_intersectionsWithShape: fp,
    rawquerypipeline_new: lp,
    rawquerypipeline_projectPoint: pp,
    rawquerypipeline_projectPointAndGetFeature: gp,
    rawquerypipeline_update: _p,
    rawraycolliderhit_colliderHandle: Vp,
    rawraycolliderhit_timeOfImpact: Xp,
    rawraycolliderintersection_colliderHandle: Wp,
    rawraycolliderintersection_featureId: ag,
    rawraycolliderintersection_featureType: Up,
    rawraycolliderintersection_normal: hg,
    rawraycolliderintersection_time_of_impact: Jp,
    rawrayintersection_featureId: sg,
    rawrayintersection_featureType: Gp,
    rawrayintersection_normal: dg,
    rawrayintersection_time_of_impact: qp,
    rawrigidbodyset_contains: zd,
    rawrigidbodyset_createRigidBody: Pd,
    rawrigidbodyset_forEachRigidBodyHandle: Td,
    rawrigidbodyset_len: Op,
    rawrigidbodyset_new: Ad,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Dd,
    rawrigidbodyset_rbAddForce: pd,
    rawrigidbodyset_rbAddForceAtPoint: fd,
    rawrigidbodyset_rbAddTorque: bd,
    rawrigidbodyset_rbAdditionalSolverIterations: vd,
    rawrigidbodyset_rbAngularDamping: ad,
    rawrigidbodyset_rbAngvel: P_,
    rawrigidbodyset_rbApplyImpulse: gd,
    rawrigidbodyset_rbApplyImpulseAtPoint: yd,
    rawrigidbodyset_rbApplyTorqueImpulse: md,
    rawrigidbodyset_rbBodyType: td,
    rawrigidbodyset_rbCollider: Q_,
    rawrigidbodyset_rbDominanceGroup: M_,
    rawrigidbodyset_rbEffectiveAngularInertia: K_,
    rawrigidbodyset_rbEffectiveInvMass: H_,
    rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: J_,
    rawrigidbodyset_rbEnableCcd: L_,
    rawrigidbodyset_rbGravityScale: dd,
    rawrigidbodyset_rbInvMass: O_,
    rawrigidbodyset_rbInvPrincipalInertiaSqrt: q_,
    rawrigidbodyset_rbIsCcdEnabled: $_,
    rawrigidbodyset_rbIsDynamic: nd,
    rawrigidbodyset_rbIsEnabled: _d,
    rawrigidbodyset_rbIsFixed: rd,
    rawrigidbodyset_rbIsKinematic: id,
    rawrigidbodyset_rbIsMoving: g_,
    rawrigidbodyset_rbIsSleeping: p_,
    rawrigidbodyset_rbLinearDamping: sd,
    rawrigidbodyset_rbLinvel: A_,
    rawrigidbodyset_rbLocalCom: G_,
    rawrigidbodyset_rbLockRotations: D_,
    rawrigidbodyset_rbLockTranslations: z_,
    rawrigidbodyset_rbMass: N_,
    rawrigidbodyset_rbNextRotation: m_,
    rawrigidbodyset_rbNextTranslation: b_,
    rawrigidbodyset_rbNumColliders: Z_,
    rawrigidbodyset_rbPrincipalInertia: V_,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: U_,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: E_,
    rawrigidbodyset_rbResetForces: wd,
    rawrigidbodyset_rbResetTorques: ud,
    rawrigidbodyset_rbRotation: w_,
    rawrigidbodyset_rbSetAdditionalMass: x_,
    rawrigidbodyset_rbSetAdditionalMassProperties: j_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Sd,
    rawrigidbodyset_rbSetAngularDamping: cd,
    rawrigidbodyset_rbSetAngvel: S_,
    rawrigidbodyset_rbSetBodyType: ed,
    rawrigidbodyset_rbSetDominanceGroup: F_,
    rawrigidbodyset_rbSetEnabled: ld,
    rawrigidbodyset_rbSetEnabledRotations: k_,
    rawrigidbodyset_rbSetEnabledTranslations: T_,
    rawrigidbodyset_rbSetGravityScale: hd,
    rawrigidbodyset_rbSetLinearDamping: od,
    rawrigidbodyset_rbSetLinvel: v_,
    rawrigidbodyset_rbSetNextKinematicRotation: C_,
    rawrigidbodyset_rbSetNextKinematicTranslation: R_,
    rawrigidbodyset_rbSetRotation: y_,
    rawrigidbodyset_rbSetSoftCcdPrediction: B_,
    rawrigidbodyset_rbSetTranslation: f_,
    rawrigidbodyset_rbSetUserData: Cd,
    rawrigidbodyset_rbSleep: u_,
    rawrigidbodyset_rbSoftCcdPrediction: Y_,
    rawrigidbodyset_rbTranslation: h_,
    rawrigidbodyset_rbUserData: Rd,
    rawrigidbodyset_rbUserForce: Ed,
    rawrigidbodyset_rbUserTorque: xd,
    rawrigidbodyset_rbVelocityAtPoint: I_,
    rawrigidbodyset_rbWakeUp: X_,
    rawrigidbodyset_rbWorldCom: W_,
    rawrigidbodyset_remove: Id,
    rawrotation_identity: Pu,
    rawrotation_new: Au,
    rawrotation_w: zu,
    rawrotation_x: Iu,
    rawrotation_y: Yp,
    rawrotation_z: Zp,
    rawsdpmatrix3_elements: Gu,
    rawserializationpipeline_deserializeAll: kp,
    rawserializationpipeline_new: Tp,
    rawserializationpipeline_serializeAll: Dp,
    rawshape_ball: Xw,
    rawshape_capsule: Yw,
    rawshape_castRay: mu,
    rawshape_castRayAndGetNormal: fu,
    rawshape_castShape: hu,
    rawshape_cone: tu,
    rawshape_contactShape: uu,
    rawshape_containsPoint: pu,
    rawshape_convexHull: cu,
    rawshape_convexMesh: _u,
    rawshape_cuboid: Jw,
    rawshape_cylinder: Zw,
    rawshape_halfspace: $w,
    rawshape_heightfield: nu,
    rawshape_intersectsRay: bu,
    rawshape_intersectsShape: wu,
    rawshape_polyline: ru,
    rawshape_projectPoint: gu,
    rawshape_roundCone: eu,
    rawshape_roundConvexHull: lu,
    rawshape_roundConvexMesh: du,
    rawshape_roundCuboid: Kw,
    rawshape_roundCylinder: Qw,
    rawshape_roundTriangle: ou,
    rawshape_segment: su,
    rawshape_triangle: au,
    rawshape_trimesh: iu,
    rawshapecasthit_normal1: Su,
    rawshapecasthit_normal2: Ru,
    rawshapecasthit_time_of_impact: $p,
    rawshapecasthit_witness1: vu,
    rawshapecasthit_witness2: gg,
    rawshapecontact_distance: Hp,
    rawshapecontact_normal1: wg,
    rawshapecontact_normal2: cg,
    rawshapecontact_point1: lg,
    rawshapecontact_point2: _g,
    rawvector_new: Du,
    rawvector_set_x: ku,
    rawvector_set_y: fg,
    rawvector_set_z: Mu,
    rawvector_x: Qp,
    rawvector_xyz: Fu,
    rawvector_xzy: Nu,
    rawvector_y: tg,
    rawvector_yxz: Lu,
    rawvector_yzx: Ou,
    rawvector_z: eg,
    rawvector_zero: Tu,
    rawvector_zxy: Bu,
    rawvector_zyx: Hu,
    version: Ya
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ga(Pg);
  class Ig {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new Ig(t, e, r);
    }
    static intoRaw(t) {
      return new p(t.x, t.y, t.z);
    }
    static zeros() {
      return g.new(0, 0, 0);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = g.new(t.x, t.y, t.z);
      return t.free(), e;
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z;
    }
  }
  class Ai {
    constructor(t, e, r, n) {
      this.x = t, this.y = e, this.z = r, this.w = n;
    }
  }
  class F {
    static identity() {
      return new Ai(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = new Ai(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new L(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  }
  class zg {
    get m11() {
      return this.elements[0];
    }
    get m12() {
      return this.elements[1];
    }
    get m21() {
      return this.m12;
    }
    get m13() {
      return this.elements[2];
    }
    get m31() {
      return this.m13;
    }
    get m22() {
      return this.elements[3];
    }
    get m23() {
      return this.elements[4];
    }
    get m32() {
      return this.m23;
    }
    get m33() {
      return this.elements[5];
    }
    constructor(t) {
      this.elements = t;
    }
  }
  class Pi {
    static fromRaw(t) {
      const e = new zg(t.elements());
      return t.free(), e;
    }
  }
  var mt;
  (function(i) {
    i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(mt || (mt = {}));
  class Ii {
    constructor(t, e, r) {
      this.rawSet = t, this.colliderSet = e, this.handle = r;
    }
    finalizeDeserialization(t) {
      this.colliderSet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    lockTranslations(t, e) {
      return this.rawSet.rbLockTranslations(this.handle, t, e);
    }
    lockRotations(t, e) {
      return this.rawSet.rbLockRotations(this.handle, t, e);
    }
    setEnabledTranslations(t, e, r, n) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, n);
    }
    restrictTranslations(t, e, r, n) {
      this.setEnabledTranslations(t, e, r, n);
    }
    setEnabledRotations(t, e, r, n) {
      return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, n);
    }
    restrictRotations(t, e, r, n) {
      this.setEnabledRotations(t, e, r, n);
    }
    dominanceGroup() {
      return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(t) {
      this.rawSet.rbSetDominanceGroup(this.handle, t);
    }
    additionalSolverIterations() {
      return this.rawSet.rbAdditionalSolverIterations(this.handle);
    }
    setAdditionalSolverIterations(t) {
      this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
    }
    enableCcd(t) {
      this.rawSet.rbEnableCcd(this.handle, t);
    }
    setSoftCcdPrediction(t) {
      this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
    }
    softCcdPrediction() {
      return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
      let t = this.rawSet.rbTranslation(this.handle);
      return g.fromRaw(t);
    }
    rotation() {
      let t = this.rawSet.rbRotation(this.handle);
      return F.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return g.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return F.fromRaw(t);
    }
    setTranslation(t, e) {
      this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
    }
    setLinvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetLinvel(this.handle, r, e), r.free();
    }
    gravityScale() {
      return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(t, e) {
      this.rawSet.rbSetGravityScale(this.handle, t, e);
    }
    setRotation(t, e) {
      this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
    }
    setAngvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetAngvel(this.handle, r, e), r.free();
    }
    setNextKinematicTranslation(t) {
      this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
    }
    setNextKinematicRotation(t) {
      this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    linvel() {
      return g.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    velocityAtPoint(t) {
      const e = g.intoRaw(t);
      let r = g.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, e));
      return e.free(), r;
    }
    angvel() {
      return g.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
      return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
      return g.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
      return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
      return g.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
      return g.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertiaSqrt() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return F.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
      return Pi.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
      return Pi.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
    }
    sleep() {
      this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
      this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
      return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
      return this.rawSet.rbNumColliders(this.handle);
    }
    collider(t) {
      return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
    }
    setEnabled(t) {
      this.rawSet.rbSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
      return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(t, e) {
      return this.rawSet.rbSetBodyType(this.handle, t, e);
    }
    isSleeping() {
      return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
      return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
      return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
      return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
      return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
      return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
      return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(t) {
      this.rawSet.rbSetLinearDamping(this.handle, t);
    }
    recomputeMassPropertiesFromColliders() {
      this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(t, e) {
      this.rawSet.rbSetAdditionalMass(this.handle, t, e);
    }
    setAdditionalMassProperties(t, e, r, n, o) {
      let c = g.intoRaw(e), l = g.intoRaw(r), _ = F.intoRaw(n);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, c, l, _, o), c.free(), l.free(), _.free();
    }
    setAngularDamping(t) {
      this.rawSet.rbSetAngularDamping(this.handle, t);
    }
    resetForces(t) {
      this.rawSet.rbResetForces(this.handle, t);
    }
    resetTorques(t) {
      this.rawSet.rbResetTorques(this.handle, t);
    }
    addForce(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddForce(this.handle, r, e), r.free();
    }
    applyImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyImpulse(this.handle, r, e), r.free();
    }
    addTorque(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddTorque(this.handle, r, e), r.free();
    }
    applyTorqueImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyTorqueImpulse(this.handle, r, e), r.free();
    }
    addForceAtPoint(t, e, r) {
      const n = g.intoRaw(t), o = g.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, n, o, r), n.free(), o.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const n = g.intoRaw(t), o = g.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, n, o, r), n.free(), o.free();
    }
    userForce() {
      return g.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return g.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
  }
  class St {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = F.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = F.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new St(mt.Dynamic);
    }
    static kinematicPositionBased() {
      return new St(mt.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new St(mt.KinematicVelocityBased);
    }
    static fixed() {
      return new St(mt.Fixed);
    }
    static newDynamic() {
      return new St(mt.Dynamic);
    }
    static newKinematicPositionBased() {
      return new St(mt.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new St(mt.KinematicVelocityBased);
    }
    static newStatic() {
      return new St(mt.Fixed);
    }
    setDominanceGroup(t) {
      return this.dominanceGroup = t, this;
    }
    setAdditionalSolverIterations(t) {
      return this.additionalSolverIterations = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return F.copy(this.rotation, t), this;
    }
    setGravityScale(t) {
      return this.gravityScale = t, this;
    }
    setAdditionalMass(t) {
      return this.mass = t, this.massOnly = true, this;
    }
    setLinvel(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The linvel components must be numbers.");
      return this.linvel = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setAngvel(t) {
      return g.copy(this.angvel, t), this;
    }
    setAdditionalMassProperties(t, e, r, n) {
      return this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), F.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
    }
    enabledTranslations(t, e, r) {
      return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = r, this;
    }
    restrictTranslations(t, e, r) {
      return this.enabledTranslations(t, e, r);
    }
    lockTranslations() {
      return this.enabledTranslations(false, false, false);
    }
    enabledRotations(t, e, r) {
      return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = r, this;
    }
    restrictRotations(t, e, r) {
      return this.enabledRotations(t, e, r);
    }
    lockRotations() {
      return this.restrictRotations(false, false, false);
    }
    setLinearDamping(t) {
      return this.linearDamping = t, this;
    }
    setAngularDamping(t) {
      return this.angularDamping = t, this;
    }
    setCanSleep(t) {
      return this.canSleep = t, this;
    }
    setSleeping(t) {
      return this.sleeping = t, this;
    }
    setCcdEnabled(t) {
      return this.ccdEnabled = t, this;
    }
    setSoftCcdPrediction(t) {
      return this.softCcdPrediction = t, this;
    }
    setUserData(t) {
      return this.userData = t, this;
    }
  }
  class We {
    constructor() {
      this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
    }
    set(t, e) {
      let r = this.index(t);
      for (; this.data.length <= r; ) this.data.push(null);
      this.data[r] == null && (this.size += 1), this.data[r] = e;
    }
    len() {
      return this.size;
    }
    delete(t) {
      let e = this.index(t);
      e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
    }
    clear() {
      this.data = new Array();
    }
    get(t) {
      let e = this.index(t);
      return e < this.data.length ? this.data[e] : null;
    }
    forEach(t) {
      for (const e of this.data) e != null && t(e);
    }
    getAll() {
      return this.data.filter((t) => t != null);
    }
    index(t) {
      return this.fconv[0] = t, this.uconv[0];
    }
  }
  class Tg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new J(), this.map = new We(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new Ii(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), n = F.intoRaw(e.rotation), o = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = F.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, c, o, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), n.free(), o.free(), c.free(), l.free(), _.free(), h.free();
      const w = new Ii(this.raw, t, u);
      return w.userData = e.userData, this.map.set(u, w), w;
    }
    remove(t, e, r, n, o) {
      for (let c = 0; c < this.raw.rbNumColliders(t); c += 1) r.unmap(this.raw.rbCollider(t, c));
      n.forEachJointHandleAttachedToRigidBody(t, (c) => n.unmap(c)), o.forEachJointHandleAttachedToRigidBody(t, (c) => o.unmap(c)), this.raw.remove(t, e.raw, r.raw, n.raw, o.raw), this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachActiveRigidBody(t, e) {
      t.forEachActiveRigidBodyHandle((r) => {
        e(this.get(r));
      });
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Dg {
    constructor(t) {
      this.raw = t || new Ut();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
      return this.raw.dt;
    }
    get contact_erp() {
      return this.raw.contact_erp;
    }
    get lengthUnit() {
      return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
      return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
      return this.raw.normalizedPredictionDistance;
    }
    get numSolverIterations() {
      return this.raw.numSolverIterations;
    }
    get numAdditionalFrictionIterations() {
      return this.raw.numAdditionalFrictionIterations;
    }
    get numInternalPgsIterations() {
      return this.raw.numInternalPgsIterations;
    }
    get minIslandSize() {
      return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
      return this.raw.maxCcdSubsteps;
    }
    set dt(t) {
      this.raw.dt = t;
    }
    set contact_natural_frequency(t) {
      this.raw.contact_natural_frequency = t;
    }
    set lengthUnit(t) {
      this.raw.lengthUnit = t;
    }
    set normalizedAllowedLinearError(t) {
      this.raw.normalizedAllowedLinearError = t;
    }
    set normalizedPredictionDistance(t) {
      this.raw.normalizedPredictionDistance = t;
    }
    set numSolverIterations(t) {
      this.raw.numSolverIterations = t;
    }
    set numAdditionalFrictionIterations(t) {
      this.raw.numAdditionalFrictionIterations = t;
    }
    set numInternalPgsIterations(t) {
      this.raw.numInternalPgsIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
    switchToStandardPgsSolver() {
      this.raw.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.raw.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
  }
  var at;
  (function(i) {
    i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
  })(at || (at = {}));
  var zi;
  (function(i) {
    i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
  })(zi || (zi = {}));
  var Ti;
  (function(i) {
    i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
  })(Ti || (Ti = {}));
  class Ct {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case ft.Revolute:
          return new Bg(t, e, r);
        case ft.Prismatic:
          return new Lg(t, e, r);
        case ft.Fixed:
          return new kg(t, e, r);
        case ft.Spring:
          return new Fg(t, e, r);
        case ft.Rope:
          return new Mg(t, e, r);
        case ft.Spherical:
          return new Og(t, e, r);
        case ft.Generic:
          return new Ng(t, e, r);
        default:
          return new Ct(t, e, r);
      }
    }
    finalizeDeserialization(t) {
      this.bodySet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    body1() {
      return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
      return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
      return this.rawSet.jointType(this.handle);
    }
    frameX1() {
      return F.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
      return F.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
      return g.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
      return g.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor1(this.handle, e), e.free();
    }
    setAnchor2(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor2(this.handle, e), e.free();
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class pn extends Ct {
    limitsEnabled() {
      return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
      return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
      return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(t, e) {
      this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
    }
    configureMotorModel(t) {
      this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
    }
    configureMotorVelocity(t, e) {
      this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
    }
    configureMotorPosition(t, e, r) {
      this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, r);
    }
    configureMotor(t, e, r, n) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, n);
    }
  }
  class kg extends Ct {
  }
  class Mg extends Ct {
  }
  class Fg extends Ct {
  }
  class Lg extends pn {
    rawAxis() {
      return Le.LinX;
    }
  }
  class Bg extends pn {
    rawAxis() {
      return Le.AngX;
    }
  }
  class Ng extends Ct {
  }
  class Og extends Ct {
  }
  class At {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let o = new At();
      return o.anchor1 = t, o.anchor2 = r, o.frame1 = e, o.frame2 = n, o.jointType = at.Fixed, o;
    }
    static spring(t, e, r, n, o) {
      let c = new At();
      return c.anchor1 = n, c.anchor2 = o, c.length = t, c.stiffness = e, c.damping = r, c.jointType = at.Spring, c;
    }
    static rope(t, e, r) {
      let n = new At();
      return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = at.Rope, n;
    }
    static generic(t, e, r, n) {
      let o = new At();
      return o.anchor1 = t, o.anchor2 = e, o.axis = r, o.axesMask = n, o.jointType = at.Generic, o;
    }
    static spherical(t, e) {
      let r = new At();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = at.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = at.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = at.Revolute, n;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, n, o = false, c = 0, l = 0;
      switch (this.jointType) {
        case at.Fixed:
          let _ = F.intoRaw(this.frame1), h = F.intoRaw(this.frame2);
          n = it.fixed(t, _, e, h), _.free(), h.free();
          break;
        case at.Spring:
          n = it.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case at.Rope:
          n = it.rope(this.length, t, e);
          break;
        case at.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (o = true, c = this.limits[0], l = this.limits[1]), n = it.prismatic(t, e, r, o, c, l), r.free();
          break;
        case at.Generic:
          r = g.intoRaw(this.axis);
          let u = this.axesMask;
          n = it.generic(t, e, r, u);
          break;
        case at.Spherical:
          n = it.spherical(t, e);
          break;
        case at.Revolute:
          r = g.intoRaw(this.axis), n = it.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), n;
    }
  }
  class Hg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Pt(), this.map = new We(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Ct.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, o) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, n, o);
      c.free();
      let _ = Ct.newTyped(this.raw, t, l);
      return this.map.set(l, _), _;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.unmap(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Vt {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case ft.Revolute:
          return new qg(t, e);
        case ft.Prismatic:
          return new Wg(t, e);
        case ft.Fixed:
          return new Gg(t, e);
        case ft.Spherical:
          return new Ug(t, e);
        default:
          return new Vt(t, e);
      }
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class gn extends Vt {
  }
  class Gg extends Vt {
  }
  class Wg extends gn {
    rawAxis() {
      return Le.LinX;
    }
  }
  class qg extends gn {
    rawAxis() {
      return Le.AngX;
    }
  }
  class Ug extends Vt {
  }
  class Vg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new zt(), this.map = new We(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Vt.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, n) {
      const o = t.intoRaw(), c = this.raw.createJoint(o, e, r, n);
      o.free();
      let l = Vt.newTyped(this.raw, c);
      return this.map.set(c, l), l;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.map.delete(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  var Ie;
  (function(i) {
    i[i.Average = 0] = "Average", i[i.Min = 1] = "Min", i[i.Multiply = 2] = "Multiply", i[i.Max = 3] = "Max";
  })(Ie || (Ie = {}));
  class Jg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new gr();
    }
  }
  class Kg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  }
  class Xg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new qt();
    }
  }
  class $g {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Bt(), this.tempManifold = new Yg(null);
    }
    contactPairsWith(t, e) {
      this.raw.contact_pairs_with(t, e);
    }
    intersectionPairsWith(t, e) {
      this.raw.intersection_pairs_with(t, e);
    }
    contactPair(t, e, r) {
      const n = this.raw.contact_pair(t, e);
      if (n) {
        const o = n.collider1() != t;
        let c;
        for (c = 0; c < n.numContactManifolds(); ++c) this.tempManifold.raw = n.contactManifold(c), this.tempManifold.raw && r(this.tempManifold, o), this.tempManifold.free();
        n.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  }
  class Yg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t;
    }
    normal() {
      return g.fromRaw(this.raw.normal());
    }
    localNormal1() {
      return g.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
      return g.fromRaw(this.raw.local_n2());
    }
    subshape1() {
      return this.raw.subshape1();
    }
    subshape2() {
      return this.raw.subshape2();
    }
    numContacts() {
      return this.raw.num_contacts();
    }
    localContactPoint1(t) {
      return g.fromRaw(this.raw.contact_local_p1(t));
    }
    localContactPoint2(t) {
      return g.fromRaw(this.raw.contact_local_p2(t));
    }
    contactDist(t) {
      return this.raw.contact_dist(t);
    }
    contactFid1(t) {
      return this.raw.contact_fid1(t);
    }
    contactFid2(t) {
      return this.raw.contact_fid2(t);
    }
    contactImpulse(t) {
      return this.raw.contact_impulse(t);
    }
    contactTangentImpulseX(t) {
      return this.raw.contact_tangent_impulse_x(t);
    }
    contactTangentImpulseY(t) {
      return this.raw.contact_tangent_impulse_y(t);
    }
    numSolverContacts() {
      return this.raw.num_solver_contacts();
    }
    solverContactPoint(t) {
      return g.fromRaw(this.raw.solver_contact_point(t));
    }
    solverContactDist(t) {
      return this.raw.solver_contact_dist(t);
    }
    solverContactFriction(t) {
      return this.raw.solver_contact_friction(t);
    }
    solverContactRestitution(t) {
      return this.raw.solver_contact_restitution(t);
    }
    solverContactTangentVelocity(t) {
      return g.fromRaw(this.raw.solver_contact_tangent_velocity(t));
    }
  }
  class fe {
    constructor(t, e, r, n, o) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new fe(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  var ye;
  (function(i) {
    i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
  })(ye || (ye = {}));
  class qe {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new qe(g.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  }
  class ze {
    constructor(t, e, r, n, o) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new ze(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Ue {
    constructor(t, e, r, n) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Ue(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class Te {
    constructor(t, e, r, n, o) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Te(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class kr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new kr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
  class ve {
    constructor(t, e, r, n, o) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new ve(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Ve extends ve {
    constructor(t, e, r, n, o, c) {
      super(e, r, n, o, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Ve(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class nt {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, o, c, l, _, h, u;
      switch (r) {
        case st.Ball:
          return new Mr(t.coRadius(e));
        case st.Cuboid:
          return n = t.coHalfExtents(e), new Se(n.x, n.y, n.z);
        case st.RoundCuboid:
          return n = t.coHalfExtents(e), o = t.coRoundRadius(e), new bn(n.x, n.y, n.z, o);
        case st.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new mn(_, h);
        case st.Segment:
          return c = t.coVertices(e), new fn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case st.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new Sn(c, l);
        case st.Triangle:
          return c = t.coVertices(e), new yn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case st.RoundTriangle:
          return c = t.coVertices(e), o = t.coRoundRadius(e), new vn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), o);
        case st.HalfSpace:
          return u = g.fromRaw(t.coHalfspaceNormal(e)), new Zg(u);
        case st.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const w = t.coTriMeshFlags(e);
          return new Fr(c, l, w);
        case st.HeightField:
          const b = t.coHeightfieldScale(e), f = t.coHeightfieldHeights(e), C = t.coHeightfieldNRows(e), T = t.coHeightfieldNCols(e), z = t.coHeightFieldFlags(e);
          return new Rn(C, T, f, b, z);
        case st.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new mr(c, l);
        case st.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), o = t.coRoundRadius(e), new fr(c, l, o);
        case st.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new Cn(_, h);
        case st.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new En(_, h, o);
        case st.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new xn(_, h);
        case st.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new jn(_, h, o);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(t), b = F.intoRaw(e), f = g.intoRaw(r), C = g.intoRaw(o), T = F.intoRaw(c), z = g.intoRaw(l), I = this.intoRaw(), v = n.intoRaw(), S = ve.fromRaw(null, I.castShape(w, b, f, v, C, T, z, _, h, u));
      return w.free(), b.free(), f.free(), C.free(), T.free(), z.free(), I.free(), v.free(), S;
    }
    intersectsShape(t, e, r, n, o) {
      let c = g.intoRaw(t), l = F.intoRaw(e), _ = g.intoRaw(n), h = F.intoRaw(o), u = this.intoRaw(), w = r.intoRaw(), b = u.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w.free(), b;
    }
    contactShape(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = F.intoRaw(e), h = g.intoRaw(n), u = F.intoRaw(o), w = this.intoRaw(), b = r.intoRaw(), f = fe.fromRaw(w.contactShape(l, _, b, h, u, c));
      return l.free(), _.free(), h.free(), u.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let n = g.intoRaw(t), o = F.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(n, o, c);
      return n.free(), o.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, n) {
      let o = g.intoRaw(t), c = F.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = qe.fromRaw(_.projectPoint(o, c, l, n));
      return o.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, n) {
      let o = g.intoRaw(e), c = F.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), u = h.intersectsRay(o, c, l, _, n);
      return o.free(), c.free(), l.free(), _.free(), h.free(), u;
    }
    castRay(t, e, r, n, o) {
      let c = g.intoRaw(e), l = F.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = u.castRay(c, l, _, h, n, o);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
    castRayAndGetNormal(t, e, r, n, o) {
      let c = g.intoRaw(e), l = F.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = Ue.fromRaw(u.castRayAndGetNormal(c, l, _, h, n, o));
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
  }
  var rt;
  (function(i) {
    i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace";
  })(rt || (rt = {}));
  var Di;
  (function(i) {
    i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(Di || (Di = {}));
  var br;
  (function(i) {
    i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(br || (br = {}));
  class Mr extends nt {
    constructor(t) {
      super(), this.type = rt.Ball, this.radius = t;
    }
    intoRaw() {
      return D.ball(this.radius);
    }
  }
  class Zg extends nt {
    constructor(t) {
      super(), this.type = rt.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = D.halfspace(t);
      return t.free(), e;
    }
  }
  class Se extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return D.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class bn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return D.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class mn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.capsule(this.halfHeight, this.radius);
    }
  }
  class fn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = D.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class yn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = D.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class vn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = D.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class Sn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return D.polyline(this.vertices, this.indices);
    }
  }
  let Fr = class extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return D.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class mr extends nt {
    constructor(t, e) {
      super(), this.type = rt.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? D.convexMesh(this.vertices, this.indices) : D.convexHull(this.vertices);
    }
  }
  class fr extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? D.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : D.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class Rn extends nt {
    constructor(t, e, r, n, o) {
      super(), this.type = rt.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = o;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = D.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class Cn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.cylinder(this.halfHeight, this.radius);
    }
  }
  class En extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class xn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.cone(this.halfHeight, this.radius);
    }
  }
  class jn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return D.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class Qg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Ea();
    }
    step(t, e, r, n, o, c, l, _, h, u, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, u.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, u.raw), f.free();
    }
  }
  var ki;
  (function(i) {
    i[i.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", i[i.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", i[i.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", i[i.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", i[i.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", i[i.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", i[i.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", i[i.ONLY_FIXED = 6] = "ONLY_FIXED";
  })(ki || (ki = {}));
  class tb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Tr();
    }
    update(t) {
      this.raw.update(t.raw);
    }
    castRay(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(r.origin), b = g.intoRaw(r.dir), f = kr.fromRaw(e, this.raw.castRay(t.raw, e.raw, w, b, n, o, c, l, _, h, u));
      return w.free(), b.free(), f;
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(r.origin), b = g.intoRaw(r.dir), f = Te.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, w, b, n, o, c, l, _, h, u));
      return w.free(), b.free(), f;
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, u, w) {
      let b = g.intoRaw(r.origin), f = g.intoRaw(r.dir), C = (T) => c(Te.fromRaw(e, T));
      this.raw.intersectionsWithRay(t.raw, e.raw, b, f, n, o, C, l, _, h, u, w), b.free(), f.free();
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(r), b = F.intoRaw(n), f = o.intoRaw(), C = this.raw.intersectionWithShape(t.raw, e.raw, w, b, f, c, l, _, h, u);
      return w.free(), b.free(), f.free(), C;
    }
    projectPoint(t, e, r, n, o, c, l, _, h) {
      let u = g.intoRaw(r), w = ze.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, u, n, o, c, l, _, h));
      return u.free(), w;
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _) {
      let h = g.intoRaw(r), u = ze.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, h, n, o, c, l, _));
      return h.free(), u;
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h) {
      let u = g.intoRaw(r);
      this.raw.intersectionsWithPoint(t.raw, e.raw, u, n, o, c, l, _, h), u.free();
    }
    castShape(t, e, r, n, o, c, l, _, h, u, w, b, f, C) {
      let T = g.intoRaw(r), z = F.intoRaw(n), I = g.intoRaw(o), v = c.intoRaw(), S = Ve.fromRaw(e, this.raw.castShape(t.raw, e.raw, T, z, I, v, l, _, h, u, w, b, f, C));
      return T.free(), z.free(), I.free(), v.free(), S;
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, u, w) {
      let b = g.intoRaw(r), f = F.intoRaw(n), C = o.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, b, f, C, c, l, _, h, u, w), b.free(), f.free(), C.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      let n = g.intoRaw(t), o = g.intoRaw(e);
      this.raw.collidersWithAabbIntersectingAabb(n, o, r), n.free(), o.free();
    }
  }
  class Mi {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new ja();
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      let u = g.intoRaw(t);
      const w = this.raw.serializeAll(u, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw);
      return u.free(), w;
    }
    deserializeAll(t) {
      return Je.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class eb {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class rb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Sa();
    }
    render(t, e, r, n, o) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, o.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class ib {
  }
  class nb {
    constructor(t, e, r, n, o) {
      this.params = e, this.bodies = r, this.colliders = n, this.queries = o, this.raw = new Ca(t), this.rawCharacterCollision = new wn(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
    }
    free() {
      this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
      return this.raw.up();
    }
    setUp(t) {
      let e = g.intoRaw(t);
      return this.raw.setUp(e);
    }
    applyImpulsesToDynamicBodies() {
      return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(t) {
      this._applyImpulsesToDynamicBodies = t;
    }
    characterMass() {
      return this._characterMass;
    }
    setCharacterMass(t) {
      this._characterMass = t;
    }
    offset() {
      return this.raw.offset();
    }
    setOffset(t) {
      this.raw.setOffset(t);
    }
    normalNudgeFactor() {
      return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(t) {
      this.raw.setNormalNudgeFactor(t);
    }
    slideEnabled() {
      return this.raw.slideEnabled();
    }
    setSlideEnabled(t) {
      this.raw.setSlideEnabled(t);
    }
    autostepMaxHeight() {
      return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
      return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
      return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
      return this.raw.autostepEnabled();
    }
    enableAutostep(t, e, r) {
      this.raw.enableAutostep(t, e, r);
    }
    disableAutostep() {
      return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
      return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(t) {
      this.raw.setMaxSlopeClimbAngle(t);
    }
    minSlopeSlideAngle() {
      return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(t) {
      this.raw.setMinSlopeSlideAngle(t);
    }
    snapToGroundDistance() {
      return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(t) {
      this.raw.enableSnapToGround(t);
    }
    disableSnapToGround() {
      this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
      return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(t, e, r, n, o) {
      let c = g.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, c, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(o)), c.free();
    }
    computedMovement() {
      return g.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
      return this.raw.computedGrounded();
    }
    numComputedCollisions() {
      return this.raw.numComputedCollisions();
    }
    computedCollision(t, e) {
      if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
        let r = this.rawCharacterCollision;
        return e = e ?? new ib(), e.translationDeltaApplied = g.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = g.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = g.fromRaw(r.worldWitness1()), e.witness2 = g.fromRaw(r.worldWitness2()), e.normal1 = g.fromRaw(r.worldNormal1()), e.normal2 = g.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else return null;
    }
  }
  var Fi;
  (function(i) {
    i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
  })(Fi || (Fi = {}));
  class sb {
    constructor(t, e, r, n, o, c) {
      this.params = t, this.bodies = e, this.raw = new xa(r, n, o, c);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    setKp(t, e) {
      this.raw.set_kp(t, e);
    }
    setKi(t, e) {
      this.raw.set_kp(t, e);
    }
    setKd(t, e) {
      this.raw.set_kp(t, e);
    }
    setAxes(t) {
      this.raw.set_axes_mask(t);
    }
    resetIntegrals() {
      this.raw.reset_integrals();
    }
    applyLinearCorrection(t, e, r) {
      let n = g.intoRaw(e), o = g.intoRaw(r);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, n, o), n.free(), o.free();
    }
    applyAngularCorrection(t, e, r) {
      let n = F.intoRaw(e), o = g.intoRaw(r);
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, n, o), n.free(), o.free();
    }
    linearCorrection(t, e, r) {
      let n = g.intoRaw(e), o = g.intoRaw(r), c = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, n, o);
      return n.free(), o.free(), g.fromRaw(c);
    }
    angularCorrection(t, e, r) {
      let n = F.intoRaw(e), o = g.intoRaw(r), c = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, n, o);
      return n.free(), o.free(), g.fromRaw(c);
    }
  }
  class ab {
    constructor(t, e, r, n) {
      this.raw = new Ra(t.handle), this.bodies = e, this.colliders = r, this.queries = n, this._chassis = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(t, e, r, n) {
      this.raw.update_vehicle(t, this.bodies.raw, this.colliders.raw, this.queries.raw, e, r, this.colliders.castClosure(n));
    }
    currentVehicleSpeed() {
      return this.raw.current_vehicle_speed();
    }
    chassis() {
      return this._chassis;
    }
    get indexUpAxis() {
      return this.raw.index_up_axis();
    }
    set indexUpAxis(t) {
      this.raw.set_index_up_axis(t);
    }
    get indexForwardAxis() {
      return this.raw.index_forward_axis();
    }
    set setIndexForwardAxis(t) {
      this.raw.set_index_forward_axis(t);
    }
    addWheel(t, e, r, n, o) {
      let c = g.intoRaw(t), l = g.intoRaw(e), _ = g.intoRaw(r);
      this.raw.add_wheel(c, l, _, n, o), c.free(), l.free(), _.free();
    }
    numWheels() {
      return this.raw.num_wheels();
    }
    wheelChassisConnectionPointCs(t) {
      return g.fromRaw(this.raw.wheel_chassis_connection_point_cs(t));
    }
    setWheelChassisConnectionPointCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_chassis_connection_point_cs(t, r), r.free();
    }
    wheelSuspensionRestLength(t) {
      return this.raw.wheel_suspension_rest_length(t);
    }
    setWheelSuspensionRestLength(t, e) {
      this.raw.set_wheel_suspension_rest_length(t, e);
    }
    wheelMaxSuspensionTravel(t) {
      return this.raw.wheel_max_suspension_travel(t);
    }
    setWheelMaxSuspensionTravel(t, e) {
      this.raw.set_wheel_max_suspension_travel(t, e);
    }
    wheelRadius(t) {
      return this.raw.wheel_radius(t);
    }
    setWheelRadius(t, e) {
      this.raw.set_wheel_radius(t, e);
    }
    wheelSuspensionStiffness(t) {
      return this.raw.wheel_suspension_stiffness(t);
    }
    setWheelSuspensionStiffness(t, e) {
      this.raw.set_wheel_suspension_stiffness(t, e);
    }
    wheelSuspensionCompression(t) {
      return this.raw.wheel_suspension_compression(t);
    }
    setWheelSuspensionCompression(t, e) {
      this.raw.set_wheel_suspension_compression(t, e);
    }
    wheelSuspensionRelaxation(t) {
      return this.raw.wheel_suspension_relaxation(t);
    }
    setWheelSuspensionRelaxation(t, e) {
      this.raw.set_wheel_suspension_relaxation(t, e);
    }
    wheelMaxSuspensionForce(t) {
      return this.raw.wheel_max_suspension_force(t);
    }
    setWheelMaxSuspensionForce(t, e) {
      this.raw.set_wheel_max_suspension_force(t, e);
    }
    wheelBrake(t) {
      return this.raw.wheel_brake(t);
    }
    setWheelBrake(t, e) {
      this.raw.set_wheel_brake(t, e);
    }
    wheelSteering(t) {
      return this.raw.wheel_steering(t);
    }
    setWheelSteering(t, e) {
      this.raw.set_wheel_steering(t, e);
    }
    wheelEngineForce(t) {
      return this.raw.wheel_engine_force(t);
    }
    setWheelEngineForce(t, e) {
      this.raw.set_wheel_engine_force(t, e);
    }
    wheelDirectionCs(t) {
      return g.fromRaw(this.raw.wheel_direction_cs(t));
    }
    setWheelDirectionCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_direction_cs(t, r), r.free();
    }
    wheelAxleCs(t) {
      return g.fromRaw(this.raw.wheel_axle_cs(t));
    }
    setWheelAxleCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_axle_cs(t, r), r.free();
    }
    wheelFrictionSlip(t) {
      return this.raw.wheel_friction_slip(t);
    }
    setWheelFrictionSlip(t, e) {
      this.raw.set_wheel_friction_slip(t, e);
    }
    wheelSideFrictionStiffness(t) {
      return this.raw.wheel_side_friction_stiffness(t);
    }
    setWheelSideFrictionStiffness(t, e) {
      this.raw.set_wheel_side_friction_stiffness(t, e);
    }
    wheelRotation(t) {
      return this.raw.wheel_rotation(t);
    }
    wheelForwardImpulse(t) {
      return this.raw.wheel_forward_impulse(t);
    }
    wheelSideImpulse(t) {
      return this.raw.wheel_side_impulse(t);
    }
    wheelSuspensionForce(t) {
      return this.raw.wheel_suspension_force(t);
    }
    wheelContactNormal(t) {
      return g.fromRaw(this.raw.wheel_contact_normal_ws(t));
    }
    wheelContactPoint(t) {
      return g.fromRaw(this.raw.wheel_contact_point_ws(t));
    }
    wheelSuspensionLength(t) {
      return this.raw.wheel_suspension_length(t);
    }
    wheelHardPoint(t) {
      return g.fromRaw(this.raw.wheel_hard_point_ws(t));
    }
    wheelIsInContact(t) {
      return this.raw.wheel_is_in_contact(t);
    }
    wheelGroundObject(t) {
      return this.colliders.get(this.raw.wheel_ground_object(t));
    }
  }
  class Je {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, n, o, c, l, _, h, u, w, b, f, C) {
      this.gravity = t, this.integrationParameters = new Dg(e), this.islands = new Kg(r), this.broadPhase = new Xg(n), this.narrowPhase = new $g(o), this.bodies = new Tg(c), this.colliders = new lb(l), this.impulseJoints = new Hg(_), this.multibodyJoints = new Vg(h), this.ccdSolver = new Jg(u), this.queryPipeline = new tb(w), this.physicsPipeline = new Qg(b), this.serializationPipeline = new Mi(f), this.debugRenderPipeline = new rb(C), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new Je(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new Mi().deserializeAll(t);
    }
    debugRender() {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new eb(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    updateSceneQueries() {
      this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
    }
    get timestep() {
      return this.integrationParameters.dt;
    }
    set timestep(t) {
      this.integrationParameters.dt = t;
    }
    get lengthUnit() {
      return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(t) {
      this.integrationParameters.lengthUnit = t;
    }
    get numSolverIterations() {
      return this.integrationParameters.numSolverIterations;
    }
    set numSolverIterations(t) {
      this.integrationParameters.numSolverIterations = t;
    }
    get numAdditionalFrictionIterations() {
      return this.integrationParameters.numAdditionalFrictionIterations;
    }
    set numAdditionalFrictionIterations(t) {
      this.integrationParameters.numAdditionalFrictionIterations = t;
    }
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    switchToStandardPgsSolver() {
      this.integrationParameters.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.integrationParameters.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new nb(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, n) {
      let o = new sb(this.integrationParameters, this.bodies, t, e, r, n);
      return this.pidControllers.add(o), o;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new ab(t, this.bodies, this.colliders, this.queryPipeline);
      return this.vehicleControllers.add(e), e;
    }
    removeVehicleController(t) {
      this.vehicleControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let r = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, r);
    }
    createImpulseJoint(t, e, r, n) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, n);
    }
    createMultibodyJoint(t, e, r, n) {
      return this.multibodyJoints.createJoint(t, e.handle, r.handle, n);
    }
    getRigidBody(t) {
      return this.bodies.get(t);
    }
    getCollider(t) {
      return this.colliders.get(t);
    }
    getImpulseJoint(t) {
      return this.impulseJoints.get(t);
    }
    getMultibodyJoint(t) {
      return this.multibodyJoints.get(t);
    }
    removeRigidBody(t) {
      this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(t, e) {
      this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
    }
    removeImpulseJoint(t, e) {
      this.impulseJoints && this.impulseJoints.remove(t.handle, e);
    }
    removeMultibodyJoint(t, e) {
      this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
    }
    forEachCollider(t) {
      this.colliders.forEach(t);
    }
    forEachRigidBody(t) {
      this.bodies.forEach(t);
    }
    forEachActiveRigidBody(t) {
      this.bodies.forEachActiveRigidBody(this.islands, t);
    }
    castRay(t, e, r, n, o, c, l, _) {
      return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _) {
      return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h) {
      this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, r, n, o, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    intersectionWithShape(t, e, r, n, o, c, l, _) {
      let h = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
      return h != null ? this.colliders.get(h) : null;
    }
    projectPoint(t, e, r, n, o, c, l) {
      return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, r, n, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, n, o, c) {
      return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, r, n ? n.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
    }
    intersectionsWithPoint(t, e, r, n, o, c, l) {
      this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, n, o, c, l, _, h, u, w, b) {
      return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, r, n, o, c, l, _, h, u ? u.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h) {
      this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), o, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(r));
    }
    contactPairsWith(t, e) {
      this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
    }
    intersectionPairsWith(t, e) {
      this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
    }
    contactPair(t, e, r) {
      this.narrowPhase.contactPair(t.handle, e.handle, r);
    }
    intersectionPair(t, e) {
      return this.narrowPhase.intersectionPair(t.handle, e.handle);
    }
  }
  var De;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(De || (De = {}));
  class ob {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
      return this.raw.collider1();
    }
    collider2() {
      return this.raw.collider2();
    }
    totalForce() {
      return g.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
      return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
      return g.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
      return this.raw.max_force_magnitude();
    }
  }
  class cb {
    constructor(t, e) {
      this.raw = e || new un(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new ob();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var yr;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(yr || (yr = {}));
  var Li;
  (function(i) {
    i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Li || (Li = {}));
  var ke;
  (function(i) {
    i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
  })(ke || (ke = {}));
  class Bi {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = nt.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
      return this.ensureShapeIsCached(), this._shape;
    }
    isValid() {
      return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
      return g.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    rotation() {
      return F.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    isSensor() {
      return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(t) {
      this.colliderSet.raw.coSetSensor(this.handle, t);
    }
    setShape(t) {
      let e = t.intoRaw();
      this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
    }
    setEnabled(t) {
      this.colliderSet.raw.coSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(t) {
      this.colliderSet.raw.coSetRestitution(this.handle, t);
    }
    setFriction(t) {
      this.colliderSet.raw.coSetFriction(this.handle, t);
    }
    frictionCombineRule() {
      return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(t) {
      this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
    }
    restitutionCombineRule() {
      return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(t) {
      this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
    }
    setCollisionGroups(t) {
      this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
    }
    setSolverGroups(t) {
      this.colliderSet.raw.coSetSolverGroups(this.handle, t);
    }
    contactSkin() {
      return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(t) {
      return this.colliderSet.raw.coSetContactSkin(this.handle, t);
    }
    activeHooks() {
      return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(t) {
      this.colliderSet.raw.coSetActiveHooks(this.handle, t);
    }
    activeEvents() {
      return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(t) {
      this.colliderSet.raw.coSetActiveEvents(this.handle, t);
    }
    activeCollisionTypes() {
      return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(t) {
      return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
    }
    contactForceEventThreshold() {
      return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(t) {
      this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
    }
    setDensity(t) {
      this.colliderSet.raw.coSetDensity(this.handle, t);
    }
    setMass(t) {
      this.colliderSet.raw.coSetMass(this.handle, t);
    }
    setMassProperties(t, e, r, n) {
      let o = g.intoRaw(e), c = g.intoRaw(r), l = F.intoRaw(n);
      this.colliderSet.raw.coSetMassProperties(this.handle, t, o, c, l), o.free(), c.free(), l.free();
    }
    setTranslation(t) {
      this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
    }
    setTranslationWrtParent(t) {
      this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
    }
    setRotation(t) {
      this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    setRotationWrtParent(t) {
      this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
    }
    shapeType() {
      return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
      return g.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(t) {
      const e = g.intoRaw(t);
      this.colliderSet.raw.coSetHalfExtents(this.handle, e);
    }
    radius() {
      return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(t) {
      this.colliderSet.raw.coSetRadius(this.handle, t);
    }
    roundRadius() {
      return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(t) {
      this.colliderSet.raw.coSetRoundRadius(this.handle, t);
    }
    halfHeight() {
      return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(t) {
      this.colliderSet.raw.coSetHalfHeight(this.handle, t);
    }
    vertices() {
      return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
      return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
      return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
      let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
      return g.fromRaw(t);
    }
    heightfieldNRows() {
      return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
      return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
      return this._parent;
    }
    friction() {
      return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
      return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
      return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
      return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
      return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
      return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
      return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(t) {
      let e = g.intoRaw(t), r = this.colliderSet.raw.coContainsPoint(this.handle, e);
      return e.free(), r;
    }
    projectPoint(t, e) {
      let r = g.intoRaw(t), n = qe.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), n = g.intoRaw(t.dir), o = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), o;
    }
    castShape(t, e, r, n, o, c, l, _) {
      let h = g.intoRaw(t), u = g.intoRaw(r), w = F.intoRaw(n), b = g.intoRaw(o), f = e.intoRaw(), C = ve.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, u, w, b, c, l, _));
      return h.free(), u.free(), w.free(), b.free(), f.free(), C;
    }
    castCollider(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = Ve.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, n, o, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let n = g.intoRaw(e), o = F.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, n, o);
      return n.free(), o.free(), c.free(), l;
    }
    contactShape(t, e, r, n) {
      let o = g.intoRaw(e), c = F.intoRaw(r), l = t.intoRaw(), _ = fe.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, o, c, n));
      return o.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return fe.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, n, o, e, r);
      return n.free(), o.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = Ue.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, o, e, r));
      return n.free(), o.free(), c;
    }
  }
  var Zt;
  (function(i) {
    i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
  })(Zt || (Zt = {}));
  class Q {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = Zt.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = F.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = Ie.Average, this.restitutionCombineRule = Ie.Average, this.activeCollisionTypes = ke.DEFAULT, this.activeEvents = De.NONE, this.activeHooks = yr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = F.identity();
    }
    static ball(t) {
      const e = new Mr(t);
      return new Q(e);
    }
    static capsule(t, e) {
      const r = new mn(t, e);
      return new Q(r);
    }
    static segment(t, e) {
      const r = new fn(t, e);
      return new Q(r);
    }
    static triangle(t, e, r) {
      const n = new yn(t, e, r);
      return new Q(n);
    }
    static roundTriangle(t, e, r, n) {
      const o = new vn(t, e, r, n);
      return new Q(o);
    }
    static polyline(t, e) {
      const r = new Sn(t, e);
      return new Q(r);
    }
    static trimesh(t, e, r) {
      const n = new Fr(t, e, r);
      return new Q(n);
    }
    static cuboid(t, e, r) {
      const n = new Se(t, e, r);
      return new Q(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = new bn(t, e, r, n);
      return new Q(o);
    }
    static heightfield(t, e, r, n, o) {
      const c = new Rn(t, e, r, n, o);
      return new Q(c);
    }
    static cylinder(t, e) {
      const r = new Cn(t, e);
      return new Q(r);
    }
    static roundCylinder(t, e, r) {
      const n = new En(t, e, r);
      return new Q(n);
    }
    static cone(t, e) {
      const r = new xn(t, e);
      return new Q(r);
    }
    static roundCone(t, e, r) {
      const n = new jn(t, e, r);
      return new Q(n);
    }
    static convexHull(t) {
      const e = new mr(t, null);
      return new Q(e);
    }
    static convexMesh(t, e) {
      const r = new mr(t, e);
      return new Q(r);
    }
    static roundConvexHull(t, e) {
      const r = new fr(t, null, e);
      return new Q(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new fr(t, e, r);
      return new Q(n);
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return F.copy(this.rotation, t), this;
    }
    setSensor(t) {
      return this.isSensor = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setContactSkin(t) {
      return this.contactSkin = t, this;
    }
    setDensity(t) {
      return this.massPropsMode = Zt.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = Zt.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = Zt.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), F.copy(this.angularInertiaLocalFrame, n), this;
    }
    setRestitution(t) {
      return this.restitution = t, this;
    }
    setFriction(t) {
      return this.friction = t, this;
    }
    setFrictionCombineRule(t) {
      return this.frictionCombineRule = t, this;
    }
    setRestitutionCombineRule(t) {
      return this.restitutionCombineRule = t, this;
    }
    setCollisionGroups(t) {
      return this.collisionGroups = t, this;
    }
    setSolverGroups(t) {
      return this.solverGroups = t, this;
    }
    setActiveHooks(t) {
      return this.activeHooks = t, this;
    }
    setActiveEvents(t) {
      return this.activeEvents = t, this;
    }
    setActiveCollisionTypes(t) {
      return this.activeCollisionTypes = t, this;
    }
    setContactForceEventThreshold(t) {
      return this.contactForceEventThreshold = t, this;
    }
  }
  class lb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new $(), this.map = new We(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Bi(this, e, null));
      });
    }
    castClosure(t) {
      return (e) => {
        if (t) return t(this.get(e));
      };
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createCollider(t, e, r) {
      let n = r != null && r != null;
      if (n && isNaN(r)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let o = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = F.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), u = F.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, o, c, l, e.massPropsMode, e.mass, _, h, u, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
      o.free(), c.free(), l.free(), _.free(), h.free(), u.free();
      let b = n ? t.get(r) : null, f = new Bi(this, w, b, e.shape);
      return this.map.set(w, f), f;
    }
    remove(t, e, r, n) {
      this.raw.remove(t, e.raw, r.raw, n), this.unmap(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    get(t) {
      return this.map.get(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class _b extends kn {
    constructor(t) {
      super(), this.world = t, this.material = new Mn({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Fn(), this.frustumCulled = false;
    }
    update() {
      this.visible == true && this.parent != null && (this.buffers = this.world.debugRender(), this.geometry.setAttribute("position", new Lr(this.buffers.vertices, 3)), this.geometry.setAttribute("color", new Lr(this.buffers.colors, 4)));
    }
    enable() {
      this.visible = true;
    }
    isEnabled() {
      return this.visible == true;
    }
    disable() {
      this.visible = false;
    }
    toggle() {
      this.visible = !this.visible;
    }
  }
  class db {
    constructor() {
      this.world = new Je({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new cb(true), this.debugger = new _b(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
    }
    update(t) {
      this.world.step(this.eventQueue), this.debugger.update(), this.entities.forEach(function(e) {
        e.update(t);
      }), this.eventQueue.drainCollisionEvents(function(e, r, n) {
        const o = this.getEntityFromColliderHandle(e), c = this.getEntityFromColliderHandle(r), l = {
          handle: e,
          pair: c,
          started: n,
          type: "collision"
        }, _ = {
          handle: r,
          pair: o,
          started: n,
          type: "collision"
        };
        o.dispatchEvent(l), c.dispatchEvent(_);
      }.bind(this));
    }
    animate(t, e) {
      this.entities.forEach(function(r) {
        r.animate(t, e);
      });
    }
    setFrequency(t = 60) {
      this.world.timestep = 1 / t;
    }
    add(t) {
      if (t != null) {
        if (arguments.length > 1) for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        this.entities.set(t.id, t), this.createObject3D(t), this.createRigidBody(t), this.createColliders(t), this.createParentJoint(t), t.dispatchEvent({
          type: "added"
        });
      }
      return t;
    }
    remove(t) {
      return this.removeJoints(t), this.removeColliders(t), this.removeRigidBody(t), t.object.removeFromParent(), this.entities.delete(t.id), t.dispatchEvent({
        type: "removed"
      }), t;
    }
    getEntityById(t) {
      return this.entities.get(t);
    }
    getChildren(t) {
      const e = [], r = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(n) {
        e.push(n);
      });
      for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n], c = this.world.impulseJoints.get(o), l = this.getEntityById(c.body2().userData.id);
        t.id != l.id && r.push(l);
      }
      return r;
    }
    duplicate(t) {
      var e = t.toJSON();
      return this.create(e);
    }
    getEntityFromColliderHandle(t) {
      const r = this.world.getCollider(t)._parent;
      return this.getEntityById(r.userData.id);
    }
    createObject3D(t) {
      const e = t.createObject3D(t.objectDesc);
      t.setObject(e);
    }
    createRigidBody(t) {
      const e = this.world.createRigidBody(t.rigidBodyDesc);
      t.setRigidBody(e);
    }
    removeRigidBody(t) {
      this.world.removeRigidBody(t.rigidBody), t.rigidBody = null;
    }
    createColliders(t) {
      t.rigidBody && t.collidersDesc.forEach(function(e) {
        const r = this.world.createCollider(e, t.rigidBody);
        r.events = e.events;
      }.bind(this));
    }
    removeColliders(t) {
      for (let e = t.rigidBody.numColliders() - 1; e >= 0; e--) {
        const r = t.rigidBody.collider(e);
        this.world.removeCollider(r);
      }
    }
    createJoint(t, e) {
      const r = new _t(), n = new _t().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), o = new Gt().copy(t.rigidBodyDesc.rotation), c = new Gt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(o.conjugate()), n.applyQuaternion(c.conjugate());
      const l = At.fixed(r, o, n, c);
      return this.world.createImpulseJoint(l, t.rigidBody, e.rigidBody, true);
    }
    removeJoint(t) {
      this.world.removeImpulseJoint(t, true);
    }
    createParentJoint(t) {
      let e = t.getParentId(), r = this.getEntityById(e);
      e && (r ? this.createJoint(r, t) : this.jointQueue.push(t.id));
      for (let n = this.jointQueue.length - 1; n >= 0; n--) {
        let o = this.getEntityById(this.jointQueue[n]);
        o && (r = this.getEntityById(o.getParentId()), r && (this.createJoint(r, o), this.jointQueue.splice(n, 1)));
      }
    }
    removeJoints(t) {
      const e = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(r) {
        e.push(r);
      });
      for (let r = e.length - 1; r >= 0; r--) {
        const n = e[r], o = this.world.impulseJoints.get(n), c = this.getEntityById(o.body1().userData.id), l = this.getEntityById(o.body2().userData.id);
        t.id == c.id && l.rigidBodyDesc.userData.parentId != null && (this.jointQueue.push(l.id), l.setParentId(null)), this.removeJoint(o);
      }
    }
    removeParentJoint(t) {
      const e = [], r = this.getEntityById(t.getParentId());
      if (r) {
        this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(r.rigidBody.handle, function(n) {
          e.push(n);
        });
        for (let n = e.length - 1; n >= 0; n--) {
          const o = e[n], c = this.world.impulseJoints.get(o), l = this.getEntityById(c.body2().userData.id);
          t.id == l.id && (this.removeJoint(c), this.jointQueue.push(l.id));
        }
      }
    }
    createController(t) {
      const e = this.world.createCharacterController(0.01);
      return t.setController(e), e.setSlideEnabled(true), e.setMaxSlopeClimbAngle(45 * Math.PI / 180), e.setMinSlopeSlideAngle(30 * Math.PI / 180), e.enableAutostep(0.5, 0.2, true), e.enableSnapToGround(0.5), e.setApplyImpulsesToDynamicBodies(true), e.setCharacterMass(1), e;
    }
    removeController(t) {
      this.world.removeCharacterController(t.controller), t.controller = null;
    }
    clear() {
      this.entities.forEach(function(t) {
        this.remove(t);
      }.bind(this)), this.jointQueue = [];
    }
    toJSON() {
      const t = [];
      return this.entities.forEach(function(e) {
        t.push(e.toJSON());
      }), t;
    }
  }
  class hb {
    constructor(t) {
      this.ticker = new ts(), this.physics = new db(), this.graphics, this.assets = new es(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new rs(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
        models: "../json/assets-models.json",
        textures: "../json/assets-textures.json",
        audio: "../json/assets-audio.json",
        json: "../json/assets-json.json"
      });
    }
    update(t = {
      delta: 1 / 60
    }) {
      this.physics.update(t.delta);
    }
    render(t = {
      delta: 1 / 60,
      alpha: 0
    }) {
      this.physics.animate(t.delta, t.alpha), this.graphics.render();
    }
    onLoad(t) {
      this.ticker.add(this.update.bind(this), 1e3 / 60), this.ticker.add(this.render.bind(this), -1), this.ticker.start(), typeof t == "function" && t();
    }
  }
  const wb = {
    key: 0,
    class: "modal"
  }, ub = {
    class: "container"
  }, pb = {
    class: "content"
  }, gb = {
    key: 0,
    class: "title"
  }, bb = [
    "innerHTML"
  ], mb = {
    class: "inputs"
  }, fb = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], yb = {
    __name: "Modal",
    setup(i) {
      var t = Y(""), e = Y(""), r = Y([]), n = Y(false);
      function o() {
        window.addEventListener("openModal", l), window.addEventListener("closeModal", _), window.addEventListener("keydown", w);
      }
      function c() {
        window.removeEventListener("openModal", l), window.removeEventListener("closeModal", _), window.removeEventListener("keydown", w);
      }
      function l(b) {
        n.value = true, b.detail && (b.detail.title && (t.value = b.detail.title), b.detail.text && (e.value = b.detail.text), b.detail.inputs && (r.value = b.detail.inputs, r.value.forEach(function(f) {
          f.type == "file" || f.type == "range" || f.type == "text" ? f.event = "change" : f.event = "click";
        }))), setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalOpened"));
        }, 100);
      }
      function _() {
        n.value = false, setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalClosed"));
        }, 100);
      }
      function h(b, f) {
        b == null && (b = _), b(f);
      }
      function u(b) {
        var f = r.value[r.value.length - 1];
        f && h(f.callback, b);
      }
      function w(b) {
        if (n.value == true) {
          var f = [
            "Space",
            "Enter",
            "Escape"
          ];
          f.indexOf(b.code) > -1 && (b.preventDefault(), u(b));
        }
      }
      return Nt(function() {
        o();
      }), vr(function() {
        c();
      }), (b, f) => (W(), Sr(Me, {
        name: "fade-modal"
      }, {
        default: te(() => [
          ut(n) == true ? (W(), V("div", wb, [
            j("div", {
              class: "background",
              onClick: _
            }),
            j("div", ub, [
              j("div", pb, [
                ut(t) != "" ? (W(), V("h1", gb, ee(ut(t)), 1)) : Wt("", true),
                j("p", {
                  class: "text",
                  innerHTML: ut(e)
                }, null, 8, bb),
                j("div", mb, [
                  (W(true), V(re, null, ue(ut(r), (C, T) => (W(), V("input", Ln({
                    class: C.class,
                    id: "modal-" + C.type + "-" + T,
                    type: C.type,
                    value: C.value,
                    min: C.min,
                    max: C.max,
                    step: C.step,
                    accept: C.accept,
                    style: C.style
                  }, {
                    [Bn(C.event)]: (z) => h(C.callback, z)
                  }), null, 16, fb))), 256))
                ]),
                j("a", {
                  class: "close",
                  onClick: _
                }, f[0] || (f[0] = [
                  j("span", null, "x", -1)
                ]))
              ])
            ])
          ])) : Wt("", true)
        ]),
        _: 1
      }));
    }
  }, vb = Jt(yb, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), Sb = {
    __name: "App",
    setup(i) {
      const t = Y(false), e = Y(), r = window.game = new hb(o), n = wa();
      function o() {
        t.value = true;
      }
      return Nt(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Nn("router-view");
        return W(), V(re, null, [
          j("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), V("div", {
            key: 0,
            class: Lt([
              "page",
              ut(n).name
            ])
          }, [
            Rt(_, null, {
              default: te(({ Component: h }) => [
                Rt(Me, {
                  name: "fade"
                }, {
                  default: te(() => [
                    (W(), Sr(On(h), {
                      game: ut(r)
                    }, null, 8, [
                      "game"
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ], 2)) : Wt("", true),
          Rt(vb),
          Rt(is)
        ], 64);
      };
    }
  }, Rb = Jt(Sb, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), Cb = {
    __name: "PageHome",
    setup(i) {
      var t = Y("Home Page");
      return Nt(function() {
      }), (e, r) => (W(), V("h1", null, ee(ut(t)), 1));
    }
  }, Eb = {
    __name: "PagePlay",
    setup(i) {
      var t = Y("Play Page");
      return Nt(function() {
      }), (e, r) => (W(), V("h1", null, ee(ut(t)), 1));
    }
  };
  class Ke extends Hn {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Gn.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
        position_1: new _t(),
        position_2: new _t(),
        rotation_1: new Gt(),
        rotation_2: new Gt()
      }, this.tweens = new ns(), this.forceDirection = new _t(), this.forceAcceleration = 1, this.forceSpeedMax = 1 / 0, this.setObjectDesc(t), this.setRigidBodyDesc(t), this.addColliderDesc(t), this.onAdded = this.onAdded.bind(this), this.addEventListener("added", this.onAdded);
    }
    update(t) {
      this.updateSnapshot(), this.updateForce(), this.dispatchEvent({
        type: "updated"
      });
    }
    animate(t, e) {
      if (this.rigidBody && this.rigidBody.isFixed()) return false;
      this.tweens.update(), this.lerp(e);
    }
    setObjectDesc(t) {
      t = Object.assign({
        ...{
          scale: {
            x: 1,
            y: 1,
            z: 1
          }
        }
      }, t), this.objectDesc = new Br(), this.objectDesc.scale.copy(t.scale);
    }
    setObject(t) {
      this.object = t;
    }
    createObject3D(t) {
      const e = new Br();
      return e.scale.copy(t.scale), e;
    }
    setRigidBodyDesc(t) {
      t = Object.assign({
        ...{
          angularDamping: 0,
          ccd: false,
          enabledRotations: {
            x: true,
            y: true,
            z: true
          },
          enabledTranslations: {
            x: true,
            y: true,
            z: true
          },
          isEnabled: true,
          linearDamping: 0,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0,
            w: 1
          },
          sleeping: false,
          softCcdPrediction: 0,
          status: 0
        }
      }, t), this.rigidBodyDesc = new St(isNaN(t.status) ? mt[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
        id: this.id,
        parentId: t.parentId
      });
    }
    setRigidBody(t) {
      this.rigidBody = t;
    }
    addColliderDesc(t) {
      if (t.shape) {
        t = Object.assign({
          ...{
            activeCollisionTypes: "DEFAULT",
            activeEvents: "NONE",
            collisionGroups: 4294967295,
            contactForceEventThreshold: 0,
            density: 1,
            events: [],
            friction: 0.5,
            isSensor: false,
            mass: 0,
            restitution: 0,
            shape: null,
            solverGroups: 4294967295,
            translation: {
              x: 0,
              y: 0,
              z: 0
            }
          }
        }, t);
        const r = new Q(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? ke[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? De[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
      }
    }
    setController(t) {
      this.controller = t;
    }
    getParentId() {
      return this.rigidBodyDesc.userData.parentId;
    }
    setParentId(t) {
      this.rigidBodyDesc.userData.parentId = t;
    }
    getPosition() {
      return this.rigidBody == null ? this.rigidBodyDesc.translation : this.rigidBody.isKinematic() ? this.rigidBody.nextTranslation() : this.rigidBody.translation();
    }
    setPosition(t) {
      this.rigidBody && this.rigidBody.setTranslation(t);
    }
    resetPosition() {
      this.setPosition(this.rigidBodyDesc.translation);
    }
    getRotation() {
      return this.rigidBody == null ? this.rigidBodyDesc.rotation : this.rigidBody.isKinematic() ? this.rigidBody.nextRotation() : this.rigidBody.rotation();
    }
    setRotation(t) {
      this.rigidBody && this.rigidBody.setRotation(t);
    }
    resetRotation() {
      this.setRotation(this.rigidBodyDesc.rotation);
    }
    getScale() {
      return this.object.scale;
    }
    setScale(t) {
      this.object && this.object.scale.copy(t);
    }
    resetScale() {
      this.setScale(this.objectDesc.scale);
    }
    getLinearVelocity() {
      return this.rigidBody ? this.rigidBody.linvel() : this.rigidBodyDesc.linvel;
    }
    setLinearVelocity(t) {
      this.rigidBody && this.rigidBody.setLinvel(t);
    }
    applyVelocityAtAxisAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = {
      x: 0,
      y: 0,
      z: 0
    }, r = 0) {
      ct.copy(this.getLinearVelocity()), ct.applyAxisAngle(e, -r), ct.multiply(t), ct.applyAxisAngle(e, r), this.setLinearVelocity(ct, true);
    }
    applyImpulse(t = {
      x: 0,
      y: 0,
      z: 0
    }) {
      this.rigidBody.applyImpulse(t, true);
    }
    applyImpulseAtAngle(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 0) {
      t = ct.copy(t), t.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, e), this.applyImpulse(t);
    }
    setForce(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 1, r = 1 / 0) {
      this.forceDirection.copy(t).normalize(), this.forceAcceleration = e, this.forceSpeedMax = r;
    }
    updateForce() {
      if (this.forceDirection.length() > 0) {
        ct.copy(this.getLinearVelocity());
        const t = ct.dot(this.forceDirection), e = t + this.forceAcceleration, n = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        ct.x += this.forceDirection.x * n, ct.y += this.forceDirection.y * n, ct.z += this.forceDirection.z * n, this.setLinearVelocity(ct);
      }
    }
    resetLinearVelocity() {
      this.setLinearVelocity(this.rigidBodyDesc.linvel);
    }
    getAngularVelocity() {
      return this.rigidBody == null ? this.rigidBodyDesc.angvel : this.rigidBody.angvel();
    }
    setAngularVelocity(t) {
      this.rigidBody && this.rigidBody.setAngvel(t);
    }
    setAngularVelocityAtAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = 0) {
      const r = ct.copy(this.getLinearVelocity());
      let n = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), n *= -Math.sign(Math.round(r.x)), t = ct.copy(t), t.multiplyScalar(n), this.setAngularVelocity(t);
    }
    resetAngularVelocity() {
      this.setAngularVelocity(this.rigidBodyDesc.angvel);
    }
    getStatus() {
      return this.rigidBody ? this.rigidBody.bodyType : this.rigidBodyDesc.status;
    }
    setStatus(t) {
      this.rigidBody && this.rigidBody.setBodyType(t);
    }
    resetStatus() {
      this.setStatus(this.rigidBodyDesc.status);
    }
    resetForces() {
      this.rigidBody && this.rigidBody.resetForces();
    }
    resetTorques() {
      this.rigidBody && this.rigidBody.resetTorques();
    }
    reset() {
      this.resetPosition(), this.resetRotation(), this.resetScale(), this.resetLinearVelocity(), this.resetAngularVelocity(), this.resetForces(), this.resetTorques(), this.resetStatus(), this.updateSnapshot(), this.lerp(1);
    }
    tween(t) {
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, n) => r && r[n] || null, ss)), new as(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
    }
    updateSnapshot(t = false) {
      t == true ? (this.snapshot.position_1.copy(this.rigidBodyDesc.translation), this.snapshot.position_2.copy(this.rigidBodyDesc.translation), this.snapshot.rotation_1.copy(this.rigidBodyDesc.rotation), this.snapshot.rotation_2.copy(this.rigidBodyDesc.rotation)) : (this.snapshot.position_1.copy(this.snapshot.position_2), this.snapshot.rotation_1.copy(this.snapshot.rotation_2), this.rigidBody.isKinematic() ? (this.snapshot.position_2.copy(this.rigidBody.nextTranslation()), this.snapshot.rotation_2.copy(this.rigidBody.nextRotation())) : (this.snapshot.position_2.copy(this.rigidBody.translation()), this.snapshot.rotation_2.copy(this.rigidBody.rotation())));
    }
    lerp(t = 0) {
      this.object && (this.object.position.lerpVectors(this.snapshot.position_1, this.snapshot.position_2, t), this.object.quaternion.slerpQuaternions(this.snapshot.rotation_1, this.snapshot.rotation_2, t));
    }
    getCollider(t) {
      for (let e = 0; e < this.rigidBody.numColliders(); e++) {
        const r = this.rigidBody.collider(e);
        if (t == r.handle) return r;
      }
    }
    onCollision(t) {
      this.getCollider(t.handle).events.filter(function(n) {
        return n.started == null && t.started == true || n.started == t.started;
      }.bind(this)).forEach(function(n) {
        try {
          let o = n;
          o && (typeof n == "object" && (o = this[n.name]), o(Object.assign(t, n)));
        } catch (o) {
          console.error(o);
        }
      }.bind(this));
    }
    onAdded(t) {
      this.updateSnapshot(true), this.lerp(1), this.onCollision = this.onCollision.bind(this), this.onRemoved = this.onRemoved.bind(this), this.addEventListener("collision", this.onCollision), this.addEventListener("removed", this.onRemoved);
    }
    onRemoved(t) {
      this.removeEventListener("collision", this.onCollision), this.removeEventListener("removed", this.onRemoved);
    }
    getSpeed() {
      return this.rigidBody == null ? 0 : ct.copy(this.getLinearVelocity()).length();
    }
    toJSON() {
      let t = {
        id: this.id,
        name: this.name,
        type: this.type
      };
      return t = Object.assign({
        angularDamping: this.rigidBodyDesc.angularDamping,
        ccd: this.rigidBodyDesc.ccdEnabled,
        enabledRotations: {
          x: this.rigidBodyDesc.rotationsEnabledX,
          y: this.rigidBodyDesc.rotationsEnabledY,
          z: this.rigidBodyDesc.rotationsEnabledZ
        },
        enabledTranslations: {
          x: this.rigidBodyDesc.translationsEnabledX,
          y: this.rigidBodyDesc.translationsEnabledY,
          z: this.rigidBodyDesc.translationsEnabledZ
        },
        isEnabled: this.rigidBodyDesc.enabled,
        linearDamping: this.rigidBodyDesc.linearDamping,
        parentId: this.rigidBodyDesc.userData.parentId,
        position: {
          x: this.rigidBodyDesc.translation.x,
          y: this.rigidBodyDesc.translation.y,
          z: this.rigidBodyDesc.translation.z
        },
        rotation: {
          x: this.rigidBodyDesc.rotation.x,
          y: this.rigidBodyDesc.rotation.y,
          z: this.rigidBodyDesc.rotation.z,
          w: this.rigidBodyDesc.rotation.w
        },
        scale: {
          x: this.objectDesc.scale.x,
          y: this.objectDesc.scale.y,
          z: this.objectDesc.scale.z
        },
        sleeping: this.rigidBodyDesc.sleeping,
        softCcdPrediction: this.rigidBodyDesc.softCcdPrediction,
        status: this.rigidBodyDesc.status
      }, t), this.collidersDesc.length > 0 && (t = Object.assign({
        activeCollisionTypes: this.collidersDesc[0].activeCollisionTypes,
        activeEvents: this.collidersDesc[0].activeEvents,
        collisionGroups: this.collidersDesc[0].collisionGroups,
        contactForceEventThreshold: this.collidersDesc[0].contactForceEventThreshold,
        density: this.collidersDesc[0].density,
        events: this.collidersDesc[0].events,
        friction: this.collidersDesc[0].friction,
        isSensor: this.collidersDesc[0].isSensor,
        mass: this.collidersDesc[0].mass,
        restitution: this.collidersDesc[0].restitution,
        solverGroups: this.collidersDesc[0].solverGroups,
        translation: this.collidersDesc[0].translation
      }, t)), t;
    }
  }
  let ct = new _t(), dt = class extends Ke {
    static model = {
      name: ""
    };
    constructor(t) {
      if (t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), t.shape = new Se(t.scale.x / 2, t.scale.y / 2, t.scale.z / 2), super(t), this.isCube = true, this.type = "cube", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onCubeAdded = this.onCubeAdded.bind(this), this.addEventListener("added", this.onCubeAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onCubeAdded(t) {
      this.onCubeRemoved = this.onCubeRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onCubeRemoved);
    }
    onCubeRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onCubeRemoved);
    }
    createModel(t) {
      var e = new Wn(1, 1, 1), r = new Vi({
        color: t.color
      });
      const n = new Ji(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new _t().copy(t), r = e.clone(), n = 0; n < this.rigidBody.numColliders(); n++) {
        var o = this.rigidBody.collider(n), c = this.collidersDesc[n], l = new _t().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new _t().copy(c.translation);
        n == 0 && r.divide(_), o.setHalfExtents(l.multiply(r)), o.setTranslationWrtParent(h.multiply(r));
      }
      super.setScale(e);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  };
  class An extends Ke {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class xb extends dt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = $i.create(t.lightType, t), this.type = "light";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    toJSON() {
      const t = super.toJSON();
      return t.lightType = this.model.type, t.intensity = this.model.intensity, t;
    }
  }
  class jb extends Ke {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Mr(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onSphereAdded = this.onSphereAdded.bind(this), this.addEventListener("added", this.onSphereAdded);
    }
    onSphereAdded(t) {
      this.onSphereRemoved = this.onSphereRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onSphereRemoved);
    }
    onSphereRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onSphereRemoved);
    }
    createModel(t) {
      const e = new qn(t.radius, t.widthSegments, t.heightSegments), r = new Vi({
        color: t.color
      }), n = new Ji(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setRadius(t) {
      this.rigidBody.collider(0).setRadius(t), this.object.scale.set(t * 2, t * 2, t * 2);
    }
    setScale(t) {
      this.setRadius(t.x / 2);
    }
  }
  class Ab extends Ke {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(n) {
        n.isMesh && (e = n.geometry, e.rotateX(n.rotation.x), e.rotateY(n.rotation.y), e.rotateZ(n.rotation.z), e.scale(n.scale.x, n.scale.y, n.scale.z), e.translate(n.position.x, n.position.y, n.position.z), r.push(e));
      }), e = Un(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Fr(t.vertices, t.indices, br.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
    }
    onTriMeshAdded(t) {
      this.onTriMeshRemoved = this.onTriMeshRemoved.bind(this), this.model && this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onTriMeshRemoved);
    }
    onTriMeshRemoved(t) {
      this.model && this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onTriMeshRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  let Pb = class Pn {
    static Cube = dt;
    static Empty = An;
    static Light = xb;
    static Sphere = jb;
    static TriMesh = Ab;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...Pn
      }).find((n) => n.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class Ib extends dt {
    static model = {
      name: "cube-bounce"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "bounce", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "bounce"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Se(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.4),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class zb extends dt {
    static model = {
      name: "cube-checkpoint"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setCheckpoint"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "checkpoint";
    }
    setCheckpoint({ pair: t }) {
      console.log(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class Tb extends dt {
    static model = {
      name: "cube-control"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "control";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "control"
      });
    }
  }
  class Db extends dt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#0290ff"
      }, t), super(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class kb extends dt {
    static model = {
      name: "cube-direction"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setDirection"
          }
        ],
        status: 1
      }, t), super(t), this.type = "direction";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setDirection({ pair: t, target: e }) {
      var r = new _t(1, 0, 0), n = new Gt().copy(e.rigidBody.rotation()), o = new Rr().setFromQuaternion(n), c = o.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class Mb extends dt {
    static model = {
      name: "cube-finish"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "finish"
          }
        ],
        status: 1
      }, t), super(t), this.type = "finish";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    finish({ pair: t }) {
      console.log(t);
    }
  }
  class Fb extends dt {
    static model = {
      name: "cube-grapple"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        status: 1
      }, t), super(t), this.type = "grapple";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "grapple"
      });
    }
  }
  class Lb extends dt {
    static model = {
      name: "cube-gravity"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setGravity"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "gravity";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setGravity({ pair: t, target: e }) {
      var r = new _t().copy(game.physics.world.gravity), n = r.length(), o = new Gt().copy(e.rigidBody.rotation()), c = new Rr().setFromQuaternion(o), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = n * Math.cos(l), game.physics.world.gravity.y = n * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class In {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, n, o = window.innerWidth, c = window.innerHeight, l = o / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Vn(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new Jn(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (n = new Kn(r), r.addEventListener("added", function(_) {
        r.parent.add(n);
      }), r.addEventListener("removed", function(_) {
        n.removeFromParent();
      })), r;
    }
  }
  class Bb extends dt {
    static model = {
      name: "cube-player"
    };
    constructor(t) {
      t = Object.assign({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "checkCollision"
          }
        ],
        status: 0
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = $i.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = In.create("PerspectiveCamera"), this.cameraOffset = new _t(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
    }
    update(t) {
      super.update(t), this.updateControls();
    }
    animate(t, e) {
      super.animate(t, e), this.updateCameraPosition();
    }
    updateCameraPosition() {
      this.camera.position.copy(this.object.position).add(this.cameraOffset);
    }
    checkCollision({ started: t, target: e }) {
      t == true && (e.jumpCount = 1);
    }
    jump() {
      if ((this.mode == "jump" || this.mode == "control") && this.jumpCount > 0) {
        const e = this.rigidBody.mass(), r = new _t(0, 30 * e, 0), n = game.physics.world.gravity, o = Math.atan2(n.y, n.x) + Math.PI / 2;
        this.setAngularVelocityAtAngle({
          x: 0,
          y: 0,
          z: 8
        }, o), this.applyVelocityAtAxisAngle({
          x: 1,
          y: 0,
          z: 1
        }, {
          x: 0,
          y: 0,
          z: 1
        }, o), this.applyImpulseAtAngle(r, o), this.jumpCount--;
      }
    }
    updateControls() {
      if (this.mode == "control") {
        let t = 0, e = game.physics.world.gravity, r = Math.atan2(e.y, e.x) + Math.PI / 2;
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), _r.copy({
          x: t,
          y: 0,
          z: 0
        }), _r.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(_r, 2, 14);
      }
    }
    onPlayerAdded(t) {
      this.onPlayerRemoved = this.onPlayerRemoved.bind(this), this.keyDown = this.keyDown.bind(this), this.keyUp = this.keyUp.bind(this), this.pointerDown = this.pointerDown.bind(this), this.pointerUp = this.pointerUp.bind(this), this.onSetMode = this.onSetMode.bind(this), this.onSetGravity = this.onSetGravity.bind(this), this.object.add(this.light), this.updateCameraPosition(), this.addEventListener("removed", this.onPlayerRemoved), this.addEventListener("setmode", this.onSetMode), this.addEventListener("setgravity", this.onSetGravity), document.addEventListener("keydown", this.keyDown), document.addEventListener("keyup", this.keyUp), document.addEventListener("pointerdown", this.pointerDown), document.addEventListener("pointerup", this.pointerUp);
    }
    onPlayerRemoved(t) {
      this.removeEventListener("removed", this.onPlayerRemoved), this.removeEventListener("setmode", this.onSetMode), this.removeEventListener("setgravity", this.onSetGravity), this.object.remove(this.light), document.removeEventListener("keydown", this.keyDown), document.removeEventListener("keyup", this.keyUp), document.removeEventListener("pointerdown", this.pointerDown), document.removeEventListener("pointerup", this.pointerUp);
    }
    reset() {
      this.jumpCount = 1, super.reset();
    }
    onSetMode({ value: t }) {
      this.setMode(t);
    }
    setMode(t) {
      this.mode = t;
    }
    onSetGravity({ value: t }) {
      this.tween({
        object: {
          z: this.camera.rotation.z
        },
        to: {
          z: t + Math.PI / 2
        },
        dynamic: true,
        duration: 250,
        easing: "Quadratic.InOut",
        onUpdate: function(e) {
          this.camera.rotation.z = e.z;
        }.bind(this)
      }).start();
    }
    keyDown({ code: t, repeat: e }) {
      e || (this.keys[t] = true, (this.keys.Space == true || this.keys.ArrowUp == true) && this.jump());
    }
    keyUp({ code: t }) {
      this.keys[t] = false;
    }
    pointerDown({ target: t, which: e }) {
      t.nodeName == "CANVAS" && (this.pointer[e] = true, this.pointer[1] == true && this.jump());
    }
    pointerUp({ which: t }) {
      this.pointer[t] = false;
    }
  }
  let _r = new _t();
  class Nb extends An {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), super(t), this.isProp = true, this.type = "prop", this.model = t.model, this.onPropAdded = this.onPropAdded.bind(this), this.addEventListener("added", this.onPropAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onPropAdded(t) {
      this.onPropRemoved = this.onPropRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onPropRemoved);
    }
    onPropRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onPropRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  class Ob extends dt {
    static model = {
      name: "cube-reset"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "reset"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "reset";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    reset({ pair: t }) {
      t.reset();
    }
  }
  class Hb extends dt {
    static model = {
      name: "cube-resize"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setPairScale"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "resize";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setPairScale({ pair: t, target: e }) {
      var r = e.rigidBody.collider(0), n = new _t().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(n);
    }
  }
  class Gb extends dt {
    static model = {
      name: "cube-spike"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "spike", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "kill"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Se(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.25),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    kill({ pair: t }) {
      console.log("Spike Sensor Touched!", t);
    }
  }
  class Wb extends dt {
    static model = {
      name: "cube-tip"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "showTip",
            value: "Say something nice!"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "tip";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    showTip({ value: t }) {
      window.dispatchEvent(new CustomEvent("openModal", {
        detail: {
          title: "Tip",
          text: t,
          inputs: [
            {
              type: "button",
              value: "Continue",
              callback: function() {
                window.dispatchEvent(new CustomEvent("closeModal"));
              }
            }
          ]
        }
      }));
    }
  }
  class Ni extends Pb {
    static Bounce = Ib;
    static Checkpoint = zb;
    static Control = Tb;
    static Cube = Db;
    static Direction = kb;
    static Finish = Mb;
    static Grapple = Fb;
    static Gravity = Lb;
    static Player = Bb;
    static Prop = Nb;
    static Reset = Ob;
    static Resize = Hb;
    static Spike = Gb;
    static Tip = Wb;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class qb {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class Ub {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new qb(t, e);
      return this.commands.splice(this.current + 1), this.commands.push(r), this.current++, r;
    }
    undo() {
      this.canUndo() && (this.commands[this.current].undo(), this.current--);
    }
    redo() {
      this.canRedo() && (this.current++, this.commands[this.current].execute());
    }
    canUndo() {
      return this.current >= 0;
    }
    canRedo() {
      return this.current < this.commands.length - 1;
    }
  }
  const Vb = {
    class: "panel"
  }, Jb = {
    class: "actions"
  }, Kb = {
    __name: "PanelActions",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "setMode"
    ],
    setup(i, { emit: t }) {
      const e = t;
      function r(n) {
        e("setMode", {
          type: n
        });
      }
      return Nt(function() {
      }), (n, o) => (W(), V("div", Vb, [
        j("div", Jb, [
          j("button", {
            class: Lt([
              "action",
              {
                selected: i.mode.type == "select"
              }
            ]),
            onClick: o[0] || (o[0] = (c) => r("select")),
            title: "Select"
          }, o[3] || (o[3] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "arrow_selector_tool", -1)
          ]), 2),
          j("button", {
            class: Lt([
              "action",
              {
                selected: i.mode.type == "add"
              }
            ]),
            onClick: o[1] || (o[1] = (c) => r("add")),
            title: "Add"
          }, o[4] || (o[4] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "dashboard_customize", -1)
          ]), 2),
          j("button", {
            class: Lt([
              "action",
              {
                selected: i.mode.type == "move"
              }
            ]),
            onClick: o[2] || (o[2] = (c) => r("move")),
            title: "Move camera"
          }, o[5] || (o[5] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "back_hand", -1)
          ]), 2)
        ])
      ]));
    }
  }, Xb = Jt(Kb, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), $b = {
    class: "panel"
  }, Yb = {
    class: "prefabs"
  }, Zb = [
    "title",
    "onClick"
  ], Qb = [
    "src"
  ], tm = {
    __name: "PanelPrefabs",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "addEntity"
    ],
    setup(i, { emit: t }) {
      const e = t, r = i, n = Y({}), o = Y(false), c = lt(() => _()), l = lt((w) => (r.mode.type == "add" ? o.value = !w : o.value = false, o.value));
      function _() {
        return Object.keys(n.value).map((w) => {
          const b = n.value[w], f = r.game.assets.get(b.model.name);
          return b.thumbnail = r.game.assets.assetModelLoader.renderThumbnail(f, b), b;
        });
      }
      function h(w, b) {
        e("addEntity", w, b);
      }
      function u() {
        o.value = false;
      }
      return Nt(async () => {
        n.value = r.game.assets.get("prefabs");
      }), (w, b) => Ki((W(), V("div", $b, [
        b[0] || (b[0] = j("div", {
          class: "header"
        }, [
          j("div", {
            class: "title"
          }, "Add")
        ], -1)),
        j("div", Yb, [
          (W(true), V(re, null, ue(c.value, (f) => (W(), V("button", {
            class: "prefab",
            title: f.className,
            onClick: (C) => h(C, f)
          }, [
            j("img", {
              src: f.thumbnail
            }, null, 8, Qb)
          ], 8, Zb))), 256))
        ]),
        j("button", {
          class: "close",
          onClick: u
        }, "x")
      ], 512)), [
        [
          Xi,
          l.value
        ]
      ]);
    }
  }, em = Jt(tm, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), rm = {
    class: "panel"
  }, im = {
    class: "header"
  }, nm = {
    class: "actions"
  }, sm = [
    "disabled"
  ], am = [
    "disabled"
  ], om = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], cm = [
    "onDblclick"
  ], lm = [
    "id",
    "value",
    "onChange"
  ], _m = [
    "onClick"
  ], dm = {
    class: "row"
  }, hm = [
    "value",
    "onChange"
  ], wm = [
    "value",
    "onChange"
  ], um = [
    "value",
    "onChange"
  ], pm = {
    class: "row"
  }, gm = [
    "value",
    "onChange"
  ], bm = [
    "value",
    "onChange"
  ], mm = [
    "value",
    "onChange"
  ], fm = {
    class: "row"
  }, ym = [
    "value",
    "onChange"
  ], vm = [
    "value",
    "onChange"
  ], Sm = [
    "value",
    "onChange"
  ], Rm = {
    class: "row"
  }, Cm = [
    "onChange"
  ], Em = {
    class: "row"
  }, xm = [
    "onChange"
  ], jm = {
    __name: "PanelScene",
    props: {
      canUndo: Boolean,
      canRedo: Boolean,
      entities: Array,
      isPlaying: Boolean
    },
    emits: [
      "addEntity",
      "deleteEntity",
      "editEntity",
      "linkEntity",
      "moveEntity",
      "openContextMenu",
      "pause",
      "play",
      "renameEntity",
      "resetEntities",
      "selectEntity",
      "selectParentEntity",
      "setMode",
      "unlinkEntity",
      "redo",
      "undo"
    ],
    setup(i, { emit: t }) {
      const e = i, r = t, n = Y(true), o = Y();
      function c() {
        return n.value == true;
      }
      function l(I, v) {
        r("selectEntity", I, v);
      }
      function _(I, v) {
        r("openContextMenu", I, v);
      }
      function h(I) {
        I.target.parentNode.removeAttribute("draggable"), I.target.removeAttribute("readonly");
      }
      function u(I) {
        I.target.parentNode.setAttribute("draggable", true), I.target.setAttribute("readonly", true), I.target.blur();
      }
      function w(I, v) {
        v.isSelected != true && l(I, v);
      }
      function b(I, v) {
      }
      function f(I, v) {
        o.value.style.overflowY = "auto";
      }
      function C(I, v) {
        r("moveEntity", I, v);
      }
      function T(I, v) {
        v.isExpanded = !v.isExpanded;
      }
      function z(I, v, S) {
        r("editEntity", I, v, S);
      }
      return (I, v) => (W(), V("div", rm, [
        j("div", im, [
          j("div", {
            class: "title",
            onClick: v[0] || (v[0] = (S) => n.value = !n.value)
          }, "Scene"),
          j("div", nm, [
            j("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (S) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, v[7] || (v[7] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "undo", -1)
            ]), 8, sm),
            j("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (S) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, v[8] || (v[8] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "redo", -1)
            ]), 8, am),
            j("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (S) => r("resetEntities")),
              title: "Restart level"
            }, v[9] || (v[9] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "fast_rewind", -1)
            ])),
            i.isPlaying == true ? (W(), V("button", {
              key: 0,
              onClick: v[4] || (v[4] = (S) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, v[10] || (v[10] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "pause", -1)
            ]))) : (W(), V("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (S) => r("play")),
              title: "Play level"
            }, v[11] || (v[11] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "play_arrow", -1)
            ])))
          ])
        ]),
        Ki(j("div", {
          ref_key: "content",
          ref: o,
          class: "content"
        }, [
          j("ul", null, [
            Rt($n, {
              name: "list"
            }, {
              default: te(() => [
                (W(true), V(re, null, ue(e.entities, (S) => (W(), V("li", {
                  key: S.id
                }, [
                  j("div", {
                    class: Lt([
                      "entity-title",
                      {
                        selected: S.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (x) => l(x, S),
                    onContextmenu: hr((x) => _(x, S), [
                      "prevent"
                    ]),
                    onDragstart: (x) => w(x, S),
                    onDragover: hr((x) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (x) => f(x, S),
                    onDrop: (x) => C(x, S)
                  }, [
                    j("span", {
                      onDblclick: (x) => r("selectParentEntity", x, S),
                      class: Lt([
                        {
                          hidden: S.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, cm),
                    j("input", {
                      type: "text",
                      readonly: "",
                      id: S.id,
                      value: S.name || S.type,
                      onChange: (x) => r("renameEntity", x, S),
                      onKeyup: Xn(u, [
                        "enter"
                      ]),
                      onFocusout: u,
                      onDblclick: h
                    }, null, 40, lm),
                    j("span", {
                      onClick: (x) => T(x, S),
                      class: Lt([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: S.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, _m)
                  ], 42, om),
                  Rt(Me, {
                    name: "properties"
                  }, {
                    default: te(() => [
                      S.isExpanded ? (W(), V("div", {
                        key: 0,
                        class: Lt([
                          "entity-properties",
                          {
                            expanded: S.isExpanded
                          }
                        ])
                      }, [
                        j("div", dm, [
                          v[12] || (v[12] = j("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.x,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.x")
                          }, null, 40, hm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.y,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.y")
                          }, null, 40, wm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.z,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.z")
                          }, null, 40, um)
                        ]),
                        j("div", pm, [
                          v[13] || (v[13] = j("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.x,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.x")
                          }, null, 40, gm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.y,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.y")
                          }, null, 40, bm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.z,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.z")
                          }, null, 40, mm)
                        ]),
                        j("div", fm, [
                          v[14] || (v[14] = j("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.x,
                            onChange: (x) => z(x, S, "objectDesc.scale.x")
                          }, null, 40, ym),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.y,
                            onChange: (x) => z(x, S, "objectDesc.scale.y")
                          }, null, 40, vm),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.z,
                            onChange: (x) => z(x, S, "objectDesc.scale.z")
                          }, null, 40, Sm)
                        ]),
                        j("div", Rm, [
                          v[16] || (v[16] = j("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          j("select", {
                            onChange: (x) => z(x, S, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = j("option", null, "None", -1)),
                            (W(true), V(re, null, ue(Object.getOwnPropertyNames(S).filter((x) => typeof S[x] == "function"), (x) => (W(), V("option", null, ee(x), 1))), 256))
                          ], 40, Cm)
                        ]),
                        j("div", Em, [
                          v[17] || (v[17] = j("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          j("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (x) => z(x, S),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, xm)
                        ])
                      ], 2)) : Wt("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]))), 128))
              ]),
              _: 1
            }),
            e.entities.length == 0 ? (W(), V("li", {
              key: 0,
              onClick: v[6] || (v[6] = (S) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, v[18] || (v[18] = [
              j("div", {
                class: "entity-title"
              }, [
                j("span", {
                  class: "material-symbols-rounded"
                }, "add"),
                j("span", null, "Add entity")
              ], -1)
            ]))) : Wt("", true)
          ])
        ], 512), [
          [
            Xi,
            c()
          ]
        ])
      ]));
    }
  }, Am = Jt(jm, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), Pm = [
    "onClick",
    "disabled"
  ], Im = {
    key: 0,
    class: "material-symbols-rounded"
  }, Oi = 150, zm = {
    __name: "ContextMenu",
    props: {
      event: {
        default: {
          clientX: 0,
          clientY: 0
        },
        required: true,
        type: Object
      },
      actions: {
        default: [],
        required: true,
        type: Array
      }
    },
    setup(i) {
      const t = i, e = Y({
        animationDuration: `${Oi}ms`,
        left: "0px",
        top: "0px"
      }), r = Y(false), n = Y(false), o = Y();
      function c(u, w) {
        w.callback && w.callback(u), _();
      }
      function l(u) {
        r.value == false ? (r.value = true, h(u)) : setTimeout(() => l(u), Oi);
      }
      function _(u) {
        n.value == false && (r.value = false);
      }
      async function h(u) {
        await Ui();
        const w = window.innerWidth, b = window.innerHeight, f = o.value.offsetWidth, C = o.value.offsetHeight;
        let T = u.clientX, z = u.clientY;
        T + f > w && (T = w - f), z + C > b && (z = b - C), e.value.left = T + "px", e.value.top = z + "px";
      }
      return qi(() => t.event, () => {
        l(t.event);
      }), Nt(function() {
        document.addEventListener("pointerup", _);
      }), vr(function() {
        document.removeEventListener("pointerup", _);
      }), (u, w) => (W(), Sr(Me, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => n.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => n.value = false)
      }, {
        default: te(() => [
          r.value ? (W(), V("ul", {
            key: 0,
            ref_key: "menu",
            ref: o,
            style: Yn(e.value)
          }, [
            (W(true), V(re, null, ue(t.actions, (b) => (W(), V("li", null, [
              j("button", {
                onClick: hr((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), V("span", Im, ee(b.icon), 1)) : Wt("", true),
                Zn(" " + ee(b.text), 1)
              ], 8, Pm)
            ]))), 256))
          ], 4)) : Wt("", true)
        ]),
        _: 1
      }));
    }
  }, Tm = Jt(zm, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Hi = {
    bounce({ pair: i, target: t, value: e = 30 }) {
      const r = new Gt().copy(t.rigidBody.rotation()), o = new Rr().setFromQuaternion(r).z;
      t.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, o), t.applyImpulseAtAngle({
        x: 0,
        y: -e * t.object.scale.y,
        z: 0
      }, o), i.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, o), i.applyImpulseAtAngle({
        x: 0,
        y: e * i.rigidBody.mass(),
        z: 0
      }, o);
    },
    teleport({ pair: i, value: t = {
      x: 0,
      y: 0,
      z: 0
    } }) {
      i.setPosition(t);
    },
    toggleVisibility(i) {
      i.target.object.visible = !i.target.object.visible;
    }
  }, Dm = {
    class: "panels"
  }, km = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(i) {
      const t = i, e = Y({
        type: "select"
      }), r = Y([]), n = Y({}), o = [], c = dr(new Ub()), l = dr(t.game.ticker), _ = lt(() => c.canUndo()), h = lt(() => c.canRedo()), u = lt(() => l.isRunning()), w = Y({}), b = Y([]);
      new os(t.game.graphics.camera, t.game.graphics.canvas);
      const f = new cs(In.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Ot(false);
      function C(E) {
        e.value = E;
      }
      function T(E, M, A) {
        const m = A.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], R = m.reduce((K, N) => typeof K[N] == "object" ? K[N] : K, M), P = R[y], q = E.target.value;
        c.add(function() {
          R[y] = q, M.reset();
        }, function() {
          R[y] = P, M.reset();
        }).execute();
      }
      function z(E, M) {
        const A = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Ni.create({
          ...M,
          position: A
        }), y = o[o.length - 1], R = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(P) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Hi), c.add(function() {
          t.game.physics.add(m), r.value.splice(R, 0, m), x(E, m), bt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(R, 1), Z(E, m), bt();
        }).execute();
      }
      function I(E, M) {
        const A = o.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), Z(E, y.entity, m), bt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.children.forEach((R) => R.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), bt();
          }
        }).execute();
      }
      function v(E, M) {
        if (M.isSelected) return;
        const A = o.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(A[y].index, 1);
          const m = r.value.indexOf(M) + 1;
          for (let y = 0; y < A.length; y++) r.value.splice(m + y, 0, A[y].entity);
        }, function() {
          const m = r.value.indexOf(M) + 1;
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < A.length; y++) r.value.splice(A[y].index, 0, A[y].entity);
        }).execute();
      }
      function S(E, M) {
        const A = M.name || M.type, m = E.target.value;
        c.add(function() {
          M.name = m;
        }, function() {
          M.name = A;
        }).execute();
      }
      function x(E, M) {
        let A = r.value.indexOf(n.value), m = r.value.indexOf(M), y = m, R = m;
        if (E.shiftKey == true ? (R = Math.max(m, A), y = Math.max(0, Math.min(Math.min(m, A), R))) : n.value = M, E.ctrlKey == true) {
          if (M.isSelected) {
            Z(E, M);
            return;
          }
        } else Tt(E);
        for (let P = y; P <= R; P++) r.value[P].isSelected = true, o.push(r.value[P]);
      }
      function pt(E, M) {
        const A = M.getParentId(), m = t.game.physics.getEntityById(A);
        m && x(E, m);
      }
      function ht(E) {
        let M = r.value[0], A = r.value[r.value.length - 1];
        n.value = M, x({
          shiftKey: true
        }, A);
      }
      function Z(E, M, A) {
        A == null && (A = o.indexOf(M)), M.isSelected = false, o.splice(A, 1);
      }
      function Tt(E, M) {
        for (let A = o.length - 1; A >= 0; A--) Z(E, o[A], A);
      }
      function vt(E) {
        r.value.forEach((M) => {
          M.reset();
        }), t.game.graphics.render();
      }
      function Et(E, M) {
        const A = o.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            y.entity.id != M.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(M.id), t.game.physics.createParentJoint(y.entity), bt());
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.entity.id != M.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), bt());
          }
        }).execute();
      }
      function Dt(E, M) {
        const A = o.map((m) => ({
          entity: m,
          parentId: m.getParentId()
        }));
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(null), bt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), bt();
          }
        }).execute();
      }
      function xt(E) {
        E.repeat || (E.code == "KeyA" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), ht()) : E.code == "KeyD" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), Tt(E)) : E.code == "KeyX" && (E.ctrlKey || E.metaKey) ? I(E) : E.code == "KeyZ" && (E.ctrlKey || E.metaKey) && (E.shiftKey == true ? Re() : kt()));
      }
      function kt() {
        c.undo();
      }
      function Re() {
        c.redo();
      }
      function se(E) {
        t.game.physics.clear();
        const M = t.game.assets.get(E), A = [];
        return M && M.children.forEach(function(m) {
          const y = Ni.create({
            ccd: true,
            friction: M.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(R) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Hi), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), A.push(y);
        }), A;
      }
      function ae(E, M) {
        if (M.isSelected) {
          let A = [], m = {
            text: "Link",
            icon: "link",
            disabled: o.length <= 1,
            callback: () => Et(E, M)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: Kt() == false,
            callback: () => Dt()
          }, R = {
            text: "Delete",
            icon: "delete",
            callback: () => I(E)
          };
          A.push(m, y, R), w.value = E, b.value = A;
        } else x(E, M), ae(E, M);
      }
      function Kt() {
        for (let E = o.length - 1; E >= 0; E--) if (o[E].getParentId()) return true;
        return false;
      }
      function oe() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Ot(true);
      }
      function Xe() {
        l.start(), t.game.graphics.setCamera(t.game.player.camera), Ot(false);
      }
      function bt() {
        l.isRunning() == false && (t.game.physics.debugger.update(), t.game.graphics.render());
      }
      function ce() {
      }
      function Xt() {
        t.game.ticker.isRunning() == false && t.game.graphics.render();
      }
      function Ot(E = true) {
        f.enablePan = E, f.enableRotate = E, f.enableZoom = E;
      }
      return Nt(async function() {
        t.game.physics.debugger.enable(), r.value = se("boxel-3d-sandbox"), document.addEventListener("keydown", xt), f.addEventListener("start", ce), f.addEventListener("change", Xt), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), vr(function() {
        document.removeEventListener("keydown", xt), f.removeEventListener("start", ce), f.removeEventListener("change", Xt);
      }), (E, M) => (W(), V("div", Dm, [
        Rt(Xb, {
          game: i.game,
          mode: e.value,
          onSetMode: C
        }, null, 8, [
          "game",
          "mode"
        ]),
        Rt(em, {
          game: i.game,
          mode: e.value,
          onAddEntity: z
        }, null, 8, [
          "game",
          "mode"
        ]),
        Rt(Am, {
          entities: r.value,
          canUndo: _.value,
          canRedo: h.value,
          isPlaying: u.value,
          onAddEntity: z,
          onDeleteEntity: I,
          onEditEntity: T,
          onLinkEntity: Et,
          onMoveEntity: v,
          onPause: oe,
          onPlay: Xe,
          onRenameEntity: S,
          onResetEntities: vt,
          onSelectEntity: x,
          onSelectParentEntity: pt,
          onSetMode: C,
          onUnlinkEntity: Dt,
          onOpenContextMenu: ae,
          onRedo: Re,
          onUndo: kt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        Rt(Tm, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, Mm = Jt(km, [
    [
      "__scopeId",
      "data-v-a2be9b7d"
    ]
  ]), Fm = [
    {
      name: "home",
      path: "/",
      component: Cb
    },
    {
      name: "play",
      path: "/play",
      component: Eb
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: Mm
    }
  ], Lm = da({
    history: Os(),
    routes: Fm
  }), zn = Qn(Rb);
  zn.use(Lm);
  zn.mount("#app");
})();
