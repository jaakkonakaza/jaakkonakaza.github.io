import{l as ut,t as Ke,b as Ge,a as xe,B as ct,c as ft,d as dt}from"../chunks/customBlur.3b72ec9c.js";import{S as Ee,i as Ae,s as ne,k as E,y as Q,a as I,l as A,m as C,z as q,c as B,h as g,n as l,b as S,A as X,G as m,g as L,v as we,d as M,f as Ce,B as W,I as ye,q as x,r as ee,u as et,J as tt,K as at,L as st,H as G,M as Se,N as K,O as ht,P as Te,o as rt,w as he,Q as be,e as He,R as gt,T as ke,t as mt,U as _t,C as pt,D as vt,E as bt,F as kt,V as re,W as le}from"../chunks/index.43f715bc.js";import{p as lt}from"../chunks/stores.e79cb2c1.js";import{S as Qe}from"../chunks/FxParallax.svelte_svelte_type_style_lang.512b14d8.js";import{N as wt}from"../chunks/Name.d87df35b.js";const Ct=async({params:t})=>{const e=t.lang;return await ut(e),{}},zt=Object.freeze(Object.defineProperty({__proto__:null,load:Ct},Symbol.toStringTag,{value:"Module"}));const qe=[{format:"avif",width:480,height:480,src:""+new URL("../assets/profile-photo.7d9fc052.avif",import.meta.url).href},{format:"webp",width:480,height:480,src:""+new URL("../assets/profile-photo.09d84dc5.webp",import.meta.url).href},{format:"jpg",width:480,height:480,src:""+new URL("../assets/profile-photo.8526bd40.jpg",import.meta.url).href},{format:"avif",width:1024,height:1024,src:""+new URL("../assets/profile-photo.e439c962.avif",import.meta.url).href},{format:"webp",width:1024,height:1024,src:""+new URL("../assets/profile-photo.968f32aa.webp",import.meta.url).href},{format:"jpg",width:1024,height:1024,src:""+new URL("../assets/profile-photo.980caf86.jpg",import.meta.url).href},{format:"avif",width:1920,height:1920,src:""+new URL("../assets/profile-photo.f3db98dd.avif",import.meta.url).href},{format:"webp",width:1920,height:1920,src:""+new URL("../assets/profile-photo.99f98367.webp",import.meta.url).href},{format:"jpg",width:1920,height:1920,src:""+new URL("../assets/profile-photo.5333e48b.jpg",import.meta.url).href},{format:"webp",width:16,height:16,base64:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoQABAABUB8JbAAAp0Q0NQ0AP7R3d1mXcA+EkfNVeZ7hZl8dtcss2LjBX56AAAA",src:""+new URL("../assets/profile-photo.149b92f9.webp",import.meta.url).href}];function Xe(t){let e,a=t[4]("home")+"",n,r,c,f;return{c(){e=E("span"),n=x(a),this.h()},l(o){e=A(o,"SPAN",{class:!0});var u=C(e);n=ee(u,a),u.forEach(g),this.h()},h(){l(e,"class","home-link svelte-uknb8q")},m(o,u){S(o,e,u),m(e,n),f=!0},p(o,u){(!f||u&16)&&a!==(a=o[4]("home")+"")&&et(n,a)},i(o){f||(tt(()=>{f&&(c&&c.end(1),r=at(e,Ge,{}),r.start())}),f=!0)},o(o){r&&r.invalidate(),c=st(e,Ge,{}),f=!1},d(o){o&&g(e),o&&c&&c.end()}}}function yt(t){let e,a,n,r,c,f,o,u,p,v;a=new Qe({props:{style:"opacity: "+(t[1]?1:.7),class:"profile-photo",src:qe,alt:"",loading:"eager"}}),r=new Qe({props:{style:"opacity: "+(t[1]?1:.7),class:"profile-photo blur-profile-photo",src:qe,alt:""}});let _=t[3].route.id!=="/[lang]"&&Xe(t);return p=new wt({}),{c(){e=E("a"),Q(a.$$.fragment),n=I(),Q(r.$$.fragment),c=I(),_&&_.c(),o=I(),u=E("div"),Q(p.$$.fragment),this.h()},l(i){e=A(i,"A",{class:!0,href:!0});var s=C(e);q(a.$$.fragment,s),n=B(s),q(r.$$.fragment,s),c=B(s),_&&_.l(s),s.forEach(g),o=B(i),u=A(i,"DIV",{id:!0,class:!0});var d=C(u);q(p.$$.fragment,d),d.forEach(g),this.h()},h(){l(e,"class","profile-photo-container svelte-uknb8q"),l(e,"href",f="/"+t[2]),l(u,"id","name-container"),l(u,"class","svelte-uknb8q")},m(i,s){S(i,e,s),X(a,e,null),m(e,n),X(r,e,null),m(e,c),_&&_.m(e,null),S(i,o,s),S(i,u,s),X(p,u,null),v=!0},p(i,[s]){const d={};s&2&&(d.style="opacity: "+(i[1]?1:.7)),a.$set(d);const h={};s&2&&(h.style="opacity: "+(i[1]?1:.7)),r.$set(h),i[3].route.id!=="/[lang]"?_?(_.p(i,s),s&8&&L(_,1)):(_=Xe(i),_.c(),L(_,1),_.m(e,null)):_&&(we(),M(_,1,1,()=>{_=null}),Ce()),(!v||s&4&&f!==(f="/"+i[2]))&&l(e,"href",f)},i(i){v||(L(a.$$.fragment,i),L(r.$$.fragment,i),L(_),L(p.$$.fragment,i),v=!0)},o(i){M(a.$$.fragment,i),M(r.$$.fragment,i),M(_),M(p.$$.fragment,i),v=!1},d(i){i&&g(e),W(a),W(r),_&&_.d(),i&&g(o),i&&g(u),W(p)}}}function Et(t,e,a){let n,r=G,c=()=>(r(),r=Se(u,v=>a(2,n=v)),u),f,o;ye(t,lt,v=>a(3,f=v)),ye(t,Ke,v=>a(4,o=v)),t.$$.on_destroy.push(()=>r());let{lang:u}=e;c();let{darkMode:p}=e;return t.$$set=v=>{"lang"in v&&c(a(0,u=v.lang)),"darkMode"in v&&a(1,p=v.darkMode)},[u,p,n,f,o]}class At extends Ee{constructor(e){super(),Ae(this,e,Et,yt,ne,{lang:0,darkMode:1})}}function Lt(t){let e,a=t[3](t[0])+"",n,r,c,f;return{c(){e=E("a"),n=x(a),this.h()},l(o){e=A(o,"A",{href:!0,class:!0});var u=C(e);n=ee(u,a),u.forEach(g),this.h()},h(){l(e,"href",r="/"+t[2]+"/"+t[0]),l(e,"class","svelte-1vi9whe")},m(o,u){S(o,e,u),m(e,n),c||(f=[K(e,"focus",t[4]),K(e,"mouseenter",t[4]),K(e,"mouseleave",t[5]),K(e,"mouseout",t[5]),K(e,"blur",t[5]),K(e,"click",t[5])],c=!0)},p(o,[u]){u&9&&a!==(a=o[3](o[0])+"")&&et(n,a),u&5&&r!==(r="/"+o[2]+"/"+o[0])&&l(e,"href",r)},i:G,o:G,d(o){o&&g(e),c=!1,ht(f)}}}function It(t,e,a){let n,r,c=G,f=()=>(c(),c=Se(n,s=>a(2,r=s)),n),o;ye(t,Ke,s=>a(3,o=s)),t.$$.on_destroy.push(()=>c());let{backgroundColor:u}=e,{newBackgroundColor:p}=e,{location:v}=e;const _=()=>a(6,u=p),i=()=>a(6,u=void 0);return t.$$set=s=>{"backgroundColor"in s&&a(6,u=s.backgroundColor),"newBackgroundColor"in s&&a(7,p=s.newBackgroundColor),"location"in s&&a(0,v=s.location)},f(a(1,n=xe??"en")),[v,n,r,o,_,i,u,p]}class Ue extends Ee{constructor(e){super(),Ae(this,e,It,Lt,ne,{backgroundColor:6,newBackgroundColor:7,location:0})}}function Bt(t){let e,a,n,r;return{c(){e=E("div"),n=I(),r=E("div"),this.h()},l(c){e=A(c,"DIV",{id:!0,class:!0}),C(e).forEach(g),n=B(c),r=A(c,"DIV",{id:!0,class:!0}),C(r).forEach(g),this.h()},h(){l(e,"id","background"),l(e,"class",a=Te(t[0])+" svelte-1w0ynd8"),l(r,"id","background-noise"),l(r,"class","svelte-1w0ynd8")},m(c,f){S(c,e,f),t[2](e),S(c,n,f),S(c,r,f)},p(c,[f]){f&1&&a!==(a=Te(c[0])+" svelte-1w0ynd8")&&l(e,"class",a)},i:G,o:G,d(c){c&&g(e),t[2](null),c&&g(n),c&&g(r)}}}function Mt(t,e,a){let{backgroundClass:n}=e,r;const c=o=>{const{x:u,y:p}=r.getBoundingClientRect(),{clientWidth:v,clientHeight:_}=r,{clientX:i,clientY:s}=o,d=(i-u-v/2)/50,h=(s-p-_/2)/50;r.animate({transform:`scale(1.05) translate(${d}px, ${h}px)`},{duration:3e3,easing:"ease-in-out",fill:"forwards"})};rt(()=>{window.addEventListener("mousemove",c)});function f(o){he[o?"unshift":"push"](()=>{r=o,a(1,r)})}return t.$$set=o=>{"backgroundClass"in o&&a(0,n=o.backgroundClass)},[n,r,f]}class Rt extends Ee{constructor(e){super(),Ae(this,e,Mt,Bt,ne,{backgroundClass:0})}}const{document:We}=_t;function Je(t){let e;const a=t[12].default,n=pt(a,t,t[11],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,c){n&&n.m(r,c),e=!0},p(r,c){n&&n.p&&(!e||c&2048)&&vt(n,a,r,r[11],e?kt(a,r[11],c,null):bt(r[11]),null)},i(r){e||(L(n,r),e=!0)},o(r){M(n,r),e=!1},d(r){n&&n.d(r)}}}function Ze(t){let e,a,n,r,c,f,o,u,p,v,_,i,s,d,h,w,R,j,$,D,oe,te,ie,b,J,ge,Le,F,Ie,me,Be,N,U,Z,ae,T,H,se,_e,pe,ve,ue,z,Me,Pe;function nt(k){t[14](k)}let je={newBackgroundColor:V.Green,location:"workHistory"};t[0]!==void 0&&(je.backgroundColor=t[0]),n=new Ue({props:je}),he.push(()=>be(n,"backgroundColor",nt));function ot(k){t[15](k)}let De={newBackgroundColor:V.Blue,location:"projects"};t[0]!==void 0&&(De.backgroundColor=t[0]),f=new Ue({props:De}),he.push(()=>be(f,"backgroundColor",ot));function it(k){t[16](k)}let Ne={newBackgroundColor:V.Orange,location:"graphicDesign"};return t[0]!==void 0&&(Ne.backgroundColor=t[0]),p=new Ue({props:Ne}),he.push(()=>be(p,"backgroundColor",it)),{c(){e=E("div"),a=E("div"),Q(n.$$.fragment),c=I(),Q(f.$$.fragment),u=I(),Q(p.$$.fragment),_=I(),i=E("div"),s=E("a"),d=x("GitHub"),h=I(),w=E("a"),R=x("LinkedIn"),j=I(),$=E("div"),D=E("a"),oe=x("ENGLISH"),ie=I(),b=E("a"),J=x("SUOMI"),Le=I(),F=E("a"),Ie=x("日本語"),Be=I(),N=E("button"),U=re("svg"),Z=re("clipPath"),ae=re("path"),T=re("g"),H=re("circle"),se=re("path"),this.h()},l(k){e=A(k,"DIV",{class:!0});var y=C(e);a=A(y,"DIV",{class:!0});var P=C(a);q(n.$$.fragment,P),c=B(P),q(f.$$.fragment,P),u=B(P),q(p.$$.fragment,P),P.forEach(g),_=B(y),i=A(y,"DIV",{class:!0});var Y=C(i);s=A(Y,"A",{href:!0,class:!0});var ce=C(s);d=ee(ce,"GitHub"),ce.forEach(g),h=B(Y),w=A(Y,"A",{href:!0,class:!0});var fe=C(w);R=ee(fe,"LinkedIn"),fe.forEach(g),Y.forEach(g),j=B(y),$=A(y,"DIV",{id:!0,class:!0});var O=C($);D=A(O,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var de=C(D);oe=ee(de,"ENGLISH"),de.forEach(g),ie=B(O),b=A(O,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var Ve=C(b);J=ee(Ve,"SUOMI"),Ve.forEach(g),Le=B(O),F=A(O,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var ze=C(F);Ie=ee(ze,"日本語"),ze.forEach(g),O.forEach(g),Be=B(y),N=A(y,"BUTTON",{class:!0,type:!0,title:!0,"aria-label":!0});var Fe=C(N);U=le(Fe,"svg",{xmlns:!0,"aria-hidden":!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var Re=C(U);Z=le(Re,"clipPath",{id:!0,class:!0});var Oe=C(Z);ae=le(Oe,"path",{d:!0,class:!0}),C(ae).forEach(g),Oe.forEach(g),T=le(Re,"g",{"clip-path":!0,class:!0});var $e=C(T);H=le($e,"circle",{cx:!0,cy:!0,r:!0,class:!0}),C(H).forEach(g),se=le($e,"path",{d:!0,class:!0}),C(se).forEach(g),$e.forEach(g),Re.forEach(g),Fe.forEach(g),y.forEach(g),this.h()},h(){var k,y,P;l(a,"class","link-group svelte-4hmwnf"),l(s,"href","https://github.com/jaakkonakaza"),l(s,"class","svelte-4hmwnf"),l(w,"href","https://www.linkedin.com/in/jaakkonakaza/"),l(w,"class","svelte-4hmwnf"),l(i,"class","link-group svelte-4hmwnf"),l(D,"data-sveltekit-preload-data","tap"),l(D,"href",te="/en"+((k=t[1].route.id)==null?void 0:k.substring(7))),l(D,"class","svelte-4hmwnf"),l(b,"data-sveltekit-preload-data","tap"),l(b,"href",ge="/fi"+((y=t[1].route.id)==null?void 0:y.substring(7))),l(b,"class","svelte-4hmwnf"),l(F,"data-sveltekit-preload-data","tap"),l(F,"href",me="/ja"+((P=t[1].route.id)==null?void 0:P.substring(7))),l(F,"class","svelte-4hmwnf"),l($,"id","languages"),l($,"class","svelte-4hmwnf"),l(ae,"d","M0-11h25a1 1 0 0017 13v30H0Z"),l(ae,"class","svelte-4hmwnf"),l(Z,"id","theme-toggle__expand__cutout"),l(Z,"class","svelte-4hmwnf"),l(H,"cx","16"),l(H,"cy","16"),l(H,"r","8.4"),l(H,"class","svelte-4hmwnf"),l(se,"d","M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"),l(se,"class","svelte-4hmwnf"),l(T,"clip-path","url(#theme-toggle__expand__cutout)"),l(T,"class","svelte-4hmwnf"),l(U,"xmlns","http://www.w3.org/2000/svg"),l(U,"aria-hidden","true"),l(U,"width","3rem"),l(U,"height","3rem"),l(U,"fill","currentColor"),l(U,"class","theme-toggle__expand svelte-4hmwnf"),l(U,"viewBox","0 0 32 32"),l(N,"class",_e="theme-toggle "+(t[3]?"theme-toggle--toggled":"")+" svelte-4hmwnf"),l(N,"type","button"),l(N,"title","Toggle theme"),l(N,"aria-label","Toggle theme"),l(e,"class",pe="column "+(t[1].route.id!=="/[lang]"?"links-hidden":"")+" svelte-4hmwnf")},m(k,y){S(k,e,y),m(e,a),X(n,a,null),m(a,c),X(f,a,null),m(a,u),X(p,a,null),m(e,_),m(e,i),m(i,s),m(s,d),m(i,h),m(i,w),m(w,R),m(e,j),m(e,$),m($,D),m(D,oe),m($,ie),m($,b),m(b,J),m($,Le),m($,F),m(F,Ie),m(e,Be),m(e,N),m(N,U),m(U,Z),m(Z,ae),m(U,T),m(T,H),m(T,se),z=!0,Me||(Pe=K(N,"click",t[17]),Me=!0)},p(k,y){var fe,O,de;const P={};!r&&y&1&&(r=!0,P.backgroundColor=k[0],ke(()=>r=!1)),n.$set(P);const Y={};!o&&y&1&&(o=!0,Y.backgroundColor=k[0],ke(()=>o=!1)),f.$set(Y);const ce={};!v&&y&1&&(v=!0,ce.backgroundColor=k[0],ke(()=>v=!1)),p.$set(ce),(!z||y&2&&te!==(te="/en"+((fe=k[1].route.id)==null?void 0:fe.substring(7))))&&l(D,"href",te),(!z||y&2&&ge!==(ge="/fi"+((O=k[1].route.id)==null?void 0:O.substring(7))))&&l(b,"href",ge),(!z||y&2&&me!==(me="/ja"+((de=k[1].route.id)==null?void 0:de.substring(7))))&&l(F,"href",me),(!z||y&8&&_e!==(_e="theme-toggle "+(k[3]?"theme-toggle--toggled":"")+" svelte-4hmwnf"))&&l(N,"class",_e),(!z||y&2&&pe!==(pe="column "+(k[1].route.id!=="/[lang]"?"links-hidden":"")+" svelte-4hmwnf"))&&l(e,"class",pe)},i(k){z||(L(n.$$.fragment,k),L(f.$$.fragment,k),L(p.$$.fragment,k),tt(()=>{z&&(ue&&ue.end(1),ve=at(e,ft,{}),ve.start())}),z=!0)},o(k){M(n.$$.fragment,k),M(f.$$.fragment,k),M(p.$$.fragment,k),ve&&ve.invalidate(),ue=st(e,dt,{}),z=!1},d(k){k&&g(e),W(n),W(f),W(p),k&&ue&&ue.end(),Me=!1,Pe()}}}function Ye(t){let e,a,n,r,c=t[8],f,o,u,p,v,_,i,s=Je(t);u=new At({props:{darkMode:t[3],lang:t[7]}});let d=(!t[5]||t[1].route.id==="/[lang]")&&Ze(t);return{c(){e=E("div"),a=E("div"),n=I(),r=E("div"),s.c(),f=I(),o=E("nav"),Q(u.$$.fragment),p=I(),d&&d.c(),v=I(),_=E("div"),this.h()},l(h){e=A(h,"DIV",{id:!0,class:!0});var w=C(e);a=A(w,"DIV",{}),C(a).forEach(g),n=B(w),r=A(w,"DIV",{class:!0,id:!0});var R=C(r);s.l(R),R.forEach(g),f=B(w),o=A(w,"NAV",{class:!0,id:!0});var j=C(o);q(u.$$.fragment,j),p=B(j),d&&d.l(j),j.forEach(g),v=B(w),_=A(w,"DIV",{}),C(_).forEach(g),w.forEach(g),this.h()},h(){l(r,"class","column svelte-4hmwnf"),l(r,"id","page-content"),l(o,"class","column svelte-4hmwnf"),l(o,"id","nav-content"),l(e,"id","container"),l(e,"class","svelte-4hmwnf")},m(h,w){S(h,e,w),m(e,a),m(e,n),m(e,r),s.m(r,null),m(e,f),m(e,o),X(u,o,null),m(o,p),d&&d.m(o,null),m(e,v),m(e,_),i=!0},p(h,w){w&256&&ne(c,c=h[8])?(we(),M(s,1,1,G),Ce(),s=Je(h),s.c(),L(s,1),s.m(r,null)):s.p(h,w);const R={};w&8&&(R.darkMode=h[3]),w&128&&(R.lang=h[7]),u.$set(R),!h[5]||h[1].route.id==="/[lang]"?d?(d.p(h,w),w&34&&L(d,1)):(d=Ze(h),d.c(),L(d,1),d.m(o,null)):d&&(we(),M(d,1,1,()=>{d=null}),Ce())},i(h){i||(L(s),L(u.$$.fragment,h),L(d),i=!0)},o(h){M(s),M(u.$$.fragment,h),M(d),i=!1},d(h){h&&g(e),s.d(h),W(u),d&&d.d()}}}function $t(t){let e,a,n,r,c,f,o=t[4]&&t[2],u,p;function v(s){t[13](s)}let _={};t[6]!==void 0&&(_.backgroundClass=t[6]),r=new Rt({props:_}),he.push(()=>be(r,"backgroundClass",v));let i=Ye(t);return{c(){e=E("meta"),n=I(),Q(r.$$.fragment),f=I(),i.c(),u=He(),this.h()},l(s){const d=gt("svelte-yk52po",We.head);e=A(d,"META",{name:!0,content:!0}),d.forEach(g),n=B(s),q(r.$$.fragment,s),f=B(s),i.l(s),u=He(),this.h()},h(){l(e,"name","theme-color"),l(e,"content",a=t[3]?"#000000":"#FFFFFF")},m(s,d){m(We.head,e),S(s,n,d),X(r,s,d),S(s,f,d),i.m(s,d),S(s,u,d),p=!0},p(s,[d]){(!p||d&8&&a!==(a=s[3]?"#000000":"#FFFFFF"))&&l(e,"content",a);const h={};!c&&d&64&&(c=!0,h.backgroundClass=s[6],ke(()=>c=!1)),r.$set(h),d&20&&ne(o,o=s[4]&&s[2])?(we(),M(i,1,1,G),Ce(),i=Ye(s),i.c(),L(i,1),i.m(u.parentNode,u)):i.p(s,d)},i(s){p||(L(r.$$.fragment,s),L(i),p=!0)},o(s){M(r.$$.fragment,s),M(i),p=!1},d(s){g(e),s&&g(n),W(r,s),s&&g(f),s&&g(u),i.d(s)}}}var V=(t=>(t.Green="green",t.Blue="blue",t.LightBlue="light-blue",t.Pink="pink",t.Orange="orange",t.Coral="coral",t.Grey="grey",t))(V||{});const Ut=815;function St(t,e,a){let n,r,c,f,o,u=G,p=()=>(u(),u=Se(n,b=>a(8,o=b)),n);ye(t,lt,b=>a(1,f=b)),t.$$.on_destroy.push(()=>u());let{$$slots:v={},$$scope:_}=e,i=!0,s=!0,d=!1,h;const w=b=>{a(2,i=b),setTimeout(()=>{a(3,s=b);const J=b?"dark":"";document.body.className=J},ct)};let R=!1,j;rt(async()=>{a(3,s=window.matchMedia("(prefers-color-scheme: dark)").matches),a(2,i=s),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",b=>{w(b.matches)}),j=new ResizeObserver(b=>{for(const J of b)a(5,R=J.contentRect.width<Ut)}),j.observe(document.body),await mt(),a(4,d=!0)});function $(b){c=b,a(6,c),a(10,r),a(0,h),a(1,f)}function D(b){h=b,a(0,h)}function oe(b){h=b,a(0,h)}function te(b){h=b,a(0,h)}const ie=()=>w(!s);return t.$$set=b=>{"$$scope"in b&&a(11,_=b.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&a(10,r=f.route.id==="/[lang]/workHistory"?V.Green:f.route.id==="/[lang]/projects"?V.Blue:f.url.hash==="#o1"?V.LightBlue:f.url.hash==="#courses"?V.Pink:f.url.hash==="#studios"?V.Grey:f.url.hash==="#five"?V.Coral:f.route.id==="/[lang]/graphicDesign"?V.Orange:void 0),t.$$.dirty&1025&&a(6,c=r===h?r:h?h+"-hover":r)},p(a(7,n=xe??"en")),[h,f,i,s,d,R,c,n,o,w,r,_,v,$,D,oe,te,ie]}class Ft extends Ee{constructor(e){super(),Ae(this,e,St,$t,ne,{})}}export{Ft as component,zt as universal};
