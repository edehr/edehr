import Vue from 'vue'
import Vuex from 'vuex'
import activityStore from './modules/activityStore'
import activityDataStore from './modules/activityDataStore'
import authStore from './modules/authStore'
import assignmentStore from './modules/assignmentStore'
import assignmentListStore from './modules/assignmentListStore'
import classListStore from './modules/classListStore'
import consumerStore from './modules/consumerStore'
import demoStore from './modules/demoStore'
import ehrDataStore from './modules/ehrDataStore'
import ehrOnlyDemoStore from '@/store/modules/ehrOnlyDemoStore'
import fileListStore from './modules/fileListStore'
import instructor from './modules/instructor'
import seedListStore from './modules/seedListStore'
import system from './modules/system'
import userStore from './modules/userStore'
import visit from './modules/visit'
import visitList from './modules/visitList'
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
    demoStore,
    ehrDataStore,
    ehrOnlyDemoStore,
    fileListStore,
    instructor,
    seedListStore,
    system,
    userStore,
    visit,
    visitList,
  },
  strict: debug,
  // Uncomment to enable a log of all storage transistions
  // plugins: debug ? [createLogger()] : []
})

export function initializeStore (store) {
  // console.log('Initialize vuex modules')
  store.dispatch('activityStore/initialize')
  store.dispatch('assignmentStore/initialize')
  store.dispatch('authStore/initialize')
  store.dispatch('demoStore/initialize')
  store.dispatch('instructor/initialize')
  store.dispatch('system/initialize')
  store.dispatch('seedListStore/initialize')
  store.dispatch('visit/initialize')
}
