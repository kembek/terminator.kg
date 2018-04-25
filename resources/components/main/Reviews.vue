<template>
<div class="slider-reviews">
  <h2>Отзывы</h2>
  <no-ssr placeholder="Loading...">
    <Carousel :navigationEnabled="true" :autoplay="true" :autoplayLoop="true" :loop="true" :autoplayHoverPause="true" :perPage="perPage" :autoplayTimeout="10000" :navigationClickTargetSize="0" navigationNextLabel="" navigationPrevLabel="">
      <Slide v-for="(item, index) in items" :key="index">
        <span class="slider-name">{{item.name}}</span>
        <p class="slider-message">
          {{item.message}}
        </p>
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
      perPage: 2,
      items: [{
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
      }, {
        name: 'Обзор Xiaomi Redmi 5 Plus',
        message: 'В дополнение к хорошему соотношению цены и качества, которым славятся устройства серии Redmi, новая модель может похвастаться прекрасным внешним видом и модным широкоформатным экраном.'
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
        this.perPage = window.innerWidth < 850 ? 1 : 2
    }, 100)
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.slider-reviews {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
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
      .slider-name {
        color: @color-dark;
      }
      .slider-message {
        color: @color-text;
        margin-top: 8px;
      }
    }
    .VueCarousel-dot-button {
      outline: none !important;
    }
  }
}
</style>