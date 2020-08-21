import store from '../store'
import {removeEmptyProperties } from './ehr-utils'
import sKeys from './session-keys'
const debugSH = false

// TODO refactor this class See https://github.com/BCcampus/edehr/issues/760

class StoreHelperWorker {

  getAsLoadedPageData (pageKey) { return store.getters['ehrDataStore/asLoadedDataForPageKey'](pageKey) }

  getMergedData () { return store.getters['ehrDataStore/mergedData'] }

  getHasDataForPagesList () { return store.getters['ehrDataStore/hasDataForPagesList'] }


  /* **********   Internal  ************** */
  _getActivityDataProperty (key) { return store.getters['activityDataStore/' + key]}
  _getAuthStore (key) { return store.getters['authStore/'+ key] }
  _getUserProperty (key) { return store.getters['userStore/' + key]}
  _getActivityProperty (key) { return store.getters['activityStore/' + key]}
  _getAssignmentProperty (key) { return store.getters['assignmentStore/' + key]}
  _getAssignmentListProperty (key) { return store.getters['assignmentListStore/' + key]}
  _getConsumerListProperty (key) { return store.getters['consumerListStore/' + key]}
  _getInstructorProperty (key) { return store.getters['instructor/' + key]}
  _getSeedListProperty (key) { return store.getters['seedListStore/' + key]}
  _getSystemProperty (key) { return store.getters['system/' + key]}
  _getVisitProperty (key) { return store.getters['visit/' + key]}
  _getConsumerProperty (key) { return store.getters['consumerStore/' + key]}

  _dispatchActivity (key, payload) { return store.dispatch('activityStore/' + key, payload)}
  _dispatchActivityData (key, payload) { return store.dispatch('activityDataStore/' + key, payload)}
  _dispatchAssignment (key, payload) { return store.dispatch('assignmentStore/' + key, payload)}
  _dispatchAssignmentList (key, payload) { return store.dispatch('assignmentListStore/' + key, payload)}
  async _dispatchAuthStore (key, payload) { return await store.dispatch(`authStore/${key}`, payload) }
  _dispatchConsumerList (key, payload) { return store.dispatch('consumerListStore/' + key, payload)}
  _dispatchClassList (key, payload) { return store.dispatch('classListStore/' + key, payload)}
  async _dispatchConsumer (key, payload) { return await store.dispatch('consumerStore/' + key, payload)}
  async _dispatchSeedListProperty (key, payload) { return await store.dispatch('seedListStore/' + key, payload)}
  async _dispatchInstructor (key, payload) { return await store.dispatch('instructor/' + key, payload)}
  _dispatchVisit (key, payload) { return store.dispatch('visit/' + key, payload)}
  async _dispatchUser (key, payload) { return await store.dispatch('userStore/' + key, payload)}

  /* **********   General  ************** */
  toolConsumerId () { return this._getAuthStore('consumerId') }
  userId () { return this._getUserProperty('userId') }
  fullName () { return this._getUserProperty('fullName') }
  lmsUrl () { return this._getVisitProperty('returnUrl') }
  lmsName () { return this._getConsumerProperty('lmsName') }
  isInstructor () { return this._getVisitProperty('isInstructor') }
  isDeveloper () { return this._getVisitProperty('isDeveloper') }
  isStudent () { return this._getVisitProperty('isStudent') }
  // isDemo see demo section

  /**
   * The API server must provide the url to call back into the server.
   */
  apiUrlGet () { return localStorage.getItem('apiUrl') || undefined }
  apiUrlSet (url) { localStorage.setItem('apiUrl', url) }
  // import config from '../../config'

  isReadOnlyInstructor () { return this._getVisitProperty('isReadOnlyInstructor')}
  setIsReadOnlyInstructor (isReadonly = false) { return store.commit('visit/setIsReadOnlyInstructor', isReadonly)}

  isDevelopingContent () { return this._getVisitProperty('isDevelopingContent')  }
  setIsDevelopingContent (state) { store.commit('visit/setIsDevelopingContent', state) }

  getCourseTitle () { return this._getActivityProperty('courseTitle') }

  isSubmitted () { return this._getActivityDataProperty('submitted') }
  isEvaluated () { return this._getActivityDataProperty('evaluated') }
  getStudentAssignmentData () { return this._getActivityDataProperty('assignmentData')}
  getStudentScratchData () { return this._getActivityDataProperty('scratchData')}
  getEvaluationNotes () { return this._getActivityDataProperty('evaluationData')   }
  getActivityData () { return this._getActivityDataProperty('activityData')}
  studentSubmitsAssignment (submitted) { return this._dispatchActivityData('sendSubmitted', submitted)}

  sendAssignmentDataUpdate (payload) {return this._dispatchActivityData('sendAssignmentDataUpdate', payload)}

  // TODO remove context in all calls to this method
  setLoading (context, value) { store.commit('system/setLoading', value) }
  setShowAdvanced (value) { store.commit('system/setShowingAdvanced', value) }

  setApiError (msg) {  store.commit('system/setApiError', msg, { root: true }) }
  setSystemMessage (msg) {  store.commit('system/setSystemMessage', msg, { root: true }) }
  setSigning (val) { store.commit('system/setSigning', val) }

  isLoading () { return this._getSystemProperty('isLoading')}
  isShowingAdvanced () { return this._getSystemProperty('isShowingAdvanced') }
  isSigning () { return this._getSystemProperty('isSigning') }

 

  /*
   * **********   Class List  **************
   */

  getClassListForActivity ( activityId) {
    return this._dispatchClassList('getClassList', activityId)
  }

  /*
  * **********   Instructor  **************
  */

  getClassList () { return this._getInstructorProperty('list') }

  dispatchLoadClassList ( filtered ) { return this._dispatchInstructor('loadClassList', filtered)  }

  getCurrentEvaluationStudentId () { return this._getInstructorProperty('currentEvaluationStudentId') }

  getCurrentEvaluationStudentVisit () { return this._getInstructorProperty('currentEvaluationStudent') }

  getCurrentEvaluationStudentAssignmentData () {
    let sv = this.getCurrentEvaluationStudentVisit()
    return sv.activityData.assignmentData
  }

  instructorReturnsAssignment () { return this.studentSubmitsAssignment(false)}

  instructorMarksWorkEvaluated (newState) {return this._dispatchActivityData('sendEvaluated', newState)}

  changeStudentForInstructor (studentVisitId) { return this._dispatchInstructor('changeCurrentEvaluationStudentId', studentVisitId)}

  saveEvaluationNotes (evalNotes ) { return this._dispatchActivityData('sendEvaluationNotes', evalNotes) }

  /*
  * **********   Activity  **************
  */

  getActivityId () { return this._getActivityProperty('activityId') }

  getActivityTitle () { return this._getActivityProperty('activityTitle') }

  getActivityDescription () { return this._getActivityProperty('activityDescription') }

  getActivityIsClosed () {
    return this._getActivityProperty('closed')
  }

  getActivityClosedDate () {
    return this._getActivityProperty('closedDate')
  }

  activitiesUsingAssignmentCount (assignmentId) {
    let cnt = 0
    let courses = this.getCourseList()
    courses.forEach(course => {
      course.activities.forEach( a => cnt += a.assignment === assignmentId ? 1 : 0)
    })
    return cnt
  }

  /**
   * Make API call to get activity
   * @param activityId
   * @return {*}
   */
  dispatchLoadActivity ( activityId) { return this._dispatchActivity('get', activityId) }

  /**
   * Make API call to load activity AND make this one the active one
   * @param activityId
   * @return {*}
   */
  async loadAsCurrentActivity (activityId) { return await this._dispatchActivity('load', activityId) }

  /**
   * Make API call to close activity
   * @param activityId
   * @return {*}
   */
  closeActivity (activityId) { return this._dispatchActivity('close', activityId) }

  /**
   * Make API call to open activity
   * @param activityId
   * @return {*}
   */
  openActivity (activityId) { return this._dispatchActivity('open', activityId) }

  getCourseList () { return store.state.instructor.sCourses || [] }


  /**
   *  **********   Assignments  **************
   */

  getAssignmentId () { return this._getAssignmentProperty('id') }

  getAssignmentName () { return this._getAssignmentProperty('assignmentName') }

  getAssignmentDescription () { return this._getAssignmentProperty('assignmentDescription') }

  getAssignment (id) { return this._dispatchAssignment('get', id) }

  loadAssignment (id) { return this._dispatchAssignment('load', id) }

  deleteAssignment (id) { return this._dispatchAssignment('delete', id)}

  async loadAssignmentAndSeedLists () {
  // load the seeds first so they are ready for the assignments to integrate
    await this._dispatchSeedListProperty('loadSeeds')
    await this.loadAssignmentList()
  }

  loadAssignmentList () {  return this._dispatchAssignmentList('loadAssignments') }

  // returns promise that resolves to assignment list
  updateAssignment (component, assignmentId, assignmentData) {
  // console.log('SH Assignment update ', assignmentId, assignmentData)
    let dataIdPlusPayload = { id: assignmentId, payload: assignmentData }
    return this._dispatchAssignmentList('updateAssignment', dataIdPlusPayload)
  }

  // returns promise that resolves to assignment list
  createAssignment (assignmentData) { return this._dispatchAssignmentList('createAssignment', assignmentData) }

  getAssignmentsList () { return this._getAssignmentListProperty('list') }

  /* **********   Seed Data  ************** */

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
  loadSeedLists () { return this._dispatchSeedListProperty('loadSeeds') }

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
    // await this.loadCommon()
    await this.loadSeed(this.getSeedEditId())
  }

  /* ************* LMS LTI Consumers   */

  getConsumersList () { return this._getConsumerListProperty('list') }

  loadConsumerList () {  return this._dispatchConsumerList('loadConsumers') }

  updateConsumer (consumerId, consumerData) {
    let dataIdPlusPayload = { id: consumerId, payload: consumerData }
    return this._dispatchConsumerList('updateConsumer', dataIdPlusPayload)
  }

  createConsumer (consumerData) { return this._dispatchConsumerList('createConsumer', consumerData) }


  /* ************* EHR Context   */
  getPanelData () {
    const pDebug = false
    let assignment = this._getAssignmentProperty('assignment')
    if(pDebug) console.log('SH getPanelData assignment', assignment)
    let evaluated = this.isEvaluated()
    let data = {
      userName: this.fullName(),
      courseTitle: this.getCourseTitle(),
      activityTitle: this.getActivityTitle(),
      activityDescription: this.getActivityDescription(),
      closed: this.getActivityIsClosed(),
      closedDate: this.getActivityClosedDate(),
      assignmentName: assignment.name,
      assignmentDescription: assignment.description,
      submitted: this.isSubmitted(),
      evaluated: evaluated,
      evaluationData: evaluated ? this.getEvaluationNotes() : '',
    }
    if (this.isInstructor()) {
      let ces = this.getCurrentEvaluationStudentVisit()
      data.studentName = ces.userName
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

  /* **********   Loading and Restoring  ************** */
  async loadVisitRecord (visitId) {
    if (debugSH) console.log('SH loadVisitRecord dispatch the load visit information', visitId)
    sessionStorage.setItem(sKeys.USER_TOKEN, visitId)
    await this._dispatchVisit('loadVisit2', visitId)
  }

  async loadCommon () {
    let visitInfo = store.state.visit.sVisitData || {}
    // To do use the accessor to get consumer id
    await this._dispatchConsumer('load', visitInfo.toolConsumer)
    await this._dispatchUser('load', visitInfo.user)
    await this.loadAssignmentAndSeedLists()
    let activityId = this.getActivityId()
    if (debugSH) console.log('SH loadCommon activityId', activityId)
    if(!activityId) {
      activityId = visitInfo.activity
      if(debugSH) console.log('SH loadCommon load activity from visit record', activityId)
    } else {
      if(debugSH) console.log('SH loadCommon load activity from session', activityId)
    }
    if (activityId) {
      await StoreHelper.loadAsCurrentActivity(activityId)
    }
  }

  clearSession () {
    console.error('to do remove this method clear session')
    // sessionStorage.removeItem(sKeys.SEED_ID)
    // sessionStorage.removeItem(sKeys.IS_READONLY_INSTRUCTOR)
    return Promise.resolve()
  }

  async loadStudent2 () {
    let visitInfo = store.state.visit.sVisitData || {}
    // visitInfo.activityData and .activity and .assignment are all ids
    if (debugSH) console.log('SH loadStudent2 visitInfo.activity', visitInfo.activity)
    await this.loadCommon()
    await this._dispatchActivityData('load', visitInfo.activityData)
    //TODO seems like load current activity is called twice for student, see loadCommon above.
    await this.loadAsCurrentActivity(visitInfo.activity)
    await this.loadAssignment(visitInfo.assignment)
    let seedId = this.getAssignmentSeedId()
    if(debugSH) console.log('SH loadStudent2 seedId', seedId)
    await this.loadSeed(seedId)
  }

  async loadInstructor2 () {
    await this.loadCommon()
    await this._dispatchInstructor('loadCourses')
    if(debugSH) console.log('SH loadInstructor2 load and restore instructor')
  }


  async loadInstructorWithStudent (filtered) {
    if(debugSH) console.log('SH loadInstructorWithStudent')
    let activityId = this.getActivityId()
    let result = {}
    if (!activityId) {
      console.error('Can\'t find a current activity id')
      return result
    }
    if(debugSH) console.log('SH loadInstructorWithStudent activityId', activityId)
    let theActivity = await this.loadAsCurrentActivity(activityId)
    result.activity = theActivity
    if(debugSH) console.log('SH loadInstructorWithStudent theActivity', theActivity)
    let theAssignment = await this.loadAssignment(theActivity.assignment)
    result.assignment = theAssignment
    if(debugSH) console.log('SH loadInstructorWithStudent theAssignment', theAssignment)
    await this.dispatchLoadClassList(filtered)
    let seedId = StoreHelper.getAssignmentSeedId()
    result.seedId = seedId
    if(debugSH) console.log('SH loadInstructorWithStudent seedId', seedId)
    await this.loadSeed(seedId)
    return result
  }

  async fetchAndStoreAuthToken (refreshToken) {
    return await this._dispatchAuthStore('fetchAndStoreAuthToken', { refreshToken })
  }

  async fetchTokenData (authToken = this.getAuthToken()) {
    return await this._dispatchAuthStore('fetchData', {authToken})
  }

  adminLogin (adminPassword) {
    return this._dispatchAuthStore('adminLogin', { adminPassword })
  }

  adminValidate () {
    return this._dispatchAuthStore('adminValidate')
  }

  async getAuthData () {
    return await this._getAuthStore('authData')
  }

  getAuthToken () {
    return this._getAuthStore('token')
  }

  async logUserOutOfEdEHR () {
    return await this._dispatchVisit('clearVisitData')
  }


  /*
  * **********   Demonstration related  **************
  */

  _getDemoStorage (key) { return store.getters['demoStore/'+ key] }
  _dispatchDemoStore (key, payload) { return store.dispatch(`demoStore/${key}`, payload) }

  createDemoToolConsumer () {
    return this._dispatchDemoStore('createToolConsumer')
  }

  async demoLogout () {
    // log out of any ehr session too
    return await this._dispatchDemoStore('demoLogout')
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
    return this._getDemoStorage('demoTokenData')
  }

  isDemoMode () {
    return this._getDemoStorage('isDemo')
  }

  setDemoToken (demoToken) {
    return this._dispatchDemoStore('setDemoToken', demoToken)
  }

  setDemoPersona (demoPersona) {
    return this._dispatchDemoStore('setDemoPersona', demoPersona)
  }

  setDemoAssignment (assignment) {
    return this._dispatchDemoStore('setDemoAssignment', assignment)
  }

  submitPersona (submitData) {
    return this._dispatchDemoStore('submitPersona', submitData)
  }

  getDemoAcceptTerms () {
    return this._getDemoStorage('agreesWithTerms')
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
