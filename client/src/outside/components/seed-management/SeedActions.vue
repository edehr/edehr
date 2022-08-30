<template lang='pug'>
  div(class="action-section")
    div(v-if="showDetails")
      ui-button(v-on:buttonClicked="gotoSeedView",
        :title="text.DETAILS_TP")
        fas-icon(class="fa", icon="cog")
        span(v-if="showLabels") &nbsp; {{text.DETAILS}}
    div
      ui-button(v-on:buttonClicked="viewEhrCondensed",
        :title="text.VIEW_TP")
        fas-icon(class="fa", :icon="appIcons.view")
        span(v-if="showLabels") &nbsp; {{text.VIEW}}
    div(v-if="canDo")
      ui-button(v-on:buttonClicked="gotoEhrWithSeed",
        :title="text.EDIT_TP")
        fas-icon(class="fa", :icon="appIcons.edit")
        span(v-if="showLabels") &nbsp; {{text.EDIT}}
    div(v-if="canDo")
      ui-button(v-on:buttonClicked="showEditDialog",
        :title="text.PROPERTIES_TP")
        fas-icon(class="fa", :icon="appIcons.configure")
        span(v-if="showLabels") &nbsp; {{text.PROPERTIES}}
    seed-duplicate(v-if="canDo", :seed='seed', @newSeed='seedDuplicated()')
    div
      ui-button(v-on:buttonClicked="downloadSeed",
        :title="text.DOWNLOAD_TP")
        fas-icon(class="fa", :icon="appIcons.download")
        span(v-if="showLabels") &nbsp; {{text.DOWNLOAD}}
    seed-delete(v-if="canDo"
      :disabled="assignmentList.length > 0",
      :seed='seed',
      @seedDeleted='seedDeleted')
    seed-data-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import UiButton from '@/app/ui/UiButton'
import SeedDelete from '@/outside/components/seed-management/SeedDelete'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import { downloadSeedToFile } from '@/helpers/ehr-utils'
export default {
  components: { SeedDataDialog, SeedDelete, UiButton, SeedDuplicate, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEED_ACTIONS,
    }
  },
  props: {
    seed: {type: Object},
    showDetails: {type: Boolean, default: true}
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    assignmentList: function () {
      const seed = this.seed
      let assList = StoreHelper.getAssignmentsList()
      return assList.filter(a => a.seedDataId === seed._id)
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    seedId () { return this.seed._id}
  },
  methods: {
    downloadSeed () {
      const seedId = this.seedId
      // console.log('download seed for ', seedId)
      let sSeedContent = this.seed
      let data = sSeedContent.ehrData

      downloadSeedToFile(seedId, sSeedContent, data)
    },
    gotoSeedView () {
      this.$router.push({ name: 'seed-view', query: { seedId: this.seedId } })
    },
    gotoEhrWithSeed () {
      this.$router.push({ name: 'ehr', query: { seedEditId: this.seedId } })
    },
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.seed)
    },
    viewEhrCondensed () {
      this.$router.push({ name: 'seed-view-condensed', query: { seedId: this.seedId } })
    },
    seedDuplicated () {
      // delete to prevent NavigationDuplication error from vue router.
      delete this.$route.query.seedId
      // reload
      const fromStore = this.$store.getters['seedListStore/seedId']
      this.$router.push({ name: 'seed-view', query: { seedId: fromStore } })
    },
    seedDeleted () {
      this.$router.push({ name: 'seed-list', query: { ts: Date.now() } })
    },
  },
}
</script>

<style scoped lang='scss'>
@import '../../../scss/definitions';
</style>