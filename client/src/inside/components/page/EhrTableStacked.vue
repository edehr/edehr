<template lang="pug">
  div
    //div TABLE STACKED page: {{ pageDataKey}}, table: {{ tableKey }}
    div(class="no-data" v-if="!hasData") There are no records or reports for this patient.
    div(v-else)
      table.table_horizontal
        thead
          tr
            th(v-if="tableDef.tableAction") &nbsp;
            th &nbsp;
            th(v-for="tCell in tableForm.rowTemplate", :key='tCell')
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="(dRow, index) in tableData", :key='index')
            td(v-if="tableDef.tableAction")
              ui-button(v-on:buttonClicked="tableAction(tableDef,index)")
                span {{ tableDef.tableActionLabel }} &nbsp;
                fas-icon(icon="notes-medical")
            td
              ui-button(v-on:buttonClicked="viewReport(pageDataKey, tableKey, index)")
                span View &nbsp;
                fas-icon(icon="file-pdf")
            td(v-for="cell in dRow", class="cell.tableCss")
              ehr-table-element(v-for="cPart in cell.stack",v-if="!!cPart.value", :key='cPart', :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'
const debug = false

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      tableForm: {},
      tableData: []
    }
  },
  computed: {
    hasData () {
      return this.tableForm.hasData
    },
    //stacks () { return this.tableDef.ehr_list}
  },
  methods: {
    columnTitle: function (stack) {
      return stack.label
    },
    tableColumnCss: function (stack) {
      return stack.tableCss
    },
    refresh () {
      if(debug) console.log('EhrTableStacked refresh this.tableKey', this.tableKey)
      // force the reactive system to see the change by changing the objects. Otherwise it sees the same object even
      // though the content is different
      this.tableForm = {}
      this.tableData = []
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
      this.tableForm.rowTemplate.length = Math.min(10,this.tableForm.rowTemplate.length)
      this.tableData = this.tableForm.tableData
      // this.tableData[0].length = Math.min(10,this.tableData[0].length)
      if (debug) console.log('EhrTableStacked this.tableForm', this.tableForm)
      if (debug) console.log('EhrTableStacked this.tableData', this.tableData)
      console.log('EhrTableStacked this.tableData', JSON.stringify(this.tableData.length))
      console.log('EhrTableStacked this.tableData', JSON.stringify(this.tableData[0].length))
    }
  },

}
</script>

