<template lang="pug">
  div(class="content")
    tabs
      tab(name="Graph",:selected="true")
        div(v-show="showTableAddButton")
          ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
        vitals-chart(v-bind:vitals="tableData", v-bind:vitalsModel="vitalsModel")
        ehr-dialog-form(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :tableDef="tableDef", :inputs="dialogInputs", :errorList="errorList" )
      tab(name="Chart")
        ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    div(style="display:none") Vitals: {{refreshData}}
</template>

<script>
import Tabs from './Tabs'
import Tab from './Tab'
import UiButton from '../../app/ui/UiButton.vue'
import VitalsChart from './VitalsChart'
import VitalModel from '../../helpers/vitalModel'
import EhrPageTable from '../components/EhrPageTable'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT, SHOW_TABLE_DIALOG_EVENT } from '../../helpers/event-bus'
import EhrDialogForm from '../components/EhrDialogForm.vue'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'home',
  components: {
    EhrDialogForm,
    Tabs,
    Tab,
    UiButton,
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
      dialogInputs: {},
      vitalsModel: {}
    }
  },
  props: {
    pageDataKey: {type: String  },
    ehrHelp: {type: Object}
  },
  computed: {
    showTableAddButton () {
      return this.ehrHelp.showTableAddButton()
    },
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    },
    refreshData () {
      this.refresh()
      return this.tableData
    },
    tableDef () {
      return this.uiProps.tables[0] || {}
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableDef.tableKey)
    }
  },
  methods: {
    showDialog () {
      // console.log('Vitals Chart tab showDialogHandler ', this.dialogInputs)
      this.ehrHelp.showDialog(this.tableDef, this.dialogInputs)
      // EventBus.$emit(SHOW_TABLE_DIALOG_EVENT)
    },
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
