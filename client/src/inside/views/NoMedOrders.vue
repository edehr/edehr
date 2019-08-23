// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This No Med Orders page is generated.
      p Label: Orders
      p Data Key: nonmedOrders
      p Component name: NoMedOrders
      p Redirect: 
      p Route name: no-med-orders
      p Full path: /ehr/current/no-med/no-med-orders
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'NoMedOrders',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'nonmedOrders'
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
