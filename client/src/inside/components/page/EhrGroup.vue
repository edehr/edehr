<template lang="pug">
  div(class="ehr-group-wrapper")
    h3(v-if="group.label") {{ group.label }}
    div(v-for="child in group.gChildren", :key="forIndex(child)", class="ehr-group-for")
      ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp")
      ehr-element-form(v-else-if="child", :elementKey="child", :ehrHelp="ehrHelp")
      div(v-else) This group has an undefined element
</template>

<script>
import EhrEditControls from '../../components/EhrEditControls.vue'
import EhrSubGroup from './EhrSubGroup'
import EhrElementForm from './EhrElementForm'

export default {
  name: 'EhrPageForm',
  components: {
    EhrEditControls,
    EhrSubGroup,
    EhrElementForm
  },
  props: {
    group: {type: Object },
    ehrHelp: { type: Object }
  },
  computed: {
  },
  methods: {
    forIndex (child) {
      return (typeof element === 'string') ? child : child.elementKey
    },
    isSubgroup (element) {
      return element !== null && (typeof element === 'object')
    },
  },
}
</script>

<style lang="scss">
@import '../../../scss/definitions';
.ehr-group-wrapper {
  background-color: #E8E8E8;
  border: 1px solid #d3d3d3;
}
</style>
