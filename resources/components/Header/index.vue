<template>
<header :class="{'active': showChildMenu != -1 && menu[showChildMenu].childs.length > 0}" id="Top">
  <div class="logo-container">
    <nuxt-link to="/" class="logo">
      <Logo />
      <span>terminator</span>
    </nuxt-link>
  </div>
  <input type="checkbox" id="toogle-menu"/>
  <label for="toogle-menu" class="toogle">Меню</label>
  <nav @mouseleave="showChildMenu = -1">
    <ul class="links-container">
      <li class="links" v-for="(item, i) in menu" :key="i" @mouseover="showChildMenu = i">
        <nuxt-link class="link" :class="{'active': showChildMenu == i}" v-if="item.isLocal" :to="item.link">{{item.title}}</nuxt-link>
        <a v-else :href="item.link">{{item.title}}</a>
        <transition name="child-links">
          <ul v-if="item.childs.length > 0 & showChildMenu == i" class="child-links-container">
            <li v-for="(child, j) in item.childs" :key="j" class="child-links">
              <nuxt-link v-if="child.isLocal" :to="child.link" class="child-link">
                <i :style="'mask-image: url(/images/' + child.img + ')'" />
                <span>{{child.title}}</span>
              </nuxt-link>
              <a v-else :href="child.link">{{child.title}}</a>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
  <Bar />

</header>
</template>

<script>
import Logo from '~/assets/svg/logo.svg'
import Bar from './Bar'

export default {
  components: {
    Logo,
    Bar
  },
  data() {
    return {
      isOpenMenu: false,
      showChildMenu: -1,
      menu: [{
        title: 'Смартфоны',
        link: '',
        isLocal: true,
        childs: [{
          isLocal: true,
          title: 'ВСЕ СМАРТФОНЫ',
          link: '',
          img: 'all.svg'
        }, {
          isLocal: true,
          title: 'ТЯЖЕЛЫЕ ИГРЫ',
          link: '',
          img: 'game.svg'
        }, {
          isLocal: true,
          title: 'ОТЛИЧНАЯ КАМЕРА',
          link: '',
          img: 'camera.svg'
        }, {
          isLocal: true,
          title: 'АКТИВНОЕ ИСПОЛЬЗОВАНИЕ',
          link: '',
          img: 'battery.svg'
        }, {
          isLocal: true,
          title: 'УНИВЕРСАЛЬНЫЙ СМАРТФОН',
          link: '',
          img: 'universal.svg'
        }]
      }, {
        title: 'Другое',
        link: '/category/other',
        isLocal: true,
        childs: []
      }, {
        title: 'Контакты',
        link: '/contacts',
        isLocal: true,
        childs: []
      }]
    }
  },
}
</script>