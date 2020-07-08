const state = {
  isSeeding: false,
  _isLoading: false,
  isEditing: false,
  _isShowingAdvanced: false,
  currentPageKey: '',
  loadingCnt: 0,
  apiError: '',
  sysMessage: '',
  isSigning: false
}

const getters = {
  isLoading: state => {
    return state._isLoading
  },
  isShowingAdvanced: state => {
    return state._isShowingAdvanced
  },
  isSigning: state => state.isSigning

}

const actions = {}

const mutations = {
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
  setSigning: (state, isSigning) => {
    state.isSigning = isSigning
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
