<template lang="pug">
  div(class="classlist", v-show="showClassList")
    div(class="classlist_content columns")
      div(class="is-6 column")
        div(class="textField") Course: {{ panelInfo.courseTitle}}
        div(class="textField") Activity: {{ panelInfo.activityTitle}}
          ui-info(:text="panelInfo.activityDescription")
        div(class="textField") Assignment: {{ panelInfo.assignmentName}}
          ui-info(:text="panelInfo.assignmentDescription")
      div(class="is-4 column")
        div(class="textField") Evaluating: {{ panelInfo.studentName }}
        div(class="textField") Last visit: {{ panelInfo.lastVisitDate | moment("YYYY-MM-DD h:mm a") }}
      div(class="is-3 column")
        div(class="columns")
          div(class="classlist_nav_item is-2 column")
            ui-button(v-on:buttonClicked="previousStudent", class="", :disabled="!enablePrev")
              span <
            //fas-icon(icon="arrow-left")
          // div(class="classlist_counter column")
          //  span 3/14
          div(class="classlist_nav_item is-2 column")
            ui-button(v-on:buttonClicked="nextStudent", class="", :disabled="!enableNext")
              span >
            //fas-icon(icon="arrow-right")
    div(class="evaluation-label")
      div(class="textField") Evaluation notes
      ehr-evaluation-input(ref="evaluationNoteComponent", v-on:saveNext="nextStudent")
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import EhrEvaluationDialog from './EhrEvaluationDialog'
import EhrEvaluationInput from './EhrEvaluationInput'

// TODO add student classlist counter and student list drop down

export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationDialog, EhrEvaluationInput, UiInfo },
  computed: {
    panelInfo() {
      let evalInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      let evalData = this.$store.state.ehrData.sCurrentStudentData || {}
      let activity = this.$store.state.instructor.sCurrentActivity || {}
      let data = {
        studentName: evalInfo.studentName,
        studentId: evalInfo.studentName,
        courseTitle: activity.context_title,
        activityTitle: activity.resource_link_title,
        activityDescription: activity.resource_link_description,
        lastVisitDate: evalData.lastDate || {},
        assignmentData: evalData.assignmentData,
        assignmentName: evalInfo.assignmentName,
        assignmentDescription: evalInfo.assignmentDescription
      }
      return data
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    showClassList() {
      return true
    },
    enablePrev() {
      let { indx } = this.findCurrentIndex()
      return indx > 0
    },
    enableNext() {
      let { list, indx } = this.findCurrentIndex()
      return indx < list.length - 1
    }
  },
  methods: {
    findCurrentIndex() {
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      return { list, indx }
    },
    previousStudent() {
      let { list, indx } = this.findCurrentIndex()
      indx--
      if (indx >= 0) {
        let sv = list[indx]
        this.changeStudent(list, sv)
      }
    },
    nextStudent() {
      let { list, indx } = this.findCurrentIndex()
      indx++
      if (indx < list.length) {
        let sv = list[indx]
        this.changeStudent(list, sv)
      }
    },
    changeStudent(list, sv) {
      let pid = sv._id
      console.log('EhrClassListNav go to ', pid)
      this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', pid).then(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.classlist {
  .textField {
    max-width: 30rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .classlist_nav_item {
    overflow: hidden;
    button {
      width: 2rem;
      max-width: 4rem;
    }
  }
  .classlist_counter {
    max-width: 5rem;
  }

  &_classlist &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;
      &::before {
        margin-right: 0.5em;
      }
    }
  }

  $indicatorColor: $brand-primary;
  .indicator {
    display: flex;
    flex-direction: row;
  }
  .indicator-label {
    flex: 0 1 auto;
    margin-right: 5px;
  }
  .indicator-shape {
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    border: 1px solid $grey80;
    margin-top: 10px;
  }
  .indicate-assignment-data {
    // square
  }
  .indicate-evaluation-notes {
    border-radius: 50%; // circle
  }
  .has-assignment-data {
    background: $indicatorColor;
  }
  .has-evaluation-notes {
    background: $indicatorColor;
  }
}
</style>
