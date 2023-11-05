import InstoreHelper from './instoreHelper'
import sKeys from '../../helpers/session-keys'
import StoreHelper from '../../helpers/store-helper'
import SeedModel from '@/outside/models/SeedModel'
const API = 'seed-data'
const urlForUpdate = 'updateSeedEhrProperty/'
let debugSL = false

// exporting elements so they can be accessed in unit tests.
// working code should only use the default exported module.

const EMPTY_SEED_MODEL_DEF = { seed: { appType: 'BLANK'} }
export const state = {
  seedDataList: [],
  listMetadata: {},
  sSeedId: '',
  // Initialize seedModel with the inner seed property so that components
  // can do their initial rendering while waiting for the seed data to load from API call
  seedModel : EMPTY_SEED_MODEL_DEF,
  allTagList: [],
  ehrData: undefined
}

export const getters = {
  appType: state => { return state.seedModel.seed.appType },
  seedContent: state => { return state.seedModel.seed || {}  },
  listMetadata: state => { return state.listMetadata },
  seedModel: state => { return state.seedModel },

  seedEhrData: state => { return state.ehrData },

  list: state => { return state.seedDataList },

  seedId: state => state.sSeedId,
  allTagList: state => state.allTagList
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

  async fetchSeedSelectionList (context, options) {
    if (!options.appType) {
      console.error('Coding error. Must provide options.appType.')
      return []
    }
    let consumerId = StoreHelper.getAuthdConsumerId()
    let url = 'seedSelectionList/' + consumerId
    url += '?appType=' + options.appType
    options.searchTerm ? url += '&searchTerm=' + options.searchTerm : null
    // console.log('fetchSeedSelectionList url: ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.seedList
      if (!list) {
        console.error('ERROR in seed list store attempting to obtain seed selection list.')
        return []
      }
      // console.log('fetchSeedSelectionList results: ', list)
      return list
    })
  },

  async fetchSeed (context, seedId) {
    if (debugSL) console.log('SeedList fetchSeed', seedId)
    let url = 'get/' + seedId
    return InstoreHelper.getRequest(context, API, url).then(response => {
      return response.data.seeddata
    })
  },

  /**
   * Load a seed record and set seed id as current seed
   * @param context
   * @param seedId
   * @return {*}
   */
  async loadSeedContent (context, seedId) {
    let oldVal = debugSL
    if (!seedId) {
      console.error('loadSeedContent FAILED. Must provide seed id')
      return
    }
    // debugSL = true
    if (debugSL) console.log('SeedList load seed content stash seed id', seedId)
    await context.commit('_setSeedId', seedId)
    let url = 'get/' + seedId
    if (debugSL) console.log('SeedList load seed content from url', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let sd = response.data.seeddata
      if (debugSL) console.log('SeedList load seed content sd >>', sd)
      debugSL = oldVal
      return context.commit('_setSeedContent', sd)
    })
  },

  /**
   * Get the list of seeds.
   * This is only used for download all and edit learning object where it needs a list of all seeds.
   *
   * The LObj dialog ought to use a dedicated get API call that just returns the data needed (e.g. name, tags).
   * In both cases do we need to have a store value or could this loadSeed be renamed getAllSeeds and return the list directly?
   *
   * @param context
   * @return {*}
   */
  loadSeeds (context) {
    let consumerId = StoreHelper.getAuthdConsumerId()
    if (!consumerId) {
      // this can happen if you visit the Seed Lists page and then refresh the page. No worries. Load will happen later.
      // console.log('seedListStore. Will not load seeds at this time because the consumer id is not yet set up.')
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

  loadAllTags (context) {
    let consumerId = StoreHelper.getAuthdConsumerId()
    if (!consumerId) {
      console.error('ERROR the system should have consumer')
      return
    }
    let url = 'allTags/' + consumerId
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let allTagList = response.data.tagList
      if (!allTagList) {
        console.error('ERROR the system should have tag list')
        return
      }
      context.commit('_setAllTagList', allTagList)
      return allTagList
    })
  },
  loadPage (context, payload) {
    let consumerId = StoreHelper.getAuthdConsumerId()
    if (!consumerId) {
      // this can happen if you visit the Seed Lists page and then refresh the page. No worries. Load will happen later.
      // console.log('seedListStore. Will not load seeds at this time because the consumer id is not yet set up.')
      return
    }
    let { offset, limit, sortKey, sortDir, tagList, appTypes, searchTerm } = payload
    let qs = `toolConsumerId=${consumerId}&offset=${offset}&limit=${limit}&sortKey=${sortKey}&sortDir=${sortDir}&appTypes=${appTypes}`
    if (tagList) {
      qs += '&tagList=' + tagList
    }
    if (searchTerm) {
      qs += '&searchTerm=' + searchTerm
    }
    let url = 'paginate?' + qs
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.list
      if (!list) {
        console.error('ERROR the system should have seeddata')
        return
      }
      context.commit('_setSeedDataList', list)
      context.commit('_setListMeta', response.data.metadata)
      return list
    })
  },


  /**
   * Create a new ehr seed
   * @param context
   * @param payload
   * @return {*}
   */
  async createSeedItem (context, payload) {
    let url = '/createSeed/'
    if (debugSL) console.log('SeedList send seed data ', url, payload)
    const results = await InstoreHelper.postRequest(context, API, url, payload)
    if (debugSL) console.log('SeedList after create seed:', results.data)
    // set the new seed id into store
    await context.commit('_setSeedId', results.data._id)
    // next call the load all seeds
    if (debugSL) console.log('SeedList after seed create. Now loadSeeds')
    await context.dispatch('loadSeeds')
    // next api call to load the newly created seed (i.e. get data from server not the input to this method)
    if (debugSL) console.log('SeedList after seed create now load created seed content')
    await context.dispatch('loadSeedContent', context.state.sSeedId)
    // return the newly created and loaded seed
    const seedModel =  context.getters.seedModel
    if (debugSL) console.log('SeedList new seed model:', seedModel)
    return seedModel
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
    let url = '/updateSeed/' + id
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
    let id = context.state.sSeedId
    let url = urlForUpdate + id +'/draft'
    const sd = await InstoreHelper.putRequest(context, API, url, payload, 'silent')
    await context.commit('_setSeedContent', sd.data)
  },
  /**
   * support saving partial data inside the seed's ehr data
   * @param context
   * @param payload with id and data eg:
   *    let data = {
   *      propertyName: 'progressNotes',  // page key
   *      value: model.ehrData.progressNotes || []
   *      }
   * @return {*}
   */ async updateSeedEhrProperty (context, payload) {
    let id = context.state.sSeedId
    let url = urlForUpdate + id + '/save'
    if (debugSL) console.log('SeedList updateSeedEhrProperty url, payload', url, payload)
    await InstoreHelper.putRequest(context, API, url, payload)
    // if (debugSL) console.log('SeedList after ehrData update loadSeeds')
    // await context.dispatch('loadSeeds')
    if (context.state.sSeedId) {
      if (debugSL) console.log('SeedList after ehrData update load seed content context.state.sSeedId', context.state.sSeedId)
      await context.dispatch('loadSeedContent', context.state.sSeedId)
    }
    // console.log('context.state.seedContent', context.state.seedModel)
    // lateral push data over to patient list which needs to react to changes to family name
    // This could be achived with some event notice and receive but this direct push is, well, direct.
    const seed = context.state.seedModel.seed
    await context.dispatch('mPatientStore/updateSeedInActivePatientList', seed, { root: true })
  },
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
    if(value) {
      // state.sSeedContent = value
      state.seedModel = new SeedModel(value)
      const edm = state.seedModel.ehrDataModel
      state.ehrData = edm && edm.ehrData ? edm.ehrData : undefined
    } else {
      state.seedModel = EMPTY_SEED_MODEL_DEF
      state.ehrData = undefined
    }
  },
  _setSeedDataList: (state, list) => {
    state.seedDataList = list
  },
  _setListMeta: (state, metadata) => {
    state.listMetadata = metadata
  },
  _setAllTagList: (state, allTagList) => {
    state.allTagList = allTagList
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
