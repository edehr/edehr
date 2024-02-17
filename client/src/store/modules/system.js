import InstoreHelper from '@/store/modules/instoreHelper'
import { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
// import { Text } from '@/helpers/ehr-text'
// import StoreHelper from '@/helpers/store-helper'
const appTypeEHR = 'EHR'
// const appTypeLIS = 'LIS'
const trace = false
const state = {
  _isLoading: false,
  apiData: {},
  apiError: '',
  appDialogCount: 0,
  caseContextFeature: false,
  appTypeMode: appTypeEHR,
  currentPageKey: '',
  lmsNavCollapsed: false,
  condensedTableVertical: false, // false = horizontal, See SeedPage.
  isEditing: false,
  isSeeding: false,
  loadingCnt: 0,
  loadingEnabled: true,
  pageTitle: '',
  pageZone: '',
  pageIcon: undefined,
  paginateLimit: 10,
  // disable this ability to toggle labels. Force all to be hidden to be icon only.
  // TODO IF this doesn't cause problems for users then come back and remove the code that manages this state
  outsideShowButtonLabels: false,
  showExplanationTextOutside: false,
  scratchPadVisible: false,
  evalDialogVisible: false,
  seedTableCollapse: {},
  smallWindow: false,
  sysMessage: '',
  showingEHR: true,
  showingLIS: true,
  userPrefNoShowTranslationWarning: false
}

const getters = {
  apiData: state => state.apiData,
  apiError: state => state.apiError,
  appTypeMode: state => state.appTypeMode,
  appDialogCount: state => state.appDialogCount,
  caseContextFeature: state => state.caseContextFeature,
  condensedTableVertical: state => state.condensedTableVertical,
  isEditing: state => state.isEditing,
  isLoading: state => state._isLoading,
  lmsNavCollapsed: state => state.lmsNavCollapsed,
  outsideShowButtonLabels: state => state.outsideShowButtonLabels,
  pageIcon: state => state.pageIcon,
  pageTitle: state => state.pageTitle,
  pageZone: state => state.pageZone,
  paginateLimit: state => state.paginateLimit,
  scratchPadVisible: state => state.scratchPadVisible,
  evalDialogVisible: state => state.evalDialogVisible,
  seedTableCollapse: state => (tableKey) => state.seedTableCollapse[tableKey],
  showExplanationTextOutside: state => state.showExplanationTextOutside,
  sysMessage: state => state.sysMessage,
  showingEHR: state => state.showingEHR,
  showingLIS: state => state.showingLIS,
  userPrefNoShowTranslationWarning: state => state.userPrefNoShowTranslationWarning
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
  postActionEvent (context, payload) {
    const url = 'action'
    return InstoreHelper.postRequest(context, 'actions', url, payload).then(response => {
      return response.data
    })
  },
  setAppTypeMode ( {commit}, value) {
    if(!value) {
      console.error('Coding error setting app types. Only one type is allowed. No arrays')
      return
    }
    if(value === APP_TYPE_EHR || value === APP_TYPE_LIS) {
      commit('setAppTypeMode', value)
    } else {
      console.error('Coding error setting app types. Only "' + APP_TYPE_EHR + '" or "' + APP_TYPE_LIS + '" is allowed. "' + value +'"')
    }
  },
  setOutsideShowButtonLabels ({ commit }, value) {
    if (trace) console.log('set show', value)
    commit('setOutsideShowButtonLabels', value)
  },
  setLmsNavCollapsed ( {commit}, value) {
    console.log('setLmsNavCollapsed', value)
    commit('setLmsNavCollapsed', value)
  },
  setCondensedTableVertical ( {commit}, value) {
    commit('setCondensedTableVertical', value)
  },
  setShowExplanationTextOutside ( {commit}, value) {
    commit('setShowExplanationTextOutside', value)
  },

  setEvalDialogVisible ( context, trueFalse ) {
    context.commit('_setEvalDialogVisible', trueFalse)
  },
  toggleEvalDialogVisible ( context ) {
    context.commit('_setEvalDialogVisible', !context.state.evalDialogVisible)
  },
  setScratchPadVisible ( context, trueFalse ) {
    context.commit('_setScratchPadVisible', trueFalse)
  },
  toggleScratchPadVisible ( context ) {
    context.commit('_setScratchPadVisible', !context.state.scratchPadVisible)
  },
  flipTableCollapsed ( context, tableKey) {
    const newState = JSON.parse(JSON.stringify(context.state.seedTableCollapse))
    newState[tableKey] = !newState[tableKey]
    context.commit('setSeedTableCollapse', newState)
  },
  setShowEHR ( {commit} ) {
    commit('setShowLIS', false)
    commit('setShowEHR', true)
  },
  setShowLIS ( {commit} ) {
    commit('setShowLIS', true)
    commit('setShowEHR', false)
  },
  setUserPrefNoShowTranslationWarning ( {commit}, trueFalse) {
    commit('setUserPrefNoShowTranslationWarning', trueFalse)
  }
}

const mutations = {
  initialize: function (state) {
    state.showExplanationTextOutside = localStorage.getItem('showExplanationTextOutside') === 'true'
    state.caseContextFeature = localStorage.getItem('CaseContextFeature') === 'true'
    state.condensedTableVertical = localStorage.getItem('CondensedTableVertical') === 'true'
    let asStored = localStorage.getItem('SeedTableCollapse')
    state.seedTableCollapse = asStored ? JSON.parse(asStored) : {}
    state.lmsNavCollapsed = localStorage.getItem('LmsNavCollapsed') === 'true'
    state.userPrefNoShowTranslationWarning = localStorage.getItem('userPrefNoShowTranslationWarning') === 'true'
    asStored = localStorage.getItem('appTypeMode')
    if (asStored) {
      state.appTypeMode = asStored
    } else {
      state.appTypeMode = APP_TYPE_EHR
    }
    // disable this ability to toggle labels. Force all to be hidden to be icon only.
    // TODO IF this doesn't cause problems for users then come back and remove the code that manages this state
    // const storedShow = localStorage.getItem('ShowButtonLabels')
    // if (storedShow) {
    //   state.outsideShowButtonLabels = storedShow === 'true'
    // }
  },
  setApiData: (state, apiData) => {
    // console.log('System store set ApiData: ', apiData)
    state.apiData = apiData
  },
  setAppTypeMode: (state, appType) => {
    state.appTypeMode = appType
    localStorage.setItem('appTypeMode', appType)
  },
  incrAppDialogCount: (state) => {
    state.appDialogCount++
  },
  setLmsNavCollapsed: (state, value) => {
    localStorage.setItem('LmsNavCollapsed', value)
    state.lmsNavCollapsed = value
  },
  setCondensedTableVertical: (state, value) => {
    localStorage.setItem('CondensedTableVertical', value)
    state.condensedTableVertical = value
  },
  setSeedTableCollapse: (state, value) => {
    localStorage.setItem('SeedTableCollapse', JSON.stringify(value))
    state.seedTableCollapse = value || {}
  },
  setLoading: (state, isLoading) => {
    if(state.loadingEnabled) {
      state.loadingCnt += isLoading ? 1 : -1
      state._isLoading = state.loadingCnt > 0
      if (trace) console.log('system loading state.loadingCnt', state.loadingCnt, state._isLoading)
    }
  },
  setLoadingEnable: (state, enable) => {
    state.loadingEnabled = enable
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
  setPageZone: ( state, pageZone) => {
    state.pageZone = pageZone
  },
  _setEvalDialogVisible: (state, trueFalse) => {
    state.evalDialogVisible = trueFalse
  },
  _setScratchPadVisible: (state, trueFalse) => {
    state.scratchPadVisible = trueFalse
  },
  setSeeding: (state, isSeeding) => {
    state.isSeeding = isSeeding
  },
  setShowExplanationTextOutside: (state, value)=> {
    localStorage.setItem('showExplanationTextOutside', value)
    state.showExplanationTextOutside = value
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
    localStorage.setItem('ShowButtonLabels', value)
    state.outsideShowButtonLabels = value
  },
  setShowEHR: (state, show) => {
    state.showingEHR = show
  },
  setShowLIS: (state, show) => {
    state.showingLIS = show
  },
  setUserPrefNoShowTranslationWarning: (state, value)=> {
    localStorage.setItem('userPrefNoShowTranslationWarning', value)
    state.userPrefNoShowTranslationWarning = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
