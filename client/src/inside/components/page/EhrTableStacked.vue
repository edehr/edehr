<template lang="pug">
  div
    <!--div(v-if="!hasData") There are no records or reports for the patient.-->
    <!--div(v-else)-->
    div
      table.table_horizontal
        thead
          tr
            th(v-for="tCell in tableForm.rowTemplate")
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="dRow in tableData")
            td(v-for="cell in dRow", class="cell.tableCss")
              div(v-for="cPart in cell.stack") {{getCellData(cPart)}}
                //div {{cPart.inputType}} - {{cPart.value}}
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
const debug = true

export default {
  extends: EhrTableCommon,
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      tableForm: {},
      tableData: []
    }
  },
  computed: {
    hasData () {
      return this.tableData.length > 0
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
      if(debug) console.log('EhrTableStacked refresh')
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
      this.tableData = this.tableForm.tableData
      // console.log('table view refresh', tableDef)
    }
  },

}
</script>

