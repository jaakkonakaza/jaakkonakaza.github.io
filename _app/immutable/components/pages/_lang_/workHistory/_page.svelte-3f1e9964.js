import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, K as append_hydration, u as set_data, C as noop, D as subscribe, p as set_style, x as create_component, T as head_selector, y as claim_component, z as mount_component, f as transition_in, N as add_render_callback, t as transition_out, P as create_out_transition, A as destroy_component, Z as destroy_each, L as component_subscribe, O as create_in_transition } from "../../../../chunks/index-4bc72cb7.js";
import { l as locale, t } from "../../../../chunks/translations-978d7dd3.js";
import { c as blurOut, a as blurIn } from "../../../../chunks/customBlur-c5b5585c.js";
const WorkItem_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let t0;
  let a;
  let t1;
  let a_href_value;
  let t2;
  return {
    c() {
      t0 = text("(see ");
      a = element("a");
      t1 = text("Graphic Design");
      t2 = text(").");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "(see ");
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Graphic Design");
      a_nodes.forEach(detach);
      t2 = claim_text(nodes, ").");
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = "/" + /*$lang*/
      ctx[6] + "/graphicDesign#" + /*link*/
      ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
      insert_hydration(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*$lang, link*/
      80 && a_href_value !== (a_href_value = "/" + /*$lang*/
      ctx2[6] + "/graphicDesign#" + /*link*/
      ctx2[4])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
      if (detaching)
        detach(t2);
    }
  };
}
function create_fragment$2(ctx) {
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
  let t6;
  let div2;
  let p1;
  let t7;
  let if_block = (
    /*link*/
    ctx[4] && create_if_block(ctx)
  );
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
      if (if_block)
        if_block.c();
      t6 = space();
      div2 = element("div");
      p1 = element("p");
      t7 = text(
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
      t5 = claim_space(p0_nodes);
      if (if_block)
        if_block.l(p0_nodes);
      p0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t7 = claim_text(
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
      attr(h21, "class", "role svelte-1tbb26p");
      attr(div0, "class", "title svelte-1tbb26p");
      attr(p0, "class", "svelte-1tbb26p");
      attr(div1, "class", "info svelte-1tbb26p");
      attr(p1, "class", "period svelte-1tbb26p");
      attr(div2, "class", "circle svelte-1tbb26p");
      attr(div3, "class", "item svelte-1tbb26p");
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
      append_hydration(p0, t5);
      if (if_block)
        if_block.m(p0, null);
      append_hydration(div3, t6);
      append_hydration(div3, div2);
      append_hydration(div2, p1);
      append_hydration(p1, t7);
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
      if (
        /*link*/
        ctx2[4]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(p0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*period*/
      8)
        set_data(
          t7,
          /*period*/
          ctx2[3]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let lang;
  let $lang, $$unsubscribe_lang = noop, $$subscribe_lang = () => ($$unsubscribe_lang(), $$unsubscribe_lang = subscribe(lang, ($$value) => $$invalidate(6, $lang = $$value)), lang);
  $$self.$$.on_destroy.push(() => $$unsubscribe_lang());
  let { company } = $$props;
  let { role } = $$props;
  let { description } = $$props;
  let { period } = $$props;
  let { link = void 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("company" in $$props2)
      $$invalidate(0, company = $$props2.company);
    if ("role" in $$props2)
      $$invalidate(1, role = $$props2.role);
    if ("description" in $$props2)
      $$invalidate(2, description = $$props2.description);
    if ("period" in $$props2)
      $$invalidate(3, period = $$props2.period);
    if ("link" in $$props2)
      $$invalidate(4, link = $$props2.link);
  };
  $$subscribe_lang($$invalidate(5, lang = locale ?? "en"));
  return [company, role, description, period, link, lang, $lang];
}
class WorkItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      company: 0,
      role: 1,
      description: 2,
      period: 3,
      link: 4
    });
  }
}
const Arrow_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_style(
        div,
        "--delay",
        /*delay*/
        ctx[0] + "ms"
      );
      set_style(
        div,
        "--i",
        /*i*/
        ctx[1] * 3 + 1
      );
      attr(div, "class", "arrow svelte-szuqoq");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*delay*/
      1) {
        set_style(
          div,
          "--delay",
          /*delay*/
          ctx2[0] + "ms"
        );
      }
      if (dirty & /*i*/
      2) {
        set_style(
          div,
          "--i",
          /*i*/
          ctx2[1] * 3 + 1
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { delay } = $$props;
  let { i } = $$props;
  $$self.$$set = ($$props2) => {
    if ("delay" in $$props2)
      $$invalidate(0, delay = $$props2.delay);
    if ("i" in $$props2)
      $$invalidate(1, i = $$props2.i);
  };
  return [delay, i];
}
class Arrow extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { delay: 0, i: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
}
function create_each_block(ctx) {
  let arrow;
  let current;
  arrow = new Arrow({
    props: {
      delay: 400 + /*i*/
      ctx[3] * 300,
      i: (
        /*i*/
        ctx[3]
      )
    }
  });
  return {
    c() {
      create_component(arrow.$$.fragment);
    },
    l(nodes) {
      claim_component(arrow.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(arrow, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(arrow.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(arrow.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(arrow, detaching);
    }
  };
}
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
      ),
      link: "o1"
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
      ),
      link: "aPlusCourses"
    }
  });
  let each_value = Array(3);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
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
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Work History";
      attr(div0, "id", "line");
      attr(div0, "class", "svelte-185kplw");
      attr(div1, "id", "work-container");
      attr(div1, "class", "svelte-185kplw");
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
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
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
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
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
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
      destroy_each(each_blocks, detaching);
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
