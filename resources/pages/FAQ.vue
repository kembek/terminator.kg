<template>
<div>
  <FAQ />
</div>
</template>

<script>
import FAQ from '~/components/faq'
export default {
  components: {
    FAQ
  }
}
</script>

<style lang="less">
/* Variables */

@color-bg: #242323;
@color-bg-50: rgba(33, 33, 33, 0.5);
@color-main_font: white;
@color-text: #ABABAB;
@color-light: #5FA09B;
@color-dark: #0B8793;
/* !Variables */

.content {
  display: flex;
  justify-content: center;
  .wrapper {
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .search {
      display: flex;
      align-items: center;
      svg {
        fill: @color-dark;
        height: 40px;
        width: 40px;
        margin-left: 20px;
        position: absolute;
      }
      input[type="text"] {
        width: 100%;
        height: 100px;
        padding-left: 80px;
        border-radius: 5px;
        border-color: @color-dark;
        background: transparent;
        font-size: 24px;
        border-style: solid;
        color: @color-main_font;
        outline: none;
      }
    }
    .categories {
      padding: 20px;
      a {
        color: @color-text;
        text-decoration: none;
        font-size: 18px;
        margin-left: 20px;
      }
      .nuxt-link-exact-active {
        color: white;
      }
    }
    .questions {
      margin-top: 100px;
      .faq-title {
        text-align: center;
        margin-bottom: 50px;
        h1 {
          font-size: 24px;
        }
      }
      .question {
        font-size: 18px;
        border-bottom: 1px solid @color-dark;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        .h2-question--wrapper {
          display: flex;
          justify-content: space-between;
          padding-top: 45px;
          padding-bottom: 14px;
          padding-left: 10px;
          h2 {
            cursor: pointer;
          }
          svg {
            width: 30px;
            height: 30px;
            fill: white;
          }
        }
        .active {
          svg {
            transform: rotate(180deg);
          }
        }
        .answer {
          margin-top: 28px;
          max-width: 1100px;
          padding-left: 25px;
          padding-bottom: 20px;
          color: @color-text;
        }
      }
    }
    .q-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      button {
        width: 260px;
        height: 50px;
        margin-top: 40px;
        cursor: pointer;
        font-size: 24px;
        &:hover {
          background-color: @color-dark;
          transition: .5s;
        }
      }
      h2 {
        font-size: 50px;
        margin-bottom: 70px;
      }
      input,
      textarea,
      button {
        border-color: @color-text;
        background: transparent;
        border-style: solid;
        border-radius: 5px;
        color: white;
        outline: none;
      }
      .user-info {
        display: flex;
        flex-wrap: wrap;
        ;
        justify-content: center;
        .user-name,
        .user-email {
          display: flex;
          align-items: center;
          svg {
            width: 40px;
            height: 40px;
            position: absolute;
            margin-left: 15px;
            fill: white;
          }
          input {
            font-size: 24px;
            width: 340px;
            height: 60px;
            outline: none;
            padding-left: 60px;
          }
        }
        .user-name {
          &:first-child {
            margin-right: 50px;
          }
        }
      }
      .user-text {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        span {
          font-size: 24px;
          color: @color-text;
          margin-bottom: 15px;
        }
        textarea {
          width: 828px;
          border: 2px solid @color-text;
          height: 160px;
          resize: none;
          padding: 15px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
