import store from '../store'
import {removeEmptyProperties } from './ehr-utils'
import sKeys from './session-keys'

const debug = false

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
  _dispatchAuthStore (key, payload) { return store.dispatch(`authStore/${key}`, payload) }
  _dispatchConsumerList (key, payload) { return store.dispatch('consumerListStore/' + key, payload)}
  _dispatchConsumer (key, payload) { return store.dispatch('consumerStore/' + key, payload)}
  _dispatchSeedListProperty (key, payload) { return store.dispatch('seedListStore/' + key, payload)}
  _dispatchInstructor (key, payload) { return store.dispatch('instructor/' + key, payload)}
  _dispatchVisit (key, payload) { return store.dispatch('visit/' + key, payload)}
  _dispatchUser (key, payload) { return store.dispatch('userStore/' + key, payload)}

  /* **********   General  ************** */
  toolConsumerId () { return this._getConsumerProperty('consumerId') }
  userId () { return this._getUserProperty('userId') }
  fullName () { return this._getUserProperty('fullName') }
  lmsUrl () { return this._getVisitProperty('returnUrl') }
  lmsName () { return this._getConsumerProperty('lmsName') }
  isInstructor () { return this._getVisitProperty('isInstructor') }
  isDeveloper () { return this._getVisitProperty('isDeveloper') }
  isStudent () { return this._getVisitProperty('isStudent') }


  /**
   * The API server must provide the url to call back into the server.
   */
  apiUrl () { return sessionStorage.getItem('apiUrl') || undefined }
  apiUrlSet (url) { sessionStorage.setItem('apiUrl', url) }



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
  isLoading () { return this._getSystemProperty('isLoading')}
  isShowingAdvanced () { return this._getSystemProperty('isShowingAdvanced') }

  /*
  * **********   Instructor  **************
  */

  getClassList () { return this._getInstructorProperty('list') }

  dispatchLoadClassList ( filtered ) { return this._dispatchInstructor('loadClassList', filtered)  }

  getCurrentEvaluationStudentId () { return this._getInstructorProperty('currentStudentId') }

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
  loadAsCurrentActivity (activityId) { return this._dispatchActivity('load', activityId) }

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

  currentStudentId () { return this._getInstructorProperty('currentStudentId') }

  getCourseList () { return store.state.instructor.sCourses || [] }


  /**
   *  **********   Assignments  **************
   */

  getAssignmentId () { return this._getAssignmentProperty('id') }

  getAssignmentName () { return this._getActivityProperty('assignmentName') }

  getAssignmentDescription () { return this._getActivityProperty('assignmentDescription') }

  getAssignment (id) { return this._dispatchAssignment('get', id) }

  loadAssignment (id) { return this._dispatchAssignment('load', id) }

  loadAssignmentAndSeedLists () {
    // load the seeds first so they are ready for the assignments to integrate
    return  this._dispatchSeedListProperty('loadSeeds')
      .then ( () => {
        return this.loadAssignmentList()
      })
  }

  loadAssignmentList () {  return this._dispatchAssignmentList('loadAssignments') }

  // returns promise that resolves to assignment list
  updateAssignment (component, assignmentId, assignmentData) {
    // console.log('Assignment update ', assignmentId, assignmentData)
    let dataIdPlusPayload = { id: assignmentId, payload: assignmentData }
    return this._dispatchAssignmentList('updateAssignment', dataIdPlusPayload)
  }

  // returns promise that resolves to assignment list
  createAssignment (assignmentData) { return this._dispatchAssignmentList('createAssignment', assignmentData) }

  getAssignmentsList () { return this._getAssignmentListProperty('list') }

  getAssignmentSeedId () { return this._getAssignmentProperty('seedDataId') }

  /* **********   Seed Data  ************** */

  getSeedId () { return this._getSeedListProperty('seedId')}
  getSeedEhrData () { return this._getSeedListProperty('seedEhrData')}
  getSeedContent () { return this._getSeedListProperty('seedContent') }

  loadSeed (seedId) { return this._dispatchSeedListProperty('loadSeedContent', seedId) }
  loadSeedLists () { return this._dispatchSeedListProperty('loadSeedDataList') }

  updateSeed (component, seedId, theData) {
    // console.log('Seed Data update ', seedId, theData)
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
    if(pDebug) console.log('getPanelData assignment', assignment)
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
      if(pDebug) console.log('getPanelData currentEvaluationStudent', ces)
    }
    if (this.isStudent()) {
      data.scratchData = this.getStudentScratchData()
    }
    if(pDebug) console.log('getPanelData data', data)
    return data
  }

  /* **********   Loading and Restoring  ************** */
  loadVisitRecord (visitId) {
    if (debug) console.log('SH loadVisitRecord dispatch the load visit information', visitId)
    sessionStorage.setItem(sKeys.USER_TOKEN, visitId)
    return this._dispatchVisit('loadVisit2', visitId)
  }

  loadCommon () {
    let visitInfo = store.state.visit.sVisitData || {}
    return Promise.all([
      this._dispatchConsumer('load', visitInfo.toolConsumer),
      this._dispatchUser('load', visitInfo.user),
    ]).then ( () => {
      return this.loadAssignmentAndSeedLists()
    }).then ( () => {
      let activityId = this.getActivityId()
      if (debug) console.log('SH loadCommon activityId', activityId)
      if(!activityId) {
        activityId = visitInfo.activity
        if(debug) console.log('loadCommon load activity from visit record', activityId)
      } else {
        if(debug) console.log('loadCommon load activity from session', activityId)
      }
      if (activityId) {
        return StoreHelper.loadAsCurrentActivity(activityId)
      }
    })
  }

  restoreSession () {
    let visitId = sessionStorage.getItem(sKeys.USER_TOKEN)
    if (debug) console.log('No visit id in url query. Is it in session storage? visitId', visitId)
    if (visitId) {
      return this._dispatchActivity('sessionRestore')
        .then ( () => {
          return this._dispatchInstructor('sessionRestore')
        })
        .then( () => {
          return visitId
        })
    }
    return visitId
  }

  clearSession () {
    sessionStorage.removeItem(sKeys.C_ACTIVITY)
    sessionStorage.removeItem(sKeys.C_STUDENT)
    sessionStorage.removeItem(sKeys.SEED_ID)
    return Promise.resolve()
  }

  loadStudent2 () {
    let visitInfo = store.state.visit.sVisitData || {}
    // visitInfo.activityData and .activity and .assignment are all ids
    if (debug) console.log('SH loadStudent2 visitInfo.activity', visitInfo.activity)
    return this.loadCommon().then(() => {
      return Promise.all([
        this._dispatchActivityData('load', visitInfo.activityData),
        this.loadAsCurrentActivity(visitInfo.activity),
        this.loadAssignment(visitInfo.assignment),
      ])
    }).then(() => {
      let seedId = this.getAssignmentSeedId()
      if(debug) console.log('loadStudent2 seedId', seedId)
      return this.loadSeed(seedId)
    })
  }

  loadInstructor2 () {
    return this.loadCommon().then(() => {
      return this._dispatchInstructor('loadCourses').then(() => {
        if(debug) console.log('loadInstructor2 load and restore instructor')
      })
    })
  }


  loadInstructorWithStudent (filtered) {
    const local = debug && true
    if(local) console.log('loadInstructorWithStudent')
    let activityId = this.getActivityId()
    let result = {}
    if (!activityId) {
      console.error('Can\'t find a current activity id')
      return Promise.resolve()
    }
    if(local) console.log('loadInstructorWithStudent activityId', activityId)
    return this.loadAsCurrentActivity(activityId)
      .then((theActivity) => {
        result.activity = theActivity
        if(local) console.log('loadInstructorWithStudent theActivity', theActivity)
        return this.loadAssignment(theActivity.assignment)
      })
      .then((theAssignment) => {
        result.assignment = theAssignment
        if(local) console.log('loadInstructorWithStudent theAssignment', theAssignment)
        return this.dispatchLoadClassList(filtered)
      }).then(() => {
        let seedId = StoreHelper.getAssignmentSeedId()
        result.seedId = seedId
        if(local) console.log('loadInstructorWithStudent seedId', seedId)
        return this.loadSeed(seedId)
      }).then(() => {
        return result
      })
  }

  loadDevelopingSeed () {
    let seedId = sessionStorage.getItem(sKeys.SEED_ID)
    if(debug) console.log('load developing seed id:', seedId)
    if (seedId) {
      return this.loadSeed(seedId)
    }
  }

  fetchAndStoreAuthToken (refreshToken, apiUrl) {
    return this._dispatchAuthStore('fetchAndStoreAuthToken', {refreshToken, apiUrl})
  }

  fetchTokenData (authToken = this.getAuthToken(), apiUrl) {
    return this._dispatchAuthStore('fetchTokenData', {authToken, apiUrl})
  }

  setAuthToken (authToken) {
    return this._dispatchAuthStore('setAuthToken', authToken)
  }

  getAuthPayload () {
    return this._getAuthStore('authData')
  }

  getAuthToken () {
    return this._getAuthStore('authToken')
  }
  

}

const StoreHelper = new StoreHelperWorker()
export default StoreHelper