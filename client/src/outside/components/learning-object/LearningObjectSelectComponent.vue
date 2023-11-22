<template lang="pug">
  div
    p.
      Select a learning object below.
      First select whether you want clinical (EHR) or laboratory (LIS) content.
      Then search the list for text in the title or description.
    div(class="flow_across menu_space_across flow_across_right")
      app-type-radio(:value="appTypeMode", @changeAppTypes='changeAppTypes')
      app-search-box(:searchTerm="searchTerm", @updateSearchTerm='updateSearchTerm')
      app-paginate-controls(:list-metadata='listMetadata', :offset='listMetadata.offset', @repage='pageChange')
    div(class='e-table lobj-theme')
      div(class="thead")
        div(class="row")
          div(class="thcell") &nbsp;
          div(class="thcell") Name
          div(class='thcell') Description
      div(class='tbody')
        div(class="row", :class="{selected: lObj === selected}", v-for="lObj in assignmentsListing", @click='selectedLObj(lObj)')
          div(class="cell")
            input(type='radio', name='selectlobj', v-model='selected', :value='lObj')
          div(class="cell")
            span {{ lObj.name }}
          div(class='cell') {{ truncate(lObj.description, 100) }}
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import AppSearchBox from '@/app/components/AppSearchBox.vue'
import AppTypeRadio from '@/app/components/AppTypeRadio.vue'

const ASC = 'asc'
// eslint-disable-next-line no-unused-vars
const DESC = 'desc'

export default {
  components: { AppPaginateControls, AppSearchBox, AppTypeRadio, UiButton, UiInfo },
  data () {
    return {
      selected: {},
      currentLobjId: undefined,
      offset: 0,
      searchTerm: ''
    }
  },
  props: {},
  computed: {
    appTypeMode () { return this.$store.getters['system/appTypeMode']},
    assignmentsListing () { return this.$store.getters['assignmentListStore/list'].filter( lobj => lobj._id !== this.currentLobjId) },
    listMetadata () { return this.$store.getters['assignmentListStore/listMetadata']},
    disableSave () { return JSON.stringify(this.selected).length === 2  },
    limit () { return this.$store.getters['system/paginateLimit']},
  },
  methods: {
    changeAppTypes (appTypeMode) {
      this.$store.dispatch('system/setAppTypeMode', appTypeMode)
      this.offset = 0
      this.loadPage()
    },
    pageChange (offset) {
      this.offset = offset
      this.loadPage()
    },
    selectedLObj ( lobj ) {
      this.selected = lobj
      this.$emit('selected', lobj)
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    updateSearchTerm (searchTerm) {
      this.offset = 0
      this.searchTerm = searchTerm
      this.loadPage()
    },
    async loadPage () {
      const query = {}
      query.offset = this.offset
      query.sortKey = 'name'
      query.sortDir = ASC
      query.tagList = ''
      query.limit = this.limit
      query.searchTerm = this.searchTerm
      query.appTypes  = this.appTypeMode
      await this.$store.dispatch('assignmentListStore/loadPage', query)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/definitions';

section {
  margin-bottom: 10px;
}
.table-listing {
  border: 1px solid $grey90;
}
.listing {
  display: flex;
  flex-flow: column;
  max-height: 20rem;
  overflow: auto;
  border-top: 1px solid $grey90;
}
.row {
  display: grid;
  grid-template-columns: 0.25fr 1fr 3fr;
}
.row:hover {
  background-color: aliceblue;
  cursor: pointer;
}
.row.selected {
  background-color: $brand-selected;
}
.cell {
  padding: 5px;
}
</style>
