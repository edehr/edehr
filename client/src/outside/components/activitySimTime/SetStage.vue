<template lang='pug'>
div(class='sim-time-activity-control-tab-content')
  div Set Sim Timing to the stage you wish to have active for your class.
  sim-control-stages(
    :simStages='simStages',
    :activitySimTime='activitySimTime',
    :selectedKey='selectedKey',
    @selectRow='selectSimTime'
  )

</template>

<script>
import { Text } from '@/helpers/ehr-text'
import SimControlStages from '@/outside/components/activitySimTime/SimControlStages.vue'
import { makeSimTimeKey, splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'

export default {
  name: 'MinuteTimer',
  components: { SimControlStages },
  data () {
    return {
      selectedKey: '',
      text: Text.ACTIVITY_PAGE
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} },
    activitySimTime () { return this.activity.simTimeKey || '' },
    simStages () { return this.activity.simStages || [] },
  },
  methods: {
    selectSimTime ( simKey, stage ) {
      let [d, t] = splitSimTimeKey(simKey)
      let key = makeSimTimeKey(d, t)
      this.$store.dispatch('activityStore/simTimeKeyActivate', { activityId: this.activity.id, simTimeKey: key })
    },
  }
}
</script>

<style scoped>

</style>
