<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="ehr-group-wrapper grid-left-to-right-3")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Assignment name
                input(class="input text-input", type="text", v-model="assignmentName", v-validate="nameValidate")
            div(class="form-element")
              div(class="text_input_wrapper")
                label External id
                input(class="input text-input", :disabled="!enableExternalIdEdit", type="text", v-model="externalId", v-validate="externalValidate")
            div(class="form-element")
              div(class="input-element")
                label Seed data
                select(v-model="selectedSeed", v-validate="seedValidate")
                  option(value="")
                  option(v-for="seed in seedOptionList", v-bind:value="seed.id", :selected="seed.selected") {{ seed.name}} {{seed.selected}}
          div(class="ehr-group-wrapper")
            div(class="form-element")
              div(class="input-element input-element-full")
                label Description
                textarea(class="ehr-page-form-textarea",v-model="description")
            hr
            h3 Assignment persona
            div(class="ehr-group-wrapper grid-left-to-right-3")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label Persona
                  input(class="input text-input", type="text", v-model="persona")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label Profession
                  input(class="input text-input", type="text", v-model="profession")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label Case study day
                  input(class="input text-input", type="number", v-model="day", min="0")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label Case study time
                  input(class="input text-input", type="text", v-model="time")
              
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import StoreHelper from '../../helpers/store-helper'
import { validTimeStr } from '../../helpers/ehr-utils'


const TITLES = {
  edit: 'Edit assignment properties',
  create: 'Create a new assignment'
}
const ERRORS = {
  ID_IN_USE: (id) => `ExternalId ${id} is already in use`,
  NAME_REQUIRED: 'Assignment name is required',
  ID_REQUIRED: 'Assignment externalId is required',
  ID_PATTERN: 'External Id needs to contain letters, numbers, hypens or underscores',
  SEED_REQUIRED: 'Assignment EHR data seed is required',
  INVALID_TIME: 'Please, enter a valid 24hrs time'
}

const EDIT_ACTION= 'edit'
const CREATE_ACTION = 'create'

export default {
  data () {
    return {
      assignmentName: '', externalId: '', ehrRoutePath: '', description: '',
      actionType: '',
      assignmentId: '',
      selectedSeed: '',
      enableExternalIdEdit: true,
      inUseIds: [],
      showAdvanced: false,
      persona: '',
      profession: '',
      day: 0,
      time: ''
    }
  },
  components: { AppDialog },
  computed: {
    nameValidate () {
      return this.assignmentName.trim() ? undefined :  ERRORS.NAME_REQUIRED
    },  
    timeValidate () {
      if (this.time.length > 0) {
        return validTimeStr(this.time) ? null : ERRORS.INVALID_TIME
      }
      return null
    },
    seedValidate () {
      return this.selectedSeed.trim() ? undefined :  ERRORS.SEED_REQUIRED
    },
    externalValidate () {
      if (!this.externalId) {
        return ERRORS.ID_REQUIRED
      }
      let re = /^[0-9a-zA-Z\-_]*$/
      if (!this.externalId.match(re)) {
        return ERRORS.ID_PATTERN
      }
      let id = this.externalId.toLowerCase()
      return this.inUseIds.includes(id) ? ERRORS.ID_IN_USE(id) : undefined
    },
    errors () {
      const errmsg = this.nameValidate || this.seedValidate || this.externalValidate || this.timeValidate
      return errmsg ? [errmsg] : []
    },
    disableSave () {
      const errmsg = this.nameValidate || this.seedValidate || this.externalValidate || this.timeValidate
      const isInvalid = !!errmsg
      console.log('errmsg', errmsg)
      return isInvalid
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    seedOptionList () {
      let sdList = StoreHelper.getSeedDataList(this)
      return sdList.map(sd => {
        return { id: sd._id, name: sd.name }
      })
    },
    hasAdvanced () {
      return this.actionType === EDIT_ACTION
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
        = this.assignmentId 
        = this.persona
        = this.profession
        = this.day
        = this.time
        = ''
    },
    showDialog (assignmentData) {
      this.clearInputs()
      let assList = StoreHelper.getAssignmentsList(this)
      this.inUseIds = assList.map(a => a.externalId.toLowerCase())
      if (assignmentData) {
        this.actionType = EDIT_ACTION
        this.assignmentName = assignmentData.name
        this.externalId = assignmentData.externalId
        this.ehrRoutePath = assignmentData.ehrRoutePath
        this.description = assignmentData.description
        this.assignmentId = assignmentData._id
        this.selectedSeed = assignmentData.seedDataId || ''
        this.persona = assignmentData.persona
        this.profession = assignmentData.profession
        this.day = assignmentData.day
        this.time = assignmentData.time
        // remove the current assignment id from the list
        this.inUseIds = this.inUseIds.filter( a => a !== this.externalId.toLowerCase())
        let cnt = StoreHelper.activitiesUsingAssignmentCount(this.assignmentId)
        this.enableExternalIdEdit = 0 === cnt
      } else {
        this.actionType = CREATE_ACTION
        this.enableExternalIdEdit = true
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      let sId = this.selectedSeed && this.selectedSeed.length > 0 ? this.selectedSeed : null
      let aAssignment = {
        name: this.assignmentName,
        externalId: this.externalId,
        description: this.description,
        seedDataId: sId,
        toolConsumer: StoreHelper.toolConsumerId(this),
        persona: this.persona, 
        profession: this.profession,
        day: this.day,
        time: this.time
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        return StoreHelper.updateAssignment(this, this.assignmentId, aAssignment)
      } else if (this.actionType === CREATE_ACTION) {
        return StoreHelper.createAssignment( aAssignment)
      }
    }
  }
}
</script>
