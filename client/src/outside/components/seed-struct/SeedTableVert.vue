<template lang='pug'>
  div(class="seed-table")
    table(v-show="hasData", class="table_horizontal")
      // table heard element for each column. Just for visual. Cell is empty.
      tr
        th &nbsp;
        th(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}') &nbsp;
      tr(v-for="(fieldDef, colIndex) in tableFields", :class='fieldDef.tableCss')
        td(v-text-to-html='label(fieldDef)')
        td(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}')
          span {{ fieldData(fieldDef, rowIndex) }}
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
    pageElement: { type: Object },
  },
  computed: {
    tableData () {
      const pData = this.ehrData && this.ehrData[this.pageKey] || []
      return pData[this.pageElement.tableKey] || []
    },
    tableRowCount () { return this.tableData.length },
    hasData () {
      return this.tableData.length > 0
    },
    tableFields () {
      const list = this.pageElement.tableChildren
      const cols = []
      for(let i = 0; i< list.length; i++) {
        const key = list[i]
        const def = EhrDefs.getPageChildElement(this.pageKey, key)
        const types = EhrTypes.dataInputTypes
        let noTypes = [ types.ehr_embedded, types.generatedId]
        if (!noTypes.includes(def.inputType)) {
          cols.push(def)
        }
      }
      cols.sort( (a,b) => a.tableColumn - b.tableColumn)
      return cols
    },
  },
  methods: {
    fLabel (fieldDef) { return t18ElementLabel(fieldDef)},
    tLabel (fieldDef) { return t18TableLabel(fieldDef) },
    label ( fieldDef ) { return this.fLabel(fieldDef) || this.tLabel(fieldDef) },
    fieldData (fieldDef, index) {
      const row = this.tableData[index-1]
      const elementKey = fieldDef.elementKey
      let v = row[elementKey]
      v = makeHumanTableCell(this.pageKey, elementKey, fieldDef.inputType, v)
      return v ? v : ''
    },
    rowIsDraft ( index ) {
      const row = this.tableData[index-1]
      return row.isDraft
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../../../scss/definitions";

.table_horizontal {
  display: block;
  overflow-x: auto;
}
.draft {
  background-color: $table-draft-colour !important;
  color: black;
}

</style>
