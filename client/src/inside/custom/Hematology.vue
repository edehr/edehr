<template lang="pug">
  div(class="ehr-page")
    hematology-content(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrHelpV2 from '../components/page/ehr-helper'
import HematologyContent from '@/inside/custom/hematology/HematologyContent'

export default {
  components: { EhrPageFooter, HematologyContent },
  data: function () {
    return {
      pageDataKey: 'hematology',
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
