import InstoreHelper from './instoreHelper'
const debug = false
const NAME = 'StudentStore '

const state = {
  courseList: []
}
/*
  course = {
    id: activity.context_id,
    label: activity.context_label,
    name: activity.context_title,
    type: activity.context_type,
    courseActivities: []

Each element in courseActivities is instance of
  const studentActivity = {
    visit: visit,
    activity: activity
  }
Where visit is a Visit record and activity is a populated Activity record containing
Activity {
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  resource_link_id: {type: String, required: true}, // ltiData.resource_link_id,
  context_id: {type: String}, // ltiData.context_id,
  context_label: {type: String}, // ltiData.context_label,
  context_title: {type: String}, // ltiData.context.context_title,
  context_type: {type: String}, // ltiData.context_type,
  resource_link_title: {type: String}, // ltiData.resource_link_title,
  resource_link_description: {type: String}, // ltiData.resource_link_description,
  createDate: {type: Date, default: Date.now},
  lastDate: {type: Date, default: Date.now}

  assignment: {
    name, description, seedDataId
  }

}
 */

const getters = {
  courseList: state => state.courseList
}

const actions = {
  loadCourses (context) {
    let userId = context.rootGetters['userStore/userId']
    let api = 'users'
    let url = 'student/courses/' + userId
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        let courses = response.data['courses']
        if(debug) console.log(NAME + 'loadCourses', courses)
        context.commit('setCourses', courses)
        return courses
      })
  },
}

const mutations = {
  setCourses: (state, list) => { state.courseList = list  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
