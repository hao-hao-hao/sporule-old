if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-b116f506"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"/404.html",revision:"933f18a57a24232150f8561285ac17a8"},{url:"/index.html",revision:"1ef1ab6d812bdf790dd2295ab740ffdb"},{url:"/main.407a107ad978392415f9.css",revision:"eba2b2ec1f19c9e452242be1b711b936"},{url:"/main.495643b1405a5dbbc263.js",revision:"0ac2682f1aa33df0324203f0956ab7b0"}],{}),e.registerRoute(/\/.(js|css)$\/i/,new e.StaleWhileRevalidate,"GET")}));
