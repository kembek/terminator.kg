<template>
  <Main />
</template>
<script>
import Main from '~/components/main/'

export default {
  head() {
    return {
      title: 'Главная',
      meta: [{
        hid: 'description',
        name: 'description',
        content: ''
      }]
    }
  },
  components: {
    Main
  }
}
</script>
