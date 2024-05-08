<template lang="pug">
  div
    app-dialog(
      :isModal="false",
      small=true,
      ref="theDialog",
      :useSave="false",
      @cancel="cancelDialog",
      :cancelButtonLabel='ehrText.closeButtonLabel',
      :zIndexBase=10000
    )
      h2(slot="header", class='ui-info-title') {{ ehrText.studentBannerInstructorsFeedback  }}
      div(slot="body", class='ui-info-body')
        div(v-if='feedbackViewable')
          div(v-if="hasEvaluationData")
            p From your instructor:
            p(v-text-to-html="evaluationData")
          div(v-else)
            span(v-if="submitted") {{ ehrText.studentBannerAwaitEvalText }}
            span(v-else) {{ ehrText.studentBannerSubmitText }}
        div(v-else)
          span {{ ehrText.studentBannerFeedbackBlocked }}

        div(v-if='testableControls')
          div
            input(type='checkbox', v-model='forceControls')
            label forceControls
          div
            input(type='checkbox', v-model='forceFeedBackViewable')
            label forceFeedBackViewable
          div
            input(type='checkbox', v-model='forceHasEval')
            label forceHasEval
          div
            input(type='checkbox', v-model='forceSubmitted')
            label forceSubmitted
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { t18EhrText } from '@/helpers/ehr-t18'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
      theNotes: '',
      testableControls: false, // enable to see a block of checkboxes that can be used to test out the different options.
      forceControls: false,
      forceHasEval: false,
      forceFeedBackViewable: false,
      forceSubmitted: false
    }
  },
  computed: {
    activityRecord () { return this.$store.getters['activityStore/activityRecord'] },
    ehrText () { return t18EhrText() },
    evaluationData () { return this.forceControls ? 'Sample eval data' :  this.$store.getters['activityDataStore/evaluationData'] },
    feedbackViewable () { return this.forceControls ? this.forceFeedBackViewable : this.activityRecord.feedbackViewable },
    hasEvaluationData () { return this.forceControls ? this.forceHasEval : this.evaluationData && this.evaluationData.length > 0 },
    submitted () { return this.forceControls ? this.forceSubmitted : StoreHelper.isSubmitted() }
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$store.dispatch('system/setEvalDialogVisible', false )
      this.$refs.theDialog.onClose()
    },
  }
}
</script>
