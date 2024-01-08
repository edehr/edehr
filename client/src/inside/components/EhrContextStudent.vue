<template lang="pug">
  div(class='ehr-context-student flow_across')
    div
      div {{givenName}}.
        span {{ ehrText.studentBannerActivityLabel }}
        span(class='content') {{ truncate(assignmentName, 50) }}
        ui-info(
          :title="ehrText.studentBannerActivityInstructionsTitle",
          :html="instructions",
          :linkText="ehrText.studentBannerActivityInstructionsTitle")
      div(v-if='feedbackViewable')
        div(v-if="hasEvaluationData")
          span {{ ehrText.studentBannerInstructorsFeedback }}
          span(class='content') {{ truncate(evaluationData, 50) }}
          span(class="UiInfo")
            button(class="info-button", v-on:click="buttonClicked")
              fas-icon(class="info-icon", icon="info-circle")
              span  &nbsp; Read more
        div(v-else, class="bigger-screens-900")
          span {{ ehrText.studentBannerSubmitText }}
      div(v-else)
        span {{ ehrText.studentBannerFeedbackBlocked }}
    div(class="flow_across menu_space_across flow_across_last_item")
      ehr-simulation-time-control
      ehr-simulation-sign-on
      ehr-student-submit

    app-dialog(
      :isModal="false",
      small=true,
      ref="theDialog",
      :useSave="false",
      @cancel="cancelDialog",
      :cancelButtonLabel='ehrText.closeButtonLabel'
    )
      h2(slot="header", class='ui-info-title') {{ ehrText.studentBannerInstructorsFeedback  }}
      div(slot="body", class='ui-info-body')
        p(v-text-to-html="evaluationData")

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AppDialog from '@/app/components/AppDialogShell.vue'
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit.vue'
import EhrSimulationSignOn from '@/inside/components/EhrSimulationSignOn.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import { textToHtml } from '@/directives/text-to-html'
import FeatureHelper, { FF_UNLEASH_ACTIVITY } from '@/helpers/feature-helper'
import EhrSimulationTimeControl from '@/inside/components/EhrSimulationTimeControl.vue'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  components: { EhrSimulationTimeControl, EhrSimulationSignOn, UiInfo, EhrStudentSubmit, AppDialog },
  data () {
    return {
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    isUnleashedActivityEnabled () {
      const cid = this.$store.getters['consumerStore/consumerId']
      return FeatureHelper.isFeatureFlagEnabled(cid, FF_UNLEASH_ACTIVITY)
    },
    activityRecord () { return this.$store.getters['activityStore/activityRecord'] },
    assignmentName () { return this.activityRecord.title },
    instructions () { return textToHtml(this.studentInstructions || '') },
    studentInstructions () { return this.isUnleashedActivityEnabled ? this.activityRecord.learningObjectDescription : this.activityRecord.description },

    evaluationData () { return this.$store.getters['activityDataStore/evaluationData'] },
    givenName () { return StoreHelper.givenName()},
    feedbackViewable () { return this.activityRecord.feedbackViewable },
    hasEvaluationData () { return this.evaluationData && this.evaluationData.length > 0 }
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    buttonClicked: function () {
      this.showingDialog = true
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.showingDialog = false
      this.$refs.theDialog.onClose()
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
