<template lang="pug">
  div(class="content")
    tabs
      tab(name="Table")
        ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      tab(name="Chart",:selected="true")
        vitals-chart(v-bind:vitals="tableData", v-bind:vitalsModel="vitalsModel")
    div(style="display:none") Vitals: {{refreshData}}
</template>

<script>
import Tabs from './Tabs'
import Tab from './Tab'
import VitalsChart from './VitalsChart'
import VitalModel from '../../helpers/vitalModel'
import EhrPageTable from '../components/EhrPageTable'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

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
    pageDataKey: {type: String  },
    ehrHelp: {type: Object}
  },
  computed: {
    uiProps () {
      return this.ehrHelp ? this.ehrHelp.getPageDefinition(this.pageDataKey) : {tables:[]}
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
      // console.log('Vitals refresh for page table key', pageKey, tableKey)
      let pageData = this.ehrHelp.getAsLoadedPageData(pageKey)
      // store the current data into local data property for display
      this.tableData = pageData[tableKey]
    }
  },
  created: function () {
    this.vitalsModel = new VitalModel()
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('Vitals PAGE_DATA_REFRESH_EVENT')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }

}
</script>
