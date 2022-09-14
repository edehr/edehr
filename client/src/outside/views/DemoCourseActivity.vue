<template lang="pug">
  div
    div(class="card")
      div(class="card-content")
        div(class="config-data-block")
          div &nbsp;
          div &nbsp;
          div(v-show='editMode', class="edit-buttons")
            ui-button(v-on:buttonClicked="resetSubmitData", title='Reset activity data')
              fas-icon(:icon="appIcons.undo")
            ui-button(v-on:buttonClicked="showEditDialog", title='Edit activity')
              fas-icon(:icon="appIcons.edit")
        div(class="config-data-block")
          div &nbsp;
          div(class="field-head") Activity
          a(tabindex="0", class="is-link", v-on:keyup.enter="gotoEhr" @click="gotoEhr()") {{submitData.resource_link_title}}
        div(class="config-data-block")
          ui-info(title='Description', text='The description is composed on the LMS side by faculty to provide context and instructions for the students. Because students see this text in both the LMS and in the EdEHR this text needs to be written for both contexts. These words are to provide context around a particular simulation. Faculty can include links to resources related to the task.\n Each activity is linked to an EdEHR learning/object or assignment via the custom parameter.')
          div(class="field-head") Description
          div(v-text-to-html="submitData.resource_link_description", class="assignment-description")
        div(class="config-data", v-show='editMode')
          div(class="config-data-block")
            ui-info(title='Tool Url', text="This is the URL to the EdEHR server's api endpoint that is listening for LTI connections.")
            div(class="field-head") Tool Url
            div(class="") {{submitData.toolUrl}}
          div(class="config-data-block")
            ui-info(title='Consumer key', text="This is the key needed to identify this LMS to the EdEHR. This key and its associated secret are used to identify this LMS to the EdEHR and the secret is used to encrypt the request. Both of these are arranged between the EdEHR and the LMS administrators.")
            div(class="field-head") Consumer key
            div(class="") {{submitData.consumerKey}}
          div(class="config-data-block")
            ui-info(title='Consumer secret', text='The secret belongs to the consumer key.')
            div(class="field-head") Consumer secret
            div(class="") {{submitData.consumerSecret}}
          div(class="config-data-block")
            ui-info(title='Target', text='The target is where to open the activity. It is important to open the EdEHR in a full window.')
            div(class="field-head") Target
            div(class="") Always set to open in new window or existing window. Never in a frame.
    demo-course-activity-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import DemoCourseActivityDialog from '@/outside/components/DemoCourseActivityDialog'
import { demoGoToEhr } from '@/helpers/demo-helper'
import UiInfo from '@/app/ui/UiInfo'

export default {
  components: {
    UiInfo,
    UiButton,DemoCourseActivityDialog
  },
  data: function () {
    return {
      appIcons: APP_ICONS,
      submitData: {
      }
    }
  },
  props: {
    activity: { type: Object },
    editMode: { type: Boolean, default: false},
    switchRole: { type: Boolean, default: false}
  },
  computed: {
    resource_link_title () { return this.activity.resource_link_title},
    resource_link_description () { return this.activity.resource_link_description },
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
        resource_link_title: this.resource_link_title,
        resource_link_description: this.resource_link_description,
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
      let resource_link_id = sd.resource_link_title.toLowerCase().replace(' ','')
      const resource_link_title = sd.resource_link_title
      const resource_link_description = sd.resource_link_description
      const secret = sd.consumerSecret
      const name = this.demoPersonaName
      const role = this.demoPersonaRole
      demoGoToEhr(key, secret, name, role, resource_link_title, resource_link_description, resource_link_id, returnUrl)
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
.config-header-block {
  display: grid;
  grid-template-columns: 8rem;
}
.config-data-block {
  display: grid;
  grid-template-columns: 2rem 0.3fr 1fr;
}
.edit-buttons {
  margin-left: auto;
}

</style>
