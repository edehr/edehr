<template lang="pug">
  div(class="mar-today-content")
    h1 Medication Administration Records
    div Today is: &nbsp; {{ currentDay }}
    div(class="periodsList", v-for="period in schedule", :key="period.key") {{period.name}}
      div(class="columns")
        div(class="column period-column")
          h4 {{ period.name }}
        div(class="column medications-column")
          med-list(:medsList="period.medsList")
        div(class="column mar-column")
          div(v-show="!period.hasMar()")
            ui-button(v-on:buttonClicked="openMarDialog(period)") Add MAR
          div(v-show="period.hasMar()")
            mar-record(:record="period.marRecord || {}")
      hr
    mar-dialog(ref="refMarDialog", :currentDay="currentDay", v-on:saveMar="saveMar")
    div(style="display:none") refreshData: {{refreshData}}
</template>

<script>
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import MedList from './MedList'
import UiButton from '../../../app/ui/UiButton'
import MarRecord from './MarRecord'
import MarDialog from './MarDialog'
import MarHelper from './mar-helper'
import MarToday from './mar-today'

export default {
  name: 'MarTodayContent',
  components: {
    UiButton,
    MedList,
    MarDialog,
    MarRecord
  },
  data () {
    return {
      showMarDialog: false,
      schedule: [],
      marToday: {}, // helper class
      currentDay: 0
    }
  },
  props: {
    ehrHelp: { type: Object }
  },
  computed: {
    refreshData () {
      // See EhrPageForm for more on why we have currentData
      this.refresh()
      console.log('MarTodayContent refreshData', this.schedule)
      return this.schedule
    }
  },
  methods: {
    openMarDialog (period) {
      // console.log('this.$refs.refMarDialog',this.$refs.refMarDialog)
      this.$refs.refMarDialog.openMarDialog(period)
    },
    saveMar (mar) {
      let help = new MarHelper(this.ehrHelp)
      help.saveMarDialog(mar).then(() => {
        this.$refs.refMarDialog.closeDialog()
      })
    },
    refresh () {
      if(this.ehrHelp){
        let help = new MarHelper(this.ehrHelp)
        let marToday = this.marToday
        this.schedule = marToday.getTodaysSchedule(help.marRecords, help.theMedOrders)
        this.currentDay = marToday.getCurrentDay()
      }
    }
  },
  created: function () {
    this.marToday = new MarToday()
    const _this = this
    this.refreshEventHandler = function () { _this.refresh() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.mar-today-content {
  /*border: 1px solid red;*/
}
.errorMesageList {
  color: $dialog-error-color;
}
.period-column {
  flex: 0 0 20%;
}
.medications-column {
  flex: 1 0 20%;
}
.mar-column {
  flex: 1 0 20%;
}
</style>