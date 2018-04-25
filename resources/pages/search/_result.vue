<template>
<div v-if="items == 0">
  Не найдено
</div>
<div class="result-wrapper" v-else>
  <div class="search-filters">
  </div>
  <div class="search-result">
    <div class="product" v-for="(item, i) in items" :key="i">
      <img :src="'/images/'+item.image" alt="">
      <h3>{{item.title}}</h3>
      <span>{{item.price}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      search: this.$route.params.result
    }
  },
  computed: {
    items() {
      return this.$store.getters["Products/Items"].filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
.result-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap-reverse;
  .search-result {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // justify-content: space-evenly;
    .product {
      margin: 10px;
      text-align: center;
      h3{
        color: @color-dark;
        margin: 5px;
      }
    }
  }
}
</style>