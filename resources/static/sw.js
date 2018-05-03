importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "adonuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2fa03b4a1c9745b6cd2c.js",
    "revision": "5822ad37f00b60e0419e6f2958908791"
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
    "url": "/_nuxt/manifest.7e286576bf500215aecb.js",
    "revision": "5052bbc79fa39972d53e968e9a55c5e0"
  },
  {
    "url": "/_nuxt/pages_access_about_index.93e4dd1ebe906200696b.js",
    "revision": "0837c8a04eaf9b412c003a4d069b1442"
  },
  {
    "url": "/_nuxt/pages_access_contacts_index.5c350d6c2d66129f22a1.js",
    "revision": "f660a501bea33e539fdf909a644d3035"
  },
  {
    "url": "/_nuxt/pages_access_faq__link.38d415170ef41a6a418f.js",
    "revision": "75b4d163a78f7ea3ddfbcf7267f995cd"
  },
  {
    "url": "/_nuxt/pages_access_FAQ.915927f27bdebff55aea.js",
    "revision": "e7c751a8bfaea9ae84a72cd4738f350b"
  },
  {
    "url": "/_nuxt/pages_access_index.1d4b2174128179f2eceb.js",
    "revision": "71a4af3b0e44ce4913620c2990c0cc88"
  },
  {
    "url": "/_nuxt/pages_access_products__product.21c94e38e12215b8f48e.js",
    "revision": "4029a97473db5e035b3b5e910f0f557f"
  },
  {
    "url": "/_nuxt/pages_access_products_index.735457ab267ad94ebd9e.js",
    "revision": "2f25c4d967912fe4ffaabbbb5b2cc6e8"
  },
  {
    "url": "/_nuxt/pages_access_search__result.fd9b6b422bd64c13aa03.js",
    "revision": "009f0db0e385a5be2bcd3be0c52942a2"
  },
  {
    "url": "/_nuxt/pages_access_search_index.5a63b113e8d95a8de18c.js",
    "revision": "cce79a07ba0ec849b4159761ce7db7a6"
  },
  {
    "url": "/_nuxt/pages_access_search.f01fa86c4cf8ead4ac43.js",
    "revision": "7a0c0961244f158fe1803673350b2fd1"
  },
  {
    "url": "/_nuxt/pages_index.23109ef0de0aa2116100.js",
    "revision": "0f76d9d80f5acba472a26c9aa16adf59"
  },
  {
    "url": "/_nuxt/vendor.e84a13337f58784893ab.js",
    "revision": "2940202a331228775cd41b21199df2cf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://terminator.kg/*'), workboxSW.strategies.networkFirst({"cacheName":"terminator.kg","cacheableResponse":{"statuses":[0,200]},"cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')

