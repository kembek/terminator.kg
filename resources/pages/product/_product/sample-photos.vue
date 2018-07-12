<template>
	<div class="tabs-content-item" v-html="product.photos" />
</template>

<script>
export default {
  props: {
    product: {}
  }
}
</script>
