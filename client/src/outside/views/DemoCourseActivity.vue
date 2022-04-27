<template lang="pug">
  div
    div(class="card")
      div(class="card-content")
        div(class="columns")
          div(class="column is-10")
            span(class="field-head") Activity
            a(tabindex="0", class="is-link", v-on:keyup.enter="gotoEhr" @click="gotoEhr()") {{submitData.assignmentName}}
          div(class="column is-2" align="right", v-show='editMode')
            ui-button(v-on:buttonClicked="resetSubmitData", title='Reset activity data')
              fas-icon(icon="undo")
            ui-button(v-on:buttonClicked="showEditDialog", title='Edit activity')
              fas-icon(icon="edit")
        div
          span(class="field-head") Description
        div
          span(v-text-to-html="submitData.assignmentDescription", class="assignment-description")
        div(class="config-data", v-show='editMode')
          div(class="columns")
            div(class="column is-3 field-head") Tool Url
            div(class="column is-9") {{submitData.toolUrl}}
          div(class="columns")
            div(class="column is-3 field-head") Custom parameter
            div(class="column is-9") assignment={{submitData.externalId}}
          div(class="columns")
            div(class="column is-3 field-head") Consumer key
            div(class="column is-9") {{submitData.consumerKey}}
          div(class="columns")
            div(class="column is-3 field-head") Consumer secret
            div(class="column is-9") {{submitData.consumerSecret}}
          div(class="columns")
            div(class="column is-3 field-head") Target
            div(class="column is-9") Always set to open in new window or existing window. Never in a frame.


    demo-course-activity-dialog(ref="theDialog")

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import DemoCourseActivityDialog from '@/outside/components/DemoCourseActivityDialog'
import { demoGoToEhr } from '@/helpers/demo-helper'

export default {
  components: {
    UiButton,DemoCourseActivityDialog
  },
  data: function () {
    return {
      submitData: {
      }
    }
  },
  props: {
    assignment: { type: Object },
    editMode: { type: Boolean, default: false},
    switchRole: { type: Boolean, default: false}
  },
  computed: {
    toolConsumerKey () {
      return StoreHelper.getDemoTokenData().toolConsumerKey
    },
    demoPersonaName () {
      return StoreHelper.getDemoPersona().name
    },
    demoPersonaRole () {
      return this.switchRole ? 'student' : StoreHelper.getDemoPersona().role
    }
  },
  mounted () {
    this.resetSubmitData()
  },
  methods: {
    resetSubmitData: function () {
      this.submitData = {
        assignmentName: this.assignment.name,
        assignmentDescription: this.assignment.description,
        externalId: this.assignment.externalId,
        consumerKey: this.toolConsumerKey,
        consumerSecret: this.toolConsumerKey,
        toolUrl: StoreHelper.apiUrlGet() + 'api/launch_lti'
      }
    },
    saveSubmitData : function () {

    },
    gotoEhr: function () {
      // Go to EHR. This will result in a page change
      const returnUrl = window.location.origin + this.$route.path // come back to this LMS page
      const sd = this.submitData
      const key = sd.consumerKey
      const externalId = sd.externalId
      const assignmentName = sd.assignmentName
      const assignmentDescription = sd.assignmentDescription
      const secret = sd.consumerSecret
      const name = this.demoPersonaName
      const role = this.demoPersonaRole
      demoGoToEhr(key, secret, name, role, assignmentName, assignmentDescription, externalId, returnUrl)
    },
    showEditDialog: function (event) {
      this.$refs.theDialog.showDialog(this.submitData, () => {
        this.resetSubmitData()
      }, () => {
        this.saveSubmitData()
      })
    },

  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.field-head {
  font-weight: bold;
}
.field-head::after{
  content: ": "
}

.config-data div div {
  padding: 0;
}
</style>
