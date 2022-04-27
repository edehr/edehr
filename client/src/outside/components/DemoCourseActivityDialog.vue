<template lang='pug'>
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") Edit Learning Management System External Tool
      div(slot="body")
        div(class="columns")
          div(class="column is-3")
            span Activity Name
            ui-info(title="Activity Name", :text="documentation.assignmentName")
          div(class="column is-4")
            input(class="input text-input", type="text", v-model="submistData.assignmentName", v-validate="nameValidate")
        div(class="columns")
          div(class="column is-3")
            span Activity Description
            ui-info(title="Activity Description", :text="documentation.assignmentName")
          div(class="column is-9")
            textarea( v-model="submistData.assignmentDescription")
        div(class="columns")
          div(class="column is-3")
            span Learning Object Id
            ui-info(title="Learning Object Id", :text="documentation.externalId")
          div(class="column is-4")
            input(class="input text-input", type="text", v-model="submistData.externalId", v-validate="externalValidate")
        div(class="columns")
          div(class="column is-3")
            span Consumer key
            ui-info(title="Consumer key", :text="documentation.consumerKey")
          div(class="column is-4")
            input(class="input text-input", type="text", v-model="submistData.consumerKey", v-validate="cKeyValidate")
        div(class="columns")
          div(class="column is-3")
            span Consumer secret
            ui-info(title="Consumer secret", :text="documentation.consumerSecret")
          div(class="column is-4")
            input(class="input text-input", type="text", v-model="submistData.consumerSecret", v-validate="cSecretValidate")
        div(class="columns")
          div(class="column is-3")
            span Tool URL
            ui-info(title="Tool Url", :text="documentation.toolUrl")
          div(class="column is-4")
            input(class="input text-input", type="text", v-model="submistData.toolUrl" disabled)
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiInfo from '@/app/ui/UiInfo'
import StoreHelper from '@/helpers/store-helper'

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
      submistData: {
        assignmentName: '',
        externalId: '',
        assignmentDescription: '',
        consumerKey: '',
        consumerSecret: '',
        toolUrl: ''
      }
    }
  },
  components: { AppDialog, UiInfo },
  computed: {
    documentation () { return {
      assignmentName: 'The assignment name appears in both the learning management system and in the educational EHR',
      consumerSecret: 'The tool consumer secret, like the tool consumer key, is arranged between the EdEHR administrator ' +
        ' and the learning management system support team.',
      consumerKey: 'The tool consumer key is used to identify the learning institution on the EdEHR server. ' +
        'For this demo mode the key and secret are unique to you while you are in the demo mode. '+
        'In normal use the key and secret are set up between the EdEHR administrator and the ' +
        'course creation team at each learning institution. In this demonstration mode you can try modifying the key and/or the secret. ' +
        'This will break the connection yet you can explore how this error condition will appear to you and your users.',
      externalId: 'This is the id of the EdEHR learning object. The person who configures the external tool in the learning' +
        ' management will enter "assignment=' +  this.submistData.externalId + '"',
      toolUrl: 'The tool url is the address of the LTI end point on the EdEHR server. In this demonstration mode this url is fixed and is ' +
        'shown here to demonstrate what it looks like.  This url is composed of the domain name of your EdEHR server plus "api/launch_lti". ' +
        'LTI stands for Learning Tools Interoperability and this is the way your LMS (learning management system such as Moodle or D2L) communicates ' +
        'with content providers, like the EdEHR.'
    }
    },
    nameValidate () {
      return this.submistData.assignmentName.trim() ? undefined : ERRORS.NAME_REQUIRED
    },
    cKeyValidate () {
      return this.submistData.consumerKey.trim() ? undefined : ERRORS.CONSUMER_KEY
    },
    cSecretValidate () {
      return this.submistData.consumerSecret.trim() ? undefined : ERRORS.CONSUMER_SECRET
    },
    externalValidate () {
      if (!this.submistData.externalId) {
        return ERRORS.ID_REQUIRED
      }
      let re = /^[0-9a-zA-Z\-_\.]*$/
      if (!this.submistData.externalId.match(re)) {
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
      this.submistData = assignmentData
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
