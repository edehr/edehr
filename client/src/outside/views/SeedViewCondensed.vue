<template lang='pug'>
  div
    zone-lms-page-banner
      seed-actions(class="flow_across_last_item", :seedModel='seedModel', :hideCondensed='true')
    zone-lms-instructions-header
      p This view presents the case study data, without the EHR/LIS context, and with tools that allow you to explore the data and how it evolves over simulation time.

    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") Case study
        div(class="details-value")
          ui-link(:name="'seed-view'",  :query='{ seedId: seedId }' )
            fas-icon(class="fa", :icon="appIcons.seed")
            span &nbsp; {{seed.name}}

    div(class="details-container selected card")
      h3 Case study time slices
      zone-lms-instructions-element This section allows you select a time slice of the data. Show all times combined or just the selected time's data.
      seed-time-split(:ehrData='ehrData', purpose='seed', class='structural-container card selected ')
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import AppTagList from '@/app/components/AppTagList.vue'
import SeedTimeSplit from '@/outside/components/seed-struct/SeedTimeSplit.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
export default {
  extends: OutsideCommon,
  components: { ZoneLmsInstructionsElement, ZoneLmsInstructionsHeader, SeedTimeSplit, AppTagList, SeedActions, ZoneLmsPageBanner, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  computed: {
    ehrData () { return this.seed.ehrData },
    seedId () {
      return this.seed._id
    },
    seed () {
      return this.$store.getters['seedListStore/seedContent']
    },
    seedModel () { return this.$store.getters['seedListStore/seedModel'] },
    tagList () { return this.seed.tagList || []}
  },
  methods: {
    loadComponent () {
      const fromRoute = this.$route.query.seedId
      const fromStore = this.$store.getters['seedListStore/seedId']
      const seedId = fromRoute ? fromRoute : fromStore
      console.log('loading seed view', seedId)
      StoreHelper.loadAssignmentAndSeedLists()
      StoreHelper.loadSeed(seedId)
    },
  },
}
</script>

<style scoped lang='scss'>
.list-badge::before {
  content: 'F';
}
.structural-container {
  padding: 10px;
}
.seed-view-header {
  max-width: 60rem;
  > div {
    margin-bottom: 5px;
  }
}
.link-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
