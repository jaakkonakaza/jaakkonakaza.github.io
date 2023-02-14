import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, c as claim_space, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, K as append_hydration, Q as listen, u as set_data, C as noop, o as onMount, Z as onDestroy, _ as stop_propagation, E as run_all, $ as bubble, v as binding_callbacks, x as create_component, T as head_selector, y as claim_component, z as mount_component, f as transition_in, t as transition_out, P as create_out_transition, A as destroy_component } from "../../../../chunks/index-72c9b203.js";
import { c as blurOut } from "../../../../chunks/customBlur-e613ac26.js";
const Project_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div1;
  let div0;
  let h2;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let small;
  let t4;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t0 = text(
        /*title*/
        ctx[0]
      );
      t1 = space();
      p = element("p");
      t2 = text(
        /*description*/
        ctx[1]
      );
      t3 = space();
      small = element("small");
      t4 = text(
        /*tech*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(
        h2_nodes,
        /*title*/
        ctx[0]
      );
      h2_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(
        p_nodes,
        /*description*/
        ctx[1]
      );
      p_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      small = claim_element(div0_nodes, "SMALL", {});
      var small_nodes = children(small);
      t4 = claim_text(
        small_nodes,
        /*tech*/
        ctx[2]
      );
      small_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "svelte-sviabz");
      attr(p, "class", "svelte-sviabz");
      attr(div0, "id", "popup");
      attr(div0, "class", "svelte-sviabz");
      attr(div1, "id", "popup-overlay");
      attr(div1, "class", "svelte-sviabz");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t0);
      append_hydration(div0, t1);
      append_hydration(div0, p);
      append_hydration(p, t2);
      append_hydration(div0, t3);
      append_hydration(div0, small);
      append_hydration(small, t4);
      if (!mounted) {
        dispose = [
          listen(div0, "click", stop_propagation(
            /*click_handler*/
            ctx[5]
          )),
          listen(div0, "keypress", stop_propagation(
            /*keypress_handler*/
            ctx[6]
          )),
          listen(div1, "click", stop_propagation(
            /*click_handler_1*/
            ctx[7]
          )),
          listen(div1, "keypress", stop_propagation(
            /*keypress_handler_1*/
            ctx[8]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      1)
        set_data(
          t0,
          /*title*/
          ctx2[0]
        );
      if (dirty & /*description*/
      2)
        set_data(
          t2,
          /*description*/
          ctx2[1]
        );
      if (dirty & /*tech*/
      4)
        set_data(
          t4,
          /*tech*/
          ctx2[2]
        );
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$1(ctx) {
  let t0;
  let button;
  let h2;
  let t1;
  let t2;
  let p;
  let t3;
  let t4;
  let small;
  let t5;
  let mounted;
  let dispose;
  let if_block = (
    /*popup*/
    ctx[3] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      button = element("button");
      h2 = element("h2");
      t1 = text(
        /*title*/
        ctx[0]
      );
      t2 = space();
      p = element("p");
      t3 = text(
        /*description*/
        ctx[1]
      );
      t4 = space();
      small = element("small");
      t5 = text(
        /*tech*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      h2 = claim_element(button_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t1 = claim_text(
        h2_nodes,
        /*title*/
        ctx[0]
      );
      h2_nodes.forEach(detach);
      t2 = claim_space(button_nodes);
      p = claim_element(button_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(
        p_nodes,
        /*description*/
        ctx[1]
      );
      p_nodes.forEach(detach);
      t4 = claim_space(button_nodes);
      small = claim_element(button_nodes, "SMALL", {});
      var small_nodes = children(small);
      t5 = claim_text(
        small_nodes,
        /*tech*/
        ctx[2]
      );
      small_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "svelte-sviabz");
      attr(p, "class", "svelte-sviabz");
      attr(button, "class", "project svelte-sviabz");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, h2);
      append_hydration(h2, t1);
      append_hydration(button, t2);
      append_hydration(button, p);
      append_hydration(p, t3);
      append_hydration(button, t4);
      append_hydration(button, small);
      append_hydration(small, t5);
      ctx[10](button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_2*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*popup*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*title*/
      1)
        set_data(
          t1,
          /*title*/
          ctx2[0]
        );
      if (dirty & /*description*/
      2)
        set_data(
          t3,
          /*description*/
          ctx2[1]
        );
      if (dirty & /*tech*/
      4)
        set_data(
          t5,
          /*tech*/
          ctx2[2]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(button);
      ctx[10](null);
      mounted = false;
      dispose();
    }
  };
}
const THRESHOLD = 3;
function instance($$self, $$props, $$invalidate) {
  let { title } = $$props;
  let { description } = $$props;
  let { tech } = $$props;
  let popup = false;
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
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler_1 = () => $$invalidate(3, popup = false);
  const keypress_handler_1 = () => $$invalidate(3, popup = false);
  const click_handler_2 = () => $$invalidate(3, popup = true);
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttonRef = $$value;
      $$invalidate(4, buttonRef);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("description" in $$props2)
      $$invalidate(1, description = $$props2.description);
    if ("tech" in $$props2)
      $$invalidate(2, tech = $$props2.tech);
  };
  return [
    title,
    description,
    tech,
    popup,
    buttonRef,
    click_handler,
    keypress_handler,
    click_handler_1,
    keypress_handler_1,
    click_handler_2,
    button_binding
  ];
}
class Project extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { title: 0, description: 1, tech: 2 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let t0;
  let div4;
  let div0;
  let t1;
  let t2;
  let div1;
  let project0;
  let t3;
  let project1;
  let t4;
  let project2;
  let t5;
  let project3;
  let t6;
  let project4;
  let t7;
  let div2;
  let t8;
  let t9;
  let div3;
  let project5;
  let t10;
  let project6;
  let div4_outro;
  let current;
  project0 = new Project({
    props: {
      title: "SMILE",
      description: "Library for creating and manipulating images",
      tech: "Scala"
    }
  });
  project1 = new Project({
    props: {
      title: "Prefecture Pursuit",
      description: "Browser game for learning the prefectures of Japan",
      tech: "???"
    }
  });
  project2 = new Project({
    props: {
      title: "happaChat",
      description: "Chat application for web, Android and iOS",
      tech: "SvelteKit \\ Kotlin \\ Swift"
    }
  });
  project3 = new Project({
    props: {
      title: "AI Capitalist",
      description: "AI powered stock trading bot",
      tech: "???"
    }
  });
  project4 = new Project({
    props: {
      title: "Modulated Monstrosities",
      description: "Browser-based modular synth",
      tech: "???"
    }
  });
  project5 = new Project({
    props: {
      title: "A+ Courses Tutorial Builder",
      description: "Web app for configuring IDE tutorials",
      tech: "React \\ GitHub Pages"
    }
  });
  project6 = new Project({
    props: {
      title: "Vanished Visions",
      description: "Text adventure game",
      tech: "Scala.js"
    }
  });
  return {
    c() {
      t0 = space();
      div4 = element("div");
      div0 = element("div");
      t1 = text("2023");
      t2 = space();
      div1 = element("div");
      create_component(project0.$$.fragment);
      t3 = space();
      create_component(project1.$$.fragment);
      t4 = space();
      create_component(project2.$$.fragment);
      t5 = space();
      create_component(project3.$$.fragment);
      t6 = space();
      create_component(project4.$$.fragment);
      t7 = space();
      div2 = element("div");
      t8 = text("2020-2022");
      t9 = space();
      div3 = element("div");
      create_component(project5.$$.fragment);
      t10 = space();
      create_component(project6.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1c2duyp", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "2023");
      div0_nodes.forEach(detach);
      t2 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(project0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(project1.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(project2.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(project3.$$.fragment, div1_nodes);
      t6 = claim_space(div1_nodes);
      claim_component(project4.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t7 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t8 = claim_text(div2_nodes, "2020-2022");
      div2_nodes.forEach(detach);
      t9 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(project5.$$.fragment, div3_nodes);
      t10 = claim_space(div3_nodes);
      claim_component(project6.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Projects";
      attr(div0, "class", "year svelte-205cq9");
      attr(div1, "class", "grid svelte-205cq9");
      attr(div2, "class", "year svelte-205cq9");
      attr(div3, "class", "grid svelte-205cq9");
      attr(div4, "id", "projects-container");
      attr(div4, "class", "svelte-205cq9");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div0);
      append_hydration(div0, t1);
      append_hydration(div4, t2);
      append_hydration(div4, div1);
      mount_component(project0, div1, null);
      append_hydration(div1, t3);
      mount_component(project1, div1, null);
      append_hydration(div1, t4);
      mount_component(project2, div1, null);
      append_hydration(div1, t5);
      mount_component(project3, div1, null);
      append_hydration(div1, t6);
      mount_component(project4, div1, null);
      append_hydration(div4, t7);
      append_hydration(div4, div2);
      append_hydration(div2, t8);
      append_hydration(div4, t9);
      append_hydration(div4, div3);
      mount_component(project5, div3, null);
      append_hydration(div3, t10);
      mount_component(project6, div3, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(project0.$$.fragment, local);
      transition_in(project1.$$.fragment, local);
      transition_in(project2.$$.fragment, local);
      transition_in(project3.$$.fragment, local);
      transition_in(project4.$$.fragment, local);
      transition_in(project5.$$.fragment, local);
      transition_in(project6.$$.fragment, local);
      if (div4_outro)
        div4_outro.end(1);
      current = true;
    },
    o(local) {
      transition_out(project0.$$.fragment, local);
      transition_out(project1.$$.fragment, local);
      transition_out(project2.$$.fragment, local);
      transition_out(project3.$$.fragment, local);
      transition_out(project4.$$.fragment, local);
      transition_out(project5.$$.fragment, local);
      transition_out(project6.$$.fragment, local);
      div4_outro = create_out_transition(div4, blurOut, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div4);
      destroy_component(project0);
      destroy_component(project1);
      destroy_component(project2);
      destroy_component(project3);
      destroy_component(project4);
      destroy_component(project5);
      destroy_component(project6);
      if (detaching && div4_outro)
        div4_outro.end();
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
