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
  * {
    color: @color-main_font;
  }
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
        border-bottom: 1px solid black;
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
        padding: 40px 0;
        .address-link {}
        .work-time {
          margin-top: 20px;
          color: black;
          span {
            margin-left: 20px;
          }
        }
        .fb-inputs {
          input {
            width: 99%;
            outline: none;
            height: 20px;
            margin-bottom: 5px;
            padding: 5px 0;
          }
          textarea {
            outline: none;
            resize: none;
            width: 98%;
            height: 100px;
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
      background-color: @color-bg_dark;
    }
    .feedback-wrapper {
      background-color: rgba(95, 160, 155, 0.4);
    }
  }
}

@media screen and (max-width: 970px){
  .div {
  .contacts-map {
  }
  .contacts-block {
    flex-direction: column;
    align-items: center;
    .address-wrapper,
    .feedback-wrapper,
    .phone-wrapper {
      width: 80vw;
    }}}
}
</style>
