<template>
<div class="slider-blog">
  <h2>Блог</h2>
  <no-ssr placeholder="Loading...">
    <Carousel :navigationEnabled="true" :autoplay="true" :autoplayLoop="true" :loop="true" :autoplayHoverPause="true" :perPage="perPage" :autoplayTimeout="10000" navigationNextLabel="<img class='slider-navigation' src='/next.svg' />" navigationPrevLabel="<img class='slider-navigation' src='/prev.svg' />" paginationActiveColor="#0B8793">
      <Slide v-for="(item, index) in items" :key="index">
        <nuxt-link :to="item.url">
          <span class="slider-name" :title="item.name">{{item.name}}</span>
          <img :src="'/images/blog/' + item.image" :alt="item.description">
        </nuxt-link>
      </Slide>
    </Carousel>
  </no-ssr>
</div>
</template>

<script>
import {
  Carousel,
  Slide
} from "vue-carousel";

export default {
  data() {
    return {
      perPage: 3,
      items: [{
        name: 'Обзор Xiaomi Redmi 5 Plus Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        image: 'hits.jpg',
        url: '/',
        description: 'Блог'
      }]
    }
  },
  components: {
    Carousel,
    Slide
  },
  mounted() {
    setInterval(() => {
      if (process.browser)
        this.perPage = window.innerWidth < 850 ? 1 : 3
    }, 100)
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';

.slider-blog {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 1200px;
  width: 80vw;
  h2 {
    width: 80vw;
    max-width: 1200px;
    padding-bottom: 20px;
    font-family: 'Segoe UI';
    color: @color-main_font;
    font-size: 24px;
    text-transform: uppercase;
  }
  .VueCarousel {
    width: 80vw;
    max-width: 1200px;
    .VueCarousel-slide {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80vw;
      a {
        text-decoration: none;
        text-align: center;
        padding: 5px;
        .slider-name {
          max-width: 300px;
          color: @color-dark;
          font-size: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }
        img {
          margin-top: 20px;
          max-width: 400px;
          object-fit: cover;
          width: 80%;
          max-height: 200px;
        }
      }
    }
    .VueCarousel-dot-button {
      outline: none !important;
    }
  }
}
.slider-navigation {
  height: 25px;
}
@media screen and (max-width: 600px) {
  .VueCarousel-navigation-button {
    display: none
  }
}
</style>

