import{S as J,i as S,s as C,k as $,a as E,q as F,l as g,m as w,h as d,c as H,r as O,n as h,b as z,G as u,u as Q,H as D,I as U,p as j,y as A,R as X,z as P,A as W,g as V,J as Z,d as L,B as q,Y as x,K as ee}from"../chunks/index.43f715bc.js";import{t as te,c as ne}from"../chunks/customBlur.ffc4c6ee.js";function re(a){let t,e,n,o,s=a[1](`workInfo.${a[0]}.company`)+"",I,_,y=a[1](`workInfo.${a[0]}.role`)+"",v,p,k=a[1](`workInfo.${a[0]}.description`)+"",b,l,r,c=a[1](`workInfo.${a[0]}.period`)+"",i;return{c(){t=$("div"),e=$("div"),n=$("div"),o=$("h2"),I=E(),_=$("h2"),v=E(),p=$("p"),b=E(),l=$("div"),r=$("p"),i=F(c),this.h()},l(f){t=g(f,"DIV",{class:!0});var m=w(t);e=g(m,"DIV",{class:!0});var M=w(e);n=g(M,"DIV",{class:!0});var T=w(n);o=g(T,"H2",{});var N=w(o);N.forEach(d),I=H(T),_=g(T,"H2",{class:!0});var R=w(_);R.forEach(d),T.forEach(d),v=H(M),p=g(M,"P",{class:!0});var Y=w(p);Y.forEach(d),M.forEach(d),b=H(m),l=g(m,"DIV",{class:!0});var G=w(l);r=g(G,"P",{class:!0});var K=w(r);i=O(K,c),K.forEach(d),G.forEach(d),m.forEach(d),this.h()},h(){h(_,"class","role svelte-1ln4dbr"),h(n,"class","title svelte-1ln4dbr"),h(p,"class","svelte-1ln4dbr"),h(e,"class","info svelte-1ln4dbr"),h(r,"class","period svelte-1ln4dbr"),h(l,"class","circle svelte-1ln4dbr"),h(t,"class","item svelte-1ln4dbr")},m(f,m){z(f,t,m),u(t,e),u(e,n),u(n,o),o.innerHTML=s,u(n,I),u(n,_),_.innerHTML=y,u(e,v),u(e,p),p.innerHTML=k,u(t,b),u(t,l),u(l,r),u(r,i)},p(f,[m]){m&3&&s!==(s=f[1](`workInfo.${f[0]}.company`)+"")&&(o.innerHTML=s),m&3&&y!==(y=f[1](`workInfo.${f[0]}.role`)+"")&&(_.innerHTML=y),m&3&&k!==(k=f[1](`workInfo.${f[0]}.description`)+"")&&(p.innerHTML=k),m&3&&c!==(c=f[1](`workInfo.${f[0]}.period`)+"")&&Q(i,c)},i:D,o:D,d(f){f&&d(t)}}}function ae(a,t,e){let n;U(a,te,s=>e(1,n=s));let{name:o}=t;return a.$$set=s=>{"name"in s&&e(0,o=s.name)},[o,n]}class B extends J{constructor(t){super(),S(this,t,ae,re,C,{name:0})}}function se(a){let t;return{c(){t=$("div"),this.h()},l(e){t=g(e,"DIV",{style:!0,class:!0}),w(t).forEach(d),this.h()},h(){j(t,"--delay",a[0]+"ms"),j(t,"--i",a[1]*3+1),h(t,"class","arrow svelte-1jhgpw2")},m(e,n){z(e,t,n)},p(e,[n]){n&1&&j(t,"--delay",e[0]+"ms"),n&2&&j(t,"--i",e[1]*3+1)},i:D,o:D,d(e){e&&d(t)}}}function le(a,t,e){let{delay:n}=t,{i:o}=t;return a.$$set=s=>{"delay"in s&&e(0,n=s.delay),"i"in s&&e(1,o=s.i)},[n,o]}class oe extends J{constructor(t){super(),S(this,t,le,se,C,{delay:0,i:1})}}function ie(a,t,e){const n=a.slice();return n[0]=t[e],n[2]=e,n}function ce(a){let t,e;return t=new oe({props:{delay:400+a[2]*300,i:a[2]}}),{c(){A(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,o){W(t,n,o),e=!0},p:D,i(n){e||(V(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){q(t,n)}}}function fe(a){let t,e,n,o,s,I,_,y,v,p,k;n=new B({props:{name:"beamex"}}),s=new B({props:{name:"assistant"}}),_=new B({props:{name:"courses"}});let b=Array(3),l=[];for(let r=0;r<b.length;r+=1)l[r]=ce(ie(a,b,r));return{c(){t=E(),e=$("div"),A(n.$$.fragment),o=E(),A(s.$$.fragment),I=E(),A(_.$$.fragment),y=E(),v=$("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){X("svelte-1xjvk26",document.head).forEach(d),t=H(r),e=g(r,"DIV",{id:!0,class:!0});var i=w(e);P(n.$$.fragment,i),o=H(i),P(s.$$.fragment,i),I=H(i),P(_.$$.fragment,i),y=H(i),v=g(i,"DIV",{id:!0,class:!0});var f=w(v);for(let m=0;m<l.length;m+=1)l[m].l(f);f.forEach(d),i.forEach(d),this.h()},h(){document.title="Jaakko Nakaza|Work History",h(v,"id","line"),h(v,"class","svelte-1cjnx2w"),h(e,"id","work-container"),h(e,"class","svelte-1cjnx2w")},m(r,c){z(r,t,c),z(r,e,c),W(n,e,null),u(e,o),W(s,e,null),u(e,I),W(_,e,null),u(e,y),u(e,v);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(v,null);k=!0},p:D,i(r){if(!k){V(n.$$.fragment,r),V(s.$$.fragment,r),V(_.$$.fragment,r);for(let c=0;c<b.length;c+=1)V(l[c]);p||Z(()=>{p=ee(e,ne,{}),p.start()}),k=!0}},o(r){L(n.$$.fragment,r),L(s.$$.fragment,r),L(_.$$.fragment,r),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);k=!1},d(r){r&&d(t),r&&d(e),q(n),q(s),q(_),x(l,r)}}}class me extends J{constructor(t){super(),S(this,t,null,fe,C,{})}}export{me as component};
