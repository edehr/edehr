<template lang='pug'>
div
  ehr-element-custom-form(:element='elementDef',
    :elementKey='elementKey'
    )
</template>

<script>
import EhrElementCustomForm from '@/inside/components/page/EhrElementCustomForm.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

export default {
  components: { EhrElementCustomForm },
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
      pageDataKey: 'neurological',
      elementKey: 'mseCustomForm'
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
