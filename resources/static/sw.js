importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "adonuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.773d2dcbc9c34eb0fec3.js",
    "revision": "0d2371aa3c2199aad49d5c03647d9c70"
  },
  {
    "url": "/_nuxt/layouts_default.4fffc126c4abf75a0687.js",
    "revision": "ebadd1c7a2bbf52945dcabd2cd936e16"
  },
  {
    "url": "/_nuxt/layouts_none.fb46da3323f088853359.js",
    "revision": "0e30137ef4b5c86e302c7b7980f3ee5b"
  },
  {
    "url": "/_nuxt/manifest.a408384acd164b870d42.js",
    "revision": "c221561fda3bf5f7378caba2e085cd36"
  },
  {
    "url": "/_nuxt/pages_access_about_index.3e590ab7091c68474654.js",
    "revision": "d4bbad90b94539edc88e556d6ec8deac"
  },
  {
    "url": "/_nuxt/pages_access_contacts_index.c08f93bc6471e85e36c2.js",
    "revision": "7a40aaf679e6824b3e67e77e6b05a0cb"
  },
  {
    "url": "/_nuxt/pages_access_faq__link.38d415170ef41a6a418f.js",
    "revision": "75b4d163a78f7ea3ddfbcf7267f995cd"
  },
  {
    "url": "/_nuxt/pages_access_FAQ.eb33513759759aecddcf.js",
    "revision": "932a449974f9f062ce14b521018b2e36"
  },
  {
    "url": "/_nuxt/pages_access_index.c3676210b497d7856325.js",
    "revision": "3366516ddcdb259eb231fc80e68cf03b"
  },
  {
    "url": "/_nuxt/pages_access_products__product.6aa4a86da1153f564a75.js",
    "revision": "92e17d35e69adf632c069f0a2454d573"
  },
  {
    "url": "/_nuxt/pages_access_products_index.735457ab267ad94ebd9e.js",
    "revision": "2f25c4d967912fe4ffaabbbb5b2cc6e8"
  },
  {
    "url": "/_nuxt/pages_access_search__result.a94e17d89cc355215c73.js",
    "revision": "65f988133fc9e4c0e5725c9c834caea2"
  },
  {
    "url": "/_nuxt/pages_access_search_index.d176a12fcc392357d40c.js",
    "revision": "6d78713a94aa38a7fd05df11a43fd066"
  },
  {
    "url": "/_nuxt/pages_access_search.caf9e9c13552eb9c7f1e.js",
    "revision": "901aeed9fcd7f444b0553a5b6b7a23ac"
  },
  {
    "url": "/_nuxt/pages_index.fecfe4d94f0b403fbb69.js",
    "revision": "6ede6dfd39c7c77b91f0f88749490b91"
  },
  {
    "url": "/_nuxt/vendor.e84a13337f58784893ab.js",
    "revision": "1ae2b6fdc688d79779ed12263d9dfa22"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://terminator.kg/*'), workboxSW.strategies.networkFirst({"cacheName":"terminator.kg","cacheableResponse":{"statuses":[0,200]},"cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')

