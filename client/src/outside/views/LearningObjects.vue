<template lang="pug">
  div
    zone-lms-page-banner(theme='lobj-theme')
      zone-lms-button(v-if="canDo", @action="showLobjCreateDialog",
        :title="text.createLearningObjectTip",
        :icon='appIcons.new')
      zone-lms-button(v-if="canDo", @action="showUploadDialog",
        :title="text.UPLOAD_TP",
        :icon='appIcons.upload',
        :text='text.UPLOAD')
    zone-lms-instructions-header
      p.
        Learning objects provide the content and instructions for activities. Each learning object has a name and
        description which becomes the activity name and the instructions that the students will see.  A learning object also links in a
        case study to provide the simulated patient data. But this is optional. If a learning object has no case study
        then the student will need to search for their patient. Be sure to give the student some hints in your instructions
        or during class so they can find the correct patient.
      p.
        The list below lets you browse all the available learning objects. To see the details about a learning object just click on its name.
      p
        | As an instructor, you can create new learning objects here with the &nbsp;
        fas-icon(class="fa", :icon='appIcons.new')
        | &nbsp; button.
        | Or import a learning object you saved or obtained from a friend by using the &nbsp;
        fas-icon(class="fa", :icon='appIcons.upload')
        | &nbsp; button above.
      p
        | To filter the list below enter something into the search box. This searches the name and description properties.
        | You can also filter the items to case studies for EHR or LIS (think clinical vs laboratory settings).

    div(class="flow_across menu_space_across flow_across_right")
      app-type-radio(:value="appTypeMode", @changeAppTypes='changeAppTypes')
      app-search-box(:searchTerm="searchTerm", @updateSearchTerm='updateSearchTerm')
      app-paginate-controls(:offset='offset', :limit='paginateLimit', :listMetadata="listMetadata", @repage='repage')
    div(class="details-container e-table lobj-theme")
      div(class="thead")
        div(class="thcell e-name") Name
          ui-table-header-button(
            class="flow_across_last_item",
            v-on:buttonClicked="sortColumnToggle(columnName)",
            title="Sort by name")
            fas-icon(class="fa", :icon="sortColumnIcon(columnName)")
        div(class="thcell") Type
        div(class="thcell") Usage
        div(class="thcell") Id
          ui-table-header-button(
            class="flow_across_last_item",
            v-on:buttonClicked="sortColumnToggle(columnLti)",
            title="Sort by LTI id")
            fas-icon(class="fa", :icon="sortColumnIcon(columnLti)")
        div(class="thcell date") Updated
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
          div(class="cell date") {{ lObj.seedDataId ? lObj.seedDataId.appType : lObj.mPatientAppType }}
          div(class="cell date") {{ lObj.activityCount }}
          div(class="cell") {{ lObj.idForLTI }}
          //div(class="cell date") {{ lObj.createDate | formatDateTime }}
          div(class="cell date") {{ lObj.lastUpdateDate | formatDateTime }}
          div(class="cell description").
             {{truncate(lObj.description, 200)}}
    learning-object-import-dialog(ref='theLObjImportDialog')
    learning-object-dialog-no-case-create(ref='theLObjDialog', @create="createNewLobj")
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
import AppTypeRadio from '@/app/components/AppTypeRadio.vue'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import LearningObjectImportDialog from '@/outside/components/learning-object/LearningObjectImportDialog.vue'
import LearningObjectDialogNoCaseCreate from '@/outside/components/learning-object/LearningObjectDialogNoCaseCreate.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
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
      columnLti: 'idForLTI',
      sortKey: 'name',
      sortDir: ASC,
      searchTerm: ''
    }
  },
  components: { ZoneLmsInstructionsHeader, ZoneLmsButton, AppPaginateControls, AppTypeRadio, AppSearchBox, UiButton, UiTableHeaderButton, ZoneLmsPageBanner, LearningObjectListItem, LearningObjectImportDialog, LearningObjectDialogNoCaseCreate },
  computed: {
    appTypeMode () { return this.$store.getters['system/appTypeMode']},
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
    async changeAppTypes (appTypeMode) {
      this.offset = 0
      await this.$store.dispatch('system/setAppTypeMode', appTypeMode)
      this.route()
    },
    showLobjCreateDialog: function () {
      // pas undefined for first parameter to set up for the 'create' action. Give the new LObj the case study
      this.$refs.theLObjDialog.showLObjDialog({ action:'create', seed: this.seed})
    },
    async createNewLobj (data) {
      const newLobj = await StoreHelper.createAssignment(data)
      await this.$router.push({ name: 'learning-object', query: { learningObjectId: newLobj._id } })
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
        await this.$store.dispatch('system/setAppTypeMode', fromRouteAppTypes)
      }
      queryPayload.appTypes = this.appTypeMode
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
      query.appTypes = this.appTypeMode
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
