<template lang="pug">
  div(class="content")
    tabs
      tab(name="Today", :selected="true")
        h1 Medication Administration Records
        div(class="periodsList", v-for="period in periods")
          div {{ period.name }}
          div(class="medList", v-for="med in period.meds")
            div {{ medText(med) }}
      tab(name="Summary")
        h1 Medication Administration Summary
        div To be developed
        div(style="display:block") {{medicationOrders}}
        div(style="display:block") {{mars}}
</template>

<script>
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
import Tabs from './Tabs'
import Tab from './Tab'

export default {
  name: 'home',
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      theMedOrders: {},
      mars: {},
      schedules: ['breakfast',
        'midmorning',
        'lunch',
        'midafternoon',
        'dinner',
        'bedtime'],
      periods: {
        breakfast: { name: 'With breakfast', key: 'breakfast', meds: [] },
        midmorning: { name: 'Morning without food', key: 'midmorning', meds: [] },
        lunch: { name: 'With lunch', key: 'lunch', meds: [] },
        midafternoon: { name: 'Mid afternoon withoutf food', key: 'midafternoon', meds: [] },
        dinner: { name: 'With dinner', key: 'dinner', meds: [] },
        bedtime: { name: 'At bedtime', key: 'bedtime', meds: [] }
      }
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    medicationOrders () {
      // See EhrPageForm for more on why we have currentData
      this.refresh()
      return this.theMedOrders
    }
  },
  methods: {
    medText (med) {
      let space = ', '
      let extract = t => t && t.trim().length > 0 ? space + t : ''
      let markup = med.medication
      markup += extract(med.dose)
      markup += extract(med.route)
      markup += extract(med.type)
      markup += extract(med.notes)
      return markup
    },
    refresh () {
      this.theMedOrders = this.ehrHelp.getAsLoadedPageData('medicationOrders') //this.pageDataKey)
      let list = this.theMedOrders.table
      let schedules = this.schedules
      let periods = this.periods
      console.log('what is in list', list)
      if (list) {
        list.forEach(med => {
          console.log('found a med', med)
          let name = med.medication
          schedules.forEach( key => {
            if(med[key]) {
              periods[key].meds.push(med)
            }
          })
        })
      }
      this.mars = this.ehrHelp.getAsLoadedPageData(this.pageDataKey)
    }
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
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

<style lang="scss" scoped>
.medList {
  margin-left: 30px;
}
</style>
