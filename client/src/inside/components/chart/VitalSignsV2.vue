// Custom EHR Vue component
<template lang="pug">
  div()
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      div(class="region ehr-page-content")
        vitals2(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelHeader from '../page/EhrPanelHeader.vue'
import EhrPanelContent from '../page/EhrPanelContent.vue'
import Vitals2 from './Vitals2'

export default {
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    Vitals2
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
    pageDef () {
      return this.ehrHelp.getPageDef(this.pageDataKey)
    }
  }
}
</script>

<style lang="scss" scoped></style>
