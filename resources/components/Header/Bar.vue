<template>
<div class="bar">
  <nuxt-link to='/search/'>
    <Search />
  </nuxt-link>
  <a @click="$root.$emit('basket', true)">
    <Basket />
  </a>
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