import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import visit from '../modules/visit'
import instructor from '../modules/instructor'
import assignment from '../modules/assignment'
import ehrData from '../modules/ehrData'
import system from '../modules/system'
import seedStore from '../modules/seedStore'

console.log('This is the mocked storage')

export const localVue = createLocalVue()
localVue.use(Vuex)

// copy code from ../store/index.js
export default new Vuex.Store({
  modules: {
    visit,
    instructor,
    assignment,
    system,
    ehrData,
    seedStore
  }
})
