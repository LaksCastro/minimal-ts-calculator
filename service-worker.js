"use strict";var precacheConfig=[["/minimal-ts-calculatorApp.418d5bfe.css","01a16bcb856eb771634f4fb7ae7c6605"],["/minimal-ts-calculatorApp.a84a2a88.css","d5949e1846c6ab9671582ad601552bf5"],["/minimal-ts-calculatorApp.f36c9519.js","ca691e16e52af7a790cb1da693ceab11"],["/minimal-ts-calculatorApp.fa877a3f.js","8a5e47d711b284494e8250a4c1d948b3"],["/minimal-ts-calculatorapple-touch-icon.e3d29d54.png","99a2907ed85b852299b226072a0b8aac"],["/minimal-ts-calculatorapple-touch-icon.fd25322e.png","019c3e7afec991a3d297d615afa4f323"],["/minimal-ts-calculatorcalculator-interface.676708e9.png","a2945c9de4994c385872d324ccb6fac7"],["/minimal-ts-calculatorfavicon-16x16.4efe85a3.png","2c1020830977a52cac12489257e6d516"],["/minimal-ts-calculatorfavicon-16x16.7e99a225.png","8ed125234ee347f2d08122956767d9a6"],["/minimal-ts-calculatorfavicon-192x192.515bb7bd.webp","d1976736370e54b6934e6aa106c80244"],["/minimal-ts-calculatorfavicon-192x192.733db1c1.png","0f36b6e6c45b1bcd47e5d036a04e0546"],["/minimal-ts-calculatorfavicon-192x192.f94ce260.png","4d5f8dc882e7c56ba398d152e156d0b0"],["/minimal-ts-calculatorfavicon-32x32.529670aa.png","d330c23a33e8d88bcdb07c23e0e972b1"],["/minimal-ts-calculatorfavicon-32x32.6631451b.webp","5abd0f1907ff3b989dd89a9c1138b5eb"],["/minimal-ts-calculatorfavicon-32x32.e575ee56.png","37837e604ab6d944c1c61eb585de2a11"],["/minimal-ts-calculatorfavicon-384x384.5d432ca2.png","af3cc151786668366038ccad41765f6a"],["/minimal-ts-calculatorfavicon-384x384.a9c86442.webp","d06742d8a3d3e8d4cb0508eadc501dd9"],["/minimal-ts-calculatorfavicon-384x384.cc8fcb16.png","856b76e9b295cc8f25cc00ab20590e3e"],["/minimal-ts-calculatorfavicon-512x512.157df8f2.webp","8ad2ff1b4c7a505ebc7f7d95ef5275fe"],["/minimal-ts-calculatorfavicon-512x512.28773792.webp","d51b6c7788cfeee49102cec89a28eb6f"],["/minimal-ts-calculatorfavicon-512x512.46741fe2.png","9a9eb0d3971177b698c4c517ecc84a68"],["/minimal-ts-calculatorfavicon-512x512.cb1f0d83.png","0dbc5deeed808f3139ab8bca319053ac"],["/minimal-ts-calculatorfavicon-64x64.25478827.png","0d173e487873655a1a02d822f3ab42fc"],["/minimal-ts-calculatorfavicon-64x64.3a7fbad4.webp","cb8627f1c659f4d1c219be0b470ac52d"],["/minimal-ts-calculatorfavicon-64x64.48a58864.png","4659526c40604c81f7d17b46a8fc62f8"],["/minimal-ts-calculatorfavicon-780x780.1f8e9209.webp","70b39243f5d4fd38d0bfe3dda5a2422c"],["/minimal-ts-calculatorfavicon-780x780.72b0bda4.webp","4210d700c30d8f296980f73d01c3c7dd"],["/minimal-ts-calculatorfavicon-780x780.8e99ea4f.png","a7d6190215ecc73059a36a40ef494ee5"],["/minimal-ts-calculatorfavicon-780x780.d90251af.png","1a8f3518c141d7417c7be923e12c24f3"],["/minimal-ts-calculatorfavicon.8666a8e9.png","5ca441a285a96216f480bce8046f7c5b"],["/minimal-ts-calculatorindex.html","71233b0ef6dc1250d2c41ed7301d8a23"],["/minimal-ts-calculatormstile-150x150.2ca57f77.png","b8b182cbedafaae043a9536ad97a5087"],["/minimal-ts-calculatormstile-150x150.43ec379a.png","6fe42d14051a213169c998a25d1659c5"],["/minimal-ts-calculatormstile-310x150.1e4e6404.png","52fd064688a0f5a71028c96e39532f11"],["/minimal-ts-calculatormstile-310x310.9772b662.png","1969bc24e2c8f511dac9fa2891e4126d"],["/minimal-ts-calculatormstile-310x310.d8847c2c.png","5e5efd0c1eee54283bc4aa40978912b5"],["/minimal-ts-calculatormstile-70x70.451af7a5.png","cccfd50e2eae9af189b8a576c97f80f4"],["/minimal-ts-calculatormstile-70x70.6b018c16.png","354529740563c421cfe4ab289a4177fe"]],cacheName="sw-precache-v3-minimal-ts-calculator-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,c,t){var n=new URL(a);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,e){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],t=new URL(e,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!e.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!e.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),e=urlsToCacheKeys.has(c));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL("./index.html",self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});