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
              textarea(class="textarea",v-model="description")
          div(v-if="showAdvanced", class="ehr-group-wrapper grid-left-to-right-1")
            div(class="form-element")
              label EHR Data
              textarea(class="textarea",v-model="ehrDataString", v-validate="ehrValidate")
          input(id="fileUploadInput", ref="fileUploadInput", type="file", accept="application/json", style="display:none", @change="setFile")
      ui-button(slot="left-button", v-on:buttonClicked="handleUpload", v-bind:secondary="true") Upload
      
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton.vue'
import { setApiError, readFile, importSeedData } from '../../helpers/ehr-utils'

const TEXT = {
  AGREE_TITLE: (seedName) => `${seedName} has new seed data`,
  AGREE_MSG: (fileName) => `New seed data has been imported from file: ${fileName}`,
  FAIL_IMPORT: (fileName, msg) => `Upload ${fileName} failed: ${msg}`
}

const TITLES = {
  edit: 'Edit seed data properties',
  create: 'Create a new seed for assignments'
}
const ERRORS = {
  NAME_REQUIRED: 'Seed name is required',
  EHR_REQUIRED: 'Seed EHR data seed is required',
  EHR_INVALID: (msg) => `Seed EHR data seed is invalid. ${msg}`
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
      description: '',
      ehrData: {},
      ehrDataString: '',
      actionType: '',
      seedId: '',
      showAdvanced: false,
      file: null,
      upload: false
    }
  },
  props: {},
  computed: {
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    disableSave () {
      return !!(this.nameValidate || this.ehrValidate)
    },
    nameValidate () {
      let v = this.name.length > 0
      return v ? undefined : ERRORS.NAME_REQUIRED
    },
    ehrValidate () {
      if (this.ehrDataString.length === 0) {
        return {valid:'false', text: ERRORS.SEED_REQUIRED}
      }
      let msg
      try {
        JSON.parse(this.ehrDataString)
      } catch(error) {
        msg = error.message
      }
      return msg ? ERRORS.EHR_INVALID(msg) : undefined
    }
  },
  methods: {
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
    saveDialog: async function () {
      let seedData = {
        name: this.name,
        version: this.version,
        description: this.description,
        toolConsumer: StoreHelper.toolConsumerId(this)
      }
      seedData.ehrData = JSON.parse(this.ehrDataString)
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        await StoreHelper.updateSeed(this, this.seedId, seedData)
      } else if (this.actionType === CREATE_ACTION) {
        const prevSeedList = StoreHelper.getSeedDataList().map(d=>JSON.stringify(d))
        const currSeedList = await StoreHelper.createSeed(this, seedData)
        const createdSeed = currSeedList.find(s => !prevSeedList.includes(JSON.stringify(s)))
        this.seedId = createdSeed._id
      }
      if (this.upload) {
        this.importSeedFile()
      }
    },
    handleUpload: function () {   
      this.currentSeed = StoreHelper.getSeedDataList().find(e => 
        e._id === this.seedId
      )
      this.$refs.fileUploadInput.click()
    },
    setFile (event) {
      this.file = event.target.files[0]
      this.upload = true
      this.$refs.fileUploadInput.value = null
    },
    importSeedFile () {
      const component = this
      const seedId = this.seedId
      const seedName = this.name
      const file = this.file
      const fileName = file.name
      StoreHelper.setLoading(component, true)
      return readFile(file).then( (contents) => {
        return importSeedData(component, seedId, contents)
          .then(result => {
            let title = TEXT.AGREE_TITLE(seedName)
            let msg = TEXT.AGREE_MSG(fileName)
            this.$emit('showDialog', title, msg)
            this.upload = false
            StoreHelper.setLoading(component, false)
          })
          .catch( err => {
            setApiError(TEXT.FAIL_IMPORT(fileName, err))
            StoreHelper.setLoading(component, false)
          })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
//@import '../../scss/definitions';
</style>
