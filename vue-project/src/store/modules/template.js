import * as types from '../mutation-types'

// initial state
const state = {
  checkoutStatus: null,
}
// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout({ commit, state }, products) {
    commit(types.TEMPLATE, products)
  },
}

// mutations
const mutations = {
  [types.TEMPLATE](state) {
    state.checkoutStatus = 'successful'
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
