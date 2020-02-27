<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    h1 Manage seed data
    div(v-show="isDevelopingContent")
      ui-button(v-on:buttonClicked="showCreateDialog") Create new seed
      ui-button(v-on:buttonClicked="downloadAll") Download all
    div(class="seedData-list-body")
      div(class="classlist-body")
        table.table
          thead
            tr
              th(title="Name", style="min-width: 170px") Seed name
              th Version
              th Description
              th Pages with seed data
              th Assignments using this seed
              th
              // th Seed id
          tbody
            tr(v-for="sv in seedDataList", :class="rowClass(sv)")
              td {{sv.name}}
              td {{sv.version}}
              td {{sv.description}}
              td(:title="ehrPages(sv)") {{ limitedPages(sv) }}
              td
                div(v-for="assignment in assignmentList(sv)")
                  ui-link(:name="'assignments'", :params="{assignmentId: assignment._id}") {{ assignment.name }}

              // td {{sv._id}}
              td(v-if="isDevelopingContent && !sv.isDefault",class="seed-actions")
               ui-button(v-on:buttonClicked="downloadSeed(sv)", , v-bind:secondary="true", class="dwn") Download
               ui-button(v-on:buttonClicked="showEditDialog(sv)", v-bind:secondary="true") Edit description
               ui-button(v-on:buttonClicked="gotoEhrWithSeed(sv)") View/edit seed
      ui-agree(ref="aggreeDialog")
    ehr-seed-data-dialog(ref="theDialog", @showDialog="showDialog")
</template>

<script>
import BreadCrumb from './BreadCrumb'
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
import UiAgree from '../../app/ui/UiAgree.vue'
import EhrSeedDataDialog from './EhrSeedDataDialog'
import StoreHelper from '../../helpers/store-helper'
import EventBus from '../../helpers/event-bus'
import { downloadSeedToFile, downObjectToFile } from '../../helpers/ehr-utils'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'EhrSeedDataList',
  components: {
    EhrSeedDataDialog,
    UiButton,
    UiLink,
    UiAgree,
    BreadCrumb
  },
  data () {
    return {
      aSeed: {},
      errorMesageList: [],
      dialogHeader: '',
      actionType: '',
      seedId: '',
    }
  },
  props: {},
  computed: {
    seedDataList () {
      return StoreHelper.getSeedDataList()
    },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === this.$route.params.seedId
      return selected ? 'selected' : ''
    },
    assignmentList: function (seed) {
      let assList = StoreHelper.getAssignmentsList(this)
      let filtered = assList.filter( a => a.seedDataId === seed._id)
      return filtered
    },
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
    limitedPages (sv) {
      if(sv.ehrData) {
        const keys = Object.keys(sv.ehrData)
        if (keys.length > 1) {
          return `${ keys.slice(0, 1).join(', ') }...`
        } else {
          return keys.join(', ')
        }
      }
    },
    downloadSeed (sv) {
      this.seedId = sv._id
      // console.log('download seed for ', this.seedId)
      let sSeedContent = this.findSeed(this.seedId)
      let data = sSeedContent.ehrData
      downloadSeedToFile(this.seedId, sSeedContent, data)
    },
    downloadAll () {
      let sdList = this.seedDataList
      // console.log('Download all seeds starting with list', sdList)
      let filtered = sdList.filter( (seed) => !seed.isDefault)
      // console.log('Download filtered', filtered)
      downObjectToFile('EdEHR-seed-list.json', filtered)
    },
    gotoEhrWithSeed (sv) {
      const _this = this
      this.seedId = sv._id
      // NB StoreHelper.isDevelopingContent === true
      // Here is where the user starts editing a seed.
      return StoreHelper.loadSeed(sv._id)
        .then(() => {
          // console.log('route to demographics page with seed', this.seedId)
          _this.$router.push({ name: 'demographics' })
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
        })
    },
    showEditDialog (sv) {
      this.$refs.theDialog.showDialog(sv)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
    showDialog: function (title, msg) {
      this.$refs.aggreeDialog.showDialog(title, msg)
    }
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
  td.seed-actions {
    min-width: 480px;
    padding-right: 0;

    button.button {
      margin-bottom: 0;
    }
  }
}
</style>
