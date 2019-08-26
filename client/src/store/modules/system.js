const state = {
  isSeeding: false,
  isLoading: false,
  isEditing: false,
  currentPageKey: '',
  loadingCnt: 0,
  apiError: '',
  sysMessage: '',
  usingV2: false
}

const getters = {}

const actions = {}

const mutations = {
  setLoading: (state, isLoading) => {
    if (isLoading) {
      state.loadingCnt++
    } else {
      state.loadingCnt--
    }
    state.isLoading = state.loadingCnt > 0
  },
  setUseV2: (state, value) => {
    localStorage.setItem('usingV2', value)
    state.usingV2 = value
    // console.log('System store set using v2', value)
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
    if (error) {
      console.error('System api error:', error)
    }
    state.apiError = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
