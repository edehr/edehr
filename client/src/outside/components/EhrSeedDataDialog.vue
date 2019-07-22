<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    app-dialog(:isModal="true", ref="theDialog",  @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") {{dialogHeader}}
      div(slot="body")
        div {{ehrParseMsg}}
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="name", :class="{ 'is-invalid': !validName }")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Version
                input(class="input", type="text", v-model="version")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              label Description
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="description")
          div(v-if="showAdvanced", class="input-fieldrow")
            div(class="ehrdfe")
              label EHR Data
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="ehrDataString", :class="{ 'is-invalid': !validEhr }")
          div(class="error-listing")
            div(v-for="err in errorList") {{ err }}
          hr
          div(class="technical")
            div(v-if="showAdvanced") {{ seedId}}
            div Show Advanced &nbsp;
              input( type="checkbox", v-model="showAdvanced")
    ui-confirm(ref="confirmDialog", v-on:confirm="proceedWithSave")

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import StoreHelper from '../../helpers/store-helper'

const TITLES = {
  edit: 'Edit seed data properties',
  create: 'Create a new seed for assignments'
}
const ERRORS = {
  NAME_REQUIRED: 'Seed name is required',
  EHR_REQUIRED: 'Seed EHR data seed is required',
  EHR_INVALID: (msg) => `Seed EHR data seed is invalid. ${msg}`
}
const CONFIRM_TITLE = 'Force Save EHR Seed?'
const CONFIRM_MSG = 'The data you have entered has errors. Are you sure you want to save anyways?'

const EDIT_ACTION= 'edit'
const CREATE_ACTION = 'create'

export default {
  name: 'EhrSeedDataList',
  components: { AppDialog, UiConfirm },
  data () {
    return {
      name: '',
      version: '',
      description: '',
      ehrData: {},
      ehrDataString: '',
      actionType: '',
      seedId: '',
      showAdvanced: false
    }
  },
  props: {},
  computed: {
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    nameExists () {
      return this.name && this.name.length > 0
    },
    ehrExists () {
      return this.ehrDataString && this.ehrDataString.length > 0
    },
    ehrParseMsg ()  {
      return this.parseEhr().err
    },
    validName () { return this.nameExists },
    validEhr () { return this.ehrExists && this.ehrParseMsg === undefined },
    errorList () {
      let errs = []
      if (!this.nameExists) errs.push(ERRORS.NAME_REQUIRED)
      if (!this.ehrExists) errs.push(ERRORS.EHR_REQUIRED)
      let msg = this.ehrParseMsg
      if (msg) { errs.push(ERRORS.EHR_INVALID(msg)) }
      return errs
    }
  },
  methods: {
    parseEhr () {
      let results = {}
      try {
        results.obj = JSON.parse(this.ehrDataString)
      } catch(error) {
        results.err = error.message
      }
      // console.log('parseEhr', results)
      return results
    },
    clearInputs: function () {
      this.selectedSeed
        = this.actionType
        = this.name
        = this.version
        = this.description
        = this.ehrDataString
        = this.seedId = ''
      this.ehrData = {}
    },
    showDialog (seedData) {
      this.clearInputs()
      if (seedData) {
        this.actionType = EDIT_ACTION
        this.name = seedData.name
        this.version = seedData.version
        this.ehrData = seedData.ehrData
        this.description = seedData.description
        this.seedId = seedData._id
      } else {
        this.actionType = CREATE_ACTION
        this.version = '1.0'
        this.ehrData = {}
      }
      this.ehrDataString = JSON.stringify(this.ehrData, null, 2)
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      // console.log('saveDialog ', this.actionType, this.name)
      if (this.errorList.length > 0) {
        this.$refs.confirmDialog.showDialog(CONFIRM_TITLE, CONFIRM_MSG)
      } else {
        this.proceedWithSave()
      }
    },
    proceedWithSave: function () {
      let seedData = {
        name: this.name,
        version: this.version,
        description: this.description,
        toolConsumer: StoreHelper.toolConsumerId(this)
      }
      let ehr = this.parseEhr()
      if (ehr.obj) {
        seedData.ehrData = ehr.obj
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        StoreHelper.updateSeed(this, this.seedId, seedData)
      } else if (this.actionType === CREATE_ACTION) {
        StoreHelper.createSeed(this, seedData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//@import '../../scss/definitions';
</style>
