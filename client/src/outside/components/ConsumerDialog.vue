<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="ehr-group-wrapper grid-left-to-right-3")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Consumer name
                input(class="input text-input", type="text", v-model="consumerName", v-validate="nameValidate")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Display name
                input(class="input text-input", type="text", v-model="displayName")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Consumer key
                input(class="input text-input", type="text", v-model="key", v-validate="keyValidate")
            div(class="form-element")
              div(class="text_input_wrapper")
                label Consumer secret
                input(class="input text-input", type="text", v-model="secret", v-validate="secretValidate")
            //div(class="form-element")
            //  div(class="text_input_wrapper")
            //    label
            //      input(class="checkbox", type="checkbox", v-model="isPrimary")
            //      span {{consumerType}}

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import StoreHelper from '../../helpers/store-helper'

const TITLES = {
  edit: 'Edit consumer properties',
  create: 'Create a new consumer'
}
const ERRORS = {
  NAME_REQUIRED: 'Consumer name is required',
  KEY_REQUIRED: 'Consumer key is required',
  SECRET_REQUIRED: 'Consumer secret is required',
}

const EDIT_ACTION= 'edit'
const CREATE_ACTION = 'create'

export default {
  data () {
    return {
      consumerName: '',
      displayName: '',
      key: '', secret: '',
      actionType: '',
      consumerId: '',
      isPrimary: undefined
    }
  },
  components: { AppDialog },
  computed: {
    consumerType () {
      return this.isPrimary === true ? 'Is a primary consumer' : ( this.isPrimary === false ? 'Is a demo consumer' : 'unknown')
    },
    nameValidate () {
      return this.consumerName.trim() ? undefined :  ERRORS.NAME_REQUIRED
    },
    keyValidate () {
      return this.key.trim() ? undefined :  ERRORS.KEY_REQUIRED
    },
    secretValidate () {
      return this.secret.trim() ? undefined :  ERRORS.SECRET_REQUIRED
    },
    disableSave () {
      return !!(this.nameValidate || this.keyValidate || this.secretValidate)
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    }
  },
  methods: {
    clearInputs: function () {
      this.actionType
        = this.consumerName
        = this.displayName
        = this.key
        = this.secret
        = this.consumerId = ''
      this.isPrimary = undefined
    },
    showDialog (consumerData) {
      this.clearInputs()
      if (consumerData) {
        this.actionType = EDIT_ACTION
        this.consumerId = consumerData._id
        this.consumerName = consumerData.tool_consumer_instance_name || ''
        this.displayName = consumerData.displayName || ''
        this.key = consumerData.oauth_consumer_key
        this.secret = consumerData.oauth_consumer_secret
        // this.isPrimary = consumerData.is_primary
      } else {
        this.actionType = CREATE_ACTION
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      let aConsumer = {
        tool_consumer_instance_name: this.consumerName,
        display_name: this.displayName,
        oauth_consumer_key: this.key,
        oauth_consumer_secret: this.secret
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        return StoreHelper.updateConsumer(this.consumerId, aConsumer)
      } else if (this.actionType === CREATE_ACTION) {
        return StoreHelper.createConsumer( aConsumer)
      }
    }
  }
}
</script>
