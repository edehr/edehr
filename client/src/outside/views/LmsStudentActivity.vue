<template lang="pug">
  div
    div(class="flow_across")
      zone-lms-page-name(:title="activityName")
        span {{ learningObjectName }}
      div(class="flow_across_last_item")
        div(class="flow_across menu_space_across")
          span &nbsp; {{ submitted ? 'Submitted' : 'Open to edit' }}
          ui-button(@buttonClicked="goToEhr") Go to EHR

    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{ text.COURSE_LABEL}}
        div(class="details-value") {{ courseTitle }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="learningObjectDescription")
      div(class="details-row")
        div(class="details-name") {{text.EVALUATION}}
        div(class="details-value") {{ evaluationData }}
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
export default {
  extends: OutsideCommon,
  components: {
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
      await this.$store.dispatch('courseStore/setCourseId', activityRecord.courseId)
      await this.$store.dispatch('courseStore/loadCurrentCourse')
      // console.log('loaded ', activityRecord)
    },
    goToEhr () {
      this.$router.push({
        name: 'ehr',
        query: {
          appType: this.activityRecord.appType,
          visitId: this.visitId
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.lms-activity-page {
  margin-left: 5rem;
}
.activity-list {
  margin: 2rem 0;
}
@media screen and (max-width: $main-width-threshold2){
  .lms-activity-page {
    margin-left: 0;
  }
}
</style>
