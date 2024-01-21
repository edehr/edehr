<template lang="pug">
  div
    div(class="ehr-context-case-study  flow_across")
      div
        div
          span Case Study:
          router-link(class="seed-name", :to="{ name: 'seed-view', query: { seedId: seedInfo._id } }") {{ truncate(seedInfo.name, 50)}}
        div(class="seed-description") Description:  {{ truncate(seedInfo.description, 80)}}
          ui-info(title="Description", :html="seedInfo.description")
      div(class="flow_across menu_space_across flow_across_last_item")
        ehr-simulation-time-control
        ehr-simulation-sign-on
      div(class="flow_across_last_item")
        zone-lms-button(class="shrink", @action="downloadSeed", :icon='appIcons.download', :title='text.DOWNLOAD_TP', :text='text.DOWNLOAD')
        zone-lms-button(class="shrink", @action="showEditDialog", :icon='appIcons.configure', :title='text.PROPERTIES_TP', :text='text.PROPERTIES')
    seed-data-dialog(ref="theDialog")
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EhrSimulationSignOn from '@/inside/components/EhrSimulationSignOn.vue'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiInfo from '@/app/ui/UiInfo.vue'
import EhrSimulationTimeControl from '@/inside/components/EhrSimulationTimeControl.vue'
import { downloadSeedToFile } from '@/helpers/ehr-utils'

export default {
  components: { EhrSimulationTimeControl, EhrSimulationSignOn, UiInfo, ZoneLmsButton, SeedDataDialog },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEED_ACTIONS,
    }
  },
  computed: {
    seedInfo () {
      return this.$store.getters['seedListStore/seedContent']
    },
    seedModel () {
      return this.$store.getters['seedListStore/seedModel'] },
  },
  methods: {
    downloadSeed () {
      const seedId = this.seedModel.id
      let sSeedContent = this.seedModel.seed
      let data = sSeedContent.ehrData
      downloadSeedToFile(seedId, sSeedContent, data, this.seedModel.tagListAsString())
    },
    showEditDialog: function () {
      this.$refs.theDialog.showSeedDataDialog(this.seedModel)
    },
    saveSeedProperties: async function () {
      let seedData = {
        name: this.name,
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
      } else if (this.actionType === CREATE_ACTION) {
        await StoreHelper.createSeed(this, seedData)
      }
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }

  }}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-context-case-study {
  display: grid;
  grid-template-columns: 1fr 3fr 0.25fr;
  gap: 1rem;
  max-height: 3rem;
  overflow-y: auto;

  .seed-name {
    //color: $black;
    font-weight: bold;
    padding: 0 5px;
  }
  .seed-description {
    margin-left: 8px;
  }
}
</style>
