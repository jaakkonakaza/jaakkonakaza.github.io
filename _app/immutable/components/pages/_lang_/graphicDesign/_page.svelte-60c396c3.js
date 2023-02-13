import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, T as head_selector, h as detach, c as claim_space, l as claim_element, m as children, r as claim_text, M as src_url_equal, n as attr, b as insert_hydration, K as append_hydration, Y as action_destroyer, C as noop, N as add_render_callback, P as create_out_transition, E as run_all, O as create_in_transition } from "../../../../chunks/index-4bc72cb7.js";
import { c as blurOut, a as blurIn } from "../../../../chunks/customBlur-c5b5585c.js";
import { g as goto } from "../../../../chunks/navigation-e4bf2424.js";
const aPlusCourses = "" + new URL("../../../../assets/apluscourses-3ac0e90f.png", import.meta.url).href;
const aPlusFooter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAAyCAYAAABGQxkxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA/RJREFUeJzt3F2LG2UYBuBnTLKERJAuRLZ0f8KuInhWRfBXqPiBiLWUoiAqiuiBIooVQSmlVkT8QP0VgmjPBNHdn7BlFwNbBDOETMJ41MOkb+i7M0Wu6/R55p2bHL17L0wREXUAAAAAAAB35J62AwAAAAAAwP+Bwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyEDhDgAAAAAAGSjcAQAAAAAgA4U7AAAAAABk0G07AAAAnJTRaBRbW6eXzo9vHseNg4MGE6UpiiJ2dnZX7uzv70Vd1w0lSndmezs2T20unR8dHcZ4PG4wEQAANKeIiLvvlg4AABm8+trr8eFHHy+df//dt/HC8881mCjNcDiM43/+Xbmzed+9MZlMGkqU7quvv4mnn3l26fytN9+ITz+51GAiAABojk/KAAAAAABABgp3AAAAAADIQOEOAAAAAAAZKNwBAAAAACADhTsAAAAAAGSgcAcAAAAAgAwU7gAAAAAAkIHCHQAAAAAAMlC4AwAAAABABgp3AAAAAADIoNt2AAAASLWxsRG9Xi95/3a73W43hsNh8nmLxSKm02ny/i1FUcRgMEjeT9ld57yIiLIso67rtZ6JiOj3+9HpdJL3u93Vf2L0er21fvOqqmI2myXvAwBAm4qIWP/WDQAALbh85Wq8eO6l1t5//fpv8fhjj6793O7uA/H7H3+eQKJ0Dz/0YOzt/bX2cz//8mucPfvICSRK8+W1L+LihfOtvR8AANbhkzIAAAAAAJCBwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyEDhDgAAAAAAGSjcAQAAAAAgA4U7AAAAAABkUERE3XYIAABIsbGxEb1eL3n/4suvxHvvf7B0/tOPP8SF8+eSz1ssFjGdTpP3bymKIgaDQfL+YDCIg8O/V+5sn74/yrJMPrMsy6jr9a/+/X4/Op1O8v6Vq9fiiSefWjp/95234/LnnyWfV1VVzGaz5H0AAGhTt+0AAACQajabrVW+VlW1cj6fz2MymdxprNuq6zr7e8qybCT7uv9gmM/nK+dVVTWSGwAA2uCTMgAAAAAAkIHCHQAAAAAAMlC4AwAAAABABgp3AAAAAADIQOEOAAAAAAAZKNwBAAAAACADhTsAAAAAAGSgcAcAAAAAgAwU7gAAAAAAkIHCHQAAAAAAMigiom47BAAAnITRaBRbW6eXzo9vHseNg4MGE6UpiiJ2dnZX7uzv70Vd331X+TPb27F5anPp/OjoMMbjcYOJAACgOQp3AAAAAADIwCdlAAAAAAAgA4U7AAAAAABkoHAHAAAAAIAMFO4AAAAAAJCBwh0AAAAAADJQuAMAAAAAQAYKdwAAAAAAyOA/Gw6q/ELWUYsAAAAASUVORK5CYII=";
const o1 = "" + new URL("../../../../assets/o1-0b4d0366.png", import.meta.url).href;
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
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let t0;
  let div4;
  let div3;
  let section0;
  let img0;
  let img0_src_value;
  let t1;
  let img1;
  let img1_src_value;
  let t2;
  let div0;
  let h20;
  let t3;
  let t4;
  let p0;
  let a0;
  let t5;
  let t6;
  let t7;
  let img2;
  let img2_src_value;
  let t8;
  let section1;
  let img3;
  let img3_src_value;
  let t9;
  let img4;
  let img4_src_value;
  let t10;
  let div1;
  let h21;
  let t11;
  let t12;
  let p1;
  let a1;
  let t13;
  let t14;
  let a2;
  let t15;
  let t16;
  let t17;
  let div2;
  let div4_intro;
  let div4_outro;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      t0 = space();
      div4 = element("div");
      div3 = element("div");
      section0 = element("section");
      img0 = element("img");
      t1 = space();
      img1 = element("img");
      t2 = space();
      div0 = element("div");
      h20 = element("h2");
      t3 = text("A+ Courses");
      t4 = space();
      p0 = element("p");
      a0 = element("a");
      t5 = text("A+ Courses");
      t6 = text(" is a plugin for IntelliJ.\n					It is used on programming courses to make the experience of using the IDE more smooth. I have\n					designed the branding and have been a part of designing the user experience and look of the\n					plugin. The logo is a combination of the characters A and + and it's look is inspired by gradient-rich\n					style of the IntelliJ branding.");
      t7 = space();
      img2 = element("img");
      t8 = space();
      section1 = element("section");
      img3 = element("img");
      t9 = space();
      img4 = element("img");
      t10 = space();
      div1 = element("div");
      h21 = element("h2");
      t11 = text("Ohjelmointi 1");
      t12 = space();
      p1 = element("p");
      a1 = element("a");
      t13 = text("Ohjelmointi 1");
      t14 = text(" (Programming 1) is an\n					introductory Scala programming course. The logo was designed to be friendly and modern,\n					with the the number 1 wrapped by the Scala 3 logo. The O filled with art by\n					");
      a2 = element("a");
      t15 = text("Christina Lassheikki");
      t16 = text(", which is also used to\n					illustrate the course.");
      t17 = space();
      div2 = element("div");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-sp8zox", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      section0 = claim_element(div3_nodes, "SECTION", { id: true, class: true });
      var section0_nodes = children(section0);
      img0 = claim_element(section0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t1 = claim_space(section0_nodes);
      img1 = claim_element(section0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t2 = claim_space(section0_nodes);
      div0 = claim_element(section0_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h20 = claim_element(div0_nodes, "H2", {});
      var h20_nodes = children(h20);
      t3 = claim_text(h20_nodes, "A+ Courses");
      h20_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "A+ Courses");
      a0_nodes.forEach(detach);
      t6 = claim_text(p0_nodes, " is a plugin for IntelliJ.\n					It is used on programming courses to make the experience of using the IDE more smooth. I have\n					designed the branding and have been a part of designing the user experience and look of the\n					plugin. The logo is a combination of the characters A and + and it's look is inspired by gradient-rich\n					style of the IntelliJ branding.");
      p0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t7 = claim_space(section0_nodes);
      img2 = claim_element(section0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      section0_nodes.forEach(detach);
      t8 = claim_space(div3_nodes);
      section1 = claim_element(div3_nodes, "SECTION", { id: true, class: true });
      var section1_nodes = children(section1);
      img3 = claim_element(section1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t9 = claim_space(section1_nodes);
      img4 = claim_element(section1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t10 = claim_space(section1_nodes);
      div1 = claim_element(section1_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h21 = claim_element(div1_nodes, "H2", {});
      var h21_nodes = children(h21);
      t11 = claim_text(h21_nodes, "Ohjelmointi 1");
      h21_nodes.forEach(detach);
      t12 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t13 = claim_text(a1_nodes, "Ohjelmointi 1");
      a1_nodes.forEach(detach);
      t14 = claim_text(p1_nodes, " (Programming 1) is an\n					introductory Scala programming course. The logo was designed to be friendly and modern,\n					with the the number 1 wrapped by the Scala 3 logo. The O filled with art by\n					");
      a2 = claim_element(p1_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t15 = claim_text(a2_nodes, "Christina Lassheikki");
      a2_nodes.forEach(detach);
      t16 = claim_text(p1_nodes, ", which is also used to\n					illustrate the course.");
      p1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t17 = claim_space(section1_nodes);
      div2 = claim_element(section1_nodes, "DIV", {});
      children(div2).forEach(detach);
      section1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Jaakko Nakaza|Graphic Design";
      if (!src_url_equal(img0.src, img0_src_value = aPlusCourses))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "");
      attr(img0, "width", "2000");
      attr(img0, "height", "1000");
      attr(img0, "class", "svelte-1c8d4cx");
      attr(img1, "class", "blur svelte-1c8d4cx");
      if (!src_url_equal(img1.src, img1_src_value = aPlusCourses))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "");
      attr(img1, "width", "2000");
      attr(img1, "height", "1000");
      attr(a0, "href", "https://github.com/Aalto-LeTech/aplus-courses");
      attr(div0, "class", "info svelte-1c8d4cx");
      if (!src_url_equal(img2.src, img2_src_value = aPlusFooter))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "");
      attr(img2, "width", "1500");
      attr(img2, "height", "50");
      attr(img2, "class", "svelte-1c8d4cx");
      attr(section0, "id", "aPlusCourses");
      attr(section0, "class", "page svelte-1c8d4cx");
      if (!src_url_equal(img3.src, img3_src_value = o1))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "");
      attr(img3, "width", "2000");
      attr(img3, "height", "1000");
      attr(img3, "class", "svelte-1c8d4cx");
      attr(img4, "class", "blur svelte-1c8d4cx");
      if (!src_url_equal(img4.src, img4_src_value = o1))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "");
      attr(img4, "width", "2000");
      attr(img4, "height", "1000");
      attr(a1, "href", "https://plus.cs.aalto.fi/o1/");
      attr(a2, "href", "https://christinalassheikki.com/");
      attr(div1, "class", "info svelte-1c8d4cx");
      attr(section1, "id", "o1");
      attr(section1, "class", "page svelte-1c8d4cx");
      attr(div3, "id", "graphic-container");
      attr(div3, "class", "svelte-1c8d4cx");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, section0);
      append_hydration(section0, img0);
      append_hydration(section0, t1);
      append_hydration(section0, img1);
      append_hydration(section0, t2);
      append_hydration(section0, div0);
      append_hydration(div0, h20);
      append_hydration(h20, t3);
      append_hydration(div0, t4);
      append_hydration(div0, p0);
      append_hydration(p0, a0);
      append_hydration(a0, t5);
      append_hydration(p0, t6);
      append_hydration(section0, t7);
      append_hydration(section0, img2);
      append_hydration(div3, t8);
      append_hydration(div3, section1);
      append_hydration(section1, img3);
      append_hydration(section1, t9);
      append_hydration(section1, img4);
      append_hydration(section1, t10);
      append_hydration(section1, div1);
      append_hydration(div1, h21);
      append_hydration(h21, t11);
      append_hydration(div1, t12);
      append_hydration(div1, p1);
      append_hydration(p1, a1);
      append_hydration(a1, t13);
      append_hydration(p1, t14);
      append_hydration(p1, a2);
      append_hydration(a2, t15);
      append_hydration(p1, t16);
      append_hydration(section1, t17);
      append_hydration(section1, div2);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(autoHash.call(null, section0)),
          action_destroyer(autoHash.call(null, section1))
        ];
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (div4_outro)
          div4_outro.end(1);
        div4_intro = create_in_transition(div4, blurIn, {});
        div4_intro.start();
      });
      current = true;
    },
    o(local) {
      if (div4_intro)
        div4_intro.invalidate();
      div4_outro = create_out_transition(div4, blurOut, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div4);
      if (detaching && div4_outro)
        div4_outro.end();
      mounted = false;
      run_all(dispose);
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
