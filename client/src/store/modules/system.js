const state = {
  isSeeding: false,
  _isLoading: false,
  isEditing: false,
  _isShowingAdvanced: false,
  currentPageKey: '',
  loadingCnt: 0,
  apiError: '',
  sysMessage: '',
  caseContextFeature: false
}

const getters = {
  isLoading: state => state._isLoading,
  isShowingAdvanced: state => state._isShowingAdvanced,
  caseContextFeature: state => state.caseContextFeature,
  apiError: state => state.apiError,
  sysMessage: state => state.sysMessage
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  }
}

const mutations = {
  initialize: function (state) {
    state.caseContextFeature = localStorage.getItem('CaseContextFeature') === 'true'
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
  setShowingAdvanced: (state, isEditing) => {
    state._isShowingAdvanced = isEditing
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
    if (error) {
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
