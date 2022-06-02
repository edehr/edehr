<template lang="pug">
  div
    div(v-show="displayControlBar", class='wrap-items-spaced')
      div(class="item-50 item-center") Evaluating: {{ panelInfo.studentName}} (last visit: {{ panelInfo.lastVisitDate | formatDateTime }})
      div(class="item-25") Student {{currentIndex}} of {{listLen}}
      div(class="item-25 item-center")
        ui-link(:name="'classList'") Return to class list
    div(v-show="!displayControlBar")
      div(class="wrap-items-space-between instructor-context")
        div(class="action-save wrap-items-left")
          ui-button(v-on:buttonClicked="previousStudent()", :disabled="!enablePrev", title='Previous student')
            fas-icon(icon="angle-left", class='icon-item2')
          ui-button(v-on:buttonClicked="resetNotes", :disabled="!canSave", title='Reset note')
            fas-icon(icon="undo", class='icon-item3')
          ui-button(v-on:buttonClicked="saveNotes", :disabled="!canSave", title='Save note')
            fas-icon(icon="check", class='icon-item1')
          ui-button(v-on:buttonClicked="nextStudent ()", :disabled="!enableNext", title='Next student')
            fas-icon(icon="angle-right", class='icon-item2')
        div(class="action-activity")
          EhrContextActivityInfo

      ehr-evaluation-input(ref="evaluationNoteComponent", class=" instructor-context", @hasNewDataChanged='evaluationNotesChanged')

</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '@/app/ui/UiConfirm'
import UiInfo from '../../app/ui/UiInfo'
import UiLink from '../../app/ui/UiLink'
import EhrEvaluationInput from './EhrEvaluationInput'
import EhrContextActivityInfo from '@/inside/components/EhrContextActivityInfo'
import StoreHelper from '../../helpers/store-helper'

export default {
  components: { EhrEvaluationInput, EhrContextActivityInfo, UiButton, UiConfirm, UiInfo, UiLink, },
  data: function () {
    return {
      shouldConfirmNavigation: false,
      navigation: '',
      hasNewData: false,
      asStored: '',
      proceed: false,
      confirmStep: '',
      next: null
    }
  },
  props: {
    displayControlBar: { type: Boolean }
  },
  computed: {
    canSave () {
      return this.hasNewData
    },
    classList () {
      let list = StoreHelper.getClassList()
      if (!this.panelInfo.closed) {
        // Filter the class list to only show records for students who have submitted their work
        list = list.filter(sv => {
          return sv.activityData.submitted
        })
      }
      return list
    },
    currentIndex () {
      let elem = this.findCurrent()
      return elem.index + 1
    },
    listLen () {
      return this.classList.length
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
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    enableActions () {
      return this.theNotes !== this.asStored
    },
    disableNext () {
      return !(this.enableActions && this.enableNext)
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
      StoreHelper.changeStudentForInstructor(sv._id)
    },
    resetNotes () {
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

<style lang="scss" scoped>
@import '../../scss/definitions';
.action-save, .action-next {
  flex: 1 0 20%;
}

.icon-item1 {
  font-size: 1.6rem;
}
.icon-item2 {
  font-size: 1.8rem;
}
.icon-item1 {
  font-size: 1.5rem;
}
</style>
