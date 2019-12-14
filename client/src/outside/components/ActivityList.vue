<template lang="pug">
  div
    div(class="activities", v-for="(activity, index) in activities")
      activity-list-item(:activityId="activity._id", :index="index")
</template>

<script>
import ActivityListItem from './ActivityListItem'

export default {
  components: {
    ActivityListItem
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
