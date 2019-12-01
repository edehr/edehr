// import InstoreHelper from './instoreHelper'
// import { setApiError } from '../../helpers/ehr-utils'
// const API = '???'
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
}

const mutations = {
  setClassList: (state, cData) => {
    if(debug) console.log('setClassList ', cData)
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
