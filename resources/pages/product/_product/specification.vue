<template>
<div class="tabs-content-item" style="width: 100%;">
    <div class="conteiner-attribute">
        <div class="nav-attrivutes">
            <a v-for="(item, i) in product.attribute_groups" :key="i" @click="scroll(item.id)">{{item.title}}</a>
        </div>
        <div class="attributes">
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
        }
    },
    methods: {
        scroll(value) {
            this.$scrollTo(`#attribute-${value}`, 500, {
                container: ".attributes",
                offset: -20
            })
            this.active = value;
        }
    }
}
</script>
