<template lang="pug">
  div
    // Provides the contents of the main seed list view.
    // Provides a list of seed items plus supports (create new, download all, edit dialog,
    div(class='list-actions')
      seed-filter-by-page(
        :pages="ehrPages",
        :selectedPages='selectedPages',
        @update:pages="updateSelectedPages"
        :show="showPageFilter",
        @close='showPageFilter = false',
        :title='text.FILTER_TP')
      ui-button(v-show="canDo",
        v-on:buttonClicked="showCreateDialog",
        :title='text.CREATE_TP')
        fas-icon(class="fa", :icon="appIcons.new")
        span(v-if="showLabels") &nbsp; {{ text.CREATE }}
      ui-button(v-on:buttonClicked="downloadAll",
        :title="text.DOWNLOAD_TP")
        fas-icon(class="fa", :icon="appIcons.download")
        span(v-if="showLabels") &nbsp; {{text.DOWNLOAD}}

    div
      div(v-if="seedDataListFiltered.length === 0") Empty list
      div(v-else, v-for="sv in seedDataListFiltered", class="list-card list-element", :class="rowClass(sv)")
        seed-list-item(:seedModel='sv'
          :showIds='showIds'
          @selectSeed='(seed) => selectSeed(seed)',
        )
    seed-data-dialog(ref="theDialog")

</template>

<script>
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import SeedListItem from '@/outside/components/seed-management/SeedListItem'
import SeedFilterByPage from '@/outside/components/seed-management/SeedFilterByPage'
import UiButton from '@/app/ui/UiButton.vue'
import UiAgree from '@/app/ui/UiAgree.vue'
import UiConfirm from '@/app/ui/UiConfirm'
import StoreHelper from '@/helpers/store-helper'
import { downObjectToFile } from '@/helpers/ehr-utils'
import UiLink from '@/app/ui/UiLink'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import OutsideCommon from '@/outside/views/OutsideCommon'
import SeedModel from '@/outside/models/SeedModel'
export default {
  extends: OutsideCommon,
  components: {
    UiLink,
    SeedDataDialog,
    SeedFilterByPage,
    SeedListItem,
    UiAgree,
    UiButton,
    UiConfirm,
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
    rowClass: function (sv) {
      let selected = sv.id === this.selectedSeedId
      return selected ? 'selected' : ''
    },
    selectSeed (sv ) {
      this.selectedSeedId = sv.id
    },
    downloadAll () {
      let sdList = this.seedDataList.map(sv => sv.seed)
      downObjectToFile('EdEHR-seed-listings.json', sdList)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
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

