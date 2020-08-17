<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    app-dialog(
      :isModal="true", 
      ref="theDialog",  
      @cancel="cancelDialog", 
      @save="saveDialog", 
      :disableSave="disableSave",
      has-left-button
    )
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="ehr-group-wrapper grid-left-to-right-2")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="name", v-validate="nameValidate")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Version
                input(class="input", type="text", v-model="version")
          div(class="ehr-group-wrapper grid-left-to-right-1")
            div(class="form-element")
              label Description
              textarea(class="textarea", v-model="description")
          div(class="ehr-group-wrapper grid-left-to-right-1")
            div(class="form-element")
              label Contributors
              input(class="input", type="text", v-model="contributors")
          div
            div(v-if="file")
              div Selected EHR seed file: {{file.name}}
              div(v-if="uploadError", class="errorMessage") {{uploadError}}
              div(v-if="hasUploadSeed")
                div Version: {{uploadSeed.version}}
                div License: {{uploadSeed.license}}
                div Original Name: {{uploadSeed.name}}
                div Pages: {{ uploadSeedPages }}
            label(class="file-label")
              input(
                class="file-input"
                type="file",
                id="fileUploadInput",
                accept="application/json",
                ref="fileUploadInput",
                @change="setFile"
              )
              span(class="file-cta")
                span(class="file-label button is-primary")  {{ hasUploadSeed ? 'Change File' : 'Upload Seed' }}


</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton.vue'
import { readFile, validateSeedFileContents } from '../../helpers/ehr-utils'

const TITLES = {
  edit: 'Edit seed data properties',
  create: 'Create a new seed for assignments'
}
const ERRORS = {
  NAME_REQUIRED: 'Seed name is required',
  EHR_REQUIRED: 'Seed EHR data seed is required'
}

const EDIT_ACTION= 'edit'
const CREATE_ACTION = 'create'

export default {
  name: 'EhrSeedDataList',
  components: { AppDialog, UiButton },
  data () {
    return {
      name: '',
      version: '',
      contributors: '',
      description: '',
      ehrData: {},
      ehrDataString: '',
      actionType: '',
      seedId: '',
      file: null,
      upload: false,
      uploadSeed: {},
      uploadError: ''
    }
  },
  props: {},
  computed: {
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    disableSave () {
      return !!(this.nameValidate || this.uploadError)
    },
    nameValidate () {
      let v = this.name.length > 0
      return v ? undefined : ERRORS.NAME_REQUIRED
    },
    hasUploadSeed () {
      return Object.keys(this.uploadSeed).length > 0
    },
    uploadSeedPages () {
      let result = []
      if (this.uploadSeed.ehrData) {
        result = Object.keys(this.uploadSeed.ehrData)
      }
      return result.join(', ')
    },
    userName () {
      return StoreHelper.fullName()
    }
  },
  methods: {
    clearInputs: function () {
      this.selectedSeed
        = this.actionType
        = this.name
        = this.version
        = this.description
        = this.contributors
        = this.seedId = ''
      this.ehrData = {}
      this.file = null
      this.uploadSeed = {}
      this.uploadError = ''
    },
    showDialog (seedData) {
      this.clearInputs()
      if (seedData) {
        this.actionType = EDIT_ACTION
        this.name = seedData.name
        this.version = seedData.version
        this.contributors = seedData.contributors
        this.ehrData = seedData.ehrData
        this.description = seedData.description
        this.seedId = seedData._id
      } else {
        this.actionType = CREATE_ACTION
        this.version = '1.0'
        this.ehrData = {}
      }
      if (! this.contributors || !this.contributors.includes(this.userName)) {
        console.log(this.contributors, this.userName)
        let list = this.contributors.split(', ')
        list.push(this.userName)
        let contribs = list.join(', ')
        console.log('update contributors', contribs)
        this.contributors = contribs
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      let seedData = {
        name: this.name,
        version: this.version,
        description: this.description,
        contributors: this.contributors,
        ehrData: this.ehrData,
        toolConsumer: StoreHelper.toolConsumerId(this)
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        await StoreHelper.updateSeed(this, this.seedId, seedData)
      } else if (this.actionType === CREATE_ACTION) {
        await StoreHelper.createSeed(this, seedData)
      }
    },
    setFile (event) {
      this.uploadSeed = {}
      this.uploadError = ''
      const file = event.target.files[0]
      this.upload = true
      this.file = file
      readFile(file).then( (contents) => {
        let {seedObj, invalidMsg} = validateSeedFileContents(contents)
        if (invalidMsg) {
          this.uploadError = invalidMsg
        } else {
          this.uploadSeed = seedObj
          this.ehrData = seedObj.ehrData
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.file-label {
  margin-bottom: 1px !important;
}
</style>
