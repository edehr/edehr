import InstoreHelper from './instoreHelper'
import { setApiError } from '../../helpers/ehr-utils'
import { Text } from '../../helpers/ehr-text'
const API = 'consumers'
const debug = false

const state = {
  consumersListing: [],
}

const getters = {
  list: state => {
    return state.consumersListing
  }
}

const actions = {

  loadConsumers (context) {
    let url = ''
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.consumers
      if(debug) console.log('loadConsumers response.data', list)
      if (!list) {
        let msg = Text.NO_CONSUMERS_ERROR
        console.error(msg)
        setApiError(msg)
        return
      }
      context.commit('setConsumersListing', list)
      return list
    })
  },

  createConsumer (context, payload) {
    let url = 'create'
    if(debug) console.log('send consumer data ', url, payload)
    return InstoreHelper.postRequest(context, API, url, payload).then(results => {
      // let resultsData = results.data
      if(debug) console.log('consumer post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadConsumers')
    })
  },

  updateConsumer (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = id
    if(debug) console.log('updateConsumer', url, payload)
    return InstoreHelper
      .putRequest(context, API, url, payload)
      .then(results => {
        let resultsData = results.data
        if(debug) console.log('consumer post responded with:', JSON.stringify(resultsData))
        return context.dispatch('loadConsumers')
      })
      .catch(err => {
        let msg = Text.UPDATE_CONSUMER_ERROR(err)
        console.error(msg)
        setApiError(msg)
      })
  }
}

const mutations = {
  setConsumersListing: (state, cData) => {
    if(debug) console.log('setConsumersListing ', cData)
    state.consumersListing = cData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
