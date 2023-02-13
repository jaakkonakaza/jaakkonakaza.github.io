import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, x as create_component, q as text, T as head_selector, h as detach, c as claim_space, l as claim_element, m as children, y as claim_component, r as claim_text, n as attr, b as insert_hydration, K as append_hydration, z as mount_component, u as set_data, f as transition_in, N as add_render_callback, t as transition_out, P as create_out_transition, A as destroy_component, L as component_subscribe, O as create_in_transition } from "../../../chunks/index-f811e5e3.js";
import { t } from "../../../chunks/translations-e60dcc4c.js";
import { N as Name } from "../../../chunks/Name-4744e24e.js";
import { c as blurOut, a as blurIn } from "../../../chunks/customBlur-4ed7b2fc.js";
const _400 = "";
const _500 = "";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let t0;
  let div1;
  let div0;
  let name;
  let t1;
  let p;
  let t2_value = (
    /*$t*/
    ctx[0]("about") + ""
  );
  let t2;
  let div1_intro;
  let div1_outro;
  let current;
  name = new Name({});
  return {
    c() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(name.$$.fragment);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1eo4e2f", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      claim_component(name.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza";
      attr(div0, "id", "name-container");
      attr(div0, "class", "svelte-1qzijxq");
      attr(p, "class", "bubble svelte-1qzijxq");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(name, div0, null);
      append_hydration(div1, t1);
      append_hydration(div1, p);
      append_hydration(p, t2);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*$t*/
      1) && t2_value !== (t2_value = /*$t*/
      ctx2[0]("about") + ""))
        set_data(t2, t2_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(name.$$.fragment, local);
      add_render_callback(() => {
        if (div1_outro)
          div1_outro.end(1);
        div1_intro = create_in_transition(div1, blurIn, {});
        div1_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(name.$$.fragment, local);
      if (div1_intro)
        div1_intro.invalidate();
      div1_outro = create_out_transition(div1, blurOut, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      destroy_component(name);
      if (detaching && div1_outro)
        div1_outro.end();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(0, $t = $$value));
  return [$t];
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
