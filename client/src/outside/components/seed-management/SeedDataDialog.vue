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
          div(class="grid-left-to-right-2")
            div
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="name", v-validate="nameValidate")
            div
              div(class="text_input_wrapper")
                label Version
                  ui-info(title="Optional versioning", text="You can update the version number to indicate a change in content.")
                input(class="input", type="text", v-model="version")
          div(class="grid-left-to-right-1")
            div
              label Application Type
              app-type-toggle-button(
                :modelValue='isEHR_Showing',
                @change='changeApp',
                labelOn='EHR'
                labelOff='LIS'
              )
              div {{ appTypeDescriptionText }}
          div(class="grid-left-to-right-1")
            div
              label Tags
                ui-info(title="Tags", :html="tagHelperText")
              app-tag-list-editor(:tagList="tagList", @update='updateTagList')
          div(class="grid-left-to-right-1")
            div
              label Description
              textarea(class="textarea", v-model="description")
          div(class="grid-left-to-right-1")
            div
              label Contributors
                ui-info(title="Contributors", text="A list of people who contributed to the EHR content.")
              input(class="input", type="text", v-model="contributors")
          div
            div(v-if="seedFile")
              div Selected EHR seed file: {{seedFile.name}}
              div(v-if="uploadError", class="errorMessage") {{uploadError}}
              div(v-if="hasUploadSeed")
                div Version: {{uploadSeed.version}}
                div License: {{uploadSeed.license}}
                div Original Name: {{uploadSeed.name}}
                div Tags: {{ uploadSeed.tagList}}
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
              span(class="file-label button is-primary")  {{ hasUploadSeed ? 'Change File' : 'Optional: Import case study json file.' }}
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo'
import { readFile, validateSeedFileContents } from '@/helpers/ehr-utils'
import AppTagListEditor from '@/app/components/AppTagListEditor.vue'
import AppTypeToggleButton from '@/outside/components/seed-management/AppTypeToggleButton.vue'


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
  components: { AppTypeToggleButton,  AppTagListEditor, AppDialog, UiButton, UiInfo },
  data () {
    return {
      appType: '',
      name: '',
      version: '',
      contributors: '',
      description: '',
      ehrData: {},
      ehrDataString: '',
      actionType: '',
      seedId: '',
      seedFile: null,
      tagHelperText: 'Tags let you categorize case studies.',
      tagList: [],
      upload: false,
      uploadSeed: {},
      uploadError: ''
    }
  },
  props: {},
  computed: {
    appTypeDescriptionText () {
      return this.isEHR_Showing ?
        'User will see electronic health record (EHR) content.' :
        'User will see lab information system (LIS) content.'
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    disableSave () {
      return !!(this.nameValidate || this.uploadError)
    },
    isEHR_Showing () {
      return APP_TYPE_EHR === this.appType
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
        result = result.filter( k => k !== 'meta')
      }
      return result.join(', ')
    },
    userName () {
      return StoreHelper.fullName()
    }
  },
  methods: {
    clearInputs: function () {
      this.ehrData = {}
      this.seedFile = null
      this.uploadSeed = {}
      this.uploadError = ''
    },
    changeApp (event) {
      if (this.isEHR_Showing) {
        this.appType = APP_TYPE_LIS
      } else {
        this.appType = APP_TYPE_EHR
      }
    },
    showDialog (seedModel) {
      this.clearInputs()
      if (seedModel) {
        const seedData = seedModel.seed
        this.actionType = EDIT_ACTION
        this.appType = seedData.appType
        this.name = seedData.name
        this.version = seedData.version
        this.contributors = seedData.contributors || ''
        this.ehrData = seedData.ehrData
        this.description = seedData.description
        this.seedId = seedModel.id
        this.tagList = seedData.tagList
      } else {
        this.actionType = CREATE_ACTION
        this.version = '1.0'
        this.ehrData = {}
        this.tagList = []
      }
      if (!this.contributors.includes(this.userName)) {
        // console.log('adding user to contrib list', this.contributors, this.userName)
        let list = this.contributors.length > 0 ? this.contributors.split(', ') : []
        // console.log('adding user to contrib list', list)
        list.push(this.userName)
        this.contributors = list.join(', ')
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
        appType: this.appType,
        version: this.version,
        description: this.description,
        contributors: this.contributors,
        ehrData: this.ehrData,
        tagList: this.tagList,
        toolConsumer: StoreHelper.getAuthdConsumerId()
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
      this.seedFile = file
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
    updateTagList (newListCsv) {
      this.tagList = newListCsv ? newListCsv.split(',') : []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/definitions';
.file-label {
  margin-bottom: 1px !important;
}
</style>
