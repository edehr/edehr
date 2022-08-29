<template lang='pug'>
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") Edit demo LMS activity
      div(slot="body")
        div(class="config-data-block")
          ui-info(title="Activity Name", :text="documentation.resource_link_title")
          div LMS Activity Name
          div
            input(class="input text-input", type="text", v-model="submitData.resource_link_title", v-validate="nameValidate")
        div(class="config-data-block")
          ui-info(title="Activity Description", :text="documentation.resource_link_description")
          div Activity Description
          div
            textarea( v-model="submitData.resource_link_description")
        div(class="config-data-block")
          ui-info(title="Learning Object Id", :text="documentation.externalId")
          div Custom parameter
          div
            input(class="input text-input", type="text", v-model="submitData.externalId", v-validate="externalValidate")
        div(class="config-data-block")
          ui-info(title="Consumer key", :text="documentation.consumerKey")
          div Consumer key
          div
            input(class="input text-input", type="text", v-model="submitData.consumerKey", v-validate="cKeyValidate")
        div(class="config-data-block")
          ui-info(title="Consumer secret", :text="documentation.consumerSecret")
          div Consumer secret
          div
            input(class="input text-input", type="text", v-model="submitData.consumerSecret", v-validate="cSecretValidate")
        div(class="config-data-block")
          ui-info(title="Tool Url", :text="documentation.toolUrl")
          div Tool URL
          div
            input(class="input text-input", type="text", v-model="submitData.toolUrl" disabled)
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiInfo from '@/app/ui/UiInfo'

const ERRORS = {
  NAME_REQUIRED: 'Activity name is required',
  CONSUMER_KEY: 'Must provide a consumer key',
  CONSUMER_SECRET: 'Must provide a consumer secret',
  ID_REQUIRED: 'Learning object id is required',
  ID_PATTERN: 'Only letters, numbers, periods, hyphens or underscores can be used in a learning object id'
}

export default {
  data () {
    return {
      submitData: {
        resource_link_title: '',
        externalId: '',
        resource_link_description: '',
        consumerKey: '',
        consumerSecret: '',
        toolUrl: ''
      }
    }
  },
  components: { AppDialog, UiInfo },
  computed: {
    documentation () { return {
      resource_link_title: 'The activity name says what this activity is for. It is sent by the LMS to the EdEHR' +
        ' and will be shown to the student along with the name and description of the learning object.  ',
      resource_link_description: 'The description can provide context and guidance for the student to complete the ' +
        ' activity in the EdEHR. ',
      consumerSecret: 'The tool consumer secret, like the tool consumer key, is arranged between the EdEHR administrator ' +
        ' and the learning management system support team.',
      consumerKey: 'The tool consumer key identifies the learning institution on the EdEHR server. ' +
        ' For this demo mode the key and secret are unique to you while you are in the demo mode. '+
        ' In normal use the key and secret are set up between the EdEHR administrator and the ' +
        ' course creation team at each learning institution. In this demonstration mode you can try modifying the key and/or the secret. ' +
        ' This will break the connection yet you can explore how this error condition will appear to you and your users.',
      externalId: 'This is the id of the EdEHR learning object. The person who configures the external tool in the learning' +
        ' management will enter "assignment=' +  this.submitData.externalId + '"',
      toolUrl: 'The tool url is the connect to EdEHR address. In this demonstration mode this url is fixed and is ' +
        ' shown here to demonstrate what it looks like.  This url is composed of the domain name of your EdEHR server plus "api/launch_lti". ' +
        ' This connection point uses the LTI standard. LTI stands for Learning Tools Interoperability and this is the way your LMS (learning management system such as Moodle or D2L) communicates ' +
        ' with content providers, like the EdEHR.'
    }
    },
    nameValidate () {
      return this.submitData.resource_link_title.trim() ? undefined : ERRORS.NAME_REQUIRED
    },
    cKeyValidate () {
      return this.submitData.consumerKey.trim() ? undefined : ERRORS.CONSUMER_KEY
    },
    cSecretValidate () {
      return this.submitData.consumerSecret.trim() ? undefined : ERRORS.CONSUMER_SECRET
    },
    externalValidate () {
      if (!this.submitData.externalId) {
        return ERRORS.ID_REQUIRED
      }
      let re = /^[0-9a-zA-Z\-_\.]*$/
      if (!this.submitData.externalId.match(re)) {
        return ERRORS.ID_PATTERN
      }
      return undefined
    },
    errors () {
      const errMsgs = this.nameValidate || this.externalValidate || this.cKeyValidate || this.cSecretValidate
      return errMsgs ? [errMsgs] : []
    },
    hasErrors () {
      return this.errors.length > 0
    },
    disableSave () {
      return this.hasErrors
    }
  },
  methods: {
    showDialog (assignmentData, resetCallback, saveCallback) {
      this.submitData = assignmentData
      this.resetCallback = resetCallback
      this.saveCallback = saveCallback
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.resetCallback()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      this.saveCallback()
      this.$refs.theDialog.onClose()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.config-data-block {
  display: grid;
  grid-template-columns: 2rem 0.3fr 1fr;
  margin-bottom: 0.5rem;
}
</style>