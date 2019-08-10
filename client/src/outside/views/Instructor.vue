<template lang="pug">
  div
    h1 Dashboard
    course-list
</template>

<script>
import CourseList from '../components/CourseList'

export default {
  name: 'Instructor',
  components: {
    CourseList
  }
}
</script>

<style lang="scss" scoped></style>
