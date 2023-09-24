import store from '../store'
import sKeys from './session-keys'
import { ZONE_ADMIN, ZONE_DEMO, ZONE_EHR, ZONE_LMS, ZONE_PUBLIC } from '@/router'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'

let debugSH = false

export const ADMIN_ACTION = 'admin'
export const CREATOR_ACTION = 'creator'
export const DEMO_ACTION = 'demo'
export const INSTRUCTOR_ACTION = 'instructor'
export const STUDENT_ACTION = 'student'
export const SYSTEM_ACTION = 'system'
export const USER_ACTION = 'user'

export const APP_TYPE_EHR = 'EHR'
export const APP_TYPE_LIS = 'LIS'

/*
 For in dev only! Devs can set ENABLE_FULL_DEMO_AUTO_LINK to false to disable the autolink when developing the actions around the unlinked page. It's useful to be able to use the full demo and get to the unlinked page even though we don't want to inflict this on our users.
 */
export const ENABLE_FULL_DEMO_AUTO_LINK = true
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
  getSecondLevel () { return store.getters['ehrDataStore/secondLevel']  }
  getBaseLevel () { return store.getters['ehrDataStore/baseLevel']  }

  /**
   *
   * @returns {visitDay:num|visitTime:milTime|(function(): *)|*}
   */
  getSimTime () {
    const mData = StoreHelper.getMergedData()
    // { visitDay, visitTime }
    return mData.meta.simTime
  }

  getHasDataForPagesList () { return store.getters['ehrDataStore/hasDataForPagesList'] }
  hasDataOnPage (pageKey) {
    const pageList = this.getHasDataForPagesList()
    return pageList[pageKey]
  }

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
  _dispatchCourse (key, payload) { return store.dispatch('courseStore/' + key, payload)}
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
  isInstructorAsStudent () { return store.getters['authStore/isInstructorAsStudent'] }

  userId () { return this._getUserProperty('userId') }
  givenName () { return this._getUserProperty('givenName') }
  fullName () { return this._getUserProperty('fullName') }
  lmsUrl () { return this._getAuthStore('lmsUrl') }
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

  wsUrlGet () {
    let url = window.location.origin || ''
    if (url.includes('localhost')) {
      url = 'ws://localhost:27000'
    } else {
      url = 'wss:' + url.split(':')[1]
      url += '/api'
    }
    return url
  }

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
  setIsDevelopingContent (state) {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, state ? 'setCreator' : 'unsetCreator')
    store.commit('visit/setIsDevelopingContent', state)
  }

  getCourseTitle () { return this._getActivityProperty('courseTitle') }

  isSubmitted () { return this._getActivityDataProperty('submitted') }
  // isSentBack () { return this._getActivityDataProperty('sentBack') }
  getStudentAssignmentData () { return this._getActivityDataProperty('assignmentData')}
  getStudentAssignmentDataHasDraftRows () { return this._getActivityDataProperty('hasDraftRows')}
  getStudentScratchData () { return this._getActivityDataProperty('scratchData')}
  getEvaluationNotes () { return this._getActivityDataProperty('evaluationData')   }
  getActivityData () { return this._getActivityDataProperty('activityData')}

  isLoading () { return this._getSystemProperty('isLoading')}

  setLoading (context, value) {
    // console.log('setLoading ', context, value)
    if (value > 0) {
      store.commit('system/setLoading', value)
    } else {
      // delay the decrement to allow other process a chance to increment. This reduces flashing of the spinner, a lot!
      setTimeout(() => {
        store.commit('system/setLoading', value)
      }, 50)
    }
  }
  setLoadingEnabled (context, enable) {
    store.commit('system/setLoadingEnable', enable)
  }
  setApiError (msg) {  store.commit('system/setApiError', msg, { root: true }) }
  setSystemMessage (msg) {  store.commit('system/setSystemMessage', msg, { root: true }) }

  isOutsideShowButtonLabels () { return this._getSystemProperty('outsideShowButtonLabels') }
  setOutsideShowButtonLabels (value) {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, value ? 'showButtonLabels' : 'hideButtonLabels')
    return this._dispatchSystem('setOutsideShowButtonLabels', value)
  }

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
  addFileToList (payload) {
    StoreHelper.postActionEvent(CREATOR_ACTION,'addFile')
    return this._dispatchFileList('addFileToList', payload)
  }


  /* **********
   * **********   Instructor  **************
   */

  getClassList () { return this._getInstructorProperty('classList') }
  async getClassListForActivity ( activityId) { return await this._dispatchClassList('getClassList', activityId) }
  getCourseList () { return store.getters['courseStore/courseList']}

  dispatchLoadClassList ( ) { return this._dispatchInstructor('loadClassList' )  }

  getCurrentEvaluationStudentId () { return this._getInstructorProperty('currentEvaluationStudentId') }

  getCurrentEvaluationStudentVisit () { return this._getInstructorProperty('currentEvaluationStudent') }

  getCurrentEvaluationStudentAssignmentData () {
    let sv = this.getCurrentEvaluationStudentVisit()
    return sv.activityData.assignmentData
  }

  // when instructor forces submitted state so they can evaluate the work
  forceSubmitAssignment () {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION,'forceSubmit')
    return this._dispatchActivityData('sendSubmitted', true)
  }

  async loadClassList () {
    let activityId = this.getActivityId()
    if (!activityId) {
      console.error('Can\'t find a current activity id')
    }
    await this.dispatchLoadClassList()
  }

  // when the student submits their work.
  studentSubmitsAssignment (submitted) {
    StoreHelper.postActionEvent(STUDENT_ACTION,'studentSubmits')
    return this._dispatchActivityData('sendSubmitted', true)
  }
  forceSubmitsAssignment (submitted) {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION,'forceSubmits')
    return this._dispatchActivityData('sendSubmitted', true)
  }

  // // When the instructor sends the work back to the student for further edits.
  instructorUnsubmitsAssignment () {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, 'sendBackToStudent')
    return this._dispatchActivityData('sendSubmitted', false)
  }

  // select which student's work is viewed for evaluation
  changeStudentForInstructor (studentVisitId) {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION,'changeStudent')
    return this._dispatchInstructor('changeCurrentEvaluationStudentId', studentVisitId)
  }

  // When instructor saves their evaluation notes.
  saveEvaluationNotes (evalNotes ) {
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, 'saveEvalNotes')
    return this._dispatchActivityData('sendEvaluationNotes', evalNotes)
  }

  /* **********
   * **********   Activity  **************
   */

  getActivityId () { return this._getActivityProperty('activityId') }

  getActivityTitle () { return this._getActivityProperty('activityTitle') }
  getActivityDescription () { return this._getActivityProperty('activityDescription') }
  getActivityRecord () { return this._getActivityProperty('activityRecord') }

  lmsActivitiesUsingLearningObject (lObjId) {
    let list = []
    let courses = this.getCourseList()
    courses.forEach(course => {
      let clist = course.courseActivities.filter( a => a.assignment && a.assignment._id === lObjId)
      list = [...list, ...clist]
    })
    return list
  }

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
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION, direction === 'open' ? 'openActivity' : 'closeActivity')
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
    const assignment = await this._dispatchAssignment('load', assignmentId)
    const seedId = assignment.seedDataId
    await this._dispatchSeedListProperty('loadSeedContent', seedId)
    StoreHelper.postActionEvent(CREATOR_ACTION, 'updateAssignment')
    return assignment
  }
  // returns promise that resolves to assignment list
  async createAssignment (assignmentData) {
    const duped = await this._dispatchAssignmentList('createAssignment', assignmentData)
    await this._dispatchAssignment('load', duped._id)
    StoreHelper.postActionEvent(CREATOR_ACTION,'createAssignment')
    return duped
  }
  getAssignmentsList () { return this._getAssignmentListProperty('list') }
  getInstructorCourses () { return this._getInstructorProperty('courseList') }
  dispatchLoadCourses ( ) { return this._dispatchInstructor('loadCourses' )  }
  async updateCourse (course, title, description) {
    let courseData = {
      custom_title: title,
      custom_description: description
    }
    let dataIdPlusPayload = { id: course.id, payload: courseData }
    await this._dispatchCourse('updateCourse', dataIdPlusPayload)
    StoreHelper.postActionEvent(CREATOR_ACTION, 'updateCourse')
  }

  async restoreAsInstructor (router) {
    const newToken = await this._dispatchVisit('restoreAsInstructor')
    // console.log('newToken', newToken)
    await StoreHelper.storeReplaceToken(newToken)
    const visitId = StoreHelper.getAuthVisitId()
    router.push({name: 'lms-instructor-activity', query: { visitId: visitId } })
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION,'restoreNormalRole')
  }

  async visitAsStudent (router, appType) {
    const currentActivityId = StoreHelper.getActivityId()
    const newToken = await this._dispatchVisit('visitAsStudent', currentActivityId)
    /*
    This new token has the same properties as the original user token with these changes:
        newToken.isStudent = true
        newToken.instructorAsStudent = true
        newToken.isInstructor = false
        newToken.instructorToken = original instructor token
    newToken can now be used as the users auth until they change back to being an instructor.
    Use the instructorToken to restore the user to instructor.
    */
    await StoreHelper.storeReplaceToken(newToken)
    // clear any previous seed id to turn off the seed editing mode. Otherwise, instructors see Case Study context banner and not Student context banner.
    await StoreHelper.setSeedEditId('')
    const visitId = StoreHelper.getAuthVisitId()
    router.push({ name: 'ehr', query: { visitId: visitId, appType: appType } })
    StoreHelper.postActionEvent(INSTRUCTOR_ACTION,'visitAsStudent')
  }

  /* **********
   * **********   Seed Data  / Case Studies **************
   */
  isSeedEditing () { return this._getVisitProperty('isSeedEditing')  }
  isInstructorEvalMode () {
    return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
  }
  setSeedEditId (id) { store.commit('visit/setSeedEditId', id) }
  getSeedEditId (id) { return this._getVisitProperty('seedEditId')  }
  getAssignmentSeedId () { return this._getAssignmentProperty('seedDataId') }
  // get seed id from current activity
  getSeedId () { return this._getSeedListProperty('seedId')}
  getSeedEhrData () { return this._getSeedListProperty('seedEhrData')}
  getSeedContent () { return this._getSeedListProperty('seedContent') }
  getSeedAppType () { return this._getSeedListProperty('appType') }

  deleteSeed (id) {
    StoreHelper.postActionEvent(CREATOR_ACTION,'deleteSeed')
    return this._dispatchSeedListProperty('deleteSeed', id)
  }

  async loadSeed (seedId) {
    await this._dispatchSeedListProperty('loadSeedContent', seedId)
  }
  async loadSeedLists () { return await this._dispatchSeedListProperty('loadSeeds') }

  updateSeed (component, seedId, theData) {
  // console.log('SH Seed Data update ', seedId, theData)
    StoreHelper.postActionEvent(CREATOR_ACTION,'updateSeed')
    let dataIdPlusPayload = { id: seedId, payload: theData }
    return this._dispatchSeedListProperty('updateSeedItem', dataIdPlusPayload)
  }

  createSeed (component, seedData) {
    StoreHelper.postActionEvent(CREATOR_ACTION,'createSeed')
    return this._dispatchSeedListProperty('createSeedItem', seedData)
  }

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

  async clearConsumer () {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'clearConsumer')
    await store.dispatch('consumerStore/clearConsumer')
  }
  createConsumer (consumerData) {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'createConsumer')
    return store.dispatch('consumerStore/createConsumer', consumerData)
  }
  getConsumer () { return store.getters['consumerStore/consumer'] }
  async loadConsumer (id) {  return await store.dispatch('consumerStore/loadConsumer', id) }
  getConsumersList () { return store.getters['consumerStore/consumerList'] }
  loadConsumerList () {  return store.dispatch('consumerStore/loadConsumers') }
  updateConsumer (consumerId, consumerData) {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'updateConsumer')
    let dataIdPlusPayload = { id: consumerId, payload: consumerData }
    return store.dispatch('consumerStore/updateConsumer', dataIdPlusPayload)
  }

  /* **********
   * **********   Admin related    **************
   */

  getUsersList () { return this._getUserProperty('list') }
  loadUsersList (consumerId) { return this._dispatchUser('loadUsers', consumerId) }
  adminLogin (adminPassword) {
    StoreHelper.postActionEvent(ADMIN_ACTION,'adminLogin')
    return this._dispatchAuthStore('adminLogin', { adminPassword })
  }

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

  postActionEvent (role, actionTag) {
    setTimeout( async () => {
      const payload = {}
      payload.isDemo = StoreHelper.isDemoMode()
      payload.role = role
      payload.action = actionTag
      payload.userId = StoreHelper._getUserProperty('userId')
      payload.consumerId = StoreHelper.toolConsumerId()
      await StoreHelper._dispatchSystem('postActionEvent', payload)
    }, 50)
  }

  /* **********
   * **********   Loading data  **************
   */

  async loadVisitRecord () {
    if (debugSH) console.log('SH loadVisitRecord dispatch the load visit information')
    await this._dispatchVisit('loadVisitRecord')
  }

  /**
   * Always use this StoreHelper.setVisitid to establish the current visit record. We do this, so that we can keep the auth token in sync.
   * @param visitId
   * @returns {Promise<void>}
   */
  async setVisitId (visitId) {
    const authVisitId = store.getters['authStore/visitId']
    if (visitId && authVisitId !== visitId) {
      // console.log('--- Call to set visit id to something different from what the auth token has.', authVisitId, visitId)
      const newToken = await this._dispatchVisit('changeVisitId', visitId)
      // console.log('set visit id with new token', newToken)
      await StoreHelper.storeReplaceToken(newToken)
      StoreHelper.postActionEvent(USER_ACTION,'changeVisitId')
    }
    if (debugSH) console.log('SH setVisitId dispatch the load visit id', visitId)
    await this._dispatchVisit('setVisitIdViaSh', visitId)
  }
  getVisitId () {
    if (debugSH) console.log('SH getVisitId')
    return this._getVisitProperty('visitId')
  }

  /**
   * Loads the consumer, user and visit data based on authorization token data.
   * If optionalVisitId is present then sets the current visit id and uses this for loading
   * @param optionalVisitId
   * @returns {Promise<void>}
   */

  async loadInstructorWithStudent () {
    await store.dispatch('visit/loadVisitRecord')
    const theActivity = await store.dispatch('activityStore/loadActivityRecord')
    const seedId = theActivity.caseStudyId
    const learningObjectId = theActivity.learningObjectId
    if(debugSH) console.log('SH liws theActivity', theActivity)
    await store.dispatch('assignmentStore/load', learningObjectId)
    await store.dispatch('instructor/loadClassList')
    await this.loadSeed(seedId)
    return theActivity
  }

  /* **********
   * **********   Authorization related    **************
   */

  async fetchAndStoreRefreshToken (refreshToken) {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'refreshToken')
    return await this._dispatchAuthStore('fetchAndStoreRefreshToken', { refreshToken })
  }

  async fetchTokenData (authToken = this.getAuthToken()) {
    return await this._dispatchAuthStore('fetchData', {authToken})
  }
  async storeReplaceToken (replaceToken) {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'replaceToken')
    return await this._dispatchAuthStore('storeReplaceToken', {replaceToken})
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
  getAuthVisitId () {
    return this._getAuthStore('visitId')
  }

  async exitFullDemo () {
    await this.logUserOutOfEdEHR()
    await this._dispatchDemoStore('demoLogout')
  }
  async logUserOutOfEdEHR () {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'logUserOut')
    await this._dispatchAssignment('clearAssignment')
    await this._dispatchAuthStore('logOutUser')
    await this._dispatchCourse('clearCourse')
    await this._dispatchVisit('clearVisitData')
    await this._dispatchSeedListProperty('clearSeedData')
    await this._dispatchActivity(('clearActivity'))
    await this._dispatchInstructor('clearInstructor')
    await this.clearConsumer()
  }

  async exitToLms () {
    StoreHelper.postActionEvent(SYSTEM_ACTION,'exitToLms')
    const url = StoreHelper.lmsUrl()
    await StoreHelper.logUserOutOfEdEHR()
    window.location = url
  }


  /* **********
   * **********   Demonstration related  **************
   */

  _getDemoStorage (key) { return store.getters['demoStore/'+ key] }
  _dispatchDemoStore (key, payload) { return store.dispatch(`demoStore/${key}`, payload) }

  createDemoToolConsumer () {
    StoreHelper.postActionEvent(DEMO_ACTION,'createDemoConsumer')
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

  getDemoLObjInfoFromName (activity) {
    const activityTitle = activity.lObjDef.title
    const dd = this.getDemoTokenData()
    const lObjList = dd.lObjList
    const item = lObjList.find( item => activityTitle.startsWith(item.title))
    return item ? { id: item.demo_lobjId, appType: item.appType }  : undefined
  }
  isDemoMode () { return this._getDemoStorage('isDemo')}
  setDemoToken (demoToken) { return this._dispatchDemoStore('setDemoToken', demoToken) }

  setDemoPersona (demoPersona) {
    StoreHelper.postActionEvent(DEMO_ACTION,'demoPersona-'+demoPersona.name)
    return this._dispatchDemoStore('setDemoPersona', demoPersona)
  }

  setDemoAssignment (assignment) {
    StoreHelper.postActionEvent(DEMO_ACTION,'setDemoAssignment')
    return this._dispatchDemoStore('setDemoAssignment', assignment)
  }

  async autoLinkDemoLobj (theActivity, demo_lobjId) {
    if(ENABLE_FULL_DEMO_AUTO_LINK) {
      // console.log('HERE is where we set up the demo to auto link the activity and lObj', theActivity, demo_lobjId)
      const payload = { activity: theActivity.id, assignment: demo_lobjId }
      await store.dispatch('activityStore/linkAssignment', payload)
      // console.log('reload the activity now that the activity is linked to an learning object')
      theActivity = await store.dispatch('activityStore/loadActivityRecord')
      // console.log('fully linked activity', theActivity)
    }
    return theActivity
  }

  submitPersona (submitData) {
    StoreHelper.postActionEvent(DEMO_ACTION,'submitPersona')
    return this._dispatchDemoStore('submitPersona', submitData)
  }

  submitAcceptsTerms (accepts) {
    return this._dispatchDemoStore('acceptsTerms', { accepts  })
  }

  // getDemoFeatureFlag () {
  //   return this._getDemoStorage('getDemoFeatureFlag')
  // }
  // setDemoFeatureFlag (flag) {
  //   StoreHelper.postActionEvent(SYSTEM_ACTION,'setDemoFeature')
  //   return this._dispatchDemoStore('setDemoFeatureFlag', flag)
  // }

  isEHR_Showing () {
    // const activityRecord = StoreHelper.getActivityRecord()
    // return APP_TYPE_EHR === activityRecord.appType
    if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      const seed = EhrOnlyDemo.ehrOnlySeed()
      console.log('EHR only demo', seed.appType, seed)
      return APP_TYPE_EHR === seed.appType
    }
    // console.log('SH this.getSeedAppType()',this.getSeedAppType())
    return APP_TYPE_EHR === this.getSeedAppType()
  }
  isLIS_Showing () {
    if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      const seed = EhrOnlyDemo.ehrOnlySeed()
      console.log('EHR only demo', seed.appType, seed)
      return APP_TYPE_LIS === seed.appType
    }
    return APP_TYPE_LIS === this.getSeedAppType()
  }
}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper
