importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "adonuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b72ed38d77ee4fffb92d.js",
    "revision": "3f7f7398d002f3806825bd191ccf5c9a"
  },
  {
    "url": "/_nuxt/layouts_default.ee36e6f969735446f85a.js",
    "revision": "44e2fd1dd10c1bc246bec11b7b702a09"
  },
  {
    "url": "/_nuxt/layouts_none.e19d17f4b785cbf8b279.js",
    "revision": "69d1536e0baf069c2b7107be629877d7"
  },
  {
    "url": "/_nuxt/manifest.91bac394219b3b288b7c.js",
    "revision": "f3648046128170c043976f069402c081"
  },
  {
    "url": "/_nuxt/pages_about_index.d9feb47c8c2d27a39d72.js",
    "revision": "647e4632e0d6f0de084519e820bc9b63"
  },
  {
    "url": "/_nuxt/pages_admin_index.fe9fefa6a58d402d066a.js",
    "revision": "7dd425281c2a7e894bfc52b690abc4dc"
  },
  {
    "url": "/_nuxt/pages_admin_test.6a33a32d3a476521eeeb.js",
    "revision": "cbd59056204932d6dd7086ea1b1327d9"
  },
  {
    "url": "/_nuxt/pages_contacts_index.b404576d00bcf3d0ab0e.js",
    "revision": "0071ce67f4c8f2911c772133a8db2802"
  },
  {
    "url": "/_nuxt/pages_faq__link.867bba6bb61ca8a3495e.js",
    "revision": "33bb0825b3dc0db721b34835f44da282"
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
    "url": "/_nuxt/pages_products__product.9285e317c4a839185fc3.js",
    "revision": "f762b771dce37aa9f8db9bdf2b736807"
  },
  {
    "url": "/_nuxt/pages_products_index.ff35e913ec36d768c034.js",
    "revision": "a0764ab0a8ba381c08b0ecae77ee76c7"
  },
  {
    "url": "/_nuxt/pages_search__result.4e4c6f77b28a618c20ee.js",
    "revision": "13410266e6cb18f15b929d5bfff60b99"
  },
  {
    "url": "/_nuxt/pages_search_index.831807472e4685d0ca9e.js",
    "revision": "c5ed006498b8805068ef26a84f1f8557"
  },
  {
    "url": "/_nuxt/pages_search.816ae752dea645ecb1f5.js",
    "revision": "ad0d202ee24cfd785961c8a03c9d101f"
  },
  {
    "url": "/_nuxt/vendor.7c04579187fe8f6fb65c.js",
    "revision": "e9a786c3830275e7edb42dc57852952f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('http://localhost/*'), workboxSW.strategies.networkFirst({"cacheName":"terminator.kg","cacheableResponse":{"statuses":[0,200]},"cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')

