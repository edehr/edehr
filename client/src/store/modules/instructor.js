import InstoreHelper from './instoreHelper'
import sKeys from '../../helpers/session-keys'
const debug = false
const NAME = 'InstStore '

const state = {
  sCurrentEvaluationStudentId: '',
  sClassList: [],
  sCourses: []
}

const getters = {
  /** List -- ClassList
   *
   ClassList is a list of Visit records (student only) for a particular LMS activity.
   Each record contains a populated ActivityData (student's work) (EdEHR) Assignment and User
   return Visit.find({ $and: [ {isStudent: true }, {activity: _id} ] })
   .populate('activityData', 'submitted evaluated assignmentData evaluationData')
   .populate('assignment', 'externalId name description seedDataId ehrRoutePath')
   .populate('user', 'givenName familyName fullName emailPrimary')
   .select('userName lastVisitDate')
   .then((visits) => {
      return {classList: visits}
    })
   * @return {Array|*}
   */
  list: state => { return state.sClassList },

  currentEvaluationStudentId: state => {
    return state.sCurrentEvaluationStudentId
  },

  currentEvaluationStudent: state => {
    let currentId = state.sCurrentEvaluationStudentId
    let classList = state.sClassList
    let student = classList.find(elem => {return elem._id === currentId})
    if(debug) {
      console.log(NAME + 'currentEvaluationStudent currentId',currentId)
      console.log(NAME + 'currentEvaluationStudent classList',classList)
      console.log(NAME + 'currentEvaluationStudent student',student)
    }
    student = student || { user: {}, activity: {}, activityData: { assignmentData: {}} }
    return student
  },
  sCourses: state => state.sCourses
}

const actions = {
  changeCurrentEvaluationStudentId: (context, currentId) => {
    if (debug) { console.log(NAME + 'change current evaluation student id to ', currentId)}
    context.commit('setCurrentEvaluationStudentId', currentId)
    let sv = context.getters.currentEvaluationStudent
    let adId = sv.activityData._id
    if(debug) console.log(NAME + 'currentEvaluationStudent activityData._id',adId)
    return context.dispatch('activityDataStore/load', adId, {root:true})
  },

  saveEvaluationNotes (context, payload) {
    let vid = payload.activityDataId
    let body = {
      evaluationData: payload.evalNotes
    }
    let api = 'activity-data'
    let url = 'evaluation-data/' + vid
    if(debug) console.log(NAME + 'store save eval notes ', url, body)
    return new Promise(resolve => {
      InstoreHelper.putRequest(context, api, url, body).then(results => {
        let evaluationData = results.data
        resolve(evaluationData)
      })
    })
  },

  loadCourses (context) {
    if(debug) console.log(NAME + 'loadCourses')
    let userId = context.rootGetters['userStore/userId']
    let api = 'users'
    let url = 'instructor/courses/' + userId
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        let courses = response.data['courses']
        if(debug) console.log(NAME + 'loadCourses', courses)
        context.commit('setCourses', courses)
        return courses
      })
  },

  loadClassList (context, filtered) {
    console.debug('Instructor store no longer filters list. TODO clean up.')
    let activityId = context.rootGetters['activityStore/activityId']
    if(debug) console.log(NAME + 'load classList filtered, activityId', filtered, activityId)
    let api = 'activities'
    let url = `class-list/${activityId}`
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        let classList = response.data['classList']
        let len = classList.length
        classList.forEach (( elem, index )  => {
          elem.index = index
          elem.listLength = len
        })
        if(debug) {
          console.log(NAME + 'cl classList', classList)
        }
        context.commit('setClassList', classList)
        return classList
      })
  },

}

const mutations = {
  setClassList: (state, list) => { state.sClassList = list  },

  setCourses: (state, list) => { state.sCourses = list  },

  setCurrentEvaluationStudentId: (state, id) => {
    state.sCurrentEvaluationStudentId = id
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
