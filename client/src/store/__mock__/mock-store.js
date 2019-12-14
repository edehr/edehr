import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import activityStore from '../modules/activityStore'
import activityDataStore from '../modules/activityDataStore'
import assignmentStore from '../modules/assignmentStore'
import assignmentListStore from '../modules/assignmentListStore'
import classListStore from '../modules/classListStore'
import consumerStore from '../modules/consumerStore'
import ehrDataStore from '../modules/ehrDataStore'
import instructor from '../modules/instructor'
import seedListStore from '../modules/seedListStore'
import userStore from '../modules/userStore'
import system from '../modules/system'
import visit from '../modules/visit'

console.log('This is the mocked storage')

export const localVue = createLocalVue()
localVue.use(Vuex)

// copy code from ../store/index.js
export default new Vuex.Store({
  modules: {
    activityStore,
    activityDataStore,
    assignmentListStore,
    assignmentStore,
    classListStore,
    consumerStore,
    ehrDataStore,
    instructor,
    seedListStore,
    system,
    userStore,
    visit,
  }
})
