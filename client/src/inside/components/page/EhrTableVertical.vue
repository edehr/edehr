<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") -----
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="(column, colIndex) in transposed",
            :class='{tableLabelElement: colIndex === 0, hideTableElement: column[0].tableCss === "hide-table-element"}')
            td(class="tableLabelElement")
              span(:class="transposeLabelCss(column)", v-html="transposeLabel(column)")
            td(v-for="(cell, index) in transposeData(column)", :class="tdCss(cell, index)")
              div(v-if="!cell.isDraft && colIndex === 0", class='cell-action')
                  ui-button(v-on:buttonClicked="viewReport(getIdFromStack(cell))")
                    span View &nbsp;
                    fas-icon(icon="file-pdf")
              div(class="cell-action")
                ui-button(
                    v-if="!cell.isDraft && showTableAction && colIndex === 0",
                    v-on:buttonClicked="tableAction(tableDef, index)"
                    )
                  span {{ tableDef.tableActionLabel }} &nbsp;
                  fas-icon(icon="notes-medical")
              div(class="cell-action")
                ui-button(v-if="cell.isDraft && colIndex === 0 && canEdit", v-on:buttonClicked="editDraft(getIdFromStack(cell))")
                  span Edit &nbsp;
                  fas-icon(icon="edit")
              div(v-for="cPart in cell.stack")
                ehr-table-element(v-if="!!cPart.value", :cell="cPart", :class="transposeValueCss(cell, index)")
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
    canEdit () {
      return this.ehrHelp._canEdit()
    },
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
    tdCss (cell, index ) {
      return this.draftColumnIndex === index ? ' draftTableElem' : ''
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
  }
}
</script>

<style lang='scss' scoped>
.cell-action {
  margin-bottom: 5px;
  & .button {
    min-width: 9rem;
  }
}
</style>
