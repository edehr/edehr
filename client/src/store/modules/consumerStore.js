import InstoreHelper from './instoreHelper'
import { setApiError } from '../../helpers/ehr-utils'
import { Text } from '../../helpers/ehr-text'
const API = 'consumers'
const NAME = 'ConsumerStore'
const OBJ = 'consumer'
const debug = false
const STASH_KEY = 'consumerId'

const state = {
  dataStore: {}
}

const getters = {
  consumerId: state => {
    let id = state.dataStore._id
    id = id ? id :   sessionStorage.getItem(STASH_KEY)
    return id
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
        setApiError(msg)
        return
      }
      return results
    })
  },
}

const mutations = {
  set: (state, consumer) => {
    if (consumer) sessionStorage.setItem(STASH_KEY, consumer._id)
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
