<template lang='pug'>
div(class='sim-time-activity-control-tab-content')
  div {{ text.WARNING_RESET_TITLE }}
  div {{ text.WARNING_RESET }}
  ui-button(@buttonClicked="promptReset") {{ text.RESET_BUTTON_LABEL }}
  ui-confirm(ref="confirmResetTimeControl", v-on:confirm="simTimeKeyClear", :saveLabel='text.RESET_BUTTON_LABEL')
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { Text } from '@/helpers/ehr-text'
import UiConfirm from '@/app/ui/UiConfirm.vue'

export default {
  components: { UiConfirm, UiButton },
  data () {
    return {
      text: Text.ACTIVITY_PAGE
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} }
  },
  methods: {
    promptReset () {
      this.$refs.confirmResetTimeControl.showDialog('Reset time control', 'Do you want to stop using SimTiming and return to the default approach where students can adjust the simulation time?')
    },
    simTimeKeyClear () {
      this.$store.dispatch('activityStore/simTimeKeyClear', { activityId: this.activity.id })
    },
  }
}
</script>

<style scoped>

</style>
