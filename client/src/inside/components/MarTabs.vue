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
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton'
import MedList from './mar/MedList'
import MarSummary from './mar/MarSummary'
import MarTodayContent from './mar/MarTodayContent'
import Tabs from './Tabs'
import Tab from './Tab'

export default {
  name: 'home',
  components: {
    AppDialog,
    UiButton,
    MarTodayContent,
    MarSummary,
    MedList,
    Tabs,
    Tab
  },
  data () {
    return {
      marRecords: undefined
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
.medList {
  margin-left: 30px;
}
</style>
