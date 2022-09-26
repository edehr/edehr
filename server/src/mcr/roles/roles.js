const logLti = require('debug')('lti')

export default class Role {
  /*
   * Convert the LTI role value into our course roles.
   * Only supporting a subset of the total LTI role spectrum
   */
  constructor (ltiRole) {
    logLti('Role constructor with role:', ltiRole)
    this.ltiRole = ltiRole || ''
    let r = this.ltiRole.toLowerCase()
    this.isInstructor = r.includes('instructor') || r.includes('staff') || r.includes('faculty')
    this.isAdmin = r.includes('administrator') || r.includes('sysadmin')
    this.isDeveloper = r.includes('contentdeveloper') || r.includes('creator') || r.includes('accountadmin')
    // default to student role if not one of the more privileged roles.
    this.isStudent = !(this.isInstructor || this.isAdmin || this.isDeveloper)
    this.isValid = this.isInstructor || this.isStudent || this.isAdmin || this.isDeveloper
  }

  asText () {
    return this.isStudent ? 'student' :
      (this.isInstructor ? 'instructor' : 'other')
  }
}
