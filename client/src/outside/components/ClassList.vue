<template lang="pug">
  div
    div(class="classlist-body")
      table.table
        thead
          tr
            th Student
            th Submitted
            th Evaluation notes
            th Status
            th
        tbody
          tr(v-for="sv in classList", v-on:click="changeStudent(sv)")
            td
              div(:id="`ref-${sv._id}`",  :ref="`ref-${sv._id}`") {{ sv.user.fullName }}
            td {{ lastUpdate(sv) }}
            td {{ sv.activityData.evaluationData }}
            td {{ statusText(sv) }}
            td.actions
              span(v-if="sv.activityData.submitted && !sv.activityData.evaluated")
                ui-button(v-on:buttonClicked="unsubmit(sv)", v-bind:secondary="true", :title="unsubmitTool") {{unsubmitText}}
              span(v-if="sv.activityData.submitted && !sv.activityData.evaluated")
                ui-button(v-on:buttonClicked="goToEhr(sv)", v-bind:secondary="true", title="View and evaluate in the EHR") Evaluate student work
              span(v-if="showEvaluateAction(sv)")
                ui-button(v-on:buttonClicked="markEvaluated(sv)", v-bind:secondary="true", :title="evaluatedButtonTooltip(sv)") {{ evaluatedButtonText(sv) }}

</template>

<script>
import { formatTimeStr } from '../../helpers/ehr-utils'
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'ActivityList',
  components: {
    UiButton
  },
  data () {
    return {
      unsubmitText: 'Send back for edits',
      unsubmitTool: 'Send back to student for edits'
    }
  },
  props: {
    classList: { type: Array }
  },
  computed: {
  },
  methods: {
    evaluatedButtonText (sv) {
      return sv.activityData.evaluated ? 'Take back from student' : 'Send evaluation to student'
    },
    evaluatedButtonTooltip (sv) {
      return sv.activityData.evaluated ? 'I want to edit the evaluation notes' : 'Evaluation is done. Let the student see the evaluation notes.'
    },
    showEvaluateAction (sv) {
      return sv.activityData.submitted && sv.activityData.evaluationData
    },
    statusText (sv) {
      let result = sv.activityData.submitted ? 'Submitted and waiting for evaluation' : 'Not submitted'
      
      result = sv.activityData.evaluated ? 'Evaluated' : result
      return result
    },
    unsubmit (sv) {
      let activityDataId = sv.activityData._id
      let data = { activityDataId: activityDataId, value: false }
      this.$store.dispatch('ehrData/sendSubmitOverride', data)
        .then((activityData) => {
          let options = {sv: sv, activityData: activityData}
          this.$store.commit('instructor/updateActivityData', options)
        })
    },
    markEvaluated (sv) {
      const newState = ! sv.activityData.evaluated
      let data = { activityDataId: sv.activityData._id, evaluated: newState }
      this.$store.dispatch('ehrData/sendEvaluated', data)
        .then((activityData) => {
          let options = {sv: sv, activityData: activityData}
          this.$store.commit('instructor/updateActivityData', options)
        })
    },
    lastUpdate (sv) {
      return formatTimeStr(sv.activityData.lastDate)
    },
    goToEhr (studentVisit) {
      let studentId = studentVisit._id
      // Go to the first screen related to the assignent
      let name = '/ehr/patient/demographics'
      StoreHelper.setInstructorReturnUrl(this, window.location.pathname)
      // console.log('Store the current student id that is being evaluated ', studentId)
      StoreHelper.dispatchChangeCurrentEvaluationStudentId(this, this.classList, studentId).then(() => {
        console.log('go to ehr with ', name)
        this.$router.push(name)
      })
    },
    changeStudent (sv) {
      let pid = sv._id
      StoreHelper.dispatchChangeCurrentEvaluationStudentId(this, this.classList, pid)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
  .classlist-header {
    padding: 0.5rem 1.5rem;
    background-color: $grey10;
    border: 1px solid $grey20;
    box-sizing: border-box;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem 1.5rem;
    background-color: $white;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table {
    margin-bottom: 0;
    overflow: hidden;
    width: 100%;
    button {
      margin-bottom: 0;
    }
    tr:last-child {
      border-bottom: 0;
    }
    td.actions {
      text-align: right;
      & button {
        margin-left: 20px;
      }
    }
  }

</style>
