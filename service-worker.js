if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,i,r)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return a;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"App.a84a2a88.css",revision:"33b9453aa0273e5337ff8d0d23a6be38"},{url:"App.a84a2a88.css.map",revision:"57c8e259183cbe4cf5a8294ce7ce53d7"},{url:"App.f36c9519.js",revision:"8f1d76e3ca7b6fc4497cf67d3fc8091c"},{url:"App.f36c9519.js.map",revision:"1c9b6421c879b012d1b7d008f7fc389a"},{url:"apple-touch-icon.e3d29d54.png",revision:"99a2907ed85b852299b226072a0b8aac"},{url:"calculator-interface.676708e9.png",revision:"a2945c9de4994c385872d324ccb6fac7"},{url:"favicon-16x16.4efe85a3.png",revision:"2c1020830977a52cac12489257e6d516"},{url:"favicon-192x192.733db1c1.png",revision:"0f36b6e6c45b1bcd47e5d036a04e0546"},{url:"favicon-32x32.529670aa.png",revision:"d330c23a33e8d88bcdb07c23e0e972b1"},{url:"favicon-384x384.5d432ca2.png",revision:"af3cc151786668366038ccad41765f6a"},{url:"favicon-512x512.46741fe2.png",revision:"9a9eb0d3971177b698c4c517ecc84a68"},{url:"favicon-64x64.25478827.png",revision:"0d173e487873655a1a02d822f3ab42fc"},{url:"favicon-780x780.8e99ea4f.png",revision:"a7d6190215ecc73059a36a40ef494ee5"},{url:"favicon.8666a8e9.png",revision:"5ca441a285a96216f480bce8046f7c5b"},{url:"index.html",revision:"1e5061787aa99108895d02915bfbe2df"},{url:"manifest.webmanifest",revision:"7aab37ebbc29e35c53d6012f3f5d08a8"},{url:"mstile-150x150.2ca57f77.png",revision:"b8b182cbedafaae043a9536ad97a5087"},{url:"mstile-310x150.1e4e6404.png",revision:"52fd064688a0f5a71028c96e39532f11"},{url:"mstile-310x310.d8847c2c.png",revision:"5e5efd0c1eee54283bc4aa40978912b5"},{url:"mstile-70x70.451af7a5.png",revision:"cccfd50e2eae9af189b8a576c97f80f4"}],{})}));
//# sourceMappingURL=service-worker.js.map
