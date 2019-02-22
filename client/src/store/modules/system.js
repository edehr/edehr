const state = {
  isSeeding: false,
  isLoading: false,
  isEditing: false,
  currentPageKey: '',
  loadingCnt: 0,
  apiError:
    'This is an axample api error. We show this example only during development. See the store/modules/system.js file to remove this message'
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
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  },
  setSeeding: (state, isSeeding) => {
    state.isSeeding = isSeeding
  },
  setCurrentPageKey: (state, pageKey) => {
    state.currentPageKey = pageKey
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
