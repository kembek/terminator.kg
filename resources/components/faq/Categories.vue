<template>
  <div class="categories">
    <nuxt-link v-for="(item, key) in items" :to="item.link" :key="key">{{item.title}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>