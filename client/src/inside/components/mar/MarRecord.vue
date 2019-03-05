<template lang="pug">
  div
    div Who administered: {{ record.whoAdministered }}
    div Scheduled time: {{ record.scheduledTime }}
    div Actual time: {{ record.actualTime }}
    med-list(:medsList="record.medications")
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
    margin-left: 30px;
  }
</style>