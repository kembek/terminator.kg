<template>
  <div>
    <h1 class="cat-h1">Выберите категорию</h1>
  <Categories />
  </div>
</template>

<script>
import Categories from '~/components/main/Categories'
export default {
  head() {
    return {
      title: 'Другое',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'Другое | TERMINATOR.KG'
      }, ]
    }
  },
  data() {	
    return {}
  },
  methods: {},
  components: {
    Categories
  }
}
</script>

<style lang="less">
.cat-h1 {
  font-size: 18pt;
  text-align: center;
}
</style>