<template lang="pug">
  div
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
import store from '@/store'
import MPatientHelper from '@/helpers/mPatientHelper'
import StoreHelper from '@/helpers/store-helper'

export default {
  extends: OutsideCommon,
  components: { EhrMultiPatientBar, StudentEvalControl, SeedStructural, },
  computed: {
    student () {
      return this.$store.getters['instructor/currentEvaluationStudent']
    },
    patients () { return this.student.activityData.assignmentData.patients || []},
    patientData () {
      const patient = this.patients.find( p => p._id === this.pId || {})
      return patient.ehrData
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
