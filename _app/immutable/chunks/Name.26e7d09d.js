import{S as H,i as b,s as w,k as h,a as L,l as _,m as d,h as c,c as M,n as m,b as T,G as u,H as p,I as y}from"./index.37ad4cf4.js";import{t as E}from"./customBlur.1c0c5c56.js";function N(l){let e,s,n=l[0]("name")+"",o,r,i=l[0]("role")+"";return{c(){e=h("div"),s=h("h1"),o=L(),r=h("h2"),this.h()},l(t){e=_(t,"DIV",{class:!0});var a=d(e);s=_(a,"H1",{class:!0});var v=d(s);v.forEach(c),o=M(a),r=_(a,"H2",{class:!0});var f=d(r);f.forEach(c),a.forEach(c),this.h()},h(){m(s,"class","svelte-5dwdu8"),m(r,"class","svelte-5dwdu8"),m(e,"class","bubble svelte-5dwdu8")},m(t,a){T(t,e,a),u(e,s),s.innerHTML=n,u(e,o),u(e,r),r.innerHTML=i},p(t,[a]){a&1&&n!==(n=t[0]("name")+"")&&(s.innerHTML=n),a&1&&i!==(i=t[0]("role")+"")&&(r.innerHTML=i)},i:p,o:p,d(t){t&&c(e)}}}function $(l,e,s){let n;return y(l,E,o=>s(0,n=o)),[n]}class S extends H{constructor(e){super(),b(this,e,$,N,w,{})}}export{S as N};