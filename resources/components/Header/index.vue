<template>
<header :class="{'active': showChildMenu != -1 && menu[showChildMenu].childs.length > 0}" id="Top">
  <div class="logo-container">
    <nuxt-link to="/" class="logo">
      <Logo />
      <span>terminator</span>
    </nuxt-link>
  </div>
  <input type="checkbox" id="toogle-menu" v-model="isOpenMenu" />
  <label for="toogle-menu" class="toogle">Меню</label>
  <nav @mouseleave="showChildMenu = -1">
    <ul class="links-container">
      <li class="links" v-for="(item, i) in menu" :key="i" @mouseover="showChildMenu = i">
        <nuxt-link class="link" :class="{'active': showChildMenu == i}" v-if="item.isLocal" :to="item.link">{{item.title}}</nuxt-link>
        <a v-else :href="item.link">{{item.title}}</a>
        <transition name="child-links">
          <ul v-show="item.childs.length > 0 & showChildMenu == i" class="child-links-container">
            <li v-for="(child, j) in item.childs" :key="j" class="child-links" @click="showChildMenu = -1; isOpenMenu = false">
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
          link: '/categories/smartphones/',
          img: 'all.svg'
        }, {
          isLocal: true,
          title: 'ТЯЖЕЛЫЕ ИГРЫ',
          link: '/categories/hard-games/',
          img: 'game.svg'
        }, {
          isLocal: true,
          title: 'ОТЛИЧНАЯ КАМЕРА',
          link: '/categories/best-camera/',
          img: 'camera.svg'
        }, {
          isLocal: true,
          title: 'АКТИВНОЕ ИСПОЛЬЗОВАНИЕ',
          link: '/categories/active-using/',
          img: 'battery.svg'
        }, {
          isLocal: true,
          title: 'УНИВЕРСАЛЬНЫЙ СМАРТФОН',
          link: '/categories/universal-smartphone/',
          img: 'universal.svg'
        }]
      }, {
        title: 'Другое',
        link: '/categories/',
        isLocal: true,
        childs: [{
          isLocal: true,
          title: 'АКСЕССУАРЫ',
          link: '/categories/accesories-for-smartphones/',
          img: 'accessories.svg'
        }, {
          isLocal: true,
          title: 'ЗАРЯДНЫЕ УСТРОЙСТВА',
          link: '/categories/charging-device/',
          img: 'charging.svg'
        }, {
          isLocal: true,
          title: 'УМНЫЕ ЧАСЫ',
          link: '/categories/smart-watch/',
          img: 'watch.svg'
        }, {
          isLocal: true,
          title: 'ГАДЖЕТЫ И УСТРОЙСТВА',
          link: '/categories/gadgets/',
          img: 'phone.svg'
        }, {
          isLocal: true,
          title: 'ТОВАРЫ ДЛЯ ДОМА',
          link: '/categories/home-device/',
          img: 'home-device.svg'
        }, {
          isLocal: true,
          title: 'НАУШНИКИ И КОЛОНКИ',
          link: '/categories/headphones',
          img: 'headphone.svg'
        }]
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