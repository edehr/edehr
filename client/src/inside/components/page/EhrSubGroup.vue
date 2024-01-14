<template lang="pug">
  div(class="ehr-subgroup-wrapper")
    h4(v-if="elementLabel(subgroup)") {{ elementLabel(subgroup) }}
    div(v-for="child in subgroup.sgChildren")
      ehr-element-form(:elementKey="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
</template>

<script>
import EhrElementForm from './EhrElementForm'
import { t18ElementLabel } from '@/helpers/ehr-t18'
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
    elementLabel (element) {
      console.log('sub group label for element ', element)
      return t18ElementLabel(element)
    }
  },
}
</script>

<style lang="scss">
  @import '../../../scss/definitions';
</style>
