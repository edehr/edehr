<template lang="pug">
  div
    assignments-listing
    current-lms-activity
</template>

<script>
import AssignmentsListing from '../components/AssignmentsListing'
import CurrentLmsActivity from '../components/CurrentLmsActivity'

export default {
  name: 'DevelopEhrData',
  components: {
    AssignmentsListing,
    CurrentLmsActivity
  }
}
</script>

<style lang="scss" scoped></style>
