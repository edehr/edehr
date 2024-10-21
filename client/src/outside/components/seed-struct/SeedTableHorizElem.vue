<template lang='pug'>
div
  pre(v-if='colDef.inputType === "textarea"') {{data}}
  div(v-if='colDef.inputType === "labTestSet"')
    div(v-if='compareValue')
      warn-element(message='Difference in test list')
    lab-test-list(viewOnly=true, :tableData='data')
  span(v-else)
    div(v-html="compareStrings(string1, string2)")
    div(v-if='compareValue')
      span(v-html="compareStrings(string2, string1)")
</template>

<script>
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import WarnElement from '@/app/components/WarnElement.vue'
import DisplayStringDiff from '@/outside/components/seed-struct/DisplayStringDiff.vue'
import LabTestList from '@/inside/components/page/accessioning/LabTestList.vue'

export default {
  components: { LabTestList, DisplayStringDiff, WarnElement },
  props: {
    pageKey: {type: String},
    colDef: { type: Object },
    data: { type: [String, Object, Boolean] },
    elemDiffDef: { type: Object }
  },
  computed: {
    ehrVal () {
      let cell = this.colDef
      let d = this.data
      let val = makeHumanTableCell(this.pageKey, cell.elementKey, cell.inputType, d)
      if (typeof val !== 'string') {
        val = JSON.stringify(val)
      }
      return val
    },
    compareValue () {
      let val = this.elemDiffDef?.compareValue
      if (typeof val !== 'string') {
        val = JSON.stringify(val)
      }
      return val
    },
    string1 () {
      return this.ehrVal
    },
    string2 () {
      return this.compareValue || this.ehrVal
    },
  },
  methods: {
    compareStrings (str1='', str2) {
      let result = ''
      if (!str2) {
        return `<span style="color: red;">${str1}</span>`
      }
      const maxLength = Math.max(str1.length, str2.length)

      for (let i = 0; i < maxLength; i++) {
        const char1 = str1[i] || ''
        const char2 = str2[i] || ''

        if (char1 === char2) {
          result += `<span>${char1}</span>`
        } else {
          result += `<span style="color: red;">${char1}</span>` // Highlight differences in the first string
        }
      }

      return result
    },

    human ( cell, d ) {
      return makeHumanTableCell(this.pageKey, cell.elementKey, cell.inputType, d)
    },
    rowDifferenceCellValue (row, index) {
      let elementKey = this.colDef.elementKey
      const diffs = this.rowDiff(row).rowDifferences || {}
      return diffs[elementKey]
    },
  }
}
</script>

<style scoped lang='scss'>
@import "../../../scss/definitions";

.seed-table {
  overflow-y: auto;
  //height: 45em;
}
table {
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  pre {
    padding: 5px;
  }
}
thead,
tfoot {
  background: #eee;
}
thead th {
  position: sticky;
  top: 0;
}
.warn-column {
  width: 1px; // warning icon will take space if present
}
.draft {
  background-color: $table-draft-colour !important;
  color: black;
}

</style>
