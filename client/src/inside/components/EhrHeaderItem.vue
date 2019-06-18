<template lang="pug">
  div(class="headerItem")
    div(v-if="isAssignment")
      div(class="textField") Student: {{ panelInfo.studentName }}
      div(class="textField") Course: {{ panelInfo.courseTitle}}
      div(class="textField") Activity: {{ panelInfo.activityTitle}}
        div(class="subDetail") {{ panelInfo.activityDescription}}
      div(class="textField") Assignment: {{ panelInfo.assignmentName}}
        div(class="subDetail") {{ panelInfo.assignmentDescription}}

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
@import '../../scss/definitions';
.headerItem {
  padding: 2rem;

  .textField {
    font-size: 1.2rem;
  }

  .subDetail {
    font-size: 1rem;
    margin-left: 1rem;
  }
}
</style>