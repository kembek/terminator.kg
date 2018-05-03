<template>
<div class="item">
  <img :src="'/images/' + item.image" />
  <div class="description">
    <h3>{{item.title}}</h3>
    <span class="count">Количество: {{item.count}}</span>
    <span class="price">Цена: {{item.price}} сом</span>
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