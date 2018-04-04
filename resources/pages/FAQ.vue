<template>
<div class="FAQ-Wrapper">
  <Search />
</div>
</template>

<script>
import Search from '~/components/FAQ/FAQ-Search'
export default {
  components:{
    Search
  }
}
</script>
<style lang="less">
.FAQ-Wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
