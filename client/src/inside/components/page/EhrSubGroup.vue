<template lang="pug">
  div(class="ehr-subgroup-wrapper")
    h4(v-if="subgroup.label") {{ subgroup.label }}
    div(v-for="child in subgroup.sgChildren")
      ehr-element-form(:elementKey="child", :ehrHelp="ehrHelp")
</template>

<script>
import EhrElementForm from './EhrElementForm'

export default {
  name: 'EhrPageForm',
  components: {
    EhrElementForm
  },
  props: {
    subgroup: {type: Object },
    ehrHelp: { type: Object }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  @import '../../../scss/definitions';
  .ehr-subgroup-wrapper {
    background-color: #cccccc;
    border: 1px solid #3b3108;
  }
</style>
