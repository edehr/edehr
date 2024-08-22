<template lang='pug'>
div(style="width:100%;")
  div(class='devElement')
    h2 Accessioning
    ehr-element-accession

</template>

<script>
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrElementAccession from '@/inside/components/page/accessioning/EhrElementAccession.vue'

export default {
  components: { EhrElementAccession },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
      isPageElement: true,
      isTableElement: false,
      tableKey: undefined,
      formKey: undefined,
      isEmbedded: false
    }
  },
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
