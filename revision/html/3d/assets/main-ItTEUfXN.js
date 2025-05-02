import { _ as C, c as i, a as t, r as Q, o, n as me, b as A, w as S, d as y, e as w, f as H, g as $, t as g, u as I, h as Z, F as D, i as ne, v as ve, j as v, T as ee, k as te, l as fe, m as J, p as _e, s as we, q as ge, x as be, y as ke, z as he, A as ye } from "./SkeletonUtils-Bl7JM-Sp.js";
import { A as Ie, L as xe, T as $e, G as Se, a as Ce } from "./AssetLoader-EUCdTZkb.js";
import { u as oe, i as Fe } from "./i18n-C5xLlbDi.js";
const je = { class: "banner" }, Le = { class: "text" }, Ee = { __name: "Banner", setup(b) {
  return (a, r) => (o(), i("div", je, [t("span", Le, [Q(a.$slots, "default", {}, void 0)])]));
} }, Be = C(Ee, [["__scopeId", "data-v-b6531436"]]), Ae = { __name: "ButtonAction", props: { color: String }, setup(b) {
  const a = b;
  return (r, l) => (o(), i("button", { class: "action", style: me({ "background-color": a.color }) }, [Q(r.$slots, "default", {}, void 0)], 4));
} }, W = C(Ae, [["__scopeId", "data-v-5cdae08d"]]), Te = { __name: "ButtonDiscord", props: { assets: Object, volume: Number }, setup(b) {
  return (a, r) => (o(), A(W, { class: "action", title: "Discord Server" }, { default: S(() => r[0] || (r[0] = [t("img", { src: "./svg/discord.svg" }, null, -1)])), _: 1 }));
} }, Ue = C(Te, [["__scopeId", "data-v-e8ca55a2"]]), Oe = { __name: "ButtonFullScreen", setup(b) {
  function a() {
    return window.electron != null;
  }
  function r() {
    window.electron.toggleFullScreen();
  }
  return (l, f) => a() ? (o(), A(W, { key: 0, class: "action", title: "Fullscreen", onClick: r }, { default: S(() => f[0] || (f[0] = [t("span", { class: "material-symbols-rounded" }, "fullscreen", -1)])), _: 1 })) : y("", true);
} }, De = C(Oe, [["__scopeId", "data-v-34253722"]]), Pe = { key: 0, class: "material-symbols-rounded" }, Ve = { key: 1, class: "material-symbols-rounded" }, Ne = { __name: "ButtonVolume", props: { assets: Object, volume: Number }, setup(b) {
  return (a, r) => (o(), A(W, { class: "action", title: "Volume" }, { default: S(() => [b.volume != 0 ? (o(), i("span", Pe, "volume_up")) : (o(), i("span", Ve, "volume_off"))]), _: 1 }));
} }, Re = { __name: "ButtonReview", setup(b) {
  function a() {
    var l = "";
    navigator.userAgent.indexOf("Edg") != -1 ? l = "https://microsoftedge.microsoft.com/addons/detail/boxel-3d/gcklngphfijejfnnicbadhghhdifidek" : navigator.userAgent.indexOf("Chrome") != -1 ? l = "https://chromewebstore.google.com/detail/boxel-3d/mjjgmlmpeaikcaajghilhnioimmaibon/reviews" : navigator.userAgent.indexOf("Firefox") != -1 && (l = "https://addons.mozilla.org/en-US/firefox/addon/boxel-3d-game/"), r(l);
  }
  function r(l, f = "_blank") {
    chrome.tabs ? chrome.tabs.create({ url: l }) : window.open(l, f);
  }
  return (l, f) => (o(), A(W, { class: "action", onClick: f[0] || (f[0] = (h) => a()) }, { default: S(() => f[1] || (f[1] = [t("span", { class: "material-symbols-rounded" }, "favorite", -1), t("span", null, "Write a Review", -1)])), _: 1 }));
} }, We = C(Re, [["__scopeId", "data-v-c9cfbdec"]]), Me = { class: "card" }, Ke = ["src"], ze = { __name: "Card", props: ["src"], setup(b) {
  return (a, r) => (o(), i("button", Me, [t("img", { src: b.src }, null, 8, Ke), t("label", null, [Q(a.$slots, "default", {}, void 0)])]));
} }, se = C(ze, [["__scopeId", "data-v-8f2fb07e"]]), Ge = {}, qe = { class: "loader" };
function He(b, a) {
  return o(), i("div", qe, a[0] || (a[0] = [t("div", { class: "loader__circle" }, null, -1)]));
}
const Je = C(Ge, [["render", He], ["__scopeId", "data-v-b713aee1"]]), Qe = { class: "modal workshop" }, Xe = { class: "workshop__container" }, Ye = { class: "workshop__types" }, Ze = { class: "workshop__types-header" }, et = { class: "workshop__types-list" }, tt = ["onClick"], st = { class: "material-symbols-rounded" }, nt = { class: "workshop__items" }, ot = { class: "workshop__items-header" }, lt = ["placeholder"], at = ["disabled"], it = { key: 0 }, rt = { key: 0 }, ut = ["onClick"], ct = ["src", "alt"], dt = { key: 0 }, pt = ["value", "onChange"], mt = ["onClick", "title"], vt = { key: 0, class: "material-symbols-rounded" }, ft = { key: 1, class: "material-symbols-rounded" }, _t = ["onClick"], wt = ["onClick"], gt = { class: "workshop__info" }, bt = { class: "workshop__info-header" }, kt = { class: "workshop__info-content" }, ht = { class: "workshop__info-thumbnail" }, yt = ["src", "alt"], It = { key: 0 }, xt = { class: "workshop__info-details" }, $t = ["disabled"], St = ["disabled"], Ct = { key: 0, class: "workshop__loading" }, Ft = ["title"], jt = { __name: "ModalWorkshop", setup(b) {
  const a = oe({ useScope: "global" }), r = w(window.electron?.client != null), l = w(false), f = w(), h = w([{ title: "My Downloads", id: "subscriptions", icon: "download" }, { title: "My Uploads", id: "creations", icon: "upload" }]), T = w([]), L = w([]), m = w(h.value[0]), d = w({}), _ = w({}), P = H(() => (s) => {
    const e = s == d.value, n = s == null && Object.keys(d.value).length > 0;
    return e || n;
  }), F = w(""), E = H(() => (m.value.id == "subscriptions" ? T : L).value.filter((e) => e && Object.values(e).some((n) => n?.toString().toLowerCase().includes(F.value.toLowerCase())))), M = H(() => {
    const s = m.value.id == "creations", e = Object.keys(_.value).length > 0;
    return s && e && l.value == false;
  });
  function K() {
    F.value = "";
  }
  async function U(s) {
    m.value = s, m.value.id == "subscriptions" ? await q() : await c(), B();
  }
  function j(s) {
    d.value != s && (_.value = {}, d.value = s);
  }
  function B() {
    j(E.value[0] || {}), x();
  }
  function V(s, e) {
    return localStorage.getItem(`item_${s.publishedFileId}_${e}`);
  }
  function N(s, e, n) {
    s[e] = n, localStorage.setItem(`item_${s.publishedFileId}_${e}`, n);
  }
  function z(s) {
    let e = V(s, "enabled") === "true";
    e === false && Y(s), N(s, "enabled", !e);
  }
  function G(s) {
    setTimeout(() => {
      s.target.scrollLeft = s.target.scrollWidth, s.target.setSelectionRange(s.target.value.length, s.target.value.length);
    }, 100);
  }
  function O(s, e = "_self") {
    window.open(s, e);
  }
  async function q() {
    if (l.value = true, r.value == true) try {
      const s = window.electron.client.workshop.getSubscribedItems();
      if (s.length > 0) try {
        const n = (await window.electron.client.workshop.getItems(s)).items.filter((u) => u !== null);
        n.sort((u, k) => k.timeUpdated - u.timeUpdated), T.value = n, n.forEach(async (u) => {
          let k = V(u, "enabled");
          k === null ? k = true : k = k === "true", N(u, "enabled", k);
          const R = await window.electron.client.workshop.installInfo(u.publishedFileId);
          R && (await window.electron.getFileNames(R.folder)).length == 0 && Y(u);
        });
      } catch (e) {
        console.error(e);
      }
    } catch (s) {
      console.error(s);
    }
    l.value = false;
  }
  async function c() {
    if (l.value = true, r.value == true) {
      const s = window.electron.client.apps.appOwner(), e = window.electron.client.utils.getAppId();
      try {
        const u = (await window.electron.client.workshop.getUserItems(1, s.accountId, 0, 13, 0, { creator: e })).items;
        u.sort((k, R) => R.timeUpdated - k.timeUpdated), L.value = u;
      } catch (n) {
        console.error(n);
      }
    }
    l.value = false;
  }
  async function p() {
    try {
      l.value = true;
      const s = window.electron.client.utils.getAppId(), e = await window.electron.client.workshop.createItem(s), n = await window.electron.client.workshop.getItem(e.itemId), u = await window.electron.getFilePath("public/png/workshop-thumbnail.png"), k = { title: "New Workshop Item", description: "Workshop item description", previewPath: u, previewUrl: u };
      await X(n, k), l.value = false, Object.assign(n, k), L.value.unshift(n), B();
    } catch (s) {
      console.error(s);
    }
  }
  function x() {
    fe(() => {
      const s = E.value.findIndex((e) => e == d.value);
      s >= 0 && f.value.children[s].scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
  async function X(s, e) {
    let n;
    try {
      Object.assign(e, { visibility: 0 }), l.value = true, n = await window.electron.client.workshop.updateItem(s.publishedFileId, e);
    } catch (u) {
      console.error(u);
    }
    return l.value = false, n;
  }
  async function ae() {
    const s = await X(te(d.value), te(_.value));
    return _.value = {}, s;
  }
  function ie(s) {
    let e;
    return [".json"].some((n) => s.includes(n)) ? e = "Level" : [".js"].some((n) => s.includes(n)) ? e = "Mod" : [".png", ".jpg"].some((n) => s.includes(n)) && (e = "Skin"), e;
  }
  async function Y(s) {
    l.value = true;
    let e = await window.electron.client.workshop.download(s.publishedFileId, true);
    return l.value = false, e;
  }
  async function re(s) {
    j(s);
    const e = await electron.dialog({ properties: ["openFile", "multiSelections"], filters: [{ name: "Level File(s)", extensions: ["json"] }, { name: "Skin File(s)", extensions: ["jpg", "png"] }, { name: "Mod File(s)", extensions: ["js"] }] });
    if (e.canceled == false) {
      const n = [ie(e.filePaths[0])];
      Object.assign(_.value, { contentPath: e.filePaths[0], tags: n });
    }
  }
  function ue(s, e) {
    s.title = e.target.value, _.value.title = e.target.value;
  }
  function ce(s, e) {
    s.description = e.target.value, _.value.description = e.target.value;
  }
  async function de(s) {
    j(s);
    const e = await electron.dialog({ properties: ["openFile"], filters: [{ name: "Preview Image", extensions: ["png", "jpg", "gif"] }] });
    e.canceled == false && (s.previewUrl = e.filePaths[0], _.value.previewPath = e.filePaths[0]);
  }
  async function pe() {
    await U(m.value), B();
  }
  return (s, e) => (o(), A(ee, { name: "fade-modal", onBeforeEnter: pe }, { default: S(() => [t("div", Qe, [t("div", { class: "workshop__background", onClick: e[0] || (e[0] = (n) => s.$emit("close")) }), t("div", Xe, [t("div", Ye, [t("div", Ze, g(I(a).t("workshop.text.workshop")), 1), t("ul", et, [(o(true), i(D, null, Z(h.value, (n) => (o(), i("li", { key: n.id }, [t("button", { class: J({ selected: m.value == n }), onClick: (u) => U(n) }, [t("span", st, g(n.icon), 1), t("span", null, g(n.title), 1)], 10, tt)]))), 128))])]), t("div", nt, [t("div", ot, [ne(t("input", { class: "workshop__search", "onUpdate:modelValue": e[1] || (e[1] = (n) => F.value = n), placeholder: `${I(a).t("popup.text.search")}...`, type: "text" }, null, 8, lt), [[ve, F.value]]), e[11] || (e[11] = t("button", { class: "search-icon", tabindex: "-1" }, [t("span", { class: "material-symbols-rounded" }, "search")], -1)), F.value.length > 0 ? (o(), i("button", { key: 0, class: "clear-icon", onClick: e[2] || (e[2] = (n) => K()) }, e[10] || (e[10] = [t("span", { class: "material-symbols-rounded" }, "close", -1)]))) : y("", true)]), t("ul", { class: "workshop__items-list", ref_key: "itemsRef", ref: f }, [t("li", null, [m.value.id == "subscriptions" ? (o(), i("button", { key: 0, class: "primary", onClick: e[3] || (e[3] = (n) => O("https://steamcommunity.com/workshop/browse/?appid=3208440", "_blank")) }, [e[12] || (e[12] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, g(I(a).t("workshop.text.browse_items")), 1)])) : m.value.id == "creations" ? (o(), i("button", { key: 1, class: "primary", onClick: e[4] || (e[4] = (n) => p()), disabled: r.value == false }, [e[13] || (e[13] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, g(I(a).t("workshop.text.create_item")), 1)], 8, at)) : y("", true)]), E.value.length == 0 && l.value == false ? (o(), i("li", it, [t("div", null, [r.value == true ? (o(), i("ol", rt, e[14] || (e[14] = [t("li", null, [t("span", null, [t("strong", null, "Browse"), v(" the Steam Workshop for community levels, skins, and mods.")])], -1), t("li", null, [t("span", null, [v("Select any item you want to download, then click "), t("strong", null, "Subscribe"), v(".")])], -1), t("li", null, [t("span", null, [v("If you do not see your in-game subscriptions, "), t("strong", null, "restart"), v(" Boxel 3D.")])], -1)]))) : (o(), i(D, { key: 1 }, [e[15] || (e[15] = t("p", null, [v("The Steam Workshop allows players to download & share community content such as "), t("strong", null, "levels"), v(", "), t("strong", null, "skins"), v(", & "), t("strong", null, "mods")], -1)), e[16] || (e[16] = t("p", null, [v("This feature is only available on Steam. Add Boxel 3D to your "), t("em", null, [v("Steam Wishlist"), t("span", null, [v("Get emails for"), t("br"), v("Boxel 3D discounts")])]), v(" or purchase a copy today!")], -1)), e[17] || (e[17] = t("p", null, [t("a", { href: "https://store.steampowered.com/app/3208440/Boxel_3D/", target: "_blank" }, [t("img", { src: "./svg/steam.svg" }), t("span", null, "View Steam Page")])], -1))], 64))])])) : y("", true), (o(true), i(D, null, Z(E.value, (n) => (o(), i("li", { key: n.publishedFileId }, [t("button", { class: J({ selected: d.value == n }), onClick: (u) => j(n) }, [t("img", { src: n.previewUrl || void 0, alt: n.title }, null, 8, ct), m.value.id == "subscriptions" ? (o(), i("span", dt, g(n.title), 1)) : (o(), i(D, { key: 1 }, [t("input", { type: "text", value: n.title, onChange: (u) => ue(n, u), onFocus: e[5] || (e[5] = (u) => G(u)) }, null, 40, pt), e[18] || (e[18] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))], 64))], 10, ut), m.value.id == "subscriptions" ? (o(), i("button", { key: 0, onClick: (u) => z(n), title: n.enabled ? "Enabled" : "Disabled" }, [n.enabled === true ? (o(), i("span", vt, "select_check_box")) : (o(), i("span", ft, "check_box_outline_blank"))], 8, mt)) : y("", true), m.value.id == "creations" ? (o(), i("button", { key: 1, onClick: (u) => re(n), title: "Upload new content (ex: My Level.json)" }, e[19] || (e[19] = [t("span", { class: "material-symbols-rounded" }, "folder_open", -1)]), 8, _t)) : y("", true), t("button", { onClick: (u) => O("https://steamcommunity.com/sharedfiles/filedetails/?id=" + n.publishedFileId, "_blank"), title: "View item" }, e[20] || (e[20] = [t("span", { class: "material-symbols-rounded" }, "link", -1)]), 8, wt)]))), 128))], 512)]), t("div", gt, [t("div", bt, g(I(a).t("popup.text.info")), 1), t("div", kt, [t("div", ht, [t("img", { src: d.value.previewUrl || void 0, alt: d.value.description }, null, 8, yt), d.value.label ? (o(), i("label", It, [t("span", null, g(d.value.label), 1)])) : y("", true), P.value(null) && m.value.id == "creations" && r.value == true ? (o(), i("button", { key: 1, onClick: e[6] || (e[6] = (n) => de(d.value)) }, [e[21] || (e[21] = t("span", { class: "material-symbols-rounded" }, "edit", -1)), t("span", null, g(I(a).t("workshop.text.edit")), 1)])) : y("", true)]), t("div", xt, [(o(), i("textarea", { disabled: m.value.id == "subscriptions", onChange: e[7] || (e[7] = (n) => ce(d.value, n)), key: d.value.publishedFileId }, g(d.value.description), 41, $t)), e[22] || (e[22] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))]), m.value.id == "creations" ? (o(), i("button", { key: 0, disabled: M.value == false, onClick: e[8] || (e[8] = (n) => ae()) }, e[23] || (e[23] = [t("span", { class: "material-symbols-rounded" }, "save", -1), t("span", null, "Save", -1)]), 8, St)) : y("", true)])]), $(ee, { name: "loading" }, { default: S(() => [l.value ? (o(), i("div", Ct, [$(Je)])) : y("", true)]), _: 1 }), t("a", { class: "workshop__close", onClick: e[9] || (e[9] = (n) => s.$emit("close")), title: I(a).t("popup.button.close") }, e[24] || (e[24] = [t("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, Ft)])])]), _: 1 }));
} }, Lt = C(jt, [["__scopeId", "data-v-a2ff43bb"]]), Et = { class: "ui" }, Bt = { class: "nav" }, At = { class: "cards" }, Tt = { class: "footer" }, Ut = { __name: "App", setup(b) {
  const a = oe(), r = _e(JSON.parse(localStorage.getItem("settings") || '{"volume": 0}')), l = we(new Ie(F)), f = w(), h = w(false), T = w(false);
  let L = r.volume, m, d, _, P;
  function F() {
    _ = l.get("background-island-night"), P = xe.create("AmbientLight"), _.traverse(function(c) {
      c.isCamera && d.setCamera(c);
    }), d.setSize(window.innerWidth, window.innerHeight), d.scene.add(_, P), m.add(M, 1e3 / 60), m.start(), U(), V();
  }
  function E(c) {
    var p = l.get(c);
    p.play();
  }
  function M(c) {
    h.value == false && (_.mixer.update(c.delta), d.render());
  }
  function K() {
    r.volume > 0 ? (L = r.volume, r.volume = 0) : r.volume = L || 0.5, U();
  }
  function U() {
    localStorage.setItem("settings", JSON.stringify(r));
    const c = l.assetAudioLoader.listener, p = c.context.currentTime;
    c.gain.gain.setTargetAtTime(r.volume, p, 0);
  }
  function j(c, p = "_self", x = 0) {
    p == "_self" && (T.value = true, x = 250), setTimeout(() => {
      window.open(c, p);
    }, x);
  }
  function B() {
    document.documentElement.lang = a.locale.value;
  }
  function V() {
    location.href.includes("workshop=true") && (d.render(), h.value = true);
  }
  function N() {
    return window.chrome?.extension;
  }
  function z() {
    document.addEventListener("keydown", O), document.addEventListener("click", function(c) {
      E("click");
    });
  }
  function G() {
    document.removeEventListener("keydown", O);
  }
  function O(c) {
    q() && (c.code === "KeyI" && (c.ctrlKey && c.shiftKey || c.metaKey && c.shiftKey) ? window.electron.openDevTools() : c.code === "Escape" ? h.value == true ? h.value = false : window.electron.toggleFullScreen() : c.code === "F11" && window.electron.toggleFullScreen());
  }
  function q() {
    return window.electron != null;
  }
  return ge(a.locale, () => {
    B();
  }), be(function() {
    m = new $e(), d = new Se(f.value), l.load({ models: "./json/menu-models.json", textures: "./json/menu-textures.json", audio: "./json/menu-audio.json" }), z(), B();
  }), ke(function() {
    G();
  }), (c, p) => (o(), i(D, null, [t("canvas", { ref_key: "canvas", ref: f }, null, 512), t("div", Et, [t("div", Bt, [$(Ne, { assets: I(l), volume: r.volume, onClick: p[0] || (p[0] = (x) => {
    K();
  }) }, null, 8, ["assets", "volume"]), $(De), $(Ue, { onClick: p[1] || (p[1] = (x) => j("https://discord.gg/j8fvd4UvbE", "_blank")) })]), $(Be, null, { default: S(() => [v(g(I(a).t("home.title")), 1)]), _: 1 }), t("div", At, [$(se, { src: "./svg/button-steam.svg", onClick: p[2] || (p[2] = (x) => {
    h.value = true;
  }) }, { default: S(() => [v(g(I(a).t("home.button.workshop")), 1)]), _: 1 }), $(se, { src: "./svg/button-play.svg", onClick: p[3] || (p[3] = (x) => j("./v1/index.html")) }, { default: S(() => [v(g(I(a).t("home.button.play")), 1)]), _: 1 })]), t("div", Tt, [N() ? (o(), A(We, { key: 0 })) : y("", true)]), ne($(Lt, { onClose: p[4] || (p[4] = (x) => h.value = false) }, null, 512), [[he, h.value == true]]), $(Ce), t("div", { class: J(["fade-exit", { "is-exiting": T.value }]) }, null, 2)])], 64));
} }, Ot = C(Ut, [["__scopeId", "data-v-95a2bb6f"]]), le = ye(Ot);
le.use(Fe);
le.mount("#app");
