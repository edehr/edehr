<template lang="pug">
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") {{ tableDef.addButtonText }}
      div(slot="body", class="ehr-page-content")
        ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="inputs")
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../../app/components/AppDialogShell'
import EhrDialogFormElement from '../elements/EhrDialogFormElement'
import EhrGroup from './EhrGroup'
import EventBus from '../../../helpers/event-bus'

export default {
  name: 'EhrDialogForm',
  components: {
    EhrDialogFormElement,
    EhrGroup,
    AppDialog
  },
  inject: [ 'isPageElement', 'pageDataKey' ],
  data: function () {
    return {
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
    inputs: { type: Object },
    errorList: { type: Array }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    groups () {
      return this.tableDef.form ? this.tableDef.form.ehr_groups : []
    }
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : undefined
      // return element.inputType + ' ' + element.elementKey
    },
    cancelDialog: function () {
      this.ehrHelp.cancelDialog()
    },
    saveDialog: function () {
      this.ehrHelp.saveDialog()
    },
    receiveShowHideEvent (eData) {
      // console.log('EhrDialogForm rcv show hide', this.inputs)
      if(eData.value) {
        this.$refs.theDialog.onOpen()
      } else {
        this.$refs.theDialog.onClose()
      }
    }
  },
  mounted: function () {
    const _this = this
    console.log('mount dialog', this.pageDataKey)
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    // console.log('EhrDialogForm add listener', ch)
    this.eventHandler = function (eData) {
      // console.log('EhrDialogForm receiveShowHideEvent', ch)
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
  },
  beforeDestroy: function () {
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    if (this.eventHandler) {
      // console.log('beforeDestroy, remove listener', ch)
      EventBus.$off(ch, this.eventHandler)
    }
  }
}
</script>

<style lang="scss">
//@import '../../scss/definitions';
</style>
