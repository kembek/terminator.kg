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
    <nuxt-link :to="'/products/'+item.id" class="product" v-for="(item, i) in items" :key="i" :title="item.title">
      <img :src="'/images/'+item.image" :alt="item.title">
      <h3>{{item.title}}</h3>
      <span>от {{item.price}} сом</span>
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
      search: this.$route.params.result,
      categories: '',
      description: ''
    }
  },
  head() {
    return {
      title: this.categories,
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: this.categories + ' | TERMINATOR.KG'
      },{
        hid: 'description',
        property: 'description',
        content: this.description + ' | TERMINATOR.KG'
      },{
        hid: 'og:description',
        property: 'og:description',
        content: this.description + ' | TERMINATOR.KG'
      }, ]
    }
  },
  components: {
    SearchSunIcon,
    Filters
  },
  created() {
    this.$store.getters["Categories/ItemsAll"].forEach(item => {
      if (item.link == this.$route.params.link) {
        this.categories = item.meta_title
        this.description = item.description
        return
      }
    })
  },
  computed: {
    items() {
      var id, items = [];
      this.$store.getters["Categories/ItemsAll"].forEach(item => {
        if (item.link == this.$route.params.link) {
          id = item.id
          return
        }
      })

      this.$store.getters["Products/Items"].forEach(item => {
        return item.groups.forEach(element => {
          if (element == id)
            items.push(item)
        });
      })
      return items
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