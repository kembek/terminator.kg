<template>
<div class="page">
  <div class="search-wrapper">
    <div class="search-input">
      <SearchIcon />
      <input type="search" placeholder="Например: Redmi" v-model="search">
    </div>
    <div class="live-search">
      <ul v-if="search && items.length != 0">
        <li v-for="(item, i) in items" :key="i">
          <nuxt-link :to="'/products/' + item.id">
            {{item.title}}</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</div>
</template>

<script>
import SearchIcon from "~/assets/svg/search.svg";
import SearchSunIcon from "~/assets/svg/searchsun.svg";
export default {
  components: {
    SearchIcon,
    SearchSunIcon
  },
  data() {
    return {
      search: this.$route.params.result,
    }
  },
  computed: {
    items() {
      return this.$store.getters["Products/Items"].filter(item => {
        return item.title.trim().toLowerCase().includes(this.search.toLowerCase());
      })
    }
  },
  methods: {
    Search() {
      return this.$router.push('/search/' + this.search);
    }
  },
  watch: {
    search() {
      setTimeout(() => {
        return this.$router.push('/search/' + this.search)
      }, 500)
    }
  },
  head() {
    return {
      title: 'Поиск',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'Поиск | TERMINATOR.KG'
      }, ]
    }
  }
};
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
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
      fill: @color-main_font;
      height: 25px;
      width: 25px;
      margin-left: 15px;
      position: absolute;
    }
    input {
      max-width: 1200px;
      width: 100%;
      height: 50px;
      padding-left: 80px;
      font-size: 20px;
      background: transparent;
      outline: none;
      border: 2px solid @color-text;
      color: @color-text;
      border-radius: 5px;
    }
  }
  .live-search {
    width: 100%;
    ul {
      border: 1px solid @color-dark;
      border-radius: 4px;
      background-color: @color-bg;
      padding: 10px; // position: absolute;
      // width: 90vw;
      // max-width: 1200px;
      // padding: 10px 0;
      li {
        margin: 10px 0;
        a {
          width: 100%;
          display: block;
          text-decoration: none;
          color: @color-text;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
  .Sun {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      max-height: 250px;
      transition: none;
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

@media screen and (max-width: 772px) {
  .search-wrapper {
    .search-input {
      input {
        font-size: 15px;
        padding-left: 50px;
      }
    }
  }
}
</style>