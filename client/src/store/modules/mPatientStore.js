import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
const EMPTY_OBJECT_ID = ''
const state = {
  activePatientList: [],
  searchMatches: [], // list of seed objects
  currentPatientObjectId: EMPTY_OBJECT_ID
}

const getters = {
  activeCaseStudyPatientList: state => { return state.activePatientList  },
  // currentPatient: state => { return state.activePatientList.find(p => p._id === state.currentPatientObjectId) },
  currentPatientObjectId: state => state.currentPatientObjectId,
  searchMatches: state => state.searchMatches
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearSearchMatches (context) {
    context.commit('_setSearchMatches', [])
  },
  /**
   * Selects the object, with the given id, as the currently active patient. This could be a
   * case study under a student's data or it could be a patient created by the student.
   * @param context
   * @param id
   */
  setCurrentPatientObjectId (context, id) {
    context.commit('_setCurrentPatientObjectId', id)
  },
  /**
   * User has searched for a "patient" with the multi-patient search dialog.
   * They have selected a case study (seed) or a patient (student's own data).
   * Add the given object to the active patient list.
   * Make the given object the "active" patient.
   * @param context
   * @param patientId: SeedData or PatientData
   */
  async addStudentPatient (context, patientId) {
    if (this.currentPatientObjectId && this.currentPatientObjectId === patientId) {
      // console.log('mps Patient is already in the list and it is the currently selected object', patientId)
    } else {
      const index = state.activePatientList.findIndex(sd => sd._id === patientId)
      if (index >= 0) {
        // console.log('mps Patient is already in the list so just make this patient the active one.', patientId)
        context.commit('_setCurrentPatientObjectId', patientId)
      } else {
        // console.log('mps Else the object is not in list', patientId)
        const API = 'activity-data'
        let activityDataId = context.rootGetters['visit/activityDataId']
        // TODO handle student created patient ...
        let payload = { seedId: patientId }
        let url = 'add-patient-with-seed/' + activityDataId
        await InstoreHelper.putRequest(context, API, url, payload)
        await context.dispatch('loadStudentPatientList')
        await context.commit('_setCurrentPatientObjectId', patientId)
      }
    }
  },
  async addSeedToActivePatientList (context, seed) {
    if (this.currentPatientObjectId && this.currentPatientObjectId === seed._id) {
      // console.log('mps Patient is already in the list and it is the currently selected object', seed)
    } else {
      const index = state.activePatientList.findIndex(sd => sd._id === seed._id)
      if (index >= 0) {
        context.commit('_setCurrentPatientObjectId', seed._id)
      } else {
        context.commit('addPatientToActivePatientList', seed)
      }
    }
  },

  removePatient (context, id) {
    if (StoreHelper.isSeedEditing()) {
      context.commit('removePatient', id)
    }
  },
  /**
   * Returns and sets the list of matching object objects
   * @param context
   * @param options { mrn, name }
   * @returns {Promise<unknown>}
   */
  searchForPatientsBy ( context, options ) {
    let url = 'patientSearch?' //mrn=' + mrn
    if (options.mrn) {
      url += 'mrn=' + options.mrn
    }
    if (options.name) {
      url += 'name=' + options.name
    }
    const API = 'seed-data'
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let matchList = response.data.patientList
      if (!matchList) {
        console.error('ERROR the system should have list of key data for all patients')
        return
      }
      context.commit('_setSearchMatches', matchList)
      return matchList
    })
  },

  /**
   * Before dispatching this mPatient load be sure to load the activity data.
   *       await store.dispatch('activityDataStore/loadActivityData', { id: theActivity.activityDataId })
   * @param context
   * @returns {Promise<void>}
   */
  async loadStudentPatientList (context) {
    const patientList = context.rootGetters['activityDataStore/patientList'] || []
    await context.commit('_setPatientList', patientList)
  }

}

const STORED_ID = 'StoredPatientId'
const mutations = {
  initialize: function (state) {
    state.currentPatientObjectId = localStorage.getItem(STORED_ID)
  },
  addPatientToActivePatientList (context, object) {
    const list = JSON.parse(JSON.stringify(state.activePatientList))
    list.push(object)
    list.sort((a,b) => a.mrn.localeCompare(b.mrn))
    state.activePatientList = list
    state.currentPatientObjectId = object._id
  },
  removePatient (context, id) {
    const index = state.activePatientList.findIndex( object => object._id === id)
    if (index >= 0) {
      let list = state.activePatientList.slice() // decouple original list
      list.splice(index, 1)
      state.activePatientList = list
      if (id === state.currentPatientObjectId) {
        state.currentPatientObjectId = EMPTY_OBJECT_ID
      }
    }
  },
  _setCurrentPatientObjectId: (state, id) => {
    if (id) {
      localStorage.setItem(STORED_ID, id)
    } else {
      localStorage.removeItem(STORED_ID)
    }
    state.currentPatientObjectId = id
  },
  _setSearchMatches: (state, patientList) => {
    state.searchMatches = patientList
  },
  _setPatientList: (state, patientList) => { state.activePatientList = patientList}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
