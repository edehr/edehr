<template lang="pug">
  div
    zone-lms-page-banner
      div(class="flow_across menu_space_across flow_across_right")
        app-search-box(:searchTerm="searchTerm", @updateSearchTerm='updateSearchTerm')
        app-type-selector(:value="checkAppTypes", @changeAppTypes='changeAppTypes')
        app-paginate-controls(:offset='offset', :limit='paginateLimit', :listMetadata="listMetadata", @repage='repage')
        div(class="flow_across table_space_across")
          zone-lms-button(@action="showUploadDialog",
            :title="text.UPLOAD_TP",
            :icon='appIcons.upload',
            :text='text.UPLOAD')
    div(class="details-container card intro")
      div(class="instructions").
        Learning objects encapsulate a case study with expected learning outcomes.
      div(class="instructions").
        Click on the learning object name to see its details.
      div(v-if="canDo", class="instructions").
        To create a new learning object go to the case studies page, select the case study you wish to use and create the learning object from there.
    div(class="details-container e-table")
      div(class="thead")
        div(class="thcell e-name")
          div(class="flow_across")
            div(class="") Name
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnName)",
              title="Sort by name")
              fas-icon(class="fa", :icon="sortColumnIcon(columnName)")
        div(class="thcell") Type
        div(class="thcell") Usage
        div(class="thcell date")
          div(class="flow_across")
            div(class="") Created
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnCreated)",
              title="Sort by created date")
              fas-icon(class="fa", :icon="sortColumnIcon(columnCreated)")
        div(class="thcell date")
          div(class="flow_across")
            div(class="") Updated
            ui-table-header-button(
              class="flow_across_last_item",
              v-on:buttonClicked="sortColumnToggle(columnUpdated)",
              title="Sort by updated date")
              fas-icon(class="fa", :icon="sortColumnIcon(columnUpdated)")
        div(class="thcell description") Description
      div(class="tbody")
        div(class="row", v-for="lObj in assignmentsListing", :class="rowClass(lObj)")
          div(class='cell e-name')
            router-link(
              :to="{ name: 'learning-object', query: { learningObjectId: lObj._id }}",
              class='router-item')
              fas-icon(class="fa", :icon="appIcons.lobj")
              span {{truncate(lObj.name, 40)}}
          div(class="cell date") {{ lObj.seedDataId ? lObj.seedDataId.appType : '' }}
          div(class="cell date") {{ lObj.activityCount }}
          div(class="cell date") {{ lObj.createDate | formatDateTime }}
          div(class="cell date") {{ lObj.lastUpdateDate | formatDateTime }}
          div(class="cell description").
             {{truncate(lObj.description, 200)}}
    learning-object-import-dialog(ref='theLObjImportDialog')
</template>

<script>
import StoreHelper, { CREATOR_ACTION } from '@/helpers/store-helper'
import LearningObjectListItem from '@/outside/components/learning-object/LearningObjectListItem'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiButton from '@/app/ui/UiButton.vue'
import AppSearchBox from '@/app/components/AppSearchBox.vue'
import AppTypeSelector from '@/app/components/AppTypeSelector.vue'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import LearningObjectImportDialog from '@/outside/components/learning-object/LearningObjectImportDialog.vue'
const ASC = 'asc'
const DESC = 'desc'
export default {
  extends: OutsideCommon,
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.LOBJ_PAGE,
      offset: 0,
      selectedLObjId: '',
      columnName: 'name',
      columnCreated: 'createDate',
      columnUpdated: 'lastUpdateDate',
      sortKey: 'name',
      sortDir: ASC,
      searchTerm: '',
      checkAppTypes: ['EHR']
    }
  },
  components: { ZoneLmsButton, AppPaginateControls, AppTypeSelector, AppSearchBox, UiButton, UiTableHeaderButton, ZoneLmsPageBanner, LearningObjectListItem, LearningObjectImportDialog },
  computed: {
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    assignmentsListing () {
      return this.$store.getters['assignmentListStore/list']
    },
    listMetadata () { return this.$store.getters['assignmentListStore/listMetadata']},
    paginateLimit () { return this.$store.getters['system/paginateLimit']}
  },
  methods: {
    async changeAppTypes (checkAppTypes) {
      this.checkAppTypes = checkAppTypes
      this.offset = 0
      await this.$store.dispatch('system/setAppTypes', this.checkAppTypes)
      console.log('got', this.checkAppTypes)
      this.route()
    },
    async loadComponent () {
      const query = this.$route.query
      const fromRouteOffset = query.offset || 0
      const fromRouteSort = query.sortKey || this.columnName
      const fromRouteDirection = query.sortDir || ASC
      this.offset = parseInt(fromRouteOffset)
      let queryPayload = {
        offset: fromRouteOffset,
        limit: this.paginateLimit,
        sortKey: fromRouteSort,
        sortDir: fromRouteDirection
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
      // Search term
      if (query.searchTerm ) {
        this.searchTerm = query.searchTerm
      }
      this.searchTerm ? queryPayload.searchTerm = this.searchTerm : undefined
      await this.$store.dispatch('assignmentListStore/loadPage', queryPayload)
    },
    route () {
      let query = {}
      query.offset = this.offset
      query.limit = this.paginateLimit
      query.sortKey = this.sortKey
      query.sortDir = this.sortDir
      // only add appType to query if there are some selections
      let ats = this.checkAppTypes.join(',')
      ats ? query.appTypes = ats : undefined
      // without name the router stays on the same page. Just change query string.
      this.searchTerm ? query.searchTerm = this.searchTerm : undefined
      this.$router.push({ query: query })
      const qs = JSON.stringify(query).replace(/"/g,'\'')
      StoreHelper.postActionEvent(CREATOR_ACTION,'lobjlist-'+qs)
    },
    repage (offset) {
      this.offset = offset
      this.route()
    },
    rowClass: function (item) {
      let selected = item._id === this.$route.query.learningObjectId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    showUploadDialog: function () {
      this.$refs.theLObjImportDialog.showLObjImportDialog()
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
    updateSearchTerm (searchTerm) {
      this.offset = 0
      this.searchTerm = searchTerm
      this.route()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
