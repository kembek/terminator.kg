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
            <li class="links" v-for="(item, i) in menu" :key="i" @mouseover="() => {if(item.childs) showChildMenu = i; else showChildMenu = -1}" >
                <nuxt-link class="link" :class="{'active': showChildMenu == i}" v-if="item.is_local" :to="item.link">{{item.title}}</nuxt-link>
                <a v-else :href="item.link">{{item.title}}</a>
                <transition name="child-links">
                    <ul v-show="item.childs.length > 0 & showChildMenu == i" v-if="item.childs" class="child-links-container">
                        <li v-for="(child, j) in item.childs" :key="j" class="child-links" @click="showChildMenu = -1; isOpenMenu = false">
                            <nuxt-link v-if="child.is_local" :to="child.link" class="child-link">
                                <i :style="'mask-image: url(/images/menu/' + child.img + ')'" />
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
import Logo from "~/assets/svg/logo.svg";
import Bar from "./Bar";

export default {
  components: {
    Logo,
    Bar
  },
  data() {
    return {
      isOpenMenu: false,
      showChildMenu: -1,
      menu: this.$store.getters.GetMenu
    };
  }
};
</script>
