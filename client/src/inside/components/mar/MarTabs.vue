<template lang="pug">
  div()
    tabs
      tab(:name="todayTabName", :selected="true")
        mar-today-content(:ehrHelp="ehrHelp", :marToday="marToday")
      tab(name="Summary")
        mar-summary(:ehrHelp="ehrHelp")
</template>

<script>
import MarSummary from './MarSummary'
import MarTodayContent from './MarTodayContent'
import Tabs from '../Tabs'
import Tab from '../Tab'
import MarToday from './mar-today'

export default {
  data () {
    return {
      marToday: {} // helper class
    }
  },
  components: {
    MarTodayContent,
    MarSummary,
    Tabs,
    Tab
  },
  props: {
    ehrHelp: { type: Object }
  },
  computed: {
    todayTabName () {
      return 'Today - Day ' + this.marToday.getCurrentDay()
    }
  },
  created: function () {
    this.marToday = new MarToday()
  }
}
</script>
