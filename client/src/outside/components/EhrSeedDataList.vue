<template lang="pug">
  div(id="seedDataList")
    h1 Manage seed data
    div(v-show="isDevelopingContent")
      ui-button(v-on:buttonClicked="showCreateDialog") Create new seed
      ui-button(v-on:buttonClicked="downloadAll") Download all
    div(class="seedData-list-body")
      div(v-for="sv in seedDataList", class="list-element", :class="rowClass(sv)")
        div(class="columns")
          div(class="column is-2")
            div(class="key") Name
            div(class="value") {{sv.name}}
          div(class="column")
            div(class="key") Version
            div(class="value") {{sv.version}}
          div(class="column")
            div(class="key") Created
            div(class="value") {{sv.createDate | formatDateTime}}
          div(class="column")
            div(class="key") Last Update
            div(class="value") {{sv.lastUpdateDate | formatDateTime}}
        div(class="columns")
          div(class="column is-2 key") Description
          div(class="column is-10 value") {{sv.description}}
        div(class="columns")
          div(class="column is-2 key") EHR Pages
          div(class="column is-10 value") {{ehrPages(sv)}}
        div(class="columns")
          div(class="column is-2 key") Assignments
          div(class="column is-10 value")
            span(class="value", v-for="assignment, x in assignmentList(sv)")
              ui-link(:name="'assignments'", :params="{assignmentId: assignment._id}") {{ assignment.name }}
              span(v-if="x+1 < assignmentList(sv).length") &nbsp;,&nbsp;

        // td {{sv._id}}
        div(v-if="isDevelopingContent && !sv.isDefault")
         ui-button(v-on:buttonClicked="duplicateSeed(sv)", secondary, :title="`Make a copy of ${sv.name}`") Duplicate
         ui-button(v-on:buttonClicked="downloadSeed(sv)",  secondary, title="Save a copy on your computer") Download
         ui-button(v-on:buttonClicked="showEditDialog(sv)", secondary, title="Edit seed properties or upload seed content") Properties (upload)
         ui-button(v-on:buttonClicked="gotoEhrWithSeed(sv)", title="Edit the seed content in the EHR") Content (EHR)
      ui-agree(ref="aggreeDialog")
    ehr-seed-data-dialog(ref="theDialog", @showDialog="showDialog")
    ui-confirm(
      ref="confirmDialog",
      @confirm="confirmSeedDuplication",
      @abort="cancelSeedDuplication",
      @cancel="cancelSeedDuplication",
      set-footer
      )
</template>

<script>
import BreadCrumb from './BreadCrumb'
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
import UiAgree from '../../app/ui/UiAgree.vue'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import EhrSeedDataDialog from './EhrSeedDataDialog'
import StoreHelper from '../../helpers/store-helper'
import EventBus from '../../helpers/event-bus'
import { downloadSeedToFile, downObjectToFile } from '../../helpers/ehr-utils'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

const DUPLICATE = {
  TITLE : (name) => `Confirm duplication of ${name}`,
  DESCRIPTION: (name) => `Are you sure you want to duplicate ${name}?`,
}

export default {
  name: 'EhrSeedDataList',
  components: {
    EhrSeedDataDialog,
    UiButton,
    UiLink,
    UiAgree,
    BreadCrumb,
    UiConfirm
  },
  data () {
    return {
      aSeed: {},
      errorMesageList: [],
      dialogHeader: '',
      actionType: '',
      seedId: '',
      duplicatingSeed: {}
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
          const lim = Math.min(8, keys.length)
          return `${ keys.slice(0, lim).join(', ') }...`
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
    },
    duplicateSeed (sv) {
      delete sv._id
      delete sv.createDate
      delete sv.lastUpdateDate
      this.duplicatingSeed = sv
      this.$refs.confirmDialog.showDialog(
        DUPLICATE.TITLE(sv.name), 
        DUPLICATE.DESCRIPTION(sv.name), 
        'Confirm'
      )
    },
    async confirmSeedDuplication () {
      const seed = Object.assign({}, 
        this.duplicatingSeed, {
          name: `COPY OF ${this.duplicatingSeed.name}`,
          createDate: new Date(),
          lastUpdateDate: new Date()
        })
      await StoreHelper.createSeed(this, seed)
    },
    cancelSeedDuplication () {
      this.duplicatingSeed = {}
      this.duplicateDocuments = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.seedData-list-body {
  background-color: $grey10;
}
.list-element {
  padding: 1rem 1.5rem;
  border: 1px solid $grey20;
  box-sizing: border-box;
  overflow: hidden;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}
</style>
