<template lang="pug">
  div(class="classlist", v-if="isReadonly")
    div(class="classlist_content columns")
      div(class="is-8 column") You are currently viewing 
        b {{ panelInfo.activityTitle }}
        span  in read only mode.
    div
        router-link(to="/instructor") Go back to courses page
  div(class="classlist", v-show="showClassList", v-else)
    div(class="classlist_content columns")
      div(class="is-4 column")
        div(class="textField") Course: {{ panelInfo.courseTitle}}
        div(class="textField") Activity: {{ panelInfo.activityTitle}}
          ui-info(:title="panelInfo.activityTitle", :text="panelInfo.activityDescription")
        div(class="textField") Assignment: {{ panelInfo.assignmentName}}
          ui-info(:title="panelInfo.assignmentName", :text="panelInfo.assignmentDescription")
      div(class="is-4 column")
        div(class="textField") Student: {{ panelInfo.studentName }}
        div(class="textField") Student's last visit: {{ formatTime(panelInfo.lastVisitDate) }}
        div Activity is {{ panelInfo.closed ? "CLOSED " : "OPEN "}} to students

      div(class="is-4 column")
        div(class="columns is-pulled-right")
          div {{currentIndex}} of {{listLen}}
          ui-button(v-on:buttonClicked="handleConfirmNavigation('previous')", class="is-pulled-right is-light", :disabled="!enablePrev")
            fas-icon(icon="angle-left", class="icon-left")
            span Previous
          ui-button(v-on:buttonClicked="handleConfirmNavigation('next')", class="is-pulled-right is-light", :disabled="!enableNext")
            span Next &nbsp;
            fas-icon(icon="angle-right", class="icon-left")
    div(class="textField") Evaluation notes
    ehr-evaluation-input(
      ref="evaluationNoteComponent", 
      :enableNext="enableNext", 
      :shouldConfirmNavigation="shouldConfirmNavigation"
      :navigation="navigation"
      @saveNext="nextStudent", 
      @proceedNavigation="handleProceedNavigation"
    )
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import UiLink from '../../app/ui/UiLink'
import EhrEvaluationInput from './EhrEvaluationInput'
import { formatTimeStr } from '../../helpers/ehr-utils'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrClassListNav',
  components: { UiLink, UiButton, EhrEvaluationInput, UiInfo },
  data: function () {
    return {
      shouldConfirmNavigation: false,
      navigation: ''
    }
  },
  props: {
    isReadonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    classList () {
      let list = StoreHelper.getClassList()
      if(!this.panelInfo.closed) {
        // Filter the class list to only show records for students who have submitted their work
        list = list.filter(sv => {
          return sv.activityData.submitted
        })
      }
      return list
    },
    showClassList () {
      return true
    },
    currentIndex () {
      let elem = this.findCurrent()
      return elem.index + 1
    },
    listLen () {
      return this.classList.length
    },
    enablePrev () {
      let elem = this.findCurrent()
      return elem.index > 0
    },
    enableNext () {
      let elem = this.findCurrent()
      return elem.index + 1 < this.listLen
    }
  },
  methods: {
    formatTime ( dStr ) {
      return formatTimeStr(dStr)
    },
    findCurrent () {
      let list = this.classList
      let id = StoreHelper.getCurrentEvaluationStudentId()
      return list.find(function (elem) { return elem._id === id }) || {}
    },
    previousStudent () {
      let elem = this.findCurrent()
      let index = elem.index - 1
      if (index >= 0) {
        let sv = this.classList[index]
        this.changeStudent(sv)
      }
    },
    nextStudent () {
      let elem = this.findCurrent()
      let index = elem.index + 1
      if (index < this.classList.length) {
        let sv = this.classList[index]
        this.changeStudent(sv)
      }
    },
    changeStudent (sv) { StoreHelper.changeStudentForInstructor( sv._id ) },
    handleConfirmNavigation (type) {
      this.navigation = type
      this.shouldConfirmNavigation = true
    },
    handleProceedNavigation () {
      if(this.navigation === 'previous') {
        this.previousStudent()
      } else if (this.navigation === 'next'){
        this.nextStudent()
      }
      this.shouldConfirmNavigation = false
      this.navigation = ''
    }
  },
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
      width: 5rem;
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
