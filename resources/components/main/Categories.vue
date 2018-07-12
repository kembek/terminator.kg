<template>
  <div class="main-categorie">
    <nuxt-link :to="'/categories/'+item.link + '/'" v-for="(item, index) in items" :key="index" v-if="item.is_status">
      <img :src="'/images/categories/' + item.thumbnail" />
      <span>{{item.title}}</span>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    created() {
      this.getCategories()
    },
    methods: {
      getCategories() {
        return this.$axios.$get(`/api/categories/`).then(res => {
          this.items = res.data
        })
        .catch(error => {});
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
</style>
