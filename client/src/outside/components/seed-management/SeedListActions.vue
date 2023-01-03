<template lang="pug">
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(v-show="canDo", @action="showCreateDialog", :icon='appIcons.new', :title='text.CREATE_TP', :text='text.CREATE')
      zone-lms-button(@action="downloadAll", :icon='appIcons.new', :title='text.DOWNLOAD_TP', :text='text.DOWNLOAD')
      seed-filter-by-page(
        :pages="ehrPages",
        :selectedPages='selectedPages',
        @update:pages="updateSelectedPages"
        :show="showPageFilter",
        @close='showPageFilter = false',
        :title='text.FILTER_TP')
    seed-data-dialog(ref="theDialog")

</template>

<script>
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import SeedFilterByPage from '@/outside/components/seed-management/SeedFilterByPage'
import StoreHelper from '@/helpers/store-helper'
import { downObjectToFile } from '@/helpers/ehr-utils'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import SeedModel from '@/outside/models/SeedModel'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
export default {
  components: {
    ZoneLmsButton,
    SeedDataDialog,
    SeedFilterByPage,
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
      showPageFilter: false,
      selectedPages: [],
      selectedSeedId: ''
    }
  },
  props: {},
  computed: {
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    ehrPages () {
      let list = new Set
      this.seedDataList.forEach(s => {
        s.pageNames.forEach( k => list.add(k))
      })
      list = [...list] // to array
      return list.sort( (a,b,) => a.localeCompare(b))
    },
    seedListStoreSeedId () {
      return this.$store.getters['seedListStore/seedId']
    },
    seedDataList () {
      let seeds = StoreHelper.getSeedDataList().filter( sv => !sv.isDefault )
      return seeds.map( sv => new SeedModel(sv))
    },
    seedDataListFiltered () {
      return this.seedDataList.filter( sv => {
        const pageNames = sv.pageNames
        // allow for seed with no pages (an empty seed) as well as all seeds that match the selected pages
        return pageNames.length === 0 || (pageNames.filter(pn => this.selectedPages.includes(pn)).length > 0)
      })
    },
    showIds () { return this.isAdmin },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    downloadAll () {
      let sdList = this.seedDataList.map(sv => sv.seed)
      downObjectToFile('EdEHR-seed-listings.json', sdList)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
    updateSelectedPages (sPages) {
      console.log('update selected pages', sPages)
      this.selectedPages = sPages
    },
  },
}
</script>

