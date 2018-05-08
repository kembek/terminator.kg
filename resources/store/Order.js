export const state = () => ({
  "items": [],
})

export const mutations = {
  SET_ITEMS(state, value) {
    state.items = value
  },
  ADD_PRODUCT(state, value) {
    var temp = [];
     temp = state.items
     temp.push(value)
    state.items = temp
  }
}

export const actions = {
  SetItems({
    commit
  }, value) {
    commit('SET_ITEMS', value)
  },
  AddProduct({
    commit,state
  }, value) {
    commit('ADD_PRODUCT', value)
  }
}

export const getters = {
  Items: state => {
    return state.items
  },
}
