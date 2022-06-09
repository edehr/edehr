import InstoreHelper from '@/store/modules/instoreHelper'
// import { Text } from '@/helpers/ehr-text'
// import StoreHelper from '@/helpers/store-helper'

const state = {
  apiData: {},
  isSeeding: false,
  _isLoading: false,
  isEditing: false,
  currentPageKey: '',
  loadingCnt: 0,
  apiError: '',
  sysMessage: '',
  caseContextFeature: false
}

const getters = {
  apiData: state => state.apiData,
  isLoading: state => state._isLoading,
  caseContextFeature: state => state.caseContextFeature,
  apiError: state => state.apiError,
  sysMessage: state => state.sysMessage
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  loadApiSystem ({dispatch, commit}, id) {
    return dispatch('getApiData',id)
      .then( (sysData) => {
        // console.log('System store loaded: ', sysData)
        return commit('setApiData', sysData)
      })
  },
  getApiData (context, id) {
    return InstoreHelper.getRequest(context, 'home').then(response => {
      const rData = response.data
      // console.log('System store get data:', rData)
      return rData
    })
  }
}

const mutations = {
  initialize: function (state) {
    state.caseContextFeature = localStorage.getItem('CaseContextFeature') === 'true'
  },
  setApiData: (state, apiData) => {
    // console.log('System store set ApiData: ', apiData)
    state.apiData = apiData
  },
  setLoading: (state, isLoading) => {
    if (isLoading) {
      state.loadingCnt++
    } else {
      state.loadingCnt--
    }
    state._isLoading = state.loadingCnt > 0
  },
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  },
  setSeeding: (state, isSeeding) => {
    state.isSeeding = isSeeding
  },
  setCurrentPageKey: (state, pageKey) => {
    state.currentPageKey = pageKey
  },
  setSystemMessage: (state, msg) => {
    state.sysMessage = msg
  },
  setApiError: (state, error) => {
    if (error && process.env.NODE_ENV !== 'test') {
      console.error('System api error:', error)
    }
    state.apiError = error
  },
  setCaseContext: (state, value) => {
    state.caseContextFeature = value
    localStorage.setItem('CaseContextFeature', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
