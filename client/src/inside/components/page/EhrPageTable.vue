<template lang="pug">
  div(class="ehr-page-table")
    div(v-show="false")
      div(v-for="tCell in tableForm.rowTemplate")
        div {{tCell.tableLabel}}  - {{tCell.tableCss}}
      h2 table Data
      div(v-for="dRow in tableForm.tableData")
        div Row:
        div(v-for="cell in dRow")
          div cell: {{cell.tableCss}}
          div(v-for="cPart in cell.stack")
            div {{cPart.inputType}} - {{cPart.value}}
      div tkk: {{tableKey}} isTransposed {{tableDef.isTransposed}} isStacked {{isStacked}} isVertical {{isVertical}}
    div(v-if="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    //div(v-if="isVertical", class="column_table")
    //  ehr-table-vertical(:ehrHelp="ehrHelp", :tableDef="tableDef")
    //div(v-else-if="isStacked", class="stacked_table")
    div
      h2(v-show="tableDef.label") {{tableDef.label}}
      ehr-table-stacked(:ehrHelp="ehrHelp", :tableDef="tableDef", :tableForm="tableForm")
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrTableStacked from './EhrTableStacked'
import EhrTableVertical from './EhrTableVertical'
import UiButton from '../../../app/ui/UiButton.vue'
import EventBus from '../../../helpers/event-bus'
import { SHOW_TABLE_DIALOG_EVENT, PAGE_DATA_READY_EVENT } from '../../../helpers/event-bus'


export default {
  name: 'EhrPageTable',
  components: {
    EhrTableStacked,
    EhrTableVertical,
    EhrDialogForm,
    UiButton
  },
  data: function () {
    return {
      tableForm: {}
    }
  },
  inject: [ 'pageDataKey'],
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object, default: function () {return {}} }
  },
  provide () {
    return {
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined
    }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    isVertical () {
      return this.tableForm.isTransposed
    },
    isStacked () {
      return this.tableForm.isStacked
    },
    showTableAddButton () {
      return this.ehrHelp.showTableAddButton()
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableKey)
    }
  },
  methods: {
    showDialog: function () {
      // console.log('EhrPageTable showDialog ', this.tableDef)
      this.ehrHelp.showDialog(this.tableKey)
    },
    refresh () {
      console.log('EhrPageTable refresh ', this.tableKey)
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
    }
  },
  mounted: function () {
    const _this = this
    this.showEventHandler = function () {
      _this.showDialog()
    }
    EventBus.$on(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    this.refreshEventHandler = function () {
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.showEventHandler) {
      EventBus.$off(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    }
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
