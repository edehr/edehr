<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theSimStage", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") Simulation Stage
      div(slot="body")
        //div selectedKey {{ suggestedKey }}
        //div encounterDay {{ encounterDay }}
        ui-button(value="losimstg-explain",
          class="explain-button",
          secondary=true,
          @buttonClicked="showEx = !showEx")
          span {{showEx ? 'Hide the explanation ' : 'Tell me about this dialog'}} &nbsp;
        div  &nbsp;

        div(class="dialog-step")
          label Create a simulation stage
        dialog-instructions-element(:show-ex="showEx") A Simulation Stage defines a time which will be the simulation time for the students. Instructors will select the simulation stage they want for the class and all students' EHR system will see the same time, plus they will see all the case study data up to an including that selected time.
          p Instructors can progress the time by selecting the next stage.  To the students this will appear as if new patient data has arrived.

        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Encounter day: &nbsp;
            input(type="number", id="name",  v-model="encounterDay", v-validate="encounterDayValidate")
        dialog-instructions-element(:show-ex="showEx") This is the simulation day for this stage.
        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Encounter time: &nbsp;
            input(type="number", id="name",  v-model="encounterTime", v-validate="encounterTimeValidate")
        dialog-instructions-element(:show-ex="showEx") This is the simulation time for this stage.

        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Notes for instructors: &nbsp;
            textarea(v-model="facultyNotes")
          dialog-instructions-element(:show-ex="showEx") Compose a note for faculty to understand what the purpose of this simulation stage is.

        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Instructions for student: &nbsp;
            textarea(v-model="instructionNotes")
          dialog-instructions-element(:show-ex="showEx") Provide any instructions that students will need once this stage is activated. The student will see an accumulation of instructions including those from the base learning object plus those from each active stage.

</template>
<script>
import AppDialog from '@/app/components/AppDialogShell'
import UiButton from '@/app/ui/UiButton.vue'
import ehrValidations from '@/ehr-definitions/ehr-validations'
import DialogInstructionsElement from '@/outside/components/DialogInstructionsElement.vue'
import { makeSimTimeKey, splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'
const EDIT_ACTION = 'edit'
const CREATE_ACTION = 'create'
export default {
  components: { DialogInstructionsElement, UiButton, AppDialog },
  data () {
    return {
      showEx: false, // default to not show help text.
      encounterDay: '0',
      encounterTime: '0000',
      facultyNotes: '',
      instructionNotes: ''
    }
  },
  props: {
    suggestedKey: { type: String } // e.g. 0000-1234
  },
  computed: {
    encounterDayValidate () {
      return ehrValidations.visitDay('Simulation stage day', this.encounterDay)
    },
    encounterTimeValidate () {
      return ehrValidations.time24('Simulation stage time', this.encounterTime)
    },
    errors () {
      let em = []
      let nv = this.encounterDayValidate
      if (nv) {
        em.push(nv)
      }
      nv = this.encounterTimeValidate
      if (nv) {
        em.push(nv)
      }
      return em
    },
    disableSave () {
      return this.errors.length !== 0
    },
    dialogHeader () {
      return 'Simulation stage'
    },
  },
  methods: {
    clearInputs: function () {
      this.encounterDay = '0'
      this.encounterTime = '0000'
      if (this.suggestedKey) {
        let [d, t] = splitSimTimeKey(this.suggestedKey)
        this.encounterDay = d
        this.encounterTime = t
      }
      this.facultyNotes = this.instructionNotes = ''
    },
    /*
    Invoked by a parent element ...
     */
    async showSimStageDialog (options) {
      this.clearInputs()
      const learningObject = this.learningObject = options.learningObject
      if (!learningObject) {
        throw Error('Coding error. Must provide learning object to edit')
      }
      this.learningObjectName = learningObject.name
      this.learningObjectId = learningObject._id
      this.actionType = options.action
      if (options.action === EDIT_ACTION) {
        const stage = options.stage
        console.log(' EDIT ', options)
        if (!stage) {
          throw Error('Coding error. Must provide simulation stage to edit')
        }
        this.simKey = stage.simKey
        let [d, t] = splitSimTimeKey(stage.simKey)
        this.encounterDay =  d
        this.encounterTime = t
        this.facultyNotes = stage.faculty
        this.instructionNotes = stage.instructions

      }
      if (options.action === CREATE_ACTION) {
      }
      this.$refs.theSimStage.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theSimStage.onClose()
    },
    saveDialog: async function () {
      let simStage = {
        simKey: makeSimTimeKey(this.encounterDay, this.encounterTime),
        faculty: this.facultyNotes,
        instructions: this.instructionNotes
      }
      this.$refs.theSimStage.onClose()
      if (this.actionType === EDIT_ACTION) {
        this.$emit('update', simStage)
      } else if (this.actionType === CREATE_ACTION) {
        this.$emit('create', simStage)
      }
    },
  },
  watch: {
    suggestedKey () {
      this.clearInputs()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.object-name {
  min-width: 30rem;
  width: 30rem;
}
.select-case-study {

}
.learning-object-description {
  display: inline;
}

#setEnabler label {
  padding-left: 5px;
  padding-right: 8px;
}
.select-seed-section {
  padding: 5px;
}
</style>
