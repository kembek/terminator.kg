<template>
<div class="feedback-wrapper">
  <div class="contacts-titile">
    <IconDots />
    <h2>Напишите нам</h2>
  </div>
  <div class="contacts-info">
    <div class="fb-inputs">
      <form action="">
      <input type="text" placeholder="Имя" required>
      <input type="email" placeholder="Email" required>
      <input type="tel" placeholder="Номер телефона" required>
      <input type="text" placeholder="Заголовок сообщения" required>
      <textarea></textarea>
      <button>Отправить</button>
      </form>
    </div>
  </div>
</div>
</template>
<script>
import IconDots from '~/assets/svg/post.svg'
export default {
  components: {
    IconDots
  }
}
</script>
