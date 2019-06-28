<template lang="pug">
  div
    app-dialog(:class="$options.name", :isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") {{ tableDef.addButtonText }}
      div(slot="body", class="region ehr-page-content")
        div(class="form-row-wrapper")
          div(class="form-element-wrapper", v-bind:class="cssFromDefs(element)", v-for="element in topRow.elements", v-bind:key="element.elementKey")
            ehr-dialog-form-element(:inputs="inputs", :element="element", :ehrHelp="ehrHelp", isDialogElement=true)
        hr(v-if="hasNameProfRow")
        div(class="form-row-wrapper", v-for="row in middleRange")
          div(class="form-element-wrapper", v-bind:class="cssFromDefs(element)", v-for="element in row.elements", v-bind:key="element.elementKey")
            ehr-dialog-form-element(:inputs="inputs", :element="element", :ehrHelp="ehrHelp", isDialogElement=true)
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import EhrDialogFormElement from '../components/elements/EhrDialogFormElement.vue'
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
    hasNameProfRow () {
      // Does the first row in the dialog fit the Name, Profession,.... pattern ...
      let top = this.topRow.elements
      // TODO perhaps also check for certain elements ....
      return top.length === 4
    },
    tableRows () {
      return this.tableDef.tableForm ? this.tableDef.tableForm.rows : []
    },
    topRow () {
      let rows = this.tableRows
      let top = rows.length > 0 ? rows[0] : []
      return top
    },
    middleRange () {
      let rows = this.tableRows
      let middle = rows.length > 1 ? rows.slice(1, rows.length) : []
      return middle
    }
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : 'noClass'
      // return element.inputType + ' ' + element.elementKey
    },
    cancelDialog: function () {
      this.ehrHelp.cancelDialog(this.tableKey)
    },
    saveDialog: function () {
      this.ehrHelp.saveDialog(this.pageDataKey, this.tableKey)
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
