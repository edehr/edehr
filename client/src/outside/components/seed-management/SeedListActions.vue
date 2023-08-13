<template lang="pug">
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(v-show="canDo", @action="showCreateDialog", :icon='appIcons.new', :title='text.CREATE_TP', :text='text.CREATE')
      zone-lms-button(@action="downloadAll", :icon='appIcons.download', :title='text.DOWNLOAD_TP', :text='text.DOWNLOAD')
    seed-data-dialog(ref="theDialog", @create="$emit('create')", @update="$emit('update')")
</template>

<script>
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import StoreHelper from '@/helpers/store-helper'
import { downObjectToFile } from '@/helpers/ehr-utils'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
export default {
  components: {
    ZoneLmsButton,
    SeedDataDialog
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
    }
  },
  props: {},
  computed: {
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
  },
  methods: {
    downloadAll () {
      let sdList = this.seedDataList
      downObjectToFile('EdEHR-seed-listings.json', sdList)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showSeedDataDialog()
    },
  },
}
</script>

