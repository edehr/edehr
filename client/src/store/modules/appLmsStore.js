import StoreHelper from '@/helpers/store-helper'
import {
  appLmsClientFetchAppLms,
  appLmsClientFetchTokenData,
  appLmsFetchUserData
} from '@/helpers/app-lms-helper'
import InstoreHelper from '@/store/modules/instoreHelper'

const APP_LMS_ROLE_OWNER = 'Owner'
const APP_LMS_ROLE_STUDENT = 'Student'
const APP_LMS_ROLE_INSTRUCTOR = 'Instructor'

const state = {
  appLmsEnabled: true,
  appLmsAccessToken: '', // is the token given after user submits email and before access code is verified
  appLmsUserToken: '',
  appLmsTokenData: {},
  appLmsData: {},
  appUserData: {},
  inDevAccessCode: ''
}

function getLinksByRole (getters, role) {
  return getters.userLinkList.filter(al => al.role === role)
}

const getters = {
  appLmsAccessToken: (state) => state.appLmsAccessToken,
  appLmsEnabled: (state) => state.appLmsEnabled,
  appLmsUserToken: (state) => state.appLmsUserToken,
  appLmsTokenData: (state) => state.appLmsTokenData,
  appLmsUserId: (state) => state.appLmsTokenData?.userId,
  appLmsUserEmail: (state) => state.appLmsTokenData?.userEmail,
  appLmsData: (state) => state.appLmsData || {},
  appUserData: (state) => state.appUserData || {},
  givenName: (state) => state.appUserData.givenName ,
  familyName: (state) => state.appUserData.familyName,
  isConfigured: (state) => state.appUserData?.givenName?.length > 0 && state.appUserData?.familyName?.length > 0,
  inDevAccessCode: (state) => state.inDevAccessCode || {},
  appLmsList: (state, getters) => { return getters.appLmsData?.appLmsList || []},
  userLinkList: (state, getters) => {    return getters.appLmsData?.userLinkList || []  },
  userOwnedAppLms: (state, getters) => {
    const links = getLinksByRole(getters,APP_LMS_ROLE_OWNER)
    const appLmsList = getters.appLmsList
    const ownedLms = []
    links.forEach( (link) => {
      const appLmsId = link.appLms
      const appLms = appLmsList.find(al => al._id === appLmsId)
      if(appLms) {
        ownedLms.push(appLms)
      }
    })
    return ownedLms.length > 0 ? ownedLms[0] : undefined
  },
  userAsStudentAppLms: (state, getters) => {    return getLinksByRole(getters,APP_LMS_ROLE_STUDENT)  },
  userAsInstructorAppLms: (state, getters) => {    return getLinksByRole(getters,APP_LMS_ROLE_INSTRUCTOR)  },
}

const actions = {
  initialize: async function (context) {
    context.commit('initialize')
    const token = localStorage.getItem('appLmsUserToken')
    await context.dispatch('setAppLmsUserToken', token)
  },
  setAppLmsUserToken: async (context, token) => {
    await context.commit('_setAppLmsUserToken', token)
    await context.dispatch('fetchTokenData')
    await context.dispatch('fetchUserData')
    await context.dispatch('fetchAppLmsData')
  },
  fetchTokenData: async (context) => {
    const token = context.state.appLmsUserToken
    if (token) {
      // console.log('AppLmsStore fetchTokenData')
      let data = await appLmsClientFetchTokenData(token)
      context.commit('_setAppLmsTokenData', data)
    } else {
      console.error('AppLmsStore unexpected call to fetchTokenData but there is no token')
    }
  },
  fetchUserData: async (context) => {
    const userId = context.getters.appLmsUserId
    if (userId) {
      // console.log('AppLmsStore fetchUserData', userId)
      let userData = await appLmsFetchUserData(userId)
      await context.dispatch('setUserData', userData)
    } else {
      console.error('AppLmsStore unexpected call to fetchUserData but there is no userId')
    }
  },
  fetchAppLmsData: async (context) => {
    const userId = context.getters.appLmsUserId
    if (userId) {
      // console.log('AppLmsStore fetchAppLmsData', userId)
      let appLmsData = await appLmsClientFetchAppLms(userId)
      await context.dispatch('setAppLmsData', appLmsData)
    } else {
      console.error('AppLmsStore unexpected call to fetchAppLmsData but there is no userId')
    }
  },

  appLmsReset: ( context ) => {
    // console.log('AppLmsStore CLEARING ALL DATA')
    context.commit('_setAppLmsUserToken', '')
    context.commit('_setAppLmsTokenData', {})
    context.commit('_setAppLmsAccessToken', '')
  },
  appLmsLogOut: async (context) => {
    await context.dispatch('appLmsReset')
  },
  setAppLmsEnabled: (context, mode) => {
    context.commit('_setAppLmsEnabled', mode)
  },
  setAppLmsData: (context, data) => {
    context.commit('_setAppLmsData', data)
  },
  setUserData: (context, data) => {
    context.commit('_setUserData', data)
  },
  setAppLmsClientSendEmail: async (context, payload) => {
    const { toEmail, inviteCode } = payload
    console.log('ALS - setAppLmsClientSendEmail toEmail', toEmail, 'inviteCode', inviteCode)
    if (toEmail) {
      const errorHandler = (url, bodyData, error) => {
        // console.log('IN ERROR HANDLER FOR POST', error.response)
        if(error.response?.data?.message === 'NetworkError') {
          let msg = 'EdEHR API server is not available. Either you have network issues or the server is down. \n'
          StoreHelper.setApiError(msg)
          return true //handled
        } else {
          console.log('TO DO setAppLmsClientSendEmail consider error handling for ', error.response)
        }
      }
      let response = await InstoreHelper.postRequest(null,
        'app-lms',
        'send-access-code-email',
        { toEmail: toEmail, inviteCode: inviteCode },
        errorHandler)
      let accessToken = response?.data?.accessToken
      let accessCode = response?.data?.accessCode
      context.commit('_setAppLmsAccessToken', accessToken)
      context.commit('_setInDevAccessCode', accessCode)
    }
  },
}

const mutations = {
  initialize: function (state) {
    state.appLmsEnabled = !(localStorage.getItem('appLmsEnabled') === 'false')
  },
  _setAppLmsData: (state, data) => {
    state.appLmsData = data
  },
  _setUserData: (state, data) => {
    // console.log('app lms store set user data', data)
    state.appUserData = data
  },
  _setAppLmsEnabled: (state, mode) => {
    localStorage.setItem('appLmsEnabled', mode)
    state.appLmsEnabled = mode
  },
  _setAppLmsUserToken: (state, token) => {
    localStorage.setItem('appLmsUserToken', token)
    state.appLmsUserToken = token
  },
  _setAppLmsTokenData: (state, token) => {
    state.appLmsTokenData = token
  },
  _setAppLmsAccessToken: (state, token) => {
    state.appLmsAccessToken = token
  },
  _setInDevAccessCode: (state, code) => {
    state.inDevAccessCode = code
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
