<template lang="pug">
  div
    ehr-page-form(v-if="element.isPageForm", :form="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
    ehr-page-table(v-else, :tableDef="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrPageTable from './EhrPageTable'
import EhrPageForm from './EhrPageForm'


export default {
  components: {
    EhrPageTable,
    EhrPageForm,
    EhrDialogForm
  },
  data: function () {
    return {
      inputs: {}
    }
  },
  props: {
    element: { type: Object },
    ehrHelp: { type: Object },
    pageDataKey: {type: String},
    theData: { type: Object }
  },
  computed: {
  },
  methods: {
  },
  mounted: function () {
  },
  beforeDestroy: function () {
  }
}
</script>

<style lang="scss" scoped>
</style>
