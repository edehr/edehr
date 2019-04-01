// Custom EHR Vue component
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
    ehr-panel-content
      div(class="region ehr-page-content")
        // customization: page has no form, use custom component ...
        vitals(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
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
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrHelp from '../../helpers/ehr-helper'
import Vitals from '../components/Vitals'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'VitalSigns',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    Vitals
  },
  data: function () {
    return {
      pageDataKey: 'vitals',
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    }
  },
  created () {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey)
  }
  // Note we do not need before route leave handlers because there is no page form
}
</script>

<style lang="scss" scoped></style>
