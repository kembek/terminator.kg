<template>
<div class="main-blocks">
  <nuxt-link :to="'/categories/' + item.link" v-for="(item, i) in items" :key="i">
    <h2>{{item.title}}</h2>
    <img :src="'/images/categories/' + item.thumbnail" :alt="item.title">
  </nuxt-link>
</div>
</template>

<script>
export default {
    created() {
      return this.$axios.$get('/api/categories/block/').then((res) =>{
          this.items = res.data
      })
    },
    data() {
      return {
        items: []
      }
    }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.main-blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    text-decoration: none;
    h2 {
      padding-bottom: 20px;
      text-align: center;
      font-family: 'Segoe UI';
      color: @color-main_font;
      font-size: 24px;
      text-transform: uppercase;
    }
    img {
      width: 350px;
      height: 228px;
      border-radius: 5px;
      object-fit: cover;
      filter: grayscale(30%);
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
      h2 {
        color: @color-dark;
      }
    }
  }
}
</style>
