<template lang="pug">
  div
    zone-lms-page-banner(:title="activityName")
      div(class="flow_across menu_space_across flow_across_right")
        span &nbsp; {{ submitted ? 'Submitted' : 'Open to edit' }}
        ui-button(@buttonClicked="goToEhr") Go to EHR

    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") {{ text.COURSE_LABEL}}
        div(class="details-value") {{ courseTitle }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="studentInstructions")
      div(class="details-row")
        div(class="details-name") {{text.EVALUATION}}
        div(class="details-value")
          div(v-if='feedbackViewable')
            div(v-if="hasEvaluationData") {{ evaluationData }}
            div(v-else) No instructor has provided feedback for this work.
          div(v-else) Feedback viewing is blocked
      div(class="details-row")
        div(class="details-name") {{text.SCRATCH}}
        div(class="details-value") {{ scratchData }}
      div(class="details-row")
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
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
export default {
  extends: OutsideCommon,
  components: {
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
    // activity () {
    //   return this.$store.getters['activityStore/activity']
    // },
    activityRecord () {
      return this.$store.getters['activityStore/activityRecord']
    },
    activityName () {
      return this.activityRecord.title
    },
    activityId () {
      return this.activityRecord.id
      // return this.$store.getters['activityStore/activityId']
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
    studentInstructions () { return this.activityRecord.description },
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
      await this.$store.dispatch('courseStore/setCourseId', activityRecord.courseId)
      await this.$store.dispatch('courseStore/loadCurrentCourse')
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
