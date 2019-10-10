import InstoreHelper from './instoreHelper'
import EventBus from '../../helpers/event-bus'
import { ACTIVITY_DATA_EVENT } from '../../helpers/event-bus'
import { composeUrl, decoupleObject } from '../../helpers/ehr-utils'
import { ehrMergeEhrData, ehrMarkSeed } from '../../helpers/ehr-utils'
import EhrDefs from '../../helpers/ehr-defs-grid'

const API_ACTIVITY = 'activity-data'

export const state = {
  /*
  sActivityData is a db model object containing the student's assignment work, scratch pad, instructors evaluation notes, etc
   */
  sActivityData: {},
  forStudent: false,
  /*
  These two objects contain the information needed by the instructor to see and evaluate the student's work.
  sCurrentStudentInfo contains information about the student.
  sCurrentStudentData contains the student's assignment work and instructors evaluation notes
   */
  sCurrentStudentInfo: {},
  sCurrentStudentData: {}
}

export const getters = {
  assignmentData: (state, getters, rootState) => {
    const debug = false
    /*
    By the documentation getters['visit/isInstructor'] should work but it doesn't
    So use the direct access of rootstate ...
     */
    if (InstoreHelper.instoreIsInstructor(rootState)) {
      if(debug) console.log('Using current student from class list ', state.sCurrentStudentData)
      return state.sCurrentStudentData.assignmentData
    } else {
      if(debug) console.log('Using students assignment data')
      // assignmentData is the data without seed
      return state.sActivityData.assignmentData
    }
  },
  mergedData: (state, getters, rootState) => {
    // Not always sure about Vue object whether the system has proxied them and added stuff.
    // So decouple the objects ... just in case
    let ehrSeedData = decoupleObject(rootState.seedStore.ehrSeedData)
    let mData
    const debug = false
    if (InstoreHelper.instoreIsDevContent(rootState)) {
      mData = ehrSeedData
      if(debug) {
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= Develop seed', ehrSeedData)
      }
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      let evalAssignmentData = decoupleObject(state.sCurrentStudentData.assignmentData)
      if(debug) {
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= Instructor ehrSeedData', ehrSeedData)
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= sCurrentStudentData.assignmentData', evalAssignmentData)
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= Instructor result', mData)
      }
      mData = ehrMergeEhrData(ehrSeedData, evalAssignmentData)
    } else {
      // mark all elements in the page arrays to allow us to
      // strip the seed data out before saving
      ehrSeedData = ehrMarkSeed(ehrSeedData)
      let studentAssignmentData = decoupleObject(state.sActivityData.assignmentData)
      mData = ehrMergeEhrData(ehrSeedData, studentAssignmentData)
      if(debug) {
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= Student ehrSeedData', JSON.stringify(ehrSeedData))
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= studentAssignmentData', JSON.stringify(studentAssignmentData))
        console.log('EhrData mergedData -=-=-=-=-=-=-=-=-=-=-=-= Student result', JSON.stringify(mData))
      }
    }
    return mData
  },
  hasDataForPagesList (state, getters, rootState) {
    // console.log('hasDataForPagesList')
    const pageKeys = EhrDefs.getAllPageKeys()
    const mergedData = getters.mergedData
    const seedData = rootState.seedStore.ehrSeedData
    const instructorData = state.sCurrentStudentData.assignmentData
    const studentData = state.sActivityData.assignmentData
    let results = {}
    pageKeys.forEach( key => {
      results[key] = {
        pagekey: key
      }
      if (mergedData) results[key].hasMerged = !! mergedData[key]
      if (seedData) results[key].hasSeed = !! seedData[key]
      if (instructorData) results[key].hasInstructor = !! instructorData[key]
      if (studentData) results[key].hasStudent = !! studentData[key]
    })
    return results
  },
  asLoadedDataForPageKey (state, getters, rootState) {
    return pageKey => {
      let mergedData = getters.mergedData
      let pageData = mergedData[pageKey]
      return pageData || {}
    }
  },
  scratchData: (state, getters, rootState) => {
    // TODO only return for student
    // scratchData is the student's notes
    // if (rootState.visit.isStudent) {
    return state.sActivityData.scratchData
    // }
    // return ''
  },
  submitted: state => {
    return state.sActivityData.submitted
  },
  evaluated: state => {
    return state.sActivityData.evaluated
  },

  evaluationData: state => {
    // evaluationData is the instructor's comments on the student's work
    return state.sCurrentStudentData.evaluationData
  }
}

const helpers = {
  sendActivityData (context, activityDataId, data, parameter) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activity-data/${parameter}/${activityDataId}`
    console.log('ActivityData send ', url)
    return InstoreHelper.putRequest(context, url, { value: data }).then(results => {
      let activityData = results.data
      context.commit('_setActivityData', activityData)
      return activityData
    })
  }
}

const actions = {
  loadActivityData (context, options) {
    let activityDataId = options.id
    // console.log('Get activityData  ', activityDataId)
    let url = composeUrl(context, API_ACTIVITY) + `get/${activityDataId}`
    return InstoreHelper.getRequest(context, url).then(response => {
      let ad = response.data.activitydata
      context.commit('_setForStudent', options.forStudent)
      // console.log('Got activity information ', ad)
      if (options.forStudent) {
        context.commit('_setActivityData', ad)
      } else {
        context.commit('_setCurrentStudentData', ad)
      }
    })
  },

  restoreActivityData (context) {
    let forStudent = context.state.forStudent
    // console.log('restoreActivityData ', forStudent)
    if (forStudent) {
      let visitState = context.rootState.visit
      let apiUrl = visitState.apiUrl
      let activityDataId = context.state.sActivityData._id
      let url = `${apiUrl}/activity-data/get/${activityDataId}`
      return InstoreHelper.getRequest(context, url).then(response => {
        let ad = response.data.activitydata
        // console.log('Got activity information ', ad)
        context.commit('_setActivityData', ad)
      })
    }
  },

  sendAssignmentDataUpdate (context, payload) {
    // Update the contents of the current visit's activityData.assignmentData.
    // Payload must have form similar to
    // let payload = {
    //   propertyName: 'progressNotes',
    //   value: value
    // }
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let adi = context.state.sActivityData._id
    // let pn = payload.propertyName
    // console.log('sendAssignmentDataUpdate activityDataId, apiUrl, property: ', adi, apiUrl, pn)
    let url = `${apiUrl}/activity-data/assignment-data/${adi}`
    console.log('sendAssignmentDataUpdate', payload)
    return InstoreHelper.putRequest(context, url, payload).then(results => {
      let activityData = results.data
      // console.log('ehrData commit activityData with new assignmentData', JSON.stringify(activityData.assignmentData))
      context.commit('_setActivityData', activityData)
      return activityData
    })
  },

  sendScratchData (context, data) {
    let activityDataId = context.state.sActivityData._id
    return helpers.sendActivityData(context, activityDataId, data, 'scratch-data')
  },

  sendSubmitOverride (context, data) {
    return helpers.sendActivityData(context, data.activityDataId, data.value, 'submitted')
  },

  sendSubmitted (context, data) {
    let activityDataId = context.state.sActivityData._id
    return helpers.sendActivityData(context, activityDataId, data, 'submitted')
  },

  sendEvaluated (context, data) {
    let activityDataId = data.activityDataId
    let newState = data.evaluated
    return helpers.sendActivityData(context, activityDataId, newState, 'evaluated')
  },

  /**
   * Returns promise that resolves to updated activity data
   * @param context
   * @param data
   * @return {*}
   */
  sendEvaluationNotes (context, data) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sCurrentStudentData.activityDataId
    // console.log('sendEvaluationNotes activityDataId, apiUrl, data ', activityDataId, apiUrl, JSON.stringify(data))
    let url = `${apiUrl}/activity-data/evaluation-data/${activityDataId}`
    return InstoreHelper.putRequest(context, url, { value: data }).then(results => {
      let activityData = results.data
      console.log(
        'ehrData update current student data with new evaluation data',
        JSON.stringify(activityData)
      )
      context.commit('_setCurrentStudentData', activityData)
      return activityData
    })
  }
}

export const mutations = {
  _setForStudent: (state, value) => {
    state.forStudent = value
  },
  _setActivityData: (state, cData) => {
    // console.log('_setActivityData', cData)
    // console.log('_setActivityData\'s assignment', cData.assignment)
    state.sActivityData = cData
    EventBus.$emit(ACTIVITY_DATA_EVENT)
  },
  _setCurrentStudentData: (state, activitydata) => {
    state.sCurrentStudentData = {
      activityDataId: activitydata._id,
      evaluationData: activitydata.evaluationData || '',
      assignmentData: activitydata.assignmentData || {},
      lastDate: activitydata.lastDate
    }
    // let sd = state.sCurrentStudentData.assignmentData
    // console.log('set state.sCurrentStudentData.assignmentData',sd)
  },
  setCurrentStudentInfo: (state, cData) => {
    // console.log('set setCurrentStudentInfo', cData)
    state.sCurrentStudentInfo = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
