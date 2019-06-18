<template lang="pug">
  div(class="contextStudent")
    div(v-if="isEvaluated", class="EhrContextBanner EhrPanelContent")
      div Evaluation Notes: {{ evaluationNotes }}
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'
import StoreHelper from '../../helpers/store-helper'
export default {
  name: 'EhrContextStudent',
  components: { UiInfo },
  computed: {
    scratchData () {
      let ad = this.panelInfo.activityData
      return ad.scratchData
    },
    submitted () {
      let ad = this.panelInfo.activityData
      return ad.submitted
    },
    isEvaluated () {
      return this.panelInfo.activityData.evaluated
    },
    evaluationNotes () {
      let ad = this.panelInfo.activityData
      return ad.evaluated  ? ad.evaluationData : 'Not available'
    },
    panelInfo () {
      return StoreHelper.getPanelData(this)
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
