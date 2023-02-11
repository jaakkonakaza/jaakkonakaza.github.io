import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, T as head_selector, h as detach, c as claim_space, l as claim_element, m as children, r as claim_text, n as attr, b as insert_hydration, K as append_hydration, u as set_data, O as add_render_callback, Q as create_out_transition, L as component_subscribe, P as create_in_transition } from "../../../chunks/index-4063d2b1.js";
import { t } from "../../../chunks/translations-38606d26.js";
/* empty css                            */import { b as blur } from "../../../chunks/index-f85f5ab5.js";
import { n as navigating } from "../../../chunks/stores-f5aaf9b9.js";
const _400 = "";
const _500 = "";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let t0;
  let div1;
  let div0;
  let h1;
  let t1_value = (
    /*$t*/
    ctx[1]("name") + ""
  );
  let t1;
  let t2;
  let h2;
  let t3_value = (
    /*$t*/
    ctx[1]("role") + ""
  );
  let t3;
  let t4;
  let p;
  let t5_value = (
    /*$t*/
    ctx[1]("about") + ""
  );
  let t5;
  let div1_intro;
  let div1_outro;
  let current;
  return {
    c() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      h2 = element("h2");
      t3 = text(t3_value);
      t4 = space();
      p = element("p");
      t5 = text(t5_value);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1eo4e2f", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, t3_value);
      h2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t5 = claim_text(p_nodes, t5_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza";
      attr(h1, "class", "svelte-1f7yrr6");
      attr(h2, "class", "svelte-1f7yrr6");
      attr(div0, "class", "bubble svelte-1f7yrr6");
      attr(p, "class", "bubble svelte-1f7yrr6");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h1);
      append_hydration(h1, t1);
      append_hydration(div0, t2);
      append_hydration(div0, h2);
      append_hydration(h2, t3);
      append_hydration(div1, t4);
      append_hydration(div1, p);
      append_hydration(p, t5);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if ((!current || dirty & /*$t*/
      2) && t1_value !== (t1_value = /*$t*/
      ctx[1]("name") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & /*$t*/
      2) && t3_value !== (t3_value = /*$t*/
      ctx[1]("role") + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & /*$t*/
      2) && t5_value !== (t5_value = /*$t*/
      ctx[1]("about") + ""))
        set_data(t5, t5_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        var _a, _b, _c, _d;
        if (div1_outro)
          div1_outro.end(1);
        div1_intro = create_in_transition(div1, blur, {
          delay: (
            /*$navigating*/
            ((_b = (_a = ctx[0]) == null ? void 0 : _a.from) == null ? void 0 : _b.params) === /*$navigating*/
            ((_d = (_c = ctx[0]) == null ? void 0 : _c.to) == null ? void 0 : _d.params) ? 0 : 400
          )
        });
        div1_intro.start();
      });
      current = true;
    },
    o(local) {
      var _a, _b, _c, _d;
      if (div1_intro)
        div1_intro.invalidate();
      div1_outro = create_out_transition(div1, blur, {
        duration: (
          /*$navigating*/
          ((_b = (_a = ctx[0]) == null ? void 0 : _a.from) == null ? void 0 : _b.params) === /*$navigating*/
          ((_d = (_c = ctx[0]) == null ? void 0 : _c.to) == null ? void 0 : _d.params) ? 0 : 400
        )
      });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      if (detaching && div1_outro)
        div1_outro.end();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $navigating;
  let $t;
  component_subscribe($$self, navigating, ($$value) => $$invalidate(0, $navigating = $$value));
  component_subscribe($$self, t, ($$value) => $$invalidate(1, $t = $$value));
  return [$navigating, $t];
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
