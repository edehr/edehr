<template lang='pug'>
div(style="width:100%;")
  div(class='devElement')
    dev-lab-test-element
  div(class='devElement')
    h2 Medication lookup
    ehr-element-medication(
      :tableKey="tableKey",
      :inputVal="inputVal",
      @selected='medSelected'
    )
    div medication value {{ medicationValue }}
</template>

<script>
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import DevLabTestElement from '@/inside/components/page/accessioning/DevLabTestElement.vue'
import EhrElementMedication from '@/inside/components/page/EhrElementMedication2.vue'

export default {
  components: { DevLabTestElement, EhrElementMedication },
  data () {
    return {
      elementDef: { },
      pageDataKey: 'medicationOrders',
      tableKey: 'table',
      elementKey: 'medication',
      inputVal: '',
      medicationValue: ''
    }
  },
  methods: {
    medSelected (medVal) {
      this.medicationValue = medVal
    }
  },
  mounted () {
    console.log('emit page refresh')
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
}
</script>

<style scoped>
.devElement {
  margin: 1rem;
  border: 1px solid blue;
}
</style>
