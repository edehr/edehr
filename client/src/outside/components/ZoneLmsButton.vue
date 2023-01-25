<template lang='pug'>
  ui-button(class="zone-lms-button",
    v-on:buttonClicked="$emit('action')",
    :disabled='disabled',
    :title="title")
    fas-icon(v-for='icon in iconList', :key="icon", class="fa", :icon="icon", :class='iconClass')
    span(v-if="showLabels") &nbsp; {{text}}
</template>

<script>
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { UiButton },
  data () {
    return {
    }
  },
  props: {
    disabled: { type: Boolean },
    icon: {type: String},
    iconClass: {type: Object, default: undefined},
    icons: {type: Array},
    text: {type: String},
    title: {type: String}
  },
  computed: {
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    iconList () { return this.icon ? [ this.icon ] : this.icons}
  },
}
</script>
<style lang='scss' scoped>
@import '../../scss/definitions';
.zone-lms-button {
  box-shadow: 3px 3px 3px $grey20;
}
</style>
