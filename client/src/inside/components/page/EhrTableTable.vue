<template lang="pug">
  div(class='ehr-table-table')
    div(class="no-data" v-if="!hasData") No data
    div(v-else class='table-container')
      table.table_horizontal.main-table(tabindex="0")
        thead
          tr
            th(class="desc-col sticky-top-left") &nbsp;
            th(class="time-col sticky-top-left-time") Date
            th(v-for="(tCell, cIndex) in extractData(rowTemplate)", :key='cIndex', class="sticky-top" :class="tableColumnCss(tCell)")
              span(v-html="tableLabel(tCell)")
        tfoot(v-if="cTableData.length> 5")
          tr
            th &nbsp;
            th Date
            th(v-for="(tCell, cIndex) in extractData(rowTemplate)", :key='cIndex', :class="tableColumnCss(tCell)")
              span(v-html="tableLabel(tCell)")
        tbody
          tr(v-for="(dRow, rIndex) in cTableData", :key='rIndex', :class='{draftRow : isDraft(dRow) }')
            th(class="table-actions desc-col sticky-left")
              ehr-table-table-actions(:dRow="dRow", :tableDef='tableDef',
                :ehrHelp="ehrHelp",
                @editDraft='editDraft',
                @editSeedRow='editSeedRow',
                @deleteSeedRow='deleteSeedRow',
                @viewReport='viewReport'
              )
            th(class="time-col sticky-left-time") {{ extractDate(dRow) }}
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
import EhrTableTableActions from '@/inside/components/page/EhrTableTableActions.vue'

export default {
  extends: EhrTableCommon,
  components: { EhrTableTableActions, EhrTableElement, UiButton },
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
@import '../../../scss/definitions';

.table-container {
  //max-width: 60%;
  max-height: 40rem;
  overflow: auto;
  display: flex; /* Use flexbox for layout */
  /*
  On the iPhone in portrait mode large tables are huge and unbounded.
  Try adding a max bounds to see if they stay within range.
   */
  @media screen and (max-width: 400px) {
    max-width: 400px;
  }
}

.main-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  position: relative; /* Ensure relative positioning for sticky elements */
}
thead tr th,
tbody tr td {
  border: 1px solid #888;
  padding: 8px;
  text-align: center;
}
.desc-col {
  min-width: 63px;
}
.sticky-left-time,
.sticky-top-left-time {
  left: 63px;
}
.sticky-left,
.sticky-left-time,
.sticky-top-left-time,
.sticky-top-left,
.sticky-top {
  position: sticky;
  background-color: #bbb; /* Match the sticky header background color */
}
.sticky-top-left,
.sticky-left {
  left: 0;
}
.sticky-top-left,
.sticky-top-left-time,
.sticky-top {
  top: 0;
}

.sticky-left {
  z-index: 2; /* Ensure sticky elements are above normal elements */
}
.sticky-left-time {
  z-index: 2; /* Ensure sticky elements are above normal elements */
}
.sticky-top {
  z-index: 3; /* Ensure sticky elements are above normal elements */
}
.sticky-top-left-time,
.sticky-top-left {
  z-index: 4;
}

/*
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
*/
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
