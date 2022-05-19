<template lang="pug">
  div(class="ehr-subgroup-wrapper")
    h4(v-if="subgroup.label") {{ subgroup.label }}
    div(v-for="child in subgroup.sgChildren")
      ehr-element-form(:elementKey="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
</template>

<script>
import EhrElementForm from './EhrElementForm'
export default {
  components: {
    EhrElementForm
  },
  props: {
    subgroup: {type: Object },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false}
  },
  methods: {
  },
}
</script>

<style lang="scss">
  @import '../../../scss/definitions';
</style>
