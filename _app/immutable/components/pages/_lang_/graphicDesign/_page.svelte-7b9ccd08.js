import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, M as src_url_equal, n as attr, b as insert_hydration, K as append_hydration, Y as action_destroyer, u as set_data, C as noop, L as component_subscribe, T as head_selector, f as transition_in, d as check_outros, N as add_render_callback, t as transition_out, Z as destroy_each, x as create_component, y as claim_component, z as mount_component, A as destroy_component, g as group_outros, O as create_in_transition } from "../../../../chunks/index-129eb85f.js";
import { a as blurIn } from "../../../../chunks/customBlur-76bf72bd.js";
import { g as goto } from "../../../../chunks/navigation-95b50835.js";
import { t } from "../../../../chunks/translations-f4fcc980.js";
const aPlusCourses = "" + new URL("../../../../assets/apluscourses-d84e2d78.png", import.meta.url).href;
const aPlusFooter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAAyCAYAAABGQxkxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA/RJREFUeJzt3F2LG2UYBuBnTLKERJAuRLZ0f8KuInhWRfBXqPiBiLWUoiAqiuiBIooVQSmlVkT8QP0VgmjPBNHdn7BlFwNbBDOETMJ41MOkb+i7M0Wu6/R55p2bHL17L0wREXUAAAAAAAB35J62AwAAAAAAwP+Bwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyEDhDgAAAAAAGSjcAQAAAAAgA4U7AAAAAABk0G07AAAAnJTRaBRbW6eXzo9vHseNg4MGE6UpiiJ2dnZX7uzv70Vd1w0lSndmezs2T20unR8dHcZ4PG4wEQAANKeIiLvvlg4AABm8+trr8eFHHy+df//dt/HC8881mCjNcDiM43/+Xbmzed+9MZlMGkqU7quvv4mnn3l26fytN9+ITz+51GAiAABojk/KAAAAAABABgp3AAAAAADIQOEOAAAAAAAZKNwBAAAAACADhTsAAAAAAGSgcAcAAAAAgAwU7gAAAAAAkIHCHQAAAAAAMlC4AwAAAABABgp3AAAAAADIoNt2AAAASLWxsRG9Xi95/3a73W43hsNh8nmLxSKm02ny/i1FUcRgMEjeT9ld57yIiLIso67rtZ6JiOj3+9HpdJL3u93Vf2L0er21fvOqqmI2myXvAwBAm4qIWP/WDQAALbh85Wq8eO6l1t5//fpv8fhjj6793O7uA/H7H3+eQKJ0Dz/0YOzt/bX2cz//8mucPfvICSRK8+W1L+LihfOtvR8AANbhkzIAAAAAAJCBwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyEDhDgAAAAAAGSjcAQAAAAAgA4U7AAAAAABkUERE3XYIAABIsbGxEb1eL3n/4suvxHvvf7B0/tOPP8SF8+eSz1ssFjGdTpP3bymKIgaDQfL+YDCIg8O/V+5sn74/yrJMPrMsy6jr9a/+/X4/Op1O8v6Vq9fiiSefWjp/95234/LnnyWfV1VVzGaz5H0AAGhTt+0AAACQajabrVW+VlW1cj6fz2MymdxprNuq6zr7e8qybCT7uv9gmM/nK+dVVTWSGwAA2uCTMgAAAAAAkIHCHQAAAAAAMlC4AwAAAABABgp3AAAAAADIQOEOAAAAAAAZKNwBAAAAACADhTsAAAAAAGSgcAcAAAAAgAwU7gAAAAAAkIHCHQAAAAAAMigiom47BAAAnITRaBRbW6eXzo9vHseNg4MGE6UpiiJ2dnZX7uzv70Vd331X+TPb27F5anPp/OjoMMbjcYOJAACgOQp3AAAAAADIwCdlAAAAAAAgA4U7AAAAAABkoHAHAAAAAIAMFO4AAAAAAJCBwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyOA/Gw6q/ELWUYsAAAAASUVORK5CYII=";
const o1 = "" + new URL("../../../../assets/o1-0b4d0366.png", import.meta.url).href;
const studios = "" + new URL("../../../../assets/studios-936cbb80.png", import.meta.url).href;
const five = "" + new URL("../../../../assets/five-439740e9.png", import.meta.url).href;
const autoHash = (node) => {
  const callback = (entries) => {
    const entry = entries.find((entry2) => entry2.isIntersecting);
    if (entry) {
      const id = entry.target.id;
      goto(`#${id}`, { replaceState: true, noScroll: true });
    }
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 1
  });
  observer.observe(node);
  return { destroy: () => observer.disconnect() };
};
const Section_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      children(div).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*section*/
      ctx[0].imageFooter))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(img, "width", "1500");
      attr(img, "height", "50");
      attr(img, "class", "svelte-9x2g4y");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*section*/
      1 && !src_url_equal(img.src, img_src_value = /*section*/
      ctx2[0].imageFooter)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_fragment$1(ctx) {
  let section_1;
  let img0;
  let img0_src_value;
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let div;
  let h2;
  let t2_value = (
    /*section*/
    ctx[0].title + ""
  );
  let t2;
  let t3;
  let p;
  let raw_value = (
    /*$t*/
    ctx[1](`designInfo.${/*section*/
    ctx[0].id}`) + ""
  );
  let t4;
  let section_1_id_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*section*/
      ctx2[0].imageFooter
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      section_1 = element("section");
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      div = element("div");
      h2 = element("h2");
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      t4 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      section_1 = claim_element(nodes, "SECTION", { id: true, class: true });
      var section_1_nodes = children(section_1);
      img0 = claim_element(section_1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t0 = claim_space(section_1_nodes);
      img1 = claim_element(section_1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t1 = claim_space(section_1_nodes);
      div = claim_element(section_1_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {});
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, t2_value);
      h2_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t4 = claim_space(section_1_nodes);
      if_block.l(section_1_nodes);
      section_1_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = /*section*/
      ctx[0].image))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "");
      attr(img0, "width", "2000");
      attr(img0, "height", "1000");
      attr(img0, "class", "svelte-9x2g4y");
      attr(img1, "class", "blur svelte-9x2g4y");
      if (!src_url_equal(img1.src, img1_src_value = /*section*/
      ctx[0].image))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "");
      attr(img1, "width", "2000");
      attr(img1, "height", "1000");
      attr(div, "class", "info svelte-9x2g4y");
      attr(section_1, "id", section_1_id_value = /*section*/
      ctx[0].id);
      attr(section_1, "class", "page svelte-9x2g4y");
    },
    m(target, anchor) {
      insert_hydration(target, section_1, anchor);
      append_hydration(section_1, img0);
      append_hydration(section_1, t0);
      append_hydration(section_1, img1);
      append_hydration(section_1, t1);
      append_hydration(section_1, div);
      append_hydration(div, h2);
      append_hydration(h2, t2);
      append_hydration(div, t3);
      append_hydration(div, p);
      p.innerHTML = raw_value;
      append_hydration(section_1, t4);
      if_block.m(section_1, null);
      if (!mounted) {
        dispose = action_destroyer(autoHash.call(null, section_1));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*section*/
      1 && !src_url_equal(img0.src, img0_src_value = /*section*/
      ctx2[0].image)) {
        attr(img0, "src", img0_src_value);
      }
      if (dirty & /*section*/
      1 && !src_url_equal(img1.src, img1_src_value = /*section*/
      ctx2[0].image)) {
        attr(img1, "src", img1_src_value);
      }
      if (dirty & /*section*/
      1 && t2_value !== (t2_value = /*section*/
      ctx2[0].title + ""))
        set_data(t2, t2_value);
      if (dirty & /*$t, section*/
      3 && raw_value !== (raw_value = /*$t*/
      ctx2[1](`designInfo.${/*section*/
      ctx2[0].id}`) + ""))
        p.innerHTML = raw_value;
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(section_1, null);
        }
      }
      if (dirty & /*section*/
      1 && section_1_id_value !== (section_1_id_value = /*section*/
      ctx2[0].id)) {
        attr(section_1, "id", section_1_id_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(section_1);
      if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(1, $t = $$value));
  let { section } = $$props;
  $$self.$$set = ($$props2) => {
    if ("section" in $$props2)
      $$invalidate(0, section = $$props2.section);
  };
  return [section, $t];
}
class Section extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { section: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let section;
  let current;
  section = new Section({ props: { section: (
    /*section*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(section.$$.fragment);
    },
    l(nodes) {
      claim_component(section.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(section, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(section.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(section.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(section, detaching);
    }
  };
}
function create_fragment(ctx) {
  let style;
  let t0;
  let t1;
  let div1;
  let div0;
  let div1_intro;
  let current;
  let each_value = (
    /*sections*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      style = element("style");
      t0 = text("html {\n			scroll-snap-type: y proximity;\n		}");
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-am7o4x", document.head);
      style = claim_element(head_nodes, "STYLE", {});
      var style_nodes = children(style);
      t0 = claim_text(style_nodes, "html {\n			scroll-snap-type: y proximity;\n		}");
      style_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
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
      document.title = "Jaakko Nakaza|Graphic Design";
      attr(div0, "id", "graphic-container");
      attr(div0, "class", "svelte-8pf79l");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      append_hydration(style, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*sections*/
      1) {
        each_value = /*sections*/
        ctx2[0];
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
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
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
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      detach(style);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self) {
  const sections = [
    {
      id: "courses",
      title: "A+ Courses",
      image: aPlusCourses,
      imageFooter: aPlusFooter
    },
    {
      id: "o1",
      title: "Ohjelmointi 1",
      image: o1
    },
    {
      id: "studios",
      title: "Nakaza Studios",
      image: studios
    },
    { id: "five", title: "five", image: five }
  ];
  return [sections];
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
