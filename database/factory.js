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
const prod = [
	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'redmi-5a-gold-1.jpg',
    title: 'Xiaomi Redmi 5A 2GB+16GB (Global Version)',
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Клатч-Mi-DSP/5.jpg',
    "title": "Клатч Xiaomi",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Xiaomi Simple City/6.jpg',
    "title": "Мини-рюкзак Xiaomi Simple City",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Рюкзак Mi Urban Lifestyle/1.jpg',
    "title": "Рюкзак Xiaomi Urban Lifestyle",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Рюкзак Mi Classic Business/2.jpg',
    "title": "Рюкзак Xiaomi Classic Business",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Аудио-колонка Mi Square Box/5.jpg',
    "title": "Аудио колонка Xiaomi Square Box #61c3fftooth Speaker",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Аудио-колонка Xiaomi #61c3fftooth Speaker Color/2.jpg',
    "title": "Аудио колонка Xiaomi Colorful #61c3fftooth Speaker",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'смарт-часы Amazfit Bip/8.jpg',
    "title": "смарт-часы Amazfit Bip",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Xiaomi Redmi Note 5 Pro/1.jpg',
    "title": "Xiaomi Redmi Note 5 Pro 3GB+32GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Xiaomi Redmi Note 5 Pro/8.jpg',
    "title": "Xiaomi Redmi Note 5 Pro 4GB+64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'redmi-5-plus-gold-1.jpg',
    "title": "Xiaomi Redmi 5 Plus 3GB+32GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 5 Plus/3.jpg',
    "title": "Смартфоны Xiaomi Redmi 5 Plus 4GB+64GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 5 Plus/8.jpg',
    "title": "Смартфоны Xiaomi Redmi 5 Plus 3GB+32GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'mi-a1-gold-1.jpg',
    "title": "Xiaomi Mi A1 4GB+32GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Ремешки для Mi Band 2/1.jpg',
    "title": "Металлические ремешки для Mi Band 2",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Ремешки для Mi Band 2/7.jpg',
    "title": "Цветные ремешки для Mi Band 2",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Защитное стекло_Nillkin/2.jpg',
    "title": "Защитные стекла с олеофобным покрытием | Nillkin",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Защитное стекло_3D/2.jpg',
    "title": "Защитные стекла | 3D",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Защитное стекло_обычное/3.jpg',
    "title": "Защитные стекла | 2D",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },	{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 4A/5.jpg',
    "title": "Xiaomi Redmi 4A 2GB+16GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Ремешки для Mi Band 2/9.jpg',
    "title": "Кожаные ремешки для Mi Band 2",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi Max 2/6.jpg',
    "title": "Xiaomi Mi Max 2 4GB+64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi Mix 2/3.jpg',
    "title": "Xiaomi Mi Mix 2 6GB+64GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'mi-note-3-black-1.jpg',
    "title": "Xiaomi Mi Note 3 6GB+128GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi Note 3/1.jpg',
    "title": "Xiaomi Mi Note 3 6GB+64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'mi-a1-gold-1.jpg',
    "title": "Xiaomi Mi A1 4GB+64GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'mi6-black-1.jpg',
    "title": "Xiaomi Mi 6 6GB+128GB Ceramic",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi 6/4.jpg',
    "title": "Xiaomi Mi 6 6GB+64GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi 6/4.jpg',
    "title": "Xiaomi Mi 6 6GB+64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi 5X/7.jpg',
    "title": "Xiaomi Mi 5X 4GB+64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi 5X/5.jpg',
    "title": "Xiaomi Mi 5 3/32 GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'redmi-4x-1.jpg',
    "title": "Xiaomi Redmi Note 4X 3GB+32GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi Note 4X/3.jpg',
    "title": "Xiaomi Redmi Note 4X 3GB+32GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 4X/5.jpg',
    "title": "Xiaomi Redmi 4X 3GB+32GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 4X/7.jpg',
    "title": "Xiaomi Redmi 4X 2GB+16GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 4A/9.jpg',
    "title": "Xiaomi Redmi 4A 2GB+32GB (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Redmi 4A/6.jpg',
    "title": "Xiaomi Redmi 4A 2GB+16GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Wi-Fi Router mini/1.jpg',
    "title": "Xiaomi Mi Wi-Fi Router mini",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Wi-Fi Router 3/1.jpg',
    "title": "Wi-Fi Router 3",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'VR Play/1.jpg',
    "title": "Xiaomi Mi VR Play",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'VR Glass/6.jpg',
    "title": "Xiaomi Mi VR Glass",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Power Bank 2 20.000 mAh/1.jpg',
    "title": "Xiaomi Power Bank 2 20.000 mAh",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Power Bank 2 10.000 mAh/1.jpg',
    "title": "Xiaomi Power Bank 2 10.000 mAh",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Mi Band 2/2.jpg',
    "title": "смарт-браслет Xiaomi Mi Band 2",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Xiaomi Yi Action/1.jpg',
    "title": "Xiaomi Yi Action",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Экшен кам. Yi 4K/1.jpg',
    "title": "Xiaomi Yi 4K",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Видеорег. Mi Yi/1.jpg',
    "title": "Xiaomi Yi Car Wi-Fi DVR",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Видеорег. Mi Jia/2.jpg',
    "title": "Xiaomi MiJia Car Wi-Fi DVR",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфоны Xiaomi Mi 6/7.jpg',
    "title": "Xiaomi Mi 5 3/64",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Смартфон Xiaomi Redmi 5A/6.jpg',
    "title": "Xiaomi Mi 5S 3/64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: '9f16476acbc9e08d2c90dc22d1a6c79b_thumb_5662fe976180f779.jpg',
    "title": "Xiaomi Mi 5S 3/64GB",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'redmi-5-plus-gold-1.jpg',
    "title": "Redmi 5 32ГБ (Global Version)",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  },{
    user_id: 1,
    stock_status_id: 1,
    thumbnail: 'Наушники Hybrid Pro/1.jpg',
    "title": "Наушники Xiaomi Hybrid Pro HD",
    description: '',
    information: '',
    is_hit: 1,
    is_recommend: 1,
    is_status: true
  }
]
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
  return prod[i]
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
