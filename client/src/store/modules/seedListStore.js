import InstoreHelper from './instoreHelper'
import sKeys from '../../helpers/session-keys'
import StoreHelper from '../../helpers/store-helper'
import SeedModel from '@/outside/models/SeedModel'
const API = 'seed-data'
const debugSL = false

// exporting elements so they can be accessed in unit tests.
// working code should only use the default exported module.

export const state = {
  seedDataList: [],
  sSeedId: '',
  seedModel : {}
}

export const getters = {
  seedContent: state => { return state.seedModel.seed || {}  },
  seedModel: state => { return state.seedModel },

  seedEhrData: state => {
    const edm = state.seedModel.ehrDataModel
    return edm && edm.ehrData ? edm.ehrData : undefined
  },

  list: state => { return state.seedDataList },

  seedId: state => state.sSeedId
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearSeedData (context) {
    context.commit('_setSeedId', undefined)
  },
  deleteSeed (context, id) {
    const url = `/${id}`
    if (debugSL) console.log('Seed list store. Delete url >>', url)
    return InstoreHelper.deleteRequest(context, API, url)
      .then(response => {
        if (debugSL) console.log('Seed list store. Delete response >>', response)
        return response.data
      })
  },

  /**
   * Load a seed record and set seed id as current seed
   * @param context
   * @param seedId
   * @return {*}
   */
  loadSeedContent (context, seedId) {
    if(debugSL) console.log('SeedList load seed content stash seed id', seedId)
    context.commit('_setSeedId', seedId)
    let url =  'get/' + seedId
    if(debugSL) console.log('SeedList load seed content from url', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let sd = response.data.seeddata
      if(debugSL) console.log('SeedList load seed content sd >>', sd)
      context.commit('_setSeedContent', sd)
    })
  },

  /**
   * Get the list of seeds.  This API call mae suffer performance issues as he number of
   * seeds grows. To address this could change the API to not return the ehrData.
   * @param context
   * @return {*}
   */
  loadSeeds (context) {
    let consumerId = StoreHelper.getAuthdConsumerId()
    if (!consumerId) {
      // this can happen if you visit the Seed Lists page and then refresh the page. No worries. Load will happen later.
      console.log('seedListStore. Will not load seeds at this time because the consumer id is not yet set up.')
      return
    }
    // console.log('seedListStore. Fetch seed list')
    let url = 'consumer/' + consumerId
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.seeddata
      if (!list) {
        console.error('ERROR the system should have seeddata')
        return
      }
      context.commit('_setSeedDataList', list)
      return list
    })
  },

  /**
   * Create a new ehr seed
   * @param context
   * @param payload
   * @return {*}
   */
  createSeedItem (context, payload) {
    let url = undefined
    if(debugSL) console.log('SeedList send seed data ', url, payload)
    return InstoreHelper.postRequest(context, API, url, payload).then(results => {
      if(debugSL) console.log('SeedList after create seed:', results.data )
      return context.commit('_setSeedId', results.data._id)
    })
      .then( () => {
        if(debugSL) console.log('SeedList after seed create. Now loadSeeds')
        return context.dispatch('loadSeeds')
      })
      .then(() => {
        if (context.state.sSeedId) {
          if(debugSL) console.log('SeedList after seed create now load created seed content')
          return context.dispatch('loadSeedContent', context.state.sSeedId)
        }
      })

  },

  /**
   * support saving new or updating seed meta data
   * (Can include ehr content but to update just a part of the ehr data use updateSeedEhrProperty)
   * @param context
   * @param dataIdPlusPayload
   * @return {*}
   */
  updateSeedItem (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = id
    if(debugSL) console.log('SeedList update seed', url, payload)
    return InstoreHelper.putRequest(context, API, url, payload)
      .then( () => {
        // let resultsData = results.data
        if(debugSL) console.log('SeedList after seed update loadSeeds')
        return context.dispatch('loadSeeds')
      })
      .then(() => {
        if (context.state.sSeedId) {
          if(debugSL) console.log('SeedList after seed update load seed content')
          return context.dispatch('loadSeedContent', context.state.sSeedId)
        }
      })
  },

  async sendSeedEhrDataDraft (context, payload) {
    // push new EHR data into the seed, without progress bars,
    // receive the server response with the new seed
    // stash in the store
    // emit event to refresh table data
    let id = context.state.sSeedId
    let url = 'updateSeedEhrProperty/' + id
    const sd = await InstoreHelper.putRequestSilent(context, API, url, payload)
    await context.commit('_setSeedContent', sd.data)
  },
  /**
   * support saving partial data inside the seed's ehr data
   * @param context
   * @param payload with id and data eg:
   *    let data = {
   *      property: 'progressNotes',
   *      value: model.ehrData.progressNotes || []
   *      }
   * @return {*}
   */
  updateSeedEhrProperty (context, payload) {
    let id = context.state.sSeedId
    let url = 'updateSeedEhrProperty/' + id
    if(debugSL) console.log('SeedList updateSeedEhrProperty url, payload', url, payload)
    return InstoreHelper.putRequest(context, API, url, payload)
      .then(() => {
        if(debugSL) console.log('SeedList after ehrData update loadSeeds')
        return context.dispatch('loadSeeds')
      })
      .then(() => {
        if (context.state.sSeedId) {
          if(debugSL) console.log('SeedList after ehrData update load seed content context.state.sSeedId', context.state.sSeedId)
          return context.dispatch('loadSeedContent', context.state.sSeedId)
        }
      })
  },

  /**
   * Replace the seed's ehrData
   * @param context
   * @param payload { ehrData, id }
   * @return {*}
   */
  importSeedEhrData (context, payload) {
    let url = 'importSeedEhrData/' + payload.id
    if(debugSL) console.log('SeedList importSeedEhrData', url, payload.ehrData)
    return InstoreHelper.putRequest(context, API, url, payload.ehrData)
      .then( () => {
        if(debugSL) console.log('SeedList after seed replace ehr data reload seed list')
        return context.dispatch('loadSeeds')
      })
      .then(() => {
        if (context.state.sSeedId) {
          if(debugSL) console.log('SeedList after seed replace ehr data reload current seed item')
          return context.dispatch('loadSeedContent', context.state.sSeedId)
        }
      })
  }

}

export const mutations = {
  initialize: function (state) {
    // if stored get the activityId. Once it is in place a page load can request the activity data
    const sSeedId = localStorage.getItem(sKeys.SEED_ID)
    if (sSeedId) {
      state.sSeedId = sSeedId
    }
  },
  _setSeedId: (state, seedId) => {
    if(debugSL) console.log('SeedList set seed id and stash in session store', seedId)
    if (seedId) {
      localStorage.setItem(sKeys.SEED_ID, seedId)
      state.sSeedId = seedId
    } else {
      localStorage.removeItem(sKeys.SEED_ID)
      state.sSeedId = ''
    }
  },
  _setSeedContent: (state, value) => {
    // state.sSeedContent = value
    state.seedModel = new SeedModel(value)
  },
  _setSeedDataList: (state, list) => {
    state.seedDataList = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
