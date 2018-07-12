<template>
<div class="NotResult" v-if="category.products.length == 0 || !category.products">
    <h3>Ничего не найдено</h3>
    <SearchSunIcon />
</div>
<div class="result-wrapper" v-else>
    <div class="search-filters">
        <!-- <Filters /> -->
    </div>
    <div class="search-result">
        <nuxt-link :to="'/product/'+item.link" class="product" v-for="(item, i) in category.products" :key="i" :title="item.title">
            <img :src="'/images/products/'+item.thumbnail" :alt="item.title">
            <h3>{{item.title}}</h3>
            <span v-if="isPrice">от {{item.prices[0].price}} сом</span>
            <span v-else>ещё не установленна</span>
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
        let category = await app.$axios.$get(`/api/categories/` + params.link).then(({
            data
        }) => {
            return data
        }).catch(() => {
            return error({
                statusCode: 404,
                message: 'Not found'
            })
        })
        return {
            category
        }
    },
    head() {
        return {
            title: this.category.title + ' | Категория',
            meta: [{
                hid: 'og:title',
                property: 'og:title',
                content: this.category.title + ' | Категория | TERMINATOR.KG'
            }, {
                hid: 'description',
                property: 'description',
                content: this.category.meta_description + ' | TERMINATOR.KG'
            }, {
                hid: 'keywords',
                property: 'keywords',
                content: this.category.meta_keywords + ' | TERMINATOR.KG'
            }, {
                hid: 'og:description',
                property: 'og:description',
                content: this.category.meta_description + ' | TERMINATOR.KG'
            }, ]
        }
    },
    components: {
        SearchSunIcon,
        Filters
    },
    methods: {
        isPrices() {
            if (this.product.prices != false)
                return true
            return false
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
