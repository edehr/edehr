<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    bread-crumb(currentPage="developEhrData")
    h1 EHR Assignment Seed Data
    div
      ui-button(v-on:buttonClicked="showCreateDialog") Create new seed
    div(class="seedData-list-body")
      div(class="classlist-body")
        table.table
          thead
            tr
              th Name
              th Version
              th Description
              // th Seed Id
          tbody
            tr(v-for="sv in seedDataList")
              td {{sv.name}}
              td {{sv.version}}
              td {{sv.description}}
              // td {{sv._id}}
              td(class="seed-actions")
               ui-button(v-on:buttonClicked="uploadSeed(sv)", v-bind:secondary="true") Upload
               ui-button(v-on:buttonClicked="downloadSeed(sv)", , v-bind:secondary="true", class="dwn") Download
               ui-button(v-on:buttonClicked="showEditDialog(sv)", v-bind:secondary="true") Edit
               ui-button(v-on:buttonClicked="gotoEhrWithSeed(sv)") View
      ui-agree(ref="aggreeDialog")
      input(id="fileUploadInput", ref="fileUploadInput", type="file", accept="application/json", style="display:none", @change="importSeedFile")
    app-dialog(:isModal="true", ref="theDialog",  @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="aSeed.name")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Version
                input(class="input", type="text", v-model="aSeed.version")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              label Description
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="aSeed.description")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              label EHR Data
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="aSeed.ehrData")
          div(v-show="errorMesageList.length > 0", class="errorMesageList")
            li(v-for="error in errorMesageList") {{ error }}

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'
import UiAgree from '../../app/ui/UiAgree.vue'
import EventBus from '../../helpers/event-bus'
import { setApiError, validateSeed, downloadSeedToFile } from '../../helpers/ehr-utills'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
import BreadCrumb from './BreadCrumb'

export default {
  name: 'EhrSeedDataList',
  components: {
    AppDialog,
    UiButton,
    UiAgree,
    BreadCrumb
  },
  data () {
    return {
      aSeed: {},
      errorMesageList: [],
      dialogHeader: '',
      actionType: '',
      seedId: ''
    }
  },
  props: {},
  computed: {
    seedDataList () {
      return this.$store.state.seedStore.seedDataList
    }
  },
  methods: {
    findSeed: function (id) {
      return this.seedDataList.find(e => {
        return e._id === id
      })
    },
    loadSeedDataList () {
      return this.$store.dispatch('seedStore/loadSeedDataList')
    },
    uploadSeed (sv) {
      this.seedId = sv._id
      this.currentSeed = this.findSeed(this.seedId)
      // console.log('upload seed for ', this.currentSeed)
      this.$refs.fileUploadInput.click()
    },
    importSeedFile: function (event) {
      const _this = this
      const file = event.target.files[0]
      const reader = new FileReader()
      _this.$store.commit('system/setLoading', true)
      reader.onload = (function (event) {
        let contents = event.target.result
        let {seedObj, invalidMsg} = validateSeed(contents)
        if(invalidMsg) {
          let msg = 'Upload ' + file.name + ' failed: ' + invalidMsg
          setApiError(_this.$store, msg)
          _this.$store.commit('system/setLoading', false)
          return
        }
        let payload = {
          id: _this.seedId,
          ehrData: seedObj
        }
        return _this.$store.dispatch('seedStore/updateSeedEhrData', payload).then(() => {
          let title = _this.currentSeed.name + ' has new seed data'
          let msg = 'New seed data has been imported from file: ' + file.name
          _this.$refs.aggreeDialog.showDialog(title, msg)
          _this.$store.commit('system/setLoading', false)
        })
      })
      reader.readAsText(file)
    },
    downloadSeed (sv) {
      this.seedId = sv._id
      // console.log('download seed for ', this.seedId)
      let sSeedContent = this.findSeed(this.seedId)
      let data = sSeedContent.ehrData
      downloadSeedToFile(this.seedId, sSeedContent, data)
    },
    gotoEhrWithSeed (sv) {
      const _this = this
      this.seedId = sv._id
      // console.log('gotoEhrWithSeed with seed id', value, this.seedId)
      this.$store.commit('visit/setIsDevelopingContent', true)
      this.$store.commit('seedStore/setSeedId', this.seedId)
      this.$store.dispatch('seedStore/loadSeedContent').then(() => {
        // console.log('go to demographics')
        _this.$router.push({ name: 'demographics' })
        EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      })
    },
    showEditDialog (sv) {
      this.seedId = sv._id
      // console.log('showEditDialog with seed id', this.seedId)
      // clone to decouple data from storage before using in dialog
      this.errorMesageList = []
      let sData = Object.assign({}, this.findSeed(this.seedId))
      this.actionType = 'edit'
      this.aSeed = sData
      this.aSeed.ehrData = JSON.stringify(this.aSeed.ehrData, null, 2)
      console.log('what is in aSeed', this.aSeed)
      this.dialogHeader = 'Edit seed data properties'
      this.$refs.theDialog.onOpen()
    },
    showCreateDialog: function () {
      this.aSeed = { version: '1.0', ehrData: '{}' }
      this.errorMesageList = []
      this.actionType = 'create'
      this.dialogHeader = 'Create a new seed for assignments'
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      // console.log('saveDialog ', this.actionType, this.aSeed)
      let theData = this.aSeed
      theData.toolConsumer = this.$store.state.visit.sVisitInfo.toolConsumer._id
      // console.log(`Convert seed data field '${theData}' into an object`)
      try {
        theData.ehrData = JSON.parse(theData.ehrData)
      } catch(error) {
        this.errorMesageList.push('Error parsing the ehr data ' + error)
        return
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === 'edit') {
        console.log('Seed Data saving ', theData)
        let dataIdPlusPayload = { id: this.seedId, payload: theData }
        this.$store.dispatch('seedStore/updateSeedItem', dataIdPlusPayload)
      } else if (this.actionType === 'create') {
        // console.log('Seed Data saving ', this.aSeed)
        this.$store.dispatch('seedStore/createSeedItem', theData)
      }
    }
  },
  mounted: function () {
    this.loadSeedDataList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.seedData-list {
  padding: 0;
}
.seedData-list-header {
  background-color: $grey03;
  margin-bottom: 0;

  .header-column {
    padding: 1rem 1.5rem;
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
  }
}

.seedData-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;

  .classlist-header {
    padding: 0.5rem 1.5rem;
    background-color: $grey10;
    border: 1px solid $grey20;
    box-sizing: border-box;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem 1.5rem;
    background-color: $white;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table {
    overflow: hidden;
    width: 100%;
  }
  .seed-actions .button{
    margin-right: 0.5rem;
  }
  .seed-actions .button:last-of-type {
    margin-right: 0;
  }
}
</style>
