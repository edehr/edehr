<template lang='pug'>
  div  Encounter day {{visitDay}} time {{visitTime}}
    ui-info(title="Simulation time", :text="text.simulationDayTime")
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
import { ehrInfoText } from '@/appText'
export default {
  components: { UiInfo },
  data () {
    return {
      text: ehrInfoText
    }
  },
  props: {
    ehrData: { type: Object, default () { return {} } },
  },
  computed: {
    visitDay () { return this.$store.getters['visit/simDate']},
    visitTime () { return this.$store.getters['visit/simTime']}
  }
}
</script>

<style scoped>

</style>
