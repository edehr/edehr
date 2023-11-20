<template lang="pug">
  div
    zone-lms-page-banner
    zone-lms-instructions-header
      p {{text.COURSES_PAGE_INTRO}}
      p(v-if='isInstructor')
        span Click on the gears button &nbsp;
        fas-icon( class="fa", :icon="appIcons.configure")
        span &nbsp; to view the course configuration. Enable 'Course designer mode' to edit the configuration.

    div(class="e-table details-container")
      div(class="thead")
        div(class="thcell") Name
        div(class="thcell") Description
        div(v-if="isInstructor", class="thcell") &nbsp;
      div(class="tbody")
        div(class="row",
          v-for="course in courseList",
          :key="course.id",
          :class="rowClass(course)")
          div(class='cell e-name')
            router-link(
              :to="{ name: 'course', query: { courseId: course._id }}",
              :title='navText.GOTO_COURSE(course.title)',
              class='router-item')
              fas-icon(class="fa", :icon="appIcons.course")
              span {{truncate(course.title, 40)}}
          div(class='cell e-description')
            span {{truncate(course.description, 240)}}
          div(v-if="isInstructor", class='cell e-actions', :title='toolTip')
            zone-lms-button(@action="showEditDialog(course)",
              :title="toolTip",
              :icon='appIcons.configure',
              :text='buttonText'
            )
    course-dialog(ref="theDialog", @updateCourseProperties="updateCourseProperties")
</template>

<script>
import CourseDialog from '@/outside/components/lms-course/CourseDialog.vue'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import StoreHelper from '@/helpers/store-helper'
import UiLink from '@/app/ui/UiLink.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
export default {
  extends: OutsideCommon,
  components: {
    ZoneLmsInstructionsHeader,
    ZoneLmsPageBanner,
    CourseDialog,
    ZoneLmsButton,
    UiLink,
    ZoneLmsPageName
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.COURSE_PAGE,
      navText: Text.INSTRUCTOR_TOOLS,
    }
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    buttonText () { return this.canDo ? Text.COURSE_DIALOG.BUTTON_TEXT.EDIT: Text.COURSE_DIALOG.BUTTON_TEXT.VIEW},
    toolTip () { return this.canDo ? Text.COURSE_DIALOG.TITLES.EDIT: Text.COURSE_DIALOG.TITLES.VIEW },

    currentCourseId () { return this.$store.getters['courseStore/courseId']},
    course () { return this.$store.getters['courseStore/course']},
    courseList () {
      return this.$store.getters['courseStore/courseList']
    },
    isInstructor () { return StoreHelper.isInstructor() },
  },
  methods: {
    rowClass: function (item) {
      let selected = item._id === this.currentCourseId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    async loadComponent () {
      await this.$store.dispatch('courseStore/loadCourses')
    },
    showEditDialog: function (course) {
      this.$refs.theDialog.showDialog(course, this.canDo)
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    updateCourseProperties () {
      this.loadComponent()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.e-name {
  min-width: 14rem;
  width: 14rem;
}
.e-actions {
  min-width: 6rem;
  width: 6rem;
}

</style>
