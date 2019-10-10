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
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

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
  },
  mounted: function () {
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
  // Note we do not need before route leave handlers because there is no page form
}
</script>

<style lang="scss" scoped></style>
