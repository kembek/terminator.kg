'use strict'
const resolve = require('path').resolve
const axios = require('axios')
const settings = require('../resources/settings')

module.exports = {
  router: {
    // middleware: 'store'
  },
  /*
   ** Headers of the page
   */
  manifest: {
    name: settings.name,
    short_name: settings.name,
    description: settings.description,
    theme_color: '#242323',
    background_color: '#242323',
    display: 'standalone',
    orientation: 'portrait',
    lang: 'ru',
    start_url: '/'
  },
  head: {
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'TERMINATOR.KG'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: settings.main_title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: settings.description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: settings.name
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://terminator.kg'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ru_RU'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://terminator.kg/og.png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '968'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '504'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'logo180.png'
      },
      {
        rel: 'apple-touch-icon',
        href: 'logo76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'logo76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'logo120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'logo152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '167x167',
        href: 'logo167.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'logo180.png'
      },
    ],
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/css/clear.min.css',
    '~assets/css/main.css'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#744d82'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/vue-carousel',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-to',
      ssr: false
    }, {
      src: '~/plugins/vue-notifications',
      ssr: false
    }, {
      src: '~/plugins/vue-slider-component',
      ssr: false
    },
    '~/plugins/vue-social-sharing',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa', ['@nuxtjs/google-analytics', {
      id: 'UA-119873741-1'
    }],
    ['@nuxtjs/google-tag-manager',
      {
        id: 'GTM-NCVNLZP'
      }
    ],
  ],
  axios: {
    // proxy: true
  },
  workbox: {
    runtimeCaching: [{
      urlPattern: 'https://terminator.kg/*',
      strategyOptions: {
        cacheName: 'terminator.kg',
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheExpiration: {
          maxEntries: 10,
          maxAgeSeconds: 300
        }
      }
    }]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://terminator.kg',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/admin',
      '/timer',
      '/products',
      '/admin/**'
    ],
    // routes: [
    //   {
    //     url: '/',
    //     changefreq: 'daily',
    //     priority: 1
    //   }
    // ],
    routes() {
      return axios.all([
          axios.get('http://localhost:3001/api/categories.json'),
          axios.get('http://localhost:3001/api/products.json')
        ])
        .then(axios.spread((resCategories, resProducts) => {
          let routes = resCategories.data.items.map(categories => '/categories/' + categories.link)
            .concat(resProducts.data.items.map(product => '/products/' + product.id))
          return routes
        }))
    }
  },
  build: {
    // analyze: true,
    vendor: ['vue-notifications', 'vue-carousel'],
    extend(config) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{
              removeDoctype: true
            }, {
              removeComments: true
            }]
          }
        }
      })
    }
  },
  srcDir: resolve(__dirname, '..', 'resources')
}
