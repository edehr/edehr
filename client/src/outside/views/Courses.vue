<template lang="pug">
  div
    div(v-for="course in courses")
      h2 Course: {{ course.label }} (Id: {{ course.id }})
      div(v-for="(activity, index) in course.activities")
        ui-link(:name="'lms-activity'", :query="{activityId: activity._id}")
          span {{ activity.resource_link_title }}
          span / {{ activity.assignment.name }}
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: {
    UiLink
  },
  computed: {
    courses () {
      return this.$store.getters['instructor/courseList']
    }
  },
  methods: {
    async loadComponent () {
      await this.$store.dispatch('instructor/loadCourses')
    },
  }
}
</script>

<style lang="scss" scoped></style>
