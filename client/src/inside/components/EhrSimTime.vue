<template lang='pug'>
div
  div Date:  &nbsp;
    span(class='bold') {{ visitDay }}T{{ visitTime }} (Day {{visitDayNum}})
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { t18EhrFunctions } from '@/helpers/ehr-t18'
import StoreHelper from '@/helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { simDateCalc, currentSimDayNumber } from '@/helpers/date-helper'
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
      return simDateCalc(this.visitDayNum)
    },
    visitDayNum () { return currentSimDayNumber() },
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
