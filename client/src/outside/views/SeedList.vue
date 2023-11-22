<template lang="pug">
  div
    zone-lms-page-banner(theme='seed-theme')
      seed-list-actions(@create="refreshAfterUpdateCreate", @patientLabels='patientLabels')
    zone-lms-instructions-header
      p.
        Case studies contain the simulation data for a single patient. Each row of this table present a case study.
      p.
        To find a case study be sure to select the appropriate application type, EHR or LIS, (think clinical vs laboratory) and then try placing some text into the search box to select those case studies that have that text in either the their name or description properties.
        You can also try sorting the list in different ways, and be sure to use the Tags to filter the list to a category of case studies.
      p
        | You can jump to the case study's details page by clicking its name. Or you can
        | view the case study data with the &nbsp;
        fas-icon(class="fa", :icon='appIcons.view')
        | &nbsp; button.
        | The  &nbsp;
        fas-icon(class="fa", :icon='appIcons.download')
        | &nbsp; button lets you save a case study to your computer to use later, or better yet, to share with others.
      p
        | If you are in the course designer mode, use the &nbsp;
        fas-icon(class="fa", :icon='appIcons.new')
        | &nbsp; button to create a new case study. You will be able to import a previously saved case study from within that create dialog.
        | You can also edit the case study in the EHR or LIS application by using the &nbsp;
        fas-icon(class="fa", :icon='appIcons.edit')
        | &nbsp; button on one of the rows below.  If you are not a course designer you will not see these buttons.
      p
        | Use the &nbsp;
        fas-icon(class="fa", :icon='appIcons.barcode')
        | &nbsp; button to see a page of barcode labels for the patients (case studies) listed below.



    seed-select-component(:for-page='true', ref="seedSelectComponent",
      @viewEhrCondensed="viewEhrCondensed",
      @gotoEhrWithSeed="gotoEhrWithSeed",
      @downloadSeed='downloadSeed'
    )
</template>

<script>
import SeedListItem from '@/outside/components/seed-management/SeedListItem'
import StoreHelper, { CREATOR_ACTION } from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import AppTagFilter from '@/app/components/AppTagFilter.vue'
import AppTagList from '@/app/components/AppTagList.vue'
import OutsideCommon from '@/outside/views/OutsideCommon'
import SeedListActions from '@/outside/components/seed-management/SeedListActions'
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import UiTableSortButton from '@/app/ui/UiTableHeaderButton.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import AppSearchBox from '@/app/components/AppSearchBox.vue'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import { downloadSeedToFile } from '@/helpers/ehr-utils'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import SeedSelectComponent from '@/outside/components/seed-management/SeedSelectComponent.vue'

const ASC = 'asc'
const DESC = 'desc'

export default {
  extends: OutsideCommon,
  components: {
    SeedSelectComponent,
    ZoneLmsInstructionsHeader,
    AppPaginateControls,
    AppSearchBox,
    AppTagFilter,
    AppTagList,
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
      actionText: Text.SEED_ACTIONS,
      offset: 0,
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
        {key: 'EHR'},
        {key: 'LIS'}
      ],
      checkAppTypes: ['EHR']
    }
  },
  props: {},
  computed: {
    appTypeMode () { return this.$store.getters['system/appTypeMode']},
    allTagList () {
      return this.$store.getters['seedListStore/allTagList']
    },
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    listMetadata () { return this.$store.getters['seedListStore/listMetadata']},
    seedListStoreSeedId () {
      return this.$store.getters['seedListStore/seedId']
    },
    paginateLimit () { return this.$store.getters['system/paginateLimit']},
    seedDataListFiltered () {
      return this.$store.getters['seedListStore/list']
    },
  },
  methods: {
    downloadSeed (seed) {
      downloadSeedToFile(seed._id, seed, seed.ehrData, seed.tagList)
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
        limit: this.paginateLimit,
        sortKey: fromRouteSort,
        sortDir: fromRouteDirection,
        tagList: fromRouteTagList
      }
      // appType
      const fromRouteAppTypes = query.appTypes
      if(fromRouteAppTypes) {
        this.checkAppTypes = fromRouteAppTypes
        await this.$store.dispatch('system/setAppTypeMode', this.checkAppTypes)
      }
      let ats = this.checkAppTypes
      ats ? queryPayload.appTypes = ats : undefined
      // search term
      if (query.searchTerm ) {
        this.searchTerm = query.searchTerm
      }
      this.searchTerm ? queryPayload.searchTerm = this.searchTerm : undefined
      // await this.$store.dispatch('seedListStore/loadPage', queryPayload)
      // await this.$store.dispatch('seedListStore/loadAllTags')
      await this.fetchSeedSelectionList()
    },
    async fetchSeedSelectionList () {
      if (this.$refs.seedSelectComponent ) {
        await this.$refs.seedSelectComponent.fetchSeedList()
      }
    },
    patientLabels () {
      const query = this.query()
      this.$router.push({ name: 'patient-labels', query: query})
    },
    repage (offset) {
      this.offset = offset
      this.route()
    },
    query () {
      let query = {}
      query.offset = this.offset
      query.limit = this.paginateLimit
      query.sortKey = this.sortKey
      query.sortDir = this.sortDir
      query.ts = Date.now() // to prevent DupNav errors from Vue
      this.selectedTags.length > 0 ? query.tagList = this.selectedTags.join(',') : undefined
      // only add appType to query if there are some selections
      let ats = this.checkAppTypes
      ats ? query.appTypes = ats : undefined
      this.searchTerm ? query.searchTerm = this.searchTerm : undefined
      return query
    },
    route () {
      const query = this.query()
      this.$router.push({ query: query })
      const qs = JSON.stringify(query).replace(/"/g,'\'')
      StoreHelper.postActionEvent(CREATOR_ACTION,'seedlist-'+qs)
    },
    selectSeed (sv ) {
      this.selectedSeedId = sv.id
    },
    refreshAfterUpdateCreate () {
      this.sortKey = this.columnUpdated
      this.sortDir = DESC
      this.route()
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
    updateSearchTerm (searchTerm) {
      this.offset = 0
      this.searchTerm = searchTerm
      this.route()
    },
    viewEhrCondensed (seed) {
      this.$router.push({ name: 'seed-view-condensed', query: { seedId: seed._id } })
    },
    gotoEhrWithSeed (seed) {
      this.$router.push({ name: 'ehr', query: { seedEditId: seed._id } })
    },

  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';

.e-name {
  min-width: 14rem;
  width: 14rem;
}
.e-mrn {
  min-width: 5rem;
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
