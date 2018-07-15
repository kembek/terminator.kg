export const state = () => ({
  items: []
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
  Items: state => {
    return state.items
  }
}
