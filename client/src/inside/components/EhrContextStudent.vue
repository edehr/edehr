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
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'
import StoreHelper from '../../helpers/store-helper'
export default {
  name: 'EhrContextStudent',
  components: { UiInfo },
  computed: {
    scratchData () {
      return this.$store.getters['ehrData/scratchData']
    },
    submitted () {
      return this.$store.getters['ehrData/submitted']
    },
    evaluated () {
      return this.$store.getters['ehrData/evaluated']
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
