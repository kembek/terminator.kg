<template>
<FAQ />
</template>

<script>
import FAQ from '~/components/faq'
export default {  head() {
    return {
      title: 'FAQ',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'FAQ | TERMINATOR.KG'
        },
      ]
    }
  },
  components: {
    FAQ
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.content {
  display: flex;
  justify-content: center;
  .wrapper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
      align-items: center;
      
    #toogle-categories {
      display: none;
    }
    .search {
      padding: 0 5px;
      display: flex;
      align-items: center;
        max-width: 1200px;
        width: 90vw;
      svg {
        fill: @color-main_font;
        height: 30px;
        width: 30px;
        margin-left: 20px;
        position: absolute;
      }
      input[type="text"] {
        width: 100%;
        height: 50px;
        padding-left: 80px;
        border-radius: 5px;
        border-color: @color-text;
        background: transparent;
        font-size: 20px;
        border-style: solid;
        color: @color-main_font;
        outline: none;
      }
    }
    .toogle-categories-label {
      display: none;
      svg {
        fill: @color-main_font;
        width: 100%;
        height: 10px;
        transition: none;
        &:hover {
          fill: @color-dark;
        }
      }
    }
    .categories {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      a {
        color: @color-text;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        margin-left: 20px;
        padding: 10px;
      }
      .nuxt-link-exact-active {
        color: white;
      }
    }
    .questions {
      padding: 0 5px;
      margin-top: 50px;
      width: 100%;
      .faq-title {
        text-align: center;
        h1 {
          font-size: 24px;
        }
      }
      .question {

        font-size: 18px;
        border-bottom: 1px solid @color-main_font;
        user-select: none;
        cursor: pointer;
        outline: none;
        * {
          outline: none;
        }
        .h2-question--wrapper {
          display: flex;
          justify-content: space-between;
          padding-top: 45px;
          padding-bottom: 14px;
          padding-left: 10px;
          h2 {
            cursor: pointer;
            font-size: 16px;
          }
          svg {
            margin-right: 10px;
            min-width: 20px;
            width: 20px;
            height: 20px;
            fill: white;
          }
        }
        .active {
          svg {
            transform: rotate(180deg);
          }
        }
        .answer {
            font-size: 16px;
          // margin-top: 28px;
          max-width: 1100px;
          padding-left: 25px;
          padding-bottom: 20px;
          cursor: default;
          color: @color-text;
        }
      }
    }
    .q-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      padding: 0 5px;
      width: 90%;
      button {
        width: 220px;
        height: 50px;
        margin-top: 40px;
        cursor: pointer;
        font-size: 20px;
        &:hover {
          // color: @color-light;
        border: 1px solid @color-dark;
          transition: .5s;
        }
      }
      h2 {
        font-size: 40px;
        margin-bottom: 70px;
      }
      input,
      textarea,
      button {
        border: 1px solid @color-text;
        background: transparent;
        border-style: solid;
        border-radius: 5px;
        color: white;
        outline: none;
      }
      .user-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 828px;
        width: 100%;
        .user-name,
        .user-email {
          display: flex;
          align-items: center;
          max-width: 380px;
          width: 100%;
          svg {
            width: 30px;
            height: 30px;
            position: absolute;
            margin-left: 15px;
            fill: white;
          }
          input {
            font-size: 20px;
            width: 100%;
            height: 50px;
            outline: none;
            padding-left: 60px;
          }
        }
        .user-name {
          &:first-child {}
        }
      }
      .user-text {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        max-width: 828px;
        width: 100%;
        span {
          font-size: 24px;
          color: @color-text;
          margin-bottom: 15px;
        }
        textarea {
          height: 160px;
          resize: none;
          padding: 15px;
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 772px) {
  .content {
    .wrapper {
      .search {
        svg {
          width: 25px;
          height: 25px;
          margin-left: 15px;
        }
        input[type="text"] {
          font-size: 15px;
          padding-left: 50px;
        }
      }
      #toogle-categories {
        &:checked {
          &~.categories {
            display: flex;
          }
        }
      }
      .toogle-categories-label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        margin-top: 20px;
      }
      .categories {
        display: none;
        flex-direction: column;
        a {
          margin-left: 0;
        }
      }
      .questions {
        margin-top: 50px;
      }
      .q-form {
        h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }
        .user-info {
          justify-content: center;
          .user-name,
          .user-email {
            margin: 5px 0;
            svg {
              width: 25px;
              height: 25px;
              margin-left: 15px;
            }
            input {
              font-size: 15px;
              padding-left: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
