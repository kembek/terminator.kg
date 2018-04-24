<template>
<div class="container">
  <transition name="popup">
    <preloader v-if="loading" />
  </transition>
  <MyHeader v-if="this.$route.fullPath.search('/error/')" />
  <Slider :speed="speedMainSlider" v-if="this.$route.fullPath == '/'" />
  <div v-else style="padding-top: 100px;" />
  <nuxt class="content" />
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
}
</style>
