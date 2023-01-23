<template lang="pug">
  div
    // Evaluate a student page
    div(class="flow_across menu_space_across details-container")
      ui-link(:name="'classList'", :query="{activityId: activityId}")
        fas-icon(class="fa", :icon="appIcons.activity")
        span &nbsp; Return to: class list
      div
        span {{ activity.resource_link_title }}
        span &nbsp; / &nbsp;
        span {{ assignment.name }}


    div(class="details-container card selected")
      student-eval-control
      seed-structural(:ehrData='student.activityData.assignmentData')
    div(style='display:none')
      div(v-for="sv in classList")
        div {{Object.keys(sv)}}
        div {{sv.user.fullName }}
        div {{sv._id}} {{sv.index + 1}} of {{ sv.listLength }}
        div {{sv.activityData.submitted}}

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import EvalHelper from '@/helpers/eval-helper'
import { downArrayToCsvFile, formatTimeStr } from '@/helpers/ehr-utils'
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: { StudentEvalControl, SeedStructural, UiButton, UiLink  },
  data () {
    return {
      appIcons: APP_ICONS,
      testingDev: true,
    }
  },
  computed: {
    temp () {
      let t = this.student
      t = Object.keys(t)
      return t
    },
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    activityId () {
      return this.$store.getters['activityStore/activityId']
    },
    activityName () {
      return this.activity.resource_link_title
    },
    activityData () {
      return this.student.activityData
    },
    assignment () {
      return this.$store.getters['assignmentStore/assignment']
    },
    classList () { return StoreHelper.getClassList()  },
    currentIndex () {
      let inx = this.student.index
      return inx + 1
    },
    isClosed () {
      return this.activity.closed
    },
    listLen () {
      return this.classList.length
    },

    currentEvaluationStudentId () {
      return this.$store.getters['instructor/currentEvaluationStudentId']
    },
    student () {
      return this.$store.getters['instructor/currentEvaluationStudent']
    },
    studentName () {
      return this.user.fullName
    },
    studentLastActive () {
      return this.student.lastVisitDate
    },
    submitted () {
      return this.activityData.submitted
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    user () {
      return this.student.user
    },
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === StoreHelper.getCurrentEvaluationStudentId()
      return selected ? 'selected' : ''
    },
    lastUpdate (sv) {
      return formatTimeStr(sv.activityData.lastDate)
    },
    lastSubmitted (sv) {
      return sv.activityData.submitted ? this.lastUpdate(sv) : ''
    },
    unsubmit (sv) {
      EvalHelper.unsubmit(sv)
    },
    forceSubmit (sv) { EvalHelper.forceSubmit(sv) },
    goToEhr (studentVisit) {
      return EvalHelper.goToEhr(studentVisit)
    },
    changeStudent (sv) { StoreHelper.changeStudentForInstructor(sv._id) },
    proceed (filename) {
      let data = []
      data.push(['givenName', 'familyName', 'lms_user_id','feedback: ' + this.activityName])
      this.classList.forEach ( sv => {
        data.push([sv.user.givenName, sv.user.familyName, sv.user.user_id, sv.activityData.evaluationData])
      })
      downArrayToCsvFile(filename, data)
    },
    async loadComponent () {
      const fromRoute = this.$route.query.visitId
      const fromStore = this.$store.getters['instructor/currentEvaluationStudentId']
      const visitId = fromRoute ? fromRoute : fromStore
      await StoreHelper.loadClassList()
      await StoreHelper.changeStudentForInstructor(visitId)
    },
  },
}
</script>
