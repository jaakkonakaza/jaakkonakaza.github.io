import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, o as onMount } from "../../chunks/index-4bc72cb7.js";
import { g as goto } from "../../chunks/navigation-e4bf2424.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-an3ixs");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function getLang() {
  let lang = "en";
  if (navigator.languages != void 0) {
    lang = navigator.languages[0];
  }
  lang = navigator.language;
  lang = lang.substring(0, 2);
  if (lang === "ja" || lang === "fi") {
    return lang;
  }
  return "en";
}
function instance($$self) {
  onMount(() => goto(getLang()));
  return [];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
