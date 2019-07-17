
export default class Role {
  /*
   * Convert the LTI role value into our course roles.
   * Only supporting a subset of the total LTI role spectrum
   */
  constructor (ltiRole) {
    this.ltiRole = ltiRole || ''
    let r = this.ltiRole.toLowerCase()
    this.isStudent = r.includes('student') || r.includes('learner')
    this.isInstructor = r.includes('instructor') || r.includes('staff') || r.includes('faculty')
    this.isAdmin = r.includes('administrator') || r.includes('sysadmin')
    this.isDeveloper = r.includes('contentdeveloper') || r.includes('creator') || r.includes('accountadmin')
    this.isValid = this.isInstructor || this.isStudent || this.isAdmin || this.isDeveloper
  }
}