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
            th(v-for="(tCell, cIndex) in rowTemplate", :key='cIndex')
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            td(v-if="showTableAction")
              div(v-if='isDraft(dRow)') &nbsp;
              ui-button(v-else, v-on:buttonClicked="tableAction(tableDef.tableKey, rIndex, tableDef.tableAction)")
                span {{ tableActionLabel(rIndex) }} &nbsp;
                fas-icon(icon="notes-medical")
            td
              ui-button(v-if="!isDraft(dRow)", v-on:buttonClicked="viewReport(pageDataKey, tableKey, rIndex)")
                span View &nbsp;
                fas-icon(icon="file-pdf")
              ui-button(v-if="isDraft(dRow) && !isSubmitted", v-on:buttonClicked="editDraft(pageDataKey, tableKey, rIndex)")
                span Edit &nbsp;
                fas-icon(icon="edit")
            td(v-for="(cell, cIndex) in dRow", :key="cIndex", class="cell.tableCss",  v-if="!!cell.stack")
              ehr-table-element(v-for="(cPart, pIndex) in cell.stack", v-if="!!cPart.value", :key='pIndex', :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  methods: {
    tableActionLabel (rowIndex) {
      return EhrTableActions.getTableActionLabel(this.pageDataKey, this.tableDef, rowIndex)
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
    refresh () {
      // do nothing to do remove
    },
  },

}
</script>

<style>
/* the ehr content has overflow hidden yet tables may be big ...*/
.ehr-table-stacked {
  overflow-x: auto;
}
</style>

