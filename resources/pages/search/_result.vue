<template>
<div class="NotResult" v-if="items == 0">
  <h3>Ничего не найдено</h3>
  <SearchSunIcon />
</div>
<div class="result-wrapper" v-else>
  <div class="search-filters">
    <Filters />
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
import SearchSunIcon from "~/assets/svg/searchsun.svg";
import Filters from '~/components/filtres/'
export default {
  data() {
    return {
      search: this.$route.params.result
    }
  },
  components: {
    SearchSunIcon,
    Filters
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
.NotResult {
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
        margin-top: 10px;
        font-size: 24px;
        color: @color-text;
  }
  svg {
    max-height: 55vh;
    -webkit-transition: none;
    transition: none;
    width: 80vw;
    max-width: 380px;
    fill: #5FA09B;
    margin: 20px;
  }
}

.result-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap-reverse;
  .search-result {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; // justify-content: space-evenly;
    .product {
      margin: 10px;
      text-align: center;
      h3 {
        color: @color-dark;
        margin: 5px;
      }
    }
  }
}
</style>