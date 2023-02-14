import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, x as create_component, l as claim_element, m as children, c as claim_space, h as detach, y as claim_component, p as set_style, n as attr, M as src_url_equal, b as insert_hydration, K as append_hydration, z as mount_component, f as transition_in, g as group_outros, t as transition_out, d as check_outros, A as destroy_component, L as component_subscribe, q as text, r as claim_text, N as add_render_callback, O as create_in_transition, P as create_out_transition, C as noop, D as subscribe, Q as listen, u as set_data, E as run_all, R as null_to_empty, e as empty, T as head_selector, o as onMount, B as tick, U as globals, v as binding_callbacks, V as bind, W as add_flush_callback, G as create_slot, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes } from "../../../chunks/index-72c9b203.js";
import { t, l as locale } from "../../../chunks/translations-931747f1.js";
import { p as page } from "../../../chunks/stores-9accd5a4.js";
import { b as blur, a as blurIn, c as blurOut } from "../../../chunks/customBlur-e613ac26.js";
import { N as Name } from "../../../chunks/Name-db0adf49.js";
const _900 = "";
const _400$1 = "";
const _400 = "";
const profilePhoto = "" + new URL("../../../assets/profile-photo-dcbaf9a7.jpg", import.meta.url).href;
const ProfilePhoto_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let span;
  let t2;
  let span_intro;
  let span_outro;
  let current;
  return {
    c() {
      span = element("span");
      t2 = text("HOME");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "HOME");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "home-link svelte-12m3s79");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t2);
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
function create_fragment$3(ctx) {
  let a;
  let img0;
  let img0_src_value;
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let a_href_value;
  let t2;
  let div;
  let name;
  let current;
  let if_block = (
    /*$page*/
    ctx[3].route.id !== "/[lang]" && create_if_block$1()
  );
  name = new Name({});
  return {
    c() {
      a = element("a");
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      div = element("div");
      create_component(name.$$.fragment);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      img0 = claim_element(a_nodes, "IMG", {
        style: true,
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(a_nodes);
      img1 = claim_element(a_nodes, "IMG", {
        style: true,
        class: true,
        id: true,
        src: true,
        alt: true
      });
      t1 = claim_space(a_nodes);
      if (if_block)
        if_block.l(a_nodes);
      a_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { id: true, class: true });
      var div_nodes = children(div);
      claim_component(name.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(
        img0,
        "opacity",
        /*darkMode*/
        ctx[1] ? 1 : 0.7
      );
      attr(img0, "class", "profile-photo svelte-12m3s79");
      if (!src_url_equal(img0.src, img0_src_value = profilePhoto))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "");
      set_style(
        img1,
        "opacity",
        /*darkMode*/
        ctx[1] ? 1 : 0.7
      );
      attr(img1, "class", "profile-photo svelte-12m3s79");
      attr(img1, "id", "blur");
      if (!src_url_equal(img1.src, img1_src_value = profilePhoto))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "");
      attr(a, "class", "profile-photo-container svelte-12m3s79");
      attr(a, "href", a_href_value = "/" + /*$lang*/
      ctx[2]);
      attr(div, "id", "name-container");
      attr(div, "class", "svelte-12m3s79");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, img0);
      append_hydration(a, t0);
      append_hydration(a, img1);
      append_hydration(a, t1);
      if (if_block)
        if_block.m(a, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div, anchor);
      mount_component(name, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*darkMode*/
      2) {
        set_style(
          img0,
          "opacity",
          /*darkMode*/
          ctx2[1] ? 1 : 0.7
        );
      }
      if (!current || dirty & /*darkMode*/
      2) {
        set_style(
          img1,
          "opacity",
          /*darkMode*/
          ctx2[1] ? 1 : 0.7
        );
      }
      if (
        /*$page*/
        ctx2[3].route.id !== "/[lang]"
      ) {
        if (if_block) {
          if (dirty & /*$page*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(a, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*$lang*/
      4 && a_href_value !== (a_href_value = "/" + /*$lang*/
      ctx2[2])) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(name.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(name.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      destroy_component(name);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $lang, $$unsubscribe_lang = noop, $$subscribe_lang = () => ($$unsubscribe_lang(), $$unsubscribe_lang = subscribe(lang, ($$value) => $$invalidate(2, $lang = $$value)), lang);
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(3, $page = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_lang());
  let { lang } = $$props;
  $$subscribe_lang();
  let { darkMode } = $$props;
  $$self.$$set = ($$props2) => {
    if ("lang" in $$props2)
      $$subscribe_lang($$invalidate(0, lang = $$props2.lang));
    if ("darkMode" in $$props2)
      $$invalidate(1, darkMode = $$props2.darkMode);
  };
  return [lang, darkMode, $lang, $page];
}
class ProfilePhoto extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { lang: 0, darkMode: 1 });
  }
}
const NavLink_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let a;
  let t_1_value = (
    /*$t*/
    ctx[3](
      /*location*/
      ctx[0]
    ) + ""
  );
  let t_1;
  let a_href_value;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      t_1 = text(t_1_value);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t_1 = claim_text(a_nodes, t_1_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "data-sveltekit-preload-data", "hover");
      attr(a, "href", a_href_value = "/" + /*$lang*/
      ctx[2] + "/" + /*location*/
      ctx[0]);
      attr(a, "class", "svelte-qyyw96");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t_1);
      if (!mounted) {
        dispose = [
          listen(
            a,
            "focus",
            /*setColor*/
            ctx[4]
          ),
          listen(
            a,
            "mouseenter",
            /*setColor*/
            ctx[4]
          ),
          listen(
            a,
            "mouseleave",
            /*resetColor*/
            ctx[5]
          ),
          listen(
            a,
            "mouseout",
            /*resetColor*/
            ctx[5]
          ),
          listen(
            a,
            "blur",
            /*resetColor*/
            ctx[5]
          ),
          listen(
            a,
            "click",
            /*resetColor*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$t, location*/
      9 && t_1_value !== (t_1_value = /*$t*/
      ctx2[3](
        /*location*/
        ctx2[0]
      ) + ""))
        set_data(t_1, t_1_value);
      if (dirty & /*$lang, location*/
      5 && a_href_value !== (a_href_value = "/" + /*$lang*/
      ctx2[2] + "/" + /*location*/
      ctx2[0])) {
        attr(a, "href", a_href_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let lang;
  let $lang, $$unsubscribe_lang = noop, $$subscribe_lang = () => ($$unsubscribe_lang(), $$unsubscribe_lang = subscribe(lang, ($$value) => $$invalidate(2, $lang = $$value)), lang);
  let $t;
  component_subscribe($$self, t, ($$value) => $$invalidate(3, $t = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_lang());
  let { backgroundColor } = $$props;
  let { newBackgroundColor } = $$props;
  let { location } = $$props;
  const setColor = () => $$invalidate(6, backgroundColor = newBackgroundColor);
  const resetColor = () => $$invalidate(6, backgroundColor = void 0);
  $$self.$$set = ($$props2) => {
    if ("backgroundColor" in $$props2)
      $$invalidate(6, backgroundColor = $$props2.backgroundColor);
    if ("newBackgroundColor" in $$props2)
      $$invalidate(7, newBackgroundColor = $$props2.newBackgroundColor);
    if ("location" in $$props2)
      $$invalidate(0, location = $$props2.location);
  };
  $$subscribe_lang($$invalidate(1, lang = locale ?? "en"));
  return [
    location,
    lang,
    $lang,
    $t,
    setColor,
    resetColor,
    backgroundColor,
    newBackgroundColor
  ];
}
class NavLink extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      backgroundColor: 6,
      newBackgroundColor: 7,
      location: 0
    });
  }
}
const Background_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div0;
  let div0_class_value;
  let t2;
  let div1;
  return {
    c() {
      div0 = element("div");
      t2 = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { id: true, class: true });
      children(div0).forEach(detach);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      children(div1).forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "id", "background");
      attr(div0, "class", div0_class_value = null_to_empty(
        /*backgroundClass*/
        ctx[0]
      ) + " svelte-13lju9z");
      attr(div1, "id", "background-noise");
      attr(div1, "class", "svelte-13lju9z");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div1, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*backgroundClass*/
      1 && div0_class_value !== (div0_class_value = null_to_empty(
        /*backgroundClass*/
        ctx2[0]
      ) + " svelte-13lju9z")) {
        attr(div0, "class", div0_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { backgroundClass } = $$props;
  $$self.$$set = ($$props2) => {
    if ("backgroundClass" in $$props2)
      $$invalidate(0, backgroundClass = $$props2.backgroundClass);
  };
  return [backgroundClass];
}
class Background extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { backgroundClass: 0 });
  }
}
const _layout_svelte_svelte_type_style_lang = "";
const { document: document_1 } = globals;
function create_key_block_1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
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
        2048)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
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
  let div3;
  let div0;
  let navlink0;
  let updating_backgroundColor;
  let t0;
  let navlink1;
  let updating_backgroundColor_1;
  let t1;
  let navlink2;
  let updating_backgroundColor_2;
  let t2;
  let div1;
  let a0;
  let t3;
  let t4;
  let a1;
  let t5;
  let t6;
  let button;
  let t7_value = (
    /*darkMode*/
    (ctx[2] ? (
      /*$t*/
      ctx[8]("lightMode")
    ) : (
      /*$t*/
      ctx[8]("darkMode")
    )) + ""
  );
  let t7;
  let t8;
  let div2;
  let a2;
  let t9;
  let t10;
  let a3;
  let t11;
  let t12;
  let a4;
  let t13;
  let div3_class_value;
  let div3_intro;
  let div3_outro;
  let current;
  let mounted;
  let dispose;
  function navlink0_backgroundColor_binding(value) {
    ctx[14](value);
  }
  let navlink0_props = {
    newBackgroundColor: BackgroundColor.Green,
    location: "workHistory"
  };
  if (
    /*backgroundColor*/
    ctx[0] !== void 0
  ) {
    navlink0_props.backgroundColor = /*backgroundColor*/
    ctx[0];
  }
  navlink0 = new NavLink({ props: navlink0_props });
  binding_callbacks.push(() => bind(navlink0, "backgroundColor", navlink0_backgroundColor_binding));
  function navlink1_backgroundColor_binding(value) {
    ctx[15](value);
  }
  let navlink1_props = {
    newBackgroundColor: BackgroundColor.Blue,
    location: "projects"
  };
  if (
    /*backgroundColor*/
    ctx[0] !== void 0
  ) {
    navlink1_props.backgroundColor = /*backgroundColor*/
    ctx[0];
  }
  navlink1 = new NavLink({ props: navlink1_props });
  binding_callbacks.push(() => bind(navlink1, "backgroundColor", navlink1_backgroundColor_binding));
  function navlink2_backgroundColor_binding(value) {
    ctx[16](value);
  }
  let navlink2_props = {
    newBackgroundColor: BackgroundColor.Orange,
    location: "graphicDesign"
  };
  if (
    /*backgroundColor*/
    ctx[0] !== void 0
  ) {
    navlink2_props.backgroundColor = /*backgroundColor*/
    ctx[0];
  }
  navlink2 = new NavLink({ props: navlink2_props });
  binding_callbacks.push(() => bind(navlink2, "backgroundColor", navlink2_backgroundColor_binding));
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      create_component(navlink0.$$.fragment);
      t0 = space();
      create_component(navlink1.$$.fragment);
      t1 = space();
      create_component(navlink2.$$.fragment);
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      t3 = text("GitHub");
      t4 = space();
      a1 = element("a");
      t5 = text("LinkedIn");
      t6 = space();
      button = element("button");
      t7 = text(t7_value);
      t8 = space();
      div2 = element("div");
      a2 = element("a");
      t9 = text("ENGLISH");
      t10 = space();
      a3 = element("a");
      t11 = text("SUOMI");
      t12 = space();
      a4 = element("a");
      t13 = text("日本語");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(navlink0.$$.fragment, div0_nodes);
      t0 = claim_space(div0_nodes);
      claim_component(navlink1.$$.fragment, div0_nodes);
      t1 = claim_space(div0_nodes);
      claim_component(navlink2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "GitHub");
      a0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "LinkedIn");
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      button = claim_element(div3_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t7 = claim_text(button_nodes, t7_value);
      button_nodes.forEach(detach);
      t8 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      a2 = claim_element(div2_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "ENGLISH");
      a2_nodes.forEach(detach);
      t10 = claim_space(div2_nodes);
      a3 = claim_element(div2_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a3_nodes = children(a3);
      t11 = claim_text(a3_nodes, "SUOMI");
      a3_nodes.forEach(detach);
      t12 = claim_space(div2_nodes);
      a4 = claim_element(div2_nodes, "A", {
        "data-sveltekit-preload-data": true,
        href: true,
        class: true
      });
      var a4_nodes = children(a4);
      t13 = claim_text(a4_nodes, "日本語");
      a4_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "link-group svelte-co2i6n");
      attr(a0, "href", "https://github.com/jaakkonakaza");
      attr(a0, "class", "svelte-co2i6n");
      attr(a1, "href", "https://www.linkedin.com/in/jaakkonakaza/");
      attr(a1, "class", "svelte-co2i6n");
      attr(div1, "class", "link-group svelte-co2i6n");
      attr(button, "class", "svelte-co2i6n");
      attr(a2, "data-sveltekit-preload-data", "tap");
      attr(a2, "href", "/en");
      attr(a2, "class", "svelte-co2i6n");
      attr(a3, "data-sveltekit-preload-data", "tap");
      attr(a3, "href", "/fi");
      attr(a3, "class", "svelte-co2i6n");
      attr(a4, "data-sveltekit-preload-data", "tap");
      attr(a4, "href", "/ja");
      attr(a4, "class", "svelte-co2i6n");
      attr(div2, "id", "languages");
      attr(div2, "class", "svelte-co2i6n");
      attr(div3, "class", div3_class_value = "column " + /*$page*/
      (ctx[1].route.id !== "/[lang]" ? "links-hidden" : "") + " svelte-co2i6n");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      mount_component(navlink0, div0, null);
      append_hydration(div0, t0);
      mount_component(navlink1, div0, null);
      append_hydration(div0, t1);
      mount_component(navlink2, div0, null);
      append_hydration(div3, t2);
      append_hydration(div3, div1);
      append_hydration(div1, a0);
      append_hydration(a0, t3);
      append_hydration(div1, t4);
      append_hydration(div1, a1);
      append_hydration(a1, t5);
      append_hydration(div3, t6);
      append_hydration(div3, button);
      append_hydration(button, t7);
      append_hydration(div3, t8);
      append_hydration(div3, div2);
      append_hydration(div2, a2);
      append_hydration(a2, t9);
      append_hydration(div2, t10);
      append_hydration(div2, a3);
      append_hydration(a3, t11);
      append_hydration(div2, t12);
      append_hydration(div2, a4);
      append_hydration(a4, t13);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[17]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const navlink0_changes = {};
      if (!updating_backgroundColor && dirty & /*backgroundColor*/
      1) {
        updating_backgroundColor = true;
        navlink0_changes.backgroundColor = /*backgroundColor*/
        ctx2[0];
        add_flush_callback(() => updating_backgroundColor = false);
      }
      navlink0.$set(navlink0_changes);
      const navlink1_changes = {};
      if (!updating_backgroundColor_1 && dirty & /*backgroundColor*/
      1) {
        updating_backgroundColor_1 = true;
        navlink1_changes.backgroundColor = /*backgroundColor*/
        ctx2[0];
        add_flush_callback(() => updating_backgroundColor_1 = false);
      }
      navlink1.$set(navlink1_changes);
      const navlink2_changes = {};
      if (!updating_backgroundColor_2 && dirty & /*backgroundColor*/
      1) {
        updating_backgroundColor_2 = true;
        navlink2_changes.backgroundColor = /*backgroundColor*/
        ctx2[0];
        add_flush_callback(() => updating_backgroundColor_2 = false);
      }
      navlink2.$set(navlink2_changes);
      if ((!current || dirty & /*darkMode, $t*/
      260) && t7_value !== (t7_value = /*darkMode*/
      (ctx2[2] ? (
        /*$t*/
        ctx2[8]("lightMode")
      ) : (
        /*$t*/
        ctx2[8]("darkMode")
      )) + ""))
        set_data(t7, t7_value);
      if (!current || dirty & /*$page*/
      2 && div3_class_value !== (div3_class_value = "column " + /*$page*/
      (ctx2[1].route.id !== "/[lang]" ? "links-hidden" : "") + " svelte-co2i6n")) {
        attr(div3, "class", div3_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navlink0.$$.fragment, local);
      transition_in(navlink1.$$.fragment, local);
      transition_in(navlink2.$$.fragment, local);
      add_render_callback(() => {
        if (div3_outro)
          div3_outro.end(1);
        div3_intro = create_in_transition(div3, blurIn, {});
        div3_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(navlink0.$$.fragment, local);
      transition_out(navlink1.$$.fragment, local);
      transition_out(navlink2.$$.fragment, local);
      if (div3_intro)
        div3_intro.invalidate();
      div3_outro = create_out_transition(div3, blurOut, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(navlink0);
      destroy_component(navlink1);
      destroy_component(navlink2);
      if (detaching && div3_outro)
        div3_outro.end();
      mounted = false;
      dispose();
    }
  };
}
function create_key_block(ctx) {
  let background;
  let updating_backgroundClass;
  let t0;
  let div3;
  let div0;
  let t1;
  let div1;
  let previous_key = (
    /*$lang*/
    ctx[7]
  );
  let t2;
  let nav;
  let profilephoto;
  let t3;
  let t4;
  let div2;
  let div3_intro;
  let current;
  function background_backgroundClass_binding(value) {
    ctx[13](value);
  }
  let background_props = {};
  if (
    /*backgroundClass*/
    ctx[5] !== void 0
  ) {
    background_props.backgroundClass = /*backgroundClass*/
    ctx[5];
  }
  background = new Background({ props: background_props });
  binding_callbacks.push(() => bind(background, "backgroundClass", background_backgroundClass_binding));
  let key_block = create_key_block_1(ctx);
  profilephoto = new ProfilePhoto({
    props: {
      darkMode: (
        /*darkMode*/
        ctx[2]
      ),
      lang: (
        /*lang*/
        ctx[6]
      )
    }
  });
  let if_block = (!/*isMobileWidth*/
  ctx[4] || /*$page*/
  ctx[1].route.id === "/[lang]") && create_if_block(ctx);
  return {
    c() {
      create_component(background.$$.fragment);
      t0 = space();
      div3 = element("div");
      div0 = element("div");
      t1 = space();
      div1 = element("div");
      key_block.c();
      t2 = space();
      nav = element("nav");
      create_component(profilephoto.$$.fragment);
      t3 = space();
      if (if_block)
        if_block.c();
      t4 = space();
      div2 = element("div");
      this.h();
    },
    l(nodes) {
      claim_component(background.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {});
      children(div0).forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true, id: true });
      var div1_nodes = children(div1);
      key_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      nav = claim_element(div3_nodes, "NAV", { class: true, id: true });
      var nav_nodes = children(nav);
      claim_component(profilephoto.$$.fragment, nav_nodes);
      t3 = claim_space(nav_nodes);
      if (if_block)
        if_block.l(nav_nodes);
      nav_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      children(div2).forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "column svelte-co2i6n");
      attr(div1, "id", "page-content");
      attr(nav, "class", "column svelte-co2i6n");
      attr(nav, "id", "nav-content");
      attr(div3, "id", "container");
      attr(div3, "class", "svelte-co2i6n");
    },
    m(target, anchor) {
      mount_component(background, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      key_block.m(div1, null);
      append_hydration(div3, t2);
      append_hydration(div3, nav);
      mount_component(profilephoto, nav, null);
      append_hydration(nav, t3);
      if (if_block)
        if_block.m(nav, null);
      append_hydration(div3, t4);
      append_hydration(div3, div2);
      current = true;
    },
    p(ctx2, dirty) {
      const background_changes = {};
      if (!updating_backgroundClass && dirty & /*backgroundClass*/
      32) {
        updating_backgroundClass = true;
        background_changes.backgroundClass = /*backgroundClass*/
        ctx2[5];
        add_flush_callback(() => updating_backgroundClass = false);
      }
      background.$set(background_changes);
      if (dirty & /*$lang*/
      128 && safe_not_equal(previous_key, previous_key = /*$lang*/
      ctx2[7])) {
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
      const profilephoto_changes = {};
      if (dirty & /*darkMode*/
      4)
        profilephoto_changes.darkMode = /*darkMode*/
        ctx2[2];
      if (dirty & /*lang*/
      64)
        profilephoto_changes.lang = /*lang*/
        ctx2[6];
      profilephoto.$set(profilephoto_changes);
      if (!/*isMobileWidth*/
      ctx2[4] || /*$page*/
      ctx2[1].route.id === "/[lang]") {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*isMobileWidth, $page*/
          18) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(nav, null);
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
      transition_in(background.$$.fragment, local);
      transition_in(key_block);
      transition_in(profilephoto.$$.fragment, local);
      transition_in(if_block);
      if (!div3_intro) {
        add_render_callback(() => {
          div3_intro = create_in_transition(div3, blur, {});
          div3_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(background.$$.fragment, local);
      transition_out(key_block);
      transition_out(profilephoto.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(background, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div3);
      key_block.d(detaching);
      destroy_component(profilephoto);
      if (if_block)
        if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let meta_content_value;
  let t_1;
  let previous_key = (
    /*loaded*/
    ctx[3] && /*darkMode*/
    ctx[2]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    c() {
      meta = element("meta");
      t_1 = space();
      key_block.c();
      key_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-yk52po", document_1.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t_1 = claim_space(nodes);
      key_block.l(nodes);
      key_block_anchor = empty();
      this.h();
    },
    h() {
      attr(meta, "name", "theme-color");
      attr(meta, "content", meta_content_value = /*darkMode*/
      ctx[2] ? "#000000" : "#FFFFFF");
    },
    m(target, anchor) {
      append_hydration(document_1.head, meta);
      insert_hydration(target, t_1, anchor);
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*darkMode*/
      4 && meta_content_value !== (meta_content_value = /*darkMode*/
      ctx2[2] ? "#000000" : "#FFFFFF")) {
        attr(meta, "content", meta_content_value);
      }
      if (dirty & /*loaded, darkMode*/
      12 && safe_not_equal(previous_key, previous_key = /*loaded*/
      ctx2[3] && /*darkMode*/
      ctx2[2])) {
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
      detach(meta);
      if (detaching)
        detach(t_1);
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
var BackgroundColor = /* @__PURE__ */ ((BackgroundColor2) => {
  BackgroundColor2["Green"] = "green";
  BackgroundColor2["Blue"] = "blue";
  BackgroundColor2["LightBlue"] = "light-blue";
  BackgroundColor2["Pink"] = "pink";
  BackgroundColor2["Orange"] = "orange";
  return BackgroundColor2;
})(BackgroundColor || {});
const mobileWidth = 815;
function instance($$self, $$props, $$invalidate) {
  let lang;
  let currentPageBackgroundColor;
  let backgroundClass;
  let $page;
  let $lang, $$unsubscribe_lang = noop, $$subscribe_lang = () => ($$unsubscribe_lang(), $$unsubscribe_lang = subscribe(lang, ($$value) => $$invalidate(7, $lang = $$value)), lang);
  let $t;
  component_subscribe($$self, page, ($$value) => $$invalidate(1, $page = $$value));
  component_subscribe($$self, t, ($$value) => $$invalidate(8, $t = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_lang());
  let { $$slots: slots = {}, $$scope } = $$props;
  let darkMode = true;
  let loaded = false;
  let backgroundColor;
  const setDarkMode = (isDarkMode) => {
    $$invalidate(2, darkMode = isDarkMode);
    const theme = isDarkMode ? "dark" : "";
    document.body.className = theme;
  };
  let isMobileWidth = false;
  let resizeObserver;
  onMount(async () => {
    $$invalidate(2, darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      setDarkMode(event.matches);
    });
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        $$invalidate(4, isMobileWidth = entry.contentRect.width < mobileWidth);
      }
    });
    resizeObserver.observe(document.body);
    await tick();
    $$invalidate(3, loaded = true);
  });
  function background_backgroundClass_binding(value) {
    backgroundClass = value;
    $$invalidate(5, backgroundClass), $$invalidate(10, currentPageBackgroundColor), $$invalidate(0, backgroundColor), $$invalidate(1, $page);
  }
  function navlink0_backgroundColor_binding(value) {
    backgroundColor = value;
    $$invalidate(0, backgroundColor);
  }
  function navlink1_backgroundColor_binding(value) {
    backgroundColor = value;
    $$invalidate(0, backgroundColor);
  }
  function navlink2_backgroundColor_binding(value) {
    backgroundColor = value;
    $$invalidate(0, backgroundColor);
  }
  const click_handler = () => {
    setDarkMode(!darkMode);
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    2) {
      $$invalidate(10, currentPageBackgroundColor = $page.route.id === "/[lang]/workHistory" ? BackgroundColor.Green : $page.route.id === "/[lang]/projects" ? BackgroundColor.Blue : $page.url.hash === "#o1" ? BackgroundColor.LightBlue : $page.url.hash === "#aPlusCourses" ? BackgroundColor.Pink : $page.route.id === "/[lang]/graphicDesign" ? BackgroundColor.Orange : void 0);
    }
    if ($$self.$$.dirty & /*currentPageBackgroundColor, backgroundColor*/
    1025) {
      $$invalidate(5, backgroundClass = currentPageBackgroundColor === backgroundColor ? currentPageBackgroundColor : backgroundColor ? backgroundColor + "-hover" : currentPageBackgroundColor);
    }
  };
  $$subscribe_lang($$invalidate(6, lang = locale ?? "en"));
  return [
    backgroundColor,
    $page,
    darkMode,
    loaded,
    isMobileWidth,
    backgroundClass,
    lang,
    $lang,
    $t,
    setDarkMode,
    currentPageBackgroundColor,
    $$scope,
    slots,
    background_backgroundClass_binding,
    navlink0_backgroundColor_binding,
    navlink1_backgroundColor_binding,
    navlink2_backgroundColor_binding,
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
  BackgroundColor,
  Layout as default
};
