<template>
  <div class="App">
  <div class="wrapper">
    <header>
      <div class="logo" title="TERMINATOR.KG">
        <Logo />
      </div>
    </header>
    <div id="Content">
      <h2>Технические работы</h2>
      <h3>До конца работ осталось</h3>
      <Timer dedline="2018/05/02 12:00:00"/>
    </div>
  </div>
</div>
</template>

<script>
import Timer from '~/components/Timer'
import Logo from '~/assets/svg/logo.svg'

export default {
  name: 'name',
  layout: 'none',
  data() {	
    return {}
  },
  components: {
    Logo,
    Timer
  },
  methods: {}
}
</script>

<style lang="less">
.logo {
  svg {
  height: 30vh;
  width: 30vw;}
}
</style>