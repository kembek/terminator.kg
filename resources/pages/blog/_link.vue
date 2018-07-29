<template>
<div class="article-conteiner">
    <div class="article-wrapper">
        <div class="article-title">
            <h2>{{post.title}}</h2>
            <div class="article-date">
                <IconDate />
                <span>{{post.updated_at | toDate}}</span>
            </div>
        </div>
        <div class="article-img">
            <img :src="'/images/post/'+ post.thumbnail">
        </div>
        <div v-html="post.body" class="article-text">
        </div>
        <div class="social-icons">
            Поделиться в:
            <social-sharing :url="`https://terminator.kg/blog/${post.link}/`" :title="post.meta_title" :description="post.meta_description" hashtags="terminator.kg,mi,xiaomi,интернет магазин,магазин" inline-template>
                <div>
                    <network network="vk">
                        <i class="fa fa-vk"></i>
                    </network>
                    <network network="facebook">
                        <i class="fa fa-facebook"></i>
                    </network>
                    <network network="odnoklassniki">
                        <i class="fa fa-odnoklassniki"></i>
                    </network>
                    <network network="whatsapp">
                        <i class="fa fa-whatsapp"></i>
                    </network>
                    <network network="telegram">
                        <i class="fa fa-telegram"></i>
                    </network>
                </div>
            </social-sharing>
        </div>
    </div>
</div>
</template>

<script>
import fecha from 'fecha'
fecha.masks.default = 'YYYY.MM.DD HH:mm:ss';

import IconDate from "~/assets/svg/icondate.svg";
import OK from "~/assets/svg/ok.svg";
import FB from "~/assets/svg/fb.svg";

export default {
    async asyncData({
        error,
        app,
        params
    }) {
        const post = await app.$axios
            .$get(`/api/blog/${params.link}`)
            .then(({
                data
            }) => {
                return data;
            })
            .catch(() => {
                return error({
                    statusCode: 404,
                    message: "Not found"
                });
            });
        return {
            post
        };
    },
    filters: {
        toDate(value) {
            return fecha.format(new Date(value), 'default');
        }
    },
    head() {
        return {
            title: this.post.title + " - Блог TERMINATOR.KG",
            meta: [{
                    hid: "og:title",
                    property: "og:title",
                    content: this.post.title + " - Блог | TERMINATOR.KG"
                },
                {
                    hid: "description",
                    name: "description",
                    content: this.post.meta_description + " | Блог TERMINATOR.KG"
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.post.meta_keywords + " | Блог TERMINATOR.KG"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: this.post.meta_description + " | Блог TERMINATOR.KG"
                }
            ]
        };
    },
    components: {
        IconDate,
        OK,
        FB
    }
}
</script>

<style lang="less">
@import '~assets/css/themes/default.less';
.article-conteiner {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 30px;
    .article-wrapper {
        max-width: 1200px;
        width: 100%; // border: 1px solid white;
        background-color: @color-bg_dark;
        .article-title {
            padding: 30px 0 40px 50px;
            h2 {
                color: @color-dark;
                font-size: 26px;
            }
            .article-date {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #95989a;
                margin-top: 8px;
                svg {
                    width: 21px;
                    fill: #95989a;
                }
                span {
                    margin-left: 5px;
                }
            }
        }
        .article-img {
            img {
                width: 100%;
                height: 70vh;
                object-fit: cover;
                max-height: 400px;
            }
        }
        .article-text {
            padding: 35px 50px 50px 50px;
            font-size: 18px;
            p {
                overflow-wrap: break-word;
                padding: 5px 0;
            }
            img {
                text-align: center;
                max-width: 100%;
                margin: 5px;
                object-fit: contain;
            }
            a {
                color: #569d87 !important;
                text-decoration: none;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                padding: 10px 0;
                font-size: 130%;
                text-transform: uppercase;
                font-family: "Helvetica Neue Thin", sans-serif;
            }
        }
        .social-icons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 60px 20px 10px 0;
            span {
                cursor: pointer;
                i {
                    font-size: 24px;
                    margin: 5px;
                    &:hover {
                        color: #569d87
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 830px) {
    .article-conteiner {
        padding-top: 70px;
        .article-wrapper {
            .article-title {
                padding: 15px 0 25px 30px;
                h2 {
                    color: #569d87;
                    font-size: 20px;
                }
            }
            .article-text {
                padding: 35px 10px 50px 10px;
                font-size: 18px;
            }
        }
    }
}
</style>
