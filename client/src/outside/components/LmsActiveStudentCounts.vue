<template lang='pug'>
div
  h3 Active Student Counts - Last 12 months
  p.
    These numbers show how many students clicked on an EdEHR activity in your school's LMS. We only count the first time a student clicks on an activity. If they return to the same activity later, their visit is not counted again.
  table.activeCountTable
    thead
      tr
        th Year
        th Month
        th Count
    tbody
      tr(v-for='row in last12')
        td {{row.year}}
        td {{row.month}}
        td {{row.count}}


</template>

<script>
import TableSample from '@/outside/views/TableSample.vue'

export default {
  components: { TableSample },
  computed: {
    last12 () { return this.$store.getters['visit/activeStudentCount']}
  }
}
</script>

<style scoped>

.activeCountTable td {
  text-align: center;
  vertical-align: middle;
}
</style>
