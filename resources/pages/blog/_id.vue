<template>
<div class="article-conteiner">
  <div class="article-wrapper">
    <div class="article-title">
      <h2>Тест на знание алгоритмов</h2>
      <div class="article-date">
        <IconDate />
        <span>27 апреля 2018 в 15:19</span>
      </div>
    </div>
    <div class="article-img">
      <img src="/images/slider/slide1.jpg">
    </div>
    <div v-html="article" class="article-text">
    </div>
    <div class="social-icons">
    </div>
  </div>
</div>
</template>

<script>
import IconDate from "~/assets/svg/icondate.svg";
export default {
  components: {
    IconDate
  },
   data() {
    return {
      article: ('<h2>проектирование. и дизайн</h2>')
    };
  }
}
</script>


<style lang="less">
@import '~assets/css/themes/default.less';
.article-conteiner {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 30px;
  .article-wrapper {
    max-width: 1200px;
    width: 100%;
    // border: 1px solid white;
    background-color: white;
    .article-title {
      padding: 30px 0 40px 50px;
      h2 {
        color: @color-dark;
        font-size: 26px;
      }
      .article-date {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #95989a;
        margin-top: 8px;
        svg {
          width: 21px;
          fill: #95989a;
        }
      }
    }
    .article-img {
      img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        max-height: 400px;
      }
    }
    .article-text {
      padding: 35px 50px 50px 50px;
      font-size: 18px;
      p {
        overflow-wrap: break-word;
        padding: 5px 0;
      }
      img {
        text-align: center;
        max-width: 100%;
        margin: 5px;
        object-fit: contain;
      }
      a {
        color: #569d87 !important;
        text-decoration: none;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        padding: 10px 0;
        font-size: 130%;
        text-transform: uppercase;
        font-family: "Helvetica Neue Thin",sans-serif;
      }
    }
    .social-icons {
      display: flex;
      justify-content: flex-end;
      margin: 60px 20px 10px 0;
      span {
        cursor: pointer;
      }
      svg {
        width: 35px;
        fill: #95989a;
        &:hover {
          fill: #569d87;
          transition: .8s;
        }
      }
    }
  }
}

@media screen and (max-width: 830px) {
  .article-conteiner {
    padding-top: 70px;
    .article-wrapper {
      .article-title {
        padding: 15px 0 25px 30px;
        h2 {
          color: #569d87;
          font-size: 20px;
        }
      }
      .article-text {
        padding: 35px 10px 50px 10px;
        font-size: 18px;
      }
    }
  }
}
</style>

