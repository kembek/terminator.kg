<template>
<div class="q-form">
  <h2>Задать вопрос</h2>
  <div class="user-info">
    <div class="user-name">
      <NameIcon />
      <input type="text" placeholder="Имя" required>
    </div>
    <div class="user-email">
      <EmailIcon />
      <input type="email" placeholder="Email" required>
    </div>
  </div>
  <div class="user-text">
    <span>Вопрос</span>
    <textarea rows="10" cols="45" name="text" placeholder="Введите сюда Ваш вопрос..." required></textarea>
  </div>
  <button>Отправить</button>
</div>
</template>
<script>
import NameIcon from '~/assets/svg/NameIcon.svg';
import EmailIcon from '~/assets/svg/EIcon.svg';
export default {
  components: {
    NameIcon,
    EmailIcon
  }
}
</script>
