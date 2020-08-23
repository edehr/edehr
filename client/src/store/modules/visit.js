import InstoreHelper from './instoreHelper'
const API = 'visits'
const debug = false
const IS_CONTENT_EDITING = 'isContentEditor'
const SEED_EDIT_ID = 'seedEditId'
const IS_READONLY_INSTRUCTOR = 'isReadOnlyInstructor'

const state = {
  sVisitData: {},
  topLevelMenu: '',
  _seedEditId: '',
  _isDevelopingContent: true, // enable, by default, the ability to create content if user is an instructor
  _isReadOnlyInstructor: false
}

const getters = {
  isInstructor: state => {
    return state.sVisitData.isInstructor
  },
  isDeveloper: state => {
    return state.sVisitData.isDeveloper
  },
  isStudent: state => {
    return state.sVisitData.isStudent
  },
  isDevelopingContent: state => {
    return state._isDevelopingContent
  },
  isSeedEditing: state => {
    if (debug) console.log('isSeedEditing',state._seedEditId)
    return state._seedEditId && state._seedEditId.length > 0
  },
  seedEditId: state => {
    return state._seedEditId
  },
  returnUrl: state => {
    return state.sVisitData.returnUrl
  },
  lastUpdateDate: state => {
    // unlike other models this one's update field is called lastVisitDate
    return state.dataStore.lastVisitDate
  },
  isReadOnlyInstructor: state => {
    return state._isReadOnlyInstructor
  },
  visitData: state => state.sVisitData
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearVisitData (context) {
    context.commit('setVisitData', {})
  },
  loadVisit2 (context, visitId) {
    let url = 'get/' + visitId
    if(debug) console.log('loadVisit api call ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      if(debug) console.log('loadVisit what is the response? ', response.data)
      let visitInfo = response.data
      if (!visitInfo || ! visitInfo.visit) {
        console.error('ERROR No visit information for ' + visitId)
        return
        // return invalid('ERROR No visit information for ' + visitId)
      }
      if(debug) console.log('loadVisit what is the visitInfo? ', visitInfo.visit)
      context.commit('setVisitData', visitInfo.visit)
    })
  }
}

const mutations = {
  initialize: function (state) {
    state._isDevelopingContent = localStorage.getItem(IS_CONTENT_EDITING) === 'true'
    state._isReadOnlyInstructor = localStorage.getItem(IS_READONLY_INSTRUCTOR) === 'true'
    state._seedEditId = localStorage.getItem(SEED_EDIT_ID)
  },
  setSeedEditId: (state, value) => {
    if(debug) console.log('setSeedEditing ', value)
    // This value needs to survive a browser refresh so make the source of truth the session storage
    localStorage.setItem(SEED_EDIT_ID, value)
    state._seedEditId = value
  },
  setIsDevelopingContent: (state, value) => {
    if(debug) console.log('setIsDevelopingContent isDeving', value)
    // This value needs to survive a browser refresh so make the source of truth the session storage
    localStorage.setItem(IS_CONTENT_EDITING, value)
    state._isDevelopingContent = value
  },
  setVisitData: (state, info) => {
    if(debug) console.log('visit store setVisitData ', info)
    state.sVisitData = info
  },
  topLevelMenu: (state, top) => {
    if(debug) console.log('visit store top level menu ' + (top ? top : 'empty'))
    state.topLevelMenu = top
  },
  setIsReadOnlyInstructor: (state, val) => {
    localStorage.setItem(IS_READONLY_INSTRUCTOR, val)
    state._isReadOnlyInstructor = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
