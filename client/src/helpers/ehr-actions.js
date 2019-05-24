

export default class EhrActions {
  constructor (store, router) {
    this.$store = store
    this.$router = router

  }

  getNavPanelActionLabel () {
    let lmsName = this.$store.getters['visit/lmsName']
    let label = 'Return to ' + lmsName
    if (this.navPanelActionNeedsConfirmation()) {
      label = 'Submit for evaluation'
    }
    return label
  }

  navPanelActionNeedsConfirmation () {
    return this.isStudent() && !this.submitted()
  }

  navPanelActionConfirmOptions () {
    let options = {}
    options.title ='Submit assignment'
    options.msg = 'By submitting this assignment, you are sending it to your instructor for marking. You will not be able to edit it after sending. Are you sure you want to submit?'
    return options
  }

  invokeNavPanelAction () {
    if (this.isStudent()) {
      if (!this.submitted()) {
        this.$store.dispatch('ehrData/sendSubmitted', true)
      }
      // hard return to the calling LMS
      window.location = this.$store.getters['visit/returnUrl']
    } else {
      // stay within application and use router push
      var pathname = this.$store.state.instructor.sInstructorReturnUrl
      // console.log(`go to ${pathname} via router push to retain veux state information`)
      this.$router.push({ path: pathname })
    }
  }
  isStudent () {
    return this.$store.getters['visit/isStudent']
  }

  submitted () {
    return this.$store.getters['ehrData/submitted']
  }

  lmsName () {
    return this.$store.getters.lmsName
  }
}