<template lang="pug">
  div
    app-dialog(
      :isModal="!isViewOnly",
      fullScreen=true,
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      v-bind:errors="errorList",
      :cancelButtonLabel="cancelButtonText",
      :hasFooterContent="true"
      :useSave="!isViewOnly"
      :disableSave="disableSave"
    )
      ehr-patient-banner(slot="header-extra-content")
      h3(slot="header") {{ formLabel }}
      div(slot="body", class='ehr-dialog-form')
        div(id="ehrDialogForm")
          ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", :viewOnly='isViewOnly')
        ui-spinner-small(refId='ehrDialogForm', :loading="isClosing")
      span(slot="save-button") Save

    ui-confirm(ref="confirmCancelDialog", @confirm="cancelConfirmed", :saveLabel='ehrText.cancelDialogExitDialogLabel', :cancel-label='ehrText.cancelDialogReturnToEditLabel' )
    ui-confirm(ref="confirmSaveDialog", @confirm="saveConfirmed", @abort="saveDraft", :saveLabel='ehrText.saveDialogButtonLabel', :cancel-label='ehrText.saveDialogAsDraftButtonLabel' )
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrPatientBanner from '@/inside/components/EhrPatientBanner.vue'
import EhrGroup from '@/inside/components/page/EhrGroup'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import UiSpinnerSmall from '@/app/ui/UiSpinnerSmall.vue'
import UiConfirm from '@/app/ui/UiConfirm'
import { t18EhrFunctions, t18EhrText, t18ElementLabel, t18TableAddButtonLabel } from '@/helpers/ehr-t18'
import { formatYmdDateInLocalZone } from '@/helpers/date-helper'

export default {
  components: {
    UiSpinnerSmall,
    EhrPatientBanner,
    UiConfirm,
    EhrGroup,
    AppDialog
  },
  inject: ['pageDataKey', 'isEmbedded'],
  data: function () {
    return {
      errorList: [],
      isClosing: false
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
  },
  computed: {
    ehrText () { return t18EhrText() },
    ehrTextFn () { return t18EhrFunctions() },
    cancelButtonText () { return this.isViewOnly ? this.ehrText.ehrDialogCancelButtonViewOnly : this.ehrText.ehrDialogCancelButtonVEdit },
    formLabel () {
      return (t18ElementLabel(this.tableDef) || t18TableAddButtonLabel(this.tableDef))
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
      this.isClosing = true
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      this.ehrHelp.closeDialog()
    },
    cancelDialog: function () {
      if (this.isViewOnly || !this.hasData) {
        this.closeDialog()
      } else {
        if (this.hasRecHeader) {
          this.$refs.confirmCancelDialog.showDialog(
            'Confirm cancel.',
            'This action will delete the current record. If you are not sure press the "Return to Edit" button and then save a draft record.')
        } else {
          this.closeDialog()
        }
      }
    },
    cancelConfirmed: async function () {
      this.isClosing = true
      // TODO fix this future defect. Remove the row the dialog was opened on and not just the first draft row.
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
      this.isClosing = false
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
          // only save if there is data. Otherwise, we create an empty draft row that needs to be removed if user just cancels
          if (this.hasData) {
            await this.ehrHelp.saveDialogDraft()
          }
          this.saveDraftTimeoutId = undefined // reset so another save can be queued up
        }, SAVE_DRAFT_TIMEOUT)
      }
    },
    saveConfirmed: async function () {
      this.isClosing = true
      // note that save is disabled if there are errors or there is no data
      // If there is a pending draft save then just cancel it.
      this.clearDraftTimeout()
      await this.ehrHelp.saveDialogData()
      this.closeDialog()
    },
    saveDialog: function () {
      if (this.hasRecHeader) {
        const { name, profession, time } = this.ehrHelp.prepareAndGetActiveDialogRecordHeader()
        const today = formatYmdDateInLocalZone(new Date())
        const msg = this.ehrTextFn.saveDialogVerifyMessageV2(name, profession, today, time)
        this.$refs.confirmSaveDialog.showDialog(this.ehrText.saveDialogVerifyTitle, msg)
      } else {
        this.saveConfirmed()
      }
    },
    saveDraft: async function () {
      this.isClosing = true
      this.clearDraftTimeout()
      await this.ehrHelp.saveDialogDraft()
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
