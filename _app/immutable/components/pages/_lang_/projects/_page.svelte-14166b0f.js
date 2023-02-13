import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, T as head_selector, h as detach, c as claim_space, l as claim_element, m as children, b as insert_hydration, K as append_hydration, C as noop, N as add_render_callback, P as create_out_transition, O as create_in_transition } from "../../../../chunks/index-f811e5e3.js";
import { c as blurOut, a as blurIn } from "../../../../chunks/customBlur-4ed7b2fc.js";
function create_fragment(ctx) {
  let t;
  let div;
  let p;
  let div_intro;
  let div_outro;
  let current;
  return {
    c() {
      t = space();
      div = element("div");
      p = element("p");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1c2duyp", document.head);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      children(p).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Projects";
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (div_outro)
          div_outro.end(1);
        div_intro = create_in_transition(div, blurIn, {});
        div_intro.start();
      });
      current = true;
    },
    o(local) {
      if (div_intro)
        div_intro.invalidate();
      div_outro = create_out_transition(div, blurOut, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
