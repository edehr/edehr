import StoreHelper from './storeHelper'
import EventBus from '../../helpers/event-bus'
import { ACTIVITY_DATA_EVENT } from '../../helpers/event-bus'
import { composeUrl, decoupleObject } from '../../helpers/ehr-utills'
import { ehrMergeEhrData, ehrMarkSeed } from '../../helpers/ehr-utills'
import { getPageDefinition, getDefaultValue, getDataCaseStudy } from '../../helpers/ehr-defs'

const helper = new StoreHelper()
const API_ACTIVITY = 'activity-data'

const state = {
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

const getters = {
  assignmentData: (state, getters, rootState) => {
    /*
    By the documentation getters['visit/isInstructor'] should work but it doesn't
    So use the direct access of rootstate ...
     */
    if (helper.instoreIsInstructor(rootState)) {
      console.log('Using current student from class list ', state.sCurrentStudentData)
      return state.sCurrentStudentData.assignmentData
    } else {
      console.log('Using students assignment data')
      // assignmentData is the data without seed
      return state.sActivityData.assignmentData
    }
  },
  mergedData: (state, getters, rootState) => {
    // Not always sure about Vue object whether the system has proxied them and added stuff.
    // So decouple the objects ... just in case
    let ehrSeedData = decoupleObject(rootState.seedStore.ehrSeedData)
    let mData
    if (helper.instoreIsDevContent(rootState)) {
      mData = ehrSeedData
      console.log('mergedData: Develop seed', ehrSeedData)
    } else if (helper.instoreIsInstructor(rootState)) {
      let evalAssignmentData = decoupleObject(state.sCurrentStudentData.assignmentData)
      mData = ehrMergeEhrData(ehrSeedData, evalAssignmentData)
      console.log('mergedData: Instructor result', mData)
    } else {
      // mark all elements in the page arrays to allow us to
      // strip the seed data out before saving
      ehrSeedData = ehrMarkSeed(ehrSeedData)
      let studentAssignmentData = decoupleObject(state.sActivityData.assignmentData)
      mData = ehrMergeEhrData(ehrSeedData, studentAssignmentData)
      console.log('mergedData: Student result', mData)
    }
    return mData
  },
  asLoadedDataForPageKey (state, getters, rootState) {
    return pageKey => {
      let mergedData = getters.mergedData
      // let pageKey = rootState.system.currentPageKey
      let pageData = mergedData[pageKey]
      // console.log('EhrData asLoadedDataForPageKey -=-=-=-=-=-=-=-=-=-=-=-=', pageKey, mergedData)
      if (!pageData) {
        let pageDef = getPageDefinition(pageKey)
        if (!pageKey || !pageDef) {
          // console.log('EhrData asLoadedDataForPageKey ................ too soon')
          return {}
        }
        let defaultPageValue = pageDef.pageData
        if (!defaultPageValue) {
          defaultPageValue = {}
          // console.log('asLoadedDataForPageKey page defs did not spec a default so create one ', defaultPageValue)
        } else {
          // console.log('asLoadedDataForPageKey page default data is ', JSON.stringify(defaultPageValue))
        }
        pageData = defaultPageValue
        mergedData[pageKey] = defaultPageValue
        let formDefs = pageDef.page_form
        if (formDefs) {
          // console.log('EhrData asLoadedDataForPageKey formDefs -=-=-=-=-=-=-=-=-=-=-=-=', pageKey)
          let rows = formDefs.rows
          rows.forEach(row => {
            row.elements.forEach(element => {
              let defaultValue = getDefaultValue(element)
              let isDevelopingContent = rootState.visit.isDevelopingContent
              if (isDevelopingContent) {
                defaultValue = getDataCaseStudy(element)
                // console.log('prepareAsLoadedData isDevelopingContent, defaultValue', isDevelopingContent, defaultValue  )
              }
              // TODO see about date, time, and boolean default values
              if (!pageData[element.elementKey]) {
                pageData[element.elementKey] = defaultValue
              }
            })
          })
        }
      }
      return pageData
    }
  },
  scratchData: (state, getters, rootState) => {
    // only return for student
    // scratchData is the student's notes
    if (rootState.visit.isStudent) {
      return state.sActivityData.scratchData
    }
    return {}
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
    return helper.putRequest(context, url, { value: data }).then(results => {
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
    return helper.getRequest(context, url).then(response => {
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
      return helper.getRequest(context, url).then(response => {
        let ad = response.data.activitydata
        // console.log('Got activity information ', ad)
        context.commit('_setActivityData', ad)
      })
    }
  },

  sendAssignmentDataUpdate (context, payload) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sActivityData._id
    console.log(
      'sendAssignmentDataUpdate activityDataId, apiUrl, property: ',
      activityDataId,
      apiUrl,
      payload.propertyName
    )
    let url = `${apiUrl}/activity-data/assignment-data/${activityDataId}`
    // Update the contents of the current visit's activityData.assignmentData.
    // Payload must have form similar to
    // let payload = {
    //   property: 'progressNotes',
    //   value: value
    // }
    return helper.putRequest(context, url, payload).then(results => {
      let activityData = results.data
      // console.log('ehrData commit activityData with new assignmentData', JSON.stringify(activityData.assignmentData))
      context.commit('_setActivityData', activityData)
      return activityData
    })
  },

  sendScratchData (context, data) {
    let activityDataId = context.state.sActivityData._id
    helpers.sendActivityData(context, activityDataId, data, 'scratch-data')
  },

  sendUnsubmit (context, activityDataId) {
    let data = { value: false }
    helpers.sendActivityData(context, activityDataId, data, 'submitted')
  },

  sendSubmitted (context, data) {
    let activityDataId = context.state.sActivityData._id
    helpers.sendActivityData(context, activityDataId, data, 'submitted')
  },

  sendEvaluated (context, data) {
    let activityDataId = data.activityDataId
    let newState = data.evaluated
    helpers.sendActivityData(context, activityDataId, newState, 'evaluated')
  },

  sendEvaluationNotes (context, data) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sCurrentStudentData.activityDataId
    // console.log('sendEvaluationNotes activityDataId, apiUrl, data ', activityDataId, apiUrl, JSON.stringify(data))
    let url = `${apiUrl}/activity-data/evaluation-data/${activityDataId}`
    return helper.putRequest(context, url, { value: data }).then(results => {
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

const mutations = {
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
