import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '../../helpers/ehr-text'
const API = 'consumers'
const NAME = 'ConsumerStore'
const OBJ = 'consumer'
const debug = false

const state = {
  dataStore: {}
}

const getters = {
  consumerId: state => {
    return state.dataStore._id
  },
  lastUpdateDate: state => {
    let prop =  state.dataStore.lastUpdateDate
    if (debug) console.log(NAME + ' get lastUpdateDate', prop)
    return prop
  },
  lmsName: state => {
    let prop =  state.dataStore.tool_consumer_instance_name
    if (debug) console.log(NAME + ' get lmsName', prop)
    return prop
  },
  consumer: state => state.dataStore
}

const actions = {
  load ({dispatch, commit}, id) {
    return dispatch('get',id).then( (results) => {
      if (debug) console.log(NAME + ' loaded ', results)
      commit('set', results)
      return results
    })
  },
  get (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.CANNOT_GET_CONSUMER_STORE(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      return results
    })
  },
}

const mutations = {
  set: (state, consumer) => {
    state.dataStore = consumer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
