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
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'

export default {
  name: 'EhrContextStudent',
  components: { UiInfo },
  computed: {
    scratchData() {
      return this.$store.getters['ehrData/scratchData']
    },
    panelInfo() {
      let visitInfo = this.$store.state.visit.sVisitInfo || {}
      let assignment = visitInfo.assignment || {}
      let activity = visitInfo.activity || {}
      let name = this.$store.state.visit.sUserInfo.fullName
      // console.log('assignment', JSON.stringify(assignment))
      // console.log('visitInfo', JSON.stringify(visitInfo, null, 2))
      // console.log('activity', JSON.stringify(activity, null, 2))
      // sActivityData provides the seed and current assignment data
      // let sActivityData = this.$store.state.ehrData.sActivityData || {}
      // console.log('sActivityData', JSON.stringify(sActivityData, null, 2))
      let data = {
        studentName: name,
        courseTitle: activity.context_title,
        activityTitle: activity.resource_link_title,
        activityDescription: activity.resource_link_description,
        assignmentName: assignment.name,
        assignmentDescription: assignment.description
      }
      return data
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
