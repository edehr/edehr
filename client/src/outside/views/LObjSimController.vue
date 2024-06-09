<template lang="pug">
  div
    zone-lms-page-banner(:title="learningObject.name", theme='lobj-theme')
      ui-link(v-if="learningObject.seedDataId", :name="'seed-view'", :query="{seedId: learningObject.seedDataId}") Go to case study

    zone-lms-instructions-header
      p.
        Simulation staging allows instructors to create an immersive experience for their students.
        This can be used both for theory or lab sessions.
        Create one or more "simulation stages" and then, during the class,
        you can easily step the simulation forward to a new stage.
        Students experience the simulation time advancing, and they also
        see all the medical records from the beginning of the case study up to the simulation time.

    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") Return to main Learning Object page
        div(class="details-value")
          ui-link(:name="'learning-object'", :query='{ learningObjectId: this.learningObjectId }')
            // no visit id because we are not changing visit
            fas-icon(class="fa", :icon="appIcons.lobj")
            span &nbsp; {{learningObject.name}}
      div(class="details-row")
        div(class="details-name") Go to {{ text.SEED }}
        div(class="details-value")
          ui-link(v-if="learningObject.seedDataId", :name="'seed-view'", :query="{seedId: learningObject.seedDataId}") {{ learningObject.seedName }}
          div(v-else) (This learning object does not provide a case study.)
      zone-lms-instructions-element The above links let you to return to the learning object or go to the case study.

    sim-stages-table(:learning-object="learningObject",
      :selectedKey='selectedKey',
      @actionRow='showEditDialog',
      @actionDelete='deleteRow',
      @actionTable='showCreateDialog',
      @selectRow='selectRow'
      )

    div(class="details-container card")
      h3 Simulation Timing and Stages
      zone-lms-instructions-element This section allows you select a time or stage and view the EHR records..
      seed-time-split(:ehrData='ehrData', :stages="simStages", purpose='lobj', @selected='selectTime')


    learning-object-sim-stage-dialog(ref='simStageDialog', @update='stageUpdate', @create='stageCreate', :suggestedKey='selectedKey')
    ui-confirm(ref="confirmDelete", v-on:confirm="proceedDeleteRow", saveLabel='Yes')

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import SeedTimeSplit from '@/outside/components/seed-struct/SeedTimeSplit.vue'
import SimStagesTable from '@/outside/components/simStages/SimStagesTable.vue'
import UiLink from '@/app/ui/UiLink.vue'
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import LearningObjectSimStageDialog from '@/outside/components/simStages/LearningObjectSimStageDialog.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'

export default {
  extends: OutsideCommon,
  components: { UiConfirm, LearningObjectSimStageDialog, ZoneLmsInstructionsHeader, ZoneLmsInstructionsElement, SimStagesTable, SeedTimeSplit, UiButton, UiLink, ZoneLmsPageBanner  },
  data () {
    return {
      text: Text.LOBJ_PAGE,
      selectedKey: ''
    }
  },
  computed: {
    ehrData () { return this.$store.getters['seedListStore/seedEhrData']},
    learningObjectId () { return this.$store.getters['assignmentStore/learningObjectId'] },
    learningObject () { return this.$store.getters['assignmentStore/learningObject'] || {} },
    simStages () { return this.$store.getters['assignmentStore/simStages'] || [] }
  },
  methods: {
    deleteRow (rowIndex) {
      let stage = this.simStages[rowIndex]
      this.$refs.confirmDelete.showDialog('Delete', 'Delete ' + stage.simKey, rowIndex)
    },
    proceedDeleteRow (rowIndex) {
      const newStages = [...this.simStages]
      newStages.splice(rowIndex, 1)
      const payload = {
        lObjId: this.learningObject._id,
        simStages: newStages
      }
      this.$store.dispatch('assignmentStore/updateStages', payload)
    },
    showEditDialog (rowIndex) {
      this.activeEditRowIndex = rowIndex
      const stage = this.simStages[rowIndex]
      this.$refs.simStageDialog.showSimStageDialog({action: 'edit', learningObject: this.learningObject, stage: stage})
    },
    showCreateDialog () {
      this.$refs.simStageDialog.showSimStageDialog({action: 'create', learningObject: this.learningObject})
    },
    stageCreate (stage) {
      const newStages = [...this.simStages]
      newStages.push(stage)
      const payload = {
        lObjId: this.learningObject._id,
        simStages: newStages
      }
      this.$store.dispatch('assignmentStore/updateStages', payload)
    },
    stageUpdate (stage) {
      const newStages = [...this.simStages]
      newStages.splice(this.activeEditRowIndex, 1, stage)
      const payload = {
        lObjId: this.learningObject._id,
        simStages: newStages
      }
      this.$store.dispatch('assignmentStore/updateStages', payload)
    },
    selectRow (rowIndex) {
      console.log('select row ', rowIndex)
      const stage = this.simStages[rowIndex]
      this.selectedKey = stage.simKey
    },
    selectTime ( key) { this.selectedKey = key},
    async loadComponent () {
      const fromRoute = this.$route.query.learningObjectId
      const learningObjectId = fromRoute ? fromRoute : this.learningObjectId
      if (!learningObjectId) {
        const msg = 'Loading of learning object requires an id for an object'
        StoreHelper.setApiError(msg)
        return
      }
      const learningObject = await this.$store.dispatch('assignmentStore/load', learningObjectId)
      await this.$store.dispatch('assignmentStore/loadSimStages', learningObjectId)
      const seedDataId = learningObject.seedDataId
      await this.$store.dispatch('seedListStore/loadSeedContent', seedDataId)
      // console.log('loading LObjSimController Lobj:', learningObject)
      // console.log('loading LObjSimController stages:', this.simStages)
      // console.log('loading LObjSimController seed id:', seedDataId)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.stageButton {
  background-color: $seed-header-colour;
}

</style>
