<template>
	<div class="tabs-content-item" v-html="product.photos" />
</template>

<script>
export default {
  props: {
    product: {}
  },
    head() {
        return {
            title: this.product.title + ' - Примеры снимков со смартфона',
            meta: [{
                    hid: "og:title",
                    property: "og:title",
                    content: this.product.title  + ' - Примеры снимков со смартфона | TERMINATOR.KG'
                },
                {
                    hid: "description",
                    property: "description",
                    content: this.product.meta_description_photos + " - Примеры снимков со смартфона | TERMINATOR.KG"
                },
                {
                    hid: "keywords",
                    property: "keywords",
                    content: this.product.meta_keywords_photos + " - Примеры снимков со смартфона | TERMINATOR.KG"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: this.product.description_photos + " - Примеры снимков со смартфона | TERMINATOR.KG"
                }
            ]
        };
    },
}
</script>
