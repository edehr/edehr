<template lang='pug'>
  div(class="seed-table")
    table(v-show="hasData", class="table_horizontal")
      // table heard element for each column. Just for visual. Cell is empty.
      tr
        th &nbsp;
        th(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}') &nbsp;
      tr(v-for="(fieldDef, colIndex) in tableFields")
        td(v-text-to-html='label(fieldDef)')
        td(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}')
          span {{ fieldData(fieldDef, rowIndex) }}
    div(v-show='!hasData') No data in this table.
</template>

<script>
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrData from '@/inside/components/page/ehr-data'
import EhrTypes from '@/ehr-definitions/ehr-types'
export default {
  props: {
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object },
  },
  computed: {
    tableData () {
      return EhrData.getMergedTableData(this.pageKey, this.pageElement.tableKey) || []
    },
    tableRowCount () { return this.tableData.length },
    hasData () {
      return this.tableData.length > 0
    },
    tableFields () {
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
      cols.sort( (a,b) => a.tableColumn - b.tableColumn)
      return cols
    },
  },
  methods: {
    label ( fieldDef ) { return fieldDef.label || fieldDef.tableLabel },
    fieldData (fieldDef, index) {
      const row = this.tableData[index-1]
      const elementKey = fieldDef.elementKey
      const v = row[elementKey]
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
