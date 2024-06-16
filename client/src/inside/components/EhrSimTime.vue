<template lang='pug'>
div
  div Date:  &nbsp;
    span(class='bold') {{ visitDayAndTime }} (Day {{visitDayNum}})
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { t18EhrFunctions } from '@/helpers/ehr-t18'
import { currentSimDayNumber, currentSimDayTime } from '@/helpers/date-helper'
export default {
  components: { UiInfo },
  data () {
    return {
    }
  },
  computed: {
    ehrText () { return t18EhrFunctions()},
    visitDayAndTime () { return currentSimDayTime() },
    visitDayNum () { return currentSimDayNumber() },
  }
}
</script>

<style scoped>

</style>
