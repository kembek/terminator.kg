<template>
  <div class="container">
    <MyHeader />
    <nuxt  class="content"/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '~/components/Header'
import MyFooter from '~/components/Footer'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
