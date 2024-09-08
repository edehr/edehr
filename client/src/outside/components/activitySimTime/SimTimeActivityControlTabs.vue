<template lang='pug'>
div
  div
    button(v-for='{n,c} in tabs', @click="activate(c)", :class="css(c)", class='tab') {{n}}
    // Display the active component
  div(class='tab-card')
    component(:is="activeComponent")
</template>

<script>
// Import child components
import SetClock from '@/outside/components/activitySimTime/SetClock.vue'
import SetTimer from '@/outside/components/activitySimTime/SetTimer.vue'
import ResetSimTiming from '@/outside/components/activitySimTime/ResetSimTiming.vue'
import SetStage from '@/outside/components/activitySimTime/SetStage.vue'

export default {
  components: {
    SetClock,
    SetTimer,
    ResetSimTiming,
    SetStage
  },
  data () {
    return {
      activeComponent: 'SetStage', // Default component
      tabs: [
        { n: 'Stages', c: 'SetStage'},
        { n: 'Clock', c: 'SetClock'},
        { n: 'Timer', c: 'SetTimer'},
        { n: 'Reset', c: 'ResetSimTiming'}
      ]
    }
  },
  methods: {
    activate ( c ) {
      this.activeComponent = c
    },
    css ( c ) {
      let obj = {}
      if (this.activeComponent === c) {
        obj.active = true
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

$active-clr: $brand-primary-dark;
$tab-clr: #E8F2FD;

.tab-card {
  border: 1px solid $active-clr;
  background-color: $tab-clr;
  min-height: 16rem;
}
.tab {
  width: 10rem;
}
.tab {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: $tab-clr;
  border-bottom: none;
  box-shadow: none;
}
.tab:focus {
  box-shadow: none !important;
}
.tab.active {
  border-color: $active-clr;
}

</style>
