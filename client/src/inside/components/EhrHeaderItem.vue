<template lang="pug">
  div
    div(v-if="isAssignment")
      div(class="columns")
        div(class="column is-1 key") Course
        div(class="column") {{ panelInfo.courseTitle}}
      div(class="columns")
        div(class="column is-1 key") Activity
        div(class="column") {{ panelInfo.activityTitle}}
      div(class="columns")
        div(class="column is-1")
        div(class="column", v-text-to-html="panelInfo.activityDescription")
      div(class="columns")
        div(class="column is-1 key") Assignment
        div(class="column") {{ panelInfo.assignmentName}}
      div(class="columns")
        div(class="column is-1")
        div(class="column", v-text-to-html="panelInfo.assignmentDescription")
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
export default {
  name: 'EhrHeaderItem',
  props: {
    type: {type: String} // 'assignment'
  },
  data () {
    return {
    }
  },
  computed: {
    isAssignment () {
      return this.type === 'assignment'
    },
    panelInfo () {
      return StoreHelper.getPanelData(this)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  //@import '../../scss/definitions';
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