<template>
<transition name="popup">

    <div class="form" v-if="isShow">
    
        <form @submit.prevent="SendOrder()">
    
            <p>
    
                <h2>Оформить заказ</h2>
    
            </p>
    
            <p>Ф.И.О <br><input type="text"></p>
    
            <p>Телефон <br><input type="text"></p>
    
            <p>Сообщение <br><input type="text"></p>
    
            <div class="btns">
    
                <button>Отправить</button>
    
                <button @click="$root.$emit('order', false)">Отмена</button>
    
            </div>
    
        </form>
    
    </div>

</transition></template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    SendOrder() {}
  },
  created() {
    this.$root.$on("order", value => {
      this.isShow = value;
    });
  }
};
</script>

<style lang="less">
.form {
  position: fixed;

  top: 0;

  left: 0;

  width: 100vw;

  height: 100vh;

  display: flex;

  justify-content: center;

  z-index: 6000000000000;

  align-items: center;

  background-color: rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 20px;

    margin-bottom: 10px;

    text-align: center;

    color: #0b8793;
  }

  form {
    border: 1px solid #0b8793;

    padding: 20px;

    background: #35333352;
  }

  p {
    color: #0b8793;
  }

  input {
    height: 40px;

    width: 400px;

    margin-bottom: 10px;

    background-color: #35333352;

    border: none;

    font-size: 20px;

    color: #0b8793;
  }

  button {
    height: 40px;

    width: 140px;

    background-color: #35333352;

    border: none;

    color: silver;

    &:hover {
      color: #0b8793;

      cursor: pointer;
    }
  }

  .btns {
    height: 60px;

    width: 400px;

    display: flex;

    justify-content: space-around;

    align-items: center;
  }
}
@media screen and(max-width: 465px){
    .form{
        form{
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        }
        .btns{
            max-width: 400px;
            max-height: 60px;
            width: 100%;
        }
    }
}
@media screen and(max-width: 330px){
    .form{
        .btns{
            flex-direction: column;
            justify-content: space-between;
        }
    }
}
</style>
