<template lang="pug">
  div
    div(class="flow_across")
      div(class="list-item-name")
        ui-link(:name="'seed-view'",  :query='{ seedId: seedModel.id }' )
          span(class='clickable') {{seed.name}}
      seed-actions(class="flow_across_last_item", :seed='seed')
    div(v-if="showMore")
      a(@click="showMore = !showMore; $emit('selectSeed', seed)") {{showMore ? 'show less' : 'show more'}}
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
        div(class="details-name") {{text.STATS}}
        div(class="details-value")
          span {{text.STATS_VALUE(ehrPages.length)}}:
          span &nbsp; {{ ehrPagesText }}
      div(class="details-row")
        div(class="details-name") {{text.LOBJ_LABEL}}
        div(class="details-value") {{text.LOBJ_VALUE(loCount)}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ seed.createDate | formatDateTime }}. Last modified on {{ seed.lastUpdateDate | formatDateTime }}
      div(v-if="isAdmin", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ seed._id }}
    div(v-if="!showMore")
      a(@click="showMore = !showMore; $emit('selectSeed', seed)") {{showMore ? 'show less' : 'show more'}}
      div(class="") {{truncate(seed.description, 180)}}
</template>

<script>
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import SeedDelete from '@/outside/components/seed-management/SeedDelete'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import { Text } from '@/helpers/ehr-text'
import SeedModel from '@/outside/models/SeedModel'
import UiLink from '@/app/ui/UiLink'

export default {
  components: { UiLink, SeedActions, SeedDelete, SeedDuplicate, UiButton, },
  data () {
    return {
      text: Text.SEED_VIEW_PAGE,
      showMore: false,
    }
  },
  inject: ['isAdmin'],
  props: {
    seedModel: {
      type: Object,
      required: true,
      validator: (value) => { return value instanceof SeedModel  },
    },
    showIds: { type: Boolean }
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    idLength () { return '62bdb422ae8dc820982a2d86'.length },
    ehrPages ( ) { return this.seedModel.pageNames },
    ehrPagesText () { return this.ehrPages.join(', ') },
    loCount () { return this.assignmentList().length },
    seed () { return this.seedModel.seed}
  },
  methods: {
    assignmentList: function () {
      return StoreHelper.getAssignmentsList().filter(a => a.seedDataId === this.seedModel.id)
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
