<template lang="pug">
  div(class='ehr-table-stacked')
    //div TABLE STACKED page: {{ pageDataKey}}, table: {{ tableKey }}
    div(class="no-data" v-if="!hasData") ----
    div(v-else)
      table.table_horizontal
        thead
          tr
            th(v-if="tableDef.tableAction") &nbsp;
            th &nbsp;
            th(v-for="(tCell, cIndex) in rowTemplate", :key='cIndex')
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            td(v-if="tableDef.tableAction")
              ui-button(v-on:buttonClicked="tableAction(tableDef,rIndex)")
                span {{ tableDef.tableActionLabel }} &nbsp;
                fas-icon(icon="notes-medical")
            td
              ui-button(v-if="!isDraft(dRow)", v-on:buttonClicked="viewReport(pageDataKey, tableKey, rIndex)")
                span View &nbsp;
                fas-icon(icon="file-pdf")
              ui-button(v-if="isDraft(dRow)", v-on:buttonClicked="editDraft(pageDataKey, tableKey, rIndex)")
                span Edit &nbsp;
                fas-icon(icon="edit")
            td(v-for="(cell, cIndex) in dRow", :key="cIndex", class="cell.tableCss",  v-if="!!cell.stack")
              ehr-table-element(v-for="(cPart, pIndex) in cell.stack", v-if="!!cPart.value", :key='pIndex', :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
import UiButton from '@/app/ui/UiButton'

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement, UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  methods: {
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

