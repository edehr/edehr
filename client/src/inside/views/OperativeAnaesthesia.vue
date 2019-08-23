// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This Operative Anaesthesia page is generated.
      p Label: Operative reports and anaesthesia record
      p Data Key: operationReports
      p Component name: OperativeAnaesthesia
      p Redirect: 
      p Route name: operative-anaesthesia
      p Full path: /ehr/chart/reports/operative-anaesthesia
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'OperativeAnaesthesia',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'operationReports'
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
