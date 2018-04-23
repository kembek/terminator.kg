<template>
<div class="wrapper">
  <div class="search">
    <SearchIcon />
    <input type="text" placeholder="Напишите здесь свой воспрос">
  </div>
  <input type="checkbox" id="toogle-categories">
  <label for="toogle-categories" class="toogle-categories-label">
    <IconDots />
  </label>
  <Categories :items="categories" />
  <nuxt-child />
  <DropDown />
  <QuestionForm />
</div>
</template>

<script>
import SearchIcon from '~/assets/svg/search.svg';
import Categories from './Categories'
import DropDown from '../DropDown'
import QuestionForm from '../QuestionForm'
import IconDots from '~/assets/svg/dots.svg'

export default {
  components: {
    SearchIcon,
    Categories,
    DropDown,
    QuestionForm,
    IconDots
  },
  data() {
    return {
      categories: [{
        title: 'Все',
        link: 'all'
      }, {
        title: 'О нас',
        link: 'about'
      }, {
        title: 'Доставка',
        link: 'delivery'
      }, {
        title: 'Кредит',
        link: 'credit'
      }, {
        title: 'Корпоративные продажи',
        link: 'сorporate-sales'
      }, {
        title: 'Смартфоны',
        link: 'smartphones'
      }, {
        title: 'Другие товары',
        link: 'another'
      }, ]
    }
  },
  methods: {}
}
</script>