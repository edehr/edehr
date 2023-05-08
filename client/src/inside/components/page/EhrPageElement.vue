<template lang="pug">
  div
    div(class="page-table-intro-text", v-if="element.tableLabel") {{ element.tableLabel }}
    ehr-page-form(v-if="element.isPageForm", :form="element", :ehrHelp="ehrHelp")
    ehr-page-table(v-else, :tableDef="element", :ehrHelp="ehrHelp")
    hr
</template>

<script>
import EhrPageTable from './EhrPageTable'
import EhrPageForm from './EhrPageForm'


export default {
  components: {
    EhrPageTable,
    EhrPageForm
  },
  data: function () {
    return {
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
.page-table-intro-text {
  margin-bottom: 1rem;
}
</style>
