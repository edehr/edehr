<template lang="pug">
  div(class="list-table-row")
    div(class="flow_across")
      ui-link(:name="'seed-view'", class="list-item-name", :query='{ seedId: seedModel.id }' )
        span(class='clickable') {{truncate(seed.name, 40)}}
      div(class="flow_across_last_item flow_across menu_space_across")
        app-tag-list(class="list-item-taglist", :tagList="seed.tagList")
        div(class="list-item-date") {{ seed.createDate | formatDateTime }}.
        div(class="list-item-date") {{ seed.lastUpdateDate | formatDateTime }}
        seed-actions(class="list-item-actions", :seedModel='seedModel')
    div
      div(class="list-item-description") {{truncate(seed.description, 200)}}
    div(v-if="hasDraftReports", class="draftStyle")
      div(class="details-name") WARNING
      div(class="details-value").
        This case study contains draft EHR reports. These must be saved as verified reports
        before using this case study with a student assignment.
        Edit this case study in the EHR and complete the reports (or remove them)
</template>

<script>
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import StoreHelper from '@/helpers/store-helper'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import { Text } from '@/helpers/ehr-text'
import UiLink from '@/app/ui/UiLink'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import AppTagList from '@/app/components/AppTagList.vue'

export default {
  components: { AppTagList, UiLink, SeedActions, SeedDuplicate },
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
      required: true
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
    seed () { return this.seedModel},
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

.list-table-row {
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid rgba(200,200,200,0.4);

  .list-item-description {
    height: 3.4rem; /* 2 x list-table-row font size */
    //border: 1px solid blue;
  }

  .list-item-actions {
    min-width: 20rem;
    border: 1px solid blue;
  }
  .list-item-name {
    //width: 20rem;
    max-width: 40rem;
    //border: 1px solid red;
  }

  .list-item-date {
    width: 13rem;
    max-width: 13rem;
    //border: 1px solid red;
  }

  .list-item-taglist {
    width: 14rem;
    //border: 1px solid red;
  }
}
</style>
