<template lang="pug">
  div
    div(class="ehr-context-case-study")
      div
        span Case Study:
        router-link(class="seed-name", :to="{ name: 'seed-view', query: { seedId: seedInfo._id } }") {{ truncate(seedInfo.name, 50)}}
      div
        zone-lms-button(class="shrink", @action="showEditDialog", :icon='appIcons.configure', :title='text.PROPERTIES_TP', :text='text.PROPERTIES')
      div(class="seed-description") Description:  {{ truncate(seedInfo.description, 260)}}
    seed-data-dialog(ref="theDialog")
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'

export default {
  components: { ZoneLmsButton, SeedDataDialog },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEED_ACTIONS,
    }
  },
  computed: {
    seedInfo () {
      return StoreHelper.getSeedContent()
    },
    seedModel () { return this.$store.getters['seedListStore/seedModel'] },
  },
  methods: {
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.seedModel)
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
  grid-template-columns: 1fr 0.25fr 3fr;

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
