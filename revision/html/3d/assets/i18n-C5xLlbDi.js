import { aL as wn, e as Mn, aM as Un, f as Le, q as rt, aG as Wn, aN as gt, aO as sn, F as on, aP as Ie, aQ as $n, x as xn, y as Vn, g as jn, aR as Yn } from "./SkeletonUtils-Bl7JM-Sp.js";
/*!
* shared v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
const Me = typeof window < "u", le = (e, t = false) => t ? Symbol.for(e) : Symbol(e), Hn = (e, t, n) => Gn({ l: e, k: t, s: n }), Gn = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Y = (e) => typeof e == "number" && isFinite(e), Bn = (e) => pt(e) === "[object Date]", he = (e) => pt(e) === "[object RegExp]", Ue = (e) => A(e) && Object.keys(e).length === 0, G = Object.assign, Kn = Object.create, M = (e = null) => Kn(e);
let St;
const fe = () => St || (St = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : M());
function Ct(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Xn = Object.prototype.hasOwnProperty;
function z(e, t) {
  return Xn.call(e, t);
}
const H = Array.isArray, $ = (e) => typeof e == "function", T = (e) => typeof e == "string", D = (e) => typeof e == "boolean", F = (e) => e !== null && typeof e == "object", qn = (e) => F(e) && $(e.then) && $(e.catch), ln = Object.prototype.toString, pt = (e) => ln.call(e), A = (e) => pt(e) === "[object Object]", Jn = (e) => e == null ? "" : H(e) || A(e) && e.toString === ln ? JSON.stringify(e, null, 2) : String(e);
function ht(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
function Qn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ae = (e) => !F(e) || H(e);
function we(e, t) {
  if (Ae(e) || Ae(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((s) => {
      s !== "__proto__" && (F(a[s]) && !F(r[s]) && (r[s] = Array.isArray(a[s]) ? [] : M()), Ae(r[s]) || Ae(a[s]) ? r[s] = a[s] : n.push({ src: a[s], des: r[s] }));
    });
  }
}
/*!
* message-compiler v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
function Zn(e, t, n) {
  return { line: e, column: t, offset: n };
}
function st(e, t, n) {
  return { start: e, end: t };
}
const w = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14 }, zn = 17;
function We(e, t, n = {}) {
  const { domain: a, messages: r, args: s } = n, i = e, c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = a, c;
}
function ea(e) {
  throw e;
}
const ae = " ", ta = "\r", K = `
`, na = "\u2028", aa = "\u2029";
function ra(e) {
  const t = e;
  let n = 0, a = 1, r = 1, s = 0;
  const i = (b) => t[b] === ta && t[b + 1] === K, c = (b) => t[b] === K, f = (b) => t[b] === aa, _ = (b) => t[b] === na, k = (b) => i(b) || c(b) || f(b) || _(b), E = () => n, y = () => a, S = () => r, P = () => s, N = (b) => i(b) || f(b) || _(b) ? K : t[b], C = () => N(n), u = () => N(n + s);
  function p() {
    return s = 0, k(n) && (a++, r = 0), i(n) && n++, n++, r++, t[n];
  }
  function L() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function d() {
    n = 0, a = 1, r = 1, s = 0;
  }
  function I(b = 0) {
    s = b;
  }
  function v() {
    const b = n + s;
    for (; b !== n; ) p();
    s = 0;
  }
  return { index: E, line: y, column: S, peekOffset: P, charAt: N, currentChar: C, currentPeek: u, next: p, peek: L, reset: d, resetPeek: I, skipToPeek: v };
}
const oe = void 0, sa = ".", Ot = "'", oa = "tokenizer";
function la(e, t = {}) {
  const n = t.location !== false, a = ra(e), r = () => a.index(), s = () => Zn(a.line(), a.column(), a.index()), i = s(), c = r(), f = { currentType: 13, offset: c, startLoc: i, endLoc: i, lastType: 13, lastOffset: c, lastStartLoc: i, lastEndLoc: i, braceNest: 0, inLinked: false, text: "" }, _ = () => f, { onError: k } = t;
  function E(o, l, g, ...O) {
    const V = _();
    if (l.column += g, l.offset += g, k) {
      const R = n ? st(V.startLoc, l) : null, m = We(o, R, { domain: oa, args: O });
      k(m);
    }
  }
  function y(o, l, g) {
    o.endLoc = s(), o.currentType = l;
    const O = { type: l };
    return n && (O.loc = st(o.startLoc, o.endLoc)), g != null && (O.value = g), O;
  }
  const S = (o) => y(o, 13);
  function P(o, l) {
    return o.currentChar() === l ? (o.next(), l) : (E(w.EXPECTED_TOKEN, s(), 0, l), "");
  }
  function N(o) {
    let l = "";
    for (; o.currentPeek() === ae || o.currentPeek() === K; ) l += o.currentPeek(), o.peek();
    return l;
  }
  function C(o) {
    const l = N(o);
    return o.skipToPeek(), l;
  }
  function u(o) {
    if (o === oe) return false;
    const l = o.charCodeAt(0);
    return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l === 95;
  }
  function p(o) {
    if (o === oe) return false;
    const l = o.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function L(o, l) {
    const { currentType: g } = l;
    if (g !== 2) return false;
    N(o);
    const O = u(o.currentPeek());
    return o.resetPeek(), O;
  }
  function d(o, l) {
    const { currentType: g } = l;
    if (g !== 2) return false;
    N(o);
    const O = o.currentPeek() === "-" ? o.peek() : o.currentPeek(), V = p(O);
    return o.resetPeek(), V;
  }
  function I(o, l) {
    const { currentType: g } = l;
    if (g !== 2) return false;
    N(o);
    const O = o.currentPeek() === Ot;
    return o.resetPeek(), O;
  }
  function v(o, l) {
    const { currentType: g } = l;
    if (g !== 7) return false;
    N(o);
    const O = o.currentPeek() === ".";
    return o.resetPeek(), O;
  }
  function b(o, l) {
    const { currentType: g } = l;
    if (g !== 8) return false;
    N(o);
    const O = u(o.currentPeek());
    return o.resetPeek(), O;
  }
  function W(o, l) {
    const { currentType: g } = l;
    if (!(g === 7 || g === 11)) return false;
    N(o);
    const O = o.currentPeek() === ":";
    return o.resetPeek(), O;
  }
  function x(o, l) {
    const { currentType: g } = l;
    if (g !== 9) return false;
    const O = () => {
      const R = o.currentPeek();
      return R === "{" ? u(o.peek()) : R === "@" || R === "|" || R === ":" || R === "." || R === ae || !R ? false : R === K ? (o.peek(), O()) : Z(o, false);
    }, V = O();
    return o.resetPeek(), V;
  }
  function q(o) {
    N(o);
    const l = o.currentPeek() === "|";
    return o.resetPeek(), l;
  }
  function Z(o, l = true) {
    const g = (V = false, R = "") => {
      const m = o.currentPeek();
      return m === "{" || m === "@" || !m ? V : m === "|" ? !(R === ae || R === K) : m === ae ? (o.peek(), g(true, ae)) : m === K ? (o.peek(), g(true, K)) : true;
    }, O = g();
    return l && o.resetPeek(), O;
  }
  function B(o, l) {
    const g = o.currentChar();
    return g === oe ? oe : l(g) ? (o.next(), g) : null;
  }
  function me(o) {
    const l = o.charCodeAt(0);
    return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l >= 48 && l <= 57 || l === 95 || l === 36;
  }
  function xe(o) {
    return B(o, me);
  }
  function Ve(o) {
    const l = o.charCodeAt(0);
    return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l >= 48 && l <= 57 || l === 95 || l === 36 || l === 45;
  }
  function je(o) {
    return B(o, Ve);
  }
  function Ye(o) {
    const l = o.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function He(o) {
    return B(o, Ye);
  }
  function ne(o) {
    const l = o.charCodeAt(0);
    return l >= 48 && l <= 57 || l >= 65 && l <= 70 || l >= 97 && l <= 102;
  }
  function Ce(o) {
    return B(o, ne);
  }
  function Oe(o) {
    let l = "", g = "";
    for (; l = He(o); ) g += l;
    return g;
  }
  function Ge(o) {
    let l = "";
    for (; ; ) {
      const g = o.currentChar();
      if (g === "{" || g === "}" || g === "@" || g === "|" || !g) break;
      if (g === ae || g === K) if (Z(o)) l += g, o.next();
      else {
        if (q(o)) break;
        l += g, o.next();
      }
      else l += g, o.next();
    }
    return l;
  }
  function Be(o) {
    C(o);
    let l = "", g = "";
    for (; l = je(o); ) g += l;
    return o.currentChar() === oe && E(w.UNTERMINATED_CLOSING_BRACE, s(), 0), g;
  }
  function Ke(o) {
    C(o);
    let l = "";
    return o.currentChar() === "-" ? (o.next(), l += `-${Oe(o)}`) : l += Oe(o), o.currentChar() === oe && E(w.UNTERMINATED_CLOSING_BRACE, s(), 0), l;
  }
  function Nt(o) {
    return o !== Ot && o !== K;
  }
  function Xe(o) {
    C(o), P(o, "'");
    let l = "", g = "";
    for (; l = B(o, Nt); ) l === "\\" ? g += qe(o) : g += l;
    const O = o.currentChar();
    return O === K || O === oe ? (E(w.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), O === K && (o.next(), P(o, "'")), g) : (P(o, "'"), g);
  }
  function qe(o) {
    const l = o.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return o.next(), `\\${l}`;
      case "u":
        return Pe(o, l, 4);
      case "U":
        return Pe(o, l, 6);
      default:
        return E(w.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, l), "";
    }
  }
  function Pe(o, l, g) {
    P(o, l);
    let O = "";
    for (let V = 0; V < g; V++) {
      const R = Ce(o);
      if (!R) {
        E(w.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${l}${O}${o.currentChar()}`);
        break;
      }
      O += R;
    }
    return `\\${l}${O}`;
  }
  function Je(o) {
    return o !== "{" && o !== "}" && o !== ae && o !== K;
  }
  function Qe(o) {
    C(o);
    let l = "", g = "";
    for (; l = B(o, Je); ) g += l;
    return g;
  }
  function Ze(o) {
    let l = "", g = "";
    for (; l = xe(o); ) g += l;
    return g;
  }
  function ze(o) {
    const l = (g) => {
      const O = o.currentChar();
      return O === "{" || O === "@" || O === "|" || O === "(" || O === ")" || !O || O === ae ? g : (g += O, o.next(), l(g));
    };
    return l("");
  }
  function Ee(o) {
    C(o);
    const l = P(o, "|");
    return C(o), l;
  }
  function de(o, l) {
    let g = null;
    switch (o.currentChar()) {
      case "{":
        return l.braceNest >= 1 && E(w.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), o.next(), g = y(l, 2, "{"), C(o), l.braceNest++, g;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && E(w.EMPTY_PLACEHOLDER, s(), 0), o.next(), g = y(l, 3, "}"), l.braceNest--, l.braceNest > 0 && C(o), l.inLinked && l.braceNest === 0 && (l.inLinked = false), g;
      case "@":
        return l.braceNest > 0 && E(w.UNTERMINATED_CLOSING_BRACE, s(), 0), g = _e(o, l) || S(l), l.braceNest = 0, g;
      default: {
        let V = true, R = true, m = true;
        if (q(o)) return l.braceNest > 0 && E(w.UNTERMINATED_CLOSING_BRACE, s(), 0), g = y(l, 1, Ee(o)), l.braceNest = 0, l.inLinked = false, g;
        if (l.braceNest > 0 && (l.currentType === 4 || l.currentType === 5 || l.currentType === 6)) return E(w.UNTERMINATED_CLOSING_BRACE, s(), 0), l.braceNest = 0, ye(o, l);
        if (V = L(o, l)) return g = y(l, 4, Be(o)), C(o), g;
        if (R = d(o, l)) return g = y(l, 5, Ke(o)), C(o), g;
        if (m = I(o, l)) return g = y(l, 6, Xe(o)), C(o), g;
        if (!V && !R && !m) return g = y(l, 12, Qe(o)), E(w.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, g.value), C(o), g;
        break;
      }
    }
    return g;
  }
  function _e(o, l) {
    const { currentType: g } = l;
    let O = null;
    const V = o.currentChar();
    switch ((g === 7 || g === 8 || g === 11 || g === 9) && (V === K || V === ae) && E(w.INVALID_LINKED_FORMAT, s(), 0), V) {
      case "@":
        return o.next(), O = y(l, 7, "@"), l.inLinked = true, O;
      case ".":
        return C(o), o.next(), y(l, 8, ".");
      case ":":
        return C(o), o.next(), y(l, 9, ":");
      default:
        return q(o) ? (O = y(l, 1, Ee(o)), l.braceNest = 0, l.inLinked = false, O) : v(o, l) || W(o, l) ? (C(o), _e(o, l)) : b(o, l) ? (C(o), y(l, 11, Ze(o))) : x(o, l) ? (C(o), V === "{" ? de(o, l) || O : y(l, 10, ze(o))) : (g === 7 && E(w.INVALID_LINKED_FORMAT, s(), 0), l.braceNest = 0, l.inLinked = false, ye(o, l));
    }
  }
  function ye(o, l) {
    let g = { type: 13 };
    if (l.braceNest > 0) return de(o, l) || S(l);
    if (l.inLinked) return _e(o, l) || S(l);
    switch (o.currentChar()) {
      case "{":
        return de(o, l) || S(l);
      case "}":
        return E(w.UNBALANCED_CLOSING_BRACE, s(), 0), o.next(), y(l, 3, "}");
      case "@":
        return _e(o, l) || S(l);
      default: {
        if (q(o)) return g = y(l, 1, Ee(o)), l.braceNest = 0, l.inLinked = false, g;
        if (Z(o)) return y(l, 0, Ge(o));
        break;
      }
    }
    return g;
  }
  function et() {
    const { currentType: o, offset: l, startLoc: g, endLoc: O } = f;
    return f.lastType = o, f.lastOffset = l, f.lastStartLoc = g, f.lastEndLoc = O, f.offset = r(), f.startLoc = s(), a.currentChar() === oe ? y(f, 13) : ye(a, f);
  }
  return { nextToken: et, currentOffset: r, currentPosition: s, context: _ };
}
const ia = "parser", ca = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ua(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "\uFFFD";
    }
  }
}
function fa(e = {}) {
  const t = e.location !== false, { onError: n } = e;
  function a(u, p, L, d, ...I) {
    const v = u.currentPosition();
    if (v.offset += d, v.column += d, n) {
      const b = t ? st(L, v) : null, W = We(p, b, { domain: ia, args: I });
      n(W);
    }
  }
  function r(u, p, L) {
    const d = { type: u };
    return t && (d.start = p, d.end = p, d.loc = { start: L, end: L }), d;
  }
  function s(u, p, L, d) {
    t && (u.end = p, u.loc && (u.loc.end = L));
  }
  function i(u, p) {
    const L = u.context(), d = r(3, L.offset, L.startLoc);
    return d.value = p, s(d, u.currentOffset(), u.currentPosition()), d;
  }
  function c(u, p) {
    const L = u.context(), { lastOffset: d, lastStartLoc: I } = L, v = r(5, d, I);
    return v.index = parseInt(p, 10), u.nextToken(), s(v, u.currentOffset(), u.currentPosition()), v;
  }
  function f(u, p) {
    const L = u.context(), { lastOffset: d, lastStartLoc: I } = L, v = r(4, d, I);
    return v.key = p, u.nextToken(), s(v, u.currentOffset(), u.currentPosition()), v;
  }
  function _(u, p) {
    const L = u.context(), { lastOffset: d, lastStartLoc: I } = L, v = r(9, d, I);
    return v.value = p.replace(ca, ua), u.nextToken(), s(v, u.currentOffset(), u.currentPosition()), v;
  }
  function k(u) {
    const p = u.nextToken(), L = u.context(), { lastOffset: d, lastStartLoc: I } = L, v = r(8, d, I);
    return p.type !== 11 ? (a(u, w.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), v.value = "", s(v, d, I), { nextConsumeToken: p, node: v }) : (p.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ee(p)), v.value = p.value || "", s(v, u.currentOffset(), u.currentPosition()), { node: v });
  }
  function E(u, p) {
    const L = u.context(), d = r(7, L.offset, L.startLoc);
    return d.value = p, s(d, u.currentOffset(), u.currentPosition()), d;
  }
  function y(u) {
    const p = u.context(), L = r(6, p.offset, p.startLoc);
    let d = u.nextToken();
    if (d.type === 8) {
      const I = k(u);
      L.modifier = I.node, d = I.nextConsumeToken || u.nextToken();
    }
    switch (d.type !== 9 && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(d)), d = u.nextToken(), d.type === 2 && (d = u.nextToken()), d.type) {
      case 10:
        d.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(d)), L.key = E(u, d.value || "");
        break;
      case 4:
        d.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(d)), L.key = f(u, d.value || "");
        break;
      case 5:
        d.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(d)), L.key = c(u, d.value || "");
        break;
      case 6:
        d.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(d)), L.key = _(u, d.value || "");
        break;
      default: {
        a(u, w.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
        const I = u.context(), v = r(7, I.offset, I.startLoc);
        return v.value = "", s(v, I.offset, I.startLoc), L.key = v, s(L, I.offset, I.startLoc), { nextConsumeToken: d, node: L };
      }
    }
    return s(L, u.currentOffset(), u.currentPosition()), { node: L };
  }
  function S(u) {
    const p = u.context(), L = p.currentType === 1 ? u.currentOffset() : p.offset, d = p.currentType === 1 ? p.endLoc : p.startLoc, I = r(2, L, d);
    I.items = [];
    let v = null;
    do {
      const x = v || u.nextToken();
      switch (v = null, x.type) {
        case 0:
          x.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(x)), I.items.push(i(u, x.value || ""));
          break;
        case 5:
          x.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(x)), I.items.push(c(u, x.value || ""));
          break;
        case 4:
          x.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(x)), I.items.push(f(u, x.value || ""));
          break;
        case 6:
          x.value == null && a(u, w.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, ee(x)), I.items.push(_(u, x.value || ""));
          break;
        case 7: {
          const q = y(u);
          I.items.push(q.node), v = q.nextConsumeToken || null;
          break;
        }
      }
    } while (p.currentType !== 13 && p.currentType !== 1);
    const b = p.currentType === 1 ? p.lastOffset : u.currentOffset(), W = p.currentType === 1 ? p.lastEndLoc : u.currentPosition();
    return s(I, b, W), I;
  }
  function P(u, p, L, d) {
    const I = u.context();
    let v = d.items.length === 0;
    const b = r(1, p, L);
    b.cases = [], b.cases.push(d);
    do {
      const W = S(u);
      v || (v = W.items.length === 0), b.cases.push(W);
    } while (I.currentType !== 13);
    return v && a(u, w.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), s(b, u.currentOffset(), u.currentPosition()), b;
  }
  function N(u) {
    const p = u.context(), { offset: L, startLoc: d } = p, I = S(u);
    return p.currentType === 13 ? I : P(u, L, d, I);
  }
  function C(u) {
    const p = la(u, G({}, e)), L = p.context(), d = r(0, L.offset, L.startLoc);
    return t && d.loc && (d.loc.source = u), d.body = N(p), e.onCacheKey && (d.cacheKey = e.onCacheKey(u)), L.currentType !== 13 && a(p, w.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, u[L.offset] || ""), s(d, p.currentOffset(), p.currentPosition()), d;
  }
  return { parse: C };
}
function ee(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
}
function ma(e, t = {}) {
  const n = { ast: e, helpers: /* @__PURE__ */ new Set() };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Pt(e, t) {
  for (let n = 0; n < e.length; n++) bt(e[n], t);
}
function bt(e, t) {
  switch (e.type) {
    case 1:
      Pt(e.cases, t), t.helper("plural");
      break;
    case 2:
      Pt(e.items, t);
      break;
    case 6: {
      bt(e.key, t), t.helper("linked"), t.helper("type");
      break;
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function da(e, t = {}) {
  const n = ma(e);
  n.helper("normalize"), e.body && bt(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function _a(e) {
  const t = e.body;
  return t.type === 2 ? Rt(t) : t.cases.forEach((n) => Rt(n)), e;
}
function Rt(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const a = e.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null) break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = ht(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
function pe(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      pe(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++) pe(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++) pe(n[a]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      pe(t.key), t.k = t.key, delete t.key, t.modifier && (pe(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
  }
  delete e.type;
}
function ga(e, t) {
  const { filename: n, breakLineCode: a, needIndent: r } = t, s = t.location !== false, i = { filename: n, code: "", column: 1, line: 1, offset: 0, map: void 0, breakLineCode: a, needIndent: r, indentLevel: 0 };
  s && e.loc && (i.source = e.loc.source);
  const c = () => i;
  function f(N, C) {
    i.code += N;
  }
  function _(N, C = true) {
    const u = C ? a : "";
    f(r ? u + "  ".repeat(N) : u);
  }
  function k(N = true) {
    const C = ++i.indentLevel;
    N && _(C);
  }
  function E(N = true) {
    const C = --i.indentLevel;
    N && _(C);
  }
  function y() {
    _(i.indentLevel);
  }
  return { context: c, push: f, indent: k, deindent: E, newline: y, helper: (N) => `_${N}`, needIndent: () => i.needIndent };
}
function pa(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), be(e, t.key), t.modifier ? (e.push(", "), be(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ha(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n("normalize")}([`), e.indent(a());
  const r = t.items.length;
  for (let s = 0; s < r && (be(e, t.items[s]), s !== r - 1); s++) e.push(", ");
  e.deindent(a()), e.push("])");
}
function ba(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(a());
    const r = t.cases.length;
    for (let s = 0; s < r && (be(e, t.cases[s]), s !== r - 1); s++) e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function Ea(e, t) {
  t.body ? be(e, t.body) : e.push("null");
}
function be(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ea(e, t);
      break;
    case 1:
      ba(e, t);
      break;
    case 2:
      ha(e, t);
      break;
    case 6:
      pa(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const ya = (e, t = {}) => {
  const n = T(t.mode) ? t.mode : "normal", a = T(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], c = ga(e, { filename: a, breakLineCode: r, needIndent: s });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(s), i.length > 0 && (c.push(`const { ${ht(i.map((k) => `${k}: _${k}`), ", ")} } = ctx`), c.newline()), c.push("return "), be(c, e), c.deindent(s), c.push("}"), delete e.helpers;
  const { code: f, map: _ } = c.context();
  return { ast: e, code: f, map: _ ? _.toJSON() : void 0 };
};
function La(e, t = {}) {
  const n = G({}, t), a = !!n.jit, r = !!n.minify, s = n.optimize == null ? true : n.optimize, c = fa(n).parse(e);
  return a ? (s && _a(c), r && pe(c), { ast: c, code: "" }) : (da(c, n), ya(c, n));
}
/*!
* core-base v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
function ka() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fe().__INTLIFY_PROD_DEVTOOLS__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false);
}
function te(e) {
  return F(e) && Et(e) === 0 && (z(e, "b") || z(e, "body"));
}
const cn = ["b", "body"];
function Ia(e) {
  return ie(e, cn);
}
const un = ["c", "cases"];
function va(e) {
  return ie(e, un, []);
}
const fn = ["s", "static"];
function Ta(e) {
  return ie(e, fn);
}
const mn = ["i", "items"];
function Na(e) {
  return ie(e, mn, []);
}
const dn = ["t", "type"];
function Et(e) {
  return ie(e, dn);
}
const _n = ["v", "value"];
function De(e, t) {
  const n = ie(e, _n);
  if (n != null) return n;
  throw ve(t);
}
const gn = ["m", "modifier"];
function Sa(e) {
  return ie(e, gn);
}
const pn = ["k", "key"];
function Ca(e) {
  const t = ie(e, pn);
  if (t) return t;
  throw ve(6);
}
function ie(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (z(e, r) && e[r] != null) return e[r];
  }
  return n;
}
const hn = [...cn, ...un, ...fn, ...mn, ...pn, ...gn, ..._n, ...dn];
function ve(e) {
  return new Error(`unhandled node type: ${e}`);
}
function tt(e) {
  return (n) => Oa(n, e);
}
function Oa(e, t) {
  const n = Ia(t);
  if (n == null) throw ve(0);
  if (Et(n) === 1) {
    const s = va(n);
    return e.plural(s.reduce((i, c) => [...i, At(e, c)], []));
  } else return At(e, n);
}
function At(e, t) {
  const n = Ta(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const a = Na(t).reduce((r, s) => [...r, ot(e, s)], []);
    return e.normalize(a);
  }
}
function ot(e, t) {
  const n = Et(t);
  switch (n) {
    case 3:
      return De(t, n);
    case 9:
      return De(t, n);
    case 4: {
      const a = t;
      if (z(a, "k") && a.k) return e.interpolate(e.named(a.k));
      if (z(a, "key") && a.key) return e.interpolate(e.named(a.key));
      throw ve(n);
    }
    case 5: {
      const a = t;
      if (z(a, "i") && Y(a.i)) return e.interpolate(e.list(a.i));
      if (z(a, "index") && Y(a.index)) return e.interpolate(e.list(a.index));
      throw ve(n);
    }
    case 6: {
      const a = t, r = Sa(a), s = Ca(a);
      return e.linked(ot(e, s), r ? ot(e, r) : void 0, e.type);
    }
    case 7:
      return De(t, n);
    case 8:
      return De(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Pa = (e) => e;
let Fe = M();
function Ra(e, t = {}) {
  let n = false;
  const a = t.onError || ea;
  return t.onError = (r) => {
    n = true, a(r);
  }, { ...La(e, t), detectError: n };
}
function Aa(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && T(e)) {
    D(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || Pa)(e), r = Fe[a];
    if (r) return r;
    const { ast: s, detectError: i } = Ra(e, { ...t, location: false, jit: true }), c = tt(s);
    return i ? c : Fe[a] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const a = Fe[n];
      return a || (Fe[n] = tt(e));
    } else return tt(e);
  }
}
let Te = null;
function Da(e) {
  Te = e;
}
function Fa(e, t, n) {
  Te && Te.emit("i18n:init", { timestamp: Date.now(), i18n: e, version: t, meta: n });
}
const wa = Ma("function:translate");
function Ma(e) {
  return (t) => Te && Te.emit(e, t);
}
const re = { INVALID_ARGUMENT: zn, INVALID_DATE_ARGUMENT: 18, INVALID_ISO_DATE_ARGUMENT: 19, NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21, NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22, NOT_SUPPORT_LOCALE_TYPE: 23 }, Ua = 24;
function se(e) {
  return We(e, null, void 0);
}
function yt(e, t) {
  return t.locale != null ? Dt(t.locale) : Dt(e.locale);
}
let nt;
function Dt(e) {
  if (T(e)) return e;
  if ($(e)) {
    if (e.resolvedOnce && nt != null) return nt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (qn(t)) throw se(re.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return nt = t;
    } else throw se(re.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw se(re.NOT_SUPPORT_LOCALE_TYPE);
}
function Wa(e, t, n) {
  return [.../* @__PURE__ */ new Set([n, ...H(t) ? t : F(t) ? Object.keys(t) : T(t) ? [t] : [n]])];
}
function bn(e, t, n) {
  const a = T(n) ? n : Ne, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(a);
  if (!s) {
    s = [];
    let i = [n];
    for (; H(i); ) i = Ft(s, i, t);
    const c = H(t) || !A(t) ? t : t.default ? t.default : null;
    i = T(c) ? [c] : c, H(i) && Ft(s, i, false), r.__localeChainCache.set(a, s);
  }
  return s;
}
function Ft(e, t, n) {
  let a = true;
  for (let r = 0; r < t.length && D(a); r++) {
    const s = t[r];
    T(s) && (a = $a(e, t[r], n));
  }
  return a;
}
function $a(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const s = r.join("-");
    a = xa(e, s, n), r.splice(-1, 1);
  } while (r.length && a === true);
  return a;
}
function xa(e, t, n) {
  let a = false;
  if (!e.includes(t) && (a = true, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (H(n) || A(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const ce = [];
ce[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
ce[1] = { w: [1], ".": [2], "[": [4], o: [7] };
ce[2] = { w: [2], i: [3, 0], 0: [3, 0] };
ce[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], ".": [2, 1], "[": [4, 1], o: [7, 1] };
ce[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
ce[5] = { "'": [4, 0], o: 8, l: [5, 0] };
ce[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const Va = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ja(e) {
  return Va.test(e);
}
function Ya(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ha(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Ga(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? false : ja(t) ? Ya(t) : "*" + t;
}
function Ba(e) {
  const t = [];
  let n = -1, a = 0, r = 0, s, i, c, f, _, k, E;
  const y = [];
  y[0] = () => {
    i === void 0 ? i = c : i += c;
  }, y[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, y[2] = () => {
    y[0](), r++;
  }, y[3] = () => {
    if (r > 0) r--, a = 4, y[0]();
    else {
      if (r = 0, i === void 0 || (i = Ga(i), i === false)) return false;
      y[1]();
    }
  };
  function S() {
    const P = e[n + 1];
    if (a === 5 && P === "'" || a === 6 && P === '"') return n++, c = "\\" + P, y[0](), true;
  }
  for (; a !== null; ) if (n++, s = e[n], !(s === "\\" && S())) {
    if (f = Ha(s), E = ce[a], _ = E[f] || E.l || 8, _ === 8 || (a = _[0], _[1] !== void 0 && (k = y[_[1]], k && (c = s, k() === false)))) return;
    if (a === 7) return t;
  }
}
const wt = /* @__PURE__ */ new Map();
function Ka(e, t) {
  return F(e) ? e[t] : null;
}
function Xa(e, t) {
  if (!F(e)) return null;
  let n = wt.get(t);
  if (n || (n = Ba(t), n && wt.set(t, n)), !n) return null;
  const a = n.length;
  let r = e, s = 0;
  for (; s < a; ) {
    const i = n[s];
    if (hn.includes(i) && te(r)) return null;
    const c = r[i];
    if (c === void 0 || $(r)) return null;
    r = c, s++;
  }
  return r;
}
const qa = "11.1.3", $e = -1, Ne = "en-US", Mt = "", Ut = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ja() {
  return { upper: (e, t) => t === "text" && T(e) ? e.toUpperCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e, lower: (e, t) => t === "text" && T(e) ? e.toLowerCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e, capitalize: (e, t) => t === "text" && T(e) ? Ut(e) : t === "vnode" && F(e) && "__v_isVNode" in e ? Ut(e.children) : e };
}
let En;
function Qa(e) {
  En = e;
}
let yn;
function Za(e) {
  yn = e;
}
let Ln;
function za(e) {
  Ln = e;
}
let kn = null;
const er = (e) => {
  kn = e;
}, tr = () => kn;
let In = null;
const Wt = (e) => {
  In = e;
}, nr = () => In;
let $t = 0;
function ar(e = {}) {
  const t = $(e.onWarn) ? e.onWarn : Qn, n = T(e.version) ? e.version : qa, a = T(e.locale) || $(e.locale) ? e.locale : Ne, r = $(a) ? Ne : a, s = H(e.fallbackLocale) || A(e.fallbackLocale) || T(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : r, i = A(e.messages) ? e.messages : at(r), c = A(e.datetimeFormats) ? e.datetimeFormats : at(r), f = A(e.numberFormats) ? e.numberFormats : at(r), _ = G(M(), e.modifiers, Ja()), k = e.pluralRules || M(), E = $(e.missing) ? e.missing : null, y = D(e.missingWarn) || he(e.missingWarn) ? e.missingWarn : true, S = D(e.fallbackWarn) || he(e.fallbackWarn) ? e.fallbackWarn : true, P = !!e.fallbackFormat, N = !!e.unresolving, C = $(e.postTranslation) ? e.postTranslation : null, u = A(e.processor) ? e.processor : null, p = D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, L = !!e.escapeParameter, d = $(e.messageCompiler) ? e.messageCompiler : En, I = $(e.messageResolver) ? e.messageResolver : yn || Ka, v = $(e.localeFallbacker) ? e.localeFallbacker : Ln || Wa, b = F(e.fallbackContext) ? e.fallbackContext : void 0, W = e, x = F(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), q = F(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), Z = F(W.__meta) ? W.__meta : {};
  $t++;
  const B = { version: n, cid: $t, locale: a, fallbackLocale: s, messages: i, modifiers: _, pluralRules: k, missing: E, missingWarn: y, fallbackWarn: S, fallbackFormat: P, unresolving: N, postTranslation: C, processor: u, warnHtmlMessage: p, escapeParameter: L, messageCompiler: d, messageResolver: I, localeFallbacker: v, fallbackContext: b, onWarn: t, __meta: Z };
  return B.datetimeFormats = c, B.numberFormats = f, B.__datetimeFormatters = x, B.__numberFormatters = q, __INTLIFY_PROD_DEVTOOLS__ && Fa(B, n, Z), B;
}
const at = (e) => ({ [e]: M() });
function Lt(e, t, n, a, r) {
  const { missing: s, onWarn: i } = e;
  if (s !== null) {
    const c = s(e, n, t, r);
    return T(c) ? c : t;
  } else return t;
}
function ke(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function rr(e, t) {
  return e === t ? false : e.split("-")[0] === t.split("-")[0];
}
function sr(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return false;
  for (let a = n + 1; a < t.length; a++) if (rr(e, t[a])) return true;
  return false;
}
function xt(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: c } = e, [f, _, k, E] = lt(...t), y = D(k.missingWarn) ? k.missingWarn : e.missingWarn;
  D(k.fallbackWarn) ? k.fallbackWarn : e.fallbackWarn;
  const S = !!k.part, P = yt(e, k), N = i(e, r, P);
  if (!T(f) || f === "") return new Intl.DateTimeFormat(P, E).format(_);
  let C = {}, u, p = null;
  const L = "datetime format";
  for (let v = 0; v < N.length && (u = N[v], C = n[u] || {}, p = C[f], !A(p)); v++) Lt(e, f, u, y, L);
  if (!A(p) || !T(u)) return a ? $e : f;
  let d = `${u}__${f}`;
  Ue(E) || (d = `${d}__${JSON.stringify(E)}`);
  let I = c.get(d);
  return I || (I = new Intl.DateTimeFormat(u, G({}, p, E)), c.set(d, I)), S ? I.formatToParts(_) : I.format(_);
}
const vn = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function lt(...e) {
  const [t, n, a, r] = e, s = M();
  let i = M(), c;
  if (T(t)) {
    const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!f) throw se(re.INVALID_ISO_DATE_ARGUMENT);
    const _ = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
    c = new Date(_);
    try {
      c.toISOString();
    } catch {
      throw se(re.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Bn(t)) {
    if (isNaN(t.getTime())) throw se(re.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (Y(t)) c = t;
  else throw se(re.INVALID_ARGUMENT);
  return T(n) ? s.key = n : A(n) && Object.keys(n).forEach((f) => {
    vn.includes(f) ? i[f] = n[f] : s[f] = n[f];
  }), T(a) ? s.locale = a : A(a) && (i = a), A(r) && (i = r), [s.key || "", c, s, i];
}
function Vt(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__datetimeFormatters.has(s) && a.__datetimeFormatters.delete(s);
  }
}
function jt(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: c } = e, [f, _, k, E] = it(...t), y = D(k.missingWarn) ? k.missingWarn : e.missingWarn;
  D(k.fallbackWarn) ? k.fallbackWarn : e.fallbackWarn;
  const S = !!k.part, P = yt(e, k), N = i(e, r, P);
  if (!T(f) || f === "") return new Intl.NumberFormat(P, E).format(_);
  let C = {}, u, p = null;
  const L = "number format";
  for (let v = 0; v < N.length && (u = N[v], C = n[u] || {}, p = C[f], !A(p)); v++) Lt(e, f, u, y, L);
  if (!A(p) || !T(u)) return a ? $e : f;
  let d = `${u}__${f}`;
  Ue(E) || (d = `${d}__${JSON.stringify(E)}`);
  let I = c.get(d);
  return I || (I = new Intl.NumberFormat(u, G({}, p, E)), c.set(d, I)), S ? I.formatToParts(_) : I.format(_);
}
const Tn = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function it(...e) {
  const [t, n, a, r] = e, s = M();
  let i = M();
  if (!Y(t)) throw se(re.INVALID_ARGUMENT);
  const c = t;
  return T(n) ? s.key = n : A(n) && Object.keys(n).forEach((f) => {
    Tn.includes(f) ? i[f] = n[f] : s[f] = n[f];
  }), T(a) ? s.locale = a : A(a) && (i = a), A(r) && (i = r), [s.key || "", c, s, i];
}
function Yt(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__numberFormatters.has(s) && a.__numberFormatters.delete(s);
  }
}
const or = (e) => e, lr = (e) => "", ir = "text", cr = (e) => e.length === 0 ? "" : ht(e), ur = Jn;
function Ht(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function fr(e) {
  const t = Y(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Y(e.named.count) || Y(e.named.n)) ? Y(e.named.count) ? e.named.count : Y(e.named.n) ? e.named.n : t : t;
}
function mr(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function dr(e = {}) {
  const t = e.locale, n = fr(e), a = F(e.pluralRules) && T(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : Ht, r = F(e.pluralRules) && T(t) && $(e.pluralRules[t]) ? Ht : void 0, s = (u) => u[a(n, u.length, r)], i = e.list || [], c = (u) => i[u], f = e.named || M();
  Y(e.pluralIndex) && mr(n, f);
  const _ = (u) => f[u];
  function k(u, p) {
    const L = $(e.messages) ? e.messages(u, !!p) : F(e.messages) ? e.messages[u] : false;
    return L || (e.parent ? e.parent.message(u) : lr);
  }
  const E = (u) => e.modifiers ? e.modifiers[u] : or, y = A(e.processor) && $(e.processor.normalize) ? e.processor.normalize : cr, S = A(e.processor) && $(e.processor.interpolate) ? e.processor.interpolate : ur, P = A(e.processor) && T(e.processor.type) ? e.processor.type : ir, C = { list: c, named: _, plural: s, linked: (u, ...p) => {
    const [L, d] = p;
    let I = "text", v = "";
    p.length === 1 ? F(L) ? (v = L.modifier || v, I = L.type || I) : T(L) && (v = L || v) : p.length === 2 && (T(L) && (v = L || v), T(d) && (I = d || I));
    const b = k(u, true)(C), W = I === "vnode" && H(b) && v ? b[0] : b;
    return v ? E(v)(W, I) : W;
  }, message: k, type: P, interpolate: S, normalize: y, values: G(M(), i, f) };
  return C;
}
const Gt = () => "", Q = (e) => $(e);
function Bt(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: s, fallbackLocale: i, messages: c } = e, [f, _] = ct(...t), k = D(_.missingWarn) ? _.missingWarn : e.missingWarn, E = D(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, y = D(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, S = !!_.resolvedMessage, P = T(_.default) || D(_.default) ? D(_.default) ? s ? f : () => f : _.default : n ? s ? f : () => f : null, N = n || P != null && (T(P) || $(P)), C = yt(e, _);
  y && _r(_);
  let [u, p, L] = S ? [f, C, c[C] || M()] : Nn(e, f, C, i, E, k), d = u, I = f;
  if (!S && !(T(d) || te(d) || Q(d)) && N && (d = P, I = d), !S && (!(T(d) || te(d) || Q(d)) || !T(p))) return r ? $e : f;
  let v = false;
  const b = () => {
    v = true;
  }, W = Q(d) ? d : Sn(e, f, p, d, I, b);
  if (v) return d;
  const x = hr(e, p, L, _), q = dr(x), Z = gr(e, W, q), B = a ? a(Z, f) : Z;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const me = { timestamp: Date.now(), key: T(f) ? f : Q(d) ? d.key : "", locale: p || (Q(d) ? d.locale : ""), format: T(d) ? d : Q(d) ? d.source : "", message: B };
    me.meta = G({}, e.__meta, tr() || {}), wa(me);
  }
  return B;
}
function _r(e) {
  H(e.list) ? e.list = e.list.map((t) => T(t) ? Ct(t) : t) : F(e.named) && Object.keys(e.named).forEach((t) => {
    T(e.named[t]) && (e.named[t] = Ct(e.named[t]));
  });
}
function Nn(e, t, n, a, r, s) {
  const { messages: i, onWarn: c, messageResolver: f, localeFallbacker: _ } = e, k = _(e, a, n);
  let E = M(), y, S = null;
  const P = "translate";
  for (let N = 0; N < k.length && (y = k[N], E = i[y] || M(), (S = f(E, t)) === null && (S = E[t]), !(T(S) || te(S) || Q(S))); N++) if (!sr(y, k)) {
    const C = Lt(e, t, y, s, P);
    C !== t && (S = C);
  }
  return [S, y, E];
}
function Sn(e, t, n, a, r, s) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (Q(a)) {
    const _ = a;
    return _.locale = _.locale || n, _.key = _.key || t, _;
  }
  if (i == null) {
    const _ = () => a;
    return _.locale = n, _.key = t, _;
  }
  const f = i(a, pr(e, n, r, a, c, s));
  return f.locale = n, f.key = t, f.source = a, f;
}
function gr(e, t, n) {
  return t(n);
}
function ct(...e) {
  const [t, n, a] = e, r = M();
  if (!T(t) && !Y(t) && !Q(t) && !te(t)) throw se(re.INVALID_ARGUMENT);
  const s = Y(t) ? String(t) : (Q(t), t);
  return Y(n) ? r.plural = n : T(n) ? r.default = n : A(n) && !Ue(n) ? r.named = n : H(n) && (r.list = n), Y(a) ? r.plural = a : T(a) ? r.default = a : A(a) && G(r, a), [s, r];
}
function pr(e, t, n, a, r, s) {
  return { locale: t, key: n, warnHtmlMessage: r, onError: (i) => {
    throw s && s(i), i;
  }, onCacheKey: (i) => Hn(t, n, i) };
}
function hr(e, t, n, a) {
  const { modifiers: r, pluralRules: s, messageResolver: i, fallbackLocale: c, fallbackWarn: f, missingWarn: _, fallbackContext: k } = e, y = { locale: t, modifiers: r, pluralRules: s, messages: (S, P) => {
    let N = i(n, S);
    if (N == null && (k || P)) {
      const [, , C] = Nn(k || e, S, t, c, f, _);
      N = i(C, S);
    }
    if (T(N) || te(N)) {
      let C = false;
      const p = Sn(e, S, t, N, S, () => {
        C = true;
      });
      return C ? Gt : p;
    } else return Q(N) ? N : Gt;
  } };
  return e.processor && (y.processor = e.processor), a.list && (y.list = a.list), a.named && (y.named = a.named), Y(a.plural) && (y.pluralIndex = a.plural), y;
}
ka();
/*!
* vue-i18n v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
const br = "11.1.3";
function Er() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (fe().__VUE_I18N_FULL_INSTALL__ = true), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (fe().__VUE_I18N_LEGACY_API__ = true), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fe().__INTLIFY_PROD_DEVTOOLS__ = false);
}
const X = { UNEXPECTED_RETURN_TYPE: Ua, INVALID_ARGUMENT: 25, MUST_BE_CALL_SETUP_TOP: 26, NOT_INSTALLED: 27, REQUIRED_VALUE: 28, INVALID_VALUE: 29, NOT_INSTALLED_WITH_PROVIDE: 31, UNEXPECTED_ERROR: 32 };
function J(e, ...t) {
  return We(e, null, void 0);
}
const ut = le("__translateVNode"), ft = le("__datetimeParts"), mt = le("__numberParts"), Cn = le("__setPluralRules"), On = le("__injectWithOption"), dt = le("__dispose");
function Se(e) {
  if (!F(e) || te(e)) return e;
  for (const t in e) if (z(e, t)) if (!t.includes(".")) F(e[t]) && Se(e[t]);
  else {
    const n = t.split("."), a = n.length - 1;
    let r = e, s = false;
    for (let i = 0; i < a; i++) {
      if (n[i] === "__proto__") throw new Error(`unsafe key: ${n[i]}`);
      if (n[i] in r || (r[n[i]] = M()), !F(r[n[i]])) {
        s = true;
        break;
      }
      r = r[n[i]];
    }
    if (s || (te(r) ? hn.includes(n[a]) || delete e[t] : (r[n[a]] = e[t], delete e[t])), !te(r)) {
      const i = r[n[a]];
      F(i) && Se(i);
    }
  }
  return e;
}
function kt(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: s } = t, i = A(n) ? n : H(a) ? M() : { [e]: M() };
  if (H(a) && a.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: f, resource: _ } = c;
      f ? (i[f] = i[f] || M(), we(_, i[f])) : we(_, i);
    } else T(c) && we(JSON.parse(c), i);
  }), r == null && s) for (const c in i) z(i, c) && Se(i[c]);
  return i;
}
function Pn(e) {
  return e.type;
}
function Rn(e, t, n) {
  let a = F(t.messages) ? t.messages : M();
  "__i18nGlobal" in n && (a = kt(e.locale.value, { messages: a, __i18n: n.__i18nGlobal }));
  const r = Object.keys(a);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, a[s]);
  });
  {
    if (F(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (F(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Kt(e) {
  return jn(Yn, null, e, 0);
}
const Xt = "__INTLIFY_META__", qt = () => [], yr = () => false;
let Jt = 0;
function Qt(e) {
  return (t, n, a, r) => e(n, a, Ie() || void 0, r);
}
const Lr = () => {
  const e = Ie();
  let t = null;
  return e && (t = Pn(e)[Xt]) ? { [Xt]: t } : null;
};
function It(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, r = e.flatJson, s = Me ? Mn : Un;
  let i = D(e.inheritLocale) ? e.inheritLocale : true;
  const c = s(t && i ? t.locale.value : T(e.locale) ? e.locale : Ne), f = s(t && i ? t.fallbackLocale.value : T(e.fallbackLocale) || H(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : c.value), _ = s(kt(c.value, e)), k = s(A(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), E = s(A(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let y = t ? t.missingWarn : D(e.missingWarn) || he(e.missingWarn) ? e.missingWarn : true, S = t ? t.fallbackWarn : D(e.fallbackWarn) || he(e.fallbackWarn) ? e.fallbackWarn : true, P = t ? t.fallbackRoot : D(e.fallbackRoot) ? e.fallbackRoot : true, N = !!e.fallbackFormat, C = $(e.missing) ? e.missing : null, u = $(e.missing) ? Qt(e.missing) : null, p = $(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, d = !!e.escapeParameter;
  const I = t ? t.modifiers : A(e.modifiers) ? e.modifiers : {};
  let v = e.pluralRules || t && t.pluralRules, b;
  b = (() => {
    a && Wt(null);
    const m = { version: br, locale: c.value, fallbackLocale: f.value, messages: _.value, modifiers: I, pluralRules: v, missing: u === null ? void 0 : u, missingWarn: y, fallbackWarn: S, fallbackFormat: N, unresolving: true, postTranslation: p === null ? void 0 : p, warnHtmlMessage: L, escapeParameter: d, messageResolver: e.messageResolver, messageCompiler: e.messageCompiler, __meta: { framework: "vue" } };
    m.datetimeFormats = k.value, m.numberFormats = E.value, m.__datetimeFormatters = A(b) ? b.__datetimeFormatters : void 0, m.__numberFormatters = A(b) ? b.__numberFormatters : void 0;
    const h = ar(m);
    return a && Wt(h), h;
  })(), ke(b, c.value, f.value);
  function x() {
    return [c.value, f.value, _.value, k.value, E.value];
  }
  const q = Le({ get: () => c.value, set: (m) => {
    b.locale = m, c.value = m;
  } }), Z = Le({ get: () => f.value, set: (m) => {
    b.fallbackLocale = m, f.value = m, ke(b, c.value, m);
  } }), B = Le(() => _.value), me = Le(() => k.value), xe = Le(() => E.value);
  function Ve() {
    return $(p) ? p : null;
  }
  function je(m) {
    p = m, b.postTranslation = m;
  }
  function Ye() {
    return C;
  }
  function He(m) {
    m !== null && (u = Qt(m)), C = m, b.missing = u;
  }
  const ne = (m, h, U, j, ue, Re) => {
    x();
    let ge;
    try {
      __INTLIFY_PROD_DEVTOOLS__, a || (b.fallbackContext = t ? nr() : void 0), ge = m(b);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, a || (b.fallbackContext = void 0);
    }
    if (U !== "translate exists" && Y(ge) && ge === $e || U === "translate exists" && !ge) {
      const [Fn, Ps] = h();
      return t && P ? j(t) : ue(Fn);
    } else {
      if (Re(ge)) return ge;
      throw J(X.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ce(...m) {
    return ne((h) => Reflect.apply(Bt, null, [h, ...m]), () => ct(...m), "translate", (h) => Reflect.apply(h.t, h, [...m]), (h) => h, (h) => T(h));
  }
  function Oe(...m) {
    const [h, U, j] = m;
    if (j && !F(j)) throw J(X.INVALID_ARGUMENT);
    return Ce(h, U, G({ resolvedMessage: true }, j || {}));
  }
  function Ge(...m) {
    return ne((h) => Reflect.apply(xt, null, [h, ...m]), () => lt(...m), "datetime format", (h) => Reflect.apply(h.d, h, [...m]), () => Mt, (h) => T(h));
  }
  function Be(...m) {
    return ne((h) => Reflect.apply(jt, null, [h, ...m]), () => it(...m), "number format", (h) => Reflect.apply(h.n, h, [...m]), () => Mt, (h) => T(h));
  }
  function Ke(m) {
    return m.map((h) => T(h) || Y(h) || D(h) ? Kt(String(h)) : h);
  }
  const Xe = { normalize: Ke, interpolate: (m) => m, type: "vnode" };
  function qe(...m) {
    return ne((h) => {
      let U;
      const j = h;
      try {
        j.processor = Xe, U = Reflect.apply(Bt, null, [j, ...m]);
      } finally {
        j.processor = null;
      }
      return U;
    }, () => ct(...m), "translate", (h) => h[ut](...m), (h) => [Kt(h)], (h) => H(h));
  }
  function Pe(...m) {
    return ne((h) => Reflect.apply(jt, null, [h, ...m]), () => it(...m), "number format", (h) => h[mt](...m), qt, (h) => T(h) || H(h));
  }
  function Je(...m) {
    return ne((h) => Reflect.apply(xt, null, [h, ...m]), () => lt(...m), "datetime format", (h) => h[ft](...m), qt, (h) => T(h) || H(h));
  }
  function Qe(m) {
    v = m, b.pluralRules = v;
  }
  function Ze(m, h) {
    return ne(() => {
      if (!m) return false;
      const U = T(h) ? h : c.value, j = de(U), ue = b.messageResolver(j, m);
      return te(ue) || Q(ue) || T(ue);
    }, () => [m], "translate exists", (U) => Reflect.apply(U.te, U, [m, h]), yr, (U) => D(U));
  }
  function ze(m) {
    let h = null;
    const U = bn(b, f.value, c.value);
    for (let j = 0; j < U.length; j++) {
      const ue = _.value[U[j]] || {}, Re = b.messageResolver(ue, m);
      if (Re != null) {
        h = Re;
        break;
      }
    }
    return h;
  }
  function Ee(m) {
    const h = ze(m);
    return h ?? (t ? t.tm(m) || {} : {});
  }
  function de(m) {
    return _.value[m] || {};
  }
  function _e(m, h) {
    if (r) {
      const U = { [m]: h };
      for (const j in U) z(U, j) && Se(U[j]);
      h = U[m];
    }
    _.value[m] = h, b.messages = _.value;
  }
  function ye(m, h) {
    _.value[m] = _.value[m] || {};
    const U = { [m]: h };
    if (r) for (const j in U) z(U, j) && Se(U[j]);
    h = U[m], we(h, _.value[m]), b.messages = _.value;
  }
  function et(m) {
    return k.value[m] || {};
  }
  function o(m, h) {
    k.value[m] = h, b.datetimeFormats = k.value, Vt(b, m, h);
  }
  function l(m, h) {
    k.value[m] = G(k.value[m] || {}, h), b.datetimeFormats = k.value, Vt(b, m, h);
  }
  function g(m) {
    return E.value[m] || {};
  }
  function O(m, h) {
    E.value[m] = h, b.numberFormats = E.value, Yt(b, m, h);
  }
  function V(m, h) {
    E.value[m] = G(E.value[m] || {}, h), b.numberFormats = E.value, Yt(b, m, h);
  }
  Jt++, t && Me && (rt(t.locale, (m) => {
    i && (c.value = m, b.locale = m, ke(b, c.value, f.value));
  }), rt(t.fallbackLocale, (m) => {
    i && (f.value = m, b.fallbackLocale = m, ke(b, c.value, f.value));
  }));
  const R = { id: Jt, locale: q, fallbackLocale: Z, get inheritLocale() {
    return i;
  }, set inheritLocale(m) {
    i = m, m && t && (c.value = t.locale.value, f.value = t.fallbackLocale.value, ke(b, c.value, f.value));
  }, get availableLocales() {
    return Object.keys(_.value).sort();
  }, messages: B, get modifiers() {
    return I;
  }, get pluralRules() {
    return v || {};
  }, get isGlobal() {
    return a;
  }, get missingWarn() {
    return y;
  }, set missingWarn(m) {
    y = m, b.missingWarn = y;
  }, get fallbackWarn() {
    return S;
  }, set fallbackWarn(m) {
    S = m, b.fallbackWarn = S;
  }, get fallbackRoot() {
    return P;
  }, set fallbackRoot(m) {
    P = m;
  }, get fallbackFormat() {
    return N;
  }, set fallbackFormat(m) {
    N = m, b.fallbackFormat = N;
  }, get warnHtmlMessage() {
    return L;
  }, set warnHtmlMessage(m) {
    L = m, b.warnHtmlMessage = m;
  }, get escapeParameter() {
    return d;
  }, set escapeParameter(m) {
    d = m, b.escapeParameter = m;
  }, t: Ce, getLocaleMessage: de, setLocaleMessage: _e, mergeLocaleMessage: ye, getPostTranslationHandler: Ve, setPostTranslationHandler: je, getMissingHandler: Ye, setMissingHandler: He, [Cn]: Qe };
  return R.datetimeFormats = me, R.numberFormats = xe, R.rt = Oe, R.te = Ze, R.tm = Ee, R.d = Ge, R.n = Be, R.getDateTimeFormat = et, R.setDateTimeFormat = o, R.mergeDateTimeFormat = l, R.getNumberFormat = g, R.setNumberFormat = O, R.mergeNumberFormat = V, R[On] = n, R[ut] = qe, R[ft] = Je, R[mt] = Pe, R;
}
function kr(e) {
  const t = T(e.locale) ? e.locale : Ne, n = T(e.fallbackLocale) || H(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : t, a = $(e.missing) ? e.missing : void 0, r = D(e.silentTranslationWarn) || he(e.silentTranslationWarn) ? !e.silentTranslationWarn : true, s = D(e.silentFallbackWarn) || he(e.silentFallbackWarn) ? !e.silentFallbackWarn : true, i = D(e.fallbackRoot) ? e.fallbackRoot : true, c = !!e.formatFallbackMessages, f = A(e.modifiers) ? e.modifiers : {}, _ = e.pluralizationRules, k = $(e.postTranslation) ? e.postTranslation : void 0, E = T(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : true, y = !!e.escapeParameterHtml, S = D(e.sync) ? e.sync : true;
  let P = e.messages;
  if (A(e.sharedMessages)) {
    const I = e.sharedMessages;
    P = Object.keys(I).reduce((b, W) => {
      const x = b[W] || (b[W] = {});
      return G(x, I[W]), b;
    }, P || {});
  }
  const { __i18n: N, __root: C, __injectWithOption: u } = e, p = e.datetimeFormats, L = e.numberFormats, d = e.flatJson;
  return { locale: t, fallbackLocale: n, messages: P, flatJson: d, datetimeFormats: p, numberFormats: L, missing: a, missingWarn: r, fallbackWarn: s, fallbackRoot: i, fallbackFormat: c, modifiers: f, pluralRules: _, postTranslation: k, warnHtmlMessage: E, escapeParameter: y, messageResolver: e.messageResolver, inheritLocale: S, __i18n: N, __root: C, __injectWithOption: u };
}
function _t(e = {}) {
  const t = It(kr(e)), { __extender: n } = e, a = { id: t.id, get locale() {
    return t.locale.value;
  }, set locale(r) {
    t.locale.value = r;
  }, get fallbackLocale() {
    return t.fallbackLocale.value;
  }, set fallbackLocale(r) {
    t.fallbackLocale.value = r;
  }, get messages() {
    return t.messages.value;
  }, get datetimeFormats() {
    return t.datetimeFormats.value;
  }, get numberFormats() {
    return t.numberFormats.value;
  }, get availableLocales() {
    return t.availableLocales;
  }, get missing() {
    return t.getMissingHandler();
  }, set missing(r) {
    t.setMissingHandler(r);
  }, get silentTranslationWarn() {
    return D(t.missingWarn) ? !t.missingWarn : t.missingWarn;
  }, set silentTranslationWarn(r) {
    t.missingWarn = D(r) ? !r : r;
  }, get silentFallbackWarn() {
    return D(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
  }, set silentFallbackWarn(r) {
    t.fallbackWarn = D(r) ? !r : r;
  }, get modifiers() {
    return t.modifiers;
  }, get formatFallbackMessages() {
    return t.fallbackFormat;
  }, set formatFallbackMessages(r) {
    t.fallbackFormat = r;
  }, get postTranslation() {
    return t.getPostTranslationHandler();
  }, set postTranslation(r) {
    t.setPostTranslationHandler(r);
  }, get sync() {
    return t.inheritLocale;
  }, set sync(r) {
    t.inheritLocale = r;
  }, get warnHtmlInMessage() {
    return t.warnHtmlMessage ? "warn" : "off";
  }, set warnHtmlInMessage(r) {
    t.warnHtmlMessage = r !== "off";
  }, get escapeParameterHtml() {
    return t.escapeParameter;
  }, set escapeParameterHtml(r) {
    t.escapeParameter = r;
  }, get pluralizationRules() {
    return t.pluralRules || {};
  }, __composer: t, t(...r) {
    return Reflect.apply(t.t, t, [...r]);
  }, rt(...r) {
    return Reflect.apply(t.rt, t, [...r]);
  }, te(r, s) {
    return t.te(r, s);
  }, tm(r) {
    return t.tm(r);
  }, getLocaleMessage(r) {
    return t.getLocaleMessage(r);
  }, setLocaleMessage(r, s) {
    t.setLocaleMessage(r, s);
  }, mergeLocaleMessage(r, s) {
    t.mergeLocaleMessage(r, s);
  }, d(...r) {
    return Reflect.apply(t.d, t, [...r]);
  }, getDateTimeFormat(r) {
    return t.getDateTimeFormat(r);
  }, setDateTimeFormat(r, s) {
    t.setDateTimeFormat(r, s);
  }, mergeDateTimeFormat(r, s) {
    t.mergeDateTimeFormat(r, s);
  }, n(...r) {
    return Reflect.apply(t.n, t, [...r]);
  }, getNumberFormat(r) {
    return t.getNumberFormat(r);
  }, setNumberFormat(r, s) {
    t.setNumberFormat(r, s);
  }, mergeNumberFormat(r, s) {
    t.mergeNumberFormat(r, s);
  } };
  return a.__extender = n, a;
}
function Ir(e, t, n) {
  return { beforeCreate() {
    const a = Ie();
    if (!a) throw J(X.UNEXPECTED_ERROR);
    const r = this.$options;
    if (r.i18n) {
      const s = r.i18n;
      if (r.__i18n && (s.__i18n = r.__i18n), s.__root = t, this === this.$root) this.$i18n = Zt(e, s);
      else {
        s.__injectWithOption = true, s.__extender = n.__vueI18nExtend, this.$i18n = _t(s);
        const i = this.$i18n;
        i.__extender && (i.__disposer = i.__extender(this.$i18n));
      }
    } else if (r.__i18n) if (this === this.$root) this.$i18n = Zt(e, r);
    else {
      this.$i18n = _t({ __i18n: r.__i18n, __injectWithOption: true, __extender: n.__vueI18nExtend, __root: t });
      const s = this.$i18n;
      s.__extender && (s.__disposer = s.__extender(this.$i18n));
    }
    else this.$i18n = e;
    r.__i18nGlobal && Rn(t, r, r), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$te = (s, i) => this.$i18n.te(s, i), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(a, this.$i18n);
  }, mounted() {
  }, unmounted() {
    const a = Ie();
    if (!a) throw J(X.UNEXPECTED_ERROR);
    const r = this.$i18n;
    delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), n.__deleteInstance(a), delete this.$i18n;
  } };
}
function Zt(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Cn](t.pluralizationRules || e.pluralizationRules);
  const n = kt(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return Object.keys(n).forEach((a) => e.mergeLocaleMessage(a, n[a])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((a) => e.mergeDateTimeFormat(a, t.datetimeFormats[a])), t.numberFormats && Object.keys(t.numberFormats).forEach((a) => e.mergeNumberFormat(a, t.numberFormats[a])), e;
}
const vt = { tag: { type: [String, Object] }, locale: { type: String }, scope: { type: String, validator: (e) => e === "parent" || e === "global", default: "parent" }, i18n: { type: Object } };
function vr({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [...a, ...r.type === on ? r.children : [r]], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, M());
}
function An() {
  return on;
}
const Tr = gt({ name: "i18n-t", props: G({ keypath: { type: String, required: true }, plural: { type: [Number, String], validator: (e) => Y(e) || !isNaN(e) } }, vt), setup(e, t) {
  const { slots: n, attrs: a } = t, r = e.i18n || Tt({ useScope: e.scope, __useComponent: true });
  return () => {
    const s = Object.keys(n).filter((E) => E !== "_"), i = M();
    e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = T(e.plural) ? +e.plural : e.plural);
    const c = vr(t, s), f = r[ut](e.keypath, c, i), _ = G(M(), a), k = T(e.tag) || F(e.tag) ? e.tag : An();
    return sn(k, _, f);
  };
} }), zt = Tr;
function Nr(e) {
  return H(e) && !T(e[0]);
}
function Dn(e, t, n, a) {
  const { slots: r, attrs: s } = t;
  return () => {
    const i = { part: true };
    let c = M();
    e.locale && (i.locale = e.locale), T(e.format) ? i.key = e.format : F(e.format) && (T(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((y, S) => n.includes(S) ? G(M(), y, { [S]: e.format[S] }) : y, M()));
    const f = a(e.value, i, c);
    let _ = [i.key];
    H(f) ? _ = f.map((y, S) => {
      const P = r[y.type], N = P ? P({ [y.type]: y.value, index: S, parts: f }) : [y.value];
      return Nr(N) && (N[0].key = `${y.type}-${S}`), N;
    }) : T(f) && (_ = [f]);
    const k = G(M(), s), E = T(e.tag) || F(e.tag) ? e.tag : An();
    return sn(E, k, _);
  };
}
const Sr = gt({ name: "i18n-n", props: G({ value: { type: Number, required: true }, format: { type: [String, Object] } }, vt), setup(e, t) {
  const n = e.i18n || Tt({ useScope: e.scope, __useComponent: true });
  return Dn(e, t, Tn, (...a) => n[mt](...a));
} }), en = Sr;
function Cr(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const a = n.__getInstance(t);
    return a != null ? a.__composer : e.global.__composer;
  }
}
function Or(e) {
  const t = (i) => {
    const { instance: c, value: f } = i;
    if (!c || !c.$) throw J(X.UNEXPECTED_ERROR);
    const _ = Cr(e, c.$), k = tn(f);
    return [Reflect.apply(_.t, _, [...nn(k)]), _];
  };
  return { created: (i, c) => {
    const [f, _] = t(c);
    Me && e.global === _ && (i.__i18nWatcher = rt(_.locale, () => {
      c.instance && c.instance.$forceUpdate();
    })), i.__composer = _, i.textContent = f;
  }, unmounted: (i) => {
    Me && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
  }, beforeUpdate: (i, { value: c }) => {
    if (i.__composer) {
      const f = i.__composer, _ = tn(c);
      i.textContent = Reflect.apply(f.t, f, [...nn(_)]);
    }
  }, getSSRProps: (i) => {
    const [c] = t(i);
    return { textContent: c };
  } };
}
function tn(e) {
  if (T(e)) return { path: e };
  if (A(e)) {
    if (!("path" in e)) throw J(X.REQUIRED_VALUE, "path");
    return e;
  } else throw J(X.INVALID_VALUE);
}
function nn(e) {
  const { path: t, locale: n, args: a, choice: r, plural: s } = e, i = {}, c = a || {};
  return T(n) && (i.locale = n), Y(r) && (i.plural = r), Y(s) && (i.plural = s), [t, c, i];
}
function Pr(e, t, ...n) {
  const a = A(n[0]) ? n[0] : {};
  (D(a.globalInstall) ? a.globalInstall : true) && ([zt.name, "I18nT"].forEach((s) => e.component(s, zt)), [en.name, "I18nN"].forEach((s) => e.component(s, en)), [rn.name, "I18nD"].forEach((s) => e.component(s, rn))), e.directive("t", Or(t));
}
const Rr = le("global-vue-i18n");
function Ar(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && D(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = D(e.globalInjection) ? e.globalInjection : true, a = /* @__PURE__ */ new Map(), [r, s] = Dr(e, t), i = le("");
  function c(E) {
    return a.get(E) || null;
  }
  function f(E, y) {
    a.set(E, y);
  }
  function _(E) {
    a.delete(E);
  }
  const k = { get mode() {
    return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
  }, async install(E, ...y) {
    if (E.__VUE_I18N_SYMBOL__ = i, E.provide(E.__VUE_I18N_SYMBOL__, k), A(y[0])) {
      const N = y[0];
      k.__composerExtend = N.__composerExtend, k.__vueI18nExtend = N.__vueI18nExtend;
    }
    let S = null;
    !t && n && (S = Vr(E, k.global)), __VUE_I18N_FULL_INSTALL__ && Pr(E, k, ...y), __VUE_I18N_LEGACY_API__ && t && E.mixin(Ir(s, s.__composer, k));
    const P = E.unmount;
    E.unmount = () => {
      S && S(), k.dispose(), P();
    };
  }, get global() {
    return s;
  }, dispose() {
    r.stop();
  }, __instances: a, __getInstance: c, __setInstance: f, __deleteInstance: _ };
  return k;
}
function Tt(e = {}) {
  const t = Ie();
  if (t == null) throw J(X.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw J(X.NOT_INSTALLED);
  const n = Fr(t), a = Mr(n), r = Pn(t), s = wr(e, r);
  if (s === "global") return Rn(a, e, r), a;
  if (s === "parent") {
    let f = Ur(n, t, e.__useComponent);
    return f == null && (f = a), f;
  }
  const i = n;
  let c = i.__getInstance(t);
  if (c == null) {
    const f = G({}, e);
    "__i18n" in r && (f.__i18n = r.__i18n), a && (f.__root = a), c = It(f), i.__composerExtend && (c[dt] = i.__composerExtend(c)), $r(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function Dr(e, t) {
  const n = wn(), a = __VUE_I18N_LEGACY_API__ && t ? n.run(() => _t(e)) : n.run(() => It(e));
  if (a == null) throw J(X.UNEXPECTED_ERROR);
  return [n, a];
}
function Fr(e) {
  const t = $n(e.isCE ? Rr : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw J(e.isCE ? X.NOT_INSTALLED_WITH_PROVIDE : X.UNEXPECTED_ERROR);
  return t;
}
function wr(e, t) {
  return Ue(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Mr(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ur(e, t, n = false) {
  let a = null;
  const r = t.root;
  let s = Wr(t, n);
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition") a = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(s);
      c != null && (a = c.__composer, n && a && !a[On] && (a = null));
    }
    if (a != null || r === s) break;
    s = s.parent;
  }
  return a;
}
function Wr(e, t = false) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function $r(e, t, n) {
  xn(() => {
  }, t), Vn(() => {
    const a = n;
    e.__deleteInstance(t);
    const r = a[dt];
    r && (r(), delete a[dt]);
  }, t);
}
const xr = ["locale", "fallbackLocale", "availableLocales"], an = ["t", "rt", "d", "n", "tm", "te"];
function Vr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return xr.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s) throw J(X.UNEXPECTED_ERROR);
    const i = Wn(s.value) ? { get() {
      return s.value.value;
    }, set(c) {
      s.value.value = c;
    } } : { get() {
      return s.get && s.get();
    } };
    Object.defineProperty(n, r, i);
  }), e.config.globalProperties.$i18n = n, an.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s || !s.value) throw J(X.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, an.forEach((r) => {
      delete e.config.globalProperties[`$${r}`];
    });
  };
}
const jr = gt({ name: "i18n-d", props: G({ value: { type: [Number, Date], required: true }, format: { type: [String, Object] } }, vt), setup(e, t) {
  const n = e.i18n || Tt({ useScope: e.scope, __useComponent: true });
  return Dn(e, t, vn, (...a) => n[ft](...a));
} }), rn = jr;
Er();
Qa(Aa);
Za(Xa);
za(bn);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = fe();
  e.__INTLIFY__ = true, Da(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Yr = { button: { pause: "Pause" } }, Hr = { button: { back: "Back", changelog: "Changelog", fullscreen: "Fullscreen (F11)", level_editor: "Level Editor", multi_player: "Multi-player", news: "News", play: "Play", skins: "Skins", steam: "Steam", workshop: "Workshop" }, messages: { 0: "Welcome!", 1: "Is it Christmas yet?", 2: "Maybe some day I will add new levels", 3: "Aren't you suppose to be doing homework?", 4: "Tip: Drink lots of water!", 5: "Made by the creators of Boxel Rebound.", 6: "Terraria is a pretty cool game.", 7: "Good luck!", 8: "Kargoh is my favorite Youtuber.", 9: "Fact: I am bad at Fortnite.", 10: "Do not get caught!", 11: "3D games are hard to make.", 12: "You should make a level during class.", 13: "Made with 20 cups of coffee every day.", 14: "Lower the graphics to speed up the game.", 15: "I hope you have a great day.", 16: "More addicting than TikTok!", 17: "I tried doing homework once, did not like it.", 18: "I make levels during my day job.", 19: "I wish this game had more levels.", 20: "Do not share your friend code with strangers!", 21: "Nothing in life is free, except for this game.", 22: "My score is way better than your score.", 23: "Backup your data so you can play on other computers.", 24: "If you want to make games for a living, start by making levels.", 25: "Are cats better than dogs?", 26: "Shoutout to Stack Overflow for all the help!", 27: "Now available on the TI-84+ Silver Edition.", 28: "I think you are a pretty neat person.", 29: "I am glad you are alive today!", 30: "Happy Friday! (or whatever day it is)", 31: "Share kindness (or Boxel 3D) with someone today.", 32: "You might not feel special today, but you are special to me!", 33: "01101100 01101111 01101100", 34: "Have you tried turning it off and on again?", 35: "All bugs have been fixed (lol jk)", 36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0" }, title: "Boxel 3D" }, Gr = { button: { exit: "Exit to home (ESC)", play: "Play" }, title: "Play" }, Br = { campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!", campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!", campaign_level_5: "Did you know you can jump after you fall?", campaign_level_18: "Do not forget to jump after you touch the jump pad!", campaign_level_33: "Try going up!", campaign_level_35: "Halt! You should not be here!", campaign_level_39: "Use your keyboard to move left and right." }, Kr = { en: "English", es: "Espa\xF1ol (Spanish)", fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)", ko: "\uD55C\uAD6D\uC5B4 (Korean)" }, Xr = { button: { backup: "Backup", cancel: "Cancel", close: "Close", continue: "Continue", exit: "Exit (E)", no: "No", play: "Play", restore: "Restore", retry: "Retry (R)", settings: "Settings", upload: "Upload", yes: "Yes" }, description: { new_record: "New record!" }, text: { all: "All", browse: "Browse", cloud_data_restored: "Success! Your data was restored from your account.", cloud_data_saved: "Success! Your data was backed up to your account.", custom_skin: "Custom Skin", file_data_restored: "File Data Restored!", info: "Info", level_packs: "Level Packs", paused: "Paused", restore_cloud_data: "Restore all data from the cloud?", restore_file_data: "Restore all data from a file?", save_data_to_cloud: "Save all local data to the cloud?", save_level: "Would you like to save your level?", search: "Search", seconds: "Seconds" } }, qr = { audio: { music: "Music", title: "Audio", volume_effects: "Sound Effects", volume_main: "Main Volume", volume_music: "Music Volume" }, data: { backup_to: "Backup to...", file: "File", google: "Google", restore_from: "Restore from...", title: "Data" }, graphics: { auto_rotate: "Auto Rotate", buffer: "Input Buffer", camera: "Camera", debug_mode: "Debug Mode", developer_tools: "Developer Tools", old_ui: "Old UI", quality: "Quality", show_fps: "Show FPS", title: "Graphics" }, language: { credit: "Credit", select_language: "Select Language", title: "Language" }, mods: { clipboard: "Clipboard", download_instructions: "Copy mods from trusted websites and paste them in the clipboard for later.", inspect_instructions: "Right-click this game and select Inspect.", paste_instructions: "Select the Console tab, paste mods from the clipboard, then press the enter key to load mods.", security: "For your security, mods must be manually loaded each time the game is launched.", title: "Mods", trusted_mods: "Trusted mods" }, multiplayer: { host: "Host", join: "Join", paste_friend_code: "Paste friend code", share_friend_code: "Share friend code", title: "Multiplayer", your_name: "Your name" } }, Jr = { button: { select: "Select" }, description: "Select your player skin", title: "Skins" }, Qr = { text: { browse_items: "Browse levels, skins & mods", create_item: "Create item", creations: "Creations", edit: "Edit", steam_version: "Steam version", subscriptions: "Subscriptions", workshop: "Workshop" } }, Zr = { campaign: Yr, home: Hr, level_picker: Gr, levels: Br, locales: Kr, popup: Xr, settings: qr, skins: Jr, workshop: Qr }, zr = { button: { pause: "Pausa" } }, es = { button: { back: "Atr\xE1s", changelog: "Cambios", fullscreen: "Pantalla Completa (F11)", level_editor: "Editor de Niveles", multi_player: "Multi-jugador", news: "Informacion", play: "Jugar", skins: "Apariencia", steam: "Steam", workshop: "Workshop" }, messages: { 0: "\xA1Bienvenidos!", 1: "\xBFYa es Navidad?", 2: "Tal vez alg\xFAn d\xEDa voy a poner nuevos niveles.", 3: "\xBFNo se supone que deber\xEDas estar haciendo tu tarea?", 4: "Consejo: \xA1Toma mucha agua!", 5: "Hecho por los creadores del juego Boxel Rebound!", 6: "Terraria es un juego bien.", 7: "\xA1Buena suerte!", 8: "Kargoh es mi YouTuber favorito.", 9: "Hecho: Soy malo al juego Fortnite.", 10: "Don't get caught!", 11: "Los juegos de 3D son dif\xEDciles de hacer.", 12: "Deber\xEDas acer un nivel durante la clase.", 13: "Creado con 20 tazas de caf\xE9 todos los d\xEDas.", 14: "Baja la qualidad del juego para ser mas rapido.", 15: "Espero que tengas un gran d\xEDa.", 16: "\xA1M\xE1s adictivo que el TikTok!", 17: "Yo Intent\xE9 hacer la tarea una vez, no me gust\xF3.", 18: "Yo hago niveles durante mi trabajo del d\xEDa.", 19: "Ojal\xE1 que este juego tuviera m\xE1s niveles.", 20: "\xA1No compartas el c\xF3digo de amigo con los extra\xF1os!", 21: "Nada en la vida es gratis, excepto este juego.", 22: "Mi puntuaci\xF3n es mucho mas mejor que la tuya.", 23: "Haz una copia de tu informacion para que puedas jugar en otras computadoras.", 24: "Si quieres ganarte la vida creando juegos, empieza por crear niveles del juego.", 25: "\xBFSon los gatos mas mejores de los perros?", 26: "\xA1Un saludo al sitio web Stack Overflow para toda la ayuda!", 27: "Ya puedes hugar Boxel 3D en la TI-84+ Silver Edition.", 28: "Yo creo que tu eres una persona bien.", 29: "\xA1Me alegro de que est\xE1s vivo hoy!", 30: "\xA1Feliz viernes! (o el d\xEDa que sea)", 31: "Comparte amabilidad (o Boxel 3D) con alguien hoy.", 32: "Puede ser que hoy no te sientas especial, \xA1pero tu eres muy especial a m\xED!", 33: "01101100 01101111 01101100", 34: "\xBFHas tratado apagarlo y prenderlo de otraves?", 35: "Todos los errores han sido corregidos (lol jk)", 36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0" }, title: "Boxel 3D" }, ts = { button: { exit: "Salir a la p\xE1gina de inicio (ESC)", play: "Jugar" }, title: "Jugar" }, ns = { campaign_level_1: "\xA1Bienvenido al Boxel 3D! El juego mas facil del mundo!", campaign_level_3: "Olvid\xE9 decirte esto antes: \xA1NO TOQUES LOS PICOS!", campaign_level_5: "\xBFSab\xEDas que puedes saltar despu\xE9s de caer?", campaign_level_18: "\xA1No olvides de saltar despu\xE9s de tocar la plataforma de salto!", campaign_level_33: "\xA1Trata ir ariba!", campaign_level_35: "\xA1Para! \xA1Tu no debes de estar aqu\xED!!", campaign_level_39: "Utilice WASD, las teclas de flecha, y la barra espaciadora para moverse hacia la izquierda y hacia la derecha." }, as = { en: "English", es: "Espa\xF1ol (Spanish)", fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)", ko: "\uD55C\uAD6D\uC5B4 (Korean)" }, rs = { button: { backup: "Progreso", cancel: "Cancelar", close: "Cerrar", continue: "Continuar", exit: "Salida (E)", no: "No", play: "Jugar", restore: "Restore", retry: "Volver (R)", settings: "Ajuste", upload: "Subir", yes: "Si" }, description: { new_record: "\xA1Nuevo Record!" }, text: { all: "Todo", browse: "Navegar", cloud_data_restored: "\xA1\xC9xito! Tu informaci\xF3n fue restaurada de tu cuenta.", cloud_data_saved: "\xA1\xC9xito! Tu informaci\xF3n fue copiada a tu cuenta.", custom_skin: "Apariencia Personalizada", file_data_restored: "\xA1Informaci\xF3n de archivo fue restaurado!", info: "Informaci\xF3n", level_packs: "Paquetes de Niveles", paused: "Pausado", restore_cloud_data: "\xBFRestaurar todo tu informacion del cloud?", restore_file_data: "\xBFRestaurar todo tu informacion de un Archivo?", save_data_to_cloud: "\xBFCopia toda tu informaci\xF3n local al cloud?", save_level: "\xBFQueres mantener tu nivel?", search: "Buscar", seconds: "Segundos" } }, ss = { audio: { music: "Musica", title: "Audio", volume_effects: "Efectos Sonoros", volume_main: "Volumen Principal", volume_music: "Volumen de Musica" }, data: { backup_to: "Copia progreso a...", file: "Archivo", google: "Google", restore_from: "Restaurar de...", title: "Informacion" }, graphics: { auto_rotate: "Rotaci\xF3n de C\xE1mara Autom\xE1tica", buffer: "B\xFAfer de Entrada", camera: "C\xE1mara", debug_mode: "Modo de Depuraci\xF3n", developer_tools: "Herramientas para Desarrolladores", old_ui: "Interfaz de Usuario Antigua", quality: "Qualidad", show_fps: "Ense\xF1ar FPS", title: "Gr\xE1ficos" }, language: { credit: "Cr\xE9dito", title: "Languaje", select_language: "Elija Languaje" }, mods: { clipboard: "Portapapeles", download_instructions: "Copie modificaciones de juego de sitios web confiables y p\xE9guelas en el portapapeles para usarlas m\xE1s tarde.", inspect_instructions: "Haz clic derecho en este juego y selecciona Inspeccionar.", paste_instructions: "Seleccione la pantalla 'Consola', pegue modificaciones del portapapeles alli, y luego presione la tecla 'Enter' para poner los modificaciones.", security: "Por tu seguridad, tu necesitas poner las modificaciones manualmente cada vez que  inicias el juego.", title: "Modificaciones", trusted_mods: "Modificaciones Confiables" }, multiplayer: { host: "Anfitri\xF3n", join: "Unirse", paste_friend_code: "Pegue c\xF3digo de amigo", share_friend_code: "Comparte c\xF3digo de amigo", title: "Multijugador", your_name: "Tu Nombre" } }, os = { button: { select: "Selecciona" }, description: "Selecciona tu Apariencia", title: "Apariencia" }, ls = { text: { browse_items: "Explorar art\xEDculos", create_item: "Crear art\xEDculo", creations: "Creaciones", edit: "Editar", steam_version: "Steam versi\xF3n", subscriptions: "Suscripciones", workshop: "Workshop" } }, is = { campaign: zr, home: es, level_picker: ts, levels: ns, locales: as, popup: rs, settings: ss, skins: os, workshop: ls }, cs = { button: { pause: "\u062A\u0648\u0642\u0641" } }, us = { button: { back: "\u0628\u0627\u0632\u06AF\u0634\u062A", changelog: "\u0641\u0647\u0631\u0633\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A", fullscreen: "\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647  (F11)", level_editor: "\u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u0645\u0631\u062D\u0644\u0647", multi_player: "\u0686\u0646\u062F \u0646\u0641\u0631\u0647", news: "\u0627\u062E\u0628\u0627\u0631", play: " \u0628\u0627\u0632\u06CC", skins: "\u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627", steam: "Steam", workshop: "Workshop" }, messages: { 0: "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F!", 1: "\u0622\u06CC\u0627 \u0647\u0646\u0648\u0632 \u06A9\u0631\u06CC\u0633\u0645\u0633 \u0627\u0633\u062A\u061F", 2: "\u0634\u0627\u06CC\u062F \u0631\u0648\u0632\u06CC \u0645\u0631\u062D\u0644\u0647\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u0645", 3: "\u0622\u06CC\u0627 \u0642\u0631\u0627\u0631 \u0646\u06CC\u0633\u062A \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0628\u0627\u0634\u06CC\u062F\u061F", 4: "\u0646\u06A9\u062A\u0647: \u0622\u0628 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0646\u0648\u0634\u06CC\u062F", 5: "\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0633\u0627\u0632\u0646\u062F\u0647 \u0628\u0627\u06A9\u0633\u0644 \u0631\u06CC\u0628\u0648\u06CC\u0646\u062F", 6: "Terraria \u06CC\u06A9 \u0628\u0627\u0632\u06CC \u0628\u0633\u06CC\u0627\u0631 \u062C\u0627\u0644\u0628 \u0627\u0633\u062A", 7: "\u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u06CC\u062F!", 8: "Kargoh \u06CC\u0648\u062A\u200C\u06CC\u0648\u0628\u0631 \u0645\u062D\u0628\u0648\u0628 \u0645\u0646 \u0627\u0633\u062A", 9: "\u0648\u0627\u0642\u0639\u06CC\u062A: \u0645\u0646 \u062F\u0631 \u0641\u0648\u0631\u062A\u0646\u0627\u06CC\u062A \u0628\u062F \u0647\u0633\u062A\u0645", 10: "\u06AF\u06CC\u0631 \u0646\u062F\u0647!", 11: "\u0633\u0627\u062E\u062A \u0628\u0627\u0632\u06CC \u0647\u0627\u06CC \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0633\u062E\u062A \u0627\u0633\u062A", 12: "\u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u062F\u0631 \u0637\u0648\u0644 \u06A9\u0644\u0627\u0633 \u06CC\u06A9 \u0645\u0631\u062D\u0644\u0647 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F", 13: "\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627 \u0647\u0631 \u0631\u0648\u0632 20 \u0641\u0646\u062C\u0627\u0646 \u0642\u0647\u0648\u0647", 14: "\u06AF\u0631\u0627\u0641\u06CC\u06A9 \u06A9\u0645\u062A\u0631\u060C \u0628\u0631\u0627\u06CC \u0627\u0641\u0632\u0627\u06CC\u0634 \u0633\u0631\u0639\u062A \u0628\u0627\u0632\u06CC", 15: "\u0627\u0645\u06CC\u062F\u0648\u0627\u0631\u0645 \u0631\u0648\u0632 \u062E\u0648\u0628\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F", 16: "\u0627\u0632 \u062A\u06CC\u06A9\u200C\u062A\u0627\u06A9 \u0647\u0645 \u0627\u0639\u062A\u06CC\u0627\u062F\u0622\u0648\u0631\u062A\u0631!", 17: "\u0645\u0646 \u06CC\u06A9 \u0628\u0627\u0631 \u0633\u0639\u06CC \u06A9\u0631\u062F\u0645 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0631\u0627 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0645\u060C \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062F\u0648\u0633\u062A \u0646\u062F\u0627\u0634\u062A\u0645", 18: "\u062F\u0631 \u0637\u0648\u0644 \u06A9\u0627\u0631 \u0631\u0648\u0632\u0627\u0646\u0647\u200C\u0627\u0645\u060C \u0645\u0631\u062D\u0644\u0647 \u0645\u06CC\u200C\u0633\u0627\u0632\u0645", 19: "\u06A9\u0627\u0634 \u0627\u06CC\u0646 \u0628\u0627\u0632\u06CC \u0645\u0631\u0627\u062D\u0644 \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0627\u0634\u062A", 20: "\u06A9\u062F \u062F\u0648\u0633\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0627\u0641\u0631\u0627\u062F \u063A\u0631\u06CC\u0628\u0647 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0646\u06AF\u0630\u0627\u0631\u06CC\u062F!", 21: "\u0647\u06CC\u0686 \u0686\u06CC\u0632 \u062F\u0631 \u0632\u0646\u062F\u06AF\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0646\u06CC\u0633\u062A\u060C \u0628\u0647 \u062C\u0632 \u0627\u06CC\u0646 \u0628\u0627\u0632\u06CC", 22: "\u0646\u0645\u0631\u0647 \u0645\u0646 \u062E\u06CC\u0644\u06CC \u0628\u0647\u062A\u0631 \u0627\u0632 \u0646\u0645\u0631\u0647 \u0634\u0645\u0627\u0633\u062A", 23: "\u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062E\u0648\u062F \u0646\u0633\u062E\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646 \u062A\u0647\u06CC\u0647 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0628\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F", 24: "\u0627\u06AF\u0631 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0631\u0627\u06CC \u0627\u0645\u0631\u0627\u0631 \u0645\u0639\u0627\u0634 \u0628\u0627\u0632\u06CC \u0628\u0633\u0627\u0632\u06CC\u062F\u060C \u0628\u0627 \u0633\u0627\u062E\u062A\u0646 \u0645\u0631\u0627\u062D\u0644 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F", 25: "\u0622\u06CC\u0627 \u06AF\u0631\u0628\u0647\u200C\u0647\u0627 \u0628\u0647\u062A\u0631 \u0627\u0632 \u0633\u06AF\u200C\u0647\u0627 \u0647\u0633\u062A\u0646\u062F\u061F", 26: "\u062A\u0634\u06A9\u0631 \u0648\u06CC\u0698\u0647 \u0627\u0632 Stack Overflow \u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0645 \u06A9\u0645\u06A9\u200C\u0647\u0627!", 27: "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u062F\u0631 \u0646\u0633\u062E\u0647 \u0646\u0642\u0631\u0647\u200C\u0627\u06CC TI-84+ \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0633\u062A", 28: "\u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0622\u062F\u0645 \u062E\u06CC\u0644\u06CC \u062C\u0627\u0644\u0628\u06CC \u0647\u0633\u062A\u06CC", 29: "\u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u0627\u0645\u0631\u0648\u0632 \u0632\u0646\u062F\u0647 \u0627\u06CC!", 30: "\u062C\u0645\u0639\u0647 \u0645\u0628\u0627\u0631\u06A9! (\u06CC\u0627 \u0647\u0631 \u0631\u0648\u0632\u06CC \u06A9\u0647 \u0628\u0627\u0634\u062F)", 31: "\u0647\u0645\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u0645\u0647\u0631\u0628\u0627\u0646\u06CC (\u06CC\u0627 \u0628\u0627\u06A9\u0633\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC) \u0631\u0627 \u0628\u0627 \u06A9\u0633\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F", 32: "\u0634\u0627\u06CC\u062F \u0627\u0645\u0631\u0648\u0632 \u0627\u062D\u0635\u0627\u0635 \u062E\u0627\u0635\u06CC \u0646\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u060C \u0648\u0644\u06CC \u0628\u0631\u0627\u06CC \u0645\u0646 \u062E\u0627\u0635\u06CC!", 33: "01101100 01101111 01101100", 34: "\u0622\u06CC\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC \u06A9\u0647 \u062E\u0627\u0645\u0648\u0634\u0634 \u06A9\u0646\u06CC \u0648 \u062F\u0648\u0628\u0627\u0631\u0647 \u0631\u0648\u0634\u0646\u0634 \u06A9\u0646\u06CC\u061F", 35: "\u062A\u0645\u0627\u0645 \u0628\u0627\u06AF\u200C\u0647\u0627 \u0628\u0631\u0637\u0631\u0641 \u0634\u062F\u0647\u200C\u0627\u0646\u062F (\u0647\u0627\u0647\u0627 \u0634\u0648\u062E\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645)", 36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0" }, title: "\u0628\u0627\u06A9\u0633\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC" }, fs = { button: { exit: "\u0631\u0641\u062A\u0646 \u0628\u0647 \u062E\u0627\u0646\u0647 (ESC)", play: "\u0628\u0627\u0632\u06CC" }, title: "\u0628\u0627\u0632\u06CC" }, ms = { campaign_level_1: "!\u0628\u0647 \u0628\u0627\u06A9\u0633\u0644(\u062C\u0639\u0628\u0647) \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F! \u0633\u0627\u062F\u0647 \u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u062A\u0627 \u0627\u0644\u0627\u0646", campaign_level_3: " \u0645\u0646 \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u0628\u0647 \u0634\u0645\u0627 \u0632\u0648\u062F\u062A\u0631 \u0628\u06AF\u0648\u06CC\u0645 \u06A9\u0647\u060C \u0628\u0647 \u062A\u06CC\u063A\u0647\u200C\u0647\u0627 \u0628\u0631\u062E\u0648\u0631\u062F \u0646\u06A9\u0646\u06CC\u062F!", campaign_level_5: "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062F\u0627\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u0633\u0642\u0648\u0637 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u067E\u0631\u06CC\u062F\u061F", campaign_level_18: "\u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u067E\u0631\u06CC\u062F\u0646\u060C \u0628\u067E\u0631\u06CC\u062F!", campaign_level_33: "\u0628\u0627\u0644\u0627 \u0631\u0641\u062A\u0646 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F", campaign_level_35: "\u0635\u0628\u0631 \u06A9\u0646! \u0634\u0645\u0627 \u0646\u0628\u0627\u06CC\u062F \u0627\u06CC\u0646\u062C\u0627 \u0628\u0627\u0634\u06CC\u062F!", campaign_level_39: "\u0627\u0632 \u06A9\u06CC\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u0686\u067E \u0648 \u0631\u0627\u0633\u062A \u0631\u0641\u062A\u0646" }, ds = { en: "English", es: "Espa\xF1ol (Spanish)", fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)", ko: "\uD55C\uAD6D\uC5B4 (Korean)" }, _s = { button: { backup: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u200C\u06AF\u06CC\u0631\u06CC", cancel: "\u0644\u063A\u0648", close: "\u0628\u0633\u062A\u0646", continue: "\u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u062F\u0646", exit: "\u062E\u0631\u0648\u062C (E)", no: "\u0646\u0647", play: "\u0628\u0627\u0632\u06CC", restore: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC", retry: "\u062F\u0648\u0628\u0627\u0631\u0647 (R)", settings: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A", upload: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC", yes: "\u0628\u0644\u0647" }, description: { new_record: "\u0631\u06A9\u0648\u0631\u062F \u062C\u062F\u06CC\u062F!" }, text: { all: "\u0647\u0645\u0647", browse: "\u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F", cloud_data_restored: "\u062A\u0645\u0627\u0645! \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0645\u0627 \u0627\u0632 \u062D\u0633\u0627\u0628\u062A\u0627\u0646 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0634\u062F", cloud_data_saved: "\u062A\u0645\u0627\u0645! \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0645\u0627 \u062F\u0631 \u062D\u0633\u0627\u0628\u062A\u0627\u0646 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F", custom_skin: "\u067E\u0648\u0633\u062A\u0647 \u0633\u0641\u0627\u0631\u0634\u06CC", file_data_restored: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0641\u0627\u06CC\u0644 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0634\u062F", info: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A", level_packs: "\u062F\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0645\u0631\u062D\u0644\u0647", paused: "\u0645\u062A\u0648\u0642\u0641 \u0634\u062F\u0647", restore_cloud_data: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647 \u0627\u0632 \u0641\u0636\u0627\u06CC \u0627\u0628\u0631\u06CC\u061F", restore_file_data: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647 \u0647\u0627 \u0627\u0632 \u06CC\u06A9 \u0641\u0627\u06CC\u0644\u061F", save_data_to_cloud: "\u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u0641\u0636\u0627\u06CC \u0627\u0628\u0631\u06CC\u061F", save_level: "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0645\u0631\u062D\u0644\u0647 \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F", search: "\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F", seconds: "\u062B\u0627\u0646\u06CC\u0647" } }, gs = { audio: { music: "\u0645\u0648\u0633\u06CC\u0642\u06CC", title: "\u0635\u062F\u0627", volume_effects: "\u0627\u0641\u06A9\u062A \u0647\u0627\u06CC \u0635\u062F\u0627", volume_main: "\u0635\u062F\u0627\u06CC \u067E\u0627\u06CC\u0647", volume_music: "\u0635\u062F\u0627\u06CC \u0645\u0648\u0633\u06CC\u0642\u06CC" }, data: { backup_to: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u200C\u06AF\u06CC\u0631\u06CC \u062F\u0631...", file: "\u0641\u0627\u06CC\u0644", google: "\u06AF\u0648\u06AF\u0644", restore_from: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0632...", title: "\u062F\u0627\u062F\u0647\u200C\u0647\u0627" }, graphics: { auto_rotate: "\u0686\u0631\u062E\u0634 \u062E\u0648\u062F\u06A9\u0627\u0631", buffer: "\u0628\u0627\u0641\u0631 \u0648\u0631\u0648\u062F\u06CC", camera: "\u062F\u0648\u0631\u0628\u06CC\u0646", debug_mode: "\u062D\u0627\u0644\u062A \u0627\u0634\u06A9\u0627\u0644\u200C\u06AF\u06CC\u0631\u06CC", developer_tools: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0633\u0627\u0632\u0646\u062F\u06AF\u0627\u0646", old_ui: "\u0638\u0627\u0647\u0631 \u0642\u062F\u06CC\u0645\u06CC", quality: "\u06A9\u06CC\u0641\u06CC\u062A", show_fps: "\u0646\u0645\u0627\u06CC\u0634 FPS", title: "\u06AF\u0631\u0627\u0641\u06CC\u06A9" }, language: { credit: "\u0627\u0639\u062A\u0628\u0627\u0631", title: "\u0632\u0628\u0627\u0646", select_language: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646" }, mods: { clipboard: "\u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F", download_instructions: "\u0645\u0648\u062F \u0647\u0627 \u0631\u0627 \u0627\u0632 \u0648\u0628\u0633\u0627\u06CC\u062A \u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0639\u062A\u0645\u0627\u062F \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u0628\u0631\u0627\u06CC \u0628\u0639\u062F \u062F\u0631 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F", inspect_instructions: "\u0631\u0627\u0633\u062A \u06A9\u0644\u06CC\u06A9 \u062F\u0631 \u0628\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F \u0648 \u062F\u06A9\u0645\u0647 Inspect \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F", paste_instructions: "\u0628\u0647 \u0628\u062E\u0634 \u06A9\u0646\u0633\u0648\u0644 \u0628\u0631\u0648\u06CC\u062F \u0648 \u0645\u0648\u062F\u0647\u0627 \u0631\u0627 \u0627\u0632 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0648 \u0633\u067E\u0633 \u0627\u06CC\u0646\u062A\u0631 \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F.", security: "\u0628\u0631\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A \u0634\u0645\u0627\u060C \u0647\u0631 \u0628\u0627\u0631 \u06A9\u0647 \u0628\u0627\u0632\u06CC \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0645\u06CC \u0634\u0648\u062F\u060C \u0645\u0648\u062F\u0647\u0627 \u0628\u0627\u06CC\u062F \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u062F\u0633\u062A\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0634\u0648\u0646\u062F", title: "\u0645\u0648\u062F\u0647\u0627", trusted_mods: "\u0645\u0648\u062F\u0647\u0627\u06CC \u0645\u0648\u0631\u062F \u0627\u0639\u062A\u0645\u0627\u062F" }, multiplayer: { host: "\u0645\u06CC\u0632\u0628\u0627\u0646", join: "\u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F", paste_friend_code: "\u062C\u0627\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC \u06A9\u062F \u062F\u0648\u0633\u062A", share_friend_code: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u06A9\u062F \u062F\u0648\u0633\u062A", title: "\u0686\u0646\u062F \u0646\u0641\u0631\u0647", your_name: "\u0627\u0633\u0645 \u0634\u0645\u0627" } }, ps = { button: { select: "\u0627\u0646\u062A\u062E\u0627\u0628" }, description: "\u067E\u0648\u0633\u062A\u0647 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F", title: "\u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627" }, hs = { text: { browse_items: "\u0645\u0648\u0627\u0631\u062F \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F", create_item: "\u0645\u0648\u0631\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F", creations: "\u0622\u0641\u0631\u06CC\u0646\u0634 \u0647\u0627", edit: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F", steam_version: "Steam \u0646\u0633\u062E\u0647", subscriptions: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0647\u0627", workshop: "Workshop" } }, bs = { campaign: cs, home: us, level_picker: fs, levels: ms, locales: ds, popup: _s, settings: gs, skins: ps, workshop: hs }, Es = { button: { pause: "\uC77C\uC2DC\uC911\uC9C0" } }, ys = { button: { back: "\uB4A4\uB85C\uAC00\uAE30", changelog: "\uC5C5\uB370\uC774\uD2B8 \uD604\uD669", fullscreen: "\uD480\uC2A4\uD06C\uB9B0 (F11)", level_editor: "\uB808\uBCA8 \uBA54\uC774\uCEE4", multi_player: "\uBA40\uD2F0\uD50C\uB808\uC774\uC5B4", news: "\uB274\uC2A4", play: "\uAC8C\uC784\uD50C\uB808\uC774", skins: "\uC2A4\uD0A8", steam: "Steam", workshop: "Workshop" }, messages: { 0: "Welcome!", 1: "Is it Christmas yet?", 2: "Maybe some day I will add new levels", 3: "Aren't you suppose to be doing homework?", 4: "Tip: Drink lots of water!", 5: "Made by the creators of Boxel Rebound.", 6: "Terraria is a pretty cool game.", 7: "Good luck!", 8: "Kargoh is my favorite Youtuber.", 9: "Fact: I am bad at Fortnite.", 10: "Do not get caught!", 11: "3D games are hard to make.", 12: "You should make a level during class.", 13: "Made with 20 cups of coffee every day.", 14: "Lower the graphics to speed up the game.", 15: "I hope you have a great day.", 16: "More addicting than TikTok!", 17: "I tried doing homework once, did not like it.", 18: "I make levels during my day job.", 19: "I wish this game had more levels.", 20: "Do not share your friend code with strangers!", 21: "Nothing in life is free, except for this game.", 22: "My score is way better than your score.", 23: "Backup your data so you can play on other computers.", 24: "If you want to make games for a living, start by making levels.", 25: "Are cats better than dogs?", 26: "Shoutout to Stack Overflow for all the help!", 27: "Now available on the TI-84+ Silver Edition.", 28: "I think you are a pretty neat person.", 29: "I am glad you are alive today!", 30: "Happy Friday! (or whatever day it is)", 31: "Share kindness (or Boxel 3D) with someone today.", 32: "You might not feel special today, but you are special to me!", 33: "01101100 01101111 01101100", 34: "Have you tried turning it off and on again?", 35: "All bugs have been fixed (lol jk)", 36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0" }, title: "Boxel 3D" }, Ls = { button: { exit: "\uD648\uC73C\uB85C \uBC14\uB85C\uAC00\uAE30 (ESC)", play: "\uD50C\uB808\uC774" }, title: "\uD50C\uB808\uC774" }, ks = { campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!", campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!", campaign_level_5: "Did you know you can jump after you fall?", campaign_level_18: "Do not forget to jump after you touch the jump pad!", campaign_level_33: "Try going up!", campaign_level_35: "Halt! You should not be here!", campaign_level_39: "Use your keyboard to move left and right." }, Is = { en: "English", es: "Espa\xF1ol (Spanish)", fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)", ko: "\uD55C\uAD6D\uC5B4 (Korean)" }, vs = { button: { backup: "\uBC31\uC5C5", cancel: "\uCDE8\uC18C", close: "\uB2EB\uAE30", continue: "\uACC4\uC18D\uD558\uAE30", exit: "\uB098\uAC00\uAE30(E)", no: "\uCDE8\uC18C", play: "\uD50C\uB808\uC774", restore: "\uBD88\uB7EC\uC624\uAE30", retry: "\uB2E4\uC2DC \uD558\uAE30 (R)", settings: "\uC124\uC815", upload: "\uC5C5\uB85C\uB4DC", yes: "\uC218\uB77D" }, description: { new_record: "\uCD5C\uACE0 \uAE30\uB85D \uB3CC\uD30C!" }, text: { all: "\uBAA8\uB450", browse: "\uBA39\uB2E4", cloud_data_restored: "\uB370\uC774\uD130 \uBD88\uB7EC\uC624\uAE30 \uC131\uACF5!", cloud_data_saved: "\uB370\uC774\uD130 \uBC31\uC5C5 \uC131\uACF5!", custom_skin: "\uCEE4\uC2A4\uD140 \uC2A4\uD0A8", file_data_restored: "\uD30C\uC77C \uB370\uC774\uD130 \uC800\uC7A5\uB428", info: "\uC0C1\uC138", level_packs: "\uB808\uBCA8 \uD329", paused: "\uC77C\uC2DC\uC815\uC9C0\uB428", restore_cloud_data: "\uD074\uB77C\uC6B0\uB4DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", restore_file_data: "\uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", save_data_to_cloud: "\uBAA8\uB4E0 \uB85C\uCEEC \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", save_level: "\uC774 \uB808\uBCA8\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", search: "\uAC80\uC0C9", seconds: "\uCD08" } }, Ts = { audio: { music: "\uC74C\uC545", title: "\uC624\uB514\uC624", volume_effects: "\uD6A8\uACFC\uC74C", volume_main: "\uBA54\uC778 \uBCFC\uB968", volume_music: "\uC74C\uC545 \uBCFC\uB968" }, data: { backup_to: "...\uC73C\uB85C \uBC31\uC5C5", file: "\uD30C\uC77C", google: "\uAD6C\uAE00", restore_from: "...\uC5D0\uC11C \uC800\uC7A5", title: "\uB370\uC774\uD130" }, graphics: { auto_rotate: "\uC790\uB3D9 \uD68C\uC804", buffer: "\uC785\uB825 \uBC84\uD37C", camera: "\uCE74\uBA54\uB77C", debug_mode: "\uB514\uBC84\uADF8 \uBAA8\uB4DC", developer_tools: "\uAC1C\uBC1C\uC790 \uD234", old_ui: "\uC61B\uB0A0 UI", quality: "\uD004\uB9AC\uD2F0", show_fps: "FPS \uBCF4\uAE30", title: "\uADF8\uB798\uD53D" }, language: { credit: "\uD06C\uB808\uB527", select_language: "\uC5B8\uC5B4", title: "\uC5B8\uC5B4" }, mods: { clipboard: "\uD074\uB9BD\uBCF4\uB4DC", download_instructions: "\uBAA8\uB4DC\uB97C \uBCF5\uC0AC\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBD99\uC5EC\uB123\uC73C\uC138\uC694.  .", inspect_instructions: "\uC6B0\uD074\uB9AD\uD558\uACE0 \uAC80\uC0AC \uD0ED\uC744 \uD074\uB9AD\uD558\uC138\uC694.", paste_instructions: "console \uD0ED\uC744 \uD074\uB9AD\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC \uB97C \uBD99\uC5EC\uB123\uC73C\uC138\uC694.", security: "\uBCF4\uC548\uC744 \uC704\uD574, \uAC8C\uC784\uC744 \uC2DC\uC791\uD560 \uB54C\uB9C8\uB2E4 \uBAA8\uB4DC\uB97C \uC218\uB3D9\uC73C\uB85C \uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4.", title: "Mods", trusted_mods: "Trusted mods" }, multiplayer: { host: "\uB9CC\uB4E4\uAE30", join: "\uCC38\uAC00\uD558\uAE30", paste_friend_code: "\uCF54\uB4DC \uBD99\uC5EC\uB123\uAE30", share_friend_code: "\uCF54\uB4DC \uACF5\uC720\uD558\uAE30", title: "\uBA40\uD2F0\uD50C\uB808\uC774\uC5B4", your_name: "\uC774\uB984" } }, Ns = { button: { select: "\uACE0\uB974\uAE30" }, description: "\uC2A4\uD0A8\uC744 \uACE0\uB974\uC2DC\uC624.", title: "\uC2A4\uD0A8" }, Ss = { text: { browse_items: "\uD56D\uBAA9 \uCC3E\uC544\uBCF4\uAE30", create_item: "\uC544\uC774\uD15C \uC0DD\uC131", creations: "\uCC3D\uC791\uBB3C", edit: "\uD3B8\uC9D1\uD558\uB2E4", steam_version: "Steam \uBC84\uC804", subscriptions: "\uAD6C\uB3C5", workshop: "Workshop" } }, Cs = { campaign: Es, home: ys, level_picker: Ls, levels: ks, locales: Is, popup: vs, settings: Ts, skins: Ns, workshop: Ss }, Os = JSON.parse(localStorage.getItem("settings") || "{}"), As = Ar({ legacy: false, locale: Os.language || "en", fallbackLocale: "en", messages: { en: Zr, es: is, fa: bs, ko: Cs } });
export {
  As as i,
  Tt as u
};
