// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This Musculoskeletal page is generated.
      p Label: Musculoskeletal assessment
      p Data Key: musculoskeletal
      p Component name: Musculoskeletal
      p Redirect: 
      p Route name: musculoskeletal
      p Full path: /ehr/current/assessments/musculoskeletal
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Musculoskeletal',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'musculoskeletal'
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
