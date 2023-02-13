import { w as writable, d as derived } from "./index-21f83505.js";
import { X as get_store_value } from "./index-f811e5e3.js";
var q$1 = Object.defineProperty, B$1 = Object.defineProperties;
var G$1 = Object.getOwnPropertyDescriptors;
var S$1 = Object.getOwnPropertySymbols;
var N$1 = Object.prototype.hasOwnProperty, A$1 = Object.prototype.propertyIsEnumerable;
var j = (s2, e, t3) => e in s2 ? q$1(s2, e, { enumerable: true, configurable: true, writable: true, value: t3 }) : s2[e] = t3, n$1 = (s2, e) => {
  for (var t3 in e || (e = {}))
    N$1.call(e, t3) && j(s2, t3, e[t3]);
  if (S$1)
    for (var t3 of S$1(e))
      A$1.call(e, t3) && j(s2, t3, e[t3]);
  return s2;
}, d$2 = (s2, e) => B$1(s2, G$1(e));
var m$1 = (s2, e) => {
  var t3 = {};
  for (var r in s2)
    N$1.call(s2, r) && e.indexOf(r) < 0 && (t3[r] = s2[r]);
  if (s2 != null && S$1)
    for (var r of S$1(s2))
      e.indexOf(r) < 0 && A$1.call(s2, r) && (t3[r] = s2[r]);
  return t3;
};
var R$1 = ["error", "warn", "debug"], F = ({ logger: s2 = console, level: e = R$1[1], prefix: t3 = "[i18n]: " }) => R$1.reduce((r, a, o) => d$2(n$1({}, r), { [a]: (i2) => R$1.indexOf(e) >= o && s2[a](`${t3}${i2}`) }), {}), l$1 = F({}), E$1 = (s2) => {
  l$1 = s2;
};
var O$1 = (g) => {
  var u2 = g, { parser: s2, key: e, params: t3, translations: r, locale: a, fallbackLocale: o } = u2, i2 = m$1(u2, ["parser", "key", "params", "translations", "locale", "fallbackLocale"]);
  if (!(e && a))
    return l$1.warn("No translation key or locale provided. Skipping translation..."), "";
  let p2 = (r[a] || {})[e];
  return o && p2 === void 0 && (p2 = (r[o] || {})[e]), i2.hasOwnProperty("fallbackValue") && p2 === void 0 ? i2.fallbackValue : s2.parse(p2, t3, a, e);
}, f$1 = (...s2) => s2.length ? s2.filter((e) => !!e).map((e) => {
  let t3 = `${e}`.toLowerCase();
  try {
    let [r] = Intl.Collator.supportedLocalesOf(e);
    if (!r)
      throw new Error(`'${e}' is non-standard.`);
    t3 = r;
  } catch {
    l$1.warn(`Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`);
  }
  return t3;
}) : [], w$1 = (s2, e) => Object.keys(s2 || {}).reduce((t3, r) => {
  let a = s2[r], o = e ? `${e}.${r}` : `${r}`;
  return a && typeof a == "object" ? n$1(n$1({}, t3), w$1(a, o)) : d$2(n$1({}, t3), { [o]: a });
}, {}), W$1 = async (s2) => {
  try {
    return (await Promise.all(s2.map((a) => {
      var o = a, { loader: t3 } = o, r = m$1(o, ["loader"]);
      return new Promise(async (i2) => {
        let g;
        try {
          g = await t3();
        } catch (u2) {
          l$1.error(`Failed to load translation. Verify your '${r.locale}' > '${r.key}' Loader.`), l$1.error(u2);
        }
        i2(d$2(n$1({ loader: t3 }, r), { data: g }));
      });
    }))).reduce((t3, { key: r, data: a, locale: o }) => {
      if (!a)
        return t3;
      let [i2] = f$1(o);
      return d$2(n$1({}, t3), { [i2]: w$1(d$2(n$1({}, t3[i2] || {}), { [r]: a })) });
    }, {});
  } catch (e) {
    l$1.error(e);
  }
  return {};
}, D$1 = (s2) => (e) => {
  try {
    if (typeof e == "string")
      return e === s2;
    if (typeof e == "object")
      return e.test(s2);
  } catch {
    l$1.error("Invalid route config!");
  }
  return false;
}, I = (s2, e) => {
  let t3 = true;
  try {
    t3 = Object.keys(s2).filter((r) => s2[r] !== void 0).every((r) => s2[r] === e[r]);
  } catch {
  }
  return t3;
};
var H$1 = 1e3 * 60 * 60 * 24, z$1 = class z {
  constructor(e) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (e2, t3) => {
      let r = Array.from(this.promises).filter((a) => I({ locale: f$1(e2)[0], route: t3 }, a)).map(({ promise: a }) => a);
      return Promise.all(r);
    }, get: () => get_store_value(this.isLoading) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get_store_value(this.translations) };
    this.locales = d$2(n$1({}, derived([this.config, this.privateTranslations], ([e2, t3]) => {
      if (!e2)
        return [];
      let { loaders: r = [] } = e2, a = r.map(({ locale: i2 }) => i2), o = Object.keys(t3).map((i2) => i2);
      return Array.from(/* @__PURE__ */ new Set([...f$1(...a), ...f$1(...o)]));
    }, [])), { get: () => get_store_value(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([e2, t3], r) => {
      var a, o;
      e2 !== void 0 && t3 !== void 0 && !(e2 === ((a = get_store_value(this.loaderTrigger)) == null ? void 0 : a[0]) && t3 === ((o = get_store_value(this.loaderTrigger)) == null ? void 0 : o[1])) && (l$1.debug("Triggering translation load..."), r([e2, t3]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get_store_value(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([e2, t3, r], a) => {
      get_store_value(this.initialized) || a(e2 !== void 0 && t3 !== void 0 && !!Object.keys(r).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([e2, t3, r], a) => {
      let o = e2[t3];
      o && Object.keys(o).length && !r && a(o);
    }, {});
    this.t = d$2(n$1({}, derived([this.config, this.translation], (a) => {
      var [o] = a, i2 = o, { parser: e2, fallbackLocale: t3 } = i2, r = m$1(i2, ["parser", "fallbackLocale"]);
      return (g, ...u2) => O$1(n$1({ parser: e2, key: g, params: u2, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: t3 }, r.hasOwnProperty("fallbackValue") ? { fallbackValue: r.fallbackValue } : {}));
    })), { get: (e2, ...t3) => get_store_value(this.t)(e2, ...t3) });
    this.l = d$2(n$1({}, derived([this.config, this.translations], (o) => {
      var [i2, ...g] = o, u2 = i2, { parser: e2, fallbackLocale: t3 } = u2, r = m$1(u2, ["parser", "fallbackLocale"]), [a] = g;
      return (p2, v2, ...k2) => O$1(n$1({ parser: e2, key: v2, params: k2, translations: a, locale: p2, fallbackLocale: t3 }, r.hasOwnProperty("fallbackValue") ? { fallbackValue: r.fallbackValue } : {}));
    })), { get: (e2, t3, ...r) => get_store_value(this.l)(e2, t3, ...r) });
    this.getLocale = (e2) => {
      let { fallbackLocale: t3 = "" } = get_store_value(this.config) || {}, r = e2 || t3;
      if (!r)
        return "";
      let a = this.locales.get();
      return a.find((i2) => f$1(r).includes(i2)) || a.find((i2) => f$1(t3).includes(i2)) || "";
    };
    this.setLocale = (e2) => {
      if (!!e2 && e2 !== get_store_value(this.internalLocale))
        return l$1.debug(`Setting '${e2}' locale.`), this.internalLocale.set(e2), this.loading.toPromise(e2, get_store_value(this.currentRoute));
    };
    this.setRoute = (e2) => {
      if (e2 !== get_store_value(this.currentRoute)) {
        l$1.debug(`Setting '${e2}' route.`), this.currentRoute.set(e2);
        let t3 = get_store_value(this.internalLocale);
        return this.loading.toPromise(t3, e2);
      }
    };
    this.loadConfig = async (e2) => {
      await this.configLoader(e2);
    };
    this.getTranslationProps = async (e2 = this.locale.get(), t3 = get_store_value(this.currentRoute)) => {
      let r = get_store_value(this.config);
      if (!r || !e2)
        return [];
      let a = this.translations.get(), { loaders: o, fallbackLocale: i2 = "", cache: g = H$1 } = r || {}, u2 = Number.isNaN(+g) ? H$1 : +g;
      this.cachedAt ? Date.now() > u2 + this.cachedAt && (l$1.debug("Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (l$1.debug("Setting cache timestamp."), this.cachedAt = Date.now());
      let [p2, v2] = f$1(e2, i2), k2 = a[p2], M2 = a[v2], C2 = (o || []).map((K) => {
        var L = K, { locale: h2 } = L, b = m$1(L, ["locale"]);
        return d$2(n$1({}, b), { locale: f$1(h2)[0] });
      }).filter(({ routes: h2 }) => !h2 || (h2 || []).some(D$1(t3))).filter(({ key: h2, locale: b }) => b === p2 && (!k2 || !(this.loadedKeys[p2] || []).includes(h2)) || i2 && b === v2 && (!M2 || !(this.loadedKeys[v2] || []).includes(h2)));
      if (C2.length) {
        this.isLoading.set(true), l$1.debug("Fetching translations...");
        let h2 = await W$1(C2);
        this.isLoading.set(false);
        let b = Object.keys(h2).reduce((L, y) => d$2(n$1({}, L), { [y]: Object.keys(h2[y]) }), {}), K = C2.filter(({ key: L, locale: y }) => (b[y] || []).some((x) => `${x}`.startsWith(L))).reduce((L, { key: y, locale: x }) => d$2(n$1({}, L), { [x]: [...L[x] || [], y] }), {});
        return [h2, K];
      }
      return [];
    };
    this.addTranslations = (e2, t3) => {
      if (!e2)
        return;
      l$1.debug("Adding translations...");
      let r = Object.keys(e2 || {});
      this.privateTranslations.update((a) => r.reduce((o, i2) => d$2(n$1({}, o), { [i2]: n$1(n$1({}, o[i2] || {}), w$1(e2[i2])) }), a)), r.forEach((a) => {
        let o = Object.keys(e2[a]).map((i2) => `${i2}`.split(".")[0]);
        t3 && (o = t3[a]), this.loadedKeys[a] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[a] || [], ...o || []]));
      });
    };
    this.loader = async ([e2, t3]) => {
      let r = this.getLocale(e2);
      l$1.debug(`Adding loader promise for '${r}' locale and '${t3}' route.`);
      let a = (async () => {
        let o = await this.getTranslationProps(r, t3);
        o.length && this.addTranslations(...o);
      })();
      this.promises.add({ locale: r, route: t3, promise: a }), a.then(() => {
        r && this.locale.get() !== r && this.locale.forceSet(r);
      });
    };
    this.loadTranslations = (e2, t3 = get_store_value(this.currentRoute) || "") => {
      let r = this.getLocale(e2);
      if (!!r)
        return this.setRoute(t3), this.setLocale(r), this.loading.toPromise(r, t3);
    };
    this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (t3) => {
      t3 && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), l$1.debug("Loader promises have been purged."));
    }), e && this.loadConfig(e);
  }
  async configLoader(e) {
    if (!e)
      return l$1.error("No config provided!");
    let g = e, { initLocale: t3, fallbackLocale: r, translations: a, log: o } = g, i2 = m$1(g, ["initLocale", "fallbackLocale", "translations", "log"]);
    o && E$1(F(o)), [t3] = f$1(t3), [r] = f$1(r), l$1.debug("Setting config."), this.config.set(n$1({ initLocale: t3, fallbackLocale: r, translations: a }, i2)), a && this.addTranslations(a), await this.loadTranslations(t3);
  }
};
var R = Object.defineProperty, E = Object.defineProperties;
var v$1 = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var w = (t3, e, r) => e in t3 ? R(t3, e, { enumerable: true, configurable: true, writable: true, value: r }) : t3[e] = r, u$1 = (t3, e) => {
  for (var r in e || (e = {}))
    C.call(e, r) && w(t3, r, e[r]);
  if (k)
    for (var r of k(e))
      O.call(e, r) && w(t3, r, e[r]);
  return t3;
}, $ = (t3, e) => E(t3, v$1(e));
var d$1 = (t3, e) => {
  var r = {};
  for (var i2 in t3)
    C.call(t3, i2) && e.indexOf(i2) < 0 && (r[i2] = t3[i2]);
  if (t3 != null && k)
    for (var i2 of k(t3))
      e.indexOf(i2) < 0 && O.call(t3, i2) && (r[i2] = t3[i2]);
  return r;
};
var z2 = (t3, e) => {
  for (var r in e)
    R(t3, r, { get: e[r], enumerable: true });
};
var h = {};
z2(h, { ago: () => X, date: () => Q, eq: () => p$1, gt: () => q, gte: () => H, lt: () => U, lte: () => G, ne: () => B, number: () => J });
var T = (t3, e) => {
  let { modifierDefaults: r } = e || {}, { [t3]: i2 } = r || {};
  return i2 || {};
};
var p$1 = ({ value: t3, options: e = [], defaultValue: r = "" }) => (e.find(({ key: i2 }) => `${i2}`.toLowerCase() === `${t3}`.toLowerCase()) || {}).value || r, B = ({ value: t3, options: e = [], defaultValue: r = "" }) => (e.find(({ key: i2 }) => `${i2}`.toLowerCase() !== `${t3}`.toLowerCase()) || {}).value || r, U = ({ value: t3, options: e = [], defaultValue: r = "" }) => (e.sort((o, n2) => +o.key - +n2.key).find(({ key: o }) => +t3 < +o) || {}).value || r, q = ({ value: t3, options: e = [], defaultValue: r = "" }) => (e.sort((o, n2) => +n2.key - +o.key).find(({ key: o }) => +t3 > +o) || {}).value || r, G = ({ value: t3, options: e = [], defaultValue: r = "" }) => p$1({ value: t3, options: e, defaultValue: U({ value: t3, options: e, defaultValue: r }) }), H = ({ value: t3, options: e = [], defaultValue: r = "" }) => p$1({ value: t3, options: e, defaultValue: q({ value: t3, options: e, defaultValue: r }) }), J = ({ value: t3, props: e, defaultValue: r = "", locale: i2 = "", parserOptions: o }) => {
  if (!i2)
    return "";
  let s2 = T("number", o), { maximumFractionDigits: n2 } = s2, m2 = d$1(s2, ["maximumFractionDigits"]), c = (e == null ? void 0 : e.number) || {}, { maximumFractionDigits: f2 = n2 || 2 } = c, a = d$1(c, ["maximumFractionDigits"]);
  return new Intl.NumberFormat(i2, u$1($(u$1({}, m2), { maximumFractionDigits: f2 }), a)).format(+t3 || +r);
}, Q = ({ value: t3, props: e, defaultValue: r = "", locale: i2 = "", parserOptions: o }) => {
  if (!i2)
    return "";
  let n2 = d$1(T("date", o), []), m2 = d$1((e == null ? void 0 : e.date) || {}, []);
  return new Intl.DateTimeFormat(i2, u$1(u$1({}, n2), m2)).format(+t3 || +r);
}, P$1 = [{ key: "second", multiplier: 1e3 }, { key: "minute", multiplier: 60 }, { key: "hour", multiplier: 60 }, { key: "day", multiplier: 24 }, { key: "week", multiplier: 7 }, { key: "month", multiplier: 13 / 3 }, { key: "year", multiplier: 12 }], N = (t3 = "", e = "") => new RegExp(`^${t3}s?$`).test(e), S = (t3) => P$1.indexOf(P$1.find(({ key: e }) => N(e, t3))), W = (t3, e) => P$1.reduce(([r, i2], { key: o, multiplier: n2 }, m2) => {
  if (N(i2, e))
    return [r, i2];
  if (!i2 || m2 === S(i2) + 1) {
    let f2 = Math.round(r / n2);
    if (!i2 || Math.abs(f2) >= 1 || e !== "auto")
      return [f2, o];
  }
  return [r, i2];
}, [t3, ""]), X = ({ value: t3, defaultValue: e = "", locale: r = "", props: i2, parserOptions: o }) => {
  if (!r)
    return "";
  let g = T("ago", o), { format: n2, numeric: m2 } = g, f2 = d$1(g, ["format", "numeric"]), l2 = (i2 == null ? void 0 : i2.ago) || {}, { format: a = n2 || "auto", numeric: s2 = m2 || "auto" } = l2, c = d$1(l2, ["format", "numeric"]), x = +t3 || +e, M2 = W(x, a);
  return new Intl.RelativeTimeFormat(r, u$1($(u$1({}, f2), { numeric: s2 }), c)).format(...M2);
};
var Y = (t3) => typeof t3 == "string" && /{{(?:(?!{{|}}).)+}}/.test(t3), D = (t3) => typeof t3 == "string" ? t3.replace(/\\(?=:|;|{|})/g, "") : t3, Z = ({ value: t3, props: e, payload: r, parserOptions: i2, locale: o }) => `${t3}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g, (n2) => {
  let m2 = D(`${n2.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`), f2 = r == null ? void 0 : r[m2], [, a = ""] = n2.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i) || [];
  a = a || (r == null ? void 0 : r.default) || "";
  let [, s2 = ""] = n2.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i) || [];
  if (f2 === void 0 && s2 !== "ne")
    return a;
  let c = !!s2, { customModifiers: x } = i2 || {}, M2 = u$1(u$1({}, h), x || {});
  s2 = Object.keys(M2).includes(s2) ? s2 : "eq";
  let g = M2[s2], l2 = (n2.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi) || []).reduce((F2, b, j2) => {
    if (j2 > 0) {
      let y = D(`${b.match(/(?:(?:\\:)|[^:])+/)}`.trim()), I2 = `${b.match(/(?:(?:\\:)|[^:])+$/)}`.trim();
      if (y && y !== "default" && I2)
        return [...F2, { key: y, value: I2 }];
    }
    return F2;
  }, []);
  return !c && !l2.length ? f2 : g({ value: f2, options: l2, props: e, defaultValue: a, locale: o, parserOptions: i2 });
}), A = ({ value: t3, props: e, payload: r, parserOptions: i2, locale: o }) => {
  if (Y(t3)) {
    let n2 = Z({ value: t3, payload: r, props: e, parserOptions: i2, locale: o });
    return A({ value: n2, payload: r, props: e, parserOptions: i2, locale: o });
  } else
    return D(t3);
}, _ = (t3) => ({ parse: (e, [r, i2], o, n2) => ((r == null ? void 0 : r.default) && e === void 0 && (e = `${r.default}`), e === void 0 && (e = `${n2}`), A({ value: e, payload: r, props: i2, parserOptions: t3, locale: o })) }), rt = _;
var n = Object.defineProperty, M = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: true, configurable: true, writable: true, value: e }) : r[o] = e, p = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && i(r, e, o[e]);
  if (s)
    for (var e of s(o))
      P.call(o, e) && i(r, e, o[e]);
  return r;
}, d = (r, o) => M(r, u(o));
var l = (r, o) => {
  var e = {};
  for (var a in r)
    f.call(r, a) && o.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && s)
    for (var a of s(r))
      o.indexOf(a) < 0 && P.call(r, a) && (e[a] = r[a]);
  return e;
};
var m = (e) => {
  var a = e, { parserOptions: r = {} } = a, o = l(a, ["parserOptions"]);
  return d(p({}, o), { parser: rt(r) });
}, t$1 = class t extends z$1 {
  constructor(e) {
    super(e && m(e));
    this.loadConfig = (e2) => super.configLoader(m(e2));
  }
}, v = t$1;
const config = {
  translations: {
    en: {
      name: "Jaakko Nakaza",
      role: "software developer",
      about: "I am a software developer from Finland, currently studying Computer Science at Aalto University and working there as a software developer and head teaching assistant. I have experience in developing educational tools, applications, and user interfaces. My strongest programming languages are TypeScript, Java, and Scala, and I have a strong understanding of React.js for developing web applications and React Native for developing mobile applications. I am also skilled in graphic design, with experience in designing logos and branding for several projects. With my expertise in software development and design, I am able to create efficient and user-friendly solutions that meet the needs of my clients.",
      workHistory: "Work History",
      projects: "Projects",
      graphicDesign: "Graphic Design",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      beamex: "Beamex",
      beamexRole: "Software Engineer",
      beamexDescription: "",
      beamexPeriod: "Aug 2022 - Present",
      aalto: "Aalto University",
      assistantRole: "Head Teaching Assistant",
      assistantDescription: "As the Head Teaching Assistant for an introductory programming course in Scala, I am part of a team developing a course for approximately 1000 students each year. My responsibilities include providing guidance and support to students, as well as creating and implementing effective unit tests for grading purposes. In 2022, I was instrumental in transitioning the tests to Scala 3, and worked on improving the efficiency of the grading process through the utilization of Docker technology. Additionally, I used my skills in graphic design to enhance the visual appeal of the course (see Graphic Design).",
      assistantPeriod: "Jun 2021 - Present",
      aaltoRole: "Software Engineer",
      aaltoDescription: "As a team member for the development of a plugin for IntelliJ IDEA, I have honed my skills in Java as well as other programming languages such as Python, Kotlin, Scala, and Bash scripts. I have utilized GitHub Actions for Continuous Integration purposes and have contributed to the overall design and aesthetic of the project, including the creation of the logo and the visual representation of the README.\n\nIn 2022, I further demonstrated my abilities by designing and developing a web application for creating tutorials for the plugin. This application features a live preview of what the tutorial will look like in IntelliJ and was built using React.js. The app was published through GitHub Pages.",
      aaltoPeriod: "Jan 2021 - Present"
    },
    fi: {
      name: "Jaakko Nakaza",
      role: "ohjelmistokehittäjä",
      about: "Olen ohjelmistokehittäjä Suomesta, opiskelen tällä hetkellä tietotekniikkaa Aalto-yliopistossa, jossa työskentelen myös ohjelmistokehittäjänä ja pääkurssiassistenttina. Minulla on kokemusta opetustyökalujen, sovellusten ja käyttöliittymien kehittämisestä. Vahvimmat ohjelmointikieleni ovat TypeScript, Java ja Scala, ja minulla on vahva osaamus React.js:llä web-sovellusten kehittämisestä ja React Nativelle mobiilisovellusten kehittämisestä. Olen myös taitava graafisessa suunnittelussa, ja minulla on kokemusta logojen ja brändin suunnittelusta useissa projekteissa. Ohjelmistokehityksen ja -suunnittelun asiantuntemukseni ansiosta pystyn luomaan tehokkaita ja käyttäjäystävällisiä ratkaisuja, jotka vastaavat asiakkaideni tarpeita.",
      workHistory: "Työhistoria",
      projects: "Projektit",
      graphicDesign: "Graafinen Suunnittelu",
      darkMode: "Tumma Teema",
      lightMode: "Vaalea Teema"
    },
    ja: {
      name: "仲座ヤーッコ",
      role: "ソフト開発者",
      about: "私はフィンランド出身のソフトウェア開発者です。現在アールト大学でコンピュータサイエンスを学び、ソフトウェア開発者兼ヘッドティーチングアシスタントとして働いています。教育ツール、アプリケーション、ユーザーインターフェイスの開発経験があります。得意なプログラミング言語はTypeScript、Java、Scalaで、Webアプリケーション開発のためのReact.jsとモバイルアプリケーション開発のためのReact Nativeに強い理解があります。また、グラフィックデザインにも長けており、いくつかのプロジェクトでロゴやブランディングのデザインを担当した経験もあります。ソフトウェア開発とデザインの専門知識を生かし、クライアントのニーズを満たす効率的でユーザーフレンドリーなソリューションを作成することができます。",
      workHistory: "職歴",
      projects: "プロジェクト",
      graphicDesign: "グラフィックデザイン",
      darkMode: "ダークテーマ",
      lightMode: "ライトテーマ"
    }
  }
};
const { t: t2, locale, locales, loading, loadTranslations, translations } = new v(config);
export {
  loadTranslations as a,
  locale as l,
  t2 as t
};
