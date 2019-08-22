<template lang="pug">
  div(class="ehr-group-wrapper")
    h3(v-if="group.label") {{ group.label }}
    div(v-for="child in group.gChildren", class="ehr-group-for")
      ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
      ehr-form-element(v-else, :elementKey="child", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
</template>

<script>
import EhrEditControls from '../../components/EhrEditControls.vue'
import EhrSubGroup from './EhrSubGroup'
import EhrFormElement from './EhrFormElement'

export default {
  name: 'EhrPageForm',
  components: {
    EhrEditControls,
    EhrSubGroup,
    EhrFormElement
  },
  data: function () {
    return {
      // theData: {}
    }
  },
  props: {
    group: {type: Object },
    ehrHelp: { type: Object },
    pageDataKey: {type: String },
    theData: { type: Object }
  },
  computed: {
  },
  methods: {
    isSubgroup (element) {
      return typeof element === 'object'
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
