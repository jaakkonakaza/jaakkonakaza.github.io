import { a as loadTranslations } from "./translations-931747f1.js";
const load = async ({ params }) => {
  const lang = params.lang;
  await loadTranslations(lang);
  return {};
};
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _layout as _,
  load as l
};