<template lang="pug">
  div(class='ehr-table-stacked')
    //div TABLE STACKED page: {{ pageDataKey}}, table: {{ tableKey }}
    div(class="no-data" v-if="!hasData") There are no records or reports for this patient.
    div(v-else)
      table.table_horizontal
        thead
          tr
            th(v-if="tableDef.tableAction") &nbsp;
            th &nbsp;
            th(v-for="(tCell, cIndex) in tableForm.rowTemplate", :key='cIndex')
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in tableData", :key='rIndex')
            td(v-if="tableDef.tableAction")
              ui-button(v-on:buttonClicked="tableAction(tableDef,rIndex)")
                span {{ tableDef.tableActionLabel }} &nbsp;
                fas-icon(icon="notes-medical")
            td
              ui-button(v-on:buttonClicked="viewReport(pageDataKey, tableKey, rIndex)")
                span View &nbsp;
                fas-icon(icon="file-pdf")
            td(v-for="(cell, cIndex) in dRow", :key="cIndex", class="cell.tableCss")
              ehr-table-element(v-for="(cPart, pIndex) in cell.stack",v-if="!!cPart.value", :key='pIndex', :cell="cPart")
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
      // if (!this.tableForm.rowTemplate) {
      //   console.error('this.tableForm.rowTemplate is not defined for tableKey', this.tableKey, ' pageDataKey', this.pageDataKey, 'this.tableForm', this.tableForm)
      // }
      this.tableData = this.tableForm.tableData
      // this.tableData[0].length = Math.min(10,this.tableData[0].length)
      if (debug) {
        console.log('EhrTableStacked this.tableForm', this.tableForm)
        console.log('EhrTableStacked this.tableData', this.tableData)
        console.log('EhrTableStacked length', JSON.stringify(this.tableData.length))
        if ( this.tableData.length > 0 ) {
          console.log('EhrTableStacked [0].length]', JSON.stringify(this.tableData[0].length))
        }
      }
    }
  },

}
</script>

<style>
/* the ehr content has overflow hidden yet tables may be big ...*/
.ehr-table-stacked {
  overflow-x: auto;
}
</style>

</style>
