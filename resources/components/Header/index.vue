<template>
<div class="header">
  <nuxt-link to="/" class="logo">
    <Logo />
    <span>terminator</span>
  </nuxt-link>
  <Menu />
  <Bar />
</div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg'
import Menu from './Menu'
import Bar from './Bar'

export default {
  components: {
    Logo,
    Menu,
    Bar
  }
}
</script>