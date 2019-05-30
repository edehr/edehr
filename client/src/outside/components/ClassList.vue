<template lang="pug">
  div(id="activityList", class="activity-list")
    div(class="activity-list-header columns", v-on:click="activateActivity")
      div(class="header-column is-10 column")
        h3(:title="activity._id") {{ activity.resource_link_title }}
        p LMS description: {{ activity.resource_link_description }}
        p Assignment name: {{ assignment.name }} (LMS configuration: assignment={{ assignment.externalId }} )
        p Assignment description: {{ assignment.description }}
      div(class="header-column is-2 column")
        div(class="header-item header-icon") {{ indicator }}
    div(class="activity-list-body")
      accordion-element(theme="grayTheme", :show="show")
        div(class="classlist-header")
          div(class="classlist-header-item") Evaluation notes
            fas-icon(class="icon-right", icon="download")
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
                    span &nbsp;
                    ui-button(v-on:buttonClicked="unsubmit(sv)", v-bind:secondary="true", :title="unsubmitTool") {{unsubmitText}}
                  span(v-if="sv.activityData.submitted && !sv.activityData.evaluated")
                    ui-button(v-on:buttonClicked="goToEhr(sv)", v-bind:secondary="true", title="View and evaluate in the EHR") Evaluate student work
                  span(v-if="showEvaluateAction(sv)") &nbsp;
                    ui-button(v-on:buttonClicked="markEvaluated(sv)", v-bind:secondary="true", :title="evaluatedButtonTooltip(sv)") {{ evaluatedButtonText(sv) }}

</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'
import UiButton from '../../app/ui/UiButton.vue'
import { formatTimeStr } from '../../helpers/ehr-utills'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'ActivityList',
  components: {
    AccordionElement,
    UiButton
  },
  data () {
    return {
      show: false,
      indicator: '+',
      unsubmitText: 'Send back for edits',
      unsubmitTool: 'Send back for edits',
      classList: []
    }
  },
  props: {
    activity: { type: Object },
    index: { type: Number}
  },
  computed: {
    assignment () {
      return this.activity.assignment || {}
    },
    visitInfo () {
      return this.$store.state.visit.sVisitInfo
    }
  },
  methods: {
    evaluatedButtonText (sv) {
      return sv.activityData.evaluated ? 'Take back from student' : 'Send evaluation to student'
    },
    evaluatedButtonTooltip (sv) {
      return sv.activityData.evaluated ? 'I want to edit the evaluation notes' : 'Evaluation is done. Let the student see the evaluation notes.'
    },
    showEvaluateLabel (sv) {
      return sv.activityData.evaluated
    },
    showEvaluateAction (sv) {
      return sv.activityData.submitted && sv.activityData.evaluationData
    },
    setShow: function (value) {
      this.show = value
      this.indicator = value ? '-' : '+'
    },
    statusText (sv) {
      let result = sv.activityData.submitted ? 'Submitted and waiting for evaluation' : 'Not submitted'
      
      result = sv.activityData.evaluated ? 'Evaluated' : result
      return result
    },
    activateActivity () {
      if (this.show) {
        this.setShow(false)
        return
      }
      let activityId = this.activity._id
      localStorage.setItem('activityId', activityId)
      this.loadActivity(activityId)
    },
    loadActivity (activityId) {
      const _this = this
      return StoreHelper.dispatchLoadActivity(this, activityId)
        .then(() => {
          return StoreHelper.dispatchLoadClassList(this, activityId)
        })
        .then((classList) => {
          console.log('ClassList have classlist ', classList)
          _this.classList = classList
          _this.$nextTick(function () {
            _this.setShow(true)
          })
        })
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
      StoreHelper.setIsDevelopingContent(this,false)
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
  },
  mounted: function () {
    if (this.index === 0) {
      const _this = this
      this.$nextTick(function () {
        _this.activateActivity()
      })

    }
    /*
    let myId = this.activity._id
    let storeId = localStorage.getItem('activityId')
    if (storeId === myId) {
      // TODO  see notes in AsInstructor view regaring scrolling
      this.loadActivity(storeId).then(() => {
        let list = this.classList
        if (list && list.length > 0) {
          let lastStudent = list[list.length - 1]
          let id = `ref-${lastStudent._id}`
          const _this = this
          this.$nextTick(function() {
            // console.log('Look for element with id', id)
            let elem = document.getElementById(id)
            // console.log('scroll to ', elem)
            _this.$scrollTo(elem)
          })
        }
      })
    }
    */
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.activity-list {
  padding: 0;
}
.activity-list-header {
  background-color: $grey03;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-bottom: 0;
  cursor: pointer;

  .header-column {
    padding: 1rem 1.5rem;

    p {
      margin-bottom: .5rem;
    }
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
  }
}

.activity-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;

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
}
.activity-list:hover .activity-list-header {
  background-color: $brand-primary-light;
  box-sizing: border-box;
  border: 1px solid $brand-primary;
}
</style>
