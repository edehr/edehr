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
          th(title="External Id", style="min-width: 110px") External id
          // th(title="Route") Route
          th(title="Seed Data", style="min-width: 170px") Seed name
          th
      tbody
        tr(v-for="item in assignmentsListing", :class="rowClass(item)")
          td {{ item.name }}
          td
            div(v-text-to-html="item.description")
          td {{ item.externalId}}
          // td {{ item.ehrRoutePath}}
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
      aAssignment: {},
      errorList: [],
      dialogHeader: '',
      actionType: '',
      assignmentId: '',
      stashedSelectedSeed: {},
      selectedSeed: ''
    }
  },
  components: { AssignmentsDialog, UiButton, UiLink, BreadCrumb },
  computed: {
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent(this)
    },
    assignmentsListing () {
      let sdList = StoreHelper.getSeedDataList(this)
      let assList = StoreHelper.getAssignmentsList(this)
      assList.forEach(ass => {
        ass.seedDataObj = {}
        if (ass.seedDataId) {
          let sd = sdList.find(sd => {
            return sd._id === ass.seedDataId
          })
          ass.seedDataObj = sd || {}
        }
      })
      return assList
    },
    activity () {
      return StoreHelper.getCurrentActivity(this)
    }
  },

  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.params.assignmentId
      return selected ? 'selected' : ''
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
    }
  },
  mounted: function () {
    let params2 = getIncomingParams()
    this.isRespondingToError = params2['error']
    StoreHelper.loadAssignmentAndSeedLists(this)
  }
}
</script>

<style lang="scss" scoped>
//@import '../../scss/definitions';
</style>
