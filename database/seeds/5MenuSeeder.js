'use strict'


const Factory = use('Factory')
const Menu = use('SETTINGS/Menu')

class MenuSeeder {
  async run() {

    let menus = [{
      id: 1,
      parent_id: null,
      user_id: 1,
      title: "Смартфоны",
      link: "/categories/vse-smartfony/",
      is_local: true,
      is_status: true,
      sort: 0
    }, {
      id: 2,
      parent_id: 1,
      user_id: 1,
      title: "Все смартфоны",
      link: "/categories/vse-smartfony/",
      is_local: true,
      img: 'all.svg',
      is_status: true,
      sort: 0
    }, {
      id: 3,
      parent_id: 1,
      user_id: 1,
      title: "Тяжелые игры",
      link: "/categories/tyazhelye-igry",
      is_local: true,
      img: 'all.svg',
      is_status: true,
      sort: 0
    }, {
      id: 4,
      parent_id: 1,
      user_id: 1,
      title: "Отличная камера",
      link: "/categories/otlichnaya-kamera",
      is_local: true,
      img: 'camera.svg',
      is_status: true,
      sort: 0
    }, {
      id: 5,
      parent_id: 1,
      user_id: 1,
      title: "Активное использование",
      link: "/categories/aktivnoe-ispolzovanie",
      is_local: true,
      img: 'battery.svg',
      is_status: true,
      sort: 0
    }, {
      id: 6,
      parent_id: 1,
      user_id: 1,
      title: "Универсальный смартфон",
      link: "/categories/universalnyj-smartfon",
      is_local: true,
      img: 'universal.svg',
      is_status: true,
      sort: 0
    }, {
      id: 7,
      parent_id: null,
      user_id: 1,
      title: "Другое",
      link: "/categories/",
      is_local: true,
      is_status: true,
      sort: 0
    }, {
      id: 8,
      parent_id: 7,
      user_id: 1,
      title: "Аксессуары для смартфона",
      link: "/categories/aksessuary-dlya-smartfona",
      is_local: true,
      img: 'accessories.svg',
      is_status: true,
      sort: 0
    }, {
      id: 9,
      parent_id: 7,
      user_id: 1,
      title: "Зарядные устройства",
      link: "/categories/zaryadnye-ustrojstva",
      is_local: true,
      img: 'charging.svg',
      is_status: true,
      sort: 0
    }, {
      id: 10,
      parent_id: 7,
      user_id: 1,
      title: "Умные часы",
      link: "/categories/umnye-chasy",
      is_local: true,
      img: 'watch.svg',
      is_status: true,
      sort: 0
    }, {
      id: 11,
      parent_id: 7,
      user_id: 1,
      title: "Гаджеты и устройства",
      link: "/categories/gadzhety-i-ustrojstva",
      is_local: true,
      img: 'phone.svg',
      is_status: true,
      sort: 0
    }, {
      id: 12,
      parent_id: 7,
      user_id: 1,
      title: "Товары для дома",
      link: "/categories/tovary-dlya-doma",
      is_local: true,
      img: 'home-device.svg',
      is_status: true,
      sort: 0
    }, {
      id: 13,
      parent_id: 7,
      user_id: 1,
      title: "Наушники и колонки",
      link: "/categories/naushniki-i-kolonki",
      is_local: true,
      img: 'headphone.svg',
      is_status: true,
      sort: 0
    }, {
      id: 14,
      parent_id: null,
      user_id: 1,
      title: "Контакты",
      link: "/contacts/",
      is_local: true,
      is_status: true,
      sort: 0
    }]
    try {
      await Factory.model('SETTINGS/Menu').createMany(menus.length, menus)
    } catch (error) {}
    
    console.log('Menus seeds done!')
  }
}

module.exports = MenuSeeder
