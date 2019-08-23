// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This Psychosocial page is generated.
      p Label: Psychosocial history
      p Data Key: psychosocial
      p Component name: Psychosocial
      p Redirect: 
      p Route name: psychosocial
      p Full path: /ehr/patient/history/psychosocial
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Psychosocial',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'psychosocial'
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
