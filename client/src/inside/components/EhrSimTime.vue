<template lang='pug'>
  div  {{ehrText.simulationDayTimeView(visitDay, visitTime) }}
    ui-info(
      :title="ehrText.simulationDayTimeTitle",
      :text="ehrText.simulationDayTime")
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { t18EhrFunctions } from '@/helpers/ehr-t18'
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
    visitDay () { return this.$store.getters['visit/simDate']},
    visitTime () { return this.$store.getters['visit/simTime']}
  }
}
</script>

<style scoped>

</style>
