import InstoreHelper from './instoreHelper'
const API = 'visits'
const debug = false

const state = {
  visitList: [],
}
const getters = {
  getVisitList: state => {
    return state.visitList
  },
}
const actions = {
  loadUserVisits (context, userId) {
    if (userId) {
      let url = 'user/' + userId
      return InstoreHelper.getRequest(context, API, url).then(response => {
        if (debug) console.log('loadVisit what is the response? ', response.data)
        let results = response.data
        context.commit('setVisitList', results)
      })
    } else {
      context.commit('setVisitList', [])
    }
  }
}
const mutations = {
  setVisitList: (state, list) => {
    state.visitList = list
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
