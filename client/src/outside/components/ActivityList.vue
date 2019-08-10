<template lang="pug">
  div
    div(class="activities", v-for="(activity, index) in activities")
      activity(:activityId="activity._id", :index="index")
</template>

<script>
import Activity from './Activity'

export default {
  name: 'ActivityList',
  components: {
    Activity
  },
  props: {
    activities: {type: Array}
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.activities {
  margin-bottom: 2rem; /* space between activities / class lists */
  background-color: $grey03;
  border: 1px solid $grey20;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
