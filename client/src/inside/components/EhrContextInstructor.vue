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
        div(class="textField") Student last visit: {{ formatTime(panelInfo.lastVisitDate) }}
      div(class="is-2 column")
        div(class="columns is-pulled-right")
          div(class="classlist_nav_item column")
            ui-button(v-on:buttonClicked="previousStudent", class="is-pulled-right", :disabled="!enablePrev")
              span <
            //fas-icon(icon="arrow-left")
          div(class="classlist_nav_item column")
            ui-button(v-on:buttonClicked="nextStudent", class="is-pulled-right", :disabled="!enableNext")
              span >
            //fas-icon(icon="arrow-right")
    div(class="evaluation-label")
      div(class="textField") Evaluation notes
      ehr-evaluation-input(ref="evaluationNoteComponent", v-on:saveNext="nextStudent", :enableNext="enableNext")
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import EhrEvaluationInput from './EhrEvaluationInput'
import { formatTimeStr } from '../../helpers/ehr-utills'
import StoreHelper from '../../helpers/store-helper'

// TODO add student classlist counter and student list drop down

export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationInput, UiInfo },
  computed: {
    panelInfo () {
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
    classList () {
      /*
      Filter the class list to only show records for students who have submitted their work
       */
      let list = this.$store.state.instructor.sClassList || []
      list = list.filter( sv => {
        return sv.activityData.submitted
      })
      return list
    },
    currentStudentId () {
      return this.$store.state.instructor.sCurrentEvaluationStudentId
    },
    showClassList () {
      return true
    },
    enablePrev () {
      let { index } = this.findCurrentIndex()
      return index > 0
    },
    enableNext () {
      let { list, index } = this.findCurrentIndex()
      // console.log('enableNext', index, list)
      return index + 1 < list.length
    }
  },
  methods: {
    formatTime ( dStr ) {
      return formatTimeStr(dStr)
    },
    findCurrentIndex () {
      let list = this.classList
      let id = this.currentStudentId
      let index = list.findIndex(function (elem) {
        return elem._id === id
      })
      // console.log('findCurrentIndex', id, ' index:', index, list)
      return { list, index }
    },
    previousStudent () {
      let { list, index } = this.findCurrentIndex()
      index--
      if (index >= 0) {
        let sv = list[index]
        this.changeStudent(list, sv)
      }
    },
    nextStudent () {
      let { list, index } = this.findCurrentIndex()
      index++
      if (index < list.length) {
        let sv = list[index]
        this.changeStudent(list, sv)
      }
    },
    changeStudent (list, sv) {
      let pid = sv._id
      console.log('EhrClassListNav go to ', pid)
      StoreHelper.dispatchChangeCurrentEvaluationStudentId(this, list, pid)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.classlist_nav_item.column {
  padding-right: 0;
}

.classlist_content.columns .column:last-child {
  padding-right: 0;
}

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
