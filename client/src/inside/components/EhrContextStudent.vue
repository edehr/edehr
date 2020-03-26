<template lang="pug">
  div(class="contextStudent")
    div(v-if="showContext", class="EhrContextBanner")
      div(class="EhrPanelContent")
        h3 {{ panelInfo.courseTitle}} - {{ panelInfo.assignmentName}}
        div(v-if="isClosed") Activity closed as of {{ closedDate | formatDateTime }}
        div Student: {{ userName }}
        div Evaluation: {{ evaluationNotes }}
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'
import StoreHelper from '../../helpers/store-helper'
export default {
  name: 'EhrContextStudent',
  components: { UiInfo },
  computed: {
    userName ()         { return this.panelInfo.userName },
    scratchData ()      { return this.panelInfo.scratchData },
    submitted ()        { return this.panelInfo.submitted },
    isClosed ()         { return this.panelInfo.closed },
    closedDate ()       { return this.panelInfo.closedDate },
    isEvaluated ()      { return this.panelInfo.evaluated },
    evaluationNotes ()  { return this.panelInfo.evaluationData },
    panelInfo ()        { return StoreHelper.getPanelData(this) },
    showContext ()      { return this.isEvaluated || this.isClosed }
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
