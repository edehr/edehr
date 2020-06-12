import InstoreHelper from './instoreHelper'
const debug = false

const state = {
  classList: [],
  activeVisit: {}
}

const getters = {
  list: state => {
    return state.classList
  }
}

const actions = {
  getClassList (context, activityId) {
    if (debug) console.debug('Class List store get class list for ', activityId)
    let api = 'activities'
    let url = `class-list/${activityId}`
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        let classList = response.data['classList']
        let len = classList.length
        classList.forEach((elem, index) => {
          elem.index = index
          elem.listLength = len
        })
        return classList
      })
  },

}

const mutations = {
  setClassList: (state, cData) => {
    if (debug) console.log('setClassList ', cData)
    state.classList = cData
  },
  setActiveStudent: (state, visit) => {
    state.activeVisit = visit
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
