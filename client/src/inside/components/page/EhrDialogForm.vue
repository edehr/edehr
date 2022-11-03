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
import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'

export default {
  components: {
    EhrGroup,
    AppDialog
  },
  data: function () {
    return {
      errorList: [],
      ackCaseStudyData: false // has the user acknowledged the reqHeader?, that is, confirmed the checkbox
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
      return this.isViewOnly
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
  },
  mounted: function () {
    const _this = this
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    this.eventHandler = function (eData) {
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
  },
  beforeDestroy: function () {
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    if (this.eventHandler) {
      EventBus.$off(ch, this.eventHandler)
    }
  }
}
</script>

