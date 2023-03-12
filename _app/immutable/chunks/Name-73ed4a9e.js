import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, K as append_hydration, u as set_data, C as noop, L as component_subscribe } from "./index-129eb85f.js";
import { t } from "./translations-f4fcc980.js";
const Name_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let h1;
  let t0_value = (
    /*$t*/
    ctx[0]("name") + ""
  );
  let t0;
  let t1;
  let h2;
  let t2_value = (
    /*$t*/
    ctx[0]("role") + ""
  );
  let t2;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      h2 = element("h2");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      h2 = claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, t2_value);
      h2_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-5dwdu8");
      attr(h2, "class", "svelte-5dwdu8");
      attr(div, "class", "bubble svelte-5dwdu8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      append_hydration(div, h2);
      append_hydration(h2, t2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$t*/
      1 && t0_value !== (t0_value = /*$t*/
      ctx2[0]("name") + ""))
        set_data(t0, t0_value);
      if (dirty & /*$t*/
      1 && t2_value !== (t2_value = /*$t*/
      ctx2[0]("role") + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(0, $t = $$value));
  return [$t];
}
class Name extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Name as N
};
