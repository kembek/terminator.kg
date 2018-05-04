<template>
<div class="div">
  <div class="back_pay">
    <div class="back">
      <nuxt-link to="/">
        <arrow /> Вернуться в магазин
      </nuxt-link>
    </div>
    <!-- <button>
      <basket />Оформить заказ
    </button> -->
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
  <div class="list">
    <li v-for="(item, i) in items" :key="i">
      <div class="l1">
        <div class="image"><img :src="items.image" /></div>
        <div class="title">{{item.title}}</div>
      </div>
      <div class="l2">
        <div class="price">
          <p>{{item.price}}</p>
        </div>
        <div class="count"><input type="text"></div>
        <div class="total">{{item.price}}</div>
      </div>
    </li>
  </div>
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
      <div class="button">
        <button>
      <basket /><p>Оформить заказ</P>
      </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import basket from '~/assets/svg/basket.svg'
import arrow from '~/assets/svg/arrow.svg'
import Basket from '~/components/basket/index'
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
          image: "image.jpg"
        },
        {
          id: 2,
          title: "Xiaomi Redmi 4A 2GB+16GB",
          count: 1,
          price: 10000.28,
          color: 0,
          image: "image.jpg"
        },
        {
          id: 3,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "image.jpg"
        },
        {
          id: 4,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "image.jpg"
        },
        {
          id: 5,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "image.jpg"
        },
        {
          id: 4,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "image.jpg"
        },
        {
          id: 4,
          title: "Xiaomi Mi A1 4GB+32GB",
          count: 4,
          price: 11520,
          color: 0,
          image: "image.jpg"
        }
      ]
    };
  },
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
    align-items: center; // button {
    //   height: 40px;
    //   width: 45%;
    //   max-width: 200px;
    //   ;
    //   background: @color-dark;
    //   border: none;
    //   color: @color-main_font;
    //   user-select: none;
    //   padding: 0;
    //   svg {
    //     fill: @color-main_font;
    //     width: 29px;
    //     height: 12px;
    //   }
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
  margin: 10px 0;
  .t1 {
    width: 100%;
    max-width: 200px;
    font-size: 80%; // font-size: 75%;
  }
  .s {
    // width: 0;
    // height: 0;
    // visibility: hidden;
    display: flex;
    justify-content: space-between;
    width: 39%;
    font-size: 25px;
    p {
      text-align: end; // min-width: 40%;
      font-size: 65%;
    }
  }
}

.list {
  li {
    display: flex;
    justify-content: space-between;
    l1{
    display: flex;   
    }
    .image {
      border: solid 2px;
      width: 100px;
      height: 100px;
    }
    .l2 {
      display: flex;
    justify-content: flex-end;   
    .count {
      margin-left: 113px;
      input {
        width: 64px;
      }
      
    }
    .total {
        margin-left: 119px;
      }
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
    .button {
      margin: 20px 0 0 300px;
      display: flex;
      justify-content: flex-end;
      button {
        height: 40px;
        width: 30%;
        background: @color-dark;
        border: none;
        color: @color-main_font;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg {
        fill: @color-main_font;
        width: 27px;
        height: 18px
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
        margin: 0;
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
    width: 75%;
    .back_pay {
      height: 100%; // button {
      //   visibility: hidden;
      //   width: 0%;
      //   height: 0px;
      // }
      .back {
        width: 100%;
        max-width: 300px;
        font-size: 25px;
      }
    }
    .table {
      margin-top: 15px;
      .t1 {
        width: 100%;
      }
      .s {
        visibility: hidden;
        width: 0%;
        height: 0px;
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