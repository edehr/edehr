import InstoreHelper from './instoreHelper'
import sKeys from '../../helpers/session-keys'
const API = 'visits'
const NAME = 'Visit'
const debug = false

function getIsDeving () {
  let sVal = sessionStorage.getItem(sKeys.IS_DEVING) || ''
  let result = sVal === 'true'
  if(debug) console.log('visit get getIsDeving sVal: "'+ result +'"')
  return result
}

const state = {
  sVisitData: {},
  isLoggedIn: !!sessionStorage.getItem(sKeys.USER_TOKEN),
  topLevelMenu: '',
  _isDevelopingContent: getIsDeving()
}

const getters = {
  isInstructor: state => {
    return state.sVisitData.isInstructor
  },
  isDeveloper: state => {
    return state.sVisitData.isDeveloper
  },
  hasDashboard: state => {
    let vi = state.sVisitData
    return vi ? vi.isInstructor || vi.isDeveloper : false
  },
  isStudent: state => {
    return state.sVisitData.isStudent
  },
  isDevelopingContent: state => {
    // let sessVal = getIsDeving()
    let stVal = state._isDevelopingContent
    if(debug) console.log('VisitStore isDeving state._isDevelopingContent', stVal)
    return stVal
  },
  returnUrl: state => {
    let prop =  state.sVisitData.returnUrl
    if(debug) console.log(NAME + ' get returnUrl', prop)
    return prop
  },
  lastUpdateDate: state => {
    // unlike other models this one's update field is called lastVisitDate
    let prop =  state.dataStore.lastVisitDate
    if(debug) console.log(NAME + ' get lastUpdateDate', prop)
    return prop
  },
}

const actions = {
  loadVisit2 (context, visitId) {
    let url = 'get/' + visitId
    if(debug) console.log('loadVisit api call ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      if(debug) console.log('loadVisit what is the response? ', response.data)
      let visitInfo = response.data
      if (!visitInfo || ! visitInfo.visit) {
        return invalid('ERROR No visit information for ' + visitId)
      }
      if(debug) console.log('loadVisit what is the visitInfo? ', visitInfo.visit)
      context.commit('setVisitData', visitInfo.visit)
    })
  },

  routeEnter ({ commit }) {
    commit('routeEnter')
  }
}

const mutations = {
  setIsDevelopingContent: (state, value) => {
    if(debug) console.log('setIsDevelopingContent isDeving', value)
    // This value needs to survive a browser refresh so make the source of truth the session storage
    if (value) {
      sessionStorage.setItem(sKeys.IS_DEVING, value)
    } else {
      sessionStorage.removeItem(sKeys.IS_DEVING)
    }
    state._isDevelopingContent = value
  },
  setVisitData: (state, info) => {
    if(debug) console.log('visit store setVisitData ', info)
    state.sVisitData = info
  },
  routeEnter: state => {
    if(debug) console.log('mutation route enter found token ', token)
    let token = sessionStorage.getItem(sKeys.USER_TOKEN)
    state.isLoggedIn = !!token
  },
  topLevelMenu: (state, top) => {
    if(debug) console.log('visit store top level menu ' + (top ? top : 'empty'))
    state.topLevelMenu = top
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
