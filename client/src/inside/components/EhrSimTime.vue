<template lang='pug'>
  div  Simulation time {{visitTime}} day {{visitDay}}
</template>

<script>
export default {
  props: {
    ehrData: { type: Object }
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