import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, b as insert_hydration, K as append_hydration, u as set_data, C as noop, L as component_subscribe, p as set_style, x as create_component, T as head_selector, y as claim_component, z as mount_component, f as transition_in, N as add_render_callback, t as transition_out, A as destroy_component, Z as destroy_each, O as create_in_transition } from "../../../../chunks/index-129eb85f.js";
import { t } from "../../../../chunks/translations-f4fcc980.js";
import { a as blurIn } from "../../../../chunks/customBlur-76bf72bd.js";
const WorkItem_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div3;
  let div1;
  let div0;
  let h20;
  let raw0_value = (
    /*$t*/
    ctx[1](`workInfo.${/*name*/
    ctx[0]}.company`) + ""
  );
  let t0;
  let h21;
  let raw1_value = (
    /*$t*/
    ctx[1](`workInfo.${/*name*/
    ctx[0]}.role`) + ""
  );
  let t1;
  let p0;
  let raw2_value = (
    /*$t*/
    ctx[1](`workInfo.${/*name*/
    ctx[0]}.description`) + ""
  );
  let t2;
  let div2;
  let p1;
  let t3_value = (
    /*$t*/
    ctx[1](`workInfo.${/*name*/
    ctx[0]}.period`) + ""
  );
  let t3;
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      h20 = element("h2");
      t0 = space();
      h21 = element("h2");
      t1 = space();
      p0 = element("p");
      t2 = space();
      div2 = element("div");
      p1 = element("p");
      t3 = text(t3_value);
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
      h20_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      h21 = claim_element(div0_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      h21_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      p0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, t3_value);
      p1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h21, "class", "role svelte-vmbmi3");
      attr(div0, "class", "title svelte-vmbmi3");
      attr(p0, "class", "svelte-vmbmi3");
      attr(div1, "class", "info svelte-vmbmi3");
      attr(p1, "class", "period svelte-vmbmi3");
      attr(div2, "class", "circle svelte-vmbmi3");
      attr(div3, "class", "item svelte-vmbmi3");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h20);
      h20.innerHTML = raw0_value;
      append_hydration(div0, t0);
      append_hydration(div0, h21);
      h21.innerHTML = raw1_value;
      append_hydration(div1, t1);
      append_hydration(div1, p0);
      p0.innerHTML = raw2_value;
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      append_hydration(div2, p1);
      append_hydration(p1, t3);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$t, name*/
      3 && raw0_value !== (raw0_value = /*$t*/
      ctx2[1](`workInfo.${/*name*/
      ctx2[0]}.company`) + ""))
        h20.innerHTML = raw0_value;
      if (dirty & /*$t, name*/
      3 && raw1_value !== (raw1_value = /*$t*/
      ctx2[1](`workInfo.${/*name*/
      ctx2[0]}.role`) + ""))
        h21.innerHTML = raw1_value;
      if (dirty & /*$t, name*/
      3 && raw2_value !== (raw2_value = /*$t*/
      ctx2[1](`workInfo.${/*name*/
      ctx2[0]}.description`) + ""))
        p0.innerHTML = raw2_value;
      if (dirty & /*$t, name*/
      3 && t3_value !== (t3_value = /*$t*/
      ctx2[1](`workInfo.${/*name*/
      ctx2[0]}.period`) + ""))
        set_data(t3, t3_value);
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
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(1, $t = $$value));
  let { name } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
  };
  return [name, $t];
}
class WorkItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, { name: 0 });
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
      attr(div, "class", "arrow svelte-1jhgpw2");
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
function instance($$self, $$props, $$invalidate) {
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
    init(this, options, instance, create_fragment$1, safe_not_equal, { delay: 0, i: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
}
function create_each_block(ctx) {
  let arrow;
  let current;
  arrow = new Arrow({
    props: {
      delay: 400 + /*i*/
      ctx[2] * 300,
      i: (
        /*i*/
        ctx[2]
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
  let current;
  workitem0 = new WorkItem({ props: { name: "beamex" } });
  workitem1 = new WorkItem({ props: { name: "assistant" } });
  workitem2 = new WorkItem({ props: { name: "courses" } });
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
      attr(div0, "class", "svelte-1cjnx2w");
      attr(div1, "id", "work-container");
      attr(div1, "class", "svelte-1cjnx2w");
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
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(workitem0.$$.fragment, local);
      transition_in(workitem1.$$.fragment, local);
      transition_in(workitem2.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      if (!div1_intro) {
        add_render_callback(() => {
          div1_intro = create_in_transition(div1, blurIn, {});
          div1_intro.start();
        });
      }
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
