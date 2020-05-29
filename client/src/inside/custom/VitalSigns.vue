// Custom page for Vital Signs
<template lang="pug">
  div(class="ehr-page")
    vital-signs-v2(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import VitalSignsV2 from '../components/chart/VitalSignsV2'
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrHelpV2 from '../components/page/ehr-helper'

export default {
  components: {
    VitalSignsV2,
    EhrPageFooter
  },
  data: function () {
    return {
      pageDataKey: 'vitals',
      ehrHelp: undefined
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey, this.uiProps)
  }
}
</script>

<style lang="scss" scoped></style>
