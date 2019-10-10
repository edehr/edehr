// Custom page for Discharge Summary
<template lang="pug">
  div(class="ehr-page")
    discharge-v2(:ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrHelpV2 from '../components/page/ehr-helper'
import EhrPageFooter from '../components/page/EhrPageFooter'
import DischargeV2 from '../components/discharge/DischargeV2'

export default {
  name: 'Discharge',
  components: {
    DischargeV2,
    EhrPageFooter
  },
  data: function () {
    return {
      pageDataKey: 'dischargeSummary',
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>
