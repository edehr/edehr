import store from '../store'
import { removeEmptyProperties } from './ehr-utils'
import sKeys from './session-keys'
import { ZONE_ADMIN, ZONE_DEMO, ZONE_EHR, ZONE_LMS, ZONE_PUBLIC } from '@/router'

const debugSH = false

/*
https://softwareengineering.stackexchange.com/a/247277/346750
"A Helper class is a lesser known code smell where a coder has identified some miscellaneous,
commonly used operations and attempted to make them reusable by lumping them together in an unnatural grouping."

The above describes the StoreHelper to a "t".  With Vuex though it is difficult to group and encapsulate meaning
in something that makes sense.  This EdEHR application will benefit from the Vue3 composition api.
Hopefully one day this helper will be replaced with useful groupings.

TODO refactor this class See https://github.com/edehr/edehr/issues/760
 */

class StoreHelperWorker {

  getMergedPageData (pageKey) { return store.getters['ehrDataStore/mergedDataForPageKey'](pageKey) }

  getMergedData () { return store.getters['ehrDataStore/mergedData']  }

  getHasDataForPagesList () { return store.getters['ehrDataStore/hasDataForPagesList'] }


  /* **********   Internal  ************** */
  _getActivityDataProperty (key) { return store.getters['activityDataStore/' + key]}
  _getAuthStore (key) { return store.getters['authStore/'+ key] }
  _getUserProperty (key) { return store.getters['userStore/' + key]}
  _getActivityProperty (key) { return store.getters['activityStore/' + key]}
  _getAssignmentProperty (key) { return store.getters['assignmentStore/' + key]}
  _getAssignmentListProperty (key) { return store.getters['assignmentListStore/' + key]}
  _getFileListProperty (key) { return store.getters['fileListStore/' + key]}
  _getInstructorProperty (key) { return store.getters['instructor/' + key]}
  _getSeedListProperty (key) { return store.getters['seedListStore/' + key]}
  _getSystemProperty (key) { return store.getters['system/' + key]}
  _getVisitProperty (key) { return store.getters['visit/' + key]}
  _dispatchActivity (key, payload) { return store.dispatch('activityStore/' + key, payload)}
  _dispatchActivityData (key, payload) { return store.dispatch('activityDataStore/' + key, payload)}
  _dispatchAssignment (key, payload) { return store.dispatch('assignmentStore/' + key, payload)}
  _dispatchAssignmentList (key, payload) { return store.dispatch('assignmentListStore/' + key, payload)}
  async _dispatchAuthStore (key, payload) { return await store.dispatch(`authStore/${key}`, payload) }
  _dispatchClassList (key, payload) { return store.dispatch('classListStore/' + key, payload)}
  async _dispatchFileList (key, payload) { return await store.dispatch('fileListStore/' + key, payload)}
  async _dispatchSeedListProperty (key, payload) { return await store.dispatch('seedListStore/' + key, payload)}
  async _dispatchInstructor (key, payload) { return await store.dispatch('instructor/' + key, payload)}
  _dispatchVisit (key, payload) { return store.dispatch('visit/' + key, payload)}
  async _dispatchSystem (key, payload) { return await store.dispatch('system/' + key, payload)}
  async _dispatchUser (key, payload) { return await store.dispatch('userStore/' + key, payload)}

  /* **********   General  ************** */
  getAuthdConsumerId () { return this._getAuthStore('consumerId') }
  toolConsumerId () { return store.getters['consumerStore/consumerId']}
  isInstructor () { return store.getters['authStore/isInstructor'] }
  isStudent () { return store.getters['authStore/isStudent'] }

  userId () { return this._getUserProperty('userId') }
  fullName () { return this._getUserProperty('fullName') }
  lmsUrl () { return this._getVisitProperty('returnUrl') }
  isDeveloper () { return this._getVisitProperty('isDeveloper') }
  getPageTitle () { return this._getSystemProperty('pageTitle')}
  setPageTitle (pageTitle) { return store.commit('system/setPageTitle', pageTitle)}
  setPageZone (pageZone) { return store.commit('system/setPageZone', pageZone)}
  getPageIcon () { return this._getSystemProperty('pageIcon')}
  setPageIcon (icon) { return store.commit('system/setPageIcon', icon)}
  setCurrentPageKey (pageKey) { return store.commit('system/setCurrentPageKey', pageKey)}
  isEditing () { return store.getters['system/isEditing']}
  setEditingMode (flag) { return store.commit('system/setEditing', flag)}
  inZoneAdmin () { return store.getters['system/pageZone'] === ZONE_ADMIN}
  inZoneDemo () { return store.getters['system/pageZone'] === ZONE_DEMO}
  inZoneEHR () { return store.getters['system/pageZone'] === ZONE_EHR}
  inZoneLMS () { return store.getters['system/pageZone'] === ZONE_LMS}
  inZonePublic () { return store.getters['system/pageZone'] === ZONE_PUBLIC}
  // isDemo see demo section

  /**
   * The API server must provide the url to call back into the server.
   */
  apiUrlGet () {
    // return process.env.VUE_APP_ROOT_API
    let url = window.location.origin || ''
    if (url.includes('localhost')) {
      url = 'http://localhost:27000'
    }
    url += '/api'
    // console.log('apiUrlGet', url)
    return url
  }
  sentryEnvironment () {
    let url = window.location.origin
    if (url.includes('localhost')) {
      url = 'localhost'
    } else {
      url = url.replace(/https+:\/\//,'').replace(/\./g,'_')
    }
    console.log('sentryEnvironment', url)
    return url
  }

  isReadOnlyInstructor () { return this._getVisitProperty('isReadOnlyInstructor')}

  isDevelopingContent () { return this._getVisitProperty('isDevelopingContent')  }
  setIsDevelopingContent (state) { store.commit('visit/setIsDevelopingContent', state) }

  getCourseTitle () { return this._getActivityProperty('courseTitle') }

  isSubmitted () { return this._getActivityDataProperty('submitted') }
  // isSentBack () { return this._getActivityDataProperty('sentBack') }
  getStudentAssignmentData () { return this._getActivityDataProperty('assignmentData')}
  getStudentScratchData () { return this._getActivityDataProperty('scratchData')}
  getEvaluationNotes () { return this._getActivityDataProperty('evaluationData')   }
  getActivityData () { return this._getActivityDataProperty('activityData')}

  sendAssignmentDataUpdate (payload) {return this._dispatchActivityData('sendAssignmentDataUpdate', payload)}
  sendAssignmentDataDraft (payload) {return this._dispatchActivityData('sendAssignmentDataDraft', payload)}

  isLoading () { return this._getSystemProperty('isLoading')}
  // TODO remove context in all calls to this method
  setLoading (context, value) {
    if (value > 0) {
      store.commit('system/setLoading', value)
    } else {
      // delay the decrement to allow other process a chance to increment.
      // this reduces flashing of the spinner. a lot!
      setTimeout(() => {
        store.commit('system/setLoading', value)
      }, 50)

    }
  }
  setApiError (msg) {  store.commit('system/setApiError', msg, { root: true }) }
  setSystemMessage (msg) {  store.commit('system/setSystemMessage', msg, { root: true }) }

  isOutsideShowButtonLabels () { return this._getSystemProperty('outsideShowButtonLabels') }
  setOutsideShowButtonLabels (value) { return this._dispatchSystem('setOutsideShowButtonLabels', value) }

  /* **********
   * **********   File List  **************
   */

  async getFileListMaxFileSize ( activityId) {
    return await this._dispatchFileList('getMaxFileSize')
  }
  getFileListImages () { return this._getFileListProperty('imageFiles') }
  getFileListOther () { return this._getFileListProperty('otherFiles') }
  getFileListErrorMessage () { return this._getFileListProperty('errorMessage') }
  getUploadedFile () { return this._getFileListProperty('uploadedFile')}
  refreshFileLists (consumerId) { return this._dispatchFileList('refreshFileLists', consumerId)}
  uploadReset () { return this._dispatchFileList('uploadReset')}
  /**
   *
   * @param payload { file, onUploadProgress }  File and Function(progressEvent)
   * @return {Promise<*>}
   */
  addFileToList (payload) { return this._dispatchFileList('addFileToList', payload)}


  /* **********
   * **********   Instructor  **************
   */

  getClassList () { return this._getInstructorProperty('list') }
  async getClassListForActivity ( activityId) { return await this._dispatchClassList('getClassList', activityId) }
  getCourseList () { return store.state.instructor.sCourses || [] }

  dispatchLoadClassList ( ) { return this._dispatchInstructor('loadClassList' )  }

  getCurrentEvaluationStudentId () { return this._getInstructorProperty('currentEvaluationStudentId') }

  getCurrentEvaluationStudentVisit () { return this._getInstructorProperty('currentEvaluationStudent') }

  getCurrentEvaluationStudentAssignmentData () {
    let sv = this.getCurrentEvaluationStudentVisit()
    return sv.activityData.assignmentData
  }

  // when instructor forces submitted state so they can evaluate the work
  forceSubmitAssignment () { return this._dispatchActivityData('sendSubmitted', true)}

  async loadClassList () {
    let activityId = this.getActivityId()
    if (!activityId) {
      console.error('Can\'t find a current activity id')
    }
    await this.dispatchLoadClassList()
  }

  // when the student submits their work.
  studentSubmitsAssignment (submitted) {
    return this._dispatchActivityData('sendSubmitted', true)
  }

  // // When the instructor sends the work back to the student for further edits.
  instructorUnsubmitsAssignment () {
    return this._dispatchActivityData('sendSubmitted', false)
  }

  // select which student's work is viewed for evaluation
  changeStudentForInstructor (studentVisitId) { return this._dispatchInstructor('changeCurrentEvaluationStudentId', studentVisitId)}

  // When instructor saves their evaluation notes.
  saveEvaluationNotes (evalNotes ) { return this._dispatchActivityData('sendEvaluationNotes', evalNotes) }

  /* **********
   * **********   Activity  **************
   */

  getActivityId () { return this._getActivityProperty('activityId') }

  getActivityTitle () { return this._getActivityProperty('activityTitle') }

  getActivityDescription () { return this._getActivityProperty('activityDescription') }

  activitiesUsingAssignmentCount (assignmentId) {
    let cnt = 0
    let courses = this.getCourseList()
    courses.forEach(course => {
      course.activities.forEach( a => cnt += a.assignment === assignmentId ? 1 : 0)
    })
    return cnt
  }

  lmsActivitiesUsingLearningObject (lObjId) {
    let list = []
    let courses = this.getCourseList()
    courses.forEach(course => {
      let clist = course.activities.filter( a => a.assignment === lObjId)
      list = [...list, ...clist]
    })
    return list
  }

  async setActivityId (activityId) { return await this._dispatchActivity('setActivityId', activityId) }
  async loadCurrentActivity () { return await this._dispatchActivity('loadCurrentActivity') }

  async closeActivity (activityId) {
    await this._toggleActivity(activityId, 'close')
  }

  async openActivity (activityId) {
    await this._toggleActivity(activityId, 'open')
  }

  /**
   * Sets the submitted state for all members of the class list
   * @param activityId
   * @returns {Promise<void>}
   */
  async _toggleActivity (activityId, direction) {
    await this._dispatchActivity(direction, activityId)
    await StoreHelper.loadInstructorWithStudent()
  }

  /* **********
   * **********   Assignments  / Learning Objects **************
   */
  getAssignmentId () { return this._getAssignmentProperty('learningObjectId') }
  getAssignment (id) { return this._dispatchAssignment('get', id) }
  deleteAssignment (id) { return this._dispatchAssignment('delete', id)}
  deleteAssignmentUnused (id) { return this._dispatchAssignment('deleteUnused', id)}
  loadAssignment (id) { return this._dispatchAssignment('load', id) }
  loadAssignmentList () {  return this._dispatchAssignmentList('loadAssignmentsWithCounts') }
  async loadAssignmentAndSeedLists () {
    // load the seeds first so they are ready for the assignments to integrate
    await this._dispatchSeedListProperty('loadSeeds')
    await this.loadAssignmentList()
  }
  // returns promise that resolves to assignment list
  async updateAssignment (component, assignmentId, assignmentData) {
    let dataIdPlusPayload = { id: assignmentId, payload: assignmentData }
    await this._dispatchAssignmentList('updateAssignment', dataIdPlusPayload)
    return this._dispatchAssignment('load', assignmentId)
  }
  // returns promise that resolves to assignment list
  async createAssignment (assignmentData) {
    const duped = await this._dispatchAssignmentList('createAssignment', assignmentData)
    await this._dispatchAssignment('load', duped._id)
    return duped
  }
  getAssignmentsList () { return this._getAssignmentListProperty('list') }


  /* **********
   * **********   Seed Data  / Case Studies **************
   */
  isSeedEditing () { return this._getVisitProperty('isSeedEditing')  }
  setSeedEditId (id) { store.commit('visit/setSeedEditId', id) }
  getSeedEditId (id) { return this._getVisitProperty('seedEditId')  }
  getAssignmentSeedId () { return this._getAssignmentProperty('seedDataId') }
  // get seed id from current activity
  getSeedId () { return this._getSeedListProperty('seedId')}
  getSeedEhrData () { return this._getSeedListProperty('seedEhrData')}
  getSeedContent () { return this._getSeedListProperty('seedContent') }

  deleteSeed (id) { return this._dispatchSeedListProperty('deleteSeed', id)}

  async loadSeed (seedId) { await this._dispatchSeedListProperty('loadSeedContent', seedId) }
  async loadSeedLists () { return await this._dispatchSeedListProperty('loadSeeds') }

  updateSeed (component, seedId, theData) {
  // console.log('SH Seed Data update ', seedId, theData)
    let dataIdPlusPayload = { id: seedId, payload: theData }
    return this._dispatchSeedListProperty('updateSeedItem', dataIdPlusPayload)
  }

  updateSeedEhrData (seedId, ehrData) {
    let payload = {
      id: seedId,
      ehrData: ehrData
    }
    return this._dispatchSeedListProperty('updateSeedEhrData', payload)
  }

  sendSeedEhrDataDraft (payload ) {
    return this._dispatchSeedListProperty('sendSeedEhrDataDraft', payload)
  }
  updateSeedEhrProperty (propertyName, value ) {
    let payload = {
      propertyName: propertyName,
      value: removeEmptyProperties(value)
    }
    return this._dispatchSeedListProperty('updateSeedEhrProperty', payload)
  }

  createSeed (component, seedData) { return this._dispatchSeedListProperty('createSeedItem', seedData) }

  getSeedDataList () { return this._getSeedListProperty('list') }

  async loadSeedEditor () {
    if (debugSH) console.log('SH loadSeedEditor')
    await this.loadSeed(this.getSeedEditId())
  }

  /* **********
   * **********   LMS LTI Consumers    **************
   */
  lmsName () { return store.getters['consumerStore/lmsName'] }
  consumerId () { return store.getters['consumerStore/consumerId'] }

  async clearConsumer () { await store.dispatch('consumerStore/clearConsumer')}
  createConsumer (consumerData) { return store.dispatch('consumerStore/createConsumer', consumerData) }
  getConsumer () { return store.getters['consumerStore/consumer'] }
  async loadConsumer (id) {  return await store.dispatch('consumerStore/loadConsumer', id) }
  getConsumersList () { return store.getters['consumerStore/consumerList'] }
  loadConsumerList () {  return store.dispatch('consumerStore/loadConsumers') }
  updateConsumer (consumerId, consumerData) {
    let dataIdPlusPayload = { id: consumerId, payload: consumerData }
    return store.dispatch('consumerStore/updateConsumer', dataIdPlusPayload)
  }

  /* **********
   * **********   Admin related    **************
   */

  getUsersList () { return this._getUserProperty('list') }
  loadUsersList (consumerId) { return this._dispatchUser('loadUsers', consumerId) }
  adminLogin (adminPassword) { return this._dispatchAuthStore('adminLogin', { adminPassword }) }

  async adminValidate () {
    const r = await this._dispatchAuthStore('adminValidate')
    return r.isAdmin
  }

  /**
   *  EHR context information
   * @returns {{courseTitle, submitted, activityTitle, evaluationData, assignmentDescription, activityDescription, userName, assignmentName}}
   */
  getPanelData () {
    const pDebug = false
    // the assignment may not be set for a brief moment as the student is returning to the LMS
    let assignment = this._getAssignmentProperty('assignment') || {}
    if(pDebug) console.log('SH getPanelData assignment', assignment)
    // const sentBack = this.isSentBack()
    let data = {
      userName: this.fullName(),
      courseTitle: this.getCourseTitle(),
      activityTitle: this.getActivityTitle(),
      activityDescription: this.getActivityDescription(),
      assignmentName: assignment.name,
      assignmentDescription: assignment.description,
      submitted: this.isSubmitted(),
      evaluationData: this.getEvaluationNotes()
    }
    if (this.isInstructor()) {
      let ces = this.getCurrentEvaluationStudentVisit()
      data.studentName = ces.user.fullName
      data.lastVisitDate = ces.lastVisitDate
      data.currentEvaluationStudent = ces
      if(pDebug) console.log('SH getPanelData currentEvaluationStudent', ces)
    }
    if (this.isStudent()) {
      data.scratchData = this.getStudentScratchData()
    }
    if(pDebug) console.log('SH getPanelData data', data)
    return data
  }

  /* **********
   * **********   API    **************
   */
  async loadApiData () {
    if (debugSH) console.log('Load API data')
    return this._dispatchSystem('loadApiSystem')
  }
  getApiData () { return this._getSystemProperty('apiData')  }
  getAppTitle () { return this.getApiData().appTitle  }
  getAppVersion () { return this.getApiData().appVersion  }

  /* **********
   * **********   Loading data  **************
   */

  async loadVisitRecord (visitId) {
    if (debugSH) console.log('SH loadVisitRecord dispatch the load visit information', visitId)
    await this._dispatchVisit('loadVisit2', visitId)
  }

  /**
   * Loads the consumer, user and visit data based on authorization token data
   * @returns {Promise<void>}
   */
  async loadCommon () {
    const toolConsumerId = store.getters['authStore/consumerId']
    await this.loadConsumer(toolConsumerId)
    const userId = store.getters['authStore/userId']
    await this._dispatchUser('load', userId)
    let visitId = store.getters['authStore/visitId']
    await StoreHelper.loadVisitRecord(visitId)
  }

  // async loadStudent2 () {
  //   const activity = await this.loadCurrentActivity()
  //   if (activity.assignment) {
  //     // only when the activity has an assignment(learning object) can the visit have any activity data
  //     let visitInfo = store.state.visit.sVisitData || {}
  //     if (debugSH) console.log('get activity data based on visitInfo', visitInfo)
  //     await this._dispatchActivityData('loadActivityData', visitInfo.activityData)
  //     await this.loadAssignment(activity.assignment)
  //     let seedId = this.getAssignmentSeedId()
  //     if (debugSH) console.log('SH loadStudent2 seedId', seedId)
  //     await this.loadSeed(seedId)
  //   } // else page controller will send the student to the unlinked activity page
  // }

  async loadInstructorWithStudent () {
    if(debugSH) console.log('SH loadInstructorWithStudent')
    let activityId = this.getActivityId()
    let result = {}
    if (!activityId) {
      console.error('Can\'t find a current activity id')
      return result
    }
    if(debugSH) console.log('SH loadInstructorWithStudent activityId', activityId)
    let theActivity = await this.loadCurrentActivity()
    result.activity = theActivity
    if(debugSH) console.log('SH loadInstructorWithStudent theActivity', theActivity)
    let theAssignment = await this.loadAssignment(theActivity.assignment)
    result.assignment = theAssignment
    if(debugSH) console.log('SH loadInstructorWithStudent theAssignment', theAssignment)
    await this.dispatchLoadClassList()
    let seedId = StoreHelper.getAssignmentSeedId()
    result.seedId = seedId
    if(debugSH) console.log('SH loadInstructorWithStudent seedId', seedId)
    await this.loadSeed(seedId)
    return result
  }

  /* **********
   * **********   Authorization related    **************
   */

  async fetchAndStoreAuthToken (refreshToken) {
    return await this._dispatchAuthStore('fetchAndStoreAuthToken', { refreshToken })
  }

  async fetchTokenData (authToken = this.getAuthToken()) {
    return await this._dispatchAuthStore('fetchData', {authToken})
  }

  getAuthData () {
    return this._getAuthStore('authData')
  }
  getAuthDataSync () {
    return this._getAuthStore('authData')
  }

  getAuthToken () {
    return this._getAuthStore('token')
  }

  async logUserOutOfEdEHR (clearDemo=true) {
    const dt = StoreHelper.getDemoToken()
    if (clearDemo && dt) {
      await this._dispatchDemoStore('demoLogout')
    }
    await this._dispatchAssignment('clearAssignment')
    await this._dispatchAuthStore('logOutUser')
    await this._dispatchVisit('clearVisitData')
    await this._dispatchSeedListProperty('clearSeedData')
    await this._dispatchActivity(('clearActivity'))
    await this._dispatchInstructor('clearInstructor')
    await this.clearConsumer()
  }

  async exitToLms () {
    const url = StoreHelper.lmsUrl()
    const clearDemo = false
    await StoreHelper.logUserOutOfEdEHR(clearDemo)
    window.location = url
  }


  /* **********
   * **********   Demonstration related  **************
   */

  _getDemoStorage (key) { return store.getters['demoStore/'+ key] }
  _dispatchDemoStore (key, payload) { return store.dispatch(`demoStore/${key}`, payload) }

  createDemoToolConsumer () {
    return this._dispatchDemoStore('createToolConsumer')
  }

  async loadDemoData () {
    return await this._dispatchDemoStore('loadDemoData')
  }

  getDemoToken () {
    // return this._getDemoStorage('demoToken')
    return localStorage.getItem(sKeys.DEMO_TOKEN)
  }

  getDemoPersona () {
    return this._getDemoStorage('demoPersona')
  }

  getDemoTokenData () {
    /* Sample data:
    { "toolConsumerKey": "Demo-98098098-asda", "toolConsumerId": "5265820495c96c8eef7b2e3d",
    "personaList": [ { "id": 1, "name": "Dorothea Dix", "email": "dorothea@example.org", "role": "instructor" },
    { "id": 11, "name": "Lystra Eggert Gretter",  "role": "instructor" },
    { "id": 2, "name": "Juliet Seton", "role": "student" },
    { "id": 3, "name": "Roxanne Snow", "role": "student" },
    { "id": 4, "name": "Carly Dixon",  "role": "student" } ] }
     */
    return this._getDemoStorage('demoTokenData')
  }

  isDemoMode () { return this._getDemoStorage('isDemo')}
  setDemoToken (demoToken) { return this._dispatchDemoStore('setDemoToken', demoToken) }

  setDemoPersona (demoPersona) {
    return this._dispatchDemoStore('setDemoPersona', demoPersona)
  }

  setDemoAssignment (assignment) {
    return this._dispatchDemoStore('setDemoAssignment', assignment)
  }

  submitPersona (submitData) {
    return this._dispatchDemoStore('submitPersona', submitData)
  }

  submitAcceptsTerms (accepts) {
    return this._dispatchDemoStore('acceptsTerms', { accepts  })
  }

  getDemoFeatureFlag () {
    return this._getDemoStorage('getDemoFeatureFlag')
  }
  setDemoFeatureFlag (flag) {
    return this._dispatchDemoStore('setDemoFeatureFlag', flag)
  }

}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper
