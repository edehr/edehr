<template lang="pug">
  div
    zone-lms-page-banner(:title="activityTitle")
      span {{ submitted ? pageText.submitted : pageText.openToEdit }} &nbsp;
      ui-button(@buttonClicked="goToEhr") {{ appTypeGoToText }}
    zone-lms-instructions-header
      p {{ pageText.instructions }}

    div(class="details-container")
      div(class="details-row")
        div(class="details-name") {{ pageText.course}}
        div(class="details-value") {{ courseTitle }}
      div(class="details-row")
        div(class="details-name") {{pageText.instructionsLabel}}
        div(class="details-value")
          div(v-text-to-html="studentInstructions")
      zone-lms-instructions-element {{ pageText.instructionsExplained }}
      div(class="details-row")
        div(class="details-name") {{pageText.feedbackLabel}}
        div(class="details-value")
          div(v-if='feedbackViewable')
            div(v-if="hasEvaluationData") {{ evaluationData }}
            div(v-else) {{pageText.noFeedbackYet }}
          div(v-else) {{pageText.feedbackViewingBlocked}}
      zone-lms-instructions-element.
        {{ pageText.feedbackExplained }}
      div(class="details-row")
        div(class="details-name") {{pageText.scratchPad}}
        div(class="details-value") {{ scratchData }}
      zone-lms-instructions-element.
        {{ pageText.scratchPadExplained}}
      div(class="details-row details-row-dates")
        div(class="details-name") {{pageText.datesLabel}}
        //div activityRecord.createDate {{ activityRecord.createDate }}
        div(class="details-value").
          {{ pageText.dateLabelCreated}} {{createDate}} &nbsp;
          {{ pageText.dateLabelUpdated}} {{lastUpdate}}

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
import { t18EhrText } from '@/helpers/ehr-t18'
import { formatTimeStr } from '@/helpers/ehr-utils'
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
      // text: Text.ACTIVITY_PAGE,
      textRoutes: Text.ROUTE_NAMES,
    }
  },
  computed: {
    ehrText () { return t18EhrText()},
    createDate () { return formatTimeStr(this.activityRecord.createDate) },
    lastUpdate () { return formatTimeStr(this.activityRecord.lastUpdate) },
    pageText () { return this.ehrText.activityPage},
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
