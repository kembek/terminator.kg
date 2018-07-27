<template>
<div class="news--component">
    <h2 class="news--title">Блог</h2>
    <div class="news--module" v-for="(item, index) in items" :key="index">
        <nuxt-link :to="'/blog/' + item.link" class="news--item">
            <img :src="'/images/post/'+item.thumbnail" class="news--image">
            <span class="news--content-title">{{item.title}}</span>
        </nuxt-link>
    </div>
    <div class="load-container">

        <PulseLoader v-if="isLoade" />
        <GetLoader v-else-if="!isLoade && !isLoadError && !isLoadAll" @update="Get" />
        <ErrorLoader v-else-if="isLoadError" @update="Get" />
    </div>
</div>
</template>

<script>
import IconDate from "~/assets/svg/icondate.svg";

import PulseLoader from "~/components/Loader/Pulse.vue";
import GetLoader from "~/components/Loader/Get.vue";
import ErrorLoader from "~/components/Loader/Error.vue";

export default {
    async asyncData({
        error,
        app,
        params
    }) {
        let items = await app.$axios
            .$get(`/api/blog?page=0`)
            .then(({
                data
            }) => {

                return data;
            })
            .catch(e => {
                return error({
                    statusCode: 404,
                    message: "Not found"
                });
            });
        return {
            items
        };
    },
    data() {
        return {
            isLoade: false,
            isLoadError: false,
            isLoadAll: false,
            page: 1
        };
    },
    head() {
        return {
            title: "Блог | TERMINATOR.KG",
            meta: [{
                    hid: "og:title",
                    property: "og:title",
                    content: "Блог интернет магазина TERMINATOR.KG"
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Блог интернет магазина TERMINATOR.KG"
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "Блог интернет магазина TERMINATOR.KG"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: "Блог интернет магазина TERMINATOR.KG"
                }
            ]
        };
    },
    components: {
        PulseLoader,
        ErrorLoader,
        IconDate,
        GetLoader
    },
    mounted() {
        if (this.items.length < 36) this.isLoadAll = true;
    },
    methods: {
        async Get() {
            this.isLoadError = false;
            this.isLoade = true;
            await this.$axios
                .$get(`/api/blog?page=` + this.page)
                .then(({
                    data
                }) => {
                    this.items = this.items.concat(data);
                    if (data.length > 0) this.page++;
                    else this.isLoadAll = true;
                    this.isLoade = false;
                })
                .catch(e => {
                    this.isLoadError = true;
                    this.isLoade = false;
                });
        }
    }
};
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
@color-main : #569d87;
@color-main-active : #ff6600;
.news--module,
.news--module * {
    transition: all 0.5s;
}

.news--module .news--content * {
    transition: all 0s;
}

.news--component {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    align-content: center;
    align-items: center;
    margin: 20px 0;
    .load-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .load-more {
            cursor: pointer;
            margin: 30px 5px;
            padding: 20px 5px;
            width: 300px;
            background-color: @color-main;
            color: white;
            text-transform: uppercase;
            border: none;
        }
        p {
            margin: 30px 5px;
            padding: 10px 5px;
            color: #757575;
        }
    }
    .news--title {
        margin-left: 5%;
        width: 100%;
        color: @color-dark;
        font-size: 30px;
        font-weight: 200;
        text-transform: uppercase;
    }
    .news--module {
        width: 100%;
        max-width: 450px;
        margin: 25px 25px 0 25px;
        background-color: @color-bg_dark;
        animation: begin-block .8s ease-in-out;
        .news--item {
            width: 100%;
            text-decoration: none; // border: solid 1px @color-main;
            display: flex;
            flex-direction: column;
            height: 270px;
            overflow: hidden;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            .news--image {
                height: 100%;
                max-height: 200px;
                width: 100%;
                object-fit: cover;
            }
            .news--content-title {
                padding: 10px;
                color: @color-dark;
                font-size: 18px;
                font-weight: 200;
                max-height: 40px;
                line-height: 24px;
                letter-spacing: 1px;
                overflow: hidden;
            }
        }
        &:hover {
            transform: scale(1.05, 1.05);
        }
    }
}

@media screen and (max-width: 1550px) {
    .news--component {
        .news--module {
            max-width: 350px;
            .news--item {
                height: 220px;
                .news--image {
                    max-height: 150px;
                }
            }
        }
    }
}
</style>
