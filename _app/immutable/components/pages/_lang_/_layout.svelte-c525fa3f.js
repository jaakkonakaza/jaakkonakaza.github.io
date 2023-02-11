import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, t as transition_out, d as check_outros, f as transition_in, h as detach, L as component_subscribe, o as onMount, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, n as attr, p as set_style, M as src_url_equal, K as append_hydration, N as listen, g as group_outros, C as noop, u as set_data, O as add_render_callback, P as create_in_transition, D as subscribe, G as create_slot, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, Q as create_out_transition } from "../../../chunks/index-4063d2b1.js";
/* empty css                            */import { l as locale, t } from "../../../chunks/translations-38606d26.js";
import { p as page } from "../../../chunks/stores-f5aaf9b9.js";
import { b as blur } from "../../../chunks/index-f85f5ab5.js";
const profilePhoto = "" + new URL("../../../assets/profile-photo-dcbaf9a7.jpg", import.meta.url).href;
const bgImageDark = "" + new URL("../../../assets/bg-dark-a2ef3ad6.jpg", import.meta.url).href;
const bgImageLight = "" + new URL("../../../assets/bg-light-9cd26f46.jpg", import.meta.url).href;
const _layout_svelte_svelte_type_style_lang = "";
function create_key_block_1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let span;
  let t_1;
  let span_intro;
  let span_outro;
  let current;
  return {
    c() {
      span = element("span");
      t_1 = text("HOME");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t_1 = claim_text(span_nodes, "HOME");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "home-link svelte-1x9prs9");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t_1);
      current = true;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (span_outro)
          span_outro.end(1);
        span_intro = create_in_transition(span, blur, {});
        span_intro.start();
      });
      current = true;
    },
    o(local) {
      if (span_intro)
        span_intro.invalidate();
      span_outro = create_out_transition(span, blur, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching && span_outro)
        span_outro.end();
    }
  };
}
function create_key_block(ctx) {
  let div7;
  let div0;
  let t0;
  let div1;
  let previous_key = (
    /*$lang*/
    ctx[4]
  );
  let t1;
  let div5;
  let a0;
  let img;
  let img_src_value;
  let t2;
  let a0_href_value;
  let t3;
  let div2;
  let a1;
  let t4_value = (
    /*$t*/
    ctx[6]("workHistory") + ""
  );
  let t4;
  let a1_href_value;
  let t5;
  let a2;
  let t6_value = (
    /*$t*/
    ctx[6]("projects") + ""
  );
  let t6;
  let a2_href_value;
  let t7;
  let a3;
  let t8_value = (
    /*$t*/
    ctx[6]("graphicDesign") + ""
  );
  let t8;
  let a3_href_value;
  let t9;
  let div3;
  let a4;
  let t10;
  let t11;
  let a5;
  let t12;
  let t13;
  let button;
  let t14_value = (
    /*darkMode*/
    (ctx[0] ? (
      /*$t*/
      ctx[6]("lightMode")
    ) : (
      /*$t*/
      ctx[6]("darkMode")
    )) + ""
  );
  let t14;
  let t15;
  let div4;
  let a6;
  let t16;
  let t17;
  let a7;
  let t18;
  let t19;
  let a8;
  let t20;
  let t21;
  let div6;
  let div7_intro;
  let current;
  let mounted;
  let dispose;
  let key_block = create_key_block_1(ctx);
  let if_block = (
    /*$page*/
    ctx[5].route.id !== "/[lang]" && create_if_block()
  );
  return {
    c() {
      div7 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      key_block.c();
      t1 = space();
      div5 = element("div");
      a0 = element("a");
      img = element("img");
      t2 = space();
      if (if_block)
        if_block.c();
      t3 = space();
      div2 = element("div");
      a1 = element("a");
      t4 = text(t4_value);
      t5 = space();
      a2 = element("a");
      t6 = text(t6_value);
      t7 = space();
      a3 = element("a");
      t8 = text(t8_value);
      t9 = space();
      div3 = element("div");
      a4 = element("a");
      t10 = text("GitHub");
      t11 = space();
      a5 = element("a");
      t12 = text("LinkedIn");
      t13 = space();
      button = element("button");
      t14 = text(t14_value);
      t15 = space();
      div4 = element("div");
      a6 = element("a");
      t16 = text("ENGLISH");
      t17 = space();
      a7 = element("a");
      t18 = text("SUOMI");
      t19 = space();
      a8 = element("a");
      t20 = text("日本語");
      t21 = space();
      div6 = element("div");
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", { style: true, id: true, class: true });
      var div7_nodes = children(div7);
      div0 = claim_element(div7_nodes, "DIV", {});
      children(div0).forEach(detach);
      t0 = claim_space(div7_nodes);
      div1 = claim_element(div7_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      key_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a0 = claim_element(div5_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        style: true,
        class: true,
        src: true,
        alt: true
      });
      t2 = claim_space(a0_nodes);
      if (if_block)
        if_block.l(a0_nodes);
      a0_nodes.forEach(detach);
      t3 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, t4_value);
      a1_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      a2 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t6 = claim_text(a2_nodes, t6_value);
      a2_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      a3 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t8 = claim_text(a3_nodes, t8_value);
      a3_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t9 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      a4 = claim_element(div3_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t10 = claim_text(a4_nodes, "GitHub");
      a4_nodes.forEach(detach);
      t11 = claim_space(div3_nodes);
      a5 = claim_element(div3_nodes, "A", { href: true, class: true });
      var a5_nodes = children(a5);
      t12 = claim_text(a5_nodes, "LinkedIn");
      a5_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t13 = claim_space(div5_nodes);
      button = claim_element(div5_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t14 = claim_text(button_nodes, t14_value);
      button_nodes.forEach(detach);
      t15 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      a6 = claim_element(div4_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a6_nodes = children(a6);
      t16 = claim_text(a6_nodes, "ENGLISH");
      a6_nodes.forEach(detach);
      t17 = claim_space(div4_nodes);
      a7 = claim_element(div4_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a7_nodes = children(a7);
      t18 = claim_text(a7_nodes, "SUOMI");
      a7_nodes.forEach(detach);
      t19 = claim_space(div4_nodes);
      a8 = claim_element(div4_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a8_nodes = children(a8);
      t20 = claim_text(a8_nodes, "日本語");
      a8_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t21 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {});
      children(div6).forEach(detach);
      div7_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "column svelte-1x9prs9");
      set_style(
        img,
        "opacity",
        /*darkMode*/
        ctx[0] ? 1 : 0.7
      );
      attr(img, "class", "profile-photo svelte-1x9prs9");
      if (!src_url_equal(img.src, img_src_value = profilePhoto))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(a0, "class", "profile-photo-container svelte-1x9prs9");
      attr(a0, "href", a0_href_value = "/" + /*$lang*/
      ctx[4]);
      attr(a1, "href", a1_href_value = "/" + /*$lang*/
      ctx[4] + "/workHistory");
      attr(a1, "class", "svelte-1x9prs9");
      attr(a2, "href", a2_href_value = "/" + /*$lang*/
      ctx[4] + "/projects");
      attr(a2, "class", "svelte-1x9prs9");
      attr(a3, "href", a3_href_value = "/" + /*$lang*/
      ctx[4] + "/graphicDesign");
      attr(a3, "class", "svelte-1x9prs9");
      attr(div2, "class", "link-group svelte-1x9prs9");
      attr(a4, "href", "https://github.com/jaakkonakaza");
      attr(a4, "class", "svelte-1x9prs9");
      attr(a5, "href", "https://www.linkedin.com/in/jaakkonakaza/");
      attr(a5, "class", "svelte-1x9prs9");
      attr(div3, "class", "link-group svelte-1x9prs9");
      attr(button, "class", "svelte-1x9prs9");
      attr(a6, "data-sveltekit-preload-data", "tap");
      attr(a6, "href", "/en");
      attr(a6, "class", "svelte-1x9prs9");
      attr(a7, "data-sveltekit-preload-data", "tap");
      attr(a7, "href", "/fi");
      attr(a7, "class", "svelte-1x9prs9");
      attr(a8, "data-sveltekit-preload-data", "tap");
      attr(a8, "href", "/ja");
      attr(a8, "class", "svelte-1x9prs9");
      attr(div4, "id", "languages");
      attr(div4, "class", "svelte-1x9prs9");
      attr(div5, "class", "column svelte-1x9prs9");
      set_style(
        div7,
        "--bg-color",
        /*bgColor*/
        ctx[2]
      );
      set_style(
        div7,
        "--fg-color",
        /*fgColor*/
        ctx[1]
      );
      set_style(div7, "background-image", "url(" + /*darkMode*/
      (ctx[0] ? bgImageDark : bgImageLight) + ")");
      attr(div7, "id", "container");
      attr(div7, "class", "svelte-1x9prs9");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      append_hydration(div7, div0);
      append_hydration(div7, t0);
      append_hydration(div7, div1);
      key_block.m(div1, null);
      append_hydration(div7, t1);
      append_hydration(div7, div5);
      append_hydration(div5, a0);
      append_hydration(a0, img);
      append_hydration(a0, t2);
      if (if_block)
        if_block.m(a0, null);
      append_hydration(div5, t3);
      append_hydration(div5, div2);
      append_hydration(div2, a1);
      append_hydration(a1, t4);
      append_hydration(div2, t5);
      append_hydration(div2, a2);
      append_hydration(a2, t6);
      append_hydration(div2, t7);
      append_hydration(div2, a3);
      append_hydration(a3, t8);
      append_hydration(div5, t9);
      append_hydration(div5, div3);
      append_hydration(div3, a4);
      append_hydration(a4, t10);
      append_hydration(div3, t11);
      append_hydration(div3, a5);
      append_hydration(a5, t12);
      append_hydration(div5, t13);
      append_hydration(div5, button);
      append_hydration(button, t14);
      append_hydration(div5, t15);
      append_hydration(div5, div4);
      append_hydration(div4, a6);
      append_hydration(a6, t16);
      append_hydration(div4, t17);
      append_hydration(div4, a7);
      append_hydration(a7, t18);
      append_hydration(div4, t19);
      append_hydration(div4, a8);
      append_hydration(a8, t20);
      append_hydration(div7, t21);
      append_hydration(div7, div6);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*$lang*/
      16 && safe_not_equal(previous_key, previous_key = /*$lang*/
      ctx2[4])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block_1(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(div1, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (!current || dirty & /*darkMode*/
      1) {
        set_style(
          img,
          "opacity",
          /*darkMode*/
          ctx2[0] ? 1 : 0.7
        );
      }
      if (
        /*$page*/
        ctx2[5].route.id !== "/[lang]"
      ) {
        if (if_block) {
          if (dirty & /*$page*/
          32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(a0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*$lang*/
      16 && a0_href_value !== (a0_href_value = "/" + /*$lang*/
      ctx2[4])) {
        attr(a0, "href", a0_href_value);
      }
      if ((!current || dirty & /*$t*/
      64) && t4_value !== (t4_value = /*$t*/
      ctx2[6]("workHistory") + ""))
        set_data(t4, t4_value);
      if (!current || dirty & /*$lang*/
      16 && a1_href_value !== (a1_href_value = "/" + /*$lang*/
      ctx2[4] + "/workHistory")) {
        attr(a1, "href", a1_href_value);
      }
      if ((!current || dirty & /*$t*/
      64) && t6_value !== (t6_value = /*$t*/
      ctx2[6]("projects") + ""))
        set_data(t6, t6_value);
      if (!current || dirty & /*$lang*/
      16 && a2_href_value !== (a2_href_value = "/" + /*$lang*/
      ctx2[4] + "/projects")) {
        attr(a2, "href", a2_href_value);
      }
      if ((!current || dirty & /*$t*/
      64) && t8_value !== (t8_value = /*$t*/
      ctx2[6]("graphicDesign") + ""))
        set_data(t8, t8_value);
      if (!current || dirty & /*$lang*/
      16 && a3_href_value !== (a3_href_value = "/" + /*$lang*/
      ctx2[4] + "/graphicDesign")) {
        attr(a3, "href", a3_href_value);
      }
      if ((!current || dirty & /*darkMode, $t*/
      65) && t14_value !== (t14_value = /*darkMode*/
      (ctx2[0] ? (
        /*$t*/
        ctx2[6]("lightMode")
      ) : (
        /*$t*/
        ctx2[6]("darkMode")
      )) + ""))
        set_data(t14, t14_value);
      if (!current || dirty & /*bgColor*/
      4) {
        set_style(
          div7,
          "--bg-color",
          /*bgColor*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*fgColor*/
      2) {
        set_style(
          div7,
          "--fg-color",
          /*fgColor*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*darkMode*/
      1) {
        set_style(div7, "background-image", "url(" + /*darkMode*/
        (ctx2[0] ? bgImageDark : bgImageLight) + ")");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(if_block);
      if (!div7_intro) {
        add_render_callback(() => {
          div7_intro = create_in_transition(div7, blur, {});
          div7_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(key_block);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      key_block.d(detaching);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let previous_key = (
    /*darkMode*/
    ctx[0]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    l(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*darkMode*/
      1 && safe_not_equal(previous_key, previous_key = /*darkMode*/
      ctx2[0])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let lang;
  let bgColor;
  let fgColor;
  let $lang, $$unsubscribe_lang = noop, $$subscribe_lang = () => ($$unsubscribe_lang(), $$unsubscribe_lang = subscribe(lang, ($$value) => $$invalidate(4, $lang = $$value)), lang);
  let $page;
  let $t;
  component_subscribe($$self, page, ($$value) => $$invalidate(5, $page = $$value));
  component_subscribe($$self, t, ($$value) => $$invalidate(6, $t = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_lang());
  let { $$slots: slots = {}, $$scope } = $$props;
  let darkMode = true;
  onMount(() => $$invalidate(0, darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches));
  const click_handler = () => $$invalidate(0, darkMode = !darkMode);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*darkMode*/
    1) {
      $$invalidate(2, bgColor = darkMode ? "#000000" : "#FFFFFF");
    }
    if ($$self.$$.dirty & /*darkMode*/
    1) {
      $$invalidate(1, fgColor = darkMode ? "#FFFBFA" : "#262422");
    }
  };
  $$subscribe_lang($$invalidate(3, lang = locale ?? "en"));
  return [
    darkMode,
    fgColor,
    bgColor,
    lang,
    $lang,
    $page,
    $t,
    $$scope,
    slots,
    click_handler
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
