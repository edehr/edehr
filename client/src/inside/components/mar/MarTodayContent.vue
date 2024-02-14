<template lang="pug">
  div(class="mar-today-content")
    div PRN Medications
      div(v-for="(prn, index) in prnMedications", :key="index", class='prn-med')
        div
          ui-button(value="mtc-prn-open", v-on:buttonClicked="openPRNMarDialog(prn)", v-bind:secondary="true") PRN MAR
        med-order(:medOrder='prn')
    hr
    div(v-if="todaysSchedule.length === 0")
      h4 No scheduled medications ordered
    div(v-else)
      div(class="today-row")
        h4 Time
        h4 Administration
        h4 Medication order
      div(class="today-row", v-for="period in todaysSchedule", :key="period.key")
        div
          span {{ period.hour24 }}
          span(v-if="period.isOverDue && !period.hasMar", class='overdue') &nbsp; Overdue
        div
          div(v-show="showButton(period)")
            ui-button(value="mtc-mar-open", v-on:buttonClicked="openMarDialog(period)", v-bind:secondary="true") Add MAR
          div(v-show="period.hasMar")
            mar-record(:record="period.marRecord")
        med-order(:medOrder='period.medList[0]')
    mar-dialog(ref="refMarDialog", :currentDay="currentDay", @saveMar="saveMar")
    div(style="display:none") refreshData: {{refreshData}}
</template>

<script>
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import UiButton from '@/app/ui/UiButton'
import MarRecord from './MarRecord'
import MarDialog from './MarDialog'
import MarHelper from './mar-helper'
import MedOrder from '@/inside/components/mar/MedOrder'

export default {
  name: 'MarTodayContent',
  components: {
    MedOrder,
    UiButton,
    MarDialog,
    MarRecord
  },
  data () {
    return {
      showMarDialog: false,
      todaysSchedule: [],
      prnMedications: [],
      currentDay: 0
    }
  },
  props: {
    ehrHelp: { type: Object },
    marToday: { type: Object }
  },
  computed: {
    refreshData () {
      this.refresh()
      // console.log('MarTodayContent refreshData', this.todaysSchedule)
      return this.todaysSchedule
    },
  },
  methods: {
    openMarDialog (period) {
      this.$refs.refMarDialog.openMarDialog(period)
    },
    openPRNMarDialog (medOrder) {
      this.$refs.refMarDialog.openMarDialog(undefined,medOrder)
    },
    showButton (period) {
      return this.ehrHelp.showTableAddButton() && !period.hasMar
    },
    saveMar (mar) {
      let help = new MarHelper(this.ehrHelp)
      help.saveMarDialog(mar).then((res) => {
        this.$refs.refMarDialog.closeDialog()
      })
    },
    refresh () {
      if(this.ehrHelp){
        let help = new MarHelper(this.ehrHelp)
        let marToday = this.marToday
        this.todaysSchedule = marToday.getTodaysSchedule(help.marRecords, help.theMedOrders)
        this.prnMedications = marToday.getPRNs(help.theMedOrders)
        this.currentDay = marToday.getCurrentDay()

      }
    }
  },
  mounted: function () {
    this.refresh()
  },
  created: function () {
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
  //border: 1px solid red;
}
.today-row {
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  border-bottom: 1px solid $grey40;
  padding: 1rem;
}
.prn-med {
  display: grid;
  grid-template-columns: 0.5fr 3fr;
}
.periodsList {
}
.overdue {
  color: $brand-highlight-red;
}
</style>
