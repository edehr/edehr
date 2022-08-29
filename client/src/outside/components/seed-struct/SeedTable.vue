<template lang='pug'>
  div(class="seed-table")
    h2 {{ pageElement.label }}
    table(v-show="hasData", class="table_horizontal")
      tr
        th(v-for="col in columns", v-text-to-html='col.label')
      tr(v-for="row in pageSeedData[pageElement.tableKey]")
        td(v-for="(d, index) in rowData(row)")
          pre(v-if='columns[index].inputType === "textarea"')
          span(v-else) {{d}}
    div(v-show='!hasData') No data in this table.

</template>

<script>
import EhrDefs from '@/helpers/ehr-defs-grid'
export default {
  props: {
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
    rows () {
      return this.pageSeedData[this.pageElement.tableKey] || []
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
          cols.push(def)
        }
      }
      return cols
    },
  },
  methods: {
    rowData ( seedRow ) {
      const cols = this.columns
      const row = []
      for(let i = 0; i< cols.length; i++) {
        const key = cols[i].elementKey
        const val = seedRow[key]
        row.push(val)
      }
      return row
    }
  }
}
</script>

<style scoped lang='scss'>
.seed-table {
}
.table_horizontal {
  display: block;
  overflow-x: auto;
}
</style>
