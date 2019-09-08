// Custom EHR Vue component
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header V1 {{ uiProps.pageTitle }}
    ehr-panel-content
      div(class="region ehr-page-content")
        // customization: page has no form, use custom component ...
        vitals1(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
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
import EhrPanelHeader from '../EhrPanelHeader.vue'
import EhrPanelContent from '../EhrPanelContent.vue'
import Vitals1 from './Vitals1'

export default {
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    Vitals1
  },
  data: function () {
    return {
    }
  },
  props: {
    ehrHelp: {type: Object},
    pageDataKey: { type: String }
  },
  computed: {
    uiProps () {
      return this.ehrHelp.getPageDef(this.pageDataKey)
    }
  }
}
</script>

<style lang="scss" scoped></style>
