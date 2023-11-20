<template lang="pug">
div
  div(class="flow_across menu_space_across flow_across_right")
    app-type-radio(:value="checkAppTypes", @changeAppTypes='changeAppTypes')
    app-search-box(:searchTerm="searchTerm", @updateSearchTerm='changeSearchTerm')
    app-paginate-controls(:offset='offset', :limit='paginateLimit', :listMetadata="listMetadata" @repage='changePage')

  div(class="e-table-container seed-theme")
    div(class="details-container e-table")
      div(class="thead")
        div(v-if="forDialog", class="thcell") &nbsp;
        div(class="thcell") Name
          ui-table-header-button(
            class="flow_across_last_item",
            v-on:buttonClicked="changeColumnSort(columnName)",
            title="Sort by name")
            fas-icon(class="fa", :icon="getSortColumnIcon(columnName)")
        div(class="thcell e-mrn") MRN
          ui-table-header-button(
            class="flow_across_last_item",
            v-on:buttonClicked="changeColumnSort(columnMrn)",
            title="Sort by MRN")
            fas-icon(class="fa", :icon="getSortColumnIcon(columnMrn)")
        div(class="thcell e-tags")
          div(class="flow_across")
            div(class="") Tags
            app-tag-filter(class="flow_across_last_item", :selectedTags="selectedTags", @update:tags="changeSelectedTags")
        div(class="thcell") Type
        div(class="thcell") Usage
        div(class="thcell e-date")
          div(class="flow_across")
            div(class="") Updated
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="changeColumnSort(columnUpdated)",
              title="Sort by updated date")
              fas-icon(class="fa", :icon="getSortColumnIcon(columnUpdated)")
        div(class="thcell") Description
        div(class="thcell") Actions
      div(class="tbody")
        div(class="row", v-for="seedModel in seedDataListFiltered", :class="rowClass(seedModel)")
          div(v-if="forDialog", class="cell")
            input(type='radio', name='selectCaseStudy', v-model='selected', :value='seedModel', @change="$emit('selectSeed', selected)")
          div(class='cell e-name')
            ui-link(v-if="forPage", :name="'seed-view'", class="list-item-name", :query='{ seedId: seedModel._id }' )
              span(class='clickable') {{truncate(seedModel.name, 40)}}
            span(v-else)  {{truncate(seedModel.name, 40)}}
          div(class="cell") {{ seedModel.mrn }}
          div(class='cell e-tags')
            app-tag-list(class="list-item-taglist", :tagList="seedModel.tagList")
          div(class="cell") {{ seedModel.appType }}
          div(class="cell") {{ seedModel.assignmentCount }}
          div(class="cell e-date") {{ seedModel.lastUpdateDate | formatDateTime }}
          div(class="cell", :title='seedModel.description').
            {{truncate(seedModel.description, 70)}}
          div(class="cell", v-if='forPage')
            zone-lms-button(@action="$emit('viewEhrCondensed', seedModel)", :icon='appIcons.view', :title='actionText.VIEW_TP', :actionText='text.VIEW')
            zone-lms-button(v-show="canDo", @action="$emit('gotoEhrWithSeed', seedModel)", :icon='appIcons.edit', :title='actionText.EDIT_TP', :actionText='text.EDIT')
            zone-lms-button(@action="$emit('downloadSeed',seedModel)", :icon='appIcons.download', :actionText='text.DOWNLOAD_TP', :text='actionText.DOWNLOAD')

</template>

<script>
import AppSearchBox from '@/app/components/AppSearchBox.vue'
import AppTypeRadio from '@/app/components/AppTypeRadio.vue'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import AppTagFilter from '@/app/components/AppTagFilter.vue'
import UiLink from '@/app/ui/UiLink.vue'
import AppTagList from '@/app/components/AppTagList.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import StoreHelper from '@/helpers/store-helper'
const ASC = 'asc'
const DESC = 'desc'
const EHR = 'EHR'
const LIS = 'LIS'

export default {
  components: { AppSearchBox, AppTypeRadio, ZoneLmsButton, AppTagList, UiLink, AppTagFilter, UiTableHeaderButton, AppPaginateControls },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
      actionText: Text.SEED_ACTIONS,
      offset: 0,
      selected: {},
      selectedSeedId: '',
      selectedTags: [],
      columnMrn: 'mrn',
      columnName: 'name',
      columnCreated: 'createDate',
      columnUpdated: 'lastUpdateDate',
      sortKey: 'name',
      sortDir: ASC,
      searchTerm: '',
      appTypes: [
        {key: EHR},
        {key: LIS}
      ],
      checkAppTypes: EHR
    }
  },
  props: {
    forDialog: {type: Boolean},
    forPage: {type: Boolean},
  },
  computed: {
    allTagList () { return this.$store.getters['seedListStore/allTagList'] },
    canDo () { return StoreHelper.isDevelopingContent() },
    listMetadata () { return this.$store.getters['seedListStore/listMetadata']},
    paginateLimit () { return this.$store.getters['system/paginateLimit']},
    seedDataListFiltered () { return this.$store.getters['seedListStore/list'] },
  },
  methods: {
    getSortColumnIcon (columnName) {
      let icon = APP_ICONS.sortNone
      if (this.sortKey === columnName) {
        icon = this.sortDir === ASC ? APP_ICONS.sortAsc : APP_ICONS.sortDesc
      }
      return icon
    },
    rowClass: function (sv) {
      let selected = sv.id === this.selectedSeedId
      let css = []
      selected ? css.push('selected') : undefined
      // sv.draftRowCount >= 1 ? css.push('draftRow') : undefined
      return css.join(' ')
    },

    async fetchSeedList () {
      let query = {
        offset: this.offset,
        limit: this.paginateLimit,
        sortKey: this.sortKey,
        sortDir: this.sortDir,
        tagList: this.selectedTags
      }
      query.searchTerm = this.searchTerm
      query.appTypes  = this.checkAppTypes
      await this.$store.dispatch('seedListStore/loadPage', query)
      await this.$store.dispatch('seedListStore/loadAllTags')
    },
    async changeAppTypes (checkAppTypes) {
      this.checkAppTypes = checkAppTypes
      this.offset = 0
      await this.fetchSeedList()
    },
    changePage (offset) {
      this.offset = offset
      this.fetchSeedList()
    },
    changeColumnSort (columnName) {
      if (this.sortKey === columnName) {
        this.sortDir = this.sortDir === ASC ? DESC : ASC
      } else {
        // reset starting position when changing sort column
        this.offset = 0
        this.sortKey = columnName
        this.sortDir = ASC
      }
      this.fetchSeedList()
    },
    changeSelectedTags (tags) {
      this.selectedTags = tags
      this.offset = 0
      this.fetchSeedList()
    },
    changeSearchTerm (searchTerm) {
      this.searchTerm = searchTerm
      this.offset = 0
      this.fetchSeedList()
    },

    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input
    },
  },
}

</script>
