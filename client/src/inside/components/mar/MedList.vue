<template lang="pug">
  div
    div(class="medList", v-for="med in medsList")
      div {{ med.medication }}, {{ med.dose }}, {{ med.route }}, {{ med.notes }}
      // div Reason: {{ med.reason }}
      // div Details: {{ med.details }}
      // div Schedule Type: {{ med.scheduleType }}
      // div Schedule: {{ med.scheduleTime }}
      // div Notes: {{ med.notes }}
</template>

<script>
export default {
  name: 'MedList',
  props: {
    medsList: { type: Array }
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