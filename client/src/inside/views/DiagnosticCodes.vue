// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This Diagnostic Codes page is generated.
      p Label: Diagnostic codes (ICD-10)
      p Data Key: diagnosticCodes
      p Component name: DiagnosticCodes
      p Redirect: 
      p Route name: diagnostic-codes
      p Full path: /ehr/external/diagnostic-codes
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'DiagnosticCodes',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'diagnosticCodes'
    }
  },
  computed: {
    uiProps () {
      console.log('get ui props for ', this.pageDataKey )
      return getPageDefinition(this.pageDataKey)
    },
    isV2 () {
      return this.uiProps.isV2
    }
  }
}
</script>

<style lang="scss" scoped></style>
