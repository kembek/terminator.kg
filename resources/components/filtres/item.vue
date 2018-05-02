<template>
<div class="filtres">
  <div class="dropdown" v-for="(item, i) in items" :key="i">
    <div class="top" @click="item.isStatus = !item.isStatus">
      <span class="title">
        {{item.title}}
      </span>
      <arrow :class="{'active': item.isStatus}" />
    </div>
    <ul class="content" v-show="item.isStatus">
      <li v-for="(child, j) in item.childs" :key="j" v-if="item.type === 'default'" :class="item.type">
        {{child.title}}
        <hr />
      </li>
      <div v-if="item.type === 'range'" :class="item.type">
        <div class="price">
          <input type="number" v-model="item.value[0]" />
          <input type="number" v-model="item.value[1]" />
        </div>
        <vue-slider :min="item.min" :max="item.max" width="100%" :disabled="false" :show="true" :useKeyboard="true" :tooltip="false" v-model="item.value" />
        <p>Вы можете указать диапозон вручную</p>
      </div>
      <li v-for="(child, k) in item.childs" :key="k" v-if="item.type === 'checkbox'" :class="item.type" @click="child.isStatus = !child.isStatus">
        <span> <checkbox :class="{'active': child.isStatus}"/> {{child.title}}</span>
        <hr />
      </li>
      <li v-for="(child, l) in item.childs" :key="l" v-if="item.type === 'radio'" :class="item.type" @click="item.active = l">
        <span> <radio :class="{'active': item.active === l}"/> {{child.title}}</span>
        <hr />
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import arrow from '~/assets/svg/arrow.svg'
import checkbox from '~/assets/svg/checkbox.svg'
import radio from '~/assets/svg/radiobutton.svg'

export default {
  props: {
    items: {
      type: Array
    },
  },
  methods: {
    // radioChange(i, l) {
    //   this.items[i].childs.forEach(element => {
    //     element.isStatus = false
    //   });
    //   this.items[i].childs[l].isStatus = true
    // }
  },
  components: {
    arrow,
    checkbox,
    radio
  }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.filtres {
  align-items: center;
  .dropdown {
    user-select: none;
    border-style: solid;
    border-color: @color-dark;
    border-width: 1px;
    border-radius: 5px;
    margin-top: 18px;
    margin-bottom: 20px;
    .top {
      background-color: @color-dark;
      max-width: 100%;
      width: 250px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {}
      svg {
        fill: @color-main_font;
        width: 25px;
        height: 25px;
      }
      .active {
        transform: rotate(180deg);
      }
    }
    .content {
      li {
        max-width: 100%;
        width: 250px;
        padding: 9px;
        &:hover {
          color: @color-dark;
        }
      }
      .default {}
      .checkbox {
        span {
          display: flex;
          justify-content: start;
          align-items: center;
          svg {
            fill: @color-dark;
            width: 25px;
            height: 25px;
            margin-right: 5px;
            .check {
              display: none;
            }
            &.active {
              .check {
                display: block;
              }
            }
          }
        }
      }
      .radio {
        span {
          display: flex;
          justify-content: start;
          align-items: center;
          svg {
            fill: @color-dark;
            width: 25px;
            height: 25px;
            margin-right: 5px;
            .border {
              fill: transparent;
              stroke: @color-dark;
            }
            .check {
              display: none;
            }
            &.active {
              .check {
                display: block;
              }
            }
          }
        }
      }
      .range {
        max-width: 230px;
        width: 100%;
        margin-bottom: 10px;
        .price {
          display: flex;
          justify-content: space-between;
          input {
            padding: 3px;
            margin-bottom: 10px;
            text-align: center;
            border: 1px solid @color-dark;
            border-radius: 5px;
            margin-top: 10px;
            max-width: 60px;
          }
        }
        p {
          color: @color-text;
          text-align: center;
          font-size: 12px;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>