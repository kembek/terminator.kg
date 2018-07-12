<template>
<div class="product" v-if="product">
    <div class="product-up">

        <div class="product-up-l">

            <div class="product-slider" v-if="isPrices">

                <span class="arrow-up" @click="slideChange('down')">
                        <Arrow />
                        </span>

                <img v-for="(item, i) in slides" :key="i" :src="'/images/products/'+ images(i)" :alt="product.title" @click="setSlide(Slide(i))" draggable="false">

                <span @click="slideChange('up')"><Arrow /></span>

            </div>

            <div class="product-img"  v-if="isPrices" :style="'background-image: url(\'/images/products/'+ image + '\')'" />
            <div class="product-img"  v-el :style="'background-image: url(\'/images/products/'+ product.thumbnail + '\')'" />

        </div>

        <div class="product-up-r">

            <h2>{{product.title}}</h2>

            <div class="p-text">

                <label>Цена</label>

                <span v-if="isPrices">{{product.prices[active].price}} сом</span>
                <span v-else>ещё не установленна</span>

            </div>

            <div class="p-text">

                <label>Количество</label>

                <div class="quality">

                    <button @click="count--">-</button>

                    <input type="number" min="1" v-model="count">

                    <button @click="count++">+</button>

                </div>

            </div>

            <div class="p-text" v-if="isPrices">
                <label>Цвет: {{product.prices[active].title}}</label>

                <div class="color">
                    <span v-for="(item, i) in product.prices" :key="i" :style="'background-color: ' + item.code + ';'" @click="setColor(i)" :title="item.title" />
                </div>

            </div>

            <p>В зависимости от цвета стоимость может измениться</p>

            <div class="btns">
                <!-- @click="$root.$emit('order', false) -->
                <button class="btn" @click="AddOrder()">Купить</button>

                <button class="btn" @click="AddOrder()">Добавить в корзину</button>

            </div>

        </div>
    </div>
    <div class="tabs">
        <div class="tabs-headers">
            <nuxt-link :to="`/product/${product.link}/`" v-if="product.description.length > 50">
                Описание
            </nuxt-link>
            <nuxt-link :to="`/product/${product.link}/specification`" v-if="product.attribute_groups != false">
                Характеристики
            </nuxt-link>
            <nuxt-link :to="`/product/${product.link}/video-review`" v-if="product.video.length > 50">
                Видео обзор
            </nuxt-link>
            <nuxt-link :to="`/product/${product.link}/sample-photos`" v-if="product.photos.length > 50">
                Примеры снимков со смартфона
            </nuxt-link>
        </div>
        <div class="tabs-content">
            <nuxt-child :product="product" class="ql" />
        </div>
    </div>
</div>
</template>

<script>
import Arrow from "~/assets/svg/arrow.svg";

export default {
    components: {
        Arrow
    },
    async asyncData({
        error,
        app,
        params
    }) {
        const product = await app.$axios.$get(`/api/products/${params.product}`).then(({
            data
        }) => {
            return data
        }).catch(() => {
            return error({
                statusCode: 404,
                message: 'Not found'
            })
        })
        return {
            product
        }
    },
    head() {
        return {
            title: this.product.title,
            meta: [{
                    hid: "og:title",
                    property: "og:title",
                    content: this.product.title + " | TERMINATOR.KG"
                },
                {
                    hid: "description",
                    property: "description",
                    content: this.product.meta_description + " | TERMINATOR.KG"
                },
                {
                    hid: "keywords",
                    property: "keywords",
                    content: this.product.meta_keywords + " | TERMINATOR.KG"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: this.product.description + " | TERMINATOR.KG"
                }
            ]
        };
    },
    data() {
        return {
            page: 0,
            active: 0,
            img_id: 0,
            count: 1,
        };
    },

    notifications: {
        showSuccessMsg: {
            type: "success",
            title: "Успешно",
            text: "Товар добавлен"
        },
        showInfoMsg: {
            type: "info",
            title: "Внимание",
            text: "Оформление заказа будет доступно в ближайшее время"
        }
    },
    methods: {
        AddOrder() {
            // this.$store.getters['Order/Items'].forEach(item => {
            //   if(item.product.id == this.product.id)
            //   this.$store.dispatch('Order/AddCount')
            // });

            this.showInfoMsg();

            // let temp = {
            //   count: this.count,
            //   product: this.product
            // }
            // this.$store.dispatch('Order/AddProduct', temp)
            // this.showSuccessMsg({
            //   text: 'Товар \"' + this.product.title + '\" добавлен в корзину!'
            // })
            // this.$root.$emit('basket', true)
        },
        setSlide(value) {
            this.img_id = value;
        },
        setColor(value) {
            this.active = value;
            this.img_id = 0;
        },
        slideChange(value) {
            if (
                value === "up" &&
                this.page < this.product.prices[this.active].images.length - this.slides
            ) {
                this.page++;
            } else if (value === "down" && this.page > 0) {
                this.page--;
            }
        },
        Slide(value) {
            return value + this.page;
        },
        images(i) {

            if (this.isImages)
                return this.product.prices[this.active].images[this.Slide(i)].url;
        }
    },
    beforeCreate() {
        this.$store.dispatch("Products/SetActive", this.$route.params.product);
    },
    computed: {
        slides() {
            if (this.isImages) {
                if (this.product.prices[this.active].images.length >= 4)
                    if (process.browser) {
                        if (window.innerWidth > 450) return 4;
                        else if (window.innerWidth > 350) return 3;
                        return 2;
                    }
                return this.product.prices[this.active].images.length;
            }
        },
        image() {
            if (this.isImages)
                return this.product.prices[this.active].images[this.img_id].url;
        },
        isImages() {
            try {
                if (this.product.prices[this.active].images.length > 0 && this.product.process != false)
                    return true
            } catch (e) {}
            return false
        },
        isPrices() {
            if (this.product.prices != false)
                return true
            return false
        }
    },
    watch: {
        count() {
            if (this.count < 1) this.count = 1;
        }
    }
};
</script>

<style lang="less">
@import "~assets/css/themes/default.less";
.product {
    max-width: 1200px;
    padding: 10px;
    width: 100%;
    .tabs {
        display: flex;
        align-items: center;
        flex-direction: column;
        .tabs-headers {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            a {
                height: 25px;
                border: 1px solid @color-bg_dark;
                color: @color-text;
                padding: 10px;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 5px;
            }
            .nuxt-link-exact-active {
                color: @color-dark;
                background: @color-bg_dark;
            }
        }
        .tabs-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            .tabs-content-item {
                width: 80%;
                padding: 24px;
                .conteiner-attribute {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    .nav-attrivutes {
                        display: flex;
                        flex-direction: column;
                        text-align: right;
                        padding-right: 30px;
                        min-width: 300px;
                        flex-basis: 300px;
                        border-right: 2px dashed @color-dark;
                        a {
                            padding: 10px 0;
                            text-align: right;
                            padding-right: 15px;
                        }
                    }
                    .attributes {
                        flex-grow: 1;
                        height: 60vh;
                        max-height: 600px;
                        overflow-y: scroll;
                        padding-left: 20px;
                        flex-basis: 800px;
                        ul {
                            li {
                                p {
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: space-between;
                                    width: 100%;
                                    color: @color-text;
                                    line-height: 20px;
                                    background: url(/images/attribute_dots.png) left 10px repeat-x;
                                    label {
                                        background-color: @color-bg;
                                        padding: 0 10px;
                                    }
                                    span {
                                        color: @color-main_font;
                                        background-color: @color-bg;
                                        width: 30%;
                                        padding: 0 10px;
                                        flex-basis: 400px;
                                    }
                                }
                            }
                        }
                    }
                }
                img {
                    width: 100%;
                    max-width: 1200px;
                }
                iframe {
                    height: 524px;
                    width: 100%;
                    max-height: 55vh;
                    max-width: 930px;
                }
            }
        }
    }
    .product-up {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 25px;
        .product-up-l {
            display: flex;
            align-items: center;
            img {
                user-select: none;
                transition: all 0.5s linear;
                object-fit: scale-down;
                cursor: pointer; // animation: show-img;
            }
            .product-slider {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                svg {
                    width: 30px;
                    height: 32px;
                    fill: white;
                    cursor: pointer;
                }
                .arrow-up {
                    transform: rotate(180deg);
                }
                img {
                    width: 80px; // height: 80px;
                    border-radius: 5px;
                    margin: 6px;
                }
            }
            .product-img {
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                max-height: 500px;
                max-width: 500px;
                height: 30vh;
                width: 100vw;
            }
        }
        .product-up-r {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 320px;
            padding: 0 0 0 25px;
            .btns {
                height: 80px;
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .btn {
                height: 35px;
                width: 140px;
                border: 1px solid @color-main_font;
                background: rgb(39, 38, 38);
                color: @color-text;
                font: 20px;
                &:hover {
                    border-color: @color-dark;
                    cursor: pointer;
                    color: @color-main_font;
                }
            }
            h2 {
                color: @color-dark;
                font-size: 21px;
                margin-top: 5px;
                margin-bottom: 15px;
            }
            p {
                font-size: 11px;
                color: @color-light;
            }
            .p-text {
                display: flex;
                margin: 15px 0;
                .color {
                    display: flex;
                    flex-wrap: wrap;
                    span {
                        display: block;
                        width: 20px;
                        height: 20px;
                        margin: 0 5px;
                        border: 1px solid @color-dark;
                    }
                }
                .quality {
                    display: flex;
                    input,
                    button {
                        outline: none;
                        border: 1px solid @color-dark;
                        background-color: transparent;
                        color: @color-main_font;
                    }
                    input {
                        width: 50px;
                        text-align: center;
                        border-left: 0;
                        border-right: 0;
                        &::-webkit-outer-spin-button,
                        &::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                        }
                    }
                    button {
                        width: 20px;
                        height: 25px;
                        &:first-child {
                            border-top-left-radius: 5px;
                            border-bottom-left-radius: 5px;
                        }
                        &:last-child {
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                        }
                    }
                }
                label {
                    display: block;
                    max-width: 180px;
                    width: 100%;
                    color: @color-text;
                }
            }
        }
    }
}

@keyframes show-img {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media screen and(max-width: 920px) {
    .product-up {
        flex-direction: column-reverse;
        align-items: center;
        .product-up-l {
            flex-direction: column-reverse;
            width: 100%;
            .product-slider {
                flex-direction: row;
                svg {
                    transform: rotate(-90deg);
                }
            }
        }
    }
}

@media screen and(max-width: 340px) {
    .product-up {
        .product-up-r {
            .btn {
                width: 130px;
            }
        }
    }
}

@media screen and(max-width: 870px) {}
</style>
