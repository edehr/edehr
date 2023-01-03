import InstoreHelper from './instoreHelper'
const API = 'visits'
const debug = false
const IS_CONTENT_EDITING = 'isContentEditor'
const SEED_EDIT_ID = 'seedEditId'

const state = {
  sVisitData: {},
  topLevelMenu: '',
  _seedEditId: '',
  _isDevelopingContent: false, // disable, by default, This sets the ability to create content if user is an instructor
}

const getters = {
  activityId: state => {
    return state.sVisitData.activity
  },
  activityDataId: state => {
    return state.sVisitData.activityData
  },
  // isDeveloper: state => {
  // the isDeveloper field is the same as isInstructor see lti on server
  //   return state.sVisitData.isDeveloper
  // },
  isDevelopingContent: state => {
    return state._isDevelopingContent
  },
  isSeedEditing: state => {
    if (debug) console.log('isSeedEditing',state._seedEditId)
    return state._seedEditId && state._seedEditId.length > 0
  },
  role: state => {
    return state.sVisitData.role
  },
  seedEditId: state => {
    return state._seedEditId
  },
  returnUrl: state => {
    return state.sVisitData.returnUrl
  },
  lastUpdateDate: state => {
    // unlike other models this one's update field is called lastVisitDate
    return state.sVisitData.lastVisitDate
  },
  visitData: state => state.sVisitData
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearVisitData (context) {
    context.commit('setVisitData', {})
    context.commit('setSeedEditId', undefined)
    localStorage.removeItem(IS_CONTENT_EDITING)
  },
  loadVisit2 (context, visitId) {
    let url = 'get/' + visitId
    if(debug) console.log('loadVisit api call ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let visit = response.data ? response.data.visit : undefined
      if (!visit) {
        throw new Error('ERROR No visit information for ' + visitId)
      }
      if(debug) console.log('loadVisit what is the visitInfo? ', visit)
      context.commit('setVisitData', visit)
    })
  }
}

const mutations = {
  initialize: function (state) {
    state._isDevelopingContent = localStorage.getItem(IS_CONTENT_EDITING) === 'true'
    state._seedEditId = localStorage.getItem(SEED_EDIT_ID)
  },
  setSeedEditId: (state, value) => {
    if(debug) console.log('setSeedEditing ', value)
    // This value needs to survive a browser refresh so make the source of truth the session storage
    if (value) {
      localStorage.setItem(SEED_EDIT_ID, value)
    } else {
      localStorage.removeItem(SEED_EDIT_ID)
    }
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
