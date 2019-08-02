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
      ui-button(v-on:buttonClicked="manageEhrData", :secondary="true") Manage EHR data

      //ui-link(:to="{ name: `developEhrData` }", v-bind:secondary="true", class="second-option") Manage EHR data

    table.table
      thead
        tr
          th(title="Name") Assignment name
          th(title="Description") Description
          th(title="External Id") External id
          th(title="ROute") Route
          th(v-show="isDevelopingContent", title="Seed Data") Seed data
      tbody
        tr(v-for="item in assignmentsListing")
          td {{ item.name }}
          td {{ item.description}}
          td {{ item.externalId}}
          td {{ item.ehrRoutePath}}
          td(v-show="isDevelopingContent") {{ item.seedDataObj.name }}
          td
            ui-button(v-on:buttonClicked="showEditDialog", :value="item._id")
              fas-icon(icon="edit")
    assignments-dialog(ref="theDialog")
</template>

<script>
import UiButton from '../../app/ui/UiButton.vue'
import UiLink from '../../app/ui/UiLink.vue'
import StoreHelper from '../../helpers/store-helper'
import { getIncomingParams } from '../../helpers/ehr-utils'
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
    seedOptionList () {
      let sdList = StoreHelper.getSeedDataList(this)
      return sdList.map(sd => {
        return { id: sd._id, name: sd.name }
      })
    },
    activity () {
      return StoreHelper.getCurrentActivity(this)
    }
  },

  methods: {
    manageEhrData: function () {
      this.$router.push('developEhrData')
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
