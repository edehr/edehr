import InstoreHelper from '@/store/modules/instoreHelper'
// import { Text } from '@/helpers/ehr-text'
// import StoreHelper from '@/helpers/store-helper'
const trace = false
const state = {
  _isLoading: false,
  apiData: {},
  apiError: '',
  appDialogCount: 0,
  caseContextFeature: false,
  currentPageKey: '',
  isEditing: false,
  isSeeding: false,
  loadingCnt: 0,
  pageTitle: '',
  pageIcon: undefined,
  outsideShowButtonLabels: true,
  smallWindow: false,
  sysMessage: '',
}

const getters = {
  apiData: state => state.apiData,
  apiError: state => state.apiError,
  appDialogCount: state => state.appDialogCount,
  caseContextFeature: state => state.caseContextFeature,
  isEditing: state => state.isEditing,
  isLoading: state => state._isLoading,
  isSmallWindow: state => state.smallWindow,
  outsideShowButtonLabels: state => state.outsideShowButtonLabels,
  pageIcon: state => state.pageIcon,
  pageTitle: state => state.pageTitle,
  sysMessage: state => state.sysMessage,
}

const actions = {
  appDialogCountIncrement: function ({commit}) {
    commit('incrAppDialogCount')
  },
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
  },
  setOutsideShowButtonLabels ({ commit }, value) {
    if (trace) console.log('set show', value)
    commit('setOutsideShowButtonLabels', value)
  }
}

const mutations = {
  initialize: function (state) {
    state.caseContextFeature = localStorage.getItem('CaseContextFeature') === 'true'
    const storedShow = localStorage.getItem('ShowButtonLabels')
    if (storedShow) {
      state.outsideShowButtonLabels = storedShow === 'true'
    }
  },
  setApiData: (state, apiData) => {
    // console.log('System store set ApiData: ', apiData)
    state.apiData = apiData
  },
  incrAppDialogCount: (state) => {
    state.appDialogCount++
  },
  setLoading: (state, isLoading) => {
    if (trace) console.log('system loading counter', isLoading)
    if (isLoading) {
      state.loadingCnt++
    } else {
      state.loadingCnt--
    }
    state._isLoading = state.loadingCnt > 0
    if (trace) console.log('system loading state.loadingCnt', state.loadingCnt)
    if (trace) console.log('system loading state._isLoading', state._isLoading)
  },
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  },
  setPageIcon: ( state, pageIcon) => {
    state.pageIcon = pageIcon
  },
  setPageTitle: ( state, pageTitle) => {
    state.pageTitle = pageTitle
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
      console.error('System setApiError:', error)
    }
    state.apiError = error
  },
  setCaseContext: (state, value) => {
    state.caseContextFeature = value
    localStorage.setItem('CaseContextFeature', value)
  },
  setSmallWindow: (state, value) => {
    state.smallWindow = value
  },
  setOutsideShowButtonLabels: (state, value) => {
    console.log('mutation show', value)
    localStorage.setItem('ShowButtonLabels', value)
    state.outsideShowButtonLabels = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
