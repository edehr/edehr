<template lang='pug'>
  div  {{ehrText.simulationDayTimeView(visitDay, visitTime) }}
    ui-info(
      :title="ehrText.simulationDayTimeTitle",
      :text="ehrText.simulationDayTime")
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { t18EhrFunctions } from '@/helpers/ehr-t18'
import StoreHelper from '@/helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
export default {
  components: { UiInfo },
  data () {
    return {
    }
  },
  props: {
    ehrData: { type: Object, default () { return {} } },
  },
  computed: {
    ehrText () { return t18EhrFunctions()},
    metaSimTime () { return StoreHelper.getMetaSimTime() },
    visitDay () {
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        return this.metaSimTime.visitDay
      }
      return this.$store.getters['visit/simDate']},
    visitTime () {
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        return this.metaSimTime.visitTime
      }
      return this.$store.getters['visit/simTime']}
  }
}
</script>

<style scoped>

</style>
