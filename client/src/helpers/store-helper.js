import Vue from 'vue'
import store from '../store'
// Vue.use(Vuex)

class StoreHelperWorker {
  constructor () {
    this.shc = new Vue({store})
  }

  usingV2 () {
    let v2 =  this.shc.$store.state.system.usingV2
    return v2
  }
  getAsLoadedPageData (pageKey) {
    return this.shc.$store.getters['ehrData/asLoadedDataForPageKey'](pageKey)
  }

  /* **********   General  ************** */


  toolConsumerId (component) {
    let sVisitInfo = component.$store.state.visit.sVisitInfo
    return sVisitInfo ? sVisitInfo.toolConsumer._id : undefined
  }

  fullName (component) {
    return component.$store.getters['visit/fullName']
  }
  lmsUrl (component) {
    return component.$store.getters['visit/returnUrl']
  }
  lmsName (component) {
    return component.$store.getters['visit/lmsName']
  }
  isInstructor (component) {
    return component.$store.getters['visit/isInstructor']
  }
  isDeveloper (component) {
    return component.$store.getters['visit/isDeveloper']
  }
  isStudent (component) {
    return component.$store.getters['visit/isStudent']
  }

  isDevelopingContent (component) {
    return component.$store.state.visit.isDevelopingContent
  }

  isSubmitted (component) {
    return component.$store.getters['ehrData/submitted']
  }
  isEvaluated (component) {
    let activityData = component.$store.state.ehrData.sActivityData
    return activityData.evaluated
  }

  setLoading (context, value) {
    let rt = undefined
    if (context.$store) {
      context = context.$store
    } else {
      rt = { root: true }
    }
    context.commit('system/setLoading', value, rt)
  }

  setIsDevelopingContent (component, state) {
    component.$store.commit('visit/setIsDevelopingContent', state)
  }
  setInstructorReturnUrl (component, url) {
    component.$store.commit('instructor/setInstructorReturnUrl', url)
  }

  dispatchChangeCurrentEvaluationStudentId (component, classList, studentId) {
    let data = {classList: classList, studentId: studentId}
    return component.$store.dispatch('instructor/changeCurrentEvaluationStudentId', data)
  }

  /* **********   Activity  ************** */
  getCurrentActivity (component) {
    return component.$store.state.ehrData.sActivityData
  }
  // returns promise that resolves to activity
  dispatchLoadActivity ( component, activityId) {
    return component.$store.dispatch('instructor/loadActivity', activityId)
  }
  dispatchLoadCurrentActivity ( component, activityId) {
    return component.$store.dispatch('instructor/loadCurrentActivity', activityId)
  }

  // returns promise that resolves to class list
  dispatchLoadClassList ( component, activityId) {
    return component.$store.dispatch('instructor/loadClassList', activityId)
  }

  /* **********   Assignments  ************** */
  loadAssignmentAndSeedLists (component) {
    return Promise.all([
      component.$store.dispatch('seedStore/loadSeedDataList'),
      component.$store.dispatch('assignment/loadAssignments')
    ])
  }
  loadAssignmentList (component) {
    return component.$store.dispatch('assignment/loadAssignments')
  }

  findAssignment (component, toolConsumerId, externalId) {
    // console.log('Assignment findAssignment ', toolConsumerId, externalId)
    let payload = {toolConsumerId: toolConsumerId, externalId: externalId}
    return component.$store.dispatch('assignment/findAssignment', payload)
  }


  loadAssignment (component, id) {
    // console.log('Assignment Load ', id)
    return component.$store.dispatch('assignment/loadAssignment', id)
  }

  // returns promise that resolves to assignment list
  updateAssignment (component, assignmentId, assignmentData) {
    // console.log('Assignment update ', assignmentId, assignmentData)
    let dataIdPlusPayload = { id: assignmentId, payload: assignmentData }
    return component.$store.dispatch('assignment/updateAssignment', dataIdPlusPayload)
  }

  // returns promise that resolves to assignment list
  createAssignment (component, assignmentData) {
    // console.log('Assignment save ', assignmentData)
    return component.$store.dispatch('assignment/createAssignment', assignmentData)
  }

  getAssignmentsList (component) {
    return component.$store.state.assignment.assignmentsListing
  }

  /* **********   Seed Data  ************** */

  loadSeedLists (component) {
    return Promise.all([
      component.$store.dispatch('seedStore/loadSeedDataList'),
    ])
  }

  updateSeed (component, seedId, theData) {
    // console.log('Seed Data update ', seedId, theData)
    let dataIdPlusPayload = { id: seedId, payload: theData }
    return component.$store.dispatch('seedStore/updateSeedItem', dataIdPlusPayload)
  }

  createSeed (component, seedData) {
    // console.log('Seed create ', seedData)
    return component.$store.dispatch('seedStore/createSeedItem', seedData)
  }

  getSeedDataList (component) {
    return component.$store.state.seedStore.seedDataList
  }

  /* ************* EHR Context

   */
  getPanelData (component) {
    let visitInfo = component.$store.state.visit.sVisitInfo || {}
    let assignment = visitInfo.assignment || {}
    let activity = visitInfo.activity || {}
    let activityData = component.$store.state.ehrData.sActivityData
    let name = component.$store.state.visit.sUserInfo.fullName
    // console.log('assignment', JSON.stringify(assignment))
    // console.log('visitInfo', JSON.stringify(visitInfo, null, 2))
    // console.log('activity', JSON.stringify(activity, null, 2))
    // sActivityData provides the seed and current assignment data
    // let sActivityData = this.$store.state.ehrData.sActivityData || {}
    // console.log('sActivityData', JSON.stringify(sActivityData, null, 2))
    let data = {
      studentName: name,
      courseTitle: activity.context_title,
      activityTitle: activity.resource_link_title,
      activityDescription: activity.resource_link_description,
      assignmentName: assignment.name,
      assignmentDescription: assignment.description,
      activityData: activityData
    }
    return data
  }
}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper