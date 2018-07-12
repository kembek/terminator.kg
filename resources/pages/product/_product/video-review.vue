<template>
	<div class="tabs-content-item" v-html="product.video" />
</template>

<script>
export default {
  props: {
    product: {}
  }
}
</script>
