<template lang="pug">
  div
    zone-lms-page-banner(:title='activityTitle')
      div(class="flow_across menu_space_across flow_across_right")
        ui-link(:name="'lms-instructor-activity'")
          fas-icon(class="fa", :icon="appIcons.activity")
          span &nbsp; Return to {{ activityTitle }}
        ui-link(:name="'classList'", :query="{activityId: activityId}")
          fas-icon(class="fa", :icon="appIcons.classList")
          span &nbsp; Return to the class list

    // Evaluate a student page
    div(class="details-container card selected")
      student-eval-control
      div(:class="ehrOrLis")
        ehr-multi-patient-bar
        div(v-if="hasPatient")
          seed-structural(:ehrData='patientData')
        div(v-else)
          div Select a patient.

</template>

<script>
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl'
import OutsideCommon from '@/outside/views/OutsideCommon'
import EhrMultiPatientBar from '@/inside/components/EhrMultiPatientBar.vue'
import MPatientHelper from '@/helpers/mPatientHelper'
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import UiLink from '@/app/ui/UiLink.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'

export default {
  extends: OutsideCommon,
  components: { UiLink, ZoneLmsPageBanner, EhrMultiPatientBar, StudentEvalControl, SeedStructural, },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.ACTIVITY_PAGE,
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord']
    },
    activityId () {
      return this.activity.id
    },
    activityTitle () { return this.activity.learningObjectName },
    student () {
      return this.$store.getters['instructor/currentEvaluationStudent']
    },
    patients () { return this.student.activityData.assignmentData.patients || []},
    patientData () {
      const patient = this.patients.find( p => p._id === this.pId )
      return patient ? patient.ehrData : {}
    },
    pId () { return MPatientHelper.getCurrentPatientObjectId() },
    hasPatient () { return !! this.pId },
    patientList () { return MPatientHelper.getCurrentPatientList()},
    ehrOrLis () { return StoreHelper.isEHR_Showing() ? 'ehr-branding' : StoreHelper.isLIS_Showing() ? 'lis-branding' : ''},

  },
  methods: {
    async loadComponent () {
      const patientId = this.$route.query.patientId
      const fromRoute = this.$route.query.evaluateStudentVisitId
      const fromStore = this.$store.getters['instructor/currentEvaluationStudentId']
      const evaluateStudentVisitId = fromRoute ? fromRoute : fromStore
      await this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', evaluateStudentVisitId)
      await MPatientHelper.helpLoadInstructorPatient(patientId)
    },
  },
}
</script>
