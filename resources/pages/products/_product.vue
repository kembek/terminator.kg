<template>
<div class="product-up" v-if="product != null">

  <div class="product-up-l">

    <div class="product-slider">

      <span class="arrow-up" @click="slideChange('down')"><Arrow /></span>

      <img v-for="(item, i) in 4" :key="i" :src="'/images/'+ images(i)" :alt="Slide(i)" @click="setSlide(Slide(i))" draggable="false">

      <span @click="slideChange('up')"><Arrow /></span>

    </div>

    <div class="product-img" :style="'background-image: url(\'/images/'+ image+'\')'">

    </div>

  </div>

  <div class="product-up-r">

    <h2>{{product.title}}</h2>

    <div class="p-text">

      <label>Цена</label>

      <span>{{product.prices[active].price}} сом</span>

    </div>

    <div class="p-text">

      <label>Количество</label>

      <div class="quality">

        <button @click="count--">-</button>

        <input type="number" min="1" v-model="count">

        <button @click="count++">+</button>

      </div>

    </div>

    <div class="p-text">

      <label>Цвет: {{product.prices[active].title}}</label>

      <div class="color">

        <span v-for="(item, i) in product.prices" :key="i" :style="'background-color: ' + item.color + ';'" @click="setColor(i)" :title="item.title" />

      </div>

    </div>

    <p>В зависимости от цвета стоимость может измениться</p>

    <div class="btns">
<!-- @click="$root.$emit('order', false) -->
      <button class="btn" @click="AddOrder()">Купить</button>

      <button class="btn" @click="AddOrder()">Добавить в корзину</button>

    </div>

  </div>

</div>
</template>
<script>
import Arrow from "~/assets/svg/arrow.svg";

export default {
  components: {
    Arrow
  },
  data() {
    return {
      page: 0,
      active: 0,
      img_id: 0,
      count: 1,
      product: this.$store.getters['Products/Item']
    };
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'Успешно',
      text: 'Товар добавлен'
    },
    showInfoMsg: {
      type: 'info',
      title: 'Внимание',
      text: 'Оформление заказа будет доступно в ближайшее время'
    }
  },
  methods: {
    AddOrder() {
      // this.$store.getters['Order/Items'].forEach(item => {
      //   if(item.product.id == this.product.id)
      //   this.$store.dispatch('Order/AddCount')
      // });
      this.showInfoMsg()
      // let temp = {
      //   count: this.count,
      //   product: this.product
      // }
      // this.$store.dispatch('Order/AddProduct', temp)
      // this.showSuccessMsg({
      //   text: 'Товар \"' + this.product.title + '\" добавлен в корзину!'
      // })
      // this.$root.$emit('basket', true)
    },
    setSlide(value) {
      this.img_id = value;
    },
    setColor(value) {
      this.active = value;
    },
    slideChange(value) {
      if (
        value === "up" &&
        this.page < this.product.prices[this.active].images.length - 4
      ) {
        this.page++;
      } else if (value === "down" && this.page > 0) {
        this.page--;
      }
    },
    Slide(value) {
      return value + this.page;
    },
    images(i) {
      return this.product.prices[this.active].images[this.Slide(i)];
    }
  },
  beforeCreate() {
    this.$store.dispatch('Products/SetActive', this.$route.params.product)
  },
  computed: {
    image() {
      return this.product.prices[this.active].images[this.img_id];
    }
  },
  watch: {
    count() {
      if (this.count < 1) this.count = 1;
    }
  }
};
</script>
<style lang="less">
@import "~assets/css/themes/default.less";
.product-up {
  display: flex;
  max-width: 1200px;
  justify-content: center;
  width: 100%;
  .product-up-l {
    display: flex;
    align-items: center;
    img {
      user-select: none;
      transition: all 0.5s linear;
      object-fit: scale-down;
      cursor: pointer; // animation: show-img;
    }
    .product-slider {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      svg {
        width: 30px;
        height: 32px;
        fill: white;
        cursor: pointer;
      }
      .arrow-up {
        transform: rotate(180deg);
      }
      img {
        width: 80px;
        height: 80px;
        margin: 6px;
      }
    }
    .product-img {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      max-height: 500px;
      max-width: 500px;
      height: 30vh;
      width: 100vw;
    }
  }
  .product-up-r {
    height: 250px;
    width: 100%;
    max-width: 320px;
    padding: 0 0 0 25px;
    .btns {
      height: 80px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn {
      height: 35px;
      width: 140px;
      border: 1px solid @color-main_font;
      background: rgb(39, 38, 38);
      color: @color-text;
      font: 20px;
      &:hover {
        border-color: @color-dark;
        cursor: pointer;
        color: @color-main_font;
      }
    }
    h2 {
      color: @color-dark;
      font-size: 21px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
    p {
      font-size: 11px;
      color: @color-light;
    }
    .p-text {
      display: flex;
      margin: 15px 0;
      .color {
        display: flex;
        flex-wrap: wrap;
        span {
          display: block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          background-color: red;
          border-radius: 50%;
        }
      }
      .quality {
        display: flex;
        input,
        button {
          outline: none;
          border: 1px solid @color-dark;
          background-color: transparent;
          color: @color-main_font;
        }
        input {
          width: 50px;
          text-align: center;
          border-left: 0;
          border-right: 0;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
        button {
          width: 20px;
          height: 25px;
          &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
      label {
        display: block;
        max-width: 180px;
        width: 100%;
        color: @color-text;
      }
    }
  }
}

@keyframes show-img {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and(max-width: 920px) {
  .product-up {
    flex-direction: column-reverse;
    align-items: center;
    .product-up-l {
      flex-direction: column-reverse;
      width: 100%;
      .product-slider {
        flex-direction: row;
        svg {
          transform: rotate(-90deg);
        }
      }
    }
  }
}

@media screen and(max-width: 340px) {
  .product-up {
    .product-up-r {
      .btn {
        width: 130px;
      }
    }
  }
}

@media screen and(max-width: 870px) {}
</style>


