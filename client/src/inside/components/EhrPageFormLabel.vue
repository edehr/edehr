<template lang="pug">
  div
    label(v-if="showLabel", :class="css", v-html="label")
    ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'

export default {
  name: 'EhrPageFormLabel',
  components: { UiInfo},
  props: {
    showLabel: { type: Boolean },
    css: { type: String },
    label: { type: String },
    helperHtml: { type: String },
    helperText: { type: String }
  }
}
</script>

<style lang="scss">
// @import '../../scss/definitions';
</style>
