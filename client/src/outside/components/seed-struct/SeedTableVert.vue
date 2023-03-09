<template lang='pug'>
  div(class="seed-table")
    table(v-show="hasData", class="table_horizontal")
      tr
        th &nbsp;
        th(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}').
          {{ timestamp(rowIndex) }}
      tr(v-for="(fieldDef, colIndex) in tableFields")
        td(v-text-to-html='fieldDef.label')
        td(v-for="rowIndex in tableRowCount", :class='{draft:rowIsDraft(rowIndex)}').
          {{ fieldData(fieldDef, rowIndex) }}
    div(v-show='!hasData') No data in this table.
</template>

<script>
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrData from '@/inside/components/page/ehr-data'
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
      const headerFields = ['name', 'profession', 'day', 'time']
      const cols = []
      for(let i = 0; i< ehr_list.length; i++) {
        const items = ehr_list[i].items
        for(let k = 0; k < items.length; k++) {
          const item = items[k]
          const def = EhrDefs.getPageChildElement(this.pageKey, item)
          if (! headerFields.includes(def.elementKey)) {
            cols.push(def)
          }
        }
      }
      cols.sort( (a,b) => a.tableColumn - b.tableColumn)
      return cols
    },
  },
  methods: {
    timestamp (index) {
      const row = this.tableData[index-1]
      const parts = []
      row.name ? parts.push(row.name) : null
      row.profession ? parts.push(row.profession + ',') : null
      row.day ? parts.push('Sim time: ' + row.day) : null
      row.time ? parts.push(' - ' + row.time) : null
      return parts.join(' ')
    },
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
