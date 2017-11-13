
const INCREASE = 'INCREASE'

const initialState = {
  count: 0,
}

const mutations = {
  [INCREASE](state, preload) {
    state.count++
  }
}

const actions = {
  increase({ commit }, preload) {
    commit('INCREASE', preload)
  },
}

export default {
  // namespaced: true,
  state: Object.assign({}, initialState),
  mutations,
  actions,
}