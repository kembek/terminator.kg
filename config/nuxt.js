"use strict";
const resolve = require("path").resolve;
const axios = require("axios");
const settings = require("../resources/settings");

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
    theme_color: "#242323",
    background_color: "#242323",
    display: "standalone",
    orientation: "portrait",
    lang: "ru",
    start_url: "/"
  },
  head: {
    title: settings.main_title,
    titleTemplate: "%s | " + settings.name,
    htmlAttrs: {
      lang: "ru"
    },
    meta: [{
        charset: "utf-8"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Смартфоны (телефоны) Xiaomi (Mi) в Бишкеке (Кыргызстане) Интернет магазине TERMINATOR.KG xiaomi в бишкеке, xiaomi купить в бишкеке, xiaomi в оше, xiaomi смартфоны, купить xiaomi смартфоны, xiaomi аксессуары, xiaomi рюкзаки, xiaomi видеорегистраторы, mi band xiaomi, аксессуары xiaomi, зарядное устройство xiaomi,  xiaomi камеры, планшеты xiaomi"
      },
      {
        hid: "description",
        name: "description",
        content: settings.description
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      },
      {
        name: "apple-mobile-web-app-title",
        content: "TERMINATOR.KG"
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: settings.main_title
      },
      {
        hid: "og:description",
        property: "og:description",
        content: settings.description
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: settings.name
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://terminator.kg"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "ru_RU"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://terminator.kg/og.png"
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "968"
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "504"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico"
      },
      {
        rel: "apple-touch-startup-image",
        href: "logo180.png"
      },
      {
        rel: "apple-touch-icon",
        href: "logo76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "logo76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "logo120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "logo152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "167x167",
        href: "logo167.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "logo180.png"
      }
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    "~assets/css/clear.min.css",
    "~assets/css/main.css",
    "~assets/css/vue2-editor.min.css"
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#744d82"
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: "~/plugins/vue-carousel",
      ssr: false
    },
    {
      src: "~/plugins/vue-scroll-to",
      ssr: false
    },
    {
      src: "~/plugins/vue-notifications",
      ssr: false
    },
    {
      src: "~/plugins/vue-slider-component",
      ssr: false
    },
    "~/plugins/vue-social-sharing"
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa", [
      "@nuxtjs/google-analytics",
      {
        id: "UA-119873741-1"
      }
    ]
    // [
    //   "@nuxtjs/google-tag-manager",
    //   {
    //     id: "GTM-NCVNLZP"
    //   }
    // ]
  ],
  axios: {
    proxy: true,
    // baseURL: "http://terminator.kg:3333/"
  },
  // proxy: {
  //   "/api/": {
  //     target: "http://terminator.kg:3333",
  //     pathRewrite: {
  //       "^/api/": "/api/"
  //     }
  //   }
  // },
  workbox: {
    runtimeCaching: [{
      urlPattern: "https://terminator.kg/*",
      strategyOptions: {
        cacheName: "terminator.kg",
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
    path: "/sitemap.xml",
    hostname: "https://terminator.kg",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: ["/blog", "blog", "/blog/**"],
    // routes: [
    //   {
    //     url: '/',
    //     changefreq: 'daily',
    //     priority: 1
    //   }
    // ],
    async routes(calback) {
      await axios
        .all([
          axios.get("https://terminator.kg/api/categories/"),
          axios.get("https://terminator.kg/api/products/")
        ])
        .then(
          axios.spread((resCategories, resProducts) => {
            let routes = resCategories.data
              .data
              .map(categories => "/categories/" + categories.link)
              .concat(
                resProducts.data
                .data.map(product => "/product/" + product.link)
              );
              calback(null, routes)
          })
        )
        .catch(calback);
    }
  },
  build: {
    // analyze: true,
    vendor: ["vue-notifications", "vue-carousel"],
    extend(config) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
        options: {
          svgo: {
            plugins: [{
                removeDoctype: true
              },
              {
                removeComments: true
              }
            ]
          }
        }
      });
    }
  },
  srcDir: resolve(__dirname, "..", "resources")
};
