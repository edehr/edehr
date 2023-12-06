
<template lang="pug">
div
  ehr-element-form(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
</template>

<script>
import EhrElementForm from '@/inside/components/page/EhrElementForm.vue'

const PAGE_KEY = 'allergies'
const FORM_KEY = 'pageForm'

export default {
  components: { EhrElementForm, },
  props: {
    elementKey: { type: String },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false }
  },
  provide () {
    return {
      isPageElement: true,
      isTableElement: false,
      formKey: FORM_KEY,
      pageDataKey: PAGE_KEY,
      tableKey: undefined,
      isEmbedded: false
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
