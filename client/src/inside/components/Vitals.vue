<template lang="pug">
  div(class="content")
    tabs
      tab(name="Table")
        ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      tab(name="Chart",:selected="true")
        vitals-chart(v-bind:vitals="tableData", v-bind:vitalsModel="vitalsModel")
    div(style="display:none") {{refreshData}}
</template>

<script>
import Tabs from './Tabs'
import Tab from './Tab'
import VitalsChart from './VitalsChart'
import VitalModel from '../../helpers/vitalModel'
import EhrPageTable from '../components/EhrPageTable'

export default {
  name: 'home',
  components: {
    Tabs,
    Tab,
    EhrPageTable,
    VitalsChart
  },
  data () {
    return {
      theData: {},
      tableData: [],
      vitals: {
        table: []
      },
      vitalsModel: {}
    }
  },
  props: {
    pageDataKey: {type: String  }
  },
  computed: {
    uiProps () {
      return this.ehrHelp ? this.ehrHelp.getPageDefinition(this.pageDataKey) : {}
    },
    refreshData () {
      this.refresh()
      return this.tableData
    },
    tableDef () {
      return this.uiProps.tables[0] || {}
    }
  },
  methods: {
    refresh () {
      let tableKey = this.tableDef.tableKey
      let pageKey = this.pageDataKey
      // console.log('EhrPageTable refresh for page table key', pageKey, tableKey)
      let pageData = this.ehrHelp.getAsLoadedPageData(pageKey)
      // store the current data into local data property for display
      this.tableData = pageData[tableKey]
    }
  },
  created: function () {
    this.vitalsModel = new VitalModel()
  }
}
</script>
