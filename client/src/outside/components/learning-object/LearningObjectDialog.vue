<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="top-row")
            div
              label {{cText.nameLabel}}
              input(type="text", v-model="assignmentName", v-validate="nameValidate")
            div
              label(:title="labelText.LOBJ_ID_TP") {{labelText.LOBJ_ID}}
              input(:disabled="!enableExternalIdEdit", type="text", v-model="externalId", v-validate="externalValidate")
            div
              label(:title="labelText.SEED_OBJ_TP")  {{labelText.SEED_OBJ}}
              select(v-model="selectedSeed", v-validate="seedValidate")
                option(value="")
                option(v-for="seed in seedOptionList", :value="seed.id", :selected="seed.selected") {{ seed.name}} {{seed.selected}}
          div
            label {{labelText.DESCRIPTION}}
            textarea(v-model="description")
          div(v-if="showPersona")
            hr
            h3(:title="labelText.SIM_DATA_TIP") {{labelText.SIM_DATA_TITLE }}
            div(class="grid-left-to-right-2")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label(:title="labelText.PERSONA_TP")  {{labelText.PERSONA}}
                  input(class="input text-input", type="text", v-model="persona")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label(:title="labelText.PROFESSION_TP")  {{labelText.PROFESSION}}
                  select(v-model="profession")
                    option(value="")
                    option(v-for="pr in professions", :value="pr" ) {{ pr }}
              div(class="form-element")
                div(class="input-element input-element-full")
                  label(:title="labelText.DAY_TP")  {{labelText.DAY}}
                  input(class="input text-input", type="number", v-model="day", min="0")
              div(class="form-element")
                div(class="input-element input-element-full")
                  label(:title="labelText.TIME_TP")  {{ labelText.TIME }}
                  input(class="input text-input", type="text", v-model="time")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'
import { validTimeStr } from '@/helpers/ehr-utils'
import { Text, TextLearningObjects } from '@/helpers/ehr-text'
const TITLES = Text.LOBJ_DIALOG.TITLES
const ERRORS = Text.LOBJ_DIALOG.ERRORS
const LABELS = Text.LOBJ_DIALOG.LABELS
const EDIT_ACTION = 'edit'
const CREATE_ACTION = 'create'
export default {
  data () {
    return {
      assignmentName: '', externalId: '', ehrRoutePath: '', description: '',
      actionType: '',
      assignmentId: '',
      labelText: LABELS,
      selectedSeed: '',
      enableExternalIdEdit: true,
      inUseIds: [],
      showAdvanced: false,
      professions: [
        'Doctor',
        'Nurse',
        'Pharmacist'
      ],
      persona: '',
      profession: '',
      day: '',
      time: '',
      showPersona: false // persona is in prototype stage
    }
  },
  components: { AppDialog },
  computed: {
    cText () { return TextLearningObjects },
    nameValidate () {
      return this.assignmentName.trim() ? undefined :  ERRORS.NAME_REQUIRED
    },
    timeValidate () {
      if (this.showPersona && this.time && this.time.length > 0) {
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
      let re = /^[0-9a-zA-Z\-_\.]*$/
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
      let assList = StoreHelper.getAssignmentsList()
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
        let cnt = assignmentData.activityCount
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
      console.log('save learning object', aAssignment)
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

<style lang="scss" scoped>
@import '../../../scss/definitions';
.top-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  div {
    margin-right: 1rem;
  }
  div:last-child {
    margin: 0
  }
}

.top-row div label,
.top-row div input {
  display: block;
  width: 100%;
}

@media screen and (max-width: $dialog-width-threshold){
  .top-row {
    grid-template-columns: 1fr;
  }
}
</style>
