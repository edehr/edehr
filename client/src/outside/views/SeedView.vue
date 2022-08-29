<template lang='pug'>
  div
    div(class="details-action-bar")
      seed-list-link(:seed-id='seedId')
      seed-actions(:seed="seed", :showDetails='false')
    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{ text.SEED_LABEL }}
        div(class="details-value") {{seed.name}}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="seed.description")
      div(class="details-row")
        div(class="details-name") {{text.CONTRIBUTORS}}
        div(class="details-value") {{ seed.contributors }}
      div(class="details-row")
        div(class="details-name") {{text.VERSION}}
        div(class="details-value") {{seed.version}}
      div(class="details-row")
        div(class="details-name") {{ text.STATS }}
        div(class="details-value")
          span {{text.STATS_VALUE(ehrPages.length)}}:
          span &nbsp; {{ ehrPagesText }}
      div(class="details-row")
        div(class="details-name") {{text.LOBJ_LABEL}}
        div(class="details-value") {{text.LOBJ_VALUE(loCount)}}
          div(v-for="lobj in assignmentList")
            router-link(:to="{ name:'learning-object', query: { learningObjectId: lobj._id }}") {{lobj.name}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ seed.createDate | formatDateTime }}. Last modified on {{ seed.lastUpdateDate | formatDateTime }}
      div(v-if="showIds", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ seedId }}
    seed-data-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import { downloadSeedToFile } from '@/helpers/ehr-utils'
import { Text } from '@/helpers/ehr-text'
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import UiButton from '@/app/ui/UiButton'
import SeedListLink from '@/outside/components/seed-management/SeedListLink'
import SeedDelete from '@/outside/components/seed-management/SeedDelete'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: { SeedActions, SeedDataDialog, SeedListLink, SeedDelete, UiButton, SeedDuplicate, SeedStructural, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEED_VIEW_PAGE
    }
  },
  computed: {
    showIds () { return this.isAdmin },
    canDo () { return StoreHelper.isDevelopingContent() },
    assignmentList: function () {
      const seedId = this.seed._id
      let assList = StoreHelper.getAssignmentsList()
      return assList.filter(a => a.seedDataId === seedId)
    },
    loCount () { return this.assignmentList.length  },
    ehrPages ( ) { return this.seedModel.pageNames || []},
    ehrPagesText () { return this.ehrPages.join(', ') },
    seedModel () {
      return this.$store.getters['seedListStore/seedModel']
    },
    seed () {
      return this.$store.getters['seedListStore/seedContent']
    },
    seedId () { return this.seedModel.id}

  },
  methods: {
    downloadSeed () {
      const seedId = this.seedId
      // console.log('download seed for ', seedId)
      let sSeedContent = this.seed
      let data = sSeedContent.ehrData
      downloadSeedToFile(seedId, sSeedContent, data)
    },
    gotoEhrWithSeed () {
      this.$router.push({ name: 'ehr', query: { seedEditId: this.seedId } })
    },
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.seed)
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
      this.$router.push({ name: 'seed-list' })
    },
    loadComponent () {
      const fromRoute = this.$route.query.seedId
      const fromStore = this.$store.getters['seedListStore/seedId']
      const seedId = fromRoute ? fromRoute : fromStore
      // console.log('loading seed view', seedId)
      StoreHelper.loadAssignmentAndSeedLists()
      StoreHelper.loadSeed(seedId)
    },
  },
}
</script>

<style scoped lang='scss'>
@import '../../scss/definitions';
.seed-view-header {
  max-width: 60rem;
  > div {
    margin-bottom: 5px;
  }
}

.action-section {
  display: flex;
  flex-flow: row;
  div {
    margin-right: 5px;
  }
}
</style>