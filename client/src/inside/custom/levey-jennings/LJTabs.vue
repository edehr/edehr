<template lang="pug">
  div
    tabs
      tab(name="Table data")
        ehr-page-element(:element="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      tab(name="Charts")
        l-j-charts(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import Tabs from '@/inside/components/Tabs.vue'
import Tab from '@/inside/components/Tab.vue'
import EhrPageElement from '@/inside/components/page/EhrPageElement.vue'
import { t18EhrText } from '@/helpers/ehr-t18'
import LJCharts from '@/inside/custom/levey-jennings/LJCharts.vue'

export default {
  components: {
    LJCharts,
    EhrPageElement,
    Tabs,
    Tab
  },
  data () {
    return {
    }
  },
  props: {
    pageDataKey: { type: String },
    tableDef: { type: Object },
    ehrHelp: { type: Object }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.mar },
    // activeTab () { return this.$store.getters['ehrPageTab/activeTab'](this.pageDataKey) },
    // tableDefs () {
    //   return EhrDefs.getPageTables(this.pageDataKey)
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
