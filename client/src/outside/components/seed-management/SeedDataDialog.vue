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
        ui-button(
          class="explain-button",
          secondary=true,
          @buttonClicked="showEx = !showEx")
          span {{showEx ? 'Hide the explanation ' : 'Tell me about this dialog'}} &nbsp;
        div  &nbsp;
          div(class="dialog-step")
            div(class="dialog-item")
              label(class="name-label") Name
              input(class="input", type="text", v-model="name", v-validate="nameValidate")
          dialog-instructions-element(:show-ex="showEx") Recommend using the simulated patient name as part of the case study name.

          div(class="dialog-step")
            div(class="dialog-item")
              label(class="version-label") Version
              input(class="input version-input", type="text", v-model="version")
          dialog-instructions-element(:show-ex="showEx") Use the version to indicate if this case study has evolved from an earlier version.  E.g. v 2.0 would say this case study has changed a lot since the orginal was created.


          div(class="dialog-step")
            div(class="dialog-item")
              label Application type &nbsp;
              app-type-radio(:value="checkAppTypes", @changeAppTypes='changeAppTypes')
          dialog-instructions-element(:show-ex="showEx")  Does this case study apply to clinical setting (EHR) or the laboratory (LIS)?

          div(class="dialog-step")
            div(class="dialog-item")
              label(class="tags-label") Tags
              app-tag-list-editor(:tagList="tagList", @update='updateTagList')
          dialog-instructions-element(:show-ex="showEx")  Use tags to categorize case studies.

          div(class="dialog-step")
            div(class="dialog-item")
              label Description
              textarea(v-model="description")
          dialog-instructions-element(:show-ex="showEx") This description is for you and other content creators to know what the case study is for.

          div(class="dialog-step")
            div(class="dialog-item")
              label Contributors
              input(class="input", type="text", v-model="contributors")
          dialog-instructions-element(:show-ex="showEx") A list of people who contributed to the EHR content.

          div(class="dialog-step")
            div(class="dialog-item")
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
          dialog-instructions-element(:show-ex="showEx") If you have a Case Study file that you or someone else saved then you can import the contents here.  It is a great idea to periodically save your case study work in case you need to go back to an earlier version.

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper, { APP_TYPE_EHR } from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo'
import { readFile, validateSeedFileContents } from '@/helpers/ehr-utils'
import AppTagListEditor from '@/app/components/AppTagListEditor.vue'
import AppTypeRadio from '@/app/components/AppTypeRadio.vue'
import DialogInstructionsElement from '@/outside/components/DialogInstructionsElement.vue'

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
  components: { DialogInstructionsElement, AppTypeRadio,  AppTagListEditor, AppDialog, UiButton, UiInfo },
  data () {
    return {
      checkAppTypes: 'EHR',
      showEx: false, // default to not show help text.
      name: '',
      version: '',
      contributors: '',
      description: '',
      ehrData: {},
      ehrDataString: '',
      actionType: '',
      seedId: '',
      seedFile: null,
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
        'Will use the electronic health record (EHR) application.' :
        'Will use the lab information system (LIS) application.'
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    disableSave () {
      return !!(this.nameValidate || this.uploadError)
    },
    isEHR_Showing () {
      return APP_TYPE_EHR === this.checkAppTypes
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
    changeAppTypes (checkAppTypes) {
      this.checkAppTypes = checkAppTypes
    },
    clearInputs: function () {
      this.ehrData = {}
      this.seedFile = null
      this.uploadSeed = {}
      this.uploadError = ''
    },
    showSeedDataDialog (seedModel) {
      this.clearInputs()
      if (seedModel) {
        const seedData = seedModel.seed
        this.actionType = EDIT_ACTION
        this.checkAppTypes = seedData.appType
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
        appType: this.checkAppTypes,
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
        this.$emit('update')
      } else if (this.actionType === CREATE_ACTION) {
        await StoreHelper.createSeed(this, seedData)
        this.$emit('create')
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
.version-label, .tags-label, .name-label {
  width: 7rem;
}
.version-input {
  width: 10rem;
}

.app-type-section {
  label {
    position: relative;
    top: 5px; // to align with the toggle button
  }
}
</style>
