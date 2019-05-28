<template lang="pug">
  div(class="content")
    tabs
      tab(:name="todayTabName", :selected="true")
        div
          mar-today-content(:ehrHelp="ehrHelp", :marToday="marToday")
      tab(name="Summary")
        mar-summary(:ehrHelp="ehrHelp")
</template>

<script>
import MarSummary from './mar/MarSummary'
import MarTodayContent from './mar/MarTodayContent'
import Tabs from './Tabs'
import Tab from './Tab'
import MarToday from './mar/mar-today'

export default {
  name: 'home',
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
