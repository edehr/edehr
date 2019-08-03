<template lang="pug">
  div(class="as-instructor")
    h1 Dashboard
    div(class="courses", v-for="course in courses")
      div(class="course-header")
        h2(class="course-header-item") {{ course.label }} - {{ course.name }} (Id: {{ course.id }})
      div(class="activities", v-for="(activity, index) in course.activities")
        div(:ref="`activity-${activity._id}`")
          class-list(:activityId="activity._id", :index="index")
</template>

<script>
import ClassList from './ClassList'
import BreadCrumb from './BreadCrumb'
export default {
  name: 'AsInstructor',
  components: {
    ClassList, BreadCrumb
  },
  computed: {
    courses () {
      return this.$store.state.instructor.sCourses
    }
  },
  mounted: function () {
    /*
    TODO get scroll into view working
    The following is not working. Nor is the attempt to scroll in the class list view.
    I'm leaving this code here hoping that taking a look again later might help.
    let activityId = localStorage.getItem('activityId')
    if (activityId) {
      const _this = this
      let id = `activity-${activityId}`
      this.$nextTick(function() {
        // console.log('Look for element with ref', id)
        let elem = this.$refs[id]
        // console.log('scroll to ', elem)
        _this.$scrollTo(elem)
      })
    }
     */
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.as-instructor {
  .courses {
    margin-left: 0;
  }
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
}
</style>
