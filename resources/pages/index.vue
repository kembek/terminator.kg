<template>
<Main />
</template>
<script>
import Main from '~/components/main/'

export default {
  fetch ({ store, params }) {
    return axios.get('')
    .then((res) => {
      store.commit('setStars', res.data)
    })
  },
  components: {
    Main
  }
}
</script>
