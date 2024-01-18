import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import MPatientHelper from '@/helpers/mPatientHelper'
const EMPTY_OBJECT_ID = ''
const state = {
  activePatientList: [],
  searchMatches: [], // list of seed objects
  currentPatientObjectId: EMPTY_OBJECT_ID
}

const getters = {
  activeCaseStudyPatientList: state => { return state.activePatientList  },
  currentPatientObjectId: state => state.currentPatientObjectId,
  searchMatches: state => state.searchMatches
}

let trace = false

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearMPatientData (context) {
    if (trace) console.log('multi patient clearMPatientData')
    context.commit('_setCurrentPatientObjectId', undefined)
  },
  clearSearchMatches (context) {
    if (trace) console.log('multi patient clearSearchMatches')
    context.commit('_setSearchMatches', [])
  },
  /**
   * Selects the object, with the given id, as the currently active patient. This could be a
   * case study under a student's data or it could be a patient created by the student.
   * @param context
   * @param id
   */
  setCurrentPatientObjectId (context, id) {
    if (trace) console.log('multi patient setCurrentPatientObjectId', id)
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
    if (trace) console.log('multi patient addStudentPatient', patientId)
    if (this.currentPatientObjectId && this.currentPatientObjectId === patientId) {
      // console.log('mps Patient is already in the list and it is the currently selected object', patientId)
    } else {
      const index = state.activePatientList.findIndex(sd => sd._id === patientId)
      if (index >= 0) {
        // console.log('mps Patient is already in the list so just make this patient the active one.', patientId)
        context.commit('_setCurrentPatientObjectId', patientId)
      } else {
        // console.log('mps Else the object is not in list', patientId)
        // TODO handle student created patient ...
        let payload = { seedId: patientId }
        await context.dispatch('activityDataStore/sendAddPatientToAssignmentData', payload, {root:true})
        // note that the above dispatch will have reloaded the assignment data and pushed the patient list into this store. So the patient list is ready to go
        await context.commit('_setCurrentPatientObjectId', patientId)
      }
    }
  },
  async ehrOnlyDemo ( context, seedId) {
    if (trace) console.log('multi patient ehrOnlyDemo', seedId)
    await context.commit('_setCurrentPatientObjectId', seedId)
  },
  async addSeedToActivePatientList (context, seed) {
    if (trace) console.log('multi patient addSeedToActivePatientList', seed)
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
  async updateSeedInActivePatientList (context, seed) {
    if (trace) console.log('multi patient updateSeedInActivePatientList', seed)
    context.commit('_updatePatientObjectId', seed)
  },
  async forInstructorSetPatient (context, patientId) {
    if (trace) console.log('multi patient forInstructorSetPatient', patientId)
    if (this.currentPatientObjectId && this.currentPatientObjectId === patientId) {
      // console.log('mps Patient is already in the list and it is the currently selected object', patientId)
    } else {
      const patientList = MPatientHelper.getCurrentPatientList()
      if (patientList) {
        const index = patientList.findIndex(sd => sd._id === patientId)
        if (index >= 0) {
          // console.log('mps Patient is already in the list so just make this patient the active one.', patientId)
          context.commit('_setCurrentPatientObjectId', patientId)
        } else {
          // console.log('mps Else the object is not in list', patientId)
        }
      }
    }
  },

  removePatient (context, id) {
    if (trace) console.log('multi patient removePatient', id)
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
    if (trace) console.log('multi patient searchForPatientsBy', options)
    let url = 'patientSearch?' //mrn=' + mrn
    let hasPart = false
    if (options.mrn) {
      url += 'mrn=' + options.mrn
      hasPart = true
    }
    if (options.name) {
      url += 'name=' + options.name
      hasPart = true
    }
    if (options.appType) {
      url += (hasPart ? '&' : '') + 'appType=' + options.appType
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
   * loadStudentPatientList is invoked by activity data store whenever the activity data (which includes student assignment data) is retrieved
   * @param context
   * @param patientList
   * @returns {Promise<void>}
   */
  async loadStudentPatientList (context, patientList) {
    if (trace) console.log('multi patient loadStudentPatientList', patientList)
    // decouple the list because the data is coming from the activity store, and we can't modify vuex data outside a store mutation
    patientList = JSON.parse(JSON.stringify(patientList))
    patientList = await MPatientHelper.fillOutPatientList(patientList)
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
    MPatientHelper.sortPatientList(list)
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
  _updatePatientObjectId: (context, seed) => {
    const index = state.activePatientList.findIndex(sd => sd._id === seed._id)
    if (index >= 0) {
      // let list = state.activePatientList.slice() // decouple original list
      const list = JSON.parse(JSON.stringify(state.activePatientList))
      list.splice(index, 1)
      list.push(seed)
      MPatientHelper.sortPatientList(list)
      state.activePatientList = list
    }
  },
  _setCurrentPatientObjectId: (state, id) => {
    if (id) {
      localStorage.setItem(STORED_ID, id)
    } else {
      localStorage.removeItem(STORED_ID)
      id = EMPTY_OBJECT_ID
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
