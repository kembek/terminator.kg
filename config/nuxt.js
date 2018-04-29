'use strict'
const resolve = require('path').resolve
const axios = require('axios')

module.exports = {
  /*
   ** Headers of the page
   */
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
      }
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
      {
        rel: 'manifest',
        href: 'manifest.json'
      }
    ]
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
    '@nuxtjs/sitemap'
  ],
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
    analyze: true,
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
