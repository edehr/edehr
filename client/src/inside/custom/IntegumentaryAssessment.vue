// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    integumentary-content(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrHelpV2 from '../components/page/ehr-helper'
import IntegumentaryContent from './integumentary/IntegumentaryContent'

export default {
  components: { EhrPageFooter, IntegumentaryContent },
  data: function () {
    return {
      pageDataKey: 'integumentaryAssessment',
      ehrHelp: undefined
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey)
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
