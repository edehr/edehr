<template lang="pug">
  div
    a(v-if="cell.inputType==='ehrFile'", :href="cell.value.url")
      img(v-if="isImage", :src="cell.value.url", class="thumbnail")
      span {{cell.value.fName}}
    span(v-else) {{getCellData(cell)}}
</template>

<script>
import moment from 'moment'
import { formatDateStr, isImageFile } from '../../../helpers/ehr-utils'

export default {
  props: {
    cell: { type: Object },
  },
  computed: {
    isImage () {
      let cell = this.cell
      return (cell.inputType === 'ehrFile') ? isImageFile(cell.value.fName) : false
    }
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
