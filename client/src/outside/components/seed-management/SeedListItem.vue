<template lang="pug">
  div
    div(class="flow_across")
      div(class="list-item-name")
        ui-link(:name="'seed-view'",  :query='{ seedId: seedModel.id }' )
          span(class='clickable') {{seed.name}}
      div(class="flow_across_last_item")
        div(class="flow_across")
          a(class="show-more", @click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}
          seed-actions(:seed='seed')
    div(v-if="hasDraftReports", class="draftStyle")
      div(class="details-row")
        div(class="details-name") WARNING
        div(class="details-value").
          This case study contains draft EHR reports. These must be saved as verified reports
          before using this case study with a student assignment.
          Edit this case study in the EHR and complete the reports (or remove them)

    div(v-if="showMore")
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
          span {{text.STATS_VALUE(pageCount)}}:
          span(v-for='pgn in pageNamesWithContent', :key='pgn') &nbsp; {{ pgn }}
      div(class="details-row")
        div(class="details-name") {{text.LOBJ_LABEL}}
        div(class="details-value")
          div(v-for="lobj in assignmentList")
            router-link(:to="{ name:'learning-object', query: { learningObjectId: lobj._id }}") {{lobj.name}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ seed.createDate | formatDateTime }}. Last modified on {{ seed.lastUpdateDate | formatDateTime }}
      div(v-if="isAdmin", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ seed._id }}
    div(v-if="!showMore")
      div(class="") {{truncate(seed.description, 180)}}
</template>

<script>
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import { Text } from '@/helpers/ehr-text'
import SeedModel from '@/outside/models/SeedModel'
import UiLink from '@/app/ui/UiLink'
import { EhrPages } from '@/ehr-definitions/ehr-models'

export default {
  components: { UiLink, SeedActions, SeedDuplicate, UiButton, },
  data () {
    return {
      text: Text.SEED_VIEW_PAGE,
      ehrPages: new EhrPages(),
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
    assignmentList: function () {
      return StoreHelper.getAssignmentsList().filter(a => a.seedDataId === this.seedModel.id)
    },
    canDo () { return StoreHelper.isDevelopingContent() },
    idLength () { return '62bdb422ae8dc820982a2d86'.length },
    loCount () { return this.assignmentList().length },
    hasDraftReports () { return this.statsMeta.draftRows && this.statsMeta.draftRows > 0 },
    pageCount () { return this.pageNamesWithContent.length },
    pageNamesWithContent () {
      // statsKeys contains all the pages with content plus some other fields like meta
      const statsKeys = Object.keys(this.seedStats)
      // pageList contains all the ehr page definitions
      const pageList = this.ehrPages.pageList
      const withContent = pageList.filter(pg => statsKeys.includes(pg.pageKey))
      console.log ('withContent', withContent)
      console.log( withContent[0] ? withContent[0].pageTitle : '' )
      return withContent.map( pg => pg.pageTitle).sort()
    },
    seed () { return this.seedModel.seed},
    seedStats () { return this.seed.ehrData ? this.ehrPages.ehrPagesStats(this.seed.ehrData) : {} },
    statsMeta ( ) { return this.seedStats.meta || {}}

  },
  methods: {
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
<style lang='scss' scoped>
@import '../../../scss/definitions';
.draftStyle {
  background-color: $table-draft-colour;
}
.show-more {
  display: inline-block;
  margin-right: 1rem;
}
</style>
