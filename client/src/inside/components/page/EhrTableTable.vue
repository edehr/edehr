<template lang="pug">
  div(class='ehr-table-table')
    div(class="no-data" v-if="!hasData") No data
    div(v-else)
      table.table_horizontal(tabindex="0")
        thead
          tr
            th &nbsp;
            th Date
            th(v-for="(tCell, cIndex) in extractData(rowTemplate)", :key='cIndex', :class="tableColumnCss(tCell)")
              span(v-html="tableLabel(tCell)")
        tfoot(v-if="cTableData.length> 5")
          tr
            th &nbsp;
            th Date
            th(v-for="(tCell, cIndex) in extractData(rowTemplate)", :key='cIndex', :class="tableColumnCss(tCell)")
              span(v-html="tableLabel(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            th(class="table-actions")
              div(v-if="showTableAction", class='aux-table-actions')
                div(                          v-if='isDraft(dRow)') &nbsp;
                ui-button(value="ets-action", v-else,
                  v-on:buttonClicked="tableAction(getIdFromRow(dRow))")
                  span {{ tableActionLabel(getIdFromRow(dRow)) }} &nbsp;
                  fas-icon(icon="notes-medical")
              ui-button(value="ets-view",       v-if="!isDraft(dRow)",
                v-on:buttonClicked="viewReport(getIdFromRow(dRow))", :title='ehrText.viewButtonLabel')
                fas-icon(icon="file-pdf")
              ui-button(value="ets-edit-draft", v-if="isDraft(dRow) && canEdit",
                v-on:buttonClicked="editDraft(getIdFromRow(dRow))", :title='ehrText.resumeButtonLabel')
                fas-icon(icon="edit")
              ui-button(value="ets-edit-row",   v-if="canEditSeed(dRow)",
                v-on:buttonClicked="editSeedRow(getIdFromRow(dRow))", :title='ehrText.editButtonLabel')
                fas-icon(icon="edit")
              ui-button(value="ets-delt-row",   v-if="canEditSeed(dRow)",
                v-on:buttonClicked="deleteSeedRow(getIdFromRow(dRow))", :title='ehrText.deleteButtonLabel')
                fas-icon(icon="trash")
            th {{ extractDate(dRow) }}
            td(v-for="(cell, cIndex) in extractData(dRow)", :id="`${rIndex}-${cell.key}`", :key="cIndex", :class="tableCellCss(cell)")
              ehr-table-element(:cell="cell")
</template>
<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrTypes from '@/ehr-definitions/ehr-types'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'
import { simDateCalc } from '@/helpers/date-helper'

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  computed: {
    canEdit () {
      return this.ehrHelp._canEdit()
    },
    ehrText () { return t18EhrText() }
  },
  methods: {
    extractData (dRow) {
      // drop ID, day and time
      return dRow.slice(3)
    },
    extractDate (dRow) {
      // in first position is the row id
      let [,day, time] = dRow
      let value = simDateCalc(day.value)
      return value + 'T' + time.value
    },
    tableLabel (cell) {
      // the cell contains translation
      return cell.tableLabel
    },
    tableActionLabel (sourceRowId) {
      return EhrTableActions.getTableActionLabel(this.tableDef, sourceRowId)
    },
    canEditSeed (row) {
      return StoreHelper.isSeedEditing() && ! this.isDraft(row)
    },
    isDraft (row) {
      let isDraft = false
      row.forEach( e => {
        if (e.isDraft === 'isDraft') {
          isDraft = true
        }
      })
      return isDraft
    },
    columnTitle: function (stack) {
      return stack.label
    },
    tableColumnCss: function (stack) {
      return stack.tableCss
    },
    tableCellCss (cell) {
      const css = cell.inputType === EhrTypes.dataInputTypes.textarea ? 'table-cell-textarea' : ''
      return cell.tableCss ? cell.tableCss : css
    }
  },

}
</script>

<style lang='scss' scoped>

.ehr-table-table {
  overflow-y: auto;
}
thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}
table thead th:first-child,
table thead th:nth-child(2){
  position: sticky;
  left: 0;
  z-index: 3;
}
table tbody th {
  position: sticky;
  left: 0;
}

table thead th:nth-child(2),
table tbody th:nth-child(2) {
  left: 66px; // by trial and error width of first col. BUT will be different when there are more buttons
}

.table-actions > button {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>

<style>
.table-actions .button .svg-inline--fa {
  min-width: 1.2rem !important;
}
</style>
