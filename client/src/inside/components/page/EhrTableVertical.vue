<template lang="pug">
  div
    div(v-if="!hasData") There are no records or reports for the patient.
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="column in transposedColumns", :class="tableColumnCss(column)")
            td(:class="transposeLabelCss(column)")
              span(v-html="transposeLabel(column)")
            td(v-for="cell in transposeData(column)", :class="transposeValueCss(cell)") {{ getCellData(cell) }}
</template>

<script>
import EhrTableCommon from './EhrTableCommon'

export default {
  extends: EhrTableCommon,
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      tableForm: {},
      transposedColumns: []
    }
  },
  computed: {
    hasData () {
      return this.transposedColumns.length > 0
    }
  },
  methods: {
    transposeLabel (column) {
      let cell = column[0] || {}
      return cell.label
    },
    transposeLabelCss (column) {
      let cell = column[0] || {}
      return cell.tableCss
    },
    transposeValueCss (cell) {
      let hdrCss = 'column_value' + (cell.tableCss ? ' ' + cell.tableCss : '')
      return hdrCss
    },
    transposeData (column) {
      return column.slice(1,column.length)
    },
    getCellData (cell) {
      // console.log('EhrTableVertical getCellData', cell)
      let stack = cell.stack
      let values = []
      stack.forEach ( (c) => {
        if (c.value) {
          values.push(c.value)
        }
      })
      return values.join(',')
    },
    tableColumnCss: function (column) {
      // let hide = 'hide-table-element'
      // let css = hide
      // column.forEach(cell => {
      //   let cellDef = cell.cellDef
      //   if (!cellDef.tableCss || !cellDef.tableCss.includes(hide)) {
      //     // console.log('cell css ', cell.tableCss)
      //     css = ''
      //   }
      // })
      // return css
    },
    refresh () {
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
      this.transposedColumns = this.tableForm.transposedColumns
      // console.log('EhrTableVertical table view refresh', this.transposedColumns)
    }
  }
}
</script>
