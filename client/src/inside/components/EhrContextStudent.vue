<template lang="pug">
  div
    div(v-show="displayControlBar", class='wrap-items-space-between')
      div(class="item-25 item-center") Activity: {{ panelInfo.activityTitle}}
      div(class="item-12 item-center")
        ehr-student-submit
      div(class="item-25 item-center")
        ehr-visit-day-time-control
      div(class="item-25 item-center")
        div(v-if="lmsName")
          span Return to: &nbsp;
          a(:href="lmsUrl", class="navLink") {{lmsName}}

    div(v-show="!displayControlBar", class='wrap-items-space-between')
      div(class="EhrPanelContent")
        div(v-show="isSentBack")  Sent back for edits
        div                       Evaluation: {{evaluationText}}
      EhrContextActivityInfo
</template>

<script>
import EhrVisitDayTimeControl from '@/inside/components/EhrVisitDayTimeControl'
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit'
import EhrContextActivityInfo from '@/inside/components/EhrContextActivityInfo'
import UiInfo from '@/app/ui/UiInfo'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { EhrContextActivityInfo, EhrStudentSubmit, EhrVisitDayTimeControl, UiInfo },
  computed: {
    evaluationText ()   { return !this.isEvaluated ? 'Not yet submitted' : (this.showEvalNotes ? this.evaluationNotes : 'Not yet evaluated')},
    userName ()         { return this.panelInfo.userName },
    scratchData ()      { return this.panelInfo.scratchData },
    submitted ()        { return this.panelInfo.submitted },
    isClosed ()         { return this.panelInfo.closed },
    isSentBack ()       { return this.panelInfo.sentBack },
    closedDate ()       { return this.panelInfo.closedDate },
    isEvaluated ()      { return this.panelInfo.evaluated },
    evaluationNotes ()  { return this.panelInfo.evaluationData },
    showEvalNotes ()    { return this.isEvaluated || this.isClosed || this.isSentBack },
    panelInfo ()        { return StoreHelper.getPanelData() },
    lmsUrl ()           { return StoreHelper.lmsUrl()  },
    lmsName ()          { return StoreHelper.lmsName() },

  },
  props: {
    displayControlBar: { type: Boolean }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.contextStudent {
  background-color: inherit;
}
  .contextStudent_content {
    margin: 0 0 1rem 2rem;
}
</style>
