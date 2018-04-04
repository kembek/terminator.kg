'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
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
  loading: { color: '#744d82' },
  build: {
    analyze: true,
    vendor: [],
    extend (config) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{removeDoctype: true}, {removeComments: true}]
          }
        }
      })
    }
  },
  srcDir: resolve(__dirname, '..', 'resources')
}
