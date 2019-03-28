<template lang="pug">
  div
    div Administered by: {{ record.whoAdministered }}
    div Scheduled for: {{ record.scheduledTime }}
    div Actual time: {{ record.actualTime }}
    div Medications:
      med-list(class="medList", :medsList="record.medications")
</template>

<script>
import MedList from './MedList'
export default {
  name: 'MarRecord',
  components: {
    MedList
  },
  props: {
    record: { type: Object },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .medList {
    margin-left: 20px;
  }
</style>