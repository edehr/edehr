<template lang="pug">
  div
    div(class="columns")
      div(class="column is-2 key") Course
      div(class="column") {{ panelInfo.courseTitle}}
    div(class="columns")
      div(class="column is-2 key") Activity
      div(class="column") {{ panelInfo.activityTitle}}
    div(class="columns")
      div(class="column", v-text-to-html="panelInfo.activityDescription")
    div(class="columns")
      div(class="column is-2 key") Learning Object
      div(class="column") {{ panelInfo.assignmentName}}
    div(class="columns")
      div(class="column", v-text-to-html="panelInfo.assignmentDescription")
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
export default {
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData()
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  padding: 0.1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}
</style>