<template>
<div class="item">
  <img :src="'/images/' + item.product.image" />
  <div class="description">
    <h3>{{item.product.title}}</h3>
    <span class="count">Количество: {{item.count}}</span>
    <span class="price">Цена: {{item.product.price}} сом</span>
  </div>
  <span class="close"><Close /></span>
</div>
</template>

<script>
import Close from '~/assets/svg/close.svg'

export default {
  components: {
    Close
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {}
}
</script>