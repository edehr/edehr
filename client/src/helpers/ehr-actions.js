

export default class EhrActions {
  constructor (store, router) {
    this.$store = store
    this.$router = router

  }

  getNavPanelActionLabel () {
    let lmsName = this.$store.getters['visit/lmsName']
    let label = 'Return to ' + lmsName
    if (this.navPanelActionNeedsConfirmation()) {
      label = 'Send for evaluation'
    }
    return label
  }

  navPanelActionNeedsConfirmation () {
    return this.isStudent() && !this.submitted()
  }

  navPanelActionConfirmOptions () {
    let options = {}
    options.title ='Mark assignment ready for evaluation'
    options.msg = 'You agree that you are finished working on this assignment and it is ready for evaluation. ' +
      'Once you click through you can no longer edit this assignment.'
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