import axios from 'axios' // '../node_modules/axios/dist/axios.min'
import StoreHelper from './storeHelper'
const helper = new StoreHelper()
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
    var currentId = state.sCurrentEvaluationStudentId
    var classList = state.sClassList
    if (currentId && classList) {
      return classList.find(elem => {
        return elem._id === currentId
      })
    }
    return { user: {}, activity: {} }
  }
}

const actions = {
  changeCurrentEvaluationStudentId: (context, currentId) => {
    return new Promise(resolve => {
      // TODO store the id in localstorage to support page refresh
      context.commit('setCurrentEvaluationStudentId', currentId)
      var classList = context.state.sClassList
      console.log('changeCurrentEvaluationStudentId', currentId, ' classList: ', classList)
      var sv // a student's visit information
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
      context.commit('ehrData/setCurrentStudentInfo', currentStudentInfo, { root: true })
      // sv.activityData is the id of the activity data record
      context
        .dispatch(
          'ehrData/loadActivityData',
          { forStudent: false, id: sv.activityData },
          { root: true }
        )
        .then(() => {
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
        })
        .then(() => {
          resolve(currentStudentInfo)
        })
    })
  },
  saveEvaluationNotes(context, payload) {
    let vid = payload.activityDataId
    let body = {
      evaluationData: payload.evalNotes
    }
    let url = `${context.state.apiUrl}/activity-data/evaluation-data/${vid}`
    // console.log('store save eval notes ', url, body)
    return new Promise(resolve => {
      helper.putRequest(context, url, body).then(results => {
        let evaluationData = results.data
        resolve(evaluationData)
      })
    })
  },
  loadActivity(context, activityId) {
    // console.log('Loading activity. ', activityId)
    context.commit('setCurrentActivityId', activityId)
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activities/get/${activityId}`
    return new Promise(resolve => {
      axios.get(url).then(response => {
        // console.log('load activity', response.data)
        var activity = response.data['activity']
        context.commit('setCurrentActivity', activity)
        resolve(activity)
      })
    })
  },
  loadCourses(context) {
    // console.log('In instructor loadCourses')
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let userId = visitState.sUserInfo._id
    let url = `${apiUrl}/users/instructor/courses/${userId}`
    // console.log('In instructor loadCourses ', url)
    return new Promise(resolve => {
      axios.get(url).then(response => {
        var courses = response.data['courses']
        // console.log('load courses', response.data)
        // console.log('load courses', courses)
        context.commit('setCourses', courses)
        courses.forEach(course => {
          // console.log('a course ', course)
        })
        resolve(courses)
      })
    })
  },
  loadClassList(context, activityId) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    return new Promise(resolve => {
      let url = `${apiUrl}/activities/class/${activityId}`
      // console.log('In load instructor activities data ', url)
      axios.get(url).then(response => {
        // console.log('load activities', response.data)
        var classList = response.data['classList']
        context.commit('setClassList', classList)
        resolve(classList)
      })
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
