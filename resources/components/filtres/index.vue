<template>
<Item :items="items" />
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
          value: [7000,7500],
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
  methods: {},
  components: {
    Item
  }
};
</script>

<style lang="less">

</style>