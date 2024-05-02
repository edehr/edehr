<template lang='pug'>
div
  .admin-links
    div Links for {{ consumerId }}
    router-link(to="/consumers") Return to consumers page
    router-link(:to="{ name:'admin-consumer', query: { consumerId: consumerId }}") Consumer
    router-link(:to="{ name:'admin-activities', query: { consumerId: consumerId }}") Activities
    router-link(:to="{ name:'admin-seeds', query: { consumerId: consumerId }}") Case Studies
    router-link(:to="{ name:'admin-lobjlist', query: { consumerId: consumerId }}") Learning Objects
    router-link(:to="{ name:'admin-users', query: { consumerId: consumerId }}") Users

</template>

<script>
export default {
  props: {
    consumerId: { type: String }
  }
}
</script>

<style scoped lang='scss'>

.admin-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
