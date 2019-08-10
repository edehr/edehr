import InstoreHelper from './instoreHelper'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

const state = {
  sInstructorReturnUrl: '/instructor',
  sCurrentEvaluationStudentId: '',
  sCurrentActivityId: '',
  sCurrentActivity: {},
  sClassList: [],
  sCourses: []
}

const getters = {
  currentEvaluationStudent: state => {
    let currentId = state.sCurrentEvaluationStudentId
    let classList = state.sClassList
    if (currentId && classList) {
      return classList.find(elem => {
        return elem._id === currentId
      })
    }
    return { user: {}, activity: {} }
  }
}

const actions = {
  changeCurrentEvaluationStudentId: (context, data) => {
    return new Promise(resolve => {
      let rootOpt = { root: true }
      let currentId = data.studentId
      let classList = data.classList
      context.commit('setCurrentEvaluationStudentId', currentId)
      // console.log('changeCurrentEvaluationStudentId', currentId, ' classList: ', classList)
      let sv // a student's visit information
      if (currentId && classList) {
        sv = classList.find(elem => {
          return elem._id === currentId
        })
      }
      if (!sv) {
        console.log('ERROR. Cannot find student in class list. ', currentId, classList)
        return resolve()
      }
      // console.log("What do we have here? ", sv, sv.activity)
      let sva = sv.assignment
      let currentStudentInfo = {
        studentName: sv.user.fullName,
        assignmentName: sva.name,
        assignmentDescription: sva.description
      }
      // console.log('setCurrentStudentInfo: ', currentStudentInfo)
      context.commit('ehrData/setCurrentStudentInfo', currentStudentInfo, rootOpt)
      // sv.activityData is the id of the activity data record
      let activityOpt = { forStudent: false, id: sv.activityData._id }
      let dispatchRoute = 'ehrData/loadActivityData'
      context.dispatch(dispatchRoute, activityOpt, rootOpt)
        .then(() => {
          console.log('changeCurrentEvaluationStudentId emit PAGE_DATA_REFRESH_EVENT')
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
          resolve(currentStudentInfo)
        })
    })
  },
  saveEvaluationNotes (context, payload) {
    let vid = payload.activityDataId
    let body = {
      evaluationData: payload.evalNotes
    }
    let url = `${context.state.apiUrl}/activity-data/evaluation-data/${vid}`
    // console.log('store save eval notes ', url, body)
    return new Promise(resolve => {
      InstoreHelper.putRequest(context, url, body).then(results => {
        let evaluationData = results.data
        resolve(evaluationData)
      })
    })
  },
  loadCurrentActivity (context, activityId) {
    // console.log('Loading activity. ', activityId)
    context.commit('setCurrentActivityId', activityId)
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activities/get/${activityId}`
    return InstoreHelper.getRequest(context, url)
      .then(response => {
        let activity = response.data['activity']
        if (activity)  {
          context.commit('setCurrentActivity', activity)
        }
        return activity
      })
  },
  loadActivity (context, activityId) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activities/get/${activityId}`
    return InstoreHelper.getRequest(context, url)
      .then(response => {
        let activity = response.data['activity']
        return activity
      })
  },
  loadCourses (context) {
    // console.log('In instructor loadCourses')
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let userId = visitState.sUserInfo._id
    let url = `${apiUrl}/users/instructor/courses/${userId}`
    // console.log('In instructor loadCourses ', url)
    return InstoreHelper.getRequest(context, url)
      .then(response => {
        let courses = response.data['courses']
        // console.log('load courses', response.data)
        // console.log('load courses', courses)
        context.commit('setCourses', courses)
        return courses
      })
  },
  loadClassList (context, activityId) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activities/class/${activityId}`
    return InstoreHelper.getRequest(context, url)
      .then(response => {
        // console.log('load activities', response.data)
        let classList = response.data['classList']
        context.commit('setClassList', classList)
        return classList
      })
  }
}

const mutations = {
  setClassList: (state, list) => {
    /*
    list of Visit records (student only) for a particular LMS activity.
    Each record contains a populated ActivityData (student's work)
    (EdEHR) Assignment and User
     */
    state.sClassList = list
  },
  updateActivityData: (state, options) => {
    let svId = options.sv._id
    let sv = state.sClassList.find( (elem) => elem._id === svId)
    sv.activityData = options.activityData
    console.log('updated AD in sv', sv.activityData)
  },
  setCurrentActivityId: (state, id) => {
    state.sCurrentActivityId = id
  },
  setCurrentActivity: (state, activity) => {
    state.sCurrentActivity = activity
  },
  setCourses: (state, list) => {
    // console.log('set courses', list)
    state.sCourses = list
  },
  setInstructorReturnUrl: (state, rUrl) => {
    // console.log('save instructor return url' + rUrl)
    localStorage.setItem('sInstructorReturnUrl', rUrl)
    state.sInstructorReturnUrl = rUrl
  },
  setCurrentEvaluationStudentId: (state, id) => {
    localStorage.setItem('sCurrentEvaluationStudentId', id)
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
