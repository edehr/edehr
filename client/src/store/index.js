import Vue from 'vue'
import Vuex from 'vuex'
import activityStore from './modules/activityStore'
import activityDataStore from './modules/activityDataStore'
import authStore from './modules/authStore'
import assignmentStore from './modules/assignmentStore'
import assignmentListStore from './modules/assignmentListStore'
import consumerListStore from './modules/consumerListStore'
import classListStore from './modules/classListStore'
import consumerStore from './modules/consumerStore'
import ehrDataStore from './modules/ehrDataStore'
import instructor from './modules/instructor'
import seedListStore from './modules/seedListStore'
import system from './modules/system'
import userStore from './modules/userStore'
import visit from './modules/visit'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    activityStore,
    activityDataStore,
    authStore,
    assignmentListStore,
    assignmentStore,
    classListStore,
    consumerStore,
    consumerListStore,
    ehrDataStore,
    instructor,
    seedListStore,
    system,
    userStore,
    visit,
  },
  strict: debug,
  // Uncomment to enable a log of all storage transistions
  // plugins: debug ? [createLogger()] : []
})
