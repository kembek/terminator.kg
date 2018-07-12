<template>
	<div class="tabs-content-item" v-html="product.video" />
</template>

<script>
export default {
  props: {
    product: {}
  },
    head() {
        return {
            title: this.product.title + ' - Видео обзоры',
            meta: [{
                    hid: "og:title",
                    property: "og:title",
                    content: this.product.title  + ' - Видео обзоры | TERMINATOR.KG'
                },
                {
                    hid: "description",
                    property: "description",
                    content: this.product.meta_description_video + " - Видео обзоры | TERMINATOR.KG"
                },
                {
                    hid: "keywords",
                    property: "keywords",
                    content: this.product.meta_keywords_video + " - Видео обзоры | TERMINATOR.KG"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: this.product.description_video + " - Видео обзоры | TERMINATOR.KG"
                }
            ]
        };
    },
}
</script>
