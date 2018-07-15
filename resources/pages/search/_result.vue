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
    <nuxt-link :to="'/product/'+item.link" class="product" v-for="(item, i) in items" :key="i" :title="item.title">
      <img :src="'/images/products/'+item.thumbnail" :alt="item.title">
      <h3>{{item.title}}</h3>
      <!-- <span>от {{item.prices[0].price}} сом</span> -->
    </nuxt-link>
  </div>
</div>
</template>

<script>
import SearchSunIcon from "~/assets/svg/searchsun.svg";
import Filters from '~/components/filtres/'
export default {
  async asyncData({
        error,
        app,
        params
    }) {
        const products = await app.$axios
            .$get(`/api/products/`)
            .then(({
                data
            }) => {
                return data;
            })
            .catch(() => {
                return error({
                    statusCode: 404,
                    message: "Not found"
                });
            });
        return {
            products
        };
    },
  data() {
    return {
      search: this.$route.params.result
    }
  },
  components: {
    SearchSunIcon,
    Filters
  },
  methods: {
    async GetProducts() {
     return await this.$axios.$get('/api/products/').then(res => {
        return res.data.data
      }).catch(error => {})
    }
  },
  computed: {
    items() {
      return this.products.filter(item => {
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
