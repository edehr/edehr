<template lang='pug'>
div(class='accessionContainer')
  div {{ label }}
  lab-test-lookahead(@selected='labTestSelected', v-if="!viewOnly")
  lab-test-list(@removeTest='labTestRemove', :viewOnly='viewOnly')
</template>
<!--
This is the top level element for Ehr forms to both collect and display the collection in place.
The lab list element is also going to be used in the table row display area, and anywhere the test list needs to appear.
-->
<script setup>
// eslint-disable-next-line no-unused-vars
import LabTestLookahead from '@/inside/components/page/accessioning/LabTestLookahead.vue'
import LabTestList from '@/inside/components/page/accessioning/LabTestList.vue'
import { useMedLabTestList } from '@/inside/components/page/accessioning/labTestList'
const { addLabTest, initializeData, keyMap, removeLabTest } = useMedLabTestList()
/*
Define an event that is only using within this component. This may be the only way or it may be a
hacky way to have the functions in this script setup notify a method in the options api area about
a change to the data.
One benefit of the current design is that all changes are made by this component based on event
notifications from the "worker" components (the lookahead and the list)
 */
const emit = defineEmits(['labTestChange'])

// eslint-disable-next-line no-unused-vars
const labTestSelected = (labTest) => {
  addLabTest(labTest)
  emit('labTestChange', keyMap.value)
}

const labTestRemove = (labTest) => {
  removeLabTest(labTest)
  emit('labTestChange', keyMap.value)
}

/*
Expose initializeData to the options api below
 */
defineExpose({ initializeData })

</script>

<script>
import EhrElementCommon from '../EhrElementCommon'
import { t18ElementLabel } from '@/helpers/ehr-t18'
import { isObject } from '@/helpers/ehr-utils'

export default {
  extends: EhrElementCommon,
  data () {
    return {
    }
  },
  computed : {
    label () { return t18ElementLabel(this.element) },
  },
  methods: {
    updateInputValue (keyMap) {
      // the parent common element watches for a change to the input val and then updates the data ready for the db
      this.inputVal = keyMap
    },
    /**
     * When the form is opening the common element parent is given the initial value (from the db).
     * The parent element invokes this extended initialization method, and here we can initialize the
     * lab test list.  Need to handle the empty data case.
     * @param value
     */
    setInitialValueExtended (value) {
      this.initializeData(isObject(value) ? value : {})
    },
  },
  mounted () {
    this.$on('labTestChange', (data) => {
      this.updateInputValue(data)
    })
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
