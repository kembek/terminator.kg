'use strict'

const cat = [
	{
		"id" : 1,
		"parent_id" : null,
		"user_id" : 1,
		"sort" : 0,
		"thumbnail" : "all.svg",
		"title" : "Все смартфоны",
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
		"meta_keywords" : "Рекомендуем Xiaomi в Бишкеке",
		"meta_description" : "⭐Низкие цены! Отличный сервис! Доставка по Бишкеку и Кыргызстану! ✅Рекомендуем! Цены, Отзывы, Обзор → Здесь...",
		"is_status" : 0,
		"created_at" : "2018-06-09 07:26:39",
		"updated_at" : "2018-06-09 07:26:39"
	}
]


const Factory = use('Factory')
const Database = use('Database')

class CategoriesSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('categories')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    await Factory.model('PRODUCTS/Categories').createMany(cat.length, cat)

    console.log('Categories seeds done!')
  }
}

module.exports = CategoriesSeeder
