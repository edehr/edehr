import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '../../helpers/ehr-text'
const API = 'consumers'
const NAME = 'ConsumerStore'
const OBJ = 'consumer'
const debug = false

const state = {
  consumer: {},
  featureFlags: [],
  consumersListing: [],
}

const getters = {
  consumerList: state => {
    return state.consumersListing
  },
  consumerId: state => {
    return state.consumer._id
  },
  hasConsumer: state => { return !!state.consumer._id },
  featureFlags: state => { return state.featureFlags  },
  isFeatureEnabled: state => (flag) => {
    return !state.featureFlags.includes(flag)
  },
  lastUpdateDate: state => {
    let prop =  state.consumer.lastUpdateDate
    if (debug) console.log(NAME + ' get lastUpdateDate', prop)
    return prop
  },
  lmsName: state => {
    let prop =  state.consumer.tool_consumer_instance_name
    if (debug) console.log(NAME + ' get lmsName', prop)
    return prop
  },
  consumer: state => state.consumer
}

const actions = {
  clearConsumer ({dispatch, commit} ) {
    if(debug) console.log('clearConsumer')
    commit('setDataStore', { })
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
  getConsumer (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.CANNOT_GET_CONSUMER_STORE(NAME, id)
        StoreHelper.setApiError(msg)
        // return empty object so something other than undefined is put into the consumer
        return {}
      }
      return results
    })
  },
  getConsumerDetails (context, id) {
    let url = 'get/' + id + '/details'
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.CANNOT_GET_CONSUMER_STORE(NAME, id)
        StoreHelper.setApiError(msg)
        // return empty object so something other than undefined is put into the consumer
        return {}
      }
      return results
    })
  },
  featureFlagsLoad (context, id) {
    let url = 'feature-flags/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      context.commit('setFeatureFlags', response.data.featureFlags)
    })
  },
  // adding flag disables the feature
  featureFlagsAdd (context, payload) {
    let url = 'feature-flags-add'
    return InstoreHelper.postRequest(context, API, url, payload).then(response => {
      // console.log('after add', response.data.featureFlags)
      context.commit('setFeatureFlags', response.data.featureFlags)
    })
  },
  // removing the flag enables the feature
  featureFlagsRemove (context, payload) {
    let url = 'feature-flags-remove'
    return InstoreHelper.postRequest(context, API, url, payload).then(response => {
      context.commit('setFeatureFlags', response.data.featureFlags)
    })
  },

  /**
   * Enabled all features (by clearing out all flags)
   * This action is not used and may never be needed. Reconsider given some time using the flags.
   * @param context
   * @param payload { toolConsumerId : id }
   * @returns {Promise<unknown>}
   */
  featureFlagsEnableAll (context, consumerId) {
    let payload = { toolConsumerId: consumerId}
    let url = 'feature-flags-all-enable'
    return InstoreHelper.postRequest(context, API, url, payload).then(response => {
      context.commit('setFeatureFlags', response.data.featureFlags)
    })
  },
  loadConsumers (context) {
    let url = ''
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.consumers
      if(debug) console.log('loadConsumers response.data', list)
      if (!list) {
        let msg = Text.NO_CONSUMERS_ERROR
        console.error(msg)
        StoreHelper.setApiError(msg)
        return
      }
      context.commit('setConsumersListing', list)
      return list
    })
  },
  loadConsumer ({dispatch, commit}, id) {
    return dispatch('getConsumer',id).then( (results) => {
      if (debug) console.log(NAME + ' loaded ', results)
      commit('setDataStore', results)
      return results
    })
  },
  loadDetails ({dispatch, commit}, id) {
    return dispatch('getConsumerDetails',id).then( (results) => {
      if (debug) console.log(NAME + ' loaded ', results)
      commit('setDataStore', results)
      return results
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
        StoreHelper.setApiError(msg)
      })
  }
}

const mutations = {
  setDataStore: (state, consumer) => {
    if(debug) console.log('setDataStore', consumer)
    state.consumer = consumer
  },
  setFeatureFlags: (state, featureFlags) => {
    state.featureFlags = featureFlags
  },
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
