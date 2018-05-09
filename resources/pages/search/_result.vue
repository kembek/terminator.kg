<template>
<div class="NotResult" v-if="items == 0">
  <h3>Ничего не найдено</h3>
  <SearchSunIcon />
</div>
<div class="result-wrapper" v-else>
  <div class="search-filters">
    <!-- <Filters /> -->
  </div>
  <div class="search-result">
    <nuxt-link :to="'/products/'+item.id" class="product" v-for="(item, i) in items" :key="i">
      <img :src="'/images/'+item.image" :alt="item.id">
      <h3>{{item.title}}</h3>
      <span>{{item.price}}</span>
    </nuxt-link>
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


// @media screen and (max-width: 1093px) {
//   .result-wrapper {
//     .search-result {
//       width: 65%;
//     }
//   }
// }

// @media screen and (max-width: 783px) {
//   .result-wrapper {
//     .search-result {
//       width: 60%;
//     }
//   }
// }

// @media screen and (max-width: 685px) {
//   .result-wrapper {
//     .search-result {
//       width: 45%;
//       justify-content: center;
//     }
//   }
// }

// @media screen and (max-width: 501px) {
//   .result-wrapper {
//     justify-content: center;
//     .search-result {
//       width: 90%
//     }
//   }
// }
</style>