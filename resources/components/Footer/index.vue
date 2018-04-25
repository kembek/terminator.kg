<template>
<footer>
  <div class="blocks">
    <div class="block">
      <h2>Контакты</h2>
      <div class="links">
        <div class="link">
          <img src="/images/map.svg" alt="Местоположение" />
          <a href="https://goo.gl/maps/UV43TANLUSq" target="_blank">
              <span>г.Бишкек, ул.Ахунбаева 173а/ул.Табалдиева Бизнес Центр "Профи", 2 этаж</span>
          </a>
        </div>
        <div class="link">
          <img src="/images/message.svg" alt="Почта" />
          <a href="mailto:office@terminator.kg" target="_blank" class="link">
                <span>office@terminator.kg</span>
              </a>
        </div>
        <div class="link">
          <img src="/images/telephone.svg" alt="Номера" target="_blank" /><span><a href="tel:+996 502 05 20 52">+996 502 05 20 52</a><a href="tel:+996 558 05 80 58">+996 558 05 80 58</a></span>
        </div>
      </div>
    </div>
    <div class="block">
      <h2>Информация</h2>
      <div class="links">
        <nuxt-link to="/about">О нас</nuxt-link>
        <nuxt-link to="/advantages">Наши преимущества</nuxt-link>
        <nuxt-link to="/faq">Часто задаваемые вопросы</nuxt-link>
        <nuxt-link to="/faq">Оплата и доставка</nuxt-link>
        <nuxt-link to="/faq">Условия гарантии</nuxt-link>
        <nuxt-link to="/blog">Наш блог</nuxt-link>
      </div>
    </div>
    <div class="block">
      <h2>Присоединяйтесь</h2>
      <div class="links-social">
        <a href="https://vk.com/" target="_blank">
          <VK />
        </a>
        <a href="https://fb.com/" target="_blank">
          <FB />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <Insta />
        </a>
      </div>

    </div>
  </div>

  <div class="bottom">
    <div class="left">
      <nuxt-link to="/" class="logo">
        <Logo />
        <span>terminator</span>
      </nuxt-link>
      <div class="copyright">
        Все права защищены © 2018
      </div>
    </div>
    <div class="middle">

    </div>
    <div class="right">

    </div>
  </div>
</footer>
</template>

<script>
import VK from '~/assets/svg/vk.svg';
import FB from '~/assets/svg/fb.svg';
import Insta from '~/assets/svg/insta.svg';
import Logo from '~/assets/svg/logo.svg'

export default {
  components: {
    VK,
    FB,
    Insta,
    Logo
  }

}
</script>


<style lang="less">
@import '~assets/css/themes/default.less';
footer {
  border-top: solid 1px @color-dark;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  flex-direction: column;
  .blocks {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    .block {
      margin: 10px 25px;
      max-width: 424px;
      h2 {
        padding-bottom: 30px;
        text-align: left;
        font-family: 'Segoe UI';
        color: @color-main_font;
        font-size: 24px;
        text-transform: uppercase;
      }
      .links-social {
        display: flex;
        flex-wrap: wrap;
        a {
          margin: 5px;
          svg {
            height: 30px;
            width: 30px;
            fill: @color-main_font;
            transition: none;
          }
          &:hover {
            svg {
              fill: @color-dark;
            }
          }
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 18px;
        .link {
          display: flex;
          flex-wrap: nowrap;
          margin: 5px 0;
          color: @color-main_font;
          text-decoration: none;
          align-items: center;
          img {
            height: 30px;
            width: 30px;
            min-width: 30px;
            margin-right: 10px;
          }
          span {
            display: flex;
            flex-direction: column;
            transition: none;
          }
          a {
            height: 100%;
            color: @color-main_font;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            &:first-child {
              margin-bottom: 8px;
            }
            &:hover {
              color: @color-dark;
            }
          }
        }
        a {
          height: 100%;
          color: @color-main_font;
          text-decoration: none;
          margin-bottom: 10px;
          &:hover {
            color: @color-dark;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .copyright {
        margin-bottom: 10px;
      }
      .logo {
        margin: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: @color-main_font;
        svg {
          padding-right: 10px;
          height: 40px;
          width: 40px;
        }
        span {
          transition: none;
          font-size: 24px;
          text-transform: uppercase;
        }
        &:hover {
          color: @color-dark;
        }
      }
    }
  }
}

@media screen and (max-width: 585px) {
  footer {
    align-items: flex-start;
    justify-content: flex-start;
    .blocks {
      
    }
  }
}
</style>
