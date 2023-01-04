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
      return this.isViewOnly || this.errorList.length > 0 || !this.hasData
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
        this.$refs.confirmCancelDialog.showDialog('Confirm cancel', 'Do you want to close and not save a draft?')
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
      if (eData.isEmbedded) {
        /*
        When a portion of the dialog form is used as an embedded form fragment we want to be
        sure to not open the underlying dialog that would normally contain that fragment.
         */
        return
      }
      if(eData.value) {
        this.$refs.theDialog.onOpen()
      } else {
        this.$refs.theDialog.onClose()
      }
    },
    receiveInputChangeEvent (eData) {
      const VALIDATION_TIMEOUT = 500
      const SAVE_DRAFT_TIMEOUT = 5000
      if (!this.isViewOnly) {
        // some pages have more than one table, each with a dialog. only respond to events for the right table
        if (eData.tableKey === this.tableKey) {
          if (this.validationTimeoutId) {
            clearTimeout(this.validationTimeoutId)
          }
          this.validationTimeoutId = setTimeout(() => {
            this.errorList = this.ehrHelp.validateDialog() || []
          }, VALIDATION_TIMEOUT)
          this.clearDraftTimeout()
          this.saveDraftTimeoutId = setTimeout(() => {
            this.ehrHelp.saveDialogDraft()
          }, SAVE_DRAFT_TIMEOUT)
        }
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
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    this.eventHandler = function (eData) {
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
    this.inputChangeEventHandler = function (eData) {
      _this.receiveInputChangeEvent(eData)
    }
    EventBus.$on(FORM_INPUT_EVENT, this.inputChangeEventHandler)

  },
  beforeDestroy: function () {
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    if (this.eventHandler) {
      EventBus.$off(ch, this.eventHandler)
    }
    if (this.inputChangeEventHandler) {
      EventBus.$off(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    }
  }
}
</script>
