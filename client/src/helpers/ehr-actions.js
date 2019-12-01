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

  invokeNavPanelAction () {
    if (this.isStudent()) {
      if (this.isUnsubmittedStudent()) {
        StoreHelper.studentSubmitsAssignment(true).then(() => { this.gotoLMS() })
      } else {
        this.gotoLMS()
      }
    } else {
      console.error('Coding error. Call for nav panel action for non-student user')
    }
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
}