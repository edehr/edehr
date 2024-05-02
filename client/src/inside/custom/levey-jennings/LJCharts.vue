// Custom Levey Jennings page
<template lang="pug">
  div
    div(v-for='data in tableData')
      div Analyte: {{ data.analyte }}
      div Values: {{ data.values }}
      l-j-chart(:values="data.values")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import LJChart from '@/inside/custom/levey-jennings/LJChart.vue'

export default {
  components: { LJChart },
  props: {
    tableDef: { type: Object },
    ehrHelp: { type: Object },
    pageDataKey: {type: String},
  },
  computed: {
    tableKey () {return this.tableDef.elementKey },
    tableData () {
      const mergedData = StoreHelper.getMergedData() || {}
      const ehrDataModel = new EhrDataModel(mergedData)
      const tableData =  ehrDataModel.getPageTableData(this.pageDataKey, this.tableKey) || []
      /*
      tableData [ { "tableLJ_name": "Dorothea", "tableLJ_profession": "instructor", "tableLJ_day": "0", "tableLJ_time": "0000", "createdDate": "2024-04-15T07:12:14-07:00", "tableLJ_id": "leveyJennings.tableLJ.0", "ljAnalyte": "Analyte 1", "ljStdDev": "7.60", "ljValue1": "255", "ljValue2": "256", "ljValue3": "245", "ljValue4": "255", "ljValue5": "245", "ljValue6": "261", "ljValue7": "253", "ljValue8": "249", "ljValue9": "258", "ljValue10": "252", "ljValue11": "247", "ljValue12": "253", "ljValue13": "251", "ljValue14": "257", "ljValue15": "249", "ljValue16": "253", "ljValue17": "252", "ljValue18": "250", "ljValue19": "256", "ljValue20": "248", "ljValue21": "255", "ljValue22": "254", "ljValue23": "251", "ljValue24": "254", "ljValue25": "256", "ljValue26": "247", "ljValue27": "252", "ljValue28": "253", "ljValue29": "249", "ljValue30": "251" }, { "tableLJ_name": "Dorothea", "tableLJ_profession": "instructor", "tableLJ_day": "0", "tableLJ_time": "0000", "createdDate": "2024-04-15T07:12:14-07:00", "tableLJ_id": "leveyJennings.tableLJ.0", "ljAnalyte": "Analyte 2", "ljStdDev": "5.00", "ljValue1": "122", "ljValue2": "115", "ljValue3": "128", "ljValue4": "120", "ljValue5": "116", "ljValue6": "123", "ljValue7": "119", "ljValue8": "125", "ljValue9": "118", "ljValue10": "122", "ljValue11": "115", "ljValue12": "123", "ljValue13": "121", "ljValue14": "124", "ljValue15": "117", "ljValue16": "126", "ljValue17": "120", "ljValue18": "125", "ljValue19": "119", "ljValue20": "123", "ljValue21": "118", "ljValue22": "126", "ljValue23": "122", "ljValue24": "128", "ljValue25": "121", "ljValue26": "124", "ljValue27": "116", "ljValue28": "127", "ljValue29": "120", "ljValue30": "125" } ]
       */
      const rows = tableData.map( tRow => {
        const ljData = {
          analyte: tRow.ljAnalyte,
          values: []
        }
        for (let i = 0; i< 30; i++) {
          const key = 'ljValue' + i
          const v = tRow[key]
          if (v) {
            ljData.values.push(parseFloat(v))
          }
        }
        return ljData
      })
      return rows
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
