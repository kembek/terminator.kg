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
    <p class="t1">Моя корзина()</p>
    <div class="s">
      <p>Цена</p>
      <p>К-во</p>
      <p>Итого</p>
    </div>
  </div>
  <hr/>
  <!-- <ul v-for="(item,i) in items" :key="i">
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
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
      <basket /><p>Оформить заказ</P>
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    button {
      height: 40px;
      width: 45%;
      max-width: 200px;
      ;
      background: @color-dark;
      border: none;
      color: @color-main_font;
      user-select: none;
      padding: 0;
      svg {
        fill: @color-main_font;
        width: 29px;
        height: 12px;
      }
    }
    .back {
      width: 45%;
      max-width: 200px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      font-size: 1.1em;
      svg {
        height: 13px;
        width: 11px;
        transform: rotate(90deg);
        fill: @color-dark;
      }
      .nuxt-link-active {
        color: @color-dark;
        text-decoration: none;
        text-align: center;
      }
    }
  }
  .table {
    display: flex;
    justify-content: space-between;
    color: @color-text;
    font-size: 25px;
    margin-top: 5px;
    .t1 {
      width: 100%;
      max-width: 200px;
      font-size: 80%;
      // font-size: 75%;
    }
    .s {
      width: 0;
      height: 0;
      visibility: hidden;
      // display: flex;
      // justify-content: space-between;
      // width: 39%;
      // font-size: 25px;
      // p {
      //   text-align: end;
      //   // min-width: 40%;
      //   font-size: 65%;
      }
    }
  } 
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
      p {
        color: @color-main_font;
      }
      button {
        margin-top: 20px;
        height: 40px;
        width: 100%;
        background: @color-dark;
        border: none;
        color: @color-main_font;
        font-size: 15px;
        display: flex;
        justify-content: center;
        svg {
          fill: @color-main_font;
          width: 27px;
          height: 18px
        }
        p {

        }
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

@media screen and(max-width: 521px) {
  .div {
    .back_pay {
      height: 100%;
      button {
        visibility: hidden;
        width: 0%;
        height: 0px;
      }
      .back {
        width: 100%;
        max-width: 300px;
        font-size: 25px;
      }
    }
    .table {
      margin-top: 15px;
      .t1{
        width: 100%;
      }
    }
  }
}

@media screen and(max-width: 320px) {
  .div {
    .back_pay {
      .back {
        font-size: 20px;
      }
    }
  }
}
</style>