import InstoreHelper from './instoreHelper'
const API = 'visits'
const debug = false
const IS_CONTENT_EDITING = 'isContentEditor'
const SEED_EDIT_ID = 'seedEditId'
const VISIT_ID = 'visitId'
/*
const SignOn = new mongoose.Schema({
  personaName: { type: String },
  personaProfession: { type: String }
})
 */
const state = {
  sVisitData: {},
  simSignOnData: {},
  simDateTime: {  },
  _visitId: undefined,
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
  lastUpdateDate: state => {
    // unlike other models this one's update field is called lastVisitDate
    return state.sVisitData.lastVisitDate
  },
  simSignOnData: state => state.simSignOnData,
  isSimSignedOn: state => state.simSignOnData && state.simSignOnData.personaName,
  simDateTime: state => state.simDateTime,
  simDate: state => state.simDateTime.cDate,
  simTime: state => state.simDateTime.cTime,
  visitData: state => state.sVisitData,
  visitId: state => state._visitId
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  async clearVisitData (context) {
    context.commit('setVisitData', {})
    context.commit('setVisitId', undefined)
    context.commit('setSeedEditId', undefined)
    localStorage.removeItem(IS_CONTENT_EDITING)
  },
  async changeVisitId (context, visitId) {
    const postBody = { visitId: visitId }
    return InstoreHelper.postRequest(context, API, 'change-visit', postBody).then(results => {
      return results.data.token
    })
  },
  setVisitIdViaSh (context, visitId) {
    // console.log('Set visit id', vId)
    context.commit('setVisitId', visitId)
  },
  /**
   * Convenience action that does three common tasks. Sets a visitId into storage, loads the visit record,
   * and then loads the activity record associated with the visit.
   *
   * @param context
   * @param visitId
   * @returns {Promise<*>}
   */
  // See loadActivityRecord in activityStore.js
  // async setLoadVisitActivity (context, visitId) {
  //   await context.dispatch('setVisitId', visitId)
  //   await context.dispatch('loadVisitRecord')
  //   return await context.dispatch('activityStore/loadActivityRecord', {}, {root:true})
  // },
  loadVisitRecord (context) {
    const visitId = context.getters.visitId
    if (!visitId) {
      console.error('Visit error loading record. Must set visitId first!')
      return Promise.reject('Missing visitId')
    }
    let url = 'get/' + visitId
    if (debug) console.log('loadVisit api call ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let visit = response.data ? response.data.visit : undefined
      if (!visit) {
        throw new Error('ERROR No visit information for ' + visitId)
      }
      if (debug) console.log('loadVisit what is the visitInfo? ', visit)
      context.commit('setVisitData', visit)
      context.commit('setSimDateTime', visit.simulationDateTime)
      context.commit('setSimSignOn', visit.simulationSignOn)
    })
  },
  restoreAsInstructor (context) {
    return InstoreHelper.postRequest(context, API, 'restoreAsInstructor').then(results => {
      return results.data.token
    })
  },
  async simulationSignOn (context, postBody) {
    const results = await InstoreHelper.postRequest(context, API, 'sim-sign-on', postBody)
    const visit = results.data
    context.commit('setSimSignOn', visit.simulationSignOn)
  },
  async simulationSignOut (context, visitId ) {
    const postBody = { visitId: visitId }
    const results = await InstoreHelper.postRequest(context, API, 'sim-sign-out', postBody)
    // almost could assert that results.simulationSignOn === {} except mongoose creates an object with its own _id
    context.commit('setSimSignOn', results.simulationSignOn)
  },
  async loadSimulationSignIn (context, visitId ) {
    let url = 'get/' + visitId
    const response = await InstoreHelper.getRequest(context, API, url)
    const visit = response.data.visit
    context.commit('setSimSignOn', visit.simulationSignOn)
  },
  /**
   * Ideally let the loadVisitRecord set up the sim date time. Use this action to specifically update the sim date time
   * @param context
   * @param visitId
   * @returns {Promise<void>}
   */
  async loadSimulationDateTime (context, visitId ) {
    let url = 'sim-date-time/' + visitId
    const response = await InstoreHelper.getRequest(context, API, url)
    const simulationDateTime = response.data
    context.commit('setSimDateTime', simulationDateTime)
  },
  /**
   *
   * @param context
   * @param postBody { visitId: id, cDate: dateStr, cTime: timeStr }
   * @returns {Promise<void>}
   */
  async setSimulationDateTime (context, postBody) {
    const results = await InstoreHelper.postRequest(context, API, 'sim-date-time', postBody)
    const visit = results.data
    context.commit('setSimDateTime', visit.simulationDateTime)
  },
  visitAsStudent (context, currentActivityId) {
    const postBody = { activityId: currentActivityId }
    return InstoreHelper.postRequest(context, API, 'visitAsStudent', postBody).then(results => {
      return results.data.token
    })
  }
}

const mutations = {
  initialize: function (state) {
    state._isDevelopingContent = localStorage.getItem(IS_CONTENT_EDITING) === 'true'
    state._seedEditId = localStorage.getItem(SEED_EDIT_ID)
    state._visitId = localStorage.getItem(VISIT_ID)
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
  setVisitId: (state, id) => {
    if(debug) console.log('setVisitId ', id)
    // This value needs to survive a browser refresh so make the source of truth the session storage
    if (id) {
      localStorage.setItem(VISIT_ID, id)
    } else {
      localStorage.removeItem(VISIT_ID)
    }
    state._visitId = id
  },
  setSimSignOn: (state, signOn) => {
    state.simSignOnData = signOn // {personaName: { type: String }, personaProfession: { type: String } }
  },
  setSimDateTime: (state, simDateTime) => {
    state.simDateTime = simDateTime // {cDate: { type: String }, cTime: { type: String } }
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
