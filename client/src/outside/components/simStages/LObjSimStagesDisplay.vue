<template lang="pug">
div
  table(class="sim-table")
    thead
      tr(class="stageHeader")
        td Simulation Stages
        td Faculty notes
        td Student instructions
    tr(v-for='(stage, rowIndex) in simStages')
      td(class="stageButton") {{ stage.simKey }}
      td(class="stageButton") {{ stage.faculty }}
      td(class="stageButton") {{ stage.instructions }}
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    simStages () { return this.$store.getters['assignmentStore/simStages']}
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.stageHeader {
  background-color: $grey30;
  font-weight: bold;
}

.sim-table {
  width: 100%
}

</style>
