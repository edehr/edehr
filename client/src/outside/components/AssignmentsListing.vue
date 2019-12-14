<template lang="pug">
  div(:class="$options.name")
    bread-crumb(currentPage="assignments")
    h1 Assignments
    div(v-if="isRespondingToError")
      p Error: {{ isRespondingToError }}
      p Your LMS is asking for "{{ activity.custom_assignment }}".
      p Adjust your Learning Management System to use an assignment from the list below
    div(v-show="isDevelopingContent")
      ui-button(v-on:buttonClicked="showCreateDialog") Create a new assignment
      ui-button(v-on:buttonClicked="downloadAll") Download all assignments
      ui-button(v-on:buttonClicked="manageEhrData", :secondary="true") Manage seed data
    table.table
      thead
        tr
          th(title="Name", style="min-width: 170px") Assignment name
          th(title="Description") Description
          th(title="Activities") Activities
          th(title="External Id", style="min-width: 110px") External id
          // th(title="Route") Route
          th(title="Seed Data", style="min-width: 170px") Seed name
          th
      tbody
        tr(v-for="item in assignmentsListing", :class="rowClass(item)")
          td {{ item.name }}
          td
            div(v-text-to-html="item.description")
          td {{ activitiesUsingAssignmentCount(item._id) }}
          td {{ item.externalId}}
          td
            ui-link(:name="'developEhrData'", :params="{seedId: item.seedDataObj._id}") {{ item.seedDataObj.name }}
          td
            ui-button(v-on:buttonClicked="showEditDialog", :value="item._id")
              fas-icon(icon="edit") Edit assignment properties
    assignments-dialog(ref="theDialog")
</template>

<script>
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
import StoreHelper from '../../helpers/store-helper'
import { getIncomingParams, downObjectToFile } from '../../helpers/ehr-utils'
import BreadCrumb from './BreadCrumb'
import AssignmentsDialog from './AssignmentsDialog'

export default {
  name: 'AssignmentsListing',
  data () {
    return {
      isRespondingToError: null,
    }
  },
  components: { AssignmentsDialog, UiButton, UiLink, BreadCrumb },
  computed: {
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    activity () {
      return {custom_assignment:'This error handling feature is a work in progress'}
    },
    assignmentsListing () { return StoreHelper.getAssignmentsList()}
  },

  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.params.assignmentId
      return selected ? 'selected' : ''
    },
    activitiesUsingAssignmentCount: function (assignmentId) {
      return StoreHelper.activitiesUsingAssignmentCount(assignmentId)
    },
    manageEhrData: function () {
      this.$router.push('developEhrData')
    },
    downloadAll () {
      StoreHelper.loadAssignmentList(this)
        .then ( (aList) => {
          downObjectToFile('EdEHR-assignments-list.json', aList)
        })
    },

    findAssignment: function (id) {
      return this.assignmentsListing.find(e => {
        return e._id === id
      })
    },
    showEditDialog: function (event, assignmentId) {
      let assignmentData = Object.assign({}, this.findAssignment(assignmentId))
      this.$refs.theDialog.showDialog(assignmentData)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
  },
  mounted: function () {
    // TODO BG thinks this needs to be testes. Create a LMS activity with invalid external id.
    // Need to give error to user. Does this do it?
    let params2 = getIncomingParams()
    this.isRespondingToError = params2['error']
    StoreHelper.loadAssignmentList()
  }
}
</script>

<style lang="scss" scoped>
//@import '../../scss/definitions';
</style>
