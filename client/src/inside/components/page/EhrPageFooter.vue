<template lang="pug">
  div(class="ehr-page-footer ehr-footer-content")
    div {{ contentDate }} ({{ evVersion }})
    // div Page design last saved: {{ ehrHelp.getPageGeneratedDate() }}
</template>

<script>
import { formatTimeStr } from '@/helpers/ehr-utils'
import StoreHelper from '@/helpers/store-helper'

export default {
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    contentData () { return StoreHelper.getMergedData()},
    metaData () { return this.contentData.meta || {} },
    evVersion () { return this.metaData.ehrVersion  },
    contentDate () {
      let results = 'No page content'
      const pageStats = StoreHelper.hasDataOnPage(this.pageDataKey)
      const hasMerged = pageStats['hasMerged']
      if (hasMerged) {
        const mdata = StoreHelper.getMergedData()
        const ehrData = mdata[this.pageDataKey]
        let d = ehrData['lastUpdate']
        // console.log('last update data and time', ehrData, d)
        results ='Content last saved: ' + formatTimeStr(d)
      }
      return results
    },
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';

.ehr-footer-content{
  font-style: italic;
  margin-left: 1rem;
  margin-bottom: 1rem;
}
</style>
