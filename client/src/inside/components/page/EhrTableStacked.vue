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
          tr(v-for="dRow in tableForm.tableData")
            td(v-for="cell in dRow", class="cell.tableCss")
              div(v-for="cPart in cell.stack") {{getCellData(cPart)}}
                //div {{cPart.inputType}} - {{cPart.value}}

          <!--tr(v-for="tblRow in stackedData")-->
            <!--td(v-for="stack in tblRow", :class="getCellCss(stack)")-->
              <!--div(v-for="cell in stack") {{ getCellData(cell) }} &nbsp;-->
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
const debug = true

export default {
  name: 'EhrPageTableStackedGrid',
  extends: EhrTableCommon,
  data: function () {
    return {
      // stackedData contains an array (of rows).
      // Each row contains an arrary of stacks.
      // Each stack contains an array of cells.
      // A Cell has label, inputType, elementKey and the current value
      stackedData: []
    }
  },
  computed: {
    hasData () {
      return this.stackedData.length > 0
    },
    stacks () { return this.tableDef.ehr_list}
  },
  methods: {
    columnTitle: function (stack) {
      return stack.label
    },
    tableColumnCss: function (stack) {
      return stack.tableCss
    },
    refresh () {
      // TODO get the latest data from the ehr helper
      if(debug) console.log('EhrTableStacked refresh')
      const tableDef = this.tableDef
      this.stackedData = tableDef.stackedData
      // console.log('table view refresh', tableDef)
    }
  },

}
</script>

