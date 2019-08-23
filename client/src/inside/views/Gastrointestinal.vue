// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey")
    div(style="display:none")
      p This Gastrointestinal page is generated.
      p Label: Gastrointestinal
      p Data Key: gastrointestinal
      p Component name: Gastrointestinal
      p Redirect: 
      p Route name: gastrointestinal
      p Full path: /ehr/current/assessments/gastrointestinal
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Gastrointestinal',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'gastrointestinal'
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
