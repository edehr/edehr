<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    h1 Seed Data
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
              th Seed Id
          tbody
            tr(v-for="sv in seedDataList")
              td {{sv.name}}
              td {{sv.version}}
              td {{sv.description}} {{sv}}
              td {{sv._id}}
              td
               ui-button(v-on:buttonClicked="uploadSeed", :value="sv._id")
                  fas-icon(icon="upload")
              td
               ui-button(v-on:buttonClicked="downloadSeed", :value="sv._id")
                  fas-icon(icon="download")
              td
                ui-button(v-on:buttonClicked="showEditDialog", :value="sv._id")
                  fas-icon(icon="edit")
              td
                ui-button(v-on:buttonClicked="gotoEhrWithSeed", :value="sv._id")
                  fas-icon(icon="notes-medical")
      ui-agree(ref="aggreeDialog")
      input(id="fileUploadInput", ref="fileUploadInput", type="file", accept="application/json", style="display:none", @change="importSeedFile")
    app-dialog( v-if="showingDialog", :isModal="true", @cancel="cancelDialog", @save="saveDialog")
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

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'
import UiAgree from '../../app/ui/UiAgree.vue'
import EventBus from '../../helpers/event-bus'
import { setApiError, validateSeed, downloadSeedToFile } from '../../helpers/ehr-utills'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'EhrSeedDataList',
  components: {
    AppDialog,
    UiButton,
    UiAgree
  },
  data() {
    return {
      showingDialog: false,
      aSeed: {},
      dialogHeader: '',
      actionType: '',
      seedId: ''
    }
  },
  props: {},
  computed: {
    seedDataList() {
      return this.$store.state.seedStore.seedDataList
    }
  },
  methods: {
    findSeed: function(id) {
      return this.seedDataList.find(e => {
        return e._id === id
      })
    },
    loadSeedDataList() {
      return this.$store.dispatch('seedStore/loadSeedDataList')
    },
    uploadSeed: function(event, value) {
      this.seedId = value
      this.currentSeed = this.findSeed(this.seedId)
      // console.log('upload seed for ', this.currentSeed)
      this.$refs.fileUploadInput.click()
    },
    importSeedFile: function(event) {
      const _this = this
      const file = event.target.files[0]
      const reader = new FileReader()
      _this.$store.commit('system/setLoading', true)
      reader.onload = (function(event) {
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
    downloadSeed: function (event, seedId) {
      let sSeedContent = this.$store.state.seedStore.sSeedContent
      let data = this.$store.getters['seedStore/seedEhrData']
      downloadSeedToFile(seedId, sSeedContent, data)
    },
    gotoEhrWithSeed: function(event, value) {
      const _this = this
      this.seedId = value //event.target.value
      // console.log('gotoEhrWithSeed with seed id', value, this.seedId)
      this.$store.commit('visit/setIsDevelopingContent', true)
      this.$store.commit('seedStore/setSeedId', this.seedId)
      this.$store.dispatch('seedStore/loadSeedContent').then(() => {
        // console.log('go to demographics')
        _this.$router.push({ name: 'demographics' })
        EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      })
    },
    showEditDialog: function(event, value) {
      this.seedId = value //event.target.value
      // console.log('showEditDialog with seed id', event.target, this.seedId)
      // clone to decouple data from storage before using in dialog
      let sData = Object.assign({}, this.findSeed(this.seedId))
      this.actionType = 'edit'
      this.aSeed = sData
      this.aSeed.ehrData = JSON.stringify(this.aSeed.ehrData, null, 2)
      this.dialogHeader = 'Edit seed data properties'
      this.showingDialog = true
    },
    showCreateDialog: function() {
      this.aSeed = {}
      this.actionType = 'create'
      this.dialogHeader = 'Create a new seed for assignments'
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.showingDialog = false
    },
    saveDialog: function() {
      // console.log('saveDialog ', this.actionType, this.aSeed)
      let theData = this.aSeed.ehrData || '{}'
      // console.log(`Convert seed data field '${theData}' into an object`)
      this.aSeed.ehrData = JSON.parse(theData)
      this.showingDialog = false
      if (this.actionType === 'edit') {
        // console.log('Seed Data saving ', this.aSeed)
        let dataIdPlusPayload = { id: this.seedId, payload: this.aSeed }
        this.$store.dispatch('seedStore/updateSeedItem', dataIdPlusPayload)
      } else if (this.actionType === 'create') {
        // console.log('Seed Data saving ', this.aSeed)
        this.$store.dispatch('seedStore/createSeedItem', this.aSeed)
      }
    }
  },
  mounted: function() {
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
}
</style>
