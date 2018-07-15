<template>
<div class="NotResult" v-if="category.products.length == 0 || !category.products">
    <h3>Ничего не найдено</h3>
    <SearchSunIcon />
</div>
<div class="result-wrapper" v-else>
    <div class="search-filters">
        <!-- <Filters /> -->
    </div>
    <div class="search-result" style="width: 100%;">
        <nuxt-link v-scroll-to="'#Top'" :to="'/product/'+item.link" class="product" v-for="(item, i) in category.products" :key="i" :title="item.title">
            <img :src="'/images/products/'+item.thumbnail" :alt="item.title">
            <h3>{{item.title}}</h3>
            <span v-if="isPrice(item)">от {{item.prices[0].price}} сом</span>
            <span v-else>ещё не установлена</span>
        </nuxt-link>
    </div>
    <PulseLoader v-if="isLoade" />
    <GetLoader v-else-if="!isLoade && !isLoadError && !isLoadAll" @update="Get" />
    <ErrorLoader v-else-if="isLoadError" @update="Get" />
</div>
</template>

<script>
import SearchSunIcon from "~/assets/svg/searchsun.svg";
import Filters from "~/components/filtres/";

import PulseLoader from "~/components/Loader/Pulse.vue";
import GetLoader from "~/components/Loader/Get.vue";
import ErrorLoader from "~/components/Loader/Error.vue";

export default {
  async asyncData({ error, app, params }) {
    let category = await app.$axios
      .$get(`/api/categories/${params.link}?page=0`)
      .then(({ data }) => {

        return data;
      })
      .catch(e => {
        return error({
          statusCode: 404,
          message: "Not found"
        });
      });
    return {
      category
    };
  },
  data() {
    return {
      isLoade: false,
      isLoadError: false,
      isLoadAll: false,
      page: 1
    };
  },
  head() {
    return {
      title: this.category.title + " | Категория",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.category.title + " | Категория | TERMINATOR.KG"
        },
        {
          hid: "description",
          property: "description",
          content: this.category.meta_description + " | TERMINATOR.KG"
        },
        {
          hid: "keywords",
          property: "keywords",
          content: this.category.meta_keywords + " | TERMINATOR.KG"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.category.meta_description + " | TERMINATOR.KG"
        }
      ]
    };
  },
  components: {
    SearchSunIcon,
    Filters,
    PulseLoader,
    ErrorLoader,
    GetLoader
  },
  mounted() {
    if (this.category.products.length < 9) this.isLoadAll = true;
  },
  methods: {
    isPrice(product) {
      try {
        if (product.prices != false && product.prices.length > 0) return true;
      } catch (e) {
        return false;
      }
    },
    async Get() {
      this.isLoadError = false;
      this.isLoade = true;
      await this.$axios
        .$get(`/api/categories/${this.$route.params.link}?page=` + this.page)
        .then(({ data }) => {
          this.category.products = this.category.products.concat(data.products);
          if (data.products.length > 0) this.page++;
          else this.isLoadAll = true;
          this.isLoade = false;
        })
        .catch(e => {
          this.isLoadError = true;
          this.isLoade = false;
        });
    }
  }
};
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
@media screen and (max-width: 1093px) {
  .result-wrapper {
    .search-result {
      width: 65%;
    }
  }
}

@media screen and (max-width: 783px) {
  .result-wrapper {
    .search-result {
      width: 60%;
    }
  }
}

@media screen and (max-width: 685px) {
  .result-wrapper {
    .search-result {
      width: 45%;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 501px) {
  .result-wrapper {
    justify-content: center;
    .search-result {
      width: 90%;
    }
  }
}
</style>
