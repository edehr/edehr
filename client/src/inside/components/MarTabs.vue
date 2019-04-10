<template lang="pug">
  div(class="content")
    tabs
      tab(name="Today", :selected="true")
        div
          mar-today-content(:ehrHelp="ehrHelp")
      tab(name="Summary")
        mar-summary(:ehrHelp="ehrHelp")
</template>

<script>
import MarSummary from './mar/MarSummary'
import MarTodayContent from './mar/MarTodayContent'
import Tabs from './Tabs'
import Tab from './Tab'

export default {
  name: 'home',
  components: {
    MarTodayContent,
    MarSummary,
    Tabs,
    Tab
  },
  props: {
    ehrHelp: { type: Object }
  }
}
</script>
