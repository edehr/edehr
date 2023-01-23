<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") -----
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="(column, colIndex) in transposed", :class="tableColumnCss(column)")
            td(:class="transposeLabelCss(column)", class="tableLabelElement")
              div(v-if="colIndex === 0", style="min-height:3rem;") &nbsp;
              span(v-html="transposeLabel(column)")
            td(v-for="(cell, index) in transposeData(column)", :class="transposeValueCss(cell, index)")
              ui-button(v-if="!cell.isDraft && colIndex === 0", v-on:buttonClicked="viewReport(pageDataKey, tableKey, index)")
                span View &nbsp;
                fas-icon(icon="file-pdf")
              ui-button(
                  v-if="!cell.isDraft && showTableAction && colIndex === 0",
                  v-on:buttonClicked="tableAction(tableDef.tableKey, tableDef.tableAction, index)"
                  )
                span {{ tableDef.tableActionLabel }} &nbsp;
                fas-icon(icon="notes-medical")
              ui-button(v-if="cell.isDraft && colIndex === 0 && !isSubmitted", v-on:buttonClicked="editDraft(pageDataKey, tableKey, index)")
                span Edit &nbsp;
                fas-icon(icon="edit")
              div(v-for="cPart in cell.stack")
                ehr-table-element(v-if="!!cPart.value", :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      // tableForm: {},
    }
  },
  computed: {
    draftColumnIndex () {
      let inx = -1
      this.cTableData.forEach ( (row, index) => {
        row.forEach(e => {
          if (e.isDraft === 'isDraft') {
            inx = index
          }
        })
      })
      return inx
    },
    transposed () {
      let combined = []
      let headerRow = []
      this.rowTemplate.forEach( (rt) => {
        let hdr = { label: rt.tableLabel, tableCss: rt.tableCss}
        headerRow.push(hdr)
      })
      combined.push(headerRow)
      this.cTableData.forEach ( (row, index) => {
        let isDraft = false
        row.forEach( e => {
          if (e.isDraft === 'isDraft') {
            isDraft = true
          }
        })
        row[0].isDraft = isDraft
        combined.push(row)
      })
      /*
      combined contains a row with table header information and then a row for each data row.
      transposed will contain a row for each element in the table. Each element will contain
       */
      let transposed = combined[0].map((col, i) => combined.map(row => row[i]))
      return transposed
    },
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
    transposeValueCss (cell, index) {
      let hdrCss = 'column_value' + (cell.tableCss ? ' ' + cell.tableCss : '')
      hdrCss += index % 2 ? ' tableValueElementOdd' : ''
      hdrCss += this.draftColumnIndex === index ? ' draftTableElem' : ''
      return hdrCss
    },
    transposeData (column) {
      // take off the labels
      return column.slice(1,column.length)
    },
    tableColumnCss: function (column) {
    },
    refresh () {
      console.log('TODO -- does refresh on table vertical ever get invoked? It\'s not needed so clean up')
      // this.tableForm = this.ehrHelp.getTableForm(this.tableKey)
    }
  }
}
</script>
