<template>
<div class="container">
  <transition name="popup">
    <preloader v-if="loading" />
  </transition>
  <MyHeader v-if="this.$route.fullPath.search('/error/')" />
  <Slider :speed="speedMainSlider" v-if="this.$route.fullPath == '/'" />
  <div v-else style="padding-top: 100px;" />
  <div class="content">

    <nuxt />
  </div>
  <MyFooter v-if="this.$route.fullPath.search('/error/')" />
</div>
</template>

<script>
import MyHeader from '~/components/Header'
import Slider from '~/components/Slider'
import MyFooter from '~/components/Footer'
import preloader from '~/components/preloader'

import settings from '~/settings'

export default {
  components: {
    preloader,
    MyHeader,
    Slider,
    MyFooter

  },
  data() {
    return {
      speedMainSlider: settings.speedMainSlider,
      loading: true,
    }
  },
  head() {
    return {
      title: 'Главная',
      titleTemplate: '%s | ' + settings.name,
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [{
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
          content: 'http://terminator.kg/'
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'ru_RU'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://fd33b22d.ngrok.io/og.png'
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
      ]
    }
  },
  created() {
    this.ready(() => {
      setTimeout(() => {
        this.loading = false
      }, 1000);
    })
  },
  methods: {
    ready(fn) {
      if (process.browser) {
        window.onload = () => {
          fn();
        }
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
          setTimeout(() => {
            fn();
          }, 1000);
        } else {
          document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
              fn();
            }, 1000);
          });
        }
        setTimeout(() => {
          if (!this.loading)
            fn();
        }, 1000)
      }
    }
  }
}
</script>
<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .page {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
