<template lang="pug">
div
  div(v-for="course in courses", :key="course.courseTitle")
    div Course name: {{course.courseTitle}}
    div(class="activitiesSection indent")
      div Activities
      section(v-for="activity in course.activities", :key="`des-${activity.resource_link_title}`")
        app-lms-course-activity(
          class="indent",
          :activity="activity",
          :course="course",
          :given='given',
          :family='family',
          :role='role'
          :toolConsumer='toolConsumer'
        )
</template>

<script>
import AppLmsCourseActivity from '@/outside/views/app-lms/AppLmsCourseActivity.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import { appLmsFetchCourses, fetchConsumerById } from '@/helpers/app-lms-helper'

export default {
  components: {
    AppLmsCourseActivity,
  },
  data () {
    return {
      courses: [],
      toolConsumer: {}
    }
  },
  props: {
    given: { type: String },
    family: { type: String },
    role: { type: String },
    toolConsumerId: { type: String, required: true }
  },
  computed: {
    toolConsumerKey () { return this.toolConsumer.oauth_consumer_key },
  },
  methods: {
    async fetchConsumer () {
      const result = await fetchConsumerById(this.toolConsumerId)
      this.toolConsumer = result.consumer
    },
    async fetchCourses () {
      const results = await appLmsFetchCourses(this.toolConsumerId)
      this.courses = results.courses
    }
  },
  mounted: async function () {
    const _this = this
    this.refreshEventHandler = async function () {
      await _this.fetchConsumer()
      await _this.fetchCourses()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    await _this.fetchConsumer()
    await _this.fetchCourses()
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.indent {
  margin-left: 1rem;
}
</style>
