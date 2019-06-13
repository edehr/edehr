<template lang="pug">
  div(class="content")
    tabs
      tab(name="Graph",:selected="true")
        div(v-show="showTableAddButton")
          ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
        input(class="checkbox", type="checkbox", v-model="showingSpecial")
        span show sample data
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
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
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
      showingSpecial: false,
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
      this.tableData = this.showingSpecial ? sampleData() :  pageData[tableKey]
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

function sampleData () {
  function addRow(day, time, temp, rate, systolic, diastolic, resp, oxy) {
    return {
      name: 'B',
      profession: 'n',
      entryDay: day,
      entryTime: time,
      day: day,
      time: time,
      temperature: temp,
      source: 'Oral',
      strength: 'Peripheral',
      rate: rate,
      rhythm: 'Regular',
      systolic: systolic,
      diastolic: diastolic,
      patientPosition: 'Supine',
      respirationRate: resp,
      oxygenSaturation: oxy,
      oxygenMode: 'Room air'
    }
  }
  let data =  [
  ]
  data.push(addRow('0', '01:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '02:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('0', '03:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('0', '04:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('0', '05:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('0', '06:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '07:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('0', '08:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('0', '09:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('0', '10:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '11:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '12:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('0', '13:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('0', '14:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('0', '15:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('0', '16:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '17:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('0', '18:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('0', '19:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('0', '20:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('0', '21:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('0', '22:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('0', '23:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('1', '0:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('1', '1:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('1', '2:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('1', '3:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('1', '4:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('1', '5:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('1', '6:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('1', '7:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('1', '8:00', '38.3', '66', '115', '84', '24', '95'))
  data.push(addRow('1', '9:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('1', '10:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('1', '11:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('1', '12:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('1', '13:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('1', '14:00', '39.9', '66', '120', '87', '44', '95'))
  data.push(addRow('1', '15:00', '35', '66', '140', '89', '34', '95'))
  data.push(addRow('1', '16:00', '35.5', '66', '120', '89', '22', '95'))
  data.push(addRow('1', '17:00', '36', '66', '135', '90', '34', '95'))
  data.push(addRow('1', '18:00', '37.3', '66', '115', '84', '24', '95'))
  data.push(addRow('1', '19:00', '39.9', '66', '120', '87', '44', '95'))
  return data
}
</script>
