import { _ as G, e as V, b as Q, w as W, c as X, d as $, a as P, n as C, u as D, t as J, T as Z, o as E, P as O, N as f, b5 as Y, W as g, b6 as y, b7 as v, b8 as K, a0 as A, $ as M, aw as q, Q as S, R as ee, S as k, U as te, X as R, Y as re, Z as ae, M as ie, V as L, a1 as se, a2 as ne, a3 as U, a5 as N, a6 as oe, a7 as le, a8 as de, aa as he, ab as ue, b9 as F, ba as ce, bb as fe, aE as pe, bc as ge, am as me, bd as ve, b1 as xe, G as Te, E as we, I as Me, J as Se, aB as ye, C as _e, B as be, D as Pe, be as De, K as Be } from "./SkeletonUtils-Bl7JM-Sp.js";
const Ce = { key: 0, class: "loading" }, Ee = { class: "bar" }, ke = { class: "label" }, Re = { __name: "Loading", setup(d) {
  var e = V({ urls: "", index: 0, max: 1, percent: 0 });
  function t(a) {
    e.value = a;
  }
  function r() {
    return e.value.percent == 100;
  }
  return window.addEventListener("updateLoading", function(a) {
    t(a.detail);
  }), (a, i) => (E(), Q(Z, { name: "fade-loading" }, { default: W(() => [r() == false ? (E(), X("div", Ce, [P("div", Ee, [P("div", { class: "boxel", style: C({ left: `calc(${D(e).percent}% - 1em)` }) }, null, 4), P("div", { class: "progress", style: C({ width: D(e).percent + "%" }) }, null, 4)]), P("div", ke, "Loading: " + J(D(e).percent) + "%", 1)])) : $("", true)]), _: 1 }));
} }, je = G(Re, [["__scopeId", "data-v-96273571"]]);
class Ge {
  constructor() {
    this.loops = [], this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.speed = 1, this.running = false, this.index = 0;
  }
  add(e, t = 1e3 / 60) {
    const r = new Le(e, t);
    this.loops.push(r);
  }
  get(e) {
    return this.loops[e];
  }
  tick(e) {
    if (this.running == true && (this.index = requestAnimationFrame(e), this.loops.length > 0)) for (var t = this.getDelta(), r = this.loops[0].sum / this.loops[0].rate, a = this.loops.length - 1; a >= 0; a--) this.loops[a].sum += t, (this.loops[a].sum >= this.loops[a].rate || this.loops[a].rate == -1) && (this.loops[a].sum %= this.loops[a].rate, this.loops[a].callback({ delta: this.loops[a].rate == -1 ? t : this.loops[a].rate, alpha: a == 0 ? 0 : r, index: this.index }));
  }
  start() {
    this.reset();
    var e = function() {
      this.tick(e);
    }.bind(this);
    e();
  }
  stop() {
    this.getElapsedTime(), this.running = false;
  }
  reset() {
    this.startTime = this.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    for (var e = this.loops.length - 1; e >= 0; e--) this.loops[e].reset();
  }
  isRunning() {
    return this.running;
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
class Le {
  constructor(e = () => {
  }, t) {
    this.rate = t / 1e3, this.sum = 0, this.alpha = 0, this.callback = e, t < 0 && (this.rate = -1);
  }
  reset() {
    this.sum = 0, this.alpha = 0;
  }
}
class ze extends O {
  constructor(e, t, r, a = {}) {
    super(), this.pixelSize = e, this.scene = t, this.camera = r, this.normalEdgeStrength = a.normalEdgeStrength || 0.3, this.depthEdgeStrength = a.depthEdgeStrength || 0.4, this.pixelatedMaterial = this._createPixelatedMaterial(), this._resolution = new f(), this._renderResolution = new f(), this._normalMaterial = new Y(), this._beautyRenderTarget = new g(), this._beautyRenderTarget.texture.minFilter = y, this._beautyRenderTarget.texture.magFilter = y, this._beautyRenderTarget.texture.type = v, this._beautyRenderTarget.depthTexture = new K(), this._normalRenderTarget = new g(), this._normalRenderTarget.texture.minFilter = y, this._normalRenderTarget.texture.magFilter = y, this._normalRenderTarget.texture.type = v, this._fsQuad = new A(this.pixelatedMaterial);
  }
  dispose() {
    this._beautyRenderTarget.dispose(), this._normalRenderTarget.dispose(), this.pixelatedMaterial.dispose(), this._normalMaterial.dispose(), this._fsQuad.dispose();
  }
  setSize(e, t) {
    this._resolution.set(e, t), this._renderResolution.set(e / this.pixelSize | 0, t / this.pixelSize | 0);
    const { x: r, y: a } = this._renderResolution;
    this._beautyRenderTarget.setSize(r, a), this._normalRenderTarget.setSize(r, a), this._fsQuad.material.uniforms.resolution.value.set(r, a, 1 / r, 1 / a);
  }
  setPixelSize(e) {
    this.pixelSize = e, this.setSize(this._resolution.x, this._resolution.y);
  }
  render(e, t) {
    const r = this._fsQuad.material.uniforms;
    r.normalEdgeStrength.value = this.normalEdgeStrength, r.depthEdgeStrength.value = this.depthEdgeStrength, e.setRenderTarget(this._beautyRenderTarget), e.render(this.scene, this.camera);
    const a = this.scene.overrideMaterial;
    e.setRenderTarget(this._normalRenderTarget), this.scene.overrideMaterial = this._normalMaterial, e.render(this.scene, this.camera), this.scene.overrideMaterial = a, r.tDiffuse.value = this._beautyRenderTarget.texture, r.tDepth.value = this._beautyRenderTarget.depthTexture, r.tNormal.value = this._normalRenderTarget.texture, this.renderToScreen ? e.setRenderTarget(null) : (e.setRenderTarget(t), this.clear && e.clear()), this._fsQuad.render(e);
  }
  _createPixelatedMaterial() {
    return new M({ uniforms: { tDiffuse: { value: null }, tDepth: { value: null }, tNormal: { value: null }, resolution: { value: new q() }, normalEdgeStrength: { value: 0 }, depthEdgeStrength: { value: 0 } }, vertexShader: `
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`, fragmentShader: `
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			` });
  }
}
class x extends O {
  constructor(e, t, r, a) {
    super(), this.renderScene = t, this.renderCamera = r, this.selectedObjects = a !== void 0 ? a : [], this.visibleEdgeColor = new S(1, 1, 1), this.hiddenEdgeColor = new S(0.1, 0.04, 0.02), this.edgeGlow = 0, this.usePatternTexture = false, this.patternTexture = null, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, this._visibilityCache = /* @__PURE__ */ new Map(), this._selectionCache = /* @__PURE__ */ new Set(), this.resolution = e !== void 0 ? new f(e.x, e.y) : new f(256, 256);
    const i = Math.round(this.resolution.x / this.downSampleRatio), s = Math.round(this.resolution.y / this.downSampleRatio);
    this.renderTargetMaskBuffer = new g(this.resolution.x, this.resolution.y), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = false, this.depthMaterial = new ee(), this.depthMaterial.side = k, this.depthMaterial.depthPacking = te, this.depthMaterial.blending = R, this.prepareMaskMaterial = this._getPrepareMaskMaterial(), this.prepareMaskMaterial.side = k, this.prepareMaskMaterial.fragmentShader = h(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new g(this.resolution.x, this.resolution.y, { type: v }), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = false, this.renderTargetMaskDownSampleBuffer = new g(i, s, { type: v }), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = false, this.renderTargetBlurBuffer1 = new g(i, s, { type: v }), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = false, this.renderTargetBlurBuffer2 = new g(Math.round(i / 2), Math.round(s / 2), { type: v }), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = false, this.edgeDetectionMaterial = this._getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new g(i, s, { type: v }), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = false, this.renderTargetEdgeBuffer2 = new g(Math.round(i / 2), Math.round(s / 2), { type: v }), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = false;
    const n = 4, c = 4;
    this.separableBlurMaterial1 = this._getSeparableBlurMaterial(n), this.separableBlurMaterial1.uniforms.texSize.value.set(i, s), this.separableBlurMaterial1.uniforms.kernelRadius.value = 1, this.separableBlurMaterial2 = this._getSeparableBlurMaterial(c), this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i / 2), Math.round(s / 2)), this.separableBlurMaterial2.uniforms.kernelRadius.value = c, this.overlayMaterial = this._getOverlayMaterial();
    const o = ae;
    this.copyUniforms = re.clone(o.uniforms), this.materialCopy = new M({ uniforms: this.copyUniforms, vertexShader: o.vertexShader, fragmentShader: o.fragmentShader, blending: R, depthTest: false, depthWrite: false }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new S(), this.oldClearAlpha = 1, this._fsQuad = new A(null), this.tempPulseColor1 = new S(), this.tempPulseColor2 = new S(), this.textureMatrix = new ie();
    function h(u, p) {
      const m = p.isPerspectiveCamera ? "perspective" : "orthographic";
      return u.replace(/DEPTH_TO_VIEW_Z/g, m + "DepthToViewZ");
    }
  }
  dispose() {
    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose(), this.depthMaterial.dispose(), this.prepareMaskMaterial.dispose(), this.edgeDetectionMaterial.dispose(), this.separableBlurMaterial1.dispose(), this.separableBlurMaterial2.dispose(), this.overlayMaterial.dispose(), this.materialCopy.dispose(), this._fsQuad.dispose();
  }
  setSize(e, t) {
    this.renderTargetMaskBuffer.setSize(e, t), this.renderTargetDepthBuffer.setSize(e, t);
    let r = Math.round(e / this.downSampleRatio), a = Math.round(t / this.downSampleRatio);
    this.renderTargetMaskDownSampleBuffer.setSize(r, a), this.renderTargetBlurBuffer1.setSize(r, a), this.renderTargetEdgeBuffer1.setSize(r, a), this.separableBlurMaterial1.uniforms.texSize.value.set(r, a), r = Math.round(r / 2), a = Math.round(a / 2), this.renderTargetBlurBuffer2.setSize(r, a), this.renderTargetEdgeBuffer2.setSize(r, a), this.separableBlurMaterial2.uniforms.texSize.value.set(r, a);
  }
  render(e, t, r, a, i) {
    if (this.selectedObjects.length > 0) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const s = e.autoClear;
      e.autoClear = false, i && e.state.buffers.stencil.setTest(false), e.setClearColor(16777215, 1), this._updateSelectionCache(), this._changeVisibilityOfSelectedObjects(false);
      const n = this.renderScene.background, c = this.renderScene.overrideMaterial;
      if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, e.setRenderTarget(this.renderTargetDepthBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this._changeVisibilityOfSelectedObjects(true), this._visibilityCache.clear(), this._updateTextureMatrix(), this._changeVisibilityOfNonSelectedObjects(false), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms.depthTexture.value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms.textureMatrix.value = this.textureMatrix, e.setRenderTarget(this.renderTargetMaskBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this._changeVisibilityOfNonSelectedObjects(true), this._visibilityCache.clear(), this._selectionCache.clear(), this.renderScene.background = n, this.renderScene.overrideMaterial = c, this._fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetMaskBuffer.texture, e.setRenderTarget(this.renderTargetMaskDownSampleBuffer), e.clear(), this._fsQuad.render(e), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
        const o = 0.625 + Math.cos(performance.now() * 0.01 / this.pulsePeriod) * 0.75 / 2;
        this.tempPulseColor1.multiplyScalar(o), this.tempPulseColor2.multiplyScalar(o);
      }
      this._fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms.maskTexture.value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value = this.tempPulseColor2, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = x.BlurDirectionX, this.separableBlurMaterial1.uniforms.kernelRadius.value = this.edgeThickness, e.setRenderTarget(this.renderTargetBlurBuffer1), e.clear(), this._fsQuad.render(e), this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = x.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms.direction.value = x.BlurDirectionX, e.setRenderTarget(this.renderTargetBlurBuffer2), e.clear(), this._fsQuad.render(e), this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms.direction.value = x.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer2), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms.maskTexture.value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms.edgeTexture1.value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms.edgeTexture2.value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms.patternTexture.value = this.patternTexture, this.overlayMaterial.uniforms.edgeStrength.value = this.edgeStrength, this.overlayMaterial.uniforms.edgeGlow.value = this.edgeGlow, this.overlayMaterial.uniforms.usePatternTexture.value = this.usePatternTexture, i && e.state.buffers.stencil.setTest(true), e.setRenderTarget(r), this._fsQuad.render(e), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = s;
    }
    this.renderToScreen && (this._fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = r.texture, e.setRenderTarget(null), this._fsQuad.render(e));
  }
  _updateSelectionCache() {
    const e = this._selectionCache;
    function t(r) {
      r.isMesh && e.add(r);
    }
    e.clear();
    for (let r = 0; r < this.selectedObjects.length; r++) this.selectedObjects[r].traverse(t);
  }
  _changeVisibilityOfSelectedObjects(e) {
    const t = this._visibilityCache;
    for (const r of this._selectionCache) e === true ? r.visible = t.get(r) : (t.set(r, r.visible), r.visible = e);
  }
  _changeVisibilityOfNonSelectedObjects(e) {
    const t = this._visibilityCache, r = this._selectionCache;
    function a(i) {
      if (i.isMesh || i.isSprite) {
        if (!r.has(i)) {
          const s = i.visible;
          (e === false || t.get(i) === true) && (i.visible = e), t.set(i, s);
        }
      } else (i.isPoints || i.isLine) && (e === true ? i.visible = t.get(i) : (t.set(i, i.visible), i.visible = e));
    }
    this.renderScene.traverse(a);
  }
  _updateTextureMatrix() {
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse);
  }
  _getPrepareMaskMaterial() {
    return new M({ uniforms: { depthTexture: { value: null }, cameraNearFar: { value: new f(0.5, 0.5) }, textureMatrix: { value: null } }, vertexShader: `#include <morphtarget_pars_vertex>
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
  _getEdgeDetectionMaterial() {
    return new M({ uniforms: { maskTexture: { value: null }, texSize: { value: new f(0.5, 0.5) }, visibleEdgeColor: { value: new L(1, 1, 1) }, hiddenEdgeColor: { value: new L(1, 1, 1) } }, vertexShader: `varying vec2 vUv;

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
  _getSeparableBlurMaterial(e) {
    return new M({ defines: { MAX_RADIUS: e }, uniforms: { colorTexture: { value: null }, texSize: { value: new f(0.5, 0.5) }, direction: { value: new f(0.5, 0.5) }, kernelRadius: { value: 1 } }, vertexShader: `varying vec2 vUv;

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
  _getOverlayMaterial() {
    return new M({ uniforms: { maskTexture: { value: null }, edgeTexture1: { value: null }, edgeTexture2: { value: null }, patternTexture: { value: null }, edgeStrength: { value: 1 }, edgeGlow: { value: 1 }, usePatternTexture: { value: 0 } }, vertexShader: `varying vec2 vUv;

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
				}`, blending: se, depthTest: false, depthWrite: false, transparent: true });
  }
}
x.BlurDirectionX = new f(1, 0);
x.BlurDirectionY = new f(0, 1);
var _ = function() {
  var d = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), r(++d % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function r(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    d = h;
  }
  var a = (performance || Date).now(), i = a, s = 0, n = t(new _.Panel("FPS", "#0ff", "#002")), c = t(new _.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var o = t(new _.Panel("MB", "#f08", "#201"));
  return r(0), { REVISION: 16, dom: e, addPanel: t, showPanel: r, begin: function() {
    a = (performance || Date).now();
  }, end: function() {
    s++;
    var h = (performance || Date).now();
    if (c.update(h - a, 200), h >= i + 1e3 && (n.update(s * 1e3 / (h - i), 100), i = h, s = 0, o)) {
      var u = performance.memory;
      o.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    a = this.end();
  }, domElement: e, setMode: r };
};
_.Panel = function(d, e, t) {
  var r = 1 / 0, a = 0, i = Math.round, s = i(window.devicePixelRatio || 1), n = 80 * s, c = 48 * s, o = 3 * s, h = 2 * s, u = 3 * s, p = 15 * s, m = 74 * s, T = 30 * s, w = document.createElement("canvas");
  w.width = n, w.height = c, w.style.cssText = "width:80px;height:48px";
  var l = w.getContext("2d");
  return l.font = "bold " + 9 * s + "px Helvetica,Arial,sans-serif", l.textBaseline = "top", l.fillStyle = t, l.fillRect(0, 0, n, c), l.fillStyle = e, l.fillText(d, o, h), l.fillRect(u, p, m, T), l.fillStyle = t, l.globalAlpha = 0.9, l.fillRect(u, p, m, T), { dom: w, update: function(b, j) {
    r = Math.min(r, b), a = Math.max(a, b), l.fillStyle = t, l.globalAlpha = 1, l.fillRect(0, 0, n, p), l.fillStyle = e, l.fillText(i(b) + " " + d + " (" + i(r) + "-" + i(a) + ")", o, h), l.drawImage(w, u + s, p, m - s, T, u, p, m - s, T), l.fillRect(u + m - s, p, s, T), l.fillStyle = t, l.globalAlpha = 0.9, l.fillRect(u + m - s, p, s, i((1 - b / j) * T));
  } };
};
class Ve {
  constructor(e = document.createElement("canvas")) {
    this.camera = new ne(45, window.innerWidth / window.innerHeight, 1, 100), this.scene = new U(), this.canvas = e, this.stats = new _(), window.devicePixelRatio = 1, this.renderer = new N({ alpha: true, canvas: e }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = false, this.renderer.shadowMap.type = oe, this.renderPass = new le(this.scene, this.camera), this.outputPass = new de(), this.outlinePass = new x({ x: window.innerWidth, y: window.innerHeight }, this.scene, this.camera), this.outlinePass.edgeStrength = 3, this.outlinePass.edgeGlow = 0, this.outlinePass.edgeThickness = 0.125, this.outlinePass.visibleEdgeColor.set("#000000"), this.outlinePass.hiddenEdgeColor.set("#000000"), this.outlinePass.enabled = true, this.smaaPass = new he(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio), this.smaaPass.enabled = false, this.pixelatedPass = new ze(2, this.scene, this.camera), this.pixelatedPass.normalEdgeStrength = 1, this.pixelatedPass.depthEdgeStrength = 1, this.pixelatedPass.enabled = false, this.composer = new ue(this.renderer), this.composer.addPass(this.renderPass), this.composer.addPass(this.pixelatedPass), this.composer.addPass(this.outlinePass), this.composer.addPass(this.smaaPass), this.composer.addPass(this.outputPass), this.resize = this.resize.bind(this), window.addEventListener("resize", this.resize), window.dispatchEvent(new Event("resize"));
  }
  render() {
    this.stats.begin(), this.composer.render(), this.stats.end();
  }
  resize(e) {
    var t = e.target.innerWidth, r = e.target.innerHeight;
    this.setSize(t, r);
  }
  setSize(e, t) {
    var r = e / t;
    this.camera.isOrthographicCamera && (this.camera.left = -r * 0.5, this.camera.right = r * 0.5, this.camera.top = 0.5, this.camera.bottom = -0.5), this.camera.aspect = r, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.composer.setSize(e, t);
  }
  setCamera(e) {
    this.camera = e, this.renderPass.camera = e, this.pixelatedPass.camera = e, this.outlinePass.renderCamera = e;
  }
  setScene(e) {
    this.scene = e, this.scene.fog = this.fog, this.renderPass.scene = e, this.pixelatedPass.scene = e, this.outlinePass.renderScene = e;
  }
  setShadows(e = true) {
    this.renderer.shadowMap.enabled = e, this.scene.traverse(function(t) {
      t.material && (t.castShadow = e, t.receiveShadow = e, t.material.needsUpdate = true);
    });
  }
  setSelectedObjects(e = []) {
    this.outlinePass.selectedObjects = e;
  }
  addStats() {
    document.body.appendChild(this.stats.dom);
  }
  removeStats() {
    document.body.removeChild(this.stats.dom);
  }
}
class Qe {
  constructor() {
  }
  static create(e = "PointLight", t) {
    var r, a;
    if (t = Object.assign({ color: "#ffffff", decay: 2, distance: 0, groundColor: "#000000", intensity: Math.PI, castShadow: false, skyColor: "#ffffff" }, t), e == "AmbientLight" ? r = new F(t.color, t.intensity) : e == "DirectionalLight" ? (r = new ce(t.color, t.intensity), a = new fe(r)) : e == "HemisphereLight" ? (r = new pe(t.skyColor, t.groundColor, t.intensity), a = new ge(r)) : e == "PointLight" && (r = new me(t.color, t.intensity, t.distance, t.decay), a = new ve(r)), r == null) {
      console.error(`Error: Light type "${e}" does not exists.`);
      return;
    }
    return t.castShadow && (r.castShadow = true), t.helper == true && a && (r.addEventListener("added", function(i) {
      r.parent.add(a);
    }), r.addEventListener("removed", function(i) {
      a.removeFromParent();
    })), r;
  }
}
class Oe extends Te {
  constructor(e) {
    super(e);
  }
  async load(e) {
    try {
      var t = await fetch(e), r = await t.json();
      for (const [a, i] of Object.entries(r)) super.load(i.url, function(s) {
        var n = s.scene;
        n.name = a, n.animations = s.animations, n.userData = { ...i.userData }, n.duplicate = this.duplicate.bind(this, n), this.manager.cache[a] = n, this.addMixer(n);
      }.bind(this), function(s) {
      }, function(s) {
        console.error(s);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    const t = we(e);
    return this.addMixer(t), t;
  }
  addMixer(e) {
    if (e.animations.length > 0) {
      var t = e.userData.loop || 2201;
      e.mixer = new Me(e), e.actions = {};
      for (var r = 0; r < e.animations.length; r++) {
        var a = e.animations[r], i = e.mixer.clipAction(a);
        t == 2200 && (i.setLoop(t), i.clampWhenFinished = true), i.play(), i.setEffectiveWeight(0), e.actions[a.name] = i, r == 0 && (e.actions.active = i, i.setEffectiveWeight(1));
      }
      e.play = function(s, n = 1) {
        var c = e.actions.active, o = e.actions[s];
        o && o != c && (c == null ? (o.setEffectiveWeight(1), o.reset().fadeIn(n)) : (c.setEffectiveWeight(1), o.setEffectiveWeight(1), o.reset().crossFadeFrom(c, n)), o.duration = n, e.actions.active = o);
      };
    }
  }
  renderThumbnail(e, t) {
    t = Object.assign({ height: 64, position: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, width: 64 }, t);
    const r = e.position.clone(), a = e.scale.clone();
    return e.position.copy(t.position), e.scale.copy(t.scale), B.add(e), z.setSize(t.width, t.height), z.render(B, H), e.removeFromParent(), e.position.copy(r), e.scale.copy(a), I.toDataURL("image/png");
  }
}
const Ae = new F("#ffffff", Math.PI), B = new U(), I = document.createElement("canvas"), z = new N({ alpha: true, canvas: I }), H = new xe(-0.5, 0.5, 0.5, -0.5, 0.01, 100);
B.add(Ae);
H.position.z = 10;
class Ue extends Se {
  constructor(e) {
    super(e);
  }
  async load(e) {
    try {
      var t = await fetch(e), r = await t.json();
      for (const [a, i] of Object.entries(r)) super.load(i.url, function(s) {
        s.colorSpace = ye, s.name = a, s.magFilter = i.magFilter || y, s.duplicate = this.duplicate.bind(this, s), i.center && s.center.copy(i.center), i.repeat && s.repeat.copy(i.repeat), this.manager.cache[a] = s;
      }.bind(this), void 0, function(s) {
        console.error(`Error: Texture "${i.url}" not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return e = e.clone(), e;
  }
}
class Ne extends _e {
  constructor(e) {
    super(e), this.listener = new be();
  }
  async load(e) {
    try {
      var t = await fetch(e), r = await t.json();
      for (const [a, i] of Object.entries(r)) super.load(i.url, function(s) {
        var n = new Pe(this.listener);
        n.name = a, n.setBuffer(s), n.duplicate = this.duplicate.bind(this, n), i.userData && (n.userData = i.userData, n.userData.loop && n.setLoop(n.userData.loop), n.userData.volume && n.setVolume(n.userData.volume)), this.manager.cache[a] = n;
      }.bind(this), function(s) {
      }, function(s) {
        console.error(`Error: Audio "${i.url}" not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return console.warn("AudioLoader: Audio cannot be cloned."), e;
  }
}
class Fe extends De {
  constructor(e) {
    super(e), this.setMimeType("application/json"), this.setResponseType("json");
  }
  async load(e) {
    try {
      var t = await fetch(e), r = await t.json();
      for (const [a, i] of Object.entries(r)) super.load(i.url, function(s) {
        this.manager.cache[a] = s;
      }.bind(this), function(s) {
      }, function(s) {
        console.error(`Error: File ${i.url} not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return JSON.parse(JSON.stringify(e));
  }
}
class We extends Be {
  constructor(e, t, r) {
    super(e, Ie.bind(t), r), this.cache = {}, this.assetModelLoader = new Oe(this), this.assetTextureLoader = new Ue(this), this.assetAudioLoader = new Ne(this), this.assetJSONLoader = new Fe(this);
  }
  load(e = {}) {
    e.models && this.assetModelLoader.load(e.models), e.textures && this.assetTextureLoader.load(e.textures), e.audio && this.assetAudioLoader.load(e.audio), e.json && this.assetJSONLoader.load(e.json);
  }
  get(e) {
    var t = this.cache[e];
    return t;
  }
  duplicate(e) {
    var t = this.get(e);
    return t && (t = t.duplicate()), t;
  }
}
function Ie(d, e, t) {
  var r = Math.ceil(e / t * 100);
  dispatchEvent(new CustomEvent("updateLoading", { detail: { url: d, itemsLoaded: e, itemsTotal: t, percent: r } })), typeof this == "function" && this(d, e, t);
}
export {
  We as A,
  Ve as G,
  Qe as L,
  Ge as T,
  je as a
};
