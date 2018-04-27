<template>
<div class="questions">
  <div class="faq-title">
    <h1>{{title}}</h1>
  </div>
  <div class="question" v-for="(item, i) in items" :key="i" @click="isShow(i)" :id="scroll + '-' + i">
    <div class="h2-question--wrapper" :class="{'active' :Show == i}">
      <h2>{{item.question}}</h2>
      <ArrowIcon />
    </div>
    <div class="answer" v-show="Show == i">
      <p>{{item.answer}}</p>
    </div>
  </div>
</div>
</template>
<script>
import ArrowIcon from '~/assets/svg/arrow.svg';
export default {
  props: {
    title: {
      type: String
    },
    scroll: {
      type: String
    }
  },
  components: {
    ArrowIcon
  },
  data() {
    return {
      Show: -1,
      items: [{
        question: 'Сколько длится выполнение заказа?',
        answer: 'Срок выполнения заказа зависит от способа доставки товара. Срок отгрузки товара до 2 дней с даты оформления заказа, плюс доставка курьером – 1-2 рабочих дня, почтой – 5-10 дней.'
      }, {
        question: 'В чем отличие глобальной (европейской) версии смартфонов от азиатской? Какую версию лучше выбрать?',
        answer: 'Смартфоны Xiaomi и Meizu часто выпускаются в двух модификациях: азиатская версия и глобальная. Данные версии смартфонов отличаются только поддержкой или отсутствием 4G-сетей Beeline (частоты B20). Азиатская версия не поддерживает 4G-сети сотового оператора Beeline, глобальная - поддерживает. Других отличий нет. Обе версии аппаратов поддерживают 4G-сети Megacom и O! и имеют одинаковое, очень высокое качество сборки.'
      }, {
        question: 'У вас есть доставка?',
        answer: 'Доставка по всему Бишкеку'
      }, {
        question: 'У вас можно купить в кредит?',
        answer: 'Документы, подтверждающие доходы обязательны для предоставления. Подобными документами могут выступить: справка о заработной плате за 12 месяцев, патент, официальная выписка по зарплатному счету или другой документ, подтверждающий ваш доход'
      }, {
        question: 'Почему сайт имеет такое странное название?',
        answer: 'НЗ'
      }]
    }
  },
  methods: {
    isShow(value) {
      if (value == this.Show) {
        this.Show = -1
      } else {
        this.Show = value

      }
      setTimeout(() => {
        this.$scrollTo('#' + this.scroll + '-' + value, 500, {
          offset: -120
        })
      }, 50)
    }
  },
}
</script>