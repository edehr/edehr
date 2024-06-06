<template lang='pug'>
div
  div Date:  &nbsp;
    span(class='bold') {{ visitDay }}T{{ visitTime }} (Day {{visitDayNum}})
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { t18EhrFunctions } from '@/helpers/ehr-t18'
import { currentSimDayNumber, currentSimTime, currentSimDayDate } from '@/helpers/date-helper'
export default {
  components: { UiInfo },
  data () {
    return {
    }
  },
  computed: {
    ehrText () { return t18EhrFunctions()},
    visitDay () { return currentSimDayDate() },
    visitDayNum () { return currentSimDayNumber() },
    visitTime () { return currentSimTime() }
  }
}
</script>

<style scoped>

</style>
