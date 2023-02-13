import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, K as append_hydration, u as set_data, C as noop, x as create_component, T as head_selector, y as claim_component, z as mount_component, f as transition_in, N as add_render_callback, t as transition_out, P as create_out_transition, A as destroy_component, L as component_subscribe, O as create_in_transition } from "../../../../chunks/index-f811e5e3.js";
import { t } from "../../../../chunks/translations-e60dcc4c.js";
import { c as blurOut, a as blurIn } from "../../../../chunks/customBlur-4ed7b2fc.js";
const WorkItem_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div3;
  let div1;
  let div0;
  let h20;
  let t0;
  let t1;
  let h21;
  let t2;
  let t3;
  let p0;
  let t4;
  let t5;
  let div2;
  let p1;
  let t6;
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      h20 = element("h2");
      t0 = text(
        /*company*/
        ctx[0]
      );
      t1 = space();
      h21 = element("h2");
      t2 = text(
        /*role*/
        ctx[1]
      );
      t3 = space();
      p0 = element("p");
      t4 = text(
        /*description*/
        ctx[2]
      );
      t5 = space();
      div2 = element("div");
      p1 = element("p");
      t6 = text(
        /*period*/
        ctx[3]
      );
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h20 = claim_element(div0_nodes, "H2", {});
      var h20_nodes = children(h20);
      t0 = claim_text(
        h20_nodes,
        /*company*/
        ctx[0]
      );
      h20_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      h21 = claim_element(div0_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t2 = claim_text(
        h21_nodes,
        /*role*/
        ctx[1]
      );
      h21_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t4 = claim_text(
        p0_nodes,
        /*description*/
        ctx[2]
      );
      p0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t6 = claim_text(
        p1_nodes,
        /*period*/
        ctx[3]
      );
      p1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h21, "class", "role svelte-1x9ob8u");
      attr(div0, "class", "title svelte-1x9ob8u");
      attr(p0, "class", "svelte-1x9ob8u");
      attr(div1, "class", "info svelte-1x9ob8u");
      attr(p1, "class", "period svelte-1x9ob8u");
      attr(div2, "class", "circle svelte-1x9ob8u");
      attr(div3, "class", "item svelte-1x9ob8u");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h20);
      append_hydration(h20, t0);
      append_hydration(div0, t1);
      append_hydration(div0, h21);
      append_hydration(h21, t2);
      append_hydration(div1, t3);
      append_hydration(div1, p0);
      append_hydration(p0, t4);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      append_hydration(div2, p1);
      append_hydration(p1, t6);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*company*/
      1)
        set_data(
          t0,
          /*company*/
          ctx2[0]
        );
      if (dirty & /*role*/
      2)
        set_data(
          t2,
          /*role*/
          ctx2[1]
        );
      if (dirty & /*description*/
      4)
        set_data(
          t4,
          /*description*/
          ctx2[2]
        );
      if (dirty & /*period*/
      8)
        set_data(
          t6,
          /*period*/
          ctx2[3]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { company } = $$props;
  let { role } = $$props;
  let { description } = $$props;
  let { period } = $$props;
  $$self.$$set = ($$props2) => {
    if ("company" in $$props2)
      $$invalidate(0, company = $$props2.company);
    if ("role" in $$props2)
      $$invalidate(1, role = $$props2.role);
    if ("description" in $$props2)
      $$invalidate(2, description = $$props2.description);
    if ("period" in $$props2)
      $$invalidate(3, period = $$props2.period);
  };
  return [company, role, description, period];
}
class WorkItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      company: 0,
      role: 1,
      description: 2,
      period: 3
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let t0;
  let div1;
  let workitem0;
  let t1;
  let workitem1;
  let t2;
  let workitem2;
  let t3;
  let div0;
  let div1_intro;
  let div1_outro;
  let current;
  workitem0 = new WorkItem({
    props: {
      company: (
        /*$t*/
        ctx[0]("beamex")
      ),
      role: (
        /*$t*/
        ctx[0]("beamexRole")
      ),
      description: (
        /*$t*/
        ctx[0]("beamexDescription")
      ),
      period: (
        /*$t*/
        ctx[0]("beamexPeriod")
      )
    }
  });
  workitem1 = new WorkItem({
    props: {
      company: (
        /*$t*/
        ctx[0]("aalto")
      ),
      role: (
        /*$t*/
        ctx[0]("assistantRole")
      ),
      description: (
        /*$t*/
        ctx[0]("assistantDescription")
      ),
      period: (
        /*$t*/
        ctx[0]("assistantPeriod")
      )
    }
  });
  workitem2 = new WorkItem({
    props: {
      company: (
        /*$t*/
        ctx[0]("aalto")
      ),
      role: (
        /*$t*/
        ctx[0]("aaltoRole")
      ),
      description: (
        /*$t*/
        ctx[0]("aaltoDescription")
      ),
      period: (
        /*$t*/
        ctx[0]("aaltoPeriod")
      )
    }
  });
  return {
    c() {
      t0 = space();
      div1 = element("div");
      create_component(workitem0.$$.fragment);
      t1 = space();
      create_component(workitem1.$$.fragment);
      t2 = space();
      create_component(workitem2.$$.fragment);
      t3 = space();
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1xjvk26", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      claim_component(workitem0.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(workitem1.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(workitem2.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Work History";
      attr(div0, "id", "line");
      attr(div0, "class", "svelte-3uac4");
      attr(div1, "id", "container");
      attr(div1, "class", "svelte-3uac4");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(workitem0, div1, null);
      append_hydration(div1, t1);
      mount_component(workitem1, div1, null);
      append_hydration(div1, t2);
      mount_component(workitem2, div1, null);
      append_hydration(div1, t3);
      append_hydration(div1, div0);
      current = true;
    },
    p(ctx2, [dirty]) {
      const workitem0_changes = {};
      if (dirty & /*$t*/
      1)
        workitem0_changes.company = /*$t*/
        ctx2[0]("beamex");
      if (dirty & /*$t*/
      1)
        workitem0_changes.role = /*$t*/
        ctx2[0]("beamexRole");
      if (dirty & /*$t*/
      1)
        workitem0_changes.description = /*$t*/
        ctx2[0]("beamexDescription");
      if (dirty & /*$t*/
      1)
        workitem0_changes.period = /*$t*/
        ctx2[0]("beamexPeriod");
      workitem0.$set(workitem0_changes);
      const workitem1_changes = {};
      if (dirty & /*$t*/
      1)
        workitem1_changes.company = /*$t*/
        ctx2[0]("aalto");
      if (dirty & /*$t*/
      1)
        workitem1_changes.role = /*$t*/
        ctx2[0]("assistantRole");
      if (dirty & /*$t*/
      1)
        workitem1_changes.description = /*$t*/
        ctx2[0]("assistantDescription");
      if (dirty & /*$t*/
      1)
        workitem1_changes.period = /*$t*/
        ctx2[0]("assistantPeriod");
      workitem1.$set(workitem1_changes);
      const workitem2_changes = {};
      if (dirty & /*$t*/
      1)
        workitem2_changes.company = /*$t*/
        ctx2[0]("aalto");
      if (dirty & /*$t*/
      1)
        workitem2_changes.role = /*$t*/
        ctx2[0]("aaltoRole");
      if (dirty & /*$t*/
      1)
        workitem2_changes.description = /*$t*/
        ctx2[0]("aaltoDescription");
      if (dirty & /*$t*/
      1)
        workitem2_changes.period = /*$t*/
        ctx2[0]("aaltoPeriod");
      workitem2.$set(workitem2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(workitem0.$$.fragment, local);
      transition_in(workitem1.$$.fragment, local);
      transition_in(workitem2.$$.fragment, local);
      add_render_callback(() => {
        if (div1_outro)
          div1_outro.end(1);
        div1_intro = create_in_transition(div1, blurIn, {});
        div1_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(workitem0.$$.fragment, local);
      transition_out(workitem1.$$.fragment, local);
      transition_out(workitem2.$$.fragment, local);
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
      destroy_component(workitem0);
      destroy_component(workitem1);
      destroy_component(workitem2);
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
