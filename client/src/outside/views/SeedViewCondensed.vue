<template lang='pug'>
  div
    div
      seed-list-link(:seed-id='seedId')
    div
      ui-link(:name="'seed-view'", :query="{seedId: seedId}")
        fas-icon(class="fa", :icon="appIcons.seed")
        span &nbsp; {{seedObject.name}}
    seed-structural(:ehrData='seedObject.ehrData', class='structural-container card selected ')
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import SeedListLink from '@/outside/components/seed-management/SeedListLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: { SeedListLink, SeedStructural, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  computed: {
    seedId () {
      return this.seedObject._id
    },
    seedObject () {
      return this.$store.getters['seedListStore/seedContent']
    }
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
</style>