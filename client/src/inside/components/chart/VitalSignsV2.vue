// Custom EHR Vue component
<template lang="pug">
  div()
    ehr-panel-content
      div(class="region")
        vitals2(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelContent from '../page/EhrPanelContent.vue'
import Vitals2 from './Vitals2'

export default {
  components: {
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
