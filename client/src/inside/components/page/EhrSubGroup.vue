<template lang="pug">
  div
    h2(v-if="subgroup.label") {{ subgroup.label }}
    div(v-for="child in subgroup.sgChildren")
      ehr-form-element(:elementKey="child", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
</template>

<script>
import EhrFormElement from './EhrFormElement'

export default {
  name: 'EhrPageForm',
  components: {
    EhrFormElement
  },
  data: function () {
    return {
      // theData: {}
    }
  },
  props: {
    subgroup: {type: Object },
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

