<template>
<div class="item">
  <img :src="'/images/' + item.image" />
  <div class="description">
    <h3>{{item.title}}</h3>
    <span class="count">{{item.count}}</span>
    <span class="price">{{item.price}}</span>
  </div>
</div>
</template>

<script>
export default {
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