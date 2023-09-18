<template lang='pug'>
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(v-if="!hideCondensed", @action="viewEhrCondensed", :icon='appIcons.view', :title='text.VIEW_TP', :text='text.VIEW')
      zone-lms-button(v-show="canDo", @action="gotoEhrWithSeed", :icon='appIcons.edit', :title='text.EDIT_TP', :text='text.EDIT')
      zone-lms-button(v-show="canDo", @action="showEditDialog", :icon='appIcons.configure', :title='text.PROPERTIES_TP', :text='text.PROPERTIES')
      zone-lms-button(v-if="canDo", @action="showLobjCreateDialog",
        :title="text.createLearningObjectTip",
        :icon='appIcons.lobj',
        :text='text.createLearningObjectBL')

      seed-duplicate(v-show="canDo", :seed='seed', @newSeed='seedDuplicated()')
      zone-lms-button(@action="downloadSeed", :icon='appIcons.download', :title='text.DOWNLOAD_TP', :text='text.DOWNLOAD')
      seed-delete(v-show="canDo"
        :disabled="assignmentList.length > 0",
        :seed='seed',
        @seedDeleted='seedDeleted')
    seed-data-dialog(ref="theDialog")
    learning-object-dialog(ref="theLObjDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import StoreHelper from '@/helpers/store-helper'
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import SeedDelete from '@/outside/components/seed-management/SeedDelete'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import { downloadSeedToFile } from '@/helpers/ehr-utils'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'

export default {
  components: { LearningObjectDialog, ZoneLmsButton, SeedDataDialog, SeedDelete, SeedDuplicate },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEED_ACTIONS,
    }
  },
  props: {
    seedModel: {type: Object},
    hideCondensed: {type: Boolean, default: false}
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    assignmentList: function () {
      const seed = this.seed
      let assList = StoreHelper.getAssignmentsList()
      return assList.filter(a => a.seedDataId === seed._id)
    },
    seed () { return this.seedModel.seed },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    seedId () { return this.seedModel.id}
  },
  methods: {
    downloadSeed () {
      const seedId = this.seedId
      // console.log('download seed for ', seedId)
      let sSeedContent = this.seed
      let data = sSeedContent.ehrData

      downloadSeedToFile(seedId, sSeedContent, data, this.seedModel.tagListAsString())
    },
    gotoEhrWithSeed () {
      this.$router.push({ name: 'ehr', query: { seedEditId: this.seedId }})
    },
    showEditDialog: function () {
      this.$refs.theDialog.showSeedDataDialog(this.seedModel)
    },
    showLobjCreateDialog: function () {
      // pas undefined for first parameter to set up for the 'create' action. Give the new LObj the case study
      this.$refs.theLObjDialog.showLObjDialog({ action:'create', seed: this.seed})
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
