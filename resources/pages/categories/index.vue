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
      title: 'Другие',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'Другие | TERMINATOR.KG'
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
