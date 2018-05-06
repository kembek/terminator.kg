<template>
<div class="countdown styled">
  <div><span class="date"> {{ days }}  </span> <span class="description">дней</span></div>
  <div><span class="date"> {{ hours  }} </span> <span class="description">часов</span></div>
  <div><span class="date"> {{ minutes }} </span> <span class="description">минут</span></div>
  <div><span class="date"> {{ seconds }} </span> <span class="description">секунд</span></div>
</div>
</template>

<script>
let interval = null;

export default {
  props: ['dedline', 'stop'],
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      diff: 0
    }
  },
  mounted() {
    this.date = Math.trunc(Date.parse(this.dedline.replace(/-/g, "/")) / 1000)
    interval = setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 500)


    setInterval(() => {
      if (new Date(this.dedline).getTime() <= Date.now()) {
        if (process.browser) {
          document.location.reload()
        }
      }
    }, 1000)
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    }
  },
  watch: {
    now(value) {
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    }
  }
}
</script>
