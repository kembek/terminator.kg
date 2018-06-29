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
      <Timer :dedline="dedline"/>
    </div>
  </div>
</div>
</template>

<script>
import Timer from "~/components/Timer";
import Logo from "~/assets/svg/logo.svg";

export default {
  props: ['dedline'],
  data() {
    return {};
  },
  components: {
    Logo,
    Timer
  },
  methods: {}
};
</script>

<style lang="less">
.logo {
  svg {
    height: 30vh;
    width: 30vw;
  }
}
html,
body {
  height: 100%;
  width: 100%;
}

.App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  font-size: 68px;
  letter-spacing: -2px;
  line-height: 60px;
  margin: 0;
  text-align: center;
  margin-left: 15px;
  padding-top: 20px;
  color: white;
}

header {
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.wrapper {
  position: relative;
  width: 100%;
  text-align: center;
  z-index: 1;
}

.logo {
  margin-top: 24px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: default;
  h1 {
    font-size: 68px;
    letter-spacing: 0;
    padding-top: 0;
  }
}

#Content {
  margin-top: 10px;
  h2 {
    margin: 0px 0px 24px 0px;
    padding: 0px;
    text-align: center;
    font-size: 48px;
    font-weight: 300;
  }
  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    display: block;
    clear: both;
    margin-bottom: 50px;
  }
}

.countdown {
  text-align: center;
}

.styled {
  margin-bottom: 90px;
  div {
    display: inline-flex;
    margin-left: 10px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    .description {
      display: block;
      border-top: 1px solid #cecece;
      padding-top: 10px;
      margin: 10px;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
    }
    .date {
      padding-bottom: 10px;
    }
  }
}

#overlay {
  position: fixed;
  top: -100px;
  width: 100%;
  bottom: 0px;
  opacity: 0.8;
  height: 150vh;
}

#Background {
  width: 100%;
  bottom: 0px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 150vh;
  position: fixed;
}

@media (max-width: 900px) {
  .App {
    min-width: initial !important;
  }
  #Background {
    width: 100%;
    bottom: 0px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 150vh;
    position: fixed;
  }
  .wrapper {
    width: 100%;
  }
  .styled {
    div {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 420px) {
  h1 {
    text-align: center;
    margin-left: 0px;
    margin-bottom: 0px;
  }
  .styled {
    div {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: normal;
      text-align: center;
    }
    margin-bottom: 30px;
  }
  #Content {
    h2 {
      margin: 0px 0px 0px 0px;
      padding: 0px;
      text-align: center;
      font-size: 29px;
      font-weight: 300;
    }
  }
}
</style>