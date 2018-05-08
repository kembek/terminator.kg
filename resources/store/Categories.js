export const state = () => ({
  "items": [
    {
      "id": 1,
      "image": "all.svg",
      "isShow": false,
      "link": "other",
      "title": "Другие"
    },
    {
      "id": 2,
      "image": "all.svg",
      "isShow": false,
      "link": "smartphones",
      "title": "Все смартфоны"
    },
    {
      "id": 3,
      "image": "game.svg",
      "isShow": false,
      "link": "hard-games",
      "title": "Тяжелые игры"
    },
    {
      "id": 4,
      "image": "camera.svg",
      "isShow": false,
      "link": "best-camera",
      "title": "Отличная камера"
    },
    {
      "id": 5,
      "image": "battery.svg",
      "isShow": false,
      "link": "active-using",
      "title": "Активное использование"
    },
    {
      "id": 6,
      "image": "universal.svg",
      "isShow": false,
      "link": "universal-smartphone",
      "title": "Универсальный смартфон"
    },
    {
      "id": 7,
      "image": "accessories.svg",
      "isShow": true,
      "link": "accesories-for-smartphones",
      "title": "Аксессуары для смартфона"
    },
    {
      "id": 8,
      "image": "charging.svg",
      "isShow": true,
      "link": "charging-device",
      "title": "Зарядные устройства"
    },
    {
      "id": 9,
      "image": "watch.svg",
      "isShow": true,
      "link": "smart-watch",
      "title": "Умные часы"
    },
    {
      "id": 10,
      "image": "phone.svg",
      "isShow": true,
      "link": "gadgets",
      "title": "Гаджеты и устройства"
    },
    {
      "id": 11,
      "image": "home-device.svg",
      "isShow": true,
      "link": "home-device",
      "title": "Товары для дома"
    },
    {
      "id": 12,
      "image": "headphone.svg",
      "isShow": true,
      "link": "headphones",
      "title": "Наушники и колонки"
    },
    {
      "id": 13,
      "image": "hits.jpg",
      "isShow": false,
      "link": "hits",
      "title": "Хиты продаж"
    },
    {
      "id": 14,
      "image": "new.jpg",
      "isShow": false,
      "link": "new",
      "title": "Новинки"
    },
    {
      "id": 15,
      "image": "recomendation.jpg",
      "isShow": false,
      "link": "recomendation",
      "title": "Рекомендуем"
    }
  ]

})

export const mutations = {
  SET_ITEMS(state, value) {
    state.items = value
  }
}


export const actions = {
  SetItems({
    commit
  }, value) {
    commit('SET_ITEMS', value)
  }
}

export const getters = {
  ItemsAll: state => {
    return state.items
  },
  Items: state => {
    return state.items.filter(item => {
      return item.isShow;
    })
  },
}
