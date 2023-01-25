<template lang="pug">
  div
    tabs
      tab(name="Graph V2", :selected="true")
        div(v-show="showTableAddButton")
          ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
        vitals-chart(v-bind:vitals="tableData", v-bind:vitalsModel="vitalsModel")
        ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
      tab(name="Chart V2")
        ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp")

</template>

<script>
import Tabs from '../Tabs'
import Tab from '../Tab'
import UiButton from '../../../app/ui/UiButton.vue'
import VitalsChart from './VitalsChart'
import VitalModel from './vitalModel'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import EhrDialogForm from '../page/EhrDialogForm.vue'
import EhrPageTable from '../page/EhrPageTable'
import EhrData from '@/inside/components/page/ehr-data'

export default {
  components: {
    EhrDialogForm,
    Tabs,
    Tab,
    UiButton,
    VitalsChart,
    EhrPageTable
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
    ehrHelp: {type: Object},
    pageDataKey: { type: String }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    showTableAddButton () {
      return this.ehrHelp.showTableAddButton()
    },
    uiProps () {
      return this.ehrHelp.getPageDef(this.pageDataKey)
    },
    tableDef () {
      let tables = EhrDefs.getPageTables(this.pageDataKey)
      // console.log('Vitals2 looking at tables', tables)
      return tables[0]
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableDef.tableKey)
    }
  },
  methods: {
    showDialog () {
      this.ehrHelp.showDialogForTable(this.pageDataKey, this.tableKey, {})
    },
    refresh () {
      let tableKey = this.tableDef.tableKey
      let pageKey = this.ehrHelp.getPageKey()
      // console.log('Vitals2 refresh for page table key', pageKey, tableKey)
      let pageData = EhrData.getMergedPageData(pageKey)
      // store the current data into local data property for display
      this.tableData = pageData[tableKey] || []
      // console.log('Vitals page and table data', pageData, this.tableData)
      this.tableData.reverse()
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
