<template lang='pug'>
div
  ehr-element-medication(
    :tableKey="tableKey",
    :inputVal="inputVal"
  )
</template>

<script>
import EhrElementCustomForm from '@/inside/components/page/EhrElementCustomForm.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrElementMedication from '@/inside/components/page/EhrElementMedication2.vue'

export default {
  components: { EhrElementMedication },
  data () {
    return {
      elementDef: { },
      pageDataKey: 'medicationOrders',
      tableKey: 'table',
      elementKey: 'medication',
      inputVal: ''
    }
  },
  mounted () {
    console.log('emit page refresh')
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
}
</script>

<style scoped>

</style>
