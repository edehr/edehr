<template lang="pug">
  div
    zone-lms-page-banner
      seed-list-actions(
        @update:pages="updateSelectedPages"
      )
    div(v-if="seedDataListFiltered.length === 0") Empty list
    div(v-else, v-for="sv in seedDataListFiltered", class="list-card list-element", :class="rowClass(sv)")
      seed-list-item(:seedModel='sv'
        :showIds='showIds'
        @selectSeed='(seed) => selectSeed(seed)',
      )
</template>

<script>
import SeedListItem from '@/outside/components/seed-management/SeedListItem'
import StoreHelper from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import OutsideCommon from '@/outside/views/OutsideCommon'
import SeedModel from '@/outside/models/SeedModel'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import SeedListActions from '@/outside/components/seed-management/SeedListActions'
export default {
  extends: OutsideCommon,
  components: {
    SeedListActions,
    ZoneLmsPageBanner,
    SeedListItem,
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
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
    seedDataListStore () {
      return this.$store.getters['seedListStore/list']
    },
    seedDataList () {
      let seeds = this.seedDataListStore.filter( sv => !sv.isDefault )
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
    rowClass: function (sv) {
      let selected = sv.id === this.selectedSeedId
      return selected ? 'selected' : ''
    },
    selectSeed (sv ) {
      this.selectedSeedId = sv.id
    },
    updateSelectedPages (sPages) {
      this.selectedPages = sPages
    },
    async loadComponent () {
      await StoreHelper.loadAssignmentAndSeedLists()
      this.selectedSeedId = this.seedListStoreSeedId
      this.selectedPages = [...this.ehrPages]
    }
  },
}
</script>

