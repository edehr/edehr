import router from '../router'
import StoreHelper from './store-helper'

/**
 * Helper class with methods that assist instructors during evaluation of student's work.
 * Includes actions
 * - on a "current" student such as submit, unsubmit, etc.
 * - list actions such as is there a next? a previous? go to next, go to previous, go to X
 *
 * - The current student's position in the list is the current index.
 *
 */
class EvalHelperWorker {

  forceSubmit (studentVisit) {
    // console.log('EvalHelper forceSubmit sv', studentVisit)
    return this.changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.studentSubmitsAssignment(true)
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }

  instructorUnsubmitsAssignment (studentVisit) {
    return this.changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.instructorUnsubmitsAssignment()
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }
  goToEhr (studentVisit, customRouter = router) {
    // Assumes the activity and assignment and seed are all in place.
    // switch to the EHR with the current student's information loaded

    // The customRouter parameter is being passed in order to satisfy some 
    // testing / mocking needs. 
    // In short, during the tests, a mocked router can be passed and, if it's not passed, it 
    // falls back to the imported router. Please refer to this function's unit test for more 
    // information on how the mocking of the router is implemented.
    return this.changeStudent(studentVisit._id)
      .then( () => {
        // Go to the EHR with current student
        customRouter.push({ name: 'ehr', query: { evaluatingStudent: true, studentId: studentVisit._id } })
      })
  }

  changeStudent (studentVisitId) {
    // just record who is the current student
    return StoreHelper.changeStudentForInstructor(studentVisitId)
  }

}

const EvalHelper = new EvalHelperWorker()
export default EvalHelper
