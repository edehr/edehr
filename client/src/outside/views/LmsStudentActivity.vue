<template lang="pug">
  div
    zone-lms-page-banner(:title="activityTitle")
      span {{ submitted ? 'Submitted' : 'Open to edit' }} &nbsp;
      ui-button(@buttonClicked="goToEhr") {{ appTypeGoToText }}
    zone-lms-instructions-header
      p Your instructors have created a link in your learning management system (LMS) that is configured to connect to this EdEHR Activity. You have already seen the charting area and perhaps you have submitted your work already. You can return to the charting application with the button above.

    div(class="details-container")
      div(class="details-row")
        div(class="details-name") {{ text.COURSE_LABEL}}
        div(class="details-value") {{ courseTitle }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="studentInstructions")
      zone-lms-instructions-element.
        The above are the instructions your instructor provided to you regarding this activity. Contact your instructor if you have any questions about the instructions.
      div(class="details-row")
        div(class="details-name") {{text.EVALUATION}}
        div(class="details-value")
          div(v-if='feedbackViewable')
            div(v-if="hasEvaluationData") {{ evaluationData }}
            div(v-else) (No instructor has yet provided feedback.)
          div(v-else) Feedback viewing is blocked
      zone-lms-instructions-element.
        After you submit your work, your instructor may review your work and offer feedback (which may include grading).
      div(class="details-row")
        div(class="details-name") {{text.SCRATCH}}
        div(class="details-value") {{ scratchData }}
      zone-lms-instructions-element.
        While you work in the charting area you can keep private notes in the "scratch pad". Only you can view these.
      div(class="details-row details-row-dates")
        div(class="details-name") {{text.DATES}}
        //div activityRecord.createDate {{ activityRecord.createDate }}
        div(class="details-value") {{text.DATES_VAL(activityRecord.createDate, activityRecord.lastUpdate) }}

</template>

<script>
import { Text } from '@/helpers/ehr-text'

import UiLink from '@/app/ui/UiLink'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import FeatureHelper, { FF_UNLEASH_ACTIVITY } from '@/helpers/feature-helper'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
export default {
  extends: OutsideCommon,
  components: {
    ZoneLmsInstructionsElement,
    ZoneLmsInstructionsHeader,
    ZoneLmsPageBanner,
    UiButton,
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
    appTypeGoToText () {
      return 'Go to ' + (this.activityRecord.appType === APP_TYPE_LIS ? 'LIS' :
        this.activityRecord.appType === APP_TYPE_EHR ? 'EHR' : 'EHR')
    },

    // activity () {
    //   return this.$store.getters['activityStore/activity']
    // },
    activityRecord () {
      return this.$store.getters['activityStore/activityRecord']
    },
    activityTitle () { return this.isUnleashedActivityEnabled ? this.activityRecord.learningObjectName : this.activityRecord.title},
    activityId () {
      return this.activityRecord.id
      // return this.$store.getters['activityStore/activityId']
    },
    studentInstructions () { return this.isUnleashedActivityEnabled ? this.activityRecord.learningObjectDescription : this.activityRecord.description },
    isUnleashedActivityEnabled () {
      const cid = this.$store.getters['consumerStore/consumerId']
      return FeatureHelper.isFeatureFlagEnabled(cid, FF_UNLEASH_ACTIVITY)
    },
    feedbackViewable () {
      return this.$store.getters['activityStore/feedbackViewable']
    },
    // assignment () {
    //   return this.$store.getters['assignmentStore/assignment'] || {}
    // },
    course () {
      return this.$store.getters['courseStore/course']
    },
    courseTitle () {
      return this.course.title
    },
    evaluationData () { return this.activityRecord.evaluationData},
    hasEvaluationData () { return this.evaluationData && this.evaluationData.length > 0 },
    learningObjectId () { return this.activityRecord.learningObjectId },
    learningObjectName () { return this.activityRecord.learningObjectName },
    learningObjectDescription () { return this.activityRecord.learningObjectDescription },
    scratchData () { return this.activityRecord.scratchData },
    submitted () { return this.activityRecord.submitted },
    visitId () { return this.activityRecord.visitId },
  },
  methods: {
    async loadComponent () {
      const vFromRoute = this.$route.query.visitId
      const vFomStore = this.$store.getters['visit/visitId']
      const visitId = vFromRoute ? vFromRoute : vFomStore
      // console.log('load component for LMS student activity', vFromRoute, vFomStore)
      await StoreHelper.setVisitId(visitId) //note this stores the visit id to survive page changes and browser refresh
      const activityRecord = await this.$store.dispatch('activityStore/loadActivityRecord')
      await this.$store.dispatch('courseStore/loadCurrentCourse', { courseId: activityRecord.courseId })
      // console.log('loaded ', activityRecord)
    },
    goToEhr () {
      this.$router.push({ name: 'ehr', query: { visitId: this.visitId } })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
