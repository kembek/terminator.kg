<template>
<div class="tabs-content-item" style="width: 100%;">
    <div class="conteiner-attribute">
        <div class="nav-attrivutes">
            <a v-for="(item, i) in product.attribute_groups" :class="{'active': active === item.id}" :key="i" @click="scroll(item.id)">{{item.title}}</a>
        </div>
        <div class="attributes" @scroll="active = 0">
            <ul v-for="(item, i) in product.attribute_groups" :key="i" :id="`attribute-${item.id}`">
                <li>
                    <h3>{{item.title}}</h3>
                    <p v-for="(attribute, j) in item.attributes" :key="j"><label>{{attribute.title}}</label> <span>{{attribute.text}}</span> </p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    product: {}
  },
  data() {
    return {
      active: 0
    };
  },
  head() {
    return {
      title: this.product.title + " - Характеристики",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.product.title + " - Характеристики | TERMINATOR.KG"
        },
        {
          hid: "description",
          property: "description",
          content:
            this.product.meta_description_atributes +
            " - Характеристики | TERMINATOR.KG"
        },
        {
          hid: "keywords",
          property: "keywords",
          content:
            this.product.meta_keywords_atributes +
            " - Характеристики | TERMINATOR.KG"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            this.product.description_atributes +
            " - Характеристики | TERMINATOR.KG"
        }
      ]
    };
  },
  methods: {
    scroll(value) {
      this.$scrollTo(`#attribute-${value}`, 500, {
        container: ".attributes",
        offset: -20
      });
      setTimeout(() => {
        this.active = value;
      }, 550);
    }
  }
};
</script>
