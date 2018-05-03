
<template>
<div class="basket">
  <div class="panel">
    <div class="top">
      Корзина покупок
    </div>
    <div class="content">
      <Item v-for="(item, i) in items" :key="i" :item="item" />
    </div>
    <nuxt-link to="/basket/" class="link">
      Перейти в корзину
    </nuxt-link>
  </div>
</div>
</template>

<script>
import Item from './item'
export default {
  data() {
    return {
      items: [{
        id: 0,
        title: 'Redmi',
        count: 5,
        price: 12000,
        color: 0,
        image: 'hits.jpg'
      }, {
        id: 1,
        title: 'Redmi2',
        count: 2,
        price: 12000,
        color: 0,
        image: 'hits.jpg'
      }]
    }
  },
  methods: {},
  components: {
    Item
  }
}
</script>

<style lang="less">

</style>