<template lang="pug">
  div
    div(v-if="isAssignment")
      h3 {{ panelInfo.courseTitle}} - {{ panelInfo.assignmentName}}
      h4 {{ panelInfo.activityTitle}}
      p {{ panelInfo.activityDescription}}
      p {{ panelInfo.assignmentDescription}}
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

</style>