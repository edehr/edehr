<template lang="pug">
  div
    div(class="columns")
      div(class="column is-2")
        div(class="key") Name
        div(class="value") {{seed.name}}
      div(class="column")
        div(class="key") Version
        div(class="value") {{seed.version}}
      div(class="column")
        div(class="key") Created
        div(class="value") {{seed.createDate | formatDateTime}}
      div(class="column")
        div(class="key") Last Update
        div(class="value") {{seed.lastUpdateDate | formatDateTime}}
    div(class="columns")
      div(class="column is-2 key") Description
      div(class="column is-10 value") {{seed.description}}
    div(class="columns")
      div(class="column is-2 key") Contributors
      div(class="column is-10 value") {{seed.contributors}}
    div(class="columns")
      div(class="column is-2 key") Contains EHR pages
      div(class="column is-10 value") {{ehrPages(seed)}}
    div(class="columns")
      div(class="column is-2 key") Used by learning objects
      div(class="column is-10 value")
        span(class="value", v-for="(assignment, x) in assignmentList(seed)")
          ui-link(:name="'learning-objects'", :params="{assignmentId: assignment._id}") {{ assignment.name }}
          span(v-if="x+1 < assignmentList(seed).length") &nbsp;,&nbsp;

    div(v-if="isDevelopingContent && !seed.isDefault")
     ui-button(v-on:buttonClicked="duplicateSeed(seed)", secondary, :title="`Make a copy of ${seed.name}`") Duplicate seed
     ui-button(v-on:buttonClicked="downloadSeed(seed)",  secondary, title="Save a copy on your computer") Download seed file
     ui-button(v-on:buttonClicked="showEditDialog(seed)", secondary, title="Edit seed properties or upload seed content") Edit properties and/or upload seed file
     ui-button(v-on:buttonClicked="gotoEhrWithSeed(seed)", title="Edit the seed content in the EHR") Edit seed content (EHR)
     ui-button(v-if="assignmentList(seed).length === 0", v-on:buttonClicked="deleteSeed(seed)", secondary, title="Delete") Delete
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
import UiAgree from '@/app/ui/UiAgree.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { downloadSeedToFile, downObjectToFile } from '@/helpers/ehr-utils'

const DUPLICATE = {
  TITLE : (name) => `Confirm duplication of ${name}`,
  DESCRIPTION: (name) => `Are you sure you want to duplicate ${name}?`,
}

export default {
  components: {
    UiButton,
    UiLink,
    UiAgree,
    UiConfirm
  },
  data () {
    return {
      seedId: '',
      duplicatingSeed: {}
    }
  },
  props: {
    seed: { type: Object }
  },
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
      let assList = StoreHelper.getAssignmentsList()
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
      // NB StoreHelper.isEditingSee === true
      // Here is where the user starts editing a seed.
      return StoreHelper.loadSeed(sv._id)
        .then(() => {
          _this.$router.push({ name: 'ehr', query: { seedEditId: this.seedId } })
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
    deleteSeed (sv) {
      return StoreHelper.deleteSeed(sv._id)
        .then(() => {
          StoreHelper.setLoading(null, true)
          return StoreHelper.loadSeedLists()
        })
        .catch(error => {
          console.log('Sedd Data list delete error', error)
          this.$refs.aggreeDialog.showDialog('Error', error)
        })
        .finally(() => StoreHelper.setLoading(null, false))
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
@import '@/scss/definitions';
.seedData-list-body {
}
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}
</style>
