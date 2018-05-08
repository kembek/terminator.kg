<template>
<div class="div" v-if="items != null">
  <div class="back_pay">
    <div class="back">
      <nuxt-link to="/">
        <arrow /> Вернуться в магазин
      </nuxt-link>
    </div>
  </div>
  <div class="t-list">
    <!-- <div class="tt"> -->
    <p class="t1">Моя корзина({{items.length}})</p>
    <div class="table">
      <div class="s">
        <p>Цена</p>
        <p>Кол-во</p>
        <p>Сумма</p>
      </div>
    </div>
    <!-- </div> -->
    <hr/>
    <div class="list">
      <li v-for="(item, i) in items" :key="i">
        <div class="l1">
          <!-- <div class="image"> -->
          <img :src="'/images/' + item.product.image" />
          <!--исправить-->
          <!-- </div> -->
          <div class="title">{{item.product.title}}</div>
        </div>
        <div class="l2">
          <!-- <div class="price"> -->
          <div class="hid">
            <p id="a">Цена:</p>
            <p>К-во:</p>
            <p>Сумма:</p>
          </div>
          <div class="nums">
            <p>{{item.product.price}}</p>
            <div class="count">
              <input v-model="item.count" type="number" min="0">
            </div>
            <div class="total">
              <p>{{item.product.price * item.count}}</p>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </li>
    </div>
  </div>
  <hr>
  <div class="price">
    <div class="cost">
      <!-- Исправить -->
      <!-- <div class="sum">
        <p>Сумма</p>
        <p>{{sum}}</p>
      </div>
      <div class="send">
        <p>Доставка <input type="checkbox" v-model="isSend"></p>
        <p>{{send}}</p>
      </div>
      <div class="country">
        <button>Страна</button>
      </div>
      <div class="err">
      </div>
      <hr> -->
      <div class="total">
        <p>Итого</p>
        <p>{{allSun}}</p>
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
      send: 100,
      isSend: false,
      items: this.$store.getters['Order/Items']
    };
  },
  computed: {
    sum() {
      var a = 0;
      this.items.forEach(item => {
        a += item.product.price * item.count
      });
      return a;
    },
    allSun() {
      if (this.isSend)
        return this.sum + this.send
      return this.sum
    }
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
  hr {
    border: none;
    background-color: @color-light;
    /* Цвет линии для браузера Firefox и Opera */
    height: 1px;
  }
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
  .t-list {
    .t1 {
      // width: 100%;
      max-width: 155px;
      font-size: 20px;
      color: @color-main_font;
      float: left;
    }
    .table {
      height: 20px; // width: 843px;      // max-width: 865px;
      display: flex;
      justify-content: flex-end;
      color: @color-text;
      font-size: 25px;
      margin: 10px 0;
      .s {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        font-size: 25px;
        p {
          width: 120px; // max-width: 150px;
          text-align: end; // min-width: 40%;
          font-size: 65%;
        }
      }
    }
    .list {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .l1 {
          display: flex;
          align-items: center;
          .title {
            margin-left: 10px;
            width: 100%;
            max-width: 250px;
          }
          img {
            width: 150px;
            height: 100px;
            object-fit: scale-down;
          }
        }
        .l2 {
          width: 50%;
          max-width: 560px;
          justify-content: space-between;
          display: flex;
          .hid {
            visibility: hidden;
            width: 0%;
            height: 0%;
          }
          .nums {
            display: flex;
            justify-content: flex-end; // width: 60%;
            // max-width: 412px;
            div {
              // position: relative;
              width: 120px; // max-width: 170px;
              display: flex;
              justify-content: flex-end;
            }
            .count {
              input[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
              input {
                // width: 100%;
                text-align: center;
                max-width: 50px;
                height: 20px;
                border: solid 1px;
                border-color: @color-light;
                background-color: @color-bg;
                color: @color-main_font
              }
            }
            .total {}
          }
        }
      }
    }
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .cost {
      width: 100%;
      height: 300px;
      p {
        color: @color-main_font;
      }
      .button {
        margin: 20px 0;
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
}

@media screen and(max-width: 810px) {
  .div {
    width: 85%;
    .back_pay {
      // height: 100%;
      .back {
        width: 100%;
        max-width: 300px;
        font-size: 25px;
      }
    }
    .t-list {
      display: flex;
      flex-wrap: wrap;
      hr {
        margin: 0 0 5px 0;
        border: none;
        background-color: @color-light;
        height: 1px;
        width: 100%;
      }
      .t1 {
        margin-top: 10px;
        width: 100%;
        height: 10%;
      }
      .table {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        visibility: hidden;
        width: 0%; // height: 0%;
        p {
          visibility: hidden;
          width: 0%;
          height: 0%;
        }
        .s {
          width: 0%;
          height: 0%;
        }
      }
      .list {
        width: 1000px;
        li {
          flex-direction: column;
          .l1 {
            width: 100%;
          }
          .l2 {
            width: 100%;
            flex-direction: column;
            .hid {
              visibility: visible;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-bottom: 5px;
              width: 100%;
              p {
                // margin-left: 50px;
                justify-content: flex-end;
                display: flex;
                width: 100%;
                max-width: 60px;
              }
              #a {
                // margin-right: 22px;
              }
            }
            .nums {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              div {
                width: 100%;
                max-width: 60px;
                display: flex;
                justify-content: flex-end;
              }
              p {
                justify-content: flex-end;
                display: flex;
                width: 100%;
                max-width: 60px;
              }
            }
          }
        }
      }
    }
    .price {
      .cost {
        .button {
          margin: 15px 0;
          button {
            height: 40px;
            width: 500px;
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