export const state = () => ({
  menu: []
})

export const mutations = {
  SET_MENU(state, value) {
    state.menu = value
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, {
    $axios
  }) {
    await $axios.$get("/api/menu/")
      .then(res => {
        commit('SET_MENU', res.data)
      })
      .catch(error => {});
  },
  Set({
    commit
  }, value) {
    commit('SET_MENU', value)
  }
}

export const getters = {
  GetMenu: state => {
    return state.menu
  },
}
