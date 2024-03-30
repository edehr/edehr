<template lang="pug">
div
  div(class="details-container card selected")
    h3 Simulation Stages
    zone-lms-instructions-element
      p.
        This section allows you to manage the simulation stages. You can create a new stage or edit existing stages.
        Use the "faculty notes" to describe the purpose of this stage for future faculty users.
        Use the "instructions" to tell students that they need to do with a stage. These stage instructions are added to the instructions provided by the learning object.
      p Sample instructor notes:
      p "This stage is the start of the next day shift."
      p Sample student instructions:
      p "Study the patient chart, conduct your initial assessments, record your assessments, and compose an SBAR with your recommendations or suggestions for the patient’s plan."

    table(class="sim-table")
      thead
        tr(class="stageHeader")
          td Time key
          td Faculty notes
          td Student instructions
          td
            ui-button(value="losc-add-stage",
              @buttonClicked="$emit('actionTable')") {{actionLabelTable}}

      tr(v-for='(stage, rowIndex) in simStages',
        :class='{ selectedTime: isSelected(stage) }',
        @click='$emit("selectRow", rowIndex)')
        td(class="stageButton") {{ stage.simKey }} - {{ isSelected(stage) }}
        td(class="stageButton") {{ stage.faculty }}
        td(class="stageButton") {{ stage.instructions }}
        td(class="stageButton")
          ui-button(value="losc-edit-stage",
            v-if="!!actionLabelRow",
            @buttonClicked="$emit('actionRow', rowIndex)") {{actionLabelRow}}

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'

export default {
  components: { ZoneLmsInstructionsElement, UiButton },
  data () {
    return {
    }
  },
  props: {
    actionLabelRow: { type: String},
    actionLabelTable: { type: String},
    selectedKey: { type: String } // e.g. 0000-1234
  },
  computed: {
    simStages () { return this.$store.getters['assignmentStore/simStages']}
  },
  methods: {
    isSelected (stage ) {
      return this.selectedKey === stage.simKey
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.stageHeader {
  background-color: $grey30;
  font-weight: bold;
}
.stageButton {
  background-color: $grey15;
}
.sim-table {
  margin-top: 1rem;
  width: 100%
}

</style>
