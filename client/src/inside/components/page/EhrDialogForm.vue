<template lang="pug">
  div
    app-dialog(
      :isModal="!isViewOnly",
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      v-bind:errors="errorList",
      :cancelButtonLabel="isViewOnly ? 'Close' : 'Cancel'",
      :hasFooterContent="true"
      :useSave="!isViewOnly"
      :disableSave="disableSave"
    )
      h3(slot="header") {{ formLabel }}
      div(slot="body", class="ehr-page-content")
        ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", :viewOnly='isViewOnly')
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrGroup from '@/inside/components/page/EhrGroup'
import EventBus, { FORM_INPUT_EVENT } from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'

export default {
  components: {
    EhrGroup,
    AppDialog
  },
  inject: ['pageDataKey', 'isEmbedded'],
  data: function () {
    return {
      errorList: [],
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
  },
  computed: {
    formLabel () {
      return this.tableDef.label || this.tableDef.addButtonText
    },
    ehrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
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
      return this.isViewOnly || this.errorList.length > 0
    },
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : undefined
    },
    cancelDialog: function () {
      this.ehrHelp.cancelDialog()
      this.errorList = []
    },
    saveDialog: function () {
      this.errorList = this.ehrHelp.saveDialog() || []
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
    processInputChangeEvent (eData) {
      // let pageDataKey = this.pageDataKey
      // let embedded = this.isEmbedded
      // let srcValues = this.ehrHelp.getActiveData()
      this.errorList = this.ehrHelp.validateDialog() || []
    },
    receiveInputChangeEvent (eData) {
      if (!this.isViewOnly) {
        console.log('receiveInputChangeEvent')
        if (this.changeTimeoutId) {
          clearTimeout(this.changeTimeoutId)
        }
        this.changeTimeoutId = setTimeout(() => this.processInputChangeEvent(eData), 500)
      }
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

