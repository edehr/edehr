<template lang="pug">
  div(class="ehr-subgroup-wrapper")
    h4(v-if="subgroup.label") {{ subgroup.label }}
    div(v-for="child in subgroup.sgChildren")
      ehr-element-form(:elementKey="child", :ehrHelp="ehrHelp", :theData="theData")
</template>

<script>
import EhrElementForm from './EhrElementForm'

export default {
  name: 'EhrPageForm',
  components: {
    EhrElementForm
  },
  data: function () {
    return {
      // theData: {}
    }
  },
  props: {
    subgroup: {type: Object },
    ehrHelp: { type: Object },
    theData: { type: Object },
  },
  computed: {
  },
  methods: {
    isSubgroup (element) {
      return element && typeof element === 'object'
    },
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
