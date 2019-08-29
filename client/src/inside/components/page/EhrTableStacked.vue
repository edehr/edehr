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
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
const debug = true

export default {
  name: 'EhrPageTableStackedGrid',
  extends: EhrTableCommon,
  data: function () {
    return {
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

