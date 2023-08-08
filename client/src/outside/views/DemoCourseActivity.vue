<template lang="pug">
  div
    div(class="")
      div(class="flow_across")
        a(tabindex="0", class="is-link", v-on:keyup.enter="gotoEhr" @click="gotoEhr()") {{submitData.resource_link_title}}
        div
          ui-info(:title="submitData.resource_link_title", :html="submitData.resource_link_description")
          //ui-info(title='Description', text='The description is composed on the LMS side by faculty to provide context and instructions for the students. Because students see this text in both the LMS and in the EdEHR this text needs to be written for both contexts. These words are to provide context around a particular simulation. Faculty can include links to resources related to the task.\n Each activity is linked to an EdEHR learning/object or assignment via the custom parameter.')
        //div(v-text-to-html="submitData.resource_link_description", class="assignment-description")

        div(v-show='editMode', class="edit-buttons")
          ui-button(v-on:buttonClicked="resetSubmitData", title='Reset activity data')
            fas-icon(:icon="appIcons.undo")
          ui-button(v-on:buttonClicked="showEditDialog", title='Edit activity')
            fas-icon(:icon="appIcons.edit")
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
    course: { type: Object },
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
    lObjLink ( activityTitle) {
      const data =  StoreHelper.getDemoLObjInfoFromName(activityTitle)
      return data.id
    },
    lObjAppType ( activityTitle) {
      const data =  StoreHelper.getDemoLObjInfoFromName(activityTitle)
      return data.appType
    },
    resetSubmitData: function () {
      const personaName = this.demoPersonaName
      const [given, family] = personaName.split(' ')
      this.submitData = {
        //auth etc
        oauth_consumer_key: this.toolConsumerKey,
        oauth_consumer_secret: this.toolConsumerKey,
        oauth_nonce: Date.now() + Math.random() * 100,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: Math.round(Date.now() / 1000),

        //consumer
        tool_consumer_instance_guid: 'de-'+this.toolConsumerKey,
        tool_consumer_instance_name:'EdEHR Demo LMS',
        tool_consumer_info_product_family_code: 'EdEHR Demo LMS',
        tool_consumer_instance_description:'Simulation LMS for demonstration of the EdEHR',

        // lti
        toolUrl: StoreHelper.apiUrlGet() + 'api/launch_lti',
        launch_presentation_return_url: window.location.origin + this.$route.path, // come back to this LMS page
        lti_version: 'LTI-1p0',
        lti_message_type: 'basic-lti-launch-request',

        // user
        lis_person_name_given: given,
        lis_person_name_family: family,
        lis_person_name_full: personaName,
        roles: this.demoPersonaRole,
        user_id: this.toolConsumerKey.slice(-5) + personaName.replace(' ', ''),

        // course
        context_id: this.course.courseTitle.replace(' ', ''),
        context_label: this.course.description,
        context_title: this.course.courseTitle,
        context_type: 'Demonstration',

        // activity
        resource_link_id: this.resource_link_title.toLowerCase().replace(' ',''),
        resource_link_title: this.resource_link_title,
        resource_link_description: this.resource_link_description,

        // custom bits
        custom_is_demo: true, // do we need this one still?
        isDemoLti: true,
        demo_lobjId: this.lObjLink(this.activity),
        appType: this.lObjAppType(this.activity),
      }
    },
    saveSubmitData : function () {
      console.log('TODO. Dev do we need this function?')
    },
    gotoEhr: function () {
      // demo_lobjId
      // Go to EHR. This will result in a page change
      demoGoToEhr( this.submitData)
    },
    showEditDialog: function (event) {
      this.resetSubmitData()
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
