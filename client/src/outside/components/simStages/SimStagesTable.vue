<template lang="pug">
div
  div(class="details-container card selected")
    //h3 Simulation Stages
    zone-lms-instructions-element
      p.
        This section allows you to manage the simulation stages. You can create a new stage or edit existing stages.
        Use the "faculty notes" to describe the purpose of this stage for future faculty users.
        Use the "instructions" to tell students what they need to do with a stage.
        The stage instructions are added to the instructions provided by the learning object.
      p Sample instructor notes:
      p "This stage is the start of the next day shift."
      p Sample student instructions:
      p "Study the patient chart, conduct your initial assessments, record your assessments, and compose an SBAR with your recommendations or suggestions for the patient’s plan."

    ui-button(value="losc-add-stage",
      @buttonClicked="$emit('actionTable')") Create a simulation stage

    table(class="sim-table")
      thead
        tr(class="stageHeader")
          td Simulation Stages
          td Time key
          td Faculty notes
          td Student instructions

      tr(v-for='(stage, rowIndex) in simStages',
        :class='{ selectedTime: isSelected(stage) }',
        @click='$emit("selectRow", rowIndex)')
        td(class="stageButton")
          ui-button(value="losc-edit-stage",
            @buttonClicked="$emit('actionRow', rowIndex)") Edit
          ui-button(value="losc-delete-stage",
            @buttonClicked="$emit('actionDelete', rowIndex)") Delete
        td(class="stageButton") {{ stage.simKey }}
        td(class="stageButton") {{ stage.faculty }}
        td(class="stageButton") {{ stage.instructions }}
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'

export default {
  components: { UiConfirm, ZoneLmsInstructionsElement, UiButton },
  data () {
    return {
    }
  },
  props: {
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
