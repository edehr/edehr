<template lang='pug'>
  div
    div(class="eval-space")
      div
        h3 {{student.user.fullName}}
        div ({{ currentIndex }} of {{ listLen }})
        div {{statusText}}
      ehr-evaluation-input(
        ref="evaluationNoteComponent",
        :disabled='!submitted',
        class="eval-input",
        @hasNewDataChanged='evaluationNotesChanged')
      div
        div(class="eval-controls")
          ui-button(value="sec-prev", v-on:buttonClicked="previousStudent()", :disabled="!enablePrev", title='Previous student')
            fas-icon(icon="angle-left", class='fa')
          ui-button(value="sec-reset", v-on:buttonClicked="resetNotes", :disabled="!canSave", title='Reset note')
            fas-icon(icon="undo", class='fa')
          ui-button(value="sec-save", v-on:buttonClicked="saveNotes", :disabled="!canSave", title='Save note')
            fas-icon(icon="check", class='fa')
          ui-button(value="sec-next", v-on:buttonClicked="nextStudent ()", :disabled="!enableNext", title='Next student')
            fas-icon(icon="angle-right", class='fa')
        class-list-actions(
          :studentVisit='student',
          :evaluating='true',
          :hide-eval-ehr='inEhr',
          :hide-eval-raw='!inEhr'
        )

    div(class="flow_across menu_space_across")
      div(class="eval-controls")
        ui-link(:name="'classList'", :query="{activityId: activityId}")
          fas-icon(class="fa", :icon="appIcons.classList")
          span &nbsp; Return to: class list
      h4 {{ activityName }}
    ui-confirm(class="confirmDialog",
      ref="confirmDialog",
      @confirm="resetNotesConfirmed",
      save-label="Confirm")

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EvalHelper from '@/helpers/eval-helper'
import EhrEvaluationInput from '@/inside/components/EhrEvaluationInput'
import UiButton from '@/app/ui/UiButton'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions'
import { Text } from '@/helpers/ehr-text'
import UiConfirm from '@/app/ui/UiConfirm'
import UiLink from '@/app/ui/UiLink.vue'
import { APP_ICONS } from '@/helpers/app-icons'

export default {
  components: { UiLink, UiConfirm, ClassListActions, UiButton, EhrEvaluationInput },
  data: function () {
    return {
      appIcons: APP_ICONS,
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
      return this.$store.getters['activityStore/activityRecord']
    },
    activityId () {
      return this.activity.id
    },
    activityName () {
      return this.activity.learningObjectName
    },
    activityData () {
      return this.student.activityData
    },
    canSave () {
      return this.hasNewData
    },
    classList () { return this.$store.getters['instructor/classList']  },
    currentIndex () {
      let inx = this.student.index
      return inx + 1
    },
    enablePrev () {
      if (this.hasNewData) return false
      return this.hasPrev
    },
    enableNext () {
      if (this.hasNewData) return false
      return this.hasNext
    },
    hasNext () {
      let index = this.findCurrentIndex()
      index++
      return index < this.classList.length
    },
    hasPrev () {
      let index = this.findCurrentIndex()
      index--
      return index >= 0
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
    findCurrentIndex () {
      const elem = this.findCurrent()
      return this.classList.findIndex(e => e === elem)
    },
    previousStudent () {
      let index = this.findCurrentIndex()
      index--
      if (index >= 0) {
        let sv = this.classList[index]
        EvalHelper.studentEvaluation(sv._id, this.inEhr)
      }
    },
    nextStudent () {
      let index = this.findCurrentIndex()
      index++
      if (index < this.classList.length) {
        let sv = this.classList[index]
        EvalHelper.studentEvaluation(sv._id, this.inEhr)
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
.eval-space {
  display: grid;
  grid-template-columns: 0.5fr 4fr 1fr;
}
.eval-controls {
  margin-bottom: 5px;
}
</style>
