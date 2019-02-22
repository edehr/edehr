import Vue from 'vue'
import Vuex from 'vuex'
import visit from './modules/visit'
import instructor from './modules/instructor'
import assignment from './modules/assignment'
import ehrData from './modules/ehrData'
import system from './modules/system'
import seedStore from './modules/seedStore'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    visit,
    instructor,
    assignment,
    system,
    ehrData,
    seedStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
