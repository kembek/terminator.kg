export const state = () => ({
  items: [
    {
      id: 0,
      title: 'Redmi 5 Plus 64GB',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 11000,
      prices: [{
        color: "black",
        price: 12000
      }, {
        color: "white",
        price: 11000
      }]
    },     {
      id: 1,
      title: 'Redmi 5 Plus 32GB',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 11000,
      prices: [{
        color: "black",
        price: 12000
      }, {
        color: "white",
        price: 11000
      }]
    },    {
      id: 2,
      title: 'Mi Max 4',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 11000,
      prices: [{
        color: "black",
        price: 12000
      }, {
        color: "white",
        price: 11000
      }]
    },    {
      id: 3,
      title: 'Redmi 3',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 11000,
      prices: [{
        color: "black",
        price: 12000
      }, {
        color: "white",
        price: 11000
      }]
    },    {
      id: 4,
      title: 'Mi max 2',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 11000,
      prices: [{
        color: "black",
        price: 12000
      }, {
        color: "white",
        price: 11000
      }]
    },    {
      id: 5,
      title: 'Redmi 4A',
      image: '1-redmi-wg-22.png',
      images: [],
      price: 13230,
      prices: [{
        color: "black",
        price: 1400
      }, {
        color: "white",
        price: 15000
      }]
    },
]
})

export const mutations = {
  SHOW(state, value) {
    state.isShow = value
  }
}

export const actions = {
  Show({ commit }, value) {
    commit('SHOW', value)
  }
}

export const getters = {
  Items: state => {
      return state.items
  },
}
