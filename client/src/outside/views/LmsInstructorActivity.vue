<template lang="pug">
  div
    zone-lms-page-banner(:title='activity.title')
      // Note that all instructors can invoke the editor and change title or description.
      div(class="flow_across menu_space_across flow_across_right")
        zone-lms-button(
          title="Edit activity title and description",
          @action="showEditDialog",
          :icon='appIcons.configure',
        )
        zone-lms-button(
          title="View your current activity as a student experiences it.",
          @action="switchToStudent",
          :icon='appIcons.student',
          class='flow_across_last_item'
        )
    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") {{ text.COURSE_LABEL}}
        div(class="details-value")
          ui-link(:name="'course'", :query="{courseId: course._id}")
            fas-icon(class='fa', :icon='appIcons.course')
            span &nbsp; {{ courseTitle }}
      div(class="details-row")
        div(class="details-name") {{text.CLASS_LIST}}
        div(class="details-value")
          ui-link(:name="'classList'", :query="{visitId: visitId}")
            fas-icon(class='fa', :icon='appIcons.classList')
            span &nbsp; {{text.CLASS_LIST_BTN}}
          span &nbsp; {{text.STUDENTS_VAL(classList.length, classSubmittedList.length)}}
      div feedbackViewable  {{ feedbackViewable }}
        app-type-toggle-button(
          :modelValue='feedbackViewable',
          @change='changeFeedbackViewable',
          labelOn='Viewable'
          labelOff='Locked'
        )

      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          ui-link(:name="'learning-object'", :query="{learningObjectId: activity.learningObjectId}")
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ activity.learningObjectName }}
      div(class="details-row")
        div(class="details-name") Application type
        div(class="details-value") {{ activity.appType }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="activity.description")
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value").
          Created {{ activity.createDate | formatDateTime }}.
          Last updated {{ activity.lastUpdate | formatDateTime }}
    activity-dialog(ref="theDialog")
</template>

<script>
import { Text } from '@/helpers/ehr-text'
import { formatTimeStr} from '@/helpers/ehr-utils'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions'
import UiLink from '@/app/ui/UiLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName.vue'
import ActivityDialog from '@/outside/components/lms-activity/ActivityDialog.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import router, { UNLINKED_ACTIVITY_ROUTE_NAME } from '@/router'
import AppTypeToggleButton from '@/outside/components/seed-management/AppTypeToggleButton.vue'
export default {
  extends: OutsideCommon,
  components: {
    AppTypeToggleButton,
    ZoneLmsPageBanner,
    ZoneLmsButton,
    ActivityDialog,
    ZoneLmsPageName,
    ActivityActions,
    UiLink
  },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      textRoutes: Text.ROUTE_NAMES,
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord']
    },
    classList () {
      return this.$store.getters['instructor/classList']
    },
    classSubmittedList () {
      return this.classList.filter(sv => sv.activityData.submitted)
    },
    createDate () {
      return formatTimeStr(this.activity.createDate)
    },
    course () {
      return this.$store.getters['courseStore/course']
    },
    courseTitle () {
      return this.course.title
    },
    feedbackViewable () {
      return this.$store.getters['activityStore/feedbackViewable']
    },
    lastUpdate () {
      return formatTimeStr(this.activity.lastDate)
    },
    visitId () {
      return this.$store.getters['visit/visitId']
    }
  },
  methods: {
    switchToStudent () {
      const appType = this.activity.appType
      StoreHelper.visitAsStudent(this.$router, appType)
    },
    changeFeedbackViewable () {
      const payload = {
        activity: this.activity.id,
        flag: !this.feedbackViewable
      }
      this.$store.dispatch('activityStore/setFeedbackViewable', payload)
    },
    /*
    LmsActivity is THE landing place for all instructor users. The LTI process brings all
    instructors here. In the url will be the expected activityId. Also the user will have beeb
    authenticated so you can get the user id etc from the auth token.

    LmsActivity is also the page for instructors who wish to work with another activity that
    they will have selected from the Courses page.  In this case, as well as above, the
    request URL will have the activityId.

    Otherwise, the instructor user may arrive here via a page refresh, back button, or the
    LMS Activity option on the instructor tools menu. In each of these situations the
    request url does not have the visitId.
    */
    async loadComponent () {
      const vFromRoute = this.$route.query.visitId
      const demo_lobjId = this.$route.query.demo_lobjId
      const vFomStore = this.$store.getters['visit/visitId']
      const visitId = vFromRoute ? vFromRoute : vFomStore
      await StoreHelper.setVisitId(visitId)
      let activityRecord = await this.$store.dispatch('activityStore/loadActivityRecord')
      if(demo_lobjId) {
        activityRecord = await StoreHelper.autoLinkDemoLobj(activityRecord, demo_lobjId)
      }
      if (!activityRecord.learningObjectId) {
        await router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: activityRecord.id } })
        return
      }

      await this.$store.dispatch('courseStore/setCourseId', activityRecord.courseId)
      await this.$store.dispatch('courseStore/loadCurrentCourse')
      await this.$store.dispatch('instructor/loadClassList')
    },
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.activity)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
