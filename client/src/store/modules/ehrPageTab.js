import { decoupleObject } from '@/ehr-definitions/common-utils'

/*
This preserves the user's last selected EHR page tab.

EhrPageTab storage manages the "is active" state for each of the EHR page tabs.
Initially the storage is empty. When a page loads it needs to dispatch the pageActivated action.
This requires the page key and list of tab names. This "selects" the first tab in the list.
When a tab is selected by the dispatch the tabSelected action to update the active tab.

Pages can use the reactive getter isTabSelected to determine if a tab is indeed selected.

 */
const state = {
  pageTabs: {},
}

const getters = {
  pageTabs: state => state.pageTabs,
  isTabSelected:  state => (pageKey, tabName) => {
    const pData = state.pageTabs[pageKey]
    return pData && pData[tabName]
  },
  activeTab: state => (pageKey) => {
    const pTab = state.pageTabs[pageKey]
    return pTab ? Object.keys(pTab).find( tn  => !!pTab[tn]) : undefined
  }
}

const actions = {
  pageActivated: function ({commit}, payload) {
    commit('setPageActivated', payload)
  },
  tabSelected: function ({commit}, payload) {
    commit('setPageTabActive', payload)
  }
}

const mutations = {
  setPageActivated: (state, payload) => {
    const {pageKey, tabNames} = payload
    if (! state.pageTabs[pageKey] ) {
      const pTab = {}
      tabNames.forEach( (tn, index) => {
        pTab[tn] = index === 0 // first tab is set active when page loads
      })
      // replace whole object to trigger reactivity
      const clone = decoupleObject(state.pageTabs)
      clone[pageKey] = pTab
      state.pageTabs = clone
    }
  },
  setPageTabActive: (state, payload) => {
    const { pageKey, tabName } = payload
    if (state.pageTabs[pageKey]) {
      const clone = decoupleObject(state.pageTabs)
      const pTab = clone[pageKey]
      Object.keys(pTab).forEach( tn  => pTab[tn] = tabName === tn)
      // replace whole object to trigger reactivity
      clone[pageKey] = pTab
      state.pageTabs = clone
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
