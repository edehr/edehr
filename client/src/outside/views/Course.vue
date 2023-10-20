<template lang="pug">
  div
    zone-lms-page-banner(:title="course.title")
      div(class="flow_across menu_space_across flow_across_right")
        zone-lms-button(
          v-if="isInstructor",
          @action="showEditDialog(course)",
          :title="toolTip",
          :icon='appIcons.configure',
          :text='buttonText'
        )
    div(class="details-container card")
      div(class="course-description") {{ course.description }}
      div(class='flow_across menu_space_across')
        h3(v-if='isInstructor', class="instructions")
          span This course has {{countActivities}} activities.
          span &nbsp;  {{ text.ACTIVITY_INSTRUCTOR_SELECT_NAV }}
        div(v-else, class="instructions") {{ text.ACTIVITY_STUDENT_SELECT_NAV }}
        // SKILLS ASSESSMENT
        div(v-if="skillsIsActivityActive", class='flow_across menu_space_across')
          h3 Note that the skills assessment mode is active. &nbsp;
            ui-info(title="Skills assessment", :html="skillsText")
          div(v-if='isInstructor')
            ui-button(
              title='Stop the skills assessment',
              class='zone-lms-button stop-assessment',
              v-on:buttonClicked="skillsClear"
              )
              fas-icon(class="fa", icon="appIcons.stopCircle", :title="Stop")
              span &nbsp; END Skills Assessment
        // END SKILLS ASSESSMENT

    div(class="e-table")
      div(class="thead")
        div(class="thcell")
          div(class="flow_across")
            div Activity Name
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnName)",
              title="Sort by name")
              fas-icon(class="fa", :icon="sortColumnIcon(columnName)")
        div(class="thcell") Activity Instructions
        div(class="thcell") Feedback Viewable
        div(class="thcell")
          div(class="flow_across")
            div Last update
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnUpdated)",
              title="Sort by updated date")
              fas-icon(class="fa", :icon="sortColumnIcon(columnUpdated)")
        div(class="thcell")
          div(class="flow_across")
            div Created date
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnCreated)",
              title="Sort by created date")
              fas-icon(class="fa", :icon="sortColumnIcon(columnCreated)")
        div(v-if="isStudent", class="thcell") Status
        div(class="thcell e-actions") &nbsp;
      div(class="tbody")
        div(class="row",
          v-for="(activityItem, index) in linkedCourseActivities",
          :key="activityItem.id",
          :class="rowClass(activityItem)")
          div(class='cell e-name')
            router-link(
              v-if="canAccessActivity(activityItem)",
              :to="activityRouting(activityItem)",
              class='router-item')
              fas-icon(class="fa", :icon="appIcons.course")
              span {{ activityItem.title }}
            div(v-else) {{ activityItem.title }}
          div(class='cell e-description')
            span {{truncate(activityItem.description, 100)}}
          div(class='cell')
            span {{ activityItem.feedbackViewable ? 'Yes' : 'No'}}
          div(class='cell e-date')
            span {{ activityItem.lastUpdate | formatDateTime }}
          div(class='cell e-date')
            span {{ activityItem.createDate | formatDateTime }}
          div(v-if="isStudent", class='cell e-status')
            div {{ activityItem.submitted ? 'Submitted' : 'Open to edit' }}
          div(class="cell e-actions")
            // SKILLS ASSESSMENT
            zone-lms-button(
              v-if="isInstructor",
              :icon='appIcons.stopwatch',
              title='Skills assessment',
              @action="skillsToggle(activityItem)"
              )
            // END SKILLS ASSESSMENT
            ui-button(
              v-if="isStudent && canAccessActivity(activityItem)",
              @buttonClicked="goToEhr(activityItem)"
              ) {{ appTypeGoToText(activityItem) }}
    course-dialog(ref="theCourseDialog", @updateCourseProperties="updateCourseProperties")
    ui-confirm(ref="confirmSkillsDialog", v-on:confirm="proceedSkills", saveLabel='Continue')
    ui-agree(ref="confirmStudentSkillsIsOnDialog")
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import InstructorCourseListItem from '@/outside/components/lms-course/InstructorCourseListItem.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS, CREATOR_ACTION } from '@/helpers/store-helper'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import CourseDialog from '@/outside/components/lms-course/CourseDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import UiAgree from '@/app/ui/UiAgree.vue'

const ASC = 'asc'
const DESC = 'desc'

export default {
  extends: OutsideCommon,
  components: {
    UiAgree,
    UiConfirm,
    UiInfo,
    ZoneLmsPageBanner,
    UiTableHeaderButton,
    UiButton,
    CourseDialog,
    ZoneLmsButton,
    InstructorCourseListItem,
    ZoneLmsPageName,
    UiLink
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.COURSE_PAGE,
      columnName: 'title',
      columnCreated: 'createDate',
      columnUpdated: 'lastUpdate',
      sortKey: 'title',
      sortDir: ASC,
    }
  },
  computed: {
    skillsText () { return this.isStudent ?
      'For this course, you can only see activities selected by your instructor.' :
      '<p>Students are limited to the activities that you have selected.</p>' +
      '<p>You can select more than one activity. Reselect the activity to remove an activity from the list.</p>' +
      '<p>Use the END button to reset all activities to normal.</p>' },
    canDo () { return StoreHelper.isDevelopingContent() },
    buttonText () { return this.canDo ? Text.COURSE_DIALOG.BUTTON_TEXT.EDIT: Text.COURSE_DIALOG.BUTTON_TEXT.VIEW},
    toolTip () { return this.canDo ? Text.COURSE_DIALOG.TITLES.EDIT: Text.COURSE_DIALOG.TITLES.VIEW },
    course () { return this.$store.getters['courseStore/course'] },
    skillsIsActivityActive () { return this.$store.getters['courseStore/skillsAssessmentIsActive'] },
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
    canAccessActivity (activityItem) {
      if (this.isInstructor) {
        return true
      }
      if (this.isStudent) {
        let canAccess = true
        if (this.course.skillsAssessmentIsActive) {
          canAccess = this.skillsIsActiveFor(activityItem)
        }
        return canAccess
      }
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
      let selected = item._id === activityId
      let classString = selected ? 'selected ' : ''
      let isSkills = this.skillsIsActiveFor(item)
      classString += isSkills ? 'skills-active' : ''
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
      const query = this.$route.query
      const redirect = query.redirect
      const fromRoute = query.courseId
      const fromStore = this.$store.getters['courseStore/courseId']
      let courseId = fromRoute || fromStore
      if (!courseId) {
        console.error('Course page load did not receive course id. This is a coding error')
        return
      }
      const fromRouteSort = query.sortKey || this.columnName
      const fromRouteDirection = query.sortDir || ASC
      let queryPayload = {
        courseId: courseId,
        sortKey: fromRouteSort,
        sortDir: fromRouteDirection,
      }
      await this.$store.dispatch('courseStore/loadCurrentCourse', queryPayload)
      if(fromRoute !== fromStore) {
        console.log('Changing course ', fromRoute, fromStore, '. Clear current activity')
        await this.$store.dispatch('activityStore/clearCurrentActivity')
      }
      if(redirect) {
        this.$refs.confirmStudentSkillsIsOnDialog.showDialog('Skills Assessment',
          'You have been bumped to your course listing because your instructor has blocked ' +
          'the activity you tried to reach until skills assessment is completed.')
      }
    },
    route () {
      let query = {}
      query.courseId = this.course._id
      query.sortKey = this.sortKey
      query.sortDir = this.sortDir
      this.$router.push({ query: query })
      const qs = JSON.stringify(query).replace(/"/g,'\'')
      StoreHelper.postActionEvent(CREATOR_ACTION,'courseList-'+qs)
    },
    skillsIsActiveFor (activityItem) {
      return this.$store.getters['courseStore/skillsIsActivityActive'](activityItem.id)
    },
    skillsToggle (activityItem) {
      if (!this.skillsIsActivityActive) {
        this.$refs.confirmSkillsDialog.showDialog('Enabled Skills Assessment?',
          'When you enable skills assessment your students will be restricted to working this this activity and any others that you select, until you stop the skills assessment', activityItem
        )
      } else {
        this.proceedSkills(activityItem)
      }
    },
    async proceedSkills (activityItem) {
      await this.$store.dispatch('courseStore/skillsAssessmentToggle', activityItem.id)
      await this.loadComponent()
    },

    async skillsClear () {
      await this.$store.dispatch('courseStore/skillsAssessmentClear')
      await this.loadComponent()
    },
    showEditDialog: function (course) {
      this.$refs.theCourseDialog.showDialog(course, this.canDo)
    },
    sortColumnIcon (columnName) {
      let icon = APP_ICONS.sortNone
      if (this.sortKey === columnName) {
        icon = this.sortDir === ASC ? APP_ICONS.sortAsc : APP_ICONS.sortDesc
      }
      return icon
    },
    sortColumnToggle (columnName) {
      if (this.sortKey === columnName) {
        this.sortDir = this.sortDir === ASC ? DESC : ASC
      } else {
        // reset starting position when changing sort column
        this.offset = 0
        this.sortKey = columnName
        this.sortDir = ASC
      }
      this.route()
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    /**
     *
     * @param payload to contain title and description
     * @returns {Promise<void>}
     */
    async updateCourseProperties (payload) {
      await this.$store.dispatch('courseStore/updateCourse',payload)
      await this.loadComponent()
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
.course-description {
  margin-bottom: 1rem;
}

.skills-active {
  background-color: $green !important;
}
.stop-assessment {
  background-color: $red;
  color: $white;
}
</style>
