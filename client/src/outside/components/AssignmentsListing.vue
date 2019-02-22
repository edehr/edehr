<template lang="pug">
  div(:class="$options.name")
    h1 Ed EHR Assignments
    div(v-if="isRespondingToError")
      p Error: {{ isRespondingToError }}
      p Your LMS is asking for "{{ activity.custom_assignment }}".
      p Adjust your LMS to use an assignment from the listing below
    div(v-show="isDeveloper")
      ui-button(v-on:buttonClicked="showCreateDialog") Create new assignment
    table.table
      thead
        tr
          th(title="Name") EdEHR Assignment Name
          th(title="Description") Description
          th(title="External Id") Assignment External Id
          th(v-show="isDeveloper", title="Seed Data") Seed Data
      tbody
        tr(v-for="item in assignmentsListing")
          td {{ item.name }}
          td {{ item.description}}
          td {{ item.externalId}}
          td(v-show="isDeveloper") {{ item.seedDataObj.name }}
          td
            ui-button(v-on:buttonClicked="showEditDialog", :value="item._id")
              fas-icon(icon="edit")
    app-dialog( v-if="showingDialog", :isModal="true", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="aAssignment.name")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label External Id
                input(class="input", type="text", v-model="aAssignment.externalId")
            div(class="ehrdfe")
              div(class="input-element")
                label Seed data {{selectedSeed}}
                select(v-model="selectedSeed")
                  option(disabled,value="") Please select one
                  option(v-for="seed in seedOptionList", v-bind:value="seed.id", :selected="seed.selected") {{ seed.name}} {{seed.selected}}
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="input-element input-element-full")
                label Description
                textarea(class="textarea",v-model="aAssignment.description")

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'
import { getIncomingParams } from '../../helpers/ehr-utills'

export default {
  name: 'AssignmentsListing',
  data() {
    return {
      isRespondingToError: null,
      showingDialog: false,
      aAssignment: {},
      dialogHeader: '',
      actionType: '',
      assignmentId: '',
      stashedSelectedSeed: {},
      selectedSeed: ''
    }
  },
  components: { AppDialog, UiButton },
  computed: {
    isDeveloper() {
      return this.$store.getters['visit/isDeveloper']
    },
    assignmentsListing() {
      let sdList = this.$store.state.seedStore.seedDataList
      let assList = this.$store.state.assignment.assignmentsListing
      assList = assList.filter(entry => entry.externalId != 'defaultNonAssignment')

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
    seedOptionList() {
      let sdList = this.$store.state.seedStore.seedDataList
      return sdList.map(sd => {
        return { id: sd._id, name: sd.name }
      })
    },
    activity() {
      return this.$store.state.ehrData.sActivityData
    }
  },

  methods: {
    findAssignment: function(id) {
      return this.assignmentsListing.find(e => {
        return e._id === id
      })
    },
    showEditDialog: function(event, value) {
      this.assignmentId = value // event.target.value
      // clone to decouple data from storage before using in dialog
      let sData = Object.assign({}, this.findAssignment(this.assignmentId))
      this.actionType = 'edit'
      this.aAssignment = sData
      this.selectedSeed = sData.seedDataId || ''
      this.dialogHeader = 'Edit assignment properties'
      this.showingDialog = true
    },
    showCreateDialog: function() {
      this.aAssignment = {}
      this.selectedSeed = ''
      this.actionType = 'create'
      this.dialogHeader = 'Create a new assignment'
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.showingDialog = false
    },
    saveDialog: function() {
      // console.log('saveDialog ', this.actionType, this.aSeed)
      let sId = this.selectedSeed && this.selectedSeed.length > 0 ? this.selectedSeed : null
      this.aAssignment.seedDataId = sId
      let theData = this.aAssignment || '{}'
      // console.log(`Convert seed data field '${theData}' into an object`)
      // theData = JSON.parse(theData)
      this.showingDialog = false
      if (this.actionType === 'edit') {
        console.log('Assignment saving ', theData)
        let dataIdPlusPayload = { id: this.assignmentId, payload: theData }
        this.$store.dispatch('assignment/updateAssignment', dataIdPlusPayload)
      } else if (this.actionType === 'create') {
        // console.log('Seed Data saving ', this.aSeed)
        this.$store.dispatch('assignment/createAssignment', this.aAssignment).then(() => {
          console.log('update assignment completed')
        })
      }
    },
    loadAssignments: function() {
      const _this = this
      console.log('load assignments for AssignmentListing component')
      this.$store.commit('system/setLoading', true)
      Promise.all([
        _this.$store.dispatch('seedStore/loadSeedDataList'),
        _this.$store.dispatch('assignment/loadAssignments')
      ]).then(() => {
        _this.$store.commit('system/setLoading', false)
      })
    }
  },
  mounted: function() {
    let params2 = getIncomingParams()
    this.isRespondingToError = params2['error']
    this.loadAssignments()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.AssignmentsListing {
}
.seedDataPop {
  background: $grey10;
}
.tooltip {
  &.popover {
    .popover-inner {
      background: $grey03;
      color: $black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba($black, 0.1);
    }

    .popover-arrow {
      border-color: $grey03;
    }
  }
}
</style>
