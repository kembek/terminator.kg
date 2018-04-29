<template>
<div class="phone-wrapper">
  <div class="contacts-titile">
    <IconDots />
    <h2>Cвяжитесь с нами</h2>
  </div>
  <div class="contacts-info">
    <div class="number-block">
      <p>О!:<a href="tel:+1234567890">0705529863</a></p>
      <p>MegaCom:<a href="tel:+1234567890">0554529863</a></p>
      <p>email:<a href="mailto:youremailaddress">adm.terminator@gmail.com</a> </p>
      <a href=""></a>
    </div>
  </div>
</div>
</template>
<script>
import IconDots from '~/assets/svg/phone.svg'
export default {
  components: {
    IconDots
  }
}
</script>
