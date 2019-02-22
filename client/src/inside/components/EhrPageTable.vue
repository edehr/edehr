<template lang="pug">
  div
    div(v-show="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div(v-if="tableDef.isTransposed", class="column_table")
      table.table_vertical
        tbody
          tr(v-for="column in transposedColumns", :class="tableColumnCss(column)")
            td(v-for="cell in column", :class="tableElementCss(cell)") {{ cell.value }}

    div(v-if="!tableDef.isTransposed", class="row_table")
      table.table_horizontal
        thead
          tr
            th(v-for="cell in tableDef.tableCells", :class="cell.propertyKey", :title="cell.propertyKey") {{ cell.label }}
        tbody
          tr(v-for="item in tableData")
            td(v-for="cell in tableDef.tableCells", :class="cell.tableCss") {{ tableCellData(item, cell) }}
    ehr-dialog-form(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :tableDef="tableDef", :inputs="inputs", :errorList="errorList" )
    div(style="display:none") {{currentData}}
</template>

<script>
import EhrDialogForm from '../components/EhrDialogForm.vue'
import UiButton from '../../app/ui/UiButton.vue'
import moment from 'moment'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'EhrPageTable',
  components: {
    EhrDialogForm,
    UiButton
  },
  data: function() {
    return {
      tableData: [],
      transposedColumns: [],
      inputs: {}
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object },
    tableDef: { type: Object }
  },
  computed: {
    showTableAddButton() {
      return this.ehrHelp.showTableAddButton()
    },
    currentData() {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property tableData is set (intentional side-effect)
      // and tableData contains data from the database
      this.refresh()
      // console.log('EhrPageTable current table data', this.tableData)
      return this.tableData
    },
    tableForm() {
      let form = this.tableDef.tableForm
      // console.log('EhrPageTable get table form', this.tableDef)
      return form
    },
    errorList() {
      return this.ehrHelp.getErrorList(this.tableDef.tableKey)
    }
  },
  methods: {
    tableColumnCss: function(column) {
      let hide = 'hide-table-element'
      let css = hide
      column.forEach(cell => {
        if (!cell.tableCss.includes(hide)) {
          // console.log('cell css ', cell.tableCss)
          css = ''
        }
      })
      return css
    },
    tableElementCss: function(element) {
      return element.tableCss ? element.tableCss : 'noClass'
    },
    showDialog: function() {
      this.ehrHelp.showDialog(this.tableDef, this.inputs)
    },
    tableCellData: function(item, cell) {
      let value = item[cell.elementKey]
      if (cell.inputType === 'date') {
        let mom = moment(value, 'YYYY-MM-DDTHH:mm:ss ZZ')
        if (mom.isValid()) value = mom.format('DD MMM YYYY')
      }
      return value
    },
    refresh() {
      let tableKey = this.tableDef.tableKey
      let pageKey = this.pageDataKey
      console.log('EhrPageTable refresh for page table key', pageKey, tableKey)
      let pageData = this.ehrHelp.getAsLoadedPageData(pageKey)
      // store the current data into local data property for display
      this.tableData = pageData[tableKey]
      this.transposedColumns = this.tableDef.transposedColumns

      console.log('EhrPageTable refresh found data', this.tableData)
    }
  },
  mounted: function() {
    const _this = this
    this.refreshEventHandler = function() {
      console.log('EhrPageTable received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function() {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

table {
  margin-bottom: 2em;
  th,
  td {
    padding: 0.5em 0.5em 0.5em 0;
  }
  th {
    border-bottom: 2px solid $grey40;
  }
  th,
  .column_label {
    color: $grey70;
    font-size: 1em;
  }
  tr {
    border-bottom: 1px solid $grey20;
    font-size: $bodyFontSize;
  }
  &.table_horizontal {
    width: 100%;
  }
  .table_vertical {
  }
}

.EhrPageTable {
}
</style>
