<template lang="pug">
  div
    zone-lms-page-name
    div(v-for="course in courses", :key="course.id")
      div(class="details-row")
        div(class="details-name course-title") Course
        div(class="details-value course-title") {{ course.name }}
      //div(class="details-row")
      //  div(class="details-name") Id
      //  div(class="details-value") {{ course.id }}
      //div(class="details-row")
      //  div(class="details-name") Type
      //  div(class="details-value") {{ course.type }}
      div(
        v-for="(data, index) in course.courseActivities",
        :key="data.visit._id",
        class="list-card list-element",
        :class="rowClass(data)"
        )
        course-activity-student-list-item(:data='data')
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import CourseActivityStudentListItem from '@/outside/components/lms-course/CourseActivityStudentListItem'
export default {
  extends: OutsideCommon,
  components: {
    CourseActivityStudentListItem,
    ZoneLmsPageName,
    UiLink
  },
  computed: {
    courses () {
      return this.$store.getters['student/courseList']
    }
  },
  methods: {
    rowClass: function (item) {
      // let selected = item._id === this.$route.query.activityId
      // let classString = selected ? 'selected ' : ''
      // return `${classString}`
      return ''
    },
    async loadComponent () {
      await this.$store.dispatch('student/loadCourses')
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.course-title {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
