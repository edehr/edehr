<template lang='pug'>
div(class="card-content")
  sim-time-status
  sim-time-activity-control-tabs

</template>

<script>
import SimTimeStatus from '@/outside/components/activitySimTime/SimTimeStatus.vue'
import SimTimeActivityControlTabs from '@/outside/components/activitySimTime/SimTimeActivityControlTabs.vue'
export default {
  components: { SimTimeActivityControlTabs, SimTimeStatus }

}
</script>

<style scoped>

</style>
