import{l as nt,t as Xe,b as De,a as Ee,c as rt,B as it,d as ut}from"../chunks/customBlur.59d55971.js";import{s as ne,e as ge,f as We,n as $,h as Be,r as ct,i as Fe,o as Ye,b as oe,j as ve,t as ft,c as ht,u as dt,g as gt,d as At}from"../chunks/scheduler.74f9dd1d.js";import{S as Ne,i as Oe,g as z,r as X,s as j,h as Z,j as J,u as W,c as E,f as d,k as o,a as T,v as Y,x as A,d as B,p as Ke,t as S,b as we,w as x,m as he,n as de,o as xe,y as et,z as tt,A as q,B as ke,e as Le,C as pt,D as Me,E as se,F as le}from"../chunks/index.53f71aec.js";import{p as at}from"../chunks/stores.ed173808.js";import{S as $e}from"../chunks/FxParallax.svelte_svelte_type_style_lang.7e79d5a6.js";import{N as mt}from"../chunks/Name.e31c614e.js";const _t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,bt=async({params:t})=>{const e=t.lang;return await nt(e),{}},Tt=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"}));const _e=[{format:"avif",width:480,height:480,src:"/_app/immutable/assets/profile-photo.7d9fc052.avif"},{format:"webp",width:480,height:480,src:"/_app/immutable/assets/profile-photo.09d84dc5.webp"},{format:"jpg",width:480,height:480,src:"/_app/immutable/assets/profile-photo.8526bd40.jpg"},{format:"avif",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo.e439c962.avif"},{format:"webp",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo.968f32aa.webp"},{format:"jpg",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo.980caf86.jpg"},{format:"avif",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo.f3db98dd.avif"},{format:"webp",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo.99f98367.webp"},{format:"jpg",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo.5333e48b.jpg"},{format:"webp",width:1,height:1,base64:"data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoBAAEABUB8JQAAhnAA/u4KB2SyAAAA",src:"/_app/immutable/assets/profile-photo.2a42bbd5.webp"}],be=[{format:"avif",width:480,height:480,src:"/_app/immutable/assets/profile-photo-light.cd79c424.avif"},{format:"webp",width:480,height:480,src:"/_app/immutable/assets/profile-photo-light.a345ada2.webp"},{format:"jpg",width:480,height:480,src:"/_app/immutable/assets/profile-photo-light.1af0ac45.jpg"},{format:"avif",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo-light.3541c5b8.avif"},{format:"webp",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo-light.aebd8541.webp"},{format:"jpg",width:1024,height:1024,src:"/_app/immutable/assets/profile-photo-light.224b22e0.jpg"},{format:"avif",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo-light.1e9c1326.avif"},{format:"webp",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo-light.0aa91803.webp"},{format:"jpg",width:1920,height:1920,src:"/_app/immutable/assets/profile-photo-light.6fbdcaf2.jpg"},{format:"webp",width:1,height:1,base64:"data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAABQAQCdASoBAAEABUB8JZQABDOAAP7e1jTcRQAA",src:"/_app/immutable/assets/profile-photo-light.13dfb933.webp"}];function Re(t){let e,a=t[4]("home")+"",l,s,n,r;return{c(){e=z("span"),l=he(a),this.h()},l(i){e=Z(i,"SPAN",{class:!0});var c=J(e);l=de(c,a),c.forEach(d),this.h()},h(){o(e,"class","home-link svelte-1mxqahr")},m(i,c){T(i,e,c),A(e,l),r=!0},p(i,c){(!r||c&16)&&a!==(a=i[4]("home")+"")&&xe(l,a)},i(i){r||(We(()=>{r&&(n&&n.end(1),s=et(e,De,{}),s.start())}),r=!0)},o(i){s&&s.invalidate(),n=tt(e,De,{}),r=!1},d(i){i&&d(e),i&&n&&n.end()}}}function vt(t){let e,a,l,s,n,r,i,c,_,p;a=new $e({props:{style:"opacity: "+.7,class:"profile-photo",src:t[1]?_e:be,alt:"",loading:"eager",width:1894,height:1894}}),s=new $e({props:{class:"profile-photo blur-profile-photo",src:t[1]?_e:be,alt:"",loading:"eager",width:1894,height:1894}});let g=t[3].route.id!=="/[lang]"&&Re(t);return _=new mt({}),{c(){e=z("a"),X(a.$$.fragment),l=j(),X(s.$$.fragment),n=j(),g&&g.c(),i=j(),c=z("div"),X(_.$$.fragment),this.h()},l(u){e=Z(u,"A",{class:!0,href:!0,"aria-label":!0});var f=J(e);W(a.$$.fragment,f),l=E(f),W(s.$$.fragment,f),n=E(f),g&&g.l(f),f.forEach(d),i=E(u),c=Z(u,"DIV",{id:!0,class:!0});var v=J(c);W(_.$$.fragment,v),v.forEach(d),this.h()},h(){o(e,"class","profile-photo-container svelte-1mxqahr"),o(e,"href",r="/"+t[2]),o(e,"aria-label","Navigate home"),o(c,"id","name-container"),o(c,"class","svelte-1mxqahr")},m(u,f){T(u,e,f),Y(a,e,null),A(e,l),Y(s,e,null),A(e,n),g&&g.m(e,null),T(u,i,f),T(u,c,f),Y(_,c,null),p=!0},p(u,[f]){const v={};f&2&&(v.src=u[1]?_e:be),a.$set(v);const h={};f&2&&(h.src=u[1]?_e:be),s.$set(h),u[3].route.id!=="/[lang]"?g?(g.p(u,f),f&8&&B(g,1)):(g=Re(u),g.c(),B(g,1),g.m(e,null)):g&&(Ke(),S(g,1,1,()=>{g=null}),we()),(!p||f&4&&r!==(r="/"+u[2]))&&o(e,"href",r)},i(u){p||(B(a.$$.fragment,u),B(s.$$.fragment,u),B(g),B(_.$$.fragment,u),p=!0)},o(u){S(a.$$.fragment,u),S(s.$$.fragment,u),S(g),S(_.$$.fragment,u),p=!1},d(u){u&&(d(e),d(i),d(c)),x(a),x(s),g&&g.d(),x(_)}}}function kt(t,e,a){let l,s=$,n=()=>(s(),s=Be(c,p=>a(2,l=p)),c),r,i;ge(t,at,p=>a(3,r=p)),ge(t,Xe,p=>a(4,i=p)),t.$$.on_destroy.push(()=>s());let{lang:c}=e;n();let{darkMode:_}=e;return t.$$set=p=>{"lang"in p&&n(a(0,c=p.lang)),"darkMode"in p&&a(1,_=p.darkMode)},[c,_,l,r,i]}class Kt extends Ne{constructor(e){super(),Oe(this,e,kt,vt,ne,{lang:0,darkMode:1})}}function wt(t){let e,a=t[3](t[0])+"",l,s,n,r;return{c(){e=z("a"),l=he(a),this.h()},l(i){e=Z(i,"A",{href:!0,class:!0});var c=J(e);l=de(c,a),c.forEach(d),this.h()},h(){o(e,"href",s="/"+t[2]+"/"+t[0]),o(e,"class","svelte-17yqohj")},m(i,c){T(i,e,c),A(e,l),n||(r=[q(e,"focus",t[4]),q(e,"mouseenter",t[4]),q(e,"mouseleave",t[5]),q(e,"mouseout",t[5]),q(e,"blur",t[5]),q(e,"click",t[5])],n=!0)},p(i,[c]){c&9&&a!==(a=i[3](i[0])+"")&&xe(l,a),c&5&&s!==(s="/"+i[2]+"/"+i[0])&&o(e,"href",s)},i:$,o:$,d(i){i&&d(e),n=!1,ct(r)}}}function Nt(t,e,a){let l,s,n=$,r=()=>(n(),n=Be(l,f=>a(2,s=f)),l),i;ge(t,Xe,f=>a(3,i=f)),t.$$.on_destroy.push(()=>n());let{backgroundColor:c}=e,{newBackgroundColor:_}=e,{location:p}=e;const g=()=>a(6,c=_),u=()=>a(6,c=void 0);return t.$$set=f=>{"backgroundColor"in f&&a(6,c=f.backgroundColor),"newBackgroundColor"in f&&a(7,_=f.newBackgroundColor),"location"in f&&a(0,p=f.location)},r(a(1,l=Ee??"en")),[p,l,s,i,g,u,c,_]}class ye extends Ne{constructor(e){super(),Oe(this,e,Nt,wt,ne,{backgroundColor:6,newBackgroundColor:7,location:0})}}function Ot(t){let e,a,l,s;return{c(){e=z("div"),l=j(),s=z("div"),this.h()},l(n){e=Z(n,"DIV",{id:!0,class:!0}),J(e).forEach(d),l=E(n),s=Z(n,"DIV",{id:!0,class:!0}),J(s).forEach(d),this.h()},h(){o(e,"id","background"),o(e,"class",a=Fe(t[0])+" svelte-1w0ynd8"),o(s,"id","background-noise"),o(s,"class","svelte-1w0ynd8")},m(n,r){T(n,e,r),t[2](e),T(n,l,r),T(n,s,r)},p(n,[r]){r&1&&a!==(a=Fe(n[0])+" svelte-1w0ynd8")&&o(e,"class",a)},i:$,o:$,d(n){n&&(d(e),d(l),d(s)),t[2](null)}}}function Ct(t,e,a){let{backgroundClass:l}=e,s;const n=i=>{if(s===null)return;const{x:c,y:_}=s.getBoundingClientRect(),{clientWidth:p,clientHeight:g}=s,{clientX:u,clientY:f}=i,v=(u-c-p/2)/50,h=(f-_-g/2)/50;s.animate({transform:`scale(1.05) translate(${v}px, ${h}px)`},{duration:3e3,easing:"ease-in-out",fill:"forwards"})};Ye(()=>{window.addEventListener("mousemove",n)});function r(i){oe[i?"unshift":"push"](()=>{s=i,a(1,s)})}return t.$$set=i=>{"backgroundClass"in i&&a(0,l=i.backgroundClass)},[l,s,r]}class Jt extends Ne{constructor(e){super(),Oe(this,e,Ct,Ot,ne,{backgroundClass:0})}}const{document:je}=_t;function Ue(t){let e,a=`JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA`;return{c(){e=z("span"),e.textContent=a,this.h()},l(l){e=Z(l,"SPAN",{class:!0,"data-svelte-h":!0}),Me(e)!=="svelte-14ckbcd"&&(e.textContent=a),this.h()},h(){o(e,"class","svelte-i81sz2")},m(l,s){T(l,e,s)},d(l){l&&d(e)}}}function He(t){let e,a,l,s,n,r,i,c,_,p,g,u,f,v,h,b,K,N,y,O,w,V,D,H,L,Ae='<a href="https://github.com/jaakkonakaza" class="svelte-i81sz2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github svelte-i81sz2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" class="svelte-i81sz2"></path></svg></a> <a href="https://www.linkedin.com/in/jaakkonakaza/" class="svelte-i81sz2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin svelte-i81sz2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" class="svelte-i81sz2"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>',re,m,M,ee,te,G,Q,ae,pe,Ce,me,R,Je,Se;function st(k){t[17](k)}let Ie={newBackgroundColor:F.Green,location:"workHistory"};t[0]!==void 0&&(Ie.backgroundColor=t[0]),l=new ye({props:Ie}),oe.push(()=>ke(l,"backgroundColor",st));function lt(k){t[18](k)}let Te={newBackgroundColor:F.Blue,location:"projects"};t[0]!==void 0&&(Te.backgroundColor=t[0]),r=new ye({props:Te}),oe.push(()=>ke(r,"backgroundColor",lt));function ot(k){t[19](k)}let Ve={newBackgroundColor:F.Orange,location:"graphicDesign"};t[0]!==void 0&&(Ve.backgroundColor=t[0]),_=new ye({props:Ve}),oe.push(()=>ke(_,"backgroundColor",ot));let I=t[6]&&Ge(t);return{c(){e=z("div"),a=z("div"),X(l.$$.fragment),n=j(),X(r.$$.fragment),c=j(),X(_.$$.fragment),g=j(),u=z("div"),f=z("a"),v=he("ENGLISH"),b=j(),K=z("a"),N=he("SUOMI"),O=j(),w=z("a"),V=he("日本語"),H=j(),L=z("div"),L.innerHTML=Ae,re=j(),m=z("button"),M=se("svg"),ee=se("clipPath"),te=se("path"),G=se("g"),Q=se("circle"),ae=se("path"),Ce=j(),I&&I.c(),this.h()},l(k){e=Z(k,"DIV",{class:!0});var C=J(e);a=Z(C,"DIV",{class:!0});var P=J(a);W(l.$$.fragment,P),n=E(P),W(r.$$.fragment,P),c=E(P),W(_.$$.fragment,P),P.forEach(d),g=E(C),u=Z(C,"DIV",{id:!0,class:!0});var U=J(u);f=Z(U,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var ie=J(f);v=de(ie,"ENGLISH"),ie.forEach(d),b=E(U),K=Z(U,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var ue=J(K);N=de(ue,"SUOMI"),ue.forEach(d),O=E(U),w=Z(U,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var ce=J(w);V=de(ce,"日本語"),ce.forEach(d),U.forEach(d),H=E(C),L=Z(C,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Me(L)!=="svelte-9brmun"&&(L.innerHTML=Ae),re=E(C),m=Z(C,"BUTTON",{class:!0,type:!0,title:!0,"aria-label":!0});var fe=J(m);M=le(fe,"svg",{xmlns:!0,"aria-hidden":!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var ze=J(M);ee=le(ze,"clipPath",{id:!0,class:!0});var Pe=J(ee);te=le(Pe,"path",{d:!0,class:!0}),J(te).forEach(d),Pe.forEach(d),G=le(ze,"g",{"clip-path":!0,class:!0});var Ze=J(G);Q=le(Ze,"circle",{cx:!0,cy:!0,r:!0,class:!0}),J(Q).forEach(d),ae=le(Ze,"path",{d:!0,class:!0}),J(ae).forEach(d),Ze.forEach(d),ze.forEach(d),fe.forEach(d),Ce=E(C),I&&I.l(C),C.forEach(d),this.h()},h(){var k,C,P;o(a,"class","link-group svelte-i81sz2"),o(f,"data-sveltekit-preload-data","tap"),o(f,"href",h="/en"+((k=t[1].route.id)==null?void 0:k.substring(7))),o(f,"class","svelte-i81sz2"),o(K,"data-sveltekit-preload-data","tap"),o(K,"href",y="/fi"+((C=t[1].route.id)==null?void 0:C.substring(7))),o(K,"class","svelte-i81sz2"),o(w,"data-sveltekit-preload-data","tap"),o(w,"href",D="/ja"+((P=t[1].route.id)==null?void 0:P.substring(7))),o(w,"class","svelte-i81sz2"),o(u,"id","languages"),o(u,"class","svelte-i81sz2"),o(L,"id","socials"),o(L,"class","svelte-i81sz2"),o(te,"d","M0-11h25a1 1 0 0017 13v30H0Z"),o(te,"class","svelte-i81sz2"),o(ee,"id","theme-toggle__expand__cutout"),o(ee,"class","svelte-i81sz2"),o(Q,"cx","16"),o(Q,"cy","16"),o(Q,"r","8.4"),o(Q,"class","svelte-i81sz2"),o(ae,"d","M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"),o(ae,"class","svelte-i81sz2"),o(G,"clip-path","url(#theme-toggle__expand__cutout)"),o(G,"class","svelte-i81sz2"),o(M,"xmlns","http://www.w3.org/2000/svg"),o(M,"aria-hidden","true"),o(M,"width","3rem"),o(M,"height","3rem"),o(M,"fill","currentColor"),o(M,"class","theme-toggle__expand svelte-i81sz2"),o(M,"viewBox","0 0 32 32"),o(m,"class",pe="theme-toggle "+(t[3]?"theme-toggle--toggled":"")+" svelte-i81sz2"),o(m,"type","button"),o(m,"title","Toggle theme"),o(m,"aria-label","Toggle theme"),o(e,"class",me="column "+(t[1].route.id!=="/[lang]"?"links-hidden":"")+" svelte-i81sz2")},m(k,C){T(k,e,C),A(e,a),Y(l,a,null),A(a,n),Y(r,a,null),A(a,c),Y(_,a,null),A(e,g),A(e,u),A(u,f),A(f,v),A(u,b),A(u,K),A(K,N),A(u,O),A(u,w),A(w,V),A(e,H),A(e,L),A(e,re),A(e,m),A(m,M),A(M,ee),A(ee,te),A(M,G),A(G,Q),A(G,ae),A(e,Ce),I&&I.m(e,null),R=!0,Je||(Se=q(m,"click",t[20]),Je=!0)},p(k,C){var ue,ce,fe;const P={};!s&&C&1&&(s=!0,P.backgroundColor=k[0],ve(()=>s=!1)),l.$set(P);const U={};!i&&C&1&&(i=!0,U.backgroundColor=k[0],ve(()=>i=!1)),r.$set(U);const ie={};!p&&C&1&&(p=!0,ie.backgroundColor=k[0],ve(()=>p=!1)),_.$set(ie),(!R||C&2&&h!==(h="/en"+((ue=k[1].route.id)==null?void 0:ue.substring(7))))&&o(f,"href",h),(!R||C&2&&y!==(y="/fi"+((ce=k[1].route.id)==null?void 0:ce.substring(7))))&&o(K,"href",y),(!R||C&2&&D!==(D="/ja"+((fe=k[1].route.id)==null?void 0:fe.substring(7))))&&o(w,"href",D),(!R||C&8&&pe!==(pe="theme-toggle "+(k[3]?"theme-toggle--toggled":"")+" svelte-i81sz2"))&&o(m,"class",pe),k[6]?I?I.p(k,C):(I=Ge(k),I.c(),I.m(e,null)):I&&(I.d(1),I=null),(!R||C&2&&me!==(me="column "+(k[1].route.id!=="/[lang]"?"links-hidden":"")+" svelte-i81sz2"))&&o(e,"class",me)},i(k){R||(B(l.$$.fragment,k),B(r.$$.fragment,k),B(_.$$.fragment,k),R=!0)},o(k){S(l.$$.fragment,k),S(r.$$.fragment,k),S(_.$$.fragment,k),R=!1},d(k){k&&d(e),x(l),x(r),x(_),I&&I.d(),Je=!1,Se()}}}function Ge(t){let e,a="<span>About</span><span>V</span>",l,s;return{c(){e=z("button"),e.innerHTML=a,this.h()},l(n){e=Z(n,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Me(e)!=="svelte-vogfwa"&&(e.innerHTML=a),this.h()},h(){o(e,"id","go-down"),o(e,"class","svelte-i81sz2")},m(n,r){T(n,e,r),l||(s=q(e,"click",t[12]),l=!0)},p:$,d(n){n&&d(e),l=!1,s()}}}function Qe(t){let e;const a=t[15].default,l=ht(a,t,t[14],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,n){l&&l.m(s,n),e=!0},p(s,n){l&&l.p&&(!e||n&16384)&&dt(l,a,s,s[14],e?At(a,s[14],n,null):gt(s[14]),null)},i(s){e||(B(l,s),e=!0)},o(s){S(l,s),e=!1},d(s){l&&l.d(s)}}}function qe(t){let e,a,l,s,n,r,i,c,_,p,g,u,f=t[10],v,h,b,K=!t[6]&&Ue();n=new Kt({props:{darkMode:t[3],lang:t[8]}});let N=(!t[6]||t[1].route.id==="/[lang]")&&He(t),y=Qe(t);return{c(){e=z("div"),a=z("div"),K&&K.c(),l=j(),s=z("nav"),X(n.$$.fragment),r=j(),N&&N.c(),_=j(),p=z("div"),g=j(),u=z("div"),y.c(),v=j(),h=z("div"),this.h()},l(O){e=Z(O,"DIV",{id:!0,class:!0});var w=J(e);a=Z(w,"DIV",{class:!0});var V=J(a);K&&K.l(V),V.forEach(d),l=E(w),s=Z(w,"NAV",{class:!0,id:!0});var D=J(s);W(n.$$.fragment,D),r=E(D),N&&N.l(D),D.forEach(d),_=E(w),p=Z(w,"DIV",{}),J(p).forEach(d),g=E(w),u=Z(w,"DIV",{class:!0,id:!0});var H=J(u);y.l(H),H.forEach(d),v=E(w),h=Z(w,"DIV",{}),J(h).forEach(d),w.forEach(d),this.h()},h(){o(a,"class","jaakko-nakaza svelte-i81sz2"),o(s,"class","column svelte-i81sz2"),o(s,"id","nav-content"),o(u,"class","column svelte-i81sz2"),o(u,"id","page-content"),o(e,"id","container"),o(e,"class","svelte-i81sz2")},m(O,w){T(O,e,w),A(e,a),K&&K.m(a,null),A(e,l),A(e,s),Y(n,s,null),A(s,r),N&&N.m(s,null),A(e,_),A(e,p),A(e,g),A(e,u),y.m(u,null),t[21](u),A(e,v),A(e,h),b=!0},p(O,w){O[6]?K&&(K.d(1),K=null):K||(K=Ue(),K.c(),K.m(a,null));const V={};w&8&&(V.darkMode=O[3]),w&256&&(V.lang=O[8]),n.$set(V),!O[6]||O[1].route.id==="/[lang]"?N?(N.p(O,w),w&66&&B(N,1)):(N=He(O),N.c(),B(N,1),N.m(s,null)):N&&(Ke(),S(N,1,1,()=>{N=null}),we()),w&1024&&ne(f,f=O[10])?(Ke(),S(y,1,1,$),we(),y=Qe(O),y.c(),B(y,1),y.m(u,null)):y.p(O,w)},i(O){b||(B(n.$$.fragment,O),B(N),We(()=>{b&&(c&&c.end(1),i=et(s,ut,{}),i.start())}),B(y),b=!0)},o(O){S(n.$$.fragment,O),S(N),i&&i.invalidate(),c=tt(s,rt,{}),S(y),b=!1},d(O){O&&d(e),K&&K.d(),x(n),N&&N.d(),O&&c&&c.end(),y.d(O),t[21](null)}}}function zt(t){let e,a,l,s,n,r,i,c,_=t[4]&&t[2],p,g;function u(h){t[16](h)}let f={};t[7]!==void 0&&(f.backgroundClass=t[7]),r=new Jt({props:f}),oe.push(()=>ke(r,"backgroundClass",u));let v=qe(t);return{c(){e=z("meta"),l=z("meta"),n=j(),X(r.$$.fragment),c=j(),v.c(),p=Le(),this.h()},l(h){const b=pt("svelte-5ah7a8",je.head);e=Z(b,"META",{name:!0,content:!0}),l=Z(b,"META",{name:!0,content:!0}),b.forEach(d),n=E(h),W(r.$$.fragment,h),c=E(h),v.l(h),p=Le(),this.h()},h(){o(e,"name","theme-color"),o(e,"content",a=t[3]?"#000000":"#FFFFFF"),o(l,"name","description"),o(l,"content",s=t[9]==="fi"?"Jaakko Nakaza on full-stack ohjelmistokehittäjä Suomesta, joka yhdistää ohjelmistokehityksen ja suunnittelun taidot käyttäjäystävällisten ratkaisujen luomiseen":t[9]=="ja"?"フィンランド出身のフルスタックソフトウェアエンジニア、仲座ヤーッコ、ソフトウェア開発とデザインの専門知識を組み合わせて、ユーザーフレンドリーなソリューションを作り出します":"Jaakko Nakaza is a full-stack software engineer from Finland, combining expertise in software development and design to create user-friendly solutions")},m(h,b){A(je.head,e),A(je.head,l),T(h,n,b),Y(r,h,b),T(h,c,b),v.m(h,b),T(h,p,b),g=!0},p(h,[b]){(!g||b&8&&a!==(a=h[3]?"#000000":"#FFFFFF"))&&o(e,"content",a),(!g||b&512&&s!==(s=h[9]==="fi"?"Jaakko Nakaza on full-stack ohjelmistokehittäjä Suomesta, joka yhdistää ohjelmistokehityksen ja suunnittelun taidot käyttäjäystävällisten ratkaisujen luomiseen":h[9]=="ja"?"フィンランド出身のフルスタックソフトウェアエンジニア、仲座ヤーッコ、ソフトウェア開発とデザインの専門知識を組み合わせて、ユーザーフレンドリーなソリューションを作り出します":"Jaakko Nakaza is a full-stack software engineer from Finland, combining expertise in software development and design to create user-friendly solutions"))&&o(l,"content",s);const K={};!i&&b&128&&(i=!0,K.backgroundClass=h[7],ve(()=>i=!1)),r.$set(K),b&20&&ne(_,_=h[4]&&h[2])?(Ke(),S(v,1,1,$),we(),v=qe(h),v.c(),B(v,1),v.m(p.parentNode,p)):v.p(h,b)},i(h){g||(B(r.$$.fragment,h),B(v),g=!0)},o(h){S(r.$$.fragment,h),S(v),g=!1},d(h){h&&(d(n),d(c),d(p)),d(e),d(l),x(r,h),v.d(h)}}}var F=(t=>(t.Green="green",t.Blue="blue",t.LightBlue="light-blue",t.Pink="pink",t.Orange="orange",t.Coral="coral",t.Grey="grey",t))(F||{});const Zt=815;function yt(t,e,a){let l,s,n,r,i,c,_=$,p=()=>(_(),_=Be(l,m=>a(10,c=m)),l);ge(t,at,m=>a(1,r=m)),ge(t,Ee,m=>a(9,i=m)),t.$$.on_destroy.push(()=>_());let{$$slots:g={},$$scope:u}=e,f=!0,v=!0,h=!1,b;const K=m=>{a(2,f=m),setTimeout(()=>{a(3,v=m);const M=m?"dark":"";document.body.className=M},it)};let N;const y=()=>{N.scrollIntoView({behavior:"smooth"})};let O=!1,w;Ye(async()=>{a(3,v=window.matchMedia("(prefers-color-scheme: dark)").matches),a(2,f=v),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",m=>{K(m.matches)}),w=new ResizeObserver(m=>{for(const M of m)a(6,O=M.contentRect.width<Zt)}),w.observe(document.body),await ft(),a(4,h=!0)});function V(m){n=m,a(7,n),a(13,s),a(0,b),a(1,r)}function D(m){b=m,a(0,b)}function H(m){b=m,a(0,b)}function L(m){b=m,a(0,b)}const Ae=()=>K(!v);function re(m){oe[m?"unshift":"push"](()=>{N=m,a(5,N)})}return t.$$set=m=>{"$$scope"in m&&a(14,u=m.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&a(13,s=r.route.id==="/[lang]/workHistory"?F.Green:r.route.id==="/[lang]/projects"?F.Blue:r.url.hash==="#o1"?F.LightBlue:r.url.hash==="#courses"?F.Pink:r.url.hash==="#studios"?F.Grey:r.url.hash==="#five"?F.Coral:r.route.id==="/[lang]/graphicDesign"?F.Orange:void 0),t.$$.dirty&8193&&a(7,n=s===b?s:b?b+"-hover":s)},p(a(8,l=Ee??"en")),[b,r,f,v,h,N,O,n,l,i,c,K,y,s,u,g,V,D,H,L,Ae,re]}class Vt extends Ne{constructor(e){super(),Oe(this,e,yt,zt,ne,{})}}export{Vt as component,Tt as universal};
