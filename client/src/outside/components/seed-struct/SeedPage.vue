<template lang='pug'>
  div(class="seed-page")
    div(v-if='pageElement.isTable')
      seed-table(
        :pageKey="pageKey",
        :pageChildren="pageChildren",
        :pageElement='pageElement',
        :pageSeedData='pageSeedData'
      )
    div(v-if='pageElement.isPageForm')
      div(v-for='group in pageElement.ehr_groups')
        div(v-for='child in group.gChildren')
          seed-form-element(
            :element='getElement(child)',
            :seedElement='getSeedData(child)')
</template>

<script>
import EhrDefs from '@/helpers/ehr-defs-grid'
import SeedFormElement from '@/outside/components/seed-struct/SeedFormElement'
import SeedTable from '@/outside/components/seed-struct/SeedTable'
export default {
  components: { SeedFormElement, SeedTable },
  props: {
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
  },
  methods: {
    getElement (eKey) {
      return EhrDefs.getPageChildElement(this.pageKey, eKey)
    },
    getSeedData (eKey) {
      return this.pageSeedData[eKey]
    }
  }
}
</script>

<style lang="scss" scoped>
.seed-page{
  margin-bottom: 3rem;
}
</style>