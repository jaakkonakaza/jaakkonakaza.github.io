import{w as c}from"./index.2feb5124.js";var _;const b=((_=globalThis.__sveltekit_1r50shg)==null?void 0:_.base)??"";var p;const v=((p=globalThis.__sveltekit_1r50shg)==null?void 0:p.assets)??b,k="1678707616338",R="sveltekit:snapshot",T="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!a||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:a}}function U(e){let t=null,n=null,a=null,s=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),t===null&&(t=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=g(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function h(e){const t=c(e);let n=!0;function a(){n=!0,t.update(r=>r)}function s(r){n=!1,t.set(r)}function o(r){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:s,subscribe:o}}function E(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==k;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:a}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let w;function L(e){w=e.client}const N={url:h({}),page:h({}),navigating:c(null),updated:E()};export{I,f as P,T as S,R as a,O as b,U as c,y as d,b as e,x as f,S as g,L as h,m as i,w as j,N as s};
