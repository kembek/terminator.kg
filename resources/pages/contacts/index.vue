<template>
<div class="div">
  <div class="contacts-block">
    <Address/>
    <Phones/>
    <FeedBack/>
  </div>
  <div class="contacts-map">

  </div>
</div>
</template>
<script>
import Address from '~/components/contacts/address'
import Phones from '~/components/contacts/phones'
import FeedBack from '~/components/contacts/feedbackform'
export default {
  components: {
    Address,
    Phones,
    FeedBack
  }
}
</script>
<style lang="less">
@import "~assets/css/themes/default.less";
.div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  .contacts-map {
    content: '';
    background-color: #fff;
    height: 80vh;
    max-height: 600px;
    width: 100%;
    max-width: 1140px;
    margin-top: 20px;
  }
  .contacts-block {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .address-wrapper,
    .feedback-wrapper,
    .phone-wrapper {
      // max-width: 334px;
      min-width: 200px;
      width: 100%/4;
      padding: 40px;
      background-color: #fff;
      .contacts-titile {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        border-bottom: 2px solid @color-text;
        color: black;
        height: 65px;
        justify-content: space-between;
        padding: 10px 0;
        svg {
          width: 40px;
          height: 40px;
          fill: @color-main_font;
        }
        h2 {
          color: @color-text;
          font-size: 18px;
        }
      }
      .contacts-info {
        a {
          text-decoration: none;
          color: @color-text;
          &:hover {
            color: white;
          }
        }
        padding: 40px 0;
        .address-link {}
        .work-time {
          color: @color-text;
          margin-top: 20px;
          h3 {
            margin-bottom: 10px;
          }
          span {
            margin-left: 20px;
          }
        }
        .number-block {
          p {
            color: @color-dark;
            margin: 10px 0;
            a {
              margin-left: 30px;
            }
          }
        }
        .fb-inputs {
          input {
            border: 1px solid rgba(204, 204, 204, 0.3);
            width: 96%;
            outline: none;
            height: 20px;
            margin-bottom: 5px;
            padding: 5px 0 5px 10px;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            &::-webkit-input-placeholder {
              /* Chrome/Opera/Safari */
              color: rgb(56, 56, 56);
            }
            &::-moz-placeholder {
              /* Firefox 19+ */
              color: rgb(56, 56, 56);
            }
            &:-ms-input-placeholder {
              /* IE 10+ */
              color: pink;
            }
            &:-moz-placeholder {
              /* Firefox 18- */
              color: pink;
            }
          }
          textarea {
            outline: none;
            resize: none;
            width: 96%;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            height: 100px;
            padding: 5px 0 5px 10px;
          }
          button {
            border: none;
            padding: 8px;
            background: @color-dark;
            color: white;
          }
        }
      }
    }
    .address-wrapper {
      background-color: rgba(95, 160, 155, 0.4);
    }
    .phone-wrapper {
      background-color: rgba(47, 46, 46, 0.4);
    }
    .feedback-wrapper {
      background-color: rgba(255, 255, 255, 0.35);
    }
  }
}

@media screen and (max-width: 970px) {
  .div {
    .contacts-map {}
    .contacts-block {
      flex-direction: column;
      align-items: center;
      .address-wrapper,
      .feedback-wrapper,
      .phone-wrapper {
        width: 80vw;
      }
    }
  }
}
</style>
