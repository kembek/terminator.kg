<template>
<div class="news--component">
  <h2 class="news--title">Новости</h2>
  <div class="news--module" v-for="(item, index) in items" :key="index">
    <nuxt-link :to="'/blog/' + item.id" class="news--item">
      <img src="/images/slider/slide1.jpg" class="news--image">
      <span class="news--content-title">{{item.message}}</span>
    </nuxt-link>
  </div>
  <div class="load-container">
    <button class="load-more">
   Идитфыв
  </button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      items: [
       {
         id: 0,
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: 1,
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '2',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '3',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '4',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '5',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '6',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '7',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '8',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },{
         id: '9',
         message: 'Фывоаыо ыварыловары ываоыоа qweqwe asklfjk'
       },
      ]
    }
  }
}
</script>


<style lang="less">
@import '~assets/css/themes/default.less';
@color-main : #569d87;
@color-main-active : #ff6600;
.news--module,
.news--module * {
  transition: all 0.5s;
}

.news--module .news--content * {
  transition: all 0s;
}

.news--component {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 20px 0;
  .load-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .load-more {
      cursor: pointer;
      margin: 30px 5px;
      padding: 20px 5px;
      width: 300px;
      background-color: @color-main;
      color: white;
      text-transform: uppercase;
      border: none;
    }
    p {
      margin: 30px 5px;
      padding: 10px 5px;
      color: #757575;
    }
  }
  .news--title {
    margin-left: 5%;
    width: 100%;
    color: @color-dark;
    font-size: 30px;
    font-weight: 200;
    text-transform: uppercase;
  }
  .news--module {
    width: 100%;
    max-width: 450px;
    margin: 25px 25px 0 25px;
    background-color: white;
    animation: begin-block .8s ease-in-out;
    .news--item {
      width: 100%;
      text-decoration: none; // border: solid 1px @color-main;
      display: flex;
      flex-direction: column;
      height: 270px;
      overflow: hidden;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      .news--image {
        height: 100%;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
      }
      .news--content-title {
        padding: 10px;
        color: @color-dark;
        font-size: 18px;
        font-weight: 200;
        max-height: 40px;
        line-height: 24px;
        letter-spacing: 1px;
        overflow: hidden;
      }
    }
    &:hover {
      transform: scale(1.05, 1.05);
    }
  }
}

@media screen and (max-width: 1550px) {
  .news--component {
    .news--module {
      max-width: 350px;
      .news--item {
        height: 220px;
        .news--image {
          max-height: 150px;
        }
      }
    }
  }
}
</style>


