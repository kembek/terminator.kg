<template>
<div class="div">
  <div class="contacts-block">
    <Address/>
    <Phones/>
    <FeedBack/>
  </div>
  <div class="contacts-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.861630153905!2d74.58832357674524!3d42.84352534044142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9deb3155553%3A0x789e39121998570d!2sterminator.kg!5e0!3m2!1sru!2skg!4v1524996334478" frameborder="0" style="border:0; width: 100%; height: 100%;" allowfullscreen></iframe>
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
