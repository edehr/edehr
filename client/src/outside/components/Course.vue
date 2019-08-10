<template lang="pug">
  div
    div(class="course-header")
      h2(class="course-header-item") {{ course.label }} - {{ course.name }} (Id: {{ course.id }})
    activity-list(:activities="course.activities")
</template>

<script>
import ActivityList from './ActivityList'

export default {
  name: 'Course',
  components: {
    ActivityList
  },
  props: {
    course: {type: Object}
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

  .course-header {
    margin-bottom: 10px;
  }
  .course-title {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .activities {
    margin-bottom: 2rem; /* space between activities / class lists */
    background-color: $grey03;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
