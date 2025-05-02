import { bf as At, V as l, aW as D, aC as Ut, O as ft, az as Rt, aT as Ft, bg as M, af as P, aU as wt, ao as gt, ah as h, bh as ot, bi as Z, bj as G, a_ as qt, b0 as Wt, M as Ct, aA as Gt, S as Kt, bk as W, bl as q, bm as Pt, N as R, bn as Bt, bo as Vt, ac as $t } from "./SkeletonUtils-Bl7JM-Sp.js";
var tt = Object.freeze({ Linear: Object.freeze({ None: function(e) {
  return e;
}, In: function(e) {
  return e;
}, Out: function(e) {
  return e;
}, InOut: function(e) {
  return e;
} }), Quadratic: Object.freeze({ In: function(e) {
  return e * e;
}, Out: function(e) {
  return e * (2 - e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
} }), Cubic: Object.freeze({ In: function(e) {
  return e * e * e;
}, Out: function(e) {
  return --e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
} }), Quartic: Object.freeze({ In: function(e) {
  return e * e * e * e;
}, Out: function(e) {
  return 1 - --e * e * e * e;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
} }), Quintic: Object.freeze({ In: function(e) {
  return e * e * e * e * e;
}, Out: function(e) {
  return --e * e * e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
} }), Sinusoidal: Object.freeze({ In: function(e) {
  return 1 - Math.sin((1 - e) * Math.PI / 2);
}, Out: function(e) {
  return Math.sin(e * Math.PI / 2);
}, InOut: function(e) {
  return 0.5 * (1 - Math.sin(Math.PI * (0.5 - e)));
} }), Exponential: Object.freeze({ In: function(e) {
  return e === 0 ? 0 : Math.pow(1024, e - 1);
}, Out: function(e) {
  return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
} }), Circular: Object.freeze({ In: function(e) {
  return 1 - Math.sqrt(1 - e * e);
}, Out: function(e) {
  return Math.sqrt(1 - --e * e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
} }), Elastic: Object.freeze({ In: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI);
}, Out: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e - 0.1) * 5 * Math.PI) + 1;
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2, e < 1 ? -0.5 * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) + 1);
} }), Back: Object.freeze({ In: function(e) {
  var t = 1.70158;
  return e === 1 ? 1 : e * e * ((t + 1) * e - t);
}, Out: function(e) {
  var t = 1.70158;
  return e === 0 ? 0 : --e * e * ((t + 1) * e + t) + 1;
}, InOut: function(e) {
  var t = 2.5949095;
  return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
} }), Bounce: Object.freeze({ In: function(e) {
  return 1 - tt.Bounce.Out(1 - e);
}, Out: function(e) {
  return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}, InOut: function(e) {
  return e < 0.5 ? tt.Bounce.In(e * 2) * 0.5 : tt.Bounce.Out(e * 2 - 1) * 0.5 + 0.5;
} }), generatePow: function(e) {
  return e === void 0 && (e = 4), e = e < Number.EPSILON ? Number.EPSILON : e, e = e > 1e4 ? 1e4 : e, { In: function(t) {
    return Math.pow(t, e);
  }, Out: function(t) {
    return 1 - Math.pow(1 - t, e);
  }, InOut: function(t) {
    return t < 0.5 ? Math.pow(t * 2, e) / 2 : (1 - Math.pow(2 - t * 2, e)) / 2 + 0.5;
  } };
} }), V = function() {
  return performance.now();
}, Jt = function() {
  function e() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    this._tweens = {}, this._tweensAddedDuringUpdate = {}, this.add.apply(this, t);
  }
  return e.prototype.getAll = function() {
    var t = this;
    return Object.keys(this._tweens).map(function(i) {
      return t._tweens[i];
    });
  }, e.prototype.removeAll = function() {
    this._tweens = {};
  }, e.prototype.add = function() {
    for (var t, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
    for (var o = 0, r = i; o < r.length; o++) {
      var s = r[o];
      (t = s._group) === null || t === void 0 || t.remove(s), s._group = this, this._tweens[s.getId()] = s, this._tweensAddedDuringUpdate[s.getId()] = s;
    }
  }, e.prototype.remove = function() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    for (var n = 0, o = t; n < o.length; n++) {
      var r = o[n];
      r._group = void 0, delete this._tweens[r.getId()], delete this._tweensAddedDuringUpdate[r.getId()];
    }
  }, e.prototype.allStopped = function() {
    return this.getAll().every(function(t) {
      return !t.isPlaying();
    });
  }, e.prototype.update = function(t, i) {
    t === void 0 && (t = V()), i === void 0 && (i = true);
    var n = Object.keys(this._tweens);
    if (n.length !== 0) for (; n.length > 0; ) {
      this._tweensAddedDuringUpdate = {};
      for (var o = 0; o < n.length; o++) {
        var r = this._tweens[n[o]], s = !i;
        r && r.update(t, s) === false && !i && this.remove(r);
      }
      n = Object.keys(this._tweensAddedDuringUpdate);
    }
  }, e;
}(), _t = { Linear: function(e, t) {
  var i = e.length - 1, n = i * t, o = Math.floor(n), r = _t.Utils.Linear;
  return t < 0 ? r(e[0], e[1], n) : t > 1 ? r(e[i], e[i - 1], i - n) : r(e[o], e[o + 1 > i ? i : o + 1], n - o);
}, Utils: { Linear: function(e, t, i) {
  return (t - e) * i + e;
} } }, jt = function() {
  function e() {
  }
  return e.nextId = function() {
    return e._nextId++;
  }, e._nextId = 0, e;
}(), mt = new Jt(), Ee = function() {
  function e(t, i) {
    this._isPaused = false, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = false, this._initialRepeat = 0, this._repeat = 0, this._yoyo = false, this._isPlaying = false, this._reversed = false, this._delayTime = 0, this._startTime = 0, this._easingFunction = tt.Linear.None, this._interpolationFunction = _t.Linear, this._chainedTweens = [], this._onStartCallbackFired = false, this._onEveryStartCallbackFired = false, this._id = jt.nextId(), this._isChainStopped = false, this._propertiesAreSetUp = false, this._goToEnd = false, this._object = t, typeof i == "object" ? (this._group = i, i.add(this)) : i === true && (this._group = mt, mt.add(this));
  }
  return e.prototype.getId = function() {
    return this._id;
  }, e.prototype.isPlaying = function() {
    return this._isPlaying;
  }, e.prototype.isPaused = function() {
    return this._isPaused;
  }, e.prototype.getDuration = function() {
    return this._duration;
  }, e.prototype.to = function(t, i) {
    if (i === void 0 && (i = 1e3), this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
    return this._valuesEnd = t, this._propertiesAreSetUp = false, this._duration = i < 0 ? 0 : i, this;
  }, e.prototype.duration = function(t) {
    return t === void 0 && (t = 1e3), this._duration = t < 0 ? 0 : t, this;
  }, e.prototype.dynamic = function(t) {
    return t === void 0 && (t = false), this._isDynamic = t, this;
  }, e.prototype.start = function(t, i) {
    if (t === void 0 && (t = V()), i === void 0 && (i = false), this._isPlaying) return this;
    if (this._repeat = this._initialRepeat, this._reversed) {
      this._reversed = false;
      for (var n in this._valuesStartRepeat) this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
    }
    if (this._isPlaying = true, this._isPaused = false, this._onStartCallbackFired = false, this._onEveryStartCallbackFired = false, this._isChainStopped = false, this._startTime = t, this._startTime += this._delayTime, !this._propertiesAreSetUp || i) {
      if (this._propertiesAreSetUp = true, !this._isDynamic) {
        var o = {};
        for (var r in this._valuesEnd) o[r] = this._valuesEnd[r];
        this._valuesEnd = o;
      }
      this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, i);
    }
    return this;
  }, e.prototype.startFromCurrentValues = function(t) {
    return this.start(t, true);
  }, e.prototype._setupProperties = function(t, i, n, o, r) {
    for (var s in n) {
      var a = t[s], c = Array.isArray(a), m = c ? "array" : typeof a, y = !c && Array.isArray(n[s]);
      if (!(m === "undefined" || m === "function")) {
        if (y) {
          var b = n[s];
          if (b.length === 0) continue;
          for (var O = [a], C = 0, L = b.length; C < L; C += 1) {
            var E = this._handleRelativeValue(a, b[C]);
            if (isNaN(E)) {
              y = false, console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            O.push(E);
          }
          y && (n[s] = O);
        }
        if ((m === "object" || c) && a && !y) {
          i[s] = c ? [] : {};
          var g = a;
          for (var f in g) i[s][f] = g[f];
          o[s] = c ? [] : {};
          var b = n[s];
          if (!this._isDynamic) {
            var x = {};
            for (var f in b) x[f] = b[f];
            n[s] = b = x;
          }
          this._setupProperties(g, i[s], b, o[s], r);
        } else (typeof i[s] > "u" || r) && (i[s] = a), c || (i[s] *= 1), y ? o[s] = n[s].slice().reverse() : o[s] = i[s] || 0;
      }
    }
  }, e.prototype.stop = function() {
    return this._isChainStopped || (this._isChainStopped = true, this.stopChainedTweens()), this._isPlaying ? (this._isPlaying = false, this._isPaused = false, this._onStopCallback && this._onStopCallback(this._object), this) : this;
  }, e.prototype.end = function() {
    return this._goToEnd = true, this.update(this._startTime + this._duration), this;
  }, e.prototype.pause = function(t) {
    return t === void 0 && (t = V()), this._isPaused || !this._isPlaying ? this : (this._isPaused = true, this._pauseStart = t, this);
  }, e.prototype.resume = function(t) {
    return t === void 0 && (t = V()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = false, this._startTime += t - this._pauseStart, this._pauseStart = 0, this);
  }, e.prototype.stopChainedTweens = function() {
    for (var t = 0, i = this._chainedTweens.length; t < i; t++) this._chainedTweens[t].stop();
    return this;
  }, e.prototype.group = function(t) {
    return t ? (t.add(this), this) : (console.warn("tween.group() without args has been removed, use group.add(tween) instead."), this);
  }, e.prototype.remove = function() {
    var t;
    return (t = this._group) === null || t === void 0 || t.remove(this), this;
  }, e.prototype.delay = function(t) {
    return t === void 0 && (t = 0), this._delayTime = t, this;
  }, e.prototype.repeat = function(t) {
    return t === void 0 && (t = 0), this._initialRepeat = t, this._repeat = t, this;
  }, e.prototype.repeatDelay = function(t) {
    return this._repeatDelayTime = t, this;
  }, e.prototype.yoyo = function(t) {
    return t === void 0 && (t = false), this._yoyo = t, this;
  }, e.prototype.easing = function(t) {
    return t === void 0 && (t = tt.Linear.None), this._easingFunction = t, this;
  }, e.prototype.interpolation = function(t) {
    return t === void 0 && (t = _t.Linear), this._interpolationFunction = t, this;
  }, e.prototype.chain = function() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    return this._chainedTweens = t, this;
  }, e.prototype.onStart = function(t) {
    return this._onStartCallback = t, this;
  }, e.prototype.onEveryStart = function(t) {
    return this._onEveryStartCallback = t, this;
  }, e.prototype.onUpdate = function(t) {
    return this._onUpdateCallback = t, this;
  }, e.prototype.onRepeat = function(t) {
    return this._onRepeatCallback = t, this;
  }, e.prototype.onComplete = function(t) {
    return this._onCompleteCallback = t, this;
  }, e.prototype.onStop = function(t) {
    return this._onStopCallback = t, this;
  }, e.prototype.update = function(t, i) {
    var n = this, o;
    if (t === void 0 && (t = V()), i === void 0 && (i = e.autoStartOnUpdate), this._isPaused) return true;
    var r;
    if (!this._goToEnd && !this._isPlaying) if (i) this.start(t, true);
    else return false;
    if (this._goToEnd = false, t < this._startTime) return true;
    this._onStartCallbackFired === false && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = true), this._onEveryStartCallbackFired === false && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = true);
    var s = t - this._startTime, a = this._duration + ((o = this._repeatDelayTime) !== null && o !== void 0 ? o : this._delayTime), c = this._duration + this._repeat * a, m = function() {
      if (n._duration === 0 || s > c) return 1;
      var E = Math.trunc(s / a), g = s - E * a, f = Math.min(g / n._duration, 1);
      return f === 0 && s === n._duration ? 1 : f;
    }, y = m(), b = this._easingFunction(y);
    if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, b), this._onUpdateCallback && this._onUpdateCallback(this._object, y), this._duration === 0 || s >= this._duration) if (this._repeat > 0) {
      var O = Math.min(Math.trunc((s - this._duration) / a) + 1, this._repeat);
      isFinite(this._repeat) && (this._repeat -= O);
      for (r in this._valuesStartRepeat) !this._yoyo && typeof this._valuesEnd[r] == "string" && (this._valuesStartRepeat[r] = this._valuesStartRepeat[r] + parseFloat(this._valuesEnd[r])), this._yoyo && this._swapEndStartRepeatValues(r), this._valuesStart[r] = this._valuesStartRepeat[r];
      return this._yoyo && (this._reversed = !this._reversed), this._startTime += a * O, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = false, true;
    } else {
      this._onCompleteCallback && this._onCompleteCallback(this._object);
      for (var C = 0, L = this._chainedTweens.length; C < L; C++) this._chainedTweens[C].start(this._startTime + this._duration, false);
      return this._isPlaying = false, false;
    }
    return true;
  }, e.prototype._updateProperties = function(t, i, n, o) {
    for (var r in n) if (i[r] !== void 0) {
      var s = i[r] || 0, a = n[r], c = Array.isArray(t[r]), m = Array.isArray(a), y = !c && m;
      y ? t[r] = this._interpolationFunction(a, o) : typeof a == "object" && a ? this._updateProperties(t[r], s, a, o) : (a = this._handleRelativeValue(s, a), typeof a == "number" && (t[r] = s + (a - s) * o));
    }
  }, e.prototype._handleRelativeValue = function(t, i) {
    return typeof i != "string" ? i : i.charAt(0) === "+" || i.charAt(0) === "-" ? t + parseFloat(i) : parseFloat(i);
  }, e.prototype._swapEndStartRepeatValues = function(t) {
    var i = this._valuesStartRepeat[t], n = this._valuesEnd[t];
    typeof n == "string" ? this._valuesStartRepeat[t] = this._valuesStartRepeat[t] + parseFloat(n) : this._valuesStartRepeat[t] = this._valuesEnd[t], this._valuesEnd[t] = i;
  }, e.autoStartOnUpdate = false, e;
}();
jt.nextId;
var k = mt;
k.getAll.bind(k);
k.removeAll.bind(k);
k.add.bind(k);
k.remove.bind(k);
k.update.bind(k);
const N = new Ut(), w = new l(), z = new l(), d = new D(), Et = { X: new l(1, 0, 0), Y: new l(0, 1, 0), Z: new l(0, 0, 1) }, pt = { type: "change" }, St = { type: "mouseDown", mode: null }, Mt = { type: "mouseUp", mode: null }, vt = { type: "objectChange" };
class Se extends At {
  constructor(t, i = null) {
    super(void 0, i);
    const n = new oe(this);
    this._root = n;
    const o = new ae();
    this._gizmo = o, n.add(o);
    const r = new re();
    this._plane = r, n.add(r);
    const s = this;
    function a(T, X) {
      let U = X;
      Object.defineProperty(s, T, { get: function() {
        return U !== void 0 ? U : X;
      }, set: function(H) {
        U !== H && (U = H, r[T] = H, o[T] = H, s.dispatchEvent({ type: T + "-changed", value: H }), s.dispatchEvent(pt));
      } }), s[T] = X, r[T] = X, o[T] = X;
    }
    a("camera", t), a("object", void 0), a("enabled", true), a("axis", null), a("mode", "translate"), a("translationSnap", null), a("rotationSnap", null), a("scaleSnap", null), a("space", "world"), a("size", 1), a("dragging", false), a("showX", true), a("showY", true), a("showZ", true), a("minX", -1 / 0), a("maxX", 1 / 0), a("minY", -1 / 0), a("maxY", 1 / 0), a("minZ", -1 / 0), a("maxZ", 1 / 0);
    const c = new l(), m = new l(), y = new D(), b = new D(), O = new l(), C = new D(), L = new l(), E = new l(), g = new l(), f = 0, x = new l();
    a("worldPosition", c), a("worldPositionStart", m), a("worldQuaternion", y), a("worldQuaternionStart", b), a("cameraPosition", O), a("cameraQuaternion", C), a("pointStart", L), a("pointEnd", E), a("rotationAxis", g), a("rotationAngle", f), a("eye", x), this._offset = new l(), this._startNorm = new l(), this._endNorm = new l(), this._cameraScale = new l(), this._parentPosition = new l(), this._parentQuaternion = new D(), this._parentQuaternionInv = new D(), this._parentScale = new l(), this._worldScaleStart = new l(), this._worldQuaternionInv = new D(), this._worldScale = new l(), this._positionStart = new l(), this._quaternionStart = new D(), this._scaleStart = new l(), this._getPointer = te.bind(this), this._onPointerDown = ie.bind(this), this._onPointerHover = ee.bind(this), this._onPointerMove = se.bind(this), this._onPointerUp = ne.bind(this), i !== null && this.connect(i);
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "auto";
  }
  getHelper() {
    return this._root;
  }
  pointerHover(t) {
    if (this.object === void 0 || this.dragging === true) return;
    t !== null && N.setFromCamera(t, this.camera);
    const i = ut(this._gizmo.picker[this.mode], N);
    i ? this.axis = i.object.name : this.axis = null;
  }
  pointerDown(t) {
    if (!(this.object === void 0 || this.dragging === true || t != null && t.button !== 0) && this.axis !== null) {
      t !== null && N.setFromCamera(t, this.camera);
      const i = ut(this._plane, N, true);
      i && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(i.point).sub(this.worldPositionStart)), this.dragging = true, St.mode = this.mode, this.dispatchEvent(St);
    }
  }
  pointerMove(t) {
    const i = this.axis, n = this.mode, o = this.object;
    let r = this.space;
    if (n === "scale" ? r = "local" : (i === "E" || i === "XYZE" || i === "XYZ") && (r = "world"), o === void 0 || i === null || this.dragging === false || t !== null && t.button !== -1) return;
    t !== null && N.setFromCamera(t, this.camera);
    const s = ut(this._plane, N, true);
    if (s) {
      if (this.pointEnd.copy(s.point).sub(this.worldPositionStart), n === "translate") this._offset.copy(this.pointEnd).sub(this.pointStart), r === "local" && i !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), i.indexOf("X") === -1 && (this._offset.x = 0), i.indexOf("Y") === -1 && (this._offset.y = 0), i.indexOf("Z") === -1 && (this._offset.z = 0), r === "local" && i !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), o.position.copy(this._offset).add(this._positionStart), this.translationSnap && (r === "local" && (o.position.applyQuaternion(d.copy(this._quaternionStart).invert()), i.search("X") !== -1 && (o.position.x = Math.round(o.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (o.position.y = Math.round(o.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (o.position.z = Math.round(o.position.z / this.translationSnap) * this.translationSnap), o.position.applyQuaternion(this._quaternionStart)), r === "world" && (o.parent && o.position.add(w.setFromMatrixPosition(o.parent.matrixWorld)), i.search("X") !== -1 && (o.position.x = Math.round(o.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (o.position.y = Math.round(o.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (o.position.z = Math.round(o.position.z / this.translationSnap) * this.translationSnap), o.parent && o.position.sub(w.setFromMatrixPosition(o.parent.matrixWorld)))), o.position.x = Math.max(this.minX, Math.min(this.maxX, o.position.x)), o.position.y = Math.max(this.minY, Math.min(this.maxY, o.position.y)), o.position.z = Math.max(this.minZ, Math.min(this.maxZ, o.position.z));
      else if (n === "scale") {
        if (i.search("XYZ") !== -1) {
          let a = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (a *= -1), z.set(a, a, a);
        } else w.copy(this.pointStart), z.copy(this.pointEnd), w.applyQuaternion(this._worldQuaternionInv), z.applyQuaternion(this._worldQuaternionInv), z.divide(w), i.search("X") === -1 && (z.x = 1), i.search("Y") === -1 && (z.y = 1), i.search("Z") === -1 && (z.z = 1);
        o.scale.copy(this._scaleStart).multiply(z), this.scaleSnap && (i.search("X") !== -1 && (o.scale.x = Math.round(o.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Y") !== -1 && (o.scale.y = Math.round(o.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Z") !== -1 && (o.scale.z = Math.round(o.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (n === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const a = 20 / this.worldPosition.distanceTo(w.setFromMatrixPosition(this.camera.matrixWorld));
        let c = false;
        i === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(w.copy(this.rotationAxis).cross(this.eye)) * a) : (i === "X" || i === "Y" || i === "Z") && (this.rotationAxis.copy(Et[i]), w.copy(Et[i]), r === "local" && w.applyQuaternion(this.worldQuaternion), w.cross(this.eye), w.length() === 0 ? c = true : this.rotationAngle = this._offset.dot(w.normalize()) * a), (i === "E" || c) && (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), r === "local" && i !== "E" && i !== "XYZE" ? (o.quaternion.copy(this._quaternionStart), o.quaternion.multiply(d.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), o.quaternion.copy(d.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), o.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(pt), this.dispatchEvent(vt);
    }
  }
  pointerUp(t) {
    t !== null && t.button !== 0 || (this.dragging && this.axis !== null && (Mt.mode = this.mode, this.dispatchEvent(Mt)), this.dragging = false, this.axis = null);
  }
  dispose() {
    this.disconnect(), this._root.dispose();
  }
  attach(t) {
    return this.object = t, this._root.visible = true, this;
  }
  detach() {
    return this.object = void 0, this.axis = null, this._root.visible = false, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(pt), this.dispatchEvent(vt), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return N;
  }
  getMode() {
    return this.mode;
  }
  setMode(t) {
    this.mode = t;
  }
  setTranslationSnap(t) {
    this.translationSnap = t;
  }
  setRotationSnap(t) {
    this.rotationSnap = t;
  }
  setScaleSnap(t) {
    this.scaleSnap = t;
  }
  setSize(t) {
    this.size = t;
  }
  setSpace(t) {
    this.space = t;
  }
}
function te(e) {
  if (this.domElement.ownerDocument.pointerLockElement) return { x: 0, y: 0, button: e.button };
  {
    const t = this.domElement.getBoundingClientRect();
    return { x: (e.clientX - t.left) / t.width * 2 - 1, y: -(e.clientY - t.top) / t.height * 2 + 1, button: e.button };
  }
}
function ee(e) {
  if (this.enabled) switch (e.pointerType) {
    case "mouse":
    case "pen":
      this.pointerHover(this._getPointer(e));
      break;
  }
}
function ie(e) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(e.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(e)), this.pointerDown(this._getPointer(e)));
}
function se(e) {
  this.enabled && this.pointerMove(this._getPointer(e));
}
function ne(e) {
  this.enabled && (this.domElement.releasePointerCapture(e.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(e)));
}
function ut(e, t, i) {
  const n = t.intersectObject(e, true);
  for (let o = 0; o < n.length; o++) if (n[o].object.visible || i) return n[o];
  return false;
}
const at = new Wt(), u = new l(0, 1, 0), Tt = new l(0, 0, 0), xt = new Ct(), rt = new D(), ct = new D(), j = new l(), It = new Ct(), $ = new l(1, 0, 0), Q = new l(0, 1, 0), J = new l(0, 0, 1), ht = new l(), K = new l(), B = new l();
class oe extends ft {
  constructor(t) {
    super(), this.isTransformControlsRoot = true, this.controls = t, this.visible = false;
  }
  updateMatrixWorld(t) {
    const i = this.controls;
    i.object !== void 0 && (i.object.updateMatrixWorld(), i.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : i.object.parent.matrixWorld.decompose(i._parentPosition, i._parentQuaternion, i._parentScale), i.object.matrixWorld.decompose(i.worldPosition, i.worldQuaternion, i._worldScale), i._parentQuaternionInv.copy(i._parentQuaternion).invert(), i._worldQuaternionInv.copy(i.worldQuaternion).invert()), i.camera.updateMatrixWorld(), i.camera.matrixWorld.decompose(i.cameraPosition, i.cameraQuaternion, i._cameraScale), i.camera.isOrthographicCamera ? i.camera.getWorldDirection(i.eye).negate() : i.eye.copy(i.cameraPosition).sub(i.worldPosition).normalize(), super.updateMatrixWorld(t);
  }
  dispose() {
    this.traverse(function(t) {
      t.geometry && t.geometry.dispose(), t.material && t.material.dispose();
    });
  }
}
class ae extends ft {
  constructor() {
    super(), this.isTransformControlsGizmo = true, this.type = "TransformControlsGizmo";
    const t = new Rt({ depthTest: false, depthWrite: false, fog: false, toneMapped: false, transparent: true }), i = new Ft({ depthTest: false, depthWrite: false, fog: false, toneMapped: false, transparent: true }), n = t.clone();
    n.opacity = 0.15;
    const o = i.clone();
    o.opacity = 0.5;
    const r = t.clone();
    r.color.setHex(16711680);
    const s = t.clone();
    s.color.setHex(65280);
    const a = t.clone();
    a.color.setHex(255);
    const c = t.clone();
    c.color.setHex(16711680), c.opacity = 0.5;
    const m = t.clone();
    m.color.setHex(65280), m.opacity = 0.5;
    const y = t.clone();
    y.color.setHex(255), y.opacity = 0.5;
    const b = t.clone();
    b.opacity = 0.25;
    const O = t.clone();
    O.color.setHex(16776960), O.opacity = 0.25, t.clone().color.setHex(16776960);
    const L = t.clone();
    L.color.setHex(7895160);
    const E = new M(0, 0.04, 0.1, 12);
    E.translate(0, 0.05, 0);
    const g = new P(0.08, 0.08, 0.08);
    g.translate(0, 0.04, 0);
    const f = new wt();
    f.setAttribute("position", new gt([0, 0, 0, 1, 0, 0], 3));
    const x = new M(75e-4, 75e-4, 0.5, 3);
    x.translate(0, 0.25, 0);
    function T(I, et) {
      const A = new G(I, 75e-4, 3, 64, et * Math.PI * 2);
      return A.rotateY(Math.PI / 2), A.rotateX(Math.PI / 2), A;
    }
    function X() {
      const I = new wt();
      return I.setAttribute("position", new gt([0, 0, 0, 1, 1, 1], 3)), I;
    }
    const U = { X: [[new h(E, r), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new h(E, r), [-0.5, 0, 0], [0, 0, Math.PI / 2]], [new h(x, r), [0, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new h(E, s), [0, 0.5, 0]], [new h(E, s), [0, -0.5, 0], [Math.PI, 0, 0]], [new h(x, s)]], Z: [[new h(E, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new h(E, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]], [new h(x, a), null, [Math.PI / 2, 0, 0]]], XYZ: [[new h(new ot(0.1, 0), b.clone()), [0, 0, 0]]], XY: [[new h(new P(0.15, 0.15, 0.01), y.clone()), [0.15, 0.15, 0]]], YZ: [[new h(new P(0.15, 0.15, 0.01), c.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new h(new P(0.15, 0.15, 0.01), m.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]] }, H = { X: [[new h(new M(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]], [new h(new M(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new h(new M(0.2, 0, 0.6, 4), n), [0, 0.3, 0]], [new h(new M(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]], Z: [[new h(new M(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]], [new h(new M(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]], XYZ: [[new h(new ot(0.2, 0), n)]], XY: [[new h(new P(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]], YZ: [[new h(new P(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new h(new P(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]] }, Yt = { START: [[new h(new ot(0.01, 2), o), null, null, null, "helper"]], END: [[new h(new ot(0.01, 2), o), null, null, null, "helper"]], DELTA: [[new Z(X(), o), null, null, null, "helper"]], X: [[new Z(f, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new Z(f, o.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new Z(f, o.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] }, Lt = { XYZE: [[new h(T(0.5, 1), L), null, [0, Math.PI / 2, 0]]], X: [[new h(T(0.5, 0.5), r)]], Y: [[new h(T(0.5, 0.5), s), null, [0, 0, -Math.PI / 2]]], Z: [[new h(T(0.5, 0.5), a), null, [0, Math.PI / 2, 0]]], E: [[new h(T(0.75, 1), O), null, [0, Math.PI / 2, 0]]] }, Zt = { AXIS: [[new Z(f, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]] }, zt = { XYZE: [[new h(new qt(0.25, 10, 8), n)]], X: [[new h(new G(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]], Y: [[new h(new G(0.5, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]]], Z: [[new h(new G(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]]], E: [[new h(new G(0.75, 0.1, 2, 24), n)]] }, Xt = { X: [[new h(g, r), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new h(x, r), [0, 0, 0], [0, 0, -Math.PI / 2]], [new h(g, r), [-0.5, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new h(g, s), [0, 0.5, 0]], [new h(x, s)], [new h(g, s), [0, -0.5, 0], [0, 0, Math.PI]]], Z: [[new h(g, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new h(x, a), [0, 0, 0], [Math.PI / 2, 0, 0]], [new h(g, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]], XY: [[new h(new P(0.15, 0.15, 0.01), y), [0.15, 0.15, 0]]], YZ: [[new h(new P(0.15, 0.15, 0.01), c), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new h(new P(0.15, 0.15, 0.01), m), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]], XYZ: [[new h(new P(0.1, 0.1, 0.1), b.clone())]] }, Ht = { X: [[new h(new M(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]], [new h(new M(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new h(new M(0.2, 0, 0.6, 4), n), [0, 0.3, 0]], [new h(new M(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]], Z: [[new h(new M(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]], [new h(new M(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]], XY: [[new h(new P(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]], YZ: [[new h(new P(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new h(new P(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]], XYZ: [[new h(new P(0.2, 0.2, 0.2), n), [0, 0, 0]]] }, Nt = { X: [[new Z(f, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new Z(f, o.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new Z(f, o.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] };
    function Y(I) {
      const et = new ft();
      for (const A in I) for (let F = I[A].length; F--; ) {
        const S = I[A][F][0].clone(), it = I[A][F][1], st = I[A][F][2], nt = I[A][F][3], Qt = I[A][F][4];
        S.name = A, S.tag = Qt, it && S.position.set(it[0], it[1], it[2]), st && S.rotation.set(st[0], st[1], st[2]), nt && S.scale.set(nt[0], nt[1], nt[2]), S.updateMatrix();
        const bt = S.geometry.clone();
        bt.applyMatrix4(S.matrix), S.geometry = bt, S.renderOrder = 1 / 0, S.position.set(0, 0, 0), S.rotation.set(0, 0, 0), S.scale.set(1, 1, 1), et.add(S);
      }
      return et;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = Y(U)), this.add(this.gizmo.rotate = Y(Lt)), this.add(this.gizmo.scale = Y(Xt)), this.add(this.picker.translate = Y(H)), this.add(this.picker.rotate = Y(zt)), this.add(this.picker.scale = Y(Ht)), this.add(this.helper.translate = Y(Yt)), this.add(this.helper.rotate = Y(Zt)), this.add(this.helper.scale = Y(Nt)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
  updateMatrixWorld(t) {
    const n = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : ct;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let o = [];
    o = o.concat(this.picker[this.mode].children), o = o.concat(this.gizmo[this.mode].children), o = o.concat(this.helper[this.mode].children);
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      s.visible = true, s.rotation.set(0, 0, 0), s.position.copy(this.worldPosition);
      let a;
      if (this.camera.isOrthographicCamera ? a = (this.camera.top - this.camera.bottom) / this.camera.zoom : a = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), s.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), s.tag === "helper") {
        s.visible = false, s.name === "AXIS" ? (s.visible = !!this.axis, this.axis === "X" && (d.setFromEuler(at.set(0, 0, 0)), s.quaternion.copy(n).multiply(d), Math.abs(u.copy($).applyQuaternion(n).dot(this.eye)) > 0.9 && (s.visible = false)), this.axis === "Y" && (d.setFromEuler(at.set(0, 0, Math.PI / 2)), s.quaternion.copy(n).multiply(d), Math.abs(u.copy(Q).applyQuaternion(n).dot(this.eye)) > 0.9 && (s.visible = false)), this.axis === "Z" && (d.setFromEuler(at.set(0, Math.PI / 2, 0)), s.quaternion.copy(n).multiply(d), Math.abs(u.copy(J).applyQuaternion(n).dot(this.eye)) > 0.9 && (s.visible = false)), this.axis === "XYZE" && (d.setFromEuler(at.set(0, Math.PI / 2, 0)), u.copy(this.rotationAxis), s.quaternion.setFromRotationMatrix(xt.lookAt(Tt, u, Q)), s.quaternion.multiply(d), s.visible = this.dragging), this.axis === "E" && (s.visible = false)) : s.name === "START" ? (s.position.copy(this.worldPositionStart), s.visible = this.dragging) : s.name === "END" ? (s.position.copy(this.worldPosition), s.visible = this.dragging) : s.name === "DELTA" ? (s.position.copy(this.worldPositionStart), s.quaternion.copy(this.worldQuaternionStart), w.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), w.applyQuaternion(this.worldQuaternionStart.clone().invert()), s.scale.copy(w), s.visible = this.dragging) : (s.quaternion.copy(n), this.dragging ? s.position.copy(this.worldPositionStart) : s.position.copy(this.worldPosition), this.axis && (s.visible = this.axis.search(s.name) !== -1));
        continue;
      }
      s.quaternion.copy(n), this.mode === "translate" || this.mode === "scale" ? (s.name === "X" && Math.abs(u.copy($).applyQuaternion(n).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false), s.name === "Y" && Math.abs(u.copy(Q).applyQuaternion(n).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false), s.name === "Z" && Math.abs(u.copy(J).applyQuaternion(n).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false), s.name === "XY" && Math.abs(u.copy(J).applyQuaternion(n).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false), s.name === "YZ" && Math.abs(u.copy($).applyQuaternion(n).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false), s.name === "XZ" && Math.abs(u.copy(Q).applyQuaternion(n).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = false)) : this.mode === "rotate" && (rt.copy(n), u.copy(this.eye).applyQuaternion(d.copy(n).invert()), s.name.search("E") !== -1 && s.quaternion.setFromRotationMatrix(xt.lookAt(this.eye, Tt, Q)), s.name === "X" && (d.setFromAxisAngle($, Math.atan2(-u.y, u.z)), d.multiplyQuaternions(rt, d), s.quaternion.copy(d)), s.name === "Y" && (d.setFromAxisAngle(Q, Math.atan2(u.x, u.z)), d.multiplyQuaternions(rt, d), s.quaternion.copy(d)), s.name === "Z" && (d.setFromAxisAngle(J, Math.atan2(u.y, u.x)), d.multiplyQuaternions(rt, d), s.quaternion.copy(d))), s.visible = s.visible && (s.name.indexOf("X") === -1 || this.showX), s.visible = s.visible && (s.name.indexOf("Y") === -1 || this.showY), s.visible = s.visible && (s.name.indexOf("Z") === -1 || this.showZ), s.visible = s.visible && (s.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), s.material._color = s.material._color || s.material.color.clone(), s.material._opacity = s.material._opacity || s.material.opacity, s.material.color.copy(s.material._color), s.material.opacity = s.material._opacity, this.enabled && this.axis && (s.name === this.axis || this.axis.split("").some(function(c) {
        return s.name === c;
      })) && (s.material.color.setHex(16776960), s.material.opacity = 1);
    }
    super.updateMatrixWorld(t);
  }
}
class re extends h {
  constructor() {
    super(new Gt(1e5, 1e5, 2, 2), new Rt({ visible: false, wireframe: true, side: Kt, transparent: true, opacity: 0.1, toneMapped: false })), this.isTransformControlsPlane = true, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(t) {
    let i = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (i = "local"), ht.copy($).applyQuaternion(i === "local" ? this.worldQuaternion : ct), K.copy(Q).applyQuaternion(i === "local" ? this.worldQuaternion : ct), B.copy(J).applyQuaternion(i === "local" ? this.worldQuaternion : ct), u.copy(K), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            u.copy(this.eye).cross(ht), j.copy(ht).cross(u);
            break;
          case "Y":
            u.copy(this.eye).cross(K), j.copy(K).cross(u);
            break;
          case "Z":
            u.copy(this.eye).cross(B), j.copy(B).cross(u);
            break;
          case "XY":
            j.copy(B);
            break;
          case "YZ":
            j.copy(ht);
            break;
          case "XZ":
            u.copy(B), j.copy(K);
            break;
          case "XYZ":
          case "E":
            j.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        j.set(0, 0, 0);
    }
    j.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (It.lookAt(w.set(0, 0, 0), j, u), this.quaternion.setFromRotationMatrix(It)), super.updateMatrixWorld(t);
  }
}
const Dt = { type: "change" }, yt = { type: "start" }, kt = { type: "end" }, lt = new Bt(), Ot = new Vt(), he = Math.cos(70 * $t.DEG2RAD), _ = new l(), v = 2 * Math.PI, p = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, dt = 1e-6;
class Me extends At {
  constructor(t, i = null) {
    super(t, i), this.state = p.NONE, this.target = new l(), this.cursor = new l(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: W.ROTATE, MIDDLE: W.DOLLY, RIGHT: W.PAN }, this.touches = { ONE: q.ROTATE, TWO: q.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new l(), this._lastQuaternion = new D(), this._lastTargetPosition = new l(), this._quat = new D().setFromUnitVectors(t.up, new l(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Pt(), this._sphericalDelta = new Pt(), this._scale = 1, this._panOffset = new l(), this._rotateStart = new R(), this._rotateEnd = new R(), this._rotateDelta = new R(), this._panStart = new R(), this._panEnd = new R(), this._panDelta = new R(), this._dollyStart = new R(), this._dollyEnd = new R(), this._dollyDelta = new R(), this._dollyDirection = new l(), this._mouse = new R(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = ce.bind(this), this._onPointerDown = le.bind(this), this._onPointerUp = pe.bind(this), this._onContextMenu = be.bind(this), this._onMouseWheel = fe.bind(this), this._onKeyDown = _e.bind(this), this._onTouchStart = me.bind(this), this._onTouchMove = ye.bind(this), this._onMouseDown = ue.bind(this), this._onMouseMove = de.bind(this), this._interceptControlDown = we.bind(this), this._interceptControlUp = ge.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Dt), this.update(), this.state = p.NONE;
  }
  update(t = null) {
    const i = this.object.position;
    _.copy(i).sub(this.target), _.applyQuaternion(this._quat), this._spherical.setFromVector3(_), this.autoRotate && this.state === p.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, o = this.maxAzimuthAngle;
    isFinite(n) && isFinite(o) && (n < -Math.PI ? n += v : n > Math.PI && (n -= v), o < -Math.PI ? o += v : o > Math.PI && (o -= v), n <= o ? this._spherical.theta = Math.max(n, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + o) / 2 ? Math.max(n, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const s = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = s != this._spherical.radius;
    }
    if (_.setFromSpherical(this._spherical), _.applyQuaternion(this._quatInverse), i.copy(this.target).add(_), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let s = null;
      if (this.object.isPerspectiveCamera) {
        const a = _.length();
        s = this._clampDistance(a * this._scale);
        const c = a - s;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const a = new l(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const m = new l(this._mouse.x, this._mouse.y, 0);
        m.unproject(this.object), this.object.position.sub(m).add(a), this.object.updateMatrixWorld(), s = _.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      s !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position) : (lt.origin.copy(this.object.position), lt.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(lt.direction)) < he ? this.object.lookAt(this.target) : (Ot.setFromNormalAndCoplanarPoint(this.object.up, this.target), lt.intersectPlane(Ot, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const s = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), s !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > dt || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > dt || this._lastTargetPosition.distanceToSquared(this.target) > dt ? (this.dispatchEvent(Dt), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? v / 60 * this.autoRotateSpeed * t : v / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const i = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * i);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, i) {
    _.setFromMatrixColumn(i, 0), _.multiplyScalar(-t), this._panOffset.add(_);
  }
  _panUp(t, i) {
    this.screenSpacePanning === true ? _.setFromMatrixColumn(i, 1) : (_.setFromMatrixColumn(i, 0), _.crossVectors(this.object.up, _)), _.multiplyScalar(t), this._panOffset.add(_);
  }
  _pan(t, i) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const o = this.object.position;
      _.copy(o).sub(this.target);
      let r = _.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * i * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(i * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, i) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), o = t - n.left, r = i - n.top, s = n.width, a = n.height;
    this._mouse.x = o / s * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const i = this.domElement;
    this._rotateLeft(v * this._rotateDelta.x / i.clientHeight), this._rotateUp(v * this._rotateDelta.y / i.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let i = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(v * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), i = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-v * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), i = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(v * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), i = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-v * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), i = true;
        break;
    }
    i && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + i.x), o = 0.5 * (t.pageY + i.y);
      this._rotateStart.set(n, o);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + i.x), o = 0.5 * (t.pageY + i.y);
      this._panStart.set(n, o);
    }
  }
  _handleTouchStartDolly(t) {
    const i = this._getSecondPointerPosition(t), n = t.pageX - i.x, o = t.pageY - i.y, r = Math.sqrt(n * n + o * o);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), o = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(o, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const i = this.domElement;
    this._rotateLeft(v * this._rotateDelta.x / i.clientHeight), this._rotateUp(v * this._rotateDelta.y / i.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + i.x), o = 0.5 * (t.pageY + i.y);
      this._panEnd.set(n, o);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const i = this._getSecondPointerPosition(t), n = t.pageX - i.x, o = t.pageY - i.y, r = Math.sqrt(n * n + o * o);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const s = (t.pageX + i.x) * 0.5, a = (t.pageY + i.y) * 0.5;
    this._updateZoomParameters(s, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let i = 0; i < this._pointers.length; i++) if (this._pointers[i] == t.pointerId) {
      this._pointers.splice(i, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let i = 0; i < this._pointers.length; i++) if (this._pointers[i] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let i = this._pointerPositions[t.pointerId];
    i === void 0 && (i = new R(), this._pointerPositions[t.pointerId] = i), i.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const i = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[i];
  }
  _customWheelEvent(t) {
    const i = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (i) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function le(e) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e)));
}
function ce(e) {
  this.enabled !== false && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function pe(e) {
  switch (this._removePointer(e), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(kt), this.state = p.NONE;
      break;
    case 1:
      const t = this._pointers[0], i = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: i.x, pageY: i.y });
      break;
  }
}
function ue(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case W.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(e), this.state = p.DOLLY;
      break;
    case W.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e), this.state = p.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e), this.state = p.ROTATE;
      }
      break;
    case W.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e), this.state = p.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e), this.state = p.PAN;
      }
      break;
    default:
      this.state = p.NONE;
  }
  this.state !== p.NONE && this.dispatchEvent(yt);
}
function de(e) {
  switch (this.state) {
    case p.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(e);
      break;
    case p.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(e);
      break;
    case p.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(e);
      break;
  }
}
function fe(e) {
  this.enabled === false || this.enableZoom === false || this.state !== p.NONE || (e.preventDefault(), this.dispatchEvent(yt), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(kt));
}
function _e(e) {
  this.enabled !== false && this._handleKeyDown(e);
}
function me(e) {
  switch (this._trackPointer(e), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case q.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(e), this.state = p.TOUCH_ROTATE;
          break;
        case q.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(e), this.state = p.TOUCH_PAN;
          break;
        default:
          this.state = p.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case q.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(e), this.state = p.TOUCH_DOLLY_PAN;
          break;
        case q.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(e), this.state = p.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = p.NONE;
      }
      break;
    default:
      this.state = p.NONE;
  }
  this.state !== p.NONE && this.dispatchEvent(yt);
}
function ye(e) {
  switch (this._trackPointer(e), this.state) {
    case p.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(e), this.update();
      break;
    case p.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(e), this.update();
      break;
    case p.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(e), this.update();
      break;
    case p.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(e), this.update();
      break;
    default:
      this.state = p.NONE;
  }
}
function be(e) {
  this.enabled !== false && e.preventDefault();
}
function we(e) {
  e.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function ge(e) {
  e.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
export {
  tt as E,
  Jt as G,
  Me as O,
  Ee as T,
  Se as a
};
