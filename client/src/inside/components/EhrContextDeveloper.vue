<template lang="pug">
  div(class="contextDeveloper")
    div CAN DELETE THIS COMPONENT
    div(class="columns")
      div(class="column is-2") Description:
      div(class="column is-10") {{ seedInfo.description}}
    div(class="columns")
      div(class="column is-2") Version:
      div(class="column is-10") {{ seedInfo.version}}
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'
import UiLink from '../../app/ui/UiLink'
import StoreHelper from '../../helpers/store-helper'

export default {
  components: { UiInfo, UiLink },
  computed: {
    seedInfo () {
      return StoreHelper.getSeedContent()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

</style>
