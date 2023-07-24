<template lang="pug">
  div
    div(class='ehr-context-student')
      div {{givenName}}.  You are working on the "{{ assignmentName }}" activity.
      div(v-show="hasEvaluationData") Instructor's comments: {{ activityData.evaluationData }}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { },
  data () {
    return {
    }
  },
  computed: {
    activityData () { return StoreHelper.getActivityData() },
    activityRecord () { return StoreHelper.getActivityRecord() },
    assignmentName () { return this.activityRecord.title },
    evaluationData () { return this.activityData.evaluationData },
    givenName () { return StoreHelper.givenName()},
    hasEvaluationData () { return this.evaluationData && this.evaluationData.length > 0 }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
