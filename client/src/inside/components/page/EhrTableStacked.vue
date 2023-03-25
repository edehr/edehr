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
              span(v-html="tCell.tableLabel")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            td(v-if="showTableAction")
              div(v-if='isDraft(dRow)') &nbsp;
              ui-button(v-else, v-on:buttonClicked="tableAction(getIdFromRow(dRow))")
                span {{ tableActionLabel(getIdFromRow(dRow)) }} &nbsp;
                fas-icon(icon="notes-medical")
            td
              ui-button(v-if="!isDraft(dRow)", v-on:buttonClicked="viewReport(getIdFromRow(dRow))")
                span View &nbsp;
                fas-icon(icon="file-pdf")
              ui-button(v-if="isDraft(dRow) && canEdit", v-on:buttonClicked="editDraft(getIdFromRow(dRow))")
                span Edit &nbsp;
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

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  computed: {
    canEdit () {
      return this.ehrHelp._canEdit()
    },
  },
  methods: {
    tableActionLabel (sourceRowId) {
      return EhrTableActions.getTableActionLabel(this.tableDef, sourceRowId)
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
</style>

