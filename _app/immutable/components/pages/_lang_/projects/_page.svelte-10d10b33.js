import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, T as head_selector, h as detach, c as claim_space, l as claim_element, m as children, r as claim_text, b as insert_hydration, K as append_hydration, O as add_render_callback, Q as create_out_transition, L as component_subscribe, P as create_in_transition } from "../../../../chunks/index-4063d2b1.js";
import { b as blur } from "../../../../chunks/index-f85f5ab5.js";
import { n as navigating } from "../../../../chunks/stores-f5aaf9b9.js";
function create_fragment(ctx) {
  let t0;
  let div;
  let p;
  let t1;
  let div_intro;
  let div_outro;
  let current;
  return {
    c() {
      t0 = space();
      div = element("div");
      p = element("p");
      t1 = text("This is where the projects will be");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1c2duyp", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, "This is where the projects will be");
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Projects";
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(p, t1);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        var _a, _b, _c, _d;
        if (div_outro)
          div_outro.end(1);
        div_intro = create_in_transition(div, blur, {
          delay: (
            /*$navigating*/
            ((_b = (_a = ctx[0]) == null ? void 0 : _a.from) == null ? void 0 : _b.params) === /*$navigating*/
            ((_d = (_c = ctx[0]) == null ? void 0 : _c.to) == null ? void 0 : _d.params) ? 0 : 400
          )
        });
        div_intro.start();
      });
      current = true;
    },
    o(local) {
      var _a, _b, _c, _d;
      if (div_intro)
        div_intro.invalidate();
      div_outro = create_out_transition(div, blur, {
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
        detach(div);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $navigating;
  component_subscribe($$self, navigating, ($$value) => $$invalidate(0, $navigating = $$value));
  return [$navigating];
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
