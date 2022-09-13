<template lang='pug'>
  div
    div(class='sev-actions')
      div(class="eval-controls")
        ui-button(v-on:buttonClicked="previousStudent()", :disabled="!enablePrev", title='Previous student')
          fas-icon(icon="angle-left", class='fa')
        ui-button(v-on:buttonClicked="resetNotes", :disabled="!canSave", title='Reset note')
          fas-icon(icon="undo", class='fa')
        ui-button(v-on:buttonClicked="saveNotes", :disabled="!canSave", title='Save note')
          fas-icon(icon="check", class='fa')
        ui-button(v-on:buttonClicked="nextStudent ()", :disabled="!enableNext", title='Next student')
          fas-icon(icon="angle-right", class='fa')

      h3 {{student.user.fullName}} ({{ currentIndex }} of {{ listLen }}) {{statusText}}

      div
        class-list-actions(
          class="list-item-actions",
          :studentVisit='student',
          :evaluating='true',
          :hide-eval-ehr='inEhr',
          :hide-eval-raw='!inEhr'
        )
    ehr-evaluation-input(
      ref="evaluationNoteComponent",
      :disabled='!submitted',
      class="",
      @hasNewDataChanged='evaluationNotesChanged')
    ui-confirm(class="confirmDialog",
      ref="confirmDialog",
      @confirm="resetNotesConfirmed",
      save-label="Confirm")

    div(style='display:none')
      div isClosed {{ isClosed }}
      div studentLastActive {{ studentLastActive | formatDateTime }}
      div submitted {{ submitted }}
      div evaluated {{ evaluated }}
      div studentName {{ studentName }}
      div currentIndex {{ currentIndex }} of {{ listLen }}
      div currentEvaluationStudentId {{ currentEvaluationStudentId }}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrEvaluationInput from '@/inside/components/EhrEvaluationInput'
import UiButton from '@/app/ui/UiButton'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions'
import { Text } from '@/helpers/ehr-text'
import UiConfirm from '@/app/ui/UiConfirm'

export default {
  components: { UiConfirm, ClassListActions, UiButton, EhrEvaluationInput },
  data: function () {
    return {
      hasNewData: false,
    }
  },
  props: {
    inEhr: { type: Boolean, default: false },
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
    canSave () {
      return this.hasNewData
    },
    classList () { return StoreHelper.getClassList()  },
    currentIndex () {
      let inx = this.student.index
      return inx + 1
    },
    enablePrev () {
      if (this.hasNewData) return false
      let elem = this.findCurrent()
      return elem.index > 0
    },
    enableNext () {
      if (this.hasNewData) return false
      return this.hasNext
    },
    hasNext () {
      let elem = this.findCurrent()
      return elem.index + 1 < this.listLen
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
    evaluated () {
      return this.activityData.evaluated
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
    statusText () {
      return this.submitted ? Text.SUBMITTED : Text.NOT_SUBMITTED
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    user () {
      return this.student.user
    },
  },
  methods: {
    findCurrent () {
      let list = this.classList
      let id = StoreHelper.getCurrentEvaluationStudentId()
      return list.find(function (elem) {
        return elem._id === id
      }) || {}
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
    changeStudent (sv) {
      if (this.inEhr) {
        StoreHelper.changeStudentForInstructor(sv._id)
      } else {
        this.$router.push({ name: 'eval-student', query: { visitId: sv._id } })
      }
    },
    resetNotes () {
      this.$refs.confirmDialog.showDialog('Confirm', 'Confirm reset the evaluation notes.')
    },
    resetNotesConfirmed () {
      this.$refs.evaluationNoteComponent.resetNotes()
    },
    saveNotes () {
      this.$refs.evaluationNoteComponent.saveNotes()
      // if (this.hasNext) {
      //   this.nextStudent()
      // }
    },
    evaluationNotesChanged (state) {
      this.hasNewData = state
    }
  }

}
</script>

<style scoped lang='scss'>
@import "../../../scss/definitions";
.sev-actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h3 {
    margin-top: 0;
  }
}
.eval-controls button {
  margin-right: 5px;
}
@media screen and (max-width: $main-width-threshold2){
  .sev-actions {
    grid-template-columns: 1fr;
  }
}

</style>