
<template>
 <div class="basket" > <!-- @click="$root.$emit('basket', false)" -->
  <div class="panel">
    <div class="top">
      <p> Корзина покупок</p>
    </div>
    <div class="middle">
      <Item v-for="(item, i) in items" :key="i" :item="item" />
    </div>
    <div class="bottom">
      <span>Сумма: {{allPrice}} сом</span>
      <nuxt-link to="/basket/" class="link">
        Перейти в корзину
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import Item from "./item";
export default {
  data() {
    return {
      items: [{
          id: 0,
          title: "Xiaomi Redmi 4A 2GB+32GB",
          count: 5,
          price: 9025.25,
          color: 0,
         image: "image.jpg"
        },
        {
          id: 1,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "hits.jpg"
        },
        {
          id: 2,
          title: "Xiaomi Redmi 4A 2GB+16GB",
          count: 1,
          price: 10000.28,
          color: 0,
          image: "sos.jpg"
        },
        {
          id: 1,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "hits.jpg"
        },
        {
          id: 1,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "hits.jpg"
        },
        {
          id: 1,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "hits.jpg"
        }
      ]
    };
  },
  methods: {},
  computed: {
    allPrice() {
      var temp = 0;
      this.items.forEach(element => {
        temp += element.count * element.price;
      });
      return temp
    }
  },
  components: {
    Item
  }
};
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
.basket {
  position: fixed;
  z-index: 50000000;
  width: 100vw;
  height: 120vh;
  left: 0;
  right: 0;
  top: -60px;
  background-color: @color-bg-50;
  .panel {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: @color-main_font;
    width: 100%;
    height: 100vh;
    max-width: 500px;
    .top {
      font-size: 25px;
      background-color: @color-bg;
      height: 50px;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .middle {
    overflow-y: scroll;
      
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-bottom: 40px;
      .item {
        display: flex;
        margin: 5px;
        .description {
          margin: 0 5px;
          color: @color-bg;
          display: flex;
          width: 100%;
          flex-direction: column;
          h3,
          span {
            
            font-weight: bold;
            padding: 5px;
            letter-spacing: 1px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        img {
          width: 150px;
          height: 100px;
          object-fit: scale-down;
        }
      }
    }
    .bottom {
      font-weight: bold;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 25px;
      span {
        font-family: 'Titillium Web', sans-serif;
           background-color: white;
    color: #242323;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
      }
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-decoration: none;
        background: @color-dark;
        height: 40px;
        padding: 5px 0;
        font-size: 25px;
        color: @color-main_font;
      }
    }
  }
}
</style>
