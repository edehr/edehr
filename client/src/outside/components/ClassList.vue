<template lang="pug">
  div
    div(class="classlist-header-group")
      div(class="course-header")
        h2(class="course-header-item")
          span {{ courseTitle }}: &nbsp;
          ui-link(:name="'assignments'", :params="{assignmentId: assignmentId}")
            span {{ assignmentName }}
      div(class="course-header-item float-right")
        ui-button(v-if="activity.closed", v-on:buttonClicked="openActivity", title="Open activity for students to submit work. Instructor can evaluate only work that has been submitted by students.") Open activity
          fas-icon(class="icon-right", icon="hourglass-start")
        ui-button(v-else, v-on:buttonClicked="closeActivity", title="Block students from doing more work. Instructor can evaluate all work.") Close activity
          fas-icon(class="icon-right", icon="hourglass-end")
        ui-button(data-test-id="ClassList.button.download", v-on:buttonClicked="downloadEvaluations") Download all assignment evaluation notes
          fas-icon(class="icon-right", icon="download")
        ui-save-as-prompt(data-test-id="ClassList.prompt.saveAs", ref="promptDialog", title="Save evaluation", :message="promptMessage", :filename="activityName", v-on:confirm="proceed")
    div(v-text-to-html="assignmentDescription")

    table
      tr
        td Last Update:
        td {{ activity.lastDate | formatDateTime }}
      tr
        td Created:
        td {{ activity.createDate | formatDateTime }}
      tr
        td Status:
        td {{activity.closed ? "Closed" : "Open" }}
      tr(v-if="activity.closed")
        td Date closed:
        td {{activity.closedDate | formatDateTime }}
      tr
        td Students participating:
        td {{classList.length}}
      tr
        td Students submitted:
        td {{classSubmittedList.length}}
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
            td {{ lastSubmitted(sv)  }}
            td {{ sv.activityData.evaluationData }}
            td {{ statusText(sv) }}
            td.actions
              span(v-if="activity.closed || (sv.activityData.submitted && !sv.activityData.evaluated)")
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
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import StoreHelper from '../../helpers/store-helper'
import EvalHelper from '../../helpers/eval-helper'
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
import UiSaveAsPrompt from '../../app/ui/UiSaveAsPrompt.vue'
import { downArrayToCsvFile } from '../../helpers/ehr-utils'
import { Text } from '../../helpers/ehr-text'

const debug = false

export default {
  components: {
    UiButton, UiLink, UiSaveAsPrompt
  },
  data () {
    return {
      unsubmitText: Text.SEND_BACK_FOR,
      unsubmitTool: Text.SEND_BACK_TO,
      activity: {},
      assignment: {},
      testingDev: true,
    }
  },
  props: {
  },
  computed: {
    courseTitle () {
      return this.activity.context_title
    },
    activityName () {
      return this.activity.resource_link_title
    },
    activityDescription () { return this.activity.resource_link_description },

    assignmentId () { return this.assignment._id },

    assignmentName () { return this.assignment.name },

    assignmentDescription () { return this.assignment.description },

    classList () { return StoreHelper.getClassList()  },

    classSubmittedList () {
      let list = this.classList
      list = list.filter(sv => {
        return sv.activityData.submitted
      })
      return list
    },

    cs () { return StoreHelper.currentStudentId()},

    promptMessage () {
      return 'Save evaluations for ' + this.activityName
    },

    activityId () {
      return this.$route.query.activityId || StoreHelper.getActivityId()
    }

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
    lastSubmitted (sv) {
      return sv.activityData.submitted ? this.lastUpdate(sv) : ''
    },

    unsubmit (sv) {
      EvalHelper.unsubmit(sv)
    },

    closeActivity () {
      return StoreHelper.closeActivity(this.activityId)
        .then((result) => {
          if(result) {
            this.activity = result
          }
        })

    },

    openActivity () {
      return StoreHelper.openActivity(this.activityId)
        .then((result) => {
          if(result) {
            this.activity = result
          }
        })

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
      if (debug) console.log('CL loadAsCurrentActivity', this.activityId)
      return StoreHelper.loadAsCurrentActivity(this.activityId)
        .then( () => {
          if (debug) console.log('CL loadInstructorWithStudent', this.activityId)
          return  StoreHelper.loadInstructorWithStudent()
        })
        .then((result) => {
          if(result) {
            if (debug) console.log('CL results', result)
            this.activity = result.activity
            this.assignment = result.assignment
          } else {
            console.error('CL no results', this.activityId)
          }
        })
        .catch((error) => {
          console.error('CL Load class list failed', error)
        })
    },
    downloadEvaluations () {
      this.$refs.promptDialog.showDialog(this.promptTitle, this.promptMessage, this.promptLabel)
    },

    closeDialog () {
      this.$refs.promptDialog.cancelDialog()
    },

    proceed (filename) {
      let data = []
      data.push(['givenName', 'familyName', 'email','feedback: ' + this.activityName])
      this.classList.forEach ( sv => {
        data.push([sv.user.givenName, sv.user.familyName, sv.user.emailPrimary,sv.activityData.evaluationData])
      })
      downArrayToCsvFile(filename, data)
    },

  },
  created: function () {
    /*
      Must wait for App to load auth before loading this component
     */
    const _this = this
    this.refreshEventHandler = function () { _this.loadComponent() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  },
  watch: {
    // TODO ALmost certain this watch is not triggered anymore.
    activityId:function (curr, prev) {
      if (!prev && curr) {
        if (debug) console.log('CL load component because of a change in activity id')
        this.loadComponent()
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
  .classlist-header-group {
    display: flex; 
    justify-content: space-between;
  }
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
