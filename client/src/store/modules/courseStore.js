import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'courses'

const state = {
  course: {},
  courseId: '',
  courseList: []
}

const getters = {
  course: state => state.course,
  hasCourse: state => JSON.stringify(state.course).length > 2,
  courseList: state => state.courseList,
  courseActivities: state => state.course.courseActivities,
  courseId: state => state.courseId,
  courseTitle: state => state.course.title,
  courseDescription: state => state.course.description,
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearCourse: async function (context) {
    context.commit('setCourseId', undefined)
    await context.dispatch('activityStore/clearCurrentActivity', undefined, { root: true })
  },
  setCourseId (context, id) {
    context.commit('setCourseId', id)
  },

  loadCourses (context) {
    let url = 'courseList'
    return InstoreHelper.getRequest(context, API, url)
      .then(response => {
        let courseList = response.data['courseList']
        context.commit('setCourseList', courseList)
        return courseList
      })
  },

  loadCurrentCourse (context, payload) {
    const id = state.courseId
    if(!id || id.length===0) {
      throw new Error('System failure. Can not load the current course because no course id has been set')
    }
    let url = 'course/' + id
    if (payload && payload.sortKey) {
      url += '?sortKey=' + payload.sortKey +'&sortDir=' + payload.sortDir
    }
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data['course']
      if (!results) {
        let msg = Text.GET_ACTIVITY_STORE_ERROR(id)
        StoreHelper.setApiError(msg)
        return
      }
      context.commit('setCourse', results)
      return results
    })
  },


  updateCourse (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    return InstoreHelper
      .putRequest(context, 'courses/updateCourse', id, payload)
      .then(results => {
        return context.dispatch('loadCourses')
      })
      .catch(err => {
        let msg = Text.UPDATE_COURSE_ERROR(err)
        console.error(msg)
        StoreHelper.setApiError(msg)
      })
  }
}

const COURSE_LOCAL_STORE ='courseId'
const mutations = {
  initialize: function (state) {
    // if stored get the courseId. Once it is in place a page load can request the course data
    const courseId = localStorage.getItem(COURSE_LOCAL_STORE)
    if (courseId) {
      state.courseId = courseId
    }
  },
  setCourseId: (state, id) => {
    if (id) {
      state.courseId = id
      // This id needs to survive a browser refresh
      localStorage.setItem(COURSE_LOCAL_STORE, state.courseId)
    } else {
      state.courseId = ''
      // This id needs to survive a browser refresh
      localStorage.removeItem(COURSE_LOCAL_STORE)
    }
  },
  setCourse: (state, course) => {
    const cId = course && course._id ? course._id.toString() : undefined
    if(state.courseId !== cId) {
      console.error('Course storage expected course id', state.courseId, 'incoming course id', cId,'given course', course)
      throw new Error('System failure. The given course has a different id then expected.')
    }
    state.course = course
  },
  setCourseList: (state, courseList) => {
    state.courseList = courseList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
