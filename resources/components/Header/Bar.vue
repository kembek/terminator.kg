<template>
<div class="bar">
  <nuxt-link to='/search/'>
    <Search />
  </nuxt-link>
  <nuxt-link to='/basket/'>
    <Basket />
  </nuxt-link>
</div>
</template>

<script>
import Search from '~/assets/svg/search.svg'
import Basket from '~/assets/svg/basket.svg'
export default {
  data() {
    return {}
  },
  components: {
    Search,
    Basket
  },
  methods: {}
}
</script>

<style lang="less">

</style>