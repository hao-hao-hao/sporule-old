if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-bd003a97"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"/404.html",revision:"933f18a57a24232150f8561285ac17a8"},{url:"/index.html",revision:"fa351f1b4aef414c1a50c538f58c4e12"},{url:"/main.41728b305dc76067e1d2.css",revision:"33902f36bc3236ab76528208363773b3"},{url:"/main.4d9afcaca10194542839.js",revision:"be535dcc7a3c4ebf3f4716e9e5791abd"}],{}),e.registerRoute(/\/.(js|css)$\/i/,new e.StaleWhileRevalidate,"GET")}));
