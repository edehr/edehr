import Vue from 'vue'

class StoreHelperWorker {
  constructor () {
    this.shc = new Vue()
  }


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

  // returns promise that resolves to activity
  dispatchLoadActivity ( component, activityId) {
    return component.$store.dispatch('instructor/loadActivity', activityId)
  }

  // returns promise that resolves to class list
  dispatchLoadClassList ( component, activityId) {
    return component.$store.dispatch('instructor/loadClassList', activityId)
  }

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