<template lang="pug">
  div
    div(class="course-header")
      h2(class="course-header-item") {{ courseTitle }}
    h3(:title="activityId") {{ activityName }}
    table
      tr
        td LMS description:
        td
          div(v-text-to-html="activityDescription")
      tr
        td Assignment name:
        td
          ui-link(:name="'assignments'", :params="{assignmentId: assignmentId}")
            span {{ assignmentName }}
      tr
        td Assignment description:
        td
          div(v-text-to-html="assignmentDescription")
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
          tr(v-for="sv in classList", v-on:click="changeStudent(sv)", :class="rowClass(sv)")
            td
              div(:id="`ref-${sv._id}`",  :ref="`ref-${sv._id}`", :title="sv._id") {{ sv.user.fullName }}
            td {{ lastUpdate(sv) }}
            td {{ sv.activityData.evaluationData }}
            td {{ statusText(sv) }}
            td.actions
              span(v-if="sv.activityData.submitted && !sv.activityData.evaluated")
                ui-button(v-on:buttonClicked="goToEhr(sv)", v-bind:secondary="true", title="View and evaluate in the EHR") Evaluate student work
              span(v-if="sv.activityData.submitted && !sv.activityData.evaluated")
                ui-button(v-on:buttonClicked="unsubmit(sv)", v-bind:secondary="true", :title="unsubmitTool") {{unsubmitText}}
              span(v-if="showEvaluateAction(sv)")
                ui-button(v-on:buttonClicked="markEvaluated(sv)", v-bind:secondary="true", :title="evaluatedButtonTooltip(sv)") {{ evaluatedButtonText(sv) }}
              span(v-if="!sv.activityData.submitted && testingDev")
                ui-button(v-on:buttonClicked="forceSubmit(sv)", v-bind:secondary="true") Force submit
</template>

<script>
import { formatTimeStr } from '../../helpers/ehr-utils'
import StoreHelper from '../../helpers/store-helper'
import EvalHelper from '../../helpers/eval-helper'
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
// import UiSaveAsPrompt from '../../app/ui/UiSaveAsPrompt.vue'
// import { downArrayToCsvFile } from '../../helpers/ehr-utils'

const Text = {
  EVAL_DONE: 'Evaluation is done. Let the student see the evaluation notes.',
  EVALUATED: 'Evaluated',
  NOT_SUBMITTED: 'Not submitted',
  SEND_BACK: 'Send evaluation to student',
  SEND_BACK_FOR: 'Send back for edits',
  SEND_BACK_TO: 'Send back to student for edits',
  SUBMITTED: 'Submitted and waiting for evaluation',
  TAKE_BACK: 'Take back from student',
  WANT_TO_EDIT: 'I want to edit the evaluation notes'
}
export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      unsubmitText: Text.SEND_BACK_FOR,
      unsubmitTool: Text.SEND_BACK_TO,
      activity: {},
      assignment: {},
      activityId: '',
      testingDev: true
    }
  },
  props: {
  },
  computed: {
    courseTitle () {
      return StoreHelper.getCourseTitle()
    },
    activityName () {
      return this.activity.resource_link_title
    },
    activityDescription () { return this.activity.resource_link_description },

    assignmentId () { return this.assignment._id },

    assignmentName () { return this.assignment.name },

    assignmentDescription () { return this.assignment.description },

    classList () { return StoreHelper.getClassList()  },

    cs () { return StoreHelper.currentStudentId()}

  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === StoreHelper.currentStudentId()
      return selected ? 'selected' : ''
    },
    evaluatedButtonText (sv) {
      return sv.activityData.evaluated ? Text.TAKE_BACK : Text.SEND_BACK
    },
    evaluatedButtonTooltip (sv) {
      return sv.activityData.evaluated ? Text.WANT_TO_EDIT : Text.EVAL_DONE
    },
    showEvaluateAction (sv) {
      return sv.activityData.submitted && sv.activityData.evaluationData
    },
    statusText (sv) {
      let result = sv.activityData.submitted ? Text.SUBMITTED : Text.NOT_SUBMITTED
      result = sv.activityData.evaluated ? Text.EVALUATED : result
      return result
    },
    lastUpdate (sv) {
      return formatTimeStr(sv.activityData.lastDate)
    },

    unsubmit (sv) {
      EvalHelper.unsubmit(sv)
    },

    forceSubmit (sv) { EvalHelper.forceSubmit(sv) },

    markEvaluated (sv) {
      EvalHelper.markEvaluated(sv)
    },
    goToEhr (studentVisit) {
      return EvalHelper.goToEhr(studentVisit)
    },
    changeStudent (sv) { StoreHelper.changeStudentForInstructor(sv._id) },

    loadComponent () {
      /*
      We can arrive here two ways.  1. from the main list of courses and activities. The user as selected to view the
      class list for an activity (of a course).  This is the main and primary entry point.
      The second way is when the user is returning to this class list after evaluation students in the EHR.
      In the first instance the route parameters will contain (must contain) the activity id. In the
      second instance we will retrieve the "active" activity rom the StoreHelper
       */
      this.activityId = this.$route.params.activityId || StoreHelper.getActivityId()
      console.log('ClassList loadComponent route param activityId',this.activityId)
      return StoreHelper.loadAsCurrentActivity(this.activityId)
        .then( () => {
          return  StoreHelper.loadInstructorWithStudent()
        })
        .then((result) => {
          if(result) {
            this.activity = result.activity
            this.assignment = result.assignment
          }
        })
    }
  },
  mounted: function () {
    this.loadComponent()
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
