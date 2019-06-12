<template lang="pug">
  div
    div {{ record.actualTime }} by {{ record.whoAdministered }}
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