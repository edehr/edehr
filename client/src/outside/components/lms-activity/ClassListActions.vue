<template lang="pug">
  div(class="flow_across flow_wrap", :class='css')
    div(v-if="!hideEvalRaw")
      ui-button(
        v-on:buttonClicked="goToEvaluation()",
        :disabled="!isSubmitted"
        :title="text.EVALUATE_TIP"
      )
        fas-icon(class='fa', :icon='appIcons.rawEhr')
        span(v-if="showLabels") &nbsp; {{text.EVALUATE_BL}}
    div(v-if="!hideEvalEhr")
      ui-button(
        v-on:buttonClicked="goToEhr()",
        :disabled="!isSubmitted",
        :title="text.EVAL_IN_EHR_TIP"
        )
        fas-icon(class='fa', :icon='appIcons.ehrPage')
        span(v-if="showLabels") &nbsp; {{text.EVAL_IN_EHR_BL}}
    div
      ui-button(
        v-on:buttonClicked="blockEditing()",
        :disabled="!isSubmitted",
        title="Send the assignment back to the student for further work"
        )
        fas-icon(class='fa', :icon='appIcons.retractSubmit')
        span(v-if="showLabels") &nbsp; Send back
    div
      ui-button(
        v-on:buttonClicked="forceSubmit()",
        :disabled="isSubmitted",
        title='Force the submission so instructor can evaluate and student is unable to work on the assignment'
        )
        fas-icon(class='fa', :icon='appIcons.forceSubmit')
        span(v-if="showLabels") &nbsp; Force submission

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import EvalHelper from '@/helpers/eval-helper'
import { Text } from '@/helpers/ehr-text'
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
export default {
  components: { UiButton, UiLink  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text
    }
  },
  props: {
    studentVisit: {type: Object},
    evaluating: { type: Boolean, default: false },
    hideEvalEhr: { type: Boolean, default: false },
    hideEvalRaw: { type: Boolean, default: false }
  },
  computed: {
    activityData () { return this.studentVisit.activityData},
    studentVisitId ( ) { return this.studentVisit._id },
    // change of plan, Always hide the labels for class list actions. Gives compact UI
    showLabels () { return false }, //return StoreHelper.isOutsideShowButtonLabels() },
    isSubmitted () { return this.activityData.submitted },
    // when appearing in the class listing arrange for table layout
    css () { return this.evaluating ? ' ': 'flow_across flow_across_right table_space_across' }
  },
  methods: {
    goToEvaluation () {
      const inEhr = false
      EvalHelper.studentEvaluation(this.studentVisitId, inEhr)
    },
    enableEvaluation () {
      return this.activityData.closed || (this.activityData.submitted && !this.activityData.evaluated)
    },
    goToEhr () {
      const inEhr = true
      EvalHelper.studentEvaluation(this.studentVisitId, inEhr)
    },
    forceSubmit () { EvalHelper.forceSubmit(this.studentVisit) },
    blockEditing () { EvalHelper.instructorUnsubmitsAssignment(this.studentVisit) },
  },
}
</script>
<style scoped lang='scss'>
@import "../../../scss/definitions";
.button {
  margin-bottom: 5px;
}
</style>
