<template lang="pug">
  div pelem
    ehr-page-form(v-if="element.isPageForm", :form="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :theData="theData")
    div(v-else) ?Else page element {{ element}}
</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrPageTableStacked from '../tables/EhrPageTableStackedGrid'
import EhrPageTableVertical from '../tables/EhrPageTableVerticalGrid'
import EhrPageForm from './EhrPageForm'


export default {
  components: {
    EhrPageTableStacked,
    EhrPageTableVertical,
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
