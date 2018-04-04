<template>
<nav>
  <nuxt-link to=""></nuxt-link>
</nav>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        title: 'Смартфоны',
        link: '',
        isLocal: true,
        child: [{
          isLocal: true,
          title: 'ВСЕ СМАРТФОНЫ',
          link: '',
          img: '/images/all.svg'
        }, {
          isLocal: true,
          title: 'ТЯЖЕЛЫЕ ИГРЫ',
          link: '',
          img: '/images/game.svg'
        }, {
          isLocal: true,
          title: 'ОТЛИЧНАЯ КАМЕРА',
          link: '',
          img: '/images/camera.svg'
        }, {
          isLocal: true,
          title: 'АКТИВНОЕ ИСПОЛЬЗОВАНИЕ',
          link: '',
          img: '/images/battery.svg'
        }, {
          isLocal: true,
          title: 'УНИВЕРСАЛЬНЫЙ СМАРТФОН',
          link: '',
          img: '/images/universal.svg'
        }]
      }, ]
    }
  },
  methods: {}
}
</script>