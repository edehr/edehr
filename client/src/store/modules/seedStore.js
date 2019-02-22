import StoreHelper from './storeHelper'
const helper = new StoreHelper()
import { composeUrl } from '../../helpers/ehr-utills'
const API = 'seed-data'

const state = {
  seedDataList: [],
  // Seed content is only used during editing of assignment seed data.
  // It will contain the metadata (name, version, description) plus the actual seedData
  sSeedId: '',
  sSeedContent: {},
  ehrSeedData: {}
}

const getters = {
  seedEhrData: state => {
    return state.ehrSeedData || {}
  }
}

const actions = {
  /**
   * Loading a seed record requires setting the seed id first.
   * Must preceed this load with a commit('seedStore/setSeedId', seedId)
   * @param context
   * @return {*}
   */
  loadSeedContent(context) {
    let seedId = context.state.sSeedId
    let url = composeUrl(context, API) + 'get/' + seedId
    console.log('loadSeedContent', seedId, url)
    return helper.getRequest(context, url).then(response => {
      let sd = response.data.seeddata
      let ehrd = sd.ehrData || {}
      context.commit('_setSeedContent', sd)
      context.commit('_setSeedEhrData', ehrd)
    })
  },
  loadSeedDataList(context) {
    let url = composeUrl(context, API)
    return helper.getRequest(context, url).then(response => {
      let list = response.data.seeddata
      if (!list) {
        console.error('ERROR the system should have seeddata')
        return
      }
      context.commit('_setSeedDataList', list)
    })
  },
  createSeedItem(context, payload) {
    let url = composeUrl(context, API)
    console.log('send seed data ', url, payload)
    return helper.postRequest(context, url, payload).then(results => {
      let resultsData = results.data
      console.log('assignment commit seed data with new data', JSON.stringify(resultsData))
      return context.dispatch('loadSeedDataList')
    })
  },
  /**
   * support saving new or updating seed meta data
   * (Can include ehr content but to update just a part of the ehr data use updateSeedEhrData)
   * @param context
   * @param dataIdPlusPayload
   * @return {*}
   */
  updateSeedItem(context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = composeUrl(context, API) + id
    console.log('updateSeedData', url, payload)
    return helper
      .putRequest(context, url, payload)
      .then(results => {
        // let resultsData = results.data
        console.log('after seed update reload seed list')
        return context.dispatch('loadSeedDataList')
      })
      .then(() => {
        if (context.state.sSeedId) {
          console.log('after seed update reload current seed item')
          return context.dispatch('loadSeedContent')
        }
      })
  },

  /**
   * support saving partial data inside the seed's ehr data
   * @param context
   * @param id
   * @param data  EG
   *    let data = {
   *      property: 'progressNotes',
   *      value: model.ehrData.progressNotes || []
   *      }
   * @return {*}
   */
  updateSeedEhrData(context, payload) {
    let url = composeUrl(context, API) + 'updateSeedEhrData/' + payload.id
    console.log('updateSeedEhrData', url, payload)
    return helper
      .putRequest(context, url, payload)
      .then(results => {
        console.log('after seed update ehr data reload seed list')
        return context.dispatch('loadSeedDataList')
      })
      .then(() => {
        if (context.state.sSeedId) {
          console.log('after seed update ehr data reload current seed item')
          return context.dispatch('loadSeedContent')
        }
      })
  }
}

const mutations = {
  setSeedId: (state, seedId) => {
    localStorage.setItem('seedId', seedId)
    state.sSeedId = seedId
  },
  _setSeedContent: (state, value) => {
    console.log('setting seed content ', value)
    state.sSeedContent = value
  },
  _setSeedEhrData: (state, value) => {
    console.log('setting seed data _setSeedEhrData ', value)
    state.ehrSeedData = value
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
