<template lang="pug">
  div
    div By: {{ record.whoAdministered }} &nbsp; At: {{ record.actualTime }}
    med-list(class="medList", :medsList="record.medications")
    div {{ record.comment }}
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
    margin-left: 0;
  }
</style>