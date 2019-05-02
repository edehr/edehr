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

}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper