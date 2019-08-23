<template lang="pug">
  div
    h3(v-if="group.label") {{ group.label }}
    div(class="ehr-group-wrapper", :class="groupClass")
      div(v-for="child in group.gChildren")
        ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp", class="column1")
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
    groupClass () {
      return "grid-left-to-right-3"
    }
  },
  methods: {
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
  border: 1px solid green;
}

.grid-left-to-right-3 {
  display: grid;
  grid-gap: 1rem 2rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
}

.grid-left-to-right-5 {
  display: grid;
  grid-gap: 1rem 2rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
}

.grid-up-to-down {
  display: grid;
  grid-gap: 1rem 2rem;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
}

.grid-span-2-columns {
  grid-column: span 2;
}
</style>
