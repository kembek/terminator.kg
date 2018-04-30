'use strict'
const resolve = require('path').resolve
const axios = require('axios')

module.exports = {
  /*
   ** Headers of the page
   */
  manifest: {
    name: 'TERMINATOR.KG',
    short_name: 'TERMINATOR.KG',
    description: 'Интернет-магазин TERMINATOR.KG',
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
        hid: 'description',
        name: 'description',
        content: 'Интернет-магазин TERMINATOR.KG. Здесь Вы сможете найти оригинальную, качественную продукцию по доступной цене. Продукция - Xiaomi смартфоны, аксессуары для смартфонов, гаджеты, рюкзаки и сумки, wi-fi роутеры, гироскутеры, электросамокаты, электровелоипеды, квадрокоптеры, зубные щетки и многое другое. Будем рады видеть!'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Главная страница | TERMINATOR.KG'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Интернет-магазин TERMINATOR.KG. Здесь Вы сможете найти оригинальную, качественную продукцию по доступной цене. Продукция - Xiaomi смартфоны, аксессуары для смартфонов, гаджеты, рюкзаки и сумки, wi-fi роутеры, гироскутеры, электросамокаты, электровелоипеды, квадрокоптеры, зубные щетки и многое другое. Будем рады видеть!'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TERMINATOR.KG'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://terminator.kg'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ru_RU'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://terminator.kg/og.png'
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
    // script: [{
    //   src: 'sw.js',
    //   type: 'text/javascript'
    // }]
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
      src: '~/plugins/vue-carousel.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-to.js',
      ssr: false
    }, {
      src: '~/plugins/vue-notifications.js',
      ssr: false
    },
    '~/plugins/vue-social-sharing.js',
  ],
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],
  workbox: {
    runtimeCaching: [{
      urlPattern: 'http://localhost/*',
      strategyOptions: {
        cacheName: 'terminator.kg',
        cacheableResponse: { statuses: [0, 200] },
        cacheExpiration: {
          maxEntries: 10,
          maxAgeSeconds: 300
        }
      }
    }]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://terminator.kg',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/admin',
      '/admin/**'
    ],
    // routes: [
    //   {
    //     url: '/',
    //     changefreq: 'daily',
    //     priority: 1
    //   }
    // ],
    // routes () {
    //   return axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.data.map(user =>  '/users/' + user.username))
    // }
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
