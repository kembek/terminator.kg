'use strict'


const Menu = use('SETTINGS/Menu')

class MenuSeeder {
  async run() {
    let menu = [{
      parent_id: null,
      user_id: 1,
      title: "Смартфоны",
      link: "/categories/vse-smartfony/",
      is_local: true,
      img: 'all.svg',
      is_status: true,
      sort: 0
    },{
      parent_id: null,
      user_id: 1,
      title: "Тяжелые игры",
      link: "/categories/tyazhelye-igry",
      is_local: true,
      is_status: true,
      sort: 0
    },]
    Исправить
    await Menu.createMany(menu)
  }
}

module.exports = MenuSeeder
