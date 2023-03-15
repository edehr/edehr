<template lang="pug">
  div
    app-dialog(
      :isModal="!isViewOnly",
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      v-bind:errors="errorList",
      :cancelButtonLabel="cancelButtonText",
      :hasFooterContent="true"
      :useSave="!isViewOnly"
      :disableSave="disableSave"
    )
      ehr-dialog-patient-banner(slot="header-extra-content")
      h3(slot="header") {{ formLabel }}
      div(slot="body")
        ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", :viewOnly='isViewOnly')
      span(slot="save-button") Save
    ui-confirm(ref="confirmCancelDialog", @confirm="cancelConfirmed", :saveLabel='ehrText.cancelDialogExitDialogLabel', :cancel-label='ehrText.cancelDialogReturnToEditLabel' )
    ui-confirm(ref="confirmSaveDialog", @confirm="saveConfirmed", @abort="saveDraft", :saveLabel='ehrText.saveDialogButtonLabel', :cancel-label='ehrText.saveDialogAsDraftButtonLabel' )
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrGroup from '@/inside/components/page/EhrGroup'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import UiConfirm from '@/app/ui/UiConfirm'
import EhrDialogPatientBanner from '@/inside/components/page/EhrDialogPatientBanner'
import { ehrText } from '@/appText'

export default {
  components: {
    EhrDialogPatientBanner,
    UiConfirm,
    EhrGroup,
    AppDialog
  },
  inject: ['pageDataKey', 'isEmbedded'],
  data: function () {
    return {
      ehrText,
      errorList: [],
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
  },
  computed: {
    cancelButtonText () { return this.isViewOnly ? ehrText.ehrDialogCancelButtonViewOnly : ehrText.ehrDialogCancelButtonVEdit },
    formLabel () {
      return this.tableDef.label || this.tableDef.addButtonText
    },
    ehrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
    hasData () {
      return this.ehrHelp.activeTableDialogHasData()
    },
    hasRecHeader () {
      return this.ehrHelp.activeTableDialogHasRecordHeader()
    },
    isViewOnly () {
      return this.ehrHelp.isViewOnly(this.tableKey)
    },
    tableKey () {
      return this.tableDef.tableKey
    },
    groups () {
      return this.tableDef.form ? this.tableDef.form.ehr_groups : []
    },
    disableSave () {
      let canSave
      if (this.isViewOnly) {
        canSave = true
      } else {
        canSave = this.errorList.length === 0 && this.hasData
      }
      return !canSave
    },
  },
  methods: {
    closeDialog () {
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      this.ehrHelp.closeDialog()
    },
    cancelDialog: function () {
      if (this.isViewOnly || !this.hasData) {
        this.closeDialog()
      } else {
        if (this.hasRecHeader) {
          this.$refs.confirmCancelDialog.showDialog('Confirm cancel', 'Do you want to close and not save a draft?')
        } else {
          this.closeDialog()
        }
      }
    },
    cancelConfirmed: async function () {
      await this.ehrHelp.removeDraftRow()
      this.closeDialog()
      this.errorList = []
    },
    clearDraftTimeout () {
      if (this.saveDraftTimeoutId) {
        clearTimeout(this.saveDraftTimeoutId)
      }
    },
    receiveShowHideEvent (eData) {
      // console.log('receiveShowHideEvent (eData)', eData)
      // this event doesn't happen on embedded forms so the following does nothing
      if (eData.isEmbedded) {
        console.log('When a portion of the dialog form is used as an embedded form fragment we must not open the dialog associated that fragment.', this.tableKey)
        this.ehrHelp.setViewOnly(this.tableKey)
        return
      }
      if(eData.open) {
        this.$refs.theDialog.onOpen()
      } else {
        this.$refs.theDialog.onClose()
      }
    },
    receiveInputChangeEvent (eData) {
      const showMsgs = false
      const {element, tableKey, value} = eData
      const { elementKey, formIndex } = element
      if (showMsgs) console.log('receiveInputChangeEvent', tableKey, elementKey, formIndex, value)
      if ( this.isEmbedded) {
        if (showMsgs) console.log('skip receiveInputChangeEvent on elements because this dialog form is isEmbedded',tableKey, elementKey, formIndex, value)
        return
      }
      if (this.isViewOnly) {
        if (showMsgs) console.log('skip receiveInputChangeEvent on elements in view only areas',tableKey, elementKey, formIndex, value)
        return
      }
      if (tableKey !== this.tableKey) {
        if (showMsgs) console.log('skip receiveInputChangeEvent on elements from different table:', this.tableKey, tableKey, elementKey, formIndex, value)
        return
      }
      // some pages have more than one table, each with a dialog. Only respond to events for the right table
      if (showMsgs) console.log('SET UP VALIDATION AND SAVE FOR ', tableKey, elementKey)
      // Delay validation until input stream goes quiet for the timeout period
      const VALIDATION_TIMEOUT = 500
      if (this.validationTimeoutId) {
        clearTimeout(this.validationTimeoutId)
      }
      this.validationTimeoutId = setTimeout(() => {
        this.errorList = this.ehrHelp.validateDialog() || []
      }, VALIDATION_TIMEOUT)

      // Any input change sets up a draft save after timeout. Don't wait for quiet time.
      const SAVE_DRAFT_TIMEOUT = 3000
      if ( !this.saveDraftTimeoutId ) { // IF a save is pending then done else set up a delayed save
        // console.log('input change set up timeout to save draft', eData, this.tableDef)
        this.saveDraftTimeoutId = setTimeout(async () => {
          await this.ehrHelp.saveDialogDraft()
          this.saveDraftTimeoutId = undefined // reset so another save can be queued up
        }, SAVE_DRAFT_TIMEOUT)
      }
    },
    saveConfirmed: async function () {
      // note that save is disabled if there are errors or there is no data
      // If there is a pending draft save then just cancel it.
      this.clearDraftTimeout()
      await this.ehrHelp.saveDialogData()
      this.closeDialog()
    },
    saveDialog: function () {
      if (this.hasRecHeader) {
        const { name, profession, day, time } = this.ehrHelp.activeTableDialogRecordHeader()
        const msg = ehrText.saveDialogVerifyMessage(name, profession, day, time)
        this.$refs.confirmSaveDialog.showDialog(ehrText.saveDialogVerifyTitle, msg)
      } else {
        this.saveConfirmed()
      }
    },
    saveDraft: async function () {
      this.clearDraftTimeout()
      await this.ehrHelp.saveDialogDraft()
      // else draft is already saved. Just need to close the dialog
      this.closeDialog()
    },
  },
  mounted: function () {
    const _this = this
    this.eventHandler = function (eData) {
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(this.ehrHelp.getDialogEventChannel(this.tableKey), this.eventHandler)
    this.inputChangeEventHandler = function (eData) {
      _this.receiveInputChangeEvent(eData)
    }
    EventBus.$on(FORM_INPUT_EVENT, this.inputChangeEventHandler)

  },
  beforeDestroy: function () {
    if (this.eventHandler) {
      EventBus.$off(this.ehrHelp.getDialogEventChannel(this.tableKey), this.eventHandler)
    }
    if (this.inputChangeEventHandler) {
      EventBus.$off(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    }
  }
}
</script>
