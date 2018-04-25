export const state = () => ({
  items: [
    {
      id: 0,
      title: 'Redmi 5 Plus',
      image: 'hits.jpg',
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
      id: 0,
      title: 'Mi Max 4',
      image: 'hits.jpg',
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
      id: 0,
      title: 'Redmi  3',
      image: 'hits.jpg',
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
      id: 0,
      title: 'Mi max 2',
      image: 'hits.jpg',
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
      id: 0,
      title: 'Redmi 4A',
      image: 'hits.jpg',
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
