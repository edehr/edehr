

export default class EhrActions {
  constructor (store, router) {
    this.$store = store
    this.$router = router

  }

  getNavPanelActionLabel () {
    let label = 'Return to LMS'
    if (this.isStudent) {
      label = 'Send for evaluation'
    }
    return label
  }

  navPanelActionNeedsConfirmation () {
    return this.isStudent()
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
      // hard return to the calling LMS
      window.location = this.$store.getters['visit/returnUrl']
    } else {
      // stay within application and use router push
      var pathname = this.$store.state.instructor.sInstructorReturnUrl
      console.log(
        'As instructor return via router push to retain veux state information',
        pathname
      )
      this.$router.push({ path: pathname })
    }
  }
  isStudent () {
    return this.$store.getters['visit/isStudent']
  }

  lmsName () {
    return this.$store.getters.lmsName
  }
}