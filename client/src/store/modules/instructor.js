import InstoreHelper from './instoreHelper'
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
   .populate('activityData', 'submitted assignmentData evaluationData')
   .populate('assignment', 'name description seedDataId')
   .populate('user', 'givenName familyName fullName emailPrimary')
   .select('userName lastVisitDate')
   .then((visits) => {
      return {classList: visits}
    })
   * @return {Array|*}
   */
  classList: state => { return state.sClassList },

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
  sCourses: state => state.sCourses,
  courseList: state => state.sCourses

}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearInstructor: function (context) {
    context.commit('setCurrentEvaluationStudentId', undefined)
  },
  changeCurrentEvaluationStudentId: async (context, currentStudentVisitId) => {
    if (debug) console.log(NAME + 'change current evaluation student id to ', currentStudentVisitId)
    context.commit('setCurrentEvaluationStudentId', currentStudentVisitId)
  },
  loadCurrentEvaluationStudentId: async (context) => {
    let sv = context.getters.currentEvaluationStudent
    // console.log(NAME + 'loadCurrentEvaluationStudentId sv.activityData', sv.activityData)
    console.log(NAME + 'loadCurrentEvaluationStudentId sv.activityData', sv.activityData.assignmentData)
    let adId = sv.activityData._id
    if (debug) console.log(NAME + 'currentEvaluationStudent activityData._id', adId)
    console.log(NAME + 'currentEvaluationStudent activityData._id', adId)
    await context.dispatch('activityDataStore/loadActivityData', { id: adId }, { root: true })
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

  loadClassList (context) {
    let activityId = context.rootGetters['activityStore/activityId']
    if(debug) console.log(NAME + 'load classList for activityId', activityId)
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
  }
}

const INSTRUCTOR_LOCAL_STORE ='currentEvaluationStudentId'
const mutations = {
  initialize: function (state) {
    // if stored get the activityId. Once it is in place a page load can request the activity data
    const currentEvaluationStudentId = localStorage.getItem(INSTRUCTOR_LOCAL_STORE)
    if (currentEvaluationStudentId) {
      if(debug) console.log(NAME + 'initialize and load current evaluation student id from local storage', currentEvaluationStudentId)
      state.sCurrentEvaluationStudentId = currentEvaluationStudentId
    }
  },
  setClassList: (state, list) => {
    list = list.slice() // make a copy so we can sort the list
    list.sort((a,b) => a.user.fullName.localeCompare(b.user.fullName))
    for(let i = 0; i< list.length; i++) {
      list[i].index = i
    }
    state.sClassList = list
  },

  setCourses: (state, list) => { state.sCourses = list  },

  setCurrentEvaluationStudentId: (state, id) => {
    if(debug) console.log(NAME + 'setCurrentEvaluationStudentId', id)
    if (id) {
      localStorage.setItem(INSTRUCTOR_LOCAL_STORE, id)
    } else {
      localStorage.removeItem(INSTRUCTOR_LOCAL_STORE)
    }
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
