(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: true, subtree: true });
  function t(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function i(s) {
    if (s.ep) return;
    s.ep = true;
    const r = t(s);
    fetch(s.href, r);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zc(n) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of n.split(",")) e[t] = 1;
  return (t) => t in e;
}
const ht = {}, Ls = [], Hn = () => {
}, rg = () => false, va = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && (n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Jc = (n) => n.startsWith("onUpdate:"), Et = Object.assign, Qc = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, og = Object.prototype.hasOwnProperty, rt = (n, e) => og.call(n, e), Oe = Array.isArray, Is = (n) => ya(n) === "[object Map]", yd = (n) => ya(n) === "[object Set]", He = (n) => typeof n == "function", _t = (n) => typeof n == "string", ui = (n) => typeof n == "symbol", pt = (n) => n !== null && typeof n == "object", Md = (n) => (pt(n) || He(n)) && He(n.then) && He(n.catch), Sd = Object.prototype.toString, ya = (n) => Sd.call(n), ag = (n) => ya(n).slice(8, -1), bd = (n) => ya(n) === "[object Object]", $c = (n) => _t(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, vr = /* @__PURE__ */ Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ma = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, lg = /-(\w)/g, yn = Ma((n) => n.replace(lg, (e, t) => t ? t.toUpperCase() : "")), cg = /\B([A-Z])/g, Ii = Ma((n) => n.replace(cg, "-$1").toLowerCase()), Sa = Ma((n) => n.charAt(0).toUpperCase() + n.slice(1)), za = Ma((n) => n ? `on${Sa(n)}` : ""), Ri = (n, e) => !Object.is(n, e), Yo = (n, ...e) => {
  for (let t = 0; t < n.length; t++) n[t](...e);
}, Td = (n, e, t, i = false) => {
  Object.defineProperty(n, e, { configurable: true, enumerable: false, writable: i, value: t });
}, zl = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
}, ug = (n) => {
  const e = _t(n) ? Number(n) : NaN;
  return isNaN(e) ? n : e;
};
let Qu;
const ba = () => Qu || (Qu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function eu(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const i = n[t], s = _t(i) ? pg(i) : eu(i);
      if (s) for (const r in s) e[r] = s[r];
    }
    return e;
  } else if (_t(n) || pt(n)) return n;
}
const hg = /;(?![^(]*\))/g, fg = /:([^]+)/, dg = /\/\*[^]*?\*\//g;
function pg(n) {
  const e = {};
  return n.replace(dg, "").split(hg).forEach((t) => {
    if (t) {
      const i = t.split(fg);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function tu(n) {
  let e = "";
  if (_t(n)) e = n;
  else if (Oe(n)) for (let t = 0; t < n.length; t++) {
    const i = tu(n[t]);
    i && (e += i + " ");
  }
  else if (pt(n)) for (const t in n) n[t] && (e += t + " ");
  return e.trim();
}
const mg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gg = /* @__PURE__ */ Zc(mg);
function Ad(n) {
  return !!n || n === "";
}
const Ed = (n) => !!(n && n.__v_isRef === true), _g = (n) => _t(n) ? n : n == null ? "" : Oe(n) || pt(n) && (n.toString === Sd || !He(n.toString)) ? Ed(n) ? _g(n.value) : JSON.stringify(n, wd, 2) : String(n), wd = (n, e) => Ed(e) ? wd(n, e.value) : Is(e) ? { [`Map(${e.size})`]: [...e.entries()].reduce((t, [i, s], r) => (t[Ha(i, r) + " =>"] = s, t), {}) } : yd(e) ? { [`Set(${e.size})`]: [...e.values()].map((t) => Ha(t)) } : ui(e) ? Ha(e) : pt(e) && !Oe(e) && !bd(e) ? String(e) : e, Ha = (n, e = "") => {
  var t;
  return ui(n) ? `Symbol(${(t = n.description) != null ? t : e})` : n;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ln;
class Rd {
  constructor(e = false) {
    this.detached = e, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = ln, !e && ln && (this.index = (ln.scopes || (ln.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let e, t;
      if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let e, t;
      if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = ln;
      try {
        return ln = this, e();
      } finally {
        ln = t;
      }
    }
  }
  on() {
    ln = this;
  }
  off() {
    ln = this.parent;
  }
  stop(e) {
    if (this._active) {
      this._active = false;
      let t, i;
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, i = this.cleanups.length; t < i; t++) this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function sE(n) {
  return new Rd(n);
}
function xg() {
  return ln;
}
let dt;
const Va = /* @__PURE__ */ new WeakSet();
class Cd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ln && ln.active && ln.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Va.has(this) && (Va.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ld(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, $u(this), Id(this);
    const e = dt, t = Cn;
    dt = this, Cn = true;
    try {
      return this.fn();
    } finally {
      Dd(this), dt = e, Cn = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) su(e);
      this.deps = this.depsTail = void 0, $u(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Hl(this) && this.run();
  }
  get dirty() {
    return Hl(this);
  }
}
let Pd = 0, yr, Mr;
function Ld(n, e = false) {
  if (n.flags |= 8, e) {
    n.next = Mr, Mr = n;
    return;
  }
  n.next = yr, yr = n;
}
function nu() {
  Pd++;
}
function iu() {
  if (--Pd > 0) return;
  if (Mr) {
    let e = Mr;
    for (Mr = void 0; e; ) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t;
    }
  }
  let n;
  for (; yr; ) {
    let e = yr;
    for (yr = void 0; e; ) {
      const t = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1) try {
        e.trigger();
      } catch (i) {
        n || (n = i);
      }
      e = t;
    }
  }
  if (n) throw n;
}
function Id(n) {
  for (let e = n.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Dd(n) {
  let e, t = n.depsTail, i = t;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === t && (t = s), su(i), vg(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  n.deps = e, n.depsTail = t;
}
function Hl(n) {
  for (let e = n.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Nd(e.dep.computed) || e.dep.version !== e.version)) return true;
  return !!n._dirty;
}
function Nd(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Lr)) return;
  n.globalVersion = Lr;
  const e = n.dep;
  if (n.flags |= 2, e.version > 0 && !n.isSSR && n.deps && !Hl(n)) {
    n.flags &= -3;
    return;
  }
  const t = dt, i = Cn;
  dt = n, Cn = true;
  try {
    Id(n);
    const s = n.fn(n._value);
    (e.version === 0 || Ri(s, n._value)) && (n._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    dt = t, Cn = i, Dd(n), n.flags &= -3;
  }
}
function su(n, e = false) {
  const { dep: t, prevSub: i, nextSub: s } = n;
  if (i && (i.nextSub = s, n.prevSub = void 0), s && (s.prevSub = i, n.nextSub = void 0), t.subs === n && (t.subs = i, !i && t.computed)) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep) su(r, true);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function vg(n) {
  const { prevDep: e, nextDep: t } = n;
  e && (e.nextDep = t, n.prevDep = void 0), t && (t.prevDep = e, n.nextDep = void 0);
}
let Cn = true;
const Ud = [];
function Di() {
  Ud.push(Cn), Cn = false;
}
function Ni() {
  const n = Ud.pop();
  Cn = n === void 0 ? true : n;
}
function $u(n) {
  const { cleanup: e } = n;
  if (n.cleanup = void 0, e) {
    const t = dt;
    dt = void 0;
    try {
      e();
    } finally {
      dt = t;
    }
  }
}
let Lr = 0;
class yg {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ru {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
    if (!dt || !Cn || dt === this.computed) return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== dt) t = this.activeLink = new yg(dt, this), dt.deps ? (t.prevDep = dt.depsTail, dt.depsTail.nextDep = t, dt.depsTail = t) : dt.deps = dt.depsTail = t, Od(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const i = t.nextDep;
      i.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = i), t.prevDep = dt.depsTail, t.nextDep = void 0, dt.depsTail.nextDep = t, dt.depsTail = t, dt.deps === t && (dt.deps = i);
    }
    return t;
  }
  trigger(e) {
    this.version++, Lr++, this.notify(e);
  }
  notify(e) {
    nu();
    try {
      for (let t = this.subs; t; t = t.prevSub) t.sub.notify() && t.sub.dep.notify();
    } finally {
      iu();
    }
  }
}
function Od(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const e = n.dep.computed;
    if (e && !n.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep) Od(i);
    }
    const t = n.dep.subs;
    t !== n && (n.prevSub = t, t && (t.nextSub = n)), n.dep.subs = n;
  }
}
const Vl = /* @__PURE__ */ new WeakMap(), is = Symbol(""), kl = Symbol(""), Ir = Symbol("");
function zt(n, e, t) {
  if (Cn && dt) {
    let i = Vl.get(n);
    i || Vl.set(n, i = /* @__PURE__ */ new Map());
    let s = i.get(t);
    s || (i.set(t, s = new ru()), s.map = i, s.key = t), s.track();
  }
}
function ni(n, e, t, i, s, r) {
  const o = Vl.get(n);
  if (!o) {
    Lr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (nu(), e === "clear") o.forEach(a);
  else {
    const l = Oe(n), c = l && $c(t);
    if (l && t === "length") {
      const u = Number(i);
      o.forEach((h, f) => {
        (f === "length" || f === Ir || !ui(f) && f >= u) && a(h);
      });
    } else switch ((t !== void 0 || o.has(void 0)) && a(o.get(t)), c && a(o.get(Ir)), e) {
      case "add":
        l ? c && a(o.get("length")) : (a(o.get(is)), Is(n) && a(o.get(kl)));
        break;
      case "delete":
        l || (a(o.get(is)), Is(n) && a(o.get(kl)));
        break;
      case "set":
        Is(n) && a(o.get(is));
        break;
    }
  }
  iu();
}
function us(n) {
  const e = tt(n);
  return e === n ? e : (zt(e, "iterate", Ir), gn(n) ? e : e.map(Ht));
}
function Ta(n) {
  return zt(n = tt(n), "iterate", Ir), n;
}
const Mg = { __proto__: null, [Symbol.iterator]() {
  return ka(this, Symbol.iterator, Ht);
}, concat(...n) {
  return us(this).concat(...n.map((e) => Oe(e) ? us(e) : e));
}, entries() {
  return ka(this, "entries", (n) => (n[1] = Ht(n[1]), n));
}, every(n, e) {
  return Yn(this, "every", n, e, void 0, arguments);
}, filter(n, e) {
  return Yn(this, "filter", n, e, (t) => t.map(Ht), arguments);
}, find(n, e) {
  return Yn(this, "find", n, e, Ht, arguments);
}, findIndex(n, e) {
  return Yn(this, "findIndex", n, e, void 0, arguments);
}, findLast(n, e) {
  return Yn(this, "findLast", n, e, Ht, arguments);
}, findLastIndex(n, e) {
  return Yn(this, "findLastIndex", n, e, void 0, arguments);
}, forEach(n, e) {
  return Yn(this, "forEach", n, e, void 0, arguments);
}, includes(...n) {
  return Ga(this, "includes", n);
}, indexOf(...n) {
  return Ga(this, "indexOf", n);
}, join(n) {
  return us(this).join(n);
}, lastIndexOf(...n) {
  return Ga(this, "lastIndexOf", n);
}, map(n, e) {
  return Yn(this, "map", n, e, void 0, arguments);
}, pop() {
  return ir(this, "pop");
}, push(...n) {
  return ir(this, "push", n);
}, reduce(n, ...e) {
  return eh(this, "reduce", n, e);
}, reduceRight(n, ...e) {
  return eh(this, "reduceRight", n, e);
}, shift() {
  return ir(this, "shift");
}, some(n, e) {
  return Yn(this, "some", n, e, void 0, arguments);
}, splice(...n) {
  return ir(this, "splice", n);
}, toReversed() {
  return us(this).toReversed();
}, toSorted(n) {
  return us(this).toSorted(n);
}, toSpliced(...n) {
  return us(this).toSpliced(...n);
}, unshift(...n) {
  return ir(this, "unshift", n);
}, values() {
  return ka(this, "values", Ht);
} };
function ka(n, e, t) {
  const i = Ta(n), s = i[e]();
  return i !== n && !gn(n) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = t(r.value)), r;
  }), s;
}
const Sg = Array.prototype;
function Yn(n, e, t, i, s, r) {
  const o = Ta(n), a = o !== n && !gn(n), l = o[e];
  if (l !== Sg[e]) {
    const h = l.apply(n, r);
    return a ? Ht(h) : h;
  }
  let c = t;
  o !== n && (a ? c = function(h, f) {
    return t.call(this, Ht(h), f, n);
  } : t.length > 2 && (c = function(h, f) {
    return t.call(this, h, f, n);
  }));
  const u = l.call(o, c, i);
  return a && s ? s(u) : u;
}
function eh(n, e, t, i) {
  const s = Ta(n);
  let r = t;
  return s !== n && (gn(n) ? t.length > 3 && (r = function(o, a, l) {
    return t.call(this, o, a, l, n);
  }) : r = function(o, a, l) {
    return t.call(this, o, Ht(a), l, n);
  }), s[e](r, ...i);
}
function Ga(n, e, t) {
  const i = tt(n);
  zt(i, "iterate", Ir);
  const s = i[e](...t);
  return (s === -1 || s === false) && cu(t[0]) ? (t[0] = tt(t[0]), i[e](...t)) : s;
}
function ir(n, e, t = []) {
  Di(), nu();
  const i = tt(n)[e].apply(n, t);
  return iu(), Ni(), i;
}
const bg = /* @__PURE__ */ Zc("__proto__,__v_isRef,__isVue"), Fd = new Set(Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(ui));
function Tg(n) {
  ui(n) || (n = String(n));
  const e = tt(this);
  return zt(e, "has", n), e.hasOwnProperty(n);
}
class Bd {
  constructor(e = false, t = false) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, i) {
    if (t === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (t === "__v_isReactive") return !s;
    if (t === "__v_isReadonly") return s;
    if (t === "__v_isShallow") return r;
    if (t === "__v_raw") return i === (s ? r ? Ng : kd : r ? Vd : Hd).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = Oe(e);
    if (!s) {
      let l;
      if (o && (l = Mg[t])) return l;
      if (t === "hasOwnProperty") return Tg;
    }
    const a = Reflect.get(e, t, kt(e) ? e : i);
    return (ui(t) ? Fd.has(t) : bg(t)) || (s || zt(e, "get", t), r) ? a : kt(a) ? o && $c(t) ? a : a.value : pt(a) ? s ? Gd(a) : au(a) : a;
  }
}
class zd extends Bd {
  constructor(e = false) {
    super(false, e);
  }
  set(e, t, i, s) {
    let r = e[t];
    if (!this._isShallow) {
      const l = ss(r);
      if (!gn(i) && !ss(i) && (r = tt(r), i = tt(i)), !Oe(e) && kt(r) && !kt(i)) return l ? false : (r.value = i, true);
    }
    const o = Oe(e) && $c(t) ? Number(t) < e.length : rt(e, t), a = Reflect.set(e, t, i, kt(e) ? e : s);
    return e === tt(s) && (o ? Ri(i, r) && ni(e, "set", t, i) : ni(e, "add", t, i)), a;
  }
  deleteProperty(e, t) {
    const i = rt(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && i && ni(e, "delete", t, void 0), s;
  }
  has(e, t) {
    const i = Reflect.has(e, t);
    return (!ui(t) || !Fd.has(t)) && zt(e, "has", t), i;
  }
  ownKeys(e) {
    return zt(e, "iterate", Oe(e) ? "length" : is), Reflect.ownKeys(e);
  }
}
class Ag extends Bd {
  constructor(e = false) {
    super(true, e);
  }
  set(e, t) {
    return true;
  }
  deleteProperty(e, t) {
    return true;
  }
}
const Eg = new zd(), wg = new Ag(), Rg = new zd(true);
const Gl = (n) => n, io = (n) => Reflect.getPrototypeOf(n);
function Cg(n, e, t) {
  return function(...i) {
    const s = this.__v_raw, r = tt(s), o = Is(r), a = n === "entries" || n === Symbol.iterator && o, l = n === "keys" && o, c = s[n](...i), u = t ? Gl : e ? Wl : Ht;
    return !e && zt(r, "iterate", l ? kl : is), { next() {
      const { value: h, done: f } = c.next();
      return f ? { value: h, done: f } : { value: a ? [u(h[0]), u(h[1])] : u(h), done: f };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function so(n) {
  return function(...e) {
    return n === "delete" ? false : n === "clear" ? void 0 : this;
  };
}
function Pg(n, e) {
  const t = { get(s) {
    const r = this.__v_raw, o = tt(r), a = tt(s);
    n || (Ri(s, a) && zt(o, "get", s), zt(o, "get", a));
    const { has: l } = io(o), c = e ? Gl : n ? Wl : Ht;
    if (l.call(o, s)) return c(r.get(s));
    if (l.call(o, a)) return c(r.get(a));
    r !== o && r.get(s);
  }, get size() {
    const s = this.__v_raw;
    return !n && zt(tt(s), "iterate", is), Reflect.get(s, "size", s);
  }, has(s) {
    const r = this.__v_raw, o = tt(r), a = tt(s);
    return n || (Ri(s, a) && zt(o, "has", s), zt(o, "has", a)), s === a ? r.has(s) : r.has(s) || r.has(a);
  }, forEach(s, r) {
    const o = this, a = o.__v_raw, l = tt(a), c = e ? Gl : n ? Wl : Ht;
    return !n && zt(l, "iterate", is), a.forEach((u, h) => s.call(r, c(u), c(h), o));
  } };
  return Et(t, n ? { add: so("add"), set: so("set"), delete: so("delete"), clear: so("clear") } : { add(s) {
    !e && !gn(s) && !ss(s) && (s = tt(s));
    const r = tt(this);
    return io(r).has.call(r, s) || (r.add(s), ni(r, "add", s, s)), this;
  }, set(s, r) {
    !e && !gn(r) && !ss(r) && (r = tt(r));
    const o = tt(this), { has: a, get: l } = io(o);
    let c = a.call(o, s);
    c || (s = tt(s), c = a.call(o, s));
    const u = l.call(o, s);
    return o.set(s, r), c ? Ri(r, u) && ni(o, "set", s, r) : ni(o, "add", s, r), this;
  }, delete(s) {
    const r = tt(this), { has: o, get: a } = io(r);
    let l = o.call(r, s);
    l || (s = tt(s), l = o.call(r, s)), a && a.call(r, s);
    const c = r.delete(s);
    return l && ni(r, "delete", s, void 0), c;
  }, clear() {
    const s = tt(this), r = s.size !== 0, o = s.clear();
    return r && ni(s, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Cg(s, n, e);
  }), t;
}
function ou(n, e) {
  const t = Pg(n, e);
  return (i, s, r) => s === "__v_isReactive" ? !n : s === "__v_isReadonly" ? n : s === "__v_raw" ? i : Reflect.get(rt(t, s) && s in i ? t : i, s, r);
}
const Lg = { get: ou(false, false) }, Ig = { get: ou(false, true) }, Dg = { get: ou(true, false) };
const Hd = /* @__PURE__ */ new WeakMap(), Vd = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), Ng = /* @__PURE__ */ new WeakMap();
function Ug(n) {
  switch (n) {
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
function Og(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Ug(ag(n));
}
function au(n) {
  return ss(n) ? n : lu(n, false, Eg, Lg, Hd);
}
function Fg(n) {
  return lu(n, false, Rg, Ig, Vd);
}
function Gd(n) {
  return lu(n, true, wg, Dg, kd);
}
function lu(n, e, t, i, s) {
  if (!pt(n) || n.__v_raw && !(e && n.__v_isReactive)) return n;
  const r = s.get(n);
  if (r) return r;
  const o = Og(n);
  if (o === 0) return n;
  const a = new Proxy(n, o === 2 ? i : t);
  return s.set(n, a), a;
}
function Ds(n) {
  return ss(n) ? Ds(n.__v_raw) : !!(n && n.__v_isReactive);
}
function ss(n) {
  return !!(n && n.__v_isReadonly);
}
function gn(n) {
  return !!(n && n.__v_isShallow);
}
function cu(n) {
  return n ? !!n.__v_raw : false;
}
function tt(n) {
  const e = n && n.__v_raw;
  return e ? tt(e) : n;
}
function Bg(n) {
  return !rt(n, "__v_skip") && Object.isExtensible(n) && Td(n, "__v_skip", true), n;
}
const Ht = (n) => pt(n) ? au(n) : n, Wl = (n) => pt(n) ? Gd(n) : n;
function kt(n) {
  return n ? n.__v_isRef === true : false;
}
function rE(n) {
  return Wd(n, false);
}
function oE(n) {
  return Wd(n, true);
}
function Wd(n, e) {
  return kt(n) ? n : new zg(n, e);
}
class zg {
  constructor(e, t) {
    this.dep = new ru(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t ? e : tt(e), this._value = t ? e : Ht(e), this.__v_isShallow = t;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue, i = this.__v_isShallow || gn(e) || ss(e);
    e = i ? e : tt(e), Ri(e, t) && (this._rawValue = e, this._value = i ? e : Ht(e), this.dep.trigger());
  }
}
function Hg(n) {
  return kt(n) ? n.value : n;
}
const Vg = { get: (n, e, t) => e === "__v_raw" ? n : Hg(Reflect.get(n, e, t)), set: (n, e, t, i) => {
  const s = n[e];
  return kt(s) && !kt(t) ? (s.value = t, true) : Reflect.set(n, e, t, i);
} };
function Xd(n) {
  return Ds(n) ? n : new Proxy(n, Vg);
}
class kg {
  constructor(e, t, i) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new ru(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = i;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && dt !== this) return Ld(this, true), true;
  }
  get value() {
    const e = this.dep.track();
    return Nd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function Gg(n, e, t = false) {
  let i, s;
  return He(n) ? i = n : (i = n.get, s = n.set), new kg(i, s, t);
}
const ro = {}, ra = /* @__PURE__ */ new WeakMap();
let Zi;
function Wg(n, e = false, t = Zi) {
  if (t) {
    let i = ra.get(t);
    i || ra.set(t, i = []), i.push(n);
  }
}
function Xg(n, e, t = ht) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = t, c = (x) => s ? x : gn(x) || s === false || s === 0 ? ii(x, 1) : ii(x);
  let u, h, f, d, m = false, _ = false;
  if (kt(n) ? (h = () => n.value, m = gn(n)) : Ds(n) ? (h = () => c(n), m = true) : Oe(n) ? (_ = true, m = n.some((x) => Ds(x) || gn(x)), h = () => n.map((x) => {
    if (kt(x)) return x.value;
    if (Ds(x)) return c(x);
    if (He(x)) return l ? l(x, 2) : x();
  })) : He(n) ? e ? h = l ? () => l(n, 2) : n : h = () => {
    if (f) {
      Di();
      try {
        f();
      } finally {
        Ni();
      }
    }
    const x = Zi;
    Zi = u;
    try {
      return l ? l(n, 3, [d]) : n(d);
    } finally {
      Zi = x;
    }
  } : h = Hn, e && s) {
    const x = h, C = s === true ? 1 / 0 : s;
    h = () => ii(x(), C);
  }
  const g = xg(), p = () => {
    u.stop(), g && g.active && Qc(g.effects, u);
  };
  if (r && e) {
    const x = e;
    e = (...C) => {
      x(...C), p();
    };
  }
  let A = _ ? new Array(n.length).fill(ro) : ro;
  const b = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x)) if (e) {
      const C = u.run();
      if (s || m || (_ ? C.some((w, R) => Ri(w, A[R])) : Ri(C, A))) {
        f && f();
        const w = Zi;
        Zi = u;
        try {
          const R = [C, A === ro ? void 0 : _ && A[0] === ro ? [] : A, d];
          l ? l(e, 3, R) : e(...R), A = C;
        } finally {
          Zi = w;
        }
      }
    } else u.run();
  };
  return a && a(b), u = new Cd(h), u.scheduler = o ? () => o(b, false) : b, d = (x) => Wg(x, false, u), f = u.onStop = () => {
    const x = ra.get(u);
    if (x) {
      if (l) l(x, 4);
      else for (const C of x) C();
      ra.delete(u);
    }
  }, e ? i ? b(true) : A = u.run() : o ? o(b.bind(null, true), true) : u.run(), p.pause = u.pause.bind(u), p.resume = u.resume.bind(u), p.stop = p, p;
}
function ii(n, e = 1 / 0, t) {
  if (e <= 0 || !pt(n) || n.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(n))) return n;
  if (t.add(n), e--, kt(n)) ii(n.value, e, t);
  else if (Oe(n)) for (let i = 0; i < n.length; i++) ii(n[i], e, t);
  else if (yd(n) || Is(n)) n.forEach((i) => {
    ii(i, e, t);
  });
  else if (bd(n)) {
    for (const i in n) ii(n[i], e, t);
    for (const i of Object.getOwnPropertySymbols(n)) Object.prototype.propertyIsEnumerable.call(n, i) && ii(n[i], e, t);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kr(n, e, t, i) {
  try {
    return i ? n(...i) : n();
  } catch (s) {
    Aa(s, e, t);
  }
}
function Pn(n, e, t, i) {
  if (He(n)) {
    const s = Kr(n, e, t, i);
    return s && Md(s) && s.catch((r) => {
      Aa(r, e, t);
    }), s;
  }
  if (Oe(n)) {
    const s = [];
    for (let r = 0; r < n.length; r++) s.push(Pn(n[r], e, t, i));
    return s;
  }
}
function Aa(n, e, t, i = true) {
  const s = e ? e.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = e && e.appContext.config || ht;
  if (e) {
    let a = e.parent;
    const l = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let h = 0; h < u.length; h++) if (u[h](n, l, c) === false) return;
      }
      a = a.parent;
    }
    if (r) {
      Di(), Kr(r, null, 10, [n, l, c]), Ni();
      return;
    }
  }
  Yg(n, t, s, i, o);
}
function Yg(n, e, t, i = true, s = false) {
  if (s) throw n;
  console.error(n);
}
const jt = [];
let Un = -1;
const Ns = [];
let Si = null, Es = 0;
const Yd = Promise.resolve();
let oa = null;
function qg(n) {
  const e = oa || Yd;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function jg(n) {
  let e = Un + 1, t = jt.length;
  for (; e < t; ) {
    const i = e + t >>> 1, s = jt[i], r = Dr(s);
    r < n || r === n && s.flags & 2 ? e = i + 1 : t = i;
  }
  return e;
}
function uu(n) {
  if (!(n.flags & 1)) {
    const e = Dr(n), t = jt[jt.length - 1];
    !t || !(n.flags & 2) && e >= Dr(t) ? jt.push(n) : jt.splice(jg(e), 0, n), n.flags |= 1, qd();
  }
}
function qd() {
  oa || (oa = Yd.then(Kd));
}
function Kg(n) {
  Oe(n) ? Ns.push(...n) : Si && n.id === -1 ? Si.splice(Es + 1, 0, n) : n.flags & 1 || (Ns.push(n), n.flags |= 1), qd();
}
function th(n, e, t = Un + 1) {
  for (; t < jt.length; t++) {
    const i = jt[t];
    if (i && i.flags & 2) {
      if (n && i.id !== n.uid) continue;
      jt.splice(t, 1), t--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function jd(n) {
  if (Ns.length) {
    const e = [...new Set(Ns)].sort((t, i) => Dr(t) - Dr(i));
    if (Ns.length = 0, Si) {
      Si.push(...e);
      return;
    }
    for (Si = e, Es = 0; Es < Si.length; Es++) {
      const t = Si[Es];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Si = null, Es = 0;
  }
}
const Dr = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function Kd(n) {
  try {
    for (Un = 0; Un < jt.length; Un++) {
      const e = jt[Un];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Kr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Un < jt.length; Un++) {
      const e = jt[Un];
      e && (e.flags &= -2);
    }
    Un = -1, jt.length = 0, jd(), oa = null, (jt.length || Ns.length) && Kd();
  }
}
let Pt = null, Zd = null;
function aa(n) {
  const e = Pt;
  return Pt = n, Zd = n && n.type.__scopeId || null, e;
}
function Zg(n, e = Pt, t) {
  if (!e || n._n) return n;
  const i = (...s) => {
    i._d && mh(-1);
    const r = aa(e);
    let o;
    try {
      o = n(...s);
    } finally {
      aa(r), i._d && mh(1);
    }
    return o;
  };
  return i._n = true, i._c = true, i._d = true, i;
}
function aE(n, e) {
  if (Pt === null) return n;
  const t = Pa(Pt), i = n.dirs || (n.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [r, o, a, l = ht] = e[s];
    r && (He(r) && (r = { mounted: r, updated: r }), r.deep && ii(o), i.push({ dir: r, instance: t, value: o, oldValue: void 0, arg: a, modifiers: l }));
  }
  return n;
}
function Bi(n, e, t, i) {
  const s = n.dirs, r = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (Di(), Pn(l, t, 8, [n.el, a, n, e]), Ni());
  }
}
const Jd = Symbol("_vte"), Qd = (n) => n.__isTeleport, Sr = (n) => n && (n.disabled || n.disabled === ""), nh = (n) => n && (n.defer || n.defer === ""), ih = (n) => typeof SVGElement < "u" && n instanceof SVGElement, sh = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, Xl = (n, e) => {
  const t = n && n.to;
  return _t(t) ? e ? e(t) : null : t;
}, $d = { name: "Teleport", __isTeleport: true, process(n, e, t, i, s, r, o, a, l, c) {
  const { mc: u, pc: h, pbc: f, o: { insert: d, querySelector: m, createText: _, createComment: g } } = c, p = Sr(e.props);
  let { shapeFlag: A, children: b, dynamicChildren: x } = e;
  if (n == null) {
    const C = e.el = _(""), w = e.anchor = _("");
    d(C, t, i), d(w, t, i);
    const R = (S, M) => {
      A & 16 && (s && s.isCE && (s.ce._teleportTarget = S), u(b, S, M, s, r, o, a, l));
    }, D = () => {
      const S = e.target = Xl(e.props, m), M = ep(S, e, _, d);
      S && (o !== "svg" && ih(S) ? o = "svg" : o !== "mathml" && sh(S) && (o = "mathml"), p || (R(S, M), qo(e, false)));
    };
    p && (R(t, w), qo(e, true)), nh(e.props) ? qt(() => {
      D(), e.el.__isMounted = true;
    }, r) : D();
  } else {
    if (nh(e.props) && !n.el.__isMounted) {
      qt(() => {
        $d.process(n, e, t, i, s, r, o, a, l, c), delete n.el.__isMounted;
      }, r);
      return;
    }
    e.el = n.el, e.targetStart = n.targetStart;
    const C = e.anchor = n.anchor, w = e.target = n.target, R = e.targetAnchor = n.targetAnchor, D = Sr(n.props), S = D ? t : w, M = D ? C : R;
    if (o === "svg" || ih(w) ? o = "svg" : (o === "mathml" || sh(w)) && (o = "mathml"), x ? (f(n.dynamicChildren, x, S, s, r, o, a), du(n, e, true)) : l || h(n, e, S, M, s, r, o, a, false), p) D ? e.props && n.props && e.props.to !== n.props.to && (e.props.to = n.props.to) : oo(e, t, C, c, 1);
    else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
      const I = e.target = Xl(e.props, m);
      I && oo(e, I, null, c, 0);
    } else D && oo(e, w, R, c, 1);
    qo(e, p);
  }
}, remove(n, e, t, { um: i, o: { remove: s } }, r) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: c, targetAnchor: u, target: h, props: f } = n;
  if (h && (s(c), s(u)), r && s(l), o & 16) {
    const d = r || !Sr(f);
    for (let m = 0; m < a.length; m++) {
      const _ = a[m];
      i(_, e, t, d, !!_.dynamicChildren);
    }
  }
}, move: oo, hydrate: Jg };
function oo(n, e, t, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(n.targetAnchor, e, t);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = n, h = r === 2;
  if (h && i(o, e, t), (!h || Sr(u)) && l & 16) for (let f = 0; f < c.length; f++) s(c[f], e, t, 2);
  h && i(a, e, t);
}
function Jg(n, e, t, i, s, r, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: c, createText: u } }, h) {
  const f = e.target = Xl(e.props, l);
  if (f) {
    const d = Sr(e.props), m = f._lpa || f.firstChild;
    if (e.shapeFlag & 16) if (d) e.anchor = h(o(n), e, a(n), t, i, s, r), e.targetStart = m, e.targetAnchor = m && o(m);
    else {
      e.anchor = o(n);
      let _ = m;
      for (; _; ) {
        if (_ && _.nodeType === 8) {
          if (_.data === "teleport start anchor") e.targetStart = _;
          else if (_.data === "teleport anchor") {
            e.targetAnchor = _, f._lpa = e.targetAnchor && o(e.targetAnchor);
            break;
          }
        }
        _ = o(_);
      }
      e.targetAnchor || ep(f, e, u, c), h(m && o(m), e, f, t, i, s, r);
    }
    qo(e, d);
  }
  return e.anchor && o(e.anchor);
}
const lE = $d;
function qo(n, e) {
  const t = n.ctx;
  if (t && t.ut) {
    let i, s;
    for (e ? (i = n.el, s = n.anchor) : (i = n.targetStart, s = n.targetAnchor); i && i !== s; ) i.nodeType === 1 && i.setAttribute("data-v-owner", t.uid), i = i.nextSibling;
    t.ut();
  }
}
function ep(n, e, t, i) {
  const s = e.targetStart = t(""), r = e.targetAnchor = t("");
  return s[Jd] = r, n && (i(s, n), i(r, n)), r;
}
const bi = Symbol("_leaveCb"), ao = Symbol("_enterCb");
function tp() {
  const n = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return lp(() => {
    n.isMounted = true;
  }), up(() => {
    n.isUnmounting = true;
  }), n;
}
const fn = [Function, Array], np = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: fn, onEnter: fn, onAfterEnter: fn, onEnterCancelled: fn, onBeforeLeave: fn, onLeave: fn, onAfterLeave: fn, onLeaveCancelled: fn, onBeforeAppear: fn, onAppear: fn, onAfterAppear: fn, onAppearCancelled: fn }, ip = (n) => {
  const e = n.subTree;
  return e.component ? ip(e.component) : e;
}, Qg = { name: "BaseTransition", props: np, setup(n, { slots: e }) {
  const t = Op(), i = tp();
  return () => {
    const s = e.default && hu(e.default(), true);
    if (!s || !s.length) return;
    const r = sp(s), o = tt(n), { mode: a } = o;
    if (i.isLeaving) return Wa(r);
    const l = rh(r);
    if (!l) return Wa(r);
    let c = Nr(l, o, i, t, (h) => c = h);
    l.type !== Kt && rs(l, c);
    let u = t.subTree && rh(t.subTree);
    if (u && u.type !== Kt && !$i(l, u) && ip(t).type !== Kt) {
      let h = Nr(u, o, i, t);
      if (rs(u, h), a === "out-in" && l.type !== Kt) return i.isLeaving = true, h.afterLeave = () => {
        i.isLeaving = false, t.job.flags & 8 || t.update(), delete h.afterLeave, u = void 0;
      }, Wa(r);
      a === "in-out" && l.type !== Kt ? h.delayLeave = (f, d, m) => {
        const _ = rp(i, u);
        _[String(u.key)] = u, f[bi] = () => {
          d(), f[bi] = void 0, delete c.delayedLeave, u = void 0;
        }, c.delayedLeave = () => {
          m(), delete c.delayedLeave, u = void 0;
        };
      } : u = void 0;
    } else u && (u = void 0);
    return r;
  };
} };
function sp(n) {
  let e = n[0];
  if (n.length > 1) {
    for (const t of n) if (t.type !== Kt) {
      e = t;
      break;
    }
  }
  return e;
}
const $g = Qg;
function rp(n, e) {
  const { leavingVNodes: t } = n;
  let i = t.get(e.type);
  return i || (i = /* @__PURE__ */ Object.create(null), t.set(e.type, i)), i;
}
function Nr(n, e, t, i, s) {
  const { appear: r, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: c, onAfterEnter: u, onEnterCancelled: h, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: g, onAppear: p, onAfterAppear: A, onAppearCancelled: b } = e, x = String(n.key), C = rp(t, n), w = (S, M) => {
    S && Pn(S, i, 9, M);
  }, R = (S, M) => {
    const I = M[1];
    w(S, M), Oe(S) ? S.every((z) => z.length <= 1) && I() : S.length <= 1 && I();
  }, D = { mode: o, persisted: a, beforeEnter(S) {
    let M = l;
    if (!t.isMounted) if (r) M = g || l;
    else return;
    S[bi] && S[bi](true);
    const I = C[x];
    I && $i(n, I) && I.el[bi] && I.el[bi](), w(M, [S]);
  }, enter(S) {
    let M = c, I = u, z = h;
    if (!t.isMounted) if (r) M = p || c, I = A || u, z = b || h;
    else return;
    let X = false;
    const J = S[ao] = (te) => {
      X || (X = true, te ? w(z, [S]) : w(I, [S]), D.delayedLeave && D.delayedLeave(), S[ao] = void 0);
    };
    M ? R(M, [S, J]) : J();
  }, leave(S, M) {
    const I = String(n.key);
    if (S[ao] && S[ao](true), t.isUnmounting) return M();
    w(f, [S]);
    let z = false;
    const X = S[bi] = (J) => {
      z || (z = true, M(), J ? w(_, [S]) : w(m, [S]), S[bi] = void 0, C[I] === n && delete C[I]);
    };
    C[I] = n, d ? R(d, [S, X]) : X();
  }, clone(S) {
    const M = Nr(S, e, t, i, s);
    return s && s(M), M;
  } };
  return D;
}
function Wa(n) {
  if (Ea(n)) return n = Pi(n), n.children = null, n;
}
function rh(n) {
  if (!Ea(n)) return Qd(n.type) && n.children ? sp(n.children) : n;
  const { shapeFlag: e, children: t } = n;
  if (t) {
    if (e & 16) return t[0];
    if (e & 32 && He(t.default)) return t.default();
  }
}
function rs(n, e) {
  n.shapeFlag & 6 && n.component ? (n.transition = e, rs(n.component.subTree, e)) : n.shapeFlag & 128 ? (n.ssContent.transition = e.clone(n.ssContent), n.ssFallback.transition = e.clone(n.ssFallback)) : n.transition = e;
}
function hu(n, e = false, t) {
  let i = [], s = 0;
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : r);
    o.type === $t ? (o.patchFlag & 128 && s++, i = i.concat(hu(o.children, e, a))) : (e || o.type !== Kt) && i.push(a != null ? Pi(o, { key: a }) : o);
  }
  if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function cE(n, e) {
  return He(n) ? Et({ name: n.name }, e, { setup: n }) : n;
}
function op(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function la(n, e, t, i, s = false) {
  if (Oe(n)) {
    n.forEach((m, _) => la(m, e && (Oe(e) ? e[_] : e), t, i, s));
    return;
  }
  if (Us(i) && !s) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && la(n, e, t, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Pa(i.component) : i.el, o = s ? null : r, { i: a, r: l } = n, c = e && e.r, u = a.refs === ht ? a.refs = {} : a.refs, h = a.setupState, f = tt(h), d = h === ht ? () => false : (m) => rt(f, m);
  if (c != null && c !== l && (_t(c) ? (u[c] = null, d(c) && (h[c] = null)) : kt(c) && (c.value = null)), He(l)) Kr(l, a, 12, [o, u]);
  else {
    const m = _t(l), _ = kt(l);
    if (m || _) {
      const g = () => {
        if (n.f) {
          const p = m ? d(l) ? h[l] : u[l] : l.value;
          s ? Oe(p) && Qc(p, r) : Oe(p) ? p.includes(r) || p.push(r) : m ? (u[l] = [r], d(l) && (h[l] = u[l])) : (l.value = [r], n.k && (u[n.k] = l.value));
        } else m ? (u[l] = o, d(l) && (h[l] = o)) : _ && (l.value = o, n.k && (u[n.k] = o));
      };
      o ? (g.id = -1, qt(g, t)) : g();
    }
  }
}
ba().requestIdleCallback;
ba().cancelIdleCallback;
const Us = (n) => !!n.type.__asyncLoader, Ea = (n) => n.type.__isKeepAlive;
function e_(n, e) {
  ap(n, "a", e);
}
function t_(n, e) {
  ap(n, "da", e);
}
function ap(n, e, t = Dt) {
  const i = n.__wdc || (n.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return n();
  });
  if (wa(e, i, t), t) {
    let s = t.parent;
    for (; s && s.parent; ) Ea(s.parent.vnode) && n_(i, e, t, s), s = s.parent;
  }
}
function n_(n, e, t, i) {
  const s = wa(e, n, i, true);
  hp(() => {
    Qc(i[e], s);
  }, t);
}
function wa(n, e, t = Dt, i = false) {
  if (t) {
    const s = t[n] || (t[n] = []), r = e.__weh || (e.__weh = (...o) => {
      Di();
      const a = Zr(t), l = Pn(e, t, n, o);
      return a(), Ni(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const hi = (n) => (e, t = Dt) => {
  (!Fr || n === "sp") && wa(n, (...i) => e(...i), t);
}, i_ = hi("bm"), lp = hi("m"), s_ = hi("bu"), cp = hi("u"), up = hi("bum"), hp = hi("um"), r_ = hi("sp"), o_ = hi("rtg"), a_ = hi("rtc");
function l_(n, e = Dt) {
  wa("ec", n, e);
}
const fp = "components";
function uE(n, e) {
  return pp(fp, n, true, e) || n;
}
const dp = Symbol.for("v-ndc");
function hE(n) {
  return _t(n) ? pp(fp, n, false) || n : n || dp;
}
function pp(n, e, t = true, i = false) {
  const s = Pt || Dt;
  if (s) {
    const r = s.type;
    {
      const a = Z_(r, false);
      if (a && (a === e || a === yn(e) || a === Sa(yn(e)))) return r;
    }
    const o = oh(s[n] || r[n], e) || oh(s.appContext[n], e);
    return !o && i ? r : o;
  }
}
function oh(n, e) {
  return n && (n[e] || n[yn(e)] || n[Sa(yn(e))]);
}
function fE(n, e, t, i) {
  let s;
  const r = t, o = Oe(n);
  if (o || _t(n)) {
    const a = o && Ds(n);
    let l = false;
    a && (l = !gn(n), n = Ta(n)), s = new Array(n.length);
    for (let c = 0, u = n.length; c < u; c++) s[c] = e(l ? Ht(n[c]) : n[c], c, void 0, r);
  } else if (typeof n == "number") {
    s = new Array(n);
    for (let a = 0; a < n; a++) s[a] = e(a + 1, a, void 0, r);
  } else if (pt(n)) if (n[Symbol.iterator]) s = Array.from(n, (a, l) => e(a, l, void 0, r));
  else {
    const a = Object.keys(n);
    s = new Array(a.length);
    for (let l = 0, c = a.length; l < c; l++) {
      const u = a[l];
      s[l] = e(n[u], u, l, r);
    }
  }
  else s = [];
  return s;
}
function dE(n, e, t = {}, i, s) {
  if (Pt.ce || Pt.parent && Us(Pt.parent) && Pt.parent.ce) return Zl(), Jl($t, null, [Zt("slot", t, i)], 64);
  let r = n[e];
  r && r._c && (r._d = false), Zl();
  const o = r && mp(r(t)), a = t.key || o && o.key, l = Jl($t, { key: (a && !ui(a) ? a : `_${e}`) + "" }, o || [], o && n._ === 1 ? 64 : -2);
  return r && r._c && (r._d = true), l;
}
function mp(n) {
  return n.some((e) => Or(e) ? !(e.type === Kt || e.type === $t && !mp(e.children)) : true) ? n : null;
}
const Yl = (n) => n ? Fp(n) ? Pa(n) : Yl(n.parent) : null, br = Et(/* @__PURE__ */ Object.create(null), { $: (n) => n, $el: (n) => n.vnode.el, $data: (n) => n.data, $props: (n) => n.props, $attrs: (n) => n.attrs, $slots: (n) => n.slots, $refs: (n) => n.refs, $parent: (n) => Yl(n.parent), $root: (n) => Yl(n.root), $host: (n) => n.ce, $emit: (n) => n.emit, $options: (n) => _p(n), $forceUpdate: (n) => n.f || (n.f = () => {
  uu(n.update);
}), $nextTick: (n) => n.n || (n.n = qg.bind(n.proxy)), $watch: (n) => P_.bind(n) }), Xa = (n, e) => n !== ht && !n.__isScriptSetup && rt(n, e), c_ = { get({ _: n }, e) {
  if (e === "__v_skip") return true;
  const { ctx: t, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = n;
  let c;
  if (e[0] !== "$") {
    const d = o[e];
    if (d !== void 0) switch (d) {
      case 1:
        return i[e];
      case 2:
        return s[e];
      case 4:
        return t[e];
      case 3:
        return r[e];
    }
    else {
      if (Xa(i, e)) return o[e] = 1, i[e];
      if (s !== ht && rt(s, e)) return o[e] = 2, s[e];
      if ((c = n.propsOptions[0]) && rt(c, e)) return o[e] = 3, r[e];
      if (t !== ht && rt(t, e)) return o[e] = 4, t[e];
      ql && (o[e] = 0);
    }
  }
  const u = br[e];
  let h, f;
  if (u) return e === "$attrs" && zt(n.attrs, "get", ""), u(n);
  if ((h = a.__cssModules) && (h = h[e])) return h;
  if (t !== ht && rt(t, e)) return o[e] = 4, t[e];
  if (f = l.config.globalProperties, rt(f, e)) return f[e];
}, set({ _: n }, e, t) {
  const { data: i, setupState: s, ctx: r } = n;
  return Xa(s, e) ? (s[e] = t, true) : i !== ht && rt(i, e) ? (i[e] = t, true) : rt(n.props, e) || e[0] === "$" && e.slice(1) in n ? false : (r[e] = t, true);
}, has({ _: { data: n, setupState: e, accessCache: t, ctx: i, appContext: s, propsOptions: r } }, o) {
  let a;
  return !!t[o] || n !== ht && rt(n, o) || Xa(e, o) || (a = r[0]) && rt(a, o) || rt(i, o) || rt(br, o) || rt(s.config.globalProperties, o);
}, defineProperty(n, e, t) {
  return t.get != null ? n._.accessCache[e] = 0 : rt(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
} };
function ah(n) {
  return Oe(n) ? n.reduce((e, t) => (e[t] = null, e), {}) : n;
}
let ql = true;
function u_(n) {
  const e = _p(n), t = n.proxy, i = n.ctx;
  ql = false, e.beforeCreate && lh(e.beforeCreate, n, "bc");
  const { data: s, computed: r, methods: o, watch: a, provide: l, inject: c, created: u, beforeMount: h, mounted: f, beforeUpdate: d, updated: m, activated: _, deactivated: g, beforeDestroy: p, beforeUnmount: A, destroyed: b, unmounted: x, render: C, renderTracked: w, renderTriggered: R, errorCaptured: D, serverPrefetch: S, expose: M, inheritAttrs: I, components: z, directives: X, filters: J } = e;
  if (c && h_(c, i, null), o) for (const ne in o) {
    const K = o[ne];
    He(K) && (i[ne] = K.bind(t));
  }
  if (s) {
    const ne = s.call(t, t);
    pt(ne) && (n.data = au(ne));
  }
  if (ql = true, r) for (const ne in r) {
    const K = r[ne], fe = He(K) ? K.bind(t, t) : He(K.get) ? K.get.bind(t, t) : Hn, xe = !He(K) && He(K.set) ? K.set.bind(t) : Hn, Se = Q_({ get: fe, set: xe });
    Object.defineProperty(i, ne, { enumerable: true, configurable: true, get: () => Se.value, set: (Le) => Se.value = Le });
  }
  if (a) for (const ne in a) gp(a[ne], i, t, ne);
  if (l) {
    const ne = He(l) ? l.call(t) : l;
    Reflect.ownKeys(ne).forEach((K) => {
      __(K, ne[K]);
    });
  }
  u && lh(u, n, "c");
  function Z(ne, K) {
    Oe(K) ? K.forEach((fe) => ne(fe.bind(t))) : K && ne(K.bind(t));
  }
  if (Z(i_, h), Z(lp, f), Z(s_, d), Z(cp, m), Z(e_, _), Z(t_, g), Z(l_, D), Z(a_, w), Z(o_, R), Z(up, A), Z(hp, x), Z(r_, S), Oe(M)) if (M.length) {
    const ne = n.exposed || (n.exposed = {});
    M.forEach((K) => {
      Object.defineProperty(ne, K, { get: () => t[K], set: (fe) => t[K] = fe });
    });
  } else n.exposed || (n.exposed = {});
  C && n.render === Hn && (n.render = C), I != null && (n.inheritAttrs = I), z && (n.components = z), X && (n.directives = X), S && op(n);
}
function h_(n, e, t = Hn) {
  Oe(n) && (n = jl(n));
  for (const i in n) {
    const s = n[i];
    let r;
    pt(s) ? "default" in s ? r = jo(s.from || i, s.default, true) : r = jo(s.from || i) : r = jo(s), kt(r) ? Object.defineProperty(e, i, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : e[i] = r;
  }
}
function lh(n, e, t) {
  Pn(Oe(n) ? n.map((i) => i.bind(e.proxy)) : n.bind(e.proxy), e, t);
}
function gp(n, e, t, i) {
  let s = i.includes(".") ? Pp(t, i) : () => t[i];
  if (_t(n)) {
    const r = e[n];
    He(r) && qa(s, r);
  } else if (He(n)) qa(s, n.bind(t));
  else if (pt(n)) if (Oe(n)) n.forEach((r) => gp(r, e, t, i));
  else {
    const r = He(n.handler) ? n.handler.bind(t) : e[n.handler];
    He(r) && qa(s, r, n);
  }
}
function _p(n) {
  const e = n.type, { mixins: t, extends: i } = e, { mixins: s, optionsCache: r, config: { optionMergeStrategies: o } } = n.appContext, a = r.get(e);
  let l;
  return a ? l = a : !s.length && !t && !i ? l = e : (l = {}, s.length && s.forEach((c) => ca(l, c, o, true)), ca(l, e, o)), pt(e) && r.set(e, l), l;
}
function ca(n, e, t, i = false) {
  const { mixins: s, extends: r } = e;
  r && ca(n, r, t, true), s && s.forEach((o) => ca(n, o, t, true));
  for (const o in e) if (!(i && o === "expose")) {
    const a = f_[o] || t && t[o];
    n[o] = a ? a(n[o], e[o]) : e[o];
  }
  return n;
}
const f_ = { data: ch, props: uh, emits: uh, methods: mr, computed: mr, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: mr, directives: mr, watch: p_, provide: ch, inject: d_ };
function ch(n, e) {
  return e ? n ? function() {
    return Et(He(n) ? n.call(this, this) : n, He(e) ? e.call(this, this) : e);
  } : e : n;
}
function d_(n, e) {
  return mr(jl(n), jl(e));
}
function jl(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Xt(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function mr(n, e) {
  return n ? Et(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function uh(n, e) {
  return n ? Oe(n) && Oe(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : Et(/* @__PURE__ */ Object.create(null), ah(n), ah(e ?? {})) : e;
}
function p_(n, e) {
  if (!n) return e;
  if (!e) return n;
  const t = Et(/* @__PURE__ */ Object.create(null), n);
  for (const i in e) t[i] = Xt(n[i], e[i]);
  return t;
}
function xp() {
  return { app: null, config: { isNativeTag: rg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let m_ = 0;
function g_(n, e) {
  return function(i, s = null) {
    He(i) || (i = Et({}, i)), s != null && !pt(s) && (s = null);
    const r = xp(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const c = r.app = { _uid: m_++, _component: i, _props: s, _container: null, _context: r, _instance: null, version: ex, get config() {
      return r.config;
    }, set config(u) {
    }, use(u, ...h) {
      return o.has(u) || (u && He(u.install) ? (o.add(u), u.install(c, ...h)) : He(u) && (o.add(u), u(c, ...h))), c;
    }, mixin(u) {
      return r.mixins.includes(u) || r.mixins.push(u), c;
    }, component(u, h) {
      return h ? (r.components[u] = h, c) : r.components[u];
    }, directive(u, h) {
      return h ? (r.directives[u] = h, c) : r.directives[u];
    }, mount(u, h, f) {
      if (!l) {
        const d = c._ceVNode || Zt(i, s);
        return d.appContext = r, f === true ? f = "svg" : f === false && (f = void 0), n(d, u, f), l = true, c._container = u, u.__vue_app__ = c, Pa(d.component);
      }
    }, onUnmount(u) {
      a.push(u);
    }, unmount() {
      l && (Pn(a, c._instance, 16), n(null, c._container), delete c._container.__vue_app__);
    }, provide(u, h) {
      return r.provides[u] = h, c;
    }, runWithContext(u) {
      const h = Os;
      Os = c;
      try {
        return u();
      } finally {
        Os = h;
      }
    } };
    return c;
  };
}
let Os = null;
function __(n, e) {
  if (Dt) {
    let t = Dt.provides;
    const i = Dt.parent && Dt.parent.provides;
    i === t && (t = Dt.provides = Object.create(i)), t[n] = e;
  }
}
function jo(n, e, t = false) {
  const i = Dt || Pt;
  if (i || Os) {
    const s = Os ? Os._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && n in s) return s[n];
    if (arguments.length > 1) return t && He(e) ? e.call(i && i.proxy) : e;
  }
}
const vp = {}, yp = () => Object.create(vp), Mp = (n) => Object.getPrototypeOf(n) === vp;
function x_(n, e, t, i = false) {
  const s = {}, r = yp();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Sp(n, e, s, r);
  for (const o in n.propsOptions[0]) o in s || (s[o] = void 0);
  t ? n.props = i ? s : Fg(s) : n.type.props ? n.props = s : n.props = r, n.attrs = r;
}
function v_(n, e, t, i) {
  const { props: s, attrs: r, vnode: { patchFlag: o } } = n, a = tt(s), [l] = n.propsOptions;
  let c = false;
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = n.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let f = u[h];
        if (Ra(n.emitsOptions, f)) continue;
        const d = e[f];
        if (l) if (rt(r, f)) d !== r[f] && (r[f] = d, c = true);
        else {
          const m = yn(f);
          s[m] = Kl(l, a, m, d, n, false);
        }
        else d !== r[f] && (r[f] = d, c = true);
      }
    }
  } else {
    Sp(n, e, s, r) && (c = true);
    let u;
    for (const h in a) (!e || !rt(e, h) && ((u = Ii(h)) === h || !rt(e, u))) && (l ? t && (t[h] !== void 0 || t[u] !== void 0) && (s[h] = Kl(l, a, h, void 0, n, true)) : delete s[h]);
    if (r !== a) for (const h in r) (!e || !rt(e, h)) && (delete r[h], c = true);
  }
  c && ni(n.attrs, "set", "");
}
function Sp(n, e, t, i) {
  const [s, r] = n.propsOptions;
  let o = false, a;
  if (e) for (let l in e) {
    if (vr(l)) continue;
    const c = e[l];
    let u;
    s && rt(s, u = yn(l)) ? !r || !r.includes(u) ? t[u] = c : (a || (a = {}))[u] = c : Ra(n.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = true);
  }
  if (r) {
    const l = tt(t), c = a || ht;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      t[h] = Kl(s, l, h, c[h], n, !rt(c, h));
    }
  }
  return o;
}
function Kl(n, e, t, i, s, r) {
  const o = n[t];
  if (o != null) {
    const a = rt(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && He(l)) {
        const { propsDefaults: c } = s;
        if (t in c) i = c[t];
        else {
          const u = Zr(s);
          i = c[t] = l.call(null, e), u();
        }
      } else i = l;
      s.ce && s.ce._setProp(t, i);
    }
    o[0] && (r && !a ? i = false : o[1] && (i === "" || i === Ii(t)) && (i = true));
  }
  return i;
}
const y_ = /* @__PURE__ */ new WeakMap();
function bp(n, e, t = false) {
  const i = t ? y_ : e.propsCache, s = i.get(n);
  if (s) return s;
  const r = n.props, o = {}, a = [];
  let l = false;
  if (!He(n)) {
    const u = (h) => {
      l = true;
      const [f, d] = bp(h, e, true);
      Et(o, f), d && a.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(u), n.extends && u(n.extends), n.mixins && n.mixins.forEach(u);
  }
  if (!r && !l) return pt(n) && i.set(n, Ls), Ls;
  if (Oe(r)) for (let u = 0; u < r.length; u++) {
    const h = yn(r[u]);
    hh(h) && (o[h] = ht);
  }
  else if (r) for (const u in r) {
    const h = yn(u);
    if (hh(h)) {
      const f = r[u], d = o[h] = Oe(f) || He(f) ? { type: f } : Et({}, f), m = d.type;
      let _ = false, g = true;
      if (Oe(m)) for (let p = 0; p < m.length; ++p) {
        const A = m[p], b = He(A) && A.name;
        if (b === "Boolean") {
          _ = true;
          break;
        } else b === "String" && (g = false);
      }
      else _ = He(m) && m.name === "Boolean";
      d[0] = _, d[1] = g, (_ || rt(d, "default")) && a.push(h);
    }
  }
  const c = [o, a];
  return pt(n) && i.set(n, c), c;
}
function hh(n) {
  return n[0] !== "$" && !vr(n);
}
const Tp = (n) => n[0] === "_" || n === "$stable", fu = (n) => Oe(n) ? n.map(On) : [On(n)], M_ = (n, e, t) => {
  if (e._n) return e;
  const i = Zg((...s) => fu(e(...s)), t);
  return i._c = false, i;
}, Ap = (n, e, t) => {
  const i = n._ctx;
  for (const s in n) {
    if (Tp(s)) continue;
    const r = n[s];
    if (He(r)) e[s] = M_(s, r, i);
    else if (r != null) {
      const o = fu(r);
      e[s] = () => o;
    }
  }
}, Ep = (n, e) => {
  const t = fu(e);
  n.slots.default = () => t;
}, wp = (n, e, t) => {
  for (const i in e) (t || i !== "_") && (n[i] = e[i]);
}, S_ = (n, e, t) => {
  const i = n.slots = yp();
  if (n.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (wp(i, e, t), t && Td(i, "_", s, true)) : Ap(e, i);
  } else e && Ep(n, e);
}, b_ = (n, e, t) => {
  const { vnode: i, slots: s } = n;
  let r = true, o = ht;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? t && a === 1 ? r = false : wp(s, e, t) : (r = !e.$stable, Ap(e, s)), o = e;
  } else e && (Ep(n, e), o = { default: 1 });
  if (r) for (const a in s) !Tp(a) && o[a] == null && delete s[a];
}, qt = F_;
function T_(n) {
  return A_(n);
}
function A_(n, e) {
  const t = ba();
  t.__VUE__ = true;
  const { insert: i, remove: s, patchProp: r, createElement: o, createText: a, createComment: l, setText: c, setElementText: u, parentNode: h, nextSibling: f, setScopeId: d = Hn, insertStaticContent: m } = n, _ = (P, U, T, se = null, O = null, F = null, H = void 0, j = null, B = !!U.dynamicChildren) => {
    if (P === U) return;
    P && !$i(P, U) && (se = me(P), Le(P, O, F, true), P = null), U.patchFlag === -2 && (B = false, U.dynamicChildren = null);
    const { type: y, ref: v, shapeFlag: L } = U;
    switch (y) {
      case Ca:
        g(P, U, T, se);
        break;
      case Kt:
        p(P, U, T, se);
        break;
      case ja:
        P == null && A(U, T, se, H);
        break;
      case $t:
        z(P, U, T, se, O, F, H, j, B);
        break;
      default:
        L & 1 ? C(P, U, T, se, O, F, H, j, B) : L & 6 ? X(P, U, T, se, O, F, H, j, B) : (L & 64 || L & 128) && y.process(P, U, T, se, O, F, H, j, B, Re);
    }
    v != null && O && la(v, P && P.ref, F, U || P, !U);
  }, g = (P, U, T, se) => {
    if (P == null) i(U.el = a(U.children), T, se);
    else {
      const O = U.el = P.el;
      U.children !== P.children && c(O, U.children);
    }
  }, p = (P, U, T, se) => {
    P == null ? i(U.el = l(U.children || ""), T, se) : U.el = P.el;
  }, A = (P, U, T, se) => {
    [P.el, P.anchor] = m(P.children, U, T, se, P.el, P.anchor);
  }, b = ({ el: P, anchor: U }, T, se) => {
    let O;
    for (; P && P !== U; ) O = f(P), i(P, T, se), P = O;
    i(U, T, se);
  }, x = ({ el: P, anchor: U }) => {
    let T;
    for (; P && P !== U; ) T = f(P), s(P), P = T;
    s(U);
  }, C = (P, U, T, se, O, F, H, j, B) => {
    U.type === "svg" ? H = "svg" : U.type === "math" && (H = "mathml"), P == null ? w(U, T, se, O, F, H, j, B) : S(P, U, O, F, H, j, B);
  }, w = (P, U, T, se, O, F, H, j) => {
    let B, y;
    const { props: v, shapeFlag: L, transition: k, dirs: Y } = P;
    if (B = P.el = o(P.type, F, v && v.is, v), L & 8 ? u(B, P.children) : L & 16 && D(P.children, B, null, se, O, Ya(P, F), H, j), Y && Bi(P, null, se, "created"), R(B, P, P.scopeId, H, se), v) {
      for (const ce in v) ce !== "value" && !vr(ce) && r(B, ce, null, v[ce], F, se);
      "value" in v && r(B, "value", null, v.value, F), (y = v.onVnodeBeforeMount) && Dn(y, se, P);
    }
    Y && Bi(P, null, se, "beforeMount");
    const q = E_(O, k);
    q && k.beforeEnter(B), i(B, U, T), ((y = v && v.onVnodeMounted) || q || Y) && qt(() => {
      y && Dn(y, se, P), q && k.enter(B), Y && Bi(P, null, se, "mounted");
    }, O);
  }, R = (P, U, T, se, O) => {
    if (T && d(P, T), se) for (let F = 0; F < se.length; F++) d(P, se[F]);
    if (O) {
      let F = O.subTree;
      if (U === F || Ip(F.type) && (F.ssContent === U || F.ssFallback === U)) {
        const H = O.vnode;
        R(P, H, H.scopeId, H.slotScopeIds, O.parent);
      }
    }
  }, D = (P, U, T, se, O, F, H, j, B = 0) => {
    for (let y = B; y < P.length; y++) {
      const v = P[y] = j ? Ti(P[y]) : On(P[y]);
      _(null, v, U, T, se, O, F, H, j);
    }
  }, S = (P, U, T, se, O, F, H) => {
    const j = U.el = P.el;
    let { patchFlag: B, dynamicChildren: y, dirs: v } = U;
    B |= P.patchFlag & 16;
    const L = P.props || ht, k = U.props || ht;
    let Y;
    if (T && zi(T, false), (Y = k.onVnodeBeforeUpdate) && Dn(Y, T, U, P), v && Bi(U, P, T, "beforeUpdate"), T && zi(T, true), (L.innerHTML && k.innerHTML == null || L.textContent && k.textContent == null) && u(j, ""), y ? M(P.dynamicChildren, y, j, T, se, Ya(U, O), F) : H || K(P, U, j, null, T, se, Ya(U, O), F, false), B > 0) {
      if (B & 16) I(j, L, k, T, O);
      else if (B & 2 && L.class !== k.class && r(j, "class", null, k.class, O), B & 4 && r(j, "style", L.style, k.style, O), B & 8) {
        const q = U.dynamicProps;
        for (let ce = 0; ce < q.length; ce++) {
          const re = q[ce], de = L[re], De = k[re];
          (De !== de || re === "value") && r(j, re, de, De, O, T);
        }
      }
      B & 1 && P.children !== U.children && u(j, U.children);
    } else !H && y == null && I(j, L, k, T, O);
    ((Y = k.onVnodeUpdated) || v) && qt(() => {
      Y && Dn(Y, T, U, P), v && Bi(U, P, T, "updated");
    }, se);
  }, M = (P, U, T, se, O, F, H) => {
    for (let j = 0; j < U.length; j++) {
      const B = P[j], y = U[j], v = B.el && (B.type === $t || !$i(B, y) || B.shapeFlag & 70) ? h(B.el) : T;
      _(B, y, v, null, se, O, F, H, true);
    }
  }, I = (P, U, T, se, O) => {
    if (U !== T) {
      if (U !== ht) for (const F in U) !vr(F) && !(F in T) && r(P, F, U[F], null, O, se);
      for (const F in T) {
        if (vr(F)) continue;
        const H = T[F], j = U[F];
        H !== j && F !== "value" && r(P, F, j, H, O, se);
      }
      "value" in T && r(P, "value", U.value, T.value, O);
    }
  }, z = (P, U, T, se, O, F, H, j, B) => {
    const y = U.el = P ? P.el : a(""), v = U.anchor = P ? P.anchor : a("");
    let { patchFlag: L, dynamicChildren: k, slotScopeIds: Y } = U;
    Y && (j = j ? j.concat(Y) : Y), P == null ? (i(y, T, se), i(v, T, se), D(U.children || [], T, v, O, F, H, j, B)) : L > 0 && L & 64 && k && P.dynamicChildren ? (M(P.dynamicChildren, k, T, O, F, H, j), (U.key != null || O && U === O.subTree) && du(P, U, true)) : K(P, U, T, v, O, F, H, j, B);
  }, X = (P, U, T, se, O, F, H, j, B) => {
    U.slotScopeIds = j, P == null ? U.shapeFlag & 512 ? O.ctx.activate(U, T, se, H, B) : J(U, T, se, O, F, H, B) : te(P, U, B);
  }, J = (P, U, T, se, O, F, H) => {
    const j = P.component = X_(P, se, O);
    if (Ea(P) && (j.ctx.renderer = Re), Y_(j, false, H), j.asyncDep) {
      if (O && O.registerDep(j, Z, H), !P.el) {
        const B = j.subTree = Zt(Kt);
        p(null, B, U, T);
      }
    } else Z(j, P, U, T, O, F, H);
  }, te = (P, U, T) => {
    const se = U.component = P.component;
    if (U_(P, U, T)) if (se.asyncDep && !se.asyncResolved) {
      ne(se, U, T);
      return;
    } else se.next = U, se.update();
    else U.el = P.el, se.vnode = U;
  }, Z = (P, U, T, se, O, F, H) => {
    const j = () => {
      if (P.isMounted) {
        let { next: L, bu: k, u: Y, parent: q, vnode: ce } = P;
        {
          const ge = Rp(P);
          if (ge) {
            L && (L.el = ce.el, ne(P, L, H)), ge.asyncDep.then(() => {
              P.isUnmounted || j();
            });
            return;
          }
        }
        let re = L, de;
        zi(P, false), L ? (L.el = ce.el, ne(P, L, H)) : L = ce, k && Yo(k), (de = L.props && L.props.onVnodeBeforeUpdate) && Dn(de, q, L, ce), zi(P, true);
        const De = dh(P), ae = P.subTree;
        P.subTree = De, _(ae, De, h(ae.el), me(ae), P, O, F), L.el = De.el, re === null && O_(P, De.el), Y && qt(Y, O), (de = L.props && L.props.onVnodeUpdated) && qt(() => Dn(de, q, L, ce), O);
      } else {
        let L;
        const { el: k, props: Y } = U, { bm: q, m: ce, parent: re, root: de, type: De } = P, ae = Us(U);
        zi(P, false), q && Yo(q), !ae && (L = Y && Y.onVnodeBeforeMount) && Dn(L, re, U), zi(P, true);
        {
          de.ce && de.ce._injectChildStyle(De);
          const ge = P.subTree = dh(P);
          _(null, ge, T, se, P, O, F), U.el = ge.el;
        }
        if (ce && qt(ce, O), !ae && (L = Y && Y.onVnodeMounted)) {
          const ge = U;
          qt(() => Dn(L, re, ge), O);
        }
        (U.shapeFlag & 256 || re && Us(re.vnode) && re.vnode.shapeFlag & 256) && P.a && qt(P.a, O), P.isMounted = true, U = T = se = null;
      }
    };
    P.scope.on();
    const B = P.effect = new Cd(j);
    P.scope.off();
    const y = P.update = B.run.bind(B), v = P.job = B.runIfDirty.bind(B);
    v.i = P, v.id = P.uid, B.scheduler = () => uu(v), zi(P, true), y();
  }, ne = (P, U, T) => {
    U.component = P;
    const se = P.vnode.props;
    P.vnode = U, P.next = null, v_(P, U.props, se, T), b_(P, U.children, T), Di(), th(P), Ni();
  }, K = (P, U, T, se, O, F, H, j, B = false) => {
    const y = P && P.children, v = P ? P.shapeFlag : 0, L = U.children, { patchFlag: k, shapeFlag: Y } = U;
    if (k > 0) {
      if (k & 128) {
        xe(y, L, T, se, O, F, H, j, B);
        return;
      } else if (k & 256) {
        fe(y, L, T, se, O, F, H, j, B);
        return;
      }
    }
    Y & 8 ? (v & 16 && be(y, O, F), L !== y && u(T, L)) : v & 16 ? Y & 16 ? xe(y, L, T, se, O, F, H, j, B) : be(y, O, F, true) : (v & 8 && u(T, ""), Y & 16 && D(L, T, se, O, F, H, j, B));
  }, fe = (P, U, T, se, O, F, H, j, B) => {
    P = P || Ls, U = U || Ls;
    const y = P.length, v = U.length, L = Math.min(y, v);
    let k;
    for (k = 0; k < L; k++) {
      const Y = U[k] = B ? Ti(U[k]) : On(U[k]);
      _(P[k], Y, T, null, O, F, H, j, B);
    }
    y > v ? be(P, O, F, true, false, L) : D(U, T, se, O, F, H, j, B, L);
  }, xe = (P, U, T, se, O, F, H, j, B) => {
    let y = 0;
    const v = U.length;
    let L = P.length - 1, k = v - 1;
    for (; y <= L && y <= k; ) {
      const Y = P[y], q = U[y] = B ? Ti(U[y]) : On(U[y]);
      if ($i(Y, q)) _(Y, q, T, null, O, F, H, j, B);
      else break;
      y++;
    }
    for (; y <= L && y <= k; ) {
      const Y = P[L], q = U[k] = B ? Ti(U[k]) : On(U[k]);
      if ($i(Y, q)) _(Y, q, T, null, O, F, H, j, B);
      else break;
      L--, k--;
    }
    if (y > L) {
      if (y <= k) {
        const Y = k + 1, q = Y < v ? U[Y].el : se;
        for (; y <= k; ) _(null, U[y] = B ? Ti(U[y]) : On(U[y]), T, q, O, F, H, j, B), y++;
      }
    } else if (y > k) for (; y <= L; ) Le(P[y], O, F, true), y++;
    else {
      const Y = y, q = y, ce = /* @__PURE__ */ new Map();
      for (y = q; y <= k; y++) {
        const pe = U[y] = B ? Ti(U[y]) : On(U[y]);
        pe.key != null && ce.set(pe.key, y);
      }
      let re, de = 0;
      const De = k - q + 1;
      let ae = false, ge = 0;
      const Ce = new Array(De);
      for (y = 0; y < De; y++) Ce[y] = 0;
      for (y = Y; y <= L; y++) {
        const pe = P[y];
        if (de >= De) {
          Le(pe, O, F, true);
          continue;
        }
        let Be;
        if (pe.key != null) Be = ce.get(pe.key);
        else for (re = q; re <= k; re++) if (Ce[re - q] === 0 && $i(pe, U[re])) {
          Be = re;
          break;
        }
        Be === void 0 ? Le(pe, O, F, true) : (Ce[Be - q] = y + 1, Be >= ge ? ge = Be : ae = true, _(pe, U[Be], T, null, O, F, H, j, B), de++);
      }
      const Ne = ae ? w_(Ce) : Ls;
      for (re = Ne.length - 1, y = De - 1; y >= 0; y--) {
        const pe = q + y, Be = U[pe], Ve = pe + 1 < v ? U[pe + 1].el : se;
        Ce[y] === 0 ? _(null, Be, T, Ve, O, F, H, j, B) : ae && (re < 0 || y !== Ne[re] ? Se(Be, T, Ve, 2) : re--);
      }
    }
  }, Se = (P, U, T, se, O = null) => {
    const { el: F, type: H, transition: j, children: B, shapeFlag: y } = P;
    if (y & 6) {
      Se(P.component.subTree, U, T, se);
      return;
    }
    if (y & 128) {
      P.suspense.move(U, T, se);
      return;
    }
    if (y & 64) {
      H.move(P, U, T, Re);
      return;
    }
    if (H === $t) {
      i(F, U, T);
      for (let L = 0; L < B.length; L++) Se(B[L], U, T, se);
      i(P.anchor, U, T);
      return;
    }
    if (H === ja) {
      b(P, U, T);
      return;
    }
    if (se !== 2 && y & 1 && j) if (se === 0) j.beforeEnter(F), i(F, U, T), qt(() => j.enter(F), O);
    else {
      const { leave: L, delayLeave: k, afterLeave: Y } = j, q = () => i(F, U, T), ce = () => {
        L(F, () => {
          q(), Y && Y();
        });
      };
      k ? k(F, q, ce) : ce();
    }
    else i(F, U, T);
  }, Le = (P, U, T, se = false, O = false) => {
    const { type: F, props: H, ref: j, children: B, dynamicChildren: y, shapeFlag: v, patchFlag: L, dirs: k, cacheIndex: Y } = P;
    if (L === -2 && (O = false), j != null && la(j, null, T, P, true), Y != null && (U.renderCache[Y] = void 0), v & 256) {
      U.ctx.deactivate(P);
      return;
    }
    const q = v & 1 && k, ce = !Us(P);
    let re;
    if (ce && (re = H && H.onVnodeBeforeUnmount) && Dn(re, U, P), v & 6) ue(P.component, T, se);
    else {
      if (v & 128) {
        P.suspense.unmount(T, se);
        return;
      }
      q && Bi(P, null, U, "beforeUnmount"), v & 64 ? P.type.remove(P, U, T, Re, se) : y && !y.hasOnce && (F !== $t || L > 0 && L & 64) ? be(y, U, T, false, true) : (F === $t && L & 384 || !O && v & 16) && be(B, U, T), se && Ze(P);
    }
    (ce && (re = H && H.onVnodeUnmounted) || q) && qt(() => {
      re && Dn(re, U, P), q && Bi(P, null, U, "unmounted");
    }, T);
  }, Ze = (P) => {
    const { type: U, el: T, anchor: se, transition: O } = P;
    if (U === $t) {
      ie(T, se);
      return;
    }
    if (U === ja) {
      x(P);
      return;
    }
    const F = () => {
      s(T), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (P.shapeFlag & 1 && O && !O.persisted) {
      const { leave: H, delayLeave: j } = O, B = () => H(T, F);
      j ? j(P.el, F, B) : B();
    } else F();
  }, ie = (P, U) => {
    let T;
    for (; P !== U; ) T = f(P), s(P), P = T;
    s(U);
  }, ue = (P, U, T) => {
    const { bum: se, scope: O, job: F, subTree: H, um: j, m: B, a: y } = P;
    fh(B), fh(y), se && Yo(se), O.stop(), F && (F.flags |= 8, Le(H, P, U, T)), j && qt(j, U), qt(() => {
      P.isUnmounted = true;
    }, U), U && U.pendingBranch && !U.isUnmounted && P.asyncDep && !P.asyncResolved && P.suspenseId === U.pendingId && (U.deps--, U.deps === 0 && U.resolve());
  }, be = (P, U, T, se = false, O = false, F = 0) => {
    for (let H = F; H < P.length; H++) Le(P[H], U, T, se, O);
  }, me = (P) => {
    if (P.shapeFlag & 6) return me(P.component.subTree);
    if (P.shapeFlag & 128) return P.suspense.next();
    const U = f(P.anchor || P.el), T = U && U[Jd];
    return T ? f(T) : U;
  };
  let Pe = false;
  const je = (P, U, T) => {
    P == null ? U._vnode && Le(U._vnode, null, null, true) : _(U._vnode || null, P, U, null, null, null, T), U._vnode = P, Pe || (Pe = true, th(), jd(), Pe = false);
  }, Re = { p: _, um: Le, m: Se, r: Ze, mt: J, mc: D, pc: K, pbc: M, n: me, o: n };
  return { render: je, hydrate: void 0, createApp: g_(je) };
}
function Ya({ type: n, props: e }, t) {
  return t === "svg" && n === "foreignObject" || t === "mathml" && n === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function zi({ effect: n, job: e }, t) {
  t ? (n.flags |= 32, e.flags |= 4) : (n.flags &= -33, e.flags &= -5);
}
function E_(n, e) {
  return (!n || n && !n.pendingBranch) && e && !e.persisted;
}
function du(n, e, t = false) {
  const i = n.children, s = e.children;
  if (Oe(i) && Oe(s)) for (let r = 0; r < i.length; r++) {
    const o = i[r];
    let a = s[r];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Ti(s[r]), a.el = o.el), !t && a.patchFlag !== -2 && du(o, a)), a.type === Ca && (a.el = o.el);
  }
}
function w_(n) {
  const e = n.slice(), t = [0];
  let i, s, r, o, a;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const c = n[i];
    if (c !== 0) {
      if (s = t[t.length - 1], n[s] < c) {
        e[i] = s, t.push(i);
        continue;
      }
      for (r = 0, o = t.length - 1; r < o; ) a = r + o >> 1, n[t[a]] < c ? r = a + 1 : o = a;
      c < n[t[r]] && (r > 0 && (e[i] = t[r - 1]), t[r] = i);
    }
  }
  for (r = t.length, o = t[r - 1]; r-- > 0; ) t[r] = o, o = e[o];
  return t;
}
function Rp(n) {
  const e = n.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Rp(e);
}
function fh(n) {
  if (n) for (let e = 0; e < n.length; e++) n[e].flags |= 8;
}
const R_ = Symbol.for("v-scx"), C_ = () => jo(R_);
function qa(n, e, t) {
  return Cp(n, e, t);
}
function Cp(n, e, t = ht) {
  const { immediate: i, deep: s, flush: r, once: o } = t, a = Et({}, t), l = e && i || !e && r !== "post";
  let c;
  if (Fr) {
    if (r === "sync") {
      const d = C_();
      c = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Hn, d.resume = Hn, d.pause = Hn, d;
    }
  }
  const u = Dt;
  a.call = (d, m, _) => Pn(d, u, m, _);
  let h = false;
  r === "post" ? a.scheduler = (d) => {
    qt(d, u && u.suspense);
  } : r !== "sync" && (h = true, a.scheduler = (d, m) => {
    m ? d() : uu(d);
  }), a.augmentJob = (d) => {
    e && (d.flags |= 4), h && (d.flags |= 2, u && (d.id = u.uid, d.i = u));
  };
  const f = Xg(n, e, a);
  return Fr && (c ? c.push(f) : l && f()), f;
}
function P_(n, e, t) {
  const i = this.proxy, s = _t(n) ? n.includes(".") ? Pp(i, n) : () => i[n] : n.bind(i, i);
  let r;
  He(e) ? r = e : (r = e.handler, t = e);
  const o = Zr(this), a = Cp(s, r.bind(i), t);
  return o(), a;
}
function Pp(n, e) {
  const t = e.split(".");
  return () => {
    let i = n;
    for (let s = 0; s < t.length && i; s++) i = i[t[s]];
    return i;
  };
}
const L_ = (n, e) => e === "modelValue" || e === "model-value" ? n.modelModifiers : n[`${e}Modifiers`] || n[`${yn(e)}Modifiers`] || n[`${Ii(e)}Modifiers`];
function I_(n, e, ...t) {
  if (n.isUnmounted) return;
  const i = n.vnode.props || ht;
  let s = t;
  const r = e.startsWith("update:"), o = r && L_(i, e.slice(7));
  o && (o.trim && (s = t.map((u) => _t(u) ? u.trim() : u)), o.number && (s = t.map(zl)));
  let a, l = i[a = za(e)] || i[a = za(yn(e))];
  !l && r && (l = i[a = za(Ii(e))]), l && Pn(l, n, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!n.emitted) n.emitted = {};
    else if (n.emitted[a]) return;
    n.emitted[a] = true, Pn(c, n, 6, s);
  }
}
function Lp(n, e, t = false) {
  const i = e.emitsCache, s = i.get(n);
  if (s !== void 0) return s;
  const r = n.emits;
  let o = {}, a = false;
  if (!He(n)) {
    const l = (c) => {
      const u = Lp(c, e, true);
      u && (a = true, Et(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l), n.extends && l(n.extends), n.mixins && n.mixins.forEach(l);
  }
  return !r && !a ? (pt(n) && i.set(n, null), null) : (Oe(r) ? r.forEach((l) => o[l] = null) : Et(o, r), pt(n) && i.set(n, o), o);
}
function Ra(n, e) {
  return !n || !va(e) ? false : (e = e.slice(2).replace(/Once$/, ""), rt(n, e[0].toLowerCase() + e.slice(1)) || rt(n, Ii(e)) || rt(n, e));
}
function dh(n) {
  const { type: e, vnode: t, proxy: i, withProxy: s, propsOptions: [r], slots: o, attrs: a, emit: l, render: c, renderCache: u, props: h, data: f, setupState: d, ctx: m, inheritAttrs: _ } = n, g = aa(n);
  let p, A;
  try {
    if (t.shapeFlag & 4) {
      const x = s || i, C = x;
      p = On(c.call(C, x, u, h, d, f, m)), A = a;
    } else {
      const x = e;
      p = On(x.length > 1 ? x(h, { attrs: a, slots: o, emit: l }) : x(h, null)), A = e.props ? a : D_(a);
    }
  } catch (x) {
    Tr.length = 0, Aa(x, n, 1), p = Zt(Kt);
  }
  let b = p;
  if (A && _ !== false) {
    const x = Object.keys(A), { shapeFlag: C } = b;
    x.length && C & 7 && (r && x.some(Jc) && (A = N_(A, r)), b = Pi(b, A, false, true));
  }
  return t.dirs && (b = Pi(b, null, false, true), b.dirs = b.dirs ? b.dirs.concat(t.dirs) : t.dirs), t.transition && rs(b, t.transition), p = b, aa(g), p;
}
const D_ = (n) => {
  let e;
  for (const t in n) (t === "class" || t === "style" || va(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, N_ = (n, e) => {
  const t = {};
  for (const i in n) (!Jc(i) || !(i.slice(9) in e)) && (t[i] = n[i]);
  return t;
};
function U_(n, e, t) {
  const { props: i, children: s, component: r } = n, { props: o, children: a, patchFlag: l } = e, c = r.emitsOptions;
  if (e.dirs || e.transition) return true;
  if (t && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return i ? ph(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const f = u[h];
        if (o[f] !== i[f] && !Ra(c, f)) return true;
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? true : i === o ? false : i ? o ? ph(i, o, c) : true : !!o;
  return false;
}
function ph(n, e, t) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(n).length) return true;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (e[r] !== n[r] && !Ra(t, r)) return true;
  }
  return false;
}
function O_({ vnode: n, parent: e }, t) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === n && (i.el = n.el), i === n) (n = e.vnode).el = t, e = e.parent;
    else break;
  }
}
const Ip = (n) => n.__isSuspense;
function F_(n, e) {
  e && e.pendingBranch ? Oe(n) ? e.effects.push(...n) : e.effects.push(n) : Kg(n);
}
const $t = Symbol.for("v-fgt"), Ca = Symbol.for("v-txt"), Kt = Symbol.for("v-cmt"), ja = Symbol.for("v-stc"), Tr = [];
let cn = null;
function Zl(n = false) {
  Tr.push(cn = n ? null : []);
}
function B_() {
  Tr.pop(), cn = Tr[Tr.length - 1] || null;
}
let Ur = 1;
function mh(n, e = false) {
  Ur += n, n < 0 && cn && e && (cn.hasOnce = true);
}
function Dp(n) {
  return n.dynamicChildren = Ur > 0 ? cn || Ls : null, B_(), Ur > 0 && cn && cn.push(n), n;
}
function pE(n, e, t, i, s, r) {
  return Dp(Up(n, e, t, i, s, r, true));
}
function Jl(n, e, t, i, s) {
  return Dp(Zt(n, e, t, i, s, true));
}
function Or(n) {
  return n ? n.__v_isVNode === true : false;
}
function $i(n, e) {
  return n.type === e.type && n.key === e.key;
}
const Np = ({ key: n }) => n ?? null, Ko = ({ ref: n, ref_key: e, ref_for: t }) => (typeof n == "number" && (n = "" + n), n != null ? _t(n) || kt(n) || He(n) ? { i: Pt, r: n, k: e, f: !!t } : n : null);
function Up(n, e = null, t = null, i = 0, s = null, r = n === $t ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: n, props: e, key: e && Np(e), ref: e && Ko(e), scopeId: Zd, slotScopeIds: null, children: t, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: i, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: Pt };
  return a ? (pu(l, t), r & 128 && n.normalize(l)) : t && (l.shapeFlag |= _t(t) ? 8 : 16), Ur > 0 && !o && cn && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && cn.push(l), l;
}
const Zt = z_;
function z_(n, e = null, t = null, i = 0, s = null, r = false) {
  if ((!n || n === dp) && (n = Kt), Or(n)) {
    const a = Pi(n, e, true);
    return t && pu(a, t), Ur > 0 && !r && cn && (a.shapeFlag & 6 ? cn[cn.indexOf(n)] = a : cn.push(a)), a.patchFlag = -2, a;
  }
  if (J_(n) && (n = n.__vccOpts), e) {
    e = H_(e);
    let { class: a, style: l } = e;
    a && !_t(a) && (e.class = tu(a)), pt(l) && (cu(l) && !Oe(l) && (l = Et({}, l)), e.style = eu(l));
  }
  const o = _t(n) ? 1 : Ip(n) ? 128 : Qd(n) ? 64 : pt(n) ? 4 : He(n) ? 2 : 0;
  return Up(n, e, t, i, s, o, r, true);
}
function H_(n) {
  return n ? cu(n) || Mp(n) ? Et({}, n) : n : null;
}
function Pi(n, e, t = false, i = false) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = n, c = e ? k_(s || {}, e) : s, u = { __v_isVNode: true, __v_skip: true, type: n.type, props: c, key: c && Np(c), ref: e && e.ref ? t && r ? Oe(r) ? r.concat(Ko(e)) : [r, Ko(e)] : Ko(e) : r, scopeId: n.scopeId, slotScopeIds: n.slotScopeIds, children: a, target: n.target, targetStart: n.targetStart, targetAnchor: n.targetAnchor, staticCount: n.staticCount, shapeFlag: n.shapeFlag, patchFlag: e && n.type !== $t ? o === -1 ? 16 : o | 16 : o, dynamicProps: n.dynamicProps, dynamicChildren: n.dynamicChildren, appContext: n.appContext, dirs: n.dirs, transition: l, component: n.component, suspense: n.suspense, ssContent: n.ssContent && Pi(n.ssContent), ssFallback: n.ssFallback && Pi(n.ssFallback), el: n.el, anchor: n.anchor, ctx: n.ctx, ce: n.ce };
  return l && i && rs(u, l.clone(u)), u;
}
function V_(n = " ", e = 0) {
  return Zt(Ca, null, n, e);
}
function mE(n = "", e = false) {
  return e ? (Zl(), Jl(Kt, null, n)) : Zt(Kt, null, n);
}
function On(n) {
  return n == null || typeof n == "boolean" ? Zt(Kt) : Oe(n) ? Zt($t, null, n.slice()) : Or(n) ? Ti(n) : Zt(Ca, null, String(n));
}
function Ti(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Pi(n);
}
function pu(n, e) {
  let t = 0;
  const { shapeFlag: i } = n;
  if (e == null) e = null;
  else if (Oe(e)) t = 16;
  else if (typeof e == "object") if (i & 65) {
    const s = e.default;
    s && (s._c && (s._d = false), pu(n, s()), s._c && (s._d = true));
    return;
  } else {
    t = 32;
    const s = e._;
    !s && !Mp(e) ? e._ctx = Pt : s === 3 && Pt && (Pt.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
  }
  else He(e) ? (e = { default: e, _ctx: Pt }, t = 32) : (e = String(e), i & 64 ? (t = 16, e = [V_(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function k_(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    for (const s in i) if (s === "class") e.class !== i.class && (e.class = tu([e.class, i.class]));
    else if (s === "style") e.style = eu([e.style, i.style]);
    else if (va(s)) {
      const r = e[s], o = i[s];
      o && r !== o && !(Oe(r) && r.includes(o)) && (e[s] = r ? [].concat(r, o) : o);
    } else s !== "" && (e[s] = i[s]);
  }
  return e;
}
function Dn(n, e, t, i = null) {
  Pn(n, e, 7, [t, i]);
}
const G_ = xp();
let W_ = 0;
function X_(n, e, t) {
  const i = n.type, s = (e ? e.appContext : n.appContext) || G_, r = { uid: W_++, vnode: n, type: i, parent: e, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Rd(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(s.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: bp(i, s), emitsOptions: Lp(i, s), emit: null, emitted: null, propsDefaults: ht, inheritAttrs: i.inheritAttrs, ctx: ht, data: ht, props: ht, attrs: ht, slots: ht, refs: ht, setupState: ht, setupContext: null, suspense: t, suspenseId: t ? t.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = I_.bind(null, r), n.ce && n.ce(r), r;
}
let Dt = null;
const Op = () => Dt || Pt;
let ua, Ql;
{
  const n = ba(), e = (t, i) => {
    let s;
    return (s = n[t]) || (s = n[t] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  ua = e("__VUE_INSTANCE_SETTERS__", (t) => Dt = t), Ql = e("__VUE_SSR_SETTERS__", (t) => Fr = t);
}
const Zr = (n) => {
  const e = Dt;
  return ua(n), n.scope.on(), () => {
    n.scope.off(), ua(e);
  };
}, gh = () => {
  Dt && Dt.scope.off(), ua(null);
};
function Fp(n) {
  return n.vnode.shapeFlag & 4;
}
let Fr = false;
function Y_(n, e = false, t = false) {
  e && Ql(e);
  const { props: i, children: s } = n.vnode, r = Fp(n);
  x_(n, i, r, e), S_(n, s, t);
  const o = r ? q_(n, e) : void 0;
  return e && Ql(false), o;
}
function q_(n, e) {
  const t = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, c_);
  const { setup: i } = t;
  if (i) {
    Di();
    const s = n.setupContext = i.length > 1 ? K_(n) : null, r = Zr(n), o = Kr(i, n, 0, [n.props, s]), a = Md(o);
    if (Ni(), r(), (a || n.sp) && !Us(n) && op(n), a) {
      if (o.then(gh, gh), e) return o.then((l) => {
        _h(n, l);
      }).catch((l) => {
        Aa(l, n, 0);
      });
      n.asyncDep = o;
    } else _h(n, o);
  } else Bp(n);
}
function _h(n, e, t) {
  He(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : pt(e) && (n.setupState = Xd(e)), Bp(n);
}
function Bp(n, e, t) {
  const i = n.type;
  n.render || (n.render = i.render || Hn);
  {
    const s = Zr(n);
    Di();
    try {
      u_(n);
    } finally {
      Ni(), s();
    }
  }
}
const j_ = { get(n, e) {
  return zt(n, "get", ""), n[e];
} };
function K_(n) {
  const e = (t) => {
    n.exposed = t || {};
  };
  return { attrs: new Proxy(n.attrs, j_), slots: n.slots, emit: n.emit, expose: e };
}
function Pa(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Xd(Bg(n.exposed)), { get(e, t) {
    if (t in e) return e[t];
    if (t in br) return br[t](n);
  }, has(e, t) {
    return t in e || t in br;
  } })) : n.proxy;
}
function Z_(n, e = true) {
  return He(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function J_(n) {
  return He(n) && "__vccOpts" in n;
}
const Q_ = (n, e) => Gg(n, e, Fr);
function $_(n, e, t) {
  const i = arguments.length;
  return i === 2 ? pt(e) && !Oe(e) ? Or(e) ? Zt(n, null, [e]) : Zt(n, e) : Zt(n, null, e) : (i > 3 ? t = Array.prototype.slice.call(arguments, 2) : i === 3 && Or(t) && (t = [t]), Zt(n, e, t));
}
const ex = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $l;
const xh = typeof window < "u" && window.trustedTypes;
if (xh) try {
  $l = xh.createPolicy("vue", { createHTML: (n) => n });
} catch {
}
const zp = $l ? (n) => $l.createHTML(n) : (n) => n, tx = "http://www.w3.org/2000/svg", nx = "http://www.w3.org/1998/Math/MathML", ei = typeof document < "u" ? document : null, vh = ei && ei.createElement("template"), ix = { insert: (n, e, t) => {
  e.insertBefore(n, t || null);
}, remove: (n) => {
  const e = n.parentNode;
  e && e.removeChild(n);
}, createElement: (n, e, t, i) => {
  const s = e === "svg" ? ei.createElementNS(tx, n) : e === "mathml" ? ei.createElementNS(nx, n) : t ? ei.createElement(n, { is: t }) : ei.createElement(n);
  return n === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
}, createText: (n) => ei.createTextNode(n), createComment: (n) => ei.createComment(n), setText: (n, e) => {
  n.nodeValue = e;
}, setElementText: (n, e) => {
  n.textContent = e;
}, parentNode: (n) => n.parentNode, nextSibling: (n) => n.nextSibling, querySelector: (n) => ei.querySelector(n), setScopeId(n, e) {
  n.setAttribute(e, "");
}, insertStaticContent(n, e, t, i, s, r) {
  const o = t ? t.previousSibling : e.lastChild;
  if (s && (s === r || s.nextSibling)) for (; e.insertBefore(s.cloneNode(true), t), !(s === r || !(s = s.nextSibling)); ) ;
  else {
    vh.innerHTML = zp(i === "svg" ? `<svg>${n}</svg>` : i === "mathml" ? `<math>${n}</math>` : n);
    const a = vh.content;
    if (i === "svg" || i === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    e.insertBefore(a, t);
  }
  return [o ? o.nextSibling : e.firstChild, t ? t.previousSibling : e.lastChild];
} }, di = "transition", sr = "animation", Vs = Symbol("_vtc"), Hp = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Vp = Et({}, np, Hp), sx = (n) => (n.displayName = "Transition", n.props = Vp, n), gE = sx((n, { slots: e }) => $_($g, kp(n), e)), Hi = (n, e = []) => {
  Oe(n) ? n.forEach((t) => t(...e)) : n && n(...e);
}, yh = (n) => n ? Oe(n) ? n.some((e) => e.length > 1) : n.length > 1 : false;
function kp(n) {
  const e = {};
  for (const z in n) z in Hp || (e[z] = n[z]);
  if (n.css === false) return e;
  const { name: t = "v", type: i, duration: s, enterFromClass: r = `${t}-enter-from`, enterActiveClass: o = `${t}-enter-active`, enterToClass: a = `${t}-enter-to`, appearFromClass: l = r, appearActiveClass: c = o, appearToClass: u = a, leaveFromClass: h = `${t}-leave-from`, leaveActiveClass: f = `${t}-leave-active`, leaveToClass: d = `${t}-leave-to` } = n, m = rx(s), _ = m && m[0], g = m && m[1], { onBeforeEnter: p, onEnter: A, onEnterCancelled: b, onLeave: x, onLeaveCancelled: C, onBeforeAppear: w = p, onAppear: R = A, onAppearCancelled: D = b } = e, S = (z, X, J, te) => {
    z._enterCancelled = te, Mi(z, X ? u : a), Mi(z, X ? c : o), J && J();
  }, M = (z, X) => {
    z._isLeaving = false, Mi(z, h), Mi(z, d), Mi(z, f), X && X();
  }, I = (z) => (X, J) => {
    const te = z ? R : A, Z = () => S(X, z, J);
    Hi(te, [X, Z]), Mh(() => {
      Mi(X, z ? l : r), Nn(X, z ? u : a), yh(te) || Sh(X, i, _, Z);
    });
  };
  return Et(e, { onBeforeEnter(z) {
    Hi(p, [z]), Nn(z, r), Nn(z, o);
  }, onBeforeAppear(z) {
    Hi(w, [z]), Nn(z, l), Nn(z, c);
  }, onEnter: I(false), onAppear: I(true), onLeave(z, X) {
    z._isLeaving = true;
    const J = () => M(z, X);
    Nn(z, h), z._enterCancelled ? (Nn(z, f), ec()) : (ec(), Nn(z, f)), Mh(() => {
      z._isLeaving && (Mi(z, h), Nn(z, d), yh(x) || Sh(z, i, g, J));
    }), Hi(x, [z, J]);
  }, onEnterCancelled(z) {
    S(z, false, void 0, true), Hi(b, [z]);
  }, onAppearCancelled(z) {
    S(z, true, void 0, true), Hi(D, [z]);
  }, onLeaveCancelled(z) {
    M(z), Hi(C, [z]);
  } });
}
function rx(n) {
  if (n == null) return null;
  if (pt(n)) return [Ka(n.enter), Ka(n.leave)];
  {
    const e = Ka(n);
    return [e, e];
  }
}
function Ka(n) {
  return ug(n);
}
function Nn(n, e) {
  e.split(/\s+/).forEach((t) => t && n.classList.add(t)), (n[Vs] || (n[Vs] = /* @__PURE__ */ new Set())).add(e);
}
function Mi(n, e) {
  e.split(/\s+/).forEach((i) => i && n.classList.remove(i));
  const t = n[Vs];
  t && (t.delete(e), t.size || (n[Vs] = void 0));
}
function Mh(n) {
  requestAnimationFrame(() => {
    requestAnimationFrame(n);
  });
}
let ox = 0;
function Sh(n, e, t, i) {
  const s = n._endId = ++ox, r = () => {
    s === n._endId && i();
  };
  if (t != null) return setTimeout(r, t);
  const { type: o, timeout: a, propCount: l } = Gp(n, e);
  if (!o) return i();
  const c = o + "end";
  let u = 0;
  const h = () => {
    n.removeEventListener(c, f), r();
  }, f = (d) => {
    d.target === n && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, a + 1), n.addEventListener(c, f);
}
function Gp(n, e) {
  const t = window.getComputedStyle(n), i = (m) => (t[m] || "").split(", "), s = i(`${di}Delay`), r = i(`${di}Duration`), o = bh(s, r), a = i(`${sr}Delay`), l = i(`${sr}Duration`), c = bh(a, l);
  let u = null, h = 0, f = 0;
  e === di ? o > 0 && (u = di, h = o, f = r.length) : e === sr ? c > 0 && (u = sr, h = c, f = l.length) : (h = Math.max(o, c), u = h > 0 ? o > c ? di : sr : null, f = u ? u === di ? r.length : l.length : 0);
  const d = u === di && /\b(transform|all)(,|$)/.test(i(`${di}Property`).toString());
  return { type: u, timeout: h, propCount: f, hasTransform: d };
}
function bh(n, e) {
  for (; n.length < e.length; ) n = n.concat(n);
  return Math.max(...e.map((t, i) => Th(t) + Th(n[i])));
}
function Th(n) {
  return n === "auto" ? 0 : Number(n.slice(0, -1).replace(",", ".")) * 1e3;
}
function ec() {
  return document.body.offsetHeight;
}
function ax(n, e, t) {
  const i = n[Vs];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
const ha = Symbol("_vod"), Wp = Symbol("_vsh"), _E = { beforeMount(n, { value: e }, { transition: t }) {
  n[ha] = n.style.display === "none" ? "" : n.style.display, t && e ? t.beforeEnter(n) : rr(n, e);
}, mounted(n, { value: e }, { transition: t }) {
  t && e && t.enter(n);
}, updated(n, { value: e, oldValue: t }, { transition: i }) {
  !e != !t && (i ? e ? (i.beforeEnter(n), rr(n, true), i.enter(n)) : i.leave(n, () => {
    rr(n, false);
  }) : rr(n, e));
}, beforeUnmount(n, { value: e }) {
  rr(n, e);
} };
function rr(n, e) {
  n.style.display = e ? n[ha] : "none", n[Wp] = !e;
}
const lx = Symbol(""), cx = /(^|;)\s*display\s*:/;
function ux(n, e, t) {
  const i = n.style, s = _t(t);
  let r = false;
  if (t && !s) {
    if (e) if (_t(e)) for (const o of e.split(";")) {
      const a = o.slice(0, o.indexOf(":")).trim();
      t[a] == null && Zo(i, a, "");
    }
    else for (const o in e) t[o] == null && Zo(i, o, "");
    for (const o in t) o === "display" && (r = true), Zo(i, o, t[o]);
  } else if (s) {
    if (e !== t) {
      const o = i[lx];
      o && (t += ";" + o), i.cssText = t, r = cx.test(t);
    }
  } else e && n.removeAttribute("style");
  ha in n && (n[ha] = r ? i.display : "", n[Wp] && (i.display = "none"));
}
const Ah = /\s*!important$/;
function Zo(n, e, t) {
  if (Oe(t)) t.forEach((i) => Zo(n, e, i));
  else if (t == null && (t = ""), e.startsWith("--")) n.setProperty(e, t);
  else {
    const i = hx(n, e);
    Ah.test(t) ? n.setProperty(Ii(i), t.replace(Ah, ""), "important") : n[i] = t;
  }
}
const Eh = ["Webkit", "Moz", "ms"], Za = {};
function hx(n, e) {
  const t = Za[e];
  if (t) return t;
  let i = yn(e);
  if (i !== "filter" && i in n) return Za[e] = i;
  i = Sa(i);
  for (let s = 0; s < Eh.length; s++) {
    const r = Eh[s] + i;
    if (r in n) return Za[e] = r;
  }
  return e;
}
const wh = "http://www.w3.org/1999/xlink";
function Rh(n, e, t, i, s, r = gg(e)) {
  i && e.startsWith("xlink:") ? t == null ? n.removeAttributeNS(wh, e.slice(6, e.length)) : n.setAttributeNS(wh, e, t) : t == null || r && !Ad(t) ? n.removeAttribute(e) : n.setAttribute(e, r ? "" : ui(t) ? String(t) : t);
}
function Ch(n, e, t, i, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (n[e] = e === "innerHTML" ? zp(t) : t);
    return;
  }
  const r = n.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const a = r === "OPTION" ? n.getAttribute("value") || "" : n.value, l = t == null ? n.type === "checkbox" ? "on" : "" : String(t);
    (a !== l || !("_value" in n)) && (n.value = l), t == null && n.removeAttribute(e), n._value = t;
    return;
  }
  let o = false;
  if (t === "" || t == null) {
    const a = typeof n[e];
    a === "boolean" ? t = Ad(t) : t == null && a === "string" ? (t = "", o = true) : a === "number" && (t = 0, o = true);
  }
  try {
    n[e] = t;
  } catch {
  }
  o && n.removeAttribute(s || e);
}
function ws(n, e, t, i) {
  n.addEventListener(e, t, i);
}
function fx(n, e, t, i) {
  n.removeEventListener(e, t, i);
}
const Ph = Symbol("_vei");
function dx(n, e, t, i, s = null) {
  const r = n[Ph] || (n[Ph] = {}), o = r[e];
  if (i && o) o.value = i;
  else {
    const [a, l] = px(e);
    if (i) {
      const c = r[e] = _x(i, s);
      ws(n, a, c, l);
    } else o && (fx(n, a, o, l), r[e] = void 0);
  }
}
const Lh = /(?:Once|Passive|Capture)$/;
function px(n) {
  let e;
  if (Lh.test(n)) {
    e = {};
    let i;
    for (; i = n.match(Lh); ) n = n.slice(0, n.length - i[0].length), e[i[0].toLowerCase()] = true;
  }
  return [n[2] === ":" ? n.slice(3) : Ii(n.slice(2)), e];
}
let Ja = 0;
const mx = Promise.resolve(), gx = () => Ja || (mx.then(() => Ja = 0), Ja = Date.now());
function _x(n, e) {
  const t = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= t.attached) return;
    Pn(xx(i, t.value), e, 5, [i]);
  };
  return t.value = n, t.attached = gx(), t;
}
function xx(n, e) {
  if (Oe(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = true;
    }, e.map((i) => (s) => !s._stopped && i && i(s));
  } else return e;
}
const Ih = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, vx = (n, e, t, i, s, r) => {
  const o = s === "svg";
  e === "class" ? ax(n, i, o) : e === "style" ? ux(n, t, i) : va(e) ? Jc(e) || dx(n, e, t, i, r) : (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : yx(n, e, i, o)) ? (Ch(n, e, i), !n.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Rh(n, e, i, o, r, e !== "value")) : n._isVueCE && (/[A-Z]/.test(e) || !_t(i)) ? Ch(n, yn(e), i, r, e) : (e === "true-value" ? n._trueValue = i : e === "false-value" && (n._falseValue = i), Rh(n, e, i, o));
};
function yx(n, e, t, i) {
  if (i) return !!(e === "innerHTML" || e === "textContent" || e in n && Ih(e) && He(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA") return false;
  if (e === "width" || e === "height") {
    const s = n.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
  }
  return Ih(e) && _t(t) ? false : e in n;
}
const Xp = /* @__PURE__ */ new WeakMap(), Yp = /* @__PURE__ */ new WeakMap(), fa = Symbol("_moveCb"), Dh = Symbol("_enterCb"), Mx = (n) => (delete n.props.mode, n), Sx = Mx({ name: "TransitionGroup", props: Et({}, Vp, { tag: String, moveClass: String }), setup(n, { slots: e }) {
  const t = Op(), i = tp();
  let s, r;
  return cp(() => {
    if (!s.length) return;
    const o = n.moveClass || `${n.name || "v"}-move`;
    if (!Ex(s[0].el, t.vnode.el, o)) return;
    s.forEach(bx), s.forEach(Tx);
    const a = s.filter(Ax);
    ec(), a.forEach((l) => {
      const c = l.el, u = c.style;
      Nn(c, o), u.transform = u.webkitTransform = u.transitionDuration = "";
      const h = c[fa] = (f) => {
        f && f.target !== c || (!f || /transform$/.test(f.propertyName)) && (c.removeEventListener("transitionend", h), c[fa] = null, Mi(c, o));
      };
      c.addEventListener("transitionend", h);
    });
  }), () => {
    const o = tt(n), a = kp(o);
    let l = o.tag || $t;
    if (s = [], r) for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.el && u.el instanceof Element && (s.push(u), rs(u, Nr(u, a, i, t)), Xp.set(u, u.el.getBoundingClientRect()));
    }
    r = e.default ? hu(e.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.key != null && rs(u, Nr(u, a, i, t));
    }
    return Zt(l, null, r);
  };
} }), xE = Sx;
function bx(n) {
  const e = n.el;
  e[fa] && e[fa](), e[Dh] && e[Dh]();
}
function Tx(n) {
  Yp.set(n, n.el.getBoundingClientRect());
}
function Ax(n) {
  const e = Xp.get(n), t = Yp.get(n), i = e.left - t.left, s = e.top - t.top;
  if (i || s) {
    const r = n.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", n;
  }
}
function Ex(n, e, t) {
  const i = n.cloneNode(), s = n[Vs];
  s && s.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && i.classList.remove(l));
  }), t.split(/\s+/).forEach((a) => a && i.classList.add(a)), i.style.display = "none";
  const r = e.nodeType === 1 ? e : e.parentNode;
  r.appendChild(i);
  const { hasTransform: o } = Gp(i);
  return r.removeChild(i), o;
}
const Nh = (n) => {
  const e = n.props["onUpdate:modelValue"] || false;
  return Oe(e) ? (t) => Yo(e, t) : e;
};
function wx(n) {
  n.target.composing = true;
}
function Uh(n) {
  const e = n.target;
  e.composing && (e.composing = false, e.dispatchEvent(new Event("input")));
}
const Qa = Symbol("_assign"), vE = { created(n, { modifiers: { lazy: e, trim: t, number: i } }, s) {
  n[Qa] = Nh(s);
  const r = i || s.props && s.props.type === "number";
  ws(n, e ? "change" : "input", (o) => {
    if (o.target.composing) return;
    let a = n.value;
    t && (a = a.trim()), r && (a = zl(a)), n[Qa](a);
  }), t && ws(n, "change", () => {
    n.value = n.value.trim();
  }), e || (ws(n, "compositionstart", wx), ws(n, "compositionend", Uh), ws(n, "change", Uh));
}, mounted(n, { value: e }) {
  n.value = e ?? "";
}, beforeUpdate(n, { value: e, oldValue: t, modifiers: { lazy: i, trim: s, number: r } }, o) {
  if (n[Qa] = Nh(o), n.composing) return;
  const a = (r || n.type === "number") && !/^0\d/.test(n.value) ? zl(n.value) : n.value, l = e ?? "";
  a !== l && (document.activeElement === n && n.type !== "range" && (i && e === t || s && n.value.trim() === l) || (n.value = l));
} }, Rx = ["ctrl", "shift", "alt", "meta"], Cx = { stop: (n) => n.stopPropagation(), prevent: (n) => n.preventDefault(), self: (n) => n.target !== n.currentTarget, ctrl: (n) => !n.ctrlKey, shift: (n) => !n.shiftKey, alt: (n) => !n.altKey, meta: (n) => !n.metaKey, left: (n) => "button" in n && n.button !== 0, middle: (n) => "button" in n && n.button !== 1, right: (n) => "button" in n && n.button !== 2, exact: (n, e) => Rx.some((t) => n[`${t}Key`] && !e.includes(t)) }, yE = (n, e) => {
  const t = n._withMods || (n._withMods = {}), i = e.join(".");
  return t[i] || (t[i] = (s, ...r) => {
    for (let o = 0; o < e.length; o++) {
      const a = Cx[e[o]];
      if (a && a(s, e)) return;
    }
    return n(s, ...r);
  });
}, Px = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" }, ME = (n, e) => {
  const t = n._withKeys || (n._withKeys = {}), i = e.join(".");
  return t[i] || (t[i] = (s) => {
    if (!("key" in s)) return;
    const r = Ii(s.key);
    if (e.some((o) => o === r || Px[o] === r)) return n(s);
  });
}, Lx = Et({ patchProp: vx }, ix);
let Oh;
function Ix() {
  return Oh || (Oh = T_(Lx));
}
const SE = (...n) => {
  const e = Ix().createApp(...n), { mount: t } = e;
  return e.mount = (i) => {
    const s = Nx(i);
    if (!s) return;
    const r = e._component;
    !He(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = t(s, false, Dx(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
};
function Dx(n) {
  if (n instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement) return "mathml";
}
function Nx(n) {
  return _t(n) ? document.querySelector(n) : n;
}
const bE = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, s] of e) t[i] = s;
  return t;
};
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const mu = "175", TE = { ROTATE: 0, DOLLY: 1, PAN: 2 }, AE = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ux = 0, Fh = 1, Ox = 2, qp = 1, Fx = 2, $n = 3, li = 0, nn = 1, Bn = 2, oi = 0, Fs = 1, Bh = 2, zh = 3, Hh = 4, Bx = 5, es = 100, zx = 101, Hx = 102, Vx = 103, kx = 104, Gx = 200, Wx = 201, Xx = 202, Yx = 203, tc = 204, nc = 205, qx = 206, jx = 207, Kx = 208, Zx = 209, Jx = 210, Qx = 211, $x = 212, ev = 213, tv = 214, ic = 0, sc = 1, rc = 2, ks = 3, oc = 4, ac = 5, lc = 6, cc = 7, gu = 0, nv = 1, iv = 2, Ci = 0, jp = 1, Kp = 2, Zp = 3, Jp = 4, Qp = 5, $p = 6, em = 7, Vh = "attached", sv = "detached", tm = 300, Gs = 301, Ws = 302, uc = 303, hc = 304, La = 306, Xs = 1e3, Ei = 1001, da = 1002, Nt = 1003, nm = 1004, gr = 1005, tn = 1006, Jo = 1007, si = 1008, ci = 1009, im = 1010, sm = 1011, Br = 1012, _u = 1013, os = 1014, Rn = 1015, Li = 1016, xu = 1017, vu = 1018, zr = 1020, rm = 35902, om = 1021, am = 1022, mn = 1023, lm = 1024, cm = 1025, Hr = 1026, Vr = 1027, yu = 1028, Mu = 1029, um = 1030, Su = 1031, bu = 1033, Qo = 33776, $o = 33777, ea = 33778, ta = 33779, fc = 35840, dc = 35841, pc = 35842, mc = 35843, gc = 36196, _c = 37492, xc = 37496, vc = 37808, yc = 37809, Mc = 37810, Sc = 37811, bc = 37812, Tc = 37813, Ac = 37814, Ec = 37815, wc = 37816, Rc = 37817, Cc = 37818, Pc = 37819, Lc = 37820, Ic = 37821, na = 36492, Dc = 36494, Nc = 36495, hm = 36283, Uc = 36284, Oc = 36285, Fc = 36286, rv = 2200, ov = 2201, av = 2202, kr = 2300, Gr = 2301, $a = 2302, Rs = 2400, Cs = 2401, pa = 2402, Tu = 2500, lv = 2501, cv = 0, fm = 1, Bc = 2, uv = 3200, hv = 3201, Ia = 0, fv = 1, Ai = "", It = "srgb", Jt = "srgb-linear", ma = "linear", lt = "srgb", hs = 7680, kh = 519, dv = 512, pv = 513, mv = 514, dm = 515, gv = 516, _v = 517, xv = 518, vv = 519, zc = 35044, Gh = "300 es", zn = 2e3, ga = 2001;
class Ui {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? false : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const s = i[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const s = i.slice(0);
      for (let r = 0, o = s.length; r < o; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const Ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Wh = 1234567;
const Ar = Math.PI / 180, Ys = 180 / Math.PI;
function _n() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Ft[n & 255] + Ft[n >> 8 & 255] + Ft[n >> 16 & 255] + Ft[n >> 24 & 255] + "-" + Ft[e & 255] + Ft[e >> 8 & 255] + "-" + Ft[e >> 16 & 15 | 64] + Ft[e >> 24 & 255] + "-" + Ft[t & 63 | 128] + Ft[t >> 8 & 255] + "-" + Ft[t >> 16 & 255] + Ft[t >> 24 & 255] + Ft[i & 255] + Ft[i >> 8 & 255] + Ft[i >> 16 & 255] + Ft[i >> 24 & 255]).toLowerCase();
}
function Ge(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Au(n, e) {
  return (n % e + e) % e;
}
function yv(n, e, t, i, s) {
  return i + (n - e) * (s - i) / (t - e);
}
function Mv(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function Er(n, e, t) {
  return (1 - t) * n + t * e;
}
function Sv(n, e, t, i) {
  return Er(n, e, 1 - Math.exp(-t * i));
}
function bv(n, e = 1) {
  return e - Math.abs(Au(n, e * 2) - e);
}
function Tv(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function Av(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function Ev(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function wv(n, e) {
  return n + Math.random() * (e - n);
}
function Rv(n) {
  return n * (0.5 - Math.random());
}
function Cv(n) {
  n !== void 0 && (Wh = n);
  let e = Wh += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Pv(n) {
  return n * Ar;
}
function Lv(n) {
  return n * Ys;
}
function Iv(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Dv(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Nv(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Uv(n, e, t, i, s) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + i) / 2), u = o((e + i) / 2), h = r((e - i) / 2), f = o((e - i) / 2), d = r((i - e) / 2), m = o((i - e) / 2);
  switch (s) {
    case "XYX":
      n.set(a * u, l * h, l * f, a * c);
      break;
    case "YZY":
      n.set(l * f, a * u, l * h, a * c);
      break;
    case "ZXZ":
      n.set(l * h, l * f, a * u, a * c);
      break;
    case "XZX":
      n.set(a * u, l * m, l * d, a * c);
      break;
    case "YXY":
      n.set(l * d, a * u, l * m, a * c);
      break;
    case "ZYZ":
      n.set(l * m, l * d, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function En(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ct(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ov = { DEG2RAD: Ar, RAD2DEG: Ys, generateUUID: _n, clamp: Ge, euclideanModulo: Au, mapLinear: yv, inverseLerp: Mv, lerp: Er, damp: Sv, pingpong: bv, smoothstep: Tv, smootherstep: Av, randInt: Ev, randFloat: wv, randFloatSpread: Rv, seededRandom: Cv, degToRad: Pv, radToDeg: Lv, isPowerOfTwo: Iv, ceilPowerOfTwo: Dv, floorPowerOfTwo: Nv, setQuaternionFromProperEuler: Uv, normalize: ct, denormalize: En };
class he {
  constructor(e = 0, t = 0) {
    he.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6], this.y = s[1] * t + s[4] * i + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ge(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Ge(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * i - o * s + e.x, this.y = r * s + o * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Xe {
  constructor(e, t, i, s, r, o, a, l, c) {
    Xe.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, o, a, l, c);
  }
  set(e, t, i, s, r, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = i, u[7] = o, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], u = i[4], h = i[7], f = i[2], d = i[5], m = i[8], _ = s[0], g = s[3], p = s[6], A = s[1], b = s[4], x = s[7], C = s[2], w = s[5], R = s[8];
    return r[0] = o * _ + a * A + l * C, r[3] = o * g + a * b + l * w, r[6] = o * p + a * x + l * R, r[1] = c * _ + u * A + h * C, r[4] = c * g + u * b + h * w, r[7] = c * p + u * x + h * R, r[2] = f * _ + d * A + m * C, r[5] = f * g + d * b + m * w, r[8] = f * p + d * x + m * R, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - i * r * u + i * a * l + s * r * c - s * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, f = a * l - u * r, d = c * r - o * l, m = t * h + i * f + s * d;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return e[0] = h * _, e[1] = (s * c - u * i) * _, e[2] = (a * i - s * o) * _, e[3] = f * _, e[4] = (u * t - s * l) * _, e[5] = (s * r - a * t) * _, e[6] = d * _, e[7] = (i * l - c * t) * _, e[8] = (o * t - i * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(i * l, i * c, -i * (l * o + c * a) + o + e, -s * c, s * l, -s * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(el.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(el.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(el.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const el = new Xe();
function pm(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return true;
  return false;
}
function Wr(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Fv() {
  const n = Wr("canvas");
  return n.style.display = "block", n;
}
const Xh = {};
function ia(n) {
  n in Xh || (Xh[n] = true, console.warn(n));
}
function Bv(n, e, t) {
  return new Promise(function(i, s) {
    function r() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          s();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          i();
      }
    }
    setTimeout(r, t);
  });
}
function zv(n) {
  const e = n.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Hv(n) {
  const e = n.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Yh = new Xe().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), qh = new Xe().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Vv() {
  const n = { enabled: true, workingColorSpace: Jt, spaces: {}, convert: function(s, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === lt && (s.r = ai(s.r), s.g = ai(s.g), s.b = ai(s.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === lt && (s.r = Bs(s.r), s.g = Bs(s.g), s.b = Bs(s.b))), s;
  }, fromWorkingColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === Ai ? ma : this.spaces[s].transfer;
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, o) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({ [Jt]: { primaries: e, whitePoint: i, transfer: ma, toXYZ: Yh, fromXYZ: qh, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: It }, outputColorSpaceConfig: { drawingBufferColorSpace: It } }, [It]: { primaries: e, whitePoint: i, transfer: lt, toXYZ: Yh, fromXYZ: qh, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: It } } }), n;
}
const Ke = Vv();
function ai(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Bs(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let fs;
class kv {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      fs === void 0 && (fs = Wr("canvas")), fs.width = e.width, fs.height = e.height;
      const s = fs.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = fs;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Wr("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let o = 0; o < r.length; o++) r[o] = ai(r[o] / 255) * 255;
      return i.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(ai(t[i] / 255) * 255) : t[i] = ai(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Gv = 0;
class Eu {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Gv++ }), this.uuid = _n(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let o = 0, a = s.length; o < a; o++) s[o].isDataTexture ? r.push(tl(s[o].image)) : r.push(tl(s[o]));
      } else r = tl(s);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function tl(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? kv.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Wv = 0;
class At extends Ui {
  constructor(e = At.DEFAULT_IMAGE, t = At.DEFAULT_MAPPING, i = Ei, s = Ei, r = tn, o = si, a = mn, l = ci, c = At.DEFAULT_ANISOTROPY, u = Ai) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Wv++ }), this.uuid = _n(), this.name = "", this.source = new Eu(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new he(0, 0), this.repeat = new he(1, 1), this.center = new he(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Xe(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== tm) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Xs:
        e.x = e.x - Math.floor(e.x);
        break;
      case Ei:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case da:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Xs:
        e.y = e.y - Math.floor(e.y);
        break;
      case Ei:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case da:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = tm;
At.DEFAULT_ANISOTROPY = 1;
class nt {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    nt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = i, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, s) {
    return this.x = e, this.y = t, this.z = i, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * i + o[8] * s + o[12] * r, this.y = o[1] * t + o[5] * i + o[9] * s + o[13] * r, this.z = o[2] * t + o[6] * i + o[10] * s + o[14] * r, this.w = o[3] * t + o[7] * i + o[11] * s + o[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, s, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], d = l[5], m = l[9], _ = l[2], g = l[6], p = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(c + d + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, x = (d + 1) / 2, C = (p + 1) / 2, w = (u + f) / 4, R = (h + _) / 4, D = (m + g) / 4;
      return b > x && b > C ? b < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(b), s = w / i, r = R / i) : x > C ? x < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(x), i = w / s, r = D / s) : C < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(C), i = R / r, s = D / r), this.set(i, s, r, t), this;
    }
    let A = Math.sqrt((g - m) * (g - m) + (h - _) * (h - _) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (g - m) / A, this.y = (h - _) / A, this.z = (f - u) / A, this.w = Math.acos((c + d + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this.z = Ge(this.z, e.z, t.z), this.w = Ge(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this.z = Ge(this.z, e, t), this.w = Ge(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ge(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Xv extends Ui {
  constructor(e = 1, t = 1, i = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new nt(0, 0, e, t), this.scissorTest = false, this.viewport = new nt(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: tn, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, i);
    const r = new At(s, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    r.flipY = false, r.generateMipmaps = i.generateMipmaps, r.internalFormat = i.internalFormat, this.textures = [];
    const o = i.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = i.depthTexture, this.samples = i.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = i;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Eu(s);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vn extends Xv {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class mm extends At {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Yv extends At {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class xn {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = s;
  }
  static slerpFlat(e, t, i, s, r, o, a) {
    let l = i[s + 0], c = i[s + 1], u = i[s + 2], h = i[s + 3];
    const f = r[o + 0], d = r[o + 1], m = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = m, e[t + 3] = _;
      return;
    }
    if (h !== _ || l !== f || c !== d || u !== m) {
      let g = 1 - a;
      const p = l * f + c * d + u * m + h * _, A = p >= 0 ? 1 : -1, b = 1 - p * p;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b), w = Math.atan2(C, p * A);
        g = Math.sin(g * w) / C, a = Math.sin(a * w) / C;
      }
      const x = a * A;
      if (l = l * g + f * x, c = c * g + d * x, u = u * g + m * x, h = h * g + _ * x, g === 1 - a) {
        const C = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= C, c *= C, u *= C, h *= C;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, i, s, r, o) {
    const a = i[s], l = i[s + 1], c = i[s + 2], u = i[s + 3], h = r[o], f = r[o + 1], d = r[o + 2], m = r[o + 3];
    return e[t] = a * m + u * h + l * d - c * f, e[t + 1] = l * m + u * f + c * h - a * d, e[t + 2] = c * m + u * d + a * f - l * h, e[t + 3] = u * m - a * h - l * f - c * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, s) {
    return this._x = e, this._y = t, this._z = i, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const i = e._x, s = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(i / 2), u = a(s / 2), h = a(r / 2), f = l(i / 2), d = l(s / 2), m = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * h + c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "YXZ":
        this._x = f * u * h + c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h + f * d * m;
        break;
      case "ZXY":
        this._x = f * u * h - c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "ZYX":
        this._x = f * u * h - c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h + f * d * m;
        break;
      case "YZX":
        this._x = f * u * h + c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "XZY":
        this._x = f * u * h - c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h + f * d * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, s = Math.sin(i);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], s = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = i + a + h;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (u - l) * d, this._y = (r - c) * d, this._z = (o - s) * d;
    } else if (i > a && i > h) {
      const d = 2 * Math.sqrt(1 + i - a - h);
      this._w = (u - l) / d, this._x = 0.25 * d, this._y = (s + o) / d, this._z = (r + c) / d;
    } else if (a > h) {
      const d = 2 * Math.sqrt(1 + a - i - h);
      this._w = (r - c) / d, this._x = (s + o) / d, this._y = 0.25 * d, this._z = (l + u) / d;
    } else {
      const d = 2 * Math.sqrt(1 + h - i - a);
      this._w = (o - s) / d, this._x = (r + c) / d, this._y = (l + u) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ge(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const s = Math.min(1, t / i);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, s = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = i * u + o * a + s * c - r * l, this._y = s * u + o * l + r * a - i * c, this._z = r * u + o * c + i * l - s * a, this._w = o * u - i * a - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * e._w + i * e._x + s * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = i, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * o + t * this._w, this._x = d * i + t * this._x, this._y = d * s + t * this._y, this._z = d * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = o * h + this._w * f, this._x = i * h + this._x * f, this._y = s * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), r = Math.sqrt(i);
    return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, i = 0) {
    N.prototype.isVector3 = true, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(jh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(jh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6] * s, this.y = r[1] * t + r[4] * i + r[7] * s, this.z = r[2] * t + r[5] * i + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * i + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * i + r[8] * s + r[12]) * o, this.y = (r[1] * t + r[5] * i + r[9] * s + r[13]) * o, this.z = (r[2] * t + r[6] * i + r[10] * s + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, s = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * s - a * i), u = 2 * (a * t - r * s), h = 2 * (r * i - o * t);
    return this.x = t + l * c + o * h - a * u, this.y = i + l * u + a * c - r * h, this.z = s + l * h + r * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * i + r[8] * s, this.y = r[1] * t + r[5] * i + r[9] * s, this.z = r[2] * t + r[6] * i + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this.z = Ge(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this.z = Ge(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ge(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, s = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = s * l - r * a, this.y = r * o - i * l, this.z = i * a - s * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return nl.copy(this).projectOnVector(e), this.sub(nl);
  }
  reflect(e) {
    return this.sub(nl.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Ge(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, s = this.z - e.z;
    return t * t + i * i + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(i), this.y = Math.cos(t) * e, this.z = s * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const nl = new N(), jh = new xn();
class fi {
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(bn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(bn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = bn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const i = e.geometry;
    if (i !== void 0) {
      const r = i.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, bn) : bn.fromBufferAttribute(r, o), bn.applyMatrix4(e.matrixWorld), this.expandByPoint(bn);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), lo.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), lo.copy(i.boundingBox)), lo.applyMatrix4(e.matrixWorld), this.union(lo);
    }
    const s = e.children;
    for (let r = 0, o = s.length; r < o; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, bn), bn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(or), co.subVectors(this.max, or), ds.subVectors(e.a, or), ps.subVectors(e.b, or), ms.subVectors(e.c, or), pi.subVectors(ps, ds), mi.subVectors(ms, ps), Vi.subVectors(ds, ms);
    let t = [0, -pi.z, pi.y, 0, -mi.z, mi.y, 0, -Vi.z, Vi.y, pi.z, 0, -pi.x, mi.z, 0, -mi.x, Vi.z, 0, -Vi.x, -pi.y, pi.x, 0, -mi.y, mi.x, 0, -Vi.y, Vi.x, 0];
    return !il(t, ds, ps, ms, co) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !il(t, ds, ps, ms, co)) ? false : (uo.crossVectors(pi, mi), t = [uo.x, uo.y, uo.z], il(t, ds, ps, ms, co));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, bn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(bn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(qn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const qn = [new N(), new N(), new N(), new N(), new N(), new N(), new N(), new N()], bn = new N(), lo = new fi(), ds = new N(), ps = new N(), ms = new N(), pi = new N(), mi = new N(), Vi = new N(), or = new N(), co = new N(), uo = new N(), ki = new N();
function il(n, e, t, i, s) {
  for (let r = 0, o = n.length - 3; r <= o; r += 3) {
    ki.fromArray(n, r);
    const a = s.x * Math.abs(ki.x) + s.y * Math.abs(ki.y) + s.z * Math.abs(ki.z), l = e.dot(ki), c = t.dot(ki), u = i.dot(ki);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return false;
  }
  return true;
}
const qv = new fi(), ar = new N(), sl = new N();
class kn {
  constructor(e = new N(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : qv.setFromPoints(e).getCenter(i);
    let s = 0;
    for (let r = 0, o = e.length; r < o; r++) s = Math.max(s, i.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    ar.subVectors(e, this.center);
    const t = ar.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(ar, s / i), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (sl.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ar.copy(e.center).add(sl)), this.expandByPoint(ar.copy(e.center).sub(sl))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const jn = new N(), rl = new N(), ho = new N(), gi = new N(), ol = new N(), fo = new N(), al = new N();
class Jr {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, jn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = jn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (jn.copy(this.origin).addScaledVector(this.direction, t), jn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, s) {
    rl.copy(e).add(t).multiplyScalar(0.5), ho.copy(t).sub(e).normalize(), gi.copy(this.origin).sub(rl);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(ho), a = gi.dot(this.direction), l = -gi.dot(ho), c = gi.lengthSq(), u = Math.abs(1 - o * o);
    let h, f, d, m;
    if (u > 0) if (h = o * l - a, f = o * a - l, m = r * u, h >= 0) if (f >= -m) if (f <= m) {
      const _ = 1 / u;
      h *= _, f *= _, d = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * l) + c;
    } else f = r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    else f = -r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    else f <= -m ? (h = Math.max(0, -(-o * r + a)), f = h > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c) : f <= m ? (h = 0, f = Math.min(Math.max(-r, -l), r), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(o * r + a)), f = h > 0 ? r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c);
    else f = o > 0 ? -r : r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, h), s && s.copy(rl).addScaledVector(ho, f), d;
  }
  intersectSphere(e, t) {
    jn.subVectors(e.center, this.origin);
    const i = jn.dot(this.direction), s = jn.dot(jn) - i * i, r = e.radius * e.radius;
    if (s > r) return null;
    const o = Math.sqrt(r - s), a = i - o, l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, s, r, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (i = (e.min.x - f.x) * c, s = (e.max.x - f.x) * c) : (i = (e.max.x - f.x) * c, s = (e.min.x - f.x) * c), u >= 0 ? (r = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), i > o || r > s || ((r > i || isNaN(i)) && (i = r), (o < s || isNaN(s)) && (s = o), h >= 0 ? (a = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), i > l || a > s) || ((a > i || i !== i) && (i = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(i >= 0 ? i : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, jn) !== null;
  }
  intersectTriangle(e, t, i, s, r) {
    ol.subVectors(t, e), fo.subVectors(i, e), al.crossVectors(ol, fo);
    let o = this.direction.dot(al), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    gi.subVectors(this.origin, e);
    const l = a * this.direction.dot(fo.crossVectors(gi, fo));
    if (l < 0) return null;
    const c = a * this.direction.dot(ol.cross(gi));
    if (c < 0 || l + c > o) return null;
    const u = -a * gi.dot(al);
    return u < 0 ? null : this.at(u / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ke {
  constructor(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g) {
    ke.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g);
  }
  set(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = i, p[12] = s, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = f, p[3] = d, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, s = 1 / gs.setFromMatrixColumn(e, 0).length(), r = 1 / gs.setFromMatrixColumn(e, 1).length(), o = 1 / gs.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * o, t[9] = i[9] * o, t[10] = i[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * u, d = o * h, m = a * u, _ = a * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = d + m * c, t[5] = f - _ * c, t[9] = -a * l, t[2] = _ - f * c, t[6] = m + d * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * u, d = l * h, m = c * u, _ = c * h;
      t[0] = f + _ * a, t[4] = m * a - d, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = d * a - m, t[6] = _ + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * u, d = l * h, m = c * u, _ = c * h;
      t[0] = f - _ * a, t[4] = -o * h, t[8] = m + d * a, t[1] = d + m * a, t[5] = o * u, t[9] = _ - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * u, d = o * h, m = a * u, _ = a * h;
      t[0] = l * u, t[4] = m * c - d, t[8] = f * c + _, t[1] = l * h, t[5] = _ * c + f, t[9] = d * c - m, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, d = o * c, m = a * l, _ = a * c;
      t[0] = l * u, t[4] = _ - f * h, t[8] = m * h + d, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = d * h + m, t[10] = f - _ * h;
    } else if (e.order === "XZY") {
      const f = o * l, d = o * c, m = a * l, _ = a * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + _, t[5] = o * u, t[9] = d * h - m, t[2] = m * h - d, t[6] = a * u, t[10] = _ * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(jv, e, Kv);
  }
  lookAt(e, t, i) {
    const s = this.elements;
    return on.subVectors(e, t), on.lengthSq() === 0 && (on.z = 1), on.normalize(), _i.crossVectors(i, on), _i.lengthSq() === 0 && (Math.abs(i.z) === 1 ? on.x += 1e-4 : on.z += 1e-4, on.normalize(), _i.crossVectors(i, on)), _i.normalize(), po.crossVectors(on, _i), s[0] = _i.x, s[4] = po.x, s[8] = on.x, s[1] = _i.y, s[5] = po.y, s[9] = on.y, s[2] = _i.z, s[6] = po.z, s[10] = on.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], u = i[1], h = i[5], f = i[9], d = i[13], m = i[2], _ = i[6], g = i[10], p = i[14], A = i[3], b = i[7], x = i[11], C = i[15], w = s[0], R = s[4], D = s[8], S = s[12], M = s[1], I = s[5], z = s[9], X = s[13], J = s[2], te = s[6], Z = s[10], ne = s[14], K = s[3], fe = s[7], xe = s[11], Se = s[15];
    return r[0] = o * w + a * M + l * J + c * K, r[4] = o * R + a * I + l * te + c * fe, r[8] = o * D + a * z + l * Z + c * xe, r[12] = o * S + a * X + l * ne + c * Se, r[1] = u * w + h * M + f * J + d * K, r[5] = u * R + h * I + f * te + d * fe, r[9] = u * D + h * z + f * Z + d * xe, r[13] = u * S + h * X + f * ne + d * Se, r[2] = m * w + _ * M + g * J + p * K, r[6] = m * R + _ * I + g * te + p * fe, r[10] = m * D + _ * z + g * Z + p * xe, r[14] = m * S + _ * X + g * ne + p * Se, r[3] = A * w + b * M + x * J + C * K, r[7] = A * R + b * I + x * te + C * fe, r[11] = A * D + b * z + x * Z + C * xe, r[15] = A * S + b * X + x * ne + C * Se, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], d = e[14], m = e[3], _ = e[7], g = e[11], p = e[15];
    return m * (+r * l * h - s * c * h - r * a * f + i * c * f + s * a * d - i * l * d) + _ * (+t * l * d - t * c * f + r * o * f - s * o * d + s * c * u - r * l * u) + g * (+t * c * h - t * a * d - r * o * h + i * o * d + r * a * u - i * c * u) + p * (-s * a * u - t * l * h + t * a * f + s * o * h - i * o * f + i * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], d = e[11], m = e[12], _ = e[13], g = e[14], p = e[15], A = h * g * c - _ * f * c + _ * l * d - a * g * d - h * l * p + a * f * p, b = m * f * c - u * g * c - m * l * d + o * g * d + u * l * p - o * f * p, x = u * _ * c - m * h * c + m * a * d - o * _ * d - u * a * p + o * h * p, C = m * h * l - u * _ * l - m * a * f + o * _ * f + u * a * g - o * h * g, w = t * A + i * b + s * x + r * C;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return e[0] = A * R, e[1] = (_ * f * r - h * g * r - _ * s * d + i * g * d + h * s * p - i * f * p) * R, e[2] = (a * g * r - _ * l * r + _ * s * c - i * g * c - a * s * p + i * l * p) * R, e[3] = (h * l * r - a * f * r - h * s * c + i * f * c + a * s * d - i * l * d) * R, e[4] = b * R, e[5] = (u * g * r - m * f * r + m * s * d - t * g * d - u * s * p + t * f * p) * R, e[6] = (m * l * r - o * g * r - m * s * c + t * g * c + o * s * p - t * l * p) * R, e[7] = (o * f * r - u * l * r + u * s * c - t * f * c - o * s * d + t * l * d) * R, e[8] = x * R, e[9] = (m * h * r - u * _ * r - m * i * d + t * _ * d + u * i * p - t * h * p) * R, e[10] = (o * _ * r - m * a * r + m * i * c - t * _ * c - o * i * p + t * a * p) * R, e[11] = (u * a * r - o * h * r - u * i * c + t * h * c + o * i * d - t * a * d) * R, e[12] = C * R, e[13] = (u * _ * s - m * h * s + m * i * f - t * _ * f - u * i * g + t * h * g) * R, e[14] = (m * a * s - o * _ * s - m * i * l + t * _ * l + o * i * g - t * a * g) * R, e[15] = (o * h * s - u * a * s + u * i * l - t * h * l - o * i * f + t * a * f) * R, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z;
    return t[0] *= i, t[4] *= s, t[8] *= r, t[1] *= i, t[5] *= s, t[9] *= r, t[2] *= i, t[6] *= s, t[10] *= r, t[3] *= i, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, s));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = 1 - i, o = e.x, a = e.y, l = e.z, c = r * o, u = r * a;
    return this.set(c * o + i, c * a - s * l, c * l + s * a, 0, c * a + s * l, u * a + i, u * l - s * o, 0, c * l - s * a, u * l + s * o, r * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, s, r, o) {
    return this.set(1, i, r, 0, e, 1, o, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const s = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, h = a + a, f = r * c, d = r * u, m = r * h, _ = o * u, g = o * h, p = a * h, A = l * c, b = l * u, x = l * h, C = i.x, w = i.y, R = i.z;
    return s[0] = (1 - (_ + p)) * C, s[1] = (d + x) * C, s[2] = (m - b) * C, s[3] = 0, s[4] = (d - x) * w, s[5] = (1 - (f + p)) * w, s[6] = (g + A) * w, s[7] = 0, s[8] = (m + b) * R, s[9] = (g - A) * R, s[10] = (1 - (f + _)) * R, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, i) {
    const s = this.elements;
    let r = gs.set(s[0], s[1], s[2]).length();
    const o = gs.set(s[4], s[5], s[6]).length(), a = gs.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], Tn.copy(this);
    const c = 1 / r, u = 1 / o, h = 1 / a;
    return Tn.elements[0] *= c, Tn.elements[1] *= c, Tn.elements[2] *= c, Tn.elements[4] *= u, Tn.elements[5] *= u, Tn.elements[6] *= u, Tn.elements[8] *= h, Tn.elements[9] *= h, Tn.elements[10] *= h, t.setFromRotationMatrix(Tn), i.x = r, i.y = o, i.z = a, this;
  }
  makePerspective(e, t, i, s, r, o, a = zn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (i - s), h = (t + e) / (t - e), f = (i + s) / (i - s);
    let d, m;
    if (a === zn) d = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    else if (a === ga) d = -o / (o - r), m = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, i, s, r, o, a = zn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (i - s), h = 1 / (o - r), f = (t + e) * c, d = (i + s) * u;
    let m, _;
    if (a === zn) m = (o + r) * h, _ = -2 * h;
    else if (a === ga) m = r * h, _ = -1 * h;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const gs = new N(), Tn = new ke(), jv = new N(0, 0, 0), Kv = new N(1, 1, 1), _i = new N(), po = new N(), on = new N(), Kh = new ke(), Zh = new xn();
class Ln {
  constructor(e = 0, t = 0, i = 0, s = Ln.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = i, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, s = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = true) {
    const s = e.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], u = s[9], h = s[2], f = s[6], d = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ge(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ge(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ge(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ge(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ge(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
        break;
      case "XZY":
        this._z = Math.asin(-Ge(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return Kh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Kh, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Zh.setFromEuler(this), this.setFromQuaternion(Zh, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ln.DEFAULT_ORDER = "XYZ";
class wu {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Zv = 0;
const Jh = new N(), _s = new xn(), Kn = new ke(), mo = new N(), lr = new N(), Jv = new N(), Qv = new xn(), Qh = new N(1, 0, 0), $h = new N(0, 1, 0), ef = new N(0, 0, 1), tf = { type: "added" }, $v = { type: "removed" }, xs = { type: "childadded", child: null }, ll = { type: "childremoved", child: null };
class ut extends Ui {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Zv++ }), this.uuid = _n(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ut.DEFAULT_UP.clone();
    const e = new N(), t = new Ln(), i = new xn(), s = new N(1, 1, 1);
    function r() {
      i.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(r), i._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new ke() }, normalMatrix: { value: new Xe() } }), this.matrix = new ke(), this.matrixWorld = new ke(), this.matrixAutoUpdate = ut.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new wu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return _s.setFromAxisAngle(e, t), this.quaternion.multiply(_s), this;
  }
  rotateOnWorldAxis(e, t) {
    return _s.setFromAxisAngle(e, t), this.quaternion.premultiply(_s), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Qh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis($h, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ef, e);
  }
  translateOnAxis(e, t) {
    return Jh.copy(e).applyQuaternion(this.quaternion), this.position.add(Jh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Qh, e);
  }
  translateY(e) {
    return this.translateOnAxis($h, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ef, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Kn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? mo.copy(e) : mo.set(e, t, i);
    const s = this.parent;
    this.updateWorldMatrix(true, false), lr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Kn.lookAt(lr, mo, this.up) : Kn.lookAt(mo, lr, this.up), this.quaternion.setFromRotationMatrix(Kn), s && (Kn.extractRotation(s.matrixWorld), _s.setFromRotationMatrix(Kn), this.quaternion.premultiply(_s.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(tf), xs.child = e, this.dispatchEvent(xs), xs.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent($v), ll.child = e, this.dispatchEvent(ll), ll.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Kn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Kn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Kn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(tf), xs.child = e, this.dispatchEvent(xs), xs.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const s = this.children;
    for (let r = 0, o = s.length; r < o; r++) s[r].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(lr, e, Jv), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(lr, Qv, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = { center: s.boundingSphere.center.toArray(), radius: s.boundingSphere.radius }), this.boundingBox !== null && (s.boundingBox = { min: s.boundingBox.min.toArray(), max: s.boundingBox.max.toArray() }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const h = l[c];
          r(e.shapes, h);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
      s.material = a;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++) s.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), f = o(e.skeletons), d = o(e.animations), m = o(e.nodes);
      a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u), h.length > 0 && (i.shapes = h), f.length > 0 && (i.skeletons = f), d.length > 0 && (i.animations = d), m.length > 0 && (i.nodes = m);
    }
    return i.object = s, i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      this.add(s.clone());
    }
    return this;
  }
}
ut.DEFAULT_UP = new N(0, 1, 0);
ut.DEFAULT_MATRIX_AUTO_UPDATE = true;
ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const An = new N(), Zn = new N(), cl = new N(), Jn = new N(), vs = new N(), ys = new N(), nf = new N(), ul = new N(), hl = new N(), fl = new N(), dl = new nt(), pl = new nt(), ml = new nt();
class wn {
  constructor(e = new N(), t = new N(), i = new N()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, s) {
    s.subVectors(i, t), An.subVectors(e, t), s.cross(An);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, s, r) {
    An.subVectors(s, t), Zn.subVectors(i, t), cl.subVectors(e, t);
    const o = An.dot(An), a = An.dot(Zn), l = An.dot(cl), c = Zn.dot(Zn), u = Zn.dot(cl), h = o * c - a * a;
    if (h === 0) return r.set(0, 0, 0), null;
    const f = 1 / h, d = (c * l - a * u) * f, m = (o * u - a * l) * f;
    return r.set(1 - d - m, m, d);
  }
  static containsPoint(e, t, i, s) {
    return this.getBarycoord(e, t, i, s, Jn) === null ? false : Jn.x >= 0 && Jn.y >= 0 && Jn.x + Jn.y <= 1;
  }
  static getInterpolation(e, t, i, s, r, o, a, l) {
    return this.getBarycoord(e, t, i, s, Jn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Jn.x), l.addScaledVector(o, Jn.y), l.addScaledVector(a, Jn.z), l);
  }
  static getInterpolatedAttribute(e, t, i, s, r, o) {
    return dl.setScalar(0), pl.setScalar(0), ml.setScalar(0), dl.fromBufferAttribute(e, t), pl.fromBufferAttribute(e, i), ml.fromBufferAttribute(e, s), o.setScalar(0), o.addScaledVector(dl, r.x), o.addScaledVector(pl, r.y), o.addScaledVector(ml, r.z), o;
  }
  static isFrontFacing(e, t, i, s) {
    return An.subVectors(i, t), Zn.subVectors(e, t), An.cross(Zn).dot(s) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, s) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, i, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return An.subVectors(this.c, this.b), Zn.subVectors(this.a, this.b), An.cross(Zn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return wn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return wn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, s, r) {
    return wn.getInterpolation(e, this.a, this.b, this.c, t, i, s, r);
  }
  containsPoint(e) {
    return wn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return wn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, s = this.b, r = this.c;
    let o, a;
    vs.subVectors(s, i), ys.subVectors(r, i), ul.subVectors(e, i);
    const l = vs.dot(ul), c = ys.dot(ul);
    if (l <= 0 && c <= 0) return t.copy(i);
    hl.subVectors(e, s);
    const u = vs.dot(hl), h = ys.dot(hl);
    if (u >= 0 && h <= u) return t.copy(s);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(i).addScaledVector(vs, o);
    fl.subVectors(e, r);
    const d = vs.dot(fl), m = ys.dot(fl);
    if (m >= 0 && d <= m) return t.copy(r);
    const _ = d * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(i).addScaledVector(ys, a);
    const g = u * m - d * h;
    if (g <= 0 && h - u >= 0 && d - m >= 0) return nf.subVectors(r, s), a = (h - u) / (h - u + (d - m)), t.copy(s).addScaledVector(nf, a);
    const p = 1 / (g + _ + f);
    return o = _ * p, a = f * p, t.copy(i).addScaledVector(vs, o).addScaledVector(ys, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const gm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, xi = { h: 0, s: 0, l: 0 }, go = { h: 0, s: 0, l: 0 };
function gl(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class we {
  constructor(e, t, i) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = It) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ke.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, i, s = Ke.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, Ke.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, i, s = Ke.workingColorSpace) {
    if (e = Au(e, 1), t = Ge(t, 0, 1), i = Ge(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, o = 2 * i - r;
      this.r = gl(o, r, e + 1 / 3), this.g = gl(o, r, e), this.b = gl(o, r, e - 1 / 3);
    }
    return Ke.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = It) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = s[1], a = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = It) {
    const i = gm[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ai(e.r), this.g = ai(e.g), this.b = ai(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Bs(e.r), this.g = Bs(e.g), this.b = Bs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = It) {
    return Ke.fromWorkingColorSpace(Bt.copy(this), e), Math.round(Ge(Bt.r * 255, 0, 255)) * 65536 + Math.round(Ge(Bt.g * 255, 0, 255)) * 256 + Math.round(Ge(Bt.b * 255, 0, 255));
  }
  getHexString(e = It) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ke.workingColorSpace) {
    Ke.fromWorkingColorSpace(Bt.copy(this), t);
    const i = Bt.r, s = Bt.g, r = Bt.b, o = Math.max(i, s, r), a = Math.min(i, s, r);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const h = o - a;
      switch (c = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
        case i:
          l = (s - r) / h + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - i) / h + 2;
          break;
        case r:
          l = (i - s) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Ke.workingColorSpace) {
    return Ke.fromWorkingColorSpace(Bt.copy(this), t), e.r = Bt.r, e.g = Bt.g, e.b = Bt.b, e;
  }
  getStyle(e = It) {
    Ke.fromWorkingColorSpace(Bt.copy(this), e);
    const t = Bt.r, i = Bt.g, s = Bt.b;
    return e !== It ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(xi), this.setHSL(xi.h + e, xi.s + t, xi.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(xi), e.getHSL(go);
    const i = Er(xi.h, go.h, t), s = Er(xi.s, go.s, t), r = Er(xi.l, go.l, t);
    return this.setHSL(i, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * i + r[6] * s, this.g = r[1] * t + r[4] * i + r[7] * s, this.b = r[2] * t + r[5] * i + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Bt = new we();
we.NAMES = gm;
let e0 = 0;
class vn extends Ui {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: e0++ }), this.uuid = _n(), this.name = "", this.type = "Material", this.blending = Fs, this.side = li, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = tc, this.blendDst = nc, this.blendEquation = es, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new we(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ks, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = kh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = hs, this.stencilZFail = hs, this.stencilZPass = hs, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== Fs && (i.blending = this.blending), this.side !== li && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== tc && (i.blendSrc = this.blendSrc), this.blendDst !== nc && (i.blendDst = this.blendDst), this.blendEquation !== es && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== ks && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== kh && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== hs && (i.stencilFail = this.stencilFail), this.stencilZFail !== hs && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== hs && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = s(e.textures), o = s(e.images);
      r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const s = t.length;
      i = new Array(s);
      for (let r = 0; r !== s; ++r) i[r] = t[r].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class ri extends vn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new we(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.combine = gu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Tt = new N(), _o = new he();
let t0 = 0;
class Ut {
  constructor(e, t, i = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: t0++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = zc, this.updateRanges = [], this.gpuType = Rn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) _o.fromBufferAttribute(this, t), _o.applyMatrix3(e), this.setXY(t, _o.x, _o.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) Tt.fromBufferAttribute(this, t), Tt.applyMatrix3(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = En(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = ct(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = En(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = En(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = En(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = En(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), i = ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), i = ct(i, this.array), s = ct(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), i = ct(i, this.array), s = ct(s, this.array), r = ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== zc && (e.usage = this.usage), e;
  }
}
class _m extends Ut {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class xm extends Ut {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Qe extends Ut {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let n0 = 0;
const dn = new ke(), _l = new ut(), Ms = new N(), an = new fi(), cr = new fi(), Ct = new N();
class xt extends Ui {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: n0++ }), this.uuid = _n(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (pm(e) ? xm : _m)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const r = new Xe().getNormalMatrix(e);
      i.applyNormalMatrix(r), i.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return dn.makeRotationFromQuaternion(e), this.applyMatrix4(dn), this;
  }
  rotateX(e) {
    return dn.makeRotationX(e), this.applyMatrix4(dn), this;
  }
  rotateY(e) {
    return dn.makeRotationY(e), this.applyMatrix4(dn), this;
  }
  rotateZ(e) {
    return dn.makeRotationZ(e), this.applyMatrix4(dn), this;
  }
  translate(e, t, i) {
    return dn.makeTranslation(e, t, i), this.applyMatrix4(dn), this;
  }
  scale(e, t, i) {
    return dn.makeScale(e, t, i), this.applyMatrix4(dn), this;
  }
  lookAt(e) {
    return _l.lookAt(e), _l.updateMatrix(), this.applyMatrix4(_l.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ms).negate(), this.translate(Ms.x, Ms.y, Ms.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const o = e[s];
        i.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new Qe(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let s = 0; s < i; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new fi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new N(-1 / 0, -1 / 0, -1 / 0), new N(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        an.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, an.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, an.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint(an.min), this.boundingBox.expandByPoint(an.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new kn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (an.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r];
        cr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ct.addVectors(an.min, cr.min), an.expandByPoint(Ct), Ct.addVectors(an.max, cr.max), an.expandByPoint(Ct)) : (an.expandByPoint(cr.min), an.expandByPoint(cr.max));
      }
      an.getCenter(i);
      let s = 0;
      for (let r = 0, o = e.count; r < o; r++) Ct.fromBufferAttribute(e, r), s = Math.max(s, i.distanceToSquared(Ct));
      if (t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], l = this.morphTargetsRelative;
        for (let c = 0, u = a.count; c < u; c++) Ct.fromBufferAttribute(a, c), l && (Ms.fromBufferAttribute(e, c), Ct.add(Ms)), s = Math.max(s, i.distanceToSquared(Ct));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ut(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let D = 0; D < i.count; D++) a[D] = new N(), l[D] = new N();
    const c = new N(), u = new N(), h = new N(), f = new he(), d = new he(), m = new he(), _ = new N(), g = new N();
    function p(D, S, M) {
      c.fromBufferAttribute(i, D), u.fromBufferAttribute(i, S), h.fromBufferAttribute(i, M), f.fromBufferAttribute(r, D), d.fromBufferAttribute(r, S), m.fromBufferAttribute(r, M), u.sub(c), h.sub(c), d.sub(f), m.sub(f);
      const I = 1 / (d.x * m.y - m.x * d.y);
      isFinite(I) && (_.copy(u).multiplyScalar(m.y).addScaledVector(h, -d.y).multiplyScalar(I), g.copy(h).multiplyScalar(d.x).addScaledVector(u, -m.x).multiplyScalar(I), a[D].add(_), a[S].add(_), a[M].add(_), l[D].add(g), l[S].add(g), l[M].add(g));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let D = 0, S = A.length; D < S; ++D) {
      const M = A[D], I = M.start, z = M.count;
      for (let X = I, J = I + z; X < J; X += 3) p(e.getX(X + 0), e.getX(X + 1), e.getX(X + 2));
    }
    const b = new N(), x = new N(), C = new N(), w = new N();
    function R(D) {
      C.fromBufferAttribute(s, D), w.copy(C);
      const S = a[D];
      b.copy(S), b.sub(C.multiplyScalar(C.dot(S))).normalize(), x.crossVectors(w, S);
      const I = x.dot(l[D]) < 0 ? -1 : 1;
      o.setXYZW(D, b.x, b.y, b.z, I);
    }
    for (let D = 0, S = A.length; D < S; ++D) {
      const M = A[D], I = M.start, z = M.count;
      for (let X = I, J = I + z; X < J; X += 3) R(e.getX(X + 0)), R(e.getX(X + 1)), R(e.getX(X + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0) i = new Ut(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let f = 0, d = i.count; f < d; f++) i.setXYZ(f, 0, 0, 0);
      const s = new N(), r = new N(), o = new N(), a = new N(), l = new N(), c = new N(), u = new N(), h = new N();
      if (e) for (let f = 0, d = e.count; f < d; f += 3) {
        const m = e.getX(f + 0), _ = e.getX(f + 1), g = e.getX(f + 2);
        s.fromBufferAttribute(t, m), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, g), u.subVectors(o, r), h.subVectors(s, r), u.cross(h), a.fromBufferAttribute(i, m), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, g), a.add(u), l.add(u), c.add(u), i.setXYZ(m, a.x, a.y, a.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(g, c.x, c.y, c.z);
      }
      else for (let f = 0, d = t.count; f < d; f += 3) s.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, r), h.subVectors(s, r), u.cross(h), i.setXYZ(f + 0, u.x, u.y, u.z), i.setXYZ(f + 1, u.x, u.y, u.z), i.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) Ct.fromBufferAttribute(e, t), Ct.normalize(), e.setXYZ(t, Ct.x, Ct.y, Ct.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, h = a.normalized, f = new c.constructor(l.length * u);
      let d = 0, m = 0;
      for (let _ = 0, g = l.length; _ < g; _++) {
        a.isInterleavedBufferAttribute ? d = l[_] * a.data.stride + a.offset : d = l[_] * u;
        for (let p = 0; p < u; p++) f[m++] = c[d++];
      }
      return new Ut(f, u, h);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new xt(), i = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = e(l, i);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], d = e(f, i);
        l.push(d);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && (s[l] = u, r = true);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const s = e.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let f = 0, d = h.length; f < d; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const sf = new ke(), Gi = new Jr(), xo = new kn(), rf = new N(), vo = new N(), yo = new N(), Mo = new N(), xl = new N(), So = new N(), of = new N(), bo = new N();
class Vt extends ut {
  constructor(e = new xt(), t = new ri()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, s = i.attributes.position, r = i.morphAttributes.position, o = i.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      So.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], h = r[l];
        u !== 0 && (xl.fromBufferAttribute(h, e), o ? So.addScaledVector(xl, u) : So.addScaledVector(xl.sub(t), u));
      }
      t.add(So);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), xo.copy(i.boundingSphere), xo.applyMatrix4(r), Gi.copy(e.ray).recast(e.near), !(xo.containsPoint(Gi.origin) === false && (Gi.intersectSphere(xo, rf) === null || Gi.origin.distanceToSquared(rf) > (e.far - e.near) ** 2)) && (sf.copy(r).invert(), Gi.copy(e.ray).applyMatrix4(sf), !(i.boundingBox !== null && Gi.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, Gi)));
  }
  _computeIntersections(e, t, i) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let m = 0, _ = f.length; m < _; m++) {
      const g = f[m], p = o[g.materialIndex], A = Math.max(g.start, d.start), b = Math.min(a.count, Math.min(g.start + g.count, d.start + d.count));
      for (let x = A, C = b; x < C; x += 3) {
        const w = a.getX(x), R = a.getX(x + 1), D = a.getX(x + 2);
        s = To(this, p, e, i, c, u, h, w, R, D), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = g.materialIndex, t.push(s));
      }
    }
    else {
      const m = Math.max(0, d.start), _ = Math.min(a.count, d.start + d.count);
      for (let g = m, p = _; g < p; g += 3) {
        const A = a.getX(g), b = a.getX(g + 1), x = a.getX(g + 2);
        s = To(this, o, e, i, c, u, h, A, b, x), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let m = 0, _ = f.length; m < _; m++) {
      const g = f[m], p = o[g.materialIndex], A = Math.max(g.start, d.start), b = Math.min(l.count, Math.min(g.start + g.count, d.start + d.count));
      for (let x = A, C = b; x < C; x += 3) {
        const w = x, R = x + 1, D = x + 2;
        s = To(this, p, e, i, c, u, h, w, R, D), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = g.materialIndex, t.push(s));
      }
    }
    else {
      const m = Math.max(0, d.start), _ = Math.min(l.count, d.start + d.count);
      for (let g = m, p = _; g < p; g += 3) {
        const A = g, b = g + 1, x = g + 2;
        s = To(this, o, e, i, c, u, h, A, b, x), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
      }
    }
  }
}
function i0(n, e, t, i, s, r, o, a) {
  let l;
  if (e.side === nn ? l = i.intersectTriangle(o, r, s, true, a) : l = i.intersectTriangle(s, r, o, e.side === li, a), l === null) return null;
  bo.copy(a), bo.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(bo);
  return c < t.near || c > t.far ? null : { distance: c, point: bo.clone(), object: n };
}
function To(n, e, t, i, s, r, o, a, l, c) {
  n.getVertexPosition(a, vo), n.getVertexPosition(l, yo), n.getVertexPosition(c, Mo);
  const u = i0(n, e, t, i, vo, yo, Mo, of);
  if (u) {
    const h = new N();
    wn.getBarycoord(of, vo, yo, Mo, h), s && (u.uv = wn.getInterpolatedAttribute(s, a, l, c, h, new he())), r && (u.uv1 = wn.getInterpolatedAttribute(r, a, l, c, h, new he())), o && (u.normal = wn.getInterpolatedAttribute(o, a, l, c, h, new N()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a, b: l, c, normal: new N(), materialIndex: 0 };
    wn.getNormal(vo, yo, Mo, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class Qr extends xt {
  constructor(e = 1, t = 1, i = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: s, heightSegments: r, depthSegments: o };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], u = [], h = [];
    let f = 0, d = 0;
    m("z", "y", "x", -1, -1, i, t, e, o, r, 0), m("z", "y", "x", 1, -1, i, t, -e, o, r, 1), m("x", "z", "y", 1, 1, e, i, t, s, o, 2), m("x", "z", "y", 1, -1, e, i, -t, s, o, 3), m("x", "y", "z", 1, -1, e, t, i, s, r, 4), m("x", "y", "z", -1, -1, e, t, -i, s, r, 5), this.setIndex(l), this.setAttribute("position", new Qe(c, 3)), this.setAttribute("normal", new Qe(u, 3)), this.setAttribute("uv", new Qe(h, 2));
    function m(_, g, p, A, b, x, C, w, R, D, S) {
      const M = x / R, I = C / D, z = x / 2, X = C / 2, J = w / 2, te = R + 1, Z = D + 1;
      let ne = 0, K = 0;
      const fe = new N();
      for (let xe = 0; xe < Z; xe++) {
        const Se = xe * I - X;
        for (let Le = 0; Le < te; Le++) {
          const Ze = Le * M - z;
          fe[_] = Ze * A, fe[g] = Se * b, fe[p] = J, c.push(fe.x, fe.y, fe.z), fe[_] = 0, fe[g] = 0, fe[p] = w > 0 ? 1 : -1, u.push(fe.x, fe.y, fe.z), h.push(Le / R), h.push(1 - xe / D), ne += 1;
        }
      }
      for (let xe = 0; xe < D; xe++) for (let Se = 0; Se < R; Se++) {
        const Le = f + Se + te * xe, Ze = f + Se + te * (xe + 1), ie = f + (Se + 1) + te * (xe + 1), ue = f + (Se + 1) + te * xe;
        l.push(Le, Ze, ue), l.push(Ze, ie, ue), K += 6;
      }
      a.addGroup(d, K, S), d += K, f += ne;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Qr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function qs(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const s = n[t][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = s.clone() : Array.isArray(s) ? e[t][i] = s.slice() : e[t][i] = s;
    }
  }
  return e;
}
function Yt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = qs(n[t]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function s0(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function vm(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ke.workingColorSpace;
}
const zs = { clone: qs, merge: Yt };
var r0 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, o0 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class sn extends vn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = r0, this.fragmentShader = o0, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = qs(e.uniforms), this.uniformsGroups = s0(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? t.uniforms[s] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[s] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[s] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[s] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[s] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[s] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[s] = { type: "m4", value: o.toArray() } : t.uniforms[s] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const s in this.extensions) this.extensions[s] === true && (i[s] = true);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Ru extends ut {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ke(), this.projectionMatrix = new ke(), this.projectionMatrixInverse = new ke(), this.coordinateSystem = zn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vi = new N(), af = new he(), lf = new he();
class en extends Ru {
  constructor(e = 50, t = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ys * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ar * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ys * 2 * Math.atan(Math.tan(Ar * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    vi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(vi.x, vi.y).multiplyScalar(-e / vi.z), vi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(vi.x, vi.y).multiplyScalar(-e / vi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, af, lf), t.subVectors(lf, af);
  }
  setViewOffset(e, t, i, s, r, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ar * 0.5 * this.fov) / this.zoom, i = 2 * t, s = this.aspect * i, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, t -= o.offsetY * i / c, s *= o.width / l, i *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ss = -90, bs = 1;
class a0 extends ut {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new en(Ss, bs, e, t);
    s.layers = this.layers, this.add(s);
    const r = new en(Ss, bs, e, t);
    r.layers = this.layers, this.add(r);
    const o = new en(Ss, bs, e, t);
    o.layers = this.layers, this.add(o);
    const a = new en(Ss, bs, e, t);
    a.layers = this.layers, this.add(a);
    const l = new en(Ss, bs, e, t);
    l.layers = this.layers, this.add(l);
    const c = new en(Ss, bs, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, s, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === zn) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ga) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = false;
    const _ = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false, e.setRenderTarget(i, 0, s), e.render(t, r), e.setRenderTarget(i, 1, s), e.render(t, o), e.setRenderTarget(i, 2, s), e.render(t, a), e.setRenderTarget(i, 3, s), e.render(t, l), e.setRenderTarget(i, 4, s), e.render(t, c), i.texture.generateMipmaps = _, e.setRenderTarget(i, 5, s), e.render(t, u), e.setRenderTarget(h, f, d), e.xr.enabled = m, i.texture.needsPMREMUpdate = true;
  }
}
class ym extends At {
  constructor(e = [], t = Gs, i, s, r, o, a, l, c, u) {
    super(e, t, i, s, r, o, a, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class l0 extends Vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new ym(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : tn;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, s = new Qr(5, 5, 5), r = new sn({ name: "CubemapFromEquirect", uniforms: qs(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: nn, blending: oi });
    r.uniforms.tEquirect.value = t;
    const o = new Vt(s, r), a = t.minFilter;
    return t.minFilter === si && (t.minFilter = tn), new a0(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t = true, i = true, s = true) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, s);
    e.setRenderTarget(r);
  }
}
class ns extends ut {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const c0 = { type: "move" };
class vl {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ns(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ns(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ns(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new N()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, i) {
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const _ of e.hand.values()) {
          const g = t.getJointPose(_, i), p = this._getHandJoint(c, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), d = 0.02, m = 5e-3;
        c.inputState.pinching && f > d + m ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= d - m && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (s = t.getPose(e.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, s.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = false, s.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(c0)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new ns();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Mm {
  constructor(e, t = 1, i = 1e3) {
    this.isFog = true, this.name = "", this.color = new we(e), this.near = t, this.far = i;
  }
  clone() {
    return new Mm(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class EE extends ut {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ln(), this.environmentIntensity = 1, this.environmentRotation = new Ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Sm {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = zc, this.updateRanges = [], this.version = 0, this.uuid = _n();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, i) {
    e *= this.stride, i *= t.stride;
    for (let s = 0, r = this.stride; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = _n()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = _n()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Wt = new N();
class Cu {
  constructor(e, t, i, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = s;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++) Wt.fromBufferAttribute(this, t), Wt.applyMatrix4(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Wt.fromBufferAttribute(this, t), Wt.applyNormalMatrix(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Wt.fromBufferAttribute(this, t), Wt.transformDirection(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = En(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = ct(i, this.array)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = En(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = En(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = En(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = En(t, this.array)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), i = ct(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), i = ct(i, this.array), s = ct(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), i = ct(i, this.array), s = ct(s, this.array), r = ct(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new Ut(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Cu(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const cf = new N(), uf = new nt(), hf = new nt(), u0 = new N(), ff = new ke(), Ao = new N(), yl = new kn(), df = new ke(), Ml = new Jr();
class h0 extends Vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Vh, this.bindMatrix = new ke(), this.bindMatrixInverse = new ke(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new fi()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, Ao), this.boundingBox.expandByPoint(Ao);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new kn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, Ao), this.boundingSphere.expandByPoint(Ao);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const i = this.material, s = this.matrixWorld;
    i !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), yl.copy(this.boundingSphere), yl.applyMatrix4(s), e.ray.intersectsSphere(yl) !== false && (df.copy(s).invert(), Ml.copy(e.ray).applyMatrix4(df), !(this.boundingBox !== null && Ml.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Ml)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new nt(), t = this.geometry.attributes.skinWeight;
    for (let i = 0, s = t.count; i < s; i++) {
      e.fromBufferAttribute(t, i);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Vh ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === sv ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const i = this.skeleton, s = this.geometry;
    uf.fromBufferAttribute(s.attributes.skinIndex, e), hf.fromBufferAttribute(s.attributes.skinWeight, e), cf.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = hf.getComponent(r);
      if (o !== 0) {
        const a = uf.getComponent(r);
        ff.multiplyMatrices(i.bones[a].matrixWorld, i.boneInverses[a]), t.addScaledVector(u0.copy(cf).applyMatrix4(ff), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class bm extends ut {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Tm extends At {
  constructor(e = null, t = 1, i = 1, s, r, o, a, l, c = Nt, u = Nt, h, f) {
    super(null, o, a, l, c, u, s, r, h, f), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const pf = new ke(), f0 = new ke();
class Pu {
  constructor(e = [], t = []) {
    this.uuid = _n(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let i = 0, s = this.bones.length; i < s; i++) this.boneInverses.push(new ke());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = new ke();
      this.bones[e] && i.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(i);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && i.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && (i.parent && i.parent.isBone ? (i.matrix.copy(i.parent.matrixWorld).invert(), i.matrix.multiply(i.matrixWorld)) : i.matrix.copy(i.matrixWorld), i.matrix.decompose(i.position, i.quaternion, i.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, i = this.boneMatrices, s = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : f0;
      pf.multiplyMatrices(a, t[r]), pf.toArray(i, r * 16);
    }
    s !== null && (s.needsUpdate = true);
  }
  clone() {
    return new Pu(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const i = new Tm(t, e, e, mn, Rn);
    return i.needsUpdate = true, this.boneMatrices = t, this.boneTexture = i, this;
  }
  getBoneByName(e) {
    for (let t = 0, i = this.bones.length; t < i; t++) {
      const s = this.bones[t];
      if (s.name === e) return s;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let i = 0, s = e.bones.length; i < s; i++) {
      const r = e.bones[i];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new bm()), this.bones.push(o), this.boneInverses.push(new ke().fromArray(e.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, i = this.boneInverses;
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s];
      e.bones.push(o.uuid);
      const a = i[s];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Hc extends Ut {
  constructor(e, t, i, s = 1) {
    super(e, t, i), this.isInstancedBufferAttribute = true, this.meshPerAttribute = s;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const Ts = new ke(), mf = new ke(), Eo = [], gf = new fi(), d0 = new ke(), ur = new Vt(), hr = new kn();
class p0 extends Vt {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Hc(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++) this.setMatrixAt(s, d0);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new fi()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Ts), gf.copy(e.boundingBox).applyMatrix4(Ts), this.boundingBox.union(gf);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new kn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Ts), hr.copy(e.boundingSphere).applyMatrix4(Ts), this.boundingSphere.union(hr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = i.length + 1, o = e * r + 1;
    for (let a = 0; a < i.length; a++) i[a] = s[o + a];
  }
  raycast(e, t) {
    const i = this.matrixWorld, s = this.count;
    if (ur.geometry = this.geometry, ur.material = this.material, ur.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), hr.copy(this.boundingSphere), hr.applyMatrix4(i), e.ray.intersectsSphere(hr) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, Ts), mf.multiplyMatrices(i, Ts), ur.matrixWorld = mf, ur.raycast(e, Eo);
      for (let o = 0, a = Eo.length; o < a; o++) {
        const l = Eo[o];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Eo.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Hc(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Tm(new Float32Array(s * this.count), s, this.count, yu, Rn));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < i.length; c++) o += i[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = s * e;
    r[l] = a, r.set(i, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const Sl = new N(), m0 = new N(), g0 = new Xe();
class Ji {
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, s) {
    return this.normal.set(e, t, i), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const s = Sl.subVectors(i, t).cross(m0.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(Sl), s = this.normal.dot(i);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(i, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || g0.getNormalMatrix(e), s = this.coplanarPoint(Sl).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wi = new kn(), wo = new N();
class Lu {
  constructor(e = new Ji(), t = new Ji(), i = new Ji(), s = new Ji(), r = new Ji(), o = new Ji()) {
    this.planes = [e, t, i, s, r, o];
  }
  set(e, t, i, s, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(i), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = zn) {
    const i = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], u = s[5], h = s[6], f = s[7], d = s[8], m = s[9], _ = s[10], g = s[11], p = s[12], A = s[13], b = s[14], x = s[15];
    if (i[0].setComponents(l - r, f - c, g - d, x - p).normalize(), i[1].setComponents(l + r, f + c, g + d, x + p).normalize(), i[2].setComponents(l + o, f + u, g + m, x + A).normalize(), i[3].setComponents(l - o, f - u, g - m, x - A).normalize(), i[4].setComponents(l - a, f - h, g - _, x - b).normalize(), t === zn) i[5].setComponents(l + a, f + h, g + _, x + b).normalize();
    else if (t === ga) i[5].setComponents(a, h, _, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Wi);
  }
  intersectsSprite(e) {
    return Wi.center.set(0, 0, 0), Wi.radius = 0.7071067811865476, Wi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Wi);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < s) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = t[i];
      if (wo.x = s.normal.x > 0 ? e.max.x : e.min.x, wo.y = s.normal.y > 0 ? e.max.y : e.min.y, wo.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(wo) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Da extends vn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new we(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const _a = new N(), xa = new N(), _f = new ke(), fr = new Jr(), Ro = new kn(), bl = new N(), xf = new N();
class Xr extends ut {
  constructor(e = new xt(), t = new Da()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let s = 1, r = t.count; s < r; s++) _a.fromBufferAttribute(t, s - 1), xa.fromBufferAttribute(t, s), i[s] = i[s - 1], i[s] += _a.distanceTo(xa);
      e.setAttribute("lineDistance", new Qe(i, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Ro.copy(i.boundingSphere), Ro.applyMatrix4(s), Ro.radius += r, e.ray.intersectsSphere(Ro) === false) return;
    _f.copy(s).invert(), fr.copy(e.ray).applyMatrix4(_f);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, u = i.index, f = i.attributes.position;
    if (u !== null) {
      const d = Math.max(0, o.start), m = Math.min(u.count, o.start + o.count);
      for (let _ = d, g = m - 1; _ < g; _ += c) {
        const p = u.getX(_), A = u.getX(_ + 1), b = Co(this, e, fr, l, p, A, _);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const _ = u.getX(m - 1), g = u.getX(d), p = Co(this, e, fr, l, _, g, m - 1);
        p && t.push(p);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(f.count, o.start + o.count);
      for (let _ = d, g = m - 1; _ < g; _ += c) {
        const p = Co(this, e, fr, l, _, _ + 1, _);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = Co(this, e, fr, l, m - 1, d, m - 1);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Co(n, e, t, i, s, r, o) {
  const a = n.geometry.attributes.position;
  if (_a.fromBufferAttribute(a, s), xa.fromBufferAttribute(a, r), t.distanceSqToSegment(_a, xa, bl, xf) > i) return;
  bl.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(bl);
  if (!(c < e.near || c > e.far)) return { distance: c, point: xf.clone().applyMatrix4(n.matrixWorld), index: o, face: null, faceIndex: null, barycoord: null, object: n };
}
const vf = new N(), yf = new N();
class Am extends Xr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let s = 0, r = t.count; s < r; s += 2) vf.fromBufferAttribute(t, s), yf.fromBufferAttribute(t, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + vf.distanceTo(yf);
      e.setAttribute("lineDistance", new Qe(i, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class _0 extends Xr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Em extends vn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new we(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Mf = new ke(), Vc = new Jr(), Po = new kn(), Lo = new N();
class x0 extends ut {
  constructor(e = new xt(), t = new Em()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Po.copy(i.boundingSphere), Po.applyMatrix4(s), Po.radius += r, e.ray.intersectsSphere(Po) === false) return;
    Mf.copy(s).invert(), Vc.copy(e.ray).applyMatrix4(Mf);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = i.index, h = i.attributes.position;
    if (c !== null) {
      const f = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count);
      for (let m = f, _ = d; m < _; m++) {
        const g = c.getX(m);
        Lo.fromBufferAttribute(h, g), Sf(Lo, g, l, s, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), d = Math.min(h.count, o.start + o.count);
      for (let m = f, _ = d; m < _; m++) Lo.fromBufferAttribute(h, m), Sf(Lo, m, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Sf(n, e, t, i, s, r, o) {
  const a = Vc.distanceSqToPoint(n);
  if (a < t) {
    const l = new N();
    Vc.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class wm extends At {
  constructor(e, t, i = os, s, r, o, a = Nt, l = Nt, c, u = Hr) {
    if (u !== Hr && u !== Vr) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, s, r, o, a, l, u, i, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Eu(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Gn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let i, s = this.getPoint(0), r = 0;
    t.push(0);
    for (let o = 1; o <= e; o++) i = this.getPoint(o / e), r += i.distanceTo(s), t.push(r), s = i;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const i = this.getLengths();
    let s = 0;
    const r = i.length;
    let o;
    t ? o = t : o = e * i[r - 1];
    let a = 0, l = r - 1, c;
    for (; a <= l; ) if (s = Math.floor(a + (l - a) / 2), c = i[s] - o, c < 0) a = s + 1;
    else if (c > 0) l = s - 1;
    else {
      l = s;
      break;
    }
    if (s = l, i[s] === o) return s / (r - 1);
    const u = i[s], f = i[s + 1] - u, d = (o - u) / f;
    return (s + d) / (r - 1);
  }
  getTangent(e, t) {
    let s = e - 1e-4, r = e + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const o = this.getPoint(s), a = this.getPoint(r), l = t || (o.isVector2 ? new he() : new N());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new N(), s = [], r = [], o = [], a = new N(), l = new ke();
    for (let d = 0; d <= e; d++) {
      const m = d / e;
      s[d] = this.getTangentAt(m, new N());
    }
    r[0] = new N(), o[0] = new N();
    let c = Number.MAX_VALUE;
    const u = Math.abs(s[0].x), h = Math.abs(s[0].y), f = Math.abs(s[0].z);
    u <= c && (c = u, i.set(1, 0, 0)), h <= c && (c = h, i.set(0, 1, 0)), f <= c && i.set(0, 0, 1), a.crossVectors(s[0], i).normalize(), r[0].crossVectors(s[0], a), o[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (r[d] = r[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(s[d - 1], s[d]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(Ge(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(a, m));
      }
      o[d].crossVectors(s[d], r[d]);
    }
    if (t === true) {
      let d = Math.acos(Ge(r[0].dot(r[e]), -1, 1));
      d /= e, s[0].dot(a.crossVectors(r[0], r[e])) > 0 && (d = -d);
      for (let m = 1; m <= e; m++) r[m].applyMatrix4(l.makeRotationAxis(s[m], d * m)), o[m].crossVectors(s[m], r[m]);
    }
    return { tangents: s, normals: r, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Iu extends Gn {
  constructor(e = 0, t = 0, i = 1, s = 1, r = 0, o = Math.PI * 2, a = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(e, t = new he()) {
    const i = t, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (o ? r = 0 : r = s), this.aClockwise === true && !o && (r === s ? r = -s : r = r - s);
    const a = this.aStartAngle + e * r;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * u - d * h + this.aX, c = f * h + d * u + this.aY;
    }
    return i.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class v0 extends Iu {
  constructor(e, t, i, s, r, o) {
    super(e, t, i, i, s, r, o), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Du() {
  let n = 0, e = 0, t = 0, i = 0;
  function s(r, o, a, l) {
    n = r, e = a, t = -3 * r + 3 * o - 2 * a - l, i = 2 * r - 2 * o + a + l;
  }
  return { initCatmullRom: function(r, o, a, l, c) {
    s(o, a, c * (a - r), c * (l - o));
  }, initNonuniformCatmullRom: function(r, o, a, l, c, u, h) {
    let f = (o - r) / c - (a - r) / (c + u) + (a - o) / u, d = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
    f *= u, d *= u, s(o, a, f, d);
  }, calc: function(r) {
    const o = r * r, a = o * r;
    return n + e * r + t * o + i * a;
  } };
}
const Io = new N(), Tl = new Du(), Al = new Du(), El = new Du();
class y0 extends Gn {
  constructor(e = [], t = false, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = s;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.points, r = s.length, o = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
    let c, u;
    this.closed || a > 0 ? c = s[(a - 1) % r] : (Io.subVectors(s[0], s[1]).add(s[0]), c = Io);
    const h = s[a % r], f = s[(a + 1) % r];
    if (this.closed || a + 2 < r ? u = s[(a + 2) % r] : (Io.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), u = Io), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(h), d), _ = Math.pow(h.distanceToSquared(f), d), g = Math.pow(f.distanceToSquared(u), d);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), Tl.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, m, _, g), Al.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, m, _, g), El.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, m, _, g);
    } else this.curveType === "catmullrom" && (Tl.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), Al.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), El.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
    return i.set(Tl.calc(l), Al.calc(l), El.calc(l)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new N().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function bf(n, e, t, i, s) {
  const r = (i - e) * 0.5, o = (s - t) * 0.5, a = n * n, l = n * a;
  return (2 * t - 2 * i + r + o) * l + (-3 * t + 3 * i - 2 * r - o) * a + r * n + t;
}
function M0(n, e) {
  const t = 1 - n;
  return t * t * e;
}
function S0(n, e) {
  return 2 * (1 - n) * n * e;
}
function b0(n, e) {
  return n * n * e;
}
function wr(n, e, t, i) {
  return M0(n, e) + S0(n, t) + b0(n, i);
}
function T0(n, e) {
  const t = 1 - n;
  return t * t * t * e;
}
function A0(n, e) {
  const t = 1 - n;
  return 3 * t * t * n * e;
}
function E0(n, e) {
  return 3 * (1 - n) * n * n * e;
}
function w0(n, e) {
  return n * n * n * e;
}
function Rr(n, e, t, i, s) {
  return T0(n, e) + A0(n, t) + E0(n, i) + w0(n, s);
}
class Rm extends Gn {
  constructor(e = new he(), t = new he(), i = new he(), s = new he()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new he()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return i.set(Rr(e, s.x, r.x, o.x, a.x), Rr(e, s.y, r.y, o.y, a.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class R0 extends Gn {
  constructor(e = new N(), t = new N(), i = new N(), s = new N()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return i.set(Rr(e, s.x, r.x, o.x, a.x), Rr(e, s.y, r.y, o.y, a.y), Rr(e, s.z, r.z, o.z, a.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Cm extends Gn {
  constructor(e = new he(), t = new he()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new he()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new he()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class C0 extends Gn {
  constructor(e = new N(), t = new N()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new N()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new N()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Pm extends Gn {
  constructor(e = new he(), t = new he(), i = new he()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new he()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2;
    return i.set(wr(e, s.x, r.x, o.x), wr(e, s.y, r.y, o.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class P0 extends Gn {
  constructor(e = new N(), t = new N(), i = new N()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2;
    return i.set(wr(e, s.x, r.x, o.x), wr(e, s.y, r.y, o.y), wr(e, s.z, r.z, o.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Lm extends Gn {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new he()) {
    const i = t, s = this.points, r = (s.length - 1) * e, o = Math.floor(r), a = r - o, l = s[o === 0 ? o : o - 1], c = s[o], u = s[o > s.length - 2 ? s.length - 1 : o + 1], h = s[o > s.length - 3 ? s.length - 1 : o + 2];
    return i.set(bf(a, l.x, c.x, u.x, h.x), bf(a, l.y, c.y, u.y, h.y)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new he().fromArray(s));
    }
    return this;
  }
}
var kc = Object.freeze({ __proto__: null, ArcCurve: v0, CatmullRomCurve3: y0, CubicBezierCurve: Rm, CubicBezierCurve3: R0, EllipseCurve: Iu, LineCurve: Cm, LineCurve3: C0, QuadraticBezierCurve: Pm, QuadraticBezierCurve3: P0, SplineCurve: Lm });
class L0 extends Gn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new kc[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= i) {
        const o = s[r] - i, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let i = 0, s = this.curves.length; i < s; i++) t += this.curves[i].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let i;
    for (let s = 0, r = this.curves; s < r.length; s++) {
      const o = r[s], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        i && i.equals(u) || (t.push(u), i = u);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(s.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, i = this.curves.length; t < i; t++) {
      const s = this.curves[t];
      e.curves.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(new kc[s.type]().fromJSON(s));
    }
    return this;
  }
}
class Tf extends L0 {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new he(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const i = new Cm(this.currentPoint.clone(), new he(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, s) {
    const r = new Pm(this.currentPoint.clone(), new he(e, t), new he(i, s));
    return this.curves.push(r), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, t, i, s, r, o) {
    const a = new Rm(this.currentPoint.clone(), new he(e, t), new he(i, s), new he(r, o));
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new Lm(t);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, s, r, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(e + a, t + l, i, s, r, o), this;
  }
  absarc(e, t, i, s, r, o) {
    return this.absellipse(e, t, i, i, s, r, o), this;
  }
  ellipse(e, t, i, s, r, o, a, l) {
    const c = this.currentPoint.x, u = this.currentPoint.y;
    return this.absellipse(e + c, t + u, i, s, r, o, a, l), this;
  }
  absellipse(e, t, i, s, r, o, a, l) {
    const c = new Iu(e, t, i, s, r, o, a, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const u = c.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Im extends xt {
  constructor(e = 1, t = 32, i = 0, s = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: i, thetaLength: s }, t = Math.max(3, t);
    const r = [], o = [], a = [], l = [], c = new N(), u = new he();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let h = 0, f = 3; h <= t; h++, f += 3) {
      const d = i + h / t * s;
      c.x = e * Math.cos(d), c.y = e * Math.sin(d), o.push(c.x, c.y, c.z), a.push(0, 0, 1), u.x = (o[f] / e + 1) / 2, u.y = (o[f + 1] / e + 1) / 2, l.push(u.x, u.y);
    }
    for (let h = 1; h <= t; h++) r.push(h, h + 1, 0);
    this.setIndex(r), this.setAttribute("position", new Qe(o, 3)), this.setAttribute("normal", new Qe(a, 3)), this.setAttribute("uv", new Qe(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Im(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Nu extends xt {
  constructor(e = 1, t = 1, i = 1, s = 32, r = 1, o = false, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: s, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: l };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const u = [], h = [], f = [], d = [];
    let m = 0;
    const _ = [], g = i / 2;
    let p = 0;
    A(), o === false && (e > 0 && b(true), t > 0 && b(false)), this.setIndex(u), this.setAttribute("position", new Qe(h, 3)), this.setAttribute("normal", new Qe(f, 3)), this.setAttribute("uv", new Qe(d, 2));
    function A() {
      const x = new N(), C = new N();
      let w = 0;
      const R = (t - e) / i;
      for (let D = 0; D <= r; D++) {
        const S = [], M = D / r, I = M * (t - e) + e;
        for (let z = 0; z <= s; z++) {
          const X = z / s, J = X * l + a, te = Math.sin(J), Z = Math.cos(J);
          C.x = I * te, C.y = -M * i + g, C.z = I * Z, h.push(C.x, C.y, C.z), x.set(te, R, Z).normalize(), f.push(x.x, x.y, x.z), d.push(X, 1 - M), S.push(m++);
        }
        _.push(S);
      }
      for (let D = 0; D < s; D++) for (let S = 0; S < r; S++) {
        const M = _[S][D], I = _[S + 1][D], z = _[S + 1][D + 1], X = _[S][D + 1];
        (e > 0 || S !== 0) && (u.push(M, I, X), w += 3), (t > 0 || S !== r - 1) && (u.push(I, z, X), w += 3);
      }
      c.addGroup(p, w, 0), p += w;
    }
    function b(x) {
      const C = m, w = new he(), R = new N();
      let D = 0;
      const S = x === true ? e : t, M = x === true ? 1 : -1;
      for (let z = 1; z <= s; z++) h.push(0, g * M, 0), f.push(0, M, 0), d.push(0.5, 0.5), m++;
      const I = m;
      for (let z = 0; z <= s; z++) {
        const J = z / s * l + a, te = Math.cos(J), Z = Math.sin(J);
        R.x = S * Z, R.y = g * M, R.z = S * te, h.push(R.x, R.y, R.z), f.push(0, M, 0), w.x = te * 0.5 + 0.5, w.y = Z * 0.5 * M + 0.5, d.push(w.x, w.y), m++;
      }
      for (let z = 0; z < s; z++) {
        const X = C + z, J = I + z;
        x === true ? u.push(J, J + 1, X) : u.push(J + 1, J, X), D += 3;
      }
      c.addGroup(p, D, x === true ? 1 : 2), p += D;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Nu(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Dm extends Nu {
  constructor(e = 1, t = 1, i = 32, s = 1, r = false, o = 0, a = Math.PI * 2) {
    super(0, e, t, i, s, r, o, a), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: s, openEnded: r, thetaStart: o, thetaLength: a };
  }
  static fromJSON(e) {
    return new Dm(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Uu extends xt {
  constructor(e = [], t = [], i = 1, s = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: i, detail: s };
    const r = [], o = [];
    a(s), c(i), u(), this.setAttribute("position", new Qe(r, 3)), this.setAttribute("normal", new Qe(r.slice(), 3)), this.setAttribute("uv", new Qe(o, 2)), s === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(A) {
      const b = new N(), x = new N(), C = new N();
      for (let w = 0; w < t.length; w += 3) d(t[w + 0], b), d(t[w + 1], x), d(t[w + 2], C), l(b, x, C, A);
    }
    function l(A, b, x, C) {
      const w = C + 1, R = [];
      for (let D = 0; D <= w; D++) {
        R[D] = [];
        const S = A.clone().lerp(x, D / w), M = b.clone().lerp(x, D / w), I = w - D;
        for (let z = 0; z <= I; z++) z === 0 && D === w ? R[D][z] = S : R[D][z] = S.clone().lerp(M, z / I);
      }
      for (let D = 0; D < w; D++) for (let S = 0; S < 2 * (w - D) - 1; S++) {
        const M = Math.floor(S / 2);
        S % 2 === 0 ? (f(R[D][M + 1]), f(R[D + 1][M]), f(R[D][M])) : (f(R[D][M + 1]), f(R[D + 1][M + 1]), f(R[D + 1][M]));
      }
    }
    function c(A) {
      const b = new N();
      for (let x = 0; x < r.length; x += 3) b.x = r[x + 0], b.y = r[x + 1], b.z = r[x + 2], b.normalize().multiplyScalar(A), r[x + 0] = b.x, r[x + 1] = b.y, r[x + 2] = b.z;
    }
    function u() {
      const A = new N();
      for (let b = 0; b < r.length; b += 3) {
        A.x = r[b + 0], A.y = r[b + 1], A.z = r[b + 2];
        const x = g(A) / 2 / Math.PI + 0.5, C = p(A) / Math.PI + 0.5;
        o.push(x, 1 - C);
      }
      m(), h();
    }
    function h() {
      for (let A = 0; A < o.length; A += 6) {
        const b = o[A + 0], x = o[A + 2], C = o[A + 4], w = Math.max(b, x, C), R = Math.min(b, x, C);
        w > 0.9 && R < 0.1 && (b < 0.2 && (o[A + 0] += 1), x < 0.2 && (o[A + 2] += 1), C < 0.2 && (o[A + 4] += 1));
      }
    }
    function f(A) {
      r.push(A.x, A.y, A.z);
    }
    function d(A, b) {
      const x = A * 3;
      b.x = e[x + 0], b.y = e[x + 1], b.z = e[x + 2];
    }
    function m() {
      const A = new N(), b = new N(), x = new N(), C = new N(), w = new he(), R = new he(), D = new he();
      for (let S = 0, M = 0; S < r.length; S += 9, M += 6) {
        A.set(r[S + 0], r[S + 1], r[S + 2]), b.set(r[S + 3], r[S + 4], r[S + 5]), x.set(r[S + 6], r[S + 7], r[S + 8]), w.set(o[M + 0], o[M + 1]), R.set(o[M + 2], o[M + 3]), D.set(o[M + 4], o[M + 5]), C.copy(A).add(b).add(x).divideScalar(3);
        const I = g(C);
        _(w, M + 0, A, I), _(R, M + 2, b, I), _(D, M + 4, x, I);
      }
    }
    function _(A, b, x, C) {
      C < 0 && A.x === 1 && (o[b] = A.x - 1), x.x === 0 && x.z === 0 && (o[b] = C / 2 / Math.PI + 0.5);
    }
    function g(A) {
      return Math.atan2(A.z, -A.x);
    }
    function p(A) {
      return Math.atan2(-A.y, Math.sqrt(A.x * A.x + A.z * A.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Uu(e.vertices, e.indices, e.radius, e.details);
  }
}
class I0 extends Tf {
  constructor(e) {
    super(e), this.uuid = _n(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let i = 0, s = this.holes.length; i < s; i++) t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, i = this.holes.length; t < i; t++) {
      const s = this.holes[t];
      e.holes.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(new Tf().fromJSON(s));
    }
    return this;
  }
}
function D0(n, e, t = 2) {
  const i = e && e.length, s = i ? e[0] * t : n.length;
  let r = Nm(n, 0, s, t, true);
  const o = [];
  if (!r || r.next === r.prev) return o;
  let a, l, c;
  if (i && (r = B0(n, e, r, t)), n.length > 80 * t) {
    a = 1 / 0, l = 1 / 0;
    let u = -1 / 0, h = -1 / 0;
    for (let f = t; f < s; f += t) {
      const d = n[f], m = n[f + 1];
      d < a && (a = d), m < l && (l = m), d > u && (u = d), m > h && (h = m);
    }
    c = Math.max(u - a, h - l), c = c !== 0 ? 32767 / c : 0;
  }
  return Yr(r, o, t, a, l, c, 0), o;
}
function Nm(n, e, t, i, s) {
  let r;
  if (s === K0(n, e, t, i) > 0) for (let o = e; o < t; o += i) r = Af(o / i | 0, n[o], n[o + 1], r);
  else for (let o = t - i; o >= e; o -= i) r = Af(o / i | 0, n[o], n[o + 1], r);
  return r && js(r, r.next) && (jr(r), r = r.next), r;
}
function as(n, e) {
  if (!n) return n;
  e || (e = n);
  let t = n, i;
  do
    if (i = false, !t.steiner && (js(t, t.next) || gt(t.prev, t, t.next) === 0)) {
      if (jr(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function Yr(n, e, t, i, s, r, o) {
  if (!n) return;
  !o && r && G0(n, i, s, r);
  let a = n;
  for (; n.prev !== n.next; ) {
    const l = n.prev, c = n.next;
    if (r ? U0(n, i, s, r) : N0(n)) {
      e.push(l.i, n.i, c.i), jr(n), n = c.next, a = c.next;
      continue;
    }
    if (n = c, n === a) {
      o ? o === 1 ? (n = O0(as(n), e), Yr(n, e, t, i, s, r, 2)) : o === 2 && F0(n, e, t, i, s, r) : Yr(as(n), e, t, i, s, r, 1);
      break;
    }
  }
}
function N0(n) {
  const e = n.prev, t = n, i = n.next;
  if (gt(e, t, i) >= 0) return false;
  const s = e.x, r = t.x, o = i.x, a = e.y, l = t.y, c = i.y, u = Math.min(s, r, o), h = Math.min(a, l, c), f = Math.max(s, r, o), d = Math.max(a, l, c);
  let m = i.next;
  for (; m !== e; ) {
    if (m.x >= u && m.x <= f && m.y >= h && m.y <= d && _r(s, a, r, l, o, c, m.x, m.y) && gt(m.prev, m, m.next) >= 0) return false;
    m = m.next;
  }
  return true;
}
function U0(n, e, t, i) {
  const s = n.prev, r = n, o = n.next;
  if (gt(s, r, o) >= 0) return false;
  const a = s.x, l = r.x, c = o.x, u = s.y, h = r.y, f = o.y, d = Math.min(a, l, c), m = Math.min(u, h, f), _ = Math.max(a, l, c), g = Math.max(u, h, f), p = Gc(d, m, e, t, i), A = Gc(_, g, e, t, i);
  let b = n.prevZ, x = n.nextZ;
  for (; b && b.z >= p && x && x.z <= A; ) {
    if (b.x >= d && b.x <= _ && b.y >= m && b.y <= g && b !== s && b !== o && _r(a, u, l, h, c, f, b.x, b.y) && gt(b.prev, b, b.next) >= 0 || (b = b.prevZ, x.x >= d && x.x <= _ && x.y >= m && x.y <= g && x !== s && x !== o && _r(a, u, l, h, c, f, x.x, x.y) && gt(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; b && b.z >= p; ) {
    if (b.x >= d && b.x <= _ && b.y >= m && b.y <= g && b !== s && b !== o && _r(a, u, l, h, c, f, b.x, b.y) && gt(b.prev, b, b.next) >= 0) return false;
    b = b.prevZ;
  }
  for (; x && x.z <= A; ) {
    if (x.x >= d && x.x <= _ && x.y >= m && x.y <= g && x !== s && x !== o && _r(a, u, l, h, c, f, x.x, x.y) && gt(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function O0(n, e) {
  let t = n;
  do {
    const i = t.prev, s = t.next.next;
    !js(i, s) && Om(i, t, t.next, s) && qr(i, s) && qr(s, i) && (e.push(i.i, t.i, s.i), jr(t), jr(t.next), t = n = s), t = t.next;
  } while (t !== n);
  return as(t);
}
function F0(n, e, t, i, s, r) {
  let o = n;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Y0(o, a)) {
        let l = Fm(o, a);
        o = as(o, o.next), l = as(l, l.next), Yr(o, e, t, i, s, r, 0), Yr(l, e, t, i, s, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== n);
}
function B0(n, e, t, i) {
  const s = [];
  for (let r = 0, o = e.length; r < o; r++) {
    const a = e[r] * i, l = r < o - 1 ? e[r + 1] * i : n.length, c = Nm(n, a, l, i, false);
    c === c.next && (c.steiner = true), s.push(X0(c));
  }
  s.sort(z0);
  for (let r = 0; r < s.length; r++) t = H0(s[r], t);
  return t;
}
function z0(n, e) {
  let t = n.x - e.x;
  if (t === 0 && (t = n.y - e.y, t === 0)) {
    const i = (n.next.y - n.y) / (n.next.x - n.x), s = (e.next.y - e.y) / (e.next.x - e.x);
    t = i - s;
  }
  return t;
}
function H0(n, e) {
  const t = V0(n, e);
  if (!t) return e;
  const i = Fm(t, n);
  return as(i, i.next), as(t, t.next);
}
function V0(n, e) {
  let t = e;
  const i = n.x, s = n.y;
  let r = -1 / 0, o;
  if (js(n, t)) return t;
  do {
    if (js(n, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const h = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (h <= i && h > r && (r = h, o = t.x < t.next.x ? t : t.next, h === i)) return o;
    }
    t = t.next;
  } while (t !== e);
  if (!o) return null;
  const a = o, l = o.x, c = o.y;
  let u = 1 / 0;
  t = o;
  do {
    if (i >= t.x && t.x >= l && i !== t.x && Um(s < c ? i : r, s, l, c, s < c ? r : i, s, t.x, t.y)) {
      const h = Math.abs(s - t.y) / (i - t.x);
      qr(t, n) && (h < u || h === u && (t.x > o.x || t.x === o.x && k0(o, t))) && (o = t, u = h);
    }
    t = t.next;
  } while (t !== a);
  return o;
}
function k0(n, e) {
  return gt(n.prev, n, e.prev) < 0 && gt(e.next, n, n.next) < 0;
}
function G0(n, e, t, i) {
  let s = n;
  do
    s.z === 0 && (s.z = Gc(s.x, s.y, e, t, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== n);
  s.prevZ.nextZ = null, s.prevZ = null, W0(s);
}
function W0(n) {
  let e, t = 1;
  do {
    let i = n, s;
    n = null;
    let r = null;
    for (e = 0; i; ) {
      e++;
      let o = i, a = 0;
      for (let c = 0; c < t && (a++, o = o.nextZ, !!o); c++) ;
      let l = t;
      for (; a > 0 || l > 0 && o; ) a !== 0 && (l === 0 || !o || i.z <= o.z) ? (s = i, i = i.nextZ, a--) : (s = o, o = o.nextZ, l--), r ? r.nextZ = s : n = s, s.prevZ = r, r = s;
      i = o;
    }
    r.nextZ = null, t *= 2;
  } while (e > 1);
  return n;
}
function Gc(n, e, t, i, s) {
  return n = (n - t) * s | 0, e = (e - i) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n | e << 1;
}
function X0(n) {
  let e = n, t = n;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== n);
  return t;
}
function Um(n, e, t, i, s, r, o, a) {
  return (s - o) * (e - a) >= (n - o) * (r - a) && (n - o) * (i - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (s - o) * (i - a);
}
function _r(n, e, t, i, s, r, o, a) {
  return !(n === o && e === a) && Um(n, e, t, i, s, r, o, a);
}
function Y0(n, e) {
  return n.next.i !== e.i && n.prev.i !== e.i && !q0(n, e) && (qr(n, e) && qr(e, n) && j0(n, e) && (gt(n.prev, n, e.prev) || gt(n, e.prev, e)) || js(n, e) && gt(n.prev, n, n.next) > 0 && gt(e.prev, e, e.next) > 0);
}
function gt(n, e, t) {
  return (e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y);
}
function js(n, e) {
  return n.x === e.x && n.y === e.y;
}
function Om(n, e, t, i) {
  const s = No(gt(n, e, t)), r = No(gt(n, e, i)), o = No(gt(t, i, n)), a = No(gt(t, i, e));
  return !!(s !== r && o !== a || s === 0 && Do(n, t, e) || r === 0 && Do(n, i, e) || o === 0 && Do(t, n, i) || a === 0 && Do(t, e, i));
}
function Do(n, e, t) {
  return e.x <= Math.max(n.x, t.x) && e.x >= Math.min(n.x, t.x) && e.y <= Math.max(n.y, t.y) && e.y >= Math.min(n.y, t.y);
}
function No(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function q0(n, e) {
  let t = n;
  do {
    if (t.i !== n.i && t.next.i !== n.i && t.i !== e.i && t.next.i !== e.i && Om(t, t.next, n, e)) return true;
    t = t.next;
  } while (t !== n);
  return false;
}
function qr(n, e) {
  return gt(n.prev, n, n.next) < 0 ? gt(n, e, n.next) >= 0 && gt(n, n.prev, e) >= 0 : gt(n, e, n.prev) < 0 || gt(n, n.next, e) < 0;
}
function j0(n, e) {
  let t = n, i = false;
  const s = (n.x + e.x) / 2, r = (n.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && s < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== n);
  return i;
}
function Fm(n, e) {
  const t = Wc(n.i, n.x, n.y), i = Wc(e.i, e.x, e.y), s = n.next, r = e.prev;
  return n.next = e, e.prev = n, t.next = s, s.prev = t, i.next = t, t.prev = i, r.next = i, i.prev = r, i;
}
function Af(n, e, t, i) {
  const s = Wc(n, e, t);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function jr(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function Wc(n, e, t) {
  return { i: n, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function K0(n, e, t, i) {
  let s = 0;
  for (let r = e, o = t - i; r < t; r += i) s += (n[o] - n[r]) * (n[r + 1] + n[o + 1]), o = r;
  return s;
}
class Z0 {
  static triangulate(e, t, i = 2) {
    return D0(e, t, i);
  }
}
class Cr {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let s = t - 1, r = 0; r < t; s = r++) i += e[s].x * e[r].y - e[r].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return Cr.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], s = [], r = [];
    Ef(e), wf(i, e);
    let o = e.length;
    t.forEach(Ef);
    for (let l = 0; l < t.length; l++) s.push(o), o += t[l].length, wf(i, t[l]);
    const a = Z0.triangulate(i, s);
    for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3));
    return r;
  }
}
function Ef(n) {
  const e = n.length;
  e > 2 && n[e - 1].equals(n[0]) && n.pop();
}
function wf(n, e) {
  for (let t = 0; t < e.length; t++) n.push(e[t].x), n.push(e[t].y);
}
class Bm extends xt {
  constructor(e = new I0([new he(0.5, 0.5), new he(-0.5, 0.5), new he(-0.5, -0.5), new he(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e];
    const i = this, s = [], r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a];
      o(c);
    }
    this.setAttribute("position", new Qe(s, 3)), this.setAttribute("uv", new Qe(r, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
      let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, g = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, A = t.UVGenerator !== void 0 ? t.UVGenerator : J0;
      let b, x = false, C, w, R, D;
      p && (b = p.getSpacedPoints(u), x = true, f = false, C = p.computeFrenetFrames(u, false), w = new N(), R = new N(), D = new N()), f || (g = 0, d = 0, m = 0, _ = 0);
      const S = a.extractPoints(c);
      let M = S.shape;
      const I = S.holes;
      if (!Cr.isClockWise(M)) {
        M = M.reverse();
        for (let O = 0, F = I.length; O < F; O++) {
          const H = I[O];
          Cr.isClockWise(H) && (I[O] = H.reverse());
        }
      }
      function X(O) {
        const H = 10000000000000001e-36;
        let j = O[0];
        for (let B = 1; B <= O.length; B++) {
          const y = B % O.length, v = O[y], L = v.x - j.x, k = v.y - j.y, Y = L * L + k * k, q = Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(j.x), Math.abs(j.y)), ce = H * q * q;
          if (Y <= ce) {
            O.splice(y, 1), B--;
            continue;
          }
          j = v;
        }
      }
      X(M), I.forEach(X);
      const J = I.length, te = M;
      for (let O = 0; O < J; O++) {
        const F = I[O];
        M = M.concat(F);
      }
      function Z(O, F, H) {
        return F || console.error("THREE.ExtrudeGeometry: vec does not exist"), O.clone().addScaledVector(F, H);
      }
      const ne = M.length;
      function K(O, F, H) {
        let j, B, y;
        const v = O.x - F.x, L = O.y - F.y, k = H.x - O.x, Y = H.y - O.y, q = v * v + L * L, ce = v * Y - L * k;
        if (Math.abs(ce) > Number.EPSILON) {
          const re = Math.sqrt(q), de = Math.sqrt(k * k + Y * Y), De = F.x - L / re, ae = F.y + v / re, ge = H.x - Y / de, Ce = H.y + k / de, Ne = ((ge - De) * Y - (Ce - ae) * k) / (v * Y - L * k);
          j = De + v * Ne - O.x, B = ae + L * Ne - O.y;
          const pe = j * j + B * B;
          if (pe <= 2) return new he(j, B);
          y = Math.sqrt(pe / 2);
        } else {
          let re = false;
          v > Number.EPSILON ? k > Number.EPSILON && (re = true) : v < -Number.EPSILON ? k < -Number.EPSILON && (re = true) : Math.sign(L) === Math.sign(Y) && (re = true), re ? (j = -L, B = v, y = Math.sqrt(q)) : (j = v, B = L, y = Math.sqrt(q / 2));
        }
        return new he(j / y, B / y);
      }
      const fe = [];
      for (let O = 0, F = te.length, H = F - 1, j = O + 1; O < F; O++, H++, j++) H === F && (H = 0), j === F && (j = 0), fe[O] = K(te[O], te[H], te[j]);
      const xe = [];
      let Se, Le = fe.concat();
      for (let O = 0, F = J; O < F; O++) {
        const H = I[O];
        Se = [];
        for (let j = 0, B = H.length, y = B - 1, v = j + 1; j < B; j++, y++, v++) y === B && (y = 0), v === B && (v = 0), Se[j] = K(H[j], H[y], H[v]);
        xe.push(Se), Le = Le.concat(Se);
      }
      const Ze = [], ie = [];
      for (let O = 0; O < g; O++) {
        const F = O / g, H = d * Math.cos(F * Math.PI / 2), j = m * Math.sin(F * Math.PI / 2) + _;
        for (let B = 0, y = te.length; B < y; B++) {
          const v = Z(te[B], fe[B], j);
          $e(v.x, v.y, -H), F == 0 && Ze.push(v);
        }
        for (let B = 0, y = J; B < y; B++) {
          const v = I[B];
          Se = xe[B];
          const L = [];
          for (let k = 0, Y = v.length; k < Y; k++) {
            const q = Z(v[k], Se[k], j);
            $e(q.x, q.y, -H), F == 0 && L.push(q);
          }
          F == 0 && ie.push(L);
        }
      }
      const ue = Cr.triangulateShape(Ze, ie), be = ue.length, me = m + _;
      for (let O = 0; O < ne; O++) {
        const F = f ? Z(M[O], Le[O], me) : M[O];
        x ? (R.copy(C.normals[0]).multiplyScalar(F.x), w.copy(C.binormals[0]).multiplyScalar(F.y), D.copy(b[0]).add(R).add(w), $e(D.x, D.y, D.z)) : $e(F.x, F.y, 0);
      }
      for (let O = 1; O <= u; O++) for (let F = 0; F < ne; F++) {
        const H = f ? Z(M[F], Le[F], me) : M[F];
        x ? (R.copy(C.normals[O]).multiplyScalar(H.x), w.copy(C.binormals[O]).multiplyScalar(H.y), D.copy(b[O]).add(R).add(w), $e(D.x, D.y, D.z)) : $e(H.x, H.y, h / u * O);
      }
      for (let O = g - 1; O >= 0; O--) {
        const F = O / g, H = d * Math.cos(F * Math.PI / 2), j = m * Math.sin(F * Math.PI / 2) + _;
        for (let B = 0, y = te.length; B < y; B++) {
          const v = Z(te[B], fe[B], j);
          $e(v.x, v.y, h + H);
        }
        for (let B = 0, y = I.length; B < y; B++) {
          const v = I[B];
          Se = xe[B];
          for (let L = 0, k = v.length; L < k; L++) {
            const Y = Z(v[L], Se[L], j);
            x ? $e(Y.x, Y.y + b[u - 1].y, b[u - 1].x + H) : $e(Y.x, Y.y, h + H);
          }
        }
      }
      Pe(), je();
      function Pe() {
        const O = s.length / 3;
        if (f) {
          let F = 0, H = ne * F;
          for (let j = 0; j < be; j++) {
            const B = ue[j];
            P(B[2] + H, B[1] + H, B[0] + H);
          }
          F = u + g * 2, H = ne * F;
          for (let j = 0; j < be; j++) {
            const B = ue[j];
            P(B[0] + H, B[1] + H, B[2] + H);
          }
        } else {
          for (let F = 0; F < be; F++) {
            const H = ue[F];
            P(H[2], H[1], H[0]);
          }
          for (let F = 0; F < be; F++) {
            const H = ue[F];
            P(H[0] + ne * u, H[1] + ne * u, H[2] + ne * u);
          }
        }
        i.addGroup(O, s.length / 3 - O, 0);
      }
      function je() {
        const O = s.length / 3;
        let F = 0;
        Re(te, F), F += te.length;
        for (let H = 0, j = I.length; H < j; H++) {
          const B = I[H];
          Re(B, F), F += B.length;
        }
        i.addGroup(O, s.length / 3 - O, 1);
      }
      function Re(O, F) {
        let H = O.length;
        for (; --H >= 0; ) {
          const j = H;
          let B = H - 1;
          B < 0 && (B = O.length - 1);
          for (let y = 0, v = u + g * 2; y < v; y++) {
            const L = ne * y, k = ne * (y + 1), Y = F + j + L, q = F + B + L, ce = F + B + k, re = F + j + k;
            U(Y, q, ce, re);
          }
        }
      }
      function $e(O, F, H) {
        l.push(O), l.push(F), l.push(H);
      }
      function P(O, F, H) {
        T(O), T(F), T(H);
        const j = s.length / 3, B = A.generateTopUV(i, s, j - 3, j - 2, j - 1);
        se(B[0]), se(B[1]), se(B[2]);
      }
      function U(O, F, H, j) {
        T(O), T(F), T(j), T(F), T(H), T(j);
        const B = s.length / 3, y = A.generateSideWallUV(i, s, B - 6, B - 3, B - 2, B - 1);
        se(y[0]), se(y[1]), se(y[3]), se(y[1]), se(y[2]), se(y[3]);
      }
      function T(O) {
        s.push(l[O * 3 + 0]), s.push(l[O * 3 + 1]), s.push(l[O * 3 + 2]);
      }
      function se(O) {
        r.push(O.x), r.push(O.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, i = this.parameters.options;
    return Q0(t, i, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let r = 0, o = e.shapes.length; r < o; r++) {
      const a = t[e.shapes[r]];
      i.push(a);
    }
    const s = e.options.extrudePath;
    return s !== void 0 && (e.options.extrudePath = new kc[s.type]().fromJSON(s)), new Bm(i, e.options);
  }
}
const J0 = { generateTopUV: function(n, e, t, i, s) {
  const r = e[t * 3], o = e[t * 3 + 1], a = e[i * 3], l = e[i * 3 + 1], c = e[s * 3], u = e[s * 3 + 1];
  return [new he(r, o), new he(a, l), new he(c, u)];
}, generateSideWallUV: function(n, e, t, i, s, r) {
  const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[i * 3], u = e[i * 3 + 1], h = e[i * 3 + 2], f = e[s * 3], d = e[s * 3 + 1], m = e[s * 3 + 2], _ = e[r * 3], g = e[r * 3 + 1], p = e[r * 3 + 2];
  return Math.abs(a - u) < Math.abs(o - c) ? [new he(o, 1 - l), new he(c, 1 - h), new he(f, 1 - m), new he(_, 1 - p)] : [new he(a, 1 - l), new he(u, 1 - h), new he(d, 1 - m), new he(g, 1 - p)];
} };
function Q0(n, e, t) {
  if (t.shapes = [], Array.isArray(n)) for (let i = 0, s = n.length; i < s; i++) {
    const r = n[i];
    t.shapes.push(r.uuid);
  }
  else t.shapes.push(n.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ou extends Uu {
  constructor(e = 1, t = 0) {
    const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], s = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    super(i, s, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new Ou(e.radius, e.detail);
  }
}
class Na extends xt {
  constructor(e = 1, t = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: s };
    const r = e / 2, o = t / 2, a = Math.floor(i), l = Math.floor(s), c = a + 1, u = l + 1, h = e / a, f = t / l, d = [], m = [], _ = [], g = [];
    for (let p = 0; p < u; p++) {
      const A = p * f - o;
      for (let b = 0; b < c; b++) {
        const x = b * h - r;
        m.push(x, -A, 0), _.push(0, 0, 1), g.push(b / a), g.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let A = 0; A < a; A++) {
      const b = A + c * p, x = A + c * (p + 1), C = A + 1 + c * (p + 1), w = A + 1 + c * p;
      d.push(b, x, w), d.push(x, C, w);
    }
    this.setIndex(d), this.setAttribute("position", new Qe(m, 3)), this.setAttribute("normal", new Qe(_, 3)), this.setAttribute("uv", new Qe(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Na(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Fu extends xt {
  constructor(e = 1, t = 32, i = 16, s = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: i, phiStart: s, phiLength: r, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), i = Math.max(2, Math.floor(i));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [], h = new N(), f = new N(), d = [], m = [], _ = [], g = [];
    for (let p = 0; p <= i; p++) {
      const A = [], b = p / i;
      let x = 0;
      p === 0 && o === 0 ? x = 0.5 / t : p === i && l === Math.PI && (x = -0.5 / t);
      for (let C = 0; C <= t; C++) {
        const w = C / t;
        h.x = -e * Math.cos(s + w * r) * Math.sin(o + b * a), h.y = e * Math.cos(o + b * a), h.z = e * Math.sin(s + w * r) * Math.sin(o + b * a), m.push(h.x, h.y, h.z), f.copy(h).normalize(), _.push(f.x, f.y, f.z), g.push(w + x, 1 - b), A.push(c++);
      }
      u.push(A);
    }
    for (let p = 0; p < i; p++) for (let A = 0; A < t; A++) {
      const b = u[p][A + 1], x = u[p][A], C = u[p + 1][A], w = u[p + 1][A + 1];
      (p !== 0 || o > 0) && d.push(b, x, w), (p !== i - 1 || l < Math.PI) && d.push(x, C, w);
    }
    this.setIndex(d), this.setAttribute("position", new Qe(m, 3)), this.setAttribute("normal", new Qe(_, 3)), this.setAttribute("uv", new Qe(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Fu(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class zm extends xt {
  constructor(e = 1, t = 0.4, i = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: s, arc: r }, i = Math.floor(i), s = Math.floor(s);
    const o = [], a = [], l = [], c = [], u = new N(), h = new N(), f = new N();
    for (let d = 0; d <= i; d++) for (let m = 0; m <= s; m++) {
      const _ = m / s * r, g = d / i * Math.PI * 2;
      h.x = (e + t * Math.cos(g)) * Math.cos(_), h.y = (e + t * Math.cos(g)) * Math.sin(_), h.z = t * Math.sin(g), a.push(h.x, h.y, h.z), u.x = e * Math.cos(_), u.y = e * Math.sin(_), f.subVectors(h, u).normalize(), l.push(f.x, f.y, f.z), c.push(m / s), c.push(d / i);
    }
    for (let d = 1; d <= i; d++) for (let m = 1; m <= s; m++) {
      const _ = (s + 1) * d + m - 1, g = (s + 1) * (d - 1) + m - 1, p = (s + 1) * (d - 1) + m, A = (s + 1) * d + m;
      o.push(_, g, A), o.push(g, p, A);
    }
    this.setIndex(o), this.setAttribute("position", new Qe(a, 3)), this.setAttribute("normal", new Qe(l, 3)), this.setAttribute("uv", new Qe(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new zm(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class wE extends xt {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
      const t = [], i = /* @__PURE__ */ new Set(), s = new N(), r = new N();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const h = l[c], f = h.start, d = h.count;
          for (let m = f, _ = f + d; m < _; m += 3) for (let g = 0; g < 3; g++) {
            const p = a.getX(m + g), A = a.getX(m + (g + 1) % 3);
            s.fromBufferAttribute(o, p), r.fromBufferAttribute(o, A), Rf(s, r, i) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
          }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, l = o.count / 3; a < l; a++) for (let c = 0; c < 3; c++) {
          const u = 3 * a + c, h = 3 * a + (c + 1) % 3;
          s.fromBufferAttribute(o, u), r.fromBufferAttribute(o, h), Rf(s, r, i) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
        }
      }
      this.setAttribute("position", new Qe(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Rf(n, e, t) {
  const i = `${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`, s = `${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;
  return t.has(i) === true || t.has(s) === true ? false : (t.add(i), t.add(s), true);
}
class $0 extends sn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class Bu extends vn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new we(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new we(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ia, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Wn extends Bu {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new he(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Ge(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new we(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new we(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new we(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class RE extends vn {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new we(16777215), this.specular = new we(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new we(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ia, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.combine = gu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class CE extends vn {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ia, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class ey extends vn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = uv, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class ty extends vn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function Uo(n, e) {
  return !n || n.constructor === e ? n : typeof e.BYTES_PER_ELEMENT == "number" ? new e(n) : Array.prototype.slice.call(n);
}
function ny(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function iy(n) {
  function e(s, r) {
    return n[s] - n[r];
  }
  const t = n.length, i = new Array(t);
  for (let s = 0; s !== t; ++s) i[s] = s;
  return i.sort(e), i;
}
function Cf(n, e, t) {
  const i = n.length, s = new n.constructor(i);
  for (let r = 0, o = 0; o !== i; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l) s[o++] = n[a + l];
  }
  return s;
}
function Hm(n, e, t, i) {
  let s = 1, r = n[0];
  for (; r !== void 0 && r[i] === void 0; ) r = n[s++];
  if (r === void 0) return;
  let o = r[i];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[i], o !== void 0 && (e.push(r.time), t.push(...o)), r = n[s++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[i], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = n[s++];
  while (r !== void 0);
  else do
    o = r[i], o !== void 0 && (e.push(r.time), t.push(o)), r = n[s++];
  while (r !== void 0);
}
class $r {
  constructor(e, t, i, s) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new t.constructor(i), this.sampleValues = t, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let i = this._cachedIndex, s = t[i], r = t[i - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < s)) {
            for (let a = i + 2; ; ) {
              if (s === void 0) {
                if (e < r) break i;
                return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
              }
              if (i === a) break;
              if (r = s, s = t[++i], e < s) break t;
            }
            o = t.length;
            break n;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (i = 2, r = a);
            for (let l = i - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === l) break;
              if (s = r, r = t[--i - 1], e >= r) break t;
            }
            o = i, i = 0;
            break n;
          }
          break e;
        }
        for (; i < o; ) {
          const a = i + o >>> 1;
          e < t[a] ? o = a : i = a + 1;
        }
        if (s = t[i], r = t[i - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (s === void 0) return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
      }
      this._cachedIndex = i, this.intervalChanged_(i, r, s);
    }
    return this.interpolate_(i, r, e, s);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, r = e * s;
    for (let o = 0; o !== s; ++o) t[o] = i[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class sy extends $r {
  constructor(e, t, i, s) {
    super(e, t, i, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Rs, endingEnd: Rs };
  }
  intervalChanged_(e, t, i) {
    const s = this.parameterPositions;
    let r = e - 2, o = e + 1, a = s[r], l = s[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Cs:
        r = e, a = 2 * t - i;
        break;
      case pa:
        r = s.length - 2, a = t + s[r] - s[r + 1];
        break;
      default:
        r = e, a = i;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case Cs:
        o = e, l = 2 * i - t;
        break;
      case pa:
        o = 1, l = i + s[1] - s[0];
        break;
      default:
        o = e - 1, l = t;
    }
    const c = (i - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - i), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, d = this._weightNext, m = (i - t) / (s - t), _ = m * m, g = _ * m, p = -f * g + 2 * f * _ - f * m, A = (1 + f) * g + (-1.5 - 2 * f) * _ + (-0.5 + f) * m + 1, b = (-1 - d) * g + (1.5 + d) * _ + 0.5 * m, x = d * g - d * _;
    for (let C = 0; C !== a; ++C) r[C] = p * o[u + C] + A * o[c + C] + b * o[l + C] + x * o[h + C];
    return r;
  }
}
class Vm extends $r {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (i - t) / (s - t), h = 1 - u;
    for (let f = 0; f !== a; ++f) r[f] = o[c + f] * h + o[l + f] * u;
    return r;
  }
}
class ry extends $r {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class In {
  constructor(e, t, i, s) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Uo(t, this.TimeBufferType), this.values = Uo(i, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let i;
    if (t.toJSON !== this.toJSON) i = t.toJSON(e);
    else {
      i = { name: e.name, times: Uo(e.times, Array), values: Uo(e.values, Array) };
      const s = e.getInterpolation();
      s !== e.DefaultInterpolation && (i.interpolation = s);
    }
    return i.type = e.ValueTypeName, i;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new ry(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Vm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new sy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case kr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Gr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case $a:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(i);
      return console.warn("THREE.KeyframeTrack:", i), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return kr;
      case this.InterpolantFactoryMethodLinear:
        return Gr;
      case this.InterpolantFactoryMethodSmooth:
        return $a;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let i = 0, s = t.length; i !== s; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let i = 0, s = t.length; i !== s; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    const i = this.times, s = i.length;
    let r = 0, o = s - 1;
    for (; r !== s && i[r] < e; ) ++r;
    for (; o !== -1 && i[o] > t; ) --o;
    if (++o, r !== 0 || o !== s) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = i.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const i = this.times, s = this.values, r = i.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = i[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
        break;
      }
      o = l;
    }
    if (s !== void 0 && ny(s)) for (let a = 0, l = s.length; a !== l; ++a) {
      const c = s[a];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), i = this.getValueSize(), s = this.getInterpolation() === $a, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = false;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0])) if (s) l = true;
      else {
        const h = a * i, f = h - i, d = h + i;
        for (let m = 0; m !== i; ++m) {
          const _ = t[h + m];
          if (_ !== t[f + m] || _ !== t[d + m]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const h = a * i, f = o * i;
          for (let d = 0; d !== i; ++d) t[f + d] = t[h + d];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * i, l = o * i, c = 0; c !== i; ++c) t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * i)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), i = this.constructor, s = new i(this.name, e, t);
    return s.createInterpolant = this.createInterpolant, s;
  }
}
In.prototype.ValueTypeName = "";
In.prototype.TimeBufferType = Float32Array;
In.prototype.ValueBufferType = Float32Array;
In.prototype.DefaultInterpolation = Gr;
class Qs extends In {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
Qs.prototype.ValueTypeName = "bool";
Qs.prototype.ValueBufferType = Array;
Qs.prototype.DefaultInterpolation = kr;
Qs.prototype.InterpolantFactoryMethodLinear = void 0;
Qs.prototype.InterpolantFactoryMethodSmooth = void 0;
class km extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
km.prototype.ValueTypeName = "color";
class Ks extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
Ks.prototype.ValueTypeName = "number";
class oy extends $r {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (i - t) / (s - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4) xn.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class Zs extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  InterpolantFactoryMethodLinear(e) {
    return new oy(this.times, this.values, this.getValueSize(), e);
  }
}
Zs.prototype.ValueTypeName = "quaternion";
Zs.prototype.InterpolantFactoryMethodSmooth = void 0;
class $s extends In {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
$s.prototype.ValueTypeName = "string";
$s.prototype.ValueBufferType = Array;
$s.prototype.DefaultInterpolation = kr;
$s.prototype.InterpolantFactoryMethodLinear = void 0;
$s.prototype.InterpolantFactoryMethodSmooth = void 0;
class Js extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
Js.prototype.ValueTypeName = "vector";
class Xc {
  constructor(e = "", t = -1, i = [], s = Tu) {
    this.name = e, this.tracks = i, this.duration = t, this.blendMode = s, this.uuid = _n(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], i = e.tracks, s = 1 / (e.fps || 1);
    for (let o = 0, a = i.length; o !== a; ++o) t.push(ly(i[o]).scale(s));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], i = e.tracks, s = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, o = i.length; r !== o; ++r) t.push(In.toJSON(i[r]));
    return s;
  }
  static CreateFromMorphTargetSequence(e, t, i, s) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const u = iy(l);
      l = Cf(l, 1, u), c = Cf(c, 1, u), !s && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Ks(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / i));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let i = e;
    if (!Array.isArray(e)) {
      const s = e;
      i = s.geometry && s.geometry.animations || s.animations;
    }
    for (let s = 0; s < i.length; s++) if (i[s].name === t) return i[s];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, i) {
    const s = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let f = s[h];
        f || (s[h] = f = []), f.push(c);
      }
    }
    const o = [];
    for (const a in s) o.push(this.CreateFromMorphTargetSequence(a, s[a], t, i));
    return o;
  }
  static parseAnimation(e, t) {
    if (console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const i = function(h, f, d, m, _) {
      if (d.length !== 0) {
        const g = [], p = [];
        Hm(d, g, p, m), g.length !== 0 && _.push(new h(f, g, p));
      }
    }, s = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const f = c[h].keys;
      if (!(!f || f.length === 0)) if (f[0].morphTargets) {
        const d = {};
        let m;
        for (m = 0; m < f.length; m++) if (f[m].morphTargets) for (let _ = 0; _ < f[m].morphTargets.length; _++) d[f[m].morphTargets[_]] = -1;
        for (const _ in d) {
          const g = [], p = [];
          for (let A = 0; A !== f[m].morphTargets.length; ++A) {
            const b = f[m];
            g.push(b.time), p.push(b.morphTarget === _ ? 1 : 0);
          }
          s.push(new Ks(".morphTargetInfluence[" + _ + "]", g, p));
        }
        l = d.length * o;
      } else {
        const d = ".bones[" + t[h].name + "]";
        i(Js, d + ".position", f, "pos", s), i(Zs, d + ".quaternion", f, "rot", s), i(Js, d + ".scale", f, "scl", s);
      }
    }
    return s.length === 0 ? null : new this(r, l, s, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = this.tracks[i];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function ay(n) {
  switch (n.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ks;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Js;
    case "color":
      return km;
    case "quaternion":
      return Zs;
    case "bool":
    case "boolean":
      return Qs;
    case "string":
      return $s;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + n);
}
function ly(n) {
  if (n.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = ay(n.type);
  if (n.times === void 0) {
    const t = [], i = [];
    Hm(n.keys, t, i, "value"), n.times = t, n.values = i;
  }
  return e.parse !== void 0 ? e.parse(n) : new e(n.name, n.times, n.values, n.interpolation);
}
const wi = { enabled: false, files: {}, add: function(n, e) {
  this.enabled !== false && (this.files[n] = e);
}, get: function(n) {
  if (this.enabled !== false) return this.files[n];
}, remove: function(n) {
  delete this.files[n];
}, clear: function() {
  this.files = {};
} };
class cy {
  constructor(e, t, i) {
    const s = this;
    let r = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(u) {
      a++, r === false && s.onStart !== void 0 && s.onStart(u, o, a), r = true;
    }, this.itemEnd = function(u) {
      o++, s.onProgress !== void 0 && s.onProgress(u, o, a), o === a && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(u) {
      s.onError !== void 0 && s.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = c.length; h < f; h += 2) {
        const d = c[h], m = c[h + 1];
        if (d.global && (d.lastIndex = 0), d.test(u)) return m;
      }
      return null;
    };
  }
}
const uy = new cy();
class ls {
  constructor(e) {
    this.manager = e !== void 0 ? e : uy, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(s, r) {
      i.load(e, s, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
ls.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Qn = {};
class hy extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class zu extends ls {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "";
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = wi.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (Qn[e] !== void 0) {
      Qn[e].push({ onLoad: t, onProgress: i, onError: s });
      return;
    }
    Qn[e] = [], Qn[e].push({ onLoad: t, onProgress: i, onError: s });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const u = Qn[e], h = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = f ? parseInt(f) : 0, m = d !== 0;
        let _ = 0;
        const g = new ReadableStream({ start(p) {
          A();
          function A() {
            h.read().then(({ done: b, value: x }) => {
              if (b) p.close();
              else {
                _ += x.byteLength;
                const C = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: d });
                for (let w = 0, R = u.length; w < R; w++) {
                  const D = u[w];
                  D.onProgress && D.onProgress(C);
                }
                p.enqueue(x), A();
              }
            }, (b) => {
              p.error(b);
            });
          }
        } });
        return new Response(g);
      } else throw new hy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return c.json();
        default:
          if (a === "") return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, d = new TextDecoder(f);
            return c.arrayBuffer().then((m) => d.decode(m));
          }
      }
    }).then((c) => {
      wi.add(e, c);
      const u = Qn[e];
      delete Qn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const u = Qn[e];
      if (u === void 0) throw this.manager.itemError(e), c;
      delete Qn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onError && d.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class fy extends ls {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = wi.get(e);
    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(o), r.manager.itemEnd(e);
    }, 0), o;
    const a = Wr("img");
    function l() {
      u(), wi.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), s && s(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class dy extends ls {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = new At(), o = new fy(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
    }, i, s), r;
  }
}
class eo extends ut {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new we(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class PE extends eo {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.groundColor = new we(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const wl = new ke(), Pf = new N(), Lf = new N();
class Hu {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new he(512, 512), this.map = null, this.mapPass = null, this.matrix = new ke(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Lu(), this._frameExtents = new he(1, 1), this._viewportCount = 1, this._viewports = [new nt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    Pf.setFromMatrixPosition(e.matrixWorld), t.position.copy(Pf), Lf.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Lf), t.updateMatrixWorld(), wl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(wl), i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(wl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class py extends Hu {
  constructor() {
    super(new en(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, i = Ys * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (i !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = i, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class my extends eo {
  constructor(e, t, i = 0, s = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.target = new ut(), this.distance = i, this.angle = s, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new py();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const If = new ke(), dr = new N(), Rl = new N();
class gy extends Hu {
  constructor() {
    super(new en(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new he(4, 2), this._viewportCount = 6, this._viewports = [new nt(2, 1, 1, 1), new nt(0, 1, 1, 1), new nt(3, 1, 1, 1), new nt(1, 1, 1, 1), new nt(3, 0, 1, 1), new nt(1, 0, 1, 1)], this._cubeDirections = [new N(1, 0, 0), new N(-1, 0, 0), new N(0, 0, 1), new N(0, 0, -1), new N(0, 1, 0), new N(0, -1, 0)], this._cubeUps = [new N(0, 1, 0), new N(0, 1, 0), new N(0, 1, 0), new N(0, 1, 0), new N(0, 0, 1), new N(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const i = this.camera, s = this.matrix, r = e.distance || i.far;
    r !== i.far && (i.far = r, i.updateProjectionMatrix()), dr.setFromMatrixPosition(e.matrixWorld), i.position.copy(dr), Rl.copy(i.position), Rl.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(Rl), i.updateMatrixWorld(), s.makeTranslation(-dr.x, -dr.y, -dr.z), If.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(If);
  }
}
class _y extends eo {
  constructor(e, t, i = 0, s = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = i, this.decay = s, this.shadow = new gy();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Ua extends Ru {
  constructor(e = -1, t = 1, i = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, s, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = i - e, o = i + e, a = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class xy extends Hu {
  constructor() {
    super(new Ua(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class vy extends eo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.target = new ut(), this.shadow = new xy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class LE extends eo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class Pr {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class IE extends xt {
  constructor() {
    super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = true, e;
  }
}
class yy extends ls {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = wi.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          s && s(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return wi.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      s && s(c), wi.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    wi.add(e, l), r.manager.itemStart(e);
  }
}
let Oo;
class Gm {
  static getContext() {
    return Oo === void 0 && (Oo = new (window.AudioContext || window.webkitAudioContext)()), Oo;
  }
  static setContext(e) {
    Oo = e;
  }
}
class DE extends ls {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = this, o = new zu(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      try {
        const c = l.slice(0);
        Gm.getContext().decodeAudioData(c, function(h) {
          t(h);
        }).catch(a);
      } catch (c) {
        a(c);
      }
    }, i, s);
    function a(l) {
      s ? s(l) : console.error(l), r.manager.itemError(e);
    }
  }
}
class My extends en {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
  }
}
class Wm {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Df(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Df();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Df() {
  return performance.now();
}
const Xi = new N(), Nf = new xn(), Sy = new N(), Yi = new N();
class NE extends ut {
  constructor() {
    super(), this.type = "AudioListener", this.context = Gm.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Wm();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, i = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Xi, Nf, Sy), Yi.set(0, 0, -1).applyQuaternion(Nf), t.positionX) {
      const s = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Xi.x, s), t.positionY.linearRampToValueAtTime(Xi.y, s), t.positionZ.linearRampToValueAtTime(Xi.z, s), t.forwardX.linearRampToValueAtTime(Yi.x, s), t.forwardY.linearRampToValueAtTime(Yi.y, s), t.forwardZ.linearRampToValueAtTime(Yi.z, s), t.upX.linearRampToValueAtTime(i.x, s), t.upY.linearRampToValueAtTime(i.y, s), t.upZ.linearRampToValueAtTime(i.z, s);
    } else t.setPosition(Xi.x, Xi.y, Xi.z), t.setOrientation(Yi.x, Yi.y, Yi.z, i.x, i.y, i.z);
  }
}
let UE = class extends ut {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this._connected !== false) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this._connected = false, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === true ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    return this.detune = e, this.isPlaying === true && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false, this._progress = 0;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  copy(e, t) {
    return super.copy(e, t), e.sourceType !== "buffer" ? (console.warn("THREE.Audio: Audio source type cannot be copied."), this) : (this.autoplay = e.autoplay, this.buffer = e.buffer, this.detune = e.detune, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.offset = e.offset, this.duration = e.duration, this.playbackRate = e.playbackRate, this.hasPlaybackControl = e.hasPlaybackControl, this.sourceType = e.sourceType, this.filters = e.filters.slice(), this);
  }
  clone(e) {
    return new this.constructor(this.listener).copy(this, e);
  }
};
class by {
  constructor(e, t, i) {
    this.binding = e, this.valueSize = i;
    let s, r, o;
    switch (t) {
      case "quaternion":
        s = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(i * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        s = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(i * 5);
        break;
      default:
        s = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(i * 5);
    }
    this._mixBufferRegion = s, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const i = this.buffer, s = this.valueSize, r = e * s + s;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== s; ++a) i[r + a] = i[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(i, r, 0, a, s);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(e) {
    const t = this.buffer, i = this.valueSize, s = i * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, s, 0, e, i), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, i = this.buffer, s = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(i, s, l, 1 - r, t);
    }
    o > 0 && this._mixBufferRegionAdditive(i, s, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (i[l] !== i[l + t]) {
      a.setValue(i, s);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, i = this.valueSize, s = i * this._origIndex;
    e.getValue(t, s);
    for (let r = i, o = s; r !== o; ++r) t[r] = t[s + r % i];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let i = e; i < t; i++) this.buffer[i] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let i = 0; i < this.valueSize; i++) this.buffer[t + i] = this.buffer[e + i];
  }
  _select(e, t, i, s, r) {
    if (s >= 0.5) for (let o = 0; o !== r; ++o) e[t + o] = e[i + o];
  }
  _slerp(e, t, i, s) {
    xn.slerpFlat(e, t, e, t, e, i, s);
  }
  _slerpAdditive(e, t, i, s, r) {
    const o = this._workIndex * r;
    xn.multiplyQuaternionsFlat(e, o, e, t, e, i), xn.slerpFlat(e, t, e, t, e, o, s);
  }
  _lerp(e, t, i, s, r) {
    const o = 1 - s;
    for (let a = 0; a !== r; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[i + a] * s;
    }
  }
  _lerpAdditive(e, t, i, s, r) {
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] + e[i + o] * s;
    }
  }
}
const Vu = "\\[\\]\\.:\\/", Ty = new RegExp("[" + Vu + "]", "g"), ku = "[^" + Vu + "]", Ay = "[^" + Vu.replace("\\.", "") + "]", Ey = /((?:WC+[\/:])*)/.source.replace("WC", ku), wy = /(WCOD+)?/.source.replace("WCOD", Ay), Ry = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ku), Cy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ku), Py = new RegExp("^" + Ey + wy + Ry + Cy + "$"), Ly = ["material", "materials", "bones", "map"];
class Iy {
  constructor(e, t, i) {
    const s = i || ot.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, s);
  }
  getValue(e, t) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_, s = this._bindings[i];
    s !== void 0 && s.getValue(e, t);
  }
  setValue(e, t) {
    const i = this._bindings;
    for (let s = this._targetGroup.nCachedObjects_, r = i.length; s !== r; ++s) i[s].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind();
  }
}
class ot {
  constructor(e, t, i) {
    this.path = t, this.parsedPath = i || ot.parseTrackName(t), this.node = ot.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, i) {
    return e && e.isAnimationObjectGroup ? new ot.Composite(e, t, i) : new ot(e, t, i);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Ty, "");
  }
  static parseTrackName(e) {
    const t = Py.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const i = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, s = i.nodeName && i.nodeName.lastIndexOf(".");
    if (s !== void 0 && s !== -1) {
      const r = i.nodeName.substring(s + 1);
      Ly.indexOf(r) !== -1 && (i.nodeName = i.nodeName.substring(0, s), i.objectName = r);
    }
    if (i.propertyName === null || i.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return i;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const i = e.skeleton.getBoneByName(t);
      if (i !== void 0) return i;
    }
    if (e.children) {
      const i = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t) return a;
          const l = i(a.children);
          if (l) return l;
        }
        return null;
      }, s = i(e.children);
      if (s) return s;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) e[t++] = i[s];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, i = t.objectName, s = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = ot.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let c = t.objectIndex;
      switch (i) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++) if (e[u].name === c) {
            c = u;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[i] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[i];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[s];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (s === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = s;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ot.Composite = Iy;
ot.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ot.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ot.prototype.GetterByBindingType = [ot.prototype._getValue_direct, ot.prototype._getValue_array, ot.prototype._getValue_arrayElement, ot.prototype._getValue_toArray];
ot.prototype.SetterByBindingTypeAndVersioning = [[ot.prototype._setValue_direct, ot.prototype._setValue_direct_setNeedsUpdate, ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_array, ot.prototype._setValue_array_setNeedsUpdate, ot.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_arrayElement, ot.prototype._setValue_arrayElement_setNeedsUpdate, ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_fromArray, ot.prototype._setValue_fromArray_setNeedsUpdate, ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Dy {
  constructor(e, t, i = null, s = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = i, this.blendMode = s;
    const r = t.tracks, o = r.length, a = new Array(o), l = { endingStart: Rs, endingEnd: Rs };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ov, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, i = false) {
    if (e.fadeOut(t), this.fadeIn(t), i === true) {
      const s = this._clip.duration, r = e._clip.duration, o = r / s, a = s / r;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, i = false) {
    return e.crossFadeFrom(this, t, i);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, i) {
    const s = this._mixer, r = s.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = s._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = r, l[1] = r + i, c[0] = e / o, c[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, i, s) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * i;
      l < 0 || i === 0 ? t = 0 : (this._startTime = null, t = i * l);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case lv:
          for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case Tu:
        default:
          for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulate(s, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const i = this._weightInterpolant;
      if (i !== null) {
        const s = i.evaluate(e)[0];
        t *= s, e > i.parameterPositions[1] && (this.stopFading(), s === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const i = this._timeScaleInterpolant;
      if (i !== null) {
        const s = i.evaluate(e)[0];
        t *= s, e > i.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, i = this.loop;
    let s = this.time + e, r = this._loopCount;
    const o = i === av;
    if (e === 0) return r === -1 ? s : o && (r & 1) === 1 ? t - s : s;
    if (i === rv) {
      r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (s >= t) s = t;
        else if (s < 0) s = 0;
        else {
          this.time = s;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), s >= t || s < 0) {
        const a = Math.floor(s / t);
        s -= t * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, s = e > 0 ? t : 0, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(false, false, o);
          this._loopCount = r, this.time = s, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a });
        }
      } else this.time = s;
      if (o && (r & 1) === 1) return t - s;
    }
    return s;
  }
  _setEndings(e, t, i) {
    const s = this._interpolantSettings;
    i ? (s.endingStart = Cs, s.endingEnd = Cs) : (e ? s.endingStart = this.zeroSlopeAtStart ? Cs : Rs : s.endingStart = pa, t ? s.endingEnd = this.zeroSlopeAtEnd ? Cs : Rs : s.endingEnd = pa);
  }
  _scheduleFading(e, t, i) {
    const s = this._mixer, r = s.time;
    let o = this._weightInterpolant;
    o === null && (o = s._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = i, this;
  }
}
const Ny = new Float32Array(1);
class FE extends Ui {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const i = e._localRoot || this._root, s = e._clip.tracks, r = s.length, o = e._propertyBindings, a = e._interpolants, l = i.uuid, c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && (u = {}, c[l] = u);
    for (let h = 0; h !== r; ++h) {
      const f = s[h], d = f.name;
      let m = u[d];
      if (m !== void 0) ++m.referenceCount, o[h] = m;
      else {
        if (m = o[h], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, d));
          continue;
        }
        const _ = t && t._propertyBindings[h].binding.parsedPath;
        m = new by(ot.create(i, d, _), f.ValueTypeName, f.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, d), o[h] = m;
      }
      a[h].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const i = (e._localRoot || this._root).uuid, s = e._clip.uuid, r = this._actionsByClip[s];
        this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, s, i);
      }
      const t = e._propertyBindings;
      for (let i = 0, s = t.length; i !== s; ++i) {
        const r = t[i];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let i = 0, s = t.length; i !== s; ++i) {
        const r = t[i];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, i) {
    const s = this._actions, r = this._actionsByClip;
    let o = r[t];
    if (o === void 0) o = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = s.length, s.push(e), o.actionByRoot[i] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, i = t[t.length - 1], s = e._cacheIndex;
    i._cacheIndex = s, t[s] = i, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
    c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
    const h = a.actionByRoot, f = (e._localRoot || this._root).uuid;
    delete h[f], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let i = 0, s = t.length; i !== s; ++i) {
      const r = t[i];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, i = e._cacheIndex, s = this._nActiveActions++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, i = e._cacheIndex, s = --this._nActiveActions, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _addInactiveBinding(e, t, i) {
    const s = this._bindingsByRootAndName, r = this._bindings;
    let o = s[t];
    o === void 0 && (o = {}, s[t] = o), o[i] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, i = e.binding, s = i.rootNode.uuid, r = i.path, o = this._bindingsByRootAndName, a = o[s], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[s];
  }
  _lendBinding(e) {
    const t = this._bindings, i = e._cacheIndex, s = this._nActiveBindings++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, i = e._cacheIndex, s = --this._nActiveBindings, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let i = e[t];
    return i === void 0 && (i = new Vm(new Float32Array(2), new Float32Array(2), 1, Ny), i.__cacheIndex = t, e[t] = i), i;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, i = e.__cacheIndex, s = --this._nActiveControlInterpolants, r = t[s];
    e.__cacheIndex = s, t[s] = e, r.__cacheIndex = i, t[i] = r;
  }
  clipAction(e, t, i) {
    const s = t || this._root, r = s.uuid;
    let o = typeof e == "string" ? Xc.findByName(s, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (i === void 0 && (o !== null ? i = o.blendMode : i = Tu), l !== void 0) {
      const h = l.actionByRoot[r];
      if (h !== void 0 && h.blendMode === i) return h;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new Dy(this, o, t, i);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  existingAction(e, t) {
    const i = t || this._root, s = i.uuid, r = typeof e == "string" ? Xc.findByName(i, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[s] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let i = t - 1; i >= 0; --i) e[i].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, i = this._nActiveActions, s = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== i; ++c) t[c]._update(s, e, r, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, i = e.uuid, s = this._actionsByClip, r = s[i];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const u = c._cacheIndex, h = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = u, t[u] = h, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete s[i];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, i = this._actionsByClip;
    for (const o in i) {
      const a = i[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const s = this._bindingsByRootAndName, r = s[t];
    if (r !== void 0) for (const o in r) {
      const a = r[o];
      a.restoreOriginalState(), this._removeInactiveBinding(a);
    }
  }
  uncacheAction(e, t) {
    const i = this.existingAction(e, t);
    i !== null && (this._deactivateAction(i), this._removeInactiveAction(i));
  }
}
class BE extends Sm {
  constructor(e, t, i = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = true, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
const Uf = new ke();
class zE {
  constructor(e, t, i = 0, s = 1 / 0) {
    this.ray = new Jr(e, t), this.near = i, this.far = s, this.camera = null, this.layers = new wu(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Uf.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Uf), this;
  }
  intersectObject(e, t = true, i = []) {
    return Yc(e, this, i, t), i.sort(Of), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let s = 0, r = e.length; s < r; s++) Yc(e[s], this, i, t);
    return i.sort(Of), i;
  }
}
function Of(n, e) {
  return n.distance - e.distance;
}
function Yc(n, e, t, i) {
  let s = true;
  if (n.layers.test(e.layers) && n.raycast(e, t) === false && (s = false), s === true && i === true) {
    const r = n.children;
    for (let o = 0, a = r.length; o < a; o++) Yc(r[o], e, t, true);
  }
}
class HE {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.phi = t, this.theta = i;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Ge(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(Ge(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ff = new N(), Fo = new N();
class VE {
  constructor(e = new N(), t = new N()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    Ff.subVectors(e, this.start), Fo.subVectors(this.end, this.start);
    const i = Fo.dot(Fo);
    let r = Fo.dot(Ff) / i;
    return t && (r = Ge(r, 0, 1)), r;
  }
  closestPointToPoint(e, t, i) {
    const s = this.closestPointToPointParameter(e, t);
    return this.delta(i).multiplyScalar(s).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class kE extends Vt {
  constructor(e, t, i) {
    const s = new Fu(t, 4, 2), r = new ri({ wireframe: true, fog: false, toneMapped: false });
    super(s, r), this.light = e, this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = false, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Uy = new N(), Bf = new we(), zf = new we();
class GE extends ut {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "HemisphereLightHelper";
    const s = new Ou(t);
    s.rotateY(Math.PI * 0.5), this.material = new ri({ wireframe: true, fog: false, toneMapped: false }), this.color === void 0 && (this.material.vertexColors = true);
    const r = s.getAttribute("position"), o = new Float32Array(r.count * 3);
    s.setAttribute("color", new Ut(o, 3)), this.add(new Vt(s, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Bf.copy(this.light.color), zf.copy(this.light.groundColor);
      for (let i = 0, s = t.count; i < s; i++) {
        const r = i < s / 2 ? Bf : zf;
        t.setXYZ(i, r.r, r.g, r.b);
      }
      t.needsUpdate = true;
    }
    this.light.updateWorldMatrix(true, false), e.lookAt(Uy.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
const Hf = new N(), Bo = new N(), Vf = new N();
class WE extends ut {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let s = new xt();
    s.setAttribute("position", new Qe([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const r = new Da({ fog: false, toneMapped: false });
    this.lightPlane = new Xr(s, r), this.add(this.lightPlane), s = new xt(), s.setAttribute("position", new Qe([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Xr(s, r), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), Hf.setFromMatrixPosition(this.light.matrixWorld), Bo.setFromMatrixPosition(this.light.target.matrixWorld), Vf.subVectors(Bo, Hf), this.lightPlane.lookAt(Bo), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Bo), this.targetLine.scale.z = Vf.length();
  }
}
const zo = new N(), Mt = new Ru();
class XE extends Am {
  constructor(e) {
    const t = new xt(), i = new Da({ color: 16777215, vertexColors: true, toneMapped: false }), s = [], r = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, _) {
      l(m), l(_);
    }
    function l(m) {
      s.push(0, 0, 0), r.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(s.length / 3 - 1);
    }
    t.setAttribute("position", new Qe(s, 3)), t.setAttribute("color", new Qe(r, 3)), super(t, i), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.pointMap = o, this.update();
    const c = new we(16755200), u = new we(16711680), h = new we(43775), f = new we(16777215), d = new we(3355443);
    this.setColors(c, u, h, f, d);
  }
  setColors(e, t, i, s, r) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, i.r, i.g, i.b), a.setXYZ(33, i.r, i.g, i.b), a.setXYZ(34, i.r, i.g, i.b), a.setXYZ(35, i.r, i.g, i.b), a.setXYZ(36, i.r, i.g, i.b), a.setXYZ(37, i.r, i.g, i.b), a.setXYZ(38, s.r, s.g, s.b), a.setXYZ(39, s.r, s.g, s.b), a.setXYZ(40, r.r, r.g, r.b), a.setXYZ(41, r.r, r.g, r.b), a.setXYZ(42, r.r, r.g, r.b), a.setXYZ(43, r.r, r.g, r.b), a.setXYZ(44, r.r, r.g, r.b), a.setXYZ(45, r.r, r.g, r.b), a.setXYZ(46, r.r, r.g, r.b), a.setXYZ(47, r.r, r.g, r.b), a.setXYZ(48, r.r, r.g, r.b), a.setXYZ(49, r.r, r.g, r.b), a.needsUpdate = true;
  }
  update() {
    const e = this.geometry, t = this.pointMap, i = 1, s = 1;
    Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    const r = this.camera.coordinateSystem === zn ? -1 : 0;
    St("c", t, e, Mt, 0, 0, r), St("t", t, e, Mt, 0, 0, 1), St("n1", t, e, Mt, -1, -1, r), St("n2", t, e, Mt, i, -1, r), St("n3", t, e, Mt, -1, s, r), St("n4", t, e, Mt, i, s, r), St("f1", t, e, Mt, -1, -1, 1), St("f2", t, e, Mt, i, -1, 1), St("f3", t, e, Mt, -1, s, 1), St("f4", t, e, Mt, i, s, 1), St("u1", t, e, Mt, i * 0.7, s * 1.1, r), St("u2", t, e, Mt, -1 * 0.7, s * 1.1, r), St("u3", t, e, Mt, 0, s * 2, r), St("cf1", t, e, Mt, -1, 0, 1), St("cf2", t, e, Mt, i, 0, 1), St("cf3", t, e, Mt, 0, -1, 1), St("cf4", t, e, Mt, 0, s, 1), St("cn1", t, e, Mt, -1, 0, r), St("cn2", t, e, Mt, i, 0, r), St("cn3", t, e, Mt, 0, -1, r), St("cn4", t, e, Mt, 0, s, r), e.getAttribute("position").needsUpdate = true;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function St(n, e, t, i, s, r, o) {
  zo.set(s, r, o).unproject(i);
  const a = e[n];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, u = a.length; c < u; c++) l.setXYZ(a[c], zo.x, zo.y, zo.z);
  }
}
class YE extends Ui {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function kf(n, e, t, i) {
  const s = Oy(i);
  switch (t) {
    case om:
      return n * e;
    case lm:
      return n * e;
    case cm:
      return n * e * 2;
    case yu:
      return n * e / s.components * s.byteLength;
    case Mu:
      return n * e / s.components * s.byteLength;
    case um:
      return n * e * 2 / s.components * s.byteLength;
    case Su:
      return n * e * 2 / s.components * s.byteLength;
    case am:
      return n * e * 3 / s.components * s.byteLength;
    case mn:
      return n * e * 4 / s.components * s.byteLength;
    case bu:
      return n * e * 4 / s.components * s.byteLength;
    case Qo:
    case $o:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ea:
    case ta:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case dc:
    case mc:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case fc:
    case pc:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    case gc:
    case _c:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case xc:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case vc:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case yc:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Mc:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Sc:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case bc:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Tc:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ac:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ec:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case wc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Rc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Cc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Pc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Lc:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ic:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case na:
    case Dc:
    case Nc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case hm:
    case Uc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Oc:
    case Fc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Oy(n) {
  switch (n) {
    case ci:
    case im:
      return { byteLength: 1, components: 1 };
    case Br:
    case sm:
    case Li:
      return { byteLength: 2, components: 1 };
    case xu:
    case vu:
      return { byteLength: 2, components: 4 };
    case os:
    case _u:
    case Rn:
      return { byteLength: 4, components: 1 };
    case rm:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: mu } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = mu);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Xm() {
  let n = null, e = false, t = null, i = null;
  function s(r, o) {
    t(r, o), i = n.requestAnimationFrame(s);
  }
  return { start: function() {
    e !== true && t !== null && (i = n.requestAnimationFrame(s), e = true);
  }, stop: function() {
    n.cancelAnimationFrame(i), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    n = r;
  } };
}
function Fy(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, u = a.usage, h = c.byteLength, f = n.createBuffer();
    n.bindBuffer(l, f), n.bufferData(l, c, u), a.onUploadCallback();
    let d;
    if (c instanceof Float32Array) d = n.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? d = n.HALF_FLOAT : d = n.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) d = n.SHORT;
    else if (c instanceof Uint32Array) d = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) d = n.INT;
    else if (c instanceof Int8Array) d = n.BYTE;
    else if (c instanceof Uint8Array) d = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) d = n.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: d, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: h };
  }
  function i(a, l, c) {
    const u = l.array, h = l.updateRanges;
    if (n.bindBuffer(c, a), h.length === 0) n.bufferSubData(c, 0, u);
    else {
      h.sort((d, m) => d.start - m.start);
      let f = 0;
      for (let d = 1; d < h.length; d++) {
        const m = h[f], _ = h[d];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, _.start + _.count - m.start) : (++f, h[f] = _);
      }
      h.length = f + 1;
      for (let d = 0, m = h.length; d < m; d++) {
        const _ = h[d];
        n.bufferSubData(c, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (n.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const u = e.get(a);
      (!u || u.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: s, remove: r, update: o };
}
var By = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, zy = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Hy = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Vy = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ky = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Gy = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Wy = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Xy = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Yy = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, qy = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, jy = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ky = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Zy = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Jy = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Qy = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, $y = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, eM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, tM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, nM = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, iM = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, sM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, rM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, oM = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, aM = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, lM = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, cM = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, uM = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, hM = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, fM = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, dM = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, pM = "gl_FragColor = linearToOutputTexel( gl_FragColor );", mM = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, gM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, _M = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, xM = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, vM = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, yM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, MM = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, SM = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, bM = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, TM = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, AM = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, EM = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, wM = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, RM = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, CM = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, PM = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, LM = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, IM = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, DM = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, NM = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, UM = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, OM = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, FM = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, BM = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, zM = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, HM = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, VM = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, kM = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, GM = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, WM = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, XM = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, YM = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, qM = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, jM = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, KM = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ZM = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, JM = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, QM = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $M = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, eS = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, tS = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, nS = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, iS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, sS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, rS = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, oS = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, aS = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, lS = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, cS = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, uS = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, hS = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, fS = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, dS = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, pS = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, mS = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, gS = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, _S = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, xS = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, vS = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, yS = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, MS = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, SS = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, bS = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, TS = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, AS = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ES = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, wS = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, RS = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, CS = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, PS = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, LS = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, IS = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, DS = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, NS = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, US = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, OS = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const FS = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, BS = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, zS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, HS = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, VS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, kS = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, GS = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, WS = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, XS = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, YS = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, qS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, jS = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, KS = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ZS = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, JS = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, QS = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $S = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, eb = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, tb = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, nb = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ib = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, sb = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, rb = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ob = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ab = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, lb = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, cb = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ub = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, hb = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, fb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, db = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, pb = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, mb = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, gb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ye = { alphahash_fragment: By, alphahash_pars_fragment: zy, alphamap_fragment: Hy, alphamap_pars_fragment: Vy, alphatest_fragment: ky, alphatest_pars_fragment: Gy, aomap_fragment: Wy, aomap_pars_fragment: Xy, batching_pars_vertex: Yy, batching_vertex: qy, begin_vertex: jy, beginnormal_vertex: Ky, bsdfs: Zy, iridescence_fragment: Jy, bumpmap_pars_fragment: Qy, clipping_planes_fragment: $y, clipping_planes_pars_fragment: eM, clipping_planes_pars_vertex: tM, clipping_planes_vertex: nM, color_fragment: iM, color_pars_fragment: sM, color_pars_vertex: rM, color_vertex: oM, common: aM, cube_uv_reflection_fragment: lM, defaultnormal_vertex: cM, displacementmap_pars_vertex: uM, displacementmap_vertex: hM, emissivemap_fragment: fM, emissivemap_pars_fragment: dM, colorspace_fragment: pM, colorspace_pars_fragment: mM, envmap_fragment: gM, envmap_common_pars_fragment: _M, envmap_pars_fragment: xM, envmap_pars_vertex: vM, envmap_physical_pars_fragment: PM, envmap_vertex: yM, fog_vertex: MM, fog_pars_vertex: SM, fog_fragment: bM, fog_pars_fragment: TM, gradientmap_pars_fragment: AM, lightmap_pars_fragment: EM, lights_lambert_fragment: wM, lights_lambert_pars_fragment: RM, lights_pars_begin: CM, lights_toon_fragment: LM, lights_toon_pars_fragment: IM, lights_phong_fragment: DM, lights_phong_pars_fragment: NM, lights_physical_fragment: UM, lights_physical_pars_fragment: OM, lights_fragment_begin: FM, lights_fragment_maps: BM, lights_fragment_end: zM, logdepthbuf_fragment: HM, logdepthbuf_pars_fragment: VM, logdepthbuf_pars_vertex: kM, logdepthbuf_vertex: GM, map_fragment: WM, map_pars_fragment: XM, map_particle_fragment: YM, map_particle_pars_fragment: qM, metalnessmap_fragment: jM, metalnessmap_pars_fragment: KM, morphinstance_vertex: ZM, morphcolor_vertex: JM, morphnormal_vertex: QM, morphtarget_pars_vertex: $M, morphtarget_vertex: eS, normal_fragment_begin: tS, normal_fragment_maps: nS, normal_pars_fragment: iS, normal_pars_vertex: sS, normal_vertex: rS, normalmap_pars_fragment: oS, clearcoat_normal_fragment_begin: aS, clearcoat_normal_fragment_maps: lS, clearcoat_pars_fragment: cS, iridescence_pars_fragment: uS, opaque_fragment: hS, packing: fS, premultiplied_alpha_fragment: dS, project_vertex: pS, dithering_fragment: mS, dithering_pars_fragment: gS, roughnessmap_fragment: _S, roughnessmap_pars_fragment: xS, shadowmap_pars_fragment: vS, shadowmap_pars_vertex: yS, shadowmap_vertex: MS, shadowmask_pars_fragment: SS, skinbase_vertex: bS, skinning_pars_vertex: TS, skinning_vertex: AS, skinnormal_vertex: ES, specularmap_fragment: wS, specularmap_pars_fragment: RS, tonemapping_fragment: CS, tonemapping_pars_fragment: PS, transmission_fragment: LS, transmission_pars_fragment: IS, uv_pars_fragment: DS, uv_pars_vertex: NS, uv_vertex: US, worldpos_vertex: OS, background_vert: FS, background_frag: BS, backgroundCube_vert: zS, backgroundCube_frag: HS, cube_vert: VS, cube_frag: kS, depth_vert: GS, depth_frag: WS, distanceRGBA_vert: XS, distanceRGBA_frag: YS, equirect_vert: qS, equirect_frag: jS, linedashed_vert: KS, linedashed_frag: ZS, meshbasic_vert: JS, meshbasic_frag: QS, meshlambert_vert: $S, meshlambert_frag: eb, meshmatcap_vert: tb, meshmatcap_frag: nb, meshnormal_vert: ib, meshnormal_frag: sb, meshphong_vert: rb, meshphong_frag: ob, meshphysical_vert: ab, meshphysical_frag: lb, meshtoon_vert: cb, meshtoon_frag: ub, points_vert: hb, points_frag: fb, shadow_vert: db, shadow_frag: pb, sprite_vert: mb, sprite_frag: gb }, _e = { common: { diffuse: { value: new we(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Xe() }, alphaMap: { value: null }, alphaMapTransform: { value: new Xe() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Xe() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Xe() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Xe() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Xe() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Xe() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Xe() }, normalScale: { value: new he(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Xe() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Xe() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Xe() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Xe() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new we(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new we(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Xe() }, alphaTest: { value: 0 }, uvTransform: { value: new Xe() } }, sprite: { diffuse: { value: new we(16777215) }, opacity: { value: 1 }, center: { value: new he(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Xe() }, alphaMap: { value: null }, alphaMapTransform: { value: new Xe() }, alphaTest: { value: 0 } } }, Fn = { basic: { uniforms: Yt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.fog]), vertexShader: Ye.meshbasic_vert, fragmentShader: Ye.meshbasic_frag }, lambert: { uniforms: Yt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, _e.lights, { emissive: { value: new we(0) } }]), vertexShader: Ye.meshlambert_vert, fragmentShader: Ye.meshlambert_frag }, phong: { uniforms: Yt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, _e.lights, { emissive: { value: new we(0) }, specular: { value: new we(1118481) }, shininess: { value: 30 } }]), vertexShader: Ye.meshphong_vert, fragmentShader: Ye.meshphong_frag }, standard: { uniforms: Yt([_e.common, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.roughnessmap, _e.metalnessmap, _e.fog, _e.lights, { emissive: { value: new we(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ye.meshphysical_vert, fragmentShader: Ye.meshphysical_frag }, toon: { uniforms: Yt([_e.common, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.gradientmap, _e.fog, _e.lights, { emissive: { value: new we(0) } }]), vertexShader: Ye.meshtoon_vert, fragmentShader: Ye.meshtoon_frag }, matcap: { uniforms: Yt([_e.common, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, { matcap: { value: null } }]), vertexShader: Ye.meshmatcap_vert, fragmentShader: Ye.meshmatcap_frag }, points: { uniforms: Yt([_e.points, _e.fog]), vertexShader: Ye.points_vert, fragmentShader: Ye.points_frag }, dashed: { uniforms: Yt([_e.common, _e.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ye.linedashed_vert, fragmentShader: Ye.linedashed_frag }, depth: { uniforms: Yt([_e.common, _e.displacementmap]), vertexShader: Ye.depth_vert, fragmentShader: Ye.depth_frag }, normal: { uniforms: Yt([_e.common, _e.bumpmap, _e.normalmap, _e.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ye.meshnormal_vert, fragmentShader: Ye.meshnormal_frag }, sprite: { uniforms: Yt([_e.sprite, _e.fog]), vertexShader: Ye.sprite_vert, fragmentShader: Ye.sprite_frag }, background: { uniforms: { uvTransform: { value: new Xe() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ye.background_vert, fragmentShader: Ye.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Xe() } }, vertexShader: Ye.backgroundCube_vert, fragmentShader: Ye.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ye.cube_vert, fragmentShader: Ye.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ye.equirect_vert, fragmentShader: Ye.equirect_frag }, distanceRGBA: { uniforms: Yt([_e.common, _e.displacementmap, { referencePosition: { value: new N() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ye.distanceRGBA_vert, fragmentShader: Ye.distanceRGBA_frag }, shadow: { uniforms: Yt([_e.lights, _e.fog, { color: { value: new we(0) }, opacity: { value: 1 } }]), vertexShader: Ye.shadow_vert, fragmentShader: Ye.shadow_frag } };
Fn.physical = { uniforms: Yt([Fn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Xe() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Xe() }, clearcoatNormalScale: { value: new he(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Xe() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Xe() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Xe() }, sheen: { value: 0 }, sheenColor: { value: new we(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Xe() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Xe() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Xe() }, transmissionSamplerSize: { value: new he() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Xe() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new we(0) }, specularColor: { value: new we(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Xe() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Xe() }, anisotropyVector: { value: new he() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Xe() } }]), vertexShader: Ye.meshphysical_vert, fragmentShader: Ye.meshphysical_frag };
const Ho = { r: 0, b: 0, g: 0 }, qi = new Ln(), _b = new ke();
function xb(n, e, t, i, s, r, o) {
  const a = new we(0);
  let l = r === true ? 0 : 1, c, u, h = null, f = 0, d = null;
  function m(b) {
    let x = b.isScene === true ? b.background : null;
    return x && x.isTexture && (x = (b.backgroundBlurriness > 0 ? t : e).get(x)), x;
  }
  function _(b) {
    let x = false;
    const C = m(b);
    C === null ? p(a, l) : C && C.isColor && (p(C, 1), x = true);
    const w = n.xr.getEnvironmentBlendMode();
    w === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (n.autoClear || x) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function g(b, x) {
    const C = m(x);
    C && (C.isCubeTexture || C.mapping === La) ? (u === void 0 && (u = new Vt(new Qr(1, 1, 1), new sn({ name: "BackgroundCubeMaterial", uniforms: qs(Fn.backgroundCube.uniforms), vertexShader: Fn.backgroundCube.vertexShader, fragmentShader: Fn.backgroundCube.fragmentShader, side: nn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, R, D) {
      this.matrixWorld.copyPosition(D.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(u)), qi.copy(x.backgroundRotation), qi.x *= -1, qi.y *= -1, qi.z *= -1, C.isCubeTexture && C.isRenderTargetTexture === false && (qi.y *= -1, qi.z *= -1), u.material.uniforms.envMap.value = C, u.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(qi)), u.material.toneMapped = Ke.getTransfer(C.colorSpace) !== lt, (h !== C || f !== C.version || d !== n.toneMapping) && (u.material.needsUpdate = true, h = C, f = C.version, d = n.toneMapping), u.layers.enableAll(), b.unshift(u, u.geometry, u.material, 0, 0, null)) : C && C.isTexture && (c === void 0 && (c = new Vt(new Na(2, 2), new sn({ name: "BackgroundMaterial", uniforms: qs(Fn.background.uniforms), vertexShader: Fn.background.vertexShader, fragmentShader: Fn.background.fragmentShader, side: li, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = C, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = Ke.getTransfer(C.colorSpace) !== lt, C.matrixAutoUpdate === true && C.updateMatrix(), c.material.uniforms.uvTransform.value.copy(C.matrix), (h !== C || f !== C.version || d !== n.toneMapping) && (c.material.needsUpdate = true, h = C, f = C.version, d = n.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(b, x) {
    b.getRGB(Ho, vm(n)), i.buffers.color.setClear(Ho.r, Ho.g, Ho.b, x, o);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(b, x = 1) {
    a.set(b), l = x, p(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(b) {
    l = b, p(a, l);
  }, render: _, addToRenderList: g, dispose: A };
}
function vb(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = f(null);
  let r = s, o = false;
  function a(M, I, z, X, J) {
    let te = false;
    const Z = h(X, z, I);
    r !== Z && (r = Z, c(r.object)), te = d(M, X, z, J), te && m(M, X, z, J), J !== null && e.update(J, n.ELEMENT_ARRAY_BUFFER), (te || o) && (o = false, x(M, I, z, X), J !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(J).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(M) {
    return n.bindVertexArray(M);
  }
  function u(M) {
    return n.deleteVertexArray(M);
  }
  function h(M, I, z) {
    const X = z.wireframe === true;
    let J = i[M.id];
    J === void 0 && (J = {}, i[M.id] = J);
    let te = J[I.id];
    te === void 0 && (te = {}, J[I.id] = te);
    let Z = te[X];
    return Z === void 0 && (Z = f(l()), te[X] = Z), Z;
  }
  function f(M) {
    const I = [], z = [], X = [];
    for (let J = 0; J < t; J++) I[J] = 0, z[J] = 0, X[J] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: I, enabledAttributes: z, attributeDivisors: X, object: M, attributes: {}, index: null };
  }
  function d(M, I, z, X) {
    const J = r.attributes, te = I.attributes;
    let Z = 0;
    const ne = z.getAttributes();
    for (const K in ne) if (ne[K].location >= 0) {
      const xe = J[K];
      let Se = te[K];
      if (Se === void 0 && (K === "instanceMatrix" && M.instanceMatrix && (Se = M.instanceMatrix), K === "instanceColor" && M.instanceColor && (Se = M.instanceColor)), xe === void 0 || xe.attribute !== Se || Se && xe.data !== Se.data) return true;
      Z++;
    }
    return r.attributesNum !== Z || r.index !== X;
  }
  function m(M, I, z, X) {
    const J = {}, te = I.attributes;
    let Z = 0;
    const ne = z.getAttributes();
    for (const K in ne) if (ne[K].location >= 0) {
      let xe = te[K];
      xe === void 0 && (K === "instanceMatrix" && M.instanceMatrix && (xe = M.instanceMatrix), K === "instanceColor" && M.instanceColor && (xe = M.instanceColor));
      const Se = {};
      Se.attribute = xe, xe && xe.data && (Se.data = xe.data), J[K] = Se, Z++;
    }
    r.attributes = J, r.attributesNum = Z, r.index = X;
  }
  function _() {
    const M = r.newAttributes;
    for (let I = 0, z = M.length; I < z; I++) M[I] = 0;
  }
  function g(M) {
    p(M, 0);
  }
  function p(M, I) {
    const z = r.newAttributes, X = r.enabledAttributes, J = r.attributeDivisors;
    z[M] = 1, X[M] === 0 && (n.enableVertexAttribArray(M), X[M] = 1), J[M] !== I && (n.vertexAttribDivisor(M, I), J[M] = I);
  }
  function A() {
    const M = r.newAttributes, I = r.enabledAttributes;
    for (let z = 0, X = I.length; z < X; z++) I[z] !== M[z] && (n.disableVertexAttribArray(z), I[z] = 0);
  }
  function b(M, I, z, X, J, te, Z) {
    Z === true ? n.vertexAttribIPointer(M, I, z, J, te) : n.vertexAttribPointer(M, I, z, X, J, te);
  }
  function x(M, I, z, X) {
    _();
    const J = X.attributes, te = z.getAttributes(), Z = I.defaultAttributeValues;
    for (const ne in te) {
      const K = te[ne];
      if (K.location >= 0) {
        let fe = J[ne];
        if (fe === void 0 && (ne === "instanceMatrix" && M.instanceMatrix && (fe = M.instanceMatrix), ne === "instanceColor" && M.instanceColor && (fe = M.instanceColor)), fe !== void 0) {
          const xe = fe.normalized, Se = fe.itemSize, Le = e.get(fe);
          if (Le === void 0) continue;
          const Ze = Le.buffer, ie = Le.type, ue = Le.bytesPerElement, be = ie === n.INT || ie === n.UNSIGNED_INT || fe.gpuType === _u;
          if (fe.isInterleavedBufferAttribute) {
            const me = fe.data, Pe = me.stride, je = fe.offset;
            if (me.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < K.locationSize; Re++) p(K.location + Re, me.meshPerAttribute);
              M.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = me.meshPerAttribute * me.count);
            } else for (let Re = 0; Re < K.locationSize; Re++) g(K.location + Re);
            n.bindBuffer(n.ARRAY_BUFFER, Ze);
            for (let Re = 0; Re < K.locationSize; Re++) b(K.location + Re, Se / K.locationSize, ie, xe, Pe * ue, (je + Se / K.locationSize * Re) * ue, be);
          } else {
            if (fe.isInstancedBufferAttribute) {
              for (let me = 0; me < K.locationSize; me++) p(K.location + me, fe.meshPerAttribute);
              M.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else for (let me = 0; me < K.locationSize; me++) g(K.location + me);
            n.bindBuffer(n.ARRAY_BUFFER, Ze);
            for (let me = 0; me < K.locationSize; me++) b(K.location + me, Se / K.locationSize, ie, xe, Se * ue, Se / K.locationSize * me * ue, be);
          }
        } else if (Z !== void 0) {
          const xe = Z[ne];
          if (xe !== void 0) switch (xe.length) {
            case 2:
              n.vertexAttrib2fv(K.location, xe);
              break;
            case 3:
              n.vertexAttrib3fv(K.location, xe);
              break;
            case 4:
              n.vertexAttrib4fv(K.location, xe);
              break;
            default:
              n.vertexAttrib1fv(K.location, xe);
          }
        }
      }
    }
    A();
  }
  function C() {
    D();
    for (const M in i) {
      const I = i[M];
      for (const z in I) {
        const X = I[z];
        for (const J in X) u(X[J].object), delete X[J];
        delete I[z];
      }
      delete i[M];
    }
  }
  function w(M) {
    if (i[M.id] === void 0) return;
    const I = i[M.id];
    for (const z in I) {
      const X = I[z];
      for (const J in X) u(X[J].object), delete X[J];
      delete I[z];
    }
    delete i[M.id];
  }
  function R(M) {
    for (const I in i) {
      const z = i[I];
      if (z[M.id] === void 0) continue;
      const X = z[M.id];
      for (const J in X) u(X[J].object), delete X[J];
      delete z[M.id];
    }
  }
  function D() {
    S(), o = true, r !== s && (r = s, c(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: a, reset: D, resetDefaultState: S, dispose: C, releaseStatesOfGeometry: w, releaseStatesOfProgram: R, initAttributes: _, enableAttribute: g, disableUnusedAttributes: A };
}
function yb(n, e, t) {
  let i;
  function s(c) {
    i = c;
  }
  function r(c, u) {
    n.drawArrays(i, c, u), t.update(u, i, 1);
  }
  function o(c, u, h) {
    h !== 0 && (n.drawArraysInstanced(i, c, u, h), t.update(u, i, h));
  }
  function a(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, u, 0, h);
    let d = 0;
    for (let m = 0; m < h; m++) d += u[m];
    t.update(d, i, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let m = 0; m < c.length; m++) o(c[m], u[m], f[m]);
    else {
      d.multiDrawArraysInstancedWEBGL(i, c, 0, u, 0, f, 0, h);
      let m = 0;
      for (let _ = 0; _ < h; _++) m += u[_] * f[_];
      t.update(m, i, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function Mb(n, e, t, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const R = e.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function o(R) {
    return !(R !== mn && i.convert(R) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(R) {
    const D = R === Li && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(R !== ci && i.convert(R) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && R !== Rn && !D);
  }
  function l(R) {
    if (R === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      R = "mediump";
    }
    return R === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = t.logarithmicDepthBuffer === true, f = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), m = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = n.getParameter(n.MAX_TEXTURE_SIZE), g = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), p = n.getParameter(n.MAX_VERTEX_ATTRIBS), A = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), b = n.getParameter(n.MAX_VARYING_VECTORS), x = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), C = m > 0, w = n.getParameter(n.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: h, reverseDepthBuffer: f, maxTextures: d, maxVertexTextures: m, maxTextureSize: _, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: A, maxVaryings: b, maxFragmentUniforms: x, vertexTextures: C, maxSamples: w };
}
function Sb(n) {
  const e = this;
  let t = null, i = 0, s = false, r = false;
  const o = new Ji(), a = new Xe(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const d = h.length !== 0 || f || i !== 0 || s;
    return s = f, i = h.length, d;
  }, this.beginShadows = function() {
    r = true, u(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, d) {
    const m = h.clippingPlanes, _ = h.clipIntersection, g = h.clipShadows, p = n.get(h);
    if (!s || m === null || m.length === 0 || r && !g) r ? u(null) : c();
    else {
      const A = r ? 0 : i, b = A * 4;
      let x = p.clippingState || null;
      l.value = x, x = u(m, f, b, d);
      for (let C = 0; C !== b; ++C) x[C] = t[C];
      p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function u(h, f, d, m) {
    const _ = h !== null ? h.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = l.value, m !== true || g === null) {
        const p = d + _ * 4, A = f.matrixWorldInverse;
        a.getNormalMatrix(A), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let b = 0, x = d; b !== _; ++b, x += 4) o.copy(h[b]).applyMatrix4(A, a), o.normal.toArray(g, x), g[x + 3] = o.constant;
      }
      l.value = g, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, g;
  }
}
function bb(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === uc ? o.mapping = Gs : a === hc && (o.mapping = Ws), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === uc || a === hc) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new l0(l.height);
          return c.fromEquirectangularTexture(n, o), e.set(o, c), o.addEventListener("dispose", s), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: r };
}
const Ps = 4, Gf = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ts = 20, Cl = new Ua(), Wf = new we();
let Pl = null, Ll = 0, Il = 0, Dl = false;
const Qi = (1 + Math.sqrt(5)) / 2, As = 1 / Qi, Xf = [new N(-Qi, As, 0), new N(Qi, As, 0), new N(-As, 0, Qi), new N(As, 0, Qi), new N(0, Qi, -As), new N(0, Qi, As), new N(-1, 1, -1), new N(1, 1, -1), new N(-1, 1, 1), new N(1, 1, 1)], Tb = new N();
class Yf {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, s = 100, r = {}) {
    const { size: o = 256, position: a = Tb } = r;
    Pl = this._renderer.getRenderTarget(), Ll = this._renderer.getActiveCubeFace(), Il = this._renderer.getActiveMipmapLevel(), Dl = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, i, s, l, a), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Kf(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = jf(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Pl, Ll, Il), this._renderer.xr.enabled = Dl, e.scissorTest = false, Vo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Gs || e.mapping === Ws ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Pl = this._renderer.getRenderTarget(), Ll = this._renderer.getActiveCubeFace(), Il = this._renderer.getActiveMipmapLevel(), Dl = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: tn, minFilter: tn, generateMipmaps: false, type: Li, format: mn, colorSpace: Jt, depthBuffer: false }, s = qf(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = qf(e, t, i);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ab(r)), this._blurMaterial = Eb(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Vt(this._lodPlanes[0], e);
    this._renderer.compile(t, Cl);
  }
  _sceneToCubeUV(e, t, i, s, r) {
    const l = new en(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, d = h.toneMapping;
    h.getClearColor(Wf), h.toneMapping = Ci, h.autoClear = false;
    const m = new ri({ name: "PMREM.Background", side: nn, depthWrite: false, depthTest: false }), _ = new Vt(new Qr(), m);
    let g = false;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, g = true) : (m.color.copy(Wf), g = true);
    for (let A = 0; A < 6; A++) {
      const b = A % 3;
      b === 0 ? (l.up.set(0, c[A], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + u[A], r.y, r.z)) : b === 1 ? (l.up.set(0, 0, c[A]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + u[A], r.z)) : (l.up.set(0, c[A], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + u[A]));
      const x = this._cubeSize;
      Vo(s, b * x, A > 2 ? x : 0, x, x), h.setRenderTarget(s), g && h.render(_, l), h.render(e, l);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, s = e.mapping === Gs || e.mapping === Ws;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Kf()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jf());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new Vt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Vo(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, Cl);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Xf[(s - r - 1) % Xf.length];
      this._blur(e, r - 1, r, o, a);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, s, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, i, s, "latitudinal", r), this._halfBlur(o, e, i, i, s, "longitudinal", r);
  }
  _halfBlur(e, t, i, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, h = new Vt(this._lodPlanes[s], c), f = c.uniforms, d = this._sizeLods[i] - 1, m = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * ts - 1), _ = r / m, g = isFinite(r) ? 1 + Math.floor(u * _) : ts;
    g > ts && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);
    const p = [];
    let A = 0;
    for (let R = 0; R < ts; ++R) {
      const D = R / _, S = Math.exp(-D * D / 2);
      p.push(S), R === 0 ? A += S : R < g && (A += 2 * S);
    }
    for (let R = 0; R < p.length; R++) p[R] = p[R] / A;
    f.envMap.value = e.texture, f.samples.value = g, f.weights.value = p, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: b } = this;
    f.dTheta.value = m, f.mipInt.value = b - i;
    const x = this._sizeLods[s], C = 3 * x * (s > b - Ps ? s - b + Ps : 0), w = 4 * (this._cubeSize - x);
    Vo(t, C, w, 3 * x, 2 * x), l.setRenderTarget(t), l.render(h, Cl);
  }
}
function Ab(n) {
  const e = [], t = [], i = [];
  let s = n;
  const r = n - Ps + 1 + Gf.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    t.push(a);
    let l = 1 / a;
    o > n - Ps ? l = Gf[o - n + Ps - 1] : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], d = 6, m = 6, _ = 3, g = 2, p = 1, A = new Float32Array(_ * m * d), b = new Float32Array(g * m * d), x = new Float32Array(p * m * d);
    for (let w = 0; w < d; w++) {
      const R = w % 3 * 2 / 3 - 1, D = w > 2 ? 0 : -1, S = [R, D, 0, R + 2 / 3, D, 0, R + 2 / 3, D + 1, 0, R, D, 0, R + 2 / 3, D + 1, 0, R, D + 1, 0];
      A.set(S, _ * m * w), b.set(f, g * m * w);
      const M = [w, w, w, w, w, w];
      x.set(M, p * m * w);
    }
    const C = new xt();
    C.setAttribute("position", new Ut(A, _)), C.setAttribute("uv", new Ut(b, g)), C.setAttribute("faceIndex", new Ut(x, p)), e.push(C), s > Ps && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function qf(n, e, t) {
  const i = new Vn(n, e, t);
  return i.texture.mapping = La, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function Vo(n, e, t, i, s) {
  n.viewport.set(e, t, i, s), n.scissor.set(e, t, i, s);
}
function Eb(n, e, t) {
  const i = new Float32Array(ts), s = new N(0, 1, 0);
  return new sn({ name: "SphericalGaussianBlur", defines: { n: ts, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Gu(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: oi, depthTest: false, depthWrite: false });
}
function jf() {
  return new sn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Gu(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: oi, depthTest: false, depthWrite: false });
}
function Kf() {
  return new sn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Gu(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: oi, depthTest: false, depthWrite: false });
}
function Gu() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function wb(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === uc || l === hc, u = l === Gs || l === Ws;
      if (c || u) {
        let h = e.get(a);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f) return t === null && (t = new Yf(n)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
        if (h !== void 0) return h.texture;
        {
          const d = a.image;
          return c && d && d.height > 0 || u && d && s(d) ? (t === null && (t = new Yf(n)), h = c ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", r), h.texture) : null;
        }
      }
    }
    return a;
  }
  function s(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: i, dispose: o };
}
function Rb(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let s;
    switch (i) {
      case "WEBGL_depth_texture":
        s = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = n.getExtension(i);
    }
    return e[i] = s, s;
  }
  return { has: function(i) {
    return t(i) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const s = t(i);
    return s === null && ia("THREE.WebGLRenderer: " + i + " extension not supported."), s;
  } };
}
function Cb(n, e, t, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const m in f.attributes) e.remove(f.attributes[m]);
    f.removeEventListener("dispose", o), delete s[f.id];
    const d = r.get(f);
    d && (e.remove(d), r.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, f) {
    return s[f.id] === true || (f.addEventListener("dispose", o), s[f.id] = true, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const d in f) e.update(f[d], n.ARRAY_BUFFER);
  }
  function c(h) {
    const f = [], d = h.index, m = h.attributes.position;
    let _ = 0;
    if (d !== null) {
      const A = d.array;
      _ = d.version;
      for (let b = 0, x = A.length; b < x; b += 3) {
        const C = A[b + 0], w = A[b + 1], R = A[b + 2];
        f.push(C, w, w, R, R, C);
      }
    } else if (m !== void 0) {
      const A = m.array;
      _ = m.version;
      for (let b = 0, x = A.length / 3 - 1; b < x; b += 3) {
        const C = b + 0, w = b + 1, R = b + 2;
        f.push(C, w, w, R, R, C);
      }
    } else return;
    const g = new (pm(f) ? xm : _m)(f, 1);
    g.version = _;
    const p = r.get(h);
    p && e.remove(p), r.set(h, g);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const d = h.index;
      d !== null && f.version < d.version && c(h);
    } else c(h);
    return r.get(h);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function Pb(n, e, t) {
  let i;
  function s(f) {
    i = f;
  }
  let r, o;
  function a(f) {
    r = f.type, o = f.bytesPerElement;
  }
  function l(f, d) {
    n.drawElements(i, d, r, f * o), t.update(d, i, 1);
  }
  function c(f, d, m) {
    m !== 0 && (n.drawElementsInstanced(i, d, r, f * o, m), t.update(d, i, m));
  }
  function u(f, d, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, r, f, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++) g += d[p];
    t.update(g, i, 1);
  }
  function h(f, d, m, _) {
    if (m === 0) return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null) for (let p = 0; p < f.length; p++) c(f[p] / o, d[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(i, d, 0, r, f, 0, _, 0, m);
      let p = 0;
      for (let A = 0; A < m; A++) p += d[A] * _[A];
      t.update(p, i, 1);
    }
  }
  this.setMode = s, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function Lb(n) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(r, o, a) {
    switch (t.calls++, o) {
      case n.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case n.LINES:
        t.lines += a * (r / 2);
        break;
      case n.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case n.LINE_LOOP:
        t.lines += a * r;
        break;
      case n.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: i };
}
function Ib(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), s = new nt();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = i.get(a);
    if (f === void 0 || f.count !== h) {
      let S = function() {
        R.dispose(), i.delete(a), a.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const d = a.morphAttributes.position !== void 0, m = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, g = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], A = a.morphAttributes.color || [];
      let b = 0;
      d === true && (b = 1), m === true && (b = 2), _ === true && (b = 3);
      let x = a.attributes.position.count * b, C = 1;
      x > e.maxTextureSize && (C = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const w = new Float32Array(x * C * 4 * h), R = new mm(w, x, C, h);
      R.type = Rn, R.needsUpdate = true;
      const D = b * 4;
      for (let M = 0; M < h; M++) {
        const I = g[M], z = p[M], X = A[M], J = x * C * 4 * M;
        for (let te = 0; te < I.count; te++) {
          const Z = te * D;
          d === true && (s.fromBufferAttribute(I, te), w[J + Z + 0] = s.x, w[J + Z + 1] = s.y, w[J + Z + 2] = s.z, w[J + Z + 3] = 0), m === true && (s.fromBufferAttribute(z, te), w[J + Z + 4] = s.x, w[J + Z + 5] = s.y, w[J + Z + 6] = s.z, w[J + Z + 7] = 0), _ === true && (s.fromBufferAttribute(X, te), w[J + Z + 8] = s.x, w[J + Z + 9] = s.y, w[J + Z + 10] = s.z, w[J + Z + 11] = X.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: h, texture: R, size: new he(x, C) }, i.set(a, f), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(n, "morphTexture", o.morphTexture, t);
    else {
      let d = 0;
      for (let _ = 0; _ < c.length; _++) d += c[_];
      const m = a.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", m), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(n, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Db(n, e, t, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = i.render.frame, u = l.geometry, h = e.get(l, u);
    if (s.get(h) !== c && (e.update(h), s.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), s.get(l) !== c && (t.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return h;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const Ym = new At(), Zf = new wm(1, 1), qm = new mm(), jm = new Yv(), Km = new ym(), Jf = [], Qf = [], $f = new Float32Array(16), ed = new Float32Array(9), td = new Float32Array(4);
function er(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = e * t;
  let r = Jf[s];
  if (r === void 0 && (r = new Float32Array(s), Jf[s] = r), e !== 0) {
    i.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, n[o].toArray(r, a);
  }
  return r;
}
function wt(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return false;
  return true;
}
function Rt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Oa(n, e) {
  let t = Qf[e];
  t === void 0 && (t = new Int32Array(e), Qf[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function Nb(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function Ub(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2fv(this.addr, e), Rt(t, e);
  }
}
function Ob(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (wt(t, e)) return;
    n.uniform3fv(this.addr, e), Rt(t, e);
  }
}
function Fb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4fv(this.addr, e), Rt(t, e);
  }
}
function Bb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix2fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, i)) return;
    td.set(i), n.uniformMatrix2fv(this.addr, false, td), Rt(t, i);
  }
}
function zb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix3fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, i)) return;
    ed.set(i), n.uniformMatrix3fv(this.addr, false, ed), Rt(t, i);
  }
}
function Hb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix4fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, i)) return;
    $f.set(i), n.uniformMatrix4fv(this.addr, false, $f), Rt(t, i);
  }
}
function Vb(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function kb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2iv(this.addr, e), Rt(t, e);
  }
}
function Gb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    n.uniform3iv(this.addr, e), Rt(t, e);
  }
}
function Wb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4iv(this.addr, e), Rt(t, e);
  }
}
function Xb(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function Yb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2uiv(this.addr, e), Rt(t, e);
  }
}
function qb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    n.uniform3uiv(this.addr, e), Rt(t, e);
  }
}
function jb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4uiv(this.addr, e), Rt(t, e);
  }
}
function Kb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? (Zf.compareFunction = dm, r = Zf) : r = Ym, t.setTexture2D(e || r, s);
}
function Zb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture3D(e || jm, s);
}
function Jb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTextureCube(e || Km, s);
}
function Qb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture2DArray(e || qm, s);
}
function $b(n) {
  switch (n) {
    case 5126:
      return Nb;
    case 35664:
      return Ub;
    case 35665:
      return Ob;
    case 35666:
      return Fb;
    case 35674:
      return Bb;
    case 35675:
      return zb;
    case 35676:
      return Hb;
    case 5124:
    case 35670:
      return Vb;
    case 35667:
    case 35671:
      return kb;
    case 35668:
    case 35672:
      return Gb;
    case 35669:
    case 35673:
      return Wb;
    case 5125:
      return Xb;
    case 36294:
      return Yb;
    case 36295:
      return qb;
    case 36296:
      return jb;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kb;
    case 35679:
    case 36299:
    case 36307:
      return Zb;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jb;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qb;
  }
}
function eT(n, e) {
  n.uniform1fv(this.addr, e);
}
function tT(n, e) {
  const t = er(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function nT(n, e) {
  const t = er(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function iT(n, e) {
  const t = er(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function sT(n, e) {
  const t = er(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, t);
}
function rT(n, e) {
  const t = er(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, t);
}
function oT(n, e) {
  const t = er(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, t);
}
function aT(n, e) {
  n.uniform1iv(this.addr, e);
}
function lT(n, e) {
  n.uniform2iv(this.addr, e);
}
function cT(n, e) {
  n.uniform3iv(this.addr, e);
}
function uT(n, e) {
  n.uniform4iv(this.addr, e);
}
function hT(n, e) {
  n.uniform1uiv(this.addr, e);
}
function fT(n, e) {
  n.uniform2uiv(this.addr, e);
}
function dT(n, e) {
  n.uniform3uiv(this.addr, e);
}
function pT(n, e) {
  n.uniform4uiv(this.addr, e);
}
function mT(n, e, t) {
  const i = this.cache, s = e.length, r = Oa(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Rt(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || Ym, r[o]);
}
function gT(n, e, t) {
  const i = this.cache, s = e.length, r = Oa(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Rt(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture3D(e[o] || jm, r[o]);
}
function _T(n, e, t) {
  const i = this.cache, s = e.length, r = Oa(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Rt(i, r));
  for (let o = 0; o !== s; ++o) t.setTextureCube(e[o] || Km, r[o]);
}
function xT(n, e, t) {
  const i = this.cache, s = e.length, r = Oa(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Rt(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture2DArray(e[o] || qm, r[o]);
}
function vT(n) {
  switch (n) {
    case 5126:
      return eT;
    case 35664:
      return tT;
    case 35665:
      return nT;
    case 35666:
      return iT;
    case 35674:
      return sT;
    case 35675:
      return rT;
    case 35676:
      return oT;
    case 5124:
    case 35670:
      return aT;
    case 35667:
    case 35671:
      return lT;
    case 35668:
    case 35672:
      return cT;
    case 35669:
    case 35673:
      return uT;
    case 5125:
      return hT;
    case 36294:
      return fT;
    case 36295:
      return dT;
    case 36296:
      return pT;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mT;
    case 35679:
    case 36299:
    case 36307:
      return gT;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _T;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xT;
  }
}
class yT {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = $b(t.type);
  }
}
class MT {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = vT(t.type);
  }
}
class ST {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(e, t[a.id], i);
    }
  }
}
const Nl = /(\w+)(\])?(\[|\.)?/g;
function nd(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function bT(n, e, t) {
  const i = n.name, s = i.length;
  for (Nl.lastIndex = 0; ; ) {
    const r = Nl.exec(i), o = Nl.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      nd(t, c === void 0 ? new yT(a, n, e) : new MT(a, n, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new ST(a), nd(t, h)), t = h;
    }
  }
}
class sa {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
      bT(r, o, this);
    }
  }
  setValue(e, t, i, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, i, s);
  }
  setOptional(e, t, i) {
    const s = t[i];
    s !== void 0 && this.setValue(e, i, s);
  }
  static upload(e, t, i, s) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = i[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const o = e[s];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function id(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const TT = 37297;
let AT = 0;
function ET(n, e) {
  const t = n.split(`
`), i = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    i.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
const sd = new Xe();
function wT(n) {
  Ke._getMatrix(sd, Ke.workingColorSpace, n);
  const e = `mat3( ${sd.elements.map((t) => t.toFixed(4))} )`;
  switch (Ke.getTransfer(n)) {
    case ma:
      return [e, "LinearTransferOETF"];
    case lt:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function rd(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), s = n.getShaderInfoLog(e).trim();
  if (i && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + ET(n.getShaderSource(e), o);
  } else return s;
}
function RT(n, e) {
  const t = wT(e);
  return [`vec4 ${n}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function CT(n, e) {
  let t;
  switch (e) {
    case jp:
      t = "Linear";
      break;
    case Kp:
      t = "Reinhard";
      break;
    case Zp:
      t = "Cineon";
      break;
    case Jp:
      t = "ACESFilmic";
      break;
    case $p:
      t = "AgX";
      break;
    case em:
      t = "Neutral";
      break;
    case Qp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ko = new N();
function PT() {
  Ke.getLuminanceCoefficients(ko);
  const n = ko.x.toFixed(4), e = ko.y.toFixed(4), t = ko.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function LT(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(xr).join(`
`);
}
function IT(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function DT(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(e, s), o = r.name;
    let a = 1;
    r.type === n.FLOAT_MAT2 && (a = 2), r.type === n.FLOAT_MAT3 && (a = 3), r.type === n.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: n.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function xr(n) {
  return n !== "";
}
function od(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ad(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const NT = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qc(n) {
  return n.replace(NT, OT);
}
const UT = /* @__PURE__ */ new Map();
function OT(n, e) {
  let t = Ye[e];
  if (t === void 0) {
    const i = UT.get(e);
    if (i !== void 0) t = Ye[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return qc(t);
}
const FT = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ld(n) {
  return n.replace(FT, BT);
}
function BT(n, e, t, i) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function cd(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function zT(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === qp ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Fx ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === $n && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function HT(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap) switch (n.envMapMode) {
    case Gs:
    case Ws:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case La:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function VT(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap) switch (n.envMapMode) {
    case Ws:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function kT(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap) switch (n.combine) {
    case gu:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case nv:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case iv:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function GT(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function WT(n, e, t, i) {
  const s = n.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = zT(t), c = HT(t), u = VT(t), h = kT(t), f = GT(t), d = LT(t), m = IT(r), _ = s.createProgram();
  let g, p, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(xr).join(`
`), g.length > 0 && (g += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(xr).join(`
`), p.length > 0 && (p += `
`)) : (g = [cd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(xr).join(`
`), p = [cd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Ci ? "#define TONE_MAPPING" : "", t.toneMapping !== Ci ? Ye.tonemapping_pars_fragment : "", t.toneMapping !== Ci ? CT("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ye.colorspace_pars_fragment, RT("linearToOutputTexel", t.outputColorSpace), PT(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(xr).join(`
`)), o = qc(o), o = od(o, t), o = ad(o, t), a = qc(a), a = od(a, t), a = ad(a, t), o = ld(o), a = ld(a), t.isRawShaderMaterial !== true && (A = `#version 300 es
`, g = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g, p = ["#define varying in", t.glslVersion === Gh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Gh ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const b = A + g + o, x = A + p + a, C = id(s, s.VERTEX_SHADER, b), w = id(s, s.FRAGMENT_SHADER, x);
  s.attachShader(_, C), s.attachShader(_, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
  function R(I) {
    if (n.debug.checkShaderErrors) {
      const z = s.getProgramInfoLog(_).trim(), X = s.getShaderInfoLog(C).trim(), J = s.getShaderInfoLog(w).trim();
      let te = true, Z = true;
      if (s.getProgramParameter(_, s.LINK_STATUS) === false) if (te = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(s, _, C, w);
      else {
        const ne = rd(s, C, "vertex"), K = rd(s, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(_, s.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + z + `
` + ne + `
` + K);
      }
      else z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", z) : (X === "" || J === "") && (Z = false);
      Z && (I.diagnostics = { runnable: te, programLog: z, vertexShader: { log: X, prefix: g }, fragmentShader: { log: J, prefix: p } });
    }
    s.deleteShader(C), s.deleteShader(w), D = new sa(s, _), S = DT(s, _);
  }
  let D;
  this.getUniforms = function() {
    return D === void 0 && R(this), D;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && R(this), S;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(_, TT)), M;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = AT++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = w, this;
}
let XT = 0;
class YT {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(i), o = this._getShaderCacheForMaterial(e);
    return o.has(s) === false && (o.add(s), s.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new qT(e), t.set(e, i)), i;
  }
}
class qT {
  constructor(e) {
    this.id = XT++, this.code = e, this.usedTimes = 0;
  }
}
function jT(n, e, t, i, s, r, o) {
  const a = new wu(), l = new YT(), c = /* @__PURE__ */ new Set(), u = [], h = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let d = s.precision;
  const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function g(S, M, I, z, X) {
    const J = z.fog, te = X.geometry, Z = S.isMeshStandardMaterial ? z.environment : null, ne = (S.isMeshStandardMaterial ? t : e).get(S.envMap || Z), K = ne && ne.mapping === La ? ne.image.height : null, fe = m[S.type];
    S.precision !== null && (d = s.getMaxPrecision(S.precision), d !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", d, "instead."));
    const xe = te.morphAttributes.position || te.morphAttributes.normal || te.morphAttributes.color, Se = xe !== void 0 ? xe.length : 0;
    let Le = 0;
    te.morphAttributes.position !== void 0 && (Le = 1), te.morphAttributes.normal !== void 0 && (Le = 2), te.morphAttributes.color !== void 0 && (Le = 3);
    let Ze, ie, ue, be;
    if (fe) {
      const at = Fn[fe];
      Ze = at.vertexShader, ie = at.fragmentShader;
    } else Ze = S.vertexShader, ie = S.fragmentShader, l.update(S), ue = l.getVertexShaderID(S), be = l.getFragmentShaderID(S);
    const me = n.getRenderTarget(), Pe = n.state.buffers.depth.getReversed(), je = X.isInstancedMesh === true, Re = X.isBatchedMesh === true, $e = !!S.map, P = !!S.matcap, U = !!ne, T = !!S.aoMap, se = !!S.lightMap, O = !!S.bumpMap, F = !!S.normalMap, H = !!S.displacementMap, j = !!S.emissiveMap, B = !!S.metalnessMap, y = !!S.roughnessMap, v = S.anisotropy > 0, L = S.clearcoat > 0, k = S.dispersion > 0, Y = S.iridescence > 0, q = S.sheen > 0, ce = S.transmission > 0, re = v && !!S.anisotropyMap, de = L && !!S.clearcoatMap, De = L && !!S.clearcoatNormalMap, ae = L && !!S.clearcoatRoughnessMap, ge = Y && !!S.iridescenceMap, Ce = Y && !!S.iridescenceThicknessMap, Ne = q && !!S.sheenColorMap, pe = q && !!S.sheenRoughnessMap, Be = !!S.specularMap, Ve = !!S.specularColorMap, ft = !!S.specularIntensityMap, V = ce && !!S.transmissionMap, ye = ce && !!S.thicknessMap, ee = !!S.gradientMap, oe = !!S.alphaMap, Te = S.alphaTest > 0, Me = !!S.alphaHash, We = !!S.extensions;
    let vt = Ci;
    S.toneMapped && (me === null || me.isXRRenderTarget === true) && (vt = n.toneMapping);
    const Ot = { shaderID: fe, shaderType: S.type, shaderName: S.name, vertexShader: Ze, fragmentShader: ie, defines: S.defines, customVertexShaderID: ue, customFragmentShaderID: be, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: d, batching: Re, batchingColor: Re && X._colorsTexture !== null, instancing: je, instancingColor: je && X.instanceColor !== null, instancingMorph: je && X.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: me === null ? n.outputColorSpace : me.isXRRenderTarget === true ? me.texture.colorSpace : Jt, alphaToCoverage: !!S.alphaToCoverage, map: $e, matcap: P, envMap: U, envMapMode: U && ne.mapping, envMapCubeUVHeight: K, aoMap: T, lightMap: se, bumpMap: O, normalMap: F, displacementMap: f && H, emissiveMap: j, normalMapObjectSpace: F && S.normalMapType === fv, normalMapTangentSpace: F && S.normalMapType === Ia, metalnessMap: B, roughnessMap: y, anisotropy: v, anisotropyMap: re, clearcoat: L, clearcoatMap: de, clearcoatNormalMap: De, clearcoatRoughnessMap: ae, dispersion: k, iridescence: Y, iridescenceMap: ge, iridescenceThicknessMap: Ce, sheen: q, sheenColorMap: Ne, sheenRoughnessMap: pe, specularMap: Be, specularColorMap: Ve, specularIntensityMap: ft, transmission: ce, transmissionMap: V, thicknessMap: ye, gradientMap: ee, opaque: S.transparent === false && S.blending === Fs && S.alphaToCoverage === false, alphaMap: oe, alphaTest: Te, alphaHash: Me, combine: S.combine, mapUv: $e && _(S.map.channel), aoMapUv: T && _(S.aoMap.channel), lightMapUv: se && _(S.lightMap.channel), bumpMapUv: O && _(S.bumpMap.channel), normalMapUv: F && _(S.normalMap.channel), displacementMapUv: H && _(S.displacementMap.channel), emissiveMapUv: j && _(S.emissiveMap.channel), metalnessMapUv: B && _(S.metalnessMap.channel), roughnessMapUv: y && _(S.roughnessMap.channel), anisotropyMapUv: re && _(S.anisotropyMap.channel), clearcoatMapUv: de && _(S.clearcoatMap.channel), clearcoatNormalMapUv: De && _(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ae && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: ge && _(S.iridescenceMap.channel), iridescenceThicknessMapUv: Ce && _(S.iridescenceThicknessMap.channel), sheenColorMapUv: Ne && _(S.sheenColorMap.channel), sheenRoughnessMapUv: pe && _(S.sheenRoughnessMap.channel), specularMapUv: Be && _(S.specularMap.channel), specularColorMapUv: Ve && _(S.specularColorMap.channel), specularIntensityMapUv: ft && _(S.specularIntensityMap.channel), transmissionMapUv: V && _(S.transmissionMap.channel), thicknessMapUv: ye && _(S.thicknessMap.channel), alphaMapUv: oe && _(S.alphaMap.channel), vertexTangents: !!te.attributes.tangent && (F || v), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!te.attributes.color && te.attributes.color.itemSize === 4, pointsUvs: X.isPoints === true && !!te.attributes.uv && ($e || oe), fog: !!J, useFog: S.fog === true, fogExp2: !!J && J.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: h, reverseDepthBuffer: Pe, skinning: X.isSkinnedMesh === true, morphTargets: te.morphAttributes.position !== void 0, morphNormals: te.morphAttributes.normal !== void 0, morphColors: te.morphAttributes.color !== void 0, morphTargetsCount: Se, morphTextureStride: Le, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: n.shadowMap.enabled && I.length > 0, shadowMapType: n.shadowMap.type, toneMapping: vt, decodeVideoTexture: $e && S.map.isVideoTexture === true && Ke.getTransfer(S.map.colorSpace) === lt, decodeVideoTextureEmissive: j && S.emissiveMap.isVideoTexture === true && Ke.getTransfer(S.emissiveMap.colorSpace) === lt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Bn, flipSided: S.side === nn, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: We && S.extensions.clipCullDistance === true && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (We && S.extensions.multiDraw === true || Re) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return Ot.vertexUv1s = c.has(1), Ot.vertexUv2s = c.has(2), Ot.vertexUv3s = c.has(3), c.clear(), Ot;
  }
  function p(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const I in S.defines) M.push(I), M.push(S.defines[I]);
    return S.isRawShaderMaterial === false && (A(M, S), b(M, S), M.push(n.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function A(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function b(S, M) {
    a.disableAll(), M.supportsVertexTextures && a.enable(0), M.instancing && a.enable(1), M.instancingColor && a.enable(2), M.instancingMorph && a.enable(3), M.matcap && a.enable(4), M.envMap && a.enable(5), M.normalMapObjectSpace && a.enable(6), M.normalMapTangentSpace && a.enable(7), M.clearcoat && a.enable(8), M.iridescence && a.enable(9), M.alphaTest && a.enable(10), M.vertexColors && a.enable(11), M.vertexAlphas && a.enable(12), M.vertexUv1s && a.enable(13), M.vertexUv2s && a.enable(14), M.vertexUv3s && a.enable(15), M.vertexTangents && a.enable(16), M.anisotropy && a.enable(17), M.alphaHash && a.enable(18), M.batching && a.enable(19), M.dispersion && a.enable(20), M.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), M.fog && a.enable(0), M.useFog && a.enable(1), M.flatShading && a.enable(2), M.logarithmicDepthBuffer && a.enable(3), M.reverseDepthBuffer && a.enable(4), M.skinning && a.enable(5), M.morphTargets && a.enable(6), M.morphNormals && a.enable(7), M.morphColors && a.enable(8), M.premultipliedAlpha && a.enable(9), M.shadowMapEnabled && a.enable(10), M.doubleSided && a.enable(11), M.flipSided && a.enable(12), M.useDepthPacking && a.enable(13), M.dithering && a.enable(14), M.transmission && a.enable(15), M.sheen && a.enable(16), M.opaque && a.enable(17), M.pointsUvs && a.enable(18), M.decodeVideoTexture && a.enable(19), M.decodeVideoTextureEmissive && a.enable(20), M.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function x(S) {
    const M = m[S.type];
    let I;
    if (M) {
      const z = Fn[M];
      I = zs.clone(z.uniforms);
    } else I = S.uniforms;
    return I;
  }
  function C(S, M) {
    let I;
    for (let z = 0, X = u.length; z < X; z++) {
      const J = u[z];
      if (J.cacheKey === M) {
        I = J, ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && (I = new WT(n, M, S, r), u.push(I)), I;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function R(S) {
    l.remove(S);
  }
  function D() {
    l.dispose();
  }
  return { getParameters: g, getProgramCacheKey: p, getUniforms: x, acquireProgram: C, releaseProgram: w, releaseShaderCache: R, programs: u, dispose: D };
}
function KT() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return n.has(o);
  }
  function t(o) {
    let a = n.get(o);
    return a === void 0 && (a = {}, n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function s(o, a, l) {
    n.get(o)[a] = l;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: i, update: s, dispose: r };
}
function ZT(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function ud(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function hd() {
  const n = [];
  let e = 0;
  const t = [], i = [], s = [];
  function r() {
    e = 0, t.length = 0, i.length = 0, s.length = 0;
  }
  function o(h, f, d, m, _, g) {
    let p = n[e];
    return p === void 0 ? (p = { id: h.id, object: h, geometry: f, material: d, groupOrder: m, renderOrder: h.renderOrder, z: _, group: g }, n[e] = p) : (p.id = h.id, p.object = h, p.geometry = f, p.material = d, p.groupOrder = m, p.renderOrder = h.renderOrder, p.z = _, p.group = g), e++, p;
  }
  function a(h, f, d, m, _, g) {
    const p = o(h, f, d, m, _, g);
    d.transmission > 0 ? i.push(p) : d.transparent === true ? s.push(p) : t.push(p);
  }
  function l(h, f, d, m, _, g) {
    const p = o(h, f, d, m, _, g);
    d.transmission > 0 ? i.unshift(p) : d.transparent === true ? s.unshift(p) : t.unshift(p);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || ZT), i.length > 1 && i.sort(f || ud), s.length > 1 && s.sort(f || ud);
  }
  function u() {
    for (let h = e, f = n.length; h < f; h++) {
      const d = n[h];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: s, init: r, push: a, unshift: l, finish: u, sort: c };
}
function JT() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const r = n.get(i);
    let o;
    return r === void 0 ? (o = new hd(), n.set(i, [o])) : s >= r.length ? (o = new hd(), r.push(o)) : o = r[s], o;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function QT() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new N(), color: new we() };
        break;
      case "SpotLight":
        t = { position: new N(), direction: new N(), color: new we(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new N(), color: new we(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new N(), skyColor: new we(), groundColor: new we() };
        break;
      case "RectAreaLight":
        t = { color: new we(), position: new N(), halfWidth: new N(), halfHeight: new N() };
        break;
    }
    return n[e.id] = t, t;
  } };
}
function $T() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new he() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new he() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new he(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return n[e.id] = t, t;
  } };
}
let eA = 0;
function tA(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function nA(n) {
  const e = new QT(), t = $T(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new N());
  const s = new N(), r = new ke(), o = new ke();
  function a(c) {
    let u = 0, h = 0, f = 0;
    for (let S = 0; S < 9; S++) i.probe[S].set(0, 0, 0);
    let d = 0, m = 0, _ = 0, g = 0, p = 0, A = 0, b = 0, x = 0, C = 0, w = 0, R = 0;
    c.sort(tA);
    for (let S = 0, M = c.length; S < M; S++) {
      const I = c[S], z = I.color, X = I.intensity, J = I.distance, te = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight) u += z.r * X, h += z.g * X, f += z.b * X;
      else if (I.isLightProbe) {
        for (let Z = 0; Z < 9; Z++) i.probe[Z].addScaledVector(I.sh.coefficients[Z], X);
        R++;
      } else if (I.isDirectionalLight) {
        const Z = e.get(I);
        if (Z.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const ne = I.shadow, K = t.get(I);
          K.shadowIntensity = ne.intensity, K.shadowBias = ne.bias, K.shadowNormalBias = ne.normalBias, K.shadowRadius = ne.radius, K.shadowMapSize = ne.mapSize, i.directionalShadow[d] = K, i.directionalShadowMap[d] = te, i.directionalShadowMatrix[d] = I.shadow.matrix, A++;
        }
        i.directional[d] = Z, d++;
      } else if (I.isSpotLight) {
        const Z = e.get(I);
        Z.position.setFromMatrixPosition(I.matrixWorld), Z.color.copy(z).multiplyScalar(X), Z.distance = J, Z.coneCos = Math.cos(I.angle), Z.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), Z.decay = I.decay, i.spot[_] = Z;
        const ne = I.shadow;
        if (I.map && (i.spotLightMap[C] = I.map, C++, ne.updateMatrices(I), I.castShadow && w++), i.spotLightMatrix[_] = ne.matrix, I.castShadow) {
          const K = t.get(I);
          K.shadowIntensity = ne.intensity, K.shadowBias = ne.bias, K.shadowNormalBias = ne.normalBias, K.shadowRadius = ne.radius, K.shadowMapSize = ne.mapSize, i.spotShadow[_] = K, i.spotShadowMap[_] = te, x++;
        }
        _++;
      } else if (I.isRectAreaLight) {
        const Z = e.get(I);
        Z.color.copy(z).multiplyScalar(X), Z.halfWidth.set(I.width * 0.5, 0, 0), Z.halfHeight.set(0, I.height * 0.5, 0), i.rectArea[g] = Z, g++;
      } else if (I.isPointLight) {
        const Z = e.get(I);
        if (Z.color.copy(I.color).multiplyScalar(I.intensity), Z.distance = I.distance, Z.decay = I.decay, I.castShadow) {
          const ne = I.shadow, K = t.get(I);
          K.shadowIntensity = ne.intensity, K.shadowBias = ne.bias, K.shadowNormalBias = ne.normalBias, K.shadowRadius = ne.radius, K.shadowMapSize = ne.mapSize, K.shadowCameraNear = ne.camera.near, K.shadowCameraFar = ne.camera.far, i.pointShadow[m] = K, i.pointShadowMap[m] = te, i.pointShadowMatrix[m] = I.shadow.matrix, b++;
        }
        i.point[m] = Z, m++;
      } else if (I.isHemisphereLight) {
        const Z = e.get(I);
        Z.skyColor.copy(I.color).multiplyScalar(X), Z.groundColor.copy(I.groundColor).multiplyScalar(X), i.hemi[p] = Z, p++;
      }
    }
    g > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = _e.LTC_FLOAT_1, i.rectAreaLTC2 = _e.LTC_FLOAT_2) : (i.rectAreaLTC1 = _e.LTC_HALF_1, i.rectAreaLTC2 = _e.LTC_HALF_2)), i.ambient[0] = u, i.ambient[1] = h, i.ambient[2] = f;
    const D = i.hash;
    (D.directionalLength !== d || D.pointLength !== m || D.spotLength !== _ || D.rectAreaLength !== g || D.hemiLength !== p || D.numDirectionalShadows !== A || D.numPointShadows !== b || D.numSpotShadows !== x || D.numSpotMaps !== C || D.numLightProbes !== R) && (i.directional.length = d, i.spot.length = _, i.rectArea.length = g, i.point.length = m, i.hemi.length = p, i.directionalShadow.length = A, i.directionalShadowMap.length = A, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = x, i.spotShadowMap.length = x, i.directionalShadowMatrix.length = A, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = x + C - w, i.spotLightMap.length = C, i.numSpotLightShadowsWithMaps = w, i.numLightProbes = R, D.directionalLength = d, D.pointLength = m, D.spotLength = _, D.rectAreaLength = g, D.hemiLength = p, D.numDirectionalShadows = A, D.numPointShadows = b, D.numSpotShadows = x, D.numSpotMaps = C, D.numLightProbes = R, i.version = eA++);
  }
  function l(c, u) {
    let h = 0, f = 0, d = 0, m = 0, _ = 0;
    const g = u.matrixWorldInverse;
    for (let p = 0, A = c.length; p < A; p++) {
      const b = c[p];
      if (b.isDirectionalLight) {
        const x = i.directional[h];
        x.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(g), h++;
      } else if (b.isSpotLight) {
        const x = i.spot[d];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), x.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(g), d++;
      } else if (b.isRectAreaLight) {
        const x = i.rectArea[m];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), o.identity(), r.copy(b.matrixWorld), r.premultiply(g), o.extractRotation(r), x.halfWidth.set(b.width * 0.5, 0, 0), x.halfHeight.set(0, b.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), m++;
      } else if (b.isPointLight) {
        const x = i.point[f];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), f++;
      } else if (b.isHemisphereLight) {
        const x = i.hemi[_];
        x.direction.setFromMatrixPosition(b.matrixWorld), x.direction.transformDirection(g), _++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function fd(n) {
  const e = new nA(n), t = [], i = [];
  function s(u) {
    c.camera = u, t.length = 0, i.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function a() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = { lightsArray: t, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o };
}
function iA(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const o = e.get(s);
    let a;
    return o === void 0 ? (a = new fd(n), e.set(s, [a])) : r >= o.length ? (a = new fd(n), o.push(a)) : a = o[r], a;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const sA = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rA = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function oA(n, e, t) {
  let i = new Lu();
  const s = new he(), r = new he(), o = new nt(), a = new ey({ depthPacking: hv }), l = new ty(), c = {}, u = t.maxTextureSize, h = { [li]: nn, [nn]: li, [Bn]: Bn }, f = new sn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new he() }, radius: { value: 4 } }, vertexShader: sA, fragmentShader: rA }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const m = new xt();
  m.setAttribute("position", new Ut(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new Vt(m, f), g = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = qp;
  let p = this.type;
  this.render = function(w, R, D) {
    if (g.enabled === false || g.autoUpdate === false && g.needsUpdate === false || w.length === 0) return;
    const S = n.getRenderTarget(), M = n.getActiveCubeFace(), I = n.getActiveMipmapLevel(), z = n.state;
    z.setBlending(oi), z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(true), z.setScissorTest(false);
    const X = p !== $n && this.type === $n, J = p === $n && this.type !== $n;
    for (let te = 0, Z = w.length; te < Z; te++) {
      const ne = w[te], K = ne.shadow;
      if (K === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (K.autoUpdate === false && K.needsUpdate === false) continue;
      s.copy(K.mapSize);
      const fe = K.getFrameExtents();
      if (s.multiply(fe), r.copy(K.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / fe.x), s.x = r.x * fe.x, K.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / fe.y), s.y = r.y * fe.y, K.mapSize.y = r.y)), K.map === null || X === true || J === true) {
        const Se = this.type !== $n ? { minFilter: Nt, magFilter: Nt } : {};
        K.map !== null && K.map.dispose(), K.map = new Vn(s.x, s.y, Se), K.map.texture.name = ne.name + ".shadowMap", K.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(K.map), n.clear();
      const xe = K.getViewportCount();
      for (let Se = 0; Se < xe; Se++) {
        const Le = K.getViewport(Se);
        o.set(r.x * Le.x, r.y * Le.y, r.x * Le.z, r.y * Le.w), z.viewport(o), K.updateMatrices(ne, Se), i = K.getFrustum(), x(R, D, K.camera, ne, this.type);
      }
      K.isPointLightShadow !== true && this.type === $n && A(K, D), K.needsUpdate = false;
    }
    p = this.type, g.needsUpdate = false, n.setRenderTarget(S, M, I);
  };
  function A(w, R) {
    const D = e.update(_);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, d.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = true, d.needsUpdate = true), w.mapPass === null && (w.mapPass = new Vn(s.x, s.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, n.setRenderTarget(w.mapPass), n.clear(), n.renderBufferDirect(R, null, D, f, _, null), d.uniforms.shadow_pass.value = w.mapPass.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, n.setRenderTarget(w.map), n.clear(), n.renderBufferDirect(R, null, D, d, _, null);
  }
  function b(w, R, D, S) {
    let M = null;
    const I = D.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (I !== void 0) M = I;
    else if (M = D.isPointLight === true ? l : a, n.localClippingEnabled && R.clipShadows === true && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const z = M.uuid, X = R.uuid;
      let J = c[z];
      J === void 0 && (J = {}, c[z] = J);
      let te = J[X];
      te === void 0 && (te = M.clone(), J[X] = te, R.addEventListener("dispose", C)), M = te;
    }
    if (M.visible = R.visible, M.wireframe = R.wireframe, S === $n ? M.side = R.shadowSide !== null ? R.shadowSide : R.side : M.side = R.shadowSide !== null ? R.shadowSide : h[R.side], M.alphaMap = R.alphaMap, M.alphaTest = R.alphaTest, M.map = R.map, M.clipShadows = R.clipShadows, M.clippingPlanes = R.clippingPlanes, M.clipIntersection = R.clipIntersection, M.displacementMap = R.displacementMap, M.displacementScale = R.displacementScale, M.displacementBias = R.displacementBias, M.wireframeLinewidth = R.wireframeLinewidth, M.linewidth = R.linewidth, D.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const z = n.properties.get(M);
      z.light = D;
    }
    return M;
  }
  function x(w, R, D, S, M) {
    if (w.visible === false) return;
    if (w.layers.test(R.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === $n) && (!w.frustumCulled || i.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, w.matrixWorld);
      const X = e.update(w), J = w.material;
      if (Array.isArray(J)) {
        const te = X.groups;
        for (let Z = 0, ne = te.length; Z < ne; Z++) {
          const K = te[Z], fe = J[K.materialIndex];
          if (fe && fe.visible) {
            const xe = b(w, fe, S, M);
            w.onBeforeShadow(n, w, R, D, X, xe, K), n.renderBufferDirect(D, null, X, xe, w, K), w.onAfterShadow(n, w, R, D, X, xe, K);
          }
        }
      } else if (J.visible) {
        const te = b(w, J, S, M);
        w.onBeforeShadow(n, w, R, D, X, te, null), n.renderBufferDirect(D, null, X, te, w, null), w.onAfterShadow(n, w, R, D, X, te, null);
      }
    }
    const z = w.children;
    for (let X = 0, J = z.length; X < J; X++) x(z[X], R, D, S, M);
  }
  function C(w) {
    w.target.removeEventListener("dispose", C);
    for (const D in c) {
      const S = c[D], M = w.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const aA = { [ic]: sc, [rc]: lc, [oc]: cc, [ks]: ac, [sc]: ic, [lc]: rc, [cc]: oc, [ac]: ks };
function lA(n, e) {
  function t() {
    let V = false;
    const ye = new nt();
    let ee = null;
    const oe = new nt(0, 0, 0, 0);
    return { setMask: function(Te) {
      ee !== Te && !V && (n.colorMask(Te, Te, Te, Te), ee = Te);
    }, setLocked: function(Te) {
      V = Te;
    }, setClear: function(Te, Me, We, vt, Ot) {
      Ot === true && (Te *= vt, Me *= vt, We *= vt), ye.set(Te, Me, We, vt), oe.equals(ye) === false && (n.clearColor(Te, Me, We, vt), oe.copy(ye));
    }, reset: function() {
      V = false, ee = null, oe.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let V = false, ye = false, ee = null, oe = null, Te = null;
    return { setReversed: function(Me) {
      if (ye !== Me) {
        const We = e.get("EXT_clip_control");
        Me ? We.clipControlEXT(We.LOWER_LEFT_EXT, We.ZERO_TO_ONE_EXT) : We.clipControlEXT(We.LOWER_LEFT_EXT, We.NEGATIVE_ONE_TO_ONE_EXT), ye = Me;
        const vt = Te;
        Te = null, this.setClear(vt);
      }
    }, getReversed: function() {
      return ye;
    }, setTest: function(Me) {
      Me ? me(n.DEPTH_TEST) : Pe(n.DEPTH_TEST);
    }, setMask: function(Me) {
      ee !== Me && !V && (n.depthMask(Me), ee = Me);
    }, setFunc: function(Me) {
      if (ye && (Me = aA[Me]), oe !== Me) {
        switch (Me) {
          case ic:
            n.depthFunc(n.NEVER);
            break;
          case sc:
            n.depthFunc(n.ALWAYS);
            break;
          case rc:
            n.depthFunc(n.LESS);
            break;
          case ks:
            n.depthFunc(n.LEQUAL);
            break;
          case oc:
            n.depthFunc(n.EQUAL);
            break;
          case ac:
            n.depthFunc(n.GEQUAL);
            break;
          case lc:
            n.depthFunc(n.GREATER);
            break;
          case cc:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        oe = Me;
      }
    }, setLocked: function(Me) {
      V = Me;
    }, setClear: function(Me) {
      Te !== Me && (ye && (Me = 1 - Me), n.clearDepth(Me), Te = Me);
    }, reset: function() {
      V = false, ee = null, oe = null, Te = null, ye = false;
    } };
  }
  function s() {
    let V = false, ye = null, ee = null, oe = null, Te = null, Me = null, We = null, vt = null, Ot = null;
    return { setTest: function(at) {
      V || (at ? me(n.STENCIL_TEST) : Pe(n.STENCIL_TEST));
    }, setMask: function(at) {
      ye !== at && !V && (n.stencilMask(at), ye = at);
    }, setFunc: function(at, Mn, Xn) {
      (ee !== at || oe !== Mn || Te !== Xn) && (n.stencilFunc(at, Mn, Xn), ee = at, oe = Mn, Te = Xn);
    }, setOp: function(at, Mn, Xn) {
      (Me !== at || We !== Mn || vt !== Xn) && (n.stencilOp(at, Mn, Xn), Me = at, We = Mn, vt = Xn);
    }, setLocked: function(at) {
      V = at;
    }, setClear: function(at) {
      Ot !== at && (n.clearStencil(at), Ot = at);
    }, reset: function() {
      V = false, ye = null, ee = null, oe = null, Te = null, Me = null, We = null, vt = null, Ot = null;
    } };
  }
  const r = new t(), o = new i(), a = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], m = null, _ = false, g = null, p = null, A = null, b = null, x = null, C = null, w = null, R = new we(0, 0, 0), D = 0, S = false, M = null, I = null, z = null, X = null, J = null;
  const te = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Z = false, ne = 0;
  const K = n.getParameter(n.VERSION);
  K.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(K)[1]), Z = ne >= 1) : K.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), Z = ne >= 2);
  let fe = null, xe = {};
  const Se = n.getParameter(n.SCISSOR_BOX), Le = n.getParameter(n.VIEWPORT), Ze = new nt().fromArray(Se), ie = new nt().fromArray(Le);
  function ue(V, ye, ee, oe) {
    const Te = new Uint8Array(4), Me = n.createTexture();
    n.bindTexture(V, Me), n.texParameteri(V, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(V, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let We = 0; We < ee; We++) V === n.TEXTURE_3D || V === n.TEXTURE_2D_ARRAY ? n.texImage3D(ye, 0, n.RGBA, 1, 1, oe, 0, n.RGBA, n.UNSIGNED_BYTE, Te) : n.texImage2D(ye + We, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, Te);
    return Me;
  }
  const be = {};
  be[n.TEXTURE_2D] = ue(n.TEXTURE_2D, n.TEXTURE_2D, 1), be[n.TEXTURE_CUBE_MAP] = ue(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), be[n.TEXTURE_2D_ARRAY] = ue(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), be[n.TEXTURE_3D] = ue(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), me(n.DEPTH_TEST), o.setFunc(ks), O(false), F(Fh), me(n.CULL_FACE), T(oi);
  function me(V) {
    u[V] !== true && (n.enable(V), u[V] = true);
  }
  function Pe(V) {
    u[V] !== false && (n.disable(V), u[V] = false);
  }
  function je(V, ye) {
    return h[V] !== ye ? (n.bindFramebuffer(V, ye), h[V] = ye, V === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = ye), V === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = ye), true) : false;
  }
  function Re(V, ye) {
    let ee = d, oe = false;
    if (V) {
      ee = f.get(ye), ee === void 0 && (ee = [], f.set(ye, ee));
      const Te = V.textures;
      if (ee.length !== Te.length || ee[0] !== n.COLOR_ATTACHMENT0) {
        for (let Me = 0, We = Te.length; Me < We; Me++) ee[Me] = n.COLOR_ATTACHMENT0 + Me;
        ee.length = Te.length, oe = true;
      }
    } else ee[0] !== n.BACK && (ee[0] = n.BACK, oe = true);
    oe && n.drawBuffers(ee);
  }
  function $e(V) {
    return m !== V ? (n.useProgram(V), m = V, true) : false;
  }
  const P = { [es]: n.FUNC_ADD, [zx]: n.FUNC_SUBTRACT, [Hx]: n.FUNC_REVERSE_SUBTRACT };
  P[Vx] = n.MIN, P[kx] = n.MAX;
  const U = { [Gx]: n.ZERO, [Wx]: n.ONE, [Xx]: n.SRC_COLOR, [tc]: n.SRC_ALPHA, [Jx]: n.SRC_ALPHA_SATURATE, [Kx]: n.DST_COLOR, [qx]: n.DST_ALPHA, [Yx]: n.ONE_MINUS_SRC_COLOR, [nc]: n.ONE_MINUS_SRC_ALPHA, [Zx]: n.ONE_MINUS_DST_COLOR, [jx]: n.ONE_MINUS_DST_ALPHA, [Qx]: n.CONSTANT_COLOR, [$x]: n.ONE_MINUS_CONSTANT_COLOR, [ev]: n.CONSTANT_ALPHA, [tv]: n.ONE_MINUS_CONSTANT_ALPHA };
  function T(V, ye, ee, oe, Te, Me, We, vt, Ot, at) {
    if (V === oi) {
      _ === true && (Pe(n.BLEND), _ = false);
      return;
    }
    if (_ === false && (me(n.BLEND), _ = true), V !== Bx) {
      if (V !== g || at !== S) {
        if ((p !== es || x !== es) && (n.blendEquation(n.FUNC_ADD), p = es, x = es), at) switch (V) {
          case Fs:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Bh:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case zh:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Hh:
            n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", V);
            break;
        }
        else switch (V) {
          case Fs:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Bh:
            n.blendFunc(n.SRC_ALPHA, n.ONE);
            break;
          case zh:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Hh:
            n.blendFunc(n.ZERO, n.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", V);
            break;
        }
        A = null, b = null, C = null, w = null, R.set(0, 0, 0), D = 0, g = V, S = at;
      }
      return;
    }
    Te = Te || ye, Me = Me || ee, We = We || oe, (ye !== p || Te !== x) && (n.blendEquationSeparate(P[ye], P[Te]), p = ye, x = Te), (ee !== A || oe !== b || Me !== C || We !== w) && (n.blendFuncSeparate(U[ee], U[oe], U[Me], U[We]), A = ee, b = oe, C = Me, w = We), (vt.equals(R) === false || Ot !== D) && (n.blendColor(vt.r, vt.g, vt.b, Ot), R.copy(vt), D = Ot), g = V, S = false;
  }
  function se(V, ye) {
    V.side === Bn ? Pe(n.CULL_FACE) : me(n.CULL_FACE);
    let ee = V.side === nn;
    ye && (ee = !ee), O(ee), V.blending === Fs && V.transparent === false ? T(oi) : T(V.blending, V.blendEquation, V.blendSrc, V.blendDst, V.blendEquationAlpha, V.blendSrcAlpha, V.blendDstAlpha, V.blendColor, V.blendAlpha, V.premultipliedAlpha), o.setFunc(V.depthFunc), o.setTest(V.depthTest), o.setMask(V.depthWrite), r.setMask(V.colorWrite);
    const oe = V.stencilWrite;
    a.setTest(oe), oe && (a.setMask(V.stencilWriteMask), a.setFunc(V.stencilFunc, V.stencilRef, V.stencilFuncMask), a.setOp(V.stencilFail, V.stencilZFail, V.stencilZPass)), j(V.polygonOffset, V.polygonOffsetFactor, V.polygonOffsetUnits), V.alphaToCoverage === true ? me(n.SAMPLE_ALPHA_TO_COVERAGE) : Pe(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function O(V) {
    M !== V && (V ? n.frontFace(n.CW) : n.frontFace(n.CCW), M = V);
  }
  function F(V) {
    V !== Ux ? (me(n.CULL_FACE), V !== I && (V === Fh ? n.cullFace(n.BACK) : V === Ox ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : Pe(n.CULL_FACE), I = V;
  }
  function H(V) {
    V !== z && (Z && n.lineWidth(V), z = V);
  }
  function j(V, ye, ee) {
    V ? (me(n.POLYGON_OFFSET_FILL), (X !== ye || J !== ee) && (n.polygonOffset(ye, ee), X = ye, J = ee)) : Pe(n.POLYGON_OFFSET_FILL);
  }
  function B(V) {
    V ? me(n.SCISSOR_TEST) : Pe(n.SCISSOR_TEST);
  }
  function y(V) {
    V === void 0 && (V = n.TEXTURE0 + te - 1), fe !== V && (n.activeTexture(V), fe = V);
  }
  function v(V, ye, ee) {
    ee === void 0 && (fe === null ? ee = n.TEXTURE0 + te - 1 : ee = fe);
    let oe = xe[ee];
    oe === void 0 && (oe = { type: void 0, texture: void 0 }, xe[ee] = oe), (oe.type !== V || oe.texture !== ye) && (fe !== ee && (n.activeTexture(ee), fe = ee), n.bindTexture(V, ye || be[V]), oe.type = V, oe.texture = ye);
  }
  function L() {
    const V = xe[fe];
    V !== void 0 && V.type !== void 0 && (n.bindTexture(V.type, null), V.type = void 0, V.texture = void 0);
  }
  function k() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Y() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function q() {
    try {
      n.texSubImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function ce() {
    try {
      n.texSubImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function re() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function de() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function De() {
    try {
      n.texStorage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function ae() {
    try {
      n.texStorage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function ge() {
    try {
      n.texImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Ce() {
    try {
      n.texImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Ne(V) {
    Ze.equals(V) === false && (n.scissor(V.x, V.y, V.z, V.w), Ze.copy(V));
  }
  function pe(V) {
    ie.equals(V) === false && (n.viewport(V.x, V.y, V.z, V.w), ie.copy(V));
  }
  function Be(V, ye) {
    let ee = c.get(ye);
    ee === void 0 && (ee = /* @__PURE__ */ new WeakMap(), c.set(ye, ee));
    let oe = ee.get(V);
    oe === void 0 && (oe = n.getUniformBlockIndex(ye, V.name), ee.set(V, oe));
  }
  function Ve(V, ye) {
    const oe = c.get(ye).get(V);
    l.get(ye) !== oe && (n.uniformBlockBinding(ye, oe, V.__bindingPointIndex), l.set(ye, oe));
  }
  function ft() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), o.setReversed(false), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), u = {}, fe = null, xe = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], m = null, _ = false, g = null, p = null, A = null, b = null, x = null, C = null, w = null, R = new we(0, 0, 0), D = 0, S = false, M = null, I = null, z = null, X = null, J = null, Ze.set(0, 0, n.canvas.width, n.canvas.height), ie.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: me, disable: Pe, bindFramebuffer: je, drawBuffers: Re, useProgram: $e, setBlending: T, setMaterial: se, setFlipSided: O, setCullFace: F, setLineWidth: H, setPolygonOffset: j, setScissorTest: B, activeTexture: y, bindTexture: v, unbindTexture: L, compressedTexImage2D: k, compressedTexImage3D: Y, texImage2D: ge, texImage3D: Ce, updateUBOMapping: Be, uniformBlockBinding: Ve, texStorage2D: De, texStorage3D: ae, texSubImage2D: q, texSubImage3D: ce, compressedTexSubImage2D: re, compressedTexSubImage3D: de, scissor: Ne, viewport: pe, reset: ft };
}
function cA(n, e, t, i, s, r, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new he(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let d = false;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(y, v) {
    return d ? new OffscreenCanvas(y, v) : Wr("canvas");
  }
  function _(y, v, L) {
    let k = 1;
    const Y = B(y);
    if ((Y.width > L || Y.height > L) && (k = L / Math.max(Y.width, Y.height)), k < 1) if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
      const q = Math.floor(k * Y.width), ce = Math.floor(k * Y.height);
      h === void 0 && (h = m(q, ce));
      const re = v ? m(q, ce) : h;
      return re.width = q, re.height = ce, re.getContext("2d").drawImage(y, 0, 0, q, ce), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + q + "x" + ce + ")."), re;
    } else return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), y;
    return y;
  }
  function g(y) {
    return y.generateMipmaps;
  }
  function p(y) {
    n.generateMipmap(y);
  }
  function A(y) {
    return y.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? n.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function b(y, v, L, k, Y = false) {
    if (y !== null) {
      if (n[y] !== void 0) return n[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let q = v;
    if (v === n.RED && (L === n.FLOAT && (q = n.R32F), L === n.HALF_FLOAT && (q = n.R16F), L === n.UNSIGNED_BYTE && (q = n.R8)), v === n.RED_INTEGER && (L === n.UNSIGNED_BYTE && (q = n.R8UI), L === n.UNSIGNED_SHORT && (q = n.R16UI), L === n.UNSIGNED_INT && (q = n.R32UI), L === n.BYTE && (q = n.R8I), L === n.SHORT && (q = n.R16I), L === n.INT && (q = n.R32I)), v === n.RG && (L === n.FLOAT && (q = n.RG32F), L === n.HALF_FLOAT && (q = n.RG16F), L === n.UNSIGNED_BYTE && (q = n.RG8)), v === n.RG_INTEGER && (L === n.UNSIGNED_BYTE && (q = n.RG8UI), L === n.UNSIGNED_SHORT && (q = n.RG16UI), L === n.UNSIGNED_INT && (q = n.RG32UI), L === n.BYTE && (q = n.RG8I), L === n.SHORT && (q = n.RG16I), L === n.INT && (q = n.RG32I)), v === n.RGB_INTEGER && (L === n.UNSIGNED_BYTE && (q = n.RGB8UI), L === n.UNSIGNED_SHORT && (q = n.RGB16UI), L === n.UNSIGNED_INT && (q = n.RGB32UI), L === n.BYTE && (q = n.RGB8I), L === n.SHORT && (q = n.RGB16I), L === n.INT && (q = n.RGB32I)), v === n.RGBA_INTEGER && (L === n.UNSIGNED_BYTE && (q = n.RGBA8UI), L === n.UNSIGNED_SHORT && (q = n.RGBA16UI), L === n.UNSIGNED_INT && (q = n.RGBA32UI), L === n.BYTE && (q = n.RGBA8I), L === n.SHORT && (q = n.RGBA16I), L === n.INT && (q = n.RGBA32I)), v === n.RGB && L === n.UNSIGNED_INT_5_9_9_9_REV && (q = n.RGB9_E5), v === n.RGBA) {
      const ce = Y ? ma : Ke.getTransfer(k);
      L === n.FLOAT && (q = n.RGBA32F), L === n.HALF_FLOAT && (q = n.RGBA16F), L === n.UNSIGNED_BYTE && (q = ce === lt ? n.SRGB8_ALPHA8 : n.RGBA8), L === n.UNSIGNED_SHORT_4_4_4_4 && (q = n.RGBA4), L === n.UNSIGNED_SHORT_5_5_5_1 && (q = n.RGB5_A1);
    }
    return (q === n.R16F || q === n.R32F || q === n.RG16F || q === n.RG32F || q === n.RGBA16F || q === n.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function x(y, v) {
    let L;
    return y ? v === null || v === os || v === zr ? L = n.DEPTH24_STENCIL8 : v === Rn ? L = n.DEPTH32F_STENCIL8 : v === Br && (L = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === os || v === zr ? L = n.DEPTH_COMPONENT24 : v === Rn ? L = n.DEPTH_COMPONENT32F : v === Br && (L = n.DEPTH_COMPONENT16), L;
  }
  function C(y, v) {
    return g(y) === true || y.isFramebufferTexture && y.minFilter !== Nt && y.minFilter !== tn ? Math.log2(Math.max(v.width, v.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length : 1;
  }
  function w(y) {
    const v = y.target;
    v.removeEventListener("dispose", w), D(v), v.isVideoTexture && u.delete(v);
  }
  function R(y) {
    const v = y.target;
    v.removeEventListener("dispose", R), M(v);
  }
  function D(y) {
    const v = i.get(y);
    if (v.__webglInit === void 0) return;
    const L = y.source, k = f.get(L);
    if (k) {
      const Y = k[v.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && S(y), Object.keys(k).length === 0 && f.delete(L);
    }
    i.remove(y);
  }
  function S(y) {
    const v = i.get(y);
    n.deleteTexture(v.__webglTexture);
    const L = y.source, k = f.get(L);
    delete k[v.__cacheKey], o.memory.textures--;
  }
  function M(y) {
    const v = i.get(y);
    if (y.depthTexture && (y.depthTexture.dispose(), i.remove(y.depthTexture)), y.isWebGLCubeRenderTarget) for (let k = 0; k < 6; k++) {
      if (Array.isArray(v.__webglFramebuffer[k])) for (let Y = 0; Y < v.__webglFramebuffer[k].length; Y++) n.deleteFramebuffer(v.__webglFramebuffer[k][Y]);
      else n.deleteFramebuffer(v.__webglFramebuffer[k]);
      v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer[k]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let k = 0; k < v.__webglFramebuffer.length; k++) n.deleteFramebuffer(v.__webglFramebuffer[k]);
      else n.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && n.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let k = 0; k < v.__webglColorRenderbuffer.length; k++) v.__webglColorRenderbuffer[k] && n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);
      v.__webglDepthRenderbuffer && n.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const L = y.textures;
    for (let k = 0, Y = L.length; k < Y; k++) {
      const q = i.get(L[k]);
      q.__webglTexture && (n.deleteTexture(q.__webglTexture), o.memory.textures--), i.remove(L[k]);
    }
    i.remove(y);
  }
  let I = 0;
  function z() {
    I = 0;
  }
  function X() {
    const y = I;
    return y >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + s.maxTextures), I += 1, y;
  }
  function J(y) {
    const v = [];
    return v.push(y.wrapS), v.push(y.wrapT), v.push(y.wrapR || 0), v.push(y.magFilter), v.push(y.minFilter), v.push(y.anisotropy), v.push(y.internalFormat), v.push(y.format), v.push(y.type), v.push(y.generateMipmaps), v.push(y.premultiplyAlpha), v.push(y.flipY), v.push(y.unpackAlignment), v.push(y.colorSpace), v.join();
  }
  function te(y, v) {
    const L = i.get(y);
    if (y.isVideoTexture && H(y), y.isRenderTargetTexture === false && y.version > 0 && L.__version !== y.version) {
      const k = y.image;
      if (k === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (k.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ie(L, y, v);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, L.__webglTexture, n.TEXTURE0 + v);
  }
  function Z(y, v) {
    const L = i.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      ie(L, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, L.__webglTexture, n.TEXTURE0 + v);
  }
  function ne(y, v) {
    const L = i.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      ie(L, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, L.__webglTexture, n.TEXTURE0 + v);
  }
  function K(y, v) {
    const L = i.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      ue(L, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, L.__webglTexture, n.TEXTURE0 + v);
  }
  const fe = { [Xs]: n.REPEAT, [Ei]: n.CLAMP_TO_EDGE, [da]: n.MIRRORED_REPEAT }, xe = { [Nt]: n.NEAREST, [nm]: n.NEAREST_MIPMAP_NEAREST, [gr]: n.NEAREST_MIPMAP_LINEAR, [tn]: n.LINEAR, [Jo]: n.LINEAR_MIPMAP_NEAREST, [si]: n.LINEAR_MIPMAP_LINEAR }, Se = { [dv]: n.NEVER, [vv]: n.ALWAYS, [pv]: n.LESS, [dm]: n.LEQUAL, [mv]: n.EQUAL, [xv]: n.GEQUAL, [gv]: n.GREATER, [_v]: n.NOTEQUAL };
  function Le(y, v) {
    if (v.type === Rn && e.has("OES_texture_float_linear") === false && (v.magFilter === tn || v.magFilter === Jo || v.magFilter === gr || v.magFilter === si || v.minFilter === tn || v.minFilter === Jo || v.minFilter === gr || v.minFilter === si) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(y, n.TEXTURE_WRAP_S, fe[v.wrapS]), n.texParameteri(y, n.TEXTURE_WRAP_T, fe[v.wrapT]), (y === n.TEXTURE_3D || y === n.TEXTURE_2D_ARRAY) && n.texParameteri(y, n.TEXTURE_WRAP_R, fe[v.wrapR]), n.texParameteri(y, n.TEXTURE_MAG_FILTER, xe[v.magFilter]), n.texParameteri(y, n.TEXTURE_MIN_FILTER, xe[v.minFilter]), v.compareFunction && (n.texParameteri(y, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(y, n.TEXTURE_COMPARE_FUNC, Se[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Nt || v.minFilter !== gr && v.minFilter !== si || v.type === Rn && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || i.get(v).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(y, L.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), i.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Ze(y, v) {
    let L = false;
    y.__webglInit === void 0 && (y.__webglInit = true, v.addEventListener("dispose", w));
    const k = v.source;
    let Y = f.get(k);
    Y === void 0 && (Y = {}, f.set(k, Y));
    const q = J(v);
    if (q !== y.__cacheKey) {
      Y[q] === void 0 && (Y[q] = { texture: n.createTexture(), usedTimes: 0 }, o.memory.textures++, L = true), Y[q].usedTimes++;
      const ce = Y[y.__cacheKey];
      ce !== void 0 && (Y[y.__cacheKey].usedTimes--, ce.usedTimes === 0 && S(v)), y.__cacheKey = q, y.__webglTexture = Y[q].texture;
    }
    return L;
  }
  function ie(y, v, L) {
    let k = n.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (k = n.TEXTURE_2D_ARRAY), v.isData3DTexture && (k = n.TEXTURE_3D);
    const Y = Ze(y, v), q = v.source;
    t.bindTexture(k, y.__webglTexture, n.TEXTURE0 + L);
    const ce = i.get(q);
    if (q.version !== ce.__version || Y === true) {
      t.activeTexture(n.TEXTURE0 + L);
      const re = Ke.getPrimaries(Ke.workingColorSpace), de = v.colorSpace === Ai ? null : Ke.getPrimaries(v.colorSpace), De = v.colorSpace === Ai || re === de ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, De);
      let ae = _(v.image, false, s.maxTextureSize);
      ae = j(v, ae);
      const ge = r.convert(v.format, v.colorSpace), Ce = r.convert(v.type);
      let Ne = b(v.internalFormat, ge, Ce, v.colorSpace, v.isVideoTexture);
      Le(k, v);
      let pe;
      const Be = v.mipmaps, Ve = v.isVideoTexture !== true, ft = ce.__version === void 0 || Y === true, V = q.dataReady, ye = C(v, ae);
      if (v.isDepthTexture) Ne = x(v.format === Vr, v.type), ft && (Ve ? t.texStorage2D(n.TEXTURE_2D, 1, Ne, ae.width, ae.height) : t.texImage2D(n.TEXTURE_2D, 0, Ne, ae.width, ae.height, 0, ge, Ce, null));
      else if (v.isDataTexture) if (Be.length > 0) {
        Ve && ft && t.texStorage2D(n.TEXTURE_2D, ye, Ne, Be[0].width, Be[0].height);
        for (let ee = 0, oe = Be.length; ee < oe; ee++) pe = Be[ee], Ve ? V && t.texSubImage2D(n.TEXTURE_2D, ee, 0, 0, pe.width, pe.height, ge, Ce, pe.data) : t.texImage2D(n.TEXTURE_2D, ee, Ne, pe.width, pe.height, 0, ge, Ce, pe.data);
        v.generateMipmaps = false;
      } else Ve ? (ft && t.texStorage2D(n.TEXTURE_2D, ye, Ne, ae.width, ae.height), V && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, ae.width, ae.height, ge, Ce, ae.data)) : t.texImage2D(n.TEXTURE_2D, 0, Ne, ae.width, ae.height, 0, ge, Ce, ae.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Ve && ft && t.texStorage3D(n.TEXTURE_2D_ARRAY, ye, Ne, Be[0].width, Be[0].height, ae.depth);
        for (let ee = 0, oe = Be.length; ee < oe; ee++) if (pe = Be[ee], v.format !== mn) if (ge !== null) if (Ve) {
          if (V) if (v.layerUpdates.size > 0) {
            const Te = kf(pe.width, pe.height, v.format, v.type);
            for (const Me of v.layerUpdates) {
              const We = pe.data.subarray(Me * Te / pe.data.BYTES_PER_ELEMENT, (Me + 1) * Te / pe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ee, 0, 0, Me, pe.width, pe.height, 1, ge, We);
            }
            v.clearLayerUpdates();
          } else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ee, 0, 0, 0, pe.width, pe.height, ae.depth, ge, pe.data);
        } else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, ee, Ne, pe.width, pe.height, ae.depth, 0, pe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ve ? V && t.texSubImage3D(n.TEXTURE_2D_ARRAY, ee, 0, 0, 0, pe.width, pe.height, ae.depth, ge, Ce, pe.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, ee, Ne, pe.width, pe.height, ae.depth, 0, ge, Ce, pe.data);
      } else {
        Ve && ft && t.texStorage2D(n.TEXTURE_2D, ye, Ne, Be[0].width, Be[0].height);
        for (let ee = 0, oe = Be.length; ee < oe; ee++) pe = Be[ee], v.format !== mn ? ge !== null ? Ve ? V && t.compressedTexSubImage2D(n.TEXTURE_2D, ee, 0, 0, pe.width, pe.height, ge, pe.data) : t.compressedTexImage2D(n.TEXTURE_2D, ee, Ne, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? V && t.texSubImage2D(n.TEXTURE_2D, ee, 0, 0, pe.width, pe.height, ge, Ce, pe.data) : t.texImage2D(n.TEXTURE_2D, ee, Ne, pe.width, pe.height, 0, ge, Ce, pe.data);
      }
      else if (v.isDataArrayTexture) if (Ve) {
        if (ft && t.texStorage3D(n.TEXTURE_2D_ARRAY, ye, Ne, ae.width, ae.height, ae.depth), V) if (v.layerUpdates.size > 0) {
          const ee = kf(ae.width, ae.height, v.format, v.type);
          for (const oe of v.layerUpdates) {
            const Te = ae.data.subarray(oe * ee / ae.data.BYTES_PER_ELEMENT, (oe + 1) * ee / ae.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, oe, ae.width, ae.height, 1, ge, Ce, Te);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ae.width, ae.height, ae.depth, ge, Ce, ae.data);
      } else t.texImage3D(n.TEXTURE_2D_ARRAY, 0, Ne, ae.width, ae.height, ae.depth, 0, ge, Ce, ae.data);
      else if (v.isData3DTexture) Ve ? (ft && t.texStorage3D(n.TEXTURE_3D, ye, Ne, ae.width, ae.height, ae.depth), V && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, ae.width, ae.height, ae.depth, ge, Ce, ae.data)) : t.texImage3D(n.TEXTURE_3D, 0, Ne, ae.width, ae.height, ae.depth, 0, ge, Ce, ae.data);
      else if (v.isFramebufferTexture) {
        if (ft) if (Ve) t.texStorage2D(n.TEXTURE_2D, ye, Ne, ae.width, ae.height);
        else {
          let ee = ae.width, oe = ae.height;
          for (let Te = 0; Te < ye; Te++) t.texImage2D(n.TEXTURE_2D, Te, Ne, ee, oe, 0, ge, Ce, null), ee >>= 1, oe >>= 1;
        }
      } else if (Be.length > 0) {
        if (Ve && ft) {
          const ee = B(Be[0]);
          t.texStorage2D(n.TEXTURE_2D, ye, Ne, ee.width, ee.height);
        }
        for (let ee = 0, oe = Be.length; ee < oe; ee++) pe = Be[ee], Ve ? V && t.texSubImage2D(n.TEXTURE_2D, ee, 0, 0, ge, Ce, pe) : t.texImage2D(n.TEXTURE_2D, ee, Ne, ge, Ce, pe);
        v.generateMipmaps = false;
      } else if (Ve) {
        if (ft) {
          const ee = B(ae);
          t.texStorage2D(n.TEXTURE_2D, ye, Ne, ee.width, ee.height);
        }
        V && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, ge, Ce, ae);
      } else t.texImage2D(n.TEXTURE_2D, 0, Ne, ge, Ce, ae);
      g(v) && p(k), ce.__version = q.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function ue(y, v, L) {
    if (v.image.length !== 6) return;
    const k = Ze(y, v), Y = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, y.__webglTexture, n.TEXTURE0 + L);
    const q = i.get(Y);
    if (Y.version !== q.__version || k === true) {
      t.activeTexture(n.TEXTURE0 + L);
      const ce = Ke.getPrimaries(Ke.workingColorSpace), re = v.colorSpace === Ai ? null : Ke.getPrimaries(v.colorSpace), de = v.colorSpace === Ai || ce === re ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, de);
      const De = v.isCompressedTexture || v.image[0].isCompressedTexture, ae = v.image[0] && v.image[0].isDataTexture, ge = [];
      for (let oe = 0; oe < 6; oe++) !De && !ae ? ge[oe] = _(v.image[oe], true, s.maxCubemapSize) : ge[oe] = ae ? v.image[oe].image : v.image[oe], ge[oe] = j(v, ge[oe]);
      const Ce = ge[0], Ne = r.convert(v.format, v.colorSpace), pe = r.convert(v.type), Be = b(v.internalFormat, Ne, pe, v.colorSpace), Ve = v.isVideoTexture !== true, ft = q.__version === void 0 || k === true, V = Y.dataReady;
      let ye = C(v, Ce);
      Le(n.TEXTURE_CUBE_MAP, v);
      let ee;
      if (De) {
        Ve && ft && t.texStorage2D(n.TEXTURE_CUBE_MAP, ye, Be, Ce.width, Ce.height);
        for (let oe = 0; oe < 6; oe++) {
          ee = ge[oe].mipmaps;
          for (let Te = 0; Te < ee.length; Te++) {
            const Me = ee[Te];
            v.format !== mn ? Ne !== null ? Ve ? V && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te, 0, 0, Me.width, Me.height, Ne, Me.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te, Be, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ve ? V && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te, 0, 0, Me.width, Me.height, Ne, pe, Me.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te, Be, Me.width, Me.height, 0, Ne, pe, Me.data);
          }
        }
      } else {
        if (ee = v.mipmaps, Ve && ft) {
          ee.length > 0 && ye++;
          const oe = B(ge[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, ye, Be, oe.width, oe.height);
        }
        for (let oe = 0; oe < 6; oe++) if (ae) {
          Ve ? V && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, 0, 0, ge[oe].width, ge[oe].height, Ne, pe, ge[oe].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, Be, ge[oe].width, ge[oe].height, 0, Ne, pe, ge[oe].data);
          for (let Te = 0; Te < ee.length; Te++) {
            const We = ee[Te].image[oe].image;
            Ve ? V && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te + 1, 0, 0, We.width, We.height, Ne, pe, We.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te + 1, Be, We.width, We.height, 0, Ne, pe, We.data);
          }
        } else {
          Ve ? V && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, 0, 0, Ne, pe, ge[oe]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, Be, Ne, pe, ge[oe]);
          for (let Te = 0; Te < ee.length; Te++) {
            const Me = ee[Te];
            Ve ? V && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te + 1, 0, 0, Ne, pe, Me.image[oe]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Te + 1, Be, Ne, pe, Me.image[oe]);
          }
        }
      }
      g(v) && p(n.TEXTURE_CUBE_MAP), q.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function be(y, v, L, k, Y, q) {
    const ce = r.convert(L.format, L.colorSpace), re = r.convert(L.type), de = b(L.internalFormat, ce, re, L.colorSpace), De = i.get(v), ae = i.get(L);
    if (ae.__renderTarget = v, !De.__hasExternalTextures) {
      const ge = Math.max(1, v.width >> q), Ce = Math.max(1, v.height >> q);
      Y === n.TEXTURE_3D || Y === n.TEXTURE_2D_ARRAY ? t.texImage3D(Y, q, de, ge, Ce, v.depth, 0, ce, re, null) : t.texImage2D(Y, q, de, ge, Ce, 0, ce, re, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, y), F(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, k, Y, ae.__webglTexture, 0, O(v)) : (Y === n.TEXTURE_2D || Y >= n.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, k, Y, ae.__webglTexture, q), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function me(y, v, L) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, y), v.depthBuffer) {
      const k = v.depthTexture, Y = k && k.isDepthTexture ? k.type : null, q = x(v.stencilBuffer, Y), ce = v.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, re = O(v);
      F(v) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, re, q, v.width, v.height) : L ? n.renderbufferStorageMultisample(n.RENDERBUFFER, re, q, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, q, v.width, v.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, ce, n.RENDERBUFFER, y);
    } else {
      const k = v.textures;
      for (let Y = 0; Y < k.length; Y++) {
        const q = k[Y], ce = r.convert(q.format, q.colorSpace), re = r.convert(q.type), de = b(q.internalFormat, ce, re, q.colorSpace), De = O(v);
        L && F(v) === false ? n.renderbufferStorageMultisample(n.RENDERBUFFER, De, de, v.width, v.height) : F(v) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, De, de, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, de, v.width, v.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function Pe(y, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, y), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const k = i.get(v.depthTexture);
    k.__renderTarget = v, (!k.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), te(v.depthTexture, 0);
    const Y = k.__webglTexture, q = O(v);
    if (v.depthTexture.format === Hr) F(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, Y, 0, q) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, Y, 0);
    else if (v.depthTexture.format === Vr) F(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, Y, 0, q) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, Y, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function je(y) {
    const v = i.get(y), L = y.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== y.depthTexture) {
      const k = y.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), k) {
        const Y = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, k.removeEventListener("dispose", Y);
        };
        k.addEventListener("dispose", Y), v.__depthDisposeCallback = Y;
      }
      v.__boundDepthTexture = k;
    }
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (L) throw new Error("target.depthTexture not supported in Cube render targets");
      Pe(v.__webglFramebuffer, y);
    } else if (L) {
      v.__webglDepthbuffer = [];
      for (let k = 0; k < 6; k++) if (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[k]), v.__webglDepthbuffer[k] === void 0) v.__webglDepthbuffer[k] = n.createRenderbuffer(), me(v.__webglDepthbuffer[k], y, false);
      else {
        const Y = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, q = v.__webglDepthbuffer[k];
        n.bindRenderbuffer(n.RENDERBUFFER, q), n.framebufferRenderbuffer(n.FRAMEBUFFER, Y, n.RENDERBUFFER, q);
      }
    } else if (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = n.createRenderbuffer(), me(v.__webglDepthbuffer, y, false);
    else {
      const k = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, Y), n.framebufferRenderbuffer(n.FRAMEBUFFER, k, n.RENDERBUFFER, Y);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function Re(y, v, L) {
    const k = i.get(y);
    v !== void 0 && be(k.__webglFramebuffer, y, y.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), L !== void 0 && je(y);
  }
  function $e(y) {
    const v = y.texture, L = i.get(y), k = i.get(v);
    y.addEventListener("dispose", R);
    const Y = y.textures, q = y.isWebGLCubeRenderTarget === true, ce = Y.length > 1;
    if (ce || (k.__webglTexture === void 0 && (k.__webglTexture = n.createTexture()), k.__version = v.version, o.memory.textures++), q) {
      L.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++) if (v.mipmaps && v.mipmaps.length > 0) {
        L.__webglFramebuffer[re] = [];
        for (let de = 0; de < v.mipmaps.length; de++) L.__webglFramebuffer[re][de] = n.createFramebuffer();
      } else L.__webglFramebuffer[re] = n.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let re = 0; re < v.mipmaps.length; re++) L.__webglFramebuffer[re] = n.createFramebuffer();
      } else L.__webglFramebuffer = n.createFramebuffer();
      if (ce) for (let re = 0, de = Y.length; re < de; re++) {
        const De = i.get(Y[re]);
        De.__webglTexture === void 0 && (De.__webglTexture = n.createTexture(), o.memory.textures++);
      }
      if (y.samples > 0 && F(y) === false) {
        L.__webglMultisampledFramebuffer = n.createFramebuffer(), L.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, L.__webglMultisampledFramebuffer);
        for (let re = 0; re < Y.length; re++) {
          const de = Y[re];
          L.__webglColorRenderbuffer[re] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, L.__webglColorRenderbuffer[re]);
          const De = r.convert(de.format, de.colorSpace), ae = r.convert(de.type), ge = b(de.internalFormat, De, ae, de.colorSpace, y.isXRRenderTarget === true), Ce = O(y);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Ce, ge, y.width, y.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + re, n.RENDERBUFFER, L.__webglColorRenderbuffer[re]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), y.depthBuffer && (L.__webglDepthRenderbuffer = n.createRenderbuffer(), me(L.__webglDepthRenderbuffer, y, true)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, k.__webglTexture), Le(n.TEXTURE_CUBE_MAP, v);
      for (let re = 0; re < 6; re++) if (v.mipmaps && v.mipmaps.length > 0) for (let de = 0; de < v.mipmaps.length; de++) be(L.__webglFramebuffer[re][de], y, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + re, de);
      else be(L.__webglFramebuffer[re], y, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      g(v) && p(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ce) {
      for (let re = 0, de = Y.length; re < de; re++) {
        const De = Y[re], ae = i.get(De);
        t.bindTexture(n.TEXTURE_2D, ae.__webglTexture), Le(n.TEXTURE_2D, De), be(L.__webglFramebuffer, y, De, n.COLOR_ATTACHMENT0 + re, n.TEXTURE_2D, 0), g(De) && p(n.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = n.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (re = y.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(re, k.__webglTexture), Le(re, v), v.mipmaps && v.mipmaps.length > 0) for (let de = 0; de < v.mipmaps.length; de++) be(L.__webglFramebuffer[de], y, v, n.COLOR_ATTACHMENT0, re, de);
      else be(L.__webglFramebuffer, y, v, n.COLOR_ATTACHMENT0, re, 0);
      g(v) && p(re), t.unbindTexture();
    }
    y.depthBuffer && je(y);
  }
  function P(y) {
    const v = y.textures;
    for (let L = 0, k = v.length; L < k; L++) {
      const Y = v[L];
      if (g(Y)) {
        const q = A(y), ce = i.get(Y).__webglTexture;
        t.bindTexture(q, ce), p(q), t.unbindTexture();
      }
    }
  }
  const U = [], T = [];
  function se(y) {
    if (y.samples > 0) {
      if (F(y) === false) {
        const v = y.textures, L = y.width, k = y.height;
        let Y = n.COLOR_BUFFER_BIT;
        const q = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ce = i.get(y), re = v.length > 1;
        if (re) for (let de = 0; de < v.length; de++) t.bindFramebuffer(n.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + de, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, ce.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + de, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, ce.__webglMultisampledFramebuffer), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ce.__webglFramebuffer);
        for (let de = 0; de < v.length; de++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (Y |= n.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (Y |= n.STENCIL_BUFFER_BIT)), re) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, ce.__webglColorRenderbuffer[de]);
            const De = i.get(v[de]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, De, 0);
          }
          n.blitFramebuffer(0, 0, L, k, 0, 0, L, k, Y, n.NEAREST), l === true && (U.length = 0, T.length = 0, U.push(n.COLOR_ATTACHMENT0 + de), y.depthBuffer && y.resolveDepthBuffer === false && (U.push(q), T.push(q), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, T)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, U));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), re) for (let de = 0; de < v.length; de++) {
          t.bindFramebuffer(n.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + de, n.RENDERBUFFER, ce.__webglColorRenderbuffer[de]);
          const De = i.get(v[de]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, ce.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + de, n.TEXTURE_2D, De, 0);
        }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ce.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === false && l) {
        const v = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function O(y) {
    return Math.min(s.maxSamples, y.samples);
  }
  function F(y) {
    const v = i.get(y);
    return y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function H(y) {
    const v = o.render.frame;
    u.get(y) !== v && (u.set(y, v), y.update());
  }
  function j(y, v) {
    const L = y.colorSpace, k = y.format, Y = y.type;
    return y.isCompressedTexture === true || y.isVideoTexture === true || L !== Jt && L !== Ai && (Ke.getTransfer(L) === lt ? (k !== mn || Y !== ci) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", L)), v;
  }
  function B(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width, c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth, c.height = y.displayHeight) : (c.width = y.width, c.height = y.height), c;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = z, this.setTexture2D = te, this.setTexture2DArray = Z, this.setTexture3D = ne, this.setTextureCube = K, this.rebindTextures = Re, this.setupRenderTarget = $e, this.updateRenderTargetMipmap = P, this.updateMultisampleRenderTarget = se, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = be, this.useMultisampledRTT = F;
}
function uA(n, e) {
  function t(i, s = Ai) {
    let r;
    const o = Ke.getTransfer(s);
    if (i === ci) return n.UNSIGNED_BYTE;
    if (i === xu) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === vu) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === rm) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === im) return n.BYTE;
    if (i === sm) return n.SHORT;
    if (i === Br) return n.UNSIGNED_SHORT;
    if (i === _u) return n.INT;
    if (i === os) return n.UNSIGNED_INT;
    if (i === Rn) return n.FLOAT;
    if (i === Li) return n.HALF_FLOAT;
    if (i === om) return n.ALPHA;
    if (i === am) return n.RGB;
    if (i === mn) return n.RGBA;
    if (i === lm) return n.LUMINANCE;
    if (i === cm) return n.LUMINANCE_ALPHA;
    if (i === Hr) return n.DEPTH_COMPONENT;
    if (i === Vr) return n.DEPTH_STENCIL;
    if (i === yu) return n.RED;
    if (i === Mu) return n.RED_INTEGER;
    if (i === um) return n.RG;
    if (i === Su) return n.RG_INTEGER;
    if (i === bu) return n.RGBA_INTEGER;
    if (i === Qo || i === $o || i === ea || i === ta) if (o === lt) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (i === Qo) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === $o) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === ea) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === ta) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (i === Qo) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === $o) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === ea) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === ta) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === fc || i === dc || i === pc || i === mc) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (i === fc) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === dc) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === pc) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === mc) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === gc || i === _c || i === xc) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (i === gc || i === _c) return o === lt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (i === xc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (i === vc || i === yc || i === Mc || i === Sc || i === bc || i === Tc || i === Ac || i === Ec || i === wc || i === Rc || i === Cc || i === Pc || i === Lc || i === Ic) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (i === vc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === yc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Mc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Sc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === bc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Tc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === Ac) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === Ec) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === wc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === Rc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === Cc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === Pc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === Lc) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === Ic) return o === lt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === na || i === Dc || i === Nc) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (i === na) return o === lt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === Dc) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === Nc) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === hm || i === Uc || i === Oc || i === Fc) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (i === na) return r.COMPRESSED_RED_RGTC1_EXT;
      if (i === Uc) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === Oc) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === Fc) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === zr ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const hA = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, fA = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class dA {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, i) {
    if (this.texture === null) {
      const s = new At(), r = e.properties.get(s);
      r.__webglTexture = t.texture, (t.depthNear !== i.depthNear || t.depthFar !== i.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new sn({ vertexShader: hA, fragmentShader: fA, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Vt(new Na(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class pA extends Ui {
  constructor(e, t) {
    super();
    const i = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, f = null, d = null, m = null;
    const _ = new dA(), g = t.getContextAttributes();
    let p = null, A = null;
    const b = [], x = [], C = new he();
    let w = null;
    const R = new en();
    R.viewport = new nt();
    const D = new en();
    D.viewport = new nt();
    const S = [R, D], M = new My();
    let I = null, z = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(ie) {
      let ue = b[ie];
      return ue === void 0 && (ue = new vl(), b[ie] = ue), ue.getTargetRaySpace();
    }, this.getControllerGrip = function(ie) {
      let ue = b[ie];
      return ue === void 0 && (ue = new vl(), b[ie] = ue), ue.getGripSpace();
    }, this.getHand = function(ie) {
      let ue = b[ie];
      return ue === void 0 && (ue = new vl(), b[ie] = ue), ue.getHandSpace();
    };
    function X(ie) {
      const ue = x.indexOf(ie.inputSource);
      if (ue === -1) return;
      const be = b[ue];
      be !== void 0 && (be.update(ie.inputSource, ie.frame, c || o), be.dispatchEvent({ type: ie.type, data: ie.inputSource }));
    }
    function J() {
      s.removeEventListener("select", X), s.removeEventListener("selectstart", X), s.removeEventListener("selectend", X), s.removeEventListener("squeeze", X), s.removeEventListener("squeezestart", X), s.removeEventListener("squeezeend", X), s.removeEventListener("end", J), s.removeEventListener("inputsourceschange", te);
      for (let ie = 0; ie < b.length; ie++) {
        const ue = x[ie];
        ue !== null && (x[ie] = null, b[ie].disconnect(ue));
      }
      I = null, z = null, _.reset(), e.setRenderTarget(p), d = null, f = null, h = null, s = null, A = null, Ze.stop(), i.isPresenting = false, e.setPixelRatio(w), e.setSize(C.width, C.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(ie) {
      r = ie, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(ie) {
      a = ie, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(ie) {
      c = ie;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(ie) {
      if (s = ie, s !== null) {
        if (p = e.getRenderTarget(), s.addEventListener("select", X), s.addEventListener("selectstart", X), s.addEventListener("selectend", X), s.addEventListener("squeeze", X), s.addEventListener("squeezestart", X), s.addEventListener("squeezeend", X), s.addEventListener("end", J), s.addEventListener("inputsourceschange", te), g.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(C), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let be = null, me = null, Pe = null;
          g.depth && (Pe = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, be = g.stencil ? Vr : Hr, me = g.stencil ? zr : os);
          const je = { colorFormat: t.RGBA8, depthFormat: Pe, scaleFactor: r };
          h = new XRWebGLBinding(s, t), f = h.createProjectionLayer(je), s.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), A = new Vn(f.textureWidth, f.textureHeight, { format: mn, type: ci, depthTexture: new wm(f.textureWidth, f.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, be), stencilBuffer: g.stencil, colorSpace: e.outputColorSpace, samples: g.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const be = { antialias: g.antialias, alpha: true, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r };
          d = new XRWebGLLayer(s, t, be), s.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), A = new Vn(d.framebufferWidth, d.framebufferHeight, { format: mn, type: ci, colorSpace: e.outputColorSpace, stencilBuffer: g.stencil, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        }
        A.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Ze.setContext(s), Ze.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function te(ie) {
      for (let ue = 0; ue < ie.removed.length; ue++) {
        const be = ie.removed[ue], me = x.indexOf(be);
        me >= 0 && (x[me] = null, b[me].disconnect(be));
      }
      for (let ue = 0; ue < ie.added.length; ue++) {
        const be = ie.added[ue];
        let me = x.indexOf(be);
        if (me === -1) {
          for (let je = 0; je < b.length; je++) if (je >= x.length) {
            x.push(be), me = je;
            break;
          } else if (x[je] === null) {
            x[je] = be, me = je;
            break;
          }
          if (me === -1) break;
        }
        const Pe = b[me];
        Pe && Pe.connect(be);
      }
    }
    const Z = new N(), ne = new N();
    function K(ie, ue, be) {
      Z.setFromMatrixPosition(ue.matrixWorld), ne.setFromMatrixPosition(be.matrixWorld);
      const me = Z.distanceTo(ne), Pe = ue.projectionMatrix.elements, je = be.projectionMatrix.elements, Re = Pe[14] / (Pe[10] - 1), $e = Pe[14] / (Pe[10] + 1), P = (Pe[9] + 1) / Pe[5], U = (Pe[9] - 1) / Pe[5], T = (Pe[8] - 1) / Pe[0], se = (je[8] + 1) / je[0], O = Re * T, F = Re * se, H = me / (-T + se), j = H * -T;
      if (ue.matrixWorld.decompose(ie.position, ie.quaternion, ie.scale), ie.translateX(j), ie.translateZ(H), ie.matrixWorld.compose(ie.position, ie.quaternion, ie.scale), ie.matrixWorldInverse.copy(ie.matrixWorld).invert(), Pe[10] === -1) ie.projectionMatrix.copy(ue.projectionMatrix), ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);
      else {
        const B = Re + H, y = $e + H, v = O - j, L = F + (me - j), k = P * $e / y * B, Y = U * $e / y * B;
        ie.projectionMatrix.makePerspective(v, L, k, Y, B, y), ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert();
      }
    }
    function fe(ie, ue) {
      ue === null ? ie.matrixWorld.copy(ie.matrix) : ie.matrixWorld.multiplyMatrices(ue.matrixWorld, ie.matrix), ie.matrixWorldInverse.copy(ie.matrixWorld).invert();
    }
    this.updateCamera = function(ie) {
      if (s === null) return;
      let ue = ie.near, be = ie.far;
      _.texture !== null && (_.depthNear > 0 && (ue = _.depthNear), _.depthFar > 0 && (be = _.depthFar)), M.near = D.near = R.near = ue, M.far = D.far = R.far = be, (I !== M.near || z !== M.far) && (s.updateRenderState({ depthNear: M.near, depthFar: M.far }), I = M.near, z = M.far), R.layers.mask = ie.layers.mask | 2, D.layers.mask = ie.layers.mask | 4, M.layers.mask = R.layers.mask | D.layers.mask;
      const me = ie.parent, Pe = M.cameras;
      fe(M, me);
      for (let je = 0; je < Pe.length; je++) fe(Pe[je], me);
      Pe.length === 2 ? K(M, R, D) : M.projectionMatrix.copy(R.projectionMatrix), xe(ie, M, me);
    };
    function xe(ie, ue, be) {
      be === null ? ie.matrix.copy(ue.matrixWorld) : (ie.matrix.copy(be.matrixWorld), ie.matrix.invert(), ie.matrix.multiply(ue.matrixWorld)), ie.matrix.decompose(ie.position, ie.quaternion, ie.scale), ie.updateMatrixWorld(true), ie.projectionMatrix.copy(ue.projectionMatrix), ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse), ie.isPerspectiveCamera && (ie.fov = Ys * 2 * Math.atan(1 / ie.projectionMatrix.elements[5]), ie.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(f === null && d === null)) return l;
    }, this.setFoveation = function(ie) {
      l = ie, f !== null && (f.fixedFoveation = ie), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = ie);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let Se = null;
    function Le(ie, ue) {
      if (u = ue.getViewerPose(c || o), m = ue, u !== null) {
        const be = u.views;
        d !== null && (e.setRenderTargetFramebuffer(A, d.framebuffer), e.setRenderTarget(A));
        let me = false;
        be.length !== M.cameras.length && (M.cameras.length = 0, me = true);
        for (let Re = 0; Re < be.length; Re++) {
          const $e = be[Re];
          let P = null;
          if (d !== null) P = d.getViewport($e);
          else {
            const T = h.getViewSubImage(f, $e);
            P = T.viewport, Re === 0 && (e.setRenderTargetTextures(A, T.colorTexture, T.depthStencilTexture), e.setRenderTarget(A));
          }
          let U = S[Re];
          U === void 0 && (U = new en(), U.layers.enable(Re), U.viewport = new nt(), S[Re] = U), U.matrix.fromArray($e.transform.matrix), U.matrix.decompose(U.position, U.quaternion, U.scale), U.projectionMatrix.fromArray($e.projectionMatrix), U.projectionMatrixInverse.copy(U.projectionMatrix).invert(), U.viewport.set(P.x, P.y, P.width, P.height), Re === 0 && (M.matrix.copy(U.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), me === true && M.cameras.push(U);
        }
        const Pe = s.enabledFeatures;
        if (Pe && Pe.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && h) {
          const Re = h.getDepthInformation(be[0]);
          Re && Re.isValid && Re.texture && _.init(e, Re, s.renderState);
        }
      }
      for (let be = 0; be < b.length; be++) {
        const me = x[be], Pe = b[be];
        me !== null && Pe !== void 0 && Pe.update(me, ue, c || o);
      }
      Se && Se(ie, ue), ue.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: ue }), m = null;
    }
    const Ze = new Xm();
    Ze.setAnimationLoop(Le), this.setAnimationLoop = function(ie) {
      Se = ie;
    }, this.dispose = function() {
    };
  }
}
const ji = new Ln(), mA = new ke();
function gA(n, e) {
  function t(g, p) {
    g.matrixAutoUpdate === true && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function i(g, p) {
    p.color.getRGB(g.fogColor.value, vm(n)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function s(g, p, A, b, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p), h(g, p)) : p.isMeshPhongMaterial ? (r(g, p), u(g, p)) : p.isMeshStandardMaterial ? (r(g, p), f(g, p), p.isMeshPhysicalMaterial && d(g, p, x)) : p.isMeshMatcapMaterial ? (r(g, p), m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p), _(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? l(g, p, A, b) : p.isSpriteMaterial ? c(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === nn && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === nn && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const A = e.get(p), b = A.envMap, x = A.envMapRotation;
    b && (g.envMap.value = b, ji.copy(x), ji.x *= -1, ji.y *= -1, ji.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (ji.y *= -1, ji.z *= -1), g.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(ji)), g.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function l(g, p, A, b) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * A, g.scale.value = b * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function c(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function u(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function f(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function d(g, p, A) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === nn && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = A.texture, g.transmissionSamplerSize.value.set(A.width, A.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const A = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(A.matrixWorld), g.nearDistance.value = A.shadow.camera.near, g.farDistance.value = A.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: s };
}
function _A(n, e, t, i) {
  let s = {}, r = {}, o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, b) {
    const x = b.program;
    i.uniformBlockBinding(A, x);
  }
  function c(A, b) {
    let x = s[A.id];
    x === void 0 && (m(A), x = u(A), s[A.id] = x, A.addEventListener("dispose", g));
    const C = b.program;
    i.updateUBOMapping(A, C);
    const w = e.render.frame;
    r[A.id] !== w && (f(A), r[A.id] = w);
  }
  function u(A) {
    const b = h();
    A.__bindingPointIndex = b;
    const x = n.createBuffer(), C = A.__size, w = A.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, x), n.bufferData(n.UNIFORM_BUFFER, C, w), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, b, x), x;
  }
  function h() {
    for (let A = 0; A < a; A++) if (o.indexOf(A) === -1) return o.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const b = s[A.id], x = A.uniforms, C = A.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, b);
    for (let w = 0, R = x.length; w < R; w++) {
      const D = Array.isArray(x[w]) ? x[w] : [x[w]];
      for (let S = 0, M = D.length; S < M; S++) {
        const I = D[S];
        if (d(I, w, S, C) === true) {
          const z = I.__offset, X = Array.isArray(I.value) ? I.value : [I.value];
          let J = 0;
          for (let te = 0; te < X.length; te++) {
            const Z = X[te], ne = _(Z);
            typeof Z == "number" || typeof Z == "boolean" ? (I.__data[0] = Z, n.bufferSubData(n.UNIFORM_BUFFER, z + J, I.__data)) : Z.isMatrix3 ? (I.__data[0] = Z.elements[0], I.__data[1] = Z.elements[1], I.__data[2] = Z.elements[2], I.__data[3] = 0, I.__data[4] = Z.elements[3], I.__data[5] = Z.elements[4], I.__data[6] = Z.elements[5], I.__data[7] = 0, I.__data[8] = Z.elements[6], I.__data[9] = Z.elements[7], I.__data[10] = Z.elements[8], I.__data[11] = 0) : (Z.toArray(I.__data, J), J += ne.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, z, I.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function d(A, b, x, C) {
    const w = A.value, R = b + "_" + x;
    if (C[R] === void 0) return typeof w == "number" || typeof w == "boolean" ? C[R] = w : C[R] = w.clone(), true;
    {
      const D = C[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (D !== w) return C[R] = w, true;
      } else if (D.equals(w) === false) return D.copy(w), true;
    }
    return false;
  }
  function m(A) {
    const b = A.uniforms;
    let x = 0;
    const C = 16;
    for (let R = 0, D = b.length; R < D; R++) {
      const S = Array.isArray(b[R]) ? b[R] : [b[R]];
      for (let M = 0, I = S.length; M < I; M++) {
        const z = S[M], X = Array.isArray(z.value) ? z.value : [z.value];
        for (let J = 0, te = X.length; J < te; J++) {
          const Z = X[J], ne = _(Z), K = x % C, fe = K % ne.boundary, xe = K + fe;
          x += fe, xe !== 0 && C - xe < ne.storage && (x += C - xe), z.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = x, x += ne.storage;
        }
      }
    }
    const w = x % C;
    return w > 0 && (x += C - w), A.__size = x, A.__cache = {}, this;
  }
  function _(A) {
    const b = { boundary: 0, storage: 0 };
    return typeof A == "number" || typeof A == "boolean" ? (b.boundary = 4, b.storage = 4) : A.isVector2 ? (b.boundary = 8, b.storage = 8) : A.isVector3 || A.isColor ? (b.boundary = 16, b.storage = 12) : A.isVector4 ? (b.boundary = 16, b.storage = 16) : A.isMatrix3 ? (b.boundary = 48, b.storage = 48) : A.isMatrix4 ? (b.boundary = 64, b.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), b;
  }
  function g(A) {
    const b = A.target;
    b.removeEventListener("dispose", g);
    const x = o.indexOf(b.__bindingPointIndex);
    o.splice(x, 1), n.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function p() {
    for (const A in s) n.deleteBuffer(s[A]);
    o = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
class qE {
  constructor(e = {}) {
    const { canvas: t = Fv(), context: i = null, depth: s = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reverseDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let d;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = i.getContextAttributes().alpha;
    } else d = o;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, p = null;
    const A = [], b = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Ci, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const x = this;
    let C = false;
    this._outputColorSpace = It;
    let w = 0, R = 0, D = null, S = -1, M = null;
    const I = new nt(), z = new nt();
    let X = null;
    const J = new we(0);
    let te = 0, Z = t.width, ne = t.height, K = 1, fe = null, xe = null;
    const Se = new nt(0, 0, Z, ne), Le = new nt(0, 0, Z, ne);
    let Ze = false;
    const ie = new Lu();
    let ue = false, be = false;
    const me = new ke(), Pe = new ke(), je = new N(), Re = new nt(), $e = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let P = false;
    function U() {
      return D === null ? K : 1;
    }
    let T = i;
    function se(E, G) {
      return t.getContext(E, G);
    }
    try {
      const E = { alpha: true, depth: s, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: h };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${mu}`), t.addEventListener("webglcontextlost", oe, false), t.addEventListener("webglcontextrestored", Te, false), t.addEventListener("webglcontextcreationerror", Me, false), T === null) {
        const G = "webgl2";
        if (T = se(G, E), T === null) throw se(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let O, F, H, j, B, y, v, L, k, Y, q, ce, re, de, De, ae, ge, Ce, Ne, pe, Be, Ve, ft, V;
    function ye() {
      O = new Rb(T), O.init(), Ve = new uA(T, O), F = new Mb(T, O, e, Ve), H = new lA(T, O), F.reverseDepthBuffer && f && H.buffers.depth.setReversed(true), j = new Lb(T), B = new KT(), y = new cA(T, O, H, B, F, Ve, j), v = new bb(x), L = new wb(x), k = new Fy(T), ft = new vb(T, k), Y = new Cb(T, k, j, ft), q = new Db(T, Y, k, j), Ne = new Ib(T, F, y), ae = new Sb(B), ce = new jT(x, v, L, O, F, ft, ae), re = new gA(x, B), de = new JT(), De = new iA(O), Ce = new xb(x, v, L, H, q, d, l), ge = new oA(x, q, F), V = new _A(T, j, F, H), pe = new yb(T, O, j), Be = new Pb(T, O, j), j.programs = ce.programs, x.capabilities = F, x.extensions = O, x.properties = B, x.renderLists = de, x.shadowMap = ge, x.state = H, x.info = j;
    }
    ye();
    const ee = new pA(x, T);
    this.xr = ee, this.getContext = function() {
      return T;
    }, this.getContextAttributes = function() {
      return T.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = O.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = O.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return K;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (K = E, this.setSize(Z, ne, false));
    }, this.getSize = function(E) {
      return E.set(Z, ne);
    }, this.setSize = function(E, G, Q = true) {
      if (ee.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Z = E, ne = G, t.width = Math.floor(E * K), t.height = Math.floor(G * K), Q === true && (t.style.width = E + "px", t.style.height = G + "px"), this.setViewport(0, 0, E, G);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(Z * K, ne * K).floor();
    }, this.setDrawingBufferSize = function(E, G, Q) {
      Z = E, ne = G, K = Q, t.width = Math.floor(E * Q), t.height = Math.floor(G * Q), this.setViewport(0, 0, E, G);
    }, this.getCurrentViewport = function(E) {
      return E.copy(I);
    }, this.getViewport = function(E) {
      return E.copy(Se);
    }, this.setViewport = function(E, G, Q, $) {
      E.isVector4 ? Se.set(E.x, E.y, E.z, E.w) : Se.set(E, G, Q, $), H.viewport(I.copy(Se).multiplyScalar(K).round());
    }, this.getScissor = function(E) {
      return E.copy(Le);
    }, this.setScissor = function(E, G, Q, $) {
      E.isVector4 ? Le.set(E.x, E.y, E.z, E.w) : Le.set(E, G, Q, $), H.scissor(z.copy(Le).multiplyScalar(K).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(E) {
      H.setScissorTest(Ze = E);
    }, this.setOpaqueSort = function(E) {
      fe = E;
    }, this.setTransparentSort = function(E) {
      xe = E;
    }, this.getClearColor = function(E) {
      return E.copy(Ce.getClearColor());
    }, this.setClearColor = function() {
      Ce.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ce.setClearAlpha(...arguments);
    }, this.clear = function(E = true, G = true, Q = true) {
      let $ = 0;
      if (E) {
        let W = false;
        if (D !== null) {
          const le = D.texture.format;
          W = le === bu || le === Su || le === Mu;
        }
        if (W) {
          const le = D.texture.type, ve = le === ci || le === os || le === Br || le === zr || le === xu || le === vu, Ae = Ce.getClearColor(), Ee = Ce.getClearAlpha(), ze = Ae.r, Fe = Ae.g, Ie = Ae.b;
          ve ? (m[0] = ze, m[1] = Fe, m[2] = Ie, m[3] = Ee, T.clearBufferuiv(T.COLOR, 0, m)) : (_[0] = ze, _[1] = Fe, _[2] = Ie, _[3] = Ee, T.clearBufferiv(T.COLOR, 0, _));
        } else $ |= T.COLOR_BUFFER_BIT;
      }
      G && ($ |= T.DEPTH_BUFFER_BIT), Q && ($ |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear($);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", oe, false), t.removeEventListener("webglcontextrestored", Te, false), t.removeEventListener("webglcontextcreationerror", Me, false), Ce.dispose(), de.dispose(), De.dispose(), B.dispose(), v.dispose(), L.dispose(), q.dispose(), ft.dispose(), V.dispose(), ce.dispose(), ee.dispose(), ee.removeEventListener("sessionstart", Xu), ee.removeEventListener("sessionend", Yu), Oi.stop();
    };
    function oe(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = true;
    }
    function Te() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = false;
      const E = j.autoReset, G = ge.enabled, Q = ge.autoUpdate, $ = ge.needsUpdate, W = ge.type;
      ye(), j.autoReset = E, ge.enabled = G, ge.autoUpdate = Q, ge.needsUpdate = $, ge.type = W;
    }
    function Me(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function We(E) {
      const G = E.target;
      G.removeEventListener("dispose", We), vt(G);
    }
    function vt(E) {
      Ot(E), B.remove(E);
    }
    function Ot(E) {
      const G = B.get(E).programs;
      G !== void 0 && (G.forEach(function(Q) {
        ce.releaseProgram(Q);
      }), E.isShaderMaterial && ce.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, G, Q, $, W, le) {
      G === null && (G = $e);
      const ve = W.isMesh && W.matrixWorld.determinant() < 0, Ae = $m(E, G, Q, $, W);
      H.setMaterial($, ve);
      let Ee = Q.index, ze = 1;
      if ($.wireframe === true) {
        if (Ee = Y.getWireframeAttribute(Q), Ee === void 0) return;
        ze = 2;
      }
      const Fe = Q.drawRange, Ie = Q.attributes.position;
      let Je = Fe.start * ze, it = (Fe.start + Fe.count) * ze;
      le !== null && (Je = Math.max(Je, le.start * ze), it = Math.min(it, (le.start + le.count) * ze)), Ee !== null ? (Je = Math.max(Je, 0), it = Math.min(it, Ee.count)) : Ie != null && (Je = Math.max(Je, 0), it = Math.min(it, Ie.count));
      const bt = it - Je;
      if (bt < 0 || bt === 1 / 0) return;
      ft.setup(W, $, Ae, Q, Ee);
      let yt, et = pe;
      if (Ee !== null && (yt = k.get(Ee), et = Be, et.setIndex(yt)), W.isMesh) $.wireframe === true ? (H.setLineWidth($.wireframeLinewidth * U()), et.setMode(T.LINES)) : et.setMode(T.TRIANGLES);
      else if (W.isLine) {
        let Ue = $.linewidth;
        Ue === void 0 && (Ue = 1), H.setLineWidth(Ue * U()), W.isLineSegments ? et.setMode(T.LINES) : W.isLineLoop ? et.setMode(T.LINE_LOOP) : et.setMode(T.LINE_STRIP);
      } else W.isPoints ? et.setMode(T.POINTS) : W.isSprite && et.setMode(T.TRIANGLES);
      if (W.isBatchedMesh) if (W._multiDrawInstances !== null) ia("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), et.renderMultiDrawInstances(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount, W._multiDrawInstances);
      else if (O.get("WEBGL_multi_draw")) et.renderMultiDraw(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount);
      else {
        const Ue = W._multiDrawStarts, Lt = W._multiDrawCounts, st = W._multiDrawCount, Sn = Ee ? k.get(Ee).bytesPerElement : 1, cs = B.get($).currentProgram.getUniforms();
        for (let rn = 0; rn < st; rn++) cs.setValue(T, "_gl_DrawID", rn), et.render(Ue[rn] / Sn, Lt[rn]);
      }
      else if (W.isInstancedMesh) et.renderInstances(Je, bt, W.count);
      else if (Q.isInstancedBufferGeometry) {
        const Ue = Q._maxInstanceCount !== void 0 ? Q._maxInstanceCount : 1 / 0, Lt = Math.min(Q.instanceCount, Ue);
        et.renderInstances(Je, bt, Lt);
      } else et.render(Je, bt);
    };
    function at(E, G, Q) {
      E.transparent === true && E.side === Bn && E.forceSinglePass === false ? (E.side = nn, E.needsUpdate = true, no(E, G, Q), E.side = li, E.needsUpdate = true, no(E, G, Q), E.side = Bn) : no(E, G, Q);
    }
    this.compile = function(E, G, Q = null) {
      Q === null && (Q = E), p = De.get(Q), p.init(G), b.push(p), Q.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (p.pushLight(W), W.castShadow && p.pushShadow(W));
      }), E !== Q && E.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (p.pushLight(W), W.castShadow && p.pushShadow(W));
      }), p.setupLights();
      const $ = /* @__PURE__ */ new Set();
      return E.traverse(function(W) {
        if (!(W.isMesh || W.isPoints || W.isLine || W.isSprite)) return;
        const le = W.material;
        if (le) if (Array.isArray(le)) for (let ve = 0; ve < le.length; ve++) {
          const Ae = le[ve];
          at(Ae, Q, W), $.add(Ae);
        }
        else at(le, Q, W), $.add(le);
      }), p = b.pop(), $;
    }, this.compileAsync = function(E, G, Q = null) {
      const $ = this.compile(E, G, Q);
      return new Promise((W) => {
        function le() {
          if ($.forEach(function(ve) {
            B.get(ve).currentProgram.isReady() && $.delete(ve);
          }), $.size === 0) {
            W(E);
            return;
          }
          setTimeout(le, 10);
        }
        O.get("KHR_parallel_shader_compile") !== null ? le() : setTimeout(le, 10);
      });
    };
    let Mn = null;
    function Xn(E) {
      Mn && Mn(E);
    }
    function Xu() {
      Oi.stop();
    }
    function Yu() {
      Oi.start();
    }
    const Oi = new Xm();
    Oi.setAnimationLoop(Xn), typeof self < "u" && Oi.setContext(self), this.setAnimationLoop = function(E) {
      Mn = E, ee.setAnimationLoop(E), E === null ? Oi.stop() : Oi.start();
    }, ee.addEventListener("sessionstart", Xu), ee.addEventListener("sessionend", Yu), this.render = function(E, G) {
      if (G !== void 0 && G.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === true) return;
      if (E.matrixWorldAutoUpdate === true && E.updateMatrixWorld(), G.parent === null && G.matrixWorldAutoUpdate === true && G.updateMatrixWorld(), ee.enabled === true && ee.isPresenting === true && (ee.cameraAutoUpdate === true && ee.updateCamera(G), G = ee.getCamera()), E.isScene === true && E.onBeforeRender(x, E, G, D), p = De.get(E, b.length), p.init(G), b.push(p), Pe.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), ie.setFromProjectionMatrix(Pe), be = this.localClippingEnabled, ue = ae.init(this.clippingPlanes, be), g = de.get(E, A.length), g.init(), A.push(g), ee.enabled === true && ee.isPresenting === true) {
        const le = x.xr.getDepthSensingMesh();
        le !== null && Fa(le, G, -1 / 0, x.sortObjects);
      }
      Fa(E, G, 0, x.sortObjects), g.finish(), x.sortObjects === true && g.sort(fe, xe), P = ee.enabled === false || ee.isPresenting === false || ee.hasDepthSensing() === false, P && Ce.addToRenderList(g, E), this.info.render.frame++, ue === true && ae.beginShadows();
      const Q = p.state.shadowsArray;
      ge.render(Q, E, G), ue === true && ae.endShadows(), this.info.autoReset === true && this.info.reset();
      const $ = g.opaque, W = g.transmissive;
      if (p.setupLights(), G.isArrayCamera) {
        const le = G.cameras;
        if (W.length > 0) for (let ve = 0, Ae = le.length; ve < Ae; ve++) {
          const Ee = le[ve];
          ju($, W, E, Ee);
        }
        P && Ce.render(E);
        for (let ve = 0, Ae = le.length; ve < Ae; ve++) {
          const Ee = le[ve];
          qu(g, E, Ee, Ee.viewport);
        }
      } else W.length > 0 && ju($, W, E, G), P && Ce.render(E), qu(g, E, G);
      D !== null && R === 0 && (y.updateMultisampleRenderTarget(D), y.updateRenderTargetMipmap(D)), E.isScene === true && E.onAfterRender(x, E, G), ft.resetDefaultState(), S = -1, M = null, b.pop(), b.length > 0 ? (p = b[b.length - 1], ue === true && ae.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, A.pop(), A.length > 0 ? g = A[A.length - 1] : g = null;
    };
    function Fa(E, G, Q, $) {
      if (E.visible === false) return;
      if (E.layers.test(G.layers)) {
        if (E.isGroup) Q = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === true && E.update(G);
        else if (E.isLight) p.pushLight(E), E.castShadow && p.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || ie.intersectsSprite(E)) {
            $ && Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);
            const ve = q.update(E), Ae = E.material;
            Ae.visible && g.push(E, ve, Ae, Q, Re.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || ie.intersectsObject(E))) {
          const ve = q.update(E), Ae = E.material;
          if ($ && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Re.copy(E.boundingSphere.center)) : (ve.boundingSphere === null && ve.computeBoundingSphere(), Re.copy(ve.boundingSphere.center)), Re.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)), Array.isArray(Ae)) {
            const Ee = ve.groups;
            for (let ze = 0, Fe = Ee.length; ze < Fe; ze++) {
              const Ie = Ee[ze], Je = Ae[Ie.materialIndex];
              Je && Je.visible && g.push(E, ve, Je, Q, Re.z, Ie);
            }
          } else Ae.visible && g.push(E, ve, Ae, Q, Re.z, null);
        }
      }
      const le = E.children;
      for (let ve = 0, Ae = le.length; ve < Ae; ve++) Fa(le[ve], G, Q, $);
    }
    function qu(E, G, Q, $) {
      const W = E.opaque, le = E.transmissive, ve = E.transparent;
      p.setupLightsView(Q), ue === true && ae.setGlobalState(x.clippingPlanes, Q), $ && H.viewport(I.copy($)), W.length > 0 && to(W, G, Q), le.length > 0 && to(le, G, Q), ve.length > 0 && to(ve, G, Q), H.buffers.depth.setTest(true), H.buffers.depth.setMask(true), H.buffers.color.setMask(true), H.setPolygonOffset(false);
    }
    function ju(E, G, Q, $) {
      if ((Q.isScene === true ? Q.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[$.id] === void 0 && (p.state.transmissionRenderTarget[$.id] = new Vn(1, 1, { generateMipmaps: true, type: O.has("EXT_color_buffer_half_float") || O.has("EXT_color_buffer_float") ? Li : ci, minFilter: si, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ke.workingColorSpace }));
      const le = p.state.transmissionRenderTarget[$.id], ve = $.viewport || I;
      le.setSize(ve.z * x.transmissionResolutionScale, ve.w * x.transmissionResolutionScale);
      const Ae = x.getRenderTarget();
      x.setRenderTarget(le), x.getClearColor(J), te = x.getClearAlpha(), te < 1 && x.setClearColor(16777215, 0.5), x.clear(), P && Ce.render(Q);
      const Ee = x.toneMapping;
      x.toneMapping = Ci;
      const ze = $.viewport;
      if ($.viewport !== void 0 && ($.viewport = void 0), p.setupLightsView($), ue === true && ae.setGlobalState(x.clippingPlanes, $), to(E, Q, $), y.updateMultisampleRenderTarget(le), y.updateRenderTargetMipmap(le), O.has("WEBGL_multisampled_render_to_texture") === false) {
        let Fe = false;
        for (let Ie = 0, Je = G.length; Ie < Je; Ie++) {
          const it = G[Ie], bt = it.object, yt = it.geometry, et = it.material, Ue = it.group;
          if (et.side === Bn && bt.layers.test($.layers)) {
            const Lt = et.side;
            et.side = nn, et.needsUpdate = true, Ku(bt, Q, $, yt, et, Ue), et.side = Lt, et.needsUpdate = true, Fe = true;
          }
        }
        Fe === true && (y.updateMultisampleRenderTarget(le), y.updateRenderTargetMipmap(le));
      }
      x.setRenderTarget(Ae), x.setClearColor(J, te), ze !== void 0 && ($.viewport = ze), x.toneMapping = Ee;
    }
    function to(E, G, Q) {
      const $ = G.isScene === true ? G.overrideMaterial : null;
      for (let W = 0, le = E.length; W < le; W++) {
        const ve = E[W], Ae = ve.object, Ee = ve.geometry, ze = ve.group;
        let Fe = ve.material;
        Fe.allowOverride === true && $ !== null && (Fe = $), Ae.layers.test(Q.layers) && Ku(Ae, G, Q, Ee, Fe, ze);
      }
    }
    function Ku(E, G, Q, $, W, le) {
      E.onBeforeRender(x, G, Q, $, W, le), E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), W.onBeforeRender(x, G, Q, $, E, le), W.transparent === true && W.side === Bn && W.forceSinglePass === false ? (W.side = nn, W.needsUpdate = true, x.renderBufferDirect(Q, G, $, W, E, le), W.side = li, W.needsUpdate = true, x.renderBufferDirect(Q, G, $, W, E, le), W.side = Bn) : x.renderBufferDirect(Q, G, $, W, E, le), E.onAfterRender(x, G, Q, $, W, le);
    }
    function no(E, G, Q) {
      G.isScene !== true && (G = $e);
      const $ = B.get(E), W = p.state.lights, le = p.state.shadowsArray, ve = W.state.version, Ae = ce.getParameters(E, W.state, le, G, Q), Ee = ce.getProgramCacheKey(Ae);
      let ze = $.programs;
      $.environment = E.isMeshStandardMaterial ? G.environment : null, $.fog = G.fog, $.envMap = (E.isMeshStandardMaterial ? L : v).get(E.envMap || $.environment), $.envMapRotation = $.environment !== null && E.envMap === null ? G.environmentRotation : E.envMapRotation, ze === void 0 && (E.addEventListener("dispose", We), ze = /* @__PURE__ */ new Map(), $.programs = ze);
      let Fe = ze.get(Ee);
      if (Fe !== void 0) {
        if ($.currentProgram === Fe && $.lightsStateVersion === ve) return Ju(E, Ae), Fe;
      } else Ae.uniforms = ce.getUniforms(E), E.onBeforeCompile(Ae, x), Fe = ce.acquireProgram(Ae, Ee), ze.set(Ee, Fe), $.uniforms = Ae.uniforms;
      const Ie = $.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === true) && (Ie.clippingPlanes = ae.uniform), Ju(E, Ae), $.needsLights = tg(E), $.lightsStateVersion = ve, $.needsLights && (Ie.ambientLightColor.value = W.state.ambient, Ie.lightProbe.value = W.state.probe, Ie.directionalLights.value = W.state.directional, Ie.directionalLightShadows.value = W.state.directionalShadow, Ie.spotLights.value = W.state.spot, Ie.spotLightShadows.value = W.state.spotShadow, Ie.rectAreaLights.value = W.state.rectArea, Ie.ltc_1.value = W.state.rectAreaLTC1, Ie.ltc_2.value = W.state.rectAreaLTC2, Ie.pointLights.value = W.state.point, Ie.pointLightShadows.value = W.state.pointShadow, Ie.hemisphereLights.value = W.state.hemi, Ie.directionalShadowMap.value = W.state.directionalShadowMap, Ie.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Ie.spotShadowMap.value = W.state.spotShadowMap, Ie.spotLightMatrix.value = W.state.spotLightMatrix, Ie.spotLightMap.value = W.state.spotLightMap, Ie.pointShadowMap.value = W.state.pointShadowMap, Ie.pointShadowMatrix.value = W.state.pointShadowMatrix), $.currentProgram = Fe, $.uniformsList = null, Fe;
    }
    function Zu(E) {
      if (E.uniformsList === null) {
        const G = E.currentProgram.getUniforms();
        E.uniformsList = sa.seqWithValue(G.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Ju(E, G) {
      const Q = B.get(E);
      Q.outputColorSpace = G.outputColorSpace, Q.batching = G.batching, Q.batchingColor = G.batchingColor, Q.instancing = G.instancing, Q.instancingColor = G.instancingColor, Q.instancingMorph = G.instancingMorph, Q.skinning = G.skinning, Q.morphTargets = G.morphTargets, Q.morphNormals = G.morphNormals, Q.morphColors = G.morphColors, Q.morphTargetsCount = G.morphTargetsCount, Q.numClippingPlanes = G.numClippingPlanes, Q.numIntersection = G.numClipIntersection, Q.vertexAlphas = G.vertexAlphas, Q.vertexTangents = G.vertexTangents, Q.toneMapping = G.toneMapping;
    }
    function $m(E, G, Q, $, W) {
      G.isScene !== true && (G = $e), y.resetTextureUnits();
      const le = G.fog, ve = $.isMeshStandardMaterial ? G.environment : null, Ae = D === null ? x.outputColorSpace : D.isXRRenderTarget === true ? D.texture.colorSpace : Jt, Ee = ($.isMeshStandardMaterial ? L : v).get($.envMap || ve), ze = $.vertexColors === true && !!Q.attributes.color && Q.attributes.color.itemSize === 4, Fe = !!Q.attributes.tangent && (!!$.normalMap || $.anisotropy > 0), Ie = !!Q.morphAttributes.position, Je = !!Q.morphAttributes.normal, it = !!Q.morphAttributes.color;
      let bt = Ci;
      $.toneMapped && (D === null || D.isXRRenderTarget === true) && (bt = x.toneMapping);
      const yt = Q.morphAttributes.position || Q.morphAttributes.normal || Q.morphAttributes.color, et = yt !== void 0 ? yt.length : 0, Ue = B.get($), Lt = p.state.lights;
      if (ue === true && (be === true || E !== M)) {
        const Gt = E === M && $.id === S;
        ae.setState($, E, Gt);
      }
      let st = false;
      $.version === Ue.__version ? (Ue.needsLights && Ue.lightsStateVersion !== Lt.state.version || Ue.outputColorSpace !== Ae || W.isBatchedMesh && Ue.batching === false || !W.isBatchedMesh && Ue.batching === true || W.isBatchedMesh && Ue.batchingColor === true && W.colorTexture === null || W.isBatchedMesh && Ue.batchingColor === false && W.colorTexture !== null || W.isInstancedMesh && Ue.instancing === false || !W.isInstancedMesh && Ue.instancing === true || W.isSkinnedMesh && Ue.skinning === false || !W.isSkinnedMesh && Ue.skinning === true || W.isInstancedMesh && Ue.instancingColor === true && W.instanceColor === null || W.isInstancedMesh && Ue.instancingColor === false && W.instanceColor !== null || W.isInstancedMesh && Ue.instancingMorph === true && W.morphTexture === null || W.isInstancedMesh && Ue.instancingMorph === false && W.morphTexture !== null || Ue.envMap !== Ee || $.fog === true && Ue.fog !== le || Ue.numClippingPlanes !== void 0 && (Ue.numClippingPlanes !== ae.numPlanes || Ue.numIntersection !== ae.numIntersection) || Ue.vertexAlphas !== ze || Ue.vertexTangents !== Fe || Ue.morphTargets !== Ie || Ue.morphNormals !== Je || Ue.morphColors !== it || Ue.toneMapping !== bt || Ue.morphTargetsCount !== et) && (st = true) : (st = true, Ue.__version = $.version);
      let Sn = Ue.currentProgram;
      st === true && (Sn = no($, G, W));
      let cs = false, rn = false, nr = false;
      const mt = Sn.getUniforms(), un = Ue.uniforms;
      if (H.useProgram(Sn.program) && (cs = true, rn = true, nr = true), $.id !== S && (S = $.id, rn = true), cs || M !== E) {
        H.buffers.depth.getReversed() ? (me.copy(E.projectionMatrix), zv(me), Hv(me), mt.setValue(T, "projectionMatrix", me)) : mt.setValue(T, "projectionMatrix", E.projectionMatrix), mt.setValue(T, "viewMatrix", E.matrixWorldInverse);
        const Qt = mt.map.cameraPosition;
        Qt !== void 0 && Qt.setValue(T, je.setFromMatrixPosition(E.matrixWorld)), F.logarithmicDepthBuffer && mt.setValue(T, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), ($.isMeshPhongMaterial || $.isMeshToonMaterial || $.isMeshLambertMaterial || $.isMeshBasicMaterial || $.isMeshStandardMaterial || $.isShaderMaterial) && mt.setValue(T, "isOrthographic", E.isOrthographicCamera === true), M !== E && (M = E, rn = true, nr = true);
      }
      if (W.isSkinnedMesh) {
        mt.setOptional(T, W, "bindMatrix"), mt.setOptional(T, W, "bindMatrixInverse");
        const Gt = W.skeleton;
        Gt && (Gt.boneTexture === null && Gt.computeBoneTexture(), mt.setValue(T, "boneTexture", Gt.boneTexture, y));
      }
      W.isBatchedMesh && (mt.setOptional(T, W, "batchingTexture"), mt.setValue(T, "batchingTexture", W._matricesTexture, y), mt.setOptional(T, W, "batchingIdTexture"), mt.setValue(T, "batchingIdTexture", W._indirectTexture, y), mt.setOptional(T, W, "batchingColorTexture"), W._colorsTexture !== null && mt.setValue(T, "batchingColorTexture", W._colorsTexture, y));
      const hn = Q.morphAttributes;
      if ((hn.position !== void 0 || hn.normal !== void 0 || hn.color !== void 0) && Ne.update(W, Q, Sn), (rn || Ue.receiveShadow !== W.receiveShadow) && (Ue.receiveShadow = W.receiveShadow, mt.setValue(T, "receiveShadow", W.receiveShadow)), $.isMeshGouraudMaterial && $.envMap !== null && (un.envMap.value = Ee, un.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === false ? -1 : 1), $.isMeshStandardMaterial && $.envMap === null && G.environment !== null && (un.envMapIntensity.value = G.environmentIntensity), rn && (mt.setValue(T, "toneMappingExposure", x.toneMappingExposure), Ue.needsLights && eg(un, nr), le && $.fog === true && re.refreshFogUniforms(un, le), re.refreshMaterialUniforms(un, $, K, ne, p.state.transmissionRenderTarget[E.id]), sa.upload(T, Zu(Ue), un, y)), $.isShaderMaterial && $.uniformsNeedUpdate === true && (sa.upload(T, Zu(Ue), un, y), $.uniformsNeedUpdate = false), $.isSpriteMaterial && mt.setValue(T, "center", W.center), mt.setValue(T, "modelViewMatrix", W.modelViewMatrix), mt.setValue(T, "normalMatrix", W.normalMatrix), mt.setValue(T, "modelMatrix", W.matrixWorld), $.isShaderMaterial || $.isRawShaderMaterial) {
        const Gt = $.uniformsGroups;
        for (let Qt = 0, Ba = Gt.length; Qt < Ba; Qt++) {
          const Fi = Gt[Qt];
          V.update(Fi, Sn), V.bind(Fi, Sn);
        }
      }
      return Sn;
    }
    function eg(E, G) {
      E.ambientLightColor.needsUpdate = G, E.lightProbe.needsUpdate = G, E.directionalLights.needsUpdate = G, E.directionalLightShadows.needsUpdate = G, E.pointLights.needsUpdate = G, E.pointLightShadows.needsUpdate = G, E.spotLights.needsUpdate = G, E.spotLightShadows.needsUpdate = G, E.rectAreaLights.needsUpdate = G, E.hemisphereLights.needsUpdate = G;
    }
    function tg(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return D;
    }, this.setRenderTargetTextures = function(E, G, Q) {
      const $ = B.get(E);
      $.__autoAllocateDepthBuffer = E.resolveDepthBuffer === false, $.__autoAllocateDepthBuffer === false && ($.__useRenderToTexture = false), B.get(E.texture).__webglTexture = G, B.get(E.depthTexture).__webglTexture = $.__autoAllocateDepthBuffer ? void 0 : Q, $.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(E, G) {
      const Q = B.get(E);
      Q.__webglFramebuffer = G, Q.__useDefaultFramebuffer = G === void 0;
    };
    const ng = T.createFramebuffer();
    this.setRenderTarget = function(E, G = 0, Q = 0) {
      D = E, w = G, R = Q;
      let $ = true, W = null, le = false, ve = false;
      if (E) {
        const Ee = B.get(E);
        if (Ee.__useDefaultFramebuffer !== void 0) H.bindFramebuffer(T.FRAMEBUFFER, null), $ = false;
        else if (Ee.__webglFramebuffer === void 0) y.setupRenderTarget(E);
        else if (Ee.__hasExternalTextures) y.rebindTextures(E, B.get(E.texture).__webglTexture, B.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const Ie = E.depthTexture;
          if (Ee.__boundDepthTexture !== Ie) {
            if (Ie !== null && B.has(Ie) && (E.width !== Ie.image.width || E.height !== Ie.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            y.setupDepthRenderbuffer(E);
          }
        }
        const ze = E.texture;
        (ze.isData3DTexture || ze.isDataArrayTexture || ze.isCompressedArrayTexture) && (ve = true);
        const Fe = B.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Fe[G]) ? W = Fe[G][Q] : W = Fe[G], le = true) : E.samples > 0 && y.useMultisampledRTT(E) === false ? W = B.get(E).__webglMultisampledFramebuffer : Array.isArray(Fe) ? W = Fe[Q] : W = Fe, I.copy(E.viewport), z.copy(E.scissor), X = E.scissorTest;
      } else I.copy(Se).multiplyScalar(K).floor(), z.copy(Le).multiplyScalar(K).floor(), X = Ze;
      if (Q !== 0 && (W = ng), H.bindFramebuffer(T.FRAMEBUFFER, W) && $ && H.drawBuffers(E, W), H.viewport(I), H.scissor(z), H.setScissorTest(X), le) {
        const Ee = B.get(E.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + G, Ee.__webglTexture, Q);
      } else if (ve) {
        const Ee = B.get(E.texture), ze = G;
        T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, Ee.__webglTexture, Q, ze);
      } else if (E !== null && Q !== 0) {
        const Ee = B.get(E.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Ee.__webglTexture, Q);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(E, G, Q, $, W, le, ve) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ae = B.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ve !== void 0 && (Ae = Ae[ve]), Ae) {
        H.bindFramebuffer(T.FRAMEBUFFER, Ae);
        try {
          const Ee = E.texture, ze = Ee.format, Fe = Ee.type;
          if (!F.textureFormatReadable(ze)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!F.textureTypeReadable(Fe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          G >= 0 && G <= E.width - $ && Q >= 0 && Q <= E.height - W && T.readPixels(G, Q, $, W, Ve.convert(ze), Ve.convert(Fe), le);
        } finally {
          const Ee = D !== null ? B.get(D).__webglFramebuffer : null;
          H.bindFramebuffer(T.FRAMEBUFFER, Ee);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, G, Q, $, W, le, ve) {
      if (!(E && E.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ae = B.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ve !== void 0 && (Ae = Ae[ve]), Ae) if (G >= 0 && G <= E.width - $ && Q >= 0 && Q <= E.height - W) {
        H.bindFramebuffer(T.FRAMEBUFFER, Ae);
        const Ee = E.texture, ze = Ee.format, Fe = Ee.type;
        if (!F.textureFormatReadable(ze)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!F.textureTypeReadable(Fe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Ie = T.createBuffer();
        T.bindBuffer(T.PIXEL_PACK_BUFFER, Ie), T.bufferData(T.PIXEL_PACK_BUFFER, le.byteLength, T.STREAM_READ), T.readPixels(G, Q, $, W, Ve.convert(ze), Ve.convert(Fe), 0);
        const Je = D !== null ? B.get(D).__webglFramebuffer : null;
        H.bindFramebuffer(T.FRAMEBUFFER, Je);
        const it = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return T.flush(), await Bv(T, it, 4), T.bindBuffer(T.PIXEL_PACK_BUFFER, Ie), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, le), T.deleteBuffer(Ie), T.deleteSync(it), le;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(E, G = null, Q = 0) {
      const $ = Math.pow(2, -Q), W = Math.floor(E.image.width * $), le = Math.floor(E.image.height * $), ve = G !== null ? G.x : 0, Ae = G !== null ? G.y : 0;
      y.setTexture2D(E, 0), T.copyTexSubImage2D(T.TEXTURE_2D, Q, 0, 0, ve, Ae, W, le), H.unbindTexture();
    };
    const ig = T.createFramebuffer(), sg = T.createFramebuffer();
    this.copyTextureToTexture = function(E, G, Q = null, $ = null, W = 0, le = null) {
      le === null && (W !== 0 ? (ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), le = W, W = 0) : le = 0);
      let ve, Ae, Ee, ze, Fe, Ie, Je, it, bt;
      const yt = E.isCompressedTexture ? E.mipmaps[le] : E.image;
      if (Q !== null) ve = Q.max.x - Q.min.x, Ae = Q.max.y - Q.min.y, Ee = Q.isBox3 ? Q.max.z - Q.min.z : 1, ze = Q.min.x, Fe = Q.min.y, Ie = Q.isBox3 ? Q.min.z : 0;
      else {
        const hn = Math.pow(2, -W);
        ve = Math.floor(yt.width * hn), Ae = Math.floor(yt.height * hn), E.isDataArrayTexture ? Ee = yt.depth : E.isData3DTexture ? Ee = Math.floor(yt.depth * hn) : Ee = 1, ze = 0, Fe = 0, Ie = 0;
      }
      $ !== null ? (Je = $.x, it = $.y, bt = $.z) : (Je = 0, it = 0, bt = 0);
      const et = Ve.convert(G.format), Ue = Ve.convert(G.type);
      let Lt;
      G.isData3DTexture ? (y.setTexture3D(G, 0), Lt = T.TEXTURE_3D) : G.isDataArrayTexture || G.isCompressedArrayTexture ? (y.setTexture2DArray(G, 0), Lt = T.TEXTURE_2D_ARRAY) : (y.setTexture2D(G, 0), Lt = T.TEXTURE_2D), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, G.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, G.unpackAlignment);
      const st = T.getParameter(T.UNPACK_ROW_LENGTH), Sn = T.getParameter(T.UNPACK_IMAGE_HEIGHT), cs = T.getParameter(T.UNPACK_SKIP_PIXELS), rn = T.getParameter(T.UNPACK_SKIP_ROWS), nr = T.getParameter(T.UNPACK_SKIP_IMAGES);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, yt.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, yt.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, ze), T.pixelStorei(T.UNPACK_SKIP_ROWS, Fe), T.pixelStorei(T.UNPACK_SKIP_IMAGES, Ie);
      const mt = E.isDataArrayTexture || E.isData3DTexture, un = G.isDataArrayTexture || G.isData3DTexture;
      if (E.isDepthTexture) {
        const hn = B.get(E), Gt = B.get(G), Qt = B.get(hn.__renderTarget), Ba = B.get(Gt.__renderTarget);
        H.bindFramebuffer(T.READ_FRAMEBUFFER, Qt.__webglFramebuffer), H.bindFramebuffer(T.DRAW_FRAMEBUFFER, Ba.__webglFramebuffer);
        for (let Fi = 0; Fi < Ee; Fi++) mt && (T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, B.get(E).__webglTexture, W, Ie + Fi), T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, B.get(G).__webglTexture, le, bt + Fi)), T.blitFramebuffer(ze, Fe, ve, Ae, Je, it, ve, Ae, T.DEPTH_BUFFER_BIT, T.NEAREST);
        H.bindFramebuffer(T.READ_FRAMEBUFFER, null), H.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else if (W !== 0 || E.isRenderTargetTexture || B.has(E)) {
        const hn = B.get(E), Gt = B.get(G);
        H.bindFramebuffer(T.READ_FRAMEBUFFER, ig), H.bindFramebuffer(T.DRAW_FRAMEBUFFER, sg);
        for (let Qt = 0; Qt < Ee; Qt++) mt ? T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, hn.__webglTexture, W, Ie + Qt) : T.framebufferTexture2D(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, hn.__webglTexture, W), un ? T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, Gt.__webglTexture, le, bt + Qt) : T.framebufferTexture2D(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Gt.__webglTexture, le), W !== 0 ? T.blitFramebuffer(ze, Fe, ve, Ae, Je, it, ve, Ae, T.COLOR_BUFFER_BIT, T.NEAREST) : un ? T.copyTexSubImage3D(Lt, le, Je, it, bt + Qt, ze, Fe, ve, Ae) : T.copyTexSubImage2D(Lt, le, Je, it, ze, Fe, ve, Ae);
        H.bindFramebuffer(T.READ_FRAMEBUFFER, null), H.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else un ? E.isDataTexture || E.isData3DTexture ? T.texSubImage3D(Lt, le, Je, it, bt, ve, Ae, Ee, et, Ue, yt.data) : G.isCompressedArrayTexture ? T.compressedTexSubImage3D(Lt, le, Je, it, bt, ve, Ae, Ee, et, yt.data) : T.texSubImage3D(Lt, le, Je, it, bt, ve, Ae, Ee, et, Ue, yt) : E.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, le, Je, it, ve, Ae, et, Ue, yt.data) : E.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, le, Je, it, yt.width, yt.height, et, yt.data) : T.texSubImage2D(T.TEXTURE_2D, le, Je, it, ve, Ae, et, Ue, yt);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, st), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Sn), T.pixelStorei(T.UNPACK_SKIP_PIXELS, cs), T.pixelStorei(T.UNPACK_SKIP_ROWS, rn), T.pixelStorei(T.UNPACK_SKIP_IMAGES, nr), le === 0 && G.generateMipmaps && T.generateMipmap(Lt), H.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, G, Q = null, $ = null, W = 0) {
      return ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(E, G, Q, $, W);
    }, this.initRenderTarget = function(E) {
      B.get(E).__webglFramebuffer === void 0 && y.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? y.setTextureCube(E, 0) : E.isData3DTexture ? y.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? y.setTexture2DArray(E, 0) : y.setTexture2D(E, 0), H.unbindTexture();
    }, this.resetState = function() {
      w = 0, R = 0, D = null, H.reset(), ft.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return zn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ke._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ke._getUnpackColorSpace();
  }
}
const xA = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
class tr {
  constructor() {
    this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const vA = new Ua(-1, 1, 1, -1, 0, 1);
class yA extends xt {
  constructor() {
    super(), this.setAttribute("position", new Qe([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Qe([0, 2, 0, 0, 2, 0], 2));
  }
}
const MA = new yA();
class Wu {
  constructor(e) {
    this._mesh = new Vt(MA, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, vA);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class SA extends tr {
  constructor(e, t = "tDiffuse") {
    super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof sn ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = zs.clone(e.uniforms), this.material = new sn({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this._fsQuad = new Wu(this.material);
  }
  render(e, t, i) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}
class dd extends tr {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(e, t, i) {
    const s = e.getContext(), r = e.state;
    r.buffers.color.setMask(false), r.buffers.depth.setMask(false), r.buffers.color.setLocked(true), r.buffers.depth.setLocked(true);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(true), r.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), r.buffers.stencil.setFunc(s.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(true), e.setRenderTarget(i), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(false), r.buffers.depth.setLocked(false), r.buffers.color.setMask(true), r.buffers.depth.setMask(true), r.buffers.stencil.setLocked(false), r.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), r.buffers.stencil.setLocked(true);
  }
}
class bA extends tr {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
  }
}
class jE {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const i = e.getSize(new he());
      this._width = i.width, this._height = i.height, t = new Vn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: Li }), t.texture.name = "EffectComposer.rt1";
    } else this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new SA(xA), this.copyPass.material.blending = oi, this.clock = new Wm();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
    return true;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let i = false;
    for (let s = 0, r = this.passes.length; s < r; s++) {
      const o = this.passes[s];
      if (o.enabled !== false) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, i), o.needsSwap) {
          if (i) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        dd !== void 0 && (o instanceof dd ? i = true : o instanceof bA && (i = false));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new he());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const i = this._width * this._pixelRatio, s = this._height * this._pixelRatio;
    this.renderTarget1.setSize(i, s), this.renderTarget2.setSize(i, s);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(i, s);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class KE extends tr {
  constructor(e, t, i = null, s = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = s, this.clearAlpha = r, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new we();
  }
  render(e, t, i) {
    const s = e.autoClear;
    e.autoClear = false;
    let r, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = s;
  }
}
const Go = { name: "OutputShader", uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } }, vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}` };
class ZE extends tr {
  constructor() {
    super(), this.uniforms = zs.clone(Go.uniforms), this.material = new $0({ name: Go.name, uniforms: this.uniforms, vertexShader: Go.vertexShader, fragmentShader: Go.fragmentShader }), this._fsQuad = new Wu(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, i) {
    this.uniforms.tDiffuse.value = i.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, Ke.getTransfer(this._outputColorSpace) === lt && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === jp ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === Kp ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === Zp ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === Jp ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === $p ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === em ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === Qp && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = true), this.renderToScreen === true ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}
const Wo = { defines: { SMAA_THRESHOLD: "0.1" }, uniforms: { tDiffuse: { value: null }, resolution: { value: new he(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}` }, Xo = { defines: { SMAA_MAX_SEARCH_STEPS: "8", SMAA_AREATEX_MAX_DISTANCE: "16", SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )", SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )" }, uniforms: { tDiffuse: { value: null }, tArea: { value: null }, tSearch: { value: null }, resolution: { value: new he(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}` }, Ul = { uniforms: { tDiffuse: { value: null }, tColor: { value: null }, resolution: { value: new he(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}` };
class JE extends tr {
  constructor() {
    super(), this._edgesRT = new Vn(1, 1, { depthBuffer: false, type: Li }), this._edgesRT.texture.name = "SMAAPass.edges", this._weightsRT = new Vn(1, 1, { depthBuffer: false, type: Li }), this._weightsRT.texture.name = "SMAAPass.weights";
    const e = this, t = new Image();
    t.src = this._getAreaTexture(), t.onload = function() {
      e._areaTexture.needsUpdate = true;
    }, this._areaTexture = new At(), this._areaTexture.name = "SMAAPass.area", this._areaTexture.image = t, this._areaTexture.minFilter = tn, this._areaTexture.generateMipmaps = false, this._areaTexture.flipY = false;
    const i = new Image();
    i.src = this._getSearchTexture(), i.onload = function() {
      e._searchTexture.needsUpdate = true;
    }, this._searchTexture = new At(), this._searchTexture.name = "SMAAPass.search", this._searchTexture.image = i, this._searchTexture.magFilter = Nt, this._searchTexture.minFilter = Nt, this._searchTexture.generateMipmaps = false, this._searchTexture.flipY = false, this._uniformsEdges = zs.clone(Wo.uniforms), this._materialEdges = new sn({ defines: Object.assign({}, Wo.defines), uniforms: this._uniformsEdges, vertexShader: Wo.vertexShader, fragmentShader: Wo.fragmentShader }), this._uniformsWeights = zs.clone(Xo.uniforms), this._uniformsWeights.tDiffuse.value = this._edgesRT.texture, this._uniformsWeights.tArea.value = this._areaTexture, this._uniformsWeights.tSearch.value = this._searchTexture, this._materialWeights = new sn({ defines: Object.assign({}, Xo.defines), uniforms: this._uniformsWeights, vertexShader: Xo.vertexShader, fragmentShader: Xo.fragmentShader }), this._uniformsBlend = zs.clone(Ul.uniforms), this._uniformsBlend.tDiffuse.value = this._weightsRT.texture, this._materialBlend = new sn({ uniforms: this._uniformsBlend, vertexShader: Ul.vertexShader, fragmentShader: Ul.fragmentShader }), this._fsQuad = new Wu(null);
  }
  render(e, t, i) {
    this._uniformsEdges.tDiffuse.value = i.texture, this._fsQuad.material = this._materialEdges, e.setRenderTarget(this._edgesRT), this.clear && e.clear(), this._fsQuad.render(e), this._fsQuad.material = this._materialWeights, e.setRenderTarget(this._weightsRT), this.clear && e.clear(), this._fsQuad.render(e), this._uniformsBlend.tColor.value = i.texture, this._fsQuad.material = this._materialBlend, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(), this._fsQuad.render(e));
  }
  setSize(e, t) {
    this._edgesRT.setSize(e, t), this._weightsRT.setSize(e, t), this._materialEdges.uniforms.resolution.value.set(1 / e, 1 / t), this._materialWeights.uniforms.resolution.value.set(1 / e, 1 / t), this._materialBlend.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  dispose() {
    this._edgesRT.dispose(), this._weightsRT.dispose(), this._areaTexture.dispose(), this._searchTexture.dispose(), this._materialEdges.dispose(), this._materialWeights.dispose(), this._materialBlend.dispose(), this._fsQuad.dispose();
  }
  _getAreaTexture() {
    return "data:image/png;base64,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";
  }
  _getSearchTexture() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=";
  }
}
function QE(n, e = false) {
  const t = n[0].index !== null, i = new Set(Object.keys(n[0].attributes)), s = new Set(Object.keys(n[0].morphAttributes)), r = {}, o = {}, a = n[0].morphTargetsRelative, l = new xt();
  let c = 0;
  for (let u = 0; u < n.length; ++u) {
    const h = n[u];
    let f = 0;
    if (t !== (h.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const d in h.attributes) {
      if (!i.has(d)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + '. All geometries must have compatible attributes; make sure "' + d + '" attribute exists among all geometries, or in none of them.'), null;
      r[d] === void 0 && (r[d] = []), r[d].push(h.attributes[d]), f++;
    }
    if (f !== i.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". Make sure all geometries have the same number of attributes."), null;
    if (a !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const d in h.morphAttributes) {
      if (!s.has(d)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ".  .morphAttributes must be consistent throughout all geometries."), null;
      o[d] === void 0 && (o[d] = []), o[d].push(h.morphAttributes[d]);
    }
    if (e) {
      let d;
      if (t) d = h.index.count;
      else if (h.attributes.position !== void 0) d = h.attributes.position.count;
      else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". The geometry must have either an index or a position attribute"), null;
      l.addGroup(c, d, u), c += d;
    }
  }
  if (t) {
    let u = 0;
    const h = [];
    for (let f = 0; f < n.length; ++f) {
      const d = n[f].index;
      for (let m = 0; m < d.count; ++m) h.push(d.getX(m) + u);
      u += n[f].attributes.position.count;
    }
    l.setIndex(h);
  }
  for (const u in r) {
    const h = pd(r[u]);
    if (!h) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + u + " attribute."), null;
    l.setAttribute(u, h);
  }
  for (const u in o) {
    const h = o[u][0].length;
    if (h === 0) break;
    l.morphAttributes = l.morphAttributes || {}, l.morphAttributes[u] = [];
    for (let f = 0; f < h; ++f) {
      const d = [];
      for (let _ = 0; _ < o[u].length; ++_) d.push(o[u][_][f]);
      const m = pd(d);
      if (!m) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + u + " morphAttribute."), null;
      l.morphAttributes[u].push(m);
    }
  }
  return l;
}
function pd(n) {
  let e, t, i, s = -1, r = 0;
  for (let c = 0; c < n.length; ++c) {
    const u = n[c];
    if (e === void 0 && (e = u.array.constructor), e !== u.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (t === void 0 && (t = u.itemSize), t !== u.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (i === void 0 && (i = u.normalized), i !== u.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (s === -1 && (s = u.gpuType), s !== u.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    r += u.count * t;
  }
  const o = new e(r), a = new Ut(o, t, i);
  let l = 0;
  for (let c = 0; c < n.length; ++c) {
    const u = n[c];
    if (u.isInterleavedBufferAttribute) {
      const h = l / t;
      for (let f = 0, d = u.count; f < d; f++) for (let m = 0; m < t; m++) {
        const _ = u.getComponent(f, m);
        a.setComponent(f + h, m, _);
      }
    } else o.set(u.array, l);
    l += u.count * t;
  }
  return s !== void 0 && (a.gpuType = s), a;
}
function md(n, e) {
  if (e === cv) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), n;
  if (e === Bc || e === fm) {
    let t = n.getIndex();
    if (t === null) {
      const o = [], a = n.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++) o.push(l);
        n.setIndex(o), t = n.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), n;
    }
    const i = t.count - 2, s = [];
    if (e === Bc) for (let o = 1; o <= i; o++) s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
    else for (let o = 0; o < i; o++) o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
    s.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = n.clone();
    return r.setIndex(s), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), n;
}
class $E extends ls {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new RA(t);
    }), this.register(function(t) {
      return new CA(t);
    }), this.register(function(t) {
      return new BA(t);
    }), this.register(function(t) {
      return new zA(t);
    }), this.register(function(t) {
      return new HA(t);
    }), this.register(function(t) {
      return new LA(t);
    }), this.register(function(t) {
      return new IA(t);
    }), this.register(function(t) {
      return new DA(t);
    }), this.register(function(t) {
      return new NA(t);
    }), this.register(function(t) {
      return new wA(t);
    }), this.register(function(t) {
      return new UA(t);
    }), this.register(function(t) {
      return new PA(t);
    }), this.register(function(t) {
      return new FA(t);
    }), this.register(function(t) {
      return new OA(t);
    }), this.register(function(t) {
      return new AA(t);
    }), this.register(function(t) {
      return new VA(t);
    }), this.register(function(t) {
      return new kA(t);
    });
  }
  load(e, t, i, s) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = Pr.extractUrlBase(e);
      o = Pr.resolveURL(c, this.path);
    } else o = Pr.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new zu(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(u) {
          t(u), r.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, i, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, i, s) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Zm) {
      try {
        o[qe.KHR_BINARY_GLTF] = new GA(e);
      } catch (h) {
        s && s(h);
        return;
      }
      r = JSON.parse(o[qe.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new nE(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, o[h.name] = true;
    }
    if (r.extensionsUsed) for (let u = 0; u < r.extensionsUsed.length; ++u) {
      const h = r.extensionsUsed[u], f = r.extensionsRequired || [];
      switch (h) {
        case qe.KHR_MATERIALS_UNLIT:
          o[h] = new EA();
          break;
        case qe.KHR_DRACO_MESH_COMPRESSION:
          o[h] = new WA(r, this.dracoLoader);
          break;
        case qe.KHR_TEXTURE_TRANSFORM:
          o[h] = new XA();
          break;
        case qe.KHR_MESH_QUANTIZATION:
          o[h] = new YA();
          break;
        default:
          f.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
      }
    }
    c.setExtensions(o), c.setPlugins(a), c.parse(i, s);
  }
  parseAsync(e, t) {
    const i = this;
    return new Promise(function(s, r) {
      i.parse(e, t, s, r);
    });
  }
}
function TA() {
  let n = {};
  return { get: function(e) {
    return n[e];
  }, add: function(e, t) {
    n[e] = t;
  }, remove: function(e) {
    delete n[e];
  }, removeAll: function() {
    n = {};
  } };
}
const qe = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class AA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, i = "light:" + e;
    let s = t.cache.get(i);
    if (s) return s;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new we(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Jt);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new vy(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new _y(u), c.distance = h;
        break;
      case "spot":
        c = new my(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), ti(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(i, s), s;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, i = this.parser, r = i.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return i._getNodeRef(t.cache, a, l);
    });
  }
}
class EA {
  constructor() {
    this.name = qe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ri;
  }
  extendParams(e, t, i) {
    const s = [];
    e.color = new we(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Jt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && s.push(i.assignTexture(e, "map", r.baseColorTexture, It));
    }
    return Promise.all(s);
  }
}
class wA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class RA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(i.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(i.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(i.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new he(a, a);
    }
    return Promise.all(r);
  }
}
class CA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class PA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(i.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(i.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class LA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new we(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Jt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(i.assignTexture(t, "sheenColorMap", o.sheenColorTexture, It)), o.sheenRoughnessTexture !== void 0 && r.push(i.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class IA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(i.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class DA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(i.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new we().setRGB(a[0], a[1], a[2], Jt), Promise.all(r);
  }
}
class NA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class UA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(i.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new we().setRGB(a[0], a[1], a[2], Jt), o.specularColorTexture !== void 0 && r.push(i.assignTexture(t, "specularColorMap", o.specularColorTexture, It)), Promise.all(r);
  }
}
class OA {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(i.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class FA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(i.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class BA {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, i = t.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[this.name]) return null;
    const r = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class zA {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, i = this.parser, s = i.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = i.textureLoader;
    if (a.uri) {
      const c = i.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return i.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return i.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class HA {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, i = this.parser, s = i.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = i.textureLoader;
    if (a.uri) {
      const c = i.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return i.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return i.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class VA {
  constructor(e) {
    this.name = qe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, i = t.bufferViews[e];
    if (i.extensions && i.extensions[this.name]) {
      const s = i.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, h = s.byteStride, f = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, f, s.mode, s.filter).then(function(d) {
          return d.buffer;
        }) : o.ready.then(function() {
          const d = new ArrayBuffer(u * h);
          return o.decodeGltfBuffer(new Uint8Array(d), u, h, f, s.mode, s.filter), d;
        });
      });
    } else return null;
  }
}
class kA {
  constructor(e) {
    this.name = qe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, i = t.nodes[e];
    if (!i.extensions || !i.extensions[this.name] || i.mesh === void 0) return null;
    const s = t.meshes[i.mesh];
    for (const c of s.primitives) if (c.mode !== pn.TRIANGLES && c.mode !== pn.TRIANGLE_STRIP && c.mode !== pn.TRIANGLE_FAN && c.mode !== void 0) return null;
    const o = i.extensions[this.name].attributes, a = [], l = {};
    for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], f = c[0].count, d = [];
      for (const m of h) {
        const _ = new ke(), g = new N(), p = new xn(), A = new N(1, 1, 1), b = new p0(m.geometry, m.material, f);
        for (let x = 0; x < f; x++) l.TRANSLATION && g.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && A.fromBufferAttribute(l.SCALE, x), b.setMatrixAt(x, _.compose(g, p, A));
        for (const x in l) if (x === "_COLOR_0") {
          const C = l[x];
          b.instanceColor = new Hc(C.array, C.itemSize, C.normalized);
        } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, l[x]);
        ut.prototype.copy.call(b, m), this.parser.assignFinalMaterial(b), d.push(b);
      }
      return u.isGroup ? (u.clear(), u.add(...d), u) : d[0];
    }));
  }
}
const Zm = "glTF", pr = 12, gd = { JSON: 1313821514, BIN: 5130562 };
class GA {
  constructor(e) {
    this.name = qe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, pr), i = new TextDecoder();
    if (this.header = { magic: i.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== Zm) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - pr, r = new DataView(e, pr);
    let o = 0;
    for (; o < s; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const l = r.getUint32(o, true);
      if (o += 4, l === gd.JSON) {
        const c = new Uint8Array(e, pr + o, a);
        this.content = i.decode(c);
      } else if (l === gd.BIN) {
        const c = pr + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class WA {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = qe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const i = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const h = jc[u] || u.toLowerCase();
      a[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = jc[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const f = i.accessors[e.attributes[u]], d = Hs[f.componentType];
        c[h] = d.name, l[h] = f.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(h, f) {
        s.decodeDracoFile(u, function(d) {
          for (const m in d.attributes) {
            const _ = d.attributes[m], g = l[m];
            g !== void 0 && (_.normalized = g);
          }
          h(d);
        }, a, c, Jt, f);
      });
    });
  }
}
class XA {
  constructor() {
    this.name = qe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class YA {
  constructor() {
    this.name = qe.KHR_MESH_QUANTIZATION;
  }
}
class Jm extends $r {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, r = e * s * 3 + s;
    for (let o = 0; o !== s; o++) t[o] = i[r + o];
    return t;
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = s - t, h = (i - t) / u, f = h * h, d = f * h, m = e * c, _ = m - c, g = -2 * d + 3 * f, p = d - f, A = 1 - g, b = p - f + h;
    for (let x = 0; x !== a; x++) {
      const C = o[_ + x + a], w = o[_ + x + l] * u, R = o[m + x + a], D = o[m + x] * u;
      r[x] = A * C + b * w + g * R + p * D;
    }
    return r;
  }
}
const qA = new xn();
class jA extends Jm {
  interpolate_(e, t, i, s) {
    const r = super.interpolate_(e, t, i, s);
    return qA.fromArray(r).normalize().toArray(r), r;
  }
}
const pn = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Hs = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, _d = { 9728: Nt, 9729: tn, 9984: nm, 9985: Jo, 9986: gr, 9987: si }, xd = { 33071: Ei, 33648: da, 10497: Xs }, Ol = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, jc = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, yi = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, KA = { CUBICSPLINE: void 0, LINEAR: Gr, STEP: kr }, Fl = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function ZA(n) {
  return n.DefaultMaterial === void 0 && (n.DefaultMaterial = new Bu({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: li })), n.DefaultMaterial;
}
function Ki(n, e, t) {
  for (const i in t.extensions) n[i] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = t.extensions[i]);
}
function ti(n, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(n.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function JA(n, e, t) {
  let i = false, s = false, r = false;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (i = true), h.NORMAL !== void 0 && (s = true), h.COLOR_0 !== void 0 && (r = true), i && s && r) break;
  }
  if (!i && !s && !r) return Promise.resolve(n);
  const o = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (i) {
      const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : n.attributes.position;
      o.push(f);
    }
    if (s) {
      const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : n.attributes.normal;
      a.push(f);
    }
    if (r) {
      const f = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : n.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function(c) {
    const u = c[0], h = c[1], f = c[2];
    return i && (n.morphAttributes.position = u), s && (n.morphAttributes.normal = h), r && (n.morphAttributes.color = f), n.morphTargetsRelative = true, n;
  });
}
function QA(n, e) {
  if (n.updateMorphTargets(), e.weights !== void 0) for (let t = 0, i = e.weights.length; t < i; t++) n.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (n.morphTargetInfluences.length === t.length) {
      n.morphTargetDictionary = {};
      for (let i = 0, s = t.length; i < s; i++) n.morphTargetDictionary[t[i]] = i;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function $A(n) {
  let e;
  const t = n.extensions && n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Bl(t.attributes) : e = n.indices + ":" + Bl(n.attributes) + ":" + n.mode, n.targets !== void 0) for (let i = 0, s = n.targets.length; i < s; i++) e += ":" + Bl(n.targets[i]);
  return e;
}
function Bl(n) {
  let e = "";
  const t = Object.keys(n).sort();
  for (let i = 0, s = t.length; i < s; i++) e += t[i] + ":" + n[t[i]] + ";";
  return e;
}
function Kc(n) {
  switch (n) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function eE(n) {
  return n.search(/\.jpe?g($|\?)/i) > 0 || n.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : n.search(/\.webp($|\?)/i) > 0 || n.search(/^data\:image\/webp/) === 0 ? "image/webp" : n.search(/\.ktx2($|\?)/i) > 0 || n.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const tE = new ke();
class nE {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new TA(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let i = false, s = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      i = /^((?!chrome|android).)*safari/i.test(a) === true;
      const l = a.match(/Version\/(\d+)/);
      s = i && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || i && s < 17 || r && o < 98 ? this.textureLoader = new dy(this.options.manager) : this.textureLoader = new yy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new zu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const i = this, s = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([i.getDependencies("scene"), i.getDependencies("animation"), i.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][s.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: s.asset, parser: i, userData: {} };
      return Ki(r, a, s), ti(a, s), Promise.all(i._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes) l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [];
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s].joints;
      for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
    }
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (i[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, i) {
    if (e.refs[t] <= 1) return i;
    const s = i.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, u] of o.children.entries()) r(u, a.children[c]);
    };
    return r(i, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const r = e(t[s]);
      r && i.push(r);
    }
    return i;
  }
  getDependency(e, t) {
    const i = e + ":" + t;
    let s = this.cache.get(i);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !s) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(i, s);
    }
    return s;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const i = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(r, o) {
        return i.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], i = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(r, o) {
      i.load(Pr.resolveURL(t.uri, s.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(i) {
      const s = t.byteLength || 0, r = t.byteOffset || 0;
      return i.slice(r, r + s);
    });
  }
  loadAccessor(e) {
    const t = this, i = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = Ol[s.type], a = Hs[s.componentType], l = s.normalized === true, c = new a(s.count * o);
      return Promise.resolve(new Ut(c, o, l));
    }
    const r = [];
    return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = Ol[s.type], c = Hs[s.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, f = s.byteOffset || 0, d = s.bufferView !== void 0 ? i.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
      let _, g;
      if (d && d !== h) {
        const p = Math.floor(f / d), A = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + p + ":" + s.count;
        let b = t.cache.get(A);
        b || (_ = new c(a, p * d, s.count * d / u), b = new Sm(_, d / u), t.cache.add(A, b)), g = new Cu(b, l, f % d / u, m);
      } else a === null ? _ = new c(s.count * l) : _ = new c(a, f, s.count * l), g = new Ut(_, l, m);
      if (s.sparse !== void 0) {
        const p = Ol.SCALAR, A = Hs[s.sparse.indices.componentType], b = s.sparse.indices.byteOffset || 0, x = s.sparse.values.byteOffset || 0, C = new A(o[1], b, s.sparse.count * p), w = new c(o[2], x, s.sparse.count * l);
        a !== null && (g = new Ut(g.array.slice(), g.itemSize, g.normalized)), g.normalized = false;
        for (let R = 0, D = C.length; R < D; R++) {
          const S = C[R];
          if (g.setX(S, w[R * l]), l >= 2 && g.setY(S, w[R * l + 1]), l >= 3 && g.setZ(S, w[R * l + 2]), l >= 4 && g.setW(S, w[R * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        g.normalized = m;
      }
      return g;
    });
  }
  loadTexture(e) {
    const t = this.json, i = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = i.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, i) {
    const s = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, i).then(function(u) {
      u.flipY = false, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
      const f = (r.samplers || {})[o.sampler] || {};
      return u.magFilter = _d[f.magFilter] || tn, u.minFilter = _d[f.minFilter] || si, u.wrapS = xd[f.wrapS] || Xs, u.wrapT = xd[f.wrapT] || Xs, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Nt && u.minFilter !== tn, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const i = this, s = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0) l = i.getDependency("bufferView", o.bufferView).then(function(h) {
      c = true;
      const f = new Blob([h], { type: o.mimeType });
      return l = a.createObjectURL(f), l;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(f, d) {
        let m = f;
        t.isImageBitmapLoader === true && (m = function(_) {
          const g = new At(_);
          g.needsUpdate = true, f(g);
        }), t.load(Pr.resolveURL(h, r.path), m, void 0, d);
      });
    }).then(function(h) {
      return c === true && a.revokeObjectURL(l), ti(h, o), h.userData.mimeType = o.mimeType || eE(o.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, i, s) {
    const r = this;
    return this.getDependency("texture", i.index).then(function(o) {
      if (!o) return null;
      if (i.texCoord !== void 0 && i.texCoord > 0 && (o = o.clone(), o.channel = i.texCoord), r.extensions[qe.KHR_TEXTURE_TRANSFORM]) {
        const a = i.extensions !== void 0 ? i.extensions[qe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let i = e.material;
    const s = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + i.uuid;
      let l = this.cache.get(a);
      l || (l = new Em(), vn.prototype.copy.call(l, i), l.color.copy(i.color), l.map = i.map, l.sizeAttenuation = false, this.cache.add(a, l)), i = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + i.uuid;
      let l = this.cache.get(a);
      l || (l = new Da(), vn.prototype.copy.call(l, i), l.color.copy(i.color), l.map = i.map, this.cache.add(a, l)), i = l;
    }
    if (s || r || o) {
      let a = "ClonedMaterial:" + i.uuid + ":";
      s && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = i.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(i))), i = l;
    }
    e.material = i;
  }
  getMaterialType() {
    return Bu;
  }
  loadMaterial(e) {
    const t = this, i = this.json, s = this.extensions, r = i.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[qe.KHR_MATERIALS_UNLIT]) {
      const h = s[qe.KHR_MATERIALS_UNLIT];
      o = h.getMaterialType(), c.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new we(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const f = h.baseColorFactor;
        a.color.setRGB(f[0], f[1], f[2], Jt), a.opacity = f[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, It)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === true && (a.side = Bn);
    const u = r.alphaMode || Fl.OPAQUE;
    if (u === Fl.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === Fl.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== ri && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new he(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && o !== ri && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== ri) {
      const h = r.emissiveFactor;
      a.emissive = new we().setRGB(h[0], h[1], h[2], Jt);
    }
    return r.emissiveTexture !== void 0 && o !== ri && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, It)), Promise.all(c).then(function() {
      const h = new o(a);
      return r.name && (h.name = r.name), ti(h, r), t.associations.set(h, { materials: e }), r.extensions && Ki(s, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = ot.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, i = this.extensions, s = this.primitiveCache;
    function r(a) {
      return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return vd(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = $A(c), h = s[u];
      if (h) o.push(h.promise);
      else {
        let f;
        c.extensions && c.extensions[qe.KHR_DRACO_MESH_COMPRESSION] ? f = r(c) : f = vd(new xt(), c, t), s[u] = { primitive: c, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, i = this.json, s = this.extensions, r = i.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const u = o[l].material === void 0 ? ZA(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let d = 0, m = u.length; d < m; d++) {
        const _ = u[d], g = o[d];
        let p;
        const A = c[d];
        if (g.mode === pn.TRIANGLES || g.mode === pn.TRIANGLE_STRIP || g.mode === pn.TRIANGLE_FAN || g.mode === void 0) p = r.isSkinnedMesh === true ? new h0(_, A) : new Vt(_, A), p.isSkinnedMesh === true && p.normalizeSkinWeights(), g.mode === pn.TRIANGLE_STRIP ? p.geometry = md(p.geometry, fm) : g.mode === pn.TRIANGLE_FAN && (p.geometry = md(p.geometry, Bc));
        else if (g.mode === pn.LINES) p = new Am(_, A);
        else if (g.mode === pn.LINE_STRIP) p = new Xr(_, A);
        else if (g.mode === pn.LINE_LOOP) p = new _0(_, A);
        else if (g.mode === pn.POINTS) p = new x0(_, A);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && QA(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), ti(p, r), g.extensions && Ki(s, p, g), t.assignFinalMaterial(p), h.push(p);
      }
      for (let d = 0, m = h.length; d < m; d++) t.associations.set(h[d], { meshes: e, primitives: d });
      if (h.length === 1) return r.extensions && Ki(s, h[0], r), h[0];
      const f = new ns();
      r.extensions && Ki(s, f, r), t.associations.set(f, { meshes: e });
      for (let d = 0, m = h.length; d < m; d++) f.add(h[d]);
      return f;
    });
  }
  loadCamera(e) {
    let t;
    const i = this.json.cameras[e], s = i[i.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return i.type === "perspective" ? t = new en(Ov.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : i.type === "orthographic" && (t = new Ua(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), i.name && (t.name = this.createUniqueName(i.name)), ti(t, i), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], i = [];
    for (let s = 0, r = t.joints.length; s < r; s++) i.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? i.push(this.getDependency("accessor", t.inverseBindMatrices)) : i.push(null), Promise.all(i).then(function(s) {
      const r = s.pop(), o = s, a = [], l = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        if (h) {
          a.push(h);
          const f = new ke();
          r !== null && f.fromArray(r.array, c * 16), l.push(f);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Pu(a, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, i = this, s = t.animations[e], r = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
    for (let h = 0, f = s.channels.length; h < f; h++) {
      const d = s.channels[h], m = s.samplers[d.sampler], _ = d.target, g = _.node, p = s.parameters !== void 0 ? s.parameters[m.input] : m.input, A = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
      _.node !== void 0 && (o.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", A)), c.push(m), u.push(_));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(u)]).then(function(h) {
      const f = h[0], d = h[1], m = h[2], _ = h[3], g = h[4], p = [];
      for (let A = 0, b = f.length; A < b; A++) {
        const x = f[A], C = d[A], w = m[A], R = _[A], D = g[A];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const S = i._createAnimationTracks(x, C, w, R, D);
        if (S) for (let M = 0; M < S.length; M++) p.push(S[M]);
      }
      return new Xc(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, i = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : i.getDependency("mesh", s.mesh).then(function(r) {
      const o = i._getNodeRef(i.meshCache, s.mesh, r);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let l = 0, c = s.weights.length; l < c; l++) a.morphTargetInfluences[l] = s.weights[l];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, i = this, s = t.nodes[e], r = i._loadNodeShallow(e), o = [], a = s.children || [];
    for (let c = 0, u = a.length; c < u; c++) o.push(i.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", s.skin);
    return Promise.all([r, Promise.all(o), l]).then(function(c) {
      const u = c[0], h = c[1], f = c[2];
      f !== null && u.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, tE);
      });
      for (let d = 0, m = h.length; d < m; d++) u.add(h[d]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, i = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? s.createUniqueName(r.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(s.getDependency("camera", r.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, r.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (r.isBone === true ? u = new bm() : c.length > 1 ? u = new ns() : c.length === 1 ? u = c[0] : u = new ut(), u !== c[0]) for (let h = 0, f = c.length; h < f; h++) u.add(c[h]);
      if (r.name && (u.userData.name = r.name, u.name = o), ti(u, r), r.extensions && Ki(i, u, r), r.matrix !== void 0) {
        const h = new ke();
        h.fromArray(r.matrix), u.applyMatrix4(h);
      } else r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      return s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, i = this.json.scenes[e], s = this, r = new ns();
    i.name && (r.name = s.createUniqueName(i.name)), ti(r, i), i.extensions && Ki(t, r, i);
    const o = i.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++) a.push(s.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++) r.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [f, d] of s.associations) (f instanceof vn || f instanceof At) && h.set(f, d);
        return u.traverse((f) => {
          const d = s.associations.get(f);
          d != null && h.set(f, d);
        }), h;
      };
      return s.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, i, s, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    yi[r.path] === yi.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
    }) : l.push(a);
    let c;
    switch (yi[r.path]) {
      case yi.weights:
        c = Ks;
        break;
      case yi.rotation:
        c = Zs;
        break;
      case yi.translation:
      case yi.scale:
        c = Js;
        break;
      default:
        switch (i.itemSize) {
          case 1:
            c = Ks;
            break;
          case 2:
          case 3:
          default:
            c = Js;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? KA[s.interpolation] : Gr, h = this._getArrayFromAccessor(i);
    for (let f = 0, d = l.length; f < d; f++) {
      const m = new c(l[f] + "." + yi[r.path], t.array, h, u);
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), o.push(m);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const i = Kc(t.constructor), s = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++) s[r] = t[r] * i;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(i) {
      const s = this instanceof Zs ? jA : Jm;
      return new s(this.times, this.values, this.getValueSize() / 3, i);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function iE(n, e, t) {
  const i = e.attributes, s = new fi();
  if (i.POSITION !== void 0) {
    const a = t.json.accessors[i.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(new N(l[0], l[1], l[2]), new N(c[0], c[1], c[2])), a.normalized) {
        const u = Kc(Hs[a.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new N(), l = new N();
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      if (h.POSITION !== void 0) {
        const f = t.json.accessors[h.POSITION], d = f.min, m = f.max;
        if (d !== void 0 && m !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(m[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(m[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(m[2]))), f.normalized) {
            const _ = Kc(Hs[f.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  n.boundingBox = s;
  const o = new kn();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, n.boundingSphere = o;
}
function vd(n, e, t) {
  const i = e.attributes, s = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      n.setAttribute(a, l);
    });
  }
  for (const o in i) {
    const a = jc[o] || o.toLowerCase();
    a in n.attributes || s.push(r(i[o], a));
  }
  if (e.indices !== void 0 && !n.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      n.setIndex(a);
    });
    s.push(o);
  }
  return Ke.workingColorSpace !== Jt && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`), ti(n, e), iE(n, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? JA(n, e.targets, t) : n;
  });
}
function ew(n) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), i = n.clone();
  return Qm(n, i, function(s, r) {
    e.set(r, s), t.set(s, r);
  }), i.traverse(function(s) {
    if (!s.isSkinnedMesh) return;
    const r = s, o = e.get(s), a = o.skeleton.bones;
    r.skeleton = o.skeleton.clone(), r.bindMatrix.copy(o.bindMatrix), r.skeleton.bones = a.map(function(l) {
      return t.get(l);
    }), r.bind(r.skeleton, r.bindMatrix);
  }), i;
}
function Qm(n, e, t) {
  t(n, e);
  for (let i = 0; i < n.children.length; i++) Qm(n.children[i], e.children[i], t);
}
export {
  sn as $,
  SE as A,
  NE as B,
  DE as C,
  UE as D,
  ew as E,
  $t as F,
  $E as G,
  rv as H,
  FE as I,
  dy as J,
  cy as K,
  ov as L,
  ke as M,
  he as N,
  ut as O,
  tr as P,
  we as Q,
  ey as R,
  Bn as S,
  gE as T,
  hv as U,
  N as V,
  Vn as W,
  oi as X,
  zs as Y,
  xA as Z,
  bE as _,
  Up as a,
  QE as a$,
  Wu as a0,
  Bh as a1,
  en as a2,
  EE as a3,
  Mm as a4,
  qE as a5,
  Fx as a6,
  KE as a7,
  ZE as a8,
  zh as a9,
  Na as aA,
  It as aB,
  zE as aC,
  Ui as aD,
  PE as aE,
  lE as aF,
  kt as aG,
  k_ as aH,
  za as aI,
  i_ as aJ,
  ME as aK,
  sE as aL,
  oE as aM,
  cE as aN,
  $_ as aO,
  Op as aP,
  jo as aQ,
  Ca as aR,
  __ as aS,
  Da as aT,
  xt as aU,
  Ut as aV,
  xn as aW,
  uE as aX,
  hE as aY,
  Bu as aZ,
  Fu as a_,
  JE as aa,
  jE as ab,
  Ov as ac,
  ns as ad,
  p0 as ae,
  Qr as af,
  RE as ag,
  Vt as ah,
  Dm as ai,
  I0 as aj,
  Bm as ak,
  Am as al,
  _y as am,
  IE as an,
  Qe as ao,
  BE as ap,
  Cu as aq,
  wE as ar,
  fi as as,
  kn as at,
  Fn as au,
  _e as av,
  nt as aw,
  VE as ax,
  Im as ay,
  ri as az,
  Jl as b,
  Ln as b0,
  Ua as b1,
  XE as b2,
  yE as b3,
  xE as b4,
  CE as b5,
  Nt as b6,
  Li as b7,
  wm as b8,
  LE as b9,
  vy as ba,
  WE as bb,
  GE as bc,
  kE as bd,
  zu as be,
  YE as bf,
  Nu as bg,
  Ou as bh,
  Xr as bi,
  zm as bj,
  TE as bk,
  AE as bl,
  HE as bm,
  Jr as bn,
  Ji as bo,
  pE as c,
  mE as d,
  rE as e,
  Q_ as f,
  Zt as g,
  fE as h,
  aE as i,
  V_ as j,
  tt as k,
  qg as l,
  tu as m,
  eu as n,
  Zl as o,
  au as p,
  qa as q,
  dE as r,
  Fg as s,
  _g as t,
  Hg as u,
  vE as v,
  Zg as w,
  lp as x,
  hp as y,
  _E as z
};
