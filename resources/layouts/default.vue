<template>
<div class="container" v-if="isTime">
    <transition name="popup">
        <preloader v-if="loading" :text="text" />
    </transition>
    <Order />
    <MyHeader />
    <Slider :speed="speedMainSlider" v-if="this.$route.fullPath == '/'" />
    <div v-else style="padding-top: 100px;" />
    <Basket />
    <div class="content">
        <nuxt />
    </div>
    <MyFooter />
</div>
<Timer :dedline="dedline" v-else/>
</template>

<script>
import MyHeader from "~/components/Header";
import Slider from "~/components/Slider";
import MyFooter from "~/components/Footer";
import Basket from "~/components/basket/";
import preloader from "~/components/preloader";
import Timer from "~/components/TimerPage";
import Order from "~/components/forms/order";

import settings from "~/settings";

export default {
    components: {
        Order,
        preloader,
        MyHeader,
        Slider,
        MyFooter,
        Basket,
        Timer
    },
    data() {
        return {
            speedMainSlider: settings.speedMainSlider,
            loading: true,
            online: true,
            text: "Идёт загрузка",
            dedline: "2018/06/01 18:00:00",
            isTime: true
        };
    },
    created() {
        this.isTime = new Date(this.dedline).getTime() <= Date.now();
        this.ready(() => {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        });
    },
    methods: {
        ready(fn) {
            if (process.browser) {
                window.onload = () => {
                    fn();
                };
                if (
                    document.attachEvent ?
                    document.readyState === "complete" :
                    document.readyState !== "loading"
                ) {
                    setTimeout(() => {
                        fn();
                    }, 1000);
                } else {
                    document.addEventListener("DOMContentLoaded", () => {
                        setTimeout(() => {
                            fn();
                        }, 1000);
                    });
                }
                setTimeout(() => {
                    if (!this.loading) fn();
                }, 1000);
            }
        }
    }
};
</script>

<style lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    padding-bottom: 6px;
    .page {
        max-width: 1200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}
</style>
