<template lang="pug">
  div
    h1 Activity needs to be linked with content
    p.
      The activity you selected is not yet linked to any EdEHR content.
      Please see below and select a learning object (content) for this activity.
      You must establish this link before any student can use this activity.

    div(class='lms-activity card selected')
      p Activity: {{ activity.title }}
      p Description: {{ activity.description }}
      p Course: {{ activity.courseTitle }}

    div(class='row-flow')
      h3 Select the content you want to use, from the list below,  or
      ui-button(v-on:buttonClicked="showCreateDialog",
          :title='text.createLearningObjectTip')
        fas-icon(class="fa", :icon="appIcons.new")
        span &nbsp; {{text.createLearningObjectBL}}
    div(class="flow_across menu_space_across flow_across_right")
      app-search-box(:searchTerm="searchTerm", @updateSearchTerm='updateSearchTerm')
      app-type-selector(:value="checkAppTypes", @changeAppTypes='changeAppTypes')
      app-paginate-controls(:offset='offset', :listMetadata="listMetadata" @repage='repage')

    div(class="details-container")
      div(class="e-table")
        div(class="thead")
          div(class="thcell") Connect to
          div(class="thcell") Activity Name
          div(class="thcell") Type
          div(class="thcell") Description
        div(class="tbody")
          div(class="row", v-for="lObj in assignmentsListing")
            div(class="cell")
              ui-button(v-on:buttonClicked="selectLearningObject(lObj)", class='link-button') Use this
            div(class='cell') {{ lObj.name }}
            div(class="cell") {{ appType(lObj) }}
            div(class='cell') {{ lObj.description }}

    ui-confirm(ref="confirmDialog", saveLabel="Connect", v-on:confirm="selectConnect", html-body=true)
    learning-object-dialog(ref="theDialog")

</template>

<script>
import StoreHelper, { CREATOR_ACTION } from '@/helpers/store-helper'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'
import UiButton from '@/app/ui/UiButton'
import LearningObjectDelete from '@/outside/components/learning-object/LearningObjectDelete'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import { textToHtml } from '@/directives/text-to-html'
import { APP_ICONS } from '@/helpers/app-icons'
import AppSearchBox from '@/app/components/AppSearchBox.vue'
import AppPaginateControls from '@/app/components/AppPaginateControls.vue'
import AppTypeSelector from '@/app/components/AppTypeSelector.vue'
const TEXT = {
  createLearningObjectTip:'Create a new learning object',
  createLearningObjectBL: 'Create and use new content',
}
const ASC = 'asc'
const DESC = 'desc'

export default {
  data () {
    return {
      showDetails: false,
      appIcons: APP_ICONS,
      text: TEXT,
      selectedLObj: undefined,
      offset: 0,
      sortKey: 'name',
      sortDir: ASC,
      searchTerm: '',
      appTypes: [
        {key: 'EHR'},
        {key: 'LIS'}
      ],
      checkAppTypes: []
    }
  },
  components: { AppPaginateControls, AppTypeSelector, AppSearchBox, UiConfirm, LearningObjectDelete, LearningObjectDialog,  UiButton  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord']},
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsName () { return this.consumer.tool_consumer_instance_name},
    givenName () { return StoreHelper.givenName()},
    assignmentsListing () {
      return this.$store.getters['assignmentListStore/list']
    },
    listMetadata () { return this.$store.getters['assignmentListStore/listMetadata']},
    paginateLimit () { return this.$store.getters['system/paginateLimit']},
    returnToLmsText () { return 'Return to ' + this.lmsName}
  },
  methods: {
    appType (lobj) { return lobj.seedDataId.appType },
    async changeAppTypes (checkAppTypes) {
      this.checkAppTypes = checkAppTypes
      this.offset = 0
      await this.$store.dispatch('system/setAppTypes', this.checkAppTypes)
      this.route()
    },
    exit () { StoreHelper.exitToLms() },
    showCreateDialog: function () {
      this.$refs.theDialog.showLObjDialog({action: 'create'})
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
      await this.$store.dispatch('assignmentListStore/loadPage', queryPayload)
    },

    selectLearningObject (lObj) {
      this.selectedLObj = lObj
      const body = textToHtml('Confirm connecting your activity to the content: "' + lObj.name
        + '"\nThis can not be undone. If you make a mistake then create a new activity in your LMS as try again.')
      const title ='Confirm connection'
      this.$refs.confirmDialog.showDialog(title, body)
    },
    async selectConnect () {
      const lObj = this.selectedLObj
      const activityId = this.activity.id
      const payload = { activity: activityId, assignment: lObj._id }
      await this.$store.dispatch('activityStore/linkAssignment', payload)
      // take the instructor to activity page for the activity they just made a link to.
      await this.$router.push({ name: 'lms-instructor-activity', query: { activityId: activityId } })
    },
    repage (offset) {
      this.offset = offset
      this.route()
    },
    route () {
      let query = {}
      query.activityId = this.activity.id
      query.offset = this.offset
      query.limit = this.paginateLimit
      query.sortKey = this.sortKey
      query.sortDir = this.sortDir
      this.selectedTags.length > 0 ? query.tagList = this.selectedTags.join(',') : undefined
      // only add appType to query if there are some selections
      let ats = this.checkAppTypes.join(',')
      ats ? query.appTypes = ats : undefined
      this.searchTerm ? query.searchTerm = this.searchTerm : undefined
      this.$router.push({ query: query })
      const qs = JSON.stringify(query).replace(/"/g,'\'')
      StoreHelper.postActionEvent(CREATOR_ACTION,'unlinked-'+qs)
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
@import '../../../scss/definitions';

button, .button {
  font-size: 1rem;
}
.activity-details {
  padding-left: 1rem;
  margin-bottom: 1rem;
  p {
    margin-bottom: 5px;
  }
}
.details-container {
  padding: 0;
}
.row-flow {
  display: flex;
  flex-flow: row;
  gap: 1rem;
}
.lms-activity {
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
