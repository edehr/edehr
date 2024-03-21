<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") -----
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="(column, colIndex) in transposed",
            :class='{tableLabelElement: colIndex === 0, hideTableElement: column[0].tableCss === "hide-table-element"}')
            td(class="tableLabelElement")
              div(:class="transposeLabelCss(column)", v-html="transposeLabel(column)")
              div(v-html="transposeSuffix(column)", class='transpose-suffix')
            td(v-for="(cell, index) in transposeData(column)", :class="tdCss(cell, index)")
              div(v-if="!cell.isDraft && colIndex === 0", class='cell-action')
                ui-button(value="etv-view", v-on:buttonClicked="viewReport(getIdFromStack(cell))", :title='ehrText.viewButtonLabel')
                  //span {{ehrText.viewButtonLabel}} &nbsp;
                  fas-icon(icon="file-pdf")
                ui-button(value="etv-action", v-if="showTableAction", v-on:buttonClicked="tableAction(tableDef, index)", :title='tableDef.tableActionLabel')
                  //span {{ tableDef.tableActionLabel }} &nbsp;
                  fas-icon(icon="notes-medical")
                ui-button(value="etv-edit-row", v-if="canEditSeed(cell,colIndex)", v-on:buttonClicked="editSeedRow(getIdFromStack(cell))", title='ehrText.editButtonLabel')
                  //span {{ehrText.editButtonLabel}} &nbsp;
                  fas-icon(icon="edit")
                ui-button(value="etv-delete-row", v-if="canEditSeed(cell,colIndex)", v-on:buttonClicked="deleteSeedRow(getIdFromStack(cell))", :title='ehrText.deleteButtonLabel')
                  //span {{ehrText.deleteButtonLabel}} &nbsp;
                  fas-icon(icon="trash")
              div(v-if="cell.isDraft && colIndex === 0", class='cell-action')
                ui-button(value="etv-edit-draft", v-if="canEditDraft(cell,colIndex)", v-on:buttonClicked="editDraft(getIdFromStack(cell))", :title='ehrText.resumeButtonLabel')
                  //span {{ehrText.resumeButtonLabel}} &nbsp;
                  fas-icon(icon="edit")
                ui-button(value="etv-delete-draft", v-if="canEditDraft(cell,colIndex)", v-on:buttonClicked="deleteSeedRow(getIdFromStack(cell))", :title='ehrText.deleteButtonLabel')
                  //span {{ehrText.deleteButtonLabel}} &nbsp;
                  fas-icon(icon="trash")
              div(v-for="(cPart, inx) in cell.stack")
                ehr-table-element(v-if="!!cPart.value", :cell="cPart", :class="transposeValueCss(cell, index)")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'

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
    ehrText () { return t18EhrText() },
    draftColumnIndex () {
      return this.cTableData.reduce((accumulator, row, currentIndex) => {
        row.forEach(e => {
          if (e.isDraft === 'isDraft') {
            accumulator.push(currentIndex)
          }
        })
        return accumulator
      }, [])
    },
    transposed () {
      let combined = []
      let headerRow = []
      this.rowTemplate.forEach( (rt) => {
        let hdr = { label: rt.tableLabel, suffix: rt.tableSuffix, tableCss: rt.tableCss}
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
    canEditSeed (cell,colIndex) {
      return StoreHelper.isSeedEditing() && !cell.isDraft && colIndex === 0
    },
    canEditDraft (cell,colIndex) {
      return cell.isDraft && colIndex === 0 && this.canEdit
    },
    transposeLabel (column) {
      let cell = column[0] || {}
      return cell.label
    },
    transposeSuffix (column) {
      let cell = column[0] || {}
      return cell.suffix ? cell.suffix : ''
    },
    transposeLabelCss (column) {
      let cell = column[0] || {}
      return cell.tableCss
    },
    tdCss (cell, index ) {
      return this.draftColumnIndex.includes(index) ? ' draftTableElem' : ''
    },
    transposeValueCss (cell, index) {
      let hdrCss = 'column_value' + (cell.tableCss ? ' ' + cell.tableCss : '')
      hdrCss += index % 2 ? ' tableValueElementOdd' : ''
      hdrCss += this.draftColumnIndex.includes(index) ? ' draftTableElem' : ''
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
  display: flex;
  flex-direction: row;
  //flex: 1 0 auto;
  gap: 5px;
  //margin-bottom: 5px;
  & .button {
    //min-width: 9rem;
  }
}
</style>
