<template lang="pug">
  div
    app-dialog(:class="$options.name", :isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") {{ tableDef.addButtonText }}
      div(slot="body", class="region ehr-page-content")
        div(class="input-fieldrow")
          ehr-dialog-form-element(v-for="fmEl in topRow.elements", :key="fmEl.elementKey", :inputs="inputs", :element="fmEl", :ehrHelp="ehrHelp", class="input-fieldrow-element")
        hr
        div(v-for="midRow in middleRange", class="input-fieldrow")
          ehr-dialog-form-element(v-for="fmEl in midRow.elements", :key="fmEl.elementKey", :inputs="inputs", :element="fmEl", :ehrHelp="ehrHelp", class="input-fieldrow-element")
        div(class="input-fieldrow")
          ehr-dialog-form-element(v-for="fmEl in lastRow.elements", :key="fmEl.elementKey", :inputs="inputs", :element="fmEl", :ehrHelp="ehrHelp", class="input-fieldrow-element")
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import EhrDialogFormElement from '../components/EhrDialogFormElement.vue'
import EventBus from '../../helpers/event-bus'

export default {
  name: 'EhrDialogForm',
  components: {
    EhrDialogFormElement,
    AppDialog
  },
  data: function () {
    return {
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object },
    tableDef: { type: Object },
    inputs: { type: Object },
    errorList: { type: Array }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    topRow () {
      // console.log('dialog get top row from ', this.tableDef)
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let top = rows.length > 0 ? rows[0] : []
      // console.log('top row ', this.tableDef, top)
      return top
    },
    middleRange () {
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let middle = rows.length > 2 ? rows.slice(1, rows.length - 1) : []
      // console.log('middle', middle)
      return middle
    },
    lastRow () {
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let last = rows.length > 1 ? rows[rows.length - 1] : []
      // console.log('last row ', last)
      return last
    }
  },
  methods: {
    formCss: function (element) {
      // return element.formCss ? element.formCss : 'noClass'
      return element.inputType + ' ' + element.elementKey
    },
    cancelDialog: function () {
      this.ehrHelp.cancelDialog(this.tableKey)
    },
    saveDialog: function () {
      this.ehrHelp.saveDialog(this.pageDataKey, this.tableKey)
    },
    receiveShowHideEvent (eData) {
      if(eData.value) {
        this.$refs.theDialog.onOpen()
      } else {
        this.$refs.theDialog.onClose()
      }
    }
  },
  mounted: function () {
    const _this = this
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    console.log('EhrDialogForm add listener', ch)
    this.eventHandler = function (eData) {
      console.log('EhrDialogForm receiveShowHideEvent', ch)
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
@import '../../scss/definitions';
.EhrDialogForm {
  .dialog-wrapper {
    /* Moved the following styling into the AppDialogShell */
    /*
    border: 1px solid $grey40;
    padding: 2em;
    */
  }
}
</style>
