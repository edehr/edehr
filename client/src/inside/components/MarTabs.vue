<template lang="pug">
  div(class="content")
    tabs
      tab(name="Today", :selected="true")
        div
          mar-today-content(:marHelper="marHelper")
      tab(name="Summary")
        mar-summary(:marHelper="marHelper")

    div(style="display:none") {{refreshData}}
</template>

<script>
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton'
import MedList from './mar/MedList'
import MarHelper from './mar/mar-util'
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
      marHelper: undefined
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    refreshData () {
      // See EhrPageForm for more on why we have currentData
      console.log('MarTabs refreshData')
      this.refresh()
      return this.marRecords
    },
  },
  methods: {
    refresh () {
      if (this.marHelper) {
        this.marHelper.marRefresh()
        this.marRecords = this.marHelper.marRecords
      }
    }
  },
  mounted: function () {
    const _this = this
    this.marHelper = new MarHelper(this.ehrHelp)
    this.refreshEventHandler = function () {
      console.log('MarTabs PAGE_DATA_REFRESH_EVENT')
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
