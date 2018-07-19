<template>
<div class="phone-wrapper">
  <div class="contacts-titile">
    <IconDots />
    <h2>Cвяжитесь с нами</h2>
  </div>
  <div class="contacts-info">
    <div class="number-block">
      <p>О!:<a href="tel:+996 502 052 052">+996 502 052 052</a></p>
      <p>MegaCom:<a href="tel:+996 558 058 058">+996 558 058 058</a></p>
      <p>email:<a href="mailto:office@terminator">office@terminator.kg</a> </p>
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
