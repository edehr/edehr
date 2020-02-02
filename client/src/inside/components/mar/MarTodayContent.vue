<template lang="pug">
  div(class="mar-today-content")
    div(v-if="todaysSchedule.length === 0")
      h4 No medications ordered
    div(v-else)
      div(class="columns")
        div(class="column period-column")
          h4 Time
        div(class="column med-order-column")
          h4 Medication order
        div(class="column mar-column")
          h4 Administration
      div(class="periodsList", v-for="period in todaysSchedule", :key="period.hour24")
        div(class="columns")
          div(class="column period-column")
            p {{ period.hour24 }}
          div(class="column med-order-column")
            med-list(:medsList="period.medList")
          div(class="column mar-column")
            div(v-show="showButton(period)")
              ui-button(v-on:buttonClicked="openMarDialog(period)", v-bind:secondary="true") Add MAR
            div(v-show="period.hasMar")
              mar-record(:record="period.marRecord")
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
      todaysSchedule: [],
      currentDay: 0
    }
  },
  props: {
    ehrHelp: { type: Object },
    marToday: { type: Object }
  },
  computed: {
    refreshData () {
      // See EhrPageForm for more on why we have currentData
      this.refresh()
      // console.log('MarTodayContent refreshData', this.schedule)
      return this.todaysSchedule
    }
  },
  methods: {
    openMarDialog (period) {
      console.log('this.$refs.refMarDialog',this.$refs.refMarDialog)
      console.log('period >> ', period.marRecords)
      this.$refs.refMarDialog.openMarDialog(period)
    },
    showButton (period) {
      console.log('ShowButton >> ', period)
      console.log('this.ehrHelp.showTableAddButton() >> ', this.ehrHelp.showTableAddButton())
      console.log('period.hasMar', period.hasMar)
      return this.ehrHelp.showTableAddButton() && !period.hasMar
    },
    saveMar (mar) {
      let help = new MarHelper(this.ehrHelp)
      console.log('help >> ', help)
      console.log('mar >> ', mar)
      help.saveMarDialog(mar).then((res) => {
        this.$refs.refMarDialog.closeDialog()
      })
    },
    refresh () {
      if(this.ehrHelp){
        let help = new MarHelper(this.ehrHelp)
        let marToday = this.marToday
        this.todaysSchedule = marToday.getTodaysSchedule(help.marRecords, help.theMedOrders)
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
  /*border: 1px solid red;*/
}
.errorMesageList {
  color: $error;
}
.period-column {
  flex: 0 0 20%;
}
.periodsList {
  border-bottom: 1px solid $grey40;
  margin-bottom: 2em;
  padding-bottom: 2em;
}
</style>