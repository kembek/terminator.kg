<template>
<Item :items="items" class="filtres" />
</template>

<script>
import Item from "./item";
export default {
  data() {
    return {
      items: [{
          type: "default",
          isStatus: true,
          title: "Серия",
          childs: [{
              title: "Все"
            },
            {
              title: "Mi"
            },
            {
              title: "Redmi"
            },
            {
              title: "Redmi Note"
            }
          ]
        },
        {
          type: "range",
          title: "Стоимость",
          isStatus: true,
          value: [7000, 70000],
          min: 7000,
          max: 80000
        },
        {
          type: "checkbox",
          isStatus: true,
          title: "Несколько вариантов",
          childs: [{
              title: "Global version",
              isStatus: false
            },
            {
              title: "Доставка",
              isStatus: true
            }
          ]
        },
        {
          type: "radio",
          isStatus: true,
          title: "Что-то одно",
          active: 0,
          childs: [{
              title: "Первое"
            },
            {
              title: "Второе"
            },
            {
              title: "3"
            },
            {
              title: "4"
            }
          ]
        }
      ]
    };
  },
  components: {
    Item
  }
};
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