<template lang="pug">
  div
    div(v-if="isAssignment")
      h3 Course: {{ panelInfo.courseTitle}}
      h4 Activity: {{ panelInfo.activityTitle}}
      p(v-text-to-html="panelInfo.activityDescription", class="description")
      hr
      p Assignment: {{ panelInfo.assignmentName}}
      p(v-text-to-html="panelInfo.assignmentDescription", class="description")
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
  .description {
    padding-left: 1rem;
  }
</style>