importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "adonuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4c136cc28ed5f37970d3.js",
    "revision": "692a8222db5ca1fcf3159fe3d16b6f3a"
  },
  {
    "url": "/_nuxt/layouts_default.c55cc568b95a9173539d.js",
    "revision": "08918b85046121fc0818587181c8ccac"
  },
  {
    "url": "/_nuxt/layouts_none.fb46da3323f088853359.js",
    "revision": "0e30137ef4b5c86e302c7b7980f3ee5b"
  },
  {
    "url": "/_nuxt/manifest.e876b257e8052f7314de.js",
    "revision": "fcf5127078fd0067cd701414fd0ae0e3"
  },
  {
    "url": "/_nuxt/pages_about_index.dd22b8384a7d47158874.js",
    "revision": "b1692d5201f2e1ce9b2aa7b79b692092"
  },
  {
    "url": "/_nuxt/pages_contacts_index.b404576d00bcf3d0ab0e.js",
    "revision": "0071ce67f4c8f2911c772133a8db2802"
  },
  {
    "url": "/_nuxt/pages_faq__link.1f12ff8545ba8b9dfc90.js",
    "revision": "8149a815ca5c6553be27f57c50d26a2d"
  },
  {
    "url": "/_nuxt/pages_FAQ.7effd052557a4587f772.js",
    "revision": "f2cf6105c54f891e8b277c61955eb704"
  },
  {
    "url": "/_nuxt/pages_index.dd05c5048b0841927f06.js",
    "revision": "cc2ddbb3761b8dc08f535815d7d933de"
  },
  {
    "url": "/_nuxt/pages_products__product.f24b417e67e16917d056.js",
    "revision": "3ab46412f6746a6d8e6f60e4a3dce43c"
  },
  {
    "url": "/_nuxt/pages_products_index.6c58f1606d568b41ac12.js",
    "revision": "1f86ef5c8ce9dd055d363fc55ed687d1"
  },
  {
    "url": "/_nuxt/pages_search__result.953123f5a8106f14bc7a.js",
    "revision": "dfbede481984cb992338ba10f1089ec7"
  },
  {
    "url": "/_nuxt/pages_search_index.b553f19f0d9e664fdcd6.js",
    "revision": "d931034ad3424c36319ae74eaa045d52"
  },
  {
    "url": "/_nuxt/pages_search.c7e66e17b2cf285de2e4.js",
    "revision": "5a25d5411ef931c127f2c38d6f52da00"
  },
  {
    "url": "/_nuxt/pages_timer.759b109e42f5b3227bdf.js",
    "revision": "2c831f3ae7c0122c7396e8dee6ba74ac"
  },
  {
    "url": "/_nuxt/vendor.e84a13337f58784893ab.js",
    "revision": "2940202a331228775cd41b21199df2cf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://terminator.kg/*'), workboxSW.strategies.networkFirst({"cacheName":"terminator.kg","cacheableResponse":{"statuses":[0,200]},"cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')

