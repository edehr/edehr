<template lang="pug">
  div
    zone-lms-page-name
    div(v-for="course in courses", :key="course.id")
      div(class="details-row")
        div(class="details-name course-title") Course
        div(class="details-value course-title") {{ course.name }}
      div(class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ course.id }}
      div(class="details-row")
        div(class="details-name") Type
        div(class="details-value") {{ course.type }}
      div(
        v-for="(activity, index) in course.activities",
        :key="activity._id",
        class="list-card list-element",
        :class="rowClass(course)"
        )
        course-activity-list-item(:id="activity._id", :activity='activity')
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import CourseActivityListItem from '@/outside/components/lms-course/CourseActivityListItem'
export default {
  extends: OutsideCommon,
  components: {
    CourseActivityListItem,
    ZoneLmsPageName,
    UiLink
  },
  computed: {
    courses () {
      return this.$store.getters['instructor/courseList']
    }
  },
  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.query.activityId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    async loadComponent () {
      await this.$store.dispatch('instructor/loadCourses')
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
