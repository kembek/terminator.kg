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
          <img src="/images/telephone.svg" alt="Номера" target="_blank" /><span><a href="tel:+996 502 052 052">+996 502 052 052</a><a href="tel:+996 558 05 80 58">+996 558 05 80 58</a></span>
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
        <!-- <nuxt-link to="/blog">Наш блог</nuxt-link> -->
      </div>
    </div>
    <div class="block">
      <h2>Присоединяйтесь</h2>
      <div class="links-social">
        <a href="https://ok.ru/profile/587640037410" target="_blank" title="Мы в одноклассниках">
          <OK />
        </a>
        <a href="https://fb.com/terminator.kg/" target="_blank" title="Мы в facebook">
          <FB />
        </a>
        <a href="https://instagram.com/terminator_kg" target="_blank" title="Мы в instagram">
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
      <span v-scroll-to="'#Top'">
            <Scroll />
          </span>
    </div>
    <div class="right">
      <a class="footer--bottom-item fys" href='http://fys.kg/referral_site/terminator.kg' target="_blank">
        <h3 class="fys-created">Сайт разработан</h3>
        <div>
          <FysLogo class="footer--icon-fys" />
          <span>
       <h3>Studios</h3>
        <p>Мы создаём будущее</p>
      </span>
        </div>
      </a>
    </div>
  </div>
</footer>
</template>

<script>
import OK from '~/assets/svg/ok.svg';
import FB from '~/assets/svg/fb.svg';
import Insta from '~/assets/svg/insta.svg';
import Logo from '~/assets/svg/logo.svg';
import Scroll from '~/assets/svg/fys.svg';
import FysLogo from '~/assets/svg/fysLogo.svg';

export default {
  components: {
    OK,
    FB,
    Insta,
    Logo,
    Scroll,
    FysLogo
  }

}
</script>


<style lang="less">
@import '~assets/css/themes/default.less';
footer {
  background-color: @color-bg_dark;
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    .left {
      width: 28%;
      display: flex;
      flex-direction: column;
      align-items: left;
      .copyright {
        margin-bottom: 10px;
        text-align: center;
        width: 250px;
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
          color: #00ffcb;
        }
      }
    }
    .middle {
      width: 30%;
      display: flex;
      justify-content: center;
      svg {
        height: 60px;
        width: 60px;
        fill: white;
        padding-top: 20px;
        &:hover {
          transform: scale(1.05, 1.05);
        }
      }
      span {
        transition: none;
        font-size: 24px;
        text-transform: uppercase;
      }
    }
    .right {
      width: 29%;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .footer--bottom-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.fys {
          text-decoration: none;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          color: white;
          svg {
            fill: white;
            height: 70px;
            width: 70px;
          }
          h3 {
            font-size: 12px;
            margin: 0 5px;
            text-align: center;
          }
          div {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            
            span {
              h3 {
                font-size: 33px;
                font-family: "Arial", sans-serif;
                font-weight: bold;
              }
              p {
                font-size: 10px;
                text-align: center;
              }
            }
          }
          &:hover {
            color: white;
            svg {
              transform: scale(1.05, 1.05);
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1058px)
{
  footer{
    .blocks{
      .block{
        .links-social{
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 670px) {
  footer {
    align-items: flex-start;
    justify-content: flex-start;
    .blocks{
      .block{
        h2 {
          text-align: center;
        }
        .links-social{
          justify-content: center;
        }
      }
    }
    .bottom {
      .right {
      .footer--bottom-item {
        &.fys {
          align-items: center;
          flex-direction: column;
          margin-bottom: 20px;
          h3{
            font-size: 14px;
          }
          div{
            margin-top: 10px;
          }
        }}
      }
      .right,
      .left,
      .middle {
        flex-direction: column;
        width: 100%;
        margin-bottom: 10px;
        align-items: center;
        margin: 0;
      }
      flex-direction: column;
      align-items: center;
      justify-content:center;
    }
  }
}
</style>
