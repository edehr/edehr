<template lang="pug">
  div
    span(v-if="cell.inputType==='ehrFile'")
      ehr-file-link(:ehrFile="cell.value")
    span(v-else) {{getCellData(cell)}}
</template>

<script>
import moment from 'moment'
import EhrFileLink from '@/inside/components/EhrFileLink'
import { formatDateStr } from '@/helpers/ehr-utils'

export default {
  components: { EhrFileLink },
  props: {
    cell: { type: Object },
  },
  methods: {
    getCellData: function (cell) {
      let value = cell.value
      let inputType = cell.inputType
      if (inputType === 'date') {
        let mom = moment(value, 'YYYY-MM-DDTHH:mm:ss ZZ')
        if (mom.isValid()) value = formatDateStr(value) //mom.format('DD MMM YYYY')
      }
      return value
    }
  }
}
</script>
