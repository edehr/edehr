<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Assignment name
                input(class="input", type="text", v-model="assignmentName", :class="{ 'is-invalid': !validName }")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label External id
                input(class="input", type="text", v-model="externalId", :class="{ 'is-invalid': !validExternalId }")
            div(class="ehrdfe")
              div(class="input-element")
                label Seed data
                select(v-model="selectedSeed", :class="{ 'is-invalid': !validSeed }")
                  option(value="")
                  option(v-for="seed in seedOptionList", v-bind:value="seed.id", :selected="seed.selected") {{ seed.name}} {{seed.selected}}
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="input-element input-element-full")
                label Description
                textarea(class="textarea",v-model="description")
          div(class="error-listing")
            div(v-for="err in errorList") {{ err }}
          hr
          div(class="technical")
            div {{ assignmentId}}
    ui-confirm(ref="confirmDialog", v-on:confirm="proceedWithSave")

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import StoreHelper from '../../helpers/store-helper'

const TITLES = {
  edit: 'Edit assignment properties',
  create: 'Create a new assignment'
}
const ERRORS = {
  ID_IN_USER: (id) => `ExternalId ${id} is already in use`,
  NAME_REQUIRED: 'Assignment name is required',
  ID_REQUIRED: 'Assignment externalId is required',
  SEED_REQUIRED: 'Assignment EHR data seed is required'
}
const CONFIRM_TITLE = 'Force Save Assignment?'
const CONFIRM_MSG = 'The data you have entered has errors. Are you sure you want to save anyways?'

const EDIT_ACTION= 'edit'
const CREATE_ACTION = 'create'

export default {
  name: 'AssignmentsDialog',
  data () {
    return {
      assignmentName: '', externalId: '', ehrRoutePath: '', description: '',
      actionType: '',
      assignmentId: '',
      selectedSeed: '',
      inUseIds: []
    }
  },
  components: { AppDialog, UiConfirm },
  computed: {
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    nameExists () {
      return this.assignmentName && this.assignmentName.length > 0
    },
    externalIdExists () {
      return this.externalId && this.externalId.length > 0
    },
    uniqueExternalId () {
      let isInuse = this.inUseIds.includes(this.externalId.toLowerCase())
      return this.externalIdExists ? !isInuse : true
    },
    seedExists () {
      return this.selectedSeed && this.selectedSeed.length > 0
    },
    validName () {
      return this.nameExists
    },
    validExternalId () {
      return this.externalIdExists && this.uniqueExternalId
    },
    validSeed () {
      return this.seedExists
    },
    errorList () {
      let errs = []
      if (!this.nameExists) errs.push(ERRORS.NAME_REQUIRED)
      if (!this.externalIdExists) errs.push(ERRORS.ID_REQUIRED)
      if (!this.uniqueExternalId) errs.push(ERRORS.ID_IN_USER(this.externalId))
      if (!this.seedExists) errs.push(ERRORS.SEED_REQUIRED)
      return errs
    },
    seedOptionList () {
      let sdList = StoreHelper.getSeedDataList(this)
      return sdList.map(sd => {
        return { id: sd._id, name: sd.name }
      })
    }
  },
  methods: {
    clearInputs: function () {
      this.selectedSeed
        = this.actionType
        = this.assignmentName
        = this.externalId
        = this.ehrRoutePath
        = this.description
        = this.assignmentId = ''
    },
    showDialog (assignmentData) {
      this.clearInputs()
      let assList = StoreHelper.getAssignmentsList(this)
      this.inUseIds = assList.map(a => a.externalId.toLowerCase())
      this.inUseIds.push('atest')
      if (assignmentData) {
        this.actionType = EDIT_ACTION
        this.assignmentName = assignmentData.name
        this.externalId = assignmentData.externalId
        this.ehrRoutePath = assignmentData.ehrRoutePath
        this.description = assignmentData.description
        this.assignmentId = assignmentData._id
        this.selectedSeed = assignmentData.seedDataId || ''
        this.inUseIds = this.inUseIds.filter( a => a !== this.externalId.toLowerCase())
      } else {
        this.actionType = CREATE_ACTION
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      console.log('saveDialog ', this.actionType, this.aSeed)
      if (this.errorList.length > 0) {
        this.$refs.confirmDialog.showDialog(CONFIRM_TITLE, CONFIRM_MSG)
      } else {
        this.proceedWithSave()
      }
    },
    proceedWithSave: function () {
      let sId = this.selectedSeed && this.selectedSeed.length > 0 ? this.selectedSeed : null
      let aAssignment = {
        name: this.assignmentName,
        externalId: this.externalId,
        description: this.description,
        seedDataId: sId,
        toolConsumer: StoreHelper.toolConsumerId(this)
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        StoreHelper.updateAssignment(this, this.assignmentId, aAssignment)
      } else if (this.actionType === CREATE_ACTION) {
        StoreHelper.createAssignment(this, aAssignment)
      }
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<!--@import '../../scss/definitions';-->
<!--</style>-->
