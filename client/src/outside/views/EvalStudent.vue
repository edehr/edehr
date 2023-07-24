<template lang="pug">
  div
    // Evaluate a student page
    div(class="details-container card selected")
      student-eval-control
      seed-structural(:ehrData='student.activityData.assignmentData')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: { StudentEvalControl, SeedStructural, },
  computed: {
    student () {
      return this.$store.getters['instructor/currentEvaluationStudent']
    },
  },
  methods: {
    async loadComponent () {
      const fromRoute = this.$route.query.evaluateStudentVisitId
      const fromStore = this.$store.getters['instructor/currentEvaluationStudentId']
      const visitId = fromRoute ? fromRoute : fromStore
      await StoreHelper.loadClassList()
      await StoreHelper.changeStudentForInstructor(visitId)
    },
  },
}
</script>
