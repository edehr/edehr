<template lang="pug">
  div(class="contextStudent")
    div(class="contextStudent_content columns")
      div(class="is-6 column")
        div(class="textField") Student: {{ panelInfo.studentName }}
        div(class="textField") Course: {{ panelInfo.courseTitle}}
        div(class="textField") Activity: {{ panelInfo.activityTitle}}
          ui-info(:text="panelInfo.activityDescription")
        div(class="textField") Assignment: {{ panelInfo.assignmentName}}
          ui-info(:text="panelInfo.assignmentDescription")
        div(class="textField") Submitted: {{ submitted }}
        div(class="textField") Evaluated: {{ evaluated }}
        div(class="textField") Evaluation Notes: {{ evaluationNotes }}
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
    evaluated () {
      let ad = this.panelInfo.activityData
      return ad.evaluated
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

.contextStudent {
  background-color: white;
}
</style>
