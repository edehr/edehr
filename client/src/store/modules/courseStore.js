import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper, { INSTRUCTOR_ACTION } from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'courses'
const COURSE_LOCAL_STORE ='courseId'

const state = {
  course: {},
  courseList: []
}

const getters = {
  course: state => state.course,
  hasCourse: state => !!state.course._id,
  courseList: state => state.courseList,
  courseActivities: state => state.course.courseActivities,
  courseTitle: state => state.course.title,
  courseDescription: state => state.course.description,
  skillsAssessmentIsActive: state => state.course.skillsAssessmentIsActive,
  skillsIsActivityActive: state => (activityId) => {
    const activities = state.course.skillsAssessmentActivities || []
    return activities.indexOf(activityId) >-1
  }
}

function skillsHelper (context, action, activityId) {
  if (context.state.course._id) {
    const courseId = context.state.course._id
    const API = 'courses'
    let url = 'skills-assessment/' + courseId + '/' + action
    let eventTag = 'skillsAssessment_' + action
    if (activityId) {
      url += '/' + activityId
      eventTag += '_' + activityId
    }
    return InstoreHelper
      .putRequest(context, API, url)
      .then(async results => {
        await context.commit('setCourse', results.data)
      })
      .catch(err => {
        let msg = Text.UPDATE_COURSE_ERROR(err)
        console.error(msg)
        StoreHelper.setApiError(msg)
      })
      .finally(() => {
        StoreHelper.postActionEvent(INSTRUCTOR_ACTION, eventTag)
      })
  } else {
    console.error('Why is someone calling the skillsHelper without a course?')
  }
}
const actions = {
  initialize: async function (context) {
    const courseId = localStorage.getItem(COURSE_LOCAL_STORE)
    if (courseId && StoreHelper.isAuthd()) {
      await context.dispatch('loadCurrentCourse', { courseId: courseId })
    }
  },
  clearCourse: async function (context) {
    context.commit('_clearCourse')
    await context.dispatch('activityStore/clearCurrentActivity', undefined, { root: true })
  },
  getCourseArchive (context) {
    let id = context.state.course?._id
    console.log('get course archive', id)
    let url = 'course-archive/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      return response.data
    })
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
    const id = payload.courseId
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
  async skillsAssessmentToggle (context, activityId) {
    const isActive = context.getters.skillsIsActivityActive(activityId)
    const action = isActive ? 'remove' : 'add'
    await skillsHelper(context, action, activityId)
  },
  async skillsAssessmentClear (context) {
    await skillsHelper(context, 'clear')
  },
  /**
   *
   * @param context
   * @param payload to contain title and description
   * @returns {Promise<unknown>}
   */
  updateCourse (context, payload) {
    const courseId = context.state.course._id
    const API = 'courses'
    let url = 'update-course/' + courseId
    return InstoreHelper
      .putRequest(context, API, url, payload)
      .then(async results => {
        const course = results.data
        await context.commit('setCourse', course)
        return context.dispatch('loadCourses')
      })
      .catch(err => {
        let msg = Text.UPDATE_COURSE_ERROR(err)
        console.error(msg)
        StoreHelper.setApiError(msg)
      })
      .finally( () => {
        StoreHelper.postActionEvent(INSTRUCTOR_ACTION, 'updateCourse')
      })
  }
}

const mutations = {
  setCourse: (state, course) => {
    const cId = course && course._id ? course._id.toString() : undefined
    if(!cId) {
      const msg = 'Course storage can not set course. Parameter is empty or lacks id.'
      console.error(msg)
      throw new Error(msg)
    }
    state.course = course
    localStorage.setItem(COURSE_LOCAL_STORE, course._id)
  },
  _clearCourse: (state) => {
    state.course = {}
    localStorage.removeItem(COURSE_LOCAL_STORE)
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
