<template lang='pug'>
div
  span {{ appType }} {{ appType === 'EHR' ? '(electronic health record system)' : appType === 'LIS' ? '(lab information system)': '' }}
</template>

<script>

export default {
  props: {
    appType: {type: String},
    showEx: {type: Boolean}
  },
}
</script>

<style scoped>

</style>
