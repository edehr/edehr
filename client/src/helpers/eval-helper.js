import router from '../router'
import StoreHelper, { INSTRUCTOR_ACTION } from './store-helper'

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
    return this._changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.forceSubmitsAssignment(true)
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }

  instructorUnsubmitsAssignment (studentVisit) {
    return this._changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.instructorUnsubmitsAssignment()
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }
  // goToEhr (studentVisit, customRouter = router) {
  //   StoreHelper.postActionEvent(INSTRUCTOR_ACTION, 'evalInEHr')
  //   // The customRouter parameter is used by unit tests. Default to normal router
  //   customRouter.push({ name: 'ehr', query: { evaluateStudentVisitId: studentVisit._id } })
  // }
  studentEvaluation (studentVisitId, inEhr) {
    let pathName, actionTag
    if (inEhr) {
      pathName = 'ehr'
      actionTag = 'evalInEhr'
    } else {
      pathName = 'eval-student'
      actionTag = 'evalInCondensed'
    }
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, actionTag)
    if (inEhr && StoreHelper.inZoneEHR()) {
      // if user is inside the ehr area then don't change the path, let user stay on ehr page.
      router.push({ query: { evaluateStudentVisitId: studentVisitId } })
    } else {
      router.push({ name: pathName, query: { evaluateStudentVisitId: studentVisitId } })
    }
  }

  _changeStudent (studentVisitId) {
    // just record who is the current student
    return StoreHelper.changeStudentForInstructor(studentVisitId)
  }

}

const EvalHelper = new EvalHelperWorker()
export default EvalHelper
