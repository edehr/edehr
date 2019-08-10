<template lang="pug">
  div
    div(class="courses", v-for="course in courses")
      course(:course="course")
</template>

<script>
import Course from './Course'

export default {
  name: 'CourseList',
  components: {
    Course
  },
  computed: {
    courses () {
      return this.$store.state.instructor.sCourses
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.courses {
  margin-left: 0;
}
</style>
