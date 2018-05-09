<template>
<div class="main-slider" :style="'background-image: url(' + items[active].img + ')'" v-if="items.length > 0">
  <div class="slider-container">
    <div class="slider-content" v-html="items[active].text" />
    <nuxt-link class="slider-link" :to="items[active].link">Подробнее</nuxt-link>
  </div>
  <div class="navigation">
    <span :class="{'active': active == i}" v-for="(item, i) in items" :key="i" @click="active = i; timeLine = 0" v-if="items.length > 1"/>
  </div>
</div>
<div v-else style="padding-top: 100px;" />
</template>
<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      active: 0,
      timeLine: 0,
      items: [{
          text: "<h2>Mi MIX 2</h2><h3>БЕЗРАМОЧНЫЙ СМАРТФОН</h3>",
          link: "/products/mi-mix-2",
          img: "/images/slide1.jpg"
        },
        {
          text: "<h2>Mi MIX 2</h2><h3>БЕЗРАМОЧНЫЙ СМАРТФОН</h3>",
          link: "/",
          img: "/images/slide2.jpg"
        },{
          text: "<h2>Mi MIX 2</h2><h3>БЕЗРАМОЧНЫЙ СМАРТФОН</h3>",
          link: "/",
          img: "/images/slide3.jpg"
        }
      ]
    }
  },
  methods: {
    Swipe(value) {
      if (value == 'R') {
        if (this.items.length - 1 == this.active)
          this.active = 0
        else
          this.active++;
        this.timeLine = 0;
      } else if (value == 'L') {
        if (this.active == 0)
          this.active = this.items.length - 1
        else
          this.active--;
        this.timeLine = 0
      }
    }
  },
  mounted() {
    // this.$refs.main_slider.disable('swipeup')
    // this.$refs.main_slider.disable('swipedown')
    setInterval(() => {
      this.timeLine++
        if (this.timeLine == this.speed) {
          if (this.items.length - 1 == this.active)
            this.active = 0
          else
            this.active++;
          this.timeLine = 0;
        }
    }, 1000)
  },
}
</script>