import router from '../router'
import StoreHelper from './store-helper'

// import { downArrayToCsvFile } from './ehr-utils'

// const debug = false

/**
 * Helper class with methods that assist instructors during evaluation of student's work.
 * Includes actions
 * - on a "current" student such as submit, unsubmit, etc.
 * - list actions such as is there a next? a previous? go to next, go to previous, go to X
 *
 * - The current student's position in the list is the current index.
 *
 * Provide list filtering, all, submitted, unevaluated (submitted yet not marked as evaluated)
 *
 */
class EvalHelperWorker {

  /*
  atStart () {
    let index = this.findCurrentIndex()
    return index === 0
  }
  atEnd () {
    let index = this.findCurrentIndex()
    return index + 1 < list.length
  }
  findCurrentIndex () {
    let id = this.currentStudentId()
    let classList = this.getClassList()
    let index = classList.findIndex(function (elem) {
      return elem._id === id
    })
    console.log('findCurrentIndex', id, ' index:', index, this.classList)
    return { list, index }
  }
  gotoPrevious () {
    let sv
    let classList = this.getClassList()
    let index = this.findCurrentIndex()
    index--
    if (index >= 0) {
      let sv = classList[index]
      this.changeStudent(sv)
    }
    return sv
  }
  gotoNext () {
    let sv
    let classList = this.getClassList()
    let index = this.findCurrentIndex()
    index++
    if (index < classList.length) {
      let sv = classList[index]
      this.changeStudent(sv)
    }
    return sv
  }
  */
  /*

  proceed (filename) {
    let data = []
    data.push(['email','feedback: ' + this.activityName])
    this.classList.forEach ( sv => {
      data.push([sv.user.emailPrimary,sv.activityData.evaluationData])
    })
    downArrayToCsvFile(filename, data)
  }
  */

  forceSubmit (studentVisit) {
    console.log('EvalHelper forceSubmit sv', studentVisit)
    return this.changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.studentSubmitsAssignment(true)
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }

  unsubmit (studentVisit) {
    // TODO now set activityData
    console.log('EvalHelper unsubmit sv', studentVisit)
    return this.changeStudent(studentVisit._id)
      .then(() => {
        return StoreHelper.instructorReturnsAssignment()
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }
  markEvaluated (studentVisit) {
    // TODO now set activityData
    return this.changeStudent(studentVisit._id)
      .then(() => {
        const newState = ! studentVisit.activityData.evaluated
        console.log('EvalHelper markEvaluated ', newState)
        return StoreHelper.instructorMarksWorkEvaluated(newState)
      })
      .then(() => {
        return StoreHelper.dispatchLoadClassList()
      })
  }

  closeActivity (activityId) {
    return StoreHelper.closeActivity(activityId)
      .then(() => {
        return StoreHelper.loadAsCurrentActivity(activityId)
      })
  }

  openActivity (activityId) {
    return StoreHelper.openActivity(activityId)
      .then(() => {
        return StoreHelper.loadAsCurrentActivity(activityId)
      })
  }


  goToEhr (studentVisit, r = router) {
    // Assumes the activity and assignment and seed are all in place.
    // switch to the EHR with the current student's information loaded
    return this.changeStudent(studentVisit._id)
      .then( () => {
        // The isDev flag may be set .. it needs to be OFF to evaluate a student.
        StoreHelper.setIsDevelopingContent(false)
        // Go to the EHR with current student
        // todo move this path to some global definition file
        let name = '/ehr/patient/demographics'
        r.push(name)
      })
  }

  changeStudent (studentVisitId) {
    // just record who is the current student
    return StoreHelper.changeStudentForInstructor(studentVisitId)
  }

}

const EvalHelper = new EvalHelperWorker()
export default EvalHelper