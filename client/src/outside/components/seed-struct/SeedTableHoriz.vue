<template lang='pug'>
  div(class="seed-table")
    table(v-show="hasData", class="table_horizontal", tabindex="0")
      thead
        tr
          th(v-for="col in columns", v-text-to-html='colLabel(col)', :class="tableCellCss(col, {})")
      tfoot
        tr
          th(v-for="col in columns", v-text-to-html='colLabel(col)', :class="tableCellCss(col, {})")
      tbody
        tr(v-for="row in rows")
          td(v-for="(d, index) in rowData(row)", :class="tableCellCss(columns[index], row)" )
            pre(v-if='columns[index].inputType === "textarea"') {{d}}
            span(v-else) {{human(columns[index], d)}}
    div(v-show='!hasData') No data in this table.

</template>

<script>
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrTypes from '@/ehr-definitions/ehr-types'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import { t18ElementLabel, t18TableLabel } from '@/helpers/ehr-t18'

export default {
  props: {
    ehrData: { type: Object },
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object }
  },
  computed: {
    rows () {
      const pData = this.ehrData && this.ehrData[this.pageKey] || []
      return pData[this.pageElement.tableKey] || []
    },
    hasData () {
      return this.rows.length > 0
    },
    columns () {
      const ehr_list = this.pageElement.ehr_list
      const cols = []
      for(let i = 0; i< ehr_list.length; i++) {
        const items = ehr_list[i].items
        for(let k = 0; k < items.length; k++) {
          const item = items[k]
          const def = EhrDefs.getPageChildElement(this.pageKey, item)
          // skip the rowId
          if (def.inputType !== EhrTypes.dataInputTypes.generatedId) {
            cols.push(def)
          }
        }
      }
      return cols
    },
  },
  methods: {
    human ( cell, d ) {
      return makeHumanTableCell(this.pageKey, cell.elementKey, cell.inputType, d)
    },
    fLabel (col) { return t18ElementLabel(col)},
    tLabel (col) { return t18TableLabel(col) },
    colLabel ( col ) { return this.fLabel(col) || this.tLabel(col) },
    rowData ( seedRow ) {
      const cols = this.columns
      const row = []
      for(let i = 0; i< cols.length; i++) {
        const key = cols[i].elementKey
        const val = seedRow[key]
        row.push(val)
      }
      return row
    },
    rowIsDraft ( seedRow ) {
      return seedRow.isDraft
    },
    tableCellCss (column, row) {
      let css = []
      this.rowIsDraft(row) ? css.push('draft') : null
      column.tableCss ? css.push(column.tableCss) : null
      return css.join(' ')
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../../../scss/definitions";

.seed-table {
  overflow-y: auto;
  height: 45em;
}
table {
  border-collapse: collapse;
}
th,
td {
  padding: 1rem;
}
thead,
tfoot {
  background: #eee;
}
thead th {
  position: sticky;
  top: 0;
}

.draft {
  background-color: $table-draft-colour !important;
  color: black;
}

</style>
