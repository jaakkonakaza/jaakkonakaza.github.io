import{s as S,j as v,a as E,p as O,k as h,l as p,g as f,c as D,q as Q,m as _,i as B,B as d,r as R,C as L,D as U,n as j,L as Y,f as M,E as Z,b as T,X as x,F as ee}from"../chunks/boolean_attributes.7f0fe1a8.js";import{e as te}from"../chunks/each.1d06be43.js";import{S as z,i as F,c as A,a as P,m as W,d as q}from"../chunks/Component.84afa5ad.js";import{t as re,c as ae}from"../chunks/customBlur.a5a9f7b0.js";function ne(n){let t,e,r,c,i=n[1](`workInfo.${n[0]}.company`)+"",H,m,I=n[1](`workInfo.${n[0]}.role`)+"",u,$,g=n[1](`workInfo.${n[0]}.description`)+"",V,k,w,o=n[1](`workInfo.${n[0]}.period`)+"",a;return{c(){t=v("div"),e=v("div"),r=v("div"),c=v("h2"),H=E(),m=v("h2"),u=E(),$=v("p"),V=E(),k=v("div"),w=v("p"),a=O(o),this.h()},l(s){t=h(s,"DIV",{class:!0});var l=p(t);e=h(l,"DIV",{class:!0});var y=p(e);r=h(y,"DIV",{class:!0});var b=p(r);c=h(b,"H2",{});var X=p(c);X.forEach(f),H=D(b),m=h(b,"H2",{class:!0});var G=p(m);G.forEach(f),b.forEach(f),u=D(y),$=h(y,"P",{class:!0});var K=p($);K.forEach(f),y.forEach(f),V=D(l),k=h(l,"DIV",{class:!0});var J=p(k);w=h(J,"P",{class:!0});var N=p(w);a=Q(N,o),N.forEach(f),J.forEach(f),l.forEach(f),this.h()},h(){_(m,"class","role svelte-1ln4dbr"),_(r,"class","title svelte-1ln4dbr"),_($,"class","svelte-1ln4dbr"),_(e,"class","info svelte-1ln4dbr"),_(w,"class","period svelte-1ln4dbr"),_(k,"class","circle svelte-1ln4dbr"),_(t,"class","item svelte-1ln4dbr")},m(s,l){B(s,t,l),d(t,e),d(e,r),d(r,c),c.innerHTML=i,d(r,H),d(r,m),m.innerHTML=I,d(e,u),d(e,$),$.innerHTML=g,d(t,V),d(t,k),d(k,w),d(w,a)},p(s,[l]){l&3&&i!==(i=s[1](`workInfo.${s[0]}.company`)+"")&&(c.innerHTML=i),l&3&&I!==(I=s[1](`workInfo.${s[0]}.role`)+"")&&(m.innerHTML=I),l&3&&g!==(g=s[1](`workInfo.${s[0]}.description`)+"")&&($.innerHTML=g),l&3&&o!==(o=s[1](`workInfo.${s[0]}.period`)+"")&&R(a,o)},i:L,o:L,d(s){s&&f(t)}}}function se(n,t,e){let r;U(n,re,i=>e(1,r=i));let{name:c}=t;return n.$$set=i=>{"name"in i&&e(0,c=i.name)},[c,r]}class C extends z{constructor(t){super(),F(this,t,se,ne,S,{name:0})}}function le(n){let t;return{c(){t=v("div"),this.h()},l(e){t=h(e,"DIV",{style:!0,class:!0}),p(t).forEach(f),this.h()},h(){j(t,"--delay",n[0]+"ms"),j(t,"--i",n[1]*3+1),_(t,"class","arrow svelte-1jhgpw2")},m(e,r){B(e,t,r)},p(e,[r]){r&1&&j(t,"--delay",e[0]+"ms"),r&2&&j(t,"--i",e[1]*3+1)},i:L,o:L,d(e){e&&f(t)}}}function ie(n,t,e){let{delay:r}=t,{i:c}=t;return n.$$set=i=>{"delay"in i&&e(0,r=i.delay),"i"in i&&e(1,c=i.i)},[r,c]}class oe extends z{constructor(t){super(),F(this,t,ie,le,S,{delay:0,i:1})}}function ce(n,t,e){const r=n.slice();return r[0]=t[e],r[2]=e,r}function de(n){let t,e;return t=new oe({props:{delay:400+n[2]*300,i:n[2]}}),{c(){A(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,c){W(t,r,c),e=!0},p:L,i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){T(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function fe(n){let t,e,r,c,i,H,m,I,u,$,g,V,k;r=new C({props:{name:"beamex"}}),i=new C({props:{name:"assistant"}}),m=new C({props:{name:"courses"}});let w=te(Array(3)),o=[];for(let a=0;a<w.length;a+=1)o[a]=de(ce(n,w,a));return{c(){t=E(),e=v("div"),A(r.$$.fragment),c=E(),A(i.$$.fragment),H=E(),A(m.$$.fragment),I=E(),u=v("div");for(let a=0;a<o.length;a+=1)o[a].c();$=E(),g=v("div"),this.h()},l(a){Y("svelte-1xjvk26",document.head).forEach(f),t=D(a),e=h(a,"DIV",{id:!0,class:!0});var l=p(e);P(r.$$.fragment,l),c=D(l),P(i.$$.fragment,l),H=D(l),P(m.$$.fragment,l),I=D(l),u=h(l,"DIV",{id:!0,class:!0});var y=p(u);for(let b=0;b<o.length;b+=1)o[b].l(y);$=D(y),g=h(y,"DIV",{id:!0,class:!0}),p(g).forEach(f),y.forEach(f),l.forEach(f),this.h()},h(){document.title="Jaakko Nakaza|Work History",_(g,"id","line-base"),_(g,"class","svelte-udik2r"),_(u,"id","line"),_(u,"class","svelte-udik2r"),_(e,"id","work-container"),_(e,"class","svelte-udik2r")},m(a,s){B(a,t,s),B(a,e,s),W(r,e,null),d(e,c),W(i,e,null),d(e,H),W(m,e,null),d(e,I),d(e,u);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(u,null);d(u,$),d(u,g),k=!0},p:L,i(a){if(!k){M(r.$$.fragment,a),M(i.$$.fragment,a),M(m.$$.fragment,a);for(let s=0;s<w.length;s+=1)M(o[s]);V||Z(()=>{V=ee(e,ae,{}),V.start()}),k=!0}},o(a){T(r.$$.fragment,a),T(i.$$.fragment,a),T(m.$$.fragment,a),o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)T(o[s]);k=!1},d(a){a&&f(t),a&&f(e),q(r),q(i),q(m),x(o,a)}}}class he extends z{constructor(t){super(),F(this,t,null,fe,S,{})}}export{he as component};
