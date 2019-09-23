// Custom EHR Vue component
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      vital-signs-v2(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(v-else)
      vital-signs-v1(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This is the customized Vital Signs page
      p Label: Vital signs
      p Data Key: {{pageDataKey}}
      p Component name: VitalSigns
      p Redirect: 
      p Route name: vital-signs
      p Full path: /ehr/current/vital-signs
</template>

<script>
import VitalSignsV1 from '../components/chart/VitalSignsV1'
import VitalSignsV2 from '../components/chart/VitalSignsV2'
import EhrDefs from '../../helpers/ehr-defs-grid'
import EhrHelp from '../../helpers/ehr-helper'
import EhrHelpV2 from '../components/page/ehr-helper'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  components: {
    VitalSignsV1,
    VitalSignsV2
  },
  data: function () {
    return {
      pageDataKey: 'vitals',
      ehrHelp: undefined
    }
  },
  computed: {
    isV2 () {
      return EhrDefs.isPageV2(this.pageDataKey)
    }
  },
  created () {
    if (this.isV2) {
      console.log('VitalSigns construct v2 helper')
      this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey, this.uiProps)
    } else {
      console.log('VitalSigns construct v1 helper')
      this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
    }
  },
  mounted: function () {
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
  // Note we do not need before route leave handlers because there is no page form
}
</script>

<style lang="scss" scoped></style>
