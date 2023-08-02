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

        div(v-for="t in appTypes", :key='t.key')
          label(class="clickable")
            input(type="checkbox", :value="t.key", id="t.key", v-model="checkAppTypes", @change="checkedAppType($event)")
            span {{t.key}}
        div(class="flow_across table_space_across")
          div {{ pagesOfText }}
          ui-button(v-on:buttonClicked="previousPage", :disabled="!enablePrev", title='Previous page', class='paginate-button')
            fas-icon(icon="angle-left", class='fa')
          ui-button(v-on:buttonClicked="nextPage", :disabled="!enableNext", title='Next page', class='paginate-button')
            fas-icon(icon="angle-right", class='fa')
        div(class="flow_across table_space_across")
          learning-objects-actions(class="flow_across_last_item")
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
          div(class="cell date") {{ lObj.createDate | formatDateTime }}.
          div(class="cell date") {{ lObj.lastUpdateDate | formatDateTime }}
          div(class="cell description").
             {{truncate(lObj.description, 200)}}

</template>

<script>
import StoreHelper, { CREATOR_ACTION } from '@/helpers/store-helper'
import LearningObjectListItem from '@/outside/components/learning-object/LearningObjectListItem'
import OutsideCommon from '@/outside/views/OutsideCommon'
import LearningObjectsActions from '@/outside/components/learning-object/LearningObjectsActions'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiButton from '@/app/ui/UiButton.vue'
const ASC = 'asc'
const DESC = 'desc'
export default {
  extends: OutsideCommon,
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.LOBJ_PAGE,
      offset: 0,
      limit: 10,
      selectedLObjId: '',
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
  components: { UiButton, UiTableHeaderButton, ZoneLmsPageBanner, LearningObjectsActions, LearningObjectListItem },
  computed: {
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    assignmentsListing () {
      return this.$store.getters['assignmentListStore/list']
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
    listMetadata () { return this.$store.getters['assignmentListStore/listMetadata']},
    pagesOfText () {
      let { totalCount, offset, limit } = this.listMetadata
      let start = offset + 1
      let end = Math.min(offset + limit, totalCount)
      return `${start} to ${end} of ${totalCount}`
    },
  },
  methods: {
    checkedAppType ( event) {
      event.stopPropagation()
      // remove empty strings
      this.checkAppTypes = this.checkAppTypes.filter( t => !!t)
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
        limit: this.limit,
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
      query.limit = this.limit
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
    nextPage () {
      let { totalCount } = this.listMetadata
      this.offset = Math.min(totalCount, this.offset + this.limit)
      this.route()
    },
    previousPage () {
      this.offset = Math.max(0, this.offset - this.limit)
      this.route()
    },
    rowClass: function (item) {
      let selected = item._id === this.$route.query.learningObjectId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
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
    updateSearchTerm (event) {
      this.route()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}

.un-configured {
  background: $greyWarn;
  opacity: 0.8;
}

.un-configured-warning {
  color: $grey80;
}

</style>
