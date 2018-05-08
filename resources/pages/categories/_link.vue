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
      var id, items =[];
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
.NotResult {
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
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
    max-width: 1200px;
  flex-wrap: wrap-reverse;
  .search-result {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; // justify-content: space-evenly;
    .product {
      margin: 10px;
      text-align: center;
      text-decoration: none;
      max-width: 200px;
      max-height: 400px;
      color: @color-main_font;
      img {
        max-width: 200px;
        width: 100%;
        height: 50vh;
        min-height: 300px;
        max-height: 300px;
        object-fit: cover;
      }
      h3 {
        color: @color-dark;
        margin: 5px;
      }
    }
  }
}

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