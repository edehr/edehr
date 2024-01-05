<template lang="pug">
  div(class='ehr-table-stacked')
    //div TABLE STACKED page: {{ pageDataKey}}, table: {{ tableKey }}
    div(class="no-data" v-if="!hasData") ----
    div(v-else)
      table.table_horizontal
        thead
          tr
            th(v-if="showTableAction") &nbsp;
            th &nbsp;
            th(v-for="(tCell, cIndex) in rowTemplate", :key='cIndex', :class="tableColumnCss(tCell)")
              span(v-html="tableLabel(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            td(v-if="showTableAction")
              div(v-if='isDraft(dRow)') &nbsp;
              ui-button(v-else, v-on:buttonClicked="tableAction(getIdFromRow(dRow))")
                span {{ tableActionLabel(getIdFromRow(dRow)) }} &nbsp;
                fas-icon(icon="notes-medical")
            td(class="table-actions")
              ui-button(v-if="!isDraft(dRow)", v-on:buttonClicked="viewReport(getIdFromRow(dRow))")
                span {{ehrText.viewButtonLabel}} &nbsp;
                fas-icon(icon="file-pdf")
              ui-button(v-if="isDraft(dRow) && canEdit", v-on:buttonClicked="editDraft(getIdFromRow(dRow))")
                span {{ehrText.resumeButtonLabel}} &nbsp;
                fas-icon(icon="edit")
              ui-button(v-else-if="canEditSeed(dRow)", v-on:buttonClicked="editSeedRow(getIdFromRow(dRow))")
                span {{ehrText.editButtonLabel}} &nbsp;
                fas-icon(icon="edit")

            td(v-for="(cell, cIndex) in dRow", :key="cIndex", :class="tableCellCss(cell)",  v-if="!!cell.stack")
                ehr-table-element(v-for="(cPart, pIndex) in cell.stack", v-if="!!cPart.value", :key='pIndex', :cell="cPart")
</template>


<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrTypes from '@/ehr-definitions/ehr-types'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText, t18TableLabel } from '@/helpers/ehr-t18'

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
      const stack = cell.stack || []
      const sRow = stack[0] || {}
      const css = sRow.inputType === EhrTypes.dataInputTypes.textarea ? 'table-cell-textarea' : ''
      return cell.tableCss ? cell.tableCss : css
    }

  },

}
</script>

<style lang='scss' scoped>
/* the ehr content has overflow hidden yet tables may be big ...*/
.ehr-table-stacked {
  overflow-x: auto;
}
.table-actions > button {
  margin-right: 5px;
}
</style>

