<template>
<div class="page">
  <div class="search-wrapper">
    <div class="search-input">
      <SearchIcon />
      <input type="text" placeholder="Например: Redmi" v-model="search">
    </div>
    <ul v-if="search.length > 0">
      <li v-for="(item, i) in items" :key="i">
        <nuxt-link :to="'/products/' + item.id">
        {{item.title}}</nuxt-link>
      </li>
    </ul>
    <div class="Sun">
      <SearchSunIcon />
      <h2>Для того чтобы начать поиск введите ваш запрос</h2>
    </div>
  </div>
</div>
</template>

<script>
import SearchIcon from '~/assets/svg/search.svg';
import SearchSunIcon from '~/assets/svg/searchsun.svg';
export default {
  components: {
    SearchIcon,
    SearchSunIcon
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    items() {
      return this.$store.getters['Products/Items'].filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.search-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search-input {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    width: 90vw;
    svg {
      fill: @color-dark;
      height: 40px;
      width: 40px;
      margin-left: 20px;
      position: absolute;
    }
    input {
      max-width: 1200px;
      width: 100%;
      height: 60px;
      padding-left: 80px;
      font-size: 20px;
      background: transparent;
      outline: none;
      border: 2px solid @color-dark;
      color: @color-text;
    }
  }
  .Sun {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 80vw;
      max-width: 380px; // height: 400px;
      fill: @color-light;
      margin: 20px;
    }
    h2 {
      margin: 20px;
      color: @color-dark;
      width: 80vw;
      max-width: 322px;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>