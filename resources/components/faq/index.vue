<template>
<div class="wrapper">
  <div class="search">
    <SearchIcon />
    <input type="text" placeholder="Напишите здесь свой воспрос">
  </div>
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

export default {
  components: {
    SearchIcon,
    Categories,
    DropDown,
    QuestionForm
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