<template>
<Main />
</template>
<script>
import Main from '~/components/main/'

export default {
  head() {
    return {
      title: 'Главная страница',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'Интернет-магазин TERMINATOR.KG. Здесь Вы сможете найти оригинальную, качественную продукцию по доступной цене. Продукция - Xiaomi смартфоны, аксессуары для смартфонов, гаджеты, рюкзаки и сумки, wi-fi роутеры, гироскутеры, электросамокаты, электровелоипеды, квадрокоптеры, зубные щетки и многое другое. Будем рады видеть!'
        },
      ]
    }
  },
  components: {
    Main
  }
}
</script>
