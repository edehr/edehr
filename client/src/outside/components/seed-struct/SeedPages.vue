<template lang='pug'>
  div
    div(v-for='peKey in pageElementKeys')
      seed-page(
        :ehrData="ehrData",
        :pageKey="pageKey",
        :pageChildren="pageChildren",
        :pageElement='pageElements[peKey]',
        :pageSeedData='pageSeedData')
</template>

<script>
import SeedPage from '@/outside/components/seed-struct/SeedPage'
import EhrData from '@/inside/components/page/ehr-data'

export default {
  components: { SeedPage },
  props: {
    ehrData: { type: Object },
    pageKey: { type: String },
    pageDef: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
    pageElements () {
      if (!this.pageKey) {
        // too early in page loading to have a page key
        return {}
      }
      // convert the object into an array and then sort based on the defined index.
      // pageElementIndex is the value under column fN in the inputs worksheet
      // const pElems = EhrDefs.getPageElements(this.pageKey)
      const pElems = this.pageDef.pageElements || {}
      let pgElems = Object.keys(pElems).map((k) => pElems[k]).sort( (a,b) => a.pageElementIndex - b.pageElementIndex)
      // Filter out tables that contain "v1" in their labels. These tables have been replaced with "v2" tables which may or may not have "v2" in their names. This is a crude way of doing the filtering.
      const pageData = EhrData.getMergedPageData(this.pageKey)
      pgElems = pgElems.filter( element => {
        let show = true
        if (element.label && element.label.toLowerCase().includes('v1')) {
          let data = pageData[element.tableKey]
          show = data && Array.isArray(data) && data.length > 0
          if (show) {
            // TODO after September 2023 add a popup dialog to notify the user that the v1 tables will be deprecated.
            // TODO after x months deprecate. Add a popup dialog to tell user they can get their v1 tables via contacting the edehr team.
            console.log('Found a V1 table with data. Will be deprecated sometime in 2023.', element.label)
          }
        }
        return show
      })
      return pgElems
    },
    pageElementKeys () { return Object.keys(this.pageElements) },
    pageChildren () { return this.pageDef.pageChildren},
  },
  methods: {
  }
}
</script>
