<template lang="pug">
  div
    zone-lms-page-name(:title="course.title")
      div(v-if="isInstructor", class="flow_across menu_space_across flow_across_right")
        zone-lms-button(
          @action="showEditDialog(course)",
          :title="toolTip",
          :icon='appIcons.configure',
          :text='buttonText'
        )
    div(class="course-description") {{ course.description }}
    div(v-if='isInstructor') {{ text.ACTIVITY_INSTRUCTOR_SELECT_NAV }}
      span &nbsp; This course has {{countActivities}} activities.
    div(v-else) {{ text.ACTIVITY_STUDENT_SELECT_NAV }}
    div(class="e-table")
      div(class="thead")
        div(class="thcell") Activity Name
        div(class="thcell") Activity Description
        div(class="thcell") Last update
        div(class="thcell") Created date
        div(v-if="isStudent", class="thcell") Status
        div(v-if="isStudent", class="thcell e-actions") &nbsp;
      div(class="tbody")
        div(class="row",
          v-for="(activityItem, index) in linkedCourseActivities",
          :key="activityItem._id",
          :class="rowClass(activityItem)")
          div(class='cell e-name')
            router-link(
              :to="activityRouting(activityItem)",
              class='router-item')
              fas-icon(class="fa", :icon="appIcons.course")
              span {{ activityItem.title }}
          div(class='cell e-description')
            span {{truncate(activityItem.description, 240)}}
          div(class='cell e-date')
            span {{ activityItem.lastUpdate | formatDateTime }}
          div(class='cell e-date')
            span {{ activityItem.createDate | formatDateTime }}
          div(v-if="isStudent", class='cell e-status')
            div {{ activityItem.submitted ? 'Submitted' : 'Open to edit' }}
          div(v-if="isStudent", class="cell e-actions")
            ui-button(@buttonClicked="goToEhr(activityItem)") {{ appTypeGoToText(activityItem) }}
    course-dialog(ref="theDialog", @updateCourseProperties="updateCourseProperties")
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import InstructorCourseListItem from '@/outside/components/lms-course/InstructorCourseListItem.vue'
import StudentCourseListItem from '@/outside/components/lms-course/StudentCourseListItem.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import CourseDialog from '@/outside/components/lms-course/CourseDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'
export default {
  extends: OutsideCommon,
  components: {
    UiButton,
    CourseDialog,
    ZoneLmsButton,
    InstructorCourseListItem,
    StudentCourseListItem,
    ZoneLmsPageName,
    UiLink
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.COURSE_PAGE,
    }
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    buttonText () { return this.canDo ? Text.COURSE_DIALOG.BUTTON_TEXT.EDIT: Text.COURSE_DIALOG.BUTTON_TEXT.VIEW},
    toolTip () { return this.canDo ? Text.COURSE_DIALOG.TITLES.EDIT: Text.COURSE_DIALOG.TITLES.VIEW },
    course () {
      return this.$store.getters['courseStore/course']
    },
    courseActivities () {
      return this.$store.getters['courseStore/courseActivities'] || []
    },
    linkedCourseActivities () {
      return this.courseActivities.filter(c => c.hasLinkedLearningObject)
    },
    countActivities () { return this.courseActivities.length },
    isInstructor () { return StoreHelper.isInstructor() },
    isStudent () { return StoreHelper.isStudent() }
  },
  methods: {
    appTypeGoToText (activityItem) {
      return 'Go to ' + (activityItem.appType === APP_TYPE_LIS ? 'LIS' :
        activityItem.appType === APP_TYPE_EHR ? 'EHR' : 'EHR')
    },
    activityRouting (activityItem) {
      const name = this.isInstructor ? 'lms-instructor-activity' : 'lms-student-activity'
      return { name: name, query: {visitId: activityItem.visitId} }
    },
    goToEhr (activityItem) {
      this.$router.push({
        name: 'ehr',
        query: {
          appType: activityItem.appType,
          visitId: activityItem.visitId
        }
      })
    },
    rowClass: function (item) {
      const activityId = this.$store.getters['activityStore/activityId']
      let selected = item.id === activityId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    async loadCurrentActivity () {
      const visitId = this.$store.getters['visit/visitId']
      if(visitId) {
        const theActivity = await this.$store.dispatch('activityStore/loadActivityRecord')
        console.log('Course load current activity assignment', theActivity)
        // await this.$store.dispatch('assignmentStore/load', theActivity.learningObjectId)
      }
    },
    async loadComponent () {
      try {
        const fromRoute = this.$route.query.courseId
        const fromStore = this.$store.getters['courseStore/courseId']
        console.log('Load course page', fromRoute, fromStore)
        const courseId = fromRoute || fromStore
        if (courseId) {
          await this.$store.dispatch('courseStore/setCourseId', courseId)
          await this.$store.dispatch('courseStore/loadCurrentCourse')
          if(fromRoute !== fromStore) {
            console.log('Changing course ', fromRoute, fromStore, '. Clear current activity')
            await this.$store.dispatch('activityStore/clearCurrentActivity')
          }
        } else {
          console.error('Course page load did not receive course id. This is a coding error')
        }
      } catch(error){
        console.error('Course loadComponent failed', error)
      }
    },
    showEditDialog: function (course) {
      this.$refs.theDialog.showDialog(course, this.canDo)
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    async updateCourseProperties () {
      await this.$store.dispatch('courseStore/loadCurrentCourse')
    }
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
