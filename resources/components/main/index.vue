<template>
  <div class="page">
    <Categories />
    <Blocks />
    <!-- <Reviews /> -->
    <!-- <Blog /> -->
  </div>
</template>

<script>
import Categories from './Categories'
import Blocks from './Blocks'
import Reviews from './Reviews'
import Blog from './Blog'

export default {
  data() {	
    return {}
  },
  methods: {},
  components: {
    Categories,
    Blocks,
    Reviews,
    Blog
  }
}
</script>