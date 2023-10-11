<template lang="pug">
  div(class='ehr-context-student flow_across')
    div
      div {{givenName}}.  You are working on:
        span(class='content') {{ truncate(assignmentName, 50) }}
        ui-info(title="Instructions", :html="instructions")
      div(v-if='feedbackViewable')
        div(v-if="hasEvaluationData") Instructor's comments:
          span(class="content") {{ evaluationData }}
        div(v-else) No instructor has provided feedback for this work.
      div(v-else) Feedback is blocked
    div(class="flow_across_last_item")
      ehr-student-submit
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit.vue'
import UiInfo from '@/app/ui/UiInfo.vue'

export default {
  components: { UiInfo, EhrStudentSubmit },
  data () {
    return {
    }
  },
  computed: {
    activityRecord () { return this.$store.getters['activityStore/activityRecord'] },
    assignmentName () { return this.activityRecord.title },
    instructions () { return this.activityRecord.description },
    evaluationData () { return this.$store.getters['activityDataStore/evaluationData'] },
    givenName () { return StoreHelper.givenName()},
    feedbackViewable () { return this.activityRecord.feedbackViewable },
    hasEvaluationData () { return this.evaluationData && this.evaluationData.length > 0 }
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.content {
  font-weight: bold;
  padding: 0 5px;
}
</style>
