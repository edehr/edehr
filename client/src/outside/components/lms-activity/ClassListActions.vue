<template lang="pug">
  div(class="action-section")
    div
      ui-button(
        v-on:buttonClicked="goToEvaluation()",
        :disabled="!isSubmitted"
        :title="text.EVALUATE_TIP"
      )
        fas-icon(class='fa', :icon='appIcons.rawEhr')
        span(v-if="showLabels") &nbsp; {{text.EVALUATE_BL}}
    div
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
import StoreHelper from '@/helpers/store-helper'
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
    studentVisit: {type: Object}
  },
  computed: {
    activityData () { return this.studentVisit.activityData},
    studentVisitId ( ) { return this.studentVisit._id },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    isSubmitted () { return this.activityData.submitted },
  },
  methods: {
    // evaluation
    goToEvaluation () {
      this.$router.push({ name: 'eval-student', query: { visitId: this.studentVisitId } })
    },
    enableEvaluation () {
      return this.activityData.closed || (this.activityData.submitted && !this.activityData.evaluated)
    },
    // evaluation in EHR
    goToEhr () {
      return EvalHelper.goToEhr(this.studentVisit)
    },
    forceSubmit () { EvalHelper.forceSubmit(this.studentVisit) },
    blockEditing () { EvalHelper.instructorUnsubmitsAssignment(this.studentVisit) },
  },
}
</script>
