<template lang="pug">
  div
    div {{ record.actualTime }} by {{ record.whoAdministered }}
    div {{ record.comment }}
</template>

<script>
export default {
  name: 'MarRecord',
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
