<template>
<div class="div">
  <div class="back_pay">
    <div class="back">
      <nuxt-link to="/">
        <arrow /> Вернуться в магазин
      </nuxt-link>
    </div>
    <button>
      <basket />Оформить заказ
    </button>
  </div>
  <div class="table">
    <p>Моя корзина()</p>
    <div class="s">
      <p>Цена</p>
      <p>К-во</p>
      <p>Итого</p>
    </div>
  </div>
  <hr/>
  <ul v-for="(item,i) in items" :key="i">
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <!-- <Items /> -->
  <hr>
  <div class="price">
    <div class="cost">
      <div class="sum">
        <p>Сумма</p>
        <p>111</p>
      </div>
      <div class="send">
        <p>Доставка</p>
        <p>222</p>
      </div>
      <div class="country">
        <button>Страна</button>
      </div>
      <div class="err">
      </div>
      <hr>
      <div class="total">
        <p>Итого</p>
        <p>333</p>
      </div>
      <button>
      <basket />Оформить заказ
    </button>
    </div>
  </div>
</div>
</template>
<script>
import basket from '~/assets/svg/basket.svg'
import arrow from '~/assets/svg/arrow.svg'
import Basket from '~/components/basket/index.vue'
export default {
  props: {
    items: {
      type: Array
    }
  },
  items: [{
      type: "first",
      isStatus: true,
      title: "Использовать купон",
    },
    {
      type: "second",
      title: "Добавить сообщение менеджеру",
      isStatus: false,
    }
  ],
  components: {
    arrow,
    basket,
    Basket
  }
}
</script>
<style lang="less">
@import '~assets/css/themes/default.less';
.div {
  width: 75%;
  .back_pay {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    button {
      height: 40px;
      width: 290px;
      background: @color-dark;
      border: none;
      color: @color-main_font;
      user-select: none;
      svg {
        fill: @color-main_font;
        width: 29px;
        height: 12px;
      }
    }
    .back {
      display: flex;
      flex-direction: row;
      text-align: center;
      svg {
        height: 13px;
        width: 13px;
        transform: rotate(90deg);
        fill: @color-dark;
      }
      .nuxt-link-active {
        color: @color-dark;
        text-decoration: none;
      }
    }
  }
  .table {
    align-items: center;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: flex-between;
    color: @color-text;
    p {
      font-size: 15 px;
    }
    .s {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 15px;
      
      p {
        font-size: 15 px;
        right: 2px;
      }
    }
  } // .dropdown {
  //   user-select: none;
  //   border-style: solid;
  //   border-color: @color-dark;
  //   border-width: 1px;
  //   border-radius: 5px;
  //   margin-top: 18px;
  //   margin-bottom: 20px;
  //   .top {
  //     background-color: @color-dark;
  //     max-width: 100%;
  //     width: 250px;
  //     padding: 10px;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     svg {
  //       fill: @color-main_font;
  //       width: 25px;
  //       height: 25px;
  //     }
  //     .active {
  //       transform: rotate(180deg);
  //     }
  //   }
  // }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .something {
      width: 450px;
      height: 300px;
      border: solid 1px
    }
    .cost {
      width: 100%;
      height: 300px;
      button {
        svg {
          fill: @color-main_font;
          width: 27px;
          height: 18px
        }
        margin-top: 20px;
        height: 40px;
        width: 100%;
        background: @color-dark;
        border: none;
        color: @color-main_font;
      }
      .sum {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .send {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .country {
        button {
          margin-top: 0;
          width: auto;
          border: none;
          background: @color-bg;
          color: @color-main_font;
          text-decoration: underline;
          font-size: 15px;
          padding: 8px 0;
          user-select: none;
          border: none;
          &:hover {
            user-select: none;
          }
          &:active {
            border: none;
            user-select: none;
          }
        }
      }
      .err {}
      .total {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 20px;
      }
    }
  }
}
</style>