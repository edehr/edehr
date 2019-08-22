<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      ehr-page-element(v-for="element in pageElements", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")

    div(class="assignment-save")
      div Page updated: {{ ehrHelp.formatDate(pageDef.generated) }}
      div Assignment last saved: {{ theData.lastUpdate }}
    div(style="display:block") {{currentData}}

</template>

<script>
import EhrPanelHeader from '../../components/EhrPanelHeader.vue'
import EhrPanelContent from '../../components/EhrPanelContent.vue'
import EhrPageElement from './EhrPageElement'
import EhrHelp from '../../../helpers/ehr-helper'
import { getPageDefinition } from '../../../helpers/ehr-defs'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'


export default {
  name: 'EhrPageTable',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageElement
  },
  data: function () {
    return {
      ehrHelp: undefined,
      theData: {}
    }
  },
  props: {
    pageDataKey: { type: String }
  },
  computed: {
    pageDef () {
      return getPageDefinition(this.pageDataKey)
    },
    pageElements () {
      return this.pageDef.pageElements
    },
    currentData () {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      this.refresh()
      // console.log('EHR Page Form: page current data', this.theData)
      return this.theData
    }
  },
  methods: {
    refresh () {
      let d = this.ehrHelp.getAsLoadedPageData(this.pageDataKey)
      // console.log('EhrPageForm refresh for page key', this.pageDataKey)
      // console.log('EhrPageForm refresh found data', d)
      this.theData = d
    }
  },
  created () {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  },
}
</script>

<style lang="scss">
  .assignment-save{
    font-style: italic;
    margin-top: 5em;
    margin-left: 1rem;
  }
</style>
