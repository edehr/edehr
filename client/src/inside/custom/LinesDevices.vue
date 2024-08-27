// Custom View
<template lang="pug">
  div(class="ehr-page")
    chest-tube-lines-content(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPageHelper from '../components/page/ehr-helper'
import ChestTubeLinesContent from '@/inside/custom/linesDevices/ChestTubeLinesContent.vue'
import EhrPageFooter from '@/inside/components/page/EhrPageFooter.vue'

export default {
  components: { EhrPageFooter, ChestTubeLinesContent },
  data: function () {
    return {
      pageDataKey: 'linesDevices',
      ehrHelp: undefined
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrPageHelper(this.pageDataKey)
  },
  // must declare beforeRouteLeave on the component that is routed
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>
