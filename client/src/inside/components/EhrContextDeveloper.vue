<template lang="pug">
  div(class="contextDeveloper")
    div(class="contextDeveloper_content columns")
      div(class="is-6 column")
        div(class="textField") Name: {{ sSeedContent.name }}
        div(class="textField") Version: {{ sSeedContent.version}}
        div(class="textField") Description: {{ sSeedContent.description}}
        div(class="textField") Return to  &nbsp;
          ui-link(:name="'developEhrData'") EHR seed list
        // div(class="textField") Ehr: {{ sSeedContent.ehrData}}
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'
import UiLink from '../../app/ui/UiLink'
import StoreHelper from '../../helpers/store-helper'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  components: { UiInfo, UiLink },
  computed: {
    sSeedContent () {
      return StoreHelper.getSeedContent()
    }
  },
  created: function () {
    console.log('EhrContextDeveloper created')
    /*
      Must wait for App to load auth before loading this component
     */
    this.refreshEventHandler = function () {
      console.log('EhrContextDeveloper refresh helper. Load seed')
      StoreHelper.loadDevelopingSeed(true)
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
PAGE_DATA_REFRESH_EVENT