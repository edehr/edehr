<template lang='pug'>
  div
    zone-lms-page-banner
      seed-actions(class="flow_across_last_item", :seedModel='seedModel', :hideCondensed='true')
    div(class="details-container card selected")
      ui-link(:name="'seed-view'",  :query='{ seedId: seedId }' )
        span(class='clickable') {{seed.name}}
      div(v-text-to-html="seed.description")
      app-tag-list(:tag-list="tagList")

    seed-structural(:ehrData='seed.ehrData', class='structural-container card selected ')
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import SeedListLink from '@/outside/components/seed-management/SeedListLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import AppTagList from '@/app/components/AppTagList.vue'
export default {
  extends: OutsideCommon,
  components: { AppTagList, SeedActions, ZoneLmsPageBanner, SeedListLink, SeedStructural, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  computed: {
    seedId () {
      return this.seed._id
    },
    seed () {
      return this.$store.getters['seedListStore/seedContent']
    },
    seedModel () { return this.$store.getters['seedListStore/seedModel'] },
    tagList () { return this.seedModel.tagListAsArray()}
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
