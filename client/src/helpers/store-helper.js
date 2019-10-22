
import store from '../store'


class StoreHelperWorker {

  getAsLoadedPageData (pageKey) {
    return store.getters['ehrData/asLoadedDataForPageKey'](pageKey)
  }

  /* **********   General  ************** */

  toolConsumerId () {
    let sVisitInfo = store.state.visit.sVisitInfo
    return sVisitInfo ? sVisitInfo.toolConsumer._id : undefined
  }

  fullName () {
    return store.getters['visit/fullName']
  }
  lmsUrl () {
    return store.getters['visit/returnUrl']
  }
  lmsName () {
    return store.getters['visit/lmsName']
  }
  isInstructor () {
    return store.getters['visit/isInstructor']
  }
  isDeveloper () {
    return store.getters['visit/isDeveloper']
  }
  isStudent () {
    return store.getters['visit/isStudent']
  }

  isDevelopingContent () {
    return store.state.visit.isDevelopingContent
  }

  isSubmitted () {
    return store.getters['ehrData/submitted']
  }
  isEvaluated () {
    let activityData = store.state.ehrData.sActivityData
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
    store.commit('visit/setIsDevelopingContent', state)
  }
  setInstructorReturnUrl (component, url) {
    store.commit('instructor/setInstructorReturnUrl', url)
  }

  dispatchChangeCurrentEvaluationStudentId (component, classList, studentId) {
    let data = {classList: classList, studentId: studentId}
    return store.dispatch('instructor/changeCurrentEvaluationStudentId', data)
  }

  /* **********   Activity  ************** */
  getCourseList () {
    let list = store.state.instructor.sCourses || []
    return list
  }

  activitiesUsingAssignmentCount (assignmentId) {
    let cnt = 0
    let courses = this.getCourseList()
    courses.forEach(course => {
      course.activities.forEach( a => cnt += a.assignment === assignmentId ? 1 : 0)
    })
    return cnt
  }

  getCurrentActivity () {
    return store.state.ehrData.sActivityData
  }
  // returns promise that resolves to activity
  dispatchLoadActivity ( component, activityId) {
    return store.dispatch('instructor/loadActivity', activityId)
  }
  dispatchLoadCurrentActivity ( component, activityId) {
    return store.dispatch('instructor/loadCurrentActivity', activityId)
  }

  // returns promise that resolves to class list
  dispatchLoadClassList ( component, activityId) {
    return store.dispatch('instructor/loadClassList', activityId)
  }

  /* **********   Assignments  ************** */
  loadAssignmentAndSeedLists () {
    return Promise.all([
      store.dispatch('seedStore/loadSeedDataList'),
      store.dispatch('assignment/loadAssignments')
    ])
  }
  loadAssignmentList () {
    return store.dispatch('assignment/loadAssignments')
  }

  findAssignment (component, toolConsumerId, externalId) {
    // console.log('Assignment findAssignment ', toolConsumerId, externalId)
    let payload = {toolConsumerId: toolConsumerId, externalId: externalId}
    return store.dispatch('assignment/findAssignment', payload)
  }

  getLoadedAssignment () {
    return store.state.assignment.assignment
  }

  switchAssignment (assignment) {
    return store.dispatch('assignment/switchAssignment', assignment)
  }

  getAssignment (component, id) {
    // console.log('Assignment Load ', id)
    return store.dispatch('assignment/getAssignment', id)
  }

  // returns promise that resolves to assignment list
  updateAssignment (component, assignmentId, assignmentData) {
    // console.log('Assignment update ', assignmentId, assignmentData)
    let dataIdPlusPayload = { id: assignmentId, payload: assignmentData }
    return store.dispatch('assignment/updateAssignment', dataIdPlusPayload)
  }

  // returns promise that resolves to assignment list
  createAssignment (component, assignmentData) {
    // console.log('Assignment save ', assignmentData)
    return store.dispatch('assignment/createAssignment', assignmentData)
  }

  getAssignmentsList () {
    return store.state.assignment.assignmentsListing
  }

  /* **********   Seed Data  ************** */

  loadSeedLists () {
    return Promise.all([
      store.dispatch('seedStore/loadSeedDataList'),
    ])
  }

  updateSeed (component, seedId, theData) {
    // console.log('Seed Data update ', seedId, theData)
    let dataIdPlusPayload = { id: seedId, payload: theData }
    return store.dispatch('seedStore/updateSeedItem', dataIdPlusPayload)
  }

  createSeed (component, seedData) {
    // console.log('Seed create ', seedData)
    return store.dispatch('seedStore/createSeedItem', seedData)
  }

  getSeedDataList () {
    return store.state.seedStore.seedDataList
  }

  /* ************* EHR Context

   */
  getPanelData () {
    let visitInfo = store.state.visit.sVisitInfo || {}
    let assignment = visitInfo.assignment || {}
    let activity = visitInfo.activity || {}
    let activityData = store.state.ehrData.sActivityData
    let currentEvaluationStudent = store.getters['instructor/currentEvaluationStudent']
    let student = currentEvaluationStudent.user || {}
    // console.log('getPanelData: student', JSON.stringify(currentEvaluationStudent, null, 2))
    // console.log('assignment', JSON.stringify(assignment))
    // console.log('visitInfo', JSON.stringify(visitInfo, null, 2))
    // console.log('activity', JSON.stringify(activity, null, 2))
    // sActivityData provides the seed and current assignment data
    // let sActivityData = this.$store.state.ehrData.sActivityData || {}
    // console.log('GetPagelData data.lastVisitDate', data.lastVisitDate)
    // console.log('sActivityData', JSON.stringify(sActivityData, null, 2))
    let data = {
      student: student,
      studentName: student.fullName,
      courseTitle: activity.context_title,
      activityTitle: activity.resource_link_title,
      activityDescription: activity.resource_link_description,
      assignmentName: assignment.name,
      assignmentDescription: assignment.description,
      activityData: activityData,
      lastVisitDate: currentEvaluationStudent.lastVisitDate
    }
    return data
  }
}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper