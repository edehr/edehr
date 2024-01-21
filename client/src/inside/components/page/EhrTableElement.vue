<template lang="pug">
  div
    span(v-if="cell.inputType==='ehrFile'")
      ehr-file-link(:ehrFile="cell.value")
    span(v-else-if="cell.inputType==='custom_form'")
      span Use View to see contents
    span(v-else) {{getCellData(cell)}}
</template>

<script>
import moment from 'moment'
import EhrFileLink from '@/inside/components/EhrFileLink'
import { formatDateStr } from '@/helpers/ehr-utils'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import { simDateCalc } from '@/helpers/date-helper'
export default {
  components: { EhrFileLink },
  inject: [ 'pageDataKey'],
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
      if (inputType === EhrTypes.dataInputTypes.visitDay) {
        value = simDateCalc(value)
      }
      if (inputType === EhrTypes.dataInputTypes.calculatedValue) {
        const element = EhrDefs.getPageChildElement(this.pageDataKey, cell.key)
        let decimals = Number.parseInt(element.decimals)
        if (!isNaN(value) && !isNaN(decimals)) {
          let f = Math.pow(10, decimals)
          value = Math.round(value * f) / f
        }
      }
      return value
    }
  }
}
</script>
