export const state = () => ({
  "items": [],
})

export const mutations = {
  SET_ITEMS(state, value) {
    state.items = value
  },
  ADD_PRODUCT(state, value) {
    var temp = [] = state.items
    temp.push(value)
    state.items = temp
  },
  UPDATE_PRODUCT(state,value) {

  }
}

export const actions = {
  SetItems({
    commit
  }, value) {
    commit('SET_ITEMS', value)
  },
  Update({
    commit,
    state
  }, value) {
    commit('UPDATE_PRODUCT', value)
  },
  AddProduct({
    commit,
    state
  }, value) {
    // var temp;
    // state.items.forEach((element,i) => {
    //   if(element.product.id == value.product.id)
    //   {
    //     commit('UPDATE_PRODUCT')
    //   }
    // });
    commit('ADD_PRODUCT', value)
  }
}

export const getters = {
  Items: state => {
    return state.items
  },
}
