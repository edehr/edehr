<template lang='pug'>
  div  Encounter day {{visitDay}} time {{visitTime}}
    ui-info(title="Simulation time", text="This is simulated visit day and time.")
</template>

<script>
import UiInfo from '@/app/ui/UiInfo'
export default {
  components: { UiInfo },
  props: {
    ehrData: { type: Object, default () { return {} } }
  },
  computed: {
    meta () { return this.ehrData.meta || {} },
    simTime () { return this.meta.simTime || {}},
    visitDay () { return this.simTime.visitDay},
    visitTime () { return this.simTime.visitTime}
  }
}
</script>

<style scoped>

</style>
