import axios from 'axios' // '../node_modules/axios/dist/axios.min'
import { setApiError } from '../../helpers/ehr-utills'

const state = {
  apiUrl: '',
  sUserInfo: {},
  visitId: '',
  sVisitInfo: {},
  isLoggedIn: !!localStorage.getItem('token'),
  topLevelMenu: '',
  isDevelopingContent: false
}

const getters = {
  isInstructor: state => {
    return state.sVisitInfo.isInstructor
  },
  isDeveloper: state => {
    return state.sVisitInfo.isDeveloper
  },
  hasDashboard: state => {
    var vi = state.sVisitInfo
    return vi ? vi.isInstructor || vi.isDeveloper : false
  },
  isStudent: state => {
    var vi = state.sVisitInfo
    return vi ? vi.isStudent : false
  },
  lmsName: state => {
    if (state.sVisitInfo && state.sVisitInfo.toolConsumer) {
      return state.sVisitInfo.toolConsumer.tool_consumer_instance_name
    }
    return ''
  },
  returnUrl: state => {
    var vi = state.sVisitInfo
    return vi ? vi.returnUrl : ''
  },
  fullName: state => {
    let info = state.sUserInfo
    let name = info ? info.fullName : ''
    return name
  },
  username: (state, getters, rootState) => {
    let info = rootState.sUserInfo
    let name = info ? info.givenName : ''
    return name
  }
}

const actions = {
  loadVisitInfo(context, visitId) {
    // console.log('loadVisitInfo')
    return new Promise((resolve, reject) => {
      var apiUrl = context.state.apiUrl
      let url = apiUrl + '/visits/flushed/' + visitId
      // console.log('In load page ', url)
      function invalid(msg) {
        console.log('INVALID LoadVisit', msg)
        setApiError(context, msg)
        reject(new Error(msg))
      }
      axios
        .get(url)
        .then(response => {
          // console.log('what is the response? ', response.data)
          let visitInfo = response.data
          if (!visitInfo) {
            return invalid('ERROR No visit information for ' + visitId)
          }
          if (!visitInfo.user) {
            return invalid('ERROR.  No user information for ' + visitId)
          }
          if (!visitInfo.activity) {
            return invalid('ERROR.  No activity information for ' + visitId)
          }
          if (!visitInfo.assignment) {
            return invalid('ERROR.  No assignment information for ' + visitId)
          }
          if (!visitInfo.activityData) {
            return invalid('ERROR.  No activity data information for ' + visitId)
          }
          localStorage.setItem('token', visitId)
          context.commit('setVisitInfo', visitInfo)
          context.commit('setUserInfo', visitInfo.user)

          let a_id = visitInfo.assignment._id
          // visitInfo.activityData contains the id of the ActivityData record
          let ad_id = visitInfo.activityData
          console.log('dispatch load active data and assignment', ad_id)
          let options = { root: true }
          return Promise.all([
            context.dispatch('ehrData/loadActivityData', { forStudent: true, id: ad_id }, options),
            context.dispatch('assignment/loadOneAssignmentThenSeed', a_id, options)
          ]).then(() => {
            console.log('after dispatch load active data, and assignment', ad_id)
            resolve()
          })
        })
        .catch(error => {
          console.log(error.message)
          console.log(error.code) // Not always specified
          console.log(error.config) // The config that was used to make the request
          console.log(error.response) // Only available if response was received from the server
          return invalid(error.message)
        })
    })
  },
  routeEnter({ commit }) {
    commit('routeEnter')
  }
}

const mutations = {
  apiUrl: (state, url) => {
    // console.log('visit store set api url ' + url)
    localStorage.setItem('apiUrl', url)
    state.apiUrl = url
  },
  setIsDevelopingContent: (state, value) => {
    console.log('setIsDevelopingContent', value)
    localStorage.setItem('isDevelopingContent', value)
    state.isDevelopingContent = value
  },
  setVisitInfo: (state, info) => {
    // console.log('visit store set visit info ' + info._id)
    state.sVisitInfo = info
  },
  setUserInfo: (state, info) => {
    // console.log('visit store set user info ' + info._id)
    state.sUserInfo = info
  },
  routeEnter: state => {
    // console.log('mutation route enter found token ', token)
    var token = localStorage.getItem('token')
    state.isLoggedIn = !!token
  },
  topLevelMenu: (state, top) => {
    // console.log('visit store top level menu ' + (top ? top : 'empty'))
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
