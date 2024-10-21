<template lang='pug'>
div(class='accessionContainer')
  div {{ label }}
  lab-test-lookahead(@selected='addTest', v-if="!viewOnly")
  lab-test-list(@removeTest='removeTest', :viewOnly='viewOnly', :tableData='containerInputValue')
</template>

<script>
import LabTestLookahead from '@/inside/components/page/accessioning/LabTestLookahead.vue'
import LabTestList from '@/inside/components/page/accessioning/LabTestList.vue'
import { t18ElementLabel } from '@/helpers/ehr-t18'
import { isObject } from '@/helpers/ehr-utils'
import { useMedLabTestList } from '@/inside/components/page/accessioning/labTestList'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
const { addLabTest, removeLabTest } = useMedLabTestList()

export default {
  data: function () {
    return {
    }
  },
  props: {
    containerInputValue: {type: [String, Object]},
    elementKey: { type: String },
    pageDataKey: { type: String },
    viewOnly: { type: Boolean, default: false }
  },
  components: { LabTestLookahead, LabTestList },
  computed : {
    element () {
      return EhrDefs.getPageChildElement(this.pageDataKey, this.elementKey)
    },
    label () { return t18ElementLabel(this.element) },
    keyMap () {
      return isObject(this.containerInputValue) ? this.containerInputValue : {}
    }
  },
  methods: {
    addTest (labTest) {
      const newMap = addLabTest(this.containerInputValue, labTest)
      this.$emit('update', newMap)
    },
    removeTest (labTest) {
      const newMap = removeLabTest(this.containerInputValue, labTest)
      this.$emit('update', newMap)
    },
  }
}
</script>

<style lang='scss'>
.accessionContainer {
  margin-bottom: 5px;
  div {
    margin-bottom: 5px;
  }
}
</style>
