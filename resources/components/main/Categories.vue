<template>
<div class="main-categorie" @click="ShowNotify()">
  <nuxt-link :to="item.link" v-for="(item, index) in items" :key="index">
    <img :src="'/images/' + item.image" />
    <span>{{item.title}}</span>
  </nuxt-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        title: 'Аксессуары для смартфона',
        image: 'accessories.svg',
        link: '/'
      }, {
        title: 'Зарядные устройства',
        image: 'charging.svg',
        link: '/'
      }, {
        title: 'Умные часы и ремешки',
        image: 'watch.svg',
        link: '/'
      }, {
        title: 'Гаджеты и устройства',
        image: 'phone.svg',
        link: '/'
      }, {
        title: 'Товары для дома',
        image: 'home-device.svg',
        link: '/'
      }, {
        title: 'Наушники и калонки',
        image: 'headphone.svg',
        link: '/'
      }]
    }
  },
  methods: {
    ShowNotify() {
      this.showSuccessMsg()
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'Успешно',
      text: 'Операция была успешно выполнена'
    }
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.main-categorie {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-wrap: wrap;
    max-width: 120px;
    margin: 20px;
    img {
      margin-top: 5px;
      height: 100%;
      max-height: 100px;
    }
    span {
      padding-top: 20px;
      text-align: center;
      font-family: 'Segoe UI';
      color: @color-text;
      font-size: 13px;
      text-transform: uppercase;
      line-height: 15px;
    }
    &:hover {
      transform: scale(0.95);
      span {
        color: @color-main_font;
      }
    }
  }
}
</style>`