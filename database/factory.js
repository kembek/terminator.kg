'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')
const _ = require('lodash')
const cat = [
	{
		"id" : 1,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "all.svg",
		"title" : "Все смартфоны",
		"link" : "smartphones",
		"meta_keywords" : "купить смартфоны Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Смартфоны Xiaomi ждут вас! Все модели телефонов, Новинки → Купить можно здесь…",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 2,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "game.svg",
		"title" : "Тяжелые игры",
		"link" : "hard-games",
		"meta_keywords" : "купить для тяжелых игры смартфон Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Игровой смартфон с отличной батареей ждет вас! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 3,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "camera.svg",
		"title" : "Отличная камера",
		"link" : "best-camera",
		"meta_keywords" : "купить с отличной камерой смартфон Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Смартфон с потрясающей камерой ждет вас! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 4,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "battery.svg",
		"title" : "Активное использование",
		"link" : "active-using",
		"meta_keywords" : "купить для активного использование смартфон Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Смартфон с мощной батареей ждет вас! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 5,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "universal.svg",
		"title" : "Универсальный смартфон",
		"link" : "universal-smartphone",
		"meta_keywords" : "купить универсальный смартфон Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Смартфон для всех задач! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 6,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "accessories.svg",
		"title" : "Аксессуары для смартфона",
		"link" : "accesories-for-smartphones",
		"meta_keywords" : "купить аксессуары для смартфона Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Защитные стекла, чехлы и бампера и многое другое! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 7,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "charging.svg",
		"title" : "Зарядные устройства",
		"link" : "charging-device",
		"meta_keywords" : "купить зарядные устройства в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Зарядные устройства! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 8,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "watch.svg",
		"title" : "Умные часы",
		"link" : "smart-watch",
		"meta_keywords" : "купить умные часы Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Умные часы! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 9,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "phone.svg",
		"title" : "Гаджеты и устройства",
		"link" : "gadgets",
		"meta_keywords" : "купить гаджеты и устройства Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Гаджеты и устройства! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 10,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "home-device.svg",
		"title" : "Товары для дома",
		"link" : "home-device",
		"meta_keywords" : "купить товары для дома Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Товары для дома! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 11,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "headphone.svg",
		"title" : "Наушники и колонки",
		"link" : "headphones",
		"meta_keywords" : "купить наушники и колонки Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Наушники и колонки! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 1,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 12,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "hits.jpg",
		"title" : "Хиты продаж",
		"link" : "hits",
		"meta_keywords" : "Хиты продаж Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Хиты продаж! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 13,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "new.jpg",
		"title" : "Новинки",
		"link" : "new",
		"meta_keywords" : "Новинки Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Новинки! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	},
	{
		"id" : 14,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "recomendation.jpg",
		"title" : "Рекомендуем",
		"link" : "recomendation",
		"meta_keywords" : "Рекомендуем Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Рекомендуем! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	}
]




Factory.blueprint('AUTHS/Group', (faker, i, data) => {
  return {
    title: data.title,
    description: faker.sentence()
  }
})

Factory.blueprint('AUTHS/Access', (faker, i, data) => {
  return {
    post: data.post,
    product: data.product,
    order: data.order,
    access: data.access,
    faq: data.faq,
    image: data.image,
    color: data.color,
    auth: data.auth,
    setting: data.setting
  }
})

Factory.blueprint('AUTHS/User', (faker) => {
  return {
    username: faker.username(),
    email: 'admin@terminator.kg',
    password: '123',
    is_status: true
  }
})

Factory.blueprint('FAQS/Category', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 2) })
  }
})

Factory.blueprint('FAQS/Faq', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 4) }),
    body: faker.paragraph()
  }
})

Factory.blueprint('FAQS/Question', (faker) => {
  return {
    email: faker.email(),
    question: faker.sentence({ words: _.random(3, 7) }),
    username: faker.name()
  }
})

Factory.blueprint('FAQS/Review', (faker) => {
  return {
    email: faker.email(),
    img: faker.url({ extensions: ['jpg', 'png'] }),
    username: faker.name(),
    description: faker.sentence({ words: _.random(5, 10) })
  }
})

Factory.blueprint('POSTS/Category', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 2) })
  }
})

Factory.blueprint('POSTS/Post', (faker, i, data) => {
  return {
    user_id: data.user_id,
    thumbnail: faker.url({ extensions: ['jpg', 'png'] }),
    title: faker.sentence({ words: _.random(1, 4) }),
    body: faker.paragraph()
  }
})

Factory.blueprint('PRODUCTS/Categories', (faker, i, data) => {
  return cat[i]
})

Factory.blueprint('PRODUCTS/ProductCategory', (faker, i, data) => {
  return {
    product_id: data.product_id,
    category_id: data.category_id
  }
})

Factory.blueprint('PRODUCTS/Product', (faker, i, data) => {

  return {
    user_id: data.user_id,
    stock_status_id: _.random(1, 3),
    thumbnail: 'https://picsum.photos/800/500/?',
    title: faker.sentence({ words: _.random(3, 6) }),
    description: faker.paragraph(),
    information: faker.paragraph(),
    is_hit: faker.bool({ likelihood: 20 }),
    is_recommend: faker.bool({ likelihood: 30 }),
    is_status: true
  }
})

Factory.blueprint('PRODUCTS/Video', (faker, i, data) => {
  return {
    user_id: data.user_id,
    url: faker.url({ domain: 'www.youtube.com' })
  }
})

Factory.blueprint('PRODUCTS/ProductImage', (faker, i, data) => {
  return {
    url: faker.url({ extensions: ['jpg', 'png'] })
  }
})

Factory.blueprint('PRODUCTS/Price', (faker, i, data) => {
  return {
    price: faker.floating({ fixed: 2, min: 0, max: 9999999 })
  }
})

Factory.blueprint('PRODUCTS/Image', (faker, i, data) => {
  return {
    title: faker.word({ length: 10 }),
    url: faker.url({ extensions: ['jpg', 'png'] })
  }
})

Factory.blueprint('ORDERS/Customer', (faker) => {
  return {
    email: faker.email(),
    username: faker.username(),
    phone: faker.phone(),
    is_status: faker.bool({ likelihood: 80 })
  }
})

Factory.blueprint('ORDERS/Order', (faker, i, data) => {
  return {
    comment: faker.sentence(),
    is_status: faker.bool({ likelihood: 20 })
  }
})
