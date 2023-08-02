<template lang="pug">
  div
    zone-lms-page-banner
      div(class="flow_across menu_space_across flow_across_right")
        div(class="flow_across table_space_across search-box")
          input(
            type="text",
            v-model='searchTerm',
            v-on:keyup.enter="updateSearchTerm",
            v-on:keyup.esc="searchTerm = ''",
          )
          button(
            v-on:buttonClicked="updateSearchTerm",
            :disabled="!searchTerm",
            class='search-button'
            )
            fas-icon(icon="search", class='fa')
        div(class="flow_across table_space_across")
          label(class="clickable", v-for="t in appTypes", :key='t.key')
            input(type="checkbox", :value="t.key", id="t.key", v-model="checkAppTypes", @change="checkedAppType($event)")
            span {{t.key}}
        div(class="flow_across table_space_across")
          div {{ pagesOfText }}
          ui-button(v-on:buttonClicked="previousPage", :disabled="!enablePrev", title='Previous page', class='paginate-button')
            fas-icon(icon="angle-left", class='fa')
          ui-button(v-on:buttonClicked="nextPage", :disabled="!enableNext", title='Next page', class='paginate-button')
            fas-icon(icon="angle-right", class='fa')
        div(class="flow_across table_space_across")
          zone-lms-button(v-show="canDo", @action="showCreateDialog", :icon='appIcons.new', :title='text.CREATE_TP', :text='text.CREATE')
          //zone-lms-button(@action="downloadAll", :icon='appIcons.download', :title='text.DOWNLOAD_TP', :text='text.DOWNLOAD')
    div(class="e-table-container")
      div(class="e-table")
        div(class="thead")
          div(class="thcell e-name")
            div(class="flow_across")
              div(class="") Name
              ui-table-header-button(
                class="flow_across_last_item",
                v-on:buttonClicked="sortColumnToggle(columnName)",
                title="Sort by name")
                fas-icon(class="fa", :icon="sortColumnIcon(columnName)")
          div(class="thcell e-tags")
            div(class="flow_across")
              div(class="") Tags
              app-tag-filter(class="flow_across_last_item", :selectedTags="selectedTags", @update:tags="updateSelectedTags")
          div(class="thcell") Usage
          div(class="thcell e-date")
            div(class="flow_across")
              div(class="") Created
              ui-table-header-button(
                class="flow_across_last_item",
                v-on:buttonClicked="sortColumnToggle(columnCreated)",
                title="Sort by created date")
                fas-icon(class="fa", :icon="sortColumnIcon(columnCreated)")
          div(class="thcell e-date")
            div(class="flow_across")
              div(class="") Updated
              ui-table-header-button(
                class="flow_across_last_item",
                v-on:buttonClicked="sortColumnToggle(columnUpdated)",
                title="Sort by updated date")
                fas-icon(class="fa", :icon="sortColumnIcon(columnUpdated)")
          div(class="thcell") Description
        div(class="tbody")
          div(class="row", v-for="seedModel in seedDataListFiltered", :class="rowClass(seedModel)")
            div(class='cell e-name')
              ui-link(:name="'seed-view'", class="list-item-name", :query='{ seedId: seedModel._id }' )
                span(class='clickable') {{truncate(seedModel.name, 40)}}
            div(class='cell e-tags')
              app-tag-list(class="list-item-taglist", :tagList="seedModel.tagList")
            div(class="cell") {{ seedModel.assignmentCount }}
            div(class="cell e-date") {{ seedModel.createDate | formatDateTime }}.
            div(class="cell e-date") {{ seedModel.lastUpdateDate | formatDateTime }}
            div(class="cell") {{truncate(seedModel.description, 200)}}

    seed-data-dialog(ref="theDialog")

</template>

<script>
import SeedListItem from '@/outside/components/seed-management/SeedListItem'
import StoreHelper, { CREATOR_ACTION } from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import AppTagFilter from '@/app/components/AppTagFilter.vue'
import AppTagList from '@/app/components/AppTagList.vue'
import OutsideCommon from '@/outside/views/OutsideCommon'
import SeedActions from '@/outside/components/seed-management/SeedActions.vue'
import SeedDataDialog from '@/outside/components/seed-management/SeedDataDialog.vue'
import SeedListActions from '@/outside/components/seed-management/SeedListActions'
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import UiTableSortButton from '@/app/ui/UiTableHeaderButton.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'


const ASC = 'asc'
const DESC = 'desc'

export default {
  extends: OutsideCommon,
  components: {
    AppTagFilter,
    AppTagList,
    SeedActions,
    SeedDataDialog,
    SeedListActions,
    SeedListItem,
    UiButton,
    UiLink,
    UiTableHeaderButton,
    UiTableSortButton,
    ZoneLmsButton,
    ZoneLmsPageBanner,
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
      offset: 0,
      limit: 10,
      selectedSeedId: '',
      selectedTags: [],
      columnName: 'name',
      columnCreated: 'createDate',
      columnUpdated: 'lastUpdateDate',
      sortKey: 'name',
      sortDir: ASC,
      searchTerm: '',
      appTypes: [
        {key: 'EHR'},
        {key: 'LIS'}
      ],
      checkAppTypes: ['EHR']
    }
  },
  props: {},
  computed: {
    allTagList () {
      return this.$store.getters['seedListStore/allTagList']
    },
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    enablePrev () {
      return this.hasPrev
    },
    enableNext () {
      return this.hasNext
    },
    hasNext () {
      let { totalCount, offset, limit } = this.listMetadata
      return offset + limit < totalCount
    },
    hasPrev () {
      let { offset } = this.listMetadata
      return offset > 0
    },
    listMetadata () { return this.$store.getters['seedListStore/listMetadata']},
    pagesOfText () {
      let { totalCount, offset, limit } = this.listMetadata
      let start = offset + 1
      let end = Math.min(offset + limit, totalCount)
      return `${start} to ${end} of ${totalCount}`
    },
    seedListStoreSeedId () {
      return this.$store.getters['seedListStore/seedId']
    },
    seedDataListFiltered () {
      return this.$store.getters['seedListStore/list']
    },
  },
  methods: {
    checkedAppType ( event) {
      event.stopPropagation()
      // remove empty strings
      this.checkAppTypes = this.checkAppTypes.filter( t => !!t)
      this.route()
    },
    rowClass: function (sv) {
      let selected = sv.id === this.selectedSeedId
      let css = []
      selected ? css.push('selected') : undefined
      sv.draftRowCount >= 1 ? css.push('draftRow') : undefined
      return css.join(' ')
    },
    async loadPage () {
      const query = this.$route.query
      const fromRouteOffset = query.offset || 0
      const fromRouteSort = query.sortKey || this.columnName
      const fromRouteDirection = query.sortDir || ASC
      // from the query the tag list is a CSV string
      const fromRouteTagList = query.tagList || ''
      this.offset = parseInt(fromRouteOffset)
      this.selectedTags = fromRouteTagList.split(',')
      let queryPayload = {
        offset: fromRouteOffset,
        limit: this.limit,
        sortKey: fromRouteSort,
        sortDir: fromRouteDirection,
        tagList: fromRouteTagList
      }
      // appType
      const fromRouteAppTypes = query.appTypes
      if(fromRouteAppTypes) {
        this.checkAppTypes = fromRouteAppTypes.split(',')
        await this.$store.dispatch('system/setAppTypes', this.checkAppTypes)
      } else {
        this.checkAppTypes = this.$store.getters['system/checkAppTypes']
      }
      let ats = this.checkAppTypes.join(',')
      ats ? queryPayload.appTypes = ats : undefined
      // search term
      if (query.searchTerm ) {
        this.searchTerm = query.searchTerm
      }
      this.searchTerm ? queryPayload.searchTerm = this.searchTerm : undefined
      await this.$store.dispatch('seedListStore/loadPage', queryPayload)
      await this.$store.dispatch('seedListStore/loadAllTags')
    },
    nextPage () {
      let { totalCount } = this.listMetadata
      this.offset = Math.min(totalCount, this.offset + this.limit)
      this.route()
    },
    previousPage () {
      this.offset = Math.max(0, this.offset - this.limit)
      this.route()
    },
    route () {
      let query = {}
      query.offset = this.offset
      query.limit = this.limit
      query.sortKey = this.sortKey
      query.sortDir = this.sortDir
      this.selectedTags.length > 0 ? query.tagList = this.selectedTags.join(',') : undefined
      // only add appType to query if there are some selections
      let ats = this.checkAppTypes.join(',')
      ats ? query.appTypes = ats : undefined
      this.searchTerm ? query.searchTerm = this.searchTerm : undefined
      this.$router.push({ query: query })
      const qs = JSON.stringify(query).replace(/"/g,'\'')
      StoreHelper.postActionEvent(CREATOR_ACTION,'seedlist-'+qs)
    },
    selectSeed (sv ) {
      this.selectedSeedId = sv.id
    },
    showSeedDialog: function (seed) {
      this.$refs.theDialog.showDialog()
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
    tagList ( sv ) {
      return sv.tagList ? sv.tagList.split(' ') : []
    },
    sortColumnIcon (columnName) {
      let icon = APP_ICONS.sortNone
      if (this.sortKey === columnName) {
        icon = this.sortDir === ASC ? APP_ICONS.sortAsc : APP_ICONS.sortDesc
      }
      return icon
    },
    sortColumnToggle (columnName) {
      if (this.sortKey === columnName) {
        this.sortDir = this.sortDir === ASC ? DESC : ASC
      } else {
        // reset starting position when changing sort column
        this.offset = 0
        this.sortKey = columnName
        this.sortDir = ASC
      }
      this.route()
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    async loadComponent () {
      await this.loadPage()
      this.selectedSeedId = this.seedListStoreSeedId
      // this.selectedPages = [...this.ehrPages]
    },
    updateSelectedTags (tags) {
      this.selectedTags = tags
      // reset starting position when changing tag filter
      this.offset = 0
      this.route()
    },
    updateSearchTerm (event) {
      // console.log('search term is ', this.searchTerm)
      this.route()
    }
  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';

.e-name {
  min-width: 14rem;
  width: 14rem;
}
.e-tags {
  min-width: 8rem;
  width: 8rem;
}
.e-date {
  min-width: 7rem;
  width: 7rem;
}


</style>
