<template lang="pug">
  div
    zone-lms-page-banner(:title='activityTitle')
      // Note that all instructors can invoke the editor and change title or description.
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
    zone-lms-instructions-header
      p You probably just clicked a link in your learning management system (LMS) and it has brought you here to this EdEHR Activity.
      p(v-if='isUnleashedActivityEnabled')
        span.
          If you were the first person to use that LMS link then you have also just selected a "Learning Object" for this activity. Otherwise you are returning or another instructor has made the connection. A "Learning Object" defines the learning activity and it usually provides a base case study with charting data.  When students click the same link, in the LMS, they will be taken directly to the charting application and they will see the case study.
            As an instructor you can change this content by using the gear icon &nbsp;
        fas-icon( class="fa", :icon="appIcons.configure")
        span &nbsp; button.
      p           But be careful if students have already started work on the activity because you are changing the content they are working with.
      p
        span.
          TIP.  As an instructor you may wish to know what the student will experience. That's easy. Just use the button with the student icon &nbsp;
        fas-icon( class="fa", :icon="appIcons.student")
        span.
          &nbsp; But before you go remember that the &nbsp;
        fas-icon( class="fa", :icon="appIcons.menu")
        span.
          &nbsp; menu will have a way for you to return to your normal role, as instructor.
        // end of user instructions

    div(class="details-container")
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div( v-text-to-html="descriptionContent")
      zone-lms-instructions-element.
        Students see the instructions above. To change the instructions click on the {{text.LOBJ}} link below and edit the learning object properties. But remember you are also affecting all activities that share this content.

      div(v-if="isSimControlEnabled", class="details-row")
        div(class="details-name") Simulation controls
        div(class="details-value")
          ui-link(:name="'simController'", :query="{visitId: visitId}")
            fas-icon(class='fa', :icon='appIcons.stopwatch')
            span &nbsp; Real time control of simulation data for students.

      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          ui-link(:name="'learning-object'", :query="{learningObjectId: activity.learningObjectId}")
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ activity.learningObjectName }}
      zone-lms-instructions-element  A "learning object" is also a lesson plan, a simulation plan, or the activity content. It defines what the student sees and does. Click this link to access the learning object details page.

      div(class="details-row")
        div(class="details-name") {{text.CLASS_LIST}}
        div(class="details-value")
          ui-link(:name="'classList'", :query="{visitId: visitId}")
            fas-icon(class='fa', :icon='appIcons.classList')
            span &nbsp; {{text.CLASS_LIST_BTN}}
          span &nbsp; {{text.STUDENTS_VAL(classList.length, classSubmittedList.length)}}
      zone-lms-instructions-element  The class list grows automatically as students use the activity link in your LMS. Only the students who click the LMS activity link will appear in the class list.  When a student clicks the activity link they are presented with the case study patient data, as defined by the Learning Object.

      div(class="details-row")
        div(class="details-name") {{ text.COURSE_LABEL}}
        div(class="details-value")
          ui-link(:name="'course'", :query="{courseId: course._id}")
            fas-icon(class='fa', :icon='appIcons.course')
            span &nbsp; {{ courseTitle }}

      div(class="details-row")
        div(class="details-name") LMS Id
        div(class="details-value")
          div {{ activity.idForLTI }}
      zone-lms-instructions-element.
        The LMS ID can be used in your LMS connections to pre-link new activities to the same learning object.
        This is helpful if you wish to clone the course in your LMS because these LMS IDs can be used to automatically link the Learning Object to the a new activity.

      div(class="details-row")
        div(class="details-name") Feedback viewable
        div(class="details-value")
          div Students  {{ feedbackViewable ? 'can' : 'can not' }} see the instructor feedback and grading.
          app-type-toggle-button(
            :modelValue='feedbackViewable',
            @change='changeFeedbackViewable',
            labelOn='Viewable'
            labelOff='Locked'
          )
      zone-lms-instructions-element.
        Use this toggle to change the viewing state, for the students. When enabled your students can view your feedback. They can see this feedback at the top just above the patient banner in the charting area.


      div(class="details-row")
        div(class="details-name") Application type
        div(class="details-value")
          app-type-details-page-element(:appType="activity.appType", :showEx='showEx')
      app-type-details-page-element-explain

      div(v-if="isUnleashedActivityEnabled", class="details-row")
        div(class="details-name") Activity name on LMS
        div(class="details-value") {{ lmsTitle }}

      div(v-if="isUnleashedActivityEnabled", class="details-row")
        div(class="details-name") Activity description LMS
        div(class="details-value") {{ lmsDescription }}
      zone-lms-instructions-element.
        Above are the activity title and description provided by your LMS. These may or may not be useful.

      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value").
          Created {{ activity.createDate | formatDateTime }}.
          Last updated {{ activity.lastUpdate | formatDateTime }}

    activity-dialog-v2(v-if='isUnleashedActivityEnabled', ref='theActivityDialog', @selected='changeLearningObjectForActivity')
    activity-dialog(v-else, ref="theDialog")
    ui-confirm(ref="confirmRelink", v-on:confirm="proceedToChange", html-body=true)

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
import FeatureHelper, { FF_SIM_CONTROL, FF_UNLEASH_ACTIVITY } from '@/helpers/feature-helper'
import ActivityDialogV2 from '@/outside/components/lms-activity/ActivityDialogV2.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import AppTypeDetailsPageElement from '@/outside/components/AppTypeDetailsPageElement.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import AppTypeDetailsPageElementExplain from '@/outside/components/AppTypeDetailsPageElementExplain.vue'
export default {
  extends: OutsideCommon,
  components: {
    AppTypeDetailsPageElementExplain,
    ZoneLmsInstructionsElement,
    ZoneLmsInstructionsHeader,
    AppTypeDetailsPageElement,
    UiInfo,
    UiConfirm,
    ActivityDialogV2,
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
      tips: {
        LMS_ID: 'asdsad'
      }
    }
  },
  computed: {
    isSimControlEnabled () {
      const cid = this.$store.getters['consumerStore/consumerId']
      return FeatureHelper.isFeatureFlagEnabled(cid, FF_SIM_CONTROL)
    },
    isUnleashedActivityEnabled () { return FeatureHelper.isFeatureFlagEnabled(this.consumerId, FF_UNLEASH_ACTIVITY) },
    activity () {
      return this.$store.getters['activityStore/activityRecord']
    },
    classList () {
      return this.$store.getters['instructor/classList']
    },
    consumerId () { return this.$store.getters['consumerStore/consumerId'] },
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
    lmsTitle () { return this.activity.resource_link_title },
    lmsDescription () { return this.activity.resource_link_description },
    activityTitle () { return this.isUnleashedActivityEnabled ? this.activity.learningObjectName : this.activity.title},
    descriptionContent () { return this.isUnleashedActivityEnabled ? this.activity.learningObjectDescription : this.activity.description },
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
    changeLearningObjectForActivity (selectedLObj) {
      if (this.classList.length > 0) {
        const title = 'Please confirm the change'
        const msg = 'Caution. This activity is used by a number of students. \n' +
          'Please confirm the change to use the content "' + selectedLObj.name + '."\n' +
          'Are you sure you want to change the content?'
        this.$refs.confirmRelink.showDialog(title, msg, selectedLObj)
      } else {
        this.proceedToChange(selectedLObj)
      }
    },
    async proceedToChange (selectedLObj) {
      const lObj = selectedLObj
      const activityId = this.activity.id
      const payload = { activity: activityId, assignment: lObj._id }
      await this.$store.dispatch('activityStore/linkAssignment', payload)
      // take the instructor to activity page for the activity they just made a link to.
      await this.$router.push({ name: 'lms-instructor-activity', query: { activityId: activityId, ts: (new Date()).getTime() } })
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
      await this.$store.dispatch('courseStore/loadCurrentCourse', { courseId: activityRecord.courseId })
      await this.$store.dispatch('instructor/loadClassList')
    },
    showEditDialog: function () {
      if (this.isUnleashedActivityEnabled) {
        this.$refs.theActivityDialog.showDialog(this.activity)
      } else {
        this.$refs.theDialog.showDialog(this.activity)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';


</style>
