
<template>
<div class="basket-module">
  <transition name="right">
    <div class="panel" v-if="isShowBasket">
      <div class="top">
        <span @click="$root.$emit('basket', false)"><Arow /></span>
        <p> Корзина покупок</p>
      </div>
      <div class="middle">
        <Item v-for="(item, i) in items" :key="i" :item="item" />
      </div>
      <div class="bottom" @click="$root.$emit('basket', false)">
        <nuxt-link to="/basket/" class="link">
          <span>Сумма: {{allPrice}} сом</span>
          <span>Перейти в корзину</span>
        </nuxt-link>
      </div>
    </div>
  </transition>
  <transition name="page">
    <div class="basket" @click="$root.$emit('basket', false)" v-if="isShowBasket" />
  </transition>
</div>
</template>

<script>
import Item from "./item";
import Arow from '~/assets/svg/arrow.svg'
export default {
  data() {
    return {
      isShowBasket: false,
      items: this.$store.getters['Order/Items']
    };
  },
  methods: {},
  created() {
    this.$root.$on('basket', (value) => {
      this.isShowBasket = value
    })
  },
  computed: {
    allPrice() {
      var temp = 0;
      this.items.forEach(element => {
        temp += element.count * element.product.price;
      });
      return temp
    }
  },
  components: {
    Item,
    Arow
  }
};
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
.basket-module {
  user-select: none;
  .basket {
    position: fixed;
    z-index: 50000000;
    width: 100vw;
    height: 120vh;
    left: 0;
    right: 0;
    top: -60px;
    background-color: @color-bg-50;
  }
  .panel {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 50000001;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: @color-main_font;
    width: 100%;
    height: 100%;
    max-width: 500px;
    &.right-leave-active.right-leave-to {
      .top {
        span {
          animation: close-basket-arraw .7s;
        }
      }
    }
    .top {
      font-size: 25px;
      background-color: @color-bg;
      height: 50px;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        position: absolute;
        left: 15px;
        height: 20px;
        width: 20px;
        fill: white;
        cursor: pointer;
        transform: rotate(270deg);
        animation: open-basket-arraw .7s;
      }
      p {
        text-align: center;
      }
    }
    .middle {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 100%;
      flex-direction: column;
      height: 100%;
      .item {
        display: flex;
        margin: 10px 5px -7px 0;
        border-top: 1px solid black;
        align-items: center;
        &:last-child {
          border-bottom: 1px solid black;
              margin-bottom: 4px;
        }
        .close {
          height: 30px;
          width: 30px;
          position: relative;
          right: 10px;
        }
        .description {
          margin-bottom: 100px;
          color: @color-bg;
          margin: 0 5px;
          display: flex;
          width: 100%;
          flex-direction: column;
          h3,
          span {
            // overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
            font-family: 'Montserrat', sans-serif;
            max-width: 300px;
            width: 90%;
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
      // position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;
      span {
        background: @color-bg;
        color: @color-main_font;
        display: flex;
        padding: 5px 0;
        padding-top: 10px;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-decoration: none;
        padding: 5px 0;
        background: @color-bg;
        span {
          background: @color-bg;
          height: 20px;
          padding: 5px 0;
          font-size: 20px;
          color: @color-main_font;
        }
      }
    }
  }
}

@keyframes open-basket-arraw {
  0% {
    opacity: 0;
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes close-basket-arraw {
  0% {
    transform: rotate(270deg);
  }
  100% {
    opacity: 0;
    transform: rotate(90deg);
  }
}

@media screen and (max-width: 414px) {
  .basket-module {
    .basket {}
    .panel {
      &.right-leave-active.right-leave-to {
        .top {
          span {}
        }
      }
      .top {
        width: 100%;
        span {}
      }
      .middle {
        .item {
          .close {}
          .description {
            h3,
            span {
              white-space: normal;
            }
          }
          img {}
        }
      }
      .bottom {
        span {}
        .link {
          span {}
        }
      }
    }
  }
}
</style>
