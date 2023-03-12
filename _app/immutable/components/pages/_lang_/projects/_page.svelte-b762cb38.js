import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, p as set_style, n as attr, b as insert_hydration, K as append_hydration, u as set_data, C as noop, L as component_subscribe, e as empty, f as transition_in, g as group_outros, t as transition_out, d as check_outros, x as create_component, y as claim_component, z as mount_component, Q as listen, _ as stop_propagation, A as destroy_component, E as run_all, $ as bubble, o as onMount, a0 as onDestroy, v as binding_callbacks, V as bind, T as head_selector, W as add_flush_callback, N as add_render_callback, Z as destroy_each, O as create_in_transition } from "../../../../chunks/index-129eb85f.js";
import { a as blurIn } from "../../../../chunks/customBlur-76bf72bd.js";
import { t } from "../../../../chunks/translations-f4fcc980.js";
const ProjectStatus_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let small;
  let span;
  let t0;
  let t1;
  let t2_value = (
    /*state*/
    (ctx[0] === ProjectState.Completed ? (
      /*$t*/
      ctx[1]("projectInfo.status.completed")
    ) : (
      /*state*/
      ctx[0] === ProjectState.InProgress ? (
        /*$t*/
        ctx[1]("projectInfo.status.inProgress")
      ) : (
        /*$t*/
        ctx[1]("projectInfo.status.planned")
      )
    )) + ""
  );
  let t2;
  return {
    c() {
      small = element("small");
      span = element("span");
      t0 = text("⬤");
      t1 = space();
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      small = claim_element(nodes, "SMALL", { class: true });
      var small_nodes = children(small);
      span = claim_element(small_nodes, "SPAN", { style: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "⬤");
      span_nodes.forEach(detach);
      t1 = claim_space(small_nodes);
      t2 = claim_text(small_nodes, t2_value);
      small_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(
        span,
        "color",
        /*state*/
        ctx[0] === ProjectState.Completed ? "#20FF20" : (
          /*state*/
          ctx[0] === ProjectState.InProgress ? "#FFFF00" : "#FF0000"
        )
      );
      set_style(span, "font-size", "0.3rem");
      attr(small, "class", "state svelte-1q5k9bp");
    },
    m(target, anchor) {
      insert_hydration(target, small, anchor);
      append_hydration(small, span);
      append_hydration(span, t0);
      append_hydration(small, t1);
      append_hydration(small, t2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*state*/
      1) {
        set_style(
          span,
          "color",
          /*state*/
          ctx2[0] === ProjectState.Completed ? "#20FF20" : (
            /*state*/
            ctx2[0] === ProjectState.InProgress ? "#FFFF00" : "#FF0000"
          )
        );
      }
      if (dirty & /*state, $t*/
      3 && t2_value !== (t2_value = /*state*/
      (ctx2[0] === ProjectState.Completed ? (
        /*$t*/
        ctx2[1]("projectInfo.status.completed")
      ) : (
        /*state*/
        ctx2[0] === ProjectState.InProgress ? (
          /*$t*/
          ctx2[1]("projectInfo.status.inProgress")
        ) : (
          /*$t*/
          ctx2[1]("projectInfo.status.planned")
        )
      )) + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(small);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(1, $t = $$value));
  let { state } = $$props;
  $$self.$$set = ($$props2) => {
    if ("state" in $$props2)
      $$invalidate(0, state = $$props2.state);
  };
  return [state, $t];
}
class ProjectStatus extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { state: 0 });
  }
}
const Popup_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div2;
  let div1;
  let button;
  let t0;
  let t1;
  let projectstatus;
  let t2;
  let div0;
  let h2;
  let t3_value = (
    /*$t*/
    ctx[1](`projectInfo.${/*selectedProject*/
    ctx[0].id}.title`) + ""
  );
  let t3;
  let t4;
  let p0;
  let t5_value = (
    /*$t*/
    ctx[1](`projectInfo.${/*selectedProject*/
    ctx[0].id}.description`) + ""
  );
  let t5;
  let t6;
  let p1;
  let t7_value = (
    /*$t*/
    ctx[1](`projectInfo.${/*selectedProject*/
    ctx[0].id}.longDescription`) + ""
  );
  let t7;
  let t8;
  let small;
  let t9_value = (
    /*$t*/
    ctx[1]("projectInfo.tech") + ""
  );
  let t9;
  let t10;
  let t11_value = (
    /*selectedProject*/
    ctx[0].tech + ""
  );
  let t11;
  let t12;
  let t13;
  let current;
  let mounted;
  let dispose;
  projectstatus = new ProjectStatus({
    props: { state: (
      /*selectedProject*/
      ctx[0].state
    ) }
  });
  let if_block0 = (
    /*selectedProject*/
    ctx[0].repoLink && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*selectedProject*/
    ctx[0].projectLink && create_if_block_1(ctx)
  );
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      button = element("button");
      t0 = text("X");
      t1 = space();
      create_component(projectstatus.$$.fragment);
      t2 = space();
      div0 = element("div");
      h2 = element("h2");
      t3 = text(t3_value);
      t4 = space();
      p0 = element("p");
      t5 = text(t5_value);
      t6 = space();
      p1 = element("p");
      t7 = text(t7_value);
      t8 = space();
      small = element("small");
      t9 = text(t9_value);
      t10 = space();
      t11 = text(t11_value);
      t12 = space();
      if (if_block0)
        if_block0.c();
      t13 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      button = claim_element(div1_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, "X");
      button_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      claim_component(projectstatus.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, t3_value);
      h2_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t5 = claim_text(p0_nodes, t5_value);
      p0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, t7_value);
      p1_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      small = claim_element(div1_nodes, "SMALL", {});
      var small_nodes = children(small);
      t9 = claim_text(small_nodes, t9_value);
      t10 = claim_space(small_nodes);
      t11 = claim_text(small_nodes, t11_value);
      t12 = claim_space(small_nodes);
      if (if_block0)
        if_block0.l(small_nodes);
      t13 = claim_space(small_nodes);
      if (if_block1)
        if_block1.l(small_nodes);
      small_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "close svelte-1kwtjvd");
      attr(h2, "class", "svelte-1kwtjvd");
      attr(p0, "class", "svelte-1kwtjvd");
      attr(div0, "class", "title svelte-1kwtjvd");
      attr(div1, "id", "popup");
      attr(div1, "class", "svelte-1kwtjvd");
      attr(div2, "id", "popup-overlay");
      attr(div2, "class", "svelte-1kwtjvd");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, button);
      append_hydration(button, t0);
      append_hydration(div1, t1);
      mount_component(projectstatus, div1, null);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t3);
      append_hydration(div0, t4);
      append_hydration(div0, p0);
      append_hydration(p0, t5);
      append_hydration(div1, t6);
      append_hydration(div1, p1);
      append_hydration(p1, t7);
      append_hydration(div1, t8);
      append_hydration(div1, small);
      append_hydration(small, t9);
      append_hydration(small, t10);
      append_hydration(small, t11);
      append_hydration(small, t12);
      if (if_block0)
        if_block0.m(small, null);
      append_hydration(small, t13);
      if (if_block1)
        if_block1.m(small, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button,
            "click",
            /*click_handler_1*/
            ctx[4]
          ),
          listen(div1, "click", stop_propagation(
            /*click_handler*/
            ctx[2]
          )),
          listen(div1, "keypress", stop_propagation(
            /*keypress_handler*/
            ctx[3]
          )),
          listen(div2, "click", stop_propagation(
            /*click_handler_2*/
            ctx[5]
          )),
          listen(div2, "keypress", stop_propagation(
            /*keypress_handler_1*/
            ctx[6]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const projectstatus_changes = {};
      if (dirty & /*selectedProject*/
      1)
        projectstatus_changes.state = /*selectedProject*/
        ctx2[0].state;
      projectstatus.$set(projectstatus_changes);
      if ((!current || dirty & /*$t, selectedProject*/
      3) && t3_value !== (t3_value = /*$t*/
      ctx2[1](`projectInfo.${/*selectedProject*/
      ctx2[0].id}.title`) + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & /*$t, selectedProject*/
      3) && t5_value !== (t5_value = /*$t*/
      ctx2[1](`projectInfo.${/*selectedProject*/
      ctx2[0].id}.description`) + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & /*$t, selectedProject*/
      3) && t7_value !== (t7_value = /*$t*/
      ctx2[1](`projectInfo.${/*selectedProject*/
      ctx2[0].id}.longDescription`) + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & /*$t*/
      2) && t9_value !== (t9_value = /*$t*/
      ctx2[1]("projectInfo.tech") + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & /*selectedProject*/
      1) && t11_value !== (t11_value = /*selectedProject*/
      ctx2[0].tech + ""))
        set_data(t11, t11_value);
      if (
        /*selectedProject*/
        ctx2[0].repoLink
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(small, t13);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*selectedProject*/
        ctx2[0].projectLink
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(small, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(projectstatus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectstatus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(projectstatus);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2(ctx) {
  let t0;
  let a;
  let t1_value = (
    /*$t*/
    ctx[1]("projectInfo.repository") + ""
  );
  let t1;
  let a_href_value;
  return {
    c() {
      t0 = text("| ");
      a = element("a");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "| ");
      a = claim_element(nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*selectedProject*/
      ctx[0].repoLink);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*$t*/
      2 && t1_value !== (t1_value = /*$t*/
      ctx2[1]("projectInfo.repository") + ""))
        set_data(t1, t1_value);
      if (dirty & /*selectedProject*/
      1 && a_href_value !== (a_href_value = /*selectedProject*/
      ctx2[0].repoLink)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_1(ctx) {
  let t0;
  let a;
  let t1_value = (
    /*$t*/
    ctx[1]("projectInfo.website") + ""
  );
  let t1;
  let a_href_value;
  return {
    c() {
      t0 = text("| ");
      a = element("a");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "| ");
      a = claim_element(nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*selectedProject*/
      ctx[0].projectLink);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*$t*/
      2 && t1_value !== (t1_value = /*$t*/
      ctx2[1]("projectInfo.website") + ""))
        set_data(t1, t1_value);
      if (dirty & /*selectedProject*/
      1 && a_href_value !== (a_href_value = /*selectedProject*/
      ctx2[0].projectLink)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*selectedProject*/
    ctx[0] !== void 0 && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*selectedProject*/
        ctx2[0] !== void 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*selectedProject*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(1, $t = $$value));
  let { selectedProject } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler_1 = () => $$invalidate(0, selectedProject = void 0);
  const click_handler_2 = () => $$invalidate(0, selectedProject = void 0);
  const keypress_handler_1 = () => $$invalidate(0, selectedProject = void 0);
  $$self.$$set = ($$props2) => {
    if ("selectedProject" in $$props2)
      $$invalidate(0, selectedProject = $$props2.selectedProject);
  };
  return [
    selectedProject,
    $t,
    click_handler,
    keypress_handler,
    click_handler_1,
    click_handler_2,
    keypress_handler_1
  ];
}
class Popup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { selectedProject: 0 });
  }
}
const Project_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let button;
  let div;
  let projectstatus;
  let t0;
  let h2;
  let t1_value = (
    /*$t*/
    ctx[3](`projectInfo.${/*projectInfo*/
    ctx[1].id}.title`) + ""
  );
  let t1;
  let t2;
  let p;
  let t3_value = (
    /*$t*/
    ctx[3](`projectInfo.${/*projectInfo*/
    ctx[1].id}.description`) + ""
  );
  let t3;
  let t4;
  let small;
  let t5_value = (
    /*projectInfo*/
    ctx[1].tech + ""
  );
  let t5;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  projectstatus = new ProjectStatus({
    props: { state: (
      /*projectInfo*/
      ctx[1].state
    ) }
  });
  return {
    c() {
      button = element("button");
      div = element("div");
      create_component(projectstatus.$$.fragment);
      t0 = space();
      h2 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      small = element("small");
      t5 = text(t5_value);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      div = claim_element(button_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(projectstatus.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t0 = claim_space(button_nodes);
      h2 = claim_element(button_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, t1_value);
      h2_nodes.forEach(detach);
      t2 = claim_space(button_nodes);
      p = claim_element(button_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach);
      t4 = claim_space(button_nodes);
      small = claim_element(button_nodes, "SMALL", {});
      var small_nodes = children(small);
      t5 = claim_text(small_nodes, t5_value);
      small_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "state svelte-6kjuc3");
      attr(h2, "class", "svelte-6kjuc3");
      attr(p, "class", "svelte-6kjuc3");
      attr(button, "class", button_class_value = "project " + /*selectedProject*/
      (ctx[0] ? "popup-visible" : "project-translate") + " svelte-6kjuc3");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, div);
      mount_component(projectstatus, div, null);
      append_hydration(button, t0);
      append_hydration(button, h2);
      append_hydration(h2, t1);
      append_hydration(button, t2);
      append_hydration(button, p);
      append_hydration(p, t3);
      append_hydration(button, t4);
      append_hydration(button, small);
      append_hydration(small, t5);
      ctx[5](button);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const projectstatus_changes = {};
      if (dirty & /*projectInfo*/
      2)
        projectstatus_changes.state = /*projectInfo*/
        ctx2[1].state;
      projectstatus.$set(projectstatus_changes);
      if ((!current || dirty & /*$t, projectInfo*/
      10) && t1_value !== (t1_value = /*$t*/
      ctx2[3](`projectInfo.${/*projectInfo*/
      ctx2[1].id}.title`) + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & /*$t, projectInfo*/
      10) && t3_value !== (t3_value = /*$t*/
      ctx2[3](`projectInfo.${/*projectInfo*/
      ctx2[1].id}.description`) + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & /*projectInfo*/
      2) && t5_value !== (t5_value = /*projectInfo*/
      ctx2[1].tech + ""))
        set_data(t5, t5_value);
      if (!current || dirty & /*selectedProject*/
      1 && button_class_value !== (button_class_value = "project " + /*selectedProject*/
      (ctx2[0] ? "popup-visible" : "project-translate") + " svelte-6kjuc3")) {
        attr(button, "class", button_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(projectstatus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectstatus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(projectstatus);
      ctx[5](null);
      mounted = false;
      dispose();
    }
  };
}
const THRESHOLD = 3;
function instance$1($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(3, $t = $$value));
  let { projectInfo } = $$props;
  let { selectedProject } = $$props;
  let buttonRef;
  const mouseMoveEvent = (ev) => {
    const { x, y } = buttonRef.getBoundingClientRect();
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = buttonRef;
    const { clientX, clientY } = ev;
    buttonRef.style.setProperty("--x", `${clientX - x}`);
    buttonRef.style.setProperty("--y", `${clientY - y}`);
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);
    const rotateY = (horizontal * THRESHOLD - THRESHOLD / 2).toFixed(2);
    buttonRef.style.setProperty("--clientWidth", `${clientWidth}px`);
    buttonRef.style.setProperty("--rotateX", `${rotateX}deg`);
    buttonRef.style.setProperty("--rotateY", `${rotateY}deg`);
  };
  onMount(() => {
    buttonRef.addEventListener("mousemove", mouseMoveEvent);
  });
  onDestroy(() => {
    buttonRef == null ? void 0 : buttonRef.removeEventListener("mousemove", mouseMoveEvent);
  });
  const click_handler = () => $$invalidate(0, selectedProject = projectInfo);
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttonRef = $$value;
      $$invalidate(2, buttonRef);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("projectInfo" in $$props2)
      $$invalidate(1, projectInfo = $$props2.projectInfo);
    if ("selectedProject" in $$props2)
      $$invalidate(0, selectedProject = $$props2.selectedProject);
  };
  return [selectedProject, projectInfo, buttonRef, $t, click_handler, button_binding];
}
class Project extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { projectInfo: 1, selectedProject: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let project;
  let updating_selectedProject;
  let current;
  function project_selectedProject_binding(value) {
    ctx[4](value);
  }
  let project_props = { projectInfo: (
    /*projectInfo*/
    ctx[6]
  ) };
  if (
    /*selectedProject*/
    ctx[0] !== void 0
  ) {
    project_props.selectedProject = /*selectedProject*/
    ctx[0];
  }
  project = new Project({ props: project_props });
  binding_callbacks.push(() => bind(project, "selectedProject", project_selectedProject_binding));
  return {
    c() {
      create_component(project.$$.fragment);
    },
    l(nodes) {
      claim_component(project.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(project, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const project_changes = {};
      if (!updating_selectedProject && dirty & /*selectedProject*/
      1) {
        updating_selectedProject = true;
        project_changes.selectedProject = /*selectedProject*/
        ctx2[0];
        add_flush_callback(() => updating_selectedProject = false);
      }
      project.$set(project_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(project.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(project.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(project, detaching);
    }
  };
}
function create_each_block(ctx) {
  let project;
  let updating_selectedProject;
  let current;
  function project_selectedProject_binding_1(value) {
    ctx[5](value);
  }
  let project_props = { projectInfo: (
    /*projectInfo*/
    ctx[6]
  ) };
  if (
    /*selectedProject*/
    ctx[0] !== void 0
  ) {
    project_props.selectedProject = /*selectedProject*/
    ctx[0];
  }
  project = new Project({ props: project_props });
  binding_callbacks.push(() => bind(project, "selectedProject", project_selectedProject_binding_1));
  return {
    c() {
      create_component(project.$$.fragment);
    },
    l(nodes) {
      claim_component(project.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(project, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const project_changes = {};
      if (!updating_selectedProject && dirty & /*selectedProject*/
      1) {
        updating_selectedProject = true;
        project_changes.selectedProject = /*selectedProject*/
        ctx2[0];
        add_flush_callback(() => updating_selectedProject = false);
      }
      project.$set(project_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(project.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(project.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(project, detaching);
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let div4;
  let popup;
  let updating_selectedProject;
  let t1;
  let div0;
  let t2;
  let t3;
  let div1;
  let t4;
  let div2;
  let t5;
  let t6;
  let div3;
  let div4_intro;
  let current;
  function popup_selectedProject_binding(value) {
    ctx[3](value);
  }
  let popup_props = {};
  if (
    /*selectedProject*/
    ctx[0] !== void 0
  ) {
    popup_props.selectedProject = /*selectedProject*/
    ctx[0];
  }
  popup = new Popup({ props: popup_props });
  binding_callbacks.push(() => bind(popup, "selectedProject", popup_selectedProject_binding));
  let each_value_1 = (
    /*projects2023*/
    ctx[1]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let each_value = (
    /*projectsOld*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      t0 = space();
      div4 = element("div");
      create_component(popup.$$.fragment);
      t1 = space();
      div0 = element("div");
      t2 = text("2023");
      t3 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t4 = space();
      div2 = element("div");
      t5 = text("2020-2022");
      t6 = space();
      div3 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1c2duyp", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      claim_component(popup.$$.fragment, div4_nodes);
      t1 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "2023");
      div0_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      t4 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t5 = claim_text(div2_nodes, "2020-2022");
      div2_nodes.forEach(detach);
      t6 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div3_nodes);
      }
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Projects";
      attr(div0, "class", "year svelte-1n8rji0");
      attr(div1, "class", "grid svelte-1n8rji0");
      attr(div2, "class", "year svelte-1n8rji0");
      attr(div3, "class", "grid svelte-1n8rji0");
      attr(div4, "id", "projects-container");
      attr(div4, "class", "svelte-1n8rji0");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      mount_component(popup, div4, null);
      append_hydration(div4, t1);
      append_hydration(div4, div0);
      append_hydration(div0, t2);
      append_hydration(div4, t3);
      append_hydration(div4, div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div1, null);
      }
      append_hydration(div4, t4);
      append_hydration(div4, div2);
      append_hydration(div2, t5);
      append_hydration(div4, t6);
      append_hydration(div4, div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const popup_changes = {};
      if (!updating_selectedProject && dirty & /*selectedProject*/
      1) {
        updating_selectedProject = true;
        popup_changes.selectedProject = /*selectedProject*/
        ctx2[0];
        add_flush_callback(() => updating_selectedProject = false);
      }
      popup.$set(popup_changes);
      if (dirty & /*projects2023, selectedProject*/
      3) {
        each_value_1 = /*projects2023*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (dirty & /*projectsOld, selectedProject*/
      5) {
        each_value = /*projectsOld*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div3, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(popup.$$.fragment, local);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      if (!div4_intro) {
        add_render_callback(() => {
          div4_intro = create_in_transition(div4, blurIn, {});
          div4_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(popup.$$.fragment, local);
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
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
        detach(div4);
      destroy_component(popup);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
var ProjectState = /* @__PURE__ */ ((ProjectState2) => {
  ProjectState2[ProjectState2["Completed"] = 0] = "Completed";
  ProjectState2[ProjectState2["InProgress"] = 1] = "InProgress";
  ProjectState2[ProjectState2["Planned"] = 2] = "Planned";
  return ProjectState2;
})(ProjectState || {});
function instance($$self, $$props, $$invalidate) {
  const projects2023 = [
    {
      id: "smile",
      tech: "Scala",
      state: ProjectState.InProgress
    },
    {
      id: "prefecturePursuit",
      tech: "???",
      state: ProjectState.Planned
    },
    {
      id: "happaChat",
      tech: "SvelteKit / Kotlin / Swift",
      state: ProjectState.Planned
    },
    {
      id: "aiCapitalist",
      tech: "???",
      state: ProjectState.Planned
    },
    {
      id: "modulatedMonstrosities",
      tech: "???",
      state: ProjectState.Planned
    }
  ];
  const projectsOld = [
    {
      id: "aPlusCourses",
      tech: "React / GitHub Pages",
      repoLink: "https://github.com/Aalto-LeTech/aplus-courses-tutorial-builder",
      projectLink: "https://aalto-letech.github.io/aplus-courses-tutorial-builder/",
      state: ProjectState.Completed
    },
    {
      id: "vanishedVisions",
      tech: "Scala.js",
      state: ProjectState.Completed
    }
  ];
  let selectedProject;
  function popup_selectedProject_binding(value) {
    selectedProject = value;
    $$invalidate(0, selectedProject);
  }
  function project_selectedProject_binding(value) {
    selectedProject = value;
    $$invalidate(0, selectedProject);
  }
  function project_selectedProject_binding_1(value) {
    selectedProject = value;
    $$invalidate(0, selectedProject);
  }
  return [
    selectedProject,
    projects2023,
    projectsOld,
    popup_selectedProject_binding,
    project_selectedProject_binding,
    project_selectedProject_binding_1
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  ProjectState,
  Page as default
};
