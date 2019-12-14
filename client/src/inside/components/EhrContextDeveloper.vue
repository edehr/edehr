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

export default {
  name: 'EhrContextDeveloper',
  components: { UiInfo, UiLink },
  computed: {
    sSeedContent () {
      return StoreHelper.getSeedContent()
    }
  },
  mounted: function () {
    StoreHelper.loadDevelopingSeed(true)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
