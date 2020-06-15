import StoreHelper from '../helpers/store-helper'
import { Text } from './ehr-text'

export default class EhrActions {

  getNavPanelActionLabel () {
    return this.isUnsubmittedStudent() ? Text.SEND_FOR_EVAL : Text.RETURN_TO(StoreHelper.lmsName())
  }

  navPanelActionConfirmOptions () {
    return {title: Text.SEND_FOR_EVAL_TITLE, msg: Text.SEND_FOR_EVAL_BODY }
  }

  // hard return to the calling LMS
  gotoLMS () {
    // console.log('Return to ', StoreHelper.lmsUrl())
    window.location = StoreHelper.lmsUrl()
  }

  /**
   * Go to LMS unless the user is a student with unsubmitted work.
   * @return Promise
   */
  invokeNavPanelAction () {
    if (this.isStudent()) {
      if (this.isUnsubmittedStudent()) {
        return StoreHelper.studentSubmitsAssignment(true)
      }
    }
    this.gotoLMS()
    return Promise.resolve()
  }

  isStudent () {
    return StoreHelper.isStudent()
  }

  submitted () {
    return StoreHelper.isSubmitted()
  }

  isUnsubmittedStudent () {
    return this.isStudent() && !this.submitted()
  }

  getStudentHasSubmitted () {
    return Text.STUDENT_HAS_SUBMITTED
  }

  getAssignmentIsClosed () {
    return Text.ACTIVITY_IS_CLOSED
  }

}