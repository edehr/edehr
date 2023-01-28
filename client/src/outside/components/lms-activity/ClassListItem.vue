<template lang="pug">
  div(class="list-item-container")
    div(class="list-item-name") {{studentName}} &nbsp;
    class-list-actions(v-if='hasLinkedLearningObject', :studentVisit='studentVisit')
    div(class="flow_across")
      div(class="details-name") {{text.EVALUATION}}
      div(class="details-value") {{ evaluationNotes }}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions'
import { formatTimeStr } from '@/helpers/ehr-utils'
export default {
  components: { ClassListActions },
  data () {
    return {
      appIcons: APP_ICONS,
      showMore: false,
      text: Text.CLASS_LIST_PAGE,
    }
  },
  props: {
    studentVisit: {type: Object}
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    activityData () { return this.studentVisit.activityData},
    assignment () { return this.$store.getters['assignmentStore/assignment']},
    evaluationNotes () {
      let txt = this.activityData.evaluationData || ''
      const lim = 100
      return this.showMore ? txt : (txt.length > lim ? txt.substr(0, lim) + '...' : txt)
    },
    hasLinkedLearningObject () { return this.activity.assignment },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    studentName () { return this.studentVisit.user.fullName },
  },
  methods: {
    statusText () {
      let result = this.studentVisit.activityData.submitted ? Text.SUBMITTED : Text.NOT_SUBMITTED
      result = this.studentVisit.activityData.evaluated ? Text.EVALUATED : result
      return result
    },
    lastUpdate () {
      return formatTimeStr(this.studentVisit.activityData.lastDate)
    },
    lastSubmitted () {
      return this.studentVisit.activityData.submitted ? this.lastUpdate() : ''
    },
  },
}
</script>
