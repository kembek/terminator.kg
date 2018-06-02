<template>
<div class="main-blocks">
  <nuxt-link to="/categories/hits/">
    <h2>Хиты продаж</h2>
    <img src="/images/hits.jpg" alt="Хиты продаж">
  </nuxt-link>
  <nuxt-link to="/categories/recomendation/">
    <h2>Рекомендуем</h2>
    <img src="/images/recomendation.jpg" alt="Рекомдуем">
  </nuxt-link>
  <nuxt-link to="/categories/new/">
    <h2>Новинки</h2>
    <img src="/images/new.jpg" alt="Новинки">
  </nuxt-link>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}

}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.main-blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    text-decoration: none;
    h2 {
      padding-bottom: 20px;
      text-align: center;
      font-family: 'Segoe UI';
      color: @color-main_font;
      font-size: 24px;
      text-transform: uppercase;
    }
    img {
      width: 350px;
      height: 228px;
      border-radius: 5px;
      object-fit: cover;
      filter: grayscale(30%);
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
      h2 {
        color: @color-dark;
      }
    }
  }
}
</style>