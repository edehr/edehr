<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    bread-crumb(currentPage="developEhrData")
    h1 EHR assignment seed data
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
              th EHR Pages
              th Assignments
              // th Seed Id
          tbody
            tr(v-for="sv in seedDataList")
              td {{sv.name}}
              td {{sv.version}}
              td {{sv.description}}
              td {{ ehrPages(sv) }}
              td {{ sv.aList }}
              // td {{sv._id}}
              td(v-if="!sv.isDefault",class="seed-actions")
               ui-button(v-on:buttonClicked="uploadSeed(sv)", v-bind:secondary="true") Upload
               ui-button(v-on:buttonClicked="downloadSeed(sv)", , v-bind:secondary="true", class="dwn") Download
               ui-button(v-on:buttonClicked="showEditDialog(sv)", v-bind:secondary="true") Edit
               ui-button(v-on:buttonClicked="gotoEhrWithSeed(sv)") View
      ui-agree(ref="aggreeDialog")
      input(id="fileUploadInput", ref="fileUploadInput", type="file", accept="application/json", style="display:none", @change="importSeedFile")
    ehr-seed-data-dialog(ref="theDialog")
</template>

<script>
import BreadCrumb from './BreadCrumb'
import UiButton from '../../app/ui/UiButton.vue'
import UiAgree from '../../app/ui/UiAgree.vue'
import EhrSeedDataDialog from './EhrSeedDataDialog'
import StoreHelper from '../../helpers/store-helper'
import EventBus from '../../helpers/event-bus'
import { setApiError, readFile, importSeedData, downloadSeedToFile } from '../../helpers/ehr-utils'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

const TEXT = {
  AGREE_TITLE: (seedName) => `${seedName} has new seed data`,
  AGREE_MSG: (fileName) => `New seed data has been imported from file: ${fileName}`,
  FAIL_IMPORT: (fileName, msg) => `Upload ${fileName} failed: ${msg}`
}

export default {
  name: 'EhrSeedDataList',
  components: {
    EhrSeedDataDialog,
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
      let sdList = StoreHelper.getSeedDataList(this)
      let assList = StoreHelper.getAssignmentsList(this)
      sdList.forEach(seed => {
        let filtered = assList.filter( a => a.seedDataId === seed._id)
        let aList = filtered.map( a => a.name )
        seed.aList = aList.join(', ')
      })
      return sdList
    }
  },
  methods: {
    findSeed: function (id) {
      return this.seedDataList.find(e => {
        return e._id === id
      })
    },
    ehrPages ( sv) {
      let pages = ''
      if ( sv.ehrData ) {
        let keys = Object.keys(sv.ehrData)
        pages = keys.join(', ')
      }
      return pages
    },
    loadSeedDataList () {
      StoreHelper.loadAssignmentAndSeedLists(this)
    },
    uploadSeed (sv) {
      this.seedId = sv._id
      this.currentSeed = this.findSeed(this.seedId)
      // console.log('upload seed for ', this.currentSeed)
      this.$refs.fileUploadInput.click()
    },
    importSeedFile (event) {
      const component = this
      const seedId = this.seedId
      const seedName = this.currentSeed.name
      const dialog = this.$refs.aggreeDialog
      const file = event.target.files[0]
      const fileName = file.name
      StoreHelper.setLoading(component, true)
      return readFile().then( (contents) => {
        return importSeedData(component, seedId, contents)
          .then(result => {
            let title = TEXT.AGREE_TITLE(seedName)
            let msg = TEXT.AGREE_MSG(fileName)
            dialog.showDialog(title, msg)
            StoreHelper.setLoading(component, false)
          })
          .catch( err => {
            setApiError(component, TEXT.FAIL_IMPORT(fileName, err))
            StoreHelper.setLoading(component, false)
          })
      })
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
      this.$store.commit('seedStore/setSeedId', this.seedId)
      this.$store.dispatch('seedStore/loadSeedContent').then(() => {
        // console.log('go to demographics')
        _this.$router.push({ name: 'demographics' })
        EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      })
    },
    showEditDialog (sv) {
      this.$refs.theDialog.showDialog(sv)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
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
  .seed-actions {
    min-width: 340px;

    .button {
      margin-right: 0.5rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
